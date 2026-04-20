package main

import (
	"be_latihan/config"
	"be_latihan/model"
	"be_latihan/router"
	"strings"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
)

func main() {
	app := fiber.New()
	
	// Basic CORS
	app.Use(cors.New(cors.Config{
		AllowOrigins: strings.Join(config.GetAllowedOrigins(), ","),
		AllowMethods: "GET,POST,PUT,DELETE,OPTIONS",
	}))

	app.Use(logger.New())

	config.InitDB()
	config.GetDB().AutoMigrate(&model.Mahasiswa{})
	router.SetupRoutes(app)

	app.Listen(":3000")
}
