using Microsoft.AspNetCore.Mvc;
using SpendyApi.DTOs;
using SpendyApi.Models;
using SpendyApi.Persistence;

namespace SpendyApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FeedBackController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public FeedBackController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost("submit")]
        public async Task<IActionResult> SubmitFeedback([FromBody] FeedbackRequest request)
        {
            var feedback = new FeedBack
            {
                TransactionId = request.TransactionId,
                CorrectCategory = request.CorrectCategory
            };

            _context.FeedBacks.Add(feedback);
            await _context.SaveChangesAsync();

            var response = new FeedbackResponse
            {
                Id = feedback.Id,
                TransactionId = feedback.TransactionId,
                CorrectCategory = feedback.CorrectCategory
            };

            return Ok(response);
        }
    }
}
