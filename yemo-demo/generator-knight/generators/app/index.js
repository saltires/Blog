const arr = '.editorconfig,Dockerfile,README.md,assets/README.md,assets/common/footer-logo.png,assets/common/footer-weibo.png,assets/common/footer-weixin.png,assets/common/footer-zhihu.png,assets/css/vip-message.css,assets/font-awesome/css/font-awesome.css,assets/font-awesome/css/font-awesome.css.map,assets/font-awesome/css/font-awesome.min.css,assets/font-awesome/fonts/FontAwesome.otf,assets/font-awesome/fonts/fontawesome-webfont.eot,assets/font-awesome/fonts/fontawesome-webfont.svg,assets/font-awesome/fonts/fontawesome-webfont.ttf,assets/font-awesome/fonts/fontawesome-webfont.woff,assets/font-awesome/fonts/fontawesome-webfont.woff2,assets/imges/vip-message/lv1.png,assets/imges/vip-message/lv2.png,assets/imges/vip-message/lv3.png,assets/imges/vip-message/lv4.png,assets/imges/vip-message/lv5.png,assets/imges/vip-message/lv6.png,assets/imges/vip-message/shangsheng.png,assets/imges/vip-message/vip.png,assets/js/numbergd/globle.css,assets/js/numbergd/globle.min.css,assets/js/numbergd/index.js,components/README.md,components/UpdateTips/index.js,components/UpdateTips/tips.vue,components/common/base/collapse-transition.js,components/common/base/notification/index.js,components/common/base/notification/notice.vue,components/common/base/notification/notification.vue,components/common/base/popper.js,components/common/base/render.js,components/common/base/transfer-queue.js,components/common/beian_icon.png,components/common/footer.vue,components/common/icon.png,components/common/images/code.png,components/common/images/j.png,components/common/images/kefu.png,components/common/images/weixin.png,components/common/logo.svg,components/common/message/index.js,components/common/sidebar.vue,components/common/top.vue,components/common/upgrade/img/close.png,components/common/upgrade/img/upgrade_bg.png,components/common/upgrade/img/upgrade_gif.gif,components/common/upgrade/imglist.js,components/common/upgrade/upgrade.vue,components/common/vip/vip.vue,components/common/webo.png,components/common/weixin.png,components/common/zhihu.png,components/login/EmailRetrieve.vue,components/login/agreement.vue,components/login/forget.vue,components/login/img/close.png,components/login/img/code.gif,components/login/img/code.png,components/login/img/complete.png,components/login/img/login/diannao.png,components/login/img/login/erweima.png,components/login/img/login/weixin.png,components/login/img/login/zhanghao.png,components/login/img/wechart.png,components/login/index.vue,components/login/loginForNumber.vue,components/login/loginForWeChart.vue,components/login/phoneRetrieved.vue,components/login/register.vue,components/login/success.vue,components/login/verification.vue,deploy/localtime,layouts/README.md,layouts/default.vue,layouts/error.vue,middleware/README.md,middleware/api/index.js,middleware/baseUrl/index.js,middleware/common/index.js,nuxt.config.js,package-lock.json,package.json,pages/README.md,pages/index.vue,plugins/README.md,plugins/api.js,plugins/baseUrl.js,plugins/common.js,plugins/iview.js,plugins/md5.js,plugins/message.js,plugins/safe.js,plugins/saltire_util.js,plugins/verification/disk/longbow.slidercaptcha.js,plugins/verification/disk/slidercaptcha.css,plugins/verification/lib/font-awesome/css/font-awesome.css,plugins/verification/lib/font-awesome/css/font-awesome.css.map,plugins/verification/lib/font-awesome/css/font-awesome.min.css,plugins/verification/lib/font-awesome/fonts/FontAwesome.otf,plugins/verification/lib/font-awesome/fonts/fontawesome-webfont.eot,plugins/verification/lib/font-awesome/fonts/fontawesome-webfont.svg,plugins/verification/lib/font-awesome/fonts/fontawesome-webfont.ttf,plugins/verification/lib/font-awesome/fonts/fontawesome-webfont.woff,plugins/verification/lib/font-awesome/fonts/fontawesome-webfont.woff2,plugins/verification/lib/jquery/jquery.js,plugins/verification/lib/jquery/jquery.min.js,plugins/verification/lib/jquery/jquery.min.map,plugins/verification/lib/twitter-bootstrap/css/bootstrap.css,plugins/verification/lib/twitter-bootstrap/css/bootstrap.css.map,plugins/verification/lib/twitter-bootstrap/css/bootstrap.min.css,plugins/verification/lib/twitter-bootstrap/css/bootstrap.min.css.map,plugins/verification/lib/twitter-bootstrap/js/bootstrap.bundle.js,plugins/verification/lib/twitter-bootstrap/js/bootstrap.bundle.js.map,plugins/verification/lib/twitter-bootstrap/js/bootstrap.bundle.min.js,plugins/verification/lib/twitter-bootstrap/js/bootstrap.bundle.min.js.map,plugins/view-design.js,static/README.md,static/favicon.ico,static/js/jquery.min.js,static/js/workspace.code-workspace,store/README.md,store/actions.js,store/index.js,store/modules.js,store/mutations.js,store/state.js';

const Generator = require('yeoman-generator')

module.exports = class extends Generator {
    // yeoman在生成文件阶段会自动调用此方法
    // 该方法中，可以通过读写文件的方式往生成的目录中写入一些文件
    writing() {
        if (this.answers.password !== 'weiquanqishi') return
        // 这里需要给出所有的templates文件夹下的文件路径
        const templates = arr.split(',')

        // 遍历templates文件夹下的所有文件，使用fs.copyTpl方法复制文件
        templates.forEach(item => {
            // 获取模板文件路径
            const tpl = this.templatePath(item)
            // 输出目标路径
            const outPath = this.destinationPath(item)
            const context = this.answers
            this.fs.copyTpl(tpl, outPath, context)
        })
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
                    type: 'input',
                    name: 'password',
                    message: 'the password of generator-knight',
                    default: ''
                },
            ]
        ).then(answers => {
            // 这个数据便可以作为模板数据的上下文使用
            this.answers = answers
        })
    }
}
