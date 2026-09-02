using Cyberia.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;


namespace Cyberia.Infrastructure.Configurations
{
    public class CabinConfiguration : IEntityTypeConfiguration<Cabin>
    {
        public void Configure(EntityTypeBuilder<Cabin> builder)
        {
            // Cabin
            //modelBuilder.Entity<Cabin>().HasKey()

            builder.ToTable("cabins");

            builder.HasKey(c => c.Id);

            builder.Property(c => c.Name)
                .HasMaxLength(100)
                .IsRequired();


            builder.Property(c => c.Image)
                .IsRequired();

            builder.Property(c => c.PricePerHour)
                .HasPrecision(10, 2)
                .HasColumnName("price_per_hour")
                .IsRequired();


            builder.Property(c => c.Status)
                .IsRequired();

            // Relationships

            builder.HasOne(c => c.GraphicCard)
                .WithMany(g => g.Cabins)
                .HasForeignKey(c => c.GraphicCardId);

            builder.HasOne(c => c.Processor)
                .WithMany(p => p.Cabins)
                .HasForeignKey(c => c.ProcessorId);

            builder.HasOne(c => c.Ram)
                .WithMany(r => r.Cabins)
                .HasForeignKey(c => c.RamId);
        }
    }
}
