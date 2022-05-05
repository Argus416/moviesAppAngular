import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardsComponent } from './components/cards/cards.component';

import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './page/about/about.component';
import { HomeComponent } from './page/home/home.component';
import { FormComponent } from './page/home/form/form.component';
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
];

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        CardsComponent,
        AboutComponent,
        HomeComponent,
        FormComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
