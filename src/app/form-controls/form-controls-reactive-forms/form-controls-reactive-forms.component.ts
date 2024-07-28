import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ControlRequiredPipe } from './diretives-pipes/control.pipe';

@Component({
  selector: 'app-form-controls-reactive-forms',
  templateUrl: './form-controls-reactive-forms.component.html',
  styleUrls: ['./form-controls-reactive-forms.component.scss'],
  providers: [ControlRequiredPipe]
})
export class FormControlsReactiveFormsComponent {
  form: FormGroup = new FormGroup({
    control: new FormControl(null, [
      Validators.required,
      Validators.minLength(8)
    ])
  });

  constructor(private controlRequiredPipe: ControlRequiredPipe) { }

  onSubmit() {
    alert(
      `The required state of the FormControl is: ${this.controlRequiredPipe.transform(
        this.form.get("control")
      )}`
    );
  }
}
