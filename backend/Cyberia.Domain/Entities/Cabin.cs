using Cyberia.Domain.Enums;

namespace Cyberia.Domain.Entities;

public class Cabin
{
    public int Id { get; set; }

    public string Name { get; set; } = string.Empty;

    public string ImageUrl { get; set; } = string.Empty;

    public decimal PricePerHour { get; set; }

    public CabinState Status { get; set; }

    public int GraphicsCardId { get; set; }
    public GraphicsCard GraphicsCard { get; set; } = null!;

    public int ProcessorId { get; set; }
    public Processor Processor { get; set; } = null!;

    public int RamId { get; set; }
    public Ram Ram { get; set; } = null!;

}