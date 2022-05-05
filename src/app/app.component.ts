import { Component, Input } from '@angular/core';
import { ApiOdmbService } from './services/api-odmb.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    start: boolean = true;
    showCard: boolean = false;
    filmName: string = '';
    title = 'moviesAppAngular';

    res: object = {};

    constructor(private apiOdmbService: ApiOdmbService) {}

    onSubmit() {
        this.apiOdmbService.getFilm(this.filmName).subscribe((res) => {
            this.start = false;
            this.res = res;
            if (res.Response == 'True') {
                this.showCard = true;
            } else {
                this.showCard = false;
            }
        });
    }
}
