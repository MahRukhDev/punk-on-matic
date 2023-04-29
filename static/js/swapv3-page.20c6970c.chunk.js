;(this['webpackJsonp@kyberswap/interface'] = this['webpackJsonp@kyberswap/interface'] || []).push([
  [5],
  {
    './node_modules/@svgr/webpack/lib/index.js?-svgo,+titleProp,+ref!./src/assets/svg/routing-icon.svg': function (
      e,
      t,
      n,
    ) {
      'use strict'
      n.d(t, 'a', function () {
        return b
      })
      var r,
        s,
        o,
        i,
        a = n('./node_modules/react/index.js'),
        c = ['title', 'titleId']
      function d() {
        return (
          (d = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t]
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
              }),
          d.apply(this, arguments)
        )
      }
      function l(e, t) {
        if (null == e) return {}
        var n,
          r,
          s = (function (e, t) {
            if (null == e) return {}
            var n,
              r,
              s = {},
              o = Object.keys(e)
            for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (s[n] = e[n])
            return s
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e)
          for (r = 0; r < o.length; r++)
            (n = o[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]))
        }
        return s
      }
      function u(e, t) {
        var n = e.title,
          u = e.titleId,
          b = l(e, c)
        return a.createElement(
          'svg',
          d(
            {
              width: 24,
              height: 18,
              viewBox: '0 0 24 18',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              ref: t,
              'aria-labelledby': u,
            },
            b,
          ),
          n ? a.createElement('title', { id: u }, n) : null,
          r ||
            (r = a.createElement('path', {
              d: 'M16.453 13.4311L13.5243 12.0666C11.6015 11.1712 10.3593 9.22172 10.3593 7.10062L10.3593 4.61719L7.5468 4.61719L7.5468 3.21094L16.453 3.21094L16.453 4.61719L11.7655 4.61719L11.7655 7.10062C11.7655 8.67703 12.689 10.1264 14.1182 10.792L16.5332 11.917C16.4807 12.1383 16.453 12.3694 16.453 12.6066L16.453 13.4311Z',
              fill: '#A9A9A9',
            })),
          s ||
            (s = a.createElement('path', {
              d: 'M24 15.5653L24 12.6066C24 11.7295 23.2861 11.0156 22.4091 11.0156L19.4503 11.0156C18.5733 11.0156 17.8594 11.7295 17.8594 12.6066L17.8594 15.5653C17.8594 16.4423 18.5733 17.1562 19.4503 17.1562L22.4091 17.1562C23.2861 17.1562 24 16.4423 24 15.5653V15.5653Z',
              fill: '#A9A9A9',
            })),
          o ||
            (o = a.createElement('path', {
              d: 'M24 5.39344L24 2.43469C24 1.55766 23.2861 0.84375 22.4091 0.84375L19.4503 0.84375C18.5733 0.84375 17.8594 1.55766 17.8594 2.43469L17.8594 5.39344C17.8594 6.27047 18.5733 6.98437 19.4503 6.98437L22.4091 6.98437C23.2861 6.98437 24 6.27047 24 5.39344V5.39344Z',
              fill: '#A9A9A9',
            })),
          i ||
            (i = a.createElement('path', {
              d: 'M6.14062 5.39344L6.14062 2.43469C6.14062 1.55766 5.42672 0.84375 4.54969 0.84375L1.59094 0.84375C0.713906 0.84375 -3.12058e-08 1.55766 -6.95421e-08 2.43469L-1.98873e-07 5.39344C-2.37209e-07 6.27047 0.713906 6.98437 1.59094 6.98437L4.54969 6.98437C5.42672 6.98437 6.14062 6.27047 6.14062 5.39344Z',
              fill: '#A9A9A9',
            })),
        )
      }
      var b = a.forwardRef(u)
      n.p
    },
    './src/assets/images/tutorial_swap sync recursive ^\\.\\/.*$': function (e, t, n) {
      var r = {
        './menu.png': './src/assets/images/tutorial_swap/menu.png',
        './step1.png': './src/assets/images/tutorial_swap/step1.png',
        './step2.png': './src/assets/images/tutorial_swap/step2.png',
        './step4.1.png': './src/assets/images/tutorial_swap/step4.1.png',
        './step4.2.png': './src/assets/images/tutorial_swap/step4.2.png',
        './step5.png': './src/assets/images/tutorial_swap/step5.png',
        './step6.png': './src/assets/images/tutorial_swap/step6.png',
        './step7.png': './src/assets/images/tutorial_swap/step7.png',
        './step8.1.png': './src/assets/images/tutorial_swap/step8.1.png',
        './step8.2.png': './src/assets/images/tutorial_swap/step8.2.png',
        './welcome.png': './src/assets/images/tutorial_swap/welcome.png',
      }
      function s(e) {
        var t = o(e)
        return n(t)
      }
      function o(e) {
        if (!n.o(r, e)) {
          var t = new Error("Cannot find module '" + e + "'")
          throw ((t.code = 'MODULE_NOT_FOUND'), t)
        }
        return r[e]
      }
      ;(s.keys = function () {
        return Object.keys(r)
      }),
        (s.resolve = o),
        (e.exports = s),
        (s.id = './src/assets/images/tutorial_swap sync recursive ^\\.\\/.*$')
    },
    './src/assets/images/tutorial_swap/menu.png': function (e, t, n) {
      'use strict'
      n.r(t), (t.default = n.p + 'static/media/menu.7db368c2.png')
    },
    './src/assets/images/tutorial_swap/step1.png': function (e, t, n) {
      'use strict'
      n.r(t), (t.default = n.p + 'static/media/step1.6b365c03.png')
    },
    './src/assets/images/tutorial_swap/step2.png': function (e, t, n) {
      'use strict'
      n.r(t), (t.default = n.p + 'static/media/step2.e1e10dbe.png')
    },
    './src/assets/images/tutorial_swap/step4.1.png': function (e, t, n) {
      'use strict'
      n.r(t), (t.default = n.p + 'static/media/step4.1.e5cc1015.png')
    },
    './src/assets/images/tutorial_swap/step4.2.png': function (e, t, n) {
      'use strict'
      n.r(t), (t.default = n.p + 'static/media/step4.2.eeddff9d.png')
    },
    './src/assets/images/tutorial_swap/step5.png': function (e, t, n) {
      'use strict'
      n.r(t), (t.default = n.p + 'static/media/step5.89d19489.png')
    },
    './src/assets/images/tutorial_swap/step6.png': function (e, t, n) {
      'use strict'
      n.r(t), (t.default = n.p + 'static/media/step6.b50a9957.png')
    },
    './src/assets/images/tutorial_swap/step7.png': function (e, t, n) {
      'use strict'
      n.r(t), (t.default = n.p + 'static/media/step7.17646aa9.png')
    },
    './src/assets/images/tutorial_swap/step8.1.png': function (e, t, n) {
      'use strict'
      n.r(t), (t.default = n.p + 'static/media/step8.1.082a9cd5.png')
    },
    './src/assets/images/tutorial_swap/step8.2.png': function (e, t, n) {
      'use strict'
      n.r(t), (t.default = n.p + 'static/media/step8.2.4a1a9794.png')
    },
    './src/assets/images/tutorial_swap/welcome.png': function (e, t, n) {
      'use strict'
      n.r(t), (t.default = n.p + 'static/media/welcome.9b263ff0.png')
    },
    './src/components/ArrowRotate.tsx': function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return d
      }),
        n.d(t, 'a', function () {
          return u
        })
      var r = n('./node_modules/styled-components/dist/styled-components.browser.esm.js'),
        s = n('./node_modules/@svgr/webpack/lib/index.js?-svgo,+titleProp,+ref!./src/assets/svg/down.svg'),
        o = n('./src/components/Icons/index.ts'),
        i = n('./src/hooks/useTheme.ts'),
        a = n('./node_modules/react/jsx-runtime.js'),
        c = r.default.div.withConfig({ displayName: 'ArrowRotate__ArrowWrapper', componentId: 'sc-ngpmfs-0' })(
          [
            'padding:8px;display:flex;justify-content:center;align-items:center;background:#000000;width:fit-content;height:fit-content;border:1px solid #52ccad;border-radius:999px;transform:rotate( ',
            ' );transition:transform 300ms;width:40px;height:40px;',
            ';',
          ],
          e => {
            var t = e.rotated
            return e.isVertical ? (t ? '270deg' : '90deg') : t ? '180deg' : '0'
          },
          e => !e.disable && Object(r.css)(['cursor:pointer;:hover{opacity:0.8;}']),
        )
      function d(e) {
        var t = e.rotate,
          n = e.onClick,
          r = e.isVertical,
          s = void 0 !== r && r,
          d = e.style,
          l = void 0 === d ? {} : d,
          u = Object(i.a)()
        return Object(a.jsx)(c, {
          disable: !n,
          rotated: t,
          isVertical: s,
          onClick: n,
          style: l,
          children: Object(a.jsx)(o.n, { size: 24, color: u.subText }),
        })
      }
      var l = r.default.div.withConfig({ displayName: 'ArrowRotate__StyledIcon', componentId: 'sc-ngpmfs-1' })(
          ['transition:transform 300ms;transform:rotate(', ');path{fill:', ';}'],
          e => (e.$rotate ? '-180deg' : '0'),
          e => e.color || 'currentColor',
        ),
        u = e => {
          var t = e.rotate,
            n = e.size,
            r = void 0 === n ? 24 : n,
            o = e.color
          return Object(a.jsx)(l, {
            $rotate: t,
            style: { width: r, height: r },
            color: o,
            children: Object(a.jsx)(s.a, { width: r }),
          })
        }
    },
    './src/components/Dots.tsx': function (e, t, n) {
      'use strict'
      var r = n('./node_modules/styled-components/dist/styled-components.browser.esm.js').default.span.withConfig({
        displayName: 'Dots',
        componentId: 'sc-1ae7w1-0',
      })([
        "&::after{display:inline-block;animation:ellipsis 1.25s infinite;content:'.';width:1em;text-align:left;}@keyframes ellipsis{0%{content:'.';}33%{content:'..';}66%{content:'...';}}",
      ])
      t.a = r
    },
    './src/components/ProgressSteps/index.tsx': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return x
      })
      var r = n('./node_modules/@babel/runtime/helpers/esm/objectSpread2.js'),
        s = n('./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'),
        o = n('./node_modules/polished/dist/polished.esm.js'),
        i = n('./node_modules/styled-components/dist/styled-components.browser.esm.js'),
        a = n('./src/components/Column/index.tsx'),
        c = n('./src/components/Row/index.tsx'),
        d = n('./node_modules/react/jsx-runtime.js'),
        l = ['steps', 'disabled'],
        u = Object(i.default)(a.a).withConfig({ displayName: 'ProgressSteps__Wrapper', componentId: 'sc-nc82fo-0' })([
          '',
        ]),
        b = Object(i.default)(c.b).withConfig({ displayName: 'ProgressSteps__Grouping', componentId: 'sc-nc82fo-1' })([
          'width:50%;',
        ]),
        p = i.default.div.withConfig({ displayName: 'ProgressSteps__Circle', componentId: 'sc-nc82fo-2' })(
          [
            'min-width:20px;min-height:20px;background-color:',
            ';border-radius:50%;color:',
            ';display:flex;align-items:center;justify-content:center;line-height:8px;font-size:12px;',
          ],
          e => {
            var t = e.theme,
              n = e.confirmed
            return e.disabled ? t.buttonGray : n ? t.green1 : t.primary
          },
          e => {
            var t = e.theme
            return e.disabled ? t.border : t.textReverse
          },
        ),
        j = i.default.div.withConfig({ displayName: 'ProgressSteps__CircleRow', componentId: 'sc-nc82fo-3' })([
          'width:calc(100% - 20px);display:flex;align-items:center;',
        ]),
        m = i.default.div.withConfig({ displayName: 'ProgressSteps__Connector', componentId: 'sc-nc82fo-4' })(
          ['width:100%;height:2px;background:linear-gradient( 90deg,', ' 0%,', ' 80% );opacity:0.6;'],
          e => {
            var t = e.theme,
              n = e.prevConfirmed
            return e.disabled ? t.bg4 : Object(o.g)(0.5, n ? t.green1 : t.primary)
          },
          e => {
            var t = e.theme,
              n = e.prevConfirmed
            return e.disabled ? t.bg4 : n ? t.primary : t.bg4
          },
        )
      function x(e) {
        var t = e.steps,
          n = e.disabled,
          o = void 0 !== n && n,
          i = Object(s.a)(e, l)
        return Object(d.jsx)(
          u,
          Object(r.a)(
            Object(r.a)({ justify: 'center' }, i),
            {},
            {
              children: Object(d.jsxs)(b, {
                children: [
                  t.map((e, n) =>
                    Object(d.jsxs)(
                      j,
                      {
                        children: [
                          Object(d.jsx)(p, {
                            confirmed: e,
                            disabled: o || (!t[n - 1] && 0 !== n),
                            children: e ? '\u2713' : n + 1,
                          }),
                          Object(d.jsx)(m, { prevConfirmed: e, disabled: o }),
                        ],
                      },
                      n,
                    ),
                  ),
                  Object(d.jsx)(p, { disabled: o || !t[t.length - 1], children: t.length + 1 }),
                ],
              }),
            },
          ),
        )
      }
    },
    './src/components/Select.tsx': function (e, t, n) {
      'use strict'
      var r = n('./node_modules/@babel/runtime/helpers/esm/objectSpread2.js'),
        s = n('./node_modules/@babel/runtime/helpers/esm/slicedToArray.js'),
        o = n('./node_modules/react/index.js'),
        i = n('./node_modules/styled-components/dist/styled-components.browser.esm.js'),
        a = n('./src/hooks/useOnClickOutside.tsx'),
        c = n('./src/components/ArrowRotate.tsx'),
        d = n('./node_modules/react/jsx-runtime.js'),
        l = i.default.div.withConfig({ displayName: 'Select__SelectWrapper', componentId: 'sc-15crozs-0' })(
          [
            'cursor:pointer;border-radius:12px;background:',
            ';display:flex;justify-content:space-between;align-items:center;position:relative;font-size:12px;color:',
            ';padding:12px;',
          ],
          e => e.theme.buttonBlack,
          e => e.theme.subText,
        ),
        u = i.default.div.withConfig({ displayName: 'Select__SelectMenu', componentId: 'sc-15crozs-1' })(
          [
            'position:absolute;top:40px;left:0;right:0;margin:auto;border-radius:16px;filter:drop-shadow(0px 4px 12px rgba(0,0,0,0.36));z-index:2;background:',
            ';padding:10px 0px;width:max-content;',
          ],
          e => e.theme.tabActive,
        ),
        b = i.default.div.withConfig({ displayName: 'Select__Option', componentId: 'sc-15crozs-2' })(
          [
            'padding:10px 18px;cursor:pointer;font-size:12px;color:',
            ';white-space:nowrap;&:hover{background-color:',
            ';}font-weight:',
            ';',
          ],
          e => e.theme.subText,
          e => e.theme.background,
          e => (e.$selected ? '500' : 'unset'),
        ),
        p = i.default.div.withConfig({ displayName: 'Select__SelectedWrap', componentId: 'sc-15crozs-3' })([
          'white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1;',
        ]),
        j = e => {
          var t
          return e ? ('object' !== typeof e ? e : null !== (t = e.value) && void 0 !== t ? t : e.label) : ''
        },
        m = e => (e ? ('object' !== typeof e ? e : e.label || e.value) : '')
      t.a = Object(i.default)(function (e) {
        var t = e.options,
          n = e.activeRender,
          i = e.optionRender,
          x = e.style,
          h = void 0 === x ? {} : x,
          O = e.menuStyle,
          f = void 0 === O ? {} : O,
          g = e.optionStyle,
          v = void 0 === g ? {} : g,
          y = e.onChange,
          w = e.value,
          k = e.className,
          C = e.forceMenuPlacementTop,
          _ = void 0 !== C && C,
          T = e.arrowColor,
          I = Object(o.useState)(j(t[0])),
          S = Object(s.a)(I, 2),
          A = S[0],
          E = S[1],
          N = Object(o.useState)(!1),
          L = Object(s.a)(N, 2),
          P = L[0],
          D = L[1],
          M = Object(o.useState)(_),
          R = Object(s.a)(M, 2),
          W = R[0],
          F = R[1]
        Object(o.useEffect)(() => {
          var e,
            n = null === (e = t.find(e => j(e) === w)) || void 0 === e ? void 0 : e.value
          n && E(n)
        }, [w, t]),
          Object(o.useEffect)(() => {
            null !== z &&
              void 0 !== z &&
              z.current &&
              (W ||
                F(
                  P &&
                    (function (e) {
                      var t, n
                      return (
                        e.getBoundingClientRect().bottom >=
                        (window.innerHeight ||
                          (null === (t = document) || void 0 === t || null === (n = t.documentElement) || void 0 === n
                            ? void 0
                            : n.clientHeight))
                      )
                    })(z.current),
                ))
          }, [P, W])
        var B = Object(o.useRef)(null)
        Object(a.a)(B, () => {
          D(!1)
        })
        var U = t.find(e => j(e) === A),
          z = Object(o.useRef)(null)
        return Object(d.jsxs)(l, {
          ref: B,
          role: 'button',
          onClick: () => {
            D(!P)
          },
          style: h,
          className: k,
          children: [
            Object(d.jsx)(p, { children: n ? n(U) : m(U) }),
            Object(d.jsx)(c.a, { rotate: P, color: T }),
            P &&
              Object(d.jsx)(u, {
                style: Object(r.a)(Object(r.a)({}, f), W ? { bottom: 40, top: 'unset' } : {}),
                ref: z,
                children: t.map(e => {
                  var t = j(e)
                  return Object(d.jsx)(
                    b,
                    {
                      role: 'button',
                      $selected: t === w || t === j(U),
                      onClick: n => {
                        var r
                        n.stopPropagation(),
                          n.preventDefault(),
                          D(e => !e),
                          e.onSelect ? null === (r = e.onSelect) || void 0 === r || r.call(e) : (E(t), y(t))
                      },
                      style: v,
                      children: i ? i(e) : m(e),
                    },
                    t,
                  )
                }),
              }),
          ],
        })
      }).withConfig({ displayName: 'Select', componentId: 'sc-15crozs-4' })([''])
    },
    './src/components/SwapForm/OutputCurrencyPanel.tsx': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return b
      })
      var r = n('./node_modules/@lingui/react/esm/index.js'),
        s = (n('./node_modules/react/index.js'), n('./node_modules/rebass/dist/index.esm.js')),
        o = n('./node_modules/styled-components/dist/styled-components.browser.esm.js'),
        i = n('./src/components/CurrencyInputPanel/index.tsx'),
        a = n('./src/components/Tooltip/index.tsx'),
        c = n('./src/constants/index.ts'),
        d = n('./src/hooks/useWrapCallback.ts'),
        l = n('./src/utils/index.ts'),
        u = n('./node_modules/react/jsx-runtime.js'),
        b = o.default.div.withConfig({ displayName: 'OutputCurrencyPanel__Label', componentId: 'sc-8lpfl4-0' })(
          ['font-weight:500;font-size:12px;color:', ';border-bottom:1px dashed ', ';'],
          e => e.theme.subText,
          e => e.theme.border,
        )
      t.b = e => {
        var t = e.wrapType,
          n = e.parsedAmountIn,
          o = e.parsedAmountOut,
          p = e.currencyIn,
          j = e.currencyOut,
          m = e.amountOutUsd,
          x = e.onChangeCurrencyOut,
          h = t !== d.a.NOT_APPLICABLE
        return Object(u.jsx)(i.a, {
          disabledInput: !0,
          value: h ? (null === n || void 0 === n ? void 0 : n.toExact()) || '' : o ? o.toSignificant(c.S) : '',
          onMax: null,
          onHalf: null,
          currency: j,
          onCurrencySelect: x,
          otherCurrency: p,
          id: 'swap-currency-output',
          showCommonBases: !0,
          estimatedUsd: (() => {
            if (!h) return m ? ''.concat(Object(l.i)(m.toString(), !0)) : void 0
          })(),
          label: Object(u.jsx)(b, {
            children: Object(u.jsx)(a.a, {
              placement: 'right',
              width: '200px',
              text: Object(u.jsx)(s.e, {
                fontSize: 12,
                children: Object(u.jsx)(r.b, {
                  id: 'This is the estimated output amount. Do review the actual output amount in the confirmation stage.',
                }),
              }),
              children: Object(u.jsx)(r.b, { id: 'Est. Output' }),
            }),
          }),
          positionLabel: 'in',
        })
      }
    },
    './src/components/SwapForm/PriceImpactNote.tsx': function (e, t, n) {
      'use strict'
      var r = n('./node_modules/@lingui/react/esm/index.js'),
        s = n('./node_modules/rebass/dist/index.esm.js'),
        o = n('./node_modules/styled-components/dist/styled-components.browser.esm.js'),
        i = n('./src/components/Row/index.tsx'),
        a = n('./src/components/WarningNote/index.tsx'),
        c = n('./src/utils/prices.ts'),
        d = n('./node_modules/react/jsx-runtime.js'),
        l = Object(o.default)(s.e).withConfig({
          displayName: 'PriceImpactNote__TextUnderlineColor',
          componentId: 'sc-1sm9w6g-0',
        })(
          [
            'border-bottom:1px solid ',
            ';width:fit-content;cursor:pointer;color:',
            ';font-weight:500;margin-right:0.5ch;',
          ],
          e => e.theme.text,
          e => e.theme.text,
        ),
        u = Object(o.default)(s.e).withConfig({
          displayName: 'PriceImpactNote__TextUnderlineTransparent',
          componentId: 'sc-1sm9w6g-1',
        })(['border-bottom:1px solid transparent;width:fit-content;cursor:pointer;']),
        b = 'https://docs.kyberswap.com/getting-started/foundational-topics/decentralized-finance/price-impact'
      t.a = e => {
        var t = e.isDegenMode,
          n = e.priceImpact,
          o = Object(c.a)(n)
        if ('number' !== typeof n) return null
        if (o.isInvalid)
          return Object(d.jsx)(a.a, {
            level: 'serious',
            shortText: Object(d.jsx)(i.f, {
              alignItems: 'center',
              style: { gap: '0.5ch' },
              children: Object(d.jsx)(r.b, {
                id: '<0>Unable to calculate</0><1>Price Impact</1>',
                components: {
                  0: Object(d.jsx)(u, {}),
                  1: Object(d.jsx)(l, { as: 'a', href: b, target: '_blank', rel: 'noreferrer' }),
                },
              }),
            }),
            longText: Object(d.jsx)(s.e, {
              children: t
                ? Object(d.jsx)(r.b, {
                    id: 'You have turned on <0>Degen Mode</0> from settings. Trades can still be executed when price impact cannot be calculated.',
                    components: { 0: Object(d.jsx)('b', {}) },
                  })
                : Object(d.jsx)(r.b, {
                    id: 'You can turn on Degen Mode from Settings to execute trades when price impact cannot be calculated. This can result in bad rates and loss of funds!',
                  }),
            }),
          })
        if (o.isVeryHigh)
          return Object(d.jsx)(a.a, {
            level: 'serious',
            shortText: Object(d.jsx)(i.f, {
              alignItems: 'center',
              style: { gap: '0.5ch' },
              children: Object(d.jsx)(r.b, {
                id: '<0><1>Price Impact</1>is very high. You will lose funds!</0>',
                components: {
                  0: Object(d.jsx)(u, {}),
                  1: Object(d.jsx)(l, { as: 'a', href: b, target: '_blank', rel: 'noreferrer' }),
                },
              }),
            }),
            longText: Object(d.jsx)(s.e, {
              children: t
                ? Object(d.jsx)(r.b, {
                    id: 'You have turned on Degen Mode from settings. Trades with very high price impact can be executed',
                  })
                : Object(d.jsx)(r.b, {
                    id: 'You can turn on Degen Mode from Settings to execute trades with very high price impact. This can result in bad rates and loss of funds',
                  }),
            }),
          })
        var p = Object(d.jsx)(i.f, {
          alignItems: 'center',
          style: { gap: '0.5ch' },
          children: Object(d.jsx)(r.b, {
            id: '<0>Price Impact</0><1> is high</1>',
            components: {
              0: Object(d.jsx)(l, { as: 'a', href: b, target: '_blank', rel: 'noreferrer' }),
              1: Object(d.jsx)(u, {}),
            },
          }),
        })
        return o.isHigh ? Object(d.jsx)(a.a, { shortText: p }) : null
      }
    },
    './src/components/SwapForm/SlippageSetting.tsx': function (e, t, n) {
      'use strict'
      var r = n('./node_modules/@babel/runtime/helpers/esm/slicedToArray.js'),
        s = n('./node_modules/@lingui/react/esm/index.js'),
        o = n('./node_modules/react/index.js'),
        i = n('./node_modules/rebass/dist/index.esm.js'),
        a = n('./node_modules/styled-components/dist/styled-components.browser.esm.js'),
        c = n('./node_modules/@svgr/webpack/lib/index.js?-svgo,+titleProp,+ref!./src/assets/svg/down.svg'),
        d = n('./src/components/SlippageControl/index.tsx'),
        l = n('./src/components/Tooltip/index.tsx'),
        u = n('./src/constants/index.ts'),
        b = n('./src/hooks/useTheme.ts'),
        p = n('./src/state/hooks.ts'),
        j = n('./src/state/user/hooks.tsx'),
        m = n('./src/theme/index.tsx'),
        x = n('./src/utils/slippage.ts'),
        h = n('./node_modules/react/jsx-runtime.js'),
        O = Object(a.default)(c.a).withConfig({
          displayName: 'SlippageSetting__DropdownIcon',
          componentId: 'sc-1vewn7i-0',
        })(
          ['transition:transform 300ms;color:', ";&[data-flip='true']{transform:rotate(180deg);}"],
          e => e.theme.subText,
        )
      t.a = e => {
        var t = e.isStablePairSwap,
          n = e.rightComponent,
          a = Object(b.a)(),
          c = Object(p.b)(e => e.user.isSlippageControlPinned),
          f = Object(o.useState)(!1),
          g = Object(r.a)(f, 2),
          v = g[0],
          y = g[1],
          w = Object(j.y)(),
          k = Object(r.a)(w, 2),
          C = k[0],
          _ = k[1],
          T = Object(x.c)(C, t)
        return c
          ? Object(h.jsxs)(i.b, {
              sx: { flexDirection: 'column', width: '100%', padding: '0 8px' },
              children: [
                Object(h.jsxs)(i.b, {
                  sx: { alignItems: 'center', color: a.subText, gap: '4px', justifyContent: 'space-between' },
                  children: [
                    Object(h.jsxs)(i.b, {
                      sx: { gap: '4px' },
                      alignItems: 'center',
                      children: [
                        Object(h.jsx)(l.c, {
                          color: a.subText,
                          fontSize: 12,
                          fontWeight: 500,
                          sx: { display: 'flex', alignItems: 'center', lineHeight: '1', height: 'fit-content' },
                          children: Object(h.jsx)(l.a, {
                            placement: 'right',
                            text: Object(h.jsx)(i.e, {
                              children: Object(h.jsx)(s.b, {
                                id: 'During your swap if the price changes by more than this %, your transaction will revert. Read more <0>here \u2197</0>',
                                components: {
                                  0: Object(h.jsx)(m.d, {
                                    href: '#',
                                  }),
                                },
                              }),
                            }),
                            children: Object(h.jsx)(s.b, { id: 'Max Slippage' }),
                          }),
                        }),
                        ':',
                        Object(h.jsxs)(i.b, {
                          sx: { alignItems: 'center', gap: '4px', cursor: 'pointer' },
                          role: 'button',
                          onClick: () => y(e => !e),
                          children: [
                            Object(h.jsx)(i.e, {
                              sx: { fontSize: '14px', fontWeight: 500, lineHeight: '1', color: a.text },
                              children: Object(x.d)(C),
                            }),
                            Object(h.jsx)(O, { 'data-flip': v }),
                          ],
                        }),
                      ],
                    }),
                    n,
                  ],
                }),
                Object(h.jsx)(i.b, {
                  sx: {
                    transition: 'all 100ms linear',
                    paddingTop: v ? '8px' : '0px',
                    height: v ? '36px' : '0px',
                    overflow: 'hidden',
                  },
                  children: Object(h.jsx)(d.a, {
                    rawSlippage: C,
                    setRawSlippage: _,
                    isWarning: T,
                    defaultRawSlippage: t ? u.w : u.u,
                  }),
                }),
              ],
            })
          : null
      }
    },
    './src/components/SwapForm/SwapFormContext.tsx': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      }),
        n.d(t, 'b', function () {
          return d
        })
      var r = n('./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'),
        s = n('./node_modules/react/index.js'),
        o = n('./node_modules/react/jsx-runtime.js'),
        i = ['children'],
        a = Object(s.createContext)(void 0),
        c = e => {
          var t = e.children,
            n = Object(r.a)(e, i)
          return Object(o.jsx)(a.Provider, { value: n, children: t })
        },
        d = () => {
          var e = Object(s.useContext)(a)
          if (!e) throw new Error('hook is used outside of SwapFormContext')
          return e
        }
    },
    './src/components/SwapForm/SwapModal/SwapBrief.tsx': function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return v
      }),
        n.d(t, 'a', function () {
          return y
        }),
        n.d(t, 'c', function () {
          return w
        })
      var r = n('./node_modules/@lingui/react/esm/index.js'),
        s = (n('./node_modules/react/index.js'), n('./node_modules/react-feather/dist/icons/arrow-down.js')),
        o = n('./node_modules/react-loading-skeleton/dist/index.mjs'),
        i = n('./node_modules/rebass/dist/index.esm.js'),
        a = n('./node_modules/styled-components/dist/styled-components.browser.esm.js'),
        c = n('./src/components/Column/index.tsx'),
        d = n('./src/components/CurrencyLogo/index.tsx'),
        l = n('./src/components/Row/index.tsx'),
        u = n('./src/components/SwapForm/SwapFormContext.tsx'),
        b = n('./node_modules/polished/dist/polished.esm.js'),
        p = n('./src/components/InfoHelper/index.tsx'),
        j = n('./src/constants/index.ts'),
        m = n('./src/hooks/useTheme.ts'),
        x = n('./node_modules/react/jsx-runtime.js'),
        h = Object(a.default)(c.a)
          .attrs(e => ({ 'data-level': e.$level }))
          .withConfig({ displayName: 'UpdatedBadge__BadgeWrapper', componentId: 'sc-1kiyc6k-0' })(
          [
            "display:flex;align-items:center;gap:4px;padding:4px 8px;border-radius:36px;line-height:1;font-size:12px;font-weight:400;&[data-level='worst']{background-color:",
            ';color:',
            ";}&[data-level='worse']{background-color:",
            ';color:',
            ";}&[data-level='better']{background-color:",
            ';color:',
            ';}',
          ],
          e => {
            var t = e.theme
            return Object(b.g)(0.9, t.red)
          },
          e => e.theme.red,
          e => {
            var t = e.theme
            return Object(b.g)(0.9, t.warning)
          },
          e => e.theme.warning,
          e => {
            var t = e.theme
            return Object(b.g)(0.9, t.primary)
          },
          e => e.theme.primary,
        )
      function O(e) {
        var t = e.$level,
          n = e.outputAmount,
          s = Object(m.a)()
        return t
          ? Object(x.jsxs)(h, {
              $level: t,
              children: [
                'better' === t &&
                  Object(x.jsx)(p.a, {
                    placement: 'top',
                    size: 14,
                    color: s.primary,
                    text: Object(x.jsx)(i.e, {
                      fontSize: 12,
                      children: Object(x.jsx)(r.b, {
                        id: 'We got you a higher amount. The initial output amount was {0} {1}',
                        values: { 0: n.toSignificant(j.S), 1: n.currency.symbol },
                      }),
                    }),
                  }),
                Object(x.jsx)(r.b, { id: 'Updated' }),
              ],
            })
          : null
      }
      var f = n('./src/utils/index.ts'),
        g = Object(a.default)(i.e).withConfig({ displayName: 'SwapBrief__TruncatedText', componentId: 'sc-2bbdr0-0' })([
          'text-overflow:ellipsis;overflow:hidden;font-size:24px;font-weight:500;',
        ]),
        v = Object(a.default)(i.b).withConfig({
          displayName: 'SwapBrief__CurrencyInputAmountWrapper',
          componentId: 'sc-2bbdr0-1',
        })(['flex-direction:column;gap:8px;border-radius:16px;border:1px solid #4fb698;padding:12px 16px;']),
        y = a.default.div.withConfig({ displayName: 'SwapBrief__ArrowDownWrapper', componentId: 'sc-2bbdr0-2' })(
          [
            'border:1px solid #4fb698;background:',
            ';border-radius:50%;width:20px;height:20px;display:flex;justify-content:center;align-items:center;position:absolute;top:calc(76px - 6px);left:50%;transform:translateX(-50%);',
          ],
          e => e.theme.buttonGray,
        )
      function w(e) {
        var t = e.inputAmount,
          n = e.amountInUsd,
          a = e.outputAmount,
          b = e.outputAmountFromBuild,
          p = e.amountOutUsdFromBuild,
          h = e.$level,
          w = e.isLoading,
          k = e.currencyOut,
          C = Object(m.a)(),
          _ = Object(u.b)().typedValue
        return Object(x.jsxs)(c.a, {
          gap: 'sm',
          style: { marginTop: '16px', position: 'relative' },
          children: [
            Object(x.jsxs)(v, {
              children: [
                Object(x.jsx)(i.e, {
                  fontSize: 12,
                  fontWeight: 500,
                  color: C.subText,
                  children: Object(x.jsx)(r.b, { id: 'Input Amount' }),
                }),
                Object(x.jsxs)(l.b, {
                  children: [
                    Object(x.jsx)(g, { children: _ }),
                    Object(x.jsxs)(i.b, {
                      alignItems: 'center',
                      sx: { gap: '8px' },
                      minWidth: 'fit-content',
                      children: [
                        Object(x.jsxs)(i.e, {
                          fontSize: 14,
                          fontWeight: 500,
                          color: C.subText,
                          children: ['~', Object(f.i)(n, !0)],
                        }),
                        Object(x.jsx)(d.a, { currency: t.currency, size: '24px' }),
                        Object(x.jsx)(i.e, {
                          fontSize: 20,
                          fontWeight: 500,
                          color: C.subText,
                          children: t.currency.symbol,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            Object(x.jsx)(y, { children: Object(x.jsx)(s.a, { size: '12', color: C.subText }) }),
            Object(x.jsxs)(v, {
              children: [
                Object(x.jsxs)(i.b, {
                  alignItems: 'center',
                  style: { gap: '4px' },
                  children: [
                    Object(x.jsx)(i.e, {
                      fontSize: 12,
                      fontWeight: 500,
                      color: C.subText,
                      children: Object(x.jsx)(r.b, { id: 'Output Amount' }),
                    }),
                    Object(x.jsx)(O, { $level: h, outputAmount: a }),
                  ],
                }),
                Object(x.jsxs)(l.b, {
                  children: [
                    w
                      ? Object(x.jsx)(o.a, {
                          width: '108px',
                          height: '26.5px',
                          baseColor: C.border,
                          highlightColor: C.buttonGray,
                          borderRadius: '80px',
                        })
                      : b
                      ? Object(x.jsx)(g, { children: b.toSignificant(j.S) })
                      : Object(x.jsx)(g, { children: '--' }),
                    Object(x.jsxs)(i.b, {
                      alignItems: 'center',
                      sx: { gap: '8px' },
                      minWidth: 'fit-content',
                      children: [
                        w
                          ? Object(x.jsx)(o.a, {
                              width: '64px',
                              height: '15px',
                              baseColor: C.border,
                              highlightColor: C.buttonGray,
                              borderRadius: '80px',
                            })
                          : p
                          ? Object(x.jsxs)(i.e, {
                              fontSize: 14,
                              fontWeight: 500,
                              color: C.subText,
                              children: ['~', Object(f.i)(p, !0)],
                            })
                          : Object(x.jsx)(i.e, { fontSize: 14, fontWeight: 500, color: C.subText, children: '--' }),
                        Object(x.jsx)(d.a, { currency: k, size: '24px' }),
                        Object(x.jsx)(i.e, { fontSize: 20, fontWeight: 500, color: C.subText, children: k.symbol }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      }
    },
    './src/components/SwapForm/hooks/useGetRoute.ts': function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return f
      }),
        n.d(t, 'c', function () {
          return g
        })
      var r = n('./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js'),
        s = n('./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js'),
        o = n('./node_modules/@babel/runtime/helpers/esm/objectSpread2.js'),
        i = n('./node_modules/@babel/runtime/helpers/esm/slicedToArray.js'),
        a = n('./node_modules/@kyberswap/ks-sdk-core/dist/index.js'),
        c = n('./node_modules/lodash/lodash.js'),
        d = n('./node_modules/react/index.js'),
        l = n('./src/services/route/index.ts'),
        u = n('./src/state/customizeDexes/hooks.ts'),
        b = () => {
          var e = Object(u.a)(),
            t = Object(u.b)(),
            n = Object(i.a)(t, 1)[0],
            r = null === e || void 0 === e ? void 0 : e.filter(e => !n.includes(e.id)).map(e => e.id)
          return (null === r || void 0 === r ? void 0 : r.length) === (null === e || void 0 === e ? void 0 : e.length)
            ? ''
            : (null === r || void 0 === r
                ? void 0
                : r.join(',').replace('kyberswapv1', 'kyberswap,kyberswap-static')) || ''
        },
        p = n('./src/constants/index.ts'),
        j = n('./src/constants/networks.ts'),
        m = n('./src/hooks/index.ts'),
        x = n('./src/hooks/useDebounce.ts'),
        h = n('./src/hooks/useKyberSwapConfig.ts'),
        O = n('./src/utils/aggregator.ts'),
        f = e => (e.isNative ? (Object(j.q)(e.chainId) ? p.E : a.WETH[e.chainId].address) : e.wrapped.address),
        g = e => {
          var t = e.parsedAmount,
            n = e.currencyIn,
            o = e.currencyOut,
            l = e.customChain,
            u = Object(m.b)().account,
            b = Object(d.useRef)(new AbortController()),
            j = Object(h.b)().aggregatorAPI,
            f = Object(d.useState)(null),
            g = Object(i.a)(f, 2),
            v = g[0],
            y = g[1],
            w = Object(x.a)(t, p.H),
            k = Object(d.useCallback)(
              Object(s.a)(
                Object(r.a)().mark(function e() {
                  var t, s, i, c, d, m
                  return Object(r.a)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((i =
                              (null === w || void 0 === w || null === (t = w.quotient) || void 0 === t
                                ? void 0
                                : t.toString()) || ''),
                            n &&
                              o &&
                              i &&
                              null !== w &&
                              void 0 !== w &&
                              null !== (s = w.currency) &&
                              void 0 !== s &&
                              s.equals(n) &&
                              l === a.ChainId.SOLANA)
                          ) {
                            e.next = 4
                            break
                          }
                          return y(null), e.abrupt('return')
                        case 4:
                          return (
                            b.current.abort(),
                            (b.current = new AbortController()),
                            (c = null !== u && void 0 !== u ? u : p.eb),
                            (d = b.current.signal),
                            (e.next = 10),
                            O.a.baseTradeSolana({
                              aggregatorAPI: j,
                              currencyAmountIn: w,
                              currencyOut: o,
                              to: c,
                              signal: d,
                            })
                          )
                        case 10:
                          ;(m = e.sent), y(m)
                        case 12:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              ),
              [n, o, w, u, j, l],
            )
          return { fetcher: Object(d.useMemo)(() => Object(c.debounce)(k, p.H), [k]), result: v }
        }
      t.a = e => {
        var t = l.b.useLazyGetRouteQuery(),
          n = Object(i.a)(t, 2),
          u = n[0],
          x = n[1],
          O = Object(h.b)(),
          g = O.aggregatorDomain,
          v = O.isEnableAuthenAggregator,
          y = e.isSaveGas,
          w = e.parsedAmount,
          k = e.currencyIn,
          C = e.currencyOut,
          _ = e.feeConfig,
          T = e.customChain,
          I = e.isProcessingSwap,
          S = Object(m.b)().chainId,
          A = T || S,
          E = b(),
          N = _ || {},
          L = N.chargeFeeBy,
          P = void 0 === L ? '' : L,
          D = N.feeReceiver,
          M = void 0 === D ? '' : D,
          R = N.feeAmount,
          W = void 0 === R ? '' : R,
          F = void 0 !== (null === _ || void 0 === _ ? void 0 : _.isInBps) ? (_.isInBps ? '1' : '0') : '',
          B = Object(d.useRef)(!1),
          U = Object(d.useMemo)(() => (B.current ? Object(o.a)(Object(o.a)({}, x), {}, { data: void 0 }) : x), [x])
        Object(d.useEffect)(() => {
          I || (B.current = !0)
        }, [I])
        var z = Object(d.useMemo)(
          () =>
            Object(c.debounce)(
              (function () {
                var e = Object(s.a)(
                  Object(r.a)().mark(function e(t) {
                    return Object(r.a)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), u(t)
                          case 2:
                            B.current = !1
                          case 3:
                          case 'end':
                            return e.stop()
                        }
                    }, e)
                  }),
                )
                return function (t) {
                  return e.apply(this, arguments)
                }
              })(),
              p.H,
            ),
          [u],
        )
        return {
          fetcher: Object(d.useCallback)(
            Object(s.a)(
              Object(r.a)().mark(function e() {
                var t, n, s, o, i, c, d
                return Object(r.a)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((s =
                            (null === w || void 0 === w || null === (t = w.quotient) || void 0 === t
                              ? void 0
                              : t.toString()) || ''),
                          k &&
                            C &&
                            s &&
                            null !== w &&
                            void 0 !== w &&
                            null !== (n = w.currency) &&
                            void 0 !== n &&
                            n.equals(k) &&
                            A !== a.ChainId.SOLANA)
                        ) {
                          e.next = 3
                          break
                        }
                        return e.abrupt('return', void 0)
                      case 3:
                        return (
                          (o = f(k)),
                          (i = f(C)),
                          (c = {
                            tokenIn: o,
                            tokenOut: i,
                            amountIn: s,
                            saveGas: String(y),
                            includedSources: E,
                            gasInclude: 'true',
                            gasPrice: '',
                            feeAmount: W,
                            chargeFeeBy: P,
                            isInBps: F,
                            feeReceiver: M,
                          }),
                          Object.keys(c).forEach(e => {
                            c[e] || delete c[e]
                          }),
                          (d = ''.concat(g, '/').concat(j.h[A].aggregatorRoute, '/api/v1/routes')),
                          z({ url: d, params: c, authentication: v }),
                          e.abrupt('return', void 0)
                        )
                      case 10:
                      case 'end':
                        return e.stop()
                    }
                }, e)
              }),
            ),
            [
              g,
              A,
              P,
              k,
              C,
              E,
              W,
              M,
              F,
              y,
              null === w || void 0 === w ? void 0 : w.currency,
              null === w || void 0 === w ? void 0 : w.quotient,
              z,
              v,
            ],
          ),
          result: U,
        }
      }
    },
    './src/components/SwitchLocaleLink/index.tsx': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return x
      })
      var r,
        s = n('./node_modules/@babel/runtime/helpers/esm/objectSpread2.js'),
        o = n('./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'),
        i = n('./node_modules/querystring-es3/index.js'),
        a = n('./node_modules/react/index.js'),
        c = n('./node_modules/react-router/dist/index.js'),
        d = n('./node_modules/styled-components/dist/styled-components.browser.esm.js'),
        l = n('./src/constants/locales.tsx'),
        u = n('./src/hooks/useActiveLocale.ts'),
        b = n('./src/hooks/useParsedQueryString.ts'),
        p = n('./src/theme/index.tsx'),
        j = n('./node_modules/react/jsx-runtime.js'),
        m = Object(d.default)(p.k.small).withConfig({
          displayName: 'SwitchLocaleLink__Container',
          componentId: 'sc-1rrcg41-0',
        })(['opacity:0.6;:hover{opacity:1;}margin-top:1rem !important;', ';'], e =>
          e.theme.mediaWidth.upToMedium(r || (r = Object(o.a)(['\n    display: none;\n  ']))),
        )
      function x() {
        var e = Object(u.b)(),
          t = Object(a.useMemo)(() => Object(u.a)(), []),
          n = Object(c.k)(),
          r = Object(b.a)()
        if (t && (t !== l.a || e !== l.a)) {
          var o
          o = e === t ? l.a : t
          var d = Object(s.a)(
            Object(s.a)({}, n),
            {},
            { search: Object(i.stringify)(Object(s.a)(Object(s.a)({}, r), {}, { lng: o })) },
          )
          return Object(j.jsxs)(m, {
            children: ['KyberSwap available in: ', Object(j.jsx)(p.j, { to: d, children: Object(l.c)(o) })],
          })
        }
        return null
      }
    },
    './src/components/TokenWarningModal/index.tsx': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return i
      })
      var r = n('./src/components/Modal/index.tsx'),
        s = n('./src/components/SearchModal/ImportToken.tsx'),
        o = n('./node_modules/react/jsx-runtime.js')
      function i(e) {
        var t = e.isOpen,
          n = e.tokens,
          i = e.onConfirm,
          a = e.onDismiss
        return Object(o.jsx)(r.a, {
          isOpen: t,
          onDismiss: a,
          maxHeight: 100,
          children: Object(o.jsx)(s.a, { tokens: n, handleCurrencySelect: i, enterToImport: t }),
        })
      }
    },
    './src/components/TopTrendingSoonTokensInCurrentNetwork/index.tsx': function (e, t, n) {
      'use strict'
      var r = n('./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'),
        s = n('./node_modules/@babel/runtime/helpers/esm/slicedToArray.js'),
        o = n('./node_modules/@lingui/react/esm/index.js'),
        i = n('./node_modules/@lingui/core/esm/index.js'),
        a = n('./node_modules/react/index.js'),
        c = n.n(a),
        d = n('./node_modules/react-feather/dist/icons/chevron-right.js'),
        l = n('./node_modules/react-redux/es/index.js'),
        u = n('./node_modules/react-use/esm/useMedia.js'),
        b = n('./node_modules/rebass/dist/index.esm.js'),
        p = n('./node_modules/styled-components/dist/styled-components.browser.esm.js'),
        j = n.p + 'static/media/christmas-decor.928a35bb.svg',
        m = p.default.div.withConfig({ displayName: 'Animation__FadeInAnimation', componentId: 'sc-emmxn0-0' })(
          [
            '@keyframes fadeIn{0%{opacity:0;transform:translateY(-10%);}100%{opacity:1;transform:translateY(0%);}}animation-name:fadeIn;animation-iteration-count:1;animation-timing-function:ease-in-out;animation-duration:',
            ';',
          ],
          e => (e.$isAnimate ? '0.5s' : 0),
        ),
        x = n('./src/components/Button/index.tsx'),
        h = n('./src/components/Divider/index.tsx'),
        O = n('./src/components/Icons/DiscoverIcon.tsx'),
        f = n('./src/components/Modal/index.tsx'),
        g = n('./src/components/Tooltip/index.tsx'),
        v = n('./node_modules/polished/dist/polished.esm.js'),
        y = n('./node_modules/react-feather/dist/icons/info.js'),
        w = n('./node_modules/react-router/dist/index.js'),
        k = n('./node_modules/react-router-dom/dist/index.js'),
        C = n('./src/components/Icons/Cart.tsx'),
        _ = n('./src/constants/index.ts'),
        T = n('./src/hooks/index.ts'),
        I = n('./src/hooks/useMixpanel.ts'),
        S = n('./src/hooks/useTheme.ts'),
        A = n('./src/state/application/actions.ts'),
        E = n('./src/state/application/hooks.ts'),
        N = n('./src/utils/index.ts'),
        L = n('./node_modules/react/jsx-runtime.js'),
        P = p.default.div.withConfig({
          displayName: 'TopTrendingSoonTokenItem__Container',
          componentId: 'sc-1ibsk4u-0',
        })(['padding:6px 12px;background:', ';position:relative;border-radius:40px;'], e => e.theme.buttonBlack),
        D = e => {
          var t = e.tokenData,
            n = e.setSelectedToken,
            r = Object(S.a)(),
            s = Object(I.c)().mixpanelHandler,
            o = Object(T.b)().networkInfo,
            a = o.trueSightId || '',
            c = Object(E.r)(A.a.TRENDING_SOON_TOKEN_DETAIL),
            d = Object(w.k)().pathname,
            l = () => {
              n(t), c(), s(I.a.DISCOVER_SWAP_MORE_INFO_CLICKED, { trending_token: t.symbol })
            }
          return Object(L.jsx)(P, {
            children: Object(L.jsxs)(b.b, {
              style: { gap: '4px' },
              alignItems: 'center',
              children: [
                Object(L.jsx)(b.c, {
                  src: t.logo_url,
                  minWidth: '16px',
                  width: '16px',
                  minHeight: '16px',
                  height: '16px',
                  sx: { borderRadius: '50%', cursor: 'pointer' },
                  onClick: l,
                }),
                Object(L.jsx)(b.e, {
                  as: 'span',
                  fontSize: '12px',
                  mr: '4px',
                  color: r.subText,
                  sx: { cursor: 'pointer' },
                  onClick: l,
                  children: t.symbol,
                }),
                Object(L.jsx)(b.e, {
                  fontSize: '12px',
                  as: 'span',
                  sx: { whiteSpace: 'nowrap' },
                  children: Object(N.i)(t.price.toString(), !0),
                }),
                Object(L.jsxs)(b.e, {
                  as: 'span',
                  fontSize: '12px',
                  sx: { whiteSpace: 'nowrap', color: t.price_change_percentage_24h >= 0 ? r.apr : r.red },
                  children: [
                    '(',
                    t.price_change_percentage_24h >= 1
                      ? Object(N.h)(t.price_change_percentage_24h, 0, 0)
                      : Object(N.h)(t.price_change_percentage_24h, 0, 2),
                    '%)',
                  ],
                }),
                Object(L.jsx)(g.b, {
                  text: i.a._('More info'),
                  placement: 'top',
                  width: 'fit-content',
                  children: Object(L.jsx)(x.d, {
                    padding: '0',
                    onClick: l,
                    style: { background: r.background, width: '16px', height: '16px', borderRadius: '50%' },
                    children: Object(L.jsx)(y.a, { size: '10px', color: r.subText }),
                  }),
                }),
                Object(L.jsx)(x.d, {
                  padding: '0',
                  as: k.b,
                  to: ''
                    .concat(d.startsWith(_.g.SWAP) ? _.g.SWAP : _.g.LIMIT, '/')
                    .concat(o.route, '?inputCurrency=ETH&outputCurrency=')
                    .concat(t.platforms.get(a)),
                  style: {
                    background: Object(v.d)(r.primary, 0.2),
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                  },
                  onClick: () => s(I.a.DISCOVER_SWAP_BUY_NOW_CLICKED, { trending_token: t.symbol }),
                  children: Object(L.jsx)(C.a, { color: r.primary, size: 10 }),
                }),
              ],
            }),
          })
        },
        M = n('./src/components/TopTrendingSoonTokensInCurrentNetwork/useTopTrendingSoonTokensInCurrentNetwork.ts'),
        R = n('./node_modules/react-use/esm/useDeepCompareEffect.js')
      var W,
        F = n('./src/pages/TrueSight/index.tsx'),
        B = n('./src/pages/TrueSight/components/TrendingSoonLayout/MobileChartModal.tsx'),
        U = n('./src/pages/TrueSight/components/TrendingSoonLayout/TrendingSoonTokenDetail.tsx'),
        z = n('./src/pages/TrueSight/components/TrendingSoonLayout/TrendingSoonTokenItem.tsx'),
        H = n('./src/pages/TrueSight/hooks/useGetCoinGeckoChartData.ts'),
        G = n('./src/pages/TrueSight/styled.tsx'),
        q = n('./src/state/swap/actions.ts'),
        V = n('./src/state/swap/hooks.ts'),
        Y = n('./src/state/user/hooks.tsx'),
        K = n('./src/theme/index.tsx'),
        $ = p.default.img.withConfig({
          displayName: 'TopTrendingSoonTokensInCurrentNetwork__ChristmasDecor',
          componentId: 'sc-8qbix9-0',
        })(['position:absolute;top:-12px;right:-12px;']),
        Z = p.default.div.withConfig({
          displayName: 'TopTrendingSoonTokensInCurrentNetwork__TrendingSoonTokensAndNoteContainer',
          componentId: 'sc-8qbix9-1',
        })([
          'width:100%;display:flex;flex-direction:column;align-items:center;gap:8px;overflow:hidden;margin:auto;align-self:center;@media screen and (min-width:1100px){max-width:1054px;}@media screen and (min-width:1240px){max-width:1154px;}@media screen and (min-width:1320px){max-width:1226px;}@media screen and (min-width:1500px){max-width:1394px;}',
        ]),
        X = p.default.div.withConfig({
          displayName: 'TopTrendingSoonTokensInCurrentNetwork__TrendingSoonTokensContainer',
          componentId: 'sc-8qbix9-2',
        })(
          [
            'width:100%;display:flex;align-items:center;position:relative;padding:6px 6px 6px 12px;background:',
            ';border-radius:999px;',
            '',
          ],
          e => e.theme.background,
          e => e.theme.mediaWidth.upToSmall(W || (W = Object(r.a)(['\n    padding: 6px;\n  ']))),
        ),
        Q = p.default.div.withConfig({
          displayName: 'TopTrendingSoonTokensInCurrentNetwork__TrendingSoonTokensMobileContainer',
          componentId: 'sc-8qbix9-3',
        })(['display:flex;flex-direction:column;width:100%;'])
      t.a = () => {
        var e = Object(S.a)(),
          t = Object(I.c)().mixpanelHandler,
          n = Object(M.a)(),
          r = n.data,
          p = n.isLoading,
          v = Object(u.a)('(min-width: 768px)'),
          y = Object(Y.n)(),
          w = Object(E.h)(A.a.TRENDING_SOON_TOKEN_DETAIL),
          k = Object(E.r)(A.a.TRENDING_SOON_TOKEN_DETAIL),
          C = Object(a.useState)(),
          _ = Object(s.a)(C, 2),
          T = _[0],
          N = _[1],
          P = Object(a.useState)(!1),
          W = Object(s.a)(P, 2),
          J = W[0],
          ee = W[1],
          te = () => {
            k(), N(void 0)
          },
          ne = Object(a.useState)(F.TrueSightTimeframe.ONE_DAY),
          re = Object(s.a)(ne, 2),
          se = re[0],
          oe = re[1],
          ie = Object(a.useState)(F.TrueSightChartCategory.TRADING_VOLUME),
          ae = Object(s.a)(ie, 2),
          ce = ae[0],
          de = ae[1],
          le = Object(a.useMemo)(() => {
            var e
            return T && null !== (e = T.platforms.keys().next().value) && void 0 !== e ? e : void 0
          }, [T]),
          ue = Object(a.useMemo)(() => (T && le ? T.platforms.get(le) : void 0), [T, le]),
          be = Object(H.a)(le, ue, se),
          pe = be.data,
          je = be.isLoading,
          me = (function () {
            for (
              var e = Object(a.useRef)(null),
                t = Object(a.useState)(!1),
                n = Object(s.a)(t, 2),
                r = n[0],
                o = n[1],
                i = arguments.length,
                c = new Array(i),
                d = 0;
              d < i;
              d++
            )
              c[d] = arguments[d]
            return (
              Object(R.a)(() => {
                var t,
                  n = null === e || void 0 === e ? void 0 : e.current
                if (n && !r) {
                  var s = n.scrollLeft
                  t = setInterval(() => {
                    var e = null !== n && void 0 !== n ? n : {},
                      t = e.scrollLeft,
                      i = e.clientWidth,
                      a = e.scrollWidth
                    if (n && t + i < a - 1) {
                      if (Math.abs(s - t) >= 30) return void o(!0)
                      r || (n.scrollTo({ left: t + 1 }), (s = t))
                    } else o(!0)
                  }, 50)
                }
                return () => {
                  t && clearInterval(t)
                }
              }, [...c, r]),
              e
            )
          })(r),
          xe = Object(V.i)().trendingSoonShowed,
          he = Object(l.d)()
        Object(a.useEffect)(() => {
          var e
          return (
            xe ||
              (e = setTimeout(() => {
                he(Object(q.i)())
              }, 1e3)),
            () => {
              e && clearTimeout(e)
            }
          )
        }, [he, xe])
        var Oe = Object(Y.d)(),
          fe = Object(s.a)(Oe, 1)[0]
        return p
          ? v
            ? Object(L.jsx)(b.a, { height: '61px' })
            : Object(L.jsx)(b.a, { height: '83px' })
          : y && 0 !== r.length
          ? v
            ? Object(L.jsxs)(L.Fragment, {
                children: [
                  Object(L.jsx)(f.a, {
                    isOpen: w,
                    onDismiss: te,
                    maxWidth: '728px',
                    children:
                      T &&
                      Object(L.jsx)(U.c, {
                        tokenData: T,
                        chartData: pe,
                        isChartDataLoading: je,
                        chartCategory: ce,
                        setChartCategory: de,
                        chartTimeframe: se,
                        setChartTimeframe: oe,
                        setFilter: void 0,
                        style: { width: '728px', height: '570px', padding: '20px' },
                      }),
                  }),
                  Object(L.jsx)(m, {
                    $isAnimate: !xe,
                    children: Object(L.jsx)(Z, {
                      children: Object(L.jsxs)(X, {
                        children: [
                          Object(L.jsxs)(b.b, {
                            alignItems: 'center',
                            style: { gap: '8px', minWidth: 'fit-content' },
                            children: [
                              Object(L.jsx)(b.e, {
                                color: e.subText,
                                fontWeight: 500,
                                fontSize: '14px',
                                children: Object(L.jsx)(o.b, { id: 'Trending Soon' }),
                              }),
                              Object(L.jsx)(O.a, { color: e.subText }),
                            ],
                          }),
                          Object(L.jsx)(b.b, {
                            ref: me,
                            alignItems: 'center',
                            ml: '12px',
                            backgroundColor: e.buttonBlack,
                            overflow: 'auto',
                            style: { borderRadius: '40px', paddingLeft: '8px', flex: 1 },
                            children: r.map((e, t) =>
                              Object(L.jsxs)(
                                c.a.Fragment,
                                {
                                  children: [
                                    Object(L.jsx)(D, { tokenData: e, setSelectedToken: N }),
                                    t !== r.length - 1 &&
                                      Object(L.jsx)('div', {
                                        style: { height: '16px', width: '0px', borderRight: '1px solid #40505A' },
                                      }),
                                  ],
                                },
                                e.token_id,
                              ),
                            ),
                          }),
                          Object(L.jsx)(K.d, {
                            href: window.location.origin + '/discover?tab=trending_soon',
                            onClickCapture: () => t(I.a.DISCOVER_SWAP_DISCOVER_MORE_CLICKED),
                            children: Object(L.jsxs)(x.h, {
                              minWidth: 'fit-content',
                              width: 'fit-content',
                              height: '100%',
                              padding: '6px 12px',
                              borderRadius: '20px',
                              margin: '0 0 0 12px',
                              style: { fontSize: '14px', whiteSpace: 'nowrap', position: 'relative' },
                              children: [
                                Object(L.jsx)(o.b, { id: 'Discover more' }),
                                fe && Object(L.jsx)($, { src: j }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              })
            : Object(L.jsxs)(L.Fragment, {
                children: [
                  Object(L.jsx)(f.a, {
                    isOpen: w,
                    onDismiss: te,
                    children:
                      T &&
                      Object(L.jsx)(b.a, {
                        width: '100%',
                        children: Object(L.jsx)(z.d, {
                          isSelected: !0,
                          tokenIndex: void 0,
                          tokenData: T,
                          onSelect: void 0,
                          setIsOpenChartModal: ee,
                          setFilter: void 0,
                          isShowMedal: !1,
                        }),
                      }),
                  }),
                  Object(L.jsx)(B.a, {
                    isOpen: J,
                    setIsOpen: ee,
                    chartData: pe,
                    isLoading: je,
                    chartCategory: ce,
                    setChartCategory: de,
                    chartTimeframe: se,
                    setChartTimeframe: oe,
                  }),
                  Object(L.jsx)(m, {
                    children: Object(L.jsxs)(Q, {
                      children: [
                        Object(L.jsxs)(b.b, {
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          children: [
                            Object(L.jsxs)(b.e, {
                              color: e.subText,
                              fontSize: '14px',
                              fontWeight: 500,
                              style: { display: 'flex', alignItems: 'center', gap: '8px' },
                              children: [
                                Object(L.jsx)(g.a, {
                                  text: i.a._('Powered by TrueSight, our AI prediction model'),
                                  children: Object(L.jsx)(G.e, {
                                    color: e.subText,
                                    children: Object(L.jsx)(o.b, { id: 'Trending Soon' }),
                                  }),
                                }),
                                Object(L.jsx)(O.a, { color: e.subText }),
                              ],
                            }),
                            Object(L.jsxs)(K.d, {
                              href: window.location.origin + '/discover?tab=trending_soon',
                              target: '_blank',
                              style: {
                                fontSize: '12px',
                                marginTop: '4px',
                                fontWeight: 500,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                              },
                              children: [
                                Object(L.jsx)(o.b, { id: 'Discover more' }),
                                Object(L.jsx)(d.a, { color: e.primary, size: 16 }),
                              ],
                            }),
                          ],
                        }),
                        Object(L.jsx)(b.b, {
                          marginTop: '12px',
                          marginBottom: '20px',
                          style: { gap: '12px' },
                          children: Object(L.jsx)(b.b, {
                            ref: me,
                            alignItems: 'center',
                            style: { overflow: 'auto', background: e.buttonBlack, borderRadius: '999px' },
                            children: r.map((e, t) =>
                              Object(L.jsxs)(
                                c.a.Fragment,
                                {
                                  children: [
                                    Object(L.jsx)(D, { tokenData: e, setSelectedToken: N }),
                                    t !== r.length - 1 &&
                                      Object(L.jsx)('div', {
                                        style: { height: '16px', width: '0px', borderRight: '1px solid #40505A' },
                                      }),
                                  ],
                                },
                                e.token_id,
                              ),
                            ),
                          }),
                        }),
                        Object(L.jsx)(h.a, {}),
                      ],
                    }),
                  }),
                ],
              })
          : null
      }
    },
    './src/components/TopTrendingSoonTokensInCurrentNetwork/useTopTrendingSoonTokensInCurrentNetwork.ts': function (
      e,
      t,
      n,
    ) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      })
      var r = n('./node_modules/react/index.js'),
        s = n('./src/constants/index.ts'),
        o = n('./src/hooks/index.ts'),
        i = n('./src/pages/TrueSight/index.tsx'),
        a = n('./src/pages/TrueSight/hooks/useGetTrendingSoonData.ts')
      function c() {
        var e = Object(o.b)().chainId,
          t = Object(r.useMemo)(
            () => ({
              selectedNetwork: e,
              timeframe: i.TrueSightTimeframe.ONE_DAY,
              selectedTag: void 0,
              selectedTokenData: void 0,
              isShowTrueSightOnly: !1,
            }),
            [e],
          ),
          n = Object(a.a)(t, s.cb),
          c = n.data,
          d = n.isLoading,
          l = Object(r.useMemo)(() => {
            var e
            if (d) return []
            var t = null !== (e = null === c || void 0 === c ? void 0 : c.tokens) && void 0 !== e ? e : []
            return (t = t.slice(0, 5))
          }, [d, c])
        return Object(r.useMemo)(() => ({ data: l, isLoading: d }), [d, l])
      }
    },
    './src/components/TrendingSoonTokenBanner/index.tsx': function (e, t, n) {
      'use strict'
      var r = n('./node_modules/@lingui/react/esm/index.js'),
        s = n('./node_modules/@kyberswap/ks-sdk-core/dist/index.js'),
        o = n('./node_modules/polished/dist/polished.esm.js'),
        i = n('./node_modules/react/index.js'),
        a = n('./node_modules/rebass/dist/index.esm.js'),
        c = n('./node_modules/styled-components/dist/styled-components.browser.esm.js'),
        d = n('./src/components/CurrencyLogo/index.tsx'),
        l = n('./src/components/Icons/DiscoverIcon.tsx'),
        u = n('./src/hooks/index.ts'),
        b = n('./src/hooks/useMixpanel.ts'),
        p = n('./src/hooks/useTheme.ts'),
        j = n('./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js'),
        m = n('./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js'),
        x = n('./node_modules/swr/dist/index.esm.js'),
        h = n('./src/constants/env.ts'),
        O = n('./src/constants/index.ts')
      function f(e) {
        var t = Object(x.a)(
          e &&
            ''
              .concat(h.TRUESIGHT_API, '/api/v1/trending-soon?timeframe=24h&page_number=0&page_size=')
              .concat(O.cb, '&search_token_address=')
              .concat(e.address),
          (function () {
            var e = Object(m.a)(
              Object(j.a)().mark(function e(t) {
                var n, r, s, o, i
                return Object(j.a)().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), (e.next = 3), Promise.all([fetch(t)])
                        case 3:
                          ;(n = e.sent), (r = 0)
                        case 5:
                          if (!(r < n.length)) {
                            e.next = 17
                            break
                          }
                          if (!(s = n[r]).ok) {
                            e.next = 14
                            break
                          }
                          return (e.next = 10), s.json()
                        case 10:
                          if (((o = e.sent), !(i = o.data).tokens.length)) {
                            e.next = 14
                            break
                          }
                          return e.abrupt('return', i.tokens[0].token_id)
                        case 14:
                          r++, (e.next = 5)
                          break
                        case 17:
                          e.next = 22
                          break
                        case 19:
                          throw ((e.prev = 19), (e.t0 = e.catch(0)), e.t0)
                        case 22:
                          return e.abrupt('return', void 0)
                        case 23:
                        case 'end':
                          return e.stop()
                      }
                  },
                  e,
                  null,
                  [[0, 19]],
                )
              }),
            )
            return function (t) {
              return e.apply(this, arguments)
            }
          })(),
        )
        return t.data
      }
      var g = n('./src/theme/index.tsx'),
        v = Object(c.keyframes)(['0%{opacity:0;}100%{opacity:1;}']),
        y = n('./node_modules/react/jsx-runtime.js'),
        w = e => {
          var t = e.currencyIn,
            n = e.currencyOut,
            o = e.style,
            c = Object(u.b)().chainId,
            j = Object(p.a)(),
            m = Object(b.c)().mixpanelHandler,
            x = null === t || void 0 === t ? void 0 : t.wrapped,
            h = null === n || void 0 === n ? void 0 : n.wrapped,
            O = f(x),
            v = f(h),
            w = Object(i.useMemo)(() => (O ? t : v ? n : void 0), [t, n, O, v])
          if (void 0 === w) return null
          var T = w instanceof s.Token ? w.symbol : s.WETH[c].name
          return Object(y.jsxs)(k, {
            style: o,
            children: [
              Object(y.jsx)(C, { children: Object(y.jsx)(l.a, { size: 16, color: j.primary }) }),
              Object(y.jsxs)(a.b, {
                alignItems: 'center',
                children: [
                  Object(y.jsx)(d.a, { currency: w, size: '16px', style: { marginRight: '4px' } }),
                  Object(y.jsxs)(_, {
                    children: [
                      T,
                      ' ',
                      Object(y.jsx)(r.b, { id: 'could be trending very soon!' }),
                      ' ',
                      Object(y.jsx)(r.b, { id: 'View' }),
                      ' ',
                      Object(y.jsx)(g.d, {
                        href:
                          window.location.origin +
                          '/discover?tab=trending_soon&token_id=' +
                          (null !== O && void 0 !== O ? O : v),
                        target: '_blank',
                        onClickCapture: () => {
                          m(b.a.DISCOVER_SWAP_SEE_HERE_CLICKED, { trending_token: T })
                        },
                        children: Object(y.jsx)(r.b, { id: 'here' }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        },
        k = c.default.div.withConfig({ displayName: 'TrendingSoonTokenBanner__Container', componentId: 'sc-4n9hwk-0' })(
          [
            'background:',
            ';border-radius:999px;padding:8px 16px;display:grid;grid-template-columns:auto 1fr;row-gap:4px;column-gap:8px;animation:',
            ' 0.3s linear;',
          ],
          e => {
            var t = e.theme
            return Object(o.d)(t.primary, 0.25)
          },
          v,
        ),
        C = c.default.div.withConfig({
          displayName: 'TrendingSoonTokenBanner__DiscoverIconWrapper',
          componentId: 'sc-4n9hwk-1',
        })(['place-self:center;']),
        _ = c.default.div.withConfig({
          displayName: 'TrendingSoonTokenBanner__BannerText',
          componentId: 'sc-4n9hwk-2',
        })(['font-size:12px;'])
      t.a = Object(i.memo)(w)
    },
    './src/components/Tutorial/TutorialSwap/index.tsx': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return K
      })
      var r,
        s = n('./node_modules/@babel/runtime/helpers/esm/objectSpread2.js'),
        o = n('./node_modules/@babel/runtime/helpers/esm/slicedToArray.js'),
        i = n('./node_modules/@lingui/react/esm/index.js'),
        a = n('./node_modules/react/index.js'),
        c = n('./node_modules/react-device-detect/main.js'),
        d = n('./node_modules/react-feather/dist/icons/chevron-up.js'),
        l = n('./node_modules/rebass/dist/index.esm.js'),
        u = n('./node_modules/styled-components/dist/styled-components.browser.esm.js'),
        b = n('./node_modules/walktour/dist/index.js'),
        p = n('./src/assets/images/tutorial_swap/welcome.png'),
        j = n('./src/components/Button/index.tsx'),
        m = n('./src/components/Tutorial/index.tsx'),
        x = n('./src/constants/wallets.ts'),
        h = n('./src/hooks/index.ts'),
        O = n('./src/hooks/useMixpanel.ts'),
        f = n('./src/state/tutorial/hooks.ts'),
        g = n('./src/state/user/hooks.tsx'),
        v = n('./src/theme/index.tsx'),
        y = n('./src/utils/index.ts'),
        w = ['title', 'titleId']
      function k() {
        return (
          (k = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t]
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
              }),
          k.apply(this, arguments)
        )
      }
      function C(e, t) {
        if (null == e) return {}
        var n,
          r,
          s = (function (e, t) {
            if (null == e) return {}
            var n,
              r,
              s = {},
              o = Object.keys(e)
            for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (s[n] = e[n])
            return s
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e)
          for (r = 0; r < o.length; r++)
            (n = o[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]))
        }
        return s
      }
      function _(e, t) {
        var n = e.title,
          s = e.titleId,
          o = C(e, w)
        return a.createElement(
          'svg',
          k(
            {
              width: 24,
              height: 24,
              viewBox: '0 0 24 24',
              fill: 'none',
              xmlns: 'http://www.w3.org/2000/svg',
              ref: t,
              'aria-labelledby': s,
            },
            o,
          ),
          n ? a.createElement('title', { id: s }, n) : null,
          r ||
            (r = a.createElement('path', {
              d: 'M8.79006 9.24V5.5C8.79006 4.12 9.91006 3 11.2901 3C12.6701 3 13.7901 4.12 13.7901 5.5V9.24C15.0001 8.43 15.7901 7.06 15.7901 5.5C15.7901 3.01 13.7801 1 11.2901 1C8.80006 1 6.79006 3.01 6.79006 5.5C6.79006 7.06 7.58006 8.43 8.79006 9.24ZM14.2901 11.71C14.0101 11.57 13.7101 11.5 13.4001 11.5H12.7901V5.5C12.7901 4.67 12.1201 4 11.2901 4C10.4601 4 9.79006 4.67 9.79006 5.5V16.24L6.35006 15.52C5.98006 15.44 5.59006 15.56 5.32006 15.83C4.89006 16.27 4.89006 16.97 5.32006 17.41L9.33006 21.42C9.71006 21.79 10.2201 22 10.7501 22H16.8501C17.8501 22 18.6901 21.27 18.8301 20.28L19.4601 15.81C19.5801 14.96 19.1401 14.12 18.3701 13.74L14.2901 11.71Z',
              fill: '#A9A9A9',
            })),
        )
      }
      var T = a.forwardRef(_),
        I = (n.p, n('./node_modules/react/jsx-runtime.js')),
        S = Object(u.keyframes)(['from{transform:translateY(25px)}to{transform:translateY(0px);}']),
        A = Object(u.default)(T).withConfig({
          displayName: 'CustomMask__TouchIconWrapper',
          componentId: 'sc-1ekx3a-0',
        })(
          [
            'position:absolute;animation-fill-mode:forwards;animation:',
            ' 3s;bottom:-10px;left:0;right:0;margin:auto;path{stroke:',
            ';fill:',
            ';}',
          ],
          S,
          e => e.theme.text,
          e => e.theme.text,
        ),
        E = u.default.div.withConfig({ displayName: 'CustomMask__SpotLight', componentId: 'sc-1ekx3a-1' })(
          ['position:absolute;animation:', ' 2s infinite alternate;border-radius:30px;transition:0.3s;'],
          e =>
            ((e, t, n) =>
              Object(u.keyframes)(
                ['  0%{box-shadow:', '}100%{box-shadow:', '}'],
                [
                  '0px 0px 4px 2px rgba(0,0,0,0.45) inset',
                  n && '0 0 4px 1px '.concat(e.primary),
                  '0px 0px 0px '.concat(t, 'px rgba(0,0,0,0.45)'),
                ]
                  .filter(Boolean)
                  .join(', '),
                [
                  '0px 0px 4px 2px rgba(0,0,0,0.45) inset',
                  n && '0 0 8px 2px '.concat(e.primary),
                  '0px 0px 0px '.concat(t, 'px rgba(0,0,0,0.45)'),
                ]
                  .filter(Boolean)
                  .join(', '),
              ))(e.theme, e.blurWidth, e.hasSpotlight),
        )
      var N = function (e) {
          var t = e.options,
            n = e.stepInfo || {},
            r = n.hasPointer,
            s = n.spotlightInteraction,
            o = n.selector,
            i = n.stopPropagationMouseDown,
            a = t.targetInfo,
            c = t.padding,
            d = void 0 === c ? 0 : c,
            l = t.tourRoot,
            u = t.disableMaskInteraction,
            b = document.body.scrollHeight,
            p = l.scrollWidth,
            j = a || { coords: { x: 0, y: 0 }, dims: { width: 0, height: 0 } },
            m = j.coords,
            x = j.dims,
            h = x.width + 2 * d,
            O = x.height + 2 * d
          return Object(I.jsx)('div', {
            id: 'customMaskWalkTour',
            style: {
              position: 'absolute',
              left: 0,
              top: 0,
              width: window.innerWidth,
              height: window.innerHeight,
              pointerEvents: u ? 'auto' : 'none',
            },
            onMouseDown: e => i && e.stopPropagation(),
            children: Object(I.jsx)(E, {
              onClick: () => {
                if (s) {
                  var e = document.querySelector(o)
                  null === e || void 0 === e || e.click()
                }
              },
              hasSpotlight: !!a,
              blurWidth: Math.max(p, b),
              style: {
                left: (m.x || window.innerWidth / 2) - d,
                top: (m.y || window.innerHeight / 2) - d,
                width: h,
                height: O,
                padding: d,
                cursor: s ? 'pointer' : 'unset',
              },
              children: r && Object(I.jsx)(A, {}),
            }),
          })
        },
        L = n('./node_modules/@lingui/core/esm/index.js'),
        P = n('./node_modules/react-feather/dist/icons/x.js'),
        D = n('./src/hooks/useTheme.ts'),
        M = u.default.div.withConfig({ displayName: 'CustomPopup__PopupWrapper', componentId: 'sc-1ucht7k-0' })(
          ['background-color:', ';padding:20px;border-radius:20px;position:relative;', ';'],
          e => e.theme.tableHeader,
          e =>
            e.center &&
            Object(u.css)([
              'width:500px;position:fixed;left:0;right:0;margin:auto;top:50%;transform:translateY(-50%);',
            ]),
        ),
        R = 16,
        W = ''.concat(R, 'px solid transparent'),
        F = e => {
          var t,
            n,
            r = e.color,
            o = e.tooltipPosition,
            i = e.target,
            c = Object(a.useMemo)(() => document.querySelector(i), [i])
          if (null === o || void 0 === o || !o.orientation) return null
          var d,
            l,
            u = o.orientation,
            p = 'top',
            j = {},
            m =
              null !== (t = ((null === c || void 0 === c ? void 0 : c.clientHeight) || 0) / 2) && void 0 !== t ? t : 15,
            x = null !== (n = ((null === c || void 0 === c ? void 0 : c.clientWidth) || 0) / 2) && void 0 !== n ? n : 15
          switch (u) {
            case b.a.SOUTH:
              ;(j = { display: 'flex', justifyContent: 'center', top: -16, left: 0, right: 0 }), (p = 'top')
              break
            case b.a.SOUTHEAST:
              ;(j = { right: x, top: -16 }), (p = 'top')
              break
            case b.a.SOUTHWEST:
              ;(j = { top: -16, left: x }), (p = 'top')
              break
            case b.a.EAST:
              ;(j = { left: -16, top: 0, bottom: 0, display: 'flex', alignItems: 'center' }), (p = 'left')
              break
            case b.a.EASTNORTH:
              ;(j = { left: -16, top: m }), (p = 'left')
              break
            case b.a.EASTSOUTH:
              ;(j = { left: -16, bottom: m }), (p = 'left')
              break
            case b.a.WESTNORTH:
              ;(j = { right: -16, top: m }), (p = 'right')
              break
            case b.a.WEST:
              ;(j = { right: -16, top: 0, bottom: 0, display: 'flex', alignItems: 'center' }), (p = 'right')
              break
            case b.a.WESTSOUTH:
              ;(j = { right: -16, bottom: m }), (p = 'right')
              break
            case b.a.NORTHWEST:
              ;(j = { bottom: -16, left: x }), (p = 'bottom')
              break
            case b.a.NORTH:
              ;(j = { display: 'flex', justifyContent: 'center', bottom: -16, left: 0, right: 0 }), (p = 'bottom')
              break
            case b.a.NORTHEAST:
              ;(j = { bottom: -16, right: x }), (p = 'bottom')
              break
            case b.a.CENTER:
              return null
          }
          return Object(I.jsx)('div', {
            style: Object(s.a)({ position: 'absolute' }, j),
            children: Object(I.jsx)('div', {
              style: Object(s.a)(
                { width: 0, height: 0 },
                ((d = ''.concat(R, 'px solid ').concat(r)),
                (l = p),
                {
                  left: { borderTop: W, borderRight: d, borderBottom: W },
                  right: { borderBottom: W, borderLeft: d, borderTop: W },
                  top: { borderLeft: W, borderBottom: d, borderRight: W },
                  bottom: { borderLeft: W, borderTop: d, borderRight: W },
                }[l] || {}),
              ),
            }),
          })
        },
        B = e => {
          var t = e.stepNumber,
            n = e.totalStep,
            r = Object(D.a)()
          return Object(I.jsx)(K, {
            style: { display: 'flex', alignItems: 'flex-end' },
            children: Object(I.jsx)(i.b, {
              id: '<0>Step: {stepNumber}/</0><1>{totalStep}</1>',
              values: { stepNumber: t, totalStep: n },
              components: {
                0: Object(I.jsx)('span', {}),
                1: Object(I.jsx)('span', { style: { color: r.subText, fontSize: '0.85em' } }),
              },
            }),
          })
        }
      function U(e) {
        var t = e || {},
          n = t.stepContent,
          r = t.stepIndex,
          s = t.next,
          o = t.prev,
          a = t.close,
          c = t.allSteps,
          d = void 0 === c ? [] : c,
          u = Object(D.a)(),
          b = n,
          p = b.customFooterRenderer,
          m = b.customTitleRenderer,
          x = b.popupStyle,
          h = b.center,
          O = void 0 !== h && h,
          f = b.stopPropagationMouseDown,
          g = b.lastStep,
          v = b.stepNumber,
          y = void 0 === v ? 1 : v,
          w = d.reduce((e, t) => {
            var n
            return Math.max(e, null !== (n = t.stepNumber) && void 0 !== n ? n : y)
          }, 0)
        return Object(I.jsxs)(M, {
          center: O,
          style: x || { width: 400 },
          onMouseDown: e => {
            var t = e.target
            f && !t.classList.contains('action-walktour') && e.stopPropagation()
          },
          children: [
            Object(I.jsx)(F, {
              target: n.selector,
              tooltipPosition: (null === e || void 0 === e ? void 0 : e.tooltipPosition) || {},
              color: u.tableHeader,
            }),
            Object(I.jsxs)(l.b, {
              justifyContent: 'space-between',
              children: [
                m ? m() : Object(I.jsx)(B, { stepNumber: y, totalStep: w }),
                Object(I.jsx)('span', { children: Object(I.jsx)(P.a, { cursor: 'pointer', onClick: () => a() }) }),
              ],
            }),
            Object(I.jsx)('div', { children: n.description }),
            p
              ? p(e)
              : Object(I.jsxs)(l.b, {
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  marginTop: 20,
                  children: [
                    r > 0 &&
                      Object(I.jsx)(l.e, {
                        className: 'action-walktour',
                        onClick: () => o(),
                        style: { cursor: 'pointer', color: u.primary, marginRight: 30, fontSize: 14 },
                        children: Object(I.jsx)(i.b, { id: 'Back' }),
                      }),
                    Object(I.jsx)(j.j, {
                      className: 'action-walktour',
                      onClick: () => s(),
                      style: { width: 72, height: 36 },
                      children: g ? L.a._('Done') : L.a._('Next'),
                    }),
                  ],
                }),
          ],
        })
      }
      var z = n('./src/components/Collapse.tsx'),
        H = n('./src/constants/styles.ts'),
        G = u.default.div.withConfig({ displayName: 'TutorialMobile__Wrapper', componentId: 'sc-1filxyq-0' })(
          ['top:0;left:0;height:100%;width:100%;z-index:', ';position:fixed;background:', ';'],
          H.a.MODAL,
          e => e.theme.buttonGray,
        )
      function q(e) {
        var t = e.stopTutorial,
          n = e.steps,
          r = Object(D.a)()
        return Object(I.jsx)(G, {
          children: Object(I.jsxs)(l.b, {
            flexDirection: 'column',
            alignItems: 'center',
            style: { overflowY: 'scroll', height: '100%', width: '100%' },
            children: [
              Object(I.jsxs)('div', {
                style: { padding: 16, marginBottom: 3, width: '100%' },
                children: [
                  Object(I.jsxs)(l.b, {
                    justifyContent: 'space-between',
                    marginBottom: '10px',
                    children: [
                      Object(I.jsx)(l.e, {
                        fontSize: 16,
                        fontWeight: 500,
                        color: r.text,
                        children: Object(I.jsx)(i.b, { id: 'Welcome to PunkSwap!' }),
                      }),
                      Object(I.jsx)(P.a, { color: r.subText, size: 24, onClick: t }),
                    ],
                  }),
                  Object(I.jsx)(l.e, {
                    fontSize: 12,
                    color: r.subText,
                    children: Object(I.jsx)(i.b, {
                      id: '{0} easy ways to get started with PunkSwap',
                      values: { 0: n.length },
                    }),
                  }),
                ],
              }),
              Object(I.jsx)('div', {
                style: { width: '100%' },
                children: Object(I.jsx)(z.b, {
                  data: n,
                  itemStyle: { background: r.buttonGray, padding: '16px' },
                  itemActiveStyle: { background: r.background },
                }),
              }),
            ],
          }),
        })
      }
      var V = n('./src/components/Tutorial/TutorialSwap/constant.ts'),
        Y = window.innerWidth < 1200,
        K = u.default.h5.withConfig({ displayName: 'TutorialSwap__Heading', componentId: 'sc-1i371ou-0' })(
          ['color:', ';user-select:none;margin:5px 0px 10px 0px;display:flex;align-items:center;font-size:16px;'],
          e => e.theme.text,
        ),
        $ = u.default.div.withConfig({ displayName: 'TutorialSwap__LayoutWrapper', componentId: 'sc-1i371ou-1' })(
          ['color:', ';text-align:left;font-size:14px;'],
          e => e.theme.subText,
        ),
        Z = e => {
          var t = e.children,
            n = e.title
          return Object(I.jsxs)($, { children: [!Y && n && Object(I.jsx)(K, { children: n }), t] })
        },
        X = u.default.div.withConfig({ displayName: 'TutorialSwap__ArrowWrapper', componentId: 'sc-1i371ou-2' })(
          [
            'width:32px;height:32px;display:flex;justify-content:center;align-items:center;color:',
            ";svg{transition:all 150ms ease-in-out;}&[data-expanded='false']{svg{transform:rotate(180deg);}}",
          ],
          e => e.theme.text,
        ),
        Q = u.default.div.withConfig({ displayName: 'TutorialSwap__NetworkItemWrapper', componentId: 'sc-1i371ou-3' })(
          ['background:', ';border-radius:42px;display:flex;padding:10px 15px;gap:10px;cursor:pointer;'],
          e => e.theme.buttonBlack,
        ),
        J = u.default.div.withConfig({ displayName: 'TutorialSwap__NetworkWrapper', componentId: 'sc-1i371ou-4' })(
          ['background:', ';border-radius:20px;padding:15px;gap:10px;display:flex;flex-direction:column;'],
          e => e.theme.background,
        ),
        ee = e => {
          var t = e.imageName,
            r = e.marginTop,
            s = void 0 !== r && r
          return Y
            ? Object(I.jsx)(l.b, {
                justifyContent: 'center',
                children: Object(I.jsx)('img', {
                  style: { marginTop: s ? 20 : 0, width: '100%', maxWidth: 800 },
                  src: n('./src/assets/images/tutorial_swap sync recursive ^\\.\\/.*$')('./'.concat(t)).default,
                  alt: t,
                }),
              })
            : null
        },
        te = u.default.p.withConfig({ displayName: 'TutorialSwap__Desc', componentId: 'sc-1i371ou-5' })([
          'line-height:20px;',
        ]),
        ne = u.default.span.withConfig({ displayName: 'TutorialSwap__HighlightText', componentId: 'sc-1i371ou-6' })(
          ['color:', ';'],
          e => e.theme.text,
        )
      function re() {
        return Object(I.jsxs)(Z, {
          children: [
            Object(I.jsx)('img', {
              src: p.default,
              alt: 'welcome to PunkSwap',
              style: { maxWidth: '100%', marginTop: 10 },
            }),
            Object(I.jsx)(te, {
              children: Object(I.jsx)(i.b, {
                id: 'PunkSwap is a decentralized exchange (DEX) aggregator. We provide our traders with the <0>best token prices</0> by analyzing rates across thousands of exchanges instantly!',
                components: { 0: Object(I.jsx)(ne, {}) },
              }),
            }),
            Object(I.jsx)(te, {
              children: Object(I.jsx)(i.b, {
                id: 'PunkSwap is also an automated market maker (AMM) with industry-leading liquidity protocols and <0>concentrated liquidity</0>. Liquidity providers can add liquidity to our pools & <1>earn fees</1>!',
                components: { 0: Object(I.jsx)(ne, {}), 1: Object(I.jsx)(ne, {}) },
              }),
            }),
            Object(I.jsx)(te, {
              children: Object(I.jsx)(i.b, {
                id: "We created this <0>quick tutorial</0> guide for you to highlight PunkSwap's main features.",
                components: { 0: Object(I.jsx)(ne, {}) },
              }),
            }),
            Object(I.jsx)(te, { children: Object(I.jsx)(i.b, { id: 'Do you wish to have a look?' }) }),
          ],
        })
      }
      function se() {
        var e = Object(a.useState)(!1),
          t = Object(o.a)(e, 2),
          n = t[0],
          r = t[1],
          s = () => r(!n),
          l = Object(g.f)()
        return Object(I.jsxs)(Z, {
          title: V.a.CONNECT_WALLET,
          children: [
            Object(I.jsx)(te, {
              children: Object(I.jsx)(i.b, {
                id: 'Choose your preferred wallet, connect it, and get started with PunkSwap!',
              }),
            }),
            Object(I.jsx)(ee, { imageName: 'step1.png' }),
            Object(I.jsxs)(c.BrowserView, {
              children: [
                Object(I.jsxs)(K, {
                  onClick: s,
                  style: { cursor: 'pointer' },
                  children: [
                    Object(I.jsx)(i.b, { id: 'Download Wallet' }),
                    Object(I.jsx)(X, { 'data-expanded': n, children: Object(I.jsx)(d.a, { size: 15, onClick: s }) }),
                  ],
                }),
                n &&
                  Object(I.jsx)(J, {
                    children: Object.values(x.a)
                      .filter(e => e.installLink)
                      .map(e =>
                        Object(I.jsxs)(
                          Q,
                          {
                            onClick: () => window.open(e.installLink),
                            children: [
                              Object(I.jsx)('img', {
                                src: l ? e.icon : e.iconLight,
                                alt: e.name,
                                width: '20',
                                height: '20',
                              }),
                              Object(I.jsx)('span', { children: e.name }),
                            ],
                          },
                          e.name,
                        ),
                      ),
                  }),
              ],
            }),
          ],
        })
      }
      var oe = u.default.div.withConfig({ displayName: 'TutorialSwap__TouchAbleVideo', componentId: 'sc-1i371ou-7' })([
        'position:absolute;top:0;left:0;cursor:pointer;width:100%;height:100%;',
      ])
      function ie(e) {
        var t = e.videoStyle,
          n = void 0 === t ? {} : t,
          r = Object(O.c)().mixpanelHandler,
          s = Object(a.useState)(!1),
          c = Object(o.a)(s, 2),
          d = c[0],
          l = c[1],
          u = Object(a.useRef)(null)
        return Object(I.jsxs)(Z, {
          title: V.a.START_TRADING,
          children: [
            Object(I.jsx)(te, {
              children: Object(I.jsx)(i.b, {
                id: 'Select from over thousands of tokens and start trading. PunkSwap finds you the best prices across multiple exchanges & combines them into one trade!',
              }),
            }),
            Object(I.jsxs)('div', {
              style: { position: 'relative' },
              children: [
                Object(I.jsx)('iframe', {
                  ref: u,
                  width: '100%',
                  height: '100%',
                  style: n,
                  src: 'https://www.youtube.com/embed/'.concat(Object(m.c)(m.a.SWAP)),
                  frameBorder: '0',
                  title: 'Tutorial PunkSwap',
                  allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
                  allowFullScreen: !0,
                }),
                !d &&
                  !Y &&
                  Object(I.jsx)(oe, {
                    onClick: () => {
                      var e = u.current
                      e &&
                        (e.setAttribute('src', e.getAttribute('src') + '?autoplay=1'),
                        r(O.a.TUTORIAL_VIEW_VIDEO_SWAP),
                        l(!0))
                    },
                  }),
              ],
            }),
          ],
        })
      }
      var ae = Object(u.createGlobalStyle)(['[id^=walktour-tooltip-container]:focus-visible{outline:none;};']),
        ce = 'showedTutorialSwapGuide'
      t.b = Object(a.memo)(function () {
        var e = Object(f.a)(),
          t = Object(o.a)(e, 2),
          n = t[0],
          r = n.show,
          c = void 0 !== r && r,
          d = n.step,
          u = void 0 === d ? 0 : d,
          p = t[1],
          m = () => p({ show: !1 }),
          x = Object(h.b)(),
          g = x.account,
          w = x.isSolana,
          k = Object(O.c)().mixpanelHandler
        Object(a.useEffect)(() => {
          localStorage.getItem(ce) || (p({ show: !0, step: 0 }), localStorage.setItem(ce, '1'))
        }, [p])
        var C = Object(a.useMemo)(() => {
            var e = ((e, t) => {
              var n = 0,
                r = !e || Y
              return Object(y.f)([
                {
                  customTitleRenderer: () =>
                    Object(I.jsx)(K, {
                      style: { fontSize: 20 },
                      children: Object(I.jsx)(i.b, { id: '{0}', values: { 0: V.a.WELCOME } }),
                    }),
                  customFooterRenderer: e =>
                    Object(I.jsxs)(l.b, {
                      justifyContent: 'space-between',
                      style: { gap: 25, marginTop: 20 },
                      children: [
                        Object(I.jsx)(j.i, {
                          onClick: () => e.close(),
                          children: Object(I.jsx)(i.b, { id: 'Maybe later' }),
                        }),
                        Object(I.jsx)(j.j, {
                          onClick: () => e.next(),
                          children: Object(I.jsx)(i.b, { id: 'Let\u2019s get started' }),
                        }),
                      ],
                    }),
                  stepNumber: n++,
                  description: Object(I.jsx)(re, {}),
                  pcOnly: !0,
                  center: !0,
                  popupStyle: { width: 500 },
                },
                {
                  selector: r ? V.b.BUTTON_CONNECT_WALLET : V.b.BUTTON_ADDRESS_WALLET,
                  title: r ? V.a.CONNECT_WALLET : V.a.YOUR_WALLET,
                  stepNumber: n++,
                  description: Object(I.jsx)(se, {}),
                  orientationPreferences: [b.a.SOUTHEAST, b.a.NORTHWEST],
                },
                {
                  selector: V.b.SELECT_NETWORK,
                  title: V.a.SELECT_NETWORK,
                  stepNumber: n++,
                  description: Object(I.jsxs)(Z, {
                    title: V.a.SELECT_NETWORK,
                    children: [
                      Object(I.jsx)(te, {
                        children: Object(I.jsx)(i.b, {
                          id: 'Choose your preferred network. PunkSwap is a multi chain platform that supports over 12 networks!',
                        }),
                      }),
                      Object(I.jsx)(ee, { imageName: 'step2.png' }),
                    ],
                  }),
                  orientationPreferences: [b.a.SOUTHEAST, b.a.NORTHWEST],
                },
                {
                  selector: V.b.SWAP_FORM,
                  title: V.a.START_TRADING,
                  stepNumber: n++,
                  description: Object(I.jsx)(ie, { videoStyle: { minHeight: Math.min(window.innerHeight / 2, 500) } }),
                  popupStyle: { width: Math.min(0.8 * window.innerWidth, 700) },
                  requiredClickSelector: '#' + V.b.BUTTON_SETTING_SWAP_FORM,
                  selectorHint: '#' + V.b.SWAP_FORM_CONTENT,
                },
                {
                  selector: V.b.BUTTON_SETTING_SWAP_FORM,
                  title: V.a.SETTING,
                  stepNumber: n,
                  maskPadding: 10,
                  description: Object(I.jsxs)(Z, {
                    title: V.a.SETTING,
                    children: [
                      Object(I.jsx)(te, {
                        children: Object(I.jsx)(i.b, {
                          id: 'You can customize advanced settings like slippage and other display settings here.',
                        }),
                      }),
                      Object(I.jsx)(ee, { imageName: 'step4.1.png' }),
                      Object(I.jsx)(ee, { imageName: 'step4.2.png', marginTop: !0 }),
                    ],
                  }),
                  hasPointer: !0,
                  orientationPreferences: [b.a.EAST, b.a.NORTH],
                  spotlightInteraction: !0,
                },
                {
                  selector: V.b.SWAP_FORM,
                  title: V.a.SETTING,
                  stepNumber: n++,
                  requiredClickSelector: '#' + V.b.BUTTON_SETTING_SWAP_FORM,
                  selectorHint: '#' + V.b.TRADING_SETTING_CONTENT,
                  description: Object(I.jsxs)(Z, {
                    title: V.a.SETTING,
                    children: [
                      Object(I.jsx)(te, {
                        children: Object(I.jsx)(i.b, {
                          id: 'Adjust the advanced settings for your trades such as the max slippage.',
                        }),
                      }),
                      Object(I.jsx)(te, {
                        children: Object(I.jsx)(i.b, {
                          id: 'Personalize your trading interface in the display settings',
                        }),
                      }),
                    ],
                  }),
                  pcOnly: !0,
                  callbackEndStep: () => {
                    var e
                    return null === (e = document.getElementById(V.b.BUTTON_SETTING_SWAP_FORM)) || void 0 === e
                      ? void 0
                      : e.click()
                  },
                  orientationPreferences: [b.a.EAST, b.a.NORTH],
                  maskPadding: 10,
                },
                {
                  selector: V.b.BRIDGE_LINKS,
                  title: V.a.BRIDGE,
                  stepNumber: n++,
                  description: Object(I.jsx)(Z, {
                    title: V.a.BRIDGE,
                    children: Object(I.jsx)(te, {
                      children: Object(I.jsx)(i.b, {
                        id: 'You can place limit orders, bridge tokens, or buy crypto with multiple payment options!',
                      }),
                    }),
                  }),
                  orientationPreferences: [b.a.SOUTH],
                  popupStyle: { width: 430 },
                },
                t
                  ? null
                  : {
                      selector: V.b.EARNING_LINKS,
                      title: V.a.EARN,
                      stepNumber: n++,
                      description: Object(I.jsxs)(Z, {
                        title: V.a.EARN,
                        children: [
                          Object(I.jsx)(te, {
                            children: Object(I.jsx)(i.b, {
                              id: 'Add liquidity into our Pools to earn trading fees & participate in our Farms to earn additional rewards!',
                            }),
                          }),
                          Object(I.jsx)(ee, { imageName: 'step5.png' }),
                        ],
                      }),
                      orientationPreferences: [b.a.SOUTH],
                    },
                {
                  selector: V.b.CAMPAIGN_LINK,
                  title: V.a.CAMPAIGN,
                  stepNumber: n++,
                  description: Object(I.jsxs)(Z, {
                    title: V.a.CAMPAIGN,
                    children: [
                      Object(I.jsx)(te, {
                        children: Object(I.jsx)(i.b, {
                          id: 'Check out our latest trading campaigns and participate in them to earn rewards!',
                        }),
                      }),
                      Object(I.jsx)(ee, { imageName: 'menu.png' }),
                      Object(I.jsx)(ee, { imageName: 'step7.png', marginTop: !0 }),
                    ],
                  }),
                  orientationPreferences: [b.a.SOUTH],
                },
                {
                  selector: V.b.DISCOVER_LINK,
                  title: V.a.DISCOVER,
                  stepNumber: n++,
                  description: Object(I.jsxs)(Z, {
                    title: V.a.DISCOVER,
                    children: [
                      Object(I.jsx)(te, {
                        children: Object(I.jsx)(i.b, {
                          id: 'Discover tokens before they start trending in the future! We analyze thousands of potential tokens & filter out the best ones for you!',
                        }),
                      }),
                      Object(I.jsx)(ee, { imageName: 'menu.png' }),
                      Object(I.jsx)(ee, { imageName: 'step6.png', marginTop: !0 }),
                    ],
                  }),
                  orientationPreferences: [b.a.SOUTH, b.a.SOUTHEAST],
                },
                {
                  selector: V.b.BUTTON_VIEW_GUIDE_SWAP,
                  title: V.a.VIEW_GUIDE,
                  stepNumber: n++,
                  maskPadding: 10,
                  requiredClickSelector: '#' + V.b.BUTTON_MENU_HEADER,
                  stopPropagationMouseDown: !0,
                  lastStep: !0,
                  description: Object(I.jsxs)(Z, {
                    title: V.a.VIEW_GUIDE,
                    children: [
                      Object(I.jsx)(te, {
                        children: Object(I.jsx)(i.b, {
                          id: 'You can repeat these instructions anytime by clicking on the "View" button under Preferences.',
                        }),
                      }),
                      Object(I.jsx)(te, {
                        children: Object(I.jsx)(i.b, {
                          id: 'For a more detailed user guide, <0>click here.</0>',
                          components: {
                            0: Object(I.jsx)(v.d, { href: '#' }),
                          },
                        }),
                      }),
                      Object(I.jsx)(ee, { imageName: 'step8.1.png' }),
                      Object(I.jsx)(ee, { imageName: 'step8.2.png', marginTop: !0 }),
                    ],
                  }),
                },
              ])
            })(!!g, w)
            return Y
              ? e
                  .filter(e => !e.pcOnly)
                  .map((e, t) => {
                    var n = e.title,
                      r = e.description
                    return { title: ''.concat(t + 1, '. ').concat(n), content: r }
                  })
              : e.map(e =>
                  Object(s.a)(Object(s.a)({}, e), {}, { description: e.description, selector: '#' + e.selector }),
                )
          }, [g, w]),
          _ = C[u] || {},
          T = (e, t) => {
            var n = e.allSteps,
              r = e.prev,
              s = e.next,
              o = e.stepIndex,
              i = t ? o + 1 : o - 1,
              a = (e => {
                var t = e.requiredClickSelector,
                  n = e.selectorHint,
                  r = t && !document.querySelector(n || (null === e || void 0 === e ? void 0 : e.selector))
                if (r) {
                  var s = document.querySelector(t)
                  null === s || void 0 === s || s.click()
                }
                return r
              })(n[i]),
              c = _.callbackEndStep
            c && c(),
              setTimeout(
                () => {
                  p({ step: i, stepInfo: n[i] }), t ? s() : r()
                },
                a ? 400 : 0,
              )
          }
        return c
          ? Y
            ? Object(I.jsx)(q, { stopTutorial: m, steps: C })
            : Object(I.jsxs)(I.Fragment, {
                children: [
                  Object(I.jsx)(b.b, {
                    tooltipSeparation: 25,
                    disableMaskInteraction: !0,
                    customTooltipRenderer: e => Object(I.jsx)(U, Object(s.a)({}, e || {})),
                    steps: C,
                    isOpen: c,
                    initialStepIndex: u,
                    customNextFunc: e => {
                      var t = e.stepIndex,
                        n = e.close
                      if (e.allSteps[t].lastStep) return k(O.a.TUTORIAL_CLICK_DONE), m(), void n()
                      T(e, !0)
                    },
                    customPrevFunc: e => {
                      T(e, !1)
                    },
                    customCloseFunc: e => {
                      var t = _.stepNumber
                      k(O.a.TUTORIAL_CLICK_DENY, t), m(), e.close()
                    },
                    renderMask: e => Object(I.jsx)(N, { options: e, stepInfo: _ }),
                  }),
                  Object(I.jsx)(ae, {}),
                ],
              })
          : null
      })
    },
    './src/components/swapv2/GasPriceTrackerPanel.tsx': function (e, t, n) {
      'use strict'
      var r = n('./node_modules/@lingui/core/esm/index.js'),
        s = (n('./node_modules/react/index.js'), n('./node_modules/react-feather/dist/icons/arrow-left.js')),
        o = n('./node_modules/rebass/dist/index.esm.js'),
        i = n('./node_modules/styled-components/dist/styled-components.browser.esm.js'),
        a = n('./src/components/Icons/index.ts'),
        c = n('./src/hooks/useGasPriceFromDeBank.ts'),
        d = n('./node_modules/react/jsx-runtime.js'),
        l = [
          { gasLevel: c.a.SLOW, label: r.a._('Low') },
          { gasLevel: c.a.NORMAL, label: r.a._('Average') },
          { gasLevel: c.a.FAST, label: r.a._('High') },
        ],
        u = Object(i.default)(s.a).withConfig({
          displayName: 'GasPriceTrackerPanel__BackIconWrapper',
          componentId: 'sc-17tigx7-0',
        })(
          ['height:20px;width:20px;margin-right:10px;cursor:pointer;path{stroke:', ' !important;}'],
          e => e.theme.text,
        ),
        b = i.default.span.withConfig({ displayName: 'GasPriceTrackerPanel__BackText', componentId: 'sc-17tigx7-1' })(
          ['font-size:18px;font-weight:500;color:', ';'],
          e => e.theme.text,
        ),
        p = i.default.div.withConfig({
          displayName: 'GasPriceTrackerPanel__GasPriceList',
          componentId: 'sc-17tigx7-2',
        })(
          [
            'display:flex;justify-content:center;align-items:center;padding-top:20px;padding-bottom:20px;border-top:1px solid ',
            ';border-bottom:1px solid ',
            ';',
          ],
          e => e.theme.border,
          e => e.theme.border,
        ),
        j = i.default.div.withConfig({
          displayName: 'GasPriceTrackerPanel__GasPriceItem',
          componentId: 'sc-17tigx7-3',
        })(
          [
            "flex:1 1 33%;display:flex;flex-direction:column;align-items:center;row-gap:8px;&[data-type='",
            "']{color:",
            ";}&[data-type='",
            "']{color:",
            ';border-left:1px solid ',
            ';border-right:1px solid ',
            ";}&[data-type='",
            "']{color:",
            ';}',
          ],
          c.a.SLOW,
          e => e.theme.green,
          c.a.NORMAL,
          e => e.theme.text,
          e => e.theme.border,
          e => e.theme.border,
          c.a.FAST,
          e => e.theme.red,
        ),
        m = i.default.div.withConfig({
          displayName: 'GasPriceTrackerPanel__GasPriceItemTitle',
          componentId: 'sc-17tigx7-4',
        })([
          'display:flex;justify-content:center;align-items:center;column-gap:4px;height:16px;color:inherit;font-size:12px;font-weight:400;line-height:16px;svg{height:100%;width:auto;}span{text-transform:capitalize;}',
        ]),
        x = i.default.div.withConfig({ displayName: 'GasPriceTrackerPanel__PriceInGwei', componentId: 'sc-17tigx7-5' })(
          ['color:inherit;font-size:14px;font-weight:500;line-height:20px;'],
        ),
        h = i.default.div.withConfig({ displayName: 'GasPriceTrackerPanel__PriceInUSD', componentId: 'sc-17tigx7-6' })(
          ['color:', ';font-size:14px;font-weight:500;line-height:20px;'],
          e => e.theme.subText,
        ),
        O = e => (e ? '$'.concat(e) : '-')
      t.a = e => {
        var t = e.className,
          n = e.onBack,
          s = Object(c.b)()
        return s
          ? Object(d.jsx)(o.a, {
              minHeight: '300px',
              width: '100%',
              className: t,
              children: Object(d.jsxs)(o.b, {
                width: '100%',
                flexDirection: 'column',
                sx: { rowGap: '16px' },
                children: [
                  Object(d.jsxs)(o.b, {
                    alignItems: 'center',
                    sx: { marginTop: '5px' },
                    children: [
                      Object(d.jsx)(u, { onClick: n }),
                      Object(d.jsx)(b, { children: r.a._('Gas Price Tracker') }),
                    ],
                  }),
                  Object(d.jsx)(p, {
                    children: l.map(e => {
                      var t,
                        n = e.gasLevel,
                        r = e.label
                      return Object(d.jsxs)(
                        j,
                        {
                          'data-type': n,
                          children: [
                            Object(d.jsxs)(m, {
                              children: [Object(d.jsx)(a.f, {}), Object(d.jsx)('span', { children: r })],
                            }),
                            Object(d.jsx)(x, {
                              children: ((t = s[n].gasPriceInGwei), t ? ''.concat(t, ' gwei') : '-'),
                            }),
                            Object(d.jsx)(h, { children: O(s[n].minimumTxFeeInUSD) }),
                          ],
                        },
                        n,
                      )
                    }),
                  }),
                ],
              }),
            })
          : null
      }
    },
    './src/components/swapv2/LimitOrder/LimitOrderForm.tsx': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return Ne
      })
      var r = n('./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js'),
        s = n('./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js'),
        o = n('./node_modules/@babel/runtime/helpers/esm/objectSpread2.js'),
        i = n('./node_modules/@babel/runtime/helpers/esm/slicedToArray.js'),
        a = n('./node_modules/@lingui/react/esm/index.js'),
        c = n('./node_modules/@lingui/core/esm/index.js'),
        d = n('./node_modules/@kyberswap/ks-sdk-core/dist/index.js'),
        l = n('./node_modules/dayjs/dayjs.min.js'),
        u = n.n(l),
        b = n('./node_modules/ethers/lib.esm/index.js'),
        p = n('./node_modules/jsbi/dist/jsbi-umd.js'),
        j = n.n(p),
        m = n('./node_modules/lodash/lodash.js'),
        x = n('./node_modules/polished/dist/polished.esm.js'),
        h = n('./node_modules/react/index.js'),
        O = n('./node_modules/react-feather/dist/icons/repeat.js'),
        f = n('./node_modules/react-feather/dist/icons/info.js'),
        g = n('./node_modules/rebass/dist/index.esm.js'),
        v = n('./node_modules/styled-components/dist/styled-components.browser.esm.js'),
        y = n('./src/components/Announcement/type.ts'),
        w = n('./src/components/ArrowRotate.tsx'),
        k = n('./src/components/CurrencyInputPanel/index.tsx'),
        C = n('./src/components/CurrencyLogo/index.tsx'),
        _ = n('./src/components/NumericalInput/index.tsx'),
        T = n('./src/components/Row/index.tsx'),
        I = n('./src/components/Select.tsx'),
        S = n('./src/components/Tooltip/index.tsx'),
        A = n('./src/components/Button/index.tsx'),
        E = n('./src/components/ProgressSteps/index.tsx'),
        N = n('./src/hooks/index.ts'),
        L = n('./src/hooks/useApproveCallback.ts'),
        P = n('./src/state/application/hooks.ts'),
        D = n('./node_modules/react/jsx-runtime.js')
      function M(e) {
        var t = e.showWrap,
          n = e.approval,
          r = e.currencyIn,
          s = e.isWrappingEth,
          o = e.wrapInputError,
          i = e.approveCallback,
          d = e.onWrapToken,
          l = e.checkingAllowance,
          u = e.showPreview,
          b = e.isNotFillAllInput,
          p = e.enoughAllowance,
          j = e.hasInputError,
          m = e.approvalSubmitted,
          x = e.showApproveFlow,
          h = e.showWarning,
          O = n === L.a.PENDING || ((n !== L.a.NOT_APPROVED || m || !!j) && p),
          f = l || b || !!j || n !== L.a.APPROVED || s || (t && !s),
          v = Object(N.b)().account,
          y = Object(P.x)()
        if (!v) return Object(D.jsx)(A.h, { onClick: y, children: Object(D.jsx)(a.b, { id: 'Connect Wallet' }) })
        if (x || t)
          return Object(D.jsxs)(D.Fragment, {
            children: [
              Object(D.jsxs)(T.b, {
                children: [
                  t
                    ? Object(D.jsx)(A.l, {
                        loading: s,
                        tooltipMsg: c.a._(
                          'You will need to wrap your {0} to {1} before you can place a limit order. Your tokens will be exchanged 1 to 1.',
                          {
                            0: null === r || void 0 === r ? void 0 : r.symbol,
                            1: null === r || void 0 === r ? void 0 : r.wrapped.symbol,
                          },
                        ),
                        text: s
                          ? c.a._('Wrapping')
                          : c.a._('Wrap {0}', { 0: null === r || void 0 === r ? void 0 : r.symbol }),
                        onClick: d,
                        disabled: Boolean(o) || b || s,
                      })
                    : Object(D.jsx)(A.a, {
                        forceApprove: !p,
                        tokenSymbol: null === r || void 0 === r ? void 0 : r.symbol,
                        tooltipMsg: c.a._(
                          'You need to first allow PunkSwap smart contracts to use your {0}. This has to be done only once for each token.',
                          { 0: null === r || void 0 === r ? void 0 : r.symbol },
                        ),
                        approveCallback: i,
                        disabled: !!O,
                        approval: n,
                      }),
                  Object(D.jsx)(A.e, {
                    width: '48%',
                    id: 'review-order-button',
                    disabled: f,
                    onClick: u,
                    children: Object(D.jsx)(g.e, {
                      fontSize: 16,
                      fontWeight: 500,
                      children: Object(D.jsx)(a.b, { id: 'Review Order' }),
                    }),
                  }),
                ],
              }),
              x && Object(D.jsx)(E.a, { steps: [n === L.a.APPROVED] }),
            ],
          })
        var w = Object(D.jsx)(g.e, {
          fontWeight: 500,
          children: l
            ? Object(D.jsx)(a.b, { id: 'Checking Allowance...' })
            : Object(D.jsx)(a.b, { id: 'Review Order' }),
        })
        return h && !f
          ? Object(D.jsx)(A.k, { onClick: u, children: w })
          : Object(D.jsx)(A.j, { id: 'review-order-button', onClick: u, disabled: f, children: w })
      }
      var R = n('./src/components/InfoHelper/index.tsx'),
        W = n('./src/hooks/useTheme.ts')
      function F(e) {
        var t = e.marketPrice,
          n = e.rateInfo,
          r = Object(h.useMemo)(() => {
            try {
              if (t && n.rate && n.invertRate) {
                var e = n.rate,
                  r = n.invert,
                  s = n.invertRate,
                  o = Number(r ? s : e),
                  i = Number(r ? t.invertRate : t.marketRate),
                  a = ((o - i) / i) * 100
                r && (a = -a)
                var c = Number(a),
                  d = c > 0 ? '+' : ''
                return {
                  percent: a,
                  deltaText: ''.concat(Math.abs(c) > 100 ? '>100' : ''.concat(d).concat(c.toFixed(2)), '%'),
                }
              }
            } catch (l) {
              console.log(l)
            }
            return { percent: void 0, deltaText: '' }
          }, [t, n]),
          s = r.deltaText,
          o = r.percent
        return { rawPercent: o, percent: Math.abs(Number(o)) > 0.009 ? s : '', profit: o && Number(o) > 0 }
      }
      var B = e => {
          var t = e.marketPrice,
            n = e.rateInfo,
            r = e.symbolIn,
            s = Object(W.a)(),
            o = F({ marketPrice: t, rateInfo: n }),
            i = o.percent,
            c = o.profit,
            d = c ? s.apr : s.warning,
            l = Object(D.jsx)(g.e, { as: 'span', color: d, fontWeight: '500', children: i })
          return Object(D.jsxs)(Ne, {
            style: { display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' },
            children: [
              Object(D.jsx)(a.b, { id: 'Sell {symbolIn} at rate', values: { symbolIn: r } }),
              i
                ? Object(D.jsxs)(D.Fragment, {
                    children: [
                      Object(D.jsxs)(g.e, { as: 'span', color: d, children: ['\xa0', i] }),
                      Object(D.jsx)(R.a, {
                        color: d,
                        text: c
                          ? Object(D.jsx)(a.b, {
                              id: 'Your selected price is {styledPercent} better than the current market price.',
                              values: { styledPercent: l },
                            })
                          : Object(D.jsx)(a.b, {
                              id: 'Your selected price is {styledPercent} worse than the current market price.',
                              values: { styledPercent: l },
                            }),
                      }),
                    ],
                  })
                : null,
            ],
          })
        },
        U = n('./src/components/swapv2/LimitOrder/ListOrder/SummaryNotify.tsx'),
        z = n('./src/components/Column/index.tsx'),
        H = n('./src/components/TransactionConfirmationModal/index.tsx'),
        G = n('./src/components/swapv2/LimitOrder/const.ts'),
        q = n('./src/pages/Bridge/ErrorWarning.tsx'),
        V = n('./src/components/swapv2/LimitOrder/helpers.ts'),
        Y = n('./src/components/swapv2/LimitOrder/Modals/styled.tsx'),
        K = { width: 20, height: 20 },
        $ = Object(h.memo)(function (e) {
          var t = e.onSubmit,
            n = e.currencyIn,
            r = e.currencyOut,
            s = e.onDismiss,
            o = e.flowState,
            d = e.outputAmount,
            l = e.inputAmount,
            b = e.expireAt,
            p = e.marketPrice,
            j = e.rateInfo,
            m = e.note,
            x = e.warningMessage,
            O = e.percentDiff,
            f = Object(N.b)().account,
            v = Object(h.useState)(!1),
            y = Object(i.a)(v, 2),
            w = y[0],
            k = y[1],
            _ = O < G.h,
            T = Object(h.useMemo)(() => (null !== r && void 0 !== r && r.isNative ? r.wrapped : r), [r]),
            I = Object(h.useMemo)(
              () => [
                {
                  label: c.a._('I want to pay'),
                  content:
                    n &&
                    l &&
                    Object(D.jsxs)(Y.h, {
                      children: [
                        Object(D.jsx)(C.a, { currency: n, style: K }),
                        Object(D.jsxs)(g.e, {
                          children: [Object(V.f)(l), ' ', null === n || void 0 === n ? void 0 : n.symbol],
                        }),
                      ],
                    }),
                },
                {
                  label: c.a._('and receive at least'),
                  content:
                    T &&
                    d &&
                    Object(D.jsxs)(Y.h, {
                      children: [
                        Object(D.jsx)(C.a, { currency: T, style: K }),
                        Object(D.jsxs)(g.e, {
                          children: [Object(V.f)(d), ' ', null === T || void 0 === T ? void 0 : T.symbol],
                        }),
                      ],
                    }),
                },
                {
                  label: c.a._('at'),
                  content: f && Object(D.jsx)(Y.g, { rateInfo: j, currencyIn: n, currencyOut: T }),
                },
                {
                  label: c.a._('before the order expires on'),
                  content:
                    f &&
                    Object(D.jsx)(Y.h, {
                      children: Object(D.jsx)(g.e, { children: u()(b).format('DD/MM/YYYY HH:mm') }),
                    }),
                },
              ],
              [f, n, T, l, j, d, b],
            ),
            S = () => {
              s(),
                setTimeout(() => {
                  k(!1)
                }, 200)
            }
          return Object(D.jsx)(H.e, {
            maxWidth: 450,
            hash: o.txHash,
            isOpen: o.showConfirm,
            onDismiss: S,
            attemptingTxn: o.attemptingTxn,
            content: () =>
              Object(D.jsx)(g.b, {
                flexDirection: 'column',
                width: '100%',
                children: Object(D.jsx)('div', {
                  children: o.errorMessage
                    ? Object(D.jsx)(H.c, { onDismiss: s, message: o.errorMessage })
                    : Object(D.jsxs)(Y.a, {
                        children: [
                          Object(D.jsx)(Y.b, { title: c.a._('Review your order'), onDismiss: S }),
                          Object(D.jsx)(Y.d, { listData: I }),
                          Object(D.jsx)(Y.e, {
                            marketPrice: p,
                            symbolIn: null === n || void 0 === n ? void 0 : n.symbol,
                            symbolOut: null === T || void 0 === T ? void 0 : T.symbol,
                          }),
                          Object(D.jsx)(Y.f, { note: m }),
                          (null === x || void 0 === x ? void 0 : x.length) > 0 &&
                            Object(D.jsx)(z.c, {
                              gap: '16px',
                              children:
                                null === x || void 0 === x
                                  ? void 0
                                  : x.map((e, t) => Object(D.jsx)(q.a, { type: 'warn', title: e }, t)),
                            }),
                          Object(D.jsxs)(g.b, {
                            sx: { gap: '12px' },
                            children: [
                              _
                                ? w
                                  ? Object(D.jsx)(A.j, {
                                      disabled: !0,
                                      children: Object(D.jsx)(a.b, { id: 'Confirm Price' }),
                                    })
                                  : Object(D.jsx)(A.k, {
                                      onClick: () => k(!0),
                                      children: Object(D.jsx)(a.b, { id: 'Confirm Price' }),
                                    })
                                : null,
                              _ && !w
                                ? Object(D.jsx)(A.j, {
                                    id: 'place-order-button',
                                    disabled: !0,
                                    children: Object(D.jsx)(a.b, { id: 'Place Order' }),
                                  })
                                : null !== x && void 0 !== x && x.length
                                ? Object(D.jsx)(A.k, {
                                    id: 'place-order-button',
                                    onClick: t,
                                    children: Object(D.jsx)(a.b, { id: 'Place Order' }),
                                  })
                                : Object(D.jsx)(A.j, {
                                    id: 'place-order-button',
                                    onClick: t,
                                    children: Object(D.jsx)(a.b, { id: 'Place Order' }),
                                  }),
                            ],
                          }),
                        ],
                      }),
                }),
              }),
            pendingText: o.pendingText || c.a._('Placing order'),
          })
        }),
        Z = n('./src/components/swapv2/LimitOrder/TradePrice.tsx'),
        X = n('./src/state/swap/hooks.ts'),
        Q = n('./src/utils/index.ts'),
        J = e => {
          var t = e.inputAmount,
            n = e.outputAmount,
            r = e.balance,
            s = e.displayRate,
            o = e.parsedActiveOrderMakingAmount,
            i = e.currencyIn,
            a = e.wrapInputError,
            d = e.showWrap,
            l = e.currencyOut,
            u = Object(X.b)(t, null !== i && void 0 !== i ? i : void 0)
          return {
            inputError: Object(h.useMemo)(() => {
              try {
                if (!t) return
                if (0 === parseFloat(t) && (0 === parseFloat(n) || 0 === parseFloat(s)))
                  return c.a._('Invalid input amount')
                if (r && null !== u && void 0 !== u && u.greaterThan(r))
                  return c.a._('Insufficient {0} balance', { 0: null === i || void 0 === i ? void 0 : i.symbol })
                var e = o ? (null === r || void 0 === r ? void 0 : r.subtract(o)) : void 0
                if (u && null !== e && void 0 !== e && e.lessThan(u)) {
                  var l = Object(Q.h)(parseFloat(e.toFixed(3)), 0, 10)
                  return c.a._(
                    "You don't have sufficient {0} balance. After your active orders, you have {1}{formatNum} {2} left.",
                    {
                      0: null === i || void 0 === i ? void 0 : i.symbol,
                      1: 0 !== Number(l) ? '~' : '',
                      2: null === i || void 0 === i ? void 0 : i.symbol,
                      formatNum: l,
                    },
                  )
                }
                return u ? (d && a ? a : void 0) : c.a._('Your input amount is invalid.')
              } catch (b) {
                return
              }
            }, [i, r, t, n, s, o, u, d, a]),
            outPutError: Object(h.useMemo)(() => {
              if (n && !Object(X.b)(n, l)) return c.a._('Your output amount is invalid.')
            }, [n, l]),
          }
        },
        ee = n('./node_modules/react-use/esm/usePrevious.js'),
        te = n('./src/state/transactions/hooks.tsx')
      var ne,
        re = n('./src/constants/styles.ts'),
        se = n('./src/data/Allowances.ts'),
        oe = n('./src/hooks/useBaseTradeInfo.ts'),
        ie = n('./src/hooks/useMixpanel.ts'),
        ae = n('./src/hooks/useWrapCallback.ts'),
        ce = n('./src/state/limit/hooks.ts'),
        de = n('./src/state/wallet/hooks.ts'),
        le = n('./src/types/index.ts'),
        ue = n('./src/utils/firebase.ts'),
        be = n('./src/utils/maxAmountSpend.ts'),
        pe = n('./src/utils/numbers.ts'),
        je = n('./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'),
        me = n('./node_modules/react-feather/dist/icons/x.js'),
        xe = n('./node_modules/react-feather/dist/icons/calendar.js'),
        he = n('./node_modules/react-date-picker/dist/entry.js'),
        Oe = n.n(he),
        fe = v.default.div.withConfig({ displayName: 'DatePicker__Container', componentId: 'sc-i56hot-0' })(
          [
            '.custom-date-picker{width:100%;.react-date-picker__wrapper{height:0;width:0;opacity:0;span{display:none;}}.react-date-picker__calendar--closed{display:block !important;}.react-date-picker__calendar--open{height:fit-content !important;}.react-date-picker__calendar{position:unset !important;width:fit-content;}.custom-calendar{text-align:center;width:100%;background:transparent;border:none;button{background-color:transparent;color:',
            ';margin:0;border:0;outline:none;font-weight:500;font-size:12px;&:disabled{color:',
            ';cursor:not-allowed;}}.react-calendar__month-view__weekdays__weekday{line-height:16px;color:',
            ';text-transform:none;abbr{text-decoration:none;}}.react-calendar__decade-view,.react-calendar__century-view,.react-calendar__year-view{button.react-calendar__tile--hasActive,button:not(:disabled):hover{color:',
            ';font-weight:bold;}button{padding:14px 0.5em;}}.react-calendar__navigation{margin:0;font-weight:500;height:auto;.react-calendar__navigation__label{height:24px;font-size:14px;color:',
            ';background-color:transparent;&:hover{background-color:transparent;}}.react-calendar__navigation__arrow{font-size:20px;background-color:',
            ';color:',
            ';border-radius:100%;padding-bottom:12px;width:24px;height:24px;line-height:1;min-width:unset;&:disabled{background-color:',
            ';}}}.react-calendar__month-view__days{button{height:34px;padding:0;abbr{width:28px;height:28px;line-height:28px;border-radius:100%;display:block;margin:auto;font-weight:500;font-size:14px;}&.react-calendar__tile--now abbr{background-color:',
            ';}&.react-calendar__tile--active,&:not(:disabled):hover{abbr{color:',
            ';background-color:',
            ';}}&.react-calendar__month-view__days__day--neighboringMonth{font-style:italic;}}}}}',
            '',
          ],
          e => e.theme.text,
          e => e.theme.subText,
          e => e.theme.subText,
          e => e.theme.primary,
          e => e.theme.text,
          e => e.theme.background,
          e => e.theme.text,
          e => {
            var t = e.theme
            return Object(x.d)(t.background, 0.4)
          },
          e => e.theme.buttonGray,
          e => e.theme.textReverse,
          e => e.theme.primary,
          e =>
            e.theme.mediaWidth.upToMedium(
              ne || (ne = Object(je.a)(['\n      ', '\n  '])),
              Object(v.css)([
                '.custom-date-picker .custom-calendar .react-calendar__month-view__days{button{height:48px;abbr{width:48px;height:48px;line-height:48px;}}}',
              ]),
            ),
        )
      function ge(e) {
        var t = e.onChange,
          n = e.value,
          r = new Date(),
          s = new Date(r.getFullYear(), r.getMonth(), r.getDate())
        return Object(D.jsx)(fe, {
          children: Object(D.jsx)(Oe.a, {
            calendarIcon: null,
            clearIcon: null,
            autoFocus: !0,
            calendarClassName: 'custom-calendar',
            className: 'custom-date-picker',
            value: n,
            closeCalendar: !1,
            onChange: t,
            minDate: s,
          }),
        })
      }
      var ve,
        ye,
        we = n('./src/components/Modal/index.tsx'),
        ke = Array.from({ length: 24 }, (e, t) => ({ label: t, value: t })),
        Ce = Array.from({ length: 60 }, (e, t) => ({ label: t, value: t })),
        _e = v.default.div.withConfig({ displayName: 'ExpirePicker__Container', componentId: 'sc-10abbem-0' })(
          ['display:flex;flex-direction:column;gap:1rem;padding:24px 20px;font-weight:500;width:100%;', ''],
          e => e.theme.mediaWidth.upToSmall(ve || (ve = Object(je.a)(['\n     padding: 16px 10px;\n  ']))),
        ),
        Te = v.default.div.withConfig({
          displayName: 'ExpirePicker__DefaultOptionContainer',
          componentId: 'sc-10abbem-1',
        })(
          [
            'background-color:',
            ';padding:10px;font-size:12px;border-radius:16px 0px 0px 16px;white-space:nowrap;display:flex;gap:14px;padding-top:20px;flex-direction:column;',
            '',
          ],
          e => e.theme.background,
          e => e.theme.mediaWidth.upToMedium(ye || (ye = Object(je.a)(['\n    display:none;\n  ']))),
        ),
        Ie = v.default.div.withConfig({ displayName: 'ExpirePicker__ResultContainer', componentId: 'sc-10abbem-2' })(
          [
            'border:',
            ';padding:10px;border-radius:20px;width:100%;display:flex;justify-content:space-between;font-size:14px;',
          ],
          e => {
            var t = e.theme
            return '1px solid '.concat(t.warning)
          },
        ),
        Se = e => {
          var t = new Date()
          return t.getDate() === e.getDate() && t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth()
        }
      function Ae(e) {
        var t = e.isOpen,
          n = e.onDismiss,
          r = e.onSetDate,
          s = e.expire,
          c = e.defaultDate,
          d = new Date(),
          l = new Date(d.getFullYear(), d.getMonth(), d.getDate()),
          b = Object(h.useState)(l),
          p = Object(i.a)(b, 2),
          j = p[0],
          m = p[1],
          x = Object(h.useState)(0),
          O = Object(i.a)(x, 2),
          f = O[0],
          v = O[1],
          y = Object(h.useState)(0),
          w = Object(i.a)(y, 2),
          k = w[0],
          C = w[1],
          _ = Object(h.useState)(null),
          T = Object(i.a)(_, 2),
          S = T[0],
          E = T[1],
          N = (e, t, n) => {
            var r = n,
              s = t,
              o = new Date()
            Se(e) &&
              (t < o.getHours() && (s = o.getHours()),
              s === o.getHours() && n < o.getMinutes() + G.f && (r = o.getMinutes() + G.f)),
              C(s),
              v(r),
              m(new Date(e.getFullYear(), e.getMonth(), e.getDate(), s, r)),
              E(null)
          },
          L = Object(h.useCallback)(e => {
            E(e)
            var t = new Date(Date.now() + 1e3 * e)
            m(t), C(t.getHours()), v(t.getMinutes())
          }, [])
        Object(h.useEffect)(() => {
          t && (L(s), c && N(c, c.getHours(), c.getMinutes()))
        }, [t, L, s, c])
        var P = Object(W.a)(),
          M = {
            style: { width: 120, borderRadius: 20, background: P.background },
            menuStyle: {
              height: 250,
              overflow: 'scroll',
              top: 'unset',
              right: 'unset',
              textAlign: 'center',
              width: 'fit-content',
            },
          },
          R = S ? Date.now() + 1e3 * S : j,
          F = Object(h.useMemo)(() => {
            var e = new Date()
            return Se(j) ? ke.filter(t => +t.value >= e.getHours()) : ke
          }, [j]),
          B = Object(h.useMemo)(() => {
            var e = new Date()
            return Se(j) && k === e.getHours() ? Ce.filter(t => +t.value >= e.getMinutes() + G.f) : Ce
          }, [j, k])
        return Object(D.jsx)(we.a, {
          maxWidth: '98vw',
          width: '480px',
          isOpen: t,
          enableSwipeGesture: !1,
          children: Object(D.jsxs)(_e, {
            children: [
              Object(D.jsxs)(g.b, {
                justifyContent: 'space-between',
                alignItems: 'center',
                children: [
                  Object(D.jsx)(g.e, {
                    fontSize: 14,
                    children: Object(D.jsx)(a.b, { id: 'Customize the Expiry Time' }),
                  }),
                  Object(D.jsx)(me.a, { color: P.text, onClick: n, cursor: 'pointer' }),
                ],
              }),
              Object(D.jsxs)(g.b, {
                style: { gap: 16 },
                children: [
                  Object(D.jsxs)(Te, {
                    children: [
                      Object(D.jsx)(g.e, { color: P.border, children: Object(D.jsx)(a.b, { id: 'Default Options' }) }),
                      Object(G.i)().map(e =>
                        Object(D.jsx)(
                          g.e,
                          {
                            style: { cursor: 'pointer' },
                            color: e.value === S ? P.primary : P.subText,
                            onClick: () => e.value && L(Number(e.value)),
                            children: e.label,
                          },
                          e.value,
                        ),
                      ),
                    ],
                  }),
                  Object(D.jsxs)(g.b, {
                    flexDirection: 'column',
                    style: { gap: 5, alignItems: 'center', flex: 1 },
                    children: [
                      Object(D.jsx)(ge, { value: j, onChange: e => N(e, k, f) }),
                      Object(D.jsxs)(g.b, {
                        justifyContent: 'space-between',
                        width: '100%',
                        padding: '0px 8px',
                        children: [
                          Object(D.jsx)(
                            I.a,
                            Object(o.a)(
                              Object(o.a)(
                                {
                                  value: k,
                                  activeRender: e =>
                                    Object(D.jsxs)(g.b, {
                                      justifyContent: 'space-between',
                                      alignItems: 'center',
                                      children: [
                                        Object(D.jsx)(g.e, {
                                          color: P.text,
                                          fontSize: 14,
                                          children: null === e || void 0 === e ? void 0 : e.label,
                                        }),
                                        Object(D.jsx)(g.e, { children: Object(D.jsx)(a.b, { id: 'Hour' }) }),
                                      ],
                                    }),
                                },
                                M,
                              ),
                              {},
                              {
                                options: F,
                                onChange: e => {
                                  N(j, e, f)
                                },
                              },
                            ),
                          ),
                          Object(D.jsx)(
                            I.a,
                            Object(o.a)(
                              Object(o.a)(
                                {
                                  value: f,
                                  activeRender: e =>
                                    Object(D.jsxs)(g.b, {
                                      justifyContent: 'space-between',
                                      alignItems: 'center',
                                      children: [
                                        Object(D.jsx)(g.e, {
                                          color: P.text,
                                          fontSize: 14,
                                          children: null === e || void 0 === e ? void 0 : e.label,
                                        }),
                                        Object(D.jsx)(g.e, { children: Object(D.jsx)(a.b, { id: 'Min' }) }),
                                      ],
                                    }),
                                },
                                M,
                              ),
                              {},
                              {
                                options: B,
                                onChange: e => {
                                  N(j, k, e)
                                },
                              },
                            ),
                          ),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              Object(D.jsxs)(Ie, {
                children: [
                  Object(D.jsxs)(g.b, {
                    alignItems: 'center',
                    color: P.subText,
                    children: [
                      Object(D.jsx)(xe.a, { color: P.warning, size: 17 }),
                      Object(D.jsx)(g.e, {
                        marginLeft: '5px',
                        children: Object(D.jsx)(a.b, { id: 'Order will Expire on' }),
                      }),
                    ],
                  }),
                  Object(D.jsx)(g.e, { color: P.text, children: u()(R).format('DD/MM/YYYY HH:mm') }),
                ],
              }),
              Object(D.jsxs)(g.b, {
                justifyContent: 'flex-end',
                style: { gap: 16 },
                children: [
                  Object(D.jsx)(A.i, {
                    onClick: n,
                    style: { width: 100, height: 32 },
                    children: Object(D.jsx)(a.b, { id: 'Cancel' }),
                  }),
                  Object(D.jsx)(A.j, {
                    onClick: () => {
                      r(j), n()
                    },
                    style: { width: 100, height: 32 },
                    children: Object(D.jsx)(a.b, { id: 'Set' }),
                  }),
                ],
              }),
            ],
          }),
        })
      }
      var Ee = n('./src/components/swapv2/LimitOrder/request.ts'),
        Ne = v.default.div.withConfig({ displayName: 'LimitOrderForm__Label', componentId: 'sc-1okjqjy-0' })(
          ['font-weight:500;font-size:12px;color:', ';'],
          e => e.theme.subText,
        ),
        Le = Object(v.default)(Ne).withConfig({
          displayName: 'LimitOrderForm__Set2Market',
          componentId: 'sc-1okjqjy-1',
        })(['color:', ';cursor:pointer;user-select:none;margin:0;'], e => e.theme.primary),
        Pe = v.default.div.withConfig({ displayName: 'LimitOrderForm__InputWrapper', componentId: 'sc-1okjqjy-2' })(
          [
            'background-color:',
            ';border-radius:12px;flex:1;padding:12px;flex-direction:column;gap:0.5rem;display:flex;',
          ],
          e => e.theme.buttonBlack,
        ),
        De = v.default.span.withConfig({ displayName: 'LimitOrderForm__HightLight', componentId: 'sc-1okjqjy-3' })(
          ['font-weight:500;color:', ';'],
          e => e.theme.warning,
        ),
        Me = function (e) {
          var t,
            n,
            l,
            p,
            v,
            A = e.refreshListOrder,
            E = e.onCancelOrder,
            R = e.currencyIn,
            z = e.currencyOut,
            H = e.defaultInputAmount,
            Y = void 0 === H ? '' : H,
            K = e.defaultOutputAmount,
            ne = void 0 === K ? '' : K,
            je = e.defaultActiveMakingAmount,
            me = void 0 === je ? '' : je,
            xe = e.defaultExpire,
            he = e.defaultRate,
            Oe = void 0 === he ? { rate: '', invertRate: '', invert: !1 } : he,
            fe = e.setIsSelectCurrencyManual,
            ge = e.note,
            ve = void 0 === ge ? '' : ge,
            ye = e.orderInfo,
            we = e.flowState,
            ke = e.setFlowState,
            Ce = e.zIndexToolTip,
            _e = void 0 === Ce ? re.a.TOOL_TIP_ERROR_INPUT_SWAP_FORM : Ce,
            Te = e.onDismissModalEdit,
            Ie = e.isEdit,
            Se = void 0 !== Ie && Ie,
            Me = Object(N.b)(),
            Re = Me.account,
            We = Me.chainId,
            Fe = Me.networkInfo,
            Be = Object(W.a)(),
            Ue = Object(P.k)(),
            ze = Object(ie.c)().mixpanelHandler,
            He = Object(ce.a)(),
            Ge = He.setCurrencyIn,
            qe = He.setCurrencyOut,
            Ve = He.switchCurrency,
            Ye = He.setCurrentOrder,
            Ke = He.removeCurrentOrder,
            $e = He.resetState,
            Ze = Object(ce.b)(),
            Xe = Ze.ordersUpdating,
            Qe = Ze.inputAmount,
            Je = Object(h.useState)(Y),
            et = Object(i.a)(Je, 2),
            tt = et[0],
            nt = et[1],
            rt = Object(h.useState)(ne),
            st = Object(i.a)(rt, 2),
            ot = st[0],
            it = st[1],
            at = Object(h.useState)(me),
            ct = Object(i.a)(at, 2),
            dt = ct[0],
            lt = ct[1],
            ut = Object(h.useState)(Oe),
            bt = Object(i.a)(ut, 2),
            pt = bt[0],
            jt = bt[1],
            mt = pt.invert ? pt.invertRate : pt.rate,
            xt = Object(h.useState)(G.d),
            ht = Object(i.a)(xt, 2),
            Ot = ht[0],
            ft = ht[1],
            gt = Object(h.useState)(!1),
            vt = Object(i.a)(gt, 2),
            yt = vt[0],
            wt = vt[1],
            kt = Object(h.useState)(xe),
            Ct = Object(i.a)(kt, 2),
            _t = Ct[0],
            Tt = Ct[1],
            It = Object(h.useState)(!1),
            St = Object(i.a)(It, 2),
            At = St[0],
            Et = St[1],
            Nt = Object(N.e)().library,
            Lt = Object(oe.a)(R, z),
            Pt = Lt.loading,
            Dt = Lt.tradeInfo,
            Mt = F({ marketPrice: Dt, rateInfo: pt }),
            Rt = Object(ae.b)(R, z, tt, !0),
            Wt = Rt.execute,
            Ft = Rt.inputError,
            Bt = !(null === R || void 0 === R || !R.isNative),
            Ut = (e, t) => {
              if (R && z) {
                var n = Object(o.a)(Object(o.a)({}, pt), {}, { rate: e, invertRate: t })
                if (e || t) {
                  if (e) {
                    if (tt) {
                      var r = Object(V.b)(tt, e, z.decimals)
                      it(r)
                    }
                    return t || (n.invertRate = Object(V.a)(e)), void jt(n)
                  }
                  if (t) {
                    if (((n.rate = Object(V.a)(t)), tt)) {
                      var s = Object(V.b)(tt, n.rate, z.decimals)
                      it(s)
                    }
                    jt(n)
                  } else;
                } else jt(n)
              }
            },
            zt = Object(h.useCallback)(
              e => {
                nt(e), pt.rate && R && z && e && it(Object(V.b)(e, pt.rate, z.decimals))
              },
              [pt, R, z],
            ),
            Ht = Object(h.useCallback)(
              function (e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                z && null !== e && void 0 !== e && e.equals(z)
                  ? Ve()
                  : (Ge(e),
                    null === fe || void 0 === fe || fe(!0),
                    t && jt(Object(o.a)(Object(o.a)({}, pt), {}, { invertRate: '', rate: '' })))
              },
              [z, Ge, fe, pt, Ve],
            ),
            Gt = (function (e) {
              var t = Object(h.useState)(),
                n = Object(i.a)(t, 2),
                r = n[0],
                s = n[1],
                o = Object(te.e)(r),
                a = Object(ee.a)(o)
              return (
                Object(h.useEffect)(() => {
                  o || s('')
                }, [o]),
                Object(h.useEffect)(() => {
                  !0 === a && !1 === o && e()
                }, [a, o, e]),
                { isWrappingEth: o, setTxHashWrapped: s }
              )
            })(
              Object(h.useCallback)(() => {
                Ht(null === R || void 0 === R ? void 0 : R.wrapped, !1)
              }, [R, Ht]),
            ),
            qt = Gt.isWrappingEth,
            Vt = Gt.setTxHashWrapped,
            Yt = Object(h.useState)(!1),
            Kt = Object(i.a)(Yt, 2),
            $t = Kt[0],
            Zt = Kt[1],
            Xt = Object(X.b)(tt, null !== R && void 0 !== R ? R : void 0),
            Qt = Object(se.a)(
              R,
              null !== Re && void 0 !== Re ? Re : void 0,
              null !== (t = Object(Q.o)(We)) && void 0 !== t ? t : '',
            ),
            Jt = Object(h.useMemo)(() => {
              try {
                if (R && dt) {
                  var e = d.TokenAmount.fromRawAmount(R, j.a.BigInt(dt))
                  return Se && ye ? e.subtract(d.TokenAmount.fromRawAmount(R, j.a.BigInt(ye.makingAmount))) : e
                }
              } catch (t) {}
            }, [R, dt, Se, ye]),
            en = Object(de.b)(R),
            tn = Object(h.useMemo)(() => Object(be.b)(en), [en]),
            nn = Object(h.useCallback)(() => {
              if (Jt && tn && R)
                try {
                  var e = tn.subtract(Jt)
                  zt(
                    e.greaterThan(d.CurrencyAmount.fromRawAmount(R, 0))
                      ? null === e || void 0 === e
                        ? void 0
                        : e.toExact()
                      : '0',
                  )
                } catch (t) {}
            }, [tn, zt, Jt, R]),
            rn = Object(h.useMemo)(() => {
              try {
                var e = Jt ? (null === Qt || void 0 === Qt ? void 0 : Qt.subtract(Jt)) : void 0
                return Boolean(
                  (null === R || void 0 === R ? void 0 : R.isNative) ||
                    (Xt &&
                      ((null === e || void 0 === e ? void 0 : e.greaterThan(Xt)) ||
                        (null === e || void 0 === e ? void 0 : e.equalTo(Xt)))),
                )
              } catch (t) {
                return !1
              }
            }, [null === R || void 0 === R ? void 0 : R.isNative, Qt, Xt, Jt]),
            sn = Object(L.b)(Xt, null !== (n = Object(Q.o)(We)) && void 0 !== n ? n : '', !rn),
            on = Object(i.a)(sn, 2),
            an = on[0],
            cn = on[1],
            dn = J({
              inputAmount: tt,
              outputAmount: ot,
              balance: en,
              displayRate: mt,
              parsedActiveOrderMakingAmount: Jt,
              currencyIn: R,
              wrapInputError: Ft,
              showWrap: Bt,
              currencyOut: z,
            }),
            ln = dn.inputError,
            un = dn.outPutError,
            bn = Boolean(ln || un),
            pn =
              !(R && null !== Jt && void 0 !== Jt && null !== (l = Jt.currency) && void 0 !== l && l.equals(R)) ||
              !(R && null !== Qt && void 0 !== Qt && null !== (p = Qt.currency) && void 0 !== p && p.equals(R)),
            jn = [ot, tt, R, z, mt].some(e => !e),
            mn = (null === _t || void 0 === _t ? void 0 : _t.getTime()) || Date.now() + 1e3 * Ot,
            xn = Object(h.useCallback)(() => {
              ke(e => Object(o.a)(Object(o.a)({}, e), {}, { showConfirm: !1 }))
            }, [ke]),
            hn = () => {
              wt(!yt)
            },
            On = e => {
              'number' === typeof e ? (ft(e), Tt(void 0), ze(ie.a.LO_ENTER_DETAIL, 'choose date')) : Tt(e)
            },
            fn = Object(h.useCallback)(
              (function () {
                var e = Object(s.a)(
                  Object(r.a)().mark(function e(t) {
                    var n, s, o
                    return Object(r.a)().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (((e.prev = 0), (n = null === t || void 0 === t ? void 0 : t.wrapped.address) && Re)) {
                                e.next = 4
                                break
                              }
                              return e.abrupt('return')
                            case 4:
                              return (e.next = 6), Object(Ee.g)(We, n, Re)
                            case 6:
                              ;(s = e.sent), (o = s.activeMakingAmount), lt(o), (e.next = 14)
                              break
                            case 11:
                              ;(e.prev = 11), (e.t0 = e.catch(0)), console.log(e.t0)
                            case 14:
                            case 'end':
                              return e.stop()
                          }
                      },
                      e,
                      null,
                      [[0, 11]],
                    )
                  }),
                )
                return function (t) {
                  return e.apply(this, arguments)
                }
              })(),
              [Re, We],
            ),
            gn = Object(h.useCallback)(
              e => {
                ke(t => Object(o.a)(Object(o.a)({}, t), {}, { attemptingTxn: !1, errorMessage: Object(V.h)(e) }))
              },
              [ke],
            ),
            vn = (function () {
              var e = Object(s.a)(
                Object(r.a)().mark(function e(t) {
                  var n, s, i, a, c, d, l, u, p, j, m, x
                  return Object(r.a)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((s = t.currencyIn),
                            (i = t.currencyOut),
                            (a = t.inputAmount),
                            (c = t.outputAmount),
                            (d = t.signature),
                            (l = t.salt),
                            !d || !l)
                          ) {
                            e.next = 3
                            break
                          }
                          return e.abrupt('return', { signature: d, salt: l })
                        case 3:
                          if (Nt && s && i) {
                            e.next = 5
                            break
                          }
                          return e.abrupt('return', { signature: '', salt: '' })
                        case 5:
                          return (
                            (u = Object(V.i)(t)),
                            ke(e =>
                              Object(o.a)(
                                Object(o.a)({}, e),
                                {},
                                {
                                  attemptingTxn: !0,
                                  pendingText: 'Sign limit order: '
                                    .concat(Object(V.f)(a), ' ')
                                    .concat(s.symbol, ' to ')
                                    .concat(Object(V.f)(c), ' ')
                                    .concat(i.symbol),
                                },
                              ),
                            ),
                            (e.next = 9),
                            Object(Ee.e)(u)
                          )
                        case 9:
                          return (p = e.sent), (e.next = 12), Nt.send('eth_signTypedData_v4', [Re, JSON.stringify(p)])
                        case 12:
                          return (
                            (j = e.sent),
                            (m = b.ethers.utils.arrayify(j)),
                            (0 !== (x = m[64]) && 1 !== x) || (m[64] += 27),
                            e.abrupt('return', {
                              signature: b.ethers.utils.hexlify(m),
                              salt:
                                null === p || void 0 === p || null === (n = p.message) || void 0 === n
                                  ? void 0
                                  : n.salt,
                            })
                          )
                        case 17:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )
              return function (t) {
                return e.apply(this, arguments)
              }
            })(),
            yn = (function () {
              var e = Object(s.a)(
                Object(r.a)().mark(function e(t) {
                  var n, s, i, a, d, l, u, b, p, j, m
                  return Object(r.a)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((e.prev = 0),
                              (n = t.currencyIn),
                              (s = t.currencyOut),
                              (i = t.account),
                              (a = t.inputAmount),
                              (d = t.outputAmount),
                              (l = t.expiredAt),
                              Nt && n && s && i && a && d && l)
                            ) {
                              e.next = 4
                              break
                            }
                            throw new Error('wrong input')
                          case 4:
                            return (e.next = 6), vn(t)
                          case 6:
                            return (
                              (u = e.sent),
                              (b = u.signature),
                              (p = u.salt),
                              (j = Object(V.i)(t)),
                              ke(e => Object(o.a)(Object(o.a)({}, e), {}, { pendingText: c.a._('Placing order') })),
                              (e.next = 13),
                              Object(Ee.i)(Object(o.a)(Object(o.a)({}, j), {}, { salt: p, signature: b }))
                            )
                          case 13:
                            return (
                              (m = e.sent),
                              ke(e => Object(o.a)(Object(o.a)({}, e), {}, { showConfirm: !1 })),
                              Ue(
                                {
                                  type: y.a.SUCCESS,
                                  title: c.a._('Order Placed'),
                                  summary: Object(D.jsx)(U.a, {
                                    currencyIn: n,
                                    currencyOut: s,
                                    inputAmount: a,
                                    outputAmount: d,
                                  }),
                                },
                                1e4,
                              ),
                              nt(Y),
                              it(ne),
                              jt(Oe),
                              ft(G.d),
                              Tt(void 0),
                              Cn(),
                              $e(),
                              setTimeout(() => (null === A || void 0 === A ? void 0 : A()), 500),
                              e.abrupt('return', null === m || void 0 === m ? void 0 : m.id)
                            )
                          case 21:
                            ;(e.prev = 21), (e.t0 = e.catch(0)), gn(e.t0)
                          case 24:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[0, 21]],
                  )
                }),
              )
              return function (t) {
                return e.apply(this, arguments)
              }
            })(),
            wn = (function () {
              var e = Object(s.a)(
                Object(r.a)().mark(function e() {
                  var t, n, s, i
                  return Object(r.a)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (((e.prev = 0), E)) {
                              e.next = 3
                              break
                            }
                            return e.abrupt('return')
                          case 3:
                            return (e.next = 5), E()
                          case 5:
                            if (!ye) {
                              e.next = 13
                              break
                            }
                            return (
                              (t = {
                                orderId: null === ye || void 0 === ye ? void 0 : ye.id,
                                account: Re,
                                chainId: We,
                                currencyIn: R,
                                currencyOut: z,
                                inputAmount: tt,
                                outputAmount: ot,
                                expiredAt: mn,
                              }),
                              (e.next = 9),
                              vn(t)
                            )
                          case 9:
                            ;(n = e.sent),
                              (s = n.signature),
                              (i = n.salt),
                              Ye(Object(o.a)(Object(o.a)({}, t), {}, { salt: i, signature: s }))
                          case 13:
                            null === Te || void 0 === Te || Te(), (e.next = 20)
                            break
                          case 16:
                            ;(e.prev = 16), (e.t0 = e.catch(0)), ye && Ke(ye.id), gn(e.t0)
                          case 20:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[0, 16]],
                  )
                }),
              )
              return function () {
                return e.apply(this, arguments)
              }
            })(),
            kn = (function () {
              var e = Object(s.a)(
                Object(r.a)().mark(function e() {
                  var t, n
                  return Object(r.a)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (((e.prev = 0), !(jn || Ft || qt || bn))) {
                              e.next = 3
                              break
                            }
                            return e.abrupt('return')
                          case 3:
                            return (
                              (t = Object(V.f)(tt)),
                              ke(e =>
                                Object(o.a)(
                                  Object(o.a)({}, e),
                                  {},
                                  {
                                    attemptingTxn: !0,
                                    showConfirm: !0,
                                    pendingText: c.a._('Wrapping {amount} {0} to {amount} {1}', {
                                      0: null === R || void 0 === R ? void 0 : R.symbol,
                                      1: d.WETH[We].symbol,
                                      amount: t,
                                    }),
                                  },
                                ),
                              ),
                              (e.next = 7),
                              null === Wt || void 0 === Wt ? void 0 : Wt()
                            )
                          case 7:
                            ;(n = e.sent) && Vt(n),
                              ke(e => Object(o.a)(Object(o.a)({}, e), {}, { showConfirm: !1 })),
                              (e.next = 15)
                            break
                          case 12:
                            ;(e.prev = 12), (e.t0 = e.catch(0)), gn(e.t0)
                          case 15:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[0, 12]],
                  )
                }),
              )
              return function () {
                return e.apply(this, arguments)
              }
            })()
          Object(h.useEffect)(() => {
            an === L.a.PENDING && Et(!0), an === L.a.NOT_APPROVED && Et(!1)
          }, [an, At])
          var Cn = Object(h.useMemo)(
              () =>
                Object(m.debounce)(() => {
                  Object(Ee.b)(), R && fn(R)
                }, 100),
              [R, fn],
            ),
            _n = Object(h.useRef)(!1)
          Object(h.useEffect)(() => {
            _n.current && R && fn(R), (_n.current = !0)
          }, [R, fn, Se])
          var Tn = Object(h.useRef)(yn)
          Tn.current = yn
          var In = Object(h.useRef)(Cn)
          ;(In.current = Cn),
            Object(h.useEffect)(() => {
              if (Re) {
                var e = Object(ue.c)(Re, We, e => {
                    null === e ||
                      void 0 === e ||
                      e.orders.forEach(e => {
                        var t = Xe.find(t => t.orderId === e.id)
                        null !== t && void 0 !== t && t.orderId && (Ke(t.orderId), e.isSuccessful && Tn.current(t))
                      }),
                      In.current()
                  }),
                  t = Object(ue.d)(Re, We, In.current)
                return () => {
                  null === e || void 0 === e || e(), null === t || void 0 === t || t()
                }
              }
            }, [Re, We, Xe, Ke]),
            Object(h.useEffect)(() => {
              Qe && zt(Qe)
            }, [Qe, zt]),
            Object(h.useEffect)(
              () => () => {
                $e()
              },
              [$e],
            )
          var Sn = Object(h.useCallback)(() => {
              ze(ie.a.LO_ENTER_DETAIL, 'touch enter amount box')
            }, [ze]),
            An = Object(h.useCallback)(() => {
              ze(ie.a.LO_ENTER_DETAIL, 'touch enter token box')
            }, [ze]),
            En = function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              ze(
                e,
                Object(o.a)(
                  {
                    from_token: null === R || void 0 === R ? void 0 : R.symbol,
                    to_token: null === z || void 0 === z ? void 0 : z.symbol,
                    from_network: Fe.name,
                    trade_qty: tt,
                  },
                  t,
                ),
              )
            },
            Nn = (function () {
              var e = Object(s.a)(
                Object(r.a)().mark(function e() {
                  var t
                  return Object(r.a)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            En(ie.a.LO_CLICK_PLACE_ORDER),
                            (e.next = 3),
                            yn({
                              currencyIn: R,
                              currencyOut: z,
                              chainId: We,
                              account: Re,
                              inputAmount: tt,
                              outputAmount: ot,
                              expiredAt: mn,
                            })
                          )
                        case 3:
                          ;(t = e.sent) && En(ie.a.LO_PLACE_ORDER_SUCCESS, { order_id: t })
                        case 5:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )
              return function () {
                return e.apply(this, arguments)
              }
            })(),
            Ln = { maxWidth: '250px', zIndex: _e },
            Pn = Object(h.useMemo)(
              () =>
                Object(V.e)({
                  inputAmount: tt,
                  outputAmount: ot,
                  priceUsdIn: null === Dt || void 0 === Dt ? void 0 : Dt.priceUsdIn,
                  priceUsdOut: null === Dt || void 0 === Dt ? void 0 : Dt.priceUsdOut,
                  currencyIn: R,
                  currencyOut: z,
                }),
              [tt, ot, Dt, R, z],
            ),
            Dn =
              !pn &&
              !Bt &&
              !jn &&
              !bn &&
              (an === L.a.NOT_APPROVED || an === L.a.PENDING || !rn || (At && an === L.a.APPROVED)),
            Mn = Object(h.useMemo)(() => {
              var e = []
              if (R && mt && !Mt.profit && Number(Mt.rawPercent) <= G.h) {
                var t = Mt.percent.slice(1)
                e.push(
                  Object(D.jsx)(g.e, {
                    children: Object(D.jsx)(a.b, {
                      id: 'Your limit order price is <0>{percentWithoutMinus}</0> lower than the market. You will be selling your {0} exceedingly cheap.',
                      values: { 0: R.symbol, percentWithoutMinus: t },
                      components: { 0: Object(D.jsx)(De, {}) },
                    }),
                  }),
                )
              }
              var n,
                r,
                s = We === d.ChainId.MAINNET,
                o = G.g[We],
                i = ot && Pn.rawInput && Pn.rawInput < o
              s &&
                i &&
                null !== Dt &&
                void 0 !== Dt &&
                Dt.gasFee &&
                e.push(
                  Object(D.jsx)(g.e, {
                    children: Object(D.jsx)(a.b, {
                      id: 'Your order may only be filled when market price of {0} to {1} is <<0>{2}</0>, as estimated gas fee to fill your order is ~<1>${3}</1>.',
                      values: {
                        0: null === R || void 0 === R ? void 0 : R.symbol,
                        1: null === z || void 0 === z ? void 0 : z.symbol,
                        2: Object(Q.i)(String(null === Dt || void 0 === Dt ? void 0 : Dt.marketRate), !0),
                        3: Object(pe.c)(
                          parseFloat(
                            null !==
                              (n =
                                null === Dt || void 0 === Dt || null === (r = Dt.gasFee) || void 0 === r
                                  ? void 0
                                  : r.toPrecision(6)) && void 0 !== n
                              ? n
                              : '0',
                          ),
                        ),
                      },
                      components: { 0: Object(D.jsx)(De, {}), 1: Object(D.jsx)(De, {}) },
                    }),
                  }),
                )
              return (
                !s &&
                  i &&
                  e.push(
                    Object(D.jsx)(g.e, {
                      children: Object(D.jsx)(a.b, {
                        id: 'We suggest you increase the value of your limit order to at least <0>${threshold}</0>. This will increase the odds of your order being filled.',
                        values: { threshold: o },
                        components: { 0: Object(D.jsx)(De, {}) },
                      }),
                    }),
                  ),
                e
              )
            }, [
              We,
              R,
              null === z || void 0 === z ? void 0 : z.symbol,
              Mt.percent,
              Mt.profit,
              Mt.rawPercent,
              mt,
              Pn.rawInput,
              ot,
              null === Dt || void 0 === Dt ? void 0 : Dt.gasFee,
              null === Dt || void 0 === Dt ? void 0 : Dt.marketRate,
            ])
          return Object(D.jsxs)(D.Fragment, {
            children: [
              Object(D.jsxs)(g.b, {
                flexDirection: 'column',
                style: { gap: '1rem' },
                children: [
                  Object(D.jsx)(S.d, {
                    text: ln,
                    show: !!ln,
                    placement: 'top',
                    style: Ln,
                    width: 'fit-content',
                    children: Object(D.jsx)(k.a, {
                      error: !!ln,
                      value: tt,
                      positionMax: 'top',
                      onUserInput: zt,
                      onMax: nn,
                      onHalf: null,
                      otherCurrency: z,
                      estimatedUsd: Pn.input,
                      onFocus: Sn,
                      onCurrencySelect: Ht,
                      currency: R,
                      showCommonBases: !0,
                      id: 'create-limit-order-input-tokena',
                      maxCurrencySymbolLength: 6,
                      filterWrap: !0,
                      onClickSelect: An,
                      lockIcon: Dn,
                      disableCurrencySelect: Se,
                      label: Object(D.jsx)(Ne, { children: Object(D.jsx)(a.b, { id: 'You Sell' }) }),
                      positionLabel: 'in',
                    }),
                  }),
                  Object(D.jsxs)(T.b, {
                    gap: '1rem',
                    children: [
                      Object(D.jsxs)(Pe, {
                        children: [
                          Object(D.jsxs)(g.b, {
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            children: [
                              Object(D.jsx)(B, {
                                symbolIn:
                                  null !== (v = null === R || void 0 === R ? void 0 : R.symbol) && void 0 !== v
                                    ? v
                                    : '',
                                marketPrice: Dt,
                                rateInfo: pt,
                              }),
                              Dt &&
                                Object(D.jsx)(Le, {
                                  onClick: () => {
                                    try {
                                      var e, t
                                      if ((ze(ie.a.LO_ENTER_DETAIL, 'set price'), Pt || !Dt)) return
                                      Ut(
                                        null !== (e = Object(pe.c)(parseFloat(Dt.marketRate.toFixed(16)))) &&
                                          void 0 !== e
                                          ? e
                                          : '',
                                        null !== (t = Object(pe.c)(parseFloat(Dt.invertRate.toFixed(16)))) &&
                                          void 0 !== t
                                          ? t
                                          : '',
                                      )
                                    } catch (n) {}
                                  },
                                  children: Object(D.jsx)(a.b, { id: 'Market' }),
                                }),
                            ],
                          }),
                          Object(D.jsxs)(g.b, {
                            alignItems: 'center',
                            style: { background: Be.buttonBlack, borderRadius: 12 },
                            children: [
                              Object(D.jsx)(_.b, {
                                maxLength: 50,
                                style: { fontSize: 14, height: 28 },
                                value: mt,
                                onUserInput: e => {
                                  z && Ut(pt.invert ? '' : e, pt.invert ? e : '')
                                },
                                onFocus: Sn,
                              }),
                              R &&
                                z &&
                                Object(D.jsxs)(g.b, {
                                  style: { gap: 6, cursor: 'pointer' },
                                  onClick: () => {
                                    return (
                                      (e = !pt.invert), void jt(Object(o.a)(Object(o.a)({}, pt), {}, { invert: e }))
                                    )
                                    var e
                                  },
                                  children: [
                                    Object(D.jsx)(C.a, { size: '18px', currency: pt.invert ? R : z }),
                                    Object(D.jsx)(g.e, {
                                      fontSize: 14,
                                      color: Be.subText,
                                      children: pt.invert
                                        ? null === R || void 0 === R
                                          ? void 0
                                          : R.symbol
                                        : null === z || void 0 === z
                                        ? void 0
                                        : z.symbol,
                                    }),
                                    Object(D.jsx)('div', {
                                      children: Object(D.jsx)(O.a, { color: Be.subText, size: 12 }),
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        ],
                      }),
                      Object(D.jsxs)(Pe, {
                        style: { maxWidth: '30%' },
                        children: [
                          Object(D.jsx)(Ne, { children: Object(D.jsx)(a.b, { id: 'Expires In' }) }),
                          Object(D.jsx)(I.a, {
                            value: Ot,
                            onChange: On,
                            optionStyle: Se ? { paddingTop: 8, paddingBottom: 8 } : {},
                            menuStyle: Se ? { paddingTop: 8, paddingBottom: 8 } : {},
                            style: { width: '100%', padding: 0, height: 28 },
                            options: [...Object(G.i)(), { label: 'Custom', onSelect: hn }],
                            activeRender: e => {
                              var t = _t
                                ? u()(_t).format('DD/MM/YYYY HH:mm')
                                : null === e || void 0 === e
                                ? void 0
                                : e.label
                              return Object(D.jsx)(S.a, {
                                text: _t ? t : '',
                                width: '130px',
                                children: Object(D.jsx)(g.e, { color: Be.text, fontSize: 14, children: t }),
                              })
                            },
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(D.jsxs)(T.b, {
                    children: [
                      R && z
                        ? Object(D.jsx)(Z.a, {
                            price: Dt,
                            style: { width: 'fit-content', fontStyle: 'italic' },
                            color: Be.text,
                            label: c.a._('Est. Market Price:'),
                            loading: Pt,
                            symbolIn: null === R || void 0 === R ? void 0 : R.symbol,
                            symbolOut: null === z || void 0 === z ? void 0 : z.symbol,
                          })
                        : Object(D.jsx)('div', {}),
                      Object(D.jsx)(w.b, {
                        rotate: $t,
                        onClick: Se
                          ? void 0
                          : () => {
                              Se || (Zt(e => !e), Ve(), null === fe || void 0 === fe || fe(!0))
                            },
                        style: { width: 25, height: 25, padding: 4, background: Be.buttonGray },
                      }),
                    ],
                  }),
                  Object(D.jsx)(S.d, {
                    text: un,
                    show: !!un,
                    placement: 'top',
                    style: Ln,
                    width: 'fit-content',
                    children: Object(D.jsx)(k.a, {
                      maxLength: 16,
                      value: ot,
                      error: !!un,
                      currency: z,
                      onUserInput: e => {
                        if (tt && 0 !== parseFloat(tt) && z && e) {
                          var t = Object(V.d)(tt, e, null === z || void 0 === z ? void 0 : z.decimals)
                          jt(Object(o.a)(Object(o.a)({}, pt), {}, { rate: t, invertRate: Object(V.a)(t) }))
                        }
                        it(e)
                      },
                      otherCurrency: R,
                      onMax: null,
                      onHalf: null,
                      estimatedUsd: Pn.output,
                      onFocus: Sn,
                      id: 'create-limit-order-input-tokenb',
                      onCurrencySelect: e => {
                        R && null !== e && void 0 !== e && e.equals(R)
                          ? Ve()
                          : (qe(e),
                            null === fe || void 0 === fe || fe(!0),
                            jt(Object(o.a)(Object(o.a)({}, pt), {}, { invertRate: '', rate: '' })))
                      },
                      positionMax: 'top',
                      showCommonBases: !0,
                      maxCurrencySymbolLength: 6,
                      filterWrap: !0,
                      onClickSelect: An,
                      disableCurrencySelect: Se,
                      label: Object(D.jsx)(Ne, { children: Object(D.jsx)(a.b, { id: 'You Buy' }) }),
                      positionLabel: 'in',
                    }),
                  }),
                  Number(Mt.rawPercent) >= G.b &&
                    Object(D.jsxs)(g.b, {
                      padding: '14px 18px',
                      color: Be.text,
                      alignItems: 'center',
                      style: { background: Object(x.d)(Be.subText, 0.2) },
                      sx: { borderRadius: '16px', gap: '8px' },
                      children: [
                        Object(D.jsx)(f.a, { size: 16, style: { flex: '0 0 16px' } }),
                        Object(D.jsx)(g.e, {
                          fontWeight: 400,
                          fontSize: 12,
                          color: Be.text,
                          children: Object(D.jsx)(a.b, {
                            id: 'Limit order price is >=30% higher than the market. We just want to make sure this is correct',
                          }),
                        }),
                      ],
                    }),
                  Mn.map((e, t) => Object(D.jsx)(q.a, { type: 'warn', title: e }, t)),
                  Object(D.jsx)(M, {
                    currencyIn: R,
                    approval: an,
                    showWrap: Bt,
                    isWrappingEth: qt,
                    isNotFillAllInput: jn,
                    approvalSubmitted: At,
                    hasInputError: bn,
                    enoughAllowance: rn,
                    checkingAllowance: pn,
                    wrapInputError: Ft,
                    approveCallback: cn,
                    onWrapToken: kn,
                    showPreview: () => {
                      R &&
                        z &&
                        ot &&
                        tt &&
                        mt &&
                        (ke(Object(o.a)(Object(o.a)({}, le.a), {}, { showConfirm: !0 })),
                        Se ||
                          ze(ie.a.LO_CLICK_REVIEW_PLACE_ORDER, {
                            from_token: R.symbol,
                            to_token: z.symbol,
                            from_network: We,
                            trade_qty: tt,
                          }))
                    },
                    showApproveFlow: Dn,
                    showWarning: Mn.length > 0,
                  }),
                ],
              }),
              Object(D.jsx)($, {
                flowState: we,
                onDismiss: xn,
                onSubmit: Se ? wn : Nn,
                currencyIn: R,
                currencyOut: z,
                inputAmount: tt,
                outputAmount: ot,
                expireAt: mn,
                rateInfo: pt,
                marketPrice: Dt,
                note: ve,
                warningMessage: Mn,
                percentDiff: Number(Mt.rawPercent),
              }),
              Object(D.jsx)(Ae, { defaultDate: _t, expire: Ot, isOpen: yt, onDismiss: hn, onSetDate: On }),
            ],
          })
        }
      t.b = Object(h.memo)(Me)
    },
    './src/components/swapv2/LimitOrder/ListOrder/SummaryNotify.tsx': function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return l
      }),
        n.d(t, 'a', function () {
          return u
        })
      var r = n('./node_modules/@lingui/react/esm/index.js'),
        s = n('./node_modules/@lingui/core/esm/index.js'),
        o = n('./node_modules/rebass/dist/index.esm.js'),
        i = n('./src/hooks/useTheme.ts'),
        a = n('./src/components/swapv2/LimitOrder/helpers.ts'),
        c = n('./src/components/swapv2/LimitOrder/type.ts'),
        d = n('./node_modules/react/jsx-runtime.js')
      function l(e) {
        var t,
          n = e.type,
          l = e.message,
          u = e.orders,
          b = void 0 === u ? [] : u,
          p = b.length > 1,
          j = b[0],
          m = j || {},
          x = m.makingAmount,
          h = m.makerAssetSymbol,
          O = m.takingAmount,
          f = m.takerAssetSymbol,
          g = m.filledTakingAmount,
          v = m.makerAssetDecimals,
          y = m.takerAssetDecimals,
          w = Object(i.a)(),
          k = j ? Object(a.g)(j, !1) : '',
          C = j ? Object(a.c)(g, O, y) : 0,
          _ = j
            ? Object(d.jsx)(r.b, {
                id: '<0>{0} {makerAssetSymbol}</0> and receive <1>{1} {takerAssetSymbol}</1> <2>at {takerAssetSymbol} price of {rate} {makerAssetSymbol}</2>',
                values: {
                  0: Object(a.f)(x, v),
                  1: Object(a.f)(O, y),
                  makerAssetSymbol: h,
                  takerAssetSymbol: f,
                  rate: k,
                },
                components: {
                  0: Object(d.jsx)(o.e, { as: 'span', fontWeight: 500 }),
                  1: Object(d.jsx)(o.e, { as: 'span', fontWeight: 500 }),
                  2: Object(d.jsx)(o.e, { as: 'span', color: w.subText }),
                },
              })
            : null,
          T = Object(d.jsx)('ul', {
            style: { padding: '5px 0px 0px 15px', margin: '0' },
            children: b.map(e =>
              Object(d.jsx)(
                'li',
                {
                  children: s.a._('{0} {1} to {2} {3}', {
                    0: Object(a.f)(e.makingAmount, e.makerAssetDecimals),
                    1: e.makerAssetSymbol,
                    2: Object(a.f)(e.takingAmount, e.takerAssetDecimals),
                    3: e.takerAssetSymbol,
                  }),
                },
                e.id,
              ),
            ),
          }),
          I =
            C && 0 !== parseFloat(C)
              ? Object(d.jsxs)(d.Fragment, {
                  children: [
                    Object(d.jsx)('br', {}),
                    Object(d.jsx)(r.b, { id: 'Your order was {filledPercent}% filled', values: { filledPercent: C } }),
                  ],
                })
              : null
        switch (n) {
          case c.a.CANCELLED:
            t = p
              ? Object(d.jsx)(r.b, {
                  id: 'Your orders below have successfully cancelled:<0/>{listOrderName}',
                  values: { listOrderName: T },
                  components: { 0: Object(d.jsx)('br', {}) },
                })
              : Object(d.jsx)(r.b, {
                  id: 'You have successfully cancelled an order to pay {mainMsg}{filledComponent}',
                  values: { mainMsg: _, filledComponent: I },
                })
            break
          case c.a.CANCELLED_FAILED:
            t = p
              ? Object(d.jsx)(r.b, {
                  id: 'Your orders below cancel failed:<0/>{listOrderName}',
                  values: { listOrderName: T },
                  components: { 0: Object(d.jsx)('br', {}) },
                })
              : Object(d.jsx)(r.b, { id: 'Cancel order to pay {mainMsg} failed', values: { mainMsg: _ } })
            break
          case c.a.FILLED:
            t = p
              ? Object(d.jsx)(r.b, {
                  id: 'Your orders below was successfully filled:<0/>{listOrderName}',
                  values: { listOrderName: T },
                  components: { 0: Object(d.jsx)('br', {}) },
                })
              : Object(d.jsx)(r.b, {
                  id: 'Your order to pay {mainMsg} was successfully filled',
                  values: { mainMsg: _ },
                })
            break
          case c.a.PARTIALLY_FILLED:
            t = Object(d.jsx)(r.b, {
              id: 'Your order to pay {mainMsg} is {filledPercent}% filled',
              values: { mainMsg: _, filledPercent: C },
            })
            break
          case c.a.EXPIRED:
            t = p
              ? Object(d.jsx)(r.b, {
                  id: 'Your orders below has expired:<0/>{listOrderName}',
                  values: { listOrderName: T },
                  components: { 0: Object(d.jsx)('br', {}) },
                })
              : Object(d.jsx)(r.b, {
                  id: 'Your order to pay {mainMsg} has expired{filledComponent}',
                  values: { mainMsg: _, filledComponent: I },
                })
        }
        return Object(d.jsx)(o.e, { color: w.text, lineHeight: '18px', children: l || t })
      }
      var u = e => {
        var t = e.currencyIn,
          n = e.currencyOut,
          s = e.inputAmount,
          c = e.outputAmount,
          l = Object(i.a)()
        return Object(d.jsx)(o.e, {
          color: l.text,
          lineHeight: '18px',
          children: Object(d.jsx)(r.b, {
            id: 'You have successfully placed an order to pay <0>{0} {1}</0> and receive <1>{2} {3} </1><2>at {4} price of {5} {6}.</2>',
            values: {
              0: Object(a.f)(s),
              1: t.symbol,
              2: Object(a.f)(c),
              3: n.symbol,
              4: t.symbol,
              5: Object(a.d)(s, c, n.decimals),
              6: n.symbol,
            },
            components: {
              0: Object(d.jsx)(o.e, { as: 'span', fontWeight: 500 }),
              1: Object(d.jsx)(o.e, { as: 'span', fontWeight: 500 }),
              2: Object(d.jsx)(o.e, { as: 'span', color: l.subText }),
            },
          }),
        })
      }
    },
    './src/components/swapv2/LimitOrder/ListOrder/index.tsx': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return gt
      })
      var r,
        s = n('./node_modules/@babel/runtime/helpers/esm/objectSpread2.js'),
        o = n('./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js'),
        i = n('./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js'),
        a = n('./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'),
        c = n('./node_modules/@babel/runtime/helpers/esm/slicedToArray.js'),
        d = n('./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'),
        l = n('./node_modules/@lingui/react/esm/index.js'),
        u = n('./node_modules/@lingui/core/esm/index.js'),
        b = n('./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js'),
        p = n('./node_modules/lodash/lodash.js'),
        j = n('./node_modules/polished/dist/polished.esm.js'),
        m = n('./node_modules/querystring-es3/index.js'),
        x = n('./node_modules/react/index.js'),
        h = n('./node_modules/react-device-detect/main.js'),
        O = n('./node_modules/react-feather/dist/icons/info.js'),
        f = n('./node_modules/react-feather/dist/icons/trash.js'),
        g = n('./node_modules/react-router/dist/index.js'),
        v = n('./node_modules/rebass/dist/index.esm.js'),
        y = n('./node_modules/styled-components/dist/styled-components.browser.esm.js'),
        w = n('./src/components/Announcement/type.ts'),
        k = n('./src/components/Button/index.tsx'),
        C = n('./src/components/Column/index.tsx'),
        _ = n('./src/components/LocalLoader/index.tsx'),
        T = n('./src/components/Pagination/index.tsx'),
        I = n('./node_modules/react-feather/dist/icons/search.js'),
        S = n('./src/hooks/useTheme.ts'),
        A = n('./node_modules/react/jsx-runtime.js'),
        E = y.default.div.withConfig({ displayName: 'SearchInput__SearchContainer', componentId: 'sc-1ysyl82-0' })(
          [
            'background:',
            ';border-radius:999px;width:320px;font-size:12px;padding:8px 12px;border:1px solid #52ccad;display:flex;align-items:center;gap:8px;> svg{cursor:pointer;}',
            '',
          ],
          e => e.theme.background,
          e => e.theme.mediaWidth.upToSmall(r || (r = Object(d.a)(['\n    width: 100%;\n  ']))),
        ),
        N = y.default.input.withConfig({ displayName: 'SearchInput__Input', componentId: 'sc-1ysyl82-1' })(
          [
            'outline:none;border:none;flex:1;color:',
            ';background:',
            ';text-overflow:ellipsis;max-width:calc(100% - 20px);:placeholder{color:',
            ';}',
          ],
          e => e.theme.text,
          e => e.theme.background,
          e => e.theme.disableText,
        )
      var L = n('./src/components/Select.tsx'),
        P = n('./src/components/SubscribeButton/index.tsx'),
        D = n('./src/constants/abis/limit_order.json'),
        M = n('./src/constants/index.ts'),
        R = n('./src/hooks/index.ts'),
        W = n('./src/hooks/useContract.ts'),
        F = n('./src/hooks/useMixpanel.ts'),
        B = n('./src/hooks/useParsedQueryString.ts'),
        U = n('./src/state/application/hooks.ts'),
        z = n('./src/state/limit/hooks.ts'),
        H = n('./src/state/tokenPrices/hooks.ts'),
        G = n('./src/state/transactions/hooks.tsx'),
        q = n('./src/state/transactions/type.ts'),
        V = n('./src/types/index.ts'),
        Y = n('./src/utils/index.ts'),
        K = n('./src/utils/firebase.ts'),
        $ = n('./src/utils/sendTransaction.ts'),
        Z = n('./src/utils/transaction.ts'),
        X = n('./node_modules/ethers/lib.esm/index.js'),
        Q = n('./node_modules/react-feather/dist/icons/x.js'),
        J = n('./src/components/Modal/index.tsx'),
        ee = n('./src/constants/styles.ts'),
        te = n('./src/hooks/Tokens.ts'),
        ne = n('./src/components/swapv2/LimitOrder/LimitOrderForm.tsx'),
        re = n('./src/components/swapv2/LimitOrder/helpers.ts'),
        se = n('./src/components/swapv2/LimitOrder/request.ts'),
        oe = n('./src/components/swapv2/LimitOrder/type.ts'),
        ie = y.default.div.withConfig({ displayName: 'EditOrderModal__Wrapper', componentId: 'sc-1oygvdn-0' })([
          'width:100%;padding:20px 22px;display:flex;flex-direction:column;gap:1rem;',
        ]),
        ae = Object(y.default)(ne.a).withConfig({
          displayName: 'EditOrderModal__StyledLabel',
          componentId: 'sc-1oygvdn-1',
        })(['margin-bottom:0;'])
      function ce(e) {
        var t,
          n,
          r = e.onCancelOrder,
          s = e.onDismiss,
          o = e.order,
          i = e.note,
          a = e.isOpen,
          d = e.flowState,
          u = e.setFlowState,
          b = e.refreshListOrder,
          p = Object(R.b)(),
          j = p.chainId,
          m = p.account,
          h = o.status,
          O = o.makingAmount,
          f = o.takingAmount,
          g = o.makerAsset,
          y = o.takerAsset,
          w = o.filledTakingAmount,
          k = o.expiredAt,
          C = null !== (t = Object(te.g)(g)) && void 0 !== t ? t : void 0,
          _ = null !== (n = Object(te.g)(y)) && void 0 !== n ? n : void 0,
          T = C ? X.ethers.utils.formatUnits(O, C.decimals) : '',
          I = _ ? X.ethers.utils.formatUnits(f, _.decimals) : '',
          S = T ? Object(re.k)(T) : T,
          E = I ? Object(re.k)(I) : I,
          N = new Date(1e3 * k),
          L = _ ? Object(re.d)(S, E, _.decimals) : '',
          P = { rate: L, invertRate: Object(re.a)(L), invert: !1 },
          D = _ ? Object(re.c)(w, f, _.decimals) : 0,
          M = Object(x.useState)(''),
          W = Object(c.a)(M, 2),
          F = W[0],
          B = W[1]
        return (
          Object(x.useEffect)(() => {
            C &&
              m &&
              Object(se.g)(j, C.wrapped.address, m)
                .then(e => {
                  var t = e.activeMakingAmount
                  return B(t)
                })
                .catch(console.error)
          }, [C, m, j]),
          Object(A.jsx)(J.a, {
            isOpen: a && !!C && !!_ && !!F,
            onDismiss: s,
            children: Object(A.jsxs)(ie, {
              children: [
                Object(A.jsxs)(v.b, {
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  children: [
                    Object(A.jsx)(v.e, { children: Object(A.jsx)(l.b, { id: 'Edit Order' }) }),
                    Object(A.jsx)(Q.a, { style: { cursor: 'pointer' }, onClick: s }),
                  ],
                }),
                Object(A.jsxs)('div', {
                  children: [
                    Object(A.jsx)(ae, {
                      children: Object(A.jsx)(l.b, {
                        id: 'Editing this order will automatically cancel your existing order and a new order will be created.',
                      }),
                    }),
                    h === oe.a.PARTIALLY_FILLED &&
                      Object(A.jsx)(ae, {
                        style: { marginTop: '0.75rem' },
                        children: Object(A.jsx)(l.b, {
                          id: 'Your currently existing order is {filled}% filled.',
                          values: { filled: D },
                        }),
                      }),
                  ],
                }),
                Object(A.jsx)(ne.b, {
                  zIndexToolTip: ee.a.MODAL,
                  flowState: d,
                  setFlowState: u,
                  currencyIn: C,
                  currencyOut: _,
                  isEdit: !0,
                  defaultInputAmount: S,
                  defaultOutputAmount: E,
                  defaultActiveMakingAmount: F,
                  defaultRate: P,
                  onDismissModalEdit: s,
                  onCancelOrder: r,
                  refreshListOrder: b,
                  note: i,
                  orderInfo: o,
                  defaultExpire: N,
                }),
              ],
            }),
          })
        )
      }
      var de = n('./src/components/Logo/index.tsx'),
        le = n('./src/components/TransactionConfirmationModal/index.tsx'),
        ue = n('./src/hooks/useBaseTradeInfo.ts'),
        be = n('./src/components/swapv2/LimitOrder/Modals/styled.tsx'),
        pe = { width: 20, height: 20 }
      function je(e) {
        var t = e.isCancelAll,
          n = e.order,
          r = e.marketPrice,
          s = e.onSubmit,
          o = e.onDismiss,
          i = Object(S.a)(),
          a = null !== n && void 0 !== n ? n : {},
          c = a.takerAssetLogoURL,
          d = a.makerAssetSymbol,
          b = a.takerAssetSymbol,
          p = a.makerAssetLogoURL,
          j = a.makingAmount,
          m = a.takingAmount,
          h = a.filledTakingAmount,
          O = a.status,
          f = a.makerAssetDecimals,
          g = a.takerAssetDecimals,
          y = Object(x.useMemo)(
            () =>
              n
                ? [
                    { label: u.a._('I want to cancel my order where'), content: Object(A.jsx)(be.h, {}) },
                    {
                      label: u.a._('I pay'),
                      content: Object(A.jsxs)(be.h, {
                        children: [
                          Object(A.jsx)(de.b, { srcs: [p], style: pe }),
                          Object(A.jsxs)(v.e, { children: [Object(re.f)(j, f), ' ', d] }),
                        ],
                      }),
                    },
                    {
                      label: u.a._('and receive'),
                      content: Object(A.jsxs)(be.h, {
                        children: [
                          Object(A.jsx)(de.b, { srcs: [c], style: pe }),
                          Object(A.jsxs)(v.e, { children: [Object(re.f)(m, g), ' ', b] }),
                        ],
                      }),
                    },
                    { label: u.a._('at'), content: Object(A.jsx)(be.g, { order: n }) },
                  ]
                : [],
            [p, d, j, c, b, m, n, f, g],
          )
        return Object(A.jsxs)(be.a, {
          children: [
            Object(A.jsx)(be.b, { title: u.a._('Cancel Order'), onDismiss: o }),
            t
              ? Object(A.jsx)(be.c, {
                  children: Object(A.jsx)(l.b, { id: 'Are you sure you want to cancel all orders?' }),
                })
              : Object(A.jsxs)(A.Fragment, {
                  children: [
                    Object(A.jsx)(be.d, { listData: y }),
                    Object(A.jsx)(be.e, { marketPrice: r, symbolIn: d, symbolOut: b }),
                  ],
                }),
            Object(A.jsx)(be.f, {
              note: u.a._('Note: Cancelling an order will cost gas fees. {0}', {
                0:
                  O === oe.a.PARTIALLY_FILLED
                    ? 'Your currently existing order is '.concat(Object(re.c)(h, m, g), '% filled')
                    : null,
              }),
            }),
            Object(A.jsx)(k.e, {
              onClick: s,
              style: { background: i.red },
              children: Object(A.jsx)(l.b, { id: 'Cancel' }),
            }),
          ],
        })
      }
      function me(e) {
        var t = e.onSubmit,
          n = e.onDismiss,
          r = e.flowState,
          s = e.order,
          o = e.isOpen,
          i = e.isCancelAll,
          a = Object(te.g)(null === s || void 0 === s ? void 0 : s.makerAsset) || void 0,
          c = Object(te.g)(null === s || void 0 === s ? void 0 : s.takerAsset) || void 0,
          d = Object(ue.a)(a, c).tradeInfo,
          l = Object(x.useCallback)(
            () =>
              r.errorMessage
                ? Object(A.jsx)(le.c, { onDismiss: n, message: r.errorMessage })
                : Object(A.jsx)(je, { onSubmit: t, onDismiss: n, marketPrice: d, isCancelAll: i, order: s }),
            [n, r.errorMessage, t, s, d, i],
          )
        return Object(A.jsx)(le.e, {
          maxWidth: 450,
          hash: r.txHash,
          isOpen: r.showConfirm && o,
          onDismiss: n,
          attemptingTxn: r.attemptingTxn,
          content: l,
          pendingText: r.pendingText || u.a._('Canceling order'),
        })
      }
      var xe = n('./src/components/swapv2/LimitOrder/const.ts'),
        he = n('./src/components/swapv2/LimitOrder/useCancellingOrders.ts'),
        Oe = n('./node_modules/@kyberswap/ks-sdk-core/dist/index.js'),
        fe = n('./node_modules/dayjs/dayjs.min.js'),
        ge = n.n(fe),
        ve = n('./node_modules/react-feather/dist/icons/repeat.js'),
        ye = n('./node_modules/react-use/esm/useMedia.js'),
        we = n('./src/components/InfoHelper/index.tsx'),
        ke = y.default.div.withConfig({ displayName: 'ProgressBar__Wrapper', componentId: 'sc-1jkncqt-0' })(
          ['border-radius:999px;height:', ';width:', ';background:', ';position:relative;'],
          e => e.height,
          e => e.width,
          e => e.background || 'rgba(182, 182, 182, 0.2)',
        ),
        Ce = y.default.div.withConfig({ displayName: 'ProgressBar__Bar', componentId: 'sc-1jkncqt-1' })(
          ['border-radius:999px;height:100%;background:', ';width:', '%;', ';position:absolute;left:0;top:0;'],
          e => {
            var t = e.theme
            return e.color || t.primary
          },
          e => e.percent,
          e => 0 !== e.percent && 'min-width: 8px;',
        )
      function _e(e) {
        var t = e.percent,
          n = e.color,
          r = e.valueColor,
          s = e.label,
          o = e.value,
          i = e.height,
          a = void 0 === i ? '6px' : i,
          c = e.labelColor,
          d = e.backgroundColor,
          l = e.width,
          u = Object(S.a)()
        return Object(A.jsxs)(v.b, {
          flexDirection: 'column',
          style: { gap: 5 },
          children: [
            s && o
              ? Object(A.jsxs)(v.b, {
                  justifyContent: 'space-between',
                  fontSize: 12,
                  color: c || u.subText,
                  lineHeight: 'normal',
                  children: [s, ' ', Object(A.jsx)(v.e, { color: r || u.subText, children: o })],
                })
              : null,
            Object(A.jsx)(ke, {
              height: a,
              width: null !== l && void 0 !== l ? l : 'unset',
              background: d,
              children: Object(A.jsx)(Ce, { percent: Math.min(100, t < 0.5 ? 0 : t), color: n }),
            }),
          ],
        })
      }
      var Te,
        Ie,
        Se = n('./src/state/wallet/hooks.ts'),
        Ae = n('./src/theme/index.tsx'),
        Ee = n('./src/utils/currencyAmount.ts'),
        Ne = n('./node_modules/react-feather/dist/icons/edit-3.js'),
        Le = n('./node_modules/react-feather/dist/icons/external-link.js'),
        Pe = n('./src/components/ArrowRotate.tsx'),
        De = n('./src/components/Copy/index.tsx'),
        Me = n('./src/components/Tooltip/index.tsx'),
        Re = y.default.div.withConfig({ displayName: 'ActionButtons__IconWrap', componentId: 'sc-gdrh68-0' })(
          [
            'background-color:',
            ';',
            ';border-radius:24px;padding:7px 8px 5px 8px;margin-left:5px;height:30px;width:30px;display:flex;align-items:center;justify-content:center;',
          ],
          e => {
            var t = e.color,
              n = e.isDisabled,
              r = e.theme
            return t ? ''.concat(Object(j.d)(n ? r.subText : t, 0.2)) : 'transparent'
          },
          e =>
            e.isDisabled
              ? Object(y.css)(['filter:grayscale(1);pointer-events:none;cursor:not-allowed;'])
              : Object(y.css)(['cursor:pointer;']),
        ),
        We = e => {
          var t = e.order,
            n = e.expand,
            r = e.onExpand,
            s = e.txHash,
            o = e.isChildren,
            i = e.itemStyle,
            a = void 0 === i ? {} : i,
            c = e.onCancelOrder,
            d = e.onEditOrder,
            l = e.isCancelling,
            b = void 0 !== l && l,
            p = Object(R.b)().networkInfo,
            j = Object(S.a)(),
            m = t.status,
            x = t.chainId,
            h = t.transactions,
            O = void 0 === h ? [] : h,
            g = Object(re.j)(m),
            y = O.length,
            w =
              ((g && y >= 1) || (!g && y > 1)) && !o
                ? Object(A.jsx)(Re, {
                    color: j.subText,
                    onClick: r,
                    style: a,
                    children: Object(A.jsx)(Pe.a, { rotate: !!n, color: j.subText }),
                  })
                : null,
            k = !o && [oe.a.CANCELLED, oe.a.CANCELLING, oe.a.EXPIRED].includes(m),
            C = b
          return Object(A.jsx)(v.b, {
            alignItems: 'center',
            children:
              g && !o
                ? Object(A.jsxs)(A.Fragment, {
                    children: [
                      0 === y &&
                        Object(A.jsx)(Me.b, {
                          text: C ? '' : u.a._('Edit'),
                          placement: 'top',
                          width: '60px',
                          children: Object(A.jsx)(Re, {
                            color: j.primary,
                            style: a,
                            onClick: () => (null === d || void 0 === d ? void 0 : d(t)),
                            isDisabled: C,
                            children: Object(A.jsx)(Ne.a, { color: C ? j.border : j.primary, size: 15 }),
                          }),
                        }),
                      Object(A.jsx)(Me.b, {
                        text: C ? '' : u.a._('Cancel'),
                        placement: 'top',
                        width: '80px',
                        children: Object(A.jsx)(Re, {
                          color: j.red,
                          style: a,
                          isDisabled: C,
                          onClick: () => (null === c || void 0 === c ? void 0 : c(t)),
                          children: Object(A.jsx)(f.a, { color: C ? j.border : j.red, size: 15 }),
                        }),
                      }),
                      w,
                    ],
                  })
                : Object(A.jsxs)(A.Fragment, {
                    children: [
                      (y <= 1 || o) &&
                        Object(A.jsxs)(A.Fragment, {
                          children: [
                            Object(A.jsx)(Me.b, {
                              text: k ? '' : u.a._('Copy Txn Hash'),
                              placement: 'top',
                              width: '135px',
                              children: Object(A.jsx)(Re, {
                                color: o ? '' : j.subText,
                                isDisabled: k,
                                style: a,
                                children: Object(A.jsx)(De.a, {
                                  toCopy: s,
                                  style: { color: k ? j.border : j.subText, margin: 0 },
                                  size: '15',
                                }),
                              }),
                            }),
                            Object(A.jsx)(Me.b, {
                              text: k ? '' : p.etherscanName,
                              placement: 'top',
                              width: 'fit-content',
                              children: Object(A.jsx)(Re, {
                                color: o ? '' : j.primary,
                                isDisabled: k,
                                style: a,
                                children: Object(A.jsx)(Ae.d, {
                                  href: x ? Object(Y.n)(x, s, 'transaction') : '',
                                  children: Object(A.jsx)(Le.a, { size: 15, color: k ? j.border : j.primary }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      w && Object(A.jsxs)(A.Fragment, { children: [!o && Object(A.jsx)(Re, { color: '' }), w] }),
                    ],
                  }),
          })
        },
        Fe = y.default.div.withConfig({ displayName: 'OrderItem__ItemWrapper', componentId: 'sc-ya3478-0' })(
          [
            'border-bottom:1px solid ',
            ';font-size:12px;padding:10px;grid-template-columns:1.5fr 1fr 1.5fr 2fr 80px;display:grid;gap:10px;align-items:center;',
            '',
          ],
          e => {
            var t = e.theme
            return e.hasBorder ? t.border : 'transparent'
          },
          e =>
            e.theme.mediaWidth.upToLarge(
              Te ||
                (Te = Object(d.a)([
                  '\n    grid-template-columns: 1.5fr 1.5fr 1.5fr 80px;\n    .rate {\n      display:none;\n    }\n  ',
                ])),
            ),
        ),
        Be = y.default.div.withConfig({ displayName: 'OrderItem__ItemWrapperMobile', componentId: 'sc-ya3478-1' })(
          [
            'display:flex;font-size:12px;flex-direction:column;justify-content:space-between;gap:14px;padding:20px 0px;border-bottom:1px solid ',
            ';',
          ],
          e => e.theme.border,
        ),
        Ue = y.default.div.withConfig({ displayName: 'OrderItem__DeltaAmount', componentId: 'sc-ya3478-2' })(
          ['font-weight:500;color:', ';'],
          e => e.color,
        ),
        ze = y.default.div.withConfig({ displayName: 'OrderItem__Colum', componentId: 'sc-ya3478-3' })(
          ['display:flex;flex-direction:column;gap:10px 12px;justify-content:center;', ''],
          e => e.theme.mediaWidth.upToSmall(Ie || (Ie = Object(d.a)(['\n      gap: 5px 12px;\n  ']))),
        ),
        He = e => {
          var t = e.time,
            n = e.style,
            r = void 0 === n ? {} : n,
            s = Object(S.a)()
          return Object(A.jsxs)(v.b, {
            fontWeight: '500',
            color: s.subText,
            style: r,
            children: [
              Object(A.jsx)(v.e, { children: ge()(1e3 * t).format('DD/MM/YYYY') }),
              '\xa0 ',
              Object(A.jsx)(v.e, { children: ge()(1e3 * t).format('HH:mm') }),
            ],
          })
        },
        Ge = '17px',
        qe = Object(y.default)(de.b).withConfig({ displayName: 'OrderItem__TokenLogo', componentId: 'sc-ya3478-4' })(
          ['width:', ';height:', ';border-radius:100%;margin-right:8px;'],
          Ge,
          Ge,
        ),
        Ve = e => {
          var t = e.amount,
            n = e.color,
            r = e.logoUrl,
            s = e.symbol,
            o = e.plus,
            i = void 0 === o || o,
            a = e.hideLogo,
            c = void 0 !== a && a,
            d = e.decimals
          return Object(A.jsxs)(v.b, {
            alignItems: 'center',
            children: [
              !c && Object(A.jsx)(qe, { srcs: [r] }),
              Object(A.jsxs)(Ue, { color: n, children: [i ? '+' : '-', ' ', Object(re.f)(t, d), ' ', s || '???'] }),
            ],
          })
        },
        Ye = e => {
          var t = e.order,
            n = t.makerAssetSymbol,
            r = t.makerAssetLogoURL,
            s = t.takerAssetLogoURL,
            o = t.takerAssetSymbol,
            i = t.makingAmount,
            a = t.takingAmount,
            c = t.makerAssetDecimals,
            d = t.takerAssetDecimals,
            l = Object(S.a)()
          return Object(A.jsxs)(ze, {
            children: [
              Object(A.jsx)(Ve, { decimals: d, color: l.primary, logoUrl: s, amount: a, symbol: o }),
              Object(A.jsx)(Ve, { decimals: c, plus: !1, color: l.border, logoUrl: r, amount: i, symbol: n }),
            ],
          })
        },
        Ke = e => {
          var t = e.order,
            n = e.style,
            r = void 0 === n ? {} : n,
            s = Object(x.useState)(!1),
            o = Object(c.a)(s, 2),
            i = o[0],
            a = o[1],
            d = Object(S.a)(),
            l = t.makerAssetSymbol || '???',
            u = t.takerAssetSymbol || '???'
          return Object(A.jsxs)(ze, {
            style: r,
            children: [
              Object(A.jsxs)(v.b, {
                style: { gap: 6, cursor: 'pointer', alignItems: 'center' },
                onClick: () => a(!i),
                children: [
                  Object(A.jsx)(v.e, {
                    color: d.subText,
                    children: i ? ''.concat(l, '/').concat(u) : ''.concat(u, '/').concat(l),
                  }),
                  Object(A.jsx)(ve.a, { color: d.subText, size: 12 }),
                ],
              }),
              Object(A.jsx)(v.e, { color: d.text, children: Object(re.g)(t, i) }),
            ],
          })
        }
      function $e(e) {
        return (e = e.replace('_', ' ')).charAt(0).toUpperCase() + e.slice(1)
      }
      function Ze(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          r = e.takingAmount,
          s = e.filledTakingAmount,
          o = e.takerAssetDecimals,
          i = Object(re.c)(s, r, o),
          a = t ? oe.a.CANCELLING : e.status,
          c = a === oe.a.PARTIALLY_FILLED,
          d = [oe.a.EXPIRED, oe.a.CANCELLED, oe.a.CANCELLING].includes(a)
            ? ' | '.concat($e(a))
            : n && a !== oe.a.FILLED
            ? ', '.concat(u.a._('insufficient funds'))
            : ''
        return ''
          .concat(c ? u.a._('Partially Filled') : u.a._('Filled'), ' ')
          .concat(i, '%')
          .concat(d)
      }
      var Xe = y.default.div.withConfig({ displayName: 'OrderItem__IndexText', componentId: 'sc-ya3478-5' })(
          ['width:18px;text-align:cent\u1ebb;font-weight:500;color:', ';'],
          e => e.theme.subText,
        ),
        Qe = y.default.span.withConfig({ displayName: 'OrderItem__WarningText', componentId: 'sc-ya3478-6' })(
          ['color:', ';'],
          e => e.theme.warning,
        )
      function Je(e) {
        var t,
          n,
          r = e.order,
          s = e.index,
          o = e.onCancelOrder,
          i = e.onEditOrder,
          a = e.isOrderCancelling,
          d = e.tokenPrices,
          u = Object(x.useState)(!1),
          b = Object(c.a)(u, 2),
          p = b[0],
          j = b[1],
          m = Object(ye.a)('(max-width: '.concat(Ae.i.upToSmall, 'px)')),
          h = a(r),
          O = r.createdAt,
          f = void 0 === O ? Date.now() : O,
          g = r.expiredAt,
          y = void 0 === g ? Date.now() : g,
          w = r.takingAmount,
          k = r.filledTakingAmount,
          C = r.transactions,
          _ = void 0 === C ? [] : C,
          T = r.takerAssetSymbol,
          I = r.takerAssetDecimals,
          E = h ? oe.a.CANCELLING : r.status,
          N = gt(r),
          L = Object(re.c)(k, w, I),
          P = Object(S.a)(),
          D = Object(x.useMemo)(
            () => new Oe.Token(r.chainId, r.makerAsset, r.makerAssetDecimals, r.makerAssetSymbol, ''),
            [r.chainId, r.makerAsset, r.makerAssetDecimals, r.makerAssetSymbol],
          ),
          M = Object(Se.e)(D),
          R = (function (e) {
            var t = new Oe.Token(e.chainId, e.makerAsset, e.makerAssetDecimals, e.makerAssetSymbol, ''),
              n = Object(Ee.b)(t, e.makingAmount),
              r = Object(Ee.b)(t, e.filledMakingAmount)
            return n.subtract(r)
          })(r),
          W = !!M && M.lessThan(R),
          F = (function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              r = {
                [oe.a.FILLED]: t.primary,
                [oe.a.CANCELLED]: t.red,
                [oe.a.CANCELLING]: t.red,
                [oe.a.EXPIRED]: t.warning,
                [oe.a.PARTIALLY_FILLED]: t.warning,
              },
              s = r[e]
            return s || (n ? t.warning : void 0)
          })(E, P, W),
          B = null !== (t = null === (n = _[0]) || void 0 === n ? void 0 : n.txHash) && void 0 !== t ? t : '',
          U = () => j(e => !e),
          z = d[r.takerAsset] / d[r.makerAsset],
          H = ((z - Number(Object(re.g)(r, !1))) / z) * 100,
          G = () =>
            Object(A.jsxs)(ze, {
              children: [
                Object(A.jsxs)(v.b, {
                  alignItems: 'center',
                  color: F,
                  sx: { gap: '4px' },
                  children: [
                    N &&
                      W &&
                      Object(A.jsx)(we.a, {
                        style: { marginLeft: 0 },
                        placement: 'top',
                        color: F,
                        text: (() => {
                          var e = [
                            Object(A.jsx)(
                              l.b,
                              {
                                id: 'Insufficient {0} balance for order execution.',
                                values: { 0: r.makerAssetSymbol },
                              },
                              0,
                            ),
                          ]
                          return (
                            Number.isFinite(H) &&
                              H < 0 &&
                              (e.push(Object(A.jsx)(A.Fragment, { children: ' ' })),
                              e.push(
                                Object(A.jsx)(
                                  l.b,
                                  {
                                    id: 'Once you add {0}, the order will be executed at <0>{1}%</0> below the market price.',
                                    values: { 0: r.makerAssetSymbol, 1: H.toFixed(2) },
                                    components: { 0: Object(A.jsx)(Qe, {}) },
                                  },
                                  1,
                                ),
                              )),
                            e
                          )
                        })(),
                      }),
                    ' ',
                    Ze(r, h, W),
                  ],
                }),
                Object(A.jsx)(_e, {
                  width: m ? '160px' : 'unset',
                  backgroundColor: P.subText,
                  color: F,
                  height: '11px',
                  percent: isNaN(parseFloat(L)) ? 0 : parseFloat(L),
                }),
              ],
            })
        return m
          ? Object(A.jsxs)(Be, {
              children: [
                Object(A.jsxs)(v.b, {
                  justifyContent: 'space-between',
                  children: [
                    Object(A.jsx)(Ye, { order: r }),
                    Object(A.jsx)(We, {
                      order: r,
                      txHash: B,
                      onExpand: U,
                      expand: p,
                      onCancelOrder: o,
                      onEditOrder: i,
                      isCancelling: h,
                    }),
                  ],
                }),
                Object(A.jsxs)(v.b, {
                  justifyContent: 'space-between',
                  children: [G(), Object(A.jsx)(Ke, { order: r, style: { textAlign: 'right' } })],
                }),
                p &&
                  Object(A.jsx)('div', {
                    children: _.map(e =>
                      Object(A.jsxs)(
                        v.b,
                        {
                          style: { justifyContent: 'space-between' },
                          children: [
                            Object(A.jsx)(Ve, {
                              decimals: I,
                              color: P.subText,
                              logoUrl: r.takerAssetLogoURL,
                              amount: e.takingAmount,
                              symbol: T,
                              hideLogo: !0,
                            }),
                            Object(A.jsxs)(v.b, {
                              alignItems: 'center',
                              children: [
                                Object(A.jsx)(He, { time: e.txTime, style: { marginRight: '7px' } }),
                                Object(A.jsx)(We, { itemStyle: { margin: 0 }, order: r, txHash: B, isChildren: !0 }),
                              ],
                            }),
                          ],
                        },
                        e.txHash,
                      ),
                    ),
                  }),
                Object(A.jsxs)(v.b, {
                  justifyContent: 'space-between',
                  children: [
                    Object(A.jsxs)(ze, {
                      children: [
                        Object(A.jsx)(v.e, { children: Object(A.jsx)(l.b, { id: 'Created' }) }),
                        Object(A.jsx)(He, { time: f }),
                      ],
                    }),
                    Object(A.jsxs)(ze, {
                      children: [
                        Object(A.jsx)(v.e, { textAlign: 'right', children: Object(A.jsx)(l.b, { id: 'Expiry' }) }),
                        Object(A.jsx)(He, { time: r.expiredAt }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          : Object(A.jsxs)(A.Fragment, {
              children: [
                Object(A.jsxs)(Fe, {
                  hasBorder: !_.length || !p,
                  children: [
                    Object(A.jsxs)(v.b, {
                      alignItems: 'center',
                      style: { gap: 10 },
                      children: [Object(A.jsx)(Xe, { children: s + 1 }), Object(A.jsx)(Ye, { order: r })],
                    }),
                    Object(A.jsx)(ze, { className: 'rate', children: Object(A.jsx)(Ke, { order: r }) }),
                    Object(A.jsxs)(ze, { children: [Object(A.jsx)(He, { time: f }), Object(A.jsx)(He, { time: y })] }),
                    Object(A.jsx)(ze, { children: G() }),
                    Object(A.jsx)(We, {
                      order: r,
                      onExpand: U,
                      expand: p,
                      txHash: B,
                      onCancelOrder: o,
                      onEditOrder: i,
                      isCancelling: h,
                    }),
                  ],
                }),
                p &&
                  Object(A.jsx)(v.b, {
                    flexDirection: 'column',
                    style: { paddingBottom: 10, borderBottom: '1px solid '.concat(P.border) },
                    children: _.map((e, t) => {
                      var n = Object(re.c)(e.takingAmount, w, I)
                      return Object(A.jsxs)(
                        Fe,
                        {
                          hasBorder: !1,
                          style: { paddingTop: 0, paddingBottom: 0 },
                          children: [
                            Object(A.jsxs)(v.b, {
                              alignItems: 'center',
                              style: { gap: 10 },
                              children: [
                                Object(A.jsx)(Xe, {}),
                                Object(A.jsxs)(v.b, {
                                  children: [
                                    Object(A.jsx)('div', { style: { width: Ge, marginRight: 8 } }),
                                    Object(A.jsxs)(Ue, {
                                      color: P.subText,
                                      children: ['+ ', Object(re.f)(e.takingAmount, I), ' ', T],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(A.jsx)(ze, { className: 'rate' }),
                            Object(A.jsx)(ze, { children: Object(A.jsx)(He, { time: e.txTime }) }),
                            Object(A.jsx)(ze, { children: Object(A.jsxs)(v.e, { color: F, children: [n, '%'] }) }),
                            Object(A.jsx)(We, { order: r, txHash: e.txHash, isChildren: !0 }),
                          ],
                        },
                        e.txHash,
                      )
                    }),
                  }),
              ],
            })
      }
      var et,
        tt,
        nt,
        rt,
        st,
        ot,
        it,
        at,
        ct = n('./src/components/swapv2/LimitOrder/ListOrder/SummaryNotify.tsx'),
        dt = y.default.div.withConfig({ displayName: 'TabSelector__TabItem', componentId: 'sc-19inu2g-0' })(
          [
            "text-align:center;height:fit-content;padding:4px 12px;font-family:'Work Sans';font-style:normal;font-weight:500;font-size:14px;line-height:20px;color:",
            ';cursor:pointer;user-select:none;border-radius:20px;transition:all 150ms;',
            '',
          ],
          e => e.theme.subText,
          e => {
            var t = e.isActive,
              n = e.theme
            return (
              t &&
              Object(y.css)(['font-weight:500;text-align:center;color:', ';background:', ';'], n.text, n.buttonGray)
            )
          },
        ),
        lt = e => {
          var t = e.className,
            n = e.activeTab,
            r = e.setActiveTab
          return Object(A.jsxs)(v.b, {
            className: t,
            children: [
              Object(A.jsx)(dt, {
                isActive: n === oe.a.ACTIVE,
                role: 'button',
                onClick: () => {
                  r(oe.a.ACTIVE)
                },
                children: Object(A.jsx)(l.b, { id: 'Active Orders' }),
              }),
              Object(A.jsx)(dt, {
                isActive: n === oe.a.CLOSED,
                role: 'button',
                onClick: () => {
                  r(oe.a.CLOSED)
                },
                children: Object(A.jsx)(l.b, { id: 'Order History' }),
              }),
            ],
          })
        },
        ut = Object(y.default)(Fe).withConfig({ displayName: 'TableHeader__Header', componentId: 'sc-cwhbey-0' })(
          [
            'background-color:',
            ';color:',
            ';border-radius:20px 20px 0px 0px;font-size:12px;font-weight:500;padding:16px 12px;border-bottom:none;',
            ';',
          ],
          e => e.theme.tableHeader,
          e => e.theme.subText,
          e =>
            e.theme.mediaWidth.upToSmall(
              et ||
                (et = Object(d.a)([
                  '\n    border-radius: 0px;\n    padding-left: 30px;\n    margin-left: -30px;\n    width: 110vw;\n  ',
                ])),
            ),
        ),
        bt = () => {
          var e = Object(ye.a)('(max-width: '.concat(Ae.i.upToSmall, 'px)'))
          return Object(A.jsx)(ut, {
            children: e
              ? Object(A.jsx)(v.e, { children: Object(A.jsx)(l.b, { id: 'TRADE' }) })
              : Object(A.jsxs)(A.Fragment, {
                  children: [
                    Object(A.jsx)(v.b, {
                      alignItems: 'center',
                      style: { gap: 10 },
                      children: Object(A.jsx)(v.e, { children: Object(A.jsx)(l.b, { id: 'TRADE' }) }),
                    }),
                    Object(A.jsx)(v.e, { className: 'rate', children: Object(A.jsx)(l.b, { id: 'RATE' }) }),
                    Object(A.jsx)(v.e, { children: Object(A.jsx)(l.b, { id: 'CREATED | EXPIRY' }) }),
                    Object(A.jsx)(v.e, { children: Object(A.jsx)(l.b, { id: 'FILLED % | STATUS' }) }),
                    Object(A.jsx)(v.e, { textAlign: 'center', children: Object(A.jsx)(l.b, { id: 'ACTION' }) }),
                  ],
                }),
          })
        },
        pt = ['tab'],
        jt = Object(y.default)(k.d).withConfig({
          displayName: 'ListOrder__ButtonCancelAll',
          componentId: 'sc-1tsyau7-0',
        })(
          ['background-color:', ';color:', ';font-size:14px;width:fit-content;padding:8px 14px;', ';'],
          e => {
            var t = e.theme
            return Object(j.d)(t.red, 0.2)
          },
          e => e.theme.red,
          e => e.theme.mediaWidth.upToSmall(tt || (tt = Object(d.a)(['\n   width: 100%;\n   padding: 10px;\n  ']))),
        ),
        mt = y.default.div.withConfig({ displayName: 'ListOrder__NoResultWrapper', componentId: 'sc-1tsyau7-1' })(
          ['display:flex;flex-direction:column;align-items:center;color:', ';margin-top:40px;', ';'],
          e => e.theme.subText,
          e => e.theme.mediaWidth.upToMedium(nt || (nt = Object(d.a)(['\n   margin-top: 16px;\n  ']))),
        ),
        xt = y.default.div.withConfig({ displayName: 'ListOrder__TableFooterWrapper', componentId: 'sc-1tsyau7-2' })(
          ['display:flex;justify-content:space-between;align-items:center;gap:1rem;', ';'],
          e => e.theme.mediaWidth.upToSmall(rt || (rt = Object(d.a)(['\n    flex-direction: column-reverse;\n  ']))),
        ),
        ht = y.default.div.withConfig({ displayName: 'ListOrder__SearchFilter', componentId: 'sc-1tsyau7-3' })(
          ['gap:16px;margin-top:24px;display:flex;', ';'],
          e => e.theme.mediaWidth.upToSmall(st || (st = Object(d.a)(['\n    gap: 8px;\n  ']))),
        ),
        Ot = Object(y.default)(L.a).withConfig({ displayName: 'ListOrder__SelectFilter', componentId: 'sc-1tsyau7-4' })(
          ['background:', ';border-radius:40px;max-width:50%;font-size:14px;width:180px;', ';', ';'],
          e => e.theme.background,
          e => e.theme.mediaWidth.upToMedium(ot || (ot = Object(d.a)(['\n     width: 160px;\n  ']))),
          e => e.theme.mediaWidth.upToExtraSmall(it || (it = Object(d.a)(['\n     width: 40%;\n  ']))),
        ),
        ft = Object(y.default)(function (e) {
          var t = e.value,
            n = e.maxLength,
            r = void 0 === n ? 255 : n,
            s = e.onChange,
            o = e.placeholder,
            i = e.style,
            a = void 0 === i ? {} : i,
            c = e.className,
            d = Object(S.a)()
          return Object(A.jsxs)(E, {
            style: a,
            className: c,
            children: [
              Object(A.jsx)(N, { placeholder: o, maxLength: r, value: t, onChange: e => s(e.target.value) }),
              Object(A.jsx)(I.a, { color: d.subText, size: 16, style: { minWidth: 16 } }),
            ],
          })
        }).withConfig({ displayName: 'ListOrder__SearchInputWrapped', componentId: 'sc-1tsyau7-5' })(
          ['flex:1;', ';'],
          e => e.theme.mediaWidth.upToExtraSmall(at || (at = Object(d.a)(['\n     width: 60%;\n  ']))),
        ),
        gt = e => ![oe.a.FILLED, oe.a.CANCELLED, oe.a.CANCELLING, oe.a.EXPIRED].includes(e.status)
      t.b = Object(x.forwardRef)(function (e, t) {
        var n,
          r = Object(R.b)(),
          d = r.account,
          j = r.chainId,
          y = r.networkInfo,
          k = Object(R.e)().library,
          I = Object(x.useState)(1),
          S = Object(c.a)(I, 2),
          E = S[0],
          N = S[1],
          L = Object(B.a)(),
          X = L.tab,
          Q = Object(a.a)(L, pt),
          J = Object(x.useState)(null !== X && void 0 !== X ? X : oe.a.ACTIVE),
          ee = Object(c.a)(J, 2),
          te = ee[0],
          ne = ee[1],
          ie = Object(x.useState)(''),
          ae = Object(c.a)(ie, 2),
          de = ae[0],
          le = ae[1],
          ue = Object(x.useState)(!1),
          be = Object(c.a)(ue, 2),
          pe = be[0],
          je = be[1],
          Oe = Object(x.useState)(!1),
          fe = Object(c.a)(Oe, 2),
          ge = fe[0],
          ve = fe[1],
          ye = Object(W.c)(null !== (n = Object(Y.o)(j)) && void 0 !== n ? n : '', D),
          we = Object(U.k)(),
          ke = Object(z.b)().ordersUpdating,
          Ce = Object(G.g)(),
          _e = Object(he.a)(),
          Te = _e.isOrderCancelling,
          Ie = _e.setCancellingOrders,
          Se = _e.cancellingOrdersIds,
          Ae = Object(G.c)(),
          Ee = Object(F.c)().mixpanelHandler,
          Ne = Object(x.useState)([]),
          Le = Object(c.a)(Ne, 2),
          Pe = Le[0],
          De = Le[1],
          Me = Object(x.useState)(0),
          Re = Object(c.a)(Me, 2),
          We = Re[0],
          Fe = Re[1],
          Be = Object(x.useState)(V.a),
          Ue = Object(c.a)(Be, 2),
          ze = Ue[0],
          He = Ue[1],
          Ge = Object(x.useState)(),
          qe = Object(c.a)(Ge, 2),
          Ve = qe[0],
          Ye = qe[1],
          Ke = Object(x.useState)(!1),
          $e = Object(c.a)(Ke, 2),
          Ze = $e[0],
          Xe = $e[1],
          Qe = Object(x.useState)(!0),
          et = Object(c.a)(Qe, 2),
          tt = et[0],
          nt = et[1],
          rt = Object(x.useMemo)(() => {
            var e = Pe.filter(gt)
            return e.length ? e.flatMap(e => [e.takerAsset, e.makerAsset]) : M.A
          }, [Pe]),
          st = Object(H.b)(rt),
          ot = st.refetch,
          it = st.data
        Object(x.useEffect)(() => {
          var e = setInterval(ot, 1e4)
          return () => {
            clearInterval(e)
          }
        }, [ot])
        var at = () => {
            le(''), N(1)
          },
          dt = Object(g.m)(),
          ut = Object(x.useRef)(new AbortController()),
          vt = Object(x.useCallback)(
            (function () {
              var e = Object(i.a)(
                Object(o.a)().mark(function e(t, n, r) {
                  var s, i, a, c, l
                  return Object(o.a)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (((e.prev = 0), (s = []), (i = 0), !d)) {
                              e.next = 11
                              break
                            }
                            return (
                              ut.current.abort(),
                              (ut.current = new AbortController()),
                              (e.next = 8),
                              Object(se.d)(
                                { chainId: j, maker: d, status: t, query: n, page: r, pageSize: 10 },
                                ut.current.signal,
                              )
                            )
                          case 8:
                            ;(l = e.sent),
                              (s = null !== (a = l.orders) && void 0 !== a ? a : []),
                              (i = null !== (c = l.pagination.totalItems) && void 0 !== c ? c : 0)
                          case 11:
                            De(s), Fe(i), (e.next = 20)
                            break
                          case 15:
                            if (
                              ((e.prev = 15),
                              (e.t0 = e.catch(0)),
                              'AbortError' !== (null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.name))
                            ) {
                              e.next = 19
                              break
                            }
                            return e.abrupt('return')
                          case 19:
                            console.error(e.t0)
                          case 20:
                            nt(!1)
                          case 21:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[0, 15]],
                  )
                }),
              )
              return function (t, n, r) {
                return e.apply(this, arguments)
              }
            })(),
            [d, j],
          ),
          yt = Object(x.useMemo)(() => Object(p.debounce)(vt, 400), [vt])
        Object(x.useEffect)(() => {
          nt(!0), De([]), yt(te, de, E)
        }, [te, de, yt, E]),
          Object(x.useEffect)(() => {
            at()
          }, [j])
        var wt = Object(x.useCallback)(() => {
          at(), yt(te, '', 1)
        }, [yt, te])
        Object(x.useImperativeHandle)(t, () => ({ refreshListOrder: wt }))
        var kt = e => {
            var t = Object(Y.g)(Ae, e)
            return !!t && Object(Z.b)(t).error
          },
          Ct = Object(x.useRef)(kt)
        Ct.current = kt
        var _t = Object(x.useRef)({}),
          Tt = e => {
            _t.current = Object(s.a)(Object(s.a)({}, _t.current), {}, { [e]: !0 })
          }
        Object(x.useEffect)(() => {
          if (d) {
            var e = Object(K.c)(d, j, e => {
                var t, n
                wt()
                var r = null === e || void 0 === e || null === (t = e.all) || void 0 === t ? void 0 : t[0],
                  s = null === r || void 0 === r ? void 0 : r.isSuccessful
                if (void 0 !== s) {
                  var o, i, a
                  Ct.current(null !== (o = null === r || void 0 === r ? void 0 : r.txHash) && void 0 !== o ? o : '') ||
                    _t.current[null !== (i = r.id) && void 0 !== i ? i : ''] ||
                    we(
                      {
                        type: s ? w.a.WARNING : w.a.ERROR,
                        title: s ? u.a._('Order Cancelled') : u.a._('Cancel Orders Failed'),
                        summary: Object(A.jsx)(ct.b, {
                          message: s
                            ? u.a._('You have successfully cancelled all orders.')
                            : u.a._('Cancel all orders failed. Please try again.'),
                        }),
                      },
                      1e4,
                    )
                  var c =
                    null !== (a = null === e || void 0 === e ? void 0 : e.all.map(e => (Tt(e.id), e.id))) &&
                    void 0 !== a
                      ? a
                      : []
                  c.length && Object(se.a)(c, d, j, oe.a.CANCELLED).catch(console.error)
                }
                var l = null !== (n = null === e || void 0 === e ? void 0 : e.orders) && void 0 !== n ? n : [],
                  b = l.filter(e => e.isSuccessful && !_t.current[e.id]),
                  p = l.filter(e => !e.isSuccessful && !Ct.current(e.txHash) && !_t.current[e.id])
                b.length &&
                  we(
                    {
                      type: w.a.WARNING,
                      title: u.a._('Order Cancelled'),
                      summary: Object(A.jsx)(ct.b, { orders: b, type: oe.a.CANCELLED }),
                    },
                    1e4,
                  ),
                  p.length &&
                    we(
                      {
                        type: w.a.ERROR,
                        title: u.a._('Order Cancel Failed'),
                        summary: Object(A.jsx)(ct.b, { orders: p, type: oe.a.CANCELLED_FAILED }),
                      },
                      1e4,
                    ),
                  l.length &&
                    Object(se.a)(
                      l.map(e => {
                        var t = e.id
                        return Tt(t), t.toString()
                      }),
                      d,
                      j,
                      oe.a.CANCELLED,
                    ).catch(console.error)
              }),
              t = Object(K.d)(d, j, e => {
                var t
                wt()
                var n = null !== (t = null === e || void 0 === e ? void 0 : e.orders) && void 0 !== t ? t : []
                n.length &&
                  (we(
                    {
                      type: w.a.WARNING,
                      title: u.a._('Order Expired'),
                      summary: Object(A.jsx)(ct.b, { orders: n, type: oe.a.EXPIRED }),
                    },
                    1e4,
                  ),
                  Object(se.a)(
                    n.map(e => e.id.toString()),
                    d,
                    j,
                    oe.a.EXPIRED,
                  ).catch(console.error))
              }),
              n = Object(K.e)(d, j, e => {
                var t
                wt()
                var n = null !== (t = null === e || void 0 === e ? void 0 : e.orders) && void 0 !== t ? t : [],
                  r = n.filter(e => e.status === oe.a.FILLED || e.takingAmount === e.filledTakingAmount),
                  s = n.filter(e => e.status === oe.a.PARTIALLY_FILLED || e.takingAmount !== e.filledTakingAmount)
                r.length &&
                  we(
                    {
                      type: w.a.SUCCESS,
                      title: u.a._('Order Filled'),
                      summary: Object(A.jsx)(ct.b, { orders: r, type: oe.a.FILLED }),
                    },
                    1e4,
                  ),
                  s.forEach(e => {
                    we(
                      {
                        type: w.a.SUCCESS,
                        title: u.a._('Order Partially Filled'),
                        summary: Object(A.jsx)(ct.b, { orders: [e], type: oe.a.PARTIALLY_FILLED }),
                      },
                      1e4,
                    )
                  }),
                  n.length &&
                    Object(se.a)(
                      n.map(e => e.uuid),
                      d,
                      j,
                      oe.a.FILLED,
                    ).catch(console.error)
              })
            return () => {
              null === e || void 0 === e || e(), null === t || void 0 === t || t(), null === n || void 0 === n || n()
            }
          }
        }, [d, j, we, wt])
        var It = Object(x.useCallback)(() => {
            He(e => Object(s.a)(Object(s.a)({}, e), {}, { showConfirm: !1 })),
              je(!1),
              setTimeout(() => {
                Ye(void 0)
              }, 300)
          }, []),
          St = Object(x.useCallback)(() => {
            He(e => Object(s.a)(Object(s.a)({}, e), {}, { showConfirm: !1 })), Ye(void 0), ve(!1)
          }, []),
          At = Object(x.useCallback)(
            e => {
              var t = e.makerAssetSymbol,
                n = e.takerAssetSymbol,
                r = e.makingAmount,
                s = e.makerAssetDecimals,
                o = e.id
              return { from_token: t, to_token: n, from_network: y.name, trade_qty: Object(re.f)(r, s), order_id: o }
            },
            [y],
          ),
          Et = Object(x.useCallback)(
            e => {
              Ye(e),
                He(Object(s.a)(Object(s.a)({}, V.a), {}, { showConfirm: !0 })),
                je(!0),
                Xe(!1),
                e && Ee(F.a.LO_CLICK_CANCEL_ORDER, At(e))
            },
            [Ee, At],
          ),
          Nt = Object(x.useCallback)(
            e => {
              Ye(e), ve(!0), Xe(!1), Ee(F.a.LO_CLICK_EDIT_ORDER, At(e))
            },
            [Ee, At],
          ),
          Lt = Object(x.useMemo)(() => Pe.filter(e => !Te(e)).length, [Pe, Te]),
          Pt = (function () {
            var e = Object(i.a)(
              Object(o.a)().mark(function e(t) {
                var n, r, i, a, l, p, m, x, h, O, f, g, v, y, w, C, _, T
                return Object(o.a)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (k && d && ye) {
                          e.next = 2
                          break
                        }
                        return e.abrupt('return', Promise.reject('Wrong input'))
                      case 2:
                        return (
                          He(e =>
                            Object(s.a)(
                              Object(s.a)({}, e),
                              {},
                              { pendingText: u.a._('Canceling your orders'), showConfirm: !0, attemptingTxn: !0 },
                            ),
                          ),
                          (e.next = 5),
                          Promise.all([
                            Object(se.c)([null === t || void 0 === t ? void 0 : t.id].filter(Boolean), Ze),
                            Ze ? ye.nonce(d) : Promise.resolve(b.a.from(0)),
                          ])
                        )
                      case 5:
                        return (
                          (r = e.sent),
                          (i = Object(c.a)(r, 2)),
                          (a = i[0].encodedData),
                          (l = i[1]),
                          (e.next = 11),
                          Object($.a)(d, k, null !== (n = Object(Y.o)(j)) && void 0 !== n ? n : '', a, b.a.from(0))
                        )
                      case 11:
                        return (
                          (p = e.sent),
                          (m = Ze
                            ? Pe.map(e => e.id)
                            : null !== t && void 0 !== t && t.id
                            ? [null === t || void 0 === t ? void 0 : t.id]
                            : []),
                          Ie({ orderIds: Se.concat(m) }),
                          null !== p &&
                            void 0 !== p &&
                            p.hash &&
                            Object(se.h)({
                              maker: d,
                              chainId: j.toString(),
                              txHash: p.hash,
                              [Ze ? 'nonce' : 'orderIds']: Ze
                                ? null === l || void 0 === l
                                  ? void 0
                                  : l.toNumber()
                                : m,
                            }),
                          p &&
                            ((h = (x = t || {}).makerAssetDecimals),
                            (O = x.takerAssetDecimals),
                            (f = x.takerAssetSymbol),
                            (g = x.takingAmount),
                            (v = x.makingAmount),
                            (y = x.takerAsset),
                            (w = x.makerAssetSymbol),
                            (C = x.makerAsset),
                            (_ = t ? Object(re.f)(v, h) : ''),
                            (T = t ? Object(re.f)(g, O) : ''),
                            Ce(
                              Object(s.a)(
                                Object(s.a)({}, p),
                                {},
                                {
                                  type: q.c.CANCEL_LIMIT_ORDER,
                                  extraInfo: t
                                    ? {
                                        tokenAddressIn: C,
                                        tokenAddressOut: y,
                                        tokenSymbolIn: w,
                                        tokenSymbolOut: f,
                                        tokenAmountIn: _,
                                        tokenAmountOut: T,
                                        arbitrary: At(t),
                                      }
                                    : { arbitrary: { totalOrder: We } },
                                },
                              ),
                            )),
                          e.abrupt('return')
                        )
                      case 17:
                      case 'end':
                        return e.stop()
                    }
                }, e)
              }),
            )
            return function (t) {
              return e.apply(this, arguments)
            }
          })(),
          Dt = (function () {
            var e = Object(i.a)(
              Object(o.a)().mark(function e(t) {
                return Object(o.a)().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), (e.next = 3), Pt(t)
                        case 3:
                          He(e => Object(s.a)(Object(s.a)({}, e), {}, { showConfirm: !1 })), (e.next = 9)
                          break
                        case 6:
                          ;(e.prev = 6),
                            (e.t0 = e.catch(0)),
                            He(t =>
                              Object(s.a)(
                                Object(s.a)({}, t),
                                {},
                                { attemptingTxn: !1, errorMessage: Object(re.h)(e.t0) },
                              ),
                            )
                        case 9:
                        case 'end':
                          return e.stop()
                      }
                  },
                  e,
                  null,
                  [[0, 6]],
                )
              }),
            )
            return function (t) {
              return e.apply(this, arguments)
            }
          })(),
          Mt = (function () {
            var e = Object(i.a)(
              Object(o.a)().mark(function e() {
                return Object(o.a)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), Pt(Ve)
                      case 2:
                      case 'end':
                        return e.stop()
                    }
                }, e)
              }),
            )
            return function () {
              return e.apply(this, arguments)
            }
          })(),
          Rt = 0 === Lt,
          Wt = Object(re.j)(te)
        return (
          Object(x.useEffect)(() => {
            var e = Pe.length - Lt
            window.onbeforeunload = () => (e > 0 && ke.length > 0 ? '' : null)
          }, [Lt, Pe, ke]),
          Object(A.jsxs)(A.Fragment, {
            children: [
              Object(A.jsxs)(v.b, {
                justifyContent: 'space-between',
                alignItems: 'center',
                children: [
                  Object(A.jsx)(lt, {
                    setActiveTab: e => {
                      ne(e), at(), dt({ search: Object(m.stringify)(Q) }, { replace: !0 })
                    },
                    activeTab: Wt ? oe.a.ACTIVE : oe.a.CLOSED,
                  }),
                  Object(A.jsx)(P.a, {
                    subscribeTooltip: u.a._('Subscribe to receive notifications on your limit orders'),
                    trackingEvent: F.a.LO_CLICK_SUBSCRIBE_BTN,
                  }),
                ],
              }),
              Object(A.jsxs)(v.b, {
                flexDirection: 'column',
                style: { gap: '1rem' },
                children: [
                  Object(A.jsxs)(ht, {
                    children: [
                      Object(A.jsx)(Ot, { options: Wt ? xe.a : xe.c, value: te, onChange: ne }, te),
                      Object(A.jsx)(ft, {
                        placeholder: u.a._('Search by token symbol or token address'),
                        maxLength: 255,
                        value: de,
                        onChange: e => {
                          le(e), N(1)
                        },
                      }),
                    ],
                  }),
                  tt
                    ? Object(A.jsx)(_.a, {})
                    : Object(A.jsxs)(A.Fragment, {
                        children: [
                          Object(A.jsxs)('div', {
                            children: [
                              Object(A.jsx)(bt, {}),
                              Object(A.jsx)(C.c, {
                                children: Pe.map((e, t) =>
                                  Object(A.jsx)(
                                    Je,
                                    {
                                      isOrderCancelling: Te,
                                      index: t + 10 * (E - 1),
                                      order: e,
                                      onCancelOrder: Et,
                                      onEditOrder: Nt,
                                      tokenPrices: it,
                                    },
                                    e.id,
                                  ),
                                ),
                              }),
                            ],
                          }),
                          0 === Pe.length &&
                            Object(A.jsxs)(mt, {
                              children: [
                                Object(A.jsx)(O.a, { size: h.isMobile ? 40 : 48 }),
                                Object(A.jsx)(v.e, {
                                  marginTop: '10px',
                                  children: de
                                    ? Object(A.jsx)(l.b, { id: 'No orders found' })
                                    : Wt
                                    ? Object(A.jsx)(l.b, { id: "You don't have any active orders yet" })
                                    : Object(A.jsx)(l.b, { id: "You don't have any order history" }),
                                }),
                              ],
                            }),
                          0 !== Pe.length &&
                            Object(A.jsxs)(xt, {
                              children: [
                                Wt
                                  ? Object(A.jsxs)(jt, {
                                      onClick: () => {
                                        Et(), Xe(!0)
                                      },
                                      disabled: Rt,
                                      children: [
                                        Object(A.jsx)(f.a, { size: 15 }),
                                        Object(A.jsx)(v.e, {
                                          marginLeft: '5px',
                                          children: Object(A.jsx)(l.b, { id: 'Cancel All' }),
                                        }),
                                      ],
                                    })
                                  : Object(A.jsx)('div', {}),
                                Object(A.jsx)(T.a, {
                                  haveBg: !1,
                                  onPageChange: e => {
                                    N(e)
                                  },
                                  totalCount: We,
                                  currentPage: E,
                                  pageSize: 10,
                                  style: { padding: '0' },
                                }),
                              ],
                            }),
                        ],
                      }),
                ],
              }),
              Object(A.jsx)(me, {
                isOpen: pe,
                flowState: ze,
                onDismiss: It,
                onSubmit: () => Dt(Ve),
                order: Ve,
                isCancelAll: Ze,
              }),
              Ve &&
                Object(A.jsx)(ce, {
                  flowState: ze,
                  setFlowState: He,
                  isOpen: ge,
                  onDismiss: St,
                  onCancelOrder: Mt,
                  refreshListOrder: wt,
                  order: Ve,
                  note: u.a._(
                    'Note: Your existing order will be automatically cancelled and a new order will be created.{0} Cancelling an order will cost gas fees',
                    {
                      0:
                        Ve.status === oe.a.PARTIALLY_FILLED
                          ? ' Your currently existing order is '.concat(
                              Object(re.c)(Ve.filledTakingAmount, Ve.takingAmount, Ve.takerAssetDecimals),
                              '% filled.',
                            )
                          : '',
                    },
                  ),
                }),
            ],
          })
        )
      })
    },
    './src/components/swapv2/LimitOrder/Modals/styled.tsx': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return x
      }),
        n.d(t, 'h', function () {
          return h
        }),
        n.d(t, 'c', function () {
          return f
        }),
        n.d(t, 'b', function () {
          return g
        }),
        n.d(t, 'f', function () {
          return v
        }),
        n.d(t, 'd', function () {
          return y
        }),
        n.d(t, 'e', function () {
          return w
        }),
        n.d(t, 'g', function () {
          return k
        })
      var r,
        s = n('./node_modules/@babel/runtime/helpers/esm/slicedToArray.js'),
        o = n('./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'),
        i = n('./node_modules/@lingui/react/esm/index.js'),
        a = n('./node_modules/react/index.js'),
        c = n('./node_modules/react-feather/dist/icons/x.js'),
        d = n('./node_modules/rebass/dist/index.esm.js'),
        l = n('./node_modules/styled-components/dist/styled-components.browser.esm.js'),
        u = n('./src/components/Icons/index.ts'),
        b = n('./src/components/swapv2/LimitOrder/TradePrice.tsx'),
        p = n('./src/hooks/useTheme.ts'),
        j = n('./src/components/swapv2/LimitOrder/helpers.ts'),
        m = n('./node_modules/react/jsx-runtime.js'),
        x = l.default.div.withConfig({ displayName: 'styled__Container', componentId: 'sc-1xkpwuu-0' })(
          ['padding:25px 30px;width:100%;display:flex;flex-direction:column;gap:25px;', ';'],
          e =>
            e.theme.mediaWidth.upToMedium(
              r || (r = Object(o.a)(['\n    font-size:14px;\n    padding: 16px 20px;\n  '])),
            ),
        ),
        h = l.default.div.withConfig({ displayName: 'styled__Value', componentId: 'sc-1xkpwuu-1' })(
          ['color:', ';font-weight:500;display:flex;gap:5px;align-items:center;text-align:right;font-size:14px;'],
          e => e.theme.text,
        ),
        O = l.default.div.withConfig({ displayName: 'styled__Row', componentId: 'sc-1xkpwuu-2' })([
          'line-height:20px;display:flex;justify-content:space-between;align-items:center;width:100%;',
        ]),
        f = l.default.div.withConfig({ displayName: 'styled__Label', componentId: 'sc-1xkpwuu-3' })(
          ['color:', ';font-weight:500;font-size:14px;'],
          e => e.theme.subText,
        ),
        g = e => {
          var t = e.title,
            n = e.onDismiss,
            r = Object(p.a)()
          return Object(m.jsxs)(d.b, {
            justifyContent: 'space-between',
            children: [
              Object(m.jsx)(d.b, {
                color: r.text,
                alignItems: 'center',
                style: { gap: 8 },
                children: Object(m.jsx)(d.e, { fontSize: 20, children: t }),
              }),
              Object(m.jsx)(c.a, { onClick: n, style: { cursor: 'pointer' }, color: r.subText }),
            ],
          })
        },
        v = e => {
          var t = e.note,
            n = Object(p.a)()
          return t ? Object(m.jsx)(d.e, { fontSize: 12, fontStyle: 'italic', color: n.subText, children: t }) : null
        }
      function y(e) {
        var t = e.listData
        return Object(m.jsx)(d.b, {
          style: { gap: 14 },
          flexDirection: 'column',
          children: t.map(e =>
            Object(m.jsxs)(O, { children: [Object(m.jsx)(f, { children: e.label }), e.content] }, e.label),
          ),
        })
      }
      var w = e => {
          var t = e.marketPrice,
            n = e.symbolIn,
            r = e.symbolOut,
            s = Object(p.a)()
          return Object(m.jsx)(d.b, {
            flexDirection: 'column',
            style: { borderRadius: 16, padding: '14px 16px', border: '1px solid '.concat(s.border) },
            children: Object(m.jsxs)(O, {
              children: [
                Object(m.jsx)(f, {
                  style: { fontSize: 12 },
                  children: Object(m.jsx)(i.b, { id: 'Estimated Market Price' }),
                }),
                Object(m.jsx)(h, {
                  style: { maxWidth: '60%' },
                  children: Object(m.jsx)(b.a, {
                    price: t,
                    loading: !1,
                    style: { color: s.text },
                    symbolIn: n,
                    symbolOut: r,
                  }),
                }),
              ],
            }),
          })
        },
        k = e => {
          var t,
            n,
            r,
            o = e.currencyIn,
            c = e.currencyOut,
            l = e.rateInfo,
            b = e.order,
            p = Object(a.useState)(!1),
            x = Object(s.a)(p, 2),
            O = x[0],
            f = x[1]
          if (b) {
            var g = b.makerAssetSymbol
            ;(t = b.takerAssetSymbol), (n = g), (r = Object(j.g)(b, O))
          } else {
            if (!o || !c || !l) return null
            ;(t = null === o || void 0 === o ? void 0 : o.symbol),
              (n = null === c || void 0 === c ? void 0 : c.symbol),
              (r = Object(j.f)(O ? l.invertRate : l.rate))
          }
          return Object(m.jsxs)(h, {
            style: { display: 'flex', alignItems: 'center', cursor: 'pointer', maxWidth: 290 },
            onClick: () => f(!O),
            children: [
              Object(m.jsx)(d.e, {
                children: Object(m.jsx)(i.b, {
                  id: '{0} price of {rateStr} {1}',
                  values: { 0: O ? n : t, 1: O ? t : n, rateStr: r },
                }),
              }),
              Object(m.jsx)(u.n, { rotate: 90, size: 19 }),
            ],
          })
        }
    },
    './src/components/swapv2/LimitOrder/TradePrice.tsx': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return j
      })
      var r = n('./node_modules/@babel/runtime/helpers/esm/objectSpread2.js'),
        s = n('./node_modules/@babel/runtime/helpers/esm/slicedToArray.js'),
        o = n('./node_modules/@lingui/react/esm/index.js'),
        i = n('./node_modules/react/index.js'),
        a = n('./node_modules/react-feather/dist/icons/repeat.js'),
        c = n('./node_modules/rebass/dist/index.esm.js'),
        d = n('./src/components/Dots.tsx'),
        l = n('./src/components/swapv2/styleds.tsx'),
        u = n('./src/hooks/useTheme.ts'),
        b = n('./src/utils/numbers.ts'),
        p = n('./node_modules/react/jsx-runtime.js')
      function j(e) {
        var t,
          n = e.price,
          j = e.style,
          m = void 0 === j ? {} : j,
          x = e.label,
          h = e.color,
          O = e.symbolIn,
          f = e.symbolOut,
          g = e.loading,
          v = e.icon,
          y = Object(u.a)(),
          w = Object(i.useState)(!1),
          k = Object(s.a)(w, 2),
          C = k[0],
          _ = k[1]
        try {
          n &&
            (t = C
              ? Object(b.c)(parseFloat(null === n || void 0 === n ? void 0 : n.invertRate.toPrecision(6)))
              : Object(b.c)(parseFloat(null === n || void 0 === n ? void 0 : n.marketRate.toPrecision(6))))
        } catch (S) {}
        var T = Boolean(
            (null === n || void 0 === n ? void 0 : n.marketRate) &&
              (null === n || void 0 === n ? void 0 : n.invertRate) &&
              t &&
              !g,
          ),
          I = C ? '1 '.concat(f, ' = ').concat(t, ' ').concat(O) : '1 '.concat(O, ' = ').concat(t, ' ').concat(f)
        return Object(p.jsx)(c.e, {
          fontWeight: 500,
          fontSize: 12,
          color: y.subText,
          sx: Object(r.a)(
            { alignItems: 'center', display: 'flex', lineHeight: '14px', cursor: T ? 'pointer' : 'default' },
            m,
          ),
          onClick: () => _(!C),
          height: '22px',
          children: T
            ? Object(p.jsxs)(p.Fragment, {
                children: [
                  x && Object(p.jsxs)(p.Fragment, { children: [x, '\xa0'] }),
                  Object(p.jsx)(c.e, { color: h, children: I }),
                  Object(p.jsx)(l.n, { hover: !v, children: v || Object(p.jsx)(a.a, { size: 12 }) }),
                ],
              })
            : g
            ? Object(p.jsx)(d.a, { children: Object(p.jsx)(o.b, { id: 'Calculating' }) })
            : Object(p.jsx)(c.e, {
                color: y.warning,
                children: Object(p.jsx)(o.b, { id: 'Unable to get the market price' }),
              }),
        })
      }
    },
    './src/components/swapv2/LimitOrder/const.ts': function (e, t, n) {
      'use strict'
      n.d(t, 'd', function () {
        return c
      }),
        n.d(t, 'f', function () {
          return d
        }),
        n.d(t, 'i', function () {
          return l
        }),
        n.d(t, 'a', function () {
          return u
        }),
        n.d(t, 'c', function () {
          return b
        }),
        n.d(t, 'e', function () {
          return p
        }),
        n.d(t, 'g', function () {
          return m
        }),
        n.d(t, 'h', function () {
          return x
        }),
        n.d(t, 'b', function () {
          return h
        })
      var r = n('./node_modules/@lingui/core/esm/index.js'),
        s = n('./node_modules/@kyberswap/ks-sdk-core/dist/index.js'),
        o = n('./src/constants/index.ts'),
        i = n('./src/utils/time.ts'),
        a = n('./src/components/swapv2/LimitOrder/type.ts'),
        c = 604800,
        d = 5,
        l = () =>
          [d * o.Y.ONE_MIN, 10 * o.Y.ONE_MIN, o.Y.ONE_HOUR, 3 * o.Y.ONE_DAY, 7 * o.Y.ONE_DAY, 30 * o.Y.ONE_DAY].map(
            e => ({ value: e, label: Object(i.b)(e) }),
          ),
        u = [
          { label: r.a._('All Active Orders'), value: a.a.ACTIVE },
          { label: r.a._('Open Orders'), value: a.a.OPEN },
          { label: r.a._('Partially Filled Orders'), value: a.a.PARTIALLY_FILLED },
        ],
        b = [
          { label: r.a._('All Closed Orders'), value: a.a.CLOSED },
          { label: r.a._('Filled Orders'), value: a.a.FILLED },
          { label: r.a._('Cancelled Orders'), value: a.a.CANCELLED },
          { label: r.a._('Expired Orders'), value: a.a.EXPIRED },
        ],
        p = 12e5,
        j = { [s.ChainId.MAINNET]: 300 },
        m = new Proxy(j, {
          get(e, t) {
            var n = t
            return t && e[n] ? e[n] : 10
          },
        }),
        x = -5,
        h = 30
    },
    './src/components/swapv2/LimitOrder/index.tsx': function (e, t, n) {
      'use strict'
      var r = n('./node_modules/@babel/runtime/helpers/esm/slicedToArray.js'),
        s = n('./node_modules/@lingui/core/esm/index.js'),
        o = n('./node_modules/react/index.js'),
        i = n('./src/hooks/useSyncTokenSymbolToUrl.ts'),
        a = n('./src/state/limit/hooks.ts'),
        c = n('./src/types/index.ts'),
        d = n('./src/components/swapv2/LimitOrder/LimitOrderForm.tsx'),
        l = n('./node_modules/react/jsx-runtime.js')
      function u(e) {
        var t = e.refreshListOrder,
          n = e.setIsSelectCurrencyManual,
          u = e.isSelectCurrencyManual,
          b = Object(a.a)().onSelectPair,
          p = Object(a.b)(),
          j = p.currencyIn,
          m = p.currencyOut
        Object(i.a)(j, m, b, u)
        var x = Object(o.useState)(c.a),
          h = Object(r.a)(x, 2),
          O = h[0],
          f = h[1]
        return Object(l.jsx)(d.b, {
          flowState: O,
          setFlowState: f,
          refreshListOrder: t,
          currencyIn: j,
          currencyOut: m,
          setIsSelectCurrencyManual: n,
          note:
            null !== m && void 0 !== m && m.isNative
              ? s.a._('Note: Once your order is filled, you will receive {0} ({1})', {
                  0: null === m || void 0 === m ? void 0 : m.wrapped.name,
                  1: null === m || void 0 === m ? void 0 : m.wrapped.symbol,
                })
              : void 0,
        })
      }
      t.a = Object(o.memo)(u)
    },
    './src/components/swapv2/LimitOrder/request.ts': function (e, t, n) {
      'use strict'
      n.d(t, 'd', function () {
        return l
      }),
        n.d(t, 'f', function () {
          return u
        }),
        n.d(t, 'i', function () {
          return b
        }),
        n.d(t, 'e', function () {
          return p
        }),
        n.d(t, 'b', function () {
          return m
        }),
        n.d(t, 'g', function () {
          return x
        }),
        n.d(t, 'c', function () {
          return h
        }),
        n.d(t, 'a', function () {
          return f
        }),
        n.d(t, 'h', function () {
          return g
        })
      var r = n('./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js'),
        s = n('./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js'),
        o = n('./node_modules/axios/lib/axios.js'),
        i = n('./node_modules/querystring-es3/index.js'),
        a = n('./src/constants/env.ts'),
        c = n('./src/components/swapv2/LimitOrder/type.ts'),
        d = e => e.data.data,
        l = (e, t) =>
          fetch(''.concat(a.LIMIT_ORDER_API_READ, '/v1/orders?').concat(Object(i.stringify)(e)), { signal: t })
            .then(e => e.json())
            .then(e => e.data)
            .then(
              e => (
                e.orders.forEach(e => {
                  e.chainId = Number(e.chainId)
                }),
                e
              ),
            ),
        u = (function () {
          var e = Object(s.a)(
            Object(r.a)().mark(function e(t, n) {
              return Object(r.a)().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        'return',
                        fetch(
                          ''
                            .concat(a.LIMIT_ORDER_API_READ, '/v1/orders/insufficient-funds?')
                            .concat(Object(i.stringify)(t)),
                          { signal: n },
                        )
                          .then(e => e.json())
                          .then(e => {
                            var t
                            return (
                              (null === e || void 0 === e || null === (t = e.data) || void 0 === t
                                ? void 0
                                : t.total) || 0
                            )
                          }),
                      )
                    case 1:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            }),
          )
          return function (t, n) {
            return e.apply(this, arguments)
          }
        })(),
        b = e => o.a.post(''.concat(a.LIMIT_ORDER_API_WRITE, '/v1/orders'), e).then(d),
        p = e => o.a.post(''.concat(a.LIMIT_ORDER_API_WRITE, '/v1/orders/sign-message'), e).then(d),
        j = {},
        m = () => {
          j = {}
        },
        x = (function () {
          var e = Object(s.a)(
            Object(r.a)().mark(function e(t, n, s) {
              return Object(r.a)().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!j[n]) {
                        e.next = 2
                        break
                      }
                      return e.abrupt('return', { activeMakingAmount: j[n] })
                    case 2:
                      return e.abrupt(
                        'return',
                        o.a
                          .get(''.concat(a.LIMIT_ORDER_API_READ, '/v1/orders/active-making-amount'), {
                            params: { chainId: t + '', makerAsset: n, maker: s },
                          })
                          .then(d)
                          .then(e => ((j[n] = e.activeMakingAmount), e)),
                      )
                    case 3:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            }),
          )
          return function (t, n, r) {
            return e.apply(this, arguments)
          }
        })(),
        h = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = t ? 'increase-nonce' : 'cancel-batch-orders'
          return o.a.post(''.concat(a.LIMIT_ORDER_API_READ, '/v1/encode/').concat(n), t ? {} : { orderIds: e }).then(d)
        },
        O = { [c.a.CANCELLED]: 'cancelled', [c.a.EXPIRED]: 'expired', [c.a.FILLED]: 'filled' },
        f = (e, t, n, r) =>
          o.a
            .delete(''.concat(a.LIMIT_ORDER_API_WRITE, '/v1/events/').concat(O[r]), {
              data: { maker: t, chainId: n + '', [r === c.a.FILLED ? 'uuids' : 'docIds']: e },
            })
            .then(d),
        g = e => o.a.post(''.concat(a.LIMIT_ORDER_API_WRITE, '/v1/orders/cancelling'), e).then(d)
    },
    './src/components/swapv2/LiquiditySourcesPanel/index.tsx': function (e, t, n) {
      'use strict'
      var r = n('./node_modules/@babel/runtime/helpers/esm/slicedToArray.js'),
        s = n('./node_modules/@lingui/react/esm/index.js'),
        o = n('./node_modules/@lingui/core/esm/index.js'),
        i = n('./node_modules/react/index.js'),
        a = n('./node_modules/react-feather/dist/icons/arrow-left.js'),
        c = n('./node_modules/rebass/dist/index.esm.js'),
        d = n('./node_modules/styled-components/dist/styled-components.browser.esm.js'),
        l = n('./src/components/CheckBox.tsx'),
        u = n('./src/hooks/index.ts'),
        b = n('./src/hooks/useDebounce.ts'),
        p = n('./src/state/customizeDexes/hooks.ts'),
        j = n('./node_modules/react-feather/dist/icons/search.js'),
        m = n('./node_modules/react/jsx-runtime.js'),
        x = d.default.div.withConfig({ displayName: 'SearchBar__SearchBarWrapper', componentId: 'sc-evky29-0' })([
          'width:100%;height:36px;position:relative;',
        ]),
        h = d.default.input.withConfig({ displayName: 'SearchBar__Input', componentId: 'sc-evky29-1' })(
          [
            'width:100%;height:100%;padding:8px 36px 8px 12px;background:',
            ';border:0px;border-radius:40px;color:inherit;outline:none;font-size:14px;font-weight:500;line-height:20px;',
          ],
          e => e.theme.buttonBlack,
        ),
        O = d.default.div.withConfig({ displayName: 'SearchBar__IconWrapper', componentId: 'sc-evky29-2' })(
          ['position:absolute;right:12px;top:0;width:18px;height:100%;display:flex;align-items:center;color:', ';'],
          e => e.theme.subText,
        ),
        f = e => {
          var t = e.text,
            n = e.setText
          return Object(m.jsxs)(x, {
            children: [
              Object(m.jsx)(h, {
                value: t,
                onChange: e => n(e.target.value),
                placeholder: o.a._('Search for a liquidity source'),
              }),
              Object(m.jsx)(O, { children: Object(m.jsx)(j.a, {}) }),
            ],
          })
        },
        g = Object(d.default)(a.a).withConfig({
          displayName: 'LiquiditySourcesPanel__BackIconWrapper',
          componentId: 'sc-s40s2r-0',
        })(
          ['height:20px;width:20px;margin-right:10px;cursor:pointer;path{stroke:', ' !important;}'],
          e => e.theme.text,
        ),
        v = d.default.span.withConfig({ displayName: 'LiquiditySourcesPanel__BackText', componentId: 'sc-s40s2r-1' })(
          ['font-size:18px;font-weight:500;color:', ';'],
          e => e.theme.text,
        ),
        y = d.default.div.withConfig({ displayName: 'LiquiditySourcesPanel__SourceList', componentId: 'sc-s40s2r-2' })(
          [
            'width:100%;height:300px;max-height:300px;overflow-y:scroll;overflow-x:hidden;display:flex;flex-direction:column;row-gap:24px;::-webkit-scrollbar{display:unset;width:8px;border-radius:999px;}::-webkit-scrollbar-track{background:transparent;border-radius:999px;}::-webkit-scrollbar-thumb{background:',
            ';border-radius:999px;}',
          ],
          e => e.theme.disableText,
        ),
        w = d.default.div.withConfig({ displayName: 'LiquiditySourcesPanel__Source', componentId: 'sc-s40s2r-3' })([
          'width:100%;height:32px;display:flex;align-items:center;column-gap:16px;padding:12px;',
        ]),
        k = d.default.div.withConfig({
          displayName: 'LiquiditySourcesPanel__ImageWrapper',
          componentId: 'sc-s40s2r-4',
        })(['width:32px;height:32px;display:flex;align-items:center;img{width:100%;height:auto;}']),
        C = d.default.span.withConfig({ displayName: 'LiquiditySourcesPanel__SourceName', componentId: 'sc-s40s2r-5' })(
          ['font-size:14px;font-weight:400;line-height:20px;color:', ';'],
          e => e.theme.text,
        ),
        _ = d.default.div.withConfig({
          displayName: 'LiquiditySourcesPanel__LiquiditySourceHeader',
          componentId: 'sc-s40s2r-6',
        })(
          [
            'border-top-right-radius:8px;border-top-left-radius:8px;background:',
            ';text-transform:uppercase;font-size:12px;font-weight:500;padding:12px;color:',
            ';display:flex;gap:1rem;align-items:center;',
          ],
          e => e.theme.tableHeader,
          e => e.theme.subText,
        )
      t.a = e => {
        var t = e.onBack,
          n = Object(i.useState)(''),
          a = Object(r.a)(n, 2),
          d = a[0],
          j = a[1],
          x = Object(b.a)(d.toLowerCase(), 200).trim(),
          h = Object(u.b)().isEVM,
          O = Object(p.a)(),
          T = Object(p.b)(),
          I = Object(r.a)(T, 2),
          S = I[0],
          A = I[1],
          E = Object(i.useRef)(null),
          N = Object(i.useRef)(null)
        Object(i.useEffect)(() => {
          var e = (null === O || void 0 === O ? void 0 : O.filter(e => !S.includes(e.id))) || []
          E.current &&
            (e.length === (null === O || void 0 === O ? void 0 : O.length)
              ? ((E.current.checked = !0), (E.current.indeterminate = !1))
              : e.length
              ? e.length < ((null === O || void 0 === O ? void 0 : O.length) || 0) &&
                ((E.current.checked = !1), (E.current.indeterminate = !0))
              : ((E.current.checked = !1), (E.current.indeterminate = !1)))
        }, [S, O])
        var L = Object(i.useMemo)(
          () => O.filter(e => e.id.includes('PunkSwap')).sort((e, t) => e.sortId - t.sortId),
          [O],
        )
        Object(i.useEffect)(() => {
          if (N.current) {
            var e = L.map(e => e.id)
            e.every(e => S.includes(e))
              ? ((N.current.checked = !1), (N.current.indeterminate = !1))
              : e.some(e => S.includes(e))
              ? ((N.current.checked = !1), (N.current.indeterminate = !0))
              : ((N.current.checked = !0), (N.current.indeterminate = !1))
          }
        }, [S, L])
        var P = e => {
          var t = S.find(t => t === e)
          A(t ? S.filter(t => t !== e) : [...S, e])
        }
        return Object(m.jsx)(c.a, {
          width: '100%',
          children: Object(m.jsxs)(c.b, {
            width: '100%',
            flexDirection: 'column',
            sx: { rowGap: '20px' },
            children: [
              Object(m.jsxs)(c.b, {
                alignItems: 'center',
                sx: { marginTop: '5px' },
                children: [
                  Object(m.jsx)(g, { onClick: t }),
                  Object(m.jsx)(v, { children: o.a._('Liquidity Sources') }),
                ],
              }),
              Object(m.jsx)(f, { text: d, setText: j }),
              Object(m.jsxs)(_, {
                children: [
                  Object(m.jsx)(l.a, {
                    ref: E,
                    onChange: e => {
                      e.currentTarget.checked
                        ? A([])
                        : A((null === O || void 0 === O ? void 0 : O.map(e => e.id)) || [])
                    },
                  }),
                  Object(m.jsx)(c.e, { children: Object(m.jsx)(s.b, { id: 'Liquidity Sources' }) }),
                ],
              }),
              Object(m.jsxs)(y, {
                children: [
                  h &&
                    !!L.filter(e => e.name.toLowerCase().includes(x)).length &&
                    Object(m.jsxs)(m.Fragment, {
                      children: [
                        Object(m.jsxs)(w, {
                          children: [
                            Object(m.jsx)(l.a, {
                              ref: N,
                              checked: !L.map(e => e.id).every(e => S.includes(e)),
                              onChange: e => {
                                if (e.target.checked) A(S.filter(e => !e.includes('PunkSwap')))
                                else {
                                  var t = [...S.filter(e => !e.includes('PunkSwap')), ...L.map(e => e.id)]
                                  A(t)
                                }
                              },
                            }),
                            Object(m.jsx)(k, {
                              children: Object(m.jsx)('img', {
                                src: '/favicon.png',
                                alt: 'logo',
                              }),
                            }),
                            Object(m.jsx)(C, { children: 'PunkSwap - All' }),
                          ],
                        }),
                        L.filter(e => e.name.toLowerCase().includes(x)).map(e => {
                          var t = e.name,
                            n = e.logoURL,
                            r = e.id
                          return Object(m.jsxs)(
                            w,
                            {
                              style: { padding: '12px 48px' },
                              children: [
                                Object(m.jsx)(l.a, { checked: !S.includes(r), onChange: () => P(r) }),
                                Object(m.jsx)(k, { children: Object(m.jsx)('img', { src: n, alt: '' }) }),
                                Object(m.jsx)(C, { children: t }),
                              ],
                            },
                            t,
                          )
                        }),
                      ],
                    }),
                  null === O || void 0 === O
                    ? void 0
                    : O.filter(e => !e.id.includes('PunkSwap') && e.name.toLowerCase().includes(x)).map(e => {
                        var t = e.name,
                          n = e.logoURL,
                          r = e.id
                        return Object(m.jsxs)(
                          w,
                          {
                            children: [
                              Object(m.jsx)(l.a, { checked: !S.includes(r), onChange: () => P(r) }),
                              Object(m.jsx)(k, { children: Object(m.jsx)('img', { src: n, alt: '' }) }),
                              Object(m.jsx)(C, { children: t }),
                            ],
                          },
                          t,
                        )
                      }),
                ],
              }),
            ],
          }),
        })
      }
    },
    './src/components/swapv2/PairSuggestion/index.tsx': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return ie
      }),
        n.d(t, 'b', function () {
          return ae
        })
      var r = n('./node_modules/@babel/runtime/helpers/esm/objectSpread2.js'),
        s = n('./node_modules/@babel/runtime/helpers/esm/slicedToArray.js'),
        o = n('./node_modules/@lingui/core/esm/index.js'),
        i = n('./node_modules/lodash/lodash.js'),
        a = n('./node_modules/querystring-es3/index.js'),
        c = n('./node_modules/react/index.js'),
        d = n('./node_modules/react-device-detect/main.js'),
        l = n('./node_modules/react-router/dist/index.js'),
        u = n('./node_modules/styled-components/dist/styled-components.browser.esm.js'),
        b = n('./src/components/Announcement/type.ts'),
        p = n('./src/components/Modal/index.tsx'),
        j = n('./src/constants/index.ts'),
        m = n('./src/constants/tokens.ts'),
        x = n('./src/hooks/index.ts'),
        h = n('./src/hooks/Tokens.ts'),
        O = n('./src/hooks/useMixpanel.ts'),
        f = n('./src/hooks/useParsedQueryString.ts'),
        g = n('./src/state/application/hooks.ts'),
        v = n('./src/utils/filtering.ts'),
        y = n('./node_modules/@lingui/react/esm/index.js'),
        w = n('./node_modules/react-feather/dist/icons/alert-triangle.js'),
        k = n('./node_modules/react-feather/dist/icons/star.js'),
        C = n('./node_modules/rebass/dist/index.esm.js'),
        _ = n('./src/constants/styles.ts'),
        T = n('./src/hooks/useTheme.ts'),
        I = n('./node_modules/polished/dist/polished.esm.js'),
        S = n('./src/components/Logo/index.tsx'),
        A = n('./src/components/Tooltip/index.tsx'),
        E = n('./src/utils/index.ts'),
        N = n('./src/utils/currencyId.ts'),
        L = (e, t) =>
          e.some(e => {
            var n = e.tokenIn,
              r = e.tokenOut
            return t.tokenIn === n && t.tokenOut === r
          }),
        P = (e, t) => t.toLowerCase() === j.E.toLowerCase() || !!e[t],
        D = (e, t) => P(e, t.tokenIn) && P(e, t.tokenOut),
        M = (e, t, n) =>
          t
            .map(
              e => (
                e.tokenInImgUrl || (e.tokenInImgUrl = Object(E.r)(e.tokenIn, n)),
                e.tokenOutImgUrl || (e.tokenOutImgUrl = Object(E.r)(e.tokenOut, n)),
                e
              ),
            )
            .sort((t, n) => {
              var r = [P(e, t.tokenIn), P(e, t.tokenOut)],
                s = [P(e, n.tokenIn), P(e, n.tokenOut)]
              return r.filter(Boolean).length > s.filter(Boolean).length ? -1 : 1
            }),
        R = (e, t) => (e.toLowerCase() === j.E.toLowerCase() && t ? Object(N.a)(m.i[t], t) : e),
        W = n('./node_modules/react/jsx-runtime.js'),
        F = u.default.div.withConfig({ displayName: 'PairSuggestionItem__ItemWrapper', componentId: 'sc-wwmga3-0' })(
          [
            'cursor:pointer;display:flex;justify-content:space-between;align-items:center;background-color:',
            ';padding:1em;',
          ],
          e => {
            var t = e.theme
            return e.isActive ? Object(I.d)(t.buttonBlack, 0.6) : 'transparent'
          },
        ),
        B = Object(u.default)(S.b).withConfig({
          displayName: 'PairSuggestionItem__StyledLogo',
          componentId: 'sc-wwmga3-1',
        })(['width:20px;height:20px;border-radius:100%;'])
      function U(e) {
        var t = e.data,
          n = e.isFavorite,
          r = e.isFullFavoritePair,
          s = e.isActive,
          i = e.amount,
          a = e.onClickStar,
          c = e.onSelectPair,
          l = e.onMouseEnter,
          u = Object(T.a)(),
          b = Object(h.e)(!0),
          p = Object(x.b)().account,
          j = t.tokenInSymbol,
          m = t.tokenOutSymbol,
          O = t.tokenInImgUrl,
          f = t.tokenOutImgUrl,
          g = t.tokenInName,
          v = t.tokenOutName,
          y = !D(b, t),
          w = Object(W.jsx)(k.a, {
            fill: n ? u.primary : 'none',
            color: n ? u.primary : u.subText,
            onClick: e => {
              e.stopPropagation(), a()
            },
            size: 20,
          })
        return Object(W.jsxs)(F, {
          tabIndex: y ? 0 : void 0,
          className: y ? 'no-blur' : '',
          onClick: c,
          isActive: s && !d.isMobile,
          onMouseEnter: l,
          children: [
            Object(W.jsxs)(C.b, {
              alignItems: 'center',
              style: { gap: 10 },
              children: [
                Object(W.jsxs)(C.b, {
                  alignItems: 'flex-start',
                  height: '100%',
                  children: [
                    Object(W.jsx)(B, { style: { marginRight: 5 }, srcs: [O], alt: j }),
                    Object(W.jsx)(B, { srcs: [f], alt: m }),
                  ],
                }),
                Object(W.jsxs)('div', {
                  style: { flex: 1 },
                  children: [
                    Object(W.jsxs)(C.e, { color: u.text, children: [i, ' ', j, ' - ', m] }),
                    Object(W.jsxs)(C.e, { color: u.border, fontSize: 14, children: [g, ' - ', v] }),
                  ],
                }),
              ],
            }),
            Object(W.jsx)(C.b, {
              height: '100%',
              tabIndex: 0,
              className: 'no-blur',
              minWidth: 20,
              children:
                p &&
                (r
                  ? Object(W.jsx)(A.b, { text: o.a._('You can only favorite up to three token pairs'), children: w })
                  : w),
            }),
          ],
        })
      }
      var z = u.default.div.withConfig({ displayName: 'ListPair__Break', componentId: 'sc-1cjhu9t-0' })(
          ['border-top:1px solid ', ';'],
          e => e.theme.border,
        ),
        H = u.default.div.withConfig({ displayName: 'ListPair__Title', componentId: 'sc-1cjhu9t-1' })(
          ['font-size:13px;color:', ';margin:1em 0 1em 0;'],
          e => e.theme.subText,
        ),
        G = u.default.div.withConfig({ displayName: 'ListPair__MenuFlyout', componentId: 'sc-1cjhu9t-2' })(
          [
            'overflow:auto;background-color:',
            ';border-radius:20px;padding:0;display:flex;flex-direction:column;font-size:14px;top:55px;left:0;right:0;outline:none;z-index:',
            ';',
            ';',
          ],
          e => {
            var t = e.theme
            return e.showList ? t.tabActive : t.background
          },
          _.a.SUGGESTION_PAIR,
          e =>
            e.hasShadow
              ? Object(u.css)(['box-shadow:0px 4px 16px rgba(0,0,0,0.16);position:absolute;'])
              : Object(u.css)(['box-shadow:unset;position:unset;']),
        ),
        q = e => {
          var t = e.text,
            n = e.icon,
            r = e.color
          return Object(W.jsx)(ie, {
            children: Object(W.jsxs)(C.b, {
              alignItems: 'center',
              style: { margin: '1em 0' },
              children: [n, Object(W.jsx)(C.e, { style: { marginLeft: n ? 7 : 0, color: r }, children: t })],
            }),
          })
        }
      function V(e) {
        var t = e.isShowListPair,
          n = e.isFullFavoritePair,
          r = e.hasShadow,
          s = e.suggestedAmount,
          i = e.favoritePairs,
          a = e.suggestedPairs,
          c = e.isSearch,
          d = e.selectedIndex,
          l = e.onSelectPair,
          u = e.onClickStar,
          b = e.onMouseEnterItem,
          p = Object(T.a)(),
          j = Object(x.b)().account,
          m = c && !a.length && !i.length,
          h = !i.length && !c
        return t
          ? Object(W.jsxs)(G, {
              showList: t,
              tabIndex: 0,
              className: 'no-blur',
              hasShadow: r,
              children: [
                m &&
                  Object(W.jsx)(q, {
                    color: p.subText,
                    text: o.a._('We could not find anything. Try again.'),
                    icon: Object(W.jsx)(w.a, { color: p.subText, size: 17 }),
                  }),
                j &&
                  Object(W.jsxs)(W.Fragment, {
                    children: [
                      !c &&
                        Object(W.jsx)(ie, {
                          children: Object(W.jsx)(H, {
                            children: Object(W.jsxs)(C.b, {
                              justifyContent: 'space-between',
                              children: [
                                Object(W.jsx)(y.b, { id: 'Favourites' }),
                                Object(W.jsxs)('div', { children: [i.length, '/', ae] }),
                              ],
                            }),
                          }),
                        }),
                      h &&
                        Object(W.jsx)(q, {
                          color: p.subText,
                          icon: Object(W.jsx)(k.a, { color: p.subText, size: 20, fill: p.subText }),
                          text: o.a._('Your favourite pairs will appear here'),
                        }),
                      i.map((e, t) =>
                        Object(W.jsx)(
                          U,
                          {
                            onSelectPair: () => l(e),
                            onClickStar: () => u(e),
                            amount: s,
                            isActive: d === t,
                            data: e,
                            isFavorite: !0,
                            isFullFavoritePair: n,
                            onMouseEnter: () => b(t),
                          },
                          e.tokenIn + e.tokenOut,
                        ),
                      ),
                      !c && Object(W.jsx)(z, {}),
                    ],
                  }),
                a.length > 0 &&
                  Object(W.jsxs)(W.Fragment, {
                    children: [
                      !c &&
                        Object(W.jsx)(ie, {
                          children: Object(W.jsx)(H, { children: Object(W.jsx)(y.b, { id: 'Top traded pairs' }) }),
                        }),
                      a.map((e, t) =>
                        Object(W.jsx)(
                          U,
                          {
                            onSelectPair: () => l(e),
                            onClickStar: () => u(e),
                            amount: s,
                            isActive: d === i.length + t,
                            data: e,
                            isFavorite: L(i, e),
                            isFullFavoritePair: n,
                            onMouseEnter: () => b(i.length + t),
                          },
                          e.tokenIn + e.tokenOut + t,
                        ),
                      ),
                    ],
                  }),
                Object(W.jsx)(z, {}),
                Object(W.jsx)(q, { color: p.subText, text: o.a._('Try typing "10 ETH to PUNK"') }),
              ],
            })
          : null
      }
      var Y = n('./node_modules/react-feather/dist/icons/search.js'),
        K = n('./node_modules/react-feather/dist/icons/command.js'),
        $ = u.default.div.withConfig({ displayName: 'SearchInput__SearchWrapper', componentId: 'sc-s2gby3-0' })(
          [
            'display:flex;align-items:center;gap:5px;position:relative;width:100%;border-radius:20px;border:1px solid #52ccad;background-color:',
            ';height:45px;',
          ],
          e => {
            var t = e.theme
            return e.showList ? t.tabActive : t.background
          },
        ),
        Z = u.default.input.withConfig({ displayName: 'SearchInput', componentId: 'sc-s2gby3-1' })(
          [
            '::placeholder{color:',
            ';}transition:border 100ms;color:',
            ';background:none;border:none;outline:none;padding:16px;padding-left:35px;width:100%;font-size:16px;',
            ';',
          ],
          e => e.theme.border,
          e => e.theme.text,
          e => {
            var t = e.theme
            return e.hasBorder
              ? Object(u.css)(['border-radius:20px;border:1px solid ', ';'], t.primary)
              : Object(u.css)(['border:none;'])
          },
        ),
        X = u.default.div.withConfig({ displayName: 'SearchInput__DisabledFrame', componentId: 'sc-s2gby3-2' })([
          'position:absolute;left:0;right:0;top:0;bottom:0;',
        ]),
        Q = Object(u.default)(Y.a).withConfig({ displayName: 'SearchInput__SearchIcon', componentId: 'sc-s2gby3-3' })(
          ['position:absolute;left:10px;color:', ';font-size:14px;'],
          e => {
            var t = e.theme
            return e.$showList ? t.subText : t.border
          },
        ),
        J = u.default.div.withConfig({ displayName: 'SearchInput__InputIcon', componentId: 'sc-s2gby3-4' })(
          [
            'background:',
            ';padding:3px 8px;margin-right:10px;border-radius:22px;font-size:12px;color:',
            ';cursor:pointer;',
          ],
          e => e.theme.buttonBlack,
          e => e.theme.subText,
        ),
        ee = Object(c.forwardRef)(function (e, t) {
          var n = e.isShowListPair,
            r = e.hasBorder,
            s = e.disabled,
            i = e.value,
            a = e.onChangeInput,
            c = e.onKeyPressInput,
            u = e.showListView,
            b = e.hideListView,
            p = Object(O.c)().mixpanelHandler,
            m = Object(l.k)().pathname,
            x = () => {
              u(),
                p(O.a.TAS_PRESS_CTRL_K, 'mouse click'),
                m.startsWith(j.g.LIMIT) && p(O.a.LO_ENTER_DETAIL, 'touch type and swap box')
            }
          return Object(W.jsxs)($, {
            showList: n,
            children: [
              Object(W.jsx)(Q, { size: 18, $showList: n }),
              Object(W.jsx)(Z, {
                ref: t,
                hasBorder: r,
                onBlur: e => {
                  if (!d.isMobile) {
                    var t = e.relatedTarget
                    ;(t && t.classList.contains('no-blur')) || b()
                  }
                },
                onFocus: s ? void 0 : x,
                placeholder: o.a._('Try typing "10 ETH to PUNK"'),
                value: i,
                onChange: e => {
                  var t = e.currentTarget.value
                  a(t)
                },
                autoComplete: 'off',
                onKeyDown: c,
              }),
              s && Object(W.jsx)(X, { onClick: x }),
              Object(W.jsx)(d.BrowserView, {
                children: n
                  ? Object(W.jsx)(J, { onClick: b, children: 'Esc' }, 1)
                  : Object(W.jsx)(
                      J,
                      {
                        onClick: u,
                        children: Object(W.jsx)(C.b, {
                          children: d.isMacOs
                            ? Object(W.jsxs)(W.Fragment, {
                                children: [
                                  Object(W.jsx)(K.a, { size: 13 }),
                                  ' ',
                                  Object(W.jsx)('span', { style: { marginLeft: 3 }, children: 'K' }),
                                ],
                              })
                            : Object(W.jsx)('span', { style: { whiteSpace: 'nowrap' }, children: 'Ctrl+K' }),
                        }),
                      },
                      2,
                    ),
              }),
            ],
          })
        }),
        te = n('./node_modules/axios/lib/axios.js'),
        ne = n('./src/constants/env.ts')
      function re(e, t, n) {
        return te.a
          .get(''.concat(ne.TYPE_AND_SWAP_URL, '/v1/suggested-pairs'), {
            params:
              ((r = { chainId: e, query: n, wallet: t }),
              Object.keys(r).forEach(e => {
                ;(void 0 !== r[e] && '' !== r[e]) || delete r[e]
              }),
              r),
          })
          .then(e => e.data.data)
        var r
      }
      var se = u.default.div.withConfig({ displayName: 'PairSuggestion__Wrapper', componentId: 'sc-167kzyl-0' })([
          'position:relative;width:100%;',
        ]),
        oe = Object(u.default)(se).withConfig({
          displayName: 'PairSuggestion__WrapperPopup',
          componentId: 'sc-167kzyl-1',
        })(['height:75vh;background-color:', ';'], e => e.theme.tabActive),
        ie = u.default.div.withConfig({ displayName: 'PairSuggestion__Container', componentId: 'sc-167kzyl-2' })([
          'padding-left:1em;padding-right:1em;display:flex;flex-direction:column;row-gap:1em;',
        ]),
        ae = 3
      t.c = Object(c.forwardRef)(function (e, t) {
        var n = e.onSelectSuggestedPair,
          u = e.setShowModalImportToken,
          y = Object(c.useState)(''),
          w = Object(s.a)(y, 2),
          k = w[0],
          C = w[1],
          _ = Object(c.useState)(-1),
          T = Object(s.a)(_, 2),
          I = T[0],
          S = T[1],
          A = Object(c.useState)(!1),
          E = Object(s.a)(A, 2),
          N = E[0],
          P = E[1],
          F = Object(c.useState)([]),
          B = Object(s.a)(F, 2),
          U = B[0],
          z = B[1],
          H = Object(c.useState)([]),
          G = Object(s.a)(H, 2),
          q = G[0],
          Y = G[1],
          K = Object(c.useState)(''),
          $ = Object(s.a)(K, 2),
          Z = $[0],
          X = $[1],
          Q = Object(c.useState)(0),
          J = Object(s.a)(Q, 2),
          ce = J[0],
          de = J[1],
          le = Object(x.b)(),
          ue = le.account,
          be = le.chainId,
          pe = Object(f.a)(),
          je = Object(l.m)(),
          me = Object(O.c)().mixpanelHandler,
          xe = Object(c.useRef)(!1),
          he = Object(c.useRef)(null),
          Oe = Object(h.e)(!0),
          fe = e => (e.toLowerCase() === j.E.toLowerCase() ? m.i[be] : Object(v.a)(be, Object.values(Oe), e)[0]),
          ge = Object(c.useCallback)(() => {
            var e = he.current
            e && (e.focus(), d.isIOS && (null === e || void 0 === e || e.setSelectionRange(k.length, k.length)))
          }, [k]),
          ve = Object(c.useRef)(''),
          ye = Object(c.useCallback)(
            function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ''
              ;(ve.current = e),
                re(be, ue, e)
                  .then(t => {
                    var n = t.recommendedPairs,
                      r = void 0 === n ? [] : n,
                      s = t.favoritePairs,
                      o = void 0 === s ? [] : s,
                      i = t.amount
                    ve.current === e && (z(M(Oe, r, be)), Y(M(Oe, o, be)), X(i || ''), e || de(o.length))
                  })
                  .catch(e => {
                    console.log(e), z([]), Y([])
                  }),
                e && me(O.a.TAS_TYPING_KEYWORD, e)
            },
            [ue, be, me, Oe],
          ),
          we = Object(c.useMemo)(() => Object(i.debounce)(ye, 100), [ye]),
          ke = Object(g.k)(),
          Ce = e => {
            ge(),
              xe.current ||
                (ce === ae && d.isMobile
                  ? ke({ title: o.a._('You can only favorite up to three token pairs.'), type: b.a.WARNING })
                  : ((xe.current = !0),
                    (function (e, t, n) {
                      return te.a.post(''.concat(ne.TYPE_AND_SWAP_URL, '/v1/favorite-pairs'), {
                        wallet: t,
                        chainId: n + '',
                        tokenIn: e.tokenIn,
                        tokenOut: e.tokenOut,
                      })
                    })(e, ue, be)
                      .then(() => {
                        ye(k), de(e => e + 1)
                      })
                      .catch(console.error)
                      .finally(() => {
                        xe.current = !1
                      }),
                    me(O.a.TAS_LIKE_PAIR, { token_1: e.tokenInSymbol, token_2: e.tokenOutSymbol })))
          },
          _e = e => {
            ge(),
              xe.current ||
                ((xe.current = !0),
                (function (e, t, n) {
                  return te.a.delete(''.concat(ne.TYPE_AND_SWAP_URL, '/v1/favorite-pairs'), {
                    data: { wallet: t, chainId: n + '', tokenIn: e.tokenIn, tokenOut: e.tokenOut },
                  })
                })(e, ue, be)
                  .then(() => {
                    ye(k), de(e => e - 1)
                  })
                  .catch(console.error)
                  .finally(() => {
                    xe.current = !1
                  }),
                me(O.a.TAS_DISLIKE_PAIR, { token_1: e.tokenInSymbol, token_2: e.tokenOutSymbol }))
          },
          Te = () => {
            var e
            P(!1), S(-1), null === (e = he.current) || void 0 === e || e.blur()
          },
          Ie = Object(c.useCallback)(() => {
            P(!0), ge()
          }, [ge])
        Object(c.useEffect)(() => {
          function e(e) {
            'k' === e.key &&
              (e.metaKey || e.ctrlKey) &&
              (e.preventDefault(), Ie(), me(O.a.TAS_PRESS_CTRL_K, 'keyboard hotkey'))
          }
          return (
            window.addEventListener('keydown', e),
            () => {
              window.removeEventListener('keydown', e)
            }
          )
        }, [Ie, me]),
          Object(c.useEffect)(() => {
            N && we(k)
          }, [N, k, we]),
          Object(c.useEffect)(() => {
            C('')
          }, [be])
        var Se = e => {
          if ((me(O.a.TAS_SELECT_PAIR, ''.concat(e.tokenIn, ' to ').concat(e.tokenOut)), !D(Oe, e))) {
            var t,
              s = Object(r.a)(
                Object(r.a)({}, pe),
                {},
                { inputCurrency: R(e.tokenIn, be), outputCurrency: R(e.tokenOut, be) },
              )
            return (
              je({ search: Object(a.stringify)(s) }),
              u(!0),
              void (null === (t = he.current) || void 0 === t || t.blur())
            )
          }
          var o = fe(e.tokenIn),
            i = fe(e.tokenOut)
          n(o, i, Z), Te()
        }
        Object(c.useImperativeHandle)(t, () => ({
          onConfirmImportToken() {
            P(!1), Z && n(void 0, void 0, Z)
          },
        }))
        var Ae = {
            suggestedAmount: Z,
            selectedIndex: I,
            isSearch: !!k,
            isShowListPair: N,
            suggestedPairs: U,
            favoritePairs: q,
            isFullFavoritePair: ce === ae,
            onClickStar: e => {
              L(q, e) ? _e(e) : Ce(e)
            },
            onSelectPair: Se,
            onMouseEnterItem: e => {
              S(e)
            },
          },
          Ee = {
            isShowListPair: N,
            value: k,
            showListView: Ie,
            hideListView: Te,
            onChangeInput: e => {
              C(e), we(e)
            },
            onKeyPressInput: e => {
              var t = U.length + q.length - 1
              switch (e.key) {
                case 'ArrowDown':
                  S(I < t ? e => e + 1 : 0)
                  break
                case 'ArrowUp':
                  S(I > 0 ? e => e - 1 : t)
                  break
                case 'Escape':
                  Te()
                  break
                case 'Enter':
                  var n = q.concat(U)[I]
                  Se(n)
              }
            },
          }
        return Object(W.jsxs)(se, {
          children: [
            Object(W.jsx)(ee, Object(r.a)(Object(r.a)({ ref: he }, Ee), {}, { disabled: d.isMobile })),
            Object(W.jsx)(d.BrowserView, {
              children: Object(W.jsx)(V, Object(r.a)(Object(r.a)({}, Ae), {}, { hasShadow: !0 })),
            }),
            Object(W.jsx)(d.MobileView, {
              children: Object(W.jsx)(p.a, {
                isOpen: N,
                onDismiss: Te,
                enableInitialFocusInput: !0,
                children: Object(W.jsxs)(oe, {
                  children: [
                    Object(W.jsx)(ie, {
                      style: { paddingTop: 20 },
                      children: Object(W.jsx)(ee, Object(r.a)({ ref: he, hasBorder: !0 }, Ee)),
                    }),
                    Object(W.jsx)(V, Object(r.a)({}, Ae)),
                  ],
                }),
              }),
            }),
          ],
        })
      })
    },
    './src/components/swapv2/SwapSettingsPanel/index.tsx': function (e, t, n) {
      'use strict'
      var r = n('./node_modules/@babel/runtime/helpers/esm/slicedToArray.js'),
        s = n('./node_modules/@lingui/react/esm/index.js'),
        o = n('./node_modules/@lingui/core/esm/index.js'),
        i = n('./node_modules/polished/dist/polished.esm.js'),
        a = n('./node_modules/react/index.js'),
        c = n('./node_modules/react-feather/dist/icons/arrow-left.js'),
        d = n('./node_modules/rebass/dist/index.esm.js'),
        l = n('./node_modules/styled-components/dist/styled-components.browser.esm.js'),
        u = n('./src/components/Column/index.tsx'),
        b = n('./src/components/Row/index.tsx'),
        p = n('./src/components/Toggle/index.tsx'),
        j = n('./src/components/Tooltip/index.tsx'),
        m = n('./src/components/TopTrendingSoonTokensInCurrentNetwork/useTopTrendingSoonTokensInCurrentNetwork.ts'),
        x = n('./src/components/Tutorial/TutorialSwap/constant.ts'),
        h = n('./src/hooks/useMixpanel.ts'),
        O = n('./src/hooks/useOnClickOutside.tsx'),
        f = n('./src/hooks/useTheme.ts'),
        g = n('./src/state/user/hooks.tsx'),
        v = n('./src/components/TransactionSettings/AdvanceModeModal.tsx'),
        y = n('./node_modules/react/jsx-runtime.js'),
        w = Object(l.default)(e => {
          var t = e.className,
            n = e.showConfirmation,
            o = e.setShowConfirmation,
            i = Object(g.c)(),
            a = Object(r.a)(i, 2),
            c = a[0],
            l = a[1],
            u = Object(h.c)().mixpanelHandler,
            b = Object(f.a)()
          return Object(y.jsxs)(y.Fragment, {
            children: [
              Object(y.jsxs)(d.b, {
                justifyContent: 'space-between',
                className: t,
                children: [
                  Object(y.jsx)(d.b, {
                    width: 'fit-content',
                    alignItems: 'center',
                    children: Object(y.jsx)(j.c, {
                      fontSize: 12,
                      fontWeight: 400,
                      color: b.subText,
                      underlineColor: b.border,
                      children: Object(y.jsx)(j.a, {
                        text: Object(y.jsx)(s.b, {
                          id: 'Turn this on to make trades with very high price impact or to set very high slippage tolerance. This can result in bad rates and loss of funds. Be cautious.',
                        }),
                        placement: 'right',
                        children: Object(y.jsx)(s.b, { id: 'Degen Mode' }),
                      }),
                    }),
                  }),
                  Object(y.jsx)(p.a, {
                    id: 'toggle-expert-mode-button',
                    isActive: c,
                    toggle: () => {
                      if (c) return l(), u(h.a.DEGEN_MODE_TOGGLE, { type: 'off' }), void o(!1)
                      o(!0)
                    },
                  }),
                ],
              }),
              Object(y.jsx)(v.a, { show: n, setShow: o }),
            ],
          })
        }).withConfig({ displayName: 'DegenModeSetting', componentId: 'sc-1j7eg2r-0' })(
          ['', '{background:', ";&[data-active='true']{background:", ';}}'],
          p.a,
          e => e.theme.buttonBlack,
          e => {
            var t = e.theme
            return Object(i.d)(t.primary, 0.2)
          },
        ),
        k = n('./node_modules/react-device-detect/main.js'),
        C = n('./node_modules/react-feather/dist/icons/chevron-right.js'),
        _ = l.default.span.withConfig({ displayName: 'SettingLabel', componentId: 'sc-1d4vubh-0' })(
          ['font-size:', ';color:', ';font-weight:400;line-height:16px;white-space:nowrap;'],
          k.isMobile ? '14px' : '12px',
          e => e.theme.text,
        ),
        T = n('./src/hooks/useGasPriceFromDeBank.ts'),
        I = l.default.div.withConfig({ displayName: 'GasPriceTrackerSetting__Container', componentId: 'sc-ifmfys-0' })([
          'display:flex;justify-content:space-between;align-items:center;cursor:pointer;',
        ]),
        S = l.default.div.withConfig({ displayName: 'GasPriceTrackerSetting__Group', componentId: 'sc-ifmfys-1' })([
          'display:flex;align-items:center;',
        ]),
        A = l.default.span.withConfig({ displayName: 'GasPriceTrackerSetting__Separator', componentId: 'sc-ifmfys-2' })(
          ['margin-left:4px;margin-right:4px;'],
        ),
        E = l.default.span.withConfig({
          displayName: 'GasPriceTrackerSetting__PriceInWei',
          componentId: 'sc-ifmfys-3',
        })(
          ['color:', ';font-size:', ';font-weight:400;line-height:16px;'],
          e => e.theme.text,
          k.isMobile ? '14px' : '12px',
        ),
        N = l.default.span.withConfig({
          displayName: 'GasPriceTrackerSetting__PriceInUSD',
          componentId: 'sc-ifmfys-4',
        })(
          ['color:', ';font-size:', ';font-weight:400;line-height:16px;'],
          e => e.theme.subText,
          k.isMobile ? '14px' : '12px',
        ),
        L = e => (e ? '$'.concat(e) : '-'),
        P = e => {
          var t,
            n = e.onClick,
            r = Object(T.b)(),
            o = Object(f.a)()
          return r
            ? Object(y.jsxs)(I, {
                onClick: n,
                children: [
                  Object(y.jsx)(_, { children: Object(y.jsx)(s.b, { id: 'Gas Price Tracker' }) }),
                  Object(y.jsxs)(S, {
                    children: [
                      Object(y.jsx)(E, {
                        children: ((t = r[T.a.NORMAL].gasPriceInGwei), t ? ''.concat(t, ' gwei') : '-'),
                      }),
                      Object(y.jsx)(A, { children: '|' }),
                      Object(y.jsx)(N, { children: L(r[T.a.NORMAL].minimumTxFeeInUSD) }),
                      Object(y.jsx)(C.a, { size: 20, color: o.subText }),
                    ],
                  }),
                ],
              })
            : null
        },
        D = n('./src/state/customizeDexes/hooks.ts'),
        M = l.default.div.withConfig({ displayName: 'LiquiditySourcesSetting__Group', componentId: 'sc-1qe8qwp-0' })(
          ['display:flex;align-items:center;color:', ';font-size:', ';'],
          e => e.theme.subText,
          k.isMobile ? '14px' : '12px',
        ),
        R = l.default.span.withConfig({
          displayName: 'LiquiditySourcesSetting__NumberOfSources',
          componentId: 'sc-1qe8qwp-1',
        })(['color:', ';font-weight:400;line-height:16px;'], e => e.theme.text),
        W = e => {
          var t = e.onClick,
            n = Object(f.a)(),
            o = Object(D.a)(),
            i = Object(D.b)(),
            a = Object(r.a)(i, 1)[0]
          if (null === o || void 0 === o || !o.length) return null
          var c = null === o || void 0 === o ? void 0 : o.length,
            l = o.filter(e => !a.includes(e.id))
          return Object(y.jsxs)(d.b, {
            justifyContent: 'space-between',
            alignItems: 'center',
            sx: { cursor: 'pointer' },
            onClick: t,
            children: [
              Object(y.jsx)(M, {
                children: Object(y.jsx)(j.c, {
                  fontSize: 12,
                  fontWeight: 400,
                  color: n.subText,
                  underlineColor: n.border,
                  children: Object(y.jsx)(j.a, {
                    text: Object(y.jsx)(s.b, {
                      id: 'Your trade is routed through one or more of these liquidity sources',
                    }),
                    placement: 'right',
                    children: Object(y.jsx)(s.b, { id: 'Liquidity Sources' }),
                  }),
                }),
              }),
              Object(y.jsxs)(M, {
                children: [
                  Object(y.jsxs)(R, { children: [l.length || c, ' out of ', c, ' selected'] }),
                  Object(y.jsx)(C.a, { size: 20, color: n.subText }),
                ],
              }),
            ],
          })
        },
        F = n('./src/components/swapv2/SwapSettingsPanel/SlippageSetting.tsx'),
        B = n('./src/components/swapv2/SwapSettingsPanel/TransactionTimeLimitSetting.tsx'),
        U = Object(l.default)(c.a).withConfig({
          displayName: 'SwapSettingsPanel__BackIconWrapper',
          componentId: 'sc-1nd1jtd-0',
        })(
          ['height:20px;width:20px;margin-right:10px;cursor:pointer;path{stroke:', ' !important;}'],
          e => e.theme.text,
        ),
        z = l.default.span.withConfig({ displayName: 'SwapSettingsPanel__BackText', componentId: 'sc-1nd1jtd-1' })(
          ['font-size:18px;font-weight:500;color:', ';'],
          e => e.theme.text,
        )
      t.a = Object(l.default)(e => {
        var t = e.isLimitOrder,
          n = e.className,
          i = e.onBack,
          c = e.onClickLiquiditySources,
          l = e.onClickGasPriceTracker,
          v = Object(f.a)(),
          k = Object(m.a)().data.length > 0,
          C = Object(h.c)().mixpanelHandler,
          _ = Object(g.o)(),
          T = Object(g.m)(),
          I = Object(g.l)(),
          S = Object(g.q)(),
          A = Object(g.t)(),
          E = Object(g.r)(),
          N = Object(g.n)(),
          L = Object(g.s)(),
          D = Object(a.useState)(!1),
          M = Object(r.a)(D, 2),
          R = M[0],
          H = M[1],
          G = Object(a.useRef)(null)
        return (
          Object(O.a)(G, () => !R && i()),
          Object(y.jsx)(d.a, {
            width: '100%',
            className: n,
            id: x.b.TRADING_SETTING_CONTENT,
            ref: G,
            children: Object(y.jsxs)(d.b, {
              width: '100%',
              flexDirection: 'column',
              marginBottom: '4px',
              children: [
                Object(y.jsxs)(d.b, {
                  alignItems: 'center',
                  sx: { marginTop: '5px' },
                  children: [Object(y.jsx)(U, { onClick: i }), Object(y.jsx)(z, { children: o.a._('Settings') })],
                }),
                Object(y.jsxs)(d.b, {
                  sx: { marginTop: '22px', flexDirection: 'column', rowGap: '12px', width: '100%' },
                  children: [
                    !t &&
                      Object(y.jsxs)(y.Fragment, {
                        children: [
                          Object(y.jsx)('span', {
                            className: 'settingTitle',
                            children: Object(y.jsx)(s.b, { id: 'Advanced Settings' }),
                          }),
                          Object(y.jsx)(F.a, {}),
                          Object(y.jsx)(B.a, {}),
                          Object(y.jsx)(w, { showConfirmation: R, setShowConfirmation: H }),
                          Object(y.jsx)(P, { onClick: l }),
                          Object(y.jsx)(W, { onClick: c }),
                        ],
                      }),
                    Object(y.jsxs)(d.b, {
                      sx: {
                        flexDirection: 'column',
                        rowGap: '12px',
                        paddingTop: '16px',
                        borderTop: '1px solid '.concat(v.border),
                      },
                      children: [
                        Object(y.jsx)(d.e, {
                          as: 'span',
                          sx: { fontSize: '16px', fontWeight: 500 },
                          children: Object(y.jsx)(s.b, { id: 'Display Settings' }),
                        }),
                        Object(y.jsxs)(u.a, {
                          gap: 'md',
                          children: [
                            k &&
                              Object(y.jsxs)(b.b, {
                                children: [
                                  Object(y.jsx)(b.d, {
                                    children: Object(y.jsx)(j.c, {
                                      fontSize: 12,
                                      fontWeight: 400,
                                      color: v.subText,
                                      underlineColor: v.border,
                                      children: Object(y.jsx)(j.a, {
                                        text: Object(y.jsx)(s.b, {
                                          id: 'Turn on to display tokens that could be trending soon',
                                        }),
                                        placement: 'right',
                                        children: Object(y.jsx)(s.b, { id: 'Trending Soon' }),
                                      }),
                                    }),
                                  }),
                                  Object(y.jsx)(p.a, {
                                    isActive: N,
                                    toggle: () => {
                                      L(),
                                        C(t ? h.a.LO_DISPLAY_SETTING_CLICK : h.a.SWAP_DISPLAY_SETTING_CLICK, {
                                          display_setting: N ? 'Trending Soon Off' : 'Trending Soon On',
                                        })
                                    },
                                  }),
                                ],
                              }),
                            Object(y.jsxs)(b.b, {
                              children: [
                                Object(y.jsx)(b.d, {
                                  children: Object(y.jsx)(j.c, {
                                    fontSize: 12,
                                    fontWeight: 400,
                                    color: v.subText,
                                    underlineColor: v.border,
                                    children: Object(y.jsx)(j.a, {
                                      text: Object(y.jsx)(s.b, { id: 'Turn on to display live chart' }),
                                      placement: 'right',
                                      children: Object(y.jsx)(s.b, { id: 'Live Chart' }),
                                    }),
                                  }),
                                }),
                                Object(y.jsx)(p.a, {
                                  isActive: I,
                                  toggle: () => {
                                    C(h.a.LIVE_CHART_ON_OFF, { live_chart_on_or_off: !I }),
                                      C(t ? h.a.LO_DISPLAY_SETTING_CLICK : h.a.SWAP_DISPLAY_SETTING_CLICK, {
                                        display_setting: I ? 'Live Chart Off' : 'Live Chart On',
                                      }),
                                      S()
                                  },
                                }),
                              ],
                            }),
                            !t &&
                              Object(y.jsxs)(y.Fragment, {
                                children: [
                                  Object(y.jsxs)(b.b, {
                                    children: [
                                      Object(y.jsx)(b.d, {
                                        children: Object(y.jsx)(j.c, {
                                          fontSize: 12,
                                          fontWeight: 400,
                                          color: v.subText,
                                          underlineColor: v.border,
                                          children: Object(y.jsx)(j.a, {
                                            text: Object(y.jsx)(s.b, { id: 'Turn on to display trade route' }),
                                            placement: 'right',
                                            children: Object(y.jsx)(s.b, { id: 'Trade Route' }),
                                          }),
                                        }),
                                      }),
                                      Object(y.jsx)(p.a, {
                                        isActive: _,
                                        toggle: () => {
                                          C(h.a.TRADING_ROUTE_ON_OFF, { trading_route_on_or_off: !_ }),
                                            C(h.a.SWAP_DISPLAY_SETTING_CLICK, {
                                              display_setting: _ ? 'Trade Route Off' : 'Trade Route On',
                                            }),
                                            A()
                                        },
                                      }),
                                    ],
                                  }),
                                  Object(y.jsxs)(b.b, {
                                    children: [
                                      Object(y.jsx)(b.d, {
                                        children: Object(y.jsx)(j.c, {
                                          fontSize: 12,
                                          fontWeight: 400,
                                          color: v.subText,
                                          underlineColor: v.border,
                                          children: Object(y.jsx)(j.a, {
                                            text: Object(y.jsx)(s.b, { id: 'Turn on to display token info' }),
                                            placement: 'right',
                                            children: Object(y.jsx)(s.b, { id: 'Token Info' }),
                                          }),
                                        }),
                                      }),
                                      Object(y.jsx)(p.a, {
                                        isActive: T,
                                        toggle: () => {
                                          C(h.a.SWAP_DISPLAY_SETTING_CLICK, {
                                            display_setting: T ? 'Token Info Off' : 'Token Info On',
                                          }),
                                            E()
                                        },
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          })
        )
      }).withConfig({ displayName: 'SwapSettingsPanel', componentId: 'sc-1nd1jtd-2' })(
        ['', '{background:', ";&[data-active='true']{background:", ';}}'],
        p.a,
        e => e.theme.buttonBlack,
        e => {
          var t = e.theme
          return Object(i.d)(t.primary, 0.2)
        },
      )
    },
    './src/components/swapv2/TokenInfoTab.tsx': function (e, t, n) {
      'use strict'
      var r,
        s,
        o = n('./node_modules/@babel/runtime/helpers/esm/slicedToArray.js'),
        i = n('./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'),
        a = n('./node_modules/@lingui/react/esm/index.js'),
        c = n('./node_modules/@lingui/core/esm/index.js'),
        d = n('./node_modules/react/index.js'),
        l = n('./node_modules/react-feather/dist/icons/arrow-left.js'),
        u = n('./node_modules/rebass/dist/index.esm.js'),
        b = n('./node_modules/styled-components/dist/styled-components.browser.esm.js'),
        p = n.p + 'static/media/coingecko-light.17fb7fb2.svg',
        j = n.p + 'static/media/coingecko.113ba3ec.svg',
        m = n('./src/components/AddToMetamask/index.tsx'),
        x = n('./src/components/Button/index.tsx'),
        h = n('./src/components/Copy/index.tsx'),
        O = n('./src/components/CurrencyLogo/index.tsx'),
        f = n('./src/components/Loader/index.tsx'),
        g = n('./src/components/Row/index.tsx'),
        v = n('./src/hooks/index.ts'),
        y = n('./src/hooks/useTokenInfo.ts'),
        w = n('./src/state/swap/actions.ts'),
        k = n('./src/state/user/hooks.tsx'),
        C = n('./src/utils/index.ts'),
        _ = n('./src/utils/dmm.ts'),
        T = n('./src/utils/formatBalance.ts'),
        I = n('./node_modules/react/jsx-runtime.js'),
        S = '--',
        A = b.default.div.withConfig({ displayName: 'TokenInfoTab__Wrapper', componentId: 'sc-qe7u5j-0' })([
          'border-radius:4px;width:100%;',
        ]),
        E = b.default.div.withConfig({ displayName: 'TokenInfoTab__TabContainer', componentId: 'sc-qe7u5j-1' })(
          ['display:flex;flex:1;border-radius:999px;background-color:', ';padding:2px;'],
          e => e.theme.tabBackground,
        ),
        N = Object(b.default)(x.d).withConfig({ displayName: 'TokenInfoTab__Tab', componentId: 'sc-qe7u5j-2' })(
          [
            'display:flex;justify-content:center;align-items:center;flex:1;background-color:',
            ';padding:4px;font-size:12px;font-weight:500;border-radius:999px;&:hover{text-decoration:none;}',
          ],
          e => {
            var t = e.theme
            return e.isActive ? t.tabActive : t.tabBackground
          },
        ),
        L = b.default.div.withConfig({ displayName: 'TokenInfoTab__TabText', componentId: 'sc-qe7u5j-3' })(
          ['display:flex;align-items:center;gap:2px;color:', ';margin-left:4px;'],
          e => {
            var t = e.theme
            return e.isActive ? t.text : t.subText
          },
        ),
        P = Object(b.default)(g.b).withConfig({ displayName: 'TokenInfoTab__InfoRow', componentId: 'sc-qe7u5j-4' })(
          ['padding:14px 0;border-bottom:1px solid ', ';', ''],
          e => e.theme.border,
          e => e.theme.mediaWidth.upToSmall(r || (r = Object(i.a)(['\n    padding: 12px 0\n  ']))),
        ),
        D = b.default.div.withConfig({ displayName: 'TokenInfoTab__InfoRowLabel', componentId: 'sc-qe7u5j-5' })(
          ['color:', ';font-size:12px;'],
          e => e.theme.subText,
        ),
        M = b.default.div.withConfig({ displayName: 'TokenInfoTab__InfoRowValue', componentId: 'sc-qe7u5j-6' })(
          ['color:', ';font-size:12px;font-weight:500;'],
          e => e.theme.text,
        ),
        R = b.default.div.withConfig({ displayName: 'TokenInfoTab__PoweredByWrapper', componentId: 'sc-qe7u5j-7' })([
          'display:flex;gap:4px;justify-content:flex-end;align-items:center;margin-top:14px;',
        ]),
        W = b.default.span.withConfig({ displayName: 'TokenInfoTab__PoweredByText', componentId: 'sc-qe7u5j-8' })(
          ['font-size:12px;font-weight:400;color:', ';'],
          e => e.theme.subText,
        ),
        F = b.default.span.withConfig({ displayName: 'TokenInfoTab__BackText', componentId: 'sc-qe7u5j-9' })(
          ['font-size:18px;font-weight:500;color:', ';'],
          e => e.theme.text,
        ),
        B = Object(b.default)(l.a).withConfig({
          displayName: 'TokenInfoTab__BackIconWrapper',
          componentId: 'sc-qe7u5j-10',
        })(['height:20px;width:20px;margin-right:10px;cursor:pointer;path{stroke:', ' !important;}'], e => e.theme.text)
      !(function (e) {
        ;(e[(e.TOKEN_IN = 0)] = 'TOKEN_IN'), (e[(e.TOKEN_OUT = 1)] = 'TOKEN_OUT')
      })(s || (s = {}))
      t.a = e => {
        var t = e.currencies,
          n = e.onBack,
          r = Object(v.b)().chainId,
          i = Object(_.i)(t[w.a.INPUT]),
          l = Object(_.i)(t[w.a.OUTPUT]),
          b = null === i || void 0 === i ? void 0 : i.wrapped,
          x = null === l || void 0 === l ? void 0 : l.wrapped,
          U = Object(d.useState)(s.TOKEN_IN),
          z = Object(o.a)(U, 2),
          H = z[0],
          G = z[1],
          q = H === s.TOKEN_OUT ? x : b,
          V = Object(y.a)(q),
          Y = V.data,
          K = V.loading,
          $ = Object(k.f)()
        Object(d.useEffect)(() => {
          ;(null === b || void 0 === b ? void 0 : b.address) && G(s.TOKEN_IN)
        }, [r, b])
        var Z = [
            { label: c.a._('Price'), value: Y.price ? Object(C.i)(Y.price.toString(), !0) : S },
            {
              label: c.a._('Trading Volume (24H)'),
              value: Y.tradingVolume ? Object(T.d)(Y.tradingVolume.toString(), !0) : S,
            },
            {
              label: c.a._('Market Cap Rank'),
              value: Y.marketCapRank ? '#'.concat(Object(C.i)(Y.marketCapRank.toString())) : S,
            },
            { label: c.a._('Market Cap'), value: Y.marketCap ? Object(T.d)(Y.marketCap.toString(), !0) : S },
            { label: c.a._('All-Time High'), value: Y.allTimeHigh ? Object(C.i)(Y.allTimeHigh.toString(), !0) : S },
            { label: c.a._('All-Time Low'), value: Y.allTimeLow ? Object(C.i)(Y.allTimeLow.toString(), !0) : S },
            {
              label: c.a._('Circulating Supply'),
              value: Y.circulatingSupply ? Object(T.d)(Y.circulatingSupply.toString()) : S,
            },
            { label: c.a._('Total Supply'), value: Y.totalSupply ? Object(T.d)(Y.totalSupply.toString()) : S },
          ],
          X = H === s.TOKEN_IN,
          Q = H === s.TOKEN_OUT
        return Object(I.jsxs)(I.Fragment, {
          children: [
            Object(I.jsxs)(A, {
              children: [
                Object(I.jsxs)(u.b, {
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '4px',
                  children: [
                    n &&
                      Object(I.jsxs)(u.b, {
                        alignItems: 'center',
                        marginRight: 20,
                        children: [Object(I.jsx)(B, { onClick: n }), Object(I.jsx)(F, { children: c.a._('Info') })],
                      }),
                    Object(I.jsxs)(E, {
                      children: [
                        Object(I.jsxs)(N, {
                          isActive: X,
                          padding: '0',
                          onClick: () => G(s.TOKEN_IN),
                          children: [
                            Object(I.jsx)(O.a, { currency: i, size: '16px' }),
                            Object(I.jsx)(L, { isActive: X, children: null === i || void 0 === i ? void 0 : i.symbol }),
                          ],
                        }),
                        Object(I.jsxs)(N, {
                          isActive: Q,
                          padding: '0',
                          onClick: () => G(s.TOKEN_OUT),
                          children: [
                            Object(I.jsx)(O.a, { currency: l, size: '16px' }),
                            Object(I.jsx)(L, { isActive: Q, children: null === l || void 0 === l ? void 0 : l.symbol }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                Z.map(e =>
                  Object(I.jsxs)(
                    P,
                    {
                      children: [
                        Object(I.jsx)(D, { children: e.label }),
                        Object(I.jsx)(M, { children: K ? Object(I.jsx)(f.a, { size: '10px' }) : e.value }),
                      ],
                    },
                    e.label,
                  ),
                ),
                Object(I.jsxs)(P, {
                  style: { borderBottom: 'none', paddingBottom: 0 },
                  children: [
                    Object(I.jsx)(D, { children: Object(I.jsx)(a.b, { id: 'Contract Address' }) }),
                    Object(I.jsx)(g.a, {
                      width: 'fit-content',
                      gap: '4px',
                      children: q
                        ? Object(I.jsxs)(I.Fragment, {
                            children: [
                              Object(I.jsx)(O.a, { currency: q, size: '16px' }),
                              Object(I.jsx)(M, { children: Object(C.A)(r, q.address, 3) }),
                              Object(I.jsx)(h.a, { toCopy: q.address }),
                              Object(I.jsx)(m.a, { token: q }),
                            ],
                          })
                        : Object(I.jsx)(f.a, {}),
                    }),
                  ],
                }),
              ],
            }),
            Object(I.jsxs)(R, {
              children: [
                Object(I.jsx)(W, { children: Object(I.jsx)(a.b, { id: 'Powered by' }) }),
                ' ',
                Object(I.jsx)('img', { src: $ ? j : p, alt: 'Coingecko logo' }),
              ],
            }),
          ],
        })
      }
    },
    './src/components/swapv2/TokenInfoV2/index.tsx': function (e, t, n) {
      'use strict'
      var r,
        s,
        o,
        i,
        a = n('./node_modules/@babel/runtime/helpers/esm/objectSpread2.js'),
        c = n('./src/components/swapv2/styleds.tsx'),
        d = n('./src/constants/tokenLists/token-info.ts'),
        l = n('./src/hooks/index.ts'),
        u = n('./src/hooks/useTokenInfo.ts'),
        b = n('./src/utils/dmm.ts'),
        p = n('./src/utils/string.ts'),
        j = n('./src/utils/tokenInfo.ts'),
        m = n('./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'),
        x = n('./node_modules/@lingui/react/esm/index.js'),
        h = n('./node_modules/react/index.js'),
        O = n('./node_modules/react-device-detect/main.js'),
        f = n('./node_modules/react-feather/dist/icons/dollar-sign.js'),
        g = n('./node_modules/react-feather/dist/icons/bar-chart-2.js'),
        v = n('./node_modules/react-feather/dist/icons/repeat.js'),
        y = n('./node_modules/rebass/dist/index.esm.js'),
        w = n('./node_modules/styled-components/dist/styled-components.browser.esm.js'),
        k = n('./src/components/Collapse.tsx'),
        C = n('./src/components/CurrencyLogo/index.tsx'),
        _ = n('./src/components/Loader/index.tsx'),
        T = n('./src/hooks/useTheme.ts'),
        I = n('./src/utils/index.ts'),
        S = n('./src/utils/numbers.ts'),
        A = n('./node_modules/react/jsx-runtime.js'),
        E = '--',
        N = Object(w.default)(k.a).withConfig({
          displayName: 'SingleTokenInfo__CollapseItemWrapper',
          componentId: 'sc-1dv494q-0',
        })(['border-radius:20px;']),
        L = w.default.div.withConfig({ displayName: 'SingleTokenInfo__InfoRow', componentId: 'sc-1dv494q-1' })(
          ['display:flex;flex-direction:column;row-gap:4px;', ' ', ''],
          e =>
            e.theme.mediaWidth.upToSmall(r || (r = Object(m.a)(['\n    border: none;\n    padding: 20px 0px;\n  ']))),
          e =>
            e.theme.mediaWidth.upToExtraSmall(
              s ||
                (s = Object(m.a)([
                  '\n    border-bottom: 1px solid ',
                  ';\n    :last-child {\n      border-bottom: none;\n    }\n  ',
                ])),
              e => e.theme.border,
            ),
        ),
        P = w.default.div.withConfig({ displayName: 'SingleTokenInfo__InfoRowValue', componentId: 'sc-1dv494q-2' })(
          ['color:', ';font-size:16px;font-weight:500;line-height:20px;'],
          e => e.theme.subText,
        ),
        D = w.default.div.withConfig({ displayName: 'SingleTokenInfo__InfoRowLabel', componentId: 'sc-1dv494q-3' })(
          ['color:', ';font-size:14px;font-weight:500;line-height:24px;'],
          e => e.theme.subText,
        ),
        M = w.default.h2.withConfig({ displayName: 'SingleTokenInfo__AboutText', componentId: 'sc-1dv494q-4' })(
          ['color:', ';font-size:20px;font-weight:500;margin:0;', ''],
          e => e.theme.text,
          e => e.theme.mediaWidth.upToSmall(o || (o = Object(m.a)(['\n    font-size: 16px;\n  ']))),
        )
      function R(e) {
        return e ? e.replace(/\s\(.*\)/i, '') : ''
      }
      var W = w.default.div.withConfig({
          displayName: 'SingleTokenInfo__SwapInstruction',
          componentId: 'sc-1dv494q-5',
        })(['margin-top:16px;color:', ';font-size:14px;font-weight:500;line-height:24px;'], e => e.theme.subText),
        F = w.default.div.withConfig({ displayName: 'SingleTokenInfo__InfoRowWrapper', componentId: 'sc-1dv494q-6' })(
          ['display:flex;justify-content:space-between;', ''],
          e => e.theme.mediaWidth.upToExtraSmall(i || (i = Object(m.a)(['\n    flex-direction: column;\n  ']))),
        )
      function B(e) {
        var t = e.fromCurrency,
          n = e.toCurrency,
          r = e.fromCurrencyInfo,
          s = e.toCurrencyInfo,
          o = e.expandedOnMount
        if (!t || !n || !r || !s) return null
        var i = t.symbol,
          a = n.symbol,
          c = t.name,
          d = n.name,
          l = R(r.name || c),
          u = R(s.name || d)
        return Object(A.jsx)(N, {
          expandedOnMount: o,
          header: Object(A.jsxs)(M, { children: ['How to swap ', i, ' to ', a, '?'] }),
          children: Object(A.jsx)(W, {
            children: Object(A.jsxs)(y.e, {
              as: 'span',
              children: [
                l,
                ' (',
                i,
                ') can be exchanged to ',
                u,
                ' (',
                i,
                ' to ',
                a,
                ') on PunkSwap, a cryptocurrency decentralized exchange. By using PunkSwap, users can trade ',
                i,
                ' to ',
                a,
                ' on networks at the best rates, and earn more with your ',
                i,
                ' token without needing to check rates across multiple platforms.',
              ],
            }),
          }),
        })
      }
      var U = () => {
          var e = Object(T.a)()
          return Object(A.jsxs)(y.b, {
            alignItems: 'center',
            sx: { color: e.text, fontSize: '14px', fontWeight: 500, lineHeight: '24px', columnGap: '4px' },
            children: [
              Object(A.jsx)(y.b, {
                sx: {
                  borderRadius: '99999px',
                  width: '14px',
                  height: '14px',
                  background: e.text,
                  alignItems: 'center',
                  justifyContent: 'center',
                },
                children: Object(A.jsx)(f.a, { width: '12px', height: '12px', color: e.background }),
              }),
              Object(A.jsx)(y.e, { as: 'span', children: Object(A.jsx)(x.b, { id: 'Price' }) }),
            ],
          })
        },
        z = () => {
          var e = Object(T.a)()
          return Object(A.jsxs)(y.b, {
            alignItems: 'center',
            sx: { color: e.text, fontSize: '14px', fontWeight: 500, lineHeight: '24px', columnGap: '4px' },
            children: [
              Object(A.jsx)(g.a, { strokeWidth: '5px', fill: 'currentColor', width: '16px', height: '16px' }),
              Object(A.jsx)(y.e, { as: 'span', children: Object(A.jsx)(x.b, { id: 'Market Cap Rank' }) }),
            ],
          })
        },
        H = () => {
          var e = Object(T.a)()
          return Object(A.jsxs)(y.b, {
            alignItems: 'center',
            sx: { color: e.text, fontSize: '14px', fontWeight: 500, lineHeight: '24px', columnGap: '4px' },
            children: [
              Object(A.jsx)(v.a, { strokeWidth: '4px', width: '14px', height: '14px' }),
              Object(A.jsx)(y.e, { as: 'span', children: Object(A.jsx)(x.b, { id: '24H Volume' }) }),
            ],
          })
        },
        G = e => {
          var t,
            n,
            r = e.data,
            s = e.currency,
            o = e.loading,
            i = e.expandedOnMount,
            a = (n = null === r || void 0 === r || null === (t = r.description) || void 0 === t ? void 0 : t.en)
              ? n
                  .replace(/\u200B/g, '')
                  .replace(/<a[^>]*>/g, '')
                  .replace(/<\/a>/g, '')
                  .replace(/<.*?script.*?>.*?<\/.*?script.*?>/gim, '')
              : '',
            c = Object(h.useRef)(null),
            d = null === s || void 0 === s ? void 0 : s.symbol,
            l = r.name || (null === s || void 0 === s ? void 0 : s.name),
            u = [
              { label: Object(A.jsx)(U, {}), value: r.price ? Object(I.i)(r.price.toString(), !0) : E },
              {
                label: Object(A.jsx)(z, {}),
                value: r.marketCapRank ? '#'.concat(Object(I.i)(r.marketCapRank.toString())) : E,
              },
              {
                label: Object(A.jsx)(H, {}),
                value: r.tradingVolume
                  ? O.isMobile
                    ? Object(S.a)(r.tradingVolume, 2).toUpperCase()
                    : Object(I.i)(r.tradingVolume.toString(), !0)
                  : E,
              },
            ]
          return Object(A.jsxs)(N, {
            expandedOnMount: i,
            header: Object(A.jsxs)(y.b, {
              alignItems: 'center',
              children: [
                Object(A.jsx)(C.a, { currency: s, size: '24px', style: { marginRight: 10 } }),
                Object(A.jsxs)(M, { children: ['About ', d, ' ', l !== d ? '('.concat(R(l), ')') : null] }),
              ],
            }),
            children: [
              Object(A.jsx)(D, {
                className: 'desc',
                ref: c,
                dangerouslySetInnerHTML: { __html: a.replace(/\r\n\r\n/g, '<br><br>') },
              }),
              Object(A.jsx)(F, {
                children: u.map((e, t) =>
                  Object(A.jsxs)(
                    L,
                    {
                      children: [
                        Object(A.jsx)(D, { children: e.label }),
                        Object(A.jsx)(P, { children: o ? Object(A.jsx)(_.a, {}) : e.value }),
                      ],
                    },
                    t,
                  ),
                ),
              }),
            ],
          })
        },
        q = e => {
          var t
          return (
            !e.price &&
            !(null !== e && void 0 !== e && null !== (t = e.description) && void 0 !== t && t.en) &&
            !e.tradingVolume &&
            !e.marketCapRank
          )
        },
        V = e => Object(a.a)(Object(a.a)({}, e), {}, { description: Object(a.a)({}, e.description) })
      t.a = e => {
        var t = e.currencyIn,
          n = e.currencyOut,
          r = Object(b.i)(t),
          s = Object(b.i)(n),
          o = null === r || void 0 === r ? void 0 : r.wrapped,
          i = null === s || void 0 === s ? void 0 : s.wrapped,
          a = Object(u.a)(o),
          m = a.data,
          x = a.loading,
          h = Object(u.a)(i),
          O = h.data,
          f = h.loading,
          g = (e => {
            var t = e.tokenInfo1,
              n = e.tokenInfo2,
              r = e.tokenWrapped1,
              s = e.tokenWrapped2,
              o = e.chainId,
              i = V(t),
              a = V(n),
              c = !1
            if (r && s && o) {
              var l = Object(p.c)(r),
                u = Object(p.c)(s),
                b = Object(j.a)(o, l, u),
                m = b.isInWhiteList,
                x = b.data
              if (m) {
                var h, O
                c = m
                var f = d.b[l],
                  g = d.b[u],
                  v = null === (h = x[l]) || void 0 === h ? void 0 : h.name,
                  y = null === (O = x[u]) || void 0 === O ? void 0 : O.name
                v && (i.name = v), y && (a.name = y), f && (i.description.en = f), g && (a.description.en = g)
              }
            }
            return { tokenInfo1: i, tokenInfo2: a, isInWhiteList: c }
          })({ tokenInfo1: m, tokenInfo2: O, tokenWrapped1: t, tokenWrapped2: n, chainId: Object(l.b)().chainId }),
          v = g.tokenInfo1,
          y = g.tokenInfo2,
          w = g.isInWhiteList,
          k = !q(v) && w,
          C = !q(y) && w
        if (!C && !k) return null
        var _ = Boolean(k && C && t && n && w)
        return Object(A.jsxs)(c.t, {
          children: [
            k && Object(A.jsx)(G, { expandedOnMount: !0, data: v, loading: x, currency: r }),
            C && Object(A.jsx)(G, { data: y, loading: f, currency: s }),
            _ && Object(A.jsx)(B, { fromCurrency: t, toCurrency: n, fromCurrencyInfo: v, toCurrencyInfo: y }),
          ],
        })
      }
    },
    './src/components/swapv2/TradePrice.tsx': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return p
      })
      var r = n('./node_modules/@babel/runtime/helpers/esm/objectSpread2.js'),
        s = n('./node_modules/@babel/runtime/helpers/esm/slicedToArray.js'),
        o = n('./node_modules/@lingui/react/esm/index.js'),
        i = n('./node_modules/react/index.js'),
        a = n('./node_modules/react-feather/dist/icons/repeat.js'),
        c = n('./node_modules/rebass/dist/index.esm.js'),
        d = n('./src/hooks/useTheme.ts'),
        l = n('./src/utils/dmm.ts'),
        u = n('./src/components/swapv2/styleds.tsx'),
        b = n('./node_modules/react/jsx-runtime.js')
      function p(e) {
        var t,
          n = e.price,
          p = e.label,
          j = e.icon,
          m = e.style,
          x = void 0 === m ? {} : m,
          h = e.color,
          O = Object(d.a)(),
          f = Object(i.useState)(!1),
          g = Object(s.a)(f, 2),
          v = g[0],
          y = g[1]
        try {
          var w
          t = v
            ? null === n || void 0 === n || null === (w = n.invert()) || void 0 === w
              ? void 0
              : w.toSignificant(6)
            : null === n || void 0 === n
            ? void 0
            : n.toSignificant(6)
        } catch (I) {}
        var k = Boolean(
            (null === n || void 0 === n ? void 0 : n.baseCurrency) &&
              (null === n || void 0 === n ? void 0 : n.quoteCurrency) &&
              t,
          ),
          C = Object(l.i)(null === n || void 0 === n ? void 0 : n.quoteCurrency),
          _ = Object(l.i)(null === n || void 0 === n ? void 0 : n.baseCurrency),
          T = v
            ? '1 '
                .concat(null === C || void 0 === C ? void 0 : C.symbol, ' = ')
                .concat(t, ' ')
                .concat(null === _ || void 0 === _ ? void 0 : _.symbol)
            : '1 '
                .concat(null === _ || void 0 === _ ? void 0 : _.symbol, ' = ')
                .concat(t, ' ')
                .concat(null === C || void 0 === C ? void 0 : C.symbol)
        return Object(b.jsx)(c.e, {
          fontWeight: 500,
          fontSize: 12,
          color: O.subText,
          style: Object(r.a)({ alignItems: 'center', display: 'flex', cursor: 'pointer' }, x),
          onClick: () => y(!v),
          height: '22px',
          children: k
            ? Object(b.jsxs)(b.Fragment, {
                children: [
                  p && Object(b.jsxs)(b.Fragment, { children: [p, '\xa0'] }),
                  ' ',
                  Object(b.jsx)(c.e, { color: h, children: T }),
                  Object(b.jsx)(u.n, { children: j || Object(b.jsx)(a.a, { size: 12 }) }),
                ],
              })
            : Object(b.jsx)(u.d, { children: Object(b.jsx)(o.b, { id: 'Calculating' }) }),
        })
      }
    },
    './src/constants/abis/eip2612.json': function (e) {
      e.exports = JSON.parse(
        '[{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"nonces","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"}]',
      )
    },
    './src/constants/abis/limit_order.json': function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonce","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]',
      )
    },
    './src/hooks/useBaseTradeInfo.ts': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return p
      })
      var r = n('./node_modules/@babel/runtime/helpers/esm/objectSpread2.js'),
        s = n('./node_modules/@babel/runtime/helpers/esm/slicedToArray.js'),
        o = n('./node_modules/@kyberswap/ks-sdk-core/dist/index.js'),
        i = n('./node_modules/ethers/lib.esm/index.js'),
        a = n('./node_modules/react/index.js'),
        c =
          (n('./src/services/route/utils.ts'),
          n('./src/components/SwapForm/hooks/useGetRoute.ts'),
          n('./src/components/swapv2/LimitOrder/const.ts')),
        d = n('./src/hooks/index.ts'),
        l = n('./src/hooks/useDebounce.ts'),
        u = n('./src/hooks/useInterval.ts'),
        b = n('./src/state/tokenPrices/hooks.ts')
      function p(e, t) {
        var n = Object(d.e)().library,
          p = Object(a.useState)(0),
          j = Object(s.a)(p, 2),
          m = j[0],
          x = j[1],
          h = (function (e, t, n) {
            var r = Object(d.b)().chainId,
              s = n || r,
              i = Object(a.useMemo)(() => {
                var n = [
                  null === e || void 0 === e ? void 0 : e.wrapped.address,
                  null === t || void 0 === t ? void 0 : t.wrapped.address,
                ]
                return n.includes(o.WETH[s].wrapped.address) || n.push(o.WETH[s].wrapped.address), n.filter(Boolean)
              }, [e, t, s]),
              c = Object(b.b)(i, s),
              l = c.data,
              u = c.loading,
              p = c.refetch,
              j = l[o.WETH[s].wrapped.address]
            return {
              loading: u,
              tradeInfo: Object(a.useMemo)(() => {
                if (e && t) {
                  var n = l[null === e || void 0 === e ? void 0 : e.wrapped.address],
                    r = l[null === t || void 0 === t ? void 0 : t.wrapped.address]
                  if (n && r)
                    return { priceUsdIn: n, priceUsdOut: r, marketRate: n / r, invertRate: r / n, nativePriceUsd: j }
                }
              }, [l, e, t, j]),
              refetch: p,
            }
          })(e, t),
          O = h.loading,
          f = h.tradeInfo,
          g = null === f || void 0 === f ? void 0 : f.nativePriceUsd,
          v = Object(a.useCallback)(() => {
            n &&
              g &&
              n
                .getSigner()
                .getGasPrice()
                .then(e => {
                  var t = Number(i.ethers.utils.formatEther(e))
                  t && x(t * g * c.e)
                })
                .catch(e => {
                  console.error('fetchGasFee', e)
                })
          }, [n, g])
        Object(u.a)(v, g ? 15e3 : 2e3)
        var y = Object(l.a)(O, 100)
        return { loading: O || y, tradeInfo: Object(r.a)(Object(r.a)({}, f), {}, { gasFee: m }) }
      }
    },
    './src/hooks/useGasPriceFromDeBank.ts': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      var r,
        s = n('./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js'),
        o = n('./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js'),
        i = n('./node_modules/swr/dist/index.esm.js'),
        a = n('./src/hooks/index.ts'),
        c = n('./src/state/application/hooks.ts')
      !(function (e) {
        ;(e.SLOW = 'slow'), (e.NORMAL = 'normal'), (e.FAST = 'fast')
      })(r || (r = {}))
      t.b = () => {
        var e = Object(a.b)(),
          t = e.chainId,
          n = e.networkInfo,
          d = e.isEVM,
          l = Object(c.f)(),
          u = d ? n.deBankSlug : '',
          b = Object(i.a)(
            'https://openapi.debank.com/v1/wallet/gas_market?chain_id='.concat(u),
            (function () {
              var e = Object(o.a)(
                Object(s.a)().mark(function e(n) {
                  var r, o, i, a, c
                  return Object(s.a)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (d) {
                            e.next = 2
                            break
                          }
                          throw new Error()
                        case 2:
                          if (u) {
                            e.next = 6
                            break
                          }
                          throw ((r = 'chain ('.concat(t, ') is not supported')), console.error(r), r)
                        case 6:
                          return (e.next = 8), fetch(n)
                        case 8:
                          if (!(o = e.sent).ok) {
                            e.next = 18
                            break
                          }
                          return (e.next = 12), o.json()
                        case 12:
                          if (!(i = e.sent) || !Array.isArray(i)) {
                            e.next = 15
                            break
                          }
                          return e.abrupt('return', i)
                        case 15:
                          throw ((a = 'invalid data in chain ('.concat(u, ')')), console.error(a), a)
                        case 18:
                          throw ((c = 'fetching data on chain ('.concat(u, ') failed')), console.error(c), c)
                        case 21:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )
              return function (t) {
                return e.apply(this, arguments)
              }
            })(),
          ),
          p = b.data
        if (!b.error && p)
          return ((e, t) => {
            var n = [r.SLOW, r.NORMAL, r.FAST].map(t => {
                var n
                return null === (n = e.find(e => e.level === t)) || void 0 === n ? void 0 : n.price
              }),
              s = n.map(e => (e ? e / 1e9 : void 0)),
              o = t ? Number.parseFloat(String(t)) : NaN,
              i = n.map(e => (!e || Number.isNaN(o) ? '' : ((e / 1e18) * o * 19e4).toFixed(2)))
            return {
              [r.SLOW]: { gasPriceInGwei: s[0], minimumTxFeeInUSD: i[0] },
              [r.NORMAL]: { gasPriceInGwei: s[1], minimumTxFeeInUSD: i[1] },
              [r.FAST]: { gasPriceInGwei: s[2], minimumTxFeeInUSD: i[2] },
            }
          })(p, l.currentPrice)
      }
    },
    './src/hooks/useSyncTokenSymbolToUrl.ts': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return f
      })
      var r = n('./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'),
        s = n('./node_modules/querystring-es3/index.js'),
        o = n('./node_modules/react/index.js'),
        i = n('./node_modules/react-router/dist/index.js'),
        a = n('./src/constants/index.ts'),
        c = n('./src/constants/networks.ts'),
        d = n('./src/constants/tokens.ts'),
        l = n('./src/hooks/index.ts'),
        u = n('./src/utils/filtering.ts'),
        b = n('./src/utils/string.ts'),
        p = n('./src/utils/tokenInfo.ts'),
        j = n('./src/hooks/Tokens.ts'),
        m = n('./src/hooks/useParsedQueryString.ts'),
        x = ['inputCurrency', 'outputCurrency'],
        h = e => ({
          fromCurrency: (e.fromCurrency || '').toLowerCase(),
          toCurrency: (e.toCurrency || '').toLowerCase(),
          network: Object(b.a)(e.network || ''),
        }),
        O = (e, t) => [e, t].join('-to-')
      function f(e, t, n, f) {
        var g = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          v = Object(i.o)(),
          y = h(v),
          w = y.fromCurrency,
          k = y.toCurrency,
          C = y.network,
          _ = Object(l.b)(),
          T = _.chainId,
          I = Object(i.m)(),
          S = Object(m.a)(),
          A = Object(i.k)(),
          E = A.pathname,
          N = Object(j.e)(),
          L = Object(j.i)(),
          P = [a.g.SWAP, a.g.LIMIT].find(e => E.startsWith(e)) || a.g.SWAP,
          D = Object(o.useCallback)(
            e => {
              S.inputCurrency, S.outputCurrency
              var t = Object(r.a)(S, x)
              I(
                ''
                  .concat(P)
                  .concat(e ? '/'.concat(e) : '', '?')
                  .concat(Object(s.stringify)(t)),
                { replace: !0 },
              )
            },
            [I, S, P],
          ),
          M = Object(o.useCallback)(
            (e, t) => {
              var n = d.i[t]
              return e === Object(b.c)(n) ? n : Object(u.b)(t, Object.values(N), e)[0]
            },
            [N],
          ),
          R = Object(o.useCallback)(
            (e, t) => {
              var n = Object(b.c)(e),
                r = Object(b.c)(t)
              n && r && T && D(''.concat(c.h[T].route, '/').concat(O(n, r)))
            },
            [D, T],
          ),
          W = Object(o.useCallback)(
            e => {
              if (w && C) {
                var t = w && w === k
                if (k && !t) {
                  var r = M(Object(p.b)(C, w), e),
                    s = M(Object(p.b)(C, k), e)
                  s && r ? n(r, s) : D(C)
                } else {
                  var o = M(w, e)
                  o ? (n(o), t && D(''.concat(C, '/').concat(w))) : D(C)
                }
              }
            },
            [M, D, n, w, C, k],
          ),
          F = Object(o.useRef)(!1)
        Object(o.useEffect)(() => {
          var e
          F.current ||
            !L ||
            (null === (e = Object.values(N)[0]) || void 0 === e ? void 0 : e.chainId) !== T ||
            C !== c.h[T].route ||
            g ||
            (setTimeout(() => W(T)), (F.current = !0))
        }, [N, W, T, L, g, C]),
          Object(o.useEffect)(() => {
            f && L && !g && R(e, t)
          }, [e, t, f, R, L, g])
      }
    },
    './src/hooks/useTokenInfo.ts': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      })
      var r = n('./node_modules/@kyberswap/ks-sdk-core/dist/index.js'),
        s = n('./node_modules/swr/dist/index.esm.js'),
        o = n('./src/constants/index.ts'),
        i = n('./src/constants/networks.ts'),
        a = n('./src/hooks/index.ts')
      function c(e) {
        var t,
          n,
          c,
          d,
          l,
          u,
          b,
          p,
          j,
          m,
          x,
          h,
          O,
          f = Object(a.b)(),
          g = f.chainId,
          v = f.isSolana
            ? (null === e || void 0 === e ? void 0 : e.address) || ''
            : ((null === e || void 0 === e ? void 0 : e.address) || '').toLowerCase(),
          y = ''
        v.toLowerCase() === r.WETH[g].address.toLowerCase()
          ? (y = ''.concat(o.q, '/coins/').concat(i.h[g].coingeckoNativeTokenId))
          : v && (y = ''.concat(o.q, '/coins/').concat(i.h[g].coingeckoNetworkId, '/contract/').concat(v))
        var w = Object(s.a)(y, e => (e ? fetch(e).then(e => e.json()) : Promise.reject({ data: {}, error: '' })), {
            refreshInterval: 6e4,
            onErrorRetry: (e, t, n, r, s) => {
              var o = s.retryCount
              404 !== e.status &&
                (o >= 10 ||
                  (403 !== e.status
                    ? setTimeout(() => r({ retryCount: o }), 2e4)
                    : setTimeout(() => r({ retryCount: o }), 3e4)))
            },
          }),
          k = w.data,
          C = w.error
        var _ = !k
        return {
          data: {
            price:
              (null === k ||
              void 0 === k ||
              null === (t = k.market_data) ||
              void 0 === t ||
              null === (n = t.current_price) ||
              void 0 === n
                ? void 0
                : n.usd) || 0,
            marketCap:
              (null === k ||
              void 0 === k ||
              null === (c = k.market_data) ||
              void 0 === c ||
              null === (d = c.market_cap) ||
              void 0 === d
                ? void 0
                : d.usd) || 0,
            marketCapRank:
              (null === k || void 0 === k || null === (l = k.market_data) || void 0 === l
                ? void 0
                : l.market_cap_rank) || 0,
            circulatingSupply:
              (null === k || void 0 === k || null === (u = k.market_data) || void 0 === u
                ? void 0
                : u.circulating_supply) || 0,
            totalSupply:
              (null === k || void 0 === k || null === (b = k.market_data) || void 0 === b ? void 0 : b.total_supply) ||
              0,
            allTimeHigh:
              (null === k ||
              void 0 === k ||
              null === (p = k.market_data) ||
              void 0 === p ||
              null === (j = p.ath) ||
              void 0 === j
                ? void 0
                : j.usd) || 0,
            allTimeLow:
              (null === k ||
              void 0 === k ||
              null === (m = k.market_data) ||
              void 0 === m ||
              null === (x = m.atl) ||
              void 0 === x
                ? void 0
                : x.usd) || 0,
            tradingVolume:
              (null === k ||
              void 0 === k ||
              null === (h = k.market_data) ||
              void 0 === h ||
              null === (O = h.total_volume) ||
              void 0 === O
                ? void 0
                : O.usd) || 0,
            description: (null === k || void 0 === k ? void 0 : k.description) || { en: '' },
            name: (null === k || void 0 === k ? void 0 : k.name) || '',
          },
          loading: _,
          error: C,
        }
      }
    },
    './src/hooks/useWrapCallback.ts': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      }),
        n.d(t, 'b', function () {
          return v
        })
      var r,
        s = n('./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js'),
        o = n('./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js'),
        i = n('./node_modules/@lingui/core/esm/index.js'),
        a = n('./node_modules/@kyberswap/ks-sdk-core/dist/index.js'),
        c = n('./node_modules/@solana/web3.js/lib/index.browser.esm.js'),
        d = n('./node_modules/react/index.js'),
        l = n('./src/constants/tokens.ts'),
        u = n('./src/state/swap/hooks.ts'),
        b = n('./src/state/transactions/hooks.tsx'),
        p = n('./src/state/transactions/type.ts'),
        j = n('./src/state/wallet/hooks.ts'),
        m = n('./src/utils/index.ts'),
        x = n('./src/utils/solanaInstructions.ts'),
        h = n('./src/hooks/index.ts'),
        O = n('./src/hooks/solana/useProvider.ts'),
        f = n('./src/hooks/useContract.ts')
      !(function (e) {
        ;(e[(e.NOT_APPLICABLE = 0)] = 'NOT_APPLICABLE'), (e[(e.WRAP = 1)] = 'WRAP'), (e[(e.UNWRAP = 2)] = 'UNWRAP')
      })(r || (r = {}))
      var g = { wrapType: r.NOT_APPLICABLE }
      function v(e, t, n) {
        var v = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          y = Object(h.b)(),
          w = y.chainId,
          k = y.isEVM,
          C = y.isSolana,
          _ = y.account,
          T = Object(O.a)(),
          I = Object(f.w)(),
          S = Object(j.b)(null !== e && void 0 !== e ? e : void 0),
          A = Object(d.useMemo)(() => Object(u.b)(n, null !== e && void 0 !== e ? e : void 0), [e, n]),
          E = Object(b.g)(),
          N = Object(h.f)(),
          L = N.connection
        return Object(d.useMemo)(() => {
          if ((!I && k) || !e || !t) return g
          var d = A && S && !S.lessThan(A),
            u = l.i[w].symbol
          return (e.isNative && a.WETH[w].equals(t)) || (v && e.isNative)
            ? {
                wrapType: r.WRAP,
                execute:
                  d && A
                    ? Object(o.a)(
                        Object(s.a)().mark(function e() {
                          var t, n, r, o, i, d, l, b, j, h, O
                          return Object(s.a)().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (((e.prev = 0), !k || !I)) {
                                      e.next = 11
                                      break
                                    }
                                    return (
                                      (e.next = 4),
                                      I.estimateGas.deposit({ value: '0x'.concat(A.quotient.toString(16)) })
                                    )
                                  case 4:
                                    return (
                                      (n = e.sent),
                                      (e.next = 7),
                                      I.deposit({
                                        value: '0x'.concat(A.quotient.toString(16)),
                                        gasLimit: Object(m.b)(n),
                                      })
                                    )
                                  case 7:
                                    ;(r = e.sent), (t = null === r || void 0 === r ? void 0 : r.hash), (e.next = 26)
                                    break
                                  case 11:
                                    if (!(C && _ && T && L)) {
                                      e.next = 26
                                      break
                                    }
                                    return (o = new c.PublicKey(_)), (e.next = 15), Object(x.e)(L, o, A)
                                  case 15:
                                    return (i = e.sent), (e.next = 18), L.getLatestBlockhash()
                                  case 18:
                                    return (
                                      (d = e.sent),
                                      (l = d.blockhash),
                                      (b = d.lastValidBlockHeight),
                                      (j = new c.Transaction({
                                        blockhash: l,
                                        lastValidBlockHeight: b,
                                        feePayer: o,
                                      })).add(...i),
                                      (e.next = 25),
                                      T.sendAndConfirm(j)
                                    )
                                  case 25:
                                    t = e.sent
                                  case 26:
                                    if (!t) {
                                      e.next = 30
                                      break
                                    }
                                    return (
                                      (O = A.toSignificant(6)),
                                      E({
                                        hash: t,
                                        type: p.c.WRAP_TOKEN,
                                        extraInfo: {
                                          tokenAmountIn: O,
                                          tokenAmountOut: O,
                                          tokenSymbolIn: null !== u && void 0 !== u ? u : '',
                                          tokenSymbolOut: null !== (h = a.WETH[w].symbol) && void 0 !== h ? h : '',
                                          tokenAddressIn: a.WETH[w].address,
                                          tokenAddressOut: a.WETH[w].address,
                                        },
                                      }),
                                      e.abrupt('return', t)
                                    )
                                  case 30:
                                    throw new Error()
                                  case 33:
                                    return (
                                      (e.prev = 33),
                                      (e.t0 = e.catch(0)),
                                      console.error('Could not deposit', e.t0),
                                      e.abrupt('return')
                                    )
                                  case 37:
                                  case 'end':
                                    return e.stop()
                                }
                            },
                            e,
                            null,
                            [[0, 33]],
                          )
                        }),
                      )
                    : void 0,
                inputError: n
                  ? d
                    ? void 0
                    : i.a._('Insufficient {0} balance', { 0: l.i[w].symbol })
                  : i.a._('Enter an amount'),
              }
            : a.WETH[w].equals(e) && t.isNative
            ? {
                wrapType: r.UNWRAP,
                execute:
                  d && A
                    ? Object(o.a)(
                        Object(s.a)().mark(function e() {
                          var t, n, r, o, i, d, l, b, j, h, O
                          return Object(s.a)().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (((e.prev = 0), !k || !I)) {
                                      e.next = 11
                                      break
                                    }
                                    return (e.next = 4), I.estimateGas.withdraw('0x'.concat(A.quotient.toString(16)))
                                  case 4:
                                    return (
                                      (n = e.sent),
                                      (e.next = 7),
                                      I.withdraw('0x'.concat(A.quotient.toString(16)), { gasLimit: Object(m.b)(n) })
                                    )
                                  case 7:
                                    ;(r = e.sent), (t = r.hash), (e.next = 27)
                                    break
                                  case 11:
                                    if (!(C && _ && T && L)) {
                                      e.next = 27
                                      break
                                    }
                                    return (o = new c.PublicKey(_)), (e.next = 15), Object(x.b)(L, o)
                                  case 15:
                                    if (!(i = e.sent)) {
                                      e.next = 27
                                      break
                                    }
                                    return (e.next = 19), L.getLatestBlockhash()
                                  case 19:
                                    return (
                                      (d = e.sent),
                                      (l = d.blockhash),
                                      (b = d.lastValidBlockHeight),
                                      (j = new c.Transaction({
                                        blockhash: l,
                                        lastValidBlockHeight: b,
                                        feePayer: o,
                                      })).add(i),
                                      (e.next = 26),
                                      T.sendAndConfirm(j)
                                    )
                                  case 26:
                                    t = e.sent
                                  case 27:
                                    if (!t) {
                                      e.next = 31
                                      break
                                    }
                                    return (
                                      (O = A.toSignificant(6)),
                                      E({
                                        hash: t,
                                        type: p.c.UNWRAP_TOKEN,
                                        extraInfo: {
                                          tokenAmountIn: O,
                                          tokenAmountOut: O,
                                          tokenSymbolIn: null !== (h = a.WETH[w].symbol) && void 0 !== h ? h : '',
                                          tokenSymbolOut: null !== u && void 0 !== u ? u : '',
                                          tokenAddressIn: a.WETH[w].address,
                                          tokenAddressOut: a.WETH[w].address,
                                        },
                                      }),
                                      e.abrupt('return', t)
                                    )
                                  case 31:
                                    throw new Error()
                                  case 34:
                                    return (
                                      (e.prev = 34),
                                      (e.t0 = e.catch(0)),
                                      console.error('Could not withdraw', e.t0),
                                      e.abrupt('return')
                                    )
                                  case 38:
                                  case 'end':
                                    return e.stop()
                                }
                            },
                            e,
                            null,
                            [[0, 34]],
                          )
                        }),
                      )
                    : void 0,
                inputError: n
                  ? d
                    ? void 0
                    : i.a._('Insufficient W{0} balance', { 0: l.i[w].symbol })
                  : i.a._('Enter an amount'),
              }
            : g
        }, [I, k, w, e, t, A, S, n, C, _, T, E, v, L])
      }
    },
    './src/pages/AppBody.tsx': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return o
      }),
        n.d(t, 'b', function () {
          return i
        })
      n('./node_modules/react/index.js')
      var r = n('./node_modules/styled-components/dist/styled-components.browser.esm.js'),
        s = n('./node_modules/react/jsx-runtime.js'),
        o = r.default.div.withConfig({ displayName: 'AppBody__BodyWrapper', componentId: 'sc-1ls32jt-0' })(
          [
            'position:relative;max-width:425px;width:100%;background:',
            ';box-shadow:0px 0px 1px rgba(0,0,0,0.01),0px 4px 8px rgba(0,0,0,0.04),0px 16px 24px rgba(0,0,0,0.04),0px 24px 32px rgba(0,0,0,0.01);border-radius:20px;padding:2rem 1.5rem 1.5rem 1.5rem;margin-top:20px;',
          ],
          e => e.theme.background,
        )
      function i(e) {
        var t = e.children,
          n = e.className
        return Object(s.jsx)(o, { className: n, children: t })
      }
    },
    './src/pages/SwapV3/HeaderRightMenu.tsx': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return G
      })
      var r = n('./node_modules/@babel/runtime/helpers/esm/slicedToArray.js'),
        s = n('./node_modules/@lingui/react/esm/index.js'),
        o = n('./node_modules/@lingui/core/esm/index.js'),
        i = n('./node_modules/querystring-es3/index.js'),
        a = n('./node_modules/react/index.js'),
        c = n('./node_modules/react-device-detect/main.js'),
        d = n('./node_modules/react-feather/dist/icons/more-horizontal.js'),
        l = n('./node_modules/react-router/dist/index.js'),
        u = n('./node_modules/styled-components/dist/styled-components.browser.esm.js'),
        b = n(
          './node_modules/@svgr/webpack/lib/index.js?-svgo,+titleProp,+ref!./src/assets/svg/play_circle_outline.svg',
        ),
        p = n('./src/components/Icons/TransactionSettingsIcon.tsx'),
        j = n('./src/components/ShareModal/index.tsx'),
        m = n('./src/components/Tooltip/index.tsx'),
        x = n('./src/components/Tutorial/index.tsx'),
        h = n('./src/components/Tutorial/TutorialSwap/constant.ts'),
        O = n('./node_modules/react-feather/dist/icons/x.js'),
        f = n('./node_modules/react-feather/dist/icons/info.js'),
        g = n('./node_modules/rebass/dist/index.esm.js'),
        v = n('./src/components/Row/index.tsx'),
        y = n('./src/components/swapv2/TokenInfoTab.tsx'),
        w = n('./src/components/swapv2/styleds.tsx'),
        k = n('./src/hooks/useTheme.ts'),
        C = n('./src/state/application/actions.ts'),
        _ = n('./src/state/application/hooks.ts'),
        T = n('./src/theme/components.tsx'),
        I = n('./node_modules/react/jsx-runtime.js')
      var S = function (e) {
          var t = e.currencies,
            n = e.onClick,
            r = Object(k.a)(),
            i = Object(_.h)(C.a.MOBILE_TOKEN_INFO),
            a = Object(_.r)(C.a.MOBILE_TOKEN_INFO)
          return Object(I.jsxs)(I.Fragment, {
            children: [
              Object(I.jsx)(c.MobileView, {
                children: Object(I.jsx)(w.i, {
                  isOpen: i,
                  onDismiss: a,
                  maxHeight: 80,
                  children: Object(I.jsxs)(g.b, {
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                    children: [
                      Object(I.jsx)(g.b, {
                        flexDirection: 'column',
                        width: '100%',
                        padding: '16px 16px 0px',
                        marginBottom: '1rem',
                        children: Object(I.jsxs)(v.b, {
                          children: [
                            Object(I.jsx)(g.e, {
                              fontSize: 16,
                              fontWeight: 500,
                              children: Object(I.jsx)(s.b, { id: 'Info' }),
                            }),
                            Object(I.jsx)(T.b, {
                              onClick: a,
                              style: { alignSelf: 'flex-end', lineHeight: 0 },
                              children: Object(I.jsx)(O.a, { color: r.subText, size: 24 }),
                            }),
                          ],
                        }),
                      }),
                      Object(I.jsx)(g.b, {
                        flexDirection: 'column',
                        width: '100%',
                        padding: '0px 16px',
                        marginBottom: 20,
                        children: Object(I.jsx)(y.a, { currencies: t }),
                      }),
                    ],
                  }),
                }),
              }),
              Object(I.jsx)(w.m, {
                onClick: c.isMobile ? a : n,
                children: Object(I.jsx)(m.a, {
                  text: o.a._('Token Info'),
                  placement: 'top',
                  width: 'fit-content',
                  disableTooltip: c.isMobile,
                  children: Object(I.jsx)(f.a, { color: r.subText, size: 20 }),
                }),
              }),
            ],
          })
        },
        A = n('./src/constants/index.ts'),
        E = n('./src/constants/styles.ts'),
        N = n('./src/hooks/index.ts'),
        L = n('./src/hooks/useMixpanel.ts'),
        P = n('./src/pages/SwapV3/index.tsx'),
        D = n('./src/state/limit/hooks.ts'),
        M = n('./src/state/swap/actions.ts'),
        R = n('./src/state/swap/hooks.ts'),
        W = n('./src/state/user/hooks.tsx'),
        F = n('./src/utils/currencyId.ts'),
        B = u.default.div.withConfig({ displayName: 'HeaderRightMenu__SwapFormActions', componentId: 'sc-1l7lp4f-0' })(
          ['display:flex;align-items:center;gap:0.5rem;background:', ';border-radius:18px;z-index:', ';'],
          e => e.theme.background,
          E.a.SWAP_PAGE_HEADER_RIGHT_MENU,
        ),
        U = Object(u.default)(b.a).withConfig({
          displayName: 'HeaderRightMenu__TutorialIcon',
          componentId: 'sc-1l7lp4f-1',
        })(
          ['width:22px;height:22px;path{fill:', ';stroke:', ';}'],
          e => e.theme.subText,
          e => e.theme.subText,
        ),
        z = Object(u.default)(d.a).withConfig({
          displayName: 'HeaderRightMenu__StyledMoreHorizontal',
          componentId: 'sc-1l7lp4f-2',
        })(['height:36px;width:36px;padding:6px;cursor:pointer;']),
        H = u.default.span.withConfig({
          displayName: 'HeaderRightMenu__TransactionSettingsIconWrapper',
          componentId: 'sc-1l7lp4f-3',
        })(['line-height:0;'])
      function G(e) {
        var t = e.activeTab,
          n = e.setActiveTab,
          d = Object(N.b)(),
          u = d.chainId,
          b = d.networkInfo,
          O = Object(k.a)(),
          f = Object(a.useState)(!1),
          g = Object(r.a)(f, 2),
          v = g[0],
          y = g[1],
          C = Object(R.f)(),
          _ = Object(R.g)(),
          T = Object(a.useMemo)(() => ({ [M.a.INPUT]: C, [M.a.OUTPUT]: _ }), [C, _]),
          E = Object(L.c)(T).mixpanelHandler,
          G = Object(l.k)().pathname,
          q = G.startsWith(A.g.SWAP),
          V = G.startsWith(A.g.LIMIT),
          Y = Object(D.b)(),
          K = Object(a.useMemo)(
            () => ({ [M.a.INPUT]: Y.currencyIn, [M.a.OUTPUT]: Y.currencyOut }),
            [Y.currencyIn, Y.currencyOut],
          ),
          $ = e => n(t === e ? (V ? P.TAB.LIMIT : P.TAB.SWAP) : e),
          Z = Object(a.useMemo)(() => {
            var e = q ? C : Y.currencyIn,
              t = q ? _ : Y.currencyOut
            return ''
              .concat(window.location.origin)
              .concat(q ? A.g.SWAP : A.g.LIMIT, '/')
              .concat(b.route)
              .concat(
                e && t
                  ? '?'.concat(
                      Object(i.stringify)({ inputCurrency: Object(F.a)(e, u), outputCurrency: Object(F.a)(t, u) }),
                    )
                  : '',
              )
          }, [b.route, C, _, u, Y.currencyIn, Y.currencyOut, q]),
          X = Object(W.c)(),
          Q = Object(r.a)(X, 1)[0]
        return Object(I.jsxs)(B, {
          onMouseEnter: () => {
            c.isMobile || y(!0)
          },
          onMouseLeave: () => {
            c.isMobile || y(!1)
          },
          children: [
            v &&
              Object(I.jsxs)(I.Fragment, {
                children: [
                  Object(I.jsx)(x.b, {
                    type: x.a.SWAP,
                    customIcon: Object(I.jsx)(w.m, {
                      onClick: () => E(L.a.SWAP_TUTORIAL_CLICK),
                      children: Object(I.jsx)(U, {}),
                    }),
                  }),
                  Object(I.jsx)(S, {
                    currencies: q ? T : K,
                    onClick: () => {
                      E(L.a.SWAP_TOKEN_INFO_CLICK), $(P.TAB.INFO)
                    },
                  }),
                  Object(I.jsx)(j.a, {
                    title: o.a._('Share this with your friends!'),
                    url: Z,
                    onShared: () => {
                      E(L.a.TOKEN_SWAP_LINK_SHARED)
                    },
                  }),
                  Object(I.jsx)(w.m, {
                    active: t === P.TAB.SETTINGS,
                    onClick: () => {
                      $(P.TAB.SETTINGS), E(L.a.SWAP_SETTINGS_CLICK)
                    },
                    'aria-label': 'Swap Settings',
                    children: Object(I.jsx)(m.a, {
                      text: Object(I.jsx)(s.b, { id: 'Settings' }),
                      placement: 'top',
                      width: 'fit-content',
                      disableTooltip: c.isMobile,
                      children: Object(I.jsx)(H, {
                        id: h.b.BUTTON_SETTING_SWAP_FORM,
                        children: Object(I.jsx)(p.a, { fill: O.subText }),
                      }),
                    }),
                  }),
                ],
              }),
            Object(I.jsx)(m.a, {
              text: Object(I.jsx)(s.b, { id: 'Degen mode is on. Be cautious!' }),
              placement: 'top',
              width: 'fit-content',
              disableTooltip: !Q || c.isMobile,
              children: Object(I.jsx)(z, {
                color: Q ? O.warning : O.subText,
                onClick: () => {
                  y(e => !e)
                },
              }),
            }),
          ],
        })
      }
    },
    './src/pages/SwapV3/index.tsx': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'TAB', function () {
          return Jt
        }),
        n.d(t, 'default', function () {
          return Sn
        })
      var r = n('./node_modules/@babel/runtime/helpers/esm/slicedToArray.js'),
        s = n('./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js'),
        o = n('./node_modules/@lingui/react/esm/index.js'),
        i = n('./node_modules/@kyberswap/ks-sdk-core/dist/index.js'),
        a = n('./node_modules/polished/dist/polished.esm.js'),
        c = n('./node_modules/react/index.js'),
        d = n.n(c),
        l = n('./node_modules/react-loading-skeleton/dist/index.mjs'),
        u = n('./node_modules/react-router/dist/index.js'),
        b = n('./node_modules/rebass/dist/index.esm.js'),
        p = n('./node_modules/styled-components/dist/styled-components.browser.esm.js'),
        j = n('./node_modules/@svgr/webpack/lib/index.js?-svgo,+titleProp,+ref!./src/assets/svg/routing-icon.svg'),
        m = n('./src/components/Banner/index.tsx'),
        x = n('./src/components/Column/index.tsx'),
        h = n('./src/components/Row/index.tsx'),
        O = n('./src/components/SEO/index.tsx'),
        f = n('./src/components/SwitchLocaleLink/index.tsx'),
        g = n('./src/components/TokenWarningModal/index.tsx'),
        v = n('./src/components/TopTrendingSoonTokensInCurrentNetwork/index.tsx'),
        y = n('./src/components/Tutorial/TutorialSwap/index.tsx'),
        w = n('./src/components/Tutorial/TutorialSwap/constant.ts'),
        k = n('./src/components/swapv2/GasPriceTrackerPanel.tsx'),
        C = n('./src/components/swapv2/LimitOrder/index.tsx'),
        _ = n('./src/components/swapv2/LimitOrder/ListOrder/index.tsx'),
        T = n('./src/components/swapv2/LiquiditySourcesPanel/index.tsx'),
        I = n('./src/components/swapv2/PairSuggestion/index.tsx'),
        S = n('./src/components/swapv2/SwapSettingsPanel/index.tsx'),
        A = n('./src/components/swapv2/TokenInfoTab.tsx'),
        E = n('./src/components/swapv2/TokenInfoV2/index.tsx'),
        N = n('./src/components/swapv2/styleds.tsx'),
        L = n('./src/constants/index.ts'),
        P = n('./src/hooks/index.ts'),
        D = n('./src/hooks/Tokens.ts'),
        M = n('./src/hooks/useParsedQueryString.ts'),
        R = n('./src/hooks/useTheme.ts'),
        W = n('./src/pages/AppBody.tsx'),
        F = n('./src/pages/SwapV3/HeaderRightMenu.tsx'),
        B = n('./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'),
        U = n('./node_modules/querystring-es3/index.js'),
        z = n('./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js'),
        H = n('./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js'),
        G = n('./node_modules/react-use/esm/useMountedState.js'),
        q = n('./src/components/Tooltip/index.tsx'),
        V = n('./src/components/swapv2/LimitOrder/request.ts'),
        Y = n('./src/utils/index.ts'),
        K = n('./node_modules/react/jsx-runtime.js'),
        $ = p.default.span.withConfig({ displayName: 'LimitTab__WarningBadge', componentId: 'sc-vy0pup-0' })(
          [
            'display:inline-block;min-width:20px;padding:2px 6px;color:',
            ';background-color:',
            ';border-radius:20px;font-weight:500;font-size:14px;',
          ],
          e => e.theme.warning,
          e => {
            var t = e.theme
            return Object(a.d)(t.warning, 0.3)
          },
        )
      function Z(e) {
        var t = e.onClick,
          n = Object(P.b)(),
          s = n.chainId,
          i = n.account,
          a = Object(u.k)().pathname,
          d = Object(c.useState)(0),
          l = Object(r.a)(d, 2),
          p = l[0],
          j = l[1],
          m = a.startsWith(L.g.LIMIT),
          x = Object(Y.o)(s),
          h = Object(G.a)()
        return (
          Object(c.useEffect)(() => {
            if (x && i) {
              var e = (function () {
                var e = Object(H.a)(
                  Object(z.a)().mark(function e() {
                    var t
                    return Object(z.a)().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.prev = 0), (e.next = 3), Object(V.f)({ chainId: s, maker: i || '' })
                            case 3:
                              ;(t = e.sent), h() && j(t), (e.next = 10)
                              break
                            case 7:
                              ;(e.prev = 7), (e.t0 = e.catch(0)), console.error(e.t0)
                            case 10:
                            case 'end':
                              return e.stop()
                          }
                      },
                      e,
                      null,
                      [[0, 7]],
                    )
                  }),
                )
                return function () {
                  return e.apply(this, arguments)
                }
              })()
              e()
              var t = setInterval(e, 1e4)
              return () => {
                clearInterval(t)
              }
            }
          }, [i, s, x, h]),
          x
            ? Object(K.jsx)(N.q, {
                id: 'limit-button',
                onClick: t,
                isActive: m,
                children: Object(K.jsxs)(b.e, {
                  fontSize: 20,
                  fontWeight: 500,
                  children: [
                    Object(K.jsx)(o.b, { id: 'Limit' }),
                    ' ',
                    p
                      ? Object(K.jsx)(q.a, {
                          placement: 'top',
                          text: Object(K.jsx)(o.b, {
                            id: "You have {numberOfInsufficientFundOrders} active orders that don't have sufficient funds",
                            values: { numberOfInsufficientFundOrders: p },
                          }),
                          children: Object(K.jsx)($, { children: p }),
                        })
                      : null,
                  ],
                }),
              })
            : null
        )
      }
      var X = ['inputCurrency', 'outputCurrency']
      function Q(e) {
        var t = e.activeTab,
          n = Object(u.m)(),
          r = Object(P.b)().networkInfo,
          s = Object(M.a)(),
          i = Object(u.k)().pathname.startsWith(L.g.SWAP),
          a = e => {
            if (t !== e) {
              s.inputCurrency, s.outputCurrency
              var o = Object(B.a)(s, X)
              n({
                pathname: ''.concat(e === Jt.LIMIT ? L.g.LIMIT : L.g.SWAP, '/').concat(r.route),
                search: Object(U.stringify)(o),
              })
            }
          }
        return Object(K.jsx)(N.r, {
          children: Object(K.jsxs)(N.s, {
            children: [
              Object(K.jsx)(N.q, {
                onClick: () => a(Jt.SWAP),
                isActive: i,
                children: Object(K.jsx)(b.e, {
                  fontSize: 20,
                  fontWeight: 500,
                  children: Object(K.jsx)(o.b, { id: 'Swap' }),
                }),
              }),
              Object(K.jsx)(Z, { onClick: () => a(Jt.LIMIT) }),
            ],
          }),
        })
      }
      var J = n('./src/state/limit/hooks.ts'),
        ee = n('./src/state/swap/actions.ts'),
        te = n('./src/state/swap/hooks.ts'),
        ne = n('./src/state/tutorial/hooks.ts'),
        re = n('./src/state/user/hooks.tsx'),
        se = n('./src/theme/index.tsx'),
        oe = n('./src/utils/aggregationRouting.ts'),
        ie = n('./src/utils/string.ts'),
        ae = n('./src/utils/tokenInfo.ts'),
        ce = n('./node_modules/@babel/runtime/helpers/esm/objectSpread2.js'),
        de = n('./src/services/route/utils.ts'),
        le = n('./src/components/AddressInputPanel/index.tsx'),
        ue = n('./src/components/SlippageWarningNote/index.tsx'),
        be = n('./src/components/CurrencyInputPanel/index.tsx'),
        pe = n('./src/components/SwapForm/SwapFormContext.tsx'),
        je = n('./src/hooks/useWrapCallback.ts'),
        me = n('./src/utils/maxAmountSpend.ts'),
        xe = e => {
          var t = e.wrapType,
            n = e.typedValue,
            r = e.setTypedValue,
            s = e.currencyIn,
            o = e.currencyOut,
            i = e.balanceIn,
            a = e.onChangeCurrencyIn,
            d = Object(P.b)().isSolana,
            l = Object(pe.b)().routeSummary,
            u = d && t === je.a.UNWRAP,
            b = t !== je.a.NOT_APPLICABLE ? void 0 : l
          return (
            Object(c.useEffect)(() => {
              var e
              u && r(null !== (e = null === i || void 0 === i ? void 0 : i.toExact()) && void 0 !== e ? e : '')
            }, [i, u, r]),
            Object(K.jsx)(be.a, {
              value: n,
              positionMax: 'top',
              currency: s,
              onUserInput: r,
              onMax: u
                ? null
                : () => {
                    var e,
                      t = null === (e = Object(me.b)(i)) || void 0 === e ? void 0 : e.toExact()
                    r(t || '')
                  },
              onHalf: u
                ? null
                : () => {
                    var e,
                      t = null === (e = Object(me.a)(i)) || void 0 === e ? void 0 : e.toExact()
                    r(t || '')
                  },
              onCurrencySelect: a,
              otherCurrency: o,
              id: 'swap-currency-input',
              showCommonBases: !0,
              estimatedUsd:
                null !== b && void 0 !== b && b.amountInUsd
                  ? ''.concat(Object(Y.i)(b.amountInUsd.toString(), !0))
                  : void 0,
            })
          )
        },
        he = n('./src/components/SwapForm/OutputCurrencyPanel.tsx'),
        Oe = n('./src/components/SwapForm/SlippageSetting.tsx'),
        fe = n('./node_modules/@lingui/core/esm/index.js'),
        ge = n('./src/services/route/index.ts'),
        ve = n('./src/constants/networks.ts'),
        ye = n('./src/hooks/useKyberSwapConfig.ts'),
        we = e => {
          var t = e.recipient,
            n = e.routeSummary,
            r = e.slippage,
            s = e.transactionTimeout,
            o = Object(P.b)(),
            i = o.chainId,
            a = o.account,
            d = Object(c.useRef)(new AbortController()),
            l = Object(ye.b)().aggregatorDomain
          return Object(c.useCallback)(
            Object(H.a)(
              Object(z.a)().mark(function e() {
                var o, c, u
                return Object(z.a)().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (a) {
                            e.next = 2
                            break
                          }
                          return e.abrupt('return', { error: fe.a._('Wallet is not connected') })
                        case 2:
                          if (n) {
                            e.next = 4
                            break
                          }
                          return e.abrupt('return', { error: fe.a._('Route summary is missing') })
                        case 4:
                          return (
                            (o = {
                              routeSummary: n,
                              deadline: Math.floor(Date.now() / 1e3) + s,
                              slippageTolerance: r,
                              sender: a,
                              recipient: t || a,
                              source: 'PunkSwap',
                              skipSimulateTx: !1,
                            }),
                            (e.prev = 5),
                            d.current.abort(),
                            (d.current = new AbortController()),
                            (c = ''.concat(l, '/').concat(ve.h[i].aggregatorRoute, '/api/v1/route/build')),
                            (e.next = 11),
                            Object(ge.a)(c, o, d.current.signal)
                          )
                        case 11:
                          return (u = e.sent), e.abrupt('return', { data: u })
                        case 15:
                          return (
                            (e.prev = 15),
                            (e.t0 = e.catch(5)),
                            e.abrupt('return', { error: e.t0.message || fe.a._('Something went wrong') })
                          )
                        case 18:
                        case 'end':
                          return e.stop()
                      }
                  },
                  e,
                  null,
                  [[5, 15]],
                )
              }),
            ),
            [a, l, i, t, n, r, s],
          )
        },
        ke = n('./src/constants/tokens.ts'),
        Ce = (e, t) => {
          var n = Object(P.b)().chainId
          return Boolean(n && e && t && ke.k[n].includes(e.wrapped.address) && ke.k[n].includes(t.wrapped.address))
        },
        _e = n('./src/hooks/useENS.ts'),
        Te = e => {
          var t,
            n,
            r,
            s,
            o,
            i = e.typedValue,
            a = e.recipient,
            c = e.currencyIn,
            d = e.currencyOut,
            l = e.parsedAmountFromTypedValue,
            u = e.balanceIn,
            b = Object(P.b)(),
            p = b.account,
            j = b.chainId,
            m = Object(_e.a)(null !== a && void 0 !== a ? a : void 0),
            x = null !== (t = null === a || '' === a ? p : m.address) && void 0 !== t ? t : null
          ;(p || (n = fe.a._('Connect wallet')), l) ||
            (n = i
              ? null !== (r = n) && void 0 !== r
                ? r
                : fe.a._('Invalid amount')
              : null !== (s = n) && void 0 !== s
              ? s
              : fe.a._('Enter an amount'))
          ;(c && d) || (n = null !== (o = n) && void 0 !== o ? o : fe.a._('Select a token'))
          var h,
            O,
            f = Object(Y.s)(j, x)
          x && f
            ? -1 !== L.i.indexOf(f) && (n = null !== (h = n) && void 0 !== h ? h : fe.a._('Invalid recipient'))
            : (n = null !== (O = n) && void 0 !== O ? O : fe.a._('Enter a recipient'))
          return (
            l && ((u && u.lessThan(l)) || !u) && (n = fe.a._('Insufficient {0} balance', { 0: l.currency.symbol })), n
          )
        },
        Ie = n('./src/components/SwapForm/hooks/useGetRoute.ts'),
        Se = (e, t) => Object(c.useMemo)(() => Object(te.b)(t, e), [t, e]),
        Ae = n('./src/components/TrendingSoonTokenBanner/index.tsx'),
        Ee = n('./src/components/swapv2/TradePrice.tsx'),
        Ne = n('./src/components/SwapForm/PriceImpactNote.tsx'),
        Le = d.a.forwardRef((e, t) => {
          var n = e.size,
            r = void 0 === n ? 20 : n,
            s = Object(R.a)()
          return Object(K.jsxs)('svg', {
            ref: t,
            id: 'arrow_loading',
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '2 2 20 20',
            className: 'arrow-loading',
            width: r,
            height: r,
            color: s.subText,
            children: [
              Object(K.jsx)('path', {
                stroke: 'none',
                fill: s.disableText,
                d: 'M16.2751 7.78995C13.932 5.44681 10.133 5.44681 7.78986 7.78995C7.02853 8.55128 6.51457 9.4663 6.24798 10.4351C6.24473 10.4499 6.24114 10.4646 6.23719 10.4793C6.17635 10.7064 6.12938 10.9339 6.09577 11.161C5.83159 12.9457 6.39255 14.7026 7.52624 15.9944C7.61054 16.0901 7.69842 16.1838 7.78986 16.2752C8.08307 16.5685 8.39909 16.825 8.7322 17.0448C9.25533 17.3892 9.84172 17.6568 10.4798 17.8278C10.7386 17.8971 10.9979 17.9484 11.2565 17.9825C12.9537 18.2061 14.6187 17.6866 15.8747 16.6415C16.0123 16.5265 16.1459 16.4044 16.2751 16.2752C16.2848 16.2655 16.2947 16.2561 16.3047 16.2469C17.0123 15.531 17.5491 14.627 17.8283 13.5851C17.9712 13.0517 18.5196 12.7351 19.053 12.878C19.5865 13.021 19.9031 13.5693 19.7602 14.1028C19.3141 15.7676 18.3745 17.1684 17.1409 18.1899C16.1883 18.9822 15.0949 19.5189 13.9515 19.8002C11.8607 20.3147 9.6028 19.9749 7.7328 18.7809C7.06855 18.3579 6.47841 17.8432 5.97519 17.2589C5.12341 16.2738 4.55173 15.1302 4.26015 13.9324C4.01698 12.9416 3.96104 11.8931 4.12168 10.8379C4.36697 9.20484 5.1183 7.63309 6.37564 6.37574C9.49984 3.25154 14.5652 3.25154 17.6894 6.37574L18.2332 6.91959L18.2337 5.49951C18.2338 5.05769 18.5921 4.69964 19.034 4.69979C19.4758 4.69995 19.8338 5.05825 19.8337 5.50007L19.8325 9.03277L19.8322 9.8325L19.0325 9.83249L18.9401 9.83249C18.8146 9.85665 18.6854 9.85665 18.5599 9.83248L15.5005 9.83245C15.0587 9.83245 14.7005 9.47427 14.7005 9.03244C14.7005 8.59062 15.0587 8.23245 15.5005 8.23245L16.7176 8.23246L16.2751 7.78995Z',
              }),
              Object(K.jsxs)('defs', {
                children: [
                  Object(K.jsx)('path', {
                    id: 'arrow',
                    stroke: 'none',
                    fill: 'none',
                    d: 'M16.2751 7.78995C13.932 5.44681 10.133 5.44681 7.78986 7.78995C7.02853 8.55128 6.51457 9.4663 6.24798 10.4351C6.24473 10.4499 6.24114 10.4646 6.23719 10.4793C6.17635 10.7064 6.12938 10.9339 6.09577 11.161C5.83159 12.9457 6.39255 14.7026 7.52624 15.9944C7.61054 16.0901 7.69842 16.1838 7.78986 16.2752C8.08307 16.5685 8.39909 16.825 8.7322 17.0448C9.25533 17.3892 9.84172 17.6568 10.4798 17.8278C10.7386 17.8971 10.9979 17.9484 11.2565 17.9825C12.9537 18.2061 14.6187 17.6866 15.8747 16.6415C16.0123 16.5265 16.1459 16.4044 16.2751 16.2752C16.2848 16.2655 16.2947 16.2561 16.3047 16.2469C17.0123 15.531 17.5491 14.627 17.8283 13.5851C17.9712 13.0517 18.5196 12.7351 19.053 12.878C19.5865 13.021 19.9031 13.5693 19.7602 14.1028C19.3141 15.7676 18.3745 17.1684 17.1409 18.1899C16.1883 18.9822 15.0949 19.5189 13.9515 19.8002C11.8607 20.3147 9.6028 19.9749 7.7328 18.7809C7.06855 18.3579 6.47841 17.8432 5.97519 17.2589C5.12341 16.2738 4.55173 15.1302 4.26015 13.9324C4.01698 12.9416 3.96104 11.8931 4.12168 10.8379C4.36697 9.20484 5.1183 7.63309 6.37564 6.37574C9.49984 3.25154 14.5652 3.25154 17.6894 6.37574L18.2332 6.91959L18.2337 5.49951C18.2338 5.05769 18.5921 4.69964 19.034 4.69979C19.4758 4.69995 19.8338 5.05825 19.8337 5.50007L19.8325 9.03277L19.8322 9.8325L19.0325 9.83249L18.9401 9.83249C18.8146 9.85665 18.6854 9.85665 18.5599 9.83248L15.5005 9.83245C15.0587 9.83245 14.7005 9.47427 14.7005 9.03244C14.7005 8.59062 15.0587 8.23245 15.5005 8.23245L16.7176 8.23246L16.2751 7.78995Z',
                  }),
                  Object(K.jsx)('clipPath', {
                    id: 'arrow-clip',
                    children: Object(K.jsx)('use', { xlinkHref: '#arrow' }),
                  }),
                ],
              }),
              Object(K.jsx)('g', {
                clipPath: 'url(#arrow-clip)',
                children: Object(K.jsx)('circle', {
                  cx: '12',
                  cy: '12',
                  r: '5',
                  transform: 'rotate(365,12,12)',
                  fill: 'none',
                  stroke: 'currentColor',
                  strokeWidth: '16',
                  strokeDasharray: '30',
                  strokeDashoffset: '0',
                  children: Object(K.jsx)('animate', {
                    attributeName: 'stroke-dashoffset',
                    values: '0;-30',
                    begin: e.clickable ? 'arrow_loading.click; 0.7s' : '0s',
                    repeatCount: 'indefinite',
                    dur: ''.concat(e.durationInSeconds, 's'),
                  }),
                }),
              }),
              Object(K.jsx)('use', { xlinkHref: '#arrow' }),
              Object(K.jsx)('animateTransform', {
                id: 'transform_0',
                attributeName: 'transform',
                attributeType: 'XML',
                type: 'rotate',
                from: '0 0 0',
                to: '-10 0 0',
                dur: '0.07s',
                begin: e.clickable ? 'arrow_loading.click;' : 'transform_0.start',
                repeatCount: '1',
              }),
              Object(K.jsx)('animateTransform', {
                id: 'transform_1',
                attributeName: 'transform',
                attributeType: 'XML',
                type: 'rotate',
                from: '-45 0 0',
                to: '390 0 0',
                dur: '0.6s',
                begin: 'transform_0.end',
                repeatCount: '1',
              }),
              Object(K.jsx)('animateTransform', {
                id: 'transform_2',
                attributeName: 'transform',
                attributeType: 'XML',
                type: 'rotate',
                from: '390 0 0',
                to: '360 0 0',
                dur: '0.15s',
                begin: 'transform_1.end',
                repeatCount: '1',
              }),
            ],
          })
        })
      Le.displayName = 'LoadingIcon'
      var Pe = Le,
        De = p.default.button.withConfig({ displayName: 'RefreshButton__IconButton', componentId: 'sc-1apwcu4-0' })([
          'position:relative;width:16px;height:16px;display:flex;align-items:center;justify-content:center;border:none;background-color:transparent;margin:0;padding:0;border-radius:999px;cursor:default;outline:none;:hover{cursor:default;outline:none;}',
        ]),
        Me = e => {
          var t = e.shouldDisable,
            n = e.callback,
            r = e.size,
            s = e.skipFirst,
            o = Object(c.useRef)(null)
          return (
            Object(c.useEffect)(() => {
              var e,
                r = null === o || void 0 === o ? void 0 : o.current
              if (r)
                return (
                  t
                    ? (r.setCurrentTime(0), r.pauseAnimations())
                    : (r.setCurrentTime(0),
                      r.unpauseAnimations(),
                      s || n(),
                      (e = setInterval(() => {
                        n()
                      }, 1e3 * L.Z))),
                  () => {
                    clearInterval(e)
                  }
                )
            }, [n, t, s]),
            Object(K.jsx)(De, {
              onClick: () => {
                L.C && n()
              },
              children: Object(K.jsx)(Pe, { size: r, ref: o, clickable: L.C, durationInSeconds: L.Z }),
            })
          )
        },
        Re = n('./src/components/ArrowRotate.tsx'),
        We = e => {
          var t = e.onClick,
            n = Object(c.useState)(!1),
            s = Object(r.a)(n, 2),
            o = s[0],
            i = s[1],
            a = Object(R.a)()
          return Object(K.jsx)(Re.b, {
            rotate: o,
            onClick: () => {
              t(), i(e => !e)
            },
            style: { width: 25, height: 25, padding: 4, background: a.buttonGray },
          })
        },
        Fe = n('./src/components/Button/index.tsx'),
        Be = n('./src/components/InfoHelper/index.tsx'),
        Ue = n('./src/components/Loader/index.tsx'),
        ze = n('./src/components/ProgressSteps/index.tsx'),
        He = n('./node_modules/react-feather/dist/icons/info.js'),
        Ge = n('./node_modules/react-redux/es/index.js'),
        qe = n('./src/components/Modal/index.tsx'),
        Ve = n('./src/components/TransactionConfirmationModal/index.tsx'),
        Ye = n('./src/state/user/actions.ts'),
        Ke = n('./node_modules/react-feather/dist/icons/check.js'),
        $e = n('./src/components/Card/index.tsx'),
        Ze = n('./node_modules/react-feather/dist/icons/x.js'),
        Xe = p.default.div.withConfig({
          displayName: 'SwapModalAreYouSure__ModalContentWrapper',
          componentId: 'sc-m9sdru-0',
        })(
          ['display:flex;flex-direction:column;width:100%;padding:24px 24px 28px;background-color:', ';'],
          e => e.theme.tableHeader,
        ),
        Qe = p.default.input.withConfig({
          displayName: 'SwapModalAreYouSure__StyledInput',
          componentId: 'sc-m9sdru-1',
        })(
          [
            'margin-top:24px;background:',
            ';border-radius:999px;padding:8px 16px;font-size:16px;outline:none;color:',
            ';border:none;&::placeholder{color:',
            ';}',
          ],
          e => e.theme.buttonBlack,
          e => e.theme.text,
          e => e.theme.disableText,
        ),
        Je = Object(p.default)(Ze.a).withConfig({
          displayName: 'SwapModalAreYouSure__StyledCloseIcon',
          componentId: 'sc-m9sdru-2',
        })(['height:28px;width:28px;:hover{cursor:pointer;}'])
      function et(e) {
        var t,
          n,
          s = e.show,
          i = e.setShow,
          a = e.setHasAcceptedNewAmount,
          d = e.parsedAmountOut,
          l = e.parsedAmountOutFromBuild,
          u = e.formattedOutputChangePercent,
          p = Object(c.useState)(''),
          j = Object(r.a)(p, 2),
          m = j[0],
          x = j[1],
          h = () => {
            'confirm' === m.trim().toLowerCase() && (a(!0), x(''), i(!1))
          },
          O = Object(R.a)()
        return Object(K.jsx)(qe.a, {
          isOpen: s,
          onDismiss: () => {
            x(''), i(!1)
          },
          maxHeight: 100,
          children: Object(K.jsxs)(Xe, {
            children: [
              Object(K.jsxs)(b.b, {
                alignItems: 'center',
                justifyContent: 'space-between',
                children: [
                  Object(K.jsx)(b.e, {
                    fontSize: '20px',
                    fontWeight: 500,
                    children: Object(K.jsx)(o.b, { id: 'Are you sure?' }),
                  }),
                  Object(K.jsx)(Je, { color: O.text, onClick: () => i(!1) }),
                ],
              }),
              Object(K.jsx)(b.e, {
                fontSize: 14,
                marginTop: '28px',
                children: Object(K.jsx)(o.b, {
                  id: 'Due to market conditions, your output has been updated from {0} {1} to {2} {3} ({formattedOutputChangePercent}%).',
                  values: {
                    0: null === d || void 0 === d ? void 0 : d.toSignificant(10),
                    1: null === d || void 0 === d || null === (t = d.currency) || void 0 === t ? void 0 : t.symbol,
                    2: null === l || void 0 === l ? void 0 : l.toSignificant(10),
                    3: null === d || void 0 === d || null === (n = d.currency) || void 0 === n ? void 0 : n.symbol,
                    formattedOutputChangePercent: u,
                  },
                }),
              }),
              Object(K.jsx)(b.e, {
                fontSize: 14,
                marginTop: '28px',
                children: Object(K.jsx)(o.b, {
                  id: "If you're okay with this, please type the word 'confirm' below to accept this new amount.",
                }),
              }),
              Object(K.jsx)(Qe, {
                placeholder: 'confirm',
                value: m,
                onChange: e => x(e.target.value),
                onKeyUp: e => {
                  'Enter' === e.key && h()
                },
              }),
              Object(K.jsxs)(b.b, {
                sx: { gap: '16px' },
                marginTop: '28px',
                justifyContent: 'center',
                children: [
                  Object(K.jsx)(Fe.i, {
                    style: { flex: 1, fontSize: '14px', padding: '10px' },
                    onClick: () => {
                      x(''), i(!1)
                    },
                    children: Object(K.jsx)(o.b, { id: 'No, go back' }),
                  }),
                  Object(K.jsx)(Fe.f, {
                    disabled: 'confirm' !== m.trim().toLowerCase(),
                    style: { fontSize: '14px', flex: 1, padding: '10px' },
                    onClick: h,
                    children: Object(K.jsx)(o.b, { id: 'Confirm' }),
                  }),
                ],
              }),
            ],
          }),
        })
      }
      var tt = n('./src/components/WarningNote/index.tsx'),
        nt = n('./src/hooks/useMixpanel.ts'),
        rt = n('./src/theme/components.tsx'),
        st = n('./src/utils/currencyAmount.ts'),
        ot = n('./src/utils/prices.ts'),
        it = n('./src/components/SwapForm/SwapModal/SwapBrief.tsx'),
        at = n('./node_modules/react-feather/dist/icons/repeat.js'),
        ct = e => {
          var t = e.content,
            n = e.isShowingSkeleton,
            r = e.skeletonStyle,
            s = Object(R.a)()
          return n
            ? Object(K.jsx)(l.a, {
                style: r,
                height: '16px',
                baseColor: s.border,
                highlightColor: s.buttonGray,
                borderRadius: '5rem',
              })
            : Object(K.jsx)(K.Fragment, { children: t })
        },
        dt = n('./src/pages/TrueSight/components/TrendingSoonLayout/TrendingSoonTokenItem.tsx'),
        lt = n('./src/utils/fee.ts'),
        ut = n('./src/utils/slippage.ts')
      function bt(e) {
        var t,
          n,
          r,
          s = e.executionPrice,
          o = e.showInverted
        if (!s) return null
        var i = null === (t = s.baseCurrency) || void 0 === t ? void 0 : t.symbol,
          a = null === (n = s.quoteCurrency) || void 0 === n ? void 0 : n.symbol,
          c = o
            ? null === s || void 0 === s || null === (r = s.invert()) || void 0 === r
              ? void 0
              : r.toSignificant(6)
            : null === s || void 0 === s
            ? void 0
            : s.toSignificant(6),
          d = o ? '1 '.concat(a, ' = ').concat(c, ' ').concat(i) : '1 '.concat(i, ' = ').concat(c, ' ').concat(a)
        return Object(K.jsx)(b.e, {
          fontWeight: 500,
          style: { whiteSpace: 'nowrap', minWidth: 'max-content' },
          children: d,
        })
      }
      function pt(e) {
        var t,
          n,
          s = e.isLoading,
          i = e.gasUsd,
          a = e.parsedAmountOut,
          d = e.executionPrice,
          l = e.amountInUsd,
          u = e.priceImpact,
          p = Object(P.b)().isEVM,
          j = Object(c.useState)(!1),
          m = Object(r.a)(j, 2),
          O = m[0],
          f = m[1],
          g = Object(R.a)(),
          v = Object(pe.b)(),
          y = v.feeConfig,
          w = v.slippage,
          k = v.routeSummary,
          C = null === k || void 0 === k || null === (t = k.parsedAmountIn) || void 0 === t ? void 0 : t.currency,
          _ = null === k || void 0 === k || null === (n = k.parsedAmountOut) || void 0 === n ? void 0 : n.currency,
          T = Object(lt.b)(Number(l || 0), null === y || void 0 === y ? void 0 : y.feeAmount),
          I = a ? Object(st.a)(a, w) : void 0,
          S =
            I && _
              ? Object(K.jsxs)(b.b, {
                  style: { color: g.text, fontWeight: 500, whiteSpace: 'nowrap' },
                  children: [
                    Object(K.jsx)(dt.c, {
                      style: { width: '-webkit-fill-available' },
                      children: Object(Y.i)(I.toSignificant(10), !1, 10),
                    }),
                    Object(K.jsxs)(b.e, { style: { minWidth: 'auto' }, children: ['\xa0', _.symbol] }),
                  ],
                })
              : '',
          A = Object(ot.a)(u),
          E = Ce(C, _)
        return Object(K.jsx)(K.Fragment, {
          children: Object(K.jsxs)(x.a, {
            gap: '0.5rem',
            style: { padding: '12px 16px', border: '1px solid '.concat(g.border), borderRadius: '16px' },
            children: [
              Object(K.jsxs)(h.b, {
                align: 'center',
                height: '20px',
                style: { gap: '16px' },
                children: [
                  Object(K.jsx)(b.e, {
                    fontWeight: 400,
                    fontSize: 12,
                    color: g.subText,
                    minWidth: 'max-content',
                    children: Object(K.jsx)(o.b, { id: 'Current Price' }),
                  }),
                  Object(K.jsx)(ct, {
                    skeletonStyle: { width: '160px', height: '19px' },
                    isShowingSkeleton: s,
                    content: d
                      ? Object(K.jsxs)(b.b, {
                          fontWeight: 500,
                          fontSize: 12,
                          color: g.text,
                          sx: { justifyContent: 'center', alignItems: 'center', textAlign: 'right' },
                          children: [
                            Object(K.jsx)(bt, { executionPrice: d, showInverted: O }),
                            Object(K.jsx)(N.n, {
                              onClick: () => f(!O),
                              children: Object(K.jsx)(at.a, { size: 14, color: g.text }),
                            }),
                          ],
                        })
                      : Object(K.jsx)(se.k.black, { fontSize: 12, children: '--' }),
                  }),
                ],
              }),
              Object(K.jsxs)(h.b, {
                align: 'center',
                height: '20px',
                style: { gap: '16px' },
                children: [
                  Object(K.jsx)(h.d, {
                    style: { minWidth: 'max-content' },
                    children: Object(K.jsx)(q.c, {
                      fontSize: 12,
                      fontWeight: 400,
                      color: g.subText,
                      minWidth: 'max-content',
                      children: Object(K.jsx)(q.a, {
                        width: '200px',
                        text: Object(K.jsx)(o.b, {
                          id: 'You will receive at least this amount or your transaction will revert',
                        }),
                        placement: 'right',
                        children: Object(K.jsx)(o.b, { id: 'Minimum Received' }),
                      }),
                    }),
                  }),
                  Object(K.jsx)(ct, {
                    skeletonStyle: { width: '108px', height: '19px' },
                    isShowingSkeleton: s,
                    content: Object(K.jsx)(se.k.black, { fontSize: 12, fontWeight: 500, children: S || '--' }),
                  }),
                ],
              }),
              p &&
                Object(K.jsxs)(h.b, {
                  height: '20px',
                  style: { gap: '16px' },
                  children: [
                    Object(K.jsx)(h.d, {
                      children: Object(K.jsx)(q.c, {
                        fontSize: 12,
                        fontWeight: 400,
                        color: g.subText,
                        children: Object(K.jsx)(q.a, {
                          text: Object(K.jsx)(o.b, { id: 'Estimated network fee for your transaction' }),
                          placement: 'right',
                          children: Object(K.jsx)(o.b, { id: 'Est. Gas Fee' }),
                        }),
                      }),
                    }),
                    Object(K.jsx)(ct, {
                      skeletonStyle: { width: '64px', height: '19px' },
                      isShowingSkeleton: s,
                      content: Object(K.jsx)(se.k.black, {
                        color: g.text,
                        fontSize: 12,
                        children: i ? Object(Y.i)(String(i), !0) : '--',
                      }),
                    }),
                  ],
                }),
              Object(K.jsxs)(h.b, {
                height: '20px',
                style: { gap: '16px' },
                children: [
                  Object(K.jsx)(h.d, {
                    children: Object(K.jsx)(q.c, {
                      fontSize: 12,
                      fontWeight: 400,
                      color: g.subText,
                      children: Object(K.jsx)(q.a, {
                        text: Object(K.jsxs)('div', {
                          children: [
                            Object(K.jsx)(o.b, {
                              id: 'Estimated change in price due to the size of your transaction.',
                            }),
                            Object(K.jsx)(o.b, {
                              id: '<0>Read more <1><2>here \u2197</2></1></0>',
                              components: {
                                0: Object(K.jsx)(b.e, { fontSize: 12 }),
                                1: Object(K.jsx)('a', {
                                  href: '#',
                                  target: '_blank',
                                  rel: 'noreferrer',
                                }),
                                2: Object(K.jsx)('b', {}),
                              },
                            }),
                          ],
                        }),
                        placement: 'right',
                        children: Object(K.jsx)(o.b, { id: 'Price Impact' }),
                      }),
                    }),
                  }),
                  Object(K.jsx)(ct, {
                    skeletonStyle: { width: '64px', height: '19px' },
                    isShowingSkeleton: s,
                    content: Object(K.jsx)(se.k.black, {
                      fontSize: 12,
                      color: A.isVeryHigh ? g.red : A.isHigh ? g.warning : g.text,
                      children: A.isInvalid || 'number' !== typeof u ? '--' : Object(ot.e)(u),
                    }),
                  }),
                ],
              }),
              Object(K.jsxs)(h.b, {
                height: '20px',
                style: { gap: '16px' },
                children: [
                  Object(K.jsx)(h.d, {
                    children: Object(K.jsx)(q.c, {
                      fontSize: 12,
                      fontWeight: 400,
                      color: g.subText,
                      children: Object(K.jsx)(q.a, {
                        text: Object(K.jsx)(b.e, {
                          children: Object(K.jsx)(o.b, {
                            id: 'During your swap if the price changes by more than this %, your transaction will revert. Read more <0>here \u2197</0>',
                            components: {
                              0: Object(K.jsx)(se.d, {
                                href: '#',
                              }),
                            },
                          }),
                        }),
                        placement: 'right',
                        children: Object(K.jsx)(o.b, { id: 'Max Slippage' }),
                      }),
                    }),
                  }),
                  Object(K.jsx)(se.k.black, {
                    fontSize: 12,
                    color: Object(ut.c)(w, E) ? g.warning : void 0,
                    children: Object(ut.d)(w),
                  }),
                ],
              }),
              y &&
                Object(K.jsxs)(h.b, {
                  height: '20px',
                  style: { gap: '16px' },
                  children: [
                    Object(K.jsxs)(h.d, {
                      children: [
                        Object(K.jsx)(se.k.black, {
                          fontSize: 12,
                          fontWeight: 400,
                          color: g.subText,
                          children: Object(K.jsx)(o.b, { id: 'Referral Fee' }),
                        }),
                        Object(K.jsx)(Be.a, {
                          size: 14,
                          text: fe.a._('Commission fee to be paid directly to your referrer'),
                        }),
                      ],
                    }),
                    Object(K.jsx)(se.k.black, { color: g.text, fontSize: 12, children: T }),
                  ],
                }),
            ],
          }),
        })
      }
      var jt = p.default.div.withConfig({
          displayName: 'ConfirmSwapModalContent__Wrapper',
          componentId: 'sc-1jlm04y-0',
        })(['display:flex;flex-direction:column;width:100%;padding:24px;gap:16px;border-radius:20px;']),
        mt = p.default.div.withConfig({
          displayName: 'ConfirmSwapModalContent__PriceUpdateWarning',
          componentId: 'sc-1jlm04y-1',
        })(
          [
            'margin-top:1rem;border-radius:16px;padding:8px 12px;display:flex;align-items:center;gap:8px;font-size:12px;background:',
            ';color:',
            ';',
          ],
          e => {
            var t = e.$level,
              n = e.theme
            return e.isAccepted
              ? Object(a.g)(0.8, n.subText)
              : 'warning' === t
              ? Object(a.g)(0.7, n.warning)
              : Object(a.g)(0.7, n.red)
          },
          e => {
            var t = e.theme
            return e.isAccepted ? t.subText : t.text
          },
        )
      function xt(e) {
        var t,
          n,
          s,
          a,
          d,
          l,
          u,
          p,
          j,
          m,
          O,
          f,
          g,
          v,
          y,
          w = e.buildResult,
          k = e.isBuildingRoute,
          C = e.errorWhileBuildRoute,
          _ = e.onDismiss,
          T = e.onSwap,
          I = Object(R.a)(),
          S = Object(P.b)().isSolana,
          A = Object(te.e)(),
          E = Object(r.a)(A, 1)[0],
          L = Object(pe.b)(),
          D = L.routeSummary,
          M = L.slippage,
          W = L.isStablePairSwap,
          F = L.isAdvancedMode,
          B = Object(c.useState)(!1),
          U = Object(r.a)(B, 2),
          z = U[0],
          H = U[1],
          G = Object(c.useState)(!1),
          V = Object(r.a)(G, 2),
          Y = V[0],
          $ = V[1],
          Z = Object(re.c)(),
          X = Object(r.a)(Z, 1)[0],
          Q = k || !!C,
          J = Object(c.useMemo)(() => {
            if (C)
              return C.toLowerCase().includes('permit')
                ? Object(K.jsx)(b.e, {
                    children: Object(K.jsx)(o.b, {
                      id: 'There was an issue while trying to confirm your price. <0>Permit signature invalid</0>',
                      components: { 0: Object(K.jsx)('b', {}) },
                    }),
                  })
                : C.includes('enough') || C.includes('min')
                ? Object(K.jsx)(b.e, {
                    children: Object(K.jsx)(o.b, {
                      id: 'There was an issue while confirming your price and minimum amount received. You may consider adjusting your <0>Max Slippage</0> and then trying to swap again.',
                      components: { 0: Object(K.jsx)('b', {}) },
                    }),
                  })
                : Object(K.jsx)(b.e, {
                    children: Object(K.jsx)(o.b, {
                      id: 'There was an issue while trying to confirm your price. Please try to swap again.',
                    }),
                  })
          }, [C]),
          ee =
            null !== w && void 0 !== w && w.data
              ? Object(de.a)(
                  Number(
                    (null === w || void 0 === w || null === (t = w.data) || void 0 === t ? void 0 : t.amountInUsd) || 0,
                  ),
                  Number(
                    (null === w || void 0 === w || null === (n = w.data) || void 0 === n ? void 0 : n.amountOutUsd) ||
                      0,
                  ),
                )
              : void 0,
          ne = Object(ot.a)(ee),
          se =
            Number(
              null === w ||
                void 0 === w ||
                null === (s = w.data) ||
                void 0 === s ||
                null === (a = s.outputChange) ||
                void 0 === a
                ? void 0
                : a.percent,
            ) || 0,
          oe = -0.001 < se && se < 0 ? '> -0.001' : 0 < se && se < 0.001 ? '< 0.001' : se.toFixed(3)
        if (
          D &&
          ((O = D.parsedAmountIn), (f = D.parsedAmountOut), (v = D.amountInUsd), null !== w && void 0 !== w && w.data)
        ) {
          var ie = w.data.amountOut
          ;(g = Object(st.b)(D.parsedAmountOut.currency, ie)), (y = w.data.amountOutUsd)
        }
        var ae = ne.isVeryHigh || ne.isInvalid ? { background: I.red } : void 0,
          le = !F && (ne.isVeryHigh || ne.isInvalid),
          be = se < -1 || (W && se < 0),
          je = (be && !z) || Q || le,
          me = Object(nt.c)().mixpanelHandler
        return Object(K.jsxs)(K.Fragment, {
          children: [
            Object(K.jsx)(et, {
              show: Y,
              setShow: $,
              setHasAcceptedNewAmount: H,
              parsedAmountOut: f,
              parsedAmountOutFromBuild: g,
              formattedOutputChangePercent: oe,
            }),
            Object(K.jsxs)(jt, {
              children: [
                Object(K.jsxs)(x.a, {
                  children: [
                    Object(K.jsxs)(h.b, {
                      children: [
                        Object(K.jsx)(b.e, {
                          fontWeight: 400,
                          fontSize: 20,
                          children: Object(K.jsx)(o.b, { id: 'Confirm Swap Details' }),
                        }),
                        Object(K.jsx)(rt.c, { onClick: _ }),
                      ],
                    }),
                    Object(K.jsxs)(h.b, {
                      mt: '12px',
                      children: [
                        Object(K.jsx)(b.e, {
                          fontWeight: 400,
                          fontSize: 12,
                          color: I.subText,
                          children: Object(K.jsx)(o.b, { id: 'Please review the details of your swap:' }),
                        }),
                        k &&
                          Object(K.jsxs)(b.b, {
                            width: 'fit-content',
                            height: '100%',
                            alignItems: 'center',
                            sx: { gap: '4px' },
                            children: [
                              Object(K.jsx)(Ue.a, { size: '14px', stroke: I.primary }),
                              Object(K.jsx)(b.e, {
                                as: 'span',
                                fontSize: 12,
                                color: I.subText,
                                children: Object(K.jsx)(N.d, {
                                  children: Object(K.jsx)(o.b, { id: 'Checking price' }),
                                }),
                              }),
                            ],
                          }),
                      ],
                    }),
                    se < 0 &&
                      Object(K.jsxs)(mt, {
                        $level: se <= -5 ? 'error' : 'warning',
                        isAccepted: z,
                        children: [
                          z && Object(K.jsx)(Ke.a, { size: 20, color: I.text }),
                          Object(K.jsx)(b.e, {
                            flex: 1,
                            color: I.text,
                            children: z
                              ? Object(K.jsx)(o.b, { id: 'New Amount Accepted' })
                              : Object(K.jsx)(o.b, {
                                  id: 'Due to market conditions, your output has been updated from {0} {1} to {2} {3} ({formattedOutputChangePercent}%) {4}',
                                  values: {
                                    0: (null === (d = f) || void 0 === d ? void 0 : d.toSignificant(10)) || '',
                                    1:
                                      null === (l = f) || void 0 === l || null === (u = l.currency) || void 0 === u
                                        ? void 0
                                        : u.symbol,
                                    2: (null === (p = g) || void 0 === p ? void 0 : p.toSignificant(10)) || '',
                                    3:
                                      null === (j = f) || void 0 === j || null === (m = j.currency) || void 0 === m
                                        ? void 0
                                        : m.symbol,
                                    4: be ? '. Please accept the new amount before swapping' : '',
                                    formattedOutputChangePercent: oe,
                                  },
                                }),
                          }),
                        ],
                      }),
                    (() => {
                      return O && void 0 !== v && f
                        ? (0 < se ? (e = 'better') : -5 < se && se < 0 ? (e = 'worse') : se <= -5 && (e = 'worst'),
                          Object(K.jsx)(it.c, {
                            $level: e,
                            inputAmount: O,
                            amountInUsd: v,
                            outputAmount: f,
                            outputAmountFromBuild: g,
                            amountOutUsdFromBuild: y,
                            currencyOut: f.currency,
                            isLoading: k,
                          }))
                        : null
                      var e
                    })(),
                  ],
                }),
                Object(K.jsx)(
                  pt,
                  Object(ce.a)(
                    {},
                    (() => {
                      if (null === w || void 0 === w || !w.data || !D)
                        return {
                          isLoading: k,
                          gasUsd: void 0,
                          executionPrice: void 0,
                          parsedAmountOut: void 0,
                          amountInUsd: void 0,
                          priceImpact: void 0,
                        }
                      var e = w.data,
                        t = e.amountIn,
                        n = e.amountInUsd,
                        r = e.amountOut,
                        s = e.gasUsd,
                        o = Object(st.b)(D.parsedAmountIn.currency, t),
                        a = Object(st.b)(D.parsedAmountOut.currency, r),
                        c = new i.Price(o.currency, a.currency, o.quotient, a.quotient)
                      return {
                        isLoading: k,
                        gasUsd: s,
                        executionPrice: c,
                        parsedAmountOut: a,
                        amountInUsd: n,
                        priceImpact: ee,
                      }
                    })(),
                  ),
                ),
                Object(K.jsxs)(b.b, {
                  sx: { flexDirection: 'column', gap: '16px' },
                  children: [
                    Object(K.jsx)(ue.b, { rawSlippage: M, isStablePairSwap: W }),
                    Object(K.jsx)(Ne.a, { isDegenMode: F, priceImpact: ee }),
                    C && Object(K.jsx)(tt.a, { shortText: J }),
                    S && !E
                      ? Object(K.jsx)($e.c, {
                          style: { textAlign: 'center', borderRadius: '999px', padding: '12px' },
                          id: 'confirm-swap-or-send',
                          children: Object(K.jsx)(N.d, { children: Object(K.jsx)(o.b, { id: 'Checking accounts' }) }),
                        })
                      : C
                      ? Object(K.jsx)(Fe.j, {
                          onClick: _,
                          children: Object(K.jsx)(b.e, {
                            fontSize: 14,
                            fontWeight: 500,
                            as: 'span',
                            lineHeight: 1,
                            children: Object(K.jsx)(o.b, { id: 'Dismiss' }),
                          }),
                        })
                      : Object(K.jsxs)(b.b, {
                          sx: { gap: '8px', width: '100%' },
                          children: [
                            be &&
                              Object(K.jsx)(Fe.j, {
                                style:
                                  z || (ne.isVeryHigh && !X)
                                    ? void 0
                                    : {
                                        backgroundColor: ne.isVeryHigh || ne.isInvalid || se <= -5 ? I.red : I.warning,
                                      },
                                onClick: () => {
                                  me(nt.a.ACCEPT_NEW_AMOUNT), se > -10 ? H(!0) : $(!0)
                                },
                                disabled: z || (ne.isVeryHigh && !X),
                                children: 'Accept New Amount',
                              }),
                            Object(K.jsx)(Fe.j, {
                              onClick: T,
                              disabled: je,
                              id: 'confirm-swap-or-send',
                              style: Object(ce.a)(
                                Object(ce.a)({}, je ? void 0 : ae),
                                {},
                                { display: 'flex', alignItems: 'center', gap: '4px' },
                              ),
                              children: Q
                                ? Object(K.jsx)(b.e, {
                                    fontSize: 14,
                                    fontWeight: 500,
                                    as: 'span',
                                    lineHeight: 1,
                                    children: Object(K.jsx)(o.b, { id: 'Swap' }),
                                  })
                                : je
                                ? Object(K.jsxs)(K.Fragment, {
                                    children: [
                                      le &&
                                        Object(K.jsx)(q.a, {
                                          text: Object(K.jsx)(o.b, {
                                            id: 'To ensure you dont lose funds due to very high price impact (\u226510%), swap has been disabled for this trade. If you still wish to continue, you can turn on Degen Mode from Settings',
                                          }),
                                          children: Object(K.jsx)(He.a, { size: 14 }),
                                        }),
                                      Object(K.jsx)(b.e, {
                                        children: Object(K.jsx)(o.b, {
                                          id: '{0}',
                                          values: { 0: le ? 'Swap Disabled' : 'Confirm Swap' },
                                        }),
                                      }),
                                    ],
                                  })
                                : Object(K.jsx)(b.e, {
                                    fontSize: 14,
                                    fontWeight: 500,
                                    as: 'span',
                                    lineHeight: 1,
                                    children: Object(K.jsx)(o.b, { id: 'Confirm Swap' }),
                                  }),
                            }),
                          ],
                        }),
                  ],
                }),
              ],
            }),
          ],
        })
      }
      var ht,
        Ot = e => {
          var t,
            n,
            s,
            o,
            a = e.isOpen,
            d = e.tokenAddToMetaMask,
            l = e.onDismiss,
            u = e.swapCallback,
            b = e.buildResult,
            p = e.isBuildingRoute,
            j = Object(P.b)(),
            m = j.chainId,
            x = j.account,
            h = Object(Ge.d)(),
            O = Object(c.useState)({ error: '', isAttemptingTx: !1, txHash: '' }),
            f = Object(r.a)(O, 2),
            g = f[0],
            v = g.error,
            y = g.isAttemptingTx,
            w = g.txHash,
            k = f[1],
            C = Object(pe.b)().routeSummary,
            _ = null === C || void 0 === C || null === (t = C.parsedAmountIn) || void 0 === t ? void 0 : t.currency,
            T = null === C || void 0 === C || null === (n = C.parsedAmountOut) || void 0 === n ? void 0 : n.currency,
            I =
              T &&
              i.CurrencyAmount.fromRawAmount(
                T,
                (null === b || void 0 === b || null === (s = b.data) || void 0 === s ? void 0 : s.amountOut) || '0',
              ),
            S = 'Swapping '
              .concat(
                null === C || void 0 === C || null === (o = C.parsedAmountIn) || void 0 === o
                  ? void 0
                  : o.toSignificant(6),
                ' ',
              )
              .concat(null === _ || void 0 === _ ? void 0 : _.symbol, ' for ')
              .concat(null === I || void 0 === I ? void 0 : I.toSignificant(6), ' ')
              .concat(null === T || void 0 === T ? void 0 : T.symbol),
            A = Object(c.useCallback)(() => {
              l(), k({ error: '', isAttemptingTx: !1, txHash: '' })
            }, [l]),
            E = e => {
              k({ error: '', txHash: e, isAttemptingTx: !1 })
            },
            N = e => {
              k({ error: e, txHash: '', isAttemptingTx: !1 })
            },
            L = () => {
              ;((null !== b && void 0 !== b && b.error && b.error.toLowerCase().includes('permit')) ||
                (v && v.toLowerCase().includes('permit'))) &&
                C &&
                x &&
                h(Object(Ye.d)({ chainId: m, address: C.parsedAmountIn.currency.wrapped.address, account: x })),
                A()
            },
            D = (function () {
              var e = Object(H.a)(
                Object(z.a)().mark(function e() {
                  var t
                  return Object(z.a)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (u) {
                              e.next = 2
                              break
                            }
                            return e.abrupt('return')
                          case 2:
                            return k({ error: '', isAttemptingTx: !0, txHash: '' }), (e.prev = 3), (e.next = 6), u()
                          case 6:
                            ;(t = e.sent), E(t), (e.next = 13)
                            break
                          case 10:
                            ;(e.prev = 10),
                              (e.t0 = e.catch(3)),
                              N(e.t0.message || fe.a._('Something went wrong. Please try again'))
                          case 13:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[3, 10]],
                  )
                }),
              )
              return function () {
                return e.apply(this, arguments)
              }
            })()
          return (
            Object(c.useEffect)(() => {
              A()
            }, [m, A]),
            Object(K.jsx)(qe.a, {
              isOpen: a,
              onDismiss: A,
              maxHeight: 90,
              children: y
                ? Object(K.jsx)(Ve.b, { onDismiss: A, pendingText: S, startedTime: void 0 })
                : w
                ? Object(K.jsx)(Ve.d, { showTxBanner: !0, chainId: m, hash: w, onDismiss: A, tokenAddToMetaMask: d })
                : v
                ? Object(K.jsx)(Ve.c, { onDismiss: L, message: v })
                : Object(K.jsx)(xt, {
                    isBuildingRoute: p,
                    errorWhileBuildRoute: null === b || void 0 === b ? void 0 : b.error,
                    onDismiss: L,
                    onSwap: D,
                    buildResult: b,
                  }),
            })
          )
        },
        ft = n('./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js'),
        gt = n('./src/state/transactions/hooks.tsx'),
        vt = n('./src/state/transactions/type.ts'),
        yt = n('./src/utils/formatCurrencyAmount.tsx'),
        wt = n('./src/utils/sendTransaction.ts'),
        kt = e => {
          var t = Object(P.b)(),
            n = t.account,
            s = t.chainId,
            o = t.isEVM,
            i = Object(P.e)().library,
            a = Object(pe.b)(),
            d = a.typedValue,
            l = a.feeConfig,
            u = a.isSaveGas,
            b = a.recipient,
            p = a.routeSummary || {},
            j = p.parsedAmountIn,
            m = p.parsedAmountOut,
            x = p.priceImpact,
            h = Object(re.y)(),
            O = Object(r.a)(h, 1)[0],
            f = Object(gt.g)(),
            g = Object(_e.a)(b).address,
            v = null === b || '' === b ? n : g,
            y = Object(c.useCallback)(() => {
              if (!j || !m) throw new Error('"inputAmount" is undefined.')
              var t = j.currency.symbol,
                r = m.currency.symbol,
                o = j.currency.isNative ? L.eb : j.currency.address,
                i = m.currency.isNative ? L.eb : m.currency.address,
                a = Object(yt.a)(j, 6),
                c = Object(yt.a)(m, 6),
                p = l && 'currency_in' === l.chargeFeeBy && l.isInBps ? d : a,
                h = v === n ? void 0 : 'to '.concat(b && Object(Y.s)(s, b) ? Object(Y.A)(s, b) : b)
              return {
                hash: '',
                type: vt.c.SWAP,
                extraInfo: {
                  tokenAmountIn: p,
                  tokenAmountOut: c,
                  tokenSymbolIn: t,
                  tokenSymbolOut: r,
                  tokenAddressIn: o,
                  tokenAddressOut: i,
                  arbitrary: {
                    inputSymbol: t,
                    outputSymbol: r,
                    inputAddress: o,
                    outputAddress: i,
                    inputDecimals: j.currency.decimals,
                    outputDecimals: m.currency.decimals,
                    withRecipient: h,
                    saveGas: u,
                    inputAmount: j.toExact(),
                    slippageSetting: O ? O / 100 : 0,
                    priceImpact: x && x > 0.01 ? x.toFixed(2) : '<0.01',
                    isPermitSwap: e,
                  },
                },
              }
            }, [n, O, s, l, j, u, m, x, v, b, d, e]),
            w = Object(c.useCallback)(
              e => {
                var t = y()
                f(Object(ce.a)(Object(ce.a)({}, t), {}, { hash: e.hash }))
              },
              [f, y],
            ),
            k = Object(c.useCallback)(
              (function () {
                var e = Object(H.a)(
                  Object(z.a)().mark(function e(t, r) {
                    var s, o
                    return Object(z.a)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (n && j && t && r) {
                              e.next = 2
                              break
                            }
                            throw new Error('Missing dependencies')
                          case 2:
                            return (
                              (s = ft.a.from(j.currency.isNative ? j.quotient.toString() : 0)),
                              (e.next = 5),
                              Object(wt.a)(n, i, t, r, s, w)
                            )
                          case 5:
                            if (void 0 !== (null === (o = e.sent) || void 0 === o ? void 0 : o.hash)) {
                              e.next = 8
                              break
                            }
                            throw new Error('sendTransaction returned undefined.')
                          case 8:
                            return e.abrupt('return', null === o || void 0 === o ? void 0 : o.hash)
                          case 9:
                          case 'end':
                            return e.stop()
                        }
                    }, e)
                  }),
                )
                return function (t, n) {
                  return e.apply(this, arguments)
                }
              })(),
              [n, w, j, i],
            )
          return o ? k : null
        },
        Ct = Object(p.default)(Fe.j)
          .attrs({ id: 'swap-button' })
          .withConfig({ displayName: 'SwapOnlyButton__CustomPrimaryButton', componentId: 'sc-5l9qp8-0' })([
          'border:none;font-weight:500;flex:1;&:disabled{border:none;}',
        ]),
        _t = e => {
          var t = e.minimal,
            n = e.isDegenMode,
            s = e.routeSummary,
            a = e.isGettingRoute,
            d = e.isProcessingSwap,
            l = e.isApproved,
            u = e.currencyIn,
            p = e.currencyOut,
            j = e.balanceIn,
            m = e.balanceOut,
            x = e.parsedAmount,
            h = e.isPermitSwap,
            O = e.setProcessingSwap,
            f = e.setErrorWhileSwap,
            g = e.buildRoute,
            v = Object(P.b)().isSolana,
            y = Object(te.e)(),
            w = Object(r.a)(y, 1)[0],
            k = Object(R.a)(),
            C = Object(nt.c)({ [ee.a.INPUT]: u, [ee.a.OUTPUT]: p }).mixpanelHandler,
            _ = Object(c.useState)(),
            T = Object(r.a)(_, 2),
            I = T[0],
            S = T[1],
            A = Object(c.useState)(!1),
            E = Object(r.a)(A, 2),
            L = E[0],
            D = E[1],
            M = (s || {}).priceImpact,
            W = kt(h),
            F = Object(ot.a)(M),
            B = Boolean(u && p && x),
            U = (a && void 0 === s) || L || ((!j || !m) && B),
            G = (function () {
              var e = Object(H.a)(
                Object(z.a)().mark(function e() {
                  var t
                  return Object(z.a)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (W && !L) {
                            e.next = 2
                            break
                          }
                          return e.abrupt('return')
                        case 2:
                          return O(!0), D(!0), S(void 0), (e.next = 7), g()
                        case 7:
                          ;(t = e.sent), D(!1), S(t)
                        case 10:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )
              return function () {
                return e.apply(this, arguments)
              }
            })(),
            V = () => {
              C(nt.a.SWAP_INITIATED, {
                gasUsd: null === s || void 0 === s ? void 0 : s.gasUsd,
                inputAmount: null === s || void 0 === s ? void 0 : s.parsedAmountIn,
                priceImpact: null === s || void 0 === s ? void 0 : s.priceImpact,
              }),
                f(''),
                G()
            },
            Y = Object(c.useMemo)(() => {
              var e, t
              if (
                null !== I &&
                void 0 !== I &&
                null !== (e = I.data) &&
                void 0 !== e &&
                e.data &&
                null !== I &&
                void 0 !== I &&
                null !== (t = I.data) &&
                void 0 !== t &&
                t.routerAddress &&
                W
              )
                return () => {
                  var e,
                    t,
                    n,
                    r = ''
                  if (
                    void 0 !== (null === (e = I.data) || void 0 === e ? void 0 : e.amountOut) &&
                    void 0 !==
                      (null === (t = I.data) || void 0 === t || null === (n = t.outputChange) || void 0 === n
                        ? void 0
                        : n.percent)
                  ) {
                    var o,
                      a,
                      c,
                      d = null === (o = I.data) || void 0 === o ? void 0 : o.amountOut,
                      l =
                        null === (a = I.data) || void 0 === a || null === (c = a.outputChange) || void 0 === c
                          ? void 0
                          : c.percent
                    r =
                      0 === l
                        ? 'Unchanged'
                        : l > 0
                        ? 'New output amt is better than initial output amt'
                        : 'New output amt is '.concat(
                            d,
                            l > -1
                              ? ' to < 1% worse than initial output amt'
                              : l >= -5
                              ? ' to >= 1% to <= 5% worse than initial output amt'
                              : ' to > 5% worse than initial output amt',
                          )
                  }
                  var u = ''
                  if (void 0 !== s) {
                    var b,
                      p,
                      j = I.data,
                      m = j.amountIn,
                      x = j.amountOut,
                      h = Object(st.b)(s.parsedAmountIn.currency, m),
                      O = Object(st.b)(s.parsedAmountOut.currency, x),
                      f = new i.Price(h.currency, O.currency, h.quotient, O.quotient),
                      g = null === (b = f.baseCurrency) || void 0 === b ? void 0 : b.symbol,
                      v = null === (p = f.quoteCurrency) || void 0 === p ? void 0 : p.symbol,
                      y = null === f || void 0 === f ? void 0 : f.toSignificant(6)
                    u = '1 '.concat(g, ' = ').concat(y, ' ').concat(v)
                  }
                  return (
                    C(nt.a.SWAP_CONFIRMED, {
                      gasUsd: null === s || void 0 === s ? void 0 : s.gasUsd,
                      inputAmount: null === s || void 0 === s ? void 0 : s.parsedAmountIn,
                      priceImpact: null === s || void 0 === s ? void 0 : s.priceImpact,
                      outputAmountDescription: r,
                      currentPrice: u,
                    }),
                    W(I.data.routerAddress, I.data.data)
                  )
                }
            }, [I, W, s, C]),
            $ = Object(c.useCallback)(() => {
              O(!1)
            }, [O])
          return Object(K.jsxs)(K.Fragment, {
            children: [
              (() => {
                if (d)
                  return Object(K.jsx)(Ct, {
                    disabled: !0,
                    $minimal: t,
                    children: Object(K.jsx)(N.d, { children: Object(K.jsx)(o.b, { id: 'Processing' }) }),
                  })
                if (n && v && !w)
                  return Object(K.jsx)(Ct, {
                    disabled: !0,
                    $minimal: t,
                    children: Object(K.jsx)(N.d, { children: Object(K.jsx)(o.b, { id: 'Checking accounts' }) }),
                  })
                if (U)
                  return Object(K.jsx)(Ct, {
                    disabled: !0,
                    $minimal: t,
                    children: Object(K.jsx)(N.d, { children: Object(K.jsx)(o.b, { id: 'Calculating' }) }),
                  })
                var e = !n && (F.isVeryHigh || F.isInvalid),
                  r = !s || !l || e
                return (F.isVeryHigh || F.isInvalid) && n
                  ? Object(K.jsx)(Ct, {
                      onClick: V,
                      disabled: r,
                      $minimal: t,
                      style: r ? void 0 : { background: k.red },
                      children: Object(K.jsx)(o.b, { id: 'Swap Anyway' }),
                    })
                  : Object(K.jsxs)(Ct, {
                      disabled: r,
                      onClick: V,
                      $minimal: t,
                      style: { display: 'flex', alignItems: 'center', gap: '4px' },
                      children: [
                        e
                          ? Object(K.jsx)(q.a, {
                              text: Object(K.jsx)(o.b, {
                                id: 'To ensure you dont lose funds due to very high price impact (\u226510%), swap has been disabled for this trade. If you still wish to continue, you can turn on Degen Mode from Settings',
                              }),
                              children: Object(K.jsx)(He.a, { size: 14 }),
                            })
                          : s
                          ? null
                          : Object(K.jsx)(q.a, {
                              text: Object(K.jsx)(o.b, {
                                id: 'There was an issue while trying to find a price for these tokens. Please try again. Otherwise, you may select some other tokens to swap',
                              }),
                              children: Object(K.jsx)(He.a, { size: 14 }),
                            }),
                        Object(K.jsx)(b.e, {
                          children: Object(K.jsx)(o.b, { id: '{0}', values: { 0: r ? 'Swap Disabled' : 'Swap' } }),
                        }),
                      ],
                    })
              })(),
              Object(K.jsx)(Ot, {
                isOpen: d,
                tokenAddToMetaMask: p,
                buildResult: I,
                isBuildingRoute: L,
                onDismiss: $,
                swapCallback: Y,
              }),
            ],
          })
        },
        Tt = n('./src/hooks/useApproveCallback.ts'),
        It = n('./node_modules/@ethersproject/bytes/lib.esm/index.js'),
        St = n('./node_modules/ethers/lib/utils.js'),
        At = n('./node_modules/react-use/esm/usePrevious.js'),
        Et = n('./src/components/Announcement/type.ts'),
        Nt = n('./src/constants/abis/eip2612.json')
      !(function (e) {
        ;(e[(e.AMOUNT = 1)] = 'AMOUNT'), (e[(e.SALT = 2)] = 'SALT')
      })(ht || (ht = {}))
      var Lt,
        Pt = {
          [i.ChainId.MAINNET]: {
            '0xba100000625a3754423978a60c9317c58a424e3D': { type: ht.AMOUNT, version: '1' },
            '0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72': { type: ht.AMOUNT, version: '1' },
            '0x0C0F2b41F758d66bB8e694693B0f9e6FaE726499': { type: ht.AMOUNT, version: '1' },
            '0x27702a26126e0B3702af63Ee09aC4d1A084EF628': { type: ht.AMOUNT, version: '1' },
          },
          [i.ChainId.MATIC]: {
            '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174': { type: ht.SALT, version: '1' },
            '0x4e3Decbb3645551B8A19f0eA1678079FCB33fB4c': { type: ht.AMOUNT, version: '1' },
            '0x767058F11800FBA6A682E73A6e79ec5eB74Fac8c': { type: ht.AMOUNT, version: '1' },
            '0xbD1463F02f61676d53fd183C2B19282BFF93D099': { type: ht.AMOUNT, version: '1' },
            '0xFbBd93fC3BE8B048c007666AF4846e4A36BACC95': { type: ht.AMOUNT, version: '1' },
            '0xD81F558b71A5323e433729009D55159955F8A7f9': { type: ht.AMOUNT, version: '1' },
            '0x1eBA4B44C4F8cc2695347C6a78F0B7a002d26413': { type: ht.AMOUNT, version: '1' },
            '0x9111D6446Ac5b88A84cf06425c6286658368542F': { type: ht.AMOUNT, version: '1' },
            '0xf8F9efC0db77d8881500bb06FF5D6ABc3070E695': { type: ht.AMOUNT, version: '1' },
            '0xcaF5191fc480F43e4DF80106c7695ECA56E48B18': { type: ht.AMOUNT, version: '1' },
            '0xeEeEEb57642040bE42185f49C52F7E9B38f8eeeE': { type: ht.AMOUNT, version: '1' },
            '0x8497842420cFdbc97896C2353D75d89Fc8D5Be5D': { type: ht.AMOUNT, version: '1' },
          },
          [i.ChainId.OASIS]: {
            '0xB44a9B6905aF7c801311e8F4E76932ee959c663C': { type: ht.AMOUNT, version: '1' },
            '0x80A16016cC4A2E6a2CACA8a4a498b1699fF0f844': { type: ht.AMOUNT, version: '1' },
            '0xE3F5a90F9cb311505cd691a46596599aA1A0AD7D': { type: ht.AMOUNT, version: '1' },
            '0x639A647fbe20b6c8ac19E48E2de44ea792c62c5C': { type: ht.AMOUNT, version: '1' },
          },
          [i.ChainId.CRONOS]: { '0xe6801928061CDbE32AC5AD0634427E140EFd05F9': { type: ht.AMOUNT, version: '1' } },
          [i.ChainId.ARBITRUM]: {
            '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8': { type: ht.AMOUNT, version: '1' },
            '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9': { type: ht.AMOUNT, version: '1' },
            '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1': { type: ht.AMOUNT, version: '1' },
            '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f': { type: ht.AMOUNT, version: '1' },
            '0xFEa7a6a0B346362BF88A9e4A88416B77a57D6c2A': { type: ht.AMOUNT, version: '1' },
            '0x9d2F299715D94d8A7E6F5eaa8E654E8c74a988A7': { type: ht.AMOUNT, version: '1' },
            '0x080F6AEd32Fc474DD5717105Dba5ea57268F46eb': { type: ht.AMOUNT, version: '1' },
            '0x319f865b287fCC10b30d8cE6144e8b6D1b476999': { type: ht.AMOUNT, version: '1' },
            '0x99C409E5f62E4bd2AC142f17caFb6810B8F0BAAE': { type: ht.AMOUNT, version: '1' },
            '0x68eAd55C258d6fa5e46D67fc90f53211Eab885BE': { type: ht.AMOUNT, version: '1' },
            '0xD74f5255D557944cf7Dd0E45FF521520002D5748': { type: ht.AMOUNT, version: '1' },
            '0x21E60EE73F17AC0A411ae5D690f908c3ED66Fe12': { type: ht.AMOUNT, version: '1' },
            '0xe4DDDfe67E7164b0FE14E218d80dC4C08eDC01cB': { type: ht.AMOUNT, version: '1' },
          },
          [i.ChainId.BSCMAINNET]: {},
          [i.ChainId.VELAS]: {},
          [i.ChainId.OPTIMISM]: {
            '0x5029c236320b8f15ef0a657054b84d90bfbeded3': { type: ht.AMOUNT, version: '1' },
            '0x7b0bcc23851bbf7601efc9e9fe532bf5284f65d3': { type: ht.AMOUNT, version: '1' },
            '0x76fb31fb4af56892a25e32cfc43de717950c9278': { type: ht.AMOUNT, version: '1' },
            '0x4200000000000000000000000000000000000042': { type: ht.AMOUNT, version: '1' },
            '0x2e3d870790dc77a83dd1d18184acc7439a53f475': { type: ht.AMOUNT, version: '1' },
            '0x67ccea5bb16181e7b4109c9c2143c24a1c2205be': { type: ht.AMOUNT, version: '1' },
            '0xb12c13e66ade1f72f71834f2fc5082db8c091358': { type: ht.AMOUNT, version: '1' },
          },
          [i.ChainId.AVAXMAINNET]: {
            '0x39fC9e94Caeacb435842FADeDeCB783589F50f5f': { type: ht.AMOUNT, version: '1' },
            '0x130966628846BFd36ff31a822705796e8cb8C18D': { type: ht.AMOUNT, version: '1' },
            '0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7': { type: ht.AMOUNT, version: '1' },
            '0x237917E8a998b37759c8EE2fAa529D60c66c2927': { type: ht.AMOUNT, version: '1' },
            '0x63682bDC5f875e9bF69E201550658492C9763F89': { type: ht.AMOUNT, version: '1' },
            '0xb54f16fB19478766A268F172C9480f8da1a7c9C3': { type: ht.AMOUNT, version: '1' },
          },
          [i.ChainId.FANTOM]: {
            '0x6a07A792ab2965C72a5B8088d3a069A7aC3a993B': { type: ht.AMOUNT, version: '1' },
            '0x753fbc5800a8C8e3Fb6DC6415810d627A387Dfc9': { type: ht.AMOUNT, version: '1' },
            '0x46E7628E8b4350b2716ab470eE0bA1fa9e76c6C5': { type: ht.AMOUNT, version: '1' },
            '0x841FAD6EAe12c286d1Fd18d1d525DFfA75C7EFFE': { type: ht.AMOUNT, version: '1' },
            '0xB01E8419d842beebf1b70A7b5f7142abbaf7159D': { type: ht.AMOUNT, version: '1' },
            '0x657A1861c15A3deD9AF0B6799a195a249ebdCbc6': { type: ht.AMOUNT, version: '1' },
            '0x1E4F97b9f9F913c46F1632781732927B9019C68b': { type: ht.AMOUNT, version: '1' },
            '0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E': { type: ht.AMOUNT, version: '1' },
            '0x049d68029688eAbF473097a2fC38ef61633A3C7A': { type: ht.AMOUNT, version: '1' },
            '0xC1Be9a4D5D45BeeACAE296a7BD5fADBfc14602C4': { type: ht.AMOUNT, version: '1' },
            '0xf16e81dce15B08F326220742020379B855B87DF9': { type: ht.AMOUNT, version: '1' },
            '0xb3654dc3D10Ea7645f8319668E8F54d2574FBdC8': { type: ht.AMOUNT, version: '1' },
            '0x56ee926bD8c72B2d5fa1aF4d9E4Cbb515a1E3Adc': { type: ht.AMOUNT, version: '1' },
            '0xae75A438b2E0cB8Bb01Ec1E1e376De11D44477CC': { type: ht.AMOUNT, version: '1' },
            '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75': { type: ht.AMOUNT, version: '1' },
            '0x321162Cd933E2Be498Cd2267a90534A804051b11': { type: ht.AMOUNT, version: '1' },
            '0x74b23882a30290451A17c44f4F05243b6b58C76d': { type: ht.AMOUNT, version: '1' },
            '0x29b0Da86e484E1C0029B56e817912d778aC0EC69': { type: ht.AMOUNT, version: '1' },
            '0x82F8Cb20c14F134fe6Ebf7aC3B903B2117aAfa62': { type: ht.AMOUNT, version: '1' },
            '0xbFaf328Fe059c53D936876141f38089df0D1503D': { type: ht.AMOUNT, version: '1' },
            '0xD67de0e0a0Fd7b15dC8348Bb9BE742F3c5850454': { type: ht.AMOUNT, version: '1' },
            '0xD0660cD418a64a1d44E9214ad8e459324D8157f1': { type: ht.AMOUNT, version: '1' },
            '0xd6070ae98b8069de6B494332d1A1a81B6179D960': { type: ht.AMOUNT, version: '1' },
            '0x82f0B8B456c1A451378467398982d4834b6829c1': { type: ht.AMOUNT, version: '1' },
            '0x3A3841f5fa9f2c283EA567d5Aeea3Af022dD2262': { type: ht.AMOUNT, version: '1' },
            '0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b': { type: ht.AMOUNT, version: '1' },
            '0x627524d78B4fC840C887ffeC90563c7A42b671fD': { type: ht.AMOUNT, version: '1' },
            '0x9fC071cE771c7B27b7d9A57C32c0a84c18200F8a': { type: ht.AMOUNT, version: '1' },
            '0x195FE0c899434fB47Cd6c1A09ba9DA56A1Cca12C': { type: ht.AMOUNT, version: '1' },
            '0x47d0d625638b56084e76b8720475d175d171af9A': { type: ht.AMOUNT, version: '1' },
            '0x05848B832E872d9eDd84AC5718D58f21fD9c9649': { type: ht.AMOUNT, version: '1' },
            '0x6626c47c00F1D87902fc13EECfaC3ed06D5E8D8a': { type: ht.AMOUNT, version: '1' },
            '0x468003B688943977e6130F4F68F23aad939a1040': { type: ht.AMOUNT, version: '1' },
            '0xbbc4A8d076F4B1888fec42581B6fc58d242CF2D5': { type: ht.AMOUNT, version: '1' },
            '0x6a545f9c64d8f7B957D8D2e6410B52095A9E6c29': { type: ht.AMOUNT, version: '1' },
            '0x3129662808bEC728a27Ab6a6b9AFd3cBacA8A43c': { type: ht.AMOUNT, version: '1' },
            '0xb84527D59b6Ecb96F433029ECc890D4492C5dCe1': { type: ht.AMOUNT, version: '1' },
            '0x3b57f3FeAaF1e8254ec680275Ee6E7727C7413c7': { type: ht.AMOUNT, version: '1' },
            '0x5d5530eb3147152FE78d5C4bFEeDe054c8d1442A': { type: ht.AMOUNT, version: '1' },
            '0xEFF6FcfBc2383857Dd66ddf57effFC00d58b7d9D': { type: ht.AMOUNT, version: '1' },
            '0x5C4FDfc5233f935f20D2aDbA572F770c2E377Ab0': { type: ht.AMOUNT, version: '1' },
            '0x5602df4A94eB6C680190ACCFA2A475621E0ddBdc': { type: ht.AMOUNT, version: '1' },
            '0x9F47F313ACFd4bdC52F4373b493EaE7d5aC5b765': { type: ht.AMOUNT, version: '1' },
            '0xfa1FBb8Ef55A4855E5688C0eE13aC3f202486286': { type: ht.AMOUNT, version: '1' },
            '0x9879aBDea01a879644185341F7aF7d8343556B7a': { type: ht.AMOUNT, version: '1' },
            '0x6496994241804D7fE2b032901931e03bCD82301F': { type: ht.AMOUNT, version: '1' },
            '0xB66b5D38E183De42F21e92aBcAF3c712dd5d6286': { type: ht.AMOUNT, version: '1' },
            '0xfB98B335551a418cD0737375a2ea0ded62Ea213b': { type: ht.AMOUNT, version: '1' },
            '0xDDc0385169797937066bBd8EF409b5B3c0dFEB52': { type: ht.AMOUNT, version: '1' },
          },
        },
        Dt = [
          { name: 'name', type: 'string' },
          { name: 'version', type: 'string' },
          { name: 'chainId', type: 'uint256' },
          { name: 'verifyingContract', type: 'address' },
        ],
        Mt = [
          { name: 'name', type: 'string' },
          { name: 'version', type: 'string' },
          { name: 'verifyingContract', type: 'address' },
          { name: 'salt', type: 'bytes32' },
        ],
        Rt = n('./src/state/application/hooks.ts'),
        Wt = n('./src/state/multicall/hooks.ts'),
        Ft = n('./src/hooks/useContract.ts'),
        Bt = n('./src/hooks/useTransactionDeadline.ts')
      !(function (e) {
        ;(e[(e.NOT_APPLICABLE = 0)] = 'NOT_APPLICABLE'),
          (e[(e.NOT_SIGNED = 1)] = 'NOT_SIGNED'),
          (e[(e.SIGNED = 2)] = 'SIGNED')
      })(Lt || (Lt = {}))
      var Ut = n('./node_modules/@ethersproject/constants/lib.esm/bignumbers.js'),
        zt = n('./src/components/CurrencyLogo/index.tsx'),
        Ht = n('./src/components/NumericalInput/index.tsx'),
        Gt = n('./src/state/application/actions.ts')
      function qt() {
        return Object(K.jsxs)('svg', {
          width: '44',
          height: '44',
          viewBox: '0 0 44 44',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: [
            Object(K.jsx)('g', {
              clipPath: 'url(#clip0_398_6043)',
              children: Object(K.jsx)('path', {
                d: 'M5.5 31.6249V38.4999H12.375L32.6517 18.2233L25.7767 11.3483L5.5 31.6249ZM37.9683 12.9066C38.6833 12.1916 38.6833 11.0366 37.9683 10.3216L33.6783 6.03161C32.9633 5.31661 31.8083 5.31661 31.0933 6.03161L27.7383 9.38661L34.6133 16.2616L37.9683 12.9066Z',
                fill: 'currentcolor',
              }),
            }),
            Object(K.jsx)('g', {
              clipPath: 'url(#clip1_398_6043)',
              filter: 'blur(2px)',
              children: Object(K.jsx)('path', {
                d: 'M5.5 31.6249V38.4999H12.375L32.6517 18.2233L25.7767 11.3483L5.5 31.6249ZM37.9683 12.9066C38.6833 12.1916 38.6833 11.0366 37.9683 10.3216L33.6783 6.03161C32.9633 5.31661 31.8083 5.31661 31.0933 6.03161L27.7383 9.38661L34.6133 16.2616L37.9683 12.9066Z',
                fill: 'currentcolor',
              }),
            }),
          ],
        })
      }
      function Vt() {
        return Object(K.jsxs)('svg', {
          width: '44',
          height: '44',
          viewBox: '0 0 44 44',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: [
            Object(K.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M22.9718 21.0283C22.9718 21.0283 20.2859 18.3407 17.6001 15.6567C14.1003 12.155 8.42244 12.155 4.92261 15.6567L4.91711 15.6603C1.41728 19.162 1.41728 24.838 4.91711 28.3397L4.92261 28.3433C8.42244 31.845 14.1003 31.845 17.6001 28.3433C18.1776 27.7658 18.7551 27.1902 19.3051 26.6383C19.8423 26.103 19.8423 25.2303 19.3051 24.695C18.7698 24.1578 17.8971 24.1578 17.3618 24.695C16.8099 25.245 16.2343 25.8225 15.6568 26.4C13.2294 28.8273 9.29328 28.8273 6.86594 26.4L6.86228 26.3945C4.43494 23.9672 4.43494 20.0328 6.86228 17.6055L6.86594 17.6C9.29328 15.1727 13.2294 15.1727 15.6568 17.6C18.3408 20.2858 21.0284 22.9717 21.0284 22.9717C21.5638 23.5088 22.4364 23.5088 22.9718 22.9717C23.5089 22.4363 23.5089 21.5637 22.9718 21.0283Z',
              fill: 'currentcolor',
            }),
            Object(K.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M26.6384 19.305C27.1902 18.755 27.7659 18.1775 28.3434 17.6C30.7707 15.1727 34.7069 15.1727 37.1342 17.6C37.1342 17.6018 37.136 17.6037 37.1379 17.6055C39.5652 20.0328 39.5652 23.9672 37.1379 26.3945C37.136 26.3963 37.1342 26.3982 37.1342 26.4C34.7069 28.8273 30.7707 28.8273 28.3434 26.4C25.6594 23.7142 22.9717 21.0283 22.9717 21.0283C22.4364 20.4912 21.5637 20.4912 21.0284 21.0283C20.4912 21.5637 20.4912 22.4363 21.0284 22.9717C21.0284 22.9717 23.7142 25.6593 26.4 28.3433C29.8999 31.845 35.5777 31.845 39.0775 28.3433C39.0794 28.3415 39.0812 28.3415 39.083 28.3397C42.5829 24.838 42.5829 19.162 39.083 15.6603C39.0812 15.6585 39.0794 15.6585 39.0775 15.6567C35.5777 12.155 29.8999 12.155 26.4 15.6567C25.8225 16.2342 25.245 16.8098 24.695 17.3617C24.1579 17.897 24.1579 18.7697 24.695 19.305C25.2304 19.8422 26.103 19.8422 26.6384 19.305Z',
              fill: 'currentcolor',
            }),
            Object(K.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M22.9718 21.0283C22.9718 21.0283 20.2859 18.3407 17.6001 15.6567C14.1003 12.155 8.42244 12.155 4.92261 15.6567L4.91711 15.6603C1.41728 19.162 1.41728 24.838 4.91711 28.3397L4.92261 28.3433C8.42244 31.845 14.1003 31.845 17.6001 28.3433C18.1776 27.7658 18.7551 27.1902 19.3051 26.6383C19.8423 26.103 19.8423 25.2303 19.3051 24.695C18.7698 24.1578 17.8971 24.1578 17.3618 24.695C16.8099 25.245 16.2343 25.8225 15.6568 26.4C13.2294 28.8273 9.29328 28.8273 6.86594 26.4L6.86228 26.3945C4.43494 23.9672 4.43494 20.0328 6.86228 17.6055L6.86594 17.6C9.29328 15.1727 13.2294 15.1727 15.6568 17.6C18.3408 20.2858 21.0284 22.9717 21.0284 22.9717C21.5638 23.5088 22.4364 23.5088 22.9718 22.9717C23.5089 22.4363 23.5089 21.5637 22.9718 21.0283Z',
              fill: 'currentcolor',
              filter: 'blur(2px)',
            }),
            Object(K.jsx)('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M26.6384 19.305C27.1902 18.755 27.7659 18.1775 28.3434 17.6C30.7707 15.1727 34.7069 15.1727 37.1342 17.6C37.1342 17.6018 37.136 17.6037 37.1379 17.6055C39.5652 20.0328 39.5652 23.9672 37.1379 26.3945C37.136 26.3963 37.1342 26.3982 37.1342 26.4C34.7069 28.8273 30.7707 28.8273 28.3434 26.4C25.6594 23.7142 22.9717 21.0283 22.9717 21.0283C22.4364 20.4912 21.5637 20.4912 21.0284 21.0283C20.4912 21.5637 20.4912 22.4363 21.0284 22.9717C21.0284 22.9717 23.7142 25.6593 26.4 28.3433C29.8999 31.845 35.5777 31.845 39.0775 28.3433C39.0794 28.3415 39.0812 28.3415 39.083 28.3397C42.5829 24.838 42.5829 19.162 39.083 15.6603C39.0812 15.6585 39.0794 15.6585 39.0775 15.6567C35.5777 12.155 29.8999 12.155 26.4 15.6567C25.8225 16.2342 25.245 16.8098 24.695 17.3617C24.1579 17.897 24.1579 18.7697 24.695 19.305C25.2304 19.8422 26.103 19.8422 26.6384 19.305Z',
              fill: 'currentcolor',
              filter: 'blur(2px)',
            }),
          ],
        })
      }
      var Yt,
        Kt = p.default.div.withConfig({ displayName: 'ApprovalModal__Wrapper', componentId: 'sc-8d6g40-0' })([
          'padding:20px;width:100%;',
        ]),
        $t = p.default.div.withConfig({ displayName: 'ApprovalModal__OptionWrapper', componentId: 'sc-8d6g40-1' })(
          [
            'padding:16px;border-radius:20px;border:1px solid ',
            ';display:flex;align-items:center;gap:12px;color:',
            ';cursor:pointer;transition:all 0.1s ease;',
            ';',
          ],
          e => e.theme.border,
          e => e.theme.subText,
          e => {
            var t = e.active,
              n = e.theme
            return t
              ? Object(p.css)(
                  [
                    'color:',
                    ';border-color:',
                    ';background-color:',
                    ';box-shadow:0 2px 4px 0 ',
                    ';transform:translateY(-2px);filter:brightness(1.2);svg{color:',
                    ';}',
                  ],
                  n.text,
                  n.primary,
                  n.primary + '30',
                  n.buttonBlack,
                  n.primary,
                )
              : Object(p.css)([':hover{filter:brightness(1.3);}'])
          },
        ),
        Zt = p.default.div.withConfig({ displayName: 'ApprovalModal__CloseButton', componentId: 'sc-8d6g40-2' })([
          'svg{display:block;}:hover{filter:brightness(0.8);}',
        ]),
        Xt = p.default.div.withConfig({ displayName: 'ApprovalModal__InputWrapper', componentId: 'sc-8d6g40-3' })(
          [
            'padding:10px 12px;font-size:12px;line-height:16px;height:36px;display:flex;align-items:center;border-radius:22px;background-color:',
            ';gap:4px;',
          ],
          e => e.theme.buttonBlack,
        )
      !(function (e) {
        ;(e[(e.Infinite = 0)] = 'Infinite'), (e[(e.Custom = 1)] = 'Custom'), (e[(e.Permit = 2)] = 'Permit')
      })(Yt || (Yt = {}))
      var Qt,
        Jt,
        en = e => {
          var t = e.typedValue,
            n = e.currencyInput,
            s = e.onApprove,
            i = (e.onPermit, Object(R.a)()),
            a = Object(c.useState)(Yt.Infinite),
            d = Object(r.a)(a, 2),
            l = d[0],
            u = d[1],
            p = Object(c.useState)(t || '1'),
            j = Object(r.a)(p, 2),
            m = j[0],
            O = j[1],
            f = Object(Rt.h)(Gt.a.SWAP_APPROVAL),
            g = Object(Rt.d)(Gt.a.SWAP_APPROVAL),
            v = Object(nt.c)().mixpanelHandler
          Object(c.useEffect)(() => {
            O(t || '1')
          }, [t])
          var y = l === Yt.Infinite || (t && t <= m)
          return Object(K.jsx)(qe.a, {
            isOpen: f,
            onDismiss: g,
            children: Object(K.jsxs)(Kt, {
              onKeyDown: e => {
                'Tab' === e.key &&
                  (e.stopPropagation(), e.preventDefault(), u(e => (e === Yt.Infinite ? Yt.Custom : Yt.Infinite)))
              },
              children: [
                Object(K.jsxs)(h.b, {
                  marginBottom: '16px',
                  children: [
                    Object(K.jsx)(b.e, {
                      fontSize: '20px',
                      lineHeight: '24px',
                      children: Object(K.jsx)(o.b, { id: 'Approve' }),
                    }),
                    Object(K.jsx)(Zt, { onClick: g, children: Object(K.jsx)(Ze.a, { style: { cursor: 'pointer' } }) }),
                  ],
                }),
                Object(K.jsxs)(x.c, {
                  gap: '12px',
                  style: { marginBottom: '20px' },
                  children: [
                    Object(K.jsx)(b.e, {
                      fontSize: '12px',
                      lineHeight: '16px',
                      color: i.subText,
                      children: Object(K.jsx)(o.b, {
                        id: 'Choose between Infinite or Custom allowance. <0>Read more \u2197</0>',
                        components: {
                          0: Object(K.jsx)('a', {
                            href: '#',
                            target: '_blank',
                            rel: 'noreferrer',
                          }),
                        },
                      }),
                    }),
                    Object(K.jsxs)($t, {
                      active: l === Yt.Infinite,
                      onClick: () => u(Yt.Infinite),
                      children: [
                        Object(K.jsx)(h.c, { flex: '0 0 48px', children: Object(K.jsx)(Vt, {}) }),
                        Object(K.jsx)(q.a, {
                          text: fe.a._(
                            'You wish to give PunkSwap permission to use the selected token for transactions without any limit. You do not need to give permission again unless you have revoked it. This approve transaction will cost a gas fee',
                          ),
                          placement: 'right',
                          children: Object(K.jsx)(b.e, {
                            fontSize: '16px',
                            lineHeight: '20px',
                            fontWeight: 500,
                            style: { textDecoration: 'underline 1px dotted', textUnderlineOffset: '4px' },
                            children: Object(K.jsx)(o.b, { id: 'Infinite Allowance' }),
                          }),
                        }),
                      ],
                    }),
                    Object(K.jsxs)($t, {
                      active: l === Yt.Custom,
                      onClick: () => u(Yt.Custom),
                      children: [
                        Object(K.jsx)(h.c, { flex: '0 0 48px', children: Object(K.jsx)(qt, {}) }),
                        Object(K.jsxs)(x.c, {
                          gap: '8px',
                          flex: '0 1 200px',
                          children: [
                            Object(K.jsx)(q.a, {
                              text: fe.a._(
                                'You wish to give PunkSwap permission to use up to the selected custom token\namount for transactions. Subsequent transactions exceeding this amount will require your permission again. This will cost gas fees',
                              ),
                              placement: 'right',
                              children: Object(K.jsx)(b.e, {
                                fontSize: '16px',
                                lineHeight: '20px',
                                fontWeight: 500,
                                style: {
                                  textDecoration: 'underline 1px dotted',
                                  textUnderlineOffset: '4px',
                                  alignSelf: 'flex-start',
                                },
                                children: Object(K.jsx)(o.b, { id: 'Custom Allowance' }),
                              }),
                            }),
                            Object(K.jsxs)(Xt, {
                              children: [
                                Object(K.jsx)(Ht.b, {
                                  value: m,
                                  onUserInput: e => {
                                    O(e)
                                  },
                                  style: { fontSize: '14px' },
                                }),
                                Object(K.jsx)(zt.a, { currency: n, size: '16px' }),
                                Object(K.jsx)(b.e, {
                                  color: i.subText,
                                  fontSize: '14px',
                                  children: null === n || void 0 === n ? void 0 : n.symbol,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                Object(K.jsx)(Fe.j, {
                  onClick: () => {
                    y &&
                      (null === s ||
                        void 0 === s ||
                        s(
                          l === Yt.Infinite
                            ? Ut.b
                            : Object(St.parseUnits)(m, null === n || void 0 === n ? void 0 : n.decimals),
                        ),
                      v(l === Yt.Infinite ? nt.a.INFINITE_APPROVE_CLICK : nt.a.CUSTOM_APPROVE_CLICK),
                      g())
                  },
                  disabled: !y,
                  children: Object(K.jsx)(o.b, { id: 'Approve' }),
                }),
              ],
            }),
          })
        },
        tn = d.a.memo(en),
        nn = Object(p.default)(Fe.j)
          .attrs({ id: 'swap-button' })
          .withConfig({ displayName: 'SwapActionButton__CustomPrimaryButton', componentId: 'sc-1c55aoo-0' })([
          'border:none;font-weight:500;&:disabled{border:none;}',
        ]),
        rn = e => {
          var t = e.isDegenMode,
            n = e.isGettingRoute,
            s = e.isProcessingSwap,
            i = e.typedValue,
            a = e.parsedAmountFromTypedValue,
            d = e.routeSummary,
            l = e.currencyIn,
            u = e.currencyOut,
            b = e.balanceIn,
            p = e.balanceOut,
            j = e.swapInputError,
            m = e.wrapInputError,
            O = e.wrapType,
            f = e.setProcessingSwap,
            g = e.onWrap,
            v = e.buildRoute,
            y = Object(R.a)(),
            w = Object(P.b)(),
            k = w.account,
            C = w.walletKey,
            _ = Object(nt.c)().mixpanelHandler,
            T = Object(c.useState)(''),
            I = Object(r.a)(T, 2),
            S = I[0],
            A = I[1],
            E = d && !d.route,
            L = Object(Rt.x)(),
            D = O !== je.a.NOT_APPLICABLE,
            M = Boolean(l && u && a && !a.equalTo(0)),
            W = Object(Tt.b)(a, null === d || void 0 === d ? void 0 : d.routerAddress),
            F = Object(r.a)(W, 3),
            B = F[0],
            U = F[1],
            G = F[2],
            q = Object(c.useState)(!1),
            V = Object(r.a)(q, 2),
            Y = V[0],
            $ = V[1],
            Z = ((e, t) => {
              var n,
                r = null === e || void 0 === e ? void 0 : e.currency.wrapped,
                s = Object(P.b)(),
                o = s.account,
                i = s.chainId,
                a = Object(P.e)().library,
                d = Object(Ge.d)(),
                l = Object(Rt.k)(),
                u = Object(Ft.c)(null === r || void 0 === r ? void 0 : r.address, Nt, !1),
                b = Object(Wt.c)(u, 'nonces', [o]),
                p = Object(Bt.a)(),
                j = Object(re.j)(null === r || void 0 === r ? void 0 : r.address),
                m = Object(nt.c)().mixpanelHandler,
                x = r && (null === (n = Pt[i]) || void 0 === n ? void 0 : n[r.address]),
                h = Object(c.useMemo)(
                  () =>
                    x
                      ? void 0 !== (null === j || void 0 === j ? void 0 : j.errorCount) &&
                        (null === j || void 0 === j ? void 0 : j.errorCount) >= 3
                        ? Lt.NOT_APPLICABLE
                        : j &&
                          j.rawSignature &&
                          p &&
                          j.deadline &&
                          j.deadline >= (null === p || void 0 === p ? void 0 : p.toNumber()) &&
                          void 0 !== j.value &&
                          null !== e &&
                          void 0 !== e &&
                          e.equalTo(j.value)
                        ? Lt.SIGNED
                        : Lt.NOT_SIGNED
                      : Lt.NOT_APPLICABLE,
                  [j, p, e, x],
                ),
                O = Object(At.a)(null === j || void 0 === j ? void 0 : j.errorCount)
              Object(c.useEffect)(() => {
                2 === O &&
                  3 === (null === j || void 0 === j ? void 0 : j.errorCount) &&
                  (l(
                    {
                      type: Et.a.ERROR,
                      title: fe.a._('Permit Error'),
                      summary: fe.a._(
                        'An error occurred while attempting to authorize this token. Please approve it normally instead.',
                      ),
                    },
                    1e4,
                  ),
                  r && m(nt.a.PERMIT_FAILED_TOO_MANY_TIMES, { symbol: r.symbol, address: r.address }))
              }, [null === j || void 0 === j ? void 0 : j.errorCount, l, m, r, O])
              var f = Object(c.useCallback)(
                Object(H.a)(
                  Object(z.a)().mark(function n() {
                    var s, c, l, u, j, m
                    return Object(z.a)().wrap(
                      function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              if (
                                a &&
                                t &&
                                p &&
                                r &&
                                o &&
                                x &&
                                null !== b &&
                                void 0 !== b &&
                                null !== (s = b.result) &&
                                void 0 !== s &&
                                s[0]
                              ) {
                                n.next = 2
                                break
                              }
                              return n.abrupt('return')
                            case 2:
                              if (h === Lt.NOT_SIGNED) {
                                n.next = 4
                                break
                              }
                              return n.abrupt('return')
                            case 4:
                              return (
                                (c = p.toNumber() + 86400),
                                (l = {
                                  owner: o,
                                  spender: t,
                                  value: Object(St.parseUnits)(e.toExact(), r.decimals).toString(),
                                  nonce: b.result[0].toNumber(),
                                  deadline: c,
                                }),
                                (u = JSON.stringify({
                                  types: {
                                    EIP712Domain: x && x.type === ht.SALT ? Mt : Dt,
                                    Permit: [
                                      { name: 'owner', type: 'address' },
                                      { name: 'spender', type: 'address' },
                                      { name: 'value', type: 'uint256' },
                                      { name: 'nonce', type: 'uint256' },
                                      { name: 'deadline', type: 'uint256' },
                                    ],
                                  },
                                  domain:
                                    x && x.type === ht.SALT
                                      ? {
                                          name: r.name,
                                          verifyingContract: r.address,
                                          salt: Object(St.hexZeroPad)(Object(St.hexlify)(i), 32),
                                          version: '1',
                                        }
                                      : { name: r.name, verifyingContract: r.address, version: '1', chainId: i },
                                  primaryType: 'Permit',
                                  message: l,
                                })),
                                (n.prev = 7),
                                (n.next = 10),
                                a
                                  .send('eth_signTypedData_v4', [o.toLowerCase(), u])
                                  .then(e => Object(It.splitSignature)(e))
                              )
                            case 10:
                              ;(j = n.sent),
                                (m = St.defaultAbiCoder.encode(
                                  ['address', 'address', 'uint256', 'uint256', 'uint8', 'bytes32', 'bytes32'],
                                  [l.owner, l.spender, l.value, l.deadline, j.v, j.r, j.s],
                                )),
                                d(
                                  Object(Ye.e)({
                                    chainId: i,
                                    address: r.address,
                                    rawSignature: m,
                                    deadline: l.deadline,
                                    value: l.value,
                                    account: o,
                                  }),
                                ),
                                (n.next = 18)
                              break
                            case 15:
                              ;(n.prev = 15), (n.t0 = n.catch(7)), console.log(n.t0)
                            case 18:
                            case 'end':
                              return n.stop()
                          }
                      },
                      n,
                      null,
                      [[7, 15]],
                    )
                  }),
                ),
                [o, i, a, h, t, r, e, p, d, b.result, x],
              )
              return { permitState: h, permitCallback: f, permitData: j }
            })(a, null === d || void 0 === d ? void 0 : d.routerAddress),
            X = Z.permitState,
            Q = Z.permitCallback
          Object(c.useEffect)(() => {
            B === Tt.a.PENDING && $(!0), B === Tt.a.NOT_APPROVED && $(!1)
          }, [B, Y]),
            Object(c.useEffect)(() => {
              s || $(!1)
            }, [l, i, s])
          var J =
              !j && (B === Tt.a.NOT_APPROVED || B === Tt.a.PENDING || (Y && B === Tt.a.APPROVED)) && X !== Lt.SIGNED,
            ee = Object(Rt.r)(Gt.a.SWAP_APPROVAL),
            te = () => {
              C && ['METAMASK', 'TRUST_WALLET'].includes(null === C || void 0 === C ? void 0 : C.toString())
                ? U()
                : ee()
            },
            ne = () => {
              if (G && +(null === G || void 0 === G ? void 0 : G.toExact()) > 0) {
                if (C && 'METAMASK' === (null === C || void 0 === C ? void 0 : C.toString()))
                  return Object(K.jsx)(o.b, {
                    id: 'Approve <0>{0}</0> requires to be more than <1>{1} {2}</1>, find out more <2>here</2>',
                    values: {
                      0: null === l || void 0 === l ? void 0 : l.symbol,
                      1: G.toExact(),
                      2: null === l || void 0 === l ? void 0 : l.symbol,
                    },
                    components: {
                      0: Object(K.jsx)('b', {}),
                      1: Object(K.jsx)('b', {}),
                      2: Object(K.jsx)('a', {
                        href: 'https://support.metamask.io/hc/en-us/articles/6055177143579-How-to-customize-token-approvals-with-a-spending-cap',
                        target: '_blank',
                        rel: 'noreferrer',
                      }),
                    },
                  })
                if (C && 'TRUST_WALLET' === (null === C || void 0 === C ? void 0 : C.toString()))
                  return Object(K.jsx)(o.b, {
                    id: 'Approve <0>{0}</0> requires to be more than <1>{1} {2}</1>, find out more <2>here</2>',
                    values: {
                      0: null === l || void 0 === l ? void 0 : l.symbol,
                      1: G.toExact(),
                      2: null === l || void 0 === l ? void 0 : l.symbol,
                    },
                    components: {
                      0: Object(K.jsx)('b', {}),
                      1: Object(K.jsx)('b', {}),
                      2: Object(K.jsx)('a', {
                        href: 'https://community.trustwallet.com/t/what-is-token-approval/242764',
                        target: '_blank',
                        rel: 'noreferrer',
                      }),
                    },
                  })
              }
              return Object(K.jsx)(o.b, {
                id: "You need to first allow PunkSwap's smart contract to use your {0}. <0>Read more \u2197</0>",
                values: { 0: null === l || void 0 === l ? void 0 : l.symbol },
                components: {
                  0: Object(K.jsx)('a', {
                    href: '#',
                    target: '_blank',
                    rel: 'noreferrer',
                  }),
                },
              })
            }
          return (
            Object(c.useEffect)(() => {
              A('')
            }, [i]),
            Object(K.jsxs)(K.Fragment, {
              children: [
                (() => {
                  if (!k)
                    return Object(K.jsx)(Fe.h, { onClick: L, children: Object(K.jsx)(o.b, { id: 'Connect Wallet' }) })
                  if (m) return Object(K.jsx)(nn, { disabled: !0, children: m })
                  if (D)
                    return Object(K.jsx)(nn, {
                      onClick: g,
                      children:
                        O === je.a.WRAP ? Object(K.jsx)(o.b, { id: 'Wrap' }) : Object(K.jsx)(o.b, { id: 'Unwrap' }),
                    })
                  if (M && E)
                    return Object(K.jsx)(nn, {
                      disabled: !0,
                      children: Object(K.jsx)(o.b, { id: 'Insufficient liquidity for this trade' }),
                    })
                  if (j) return Object(K.jsx)(nn, { disabled: !0, children: j })
                  var e = {
                    isDegenMode: t,
                    routeSummary: d,
                    isGettingRoute: n,
                    isProcessingSwap: s,
                    currencyIn: l,
                    currencyOut: u,
                    balanceIn: b,
                    balanceOut: p,
                    parsedAmount: a,
                    isPermitSwap: X === Lt.SIGNED,
                    setProcessingSwap: f,
                    setErrorWhileSwap: A,
                    buildRoute: v,
                    isApproved: B === Tt.a.APPROVED || X === Lt.SIGNED,
                  }
                  return J
                    ? Object(K.jsxs)(K.Fragment, {
                        children: [
                          Object(K.jsxs)(h.b, {
                            gap: '12px',
                            children: [
                              X === Lt.NOT_APPLICABLE
                                ? Object(K.jsx)(Fe.b, {
                                    onClick: te,
                                    disabled: B !== Tt.a.NOT_APPROVED || Y,
                                    altDisabledStyle: B === Tt.a.PENDING,
                                    confirmed: B === Tt.a.APPROVED,
                                    style: { border: 'none', flex: 1 },
                                    children:
                                      B === Tt.a.PENDING
                                        ? Object(K.jsxs)(h.a, {
                                            gap: '6px',
                                            justify: 'center',
                                            children: [
                                              Object(K.jsx)(o.b, { id: 'Approving' }),
                                              ' ',
                                              Object(K.jsx)(Ue.a, { stroke: 'white' }),
                                            ],
                                          })
                                        : Y && B === Tt.a.APPROVED
                                        ? Object(K.jsx)(o.b, { id: 'Approved' })
                                        : Object(K.jsxs)(h.c, {
                                            gap: '4px',
                                            children: [
                                              Object(K.jsx)(Be.a, {
                                                color: y.textReverse,
                                                placement: 'top',
                                                text: ne(),
                                              }),
                                              Object(K.jsx)(o.b, {
                                                id: 'Approve {0}',
                                                values: { 0: null === l || void 0 === l ? void 0 : l.symbol },
                                              }),
                                            ],
                                          }),
                                  })
                                : Object(K.jsx)(Fe.b, {
                                    onClick: () => {
                                      _(nt.a.PERMIT_CLICK), Q()
                                    },
                                    style: { flex: 1 },
                                    children: Object(K.jsxs)(h.c, {
                                      gap: '4px',
                                      children: [
                                        Object(K.jsx)(Be.a, {
                                          color: y.textReverse,
                                          placement: 'top',
                                          text: Object(K.jsx)(o.b, {
                                            id: 'You need to first give a temporary 24H approval to PunkSwaps smart contract to use your {0}. This doesnt require a gas fees. <0>Read more \u2197</0>',
                                            values: { 0: null === l || void 0 === l ? void 0 : l.symbol },
                                            components: {
                                              0: Object(K.jsx)('a', {
                                                href: '#',
                                                target: '_blank',
                                                rel: 'noreferrer',
                                              }),
                                            },
                                          }),
                                        }),
                                        Object(K.jsx)(o.b, {
                                          id: 'Permit {0}',
                                          values: { 0: null === l || void 0 === l ? void 0 : l.symbol },
                                        }),
                                      ],
                                    }),
                                  }),
                              Object(K.jsx)(_t, Object(ce.a)({ minimal: !0 }, e)),
                            ],
                          }),
                          Object(K.jsx)(x.c, { children: Object(K.jsx)(ze.a, { steps: [B === Tt.a.APPROVED] }) }),
                        ],
                      })
                    : Object(K.jsx)(_t, Object(ce.a)({}, e))
                })(),
                t && S ? Object(K.jsx)(N.o, { style: { margin: 0, zIndex: 'unset' }, error: S }) : null,
                Object(K.jsx)(tn, { typedValue: i, currencyInput: l, onApprove: U }),
              ],
            })
          )
        },
        sn = n('./node_modules/@svgr/webpack/lib/index.js?-svgo,+titleProp,+ref!./src/assets/svg/down.svg'),
        on = n('./src/components/Divider/index.tsx'),
        an = p.default.div.withConfig({ displayName: 'TradeSummary__IconWrapper', componentId: 'sc-1qacajt-0' })(
          ['transform:rotate(', ');transition:transform 300ms;'],
          e => (e.$flip ? '-180deg' : '0deg'),
        ),
        cn = Object(p.default)(x.a).withConfig({
          displayName: 'TradeSummary__ContentWrapper',
          componentId: 'sc-1qacajt-1',
        })(
          ['max-height:', ';margin-top:', ';transition:margin-top 300ms ease,height 300ms ease;overflow:hidden;'],
          e => (e.$expanded ? '500px' : 0),
          e => (e.$expanded ? '12px' : 0),
        ),
        dn = p.default.div
          .attrs(e => ({ 'data-visible': e.$visible, 'data-disabled': e.$disabled }))
          .withConfig({ displayName: 'TradeSummary__Wrapper', componentId: 'sc-1qacajt-2' })(
          [
            'display:none;padding:0;width:100%;max-width:425px;border-radius:16px;background-color:',
            ";max-height:0;border:1px solid #52ccad;transition:height 300ms ease-in-out,transform 300ms;border:1px solid #52ccad;overflow:hidden;&[data-visible='true']{display:block;padding:12px 12px;max-height:max-content;color:",
            ";}&[data-disabled='true']{color:",
            ';}',
          ],
          e => e.theme.buttonBlack,
          e => e.theme.text,
          e => e.theme.subText,
        ),
        ln = e => {
          var t = e.feeConfig,
            n = e.routeSummary,
            s = e.slippage,
            i = Object(R.a)(),
            a = Object(c.useState)(!0),
            d = Object(r.a)(a, 2),
            l = d[0],
            u = d[1],
            p = Object(c.useState)(!1),
            j = Object(r.a)(p, 2),
            m = j[0],
            O = j[1],
            f = n || {},
            g = f.amountInUsd,
            v = f.parsedAmountOut,
            y = f.priceImpact,
            w = f.gasUsd,
            k = !(null === n || void 0 === n || !n.route),
            C = Object(ot.a)(y),
            _ = g ? Object(lt.b)(Number(g), null === t || void 0 === t ? void 0 : t.feeAmount) : 0,
            T = v ? Object(st.a)(v, s) : void 0,
            I = null === v || void 0 === v ? void 0 : v.currency,
            S =
              T && I
                ? Object(K.jsxs)(b.e, {
                    as: 'span',
                    sx: { color: i.text, fontWeight: '500', whiteSpace: 'nowrap' },
                    children: [Object(Y.i)(T.toSignificant(10), !1, 10), ' ', I.symbol],
                  })
                : '',
            A = Object(nt.c)().mixpanelHandler
          return (
            Object(c.useEffect)(() => {
              k && O(!0)
            }, [k]),
            Object(K.jsx)(dn, {
              $visible: m,
              $disabled: !k,
              children: Object(K.jsxs)(x.a, {
                children: [
                  Object(K.jsxs)(h.b, {
                    style: { cursor: 'pointer' },
                    onClick: () => {
                      u(e => !e), A(nt.a.SWAP_MORE_INFO_CLICK, { option: l ? 'Close' : 'Open' })
                    },
                    role: 'button',
                    children: [
                      Object(K.jsx)(b.e, {
                        fontSize: 12,
                        fontWeight: 500,
                        color: i.text,
                        children: Object(K.jsx)(o.b, { id: 'MORE INFORMATION' }),
                      }),
                      Object(K.jsx)(an, { $flip: l, children: Object(K.jsx)(sn.a, { color: i.text }) }),
                    ],
                  }),
                  Object(K.jsxs)(cn, {
                    $expanded: l,
                    gap: '0.75rem',
                    children: [
                      Object(K.jsx)(on.a, {}),
                      Object(K.jsxs)(h.b, {
                        children: [
                          Object(K.jsx)(h.d, {
                            children: Object(K.jsx)(q.c, {
                              fontSize: 12,
                              fontWeight: 400,
                              color: i.subText,
                              children: Object(K.jsx)(q.a, {
                                width: '200px',
                                text: Object(K.jsx)(o.b, {
                                  id: 'You will receive at least this amount or your transaction will revert',
                                }),
                                placement: 'right',
                                children: Object(K.jsx)(o.b, { id: 'Minimum Received' }),
                              }),
                            }),
                          }),
                          Object(K.jsx)(h.d, {
                            children: Object(K.jsx)(se.k.black, { color: i.text, fontSize: 12, children: S || '--' }),
                          }),
                        ],
                      }),
                      Object(K.jsxs)(h.b, {
                        children: [
                          Object(K.jsx)(h.d, {
                            children: Object(K.jsx)(q.c, {
                              fontSize: 12,
                              fontWeight: 400,
                              color: i.subText,
                              children: Object(K.jsx)(q.a, {
                                text: Object(K.jsx)(o.b, { id: 'Estimated network fee for your transaction' }),
                                placement: 'right',
                                children: Object(K.jsx)(o.b, { id: 'Est. Gas Fee' }),
                              }),
                            }),
                          }),
                          Object(K.jsx)(se.k.black, {
                            color: i.text,
                            fontSize: 12,
                            children: w ? Object(Y.i)(w, !0) : '--',
                          }),
                        ],
                      }),
                      Object(K.jsxs)(h.b, {
                        children: [
                          Object(K.jsx)(h.d, {
                            children: Object(K.jsx)(q.c, {
                              fontSize: 12,
                              fontWeight: 400,
                              color: i.subText,
                              children: Object(K.jsx)(q.a, {
                                text: Object(K.jsxs)('div', {
                                  children: [
                                    Object(K.jsx)(o.b, {
                                      id: 'Estimated change in price due to the size of your transaction.',
                                    }),
                                    Object(K.jsx)(o.b, {
                                      id: '<0>Read more <1><2>here \u2197</2></1></0>',
                                      components: {
                                        0: Object(K.jsx)(b.e, { fontSize: 12 }),
                                        1: Object(K.jsx)('a', { href: '/', target: '_blank', rel: 'noreferrer' }),
                                        2: Object(K.jsx)('b', {}),
                                      },
                                    }),
                                  ],
                                }),
                                placement: 'right',
                                children: Object(K.jsx)(o.b, { id: 'Price Impact' }),
                              }),
                            }),
                          }),
                          Object(K.jsx)(se.k.black, {
                            fontSize: 12,
                            color: C.isVeryHigh ? i.red : C.isHigh ? i.warning : i.text,
                            children: C.isInvalid || 'number' !== typeof y ? '--' : Object(ot.e)(y),
                          }),
                        ],
                      }),
                      t &&
                        Object(K.jsxs)(h.b, {
                          children: [
                            Object(K.jsxs)(h.d, {
                              children: [
                                Object(K.jsx)(se.k.black, {
                                  fontSize: 12,
                                  fontWeight: 400,
                                  color: i.subText,
                                  children: Object(K.jsx)(o.b, { id: 'Referral Fee' }),
                                }),
                                Object(K.jsx)(Be.a, {
                                  size: 14,
                                  text: fe.a._('Commission fee to be paid directly to your referrer'),
                                }),
                              ],
                            }),
                            Object(K.jsx)(se.k.black, { color: i.text, fontSize: 12, children: _ }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
            })
          )
        },
        un = n('./node_modules/rebass/styled-components/index.js'),
        bn = n('./src/components/Icons/index.ts'),
        pn = p.default.div.withConfig({
          displayName: 'TradeTypeSelection__GroupButtonReturnTypes',
          componentId: 'sc-1b0uypk-0',
        })(
          ['display:flex;border-radius:999px;border:1px solid #52ccad;background:', ';padding:2px;'],
          e => e.theme.tabBackground,
        ),
        jn = p.default.div.withConfig({
          displayName: 'TradeTypeSelection__ButtonReturnType',
          componentId: 'sc-1b0uypk-1',
        })(
          [
            'border-radius:999px;flex:1;padding:8px;display:flex;align-items:center;justify-content:center;background-color:',
            ';color:',
            ';font-size:12px;font-weight:500;cursor:pointer;transition:color 300ms;',
          ],
          e => {
            var t = e.theme
            return e.active ? t.tabActive : t.tabBackground
          },
          e => {
            var t = e.theme
            return e.active ? t.text : t.subText
          },
        ),
        mn = e => {
          var t = e.isSaveGas,
            n = e.setSaveGas,
            r = Object(P.b)().isSolana
          return (
            Object(c.useEffect)(() => {
              r && n(!1)
            }, [r, n]),
            r
              ? null
              : Object(K.jsxs)(pn, {
                  children: [
                    Object(K.jsxs)(jn, {
                      onClick: () => n(!1),
                      active: !t,
                      role: 'button',
                      children: [
                        Object(K.jsx)(bn.k, {}),
                        Object(K.jsx)(un.Text, {
                          marginLeft: '4px',
                          children: Object(K.jsx)(o.b, { id: 'Maximum Return' }),
                        }),
                      ],
                    }),
                    Object(K.jsxs)(jn, {
                      onClick: () => n(!0),
                      active: t,
                      role: 'button',
                      children: [
                        Object(K.jsx)(bn.f, {}),
                        Object(K.jsx)(un.Text, {
                          marginLeft: '4px',
                          children: Object(K.jsx)(o.b, { id: 'Lowest Gas' }),
                        }),
                      ],
                    }),
                  ],
                })
          )
        },
        xn = e => {
          var t,
            n = e.hidden,
            s = e.currencyIn,
            o = e.currencyOut,
            i = e.balanceIn,
            a = e.balanceOut,
            d = e.setRouteSummary,
            l = e.isAdvancedMode,
            u = e.slippage,
            p = e.feeConfig,
            j = e.transactionTimeout,
            m = e.onChangeCurrencyIn,
            x = e.onChangeCurrencyOut,
            O = Object(P.b)(),
            f = O.isEVM,
            g = O.isSolana,
            v = Object(c.useState)(!1),
            y = Object(r.a)(v, 2),
            k = y[0],
            C = y[1],
            _ = Object(c.useState)('1'),
            T = Object(r.a)(_, 2),
            I = T[0],
            S = T[1],
            A = Object(c.useState)(null),
            E = Object(r.a)(A, 2),
            L = E[0],
            D = E[1],
            M = Object(c.useState)(!1),
            R = Object(r.a)(M, 2),
            W = R[0],
            F = R[1],
            B = Se(s, I),
            U = Object(je.b)(s, o, I),
            z = U.wrapType,
            H = U.inputError,
            G = U.execute,
            q = z !== je.a.NOT_APPLICABLE,
            V = Ce(s, o),
            Y = Object(Ie.a)({ currencyIn: s, currencyOut: o, feeConfig: p, isSaveGas: W, parsedAmount: B }),
            $ = Y.fetcher,
            Z = Y.result,
            X = Z.data,
            Q = Z.isFetching,
            J = Z.error,
            ee = Object(c.useMemo)(() => {
              if (null !== X && void 0 !== X && X.data && !J && s && o) return Object(de.b)(X.data, s, o)
            }, [s, o, J, X]),
            te = null === ee || void 0 === ee ? void 0 : ee.routeSummary,
            ne = we({
              recipient: l && L ? L : '',
              routeSummary:
                (null === X || void 0 === X || null === (t = X.data) || void 0 === t ? void 0 : t.routeSummary) ||
                void 0,
              slippage: u,
              transactionTimeout: j,
            }),
            re = Te({
              currencyIn: s,
              currencyOut: o,
              typedValue: I,
              recipient: L,
              balanceIn: i,
              parsedAmountFromTypedValue: B,
            }),
            se = e => {
              d(void 0), x(e)
            },
            oe = g && z === je.a.UNWRAP
          return (
            Object(c.useEffect)(() => {
              var e
              oe && S(null !== (e = null === i || void 0 === i ? void 0 : i.toExact()) && void 0 !== e ? e : '')
            }, [i, oe]),
            Object(c.useEffect)(() => {
              d(te)
            }, [te, d]),
            Object(K.jsx)(pe.a, {
              feeConfig: p,
              slippage: u,
              routeSummary: te,
              typedValue: I,
              isSaveGas: W,
              recipient: L,
              isStablePairSwap: V,
              isAdvancedMode: l,
              children: Object(K.jsxs)(b.a, {
                sx: { flexDirection: 'column', gap: '16px', display: n ? 'none' : 'flex' },
                children: [
                  Object(K.jsx)(N.v, {
                    id: w.b.SWAP_FORM_CONTENT,
                    children: Object(K.jsxs)(b.b, {
                      flexDirection: 'column',
                      sx: { gap: '0.75rem' },
                      children: [
                        Object(K.jsx)(xe, {
                          wrapType: z,
                          typedValue: I,
                          setTypedValue: S,
                          currencyIn: s,
                          currencyOut: o,
                          balanceIn: i,
                          onChangeCurrencyIn: e => {
                            d(void 0), m(e)
                          },
                        }),
                        Object(K.jsxs)(h.a, {
                          justify: 'space-between',
                          children: [
                            Object(K.jsx)(b.b, {
                              alignItems: 'center',
                              children:
                                !q &&
                                Object(K.jsxs)(K.Fragment, {
                                  children: [
                                    Object(K.jsx)(Me, { shouldDisable: !B || B.equalTo(0) || k, callback: $ }),
                                    Object(K.jsx)(Ee.a, {
                                      price: null === te || void 0 === te ? void 0 : te.executionPrice,
                                    }),
                                  ],
                                }),
                            }),
                            Object(K.jsx)(We, { onClick: () => s && se(s) }),
                          ],
                        }),
                        Object(K.jsx)(he.b, {
                          wrapType: z,
                          parsedAmountIn: B,
                          parsedAmountOut: null === te || void 0 === te ? void 0 : te.parsedAmountOut,
                          currencyIn: s,
                          currencyOut: o,
                          amountOutUsd: null === te || void 0 === te ? void 0 : te.amountOutUsd,
                          onChangeCurrencyOut: se,
                        }),
                        l && f && !q && Object(K.jsx)(le.b, { id: 'recipient', value: L, onChange: D }),
                        !q && Object(K.jsx)(Oe.a, { isStablePairSwap: V }),
                      ],
                    }),
                  }),
                  Object(K.jsxs)(b.b, {
                    flexDirection: 'column',
                    style: { gap: '1.25rem' },
                    children: [
                      Object(K.jsx)(mn, { isSaveGas: W, setSaveGas: F }),
                      Object(K.jsx)(Ae.a, { currencyIn: s, currencyOut: o }),
                      !q && Object(K.jsx)(ue.b, { rawSlippage: u, isStablePairSwap: V }),
                      Object(K.jsx)(Ne.a, { priceImpact: null === te || void 0 === te ? void 0 : te.priceImpact }),
                      Object(K.jsx)(rn, {
                        isGettingRoute: Q,
                        parsedAmountFromTypedValue: B,
                        balanceIn: i,
                        balanceOut: a,
                        typedValue: I,
                        currencyIn: s,
                        currencyOut: o,
                        wrapInputError: H,
                        wrapType: z,
                        routeSummary: te,
                        isProcessingSwap: k,
                        setProcessingSwap: C,
                        onWrap: G,
                        buildRoute: ne,
                        swapInputError: re,
                        isDegenMode: !1,
                      }),
                      !q && Object(K.jsx)(ln, { feeConfig: p, routeSummary: te, slippage: u }),
                    ],
                  }),
                ],
              }),
            })
          )
        },
        hn = n('./src/hooks/useSyncTokenSymbolToUrl.ts'),
        On = n('./src/pages/SwapV3/useUpdateSlippageInStableCoinSwap.tsx'),
        fn = n('./src/state/hooks.ts'),
        gn = n('./src/state/wallet/hooks.ts'),
        vn = (e, t, n) => {
          var r,
            s,
            o = Object(P.b)().chainId,
            i = Object(re.u)(),
            a = Object(At.a)(i),
            d = null === e || void 0 === e || null === (r = e.wrapped) || void 0 === r ? void 0 : r.address,
            l = null === t || void 0 === t || null === (s = t.wrapped) || void 0 === s ? void 0 : s.address
          Object(c.useEffect)(() => {
            if (a && (null === a || void 0 === a ? void 0 : a.length) > i.length && a[0].chainId === o) {
              var e = a.filter(e => !i.find(t => t.address === e.address)).map(e => e.address)
              ;(d && !e.includes(d)) || n(ee.a.INPUT), (l && !e.includes(l)) || n(ee.a.OUTPUT)
            }
          }, [d, l, o, n, a, i])
        },
        yn = e => {
          var t = e.routeSummary,
            n = e.setRouteSummary,
            s = e.goToSettingsView,
            o = e.hidden,
            i = Object(te.f)(),
            a = Object(te.g)(),
            d = Object(fn.b)(e => e.swap.isSelectTokenManually),
            l = Object(gn.c)(
              Object(c.useMemo)(
                () => [null !== i && void 0 !== i ? i : void 0, null !== a && void 0 !== a ? a : void 0],
                [i, a],
              ),
            ),
            u = Object(r.a)(l, 2),
            b = u[0],
            p = u[1],
            j = Object(re.z)(),
            m = Object(r.a)(j, 1)[0],
            x = Object(re.y)(),
            h = Object(r.a)(x, 1)[0],
            O = Object(te.i)().feeConfig,
            f = Object(te.h)(),
            g = f.onUserInput,
            v = f.onCurrencySelection,
            y = f.onResetSelectCurrency
          Object(On.a)()
          var w = Object(c.useCallback)(
            (e, t, n) => {
              e && v(ee.a.INPUT, e), t && v(ee.a.OUTPUT, t), n && g(ee.a.INPUT, n)
            },
            [v, g],
          )
          Object(hn.a)(i, a, w, d), vn(i, a, y)
          var k = Object(c.useCallback)(
              e => {
                v(ee.a.INPUT, e)
              },
              [v],
            ),
            C = Object(c.useCallback)(
              e => {
                v(ee.a.OUTPUT, e)
              },
              [v],
            ),
            _ = {
              hidden: o,
              routeSummary: t,
              setRouteSummary: n,
              currencyIn: i,
              currencyOut: a,
              balanceIn: b,
              balanceOut: p,
              slippage: h,
              feeConfig: O,
              transactionTimeout: m,
              onChangeCurrencyIn: k,
              onChangeCurrencyOut: C,
              goToSettingsView: s,
              isAdvancedMode: !1,
            }
          return Object(K.jsx)(xn, Object(ce.a)({}, _))
        },
        wn = Object(c.lazy)(() => n.e(9).then(n.bind(null, './src/components/TradeRouting.tsx'))),
        kn = Object(c.lazy)(() =>
          Promise.all([n.e(7), n.e(8)]).then(n.bind(null, './src/components/LiveChart/index.tsx')),
        )
      !(function (e) {
        ;(e.SWAP = 'swap'),
          (e.INFO = 'info'),
          (e.SETTINGS = 'settings'),
          (e.GAS_PRICE_TRACKER = 'gas_price_tracker'),
          (e.LIQUIDITY_SOURCES = 'liquidity_sources'),
          (e.LIMIT = 'limit')
      })(Jt || (Jt = {}))
      var Cn = Object(p.default)(W.a).withConfig({ displayName: 'SwapV3__AppBodyWrapped', componentId: 'sc-upb8sq-0' })(
          [
            "box-shadow:0 4px 16px rgba(0,0,0,0.04);padding:16px;margin-top:0;border:1px solid #52ccad;&[data-highlight='true']{animation:",
            ' 2s 2 alternate ease-in-out;}',
          ],
          e =>
            (e =>
              Object(p.keyframes)(
                ['0%{box-shadow:0 0 0 0 ', ';}70%{box-shadow:0 0 0 2px ', ';}100%{box-shadow:0 0 0 0 ', ';}'],
                e.primary,
                e.primary,
                e.primary,
              ))(e.theme),
        ),
        _n = p.default.div.withConfig({ displayName: 'SwapV3__SwitchLocaleLinkWrapper', componentId: 'sc-upb8sq-1' })(
          ['margin-bottom:30px;', ''],
          e => e.theme.mediaWidth.upToMedium(Qt || (Qt = Object(s.a)(['\n  margin-bottom: 0px;\n']))),
        ),
        Tn = Object(p.default)(j.a).withConfig({
          displayName: 'SwapV3__RoutingIconWrapper',
          componentId: 'sc-upb8sq-2',
        })(['height:27px;width:27px;margin-right:10px;path{fill:', ' !important;}'], e => e.theme.subText),
        In = Object(p.default)(h.b).withConfig({ displayName: 'SwapV3__DegenBanner', componentId: 'sc-upb8sq-3' })(
          ['padding:10px 16px;background-color:', ';border-radius:24px;'],
          e => {
            var t = e.theme
            return Object(a.d)(t.warning, 0.3)
          },
        )
      function Sn() {
        var e = Object(P.b)(),
          t = e.chainId,
          n = e.isSolana,
          s = Object(re.l)(),
          a = Object(re.o)(),
          d = Object(re.m)(),
          p = Object(M.a)(),
          j = Object(ne.a)(),
          W = Object(r.a)(j, 1)[0].show,
          B = void 0 !== W && W,
          U = Object(c.useState)(),
          z = Object(r.a)(U, 2),
          H = z[0],
          G = z[1],
          q = Object(c.useState)(!1),
          V = Object(r.a)(q, 2),
          Y = V[0],
          $ = V[1],
          Z = Object(u.k)().pathname,
          X = Object(c.useRef)(null),
          ce = Object(c.useRef)(null),
          de = Object(c.useState)(!1),
          le = Object(r.a)(de, 2),
          ue = le[0],
          be = le[1],
          pe = 'true' === p.highlightBox,
          je = Z.startsWith(L.g.SWAP),
          me = Z.startsWith(L.g.LIMIT),
          xe = Object(c.useState)(je ? Jt.SWAP : Jt.LIMIT),
          he = Object(r.a)(xe, 2),
          Oe = he[0],
          fe = he[1],
          ge = Object(J.a)().onSelectPair,
          ve = Object(J.b)(),
          ye = Object(c.useMemo)(
            () => ({ [ee.a.INPUT]: ve.currencyIn, [ee.a.OUTPUT]: ve.currencyOut }),
            [ve.currencyIn, ve.currencyOut],
          )
        Object(c.useEffect)(() => {
          fe(je ? Jt.SWAP : Jt.LIMIT)
        }, [je])
        var we = Object(c.useCallback)(() => {
          var e
          me && (null === (e = ce.current) || void 0 === e || e.refreshListOrder())
        }, [me])
        Object(te.d)()
        var ke = Object(c.useState)(!1),
          Ce = Object(r.a)(ke, 2),
          _e = Ce[0],
          Te = Ce[1],
          Ie = Object(R.a)(),
          Se = Object(re.c)(),
          Ae = Object(r.a)(Se, 1)[0],
          Ee = Object(te.h)(),
          Ne = Ee.onCurrencySelection,
          Le = Ee.onUserInput,
          Pe = Object(te.f)(),
          De = Object(te.g)(),
          Me = Object(c.useMemo)(() => ({ [ee.a.INPUT]: Pe, [ee.a.OUTPUT]: De }), [Pe, De]),
          Re = Object(c.useMemo)(() => {
            var e, t
            return null !==
              (e =
                null === (t = je ? [Pe, De] : [ve.currencyIn, ve.currencyOut]) || void 0 === t
                  ? void 0
                  : t.filter(e => e instanceof i.Token)) && void 0 !== e
              ? e
              : []
          }, [je, Pe, De, ve.currencyIn, ve.currencyOut]),
          We = Object(D.e)(),
          Fe = Re && Re.filter(e => !Boolean(e.address in We)),
          Be = Object(c.useCallback)(
            e => {
              Le(ee.a.INPUT, e)
            },
            [Le],
          ),
          Ue = Object(c.useCallback)(() => {
            ue ? be(!1) : Te(!0)
          }, [ue]),
          ze = Object(c.useCallback)(
            e => {
              var t
              ;(Ue(), ue) && (null === (t = X.current) || void 0 === t || t.onConfirmImportToken())
              me && (ge(e[0], e[1]), $(!0))
            },
            [me, ge, ue, Ue],
          ),
          He = Object(c.useCallback)(
            (e, t, n) => {
              if (me) return ge(e, t), void $(!0)
              e && Ne(ee.a.INPUT, e), t && Ne(ee.a.OUTPUT, t), n && Be(n)
            },
            [Be, Ne, ge, me],
          ),
          Ge = Object(D.i)(),
          qe = Object(ae.a)(t, Object(ie.c)(Pe), Object(ie.c)(De)),
          Ve = qe.isInWhiteList,
          Ye = qe.canonicalUrl,
          Ke = () => fe(me ? Jt.LIMIT : Jt.SWAP),
          $e = d && Pe && De && Ve && je,
          Ze = Ge && Fe.length > 0 && (!_e || ue),
          Xe = Object(c.useMemo)(
            () =>
              Object(oe.a)(
                t,
                null === H || void 0 === H ? void 0 : H.parsedAmountIn,
                void 0,
                null === H || void 0 === H ? void 0 : H.route,
                We,
              ),
            [t, We, H],
          ),
          Qe = Object(c.useState)(!0),
          Je = Object(r.a)(Qe, 2),
          et = Je[0],
          tt = Je[1]
        return Object(K.jsxs)(K.Fragment, {
          children: [
            Object(K.jsx)(O.a, { canonicalUrl: Ye }),
            Object(K.jsx)(y.b, {}),
            Object(K.jsx)(g.a, { isOpen: Ze, tokens: Fe, onConfirm: ze, onDismiss: Ue }),
            Object(K.jsxs)(N.j, {
              children: [
                Object(K.jsx)(m.a, {}),
                Object(K.jsx)(v.a, {}),
                Object(K.jsxs)(N.c, {
                  children: [
                    Object(K.jsxs)(N.p, {
                      isShowTutorial: B,
                      children: [
                        Object(K.jsxs)(x.b, {
                          gap: 'sm',
                          children: [
                            Object(K.jsxs)(h.b, {
                              children: [
                                Object(K.jsx)(Q, { activeTab: Oe }),
                                Object(K.jsx)(F.a, { activeTab: Oe, setActiveTab: fe }),
                              ],
                            }),
                            Object(K.jsx)(h.b, {
                              children: Object(K.jsx)(b.e, {
                                fontSize: 12,
                                color: Ie.subText,
                                children: me
                                  ? Object(K.jsx)(o.b, { id: 'Buy or sell any token at a specific price' })
                                  : Object(K.jsx)(o.b, { id: 'Buy or sell any token instantly at the best price' }),
                              }),
                            }),
                          ],
                        }),
                        Ae &&
                          et &&
                          Object(K.jsxs)(In, {
                            children: [
                              Object(K.jsx)(b.e, {
                                fontSize: 12,
                                fontWeight: 400,
                                color: Ie.text,
                                children: Object(K.jsx)(o.b, { id: 'You have turned on Degen Mode. Be cautious' }),
                              }),
                              Object(K.jsx)(se.c, { size: 14, onClick: () => tt(!1) }),
                            ],
                          }),
                        !n &&
                          Object(K.jsx)(h.b, {
                            children: Object(K.jsx)(I.c, {
                              ref: X,
                              onSelectSuggestedPair: He,
                              setShowModalImportToken: be,
                            }),
                          }),
                        Object(K.jsxs)(Cn, {
                          'data-highlight': pe,
                          id: w.b.SWAP_FORM,
                          children: [
                            Object(K.jsx)(yn, {
                              routeSummary: H,
                              setRouteSummary: G,
                              goToSettingsView: () => fe(Jt.SETTINGS),
                              hidden: Oe !== Jt.SWAP,
                            }),
                            Oe === Jt.INFO && Object(K.jsx)(A.a, { currencies: je ? Me : ye, onBack: Ke }),
                            Oe === Jt.SETTINGS &&
                              Object(K.jsx)(S.a, {
                                isLimitOrder: me,
                                onBack: Ke,
                                onClickLiquiditySources: () => fe(Jt.LIQUIDITY_SOURCES),
                                onClickGasPriceTracker: () => fe(Jt.GAS_PRICE_TRACKER),
                              }),
                            Oe === Jt.GAS_PRICE_TRACKER && Object(K.jsx)(k.a, { onBack: () => fe(Jt.SETTINGS) }),
                            Oe === Jt.LIQUIDITY_SOURCES && Object(K.jsx)(T.a, { onBack: () => fe(Jt.SETTINGS) }),
                            Oe === Jt.LIMIT &&
                              Object(K.jsx)(C.a, {
                                isSelectCurrencyManual: Y,
                                setIsSelectCurrencyManual: $,
                                refreshListOrder: we,
                              }),
                          ],
                        }),
                      ],
                    }),
                    (s || a || $e || me) &&
                      Object(K.jsxs)(N.g, {
                        children: [
                          s &&
                            Object(K.jsx)(N.h, {
                              children: Object(K.jsx)(c.Suspense, {
                                fallback: Object(K.jsx)(l.a, {
                                  height: '100%',
                                  baseColor: Ie.background,
                                  highlightColor: Ie.buttonGray,
                                  borderRadius: '1rem',
                                }),
                                children: Object(K.jsx)(kn, { currencies: je ? Me : ye }),
                              }),
                            }),
                          a &&
                            je &&
                            Object(K.jsx)(N.l, {
                              isOpenChart: s,
                              children: Object(K.jsxs)(b.b, {
                                flexDirection: 'column',
                                width: '100%',
                                children: [
                                  Object(K.jsxs)(b.b, {
                                    alignItems: 'center',
                                    children: [
                                      Object(K.jsx)(Tn, {}),
                                      Object(K.jsx)(b.e, {
                                        fontSize: 20,
                                        fontWeight: 500,
                                        color: Ie.subText,
                                        children: Object(K.jsx)(o.b, { id: 'Your trade route' }),
                                      }),
                                    ],
                                  }),
                                  Object(K.jsx)(c.Suspense, {
                                    fallback: Object(K.jsx)(l.a, {
                                      height: '100px',
                                      baseColor: Ie.background,
                                      highlightColor: Ie.buttonGray,
                                      borderRadius: '1rem',
                                    }),
                                    children: Object(K.jsx)(wn, {
                                      tradeComposition: Xe,
                                      currencyIn: Pe,
                                      currencyOut: De,
                                      inputAmount: null === H || void 0 === H ? void 0 : H.parsedAmountIn,
                                      outputAmount: null === H || void 0 === H ? void 0 : H.parsedAmountOut,
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          me && Object(K.jsx)(_.b, { ref: ce }),
                          $e && Object(K.jsx)(E.a, { currencyIn: Pe, currencyOut: De }),
                        ],
                      }),
                  ],
                }),
                Object(K.jsx)(b.b, {
                  justifyContent: 'center',
                  children: Object(K.jsx)(_n, { children: Object(K.jsx)(f.a, {}) }),
                }),
              ],
            }),
          ],
        })
      }
    },
    './src/pages/SwapV3/useUpdateSlippageInStableCoinSwap.tsx': function (e, t, n) {
      'use strict'
      var r = n('./node_modules/@babel/runtime/helpers/esm/slicedToArray.js'),
        s = n('./node_modules/react/index.js'),
        o = n('./node_modules/react-redux/es/index.js'),
        i = n('./node_modules/react-use/esm/usePrevious.js'),
        a = n('./src/constants/index.ts'),
        c = n('./src/constants/tokens.ts'),
        d = n('./src/hooks/index.ts'),
        l = n('./src/state/swap/actions.ts'),
        u = n('./src/state/user/hooks.tsx')
      t.a = () => {
        var e = Object(d.b)().chainId,
          t = Object(o.e)(e => e.swap[l.a.INPUT].currencyId),
          n = Object(i.a)(t),
          b = Object(o.e)(e => e.swap[l.a.OUTPUT].currencyId),
          p = Object(i.a)(b),
          j = Object(u.y)(),
          m = Object(r.a)(j, 2),
          x = m[0],
          h = m[1],
          O = Object(s.useRef)(x)
        ;(O.current = x),
          Object(s.useEffect)(() => {
            var r = Boolean(e && n && p && c.k[e].includes(n) && c.k[e].includes(p)),
              s = Boolean(e && t && b && c.k[e].includes(t) && c.k[e].includes(b))
            r !== s && (s && O.current > a.w ? h(a.w) : !s && O.current > a.u && h(a.u))
          }, [e, t, b, n, p, h])
      }
    },
    './src/services/route/utils.ts': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      }),
        n.d(t, 'b', function () {
          return c
        })
      var r = n('./node_modules/@babel/runtime/helpers/esm/objectSpread2.js'),
        s = n('./node_modules/@kyberswap/ks-sdk-core/dist/index.js'),
        o = n('./src/components/SwapForm/hooks/useGetRoute.ts'),
        i = n('./src/utils/currencyAmount.ts'),
        a = (e, t) => (t ? (100 * (e - t)) / e : NaN),
        c = (e, t, n) => {
          var c = { routeSummary: void 0, routerAddress: e.routerAddress, fromMeta: e.fromMeta },
            d = e.routeSummary
          if (!d) return c
          if (
            !(
              d.tokenIn.toLowerCase() === Object(o.b)(t).toLowerCase() &&
              d.tokenOut.toLowerCase() === Object(o.b)(n).toLowerCase()
            )
          )
            return c
          var l = Object(i.b)(t, d.amountIn),
            u = Object(i.b)(n, d.amountOut),
            b = new s.Price(l.currency, u.currency, l.quotient, u.quotient)
          return {
            routeSummary: Object(r.a)(
              Object(r.a)({}, d),
              {},
              {
                parsedAmountIn: l,
                parsedAmountOut: u,
                priceImpact: a(Number(d.amountInUsd), Number(d.amountOutUsd)),
                executionPrice: b,
                routerAddress: e.routerAddress,
              },
            ),
            routerAddress: e.routerAddress,
            fromMeta: e.fromMeta,
          }
        }
    },
    './src/state/limit/hooks.ts': function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return m
      }),
        n.d(t, 'a', function () {
          return x
        })
      var r = n('./node_modules/react/index.js'),
        s = n('./node_modules/react-redux/es/index.js'),
        o = n('./src/constants/index.ts'),
        i = n('./node_modules/react-router/dist/index.js'),
        a = n('./src/constants/tokens.ts'),
        c = n('./src/hooks/index.ts'),
        d = n('./src/hooks/Tokens.ts'),
        l = n('./src/hooks/useParsedQueryString.ts'),
        u = n('./src/state/swap/actions.ts'),
        b = n('./src/state/swap/hooks.ts'),
        p = (e, t, n, r) => {
          var s,
            o,
            p,
            j,
            m = Object(c.b)().chainId,
            x = r || m,
            h = Object(l.a)(),
            O = (null === e || void 0 === e ? void 0 : e.chainId) === x ? e : void 0,
            f = (null === t || void 0 === t ? void 0 : t.chainId) === x ? t : void 0,
            g = Object(i.k)().pathname,
            v = Object(b.a)(h, x, g.startsWith(n)),
            y = x && null !== (s = null === (o = a.e[x]) || void 0 === o ? void 0 : o.address) && void 0 !== s ? s : '',
            w = v[u.a.INPUT].currencyId,
            k = v[u.a.OUTPUT].currencyId || y || '',
            C = h.inputCurrency ? w : O || w,
            _ = h.outputCurrency ? k : f || k,
            T = x ? a.i[x].symbol : ''
          return (
            T && _ === T && C === T && (_ = y),
            {
              inputCurrency: null !== (p = Object(d.g)(C && 'object' === typeof C ? '' : C, x)) && void 0 !== p ? p : O,
              outputCurrency:
                null !== (j = Object(d.g)(_ && 'object' === typeof _ ? '' : _, x)) && void 0 !== j ? j : f,
            }
          )
        },
        j = n('./src/state/limit/actions.ts')
      function m() {
        return Object(s.e)(e => e.limit)
      }
      function x() {
        var e = Object(s.d)(),
          t = m(),
          n = t.currencyIn,
          i = t.currencyOut,
          a = p(n, i, o.g.LIMIT),
          c = a.inputCurrency,
          d = a.outputCurrency,
          l = Object(r.useCallback)(
            t => {
              e(Object(j.c)(t))
            },
            [e],
          ),
          u = Object(r.useCallback)(() => {
            l('')
          }, [l]),
          b = Object(r.useCallback)(
            (t, n, r) => {
              e(Object(j.d)({ currencyIn: t, currencyOut: n })), void 0 !== r && l(r)
            },
            [e, l],
          )
        Object(r.useEffect)(() => {
          ;((!c || (null !== n && void 0 !== n && n.equals(c))) &&
            (!d || (null !== i && void 0 !== i && i.equals(d)))) ||
            b(null !== c && void 0 !== c ? c : void 0, null !== d && void 0 !== d ? d : void 0)
        }, [b, c, d, n, i])
        var x = Object(r.useCallback)(
            e => {
              b(e, i)
            },
            [i, b],
          ),
          h = Object(r.useCallback)(
            e => {
              b(n, e)
            },
            [n, b],
          ),
          O = Object(r.useCallback)(() => {
            b(i, n)
          }, [b, i, n]),
          f = Object(r.useCallback)(
            t => {
              e(Object(j.b)(t))
            },
            [e],
          ),
          g = Object(r.useCallback)(
            t => {
              e(Object(j.a)(t))
            },
            [e],
          )
        return {
          switchCurrency: O,
          setCurrencyIn: x,
          setCurrencyOut: h,
          onSelectPair: b,
          setCurrentOrder: f,
          removeCurrentOrder: g,
          resetState: u,
        }
      }
    },
    './src/utils/aggregationRouting.ts': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return u
      })
      var r = n('./node_modules/@babel/runtime/helpers/esm/objectSpread2.js'),
        s = n('./node_modules/@kyberswap/ks-sdk-classic/dist/index.js'),
        o = n('./node_modules/@kyberswap/ks-sdk-core/dist/index.js'),
        i = n('./node_modules/jsbi/dist/jsbi-umd.js'),
        a = n.n(i),
        c = n('./src/constants/index.ts'),
        d = n('./src/constants/tokens.ts'),
        l = n('./src/utils/index.ts')
      function u(e, t, n, i, u) {
        if (t && i) {
          var b = t.wrapped,
            p = n || {},
            j = new o.Token(e, o.WETH[e].address, 0, '--', '--'),
            m = [],
            x = function (e, n) {
              var r
              if (
                e &&
                n &&
                (null === e || void 0 === e ? void 0 : e.toLowerCase()) ===
                  (null === b || void 0 === b || null === (r = b.currency.address) || void 0 === r
                    ? void 0
                    : r.toLowerCase()) &&
                t.greaterThan(a.a.BigInt(0))
              ) {
                var s = new o.Percent(a.a.BigInt(n || 0), t.quotient).toFixed(0)
                return parseInt(s)
              }
            },
            h = t =>
              t.toLowerCase() === c.E.toLowerCase()
                ? d.i[e]
                : (null === u || void 0 === u ? void 0 : u[Object(l.t)(e, t)]) || p[t] || j
          return (
            i.forEach(t => {
              if (t.length && !(t.length < 1))
                if (1 !== t.length) {
                  var n = [],
                    r = []
                  t.forEach((t, s) => {
                    if (
                      (r.push({
                        id: t.pool,
                        exchange: t.exchange,
                        swapAmount: a.a.BigInt(t.swapAmount),
                        swapPercentage: 0 === s ? x(t.tokenIn, t.swapAmount) : 100,
                      }),
                      0 === s)
                    ) {
                      var i = p[t.tokenIn] || j
                      n.push(
                        (null === u || void 0 === u ? void 0 : u[Object(l.t)(e, i.address)]) ||
                          new o.Token(e, i.address, i.decimals, i.symbol, i.name),
                      )
                    }
                    var c = (null === u || void 0 === u ? void 0 : u[Object(l.t)(e, t.tokenOut)]) || p[t.tokenOut] || j
                    n.push(
                      (null === u || void 0 === u ? void 0 : u[Object(l.t)(e, c.address)]) ||
                        new o.Token(e, c.address, c.decimals, c.symbol, c.name),
                    )
                  }),
                    m.push({
                      slug: n
                        .slice(1)
                        .map(e => e.address)
                        .join('-')
                        .toLowerCase(),
                      path: n,
                      pools: r,
                      id: r.map(e => e.id).join('-'),
                    })
                } else {
                  var s,
                    i = t[0],
                    c = [h(i.tokenIn), h(i.tokenOut)]
                  m.push({
                    slug: null === (s = i.tokenOut) || void 0 === s ? void 0 : s.toLowerCase(),
                    pools: [
                      {
                        id: i.pool,
                        exchange: i.exchange,
                        swapAmount: a.a.BigInt(i.swapAmount),
                        swapPercentage: x(i.tokenIn, i.swapAmount),
                      },
                    ],
                    path: c,
                    id: i.pool,
                  })
                }
            }),
            (function (e) {
              if (!e.length) return []
              try {
                var t = -1,
                  n = e.reduce((e, n) => {
                    var i,
                      c,
                      d = [],
                      l = (n.pools && (null === (i = n.pools[0]) || void 0 === i ? void 0 : i.swapPercentage)) || 0
                    if (e[n.slug]) {
                      var u = e[n.slug] || {}
                      c = u.index
                      var b = u.subRoutes || []
                      ;(l += u.swapPercentage || 0),
                        b.forEach((e, t) => {
                          var i = (n.pools && n.pools[t]) || {},
                            c = a.a.add(
                              e.reduce((e, t) => a.a.add(e, t.swapAmount || s.ZERO), s.ZERO),
                              i.swapAmount || s.ZERO,
                            ),
                            l = !1,
                            u = e.map(e => {
                              var t = Object(r.a)({}, e),
                                n = t.id === i.id,
                                d = t.swapAmount || s.ZERO
                              n && ((l = !0), (d = a.a.add(d, i.swapAmount || s.ZERO)))
                              var u = new o.Percent(d, c).toFixed(0, void 0, o.Rounding.ROUND_HALF_UP)
                              return (t.swapPercentage = parseInt(u)), (t.total = c.toString()), t
                            })
                          if (!l) {
                            var b = new o.Percent(i.swapAmount || s.ZERO, c).toFixed(
                              0,
                              void 0,
                              o.Rounding.ROUND_HALF_UP,
                            )
                            u.push(Object(r.a)(Object(r.a)({}, i), {}, { swapPercentage: parseInt(b) }))
                          }
                          d[t] = u
                        })
                    } else
                      (c = t += 1),
                        (d = n.pools.map(e => [Object(r.a)(Object(r.a)({}, e), {}, { swapPercentage: 100 })]))
                    return Object.assign({}, e, {
                      [n.slug]: { index: c, swapPercentage: l, path: n.path, subRoutes: d },
                    })
                  }, {}),
                  i = Object.keys(n).length,
                  c = new Array(i).map(() => ({}))
                return (
                  Object.values(n).forEach(e => {
                    e.index > i ||
                      c.splice(e.index, 1, {
                        swapPercentage: e.swapPercentage,
                        path: e.path,
                        subRoutes: e.subRoutes,
                        id: e.subRoutes
                          .flat()
                          .map(e => e.id)
                          .join('-'),
                      })
                  }),
                  c
                )
              } catch (d) {
                return console.error('[error_routesV2]', d), []
              }
            })(m)
          )
        }
      }
    },
    './src/utils/currencyAmount.ts': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      }),
        n.d(t, 'b', function () {
          return c
        })
      var r = n('./node_modules/@kyberswap/ks-sdk-core/dist/index.js'),
        s = n('./node_modules/jsbi/dist/jsbi-umd.js'),
        o = n.n(s),
        i = n('./src/utils/index.ts'),
        a = (e, t) => {
          var n = 'number' === typeof t ? Object(i.a)(t) : t,
            s = new r.Fraction(o.a.BigInt(1)).add(n).invert().multiply(e.quotient).quotient
          return r.TokenAmount.fromRawAmount(e.currency, s)
        },
        c = function (e, t) {
          try {
            return r.TokenAmount.fromRawAmount(e, o.a.BigInt(t))
          } catch (n) {
            return r.TokenAmount.fromRawAmount(e, 0)
          }
        }
    },
    './src/utils/fee.ts': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      }),
        n.d(t, 'b', function () {
          return u
        })
      var r = n('./node_modules/@kyberswap/ks-sdk-core/dist/index.js'),
        s = n('./node_modules/ethers/lib/utils.js'),
        o = n('./node_modules/jsbi/dist/jsbi-umd.js'),
        i = n.n(o),
        a = n('./src/constants/index.ts'),
        c = n('./src/utils/index.ts'),
        d = n('./src/utils/numbers.ts')
      function l(e, t) {
        if (t) {
          var n = new r.Fraction(
            Object(s.parseUnits)(Object(d.c)(e.amountInUsd), a.S).toString(),
            i.a.exponentiate(i.a.BigInt(10), i.a.BigInt(a.S)),
          )
          if (n) {
            var o = new r.Fraction(
                Object(s.parseUnits)(t.feeAmount, a.S).toString(),
                i.a.exponentiate(i.a.BigInt(10), i.a.BigInt(a.S)),
              ).divide(a.k),
              l = n.multiply(o).toSignificant(a.S)
            return Object(c.i)(l, !0)
          }
        }
        return '--'
      }
      var u = (e, t) => {
        if (t) {
          var n = new r.Fraction(
            Object(s.parseUnits)(Object(d.c)(e), a.S).toString(),
            i.a.exponentiate(i.a.BigInt(10), i.a.BigInt(a.S)),
          )
          if (n) {
            var o = new r.Fraction(
                Object(s.parseUnits)(t, a.S).toString(),
                i.a.exponentiate(i.a.BigInt(10), i.a.BigInt(a.S)),
              ).divide(a.k),
              l = n.multiply(o).toSignificant(a.S)
            return Object(c.i)(l, !0)
          }
        }
        return '--'
      }
    },
    './src/utils/sendTransaction.ts': function (e, t, n) {
      'use strict'
      ;(function (e) {
        n.d(t, 'a', function () {
          return l
        }),
          n.d(t, 'b', function () {
            return p
          })
        var r = n('./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js'),
          s = n('./node_modules/@babel/runtime/helpers/esm/objectSpread2.js'),
          o = n('./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js'),
          i = n('./node_modules/@lingui/core/esm/index.js'),
          a = n('./src/state/transactions/type.ts'),
          c = n('./src/utils/index.ts'),
          d = n('./src/utils/sentry.ts')
        function l(e, t, n, r, s, o, i) {
          return u.apply(this, arguments)
        }
        function u() {
          return (u = Object(o.a)(
            Object(r.a)().mark(function e(t, n, o, i, a, l, u) {
              var b, p, j, m
              return Object(r.a)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (t && n) {
                          e.next = 2
                          break
                        }
                        return e.abrupt('return')
                      case 2:
                        return (
                          (b = { from: t, to: o, data: i, value: a }),
                          (e.prev = 3),
                          (e.next = 6),
                          n.getSigner().estimateGas(b)
                        )
                      case 6:
                        if ((p = e.sent)) {
                          e.next = 9
                          break
                        }
                        throw new Error('gasEstimate is nullish value')
                      case 9:
                        e.next = 14
                        break
                      case 11:
                        throw ((e.prev = 11), (e.t0 = e.catch(3)), new d.b(e.t0, b))
                      case 14:
                        return (
                          (j = Object(s.a)(
                            { from: t, to: o, data: i, gasLimit: Object(c.b)(p, u) },
                            a.eq('0') ? {} : { value: a },
                          )),
                          (e.prev = 15),
                          (e.next = 18),
                          n.getSigner().sendTransaction(j)
                        )
                      case 18:
                        return (m = e.sent), null === l || void 0 === l || l(m), e.abrupt('return', m)
                      case 23:
                        throw ((e.prev = 23), (e.t1 = e.catch(15)), new d.b(e.t1, j))
                      case 26:
                      case 'end':
                        return e.stop()
                    }
                },
                e,
                null,
                [
                  [3, 11],
                  [15, 23],
                ],
              )
            }),
          )).apply(this, arguments)
        }
        var b = t =>
          t
            ? 'serializeMessage' in t
              ? e.concat([e.from([0]), t.serializeMessage()]).toString('base64')
              : 'serialize' in t
              ? e.from(t.serialize()).toString('base64')
              : ''
            : ''
        function p(e, t, n, r, s) {
          return j.apply(this, arguments)
        }
        function j() {
          return (j = Object(o.a)(
            Object(r.a)().mark(function t(n, o, c, d, l) {
              var u, p, j, m, x, h, O, f, g, v, y
              return Object(r.a)().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (o) {
                          t.next = 2
                          break
                        }
                        return t.abrupt('return')
                      case 2:
                        if (o.swapTx) {
                          t.next = 4
                          break
                        }
                        return t.abrupt('return')
                      case 4:
                        return (
                          (u = []),
                          o.setupTx && u.push(o.setupTx),
                          u.push(o.swapTx),
                          (p = e => {
                            var t = { signedSetupTx: void 0, signedSwapTx: void 0 },
                              n = 0
                            return o.setupTx && (t.signedSetupTx = e[n++]), (t.signedSwapTx = e[n++]), t
                          }),
                          console.group('Sending transactions:'),
                          o.setupTx && console.info('setup tx:', b(o.setupTx)),
                          console.info('swap tx:', b(o.swapTx)),
                          console.info('inspector: https://explorer.solana.com/tx/inspector'),
                          console.groupEnd(),
                          (t.prev = 13),
                          (t.prev = 14),
                          (t.next = 17),
                          c.signAllTransactions(u)
                        )
                      case 17:
                        ;(j = t.sent), (t.next = 24)
                        break
                      case 20:
                        throw ((t.prev = 20), (t.t0 = t.catch(14)), console.log({ e: t.t0 }), t.t0)
                      case 24:
                        if (((m = p(j)), (x = m.signedSetupTx), (h = m.signedSwapTx), (O = []), !x)) {
                          t.next = 41
                          break
                        }
                        return (t.prev = 27), (t.next = 30), n.sendRawTransaction(x.serialize())
                      case 30:
                        return (
                          (f = t.sent),
                          O.push(f),
                          d({
                            type: a.c.SETUP_SOLANA_SWAP,
                            hash: f,
                            firstTxHash: O[0],
                            extraInfo: { arbitrary: { index: 1, total: j.length, mainTx: l } },
                          }),
                          (t.next = 35),
                          n.confirmTransaction(f, 'finalized')
                        )
                      case 35:
                        t.next = 41
                        break
                      case 37:
                        throw (
                          ((t.prev = 37),
                          (t.t1 = t.catch(27)),
                          console.error({ error: t.t1 }),
                          new Error('Set up error' + (t.t1.message ? ': ' + t.t1.message : '')))
                        )
                      case 41:
                        return (t.prev = 41), (t.next = 44), n.sendRawTransaction(e.from(h.serialize()))
                      case 44:
                        ;(g = t.sent),
                          O.push(g),
                          d(Object(s.a)(Object(s.a)({}, l), {}, { hash: g, firstTxHash: O[0] })),
                          (t.next = 60)
                        break
                      case 49:
                        if (
                          ((t.prev = 49),
                          (t.t2 = t.catch(41)),
                          console.error({ error: t.t2 }),
                          null === t.t2 ||
                            void 0 === t.t2 ||
                            null === (v = t.t2.message) ||
                            void 0 === v ||
                            !v.endsWith('0x1771'))
                        ) {
                          t.next = 56
                          break
                        }
                        throw new Error(
                          i.a._('An error occurred. Try refreshing the price rate or increase max slippage'),
                        )
                      case 56:
                        if (!/0x[0-9a-f]+$/.test(t.t2.message)) {
                          t.next = 59
                          break
                        }
                        throw (
                          ((y = t.t2.message.split(' ').slice(-1)[0]),
                          new Error(
                            i.a._(
                              'Error encountered. We haven\u2019t send the transaction yet. Error code {errorCode}',
                              { errorCode: y },
                            ),
                          ))
                        )
                      case 59:
                        throw new Error(i.a._('Error encountered. We haven\u2019t send the transaction yet.'))
                      case 60:
                        return t.abrupt('return', O)
                      case 63:
                        throw ((t.prev = 63), (t.t3 = t.catch(13)), t.t3)
                      case 66:
                      case 'end':
                        return t.stop()
                    }
                },
                t,
                null,
                [
                  [13, 63],
                  [14, 20],
                  [27, 37],
                  [41, 49],
                ],
              )
            }),
          )).apply(this, arguments)
        }
      }.call(this, n('./node_modules/node-libs-browser/node_modules/buffer/index.js').Buffer))
    },
    './src/utils/sentry.ts': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      }),
        n.d(t, 'c', function () {
          return o
        }),
        n.d(t, 'b', function () {
          return i
        })
      var r,
        s = n('./node_modules/@sentry/core/esm/exports.js')
      function o(e) {
        var t = new Error('Swap failed', { cause: e })
        t.name = r.SwappError
        var n = JSON.stringify(e),
          o = n.includes('minTotalAmountOut')
            ? 'minTotalAmountOut'
            : n.includes('ERR_LIMIT_OUT')
            ? 'ERR_LIMIT_OUT'
            : n.toLowerCase().includes('1inch')
            ? 'call1InchFailed'
            : n.toLowerCase().includes('return amount is not enough')
            ? 'returnAmountIsNotEnough'
            : 'other'
        Object(s.a)(t, { level: 'fatal', extra: e.rawData, tags: { type: o } })
      }
      !(function (e) {
        ;(e.SwappError = 'SwapError'),
          (e.RemoveElasticLiquidityError = 'RemoveElasticLiquidityError'),
          (e.RemoveClassicLiquidityError = 'RemoveClassicLiquidityError')
      })(r || (r = {}))
      class i extends Error {
        constructor(e, t, n) {
          super(e, n), (this.rawData = void 0), (this.rawData = t)
        }
      }
    },
  },
])
