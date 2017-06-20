
import { Injectable } from '@angular/core';
import { Contact } from '../models/Contact';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class SharedContactService {
    private contact = new Subject<Contact>();
    public contact$ = this.contact.asObservable();

    setSharedContact(contact:Contact)
    {
        this.contact.next(contact);
    }


}
