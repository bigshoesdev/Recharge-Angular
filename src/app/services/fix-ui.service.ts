import { Injectable } from '@angular/core';
declare var $: any;

@Injectable()
export class FixUiService {

  constructor() { }

  all(){
    this.fixChackboxes()
  }

  fixChackboxes() {
		/* ================ Checkbox Styling. ================ */
		var checkBox = $('.checkbox');
		$(checkBox).each(function () {
			$(this).wrap("<span class='custom-checkbox'></span>");
			if ($(this).attr('value') == '1') {
				$(this).parent().addClass("selected main-bg");
			}
		});
		$(checkBox).on("click", function () {
			$(this).parent().toggleClass("selected main-bg");
			if ($(this).attr('value') == '1') {
				$(this).attr('value', '0');
			} else {
				$(this).attr('value', '1');
			}
			return false;
		});
		$('.custom-checkbox').append('<div class="switcher"/>');

		$('.custom-radio').find('label').prepend('<span><span></span></span>');

		if (true) {
			if ($('.animsition').length) {
				$(".animsition").animsition({
					inClass: 'fade-in',
					outClass: 'fade-out',
					inDuration: 2000,
					outDuration: 800,
					linkElement: '.top-nav ul li a:not([target="_blank"]):not([href^=#])',
					loading: true,
					loadingParentElement: 'body',
					loadingClass: 'page-loader',
					loadingInner: '<div class="inner-l"><span></span><span></span><span></span></div>',
					overlay: false
				});
			}
		} else {
			//$('.pageWrapper').removeClass('animsition');
		}      
  }

}
