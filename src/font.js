!(function(d) {
  var e,
    l =
      '<svg><symbol id="icon-add" viewBox="0 0 1024 1024"><path d="M506.83068651 972.52299106c-253.57580322 0-459.88264913-206.30684576-459.8826491-459.88264905s206.30684576-459.88264913 459.8826491-459.8826489 459.88264913 206.30684576 459.88264927 459.8826489-206.29520623 459.88264913-459.88264927 459.88264905z m0-861.55230987c-221.4771603 0-401.66966071 180.19250042-401.66966084 401.66966082s180.19250042 401.66966071 401.66966084 401.66966077 401.66966071-180.19250042 401.66966099-401.66966077-180.18086076-401.66966071-401.66966099-401.66966082z" fill="#1296db" ></path><path d="M765.2614472 547.56814069H260.05416494a29.10649413 29.10649413 0 1 1 0-58.21299783h505.20728226a29.10649413 29.10649413 0 1 1 0 58.21299783z" fill="#1296db" ></path><path d="M512.65198161 809.52661635a29.10649413 29.10649413 0 0 1-29.10649422-29.10650362v-523.91694194a29.10649413 29.10649413 0 1 1 58.21299789 0v523.91694194a29.10649413 29.10649413 0 0 1-29.10650367 29.10650362z" fill="#1296db" ></path></symbol><symbol id="icon-close" viewBox="0 0 1024 1024"><path d="M512 1015.741935C233.785806 1015.741935 8.258065 790.214194 8.258065 512S233.785806 8.258065 512 8.258065 1015.741935 233.785806 1015.741935 512 790.214194 1015.741935 512 1015.741935z m0-49.548387c250.846968 0 454.193548-203.346581 454.193548-454.193548S762.846968 57.806452 512 57.806452 57.806452 261.153032 57.806452 512 261.153032 966.193548 512 966.193548z" fill="#0069F6" ></path><path d="M512 476.96929l105.108645-105.108645a24.774194 24.774194 0 0 1 35.03071 35.03071L547.03071 512l105.108645 105.108645a24.774194 24.774194 0 0 1-35.03071 35.03071L512 547.03071l-105.108645 105.108645a24.774194 24.774194 0 0 1-35.03071-35.03071L476.96929 512l-105.108645-105.108645a24.774194 24.774194 0 0 1 35.03071-35.03071L512 476.96929z" fill="#5ED7BC" ></path></symbol></svg>',
    t = (e = document.getElementsByTagName("script"))[
      e.length - 1
    ].getAttribute("data-injectcss");
  if (t && !d.__iconfont__svg__cssinject__) {
    d.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
      );
    } catch (e) {
      console && console.log(e);
    }
  }
  !(function(e) {
    if (document.addEventListener)
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState))
        setTimeout(e, 0);
      else {
        var t = function() {
          document.removeEventListener("DOMContentLoaded", t, !1), e();
        };
        document.addEventListener("DOMContentLoaded", t, !1);
      }
    else
      document.attachEvent &&
        ((o = e),
        (i = d.document),
        (a = !1),
        (l = function() {
          try {
            i.documentElement.doScroll("left");
          } catch (e) {
            return void setTimeout(l, 50);
          }
          n();
        })(),
        (i.onreadystatechange = function() {
          "complete" == i.readyState && ((i.onreadystatechange = null), n());
        }));
    function n() {
      a || ((a = !0), o());
    }
    var o, i, a, l;
  })(function() {
    var e, t, n, o, i, a;
    ((e = document.createElement("div")).innerHTML = l),
      (l = null),
      (t = e.getElementsByTagName("svg")[0]) &&
        (t.setAttribute("aria-hidden", "true"),
        (t.style.position = "absolute"),
        (t.style.width = 0),
        (t.style.height = 0),
        (t.style.overflow = "hidden"),
        (n = t),
        (o = document.body).firstChild
          ? ((i = n), (a = o.firstChild).parentNode.insertBefore(i, a))
          : o.appendChild(n));
  });
})(window);
