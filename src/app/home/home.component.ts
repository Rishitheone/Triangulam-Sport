import { Component, OnInit } from '@angular/core';


declare const WOW,wow,parentNode:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {
//WHAT IS E SPORTS
    $(document).ready(function() {
      $('.has-animation').each(function(index) {
        $(this).delay($(this).data('delay')).queue(function(){
          $(this).addClass('animate-in');
        });
      });
    });

    ////////////////////////////////////////////////////
     
//Triangulum Sports – Your Home For e-Sports

wow.init();
 
////////////////////////////////////////////////////////



  }
  
 

}