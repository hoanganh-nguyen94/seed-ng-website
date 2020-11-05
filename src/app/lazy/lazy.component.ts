import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {GoogleTagManagerService} from 'angular-google-tag-manager';

@Component({
    selector: 'app-lazy-view',
    template: `
        
        <h3>This is content from a lazy-loaded route</h3>
        <div>Check your Networks tab to see that the js file got loaded</div>
        <br>
        <div><em>/lazy/nested/</em> routes to the same page</div>
        <button (click)="customEvent()">Click custom event</button>
        <button (click)="customEventCheckIn()">Click check in</button>
        <button (click)="customEventCheckOut()">Click check out</button>
    `
})
export class LazyComponent {
    public constructor(
        private titleService: Title,
        private gtmService: GoogleTagManagerService,
    ) {
        this.titleService.setTitle('Lazy page',
        );
    }

    customEvent() {
        // push GTM data layer with a custom event
        const gtmTag = {
            event: 'button-click',
            data: 'my-custom-event',
        };
        this.gtmService.pushTag(gtmTag);
        alert('this is a custom event');
    }

    customEventCheckIn() {
        const gtmTag = {
            event: 'button-click-check-in',
            data: new Date(),
        };
        this.gtmService.pushTag(gtmTag);
    }

    customEventCheckOut() {
        const gtmTag = {
            event: 'button-click-check-out',
            data: 'check out date error',
        };
        this.gtmService.pushTag(gtmTag);
    }
}
