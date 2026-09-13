using Cyberia.Infrastructure.Persistence;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Cyberia.API.Controllers
{
    [Route("api/cabin")]
    [ApiController]
    public class CabinController : ControllerBase
    {
        private readonly CyberiaDbContext _context;
        public CabinController(CyberiaDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetCabins()
        {
            var cabins = _context.Cabins.ToList();
            return Ok(cabins);
        }

        [HttpGet("{id}")]
        public IActionResult GetCabinById([FromRoute] int id)
        {
            var cabin = _context.Cabins.Find(id);

            if(cabin == null)
            {
                return NotFound();
            }

            return Ok(cabin);
        }
    }
}
