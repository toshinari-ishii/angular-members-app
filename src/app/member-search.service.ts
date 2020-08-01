import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Member } from './member';

@Injectable()
export class MemberSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Member[]> {
    // return this.http.get(`api/members/?name=${term}`)
    return this.http.get(`api/members/?name=${term}`)
      .map(response => response.json().data as Member[]);
    // const number = this.http.get(`api/members/?number=${term}`)
    //   .map(response => response.json().data as Member[]);
    //   console.log('name', name);
    //   console.log('number', number);
  }
}
