import { Component, OnInit } from '@angular/core';

declare  const openNav:any;
declare const closeNav:any;

declare  const openNavbar:any;
declare const closeNavbar:any;


@Component({
  selector: 'app-nav-head',
  templateUrl: './nav-head.component.html',
  styleUrls: ['./nav-head.component.scss']
})
export class NavHeadComponent implements OnInit {

  constructor() { }


//For Search//////
	Onclick(){
		openNav()
	}

	Onclose(){
		closeNav()
	}

//////////////////////////



//For side menu on small screen//
  OnopenNavbar(){
		openNavbar()
	}

	OncloseNavbar(){
		closeNavbar()
  }
  
  //////////////////////////////////////////////////


  ngOnInit() {

    ////fadein fadeout///
    $(document).ready(function() {
      $('#close-btn').click(function() {
        $('#search-overlay').fadeOut();
        $('#search-btn').show();
      });
      $('#search-btn').click(function() {
        $(this).hide();
        $('#search-overlay').fadeIn();
      });
    });
    ///////////////////////////////////////////////////
  }

}
