import { Component, Inject } from '@angular/core';
import { eventEmitter } from './event-emitter/eventemitter.service';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss']
})
export class TableDataComponent {
  constructor(private eventserv: eventEmitter) {

  }

  tableData = [
    { Company: 'Alfreds Futterkiste', Contact: 'Maria Anders', Country: 'Germany' },
    { Company: 'Centro comercial Moctezuma', Contact: 'Francisco Chang', Country: 'Mexico' },
    { Company: 'Ernst Handel', Contact: 'Roland Mendel', Country: 'Austria' },
    { Company: 'Island Trading', Contact: 'Helen Bennett', Country: 'UK' },
    { Company: 'Laughing Bacchus Winecellars', Contact: 'Yoshi Tannamuri', Country: 'Canada' },
    { Company: 'Magazzini Alimentari Riuniti', Contact: 'Giovanni Rovelli', Country: 'Italy' }
  ]



  addObj(item) {
    this.eventserv.emitter(item)
  }
}
