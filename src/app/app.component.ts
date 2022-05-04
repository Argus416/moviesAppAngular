import { Component } from '@angular/core';
import { ApiOdmbService } from './services/api-odmb.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'moviesAppAngular';

    constructor(apiOdmbService: ApiOdmbService) {}

    onSubmit(form: any) {}
}
