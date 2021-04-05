package domain

// DBConfig contains the database configuration
type DBConfig struct {
	Host     string `mapstructure:"host" default:"localhost"`
	User     string `mapstructure:"user" default:"postgres"`
	Password string `mapstructure:"password" default:""`
	Name     string `mapstructure:"name" default:"postgres"`
	Port     string `mapstructure:"port" default:"5432"`
	SslMode  string `mapstructure:"sslmode" default:"disable"`
	LogLevel string `mapstructure:"log_level" default:"info"`
}

type AppServiceConfig struct {
	Host string `mapstructure:"host" default:"http://localhost:3000"`
}

// NewRelic contains the New Relic go-agent configuration
type NewRelicConfig struct {
	Enabled bool   `mapstructure:"enabled" default:"false"`
	AppName string `mapstructure:"appname" default:"app"`
	License string `mapstructure:"license"`
}

type LogConfig struct {
	Level string `mapstructure:"level" default:"info"`
}

// Config contains the application configuration
type Config struct {
	Port       int              `mapstructure:"port" default:"8080"`
	DB         DBConfig         `mapstructure:"db"`
	NewRelic   NewRelicConfig   `mapstructure:"newrelic"`
	AppService AppServiceConfig `mapstructure:"app_service"`
	Log        LogConfig        `mapstructure:"log"`
}
