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
        public string Image { get; set; }
        public double PricePerHour { get; set; }
        public CabinState Status { get; set; }
        public int GraphicCardId { get; set; }
        public GraphicCard GraphicCard { get; set; }
        public int ProcessorId { get; set; }
        public Processor Processor { get; set; }
        public int RamId { get; set; }
        public Ram Ram { get; set; }

    }
}
