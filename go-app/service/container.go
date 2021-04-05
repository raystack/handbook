package service

import (
	"github.com/odpf/cookies/go-app/domain"
	"github.com/odpf/cookies/go-app/pkg/templates"
	"gorm.io/gorm"
)

type Container struct {
	TemplatesService domain.TemplatesService
}

func Init(db *gorm.DB) (*Container, error) {
	templatesService := templates.NewService(db)
	return &Container{
		TemplatesService: templatesService,
	}, nil
}

func (container *Container) MigrateAll(db *gorm.DB) error {
	err := container.TemplatesService.Migrate()
	if err != nil {
		return err
	}
	return nil
}
