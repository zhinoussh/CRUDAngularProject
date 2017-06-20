
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from '../../models/Contact';
import { ContactDataService } from '../../services/contact-data.service';
import { SharedContactService } from '../../services/shared-contact.service'
import { Subscription } from 'rxjs/Subscription'
@Component({
    selector: 'new-contact',
    templateUrl: './newcontact.component.html',
    styleUrls: ['./newcontact.component.css']
})
export class NewContactComponent implements OnInit, OnDestroy {

    newcontact: Contact;
    invalidform: boolean;
    private sharedservice_subscriber: Subscription;

    constructor(private dataservice: ContactDataService, private sharedservice: SharedContactService ) {
    }

    ngOnInit() {
        this.newcontact = new Contact();
        this.invalidform = false;

        this.sharedservice_subscriber=this.sharedservice.contact$.subscribe(data => this.newcontact = data);
    }

    ngOnDestroy() {

        if (this.sharedservice_subscriber)
            this.sharedservice_subscriber.unsubscribe();
    }
    SaveContact(form: NgForm)
    {
        if (form.valid) {
            this.dataservice.insertContact(this.newcontact);
            this.newcontact = new Contact();
            this.invalidform = false;
            form.reset();
        }
        else
            this.invalidform = true;
    }
}
