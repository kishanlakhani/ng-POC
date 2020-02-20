import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [

  // {
  //   path:'',compone
  // }
  {
    path:'auth',
    loadChildren: ()=>import('./core/authentication/authentication.module').then(m=>m.AuthenticationModule)
  },
  {
    path:'product',
    loadChildren: ()=>import('./core/product/product.module').then(m=>m.ProductModule)
  },
  {
    path:'order',
    loadChildren:()=>import('./core/order/order.module').then(m=>m.OrderModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
