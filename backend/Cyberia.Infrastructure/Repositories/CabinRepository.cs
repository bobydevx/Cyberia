using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Cyberia.Application.DTOs.Cabin;
using Cyberia.Domain.Entities;
using Cyberia.Infrastructure.Interface;
using Cyberia.Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;

namespace Cyberia.Infrastructure.Repositories
{
    public class CabinRepository : ICabinRepository
    {
        private readonly CyberiaDbContext _context;

        public CabinRepository(CyberiaDbContext context)
        {
            _context = context;
        }

        public async Task<Cabin> CreateAsync(Cabin cabinModel)
        {
            await _context.Cabins.AddAsync(cabinModel);
            await _context.SaveChangesAsync();
            return cabinModel;
        }

        public async Task<Cabin?> DeleteAsync(int id)
        {
            var cabinModel = await _context.Cabins.FirstOrDefaultAsync((c) => c.Id == id);

            if (cabinModel == null)
            {
                return null;
            }

            _context.Cabins.Remove(cabinModel);
            await _context.SaveChangesAsync();
            return cabinModel;
        }

        public async Task<List<Cabin>> GetAllAsync()
        {
            return await _context.Cabins.ToListAsync();
        }

        public async Task<Cabin?> UpdateAsync(int id, UpdateCabinDto cabinDto)
        {
            var cabinModel = await _context.Cabins.FirstOrDefaultAsync(c => c.Id == id);

            if (cabinModel == null)
            {
                return null;
            }

            cabinModel.Name = cabinDto.Name;
            cabinModel.Status = cabinDto.Status;
            cabinModel.ImageUrl = cabinDto.ImageUrl;
            cabinModel.PricePerHour = cabinDto.PricePerHour;
            cabinModel.RamId = cabinDto.RamId;
            cabinModel.ProcessorId = cabinDto.ProcessorId;
            cabinModel.GraphicsCardId = cabinDto.GraphicsCardId;

            await _context.SaveChangesAsync();
            return cabinModel;
        }

        public async Task<Cabin?> GetByIdAsync(int id)
        {
            return await _context.Cabins.FindAsync(id);
        }
    }
}
