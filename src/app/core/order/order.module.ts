import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderAddEditComponent } from './order-add-edit/order-add-edit.component';
import { Routes, RouterModule } from '@angular/router';


const route:Routes = [
  {
    path:'',children:[
      {
        path:'list',
        component:OrderListComponent
      }
    ]
  }
]

@NgModule({
  declarations: [OrderComponent, OrderListComponent, OrderAddEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class OrderModule { }
