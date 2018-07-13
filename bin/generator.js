const _ = require('lodash');
const Ora = require('ora');
const Path = require('path');
const EJS = require('ejs');
const FS = require('fs');
const Shell = require('shelljs');
const Inquirer = require('inquirer');

const TemplatePath = Path.resolve(__dirname, './template');

const DestPath = Path.resolve(__dirname, '../src');

if (process.argv && process.argv[2]) {
  Generate(process.argv[2]);
} else {
  Inquirer.prompt([{
    type: 'input',
    name: 'name',
    message: '输入新组件名称:'
  }]).then(answer => {
    if (answer && answer.name) {
      Generate(answer.name);
    } else {
      process.exit(1);
    }
  });
}

function RenderJS(name) {
  return new Promise(resolve => {
    EJS.renderFile(`${TemplatePath}/js.ejs`, {
      name,
      UpperName: _.upperFirst(name)
    }, (err, content) => {
      if (err) {
        throw err;
      }
      resolve(content);
    });
  });
}

function RenderVue(name) {
  return new Promise(resolve => {
    EJS.renderFile(`${TemplatePath}/vue.ejs`, {
      name,
      UpperName: _.upperFirst(name)
    }, (err, content) => {
      if (err) {
        throw err;
      }
      resolve(content);
    });
  });
}

function RenderScss(name) {
  return new Promise(resolve => {
    EJS.renderFile(`${TemplatePath}/scss.ejs`, {
      name,
      UpperName: _.upperFirst(name)
    }, (err, content) => {
      if (err) {
        throw err;
      }
      resolve(content);
    });
  });
}

function RenderTestFile(name) {
  return new Promise(resolve => {
    EJS.renderFile(`${TemplatePath}/test.ejs`, {
      name,
      UpperName: _.upperFirst(name)
    }, (err, content) => {
      if (err) {
        throw err;
      }
      resolve(content);
    });
  });
}

function CreateFile(path,name, content){
  Shell.mkdir('-p',path);
  Shell.touch(`${path}${name}`);
  FS.writeFileSync(`${path}${name}`,content);
}

async function Generate(name) {
  if(FS.readdirSync(`${DestPath}/components/`).indexOf(name)!==-1){
    Ora().fail('组件已存在');
    process.exit();
  }

  const Content_JS = await RenderJS(name).catch(err => {
    throw err;
  });
  const Content_Vue = await RenderVue(name).catch(err => {
    throw err;
  });
  const Content_Scss = await RenderScss(name).catch(err => {
    throw err;
  });
  const Content_Test = await RenderTestFile(name).catch(err => {
    throw err;
  });
  CreateFile(`${DestPath}/components/${name}/`,'index.js',Content_JS);
  CreateFile(`${DestPath}/components/${name}/`,`_${name}.vue`,Content_Vue);
  CreateFile(`${DestPath}/styles/components/`,`_${name}.scss`,Content_Scss);
  CreateFile(Path.resolve(__dirname, '../__tests__/components'),`/${name}.test.js`,Content_Test);

  FS.appendFileSync(`${DestPath}/styles/components/index.scss`,`\n@import './_${name}.scss';`);
  Ora().succeed(`组件${name}创建成功`);
}