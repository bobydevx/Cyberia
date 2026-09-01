using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cyberia.Domain.Entities
{
    public class Processor
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Brand { get; set; }
        public string Socket { get; set; }
        public string Family { get; set; }
        public string Generation { get; set; }
        public bool IsGpuIntegrated { get; set; }
        public bool HaveHeatSink { get; set; }
        public int Cores { get; set; }
    }
}
