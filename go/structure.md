# Project Structure Guidelines

- Try to ensure every package has a file with same name as the package which acts as the entry point for anyone looking to understand the code. For example, `post` package should have `post.go` that defines the `Post` type, `Store` interface.
- Try to ensure packages correspond to a specific domain and have well-defined responsibility. For example, prefer `post` over `services/`, etc.
- Interfaces are defined on the client side (e.g., `ResourceStore` interface is in `resource` package along with the resource-service which is the actual user of the store.).
- Mocks for interfaces are defined close to the interface definition in an isolated `mocks/` package.

## `core/`

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

## `internal/`

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

> ⚠️ Note: `internal/` has a special implication for the Go compiler. Any package inside `internal/` will NOT be importable outside the go-module that contains it. [Reference](https://go.dev/doc/go1.4#internalpackages)

## `pkg/`

- `pkg/` for truly reusable packages.
- Pakcages inside `pkg/` _MUST NOT_ import from other packages outside of `pkg/`.
- Another way to think of `pkg/` is: It is a container for packages that can be extracted into a separate re-usable library.

```plaintext
|--+ pkg/
|  |--+ logger/
|  |--+ telemetry/                  {NR, StatsD, opencensus integrations}
```
