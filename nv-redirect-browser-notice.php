<?php

/**
 * Plugin Name:       NV Redirect Browser Notice
 * Plugin URI:        https://github.com/davidfuzju/nv-redirect-browser-notice
 * Description:       Show a notice when the user is visiting using specific browsers (e.g., in-app browsers like WeChat, LINE) and suggest switching to the default system browser.
 * Version:           1.0.0
 * Author:            David FU
 * Text Domain:       nv-redirect-browser-notice
 */

// Prevent direct access
if (! defined('ABSPATH')) {
    exit;
}

// holds the plugin path.
define('NV_REDIRECT_BROWSER_NOTICE_PATH', plugin_dir_path(__FILE__));
define('NV_REDIRECT_BROWSER_NOTICE_URI', plugin_dir_url(__FILE__));
define('NV_REDIRECT_BROWSER_NOTICE_VERSION', '1.0.0');

// Enqueue scripts and styles
function nv_redirect_browser_notice_enqueue_assets()
{
    wp_enqueue_style(
        'nv-browser-notice-style',
        NV_REDIRECT_BROWSER_NOTICE_URI . 'css/nv-browser-notice.css',
        array(),
        NV_REDIRECT_BROWSER_NOTICE_VERSION
    );

    wp_enqueue_script(
        'nv-browser-notice-script',
        NV_REDIRECT_BROWSER_NOTICE_URI . 'js/nv-browser-notice.js',
        array('jquery'),
        NV_REDIRECT_BROWSER_NOTICE_VERSION,
        true
    );

    // Pass translations to the script
    wp_localize_script('nv-browser-notice-script', 'translation', array(
        'noticeMessage' => __('It seems you are using an in-app browser. For the best experience, please open this page in your system browser.', 'nv-redirect-browser-notice'),
    ));
}
add_action('wp_enqueue_scripts', 'nv_redirect_browser_notice_enqueue_assets');
