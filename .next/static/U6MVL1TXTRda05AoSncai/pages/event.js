(window.webpackJsonp = window.webpackJsonp || []).push([
  [14],
  {
    '1zcF': function(n, t, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/event',
        function() {
          return e('mQkX');
        }
      ]);
    },
    mQkX: function(n, t, e) {
      'use strict';
      e.r(t);
      var o = e('ODXe'),
        r = e('h4VS'),
        i = e('q1tI'),
        a = e.n(i),
        c = e('vOnD'),
        u = e('wd/R'),
        l = e.n(u),
        d = e('nOHt'),
        s = e('8Kt/'),
        f = e.n(s),
        p = e('jdwX'),
        m = e('c3X+'),
        b = e('hd/a'),
        h = e('ff+w'),
        j = e('d+M8'),
        w = e('rQ2n'),
        g = e('xY5u'),
        O = e('lHlY'),
        x = e('pRT7'),
        v = a.a.createElement;
      function k() {
        var n = Object(r.a)(['\n  p {\n    margin-bottom: 1em;\n  }\n']);
        return (
          (k = function() {
            return n;
          }),
          n
        );
      }
      function S() {
        var n = Object(r.a)([
          '\n  color: ',
          ';\n  display: inline-block;\n  border: 3px solid ',
          ';\n  padding: 10px;\n  border-radius: 5px;\n  margin-top: 10px;\n'
        ]);
        return (
          (S = function() {
            return n;
          }),
          n
        );
      }
      function H() {
        var n = Object(r.a)([
          '\n  padding: 20px;\n  background-color: ',
          ';\n  color: white;\n  line-height: 1.3em;\n  margin-bottom: 60px;\n\n  @media screen and (min-width: 991px) {\n    float: right;\n    width: calc(60% - 40px);\n  }\n\n  li {\n    list-style: inside;\n    margin-bottom: 10px;\n  }\n'
        ]);
        return (
          (H = function() {
            return n;
          }),
          n
        );
      }
      function Y() {
        var n = Object(r.a)([
          '\n  padding: 20px;\n  background-color: ',
          ';\n  color: white;\n  line-height: 1.3em;\n  margin-bottom: 60px;\n\n  @media screen and (min-width: 991px) {\n    float: left;\n    width: calc(40% - 40px);\n  }\n'
        ]);
        return (
          (Y = function() {
            return n;
          }),
          n
        );
      }
      function _() {
        var n = Object(r.a)([
          '\n  font-size: 30px;\n  line-height: 1.5em;\n  color: #fff;\n  text-align: center;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  transform: translateY(-50%);\n\n  @media screen and (min-width: 768px) {\n    font-size: 90px;\n  }\n'
        ]);
        return (
          (_ = function() {
            return n;
          }),
          n
        );
      }
      function T() {
        var n = Object(r.a)([
          '\n  height: 200px;\n  position: relative;\n  background-color: ',
          ';\n  color: white;\n  text-decoration: none;\n\n  @media screen and (min-width: 768px) {\n    height: 500px;\n  }\n'
        ]);
        return (
          (T = function() {
            return n;
          }),
          n
        );
      }
      var X = c.a.div(T(), function(n) {
          return n.colour;
        }),
        M = c.a.h2(_()),
        y = c.a.div(Y(), function(n) {
          return n.colour;
        }),
        L = c.a.div(H(), function(n) {
          return n.colour;
        }),
        z = c.a.a(
          S(),
          function(n) {
            return n.colour;
          },
          function(n) {
            return n.colour;
          }
        ),
        D = c.a.div(k());
      t.default = function() {
        var n = Object(i.useState)(!0),
          t = n[0],
          e = n[1],
          r = Object(i.useState)(''),
          c = r[0],
          u = r[1],
          s = Object(i.useState)(''),
          k = s[0],
          S = s[1],
          H = Object(i.useState)(''),
          Y = H[0],
          _ = H[1],
          T = Object(i.useState)(''),
          E = T[0],
          F = T[1],
          P = Object(i.useState)(''),
          Q = P[0],
          R = P[1],
          C = Object(i.useState)(''),
          I = C[0],
          J = C[1],
          N = Object(i.useState)(''),
          V = N[0],
          q = N[1],
          G = Object(i.useState)(''),
          K = G[0],
          A = G[1],
          B = Object(d.useRouter)()
            .asPath.split(' ')
            .join('-')
            .split('%20')
            .join('-')
            .toLowerCase();
        return (
          Object(i.useEffect)(function() {
            Object(x.c)('data/'.concat(B, '.json')).then(function(n) {
              var t = Object(x.b)(Object(x.g)(n)),
                r = Object(o.a)(t, 3),
                i = r[0],
                a = r[1],
                c = r[2];
              J(i),
                q(a),
                A(c),
                _(l()(n.dateTime).format('dddd DD MMM YYYY')),
                F(l()(n.dateTime).format('HH:mm')),
                u(n.title),
                S(n.image),
                R(n.article),
                e(!1);
            });
          }, []),
          t
            ? v('div', null)
            : v(
                a.a.Fragment,
                null,
                v(
                  f.a,
                  null,
                  v('title', {key: 'title'}, c, ' - Gateway Church, York')
                ),
                v(b.a, {
                  colour: I,
                  colourHex: V,
                  colourHexLight: K,
                  Header: j.a
                }),
                v(
                  'main',
                  null,
                  v(
                    X,
                    {colour: V},
                    v(g.a, {url: Object(x.d)(k)}),
                    v(M, null, c)
                  ),
                  v(
                    w.a,
                    null,
                    v(y, {colour: K}, v('div', null, Y), v('div', null, E)),
                    v(
                      L,
                      {colour: V},
                      Q &&
                        v(
                          a.a.Fragment,
                          null,
                          v(D, {
                            dangerouslySetInnerHTML: {
                              __html: p.markdown.toHTML(Q)
                            }
                          }),
                          v(
                            m.Link,
                            {href: '/events', passHref: !0},
                            v(z, {colour: K}, 'View a list of all events')
                          )
                        )
                    ),
                    v(O.a, null)
                  )
                ),
                v(h.a, null)
              )
        );
      };
    }
  },
  [['1zcF', 0, 1, 6, 4, 2, 3, 5, 8, 9]]
]);
