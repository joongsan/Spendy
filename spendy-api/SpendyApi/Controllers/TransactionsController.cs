using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SpendyApi.Models;
using SpendyApi.Persistence;

namespace SpendyApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TransactionsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public TransactionsController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost("upload")]
        public async Task<IActionResult> UploadTransaction(Transaction transaction)
        {
            _context.Transactions.Add(transaction);
            await _context.SaveChangesAsync();
            return Ok(transaction);
        }

        [HttpGet]
        public async Task<IActionResult> GetTransactions()
        {
            var transactions = await _context.Transactions.ToListAsync();
            return Ok(transactions);
        }

        //[HttpGet("{id}")]
        //public IActionResult GetTransaction(int id)
        //{
        //    var transaction = _context.Transactions.Find(id);
        //    if (transaction == null)
        //    {
        //        return NotFound();
        //    }
        //    return Ok(transaction);
        //}

        //[HttpPut("{id}")]
        //public async Task<IActionResult> UpdateTransaction(int id, Transaction transaction)
        //{
        //    var transactionInDb = _context.Transactions.Find(id);
        //    if (transactionInDb == null)
        //    {
        //        return NotFound();
        //    }
        //    transactionInDb.Amount = transaction.Amount;
        //    transactionInDb.Category = transaction.Category;
        //    transactionInDb.Date = transaction.Date;
        //    await _context.SaveChangesAsync();
        //    return Ok(transactionInDb);
        //}

        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeleteTransaction(int id)
        //{
        //    var transaction = _context.Transactions.Find(id);
        //    if (transaction == null)
        //    {
        //        return NotFound();
        //    }
        //    _context.Transactions.Remove(transaction);
        //    await _context.SaveChangesAsync();
        //    return Ok(transaction);
        //}
    }
}
