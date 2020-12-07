;(() => {
  var t = {
      960: (t, e, n) => {
        'use strict'
        n.d(e, { Z: () => i })
        var r = n(645),
          o = n.n(r)()(function (t) {
            return t[1]
          })
        o.push([
          t.id,
          'body {\r\n  background: #7f7fd5; /* fallback for old browsers */\r\n  background: -webkit-linear-gradient(\r\n    to right,\r\n    #91eae4,\r\n    #86a8e7,\r\n    #7f7fd5\r\n  ); /* Chrome 10-25, Safari 5.1-6 */\r\n  background: linear-gradient(\r\n    to right,\r\n    #91eae4,\r\n    #86a8e7,\r\n    #7f7fd5\r\n  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n}\r\n',
          '',
        ])
        const i = o
      },
      645: (t) => {
        'use strict'
        t.exports = function (t) {
          var e = []
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var n = t(e)
                return e[2] ? '@media '.concat(e[2], ' {').concat(n, '}') : n
              }).join('')
            }),
            (e.i = function (t, n, r) {
              'string' == typeof t && (t = [[null, t, '']])
              var o = {}
              if (r)
                for (var i = 0; i < this.length; i++) {
                  var a = this[i][0]
                  null != a && (o[a] = !0)
                }
              for (var c = 0; c < t.length; c++) {
                var s = [].concat(t[c])
                ;(r && o[s[0]]) ||
                  (n &&
                    (s[2]
                      ? (s[2] = ''.concat(n, ' and ').concat(s[2]))
                      : (s[2] = n)),
                  e.push(s))
              }
            }),
            e
          )
        }
      },
      106: (t, e, n) => {
        'use strict'
        n.r(e), n.d(e, { default: () => a })
        var r = n(379),
          o = n.n(r),
          i = n(960)
        o()(i.Z, { insert: 'head', singleton: !1 })
        const a = i.Z.locals || {}
      },
      379: (t, e, n) => {
        'use strict'
        var r,
          o = (function () {
            var t = {}
            return function (e) {
              if (void 0 === t[e]) {
                var n = document.querySelector(e)
                if (
                  window.HTMLIFrameElement &&
                  n instanceof window.HTMLIFrameElement
                )
                  try {
                    n = n.contentDocument.head
                  } catch (t) {
                    n = null
                  }
                t[e] = n
              }
              return t[e]
            }
          })(),
          i = []
        function a(t) {
          for (var e = -1, n = 0; n < i.length; n++)
            if (i[n].identifier === t) {
              e = n
              break
            }
          return e
        }
        function c(t, e) {
          for (var n = {}, r = [], o = 0; o < t.length; o++) {
            var c = t[o],
              s = e.base ? c[0] + e.base : c[0],
              u = n[s] || 0,
              d = ''.concat(s, ' ').concat(u)
            n[s] = u + 1
            var l = a(d),
              h = { css: c[1], media: c[2], sourceMap: c[3] }
            ;-1 !== l
              ? (i[l].references++, i[l].updater(h))
              : i.push({ identifier: d, updater: m(h, e), references: 1 }),
              r.push(d)
          }
          return r
        }
        function s(t) {
          var e = document.createElement('style'),
            r = t.attributes || {}
          if (void 0 === r.nonce) {
            var i = n.nc
            i && (r.nonce = i)
          }
          if (
            (Object.keys(r).forEach(function (t) {
              e.setAttribute(t, r[t])
            }),
            'function' == typeof t.insert)
          )
            t.insert(e)
          else {
            var a = o(t.insert || 'head')
            if (!a)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
              )
            a.appendChild(e)
          }
          return e
        }
        var u,
          d =
            ((u = []),
            function (t, e) {
              return (u[t] = e), u.filter(Boolean).join('\n')
            })
        function l(t, e, n, r) {
          var o = n
            ? ''
            : r.media
            ? '@media '.concat(r.media, ' {').concat(r.css, '}')
            : r.css
          if (t.styleSheet) t.styleSheet.cssText = d(e, o)
          else {
            var i = document.createTextNode(o),
              a = t.childNodes
            a[e] && t.removeChild(a[e]),
              a.length ? t.insertBefore(i, a[e]) : t.appendChild(i)
          }
        }
        function h(t, e, n) {
          var r = n.css,
            o = n.media,
            i = n.sourceMap
          if (
            (o ? t.setAttribute('media', o) : t.removeAttribute('media'),
            i &&
              'undefined' != typeof btoa &&
              (r += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                ' */'
              )),
            t.styleSheet)
          )
            t.styleSheet.cssText = r
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild)
            t.appendChild(document.createTextNode(r))
          }
        }
        var f = null,
          y = 0
        function m(t, e) {
          var n, r, o
          if (e.singleton) {
            var i = y++
            ;(n = f || (f = s(e))),
              (r = l.bind(null, n, i, !1)),
              (o = l.bind(null, n, i, !0))
          } else
            (n = s(e)),
              (r = h.bind(null, n, e)),
              (o = function () {
                !(function (t) {
                  if (null === t.parentNode) return !1
                  t.parentNode.removeChild(t)
                })(n)
              })
          return (
            r(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap
                )
                  return
                r((t = e))
              } else o()
            }
          )
        }
        t.exports = function (t, e) {
          ;(e = e || {}).singleton ||
            'boolean' == typeof e.singleton ||
            (e.singleton =
              (void 0 === r &&
                (r = Boolean(
                  window && document && document.all && !window.atob
                )),
              r))
          var n = c((t = t || []), e)
          return function (t) {
            if (
              ((t = t || []),
              '[object Array]' === Object.prototype.toString.call(t))
            ) {
              for (var r = 0; r < n.length; r++) {
                var o = a(n[r])
                i[o].references--
              }
              for (var s = c(t, e), u = 0; u < n.length; u++) {
                var d = a(n[u])
                0 === i[d].references && (i[d].updater(), i.splice(d, 1))
              }
              n = s
            }
          }
        }
      },
      677: (t, e, n) => {
        'use strict'
        n.r(e), n.d(e, { Store: () => r })
        class r {
          constructor() {
            this.city,
              this.countryCode,
              (this.defaultCity = 'copenhaguen'),
              (this.defaultCountry = 'dk')
          }
          getLocationData() {
            return (
              null === localStorage.getItem('city')
                ? (this.city = this.defaultCity)
                : (this.city = localStorage.getItem('city')),
              null === localStorage.getItem('countryCode')
                ? (this.countryCode = this.defaultCity)
                : (this.countryCode = localStorage.getItem('countryCode')),
              { city: this.city, countryCode: this.countryCode }
            )
          }
          setLocationData(t, e) {
            localStorage.setItem('city', t), localStorage.setItem('country', e)
          }
        }
      },
      382: (t, e, n) => {
        'use strict'
        n.r(e), n.d(e, { UI: () => r })
        class r {
          constructor() {
            ;(this.location = document.querySelector('#weather-location')),
              (this.desc = document.querySelector('#weather-description')),
              (this.string = document.querySelector('#weather-string')),
              (this.humidity = document.querySelector('#weather-humidity')),
              (this.wind = document.querySelector('#weather-wind'))
          }
          render(t) {
            ;(this.location.textContent = `${t.name} / ${t.sys.country}`),
              (this.desc.textContent = `${t.weather[0].description}.toUpperCase()`),
              (this.string.textContent = `${t.main.temp} °C`),
              (this.humidity.textContent = ` Humidity: ${t.main.humidity} %`),
              (this.wind.textContent = `Wind: ${t.wind.deg} m/s`)
          }
        }
      },
      783: (t, e, n) => {
        'use strict'
        n.r(e), n.d(e, { Weather: () => r })
        class r {
          constructor(t, e) {
            ;(this.apiKey = '525832fa65bb21b21a82519d028a5aac'),
              (this.city = t),
              (this.countryCode = e)
          }
          async getData() {
            const t = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}&units=metric`
            return (await fetch(t)).json()
          }
          changeLocation(t, e) {
            ;(this.city = t), (this.countryCode = e)
          }
        }
      },
    },
    e = {}
  function n(r) {
    if (e[r]) return e[r].exports
    var o = (e[r] = { id: r, exports: {} })
    return t[r](o, o.exports, n), o.exports
  }
  ;(n.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t
    return n.d(e, { a: e }), e
  }),
    (n.d = (t, e) => {
      for (var r in e)
        n.o(e, r) &&
          !n.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: e[r] })
    }),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (n.r = (t) => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 })
    }),
    (() => {
      const { Weather: t } = n(783),
        { UI: e } = n(382),
        { Store: r } = n(677),
        o = new e(),
        i = new r(),
        { city: a, countryCode: c } = i.getLocationData(),
        s = new t(a, c)
      async function u() {
        const t = await s.getData()
        console.log(t), o.render(t)
      }
      n(106),
        document
          .querySelector('#w-change-btn')
          .addEventListener('click', (t) => {
            const e = document.getElementById('city').value,
              n = document.getElementById('countryCode').value
            s.changeLocation(e, n),
              i.setLocationData(e, n),
              u(),
              t.preventDefault(),
              console.log(e, n)
          }),
        document.addEventListener('DOMContentLoaded', u)
    })()
})()
