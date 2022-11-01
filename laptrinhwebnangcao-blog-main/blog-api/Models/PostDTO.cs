namespace blog_api.Models
{
  public class PostDTO
  {
    public long Id { get; set; }
    public string? Title { get; set; }
    public string? Content { get; set; }
  }
}