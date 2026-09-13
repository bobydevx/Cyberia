using Cyberia.Domain.Entities;


namespace Cyberia.Application.Interfaces
{
    public interface ICabinRepository
    {
        Task<IEnumerable<Cabin>> GetCabins();
        Task<Cabin?> GetByIdAsync(int id);
        Task<Cabin?> EditCabinById(int id, Cabin cabin);
        Task<Cabin?> CreateCabin(Cabin cabin);
        Task<bool> DeleteCabinById(int id);
    }
}

