import {Component} from '@angular/core';

@Component({
    selector: 'han-root',
    template: `
        <han-nav></han-nav>
    `,
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'HAN-blog';
}
