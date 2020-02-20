import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-add-edit',
  templateUrl: './product-add-edit.component.html',
  styleUrls: ['./product-add-edit.component.scss']
})
export class ProductAddEditComponent implements OnInit {
  isShowModal:boolean = true;
  @Output()
  onCloseEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }
  ngOnInit() {
    this.isShowModal = true;
  }

  showModelClick(){
    this.isShowModal = !this.isShowModal;
    this.onCloseEvent.emit(this.isShowModal);
  }
  
}
