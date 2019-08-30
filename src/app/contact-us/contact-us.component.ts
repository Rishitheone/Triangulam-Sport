import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const contactUsButton = document.getElementById('contactUs');
    const backButton = document.getElementById('back');
    const container = document.getElementById('container');
    
    contactUsButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });
    
    backButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });

  }

}
