import { Component, OnInit } from '@angular/core';
import { ApiOdmbService } from '../../services/api-odmb.service';

@Component({
    selector: 'app-cards',
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
    start: boolean = true;
    showCard: boolean = false;
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
    constructor(private apiOdmbService: ApiOdmbService) {}

    ngOnInit(): void {}

    onSubmit() {
        this.apiOdmbService.getFilm(this.filmName).subscribe((res) => {
            this.start = false;
            console.log(res);
            if (res.Response == 'True') {
                this.showCard = true;
                this.poster = res.Poster;
                this.filmTitle = res.Title;
                this.desc = res.Plot.slice(0, 200);
            } else {
                this.showCard = false;
            }
        });
    }
}
