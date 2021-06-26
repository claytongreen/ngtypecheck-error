import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-latest';

  mask?: any;
  unmask?: boolean;

  ngOnInit() {
    this.mask = { mask: '+{1}(000)000-0000' };
    this.unmask = true;
  }
}
