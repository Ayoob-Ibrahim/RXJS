import { Component, OnInit } from '@angular/core';
import { Observable, debounceTime, filter, from, map, of } from 'rxjs';

@Component({
  selector: 'app-error-handling-observable',
  templateUrl: './error-handling-observable.component.html',
  styleUrls: ['./error-handling-observable.component.scss']
})
export class ErrorHandlingObservableComponent implements OnInit {

  $Observable: any;


  ngOnInit(): void {
    // this.of_operator_rxjs()
    // this.error_handling_observable()
    // this.conversion_promise_2_observable_from_operator()
    this.mapinrxjs()
  }





  mapinrxjs() {
    this.$Observable = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

    let transformedObs = this.$Observable.pipe(map((val: number) => {
      return val * 4
    }), filter((val: any) => {
      return val % 5 === 0
    }))


 



    transformedObs.subscribe({
      next: (val => {
        console.log(val)
      }),
      error: (err => {
        console.error(err)
      }),
      complete: (() => {
        console.warn('completed')
      })
    })



    // this.$Observable.subscribe({
    //   next: (val => {
    //     console.log(val,)
    //   }),
    //   error: (err => {

    //   }),
    //   complete: () => {
    //     console.warn('completes')
    //   }
    // })
  }

  debouncer() {
    console.log('clicked')
    if (debounceTime(5000)) {
      console.log('inside debounce time')
    }
  }






  // from opertor recieves only one parameter and that parameter must be an iteratable
  // and it will emit one by one
  conversion_promise_2_observable_from_operator() {
    const promise = new Promise((resolve, reject) => {
      resolve([1, 2, 3, 4, 45, 5, 6, 67, , 7, 7, 88, 8])
    })
    this.$Observable = from(promise);

    this.$Observable.subscribe({
      next: (val => {
        console.log(val, ';avlu')
      }),
      error: (err => {

      }),
      complete: () => {
        console.warn('completes')
      }
    })



  }






  // of opertor recives n number of parameter and it will emits all the array or obejct
  //  it wont iterate inside the array or stirng

  of_operator_rxjs() {
    var stringArray = ["apple", "banana", "orange", "grape"];
    var person = {
      name: "John",
      age: 30,
      city: "New York"
    };
    var numberArray = [1, 2, 3, 4, 5];

    this.$Observable = of(stringArray, person, numberArray, "Hello World", true, false, 98789797);

    // New Type method for observable error handling;

    this.$Observable.subscribe({
      next: (val => {
        console.log(val, ';avlu')
      }),
      error: (err => {

      }),
      complete: () => {
        alert('Observable emitted successfully!!')
      }
    })
  }









  error_handling_observable() {
    this.$Observable = new Observable((observer: any) => {
      setTimeout(() => {
        observer.next(1)
      }, 1000);
      setTimeout(() => {
        observer.next(2)
      }, 2000);
      setTimeout(() => {
        observer.next(3)
      }, 3000);
      setTimeout(() => {
        observer.error(new Error('Something Went wrong!!'))
      }, 4000);
      setTimeout(() => {
        observer.next(5)
      }, 5000);
    });



    this.$Observable.subscribe((res: any) => {
      console.warn(res)
    },
      ((err) => {
        alert(err.message)
      })
    )


  }

}
