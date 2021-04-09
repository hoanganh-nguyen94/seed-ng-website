import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {ScullyRoute, ScullyRoutesService} from "@scullyio/ng-lib";
import {Observable} from "rxjs";

@Component({
    selector: 'han-blog',
    template: `
        <p>
            blog works!
        </p>
        <ul>
            <li *ngFor="let page of links$ | async">
                {{ page.route }} {{ page.arbitraryValue }}
                <span *ngFor="let arrayItem of page.arbitraryArray">
      {{ arrayItem }}
    </span>
            </li>
        </ul>
    `,
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogComponent implements OnInit {
    links$: Observable<ScullyRoute[]> = this.scully.available$;

    constructor(private scully: ScullyRoutesService) {
    }

    ngOnInit() {
        // debug current pages
        this.links$.subscribe((links) => {
            console.log(links);
        });
    }

}
