module.exports = function (plop) {
    // controller generator
    plop.setGenerator('create_vue_component', {
        description: 'create a vue component',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'controller name please'
        }],
        actions: [{
            type: 'add',
            path: 'src/{{name}}.js',
            templateFile: 'plop-templates/controller.hbs'
        }]
    });
};