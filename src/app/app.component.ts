import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {NavigationEnd, Router} from '@angular/router';

declare let ga: Function;
@Component({
    selector: 'app-root',
    template: `
		<div class="app-container">
			<h1>Angular Universal Demo utilizing Angular & Angular CLI</h1>
			<nav class="nav-links">
				<a routerLink="/">Home</a>
				<a routerLink="/husky">Husky</a>
				<a routerLink="/lazy">Lazy-loaded Route</a>
				<a routerLink="/lazy/nested">Nested Routes work too</a>
			</nav>
			<div class="router-container">
				<router-outlet></router-outlet>
			</div>
		</div>
    `,
    styles: [`
        :host {
            background: #f1f1f1;
            font-family: Roboto, "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
            font-display: swap;
        }

        .nav-links {
            background: #008591;
        }

        .nav-links a {
            color: #fff;
            display: inline-block;
            padding: 1rem;
            margin-right: 3rem;
            text-decoration: none;
            font-weight: bold;
            letter-spacing: 0.1rem;
        }

        .router-container {
            background-color: #4F8EDB;
            border: 0.5rem #00afc4 solid;
            padding: 2rem;
        }
    `]
})
export class AppComponent
{
    public constructor(private titleService: Title, public router: Router)
    {
        this.titleService.setTitle('Home page');
        this.router.events.subscribe(event =>
        {

            if (event instanceof NavigationEnd)
            {
                ga('set', 'page', event.urlAfterRedirects);
                ga('send', 'pageview');

            }
        });
    }

}
