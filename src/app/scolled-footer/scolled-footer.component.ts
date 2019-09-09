import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scolled-footer',
  templateUrl: './scolled-footer.component.html',
  styleUrls: ['./scolled-footer.component.scss']
})
export class ScolledFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  // <=========Scroll background===============>
  $(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll > 0) {
        $(".footer").addClass("addClass");
        // $(".top-nav").removeClass("removeClass"); 

        $("span.one").addClass("addOne");
        // $("span.one").removeClass("removeOne"); 
      }
  
      else{
        $(".footer").removeClass("addClass");  
        // $(".top-nav").addClass("removeClass");	

        $("span.one").removeClass("addOne");  
        // $("span.one").addClass("removeOne");
      }
    })
  })

  }

}
