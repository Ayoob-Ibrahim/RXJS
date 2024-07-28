import { CUSTOM_ELEMENTS_SCHEMA, InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { SearchRxjsComponent } from './search-rxjs/search-rxjs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetalertTestComponent } from './sweetalert-test/sweetalert-test.component';
import { MediaQueryComponent } from './media-query/media-query.component';
import { SchedulersComponent } from './schedulers/schedulers.component';
import { AppIfDirective } from './app-if.directive';
import { ParentComponent } from './view_encapsulation/parent/parent.component';
import { Comp1Component } from './view_encapsulation/comp1/comp1.component';
import { Comp2Component } from './view_encapsulation/comp2/comp2.component';
import { ServiceClassModalInjectionComponent } from './service-class-modal-injection/service-class-modal-injection.component';
import { userservice } from './service-class-modal-injection/service/user.service';
import { injectableservice } from './service-class-modal-injection/injectable-service/service-indeep.service';
import { JwtCompComponent } from './JWT_TOKEN/jwt-comp/jwt-comp.component';
import { TableDataComponent } from './service-class-modal-injection/table-data/table-data.component';
import { ImgComponent } from './img/img.component';
import { ErrorHandlingObservableComponent } from './error-handling-observable/error-handling-observable.component';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';
import { FragmentComponent } from './fragment/fragment.component';
import { FormControlsReactiveFormsComponent } from './form-controls/form-controls-reactive-forms/form-controls-reactive-forms.component';
import { ControlRequiredPipe } from './form-controls/form-controls-reactive-forms/diretives-pipes/control.pipe';
import { FormComponentComponent } from './form-controls/form-component/form-component.component';
import { ErrorMessageTestDirective } from './form-controls/form-controls-reactive-forms/diretives-pipes/error-message-test.directive';

export const UserToken = new InjectionToken<userservice>('User_service')

@NgModule({
  declarations: [
    AppComponent,
    RxjsComponent,
    SearchRxjsComponent,
    SweetalertTestComponent,
    MediaQueryComponent,
    SchedulersComponent,
    AppIfDirective,
    ParentComponent,
    Comp1Component,
    Comp2Component,
    ServiceClassModalInjectionComponent,
    JwtCompComponent,
    TableDataComponent,
    ImgComponent,
    ErrorHandlingObservableComponent,
    ImageCropperComponent,
    FragmentComponent,
    FormControlsReactiveFormsComponent,
    ControlRequiredPipe,
    FormComponentComponent,
    ErrorMessageTestDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [userservice, { provide: userservice, useClass: userservice },
    { provide: 'inject_service_indeep', useClass: injectableservice },
     
    // { provide: UserToken, useClass: injectableservice },
  ],
  // providers : both are smae
  bootstrap: [AppComponent]
})
export class AppModule { }
