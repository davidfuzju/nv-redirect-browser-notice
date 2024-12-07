=== NV Redirect Browser Notice ===
Contributors: David FU
Tags: browser detection, user experience, redirect notice
Requires at least: 5.0
Tested up to: 6.4
Requires PHP: 7.4
Stable tag: 1.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Detect in-app browsers and guide users to open the website in their system browser for the best experience.

== Description ==

**NV Redirect Browser Notice** detects when users open the website in specific in-app browsers, such as WeChat, and guides them to open the site in their system browser. The plugin overlays a notice and locks user interaction with the current page to prevent confusion. 

Features:
- Automatically detects in-app browsers like WeChat.
- Displays a customizable notice with multi-language support.
- Locks user interaction with the original page to guide better usage.
- Fully responsive and supports small screen devices.
- Compatible with WPML for multi-language environments.

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/nv-redirect-browser-notice` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the 'Plugins' screen in WordPress.
3. No additional setup is required; the plugin works out of the box.

== Frequently Asked Questions ==

= Which browsers does the plugin detect? =
Currently, the plugin detects browsers like WeChat. You can extend the detection logic in `js/nv-browser-notice.js`.

= How do I customize the notice text? =
The notice text can be modified via the WordPress admin area if WPML is installed. Alternatively, you can directly edit the localized text in the plugin’s PHP file.

= Does the plugin support multi-language? =
Yes, the plugin is compatible with WPML for multi-language support.

== Screenshots ==

1. **Example notice**: The notice displayed in an in-app browser.
2. **Multi-language support**: Example notice in a different language.
3. **Responsive design**: Notice layout on a small screen.

== Changelog ==

= 1.0 =
* Initial release with basic functionality.
* Detect in-app browsers.
* Display a notice with system browser guidance.
* Lock user interactions on the original page.

== Upgrade Notice ==

= 1.0 =
First release of the plugin. Install to enhance the user experience for in-app browser visitors.