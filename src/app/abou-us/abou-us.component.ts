import { Component, OnInit } from '@angular/core';


declare const WOW,wow,parentNode:any;

@Component({
  selector: 'app-abou-us',
  templateUrl: './abou-us.component.html',
  styleUrls: ['./abou-us.component.scss']
})
export class AbouUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    (function() {
      // Add event listener
      document.addEventListener("mousemove", parallax);
      const elem = document.querySelector("#parallax");
      // Magic happens here
      function parallax(e) {
          let _w = window.innerWidth/2;
          let _h = window.innerHeight/2;
          let _mouseX = e.clientX;
          let _mouseY = e.clientY;
          let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
          let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
          let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
          let x = `${_depth3}, ${_depth2}, ${_depth1}`;
          console.log(x);
          (<any>elem).style.backgroundPosition = x;
        }
       })();
  
  
  
      //  ===================================================================================================
 
  const cards:any = document.querySelectorAll(".dek");
  
  for (let card of cards) { 
    card.addEventListener("mousemove",startRotate); 
    card.addEventListener("mouseout", stopRotate); 
  }
  
  
  function startRotate(event) {
  
    const cardItem = this.querySelector(".card");
    const halfHeight = cardItem.offsetHeight / 2;
    const halfWidth = cardItem.offsetWidth / 2;
  
   
    const x = -((event.offsetY - halfHeight) / 10);
    const y = ((event.offsetX - halfWidth) / 10);
    
    cardItem.style.transform = "rotateX("+ x +"deg) rotateY(" + y + "deg)";
  
  }
  
  function stopRotate(event) {
    const cardItem = this.querySelector(".card");
    cardItem.style.transform = "rotate(0)";
  }
///////////////////

//Triangulum Sports – Your Home For e-Sports

wow.init();
 
////////////////////////////////////////////////////////
  }

}
