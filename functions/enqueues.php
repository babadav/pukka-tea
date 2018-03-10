<?php
/**!
 * Enqueues
 */

if ( ! function_exists('b4st_enqueues') ) {
	function b4st_enqueues() {

		// Styles

		wp_register_style('bootstrap-css', 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.min.css', false, '4.0.0', null);
		wp_enqueue_style('bootstrap-css');

	  	wp_register_style('b4st-css', get_template_directory_uri() . '/theme/css/b4st.css', false, null);
		wp_enqueue_style('b4st-css');

		// Scripts

		wp_register_script('font-awesome-config-js', get_template_directory_uri() . '/theme/js/font-awesome-config.js', false, null, null);
		wp_enqueue_script('font-awesome-config-js');

		wp_register_script('font-awesome', 'https://use.fontawesome.com/releases/v5.0.4/js/all.js', false, '5.0.4', null);
		wp_enqueue_script('font-awesome');

		wp_register_script('open-sans', 'https://fonts.googleapis.com/css?family=Open+Sans', false, '5.0.4', null);
		wp_enqueue_script('open-sans');

	  	wp_register_script('modernizr',  'https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js', false, '2.8.3', true);
		wp_enqueue_script('modernizr');

		wp_register_script('jquery-3.3.1', 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js', false, '3.3.1', true);
		wp_enqueue_script('jquery-3.3.1');

		wp_register_script( 'gsap-js', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.4/TweenMax.min.js', array(), false, true );
		wp_enqueue_script('gsap-js');

		wp_register_script('draw-svg', get_template_directory_uri() . '/theme/js/DrawSVGPlugin.min.js', false, null, true);
		wp_enqueue_script('draw-svg');

		wp_register_script('count-up', get_template_directory_uri() . '/theme/js/countUp.js', false, null, true);
		wp_enqueue_script('count-up');

		wp_register_script('popper',  'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js', false, '1.12.9', true);
		wp_enqueue_script('popper');

	  wp_register_script('bootstrap-js', 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/js/bootstrap.min.js', false, '4.0.0', true);
		wp_enqueue_script('bootstrap-js');

		wp_register_script('b4st-js', get_template_directory_uri() . '/theme/js/b4st.js', false, null, true);
		wp_enqueue_script('b4st-js');

		wp_register_script('util-js', get_template_directory_uri() . '/theme/js/util.js', false, null, true);
		wp_enqueue_script('util-js');

		wp_register_script('custom-shop-code-js', get_template_directory_uri() . '/theme/js/custom-shop-code.js', false, null, true);
		wp_enqueue_script('custom-shop-code-js');

		if (is_singular() && comments_open() && get_option('thread_comments')) {
			wp_enqueue_script('comment-reply');
		}
	}
}
add_action('wp_enqueue_scripts', 'b4st_enqueues', 100);
