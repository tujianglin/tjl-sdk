module.exports = {
  description: 'generate a function',
  prompts: [
    {
      type: 'input',
      name: 'path',
      message: '路径文件(英文): ',
      validate(value) {
        if (!value || value.trim === '') {
          return 'path is required';
        }
        return true;
      },
    },
    {
      type: 'input',
      name: 'reg',
      message: '目录名称: ',
      validate(value) {
        if (!value || value.trim === '') {
          return 'reg is required';
        }
        return true;
      },
    },
    {
      type: 'input',
      name: 'name',
      message: '方法名称(英文): ',
      validate(value) {
        if (!value || value.trim === '') {
          return 'name is required';
        }
        return true;
      },
    },
    {
      type: 'input',
      name: 'author',
      message: '创建人:',
      validate(value) {
        if (!value || value.trim === '') {
          return 'author is required';
        }
        return true;
      },
    }
  ],
  actions: (data) => {
    const dir = `${process.cwd()}/packages/${data.path}`
    const actions = [
      {
        type: 'add',
        path: `${dir}/index.ts`,
        templateFile: './function/index-ts.hbs',
        data: {
          path: data.path,
          reg: data.reg,
          name: data.name,
          author: data.author
        }
      }
    ]
    return actions;
  },
};
