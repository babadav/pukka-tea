/**!
 * b4st JS
 */

(function ($) {

	'use strict';

	$(document).ready(function() {

		// Comments

		$('.commentlist li').addClass('card');
		$('.comment-reply-link').addClass('btn btn-secondary');

		// Forms

		$('select, input[type=text], input[type=email], input[type=password], textarea').addClass('form-control');
		$('input[type=submit]').addClass('btn btn-primary');

		// Pagination fix for ellipsis

		$('.pagination .dots').addClass('page-link').parent().addClass('disabled');

		// You can put your own code in here



		function onLoadScreen (){
			function loadingScreenAnimation() {
				"use strict";

				var lines = document.querySelectorAll("path");

				lines = [].slice.call(lines); // hack to convert NodeList (what querySelectorAll returns) to an array (which can be shuffled)

				function shuffleArray(array) {
				    for (var i = array.length - 1; i > 0; i--) {
				        var j = Math.floor(Math.random() * (i + 1));
				        var _ref = [array[j], array[i]];
				        array[i] = _ref[0];
				        array[j] = _ref[1];
				    }
				}
				shuffleArray(lines);

				TweenMax.staggerFrom(lines, 2, {
				    drawSVG: "0 100"
				    // stroke:"white", 
				    // strokeWidth:6,
				}, .005);
				//# sourceMappingURL=app.js.map
			}

			console.log("test")
			TweenMax.to( $('.loading-screen') , 2 , {
				delay: 3,
				opacity: .5,
				top: '-100%'
			})

			loadingScreenAnimation();
		}

		function homePageSliderButtons () {
			
			var i = 0;
			var sliderLeftValue = '-=22%' ;
			
			$('.left-button').on('click', function(){
				console.log(i)
				if (i == -3) {
					return;	
				}

			TweenMax.to( $('.inner-slider') , .2 , {
					left: sliderLeftValue,
					ease: Power1.easeOut, 
				})
			i--	

				

		})

			$('.right-button').on('click', function(){
				
				var sliderRightValue = '+=22%' ;

					if (i == 1) {
						console.log(i)
						return;
					}i++

				TweenMax.to( $('.inner-slider') , .2 , {
					left:  sliderRightValue,
					ease: Power1.easeIn, 

				})
			})
		}

		function navBar() {
			var navBarInner = $('.nav-inner');
			var burgerButton = $('.hamburger');

			burgerButton.on('click', function(){
				navBarInner.toggleClass('nav-active');
			})

		}

		function countUpAnimations(){

			var million = document.querySelector('.million');
			var million2 = document.querySelector('.million-2');
			var million3 = document.querySelector('.million-3');

		

				var options = {
				  useEasing: false, 
				  useGrouping: false, 
				  separator: ',', 
				  decimal: '.', 
			};
			var demo = new CountUp(million, 0, 386, 0, 2.5, options);
			if (!demo.error) {
			  demo.start();
			} else {
			  console.error(demo.error);
			}

			var demo = new CountUp(million2, 0, 11.5,1, 0, 2.5, options);
			if (!demo.error) {
			  demo.start();
			} else {
			  console.error(demo.error);
			}

			var demo = new CountUp(million3, 0, 165, 0, 2.5, options);
			if (!demo.error) {
			  demo.start();
			} else {
			  console.error(demo.error);
			}
		}
		
		onLoadScreen();
		navBar();
		homePageSliderButtons();
		countUpAnimations();
	});

			

		

}(jQuery));


// var teaBag = $('.our-mission');

// TweenMax.fromTo(teaBag , .8,  {
// 	delay: 5,
// 	top: '-100%',
// 	repeat: -1

// },
// {
// 	top: '0%',
// 	repeat: -1
// })

