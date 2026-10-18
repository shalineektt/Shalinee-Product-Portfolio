(function () {
  'use strict';
  var IDX = {"scinode-customers": {"n": "01", "s": "Sc", "t": "Scinode Customers", "g": "scinode"}, "scinode-admin": {"n": "02", "s": "Ad", "t": "Scinode Admin", "g": "scinode"}, "scinode-for-researchers": {"n": "03", "s": "Rs", "t": "Scinode for Researchers", "g": "scinode"}, "scinode-deep-research": {"n": "04", "s": "Dr", "t": "Scinode Deep Research", "g": "scinode"}, "nucleus-rd": {"n": "05", "s": "Nu", "t": "Nucleus R&D", "g": "scinode"}, "centric-plm": {"n": "06", "s": "Cp", "t": "Centric PLM", "g": "kripya"}, "phonepe-rewards": {"n": "07", "s": "Pp", "t": "PhonePe Rewards", "g": "think"}, "magicbricks": {"n": "08", "s": "Mb", "t": "Magicbricks", "g": "think"}, "healthcare-plus": {"n": "09", "s": "Hc", "t": "HealthCare Plus+", "g": "think"}, "lets-slack": {"n": "10", "s": "Ls", "t": "Let’s Slack", "g": "think"}, "pharmeasy-spotify": {"n": "11", "s": "Pe", "t": "PharmEasy and Spotify", "g": "think"}, "digii-campus": {"n": "12", "s": "Dc", "t": "Digii Campus", "g": "think"}, "gynoveda": {"n": "13", "s": "Gy", "t": "Gynoveda", "g": "think"}, "makemytrip": {"n": "14", "s": "Mm", "t": "MakeMyTrip", "g": "think"}, "zerodha": {"n": "15", "s": "Zr", "t": "Zerodha", "g": "think"}};
  var file = (location.pathname.split('/').pop() || 'index.html').replace('.html', '') || 'index';

  // element badge on case-study headers
  var e = IDX[file];
  if (e) {
    var h1 = document.querySelector('main h1');
    if (h1 && h1.parentElement) {
      var box = h1.parentElement;
      box.style.position = 'relative';
      box.classList.add('has-badge');
      var b = document.createElement('div');
      b.className = 'el-badge';
      b.setAttribute('aria-hidden', 'true');
      b.setAttribute('data-g', e.g);
      b.innerHTML = '<i>' + e.n + '</i><b>' + e.s + '</b><span>' + e.t + '</span>';
      box.appendChild(b);
    }
  }

  // spotlight on index tiles
  [].slice.call(document.querySelectorAll('.el')).forEach(function (el) {
    el.addEventListener('pointermove', function (ev) {
      var r = el.getBoundingClientRect();
      el.style.setProperty('--mx', (ev.clientX - r.left) + 'px');
      el.style.setProperty('--my', (ev.clientY - r.top) + 'px');
    });
  });

  // filter chips
  var chips = [].slice.call(document.querySelectorAll('.fchip'));
  chips.forEach(function (c) {
    c.addEventListener('click', function () {
      var g = c.getAttribute('data-f');
      chips.forEach(function (x) { x.setAttribute('aria-pressed', x === c ? 'true' : 'false'); });
      [].slice.call(document.querySelectorAll('.el')).forEach(function (el) {
        var on = g === 'all' || el.getAttribute('data-g') === g;
        el.classList.toggle('is-off', !on);
      });
    });
  });
})();
