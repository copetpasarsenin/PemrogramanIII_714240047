package router

import (
	"pertemuan4-backend/handler"
	"pertemuan4-backend/model"

	"github.com/gofiber/fiber/v2"
)

func SetupRoutes(app *fiber.App) {
	app.Get("/", func(c *fiber.Ctx) error {
		return c.JSON(model.Response{
			Message: "API Pertemuan4-backend aktif",
		})
	})

	mahasiswa := app.Group("/api/mahasiswa")

	mahasiswa.Get("/", handler.GetAllMahasiswa)
	mahasiswa.Get("/:npm", handler.GetMahasiswaByNPM)
	mahasiswa.Post("/", handler.InsertMahasiswa)
	mahasiswa.Put("/:npm", handler.UpdateMahasiswa)
	mahasiswa.Delete("/:npm", handler.DeleteMahasiswa)
	//jika menggunakan query
	mahasiswa.Get("/search", handler.GetMahasiswaByNPM)

}
