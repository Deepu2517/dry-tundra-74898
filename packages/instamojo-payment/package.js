Package.describe({
  name: 'instamojo:instamojo',
  version: '0.0.1',
  summary: 'Instamojo Payment gateway package for Meteor JS',
  git:'https://github.com/manu490/instamojo-payment',
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.5.1');
  api.use(['ecmascript','underscore', 'ejson']);
  api.use('http', { weak: true });
  api.mainModule('instamojo.js', 'server');

  //api.addFiles('instamojo.js', 'server');
  api.export('Instamojo', ["client", "server"]);
  api.export('HEADERS', "server");

});

Package.onTest(function(api) {
  api.use(['ecmascript', 'http']);
  api.use('tinytest');
  api.use('instamojo:instamojo');
  api.mainModule('instamojo-tests.js','server');
});
