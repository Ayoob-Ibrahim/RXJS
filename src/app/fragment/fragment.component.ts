import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fragment',
  templateUrl: './fragment.component.html',
  styleUrls: ['./fragment.component.scss']
})
export class FragmentComponent implements OnInit {
  activateroute: ActivatedRoute = inject(ActivatedRoute)

  ngOnInit(): void {
    this.activateroute.fragment.subscribe(res => {
      console.warn(res);
      this.jumpsection(res)
    })
  }

  jumpsection(sec_id) {
    document.getElementById(sec_id).scrollIntoView({ behavior: 'smooth' })
  }


  jump(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }

}
