import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-cards',
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
    @Input() res: any;

    constructor() {}
    ngOnInit(): void {}
}
