'use strict'
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator:app', () => {
    describe('default', () => {
        beforeAll(() => {
            jest.setTimeout(100000);
            return helpers.run(path.join(__dirname, '../generators/app')).withPrompts(
                {
                    botName: 'tmp',
                    author: '',
                }
            );
        });

        it('File exists', () => {
            assert.file([
                '.gitignore',
                'jest.config.js',
                'package.json',
                'README.md',
                'tsconfig.json',
                'tslint.json',
                'webpack.config.js',
                'src/app.ts',
                'src/server.ts',
                'test/server.spec.ts'
            ]);
        });

        it('package.json content', () => {
            assert.JSONFileContent('package.json', {
                name: 'tmp',
                author: ''
            });
        });

        it('README.md content', () => {
            assert.fileContent('README.md', '# tmp');
        });
    });

    describe('With botName and author', () => {
        beforeAll(() => {
            jest.setTimeout(100000);
            return helpers.run(path.join(__dirname, '../generators/app')).withPrompts(
                {
                    botName: 'bot with typescript',
                    author: 'mahaker',
                }
            );
        });

        it('File exists', () => {
            assert.file([
                '.gitignore',
                'jest.config.js',
                'package.json',
                'README.md',
                'tsconfig.json',
                'tslint.json',
                'webpack.config.js',
                'src/app.ts',
                'src/server.ts',
                'test/server.spec.ts'
            ]);
        });

        it('package.json content', () => {
            assert.JSONFileContent('package.json', {
                name: 'bot with typescript',
                author: 'mahaker'
            });
        });

        it('README.md content', () => {
            assert.fileContent('README.md', '# bot with typescript');
        });
    });
});
