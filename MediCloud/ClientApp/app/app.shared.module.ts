import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { NavFooterComponent } from './components/navfooter/navfooter.component';
import {AboutComponent } from "./components/about/about.component" ;
import {CompanyComponent } from "./components/company/company.component" ;
import {RegisterComponent } from "./components/register/register.component" ;
import { IndividualComponent } from "./components/individual/individual.component" ;

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        NavFooterComponent,
        AboutComponent,
        CompanyComponent,
        RegisterComponent,
        IndividualComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'about', component: AboutComponent },
            { path: 'company', component: CompanyComponent },
            { path: 'individual', component: IndividualComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
