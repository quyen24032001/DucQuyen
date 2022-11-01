namespace blog_api.Models
{
  public class Post {
    public long Id { get; set; }
    public string? Title {get; set;}
    public string? Content {get; set;}
    // public string createdAt {get; set;}
    // publishedAt, author, category, tag, slug, viewCount, comments, reactions, bookmark...
  }
}