# Error Handling

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
