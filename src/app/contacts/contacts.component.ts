import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {ContactsService} from '../services/contacts.service';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
    pageContacts: any;

  constructor(private http: Http, public contactService: ContactsService) {
  }

  ngOnInit() {
   this.contactService.getContacts()
     .subscribe(data => {
       this.pageContacts = data;
     }, error => {
       console.log(error);
     }) ;
  }
}
