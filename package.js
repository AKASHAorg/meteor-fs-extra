const version = '0.26.3';
const npmVersion = '0.26.2';
Package.describe({
  name: 'akasha:fs-extra',
  version: version,
  // Brief, one-line summary of the package.
  summary: 'fs-extra package wrapped for meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/AkashaProject/meteor-fs-extra',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});
Npm.depends({
  'fs-extra': npmVersion
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('fs-extra.js', 'server');
  api.export('Fse', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('akasha:fs-extra');
  api.addFiles('fs-extra-tests.js');
});
