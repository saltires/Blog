const Generator  = require('yeoman-generator')

module.exports = class extends Generator {
    // yeoman在生成文件阶段会自动调用此方法
    // 该方法中，可以通过读写文件的方式往生成的目录中写入一些文件
    writing() {
        // 获取模板文件路径
        const tpl = this.templatePath('foo.txt')
        // 输出目标路径
        const outPath = this.destinationPath('test.txt')
        // 模板数据上下文
        // this.answers来自问询阶段的用户输入
        const context = this.answers
        
        this.fs.copyTpl(tpl, outPath, context)
    }
    // yeoman在询问用户阶段会自动调用此方法
    prompting() {
        return this.prompt(
            [
                {
                    type: 'input',
                    name: 'name',
                    message: 'your project name',
                    default: 'test'
                },
                {
                    type: 'checkbox',
                    name: 'title',
                    message: 'your project title',
                    choices: ['战士','法师','盗贼'],
                    default: 'hhh'
                },
                {
                    type: 'list',
                    name: 'success',
                    message: 'your project success',
                    choices: ['list1','list2','list3'],
                    default: false
                }
            ]
        ).then(answers => {
            // 这个数据便可以作为模板数据的上下文使用
            this.answers = answers
        })
    }
}