using Cyberia.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Cyberia.Infrastructure.Configurations
{
    public class CabinConfiguration : IEntityTypeConfiguration<Cabin>
    {
        public void Configure(EntityTypeBuilder<Cabin> builder)
        {
            builder.ToTable("cabins");

            builder.HasKey(c => c.Id);

            builder.Property(c => c.Name).HasMaxLength(100).IsRequired();

            builder.Property(c => c.ImageUrl).IsRequired();

            builder
                .Property(c => c.PricePerHour)
                .HasPrecision(10, 2)
                .HasColumnName("price_per_hour")
                .IsRequired();

            builder.Property(c => c.Status).IsRequired();

            // Relationships

            builder
                .HasOne(c => c.GraphicsCard)
                .WithMany(g => g.Cabins)
                .HasForeignKey(c => c.GraphicsCardId)
                .IsRequired();

            builder
                .HasOne(c => c.Processor)
                .WithMany(p => p.Cabins)
                .HasForeignKey(c => c.ProcessorId)
                .IsRequired();

            builder
                .HasOne(c => c.Ram)
                .WithMany(r => r.Cabins)
                .HasForeignKey(c => c.RamId)
                .IsRequired();
        }
    }
}
