using Cyberia.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cyberia.Domain.Entities
{
    public class Cabin
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public required string Image { get; set; }
        public required double PricePerHour { get; set; }
        public required CabinState Status { get; set; }
        public required int GraphicCardId { get; set; }
        public required GraphicCard GraphicCard { get; set; }
        public required int ProcessorId { get; set; }
        public required Processor Processor { get; set; }
        public required int RamId { get; set; }
        public required Ram Ram { get; set; }

    }
}
