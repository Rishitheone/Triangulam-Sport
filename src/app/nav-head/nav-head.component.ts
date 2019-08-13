import { Component, OnInit } from '@angular/core';

declare  const openNav:any;
declare const closeNav:any;



@Component({
  selector: 'app-nav-head',
  templateUrl: './nav-head.component.html',
  styleUrls: ['./nav-head.component.scss']
})
export class NavHeadComponent implements OnInit {

  constructor() { }



	Onclick(){
		openNav()
	}

	Onclose(){
		closeNav()
	}




  ngOnInit() {
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
  }

}
