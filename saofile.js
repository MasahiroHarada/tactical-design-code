module.exports = {
  prompts() {
    return []
  },
  actions: [
    {
      type: 'add',
      files: '**'
    },
    {
      type: 'move',
      patterns: {
        gitignore: '.gitignore',
        '_package.json': 'package.json'
      }
    }
  ],
  async completed() {
    this.gitInit()
    await this.npmInstall()
    this.showProjectTips()
  }
}
