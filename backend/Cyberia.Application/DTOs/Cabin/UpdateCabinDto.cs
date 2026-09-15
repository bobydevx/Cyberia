using Cyberia.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cyberia.Application.DTOs.Cabin
{
    public class UpdateCabinDto
    {
        public string Name { get; set; } = string.Empty;
        public string ImageUrl { get; set; } = string.Empty;
        public decimal PricePerHour { get; set; }
        public CabinState Status { get; set; }
        public int GraphicsCardId { get; set; }
        public int ProcessorId { get; set; }
        public int RamId { get; set; }
    }
}
