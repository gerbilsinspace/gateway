(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    0: function(t, e, n) {
      n('GcxT'), (t.exports = n('nOHt'));
    },
    '1TCz': function(t, e, n) {
      'use strict';
      n.r(e);
      var r = n('1OyB'),
        c = n('vuIU'),
        i = n('Ji7U'),
        o = n('md7G'),
        a = n('foSv'),
        u = n('8Bbg'),
        s = n.n(u),
        l = n('8Kt/'),
        p = n.n(l),
        f = n('q1tI'),
        h = n.n(f),
        d = n('+oZ+'),
        v = h.a.createElement;
      function y() {
        if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' === typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function() {})
            ),
            !0
          );
        } catch (t) {
          return !1;
        }
      }
      var m = (function(t) {
        Object(i.a)(u, t);
        var e,
          n = ((e = u),
          function() {
            var t,
              n = Object(a.a)(e);
            if (y()) {
              var r = Object(a.a)(this).constructor;
              t = Reflect.construct(n, arguments, r);
            } else t = n.apply(this, arguments);
            return Object(o.a)(this, t);
          });
        function u() {
          return Object(r.a)(this, u), n.apply(this, arguments);
        }
        return (
          Object(c.a)(u, [
            {
              key: 'render',
              value: function() {
                var t = this.props,
                  e = t.Component,
                  n = t.pageProps,
                  r = {small: 768, medium: 991, large: 1021, xlarge: 1 / 0};
                return v(
                  d.BreakpointsProvider,
                  {breakpoints: r},
                  v(
                    p.a,
                    null,
                    v('link', {href: '/static/slick.css', rel: 'stylesheet'}),
                    v('link', {
                      href: '/static/slick-theme.css',
                      rel: 'stylesheet'
                    }),
                    v('link', {
                      href: '/static/rc-slider.css',
                      rel: 'stylesheet'
                    }),
                    v('link', {href: '/static/index.css', rel: 'stylesheet'}),
                    v('meta', {
                      name: 'viewport',
                      content: 'initial-scale=1.0, width=device-width'
                    }),
                    v('link', {
                      rel: 'shortcut icon',
                      href: '/static/favicon.ico',
                      type: 'image/x-icon'
                    }),
                    v('title', {key: 'title'}, 'Gateway Church, York')
                  ),
                  v(e, n)
                );
              }
            }
          ]),
          u
        );
      })(s.a);
      e.default = m;
    },
    '8Bbg': function(t, e, n) {
      t.exports = n('B5Ud');
    },
    B5Ud: function(t, e, n) {
      'use strict';
      var r = n('lwsE'),
        c = n('W8MJ'),
        i = n('a1gu'),
        o = n('Nsbk'),
        a = n('7W2i'),
        u = n('o0o1');
      function s() {
        if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' === typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function() {})
            ),
            !0
          );
        } catch (t) {
          return !1;
        }
      }
      var l = n('TqRt');
      (e.__esModule = !0),
        (e.Container = function(t) {
          0;
          return t.children;
        }),
        (e.createUrl = v),
        (e.default = void 0);
      var p = l(n('q1tI')),
        f = n('g/15');
      function h(t) {
        var e, n, r;
        return u.async(
          function(c) {
            for (;;)
              switch ((c.prev = c.next)) {
                case 0:
                  return (
                    (e = t.Component),
                    (n = t.ctx),
                    (c.next = 3),
                    u.awrap((0, f.loadGetInitialProps)(e, n))
                  );
                case 3:
                  return (r = c.sent), c.abrupt('return', {pageProps: r});
                case 5:
                case 'end':
                  return c.stop();
              }
          },
          null,
          null,
          null,
          Promise
        );
      }
      e.AppInitialProps = f.AppInitialProps;
      var d = (function(t) {
        a(u, t);
        var e,
          n = ((e = u),
          function() {
            var t,
              n = o(e);
            if (s()) {
              var r = o(this).constructor;
              t = Reflect.construct(n, arguments, r);
            } else t = n.apply(this, arguments);
            return i(this, t);
          });
        function u() {
          return r(this, u), n.apply(this, arguments);
        }
        return (
          c(u, [
            {
              key: 'componentDidCatch',
              value: function(t, e) {
                throw t;
              }
            },
            {
              key: 'render',
              value: function() {
                var t = this.props,
                  e = t.router,
                  n = t.Component,
                  r = t.pageProps,
                  c = t.__N_SSG,
                  i = t.__N_SSP;
                return p.default.createElement(
                  n,
                  Object.assign({}, r, c || i ? {} : {url: v(e)})
                );
              }
            }
          ]),
          u
        );
      })(p.default.Component);
      function v(t) {
        var e = t.pathname,
          n = t.asPath,
          r = t.query;
        return {
          get query() {
            return r;
          },
          get pathname() {
            return e;
          },
          get asPath() {
            return n;
          },
          back: function() {
            t.back();
          },
          push: function(e, n) {
            return t.push(e, n);
          },
          pushTo: function(e, n) {
            var r = n ? e : '',
              c = n || e;
            return t.push(r, c);
          },
          replace: function(e, n) {
            return t.replace(e, n);
          },
          replaceTo: function(e, n) {
            var r = n ? e : '',
              c = n || e;
            return t.replace(r, c);
          }
        };
      }
      (e.default = d), (d.origGetInitialProps = h), (d.getInitialProps = h);
    },
    GcxT: function(t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function() {
          return n('1TCz');
        }
      ]);
    }
  },
  [[0, 0, 1, 2, 3]]
]);
