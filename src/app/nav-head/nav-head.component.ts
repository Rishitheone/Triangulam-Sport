import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-head',
  templateUrl: './nav-head.component.html',
  styleUrls: ['./nav-head.component.scss']
})
export class NavHeadComponent implements OnInit {

  constructor() { }

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
