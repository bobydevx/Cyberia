namespace Cyberia.Domain.Entities
{
    public class Ram
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public string Capacity { get; set; }
        public int Kits { get; set; }

        public ICollection<Cabin> Cabins { get; set; } = new List<Cabin>();

    }
}
