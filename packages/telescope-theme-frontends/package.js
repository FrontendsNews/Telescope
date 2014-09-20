Package.describe({summary: "Telescope Frontends theme"});

Package.on_use(function(api) {
  api.use(['telescope-theme-hubble'], ['client']);

  api.add_files([
    'lib/client/stylesheets/frontends.css'
    ], ['client']);
});
