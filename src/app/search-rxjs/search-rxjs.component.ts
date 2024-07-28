import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subject, debounceTime, switchMap } from 'rxjs';

@Component({
  selector: 'app-search-rxjs',
  templateUrl: './search-rxjs.component.html',
  styleUrls: ['./search-rxjs.component.scss']
})
export class SearchRxjsComponent {
  private searchTerms = new Subject<string>();
  result: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.searchTerms.pipe(
      debounceTime(500), // Adjust the time span based on your requirements
      switchMap(term => this.http.get(`https://ge-fleeton.thegoldenelement.com/Admin/customService/companydetails?value=${term}`))
    ).subscribe(data => {
      this.result = data;
      console.log(this.result,'result')
    });
  }

  // Call this method when you want to trigger an API call
  search(term: string): void {
    console.log(term)
    this.searchTerms.next(term);
  }


  searchTerm:string;
  // search(term: string): void {
  //   this.searchTerm = term;
  //   this.searchTerms.next(term);
  // }
}
