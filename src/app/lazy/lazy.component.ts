import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'app-lazy-view',
    template: `
		<h3>This is content from a lazy-loaded route</h3>
		<div>Check your Networks tab to see that the js file got loaded</div>
		<br>
		<div><em>/lazy/nested/</em> routes to the same page</div>
    `
})
export class LazyComponent
{
    public constructor(private titleService: Title)
    {
        this.titleService.setTitle('Lazy page');
    }
}
