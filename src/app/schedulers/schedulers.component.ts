import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { asapScheduler, asyncScheduler, merge, of, queueScheduler } from 'rxjs';

@Component({
  selector: 'app-schedulers',
  templateUrl: './schedulers.component.html',
  styleUrls: ['./schedulers.component.scss']
})
export class SchedulersComponent implements OnInit {
  constructor(private http: HttpClient) { }


  // there are the three type sof schedulres 
  // Queue Schedulers
  // Aysnc Schedulers
  // Asap Schedulers

  //if you dont want to distrub the main threat by your obseravbles you can use the asap and 
  // async schedulers this things will be excuted atlast of the threat 
  // asap is having high priority then tha asap scheudlers


  ngOnInit(): void {
    let t1 = this.http.get('https://randomuser.me/api/?results=10')
    let t2 = this.http.get('https://httpbin.org/get')
    let t3 = this.http.get("http://ip.jsontest.com")
    merge(t1, t2, t3).subscribe(res => {
      // console.log(res)
    })

    console.log('script start')
    let queueSchedulers$ = of('Queue Schedulers', queueScheduler)
    let asyncSchedulers$ = of('Aysnc Schedulers', asyncScheduler)
    let asapSchedulers$ = of('Asap Schedulers', asapScheduler)


    merge(queueSchedulers$, asyncSchedulers$, asapSchedulers$).subscribe(res => {
      console.log(res)
    })

    this.test()

    console.log('script end')



  }

  test() {
    console.log('script end 1')
    console.log('script end 1')
    console.log('script end 1')
    console.log('script end 1');console.log('script end 1');console.log('script end 1');console.log('script end 1');console.log('script end 1');console.log('script end 1');console.log('script end 1');console.log('script end 1');console.log('script end 1');console.log('script end 1');
  }

}
