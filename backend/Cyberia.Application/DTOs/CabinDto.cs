using Cyberia.Domain.Enums;

namespace Cyberia.Application.DTOs
{
    public class CabinDto
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public  string Image { get; set; } = string.Empty;
        public  double PricePerHour { get; set; }
        public  CabinState Status { get; set; }
        public  int GraphicCardId { get; set; }
        public  int ProcessorId { get; set; }
        public  int RamId { get; set; }
    }
}
