import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  moment:moment.Moment;

  constructor() { }

  ngOnInit() {
    console.log(moment(new Date()).format('DD-MM-YYYY'));

  }


  formatDate(date){
    return moment(date).format('DD-MM-YYYY');
  }
}
