
import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Contact } from '../models/Contact';
import { Observable } from 'rxjs/Observable';
import 'rxjs'

@Injectable()
export class ContactDataService {
    contact_array: Contact[];
    base_url: string;
    s: string;
    constructor(private http: Http,@Inject('ORIGIN_URL') originUrl: string)
    {
        this.base_url = originUrl + '/contactdata.json';
    }

    getContactList(): Observable<Contact[]> {
        return this.http.get(this.base_url).map(response => this.contact_array=response.json());
    }

    insertContact(newcontact: Contact): void {
        //console.log(newcontact.id);
        if (newcontact.id == 0) {
            let last_index = this.contact_array.length - 1;
            let new_id = this.contact_array[last_index].id + 1;
            newcontact.id = new_id;
            this.contact_array.push(newcontact);
        }
        else
        {
            let edit_index = this.contact_array.indexOf(this.contact_array.find(x => x.id == newcontact.id));
            this.contact_array[edit_index] = newcontact;
        }
    }

    deleteContact(contactId: number)
    {
        if (contactId && contactId != 0)
        {
            let delete_index = this.contact_array.indexOf(this.contact_array.find(x => x.id == contactId));
            this.contact_array.splice(delete_index, 1);
        }
    }

   


}
