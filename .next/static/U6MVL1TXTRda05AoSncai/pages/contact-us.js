(window.webpackJsonp = window.webpackJsonp || []).push([
  [12],
  {
    GvIb: function(t, n, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/contact-us',
        function() {
          return e('taXs');
        }
      ]);
    },
    taXs: function(t, n, e) {
      'use strict';
      e.r(n);
      var c = e('ODXe'),
        u = e('h4VS'),
        o = e('q1tI'),
        a = e.n(o),
        r = e('vOnD'),
        i = e('8Kt/'),
        l = e.n(i),
        b = e('pRT7'),
        s = e('hd/a'),
        d = e('d+M8'),
        f = e('rQ2n'),
        p = e('ff+w'),
        O = a.a.createElement;
      function j() {
        var t = Object(u.a)([
          '\n  color: ',
          ';\n  border-radius: 10px;\n  border: 5px solid ',
          ';\n  padding: 10px 20px;\n  display: inline-block;\n  margin-top: 20px;\n'
        ]);
        return (
          (j = function() {
            return t;
          }),
          t
        );
      }
      function h() {
        var t = Object(u.a)([
          '\n  background-color: ',
          ';\n  color: white;\n  padding: 35px;\n  line-height: 30px;\n'
        ]);
        return (
          (h = function() {
            return t;
          }),
          t
        );
      }
      var w = r.a.div(h(), function(t) {
          return t.colour;
        }),
        g = r.a.a(
          j(),
          function(t) {
            return t.colour;
          },
          function(t) {
            return t.colour;
          }
        );
      n.default = function() {
        var t = Object(o.useState)(!0),
          n = t[0],
          e = t[1],
          u = Object(o.useState)(''),
          r = u[0],
          i = u[1],
          j = Object(o.useState)(''),
          h = j[0],
          v = j[1],
          x = Object(o.useState)(''),
          k = x[0],
          S = x[1],
          m = Object(o.useState)(''),
          _ = m[0],
          E = m[1],
          X = Object(o.useState)(''),
          y = X[0],
          G = X[1],
          H = Object(o.useState)(''),
          I = H[0],
          T = H[1];
        return (
          Object(o.useEffect)(function() {
            Object(b.c)('data/contact-us.json').then(function(t) {
              var n = Object(b.b)(Object(b.g)(t)),
                u = Object(c.a)(n, 3),
                o = u[0],
                a = u[1],
                r = u[2];
              S(o), E(a), G(r), i(t.title), v(t.image), T(t.deck), e(!1);
            });
          }, []),
          n
            ? O('div', null)
            : O(
                a.a.Fragment,
                null,
                O(
                  l.a,
                  null,
                  O(
                    'title',
                    {key: 'title'},
                    'Contact Us - Gateway Church, York'
                  )
                ),
                O(s.a, {
                  colour: k,
                  colourHex: _,
                  colourHexLight: y,
                  title: r,
                  image: h,
                  Header: d.a
                }),
                O(
                  w,
                  {colour: _},
                  O(
                    f.a,
                    null,
                    O('p', null, I),
                    O(
                      'p',
                      null,
                      O(
                        g,
                        {colour: y, href: 'mailto:office@gatewaychurch.co.uk'},
                        'Email'
                      )
                    )
                  )
                ),
                O(p.a, null)
              )
        );
      };
    }
  },
  [['GvIb', 0, 1, 6, 4, 2, 3, 5]]
]);
