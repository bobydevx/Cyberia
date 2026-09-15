using Cyberia.Infrastructure.Interface;
using Cyberia.Infrastructure.Persistence;
using Cyberia.Infrastructure.Repositories;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Controllers
builder.Services.AddControllers();

// DbContext
builder.Services.AddDbContext<CyberiaDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"))
);

// Repositories

builder.Services.AddScoped<ICabinRepository, CabinRepository>();
// Add services to the container.
var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseHttpsRedirection();

app.MapGet(
    "/",
    () =>
    {
        return "Hello World!";
    }
);

app.MapControllers();

app.Run();
