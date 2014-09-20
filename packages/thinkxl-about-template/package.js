Package.describe({summary: "About Menu Item & Template"});

Package.onUse(function (api) {

  api.use(['telescope-lib', 'telescope-base'], ['client', 'server']);

  api.use([
    'jquery',
    'templating'
  ], 'client');

  api.add_files([
    'lib/client/routes.js',
    'lib/client/css/about-us.css',
    'lib/client/views/about-page.html'
    ], ['client']);

  api.export(['aboutMenuItem', 'viewParameters']);
});
