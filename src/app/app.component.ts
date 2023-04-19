
import { Component, OnInit, VERSION } from '@angular/core';
import { End } from './model/end.model';
import { AppService } from './services/app.service';



@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  address: End;

  constructor(public service: AppService) {}

  ngOnInit(): void {
    this.getAdd();
  }

  getAdd(): void {
    this.service.getAddress().subscribe((res: End) => {
      this.address = res;
      console.log(res)
    })
  
  }
}