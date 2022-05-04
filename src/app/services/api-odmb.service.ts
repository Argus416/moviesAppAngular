import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class ApiOdmbService {
    private apiKey: string = 'a9408f46';
    private apiUrl: string = `http://www.omdbapi.com/?&apikey=${this.apiKey}`;
    private searchByName: string = '&t=';

    constructor(private http: HttpClient) {}

    getFilm(text: string): Observable<any> {
        const url: string = `${this.apiUrl}${this.searchByName}${text}`;
        return this.http.get(url);
    }
}
