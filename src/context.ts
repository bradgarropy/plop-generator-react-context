const context = {
    description: "⚛ react context",
    prompts: [
        {
            type: "input",
            name: "name",
            message: "context name",
        },
    ],
    actions: [
        {
            type: "append",
            path: "src/context/index.ts",
            templateFile: "./templates/context/index.hbs",
        },
        {
            type: "add",
            path: "src/context/{{pascalCase name}}.tsx",
            templateFile: "./templates/context/context.hbs",
        },
        {
            type: "append",
            path: "src/hooks/index.ts",
            templateFile: "./templates/hooks/index.hbs",
        },
        {
            type: "add",
            path: "src/hooks/use{{pascalCase name}}/index.ts",
            templateFile: "./templates/hooks/hook/index.hbs",
        },
        {
            type: "add",
            path: "src/hooks/use{{pascalCase name}}/use{{pascalCase name}}.ts",
            templateFile: "./templates/hooks/hook/hook.hbs",
        },
        {
            type: "add",
            path: "src/hooks/use{{pascalCase name}}/use{{pascalCase name}}.test.ts",
            templateFile: "./templates/hooks/hook/hook.test.hbs",
        },
    ],
}

export default context
