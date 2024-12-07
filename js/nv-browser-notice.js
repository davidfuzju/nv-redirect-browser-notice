jQuery(document).ready(function ($) {
  function isTargetBrowser() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    // Detect target browser (e.g., WeChat)
    return /MicroMessenger/i.test(userAgent);
  }

  function lockPageInteractions() {
    $("#nv-page-overlay").fadeIn();
    $("body").addClass("notice-active").css({
      overflow: "hidden", // Disable scrolling
    });
  }

  function unlockPageInteractions() {
    $("#nv-page-overlay").fadeOut();
    $("body").removeClass("notice-active").css({
      overflow: "", // Re-enable scrolling
    });
  }

  function adjustPageMargin() {
    // Adjust the body margin-top based on the height of the browser notice
    $("body").addClass("notice-active");
  }

  function resetPageMargin() {
    $("body").removeClass("notice-active");
  }

  // Dynamically add the HTML for the browser notice and overlay
  function injectNoticeHTML() {
    const overlayHTML =
      '<div id="nv-page-overlay" style="display: none;"></div>';
    const noticeHTML = `
            <div id="nv-browser-notice" style="display: none;">
                <div class="notice-content">
                    <img src="https://nuvous1.com/wp-content/uploads/2024/09/300-e1726400079646.png" alt="Brand Icon" class="brand-icon">
                    <p>为了获得更好的体验</br>请点击右上角的按钮，选择【在默认浏览器中打开】来访问完整版本</p>
                </div>
                <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" fill="#000000">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M12 4l1.41 1.41L7.83 11H20v2H7.83l5.58 5.59L12 20l-8-8 8-8z"/>
                </svg>
            </div>
        `;
    $("body").append(overlayHTML).append(noticeHTML);
  }

  // Initialize the browser notice if the target browser is detected
  if (isTargetBrowser()) {
    injectNoticeHTML();
    $("#nv-browser-notice").fadeIn();
    lockPageInteractions();
    adjustPageMargin();

    // Adjust page margin on window resize
    $(window).resize(adjustPageMargin);
  }
});
