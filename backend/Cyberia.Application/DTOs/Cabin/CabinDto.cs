using Cyberia.Domain.Enums;

namespace Cyberia.Application.DTOs.Cabin
{
    public class CabinDto
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public  string ImageUrl { get; set; } = string.Empty;
        public  decimal PricePerHour { get; set; }
        public  CabinState Status { get; set; }
        public  int GraphicsCardId { get; set; }
        public  int ProcessorId { get; set; }
        public  int RamId { get; set; }
    }
}
