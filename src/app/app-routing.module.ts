import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsComponent } from './rxjs/rxjs.component';
import { SearchRxjsComponent } from './search-rxjs/search-rxjs.component';
import { SweetalertTestComponent } from './sweetalert-test/sweetalert-test.component';
import { MediaQueryComponent } from './media-query/media-query.component';
import { SchedulersComponent } from './schedulers/schedulers.component';
import { ParentComponent } from './view_encapsulation/parent/parent.component';
import { ServiceClassModalInjectionComponent } from './service-class-modal-injection/service-class-modal-injection.component';
import { JwtCompComponent } from './JWT_TOKEN/jwt-comp/jwt-comp.component';
import { TableDataComponent } from './service-class-modal-injection/table-data/table-data.component';
import { ImgComponent } from './img/img.component';
import { ErrorHandlingObservableComponent } from './error-handling-observable/error-handling-observable.component';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';
import { FragmentComponent } from './fragment/fragment.component';
import { FormControlsReactiveFormsComponent } from './form-controls/form-controls-reactive-forms/form-controls-reactive-forms.component';
import { FormComponentComponent } from './form-controls/form-component/form-component.component';

const routes: Routes = [
  { path: 'crop', component: ImageCropperComponent },
  { path: 'imag', component: ImgComponent }, { path: 'error', component: ErrorHandlingObservableComponent },
  { path: 'jwt', component: JwtCompComponent }, { path: 'table', component: TableDataComponent },
  { path: 'media', component: MediaQueryComponent }, { path: 'enc', component: ParentComponent }, { path: 'fragment', component: FragmentComponent },
  { path: 'sch', component: SchedulersComponent }, { path: 'service', component: ServiceClassModalInjectionComponent },
  { path: 'rxjs', component: RxjsComponent }, { path: 'search', component: SearchRxjsComponent }, { path: 'swt', component: SweetalertTestComponent },
  { path: "reactiveform", component: FormControlsReactiveFormsComponent },
  { path: "form-component", component: FormComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    RouterModule.forRoot(routes, {
      useHash: true,
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
