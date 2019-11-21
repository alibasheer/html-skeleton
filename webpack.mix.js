let mix = require('laravel-mix');


mix.sass('src/sass/style.scss', 'assets/css/style.css');
// mix.sass('src/sass/style-ar.scss', 'assets/css/style-ar.css');

mix.styles([
    'node_modules/bootstrap/dist/css/bootstrap.min.css',
    'node_modules/bootstrap-select-v4/dist/css/bootstrap-select.min.css',
    'vendor/fontawesome/css/all.min.css',
    'assets/css/style.css'
],  'style.css');

mix.scripts([
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
    'node_modules/bootstrap-select-v4/dist/js/bootstrap-select.min.js',
    'node_modules/jquery-validation/dist/jquery.validate.min.js',
    'assets/js/main.js'
], 'main.js');