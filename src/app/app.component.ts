import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Person } from '../models/Person';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Star wars API';

  // Documentation: https://swapi.dev/api/
  baseURL = 'https://swapi.dev/api/';

  people: Person[] = [];

  constructor(http: HttpClient) {
    const url = this.baseURL + 'people';
    http.get<any>(url).subscribe(response => this.people = response.results);
  }

  prevPage() {}

  nextPage() {}
}
