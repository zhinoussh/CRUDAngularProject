import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './components/app/app.component'
import { HomeComponent } from './components/home/home.component';
import { NewContactComponent } from './components/createcontact/newcontact.component';
import { ContactListComponent } from './components/contactlist/contact-list.component';
import { ContactDataService } from './services/contact-data.service';
import { SharedContactService } from './services/shared-contact.service';

export const sharedConfig: NgModule = {
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        HomeComponent,
        NewContactComponent,
        ContactListComponent
    ],
    imports: [
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [ContactDataService, SharedContactService]
};
