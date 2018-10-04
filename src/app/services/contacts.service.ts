import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ContactsService {
  constructor(public http: Http) {}

  getContacts() {
    return this.http.get('http://localhost:8080/searchContacts?mc=y&size=3&page=0')
      .pipe(resp => resp);
  }
}
