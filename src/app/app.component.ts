import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {NavigationEnd, Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';
import {GoogleTagManagerService} from 'angular-google-tag-manager';
import {HttpClient, HttpHeaders} from "@angular/common/http";

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
    `],
    providers: [GoogleTagManagerService]
})
export class AppComponent implements OnInit {
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            Accept: 'application/json',
        })
    };

    public constructor(
        private titleService: Title,
        public router: Router,
        private http: HttpClient,
        private gtmService: GoogleTagManagerService
    ) {

    }

    ngOnInit(): void {
        const httpOptions = {...this.httpOptions};

        this.http.post('https://cms-i18n.herokuapp.com/graphql', {
            query: `query SectionContents($sort: String, $limit: Int, $start: Int, $where: JSON, $publicationState: PublicationState, $locale: String) {
  response: sectionContents(
    sort: $sort
    limit: $limit
    start: $start
    where: $where
    publicationState: $publicationState
    locale: $locale
  ) {
    id
    code
    labels {
      label
      value
    }
  }
}`,
            variables: {locale: 'en'}
        }, httpOptions)
            .pipe(map(({data}: any) => data)).subscribe(console.log);

        this.titleService.setTitle('Home page');

        const naEndEvents = this.router.events.pipe(filter(event => event instanceof NavigationEnd));
        naEndEvents.subscribe((event: NavigationEnd) => {
            // ga('set', 'page', event.urlAfterRedirects);
            // ga('send', 'pageview');
            const gtmTag = {event: 'page', pageName: event.url};

            this.gtmService.pushTag(gtmTag);

            console.log(this.gtmService.getDataLayer());
        });
    }

}
