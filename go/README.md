# Go

This repository holds the ODPF Go Style Guide, which documents patterns and conventions used in Go code across ODPF products.

## Style Guides

We follow following style guide curated by some amazing folks around the world. 

- [Effective Go](https://golang.org/doc/effective_go)
- [Uber Go Style Guide](https://github.com/uber-go/guide/blob/master/style.md)

## Code Review

We follow the common principles of [Go Code Review Comments](https://github.com/golang/go/wiki/CodeReviewComments).


## Naming

Readability is the defining quality of good code. Good names are critical to readability. Good names Consistent (easy to guess), Short (easy to type), and Accurate (easy to understand).

### Case

- Names in Go should use MixedCase. 
- Do not use names_with_underscores. 
- Acronyms should be all capitals, as in ServeHTTP and IDProcessor.

### Local variables

- Long names obscure what the code does. Always, try to keep local variables short. 
- Common variable/type combinations may use really short names. For example:
    - Prefer `i` to `index`.
    - Prefer `r` to `reader`.
    - Prefer `b` to `buffer`.

- Avoid redundant names, given their context:
    - Prefer count to `runeCount` inside a function named `RuneCount`.
    - Prefer `ok` to `keyInMap` in the statement

```go
v, ok := m[k]
```

### Parameters

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

### Return Values

Return values on exported functions should only be named for documentation purposes.

These are good examples of named return values:
```go
func Copy(dst Writer, src Reader) (written int64, err error)

func ScanBytes(data []byte, atEOF bool) (advance int, token []byte, err error)
```

### Receivers
Receivers are a special kind of argument.

By convention, they are one or two characters that reflect the receiver type,
because they typically appear on almost every line:
```go
func (b *Buffer) Read(p []byte) (n int, err error)

func (sh serverHandler) ServeHTTP(rw ResponseWriter, req *Request)

func (r Rectangle) Size() Point
```
Receiver names should be consistent across a type's methods.
(Don't use r in one method and rdr in another.)

### Exported package-level names

Exported names are qualified by their package names.

Remember this when naming exported variables, constants, functions, and types.

That's why we have `bytes.Buffer` and `strings.Reader`, not `bytes.ByteBuffer` and `strings.StringReader`.

# Interface Types
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
When an interface includes multiple methods, choose a name that accurately describes its purpose (examples: net.Conn, http.ResponseWriter, io.ReadWriter).


### Errors
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

### Packages
Choose package names that lend meaning to the names they export.

Steer clear of util, common, and the like.

### Import paths
The last component of a package path should be the same as the package name.
```go
"compress/gzip" // package gzip
```
Avoid stutter in repository and package paths:
```go
"code.google.com/p/goauth2/oauth2" // bad; my fault
```
For libraries, it often works to put the package code in the repo root:
```go
"github.com/golang/oauth2" // package oauth2
```
Also avoid upper case letters (not all file systems are case sensitive).


## References

- [Naming things in Go](https://talks.golang.org/2014/names.slide)