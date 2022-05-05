import { Component, OnInit } from '@angular/core';
import { ApiOdmbService } from '../../services/api-odmb.service';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
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

    ngOnInit(): void {}
}
