module.exports = {
  name: 'crudular',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/crudular',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
