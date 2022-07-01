---
id: introduction
slug: /
---

# Handbook

We want to make it as easy as possible for users to become ODPF contributors, so we created this handbook to help you get started. The ODPF team handbook is the central repository for how we build the product within ODPF community. You will find step-by-step instructions to contribute to development, documentation, and design. Handbook is open to the world and we welcome feedback. Please make a merge request to suggest improvements or add clarifications. Please use issues to ask questions.

## Roadmap

Roadmap is tracked in each repository documentation. Check [Optimus roadmap](https://odpf.github.io/optimus/roadmap/) as an example.

## Development

We follow following guidelines during development.

### Commit Messages

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

### Configurations

Each of the configs should be namespaced according to the role/usage/context that they have followed by the type/implementation of it. For example - for statsd url - statsd is an implementation for metric collection hence the config would look like metric.statsd.url
Any delimiters depending on the language/framework can be used. Like “.” or “\_” or “/” etc. Default would be `.`

| Property Name                                   | Namespace       | Type (optional) | Config Name                        |
| ----------------------------------------------- | --------------- | --------------- | ---------------------------------- |
| metric.statsd.url                               | metric          | statsd          | url                                |
| schema.proto.name                               | schema          | proto           | name                               |
| dlq.kafka.brokers                               | dlq             | kafka           | brokers                            |
| dlq.enable                                      | dlq             | -               | enable                             |
| source.kafka.consumer.config.auto.commit.enable | source          | kafka           | consumer.config.auto.commit.enable |
| schema.registry.stencil.urls                    | schema.registry | stencil         | urls                               |

These are just guidelines and might not be extensive enough to cover all use-cases. Please use this to give it a thought.

### Metrics

The metrics and labels must be compliant with the [Prometheus data model](https://prometheus.io/docs/concepts/data_model/#metric-names-and-labels).
The metric and label conventions presented in this document serve as both a;[style-guide](https://prometheus.io/docs/practices/naming/) and a collection of best practices.
