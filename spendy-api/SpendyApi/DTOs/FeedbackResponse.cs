namespace SpendyApi.DTOs
{
    public class FeedbackResponse
    {
        public int Id { get; set; }
        public int TransactionId { get; set; }
        public string CorrectCategory { get; set; }
    }
}