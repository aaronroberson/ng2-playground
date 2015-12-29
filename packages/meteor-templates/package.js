Package.describe({
  name: 'aaronroberson:templates',
  version: '0.0.6',
  summary: 'HTML and Jade template processing for meteor',
  git: 'https://github.com/aaronroberson/meteor-templates',
  documentation: 'README.md'
});

Package.registerBuildPlugin({
  name: 'html-templates',
  sources: [
    'plugin/html-templates.js'
  ]
});

Package.registerBuildPlugin({
  name: 'jade-templates',
  sources: [
    'plugin/jade-templates.js'
  ],
  npmDependencies: {
    //'html-minifier': '1.0.0',
    jade: '1.11.0'
  }
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('isobuild:compiler-plugin@1.0.0');
});
