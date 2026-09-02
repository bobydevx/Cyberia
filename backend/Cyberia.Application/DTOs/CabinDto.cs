using Cyberia.Domain.Entities;
using Cyberia.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cyberia.Application.DTOs
{
    public class CabinDto
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public required string Image { get; set; }
        public required double PricePerHour { get; set; }
        public required CabinState Status { get; set; }
        public required int GraphicCardId { get; set; }
        public required int ProcessorId { get; set; }
        public required int RamId { get; set; }
    }
}
