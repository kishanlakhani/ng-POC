import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isShow:boolean;
  isNavShow:boolean;

  ngOnInit() {
    this.isShow = false;
    this.isNavShow = false;
  }

  onClick(){
    this.isShow = !this.isShow;
  }

  onClickButton(){
    console.log("call");
    this.isNavShow = !this.isNavShow;
    console.log(this.isNavShow);
  }
}