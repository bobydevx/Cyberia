using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cyberia.Domain.Entities
{
    public class GraphicCard
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Brand { get; set; }
        public string Image { get; set; }
        public string Memory { get; set; }
        public string TypeMemory { get; set; }
        public string AssemblerType { get; set; }
    }
}
