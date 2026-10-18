(function () {
  'use strict';
  function spy(links, targets) {
    if (!('IntersectionObserver' in window) || !links.length) return;
    var map = {};
    links.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        links.forEach(function (a) { a.classList.remove('is-on'); });
        var a = map[e.target.id]; if (a) a.classList.add('is-on');
        if (a && a.parentElement && a.parentElement.scrollTo && a.closest('.toc-in')) {
          var box = a.parentElement; box.scrollTo({ left: Math.max(0, a.offsetLeft - 24), behavior: 'smooth' });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    targets.forEach(function (t) { io.observe(t); });
  }
  // case-study "on this page"
  var toc = [].slice.call(document.querySelectorAll('.toc a'));
  if (toc.length) {
    spy(toc, toc.map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); }).filter(Boolean));
  }
  // home nav
  var nav = [].slice.call(document.querySelectorAll('.nav-links a[href^="#"]:not(.cta)')).filter(function (a) { return a.getAttribute('href').length > 1 && document.getElementById(a.getAttribute('href').slice(1)); });
  if (nav.length) {
    spy(nav, nav.map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); }));
    window.addEventListener('scroll', function () { if (window.scrollY < 300) nav.forEach(function (a) { a.classList.remove('is-on'); }); }, { passive: true });
  }
})();

// click a screenshot to view it full size
(function () {
  'use strict';
  var imgs = [].slice.call(document.querySelectorAll('.shot-frame img, .depth img'));
  if (!imgs.length) return;
  var lb = document.createElement('div');
  lb.className = 'lb'; lb.setAttribute('role', 'dialog'); lb.setAttribute('aria-modal', 'true'); lb.setAttribute('aria-label', 'Screenshot');
  lb.innerHTML = '<button class="lb-x" type="button" aria-label="Close">×</button><img alt="" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">';
  document.body.appendChild(lb);
  var big = lb.querySelector('img');
  function close() { lb.classList.remove('on'); document.documentElement.style.overflow = ''; }
  imgs.forEach(function (im) {
    im.addEventListener('click', function () {
      big.src = im.currentSrc || im.src; big.alt = im.alt || '';
      lb.classList.add('on'); document.documentElement.style.overflow = 'hidden';
    });
  });
  lb.addEventListener('click', close);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
})();
