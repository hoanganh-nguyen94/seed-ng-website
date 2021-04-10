import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {ScullyRoute, ScullyRoutesService} from "@scullyio/ng-lib";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

@Component({
    selector: 'han-blog',
    template: `
        <p>
            blog works!
        </p>
        <ul>
            <li *ngFor="let page of links$ | async">
                {{ page.route }} {{ page.arbitraryValue }}
                <span *ngFor="let arrayItem of page.arbitraryArray">{{ arrayItem }}</span>
            </li>
        </ul>
        <scully-content></scully-content>
    `,
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogComponent implements OnInit {
    links$: Observable<ScullyRoute[]> = this.scully.available$.pipe(
        tap(console.log)
    );

    constructor(private scully: ScullyRoutesService) {
    }

    ngOnInit() {

    }

}
