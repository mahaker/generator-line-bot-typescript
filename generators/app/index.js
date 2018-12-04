var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
    }

    async prompting() {
        this.options = await this.prompt([{
            type    : 'input',
            name    : 'botName',
            message : `Your LINE Bot name`,
            default : this.appname // Default to current folder name
        }, {
            type    : 'input',
            name    : 'author',
            message : 'author name',
            default : ''
        }, {
            type    : 'input',
            name    : 'channelAccessToken',
            message : 'Your LINE Bot channelAccessToken',
            default : ''
        }, {
            type    : 'input',
            name    : 'channelSecret',
            message : 'Your LINE Bot channelSecret',
            default : ''
        }]);
    }

    writing() {
        this.fs.copyTpl(
            this.templatePath('**'),
            this.destinationPath(),
            {
                botName: this.options.botName,
                author: this.options.author
            }
        );
        this.fs.move(
            this.destinationPath('_gitignore'),
            this.destinationPath('.gitignore')
        );
    }

    install() {
        this.npmInstall();
    }
};
