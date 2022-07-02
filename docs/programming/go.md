# Go

This document outlines idiomatic conventions in Go code that we follow at ODPF. A lot of these are general guidelines for Go, while others extend upon external resources:

The goal of this guide is to manage this complexity by describing in detail the Dos and Don'ts of writing Go code across ODPF projects. These rules exist to keep the code base manageable while still allowing engineers to use Go language features productively.

## Style

We follow following styles guide curated by some amazing folks around the world.

- [Effective Go](https://golang.org/doc/effective_go)
- [Uber Go Style Guide](https://github.com/uber-go/guide/blob/master/style.md)

## Structure

- Try to ensure every package has a file with same name as the package which acts as the entry point for anyone looking to understand the code. For example, `post` package should have `post.go` that defines the `Post` type, `Store` interface.
- Try to ensure packages correspond to a specific domain and have well-defined responsibility. For example, prefer `post` over `services/`, etc.
- Interfaces are defined on the client side (e.g., `ResourceStore` interface is in `resource` package along with the resource-service which is the actual user of the store.).
- Mocks for interfaces are defined close to the interface definition in an isolated `mocks/` package.

#### `core/`

- This dir should contain domain packages with well defined responsibility.
- For example, a blogging application could have `post`, `user`, `comment`, etc. as the domain packages inside `core/`.
- Generated mocks for dependency interfaces can be inside `mocks/` package in the respective package. For example, `PostStore` mock can be inside the `post` package.

    <table>
    <thead><tr><th>Bad</th><th>Good</th></tr></thead>
    <tbody>
    <tr><td>

  ```plaintext
  + core/
  |--+ service/
  |--+ models/
  ```

    </td>
    <td>

  ```plaintext
  + core/
  |--+ post/
  |  |--+ mocks/
  |  |--+ post.go
  |--+ user/
  |--+ comment/
  ```

    </td></tr>
    </tbody>
    </table>

#### `internal/`

- This should be used for keeping packages that should not be imported by any other projects (e.g., `server`, `store`, etc.)

  ```plaintext
  |--+ internal/
  |  |--+ server/
  |  |  |--+ v1/
  |  |  |  |--+ read.go           {read api handlers (example only)}
  |  |  |  |--+ write.go          {write api handlers (example only)}
  |  |  |--+ server.go            {server setup, Serve() function, etc.}
  |  |--+ store/
  |  |  |--+ mongodb              {implement store interfaces using MongoDB}
  |  |  |--+ inmemory             {implement store interfaces using MongoDB}
  ```

⚠️ Note: `internal/` has a special implication for the Go compiler. Any package inside `internal/` will NOT be importable outside the go-module that contains it. [Reference](https://go.dev/doc/go1.4#internalpackages)

#### `pkg/`

- `pkg/` for truly reusable packages.
- Pakcages inside `pkg/` _MUST NOT_ import from other packages outside of `pkg/`.
- Another way to think of `pkg/` is: It is a container for packages that can be extracted into a separate re-usable library.

```plaintext
|--+ pkg/
|  |--+ logger/
|  |--+ telemetry/                  {NR, StatsD, opencensus integrations}
```

## Naming

Readability is the defining quality of good code. Good names are critical to readability. Good names Consistent (easy to guess), Short (easy to type), and Accurate (easy to understand).

#### Case

- Names in Go should use MixedCase.
- Do not use names_with_underscores.
- Acronyms should be all capitals, as in ServeHTTP and IDProcessor.

#### Local variables

- Long names obscure what the code does. Always, try to keep local variables short.
- Common variable/type combinations may use really short names. For example:

  - Prefer `i` to `index`.
  - Prefer `r` to `reader`.
  - Prefer `b` to `buffer`.

- Avoid redundant names, given their context:
  - Prefer count to `runeCount` inside a function named `RuneCount`.
  - Prefer `ok` (or `found`, `exists`) to `keyInMap` in the statement

```go
v, ok := m[k]
```

#### Parameters

Function parameters are like local variables, but they also serve as documentation.

Where the types are descriptive, they should be short:

```go
func AfterFunc(d Duration, f func()) *Timer

func Escape(w io.Writer, s []byte)
```

Where the types are more ambiguous, the names may provide documentation:

```go
func Unix(sec, nsec int64) Time

func HasPrefix(s, prefix []byte) bool
```

#### Return Values

Return values on exported functions should only be named for documentation purposes.

These are good examples of named return values:

```go
func Copy(dst Writer, src Reader) (written int64, err error)

func ScanBytes(data []byte, atEOF bool) (advance int, token []byte, err error)
```

When a function returs more than 1 values of same types, use naming:

```go
func AsInts(t time.Time) (sec, nsec int64)
```

#### Receivers

Receivers are a special kind of argument.

By convention, they are one or two characters that reflect the receiver type,
because they typically appear on almost every line:

```go
func (b *Buffer) Read(p []byte) (n int, err error)

func (sh serverHandler) ServeHTTP(rw ResponseWriter, req *Request)

func (r Rectangle) Size() Point
```

Receiver names should be consistent across a types' methods.
(Don't use `r` in one method and `rdr` in another.)

#### Exported package-level names

Exported names are qualified by their package names.

Remember this when naming exported variables, constants, functions, and types.

That's why we have `bytes.Buffer` and `strings.Reader`, not `bytes.ByteBuffer` and `strings.StringReader`.

#### Interface Types

Interfaces that specify just one method are usually just that function name with 'er' appended to it.

```go
type Reader interface {
    Read(p []byte) (n int, err error)
}
```

Sometimes the result isn't correct English, but we do it anyway:

```go
type Execer interface {
    Exec(query string, args []Value) (Result, error)
}
```

Sometimes we use English to make it nicer:

```go
type ByteReader interface {
    ReadByte() (c byte, err error)
}
```

When an interface includes multiple methods, choose a name that accurately describes its purpose (examples: `net.Conn`, `http.ResponseWriter`, `io.ReadWriter`).

#### Errors

Error types should be of the form FooError:

```go
type ExitError struct {
    ...
}
```

Error values should be of the form ErrFoo:

```go
var ErrFormat = errors.New("image: unknown format")
```

#### Packages

- Choose package names that lend meaning to the names they export.
- Use pakcages that closely match the domain. i.e., Instead of `services`, `models`, etc., use `user`, `article`, etc. This also forces contributors to think of anything they are adding in terms of the domain.
- Steer clear of util, common, and the like - These packages have no clear responsibilitiy defined and eventually become a dumping ground.

#### Import paths

The last component of a package path should be the same as the package name.

```go
"compress/gzip" // package gzip
```

Avoid stutter in repository and package paths:

```go
"code.google.com/p/goauth2/oauth2" // bad;
```

For libraries, it often works to put the package code in the repo root:

```go
"github.com/golang/oauth2" // package oauth2
```

Also avoid upper case letters (not all file systems are case sensitive).

## Testing

Table-driven testing makes the tests easy to understand, add new cases, etc.

Refer: https://dave.cheney.net/2019/05/07/prefer-table-driven-tests

## Guidelines

#### Avoid Pointers

Pointers can introduce subtle bugs (e.g., nil-dereference) if not used correctly.

#### As Receivers

Refer: https://github.com/golang/go/wiki/CodeReviewComments#receiver-type

#### As Arguments

Unless required for mutation or because of the embedded sync primitives, it is better to avoid pointers in function arguments.

> _Note on performance:_ Go compiler is smart enough to use stack-allocation for arguments when value types are used which is almost always more performant than pointers. [Reference](https://medium.com/@vCabbage/go-are-pointers-a-performance-optimization-a95840d3ef85)

## Code Review

We follow the common principles of [Go Code Review Comments](https://github.com/golang/go/wiki/CodeReviewComments).

## Error Handling

Sentinel error handling (i.e., `var ErrX = errors.New("failed to do x")`) provides limited opportunities to add relevant context to the error.

We can define custom immutable `Error` type like this:

```go
package errs

type Error struct {
    Code string
    Cause string
    Message string
}

func (e Error) Error() string { return e.Message }
```

We can pre-define common error templates:

```go
var ErrInvalid = Error{Code: "invalid", Message: "Request is not valid"}
```

For customising and adding context, immutable methods can be provided.

```go
func (e Error) WithCause(cause string) Error {
    // Note: `e` is a clone here.
    e.Cause = cause
    return e
}
```

These methods can be used at the actual error site as:

```go
func doSomething(req Request) error {
    if !req.HasValidID() {
        return errs.ErrInvalid.WithCause("request must have id")
    }

    // do doSomething
    return nil
}
```

Some succesful usages:

1. <https://github.com/spy16/enforcer/blob/master/errors.go>
2. <https://github.com/spy16/enforcer/blob/master/campaign.go>

## References

- [Naming things in Go](https://talks.golang.org/2014/names.slide)
