using Cyberia.API.Mappers;
using Cyberia.Application.DTOs.Cabin;
using Cyberia.Infrastructure.Interface;
using Cyberia.Infrastructure.Persistence;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Cyberia.API.Controllers
{
    [Route("api/cabin")]
    [ApiController]
    public class CabinController : ControllerBase
    {
        private readonly ICabinRepository _repo;

        public CabinController(ICabinRepository repo)
        {

            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetCabins()
        {
            var cabins = await _repo.GetAllAsync();
            var cabinsDto = cabins.Select((c) => c.toCabinDto());

            return Ok(cabins);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetCabinById([FromRoute] int id)
        {
            var cabin = await _repo.GetByIdAsync(id);

            if (cabin == null)
            {
                return NotFound();
            }

            return Ok(cabin.toCabinDto());
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateCabinDto cabinDto)
        {
            var cabinModel = cabinDto.toCabinFromCreateCabin();

            await _repo.CreateAsync(cabinModel);

            return CreatedAtAction(
                nameof(GetCabinById),
                new { id = cabinModel.Id },
                cabinModel.toCabinDto()
            );
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> Update(
            [FromBody] UpdateCabinDto cabinDto,
            [FromRoute] int id
        )
        {

            var cabinModel = await  _repo.UpdateAsync(id,cabinDto);

            if (cabinModel == null)
            {
                return NotFound();
            }


            return Ok(cabinModel.toCabinDto());
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            var cabinModel = await _repo.DeleteAsync(id);

            if (cabinModel == null)
            {
                return NotFound();
            }

            return NoContent();
        }
    }
}
