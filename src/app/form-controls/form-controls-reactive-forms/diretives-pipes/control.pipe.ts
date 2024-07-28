import { Pipe, PipeTransform } from "@angular/core";
import { AbstractControl } from "@angular/forms";

@Pipe({
    name: "controlRequired"
})
export class ControlRequiredPipe implements PipeTransform {
    public transform(control: AbstractControl): boolean {
        if (!control || !control.validator) {
            return false;
        }
     
        const validator = control.validator({} as AbstractControl);
        return validator && validator["required"];
    }
}