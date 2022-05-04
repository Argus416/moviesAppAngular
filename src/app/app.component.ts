import { Component } from '@angular/core';
import { ApiOdmbService } from './services/api-odmb.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    filmName: string = '';
    title = 'moviesAppAngular';

    poster: string = '';
    filmTitle: string = '';
    desc: string = '';

    film = {
        poster: this.poster,
        filmTitle: this.filmTitle,
        desc: this.desc,
    };
    constructor(private apiOdmbService: ApiOdmbService) {
        console.log(apiOdmbService);
    }

    onSubmit() {
        this.apiOdmbService.getFilm(this.filmName).subscribe((res) => {
            this.poster = res.Poster;
            this.filmTitle = res.Title;
            this.desc = res.Plot.slice(0, 200);
        });
    }
}
