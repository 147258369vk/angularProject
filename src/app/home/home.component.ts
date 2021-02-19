import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {

  btnchange=true;

  ngOnInit(){

    setTimeout(()=>{
      this.btnchange=false;
    },5000);


  }

  // var varname = value; in javascript

  // varname:type=value;  in ts

  name="Varun";
  email="varun@gmail.com";

  a=10;
  b=25;
  c=this.a+this.b

  msg!: string;

  url="../../assets/angular.jpeg";

  getMsg()
  {
    alert('Button is click');
    this.msg = 'Button is clicked';

  }



}
