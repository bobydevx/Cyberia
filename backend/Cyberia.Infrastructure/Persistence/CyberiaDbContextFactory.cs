using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace Cyberia.Infrastructure.Persistence
{
    public class CyberiaDbContextFactory : IDesignTimeDbContextFactory<CyberiaDbContext>
    {
        public CyberiaDbContext CreateDbContext(string[] args)
        {

            var basePath = Path.Combine(
            Directory.GetCurrentDirectory(),
            "..",
            "Cyberia.Api");

            var configuration = new ConfigurationBuilder()
             .SetBasePath(basePath)
             .AddJsonFile("appsettings.json", optional: true)
             .AddJsonFile("appsettings.Development.json", optional: false)
             .Build();


            var connectionString =
                configuration.GetConnectionString("DefaultConnection");

            var optionsBuilder = new DbContextOptionsBuilder<CyberiaDbContext>();

            optionsBuilder.UseSqlServer(connectionString);
            return new CyberiaDbContext(optionsBuilder.Options);
        }
    }
}
