import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class eventEmitter {


    customEvent: EventEmitter<string> = new EventEmitter<string>();

    emitter(data) {
        this.customEvent.emit(data);
    }

}