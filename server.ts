import 'zone.js/dist/zone-node';
import {enableProdMode} from '@angular/core';

import {ngExpressEngine} from '@nguniversal/express-engine';
import {provideModuleMap} from '@nguniversal/module-map-ngfactory-loader';

import * as express from 'express';
import {join} from 'path';

const serverless = require('serverless-http');

enableProdMode();

const app = express();

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist/browser');

const {AppServerModuleNgFactory, LAZY_MODULE_MAP} = require('./server/main');

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', DIST_FOLDER);

app.get('*.*', express.static(DIST_FOLDER, {
  maxAge: '1y'
}));

app.get('*', (req, res) =>
{
    res.render('index', {req});
});

// app.listen(PORT, () =>
// {
//   console.log(`Node Express server listening on http://localhost:${PORT}`);
// });

module.exports = app;
module.exports.handler = serverless(app);
