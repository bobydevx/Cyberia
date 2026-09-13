namespace Cyberia.Domain.Entities
{
    public class Processor
    {
        public int Id { get; private set; }

        public string Name { get; private set; } = string.Empty;

        public string Brand { get; private set; } = string.Empty;

        public string Socket { get; private set; } = string.Empty;

        public string Family { get; private set; } = string.Empty;

        public string Generation { get; private set; } = string.Empty;

        public bool HasIntegratedGpu { get; private set; }

        public bool IncludesHeatsink { get; private set; }

        public int CoreCount { get; private set; }

        public ICollection<Cabin> Cabins { get; private set; } = new List<Cabin>();

        public Processor(
               string name,
               string brand,
               string socket,
               string family,
               string generation,
               bool hasIntegratedGpu,
               bool includesHeatsink,
               int coreCount)
        {
            Name = name;
            Brand = brand;
            Socket = socket;
            Family = family;
            Generation = generation;
            HasIntegratedGpu = hasIntegratedGpu;
            IncludesHeatsink = includesHeatsink;
            CoreCount = coreCount;
        }
    }
}
