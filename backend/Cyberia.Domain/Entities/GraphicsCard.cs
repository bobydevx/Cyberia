using Cyberia.Domain.Enums;

namespace Cyberia.Domain.Entities
{
    public class GraphicsCard
    {
        public int Id { get; private set; }
        public string Name { get; private set; } = string.Empty;
        public string Brand { get; private set; } = string.Empty;
        public int MemoryGb { get; private set; }
        public MemoryType MemoryType { get; private set; }
        public string Assembler { get; private set; } = string.Empty;
        public ICollection<Cabin> Cabins { get; set; } = new List<Cabin>();

        public GraphicsCard(
          string name,
          string brand,
          int memoryGb,
          MemoryType memoryType,
          string assembler)
        {
            Name = name;
            Brand = brand;
            MemoryGb = memoryGb;
            MemoryType = memoryType;
            Assembler = assembler;
        }
    }
}
