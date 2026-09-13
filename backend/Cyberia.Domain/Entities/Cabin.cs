using Cyberia.Domain.Enums;

namespace Cyberia.Domain.Entities;

public class Cabin
{
    public int Id { get; private set; }

    public string Name { get; private set; } = string.Empty;

    public string ImageUrl { get; private set; } = string.Empty;

    public decimal PricePerHour { get; private set; }

    public CabinState Status { get; private set; }

    public int GraphicsCardId { get; private set; }
    public GraphicsCard GraphicsCard { get; private set; } = null!;

    public int ProcessorId { get; private set; }
    public Processor Processor { get; private set; } = null!;

    public int RamId { get; private set; }
    public Ram Ram { get; private set; } = null!;

}