(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    '/0+H': function(t, e, n) {
      'use strict';
      var r =
        (this && this.__importDefault) ||
        function(t) {
          return t && t.__esModule ? t : {default: t};
        };
      Object.defineProperty(e, '__esModule', {value: !0});
      var o = r(n('q1tI')),
        u = n('lwAK');
      function i() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = t.ampFirst,
          n = void 0 !== e && e,
          r = t.hybrid,
          o = void 0 !== r && r,
          u = t.hasQuery;
        return n || (o && (void 0 !== u && u));
      }
      (e.isInAmpMode = i),
        (e.useAmp = function() {
          return i(o.default.useContext(u.AmpStateContext));
        });
    },
    '1HF/': function(t, e, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/_error',
        function() {
          return n('Y0NT');
        }
      ]);
    },
    '1OyB': function(t, e, n) {
      'use strict';
      function r(t, e) {
        if (!(t instanceof e))
          throw new TypeError('Cannot call a class as a function');
      }
      n.d(e, 'a', function() {
        return r;
      });
    },
    '7W2i': function(t, e, n) {
      var r = n('SksO');
      t.exports = function(t, e) {
        if ('function' !== typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: {value: t, writable: !0, configurable: !0}
        })),
          e && r(t, e);
      };
    },
    '8Kt/': function(t, e, n) {
      'use strict';
      var r =
        (this && this.__importDefault) ||
        function(t) {
          return t && t.__esModule ? t : {default: t};
        };
      Object.defineProperty(e, '__esModule', {value: !0});
      var o = r(n('q1tI')),
        u = r(n('Xuae')),
        i = n('lwAK'),
        c = n('FYa8'),
        a = n('/0+H');
      function f() {
        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          e = [o.default.createElement('meta', {charSet: 'utf-8'})];
        return (
          t ||
            e.push(
              o.default.createElement('meta', {
                name: 'viewport',
                content: 'width=device-width'
              })
            ),
          e
        );
      }
      function s(t, e) {
        return 'string' === typeof e || 'number' === typeof e
          ? t
          : e.type === o.default.Fragment
          ? t.concat(
              o.default.Children.toArray(e.props.children).reduce(function(
                t,
                e
              ) {
                return 'string' === typeof e || 'number' === typeof e
                  ? t
                  : t.concat(e);
              },
              [])
            )
          : t.concat(e);
      }
      e.defaultHead = f;
      var l = ['name', 'httpEquiv', 'charSet', 'itemProp'];
      function p(t, e) {
        return t
          .reduce(function(t, e) {
            var n = o.default.Children.toArray(e.props.children);
            return t.concat(n);
          }, [])
          .reduce(s, [])
          .reverse()
          .concat(f(e.inAmpMode))
          .filter(
            (function() {
              var t = new Set(),
                e = new Set(),
                n = new Set(),
                r = {};
              return function(o) {
                var u = !0;
                if (
                  o.key &&
                  'number' !== typeof o.key &&
                  o.key.indexOf('$') > 0
                ) {
                  var i = o.key.slice(o.key.indexOf('$') + 1);
                  t.has(i) ? (u = !1) : t.add(i);
                }
                switch (o.type) {
                  case 'title':
                  case 'base':
                    e.has(o.type) ? (u = !1) : e.add(o.type);
                    break;
                  case 'meta':
                    for (var c = 0, a = l.length; c < a; c++) {
                      var f = l[c];
                      if (o.props.hasOwnProperty(f))
                        if ('charSet' === f) n.has(f) ? (u = !1) : n.add(f);
                        else {
                          var s = o.props[f],
                            p = r[f] || new Set();
                          p.has(s) ? (u = !1) : (p.add(s), (r[f] = p));
                        }
                    }
                }
                return u;
              };
            })()
          )
          .reverse()
          .map(function(t, e) {
            var n = t.key || e;
            return o.default.cloneElement(t, {key: n});
          });
      }
      var y = u.default();
      function d(t) {
        var e = t.children;
        return o.default.createElement(
          i.AmpStateContext.Consumer,
          null,
          function(t) {
            return o.default.createElement(
              c.HeadManagerContext.Consumer,
              null,
              function(n) {
                return o.default.createElement(
                  y,
                  {
                    reduceComponentsToState: p,
                    handleStateChange: n,
                    inAmpMode: a.isInAmpMode(t)
                  },
                  e
                );
              }
            );
          }
        );
      }
      (d.rewind = y.rewind), (e.default = d);
    },
    Bnag: function(t, e) {
      t.exports = function() {
        throw new TypeError('Invalid attempt to spread non-iterable instance');
      };
    },
    EbDI: function(t, e) {
      t.exports = function(t) {
        if (
          Symbol.iterator in Object(t) ||
          '[object Arguments]' === Object.prototype.toString.call(t)
        )
          return Array.from(t);
      };
    },
    FYa8: function(t, e, n) {
      'use strict';
      var r =
        (this && this.__importStar) ||
        function(t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var n in t) Object.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          return (e.default = t), e;
        };
      Object.defineProperty(e, '__esModule', {value: !0});
      var o = r(n('q1tI'));
      e.HeadManagerContext = o.createContext(null);
    },
    Ijbi: function(t, e) {
      t.exports = function(t) {
        if (Array.isArray(t)) {
          for (var e = 0, n = new Array(t.length); e < t.length; e++)
            n[e] = t[e];
          return n;
        }
      };
    },
    JX7q: function(t, e, n) {
      'use strict';
      function r(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      n.d(e, 'a', function() {
        return r;
      });
    },
    Ji7U: function(t, e, n) {
      'use strict';
      function r(t, e) {
        return (r =
          Object.setPrototypeOf ||
          function(t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function o(t, e) {
        if ('function' !== typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: {value: t, writable: !0, configurable: !0}
        })),
          e && r(t, e);
      }
      n.d(e, 'a', function() {
        return o;
      });
    },
    Nsbk: function(t, e) {
      function n(e) {
        return (
          (t.exports = n = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          n(e)
        );
      }
      t.exports = n;
    },
    PJYZ: function(t, e) {
      t.exports = function(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      };
    },
    Qetd: function(t, e, n) {
      'use strict';
      var r = Object.assign.bind(Object);
      (t.exports = r), (t.exports.default = t.exports);
    },
    RIqP: function(t, e, n) {
      var r = n('Ijbi'),
        o = n('EbDI'),
        u = n('Bnag');
      t.exports = function(t) {
        return r(t) || o(t) || u();
      };
    },
    SksO: function(t, e) {
      function n(e, r) {
        return (
          (t.exports = n =
            Object.setPrototypeOf ||
            function(t, e) {
              return (t.__proto__ = e), t;
            }),
          n(e, r)
        );
      }
      t.exports = n;
    },
    W8MJ: function(t, e) {
      function n(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      t.exports = function(t, e, r) {
        return e && n(t.prototype, e), r && n(t, r), t;
      };
    },
    Xuae: function(t, e, n) {
      'use strict';
      var r = n('lwsE'),
        o = n('PJYZ'),
        u = n('W8MJ'),
        i = n('a1gu'),
        c = n('Nsbk'),
        a = n('7W2i'),
        f = n('RIqP');
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
      Object.defineProperty(e, '__esModule', {value: !0});
      var l = n('q1tI'),
        p = !1;
      e.default = function() {
        var t,
          e = new Set();
        function n(n) {
          (t = n.props.reduceComponentsToState(f(e), n.props)),
            n.props.handleStateChange && n.props.handleStateChange(t);
        }
        return (function(f) {
          a(d, f);
          var l,
            y = ((l = d),
            function() {
              var t,
                e = c(l);
              if (s()) {
                var n = c(this).constructor;
                t = Reflect.construct(e, arguments, n);
              } else t = e.apply(this, arguments);
              return i(this, t);
            });
          function d(t) {
            var u;
            return (
              r(this, d), (u = y.call(this, t)), p && (e.add(o(u)), n(o(u))), u
            );
          }
          return (
            u(d, null, [
              {
                key: 'rewind',
                value: function() {
                  var n = t;
                  return (t = void 0), e.clear(), n;
                }
              }
            ]),
            u(d, [
              {
                key: 'componentDidMount',
                value: function() {
                  e.add(this), n(this);
                }
              },
              {
                key: 'componentDidUpdate',
                value: function() {
                  n(this);
                }
              },
              {
                key: 'componentWillUnmount',
                value: function() {
                  e.delete(this), n(this);
                }
              },
              {
                key: 'render',
                value: function() {
                  return null;
                }
              }
            ]),
            d
          );
        })(l.Component);
      };
    },
    Y0NT: function(t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'default', function() {
          return d;
        });
      var r = n('1OyB'),
        o = n('vuIU'),
        u = n('md7G'),
        i = n('foSv'),
        c = n('Ji7U'),
        a = n('q1tI'),
        f = n.n(a),
        s = n('8Kt/'),
        l = n.n(s),
        p = f.a.createElement;
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
      var d = (function(t) {
        Object(c.a)(a, t);
        var e,
          n = ((e = a),
          function() {
            var t,
              n = Object(i.a)(e);
            if (y()) {
              var r = Object(i.a)(this).constructor;
              t = Reflect.construct(n, arguments, r);
            } else t = n.apply(this, arguments);
            return Object(u.a)(this, t);
          });
        function a() {
          return Object(r.a)(this, a), n.apply(this, arguments);
        }
        return (
          Object(o.a)(
            a,
            [
              {
                key: 'render',
                value: function() {
                  return p(
                    'p',
                    null,
                    p(
                      l.a,
                      null,
                      p(
                        'title',
                        {key: 'title'},
                        'Error ',
                        this.props.statusCode,
                        ' - Gateway Church, York'
                      )
                    ),
                    this.props.statusCode
                      ? 'An error '.concat(
                          this.props.statusCode,
                          ' occurred on server'
                        )
                      : 'An error occurred on client'
                  );
                }
              }
            ],
            [
              {
                key: 'getInitialProps',
                value: function(t) {
                  var e = t.res,
                    n = t.err;
                  return {
                    statusCode: e ? e.statusCode : n ? n.statusCode : null
                  };
                }
              }
            ]
          ),
          a
        );
      })(f.a.Component);
    },
    a1gu: function(t, e, n) {
      var r = n('cDf5'),
        o = n('PJYZ');
      t.exports = function(t, e) {
        return !e || ('object' !== r(e) && 'function' !== typeof e) ? o(t) : e;
      };
    },
    cDf5: function(t, e) {
      function n(t) {
        return (n =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  'function' === typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      function r(e) {
        return (
          'function' === typeof Symbol && 'symbol' === n(Symbol.iterator)
            ? (t.exports = r = function(t) {
                return n(t);
              })
            : (t.exports = r = function(t) {
                return t &&
                  'function' === typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : n(t);
              }),
          r(e)
        );
      }
      t.exports = r;
    },
    foSv: function(t, e, n) {
      'use strict';
      function r(t) {
        return (r = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      n.d(e, 'a', function() {
        return r;
      });
    },
    lwAK: function(t, e, n) {
      'use strict';
      var r =
        (this && this.__importStar) ||
        function(t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var n in t) Object.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          return (e.default = t), e;
        };
      Object.defineProperty(e, '__esModule', {value: !0});
      var o = r(n('q1tI'));
      e.AmpStateContext = o.createContext({});
    },
    lwsE: function(t, e) {
      t.exports = function(t, e) {
        if (!(t instanceof e))
          throw new TypeError('Cannot call a class as a function');
      };
    },
    md7G: function(t, e, n) {
      'use strict';
      function r(t) {
        return (r =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function(t) {
                return typeof t;
              }
            : function(t) {
                return t &&
                  'function' === typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      function o(t) {
        return (o =
          'function' === typeof Symbol && 'symbol' === r(Symbol.iterator)
            ? function(t) {
                return r(t);
              }
            : function(t) {
                return t &&
                  'function' === typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : r(t);
              })(t);
      }
      n.d(e, 'a', function() {
        return i;
      });
      var u = n('JX7q');
      function i(t, e) {
        return !e || ('object' !== o(e) && 'function' !== typeof e)
          ? Object(u.a)(t)
          : e;
      }
    },
    vuIU: function(t, e, n) {
      'use strict';
      function r(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function o(t, e, n) {
        return e && r(t.prototype, e), n && r(t, n), t;
      }
      n.d(e, 'a', function() {
        return o;
      });
    }
  },
  [['1HF/', 0, 1]]
]);
