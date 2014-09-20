Package.describe({summary: "Custom Footer"});

Package.onUse(function (api) {

  api.use(['telescope-lib', 'telescope-base'], ['client', 'server']);

  api.use([
    'jquery',
    'templating'
  ], 'client');

  api.add_files([
    'lib/client/footer.js',
    'lib/client/css/footer.css',
    'lib/client/views/footer.html'
    ], ['client']);

  api.export(['customFooter', 'viewParameters']);
});
