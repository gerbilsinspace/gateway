(window.webpackJsonp = window.webpackJsonp || []).push([
  [15],
  {
    '9uM0': function(n, t, e) {
      'use strict';
      var r = e('h4VS');
      function a() {
        var n = Object(r.a)([
          '\n  padding: 100px 20px;\n  margin-bottom: 20px;\n  text-align: center;\n  font-size: 30px;\n  line-height: 36px;\n  color: #fff;\n  background-color: ',
          ';\n'
        ]);
        return (
          (a = function() {
            return n;
          }),
          n
        );
      }
      var i = e('vOnD').a.div(a(), function(n) {
        return n.color;
      });
      t.a = i;
    },
    UGbB: function(n, t, e) {
      'use strict';
      e.r(t);
      var r = e('ODXe'),
        a = e('h4VS'),
        i = e('q1tI'),
        o = e.n(i),
        u = e('vOnD'),
        c = e('wd/R'),
        l = e.n(c),
        f = e('8Kt/'),
        d = e.n(f),
        p = e('c3X+'),
        s = e('hd/a'),
        b = e('ff+w'),
        m = e('rQ2n'),
        g = e('d+M8'),
        v = e('xY5u'),
        h = e('o9Sz'),
        x = e('9uM0'),
        j = e('lHlY'),
        O = e('+oZ+'),
        k = e('pRT7'),
        w = o.a.createElement;
      function S() {
        var n = Object(a.a)(['\n  margin-bottom: 20px;\n']);
        return (
          (S = function() {
            return n;
          }),
          n
        );
      }
      function y() {
        var n = Object(a.a)([
          '\n  margin: 20px 0;\n  font-size: 30px;\n  line-height: 36px;\n'
        ]);
        return (
          (y = function() {
            return n;
          }),
          n
        );
      }
      function H() {
        var n = Object(a.a)([
          '\n  @media screen and (min-width: 991px) {\n    margin-top: 50px;\n    margin-bottom: 20px;\n  }\n'
        ]);
        return (
          (H = function() {
            return n;
          }),
          n
        );
      }
      function M() {
        var n = Object(a.a)([
          '\n  margin-top: -35px;\n  margin-bottom: -35px;\n  margin-right: -35px;\n'
        ]);
        return (
          (M = function() {
            return n;
          }),
          n
        );
      }
      function T() {
        var n = Object(a.a)(['\n  float: right;\n  width: 40%;\n']);
        return (
          (T = function() {
            return n;
          }),
          n
        );
      }
      function z() {
        var n = Object(a.a)([
          '\n  @media screen and (min-width: 991px) {\n    float: left;\n    width: 60%;\n    font-size: 24px;\n    line-height: 30px;\n  }\n'
        ]);
        return (
          (z = function() {
            return n;
          }),
          n
        );
      }
      function Y() {
        var n = Object(a.a)([
          '\n  padding: 100px 20px;\n  text-align: center;\n  font-size: 24px;\n  line-height: 1.3em;\n  color: #fff;\n\n  @media screen and (min-width: 991px) {\n    font-size: 30px;\n    line-height: 36px;\n    padding: 100px 20%;\n  }\n'
        ]);
        return (
          (Y = function() {
            return n;
          }),
          n
        );
      }
      function B() {
        var n = Object(a.a)([
          '\n  padding: 35px;\n  background: ',
          ';\n  color: #fff;\n  line-height: 30px;\n  margin: 20px 0 20px;\n  display: block;\n'
        ]);
        return (
          (B = function() {
            return n;
          }),
          n
        );
      }
      function D() {
        var n = Object(a.a)([
          '\n  background: ',
          ';\n  padding: 10px 20px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  color: #fff;\n'
        ]);
        return (
          (D = function() {
            return n;
          }),
          n
        );
      }
      function _() {
        var n = Object(a.a)([
          '\n  display: inline-block;\n  margin-right: 20px;\n  color: #fff;\n  border-bottom: 2px solid #fff;\n'
        ]);
        return (
          (_ = function() {
            return n;
          }),
          n
        );
      }
      function C() {
        var n = Object(a.a)([
          '\n  display: inline-block;\n  margin-right: 20px;\n'
        ]);
        return (
          (C = function() {
            return n;
          }),
          n
        );
      }
      function E() {
        var n = Object(a.a)([
          '\n  padding: 40px;\n  background-color: ',
          ';\n  color: white;\n  margin-bottom: 20px;\n'
        ]);
        return (
          (E = function() {
            return n;
          }),
          n
        );
      }
      var I = u.a.div(E(), function(n) {
          return n.colour;
        }),
        P = u.a.div(C()),
        X = u.a.a(_()),
        G = function(n) {
          for (
            var t = n.maxCount,
              e = n.currentPage,
              r = void 0 === e ? 1 : e,
              a = [],
              i = 1;
            i < t + 1;
            i++
          )
            a.push(i);
          return a.map(function(n) {
            return n === r
              ? w(P, {key: n}, n)
              : w(
                  p.Link,
                  1 === n
                    ? {href: 'events', key: n, passHref: !0}
                    : {href: 'events?page='.concat(n), key: n, passHref: !0},
                  w(X, null, n)
                );
          });
        },
        L = u.a.div(D(), function(n) {
          return n.color;
        }),
        N = u.a.a(B(), function(n) {
          return n.color;
        }),
        R = u.a.p(Y()),
        U = u.a.div(z()),
        V = u.a.div(T()),
        A = Object(u.a)(h.a)(M()),
        F = u.a.div(H()),
        J = u.a.h1(y()),
        q = u.a.p(S()),
        K = function(n) {
          var t = n.events,
            e = n.color;
          return t.map(function(n) {
            var t = l()(n.dateTime).format('dddd, DD MMM YYYY'),
              r = l()(n.dateTime).format('HH:mm'),
              a = Object(k.d)(n.image),
              i = n.listImage && Object(k.d)(n.listImage),
              o = n.title
                .split('-')
                .map(function(n) {
                  return n[0].toUpperCase() + n.slice(1);
                })
                .join(' '),
              u = n.title.split('?').join('');
            return w(
              p.Link,
              {
                key: n.title + t + r,
                route: 'event',
                params: {id: u},
                passHref: !0
              },
              w(
                N,
                {color: e},
                w(
                  U,
                  null,
                  w('h2', null, o),
                  w('div', null, t),
                  w('div', null, r),
                  w(F, null, n.deck),
                  w('div', null, 'Read More +')
                ),
                w(
                  O.HideAt,
                  {breakpoint: 'mediumAndBelow'},
                  w(V, null, w(A, null, w(v.a, {url: i || a})))
                ),
                w(j.a, null)
              )
            );
          });
        };
      t.default = function(n) {
        var t = n.location,
          e = void 0 === t ? {} : t,
          a = Object(i.useState)(''),
          u = a[0],
          c = a[1],
          f = Object(i.useState)(''),
          p = f[0],
          j = f[1],
          O = Object(i.useState)(''),
          S = O[0],
          y = O[1],
          H = Object(i.useState)(''),
          M = H[0],
          T = H[1],
          z = Object(i.useState)(''),
          Y = z[0],
          B = z[1],
          D = Object(i.useState)(''),
          _ = D[0],
          C = D[1],
          E = Object(i.useState)(''),
          P = E[0],
          X = E[1],
          N = Object(i.useState)(''),
          U = N[0],
          V = N[1],
          A = Object(i.useState)([]),
          F = A[0],
          Q = A[1],
          Z = Object(i.useState)(0),
          W = Z[0],
          $ = Z[1],
          nn = Object(i.useState)(0),
          tn = nn[0],
          en = nn[1],
          rn = Object(i.useState)(1),
          an = rn[0],
          on = rn[1],
          un = Object(i.useState)(''),
          cn = un[0],
          ln = un[1],
          fn = Object(i.useState)(''),
          dn = fn[0],
          pn = fn[1];
        return (
          Object(i.useEffect)(function() {
            var n = e.search;
            n || (n = '?page=1'),
              on(parseInt(n.split('page=')[1], 10)),
              Promise.all([
                Object(k.c)('data/events/index.json'),
                Object(k.c)('data/pages/events.json')
              ]).then(function(n) {
                var t = Object(r.a)(n, 2),
                  e = t[0],
                  a = t[1],
                  i = Object(k.b)(Object(k.g)(e)),
                  o = Object(r.a)(i, 3),
                  u = o[0],
                  f = o[1],
                  d = o[2];
                y(u),
                  T(f),
                  B(d),
                  C(Object(k.d)(a.header.image)),
                  j(a.title),
                  X(Object(k.d)(a.subtitle.image)),
                  V(a.subtitle.subtitle),
                  ln(a.deck.title),
                  pn(a.deck.paragraph);
                var p = Object.values(e)
                    .map(function(n) {
                      return n.data;
                    })
                    .filter(function(n) {
                      return (
                        n &&
                        n.dateTime &&
                        !n.draft &&
                        l()().isBefore(n.dateTime)
                      );
                    })
                    .sort(function(n, t) {
                      return l()(n.dateTime).isBefore(t.dateTime) ? -1 : 1;
                    }),
                  s = p.length;
                $(s),
                  Q(p.slice(10 * an - 10, 10 * an)),
                  en(Math.ceil(s / 10)),
                  c(!1);
              });
          }, []),
          u
            ? w('div', null)
            : w(
                o.a.Fragment,
                null,
                w(
                  d.a,
                  null,
                  w('title', {key: 'title'}, 'Events - Gateway Church, York')
                ),
                w(s.a, {
                  colour: S,
                  colourHex: M,
                  colourHexLight: Y,
                  title: p,
                  image: _,
                  Header: g.a
                }),
                0 === W &&
                  w(
                    m.a,
                    null,
                    w(J, null, 'No events in the Calendar...'),
                    w(
                      q,
                      null,
                      'It looks like we forgot to keep our events updated, sorry about that!'
                    )
                  ),
                W > 0 &&
                  w(
                    o.a.Fragment,
                    null,
                    w(
                      m.a,
                      null,
                      P &&
                        w(
                          h.a,
                          null,
                          w(v.a, {url: P}),
                          w(m.a, null, w(x.a, {color: M}, U))
                        )
                    ),
                    w(
                      I,
                      {colour: M},
                      w(m.a, null, cn && w(H2, null, cn), dn && w(R, null, dn))
                    ),
                    tn > 1 &&
                      w(L, {color: M}, w(G, {maxCount: tn, currentPage: an})),
                    w(m.a, null, w(K, {events: F, color: Y}))
                  ),
                w(b.a, null)
              )
        );
      };
    },
    f8ys: function(n, t, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/events',
        function() {
          return e('UGbB');
        }
      ]);
    },
    o9Sz: function(n, t, e) {
      'use strict';
      var r = e('h4VS');
      function a() {
        var n = Object(r.a)([
          '\n  position: relative;\n  height: ',
          ';\n  background: ',
          ';\n  overflow: hidden;\n  margin-bottom: ',
          ';\n\n  @media screen and (min-width: 991px) {\n    height: 500px;\n  }\n'
        ]);
        return (
          (a = function() {
            return n;
          }),
          n
        );
      }
      var i = e('vOnD').a.div(
        a(),
        function(n) {
          return n.mobileHeight || '200px';
        },
        function(n) {
          return n.color;
        },
        function(n) {
          return n.mobileMarginBottom || '20px';
        }
      );
      t.a = i;
    }
  },
  [['f8ys', 0, 1, 6, 4, 2, 3, 5, 8]]
]);
