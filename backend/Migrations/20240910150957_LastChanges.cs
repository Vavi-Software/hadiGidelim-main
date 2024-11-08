using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class LastChanges : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SingleBusinessUsers_BusinessModel_BusinessModelId",
                table: "SingleBusinessUsers");

            migrationBuilder.AlterColumn<int>(
                name: "BusinessModelId",
                table: "SingleBusinessUsers",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "PlacesToVisit",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(100)");

            migrationBuilder.AlterColumn<string>(
                name: "Content",
                table: "PlacesToVisit",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(1500)");

            migrationBuilder.AddColumn<DateTime>(
                name: "ClosingTime",
                table: "PlacesToVisit",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "OpeningTime",
                table: "PlacesToVisit",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<decimal>(
                name: "Price",
                table: "PlacesToVisit",
                type: "decimal(18,2)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddForeignKey(
                name: "FK_SingleBusinessUsers_BusinessModel_BusinessModelId",
                table: "SingleBusinessUsers",
                column: "BusinessModelId",
                principalTable: "BusinessModel",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SingleBusinessUsers_BusinessModel_BusinessModelId",
                table: "SingleBusinessUsers");

            migrationBuilder.DropColumn(
                name: "ClosingTime",
                table: "PlacesToVisit");

            migrationBuilder.DropColumn(
                name: "OpeningTime",
                table: "PlacesToVisit");

            migrationBuilder.DropColumn(
                name: "Price",
                table: "PlacesToVisit");

            migrationBuilder.AlterColumn<int>(
                name: "BusinessModelId",
                table: "SingleBusinessUsers",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "PlacesToVisit",
                type: "nvarchar(100)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<string>(
                name: "Content",
                table: "PlacesToVisit",
                type: "nvarchar(1500)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AddForeignKey(
                name: "FK_SingleBusinessUsers_BusinessModel_BusinessModelId",
                table: "SingleBusinessUsers",
                column: "BusinessModelId",
                principalTable: "BusinessModel",
                principalColumn: "Id");
        }
    }
}
