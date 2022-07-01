# Commits

Use conventional commits format for all commits across repository. Ideally, bot commits shpuld follow conventional format. The [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification is a lightweight convention on top of commit messages. It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of. This convention dovetails with SemVer, by describing the features, fixes, and breaking changes made in commit messages.

**Format**

```sh
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]

feat: allow overriding of the application config
^--^  ^------------^
|     |
|     +-> Summary in present tense.
|
+-------> Type: chore, docs, feat, fix, refactor, style, or test.
```

**Examples**

```sh
feat: allow provided config object to extend other configs
refactor!: drop support for Node 6
docs: correct spelling of CHANGELOG
feat(lang): add polish language
```
