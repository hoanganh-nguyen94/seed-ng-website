# Angular Website 

> Repository with Angular Universal Angular Service Worker

# Plans:

- [x] Angular 7
- [x] Server-side Rendering - Universal
- [x] Pre-rendering
- [ ] `document is not defined` and `window is not defined` - [here](./defined.md)
- [ ] work with cookies on the server `UniversalStorage`
- [ ] Uses **[ngx-meta](https://github.com/fulls1z3/ngx-meta)** for SEO (*title, meta tags, and Open Graph tags for social sharing*).
- [ ] uses ngx-translate to support internationalization (i18n)
- [ ] uses ORIGIN_URL - for absolute queries
- [x] @angular/service-worker(`ng add @angular/pwa --project universal-demo`)


## References
Official example in English: https://github.com/angular/universal-starter
Modules used for universal:
- https://github.com/angular/universal/tree/master/modules/aspnetcore-engine - web for .net core
- https://github.com/angular/universal/tree/master/modules/common - TransferHttpCacheModule for http request only server side and sync with TransferHttp for browser
- https://github.com/angular/universal/tree/master/modules/express-engine - Express Engine to run the rendering in node, in our application is used. Please note that the current version is not lower than 5.0.0-beta.5
- https://github.com/angular/universal/tree/master/modules/hapi-engine - Hapi Engine is an alternative engine for rendering. In the example is not used, in principle in the connection scheme does not differ from express-engine
- https://github.com/angular/universal/tree/master/modules/module-map-ngfactory-loader - the module search module for LazyLoading - the thing needed and used. Please note that the current version is not lower than 5.0.0-beta.5
- https://scotch.io/tutorials/integrating-google-analytics-with-angular-2 
