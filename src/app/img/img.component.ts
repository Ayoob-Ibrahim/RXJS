import { AfterViewInit, Component } from '@angular/core';
import { injectableservice } from '../service-class-modal-injection/injectable-service/service-indeep.service';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements AfterViewInit {
  imgData: string
  constructor(public imgserv: injectableservice) {

  }
  ngAfterViewInit(): void {
    this.imgData = this.imgserv.injectableservicefunction()['Apmkingstrack']
  }


}
