(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    '7tlc': function(e, t, n) {
      (function(e) {
        var r =
            Object.getOwnPropertyDescriptors ||
            function(e) {
              for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++)
                n[t[r]] = Object.getOwnPropertyDescriptor(e, t[r]);
              return n;
            },
          i = /%[sdj%]/g;
        (t.format = function(e) {
          if (!v(e)) {
            for (var t = [], n = 0; n < arguments.length; n++)
              t.push(s(arguments[n]));
            return t.join(' ');
          }
          n = 1;
          for (
            var r = arguments,
              l = r.length,
              o = String(e).replace(i, function(e) {
                if ('%%' === e) return '%';
                if (n >= l) return e;
                switch (e) {
                  case '%s':
                    return String(r[n++]);
                  case '%d':
                    return Number(r[n++]);
                  case '%j':
                    try {
                      return JSON.stringify(r[n++]);
                    } catch (t) {
                      return '[Circular]';
                    }
                  default:
                    return e;
                }
              }),
              a = r[n];
            n < l;
            a = r[++n]
          )
            d(a) || !_(a) ? (o += ' ' + a) : (o += ' ' + s(a));
          return o;
        }),
          (t.deprecate = function(n, r) {
            if ('undefined' !== typeof e && !0 === e.noDeprecation) return n;
            if ('undefined' === typeof e)
              return function() {
                return t.deprecate(n, r).apply(this, arguments);
              };
            var i = !1;
            return function() {
              if (!i) {
                if (e.throwDeprecation) throw new Error(r);
                e.traceDeprecation ? console.trace(r) : console.error(r),
                  (i = !0);
              }
              return n.apply(this, arguments);
            };
          });
        var l,
          o = {};
        function s(e, n) {
          var r = {seen: [], stylize: c};
          return (
            arguments.length >= 3 && (r.depth = arguments[2]),
            arguments.length >= 4 && (r.colors = arguments[3]),
            g(n) ? (r.showHidden = n) : n && t._extend(r, n),
            y(r.showHidden) && (r.showHidden = !1),
            y(r.depth) && (r.depth = 2),
            y(r.colors) && (r.colors = !1),
            y(r.customInspect) && (r.customInspect = !0),
            r.colors && (r.stylize = a),
            u(r, e, r.depth)
          );
        }
        function a(e, t) {
          var n = s.styles[t];
          return n
            ? '\x1b[' +
                s.colors[n][0] +
                'm' +
                e +
                '\x1b[' +
                s.colors[n][1] +
                'm'
            : e;
        }
        function c(e, t) {
          return e;
        }
        function u(e, n, r) {
          if (
            e.customInspect &&
            n &&
            j(n.inspect) &&
            n.inspect !== t.inspect &&
            (!n.constructor || n.constructor.prototype !== n)
          ) {
            var i = n.inspect(r, e);
            return v(i) || (i = u(e, i, r)), i;
          }
          var l = (function(e, t) {
            if (y(t)) return e.stylize('undefined', 'undefined');
            if (v(t)) {
              var n =
                "'" +
                JSON.stringify(t)
                  .replace(/^"|"$/g, '')
                  .replace(/'/g, "\\'")
                  .replace(/\\"/g, '"') +
                "'";
              return e.stylize(n, 'string');
            }
            if (b(t)) return e.stylize('' + t, 'number');
            if (g(t)) return e.stylize('' + t, 'boolean');
            if (d(t)) return e.stylize('null', 'null');
          })(e, n);
          if (l) return l;
          var o = Object.keys(n),
            s = (function(e) {
              var t = {};
              return (
                e.forEach(function(e, n) {
                  t[e] = !0;
                }),
                t
              );
            })(o);
          if (
            (e.showHidden && (o = Object.getOwnPropertyNames(n)),
            w(n) &&
              (o.indexOf('message') >= 0 || o.indexOf('description') >= 0))
          )
            return f(n);
          if (0 === o.length) {
            if (j(n)) {
              var a = n.name ? ': ' + n.name : '';
              return e.stylize('[Function' + a + ']', 'special');
            }
            if (m(n))
              return e.stylize(RegExp.prototype.toString.call(n), 'regexp');
            if (k(n)) return e.stylize(Date.prototype.toString.call(n), 'date');
            if (w(n)) return f(n);
          }
          var c,
            _ = '',
            O = !1,
            x = ['{', '}'];
          (p(n) && ((O = !0), (x = ['[', ']'])), j(n)) &&
            (_ = ' [Function' + (n.name ? ': ' + n.name : '') + ']');
          return (
            m(n) && (_ = ' ' + RegExp.prototype.toString.call(n)),
            k(n) && (_ = ' ' + Date.prototype.toUTCString.call(n)),
            w(n) && (_ = ' ' + f(n)),
            0 !== o.length || (O && 0 != n.length)
              ? r < 0
                ? m(n)
                  ? e.stylize(RegExp.prototype.toString.call(n), 'regexp')
                  : e.stylize('[Object]', 'special')
                : (e.seen.push(n),
                  (c = O
                    ? (function(e, t, n, r, i) {
                        for (var l = [], o = 0, s = t.length; o < s; ++o)
                          $(t, String(o))
                            ? l.push(h(e, t, n, r, String(o), !0))
                            : l.push('');
                        return (
                          i.forEach(function(i) {
                            i.match(/^\d+$/) || l.push(h(e, t, n, r, i, !0));
                          }),
                          l
                        );
                      })(e, n, r, s, o)
                    : o.map(function(t) {
                        return h(e, n, r, s, t, O);
                      })),
                  e.seen.pop(),
                  (function(e, t, n) {
                    if (
                      e.reduce(function(e, t) {
                        return (
                          t.indexOf('\n') >= 0 && 0,
                          e + t.replace(/\u001b\[\d\d?m/g, '').length + 1
                        );
                      }, 0) > 60
                    )
                      return (
                        n[0] +
                        ('' === t ? '' : t + '\n ') +
                        ' ' +
                        e.join(',\n  ') +
                        ' ' +
                        n[1]
                      );
                    return n[0] + t + ' ' + e.join(', ') + ' ' + n[1];
                  })(c, _, x))
              : x[0] + _ + x[1]
          );
        }
        function f(e) {
          return '[' + Error.prototype.toString.call(e) + ']';
        }
        function h(e, t, n, r, i, l) {
          var o, s, a;
          if (
            ((a = Object.getOwnPropertyDescriptor(t, i) || {value: t[i]}).get
              ? (s = a.set
                  ? e.stylize('[Getter/Setter]', 'special')
                  : e.stylize('[Getter]', 'special'))
              : a.set && (s = e.stylize('[Setter]', 'special')),
            $(r, i) || (o = '[' + i + ']'),
            s ||
              (e.seen.indexOf(a.value) < 0
                ? (s = d(n)
                    ? u(e, a.value, null)
                    : u(e, a.value, n - 1)).indexOf('\n') > -1 &&
                  (s = l
                    ? s
                        .split('\n')
                        .map(function(e) {
                          return '  ' + e;
                        })
                        .join('\n')
                        .substr(2)
                    : '\n' +
                      s
                        .split('\n')
                        .map(function(e) {
                          return '   ' + e;
                        })
                        .join('\n'))
                : (s = e.stylize('[Circular]', 'special'))),
            y(o))
          ) {
            if (l && i.match(/^\d+$/)) return s;
            (o = JSON.stringify('' + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
              ? ((o = o.substr(1, o.length - 2)), (o = e.stylize(o, 'name')))
              : ((o = o
                  .replace(/'/g, "\\'")
                  .replace(/\\"/g, '"')
                  .replace(/(^"|"$)/g, "'")),
                (o = e.stylize(o, 'string')));
          }
          return o + ': ' + s;
        }
        function p(e) {
          return Array.isArray(e);
        }
        function g(e) {
          return 'boolean' === typeof e;
        }
        function d(e) {
          return null === e;
        }
        function b(e) {
          return 'number' === typeof e;
        }
        function v(e) {
          return 'string' === typeof e;
        }
        function y(e) {
          return void 0 === e;
        }
        function m(e) {
          return _(e) && '[object RegExp]' === O(e);
        }
        function _(e) {
          return 'object' === typeof e && null !== e;
        }
        function k(e) {
          return _(e) && '[object Date]' === O(e);
        }
        function w(e) {
          return _(e) && ('[object Error]' === O(e) || e instanceof Error);
        }
        function j(e) {
          return 'function' === typeof e;
        }
        function O(e) {
          return Object.prototype.toString.call(e);
        }
        function x(e) {
          return e < 10 ? '0' + e.toString(10) : e.toString(10);
        }
        (t.debuglog = function(n) {
          if (
            (y(l) && (l = e.env.NODE_DEBUG || ''), (n = n.toUpperCase()), !o[n])
          )
            if (new RegExp('\\b' + n + '\\b', 'i').test(l)) {
              var r = e.pid;
              o[n] = function() {
                var e = t.format.apply(t, arguments);
                console.error('%s %d: %s', n, r, e);
              };
            } else o[n] = function() {};
          return o[n];
        }),
          (t.inspect = s),
          (s.colors = {
            bold: [1, 22],
            italic: [3, 23],
            underline: [4, 24],
            inverse: [7, 27],
            white: [37, 39],
            grey: [90, 39],
            black: [30, 39],
            blue: [34, 39],
            cyan: [36, 39],
            green: [32, 39],
            magenta: [35, 39],
            red: [31, 39],
            yellow: [33, 39]
          }),
          (s.styles = {
            special: 'cyan',
            number: 'yellow',
            boolean: 'yellow',
            undefined: 'grey',
            null: 'bold',
            string: 'green',
            date: 'magenta',
            regexp: 'red'
          }),
          (t.isArray = p),
          (t.isBoolean = g),
          (t.isNull = d),
          (t.isNullOrUndefined = function(e) {
            return null == e;
          }),
          (t.isNumber = b),
          (t.isString = v),
          (t.isSymbol = function(e) {
            return 'symbol' === typeof e;
          }),
          (t.isUndefined = y),
          (t.isRegExp = m),
          (t.isObject = _),
          (t.isDate = k),
          (t.isError = w),
          (t.isFunction = j),
          (t.isPrimitive = function(e) {
            return (
              null === e ||
              'boolean' === typeof e ||
              'number' === typeof e ||
              'string' === typeof e ||
              'symbol' === typeof e ||
              'undefined' === typeof e
            );
          }),
          (t.isBuffer = n('j/1Z'));
        var S = [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
        ];
        function E() {
          var e = new Date(),
            t = [x(e.getHours()), x(e.getMinutes()), x(e.getSeconds())].join(
              ':'
            );
          return [e.getDate(), S[e.getMonth()], t].join(' ');
        }
        function $(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }
        (t.log = function() {
          console.log('%s - %s', E(), t.format.apply(t, arguments));
        }),
          (t.inherits = n('P7XM')),
          (t._extend = function(e, t) {
            if (!t || !_(t)) return e;
            for (var n = Object.keys(t), r = n.length; r--; ) e[n[r]] = t[n[r]];
            return e;
          });
        var M =
          'undefined' !== typeof Symbol
            ? Symbol('util.promisify.custom')
            : void 0;
        function z(e, t) {
          if (!e) {
            var n = new Error('Promise was rejected with a falsy value');
            (n.reason = e), (e = n);
          }
          return t(e);
        }
        (t.promisify = function(e) {
          if ('function' !== typeof e)
            throw new TypeError(
              'The "original" argument must be of type Function'
            );
          if (M && e[M]) {
            var t;
            if ('function' !== typeof (t = e[M]))
              throw new TypeError(
                'The "util.promisify.custom" argument must be of type Function'
              );
            return (
              Object.defineProperty(t, M, {
                value: t,
                enumerable: !1,
                writable: !1,
                configurable: !0
              }),
              t
            );
          }
          function t() {
            for (
              var t,
                n,
                r = new Promise(function(e, r) {
                  (t = e), (n = r);
                }),
                i = [],
                l = 0;
              l < arguments.length;
              l++
            )
              i.push(arguments[l]);
            i.push(function(e, r) {
              e ? n(e) : t(r);
            });
            try {
              e.apply(this, i);
            } catch (o) {
              n(o);
            }
            return r;
          }
          return (
            Object.setPrototypeOf(t, Object.getPrototypeOf(e)),
            M &&
              Object.defineProperty(t, M, {
                value: t,
                enumerable: !1,
                writable: !1,
                configurable: !0
              }),
            Object.defineProperties(t, r(e))
          );
        }),
          (t.promisify.custom = M),
          (t.callbackify = function(t) {
            if ('function' !== typeof t)
              throw new TypeError(
                'The "original" argument must be of type Function'
              );
            function n() {
              for (var n = [], r = 0; r < arguments.length; r++)
                n.push(arguments[r]);
              var i = n.pop();
              if ('function' !== typeof i)
                throw new TypeError(
                  'The last argument must be of type Function'
                );
              var l = this,
                o = function() {
                  return i.apply(l, arguments);
                };
              t.apply(this, n).then(
                function(t) {
                  e.nextTick(o, null, t);
                },
                function(t) {
                  e.nextTick(z, t, o);
                }
              );
            }
            return (
              Object.setPrototypeOf(n, Object.getPrototypeOf(t)),
              Object.defineProperties(n, r(t)),
              n
            );
          });
      }.call(this, n('8oxB')));
    },
    P7XM: function(e, t) {
      'function' === typeof Object.create
        ? (e.exports = function(e, t) {
            (e.super_ = t),
              (e.prototype = Object.create(t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
                }
              }));
          })
        : (e.exports = function(e, t) {
            e.super_ = t;
            var n = function() {};
            (n.prototype = t.prototype),
              (e.prototype = new n()),
              (e.prototype.constructor = e);
          });
    },
    'j/1Z': function(e, t) {
      e.exports = function(e) {
        return (
          e &&
          'object' === typeof e &&
          'function' === typeof e.copy &&
          'function' === typeof e.fill &&
          'function' === typeof e.readUInt8
        );
      };
    },
    jLCa: function(e, t, n) {
      !(function(e) {
        var t = (e.Markdown = function(e) {
          switch (typeof e) {
            case 'undefined':
              this.dialect = t.dialects.Gruber;
              break;
            case 'object':
              this.dialect = e;
              break;
            default:
              if (!(e in t.dialects))
                throw new Error("Unknown Markdown dialect '" + String(e) + "'");
              this.dialect = t.dialects[e];
          }
          (this.em_state = []),
            (this.strong_state = []),
            (this.debug_indent = '');
        });
        function r() {
          return (
            'Markdown.mk_block( ' +
            uneval(this.toString()) +
            ', ' +
            uneval(this.trailing) +
            ', ' +
            uneval(this.lineNumber) +
            ' )'
          );
        }
        function i() {
          var e = n('7tlc');
          return (
            'Markdown.mk_block( ' +
            e.inspect(this.toString()) +
            ', ' +
            e.inspect(this.trailing) +
            ', ' +
            e.inspect(this.lineNumber) +
            ' )'
          );
        }
        (e.parse = function(e, n) {
          return new t(n).toTree(e);
        }),
          (e.toHTML = function(t, n, r) {
            var i = e.toHTMLTree(t, n, r);
            return e.renderJsonML(i);
          }),
          (e.toHTMLTree = function(e, t, n) {
            'string' === typeof e && (e = this.parse(e, t));
            var r = h(e),
              i = {};
            r && r.references && (i = r.references);
            var l = (function e(t, n, r) {
              var i;
              r = r || {};
              var l = t.slice(0);
              'function' === typeof r.preprocessTreeNode &&
                (l = r.preprocessTreeNode(l, n));
              var o = h(l);
              if (o) {
                for (i in ((l[1] = {}), o)) l[1][i] = o[i];
                o = l[1];
              }
              if ('string' === typeof l) return l;
              switch (l[0]) {
                case 'header':
                  (l[0] = 'h' + l[1].level), delete l[1].level;
                  break;
                case 'bulletlist':
                  l[0] = 'ul';
                  break;
                case 'numberlist':
                  l[0] = 'ol';
                  break;
                case 'listitem':
                  l[0] = 'li';
                  break;
                case 'para':
                  l[0] = 'p';
                  break;
                case 'markdown':
                  (l[0] = 'html'), o && delete o.references;
                  break;
                case 'code_block':
                  (l[0] = 'pre'), (i = o ? 2 : 1);
                  var s = ['code'];
                  s.push.apply(s, l.splice(i, l.length - i)), (l[i] = s);
                  break;
                case 'inlinecode':
                  l[0] = 'code';
                  break;
                case 'img':
                  (l[1].src = l[1].href), delete l[1].href;
                  break;
                case 'linebreak':
                  l[0] = 'br';
                  break;
                case 'link':
                  l[0] = 'a';
                  break;
                case 'link_ref':
                  if (((l[0] = 'a'), !(a = n[o.ref]))) return o.original;
                  delete o.ref,
                    (o.href = a.href),
                    a.title && (o.title = a.title),
                    delete o.original;
                  break;
                case 'img_ref':
                  var a;
                  if (((l[0] = 'img'), !(a = n[o.ref]))) return o.original;
                  delete o.ref,
                    (o.src = a.href),
                    a.title && (o.title = a.title),
                    delete o.original;
              }
              if (((i = 1), o)) {
                for (var c in l[1]) {
                  i = 2;
                  break;
                }
                1 === i && l.splice(i, 1);
              }
              for (; i < l.length; ++i) l[i] = e(l[i], n, r);
              return l;
            })(e, i, n);
            return (
              (function e(t) {
                var n = h(t) ? 2 : 1;
                for (; n < t.length; )
                  'string' === typeof t[n]
                    ? n + 1 < t.length && 'string' === typeof t[n + 1]
                      ? (t[n] += t.splice(n + 1, 1)[0])
                      : ++n
                    : (e(t[n]), ++n);
              })(l),
              l
            );
          });
        var l = (t.mk_block = function(e, t, n) {
          1 == arguments.length && (t = '\n\n');
          var l = new String(e);
          return (
            (l.trailing = t),
            (l.inspect = i),
            (l.toSource = r),
            void 0 != n && (l.lineNumber = n),
            l
          );
        });
        function o(e) {
          for (var t = 0, n = -1; -1 !== (n = e.indexOf('\n', n + 1)); ) t++;
          return t;
        }
        function s(e, t) {
          var n = e + '_state',
            r = 'strong' == e ? 'em_state' : 'strong_state';
          function i(e) {
            (this.len_after = e), (this.name = 'close_' + t);
          }
          return function(l, o) {
            if (this[n][0] == t)
              return this[n].shift(), [l.length, new i(l.length - t.length)];
            var s = this[r].slice(),
              a = this[n].slice();
            this[n].unshift(t);
            var c = this.processInline(l.substr(t.length)),
              u = c[c.length - 1];
            this[n].shift();
            return u instanceof i
              ? (c.pop(), [l.length - u.len_after, [e].concat(c)])
              : ((this[r] = s), (this[n] = a), [t.length, t]);
          };
        }
        (t.prototype.split_blocks = function(e, t) {
          e = e.replace(/(\r\n|\n|\r)/g, '\n');
          var n,
            r = /([\s\S]+?)($|\n#|\n(?:\s*\n|$)+)/g,
            i = [],
            s = 1;
          for (
            null != (n = /^(\s*\n)/.exec(e)) &&
            ((s += o(n[0])), (r.lastIndex = n[0].length));
            null !== (n = r.exec(e));

          )
            '\n#' == n[2] && ((n[2] = '\n'), r.lastIndex--),
              i.push(l(n[1], n[2], s)),
              (s += o(n[0]));
          return i;
        }),
          (t.prototype.processBlock = function(e, t) {
            var n = this.dialect.block,
              r = n.__order__;
            if ('__call__' in n) return n.__call__.call(this, e, t);
            for (var i = 0; i < r.length; i++) {
              var l = n[r[i]].call(this, e, t);
              if (l)
                return (
                  (!u(l) || (l.length > 0 && !u(l[0]))) &&
                    this.debug(r[i], "didn't return a proper array"),
                  l
                );
            }
            return [];
          }),
          (t.prototype.processInline = function(e) {
            return this.dialect.inline.__call__.call(this, String(e));
          }),
          (t.prototype.toTree = function(e, t) {
            var n = e instanceof Array ? e : this.split_blocks(e),
              r = this.tree;
            try {
              for (this.tree = t || this.tree || ['markdown']; n.length; ) {
                var i = this.processBlock(n.shift(), n);
                i.length && this.tree.push.apply(this.tree, i);
              }
              return this.tree;
            } finally {
              t && (this.tree = r);
            }
          }),
          (t.prototype.debug = function() {
            var e = Array.prototype.slice.call(arguments);
            e.unshift(this.debug_indent),
              'undefined' !== typeof print && print.apply(print, e),
              'undefined' !== typeof console &&
                'undefined' !== typeof console.log &&
                console.log.apply(null, e);
          }),
          (t.prototype.loop_re_over_block = function(e, t, n) {
            for (var r, i = t.valueOf(); i.length && null != (r = e.exec(i)); )
              (i = i.substr(r[0].length)), n.call(this, r);
            return i;
          }),
          (t.dialects = {}),
          (t.dialects.Gruber = {
            block: {
              atxHeader: function(e, t) {
                var n = e.match(/^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/);
                if (n) {
                  var r = ['header', {level: n[1].length}];
                  return (
                    Array.prototype.push.apply(r, this.processInline(n[2])),
                    n[0].length < e.length &&
                      t.unshift(
                        l(e.substr(n[0].length), e.trailing, e.lineNumber + 2)
                      ),
                    [r]
                  );
                }
              },
              setextHeader: function(e, t) {
                var n = e.match(/^(.*)\n([-=])\2\2+(?:\n|$)/);
                if (n) {
                  var r = ['header', {level: '=' === n[2] ? 1 : 2}, n[1]];
                  return (
                    n[0].length < e.length &&
                      t.unshift(
                        l(e.substr(n[0].length), e.trailing, e.lineNumber + 2)
                      ),
                    [r]
                  );
                }
              },
              code: function(e, t) {
                var n = [],
                  r = /^(?: {0,3}\t| {4})(.*)\n?/;
                if (e.match(r)) {
                  e: for (;;) {
                    var i = this.loop_re_over_block(r, e.valueOf(), function(
                      e
                    ) {
                      n.push(e[1]);
                    });
                    if (i.length) {
                      t.unshift(l(i, e.trailing));
                      break e;
                    }
                    if (!t.length) break e;
                    if (!t[0].match(r)) break e;
                    n.push(e.trailing.replace(/[^\n]/g, '').substring(2)),
                      (e = t.shift());
                  }
                  return [['code_block', n.join('\n')]];
                }
              },
              horizRule: function(e, t) {
                var n = e.match(
                  /^(?:([\s\S]*?)\n)?[ \t]*([-_*])(?:[ \t]*\2){2,}[ \t]*(?:\n([\s\S]*))?$/
                );
                if (n) {
                  var r = [['hr']];
                  return (
                    n[1] && r.unshift.apply(r, this.processBlock(n[1], [])),
                    n[3] && t.unshift(l(n[3])),
                    r
                  );
                }
              },
              lists: (function() {
                var e = '[*+-]|\\d+\\.',
                  t = /[*+-]/,
                  n = new RegExp('^( {0,3})(' + e + ')[ \t]+'),
                  r = '(?: {0,3}\\t| {4})';
                function i(e, t, n, r) {
                  if (t) e.push(['para'].concat(n));
                  else {
                    var i =
                      e[e.length - 1] instanceof Array &&
                      'para' == e[e.length - 1][0]
                        ? e[e.length - 1]
                        : e;
                    r && e.length > 1 && n.unshift(r);
                    for (var l = 0; l < n.length; l++) {
                      var o = n[l];
                      'string' == typeof o &&
                      i.length > 1 &&
                      'string' == typeof i[i.length - 1]
                        ? (i[i.length - 1] += o)
                        : i.push(o);
                    }
                  }
                }
                function o(e, t) {
                  for (
                    var n = new RegExp('^(' + r + '{' + e + '}.*?\\n?)*$'),
                      i = new RegExp('^' + r + '{' + e + '}', 'gm'),
                      o = [];
                    t.length > 0 && n.exec(t[0]);

                  ) {
                    var s = t.shift(),
                      a = s.replace(i, '');
                    o.push(l(a, s.trailing, s.lineNumber));
                  }
                  return o;
                }
                function s(e, t, n) {
                  var r = e.list,
                    i = r[r.length - 1];
                  if (!(i[1] instanceof Array && 'para' == i[1][0]))
                    if (t + 1 == n.length)
                      i.push(['para'].concat(i.splice(1, i.length - 1)));
                    else {
                      var l = i.pop();
                      i.push(['para'].concat(i.splice(1, i.length - 1)), l);
                    }
                }
                return function(l, a) {
                  var u = l.match(n);
                  if (u) {
                    for (
                      var f, h, p, g = [], d = M(u), b = !1, v = [g[0].list];
                      ;

                    ) {
                      for (
                        var y = l.split(/(?=\n)/), m = '', _ = 0;
                        _ < y.length;
                        _++
                      ) {
                        var k = '',
                          w = y[_].replace(/^\n/, function(e) {
                            return (k = e), '';
                          }),
                          j = ((p = g.length),
                          new RegExp(
                            '(?:^(' +
                              r +
                              '{0,' +
                              p +
                              '} {0,3})(' +
                              e +
                              ')\\s+)|(^' +
                              r +
                              '{0,' +
                              (p - 1) +
                              '}[ ]{0,4})'
                          ));
                        if (void 0 !== (u = w.match(j))[1]) {
                          m.length &&
                            (i(f, b, this.processInline(m), k),
                            (b = !1),
                            (m = '')),
                            (u[1] = u[1].replace(/ {0,3}\t/g, '    '));
                          var O = Math.floor(u[1].length / 4) + 1;
                          if (O > g.length)
                            (d = M(u)), f.push(d), (f = d[1] = ['listitem']);
                          else {
                            var x = !1;
                            for (h = 0; h < g.length; h++)
                              if (g[h].indent == u[1]) {
                                (d = g[h].list),
                                  g.splice(h + 1, g.length - (h + 1)),
                                  (x = !0);
                                break;
                              }
                            x ||
                              (++O <= g.length
                                ? (g.splice(O, g.length - O),
                                  (d = g[O - 1].list))
                                : ((d = M(u)), f.push(d))),
                              (f = ['listitem']),
                              d.push(f);
                          }
                          k = '';
                        }
                        w.length > u[0].length &&
                          (m += k + w.substr(u[0].length));
                      }
                      m.length &&
                        (i(f, b, this.processInline(m), k), (b = !1), (m = ''));
                      var S = o(g.length, a);
                      S.length > 0 &&
                        (c(g, s, this), f.push.apply(f, this.toTree(S, [])));
                      var E = (a[0] && a[0].valueOf()) || '';
                      if (!E.match(n) && !E.match(/^ /)) break;
                      l = a.shift();
                      var $ = this.dialect.block.horizRule(l, a);
                      if ($) {
                        v.push.apply(v, $);
                        break;
                      }
                      c(g, s, this), (b = !0);
                    }
                    return v;
                  }
                  function M(e) {
                    var n = t.exec(e[2]) ? ['bulletlist'] : ['numberlist'];
                    return g.push({list: n, indent: e[1]}), n;
                  }
                };
              })(),
              blockquote: function(e, t) {
                if (e.match(/^>/m)) {
                  var n = [];
                  if ('>' != e[0]) {
                    for (
                      var r = e.split(/\n/), i = [], o = e.lineNumber;
                      r.length && '>' != r[0][0];

                    )
                      i.push(r.shift()), o++;
                    var s = l(i.join('\n'), '\n', e.lineNumber);
                    n.push.apply(n, this.processBlock(s, [])),
                      (e = l(r.join('\n'), e.trailing, o));
                  }
                  for (; t.length && '>' == t[0][0]; ) {
                    var a = t.shift();
                    e = l(e + e.trailing + a, a.trailing, e.lineNumber);
                  }
                  var c = e.replace(/^> ?/gm, ''),
                    u = (this.tree, this.toTree(c, ['blockquote'])),
                    p = h(u);
                  return (
                    p &&
                      p.references &&
                      (delete p.references, f(p) && u.splice(1, 1)),
                    n.push(u),
                    n
                  );
                }
              },
              referenceDefn: function(e, t) {
                var n = /^\s*\[(.*?)\]:\s*(\S+)(?:\s+(?:(['"])(.*?)\3|\((.*?)\)))?\n?/;
                if (e.match(n)) {
                  h(this.tree) || this.tree.splice(1, 0, {});
                  var r = h(this.tree);
                  void 0 === r.references && (r.references = {});
                  var i = this.loop_re_over_block(n, e, function(e) {
                    e[2] &&
                      '<' == e[2][0] &&
                      '>' == e[2][e[2].length - 1] &&
                      (e[2] = e[2].substring(1, e[2].length - 1));
                    var t = (r.references[e[1].toLowerCase()] = {href: e[2]});
                    void 0 !== e[4]
                      ? (t.title = e[4])
                      : void 0 !== e[5] && (t.title = e[5]);
                  });
                  return i.length && t.unshift(l(i, e.trailing)), [];
                }
              },
              para: function(e, t) {
                return [['para'].concat(this.processInline(e))];
              }
            }
          }),
          (t.dialects.Gruber.inline = {
            __oneElement__: function(e, t, n) {
              var r, i;
              return (
                (t = t || this.dialect.inline.__patterns__),
                (r = new RegExp('([\\s\\S]*?)(' + (t.source || t) + ')').exec(
                  e
                ))
                  ? r[1]
                    ? [r[1].length, r[1]]
                    : (r[2] in this.dialect.inline &&
                        (i = this.dialect.inline[r[2]].call(
                          this,
                          e.substr(r.index),
                          r,
                          n || []
                        )),
                      (i = i || [r[2].length, r[2]]))
                  : [e.length, e]
              );
            },
            __call__: function(e, t) {
              var n,
                r = [];
              function i(e) {
                'string' == typeof e && 'string' == typeof r[r.length - 1]
                  ? (r[r.length - 1] += e)
                  : r.push(e);
              }
              for (; e.length > 0; )
                (n = this.dialect.inline.__oneElement__.call(this, e, t, r)),
                  (e = e.substr(n.shift())),
                  c(n, i);
              return r;
            },
            ']': function() {},
            '}': function() {},
            __escape__: /^\\[\\`\*_{}\[\]()#\+.!\-]/,
            '\\': function(e) {
              return this.dialect.inline.__escape__.exec(e)
                ? [2, e.charAt(1)]
                : [1, '\\'];
            },
            '![': function(e) {
              var t = e.match(
                /^!\[(.*?)\][ \t]*\([ \t]*([^")]*?)(?:[ \t]+(["'])(.*?)\3)?[ \t]*\)/
              );
              if (t) {
                t[2] &&
                  '<' == t[2][0] &&
                  '>' == t[2][t[2].length - 1] &&
                  (t[2] = t[2].substring(1, t[2].length - 1)),
                  (t[2] = this.dialect.inline.__call__.call(
                    this,
                    t[2],
                    /\\/
                  )[0]);
                var n = {alt: t[1], href: t[2] || ''};
                return (
                  void 0 !== t[4] && (n.title = t[4]), [t[0].length, ['img', n]]
                );
              }
              return (t = e.match(/^!\[(.*?)\][ \t]*\[(.*?)\]/))
                ? [
                    t[0].length,
                    [
                      'img_ref',
                      {alt: t[1], ref: t[2].toLowerCase(), original: t[0]}
                    ]
                  ]
                : [2, '!['];
            },
            '[': function(e) {
              var n = String(e),
                r = t.DialectHelpers.inline_until_char.call(
                  this,
                  e.substr(1),
                  ']'
                );
              if (!r) return [1, '['];
              var i,
                l,
                o = 1 + r[0],
                s = r[1],
                a = (e = e.substr(o)).match(
                  /^\s*\([ \t]*([^"']*)(?:[ \t]+(["'])(.*?)\2)?[ \t]*\)/
                );
              if (a) {
                var c = a[1];
                if (
                  ((o += a[0].length),
                  c &&
                    '<' == c[0] &&
                    '>' == c[c.length - 1] &&
                    (c = c.substring(1, c.length - 1)),
                  !a[3])
                )
                  for (var u = 1, f = 0; f < c.length; f++)
                    switch (c[f]) {
                      case '(':
                        u++;
                        break;
                      case ')':
                        0 == --u &&
                          ((o -= c.length - f), (c = c.substring(0, f)));
                    }
                return (
                  (l = {
                    href:
                      (c = this.dialect.inline.__call__.call(
                        this,
                        c,
                        /\\/
                      )[0]) || ''
                  }),
                  void 0 !== a[3] && (l.title = a[3]),
                  (i = ['link', l].concat(s)),
                  [o, i]
                );
              }
              return (a = e.match(/^\s*\[(.*?)\]/))
                ? ((o += a[0].length),
                  (i = [
                    'link_ref',
                    (l = {
                      ref: (a[1] || String(s)).toLowerCase(),
                      original: n.substr(0, o)
                    })
                  ].concat(s)),
                  [o, i])
                : 1 == s.length && 'string' == typeof s[0]
                ? ((i = [
                    'link_ref',
                    (l = {ref: s[0].toLowerCase(), original: n.substr(0, o)}),
                    s[0]
                  ]),
                  [o, i])
                : [1, '['];
            },
            '<': function(e) {
              var t;
              return null !=
                (t = e.match(
                  /^<(?:((https?|ftp|mailto):[^>]+)|(.*?@.*?\.[a-zA-Z]+))>/
                ))
                ? t[3]
                  ? [t[0].length, ['link', {href: 'mailto:' + t[3]}, t[3]]]
                  : 'mailto' == t[2]
                  ? [
                      t[0].length,
                      ['link', {href: t[1]}, t[1].substr('mailto:'.length)]
                    ]
                  : [t[0].length, ['link', {href: t[1]}, t[1]]]
                : [1, '<'];
            },
            '`': function(e) {
              var t = e.match(/(`+)(([\s\S]*?)\1)/);
              return t && t[2]
                ? [t[1].length + t[2].length, ['inlinecode', t[3]]]
                : [1, '`'];
            },
            '  \n': function(e) {
              return [3, ['linebreak']];
            }
          }),
          (t.dialects.Gruber.inline['**'] = s('strong', '**')),
          (t.dialects.Gruber.inline.__ = s('strong', '__')),
          (t.dialects.Gruber.inline['*'] = s('em', '*')),
          (t.dialects.Gruber.inline._ = s('em', '_')),
          (t.buildBlockOrder = function(e) {
            var t = [];
            for (var n in e) '__order__' != n && '__call__' != n && t.push(n);
            e.__order__ = t;
          }),
          (t.buildInlinePatterns = function(e) {
            var t = [];
            for (var n in e)
              if (!n.match(/^__.*__$/)) {
                var r = n
                  .replace(/([\\.*+?|()\[\]{}])/g, '\\$1')
                  .replace(/\n/, '\\n');
                t.push(1 == n.length ? r : '(?:' + r + ')');
              }
            (t = t.join('|')), (e.__patterns__ = t);
            var i = e.__call__;
            e.__call__ = function(e, n) {
              return void 0 != n ? i.call(this, e, n) : i.call(this, e, t);
            };
          }),
          (t.DialectHelpers = {}),
          (t.DialectHelpers.inline_until_char = function(e, t) {
            for (var n = 0, r = []; ; ) {
              if (e.charAt(n) == t) return [++n, r];
              if (n >= e.length) return null;
              var i = this.dialect.inline.__oneElement__.call(
                this,
                e.substr(n)
              );
              (n += i[0]), r.push.apply(r, i.slice(1));
            }
          }),
          (t.subclassDialect = function(e) {
            function t() {}
            function n() {}
            return (
              (t.prototype = e.block),
              (n.prototype = e.inline),
              {block: new t(), inline: new n()}
            );
          }),
          t.buildBlockOrder(t.dialects.Gruber.block),
          t.buildInlinePatterns(t.dialects.Gruber.inline),
          (t.dialects.Maruku = t.subclassDialect(t.dialects.Gruber)),
          (t.dialects.Maruku.processMetaHash = function(e) {
            for (
              var t = (function(e) {
                  var t = e.split(''),
                    n = [''],
                    r = !1;
                  for (; t.length; ) {
                    var i = t.shift();
                    switch (i) {
                      case ' ':
                        r ? (n[n.length - 1] += i) : n.push('');
                        break;
                      case "'":
                      case '"':
                        r = !r;
                        break;
                      case '\\':
                        i = t.shift();
                      default:
                        n[n.length - 1] += i;
                    }
                  }
                  return n;
                })(e),
                n = {},
                r = 0;
              r < t.length;
              ++r
            )
              if (/^#/.test(t[r])) n.id = t[r].substring(1);
              else if (/^\./.test(t[r]))
                n.class
                  ? (n.class = n.class + t[r].replace(/./, ' '))
                  : (n.class = t[r].substring(1));
              else if (/\=/.test(t[r])) {
                var i = t[r].split(/\=/);
                n[i[0]] = i[1];
              }
            return n;
          }),
          (t.dialects.Maruku.block.document_meta = function(e, t) {
            if (!(e.lineNumber > 1) && e.match(/^(?:\w+:.*\n)*\w+:.*$/)) {
              h(this.tree) || this.tree.splice(1, 0, {});
              var n = e.split(/\n/);
              for (p in n) {
                var r = n[p].match(/(\w+):\s*(.*)$/),
                  i = r[1].toLowerCase(),
                  l = r[2];
                this.tree[1][i] = l;
              }
              return [];
            }
          }),
          (t.dialects.Maruku.block.block_meta = function(e, t) {
            var n = e.match(/(^|\n) {0,3}\{:\s*((?:\\\}|[^\}])*)\s*\}$/);
            if (n) {
              var r,
                i = this.dialect.processMetaHash(n[2]);
              if ('' === n[1]) {
                var l = this.tree[this.tree.length - 1];
                if (((r = h(l)), 'string' === typeof l)) return;
                for (a in (r || ((r = {}), l.splice(1, 0, r)), i)) r[a] = i[a];
                return [];
              }
              var o = e.replace(/\n.*$/, ''),
                s = this.processBlock(o, []);
              for (a in ((r = h(s[0])) || ((r = {}), s[0].splice(1, 0, r)), i))
                r[a] = i[a];
              return s;
            }
          }),
          (t.dialects.Maruku.block.definition_list = function(e, t) {
            var n,
              r = /^((?:[^\s:].*\n)+):\s+([\s\S]+)$/,
              i = ['dl'];
            if ((s = e.match(r))) {
              for (var l = [e]; t.length && r.exec(t[0]); ) l.push(t.shift());
              for (var o = 0; o < l.length; ++o) {
                var s,
                  a = (s = l[o].match(r))[1].replace(/\n$/, '').split(/\n/),
                  c = s[2].split(/\n:\s+/);
                for (n = 0; n < a.length; ++n) i.push(['dt', a[n]]);
                for (n = 0; n < c.length; ++n)
                  i.push(
                    ['dd'].concat(
                      this.processInline(c[n].replace(/(\n)\s+/, '$1'))
                    )
                  );
              }
              return [i];
            }
          }),
          (t.dialects.Maruku.block.table = function(e, t) {
            var n,
              r,
              i = function(e, t) {
                (t = t || '\\s').match(/^[\\|\[\]{}?*.+^$]$/) && (t = '\\' + t);
                for (
                  var n,
                    r = [],
                    i = new RegExp(
                      '^((?:\\\\.|[^\\\\' + t + '])*)' + t + '(.*)'
                    );
                  (n = e.match(i));

                )
                  r.push(n[1]), (e = n[2]);
                return r.push(e), r;
              };
            if (
              (r = e.match(
                /^ {0,3}\|(.+)\n {0,3}\|\s*([\-:]+[\-| :]*)\n((?:\s*\|.*(?:\n|$))*)(?=\n|$)/
              ))
            )
              r[3] = r[3].replace(/^\s*\|/gm, '');
            else if (
              !(r = e.match(
                /^ {0,3}(\S(?:\\.|[^\\|])*\|.*)\n {0,3}([\-:]+\s*\|[\-| :]*)\n((?:(?:\\.|[^\\|])*\|.*(?:\n|$))*)(?=\n|$)/
              ))
            )
              return;
            var l = ['table', ['thead', ['tr']], ['tbody']];
            r[2] = r[2].replace(/\|\s*$/, '').split('|');
            var o = [];
            for (
              c(r[2], function(e) {
                e.match(/^\s*-+:\s*$/)
                  ? o.push({align: 'right'})
                  : e.match(/^\s*:-+\s*$/)
                  ? o.push({align: 'left'})
                  : e.match(/^\s*:-+:\s*$/)
                  ? o.push({align: 'center'})
                  : o.push({});
              }),
                r[1] = i(r[1].replace(/\|\s*$/, ''), '|'),
                n = 0;
              n < r[1].length;
              n++
            )
              l[1][1].push(
                ['th', o[n] || {}].concat(this.processInline(r[1][n].trim()))
              );
            return (
              c(
                r[3].replace(/\|\s*$/gm, '').split('\n'),
                function(e) {
                  var t = ['tr'];
                  for (e = i(e, '|'), n = 0; n < e.length; n++)
                    t.push(
                      ['td', o[n] || {}].concat(this.processInline(e[n].trim()))
                    );
                  l[2].push(t);
                },
                this
              ),
              [l]
            );
          }),
          (t.dialects.Maruku.inline['{:'] = function(e, t, n) {
            if (!n.length) return [2, '{:'];
            var r = n[n.length - 1];
            if ('string' === typeof r) return [2, '{:'];
            var i = e.match(/^\{:\s*((?:\\\}|[^\}])*)\s*\}/);
            if (!i) return [2, '{:'];
            var l = this.dialect.processMetaHash(i[1]),
              o = h(r);
            for (var s in (o || ((o = {}), r.splice(1, 0, o)), l)) o[s] = l[s];
            return [i[0].length, ''];
          }),
          (t.dialects.Maruku.inline.__escape__ = /^\\[\\`\*_{}\[\]()#\+.!\-|:]/),
          t.buildBlockOrder(t.dialects.Maruku.block),
          t.buildInlinePatterns(t.dialects.Maruku.inline);
        var c,
          u =
            Array.isArray ||
            function(e) {
              return '[object Array]' == Object.prototype.toString.call(e);
            };
        c = Array.prototype.forEach
          ? function(e, t, n) {
              return e.forEach(t, n);
            }
          : function(e, t, n) {
              for (var r = 0; r < e.length; r++) t.call(n || e, e[r], r, e);
            };
        var f = function(e) {
          for (var t in e) if (hasOwnProperty.call(e, t)) return !1;
          return !0;
        };
        function h(e) {
          return u(e) && e.length > 1 && 'object' === typeof e[1] && !u(e[1])
            ? e[1]
            : void 0;
        }
        function g(e) {
          return e
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
        }
        function d(e) {
          if ('string' === typeof e) return g(e);
          var t = e.shift(),
            n = {},
            r = [];
          for (
            !e.length ||
            'object' !== typeof e[0] ||
            e[0] instanceof Array ||
            (n = e.shift());
            e.length;

          )
            r.push(d(e.shift()));
          var i = '';
          for (var l in n) i += ' ' + l + '="' + g(n[l]) + '"';
          return 'img' == t || 'br' == t || 'hr' == t
            ? '<' + t + i + '/>'
            : '<' + t + i + '>' + r.join('') + '</' + t + '>';
        }
        e.renderJsonML = function(e, t) {
          (t = t || {}).root = t.root || !1;
          var n = [];
          if (t.root) n.push(d(e));
          else
            for (
              e.shift(),
                !e.length ||
                  'object' !== typeof e[0] ||
                  e[0] instanceof Array ||
                  e.shift();
              e.length;

            )
              n.push(d(e.shift()));
          return n.join('\n\n');
        };
      })(t);
    },
    jdwX: function(e, t, n) {
      (t.markdown = n('jLCa')), (t.parse = t.markdown.toHTML);
    }
  }
]);
