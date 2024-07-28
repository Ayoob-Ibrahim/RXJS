import { HttpClient } from '@angular/common/http';
import { AfterViewInit, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { Observable, Subject, forkJoin, from, fromEvent, interval, of } from 'rxjs';
import { mergeMap, map, debounceTime, switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit, AfterViewInit {








  //observables basic
  agent: Observable<string>
  display: string

  //of operators
  studentarray: Observable<string[]> = of(['Mohammad', 'Ibrahim', 'Ayoob'])
  studentobject: Observable<any> = of({
    id: 23,
    name: 'Mohammad Ibrahim Ayoob'
  })
  studentstring: Observable<string> = of('Mohammad Ibrahim Ayoob N')

  //from Operators
  ordersarray: Observable<string> = from(['Mohammad', 'Ibrahim', 'Ayoob'])

  constructor(private http: HttpClient) {

  }
  ngAfterViewInit(): void {
    var input1 = document.querySelector('#INPUT1');
    var input2 = document.querySelector('#INPUT2');
    var span = document.querySelector('#span1');
    // noramal useage of observable without using merge map
    var observable1 = fromEvent(input1, 'input').subscribe((data: any) => {
      span.textContent = data.target.value;
    })
    var observable2 = fromEvent(input2, 'input').subscribe((data: any) => span.textContent = data.target.value);
    // by using mergemap in observable
    // observable1.mergeMap()
    // this.anotherExampleForMergeMap();

    this.searchObservables();




  }

  // time Debouncing http://localhost:8082/Admin/customService/companydetails?value=e
  searchObservables() {
    var observable = fromEvent(document.querySelector('#typeHere'), 'input').subscribe((data: any) => {
      let letters = of(data.target.value);
      let result = letters.pipe(
        debounceTime(1000),
        switchMap(term => this.http.get(`https://ge-fleeton.thegoldenelement.com/Admin/customService/companydetails?value=e`))
      ).subscribe(res => {
        console.log(res, 'response data')
      })
    })

    this.observableTime()

    // http://localhost:8082/Admin/Dcservice/form?name=getcompanylistOfregistration&primary&where=?datas=e

    // this.searchTerms.pipe(
    //   debounceTime(300), // Adjust the time span based on your requirements
    //   switchMap(term => this.http.get(`https://api.example.com/search?term=${term}`))
    // ).subscribe(data => {
    //   this.result = data;
    // });
  }




  private searchTerms = new Subject<string>();

  searchTerm: string = 'example';
  search(term: string): void {
    this.searchTerm = term;
    this.searchTerms.next(term);
  }









  observableTime() {
    let date = new Date()
    const dateObservable = Observable.create((observer) => {
      observer.next(date);
    });

    dateObservable.subscribe((date) => {
      console.log(date, 'date');
    });

  }







  anotherExampleForMergeMap() {




    var observable = fromEvent(document.querySelector('#typeHere'), 'input').subscribe((data: any) => {
      let letters = of(data.target.value);
      let result = letters.pipe(
        mergeMap(x => interval(2000).pipe(map(i => x + i))),
      );
      result.subscribe(x => console.log(x));

    })

    // let letters = of('mohammad Ibrahim Ayoob');
    // let result = letters.pipe(
    //   mergeMap(x => interval(2000).pipe(map(i => x + i))),
    // );
    // result.subscribe(x => console.log(x));
  }





  ngOnInit(): void {

    // this.fromOpertaors();
    // this.ofOperators();
    // this.observableBasic()
    this.observable_basic_proacamedy()



  }

  pro_observable: any
  pro_string_changer: string = 'TEST';
  observable_basic_proacamedy() {


    var stringArray = [
      "apple", "banana", "orange", "grape", "kiwi",
      "strawberry", "watermelon", "pineapple", "blueberry", "pear",
      "cherry", "mango", "lemon", "lime", "peach",
      "raspberry", "plum", "apricot", "blackberry", "coconut"
    ];



 
 




    this.pro_observable = new Observable((observer: any) => {
      setInterval(() => {
        observer.next(this.pro_string_changer)
      }, 1000)
    })
  }

  pro_acdamey_sub() {
    this.pro_observable.subscribe(res => {
      console.warn(res, 'repsom')
    })
  }













  fromOpertaors() {
    this.ordersarray.subscribe(res => {
      console.log(res)
    })
  }

  ofOperators() {
    forkJoin([this.studentarray, this.studentobject, this.studentstring]).subscribe(([array, object, string]) => {
      console.warn(array, object, string, typeof (object))
    });
  }

  observableBasic() {
    this.agent = new Observable(
      function (observer) {
        try {
          setInterval(() => {
            observer.next('first');
          }, 3000);

          setInterval(() => {
            observer.next('second');
          }, 6000);
          setInterval(() => {
            observer.next('third');
          }, 9000);
          setInterval(() => {
            observer.next('fourth');
          }, 12000);

        } catch (e) {
          observer.error(e)
        }
      }
    )

    this.agent.subscribe(data => {
      this.display = data
    })
  }

  @ViewChild('fromEventOperatorRxjsTmpRef') fromEventOperatorRxjsTmpRef: ElementRef
  fromEventOperator() {
    const btnObservable = fromEvent(this.fromEventOperatorRxjsTmpRef?.nativeElement, 'click');
    btnObservable.subscribe(res => {
      console.warn(res)
    })
  }

  @ViewChild('getlink') getlinkMouse: ElementRef
  fromEventOperatormouse() {
    const mouseObservable = fromEvent(this.getlinkMouse?.nativeElement, 'mouseover')
    mouseObservable.subscribe(res => {
      console.warn(res)
    })
  }


}
