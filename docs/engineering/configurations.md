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
