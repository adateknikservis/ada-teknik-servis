// Telefon aramalarında Google Ads dönüşüm olayı gönderilir.
function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof url !== 'undefined' && url) window.location.href = url;
  };
  if (typeof gtag === 'function') {
    gtag('event', 'conversion', {
      'send_to': 'AW-18052207014/eoxZCLbUo_McEKaj-59D',
      'value': 1.0,
      'currency': 'TRY',
      'event_callback': callback,
      'event_timeout': 1500
    });
  }
  if (typeof url !== 'undefined' && url) {
    setTimeout(function(){ window.location.href = url; }, 1500);
  }
  return false;
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[data-call]').forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      gtag_report_conversion(link.href);
    });
  });

  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var opened = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', opened ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (item) {
      item.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
});
