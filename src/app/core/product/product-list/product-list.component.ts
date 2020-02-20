import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  isEdit:boolean=false;
  isAdd:boolean=false;
  productList$ ;
  maxSize = 3;
  bigTotalItems = 100;
  bigCurrentPage = 1;

  constructor(
    private productService:ProductService
  ) { }

  ngOnInit() {
    this.isEdit = false;
    this.isAdd = false;

    this.productService.getProductData()
      .subscribe(res=> {
        // console.log(res.length);
        // console.log(Array(res));
        this.productList$ = res;
        this.bigTotalItems= this.productList$.length;
      });
  }

  editCall(){
    this.isEdit = !this.isEdit;
  }

  addCall(e){
    this.isAdd = !this.isAdd;
  }

  onCloseEventCall(event){
    this.isAdd = !this.isAdd;
  }

  pageChange(curPage){

  }
}
