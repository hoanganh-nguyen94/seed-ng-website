import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'app-demo',
    templateUrl: './husky.component.html',
    styleUrls: ['./husky.component.scss']
})
export class HuskyComponent {

    public constructor(private titleService: Title) {
        this.titleService.setTitle('Husky page');
    }
}
