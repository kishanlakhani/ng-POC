import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddEditComponent } from './product-add-edit/product-add-edit.component';
import { Routes, RouterModule } from '@angular/router';

const route:Routes = [
  {
    path:'',children:[
      {
        path:'list',
        component:ProductListComponent
      }
    ]
  }
]


@NgModule({
  declarations: [ProductComponent, ProductListComponent,ProductAddEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
  ],
  exports:[
    ProductListComponent,

  ]
})
export class ProductModule { }
