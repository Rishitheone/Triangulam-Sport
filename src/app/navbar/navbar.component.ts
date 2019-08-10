import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  ngOnInit() {


		if ('ontouchstart' in window) { var click = 'touchstart'; }
		else { var click = 'click'; }


		$('div.burger').on(click, function () {

			if (!$(this).hasClass('open')) {
				 openMenu();
				 }
			else { closeMenu(); }

		});


		$('div.menu ul li a').on(click, function (e) {
			e.preventDefault();
			closeMenu();
		});
	

		function openMenu() {

			$('div.circle').addClass('expand');

			$('div.burger').addClass('open');
			$('div.x, div.y, div.z').addClass('collapse');
			$('.menu li').addClass('animate');
			$('div.row .bg-1').addClass('for-z');
			$('div.row .bg-2').addClass('for-z');
			$('div.row .bg-3').addClass('for-z');
			$('div.row .bg-4').addClass('for-z');
			// $('div.row .bg-1').removeClass('for-o');
			$('div.row .bg-1').addClass('bg-1a');
			$('div.row .bg-2').addClass('bg-2a');
			$('div.row .bg-3').addClass('bg-3a');
			$('div.row .bg-4').addClass('bg-4a');
			$('div.screen-one').addClass('onscreen');
			$('div.screen-one').removeClass('screen');

			setTimeout(function () {
				$('div.y').hide();
				$('div.x').addClass('rotate30');
				$('div.z').addClass('rotate150');
			}, 70);
			setTimeout(function () {
				$('div.x').addClass('rotate45');
				$('div.z').addClass('rotate135');
			}, 120);



		}

		function closeMenu() {

			$('div.burger').removeClass('open');
			$('div.x').removeClass('rotate45').addClass('rotate30');
			$('div.z').removeClass('rotate135').addClass('rotate150');
			$('div.circle').removeClass('expand');
			$('.menu li').removeClass('animate');
			$('div.row .bg-1').removeClass('for-z');
			$('div.row .bg-2').removeClass('for-z');
			$('div.row .bg-3').removeClass('for-z');
			$('div.row .bg-4').removeClass('for-z');
			// $('div.row .bg-1').addClass('for-o');
			$('div.row .bg-1').removeClass('bg-1a');
			$('div.row .bg-2').removeClass('bg-2a');
			$('div.row .bg-3').removeClass('bg-3a');
			$('div.row .bg-4').removeClass('bg-4a');
			$('div.screen-one').addClass('screen');
			$('div.screen-one').removeClass('onscreen');
			

			setTimeout(function () {
				$('div.x').removeClass('rotate30');
				$('div.z').removeClass('rotate150');
			}, 50);
			setTimeout(function () {
				$('div.y').show();
				$('div.x, div.y, div.z').removeClass('collapse');
			}, 70);

		}
	};




}