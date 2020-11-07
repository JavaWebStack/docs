export default {
    name: "docs",
    title: "Docs",
    content: require("./index.md").default,
    children: [
        {
            name: "http-server",
            title: "HTTP-Server",
            content: require("./orm/index.md").default,
            children: [
                {
                    name: "getting-started",
                    title: "Getting Started",
                    content: require("./orm/getting-started.md").default
                },
                {
                    name: "controller",
                    title: "Controller",
                    content: require("./orm/getting-started.md").default,
                    children: [
                        {
                            name: "getting-started",
                            title: "Getting Started",
                            content: require("./orm/getting-started.md").default
                        },
                        {
                            name: "annotations",
                            title: "Annotations",
                            content: require("./orm/getting-started.md").default,
                            children: []
                        }
                    ]
                },
                {
                    name:  "web-sockets",
                    title: "Web-Sockets",
                    content: require("./orm/getting-started.md").default,
                    children: [
                        {
                            name: "getting-started",
                            title: "Getting Started",
                            content: require("./orm/getting-started.md").default
                        }
                    ]
                }
            ]
        },
        {
            name: "web-framework",
            title: "Web-Framework",
            content: require("./orm/index.md").default,
            children: [
                {
                    name: "getting-started",
                    title: "Getting Started",
                    content: require("./orm/getting-started.md").default
                }
            ]
        },
        {
            name: "orm",
            title: "ORM",
            content: require("./orm/index.md").default,
            children: [
                {
                    name: "getting-started",
                    title: "Getting Started",
                    content: require("./orm/getting-started.md").default
                },
                {
                    name: "query-dsl",
                    title: "Query DSL",
                    content: require("./orm/query-dsl.md").default,
                    children: [
                        {
                            name: "getting-started",
                            title: "Getting Started",
                            content: require("./orm/getting-started.md").default
                        }
                    ]
                },
                {
                    name: "soft-deletes",
                    title: "Soft-Deletes",
                    content: require("./orm/soft-deletes.md").default
                },
                {
                    name: "config",
                    title: "ORMConfig",
                    content: require("./orm/config.md").default
                },
                {
                    name: "migrations",
                    title: "Migrations",
                    content: require("./orm/migrations.md").default
                },
                {
                    name: "observer",
                    title: "Observer",
                    content: require("./orm/observer.md").default
                },
                {
                    name: "dates",
                    title: "Auto-Dates",
                    content: require("./orm/dates.md").default
                },
                {
                    name: "type-mapping",
                    title: "Type Mapping",
                    content: require("./orm/type-mapping.md").default
                },
                {
                    name: "table-and-column-options",
                    title: "Table and Column Options",
                    content: require("./orm/table-and-column-options.md").default
                }
            ]
        }
    ]
}