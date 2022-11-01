using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using blog_api.Models;

namespace PostApi.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class PostsController : ControllerBase
  {
    private readonly PostContext _context;

    public PostsController(PostContext context)
    {
      _context = context;
    }

    // GET: api/Posts
    [HttpGet]
    public async Task<ActionResult<IEnumerable<PostDTO>>> GetPosts()
    {
      return await _context.Posts
          .Select(x => ItemToDTO(x))
          .ToListAsync();
    }

    // GET: api/Posts/5
    [HttpGet("{id}")]
    public async Task<ActionResult<PostDTO>> GetPost(long id)
    {
      var Post = await _context.Posts.FindAsync(id);

      if (Post == null)
      {
        return NotFound();
      }

      return ItemToDTO(Post);
    }
    // PUT: api/Posts/5
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdatePost(long id, PostDTO PostDTO)
    {
      if (id != PostDTO.Id)
      {
        return BadRequest();
      }

      var Post = await _context.Posts.FindAsync(id);
      if (Post == null)
      {
        return NotFound();
      }

      Post.Title = PostDTO.Title;
      Post.Content = PostDTO.Content;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException) when (!PostExists(id))
      {
        return NotFound();
      }

      return NoContent();
    }
    // POST: api/Posts
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPost]
    public async Task<ActionResult<PostDTO>> CreatePost(PostDTO PostDTO)
    {
      var Post = new Post
      {
        Content = PostDTO.Content,
        Title = PostDTO.Title
      };

      _context.Posts.Add(Post);
      await _context.SaveChangesAsync();

      return CreatedAtAction(
          nameof(GetPost),
          new { id = Post.Id },
          ItemToDTO(Post));
    }

    // DELETE: api/Posts/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeletePost(long id)
    {
      var Post = await _context.Posts.FindAsync(id);

      if (Post == null)
      {
        return NotFound();
      }

      _context.Posts.Remove(Post);
      await _context.SaveChangesAsync();

      return NoContent();
    }

    private bool PostExists(long id)
    {
      return _context.Posts.Any(e => e.Id == id);
    }

    private static PostDTO ItemToDTO(Post Post) =>
        new PostDTO
        {
          Id = Post.Id,
          Title = Post.Title,
          Content = Post.Content
        };
  }
}