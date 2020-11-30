module.exports = plop => {
    plop.setGenerator('react_component', {
        description: '创建一个适用于React项目的基础组件',
        prompts: [
            {
                type: 'input',
                name: 'component_name',
                message: 'please input the name of coponent',
                default: 'component'
            }
        ],
        actions: [
            {
                type: 'add',
                path: 'src/components/{{component_name}}/{{component_name}}.js',
                templateFile: 'plop-template/component/component.js.hbs',
            },
            {
                type: 'add',
                path: 'src/components/{{component_name}}/{{component_name}}.css',
                templateFile: 'plop-template/component/component.css.hbs',
            },
            {
                type: 'add',
                path: 'src/components/{{component_name}}/{{component_name}}.test.js',
                templateFile: 'plop-template/component/component.test.hbs',
            }
        ]
    })
}