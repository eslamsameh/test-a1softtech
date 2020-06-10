import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-page',
    template: `
    <app-header></app-header>
    <router-outlet></router-outlet>`
})

export class PageComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
