// Package classification App.
//
// Documentation of our App API.
//
//     Schemes: http
//     BasePath: /
//     Version: 1.0.0
//     Host: localhost:3000
//
//     Schemes: http, https
//     Consumes:
//     - application/json
//
//     Produces:
//     - application/json
//
//     Security:
//     - basic
//
//    SecurityDefinitions:
//    basic:
//      type: basic
//
// swagger:meta
package swagger

import "embed"

//go:embed swagger.yaml
var swaggerFile embed.FS
