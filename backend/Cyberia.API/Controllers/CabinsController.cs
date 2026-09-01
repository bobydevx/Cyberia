using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Cyberia.Domain.Entities;
using Cyberia.Infrastructure.Persistence;

namespace Cyberia.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CabinsController : ControllerBase
    {
        private readonly CyberiaDbContext _context;

        public CabinsController(CyberiaDbContext context)
        {
            _context = context;
        }

        // GET: api/Cabins
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cabin>>> GetCabins()
        {
            return await _context.Cabins.ToListAsync();
        }

        // GET: api/Cabins/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Cabin>> GetCabin(int id)
        {
            var cabin = await _context.Cabins.FindAsync(id);

            if (cabin == null)
            {
                return NotFound();
            }

            return cabin;
        }

        // PUT: api/Cabins/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCabin(int id, Cabin cabin)
        {
            if (id != cabin.Id)
            {
                return BadRequest();
            }

            _context.Entry(cabin).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CabinExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Cabins
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Cabin>> PostCabin(Cabin cabin)
        {
            _context.Cabins.Add(cabin);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCabin", new { id = cabin.Id }, cabin);
        }

        // DELETE: api/Cabins/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCabin(int id)
        {
            var cabin = await _context.Cabins.FindAsync(id);
            if (cabin == null)
            {
                return NotFound();
            }

            _context.Cabins.Remove(cabin);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CabinExists(int id)
        {
            return _context.Cabins.Any(e => e.Id == id);
        }
    }
}
