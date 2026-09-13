using Cyberia.Application.Interfaces;

namespace Cyberia.Application.Services
{
    public class CabinService
    {
        private readonly ICabinRepository _repo;

        public CabinService(ICabinRepository repo)
        {
            _repo = repo;
        }


    }
}
