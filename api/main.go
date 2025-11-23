package main

import (
	"net/http"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	// Create a new Echo instance
	e := echo.New()

	// Allows ALL origins REMOVE LATER
	e.Use(middleware.CORS())
	e.Use(middleware.Logger())

	// Define the /api/hello route
	e.GET("/api/hello", func(c echo.Context) error {
		return c.JSON(http.StatusOK, map[string]string{
			"message": "hello world!",
		})
	})

	// Start server on port 1111
	e.Logger.Fatal(e.Start(":1111"))
}
