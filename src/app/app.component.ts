import {Component} from '@angular/core';

@Component({
    selector: 'han-root',
    template: `
        <router-outlet></router-outlet>
    `,
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'HAN-blog';
}
