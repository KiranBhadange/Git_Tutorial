import { Component } from '@angular/core';

@Component({
  selector: 'app-mock',
  templateUrl: './mock.component.html',
  styleUrls: ['./mock.component.css']
})
export class MockComponent {
  data:string='';
  name!:string;


 datachanged(e:any){
    this.data=e.target.value;
  }
}
