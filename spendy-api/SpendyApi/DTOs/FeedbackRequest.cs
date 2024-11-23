namespace SpendyApi.DTOs
{
    public class FeedbackRequest
    {
        public int TransactionId { get; set; }
        public string CorrectCategory { get; set; }
    }
}