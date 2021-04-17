import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ScullyRoute, ScullyRoutesService} from '@scullyio/ng-lib';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {Tile} from '../tile';

@Component({
  selector: 'seed-blog',
  template: `

    <div class="container">
      <mat-grid-list
        cols="2"
        [gutterSize]="'1.2rem'">
        <mat-grid-tile
          *ngFor="let tile of tiles"
          [colspan]="tile.cols"
          [rowspan]="tile.rows"
        >
          <seed-blog-box></seed-blog-box>
        </mat-grid-tile>
      </mat-grid-list>
    </div>
    <ul>
      <li *ngFor="let page of links$ | async">
        <a [routerLink]="page?.route">{{ page?.title }}</a>
      </li>
    </ul>
    <scully-content></scully-content>
  `,
  styles: [`
    .container {
      margin: 30px;
    }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogComponent implements OnInit
{
  tiles: Tile[] = [
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'One', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1'},
  ];

  links$: Observable<ScullyRoute[]> = this.scully.available$.pipe(
    map((x) => x.filter(i => i?.route?.includes('/blog/', 0))),
    tap(console.log)
  );

  constructor(private scully: ScullyRoutesService) {
  }

  ngOnInit(): void {
  }

}
