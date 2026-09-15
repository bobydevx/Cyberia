using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Cyberia.Application.DTOs.Cabin;
using Cyberia.Domain.Entities;

namespace Cyberia.Infrastructure.Interface
{
    public interface ICabinRepository
    {
        Task<List<Cabin>> GetAllAsync();
        Task<Cabin?> GetByIdAsync(int id);
        Task<Cabin> CreateAsync(Cabin cabinModel);
        Task<Cabin?> UpdateAsync(int id, UpdateCabinDto cabinDto);
        Task<Cabin?> DeleteAsync(int id);
    }
}
