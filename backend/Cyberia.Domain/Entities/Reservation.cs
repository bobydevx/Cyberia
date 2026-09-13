using Cyberia.Domain.Enums;

namespace Cyberia.Domain.Entities
{
    public class Reservation
    {
        public required int Id { get; set; }

        public required ReservationState Status { get; set; }

        public required DateTime StartDate;

        public required DateTime EndDate;

        public required int UserId { get; set; }
        public required User User { get; set; }

        public required int CabinId { get; set; }
        public required Cabin Cabin { get; set; }

        public decimal Price => Cabin.PricePerHour * (decimal)(EndDate - StartDate).TotalHours;
    }
}
