using Cyberia.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cyberia.Infrastructure.Persistence
{
    public class CyberiaDbContext : DbContext
    {
        public DbSet<Cabin> Cabins { get; set; }
        public DbSet<Reservation> Reservations { get; set; }

        public CyberiaDbContext(DbContextOptions<CyberiaDbContext> options) : base(options)
        {
            
        }
    }
}
