using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Cyberia.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class ModifiedEntitiesCabin : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_cabins_GraphicCard_GraphicCardId",
                table: "cabins");

            migrationBuilder.DropTable(
                name: "GraphicCard");

            migrationBuilder.RenameColumn(
                name: "IsGpuIntegrated",
                table: "Processor",
                newName: "IncludesHeatsink");

            migrationBuilder.RenameColumn(
                name: "HaveHeatSink",
                table: "Processor",
                newName: "HasIntegratedGpu");

            migrationBuilder.RenameColumn(
                name: "Cores",
                table: "Processor",
                newName: "CoreCount");

            migrationBuilder.RenameColumn(
                name: "Image",
                table: "cabins",
                newName: "ImageUrl");

            migrationBuilder.RenameColumn(
                name: "GraphicCardId",
                table: "cabins",
                newName: "GraphicsCardId");

            migrationBuilder.RenameIndex(
                name: "IX_cabins_GraphicCardId",
                table: "cabins",
                newName: "IX_cabins_GraphicsCardId");

            migrationBuilder.CreateTable(
                name: "GraphicsCard",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Brand = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MemoryGb = table.Column<int>(type: "int", nullable: false),
                    MemoryType = table.Column<int>(type: "int", nullable: false),
                    Assembler = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GraphicsCard", x => x.Id);
                });

            migrationBuilder.AddForeignKey(
                name: "FK_cabins_GraphicsCard_GraphicsCardId",
                table: "cabins",
                column: "GraphicsCardId",
                principalTable: "GraphicsCard",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_cabins_GraphicsCard_GraphicsCardId",
                table: "cabins");

            migrationBuilder.DropTable(
                name: "GraphicsCard");

            migrationBuilder.RenameColumn(
                name: "IncludesHeatsink",
                table: "Processor",
                newName: "IsGpuIntegrated");

            migrationBuilder.RenameColumn(
                name: "HasIntegratedGpu",
                table: "Processor",
                newName: "HaveHeatSink");

            migrationBuilder.RenameColumn(
                name: "CoreCount",
                table: "Processor",
                newName: "Cores");

            migrationBuilder.RenameColumn(
                name: "ImageUrl",
                table: "cabins",
                newName: "Image");

            migrationBuilder.RenameColumn(
                name: "GraphicsCardId",
                table: "cabins",
                newName: "GraphicCardId");

            migrationBuilder.RenameIndex(
                name: "IX_cabins_GraphicsCardId",
                table: "cabins",
                newName: "IX_cabins_GraphicCardId");

            migrationBuilder.CreateTable(
                name: "GraphicCard",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AssemblerType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Brand = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Image = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Memory = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TypeMemory = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GraphicCard", x => x.Id);
                });

            migrationBuilder.AddForeignKey(
                name: "FK_cabins_GraphicCard_GraphicCardId",
                table: "cabins",
                column: "GraphicCardId",
                principalTable: "GraphicCard",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
