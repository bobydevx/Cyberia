using Cyberia.Domain.Entities;
using Microsoft.EntityFrameworkCore;


namespace Cyberia.Infrastructure.Persistence
{
    public class CyberiaDbContext : DbContext
    {
        public DbSet<Cabin> Cabins { get; set; }
        public DbSet<Reservation> Reservations { get; set; }

        public CyberiaDbContext(DbContextOptions<CyberiaDbContext> options) : base(options)
        {
            
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(CyberiaDbContext).Assembly);
        }
    }
}
