using System.Security.Cryptography;
using System.Text;
using Microsoft.AspNetCore.Mvc;
using SpendyApi.DTOs;
using SpendyApi.Models;
using SpendyApi.Persistence;

namespace SpendyApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AuthController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequest request)
        {
            if (_context.Users.Any(u => u.Username == request.Username))
            {
                return BadRequest("Username already exists.");
            }

            var salt = GenerateSalt();
            var user = new User
            {
                Username = request.Username,
                PasswordHash = HashPassword(request.Password, salt),
                PasswordSalt = salt,
                Email = request.Email
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return Ok(user);
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequest request)
        {
            var userInDb = _context.Users.SingleOrDefault(u => u.Username == request.Username);
            if (userInDb == null || !VerifyPassword(request.Password, userInDb.PasswordHash, userInDb.PasswordSalt))
            {
                return Unauthorized();
            }
            return Ok(userInDb);
        }

        private static string GenerateSalt()
        {
            var saltBytes = new byte[16];
            using var rng = RandomNumberGenerator.Create();
            rng.GetBytes(saltBytes);
            return Convert.ToBase64String(saltBytes);
        }

        private static string HashPassword(string password, string salt)
        {
            using var sha256 = SHA256.Create();
            var saltedPassword = password + salt;
            var hashedBytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(saltedPassword));
            return BitConverter.ToString(hashedBytes).Replace("-", "").ToLower();
        }

        private static bool VerifyPassword(string enteredPassword, string storedPasswordHash, string storedSalt)
        {
            var enteredPasswordHash = HashPassword(enteredPassword, storedSalt);
            return enteredPasswordHash == storedPasswordHash;
        }
    }
}


