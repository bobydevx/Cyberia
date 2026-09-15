using Cyberia.Application.DTOs.Cabin;
using Cyberia.Domain.Entities;

namespace Cyberia.API.Mappers
{
    public static class CabinMapper
    {
        public static CabinDto toCabinDto(this Cabin cabinModel)
        {
            return new CabinDto
            {
                Id = cabinModel.Id,
                ImageUrl = cabinModel.ImageUrl,
                GraphicsCardId = cabinModel.GraphicsCardId,
                Name = cabinModel.Name,
                PricePerHour = cabinModel.PricePerHour,
                ProcessorId = cabinModel.ProcessorId,
                RamId = cabinModel.RamId,
                Status = cabinModel.Status,
            };
        }

        public static Cabin toCabinFromCreateCabin(this CreateCabinDto cabinModel)
        {
            return new Cabin
            {
                ImageUrl = cabinModel.ImageUrl,
                GraphicsCardId = cabinModel.GraphicsCardId,
                Name = cabinModel.Name,
                PricePerHour = cabinModel.PricePerHour,
                ProcessorId = cabinModel.ProcessorId,
                RamId = cabinModel.RamId,
                Status = cabinModel.Status,
            };
        }
    }
}
