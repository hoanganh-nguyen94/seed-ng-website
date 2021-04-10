import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
    {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
    {path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)},
    {path: '', redirectTo: 'blog', pathMatch: 'full'},

];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
