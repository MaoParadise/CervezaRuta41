import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {


  user = 1;

  constructor() { }

  ngOnInit() {
  }

  changeControlUser(){
    if(this.user == 0){
      this.user = 1;
    }else if(this.user == 1){
      this.user = 0;
    }
  }

}
