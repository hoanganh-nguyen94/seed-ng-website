import {Component, OnInit} from '@angular/core';
import {ScullyRoutesService} from "@scullyio/ng-lib";
import {map, tap} from "rxjs/operators";

@Component({
    selector: 'han-home',
    template: `
        <ul>
            <li *ngFor="let route of routes$ | async">
                <a [routerLink]="[route.route]">{{ route.title }}</a>
            </li>
        </ul>

    `,
    styles: [
        `
        
        `
    ]
})
export class HomeComponent implements OnInit {
    routes$ = this.scullyRoutesService.available$
        .pipe(
            tap(console.log),
            map((routes) => routes.filter((route) => route.route.includes('/blog')),
            ),
        );

    constructor(private readonly scullyRoutesService: ScullyRoutesService) {
    }

    ngOnInit(): void {
    }

}
