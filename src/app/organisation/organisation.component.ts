import { Component, OnInit } from '@angular/core';


declare const anime:any
@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.scss']
})
export class OrganisationComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    let timeline = anime.timeline({
      loop: true
  });
  
  timeline
      .add({
          targets: '#mask-1 .part',
          width: 100,
          easing: 'easeInOutQuad',
          delay: function(el, i, l) {
              return 700 * Math.random();
          }
      })
      .add({
          targets: '#mask-2 .part',
          height: 100,
          easing: 'easeInOutQuad',
          delay: function(el, i, l) {
              return 700 * Math.random();
          }
      })
      .add({
          targets: '#mask-3 .part',
          x: 0,
          easing: 'easeInOutQuad',
          delay: function(el, i, l) {
              return 700 * Math.random();
          }
      })
      .add({
          targets: '#mask-4 .part',
          y: 0,
          easing: 'easeInOutQuad',
          delay: function(el, i, l) {
              return 700 * Math.random();
          }
      });
  }

  

}
