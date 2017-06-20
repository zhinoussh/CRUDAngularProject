
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Contact } from '../../models/Contact'
import { ContactDataService } from '../../services/contact-data.service'
import { SharedContactService } from '../../services/shared-contact.service'
import { Subscription } from 'rxjs/Subscription'

@Component({
    selector: 'contact-list',    
    templateUrl: './contact-list.component.html',
    styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit, OnDestroy {

    contacts: Contact[];
    private data_subscriber: Subscription;

    constructor(private contactservic: ContactDataService, private sharedservice: SharedContactService) {
    }

    ngOnInit()
    {
        this.data_subscriber = this.contactservic.getContactList().subscribe(data => this.contacts = data
            , err => console.log('Error: ' + err));

        console.log('get contact list');
    }

    ngOnDestroy()
    {
        this.data_subscriber.unsubscribe();
    }

    EditContact(contact: Contact)
    {
        this.sharedservice.setSharedContact(contact);
    }
    DeleteContact(contactId: number) {
        this.contactservic.deleteContact(contactId);
    }


}
