import { Component, Inject } from '@angular/core';
import { userservice } from './service/user.service';
import { injectableservice } from './injectable-service/service-indeep.service';

@Component({
  selector: 'app-service-class-modal-injection',
  templateUrl: './service-class-modal-injection.component.html',
  styleUrls: ['./service-class-modal-injection.component.scss'],
  // providers: [userservice] instead we can specifi on app modulr for sharing
  // tha same in the across all over the application

})
export class ServiceClassModalInjectionComponent {
  constructor(public user: userservice,
    @Inject('inject_service_indeep') public serv_injec: injectableservice) {
    console.log(user.getAllusers())
  }

}
