package main

import (
	"pertemuan4-backend/config"
	"pertemuan4-backend/model"
	"pertemuan4-backend/router"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
)

func main() {
	app := fiber.New()
	app.Use(logger.New())

	config.InitDB()
	config.GetDB().AutoMigrate(&model.Mahasiswa{})
	router.SetupRoutes(app)

	app.Listen(":3000")
}
