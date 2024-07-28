import { Component, Inject, OnInit, inject } from '@angular/core';
import { jwtService } from '../jwt.service';
import { eventEmitter } from 'src/app/service-class-modal-injection/table-data/event-emitter/eventemitter.service';

@Component({
  selector: 'app-jwt-comp',
  templateUrl: './jwt-comp.component.html',
  styleUrls: ['./jwt-comp.component.scss'],
  providers: [jwtService]
})
export class JwtCompComponent implements OnInit {

  eventService = inject(eventEmitter)


  ngOnInit() {
    console.log('oninti')
    // this.eventService.emitter();

  }

  constructor(private jwtService: jwtService) {
    setTimeout(() => {
      this.encodeAndDecodeData({ name: 'John', age: 30 }, 'secretKey123');
    }, 5000);
  }

  encodeAndDecodeData(data: any, secretKey: string): void {
    const encodedToken = this.jwtService.encodeData(data, secretKey);
    console.log('Encoded Token:', encodedToken);

    const decodedData = this.jwtService.decodeData(encodedToken, secretKey);
    console.log('Decoded Data:', decodedData);
  }

  // tableSelectedData: any;

}
