import { Component } from '@angular/core';

@Component({
  selector: 'app-mockinterview',
  templateUrl: './mockinterview.component.html',
  styleUrls: ['./mockinterview.component.css']
})
export class MockinterviewComponent {
  items = ["kiran", "jyoti", "neha", "komal"];

  todaysDay:string="Monday";
}
