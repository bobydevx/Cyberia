using Cyberia.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata;
using System.Text;
using System.Threading.Tasks;

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

        public double Price => Cabin.PricePerHour * (EndDate - StartDate).TotalHours;
    }
}
