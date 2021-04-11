import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ScullyRoute, ScullyRoutesService} from '@scullyio/ng-lib';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Component({
    selector: 'seed-blog',
    template: `
        <ul>
            <li *ngFor="let page of links$ | async">
                <a [routerLink]="page?.route">{{ page?.title }}</a>
            </li>
        </ul>
        <scully-content></scully-content>
    `,
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogComponent implements OnInit {
    links$: Observable<ScullyRoute[]> = this.scully.available$.pipe(
        map((x) => x.filter(i => i?.route?.includes('/blog/', 0))),
        tap(console.log)
    );

    constructor(private scully: ScullyRoutesService) {
    }

    ngOnInit(): void {
    }

}
