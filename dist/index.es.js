var Lg = Object.defineProperty;
var Dg = (e, n, t) => n in e ? Lg(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var A = (e, n, t) => Dg(e, typeof n != "symbol" ? n + "" : n, t);
import { jsx as _, jsxs as D, Fragment as Xe } from "react/jsx-runtime";
import * as E from "react";
import ye, { forwardRef as Po, createElement as On, useCallback as St, useMemo as Dn, createContext as Ku, useContext as zg, useLayoutEffect as kr, useEffect as Se, useState as Qe, useRef as Ce, Suspense as Bg, Component as Vg, memo as Is } from "react";
import { createPortal as qu, flushSync as jg } from "react-dom";
function Zu(e) {
  var n, t, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (n = 0; n < o; n++) e[n] && (t = Zu(e[n])) && (r && (r += " "), r += t);
  } else for (t in e) e[t] && (r && (r += " "), r += t);
  return r;
}
function Lo() {
  for (var e, n, t = 0, r = "", o = arguments.length; t < o; t++) (e = arguments[t]) && (n = Zu(e)) && (r && (r += " "), r += n);
  return r;
}
const Ta = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Fa = Lo, te = (e, n) => (t) => {
  var r;
  if ((n == null ? void 0 : n.variants) == null) return Fa(e, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
  const { variants: o, defaultVariants: i } = n, s = Object.keys(o).map((u) => {
    const c = t == null ? void 0 : t[u], d = i == null ? void 0 : i[u];
    if (c === null) return null;
    const f = Ta(c) || Ta(d);
    return o[u][f];
  }), a = t && Object.entries(t).reduce((u, c) => {
    let [d, f] = c;
    return f === void 0 || (u[d] = f), u;
  }, {}), l = n == null || (r = n.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, c) => {
    let { class: d, className: f, ...p } = c;
    return Object.entries(p).every((g) => {
      let [h, m] = g;
      return Array.isArray(m) ? m.includes({
        ...i,
        ...a
      }[h]) : {
        ...i,
        ...a
      }[h] === m;
    }) ? [
      ...u,
      d,
      f
    ] : u;
  }, []);
  return Fa(e, s, l, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ug = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ju = (...e) => e.filter((n, t, r) => !!n && n.trim() !== "" && r.indexOf(n) === t).join(" ").trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Gg = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hg = Po(
  ({
    color: e = "currentColor",
    size: n = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: i,
    iconNode: s,
    ...a
  }, l) => On(
    "svg",
    {
      ref: l,
      ...Gg,
      width: n,
      height: n,
      stroke: e,
      strokeWidth: r ? Number(t) * 24 / Number(n) : t,
      className: Ju("lucide", o),
      ...a
    },
    [
      ...s.map(([u, c]) => On(u, c)),
      ...Array.isArray(i) ? i : [i]
    ]
  )
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const de = (e, n) => {
  const t = Po(
    ({ className: r, ...o }, i) => On(Hg, {
      ref: i,
      iconNode: n,
      className: Ju(`lucide-${Ug(e)}`, r),
      ...o
    })
  );
  return t.displayName = `${e}`, t;
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wg = de("ArrowUpDown", [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kg = de("Bold", [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ui = de("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Os = de("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yu = de("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qg = de("CircleAlert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zg = de("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jg = de("CircleX", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yg = de("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xu = de("CodeXml", [
  ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
  ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
  ["path", { d: "m14.5 4-5 16", key: "e7oirm" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ia = de("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xg = de("Heading1", [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qg = de("Heading2", [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ep = de("House", [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt"
    }
  ]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gi = de("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tp = de("Italic", [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const np = de("List", [
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 18h.01", key: "1tta3j" }],
  ["path", { d: "M3 6h.01", key: "1rqtza" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 18h13", key: "1lx6n3" }],
  ["path", { d: "M8 6h13", key: "ik3vkj" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qu = de("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rp = de("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const op = de("Quote", [
  [
    "path",
    {
      d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "rib7q0"
    }
  ],
  [
    "path",
    {
      d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "1ymkrd"
    }
  ]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oa = de("RefreshCw", [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ec = de("Sparkles", [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx"
    }
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hr = de("TriangleAlert", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tc = de("Type", [
  ["polyline", { points: "4 7 4 4 20 4 20 7", key: "1nosan" }],
  ["line", { x1: "9", x2: "15", y1: "20", y2: "20", key: "swin9y" }],
  ["line", { x1: "12", x2: "12", y1: "4", y2: "20", key: "1tx1rr" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ip = de("Wifi", [
  ["path", { d: "M12 20h.01", key: "zekei9" }],
  ["path", { d: "M2 8.82a15 15 0 0 1 20 0", key: "dnpr2z" }],
  ["path", { d: "M5 12.859a10 10 0 0 1 14 0", key: "1x1e6c" }],
  ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nc = de("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), Ms = "-", sp = (e) => {
  const n = lp(e), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (s) => {
      const a = s.split(Ms);
      return a[0] === "" && a.length !== 1 && a.shift(), rc(a, n) || ap(s);
    },
    getConflictingClassGroupIds: (s, a) => {
      const l = t[s] || [];
      return a && r[s] ? [...l, ...r[s]] : l;
    }
  };
}, rc = (e, n) => {
  var s;
  if (e.length === 0)
    return n.classGroupId;
  const t = e[0], r = n.nextPart.get(t), o = r ? rc(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (n.validators.length === 0)
    return;
  const i = e.join(Ms);
  return (s = n.validators.find(({
    validator: a
  }) => a(i))) == null ? void 0 : s.classGroupId;
}, Ma = /^\[(.+)\]$/, ap = (e) => {
  if (Ma.test(e)) {
    const n = Ma.exec(e)[1], t = n == null ? void 0 : n.substring(0, n.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}, lp = (e) => {
  const {
    theme: n,
    prefix: t
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return cp(Object.entries(e.classGroups), t).forEach(([i, s]) => {
    Hi(s, r, i, n);
  }), r;
}, Hi = (e, n, t, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const i = o === "" ? n : $a(n, o);
      i.classGroupId = t;
      return;
    }
    if (typeof o == "function") {
      if (up(o)) {
        Hi(o(r), n, t, r);
        return;
      }
      n.validators.push({
        validator: o,
        classGroupId: t
      });
      return;
    }
    Object.entries(o).forEach(([i, s]) => {
      Hi(s, $a(n, i), t, r);
    });
  });
}, $a = (e, n) => {
  let t = e;
  return n.split(Ms).forEach((r) => {
    t.nextPart.has(r) || t.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(r);
  }), t;
}, up = (e) => e.isThemeGetter, cp = (e, n) => n ? e.map(([t, r]) => {
  const o = r.map((i) => typeof i == "string" ? n + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([s, a]) => [n + s, a])) : i);
  return [t, o];
}) : e, dp = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let n = 0, t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const o = (i, s) => {
    t.set(i, s), n++, n > e && (n = 0, r = t, t = /* @__PURE__ */ new Map());
  };
  return {
    get(i) {
      let s = t.get(i);
      if (s !== void 0)
        return s;
      if ((s = r.get(i)) !== void 0)
        return o(i, s), s;
    },
    set(i, s) {
      t.has(i) ? t.set(i, s) : o(i, s);
    }
  };
}, oc = "!", fp = (e) => {
  const {
    separator: n,
    experimentalParseClassName: t
  } = e, r = n.length === 1, o = n[0], i = n.length, s = (a) => {
    const l = [];
    let u = 0, c = 0, d;
    for (let m = 0; m < a.length; m++) {
      let v = a[m];
      if (u === 0) {
        if (v === o && (r || a.slice(m, m + i) === n)) {
          l.push(a.slice(c, m)), c = m + i;
          continue;
        }
        if (v === "/") {
          d = m;
          continue;
        }
      }
      v === "[" ? u++ : v === "]" && u--;
    }
    const f = l.length === 0 ? a : a.substring(c), p = f.startsWith(oc), g = p ? f.substring(1) : f, h = d && d > c ? d - c : void 0;
    return {
      modifiers: l,
      hasImportantModifier: p,
      baseClassName: g,
      maybePostfixModifierPosition: h
    };
  };
  return t ? (a) => t({
    className: a,
    parseClassName: s
  }) : s;
}, gp = (e) => {
  if (e.length <= 1)
    return e;
  const n = [];
  let t = [];
  return e.forEach((r) => {
    r[0] === "[" ? (n.push(...t.sort(), r), t = []) : t.push(r);
  }), n.push(...t.sort()), n;
}, pp = (e) => ({
  cache: dp(e.cacheSize),
  parseClassName: fp(e),
  ...sp(e)
}), hp = /\s+/, mp = (e, n) => {
  const {
    parseClassName: t,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = n, i = [], s = e.trim().split(hp);
  let a = "";
  for (let l = s.length - 1; l >= 0; l -= 1) {
    const u = s[l], {
      modifiers: c,
      hasImportantModifier: d,
      baseClassName: f,
      maybePostfixModifierPosition: p
    } = t(u);
    let g = !!p, h = r(g ? f.substring(0, p) : f);
    if (!h) {
      if (!g) {
        a = u + (a.length > 0 ? " " + a : a);
        continue;
      }
      if (h = r(f), !h) {
        a = u + (a.length > 0 ? " " + a : a);
        continue;
      }
      g = !1;
    }
    const m = gp(c).join(":"), v = d ? m + oc : m, y = v + h;
    if (i.includes(y))
      continue;
    i.push(y);
    const b = o(h, g);
    for (let x = 0; x < b.length; ++x) {
      const w = b[x];
      i.push(v + w);
    }
    a = u + (a.length > 0 ? " " + a : a);
  }
  return a;
};
function yp() {
  let e = 0, n, t, r = "";
  for (; e < arguments.length; )
    (n = arguments[e++]) && (t = ic(n)) && (r && (r += " "), r += t);
  return r;
}
const ic = (e) => {
  if (typeof e == "string")
    return e;
  let n, t = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (n = ic(e[r])) && (t && (t += " "), t += n);
  return t;
};
function bp(e, ...n) {
  let t, r, o, i = s;
  function s(l) {
    const u = n.reduce((c, d) => d(c), e());
    return t = pp(u), r = t.cache.get, o = t.cache.set, i = a, a(l);
  }
  function a(l) {
    const u = r(l);
    if (u)
      return u;
    const c = mp(l, t);
    return o(l, c), c;
  }
  return function() {
    return i(yp.apply(null, arguments));
  };
}
const fe = (e) => {
  const n = (t) => t[e] || [];
  return n.isThemeGetter = !0, n;
}, sc = /^\[(?:([a-z-]+):)?(.+)\]$/i, vp = /^\d+\/\d+$/, xp = /* @__PURE__ */ new Set(["px", "full", "screen"]), _p = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, wp = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Sp = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Cp = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, kp = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, gt = (e) => Nn(e) || xp.has(e) || vp.test(e), Rt = (e) => zn(e, "length", Op), Nn = (e) => !!e && !Number.isNaN(Number(e)), ci = (e) => zn(e, "number", Nn), Yn = (e) => !!e && Number.isInteger(Number(e)), Ep = (e) => e.endsWith("%") && Nn(e.slice(0, -1)), X = (e) => sc.test(e), At = (e) => _p.test(e), Np = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Rp = (e) => zn(e, Np, ac), Ap = (e) => zn(e, "position", ac), Tp = /* @__PURE__ */ new Set(["image", "url"]), Fp = (e) => zn(e, Tp, $p), Ip = (e) => zn(e, "", Mp), Xn = () => !0, zn = (e, n, t) => {
  const r = sc.exec(e);
  return r ? r[1] ? typeof n == "string" ? r[1] === n : n.has(r[1]) : t(r[2]) : !1;
}, Op = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  wp.test(e) && !Sp.test(e)
), ac = () => !1, Mp = (e) => Cp.test(e), $p = (e) => kp.test(e), Pp = () => {
  const e = fe("colors"), n = fe("spacing"), t = fe("blur"), r = fe("brightness"), o = fe("borderColor"), i = fe("borderRadius"), s = fe("borderSpacing"), a = fe("borderWidth"), l = fe("contrast"), u = fe("grayscale"), c = fe("hueRotate"), d = fe("invert"), f = fe("gap"), p = fe("gradientColorStops"), g = fe("gradientColorStopPositions"), h = fe("inset"), m = fe("margin"), v = fe("opacity"), y = fe("padding"), b = fe("saturate"), x = fe("scale"), w = fe("sepia"), S = fe("skew"), k = fe("space"), N = fe("translate"), C = () => ["auto", "contain", "none"], R = () => ["auto", "hidden", "clip", "visible", "scroll"], O = () => ["auto", X, n], F = () => [X, n], U = () => ["", gt, Rt], L = () => ["auto", Nn, X], M = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], G = () => ["solid", "dashed", "dotted", "double", "none"], H = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], J = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], ee = () => ["", "0", X], oe = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], W = () => [Nn, X];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Xn],
      spacing: [gt, Rt],
      blur: ["none", "", At, X],
      brightness: W(),
      borderColor: [e],
      borderRadius: ["none", "", "full", At, X],
      borderSpacing: F(),
      borderWidth: U(),
      contrast: W(),
      grayscale: ee(),
      hueRotate: W(),
      invert: ee(),
      gap: F(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Ep, Rt],
      inset: O(),
      margin: O(),
      opacity: W(),
      padding: F(),
      saturate: W(),
      scale: W(),
      sepia: ee(),
      skew: W(),
      space: F(),
      translate: F()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", X]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [At]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": oe()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": oe()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...M(), X]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: R()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": R()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": R()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: C()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": C()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": C()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [h]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [h]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [h]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [h]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [h]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [h]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [h]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [h]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [h]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", Yn, X]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: O()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", X]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ee()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ee()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Yn, X]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Xn]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Yn, X]
        }, X]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": L()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": L()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Xn]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Yn, X]
        }, X]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": L()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": L()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", X]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", X]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [f]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [f]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [f]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...J()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...J(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...J(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [y]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [y]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [y]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [y]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [y]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [y]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [y]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [y]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [y]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [m]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [m]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [m]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [m]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [m]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [m]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [m]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [m]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [m]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [k]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [k]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", X, n]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [X, n, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [X, n, "none", "full", "min", "max", "fit", "prose", {
          screen: [At]
        }, At]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [X, n, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [X, n, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [X, n, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [X, n, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", At, Rt]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ci]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Xn]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", X]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Nn, ci]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", gt, X]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", X]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", X]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [v]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [v]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...G(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", gt, Rt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", gt, X]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: F()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", X]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", X]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [v]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...M(), Ap]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", Rp]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Fp]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [g]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [g]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [g]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [p]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [p]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [p]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [i]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [i]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [i]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [i]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [i]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [i]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [i]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [i]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [i]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [i]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [i]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [i]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [i]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [i]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [i]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [a]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [a]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [a]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [a]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [a]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [a]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [a]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [a]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [a]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [v]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...G(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [a]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [a]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [v]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: G()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [o]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [o]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [o]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [o]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [o]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [o]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [o]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [o]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [o]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [o]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...G()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [gt, X]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [gt, Rt]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: U()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [v]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [gt, Rt]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", At, Ip]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Xn]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [v]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...H(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": H()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [t]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [r]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [l]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", At, X]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [u]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [c]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [d]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [b]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [w]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [t]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [r]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [l]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [u]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [c]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [d]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [v]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [b]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [w]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [s]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [s]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [s]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", X]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: W()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", X]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: W()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", X]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [x]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [x]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [x]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Yn, X]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [N]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [N]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [S]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [S]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", X]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", X]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": F()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": F()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": F()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": F()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": F()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": F()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": F()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": F()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": F()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": F()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": F()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": F()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": F()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": F()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": F()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": F()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": F()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": F()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", X]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [gt, Rt, ci]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, Lp = /* @__PURE__ */ bp(Pp);
function P(...e) {
  return Lp(Lo(e));
}
const Dp = te(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        success: "bg-success text-success-foreground hover:bg-success/90",
        outline: "border-2 border-primary/60 bg-background text-primary hover:bg-primary/10 hover:border-primary dark:border-primary/50 dark:text-primary dark:hover:bg-primary/20",
        "outline-muted": "border border-border bg-background text-foreground hover:bg-muted",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 dark:bg-secondary dark:text-secondary-foreground",
        ghost: "text-foreground hover:bg-muted",
        "icon-ghost": "text-muted-foreground hover:text-foreground transition-colors bg-transparent hover:bg-transparent p-0",
        toggle: "text-muted-foreground hover:text-foreground hover:bg-muted/50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
        link: "text-primary underline-offset-4 hover:underline",
        // Gradient variants - use theme colors via CSS
        "gradient-purple": "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-md hover:shadow-lg transition-all",
        "gradient-success": "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-md hover:shadow-lg transition-all"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-lg px-3 py-1.5",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), ce = E.forwardRef(
  ({ className: e, variant: n, size: t, isLoading: r, loadingText: o, children: i, disabled: s, ...a }, l) => /* @__PURE__ */ _(
    "button",
    {
      className: P(Dp({ variant: n, size: t, className: e })),
      ref: l,
      disabled: s ?? r,
      "aria-busy": r,
      ...a,
      children: r ? /* @__PURE__ */ D(Xe, { children: [
        /* @__PURE__ */ _(Qu, { className: "mr-2 h-4 w-4 animate-spin", "aria-hidden": "true" }),
        /* @__PURE__ */ _("span", { children: o ?? i })
      ] }) : i
    }
  )
);
ce.displayName = "Button";
const zp = E.forwardRef(
  ({ loading: e = !1, loadingText: n, children: t, ...r }, o) => {
    const i = {
      ...r,
      isLoading: e,
      ...n && { loadingText: n }
    };
    return /* @__PURE__ */ _(ce, { ref: o, ...i, children: t });
  }
);
zp.displayName = "LoadingButton";
function CS({
  onCancel: e,
  onConfirm: n,
  cancelText: t = "Cancel",
  confirmText: r = "Confirm",
  confirmDisabled: o = !1,
  confirmLoading: i = !1,
  confirmLoadingText: s,
  confirmVariant: a = "default",
  cancelVariant: l = "outline",
  className: u,
  buttonContainerClassName: c,
  children: d,
  confirmType: f = "button",
  hideCancelButton: p = !1
}) {
  return /* @__PURE__ */ D(
    "div",
    {
      className: P(
        "flex items-center justify-between gap-3 border-t border-slate-200 bg-slate-50 px-6 py-4 dark:border-slate-800 dark:bg-slate-900/50",
        u
      ),
      children: [
        d && /* @__PURE__ */ _("div", { className: "flex-1", children: d }),
        /* @__PURE__ */ D(
          "div",
          {
            className: P("flex items-center gap-3", !d && "ml-auto", c),
            children: [
              !p && /* @__PURE__ */ _(ce, { type: "button", onClick: e, variant: l, children: t }),
              /* @__PURE__ */ _(
                ce,
                {
                  type: f,
                  onClick: n,
                  variant: a,
                  disabled: o || i,
                  isLoading: i,
                  ...s && { loadingText: s },
                  children: r
                }
              )
            ]
          }
        )
      ]
    }
  );
}
function kS({
  value: e,
  onChange: n,
  options: t,
  className: r,
  size: o = "icon"
}) {
  return /* @__PURE__ */ _(
    "div",
    {
      className: P(
        "flex items-center gap-1 rounded-lg bg-slate-200 p-1 dark:bg-slate-700",
        r
      ),
      role: "group",
      "aria-label": "View mode toggle",
      children: t.map((i) => /* @__PURE__ */ _(
        ce,
        {
          variant: e === i.value ? "default" : "ghost",
          size: o,
          onClick: () => {
            n(i.value);
          },
          title: i.label,
          "aria-label": i.label,
          "aria-pressed": e === i.value,
          children: i.icon
        },
        i.value
      ))
    }
  );
}
const Bp = te(
  "flex w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-input",
        error: "border-destructive focus-visible:ring-destructive"
      },
      inputSize: {
        default: "h-10",
        sm: "h-9 px-2 text-xs",
        lg: "h-11 px-4"
      }
    },
    defaultVariants: {
      variant: "default",
      inputSize: "default"
    }
  }
), Vp = te(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  {
    variants: {
      variant: {
        default: "text-foreground",
        error: "text-destructive"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), lc = E.forwardRef(
  ({ className: e, variant: n, inputSize: t, label: r, error: o, helperText: i, id: s, type: a = "text", ...l }, u) => {
    const c = E.useId(), d = s ?? c, f = `${d}-error`, p = `${d}-helper`, g = !!o, h = g ? "error" : n;
    return /* @__PURE__ */ D("div", { className: "flex flex-col gap-1.5", children: [
      r && /* @__PURE__ */ _("label", { htmlFor: d, className: P(Vp({ variant: h })), children: r }),
      /* @__PURE__ */ _(
        "input",
        {
          type: a,
          id: d,
          className: P(Bp({ variant: h, inputSize: t, className: e })),
          ref: u,
          "aria-invalid": g,
          "aria-describedby": g ? f : i ? p : void 0,
          ...l
        }
      ),
      g && /* @__PURE__ */ _("p", { id: f, className: "text-destructive text-sm", role: "alert", children: o }),
      !g && i && /* @__PURE__ */ _("p", { id: p, className: "text-muted-foreground text-sm", children: i })
    ] });
  }
);
lc.displayName = "Input";
const jp = te(
  "flex w-full items-center justify-between rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
  {
    variants: {
      variant: {
        default: "border-input",
        error: "border-destructive focus:ring-destructive"
      },
      selectSize: {
        default: "h-10",
        sm: "h-9 px-2 text-xs",
        lg: "h-11 px-4"
      }
    },
    defaultVariants: {
      variant: "default",
      selectSize: "default"
    }
  }
), Up = te(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  {
    variants: {
      variant: {
        default: "text-foreground",
        error: "text-destructive"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), Gp = E.forwardRef(
  ({
    className: e,
    variant: n,
    selectSize: t,
    options: r,
    label: o,
    placeholder: i,
    error: s,
    helperText: a,
    id: l,
    children: u,
    ...c
  }, d) => {
    const f = E.useId(), p = l ?? f, g = `${p}-error`, h = `${p}-helper`, m = !!s, v = m ? "error" : n, y = () => u || (r ? /* @__PURE__ */ D(Xe, { children: [
      i && /* @__PURE__ */ _("option", { value: "", disabled: !0, children: i }),
      r.map((b) => /* @__PURE__ */ _("option", { value: b.value, disabled: b.disabled, children: b.label }, b.value))
    ] }) : null);
    return /* @__PURE__ */ D("div", { className: "flex flex-col gap-1.5", children: [
      o && /* @__PURE__ */ _("label", { htmlFor: p, className: P(Up({ variant: v })), children: o }),
      /* @__PURE__ */ D("div", { className: "relative", children: [
        /* @__PURE__ */ _(
          "select",
          {
            id: p,
            className: P(
              jp({ variant: v, selectSize: t, className: e }),
              "cursor-pointer appearance-none pr-10",
              // Ensure dropdown options have proper background/text colors
              "[&>option]:bg-background [&>option]:text-foreground"
            ),
            ref: d,
            "aria-invalid": m,
            "aria-describedby": m ? g : a ? h : void 0,
            ...c,
            children: y()
          }
        ),
        /* @__PURE__ */ _(
          Os,
          {
            className: "text-muted-foreground pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2",
            "aria-hidden": "true"
          }
        )
      ] }),
      m && /* @__PURE__ */ _("p", { id: g, className: "text-destructive text-sm", role: "alert", children: s }),
      !m && a && /* @__PURE__ */ _("p", { id: h, className: "text-muted-foreground text-sm", children: a })
    ] });
  }
);
Gp.displayName = "Select";
const Hp = te("rounded-lg border bg-card text-card-foreground", {
  variants: {
    variant: {
      default: "shadow-sm",
      outline: "shadow-none",
      elevated: "shadow-md",
      ghost: "border-transparent shadow-none"
    },
    padding: {
      default: "",
      none: "",
      sm: "",
      lg: ""
    }
  },
  defaultVariants: {
    variant: "default",
    padding: "default"
  }
}), uc = E.forwardRef(
  ({ className: e, variant: n, ...t }, r) => /* @__PURE__ */ _("div", { ref: r, className: P(Hp({ variant: n, className: e })), ...t })
);
uc.displayName = "Card";
const Wp = E.forwardRef(
  ({ className: e, ...n }, t) => /* @__PURE__ */ _("div", { ref: t, className: P("flex flex-col space-y-1.5 p-6", e), ...n })
);
Wp.displayName = "CardHeader";
const Kp = E.forwardRef(
  ({ className: e, as: n = "h3", ...t }, r) => /* @__PURE__ */ _(
    n,
    {
      ref: r,
      className: P("text-2xl leading-none font-semibold tracking-tight", e),
      ...t
    }
  )
);
Kp.displayName = "CardTitle";
const qp = E.forwardRef(
  ({ className: e, ...n }, t) => /* @__PURE__ */ _("p", { ref: t, className: P("text-muted-foreground text-sm", e), ...n })
);
qp.displayName = "CardDescription";
const Zp = E.forwardRef(
  ({ className: e, ...n }, t) => /* @__PURE__ */ _("div", { ref: t, className: P("p-6 pt-0", e), ...n })
);
Zp.displayName = "CardContent";
const Jp = E.forwardRef(
  ({ className: e, ...n }, t) => /* @__PURE__ */ _("div", { ref: t, className: P("flex items-center p-6 pt-0", e), ...n })
);
Jp.displayName = "CardFooter";
const Yp = te(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        destructive: "border-transparent bg-destructive text-destructive-foreground",
        success: "border-transparent bg-success text-success-foreground",
        warning: "border-transparent bg-warning text-warning-foreground",
        info: "border-transparent bg-info text-info-foreground",
        outline: "border-border bg-muted text-muted-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), cc = E.forwardRef(
  ({ className: e, variant: n, ...t }, r) => /* @__PURE__ */ _("div", { ref: r, className: P(Yp({ variant: n }), e), ...t })
);
cc.displayName = "Badge";
const Xp = te("animate-spin text-muted-foreground", {
  variants: {
    size: {
      sm: "h-4 w-4",
      default: "h-6 w-6",
      lg: "h-8 w-8",
      xl: "h-12 w-12"
    }
  },
  defaultVariants: {
    size: "default"
  }
}), dc = E.forwardRef(
  ({ className: e, size: n, label: t = "Loading...", ...r }, o) => /* @__PURE__ */ _(
    Qu,
    {
      ref: o,
      className: P(Xp({ size: n, className: e })),
      "aria-label": t,
      role: "status",
      ...r
    }
  )
);
dc.displayName = "Spinner";
const Qp = E.forwardRef(
  ({ className: e, size: n = "default", message: t, fullScreen: r = !1, ...o }, i) => /* @__PURE__ */ _(
    "div",
    {
      ref: i,
      className: P(r ? "fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm" : "flex items-center justify-center p-4", e),
      role: "status",
      "aria-busy": "true",
      ...o,
      children: /* @__PURE__ */ D("div", { className: "flex flex-col items-center gap-2", children: [
        /* @__PURE__ */ _(dc, { size: n, label: t ?? "Loading..." }),
        t && /* @__PURE__ */ _("p", { className: "text-muted-foreground text-sm", children: t })
      ] })
    }
  )
);
Qp.displayName = "Loading";
const eh = te("animate-pulse rounded-md bg-muted", {
  variants: {
    variant: {
      default: "",
      text: "h-4 w-full",
      title: "h-6 w-3/4",
      avatar: "h-10 w-10 rounded-full",
      thumbnail: "h-24 w-24",
      card: "h-32 w-full"
    }
  },
  defaultVariants: {
    variant: "default"
  }
}), th = E.forwardRef(
  ({ className: e, variant: n, ...t }, r) => /* @__PURE__ */ _(
    "div",
    {
      ref: r,
      className: P(eh({ variant: n, className: e })),
      "aria-hidden": "true",
      ...t
    }
  )
);
th.displayName = "Skeleton";
const nh = te(
  "inline-flex items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
  {
    variants: {
      variant: {
        default: "",
        underline: "bg-transparent rounded-none border-b border-border p-0 gap-2"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), rh = te(
  "inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "rounded-sm data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
        underline: "rounded-none border-b-2 border-transparent pb-3 pt-2 data-[state=active]:border-primary data-[state=active]:text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), fc = E.createContext(null);
function $s() {
  const e = E.useContext(fc);
  if (!e)
    throw new Error("Tabs components must be used within a Tabs provider");
  return e;
}
const oh = E.forwardRef(
  ({ className: e, defaultValue: n, value: t, onValueChange: r, variant: o = "default", children: i, ...s }, a) => {
    const [l, u] = E.useState(n), c = t ?? l, d = E.useCallback(
      (f) => {
        t === void 0 && u(f), r == null || r(f);
      },
      [t, r]
    );
    return /* @__PURE__ */ _(fc.Provider, { value: { activeTab: c, setActiveTab: d, variant: o ?? "default" }, children: /* @__PURE__ */ _("div", { ref: a, className: P("w-full", e), ...s, children: i }) });
  }
);
oh.displayName = "Tabs";
const ih = E.forwardRef(({ className: e, ...n }, t) => {
  const { variant: r } = $s();
  return /* @__PURE__ */ _(
    "div",
    {
      ref: t,
      role: "tablist",
      className: P(nh({ variant: r, className: e })),
      ...n
    }
  );
});
ih.displayName = "TabsList";
const sh = E.forwardRef(
  ({ className: e, value: n, children: t, disabled: r, ...o }, i) => {
    const { activeTab: s, setActiveTab: a, variant: l } = $s(), u = s === n, c = `tabpanel-${n}`, d = `tab-${n}`;
    return /* @__PURE__ */ _(
      "button",
      {
        ref: i,
        type: "button",
        role: "tab",
        id: d,
        "aria-selected": u,
        "aria-controls": c,
        "data-state": u ? "active" : "inactive",
        disabled: r,
        className: P(rh({ variant: l, className: e })),
        onClick: () => {
          a(n);
        },
        tabIndex: u ? 0 : -1,
        ...o,
        children: t
      }
    );
  }
);
sh.displayName = "TabsTrigger";
const ah = E.forwardRef(
  ({ className: e, value: n, forceMount: t = !1, children: r, ...o }, i) => {
    const { activeTab: s } = $s(), a = s === n, l = `tabpanel-${n}`, u = `tab-${n}`;
    return !a && !t ? null : /* @__PURE__ */ _(
      "div",
      {
        ref: i,
        role: "tabpanel",
        id: l,
        "aria-labelledby": u,
        hidden: !a,
        tabIndex: 0,
        className: P(
          "ring-offset-background focus-visible:ring-ring mt-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
          !a && "hidden",
          e
        ),
        ...o,
        children: r
      }
    );
  }
);
ah.displayName = "TabsContent";
var gc = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Pa = ye.createContext && /* @__PURE__ */ ye.createContext(gc), lh = ["attr", "size", "title"];
function uh(e, n) {
  if (e == null) return {};
  var t = ch(e, n), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (t[r] = e[r]);
  }
  return t;
}
function ch(e, n) {
  if (e == null) return {};
  var t = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (n.indexOf(r) >= 0) continue;
      t[r] = e[r];
    }
  return t;
}
function uo() {
  return uo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, uo.apply(this, arguments);
}
function La(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function co(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? La(Object(t), !0).forEach(function(r) {
      dh(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : La(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function dh(e, n, t) {
  return n = fh(n), n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
function fh(e) {
  var n = gh(e, "string");
  return typeof n == "symbol" ? n : n + "";
}
function gh(e, n) {
  if (typeof e != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(e, n);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function pc(e) {
  return e && e.map((n, t) => /* @__PURE__ */ ye.createElement(n.tag, co({
    key: t
  }, n.attr), pc(n.child)));
}
function Bn(e) {
  return (n) => /* @__PURE__ */ ye.createElement(ph, uo({
    attr: co({}, e.attr)
  }, n), pc(e.child));
}
function ph(e) {
  var n = (t) => {
    var {
      attr: r,
      size: o,
      title: i
    } = e, s = uh(e, lh), a = o || t.size || "1em", l;
    return t.className && (l = t.className), e.className && (l = (l ? l + " " : "") + e.className), /* @__PURE__ */ ye.createElement("svg", uo({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, r, s, {
      className: l,
      style: co(co({
        color: e.color || t.color
      }, t.style), e.style),
      height: a,
      width: a,
      xmlns: "http://www.w3.org/2000/svg"
    }), i && /* @__PURE__ */ ye.createElement("title", null, i), e.children);
  };
  return Pa !== void 0 ? /* @__PURE__ */ ye.createElement(Pa.Consumer, null, (t) => n(t)) : n(gc);
}
function hh(e) {
  return Bn({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" }, child: [] }] })(e);
}
function hc(e) {
  return Bn({ attr: { viewBox: "0 0 320 512" }, child: [{ tag: "path", attr: { d: "M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" }, child: [] }] })(e);
}
function mh(e) {
  return Bn({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" }, child: [] }] })(e);
}
function yh(e) {
  return Bn({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" }, child: [] }] })(e);
}
function bh(e) {
  return Bn({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z" }, child: [] }] })(e);
}
function vh(e) {
  return Bn({ attr: { viewBox: "0 0 352 512" }, child: [{ tag: "path", attr: { d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" }, child: [] }] })(e);
}
const xh = te(
  "flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground",
  {
    variants: {
      size: {
        sm: "text-xs gap-1",
        md: "text-sm gap-1.5",
        lg: "text-base gap-2"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
), _h = te("inline-flex items-center gap-1.5 transition-all duration-200", {
  variants: {
    variant: {
      default: "hover:text-foreground",
      ghost: "hover:text-foreground/80"
    },
    size: {
      sm: "text-xs gap-1",
      md: "text-sm gap-1.5",
      lg: "text-base gap-2"
    },
    current: {
      // Enhanced: Better visual hierarchy for current page
      true: "font-semibold text-foreground pointer-events-none",
      false: ""
    }
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    current: !1
  }
}), Da = te(
  // Link-style hover: underline on hover, no background (navigation links, not buttons)
  "transition-colors duration-200 hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "text-muted-foreground hover:text-foreground",
        ghost: "text-muted-foreground/80 hover:text-foreground/90"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), wh = te(
  // Enhanced: Better visibility in dark mode
  "flex items-center text-muted-foreground/50",
  {
    variants: {
      size: {
        sm: "text-[10px]",
        md: "text-xs",
        lg: "text-sm"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
), mc = E.forwardRef(
  ({
    items: e,
    separator: n = /* @__PURE__ */ _(hc, {}),
    maxItems: t,
    size: r,
    variant: o = "default",
    LinkComponent: i,
    mobileMaxItems: s = 2,
    className: a,
    ...l
  }, u) => {
    const [c, d] = E.useState(!1);
    E.useEffect(() => {
      const p = () => {
        d(window.innerWidth < 640);
      };
      return p(), window.addEventListener("resize", p), () => {
        window.removeEventListener("resize", p);
      };
    }, []);
    const f = E.useMemo(() => {
      const p = c && s > 0 ? s : t;
      if (!p || e.length <= p)
        return e;
      if (p === 1)
        return [e[e.length - 1]];
      if (p === 2)
        return [e[0], e[e.length - 1]];
      const g = e[0], h = p - 2, m = e.slice(-h);
      return [
        g,
        { label: "..." },
        // Ellipsis placeholder
        ...m
      ];
    }, [e, t, s, c]);
    return /* @__PURE__ */ _(
      "nav",
      {
        ref: u,
        "aria-label": "Breadcrumb",
        className: P(xh({ size: r }), a),
        ...l,
        children: /* @__PURE__ */ _("ol", { className: "flex list-none flex-wrap items-center gap-1.5", children: f.map((p, g) => {
          if (!p) return null;
          const h = g === f.length - 1, m = h && !p.href, v = p.label === "...";
          return /* @__PURE__ */ D(E.Fragment, { children: [
            /* @__PURE__ */ _(
              "li",
              {
                className: P(
                  _h({
                    variant: o,
                    size: r,
                    current: m
                  })
                ),
                children: v ? /* @__PURE__ */ _("span", { className: "px-1", children: p.label }) : p.href && !m ? i ? /* @__PURE__ */ D(
                  i,
                  {
                    to: p.href,
                    className: P(
                      Da({ variant: o }),
                      "inline-flex items-center gap-1.5"
                    ),
                    children: [
                      p.icon && /* @__PURE__ */ _("span", { className: "inline-flex items-center", "aria-hidden": "true", children: p.icon }),
                      /* @__PURE__ */ _("span", { children: p.label })
                    ]
                  }
                ) : /* @__PURE__ */ D(
                  "a",
                  {
                    href: p.href,
                    onClick: p.onClick,
                    className: P(
                      Da({ variant: o }),
                      "inline-flex items-center gap-1.5"
                    ),
                    children: [
                      p.icon && /* @__PURE__ */ _("span", { className: "inline-flex items-center", "aria-hidden": "true", children: p.icon }),
                      /* @__PURE__ */ _("span", { children: p.label })
                    ]
                  }
                ) : /* @__PURE__ */ D("span", { className: "inline-flex items-center gap-1.5", children: [
                  p.icon && /* @__PURE__ */ _("span", { className: "inline-flex items-center", "aria-hidden": "true", children: p.icon }),
                  /* @__PURE__ */ _("span", { "aria-current": m ? "page" : void 0, children: p.label })
                ] })
              }
            ),
            !h && /* @__PURE__ */ _("li", { className: P(wh({ size: r })), "aria-hidden": "true", children: n })
          ] }, `${p.label}-${String(g)}`);
        }) })
      }
    );
  }
);
mc.displayName = "Breadcrumb";
const Sh = te("w-full", {
  variants: {
    variant: {
      default: "bg-background border-b border-border",
      transparent: "bg-transparent",
      elevated: "bg-background shadow-sm"
    },
    sticky: {
      true: "sticky top-0 z-10",
      false: ""
    }
  },
  defaultVariants: {
    variant: "default",
    sticky: !1
  }
}), Ch = {
  default: "text-foreground",
  success: "text-green-600 dark:text-green-400",
  warning: "text-yellow-600 dark:text-yellow-400",
  destructive: "text-red-600 dark:text-red-400"
}, kh = E.forwardRef(
  ({
    className: e,
    variant: n,
    sticky: t,
    title: r,
    description: o,
    icon: i,
    breadcrumbs: s,
    actions: a,
    stats: l,
    showHomeInBreadcrumbs: u = !0,
    breadcrumbSeparator: c,
    ...d
  }, f) => {
    const p = E.useMemo(() => {
      if (!s) return [];
      const g = s.map((h) => {
        const m = h.icon, v = {
          label: h.label,
          icon: m ? /* @__PURE__ */ _(m, { className: "h-4 w-4" }) : void 0
        };
        return h.href && (v.href = h.href), v;
      });
      return u ? [
        {
          label: "Home",
          href: "/",
          icon: /* @__PURE__ */ _(ep, { className: "h-4 w-4", "aria-label": "Home" })
        },
        ...g
      ] : g;
    }, [s, u]);
    return /* @__PURE__ */ _(
      "header",
      {
        ref: f,
        className: P(Sh({ variant: n, sticky: t, className: e })),
        ...d,
        children: /* @__PURE__ */ D("div", { className: "px-4 py-4 sm:px-6 sm:py-6", children: [
          s && s.length > 0 && /* @__PURE__ */ _("div", { className: "mb-3", children: /* @__PURE__ */ _(
            mc,
            {
              items: p,
              separator: c,
              className: "text-muted-foreground"
            }
          ) }),
          /* @__PURE__ */ D("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", children: [
            /* @__PURE__ */ D("div", { className: "flex items-center gap-3", children: [
              i && /* @__PURE__ */ _("div", { className: "bg-primary/10 text-primary flex-shrink-0 rounded-lg p-2", children: /* @__PURE__ */ _(i, { className: "h-6 w-6", "aria-hidden": "true" }) }),
              /* @__PURE__ */ D("div", { children: [
                /* @__PURE__ */ _("h1", { className: "text-foreground text-2xl font-semibold", children: r }),
                o && /* @__PURE__ */ _("p", { className: "text-muted-foreground mt-1 text-sm", children: o })
              ] })
            ] }),
            a && /* @__PURE__ */ _("div", { className: "flex flex-shrink-0 items-center gap-2", children: a })
          ] }),
          l && l.length > 0 && /* @__PURE__ */ _("div", { className: "border-border mt-4 border-t pt-4", children: /* @__PURE__ */ _("dl", { className: "grid grid-cols-2 gap-4 sm:grid-cols-4", children: l.map((g, h) => {
            const m = g.icon;
            return /* @__PURE__ */ D("div", { className: "flex items-center gap-2", children: [
              m && /* @__PURE__ */ _("div", { className: "bg-muted flex-shrink-0 rounded-md p-1.5", children: /* @__PURE__ */ _(m, { className: "text-muted-foreground h-4 w-4", "aria-hidden": "true" }) }),
              /* @__PURE__ */ D("div", { children: [
                /* @__PURE__ */ _("dt", { className: "text-muted-foreground text-xs", children: g.label }),
                /* @__PURE__ */ _(
                  "dd",
                  {
                    className: P(
                      "text-lg font-semibold",
                      Ch[g.color ?? "default"]
                    ),
                    children: g.value
                  }
                )
              ] })
            ] }, h);
          }) }) })
        ] })
      }
    );
  }
);
kh.displayName = "PageHeader";
const Eh = te(
  "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
  {
    variants: {},
    defaultVariants: {}
  }
), Nh = te(
  "fixed left-[50%] top-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] gap-4 border border-border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
  {
    variants: {
      size: {
        sm: "max-w-sm",
        default: "max-w-lg",
        lg: "max-w-2xl",
        xl: "max-w-4xl",
        full: "max-w-[calc(100%-2rem)] max-h-[calc(100%-2rem)]"
      }
    },
    defaultVariants: {
      size: "default"
    }
  }
), yc = E.createContext(void 0);
function Do() {
  const e = E.useContext(yc);
  if (!e)
    throw new Error("Dialog components must be used within a Dialog");
  return e;
}
function Rh({
  open: e,
  defaultOpen: n = !1,
  onOpenChange: t,
  children: r
}) {
  const [o, i] = E.useState(n), s = e !== void 0, a = s ? e : o, l = E.useCallback(
    (u) => {
      s || i(u), t == null || t(u);
    },
    [s, t]
  );
  return /* @__PURE__ */ _(yc.Provider, { value: { open: a, onOpenChange: l }, children: r });
}
const Ah = E.forwardRef(
  ({ asChild: e = !1, onClick: n, children: t, ...r }, o) => {
    const { onOpenChange: i } = Do(), s = (a) => {
      n == null || n(a), i(!0);
    };
    return e && E.isValidElement(t) ? E.cloneElement(
      t,
      {
        onClick: (a) => {
          var l, u;
          (u = (l = t.props).onClick) == null || u.call(
            l,
            a
          ), i(!0);
        }
      }
    ) : /* @__PURE__ */ _("button", { ref: o, type: "button", onClick: s, ...r, children: t });
  }
);
Ah.displayName = "DialogTrigger";
function Th({ children: e, container: n }) {
  const [t, r] = E.useState(!1);
  if (E.useEffect(() => (r(!0), () => {
    r(!1);
  }), []), !t) return null;
  const o = n ?? document.body;
  return /* @__PURE__ */ _(Xe, { children: E.Children.map(
    e,
    (i) => o ? qu(i, o) : i
  ) });
}
const bc = E.forwardRef(
  ({ className: e, ...n }, t) => {
    const { open: r } = Do();
    return /* @__PURE__ */ _(
      "div",
      {
        ref: t,
        "data-state": r ? "open" : "closed",
        className: P(Eh(), e),
        ...n
      }
    );
  }
);
bc.displayName = "DialogOverlay";
const vc = E.forwardRef(
  ({
    className: e,
    children: n,
    size: t,
    closeOnOverlayClick: r = !0,
    closeOnEscape: o = !0,
    showCloseButton: i = !0,
    onClose: s,
    container: a,
    ...l
  }, u) => {
    const { open: c, onOpenChange: d } = Do(), f = E.useRef(null), p = E.useRef(null);
    E.useImperativeHandle(u, () => {
      if (!f.current)
        throw new Error("Content ref is not attached");
      return f.current;
    });
    const g = E.useCallback(() => {
      d(!1), s == null || s();
    }, [d, s]);
    return E.useEffect(() => {
      if (!c || !o) return;
      const h = (m) => {
        m.key === "Escape" && (m.preventDefault(), g());
      };
      return document.addEventListener("keydown", h), () => {
        document.removeEventListener("keydown", h);
      };
    }, [c, o, g]), E.useEffect(() => {
      var y;
      if (!c) return;
      p.current = document.activeElement;
      const h = (y = f.current) == null ? void 0 : y.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ), m = h == null ? void 0 : h[0];
      m == null || m.focus();
      const v = document.body.style.overflow;
      return document.body.style.overflow = "hidden", () => {
        var b;
        document.body.style.overflow = v, (b = p.current) == null || b.focus();
      };
    }, [c]), E.useEffect(() => {
      if (!c) return;
      const h = (m) => {
        var x;
        if (m.key !== "Tab") return;
        const v = (x = f.current) == null ? void 0 : x.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!(v != null && v.length)) return;
        const y = v[0], b = v[v.length - 1];
        m.shiftKey ? document.activeElement === y && (m.preventDefault(), b.focus()) : document.activeElement === b && (m.preventDefault(), y.focus());
      };
      return document.addEventListener("keydown", h), () => {
        document.removeEventListener("keydown", h);
      };
    }, [c]), c ? /* @__PURE__ */ D(Th, { container: a, children: [
      /* @__PURE__ */ _(bc, { onClick: r ? g : void 0 }),
      /* @__PURE__ */ D(
        "div",
        {
          ref: f,
          role: "dialog",
          "aria-modal": "true",
          "data-state": c ? "open" : "closed",
          className: P(Nh({ size: t }), e),
          onClick: (h) => {
            h.stopPropagation();
          },
          ...l,
          children: [
            n,
            i && /* @__PURE__ */ _(
              "button",
              {
                type: "button",
                onClick: g,
                className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none",
                "aria-label": "Close",
                children: /* @__PURE__ */ _(nc, { className: "h-4 w-4" })
              }
            )
          ]
        }
      )
    ] }) : null;
  }
);
vc.displayName = "DialogContent";
const xc = E.forwardRef(
  ({ className: e, ...n }, t) => /* @__PURE__ */ _(
    "div",
    {
      ref: t,
      className: P("flex flex-col space-y-1.5 text-center sm:text-left", e),
      ...n
    }
  )
);
xc.displayName = "DialogHeader";
const _c = E.forwardRef(
  ({ className: e, ...n }, t) => /* @__PURE__ */ _(
    "div",
    {
      ref: t,
      className: P("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e),
      ...n
    }
  )
);
_c.displayName = "DialogFooter";
const wc = E.forwardRef(
  ({ className: e, ...n }, t) => /* @__PURE__ */ _(
    "h2",
    {
      ref: t,
      className: P("text-foreground text-lg leading-none font-semibold tracking-tight", e),
      ...n
    }
  )
);
wc.displayName = "DialogTitle";
const Sc = E.forwardRef(
  ({ className: e, ...n }, t) => /* @__PURE__ */ _("p", { ref: t, className: P("text-muted-foreground text-sm", e), ...n })
);
Sc.displayName = "DialogDescription";
const Fh = E.forwardRef(
  ({ asChild: e = !1, onClick: n, children: t, ...r }, o) => {
    const { onOpenChange: i } = Do(), s = (a) => {
      n == null || n(a), i(!1);
    };
    return e && E.isValidElement(t) ? E.cloneElement(
      t,
      {
        onClick: (a) => {
          var l, u;
          (u = (l = t.props).onClick) == null || u.call(
            l,
            a
          ), i(!1);
        }
      }
    ) : /* @__PURE__ */ _("button", { ref: o, type: "button", onClick: s, ...r, children: t });
  }
);
Fh.displayName = "DialogClose";
const Ih = te(
  "peer h-4 w-4 shrink-0 rounded border border-input ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground data-[state=indeterminate]:border-primary",
        destructive: "data-[state=checked]:bg-destructive data-[state=checked]:text-destructive-foreground data-[state=checked]:border-destructive data-[state=indeterminate]:bg-destructive data-[state=indeterminate]:text-destructive-foreground data-[state=indeterminate]:border-destructive",
        success: "data-[state=checked]:bg-green-600 data-[state=checked]:text-white data-[state=checked]:border-green-600 dark:data-[state=checked]:bg-green-500 data-[state=indeterminate]:bg-green-600 data-[state=indeterminate]:text-white data-[state=indeterminate]:border-green-600"
      },
      size: {
        sm: "h-3.5 w-3.5",
        default: "h-4 w-4",
        lg: "h-5 w-5"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Oh = {
  sm: "h-3 w-3",
  default: "h-3.5 w-3.5",
  lg: "h-4 w-4"
}, Mh = E.forwardRef(
  ({
    className: e,
    variant: n,
    size: t,
    checked: r,
    defaultChecked: o,
    onCheckedChange: i,
    indeterminate: s = !1,
    label: a,
    description: l,
    error: u,
    required: c,
    disabled: d,
    id: f,
    ...p
  }, g) => {
    const h = E.useRef(null), [m, v] = E.useState(o ?? !1), y = E.useId();
    E.useImperativeHandle(g, () => {
      if (!h.current)
        throw new Error("Input ref is not attached");
      return h.current;
    });
    const b = r !== void 0, x = b ? r : m;
    E.useEffect(() => {
      h.current && (h.current.indeterminate = s);
    }, [s]);
    const w = () => s ? "indeterminate" : x ? "checked" : "unchecked", S = (C) => {
      const R = C.target.checked;
      b || v(R), i == null || i(R);
    }, k = f ?? y, N = Oh[t ?? "default"];
    return /* @__PURE__ */ D("div", { className: "flex items-start gap-2", children: [
      /* @__PURE__ */ D("div", { className: "relative flex items-center justify-center", children: [
        /* @__PURE__ */ _(
          "input",
          {
            ref: h,
            type: "checkbox",
            id: k,
            checked: x,
            onChange: S,
            disabled: d,
            required: c,
            className: "sr-only",
            "aria-invalid": u ? "true" : void 0,
            "aria-describedby": l || u ? `${k}-description` : void 0,
            ...p
          }
        ),
        /* @__PURE__ */ _(
          "div",
          {
            "data-state": w(),
            className: P(
              Ih({ variant: n, size: t }),
              "flex cursor-pointer items-center justify-center",
              d && "cursor-not-allowed",
              u && "border-destructive",
              e
            ),
            onClick: () => {
              !d && h.current && h.current.click();
            },
            role: "presentation",
            children: s ? /* @__PURE__ */ _(rp, { className: N, "aria-hidden": "true" }) : x ? /* @__PURE__ */ _(Ui, { className: N, "aria-hidden": "true" }) : null
          }
        )
      ] }),
      (a || l || u) && /* @__PURE__ */ D("div", { className: "flex flex-col", children: [
        a && /* @__PURE__ */ D(
          "label",
          {
            htmlFor: k,
            className: P(
              "cursor-pointer text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
              d && "cursor-not-allowed opacity-70"
            ),
            children: [
              a,
              c && /* @__PURE__ */ _("span", { className: "text-destructive ml-1", children: "*" })
            ]
          }
        ),
        (l || u) && /* @__PURE__ */ _(
          "p",
          {
            id: `${k}-description`,
            className: P(
              "text-sm",
              u ? "text-destructive" : "text-muted-foreground",
              a && "mt-1"
            ),
            children: u || l
          }
        )
      ] })
    ] });
  }
);
Mh.displayName = "Checkbox";
const $h = E.forwardRef(
  ({
    label: e,
    description: n,
    error: t,
    required: r,
    children: o,
    className: i,
    orientation: s = "vertical",
    ...a
  }, l) => /* @__PURE__ */ D(
    "fieldset",
    {
      ref: l,
      className: P("space-y-2", i),
      "aria-describedby": n || t ? "checkbox-group-description" : void 0,
      ...a,
      children: [
        e && /* @__PURE__ */ D("legend", { className: "text-sm leading-none font-medium", children: [
          e,
          r && /* @__PURE__ */ _("span", { className: "text-destructive ml-1", children: "*" })
        ] }),
        n && !t && /* @__PURE__ */ _("p", { id: "checkbox-group-description", className: "text-muted-foreground text-sm", children: n }),
        /* @__PURE__ */ _(
          "div",
          {
            className: P(
              "flex gap-4",
              s === "vertical" ? "flex-col" : "flex-row flex-wrap"
            ),
            children: o
          }
        ),
        t && /* @__PURE__ */ _("p", { id: "checkbox-group-description", className: "text-destructive text-sm", children: t })
      ]
    }
  )
);
$h.displayName = "CheckboxGroup";
const Ph = te(
  "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        destructive: "data-[state=checked]:bg-destructive data-[state=unchecked]:bg-input",
        success: "data-[state=checked]:bg-green-600 dark:data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-input",
        warning: "data-[state=checked]:bg-yellow-600 dark:data-[state=checked]:bg-yellow-500 data-[state=unchecked]:bg-input"
      },
      size: {
        sm: "h-4 w-7",
        default: "h-5 w-9",
        lg: "h-6 w-11"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Lh = te(
  "pointer-events-none block rounded-full bg-background shadow-lg ring-0 transition-transform",
  {
    variants: {
      size: {
        sm: "h-3 w-3 data-[state=checked]:translate-x-3 data-[state=unchecked]:translate-x-0",
        default: "h-4 w-4 data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
        lg: "h-5 w-5 data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
      }
    },
    defaultVariants: {
      size: "default"
    }
  }
), Dh = E.forwardRef(
  ({
    className: e,
    variant: n,
    size: t,
    checked: r,
    defaultChecked: o = !1,
    onCheckedChange: i,
    label: s,
    description: a,
    labelPosition: l = "right",
    disabled: u,
    required: c,
    name: d,
    value: f,
    id: p,
    ...g
  }, h) => {
    const [m, v] = E.useState(o), y = E.useId(), b = r !== void 0, x = b ? r : m, w = () => {
      if (u) return;
      const F = !x;
      b || v(F), i == null || i(F);
    }, S = (F) => {
      (F.key === " " || F.key === "Enter") && (F.preventDefault(), w());
    }, k = p ?? y, N = x ? "checked" : "unchecked", C = /* @__PURE__ */ _(
      "button",
      {
        ref: h,
        type: "button",
        role: "switch",
        id: k,
        "aria-checked": x,
        "aria-required": c,
        "aria-describedby": a ? `${k}-description` : void 0,
        "data-state": N,
        disabled: u,
        onClick: w,
        onKeyDown: S,
        className: P(Ph({ variant: n, size: t }), e),
        ...g,
        children: /* @__PURE__ */ _("span", { "data-state": N, className: P(Lh({ size: t })) })
      }
    ), R = d ? /* @__PURE__ */ _(
      "input",
      {
        type: "checkbox",
        name: d,
        value: f ?? "on",
        checked: x,
        onChange: () => {
        },
        "aria-hidden": "true",
        tabIndex: -1,
        className: "sr-only"
      }
    ) : null;
    if (!s && !a)
      return /* @__PURE__ */ D(Xe, { children: [
        R,
        C
      ] });
    const O = /* @__PURE__ */ D("div", { className: "flex flex-col", children: [
      s && /* @__PURE__ */ D(
        "label",
        {
          htmlFor: k,
          className: P(
            "cursor-pointer text-sm leading-none font-medium",
            u && "cursor-not-allowed opacity-70"
          ),
          children: [
            s,
            c && /* @__PURE__ */ _("span", { className: "text-destructive ml-1", children: "*" })
          ]
        }
      ),
      a && /* @__PURE__ */ _(
        "p",
        {
          id: `${k}-description`,
          className: P("text-muted-foreground text-sm", s && "mt-1"),
          children: a
        }
      )
    ] });
    return /* @__PURE__ */ D("div", { className: "flex items-center gap-3", children: [
      R,
      l === "left" && O,
      C,
      l === "right" && O
    ] });
  }
);
Dh.displayName = "Switch";
const zh = E.forwardRef(
  ({ label: e, description: n, children: t, className: r, ...o }, i) => /* @__PURE__ */ D("div", { ref: i, role: "group", className: P("space-y-4", r), ...o, children: [
    (e || n) && /* @__PURE__ */ D("div", { className: "space-y-1", children: [
      e && /* @__PURE__ */ _("h3", { className: "text-sm leading-none font-medium", children: e }),
      n && /* @__PURE__ */ _("p", { className: "text-muted-foreground text-sm", children: n })
    ] }),
    /* @__PURE__ */ _("div", { className: "space-y-4", children: t })
  ] })
);
zh.displayName = "SwitchGroup";
const Bh = te(
  [
    "flex w-full rounded-md border px-3 py-2 text-base transition-colors",
    "placeholder:text-muted-foreground",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "dark:bg-background dark:border-input"
  ],
  {
    variants: {
      variant: {
        default: "border-input bg-background",
        destructive: "border-destructive bg-destructive/10 focus-visible:ring-destructive"
      },
      textareaSize: {
        sm: "text-sm px-2.5 py-1.5 min-h-[60px]",
        default: "text-base px-3 py-2 min-h-[80px]",
        lg: "text-lg px-4 py-3 min-h-[100px]"
      },
      resize: {
        none: "resize-none",
        vertical: "resize-y",
        both: "resize"
      }
    },
    defaultVariants: {
      variant: "default",
      textareaSize: "default",
      resize: "vertical"
    }
  }
), Vh = E.forwardRef(
  ({
    className: e,
    variant: n,
    textareaSize: t,
    resize: r,
    label: o,
    description: i,
    error: s,
    showCharacterCount: a,
    maxLength: l,
    autoResize: u = !1,
    minRows: c = 2,
    maxRows: d,
    wrapperClassName: f,
    labelClassName: p,
    value: g,
    defaultValue: h,
    onChange: m,
    disabled: v,
    rows: y = 4,
    ...b
  }, x) => {
    const [w, S] = E.useState(
      g !== void 0 ? g : h || ""
    ), k = E.useRef(null), N = g !== void 0, C = N ? g : w, R = String(C || "").length, O = E.useCallback(() => {
      if (!u || !k.current) return;
      const H = k.current;
      H.style.height = "auto";
      const J = parseInt(window.getComputedStyle(H).lineHeight), ee = parseInt(window.getComputedStyle(H).paddingTop), oe = parseInt(window.getComputedStyle(H).paddingBottom), W = J * c + ee + oe, Y = d ? J * d + ee + oe : 1 / 0, ue = Math.min(Math.max(H.scrollHeight, W), Y);
      H.style.height = `${String(ue)}px`;
    }, [u, c, d]);
    E.useEffect(() => {
      u && O();
    }, [C, u, O]);
    const F = E.useCallback(
      (H) => {
        k.current = H, typeof x == "function" ? x(H) : x && (x.current = H);
      },
      [x]
    ), U = (H) => {
      N || S(H.target.value), m == null || m(H), u && O();
    }, L = !!s, M = L ? "destructive" : n, G = l !== void 0 && R > l;
    return /* @__PURE__ */ D("div", { className: P("w-full", f), children: [
      o && /* @__PURE__ */ D(
        "label",
        {
          htmlFor: b.id,
          className: P(
            "text-foreground mb-2 block text-sm font-medium",
            v && "cursor-not-allowed opacity-50",
            p
          ),
          children: [
            o,
            b.required && /* @__PURE__ */ _("span", { className: "text-destructive ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ _("div", { className: "relative", children: /* @__PURE__ */ _(
        "textarea",
        {
          ref: F,
          className: P(
            Bh({
              variant: M,
              textareaSize: t,
              resize: u ? "none" : r
            }),
            L && "border-destructive focus-visible:ring-destructive",
            e
          ),
          value: C,
          onChange: U,
          disabled: v,
          maxLength: l,
          rows: u ? c : y,
          "aria-invalid": L ? "true" : void 0,
          "aria-describedby": s || i || a ? `${b.id ?? ""}-description ${b.id ?? ""}-error ${b.id ?? ""}-count` : void 0,
          ...b
        }
      ) }),
      /* @__PURE__ */ D("div", { className: "mt-1.5 flex items-center justify-between gap-2", children: [
        /* @__PURE__ */ D("div", { className: "flex-1", children: [
          i && !s && /* @__PURE__ */ _(
            "p",
            {
              id: `${b.id ?? ""}-description`,
              className: P("text-muted-foreground text-sm", v && "opacity-50"),
              children: i
            }
          ),
          s && /* @__PURE__ */ _(
            "p",
            {
              id: `${b.id ?? ""}-error`,
              className: "text-destructive text-sm font-medium",
              role: "alert",
              children: s
            }
          )
        ] }),
        a && /* @__PURE__ */ D(
          "p",
          {
            id: `${b.id ?? ""}-count`,
            className: P(
              "text-sm tabular-nums",
              G ? "text-destructive font-medium" : "text-muted-foreground",
              v && "opacity-50"
            ),
            "aria-live": "polite",
            children: [
              R,
              l !== void 0 && ` / ${String(l)}`
            ]
          }
        )
      ] })
    ] });
  }
);
Vh.displayName = "Textarea";
function wt(e, n, { checkForDefaultPrevented: t = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), t === !1 || !o.defaultPrevented)
      return n == null ? void 0 : n(o);
  };
}
function za(e, n) {
  if (typeof e == "function")
    return e(n);
  e != null && (e.current = n);
}
function Cc(...e) {
  return (n) => {
    let t = !1;
    const r = e.map((o) => {
      const i = za(o, n);
      return !t && typeof i == "function" && (t = !0), i;
    });
    if (t)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : za(e[o], null);
        }
      };
  };
}
function tn(...e) {
  return E.useCallback(Cc(...e), e);
}
function zo(e, n = []) {
  let t = [];
  function r(i, s) {
    const a = E.createContext(s), l = t.length;
    t = [...t, s];
    const u = (d) => {
      var v;
      const { scope: f, children: p, ...g } = d, h = ((v = f == null ? void 0 : f[e]) == null ? void 0 : v[l]) || a, m = E.useMemo(() => g, Object.values(g));
      return /* @__PURE__ */ _(h.Provider, { value: m, children: p });
    };
    u.displayName = i + "Provider";
    function c(d, f) {
      var h;
      const p = ((h = f == null ? void 0 : f[e]) == null ? void 0 : h[l]) || a, g = E.useContext(p);
      if (g) return g;
      if (s !== void 0) return s;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return [u, c];
  }
  const o = () => {
    const i = t.map((s) => E.createContext(s));
    return function(a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return E.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: l } }),
        [a, l]
      );
    };
  };
  return o.scopeName = e, [r, jh(o, ...n)];
}
function jh(...e) {
  const n = e[0];
  if (e.length === 1) return n;
  const t = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(i) {
      const s = r.reduce((a, { useScope: l, scopeName: u }) => {
        const d = l(i)[`__scope${u}`];
        return { ...a, ...d };
      }, {});
      return E.useMemo(() => ({ [`__scope${n.scopeName}`]: s }), [s]);
    };
  };
  return t.scopeName = n.scopeName, t;
}
// @__NO_SIDE_EFFECTS__
function Wi(e) {
  const n = /* @__PURE__ */ Uh(e), t = E.forwardRef((r, o) => {
    const { children: i, ...s } = r, a = E.Children.toArray(i), l = a.find(Hh);
    if (l) {
      const u = l.props.children, c = a.map((d) => d === l ? E.Children.count(u) > 1 ? E.Children.only(null) : E.isValidElement(u) ? u.props.children : null : d);
      return /* @__PURE__ */ _(n, { ...s, ref: o, children: E.isValidElement(u) ? E.cloneElement(u, void 0, c) : null });
    }
    return /* @__PURE__ */ _(n, { ...s, ref: o, children: i });
  });
  return t.displayName = `${e}.Slot`, t;
}
// @__NO_SIDE_EFFECTS__
function Uh(e) {
  const n = E.forwardRef((t, r) => {
    const { children: o, ...i } = t;
    if (E.isValidElement(o)) {
      const s = Kh(o), a = Wh(i, o.props);
      return o.type !== E.Fragment && (a.ref = r ? Cc(r, s) : s), E.cloneElement(o, a);
    }
    return E.Children.count(o) > 1 ? E.Children.only(null) : null;
  });
  return n.displayName = `${e}.SlotClone`, n;
}
var Gh = Symbol("radix.slottable");
function Hh(e) {
  return E.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Gh;
}
function Wh(e, n) {
  const t = { ...n };
  for (const r in n) {
    const o = e[r], i = n[r];
    /^on[A-Z]/.test(r) ? o && i ? t[r] = (...a) => {
      const l = i(...a);
      return o(...a), l;
    } : o && (t[r] = o) : r === "style" ? t[r] = { ...o, ...i } : r === "className" && (t[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...t };
}
function Kh(e) {
  var r, o;
  let n = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
var qh = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], Vn = qh.reduce((e, n) => {
  const t = /* @__PURE__ */ Wi(`Primitive.${n}`), r = E.forwardRef((o, i) => {
    const { asChild: s, ...a } = o, l = s ? t : n;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ _(l, { ...a, ref: i });
  });
  return r.displayName = `Primitive.${n}`, { ...e, [n]: r };
}, {});
function Zh(e) {
  const n = e + "CollectionProvider", [t, r] = zo(n), [o, i] = t(
    n,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), s = (h) => {
    const { scope: m, children: v } = h, y = ye.useRef(null), b = ye.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ _(o, { scope: m, itemMap: b, collectionRef: y, children: v });
  };
  s.displayName = n;
  const a = e + "CollectionSlot", l = /* @__PURE__ */ Wi(a), u = ye.forwardRef(
    (h, m) => {
      const { scope: v, children: y } = h, b = i(a, v), x = tn(m, b.collectionRef);
      return /* @__PURE__ */ _(l, { ref: x, children: y });
    }
  );
  u.displayName = a;
  const c = e + "CollectionItemSlot", d = "data-radix-collection-item", f = /* @__PURE__ */ Wi(c), p = ye.forwardRef(
    (h, m) => {
      const { scope: v, children: y, ...b } = h, x = ye.useRef(null), w = tn(m, x), S = i(c, v);
      return ye.useEffect(() => (S.itemMap.set(x, { ref: x, ...b }), () => void S.itemMap.delete(x))), /* @__PURE__ */ _(f, { [d]: "", ref: w, children: y });
    }
  );
  p.displayName = c;
  function g(h) {
    const m = i(e + "CollectionConsumer", h);
    return ye.useCallback(() => {
      const y = m.collectionRef.current;
      if (!y) return [];
      const b = Array.from(y.querySelectorAll(`[${d}]`));
      return Array.from(m.itemMap.values()).sort(
        (S, k) => b.indexOf(S.ref.current) - b.indexOf(k.ref.current)
      );
    }, [m.collectionRef, m.itemMap]);
  }
  return [
    { Provider: s, Slot: u, ItemSlot: p },
    g,
    r
  ];
}
var mr = globalThis != null && globalThis.document ? E.useLayoutEffect : () => {
}, Jh = E[" useId ".trim().toString()] || (() => {
}), Yh = 0;
function Xh(e) {
  const [n, t] = E.useState(Jh());
  return mr(() => {
    t((r) => r ?? String(Yh++));
  }, [e]), n ? `radix-${n}` : "";
}
function Qh(e) {
  const n = E.useRef(e);
  return E.useEffect(() => {
    n.current = e;
  }), E.useMemo(() => (...t) => {
    var r;
    return (r = n.current) == null ? void 0 : r.call(n, ...t);
  }, []);
}
var em = E[" useInsertionEffect ".trim().toString()] || mr;
function kc({
  prop: e,
  defaultProp: n,
  onChange: t = () => {
  },
  caller: r
}) {
  const [o, i, s] = tm({
    defaultProp: n,
    onChange: t
  }), a = e !== void 0, l = a ? e : o;
  {
    const c = E.useRef(e !== void 0);
    E.useEffect(() => {
      const d = c.current;
      d !== a && console.warn(
        `${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), c.current = a;
    }, [a, r]);
  }
  const u = E.useCallback(
    (c) => {
      var d;
      if (a) {
        const f = nm(c) ? c(e) : c;
        f !== e && ((d = s.current) == null || d.call(s, f));
      } else
        i(c);
    },
    [a, e, i, s]
  );
  return [l, u];
}
function tm({
  defaultProp: e,
  onChange: n
}) {
  const [t, r] = E.useState(e), o = E.useRef(t), i = E.useRef(n);
  return em(() => {
    i.current = n;
  }, [n]), E.useEffect(() => {
    var s;
    o.current !== t && ((s = i.current) == null || s.call(i, t), o.current = t);
  }, [t, o]), [t, r, i];
}
function nm(e) {
  return typeof e == "function";
}
var rm = E.createContext(void 0);
function Ec(e) {
  const n = E.useContext(rm);
  return e || n || "ltr";
}
var di = "rovingFocusGroup.onEntryFocus", om = { bubbles: !1, cancelable: !0 }, Er = "RovingFocusGroup", [Ki, Nc, im] = Zh(Er), [sm, Rc] = zo(
  Er,
  [im]
), [am, lm] = sm(Er), Ac = E.forwardRef(
  (e, n) => /* @__PURE__ */ _(Ki.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ _(Ki.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ _(um, { ...e, ref: n }) }) })
);
Ac.displayName = Er;
var um = E.forwardRef((e, n) => {
  const {
    __scopeRovingFocusGroup: t,
    orientation: r,
    loop: o = !1,
    dir: i,
    currentTabStopId: s,
    defaultCurrentTabStopId: a,
    onCurrentTabStopIdChange: l,
    onEntryFocus: u,
    preventScrollOnEntryFocus: c = !1,
    ...d
  } = e, f = E.useRef(null), p = tn(n, f), g = Ec(i), [h, m] = kc({
    prop: s,
    defaultProp: a ?? null,
    onChange: l,
    caller: Er
  }), [v, y] = E.useState(!1), b = Qh(u), x = Nc(t), w = E.useRef(!1), [S, k] = E.useState(0);
  return E.useEffect(() => {
    const N = f.current;
    if (N)
      return N.addEventListener(di, b), () => N.removeEventListener(di, b);
  }, [b]), /* @__PURE__ */ _(
    am,
    {
      scope: t,
      orientation: r,
      dir: g,
      loop: o,
      currentTabStopId: h,
      onItemFocus: E.useCallback(
        (N) => m(N),
        [m]
      ),
      onItemShiftTab: E.useCallback(() => y(!0), []),
      onFocusableItemAdd: E.useCallback(
        () => k((N) => N + 1),
        []
      ),
      onFocusableItemRemove: E.useCallback(
        () => k((N) => N - 1),
        []
      ),
      children: /* @__PURE__ */ _(
        Vn.div,
        {
          tabIndex: v || S === 0 ? -1 : 0,
          "data-orientation": r,
          ...d,
          ref: p,
          style: { outline: "none", ...e.style },
          onMouseDown: wt(e.onMouseDown, () => {
            w.current = !0;
          }),
          onFocus: wt(e.onFocus, (N) => {
            const C = !w.current;
            if (N.target === N.currentTarget && C && !v) {
              const R = new CustomEvent(di, om);
              if (N.currentTarget.dispatchEvent(R), !R.defaultPrevented) {
                const O = x().filter((G) => G.focusable), F = O.find((G) => G.active), U = O.find((G) => G.id === h), M = [F, U, ...O].filter(
                  Boolean
                ).map((G) => G.ref.current);
                Ic(M, c);
              }
            }
            w.current = !1;
          }),
          onBlur: wt(e.onBlur, () => y(!1))
        }
      )
    }
  );
}), Tc = "RovingFocusGroupItem", Fc = E.forwardRef(
  (e, n) => {
    const {
      __scopeRovingFocusGroup: t,
      focusable: r = !0,
      active: o = !1,
      tabStopId: i,
      children: s,
      ...a
    } = e, l = Xh(), u = i || l, c = lm(Tc, t), d = c.currentTabStopId === u, f = Nc(t), { onFocusableItemAdd: p, onFocusableItemRemove: g, currentTabStopId: h } = c;
    return E.useEffect(() => {
      if (r)
        return p(), () => g();
    }, [r, p, g]), /* @__PURE__ */ _(
      Ki.ItemSlot,
      {
        scope: t,
        id: u,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ _(
          Vn.span,
          {
            tabIndex: d ? 0 : -1,
            "data-orientation": c.orientation,
            ...a,
            ref: n,
            onMouseDown: wt(e.onMouseDown, (m) => {
              r ? c.onItemFocus(u) : m.preventDefault();
            }),
            onFocus: wt(e.onFocus, () => c.onItemFocus(u)),
            onKeyDown: wt(e.onKeyDown, (m) => {
              if (m.key === "Tab" && m.shiftKey) {
                c.onItemShiftTab();
                return;
              }
              if (m.target !== m.currentTarget) return;
              const v = fm(m, c.orientation, c.dir);
              if (v !== void 0) {
                if (m.metaKey || m.ctrlKey || m.altKey || m.shiftKey) return;
                m.preventDefault();
                let b = f().filter((x) => x.focusable).map((x) => x.ref.current);
                if (v === "last") b.reverse();
                else if (v === "prev" || v === "next") {
                  v === "prev" && b.reverse();
                  const x = b.indexOf(m.currentTarget);
                  b = c.loop ? gm(b, x + 1) : b.slice(x + 1);
                }
                setTimeout(() => Ic(b));
              }
            }),
            children: typeof s == "function" ? s({ isCurrentTabStop: d, hasTabStop: h != null }) : s
          }
        )
      }
    );
  }
);
Fc.displayName = Tc;
var cm = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function dm(e, n) {
  return n !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function fm(e, n, t) {
  const r = dm(e.key, t);
  if (!(n === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(n === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return cm[r];
}
function Ic(e, n = !1) {
  const t = document.activeElement;
  for (const r of e)
    if (r === t || (r.focus({ preventScroll: n }), document.activeElement !== t)) return;
}
function gm(e, n) {
  return e.map((t, r) => e[(n + r) % e.length]);
}
var pm = Ac, hm = Fc;
function mm(e) {
  const [n, t] = E.useState(void 0);
  return mr(() => {
    if (e) {
      t({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const i = o[0];
        let s, a;
        if ("borderBoxSize" in i) {
          const l = i.borderBoxSize, u = Array.isArray(l) ? l[0] : l;
          s = u.inlineSize, a = u.blockSize;
        } else
          s = e.offsetWidth, a = e.offsetHeight;
        t({ width: s, height: a });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      t(void 0);
  }, [e]), n;
}
function ym(e) {
  const n = E.useRef({ value: e, previous: e });
  return E.useMemo(() => (n.current.value !== e && (n.current.previous = n.current.value, n.current.value = e), n.current.previous), [e]);
}
function bm(e, n) {
  return E.useReducer((t, r) => n[t][r] ?? t, e);
}
var Oc = (e) => {
  const { present: n, children: t } = e, r = vm(n), o = typeof t == "function" ? t({ present: r.isPresent }) : E.Children.only(t), i = tn(r.ref, xm(o));
  return typeof t == "function" || r.isPresent ? E.cloneElement(o, { ref: i }) : null;
};
Oc.displayName = "Presence";
function vm(e) {
  const [n, t] = E.useState(), r = E.useRef(null), o = E.useRef(e), i = E.useRef("none"), s = e ? "mounted" : "unmounted", [a, l] = bm(s, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return E.useEffect(() => {
    const u = zr(r.current);
    i.current = a === "mounted" ? u : "none";
  }, [a]), mr(() => {
    const u = r.current, c = o.current;
    if (c !== e) {
      const f = i.current, p = zr(u);
      e ? l("MOUNT") : p === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(c && f !== p ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), mr(() => {
    if (n) {
      let u;
      const c = n.ownerDocument.defaultView ?? window, d = (p) => {
        const h = zr(r.current).includes(CSS.escape(p.animationName));
        if (p.target === n && h && (l("ANIMATION_END"), !o.current)) {
          const m = n.style.animationFillMode;
          n.style.animationFillMode = "forwards", u = c.setTimeout(() => {
            n.style.animationFillMode === "forwards" && (n.style.animationFillMode = m);
          });
        }
      }, f = (p) => {
        p.target === n && (i.current = zr(r.current));
      };
      return n.addEventListener("animationstart", f), n.addEventListener("animationcancel", d), n.addEventListener("animationend", d), () => {
        c.clearTimeout(u), n.removeEventListener("animationstart", f), n.removeEventListener("animationcancel", d), n.removeEventListener("animationend", d);
      };
    } else
      l("ANIMATION_END");
  }, [n, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(a),
    ref: E.useCallback((u) => {
      r.current = u ? getComputedStyle(u) : null, t(u);
    }, [])
  };
}
function zr(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function xm(e) {
  var r, o;
  let n = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
var Ps = "Radio", [_m, Mc] = zo(Ps), [wm, Sm] = _m(Ps), $c = E.forwardRef(
  (e, n) => {
    const {
      __scopeRadio: t,
      name: r,
      checked: o = !1,
      required: i,
      disabled: s,
      value: a = "on",
      onCheck: l,
      form: u,
      ...c
    } = e, [d, f] = E.useState(null), p = tn(n, (m) => f(m)), g = E.useRef(!1), h = d ? u || !!d.closest("form") : !0;
    return /* @__PURE__ */ D(wm, { scope: t, checked: o, disabled: s, children: [
      /* @__PURE__ */ _(
        Vn.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": zc(o),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: a,
          ...c,
          ref: p,
          onClick: wt(e.onClick, (m) => {
            o || l == null || l(), h && (g.current = m.isPropagationStopped(), g.current || m.stopPropagation());
          })
        }
      ),
      h && /* @__PURE__ */ _(
        Dc,
        {
          control: d,
          bubbles: !g.current,
          name: r,
          value: a,
          checked: o,
          required: i,
          disabled: s,
          form: u,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
$c.displayName = Ps;
var Pc = "RadioIndicator", Lc = E.forwardRef(
  (e, n) => {
    const { __scopeRadio: t, forceMount: r, ...o } = e, i = Sm(Pc, t);
    return /* @__PURE__ */ _(Oc, { present: r || i.checked, children: /* @__PURE__ */ _(
      Vn.span,
      {
        "data-state": zc(i.checked),
        "data-disabled": i.disabled ? "" : void 0,
        ...o,
        ref: n
      }
    ) });
  }
);
Lc.displayName = Pc;
var Cm = "RadioBubbleInput", Dc = E.forwardRef(
  ({
    __scopeRadio: e,
    control: n,
    checked: t,
    bubbles: r = !0,
    ...o
  }, i) => {
    const s = E.useRef(null), a = tn(s, i), l = ym(t), u = mm(n);
    return E.useEffect(() => {
      const c = s.current;
      if (!c) return;
      const d = window.HTMLInputElement.prototype, p = Object.getOwnPropertyDescriptor(
        d,
        "checked"
      ).set;
      if (l !== t && p) {
        const g = new Event("click", { bubbles: r });
        p.call(c, t), c.dispatchEvent(g);
      }
    }, [l, t, r]), /* @__PURE__ */ _(
      Vn.input,
      {
        type: "radio",
        "aria-hidden": !0,
        defaultChecked: t,
        ...o,
        tabIndex: -1,
        ref: a,
        style: {
          ...o.style,
          ...u,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
Dc.displayName = Cm;
function zc(e) {
  return e ? "checked" : "unchecked";
}
var km = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Bo = "RadioGroup", [Em] = zo(Bo, [
  Rc,
  Mc
]), Bc = Rc(), Vc = Mc(), [Nm, Rm] = Em(Bo), jc = E.forwardRef(
  (e, n) => {
    const {
      __scopeRadioGroup: t,
      name: r,
      defaultValue: o,
      value: i,
      required: s = !1,
      disabled: a = !1,
      orientation: l,
      dir: u,
      loop: c = !0,
      onValueChange: d,
      ...f
    } = e, p = Bc(t), g = Ec(u), [h, m] = kc({
      prop: i,
      defaultProp: o ?? null,
      onChange: d,
      caller: Bo
    });
    return /* @__PURE__ */ _(
      Nm,
      {
        scope: t,
        name: r,
        required: s,
        disabled: a,
        value: h,
        onValueChange: m,
        children: /* @__PURE__ */ _(
          pm,
          {
            asChild: !0,
            ...p,
            orientation: l,
            dir: g,
            loop: c,
            children: /* @__PURE__ */ _(
              Vn.div,
              {
                role: "radiogroup",
                "aria-required": s,
                "aria-orientation": l,
                "data-disabled": a ? "" : void 0,
                dir: g,
                ...f,
                ref: n
              }
            )
          }
        )
      }
    );
  }
);
jc.displayName = Bo;
var Uc = "RadioGroupItem", Gc = E.forwardRef(
  (e, n) => {
    const { __scopeRadioGroup: t, disabled: r, ...o } = e, i = Rm(Uc, t), s = i.disabled || r, a = Bc(t), l = Vc(t), u = E.useRef(null), c = tn(n, u), d = i.value === o.value, f = E.useRef(!1);
    return E.useEffect(() => {
      const p = (h) => {
        km.includes(h.key) && (f.current = !0);
      }, g = () => f.current = !1;
      return document.addEventListener("keydown", p), document.addEventListener("keyup", g), () => {
        document.removeEventListener("keydown", p), document.removeEventListener("keyup", g);
      };
    }, []), /* @__PURE__ */ _(
      hm,
      {
        asChild: !0,
        ...a,
        focusable: !s,
        active: d,
        children: /* @__PURE__ */ _(
          $c,
          {
            disabled: s,
            required: i.required,
            checked: d,
            ...l,
            ...o,
            name: i.name,
            ref: c,
            onCheck: () => i.onValueChange(o.value),
            onKeyDown: wt((p) => {
              p.key === "Enter" && p.preventDefault();
            }),
            onFocus: wt(o.onFocus, () => {
              var p;
              f.current && ((p = u.current) == null || p.click());
            })
          }
        )
      }
    );
  }
);
Gc.displayName = Uc;
var Am = "RadioGroupIndicator", Hc = E.forwardRef(
  (e, n) => {
    const { __scopeRadioGroup: t, ...r } = e, o = Vc(t);
    return /* @__PURE__ */ _(Lc, { ...o, ...r, ref: n });
  }
);
Hc.displayName = Am;
var Wc = jc, Kc = Gc, Tm = Hc;
const Fm = E.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ _(Wc, { className: P("grid gap-2", e), ...n, ref: t }));
Fm.displayName = Wc.displayName;
const Im = E.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ _(
  Kc,
  {
    ref: t,
    className: P(
      "border-input text-primary ring-offset-background focus-visible:ring-ring aspect-square h-4 w-4 rounded-full border focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...n,
    children: /* @__PURE__ */ _(Tm, { className: "flex items-center justify-center", children: /* @__PURE__ */ _(Yg, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
Im.displayName = Kc.displayName;
const qc = E.createContext(void 0), Om = te(
  "group pointer-events-auto relative flex w-full items-start gap-3 overflow-hidden rounded-lg border p-4 shadow-lg transition-all",
  {
    variants: {
      variant: {
        default: "border-border bg-background text-foreground",
        success: "border-green-200 bg-green-50 text-green-900 dark:border-green-900/50 dark:bg-green-950/50 dark:text-green-100",
        error: "border-red-200 bg-red-50 text-red-900 dark:border-red-900/50 dark:bg-red-950/50 dark:text-red-100",
        warning: "border-yellow-200 bg-yellow-50 text-yellow-900 dark:border-yellow-900/50 dark:bg-yellow-950/50 dark:text-yellow-100",
        info: "border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-900/50 dark:bg-blue-950/50 dark:text-blue-100"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), Zc = E.forwardRef(
  ({ toast: e, onClose: n, variant: t, className: r, ...o }, i) => {
    const s = E.useMemo(() => {
      switch (t || e.variant) {
        case "success":
          return hh;
        case "error":
          return bh;
        case "warning":
          return mh;
        case "info":
          return yh;
        default:
          return null;
      }
    }, [t, e.variant]);
    return /* @__PURE__ */ D(
      "div",
      {
        ref: i,
        role: "alert",
        "aria-live": "polite",
        "aria-atomic": "true",
        className: P(Om({ variant: t || e.variant }), r),
        ...o,
        children: [
          s && /* @__PURE__ */ _("div", { className: "mt-0.5 flex-shrink-0", children: /* @__PURE__ */ _(s, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ D("div", { className: "grid flex-1 gap-1", children: [
            e.title && /* @__PURE__ */ _("div", { className: "text-sm leading-none font-semibold", children: e.title }),
            /* @__PURE__ */ _("div", { className: "text-sm leading-snug opacity-90", children: e.description }),
            e.action && /* @__PURE__ */ _(
              "button",
              {
                onClick: e.action.onClick,
                className: "mt-2 inline-flex h-8 items-center justify-center rounded-md border border-current px-3 text-xs font-medium transition-colors hover:bg-black/5 focus:ring-2 focus:ring-offset-2 focus:outline-none dark:hover:bg-white/10",
                children: e.action.label
              }
            )
          ] }),
          /* @__PURE__ */ _(
            "button",
            {
              onClick: n,
              className: "inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md text-current opacity-60 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none",
              "aria-label": "Close",
              children: /* @__PURE__ */ _(vh, { className: "h-4 w-4" })
            }
          )
        ]
      }
    );
  }
);
Zc.displayName = "ToastItem";
const Mm = {
  "top-right": "top-0 right-0 sm:top-4 sm:right-4",
  "top-left": "top-0 left-0 sm:top-4 sm:left-4",
  "bottom-right": "bottom-0 right-0 sm:bottom-4 sm:right-4",
  "bottom-left": "bottom-0 left-0 sm:bottom-4 sm:left-4",
  "top-center": "top-0 left-1/2 -translate-x-1/2 sm:top-4",
  "bottom-center": "bottom-0 left-1/2 -translate-x-1/2 sm:bottom-4"
}, Jc = E.forwardRef(
  ({ position: e = "top-right" }, n) => {
    const { toasts: t, removeToast: r } = $m(), [o, i] = E.useState(!1);
    return E.useEffect(() => {
      i(!0);
    }, []), !o || t.length === 0 ? null : /* @__PURE__ */ _(
      "div",
      {
        ref: n,
        className: P(
          "pointer-events-none fixed z-[100] flex w-full max-w-[420px] flex-col gap-2 p-4",
          Mm[e]
        ),
        children: t.map((s) => /* @__PURE__ */ _(
          Zc,
          {
            toast: s,
            variant: s.variant,
            onClose: () => {
              r(s.id);
            }
          },
          s.id
        ))
      }
    );
  }
);
Jc.displayName = "ToastContainer";
const ES = ({
  children: e,
  position: n = "top-right",
  duration: t = 5e3,
  max: r = 5
}) => {
  const [o, i] = E.useState([]), s = E.useRef(/* @__PURE__ */ new Map()), a = E.useCallback((g) => {
    const h = s.current.get(g);
    h && (clearTimeout(h), s.current.delete(g)), i((m) => m.filter((v) => v.id !== g));
  }, []), l = E.useCallback(
    (g) => {
      const h = Math.random().toString(36).substring(2, 9), m = { ...g, id: h };
      i((y) => {
        const b = [...y, m];
        return b.length > r ? (b.slice(0, b.length - r).forEach((w) => {
          const S = s.current.get(w.id);
          S && (clearTimeout(S), s.current.delete(w.id));
        }), b.slice(b.length - r)) : b;
      });
      const v = g.duration ?? t;
      if (v > 0) {
        const y = setTimeout(() => {
          a(h);
        }, v);
        s.current.set(h, y);
      }
      return h;
    },
    [t, r, a]
  ), u = E.useCallback(
    (g, h) => l({ ...h, description: g, variant: "success" }),
    [l]
  ), c = E.useCallback(
    (g, h) => l({ ...h, description: g, variant: "error" }),
    [l]
  ), d = E.useCallback(
    (g, h) => l({ ...h, description: g, variant: "warning" }),
    [l]
  ), f = E.useCallback(
    (g, h) => l({ ...h, description: g, variant: "info" }),
    [l]
  );
  E.useEffect(() => {
    const g = s.current;
    return () => {
      g.forEach((h) => {
        clearTimeout(h);
      }), g.clear();
    };
  }, []);
  const p = E.useMemo(
    () => ({ toasts: o, addToast: l, removeToast: a, success: u, error: c, warning: d, info: f }),
    [o, l, a, u, c, d, f]
  );
  return /* @__PURE__ */ D(qc.Provider, { value: p, children: [
    e,
    /* @__PURE__ */ _(Jc, { position: n })
  ] });
}, $m = () => {
  const e = E.useContext(qc);
  if (!e)
    throw new Error("useToast must be used within a ToastProvider");
  return e;
}, Pm = te(
  "absolute z-50 min-w-[12rem] overflow-hidden rounded-md border bg-white p-1 shadow-lg outline-none animate-in fade-in-0 zoom-in-95 dark:bg-slate-800 dark:border-slate-700",
  {
    variants: {
      align: {
        start: "left-0",
        center: "left-1/2 -translate-x-1/2",
        end: "right-0"
      },
      side: {
        top: "bottom-full mb-2",
        bottom: "top-full mt-2"
      }
    },
    defaultVariants: {
      align: "start",
      side: "bottom"
    }
  }
), Yc = te(
  "relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-slate-100 dark:focus:bg-slate-700",
  {
    variants: {
      variant: {
        default: "hover:bg-slate-100 dark:hover:bg-slate-700",
        destructive: "text-red-600 hover:bg-red-50 focus:bg-red-50 dark:text-red-400 dark:hover:bg-red-950 dark:focus:bg-red-950"
      },
      disabled: {
        true: "pointer-events-none opacity-50",
        false: ""
      }
    },
    defaultVariants: {
      variant: "default",
      disabled: !1
    }
  }
), Xc = E.createContext(void 0), Ls = () => {
  const e = E.useContext(Xc);
  if (!e)
    throw new Error("Dropdown components must be used within a Dropdown");
  return e;
}, Qc = E.createContext(
  void 0
), ed = () => {
  const e = E.useContext(Qc);
  if (!e)
    throw new Error("DropdownSubmenu components must be used within a DropdownSubmenu");
  return e;
}, NS = ({
  children: e,
  open: n,
  onOpenChange: t,
  defaultOpen: r = !1
}) => {
  const [o, i] = E.useState(r), s = E.useRef(null), a = E.useRef(null), l = n !== void 0 ? n : o, u = E.useCallback(
    (c) => {
      n === void 0 && i(c), t == null || t(c);
    },
    [n, t]
  );
  return E.useEffect(() => {
    if (!l) return;
    const c = (d) => {
      var p, g;
      const f = d.target;
      !((p = s.current) != null && p.contains(f)) && !((g = a.current) != null && g.contains(f)) && u(!1);
    };
    return document.addEventListener("mousedown", c), () => {
      document.removeEventListener("mousedown", c);
    };
  }, [l, u]), E.useEffect(() => {
    if (!l) return;
    const c = (d) => {
      var f;
      d.key === "Escape" && (u(!1), (f = s.current) == null || f.focus());
    };
    return document.addEventListener("keydown", c), () => {
      document.removeEventListener("keydown", c);
    };
  }, [l, u]), /* @__PURE__ */ _(Xc.Provider, { value: { open: l, setOpen: u, triggerRef: s, contentRef: a }, children: /* @__PURE__ */ _("div", { className: "relative inline-block", children: e }) });
}, RS = ({ children: e, asChild: n = !1 }) => {
  const { open: t, setOpen: r, triggerRef: o } = Ls(), i = () => {
    r(!t);
  }, s = (a) => {
    a.key === "Enter" || a.key === " " ? (a.preventDefault(), r(!t)) : a.key === "ArrowDown" && !t && (a.preventDefault(), r(!0));
  };
  if (n && E.isValidElement(e)) {
    const a = e.props || {};
    return E.cloneElement(e, {
      ...a,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref: o,
      onClick: i,
      onKeyDown: s,
      "aria-expanded": t,
      "aria-haspopup": "menu"
    });
  }
  return /* @__PURE__ */ _(
    "button",
    {
      ref: o,
      type: "button",
      onClick: i,
      onKeyDown: s,
      "aria-expanded": t,
      "aria-haspopup": "menu",
      children: e
    }
  );
}, AS = ({
  children: e,
  className: n,
  align: t = "start",
  side: r = "bottom"
}) => {
  const { open: o, setOpen: i, contentRef: s } = Ls(), [a, l] = E.useState(-1), u = E.useCallback(() => s.current ? Array.from(
    s.current.querySelectorAll(
      '[role="menuitem"]:not([aria-disabled="true"])'
    )
  ) : [], [s]);
  return E.useEffect(() => {
    var f;
    if (!o) return;
    const c = (p) => {
      var h, m;
      const g = u();
      if (g.length !== 0)
        switch (p.key) {
          case "ArrowDown":
            p.preventDefault(), l((v) => {
              var b;
              const y = v + 1 >= g.length ? 0 : v + 1;
              return (b = g[y]) == null || b.focus(), y;
            });
            break;
          case "ArrowUp":
            p.preventDefault(), l((v) => {
              var b;
              const y = v - 1 < 0 ? g.length - 1 : v - 1;
              return (b = g[y]) == null || b.focus(), y;
            });
            break;
          case "Home":
            p.preventDefault(), (h = g[0]) == null || h.focus(), l(0);
            break;
          case "End":
            p.preventDefault(), (m = g[g.length - 1]) == null || m.focus(), l(g.length - 1);
            break;
          case "Tab":
            p.preventDefault(), i(!1);
            break;
        }
    }, d = s.current;
    return (f = s.current) == null || f.addEventListener("keydown", c), () => d == null ? void 0 : d.removeEventListener("keydown", c);
  }, [o, i, u]), E.useEffect(() => {
    var c;
    if (o) {
      const d = u();
      d.length > 0 && ((c = d[0]) == null || c.focus(), l(0));
    } else
      l(-1);
  }, [o, u]), o ? /* @__PURE__ */ _(
    "div",
    {
      ref: s,
      role: "menu",
      "aria-orientation": "vertical",
      className: P(Pm({ align: t, side: r }), n),
      children: e
    }
  ) : null;
}, TS = ({ children: e, className: n }) => /* @__PURE__ */ _(
  "div",
  {
    className: P(
      "px-2 py-1.5 text-sm font-semibold text-slate-900 dark:text-slate-100",
      n
    ),
    children: e
  }
), FS = ({
  children: e,
  onSelect: n,
  icon: t,
  shortcut: r,
  variant: o = "default",
  disabled: i = !1,
  className: s
}) => {
  const { setOpen: a } = Ls(), l = () => {
    i || (n == null || n(), a(!1));
  };
  return /* @__PURE__ */ D(
    "div",
    {
      role: "menuitem",
      tabIndex: i ? void 0 : 0,
      "aria-disabled": i ? !0 : void 0,
      onClick: l,
      onKeyDown: (c) => {
        (c.key === "Enter" || c.key === " ") && (c.preventDefault(), l());
      },
      className: P(Yc({ variant: o, disabled: i }), s),
      children: [
        t && /* @__PURE__ */ _("span", { className: "shrink-0", children: t }),
        /* @__PURE__ */ _("span", { className: "flex-1", children: e }),
        r && /* @__PURE__ */ _("span", { className: "ml-auto text-xs tracking-widest text-slate-500 dark:text-slate-400", children: r })
      ]
    }
  );
}, IS = ({ className: e }) => /* @__PURE__ */ _("div", { role: "separator", className: P("my-1 h-px bg-slate-200 dark:bg-slate-700", e) }), OS = ({ children: e }) => {
  const [n, t] = E.useState(!1);
  return /* @__PURE__ */ _(Qc.Provider, { value: { open: n, setOpen: t }, children: /* @__PURE__ */ _("div", { className: "relative", children: e }) });
}, MS = ({
  children: e,
  icon: n,
  className: t
}) => {
  const { open: r, setOpen: o } = ed();
  return /* @__PURE__ */ D(
    "div",
    {
      role: "menuitem",
      tabIndex: 0,
      "aria-haspopup": "menu",
      "aria-expanded": r,
      onMouseEnter: () => {
        o(!0);
      },
      onMouseLeave: () => {
        o(!1);
      },
      onKeyDown: (l) => {
        l.key === "ArrowRight" ? (l.preventDefault(), o(!0)) : l.key === "ArrowLeft" && r ? (l.preventDefault(), o(!1)) : (l.key === "Enter" || l.key === " ") && (l.preventDefault(), o(!r));
      },
      className: P(Yc({ variant: "default", disabled: !1 }), t),
      children: [
        n && /* @__PURE__ */ _("span", { className: "shrink-0", children: n }),
        /* @__PURE__ */ _("span", { className: "flex-1", children: e }),
        /* @__PURE__ */ _(hc, { className: "ml-auto h-3 w-3 text-slate-500 dark:text-slate-400" })
      ]
    }
  );
}, $S = ({
  children: e,
  className: n
}) => {
  const { open: t } = ed();
  return t ? /* @__PURE__ */ _(
    "div",
    {
      role: "menu",
      "aria-orientation": "vertical",
      className: P(
        "animate-in fade-in-0 zoom-in-95 absolute top-0 left-full ml-1 min-w-[12rem] overflow-hidden rounded-md border bg-white p-1 shadow-lg dark:border-slate-700 dark:bg-slate-800",
        n
      ),
      children: e
    }
  ) : null;
}, Lm = te(
  "relative inline-flex items-center justify-center overflow-hidden flex-shrink-0 select-none",
  {
    variants: {
      size: {
        xs: "h-6 w-6 text-xs",
        sm: "h-8 w-8 text-sm",
        md: "h-10 w-10 text-base",
        lg: "h-12 w-12 text-lg",
        xl: "h-16 w-16 text-xl",
        "2xl": "h-20 w-20 text-2xl"
      },
      shape: {
        circle: "rounded-full",
        square: "rounded-lg"
      }
    },
    defaultVariants: {
      size: "md",
      shape: "circle"
    }
  }
), Dm = te(
  "absolute border-2 border-white dark:border-slate-900 rounded-full",
  {
    variants: {
      status: {
        online: "bg-green-500",
        offline: "bg-slate-400",
        away: "bg-yellow-500",
        busy: "bg-red-500"
      },
      size: {
        xs: "h-1.5 w-1.5 bottom-0 right-0",
        sm: "h-2 w-2 bottom-0 right-0",
        md: "h-2.5 w-2.5 bottom-0 right-0",
        lg: "h-3 w-3 bottom-0.5 right-0.5",
        xl: "h-3.5 w-3.5 bottom-0.5 right-0.5",
        "2xl": "h-4 w-4 bottom-1 right-1"
      }
    },
    defaultVariants: {
      status: "online",
      size: "md"
    }
  }
);
function zm(e) {
  var o, i;
  if (!e) return "?";
  const n = e.trim().split(/\s+/).filter(Boolean);
  if (n.length === 0) return "?";
  if (n.length === 1) {
    const s = n[0];
    return s ? s.substring(0, 2).toUpperCase() : "?";
  }
  const t = ((o = n[0]) == null ? void 0 : o.charAt(0)) || "", r = ((i = n[1]) == null ? void 0 : i.charAt(0)) || "";
  return (t + r).toUpperCase() || "?";
}
function Bm(e) {
  if (!e) return "bg-slate-500";
  let n = 0;
  for (let r = 0; r < e.length; r++)
    n = e.charCodeAt(r) + ((n << 5) - n);
  const t = [
    "bg-indigo-500",
    "bg-blue-500",
    "bg-cyan-500",
    "bg-teal-500",
    "bg-green-500",
    "bg-lime-500",
    "bg-amber-500",
    "bg-orange-500",
    "bg-red-500",
    "bg-pink-500",
    "bg-purple-500",
    "bg-violet-500"
  ];
  return t[Math.abs(n) % t.length] ?? "bg-slate-500";
}
const Vm = E.forwardRef(
  ({
    className: e,
    size: n,
    shape: t,
    src: r,
    name: o = "",
    alt: i,
    status: s,
    loading: a = !1,
    initials: l,
    ...u
  }, c) => {
    const [d, f] = E.useState(!1), [p, g] = E.useState(!!r);
    E.useEffect(() => {
      r && (f(!1), g(!0));
    }, [r]);
    const h = l || zm(o), m = Bm(o), v = r && !d && !a, y = !v && !a, b = a || p;
    return /* @__PURE__ */ D("div", { ref: c, className: P(Lm({ size: n, shape: t }), e), ...u, children: [
      v && /* @__PURE__ */ _(
        "img",
        {
          src: r,
          alt: i || o || "Avatar",
          className: P(
            "h-full w-full object-cover",
            b && "opacity-0",
            !b && "opacity-100 transition-opacity duration-200"
          ),
          onError: () => {
            f(!0), g(!1);
          },
          onLoad: () => {
            g(!1);
          }
        }
      ),
      y && /* @__PURE__ */ _(
        "div",
        {
          className: P(
            "flex h-full w-full items-center justify-center font-medium text-white",
            m
          ),
          children: h
        }
      ),
      b && !v && /* @__PURE__ */ _("div", { className: "h-full w-full animate-pulse bg-slate-200 dark:bg-slate-700" }),
      s && !a && /* @__PURE__ */ _(
        "span",
        {
          className: P(Dm({ status: s, size: n })),
          "aria-label": `Status: ${s}`
        }
      )
    ] });
  }
);
Vm.displayName = "Avatar";
const Ba = te("inline-flex rounded-full flex-shrink-0", {
  variants: {
    status: {
      online: "bg-green-500 dark:bg-green-400",
      offline: "bg-slate-400 dark:bg-slate-500",
      away: "bg-yellow-500 dark:bg-yellow-400",
      busy: "bg-red-500 dark:bg-red-400",
      idle: "bg-blue-500 dark:bg-blue-400"
    },
    size: {
      xs: "h-1.5 w-1.5",
      sm: "h-2 w-2",
      md: "h-2.5 w-2.5",
      lg: "h-3 w-3",
      xl: "h-4 w-4"
    },
    variant: {
      dot: "",
      pulsing: "animate-pulse",
      ring: "ring-2 ring-white dark:ring-slate-900"
    }
  },
  defaultVariants: {
    status: "online",
    size: "md",
    variant: "dot"
  }
}), Va = te("text-sm font-medium", {
  variants: {
    status: {
      online: "text-green-700 dark:text-green-300",
      offline: "text-slate-700 dark:text-slate-300",
      away: "text-yellow-700 dark:text-yellow-300",
      busy: "text-red-700 dark:text-red-300",
      idle: "text-blue-700 dark:text-blue-300"
    }
  },
  defaultVariants: {
    status: "online"
  }
}), jm = E.forwardRef(
  ({
    className: e,
    status: n = "online",
    size: t = "md",
    variant: r = "dot",
    label: o,
    labelPosition: i = "right",
    showRing: s = !1,
    ...a
  }, l) => {
    const u = s ? "ring" : r, c = o !== void 0 ? o : "";
    return c ? /* @__PURE__ */ D(
      "span",
      {
        ref: l,
        className: P("inline-flex items-center gap-2", e),
        role: "status",
        "aria-label": `Status: ${n || "online"}`,
        ...a,
        children: [
          i === "left" && /* @__PURE__ */ _("span", { className: Va({ status: n }), children: c }),
          /* @__PURE__ */ _(
            "span",
            {
              className: Ba({ status: n, size: t, variant: u }),
              "aria-hidden": "true"
            }
          ),
          i === "right" && /* @__PURE__ */ _("span", { className: Va({ status: n }), children: c })
        ]
      }
    ) : /* @__PURE__ */ _(
      "span",
      {
        ref: l,
        className: P(
          Ba({ status: n, size: t, variant: u }),
          e
        ),
        role: "status",
        "aria-label": `Status: ${n || "online"}`,
        ...a
      }
    );
  }
);
jm.displayName = "StatusIndicator";
const Um = te(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        info: "border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-900/50 dark:bg-blue-950/50 dark:text-blue-100 [&>svg]:text-blue-600 dark:[&>svg]:text-blue-400",
        success: "border-green-200 bg-green-50 text-green-900 dark:border-green-900/50 dark:bg-green-950/50 dark:text-green-100 [&>svg]:text-green-600 dark:[&>svg]:text-green-400",
        warning: "border-yellow-200 bg-yellow-50 text-yellow-900 dark:border-yellow-900/50 dark:bg-yellow-950/50 dark:text-yellow-100 [&>svg]:text-yellow-600 dark:[&>svg]:text-yellow-400",
        error: "border-red-200 bg-red-50 text-red-900 dark:border-red-900/50 dark:bg-red-950/50 dark:text-red-100 [&>svg]:text-red-600 dark:[&>svg]:text-red-400"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), Gm = {
  default: Gi,
  info: Gi,
  success: Zg,
  warning: hr,
  error: qg
}, Hm = E.forwardRef(
  ({ className: e, variant: n, showIcon: t = !0, dismissible: r, onDismiss: o, children: i, ...s }, a) => {
    const [l, u] = E.useState(!1), c = () => {
      u(!0), o == null || o();
    };
    if (l) return null;
    const d = Gm[n || "default"];
    return /* @__PURE__ */ D("div", { ref: a, role: "alert", className: P(Um({ variant: n }), e), ...s, children: [
      t && /* @__PURE__ */ _(d, { className: "h-4 w-4", "aria-hidden": "true" }),
      /* @__PURE__ */ _("div", { className: "flex-1", children: i }),
      r && /* @__PURE__ */ _(
        "button",
        {
          onClick: c,
          className: "ring-offset-background focus:ring-ring absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none",
          "aria-label": "Dismiss alert",
          children: /* @__PURE__ */ _(nc, { className: "h-4 w-4" })
        }
      )
    ] });
  }
);
Hm.displayName = "Alert";
const Wm = E.forwardRef(
  ({ className: e, children: n, ...t }, r) => /* @__PURE__ */ _(
    "h5",
    {
      ref: r,
      className: P("mb-1 leading-none font-medium tracking-tight", e),
      ...t,
      children: n
    }
  )
);
Wm.displayName = "AlertTitle";
const Km = E.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ _("div", { ref: t, className: P("text-sm [&_p]:leading-relaxed", e), ...n }));
Km.displayName = "AlertDescription";
var qm = Object.create, Vo = Object.defineProperty, Zm = Object.defineProperties, Jm = Object.getOwnPropertyDescriptor, Ym = Object.getOwnPropertyDescriptors, td = Object.getOwnPropertyNames, fo = Object.getOwnPropertySymbols, Xm = Object.getPrototypeOf, Ds = Object.prototype.hasOwnProperty, nd = Object.prototype.propertyIsEnumerable, ja = (e, n, t) => n in e ? Vo(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, at = (e, n) => {
  for (var t in n || (n = {}))
    Ds.call(n, t) && ja(e, t, n[t]);
  if (fo)
    for (var t of fo(n))
      nd.call(n, t) && ja(e, t, n[t]);
  return e;
}, jo = (e, n) => Zm(e, Ym(n)), rd = (e, n) => {
  var t = {};
  for (var r in e)
    Ds.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && fo)
    for (var r of fo(e))
      n.indexOf(r) < 0 && nd.call(e, r) && (t[r] = e[r]);
  return t;
}, Qm = (e, n) => function() {
  return n || (0, e[td(e)[0]])((n = { exports: {} }).exports, n), n.exports;
}, ey = (e, n) => {
  for (var t in n)
    Vo(e, t, { get: n[t], enumerable: !0 });
}, ty = (e, n, t, r) => {
  if (n && typeof n == "object" || typeof n == "function")
    for (let o of td(n))
      !Ds.call(e, o) && o !== t && Vo(e, o, { get: () => n[o], enumerable: !(r = Jm(n, o)) || r.enumerable });
  return e;
}, ny = (e, n, t) => (t = e != null ? qm(Xm(e)) : {}, ty(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !e || !e.__esModule ? Vo(t, "default", { value: e, enumerable: !0 }) : t,
  e
)), ry = Qm({
  "../../node_modules/.pnpm/prismjs@1.29.0_patch_hash=vrxx3pzkik6jpmgpayxfjunetu/node_modules/prismjs/prism.js"(e, n) {
    var t = (function() {
      var r = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, o = 0, i = {}, s = {
        /**
         * A namespace for utility methods.
         *
         * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
         * change or disappear at any time.
         *
         * @namespace
         * @memberof Prism
         */
        util: {
          encode: function g(h) {
            return h instanceof a ? new a(h.type, g(h.content), h.alias) : Array.isArray(h) ? h.map(g) : h.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
          },
          /**
           * Returns the name of the type of the given value.
           *
           * @param {any} o
           * @returns {string}
           * @example
           * type(null)      === 'Null'
           * type(undefined) === 'Undefined'
           * type(123)       === 'Number'
           * type('foo')     === 'String'
           * type(true)      === 'Boolean'
           * type([1, 2])    === 'Array'
           * type({})        === 'Object'
           * type(String)    === 'Function'
           * type(/abc+/)    === 'RegExp'
           */
          type: function(g) {
            return Object.prototype.toString.call(g).slice(8, -1);
          },
          /**
           * Returns a unique number for the given object. Later calls will still return the same number.
           *
           * @param {Object} obj
           * @returns {number}
           */
          objId: function(g) {
            return g.__id || Object.defineProperty(g, "__id", { value: ++o }), g.__id;
          },
          /**
           * Creates a deep clone of the given object.
           *
           * The main intended use of this function is to clone language definitions.
           *
           * @param {T} o
           * @param {Record<number, any>} [visited]
           * @returns {T}
           * @template T
           */
          clone: function g(h, m) {
            m = m || {};
            var v, y;
            switch (s.util.type(h)) {
              case "Object":
                if (y = s.util.objId(h), m[y])
                  return m[y];
                v = /** @type {Record<string, any>} */
                {}, m[y] = v;
                for (var b in h)
                  h.hasOwnProperty(b) && (v[b] = g(h[b], m));
                return (
                  /** @type {any} */
                  v
                );
              case "Array":
                return y = s.util.objId(h), m[y] ? m[y] : (v = [], m[y] = v, h.forEach(function(x, w) {
                  v[w] = g(x, m);
                }), /** @type {any} */
                v);
              default:
                return h;
            }
          },
          /**
           * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
           *
           * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
           *
           * @param {Element} element
           * @returns {string}
           */
          getLanguage: function(g) {
            for (; g; ) {
              var h = r.exec(g.className);
              if (h)
                return h[1].toLowerCase();
              g = g.parentElement;
            }
            return "none";
          },
          /**
           * Sets the Prism `language-xxxx` class of the given element.
           *
           * @param {Element} element
           * @param {string} language
           * @returns {void}
           */
          setLanguage: function(g, h) {
            g.className = g.className.replace(RegExp(r, "gi"), ""), g.classList.add("language-" + h);
          },
          /**
           * Returns whether a given class is active for `element`.
           *
           * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
           * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
           * given class is just the given class with a `no-` prefix.
           *
           * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
           * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
           * ancestors have the given class or the negated version of it, then the default activation will be returned.
           *
           * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
           * version of it, the class is considered active.
           *
           * @param {Element} element
           * @param {string} className
           * @param {boolean} [defaultActivation=false]
           * @returns {boolean}
           */
          isActive: function(g, h, m) {
            for (var v = "no-" + h; g; ) {
              var y = g.classList;
              if (y.contains(h))
                return !0;
              if (y.contains(v))
                return !1;
              g = g.parentElement;
            }
            return !!m;
          }
        },
        /**
         * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
         *
         * @namespace
         * @memberof Prism
         * @public
         */
        languages: {
          /**
           * The grammar for plain, unformatted text.
           */
          plain: i,
          plaintext: i,
          text: i,
          txt: i,
          /**
           * Creates a deep copy of the language with the given id and appends the given tokens.
           *
           * If a token in `redef` also appears in the copied language, then the existing token in the copied language
           * will be overwritten at its original position.
           *
           * ## Best practices
           *
           * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
           * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
           * understand the language definition because, normally, the order of tokens matters in Prism grammars.
           *
           * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
           * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
           *
           * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
           * @param {Grammar} redef The new tokens to append.
           * @returns {Grammar} The new language created.
           * @public
           * @example
           * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
           *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
           *     // at its original position
           *     'comment': { ... },
           *     // CSS doesn't have a 'color' token, so this token will be appended
           *     'color': /\b(?:red|green|blue)\b/
           * });
           */
          extend: function(g, h) {
            var m = s.util.clone(s.languages[g]);
            for (var v in h)
              m[v] = h[v];
            return m;
          },
          /**
           * Inserts tokens _before_ another token in a language definition or any other grammar.
           *
           * ## Usage
           *
           * This helper method makes it easy to modify existing languages. For example, the CSS language definition
           * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
           * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
           * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
           * this:
           *
           * ```js
           * Prism.languages.markup.style = {
           *     // token
           * };
           * ```
           *
           * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
           * before existing tokens. For the CSS example above, you would use it like this:
           *
           * ```js
           * Prism.languages.insertBefore('markup', 'cdata', {
           *     'style': {
           *         // token
           *     }
           * });
           * ```
           *
           * ## Special cases
           *
           * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
           * will be ignored.
           *
           * This behavior can be used to insert tokens after `before`:
           *
           * ```js
           * Prism.languages.insertBefore('markup', 'comment', {
           *     'comment': Prism.languages.markup.comment,
           *     // tokens after 'comment'
           * });
           * ```
           *
           * ## Limitations
           *
           * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
           * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
           * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
           * deleting properties which is necessary to insert at arbitrary positions.
           *
           * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
           * Instead, it will create a new object and replace all references to the target object with the new one. This
           * can be done without temporarily deleting properties, so the iteration order is well-defined.
           *
           * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
           * you hold the target object in a variable, then the value of the variable will not change.
           *
           * ```js
           * var oldMarkup = Prism.languages.markup;
           * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
           *
           * assert(oldMarkup !== Prism.languages.markup);
           * assert(newMarkup === Prism.languages.markup);
           * ```
           *
           * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
           * object to be modified.
           * @param {string} before The key to insert before.
           * @param {Grammar} insert An object containing the key-value pairs to be inserted.
           * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
           * object to be modified.
           *
           * Defaults to `Prism.languages`.
           * @returns {Grammar} The new grammar object.
           * @public
           */
          insertBefore: function(g, h, m, v) {
            v = v || /** @type {any} */
            s.languages;
            var y = v[g], b = {};
            for (var x in y)
              if (y.hasOwnProperty(x)) {
                if (x == h)
                  for (var w in m)
                    m.hasOwnProperty(w) && (b[w] = m[w]);
                m.hasOwnProperty(x) || (b[x] = y[x]);
              }
            var S = v[g];
            return v[g] = b, s.languages.DFS(s.languages, function(k, N) {
              N === S && k != g && (this[k] = b);
            }), b;
          },
          // Traverse a language definition with Depth First Search
          DFS: function g(h, m, v, y) {
            y = y || {};
            var b = s.util.objId;
            for (var x in h)
              if (h.hasOwnProperty(x)) {
                m.call(h, x, h[x], v || x);
                var w = h[x], S = s.util.type(w);
                S === "Object" && !y[b(w)] ? (y[b(w)] = !0, g(w, m, null, y)) : S === "Array" && !y[b(w)] && (y[b(w)] = !0, g(w, m, x, y));
              }
          }
        },
        plugins: {},
        /**
         * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
         * and the language definitions to use, and returns a string with the HTML produced.
         *
         * The following hooks will be run:
         * 1. `before-tokenize`
         * 2. `after-tokenize`
         * 3. `wrap`: On each {@link Token}.
         *
         * @param {string} text A string with the code to be highlighted.
         * @param {Grammar} grammar An object containing the tokens to use.
         *
         * Usually a language definition like `Prism.languages.markup`.
         * @param {string} language The name of the language definition passed to `grammar`.
         * @returns {string} The highlighted HTML.
         * @memberof Prism
         * @public
         * @example
         * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
         */
        highlight: function(g, h, m) {
          var v = {
            code: g,
            grammar: h,
            language: m
          };
          if (s.hooks.run("before-tokenize", v), !v.grammar)
            throw new Error('The language "' + v.language + '" has no grammar.');
          return v.tokens = s.tokenize(v.code, v.grammar), s.hooks.run("after-tokenize", v), a.stringify(s.util.encode(v.tokens), v.language);
        },
        /**
         * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
         * and the language definitions to use, and returns an array with the tokenized code.
         *
         * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
         *
         * This method could be useful in other contexts as well, as a very crude parser.
         *
         * @param {string} text A string with the code to be highlighted.
         * @param {Grammar} grammar An object containing the tokens to use.
         *
         * Usually a language definition like `Prism.languages.markup`.
         * @returns {TokenStream} An array of strings and tokens, a token stream.
         * @memberof Prism
         * @public
         * @example
         * let code = `var foo = 0;`;
         * let tokens = Prism.tokenize(code, Prism.languages.javascript);
         * tokens.forEach(token => {
         *     if (token instanceof Prism.Token && token.type === 'number') {
         *         console.log(`Found numeric literal: ${token.content}`);
         *     }
         * });
         */
        tokenize: function(g, h) {
          var m = h.rest;
          if (m) {
            for (var v in m)
              h[v] = m[v];
            delete h.rest;
          }
          var y = new c();
          return d(y, y.head, g), u(g, y, h, y.head, 0), p(y);
        },
        /**
         * @namespace
         * @memberof Prism
         * @public
         */
        hooks: {
          all: {},
          /**
           * Adds the given callback to the list of callbacks for the given hook.
           *
           * The callback will be invoked when the hook it is registered for is run.
           * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
           *
           * One callback function can be registered to multiple hooks and the same hook multiple times.
           *
           * @param {string} name The name of the hook.
           * @param {HookCallback} callback The callback function which is given environment variables.
           * @public
           */
          add: function(g, h) {
            var m = s.hooks.all;
            m[g] = m[g] || [], m[g].push(h);
          },
          /**
           * Runs a hook invoking all registered callbacks with the given environment variables.
           *
           * Callbacks will be invoked synchronously and in the order in which they were registered.
           *
           * @param {string} name The name of the hook.
           * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
           * @public
           */
          run: function(g, h) {
            var m = s.hooks.all[g];
            if (!(!m || !m.length))
              for (var v = 0, y; y = m[v++]; )
                y(h);
          }
        },
        Token: a
      };
      function a(g, h, m, v) {
        this.type = g, this.content = h, this.alias = m, this.length = (v || "").length | 0;
      }
      a.stringify = function g(h, m) {
        if (typeof h == "string")
          return h;
        if (Array.isArray(h)) {
          var v = "";
          return h.forEach(function(S) {
            v += g(S, m);
          }), v;
        }
        var y = {
          type: h.type,
          content: g(h.content, m),
          tag: "span",
          classes: ["token", h.type],
          attributes: {},
          language: m
        }, b = h.alias;
        b && (Array.isArray(b) ? Array.prototype.push.apply(y.classes, b) : y.classes.push(b)), s.hooks.run("wrap", y);
        var x = "";
        for (var w in y.attributes)
          x += " " + w + '="' + (y.attributes[w] || "").replace(/"/g, "&quot;") + '"';
        return "<" + y.tag + ' class="' + y.classes.join(" ") + '"' + x + ">" + y.content + "</" + y.tag + ">";
      };
      function l(g, h, m, v) {
        g.lastIndex = h;
        var y = g.exec(m);
        if (y && v && y[1]) {
          var b = y[1].length;
          y.index += b, y[0] = y[0].slice(b);
        }
        return y;
      }
      function u(g, h, m, v, y, b) {
        for (var x in m)
          if (!(!m.hasOwnProperty(x) || !m[x])) {
            var w = m[x];
            w = Array.isArray(w) ? w : [w];
            for (var S = 0; S < w.length; ++S) {
              if (b && b.cause == x + "," + S)
                return;
              var k = w[S], N = k.inside, C = !!k.lookbehind, R = !!k.greedy, O = k.alias;
              if (R && !k.pattern.global) {
                var F = k.pattern.toString().match(/[imsuy]*$/)[0];
                k.pattern = RegExp(k.pattern.source, F + "g");
              }
              for (var U = k.pattern || k, L = v.next, M = y; L !== h.tail && !(b && M >= b.reach); M += L.value.length, L = L.next) {
                var G = L.value;
                if (h.length > g.length)
                  return;
                if (!(G instanceof a)) {
                  var H = 1, J;
                  if (R) {
                    if (J = l(U, M, g, C), !J || J.index >= g.length)
                      break;
                    var Y = J.index, ee = J.index + J[0].length, oe = M;
                    for (oe += L.value.length; Y >= oe; )
                      L = L.next, oe += L.value.length;
                    if (oe -= L.value.length, M = oe, L.value instanceof a)
                      continue;
                    for (var W = L; W !== h.tail && (oe < ee || typeof W.value == "string"); W = W.next)
                      H++, oe += W.value.length;
                    H--, G = g.slice(M, oe), J.index -= M;
                  } else if (J = l(U, 0, G, C), !J)
                    continue;
                  var Y = J.index, ue = J[0], ge = G.slice(0, Y), me = G.slice(Y + ue.length), Re = M + G.length;
                  b && Re > b.reach && (b.reach = Re);
                  var De = L.prev;
                  ge && (De = d(h, De, ge), M += ge.length), f(h, De, H);
                  var We = new a(x, N ? s.tokenize(ue, N) : ue, O, ue);
                  if (L = d(h, De, We), me && d(h, L, me), H > 1) {
                    var Ke = {
                      cause: x + "," + S,
                      reach: Re
                    };
                    u(g, h, m, L.prev, M, Ke), b && Ke.reach > b.reach && (b.reach = Ke.reach);
                  }
                }
              }
            }
          }
      }
      function c() {
        var g = { value: null, prev: null, next: null }, h = { value: null, prev: g, next: null };
        g.next = h, this.head = g, this.tail = h, this.length = 0;
      }
      function d(g, h, m) {
        var v = h.next, y = { value: m, prev: h, next: v };
        return h.next = y, v.prev = y, g.length++, y;
      }
      function f(g, h, m) {
        for (var v = h.next, y = 0; y < m && v !== g.tail; y++)
          v = v.next;
        h.next = v, v.prev = h, g.length -= y;
      }
      function p(g) {
        for (var h = [], m = g.head.next; m !== g.tail; )
          h.push(m.value), m = m.next;
        return h;
      }
      return s;
    })();
    n.exports = t, t.default = t;
  }
}), I = ny(ry());
I.languages.markup = { comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 }, prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 }, doctype: { pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i, greedy: !0, inside: { "internal-subset": { pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/, lookbehind: !0, greedy: !0, inside: null }, string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 }, punctuation: /^<!|>$|[[\]]/, "doctype-tag": /^DOCTYPE/i, name: /[^\s<>'"]+/ } }, cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 }, tag: { pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/, greedy: !0, inside: { tag: { pattern: /^<\/?[^\s>\/]+/, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } }, "special-attr": [], "attr-value": { pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/, inside: { punctuation: [{ pattern: /^=/, alias: "attr-equals" }, { pattern: /^(\s*)["']|["']$/, lookbehind: !0 }] } }, punctuation: /\/?>/, "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } } } }, entity: [{ pattern: /&[\da-z]{1,8};/i, alias: "named-entity" }, /&#x?[\da-f]{1,8};/i] }, I.languages.markup.tag.inside["attr-value"].inside.entity = I.languages.markup.entity, I.languages.markup.doctype.inside["internal-subset"].inside = I.languages.markup, I.hooks.add("wrap", function(e) {
  e.type === "entity" && (e.attributes.title = e.content.replace(/&amp;/, "&"));
}), Object.defineProperty(I.languages.markup.tag, "addInlined", { value: function(e, r) {
  var t = {}, t = (t["language-" + r] = { pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i, lookbehind: !0, inside: I.languages[r] }, t.cdata = /^<!\[CDATA\[|\]\]>$/i, { "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: t } }), r = (t["language-" + r] = { pattern: /[\s\S]+/, inside: I.languages[r] }, {});
  r[e] = { pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
    return e;
  }), "i"), lookbehind: !0, greedy: !0, inside: t }, I.languages.insertBefore("markup", "cdata", r);
} }), Object.defineProperty(I.languages.markup.tag, "addAttribute", { value: function(e, n) {
  I.languages.markup.tag.inside["special-attr"].push({ pattern: RegExp(/(^|["'\s])/.source + "(?:" + e + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"), lookbehind: !0, inside: { "attr-name": /^[^\s=]+/, "attr-value": { pattern: /=[\s\S]+/, inside: { value: { pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/, lookbehind: !0, alias: [n, "language-" + n], inside: I.languages[n] }, punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/] } } } });
} }), I.languages.html = I.languages.markup, I.languages.mathml = I.languages.markup, I.languages.svg = I.languages.markup, I.languages.xml = I.languages.extend("markup", {}), I.languages.ssml = I.languages.xml, I.languages.atom = I.languages.xml, I.languages.rss = I.languages.xml, (function(e) {
  var n = { pattern: /\\[\\(){}[\]^$+*?|.]/, alias: "escape" }, t = /\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/, r = "(?:[^\\\\-]|" + t.source + ")", r = RegExp(r + "-" + r), o = { pattern: /(<|')[^<>']+(?=[>']$)/, lookbehind: !0, alias: "variable" };
  e.languages.regex = { "char-class": { pattern: /((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/, lookbehind: !0, inside: { "char-class-negation": { pattern: /(^\[)\^/, lookbehind: !0, alias: "operator" }, "char-class-punctuation": { pattern: /^\[|\]$/, alias: "punctuation" }, range: { pattern: r, inside: { escape: t, "range-punctuation": { pattern: /-/, alias: "operator" } } }, "special-escape": n, "char-set": { pattern: /\\[wsd]|\\p\{[^{}]+\}/i, alias: "class-name" }, escape: t } }, "special-escape": n, "char-set": { pattern: /\.|\\[wsd]|\\p\{[^{}]+\}/i, alias: "class-name" }, backreference: [{ pattern: /\\(?![123][0-7]{2})[1-9]/, alias: "keyword" }, { pattern: /\\k<[^<>']+>/, alias: "keyword", inside: { "group-name": o } }], anchor: { pattern: /[$^]|\\[ABbGZz]/, alias: "function" }, escape: t, group: [{ pattern: /\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/, alias: "punctuation", inside: { "group-name": o } }, { pattern: /\)/, alias: "punctuation" }], quantifier: { pattern: /(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/, alias: "number" }, alternation: { pattern: /\|/, alias: "keyword" } };
})(I), I.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0, greedy: !0 }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 }, "class-name": { pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i, lookbehind: !0, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/, boolean: /\b(?:false|true)\b/, function: /\b\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/, punctuation: /[{}[\];(),.:]/ }, I.languages.javascript = I.languages.extend("clike", { "class-name": [I.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/, lookbehind: !0 }], keyword: [{ pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 }, { pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: !0 }], function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, number: { pattern: RegExp(/(^|[^\w$])/.source + "(?:" + /NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source + ")" + /(?![\w$])/.source), lookbehind: !0 }, operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/ }), I.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, I.languages.insertBefore("javascript", "keyword", { regex: { pattern: RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source), lookbehind: !0, greedy: !0, inside: { "regex-source": { pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/, lookbehind: !0, alias: "language-regex", inside: I.languages.regex }, "regex-delimiter": /^\/|\/$/, "regex-flags": /^[a-z]+$/ } }, "function-variable": { pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/, lookbehind: !0, inside: I.languages.javascript }, { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i, lookbehind: !0, inside: I.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/, lookbehind: !0, inside: I.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/, lookbehind: !0, inside: I.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ }), I.languages.insertBefore("javascript", "string", { hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" }, "template-string": { pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/, greedy: !0, inside: { "template-punctuation": { pattern: /^`|`$/, alias: "string" }, interpolation: { pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/, lookbehind: !0, inside: { "interpolation-punctuation": { pattern: /^\$\{|\}$/, alias: "punctuation" }, rest: I.languages.javascript } }, string: /[\s\S]+/ } }, "string-property": { pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m, lookbehind: !0, greedy: !0, alias: "property" } }), I.languages.insertBefore("javascript", "operator", { "literal-property": { pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m, lookbehind: !0, alias: "property" } }), I.languages.markup && (I.languages.markup.tag.addInlined("script", "javascript"), I.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript")), I.languages.js = I.languages.javascript, I.languages.actionscript = I.languages.extend("javascript", { keyword: /\b(?:as|break|case|catch|class|const|default|delete|do|dynamic|each|else|extends|final|finally|for|function|get|if|implements|import|in|include|instanceof|interface|internal|is|namespace|native|new|null|override|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|use|var|void|while|with)\b/, operator: /\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/ }), I.languages.actionscript["class-name"].alias = "function", delete I.languages.actionscript.parameter, delete I.languages.actionscript["literal-property"], I.languages.markup && I.languages.insertBefore("actionscript", "string", { xml: { pattern: /(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/, lookbehind: !0, inside: I.languages.markup } }), (function(e) {
  var n = /#(?!\{).+/, t = { pattern: /#\{[^}]+\}/, alias: "variable" };
  e.languages.coffeescript = e.languages.extend("javascript", { comment: n, string: [{ pattern: /'(?:\\[\s\S]|[^\\'])*'/, greedy: !0 }, { pattern: /"(?:\\[\s\S]|[^\\"])*"/, greedy: !0, inside: { interpolation: t } }], keyword: /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/, "class-member": { pattern: /@(?!\d)\w+/, alias: "variable" } }), e.languages.insertBefore("coffeescript", "comment", { "multiline-comment": { pattern: /###[\s\S]+?###/, alias: "comment" }, "block-regex": { pattern: /\/{3}[\s\S]*?\/{3}/, alias: "regex", inside: { comment: n, interpolation: t } } }), e.languages.insertBefore("coffeescript", "string", { "inline-javascript": { pattern: /`(?:\\[\s\S]|[^\\`])*`/, inside: { delimiter: { pattern: /^`|`$/, alias: "punctuation" }, script: { pattern: /[\s\S]+/, alias: "language-javascript", inside: e.languages.javascript } } }, "multiline-string": [{ pattern: /'''[\s\S]*?'''/, greedy: !0, alias: "string" }, { pattern: /"""[\s\S]*?"""/, greedy: !0, alias: "string", inside: { interpolation: t } }] }), e.languages.insertBefore("coffeescript", "keyword", { property: /(?!\d)\w+(?=\s*:(?!:))/ }), delete e.languages.coffeescript["template-string"], e.languages.coffee = e.languages.coffeescript;
})(I), (function(e) {
  var n = e.languages.javadoclike = { parameter: { pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m, lookbehind: !0 }, keyword: { pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m, lookbehind: !0 }, punctuation: /[{}]/ };
  Object.defineProperty(n, "addSupport", { value: function(t, r) {
    (t = typeof t == "string" ? [t] : t).forEach(function(o) {
      var i = function(d) {
        d.inside || (d.inside = {}), d.inside.rest = r;
      }, s = "doc-comment";
      if (a = e.languages[o]) {
        var a, l = a[s];
        if ((l = l || (a = e.languages.insertBefore(o, "comment", { "doc-comment": { pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/, lookbehind: !0, alias: "comment" } }))[s]) instanceof RegExp && (l = a[s] = { pattern: l }), Array.isArray(l))
          for (var u = 0, c = l.length; u < c; u++)
            l[u] instanceof RegExp && (l[u] = { pattern: l[u] }), i(l[u]);
        else
          i(l);
      }
    });
  } }), n.addSupport(["java", "javascript", "php"], n);
})(I), (function(e) {
  var n = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/, n = (e.languages.css = { comment: /\/\*[\s\S]*?\*\//, atrule: { pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + n.source + ")*?" + /(?:;|(?=\s*\{))/.source), inside: { rule: /^@[\w-]+/, "selector-function-argument": { pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/, lookbehind: !0, alias: "selector" }, keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: !0 } } }, url: { pattern: RegExp("\\burl\\((?:" + n.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"), greedy: !0, inside: { function: /^url/i, punctuation: /^\(|\)$/, string: { pattern: RegExp("^" + n.source + "$"), alias: "url" } } }, selector: { pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + n.source + ")*(?=\\s*\\{)"), lookbehind: !0 }, string: { pattern: n, greedy: !0 }, property: { pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i, lookbehind: !0 }, important: /!important\b/i, function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0 }, punctuation: /[(){};:,]/ }, e.languages.css.atrule.inside.rest = e.languages.css, e.languages.markup);
  n && (n.tag.addInlined("style", "css"), n.tag.addAttribute("style", "css"));
})(I), (function(e) {
  var n = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, n = (e.languages.css.selector = { pattern: e.languages.css.selector.pattern, lookbehind: !0, inside: n = { "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/, "pseudo-class": /:[-\w]+/, class: /\.[-\w]+/, id: /#[-\w]+/, attribute: { pattern: RegExp(`\\[(?:[^[\\]"']|` + n.source + ")*\\]"), greedy: !0, inside: { punctuation: /^\[|\]$/, "case-sensitivity": { pattern: /(\s)[si]$/i, lookbehind: !0, alias: "keyword" }, namespace: { pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/, lookbehind: !0, inside: { punctuation: /\|$/ } }, "attr-name": { pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/, lookbehind: !0 }, "attr-value": [n, { pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/, lookbehind: !0 }], operator: /[|~*^$]?=/ } }, "n-th": [{ pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/, lookbehind: !0, inside: { number: /[\dn]+/, operator: /[+-]/ } }, { pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i, lookbehind: !0 }], combinator: />|\+|~|\|\|/, punctuation: /[(),]/ } }, e.languages.css.atrule.inside["selector-function-argument"].inside = n, e.languages.insertBefore("css", "property", { variable: { pattern: /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i, lookbehind: !0 } }), { pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/, lookbehind: !0 }), t = { pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/, lookbehind: !0 };
  e.languages.insertBefore("css", "function", { operator: { pattern: /(\s)[+\-*\/](?=\s)/, lookbehind: !0 }, hexcode: { pattern: /\B#[\da-f]{3,8}\b/i, alias: "color" }, color: [{ pattern: /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i, lookbehind: !0 }, { pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i, inside: { unit: n, number: t, function: /[\w-]+(?=\()/, punctuation: /[(),]/ } }], entity: /\\[\da-f]{1,8}/i, unit: n, number: t });
})(I), (function(e) {
  var n = /[*&][^\s[\]{},]+/, t = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/, r = "(?:" + t.source + "(?:[ 	]+" + n.source + ")?|" + n.source + "(?:[ 	]+" + t.source + ")?)", o = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, function() {
    return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
  }), i = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
  function s(a, l) {
    l = (l || "").replace(/m/g, "") + "m";
    var u = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function() {
      return r;
    }).replace(/<<value>>/g, function() {
      return a;
    });
    return RegExp(u, l);
  }
  e.languages.yaml = { scalar: { pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, function() {
    return r;
  })), lookbehind: !0, alias: "string" }, comment: /#.*/, key: { pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, function() {
    return r;
  }).replace(/<<key>>/g, function() {
    return "(?:" + o + "|" + i + ")";
  })), lookbehind: !0, greedy: !0, alias: "atrule" }, directive: { pattern: /(^[ \t]*)%.+/m, lookbehind: !0, alias: "important" }, datetime: { pattern: s(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source), lookbehind: !0, alias: "number" }, boolean: { pattern: s(/false|true/.source, "i"), lookbehind: !0, alias: "important" }, null: { pattern: s(/null|~/.source, "i"), lookbehind: !0, alias: "important" }, string: { pattern: s(i), lookbehind: !0, greedy: !0 }, number: { pattern: s(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, "i"), lookbehind: !0 }, tag: t, important: n, punctuation: /---|[:[\]{}\-,|>?]|\.\.\./ }, e.languages.yml = e.languages.yaml;
})(I), (function(e) {
  var n = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
  function t(u) {
    return u = u.replace(/<inner>/g, function() {
      return n;
    }), RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + u + ")");
  }
  var r = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source, o = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function() {
    return r;
  }), i = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source, s = (e.languages.markdown = e.languages.extend("markup", {}), e.languages.insertBefore("markdown", "prolog", { "front-matter-block": { pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/, lookbehind: !0, greedy: !0, inside: { punctuation: /^---|---$/, "front-matter": { pattern: /\S+(?:\s+\S+)*/, alias: ["yaml", "language-yaml"], inside: e.languages.yaml } } }, blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: "punctuation" }, table: { pattern: RegExp("^" + o + i + "(?:" + o + ")*", "m"), inside: { "table-data-rows": { pattern: RegExp("^(" + o + i + ")(?:" + o + ")*$"), lookbehind: !0, inside: { "table-data": { pattern: RegExp(r), inside: e.languages.markdown }, punctuation: /\|/ } }, "table-line": { pattern: RegExp("^(" + o + ")" + i + "$"), lookbehind: !0, inside: { punctuation: /\||:?-{3,}:?/ } }, "table-header-row": { pattern: RegExp("^" + o + "$"), inside: { "table-header": { pattern: RegExp(r), alias: "important", inside: e.languages.markdown }, punctuation: /\|/ } } } }, code: [{ pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/, lookbehind: !0, alias: "keyword" }, { pattern: /^```[\s\S]*?^```$/m, greedy: !0, inside: { "code-block": { pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m, lookbehind: !0 }, "code-language": { pattern: /^(```).+/, lookbehind: !0 }, punctuation: /```/ } }], title: [{ pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m, alias: "important", inside: { punctuation: /==+$|--+$/ } }, { pattern: /(^\s*)#.+/m, lookbehind: !0, alias: "important", inside: { punctuation: /^#+|#+$/ } }], hr: { pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m, lookbehind: !0, alias: "punctuation" }, list: { pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m, lookbehind: !0, alias: "punctuation" }, "url-reference": { pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/, inside: { variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 }, string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/, punctuation: /^[\[\]!:]|[<>]/ }, alias: "url" }, bold: { pattern: t(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source), lookbehind: !0, greedy: !0, inside: { content: { pattern: /(^..)[\s\S]+(?=..$)/, lookbehind: !0, inside: {} }, punctuation: /\*\*|__/ } }, italic: { pattern: t(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source), lookbehind: !0, greedy: !0, inside: { content: { pattern: /(^.)[\s\S]+(?=.$)/, lookbehind: !0, inside: {} }, punctuation: /[*_]/ } }, strike: { pattern: t(/(~~?)(?:(?!~)<inner>)+\2/.source), lookbehind: !0, greedy: !0, inside: { content: { pattern: /(^~~?)[\s\S]+(?=\1$)/, lookbehind: !0, inside: {} }, punctuation: /~~?/ } }, "code-snippet": { pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/, lookbehind: !0, greedy: !0, alias: ["code", "keyword"] }, url: { pattern: t(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source), lookbehind: !0, greedy: !0, inside: { operator: /^!/, content: { pattern: /(^\[)[^\]]+(?=\])/, lookbehind: !0, inside: {} }, variable: { pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/, lookbehind: !0 }, url: { pattern: /(^\]\()[^\s)]+/, lookbehind: !0 }, string: { pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/, lookbehind: !0 } } } }), ["url", "bold", "italic", "strike"].forEach(function(u) {
    ["url", "bold", "italic", "strike", "code-snippet"].forEach(function(c) {
      u !== c && (e.languages.markdown[u].inside.content.inside[c] = e.languages.markdown[c]);
    });
  }), e.hooks.add("after-tokenize", function(u) {
    u.language !== "markdown" && u.language !== "md" || (function c(d) {
      if (d && typeof d != "string")
        for (var f = 0, p = d.length; f < p; f++) {
          var g, h = d[f];
          h.type !== "code" ? c(h.content) : (g = h.content[1], h = h.content[3], g && h && g.type === "code-language" && h.type === "code-block" && typeof g.content == "string" && (g = g.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp"), g = "language-" + (g = (/[a-z][\w-]*/i.exec(g) || [""])[0].toLowerCase()), h.alias ? typeof h.alias == "string" ? h.alias = [h.alias, g] : h.alias.push(g) : h.alias = [g]));
        }
    })(u.tokens);
  }), e.hooks.add("wrap", function(u) {
    if (u.type === "code-block") {
      for (var c = "", d = 0, f = u.classes.length; d < f; d++) {
        var p = u.classes[d], p = /language-(.+)/.exec(p);
        if (p) {
          c = p[1];
          break;
        }
      }
      var g, h = e.languages[c];
      h ? u.content = e.highlight((function(m) {
        return m = m.replace(s, ""), m = m.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function(v, y) {
          var b;
          return (y = y.toLowerCase())[0] === "#" ? (b = y[1] === "x" ? parseInt(y.slice(2), 16) : Number(y.slice(1)), l(b)) : a[y] || v;
        });
      })(u.content), h, c) : c && c !== "none" && e.plugins.autoloader && (g = "md-" + (/* @__PURE__ */ new Date()).valueOf() + "-" + Math.floor(1e16 * Math.random()), u.attributes.id = g, e.plugins.autoloader.loadLanguages(c, function() {
        var m = document.getElementById(g);
        m && (m.innerHTML = e.highlight(m.textContent, e.languages[c], c));
      }));
    }
  }), RegExp(e.languages.markup.tag.pattern.source, "gi")), a = { amp: "&", lt: "<", gt: ">", quot: '"' }, l = String.fromCodePoint || String.fromCharCode;
  e.languages.md = e.languages.markdown;
})(I), I.languages.graphql = { comment: /#.*/, description: { pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i, greedy: !0, alias: "string", inside: { "language-markdown": { pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/, lookbehind: !0, inside: I.languages.markdown } } }, string: { pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/, greedy: !0 }, number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i, boolean: /\b(?:false|true)\b/, variable: /\$[a-z_]\w*/i, directive: { pattern: /@[a-z_]\w*/i, alias: "function" }, "attr-name": { pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i, greedy: !0 }, "atom-input": { pattern: /\b[A-Z]\w*Input\b/, alias: "class-name" }, scalar: /\b(?:Boolean|Float|ID|Int|String)\b/, constant: /\b[A-Z][A-Z_\d]*\b/, "class-name": { pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/, lookbehind: !0 }, fragment: { pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/, lookbehind: !0, alias: "function" }, "definition-mutation": { pattern: /(\bmutation\s+)[a-zA-Z_]\w*/, lookbehind: !0, alias: "function" }, "definition-query": { pattern: /(\bquery\s+)[a-zA-Z_]\w*/, lookbehind: !0, alias: "function" }, keyword: /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/, operator: /[!=|&]|\.{3}/, "property-query": /\w+(?=\s*\()/, object: /\w+(?=\s*\{)/, punctuation: /[!(){}\[\]:=,]/, property: /\w+/ }, I.hooks.add("after-tokenize", function(e) {
  if (e.language === "graphql")
    for (var n = e.tokens.filter(function(g) {
      return typeof g != "string" && g.type !== "comment" && g.type !== "scalar";
    }), t = 0; t < n.length; ) {
      var r = n[t++];
      if (r.type === "keyword" && r.content === "mutation") {
        var o = [];
        if (d(["definition-mutation", "punctuation"]) && c(1).content === "(") {
          t += 2;
          var i = f(/^\($/, /^\)$/);
          if (i === -1)
            continue;
          for (; t < i; t++) {
            var s = c(0);
            s.type === "variable" && (p(s, "variable-input"), o.push(s.content));
          }
          t = i + 1;
        }
        if (d(["punctuation", "property-query"]) && c(0).content === "{" && (t++, p(c(0), "property-mutation"), 0 < o.length)) {
          var a = f(/^\{$/, /^\}$/);
          if (a !== -1)
            for (var l = t; l < a; l++) {
              var u = n[l];
              u.type === "variable" && 0 <= o.indexOf(u.content) && p(u, "variable-input");
            }
        }
      }
    }
  function c(g) {
    return n[t + g];
  }
  function d(g, h) {
    h = h || 0;
    for (var m = 0; m < g.length; m++) {
      var v = c(m + h);
      if (!v || v.type !== g[m])
        return;
    }
    return 1;
  }
  function f(g, h) {
    for (var m = 1, v = t; v < n.length; v++) {
      var y = n[v], b = y.content;
      if (y.type === "punctuation" && typeof b == "string") {
        if (g.test(b))
          m++;
        else if (h.test(b) && --m === 0)
          return v;
      }
    }
    return -1;
  }
  function p(g, h) {
    var m = g.alias;
    m ? Array.isArray(m) || (g.alias = m = [m]) : g.alias = m = [], m.push(h);
  }
}), I.languages.sql = { comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/, lookbehind: !0 }, variable: [{ pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/, greedy: !0 }, /@[\w.$]+/], string: { pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/, greedy: !0, lookbehind: !0 }, identifier: { pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/, greedy: !0, lookbehind: !0, inside: { punctuation: /^`|`$/ } }, function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i, keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i, boolean: /\b(?:FALSE|NULL|TRUE)\b/i, number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i, operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i, punctuation: /[;[\]()`,.]/ }, (function(e) {
  var n = e.languages.javascript["template-string"], t = n.pattern.source, r = n.inside.interpolation, o = r.inside["interpolation-punctuation"], i = r.pattern.source;
  function s(d, f) {
    if (e.languages[d])
      return { pattern: RegExp("((?:" + f + ")\\s*)" + t), lookbehind: !0, greedy: !0, inside: { "template-punctuation": { pattern: /^`|`$/, alias: "string" }, "embedded-code": { pattern: /[\s\S]+/, alias: d } } };
  }
  function a(d, f, p) {
    return d = { code: d, grammar: f, language: p }, e.hooks.run("before-tokenize", d), d.tokens = e.tokenize(d.code, d.grammar), e.hooks.run("after-tokenize", d), d.tokens;
  }
  function l(d, f, p) {
    var m = e.tokenize(d, { interpolation: { pattern: RegExp(i), lookbehind: !0 } }), g = 0, h = {}, m = a(m.map(function(y) {
      if (typeof y == "string")
        return y;
      for (var b, x, y = y.content; d.indexOf((x = g++, b = "___" + p.toUpperCase() + "_" + x + "___")) !== -1; )
        ;
      return h[b] = y, b;
    }).join(""), f, p), v = Object.keys(h);
    return g = 0, (function y(b) {
      for (var x = 0; x < b.length; x++) {
        if (g >= v.length)
          return;
        var w, S, k, N, C, R, O, F = b[x];
        typeof F == "string" || typeof F.content == "string" ? (w = v[g], (O = (R = typeof F == "string" ? F : F.content).indexOf(w)) !== -1 && (++g, S = R.substring(0, O), C = h[w], k = void 0, (N = {})["interpolation-punctuation"] = o, (N = e.tokenize(C, N)).length === 3 && ((k = [1, 1]).push.apply(k, a(N[1], e.languages.javascript, "javascript")), N.splice.apply(N, k)), k = new e.Token("interpolation", N, r.alias, C), N = R.substring(O + w.length), C = [], S && C.push(S), C.push(k), N && (y(R = [N]), C.push.apply(C, R)), typeof F == "string" ? (b.splice.apply(b, [x, 1].concat(C)), x += C.length - 1) : F.content = C)) : (O = F.content, Array.isArray(O) ? y(O) : y([O]));
      }
    })(m), new e.Token(p, m, "language-" + p, d);
  }
  e.languages.javascript["template-string"] = [s("css", /\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source), s("html", /\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source), s("svg", /\bsvg/.source), s("markdown", /\b(?:markdown|md)/.source), s("graphql", /\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source), s("sql", /\bsql/.source), n].filter(Boolean);
  var u = { javascript: !0, js: !0, typescript: !0, ts: !0, jsx: !0, tsx: !0 };
  function c(d) {
    return typeof d == "string" ? d : Array.isArray(d) ? d.map(c).join("") : c(d.content);
  }
  e.hooks.add("after-tokenize", function(d) {
    d.language in u && (function f(p) {
      for (var g = 0, h = p.length; g < h; g++) {
        var m, v, y, b = p[g];
        typeof b != "string" && (m = b.content, Array.isArray(m) ? b.type === "template-string" ? (b = m[1], m.length === 3 && typeof b != "string" && b.type === "embedded-code" && (v = c(b), b = b.alias, b = Array.isArray(b) ? b[0] : b, y = e.languages[b]) && (m[1] = l(v, y, b))) : f(m) : typeof m != "string" && f([m]));
      }
    })(d.tokens);
  });
})(I), (function(e) {
  e.languages.typescript = e.languages.extend("javascript", { "class-name": { pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/, lookbehind: !0, greedy: !0, inside: null }, builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/ }), e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/), delete e.languages.typescript.parameter, delete e.languages.typescript["literal-property"];
  var n = e.languages.extend("typescript", {});
  delete n["class-name"], e.languages.typescript["class-name"].inside = n, e.languages.insertBefore("typescript", "function", { decorator: { pattern: /@[$\w\xA0-\uFFFF]+/, inside: { at: { pattern: /^@/, alias: "operator" }, function: /^[\s\S]+/ } }, "generic-function": { pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/, greedy: !0, inside: { function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/, generic: { pattern: /<[\s\S]+/, alias: "class-name", inside: n } } } }), e.languages.ts = e.languages.typescript;
})(I), (function(e) {
  var n = e.languages.javascript, t = /\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})+\}/.source, r = "(@(?:arg|argument|param|property)\\s+(?:" + t + "\\s+)?)";
  e.languages.jsdoc = e.languages.extend("javadoclike", { parameter: { pattern: RegExp(r + /(?:(?!\s)[$\w\xA0-\uFFFF.])+(?=\s|$)/.source), lookbehind: !0, inside: { punctuation: /\./ } } }), e.languages.insertBefore("jsdoc", "keyword", { "optional-parameter": { pattern: RegExp(r + /\[(?:(?!\s)[$\w\xA0-\uFFFF.])+(?:=[^[\]]+)?\](?=\s|$)/.source), lookbehind: !0, inside: { parameter: { pattern: /(^\[)[$\w\xA0-\uFFFF\.]+/, lookbehind: !0, inside: { punctuation: /\./ } }, code: { pattern: /(=)[\s\S]*(?=\]$)/, lookbehind: !0, inside: n, alias: "language-javascript" }, punctuation: /[=[\]]/ } }, "class-name": [{ pattern: RegExp(/(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\s+(?:<TYPE>\s+)?)[A-Z]\w*(?:\.[A-Z]\w*)*/.source.replace(/<TYPE>/g, function() {
    return t;
  })), lookbehind: !0, inside: { punctuation: /\./ } }, { pattern: RegExp("(@[a-z]+\\s+)" + t), lookbehind: !0, inside: { string: n.string, number: n.number, boolean: n.boolean, keyword: e.languages.typescript.keyword, operator: /=>|\.\.\.|[&|?:*]/, punctuation: /[.,;=<>{}()[\]]/ } }], example: { pattern: /(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/, lookbehind: !0, inside: { code: { pattern: /^([\t ]*(?:\*\s*)?)\S.*$/m, lookbehind: !0, inside: n, alias: "language-javascript" } } } }), e.languages.javadoclike.addSupport("javascript", e.languages.jsdoc);
})(I), (function(e) {
  e.languages.flow = e.languages.extend("javascript", {}), e.languages.insertBefore("flow", "keyword", { type: [{ pattern: /\b(?:[Bb]oolean|Function|[Nn]umber|[Ss]tring|[Ss]ymbol|any|mixed|null|void)\b/, alias: "class-name" }] }), e.languages.flow["function-variable"].pattern = /(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/i, delete e.languages.flow.parameter, e.languages.insertBefore("flow", "operator", { "flow-punctuation": { pattern: /\{\||\|\}/, alias: "punctuation" } }), Array.isArray(e.languages.flow.keyword) || (e.languages.flow.keyword = [e.languages.flow.keyword]), e.languages.flow.keyword.unshift({ pattern: /(^|[^$]\b)(?:Class|declare|opaque|type)\b(?!\$)/, lookbehind: !0 }, { pattern: /(^|[^$]\B)\$(?:Diff|Enum|Exact|Keys|ObjMap|PropertyType|Record|Shape|Subtype|Supertype|await)\b(?!\$)/, lookbehind: !0 });
})(I), I.languages.n4js = I.languages.extend("javascript", { keyword: /\b(?:Array|any|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/ }), I.languages.insertBefore("n4js", "constant", { annotation: { pattern: /@+\w+/, alias: "operator" } }), I.languages.n4jsd = I.languages.n4js, (function(e) {
  function n(s, a) {
    return RegExp(s.replace(/<ID>/g, function() {
      return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source;
    }), a);
  }
  e.languages.insertBefore("javascript", "function-variable", { "method-variable": { pattern: RegExp("(\\.\\s*)" + e.languages.javascript["function-variable"].pattern.source), lookbehind: !0, alias: ["function-variable", "method", "function", "property-access"] } }), e.languages.insertBefore("javascript", "function", { method: { pattern: RegExp("(\\.\\s*)" + e.languages.javascript.function.source), lookbehind: !0, alias: ["function", "property-access"] } }), e.languages.insertBefore("javascript", "constant", { "known-class-name": [{ pattern: /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/, alias: "class-name" }, { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: "class-name" }] }), e.languages.insertBefore("javascript", "keyword", { imports: { pattern: n(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source), lookbehind: !0, inside: e.languages.javascript }, exports: { pattern: n(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source), lookbehind: !0, inside: e.languages.javascript } }), e.languages.javascript.keyword.unshift({ pattern: /\b(?:as|default|export|from|import)\b/, alias: "module" }, { pattern: /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/, alias: "control-flow" }, { pattern: /\bnull\b/, alias: ["null", "nil"] }, { pattern: /\bundefined\b/, alias: "nil" }), e.languages.insertBefore("javascript", "operator", { spread: { pattern: /\.{3}/, alias: "operator" }, arrow: { pattern: /=>/, alias: "operator" } }), e.languages.insertBefore("javascript", "punctuation", { "property-access": { pattern: n(/(\.\s*)#?<ID>/.source), lookbehind: !0 }, "maybe-class-name": { pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/, lookbehind: !0 }, dom: { pattern: /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/, alias: "variable" }, console: { pattern: /\bconsole(?=\s*\.)/, alias: "class-name" } });
  for (var t = ["function", "function-variable", "method", "method-variable", "property-access"], r = 0; r < t.length; r++) {
    var i = t[r], o = e.languages.javascript[i], i = (o = e.util.type(o) === "RegExp" ? e.languages.javascript[i] = { pattern: o } : o).inside || {};
    (o.inside = i)["maybe-class-name"] = /^[A-Z][\s\S]*/;
  }
})(I), (function(e) {
  var n = e.util.clone(e.languages.javascript), t = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source, r = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source, o = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
  function i(l, u) {
    return l = l.replace(/<S>/g, function() {
      return t;
    }).replace(/<BRACES>/g, function() {
      return r;
    }).replace(/<SPREAD>/g, function() {
      return o;
    }), RegExp(l, u);
  }
  o = i(o).source, e.languages.jsx = e.languages.extend("markup", n), e.languages.jsx.tag.pattern = i(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source), e.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/, e.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/, e.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, e.languages.jsx.tag.inside.comment = n.comment, e.languages.insertBefore("inside", "attr-name", { spread: { pattern: i(/<SPREAD>/.source), inside: e.languages.jsx } }, e.languages.jsx.tag), e.languages.insertBefore("inside", "special-attr", { script: { pattern: i(/=<BRACES>/.source), alias: "language-javascript", inside: { "script-punctuation": { pattern: /^=(?=\{)/, alias: "punctuation" }, rest: e.languages.jsx } } }, e.languages.jsx.tag);
  function s(l) {
    for (var u = [], c = 0; c < l.length; c++) {
      var d = l[c], f = !1;
      typeof d != "string" && (d.type === "tag" && d.content[0] && d.content[0].type === "tag" ? d.content[0].content[0].content === "</" ? 0 < u.length && u[u.length - 1].tagName === a(d.content[0].content[1]) && u.pop() : d.content[d.content.length - 1].content !== "/>" && u.push({ tagName: a(d.content[0].content[1]), openedBraces: 0 }) : 0 < u.length && d.type === "punctuation" && d.content === "{" ? u[u.length - 1].openedBraces++ : 0 < u.length && 0 < u[u.length - 1].openedBraces && d.type === "punctuation" && d.content === "}" ? u[u.length - 1].openedBraces-- : f = !0), (f || typeof d == "string") && 0 < u.length && u[u.length - 1].openedBraces === 0 && (f = a(d), c < l.length - 1 && (typeof l[c + 1] == "string" || l[c + 1].type === "plain-text") && (f += a(l[c + 1]), l.splice(c + 1, 1)), 0 < c && (typeof l[c - 1] == "string" || l[c - 1].type === "plain-text") && (f = a(l[c - 1]) + f, l.splice(c - 1, 1), c--), l[c] = new e.Token("plain-text", f, null, f)), d.content && typeof d.content != "string" && s(d.content);
    }
  }
  var a = function(l) {
    return l ? typeof l == "string" ? l : typeof l.content == "string" ? l.content : l.content.map(a).join("") : "";
  };
  e.hooks.add("after-tokenize", function(l) {
    l.language !== "jsx" && l.language !== "tsx" || s(l.tokens);
  });
})(I), (function(e) {
  var n = e.util.clone(e.languages.typescript), n = (e.languages.tsx = e.languages.extend("jsx", n), delete e.languages.tsx.parameter, delete e.languages.tsx["literal-property"], e.languages.tsx.tag);
  n.pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + "(?:" + n.pattern.source + ")", n.pattern.flags), n.lookbehind = !0;
})(I), I.languages.swift = { comment: { pattern: /(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/, lookbehind: !0, greedy: !0 }, "string-literal": [{ pattern: RegExp(/(^|[^"#])/.source + "(?:" + /"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/.source + "|" + /"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/.source + ")" + /(?!["#])/.source), lookbehind: !0, greedy: !0, inside: { interpolation: { pattern: /(\\\()(?:[^()]|\([^()]*\))*(?=\))/, lookbehind: !0, inside: null }, "interpolation-punctuation": { pattern: /^\)|\\\($/, alias: "punctuation" }, punctuation: /\\(?=[\r\n])/, string: /[\s\S]+/ } }, { pattern: RegExp(/(^|[^"#])(#+)/.source + "(?:" + /"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/.source + "|" + /"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/.source + ")\\2"), lookbehind: !0, greedy: !0, inside: { interpolation: { pattern: /(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/, lookbehind: !0, inside: null }, "interpolation-punctuation": { pattern: /^\)|\\#+\($/, alias: "punctuation" }, string: /[\s\S]+/ } }], directive: { pattern: RegExp(/#/.source + "(?:" + /(?:elseif|if)\b/.source + "(?:[ 	]*" + /(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/.source + ")+|" + /(?:else|endif)\b/.source + ")"), alias: "property", inside: { "directive-name": /^#\w+/, boolean: /\b(?:false|true)\b/, number: /\b\d+(?:\.\d+)*\b/, operator: /!|&&|\|\||[<>]=?/, punctuation: /[(),]/ } }, literal: { pattern: /#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/, alias: "constant" }, "other-directive": { pattern: /#\w+\b/, alias: "property" }, attribute: { pattern: /@\w+/, alias: "atrule" }, "function-definition": { pattern: /(\bfunc\s+)\w+/, lookbehind: !0, alias: "function" }, label: { pattern: /\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/, lookbehind: !0, alias: "important" }, keyword: /\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/, boolean: /\b(?:false|true)\b/, nil: { pattern: /\bnil\b/, alias: "constant" }, "short-argument": /\$\d+\b/, omit: { pattern: /\b_\b/, alias: "keyword" }, number: /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i, "class-name": /\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/, function: /\b[a-z_]\w*(?=\s*\()/i, constant: /\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/, operator: /[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/, punctuation: /[{}[\]();,.:\\]/ }, I.languages.swift["string-literal"].forEach(function(e) {
  e.inside.interpolation.inside = I.languages.swift;
}), (function(e) {
  e.languages.kotlin = e.languages.extend("clike", { keyword: { pattern: /(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/, lookbehind: !0 }, function: [{ pattern: /(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/, greedy: !0 }, { pattern: /(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/, lookbehind: !0, greedy: !0 }], number: /\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/, operator: /\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/ }), delete e.languages.kotlin["class-name"];
  var n = { "interpolation-punctuation": { pattern: /^\$\{?|\}$/, alias: "punctuation" }, expression: { pattern: /[\s\S]+/, inside: e.languages.kotlin } };
  e.languages.insertBefore("kotlin", "string", { "string-literal": [{ pattern: /"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/, alias: "multiline", inside: { interpolation: { pattern: /\$(?:[a-z_]\w*|\{[^{}]*\})/i, inside: n }, string: /[\s\S]+/ } }, { pattern: /"(?:[^"\\\r\n$]|\\.|\$(?:(?!\{)|\{[^{}]*\}))*"/, alias: "singleline", inside: { interpolation: { pattern: /((?:^|[^\\])(?:\\{2})*)\$(?:[a-z_]\w*|\{[^{}]*\})/i, lookbehind: !0, inside: n }, string: /[\s\S]+/ } }], char: { pattern: /'(?:[^'\\\r\n]|\\(?:.|u[a-fA-F0-9]{0,4}))'/, greedy: !0 } }), delete e.languages.kotlin.string, e.languages.insertBefore("kotlin", "keyword", { annotation: { pattern: /\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/, alias: "builtin" } }), e.languages.insertBefore("kotlin", "function", { label: { pattern: /\b\w+@|@\w+\b/, alias: "symbol" } }), e.languages.kt = e.languages.kotlin, e.languages.kts = e.languages.kotlin;
})(I), I.languages.c = I.languages.extend("clike", { comment: { pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 }, string: { pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/, greedy: !0 }, "class-name": { pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/, lookbehind: !0 }, keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/, function: /\b[a-z_]\w*(?=\s*\()/i, number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i, operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/ }), I.languages.insertBefore("c", "string", { char: { pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/, greedy: !0 } }), I.languages.insertBefore("c", "string", { macro: { pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im, lookbehind: !0, greedy: !0, alias: "property", inside: { string: [{ pattern: /^(#\s*include\s*)<[^>]+>/, lookbehind: !0 }, I.languages.c.string], char: I.languages.c.char, comment: I.languages.c.comment, "macro-name": [{ pattern: /(^#\s*define\s+)\w+\b(?!\()/i, lookbehind: !0 }, { pattern: /(^#\s*define\s+)\w+\b(?=\()/i, lookbehind: !0, alias: "function" }], directive: { pattern: /^(#\s*)[a-z]+/, lookbehind: !0, alias: "keyword" }, "directive-hash": /^#/, punctuation: /##|\\(?=[\r\n])/, expression: { pattern: /\S[\s\S]*/, inside: I.languages.c } } } }), I.languages.insertBefore("c", "function", { constant: /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/ }), delete I.languages.c.boolean, I.languages.objectivec = I.languages.extend("c", { string: { pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/, greedy: !0 }, keyword: /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/, operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/ }), delete I.languages.objectivec["class-name"], I.languages.objc = I.languages.objectivec, I.languages.reason = I.languages.extend("clike", { string: { pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/, greedy: !0 }, "class-name": /\b[A-Z]\w*/, keyword: /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/, operator: /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/ }), I.languages.insertBefore("reason", "class-name", { char: { pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/, greedy: !0 }, constructor: /\b[A-Z]\w*\b(?!\s*\.)/, label: { pattern: /\b[a-z]\w*(?=::)/, alias: "symbol" } }), delete I.languages.reason.function, (function(e) {
  for (var n = /\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source, t = 0; t < 2; t++)
    n = n.replace(/<self>/g, function() {
      return n;
    });
  n = n.replace(/<self>/g, function() {
    return /[^\s\S]/.source;
  }), e.languages.rust = { comment: [{ pattern: RegExp(/(^|[^\\])/.source + n), lookbehind: !0, greedy: !0 }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }], string: { pattern: /b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/, greedy: !0 }, char: { pattern: /b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/, greedy: !0 }, attribute: { pattern: /#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/, greedy: !0, alias: "attr-name", inside: { string: null } }, "closure-params": { pattern: /([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/, lookbehind: !0, greedy: !0, inside: { "closure-punctuation": { pattern: /^\||\|$/, alias: "punctuation" }, rest: null } }, "lifetime-annotation": { pattern: /'\w+/, alias: "symbol" }, "fragment-specifier": { pattern: /(\$\w+:)[a-z]+/, lookbehind: !0, alias: "punctuation" }, variable: /\$\w+/, "function-definition": { pattern: /(\bfn\s+)\w+/, lookbehind: !0, alias: "function" }, "type-definition": { pattern: /(\b(?:enum|struct|trait|type|union)\s+)\w+/, lookbehind: !0, alias: "class-name" }, "module-declaration": [{ pattern: /(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/, lookbehind: !0, alias: "namespace" }, { pattern: /(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/, lookbehind: !0, alias: "namespace", inside: { punctuation: /::/ } }], keyword: [/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/, /\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/], function: /\b[a-z_]\w*(?=\s*(?:::\s*<|\())/, macro: { pattern: /\b\w+!/, alias: "property" }, constant: /\b[A-Z_][A-Z_\d]+\b/, "class-name": /\b[A-Z]\w*\b/, namespace: { pattern: /(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/, inside: { punctuation: /::/ } }, number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/, boolean: /\b(?:false|true)\b/, punctuation: /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/, operator: /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/ }, e.languages.rust["closure-params"].inside.rest = e.languages.rust, e.languages.rust.attribute.inside.string = e.languages.rust.string;
})(I), I.languages.go = I.languages.extend("clike", { string: { pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/, lookbehind: !0, greedy: !0 }, keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/, boolean: /\b(?:_|false|iota|nil|true)\b/, number: [/\b0(?:b[01_]+|o[0-7_]+)i?\b/i, /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i, /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i], operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./, builtin: /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/ }), I.languages.insertBefore("go", "string", { char: { pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/, greedy: !0 } }), delete I.languages.go["class-name"], (function(e) {
  var n = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/, t = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function() {
    return n.source;
  });
  e.languages.cpp = e.languages.extend("c", { "class-name": [{ pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, function() {
    return n.source;
  })), lookbehind: !0 }, /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/, /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i, /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/], keyword: n, number: { pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i, greedy: !0 }, operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/, boolean: /\b(?:false|true)\b/ }), e.languages.insertBefore("cpp", "string", { module: { pattern: RegExp(/(\b(?:import|module)\s+)/.source + "(?:" + /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source + "|" + /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, function() {
    return t;
  }) + ")"), lookbehind: !0, greedy: !0, inside: { string: /^[<"][\s\S]+/, operator: /:/, punctuation: /\./ } }, "raw-string": { pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/, alias: "string", greedy: !0 } }), e.languages.insertBefore("cpp", "keyword", { "generic-function": { pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i, inside: { function: /^\w+/, generic: { pattern: /<[\s\S]+/, alias: "class-name", inside: e.languages.cpp } } } }), e.languages.insertBefore("cpp", "operator", { "double-colon": { pattern: /::/, alias: "punctuation" } }), e.languages.insertBefore("cpp", "class-name", { "base-clause": { pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/, lookbehind: !0, greedy: !0, inside: e.languages.extend("cpp", {}) } }), e.languages.insertBefore("inside", "double-colon", { "class-name": /\b[a-z_]\w*\b(?!\s*::)/i }, e.languages.cpp["base-clause"]);
})(I), I.languages.python = { comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0, greedy: !0 }, "string-interpolation": { pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i, greedy: !0, inside: { interpolation: { pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/, lookbehind: !0, inside: { "format-spec": { pattern: /(:)[^:(){}]+(?=\}$)/, lookbehind: !0 }, "conversion-option": { pattern: /![sra](?=[:}]$)/, alias: "punctuation" }, rest: null } }, string: /[\s\S]+/ } }, "triple-quoted-string": { pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i, greedy: !0, alias: "string" }, string: { pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i, greedy: !0 }, function: { pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g, lookbehind: !0 }, "class-name": { pattern: /(\bclass\s+)\w+/i, lookbehind: !0 }, decorator: { pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m, lookbehind: !0, alias: ["annotation", "punctuation"], inside: { punctuation: /\./ } }, keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/, builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/, boolean: /\b(?:False|None|True)\b/, number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i, operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/, punctuation: /[{}[\];(),.:]/ }, I.languages.python["string-interpolation"].inside.interpolation.inside.rest = I.languages.python, I.languages.py = I.languages.python, I.languages.json = { property: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, lookbehind: !0, greedy: !0 }, string: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, lookbehind: !0, greedy: !0 }, comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 }, number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i, punctuation: /[{}[\],]/, operator: /:/, boolean: /\b(?:false|true)\b/, null: { pattern: /\bnull\b/, alias: "keyword" } }, I.languages.webmanifest = I.languages.json;
var od = {};
ey(od, {
  dracula: () => iy,
  duotoneDark: () => ay,
  duotoneLight: () => uy,
  github: () => dy,
  gruvboxMaterialDark: () => By,
  gruvboxMaterialLight: () => jy,
  jettwaveDark: () => Iy,
  jettwaveLight: () => My,
  nightOwl: () => gy,
  nightOwlLight: () => hy,
  oceanicNext: () => yy,
  okaidia: () => vy,
  oneDark: () => Py,
  oneLight: () => Dy,
  palenight: () => _y,
  shadesOfPurple: () => Sy,
  synthwave84: () => ky,
  ultramin: () => Ny,
  vsDark: () => id,
  vsLight: () => Ty
});
var oy = {
  plain: {
    color: "#F8F8F2",
    backgroundColor: "#282A36"
  },
  styles: [
    {
      types: ["prolog", "constant", "builtin"],
      style: {
        color: "rgb(189, 147, 249)"
      }
    },
    {
      types: ["inserted", "function"],
      style: {
        color: "rgb(80, 250, 123)"
      }
    },
    {
      types: ["deleted"],
      style: {
        color: "rgb(255, 85, 85)"
      }
    },
    {
      types: ["changed"],
      style: {
        color: "rgb(255, 184, 108)"
      }
    },
    {
      types: ["punctuation", "symbol"],
      style: {
        color: "rgb(248, 248, 242)"
      }
    },
    {
      types: ["string", "char", "tag", "selector"],
      style: {
        color: "rgb(255, 121, 198)"
      }
    },
    {
      types: ["keyword", "variable"],
      style: {
        color: "rgb(189, 147, 249)",
        fontStyle: "italic"
      }
    },
    {
      types: ["comment"],
      style: {
        color: "rgb(98, 114, 164)"
      }
    },
    {
      types: ["attr-name"],
      style: {
        color: "rgb(241, 250, 140)"
      }
    }
  ]
}, iy = oy, sy = {
  plain: {
    backgroundColor: "#2a2734",
    color: "#9a86fd"
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
      style: {
        color: "#6c6783"
      }
    },
    {
      types: ["namespace"],
      style: {
        opacity: 0.7
      }
    },
    {
      types: ["tag", "operator", "number"],
      style: {
        color: "#e09142"
      }
    },
    {
      types: ["property", "function"],
      style: {
        color: "#9a86fd"
      }
    },
    {
      types: ["tag-id", "selector", "atrule-id"],
      style: {
        color: "#eeebff"
      }
    },
    {
      types: ["attr-name"],
      style: {
        color: "#c4b9fe"
      }
    },
    {
      types: [
        "boolean",
        "string",
        "entity",
        "url",
        "attr-value",
        "keyword",
        "control",
        "directive",
        "unit",
        "statement",
        "regex",
        "atrule",
        "placeholder",
        "variable"
      ],
      style: {
        color: "#ffcc99"
      }
    },
    {
      types: ["deleted"],
      style: {
        textDecorationLine: "line-through"
      }
    },
    {
      types: ["inserted"],
      style: {
        textDecorationLine: "underline"
      }
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic"
      }
    },
    {
      types: ["important", "bold"],
      style: {
        fontWeight: "bold"
      }
    },
    {
      types: ["important"],
      style: {
        color: "#c4b9fe"
      }
    }
  ]
}, ay = sy, ly = {
  plain: {
    backgroundColor: "#faf8f5",
    color: "#728fcb"
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
      style: {
        color: "#b6ad9a"
      }
    },
    {
      types: ["namespace"],
      style: {
        opacity: 0.7
      }
    },
    {
      types: ["tag", "operator", "number"],
      style: {
        color: "#063289"
      }
    },
    {
      types: ["property", "function"],
      style: {
        color: "#b29762"
      }
    },
    {
      types: ["tag-id", "selector", "atrule-id"],
      style: {
        color: "#2d2006"
      }
    },
    {
      types: ["attr-name"],
      style: {
        color: "#896724"
      }
    },
    {
      types: [
        "boolean",
        "string",
        "entity",
        "url",
        "attr-value",
        "keyword",
        "control",
        "directive",
        "unit",
        "statement",
        "regex",
        "atrule"
      ],
      style: {
        color: "#728fcb"
      }
    },
    {
      types: ["placeholder", "variable"],
      style: {
        color: "#93abdc"
      }
    },
    {
      types: ["deleted"],
      style: {
        textDecorationLine: "line-through"
      }
    },
    {
      types: ["inserted"],
      style: {
        textDecorationLine: "underline"
      }
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic"
      }
    },
    {
      types: ["important", "bold"],
      style: {
        fontWeight: "bold"
      }
    },
    {
      types: ["important"],
      style: {
        color: "#896724"
      }
    }
  ]
}, uy = ly, cy = {
  plain: {
    color: "#393A34",
    backgroundColor: "#f6f8fa"
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: {
        color: "#999988",
        fontStyle: "italic"
      }
    },
    {
      types: ["namespace"],
      style: {
        opacity: 0.7
      }
    },
    {
      types: ["string", "attr-value"],
      style: {
        color: "#e3116c"
      }
    },
    {
      types: ["punctuation", "operator"],
      style: {
        color: "#393A34"
      }
    },
    {
      types: [
        "entity",
        "url",
        "symbol",
        "number",
        "boolean",
        "variable",
        "constant",
        "property",
        "regex",
        "inserted"
      ],
      style: {
        color: "#36acaa"
      }
    },
    {
      types: ["atrule", "keyword", "attr-name", "selector"],
      style: {
        color: "#00a4db"
      }
    },
    {
      types: ["function", "deleted", "tag"],
      style: {
        color: "#d73a49"
      }
    },
    {
      types: ["function-variable"],
      style: {
        color: "#6f42c1"
      }
    },
    {
      types: ["tag", "selector", "keyword"],
      style: {
        color: "#00009f"
      }
    }
  ]
}, dy = cy, fy = {
  plain: {
    color: "#d6deeb",
    backgroundColor: "#011627"
  },
  styles: [
    {
      types: ["changed"],
      style: {
        color: "rgb(162, 191, 252)",
        fontStyle: "italic"
      }
    },
    {
      types: ["deleted"],
      style: {
        color: "rgba(239, 83, 80, 0.56)",
        fontStyle: "italic"
      }
    },
    {
      types: ["inserted", "attr-name"],
      style: {
        color: "rgb(173, 219, 103)",
        fontStyle: "italic"
      }
    },
    {
      types: ["comment"],
      style: {
        color: "rgb(99, 119, 119)",
        fontStyle: "italic"
      }
    },
    {
      types: ["string", "url"],
      style: {
        color: "rgb(173, 219, 103)"
      }
    },
    {
      types: ["variable"],
      style: {
        color: "rgb(214, 222, 235)"
      }
    },
    {
      types: ["number"],
      style: {
        color: "rgb(247, 140, 108)"
      }
    },
    {
      types: ["builtin", "char", "constant", "function"],
      style: {
        color: "rgb(130, 170, 255)"
      }
    },
    {
      // This was manually added after the auto-generation
      // so that punctuations are not italicised
      types: ["punctuation"],
      style: {
        color: "rgb(199, 146, 234)"
      }
    },
    {
      types: ["selector", "doctype"],
      style: {
        color: "rgb(199, 146, 234)",
        fontStyle: "italic"
      }
    },
    {
      types: ["class-name"],
      style: {
        color: "rgb(255, 203, 139)"
      }
    },
    {
      types: ["tag", "operator", "keyword"],
      style: {
        color: "rgb(127, 219, 202)"
      }
    },
    {
      types: ["boolean"],
      style: {
        color: "rgb(255, 88, 116)"
      }
    },
    {
      types: ["property"],
      style: {
        color: "rgb(128, 203, 196)"
      }
    },
    {
      types: ["namespace"],
      style: {
        color: "rgb(178, 204, 214)"
      }
    }
  ]
}, gy = fy, py = {
  plain: {
    color: "#403f53",
    backgroundColor: "#FBFBFB"
  },
  styles: [
    {
      types: ["changed"],
      style: {
        color: "rgb(162, 191, 252)",
        fontStyle: "italic"
      }
    },
    {
      types: ["deleted"],
      style: {
        color: "rgba(239, 83, 80, 0.56)",
        fontStyle: "italic"
      }
    },
    {
      types: ["inserted", "attr-name"],
      style: {
        color: "rgb(72, 118, 214)",
        fontStyle: "italic"
      }
    },
    {
      types: ["comment"],
      style: {
        color: "rgb(152, 159, 177)",
        fontStyle: "italic"
      }
    },
    {
      types: ["string", "builtin", "char", "constant", "url"],
      style: {
        color: "rgb(72, 118, 214)"
      }
    },
    {
      types: ["variable"],
      style: {
        color: "rgb(201, 103, 101)"
      }
    },
    {
      types: ["number"],
      style: {
        color: "rgb(170, 9, 130)"
      }
    },
    {
      // This was manually added after the auto-generation
      // so that punctuations are not italicised
      types: ["punctuation"],
      style: {
        color: "rgb(153, 76, 195)"
      }
    },
    {
      types: ["function", "selector", "doctype"],
      style: {
        color: "rgb(153, 76, 195)",
        fontStyle: "italic"
      }
    },
    {
      types: ["class-name"],
      style: {
        color: "rgb(17, 17, 17)"
      }
    },
    {
      types: ["tag"],
      style: {
        color: "rgb(153, 76, 195)"
      }
    },
    {
      types: ["operator", "property", "keyword", "namespace"],
      style: {
        color: "rgb(12, 150, 155)"
      }
    },
    {
      types: ["boolean"],
      style: {
        color: "rgb(188, 84, 84)"
      }
    }
  ]
}, hy = py, ze = {
  char: "#D8DEE9",
  comment: "#999999",
  keyword: "#c5a5c5",
  primitive: "#5a9bcf",
  string: "#8dc891",
  variable: "#d7deea",
  boolean: "#ff8b50",
  tag: "#fc929e",
  function: "#79b6f2",
  className: "#FAC863"
}, my = {
  plain: {
    backgroundColor: "#282c34",
    color: "#ffffff"
  },
  styles: [
    {
      types: ["attr-name"],
      style: {
        color: ze.keyword
      }
    },
    {
      types: ["attr-value"],
      style: {
        color: ze.string
      }
    },
    {
      types: [
        "comment",
        "block-comment",
        "prolog",
        "doctype",
        "cdata",
        "shebang"
      ],
      style: {
        color: ze.comment
      }
    },
    {
      types: [
        "property",
        "number",
        "function-name",
        "constant",
        "symbol",
        "deleted"
      ],
      style: {
        color: ze.primitive
      }
    },
    {
      types: ["boolean"],
      style: {
        color: ze.boolean
      }
    },
    {
      types: ["tag"],
      style: {
        color: ze.tag
      }
    },
    {
      types: ["string"],
      style: {
        color: ze.string
      }
    },
    {
      types: ["punctuation"],
      style: {
        color: ze.string
      }
    },
    {
      types: ["selector", "char", "builtin", "inserted"],
      style: {
        color: ze.char
      }
    },
    {
      types: ["function"],
      style: {
        color: ze.function
      }
    },
    {
      types: ["operator", "entity", "url", "variable"],
      style: {
        color: ze.variable
      }
    },
    {
      types: ["keyword"],
      style: {
        color: ze.keyword
      }
    },
    {
      types: ["atrule", "class-name"],
      style: {
        color: ze.className
      }
    },
    {
      types: ["important"],
      style: {
        fontWeight: "400"
      }
    },
    {
      types: ["bold"],
      style: {
        fontWeight: "bold"
      }
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic"
      }
    },
    {
      types: ["namespace"],
      style: {
        opacity: 0.7
      }
    }
  ]
}, yy = my, by = {
  plain: {
    color: "#f8f8f2",
    backgroundColor: "#272822"
  },
  styles: [
    {
      types: ["changed"],
      style: {
        color: "rgb(162, 191, 252)",
        fontStyle: "italic"
      }
    },
    {
      types: ["deleted"],
      style: {
        color: "#f92672",
        fontStyle: "italic"
      }
    },
    {
      types: ["inserted"],
      style: {
        color: "rgb(173, 219, 103)",
        fontStyle: "italic"
      }
    },
    {
      types: ["comment"],
      style: {
        color: "#8292a2",
        fontStyle: "italic"
      }
    },
    {
      types: ["string", "url"],
      style: {
        color: "#a6e22e"
      }
    },
    {
      types: ["variable"],
      style: {
        color: "#f8f8f2"
      }
    },
    {
      types: ["number"],
      style: {
        color: "#ae81ff"
      }
    },
    {
      types: ["builtin", "char", "constant", "function", "class-name"],
      style: {
        color: "#e6db74"
      }
    },
    {
      types: ["punctuation"],
      style: {
        color: "#f8f8f2"
      }
    },
    {
      types: ["selector", "doctype"],
      style: {
        color: "#a6e22e",
        fontStyle: "italic"
      }
    },
    {
      types: ["tag", "operator", "keyword"],
      style: {
        color: "#66d9ef"
      }
    },
    {
      types: ["boolean"],
      style: {
        color: "#ae81ff"
      }
    },
    {
      types: ["namespace"],
      style: {
        color: "rgb(178, 204, 214)",
        opacity: 0.7
      }
    },
    {
      types: ["tag", "property"],
      style: {
        color: "#f92672"
      }
    },
    {
      types: ["attr-name"],
      style: {
        color: "#a6e22e !important"
      }
    },
    {
      types: ["doctype"],
      style: {
        color: "#8292a2"
      }
    },
    {
      types: ["rule"],
      style: {
        color: "#e6db74"
      }
    }
  ]
}, vy = by, xy = {
  plain: {
    color: "#bfc7d5",
    backgroundColor: "#292d3e"
  },
  styles: [
    {
      types: ["comment"],
      style: {
        color: "rgb(105, 112, 152)",
        fontStyle: "italic"
      }
    },
    {
      types: ["string", "inserted"],
      style: {
        color: "rgb(195, 232, 141)"
      }
    },
    {
      types: ["number"],
      style: {
        color: "rgb(247, 140, 108)"
      }
    },
    {
      types: ["builtin", "char", "constant", "function"],
      style: {
        color: "rgb(130, 170, 255)"
      }
    },
    {
      types: ["punctuation", "selector"],
      style: {
        color: "rgb(199, 146, 234)"
      }
    },
    {
      types: ["variable"],
      style: {
        color: "rgb(191, 199, 213)"
      }
    },
    {
      types: ["class-name", "attr-name"],
      style: {
        color: "rgb(255, 203, 107)"
      }
    },
    {
      types: ["tag", "deleted"],
      style: {
        color: "rgb(255, 85, 114)"
      }
    },
    {
      types: ["operator"],
      style: {
        color: "rgb(137, 221, 255)"
      }
    },
    {
      types: ["boolean"],
      style: {
        color: "rgb(255, 88, 116)"
      }
    },
    {
      types: ["keyword"],
      style: {
        fontStyle: "italic"
      }
    },
    {
      types: ["doctype"],
      style: {
        color: "rgb(199, 146, 234)",
        fontStyle: "italic"
      }
    },
    {
      types: ["namespace"],
      style: {
        color: "rgb(178, 204, 214)"
      }
    },
    {
      types: ["url"],
      style: {
        color: "rgb(221, 221, 221)"
      }
    }
  ]
}, _y = xy, wy = {
  plain: {
    color: "#9EFEFF",
    backgroundColor: "#2D2A55"
  },
  styles: [
    {
      types: ["changed"],
      style: {
        color: "rgb(255, 238, 128)"
      }
    },
    {
      types: ["deleted"],
      style: {
        color: "rgba(239, 83, 80, 0.56)"
      }
    },
    {
      types: ["inserted"],
      style: {
        color: "rgb(173, 219, 103)"
      }
    },
    {
      types: ["comment"],
      style: {
        color: "rgb(179, 98, 255)",
        fontStyle: "italic"
      }
    },
    {
      types: ["punctuation"],
      style: {
        color: "rgb(255, 255, 255)"
      }
    },
    {
      types: ["constant"],
      style: {
        color: "rgb(255, 98, 140)"
      }
    },
    {
      types: ["string", "url"],
      style: {
        color: "rgb(165, 255, 144)"
      }
    },
    {
      types: ["variable"],
      style: {
        color: "rgb(255, 238, 128)"
      }
    },
    {
      types: ["number", "boolean"],
      style: {
        color: "rgb(255, 98, 140)"
      }
    },
    {
      types: ["attr-name"],
      style: {
        color: "rgb(255, 180, 84)"
      }
    },
    {
      types: [
        "keyword",
        "operator",
        "property",
        "namespace",
        "tag",
        "selector",
        "doctype"
      ],
      style: {
        color: "rgb(255, 157, 0)"
      }
    },
    {
      types: ["builtin", "char", "constant", "function", "class-name"],
      style: {
        color: "rgb(250, 208, 0)"
      }
    }
  ]
}, Sy = wy, Cy = {
  plain: {
    backgroundColor: "linear-gradient(to bottom, #2a2139 75%, #34294f)",
    backgroundImage: "#34294f",
    color: "#f92aad",
    textShadow: "0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"
  },
  styles: [
    {
      types: ["comment", "block-comment", "prolog", "doctype", "cdata"],
      style: {
        color: "#495495",
        fontStyle: "italic"
      }
    },
    {
      types: ["punctuation"],
      style: {
        color: "#ccc"
      }
    },
    {
      types: [
        "tag",
        "attr-name",
        "namespace",
        "number",
        "unit",
        "hexcode",
        "deleted"
      ],
      style: {
        color: "#e2777a"
      }
    },
    {
      types: ["property", "selector"],
      style: {
        color: "#72f1b8",
        textShadow: "0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475"
      }
    },
    {
      types: ["function-name"],
      style: {
        color: "#6196cc"
      }
    },
    {
      types: ["boolean", "selector-id", "function"],
      style: {
        color: "#fdfdfd",
        textShadow: "0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975"
      }
    },
    {
      types: ["class-name", "maybe-class-name", "builtin"],
      style: {
        color: "#fff5f6",
        textShadow: "0 0 2px #000, 0 0 10px #fc1f2c75, 0 0 5px #fc1f2c75, 0 0 25px #fc1f2c75"
      }
    },
    {
      types: ["constant", "symbol"],
      style: {
        color: "#f92aad",
        textShadow: "0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"
      }
    },
    {
      types: ["important", "atrule", "keyword", "selector-class"],
      style: {
        color: "#f4eee4",
        textShadow: "0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575"
      }
    },
    {
      types: ["string", "char", "attr-value", "regex", "variable"],
      style: {
        color: "#f87c32"
      }
    },
    {
      types: ["parameter"],
      style: {
        fontStyle: "italic"
      }
    },
    {
      types: ["entity", "url"],
      style: {
        color: "#67cdcc"
      }
    },
    {
      types: ["operator"],
      style: {
        color: "ffffffee"
      }
    },
    {
      types: ["important", "bold"],
      style: {
        fontWeight: "bold"
      }
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic"
      }
    },
    {
      types: ["entity"],
      style: {
        cursor: "help"
      }
    },
    {
      types: ["inserted"],
      style: {
        color: "green"
      }
    }
  ]
}, ky = Cy, Ey = {
  plain: {
    color: "#282a2e",
    backgroundColor: "#ffffff"
  },
  styles: [
    {
      types: ["comment"],
      style: {
        color: "rgb(197, 200, 198)"
      }
    },
    {
      types: ["string", "number", "builtin", "variable"],
      style: {
        color: "rgb(150, 152, 150)"
      }
    },
    {
      types: ["class-name", "function", "tag", "attr-name"],
      style: {
        color: "rgb(40, 42, 46)"
      }
    }
  ]
}, Ny = Ey, Ry = {
  plain: {
    color: "#9CDCFE",
    backgroundColor: "#1E1E1E"
  },
  styles: [
    {
      types: ["prolog"],
      style: {
        color: "rgb(0, 0, 128)"
      }
    },
    {
      types: ["comment"],
      style: {
        color: "rgb(106, 153, 85)"
      }
    },
    {
      types: ["builtin", "changed", "keyword", "interpolation-punctuation"],
      style: {
        color: "rgb(86, 156, 214)"
      }
    },
    {
      types: ["number", "inserted"],
      style: {
        color: "rgb(181, 206, 168)"
      }
    },
    {
      types: ["constant"],
      style: {
        color: "rgb(100, 102, 149)"
      }
    },
    {
      types: ["attr-name", "variable"],
      style: {
        color: "rgb(156, 220, 254)"
      }
    },
    {
      types: ["deleted", "string", "attr-value", "template-punctuation"],
      style: {
        color: "rgb(206, 145, 120)"
      }
    },
    {
      types: ["selector"],
      style: {
        color: "rgb(215, 186, 125)"
      }
    },
    {
      // Fix tag color
      types: ["tag"],
      style: {
        color: "rgb(78, 201, 176)"
      }
    },
    {
      // Fix tag color for HTML
      types: ["tag"],
      languages: ["markup"],
      style: {
        color: "rgb(86, 156, 214)"
      }
    },
    {
      types: ["punctuation", "operator"],
      style: {
        color: "rgb(212, 212, 212)"
      }
    },
    {
      // Fix punctuation color for HTML
      types: ["punctuation"],
      languages: ["markup"],
      style: {
        color: "#808080"
      }
    },
    {
      types: ["function"],
      style: {
        color: "rgb(220, 220, 170)"
      }
    },
    {
      types: ["class-name"],
      style: {
        color: "rgb(78, 201, 176)"
      }
    },
    {
      types: ["char"],
      style: {
        color: "rgb(209, 105, 105)"
      }
    }
  ]
}, id = Ry, Ay = {
  plain: {
    color: "#000000",
    backgroundColor: "#ffffff"
  },
  styles: [
    {
      types: ["comment"],
      style: {
        color: "rgb(0, 128, 0)"
      }
    },
    {
      types: ["builtin"],
      style: {
        color: "rgb(0, 112, 193)"
      }
    },
    {
      types: ["number", "variable", "inserted"],
      style: {
        color: "rgb(9, 134, 88)"
      }
    },
    {
      types: ["operator"],
      style: {
        color: "rgb(0, 0, 0)"
      }
    },
    {
      types: ["constant", "char"],
      style: {
        color: "rgb(129, 31, 63)"
      }
    },
    {
      types: ["tag"],
      style: {
        color: "rgb(128, 0, 0)"
      }
    },
    {
      types: ["attr-name"],
      style: {
        color: "rgb(255, 0, 0)"
      }
    },
    {
      types: ["deleted", "string"],
      style: {
        color: "rgb(163, 21, 21)"
      }
    },
    {
      types: ["changed", "punctuation"],
      style: {
        color: "rgb(4, 81, 165)"
      }
    },
    {
      types: ["function", "keyword"],
      style: {
        color: "rgb(0, 0, 255)"
      }
    },
    {
      types: ["class-name"],
      style: {
        color: "rgb(38, 127, 153)"
      }
    }
  ]
}, Ty = Ay, Fy = {
  plain: {
    color: "#f8fafc",
    backgroundColor: "#011627"
  },
  styles: [
    {
      types: ["prolog"],
      style: {
        color: "#000080"
      }
    },
    {
      types: ["comment"],
      style: {
        color: "#6A9955"
      }
    },
    {
      types: ["builtin", "changed", "keyword", "interpolation-punctuation"],
      style: {
        color: "#569CD6"
      }
    },
    {
      types: ["number", "inserted"],
      style: {
        color: "#B5CEA8"
      }
    },
    {
      types: ["constant"],
      style: {
        color: "#f8fafc"
      }
    },
    {
      types: ["attr-name", "variable"],
      style: {
        color: "#9CDCFE"
      }
    },
    {
      types: ["deleted", "string", "attr-value", "template-punctuation"],
      style: {
        color: "#cbd5e1"
      }
    },
    {
      types: ["selector"],
      style: {
        color: "#D7BA7D"
      }
    },
    {
      types: ["tag"],
      style: {
        color: "#0ea5e9"
      }
    },
    {
      types: ["tag"],
      languages: ["markup"],
      style: {
        color: "#0ea5e9"
      }
    },
    {
      types: ["punctuation", "operator"],
      style: {
        color: "#D4D4D4"
      }
    },
    {
      types: ["punctuation"],
      languages: ["markup"],
      style: {
        color: "#808080"
      }
    },
    {
      types: ["function"],
      style: {
        color: "#7dd3fc"
      }
    },
    {
      types: ["class-name"],
      style: {
        color: "#0ea5e9"
      }
    },
    {
      types: ["char"],
      style: {
        color: "#D16969"
      }
    }
  ]
}, Iy = Fy, Oy = {
  plain: {
    color: "#0f172a",
    backgroundColor: "#f1f5f9"
  },
  styles: [
    {
      types: ["prolog"],
      style: {
        color: "#000080"
      }
    },
    {
      types: ["comment"],
      style: {
        color: "#6A9955"
      }
    },
    {
      types: ["builtin", "changed", "keyword", "interpolation-punctuation"],
      style: {
        color: "#0c4a6e"
      }
    },
    {
      types: ["number", "inserted"],
      style: {
        color: "#B5CEA8"
      }
    },
    {
      types: ["constant"],
      style: {
        color: "#0f172a"
      }
    },
    {
      types: ["attr-name", "variable"],
      style: {
        color: "#0c4a6e"
      }
    },
    {
      types: ["deleted", "string", "attr-value", "template-punctuation"],
      style: {
        color: "#64748b"
      }
    },
    {
      types: ["selector"],
      style: {
        color: "#D7BA7D"
      }
    },
    {
      types: ["tag"],
      style: {
        color: "#0ea5e9"
      }
    },
    {
      types: ["tag"],
      languages: ["markup"],
      style: {
        color: "#0ea5e9"
      }
    },
    {
      types: ["punctuation", "operator"],
      style: {
        color: "#475569"
      }
    },
    {
      types: ["punctuation"],
      languages: ["markup"],
      style: {
        color: "#808080"
      }
    },
    {
      types: ["function"],
      style: {
        color: "#0e7490"
      }
    },
    {
      types: ["class-name"],
      style: {
        color: "#0ea5e9"
      }
    },
    {
      types: ["char"],
      style: {
        color: "#D16969"
      }
    }
  ]
}, My = Oy, $y = {
  plain: {
    backgroundColor: "hsl(220, 13%, 18%)",
    color: "hsl(220, 14%, 71%)",
    textShadow: "0 1px rgba(0, 0, 0, 0.3)"
  },
  styles: [
    {
      types: ["comment", "prolog", "cdata"],
      style: {
        color: "hsl(220, 10%, 40%)"
      }
    },
    {
      types: ["doctype", "punctuation", "entity"],
      style: {
        color: "hsl(220, 14%, 71%)"
      }
    },
    {
      types: [
        "attr-name",
        "class-name",
        "maybe-class-name",
        "boolean",
        "constant",
        "number",
        "atrule"
      ],
      style: { color: "hsl(29, 54%, 61%)" }
    },
    {
      types: ["keyword"],
      style: { color: "hsl(286, 60%, 67%)" }
    },
    {
      types: ["property", "tag", "symbol", "deleted", "important"],
      style: {
        color: "hsl(355, 65%, 65%)"
      }
    },
    {
      types: [
        "selector",
        "string",
        "char",
        "builtin",
        "inserted",
        "regex",
        "attr-value"
      ],
      style: {
        color: "hsl(95, 38%, 62%)"
      }
    },
    {
      types: ["variable", "operator", "function"],
      style: {
        color: "hsl(207, 82%, 66%)"
      }
    },
    {
      types: ["url"],
      style: {
        color: "hsl(187, 47%, 55%)"
      }
    },
    {
      types: ["deleted"],
      style: {
        textDecorationLine: "line-through"
      }
    },
    {
      types: ["inserted"],
      style: {
        textDecorationLine: "underline"
      }
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic"
      }
    },
    {
      types: ["important", "bold"],
      style: {
        fontWeight: "bold"
      }
    },
    {
      types: ["important"],
      style: {
        color: "hsl(220, 14%, 71%)"
      }
    }
  ]
}, Py = $y, Ly = {
  plain: {
    backgroundColor: "hsl(230, 1%, 98%)",
    color: "hsl(230, 8%, 24%)"
  },
  styles: [
    {
      types: ["comment", "prolog", "cdata"],
      style: {
        color: "hsl(230, 4%, 64%)"
      }
    },
    {
      types: ["doctype", "punctuation", "entity"],
      style: {
        color: "hsl(230, 8%, 24%)"
      }
    },
    {
      types: [
        "attr-name",
        "class-name",
        "boolean",
        "constant",
        "number",
        "atrule"
      ],
      style: {
        color: "hsl(35, 99%, 36%)"
      }
    },
    {
      types: ["keyword"],
      style: {
        color: "hsl(301, 63%, 40%)"
      }
    },
    {
      types: ["property", "tag", "symbol", "deleted", "important"],
      style: {
        color: "hsl(5, 74%, 59%)"
      }
    },
    {
      types: [
        "selector",
        "string",
        "char",
        "builtin",
        "inserted",
        "regex",
        "attr-value",
        "punctuation"
      ],
      style: {
        color: "hsl(119, 34%, 47%)"
      }
    },
    {
      types: ["variable", "operator", "function"],
      style: {
        color: "hsl(221, 87%, 60%)"
      }
    },
    {
      types: ["url"],
      style: {
        color: "hsl(198, 99%, 37%)"
      }
    },
    {
      types: ["deleted"],
      style: {
        textDecorationLine: "line-through"
      }
    },
    {
      types: ["inserted"],
      style: {
        textDecorationLine: "underline"
      }
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic"
      }
    },
    {
      types: ["important", "bold"],
      style: {
        fontWeight: "bold"
      }
    },
    {
      types: ["important"],
      style: {
        color: "hsl(230, 8%, 24%)"
      }
    }
  ]
}, Dy = Ly, zy = {
  plain: {
    color: "#ebdbb2",
    backgroundColor: "#292828"
  },
  styles: [
    {
      types: [
        "imports",
        "class-name",
        "maybe-class-name",
        "constant",
        "doctype",
        "builtin",
        "function"
      ],
      style: {
        color: "#d8a657"
      }
    },
    {
      types: ["property-access"],
      style: {
        color: "#7daea3"
      }
    },
    {
      types: ["tag"],
      style: {
        color: "#e78a4e"
      }
    },
    {
      types: ["attr-name", "char", "url", "regex"],
      style: {
        color: "#a9b665"
      }
    },
    {
      types: ["attr-value", "string"],
      style: {
        color: "#89b482"
      }
    },
    {
      types: ["comment", "prolog", "cdata", "operator", "inserted"],
      style: {
        color: "#a89984"
      }
    },
    {
      types: [
        "delimiter",
        "boolean",
        "keyword",
        "selector",
        "important",
        "atrule",
        "property",
        "variable",
        "deleted"
      ],
      style: {
        color: "#ea6962"
      }
    },
    {
      types: ["entity", "number", "symbol"],
      style: {
        color: "#d3869b"
      }
    }
  ]
}, By = zy, Vy = {
  plain: {
    color: "#654735",
    backgroundColor: "#f9f5d7"
  },
  styles: [
    {
      types: [
        "delimiter",
        "boolean",
        "keyword",
        "selector",
        "important",
        "atrule",
        "property",
        "variable",
        "deleted"
      ],
      style: {
        color: "#af2528"
      }
    },
    {
      types: [
        "imports",
        "class-name",
        "maybe-class-name",
        "constant",
        "doctype",
        "builtin"
      ],
      style: {
        color: "#b4730e"
      }
    },
    {
      types: ["string", "attr-value"],
      style: {
        color: "#477a5b"
      }
    },
    {
      types: ["property-access"],
      style: {
        color: "#266b79"
      }
    },
    {
      types: ["function", "attr-name", "char", "url"],
      style: {
        color: "#72761e"
      }
    },
    {
      types: ["tag"],
      style: {
        color: "#b94c07"
      }
    },
    {
      types: ["comment", "prolog", "cdata", "operator", "inserted"],
      style: {
        color: "#a89984"
      }
    },
    {
      types: ["entity", "number", "symbol"],
      style: {
        color: "#924f79"
      }
    }
  ]
}, jy = Vy, Uy = (e) => St(
  (n) => {
    var t = n, { className: r, style: o, line: i } = t, s = rd(t, ["className", "style", "line"]);
    const a = jo(at({}, s), {
      className: Lo("token-line", r)
    });
    return typeof e == "object" && "plain" in e && (a.style = e.plain), typeof o == "object" && (a.style = at(at({}, a.style || {}), o)), a;
  },
  [e]
), Gy = (e) => {
  const n = St(
    ({ types: t, empty: r }) => {
      if (e != null) {
        {
          if (t.length === 1 && t[0] === "plain")
            return r != null ? { display: "inline-block" } : void 0;
          if (t.length === 1 && r != null)
            return e[t[0]];
        }
        return Object.assign(
          r != null ? { display: "inline-block" } : {},
          ...t.map((o) => e[o])
        );
      }
    },
    [e]
  );
  return St(
    (t) => {
      var r = t, { token: o, className: i, style: s } = r, a = rd(r, ["token", "className", "style"]);
      const l = jo(at({}, a), {
        className: Lo("token", ...o.types, i),
        children: o.content,
        style: n(o)
      });
      return s != null && (l.style = at(at({}, l.style || {}), s)), l;
    },
    [n]
  );
}, Hy = /\r\n|\r|\n/, Ua = (e) => {
  e.length === 0 ? e.push({
    types: ["plain"],
    content: `
`,
    empty: !0
  }) : e.length === 1 && e[0].content === "" && (e[0].content = `
`, e[0].empty = !0);
}, Ga = (e, n) => {
  const t = e.length;
  return t > 0 && e[t - 1] === n ? e : e.concat(n);
}, Wy = (e) => {
  const n = [[]], t = [e], r = [0], o = [e.length];
  let i = 0, s = 0, a = [];
  const l = [a];
  for (; s > -1; ) {
    for (; (i = r[s]++) < o[s]; ) {
      let u, c = n[s];
      const f = t[s][i];
      if (typeof f == "string" ? (c = s > 0 ? c : ["plain"], u = f) : (c = Ga(c, f.type), f.alias && (c = Ga(c, f.alias)), u = f.content), typeof u != "string") {
        s++, n.push(c), t.push(u), r.push(0), o.push(u.length);
        continue;
      }
      const p = u.split(Hy), g = p.length;
      a.push({
        types: c,
        content: p[0]
      });
      for (let h = 1; h < g; h++)
        Ua(a), l.push(a = []), a.push({
          types: c,
          content: p[h]
        });
    }
    s--, n.pop(), t.pop(), r.pop(), o.pop();
  }
  return Ua(a), l;
}, Ha = Wy, Ky = ({ prism: e, code: n, grammar: t, language: r }) => Dn(() => {
  if (t == null)
    return Ha([n]);
  const o = {
    code: n,
    grammar: t,
    language: r,
    tokens: []
  };
  return e.hooks.run("before-tokenize", o), o.tokens = e.tokenize(n, t), e.hooks.run("after-tokenize", o), Ha(o.tokens);
}, [
  n,
  t,
  r,
  // prism is a stable import
  e
]), qy = (e, n) => {
  const { plain: t } = e, r = e.styles.reduce((o, i) => {
    const { languages: s, style: a } = i;
    return s && !s.includes(n) || i.types.forEach((l) => {
      const u = at(at({}, o[l]), a);
      o[l] = u;
    }), o;
  }, {});
  return r.root = t, r.plain = jo(at({}, t), { backgroundColor: void 0 }), r;
}, Zy = qy, Jy = ({
  children: e,
  language: n,
  code: t,
  theme: r,
  prism: o
}) => {
  const i = n.toLowerCase(), s = Zy(r, i), a = Uy(s), l = Gy(s), u = o.languages[i], c = Ky({ prism: o, language: i, code: t, grammar: u });
  return e({
    tokens: c,
    className: `prism-code language-${i}`,
    style: s != null ? s.root : {},
    getLineProps: a,
    getTokenProps: l
  });
}, Yy = (e) => On(Jy, jo(at({}, e), {
  prism: e.prism || I,
  theme: e.theme || id,
  code: e.code,
  language: e.language
}));
/*! Bundled license information:

prismjs/prism.js:
  (**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   *)
*/
const Xy = te(
  "relative rounded-lg border bg-slate-950 text-slate-50 dark:bg-slate-900 dark:border-slate-800",
  {
    variants: {
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
), Qy = E.forwardRef(
  ({
    className: e,
    size: n,
    code: t,
    language: r = "typescript",
    showLineNumbers: o = !1,
    copyable: i = !0,
    filename: s,
    collapsible: a = !1,
    defaultCollapsed: l = !1,
    maxHeight: u,
    highlightLines: c,
    ...d
  }, f) => {
    const [p, g] = E.useState(!1), [h, m] = E.useState(l), v = () => {
      navigator.clipboard.writeText(t).then(() => {
        g(!0), setTimeout(() => {
          g(!1);
        }, 2e3);
      }).catch((x) => {
        console.error("Failed to copy code:", x);
      });
    }, b = ((x) => {
      if (!x) return /* @__PURE__ */ new Set();
      if (Array.isArray(x)) return new Set(x);
      const w = /* @__PURE__ */ new Set();
      return x.split(",").forEach((k) => {
        const N = k.trim();
        if (N.includes("-")) {
          const C = N.split("-"), R = Number(C[0]), O = Number(C[1]);
          if (!isNaN(R) && !isNaN(O))
            for (let F = R; F <= O; F++)
              w.add(F);
        } else {
          const C = Number(N);
          isNaN(C) || w.add(C);
        }
      }), w;
    })(c);
    return /* @__PURE__ */ D("div", { ref: f, className: P(Xy({ size: n }), e), ...d, children: [
      (s || a) && /* @__PURE__ */ D("div", { className: "flex items-center justify-between border-b border-slate-800 bg-slate-900/50 px-4 py-2", children: [
        /* @__PURE__ */ D("div", { className: "flex items-center gap-2", children: [
          s && /* @__PURE__ */ _("span", { className: "font-mono text-xs text-slate-400", children: s }),
          a && /* @__PURE__ */ _(
            "button",
            {
              onClick: () => {
                m(!h);
              },
              className: "ml-2 rounded p-1 text-slate-400 transition-colors hover:bg-slate-800 hover:text-slate-200",
              "aria-label": h ? "Expand code" : "Collapse code",
              children: h ? /* @__PURE__ */ _(Os, { className: "h-4 w-4" }) : /* @__PURE__ */ _(Yu, { className: "h-4 w-4" })
            }
          )
        ] }),
        i && !h && /* @__PURE__ */ _(
          "button",
          {
            onClick: v,
            className: "flex items-center gap-1.5 rounded px-2 py-1 text-xs text-slate-400 transition-colors hover:bg-slate-800 hover:text-slate-200",
            "aria-label": "Copy code to clipboard",
            children: p ? /* @__PURE__ */ D(Xe, { children: [
              /* @__PURE__ */ _(Ui, { className: "h-3.5 w-3.5" }),
              /* @__PURE__ */ _("span", { children: "Copied!" })
            ] }) : /* @__PURE__ */ D(Xe, { children: [
              /* @__PURE__ */ _(Ia, { className: "h-3.5 w-3.5" }),
              /* @__PURE__ */ _("span", { children: "Copy" })
            ] })
          }
        )
      ] }),
      !h && /* @__PURE__ */ _(
        "div",
        {
          className: "overflow-auto",
          style: u ? { maxHeight: `${u}px` } : void 0,
          children: /* @__PURE__ */ _(Yy, { theme: od.nightOwl, code: t.trim(), language: r, children: ({ className: x, style: w, tokens: S, getLineProps: k, getTokenProps: N }) => /* @__PURE__ */ _("pre", { className: P("p-4 font-mono", x), style: w, children: S.map((C, R) => {
            const O = R + 1, F = b.has(O), U = k({ line: C });
            return /* @__PURE__ */ D(
              "div",
              {
                ...U,
                className: P(
                  U.className,
                  "table-row",
                  F && "bg-blue-500/10"
                ),
                children: [
                  o && /* @__PURE__ */ _("span", { className: "table-cell w-8 pr-4 text-right text-slate-500 select-none", children: O }),
                  /* @__PURE__ */ _("span", { className: "table-cell", children: C.map((L, M) => /* @__PURE__ */ _("span", { ...N({ token: L }) }, M)) })
                ]
              },
              R
            );
          }) }) })
        }
      ),
      i && !s && !a && /* @__PURE__ */ _(
        "button",
        {
          onClick: v,
          className: "absolute top-2 right-2 rounded bg-slate-800/80 p-2 text-slate-400 backdrop-blur-sm transition-colors hover:bg-slate-700 hover:text-slate-200",
          "aria-label": "Copy code to clipboard",
          children: p ? /* @__PURE__ */ _(Ui, { className: "h-4 w-4" }) : /* @__PURE__ */ _(Ia, { className: "h-4 w-4" })
        }
      )
    ] });
  }
);
Qy.displayName = "CodeBlock";
/**
   * table-core
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */
function Ft(e, n) {
  return typeof e == "function" ? e(n) : e;
}
function Ve(e, n) {
  return (t) => {
    n.setState((r) => ({
      ...r,
      [e]: Ft(t, r[e])
    }));
  };
}
function Uo(e) {
  return e instanceof Function;
}
function eb(e) {
  return Array.isArray(e) && e.every((n) => typeof n == "number");
}
function tb(e, n) {
  const t = [], r = (o) => {
    o.forEach((i) => {
      t.push(i);
      const s = n(i);
      s != null && s.length && r(s);
    });
  };
  return r(e), t;
}
function K(e, n, t) {
  let r = [], o;
  return (i) => {
    let s;
    t.key && t.debug && (s = Date.now());
    const a = e(i);
    if (!(a.length !== r.length || a.some((c, d) => r[d] !== c)))
      return o;
    r = a;
    let u;
    if (t.key && t.debug && (u = Date.now()), o = n(...a), t == null || t.onChange == null || t.onChange(o), t.key && t.debug && t != null && t.debug()) {
      const c = Math.round((Date.now() - s) * 100) / 100, d = Math.round((Date.now() - u) * 100) / 100, f = d / 16, p = (g, h) => {
        for (g = String(g); g.length < h; )
          g = " " + g;
        return g;
      };
      console.info(`%c⏱ ${p(d, 5)} /${p(c, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * f, 120))}deg 100% 31%);`, t == null ? void 0 : t.key);
    }
    return o;
  };
}
function q(e, n, t, r) {
  return {
    debug: () => {
      var o;
      return (o = e == null ? void 0 : e.debugAll) != null ? o : e[n];
    },
    key: process.env.NODE_ENV === "development" && t,
    onChange: r
  };
}
function nb(e, n, t, r) {
  const o = () => {
    var s;
    return (s = i.getValue()) != null ? s : e.options.renderFallbackValue;
  }, i = {
    id: `${n.id}_${t.id}`,
    row: n,
    column: t,
    getValue: () => n.getValue(r),
    renderValue: o,
    getContext: K(() => [e, t, n, i], (s, a, l, u) => ({
      table: s,
      column: a,
      row: l,
      cell: u,
      getValue: u.getValue,
      renderValue: u.renderValue
    }), q(e.options, "debugCells", "cell.getContext"))
  };
  return e._features.forEach((s) => {
    s.createCell == null || s.createCell(i, t, n, e);
  }, {}), i;
}
function rb(e, n, t, r) {
  var o, i;
  const a = {
    ...e._getDefaultColumnDef(),
    ...n
  }, l = a.accessorKey;
  let u = (o = (i = a.id) != null ? i : l ? typeof String.prototype.replaceAll == "function" ? l.replaceAll(".", "_") : l.replace(/\./g, "_") : void 0) != null ? o : typeof a.header == "string" ? a.header : void 0, c;
  if (a.accessorFn ? c = a.accessorFn : l && (l.includes(".") ? c = (f) => {
    let p = f;
    for (const h of l.split(".")) {
      var g;
      p = (g = p) == null ? void 0 : g[h], process.env.NODE_ENV !== "production" && p === void 0 && console.warn(`"${h}" in deeply nested key "${l}" returned undefined.`);
    }
    return p;
  } : c = (f) => f[a.accessorKey]), !u)
    throw process.env.NODE_ENV !== "production" ? new Error(a.accessorFn ? "Columns require an id when using an accessorFn" : "Columns require an id when using a non-string header") : new Error();
  let d = {
    id: `${String(u)}`,
    accessorFn: c,
    parent: r,
    depth: t,
    columnDef: a,
    columns: [],
    getFlatColumns: K(() => [!0], () => {
      var f;
      return [d, ...(f = d.columns) == null ? void 0 : f.flatMap((p) => p.getFlatColumns())];
    }, q(e.options, "debugColumns", "column.getFlatColumns")),
    getLeafColumns: K(() => [e._getOrderColumnsFn()], (f) => {
      var p;
      if ((p = d.columns) != null && p.length) {
        let g = d.columns.flatMap((h) => h.getLeafColumns());
        return f(g);
      }
      return [d];
    }, q(e.options, "debugColumns", "column.getLeafColumns"))
  };
  for (const f of e._features)
    f.createColumn == null || f.createColumn(d, e);
  return d;
}
const Fe = "debugHeaders";
function Wa(e, n, t) {
  var r;
  let i = {
    id: (r = t.id) != null ? r : n.id,
    column: n,
    index: t.index,
    isPlaceholder: !!t.isPlaceholder,
    placeholderId: t.placeholderId,
    depth: t.depth,
    subHeaders: [],
    colSpan: 0,
    rowSpan: 0,
    headerGroup: null,
    getLeafHeaders: () => {
      const s = [], a = (l) => {
        l.subHeaders && l.subHeaders.length && l.subHeaders.map(a), s.push(l);
      };
      return a(i), s;
    },
    getContext: () => ({
      table: e,
      header: i,
      column: n
    })
  };
  return e._features.forEach((s) => {
    s.createHeader == null || s.createHeader(i, e);
  }), i;
}
const ob = {
  createTable: (e) => {
    e.getHeaderGroups = K(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (n, t, r, o) => {
      var i, s;
      const a = (i = r == null ? void 0 : r.map((d) => t.find((f) => f.id === d)).filter(Boolean)) != null ? i : [], l = (s = o == null ? void 0 : o.map((d) => t.find((f) => f.id === d)).filter(Boolean)) != null ? s : [], u = t.filter((d) => !(r != null && r.includes(d.id)) && !(o != null && o.includes(d.id)));
      return Br(n, [...a, ...u, ...l], e);
    }, q(e.options, Fe, "getHeaderGroups")), e.getCenterHeaderGroups = K(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (n, t, r, o) => (t = t.filter((i) => !(r != null && r.includes(i.id)) && !(o != null && o.includes(i.id))), Br(n, t, e, "center")), q(e.options, Fe, "getCenterHeaderGroups")), e.getLeftHeaderGroups = K(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left], (n, t, r) => {
      var o;
      const i = (o = r == null ? void 0 : r.map((s) => t.find((a) => a.id === s)).filter(Boolean)) != null ? o : [];
      return Br(n, i, e, "left");
    }, q(e.options, Fe, "getLeftHeaderGroups")), e.getRightHeaderGroups = K(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right], (n, t, r) => {
      var o;
      const i = (o = r == null ? void 0 : r.map((s) => t.find((a) => a.id === s)).filter(Boolean)) != null ? o : [];
      return Br(n, i, e, "right");
    }, q(e.options, Fe, "getRightHeaderGroups")), e.getFooterGroups = K(() => [e.getHeaderGroups()], (n) => [...n].reverse(), q(e.options, Fe, "getFooterGroups")), e.getLeftFooterGroups = K(() => [e.getLeftHeaderGroups()], (n) => [...n].reverse(), q(e.options, Fe, "getLeftFooterGroups")), e.getCenterFooterGroups = K(() => [e.getCenterHeaderGroups()], (n) => [...n].reverse(), q(e.options, Fe, "getCenterFooterGroups")), e.getRightFooterGroups = K(() => [e.getRightHeaderGroups()], (n) => [...n].reverse(), q(e.options, Fe, "getRightFooterGroups")), e.getFlatHeaders = K(() => [e.getHeaderGroups()], (n) => n.map((t) => t.headers).flat(), q(e.options, Fe, "getFlatHeaders")), e.getLeftFlatHeaders = K(() => [e.getLeftHeaderGroups()], (n) => n.map((t) => t.headers).flat(), q(e.options, Fe, "getLeftFlatHeaders")), e.getCenterFlatHeaders = K(() => [e.getCenterHeaderGroups()], (n) => n.map((t) => t.headers).flat(), q(e.options, Fe, "getCenterFlatHeaders")), e.getRightFlatHeaders = K(() => [e.getRightHeaderGroups()], (n) => n.map((t) => t.headers).flat(), q(e.options, Fe, "getRightFlatHeaders")), e.getCenterLeafHeaders = K(() => [e.getCenterFlatHeaders()], (n) => n.filter((t) => {
      var r;
      return !((r = t.subHeaders) != null && r.length);
    }), q(e.options, Fe, "getCenterLeafHeaders")), e.getLeftLeafHeaders = K(() => [e.getLeftFlatHeaders()], (n) => n.filter((t) => {
      var r;
      return !((r = t.subHeaders) != null && r.length);
    }), q(e.options, Fe, "getLeftLeafHeaders")), e.getRightLeafHeaders = K(() => [e.getRightFlatHeaders()], (n) => n.filter((t) => {
      var r;
      return !((r = t.subHeaders) != null && r.length);
    }), q(e.options, Fe, "getRightLeafHeaders")), e.getLeafHeaders = K(() => [e.getLeftHeaderGroups(), e.getCenterHeaderGroups(), e.getRightHeaderGroups()], (n, t, r) => {
      var o, i, s, a, l, u;
      return [...(o = (i = n[0]) == null ? void 0 : i.headers) != null ? o : [], ...(s = (a = t[0]) == null ? void 0 : a.headers) != null ? s : [], ...(l = (u = r[0]) == null ? void 0 : u.headers) != null ? l : []].map((c) => c.getLeafHeaders()).flat();
    }, q(e.options, Fe, "getLeafHeaders"));
  }
};
function Br(e, n, t, r) {
  var o, i;
  let s = 0;
  const a = function(f, p) {
    p === void 0 && (p = 1), s = Math.max(s, p), f.filter((g) => g.getIsVisible()).forEach((g) => {
      var h;
      (h = g.columns) != null && h.length && a(g.columns, p + 1);
    }, 0);
  };
  a(e);
  let l = [];
  const u = (f, p) => {
    const g = {
      depth: p,
      id: [r, `${p}`].filter(Boolean).join("_"),
      headers: []
    }, h = [];
    f.forEach((m) => {
      const v = [...h].reverse()[0], y = m.column.depth === g.depth;
      let b, x = !1;
      if (y && m.column.parent ? b = m.column.parent : (b = m.column, x = !0), v && (v == null ? void 0 : v.column) === b)
        v.subHeaders.push(m);
      else {
        const w = Wa(t, b, {
          id: [r, p, b.id, m == null ? void 0 : m.id].filter(Boolean).join("_"),
          isPlaceholder: x,
          placeholderId: x ? `${h.filter((S) => S.column === b).length}` : void 0,
          depth: p,
          index: h.length
        });
        w.subHeaders.push(m), h.push(w);
      }
      g.headers.push(m), m.headerGroup = g;
    }), l.push(g), p > 0 && u(h, p - 1);
  }, c = n.map((f, p) => Wa(t, f, {
    depth: s,
    index: p
  }));
  u(c, s - 1), l.reverse();
  const d = (f) => f.filter((g) => g.column.getIsVisible()).map((g) => {
    let h = 0, m = 0, v = [0];
    g.subHeaders && g.subHeaders.length ? (v = [], d(g.subHeaders).forEach((b) => {
      let {
        colSpan: x,
        rowSpan: w
      } = b;
      h += x, v.push(w);
    })) : h = 1;
    const y = Math.min(...v);
    return m = m + y, g.colSpan = h, g.rowSpan = m, {
      colSpan: h,
      rowSpan: m
    };
  });
  return d((o = (i = l[0]) == null ? void 0 : i.headers) != null ? o : []), l;
}
const zs = (e, n, t, r, o, i, s) => {
  let a = {
    id: n,
    index: r,
    original: t,
    depth: o,
    parentId: s,
    _valuesCache: {},
    _uniqueValuesCache: {},
    getValue: (l) => {
      if (a._valuesCache.hasOwnProperty(l))
        return a._valuesCache[l];
      const u = e.getColumn(l);
      if (u != null && u.accessorFn)
        return a._valuesCache[l] = u.accessorFn(a.original, r), a._valuesCache[l];
    },
    getUniqueValues: (l) => {
      if (a._uniqueValuesCache.hasOwnProperty(l))
        return a._uniqueValuesCache[l];
      const u = e.getColumn(l);
      if (u != null && u.accessorFn)
        return u.columnDef.getUniqueValues ? (a._uniqueValuesCache[l] = u.columnDef.getUniqueValues(a.original, r), a._uniqueValuesCache[l]) : (a._uniqueValuesCache[l] = [a.getValue(l)], a._uniqueValuesCache[l]);
    },
    renderValue: (l) => {
      var u;
      return (u = a.getValue(l)) != null ? u : e.options.renderFallbackValue;
    },
    subRows: [],
    getLeafRows: () => tb(a.subRows, (l) => l.subRows),
    getParentRow: () => a.parentId ? e.getRow(a.parentId, !0) : void 0,
    getParentRows: () => {
      let l = [], u = a;
      for (; ; ) {
        const c = u.getParentRow();
        if (!c) break;
        l.push(c), u = c;
      }
      return l.reverse();
    },
    getAllCells: K(() => [e.getAllLeafColumns()], (l) => l.map((u) => nb(e, a, u, u.id)), q(e.options, "debugRows", "getAllCells")),
    _getAllCellsByColumnId: K(() => [a.getAllCells()], (l) => l.reduce((u, c) => (u[c.column.id] = c, u), {}), q(e.options, "debugRows", "getAllCellsByColumnId"))
  };
  for (let l = 0; l < e._features.length; l++) {
    const u = e._features[l];
    u == null || u.createRow == null || u.createRow(a, e);
  }
  return a;
}, ib = {
  createColumn: (e, n) => {
    e._getFacetedRowModel = n.options.getFacetedRowModel && n.options.getFacetedRowModel(n, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : n.getPreFilteredRowModel(), e._getFacetedUniqueValues = n.options.getFacetedUniqueValues && n.options.getFacetedUniqueValues(n, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = n.options.getFacetedMinMaxValues && n.options.getFacetedMinMaxValues(n, e.id), e.getFacetedMinMaxValues = () => {
      if (e._getFacetedMinMaxValues)
        return e._getFacetedMinMaxValues();
    };
  }
}, sd = (e, n, t) => {
  var r, o;
  const i = t == null || (r = t.toString()) == null ? void 0 : r.toLowerCase();
  return !!(!((o = e.getValue(n)) == null || (o = o.toString()) == null || (o = o.toLowerCase()) == null) && o.includes(i));
};
sd.autoRemove = (e) => Ze(e);
const ad = (e, n, t) => {
  var r;
  return !!(!((r = e.getValue(n)) == null || (r = r.toString()) == null) && r.includes(t));
};
ad.autoRemove = (e) => Ze(e);
const ld = (e, n, t) => {
  var r;
  return ((r = e.getValue(n)) == null || (r = r.toString()) == null ? void 0 : r.toLowerCase()) === (t == null ? void 0 : t.toLowerCase());
};
ld.autoRemove = (e) => Ze(e);
const ud = (e, n, t) => {
  var r;
  return (r = e.getValue(n)) == null ? void 0 : r.includes(t);
};
ud.autoRemove = (e) => Ze(e);
const cd = (e, n, t) => !t.some((r) => {
  var o;
  return !((o = e.getValue(n)) != null && o.includes(r));
});
cd.autoRemove = (e) => Ze(e) || !(e != null && e.length);
const dd = (e, n, t) => t.some((r) => {
  var o;
  return (o = e.getValue(n)) == null ? void 0 : o.includes(r);
});
dd.autoRemove = (e) => Ze(e) || !(e != null && e.length);
const fd = (e, n, t) => e.getValue(n) === t;
fd.autoRemove = (e) => Ze(e);
const gd = (e, n, t) => e.getValue(n) == t;
gd.autoRemove = (e) => Ze(e);
const Bs = (e, n, t) => {
  let [r, o] = t;
  const i = e.getValue(n);
  return i >= r && i <= o;
};
Bs.resolveFilterValue = (e) => {
  let [n, t] = e, r = typeof n != "number" ? parseFloat(n) : n, o = typeof t != "number" ? parseFloat(t) : t, i = n === null || Number.isNaN(r) ? -1 / 0 : r, s = t === null || Number.isNaN(o) ? 1 / 0 : o;
  if (i > s) {
    const a = i;
    i = s, s = a;
  }
  return [i, s];
};
Bs.autoRemove = (e) => Ze(e) || Ze(e[0]) && Ze(e[1]);
const yt = {
  includesString: sd,
  includesStringSensitive: ad,
  equalsString: ld,
  arrIncludes: ud,
  arrIncludesAll: cd,
  arrIncludesSome: dd,
  equals: fd,
  weakEquals: gd,
  inNumberRange: Bs
};
function Ze(e) {
  return e == null || e === "";
}
const sb = {
  getDefaultColumnDef: () => ({
    filterFn: "auto"
  }),
  getInitialState: (e) => ({
    columnFilters: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnFiltersChange: Ve("columnFilters", e),
    filterFromLeafRows: !1,
    maxLeafRowFilterDepth: 100
  }),
  createColumn: (e, n) => {
    e.getAutoFilterFn = () => {
      const t = n.getCoreRowModel().flatRows[0], r = t == null ? void 0 : t.getValue(e.id);
      return typeof r == "string" ? yt.includesString : typeof r == "number" ? yt.inNumberRange : typeof r == "boolean" || r !== null && typeof r == "object" ? yt.equals : Array.isArray(r) ? yt.arrIncludes : yt.weakEquals;
    }, e.getFilterFn = () => {
      var t, r;
      return Uo(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (
        // @ts-ignore
        (t = (r = n.options.filterFns) == null ? void 0 : r[e.columnDef.filterFn]) != null ? t : yt[e.columnDef.filterFn]
      );
    }, e.getCanFilter = () => {
      var t, r, o;
      return ((t = e.columnDef.enableColumnFilter) != null ? t : !0) && ((r = n.options.enableColumnFilters) != null ? r : !0) && ((o = n.options.enableFilters) != null ? o : !0) && !!e.accessorFn;
    }, e.getIsFiltered = () => e.getFilterIndex() > -1, e.getFilterValue = () => {
      var t;
      return (t = n.getState().columnFilters) == null || (t = t.find((r) => r.id === e.id)) == null ? void 0 : t.value;
    }, e.getFilterIndex = () => {
      var t, r;
      return (t = (r = n.getState().columnFilters) == null ? void 0 : r.findIndex((o) => o.id === e.id)) != null ? t : -1;
    }, e.setFilterValue = (t) => {
      n.setColumnFilters((r) => {
        const o = e.getFilterFn(), i = r == null ? void 0 : r.find((c) => c.id === e.id), s = Ft(t, i ? i.value : void 0);
        if (Ka(o, s, e)) {
          var a;
          return (a = r == null ? void 0 : r.filter((c) => c.id !== e.id)) != null ? a : [];
        }
        const l = {
          id: e.id,
          value: s
        };
        if (i) {
          var u;
          return (u = r == null ? void 0 : r.map((c) => c.id === e.id ? l : c)) != null ? u : [];
        }
        return r != null && r.length ? [...r, l] : [l];
      });
    };
  },
  createRow: (e, n) => {
    e.columnFilters = {}, e.columnFiltersMeta = {};
  },
  createTable: (e) => {
    e.setColumnFilters = (n) => {
      const t = e.getAllLeafColumns(), r = (o) => {
        var i;
        return (i = Ft(n, o)) == null ? void 0 : i.filter((s) => {
          const a = t.find((l) => l.id === s.id);
          if (a) {
            const l = a.getFilterFn();
            if (Ka(l, s.value, a))
              return !1;
          }
          return !0;
        });
      };
      e.options.onColumnFiltersChange == null || e.options.onColumnFiltersChange(r);
    }, e.resetColumnFilters = (n) => {
      var t, r;
      e.setColumnFilters(n ? [] : (t = (r = e.initialState) == null ? void 0 : r.columnFilters) != null ? t : []);
    }, e.getPreFilteredRowModel = () => e.getCoreRowModel(), e.getFilteredRowModel = () => (!e._getFilteredRowModel && e.options.getFilteredRowModel && (e._getFilteredRowModel = e.options.getFilteredRowModel(e)), e.options.manualFiltering || !e._getFilteredRowModel ? e.getPreFilteredRowModel() : e._getFilteredRowModel());
  }
};
function Ka(e, n, t) {
  return (e && e.autoRemove ? e.autoRemove(n, t) : !1) || typeof n > "u" || typeof n == "string" && !n;
}
const ab = (e, n, t) => t.reduce((r, o) => {
  const i = o.getValue(e);
  return r + (typeof i == "number" ? i : 0);
}, 0), lb = (e, n, t) => {
  let r;
  return t.forEach((o) => {
    const i = o.getValue(e);
    i != null && (r > i || r === void 0 && i >= i) && (r = i);
  }), r;
}, ub = (e, n, t) => {
  let r;
  return t.forEach((o) => {
    const i = o.getValue(e);
    i != null && (r < i || r === void 0 && i >= i) && (r = i);
  }), r;
}, cb = (e, n, t) => {
  let r, o;
  return t.forEach((i) => {
    const s = i.getValue(e);
    s != null && (r === void 0 ? s >= s && (r = o = s) : (r > s && (r = s), o < s && (o = s)));
  }), [r, o];
}, db = (e, n) => {
  let t = 0, r = 0;
  if (n.forEach((o) => {
    let i = o.getValue(e);
    i != null && (i = +i) >= i && (++t, r += i);
  }), t) return r / t;
}, fb = (e, n) => {
  if (!n.length)
    return;
  const t = n.map((i) => i.getValue(e));
  if (!eb(t))
    return;
  if (t.length === 1)
    return t[0];
  const r = Math.floor(t.length / 2), o = t.sort((i, s) => i - s);
  return t.length % 2 !== 0 ? o[r] : (o[r - 1] + o[r]) / 2;
}, gb = (e, n) => Array.from(new Set(n.map((t) => t.getValue(e))).values()), pb = (e, n) => new Set(n.map((t) => t.getValue(e))).size, hb = (e, n) => n.length, fi = {
  sum: ab,
  min: lb,
  max: ub,
  extent: cb,
  mean: db,
  median: fb,
  unique: gb,
  uniqueCount: pb,
  count: hb
}, mb = {
  getDefaultColumnDef: () => ({
    aggregatedCell: (e) => {
      var n, t;
      return (n = (t = e.getValue()) == null || t.toString == null ? void 0 : t.toString()) != null ? n : null;
    },
    aggregationFn: "auto"
  }),
  getInitialState: (e) => ({
    grouping: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onGroupingChange: Ve("grouping", e),
    groupedColumnMode: "reorder"
  }),
  createColumn: (e, n) => {
    e.toggleGrouping = () => {
      n.setGrouping((t) => t != null && t.includes(e.id) ? t.filter((r) => r !== e.id) : [...t ?? [], e.id]);
    }, e.getCanGroup = () => {
      var t, r;
      return ((t = e.columnDef.enableGrouping) != null ? t : !0) && ((r = n.options.enableGrouping) != null ? r : !0) && (!!e.accessorFn || !!e.columnDef.getGroupingValue);
    }, e.getIsGrouped = () => {
      var t;
      return (t = n.getState().grouping) == null ? void 0 : t.includes(e.id);
    }, e.getGroupedIndex = () => {
      var t;
      return (t = n.getState().grouping) == null ? void 0 : t.indexOf(e.id);
    }, e.getToggleGroupingHandler = () => {
      const t = e.getCanGroup();
      return () => {
        t && e.toggleGrouping();
      };
    }, e.getAutoAggregationFn = () => {
      const t = n.getCoreRowModel().flatRows[0], r = t == null ? void 0 : t.getValue(e.id);
      if (typeof r == "number")
        return fi.sum;
      if (Object.prototype.toString.call(r) === "[object Date]")
        return fi.extent;
    }, e.getAggregationFn = () => {
      var t, r;
      if (!e)
        throw new Error();
      return Uo(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (t = (r = n.options.aggregationFns) == null ? void 0 : r[e.columnDef.aggregationFn]) != null ? t : fi[e.columnDef.aggregationFn];
    };
  },
  createTable: (e) => {
    e.setGrouping = (n) => e.options.onGroupingChange == null ? void 0 : e.options.onGroupingChange(n), e.resetGrouping = (n) => {
      var t, r;
      e.setGrouping(n ? [] : (t = (r = e.initialState) == null ? void 0 : r.grouping) != null ? t : []);
    }, e.getPreGroupedRowModel = () => e.getFilteredRowModel(), e.getGroupedRowModel = () => (!e._getGroupedRowModel && e.options.getGroupedRowModel && (e._getGroupedRowModel = e.options.getGroupedRowModel(e)), e.options.manualGrouping || !e._getGroupedRowModel ? e.getPreGroupedRowModel() : e._getGroupedRowModel());
  },
  createRow: (e, n) => {
    e.getIsGrouped = () => !!e.groupingColumnId, e.getGroupingValue = (t) => {
      if (e._groupingValuesCache.hasOwnProperty(t))
        return e._groupingValuesCache[t];
      const r = n.getColumn(t);
      return r != null && r.columnDef.getGroupingValue ? (e._groupingValuesCache[t] = r.columnDef.getGroupingValue(e.original), e._groupingValuesCache[t]) : e.getValue(t);
    }, e._groupingValuesCache = {};
  },
  createCell: (e, n, t, r) => {
    e.getIsGrouped = () => n.getIsGrouped() && n.id === t.groupingColumnId, e.getIsPlaceholder = () => !e.getIsGrouped() && n.getIsGrouped(), e.getIsAggregated = () => {
      var o;
      return !e.getIsGrouped() && !e.getIsPlaceholder() && !!((o = t.subRows) != null && o.length);
    };
  }
};
function yb(e, n, t) {
  if (!(n != null && n.length) || !t)
    return e;
  const r = e.filter((i) => !n.includes(i.id));
  return t === "remove" ? r : [...n.map((i) => e.find((s) => s.id === i)).filter(Boolean), ...r];
}
const bb = {
  getInitialState: (e) => ({
    columnOrder: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnOrderChange: Ve("columnOrder", e)
  }),
  createColumn: (e, n) => {
    e.getIndex = K((t) => [ur(n, t)], (t) => t.findIndex((r) => r.id === e.id), q(n.options, "debugColumns", "getIndex")), e.getIsFirstColumn = (t) => {
      var r;
      return ((r = ur(n, t)[0]) == null ? void 0 : r.id) === e.id;
    }, e.getIsLastColumn = (t) => {
      var r;
      const o = ur(n, t);
      return ((r = o[o.length - 1]) == null ? void 0 : r.id) === e.id;
    };
  },
  createTable: (e) => {
    e.setColumnOrder = (n) => e.options.onColumnOrderChange == null ? void 0 : e.options.onColumnOrderChange(n), e.resetColumnOrder = (n) => {
      var t;
      e.setColumnOrder(n ? [] : (t = e.initialState.columnOrder) != null ? t : []);
    }, e._getOrderColumnsFn = K(() => [e.getState().columnOrder, e.getState().grouping, e.options.groupedColumnMode], (n, t, r) => (o) => {
      let i = [];
      if (!(n != null && n.length))
        i = o;
      else {
        const s = [...n], a = [...o];
        for (; a.length && s.length; ) {
          const l = s.shift(), u = a.findIndex((c) => c.id === l);
          u > -1 && i.push(a.splice(u, 1)[0]);
        }
        i = [...i, ...a];
      }
      return yb(i, t, r);
    }, q(e.options, "debugTable", "_getOrderColumnsFn"));
  }
}, gi = () => ({
  left: [],
  right: []
}), vb = {
  getInitialState: (e) => ({
    columnPinning: gi(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnPinningChange: Ve("columnPinning", e)
  }),
  createColumn: (e, n) => {
    e.pin = (t) => {
      const r = e.getLeafColumns().map((o) => o.id).filter(Boolean);
      n.setColumnPinning((o) => {
        var i, s;
        if (t === "right") {
          var a, l;
          return {
            left: ((a = o == null ? void 0 : o.left) != null ? a : []).filter((d) => !(r != null && r.includes(d))),
            right: [...((l = o == null ? void 0 : o.right) != null ? l : []).filter((d) => !(r != null && r.includes(d))), ...r]
          };
        }
        if (t === "left") {
          var u, c;
          return {
            left: [...((u = o == null ? void 0 : o.left) != null ? u : []).filter((d) => !(r != null && r.includes(d))), ...r],
            right: ((c = o == null ? void 0 : o.right) != null ? c : []).filter((d) => !(r != null && r.includes(d)))
          };
        }
        return {
          left: ((i = o == null ? void 0 : o.left) != null ? i : []).filter((d) => !(r != null && r.includes(d))),
          right: ((s = o == null ? void 0 : o.right) != null ? s : []).filter((d) => !(r != null && r.includes(d)))
        };
      });
    }, e.getCanPin = () => e.getLeafColumns().some((r) => {
      var o, i, s;
      return ((o = r.columnDef.enablePinning) != null ? o : !0) && ((i = (s = n.options.enableColumnPinning) != null ? s : n.options.enablePinning) != null ? i : !0);
    }), e.getIsPinned = () => {
      const t = e.getLeafColumns().map((a) => a.id), {
        left: r,
        right: o
      } = n.getState().columnPinning, i = t.some((a) => r == null ? void 0 : r.includes(a)), s = t.some((a) => o == null ? void 0 : o.includes(a));
      return i ? "left" : s ? "right" : !1;
    }, e.getPinnedIndex = () => {
      var t, r;
      const o = e.getIsPinned();
      return o ? (t = (r = n.getState().columnPinning) == null || (r = r[o]) == null ? void 0 : r.indexOf(e.id)) != null ? t : -1 : 0;
    };
  },
  createRow: (e, n) => {
    e.getCenterVisibleCells = K(() => [e._getAllVisibleCells(), n.getState().columnPinning.left, n.getState().columnPinning.right], (t, r, o) => {
      const i = [...r ?? [], ...o ?? []];
      return t.filter((s) => !i.includes(s.column.id));
    }, q(n.options, "debugRows", "getCenterVisibleCells")), e.getLeftVisibleCells = K(() => [e._getAllVisibleCells(), n.getState().columnPinning.left], (t, r) => (r ?? []).map((i) => t.find((s) => s.column.id === i)).filter(Boolean).map((i) => ({
      ...i,
      position: "left"
    })), q(n.options, "debugRows", "getLeftVisibleCells")), e.getRightVisibleCells = K(() => [e._getAllVisibleCells(), n.getState().columnPinning.right], (t, r) => (r ?? []).map((i) => t.find((s) => s.column.id === i)).filter(Boolean).map((i) => ({
      ...i,
      position: "right"
    })), q(n.options, "debugRows", "getRightVisibleCells"));
  },
  createTable: (e) => {
    e.setColumnPinning = (n) => e.options.onColumnPinningChange == null ? void 0 : e.options.onColumnPinningChange(n), e.resetColumnPinning = (n) => {
      var t, r;
      return e.setColumnPinning(n ? gi() : (t = (r = e.initialState) == null ? void 0 : r.columnPinning) != null ? t : gi());
    }, e.getIsSomeColumnsPinned = (n) => {
      var t;
      const r = e.getState().columnPinning;
      if (!n) {
        var o, i;
        return !!((o = r.left) != null && o.length || (i = r.right) != null && i.length);
      }
      return !!((t = r[n]) != null && t.length);
    }, e.getLeftLeafColumns = K(() => [e.getAllLeafColumns(), e.getState().columnPinning.left], (n, t) => (t ?? []).map((r) => n.find((o) => o.id === r)).filter(Boolean), q(e.options, "debugColumns", "getLeftLeafColumns")), e.getRightLeafColumns = K(() => [e.getAllLeafColumns(), e.getState().columnPinning.right], (n, t) => (t ?? []).map((r) => n.find((o) => o.id === r)).filter(Boolean), q(e.options, "debugColumns", "getRightLeafColumns")), e.getCenterLeafColumns = K(() => [e.getAllLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (n, t, r) => {
      const o = [...t ?? [], ...r ?? []];
      return n.filter((i) => !o.includes(i.id));
    }, q(e.options, "debugColumns", "getCenterLeafColumns"));
  }
};
function xb(e) {
  return e || (typeof document < "u" ? document : null);
}
const Vr = {
  size: 150,
  minSize: 20,
  maxSize: Number.MAX_SAFE_INTEGER
}, pi = () => ({
  startOffset: null,
  startSize: null,
  deltaOffset: null,
  deltaPercentage: null,
  isResizingColumn: !1,
  columnSizingStart: []
}), _b = {
  getDefaultColumnDef: () => Vr,
  getInitialState: (e) => ({
    columnSizing: {},
    columnSizingInfo: pi(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    columnResizeMode: "onEnd",
    columnResizeDirection: "ltr",
    onColumnSizingChange: Ve("columnSizing", e),
    onColumnSizingInfoChange: Ve("columnSizingInfo", e)
  }),
  createColumn: (e, n) => {
    e.getSize = () => {
      var t, r, o;
      const i = n.getState().columnSizing[e.id];
      return Math.min(Math.max((t = e.columnDef.minSize) != null ? t : Vr.minSize, (r = i ?? e.columnDef.size) != null ? r : Vr.size), (o = e.columnDef.maxSize) != null ? o : Vr.maxSize);
    }, e.getStart = K((t) => [t, ur(n, t), n.getState().columnSizing], (t, r) => r.slice(0, e.getIndex(t)).reduce((o, i) => o + i.getSize(), 0), q(n.options, "debugColumns", "getStart")), e.getAfter = K((t) => [t, ur(n, t), n.getState().columnSizing], (t, r) => r.slice(e.getIndex(t) + 1).reduce((o, i) => o + i.getSize(), 0), q(n.options, "debugColumns", "getAfter")), e.resetSize = () => {
      n.setColumnSizing((t) => {
        let {
          [e.id]: r,
          ...o
        } = t;
        return o;
      });
    }, e.getCanResize = () => {
      var t, r;
      return ((t = e.columnDef.enableResizing) != null ? t : !0) && ((r = n.options.enableColumnResizing) != null ? r : !0);
    }, e.getIsResizing = () => n.getState().columnSizingInfo.isResizingColumn === e.id;
  },
  createHeader: (e, n) => {
    e.getSize = () => {
      let t = 0;
      const r = (o) => {
        if (o.subHeaders.length)
          o.subHeaders.forEach(r);
        else {
          var i;
          t += (i = o.column.getSize()) != null ? i : 0;
        }
      };
      return r(e), t;
    }, e.getStart = () => {
      if (e.index > 0) {
        const t = e.headerGroup.headers[e.index - 1];
        return t.getStart() + t.getSize();
      }
      return 0;
    }, e.getResizeHandler = (t) => {
      const r = n.getColumn(e.column.id), o = r == null ? void 0 : r.getCanResize();
      return (i) => {
        if (!r || !o || (i.persist == null || i.persist(), hi(i) && i.touches && i.touches.length > 1))
          return;
        const s = e.getSize(), a = e ? e.getLeafHeaders().map((v) => [v.column.id, v.column.getSize()]) : [[r.id, r.getSize()]], l = hi(i) ? Math.round(i.touches[0].clientX) : i.clientX, u = {}, c = (v, y) => {
          typeof y == "number" && (n.setColumnSizingInfo((b) => {
            var x, w;
            const S = n.options.columnResizeDirection === "rtl" ? -1 : 1, k = (y - ((x = b == null ? void 0 : b.startOffset) != null ? x : 0)) * S, N = Math.max(k / ((w = b == null ? void 0 : b.startSize) != null ? w : 0), -0.999999);
            return b.columnSizingStart.forEach((C) => {
              let [R, O] = C;
              u[R] = Math.round(Math.max(O + O * N, 0) * 100) / 100;
            }), {
              ...b,
              deltaOffset: k,
              deltaPercentage: N
            };
          }), (n.options.columnResizeMode === "onChange" || v === "end") && n.setColumnSizing((b) => ({
            ...b,
            ...u
          })));
        }, d = (v) => c("move", v), f = (v) => {
          c("end", v), n.setColumnSizingInfo((y) => ({
            ...y,
            isResizingColumn: !1,
            startOffset: null,
            startSize: null,
            deltaOffset: null,
            deltaPercentage: null,
            columnSizingStart: []
          }));
        }, p = xb(t), g = {
          moveHandler: (v) => d(v.clientX),
          upHandler: (v) => {
            p == null || p.removeEventListener("mousemove", g.moveHandler), p == null || p.removeEventListener("mouseup", g.upHandler), f(v.clientX);
          }
        }, h = {
          moveHandler: (v) => (v.cancelable && (v.preventDefault(), v.stopPropagation()), d(v.touches[0].clientX), !1),
          upHandler: (v) => {
            var y;
            p == null || p.removeEventListener("touchmove", h.moveHandler), p == null || p.removeEventListener("touchend", h.upHandler), v.cancelable && (v.preventDefault(), v.stopPropagation()), f((y = v.touches[0]) == null ? void 0 : y.clientX);
          }
        }, m = wb() ? {
          passive: !1
        } : !1;
        hi(i) ? (p == null || p.addEventListener("touchmove", h.moveHandler, m), p == null || p.addEventListener("touchend", h.upHandler, m)) : (p == null || p.addEventListener("mousemove", g.moveHandler, m), p == null || p.addEventListener("mouseup", g.upHandler, m)), n.setColumnSizingInfo((v) => ({
          ...v,
          startOffset: l,
          startSize: s,
          deltaOffset: 0,
          deltaPercentage: 0,
          columnSizingStart: a,
          isResizingColumn: r.id
        }));
      };
    };
  },
  createTable: (e) => {
    e.setColumnSizing = (n) => e.options.onColumnSizingChange == null ? void 0 : e.options.onColumnSizingChange(n), e.setColumnSizingInfo = (n) => e.options.onColumnSizingInfoChange == null ? void 0 : e.options.onColumnSizingInfoChange(n), e.resetColumnSizing = (n) => {
      var t;
      e.setColumnSizing(n ? {} : (t = e.initialState.columnSizing) != null ? t : {});
    }, e.resetHeaderSizeInfo = (n) => {
      var t;
      e.setColumnSizingInfo(n ? pi() : (t = e.initialState.columnSizingInfo) != null ? t : pi());
    }, e.getTotalSize = () => {
      var n, t;
      return (n = (t = e.getHeaderGroups()[0]) == null ? void 0 : t.headers.reduce((r, o) => r + o.getSize(), 0)) != null ? n : 0;
    }, e.getLeftTotalSize = () => {
      var n, t;
      return (n = (t = e.getLeftHeaderGroups()[0]) == null ? void 0 : t.headers.reduce((r, o) => r + o.getSize(), 0)) != null ? n : 0;
    }, e.getCenterTotalSize = () => {
      var n, t;
      return (n = (t = e.getCenterHeaderGroups()[0]) == null ? void 0 : t.headers.reduce((r, o) => r + o.getSize(), 0)) != null ? n : 0;
    }, e.getRightTotalSize = () => {
      var n, t;
      return (n = (t = e.getRightHeaderGroups()[0]) == null ? void 0 : t.headers.reduce((r, o) => r + o.getSize(), 0)) != null ? n : 0;
    };
  }
};
let jr = null;
function wb() {
  if (typeof jr == "boolean") return jr;
  let e = !1;
  try {
    const n = {
      get passive() {
        return e = !0, !1;
      }
    }, t = () => {
    };
    window.addEventListener("test", t, n), window.removeEventListener("test", t);
  } catch {
    e = !1;
  }
  return jr = e, jr;
}
function hi(e) {
  return e.type === "touchstart";
}
const Sb = {
  getInitialState: (e) => ({
    columnVisibility: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnVisibilityChange: Ve("columnVisibility", e)
  }),
  createColumn: (e, n) => {
    e.toggleVisibility = (t) => {
      e.getCanHide() && n.setColumnVisibility((r) => ({
        ...r,
        [e.id]: t ?? !e.getIsVisible()
      }));
    }, e.getIsVisible = () => {
      var t, r;
      const o = e.columns;
      return (t = o.length ? o.some((i) => i.getIsVisible()) : (r = n.getState().columnVisibility) == null ? void 0 : r[e.id]) != null ? t : !0;
    }, e.getCanHide = () => {
      var t, r;
      return ((t = e.columnDef.enableHiding) != null ? t : !0) && ((r = n.options.enableHiding) != null ? r : !0);
    }, e.getToggleVisibilityHandler = () => (t) => {
      e.toggleVisibility == null || e.toggleVisibility(t.target.checked);
    };
  },
  createRow: (e, n) => {
    e._getAllVisibleCells = K(() => [e.getAllCells(), n.getState().columnVisibility], (t) => t.filter((r) => r.column.getIsVisible()), q(n.options, "debugRows", "_getAllVisibleCells")), e.getVisibleCells = K(() => [e.getLeftVisibleCells(), e.getCenterVisibleCells(), e.getRightVisibleCells()], (t, r, o) => [...t, ...r, ...o], q(n.options, "debugRows", "getVisibleCells"));
  },
  createTable: (e) => {
    const n = (t, r) => K(() => [r(), r().filter((o) => o.getIsVisible()).map((o) => o.id).join("_")], (o) => o.filter((i) => i.getIsVisible == null ? void 0 : i.getIsVisible()), q(e.options, "debugColumns", t));
    e.getVisibleFlatColumns = n("getVisibleFlatColumns", () => e.getAllFlatColumns()), e.getVisibleLeafColumns = n("getVisibleLeafColumns", () => e.getAllLeafColumns()), e.getLeftVisibleLeafColumns = n("getLeftVisibleLeafColumns", () => e.getLeftLeafColumns()), e.getRightVisibleLeafColumns = n("getRightVisibleLeafColumns", () => e.getRightLeafColumns()), e.getCenterVisibleLeafColumns = n("getCenterVisibleLeafColumns", () => e.getCenterLeafColumns()), e.setColumnVisibility = (t) => e.options.onColumnVisibilityChange == null ? void 0 : e.options.onColumnVisibilityChange(t), e.resetColumnVisibility = (t) => {
      var r;
      e.setColumnVisibility(t ? {} : (r = e.initialState.columnVisibility) != null ? r : {});
    }, e.toggleAllColumnsVisible = (t) => {
      var r;
      t = (r = t) != null ? r : !e.getIsAllColumnsVisible(), e.setColumnVisibility(e.getAllLeafColumns().reduce((o, i) => ({
        ...o,
        [i.id]: t || !(i.getCanHide != null && i.getCanHide())
      }), {}));
    }, e.getIsAllColumnsVisible = () => !e.getAllLeafColumns().some((t) => !(t.getIsVisible != null && t.getIsVisible())), e.getIsSomeColumnsVisible = () => e.getAllLeafColumns().some((t) => t.getIsVisible == null ? void 0 : t.getIsVisible()), e.getToggleAllColumnsVisibilityHandler = () => (t) => {
      var r;
      e.toggleAllColumnsVisible((r = t.target) == null ? void 0 : r.checked);
    };
  }
};
function ur(e, n) {
  return n ? n === "center" ? e.getCenterVisibleLeafColumns() : n === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
}
const Cb = {
  createTable: (e) => {
    e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
      if (e._getGlobalFacetedMinMaxValues)
        return e._getGlobalFacetedMinMaxValues();
    };
  }
}, kb = {
  getInitialState: (e) => ({
    globalFilter: void 0,
    ...e
  }),
  getDefaultOptions: (e) => ({
    onGlobalFilterChange: Ve("globalFilter", e),
    globalFilterFn: "auto",
    getColumnCanGlobalFilter: (n) => {
      var t;
      const r = (t = e.getCoreRowModel().flatRows[0]) == null || (t = t._getAllCellsByColumnId()[n.id]) == null ? void 0 : t.getValue();
      return typeof r == "string" || typeof r == "number";
    }
  }),
  createColumn: (e, n) => {
    e.getCanGlobalFilter = () => {
      var t, r, o, i;
      return ((t = e.columnDef.enableGlobalFilter) != null ? t : !0) && ((r = n.options.enableGlobalFilter) != null ? r : !0) && ((o = n.options.enableFilters) != null ? o : !0) && ((i = n.options.getColumnCanGlobalFilter == null ? void 0 : n.options.getColumnCanGlobalFilter(e)) != null ? i : !0) && !!e.accessorFn;
    };
  },
  createTable: (e) => {
    e.getGlobalAutoFilterFn = () => yt.includesString, e.getGlobalFilterFn = () => {
      var n, t;
      const {
        globalFilterFn: r
      } = e.options;
      return Uo(r) ? r : r === "auto" ? e.getGlobalAutoFilterFn() : (n = (t = e.options.filterFns) == null ? void 0 : t[r]) != null ? n : yt[r];
    }, e.setGlobalFilter = (n) => {
      e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(n);
    }, e.resetGlobalFilter = (n) => {
      e.setGlobalFilter(n ? void 0 : e.initialState.globalFilter);
    };
  }
}, Eb = {
  getInitialState: (e) => ({
    expanded: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onExpandedChange: Ve("expanded", e),
    paginateExpandedRows: !0
  }),
  createTable: (e) => {
    let n = !1, t = !1;
    e._autoResetExpanded = () => {
      var r, o;
      if (!n) {
        e._queue(() => {
          n = !0;
        });
        return;
      }
      if ((r = (o = e.options.autoResetAll) != null ? o : e.options.autoResetExpanded) != null ? r : !e.options.manualExpanding) {
        if (t) return;
        t = !0, e._queue(() => {
          e.resetExpanded(), t = !1;
        });
      }
    }, e.setExpanded = (r) => e.options.onExpandedChange == null ? void 0 : e.options.onExpandedChange(r), e.toggleAllRowsExpanded = (r) => {
      r ?? !e.getIsAllRowsExpanded() ? e.setExpanded(!0) : e.setExpanded({});
    }, e.resetExpanded = (r) => {
      var o, i;
      e.setExpanded(r ? {} : (o = (i = e.initialState) == null ? void 0 : i.expanded) != null ? o : {});
    }, e.getCanSomeRowsExpand = () => e.getPrePaginationRowModel().flatRows.some((r) => r.getCanExpand()), e.getToggleAllRowsExpandedHandler = () => (r) => {
      r.persist == null || r.persist(), e.toggleAllRowsExpanded();
    }, e.getIsSomeRowsExpanded = () => {
      const r = e.getState().expanded;
      return r === !0 || Object.values(r).some(Boolean);
    }, e.getIsAllRowsExpanded = () => {
      const r = e.getState().expanded;
      return typeof r == "boolean" ? r === !0 : !(!Object.keys(r).length || e.getRowModel().flatRows.some((o) => !o.getIsExpanded()));
    }, e.getExpandedDepth = () => {
      let r = 0;
      return (e.getState().expanded === !0 ? Object.keys(e.getRowModel().rowsById) : Object.keys(e.getState().expanded)).forEach((i) => {
        const s = i.split(".");
        r = Math.max(r, s.length);
      }), r;
    }, e.getPreExpandedRowModel = () => e.getSortedRowModel(), e.getExpandedRowModel = () => (!e._getExpandedRowModel && e.options.getExpandedRowModel && (e._getExpandedRowModel = e.options.getExpandedRowModel(e)), e.options.manualExpanding || !e._getExpandedRowModel ? e.getPreExpandedRowModel() : e._getExpandedRowModel());
  },
  createRow: (e, n) => {
    e.toggleExpanded = (t) => {
      n.setExpanded((r) => {
        var o;
        const i = r === !0 ? !0 : !!(r != null && r[e.id]);
        let s = {};
        if (r === !0 ? Object.keys(n.getRowModel().rowsById).forEach((a) => {
          s[a] = !0;
        }) : s = r, t = (o = t) != null ? o : !i, !i && t)
          return {
            ...s,
            [e.id]: !0
          };
        if (i && !t) {
          const {
            [e.id]: a,
            ...l
          } = s;
          return l;
        }
        return r;
      });
    }, e.getIsExpanded = () => {
      var t;
      const r = n.getState().expanded;
      return !!((t = n.options.getIsRowExpanded == null ? void 0 : n.options.getIsRowExpanded(e)) != null ? t : r === !0 || r != null && r[e.id]);
    }, e.getCanExpand = () => {
      var t, r, o;
      return (t = n.options.getRowCanExpand == null ? void 0 : n.options.getRowCanExpand(e)) != null ? t : ((r = n.options.enableExpanding) != null ? r : !0) && !!((o = e.subRows) != null && o.length);
    }, e.getIsAllParentsExpanded = () => {
      let t = !0, r = e;
      for (; t && r.parentId; )
        r = n.getRow(r.parentId, !0), t = r.getIsExpanded();
      return t;
    }, e.getToggleExpandedHandler = () => {
      const t = e.getCanExpand();
      return () => {
        t && e.toggleExpanded();
      };
    };
  }
}, qi = 0, Zi = 10, mi = () => ({
  pageIndex: qi,
  pageSize: Zi
}), Nb = {
  getInitialState: (e) => ({
    ...e,
    pagination: {
      ...mi(),
      ...e == null ? void 0 : e.pagination
    }
  }),
  getDefaultOptions: (e) => ({
    onPaginationChange: Ve("pagination", e)
  }),
  createTable: (e) => {
    let n = !1, t = !1;
    e._autoResetPageIndex = () => {
      var r, o;
      if (!n) {
        e._queue(() => {
          n = !0;
        });
        return;
      }
      if ((r = (o = e.options.autoResetAll) != null ? o : e.options.autoResetPageIndex) != null ? r : !e.options.manualPagination) {
        if (t) return;
        t = !0, e._queue(() => {
          e.resetPageIndex(), t = !1;
        });
      }
    }, e.setPagination = (r) => {
      const o = (i) => Ft(r, i);
      return e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange(o);
    }, e.resetPagination = (r) => {
      var o;
      e.setPagination(r ? mi() : (o = e.initialState.pagination) != null ? o : mi());
    }, e.setPageIndex = (r) => {
      e.setPagination((o) => {
        let i = Ft(r, o.pageIndex);
        const s = typeof e.options.pageCount > "u" || e.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1;
        return i = Math.max(0, Math.min(i, s)), {
          ...o,
          pageIndex: i
        };
      });
    }, e.resetPageIndex = (r) => {
      var o, i;
      e.setPageIndex(r ? qi : (o = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageIndex) != null ? o : qi);
    }, e.resetPageSize = (r) => {
      var o, i;
      e.setPageSize(r ? Zi : (o = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageSize) != null ? o : Zi);
    }, e.setPageSize = (r) => {
      e.setPagination((o) => {
        const i = Math.max(1, Ft(r, o.pageSize)), s = o.pageSize * o.pageIndex, a = Math.floor(s / i);
        return {
          ...o,
          pageIndex: a,
          pageSize: i
        };
      });
    }, e.setPageCount = (r) => e.setPagination((o) => {
      var i;
      let s = Ft(r, (i = e.options.pageCount) != null ? i : -1);
      return typeof s == "number" && (s = Math.max(-1, s)), {
        ...o,
        pageCount: s
      };
    }), e.getPageOptions = K(() => [e.getPageCount()], (r) => {
      let o = [];
      return r && r > 0 && (o = [...new Array(r)].fill(null).map((i, s) => s)), o;
    }, q(e.options, "debugTable", "getPageOptions")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
      const {
        pageIndex: r
      } = e.getState().pagination, o = e.getPageCount();
      return o === -1 ? !0 : o === 0 ? !1 : r < o - 1;
    }, e.previousPage = () => e.setPageIndex((r) => r - 1), e.nextPage = () => e.setPageIndex((r) => r + 1), e.firstPage = () => e.setPageIndex(0), e.lastPage = () => e.setPageIndex(e.getPageCount() - 1), e.getPrePaginationRowModel = () => e.getExpandedRowModel(), e.getPaginationRowModel = () => (!e._getPaginationRowModel && e.options.getPaginationRowModel && (e._getPaginationRowModel = e.options.getPaginationRowModel(e)), e.options.manualPagination || !e._getPaginationRowModel ? e.getPrePaginationRowModel() : e._getPaginationRowModel()), e.getPageCount = () => {
      var r;
      return (r = e.options.pageCount) != null ? r : Math.ceil(e.getRowCount() / e.getState().pagination.pageSize);
    }, e.getRowCount = () => {
      var r;
      return (r = e.options.rowCount) != null ? r : e.getPrePaginationRowModel().rows.length;
    };
  }
}, yi = () => ({
  top: [],
  bottom: []
}), Rb = {
  getInitialState: (e) => ({
    rowPinning: yi(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowPinningChange: Ve("rowPinning", e)
  }),
  createRow: (e, n) => {
    e.pin = (t, r, o) => {
      const i = r ? e.getLeafRows().map((l) => {
        let {
          id: u
        } = l;
        return u;
      }) : [], s = o ? e.getParentRows().map((l) => {
        let {
          id: u
        } = l;
        return u;
      }) : [], a = /* @__PURE__ */ new Set([...s, e.id, ...i]);
      n.setRowPinning((l) => {
        var u, c;
        if (t === "bottom") {
          var d, f;
          return {
            top: ((d = l == null ? void 0 : l.top) != null ? d : []).filter((h) => !(a != null && a.has(h))),
            bottom: [...((f = l == null ? void 0 : l.bottom) != null ? f : []).filter((h) => !(a != null && a.has(h))), ...Array.from(a)]
          };
        }
        if (t === "top") {
          var p, g;
          return {
            top: [...((p = l == null ? void 0 : l.top) != null ? p : []).filter((h) => !(a != null && a.has(h))), ...Array.from(a)],
            bottom: ((g = l == null ? void 0 : l.bottom) != null ? g : []).filter((h) => !(a != null && a.has(h)))
          };
        }
        return {
          top: ((u = l == null ? void 0 : l.top) != null ? u : []).filter((h) => !(a != null && a.has(h))),
          bottom: ((c = l == null ? void 0 : l.bottom) != null ? c : []).filter((h) => !(a != null && a.has(h)))
        };
      });
    }, e.getCanPin = () => {
      var t;
      const {
        enableRowPinning: r,
        enablePinning: o
      } = n.options;
      return typeof r == "function" ? r(e) : (t = r ?? o) != null ? t : !0;
    }, e.getIsPinned = () => {
      const t = [e.id], {
        top: r,
        bottom: o
      } = n.getState().rowPinning, i = t.some((a) => r == null ? void 0 : r.includes(a)), s = t.some((a) => o == null ? void 0 : o.includes(a));
      return i ? "top" : s ? "bottom" : !1;
    }, e.getPinnedIndex = () => {
      var t, r;
      const o = e.getIsPinned();
      if (!o) return -1;
      const i = (t = o === "top" ? n.getTopRows() : n.getBottomRows()) == null ? void 0 : t.map((s) => {
        let {
          id: a
        } = s;
        return a;
      });
      return (r = i == null ? void 0 : i.indexOf(e.id)) != null ? r : -1;
    };
  },
  createTable: (e) => {
    e.setRowPinning = (n) => e.options.onRowPinningChange == null ? void 0 : e.options.onRowPinningChange(n), e.resetRowPinning = (n) => {
      var t, r;
      return e.setRowPinning(n ? yi() : (t = (r = e.initialState) == null ? void 0 : r.rowPinning) != null ? t : yi());
    }, e.getIsSomeRowsPinned = (n) => {
      var t;
      const r = e.getState().rowPinning;
      if (!n) {
        var o, i;
        return !!((o = r.top) != null && o.length || (i = r.bottom) != null && i.length);
      }
      return !!((t = r[n]) != null && t.length);
    }, e._getPinnedRows = (n, t, r) => {
      var o;
      return ((o = e.options.keepPinnedRows) == null || o ? (
        //get all rows that are pinned even if they would not be otherwise visible
        //account for expanded parent rows, but not pagination or filtering
        (t ?? []).map((s) => {
          const a = e.getRow(s, !0);
          return a.getIsAllParentsExpanded() ? a : null;
        })
      ) : (
        //else get only visible rows that are pinned
        (t ?? []).map((s) => n.find((a) => a.id === s))
      )).filter(Boolean).map((s) => ({
        ...s,
        position: r
      }));
    }, e.getTopRows = K(() => [e.getRowModel().rows, e.getState().rowPinning.top], (n, t) => e._getPinnedRows(n, t, "top"), q(e.options, "debugRows", "getTopRows")), e.getBottomRows = K(() => [e.getRowModel().rows, e.getState().rowPinning.bottom], (n, t) => e._getPinnedRows(n, t, "bottom"), q(e.options, "debugRows", "getBottomRows")), e.getCenterRows = K(() => [e.getRowModel().rows, e.getState().rowPinning.top, e.getState().rowPinning.bottom], (n, t, r) => {
      const o = /* @__PURE__ */ new Set([...t ?? [], ...r ?? []]);
      return n.filter((i) => !o.has(i.id));
    }, q(e.options, "debugRows", "getCenterRows"));
  }
}, Ab = {
  getInitialState: (e) => ({
    rowSelection: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowSelectionChange: Ve("rowSelection", e),
    enableRowSelection: !0,
    enableMultiRowSelection: !0,
    enableSubRowSelection: !0
    // enableGroupingRowSelection: false,
    // isAdditiveSelectEvent: (e: unknown) => !!e.metaKey,
    // isInclusiveSelectEvent: (e: unknown) => !!e.shiftKey,
  }),
  createTable: (e) => {
    e.setRowSelection = (n) => e.options.onRowSelectionChange == null ? void 0 : e.options.onRowSelectionChange(n), e.resetRowSelection = (n) => {
      var t;
      return e.setRowSelection(n ? {} : (t = e.initialState.rowSelection) != null ? t : {});
    }, e.toggleAllRowsSelected = (n) => {
      e.setRowSelection((t) => {
        n = typeof n < "u" ? n : !e.getIsAllRowsSelected();
        const r = {
          ...t
        }, o = e.getPreGroupedRowModel().flatRows;
        return n ? o.forEach((i) => {
          i.getCanSelect() && (r[i.id] = !0);
        }) : o.forEach((i) => {
          delete r[i.id];
        }), r;
      });
    }, e.toggleAllPageRowsSelected = (n) => e.setRowSelection((t) => {
      const r = typeof n < "u" ? n : !e.getIsAllPageRowsSelected(), o = {
        ...t
      };
      return e.getRowModel().rows.forEach((i) => {
        Ji(o, i.id, r, !0, e);
      }), o;
    }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = K(() => [e.getState().rowSelection, e.getCoreRowModel()], (n, t) => Object.keys(n).length ? bi(e, t) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, q(e.options, "debugTable", "getSelectedRowModel")), e.getFilteredSelectedRowModel = K(() => [e.getState().rowSelection, e.getFilteredRowModel()], (n, t) => Object.keys(n).length ? bi(e, t) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, q(e.options, "debugTable", "getFilteredSelectedRowModel")), e.getGroupedSelectedRowModel = K(() => [e.getState().rowSelection, e.getSortedRowModel()], (n, t) => Object.keys(n).length ? bi(e, t) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, q(e.options, "debugTable", "getGroupedSelectedRowModel")), e.getIsAllRowsSelected = () => {
      const n = e.getFilteredRowModel().flatRows, {
        rowSelection: t
      } = e.getState();
      let r = !!(n.length && Object.keys(t).length);
      return r && n.some((o) => o.getCanSelect() && !t[o.id]) && (r = !1), r;
    }, e.getIsAllPageRowsSelected = () => {
      const n = e.getPaginationRowModel().flatRows.filter((o) => o.getCanSelect()), {
        rowSelection: t
      } = e.getState();
      let r = !!n.length;
      return r && n.some((o) => !t[o.id]) && (r = !1), r;
    }, e.getIsSomeRowsSelected = () => {
      var n;
      const t = Object.keys((n = e.getState().rowSelection) != null ? n : {}).length;
      return t > 0 && t < e.getFilteredRowModel().flatRows.length;
    }, e.getIsSomePageRowsSelected = () => {
      const n = e.getPaginationRowModel().flatRows;
      return e.getIsAllPageRowsSelected() ? !1 : n.filter((t) => t.getCanSelect()).some((t) => t.getIsSelected() || t.getIsSomeSelected());
    }, e.getToggleAllRowsSelectedHandler = () => (n) => {
      e.toggleAllRowsSelected(n.target.checked);
    }, e.getToggleAllPageRowsSelectedHandler = () => (n) => {
      e.toggleAllPageRowsSelected(n.target.checked);
    };
  },
  createRow: (e, n) => {
    e.toggleSelected = (t, r) => {
      const o = e.getIsSelected();
      n.setRowSelection((i) => {
        var s;
        if (t = typeof t < "u" ? t : !o, e.getCanSelect() && o === t)
          return i;
        const a = {
          ...i
        };
        return Ji(a, e.id, t, (s = r == null ? void 0 : r.selectChildren) != null ? s : !0, n), a;
      });
    }, e.getIsSelected = () => {
      const {
        rowSelection: t
      } = n.getState();
      return Vs(e, t);
    }, e.getIsSomeSelected = () => {
      const {
        rowSelection: t
      } = n.getState();
      return Yi(e, t) === "some";
    }, e.getIsAllSubRowsSelected = () => {
      const {
        rowSelection: t
      } = n.getState();
      return Yi(e, t) === "all";
    }, e.getCanSelect = () => {
      var t;
      return typeof n.options.enableRowSelection == "function" ? n.options.enableRowSelection(e) : (t = n.options.enableRowSelection) != null ? t : !0;
    }, e.getCanSelectSubRows = () => {
      var t;
      return typeof n.options.enableSubRowSelection == "function" ? n.options.enableSubRowSelection(e) : (t = n.options.enableSubRowSelection) != null ? t : !0;
    }, e.getCanMultiSelect = () => {
      var t;
      return typeof n.options.enableMultiRowSelection == "function" ? n.options.enableMultiRowSelection(e) : (t = n.options.enableMultiRowSelection) != null ? t : !0;
    }, e.getToggleSelectedHandler = () => {
      const t = e.getCanSelect();
      return (r) => {
        var o;
        t && e.toggleSelected((o = r.target) == null ? void 0 : o.checked);
      };
    };
  }
}, Ji = (e, n, t, r, o) => {
  var i;
  const s = o.getRow(n, !0);
  t ? (s.getCanMultiSelect() || Object.keys(e).forEach((a) => delete e[a]), s.getCanSelect() && (e[n] = !0)) : delete e[n], r && (i = s.subRows) != null && i.length && s.getCanSelectSubRows() && s.subRows.forEach((a) => Ji(e, a.id, t, r, o));
};
function bi(e, n) {
  const t = e.getState().rowSelection, r = [], o = {}, i = function(s, a) {
    return s.map((l) => {
      var u;
      const c = Vs(l, t);
      if (c && (r.push(l), o[l.id] = l), (u = l.subRows) != null && u.length && (l = {
        ...l,
        subRows: i(l.subRows)
      }), c)
        return l;
    }).filter(Boolean);
  };
  return {
    rows: i(n.rows),
    flatRows: r,
    rowsById: o
  };
}
function Vs(e, n) {
  var t;
  return (t = n[e.id]) != null ? t : !1;
}
function Yi(e, n, t) {
  var r;
  if (!((r = e.subRows) != null && r.length)) return !1;
  let o = !0, i = !1;
  return e.subRows.forEach((s) => {
    if (!(i && !o) && (s.getCanSelect() && (Vs(s, n) ? i = !0 : o = !1), s.subRows && s.subRows.length)) {
      const a = Yi(s, n);
      a === "all" ? i = !0 : (a === "some" && (i = !0), o = !1);
    }
  }), o ? "all" : i ? "some" : !1;
}
const Xi = /([0-9]+)/gm, Tb = (e, n, t) => pd(zt(e.getValue(t)).toLowerCase(), zt(n.getValue(t)).toLowerCase()), Fb = (e, n, t) => pd(zt(e.getValue(t)), zt(n.getValue(t))), Ib = (e, n, t) => js(zt(e.getValue(t)).toLowerCase(), zt(n.getValue(t)).toLowerCase()), Ob = (e, n, t) => js(zt(e.getValue(t)), zt(n.getValue(t))), Mb = (e, n, t) => {
  const r = e.getValue(t), o = n.getValue(t);
  return r > o ? 1 : r < o ? -1 : 0;
}, $b = (e, n, t) => js(e.getValue(t), n.getValue(t));
function js(e, n) {
  return e === n ? 0 : e > n ? 1 : -1;
}
function zt(e) {
  return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
}
function pd(e, n) {
  const t = e.split(Xi).filter(Boolean), r = n.split(Xi).filter(Boolean);
  for (; t.length && r.length; ) {
    const o = t.shift(), i = r.shift(), s = parseInt(o, 10), a = parseInt(i, 10), l = [s, a].sort();
    if (isNaN(l[0])) {
      if (o > i)
        return 1;
      if (i > o)
        return -1;
      continue;
    }
    if (isNaN(l[1]))
      return isNaN(s) ? -1 : 1;
    if (s > a)
      return 1;
    if (a > s)
      return -1;
  }
  return t.length - r.length;
}
const Qn = {
  alphanumeric: Tb,
  alphanumericCaseSensitive: Fb,
  text: Ib,
  textCaseSensitive: Ob,
  datetime: Mb,
  basic: $b
}, Pb = {
  getInitialState: (e) => ({
    sorting: [],
    ...e
  }),
  getDefaultColumnDef: () => ({
    sortingFn: "auto",
    sortUndefined: 1
  }),
  getDefaultOptions: (e) => ({
    onSortingChange: Ve("sorting", e),
    isMultiSortEvent: (n) => n.shiftKey
  }),
  createColumn: (e, n) => {
    e.getAutoSortingFn = () => {
      const t = n.getFilteredRowModel().flatRows.slice(10);
      let r = !1;
      for (const o of t) {
        const i = o == null ? void 0 : o.getValue(e.id);
        if (Object.prototype.toString.call(i) === "[object Date]")
          return Qn.datetime;
        if (typeof i == "string" && (r = !0, i.split(Xi).length > 1))
          return Qn.alphanumeric;
      }
      return r ? Qn.text : Qn.basic;
    }, e.getAutoSortDir = () => {
      const t = n.getFilteredRowModel().flatRows[0];
      return typeof (t == null ? void 0 : t.getValue(e.id)) == "string" ? "asc" : "desc";
    }, e.getSortingFn = () => {
      var t, r;
      if (!e)
        throw new Error();
      return Uo(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (t = (r = n.options.sortingFns) == null ? void 0 : r[e.columnDef.sortingFn]) != null ? t : Qn[e.columnDef.sortingFn];
    }, e.toggleSorting = (t, r) => {
      const o = e.getNextSortingOrder(), i = typeof t < "u" && t !== null;
      n.setSorting((s) => {
        const a = s == null ? void 0 : s.find((p) => p.id === e.id), l = s == null ? void 0 : s.findIndex((p) => p.id === e.id);
        let u = [], c, d = i ? t : o === "desc";
        if (s != null && s.length && e.getCanMultiSort() && r ? a ? c = "toggle" : c = "add" : s != null && s.length && l !== s.length - 1 ? c = "replace" : a ? c = "toggle" : c = "replace", c === "toggle" && (i || o || (c = "remove")), c === "add") {
          var f;
          u = [...s, {
            id: e.id,
            desc: d
          }], u.splice(0, u.length - ((f = n.options.maxMultiSortColCount) != null ? f : Number.MAX_SAFE_INTEGER));
        } else c === "toggle" ? u = s.map((p) => p.id === e.id ? {
          ...p,
          desc: d
        } : p) : c === "remove" ? u = s.filter((p) => p.id !== e.id) : u = [{
          id: e.id,
          desc: d
        }];
        return u;
      });
    }, e.getFirstSortDir = () => {
      var t, r;
      return ((t = (r = e.columnDef.sortDescFirst) != null ? r : n.options.sortDescFirst) != null ? t : e.getAutoSortDir() === "desc") ? "desc" : "asc";
    }, e.getNextSortingOrder = (t) => {
      var r, o;
      const i = e.getFirstSortDir(), s = e.getIsSorted();
      return s ? s !== i && ((r = n.options.enableSortingRemoval) == null || r) && // If enableSortRemove, enable in general
      (!(t && (o = n.options.enableMultiRemove) != null) || o) ? !1 : s === "desc" ? "asc" : "desc" : i;
    }, e.getCanSort = () => {
      var t, r;
      return ((t = e.columnDef.enableSorting) != null ? t : !0) && ((r = n.options.enableSorting) != null ? r : !0) && !!e.accessorFn;
    }, e.getCanMultiSort = () => {
      var t, r;
      return (t = (r = e.columnDef.enableMultiSort) != null ? r : n.options.enableMultiSort) != null ? t : !!e.accessorFn;
    }, e.getIsSorted = () => {
      var t;
      const r = (t = n.getState().sorting) == null ? void 0 : t.find((o) => o.id === e.id);
      return r ? r.desc ? "desc" : "asc" : !1;
    }, e.getSortIndex = () => {
      var t, r;
      return (t = (r = n.getState().sorting) == null ? void 0 : r.findIndex((o) => o.id === e.id)) != null ? t : -1;
    }, e.clearSorting = () => {
      n.setSorting((t) => t != null && t.length ? t.filter((r) => r.id !== e.id) : []);
    }, e.getToggleSortingHandler = () => {
      const t = e.getCanSort();
      return (r) => {
        t && (r.persist == null || r.persist(), e.toggleSorting == null || e.toggleSorting(void 0, e.getCanMultiSort() ? n.options.isMultiSortEvent == null ? void 0 : n.options.isMultiSortEvent(r) : !1));
      };
    };
  },
  createTable: (e) => {
    e.setSorting = (n) => e.options.onSortingChange == null ? void 0 : e.options.onSortingChange(n), e.resetSorting = (n) => {
      var t, r;
      e.setSorting(n ? [] : (t = (r = e.initialState) == null ? void 0 : r.sorting) != null ? t : []);
    }, e.getPreSortedRowModel = () => e.getGroupedRowModel(), e.getSortedRowModel = () => (!e._getSortedRowModel && e.options.getSortedRowModel && (e._getSortedRowModel = e.options.getSortedRowModel(e)), e.options.manualSorting || !e._getSortedRowModel ? e.getPreSortedRowModel() : e._getSortedRowModel());
  }
}, Lb = [
  ob,
  Sb,
  bb,
  vb,
  ib,
  sb,
  Cb,
  //depends on ColumnFaceting
  kb,
  //depends on ColumnFiltering
  Pb,
  mb,
  //depends on RowSorting
  Eb,
  Nb,
  Rb,
  Ab,
  _b
];
function Db(e) {
  var n, t;
  process.env.NODE_ENV !== "production" && (e.debugAll || e.debugTable) && console.info("Creating Table Instance...");
  const r = [...Lb, ...(n = e._features) != null ? n : []];
  let o = {
    _features: r
  };
  const i = o._features.reduce((f, p) => Object.assign(f, p.getDefaultOptions == null ? void 0 : p.getDefaultOptions(o)), {}), s = (f) => o.options.mergeOptions ? o.options.mergeOptions(i, f) : {
    ...i,
    ...f
  };
  let l = {
    ...{},
    ...(t = e.initialState) != null ? t : {}
  };
  o._features.forEach((f) => {
    var p;
    l = (p = f.getInitialState == null ? void 0 : f.getInitialState(l)) != null ? p : l;
  });
  const u = [];
  let c = !1;
  const d = {
    _features: r,
    options: {
      ...i,
      ...e
    },
    initialState: l,
    _queue: (f) => {
      u.push(f), c || (c = !0, Promise.resolve().then(() => {
        for (; u.length; )
          u.shift()();
        c = !1;
      }).catch((p) => setTimeout(() => {
        throw p;
      })));
    },
    reset: () => {
      o.setState(o.initialState);
    },
    setOptions: (f) => {
      const p = Ft(f, o.options);
      o.options = s(p);
    },
    getState: () => o.options.state,
    setState: (f) => {
      o.options.onStateChange == null || o.options.onStateChange(f);
    },
    _getRowId: (f, p, g) => {
      var h;
      return (h = o.options.getRowId == null ? void 0 : o.options.getRowId(f, p, g)) != null ? h : `${g ? [g.id, p].join(".") : p}`;
    },
    getCoreRowModel: () => (o._getCoreRowModel || (o._getCoreRowModel = o.options.getCoreRowModel(o)), o._getCoreRowModel()),
    // The final calls start at the bottom of the model,
    // expanded rows, which then work their way up
    getRowModel: () => o.getPaginationRowModel(),
    //in next version, we should just pass in the row model as the optional 2nd arg
    getRow: (f, p) => {
      let g = (p ? o.getPrePaginationRowModel() : o.getRowModel()).rowsById[f];
      if (!g && (g = o.getCoreRowModel().rowsById[f], !g))
        throw process.env.NODE_ENV !== "production" ? new Error(`getRow could not find row with ID: ${f}`) : new Error();
      return g;
    },
    _getDefaultColumnDef: K(() => [o.options.defaultColumn], (f) => {
      var p;
      return f = (p = f) != null ? p : {}, {
        header: (g) => {
          const h = g.header.column.columnDef;
          return h.accessorKey ? h.accessorKey : h.accessorFn ? h.id : null;
        },
        // footer: props => props.header.column.id,
        cell: (g) => {
          var h, m;
          return (h = (m = g.renderValue()) == null || m.toString == null ? void 0 : m.toString()) != null ? h : null;
        },
        ...o._features.reduce((g, h) => Object.assign(g, h.getDefaultColumnDef == null ? void 0 : h.getDefaultColumnDef()), {}),
        ...f
      };
    }, q(e, "debugColumns", "_getDefaultColumnDef")),
    _getColumnDefs: () => o.options.columns,
    getAllColumns: K(() => [o._getColumnDefs()], (f) => {
      const p = function(g, h, m) {
        return m === void 0 && (m = 0), g.map((v) => {
          const y = rb(o, v, m, h), b = v;
          return y.columns = b.columns ? p(b.columns, y, m + 1) : [], y;
        });
      };
      return p(f);
    }, q(e, "debugColumns", "getAllColumns")),
    getAllFlatColumns: K(() => [o.getAllColumns()], (f) => f.flatMap((p) => p.getFlatColumns()), q(e, "debugColumns", "getAllFlatColumns")),
    _getAllFlatColumnsById: K(() => [o.getAllFlatColumns()], (f) => f.reduce((p, g) => (p[g.id] = g, p), {}), q(e, "debugColumns", "getAllFlatColumnsById")),
    getAllLeafColumns: K(() => [o.getAllColumns(), o._getOrderColumnsFn()], (f, p) => {
      let g = f.flatMap((h) => h.getLeafColumns());
      return p(g);
    }, q(e, "debugColumns", "getAllLeafColumns")),
    getColumn: (f) => {
      const p = o._getAllFlatColumnsById()[f];
      return process.env.NODE_ENV !== "production" && !p && console.error(`[Table] Column with id '${f}' does not exist.`), p;
    }
  };
  Object.assign(o, d);
  for (let f = 0; f < o._features.length; f++) {
    const p = o._features[f];
    p == null || p.createTable == null || p.createTable(o);
  }
  return o;
}
function zb() {
  return (e) => K(() => [e.options.data], (n) => {
    const t = {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, r = function(o, i, s) {
      i === void 0 && (i = 0);
      const a = [];
      for (let u = 0; u < o.length; u++) {
        const c = zs(e, e._getRowId(o[u], u, s), o[u], u, i, void 0, s == null ? void 0 : s.id);
        if (t.flatRows.push(c), t.rowsById[c.id] = c, a.push(c), e.options.getSubRows) {
          var l;
          c.originalSubRows = e.options.getSubRows(o[u], u), (l = c.originalSubRows) != null && l.length && (c.subRows = r(c.originalSubRows, i + 1, c));
        }
      }
      return a;
    };
    return t.rows = r(n), t;
  }, q(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
}
function Bb(e) {
  const n = [], t = (r) => {
    var o;
    n.push(r), (o = r.subRows) != null && o.length && r.getIsExpanded() && r.subRows.forEach(t);
  };
  return e.rows.forEach(t), {
    rows: n,
    flatRows: e.flatRows,
    rowsById: e.rowsById
  };
}
function Vb(e, n, t) {
  return t.options.filterFromLeafRows ? jb(e, n, t) : Ub(e, n, t);
}
function jb(e, n, t) {
  var r;
  const o = [], i = {}, s = (r = t.options.maxLeafRowFilterDepth) != null ? r : 100, a = function(l, u) {
    u === void 0 && (u = 0);
    const c = [];
    for (let f = 0; f < l.length; f++) {
      var d;
      let p = l[f];
      const g = zs(t, p.id, p.original, p.index, p.depth, void 0, p.parentId);
      if (g.columnFilters = p.columnFilters, (d = p.subRows) != null && d.length && u < s) {
        if (g.subRows = a(p.subRows, u + 1), p = g, n(p) && !g.subRows.length) {
          c.push(p), i[p.id] = p, o.push(p);
          continue;
        }
        if (n(p) || g.subRows.length) {
          c.push(p), i[p.id] = p, o.push(p);
          continue;
        }
      } else
        p = g, n(p) && (c.push(p), i[p.id] = p, o.push(p));
    }
    return c;
  };
  return {
    rows: a(e),
    flatRows: o,
    rowsById: i
  };
}
function Ub(e, n, t) {
  var r;
  const o = [], i = {}, s = (r = t.options.maxLeafRowFilterDepth) != null ? r : 100, a = function(l, u) {
    u === void 0 && (u = 0);
    const c = [];
    for (let f = 0; f < l.length; f++) {
      let p = l[f];
      if (n(p)) {
        var d;
        if ((d = p.subRows) != null && d.length && u < s) {
          const h = zs(t, p.id, p.original, p.index, p.depth, void 0, p.parentId);
          h.subRows = a(p.subRows, u + 1), p = h;
        }
        c.push(p), o.push(p), i[p.id] = p;
      }
    }
    return c;
  };
  return {
    rows: a(e),
    flatRows: o,
    rowsById: i
  };
}
function Gb() {
  return (e) => K(() => [e.getPreFilteredRowModel(), e.getState().columnFilters, e.getState().globalFilter], (n, t, r) => {
    if (!n.rows.length || !(t != null && t.length) && !r) {
      for (let f = 0; f < n.flatRows.length; f++)
        n.flatRows[f].columnFilters = {}, n.flatRows[f].columnFiltersMeta = {};
      return n;
    }
    const o = [], i = [];
    (t ?? []).forEach((f) => {
      var p;
      const g = e.getColumn(f.id);
      if (!g)
        return;
      const h = g.getFilterFn();
      if (!h) {
        process.env.NODE_ENV !== "production" && console.warn(`Could not find a valid 'column.filterFn' for column with the ID: ${g.id}.`);
        return;
      }
      o.push({
        id: f.id,
        filterFn: h,
        resolvedValue: (p = h.resolveFilterValue == null ? void 0 : h.resolveFilterValue(f.value)) != null ? p : f.value
      });
    });
    const s = (t ?? []).map((f) => f.id), a = e.getGlobalFilterFn(), l = e.getAllLeafColumns().filter((f) => f.getCanGlobalFilter());
    r && a && l.length && (s.push("__global__"), l.forEach((f) => {
      var p;
      i.push({
        id: f.id,
        filterFn: a,
        resolvedValue: (p = a.resolveFilterValue == null ? void 0 : a.resolveFilterValue(r)) != null ? p : r
      });
    }));
    let u, c;
    for (let f = 0; f < n.flatRows.length; f++) {
      const p = n.flatRows[f];
      if (p.columnFilters = {}, o.length)
        for (let g = 0; g < o.length; g++) {
          u = o[g];
          const h = u.id;
          p.columnFilters[h] = u.filterFn(p, h, u.resolvedValue, (m) => {
            p.columnFiltersMeta[h] = m;
          });
        }
      if (i.length) {
        for (let g = 0; g < i.length; g++) {
          c = i[g];
          const h = c.id;
          if (c.filterFn(p, h, c.resolvedValue, (m) => {
            p.columnFiltersMeta[h] = m;
          })) {
            p.columnFilters.__global__ = !0;
            break;
          }
        }
        p.columnFilters.__global__ !== !0 && (p.columnFilters.__global__ = !1);
      }
    }
    const d = (f) => {
      for (let p = 0; p < s.length; p++)
        if (f.columnFilters[s[p]] === !1)
          return !1;
      return !0;
    };
    return Vb(n.rows, d, e);
  }, q(e.options, "debugTable", "getFilteredRowModel", () => e._autoResetPageIndex()));
}
function Hb(e) {
  return (n) => K(() => [n.getState().pagination, n.getPrePaginationRowModel(), n.options.paginateExpandedRows ? void 0 : n.getState().expanded], (t, r) => {
    if (!r.rows.length)
      return r;
    const {
      pageSize: o,
      pageIndex: i
    } = t;
    let {
      rows: s,
      flatRows: a,
      rowsById: l
    } = r;
    const u = o * i, c = u + o;
    s = s.slice(u, c);
    let d;
    n.options.paginateExpandedRows ? d = {
      rows: s,
      flatRows: a,
      rowsById: l
    } : d = Bb({
      rows: s,
      flatRows: a,
      rowsById: l
    }), d.flatRows = [];
    const f = (p) => {
      d.flatRows.push(p), p.subRows.length && p.subRows.forEach(f);
    };
    return d.rows.forEach(f), d;
  }, q(n.options, "debugTable", "getPaginationRowModel"));
}
function Wb() {
  return (e) => K(() => [e.getState().sorting, e.getPreSortedRowModel()], (n, t) => {
    if (!t.rows.length || !(n != null && n.length))
      return t;
    const r = e.getState().sorting, o = [], i = r.filter((l) => {
      var u;
      return (u = e.getColumn(l.id)) == null ? void 0 : u.getCanSort();
    }), s = {};
    i.forEach((l) => {
      const u = e.getColumn(l.id);
      u && (s[l.id] = {
        sortUndefined: u.columnDef.sortUndefined,
        invertSorting: u.columnDef.invertSorting,
        sortingFn: u.getSortingFn()
      });
    });
    const a = (l) => {
      const u = l.map((c) => ({
        ...c
      }));
      return u.sort((c, d) => {
        for (let p = 0; p < i.length; p += 1) {
          var f;
          const g = i[p], h = s[g.id], m = h.sortUndefined, v = (f = g == null ? void 0 : g.desc) != null ? f : !1;
          let y = 0;
          if (m) {
            const b = c.getValue(g.id), x = d.getValue(g.id), w = b === void 0, S = x === void 0;
            if (w || S) {
              if (m === "first") return w ? -1 : 1;
              if (m === "last") return w ? 1 : -1;
              y = w && S ? 0 : w ? m : -m;
            }
          }
          if (y === 0 && (y = h.sortingFn(c, d, g.id)), y !== 0)
            return v && (y *= -1), h.invertSorting && (y *= -1), y;
        }
        return c.index - d.index;
      }), u.forEach((c) => {
        var d;
        o.push(c), (d = c.subRows) != null && d.length && (c.subRows = a(c.subRows));
      }), u;
    };
    return {
      rows: a(t.rows),
      flatRows: o,
      rowsById: t.rowsById
    };
  }, q(e.options, "debugTable", "getSortedRowModel", () => e._autoResetPageIndex()));
}
/**
   * react-table
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */
function qa(e, n) {
  return e ? Kb(e) ? /* @__PURE__ */ E.createElement(e, n) : e : null;
}
function Kb(e) {
  return qb(e) || typeof e == "function" || Zb(e);
}
function qb(e) {
  return typeof e == "function" && (() => {
    const n = Object.getPrototypeOf(e);
    return n.prototype && n.prototype.isReactComponent;
  })();
}
function Zb(e) {
  return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
}
function Jb(e) {
  const n = {
    state: {},
    // Dummy state
    onStateChange: () => {
    },
    // noop
    renderFallbackValue: null,
    ...e
  }, [t] = E.useState(() => ({
    current: Db(n)
  })), [r, o] = E.useState(() => t.current.initialState);
  return t.current.setOptions((i) => ({
    ...i,
    ...e,
    state: {
      ...r,
      ...e.state
    },
    // Similarly, we'll maintain both our internal state and any user-provided
    // state.
    onStateChange: (s) => {
      o(s), e.onStateChange == null || e.onStateChange(s);
    }
  })), t.current;
}
function PS({
  columns: e,
  data: n,
  searchable: t = !1,
  searchPlaceholder: r = "Search...",
  pagination: o = !1,
  pageSize: i = 10,
  pageSizeOptions: s = [10, 20, 50, 100],
  enableRowSelection: a = !1,
  onRowSelectionChange: l,
  enableColumnVisibility: u = !1,
  emptyMessage: c = "No results.",
  className: d,
  stickyHeader: f = !1,
  getRowClassName: p,
  onRowClick: g,
  loading: h = !1
}) {
  var U;
  const [m, v] = E.useState([]), [y, b] = E.useState([]), [x, w] = E.useState({}), [S, k] = E.useState({}), [N, C] = E.useState(""), [R, O] = E.useState({
    pageIndex: 0,
    pageSize: i
  }), F = Jb({
    data: n,
    columns: e,
    getCoreRowModel: zb(),
    getSortedRowModel: Wb(),
    getFilteredRowModel: Gb(),
    ...o && { getPaginationRowModel: Hb() },
    onSortingChange: v,
    onColumnFiltersChange: b,
    onColumnVisibilityChange: w,
    onRowSelectionChange: k,
    onGlobalFilterChange: C,
    onPaginationChange: O,
    enableRowSelection: a,
    state: {
      sorting: m,
      columnFilters: y,
      columnVisibility: x,
      rowSelection: S,
      globalFilter: N,
      pagination: R
    }
  });
  return E.useEffect(() => {
    if (l) {
      const L = F.getFilteredSelectedRowModel().rows.map((M) => M.original);
      l(L);
    }
  }, [S, F, l]), /* @__PURE__ */ D("div", { className: P("w-full space-y-4", d), children: [
    (t || u) && /* @__PURE__ */ D("div", { className: "flex items-center justify-between gap-4", children: [
      t && /* @__PURE__ */ _("div", { className: "max-w-sm flex-1", children: /* @__PURE__ */ _(
        lc,
        {
          placeholder: r,
          value: N ?? "",
          onChange: (L) => {
            C(L.target.value);
          },
          className: "w-full"
        }
      ) }),
      u && /* @__PURE__ */ D("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ _("span", { className: "text-muted-foreground text-sm", children: "Columns:" }),
        F.getAllLeafColumns().map((L) => L.id === "select" ? null : /* @__PURE__ */ D("label", { className: "flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ _(
            "input",
            {
              type: "checkbox",
              checked: L.getIsVisible(),
              onChange: (M) => {
                L.toggleVisibility(M.target.checked);
              },
              className: "rounded border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-slate-700"
            }
          ),
          /* @__PURE__ */ _("span", { className: "capitalize", children: L.id })
        ] }, L.id))
      ] })
    ] }),
    /* @__PURE__ */ _("div", { className: "overflow-hidden rounded-md border border-slate-200 dark:border-slate-800", children: /* @__PURE__ */ _("div", { className: P("overflow-auto", f && "max-h-[600px]"), children: /* @__PURE__ */ D("table", { className: "w-full caption-bottom text-sm", children: [
      /* @__PURE__ */ _(
        "thead",
        {
          className: P(
            "border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900",
            f && "sticky top-0 z-10"
          ),
          children: F.getHeaderGroups().map((L) => /* @__PURE__ */ _("tr", { children: L.headers.map((M) => /* @__PURE__ */ _(
            "th",
            {
              className: "h-12 px-4 text-left align-middle font-medium text-slate-700 dark:text-slate-300",
              children: M.isPlaceholder ? null : qa(M.column.columnDef.header, M.getContext())
            },
            M.id
          )) }, L.id))
        }
      ),
      /* @__PURE__ */ _("tbody", { className: "divide-y divide-slate-200 dark:divide-slate-800", children: h ? /* @__PURE__ */ _("tr", { children: /* @__PURE__ */ _("td", { colSpan: e.length, className: "text-muted-foreground h-24 text-center", children: "Loading..." }) }) : (U = F.getRowModel().rows) != null && U.length ? F.getRowModel().rows.map((L) => /* @__PURE__ */ _(
        "tr",
        {
          "data-state": L.getIsSelected() && "selected",
          className: P(
            "border-b border-slate-200 bg-white transition-colors hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-900/50",
            L.getIsSelected() && "bg-slate-50 dark:bg-slate-900",
            g && "cursor-pointer",
            p == null ? void 0 : p(L.original)
          ),
          onClick: () => g == null ? void 0 : g(L.original),
          children: L.getVisibleCells().map((M) => /* @__PURE__ */ _("td", { className: "px-4 py-3 align-middle", children: qa(M.column.columnDef.cell, M.getContext()) }, M.id))
        },
        L.id
      )) : /* @__PURE__ */ _("tr", { children: /* @__PURE__ */ _("td", { colSpan: e.length, className: "text-muted-foreground h-24 text-center", children: c }) }) })
    ] }) }) }),
    o && /* @__PURE__ */ D("div", { className: "flex items-center justify-between px-2", children: [
      /* @__PURE__ */ _("div", { className: "flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300", children: a && /* @__PURE__ */ D("div", { className: "text-muted-foreground flex-1 text-sm", children: [
        F.getFilteredSelectedRowModel().rows.length,
        " of",
        " ",
        F.getFilteredRowModel().rows.length,
        " row(s) selected."
      ] }) }),
      /* @__PURE__ */ D("div", { className: "flex items-center gap-6", children: [
        /* @__PURE__ */ D("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ _("span", { className: "text-sm text-slate-700 dark:text-slate-300", children: "Rows per page" }),
          /* @__PURE__ */ _(
            "select",
            {
              value: F.getState().pagination.pageSize.toString(),
              onChange: (L) => {
                F.setPageSize(Number(L.target.value));
              },
              className: "h-8 w-[70px] rounded-md border border-slate-300 bg-white text-sm dark:border-slate-700 dark:bg-slate-950",
              children: s.map((L) => /* @__PURE__ */ _("option", { value: L, children: L }, L))
            }
          )
        ] }),
        /* @__PURE__ */ D("div", { className: "flex items-center gap-1 text-sm font-medium text-slate-700 dark:text-slate-300", children: [
          "Page ",
          F.getState().pagination.pageIndex + 1,
          " of ",
          F.getPageCount()
        ] }),
        /* @__PURE__ */ D("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ _(
            ce,
            {
              variant: "outline",
              size: "sm",
              onClick: () => {
                F.previousPage();
              },
              disabled: !F.getCanPreviousPage(),
              children: "Previous"
            }
          ),
          /* @__PURE__ */ _(
            ce,
            {
              variant: "outline",
              size: "sm",
              onClick: () => {
                F.nextPage();
              },
              disabled: !F.getCanNextPage(),
              children: "Next"
            }
          )
        ] })
      ] })
    ] })
  ] });
}
function LS(e) {
  return ({ column: n }) => /* @__PURE__ */ D(
    ce,
    {
      variant: "ghost",
      onClick: () => {
        n.toggleSorting(n.getIsSorted() === "asc");
      },
      className: "-ml-4 h-8",
      children: [
        e,
        n.getIsSorted() === "asc" ? /* @__PURE__ */ _(Yu, { className: "ml-2 h-4 w-4" }) : n.getIsSorted() === "desc" ? /* @__PURE__ */ _(Os, { className: "ml-2 h-4 w-4" }) : /* @__PURE__ */ _(Wg, { className: "ml-2 h-4 w-4 opacity-50" })
      ]
    }
  );
}
function DS() {
  return {
    id: "select",
    header: ({ table: e }) => /* @__PURE__ */ _(
      "input",
      {
        type: "checkbox",
        checked: e.getIsAllPageRowsSelected(),
        onChange: (n) => {
          e.toggleAllPageRowsSelected(n.target.checked);
        },
        "aria-label": "Select all",
        className: "h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-slate-700"
      }
    ),
    cell: ({ row: e }) => /* @__PURE__ */ _(
      "input",
      {
        type: "checkbox",
        checked: e.getIsSelected(),
        onChange: (n) => {
          e.toggleSelected(n.target.checked);
        },
        "aria-label": "Select row",
        className: "h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-slate-700"
      }
    ),
    enableSorting: !1,
    enableHiding: !1
  };
}
function zS({
  icon: e,
  title: n,
  description: t,
  action: r,
  secondaryAction: o,
  className: i,
  size: s = "md",
  children: a
}) {
  const u = {
    sm: {
      container: "py-8",
      icon: "mb-3",
      title: "text-base",
      description: "text-xs mt-1",
      actions: "mt-3 gap-2"
    },
    md: {
      container: "py-12",
      icon: "mb-4",
      title: "text-lg",
      description: "text-sm mt-2",
      actions: "mt-4 gap-3"
    },
    lg: {
      container: "py-16",
      icon: "mb-6",
      title: "text-xl",
      description: "text-base mt-3",
      actions: "mt-6 gap-3"
    }
  }[s];
  return /* @__PURE__ */ _(
    "div",
    {
      className: P(
        "flex items-center justify-center text-slate-500 dark:text-slate-400",
        u.container,
        i
      ),
      role: "status",
      "aria-live": "polite",
      children: /* @__PURE__ */ D("div", { className: "max-w-md text-center", children: [
        e && /* @__PURE__ */ _(
          "div",
          {
            className: P(
              "flex items-center justify-center text-slate-300 dark:text-slate-600",
              u.icon
            ),
            "aria-hidden": "true",
            children: e
          }
        ),
        /* @__PURE__ */ _("h3", { className: P("font-medium text-slate-700 dark:text-slate-300", u.title), children: n }),
        t && /* @__PURE__ */ _("p", { className: P("text-slate-600 dark:text-slate-400", u.description), children: t }),
        a && /* @__PURE__ */ _("div", { className: P(u.description), children: a }),
        (r || o) && /* @__PURE__ */ D("div", { className: P("flex items-center justify-center", u.actions), children: [
          r && /* @__PURE__ */ D(ce, { onClick: r.onClick, variant: r.variant || "default", children: [
            r.icon && /* @__PURE__ */ _("span", { className: "mr-2", children: r.icon }),
            r.label
          ] }),
          o && /* @__PURE__ */ _(
            ce,
            {
              onClick: o.onClick,
              variant: o.variant || "outline",
              children: o.label
            }
          )
        ] })
      ] })
    }
  );
}
function BS({
  error: e,
  onRetry: n,
  variant: t = "default",
  className: r,
  compact: o = !1
}) {
  const i = e instanceof Error ? e.message : e, s = () => {
    switch (t) {
      case "network":
        return ip;
      case "auth":
        return Jg;
      case "notfound":
        return hr;
      // Or a specific not-found icon if available
      default:
        return hr;
    }
  }, a = () => {
    switch (t) {
      case "network":
        return "Connection Error";
      case "auth":
        return "Authentication Required";
      case "notfound":
        return "Not Found";
      default:
        return "Something Went Wrong";
    }
  }, l = () => {
    switch (t) {
      case "network":
        return "Unable to connect to the server. Please check your internet connection and try again.";
      case "auth":
        return "You need to be logged in to access this resource. Please log in and try again.";
      case "notfound":
        return "The resource you're looking for could not be found. It may have been moved or deleted.";
      default:
        return "An unexpected error occurred. Please try again or contact support if the problem persists.";
    }
  }, u = s();
  return o ? /* @__PURE__ */ D(
    "div",
    {
      className: P(
        "flex items-center justify-between rounded-lg border p-4",
        "bg-destructive/5 dark:bg-destructive/10 border-destructive/20 dark:border-destructive/30",
        r
      ),
      role: "alert",
      "aria-live": "polite",
      children: [
        /* @__PURE__ */ D("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ _(u, { className: "text-destructive h-5 w-5 flex-shrink-0", "aria-hidden": "true" }),
          /* @__PURE__ */ D("div", { children: [
            /* @__PURE__ */ _("p", { className: "text-destructive-foreground text-sm font-medium", children: a() }),
            /* @__PURE__ */ _("p", { className: "text-destructive-foreground/80 mt-0.5 text-sm", children: i || l() })
          ] })
        ] }),
        n && /* @__PURE__ */ D(
          ce,
          {
            variant: "ghost",
            size: "sm",
            onClick: n,
            className: "hover:bg-destructive/10 text-destructive hover:text-destructive ml-4",
            "aria-label": "Retry operation",
            children: [
              /* @__PURE__ */ _(Oa, { className: "mr-2 h-4 w-4" }),
              "Retry"
            ]
          }
        )
      ]
    }
  ) : /* @__PURE__ */ D(
    "div",
    {
      className: P(
        "bg-background flex flex-col items-center justify-center rounded-lg border px-4 py-12",
        "border-border/60",
        r
      ),
      role: "alert",
      "aria-live": "polite",
      children: [
        /* @__PURE__ */ _("div", { className: "bg-destructive/10 mb-4 flex h-16 w-16 items-center justify-center rounded-full", children: /* @__PURE__ */ _(u, { className: "text-destructive h-8 w-8", "aria-hidden": "true" }) }),
        /* @__PURE__ */ _("h3", { className: "text-foreground mb-2 text-lg font-semibold", children: a() }),
        /* @__PURE__ */ _("p", { className: "text-muted-foreground mb-4 max-w-md text-center text-sm", children: l() }),
        i && /* @__PURE__ */ _("div", { className: "bg-muted/50 border-border/50 mb-6 w-full max-w-md rounded-md border p-3", children: /* @__PURE__ */ _("p", { className: "text-muted-foreground text-center font-mono text-xs break-words", children: i }) }),
        n && /* @__PURE__ */ D(
          ce,
          {
            variant: "default",
            onClick: n,
            className: "min-w-[120px]",
            "aria-label": "Retry operation",
            children: [
              /* @__PURE__ */ _(Oa, { className: "mr-2 h-4 w-4" }),
              "Try Again"
            ]
          }
        )
      ]
    }
  );
}
const Yb = te(
  "relative overflow-hidden transition-all duration-200 hover:shadow-md",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground border-border",
        emerald: "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800",
        blue: "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800",
        purple: "bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800",
        amber: "bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800",
        rose: "bg-rose-50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-800"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), Xb = te("flex items-center justify-center rounded-full p-2", {
  variants: {
    variant: {
      default: "bg-muted text-muted-foreground",
      emerald: "text-emerald-600 dark:text-emerald-400 bg-white/50 dark:bg-emerald-900/30",
      blue: "text-blue-600 dark:text-blue-400 bg-white/50 dark:bg-blue-900/30",
      purple: "text-purple-600 dark:text-purple-400 bg-white/50 dark:bg-purple-900/30",
      amber: "text-amber-600 dark:text-amber-400 bg-white/50 dark:bg-amber-900/30",
      rose: "text-rose-600 dark:text-rose-400 bg-white/50 dark:bg-rose-900/30"
    }
  },
  defaultVariants: {
    variant: "default"
  }
}), Qb = te("text-2xl font-bold tracking-tight", {
  variants: {
    variant: {
      default: "text-foreground",
      emerald: "text-emerald-900 dark:text-emerald-100",
      blue: "text-blue-900 dark:text-blue-100",
      purple: "text-purple-900 dark:text-purple-100",
      amber: "text-amber-900 dark:text-amber-100",
      rose: "text-rose-900 dark:text-rose-100"
    }
  },
  defaultVariants: {
    variant: "default"
  }
}), ev = te("text-sm font-medium", {
  variants: {
    variant: {
      default: "text-muted-foreground",
      emerald: "text-emerald-600 dark:text-emerald-400",
      blue: "text-blue-600 dark:text-blue-400",
      purple: "text-purple-600 dark:text-purple-400",
      amber: "text-amber-600 dark:text-amber-400",
      rose: "text-rose-600 dark:text-rose-400"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
function VS({
  className: e,
  variant: n,
  icon: t,
  value: r,
  label: o,
  trend: i,
  ...s
}) {
  return /* @__PURE__ */ _(uc, { className: P(Yb({ variant: n, className: e })), ...s, children: /* @__PURE__ */ D("div", { className: "flex items-start justify-between space-x-4 p-6", children: [
    /* @__PURE__ */ D("div", { className: "space-y-1", children: [
      /* @__PURE__ */ _("p", { className: P(Qb({ variant: n })), children: r }),
      /* @__PURE__ */ _("p", { className: P(ev({ variant: n })), children: o }),
      i && /* @__PURE__ */ D("div", { className: "mt-2 flex items-center space-x-1 text-xs", children: [
        /* @__PURE__ */ _(
          "span",
          {
            className: P(
              "font-medium",
              i.direction === "up" && "text-emerald-600 dark:text-emerald-400",
              i.direction === "down" && "text-rose-600 dark:text-rose-400",
              i.direction === "neutral" && "text-slate-500"
            ),
            children: i.value
          }
        ),
        i.label && /* @__PURE__ */ _("span", { className: "text-slate-500 dark:text-slate-400", children: i.label })
      ] })
    ] }),
    t && /* @__PURE__ */ _("div", { className: P(Xb({ variant: n })), children: /* @__PURE__ */ _("div", { className: "h-6 w-6", children: t }) })
  ] }) });
}
const Za = te("h-2.5 w-2.5 rounded-full", {
  variants: {
    status: {
      online: "bg-emerald-500",
      offline: "bg-slate-400",
      connecting: "bg-amber-500",
      error: "bg-rose-500"
    },
    animate: {
      true: "animate-pulse",
      false: ""
    }
  },
  defaultVariants: {
    status: "offline",
    animate: !1
  }
});
function jS({
  status: e,
  label: n,
  pulse: t,
  asBadge: r = !1,
  showLabel: o = !0,
  className: i,
  ...s
}) {
  const l = n || {
    online: "Online",
    offline: "Offline",
    connecting: "Connecting...",
    error: "Error"
  }[e], u = t ?? (e === "online" || e === "connecting");
  return r ? /* @__PURE__ */ D(cc, { variant: {
    online: "success",
    offline: "secondary",
    connecting: "warning",
    error: "destructive"
  }[e], className: P("gap-1.5", i), ...s, children: [
    /* @__PURE__ */ _(
      "span",
      {
        className: P(Za({ status: e, animate: u }), "h-2 w-2"),
        "aria-hidden": "true"
      }
    ),
    o && /* @__PURE__ */ _("span", { children: l })
  ] }) : /* @__PURE__ */ D("div", { className: P("flex items-center gap-2 text-sm", i), ...s, children: [
    /* @__PURE__ */ _(
      "span",
      {
        className: P(Za({ status: e, animate: u })),
        "aria-hidden": "true"
      }
    ),
    o && /* @__PURE__ */ _(
      "span",
      {
        className: P(
          "font-medium",
          e === "online" && "text-emerald-700 dark:text-emerald-400",
          e === "offline" && "text-slate-600 dark:text-slate-400",
          e === "connecting" && "text-amber-700 dark:text-amber-400",
          e === "error" && "text-rose-700 dark:text-rose-400"
        ),
        children: l
      }
    )
  ] });
}
function US({
  content: e,
  children: n,
  side: t = "top",
  disabled: r = !1,
  interactive: o = !1,
  className: i
}) {
  const [s, a] = E.useState(!1), [l, u] = E.useState({ top: 0, left: 0 }), c = E.useRef(null), d = E.useRef(null), f = E.useRef(null), p = () => {
    f.current && (clearTimeout(f.current), f.current = null), a(!0);
  }, g = () => {
    o ? f.current = setTimeout(() => {
      a(!1);
    }, 100) : a(!1);
  };
  return E.useEffect(() => () => {
    f.current && clearTimeout(f.current);
  }, []), E.useLayoutEffect(() => {
    if (s && c.current && d.current) {
      const h = c.current.getBoundingClientRect(), m = d.current.getBoundingClientRect();
      let v = 0, y = 0;
      switch (t) {
        case "right":
          v = h.top + h.height / 2 - m.height / 2, y = h.right + 8;
          break;
        case "left":
          v = h.top + h.height / 2 - m.height / 2, y = h.left - m.width - 8;
          break;
        case "top":
          v = h.top - m.height - 8, y = h.left + h.width / 2 - m.width / 2;
          break;
        case "bottom":
          v = h.bottom + 8, y = h.left + h.width / 2 - m.width / 2;
          break;
      }
      v += window.scrollY, y += window.scrollX, u({ top: v, left: y });
    }
  }, [s, t]), r ? n : /* @__PURE__ */ D(Xe, { children: [
    /* @__PURE__ */ _(
      "div",
      {
        ref: c,
        onMouseEnter: p,
        onMouseLeave: g,
        onFocus: p,
        onBlur: g,
        className: "inline-block",
        "data-testid": "tooltip-trigger",
        children: n
      }
    ),
    s && /* @__PURE__ */ _(
      "div",
      {
        ref: d,
        role: "tooltip",
        className: P(
          "bg-popover text-popover-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 fixed z-50 rounded-md border px-3 py-1.5 text-sm shadow-md",
          o ? "pointer-events-auto" : "pointer-events-none",
          i
        ),
        style: {
          top: `${l.top}px`,
          left: `${l.left}px`
        },
        onMouseEnter: o ? p : void 0,
        onMouseLeave: o ? g : void 0,
        children: e
      }
    )
  ] });
}
function GS({
  open: e,
  onOpenChange: n,
  onConfirm: t,
  title: r,
  message: o,
  confirmText: i = "Confirm",
  cancelText: s = "Cancel",
  variant: a = "danger"
}) {
  const l = () => {
    t(), n(!1);
  }, c = {
    danger: {
      icon: hr,
      iconClassName: "text-destructive",
      iconBgClassName: "bg-destructive/10",
      buttonVariant: "destructive",
      buttonClassName: void 0
    },
    warning: {
      icon: hr,
      iconClassName: "text-yellow-600 dark:text-yellow-400",
      iconBgClassName: "bg-yellow-100 dark:bg-yellow-900/30",
      buttonVariant: "default",
      buttonClassName: "bg-yellow-600 hover:bg-yellow-700 dark:bg-yellow-600 dark:hover:bg-yellow-700"
    },
    info: {
      icon: Gi,
      iconClassName: "text-blue-600 dark:text-blue-400",
      iconBgClassName: "bg-blue-100 dark:bg-blue-900/30",
      buttonVariant: "default",
      buttonClassName: "bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
    }
  }[a], d = c.icon;
  return /* @__PURE__ */ _(Rh, { open: e, onOpenChange: n, children: /* @__PURE__ */ D(vc, { children: [
    /* @__PURE__ */ _(xc, { children: /* @__PURE__ */ D("div", { className: "flex items-start gap-4", children: [
      /* @__PURE__ */ _(
        "div",
        {
          className: P(
            "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full",
            c.iconBgClassName
          ),
          children: /* @__PURE__ */ _(d, { className: P("h-6 w-6", c.iconClassName) })
        }
      ),
      /* @__PURE__ */ D("div", { className: "flex-1", children: [
        /* @__PURE__ */ _(wc, { children: r }),
        /* @__PURE__ */ _(Sc, { className: "mt-2", children: o })
      ] })
    ] }) }),
    /* @__PURE__ */ D(_c, { children: [
      /* @__PURE__ */ _(ce, { variant: "outline", onClick: () => {
        n(!1);
      }, children: s }),
      /* @__PURE__ */ _(
        ce,
        {
          variant: c.buttonVariant,
          onClick: l,
          className: c.buttonClassName,
          children: i
        }
      )
    ] })
  ] }) });
}
const hd = Ku(null);
function tv(e, n) {
  return { getTheme: function() {
    return n ?? null;
  } };
}
function ft() {
  const e = zg(hd);
  return e == null && (function(n, ...t) {
    const r = new URL("https://lexical.dev/docs/error"), o = new URLSearchParams();
    o.append("code", n);
    for (const i of t) o.append("v", i);
    throw r.search = o.toString(), Error(`Minified Lexical error #${n}; visit ${r.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
  })(8), e;
}
function $(e, ...n) {
  const t = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", e);
  for (const o of n) r.append("v", o);
  throw t.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
function md(e, ...n) {
  const t = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", e);
  for (const o of n) r.append("v", o);
  t.search = r.toString(), console.warn(`Minified Lexical warning #${e}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
const nt = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, nv = nt && "documentMode" in document ? document.documentMode : null, qe = nt && /Mac|iPod|iPhone|iPad/.test(navigator.platform), nn = nt && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent), go = !(!nt || !("InputEvent" in window) || nv) && "getTargetRanges" in new window.InputEvent("input"), Nr = nt && /Version\/[\d.]+.*Safari/.test(navigator.userAgent), jn = nt && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, rv = nt && /Android/.test(navigator.userAgent), yd = nt && /^(?=.*Chrome).*/i.test(navigator.userAgent), Ja = nt && rv && yd, Rr = nt && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && qe && !yd;
function bd(...e) {
  const n = [];
  for (const t of e) if (t && typeof t == "string") for (const [r] of t.matchAll(/\S+/g)) n.push(r);
  return n;
}
const ov = 0, iv = 1, sv = 2, vd = 128, av = 1, lv = 2, uv = 3, cv = 4, dv = 5, fv = 6, Go = Nr || jn || Rr ? " " : "​", Bt = `

`, gv = nn ? " " : Go, rn = { bold: 1, capitalize: 1024, code: 16, highlight: vd, italic: 2, lowercase: 256, strikethrough: 4, subscript: 32, superscript: 64, underline: 8, uppercase: 512 }, pv = { directionless: 1, unmergeable: 2 }, Ya = { center: 2, end: 6, justify: 4, left: 1, right: 3, start: 5 }, hv = { [lv]: "center", [fv]: "end", [cv]: "justify", [av]: "left", [uv]: "right", [dv]: "start" }, mv = { normal: 0, segmented: 2, token: 1 }, yv = { [ov]: "normal", [sv]: "segmented", [iv]: "token" }, Xa = "$config";
function xd(e, n, t, r, o, i) {
  let s = e.getFirstChild();
  for (; s !== null; ) {
    const a = s.__key;
    s.__parent === n && (T(s) && xd(s, a, t, r, o, i), t.has(a) || i.delete(a), o.push(a)), s = s.getNextSibling();
  }
}
let Qi = !1, Us = 0;
function bv(e) {
  Us = e.timeStamp;
}
function vi(e, n, t) {
  const r = e.nodeName === "BR", o = n.__lexicalLineBreak;
  return o && (e === o || r && e.previousSibling === o) || r && Yo(e, t) !== void 0;
}
function vv(e, n, t) {
  const r = rt(Ge(t));
  let o = null, i = null;
  r !== null && r.anchorNode === e && (o = r.anchorOffset, i = r.focusOffset);
  const s = e.nodeValue;
  s !== null && ua(n, s, o, i, !1);
}
function xv(e, n, t) {
  if (z(e)) {
    const r = e.anchor.getNode();
    if (r.is(t) && e.format !== r.getFormat()) return !1;
  }
  return Nt(n) && t.isAttached();
}
function _v(e, n, t, r) {
  for (let o = e; o && !A0(o); o = Or(o)) {
    const i = Yo(o, n);
    if (i !== void 0) {
      const s = we(i, t);
      if (s) return ne(s) || !xe(o) ? void 0 : [o, s];
    } else if (o === r) return [r, Ef(t)];
  }
}
function _d(e, n, t) {
  Qi = !0;
  const r = performance.now() - Us > 100;
  try {
    lt(e, () => {
      const o = j() || (function(f) {
        return f.getEditorState().read(() => {
          const p = j();
          return p !== null ? p.clone() : null;
        });
      })(e), i = /* @__PURE__ */ new Map(), s = e.getRootElement(), a = e._editorState, l = e._blockCursorElement;
      let u = !1, c = "";
      for (let f = 0; f < n.length; f++) {
        const p = n[f], g = p.type, h = p.target, m = _v(h, e, a, s);
        if (!m) continue;
        const [v, y] = m;
        if (g === "characterData") r && B(y) && Nt(h) && xv(o, h, y) && vv(h, y, e);
        else if (g === "childList") {
          u = !0;
          const b = p.addedNodes;
          for (let S = 0; S < b.length; S++) {
            const k = b[S], N = Cf(k), C = k.parentNode;
            if (C != null && k !== l && N === null && !vi(k, C, e)) {
              if (nn) {
                const R = (xe(k) ? k.innerText : null) || k.nodeValue;
                R && (c += R);
              }
              C.removeChild(k);
            }
          }
          const x = p.removedNodes, w = x.length;
          if (w > 0) {
            let S = 0;
            for (let k = 0; k < w; k++) {
              const N = x[k];
              (vi(N, h, e) || l === N) && (h.appendChild(N), S++);
            }
            w !== S && i.set(v, y);
          }
        }
      }
      if (i.size > 0) for (const [f, p] of i) p.reconcileObservedMutation(f, e);
      const d = t.takeRecords();
      if (d.length > 0) {
        for (let f = 0; f < d.length; f++) {
          const p = d[f], g = p.addedNodes, h = p.target;
          for (let m = 0; m < g.length; m++) {
            const v = g[m], y = v.parentNode;
            y == null || v.nodeName !== "BR" || vi(v, h, e) || y.removeChild(v);
          }
        }
        t.takeRecords();
      }
      o !== null && (u && $e(o), nn && Tf(e) && o.insertRawText(c));
    });
  } finally {
    Qi = !1;
  }
}
function wd(e) {
  const n = e._observer;
  n !== null && _d(e, n.takeRecords(), n);
}
function Sd(e) {
  (function(n) {
    Us === 0 && Ge(n).addEventListener("textInput", bv, !0);
  })(e), e._observer = new MutationObserver((n, t) => {
    _d(e, n, t);
  });
}
let wv = class {
  constructor(n, t) {
    A(this, "key");
    A(this, "parse");
    A(this, "unparse");
    A(this, "isEqual");
    A(this, "defaultValue");
    this.key = n, this.parse = t.parse.bind(t), this.unparse = (t.unparse || Ev).bind(t), this.isEqual = (t.isEqual || Object.is).bind(t), this.defaultValue = this.parse(void 0);
  }
};
function Sv(e, n) {
  return new wv(e, n);
}
function Cd(e, n, t = "latest") {
  const r = (t === "latest" ? e.getLatest() : e).__state;
  return r ? r.getValue(n) : n.defaultValue;
}
function xi(e, n, t) {
  let r;
  if (ke(), typeof t == "function") {
    const i = e.getLatest(), s = Cd(i, n);
    if (r = t(s), n.isEqual(s, r)) return i;
  } else r = t;
  const o = e.getWritable();
  return Ed(o).updateFromKnown(n, r), o;
}
function Cv(e) {
  const n = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Set();
  for (let r = typeof e == "function" ? e : e.replace; r.prototype && r.prototype.getType !== void 0; r = Object.getPrototypeOf(r)) {
    const { ownNodeConfig: o } = ei(r);
    if (o && o.stateConfigs) for (const i of o.stateConfigs) {
      let s;
      "stateConfig" in i ? (s = i.stateConfig, i.flat && t.add(s.key)) : s = i, n.set(s.key, s);
    }
  }
  return { flatKeys: t, sharedConfigMap: n };
}
let kv = class kd {
  constructor(n, t, r = void 0, o = /* @__PURE__ */ new Map(), i = void 0) {
    A(this, "node");
    A(this, "knownState");
    A(this, "unknownState");
    A(this, "sharedNodeState");
    A(this, "size");
    this.node = n, this.sharedNodeState = t, this.unknownState = r, this.knownState = o;
    const { sharedConfigMap: s } = this.sharedNodeState, a = i !== void 0 ? i : (function(l, u, c) {
      let d = c.size;
      if (u) for (const f in u) {
        const p = l.get(f);
        p && c.has(p) || d++;
      }
      return d;
    })(s, r, o);
    this.size = a;
  }
  getValue(n) {
    const t = this.knownState.get(n);
    if (t !== void 0) return t;
    this.sharedNodeState.sharedConfigMap.set(n.key, n);
    let r = n.defaultValue;
    if (this.unknownState && n.key in this.unknownState) {
      const o = this.unknownState[n.key];
      o !== void 0 && (r = n.parse(o)), this.updateFromKnown(n, r);
    }
    return r;
  }
  getInternalState() {
    return [this.unknownState, this.knownState];
  }
  toJSON() {
    const n = { ...this.unknownState }, t = {};
    for (const [r, o] of this.knownState) r.isEqual(o, r.defaultValue) ? delete n[r.key] : n[r.key] = r.unparse(o);
    for (const r of this.sharedNodeState.flatKeys) r in n && (t[r] = n[r], delete n[r]);
    return Qa(n) && (t.$ = n), t;
  }
  getWritable(n) {
    if (this.node === n) return this;
    const { sharedNodeState: t, unknownState: r } = this, o = new Map(this.knownState);
    return new kd(n, t, (function(i, s, a) {
      let l;
      if (a) for (const [u, c] of Object.entries(a)) {
        const d = i.get(u);
        d ? s.has(d) || s.set(d, d.parse(c)) : (l = l || {}, l[u] = c);
      }
      return l;
    })(t.sharedConfigMap, o, r), o, this.size);
  }
  updateFromKnown(n, t) {
    const r = n.key;
    this.sharedNodeState.sharedConfigMap.set(r, n);
    const { knownState: o, unknownState: i } = this;
    o.has(n) || i && r in i || (i && (delete i[r], this.unknownState = Qa(i)), this.size++), o.set(n, t);
  }
  updateFromUnknown(n, t) {
    const r = this.sharedNodeState.sharedConfigMap.get(n);
    r ? this.updateFromKnown(r, r.parse(t)) : (this.unknownState = this.unknownState || {}, n in this.unknownState || this.size++, this.unknownState[n] = t);
  }
  updateFromJSON(n) {
    const { knownState: t } = this;
    for (const r of t.keys()) t.set(r, r.defaultValue);
    if (this.size = t.size, this.unknownState = void 0, n) for (const [r, o] of Object.entries(n)) this.updateFromUnknown(r, o);
  }
};
function Ed(e) {
  const n = e.getWritable(), t = n.__state ? n.__state.getWritable(n) : new kv(n, Nd(n));
  return n.__state = t, t;
}
function Nd(e) {
  return e.__state ? e.__state.sharedNodeState : xf(Qo(), e.getType()).sharedNodeState;
}
function Qa(e) {
  if (e) for (const n in e) return e;
}
function Ev(e) {
  return e;
}
function el(e, n, t) {
  for (const [r, o] of n.knownState) {
    if (e.has(r.key)) continue;
    e.add(r.key);
    const i = t ? t.getValue(r) : r.defaultValue;
    if (i !== o && !r.isEqual(i, o)) return !0;
  }
  return !1;
}
function tl(e, n, t) {
  const { unknownState: r } = n, o = t ? t.unknownState : void 0;
  if (r) {
    for (const [i, s] of Object.entries(r))
      if (!e.has(i) && (e.add(i), s !== (o ? o[i] : void 0)))
        return !0;
  }
  return !1;
}
function nl(e, n) {
  const t = e.__state;
  return t && t.node === e ? t.getWritable(n) : t;
}
function rl(e, n) {
  const t = e.__mode, r = e.__format, o = e.__style, i = n.__mode, s = n.__format, a = n.__style, l = e.__state, u = n.__state;
  return (t === null || t === i) && (r === null || r === s) && (o === null || o === a) && (e.__state === null || l === u || (function(c, d) {
    if (c === d) return !0;
    if (c && d && c.size !== d.size) return !1;
    const f = /* @__PURE__ */ new Set();
    return !(c && el(f, c, d) || d && el(f, d, c) || c && tl(f, c, d) || d && tl(f, d, c));
  })(l, u));
}
function ol(e, n) {
  const t = e.mergeWithSibling(n), r = ae()._normalizedNodes;
  return r.add(e.__key), r.add(n.__key), t;
}
function il(e) {
  let n, t, r = e;
  if (r.__text !== "" || !r.isSimpleText() || r.isUnmergeable()) {
    for (; (n = r.getPreviousSibling()) !== null && B(n) && n.isSimpleText() && !n.isUnmergeable(); ) {
      if (n.__text !== "") {
        if (rl(n, r)) {
          r = ol(n, r);
          break;
        }
        break;
      }
      n.remove();
    }
    for (; (t = r.getNextSibling()) !== null && B(t) && t.isSimpleText() && !t.isUnmergeable(); ) {
      if (t.__text !== "") {
        if (rl(r, t)) {
          r = ol(r, t);
          break;
        }
        break;
      }
      t.remove();
    }
  } else r.remove();
}
function po(e) {
  return sl(e.anchor), sl(e.focus), e;
}
function sl(e) {
  for (; e.type === "element"; ) {
    const n = e.getNode(), t = e.offset;
    let r, o;
    if (t === n.getChildrenSize() ? (r = n.getChildAtIndex(t - 1), o = !0) : (r = n.getChildAtIndex(t), o = !1), B(r)) {
      e.set(r.__key, o ? r.getTextContentSize() : 0, "text", !0);
      break;
    }
    if (!T(r)) break;
    e.set(r.__key, o ? r.getChildrenSize() : 0, "element", !0);
  }
}
let on, Me, yr, Ho, es, ts, sn, Je, ns, br, _e = "", ot = null, Wt = null, vt = "", _n = !1, ho = !1;
function mo(e, n) {
  const t = sn.get(e);
  if (n !== null) {
    const r = ss(e);
    r.parentNode === n && n.removeChild(r);
  }
  if (Je.has(e) || Me._keyToDOMMap.delete(e), T(t)) {
    const r = bo(t, sn);
    rs(r, 0, r.length - 1, null);
  }
  t !== void 0 && ca(br, yr, Ho, t, "destroyed");
}
function rs(e, n, t, r) {
  let o = n;
  for (; o <= t; ++o) {
    const i = e[o];
    i !== void 0 && mo(i, r);
  }
}
function Ht(e, n) {
  e.setProperty("text-align", n);
}
const Nv = "40px";
function Rd(e, n) {
  const t = on.theme.indent;
  if (typeof t == "string") {
    const o = e.classList.contains(t);
    n > 0 && !o ? e.classList.add(t) : n < 1 && o && e.classList.remove(t);
  }
  const r = getComputedStyle(e).getPropertyValue("--lexical-indent-base-value") || Nv;
  e.style.setProperty("padding-inline-start", n === 0 ? "" : `calc(${n} * ${r})`);
}
function Ad(e, n) {
  const t = e.style;
  n === 0 ? Ht(t, "") : n === 1 ? Ht(t, "left") : n === 2 ? Ht(t, "center") : n === 3 ? Ht(t, "right") : n === 4 ? Ht(t, "justify") : n === 5 ? Ht(t, "start") : n === 6 && Ht(t, "end");
}
function os(e, n) {
  const t = (function(r) {
    const o = r.__dir;
    if (o !== null) return o;
    if (be(r)) return null;
    const i = r.getParentOrThrow();
    return be(i) && i.__dir === null ? "auto" : null;
  })(n);
  t !== null ? e.dir = t : e.removeAttribute("dir");
}
function yo(e, n) {
  const t = Je.get(e);
  t === void 0 && $(60);
  const r = t.createDOM(on, Me);
  if ((function(o, i, s) {
    const a = s._keyToDOMMap;
    (function(l, u, c) {
      const d = `__lexicalKey_${u._key}`;
      l[d] = c;
    })(i, s, o), a.set(o, i);
  })(e, r, Me), B(t) ? r.setAttribute("data-lexical-text", "true") : ne(t) && r.setAttribute("data-lexical-decorator", "true"), T(t)) {
    const o = t.__indent, i = t.__size;
    if (os(r, t), o !== 0 && Rd(r, o), i !== 0) {
      const a = i - 1;
      is(bo(t, Je), t, 0, a, t.getDOMSlot(r));
    }
    const s = t.__format;
    s !== 0 && Ad(r, s), t.isInline() || Td(null, t, r), Xo(t) && (_e += Bt, vt += Bt);
  } else {
    const o = t.getTextContent();
    if (ne(t)) {
      const i = t.decorate(Me, on);
      i !== null && Fd(e, i), r.contentEditable = "false";
    }
    _e += o, vt += o;
  }
  return n !== null && n.insertChild(r), ca(br, yr, Ho, t, "created"), r;
}
function is(e, n, t, r, o) {
  const i = _e;
  _e = "";
  let s = t;
  for (; s <= r; ++s) {
    yo(e[s], o);
    const a = Je.get(e[s]);
    a !== null && B(a) && ot === null && (ot = a.getFormat(), Wt = a.getStyle());
  }
  Xo(n) && (_e += Bt), o.element.__lexicalTextContent = _e, _e = i + _e;
}
function al(e, n) {
  if (e) {
    const t = e.__last;
    if (t) {
      const r = n.get(t);
      if (r) return Xt(r) ? "line-break" : ne(r) && r.isInline() ? "decorator" : null;
    }
    return "empty";
  }
  return null;
}
function Td(e, n, t) {
  const r = al(e, sn), o = al(n, Je);
  r !== o && n.getDOMSlot(t).setManagedLineBreak(o);
}
function Rv(e, n, t) {
  var r;
  ot = null, Wt = null, (function(o, i, s) {
    const a = _e, l = o.__size, u = i.__size;
    _e = "";
    const c = s.element;
    if (l === 1 && u === 1) {
      const d = o.__first, f = i.__first;
      if (d === f) rr(d, c);
      else {
        const g = ss(d), h = yo(f, null);
        try {
          c.replaceChild(h, g);
        } catch (m) {
          if (typeof m == "object" && m != null) {
            const v = `${m.toString()} Parent: ${c.tagName}, new child: {tag: ${h.tagName} key: ${f}}, old child: {tag: ${g.tagName}, key: ${d}}.`;
            throw new Error(v);
          }
          throw m;
        }
        mo(d, null);
      }
      const p = Je.get(f);
      B(p) && ot === null && (ot = p.getFormat(), Wt = p.getStyle());
    } else {
      const d = bo(o, sn), f = bo(i, Je);
      if (d.length !== l && $(227), f.length !== u && $(228), l === 0) u !== 0 && is(f, i, 0, u - 1, s);
      else if (u === 0) {
        if (l !== 0) {
          const p = s.after == null && s.before == null && s.element.__lexicalLineBreak == null;
          rs(d, 0, l - 1, p ? null : c), p && (c.textContent = "");
        }
      } else (function(p, g, h, m, v, y) {
        const b = m - 1, x = v - 1;
        let w, S, k = y.getFirstChild(), N = 0, C = 0;
        for (; N <= b && C <= x; ) {
          const F = g[N], U = h[C];
          if (F === U) k = _i(rr(U, y.element)), N++, C++;
          else {
            w === void 0 && (w = new Set(g)), S === void 0 && (S = new Set(h));
            const M = S.has(F), G = w.has(U);
            if (M) if (G) {
              const H = ln(Me, U);
              H === k ? k = _i(rr(U, y.element)) : (y.withBefore(k).insertChild(H), rr(U, y.element)), N++, C++;
            } else yo(U, y.withBefore(k)), C++;
            else k = _i(ss(F)), mo(F, y.element), N++;
          }
          const L = Je.get(U);
          L !== null && B(L) && ot === null && (ot = L.getFormat(), Wt = L.getStyle());
        }
        const R = N > b, O = C > x;
        if (R && !O) {
          const F = h[x + 1], U = F === void 0 ? null : Me.getElementByKey(F);
          is(h, p, C, x, y.withBefore(U));
        } else O && !R && rs(g, N, b, y.element);
      })(i, d, f, l, u, s);
    }
    Xo(i) && (_e += Bt), c.__lexicalTextContent = _e, _e = a + _e;
  })(e, n, n.getDOMSlot(t)), r = n, ot == null || ot === r.__textFormat || ho || r.setTextFormat(ot), (function(o) {
    Wt == null || Wt === o.__textStyle || ho || o.setTextStyle(Wt);
  })(n);
}
function bo(e, n) {
  const t = [];
  let r = e.__first;
  for (; r !== null; ) {
    const o = n.get(r);
    o === void 0 && $(101), t.push(r), r = o.__next;
  }
  return t;
}
function rr(e, n) {
  const t = sn.get(e);
  let r = Je.get(e);
  t !== void 0 && r !== void 0 || $(61);
  const o = _n || ts.has(e) || es.has(e), i = ln(Me, e);
  if (t === r && !o) {
    if (T(t)) {
      const s = i.__lexicalTextContent;
      s !== void 0 && (_e += s, vt += s);
    } else {
      const s = t.getTextContent();
      vt += s, _e += s;
    }
    return i;
  }
  if (t !== r && o && ca(br, yr, Ho, r, "updated"), r.updateDOM(t, i, on)) {
    const s = yo(e, null);
    return n === null && $(62), n.replaceChild(s, i), mo(e, null), s;
  }
  if (T(t) && T(r)) {
    const s = r.__indent;
    (_n || s !== t.__indent) && Rd(i, s);
    const a = r.__format;
    if ((_n || a !== t.__format) && Ad(i, a), o && (Rv(t, r, i), be(r) || r.isInline() || Td(t, r, i)), Xo(r) && (_e += Bt, vt += Bt), (_n || r.__dir !== t.__dir) && (os(i, r), be(r) && !_n)) for (const l of r.getChildren()) T(l) && os(ln(Me, l.getKey()), l);
  } else {
    const s = r.getTextContent();
    if (ne(r)) {
      const a = r.decorate(Me, on);
      a !== null && Fd(e, a);
    }
    _e += s, vt += s;
  }
  if (!ho && be(r) && r.__cachedText !== vt) {
    const s = r.getWritable();
    s.__cachedText = vt, r = s;
  }
  return i;
}
function Fd(e, n) {
  let t = Me._pendingDecorators;
  const r = Me._decorators;
  if (t === null) {
    if (r[e] === n) return;
    t = kf(Me);
  }
  t[e] = n;
}
function _i(e) {
  let n = e.nextSibling;
  return n !== null && n === Me._blockCursorElement && (n = n.nextSibling), n;
}
function Av(e, n, t, r, o, i) {
  _e = "", vt = "", _n = r === 2, Me = t, on = t._config, yr = t._nodes, Ho = Me._listeners.mutation, es = o, ts = i, sn = e._nodeMap, Je = n._nodeMap, ho = n._readOnly, ns = new Map(t._keyToDOMMap);
  const s = /* @__PURE__ */ new Map();
  return br = s, rr("root", null), Me = void 0, yr = void 0, es = void 0, ts = void 0, sn = void 0, Je = void 0, on = void 0, ns = void 0, br = void 0, s;
}
function ss(e) {
  const n = ns.get(e);
  return n === void 0 && $(75, e), n;
}
function Z(e) {
  return { type: e };
}
const Id = Z("SELECTION_CHANGE_COMMAND"), Tv = Z("SELECTION_INSERT_CLIPBOARD_NODES_COMMAND"), Gs = Z("CLICK_COMMAND"), Od = Z("BEFORE_INPUT_COMMAND"), Md = Z("INPUT_COMMAND"), $d = Z("COMPOSITION_START_COMMAND"), Pd = Z("COMPOSITION_END_COMMAND"), Yt = Z("DELETE_CHARACTER_COMMAND"), Rn = Z("INSERT_LINE_BREAK_COMMAND"), vo = Z("INSERT_PARAGRAPH_COMMAND"), An = Z("CONTROLLED_TEXT_INSERTION_COMMAND"), Hs = Z("PASTE_COMMAND"), as = Z("REMOVE_TEXT_COMMAND"), vr = Z("DELETE_WORD_COMMAND"), xr = Z("DELETE_LINE_COMMAND"), It = Z("FORMAT_TEXT_COMMAND"), Ws = Z("UNDO_COMMAND"), Ks = Z("REDO_COMMAND"), Ld = Z("KEYDOWN_COMMAND"), Dd = Z("KEY_ARROW_RIGHT_COMMAND"), Fv = Z("MOVE_TO_END"), zd = Z("KEY_ARROW_LEFT_COMMAND"), Iv = Z("MOVE_TO_START"), Bd = Z("KEY_ARROW_UP_COMMAND"), Vd = Z("KEY_ARROW_DOWN_COMMAND"), xo = Z("KEY_ENTER_COMMAND"), jd = Z("KEY_SPACE_COMMAND"), Ud = Z("KEY_BACKSPACE_COMMAND"), Gd = Z("KEY_ESCAPE_COMMAND"), Hd = Z("KEY_DELETE_COMMAND"), Wd = Z("KEY_TAB_COMMAND"), Ov = Z("INSERT_TAB_COMMAND"), Mv = Z("INDENT_CONTENT_COMMAND"), ll = Z("OUTDENT_CONTENT_COMMAND"), Kd = Z("DROP_COMMAND"), $v = Z("FORMAT_ELEMENT_COMMAND"), qd = Z("DRAGSTART_COMMAND"), Zd = Z("DRAGOVER_COMMAND"), Pv = Z("DRAGEND_COMMAND"), Wo = Z("COPY_COMMAND"), qs = Z("CUT_COMMAND"), ls = Z("SELECT_ALL_COMMAND"), Lv = Z("CLEAR_EDITOR_COMMAND"), Dv = Z("CLEAR_HISTORY_COMMAND"), Ur = Z("CAN_REDO_COMMAND"), Gr = Z("CAN_UNDO_COMMAND"), zv = Z("FOCUS_COMMAND"), Bv = Z("BLUR_COMMAND"), Vv = Z("KEY_MODIFIER_COMMAND"), pt = Object.freeze({}), us = [["keydown", function(e, n) {
  _r = e.timeStamp, Jd = e.key, !n.isComposing() && V(n, Ld, e);
}], ["pointerdown", function(e, n) {
  const t = e.target, r = e.pointerType;
  Zn(t) && r !== "touch" && r !== "pen" && e.button === 0 && lt(n, () => {
    _f(t) || (fs = !0);
  });
}], ["compositionstart", function(e, n) {
  V(n, $d, e);
}], ["compositionend", function(e, n) {
  nn ? or = !0 : jn || !Nr && !Rr ? V(n, Pd, e) : (gs = !0, ps = e.data);
}], ["input", function(e, n) {
  e.stopPropagation(), lt(n, () => {
    n.dispatchCommand(Md, e);
  }, { event: e }), wn = null;
}], ["click", function(e, n) {
  lt(n, () => {
    const t = j(), r = rt(Ge(n)), o = Wn();
    if (r) {
      if (z(t)) {
        const i = t.anchor, s = i.getNode();
        if (i.type === "element" && i.offset === 0 && t.isCollapsed() && !be(s) && pe().getChildrenSize() === 1 && s.getTopLevelElementOrThrow().isEmpty() && o !== null && t.is(o)) r.removeAllRanges(), t.dirty = !0;
        else if (e.detail === 3 && !t.isCollapsed() && s !== t.focus.getNode()) {
          const a = Mt(s, (l) => T(l) && !l.isInline());
          T(a) && a.select(0);
        }
      } else if (e.pointerType === "touch" || e.pointerType === "pen") {
        const i = r.anchorNode;
        (xe(i) || Nt(i)) && $e(Xs(o, r, n, e));
      }
    }
    V(n, Gs, e);
  });
}], ["cut", pt], ["copy", pt], ["dragstart", pt], ["dragover", pt], ["dragend", pt], ["paste", pt], ["focus", pt], ["blur", pt], ["drop", pt]];
go && us.push(["beforeinput", (e, n) => (function(t, r) {
  const o = t.inputType;
  o === "deleteCompositionText" || nn && Tf(r) || o !== "insertCompositionText" && V(r, Od, t);
})(e, n)]);
let _r = 0, Jd = null, Yd = 0, wn = null;
const cs = /* @__PURE__ */ new WeakMap(), _o = /* @__PURE__ */ new WeakMap();
let ds = !1, fs = !1, cr = !1, or = !1, gs = !1, ps = "", Zt = null, Xd = [0, "", 0, "root", 0];
function Qd(e, n, t, r, o) {
  const i = e.anchor, s = e.focus, a = i.getNode(), l = ae(), u = rt(Ge(l)), c = u !== null ? u.anchorNode : null, d = i.key, f = l.getElementByKey(d), p = t.length;
  return d !== s.key || !B(a) || (!o && (!go || Yd < r + 50) || a.isDirty() && p < 2 || Nf(t)) && i.offset !== s.offset && !a.isComposing() || bt(a) || a.isDirty() && p > 1 || (o || !go) && f !== null && !a.isComposing() && c !== Mn(f) || u !== null && n !== null && (!n.collapsed || n.startContainer !== u.anchorNode || n.startOffset !== u.anchorOffset) || a.getFormat() !== e.format || a.getStyle() !== e.style || (function(g, h) {
    if (h.isSegmented()) return !0;
    if (!g.isCollapsed()) return !1;
    const m = g.anchor.offset, v = h.getParentOrThrow(), y = Qt(h);
    return m === 0 ? !h.canInsertTextBefore() || !v.canInsertTextBefore() && !h.isComposing() || y || (function(b) {
      const x = b.getPreviousSibling();
      return (B(x) || T(x) && x.isInline()) && !x.canInsertTextAfter();
    })(h) : m === h.getTextContentSize() && (!h.canInsertTextAfter() || !v.canInsertTextAfter() && !h.isComposing() || y);
  })(e, a);
}
function ul(e, n) {
  return Nt(e) && e.nodeValue !== null && n !== 0 && n !== e.nodeValue.length;
}
function cl(e, n, t) {
  const { anchorNode: r, anchorOffset: o, focusNode: i, focusOffset: s } = e;
  ds && (ds = !1, ul(r, o) && ul(i, s) && !Zt) || lt(n, () => {
    if (!t) return void $e(null);
    if (!Ir(n, r, i)) return;
    let a = j();
    if (Zt && z(a) && a.isCollapsed()) {
      const l = a.anchor, u = Zt.anchor;
      (l.key === u.key && l.offset === u.offset + 1 || l.offset === 1 && u.getNode().is(l.getNode().getPreviousSibling())) && (a = Zt.clone(), $e(a));
    }
    if (Zt = null, z(a)) {
      const l = a.anchor, u = l.getNode();
      if (a.isCollapsed()) {
        e.type === "Range" && e.anchorNode === e.focusNode && (a.dirty = !0);
        const c = Ge(n).event, d = c ? c.timeStamp : performance.now(), [f, p, g, h, m] = Xd, v = pe(), y = n.isComposing() === !1 && v.getTextContent() === "";
        if (d < m + 200 && l.offset === g && l.key === h) ro(a, f, p);
        else if (l.type === "text") B(u) || $(141), ef(a, u);
        else if (l.type === "element" && !y) {
          T(u) || $(259);
          const b = l.getNode();
          b.isEmpty() ? (function(x, w) {
            const S = w.getTextFormat(), k = w.getTextStyle();
            ro(x, S, k);
          })(a, b) : ro(a, 0, "");
        }
      } else {
        const c = l.key, d = a.focus.key, f = a.getNodes(), p = f.length, g = a.isBackward(), h = g ? s : o, m = g ? o : s, v = g ? d : c, y = g ? c : d;
        let b = 2047, x = !1;
        for (let w = 0; w < p; w++) {
          const S = f[w], k = S.getTextContentSize();
          if (B(S) && k !== 0 && !(w === 0 && S.__key === v && h === k || w === p - 1 && S.__key === y && m === 0) && (x = !0, b &= S.getFormat(), b === 0)) break;
        }
        a.format = x ? b : 0;
      }
    }
    V(n, Id, void 0);
  });
}
function ro(e, n, t) {
  e.format === n && e.style === t || (e.format = n, e.style = t, e.dirty = !0);
}
function ef(e, n) {
  ro(e, n.getFormat(), n.getStyle());
}
function tf(e) {
  if (!e.getTargetRanges) return null;
  const n = e.getTargetRanges();
  return n.length === 0 ? null : n[0];
}
function jv(e) {
  const n = e.inputType, t = tf(e), r = ae(), o = j();
  if (n === "deleteContentBackward") {
    if (o === null) {
      const d = Wn();
      if (!z(d)) return !0;
      $e(d.clone());
    }
    if (z(o)) {
      const d = o.anchor.key === o.focus.key;
      if (i = e.timeStamp, Jd === "MediaLast" && i < _r + 30 && r.isComposing() && d) {
        if (Ae(null), _r = 0, setTimeout(() => {
          lt(r, () => {
            Ae(null);
          });
        }, 30), z(o)) {
          const f = o.anchor.getNode();
          f.markDirty(), B(f) || $(142), ef(o, f);
        }
      } else {
        Ae(null), e.preventDefault();
        const f = o.anchor.getNode(), p = f.getTextContent(), g = f.canInsertTextAfter(), h = o.anchor.offset === 0 && o.focus.offset === p.length;
        let m = Ja && d && !h && g;
        if (m && o.isCollapsed() && (m = !ne(vs(o.anchor, !0))), !m) {
          V(r, Yt, !0);
          const v = j();
          Ja && z(v) && v.isCollapsed() && (Zt = v, setTimeout(() => Zt = null));
        }
      }
      return !0;
    }
  }
  var i;
  if (!z(o)) return !0;
  const s = e.data;
  wn !== null && la(!1, r, wn), o.dirty && wn === null || !o.isCollapsed() || be(o.anchor.getNode()) || t === null || o.applyDOMRange(t), wn = null;
  const a = o.anchor, l = o.focus, u = a.getNode(), c = l.getNode();
  if (n === "insertText" || n === "insertTranspose") {
    if (s === `
`) e.preventDefault(), V(r, Rn, !1);
    else if (s === Bt) e.preventDefault(), V(r, vo, void 0);
    else if (s == null && e.dataTransfer) {
      const d = e.dataTransfer.getData("text/plain");
      e.preventDefault(), o.insertRawText(d);
    } else s != null && Qd(o, t, s, e.timeStamp, !0) ? (e.preventDefault(), V(r, An, s)) : wn = s;
    return Yd = e.timeStamp, !0;
  }
  switch (e.preventDefault(), n) {
    case "insertFromYank":
    case "insertFromDrop":
    case "insertReplacementText":
      V(r, An, e);
      break;
    case "insertFromComposition":
      Ae(null), V(r, An, e);
      break;
    case "insertLineBreak":
      Ae(null), V(r, Rn, !1);
      break;
    case "insertParagraph":
      Ae(null), cr && !jn ? (cr = !1, V(r, Rn, !1)) : V(r, vo, void 0);
      break;
    case "insertFromPaste":
    case "insertFromPasteAsQuotation":
      V(r, Hs, e);
      break;
    case "deleteByComposition":
      (function(d, f) {
        return d !== f || T(d) || T(f) || !Qt(d) || !Qt(f);
      })(u, c) && V(r, as, e);
      break;
    case "deleteByDrag":
    case "deleteByCut":
      V(r, as, e);
      break;
    case "deleteContent":
      V(r, Yt, !1);
      break;
    case "deleteWordBackward":
      V(r, vr, !0);
      break;
    case "deleteWordForward":
      V(r, vr, !1);
      break;
    case "deleteHardLineBackward":
    case "deleteSoftLineBackward":
      V(r, xr, !0);
      break;
    case "deleteContentForward":
    case "deleteHardLineForward":
    case "deleteSoftLineForward":
      V(r, xr, !1);
      break;
    case "formatStrikeThrough":
      V(r, It, "strikethrough");
      break;
    case "formatBold":
      V(r, It, "bold");
      break;
    case "formatItalic":
      V(r, It, "italic");
      break;
    case "formatUnderline":
      V(r, It, "underline");
      break;
    case "historyUndo":
      V(r, Ws, void 0);
      break;
    case "historyRedo":
      V(r, Ks, void 0);
  }
  return !0;
}
function Uv(e) {
  if (xe(e.target) && _f(e.target)) return !0;
  const n = ae(), t = j(), r = e.data, o = tf(e);
  if (r != null && z(t) && Qd(t, o, r, e.timeStamp, !1)) {
    or && (wo(n, r), or = !1);
    const i = t.anchor.getNode(), s = rt(Ge(n));
    if (s === null) return !0;
    const a = t.isBackward(), l = a ? t.anchor.offset : t.focus.offset, u = a ? t.focus.offset : t.anchor.offset;
    go && !t.isCollapsed() && B(i) && s.anchorNode !== null && i.getTextContent().slice(0, l) + r + i.getTextContent().slice(l + u) === Af(s.anchorNode) || V(n, An, r);
    const c = r.length;
    nn && c > 1 && e.inputType === "insertCompositionText" && !n.isComposing() && (t.anchor.offset -= c), Nr || jn || Rr || !n.isComposing() || (_r = 0, Ae(null));
  } else
    la(!1, n, r !== null ? r : void 0), or && (wo(n, r || void 0), or = !1);
  return (function() {
    ke();
    const i = ae();
    wd(i);
  })(), !0;
}
function Gv(e) {
  const n = ae(), t = j();
  if (z(t) && !n.isComposing()) {
    const r = t.anchor, o = t.anchor.getNode();
    Ae(r.key), (e.timeStamp < _r + 30 || r.type === "element" || !t.isCollapsed() || o.getFormat() !== t.format || B(o) && o.getStyle() !== t.style) && V(n, An, gv);
  }
  return !0;
}
function Hv(e) {
  return wo(ae(), e.data), !0;
}
function wo(e, n) {
  const t = e._compositionKey;
  if (Ae(null), t !== null && n != null) {
    if (n === "") {
      const r = we(t), o = Mn(e.getElementByKey(t));
      return void (o !== null && o.nodeValue !== null && B(r) && ua(r, o.nodeValue, null, null, !0));
    }
    if (n[n.length - 1] === `
`) {
      const r = j();
      if (z(r)) {
        const o = r.focus;
        return r.anchor.set(o.key, o.offset, o.type), void V(e, xo, null);
      }
    }
  }
  la(!0, e, n);
}
function Wv(e) {
  const n = ae();
  if (e.key == null) return !0;
  if (gs && $l(e)) return lt(n, () => {
    wo(n, ps);
  }), gs = !1, ps = "", !0;
  if ((function(t) {
    return ie(t, "ArrowRight", { shiftKey: "any" });
  })(e)) V(n, Dd, e);
  else if ((function(t) {
    return ie(t, "ArrowRight", mt);
  })(e)) V(n, Fv, e);
  else if ((function(t) {
    return ie(t, "ArrowLeft", { shiftKey: "any" });
  })(e)) V(n, zd, e);
  else if ((function(t) {
    return ie(t, "ArrowLeft", mt);
  })(e)) V(n, Iv, e);
  else if ((function(t) {
    return ie(t, "ArrowUp", { altKey: "any", shiftKey: "any" });
  })(e)) V(n, Bd, e);
  else if ((function(t) {
    return ie(t, "ArrowDown", { altKey: "any", shiftKey: "any" });
  })(e)) V(n, Vd, e);
  else if ((function(t) {
    return ie(t, "Enter", { altKey: "any", ctrlKey: "any", metaKey: "any", shiftKey: !0 });
  })(e)) cr = !0, V(n, xo, e);
  else if ((function(t) {
    return t.key === " ";
  })(e)) V(n, jd, e);
  else if ((function(t) {
    return qe && ie(t, "o", { ctrlKey: !0 });
  })(e)) e.preventDefault(), cr = !0, V(n, Rn, !0);
  else if ((function(t) {
    return ie(t, "Enter", { altKey: "any", ctrlKey: "any", metaKey: "any" });
  })(e)) cr = !1, V(n, xo, e);
  else if ((function(t) {
    return ie(t, "Backspace", { shiftKey: "any" }) || qe && ie(t, "h", { ctrlKey: !0 });
  })(e)) $l(e) ? V(n, Ud, e) : (e.preventDefault(), V(n, Yt, !0));
  else if ((function(t) {
    return t.key === "Escape";
  })(e)) V(n, Gd, e);
  else if ((function(t) {
    return ie(t, "Delete", {}) || qe && ie(t, "d", { ctrlKey: !0 });
  })(e)) (function(t) {
    return t.key === "Delete";
  })(e) ? V(n, Hd, e) : (e.preventDefault(), V(n, Yt, !1));
  else if ((function(t) {
    return ie(t, "Backspace", Ml);
  })(e)) e.preventDefault(), V(n, vr, !0);
  else if ((function(t) {
    return ie(t, "Delete", Ml);
  })(e)) e.preventDefault(), V(n, vr, !1);
  else if ((function(t) {
    return qe && ie(t, "Backspace", { metaKey: !0 });
  })(e)) e.preventDefault(), V(n, xr, !0);
  else if ((function(t) {
    return qe && (ie(t, "Delete", { metaKey: !0 }) || ie(t, "k", { ctrlKey: !0 }));
  })(e)) e.preventDefault(), V(n, xr, !1);
  else if ((function(t) {
    return ie(t, "b", mt);
  })(e)) e.preventDefault(), V(n, It, "bold");
  else if ((function(t) {
    return ie(t, "u", mt);
  })(e)) e.preventDefault(), V(n, It, "underline");
  else if ((function(t) {
    return ie(t, "i", mt);
  })(e)) e.preventDefault(), V(n, It, "italic");
  else if ((function(t) {
    return ie(t, "Tab", { shiftKey: "any" });
  })(e)) V(n, Wd, e);
  else if ((function(t) {
    return ie(t, "z", mt);
  })(e)) e.preventDefault(), V(n, Ws, void 0);
  else if ((function(t) {
    return qe ? ie(t, "z", { metaKey: !0, shiftKey: !0 }) : ie(t, "y", { ctrlKey: !0 }) || ie(t, "z", { ctrlKey: !0, shiftKey: !0 });
  })(e)) e.preventDefault(), V(n, Ks, void 0);
  else {
    const t = n._editorState._selection;
    t === null || z(t) ? Pl(e) && (e.preventDefault(), V(n, ls, e)) : (function(r) {
      return ie(r, "c", mt);
    })(e) ? (e.preventDefault(), V(n, Wo, e)) : (function(r) {
      return ie(r, "x", mt);
    })(e) ? (e.preventDefault(), V(n, qs, e)) : Pl(e) && (e.preventDefault(), V(n, ls, e));
  }
  return (function(t) {
    return t.ctrlKey || t.shiftKey || t.altKey || t.metaKey;
  })(e) && n.dispatchCommand(Vv, e), !0;
}
function nf(e) {
  let n = e.__lexicalEventHandles;
  return n === void 0 && (n = [], e.__lexicalEventHandles = n), n;
}
const Tn = /* @__PURE__ */ new Map();
function rf(e) {
  const n = E0(e.target);
  if (n === null) return;
  const t = wf(n.anchorNode);
  if (t === null) return;
  fs && (fs = !1, lt(t, () => {
    const l = Wn(), u = n.anchorNode;
    (xe(u) || Nt(u)) && $e(Xs(l, n, t, e));
  }));
  const r = aa(t), o = r[r.length - 1], i = o._key, s = Tn.get(i), a = s || o;
  a !== t && cl(n, a, !1), cl(n, t, !0), t !== o ? Tn.set(i, t) : s && Tn.delete(i);
}
function dl(e) {
  e._lexicalHandled = !0;
}
function fl(e) {
  return e._lexicalHandled === !0;
}
function Kv(e) {
  const n = cs.get(e);
  if (n === void 0) return;
  const t = _o.get(n);
  if (t === void 0) return;
  const r = t - 1;
  r >= 0 || $(164), cs.delete(e), _o.set(n, r), r === 0 && n.removeEventListener("selectionchange", rf);
  const o = Jo(e);
  sa(o) ? ((function(s) {
    if (s._parentEditor !== null) {
      const a = aa(s), l = a[a.length - 1]._key;
      Tn.get(l) === s && Tn.delete(l);
    } else Tn.delete(s._key);
  })(o), e.__lexicalEditor = null) : o && $(198);
  const i = nf(e);
  for (let s = 0; s < i.length; s++) i[s]();
  e.__lexicalEventHandles = [];
}
function hs(e, n, t) {
  ke();
  const r = e.__key, o = e.getParent();
  if (o === null) return;
  const i = (function(a) {
    const l = j();
    if (!z(l) || !T(a)) return l;
    const { anchor: u, focus: c } = l, d = u.getNode(), f = c.getNode();
    return xs(d, a) && u.set(a.__key, 0, "element"), xs(f, a) && c.set(a.__key, 0, "element"), l;
  })(e);
  let s = !1;
  if (z(i) && n) {
    const a = i.anchor, l = i.focus;
    a.key === r && (Eo(a, e, o, e.getPreviousSibling(), e.getNextSibling()), s = !0), l.key === r && (Eo(l, e, o, e.getPreviousSibling(), e.getNextSibling()), s = !0);
  } else Ie(i) && n && e.isSelected() && e.selectPrevious();
  if (z(i) && n && !s) {
    const a = e.getIndexWithinParent();
    en(e), ko(i, o, a, -1);
  } else en(e);
  t || Ue(o) || o.canBeEmpty() || !o.isEmpty() || hs(o, n), n && i && be(o) && o.isEmpty() && o.selectEnd();
}
const of = Symbol.for("ephemeral");
function So(e) {
  return e[of] || !1;
}
class Ye {
  constructor(n) {
    A(this, "__type");
    A(this, "__key");
    A(this, "__parent");
    A(this, "__prev");
    A(this, "__next");
    A(this, "__state");
    this.__type = this.constructor.getType(), this.__parent = null, this.__prev = null, this.__next = null, Object.defineProperty(this, "__state", { configurable: !0, enumerable: !1, value: void 0, writable: !0 }), v0(this, n);
  }
  static getType() {
    const { ownNodeType: n } = ei(this);
    return n === void 0 && $(64, this.name), n;
  }
  static clone(n) {
    $(65, this.name);
  }
  $config() {
    return {};
  }
  config(n, t) {
    const r = t.extends || Object.getPrototypeOf(this.constructor);
    return Object.assign(t, { extends: r, type: n }), { [n]: t };
  }
  afterCloneFrom(n) {
    this.__key === n.__key ? (this.__parent = n.__parent, this.__next = n.__next, this.__prev = n.__prev, this.__state = n.__state) : n.__state && (this.__state = n.__state.getWritable(this));
  }
  getType() {
    return this.__type;
  }
  isInline() {
    $(137, this.constructor.name);
  }
  isAttached() {
    let n = this.__key;
    for (; n !== null; ) {
      if (n === "root") return !0;
      const t = we(n);
      if (t === null) break;
      n = t.__parent;
    }
    return !1;
  }
  isSelected(n) {
    const t = n || j();
    if (t == null) return !1;
    const r = t.getNodes().some((o) => o.__key === this.__key);
    if (B(this)) return r;
    if (z(t) && t.anchor.type === "element" && t.focus.type === "element") {
      if (t.isCollapsed()) return !1;
      const o = this.getParent();
      if (ne(this) && this.isInline() && o) {
        const i = t.isBackward() ? t.focus : t.anchor;
        if (o.is(i.getNode()) && i.offset === o.getChildrenSize() && this.is(o.getLastChild())) return !1;
      }
    }
    return r;
  }
  getKey() {
    return this.__key;
  }
  getIndexWithinParent() {
    const n = this.getParent();
    if (n === null) return -1;
    let t = n.getFirstChild(), r = 0;
    for (; t !== null; ) {
      if (this.is(t)) return r;
      r++, t = t.getNextSibling();
    }
    return -1;
  }
  getParent() {
    const n = this.getLatest().__parent;
    return n === null ? null : we(n);
  }
  getParentOrThrow() {
    const n = this.getParent();
    return n === null && $(66, this.__key), n;
  }
  getTopLevelElement() {
    let n = this;
    for (; n !== null; ) {
      const t = n.getParent();
      if (Ue(t)) return T(n) || n === this && ne(n) || $(194), n;
      n = t;
    }
    return null;
  }
  getTopLevelElementOrThrow() {
    const n = this.getTopLevelElement();
    return n === null && $(67, this.__key), n;
  }
  getParents() {
    const n = [];
    let t = this.getParent();
    for (; t !== null; ) n.push(t), t = t.getParent();
    return n;
  }
  getParentKeys() {
    const n = [];
    let t = this.getParent();
    for (; t !== null; ) n.push(t.__key), t = t.getParent();
    return n;
  }
  getPreviousSibling() {
    const n = this.getLatest().__prev;
    return n === null ? null : we(n);
  }
  getPreviousSiblings() {
    const n = [], t = this.getParent();
    if (t === null) return n;
    let r = t.getFirstChild();
    for (; r !== null && !r.is(this); ) n.push(r), r = r.getNextSibling();
    return n;
  }
  getNextSibling() {
    const n = this.getLatest().__next;
    return n === null ? null : we(n);
  }
  getNextSiblings() {
    const n = [];
    let t = this.getNextSibling();
    for (; t !== null; ) n.push(t), t = t.getNextSibling();
    return n;
  }
  getCommonAncestor(n) {
    const t = T(this) ? this : this.getParent(), r = T(n) ? n : n.getParent(), o = t && r ? io(t, r) : null;
    return o ? o.commonAncestor : null;
  }
  is(n) {
    return n != null && this.__key === n.__key;
  }
  isBefore(n) {
    const t = io(this, n);
    return t !== null && (t.type === "descendant" || (t.type === "branch" ? Lf(t) === -1 : (t.type !== "same" && t.type !== "ancestor" && $(279), !1)));
  }
  isParentOf(n) {
    const t = io(this, n);
    return t !== null && t.type === "ancestor";
  }
  getNodesBetween(n) {
    const t = this.isBefore(n), r = [], o = /* @__PURE__ */ new Set();
    let i = this;
    for (; i !== null; ) {
      const s = i.__key;
      if (o.has(s) || (o.add(s), r.push(i)), i === n) break;
      const a = T(i) ? t ? i.getFirstChild() : i.getLastChild() : null;
      if (a !== null) {
        i = a;
        continue;
      }
      const l = t ? i.getNextSibling() : i.getPreviousSibling();
      if (l !== null) {
        i = l;
        continue;
      }
      const u = i.getParentOrThrow();
      if (o.has(u.__key) || r.push(u), u === n) break;
      let c = null, d = u;
      do {
        if (d === null && $(68), c = t ? d.getNextSibling() : d.getPreviousSibling(), d = d.getParent(), d === null) break;
        c !== null || o.has(d.__key) || r.push(d);
      } while (c === null);
      i = c;
    }
    return t || r.reverse(), r;
  }
  isDirty() {
    const n = ae()._dirtyLeaves;
    return n !== null && n.has(this.__key);
  }
  getLatest() {
    if (So(this)) return this;
    const n = we(this.__key);
    return n === null && $(113), n;
  }
  getWritable() {
    if (So(this)) return this;
    ke();
    const n = Gt(), t = ae(), r = n._nodeMap, o = this.__key, i = this.getLatest(), s = t._cloneNotNeeded, a = j();
    if (a !== null && a.setCachedNodes(null), s.has(o)) return Ro(i), i;
    const l = Of(i);
    return s.add(o), Ro(l), r.set(o, l), l;
  }
  getTextContent() {
    return "";
  }
  getTextContentSize() {
    return this.getTextContent().length;
  }
  createDOM(n, t) {
    $(70);
  }
  updateDOM(n, t, r) {
    $(71);
  }
  exportDOM(n) {
    return { element: this.createDOM(n._config, n) };
  }
  exportJSON() {
    const n = this.__state ? this.__state.toJSON() : void 0;
    return { type: this.__type, version: 1, ...n };
  }
  static importJSON(n) {
    $(18, this.name);
  }
  updateFromJSON(n) {
    return (function(t, r) {
      const o = t.getWritable(), i = r.$;
      let s = i;
      for (const a of Nd(o).flatKeys) a in r && (s !== void 0 && s !== i || (s = { ...i }), s[a] = r[a]);
      return (o.__state || s) && Ed(t).updateFromJSON(s), o;
    })(this, n);
  }
  static transform() {
    return null;
  }
  remove(n) {
    hs(this, !0, n);
  }
  replace(n, t) {
    ke();
    let r = j();
    r !== null && (r = r.clone()), Ni(this, n);
    const o = this.getLatest(), i = this.__key, s = n.__key, a = n.getWritable(), l = this.getParentOrThrow().getWritable(), u = l.__size;
    en(a);
    const c = o.getPreviousSibling(), d = o.getNextSibling(), f = o.__prev, p = o.__next, g = o.__parent;
    if (hs(o, !1, !0), c === null ? l.__first = s : c.getWritable().__next = s, a.__prev = f, d === null ? l.__last = s : d.getWritable().__prev = s, a.__next = p, a.__parent = g, l.__size = u, t && (T(this) && T(a) || $(139), this.getChildren().forEach((h) => {
      a.append(h);
    })), z(r)) {
      $e(r);
      const h = r.anchor, m = r.focus;
      h.key === i && ml(h, a), m.key === i && ml(m, a);
    }
    return Ot() === i && Ae(s), a;
  }
  insertAfter(n, t = !0) {
    ke(), Ni(this, n);
    const r = this.getWritable(), o = n.getWritable(), i = o.getParent(), s = j();
    let a = !1, l = !1;
    if (i !== null) {
      const p = n.getIndexWithinParent();
      if (en(o), z(s)) {
        const g = i.__key, h = s.anchor, m = s.focus;
        a = h.type === "element" && h.key === g && h.offset === p + 1, l = m.type === "element" && m.key === g && m.offset === p + 1;
      }
    }
    const u = this.getNextSibling(), c = this.getParentOrThrow().getWritable(), d = o.__key, f = r.__next;
    if (u === null ? c.__last = d : u.getWritable().__prev = d, c.__size++, r.__next = d, o.__next = f, o.__prev = r.__key, o.__parent = r.__parent, t && z(s)) {
      const p = this.getIndexWithinParent();
      ko(s, c, p + 1);
      const g = c.__key;
      a && s.anchor.set(g, p + 2, "element"), l && s.focus.set(g, p + 2, "element");
    }
    return n;
  }
  insertBefore(n, t = !0) {
    ke(), Ni(this, n);
    const r = this.getWritable(), o = n.getWritable(), i = o.__key;
    en(o);
    const s = this.getPreviousSibling(), a = this.getParentOrThrow().getWritable(), l = r.__prev, u = this.getIndexWithinParent();
    s === null ? a.__first = i : s.getWritable().__next = i, a.__size++, r.__prev = i, o.__prev = l, o.__next = r.__key, o.__parent = r.__parent;
    const c = j();
    return t && z(c) && ko(c, this.getParentOrThrow(), u), n;
  }
  isParentRequired() {
    return !1;
  }
  createParentElementNode() {
    return ve();
  }
  selectStart() {
    return this.selectPrevious();
  }
  selectEnd() {
    return this.selectNext(0, 0);
  }
  selectPrevious(n, t) {
    ke();
    const r = this.getPreviousSibling(), o = this.getParentOrThrow();
    if (r === null) return o.select(0, 0);
    if (T(r)) return r.select();
    if (!B(r)) {
      const i = r.getIndexWithinParent() + 1;
      return o.select(i, i);
    }
    return r.select(n, t);
  }
  selectNext(n, t) {
    ke();
    const r = this.getNextSibling(), o = this.getParentOrThrow();
    if (r === null) return o.select();
    if (T(r)) return r.select(0, 0);
    if (!B(r)) {
      const i = r.getIndexWithinParent();
      return o.select(i, i);
    }
    return r.select(n, t);
  }
  markDirty() {
    this.getWritable();
  }
  reconcileObservedMutation(n, t) {
    this.markDirty();
  }
}
A(Ye, "importDOM");
const Co = "historic", qv = "history-push", Fn = "history-merge", Zv = "paste", sf = "collaboration", Jv = "skip-scroll-into-view", Yv = "skip-dom-selection", Xv = "skip-selection-focus";
class Un extends Ye {
  static getType() {
    return "linebreak";
  }
  static clone(n) {
    return new Un(n.__key);
  }
  constructor(n) {
    super(n);
  }
  getTextContent() {
    return `
`;
  }
  createDOM() {
    return document.createElement("br");
  }
  updateDOM() {
    return !1;
  }
  isInline() {
    return !0;
  }
  static importDOM() {
    return { br: (n) => (function(t) {
      const r = t.parentElement;
      if (r !== null && Ao(r)) {
        const o = r.firstChild;
        if (o === t || o.nextSibling === t && Hr(o)) {
          const i = r.lastChild;
          if (i === t || i.previousSibling === t && Hr(i)) return !0;
        }
      }
      return !1;
    })(n) || (function(t) {
      const r = t.parentElement;
      if (r !== null && Ao(r)) {
        const o = r.firstChild;
        if (o === t || o.nextSibling === t && Hr(o)) return !1;
        const i = r.lastChild;
        if (i === t || i.previousSibling === t && Hr(i)) return !0;
      }
      return !1;
    })(n) ? null : { conversion: Qv, priority: 0 } };
  }
  static importJSON(n) {
    return et().updateFromJSON(n);
  }
}
function Qv(e) {
  return { node: et() };
}
function et() {
  return He(new Un());
}
function Xt(e) {
  return e instanceof Un;
}
function Hr(e) {
  return Nt(e) && /^( |\t|\r?\n)+$/.test(e.textContent || "");
}
function wi(e, n) {
  return 16 & n ? "code" : n & vd ? "mark" : 32 & n ? "sub" : 64 & n ? "sup" : null;
}
function Si(e, n) {
  return 1 & n ? "strong" : 2 & n ? "em" : "span";
}
function af(e, n, t, r, o) {
  const i = r.classList;
  let s = In(o, "base");
  s !== void 0 && i.add(...s), s = In(o, "underlineStrikethrough");
  let a = !1;
  const l = 8 & n && 4 & n;
  s !== void 0 && (8 & t && 4 & t ? (a = !0, l || i.add(...s)) : l && i.remove(...s));
  for (const u in rn) {
    const c = rn[u];
    if (s = In(o, u), s !== void 0) if (t & c) {
      if (a && (u === "underline" || u === "strikethrough")) {
        n & c && i.remove(...s);
        continue;
      }
      ((n & c) === 0 || l && u === "underline" || u === "strikethrough") && i.add(...s);
    } else n & c && i.remove(...s);
  }
}
function lf(e, n, t) {
  const r = n.firstChild, o = t.isComposing(), i = e + (o ? Go : "");
  if (r == null) n.textContent = i;
  else {
    const s = r.nodeValue;
    if (s !== i) if (o || nn) {
      const [a, l, u] = (function(c, d) {
        const f = c.length, p = d.length;
        let g = 0, h = 0;
        for (; g < f && g < p && c[g] === d[g]; ) g++;
        for (; h + g < f && h + g < p && c[f - h - 1] === d[p - h - 1]; ) h++;
        return [g, f - g - h, d.slice(g, p - h)];
      })(s, i);
      l !== 0 && r.deleteData(a, l), r.insertData(a, u);
    } else r.nodeValue = i;
  }
}
function gl(e, n, t, r, o, i) {
  lf(o, e, n);
  const s = i.theme.text;
  s !== void 0 && af(0, 0, r, e, s);
}
function Wr(e, n) {
  const t = document.createElement(n);
  return t.appendChild(e), t;
}
class Ut extends Ye {
  constructor(t = "", r) {
    super(r);
    A(this, "__text");
    A(this, "__format");
    A(this, "__style");
    A(this, "__mode");
    A(this, "__detail");
    this.__text = t, this.__format = 0, this.__style = "", this.__mode = 0, this.__detail = 0;
  }
  static getType() {
    return "text";
  }
  static clone(t) {
    return new Ut(t.__text, t.__key);
  }
  afterCloneFrom(t) {
    super.afterCloneFrom(t), this.__text = t.__text, this.__format = t.__format, this.__style = t.__style, this.__mode = t.__mode, this.__detail = t.__detail;
  }
  getFormat() {
    return this.getLatest().__format;
  }
  getDetail() {
    return this.getLatest().__detail;
  }
  getMode() {
    const t = this.getLatest();
    return yv[t.__mode];
  }
  getStyle() {
    return this.getLatest().__style;
  }
  isToken() {
    return this.getLatest().__mode === 1;
  }
  isComposing() {
    return this.__key === Ot();
  }
  isSegmented() {
    return this.getLatest().__mode === 2;
  }
  isDirectionless() {
    return !!(1 & this.getLatest().__detail);
  }
  isUnmergeable() {
    return !!(2 & this.getLatest().__detail);
  }
  hasFormat(t) {
    const r = rn[t];
    return (this.getFormat() & r) !== 0;
  }
  isSimpleText() {
    return this.__type === "text" && this.__mode === 0;
  }
  getTextContent() {
    return this.getLatest().__text;
  }
  getFormatFlags(t, r) {
    return No(this.getLatest().__format, t, r);
  }
  canHaveFormat() {
    return !0;
  }
  isInline() {
    return !0;
  }
  createDOM(t, r) {
    const o = this.__format, i = wi(0, o), s = Si(0, o), a = i === null ? s : i, l = document.createElement(a);
    let u = l;
    this.hasFormat("code") && l.setAttribute("spellcheck", "false"), i !== null && (u = document.createElement(s), l.appendChild(u)), gl(u, this, 0, o, this.__text, t);
    const c = this.__style;
    return c !== "" && (l.style.cssText = c), l;
  }
  updateDOM(t, r, o) {
    const i = this.__text, s = t.__format, a = this.__format, l = wi(0, s), u = wi(0, a), c = Si(0, s), d = Si(0, a);
    if ((l === null ? c : l) !== (u === null ? d : u)) return !0;
    if (l === u && c !== d) {
      const m = r.firstChild;
      m == null && $(48);
      const v = document.createElement(d);
      return gl(v, this, 0, a, i, o), r.replaceChild(v, m), !1;
    }
    let f = r;
    u !== null && l !== null && (f = r.firstChild, f == null && $(49)), lf(i, f, this);
    const p = o.theme.text;
    p !== void 0 && s !== a && af(0, s, a, f, p);
    const g = t.__style, h = this.__style;
    return g !== h && (r.style.cssText = h), !1;
  }
  static importDOM() {
    return { "#text": () => ({ conversion: r0, priority: 0 }), b: () => ({ conversion: t0, priority: 0 }), code: () => ({ conversion: ht, priority: 0 }), em: () => ({ conversion: ht, priority: 0 }), i: () => ({ conversion: ht, priority: 0 }), mark: () => ({ conversion: ht, priority: 0 }), s: () => ({ conversion: ht, priority: 0 }), span: () => ({ conversion: e0, priority: 0 }), strong: () => ({ conversion: ht, priority: 0 }), sub: () => ({ conversion: ht, priority: 0 }), sup: () => ({ conversion: ht, priority: 0 }), u: () => ({ conversion: ht, priority: 0 }) };
  }
  static importJSON(t) {
    return he().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setTextContent(t.text).setFormat(t.format).setDetail(t.detail).setMode(t.mode).setStyle(t.style);
  }
  exportDOM(t) {
    let { element: r } = super.exportDOM(t);
    return xe(r) || $(132), r.style.whiteSpace = "pre-wrap", this.hasFormat("lowercase") ? r.style.textTransform = "lowercase" : this.hasFormat("uppercase") ? r.style.textTransform = "uppercase" : this.hasFormat("capitalize") && (r.style.textTransform = "capitalize"), this.hasFormat("bold") && (r = Wr(r, "b")), this.hasFormat("italic") && (r = Wr(r, "i")), this.hasFormat("strikethrough") && (r = Wr(r, "s")), this.hasFormat("underline") && (r = Wr(r, "u")), { element: r };
  }
  exportJSON() {
    return { detail: this.getDetail(), format: this.getFormat(), mode: this.getMode(), style: this.getStyle(), text: this.getTextContent(), ...super.exportJSON() };
  }
  selectionTransform(t, r) {
  }
  setFormat(t) {
    const r = this.getWritable();
    return r.__format = typeof t == "string" ? rn[t] : t, r;
  }
  setDetail(t) {
    const r = this.getWritable();
    return r.__detail = typeof t == "string" ? pv[t] : t, r;
  }
  setStyle(t) {
    const r = this.getWritable();
    return r.__style = t, r;
  }
  toggleFormat(t) {
    const r = No(this.getFormat(), t, null);
    return this.setFormat(r);
  }
  toggleDirectionless() {
    const t = this.getWritable();
    return t.__detail ^= 1, t;
  }
  toggleUnmergeable() {
    const t = this.getWritable();
    return t.__detail ^= 2, t;
  }
  setMode(t) {
    const r = mv[t];
    if (this.__mode === r) return this;
    const o = this.getWritable();
    return o.__mode = r, o;
  }
  setTextContent(t) {
    if (this.__text === t) return this;
    const r = this.getWritable();
    return r.__text = t, r;
  }
  select(t, r) {
    ke();
    let o = t, i = r;
    const s = j(), a = this.getTextContent(), l = this.__key;
    if (typeof a == "string") {
      const u = a.length;
      o === void 0 && (o = u), i === void 0 && (i = u);
    } else o = 0, i = 0;
    if (!z(s)) return df(l, o, l, i, "text", "text");
    {
      const u = Ot();
      u !== s.anchor.key && u !== s.focus.key || Ae(l), s.setTextNodeRange(this, o, this, i);
    }
    return s;
  }
  selectStart() {
    return this.select(0, 0);
  }
  selectEnd() {
    const t = this.getTextContentSize();
    return this.select(t, t);
  }
  spliceText(t, r, o, i) {
    const s = this.getWritable(), a = s.__text, l = o.length;
    let u = t;
    u < 0 && (u = l + u, u < 0 && (u = 0));
    const c = j();
    if (i && z(c)) {
      const f = t + l;
      c.setTextNodeRange(s, f, s, f);
    }
    const d = a.slice(0, u) + o + a.slice(u + r);
    return s.__text = d, s;
  }
  canInsertTextBefore() {
    return !0;
  }
  canInsertTextAfter() {
    return !0;
  }
  splitText(...t) {
    ke();
    const r = this.getLatest(), o = r.getTextContent();
    if (o === "") return [];
    const i = r.__key, s = Ot(), a = o.length;
    t.sort((C, R) => C - R), t.push(a);
    const l = [], u = t.length;
    for (let C = 0, R = 0; C < a && R <= u; R++) {
      const O = t[R];
      O > C && (l.push(o.slice(C, O)), C = O);
    }
    const c = l.length;
    if (c === 1) return [r];
    const d = l[0], f = r.getParent();
    let p;
    const g = r.getFormat(), h = r.getStyle(), m = r.__detail;
    let v = !1, y = null, b = null;
    const x = j();
    if (z(x)) {
      const [C, R] = x.isBackward() ? [x.focus, x.anchor] : [x.anchor, x.focus];
      C.type === "text" && C.key === i && (y = C), R.type === "text" && R.key === i && (b = R);
    }
    r.isSegmented() ? (p = he(d), p.__format = g, p.__style = h, p.__detail = m, p.__state = nl(r, p), v = !0) : p = r.setTextContent(d);
    const w = [p];
    for (let C = 1; C < c; C++) {
      const R = he(l[C]);
      R.__format = g, R.__style = h, R.__detail = m, R.__state = nl(r, R);
      const O = R.__key;
      s === i && Ae(O), w.push(R);
    }
    const S = y ? y.offset : null, k = b ? b.offset : null;
    let N = 0;
    for (const C of w) {
      if (!y && !b) break;
      const R = N + C.getTextContentSize();
      if (y !== null && S !== null && S <= R && S >= N && (y.set(C.getKey(), S - N, "text"), S < R && (y = null)), b !== null && k !== null && k <= R && k >= N) {
        b.set(C.getKey(), k - N, "text");
        break;
      }
      N = R;
    }
    if (f !== null) {
      (function(O) {
        const F = O.getPreviousSibling(), U = O.getNextSibling();
        F !== null && Ro(F), U !== null && Ro(U);
      })(this);
      const C = f.getWritable(), R = this.getIndexWithinParent();
      v ? (C.splice(R, 0, w), this.remove()) : C.splice(R, 1, w), z(x) && ko(x, f, R, c - 1);
    }
    return w;
  }
  mergeWithSibling(t) {
    const r = t === this.getPreviousSibling();
    r || t === this.getNextSibling() || $(50);
    const o = this.__key, i = t.__key, s = this.__text, a = s.length;
    Ot() === i && Ae(o);
    const l = j();
    if (z(l)) {
      const f = l.anchor, p = l.focus;
      f !== null && f.key === i && Sl(f, r, o, t, a), p !== null && p.key === i && Sl(p, r, o, t, a);
    }
    const u = t.__text, c = r ? u + s : s + u;
    this.setTextContent(c);
    const d = this.getWritable();
    return t.remove(), d;
  }
  isTextEntity() {
    return !1;
  }
}
function e0(e) {
  return { forChild: Zs(e.style), node: null };
}
function t0(e) {
  const n = e, t = n.style.fontWeight === "normal";
  return { forChild: Zs(n.style, t ? void 0 : "bold"), node: null };
}
const pl = /* @__PURE__ */ new WeakMap();
function n0(e) {
  if (!xe(e)) return !1;
  if (e.nodeName === "PRE") return !0;
  const n = e.style.whiteSpace;
  return typeof n == "string" && n.startsWith("pre");
}
function r0(e) {
  const n = e;
  e.parentElement === null && $(129);
  let t = n.textContent || "";
  if ((function(r) {
    let o, i = r.parentNode;
    const s = [r];
    for (; i !== null && (o = pl.get(i)) === void 0 && !n0(i); ) s.push(i), i = i.parentNode;
    const a = o === void 0 ? i : o;
    for (let l = 0; l < s.length; l++) pl.set(s[l], a);
    return a;
  })(n) !== null) {
    const r = t.split(/(\r?\n|\t)/), o = [], i = r.length;
    for (let s = 0; s < i; s++) {
      const a = r[s];
      a === `
` || a === `\r
` ? o.push(et()) : a === "	" ? o.push(Hn()) : a !== "" && o.push(he(a));
    }
    return { node: o };
  }
  if (t = t.replace(/\r/g, "").replace(/[ \t\n]+/g, " "), t === "") return { node: null };
  if (t[0] === " ") {
    let r = n, o = !0;
    for (; r !== null && (r = hl(r, !1)) !== null; ) {
      const i = r.textContent || "";
      if (i.length > 0) {
        /[ \t\n]$/.test(i) && (t = t.slice(1)), o = !1;
        break;
      }
    }
    o && (t = t.slice(1));
  }
  if (t[t.length - 1] === " ") {
    let r = n, o = !0;
    for (; r !== null && (r = hl(r, !0)) !== null; )
      if ((r.textContent || "").replace(/^( |\t|\r?\n)+/, "").length > 0) {
        o = !1;
        break;
      }
    o && (t = t.slice(0, t.length - 1));
  }
  return t === "" ? { node: null } : { node: he(t) };
}
function hl(e, n) {
  let t = e;
  for (; ; ) {
    let r;
    for (; (r = n ? t.nextSibling : t.previousSibling) === null; ) {
      const i = t.parentElement;
      if (i === null) return null;
      t = i;
    }
    if (t = r, xe(t)) {
      const i = t.style.display;
      if (i === "" && !Ss(t) || i !== "" && !i.startsWith("inline")) return null;
    }
    let o = t;
    for (; (o = n ? t.firstChild : t.lastChild) !== null; ) t = o;
    if (Nt(t)) return t;
    if (t.nodeName === "BR") return null;
  }
}
const o0 = { code: "code", em: "italic", i: "italic", mark: "highlight", s: "strikethrough", strong: "bold", sub: "subscript", sup: "superscript", u: "underline" };
function ht(e) {
  const n = o0[e.nodeName.toLowerCase()];
  return n === void 0 ? { node: null } : { forChild: Zs(e.style, n), node: null };
}
function he(e = "") {
  return He(new Ut(e));
}
function B(e) {
  return e instanceof Ut;
}
function Zs(e, n) {
  const t = e.fontWeight, r = e.textDecoration.split(" "), o = t === "700" || t === "bold", i = r.includes("line-through"), s = e.fontStyle === "italic", a = r.includes("underline"), l = e.verticalAlign;
  return (u) => (B(u) && (o && !u.hasFormat("bold") && u.toggleFormat("bold"), i && !u.hasFormat("strikethrough") && u.toggleFormat("strikethrough"), s && !u.hasFormat("italic") && u.toggleFormat("italic"), a && !u.hasFormat("underline") && u.toggleFormat("underline"), l !== "sub" || u.hasFormat("subscript") || u.toggleFormat("subscript"), l !== "super" || u.hasFormat("superscript") || u.toggleFormat("superscript"), n && !u.hasFormat(n) && u.toggleFormat(n)), u);
}
class Gn extends Ut {
  static getType() {
    return "tab";
  }
  static clone(n) {
    return new Gn(n.__key);
  }
  constructor(n) {
    super("	", n), this.__detail = 2;
  }
  static importDOM() {
    return null;
  }
  createDOM(n) {
    const t = super.createDOM(n), r = In(n.theme, "tab");
    return r !== void 0 && t.classList.add(...r), t;
  }
  static importJSON(n) {
    return Hn().updateFromJSON(n);
  }
  setTextContent(n) {
    return n !== "	" && n !== "" && md(126), super.setTextContent("	");
  }
  spliceText(n, t, r, o) {
    return r === "" && t === 0 || r === "	" && t === 1 || $(286), this;
  }
  setDetail(n) {
    return n !== 2 && $(127), this;
  }
  setMode(n) {
    return n !== "normal" && $(128), this;
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function Hn() {
  return He(new Gn());
}
function Ko(e) {
  return e instanceof Gn;
}
class i0 {
  constructor(n, t, r) {
    A(this, "key");
    A(this, "offset");
    A(this, "type");
    A(this, "_selection");
    this._selection = null, this.key = n, this.offset = t, this.type = r;
  }
  is(n) {
    return this.key === n.key && this.offset === n.offset && this.type === n.type;
  }
  isBefore(n) {
    return this.key === n.key ? this.offset < n.offset : Pf(st(kt(this, "next")), st(kt(n, "next"))) < 0;
  }
  getNode() {
    const n = we(this.key);
    return n === null && $(20), n;
  }
  set(n, t, r, o) {
    const i = this._selection, s = this.key;
    o && this.key === n && this.offset === t && this.type === r || (this.key = n, this.offset = t, this.type = r, Ar() || (Ot() === s && Ae(n), i !== null && (i.setCachedNodes(null), i.dirty = !0)));
  }
}
function dt(e, n, t) {
  return new i0(e, n, t);
}
function Ci(e, n) {
  let t = n.__key, r = e.offset, o = "element";
  if (B(n)) {
    o = "text";
    const i = n.getTextContentSize();
    r > i && (r = i);
  } else if (!T(n)) {
    const i = n.getNextSibling();
    if (B(i)) t = i.__key, r = 0, o = "text";
    else {
      const s = n.getParent();
      s && (t = s.__key, r = n.getIndexWithinParent() + 1);
    }
  }
  e.set(t, r, o);
}
function ml(e, n) {
  if (T(n)) {
    const t = n.getLastDescendant();
    T(t) || B(t) ? Ci(e, t) : Ci(e, n);
  } else Ci(e, n);
}
class qo {
  constructor(n) {
    A(this, "_nodes");
    A(this, "_cachedNodes");
    A(this, "dirty");
    this._cachedNodes = null, this._nodes = n, this.dirty = !1;
  }
  getCachedNodes() {
    return this._cachedNodes;
  }
  setCachedNodes(n) {
    this._cachedNodes = n;
  }
  is(n) {
    if (!Ie(n)) return !1;
    const t = this._nodes, r = n._nodes;
    return t.size === r.size && Array.from(t).every((o) => r.has(o));
  }
  isCollapsed() {
    return !1;
  }
  isBackward() {
    return !1;
  }
  getStartEndPoints() {
    return null;
  }
  add(n) {
    this.dirty = !0, this._nodes.add(n), this._cachedNodes = null;
  }
  delete(n) {
    this.dirty = !0, this._nodes.delete(n), this._cachedNodes = null;
  }
  clear() {
    this.dirty = !0, this._nodes.clear(), this._cachedNodes = null;
  }
  has(n) {
    return this._nodes.has(n);
  }
  clone() {
    return new qo(new Set(this._nodes));
  }
  extract() {
    return this.getNodes();
  }
  insertRawText(n) {
  }
  insertText() {
  }
  insertNodes(n) {
    const t = this.getNodes(), r = t.length, o = t[r - 1];
    let i;
    if (B(o)) i = o.select();
    else {
      const s = o.getIndexWithinParent() + 1;
      i = o.getParentOrThrow().select(s, s);
    }
    i.insertNodes(n);
    for (let s = 0; s < r; s++) t[s].remove();
  }
  getNodes() {
    const n = this._cachedNodes;
    if (n !== null) return n;
    const t = this._nodes, r = [];
    for (const o of t) {
      const i = we(o);
      i !== null && r.push(i);
    }
    return Ar() || (this._cachedNodes = r), r;
  }
  getTextContent() {
    const n = this.getNodes();
    let t = "";
    for (let r = 0; r < n.length; r++) t += n[r].getTextContent();
    return t;
  }
  deleteNodes() {
    const n = this.getNodes();
    if ((j() || Wn()) === this && n[0]) {
      const t = Te(n[0], "next");
      D0(Vt(t, t));
    }
    for (const t of n) t.remove();
  }
}
function z(e) {
  return e instanceof gn;
}
class gn {
  constructor(n, t, r, o) {
    A(this, "format");
    A(this, "style");
    A(this, "anchor");
    A(this, "focus");
    A(this, "_cachedNodes");
    A(this, "dirty");
    this.anchor = n, this.focus = t, n._selection = this, t._selection = this, this._cachedNodes = null, this.format = r, this.style = o, this.dirty = !1;
  }
  getCachedNodes() {
    return this._cachedNodes;
  }
  setCachedNodes(n) {
    this._cachedNodes = n;
  }
  is(n) {
    return !!z(n) && this.anchor.is(n.anchor) && this.focus.is(n.focus) && this.format === n.format && this.style === n.style;
  }
  isCollapsed() {
    return this.anchor.is(this.focus);
  }
  getNodes() {
    const n = this._cachedNodes;
    if (n !== null) return n;
    const t = (function(r) {
      const o = [], [i, s] = r.getTextSlices();
      i && o.push(i.caret.origin);
      const a = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set();
      for (const u of r) if (ut(u)) {
        const { origin: c } = u;
        o.length === 0 ? a.add(c) : (l.add(c), o.push(c));
      } else {
        const { origin: c } = u;
        T(c) && l.has(c) || o.push(c);
      }
      if (s && o.push(s.caret.origin), Pn(r.focus) && T(r.focus.origin) && r.focus.getNodeAtCaret() === null) for (let u = Ct(r.focus.origin, "previous"); ut(u) && a.has(u.origin) && !u.origin.isEmpty() && u.origin.is(o[o.length - 1]); u = ha(u)) a.delete(u.origin), o.pop();
      for (; o.length > 1; ) {
        const u = o[o.length - 1];
        if (!T(u) || l.has(u) || u.isEmpty() || a.has(u)) break;
        o.pop();
      }
      if (o.length === 0 && r.isCollapsed()) {
        const u = st(r.anchor), c = st(r.anchor.getFlipped()), d = (p) => $t(p) ? p.origin : p.getNodeAtCaret(), f = d(u) || d(c) || (r.anchor.getNodeAtCaret() ? u.origin : c.origin);
        o.push(f);
      }
      return o;
    })(zf(jl(this), "next"));
    return Ar() || (this._cachedNodes = t), t;
  }
  setTextNodeRange(n, t, r, o) {
    this.anchor.set(n.__key, t, "text"), this.focus.set(r.__key, o, "text");
  }
  getTextContent() {
    const n = this.getNodes();
    if (n.length === 0) return "";
    const t = n[0], r = n[n.length - 1], o = this.anchor, i = this.focus, s = o.isBefore(i), [a, l] = ms(this);
    let u = "", c = !0;
    for (let d = 0; d < n.length; d++) {
      const f = n[d];
      if (T(f) && !f.isInline()) c || (u += `
`), c = !f.isEmpty();
      else if (c = !1, B(f)) {
        let p = f.getTextContent();
        f === t ? f === r ? o.type === "element" && i.type === "element" && i.offset !== o.offset || (p = a < l ? p.slice(a, l) : p.slice(l, a)) : p = s ? p.slice(a) : p.slice(l) : f === r && (p = s ? p.slice(0, l) : p.slice(0, a)), u += p;
      } else !ne(f) && !Xt(f) || f === r && this.isCollapsed() || (u += f.getTextContent());
    }
    return u;
  }
  applyDOMRange(n) {
    const t = ae(), r = t.getEditorState()._selection, o = cf(n.startContainer, n.startOffset, n.endContainer, n.endOffset, t, r);
    if (o === null) return;
    const [i, s] = o;
    this.anchor.set(i.key, i.offset, i.type, !0), this.focus.set(s.key, s.offset, s.type, !0), po(this);
  }
  clone() {
    const n = this.anchor, t = this.focus;
    return new gn(dt(n.key, n.offset, n.type), dt(t.key, t.offset, t.type), this.format, this.style);
  }
  toggleFormat(n) {
    this.format = No(this.format, n, null), this.dirty = !0;
  }
  setFormat(n) {
    this.format = n, this.dirty = !0;
  }
  setStyle(n) {
    this.style = n, this.dirty = !0;
  }
  hasFormat(n) {
    const t = rn[n];
    return (this.format & t) !== 0;
  }
  insertRawText(n) {
    const t = n.split(/(\r?\n|\t)/), r = [], o = t.length;
    for (let i = 0; i < o; i++) {
      const s = t[i];
      s === `
` || s === `\r
` ? r.push(et()) : s === "	" ? r.push(Hn()) : r.push(he(s));
    }
    this.insertNodes(r);
  }
  insertText(n) {
    const t = this.anchor, r = this.focus, o = this.format, i = this.style;
    let s = t, a = r;
    !this.isCollapsed() && r.isBefore(t) && (s = r, a = t), s.type === "element" && (function(m, v, y, b) {
      const x = m.getNode(), w = x.getChildAtIndex(m.offset), S = he();
      if (S.setFormat(y), S.setStyle(b), Fr(w)) w.splice(0, 0, [S]);
      else {
        const k = be(x) ? ve().append(S) : S;
        w === null ? x.append(k) : w.insertBefore(k);
      }
      m.is(v) && v.set(S.__key, 0, "text"), m.set(S.__key, 0, "text");
    })(s, a, o, i), a.type === "element" && Sr(a, st(kt(a, "next")));
    const l = s.offset;
    let u = a.offset;
    const c = this.getNodes(), d = c.length;
    let f = c[0];
    B(f) || $(26);
    const p = f.getTextContent().length, g = f.getParentOrThrow();
    let h = c[d - 1];
    if (d === 1 && a.type === "element" && (u = p, a.set(s.key, u, "text")), this.isCollapsed() && l === p && (bt(f) || !f.canInsertTextAfter() || !g.canInsertTextAfter() && f.getNextSibling() === null)) {
      let m = f.getNextSibling();
      if (B(m) && m.canInsertTextBefore() && !bt(m) || (m = he(), m.setFormat(o), m.setStyle(i), g.canInsertTextAfter() ? f.insertAfter(m) : g.insertAfter(m)), m.select(0, 0), f = m, n !== "") return void this.insertText(n);
    } else if (this.isCollapsed() && l === 0 && (bt(f) || !f.canInsertTextBefore() || !g.canInsertTextBefore() && f.getPreviousSibling() === null)) {
      let m = f.getPreviousSibling();
      if (B(m) && !bt(m) || (m = he(), m.setFormat(o), g.canInsertTextBefore() ? f.insertBefore(m) : g.insertBefore(m)), m.select(), f = m, n !== "") return void this.insertText(n);
    } else if (f.isSegmented() && l !== p) {
      const m = he(f.getTextContent());
      m.setFormat(o), f.replace(m), f = m;
    } else if (!this.isCollapsed() && n !== "") {
      const m = h.getParent();
      if (!g.canInsertTextBefore() || !g.canInsertTextAfter() || T(m) && (!m.canInsertTextBefore() || !m.canInsertTextAfter())) return this.insertText(""), uf(this.anchor, this.focus, null), void this.insertText(n);
    }
    if (d === 1) {
      if (Qt(f)) {
        const b = he(n);
        return b.select(), void f.replace(b);
      }
      const m = f.getFormat(), v = f.getStyle();
      if (l !== u || m === o && v === i) {
        if (Ko(f)) {
          const b = he(n);
          return b.setFormat(o), b.setStyle(i), b.select(), void f.replace(b);
        }
      } else {
        if (f.getTextContent() !== "") {
          const b = he(n);
          if (b.setFormat(o), b.setStyle(i), b.select(), l === 0) f.insertBefore(b, !1);
          else {
            const [x] = f.splitText(l);
            x.insertAfter(b, !1);
          }
          return void (b.isComposing() && this.anchor.type === "text" && (this.anchor.offset -= n.length));
        }
        f.setFormat(o), f.setStyle(i);
      }
      const y = u - l;
      f = f.spliceText(l, y, n, !0), f.getTextContent() === "" ? f.remove() : this.anchor.type === "text" && (f.isComposing() ? this.anchor.offset -= n.length : (this.format = m, this.style = v));
    } else {
      const m = /* @__PURE__ */ new Set([...f.getParentKeys(), ...h.getParentKeys()]), v = T(f) ? f : f.getParentOrThrow();
      let y = T(h) ? h : h.getParentOrThrow(), b = h;
      if (!v.is(y) && y.isInline()) do
        b = y, y = y.getParentOrThrow();
      while (y.isInline());
      if (a.type === "text" && (u !== 0 || h.getTextContent() === "") || a.type === "element" && h.getIndexWithinParent() < u) if (B(h) && !Qt(h) && u !== h.getTextContentSize()) {
        if (h.isSegmented()) {
          const N = he(h.getTextContent());
          h.replace(N), h = N;
        }
        be(a.getNode()) || a.type !== "text" || (h = h.spliceText(0, u, "")), m.add(h.__key);
      } else {
        const N = h.getParentOrThrow();
        N.canBeEmpty() || N.getChildrenSize() !== 1 ? h.remove() : N.remove();
      }
      else m.add(h.__key);
      const x = y.getChildren(), w = new Set(c), S = v.is(y), k = v.isInline() && f.getNextSibling() === null ? v : f;
      for (let N = x.length - 1; N >= 0; N--) {
        const C = x[N];
        if (C.is(f) || T(C) && C.isParentOf(f)) break;
        C.isAttached() && (!w.has(C) || C.is(b) ? S || k.insertAfter(C, !1) : C.remove());
      }
      if (!S) {
        let N = y, C = null;
        for (; N !== null; ) {
          const R = N.getChildren(), O = R.length;
          (O === 0 || R[O - 1].is(C)) && (m.delete(N.__key), C = N), N = N.getParent();
        }
      }
      if (Qt(f)) if (l === p) f.select();
      else {
        const N = he(n);
        N.select(), f.replace(N);
      }
      else f = f.spliceText(l, p - l, n, !0), f.getTextContent() === "" ? f.remove() : f.isComposing() && this.anchor.type === "text" && (this.anchor.offset -= n.length);
      for (let N = 1; N < d; N++) {
        const C = c[N], R = C.__key;
        m.has(R) || C.remove();
      }
    }
  }
  removeText() {
    const n = j() === this;
    so(this, z0(jl(this))), n && j() !== this && $e(this);
  }
  formatText(n, t = null) {
    if (this.isCollapsed()) return this.toggleFormat(n), void Ae(null);
    const r = this.getNodes(), o = [];
    for (const x of r) B(x) && o.push(x);
    const i = (x) => {
      r.forEach((w) => {
        if (T(w)) {
          const S = w.getFormatFlags(n, x);
          w.setTextFormat(S);
        }
      });
    }, s = o.length;
    if (s === 0) return this.toggleFormat(n), Ae(null), void i(t);
    const a = this.anchor, l = this.focus, u = this.isBackward(), c = u ? l : a, d = u ? a : l;
    let f = 0, p = o[0], g = c.type === "element" ? 0 : c.offset;
    if (c.type === "text" && g === p.getTextContentSize() && (f = 1, p = o[1], g = 0), p == null) return;
    const h = p.getFormatFlags(n, t);
    i(h);
    const m = s - 1;
    let v = o[m];
    const y = d.type === "text" ? d.offset : v.getTextContentSize();
    if (p.is(v)) {
      if (g === y) return;
      if (bt(p) || g === 0 && y === p.getTextContentSize()) p.setFormat(h);
      else {
        const x = p.splitText(g, y), w = g === 0 ? x[0] : x[1];
        w.setFormat(h), c.type === "text" && c.set(w.__key, 0, "text"), d.type === "text" && d.set(w.__key, y - g, "text");
      }
      return void (this.format = h);
    }
    g === 0 || bt(p) || ([, p] = p.splitText(g), g = 0), p.setFormat(h);
    const b = v.getFormatFlags(n, h);
    y > 0 && (y === v.getTextContentSize() || bt(v) || ([v] = v.splitText(y)), v.setFormat(b));
    for (let x = f + 1; x < m; x++) {
      const w = o[x], S = w.getFormatFlags(n, b);
      w.setFormat(S);
    }
    c.type === "text" && c.set(p.__key, g, "text"), d.type === "text" && d.set(v.__key, y, "text"), this.format = h | b;
  }
  insertNodes(n) {
    if (n.length === 0) return;
    if (this.isCollapsed() || this.removeText(), this.anchor.key === "root") {
      this.insertParagraph();
      const g = j();
      return z(g) || $(134), g.insertNodes(n);
    }
    const t = (this.isBackward() ? this.focus : this.anchor).getNode(), r = Mt(t, Tt), o = n[n.length - 1];
    if (T(r) && "__language" in r) {
      if ("__language" in n[0]) this.insertText(n[0].getTextContent());
      else {
        const g = ki(this);
        r.splice(g, 0, n), o.selectEnd();
      }
      return;
    }
    if (!n.some((g) => (T(g) || ne(g)) && !g.isInline())) {
      T(r) || $(211, t.constructor.name, t.getType());
      const g = ki(this);
      return r.splice(g, 0, n), void o.selectEnd();
    }
    const i = (function(g) {
      const h = ve();
      let m = null;
      for (let v = 0; v < g.length; v++) {
        const y = g[v], b = Xt(y);
        if (b || ne(y) && y.isInline() || T(y) && y.isInline() || B(y) || y.isParentRequired()) {
          if (m === null && (m = y.createParentElementNode(), h.append(m), b)) continue;
          m !== null && m.append(y);
        } else h.append(y), m = null;
      }
      return h;
    })(n), s = i.getLastDescendant(), a = i.getChildren(), l = !T(r) || !r.isEmpty() ? this.insertParagraph() : null, u = a[a.length - 1];
    let c = a[0];
    var d;
    T(d = c) && Tt(d) && !d.isEmpty() && T(r) && (!r.isEmpty() || r.canMergeWhenEmpty()) && (T(r) || $(211, t.constructor.name, t.getType()), r.append(...c.getChildren()), c = a[1]), c && (r === null && $(212, t.constructor.name, t.getType()), (function(g, h) {
      const m = h.getParentOrThrow().getLastChild();
      let v = h;
      const y = [h];
      for (; v !== m; ) v.getNextSibling() || $(140), v = v.getNextSibling(), y.push(v);
      let b = g;
      for (const x of y) b = b.insertAfter(x);
    })(r, c));
    const f = Mt(s, Tt);
    l && T(f) && (l.canMergeWhenEmpty() || Tt(u)) && (f.append(...l.getChildren()), l.remove()), T(r) && r.isEmpty() && r.remove(), s.selectEnd();
    const p = T(r) ? r.getLastChild() : null;
    Xt(p) && f !== r && p.remove();
  }
  insertParagraph() {
    if (this.anchor.key === "root") {
      const s = ve();
      return pe().splice(this.anchor.offset, 0, [s]), s.select(), s;
    }
    const n = ki(this), t = Mt(this.anchor.getNode(), Tt);
    T(t) || $(213);
    const r = t.getChildAtIndex(n), o = r ? [r, ...r.getNextSiblings()] : [], i = t.insertNewAfter(this, !1);
    return i ? (i.append(...o), i.selectStart(), i) : null;
  }
  insertLineBreak(n) {
    const t = et();
    if (this.insertNodes([t]), n) {
      const r = t.getParentOrThrow(), o = t.getIndexWithinParent();
      r.select(o, o);
    }
  }
  extract() {
    const n = [...this.getNodes()], t = n.length;
    let r = n[0], o = n[t - 1];
    const [i, s] = ms(this), a = this.isBackward(), [l, u] = a ? [this.focus, this.anchor] : [this.anchor, this.focus], [c, d] = a ? [s, i] : [i, s];
    if (t === 0) return [];
    if (t === 1) {
      if (B(r) && !this.isCollapsed()) {
        const f = r.splitText(c, d), p = c === 0 ? f[0] : f[1];
        return p ? (l.set(p.getKey(), 0, "text"), u.set(p.getKey(), p.getTextContentSize(), "text"), [p]) : [];
      }
      return [r];
    }
    if (B(r) && (c === r.getTextContentSize() ? n.shift() : c !== 0 && ([, r] = r.splitText(c), n[0] = r, l.set(r.getKey(), 0, "text"))), B(o)) {
      const f = o.getTextContent().length;
      d === 0 ? n.pop() : d !== f && ([o] = o.splitText(d), n[n.length - 1] = o, u.set(o.getKey(), o.getTextContentSize(), "text"));
    }
    return n;
  }
  modify(n, t, r) {
    if (Cl(this, n, t, r)) return;
    const o = n === "move", i = ae(), s = rt(Ge(i));
    if (!s) return;
    const a = i._blockCursorElement, l = i._rootElement, u = this.focus.getNode();
    if (l === null || a === null || !T(u) || u.isInline() || u.canBeEmpty() || _s(a, i, l), this.dirty) {
      let c = ln(i, this.anchor.key), d = ln(i, this.focus.key);
      this.anchor.type === "text" && (c = Mn(c)), this.focus.type === "text" && (d = Mn(d)), c && d && ff(s, c, this.anchor.offset, d, this.focus.offset);
    }
    if ((function(c, d, f, p) {
      c.modify(d, f, p);
    })(s, n, t ? "backward" : "forward", r), s.rangeCount > 0) {
      const c = s.getRangeAt(0), d = this.anchor.getNode(), f = be(d) ? d : C0(d);
      if (this.applyDOMRange(c), this.dirty = !0, !o) {
        const p = this.getNodes(), g = [];
        let h = !1;
        for (let m = 0; m < p.length; m++) {
          const v = p[m];
          xs(v, f) ? g.push(v) : h = !0;
        }
        if (h && g.length > 0) if (t) {
          const m = g[0];
          T(m) ? m.selectStart() : m.getParentOrThrow().selectStart();
        } else {
          const m = g[g.length - 1];
          T(m) ? m.selectEnd() : m.getParentOrThrow().selectEnd();
        }
        s.anchorNode === c.startContainer && s.anchorOffset === c.startOffset || (function(m) {
          const v = m.focus, y = m.anchor, b = y.key, x = y.offset, w = y.type;
          y.set(v.key, v.offset, v.type, !0), v.set(b, x, w, !0);
        })(this);
      }
    }
    r === "lineboundary" && Cl(this, n, t, r, "decorators");
  }
  forwardDeletion(n, t, r) {
    if (!r && (n.type === "element" && T(t) && n.offset === t.getChildrenSize() || n.type === "text" && n.offset === t.getTextContentSize())) {
      const o = t.getParent(), i = t.getNextSibling() || (o === null ? null : o.getNextSibling());
      if (T(i) && i.isShadowRoot()) return !0;
    }
    return !1;
  }
  deleteCharacter(n) {
    const t = this.isCollapsed();
    if (this.isCollapsed()) {
      const r = this.anchor;
      let o = r.getNode();
      if (this.forwardDeletion(r, o, n)) return;
      const i = ya(kt(r, n ? "previous" : "next"));
      if (i.getTextSlices().every((a) => a === null || a.distance === 0)) {
        let a = { type: "initial" };
        for (const l of i.iterNodeCarets("shadowRoot")) if (ut(l)) {
          if (!l.origin.isInline()) {
            if (l.origin.isShadowRoot()) {
              if (a.type === "merge-block") break;
              if (T(i.anchor.origin) && i.anchor.origin.isEmpty()) {
                const u = st(l);
                so(this, Vt(u, u)), i.anchor.origin.remove();
              }
              return;
            }
            a.type !== "merge-next-block" && a.type !== "merge-block" || (a = { block: a.block, caret: l, type: "merge-block" });
          }
        } else {
          if (a.type === "merge-block") break;
          if (Pn(l)) {
            if (T(l.origin)) {
              if (l.origin.isInline()) {
                if (!l.origin.isParentOf(i.anchor.origin)) break;
              } else a = { block: l.origin, type: "merge-next-block" };
              continue;
            }
            if (ne(l.origin)) {
              if (!l.origin.isIsolated()) if (a.type === "merge-next-block" && (l.origin.isKeyboardSelectable() || !l.origin.isInline()) && T(i.anchor.origin) && i.anchor.origin.isEmpty()) {
                i.anchor.origin.remove();
                const u = Ys();
                u.add(l.origin.getKey()), $e(u);
              } else l.origin.remove();
              return;
            }
            break;
          }
        }
        if (a.type === "merge-block") {
          const { caret: l, block: u } = a;
          return so(this, Vt(!l.origin.isEmpty() && u.isEmpty() ? ba(Te(u, l.direction)) : i.anchor, l)), this.removeText();
        }
      }
      const s = this.focus;
      if (this.modify("extend", n, "character"), this.isCollapsed()) {
        if (n && r.offset === 0 && bl(this, r.getNode())) return;
      } else {
        const a = s.type === "text" ? s.getNode() : null;
        if (o = r.type === "text" ? r.getNode() : null, a !== null && a.isSegmented()) {
          const l = s.offset, u = a.getTextContentSize();
          if (a.is(o) || n && l !== u || !n && l !== 0) return void vl(a, n, l);
        } else if (o !== null && o.isSegmented()) {
          const l = r.offset, u = o.getTextContentSize();
          if (o.is(a) || n && l !== 0 || !n && l !== u) return void vl(o, n, l);
        }
        (function(l, u) {
          const c = l.anchor, d = l.focus, f = c.getNode(), p = d.getNode();
          if (f === p && c.type === "text" && d.type === "text") {
            const g = c.offset, h = d.offset, m = g < h, v = m ? g : h, y = m ? h : g, b = y - 1;
            v !== b && (function(x) {
              return !(Nf(x) || s0(x));
            })(f.getTextContent().slice(v, y)) && (u ? d.set(d.key, b, d.type) : c.set(c.key, b, c.type));
          }
        })(this, n);
      }
    }
    if (this.removeText(), n && !t && this.isCollapsed() && this.anchor.type === "element" && this.anchor.offset === 0) {
      const r = this.anchor.getNode();
      r.isEmpty() && be(r.getParent()) && r.getPreviousSibling() === null && bl(this, r);
    }
  }
  deleteLine(n) {
    this.isCollapsed() && this.modify("extend", n, "lineboundary"), this.isCollapsed() ? this.deleteCharacter(n) : this.removeText();
  }
  deleteWord(n) {
    if (this.isCollapsed()) {
      const t = this.anchor, r = t.getNode();
      if (this.forwardDeletion(t, r, n)) return;
      this.modify("extend", n, "word");
    }
    this.removeText();
  }
  isBackward() {
    return this.focus.isBefore(this.anchor);
  }
  getStartEndPoints() {
    return [this.anchor, this.focus];
  }
}
function Ie(e) {
  return e instanceof qo;
}
function yl(e) {
  const n = e.offset;
  if (e.type === "text") return n;
  const t = e.getNode();
  return n === t.getChildrenSize() ? t.getTextContent().length : 0;
}
function ms(e) {
  const n = e.getStartEndPoints();
  if (n === null) return [0, 0];
  const [t, r] = n;
  return t.type === "element" && r.type === "element" && t.key === r.key && t.offset === r.offset ? [0, 0] : [yl(t), yl(r)];
}
function bl(e, n) {
  for (let t = n; t; t = t.getParent()) {
    if (T(t)) {
      if (t.collapseAtStart(e)) return !0;
      if (Ue(t)) break;
    }
    if (t.getPreviousSibling()) break;
  }
  return !1;
}
const s0 = (() => {
  try {
    const e = new RegExp("\\p{Emoji}", "u"), n = e.test.bind(e);
    if (n("❤️") && n("#️⃣") && n("👍")) return n;
  } catch {
  }
  return () => !1;
})();
function vl(e, n, t) {
  const r = e, o = r.getTextContent().split(/(?=\s)/g), i = o.length;
  let s = 0, a = 0;
  for (let u = 0; u < i; u++) {
    const c = u === i - 1;
    if (a = s, s += o[u].length, n && s === t || s > t || c) {
      o.splice(u, 1), c && (a = void 0);
      break;
    }
  }
  const l = o.join("").trim();
  l === "" ? r.remove() : (r.setTextContent(l), r.select(a, a));
}
function xl(e, n, t, r) {
  let o, i = n;
  if (xe(e)) {
    let s = !1;
    const a = e.childNodes, l = a.length, u = r._blockCursorElement;
    i === l && (s = !0, i = l - 1);
    let c = a[i], d = !1;
    if (c === u) c = a[i + 1], d = !0;
    else if (u !== null) {
      const f = u.parentNode;
      e === f && n > Array.prototype.indexOf.call(f.children, u) && i--;
    }
    if (o = Cn(c), B(o)) i = Pt(o, s ? "next" : "previous");
    else {
      let f = Cn(e);
      if (f === null) return null;
      if (T(f)) {
        const p = r.getElementByKey(f.getKey());
        p === null && $(214), [f, i] = f.getDOMSlot(p).resolveChildIndex(f, p, e, n), T(f) || $(215), s && i >= f.getChildrenSize() && (i = Math.max(0, f.getChildrenSize() - 1));
        let h = f.getChildAtIndex(i);
        if (T(h) && (function(m, v, y) {
          const b = m.getParent();
          return y === null || b === null || !b.canBeEmpty() || b !== y.getNode();
        })(h, 0, t)) {
          const m = s ? h.getLastDescendant() : h.getFirstDescendant();
          m === null ? f = h : (h = m, f = T(h) ? h : h.getParentOrThrow()), i = 0;
        }
        B(h) ? (o = h, f = null, i = Pt(h, s ? "next" : "previous")) : h !== f && s && !d && (T(f) || $(216), i = Math.min(f.getChildrenSize(), i + 1));
      } else {
        const p = f.getIndexWithinParent();
        i = n === 0 && ne(f) && Cn(e) === f ? p : p + 1, f = f.getParentOrThrow();
      }
      if (T(f)) return dt(f.__key, i, "element");
    }
  } else o = Cn(e);
  return B(o) ? dt(o.__key, Pt(o, i, "clamp"), "text") : null;
}
function _l(e, n, t) {
  const r = e.offset, o = e.getNode();
  if (r === 0) {
    const i = o.getPreviousSibling(), s = o.getParent();
    if (n) {
      if ((t || !n) && i === null && T(s) && s.isInline()) {
        const a = s.getPreviousSibling();
        B(a) && e.set(a.__key, a.getTextContent().length, "text");
      }
    } else T(i) && !t && i.isInline() ? e.set(i.__key, i.getChildrenSize(), "element") : B(i) && e.set(i.__key, i.getTextContent().length, "text");
  } else if (r === o.getTextContent().length) {
    const i = o.getNextSibling(), s = o.getParent();
    if (n && T(i) && i.isInline()) e.set(i.__key, 0, "element");
    else if ((t || n) && i === null && T(s) && s.isInline() && !s.canInsertTextAfter()) {
      const a = s.getNextSibling();
      B(a) && e.set(a.__key, 0, "text");
    }
  }
}
function uf(e, n, t) {
  if (e.type === "text" && n.type === "text") {
    const r = e.isBefore(n), o = e.is(n);
    _l(e, r, o), _l(n, !r, o), o && n.set(e.key, e.offset, e.type);
    const i = ae();
    if (i.isComposing() && i._compositionKey !== e.key && z(t)) {
      const s = t.anchor, a = t.focus;
      e.set(s.key, s.offset, s.type, !0), n.set(a.key, a.offset, a.type, !0);
    }
  }
}
function cf(e, n, t, r, o, i) {
  if (e === null || t === null || !Ir(o, e, t)) return null;
  const s = xl(e, n, z(i) ? i.anchor : null, o);
  if (s === null) return null;
  const a = xl(t, r, z(i) ? i.focus : null, o);
  if (a === null) return null;
  if (s.type === "element" && a.type === "element") {
    const l = Cn(e), u = Cn(t);
    if (ne(l) && ne(u)) return null;
  }
  return uf(s, a, i), [s, a];
}
function ys(e) {
  return T(e) && !e.isInline();
}
function df(e, n, t, r, o, i) {
  const s = Gt(), a = new gn(dt(e, n, o), dt(t, r, i), 0, "");
  return a.dirty = !0, s._selection = a, a;
}
function Js() {
  const e = dt("root", 0, "element"), n = dt("root", 0, "element");
  return new gn(e, n, 0, "");
}
function Ys() {
  return new qo(/* @__PURE__ */ new Set());
}
function Xs(e, n, t, r) {
  const o = t._window;
  if (o === null) return null;
  const i = r || o.event, s = i ? i.type : void 0, a = s === "selectionchange", l = !Qi && (a || s === "beforeinput" || s === "compositionstart" || s === "compositionend" || s === "click" && i && i.detail === 3 || s === "drop" || s === void 0);
  let u, c, d, f;
  if (z(e) && !l) return e.clone();
  if (n === null) return null;
  if (u = n.anchorNode, c = n.focusNode, d = n.anchorOffset, f = n.focusOffset, (a || s === void 0) && z(e) && !Ir(t, u, c)) return e.clone();
  const p = cf(u, d, c, f, t, e);
  if (p === null) return null;
  const [g, h] = p;
  return new gn(g, h, z(e) ? e.format : 0, z(e) ? e.style : "");
}
function j() {
  return Gt()._selection;
}
function Wn() {
  return ae()._editorState._selection;
}
function ko(e, n, t, r = 1) {
  const o = e.anchor, i = e.focus, s = o.getNode(), a = i.getNode();
  if (!n.is(s) && !n.is(a)) return;
  const l = n.__key;
  if (e.isCollapsed()) {
    const u = o.offset;
    if (t <= u && r > 0 || t < u && r < 0) {
      const c = Math.max(0, u + r);
      o.set(l, c, "element"), i.set(l, c, "element"), wl(e);
    }
  } else {
    const u = e.isBackward(), c = u ? i : o, d = c.getNode(), f = u ? o : i, p = f.getNode();
    if (n.is(d)) {
      const g = c.offset;
      (t <= g && r > 0 || t < g && r < 0) && c.set(l, Math.max(0, g + r), "element");
    }
    if (n.is(p)) {
      const g = f.offset;
      (t <= g && r > 0 || t < g && r < 0) && f.set(l, Math.max(0, g + r), "element");
    }
  }
  wl(e);
}
function wl(e) {
  const n = e.anchor, t = n.offset, r = e.focus, o = r.offset, i = n.getNode(), s = r.getNode();
  if (e.isCollapsed()) {
    if (!T(i)) return;
    const a = i.getChildrenSize(), l = t >= a, u = l ? i.getChildAtIndex(a - 1) : i.getChildAtIndex(t);
    if (B(u)) {
      let c = 0;
      l && (c = u.getTextContentSize()), n.set(u.__key, c, "text"), r.set(u.__key, c, "text");
    }
    return;
  }
  if (T(i)) {
    const a = i.getChildrenSize(), l = t >= a, u = l ? i.getChildAtIndex(a - 1) : i.getChildAtIndex(t);
    if (B(u)) {
      let c = 0;
      l && (c = u.getTextContentSize()), n.set(u.__key, c, "text");
    }
  }
  if (T(s)) {
    const a = s.getChildrenSize(), l = o >= a, u = l ? s.getChildAtIndex(a - 1) : s.getChildAtIndex(o);
    if (B(u)) {
      let c = 0;
      l && (c = u.getTextContentSize()), r.set(u.__key, c, "text");
    }
  }
}
function Eo(e, n, t, r, o) {
  let i = null, s = 0, a = null;
  r !== null ? (i = r.__key, B(r) ? (s = r.getTextContentSize(), a = "text") : T(r) && (s = r.getChildrenSize(), a = "element")) : o !== null && (i = o.__key, B(o) ? a = "text" : T(o) && (a = "element")), i !== null && a !== null ? e.set(i, s, a) : (s = n.getIndexWithinParent(), s === -1 && (s = t.getChildrenSize()), e.set(t.__key, s, "element"));
}
function Sl(e, n, t, r, o) {
  e.type === "text" ? e.set(t, e.offset + (n ? 0 : o), "text") : e.offset > r.getIndexWithinParent() && e.set(e.key, e.offset - 1, "element");
}
function ff(e, n, t, r, o) {
  try {
    e.setBaseAndExtent(n, t, r, o);
  } catch {
  }
}
function a0(e, n, t, r, o, i, s) {
  const a = r.anchorNode, l = r.focusNode, u = r.anchorOffset, c = r.focusOffset, d = document.activeElement;
  if (o.has(sf) && d !== i || d !== null && ia(d)) return;
  if (!z(n)) return void (e !== null && Ir(t, a, l) && r.removeAllRanges());
  const f = n.anchor, p = n.focus, g = f.key, h = p.key, m = ln(t, g), v = ln(t, h), y = f.offset, b = p.offset, x = n.format, w = n.style, S = n.isCollapsed();
  let k = m, N = v, C = !1;
  if (f.type === "text") {
    k = Mn(m);
    const M = f.getNode();
    C = M.getFormat() !== x || M.getStyle() !== w;
  } else z(e) && e.anchor.type === "text" && (C = !0);
  var R, O, F, U, L;
  if (p.type === "text" && (N = Mn(v)), k !== null && N !== null && (S && (e === null || C || z(e) && (e.format !== x || e.style !== w)) && (R = x, O = w, F = y, U = g, L = performance.now(), Xd = [R, O, F, U, L]), u !== y || c !== b || a !== k || l !== N || r.type === "Range" && S || (d !== null && i.contains(d) || o.has(Xv) || i.focus({ preventScroll: !0 }), f.type === "element"))) {
    if (ff(r, k, y, N, b), !o.has(Jv) && n.isCollapsed() && i !== null && i === document.activeElement) {
      const M = z(n) && n.anchor.type === "element" ? k.childNodes[y] || null : r.rangeCount > 0 ? r.getRangeAt(0) : null;
      if (M !== null) {
        let G;
        if (M instanceof Text) {
          const H = document.createRange();
          H.selectNode(M), G = H.getBoundingClientRect();
        } else G = M.getBoundingClientRect();
        (function(H, J, ee) {
          const oe = Ff(ee), W = da(oe);
          if (oe === null || W === null) return;
          let { top: Y, bottom: ue } = J, ge = 0, me = 0, Re = ee;
          for (; Re !== null; ) {
            const De = Re === oe.body;
            if (De) ge = 0, me = Ge(H).innerHeight;
            else {
              const Ke = Re.getBoundingClientRect();
              ge = Ke.top, me = Ke.bottom;
            }
            let We = 0;
            if (Y < ge ? We = -(ge - Y) : ue > me && (We = ue - me), We !== 0) if (De) W.scrollBy(0, We);
            else {
              const Ke = Re.scrollTop;
              Re.scrollTop += We;
              const mn = Re.scrollTop - Ke;
              Y -= mn, ue -= mn;
            }
            if (De) break;
            Re = Or(Re);
          }
        })(t, G, i);
      }
    }
    ds = !0;
  }
}
function l0(e) {
  let n = j() || Wn();
  n === null && (n = pe().selectEnd()), n.insertNodes(e);
}
function ki(e) {
  let n = e;
  e.isCollapsed() || n.removeText();
  const t = j();
  z(t) && (n = t), z(n) || $(161);
  const r = n.anchor;
  let o = r.getNode(), i = r.offset;
  for (; !Tt(o); ) {
    const s = o;
    if ([o, i] = u0(o, i), s.is(o)) break;
  }
  return i;
}
function u0(e, n) {
  const t = e.getParent();
  if (!t) {
    const o = ve();
    return pe().append(o), o.select(), [pe(), 0];
  }
  if (B(e)) {
    const o = e.splitText(n);
    if (o.length === 0) return [t, e.getIndexWithinParent()];
    const i = n === 0 ? 0 : 1;
    return [t, o[0].getIndexWithinParent() + i];
  }
  if (!T(e) || n === 0) return [t, e.getIndexWithinParent()];
  const r = e.getChildAtIndex(n);
  if (r) {
    const o = new gn(dt(e.__key, n, "element"), dt(e.__key, n, "element"), 0, ""), i = e.insertNewAfter(o);
    i && i.append(r, ...r.getNextSiblings());
  }
  return [t, e.getIndexWithinParent() + 1];
}
function Cl(e, n, t, r, o = "decorators-and-blocks") {
  if (n === "move" && r === "character" && !e.isCollapsed()) {
    const [c, d] = t === e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus];
    return d.set(c.key, c.offset, c.type), !0;
  }
  const i = kt(e.focus, t ? "previous" : "next"), s = r === "lineboundary", a = n === "move";
  let l = i, u = o === "decorators-and-blocks";
  if (!Df(l)) {
    for (const c of l) {
      u = !1;
      const { origin: d } = c;
      if (!ne(d) || d.isIsolated() || (l = c, !s || !d.isInline())) break;
    }
    if (u) for (const c of ya(i).iterNodeCarets(n === "extend" ? "shadowRoot" : "root")) {
      if (ut(c)) c.origin.isInline() || (l = c);
      else {
        if (T(c.origin)) continue;
        ne(c.origin) && !c.origin.isInline() && (l = c);
      }
      break;
    }
  }
  if (l === i) return !1;
  if (a && !s && ne(l.origin) && l.origin.isKeyboardSelectable()) {
    const c = Ys();
    return c.add(l.origin.getKey()), $e(c), !0;
  }
  return l = st(l), a && Sr(e.anchor, l), Sr(e.focus, l), u || !s;
}
let Ee = null, Ne = null, Le = !1, Ei = !1, oo = 0;
const kl = { characterData: !0, childList: !0, subtree: !0 };
function Ar() {
  return Le || Ee !== null && Ee._readOnly;
}
function ke() {
  Le && $(13);
}
function gf() {
  oo > 99 && $(14);
}
function Gt() {
  return Ee === null && $(195, pf()), Ee;
}
function ae() {
  return Ne === null && $(196, pf()), Ne;
}
function pf() {
  let e = 0;
  const n = /* @__PURE__ */ new Set(), t = an.version;
  if (typeof window < "u") for (const o of document.querySelectorAll("[contenteditable]")) {
    const i = Jo(o);
    if (sa(i)) e++;
    else if (i) {
      let s = String(i.constructor.version || "<0.17.1");
      s === t && (s += " (separately built, likely a bundler configuration issue)"), n.add(s);
    }
  }
  let r = ` Detected on the page: ${e} compatible editor(s) with version ${t}`;
  return n.size && (r += ` and incompatible editors with versions ${Array.from(n).join(", ")}`), r;
}
function c0() {
  return Ne;
}
function El(e, n, t) {
  const r = n.__type, o = xf(e, r);
  let i = t.get(r);
  i === void 0 && (i = Array.from(o.transforms), t.set(r, i));
  const s = i.length;
  for (let a = 0; a < s && (i[a](n), n.isAttached()); a++) ;
}
function Nl(e, n) {
  return e !== void 0 && e.__key !== n && e.isAttached();
}
function hf(e, n) {
  if (!n) return;
  const t = e._updateTags;
  let r = n;
  Array.isArray(n) || (r = [n]);
  for (const o of r) t.add(o);
}
function d0(e) {
  return Qs(e, ae()._nodes);
}
function Qs(e, n) {
  const t = e.type, r = n.get(t);
  r === void 0 && $(17, t);
  const o = r.klass;
  e.type !== o.getType() && $(18, o.name);
  const i = o.importJSON(e), s = e.children;
  if (T(i) && Array.isArray(s)) for (let a = 0; a < s.length; a++) {
    const l = Qs(s[a], n);
    i.append(l);
  }
  return i;
}
function Rl(e, n, t) {
  const r = Ee, o = Le, i = Ne;
  Ee = n, Le = !0, Ne = e;
  try {
    return t();
  } finally {
    Ee = r, Le = o, Ne = i;
  }
}
function xt(e, n) {
  const t = e._pendingEditorState, r = e._rootElement, o = e._headless || r === null;
  if (t === null) return;
  const i = e._editorState, s = i._selection, a = t._selection, l = e._dirtyType !== 0, u = Ee, c = Le, d = Ne, f = e._updating, p = e._observer;
  let g = null;
  if (e._pendingEditorState = null, e._editorState = t, !o && l && p !== null) {
    Ne = e, Ee = t, Le = !1, e._updating = !0;
    try {
      const S = e._dirtyType, k = e._dirtyElements, N = e._dirtyLeaves;
      p.disconnect(), g = Av(i, t, e, S, k, N);
    } catch (S) {
      if (S instanceof Error && e._onError(S), Ei) throw S;
      return bf(e, null, r, t), Sd(e), e._dirtyType = 2, Ei = !0, xt(e, i), void (Ei = !1);
    } finally {
      p.observe(r, kl), e._updating = f, Ee = u, Le = c, Ne = d;
    }
  }
  t._readOnly || (t._readOnly = !0);
  const h = e._dirtyLeaves, m = e._dirtyElements, v = e._normalizedNodes, y = e._updateTags, b = e._deferred;
  l && (e._dirtyType = 0, e._cloneNotNeeded.clear(), e._dirtyLeaves = /* @__PURE__ */ new Set(), e._dirtyElements = /* @__PURE__ */ new Map(), e._normalizedNodes = /* @__PURE__ */ new Set(), e._updateTags = /* @__PURE__ */ new Set()), (function(S, k) {
    const N = S._decorators;
    let C = S._pendingDecorators || N;
    const R = k._nodeMap;
    let O;
    for (O in C) R.has(O) || (C === N && (C = kf(S)), delete C[O]);
  })(e, t);
  const x = o ? null : rt(Ge(e));
  if (e._editable && x !== null && (l || a === null || a.dirty || !a.is(s)) && r !== null && !y.has(Yv)) {
    Ne = e, Ee = t;
    try {
      if (p !== null && p.disconnect(), l || a === null || a.dirty) {
        const S = e._blockCursorElement;
        S !== null && _s(S, e, r), a0(s, a, e, x, y, r);
      }
      (function(S, k, N) {
        let C = S._blockCursorElement;
        if (z(N) && N.isCollapsed() && N.anchor.type === "element" && k.contains(document.activeElement)) {
          const R = N.anchor, O = R.getNode(), F = R.offset;
          let U = !1, L = null;
          if (F === O.getChildrenSize())
            Ri(O.getChildAtIndex(F - 1)) && (U = !0);
          else {
            const M = O.getChildAtIndex(F);
            if (M !== null && Ri(M)) {
              const G = M.getPreviousSibling();
              (G === null || Ri(G)) && (U = !0, L = S.getElementByKey(M.__key));
            }
          }
          if (U) {
            const M = S.getElementByKey(O.__key);
            return C === null && (S._blockCursorElement = C = (function(G) {
              const H = G.theme, J = document.createElement("div");
              J.contentEditable = "false", J.setAttribute("data-lexical-cursor", "true");
              let ee = H.blockCursor;
              if (ee !== void 0) {
                if (typeof ee == "string") {
                  const oe = bd(ee);
                  ee = H.blockCursor = oe;
                }
                ee !== void 0 && J.classList.add(...ee);
              }
              return J;
            })(S._config)), k.style.caretColor = "transparent", void (L === null ? M.appendChild(C) : M.insertBefore(C, L));
          }
        }
        C !== null && _s(C, S, k);
      })(e, r, a);
    } finally {
      p !== null && p.observe(r, kl), Ne = d, Ee = u;
    }
  }
  g !== null && (function(S, k, N, C, R) {
    const O = Array.from(S._listeners.mutation), F = O.length;
    for (let U = 0; U < F; U++) {
      const [L, M] = O[U];
      for (const G of M) {
        const H = k.get(G);
        H !== void 0 && L(H, { dirtyLeaves: C, prevEditorState: R, updateTags: N });
      }
    }
  })(e, g, y, h, i), z(a) || a === null || s !== null && s.is(a) || e.dispatchCommand(Id, void 0);
  const w = e._pendingDecorators;
  w !== null && (e._decorators = w, e._pendingDecorators = null, dr("decorator", e, !0, w)), (function(S, k, N) {
    const C = Il(k), R = Il(N);
    C !== R && dr("textcontent", S, !0, R);
  })(e, n || i, t), dr("update", e, !0, { dirtyElements: m, dirtyLeaves: h, editorState: t, mutatedNodes: g, normalizedNodes: v, prevEditorState: n || i, tags: y }), (function(S, k) {
    if (S._deferred = [], k.length !== 0) {
      const N = S._updating;
      S._updating = !0;
      try {
        for (let C = 0; C < k.length; C++) k[C]();
      } finally {
        S._updating = N;
      }
    }
  })(e, b), (function(S) {
    const k = S._updates;
    if (k.length !== 0) {
      const N = k.shift();
      if (N) {
        const [C, R] = N;
        Zo(S, C, R);
      }
    }
  })(e);
}
function dr(e, n, t, ...r) {
  const o = n._updating;
  n._updating = t;
  try {
    const i = Array.from(n._listeners[e]);
    for (let s = 0; s < i.length; s++) i[s].apply(null, r);
  } finally {
    n._updating = o;
  }
}
function Al(e, n) {
  const t = e._updates;
  let r = n || !1;
  for (; t.length !== 0; ) {
    const o = t.shift();
    if (o) {
      const [i, s] = o, a = e._pendingEditorState;
      let l;
      s !== void 0 && (l = s.onUpdate, s.skipTransforms && (r = !0), s.discrete && (a === null && $(191), a._flushSync = !0), l && e._deferred.push(l), hf(e, s.tag)), a == null ? Zo(e, i, s) : i();
    }
  }
  return r;
}
function Zo(e, n, t) {
  const r = e._updateTags;
  let o, i = !1, s = !1;
  t !== void 0 && (o = t.onUpdate, hf(e, t.tag), i = t.skipTransforms || !1, s = t.discrete || !1), o && e._deferred.push(o);
  const a = e._editorState;
  let l = e._pendingEditorState, u = !1;
  (l === null || l._readOnly) && (l = e._pendingEditorState = mf(l || a), u = !0), l._flushSync = s;
  const c = Ee, d = Le, f = Ne, p = e._updating;
  Ee = l, Le = !1, e._updating = !0, Ne = e;
  const g = e._headless || e.getRootElement() === null;
  ra(null);
  try {
    u && (g ? a._selection !== null && (l._selection = a._selection.clone()) : l._selection = (function(y, b) {
      const x = y.getEditorState()._selection, w = rt(Ge(y));
      return z(x) || x == null ? Xs(x, w, y, b) : x.clone();
    })(e, t && t.event || null));
    const m = e._compositionKey;
    n(), i = Al(e, i), (function(y, b) {
      const x = b.getEditorState()._selection, w = y._selection;
      if (z(w)) {
        const S = w.anchor, k = w.focus;
        let N;
        if (S.type === "text" && (N = S.getNode(), N.selectionTransform(x, w)), k.type === "text") {
          const C = k.getNode();
          N !== C && C.selectionTransform(x, w);
        }
      }
    })(l, e), e._dirtyType !== 0 && (i ? (function(y, b) {
      const x = b._dirtyLeaves, w = y._nodeMap;
      for (const S of x) {
        const k = w.get(S);
        B(k) && k.isAttached() && k.isSimpleText() && !k.isUnmergeable() && il(k);
      }
    })(l, e) : (function(y, b) {
      const x = b._dirtyLeaves, w = b._dirtyElements, S = y._nodeMap, k = Ot(), N = /* @__PURE__ */ new Map();
      let C = x, R = C.size, O = w, F = O.size;
      for (; R > 0 || F > 0; ) {
        if (R > 0) {
          b._dirtyLeaves = /* @__PURE__ */ new Set();
          for (const U of C) {
            const L = S.get(U);
            B(L) && L.isAttached() && L.isSimpleText() && !L.isUnmergeable() && il(L), L !== void 0 && Nl(L, k) && El(b, L, N), x.add(U);
          }
          if (C = b._dirtyLeaves, R = C.size, R > 0) {
            oo++;
            continue;
          }
        }
        b._dirtyLeaves = /* @__PURE__ */ new Set(), b._dirtyElements = /* @__PURE__ */ new Map(), O.delete("root") && O.set("root", !0);
        for (const U of O) {
          const L = U[0], M = U[1];
          if (w.set(L, M), !M) continue;
          const G = S.get(L);
          G !== void 0 && Nl(G, k) && El(b, G, N);
        }
        C = b._dirtyLeaves, R = C.size, O = b._dirtyElements, F = O.size, oo++;
      }
      b._dirtyLeaves = x, b._dirtyElements = w;
    })(l, e), Al(e), (function(y, b, x, w) {
      const S = y._nodeMap, k = b._nodeMap, N = [];
      for (const [C] of w) {
        const R = k.get(C);
        R !== void 0 && (R.isAttached() || (T(R) && xd(R, C, S, k, N, w), S.has(C) || w.delete(C), N.push(C)));
      }
      for (const C of N) k.delete(C);
      for (const C of x) {
        const R = k.get(C);
        R === void 0 || R.isAttached() || (S.has(C) || x.delete(C), k.delete(C));
      }
    })(a, l, e._dirtyLeaves, e._dirtyElements)), m !== e._compositionKey && (l._flushSync = !0);
    const v = l._selection;
    if (z(v)) {
      const y = l._nodeMap, b = v.anchor.key, x = v.focus.key;
      y.get(b) !== void 0 && y.get(x) !== void 0 || $(19);
    } else Ie(v) && v._nodes.size === 0 && (l._selection = null);
  } catch (m) {
    return m instanceof Error && e._onError(m), e._pendingEditorState = a, e._dirtyType = 2, e._cloneNotNeeded.clear(), e._dirtyLeaves = /* @__PURE__ */ new Set(), e._dirtyElements.clear(), void xt(e);
  } finally {
    Ee = c, Le = d, Ne = f, e._updating = p, oo = 0;
  }
  e._dirtyType !== 0 || e._deferred.length > 0 || (function(m, v) {
    const y = v.getEditorState()._selection, b = m._selection;
    if (b !== null) {
      if (b.dirty || !b.is(y)) return !0;
    } else if (y !== null) return !0;
    return !1;
  })(l, e) ? l._flushSync ? (l._flushSync = !1, xt(e)) : u && b0(() => {
    xt(e);
  }) : (l._flushSync = !1, u && (r.clear(), e._deferred = [], e._pendingEditorState = null));
}
function lt(e, n, t) {
  Ne === e && t === void 0 ? n() : Zo(e, n, t);
}
class fr {
  constructor(n, t, r) {
    A(this, "element");
    A(this, "before");
    A(this, "after");
    this.element = n, this.before = t || null, this.after = r || null;
  }
  withBefore(n) {
    return new fr(this.element, n, this.after);
  }
  withAfter(n) {
    return new fr(this.element, this.before, n);
  }
  withElement(n) {
    return this.element === n ? this : new fr(n, this.before, this.after);
  }
  insertChild(n) {
    const t = this.before || this.getManagedLineBreak();
    return t !== null && t.parentElement !== this.element && $(222), this.element.insertBefore(n, t), this;
  }
  removeChild(n) {
    return n.parentElement !== this.element && $(223), this.element.removeChild(n), this;
  }
  replaceChild(n, t) {
    return t.parentElement !== this.element && $(224), this.element.replaceChild(n, t), this;
  }
  getFirstChild() {
    const n = this.after ? this.after.nextSibling : this.element.firstChild;
    return n === this.before || n === this.getManagedLineBreak() ? null : n;
  }
  getManagedLineBreak() {
    return this.element.__lexicalLineBreak || null;
  }
  setManagedLineBreak(n) {
    if (n === null) this.removeManagedLineBreak();
    else {
      const t = n === "decorator" && (Rr || jn || Nr);
      this.insertManagedLineBreak(t);
    }
  }
  removeManagedLineBreak() {
    const n = this.getManagedLineBreak();
    if (n) {
      const t = this.element, r = n.nodeName === "IMG" ? n.nextSibling : null;
      r && t.removeChild(r), t.removeChild(n), t.__lexicalLineBreak = void 0;
    }
  }
  insertManagedLineBreak(n) {
    const t = this.getManagedLineBreak();
    if (t) {
      if (n === (t.nodeName === "IMG")) return;
      this.removeManagedLineBreak();
    }
    const r = this.element, o = this.before, i = document.createElement("br");
    if (r.insertBefore(i, o), n) {
      const s = document.createElement("img");
      s.setAttribute("data-lexical-linebreak", "true"), s.style.cssText = "display: inline !important; border: 0px !important; margin: 0px !important;", s.alt = "", r.insertBefore(s, i), r.__lexicalLineBreak = s;
    } else r.__lexicalLineBreak = i;
  }
  getFirstChildOffset() {
    let n = 0;
    for (let t = this.after; t !== null; t = t.previousSibling) n++;
    return n;
  }
  resolveChildIndex(n, t, r, o) {
    if (r === this.element) {
      const l = this.getFirstChildOffset();
      return [n, Math.min(l + n.getChildrenSize(), Math.max(l, o))];
    }
    const i = Tl(t, r);
    i.push(o);
    const s = Tl(t, this.element);
    let a = n.getIndexWithinParent();
    for (let l = 0; l < s.length; l++) {
      const u = i[l], c = s[l];
      if (u === void 0 || u < c) break;
      if (u > c) {
        a += 1;
        break;
      }
    }
    return [n.getParentOrThrow(), a];
  }
}
function Tl(e, n) {
  const t = [];
  let r = n;
  for (; r !== e && r !== null; r = r.parentNode) {
    let o = 0;
    for (let i = r.previousSibling; i !== null; i = i.previousSibling) o++;
    t.push(o);
  }
  return r !== e && $(225), t.reverse();
}
class je extends Ye {
  constructor(t) {
    super(t);
    A(this, "__first");
    A(this, "__last");
    A(this, "__size");
    A(this, "__format");
    A(this, "__style");
    A(this, "__indent");
    A(this, "__dir");
    A(this, "__textFormat");
    A(this, "__textStyle");
    this.__first = null, this.__last = null, this.__size = 0, this.__format = 0, this.__style = "", this.__indent = 0, this.__dir = null, this.__textFormat = 0, this.__textStyle = "";
  }
  afterCloneFrom(t) {
    super.afterCloneFrom(t), this.__key === t.__key && (this.__first = t.__first, this.__last = t.__last, this.__size = t.__size), this.__indent = t.__indent, this.__format = t.__format, this.__style = t.__style, this.__dir = t.__dir, this.__textFormat = t.__textFormat, this.__textStyle = t.__textStyle;
  }
  getFormat() {
    return this.getLatest().__format;
  }
  getFormatType() {
    const t = this.getFormat();
    return hv[t] || "";
  }
  getStyle() {
    return this.getLatest().__style;
  }
  getIndent() {
    return this.getLatest().__indent;
  }
  getChildren() {
    const t = [];
    let r = this.getFirstChild();
    for (; r !== null; ) t.push(r), r = r.getNextSibling();
    return t;
  }
  getChildrenKeys() {
    const t = [];
    let r = this.getFirstChild();
    for (; r !== null; ) t.push(r.__key), r = r.getNextSibling();
    return t;
  }
  getChildrenSize() {
    return this.getLatest().__size;
  }
  isEmpty() {
    return this.getChildrenSize() === 0;
  }
  isDirty() {
    const t = ae()._dirtyElements;
    return t !== null && t.has(this.__key);
  }
  isLastChild() {
    const t = this.getLatest(), r = this.getParentOrThrow().getLastChild();
    return r !== null && r.is(t);
  }
  getAllTextNodes() {
    const t = [];
    let r = this.getFirstChild();
    for (; r !== null; ) {
      if (B(r) && t.push(r), T(r)) {
        const o = r.getAllTextNodes();
        t.push(...o);
      }
      r = r.getNextSibling();
    }
    return t;
  }
  getFirstDescendant() {
    let t = this.getFirstChild();
    for (; T(t); ) {
      const r = t.getFirstChild();
      if (r === null) break;
      t = r;
    }
    return t;
  }
  getLastDescendant() {
    let t = this.getLastChild();
    for (; T(t); ) {
      const r = t.getLastChild();
      if (r === null) break;
      t = r;
    }
    return t;
  }
  getDescendantByIndex(t) {
    const r = this.getChildren(), o = r.length;
    if (t >= o) {
      const s = r[o - 1];
      return T(s) && s.getLastDescendant() || s || null;
    }
    const i = r[t];
    return T(i) && i.getFirstDescendant() || i || null;
  }
  getFirstChild() {
    const t = this.getLatest().__first;
    return t === null ? null : we(t);
  }
  getFirstChildOrThrow() {
    const t = this.getFirstChild();
    return t === null && $(45, this.__key), t;
  }
  getLastChild() {
    const t = this.getLatest().__last;
    return t === null ? null : we(t);
  }
  getLastChildOrThrow() {
    const t = this.getLastChild();
    return t === null && $(96, this.__key), t;
  }
  getChildAtIndex(t) {
    const r = this.getChildrenSize();
    let o, i;
    if (t < r / 2) {
      for (o = this.getFirstChild(), i = 0; o !== null && i <= t; ) {
        if (i === t) return o;
        o = o.getNextSibling(), i++;
      }
      return null;
    }
    for (o = this.getLastChild(), i = r - 1; o !== null && i >= t; ) {
      if (i === t) return o;
      o = o.getPreviousSibling(), i--;
    }
    return null;
  }
  getTextContent() {
    let t = "";
    const r = this.getChildren(), o = r.length;
    for (let i = 0; i < o; i++) {
      const s = r[i];
      t += s.getTextContent(), T(s) && i !== o - 1 && !s.isInline() && (t += Bt);
    }
    return t;
  }
  getTextContentSize() {
    let t = 0;
    const r = this.getChildren(), o = r.length;
    for (let i = 0; i < o; i++) {
      const s = r[i];
      t += s.getTextContentSize(), T(s) && i !== o - 1 && !s.isInline() && (t += 2);
    }
    return t;
  }
  getDirection() {
    return this.getLatest().__dir;
  }
  getTextFormat() {
    return this.getLatest().__textFormat;
  }
  hasFormat(t) {
    if (t !== "") {
      const r = Ya[t];
      return (this.getFormat() & r) !== 0;
    }
    return !1;
  }
  hasTextFormat(t) {
    const r = rn[t];
    return (this.getTextFormat() & r) !== 0;
  }
  getFormatFlags(t, r) {
    return No(this.getLatest().__textFormat, t, r);
  }
  getTextStyle() {
    return this.getLatest().__textStyle;
  }
  select(t, r) {
    ke();
    const o = j();
    let i = t, s = r;
    const a = this.getChildrenSize();
    if (!this.canBeEmpty()) {
      if (t === 0 && r === 0) {
        const u = this.getFirstChild();
        if (B(u) || T(u)) return u.select(0, 0);
      } else if (!(t !== void 0 && t !== a || r !== void 0 && r !== a)) {
        const u = this.getLastChild();
        if (B(u) || T(u)) return u.select();
      }
    }
    i === void 0 && (i = a), s === void 0 && (s = a);
    const l = this.__key;
    return z(o) ? (o.anchor.set(l, i, "element"), o.focus.set(l, s, "element"), o.dirty = !0, o) : df(l, i, l, s, "element", "element");
  }
  selectStart() {
    const t = this.getFirstDescendant();
    return t ? t.selectStart() : this.select();
  }
  selectEnd() {
    const t = this.getLastDescendant();
    return t ? t.selectEnd() : this.select();
  }
  clear() {
    const t = this.getWritable();
    return this.getChildren().forEach((r) => r.remove()), t;
  }
  append(...t) {
    return this.splice(this.getChildrenSize(), 0, t);
  }
  setDirection(t) {
    const r = this.getWritable();
    return r.__dir = t, r;
  }
  setFormat(t) {
    return this.getWritable().__format = t !== "" ? Ya[t] : 0, this;
  }
  setStyle(t) {
    return this.getWritable().__style = t || "", this;
  }
  setTextFormat(t) {
    const r = this.getWritable();
    return r.__textFormat = t, r;
  }
  setTextStyle(t) {
    const r = this.getWritable();
    return r.__textStyle = t, r;
  }
  setIndent(t) {
    return this.getWritable().__indent = t, this;
  }
  splice(t, r, o) {
    So(this) && $(324, this.__key, this.__type);
    const i = this.getChildrenSize(), s = this.getWritable();
    t + r <= i || $(226, String(t), String(r), String(i));
    const a = s.__key, l = [], u = [], c = this.getChildAtIndex(t + r);
    let d = null, f = i - r + o.length;
    if (t !== 0) if (t === i) d = this.getLastChild();
    else {
      const g = this.getChildAtIndex(t);
      g !== null && (d = g.getPreviousSibling());
    }
    if (r > 0) {
      let g = d === null ? this.getFirstChild() : d.getNextSibling();
      for (let h = 0; h < r; h++) {
        g === null && $(100);
        const m = g.getNextSibling(), v = g.__key;
        en(g.getWritable()), u.push(v), g = m;
      }
    }
    let p = d;
    for (const g of o) {
      p !== null && g.is(p) && (d = p = p.getPreviousSibling());
      const h = g.getWritable();
      h.__parent === a && f--, en(h);
      const m = g.__key;
      if (p === null) s.__first = m, h.__prev = null;
      else {
        const v = p.getWritable();
        v.__next = m, h.__prev = v.__key;
      }
      g.__key === a && $(76), h.__parent = a, l.push(m), p = g;
    }
    if (t + r === i)
      p !== null && (p.getWritable().__next = null, s.__last = p.__key);
    else if (c !== null) {
      const g = c.getWritable();
      if (p !== null) {
        const h = p.getWritable();
        g.__prev = p.__key, h.__next = c.__key;
      } else g.__prev = null;
    }
    if (s.__size = f, u.length) {
      const g = j();
      if (z(g)) {
        const h = new Set(u), m = new Set(l), { anchor: v, focus: y } = g;
        Fl(v, h, m) && Eo(v, v.getNode(), this, d, c), Fl(y, h, m) && Eo(y, y.getNode(), this, d, c), f !== 0 || this.canBeEmpty() || Ue(this) || this.remove();
      }
    }
    return s;
  }
  getDOMSlot(t) {
    return new fr(t);
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    if (xe(r)) {
      const o = this.getIndent();
      o > 0 && (r.style.paddingInlineStart = 40 * o + "px");
      const i = this.getDirection();
      i && (r.dir = i);
    }
    return { element: r };
  }
  exportJSON() {
    const t = { children: [], direction: this.getDirection(), format: this.getFormatType(), indent: this.getIndent(), ...super.exportJSON() }, r = this.getTextFormat(), o = this.getTextStyle();
    return r === 0 && o === "" || Ue(this) || this.getChildren().some(B) || (r !== 0 && (t.textFormat = r), o !== "" && (t.textStyle = o)), t;
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setFormat(t.format).setIndent(t.indent).setDirection(t.direction).setTextFormat(t.textFormat || 0).setTextStyle(t.textStyle || "");
  }
  insertNewAfter(t, r) {
    return null;
  }
  canIndent() {
    return !0;
  }
  collapseAtStart(t) {
    return !1;
  }
  excludeFromCopy(t) {
    return !1;
  }
  canReplaceWith(t) {
    return !0;
  }
  canInsertAfter(t) {
    return !0;
  }
  canBeEmpty() {
    return !0;
  }
  canInsertTextBefore() {
    return !0;
  }
  canInsertTextAfter() {
    return !0;
  }
  isInline() {
    return !1;
  }
  isShadowRoot() {
    return !1;
  }
  canMergeWith(t) {
    return !1;
  }
  extractWithChild(t, r, o) {
    return !1;
  }
  canMergeWhenEmpty() {
    return !1;
  }
  reconcileObservedMutation(t, r) {
    const o = this.getDOMSlot(t);
    let i = o.getFirstChild();
    for (let s = this.getFirstChild(); s; s = s.getNextSibling()) {
      const a = r.getElementByKey(s.getKey());
      a !== null && (i == null ? (o.insertChild(a), i = a) : i !== a && o.replaceChild(a, i), i = i.nextSibling);
    }
  }
}
function T(e) {
  return e instanceof je;
}
function Fl(e, n, t) {
  let r = e.getNode();
  for (; r; ) {
    const o = r.__key;
    if (n.has(o) && !t.has(o)) return !0;
    r = r.getParent();
  }
  return !1;
}
class ea extends Ye {
  decorate(n, t) {
    return null;
  }
  isIsolated() {
    return !1;
  }
  isInline() {
    return !0;
  }
  isKeyboardSelectable() {
    return !0;
  }
}
function ne(e) {
  return e instanceof ea;
}
class Kn extends je {
  constructor() {
    super("root");
    A(this, "__cachedText");
    this.__cachedText = null;
  }
  static getType() {
    return "root";
  }
  static clone() {
    return new Kn();
  }
  getTopLevelElementOrThrow() {
    $(51);
  }
  getTextContent() {
    const t = this.__cachedText;
    return !Ar() && ae()._dirtyType !== 0 || t === null ? super.getTextContent() : t;
  }
  remove() {
    $(52);
  }
  replace(t) {
    $(53);
  }
  insertBefore(t) {
    $(54);
  }
  insertAfter(t) {
    $(55);
  }
  updateDOM(t, r) {
    return !1;
  }
  splice(t, r, o) {
    for (const i of o) T(i) || ne(i) || $(282);
    return super.splice(t, r, o);
  }
  static importJSON(t) {
    return pe().updateFromJSON(t);
  }
  collapseAtStart() {
    return !0;
  }
}
function be(e) {
  return e instanceof Kn;
}
function mf(e) {
  return new Tr(new Map(e._nodeMap));
}
function ta() {
  return new Tr(/* @__PURE__ */ new Map([["root", new Kn()]]));
}
function yf(e) {
  const n = e.exportJSON(), t = e.constructor;
  if (n.type !== t.getType() && $(130, t.name), T(e)) {
    const r = n.children;
    Array.isArray(r) || $(59, t.name);
    const o = e.getChildren();
    for (let i = 0; i < o.length; i++) {
      const s = yf(o[i]);
      r.push(s);
    }
  }
  return n;
}
function f0(e) {
  return e instanceof Tr;
}
class Tr {
  constructor(n, t) {
    A(this, "_nodeMap");
    A(this, "_selection");
    A(this, "_flushSync");
    A(this, "_readOnly");
    this._nodeMap = n, this._selection = t || null, this._flushSync = !1, this._readOnly = !1;
  }
  isEmpty() {
    return this._nodeMap.size === 1 && this._selection === null;
  }
  read(n, t) {
    return Rl(t && t.editor || null, this, n);
  }
  clone(n) {
    const t = new Tr(this._nodeMap, n === void 0 ? this._selection : n);
    return t._readOnly = !0, t;
  }
  toJSON() {
    return Rl(null, this, () => ({ root: yf(pe()) }));
  }
}
class na extends je {
  static getType() {
    return "artificial";
  }
  createDOM(n) {
    return document.createElement("div");
  }
}
class qn extends je {
  static getType() {
    return "paragraph";
  }
  static clone(n) {
    return new qn(n.__key);
  }
  createDOM(n) {
    const t = document.createElement("p"), r = In(n.theme, "paragraph");
    return r !== void 0 && t.classList.add(...r), t;
  }
  updateDOM(n, t, r) {
    return !1;
  }
  static importDOM() {
    return { p: (n) => ({ conversion: g0, priority: 0 }) };
  }
  exportDOM(n) {
    const { element: t } = super.exportDOM(n);
    if (xe(t)) {
      this.isEmpty() && t.append(document.createElement("br"));
      const r = this.getFormatType();
      r && (t.style.textAlign = r);
    }
    return { element: t };
  }
  static importJSON(n) {
    return ve().updateFromJSON(n);
  }
  exportJSON() {
    const n = super.exportJSON();
    if (n.textFormat === void 0 || n.textStyle === void 0) {
      const t = this.getChildren().find(B);
      t ? (n.textFormat = t.getFormat(), n.textStyle = t.getStyle()) : (n.textFormat = this.getTextFormat(), n.textStyle = this.getTextStyle());
    }
    return n;
  }
  insertNewAfter(n, t) {
    const r = ve();
    r.setTextFormat(n.format), r.setTextStyle(n.style);
    const o = this.getDirection();
    return r.setDirection(o), r.setFormat(this.getFormatType()), r.setStyle(this.getStyle()), this.insertAfter(r, t), r;
  }
  collapseAtStart() {
    const n = this.getChildren();
    if (n.length === 0 || B(n[0]) && n[0].getTextContent().trim() === "") {
      if (this.getNextSibling() !== null) return this.selectNext(), this.remove(), !0;
      if (this.getPreviousSibling() !== null) return this.selectPrevious(), this.remove(), !0;
    }
    return !1;
  }
}
function g0(e) {
  const n = ve();
  return e.style && (n.setFormat(e.style.textAlign), fa(e, n)), { node: n };
}
function ve() {
  return He(new qn());
}
function Fr(e) {
  return e instanceof qn;
}
const Q = 0, p0 = 1, h0 = 4;
function bf(e, n, t, r) {
  const o = e._keyToDOMMap;
  o.clear(), e._editorState = ta(), e._pendingEditorState = r, e._compositionKey = null, e._dirtyType = 0, e._cloneNotNeeded.clear(), e._dirtyLeaves = /* @__PURE__ */ new Set(), e._dirtyElements.clear(), e._normalizedNodes = /* @__PURE__ */ new Set(), e._updateTags = /* @__PURE__ */ new Set(), e._updates = [], e._blockCursorElement = null;
  const i = e._observer;
  i !== null && (i.disconnect(), e._observer = null), n !== null && (n.textContent = ""), t !== null && (t.textContent = "", o.set("root", t));
}
function m0(e) {
  const n = /* @__PURE__ */ new Set(), t = /* @__PURE__ */ new Set();
  let r = e;
  for (; r; ) {
    const { ownNodeConfig: o } = ei(r), i = r.transform;
    if (!t.has(i)) {
      t.add(i);
      const s = r.transform();
      s && n.add(s);
    }
    if (o) {
      const s = o.$transform;
      s && n.add(s), r = o.extends;
    } else {
      const s = Object.getPrototypeOf(r);
      r = s.prototype instanceof Ye && s !== Ye ? s : void 0;
    }
  }
  return n;
}
function vf(e) {
  const n = e || {}, t = c0(), r = n.theme || {}, o = e === void 0 ? t : n.parentEditor || null, i = n.disableEvents || !1, s = ta(), a = n.namespace || (o !== null ? o._config.namespace : Rf()), l = n.editorState, u = [Kn, Ut, Un, Gn, qn, na, ...n.nodes || []], { onError: c, html: d } = n, f = n.editable === void 0 || n.editable;
  let p;
  if (e === void 0 && t !== null) p = t._nodes;
  else {
    p = /* @__PURE__ */ new Map();
    for (let h = 0; h < u.length; h++) {
      let m = u[h], v = null, y = null;
      if (typeof m != "function") {
        const w = m;
        m = w.replace, v = w.with, y = w.withKlass || null;
      }
      ei(m);
      const b = m.getType(), x = m0(m);
      p.set(b, { exportDOM: d && d.export ? d.export.get(m) : void 0, klass: m, replace: v, replaceWithKlass: y, sharedNodeState: Cv(u[h]), transforms: x });
    }
  }
  const g = new an(s, o, p, { disableEvents: i, namespace: a, theme: r }, c || console.error, (function(h, m) {
    const v = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Set(), b = (x) => {
      Object.keys(x).forEach((w) => {
        let S = v.get(w);
        S === void 0 && (S = [], v.set(w, S)), S.push(x[w]);
      });
    };
    return h.forEach((x) => {
      const w = x.klass.importDOM;
      if (w == null || y.has(w)) return;
      y.add(w);
      const S = w.call(x.klass);
      S !== null && b(S);
    }), m && b(m), v;
  })(p, d ? d.import : void 0), f, e);
  return l !== void 0 && (g._pendingEditorState = l, g._dirtyType = 2), (function(h) {
    h.registerCommand(Od, jv, Q), h.registerCommand(Md, Uv, Q), h.registerCommand($d, Gv, Q), h.registerCommand(Pd, Hv, Q), h.registerCommand(Ld, Wv, Q);
  })(g), g;
}
class an {
  constructor(n, t, r, o, i, s, a, l) {
    A(this, "_headless");
    A(this, "_parentEditor");
    A(this, "_rootElement");
    A(this, "_editorState");
    A(this, "_pendingEditorState");
    A(this, "_compositionKey");
    A(this, "_deferred");
    A(this, "_keyToDOMMap");
    A(this, "_updates");
    A(this, "_updating");
    A(this, "_listeners");
    A(this, "_commands");
    A(this, "_nodes");
    A(this, "_decorators");
    A(this, "_pendingDecorators");
    A(this, "_config");
    A(this, "_dirtyType");
    A(this, "_cloneNotNeeded");
    A(this, "_dirtyLeaves");
    A(this, "_dirtyElements");
    A(this, "_normalizedNodes");
    A(this, "_updateTags");
    A(this, "_observer");
    A(this, "_key");
    A(this, "_onError");
    A(this, "_htmlConversions");
    A(this, "_window");
    A(this, "_editable");
    A(this, "_blockCursorElement");
    A(this, "_createEditorArgs");
    this._createEditorArgs = l, this._parentEditor = t, this._rootElement = null, this._editorState = n, this._pendingEditorState = null, this._compositionKey = null, this._deferred = [], this._keyToDOMMap = /* @__PURE__ */ new Map(), this._updates = [], this._updating = !1, this._listeners = { decorator: /* @__PURE__ */ new Set(), editable: /* @__PURE__ */ new Set(), mutation: /* @__PURE__ */ new Map(), root: /* @__PURE__ */ new Set(), textcontent: /* @__PURE__ */ new Set(), update: /* @__PURE__ */ new Set() }, this._commands = /* @__PURE__ */ new Map(), this._config = o, this._nodes = r, this._decorators = {}, this._pendingDecorators = null, this._dirtyType = 0, this._cloneNotNeeded = /* @__PURE__ */ new Set(), this._dirtyLeaves = /* @__PURE__ */ new Set(), this._dirtyElements = /* @__PURE__ */ new Map(), this._normalizedNodes = /* @__PURE__ */ new Set(), this._updateTags = /* @__PURE__ */ new Set(), this._observer = null, this._key = Rf(), this._onError = i, this._htmlConversions = s, this._editable = a, this._headless = t !== null && t._headless, this._window = null, this._blockCursorElement = null;
  }
  isComposing() {
    return this._compositionKey != null;
  }
  registerUpdateListener(n) {
    const t = this._listeners.update;
    return t.add(n), () => {
      t.delete(n);
    };
  }
  registerEditableListener(n) {
    const t = this._listeners.editable;
    return t.add(n), () => {
      t.delete(n);
    };
  }
  registerDecoratorListener(n) {
    const t = this._listeners.decorator;
    return t.add(n), () => {
      t.delete(n);
    };
  }
  registerTextContentListener(n) {
    const t = this._listeners.textcontent;
    return t.add(n), () => {
      t.delete(n);
    };
  }
  registerRootListener(n) {
    const t = this._listeners.root;
    return n(this._rootElement, null), t.add(n), () => {
      n(null, this._rootElement), t.delete(n);
    };
  }
  registerCommand(n, t, r) {
    r === void 0 && $(35);
    const o = this._commands;
    o.has(n) || o.set(n, [/* @__PURE__ */ new Set(), /* @__PURE__ */ new Set(), /* @__PURE__ */ new Set(), /* @__PURE__ */ new Set(), /* @__PURE__ */ new Set()]);
    const i = o.get(n);
    i === void 0 && $(36, String(n));
    const s = i[r];
    return s.add(t), () => {
      s.delete(t), i.every((a) => a.size === 0) && o.delete(n);
    };
  }
  registerMutationListener(n, t, r) {
    const o = this.resolveRegisteredNodeAfterReplacements(this.getRegisteredNode(n)).klass, i = this._listeners.mutation;
    let s = i.get(t);
    s === void 0 && (s = /* @__PURE__ */ new Set(), i.set(t, s)), s.add(o);
    const a = r && r.skipInitialization;
    return a !== void 0 && a || this.initializeMutationListener(t, o), () => {
      s.delete(o), s.size === 0 && i.delete(t);
    };
  }
  getRegisteredNode(n) {
    const t = this._nodes.get(n.getType());
    return t === void 0 && $(37, n.name), t;
  }
  resolveRegisteredNodeAfterReplacements(n) {
    for (; n.replaceWithKlass; ) n = this.getRegisteredNode(n.replaceWithKlass);
    return n;
  }
  initializeMutationListener(n, t) {
    const r = this._editorState, o = zl(r).get(t.getType());
    if (!o) return;
    const i = /* @__PURE__ */ new Map();
    for (const s of o.keys()) i.set(s, "created");
    i.size > 0 && n(i, { dirtyLeaves: /* @__PURE__ */ new Set(), prevEditorState: r, updateTags: /* @__PURE__ */ new Set(["registerMutationListener"]) });
  }
  registerNodeTransformToKlass(n, t) {
    const r = this.getRegisteredNode(n);
    return r.transforms.add(t), r;
  }
  registerNodeTransform(n, t) {
    const r = this.registerNodeTransformToKlass(n, t), o = [r], i = r.replaceWithKlass;
    if (i != null) {
      const s = this.registerNodeTransformToKlass(i, t);
      o.push(s);
    }
    return (function(s, a) {
      const l = zl(s.getEditorState()), u = [];
      for (const c of a) {
        const d = l.get(c);
        d && u.push(d);
      }
      u.length !== 0 && s.update(() => {
        for (const c of u) for (const d of c.keys()) {
          const f = we(d);
          f && f.markDirty();
        }
      }, s._pendingEditorState === null ? { tag: Fn } : void 0);
    })(this, o.map((s) => s.klass.getType())), () => {
      o.forEach((s) => s.transforms.delete(t));
    };
  }
  hasNode(n) {
    return this._nodes.has(n.getType());
  }
  hasNodes(n) {
    return n.every(this.hasNode.bind(this));
  }
  dispatchCommand(n, t) {
    return V(this, n, t);
  }
  getDecorators() {
    return this._decorators;
  }
  getRootElement() {
    return this._rootElement;
  }
  getKey() {
    return this._key;
  }
  setRootElement(n) {
    const t = this._rootElement;
    if (n !== t) {
      const r = In(this._config.theme, "root"), o = this._pendingEditorState || this._editorState;
      if (this._rootElement = n, bf(this, t, n, o), t !== null && (this._config.disableEvents || Kv(t), r != null && t.classList.remove(...r)), n !== null) {
        const i = da(n), s = n.style;
        s.userSelect = "text", s.whiteSpace = "pre-wrap", s.wordBreak = "break-word", n.setAttribute("data-lexical-editor", "true"), this._window = i, this._dirtyType = 2, Sd(this), this._updateTags.add(Fn), xt(this), this._config.disableEvents || (function(a, l) {
          const u = a.ownerDocument;
          cs.set(a, u);
          const c = _o.get(u) ?? 0;
          c < 1 && u.addEventListener("selectionchange", rf), _o.set(u, c + 1), a.__lexicalEditor = l;
          const d = nf(a);
          for (let f = 0; f < us.length; f++) {
            const [p, g] = us[f], h = typeof g == "function" ? (m) => {
              fl(m) || (dl(m), (l.isEditable() || p === "click") && g(m, l));
            } : (m) => {
              if (fl(m)) return;
              dl(m);
              const v = l.isEditable();
              switch (p) {
                case "cut":
                  return v && V(l, qs, m);
                case "copy":
                  return V(l, Wo, m);
                case "paste":
                  return v && V(l, Hs, m);
                case "dragstart":
                  return v && V(l, qd, m);
                case "dragover":
                  return v && V(l, Zd, m);
                case "dragend":
                  return v && V(l, Pv, m);
                case "focus":
                  return v && V(l, zv, m);
                case "blur":
                  return v && V(l, Bv, m);
                case "drop":
                  return v && V(l, Kd, m);
              }
            };
            a.addEventListener(p, h), d.push(() => {
              a.removeEventListener(p, h);
            });
          }
        })(n, this), r != null && n.classList.add(...r);
      } else this._window = null, this._updateTags.add(Fn), xt(this);
      dr("root", this, !1, n, t);
    }
  }
  getElementByKey(n) {
    return this._keyToDOMMap.get(n) || null;
  }
  getEditorState() {
    return this._editorState;
  }
  setEditorState(n, t) {
    n.isEmpty() && $(38);
    let r = n;
    r._readOnly && (r = mf(n), r._selection = n._selection ? n._selection.clone() : null), wd(this);
    const o = this._pendingEditorState, i = this._updateTags, s = t !== void 0 ? t.tag : null;
    o === null || o.isEmpty() || (s != null && i.add(s), xt(this)), this._pendingEditorState = r, this._dirtyType = 2, this._dirtyElements.set("root", !1), this._compositionKey = null, s != null && i.add(s), this._updating || xt(this);
  }
  parseEditorState(n, t) {
    return (function(r, o, i) {
      const s = ta(), a = Ee, l = Le, u = Ne, c = o._dirtyElements, d = o._dirtyLeaves, f = o._cloneNotNeeded, p = o._dirtyType;
      o._dirtyElements = /* @__PURE__ */ new Map(), o._dirtyLeaves = /* @__PURE__ */ new Set(), o._cloneNotNeeded = /* @__PURE__ */ new Set(), o._dirtyType = 0, Ee = s, Le = !1, Ne = o, ra(null);
      try {
        const g = o._nodes;
        Qs(r.root, g), i && i(), s._readOnly = !0;
      } catch (g) {
        g instanceof Error && o._onError(g);
      } finally {
        o._dirtyElements = c, o._dirtyLeaves = d, o._cloneNotNeeded = f, o._dirtyType = p, Ee = a, Le = l, Ne = u;
      }
      return s;
    })(typeof n == "string" ? JSON.parse(n) : n, this, t);
  }
  read(n) {
    return xt(this), this.getEditorState().read(n, { editor: this });
  }
  update(n, t) {
    (function(r, o, i) {
      r._updating ? r._updates.push([o, i]) : Zo(r, o, i);
    })(this, n, t);
  }
  focus(n, t = {}) {
    const r = this._rootElement;
    r !== null && (r.setAttribute("autocapitalize", "off"), lt(this, () => {
      const o = j(), i = pe();
      o !== null ? o.dirty || $e(o.clone()) : i.getChildrenSize() !== 0 && (t.defaultSelection === "rootStart" ? i.selectStart() : i.selectEnd()), w0("focus"), S0(() => {
        r.removeAttribute("autocapitalize"), n && n();
      });
    }), this._pendingEditorState === null && r.removeAttribute("autocapitalize"));
  }
  blur() {
    const n = this._rootElement;
    n !== null && n.blur();
    const t = rt(this._window);
    t !== null && t.removeAllRanges();
  }
  isEditable() {
    return this._editable;
  }
  setEditable(n) {
    this._editable !== n && (this._editable = n, dr("editable", this, !0, n));
  }
  toJSON() {
    return { editorState: this._editorState.toJSON() };
  }
}
A(an, "version");
an.version = "0.39.0+prod.esm";
let bs = null;
function ra(e) {
  bs = e;
}
let y0 = 1;
function xf(e, n) {
  const t = oa(e, n);
  return t === void 0 && $(30, n), t;
}
function oa(e, n) {
  return e._nodes.get(n);
}
const b0 = typeof queueMicrotask == "function" ? queueMicrotask : (e) => {
  Promise.resolve().then(e);
};
function _f(e) {
  return ne($n(e));
}
function ia(e) {
  const n = document.activeElement;
  if (!xe(n)) return !1;
  const t = n.nodeName;
  return ne($n(e)) && (t === "INPUT" || t === "TEXTAREA" || n.contentEditable === "true" && Jo(n) == null);
}
function Ir(e, n, t) {
  const r = e.getRootElement();
  try {
    return r !== null && r.contains(n) && r.contains(t) && n !== null && !ia(n) && wf(n) === e;
  } catch {
    return !1;
  }
}
function sa(e) {
  return e instanceof an;
}
function wf(e) {
  let n = e;
  for (; n != null; ) {
    const t = Jo(n);
    if (sa(t)) return t;
    n = Or(n);
  }
  return null;
}
function Jo(e) {
  return e ? e.__lexicalEditor : null;
}
function Qt(e) {
  return Ko(e) || e.isToken();
}
function bt(e) {
  return Qt(e) || e.isSegmented();
}
function Nt(e) {
  return Zn(e) && e.nodeType === 3;
}
function Sf(e) {
  return Zn(e) && e.nodeType === 9;
}
function Mn(e) {
  let n = e;
  for (; n != null; ) {
    if (Nt(n)) return n;
    n = n.firstChild;
  }
  return null;
}
function No(e, n, t) {
  const r = rn[n];
  if (t !== null && (e & r) === (t & r)) return e;
  let o = e ^ r;
  return n === "subscript" ? o &= -65 : n === "superscript" ? o &= -33 : n === "lowercase" ? (o &= -513, o &= -1025) : n === "uppercase" ? (o &= -257, o &= -1025) : n === "capitalize" && (o &= -257, o &= -513), o;
}
function v0(e, n) {
  const t = (function() {
    const s = bs;
    return bs = null, s;
  })();
  if ((n = n || t && t.__key) != null) return void (e.__key = n);
  ke(), gf();
  const r = ae(), o = Gt(), i = "" + y0++;
  o._nodeMap.set(i, e), T(e) ? r._dirtyElements.set(i, !0) : r._dirtyLeaves.add(i), r._cloneNotNeeded.add(i), r._dirtyType = 1, e.__key = i;
}
function en(e) {
  const n = e.getParent();
  if (n !== null) {
    const t = e.getWritable(), r = n.getWritable(), o = e.getPreviousSibling(), i = e.getNextSibling(), s = i !== null ? i.__key : null, a = o !== null ? o.__key : null, l = o !== null ? o.getWritable() : null, u = i !== null ? i.getWritable() : null;
    o === null && (r.__first = s), i === null && (r.__last = a), l !== null && (l.__next = s), u !== null && (u.__prev = a), t.__prev = null, t.__next = null, t.__parent = null, r.__size--;
  }
}
function Ro(e) {
  gf(), So(e) && $(323, e.__key, e.__type);
  const n = e.getLatest(), t = n.__parent, r = Gt(), o = ae(), i = r._nodeMap, s = o._dirtyElements;
  t !== null && (function(l, u, c) {
    let d = l;
    for (; d !== null; ) {
      if (c.has(d)) return;
      const f = u.get(d);
      if (f === void 0) break;
      c.set(d, !1), d = f.__parent;
    }
  })(t, i, s);
  const a = n.__key;
  o._dirtyType = 1, T(e) ? s.set(a, !0) : o._dirtyLeaves.add(a);
}
function Ae(e) {
  ke();
  const n = ae(), t = n._compositionKey;
  if (e !== t) {
    if (n._compositionKey = e, t !== null) {
      const r = we(t);
      r !== null && r.getWritable();
    }
    if (e !== null) {
      const r = we(e);
      r !== null && r.getWritable();
    }
  }
}
function Ot() {
  return Ar() ? null : ae()._compositionKey;
}
function we(e, n) {
  const t = (n || Gt())._nodeMap.get(e);
  return t === void 0 ? null : t;
}
function Cf(e, n) {
  const t = Yo(e, ae());
  return t !== void 0 ? we(t, n) : null;
}
function Yo(e, n) {
  return e[`__lexicalKey_${n._key}`];
}
function $n(e, n) {
  let t = e;
  for (; t != null; ) {
    const r = Cf(t, n);
    if (r !== null) return r;
    t = Or(t);
  }
  return null;
}
function kf(e) {
  const n = e._decorators, t = Object.assign({}, n);
  return e._pendingDecorators = t, t;
}
function Il(e) {
  return e.read(() => pe().getTextContent());
}
function pe() {
  return Ef(Gt());
}
function Ef(e) {
  return e._nodeMap.get("root");
}
function $e(e) {
  ke();
  const n = Gt();
  e !== null && (e.dirty = !0, e.setCachedNodes(null)), n._selection = e;
}
function Cn(e) {
  const n = ae(), t = (function(r, o) {
    let i = r;
    for (; i != null; ) {
      const s = Yo(i, o);
      if (s !== void 0) return s;
      i = Or(i);
    }
    return null;
  })(e, n);
  return t === null ? e === n.getRootElement() ? we("root") : null : we(t);
}
function Nf(e) {
  return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(e);
}
function aa(e) {
  const n = [];
  let t = e;
  for (; t !== null; ) n.push(t), t = t._parentEditor;
  return n;
}
function Rf() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substring(0, 5);
}
function Af(e) {
  return Nt(e) ? e.nodeValue : null;
}
function la(e, n, t) {
  const r = rt(Ge(n));
  if (r === null) return;
  const o = r.anchorNode;
  let { anchorOffset: i, focusOffset: s } = r;
  if (o !== null) {
    let a = Af(o);
    const l = $n(o);
    if (a !== null && B(l)) {
      if (a === Go && t) {
        const u = t.length;
        a = t, i = u, s = u;
      }
      a !== null && ua(l, a, i, s, e);
    }
  }
}
function ua(e, n, t, r, o) {
  let i = e;
  if (i.isAttached() && (o || !i.isDirty())) {
    const s = i.isComposing();
    let a = n;
    (s || o) && n[n.length - 1] === Go && (a = n.slice(0, -1));
    const l = i.getTextContent();
    if (o || a !== l) {
      if (a === "") {
        if (Ae(null), Nr || jn || Rr) i.remove();
        else {
          const h = ae();
          setTimeout(() => {
            h.update(() => {
              i.isAttached() && i.remove();
            });
          }, 20);
        }
        return;
      }
      const u = i.getParent(), c = Wn(), d = i.getTextContentSize(), f = Ot(), p = i.getKey();
      if (i.isToken() || f !== null && p === f && !s || z(c) && (u !== null && !u.canInsertTextBefore() && c.anchor.offset === 0 || c.anchor.key === e.__key && c.anchor.offset === 0 && !i.canInsertTextBefore() && !s || c.focus.key === e.__key && c.focus.offset === d && !i.canInsertTextAfter() && !s)) return void i.markDirty();
      const g = j();
      if (!z(g) || t === null || r === null) return void Ol(i, a, g);
      if (g.setTextNodeRange(i, t, i, r), i.isSegmented()) {
        const h = he(i.getTextContent());
        i.replace(h), i = h;
      }
      Ol(i, a, g);
    }
  }
}
function Ol(e, n, t) {
  if (e.setTextContent(n), z(t)) {
    const r = e.getKey();
    for (const o of ["anchor", "focus"]) {
      const i = t[o];
      i.type === "text" && i.key === r && (i.offset = Pt(e, i.offset, "clamp"));
    }
  }
}
function Kr(e, n, t) {
  const r = n[t] || !1;
  return r === "any" || r === e[t];
}
function x0(e, n) {
  return Kr(e, n, "altKey") && Kr(e, n, "ctrlKey") && Kr(e, n, "shiftKey") && Kr(e, n, "metaKey");
}
function ie(e, n, t) {
  return x0(e, t) && e.key.toLowerCase() === n.toLowerCase();
}
const mt = { ctrlKey: !qe, metaKey: qe }, Ml = { altKey: qe, ctrlKey: !qe };
function $l(e) {
  return e.key === "Backspace";
}
function Pl(e) {
  return ie(e, "a", mt);
}
function _0(e) {
  const n = pe();
  if (z(e)) {
    const t = e.anchor, r = e.focus, o = t.getNode().getTopLevelElementOrThrow().getParentOrThrow();
    return t.set(o.getKey(), 0, "element"), r.set(o.getKey(), o.getChildrenSize(), "element"), po(e), e;
  }
  {
    const t = n.select(0, n.getChildrenSize());
    return $e(po(t)), t;
  }
}
function In(e, n) {
  e.__lexicalClassNameCache === void 0 && (e.__lexicalClassNameCache = {});
  const t = e.__lexicalClassNameCache, r = t[n];
  if (r !== void 0) return r;
  const o = e[n];
  if (typeof o == "string") {
    const i = bd(o);
    return t[n] = i, i;
  }
  return o;
}
function ca(e, n, t, r, o) {
  if (t.size === 0) return;
  const i = r.__type, s = r.__key, a = n.get(i);
  a === void 0 && $(33, i);
  const l = a.klass;
  let u = e.get(l);
  u === void 0 && (u = /* @__PURE__ */ new Map(), e.set(l, u));
  const c = u.get(s), d = c === "destroyed" && o === "created";
  (c === void 0 || d) && u.set(s, d ? "updated" : o);
}
function Ll(e, n, t) {
  const r = e.getParent();
  let o = t, i = e;
  return r !== null && (n && t === 0 ? (o = i.getIndexWithinParent(), i = r) : n || t !== i.getChildrenSize() || (o = i.getIndexWithinParent() + 1, i = r)), i.getChildAtIndex(n ? o - 1 : o);
}
function vs(e, n) {
  const t = e.offset;
  if (e.type === "element")
    return Ll(e.getNode(), n, t);
  {
    const r = e.getNode();
    if (n && t === 0 || !n && t === r.getTextContentSize()) {
      const o = n ? r.getPreviousSibling() : r.getNextSibling();
      return o === null ? Ll(r.getParentOrThrow(), n, r.getIndexWithinParent() + (n ? 0 : 1)) : o;
    }
  }
  return null;
}
function Tf(e) {
  const n = Ge(e).event, t = n && n.inputType;
  return t === "insertFromPaste" || t === "insertFromPasteAsQuotation";
}
function V(e, n, t) {
  return (function(r, o, i) {
    const s = aa(r);
    for (let a = 4; a >= 0; a--) for (let l = 0; l < s.length; l++) {
      const u = s[l], c = u._commands.get(o);
      if (c !== void 0) {
        const d = c[a];
        if (d !== void 0) {
          const f = Array.from(d), p = f.length;
          let g = !1;
          if (lt(u, () => {
            for (let h = 0; h < p; h++) if (f[h](i, r)) return void (g = !0);
          }), g) return g;
        }
      }
    }
    return !1;
  })(e, n, t);
}
function Xo(e) {
  return !be(e) && !e.isLastChild() && !e.isInline();
}
function ln(e, n) {
  const t = e._keyToDOMMap.get(n);
  return t === void 0 && $(75, n), t;
}
function Or(e) {
  const n = e.assignedSlot || e.parentElement;
  return ws(n) ? n.host : n;
}
function Ff(e) {
  return Sf(e) ? e : xe(e) ? e.ownerDocument : null;
}
function w0(e) {
  ke(), ae()._updateTags.add(e);
}
function S0(e) {
  ke(), ae()._deferred.push(e);
}
function xs(e, n) {
  let t = e.getParent();
  for (; t !== null; ) {
    if (t.is(n)) return !0;
    t = t.getParent();
  }
  return !1;
}
function da(e) {
  const n = Ff(e);
  return n ? n.defaultView : null;
}
function Ge(e) {
  const n = e._window;
  return n === null && $(78), n;
}
function C0(e) {
  let n = e.getParentOrThrow();
  for (; n !== null; ) {
    if (Ue(n)) return n;
    n = n.getParentOrThrow();
  }
  return n;
}
function Ue(e) {
  return be(e) || T(e) && e.isShadowRoot();
}
function He(e) {
  const n = ae(), t = e.getType(), r = oa(n, t);
  r === void 0 && $(200, e.constructor.name, t);
  const { replace: o, replaceWithKlass: i } = r;
  if (o !== null) {
    const s = o(e), a = s.constructor;
    return i !== null ? s instanceof i || $(201, i.name, i.getType(), a.name, a.getType(), e.constructor.name, t) : s instanceof e.constructor && a !== e.constructor || $(202, a.name, a.getType(), e.constructor.name, t), s.__key === e.__key && $(203, e.constructor.name, t, a.name, a.getType()), s;
  }
  return e;
}
function Ni(e, n) {
  !be(e.getParent()) || T(n) || ne(n) || $(99);
}
function k0(e) {
  const n = we(e);
  return n === null && $(63, e), n;
}
function Ri(e) {
  return (ne(e) || T(e) && !e.canBeEmpty()) && !e.isInline();
}
function _s(e, n, t) {
  t.style.removeProperty("caret-color"), n._blockCursorElement = null;
  const r = e.parentElement;
  r !== null && r.removeChild(e);
}
function rt(e) {
  return nt ? (e || window).getSelection() : null;
}
function E0(e) {
  const n = da(e);
  return n ? n.getSelection() : null;
}
function If(e) {
  return xe(e) && e.tagName === "A";
}
function xe(e) {
  return Zn(e) && e.nodeType === 1;
}
function Zn(e) {
  return typeof e == "object" && e !== null && "nodeType" in e && typeof e.nodeType == "number";
}
function ws(e) {
  return Zn(e) && e.nodeType === 11;
}
function Ss(e) {
  const n = new RegExp(/^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|mark|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var|#text)$/, "i");
  return e.nodeName.match(n) !== null;
}
function Ao(e) {
  const n = new RegExp(/^(address|article|aside|blockquote|canvas|dd|div|dl|dt|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hr|li|main|nav|noscript|ol|p|pre|section|table|td|tfoot|ul|video)$/, "i");
  return e.nodeName.match(n) !== null;
}
function Tt(e) {
  if (ne(e) && !e.isInline()) return !0;
  if (!T(e) || Ue(e)) return !1;
  const n = e.getFirstChild(), t = n === null || Xt(n) || B(n) || n.isInline();
  return !e.isInline() && e.canBeEmpty() !== !1 && t;
}
function Qo() {
  return ae();
}
const Dl = /* @__PURE__ */ new WeakMap(), N0 = /* @__PURE__ */ new Map();
function zl(e) {
  if (!e._readOnly && e.isEmpty()) return N0;
  e._readOnly || $(192);
  let n = Dl.get(e);
  return n || (n = (function(t) {
    const r = /* @__PURE__ */ new Map();
    for (const [o, i] of t._nodeMap) {
      const s = i.__type;
      let a = r.get(s);
      a || (a = /* @__PURE__ */ new Map(), r.set(s, a)), a.set(o, i);
    }
    return r;
  })(e), Dl.set(e, n)), n;
}
function Of(e) {
  const n = e.constructor.clone(e);
  return n.afterCloneFrom(e), n;
}
function R0(e) {
  return (n = Of(e))[of] = !0, n;
  var n;
}
function fa(e, n) {
  const t = parseInt(e.style.paddingInlineStart, 10) || 0, r = Math.round(t / 40);
  n.setIndent(r);
}
function A0(e) {
  return e.__lexicalUnmanaged === !0;
}
function er(e, n) {
  return (function(t, r) {
    return Object.prototype.hasOwnProperty.call(t, r);
  })(e, n) && e[n] !== Ye[n];
}
function ei(e) {
  const n = Xa in e.prototype ? e.prototype[Xa]() : void 0, t = (function(s) {
    if (!(s === Ye || s.prototype instanceof Ye)) {
      let a = "<unknown>", l = "<unknown>";
      try {
        a = s.getType();
      } catch {
      }
      try {
        an.version && (l = JSON.parse(an.version));
      } catch {
      }
      $(290, s.name, a, l);
    }
    return s === ea || s === je || s === Ye;
  })(e), r = !t && er(e, "getType") ? e.getType() : void 0;
  let o, i = r;
  if (n) if (r) o = n[r];
  else for (const [s, a] of Object.entries(n)) i = s, o = a;
  if (!t && i && (er(e, "getType") || (e.getType = () => i), er(e, "clone") || (e.clone = (s) => (ra(s), new e())), er(e, "importJSON") || (e.importJSON = o && o.$importJSON || ((s) => new e().updateFromJSON(s))), !er(e, "importDOM") && o)) {
    const { importDOM: s } = o;
    s && (e.importDOM = () => s);
  }
  return { ownNodeConfig: o, ownNodeType: i };
}
function Mf(e) {
  const n = Qo();
  return ke(), new (n.resolveRegisteredNodeAfterReplacements(n.getRegisteredNode(e))).klass();
}
const Mt = (e, n) => {
  let t = e;
  for (; t != null && !be(t); ) {
    if (n(t)) return t;
    t = t.getParent();
  }
  return null;
}, T0 = { next: "previous", previous: "next" };
class ga {
  constructor(n) {
    A(this, "origin");
    this.origin = n;
  }
  [Symbol.iterator]() {
    return $f({ hasNext: Pn, initial: this.getAdjacentCaret(), map: (n) => n, step: (n) => n.getAdjacentCaret() });
  }
  getAdjacentCaret() {
    return Te(this.getNodeAtCaret(), this.direction);
  }
  getSiblingCaret() {
    return Te(this.origin, this.direction);
  }
  remove() {
    const n = this.getNodeAtCaret();
    return n && n.remove(), this;
  }
  replaceOrInsert(n, t) {
    const r = this.getNodeAtCaret();
    return n.is(this.origin) || n.is(r) || (r === null ? this.insert(n) : r.replace(n, t)), this;
  }
  splice(n, t, r = "next") {
    const o = r === this.direction ? t : Array.from(t).reverse();
    let i = this;
    const s = this.getParentAtCaret(), a = /* @__PURE__ */ new Map();
    for (let l = i.getAdjacentCaret(); l !== null && a.size < n; l = l.getAdjacentCaret()) {
      const u = l.origin.getWritable();
      a.set(u.getKey(), u);
    }
    for (const l of o) {
      if (a.size > 0) {
        const u = i.getNodeAtCaret();
        if (u) {
          if (a.delete(u.getKey()), a.delete(l.getKey()), !(u.is(l) || i.origin.is(l))) {
            const c = l.getParent();
            c && c.is(s) && l.remove(), u.replace(l);
          }
        } else u === null && $(263, Array.from(a).join(" "));
      } else i.insert(l);
      i = Te(l, this.direction);
    }
    for (const l of a.values()) l.remove();
    return this;
  }
}
class wr extends ga {
  constructor() {
    super(...arguments);
    A(this, "type", "child");
  }
  getLatest() {
    const t = this.origin.getLatest();
    return t === this.origin ? this : Ct(t, this.direction);
  }
  getParentCaret(t = "root") {
    return Te(pa(this.getParentAtCaret(), t), this.direction);
  }
  getFlipped() {
    const t = Jn(this.direction);
    return Te(this.getNodeAtCaret(), t) || Ct(this.origin, t);
  }
  getParentAtCaret() {
    return this.origin;
  }
  getChildCaret() {
    return this;
  }
  isSameNodeCaret(t) {
    return t instanceof wr && this.direction === t.direction && this.origin.is(t.origin);
  }
  isSamePointCaret(t) {
    return this.isSameNodeCaret(t);
  }
}
const F0 = { root: be, shadowRoot: Ue };
function Jn(e) {
  return T0[e];
}
function pa(e, n = "root") {
  return F0[n](e) ? null : e;
}
class un extends ga {
  constructor() {
    super(...arguments);
    A(this, "type", "sibling");
  }
  getLatest() {
    const t = this.origin.getLatest();
    return t === this.origin ? this : Te(t, this.direction);
  }
  getSiblingCaret() {
    return this;
  }
  getParentAtCaret() {
    return this.origin.getParent();
  }
  getChildCaret() {
    return T(this.origin) ? Ct(this.origin, this.direction) : null;
  }
  getParentCaret(t = "root") {
    return Te(pa(this.getParentAtCaret(), t), this.direction);
  }
  getFlipped() {
    const t = Jn(this.direction);
    return Te(this.getNodeAtCaret(), t) || Ct(this.origin.getParentOrThrow(), t);
  }
  isSamePointCaret(t) {
    return t instanceof un && this.direction === t.direction && this.origin.is(t.origin);
  }
  isSameNodeCaret(t) {
    return (t instanceof un || t instanceof cn) && this.direction === t.direction && this.origin.is(t.origin);
  }
}
class cn extends ga {
  constructor(t, r) {
    super(t);
    A(this, "type", "text");
    A(this, "offset");
    this.offset = r;
  }
  getLatest() {
    const t = this.origin.getLatest();
    return t === this.origin ? this : dn(t, this.direction, this.offset);
  }
  getParentAtCaret() {
    return this.origin.getParent();
  }
  getChildCaret() {
    return null;
  }
  getParentCaret(t = "root") {
    return Te(pa(this.getParentAtCaret(), t), this.direction);
  }
  getFlipped() {
    return dn(this.origin, Jn(this.direction), this.offset);
  }
  isSamePointCaret(t) {
    return t instanceof cn && this.direction === t.direction && this.origin.is(t.origin) && this.offset === t.offset;
  }
  isSameNodeCaret(t) {
    return (t instanceof un || t instanceof cn) && this.direction === t.direction && this.origin.is(t.origin);
  }
  getSiblingCaret() {
    return Te(this.origin, this.direction);
  }
}
function $t(e) {
  return e instanceof cn;
}
function Pn(e) {
  return e instanceof un;
}
function ut(e) {
  return e instanceof wr;
}
const I0 = { next: class extends cn {
  constructor() {
    super(...arguments);
    A(this, "direction", "next");
  }
  getNodeAtCaret() {
    return this.origin.getNextSibling();
  }
  insert(n) {
    return this.origin.insertAfter(n), this;
  }
}, previous: class extends cn {
  constructor() {
    super(...arguments);
    A(this, "direction", "previous");
  }
  getNodeAtCaret() {
    return this.origin.getPreviousSibling();
  }
  insert(n) {
    return this.origin.insertBefore(n), this;
  }
} }, O0 = { next: class extends un {
  constructor() {
    super(...arguments);
    A(this, "direction", "next");
  }
  getNodeAtCaret() {
    return this.origin.getNextSibling();
  }
  insert(n) {
    return this.origin.insertAfter(n), this;
  }
}, previous: class extends un {
  constructor() {
    super(...arguments);
    A(this, "direction", "previous");
  }
  getNodeAtCaret() {
    return this.origin.getPreviousSibling();
  }
  insert(n) {
    return this.origin.insertBefore(n), this;
  }
} }, M0 = { next: class extends wr {
  constructor() {
    super(...arguments);
    A(this, "direction", "next");
  }
  getNodeAtCaret() {
    return this.origin.getFirstChild();
  }
  insert(n) {
    return this.origin.splice(0, 0, [n]), this;
  }
}, previous: class extends wr {
  constructor() {
    super(...arguments);
    A(this, "direction", "previous");
  }
  getNodeAtCaret() {
    return this.origin.getLastChild();
  }
  insert(n) {
    return this.origin.splice(this.origin.getChildrenSize(), 0, [n]), this;
  }
} };
function Te(e, n) {
  return e ? new O0[n](e) : null;
}
function dn(e, n, t) {
  return e ? new I0[n](e, Pt(e, t)) : null;
}
function Pt(e, n, t = "error") {
  const r = e.getTextContentSize();
  let o = n === "next" ? r : n === "previous" ? 0 : n;
  return (o < 0 || o > r) && (t !== "clamp" && md(284, String(n), String(r), e.getKey()), o = o < 0 ? 0 : r), o;
}
function Bl(e, n) {
  return new P0(e, n);
}
function Ct(e, n) {
  return T(e) ? new M0[n](e) : null;
}
function $0(e) {
  return e && e.getChildCaret() || e;
}
function ha(e) {
  return e && $0(e.getAdjacentCaret());
}
class ma {
  constructor(n, t, r) {
    A(this, "type", "node-caret-range");
    A(this, "direction");
    A(this, "anchor");
    A(this, "focus");
    this.anchor = n, this.focus = t, this.direction = r;
  }
  getLatest() {
    const n = this.anchor.getLatest(), t = this.focus.getLatest();
    return n === this.anchor && t === this.focus ? this : new ma(n, t, this.direction);
  }
  isCollapsed() {
    return this.anchor.isSamePointCaret(this.focus);
  }
  getTextSlices() {
    const n = (o) => {
      const i = this[o].getLatest();
      return $t(i) ? (function(s, a) {
        const { direction: l, origin: u } = s, c = Pt(u, a === "focus" ? Jn(l) : l);
        return Bl(s, c - s.offset);
      })(i, o) : null;
    }, t = n("anchor"), r = n("focus");
    if (t && r) {
      const { caret: o } = t, { caret: i } = r;
      if (o.isSameNodeCaret(i)) return [Bl(o, i.offset - o.offset), null];
    }
    return [t, r];
  }
  iterNodeCarets(n = "root") {
    const t = $t(this.anchor) ? this.anchor.getSiblingCaret() : this.anchor.getLatest(), r = this.focus.getLatest(), o = $t(r), i = (s) => s.isSameNodeCaret(r) ? null : ha(s) || s.getParentCaret(n);
    return $f({ hasNext: (s) => s !== null && !(o && r.isSameNodeCaret(s)), initial: t.isSameNodeCaret(r) ? null : i(t), map: (s) => s, step: i });
  }
  [Symbol.iterator]() {
    return this.iterNodeCarets("root");
  }
}
class P0 {
  constructor(n, t) {
    A(this, "type", "slice");
    A(this, "caret");
    A(this, "distance");
    this.caret = n, this.distance = t;
  }
  getSliceIndices() {
    const { distance: n, caret: { offset: t } } = this, r = t + n;
    return r < t ? [r, t] : [t, r];
  }
  getTextContent() {
    const [n, t] = this.getSliceIndices();
    return this.caret.origin.getTextContent().slice(n, t);
  }
  getTextContentSize() {
    return Math.abs(this.distance);
  }
  removeTextSlice() {
    const { caret: { origin: n, direction: t } } = this, [r, o] = this.getSliceIndices(), i = n.getTextContent();
    return dn(n.setTextContent(i.slice(0, r) + i.slice(o)), t, r);
  }
}
function ya(e) {
  return Vt(e, Te(pe(), e.direction));
}
function L0(e) {
  return Vt(e, e);
}
function Vt(e, n) {
  return e.direction !== n.direction && $(265), new ma(e, n, e.direction);
}
function $f(e) {
  const { initial: n, hasNext: t, step: r, map: o } = e;
  let i = n;
  return { [Symbol.iterator]() {
    return this;
  }, next() {
    if (!t(i)) return { done: !0, value: void 0 };
    const s = { done: !1, value: o(i) };
    return i = r(i), s;
  } };
}
function Pf(e, n) {
  const t = io(e.origin, n.origin);
  switch (t === null && $(275, e.origin.getKey(), n.origin.getKey()), t.type) {
    case "same": {
      const r = e.type === "text", o = n.type === "text";
      return r && o ? (function(i, s) {
        return Math.sign(i - s);
      })(e.offset, n.offset) : e.type === n.type ? 0 : r ? -1 : o ? 1 : e.type === "child" ? -1 : 1;
    }
    case "ancestor":
      return e.type === "child" ? -1 : 1;
    case "descendant":
      return n.type === "child" ? 1 : -1;
    case "branch":
      return Lf(t);
  }
}
function Lf(e) {
  const { a: n, b: t } = e, r = n.__key, o = t.__key;
  let i = n, s = t;
  for (; i && s; i = i.getNextSibling(), s = s.getNextSibling()) {
    if (i.__key === o) return -1;
    if (s.__key === r) return 1;
  }
  return i === null ? 1 : -1;
}
function qr(e, n) {
  return n.is(e);
}
function Vl(e) {
  return T(e) ? [e.getLatest(), null] : [e.getParent(), e.getLatest()];
}
function io(e, n) {
  if (e.is(n)) return { commonAncestor: e, type: "same" };
  const t = /* @__PURE__ */ new Map();
  for (let [r, o] = Vl(e); r; o = r, r = r.getParent()) t.set(r, o);
  for (let [r, o] = Vl(n); r; o = r, r = r.getParent()) {
    const i = t.get(r);
    if (i !== void 0) return i === null ? (qr(e, r) || $(276), { commonAncestor: r, type: "ancestor" }) : o === null ? (qr(n, r) || $(277), { commonAncestor: r, type: "descendant" }) : ((T(i) || qr(e, i)) && (T(o) || qr(n, o)) && r.is(i.getParent()) && r.is(o.getParent()) || $(278), { a: i, b: o, commonAncestor: r, type: "branch" });
  }
  return null;
}
function kt(e, n) {
  const { type: t, key: r, offset: o } = e, i = k0(e.key);
  return t === "text" ? (B(i) || $(266, i.getType(), r), dn(i, n, o)) : (T(i) || $(267, i.getType(), r), B0(i, e.offset, n));
}
function Sr(e, n) {
  const { origin: t, direction: r } = n, o = r === "next";
  $t(n) ? e.set(t.getKey(), n.offset, "text") : Pn(n) ? B(t) ? e.set(t.getKey(), Pt(t, r), "text") : e.set(t.getParentOrThrow().getKey(), t.getIndexWithinParent() + (o ? 1 : 0), "element") : (ut(n) && T(t) || $(268), e.set(t.getKey(), o ? 0 : t.getChildrenSize(), "element"));
}
function D0(e) {
  const n = j(), t = z(n) ? n : Js();
  return so(t, e), $e(t), t;
}
function so(e, n) {
  Sr(e.anchor, n.anchor), Sr(e.focus, n.focus);
}
function jl(e) {
  const { anchor: n, focus: t } = e, r = kt(n, "next"), o = kt(t, "next"), i = Pf(r, o) <= 0 ? "next" : "previous";
  return Vt(Ln(r, i), Ln(o, i));
}
function ba(e) {
  const { direction: n, origin: t } = e, r = Te(t, Jn(n)).getNodeAtCaret();
  return r ? Te(r, n) : Ct(t.getParentOrThrow(), n);
}
function Ul(e, n = "root") {
  const t = [e];
  for (let r = ut(e) ? e.getParentCaret(n) : e.getSiblingCaret(); r !== null; r = r.getParentCaret(n)) t.push(ba(r));
  return t;
}
function Ai(e) {
  return !!e && e.origin.isAttached();
}
function z0(e, n = "removeEmptySlices") {
  if (e.isCollapsed()) return e;
  const t = "root", r = "next";
  let o = n;
  const i = zf(e, r), s = Ul(i.anchor, t), a = Ul(i.focus.getFlipped(), t), l = /* @__PURE__ */ new Set(), u = [];
  for (const g of i.iterNodeCarets(t)) if (ut(g)) l.add(g.origin.getKey());
  else if (Pn(g)) {
    const { origin: h } = g;
    T(h) && !l.has(h.getKey()) || u.push(h);
  }
  for (const g of u) g.remove();
  for (const g of i.getTextSlices()) {
    if (!g) continue;
    const { origin: h } = g.caret, m = h.getTextContentSize(), v = ba(Te(h, r)), y = h.getMode();
    if (Math.abs(g.distance) === m && o === "removeEmptySlices" || y === "token" && g.distance !== 0) v.remove();
    else if (g.distance !== 0) {
      o = "removeEmptySlices";
      let b = g.removeTextSlice();
      const x = g.caret.origin;
      if (y === "segmented") {
        const w = b.origin, S = he(w.getTextContent()).setStyle(w.getStyle()).setFormat(w.getFormat());
        v.replaceOrInsert(S), b = dn(S, r, b.offset);
      }
      x.is(s[0].origin) && (s[0] = b), x.is(a[0].origin) && (a[0] = b.getFlipped());
    }
  }
  let c, d;
  for (const g of s) if (Ai(g)) {
    c = st(g);
    break;
  }
  for (const g of a) if (Ai(g)) {
    d = st(g);
    break;
  }
  const f = (function(g, h, m) {
    if (!g || !h) return null;
    const v = g.getParentAtCaret(), y = h.getParentAtCaret();
    if (!v || !y) return null;
    const b = v.getParents().reverse();
    b.push(v);
    const x = y.getParents().reverse();
    x.push(y);
    const w = Math.min(b.length, x.length);
    let S;
    for (S = 0; S < w && b[S] === x[S]; S++) ;
    const k = (R, O) => {
      let F;
      for (let U = S; U < R.length; U++) {
        const L = R[U];
        if (Ue(L)) return;
        !F && O(L) && (F = L);
      }
      return F;
    }, N = k(b, Tt), C = N && k(x, (R) => m.has(R.getKey()) && Tt(R));
    return N && C ? [N, C] : null;
  })(c, d, l);
  if (f) {
    const [g, h] = f;
    Ct(g, "previous").splice(0, h.getChildren()), h.remove();
  }
  const p = [c, d, ...s, ...a].find(Ai);
  if (p)
    return L0(Ln(st(p), e.direction));
  $(269, JSON.stringify(s.map((g) => g.origin.__key)));
}
function st(e) {
  const n = (function(o) {
    let i = o;
    for (; ut(i); ) {
      const s = ha(i);
      if (!ut(s)) break;
      i = s;
    }
    return i;
  })(e.getLatest()), { direction: t } = n;
  if (B(n.origin)) return $t(n) ? n : dn(n.origin, t, t);
  const r = n.getAdjacentCaret();
  return Pn(r) && B(r.origin) ? dn(r.origin, t, Jn(t)) : n;
}
function Df(e) {
  return $t(e) && e.offset !== Pt(e.origin, e.direction);
}
function Ln(e, n) {
  return e.direction === n ? e : e.getFlipped();
}
function zf(e, n) {
  return e.direction === n ? e : Vt(Ln(e.focus, n), Ln(e.anchor, n));
}
function B0(e, n, t) {
  let r = Ct(e, "next");
  for (let o = 0; o < n; o++) {
    const i = r.getAdjacentCaret();
    if (i === null) break;
    r = i;
  }
  return Ln(r, t);
}
function V0(...e) {
  return e;
}
function j0(e, n) {
  if (!n || e === n) return e;
  for (const t in n) if (e[t] !== n[t]) return { ...e, ...n };
  return e;
}
const Bf = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, U0 = Bf ? kr : Se, Zr = { tag: Fn };
function G0({ initialConfig: e, children: n }) {
  const t = Dn(() => {
    const { theme: r, namespace: o, nodes: i, onError: s, editorState: a, html: l } = e, u = tv(null, r), c = vf({ editable: e.editable, html: l, namespace: o, nodes: i, onError: (d) => s(d, c), theme: r });
    return (function(d, f) {
      if (f !== null) {
        if (f === void 0) d.update(() => {
          const p = pe();
          if (p.isEmpty()) {
            const g = ve();
            p.append(g);
            const h = Bf ? document.activeElement : null;
            (j() !== null || h !== null && h === d.getRootElement()) && g.select();
          }
        }, Zr);
        else if (f !== null) switch (typeof f) {
          case "string": {
            const p = d.parseEditorState(f);
            d.setEditorState(p, Zr);
            break;
          }
          case "object":
            d.setEditorState(f, Zr);
            break;
          case "function":
            d.update(() => {
              pe().isEmpty() && f(d);
            }, Zr);
        }
      }
    })(c, a), [c, u];
  }, []);
  return U0(() => {
    const r = e.editable, [o] = t;
    o.setEditable(r === void 0 || r);
  }, []), _(hd.Provider, { value: t, children: n });
}
const H0 = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? kr : Se;
function W0(e) {
  return { initialValueFn: () => e.isEditable(), subscribe: (n) => e.registerEditableListener(n) };
}
function K0() {
  return (function(e) {
    const [n] = ft(), t = Dn(() => e(n), [n, e]), [r, o] = Qe(() => t.initialValueFn()), i = Ce(r);
    return H0(() => {
      const { initialValueFn: s, subscribe: a } = t, l = s();
      return i.current !== l && (i.current = l, o(l)), a((u) => {
        i.current = u, o(u);
      });
    }, [t, e]), r;
  })(W0);
}
const Cs = /* @__PURE__ */ new Map();
function Vf(e) {
  const n = {};
  if (!e) return n;
  const t = e.split(";");
  for (const r of t) if (r !== "") {
    const [o, i] = r.split(/:([^]+)/);
    o && i && (n[o.trim()] = i.trim());
  }
  return n;
}
function Gl(e) {
  let n = Cs.get(e);
  return n === void 0 && (n = Vf(e), Cs.set(e, n)), n;
}
function jf(e) {
  const n = Qo().getElementByKey(e.getKey());
  if (n === null) return null;
  const t = n.ownerDocument.defaultView;
  return t === null ? null : t.getComputedStyle(n);
}
function Uf(e) {
  return jf(be(e) ? e : e.getParentOrThrow());
}
function Hl(e) {
  const n = Uf(e);
  return n !== null && n.direction === "rtl";
}
function Gf(e, n, t = "self") {
  const r = e.getStartEndPoints();
  if (n.isSelected(e) && !bt(n) && r !== null) {
    const [o, i] = r, s = e.isBackward(), a = o.getNode(), l = i.getNode(), u = n.is(a), c = n.is(l);
    if (u || c) {
      const [d, f] = ms(e), p = a.is(l), g = n.is(s ? l : a), h = n.is(s ? a : l);
      let m, v = 0;
      p ? (v = d > f ? f : d, m = d > f ? d : f) : g ? (v = s ? f : d, m = void 0) : h && (v = 0, m = s ? d : f);
      const y = n.__text.slice(v, m);
      y !== n.__text && (t === "clone" && (n = R0(n)), n.__text = y);
    }
  }
  return n;
}
function q0(e) {
  const n = e.getStyle(), t = Vf(n);
  Cs.set(n, t);
}
function Hf(e) {
  const n = Wf(e);
  return n !== null && n.writingMode === "vertical-rl";
}
function Wf(e) {
  const n = e.anchor.getNode();
  return T(n) ? jf(n) : Uf(n);
}
function Wl(e, n) {
  let t = Hf(e) ? !n : n;
  Kf(e) && (t = !t);
  const r = kt(e.focus, t ? "previous" : "next");
  if (Df(r)) return !1;
  for (const o of ya(r)) {
    if (ut(o)) return !o.origin.isInline();
    if (!T(o.origin)) {
      if (ne(o.origin)) return !0;
      break;
    }
  }
  return !1;
}
function Z0(e, n, t, r) {
  e.modify(n ? "extend" : "move", t, r);
}
function Kf(e) {
  const n = Wf(e);
  return n !== null && n.direction === "rtl";
}
function Kl(e, n, t) {
  const r = Kf(e);
  let o;
  o = Hf(e) || r ? !t : t, Z0(e, n, o, "character");
}
function J0(e, ...n) {
  const t = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", e);
  for (const o of n) r.append("v", o);
  throw t.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
const qf = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, Y0 = qf && "documentMode" in document ? document.documentMode : null;
!(!qf || !("InputEvent" in window) || Y0) && "getTargetRanges" in new window.InputEvent("input");
function Zf(...e) {
  const n = [];
  for (const t of e) if (t && typeof t == "string") for (const [r] of t.matchAll(/\S+/g)) n.push(r);
  return n;
}
function jt(...e) {
  return () => {
    for (let n = e.length - 1; n >= 0; n--) e[n]();
    e.length = 0;
  };
}
function tt(e, ...n) {
  const t = Zf(...n);
  t.length > 0 && e.classList.add(...t);
}
function ti(e, ...n) {
  const t = Zf(...n);
  t.length > 0 && e.classList.remove(...t);
}
function X0(e) {
  return e ? e.getAdjacentCaret() : null;
}
function Q0(e) {
  const n = Mt(e, (t) => T(t) && !t.isInline());
  return T(n) || J0(4, e.__key), n;
}
function Jt(e, n) {
  return e !== null && Object.getPrototypeOf(e).constructor.name === n.name;
}
const ex = Symbol.for("preact-signals");
function ni() {
  if (Lt > 1) return void Lt--;
  let e, n = !1;
  for (; gr !== void 0; ) {
    let t = gr;
    for (gr = void 0, ks++; t !== void 0; ) {
      const r = t.o;
      if (t.o = void 0, t.f &= -3, !(8 & t.f) && Jf(t)) try {
        t.c();
      } catch (o) {
        n || (e = o, n = !0);
      }
      t = r;
    }
  }
  if (ks = 0, Lt--, n) throw e;
}
function tx(e) {
  if (Lt > 0) return e();
  Lt++;
  try {
    return e();
  } finally {
    ni();
  }
}
let re, gr;
function ql(e) {
  const n = re;
  re = void 0;
  try {
    return e();
  } finally {
    re = n;
  }
}
let Lt = 0, ks = 0, ao = 0;
function Zl(e) {
  if (re === void 0) return;
  let n = e.n;
  return n === void 0 || n.t !== re ? (n = { i: 0, S: e, p: re.s, n: void 0, t: re, e: void 0, x: void 0, r: n }, re.s !== void 0 && (re.s.n = n), re.s = n, e.n = n, 32 & re.f && e.S(n), n) : n.i === -1 ? (n.i = 0, n.n !== void 0 && (n.n.p = n.p, n.p !== void 0 && (n.p.n = n.n), n.p = re.s, n.n = void 0, re.s.n = n, re.s = n), n) : void 0;
}
function Pe(e, n) {
  this.v = e, this.i = 0, this.n = void 0, this.t = void 0, this.W = n == null ? void 0 : n.watched, this.Z = n == null ? void 0 : n.unwatched, this.name = n == null ? void 0 : n.name;
}
function nx(e, n) {
  return new Pe(e, n);
}
function Jf(e) {
  for (let n = e.s; n !== void 0; n = n.n) if (n.S.i !== n.i || !n.S.h() || n.S.i !== n.i) return !0;
  return !1;
}
function Jl(e) {
  for (let n = e.s; n !== void 0; n = n.n) {
    const t = n.S.n;
    if (t !== void 0 && (n.r = t), n.S.n = n, n.i = -1, n.n === void 0) {
      e.s = n;
      break;
    }
  }
}
function Yf(e) {
  let n, t = e.s;
  for (; t !== void 0; ) {
    const r = t.p;
    t.i === -1 ? (t.S.U(t), r !== void 0 && (r.n = t.n), t.n !== void 0 && (t.n.p = r)) : n = t, t.S.n = t.r, t.r !== void 0 && (t.r = void 0), t = r;
  }
  e.s = n;
}
function yn(e, n) {
  Pe.call(this, void 0), this.x = e, this.s = void 0, this.g = ao - 1, this.f = 4, this.W = n == null ? void 0 : n.watched, this.Z = n == null ? void 0 : n.unwatched, this.name = n == null ? void 0 : n.name;
}
function Xf(e) {
  const n = e.u;
  if (e.u = void 0, typeof n == "function") {
    Lt++;
    const t = re;
    re = void 0;
    try {
      n();
    } catch (r) {
      throw e.f &= -2, e.f |= 8, va(e), r;
    } finally {
      re = t, ni();
    }
  }
}
function va(e) {
  for (let n = e.s; n !== void 0; n = n.n) n.S.U(n);
  e.x = void 0, e.s = void 0, Xf(e);
}
function rx(e) {
  if (re !== this) throw new Error("Out-of-order effect");
  Yf(this), re = e, this.f &= -2, 8 & this.f && va(this), ni();
}
function Sn(e, n) {
  this.x = e, this.u = void 0, this.s = void 0, this.o = void 0, this.f = 32, this.name = n == null ? void 0 : n.name;
}
function xa(e, n) {
  const t = new Sn(e, n);
  try {
    t.c();
  } catch (o) {
    throw t.d(), o;
  }
  const r = t.d.bind(t);
  return r[Symbol.dispose] = r, r;
}
function ox(e, n = {}) {
  const t = {};
  for (const r in e) {
    const o = n[r], i = nx(o === void 0 ? e[r] : o);
    t[r] = i;
  }
  return t;
}
Pe.prototype.brand = ex, Pe.prototype.h = function() {
  return !0;
}, Pe.prototype.S = function(e) {
  const n = this.t;
  n !== e && e.e === void 0 && (e.x = n, this.t = e, n !== void 0 ? n.e = e : ql(() => {
    var t;
    (t = this.W) == null || t.call(this);
  }));
}, Pe.prototype.U = function(e) {
  if (this.t !== void 0) {
    const n = e.e, t = e.x;
    n !== void 0 && (n.x = t, e.e = void 0), t !== void 0 && (t.e = n, e.x = void 0), e === this.t && (this.t = t, t === void 0 && ql(() => {
      var r;
      (r = this.Z) == null || r.call(this);
    }));
  }
}, Pe.prototype.subscribe = function(e) {
  return xa(() => {
    const n = this.value, t = re;
    re = void 0;
    try {
      e(n);
    } finally {
      re = t;
    }
  }, { name: "sub" });
}, Pe.prototype.valueOf = function() {
  return this.value;
}, Pe.prototype.toString = function() {
  return this.value + "";
}, Pe.prototype.toJSON = function() {
  return this.value;
}, Pe.prototype.peek = function() {
  const e = re;
  re = void 0;
  try {
    return this.value;
  } finally {
    re = e;
  }
}, Object.defineProperty(Pe.prototype, "value", { get() {
  const e = Zl(this);
  return e !== void 0 && (e.i = this.i), this.v;
}, set(e) {
  if (e !== this.v) {
    if (ks > 100) throw new Error("Cycle detected");
    this.v = e, this.i++, ao++, Lt++;
    try {
      for (let n = this.t; n !== void 0; n = n.x) n.t.N();
    } finally {
      ni();
    }
  }
} }), yn.prototype = new Pe(), yn.prototype.h = function() {
  if (this.f &= -3, 1 & this.f) return !1;
  if ((36 & this.f) == 32 || (this.f &= -5, this.g === ao)) return !0;
  if (this.g = ao, this.f |= 1, this.i > 0 && !Jf(this)) return this.f &= -2, !0;
  const e = re;
  try {
    Jl(this), re = this;
    const n = this.x();
    (16 & this.f || this.v !== n || this.i === 0) && (this.v = n, this.f &= -17, this.i++);
  } catch (n) {
    this.v = n, this.f |= 16, this.i++;
  }
  return re = e, Yf(this), this.f &= -2, !0;
}, yn.prototype.S = function(e) {
  if (this.t === void 0) {
    this.f |= 36;
    for (let n = this.s; n !== void 0; n = n.n) n.S.S(n);
  }
  Pe.prototype.S.call(this, e);
}, yn.prototype.U = function(e) {
  if (this.t !== void 0 && (Pe.prototype.U.call(this, e), this.t === void 0)) {
    this.f &= -33;
    for (let n = this.s; n !== void 0; n = n.n) n.S.U(n);
  }
}, yn.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 6;
    for (let e = this.t; e !== void 0; e = e.x) e.t.N();
  }
}, Object.defineProperty(yn.prototype, "value", { get() {
  if (1 & this.f) throw new Error("Cycle detected");
  const e = Zl(this);
  if (this.h(), e !== void 0 && (e.i = this.i), 16 & this.f) throw this.v;
  return this.v;
} }), Sn.prototype.c = function() {
  const e = this.S();
  try {
    if (8 & this.f || this.x === void 0) return;
    const n = this.x();
    typeof n == "function" && (this.u = n);
  } finally {
    e();
  }
}, Sn.prototype.S = function() {
  if (1 & this.f) throw new Error("Cycle detected");
  this.f |= 1, this.f &= -9, Xf(this), Jl(this), Lt++;
  const e = re;
  return re = this, rx.bind(this, e);
}, Sn.prototype.N = function() {
  2 & this.f || (this.f |= 2, this.o = gr, gr = this);
}, Sn.prototype.d = function() {
  this.f |= 8, 1 & this.f || va(this);
}, Sn.prototype.dispose = function() {
  this.d();
};
function ix(e) {
  return (typeof e.nodes == "function" ? e.nodes() : e.nodes) || [];
}
function le(e, ...n) {
  const t = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", e);
  for (const o of n) r.append("v", o);
  throw t.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
function Qf(e, n) {
  if (e && n && !Array.isArray(n) && typeof e == "object" && typeof n == "object") {
    const t = e, r = n;
    for (const o in r) t[o] = Qf(t[o], r[o]);
    return e;
  }
  return n;
}
const _a = 0, Es = 1, eg = 2, Ti = 3, Jr = 4, bn = 5, Fi = 6, tr = 7;
function Ii(e) {
  return e.id === _a;
}
function tg(e) {
  return e.id === eg;
}
function sx(e) {
  return (function(n) {
    return n.id === Es;
  })(e) || le(305, String(e.id), String(Es)), Object.assign(e, { id: eg });
}
const ax = /* @__PURE__ */ new Set();
let lx = class {
  constructor(n, t) {
    A(this, "builder");
    A(this, "configs");
    A(this, "_dependency");
    A(this, "_peerNameSet");
    A(this, "extension");
    A(this, "state");
    A(this, "_signal");
    this.builder = n, this.extension = t, this.configs = /* @__PURE__ */ new Set(), this.state = { id: _a };
  }
  mergeConfigs() {
    let n = this.extension.config || {};
    const t = this.extension.mergeConfig ? this.extension.mergeConfig.bind(this.extension) : j0;
    for (const r of this.configs) n = t(n, r);
    return n;
  }
  init(n) {
    const t = this.state;
    tg(t) || le(306, String(t.id));
    const r = { getDependency: this.getInitDependency.bind(this), getDirectDependentNames: this.getDirectDependentNames.bind(this), getPeer: this.getInitPeer.bind(this), getPeerNameSet: this.getPeerNameSet.bind(this) }, o = { ...r, getDependency: this.getDependency.bind(this), getInitResult: this.getInitResult.bind(this), getPeer: this.getPeer.bind(this) }, i = (function(a, l, u) {
      return Object.assign(a, { config: l, id: Ti, registerState: u });
    })(t, this.mergeConfigs(), r);
    let s;
    this.state = i, this.extension.init && (s = this.extension.init(n, i.config, r)), this.state = (function(a, l, u) {
      return Object.assign(a, { id: Jr, initResult: l, registerState: u });
    })(i, s, o);
  }
  build(n) {
    const t = this.state;
    let r;
    t.id !== Jr && le(307, String(t.id), String(bn)), this.extension.build && (r = this.extension.build(n, t.config, t.registerState));
    const o = { ...t.registerState, getOutput: () => r, getSignal: this.getSignal.bind(this) };
    this.state = (function(i, s, a) {
      return Object.assign(i, { id: bn, output: s, registerState: a });
    })(t, r, o);
  }
  register(n, t) {
    this._signal = t;
    const r = this.state;
    r.id !== bn && le(308, String(r.id), String(bn));
    const o = this.extension.register && this.extension.register(n, r.config, r.registerState);
    return this.state = (function(i) {
      return Object.assign(i, { id: Fi });
    })(r), () => {
      const i = this.state;
      i.id !== tr && le(309, String(r.id), String(tr)), this.state = (function(s) {
        return Object.assign(s, { id: bn });
      })(i), o && o();
    };
  }
  afterRegistration(n) {
    const t = this.state;
    let r;
    return t.id !== Fi && le(310, String(t.id), String(Fi)), this.extension.afterRegistration && (r = this.extension.afterRegistration(n, t.config, t.registerState)), this.state = (function(o) {
      return Object.assign(o, { id: tr });
    })(t), r;
  }
  getSignal() {
    return this._signal === void 0 && le(311), this._signal;
  }
  getInitResult() {
    this.extension.init === void 0 && le(312, this.extension.name);
    const n = this.state;
    return (function(t) {
      return t.id >= Jr;
    })(n) || le(313, String(n.id), String(Jr)), n.initResult;
  }
  getInitPeer(n) {
    const t = this.builder.extensionNameMap.get(n);
    return t ? t.getExtensionInitDependency() : void 0;
  }
  getExtensionInitDependency() {
    const n = this.state;
    return (function(t) {
      return t.id >= Ti;
    })(n) || le(314, String(n.id), String(Ti)), { config: n.config };
  }
  getPeer(n) {
    const t = this.builder.extensionNameMap.get(n);
    return t ? t.getExtensionDependency() : void 0;
  }
  getInitDependency(n) {
    const t = this.builder.getExtensionRep(n);
    return t === void 0 && le(315, this.extension.name, n.name), t.getExtensionInitDependency();
  }
  getDependency(n) {
    const t = this.builder.getExtensionRep(n);
    return t === void 0 && le(315, this.extension.name, n.name), t.getExtensionDependency();
  }
  getState() {
    const n = this.state;
    return (function(t) {
      return t.id >= tr;
    })(n) || le(316, String(n.id), String(tr)), n;
  }
  getDirectDependentNames() {
    return this.builder.incomingEdges.get(this.extension.name) || ax;
  }
  getPeerNameSet() {
    let n = this._peerNameSet;
    return n || (n = new Set((this.extension.peerDependencies || []).map(([t]) => t)), this._peerNameSet = n), n;
  }
  getExtensionDependency() {
    if (!this._dependency) {
      const n = this.state;
      (function(t) {
        return t.id >= bn;
      })(n) || le(317, this.extension.name), this._dependency = { config: n.config, init: n.initResult, output: n.output };
    }
    return this._dependency;
  }
};
const Yl = { tag: Fn };
function ux() {
  const e = pe();
  e.isEmpty() && e.append(ve());
}
const cx = { config: { setOptions: Yl, updateOptions: Yl }, init: ({ $initialEditorState: e = ux }) => ({ $initialEditorState: e, initialized: !1 }), afterRegistration(e, { updateOptions: n, setOptions: t }, r) {
  const o = r.getInitResult();
  if (!o.initialized) {
    o.initialized = !0;
    const { $initialEditorState: i } = o;
    if (f0(i)) e.setEditorState(i, t);
    else if (typeof i == "function") e.update(() => {
      i(e);
    }, n);
    else if (i && (typeof i == "string" || typeof i == "object")) {
      const s = e.parseEditorState(i);
      e.setEditorState(s, t);
    }
  }
  return () => {
  };
}, name: "@lexical/extension/InitialState", nodes: [Kn, Ut, Un, Gn, qn] }, Xl = Symbol.for("@lexical/extension/LexicalBuilder");
function Ql() {
}
function dx(e) {
  throw e;
}
function Yr(e) {
  return Array.isArray(e) ? e : [e];
}
const Oi = "0.39.0+prod.esm";
let ng = class lo {
  constructor(n) {
    A(this, "roots");
    A(this, "extensionNameMap");
    A(this, "outgoingConfigEdges");
    A(this, "incomingEdges");
    A(this, "conflicts");
    A(this, "_sortedExtensionReps");
    A(this, "PACKAGE_VERSION");
    this.outgoingConfigEdges = /* @__PURE__ */ new Map(), this.incomingEdges = /* @__PURE__ */ new Map(), this.extensionNameMap = /* @__PURE__ */ new Map(), this.conflicts = /* @__PURE__ */ new Map(), this.PACKAGE_VERSION = Oi, this.roots = n;
    for (const t of n) this.addExtension(t);
  }
  static fromExtensions(n) {
    const t = [Yr(cx)];
    for (const r of n) t.push(Yr(r));
    return new lo(t);
  }
  static maybeFromEditor(n) {
    const t = n[Xl];
    return t && (t.PACKAGE_VERSION !== Oi && le(292, t.PACKAGE_VERSION, Oi), t instanceof lo || le(293)), t;
  }
  static fromEditor(n) {
    const t = lo.maybeFromEditor(n);
    return t === void 0 && le(294), t;
  }
  constructEditor() {
    const { $initialEditorState: n, onError: t, ...r } = this.buildCreateEditorArgs(), o = Object.assign(vf({ ...r, ...t ? { onError: (i) => {
      t(i, o);
    } } : {} }), { [Xl]: this });
    for (const i of this.sortedExtensionReps()) i.build(o);
    return o;
  }
  buildEditor() {
    let n = Ql;
    function t() {
      try {
        n();
      } finally {
        n = Ql;
      }
    }
    const r = Object.assign(this.constructEditor(), { dispose: t, [Symbol.dispose]: t });
    return n = jt(this.registerEditor(r), () => r.setRootElement(null)), r;
  }
  hasExtensionByName(n) {
    return this.extensionNameMap.has(n);
  }
  getExtensionRep(n) {
    const t = this.extensionNameMap.get(n.name);
    if (t) return t.extension !== n && le(295, n.name), t;
  }
  addEdge(n, t, r) {
    const o = this.outgoingConfigEdges.get(n);
    o ? o.set(t, r) : this.outgoingConfigEdges.set(n, /* @__PURE__ */ new Map([[t, r]]));
    const i = this.incomingEdges.get(t);
    i ? i.add(n) : this.incomingEdges.set(t, /* @__PURE__ */ new Set([n]));
  }
  addExtension(n) {
    this._sortedExtensionReps !== void 0 && le(296);
    const t = Yr(n), [r] = t;
    typeof r.name != "string" && le(297, typeof r.name);
    let o = this.extensionNameMap.get(r.name);
    if (o !== void 0 && o.extension !== r && le(298, r.name), !o) {
      o = new lx(this, r), this.extensionNameMap.set(r.name, o);
      const i = this.conflicts.get(r.name);
      typeof i == "string" && le(299, r.name, i);
      for (const s of r.conflictsWith || []) this.extensionNameMap.has(s) && le(299, r.name, s), this.conflicts.set(s, r.name);
      for (const s of r.dependencies || []) {
        const a = Yr(s);
        this.addEdge(r.name, a[0].name, a.slice(1)), this.addExtension(a);
      }
      for (const [s, a] of r.peerDependencies || []) this.addEdge(r.name, s, a ? [a] : []);
    }
  }
  sortedExtensionReps() {
    if (this._sortedExtensionReps) return this._sortedExtensionReps;
    const n = [], t = (r, o) => {
      let i = r.state;
      if (tg(i)) return;
      const s = r.extension.name;
      var a;
      Ii(i) || le(300, s, o || "[unknown]"), Ii(a = i) || le(304, String(a.id), String(_a)), i = Object.assign(a, { id: Es }), r.state = i;
      const l = this.outgoingConfigEdges.get(s);
      if (l) for (const u of l.keys()) {
        const c = this.extensionNameMap.get(u);
        c && t(c, s);
      }
      i = sx(i), r.state = i, n.push(r);
    };
    for (const r of this.extensionNameMap.values()) Ii(r.state) && t(r);
    for (const r of n) for (const [o, i] of this.outgoingConfigEdges.get(r.extension.name) || []) if (i.length > 0) {
      const s = this.extensionNameMap.get(o);
      if (s) for (const a of i) s.configs.add(a);
    }
    for (const [r, ...o] of this.roots) if (o.length > 0) {
      const i = this.extensionNameMap.get(r.name);
      i === void 0 && le(301, r.name);
      for (const s of o) i.configs.add(s);
    }
    return this._sortedExtensionReps = n, this._sortedExtensionReps;
  }
  registerEditor(n) {
    const t = this.sortedExtensionReps(), r = new AbortController(), o = [() => r.abort()], i = r.signal;
    for (const s of t) {
      const a = s.register(n, i);
      a && o.push(a);
    }
    for (const s of t) {
      const a = s.afterRegistration(n);
      a && o.push(a);
    }
    return jt(...o);
  }
  buildCreateEditorArgs() {
    const n = {}, t = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), i = {}, s = {}, a = this.sortedExtensionReps();
    for (const c of a) {
      const { extension: d } = c;
      if (d.onError !== void 0 && (n.onError = d.onError), d.disableEvents !== void 0 && (n.disableEvents = d.disableEvents), d.parentEditor !== void 0 && (n.parentEditor = d.parentEditor), d.editable !== void 0 && (n.editable = d.editable), d.namespace !== void 0 && (n.namespace = d.namespace), d.$initialEditorState !== void 0 && (n.$initialEditorState = d.$initialEditorState), d.nodes) for (const f of ix(d)) {
        if (typeof f != "function") {
          const p = r.get(f.replace);
          p && le(302, d.name, f.replace.name, p.extension.name), r.set(f.replace, c);
        }
        t.add(f);
      }
      if (d.html) {
        if (d.html.export) for (const [f, p] of d.html.export.entries()) o.set(f, p);
        d.html.import && Object.assign(i, d.html.import);
      }
      d.theme && Qf(s, d.theme);
    }
    Object.keys(s).length > 0 && (n.theme = s), t.size && (n.nodes = [...t]);
    const l = Object.keys(i).length > 0, u = o.size > 0;
    (l || u) && (n.html = {}, l && (n.html.import = i), u && (n.html.export = o));
    for (const c of a) c.init(n);
    return n.onError || (n.onError = dx), n;
  }
};
function fx(e, n) {
  const t = ng.fromEditor(e).extensionNameMap.get(n);
  return t ? t.getExtensionDependency() : void 0;
}
class Mr extends ea {
  static getType() {
    return "horizontalrule";
  }
  static clone(n) {
    return new Mr(n.__key);
  }
  static importJSON(n) {
    return rg().updateFromJSON(n);
  }
  static importDOM() {
    return { hr: () => ({ conversion: gx, priority: 0 }) };
  }
  exportDOM() {
    return { element: document.createElement("hr") };
  }
  createDOM(n) {
    const t = document.createElement("hr");
    return tt(t, n.theme.hr), t;
  }
  getTextContent() {
    return `
`;
  }
  isInline() {
    return !1;
  }
  updateDOM() {
    return !1;
  }
}
function gx() {
  return { node: rg() };
}
function rg() {
  return Mf(Mr);
}
function px(e) {
  return e instanceof Mr;
}
const hx = { name: "@lexical/react/ReactProvider" };
function mx() {
  return pe().getTextContent();
}
function yx(e, n = !0) {
  if (e) return !1;
  let t = mx();
  return n && (t = t.trim()), t === "";
}
function bx(e) {
  if (!yx(e, !1)) return !1;
  const n = pe().getChildren(), t = n.length;
  if (t > 1) return !1;
  for (let r = 0; r < t; r++) {
    const o = n[r];
    if (ne(o)) return !1;
    if (T(o)) {
      if (!Fr(o) || o.__indent !== 0) return !1;
      const i = o.getChildren(), s = i.length;
      for (let a = 0; a < s; a++) {
        const l = i[r];
        if (!B(l)) return !1;
      }
    }
  }
  return !0;
}
function og(e) {
  return () => bx(e);
}
function vx(e) {
  const n = window.location.origin, t = (r) => {
    if (r.origin !== n) return;
    const o = e.getRootElement();
    if (document.activeElement !== o) return;
    const i = r.data;
    if (typeof i == "string") {
      let s;
      try {
        s = JSON.parse(i);
      } catch {
        return;
      }
      if (s && s.protocol === "nuanria_messaging" && s.type === "request") {
        const a = s.payload;
        if (a && a.functionId === "makeChanges") {
          const l = a.args;
          if (l) {
            const [u, c, d, f, p] = l;
            e.update(() => {
              const g = j();
              if (z(g)) {
                const h = g.anchor;
                let m = h.getNode(), v = 0, y = 0;
                if (B(m) && u >= 0 && c >= 0 && (v = u, y = u + c, g.setTextNodeRange(m, v, m, y)), v === y && d === "" || (g.insertRawText(d), m = h.getNode()), B(m)) {
                  v = f, y = f + p;
                  const b = m.getTextContentSize();
                  v = v > b ? b : v, y = y > b ? b : y, g.setTextNodeRange(m, v, m, y);
                }
                r.stopImmediatePropagation();
              }
            });
          }
        }
      }
    }
  };
  return window.addEventListener("message", t, !0), () => {
    window.removeEventListener("message", t, !0);
  };
}
function xx(e, n) {
  const t = Sf(n) ? n.body.childNodes : n.childNodes;
  let r = [];
  const o = [];
  for (const i of t) if (!sg.has(i.nodeName)) {
    const s = ag(i, e, o, !1);
    s !== null && (r = r.concat(s));
  }
  return (function(i) {
    for (const s of i) s.getNextSibling() instanceof na && s.insertAfter(et());
    for (const s of i) {
      const a = s.getChildren();
      for (const l of a) s.insertBefore(l);
      s.remove();
    }
  })(o), r;
}
function _x(e, n) {
  if (typeof document > "u" || typeof window > "u" && global.window === void 0) throw new Error("To use $generateHtmlFromNodes in headless mode please initialize a headless browser implementation such as JSDom before calling this function.");
  const t = document.createElement("div"), r = pe().getChildren();
  for (let o = 0; o < r.length; o++)
    ig(e, r[o], t, n);
  return t.innerHTML;
}
function ig(e, n, t, r = null) {
  let o = r === null || n.isSelected(r);
  const i = T(n) && n.excludeFromCopy("html");
  let s = n;
  r !== null && B(n) && (s = Gf(r, n, "clone"));
  const a = T(s) ? s.getChildren() : [], l = oa(e, s.getType());
  let u;
  u = l && l.exportDOM !== void 0 ? l.exportDOM(e, s) : s.exportDOM(e);
  const { element: c, after: d } = u;
  if (!c) return !1;
  const f = document.createDocumentFragment();
  for (let p = 0; p < a.length; p++) {
    const g = a[p], h = ig(e, g, f, r);
    !o && T(n) && h && n.extractWithChild(g, r, "html") && (o = !0);
  }
  if (o && !i) {
    if ((xe(c) || ws(c)) && c.append(f), t.append(c), d) {
      const p = d.call(s, c);
      p && (ws(c) ? c.replaceChildren(p) : c.replaceWith(p));
    }
  } else t.append(f);
  return o;
}
const sg = /* @__PURE__ */ new Set(["STYLE", "SCRIPT"]);
function ag(e, n, t, r, o = /* @__PURE__ */ new Map(), i) {
  let s = [];
  if (sg.has(e.nodeName)) return s;
  let a = null;
  const l = (function(g, h) {
    const { nodeName: m } = g, v = h._htmlConversions.get(m.toLowerCase());
    let y = null;
    if (v !== void 0) for (const b of v) {
      const x = b(g);
      x !== null && (y === null || (y.priority || 0) <= (x.priority || 0)) && (y = x);
    }
    return y !== null ? y.conversion : null;
  })(e, n), u = l ? l(e) : null;
  let c = null;
  if (u !== null) {
    c = u.after;
    const g = u.node;
    if (a = Array.isArray(g) ? g[g.length - 1] : g, a !== null) {
      for (const [, h] of o) if (a = h(a, i), !a) break;
      a && s.push(...Array.isArray(g) ? g : [a]);
    }
    u.forChild != null && o.set(e.nodeName, u.forChild);
  }
  const d = e.childNodes;
  let f = [];
  const p = (a == null || !Ue(a)) && (a != null && ys(a) || r);
  for (let g = 0; g < d.length; g++) f.push(...ag(d[g], n, t, p, new Map(o), a));
  return c != null && (f = c(f)), Ao(e) && (f = wx(e, f, p ? () => {
    const g = new na();
    return t.push(g), g;
  } : ve)), a == null ? f.length > 0 ? s = s.concat(f) : Ao(e) && (function(g) {
    return g.nextSibling == null || g.previousSibling == null ? !1 : Ss(g.nextSibling) && Ss(g.previousSibling);
  })(e) && (s = s.concat(et())) : T(a) && a.append(...f), s;
}
function wx(e, n, t) {
  const r = e.style.textAlign, o = [];
  let i = [];
  for (let s = 0; s < n.length; s++) {
    const a = n[s];
    if (ys(a)) r && !a.getFormat() && a.setFormat(r), o.push(a);
    else if (i.push(a), s === n.length - 1 || s < n.length - 1 && ys(n[s + 1])) {
      const l = t();
      l.setFormat(r), l.append(...i), o.push(l), i = [];
    }
  }
  return o;
}
function To(e, ...n) {
  const t = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", e);
  for (const o of n) r.append("v", o);
  throw t.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
function Sx(e, n = j()) {
  return n == null && To(166), z(n) && n.isCollapsed() || n.getNodes().length === 0 ? "" : _x(e, n);
}
function Cx(e, n = j()) {
  return n == null && To(166), z(n) && n.isCollapsed() || n.getNodes().length === 0 ? null : JSON.stringify(kx(e, n));
}
function eu(e, n, t) {
  const r = e.getData("application/x-lexical-editor");
  if (r) try {
    const a = JSON.parse(r);
    if (a.namespace === t._config.namespace && Array.isArray(a.nodes))
      return tu(t, Ex(a.nodes), n);
  } catch (a) {
    console.error(a);
  }
  const o = e.getData("text/html"), i = e.getData("text/plain");
  if (o && i !== o) try {
    const a = new DOMParser().parseFromString((function(l) {
      return window.trustedTypes && window.trustedTypes.createPolicy ? window.trustedTypes.createPolicy("lexical", { createHTML: (u) => u }).createHTML(l) : l;
    })(o), "text/html");
    return tu(t, xx(t, a), n);
  } catch (a) {
    console.error(a);
  }
  const s = i || e.getData("text/uri-list");
  if (s != null) if (z(n)) {
    const a = s.split(/(\r?\n|\t)/);
    a[a.length - 1] === "" && a.pop();
    for (let l = 0; l < a.length; l++) {
      const u = j();
      if (z(u)) {
        const c = a[l];
        c === `
` || c === `\r
` ? u.insertParagraph() : c === "	" ? u.insertNodes([Hn()]) : u.insertText(c);
      }
    }
  } else n.insertRawText(s);
}
function tu(e, n, t) {
  e.dispatchCommand(Tv, { nodes: n, selection: t }) || (t.insertNodes(n), (function(r) {
    if (z(r) && r.isCollapsed()) {
      const o = r.anchor;
      let i = null;
      const s = kt(o, "previous");
      if (s) if ($t(s)) i = s.origin;
      else {
        const a = Vt(s, Ct(pe(), "next").getFlipped());
        for (const l of a) {
          if (B(l.origin)) {
            i = l.origin;
            break;
          }
          if (T(l.origin) && !l.origin.isInline()) break;
        }
      }
      if (i && B(i)) {
        const a = i.getFormat(), l = i.getStyle();
        r.format === a && r.style === l || (r.format = a, r.style = l, r.dirty = !0);
      }
    }
  })(t));
}
function lg(e, n, t, r = []) {
  let o = n === null || t.isSelected(n);
  const i = T(t) && t.excludeFromCopy("html");
  let s = t;
  n !== null && B(s) && (s = Gf(n, s, "clone"));
  const a = T(s) ? s.getChildren() : [], l = (function(u) {
    const c = u.exportJSON(), d = u.constructor;
    if (c.type !== d.getType() && To(58, d.name), T(u)) {
      const f = c.children;
      Array.isArray(f) || To(59, d.name);
    }
    return c;
  })(s);
  B(s) && s.getTextContentSize() === 0 && (o = !1);
  for (let u = 0; u < a.length; u++) {
    const c = a[u], d = lg(e, n, c, l.children);
    !o && T(t) && d && t.extractWithChild(c, n, "clone") && (o = !0);
  }
  if (o && !i) r.push(l);
  else if (Array.isArray(l.children)) for (let u = 0; u < l.children.length; u++) {
    const c = l.children[u];
    r.push(c);
  }
  return o;
}
function kx(e, n) {
  const t = [], r = pe().getChildren();
  for (let o = 0; o < r.length; o++)
    lg(e, n, r[o], t);
  return { namespace: e._config.namespace, nodes: t };
}
function Ex(e) {
  const n = [];
  for (let t = 0; t < e.length; t++) {
    const r = e[t], o = d0(r);
    B(o) && q0(o), n.push(o);
  }
  return n;
}
let vn = null;
async function nu(e, n, t) {
  if (vn !== null) return !1;
  if (n !== null) return new Promise((u, c) => {
    e.update(() => {
      u(ru(e, n, t));
    });
  });
  const r = e.getRootElement(), o = e._window || window, i = o.document, s = rt(o);
  if (r === null || s === null) return !1;
  const a = i.createElement("span");
  a.style.cssText = "position: fixed; top: -1000px;", a.append(i.createTextNode("#")), r.append(a);
  const l = new Range();
  return l.setStart(a, 0), l.setEnd(a, 1), s.removeAllRanges(), s.addRange(l), new Promise((u, c) => {
    const d = e.registerCommand(Wo, (f) => (Jt(f, ClipboardEvent) && (d(), vn !== null && (o.clearTimeout(vn), vn = null), u(ru(e, f, t))), !0), h0);
    vn = o.setTimeout(() => {
      d(), vn = null, u(!1);
    }, 50), i.execCommand("copy"), a.remove();
  });
}
function ru(e, n, t) {
  if (t === void 0) {
    const o = rt(e._window), i = j();
    if (!i || i.isCollapsed() || !o) return !1;
    const s = o.anchorNode, a = o.focusNode;
    if (s !== null && a !== null && !Ir(e, s, a)) return !1;
    t = Nx(i);
  }
  n.preventDefault();
  const r = n.clipboardData;
  return r !== null && (Rx(r, t), !0);
}
const ug = [["text/html", Sx], ["application/x-lexical-editor", Cx]];
function Nx(e = j()) {
  const n = { "text/plain": e ? e.getTextContent() : "" };
  if (e) {
    const t = Qo();
    for (const [r, o] of ug) {
      const i = o(t, e);
      i !== null && (n[r] = i);
    }
  }
  return n;
}
function Rx(e, n) {
  for (const [t] of ug) n[t] === void 0 && e.setData(t, "");
  for (const t in n) {
    const r = n[t];
    r !== void 0 && e.setData(t, r);
  }
}
function ou(e, n) {
  if (document.caretRangeFromPoint !== void 0) {
    const t = document.caretRangeFromPoint(e, n);
    return t === null ? null : { node: t.startContainer, offset: t.startOffset };
  }
  if (document.caretPositionFromPoint !== "undefined") {
    const t = document.caretPositionFromPoint(e, n);
    return t === null ? null : { node: t.offsetNode, offset: t.offset };
  }
  return null;
}
const pn = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, Ax = pn && "documentMode" in document ? document.documentMode : null, Tx = pn && /Mac|iPod|iPhone|iPad/.test(navigator.platform), Fx = !(!pn || !("InputEvent" in window) || Ax) && "getTargetRanges" in new window.InputEvent("input"), Ix = pn && /Version\/[\d.]+.*Safari/.test(navigator.userAgent), iu = pn && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, Ox = pn && /^(?=.*Chrome).*/i.test(navigator.userAgent), Mx = pn && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && Tx && !Ox, su = Z("DRAG_DROP_PASTE_FILE");
let ri = class cg extends je {
  static getType() {
    return "quote";
  }
  static clone(n) {
    return new cg(n.__key);
  }
  createDOM(n) {
    const t = document.createElement("blockquote");
    return tt(t, n.theme.quote), t;
  }
  updateDOM(n, t) {
    return !1;
  }
  static importDOM() {
    return { blockquote: (n) => ({ conversion: $x, priority: 0 }) };
  }
  exportDOM(n) {
    const { element: t } = super.exportDOM(n);
    if (xe(t)) {
      this.isEmpty() && t.append(document.createElement("br"));
      const r = this.getFormatType();
      r && (t.style.textAlign = r);
      const o = this.getDirection();
      o && (t.dir = o);
    }
    return { element: t };
  }
  static importJSON(n) {
    return wa().updateFromJSON(n);
  }
  insertNewAfter(n, t) {
    const r = ve(), o = this.getDirection();
    return r.setDirection(o), this.insertAfter(r, t), r;
  }
  collapseAtStart() {
    const n = ve();
    return this.getChildren().forEach((t) => n.append(t)), this.replace(n), !0;
  }
  canMergeWhenEmpty() {
    return !0;
  }
};
function wa() {
  return He(new ri());
}
function Ns(e) {
  return e instanceof ri;
}
let oi = class dg extends je {
  constructor(t, r) {
    super(r);
    A(this, "__tag");
    this.__tag = t;
  }
  static getType() {
    return "heading";
  }
  static clone(t) {
    return new dg(t.__tag, t.__key);
  }
  getTag() {
    return this.__tag;
  }
  setTag(t) {
    const r = this.getWritable();
    return this.__tag = t, r;
  }
  createDOM(t) {
    const r = this.__tag, o = document.createElement(r), i = t.theme.heading;
    if (i !== void 0) {
      const s = i[r];
      tt(o, s);
    }
    return o;
  }
  updateDOM(t, r, o) {
    return t.__tag !== this.__tag;
  }
  static importDOM() {
    return { h1: (t) => ({ conversion: xn, priority: 0 }), h2: (t) => ({ conversion: xn, priority: 0 }), h3: (t) => ({ conversion: xn, priority: 0 }), h4: (t) => ({ conversion: xn, priority: 0 }), h5: (t) => ({ conversion: xn, priority: 0 }), h6: (t) => ({ conversion: xn, priority: 0 }), p: (t) => {
      const r = t.firstChild;
      return r !== null && au(r) ? { conversion: () => ({ node: null }), priority: 3 } : null;
    }, span: (t) => au(t) ? { conversion: (r) => ({ node: kn("h1") }), priority: 3 } : null };
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    if (xe(r)) {
      this.isEmpty() && r.append(document.createElement("br"));
      const o = this.getFormatType();
      o && (r.style.textAlign = o);
      const i = this.getDirection();
      i && (r.dir = i);
    }
    return { element: r };
  }
  static importJSON(t) {
    return kn(t.tag).updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setTag(t.tag);
  }
  exportJSON() {
    return { ...super.exportJSON(), tag: this.getTag() };
  }
  insertNewAfter(t, r = !0) {
    const o = t ? t.anchor.offset : 0, i = this.getLastDescendant(), s = !i || t && t.anchor.key === i.getKey() && o === i.getTextContentSize() || !t ? ve() : kn(this.getTag()), a = this.getDirection();
    if (s.setDirection(a), this.insertAfter(s, r), o === 0 && !this.isEmpty() && t) {
      const l = ve();
      l.select(), this.replace(l, !0);
    }
    return s;
  }
  collapseAtStart() {
    const t = this.isEmpty() ? ve() : kn(this.getTag());
    return this.getChildren().forEach((r) => t.append(r)), this.replace(t), !0;
  }
  extractWithChild() {
    return !0;
  }
};
function au(e) {
  return e.nodeName.toLowerCase() === "span" && e.style.fontSize === "26pt";
}
function xn(e) {
  const n = e.nodeName.toLowerCase();
  let t = null;
  return n !== "h1" && n !== "h2" && n !== "h3" && n !== "h4" && n !== "h5" && n !== "h6" || (t = kn(n), e.style !== null && (fa(e, t), t.setFormat(e.style.textAlign))), { node: t };
}
function $x(e) {
  const n = wa();
  return e.style !== null && (n.setFormat(e.style.textAlign), fa(e, n)), { node: n };
}
function kn(e = "h1") {
  return He(new oi(e));
}
function Px(e) {
  return e instanceof oi;
}
function Xr(e) {
  let n = null;
  if (Jt(e, DragEvent) ? n = e.dataTransfer : Jt(e, ClipboardEvent) && (n = e.clipboardData), n === null) return [!1, [], !1];
  const t = n.types, r = t.includes("Files"), o = t.includes("text/html") || t.includes("text/plain");
  return [r, Array.from(n.files), o];
}
function lu(e) {
  const n = j();
  if (!z(n)) return !1;
  const t = /* @__PURE__ */ new Set(), r = n.getNodes();
  for (let o = 0; o < r.length; o++) {
    const i = r[o], s = i.getKey();
    if (t.has(s)) continue;
    const a = Mt(i, (u) => T(u) && !u.isInline());
    if (a === null) continue;
    const l = a.getKey();
    a.canIndent() && !t.has(l) && (t.add(l), e(a));
  }
  return t.size > 0;
}
function uu(e) {
  const n = $n(e);
  return ne(n);
}
function Mi(e) {
  for (const n of ["lowercase", "uppercase", "capitalize"]) e.hasFormat(n) && e.toggleFormat(n);
}
function Lx(e) {
  return jt(e.registerCommand(Gs, (n) => {
    const t = j();
    return !!Ie(t) && (t.clear(), !0);
  }, Q), e.registerCommand(Yt, (n) => {
    const t = j();
    return z(t) ? (t.deleteCharacter(n), !0) : !!Ie(t) && (t.deleteNodes(), !0);
  }, Q), e.registerCommand(vr, (n) => {
    const t = j();
    return !!z(t) && (t.deleteWord(n), !0);
  }, Q), e.registerCommand(xr, (n) => {
    const t = j();
    return !!z(t) && (t.deleteLine(n), !0);
  }, Q), e.registerCommand(An, (n) => {
    const t = j();
    if (typeof n == "string") t !== null && t.insertText(n);
    else {
      if (t === null) return !1;
      const r = n.dataTransfer;
      if (r != null) eu(r, t, e);
      else if (z(t)) {
        const o = n.data;
        return o && t.insertText(o), !0;
      }
    }
    return !0;
  }, Q), e.registerCommand(as, () => {
    const n = j();
    return !!z(n) && (n.removeText(), !0);
  }, Q), e.registerCommand(It, (n) => {
    const t = j();
    return !!z(t) && (t.formatText(n), !0);
  }, Q), e.registerCommand($v, (n) => {
    const t = j();
    if (!z(t) && !Ie(t)) return !1;
    const r = t.getNodes();
    for (const o of r) {
      const i = Mt(o, (s) => T(s) && !s.isInline());
      i !== null && i.setFormat(n);
    }
    return !0;
  }, Q), e.registerCommand(Rn, (n) => {
    const t = j();
    return !!z(t) && (t.insertLineBreak(n), !0);
  }, Q), e.registerCommand(vo, () => {
    const n = j();
    return !!z(n) && (n.insertParagraph(), !0);
  }, Q), e.registerCommand(Ov, () => (l0([Hn()]), !0), Q), e.registerCommand(Mv, () => lu((n) => {
    const t = n.getIndent();
    n.setIndent(t + 1);
  }), Q), e.registerCommand(ll, () => lu((n) => {
    const t = n.getIndent();
    t > 0 && n.setIndent(Math.max(0, t - 1));
  }), Q), e.registerCommand(Bd, (n) => {
    const t = j();
    if (Ie(t)) {
      const r = t.getNodes();
      if (r.length > 0) return n.preventDefault(), r[0].selectPrevious(), !0;
    } else if (z(t)) {
      const r = vs(t.focus, !0);
      if (!n.shiftKey && ne(r) && !r.isIsolated() && !r.isInline()) return r.selectPrevious(), n.preventDefault(), !0;
    }
    return !1;
  }, Q), e.registerCommand(Vd, (n) => {
    const t = j();
    if (Ie(t)) {
      const r = t.getNodes();
      if (r.length > 0) return n.preventDefault(), r[0].selectNext(0, 0), !0;
    } else if (z(t)) {
      if ((function(o) {
        const i = o.focus;
        return i.key === "root" && i.offset === pe().getChildrenSize();
      })(t)) return n.preventDefault(), !0;
      const r = vs(t.focus, !1);
      if (!n.shiftKey && ne(r) && !r.isIsolated() && !r.isInline()) return r.selectNext(), n.preventDefault(), !0;
    }
    return !1;
  }, Q), e.registerCommand(zd, (n) => {
    const t = j();
    if (Ie(t)) {
      const r = t.getNodes();
      if (r.length > 0) return n.preventDefault(), Hl(r[0]) ? r[0].selectNext(0, 0) : r[0].selectPrevious(), !0;
    }
    if (!z(t)) return !1;
    if (Wl(t, !0)) {
      const r = n.shiftKey;
      return n.preventDefault(), Kl(t, r, !0), !0;
    }
    return !1;
  }, Q), e.registerCommand(Dd, (n) => {
    const t = j();
    if (Ie(t)) {
      const o = t.getNodes();
      if (o.length > 0) return n.preventDefault(), Hl(o[0]) ? o[0].selectPrevious() : o[0].selectNext(0, 0), !0;
    }
    if (!z(t)) return !1;
    const r = n.shiftKey;
    return !!Wl(t, !1) && (n.preventDefault(), Kl(t, r, !1), !0);
  }, Q), e.registerCommand(Ud, (n) => {
    if (uu(n.target)) return !1;
    const t = j();
    if (z(t)) {
      if ((function(r) {
        if (!r.isCollapsed()) return !1;
        const { anchor: o } = r;
        if (o.offset !== 0) return !1;
        const i = o.getNode();
        if (be(i)) return !1;
        const s = Q0(i);
        return s.getIndent() > 0 && (s.is(i) || i.is(s.getFirstDescendant()));
      })(t)) return n.preventDefault(), e.dispatchCommand(ll, void 0);
      if (iu && navigator.language === "ko-KR") return !1;
    } else if (!Ie(t)) return !1;
    return n.preventDefault(), e.dispatchCommand(Yt, !0);
  }, Q), e.registerCommand(Hd, (n) => {
    if (uu(n.target)) return !1;
    const t = j();
    return !(!z(t) && !Ie(t)) && (n.preventDefault(), e.dispatchCommand(Yt, !1));
  }, Q), e.registerCommand(xo, (n) => {
    const t = j();
    if (!z(t)) return !1;
    if (Mi(t), n !== null) {
      if ((iu || Ix || Mx) && Fx) return !1;
      if (n.preventDefault(), n.shiftKey) return e.dispatchCommand(Rn, !1);
    }
    return e.dispatchCommand(vo, void 0);
  }, Q), e.registerCommand(Gd, () => {
    const n = j();
    return !!z(n) && (e.blur(), !0);
  }, Q), e.registerCommand(Kd, (n) => {
    const [, t] = Xr(n);
    if (t.length > 0) {
      const o = ou(n.clientX, n.clientY);
      if (o !== null) {
        const { offset: i, node: s } = o, a = $n(s);
        if (a !== null) {
          const l = Js();
          if (B(a)) l.anchor.set(a.getKey(), i, "text"), l.focus.set(a.getKey(), i, "text");
          else {
            const c = a.getParentOrThrow().getKey(), d = a.getIndexWithinParent() + 1;
            l.anchor.set(c, d, "element"), l.focus.set(c, d, "element");
          }
          const u = po(l);
          $e(u);
        }
        e.dispatchCommand(su, t);
      }
      return n.preventDefault(), !0;
    }
    const r = j();
    return !!z(r);
  }, Q), e.registerCommand(qd, (n) => {
    const [t] = Xr(n), r = j();
    return !(t && !z(r));
  }, Q), e.registerCommand(Zd, (n) => {
    const [t] = Xr(n), r = j();
    if (t && !z(r)) return !1;
    const o = ou(n.clientX, n.clientY);
    if (o !== null) {
      const i = $n(o.node);
      ne(i) && n.preventDefault();
    }
    return !0;
  }, Q), e.registerCommand(ls, () => (_0(), !0), Q), e.registerCommand(Wo, (n) => (nu(e, Jt(n, ClipboardEvent) ? n : null), !0), Q), e.registerCommand(qs, (n) => ((async function(t, r) {
    await nu(r, Jt(t, ClipboardEvent) ? t : null), r.update(() => {
      const o = j();
      z(o) ? o.removeText() : Ie(o) && o.getNodes().forEach((i) => i.remove());
    });
  })(n, e), !0), Q), e.registerCommand(Hs, (n) => {
    const [, t, r] = Xr(n);
    return t.length > 0 && !r ? (e.dispatchCommand(su, t), !0) : Zn(n.target) && ia(n.target) ? !1 : j() !== null && ((function(o, i) {
      o.preventDefault(), i.update(() => {
        const s = j(), a = Jt(o, InputEvent) || Jt(o, KeyboardEvent) ? null : o.clipboardData;
        a != null && s !== null && eu(a, s, i);
      }, { tag: Zv });
    })(n, e), !0);
  }, Q), e.registerCommand(jd, (n) => {
    const t = j();
    return z(t) && Mi(t), !1;
  }, Q), e.registerCommand(Wd, (n) => {
    const t = j();
    return z(t) && Mi(t), !1;
  }, Q));
}
function Dx(e, ...n) {
  const t = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", e);
  for (const o of n) r.append("v", o);
  throw t.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
const Sa = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? kr : Se;
function zx({ editor: e, ErrorBoundary: n }) {
  return (function(t, r) {
    const [o, i] = Qe(() => t.getDecorators());
    return Sa(() => t.registerDecoratorListener((s) => {
      jg(() => {
        i(s);
      });
    }), [t]), Se(() => {
      i(t.getDecorators());
    }, [t]), Dn(() => {
      const s = [], a = Object.keys(o);
      for (let l = 0; l < a.length; l++) {
        const u = a[l], c = _(r, { onError: (f) => t._onError(f), children: _(Bg, { fallback: null, children: o[u] }) }), d = t.getElementByKey(u);
        d !== null && s.push(qu(c, d, u));
      }
      return s;
    }, [r, o, t]);
  })(e, n);
}
function Bx({ editor: e, ErrorBoundary: n }) {
  return (function(t) {
    const r = ng.maybeFromEditor(t);
    if (r && r.hasExtensionByName(hx.name)) {
      for (const o of ["@lexical/plain-text", "@lexical/rich-text"]) r.hasExtensionByName(o) && Dx(320, o);
      return !0;
    }
    return !1;
  })(e) ? null : _(zx, { editor: e, ErrorBoundary: n });
}
function cu(e) {
  return e.getEditorState().read(og(e.isComposing()));
}
function Vx({ contentEditable: e, placeholder: n = null, ErrorBoundary: t }) {
  const [r] = ft();
  return (function(o) {
    Sa(() => jt(Lx(o), vx(o)), [o]);
  })(r), D(Xe, { children: [e, _(jx, { content: n }), _(Bx, { editor: r, ErrorBoundary: t })] });
}
function jx({ content: e }) {
  const [n] = ft(), t = (function(o) {
    const [i, s] = Qe(() => cu(o));
    return Sa(() => {
      function a() {
        const l = cu(o);
        s(l);
      }
      return a(), jt(o.registerUpdateListener(() => {
        a();
      }), o.registerEditableListener(() => {
        a();
      }));
    }, [o]), i;
  })(n), r = K0();
  return t ? typeof e == "function" ? e(r) : e : null;
}
const fg = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? kr : Se;
function Ux({ editor: e, ariaActiveDescendant: n, ariaAutoComplete: t, ariaControls: r, ariaDescribedBy: o, ariaErrorMessage: i, ariaExpanded: s, ariaInvalid: a, ariaLabel: l, ariaLabelledBy: u, ariaMultiline: c, ariaOwns: d, ariaRequired: f, autoCapitalize: p, className: g, id: h, role: m = "textbox", spellCheck: v = !0, style: y, tabIndex: b, "data-testid": x, ...w }, S) {
  const [k, N] = Qe(e.isEditable()), C = St((O) => {
    O && O.ownerDocument && O.ownerDocument.defaultView ? e.setRootElement(O) : e.setRootElement(null);
  }, [e]), R = Dn(() => /* @__PURE__ */ (function(...O) {
    return (F) => {
      for (const U of O) typeof U == "function" ? U(F) : U != null && (U.current = F);
    };
  })(S, C), [C, S]);
  return fg(() => (N(e.isEditable()), e.registerEditableListener((O) => {
    N(O);
  })), [e]), _("div", { "aria-activedescendant": k ? n : void 0, "aria-autocomplete": k ? t : "none", "aria-controls": k ? r : void 0, "aria-describedby": o, ...i != null ? { "aria-errormessage": i } : {}, "aria-expanded": k && m === "combobox" ? !!s : void 0, ...a != null ? { "aria-invalid": a } : {}, "aria-label": l, "aria-labelledby": u, "aria-multiline": c, "aria-owns": k ? d : void 0, "aria-readonly": !k || void 0, "aria-required": f, autoCapitalize: p, className: g, contentEditable: k, "data-testid": x, id: h, ref: R, role: m, spellCheck: v, style: y, tabIndex: b, ...w });
}
const Gx = Po(Ux);
function du(e) {
  return e.getEditorState().read(og(e.isComposing()));
}
const Hx = Po(Wx);
function Wx(e, n) {
  const { placeholder: t, ...r } = e, [o] = ft();
  return D(Xe, { children: [_(Gx, { editor: o, ...r, ref: n }), t != null && _(Kx, { editor: o, content: t })] });
}
function Kx({ content: e, editor: n }) {
  const t = (function(s) {
    const [a, l] = Qe(() => du(s));
    return fg(() => {
      function u() {
        const c = du(s);
        l(c);
      }
      return u(), jt(s.registerUpdateListener(() => {
        u();
      }), s.registerEditableListener(() => {
        u();
      }));
    }, [s]), a;
  })(n), [r, o] = Qe(n.isEditable());
  if (kr(() => (o(n.isEditable()), n.registerEditableListener((s) => {
    o(s);
  })), [n]), !t) return null;
  let i = null;
  return typeof e == "function" ? i = e(r) : e !== null && (i = e), i === null ? null : _("div", { "aria-hidden": !0, children: i });
}
function qx(e, n, t, r, o) {
  if (e === null || t.size === 0 && r.size === 0 && !o) return 0;
  const i = n._selection, s = e._selection;
  if (o) return 1;
  if (!(z(i) && z(s) && s.isCollapsed() && i.isCollapsed())) return 0;
  const a = (function(v, y, b) {
    const x = v._nodeMap, w = [];
    for (const S of y) {
      const k = x.get(S);
      k !== void 0 && w.push(k);
    }
    for (const [S, k] of b) {
      if (!k) continue;
      const N = x.get(S);
      N === void 0 || be(N) || w.push(N);
    }
    return w;
  })(n, t, r);
  if (a.length === 0) return 0;
  if (a.length > 1) {
    const v = n._nodeMap, y = v.get(i.anchor.key), b = v.get(s.anchor.key);
    return y && b && !e._nodeMap.has(y.__key) && B(y) && y.__text.length === 1 && i.anchor.offset === 1 ? 2 : 0;
  }
  const l = a[0], u = e._nodeMap.get(l.__key);
  if (!B(u) || !B(l) || u.__mode !== l.__mode) return 0;
  const c = u.__text, d = l.__text;
  if (c === d) return 0;
  const f = i.anchor, p = s.anchor;
  if (f.key !== p.key || f.type !== "text") return 0;
  const g = f.offset, h = p.offset, m = d.length - c.length;
  return m === 1 && h === g - 1 ? 2 : m === -1 && h === g + 1 ? 3 : m === -1 && h === g ? 4 : 0;
}
function Zx(e, n) {
  let t = Date.now(), r = 0;
  return (o, i, s, a, l, u) => {
    const c = Date.now();
    if (u.has(Co)) return r = 0, t = c, 2;
    const d = qx(o, i, a, l, e.isComposing()), f = (() => {
      const p = s === null || s.editor === e, g = u.has(qv);
      if (!g && p && u.has(Fn)) return 0;
      if (o === null) return 1;
      const h = i._selection;
      if (!(a.size > 0 || l.size > 0)) return h !== null ? 0 : 2;
      const m = typeof n == "number" ? n : n.peek();
      return g === !1 && d !== 0 && d === r && c < t + m && p || a.size === 1 && (function(v, y, b) {
        const x = y._nodeMap.get(v), w = b._nodeMap.get(v), S = y._selection, k = b._selection;
        return !(z(S) && z(k) && S.anchor.type === "element" && S.focus.type === "element" && k.anchor.type === "text" && k.focus.type === "text" || !B(x) || !B(w) || x.__parent !== w.__parent) && JSON.stringify(y.read(() => x.exportJSON())) === JSON.stringify(b.read(() => w.exportJSON()));
      })(Array.from(a)[0], o, i) ? 0 : 1;
    })();
    return t = c, r = d, f;
  };
}
function fu(e) {
  e.undoStack = [], e.redoStack = [], e.current = null;
}
function gg(e, n, t) {
  const r = Zx(e, t);
  return jt(e.registerCommand(Ws, () => ((function(i, s) {
    const a = s.redoStack, l = s.undoStack;
    if (l.length !== 0) {
      const u = s.current, c = l.pop();
      u !== null && (a.push(u), i.dispatchCommand(Ur, !0)), l.length === 0 && i.dispatchCommand(Gr, !1), s.current = c || null, c && c.editor.setEditorState(c.editorState, { tag: Co });
    }
  })(e, n), !0), Q), e.registerCommand(Ks, () => ((function(i, s) {
    const a = s.redoStack, l = s.undoStack;
    if (a.length !== 0) {
      const u = s.current;
      u !== null && (l.push(u), i.dispatchCommand(Gr, !0));
      const c = a.pop();
      a.length === 0 && i.dispatchCommand(Ur, !1), s.current = c || null, c && c.editor.setEditorState(c.editorState, { tag: Co });
    }
  })(e, n), !0), Q), e.registerCommand(Lv, () => (fu(n), !1), Q), e.registerCommand(Dv, () => (fu(n), e.dispatchCommand(Ur, !1), e.dispatchCommand(Gr, !1), !0), Q), e.registerUpdateListener(({ editorState: i, prevEditorState: s, dirtyLeaves: a, dirtyElements: l, tags: u }) => {
    const c = n.current, d = n.redoStack, f = n.undoStack, p = c === null ? null : c.editorState;
    if (c !== null && i === p) return;
    const g = r(s, i, c, a, l, u);
    if (g === 1) d.length !== 0 && (n.redoStack = [], e.dispatchCommand(Ur, !1)), c !== null && (f.push({ ...c }), e.dispatchCommand(Gr, !0));
    else if (g === 2) return;
    n.current = { editor: e, editorState: i };
  }));
}
function pg() {
  return { current: null, redoStack: [], undoStack: [] };
}
const $i = { build: (e, { delay: n, createInitialHistoryState: t, disabled: r }) => ox({ delay: n, disabled: r, historyState: t(e) }), config: { createInitialHistoryState: pg, delay: 300, disabled: typeof window > "u" }, name: "@lexical/history/History", register: (e, n, t) => {
  const r = t.getOutput();
  return xa(() => r.disabled.value ? void 0 : gg(e, r.historyState.value, r.delay));
} };
V0($i, { createInitialHistoryState: () => {
  throw new Error("SharedHistory did not inherit parent history");
}, disabled: !0 });
function Jx({ delay: e, externalHistoryState: n }) {
  const [t] = ft();
  return (function(r, o, i = 1e3) {
    const s = Dn(() => o || pg(), [o]);
    Se(() => gg(r, s, i), [i, r, s]);
  })(t, n, e), null;
}
const Yx = Ku(null), Pi = {
  didCatch: !1,
  error: null
};
class Xx extends Vg {
  constructor(n) {
    super(n), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = Pi;
  }
  static getDerivedStateFromError(n) {
    return { didCatch: !0, error: n };
  }
  resetErrorBoundary(...n) {
    var r, o;
    const { error: t } = this.state;
    t !== null && ((o = (r = this.props).onReset) == null || o.call(r, {
      args: n,
      reason: "imperative-api"
    }), this.setState(Pi));
  }
  componentDidCatch(n, t) {
    var r, o;
    (o = (r = this.props).onError) == null || o.call(r, n, t);
  }
  componentDidUpdate(n, t) {
    var i, s;
    const { didCatch: r } = this.state, { resetKeys: o } = this.props;
    r && t.error !== null && Qx(n.resetKeys, o) && ((s = (i = this.props).onReset) == null || s.call(i, {
      next: o,
      prev: n.resetKeys,
      reason: "keys"
    }), this.setState(Pi));
  }
  render() {
    const { children: n, fallbackRender: t, FallbackComponent: r, fallback: o } = this.props, { didCatch: i, error: s } = this.state;
    let a = n;
    if (i) {
      const l = {
        error: s,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if (typeof t == "function")
        a = t(l);
      else if (r)
        a = On(r, l);
      else if (o !== void 0)
        a = o;
      else
        throw s;
    }
    return On(
      Yx.Provider,
      {
        value: {
          didCatch: i,
          error: s,
          resetErrorBoundary: this.resetErrorBoundary
        }
      },
      a
    );
  }
}
function Qx(e = [], n = []) {
  return e.length !== n.length || e.some((t, r) => !Object.is(t, n[r]));
}
function e_({ children: e, onError: n }) {
  return _(Xx, { fallback: _("div", { style: { border: "1px solid #f00", color: "#f00", padding: "8px" }, children: "An error was thrown." }), onError: n, children: e });
}
function ir(e, ...n) {
  const t = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", e);
  for (const o of n) r.append("v", o);
  throw t.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
function t_(e) {
  let n = 1, t = e.getParent();
  for (; t != null; ) {
    if (Oe(t)) {
      const r = t.getParent();
      if (se(r)) {
        n++, t = r.getParent();
        continue;
      }
      ir(40);
    }
    return n;
  }
  return n;
}
function it(e) {
  return Oe(e) && se(e.getFirstChild());
}
function gu(e) {
  return Et().append(e);
}
function hg(e, n) {
  e.splice(e.getChildrenSize(), 0, n);
}
function Ca(e, n) {
  const t = e.getLastChild(), r = n.getFirstChild();
  t && r && it(t) && it(r) && (Ca(t.getFirstChild(), r.getFirstChild()), r.remove());
  const o = n.getChildren();
  o.length > 0 && e.append(...o), n.remove();
}
function n_(e) {
  const n = e.getListType() !== "check";
  let t = e.getStart();
  for (const r of e.getChildren()) Oe(r) && (r.getValue() !== t && r.setValue(t), n && r.getLatest().__checked != null && r.setChecked(void 0), se(r.getFirstChild()) || t++);
}
function r_(e) {
  const n = /* @__PURE__ */ new Set();
  if (it(e) || n.has(e.getKey())) return;
  const t = e.getParent(), r = e.getNextSibling(), o = e.getPreviousSibling();
  if (it(r) && it(o)) {
    const i = o.getFirstChild();
    if (se(i)) {
      i.append(e);
      const s = r.getFirstChild();
      se(s) && (hg(i, s.getChildren()), r.remove(), n.add(r.getKey()));
    }
  } else if (it(r)) {
    const i = r.getFirstChild();
    if (se(i)) {
      const s = i.getFirstChild();
      s !== null && s.insertBefore(e);
    }
  } else if (it(o)) {
    const i = o.getFirstChild();
    se(i) && i.append(e);
  } else if (se(t)) {
    const i = Et().setTextFormat(e.getTextFormat()).setTextStyle(e.getTextStyle()), s = ct(t.getListType()).setTextFormat(t.getTextFormat()).setTextStyle(t.getTextStyle());
    i.append(s), s.append(e), o ? o.insertAfter(i) : r ? r.insertBefore(i) : t.append(i);
  }
}
function o_(e) {
  if (it(e)) return;
  const n = e.getParent(), t = n ? n.getParent() : void 0;
  if (se(t ? t.getParent() : void 0) && Oe(t) && se(n)) {
    const r = n ? n.getFirstChild() : void 0, o = n ? n.getLastChild() : void 0;
    if (e.is(r)) t.insertBefore(e), n.isEmpty() && t.remove();
    else if (e.is(o)) t.insertAfter(e), n.isEmpty() && t.remove();
    else {
      const i = n.getListType(), s = Et(), a = ct(i);
      s.append(a), e.getPreviousSiblings().forEach((c) => a.append(c));
      const l = Et(), u = ct(i);
      l.append(u), hg(u, e.getNextSiblings()), t.insertBefore(s), t.insertAfter(l), t.replace(e);
    }
  }
}
function Fo(...e) {
  const n = [];
  for (const t of e) if (t && typeof t == "string") for (const [r] of t.matchAll(/\S+/g)) n.push(r);
  return n;
}
let $r = class extends je {
  constructor(t = 1, r = void 0, o) {
    super(o);
    A(this, "__value");
    A(this, "__checked");
    this.__value = t === void 0 ? 1 : t, this.__checked = r;
  }
  $config() {
    return this.config("listitem", { $transform: (t) => {
      if (t.__checked == null) return;
      const r = t.getParent();
      se(r) && r.getListType() !== "check" && t.getChecked() != null && t.setChecked(void 0);
    }, extends: je, importDOM: { li: () => ({ conversion: i_, priority: 0 }) } });
  }
  afterCloneFrom(t) {
    super.afterCloneFrom(t), this.__value = t.__value, this.__checked = t.__checked;
  }
  createDOM(t) {
    const r = document.createElement("li");
    return this.updateListItemDOM(null, r, t), r;
  }
  updateListItemDOM(t, r, o) {
    (function(a, l, u) {
      const c = l.getParent();
      !se(c) || c.getListType() !== "check" || se(l.getFirstChild()) ? (a.removeAttribute("role"), a.removeAttribute("tabIndex"), a.removeAttribute("aria-checked")) : (a.setAttribute("role", "checkbox"), a.setAttribute("tabIndex", "-1"), u && l.__checked === u.__checked || a.setAttribute("aria-checked", l.getChecked() ? "true" : "false"));
    })(r, this, t), r.value = this.__value, (function(a, l, u) {
      const c = [], d = [], f = l.list, p = f ? f.listitem : void 0;
      let g;
      if (f && f.nested && (g = f.nested.listitem), p !== void 0 && c.push(...Fo(p)), f) {
        const h = u.getParent(), m = se(h) && h.getListType() === "check", v = u.getChecked();
        m && !v || d.push(f.listitemUnchecked), m && v || d.push(f.listitemChecked), m && c.push(v ? f.listitemChecked : f.listitemUnchecked);
      }
      if (g !== void 0) {
        const h = Fo(g);
        u.getChildren().some((m) => se(m)) ? c.push(...h) : d.push(...h);
      }
      d.length > 0 && ti(a, ...d), c.length > 0 && tt(a, ...c);
    })(r, o.theme, this);
    const i = t ? t.__style : "", s = this.__style;
    i !== s && (s === "" ? r.removeAttribute("style") : r.style.cssText = s), (function(a, l, u) {
      const c = Gl(l.__textStyle);
      for (const d in c) a.style.setProperty(`--listitem-marker-${d}`, c[d]);
      if (u) for (const d in Gl(u.__textStyle)) d in c || a.style.removeProperty(`--listitem-marker-${d}`);
    })(r, this, t);
  }
  updateDOM(t, r, o) {
    const i = r;
    return this.updateListItemDOM(t, i, o), !1;
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setValue(t.value).setChecked(t.checked);
  }
  exportDOM(t) {
    const r = this.createDOM(t._config), o = this.getFormatType();
    o && (r.style.textAlign = o);
    const i = this.getDirection();
    return i && (r.dir = i), { element: r };
  }
  exportJSON() {
    return { ...super.exportJSON(), checked: this.getChecked(), value: this.getValue() };
  }
  append(...t) {
    for (let r = 0; r < t.length; r++) {
      const o = t[r];
      if (T(o) && this.canMergeWith(o)) {
        const i = o.getChildren();
        this.append(...i), o.remove();
      } else super.append(o);
    }
    return this;
  }
  replace(t, r) {
    if (Oe(t)) return super.replace(t);
    this.setIndent(0);
    const o = this.getParentOrThrow();
    if (!se(o)) return t;
    if (o.__first === this.getKey()) o.insertBefore(t);
    else if (o.__last === this.getKey()) o.insertAfter(t);
    else {
      const i = ct(o.getListType());
      let s = this.getNextSibling();
      for (; s; ) {
        const a = s;
        s = s.getNextSibling(), i.append(a);
      }
      o.insertAfter(t), t.insertAfter(i);
    }
    return r && (T(t) || ir(139), this.getChildren().forEach((i) => {
      t.append(i);
    })), this.remove(), o.getChildrenSize() === 0 && o.remove(), t;
  }
  insertAfter(t, r = !0) {
    const o = this.getParentOrThrow();
    if (se(o) || ir(39), Oe(t)) return super.insertAfter(t, r);
    const i = this.getNextSiblings();
    if (o.insertAfter(t, r), i.length !== 0) {
      const s = ct(o.getListType());
      i.forEach((a) => s.append(a)), t.insertAfter(s, r);
    }
    return t;
  }
  remove(t) {
    const r = this.getPreviousSibling(), o = this.getNextSibling();
    super.remove(t), r && o && it(r) && it(o) && (Ca(r.getFirstChild(), o.getFirstChild()), o.remove());
  }
  insertNewAfter(t, r = !0) {
    const o = Et().updateFromJSON(this.exportJSON()).setChecked(!this.getChecked() && void 0);
    return this.insertAfter(o, r), o;
  }
  collapseAtStart(t) {
    const r = ve();
    this.getChildren().forEach((a) => r.append(a));
    const o = this.getParentOrThrow(), i = o.getParentOrThrow(), s = Oe(i);
    if (o.getChildrenSize() === 1) if (s) o.remove(), i.select();
    else {
      o.insertBefore(r), o.remove();
      const a = t.anchor, l = t.focus, u = r.getKey();
      a.type === "element" && a.getNode().is(this) && a.set(u, a.offset, "element"), l.type === "element" && l.getNode().is(this) && l.set(u, l.offset, "element");
    }
    else o.insertBefore(r), this.remove();
    return !0;
  }
  getValue() {
    return this.getLatest().__value;
  }
  setValue(t) {
    const r = this.getWritable();
    return r.__value = t, r;
  }
  getChecked() {
    const t = this.getLatest();
    let r;
    const o = this.getParent();
    return se(o) && (r = o.getListType()), r === "check" ? !!t.__checked : void 0;
  }
  setChecked(t) {
    const r = this.getWritable();
    return r.__checked = t, r;
  }
  toggleChecked() {
    const t = this.getWritable();
    return t.setChecked(!t.__checked);
  }
  getIndent() {
    const t = this.getParent();
    if (t === null || !this.isAttached()) return this.getLatest().__indent;
    let r = t.getParentOrThrow(), o = 0;
    for (; Oe(r); ) r = r.getParentOrThrow().getParentOrThrow(), o++;
    return o;
  }
  setIndent(t) {
    typeof t != "number" && ir(117), (t = Math.floor(t)) >= 0 || ir(199);
    let r = this.getIndent();
    for (; r !== t; ) r < t ? (r_(this), r++) : (o_(this), r--);
    return this;
  }
  canInsertAfter(t) {
    return Oe(t);
  }
  canReplaceWith(t) {
    return Oe(t);
  }
  canMergeWith(t) {
    return Oe(t) || Fr(t);
  }
  extractWithChild(t, r) {
    if (!z(r)) return !1;
    const o = r.anchor.getNode(), i = r.focus.getNode();
    return this.isParentOf(o) && this.isParentOf(i) && this.getTextContent().length === r.getTextContent().length;
  }
  isParentRequired() {
    return !0;
  }
  createParentElementNode() {
    return ct("bullet");
  }
  canMergeWhenEmpty() {
    return !0;
  }
};
function i_(e) {
  if (e.classList.contains("task-list-item")) {
    for (const t of e.children) if (t.tagName === "INPUT") return pu(t);
  }
  if (e.classList.contains("joplin-checkbox")) {
    for (const t of e.children) if (t.classList.contains("checkbox-wrapper") && t.children.length > 0 && t.children[0].tagName === "INPUT") return pu(t.children[0]);
  }
  const n = e.getAttribute("aria-checked");
  return { node: Et(n === "true" || n !== "false" && void 0) };
}
function pu(e) {
  return e.getAttribute("type") !== "checkbox" ? { node: null } : { node: Et(e.hasAttribute("checked")) };
}
function Et(e) {
  return He(new $r(void 0, e));
}
function Oe(e) {
  return e instanceof $r;
}
let Pr = class extends je {
  constructor(t = "number", r = 1, o) {
    super(o);
    A(this, "__tag");
    A(this, "__start");
    A(this, "__listType");
    const i = a_[t] || t;
    this.__listType = i, this.__tag = i === "number" ? "ol" : "ul", this.__start = r;
  }
  $config() {
    return this.config("list", { $transform: (t) => {
      (function(r) {
        const o = r.getNextSibling();
        se(o) && r.getListType() === o.getListType() && Ca(r, o);
      })(t), n_(t);
    }, extends: je, importDOM: { ol: () => ({ conversion: mu, priority: 0 }), ul: () => ({ conversion: mu, priority: 0 }) } });
  }
  afterCloneFrom(t) {
    super.afterCloneFrom(t), this.__listType = t.__listType, this.__tag = t.__tag, this.__start = t.__start;
  }
  getTag() {
    return this.getLatest().__tag;
  }
  setListType(t) {
    const r = this.getWritable();
    return r.__listType = t, r.__tag = t === "number" ? "ol" : "ul", r;
  }
  getListType() {
    return this.getLatest().__listType;
  }
  getStart() {
    return this.getLatest().__start;
  }
  setStart(t) {
    const r = this.getWritable();
    return r.__start = t, r;
  }
  createDOM(t, r) {
    const o = this.__tag, i = document.createElement(o);
    return this.__start !== 1 && i.setAttribute("start", String(this.__start)), i.__lexicalListType = this.__listType, hu(i, t.theme, this), i;
  }
  updateDOM(t, r, o) {
    return t.__tag !== this.__tag || t.__listType !== this.__listType || (hu(r, o.theme, this), !1);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setListType(t.listType).setStart(t.start);
  }
  exportDOM(t) {
    const r = this.createDOM(t._config, t);
    return xe(r) && (this.__start !== 1 && r.setAttribute("start", String(this.__start)), this.__listType === "check" && r.setAttribute("__lexicalListType", "check")), { element: r };
  }
  exportJSON() {
    return { ...super.exportJSON(), listType: this.getListType(), start: this.getStart(), tag: this.getTag() };
  }
  canBeEmpty() {
    return !1;
  }
  canIndent() {
    return !1;
  }
  splice(t, r, o) {
    let i = o;
    for (let s = 0; s < o.length; s++) {
      const a = o[s];
      Oe(a) || (i === o && (i = [...o]), i[s] = Et().append(!T(a) || se(a) || a.isInline() ? a : he(a.getTextContent())));
    }
    return super.splice(t, r, i);
  }
  extractWithChild(t) {
    return Oe(t);
  }
};
function hu(e, n, t) {
  const r = [], o = [], i = n.list;
  if (i !== void 0) {
    const s = i[`${t.__tag}Depth`] || [], a = t_(t) - 1, l = a % s.length, u = s[l], c = i[t.__tag];
    let d;
    const f = i.nested, p = i.checklist;
    if (f !== void 0 && f.list && (d = f.list), c !== void 0 && r.push(c), p !== void 0 && t.__listType === "check" && r.push(p), u !== void 0) {
      r.push(...Fo(u));
      for (let g = 0; g < s.length; g++) g !== l && o.push(t.__tag + g);
    }
    if (d !== void 0) {
      const g = Fo(d);
      a > 1 ? r.push(...g) : o.push(...g);
    }
  }
  o.length > 0 && ti(e, ...o), r.length > 0 && tt(e, ...r);
}
function s_(e) {
  const n = [];
  for (let t = 0; t < e.length; t++) {
    const r = e[t];
    if (Oe(r)) {
      n.push(r);
      const o = r.getChildren();
      o.length > 1 && o.forEach((i) => {
        se(i) && n.push(gu(i));
      });
    } else n.push(gu(r));
  }
  return n;
}
function mu(e) {
  const n = e.nodeName.toLowerCase();
  let t = null;
  return n === "ol" ? t = ct("number", e.start) : n === "ul" && (t = (function(r) {
    if (r.getAttribute("__lexicallisttype") === "check" || r.classList.contains("contains-task-list") || r.getAttribute("data-is-checklist") === "1") return !0;
    for (const o of r.childNodes) if (xe(o) && o.hasAttribute("aria-checked")) return !0;
    return !1;
  })(e) ? ct("check") : ct("bullet")), { after: s_, node: t };
}
const a_ = { ol: "number", ul: "bullet" };
function ct(e = "number", n = 1) {
  return He(new Pr(e, n));
}
function se(e) {
  return e instanceof Pr;
}
var yu = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Li = { exports: {} }, bu;
function l_() {
  return bu || (bu = 1, (function(e) {
    var n = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {};
    /**
     * Prism: Lightweight, robust, elegant syntax highlighting
     *
     * @license MIT <https://opensource.org/licenses/MIT>
     * @author Lea Verou <https://lea.verou.me>
     * @namespace
     * @public
     */
    var t = (function(r) {
      var o = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, i = 0, s = {}, a = {
        /**
         * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
         * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
         * additional languages or plugins yourself.
         *
         * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
         *
         * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
         * empty Prism object into the global scope before loading the Prism script like this:
         *
         * ```js
         * window.Prism = window.Prism || {};
         * Prism.manual = true;
         * // add a new <script> to load Prism's script
         * ```
         *
         * @default false
         * @type {boolean}
         * @memberof Prism
         * @public
         */
        manual: r.Prism && r.Prism.manual,
        /**
         * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
         * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
         * own worker, you don't want it to do this.
         *
         * By setting this value to `true`, Prism will not add its own listeners to the worker.
         *
         * You obviously have to change this value before Prism executes. To do this, you can add an
         * empty Prism object into the global scope before loading the Prism script like this:
         *
         * ```js
         * window.Prism = window.Prism || {};
         * Prism.disableWorkerMessageHandler = true;
         * // Load Prism's script
         * ```
         *
         * @default false
         * @type {boolean}
         * @memberof Prism
         * @public
         */
        disableWorkerMessageHandler: r.Prism && r.Prism.disableWorkerMessageHandler,
        /**
         * A namespace for utility methods.
         *
         * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
         * change or disappear at any time.
         *
         * @namespace
         * @memberof Prism
         */
        util: {
          encode: function y(b) {
            return b instanceof l ? new l(b.type, y(b.content), b.alias) : Array.isArray(b) ? b.map(y) : b.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
          },
          /**
           * Returns the name of the type of the given value.
           *
           * @param {any} o
           * @returns {string}
           * @example
           * type(null)      === 'Null'
           * type(undefined) === 'Undefined'
           * type(123)       === 'Number'
           * type('foo')     === 'String'
           * type(true)      === 'Boolean'
           * type([1, 2])    === 'Array'
           * type({})        === 'Object'
           * type(String)    === 'Function'
           * type(/abc+/)    === 'RegExp'
           */
          type: function(y) {
            return Object.prototype.toString.call(y).slice(8, -1);
          },
          /**
           * Returns a unique number for the given object. Later calls will still return the same number.
           *
           * @param {Object} obj
           * @returns {number}
           */
          objId: function(y) {
            return y.__id || Object.defineProperty(y, "__id", { value: ++i }), y.__id;
          },
          /**
           * Creates a deep clone of the given object.
           *
           * The main intended use of this function is to clone language definitions.
           *
           * @param {T} o
           * @param {Record<number, any>} [visited]
           * @returns {T}
           * @template T
           */
          clone: function y(b, x) {
            x = x || {};
            var w, S;
            switch (a.util.type(b)) {
              case "Object":
                if (S = a.util.objId(b), x[S])
                  return x[S];
                w = /** @type {Record<string, any>} */
                {}, x[S] = w;
                for (var k in b)
                  b.hasOwnProperty(k) && (w[k] = y(b[k], x));
                return (
                  /** @type {any} */
                  w
                );
              case "Array":
                return S = a.util.objId(b), x[S] ? x[S] : (w = [], x[S] = w, /** @type {Array} */
                /** @type {any} */
                b.forEach(function(N, C) {
                  w[C] = y(N, x);
                }), /** @type {any} */
                w);
              default:
                return b;
            }
          },
          /**
           * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
           *
           * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
           *
           * @param {Element} element
           * @returns {string}
           */
          getLanguage: function(y) {
            for (; y; ) {
              var b = o.exec(y.className);
              if (b)
                return b[1].toLowerCase();
              y = y.parentElement;
            }
            return "none";
          },
          /**
           * Sets the Prism `language-xxxx` class of the given element.
           *
           * @param {Element} element
           * @param {string} language
           * @returns {void}
           */
          setLanguage: function(y, b) {
            y.className = y.className.replace(RegExp(o, "gi"), ""), y.classList.add("language-" + b);
          },
          /**
           * Returns the script element that is currently executing.
           *
           * This does __not__ work for line script element.
           *
           * @returns {HTMLScriptElement | null}
           */
          currentScript: function() {
            if (typeof document > "u")
              return null;
            if (document.currentScript && document.currentScript.tagName === "SCRIPT")
              return (
                /** @type {any} */
                document.currentScript
              );
            try {
              throw new Error();
            } catch (w) {
              var y = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(w.stack) || [])[1];
              if (y) {
                var b = document.getElementsByTagName("script");
                for (var x in b)
                  if (b[x].src == y)
                    return b[x];
              }
              return null;
            }
          },
          /**
           * Returns whether a given class is active for `element`.
           *
           * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
           * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
           * given class is just the given class with a `no-` prefix.
           *
           * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
           * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
           * ancestors have the given class or the negated version of it, then the default activation will be returned.
           *
           * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
           * version of it, the class is considered active.
           *
           * @param {Element} element
           * @param {string} className
           * @param {boolean} [defaultActivation=false]
           * @returns {boolean}
           */
          isActive: function(y, b, x) {
            for (var w = "no-" + b; y; ) {
              var S = y.classList;
              if (S.contains(b))
                return !0;
              if (S.contains(w))
                return !1;
              y = y.parentElement;
            }
            return !!x;
          }
        },
        /**
         * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
         *
         * @namespace
         * @memberof Prism
         * @public
         */
        languages: {
          /**
           * The grammar for plain, unformatted text.
           */
          plain: s,
          plaintext: s,
          text: s,
          txt: s,
          /**
           * Creates a deep copy of the language with the given id and appends the given tokens.
           *
           * If a token in `redef` also appears in the copied language, then the existing token in the copied language
           * will be overwritten at its original position.
           *
           * ## Best practices
           *
           * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
           * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
           * understand the language definition because, normally, the order of tokens matters in Prism grammars.
           *
           * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
           * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
           *
           * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
           * @param {Grammar} redef The new tokens to append.
           * @returns {Grammar} The new language created.
           * @public
           * @example
           * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
           *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
           *     // at its original position
           *     'comment': { ... },
           *     // CSS doesn't have a 'color' token, so this token will be appended
           *     'color': /\b(?:red|green|blue)\b/
           * });
           */
          extend: function(y, b) {
            var x = a.util.clone(a.languages[y]);
            for (var w in b)
              x[w] = b[w];
            return x;
          },
          /**
           * Inserts tokens _before_ another token in a language definition or any other grammar.
           *
           * ## Usage
           *
           * This helper method makes it easy to modify existing languages. For example, the CSS language definition
           * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
           * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
           * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
           * this:
           *
           * ```js
           * Prism.languages.markup.style = {
           *     // token
           * };
           * ```
           *
           * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
           * before existing tokens. For the CSS example above, you would use it like this:
           *
           * ```js
           * Prism.languages.insertBefore('markup', 'cdata', {
           *     'style': {
           *         // token
           *     }
           * });
           * ```
           *
           * ## Special cases
           *
           * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
           * will be ignored.
           *
           * This behavior can be used to insert tokens after `before`:
           *
           * ```js
           * Prism.languages.insertBefore('markup', 'comment', {
           *     'comment': Prism.languages.markup.comment,
           *     // tokens after 'comment'
           * });
           * ```
           *
           * ## Limitations
           *
           * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
           * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
           * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
           * deleting properties which is necessary to insert at arbitrary positions.
           *
           * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
           * Instead, it will create a new object and replace all references to the target object with the new one. This
           * can be done without temporarily deleting properties, so the iteration order is well-defined.
           *
           * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
           * you hold the target object in a variable, then the value of the variable will not change.
           *
           * ```js
           * var oldMarkup = Prism.languages.markup;
           * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
           *
           * assert(oldMarkup !== Prism.languages.markup);
           * assert(newMarkup === Prism.languages.markup);
           * ```
           *
           * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
           * object to be modified.
           * @param {string} before The key to insert before.
           * @param {Grammar} insert An object containing the key-value pairs to be inserted.
           * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
           * object to be modified.
           *
           * Defaults to `Prism.languages`.
           * @returns {Grammar} The new grammar object.
           * @public
           */
          insertBefore: function(y, b, x, w) {
            w = w || /** @type {any} */
            a.languages;
            var S = w[y], k = {};
            for (var N in S)
              if (S.hasOwnProperty(N)) {
                if (N == b)
                  for (var C in x)
                    x.hasOwnProperty(C) && (k[C] = x[C]);
                x.hasOwnProperty(N) || (k[N] = S[N]);
              }
            var R = w[y];
            return w[y] = k, a.languages.DFS(a.languages, function(O, F) {
              F === R && O != y && (this[O] = k);
            }), k;
          },
          // Traverse a language definition with Depth First Search
          DFS: function y(b, x, w, S) {
            S = S || {};
            var k = a.util.objId;
            for (var N in b)
              if (b.hasOwnProperty(N)) {
                x.call(b, N, b[N], w || N);
                var C = b[N], R = a.util.type(C);
                R === "Object" && !S[k(C)] ? (S[k(C)] = !0, y(C, x, null, S)) : R === "Array" && !S[k(C)] && (S[k(C)] = !0, y(C, x, N, S));
              }
          }
        },
        plugins: {},
        /**
         * This is the most high-level function in Prism’s API.
         * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
         * each one of them.
         *
         * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
         *
         * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
         * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
         * @memberof Prism
         * @public
         */
        highlightAll: function(y, b) {
          a.highlightAllUnder(document, y, b);
        },
        /**
         * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
         * {@link Prism.highlightElement} on each one of them.
         *
         * The following hooks will be run:
         * 1. `before-highlightall`
         * 2. `before-all-elements-highlight`
         * 3. All hooks of {@link Prism.highlightElement} for each element.
         *
         * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
         * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
         * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
         * @memberof Prism
         * @public
         */
        highlightAllUnder: function(y, b, x) {
          var w = {
            callback: x,
            container: y,
            selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
          };
          a.hooks.run("before-highlightall", w), w.elements = Array.prototype.slice.apply(w.container.querySelectorAll(w.selector)), a.hooks.run("before-all-elements-highlight", w);
          for (var S = 0, k; k = w.elements[S++]; )
            a.highlightElement(k, b === !0, w.callback);
        },
        /**
         * Highlights the code inside a single element.
         *
         * The following hooks will be run:
         * 1. `before-sanity-check`
         * 2. `before-highlight`
         * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
         * 4. `before-insert`
         * 5. `after-highlight`
         * 6. `complete`
         *
         * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
         * the element's language.
         *
         * @param {Element} element The element containing the code.
         * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
         * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
         * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
         * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
         *
         * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
         * asynchronous highlighting to work. You can build your own bundle on the
         * [Download page](https://prismjs.com/download.html).
         * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
         * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
         * @memberof Prism
         * @public
         */
        highlightElement: function(y, b, x) {
          var w = a.util.getLanguage(y), S = a.languages[w];
          a.util.setLanguage(y, w);
          var k = y.parentElement;
          k && k.nodeName.toLowerCase() === "pre" && a.util.setLanguage(k, w);
          var N = y.textContent, C = {
            element: y,
            language: w,
            grammar: S,
            code: N
          };
          function R(F) {
            C.highlightedCode = F, a.hooks.run("before-insert", C), C.element.innerHTML = C.highlightedCode, a.hooks.run("after-highlight", C), a.hooks.run("complete", C), x && x.call(C.element);
          }
          if (a.hooks.run("before-sanity-check", C), k = C.element.parentElement, k && k.nodeName.toLowerCase() === "pre" && !k.hasAttribute("tabindex") && k.setAttribute("tabindex", "0"), !C.code) {
            a.hooks.run("complete", C), x && x.call(C.element);
            return;
          }
          if (a.hooks.run("before-highlight", C), !C.grammar) {
            R(a.util.encode(C.code));
            return;
          }
          if (b && r.Worker) {
            var O = new Worker(a.filename);
            O.onmessage = function(F) {
              R(F.data);
            }, O.postMessage(JSON.stringify({
              language: C.language,
              code: C.code,
              immediateClose: !0
            }));
          } else
            R(a.highlight(C.code, C.grammar, C.language));
        },
        /**
         * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
         * and the language definitions to use, and returns a string with the HTML produced.
         *
         * The following hooks will be run:
         * 1. `before-tokenize`
         * 2. `after-tokenize`
         * 3. `wrap`: On each {@link Token}.
         *
         * @param {string} text A string with the code to be highlighted.
         * @param {Grammar} grammar An object containing the tokens to use.
         *
         * Usually a language definition like `Prism.languages.markup`.
         * @param {string} language The name of the language definition passed to `grammar`.
         * @returns {string} The highlighted HTML.
         * @memberof Prism
         * @public
         * @example
         * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
         */
        highlight: function(y, b, x) {
          var w = {
            code: y,
            grammar: b,
            language: x
          };
          if (a.hooks.run("before-tokenize", w), !w.grammar)
            throw new Error('The language "' + w.language + '" has no grammar.');
          return w.tokens = a.tokenize(w.code, w.grammar), a.hooks.run("after-tokenize", w), l.stringify(a.util.encode(w.tokens), w.language);
        },
        /**
         * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
         * and the language definitions to use, and returns an array with the tokenized code.
         *
         * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
         *
         * This method could be useful in other contexts as well, as a very crude parser.
         *
         * @param {string} text A string with the code to be highlighted.
         * @param {Grammar} grammar An object containing the tokens to use.
         *
         * Usually a language definition like `Prism.languages.markup`.
         * @returns {TokenStream} An array of strings and tokens, a token stream.
         * @memberof Prism
         * @public
         * @example
         * let code = `var foo = 0;`;
         * let tokens = Prism.tokenize(code, Prism.languages.javascript);
         * tokens.forEach(token => {
         *     if (token instanceof Prism.Token && token.type === 'number') {
         *         console.log(`Found numeric literal: ${token.content}`);
         *     }
         * });
         */
        tokenize: function(y, b) {
          var x = b.rest;
          if (x) {
            for (var w in x)
              b[w] = x[w];
            delete b.rest;
          }
          var S = new d();
          return f(S, S.head, y), c(y, S, b, S.head, 0), g(S);
        },
        /**
         * @namespace
         * @memberof Prism
         * @public
         */
        hooks: {
          all: {},
          /**
           * Adds the given callback to the list of callbacks for the given hook.
           *
           * The callback will be invoked when the hook it is registered for is run.
           * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
           *
           * One callback function can be registered to multiple hooks and the same hook multiple times.
           *
           * @param {string} name The name of the hook.
           * @param {HookCallback} callback The callback function which is given environment variables.
           * @public
           */
          add: function(y, b) {
            var x = a.hooks.all;
            x[y] = x[y] || [], x[y].push(b);
          },
          /**
           * Runs a hook invoking all registered callbacks with the given environment variables.
           *
           * Callbacks will be invoked synchronously and in the order in which they were registered.
           *
           * @param {string} name The name of the hook.
           * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
           * @public
           */
          run: function(y, b) {
            var x = a.hooks.all[y];
            if (!(!x || !x.length))
              for (var w = 0, S; S = x[w++]; )
                S(b);
          }
        },
        Token: l
      };
      r.Prism = a;
      function l(y, b, x, w) {
        this.type = y, this.content = b, this.alias = x, this.length = (w || "").length | 0;
      }
      l.stringify = function y(b, x) {
        if (typeof b == "string")
          return b;
        if (Array.isArray(b)) {
          var w = "";
          return b.forEach(function(R) {
            w += y(R, x);
          }), w;
        }
        var S = {
          type: b.type,
          content: y(b.content, x),
          tag: "span",
          classes: ["token", b.type],
          attributes: {},
          language: x
        }, k = b.alias;
        k && (Array.isArray(k) ? Array.prototype.push.apply(S.classes, k) : S.classes.push(k)), a.hooks.run("wrap", S);
        var N = "";
        for (var C in S.attributes)
          N += " " + C + '="' + (S.attributes[C] || "").replace(/"/g, "&quot;") + '"';
        return "<" + S.tag + ' class="' + S.classes.join(" ") + '"' + N + ">" + S.content + "</" + S.tag + ">";
      };
      function u(y, b, x, w) {
        y.lastIndex = b;
        var S = y.exec(x);
        if (S && w && S[1]) {
          var k = S[1].length;
          S.index += k, S[0] = S[0].slice(k);
        }
        return S;
      }
      function c(y, b, x, w, S, k) {
        for (var N in x)
          if (!(!x.hasOwnProperty(N) || !x[N])) {
            var C = x[N];
            C = Array.isArray(C) ? C : [C];
            for (var R = 0; R < C.length; ++R) {
              if (k && k.cause == N + "," + R)
                return;
              var O = C[R], F = O.inside, U = !!O.lookbehind, L = !!O.greedy, M = O.alias;
              if (L && !O.pattern.global) {
                var G = O.pattern.toString().match(/[imsuy]*$/)[0];
                O.pattern = RegExp(O.pattern.source, G + "g");
              }
              for (var H = O.pattern || O, J = w.next, ee = S; J !== b.tail && !(k && ee >= k.reach); ee += J.value.length, J = J.next) {
                var oe = J.value;
                if (b.length > y.length)
                  return;
                if (!(oe instanceof l)) {
                  var W = 1, Y;
                  if (L) {
                    if (Y = u(H, ee, y, U), !Y || Y.index >= y.length)
                      break;
                    var Re = Y.index, ue = Y.index + Y[0].length, ge = ee;
                    for (ge += J.value.length; Re >= ge; )
                      J = J.next, ge += J.value.length;
                    if (ge -= J.value.length, ee = ge, J.value instanceof l)
                      continue;
                    for (var me = J; me !== b.tail && (ge < ue || typeof me.value == "string"); me = me.next)
                      W++, ge += me.value.length;
                    W--, oe = y.slice(ee, ge), Y.index -= ee;
                  } else if (Y = u(H, 0, oe, U), !Y)
                    continue;
                  var Re = Y.index, De = Y[0], We = oe.slice(0, Re), Ke = oe.slice(Re + De.length), mn = ee + oe.length;
                  k && mn > k.reach && (k.reach = mn);
                  var Dr = J.prev;
                  We && (Dr = f(b, Dr, We), ee += We.length), p(b, Dr, W);
                  var Pg = new l(N, F ? a.tokenize(De, F) : De, M, De);
                  if (J = f(b, Dr, Pg), Ke && f(b, J, Ke), W > 1) {
                    var ui = {
                      cause: N + "," + R,
                      reach: mn
                    };
                    c(y, b, x, J.prev, ee, ui), k && ui.reach > k.reach && (k.reach = ui.reach);
                  }
                }
              }
            }
          }
      }
      function d() {
        var y = { value: null, prev: null, next: null }, b = { value: null, prev: y, next: null };
        y.next = b, this.head = y, this.tail = b, this.length = 0;
      }
      function f(y, b, x) {
        var w = b.next, S = { value: x, prev: b, next: w };
        return b.next = S, w.prev = S, y.length++, S;
      }
      function p(y, b, x) {
        for (var w = b.next, S = 0; S < x && w !== y.tail; S++)
          w = w.next;
        b.next = w, w.prev = b, y.length -= S;
      }
      function g(y) {
        for (var b = [], x = y.head.next; x !== y.tail; )
          b.push(x.value), x = x.next;
        return b;
      }
      if (!r.document)
        return r.addEventListener && (a.disableWorkerMessageHandler || r.addEventListener("message", function(y) {
          var b = JSON.parse(y.data), x = b.language, w = b.code, S = b.immediateClose;
          r.postMessage(a.highlight(w, a.languages[x], x)), S && r.close();
        }, !1)), a;
      var h = a.util.currentScript();
      h && (a.filename = h.src, h.hasAttribute("data-manual") && (a.manual = !0));
      function m() {
        a.manual || a.highlightAll();
      }
      if (!a.manual) {
        var v = document.readyState;
        v === "loading" || v === "interactive" && h && h.defer ? document.addEventListener("DOMContentLoaded", m) : window.requestAnimationFrame ? window.requestAnimationFrame(m) : window.setTimeout(m, 16);
      }
      return a;
    })(n);
    e.exports && (e.exports = t), typeof yu < "u" && (yu.Prism = t), t.languages.markup = {
      comment: {
        pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
        greedy: !0
      },
      prolog: {
        pattern: /<\?[\s\S]+?\?>/,
        greedy: !0
      },
      doctype: {
        // https://www.w3.org/TR/xml/#NT-doctypedecl
        pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
        greedy: !0,
        inside: {
          "internal-subset": {
            pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
            lookbehind: !0,
            greedy: !0,
            inside: null
            // see below
          },
          string: {
            pattern: /"[^"]*"|'[^']*'/,
            greedy: !0
          },
          punctuation: /^<!|>$|[[\]]/,
          "doctype-tag": /^DOCTYPE/i,
          name: /[^\s<>'"]+/
        }
      },
      cdata: {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        greedy: !0
      },
      tag: {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
        greedy: !0,
        inside: {
          tag: {
            pattern: /^<\/?[^\s>\/]+/,
            inside: {
              punctuation: /^<\/?/,
              namespace: /^[^\s>\/:]+:/
            }
          },
          "special-attr": [],
          "attr-value": {
            pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
            inside: {
              punctuation: [
                {
                  pattern: /^=/,
                  alias: "attr-equals"
                },
                {
                  pattern: /^(\s*)["']|["']$/,
                  lookbehind: !0
                }
              ]
            }
          },
          punctuation: /\/?>/,
          "attr-name": {
            pattern: /[^\s>\/]+/,
            inside: {
              namespace: /^[^\s>\/:]+:/
            }
          }
        }
      },
      entity: [
        {
          pattern: /&[\da-z]{1,8};/i,
          alias: "named-entity"
        },
        /&#x?[\da-f]{1,8};/i
      ]
    }, t.languages.markup.tag.inside["attr-value"].inside.entity = t.languages.markup.entity, t.languages.markup.doctype.inside["internal-subset"].inside = t.languages.markup, t.hooks.add("wrap", function(r) {
      r.type === "entity" && (r.attributes.title = r.content.replace(/&amp;/, "&"));
    }), Object.defineProperty(t.languages.markup.tag, "addInlined", {
      /**
       * Adds an inlined language to markup.
       *
       * An example of an inlined language is CSS with `<style>` tags.
       *
       * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
       * case insensitive.
       * @param {string} lang The language key.
       * @example
       * addInlined('style', 'css');
       */
      value: function(o, i) {
        var s = {};
        s["language-" + i] = {
          pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
          lookbehind: !0,
          inside: t.languages[i]
        }, s.cdata = /^<!\[CDATA\[|\]\]>$/i;
        var a = {
          "included-cdata": {
            pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
            inside: s
          }
        };
        a["language-" + i] = {
          pattern: /[\s\S]+/,
          inside: t.languages[i]
        };
        var l = {};
        l[o] = {
          pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
            return o;
          }), "i"),
          lookbehind: !0,
          greedy: !0,
          inside: a
        }, t.languages.insertBefore("markup", "cdata", l);
      }
    }), Object.defineProperty(t.languages.markup.tag, "addAttribute", {
      /**
       * Adds an pattern to highlight languages embedded in HTML attributes.
       *
       * An example of an inlined language is CSS with `style` attributes.
       *
       * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
       * case insensitive.
       * @param {string} lang The language key.
       * @example
       * addAttribute('style', 'css');
       */
      value: function(r, o) {
        t.languages.markup.tag.inside["special-attr"].push({
          pattern: RegExp(
            /(^|["'\s])/.source + "(?:" + r + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
            "i"
          ),
          lookbehind: !0,
          inside: {
            "attr-name": /^[^\s=]+/,
            "attr-value": {
              pattern: /=[\s\S]+/,
              inside: {
                value: {
                  pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                  lookbehind: !0,
                  alias: [o, "language-" + o],
                  inside: t.languages[o]
                },
                punctuation: [
                  {
                    pattern: /^=/,
                    alias: "attr-equals"
                  },
                  /"|'/
                ]
              }
            }
          }
        });
      }
    }), t.languages.html = t.languages.markup, t.languages.mathml = t.languages.markup, t.languages.svg = t.languages.markup, t.languages.xml = t.languages.extend("markup", {}), t.languages.ssml = t.languages.xml, t.languages.atom = t.languages.xml, t.languages.rss = t.languages.xml, (function(r) {
      var o = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
      r.languages.css = {
        comment: /\/\*[\s\S]*?\*\//,
        atrule: {
          pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + o.source + ")*?" + /(?:;|(?=\s*\{))/.source),
          inside: {
            rule: /^@[\w-]+/,
            "selector-function-argument": {
              pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
              lookbehind: !0,
              alias: "selector"
            },
            keyword: {
              pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
              lookbehind: !0
            }
            // See rest below
          }
        },
        url: {
          // https://drafts.csswg.org/css-values-3/#urls
          pattern: RegExp("\\burl\\((?:" + o.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
          greedy: !0,
          inside: {
            function: /^url/i,
            punctuation: /^\(|\)$/,
            string: {
              pattern: RegExp("^" + o.source + "$"),
              alias: "url"
            }
          }
        },
        selector: {
          pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + o.source + ")*(?=\\s*\\{)"),
          lookbehind: !0
        },
        string: {
          pattern: o,
          greedy: !0
        },
        property: {
          pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
          lookbehind: !0
        },
        important: /!important\b/i,
        function: {
          pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
          lookbehind: !0
        },
        punctuation: /[(){};:,]/
      }, r.languages.css.atrule.inside.rest = r.languages.css;
      var i = r.languages.markup;
      i && (i.tag.addInlined("style", "css"), i.tag.addAttribute("style", "css"));
    })(t), t.languages.clike = {
      comment: [
        {
          pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
          lookbehind: !0,
          greedy: !0
        },
        {
          pattern: /(^|[^\\:])\/\/.*/,
          lookbehind: !0,
          greedy: !0
        }
      ],
      string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
      },
      "class-name": {
        pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
        lookbehind: !0,
        inside: {
          punctuation: /[.\\]/
        }
      },
      keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
      boolean: /\b(?:false|true)\b/,
      function: /\b\w+(?=\()/,
      number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
      operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
      punctuation: /[{}[\];(),.:]/
    }, t.languages.javascript = t.languages.extend("clike", {
      "class-name": [
        t.languages.clike["class-name"],
        {
          pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
          lookbehind: !0
        }
      ],
      keyword: [
        {
          pattern: /((?:^|\})\s*)catch\b/,
          lookbehind: !0
        },
        {
          pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
          lookbehind: !0
        }
      ],
      // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
      function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
      number: {
        pattern: RegExp(
          /(^|[^\w$])/.source + "(?:" + // constant
          (/NaN|Infinity/.source + "|" + // binary integer
          /0[bB][01]+(?:_[01]+)*n?/.source + "|" + // octal integer
          /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + // hexadecimal integer
          /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + // decimal bigint
          /\d+(?:_\d+)*n/.source + "|" + // decimal number (integer or float) but no bigint
          /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source
        ),
        lookbehind: !0
      },
      operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
    }), t.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, t.languages.insertBefore("javascript", "keyword", {
      regex: {
        pattern: RegExp(
          // lookbehind
          // eslint-disable-next-line regexp/no-dupe-characters-character-class
          /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + // Regex pattern:
          // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
          // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
          // with the only syntax, so we have to define 2 different regex patterns.
          /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + // `v` flag syntax. This supports 3 levels of nested character classes.
          /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + // lookahead
          /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
        ),
        lookbehind: !0,
        greedy: !0,
        inside: {
          "regex-source": {
            pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
            lookbehind: !0,
            alias: "language-regex",
            inside: t.languages.regex
          },
          "regex-delimiter": /^\/|\/$/,
          "regex-flags": /^[a-z]+$/
        }
      },
      // This must be declared before keyword because we use "function" inside the look-forward
      "function-variable": {
        pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
        alias: "function"
      },
      parameter: [
        {
          pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
          lookbehind: !0,
          inside: t.languages.javascript
        },
        {
          pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
          lookbehind: !0,
          inside: t.languages.javascript
        },
        {
          pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
          lookbehind: !0,
          inside: t.languages.javascript
        },
        {
          pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
          lookbehind: !0,
          inside: t.languages.javascript
        }
      ],
      constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
    }), t.languages.insertBefore("javascript", "string", {
      hashbang: {
        pattern: /^#!.*/,
        greedy: !0,
        alias: "comment"
      },
      "template-string": {
        pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
        greedy: !0,
        inside: {
          "template-punctuation": {
            pattern: /^`|`$/,
            alias: "string"
          },
          interpolation: {
            pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
            lookbehind: !0,
            inside: {
              "interpolation-punctuation": {
                pattern: /^\$\{|\}$/,
                alias: "punctuation"
              },
              rest: t.languages.javascript
            }
          },
          string: /[\s\S]+/
        }
      },
      "string-property": {
        pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
        lookbehind: !0,
        greedy: !0,
        alias: "property"
      }
    }), t.languages.insertBefore("javascript", "operator", {
      "literal-property": {
        pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
        lookbehind: !0,
        alias: "property"
      }
    }), t.languages.markup && (t.languages.markup.tag.addInlined("script", "javascript"), t.languages.markup.tag.addAttribute(
      /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
      "javascript"
    )), t.languages.js = t.languages.javascript, (function() {
      if (typeof t > "u" || typeof document > "u")
        return;
      Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
      var r = "Loading…", o = function(h, m) {
        return "✖ Error " + h + " while fetching file: " + m;
      }, i = "✖ Error: File does not exist or is empty", s = {
        js: "javascript",
        py: "python",
        rb: "ruby",
        ps1: "powershell",
        psm1: "powershell",
        sh: "bash",
        bat: "batch",
        h: "c",
        tex: "latex"
      }, a = "data-src-status", l = "loading", u = "loaded", c = "failed", d = "pre[data-src]:not([" + a + '="' + u + '"]):not([' + a + '="' + l + '"])';
      function f(h, m, v) {
        var y = new XMLHttpRequest();
        y.open("GET", h, !0), y.onreadystatechange = function() {
          y.readyState == 4 && (y.status < 400 && y.responseText ? m(y.responseText) : y.status >= 400 ? v(o(y.status, y.statusText)) : v(i));
        }, y.send(null);
      }
      function p(h) {
        var m = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(h || "");
        if (m) {
          var v = Number(m[1]), y = m[2], b = m[3];
          return y ? b ? [v, Number(b)] : [v, void 0] : [v, v];
        }
      }
      t.hooks.add("before-highlightall", function(h) {
        h.selector += ", " + d;
      }), t.hooks.add("before-sanity-check", function(h) {
        var m = (
          /** @type {HTMLPreElement} */
          h.element
        );
        if (m.matches(d)) {
          h.code = "", m.setAttribute(a, l);
          var v = m.appendChild(document.createElement("CODE"));
          v.textContent = r;
          var y = m.getAttribute("data-src"), b = h.language;
          if (b === "none") {
            var x = (/\.(\w+)$/.exec(y) || [, "none"])[1];
            b = s[x] || x;
          }
          t.util.setLanguage(v, b), t.util.setLanguage(m, b);
          var w = t.plugins.autoloader;
          w && w.loadLanguages(b), f(
            y,
            function(S) {
              m.setAttribute(a, u);
              var k = p(m.getAttribute("data-range"));
              if (k) {
                var N = S.split(/\r\n?|\n/g), C = k[0], R = k[1] == null ? N.length : k[1];
                C < 0 && (C += N.length), C = Math.max(0, Math.min(C - 1, N.length)), R < 0 && (R += N.length), R = Math.max(0, Math.min(R, N.length)), S = N.slice(C, R).join(`
`), m.hasAttribute("data-start") || m.setAttribute("data-start", String(C + 1));
              }
              v.textContent = S, t.highlightElement(v);
            },
            function(S) {
              m.setAttribute(a, c), v.textContent = S;
            }
          );
        }
      }), t.plugins.fileHighlight = {
        /**
         * Executes the File Highlight plugin for all matching `pre` elements under the given container.
         *
         * Note: Elements which are already loaded or currently loading will not be touched by this method.
         *
         * @param {ParentNode} [container=document]
         */
        highlight: function(m) {
          for (var v = (m || document).querySelectorAll(d), y = 0, b; b = v[y++]; )
            t.highlightElement(b);
        }
      };
      var g = !1;
      t.fileHighlight = function() {
        g || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), g = !0), t.plugins.fileHighlight.highlight.apply(this, arguments);
      };
    })();
  })(Li)), Li.exports;
}
l_();
Prism.languages.clike = {
  comment: [
    {
      pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
      lookbehind: !0,
      greedy: !0
    },
    {
      pattern: /(^|[^\\:])\/\/.*/,
      lookbehind: !0,
      greedy: !0
    }
  ],
  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0
  },
  "class-name": {
    pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
    lookbehind: !0,
    inside: {
      punctuation: /[.\\]/
    }
  },
  keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
  boolean: /\b(?:false|true)\b/,
  function: /\b\w+(?=\()/,
  number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
  operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
  punctuation: /[{}[\];(),.:]/
};
Prism.languages.javascript = Prism.languages.extend("clike", {
  "class-name": [
    Prism.languages.clike["class-name"],
    {
      pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
      lookbehind: !0
    }
  ],
  keyword: [
    {
      pattern: /((?:^|\})\s*)catch\b/,
      lookbehind: !0
    },
    {
      pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
      lookbehind: !0
    }
  ],
  // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
  function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  number: {
    pattern: RegExp(
      /(^|[^\w$])/.source + "(?:" + // constant
      (/NaN|Infinity/.source + "|" + // binary integer
      /0[bB][01]+(?:_[01]+)*n?/.source + "|" + // octal integer
      /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + // hexadecimal integer
      /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + // decimal bigint
      /\d+(?:_\d+)*n/.source + "|" + // decimal number (integer or float) but no bigint
      /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source
    ),
    lookbehind: !0
  },
  operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});
Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
Prism.languages.insertBefore("javascript", "keyword", {
  regex: {
    pattern: RegExp(
      // lookbehind
      // eslint-disable-next-line regexp/no-dupe-characters-character-class
      /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + // Regex pattern:
      // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
      // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
      // with the only syntax, so we have to define 2 different regex patterns.
      /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + // `v` flag syntax. This supports 3 levels of nested character classes.
      /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + // lookahead
      /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
    ),
    lookbehind: !0,
    greedy: !0,
    inside: {
      "regex-source": {
        pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
        lookbehind: !0,
        alias: "language-regex",
        inside: Prism.languages.regex
      },
      "regex-delimiter": /^\/|\/$/,
      "regex-flags": /^[a-z]+$/
    }
  },
  // This must be declared before keyword because we use "function" inside the look-forward
  "function-variable": {
    pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
    alias: "function"
  },
  parameter: [
    {
      pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
      lookbehind: !0,
      inside: Prism.languages.javascript
    },
    {
      pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
      lookbehind: !0,
      inside: Prism.languages.javascript
    },
    {
      pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
      lookbehind: !0,
      inside: Prism.languages.javascript
    },
    {
      pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
      lookbehind: !0,
      inside: Prism.languages.javascript
    }
  ],
  constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});
Prism.languages.insertBefore("javascript", "string", {
  hashbang: {
    pattern: /^#!.*/,
    greedy: !0,
    alias: "comment"
  },
  "template-string": {
    pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
    greedy: !0,
    inside: {
      "template-punctuation": {
        pattern: /^`|`$/,
        alias: "string"
      },
      interpolation: {
        pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
        lookbehind: !0,
        inside: {
          "interpolation-punctuation": {
            pattern: /^\$\{|\}$/,
            alias: "punctuation"
          },
          rest: Prism.languages.javascript
        }
      },
      string: /[\s\S]+/
    }
  },
  "string-property": {
    pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
    lookbehind: !0,
    greedy: !0,
    alias: "property"
  }
});
Prism.languages.insertBefore("javascript", "operator", {
  "literal-property": {
    pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
    lookbehind: !0,
    alias: "property"
  }
});
Prism.languages.markup && (Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.markup.tag.addAttribute(
  /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
  "javascript"
));
Prism.languages.js = Prism.languages.javascript;
Prism.languages.markup = {
  comment: {
    pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
    greedy: !0
  },
  prolog: {
    pattern: /<\?[\s\S]+?\?>/,
    greedy: !0
  },
  doctype: {
    // https://www.w3.org/TR/xml/#NT-doctypedecl
    pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
    greedy: !0,
    inside: {
      "internal-subset": {
        pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
        lookbehind: !0,
        greedy: !0,
        inside: null
        // see below
      },
      string: {
        pattern: /"[^"]*"|'[^']*'/,
        greedy: !0
      },
      punctuation: /^<!|>$|[[\]]/,
      "doctype-tag": /^DOCTYPE/i,
      name: /[^\s<>'"]+/
    }
  },
  cdata: {
    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
    greedy: !0
  },
  tag: {
    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
    greedy: !0,
    inside: {
      tag: {
        pattern: /^<\/?[^\s>\/]+/,
        inside: {
          punctuation: /^<\/?/,
          namespace: /^[^\s>\/:]+:/
        }
      },
      "special-attr": [],
      "attr-value": {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
        inside: {
          punctuation: [
            {
              pattern: /^=/,
              alias: "attr-equals"
            },
            {
              pattern: /^(\s*)["']|["']$/,
              lookbehind: !0
            }
          ]
        }
      },
      punctuation: /\/?>/,
      "attr-name": {
        pattern: /[^\s>\/]+/,
        inside: {
          namespace: /^[^\s>\/:]+:/
        }
      }
    }
  },
  entity: [
    {
      pattern: /&[\da-z]{1,8};/i,
      alias: "named-entity"
    },
    /&#x?[\da-f]{1,8};/i
  ]
};
Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity;
Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup;
Prism.hooks.add("wrap", function(e) {
  e.type === "entity" && (e.attributes.title = e.content.replace(/&amp;/, "&"));
});
Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
  /**
   * Adds an inlined language to markup.
   *
   * An example of an inlined language is CSS with `<style>` tags.
   *
   * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
   * case insensitive.
   * @param {string} lang The language key.
   * @example
   * addInlined('style', 'css');
   */
  value: function(n, t) {
    var r = {};
    r["language-" + t] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: !0,
      inside: Prism.languages[t]
    }, r.cdata = /^<!\[CDATA\[|\]\]>$/i;
    var o = {
      "included-cdata": {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        inside: r
      }
    };
    o["language-" + t] = {
      pattern: /[\s\S]+/,
      inside: Prism.languages[t]
    };
    var i = {};
    i[n] = {
      pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
        return n;
      }), "i"),
      lookbehind: !0,
      greedy: !0,
      inside: o
    }, Prism.languages.insertBefore("markup", "cdata", i);
  }
});
Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
  /**
   * Adds an pattern to highlight languages embedded in HTML attributes.
   *
   * An example of an inlined language is CSS with `style` attributes.
   *
   * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
   * case insensitive.
   * @param {string} lang The language key.
   * @example
   * addAttribute('style', 'css');
   */
  value: function(e, n) {
    Prism.languages.markup.tag.inside["special-attr"].push({
      pattern: RegExp(
        /(^|["'\s])/.source + "(?:" + e + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
        "i"
      ),
      lookbehind: !0,
      inside: {
        "attr-name": /^[^\s=]+/,
        "attr-value": {
          pattern: /=[\s\S]+/,
          inside: {
            value: {
              pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
              lookbehind: !0,
              alias: [n, "language-" + n],
              inside: Prism.languages[n]
            },
            punctuation: [
              {
                pattern: /^=/,
                alias: "attr-equals"
              },
              /"|'/
            ]
          }
        }
      }
    });
  }
});
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;
Prism.languages.xml = Prism.languages.extend("markup", {});
Prism.languages.ssml = Prism.languages.xml;
Prism.languages.atom = Prism.languages.xml;
Prism.languages.rss = Prism.languages.xml;
(function(e) {
  var n = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
  function t(c) {
    return c = c.replace(/<inner>/g, function() {
      return n;
    }), RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + c + ")");
  }
  var r = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source, o = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function() {
    return r;
  }), i = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
  e.languages.markdown = e.languages.extend("markup", {}), e.languages.insertBefore("markdown", "prolog", {
    "front-matter-block": {
      pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
      lookbehind: !0,
      greedy: !0,
      inside: {
        punctuation: /^---|---$/,
        "front-matter": {
          pattern: /\S+(?:\s+\S+)*/,
          alias: ["yaml", "language-yaml"],
          inside: e.languages.yaml
        }
      }
    },
    blockquote: {
      // > ...
      pattern: /^>(?:[\t ]*>)*/m,
      alias: "punctuation"
    },
    table: {
      pattern: RegExp("^" + o + i + "(?:" + o + ")*", "m"),
      inside: {
        "table-data-rows": {
          pattern: RegExp("^(" + o + i + ")(?:" + o + ")*$"),
          lookbehind: !0,
          inside: {
            "table-data": {
              pattern: RegExp(r),
              inside: e.languages.markdown
            },
            punctuation: /\|/
          }
        },
        "table-line": {
          pattern: RegExp("^(" + o + ")" + i + "$"),
          lookbehind: !0,
          inside: {
            punctuation: /\||:?-{3,}:?/
          }
        },
        "table-header-row": {
          pattern: RegExp("^" + o + "$"),
          inside: {
            "table-header": {
              pattern: RegExp(r),
              alias: "important",
              inside: e.languages.markdown
            },
            punctuation: /\|/
          }
        }
      }
    },
    code: [
      {
        // Prefixed by 4 spaces or 1 tab and preceded by an empty line
        pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
        lookbehind: !0,
        alias: "keyword"
      },
      {
        // ```optional language
        // code block
        // ```
        pattern: /^```[\s\S]*?^```$/m,
        greedy: !0,
        inside: {
          "code-block": {
            pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
            lookbehind: !0
          },
          "code-language": {
            pattern: /^(```).+/,
            lookbehind: !0
          },
          punctuation: /```/
        }
      }
    ],
    title: [
      {
        // title 1
        // =======
        // title 2
        // -------
        pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
        alias: "important",
        inside: {
          punctuation: /==+$|--+$/
        }
      },
      {
        // # title 1
        // ###### title 6
        pattern: /(^\s*)#.+/m,
        lookbehind: !0,
        alias: "important",
        inside: {
          punctuation: /^#+|#+$/
        }
      }
    ],
    hr: {
      // ***
      // ---
      // * * *
      // -----------
      pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
      lookbehind: !0,
      alias: "punctuation"
    },
    list: {
      // * item
      // + item
      // - item
      // 1. item
      pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
      lookbehind: !0,
      alias: "punctuation"
    },
    "url-reference": {
      // [id]: http://example.com "Optional title"
      // [id]: http://example.com 'Optional title'
      // [id]: http://example.com (Optional title)
      // [id]: <http://example.com> "Optional title"
      pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
      inside: {
        variable: {
          pattern: /^(!?\[)[^\]]+/,
          lookbehind: !0
        },
        string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
        punctuation: /^[\[\]!:]|[<>]/
      },
      alias: "url"
    },
    bold: {
      // **strong**
      // __strong__
      // allow one nested instance of italic text using the same delimiter
      pattern: t(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),
      lookbehind: !0,
      greedy: !0,
      inside: {
        content: {
          pattern: /(^..)[\s\S]+(?=..$)/,
          lookbehind: !0,
          inside: {}
          // see below
        },
        punctuation: /\*\*|__/
      }
    },
    italic: {
      // *em*
      // _em_
      // allow one nested instance of bold text using the same delimiter
      pattern: t(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),
      lookbehind: !0,
      greedy: !0,
      inside: {
        content: {
          pattern: /(^.)[\s\S]+(?=.$)/,
          lookbehind: !0,
          inside: {}
          // see below
        },
        punctuation: /[*_]/
      }
    },
    strike: {
      // ~~strike through~~
      // ~strike~
      // eslint-disable-next-line regexp/strict
      pattern: t(/(~~?)(?:(?!~)<inner>)+\2/.source),
      lookbehind: !0,
      greedy: !0,
      inside: {
        content: {
          pattern: /(^~~?)[\s\S]+(?=\1$)/,
          lookbehind: !0,
          inside: {}
          // see below
        },
        punctuation: /~~?/
      }
    },
    "code-snippet": {
      // `code`
      // ``code``
      pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
      lookbehind: !0,
      greedy: !0,
      alias: ["code", "keyword"]
    },
    url: {
      // [example](http://example.com "Optional title")
      // [example][id]
      // [example] [id]
      pattern: t(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),
      lookbehind: !0,
      greedy: !0,
      inside: {
        operator: /^!/,
        content: {
          pattern: /(^\[)[^\]]+(?=\])/,
          lookbehind: !0,
          inside: {}
          // see below
        },
        variable: {
          pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
          lookbehind: !0
        },
        url: {
          pattern: /(^\]\()[^\s)]+/,
          lookbehind: !0
        },
        string: {
          pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
          lookbehind: !0
        }
      }
    }
  }), ["url", "bold", "italic", "strike"].forEach(function(c) {
    ["url", "bold", "italic", "strike", "code-snippet"].forEach(function(d) {
      c !== d && (e.languages.markdown[c].inside.content.inside[d] = e.languages.markdown[d]);
    });
  }), e.hooks.add("after-tokenize", function(c) {
    if (c.language !== "markdown" && c.language !== "md")
      return;
    function d(f) {
      if (!(!f || typeof f == "string"))
        for (var p = 0, g = f.length; p < g; p++) {
          var h = f[p];
          if (h.type !== "code") {
            d(h.content);
            continue;
          }
          var m = h.content[1], v = h.content[3];
          if (m && v && m.type === "code-language" && v.type === "code-block" && typeof m.content == "string") {
            var y = m.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp");
            y = (/[a-z][\w-]*/i.exec(y) || [""])[0].toLowerCase();
            var b = "language-" + y;
            v.alias ? typeof v.alias == "string" ? v.alias = [v.alias, b] : v.alias.push(b) : v.alias = [b];
          }
        }
    }
    d(c.tokens);
  }), e.hooks.add("wrap", function(c) {
    if (c.type === "code-block") {
      for (var d = "", f = 0, p = c.classes.length; f < p; f++) {
        var g = c.classes[f], h = /language-(.+)/.exec(g);
        if (h) {
          d = h[1];
          break;
        }
      }
      var m = e.languages[d];
      if (m)
        c.content = e.highlight(u(c.content), m, d);
      else if (d && d !== "none" && e.plugins.autoloader) {
        var v = "md-" + (/* @__PURE__ */ new Date()).valueOf() + "-" + Math.floor(Math.random() * 1e16);
        c.attributes.id = v, e.plugins.autoloader.loadLanguages(d, function() {
          var y = document.getElementById(v);
          y && (y.innerHTML = e.highlight(y.textContent, e.languages[d], d));
        });
      }
    }
  });
  var s = RegExp(e.languages.markup.tag.pattern.source, "gi"), a = {
    amp: "&",
    lt: "<",
    gt: ">",
    quot: '"'
  }, l = String.fromCodePoint || String.fromCharCode;
  function u(c) {
    var d = c.replace(s, "");
    return d = d.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function(f, p) {
      if (p = p.toLowerCase(), p[0] === "#") {
        var g;
        return p[1] === "x" ? g = parseInt(p.slice(2), 16) : g = Number(p.slice(1)), l(g);
      } else {
        var h = a[p];
        return h || f;
      }
    }), d;
  }
  e.languages.md = e.languages.markdown;
})(Prism);
Prism.languages.c = Prism.languages.extend("clike", {
  comment: {
    pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: !0
  },
  string: {
    // https://en.cppreference.com/w/c/language/string_literal
    pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    greedy: !0
  },
  "class-name": {
    pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
    lookbehind: !0
  },
  keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
  function: /\b[a-z_]\w*(?=\s*\()/i,
  number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
  operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
});
Prism.languages.insertBefore("c", "string", {
  char: {
    // https://en.cppreference.com/w/c/language/character_constant
    pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
    greedy: !0
  }
});
Prism.languages.insertBefore("c", "string", {
  macro: {
    // allow for multiline macro definitions
    // spaces after the # character compile fine with gcc
    pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
    lookbehind: !0,
    greedy: !0,
    alias: "property",
    inside: {
      string: [
        {
          // highlight the path of the include statement as a string
          pattern: /^(#\s*include\s*)<[^>]+>/,
          lookbehind: !0
        },
        Prism.languages.c.string
      ],
      char: Prism.languages.c.char,
      comment: Prism.languages.c.comment,
      "macro-name": [
        {
          pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
          lookbehind: !0
        },
        {
          pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
          lookbehind: !0,
          alias: "function"
        }
      ],
      // highlight macro directives as keywords
      directive: {
        pattern: /^(#\s*)[a-z]+/,
        lookbehind: !0,
        alias: "keyword"
      },
      "directive-hash": /^#/,
      punctuation: /##|\\(?=[\r\n])/,
      expression: {
        pattern: /\S[\s\S]*/,
        inside: Prism.languages.c
      }
    }
  }
});
Prism.languages.insertBefore("c", "function", {
  // highlight predefined macros as constants
  constant: /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/
});
delete Prism.languages.c.boolean;
(function(e) {
  var n = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
  e.languages.css = {
    comment: /\/\*[\s\S]*?\*\//,
    atrule: {
      pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + n.source + ")*?" + /(?:;|(?=\s*\{))/.source),
      inside: {
        rule: /^@[\w-]+/,
        "selector-function-argument": {
          pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
          lookbehind: !0,
          alias: "selector"
        },
        keyword: {
          pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
          lookbehind: !0
        }
        // See rest below
      }
    },
    url: {
      // https://drafts.csswg.org/css-values-3/#urls
      pattern: RegExp("\\burl\\((?:" + n.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
      greedy: !0,
      inside: {
        function: /^url/i,
        punctuation: /^\(|\)$/,
        string: {
          pattern: RegExp("^" + n.source + "$"),
          alias: "url"
        }
      }
    },
    selector: {
      pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + n.source + ")*(?=\\s*\\{)"),
      lookbehind: !0
    },
    string: {
      pattern: n,
      greedy: !0
    },
    property: {
      pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
      lookbehind: !0
    },
    important: /!important\b/i,
    function: {
      pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
      lookbehind: !0
    },
    punctuation: /[(){};:,]/
  }, e.languages.css.atrule.inside.rest = e.languages.css;
  var t = e.languages.markup;
  t && (t.tag.addInlined("style", "css"), t.tag.addAttribute("style", "css"));
})(Prism);
Prism.languages.objectivec = Prism.languages.extend("c", {
  string: {
    pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    greedy: !0
  },
  keyword: /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
  operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
});
delete Prism.languages.objectivec["class-name"];
Prism.languages.objc = Prism.languages.objectivec;
Prism.languages.sql = {
  comment: {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
    lookbehind: !0
  },
  variable: [
    {
      pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
      greedy: !0
    },
    /@[\w.$]+/
  ],
  string: {
    pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
    greedy: !0,
    lookbehind: !0
  },
  identifier: {
    pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
    greedy: !0,
    lookbehind: !0,
    inside: {
      punctuation: /^`|`$/
    }
  },
  function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
  // Should we highlight user defined functions too?
  keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
  boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
  number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
  operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
  punctuation: /[;[\]()`,.]/
};
(function(e) {
  var n = e.languages.powershell = {
    comment: [
      {
        pattern: /(^|[^`])<#[\s\S]*?#>/,
        lookbehind: !0
      },
      {
        pattern: /(^|[^`])#.*/,
        lookbehind: !0
      }
    ],
    string: [
      {
        pattern: /"(?:`[\s\S]|[^`"])*"/,
        greedy: !0,
        inside: null
        // see below
      },
      {
        pattern: /'(?:[^']|'')*'/,
        greedy: !0
      }
    ],
    // Matches name spaces as well as casts, attribute decorators. Force starting with letter to avoid matching array indices
    // Supports two levels of nested brackets (e.g. `[OutputType([System.Collections.Generic.List[int]])]`)
    namespace: /\[[a-z](?:\[(?:\[[^\]]*\]|[^\[\]])*\]|[^\[\]])*\]/i,
    boolean: /\$(?:false|true)\b/i,
    variable: /\$\w+\b/,
    // Cmdlets and aliases. Aliases should come last, otherwise "write" gets preferred over "write-host" for example
    // Get-Command | ?{ $_.ModuleName -match "Microsoft.PowerShell.(Util|Core|Management)" }
    // Get-Alias | ?{ $_.ReferencedCommand.Module.Name -match "Microsoft.PowerShell.(Util|Core|Management)" }
    function: [
      /\b(?:Add|Approve|Assert|Backup|Block|Checkpoint|Clear|Close|Compare|Complete|Compress|Confirm|Connect|Convert|ConvertFrom|ConvertTo|Copy|Debug|Deny|Disable|Disconnect|Dismount|Edit|Enable|Enter|Exit|Expand|Export|Find|ForEach|Format|Get|Grant|Group|Hide|Import|Initialize|Install|Invoke|Join|Limit|Lock|Measure|Merge|Move|New|Open|Optimize|Out|Ping|Pop|Protect|Publish|Push|Read|Receive|Redo|Register|Remove|Rename|Repair|Request|Reset|Resize|Resolve|Restart|Restore|Resume|Revoke|Save|Search|Select|Send|Set|Show|Skip|Sort|Split|Start|Step|Stop|Submit|Suspend|Switch|Sync|Tee|Test|Trace|Unblock|Undo|Uninstall|Unlock|Unprotect|Unpublish|Unregister|Update|Use|Wait|Watch|Where|Write)-[a-z]+\b/i,
      /\b(?:ac|cat|chdir|clc|cli|clp|clv|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|ebp|echo|epal|epcsv|epsn|erase|fc|fl|ft|fw|gal|gbp|gc|gci|gcs|gdr|gi|gl|gm|gp|gps|group|gsv|gu|gv|gwmi|iex|ii|ipal|ipcsv|ipsn|irm|iwmi|iwr|kill|lp|ls|measure|mi|mount|move|mp|mv|nal|ndr|ni|nv|ogv|popd|ps|pushd|pwd|rbp|rd|rdr|ren|ri|rm|rmdir|rni|rnp|rp|rv|rvpa|rwmi|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls|sort|sp|spps|spsv|start|sv|swmi|tee|trcm|type|write)\b/i
    ],
    // per http://technet.microsoft.com/en-us/library/hh847744.aspx
    keyword: /\b(?:Begin|Break|Catch|Class|Continue|Data|Define|Do|DynamicParam|Else|ElseIf|End|Exit|Filter|Finally|For|ForEach|From|Function|If|InlineScript|Parallel|Param|Process|Return|Sequence|Switch|Throw|Trap|Try|Until|Using|Var|While|Workflow)\b/i,
    operator: {
      pattern: /(^|\W)(?:!|-(?:b?(?:and|x?or)|as|(?:Not)?(?:Contains|In|Like|Match)|eq|ge|gt|is(?:Not)?|Join|le|lt|ne|not|Replace|sh[lr])\b|-[-=]?|\+[+=]?|[*\/%]=?)/i,
      lookbehind: !0
    },
    punctuation: /[|{}[\];(),.]/
  };
  n.string[0].inside = {
    function: {
      // Allow for one level of nesting
      pattern: /(^|[^`])\$\((?:\$\([^\r\n()]*\)|(?!\$\()[^\r\n)])*\)/,
      lookbehind: !0,
      inside: n
    },
    boolean: n.boolean,
    variable: n.variable
  };
})(Prism);
var vu = {}, xu;
function u_() {
  return xu || (xu = 1, Prism.languages.python = {
    comment: {
      pattern: /(^|[^\\])#.*/,
      lookbehind: !0,
      greedy: !0
    },
    "string-interpolation": {
      pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
      greedy: !0,
      inside: {
        interpolation: {
          // "{" <expression> <optional "!s", "!r", or "!a"> <optional ":" format specifier> "}"
          pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
          lookbehind: !0,
          inside: {
            "format-spec": {
              pattern: /(:)[^:(){}]+(?=\}$)/,
              lookbehind: !0
            },
            "conversion-option": {
              pattern: /![sra](?=[:}]$)/,
              alias: "punctuation"
            },
            rest: null
          }
        },
        string: /[\s\S]+/
      }
    },
    "triple-quoted-string": {
      pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
      greedy: !0,
      alias: "string"
    },
    string: {
      pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
      greedy: !0
    },
    function: {
      pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
      lookbehind: !0
    },
    "class-name": {
      pattern: /(\bclass\s+)\w+/i,
      lookbehind: !0
    },
    decorator: {
      pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
      lookbehind: !0,
      alias: ["annotation", "punctuation"],
      inside: {
        punctuation: /\./
      }
    },
    keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
    builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
    boolean: /\b(?:False|None|True)\b/,
    number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
    operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
    punctuation: /[{}[\];(),.:]/
  }, Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest = Prism.languages.python, Prism.languages.py = Prism.languages.python), vu;
}
u_();
var _u = {}, wu;
function c_() {
  return wu || (wu = 1, (function(e) {
    for (var n = /\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source, t = 0; t < 2; t++)
      n = n.replace(/<self>/g, function() {
        return n;
      });
    n = n.replace(/<self>/g, function() {
      return /[^\s\S]/.source;
    }), e.languages.rust = {
      comment: [
        {
          pattern: RegExp(/(^|[^\\])/.source + n),
          lookbehind: !0,
          greedy: !0
        },
        {
          pattern: /(^|[^\\:])\/\/.*/,
          lookbehind: !0,
          greedy: !0
        }
      ],
      string: {
        pattern: /b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,
        greedy: !0
      },
      char: {
        pattern: /b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,
        greedy: !0
      },
      attribute: {
        pattern: /#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,
        greedy: !0,
        alias: "attr-name",
        inside: {
          string: null
          // see below
        }
      },
      // Closure params should not be confused with bitwise OR |
      "closure-params": {
        pattern: /([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,
        lookbehind: !0,
        greedy: !0,
        inside: {
          "closure-punctuation": {
            pattern: /^\||\|$/,
            alias: "punctuation"
          },
          rest: null
          // see below
        }
      },
      "lifetime-annotation": {
        pattern: /'\w+/,
        alias: "symbol"
      },
      "fragment-specifier": {
        pattern: /(\$\w+:)[a-z]+/,
        lookbehind: !0,
        alias: "punctuation"
      },
      variable: /\$\w+/,
      "function-definition": {
        pattern: /(\bfn\s+)\w+/,
        lookbehind: !0,
        alias: "function"
      },
      "type-definition": {
        pattern: /(\b(?:enum|struct|trait|type|union)\s+)\w+/,
        lookbehind: !0,
        alias: "class-name"
      },
      "module-declaration": [
        {
          pattern: /(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,
          lookbehind: !0,
          alias: "namespace"
        },
        {
          pattern: /(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,
          lookbehind: !0,
          alias: "namespace",
          inside: {
            punctuation: /::/
          }
        }
      ],
      keyword: [
        // https://github.com/rust-lang/reference/blob/master/src/keywords.md
        /\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,
        // primitives and str
        // https://doc.rust-lang.org/stable/rust-by-example/primitives.html
        /\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/
      ],
      // functions can technically start with an upper-case letter, but this will introduce a lot of false positives
      // and Rust's naming conventions recommend snake_case anyway.
      // https://doc.rust-lang.org/1.0.0/style/style/naming/README.html
      function: /\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,
      macro: {
        pattern: /\b\w+!/,
        alias: "property"
      },
      constant: /\b[A-Z_][A-Z_\d]+\b/,
      "class-name": /\b[A-Z]\w*\b/,
      namespace: {
        pattern: /(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,
        inside: {
          punctuation: /::/
        }
      },
      // Hex, oct, bin, dec numbers with visual separators and type suffix
      number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,
      boolean: /\b(?:false|true)\b/,
      punctuation: /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,
      operator: /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/
    }, e.languages.rust["closure-params"].inside.rest = e.languages.rust, e.languages.rust.attribute.inside.string = e.languages.rust.string;
  })(Prism)), _u;
}
c_();
Prism.languages.swift = {
  comment: {
    // Nested comments are supported up to 2 levels
    pattern: /(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,
    lookbehind: !0,
    greedy: !0
  },
  "string-literal": [
    // https://docs.swift.org/swift-book/LanguageGuide/StringsAndCharacters.html
    {
      pattern: RegExp(
        /(^|[^"#])/.source + "(?:" + /"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/.source + "|" + /"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/.source + ")" + /(?!["#])/.source
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        interpolation: {
          pattern: /(\\\()(?:[^()]|\([^()]*\))*(?=\))/,
          lookbehind: !0,
          inside: null
          // see below
        },
        "interpolation-punctuation": {
          pattern: /^\)|\\\($/,
          alias: "punctuation"
        },
        punctuation: /\\(?=[\r\n])/,
        string: /[\s\S]+/
      }
    },
    {
      pattern: RegExp(
        /(^|[^"#])(#+)/.source + "(?:" + /"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/.source + "|" + /"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/.source + ")\\2"
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        interpolation: {
          pattern: /(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/,
          lookbehind: !0,
          inside: null
          // see below
        },
        "interpolation-punctuation": {
          pattern: /^\)|\\#+\($/,
          alias: "punctuation"
        },
        string: /[\s\S]+/
      }
    }
  ],
  directive: {
    // directives with conditions
    pattern: RegExp(
      /#/.source + "(?:" + (/(?:elseif|if)\b/.source + "(?:[ 	]*" + /(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/.source + ")+") + "|" + /(?:else|endif)\b/.source + ")"
    ),
    alias: "property",
    inside: {
      "directive-name": /^#\w+/,
      boolean: /\b(?:false|true)\b/,
      number: /\b\d+(?:\.\d+)*\b/,
      operator: /!|&&|\|\||[<>]=?/,
      punctuation: /[(),]/
    }
  },
  literal: {
    pattern: /#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,
    alias: "constant"
  },
  "other-directive": {
    pattern: /#\w+\b/,
    alias: "property"
  },
  attribute: {
    pattern: /@\w+/,
    alias: "atrule"
  },
  "function-definition": {
    pattern: /(\bfunc\s+)\w+/,
    lookbehind: !0,
    alias: "function"
  },
  label: {
    // https://docs.swift.org/swift-book/LanguageGuide/ControlFlow.html#ID141
    pattern: /\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,
    lookbehind: !0,
    alias: "important"
  },
  keyword: /\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,
  boolean: /\b(?:false|true)\b/,
  nil: {
    pattern: /\bnil\b/,
    alias: "constant"
  },
  "short-argument": /\$\d+\b/,
  omit: {
    pattern: /\b_\b/,
    alias: "keyword"
  },
  number: /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
  // A class name must start with an upper-case letter and be either 1 letter long or contain a lower-case letter.
  "class-name": /\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,
  function: /\b[a-z_]\w*(?=\s*\()/i,
  constant: /\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
  // Operators are generic in Swift. Developers can even create new operators (e.g. +++).
  // https://docs.swift.org/swift-book/ReferenceManual/zzSummaryOfTheGrammar.html#ID481
  // This regex only supports ASCII operators.
  operator: /[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,
  punctuation: /[{}[\]();,.:\\]/
};
Prism.languages.swift["string-literal"].forEach(function(e) {
  e.inside.interpolation.inside = Prism.languages.swift;
});
var Su = {}, Cu;
function d_() {
  return Cu || (Cu = 1, (function(e) {
    e.languages.typescript = e.languages.extend("javascript", {
      "class-name": {
        pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
        lookbehind: !0,
        greedy: !0,
        inside: null
        // see below
      },
      builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
    }), e.languages.typescript.keyword.push(
      /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
      // keywords that have to be followed by an identifier
      /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
      // This is for `import type *, {}`
      /\btype\b(?=\s*(?:[\{*]|$))/
    ), delete e.languages.typescript.parameter, delete e.languages.typescript["literal-property"];
    var n = e.languages.extend("typescript", {});
    delete n["class-name"], e.languages.typescript["class-name"].inside = n, e.languages.insertBefore("typescript", "function", {
      decorator: {
        pattern: /@[$\w\xA0-\uFFFF]+/,
        inside: {
          at: {
            pattern: /^@/,
            alias: "operator"
          },
          function: /^[\s\S]+/
        }
      },
      "generic-function": {
        // e.g. foo<T extends "bar" | "baz">( ...
        pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
        greedy: !0,
        inside: {
          function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
          generic: {
            pattern: /<[\s\S]+/,
            // everything after the first <
            alias: "class-name",
            inside: n
          }
        }
      }
    }), e.languages.ts = e.languages.typescript;
  })(Prism)), Su;
}
d_();
var ku = {}, Eu;
function f_() {
  return Eu || (Eu = 1, (function(e) {
    var n = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/, t = /(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source, r = {
      pattern: RegExp(/(^|[^\w.])/.source + t + /[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),
      lookbehind: !0,
      inside: {
        namespace: {
          pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
          inside: {
            punctuation: /\./
          }
        },
        punctuation: /\./
      }
    };
    e.languages.java = e.languages.extend("clike", {
      string: {
        pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,
        lookbehind: !0,
        greedy: !0
      },
      "class-name": [
        r,
        {
          // variables, parameters, and constructor references
          // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
          pattern: RegExp(/(^|[^\w.])/.source + t + /[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),
          lookbehind: !0,
          inside: r.inside
        },
        {
          // class names based on keyword
          // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
          pattern: RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source + t + /[A-Z]\w*\b/.source),
          lookbehind: !0,
          inside: r.inside
        }
      ],
      keyword: n,
      function: [
        e.languages.clike.function,
        {
          pattern: /(::\s*)[a-z_]\w*/,
          lookbehind: !0
        }
      ],
      number: /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
      operator: {
        pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
        lookbehind: !0
      },
      constant: /\b[A-Z][A-Z_\d]+\b/
    }), e.languages.insertBefore("java", "string", {
      "triple-quoted-string": {
        // http://openjdk.java.net/jeps/355#Description
        pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
        greedy: !0,
        alias: "string"
      },
      char: {
        pattern: /'(?:\\.|[^'\\\r\n]){1,6}'/,
        greedy: !0
      }
    }), e.languages.insertBefore("java", "class-name", {
      annotation: {
        pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
        lookbehind: !0,
        alias: "punctuation"
      },
      generics: {
        pattern: /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
        inside: {
          "class-name": r,
          keyword: n,
          punctuation: /[<>(),.:]/,
          operator: /[?&|]/
        }
      },
      import: [
        {
          pattern: RegExp(/(\bimport\s+)/.source + t + /(?:[A-Z]\w*|\*)(?=\s*;)/.source),
          lookbehind: !0,
          inside: {
            namespace: r.inside.namespace,
            punctuation: /\./,
            operator: /\*/,
            "class-name": /\w+/
          }
        },
        {
          pattern: RegExp(/(\bimport\s+static\s+)/.source + t + /(?:\w+|\*)(?=\s*;)/.source),
          lookbehind: !0,
          alias: "static",
          inside: {
            namespace: r.inside.namespace,
            static: /\b\w+$/,
            punctuation: /\./,
            operator: /\*/,
            "class-name": /\w+/
          }
        }
      ],
      namespace: {
        pattern: RegExp(
          /(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g, function() {
            return n.source;
          })
        ),
        lookbehind: !0,
        inside: {
          punctuation: /\./
        }
      }
    });
  })(Prism)), ku;
}
f_();
var Nu = {}, Ru;
function g_() {
  return Ru || (Ru = 1, (function(e) {
    var n = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/, t = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function() {
      return n.source;
    });
    e.languages.cpp = e.languages.extend("c", {
      "class-name": [
        {
          pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, function() {
            return n.source;
          })),
          lookbehind: !0
        },
        // This is intended to capture the class name of method implementations like:
        //   void foo::bar() const {}
        // However! The `foo` in the above example could also be a namespace, so we only capture the class name if
        // it starts with an uppercase letter. This approximation should give decent results.
        /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
        // This will capture the class name before destructors like:
        //   Foo::~Foo() {}
        /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
        // This also intends to capture the class name of method implementations but here the class has template
        // parameters, so it can't be a namespace (until C++ adds generic namespaces).
        /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/
      ],
      keyword: n,
      number: {
        pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
        greedy: !0
      },
      operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
      boolean: /\b(?:false|true)\b/
    }), e.languages.insertBefore("cpp", "string", {
      module: {
        // https://en.cppreference.com/w/cpp/language/modules
        pattern: RegExp(
          /(\b(?:import|module)\s+)/.source + "(?:" + // header-name
          /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source + "|" + // module name or partition or both
          /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, function() {
            return t;
          }) + ")"
        ),
        lookbehind: !0,
        greedy: !0,
        inside: {
          string: /^[<"][\s\S]+/,
          operator: /:/,
          punctuation: /\./
        }
      },
      "raw-string": {
        pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
        alias: "string",
        greedy: !0
      }
    }), e.languages.insertBefore("cpp", "keyword", {
      "generic-function": {
        pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
        inside: {
          function: /^\w+/,
          generic: {
            pattern: /<[\s\S]+/,
            alias: "class-name",
            inside: e.languages.cpp
          }
        }
      }
    }), e.languages.insertBefore("cpp", "operator", {
      "double-colon": {
        pattern: /::/,
        alias: "punctuation"
      }
    }), e.languages.insertBefore("cpp", "class-name", {
      // the base clause is an optional list of parent classes
      // https://en.cppreference.com/w/cpp/language/class
      "base-clause": {
        pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
        lookbehind: !0,
        greedy: !0,
        inside: e.languages.extend("cpp", {})
      }
    }), e.languages.insertBefore("inside", "double-colon", {
      // All untokenized words that are not namespaces should be class names
      "class-name": /\b[a-z_]\w*\b(?!\s*::)/i
    }, e.languages.cpp["base-clause"]);
  })(Prism)), Nu;
}
g_();
function mg(e, n) {
  for (const t of e.childNodes) {
    if (xe(t) && t.tagName === n) return !0;
    mg(t, n);
  }
  return !1;
}
const sr = "data-language", nr = "data-highlight-language", Qr = "data-theme";
let ii = class yg extends je {
  constructor(t, r) {
    super(r);
    A(this, "__language");
    A(this, "__theme");
    A(this, "__isSyntaxHighlightSupported");
    this.__language = t || void 0, this.__isSyntaxHighlightSupported = !1, this.__theme = void 0;
  }
  static getType() {
    return "code";
  }
  static clone(t) {
    return new yg(t.__language, t.__key);
  }
  afterCloneFrom(t) {
    super.afterCloneFrom(t), this.__language = t.__language, this.__theme = t.__theme, this.__isSyntaxHighlightSupported = t.__isSyntaxHighlightSupported;
  }
  createDOM(t) {
    const r = document.createElement("code");
    tt(r, t.theme.code), r.setAttribute("spellcheck", "false");
    const o = this.getLanguage();
    o && (r.setAttribute(sr, o), this.getIsSyntaxHighlightSupported() && r.setAttribute(nr, o));
    const i = this.getTheme();
    i && r.setAttribute(Qr, i);
    const s = this.getStyle();
    return s && r.setAttribute("style", s), r;
  }
  updateDOM(t, r, o) {
    const i = this.__language, s = t.__language;
    i ? i !== s && r.setAttribute(sr, i) : s && r.removeAttribute(sr);
    const a = this.__isSyntaxHighlightSupported;
    t.__isSyntaxHighlightSupported && s ? a && i ? i !== s && r.setAttribute(nr, i) : r.removeAttribute(nr) : a && i && r.setAttribute(nr, i);
    const l = this.__theme, u = t.__theme;
    l ? l !== u && r.setAttribute(Qr, l) : u && r.removeAttribute(Qr);
    const c = this.__style, d = t.__style;
    return c ? c !== d && r.setAttribute("style", c) : d && r.removeAttribute("style"), !1;
  }
  exportDOM(t) {
    const r = document.createElement("pre");
    tt(r, t._config.theme.code), r.setAttribute("spellcheck", "false");
    const o = this.getLanguage();
    o && (r.setAttribute(sr, o), this.getIsSyntaxHighlightSupported() && r.setAttribute(nr, o));
    const i = this.getTheme();
    i && r.setAttribute(Qr, i);
    const s = this.getStyle();
    return s && r.setAttribute("style", s), { element: r };
  }
  static importDOM() {
    return { code: (t) => t.textContent != null && (/\r?\n/.test(t.textContent) || mg(t, "BR")) ? { conversion: Au, priority: 1 } : null, div: () => ({ conversion: p_, priority: 1 }), pre: () => ({ conversion: Au, priority: 0 }), table: (t) => Di(t) ? { conversion: h_, priority: 3 } : null, td: (t) => {
      const r = t, o = r.closest("table");
      return r.classList.contains("js-file-line") || o && Di(o) ? { conversion: Tu, priority: 3 } : null;
    }, tr: (t) => {
      const r = t.closest("table");
      return r && Di(r) ? { conversion: Tu, priority: 3 } : null;
    } };
  }
  static importJSON(t) {
    return _t().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setLanguage(t.language).setTheme(t.theme);
  }
  exportJSON() {
    return { ...super.exportJSON(), language: this.getLanguage(), theme: this.getTheme() };
  }
  insertNewAfter(t, r = !0) {
    const o = this.getChildren(), i = o.length;
    if (i >= 2 && o[i - 1].getTextContent() === `
` && o[i - 2].getTextContent() === `
` && t.isCollapsed() && t.anchor.key === this.__key && t.anchor.offset === i) {
      o[i - 1].remove(), o[i - 2].remove();
      const u = ve();
      return this.insertAfter(u, r), u;
    }
    const { anchor: s, focus: a } = t, l = (s.isBefore(a) ? s : a).getNode();
    if (B(l)) {
      let u = y_(l);
      const c = [];
      for (; ; ) if (Ko(u)) c.push(Hn()), u = u.getNextSibling();
      else {
        if (!xg(u)) break;
        {
          let v = 0;
          const y = u.getTextContent(), b = u.getTextContentSize();
          for (; v < b && y[v] === " "; ) v++;
          if (v !== 0 && c.push(vg(" ".repeat(v))), v !== b) break;
          u = u.getNextSibling();
        }
      }
      const d = l.splitText(s.offset)[0], f = s.offset === 0 ? 0 : 1, p = d.getIndexWithinParent() + f, g = l.getParentOrThrow(), h = [et(), ...c];
      g.splice(p, 0, h);
      const m = c[c.length - 1];
      m ? m.select() : s.offset === 0 ? d.selectPrevious() : d.getNextSibling().selectNext(0, 0);
    }
    if (ka(l)) {
      const { offset: u } = t.anchor;
      l.splice(u, 0, [et()]), l.select(u + 1, u + 1);
    }
    return null;
  }
  canIndent() {
    return !1;
  }
  collapseAtStart() {
    const t = ve();
    return this.getChildren().forEach((r) => t.append(r)), this.replace(t), !0;
  }
  setLanguage(t) {
    const r = this.getWritable();
    return r.__language = t || void 0, r;
  }
  getLanguage() {
    return this.getLatest().__language;
  }
  setIsSyntaxHighlightSupported(t) {
    const r = this.getWritable();
    return r.__isSyntaxHighlightSupported = t, r;
  }
  getIsSyntaxHighlightSupported() {
    return this.getLatest().__isSyntaxHighlightSupported;
  }
  setTheme(t) {
    const r = this.getWritable();
    return r.__theme = t || void 0, r;
  }
  getTheme() {
    return this.getLatest().__theme;
  }
};
function _t(e, n) {
  return Mf(ii).setLanguage(e).setTheme(n);
}
function ka(e) {
  return e instanceof ii;
}
function Au(e) {
  return { node: _t(e.getAttribute(sr)) };
}
function p_(e) {
  const n = e, t = Fu(n);
  return t || (function(r) {
    let o = r.parentElement;
    for (; o !== null; ) {
      if (Fu(o)) return !0;
      o = o.parentElement;
    }
    return !1;
  })(n) ? { node: t ? _t() : null } : { node: null };
}
function h_() {
  return { node: _t() };
}
function Tu() {
  return { node: null };
}
function Fu(e) {
  return e.style.fontFamily.match("monospace") !== null;
}
function Di(e) {
  return e.classList.contains("js-file-line-container");
}
let Ea = class bg extends Ut {
  constructor(t = "", r, o) {
    super(t, o);
    A(this, "__highlightType");
    this.__highlightType = r;
  }
  static getType() {
    return "code-highlight";
  }
  static clone(t) {
    return new bg(t.__text, t.__highlightType || void 0, t.__key);
  }
  getHighlightType() {
    return this.getLatest().__highlightType;
  }
  setHighlightType(t) {
    const r = this.getWritable();
    return r.__highlightType = t || void 0, r;
  }
  canHaveFormat() {
    return !1;
  }
  createDOM(t) {
    const r = super.createDOM(t), o = zi(t.theme, this.__highlightType);
    return tt(r, o), r;
  }
  updateDOM(t, r, o) {
    const i = super.updateDOM(t, r, o), s = zi(o.theme, t.__highlightType), a = zi(o.theme, this.__highlightType);
    return s !== a && (s && ti(r, s), a && tt(r, a)), i;
  }
  static importJSON(t) {
    return vg().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setHighlightType(t.highlightType);
  }
  exportJSON() {
    return { ...super.exportJSON(), highlightType: this.getHighlightType() };
  }
  setFormat(t) {
    return this;
  }
  isParentRequired() {
    return !0;
  }
  createParentElementNode() {
    return _t();
  }
};
function zi(e, n) {
  return n && e && e.codeHighlight && e.codeHighlight[n];
}
function vg(e = "", n) {
  return He(new Ea(e, n));
}
function xg(e) {
  return e instanceof Ea;
}
function m_(e, n) {
  let t = e;
  for (let r = Te(e, n); r && (xg(r.origin) || Ko(r.origin)); r = X0(r)) t = r.origin;
  return t;
}
function y_(e) {
  return m_(e, "previous");
}
(function(e) {
  e.languages.diff = { coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d.*$/m] };
  var n = { "deleted-sign": "-", "deleted-arrow": "<", "inserted-sign": "+", "inserted-arrow": ">", unchanged: " ", diff: "!" };
  Object.keys(n).forEach(function(t) {
    var r = n[t], o = [];
    /^\w+$/.test(t) || o.push(/\w+/.exec(t)[0]), t === "diff" && o.push("bold"), e.languages.diff[t] = { pattern: RegExp("^(?:[" + r + `].*(?:\r
?|
|(?![\\s\\S])))+`, "m"), alias: o, inside: { line: { pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/, lookbehind: !0 }, prefix: { pattern: /[\s\S]/, alias: /\w+/.exec(t)[0] } } };
  }), Object.defineProperty(e.languages.diff, "PREFIXES", { value: n });
})(Prism);
const b_ = /* @__PURE__ */ new Set(["http:", "https:", "mailto:", "sms:", "tel:"]);
class hn extends je {
  constructor(t = "", r = {}, o) {
    super(o);
    A(this, "__url");
    A(this, "__target");
    A(this, "__rel");
    A(this, "__title");
    const { target: i = null, rel: s = null, title: a = null } = r;
    this.__url = t, this.__target = i, this.__rel = s, this.__title = a;
  }
  static getType() {
    return "link";
  }
  static clone(t) {
    return new hn(t.__url, { rel: t.__rel, target: t.__target, title: t.__title }, t.__key);
  }
  createDOM(t) {
    const r = document.createElement("a");
    return this.updateLinkDOM(null, r, t), tt(r, t.theme.link), r;
  }
  updateLinkDOM(t, r, o) {
    if (If(r)) {
      t && t.__url === this.__url || (r.href = this.sanitizeUrl(this.__url));
      for (const i of ["target", "rel", "title"]) {
        const s = `__${i}`, a = this[s];
        t && t[s] === a || (a ? r[i] = a : r.removeAttribute(i));
      }
    }
  }
  updateDOM(t, r, o) {
    return this.updateLinkDOM(t, r, o), !1;
  }
  static importDOM() {
    return { a: (t) => ({ conversion: v_, priority: 1 }) };
  }
  static importJSON(t) {
    return Io().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setURL(t.url).setRel(t.rel || null).setTarget(t.target || null).setTitle(t.title || null);
  }
  sanitizeUrl(t) {
    t = Ou(t);
    try {
      const r = new URL(Ou(t));
      if (!b_.has(r.protocol)) return "about:blank";
    } catch {
      return t;
    }
    return t;
  }
  exportJSON() {
    return { ...super.exportJSON(), rel: this.getRel(), target: this.getTarget(), title: this.getTitle(), url: this.getURL() };
  }
  getURL() {
    return this.getLatest().__url;
  }
  setURL(t) {
    const r = this.getWritable();
    return r.__url = t, r;
  }
  getTarget() {
    return this.getLatest().__target;
  }
  setTarget(t) {
    const r = this.getWritable();
    return r.__target = t, r;
  }
  getRel() {
    return this.getLatest().__rel;
  }
  setRel(t) {
    const r = this.getWritable();
    return r.__rel = t, r;
  }
  getTitle() {
    return this.getLatest().__title;
  }
  setTitle(t) {
    const r = this.getWritable();
    return r.__title = t, r;
  }
  insertNewAfter(t, r = !0) {
    const o = Io(this.__url, { rel: this.__rel, target: this.__target, title: this.__title });
    return this.insertAfter(o, r), o;
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
  canBeEmpty() {
    return !1;
  }
  isInline() {
    return !0;
  }
  extractWithChild(t, r, o) {
    if (!z(r)) return !1;
    const i = r.anchor.getNode(), s = r.focus.getNode();
    return this.isParentOf(i) && this.isParentOf(s) && r.getTextContent().length > 0;
  }
  isEmailURI() {
    return this.__url.startsWith("mailto:");
  }
  isWebSiteURI() {
    return this.__url.startsWith("https://") || this.__url.startsWith("http://");
  }
}
function v_(e) {
  let n = null;
  if (If(e)) {
    const t = e.textContent;
    (t !== null && t !== "" || e.children.length > 0) && (n = Io(e.getAttribute("href") || "", { rel: e.getAttribute("rel"), target: e.getAttribute("target"), title: e.getAttribute("title") }));
  }
  return { node: n };
}
function Io(e = "", n) {
  return He(new hn(e, n));
}
function x_(e) {
  return e instanceof hn;
}
class si extends hn {
  constructor(t = "", r = {}, o) {
    super(t, r, o);
    A(this, "__isUnlinked");
    this.__isUnlinked = r.isUnlinked !== void 0 && r.isUnlinked !== null && r.isUnlinked;
  }
  static getType() {
    return "autolink";
  }
  static clone(t) {
    return new si(t.__url, { isUnlinked: t.__isUnlinked, rel: t.__rel, target: t.__target, title: t.__title }, t.__key);
  }
  getIsUnlinked() {
    return this.__isUnlinked;
  }
  setIsUnlinked(t) {
    const r = this.getWritable();
    return r.__isUnlinked = t, r;
  }
  createDOM(t) {
    return this.__isUnlinked ? document.createElement("span") : super.createDOM(t);
  }
  updateDOM(t, r, o) {
    return super.updateDOM(t, r, o) || t.__isUnlinked !== this.__isUnlinked;
  }
  static importJSON(t) {
    return Iu().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setIsUnlinked(t.isUnlinked || !1);
  }
  static importDOM() {
    return null;
  }
  exportJSON() {
    return { ...super.exportJSON(), isUnlinked: this.__isUnlinked };
  }
  insertNewAfter(t, r = !0) {
    const o = this.getParentOrThrow().insertNewAfter(t, r);
    if (T(o)) {
      const i = Iu(this.__url, { isUnlinked: this.__isUnlinked, rel: this.__rel, target: this.__target, title: this.__title });
      return o.append(i), i;
    }
    return null;
  }
}
function Iu(e = "", n) {
  return He(new si(e, n));
}
function __(e) {
  return e instanceof si;
}
const w_ = /^\+?[0-9\s()-]{5,}$/;
function Ou(e) {
  return e.match(/^[a-z][a-z0-9+.-]*:/i) || e.match(/^[/#.]/) ? e : e.includes("@") ? `mailto:${e}` : w_.test(e) ? `tel:${e}` : `https://${e}`;
}
function Rs(e, n) {
  const t = {};
  for (const r of e) {
    const o = n(r);
    o && (t[o] ? t[o].push(r) : t[o] = [r]);
  }
  return t;
}
function Na(e) {
  const n = Rs(e, (t) => t.type);
  return { element: n.element || [], multilineElement: n["multiline-element"] || [], textFormat: n["text-format"] || [], textMatch: n["text-match"] || [] };
}
const Oo = /[!-/:-@[-`{-~\s]/, S_ = /^\s{0,3}$/;
function As(e) {
  if (!Fr(e)) return !1;
  const n = e.getFirstChild();
  return n == null || e.getChildrenSize() === 1 && B(n) && S_.test(n.getTextContent());
}
function C_(e, n, t, r) {
  for (const o of n) {
    if (!o.export) continue;
    const i = o.export(e, (s) => Mo(s, t, r));
    if (i != null) return i;
  }
  return T(e) ? Mo(e, t, r) : ne(e) ? e.getTextContent() : null;
}
function Mo(e, n, t, r, o) {
  const i = [], s = e.getChildren();
  r || (r = []), o || (o = []);
  e: for (const a of s) {
    for (const l of t) {
      if (!l.export) continue;
      const u = l.export(a, (c) => Mo(c, n, t, r, [...o, ...r]), (c, d) => Mu(c, d, n, r, o));
      if (u != null) {
        i.push(u);
        continue e;
      }
    }
    Xt(a) ? i.push(`
`) : B(a) ? i.push(Mu(a, a.getTextContent(), n, r, o)) : T(a) ? i.push(Mo(a, n, t, r, o)) : ne(a) && i.push(a.getTextContent());
  }
  return i.join("");
}
function Mu(e, n, t, r, o) {
  let i = e.getFormat() === 0 ? n : (function(f) {
    return f.replace(/^\s+|\s+$/g, (p) => [...p].map((g) => "&#" + g.codePointAt(0) + ";").join(""));
  })(n);
  e.hasFormat("code") || (i = i.replace(/([*_`~\\])/g, "\\$1"));
  let s = "", a = "", l = "";
  const u = $u(e, !0), c = $u(e, !1), d = /* @__PURE__ */ new Set();
  for (const f of t) {
    const p = f.format[0], g = f.tag;
    eo(e, p) && !d.has(p) && (d.add(p), eo(u, p) && r.find((h) => h.tag === g) || (r.push({ format: p, tag: g }), s += g));
  }
  for (let f = 0; f < r.length; f++) {
    const p = eo(e, r[f].format), g = eo(c, r[f].format);
    if (p && g) continue;
    const h = [...r];
    for (; h.length > f; ) {
      const m = h.pop();
      o && m && o.find((v) => v.tag === m.tag) || (m && typeof m.tag == "string" && (p ? g || (l += m.tag) : a += m.tag), r.pop());
    }
    break;
  }
  return i = s + i + l, a + i;
}
function $u(e, n) {
  let t = n ? e.getPreviousSibling() : e.getNextSibling();
  if (!t) {
    const r = e.getParentOrThrow();
    r.isInline() && (t = n ? r.getPreviousSibling() : r.getNextSibling());
  }
  for (; t; ) {
    if (T(t)) {
      if (!t.isInline()) break;
      const r = n ? t.getLastDescendant() : t.getFirstDescendant();
      if (B(r)) return r;
      t = n ? t.getPreviousSibling() : t.getNextSibling();
    }
    if (B(t)) return t;
    if (!T(t)) return null;
  }
  return null;
}
function eo(e, n) {
  return B(e) && e.hasFormat(n);
}
function k_(e, n) {
  const t = (function(o, i) {
    const s = o.match(i.openTagsRegExp);
    if (s == null) return null;
    for (const a of s) {
      const l = a.replace(/^\s/, ""), u = i.fullMatchRegExpByTag[l];
      if (u == null) continue;
      const c = o.match(u), d = i.transformersByTag[l];
      if (c != null && d != null) {
        if (d.intraword !== !1) return c;
        const { index: f = 0 } = c, p = o[f - 1], g = o[f + c[0].length];
        if ((!p || Oo.test(p)) && (!g || Oo.test(g))) return c;
      }
    }
    return null;
  })(e.getTextContent(), n);
  if (!t) return null;
  const r = t.index || 0;
  return { endIndex: r + t[0].length, match: t, startIndex: r, transformer: n.transformersByTag[t[1]] };
}
function Kt(e) {
  return B(e) && !e.hasFormat("code");
}
function qt(e, n, t) {
  let r = k_(e, n), o = (function(s, a) {
    const l = s;
    let u, c, d, f;
    for (const p of a) {
      if (!p.replace || !p.importRegExp) continue;
      const g = l.getTextContent().match(p.importRegExp);
      if (!g) continue;
      const h = g.index || 0, m = p.getEndIndex ? p.getEndIndex(l, g) : h + g[0].length;
      m !== !1 && (u === void 0 || c === void 0 || h < u && (m > c || m <= u)) && (u = h, c = m, d = p, f = g);
    }
    return u === void 0 || c === void 0 || d === void 0 || f === void 0 ? null : { endIndex: c, match: f, startIndex: u, transformer: d };
  })(e, t);
  if (r && o && (r.startIndex <= o.startIndex && r.endIndex >= o.endIndex || o.startIndex > r.endIndex ? o = null : r = null), r) {
    const s = (function(a, l, u, c, d) {
      const f = a.getTextContent();
      let p, g, h;
      if (d[0] === f ? p = a : l === 0 ? [p, g] = a.splitText(u) : [h, p, g] = a.splitText(l, u), p.setTextContent(d[2]), c) for (const m of c.format) p.hasFormat(m) || p.toggleFormat(m);
      return { nodeAfter: g, nodeBefore: h, transformedNode: p };
    })(e, r.startIndex, r.endIndex, r.transformer, r.match);
    Kt(s.nodeAfter) && qt(s.nodeAfter, n, t), Kt(s.nodeBefore) && qt(s.nodeBefore, n, t), Kt(s.transformedNode) && qt(s.transformedNode, n, t);
  } else if (o) {
    const s = (function(a, l, u, c, d) {
      let f, p, g;
      return l === 0 ? [f, p] = a.splitText(u) : [g, f, p] = a.splitText(l, u), c.replace ? { nodeAfter: p, nodeBefore: g, transformedNode: c.replace(f, d) || void 0 } : null;
    })(e, o.startIndex, o.endIndex, o.transformer, o.match);
    if (!s) return;
    Kt(s.nodeAfter) && qt(s.nodeAfter, n, t), Kt(s.nodeBefore) && qt(s.nodeBefore, n, t), Kt(s.transformedNode) && qt(s.transformedNode, n, t);
  }
  const i = e.getTextContent().replace(/\\([*_`~\\])/g, "$1").replace(/&#(\d+);/g, (s, a) => String.fromCodePoint(a));
  e.setTextContent(i);
}
function E_(e, n = !1) {
  const t = Na(e), r = (function(o) {
    const i = {}, s = {}, a = [], l = "(?<![\\\\])";
    for (const u of o) {
      const { tag: c } = u;
      i[c] = u;
      const d = c.replace(/(\*|\^|\+)/g, "\\$1");
      a.push(d), c.length === 1 ? s[c] = c === "`" ? new RegExp("(?<![\\\\`])(`)((?:\\\\`|[^`])+?)(`)(?!`)") : new RegExp(`(?<![\\\\${d}])(${d})((\\\\${d})?.*?[^${d}\\s](\\\\${d})?)((?<!\\\\)|(?<=\\\\\\\\))(${d})(?![\\\\${d}])`) : s[c] = new RegExp(`(?<!\\\\)(${d})((\\\\${d})?.*?[^\\s](\\\\${d})?)((?<!\\\\)|(?<=\\\\\\\\))(${d})(?!\\\\)`);
    }
    return { fullMatchRegExpByTag: s, openTagsRegExp: new RegExp(`${l}(${a.join("|")})`, "g"), transformersByTag: i };
  })(t.textFormat);
  return (o, i) => {
    const s = o.split(`
`), a = s.length, l = i || pe();
    l.clear();
    for (let c = 0; c < a; c++) {
      const d = s[c], [f, p] = N_(s, c, t.multilineElement, l);
      f ? c = p : R_(d, l, t.element, r, t.textMatch, n);
    }
    const u = l.getChildren();
    for (const c of u) !n && As(c) && l.getChildrenSize() > 1 && c.remove();
    j() !== null && l.selectStart();
  };
}
function N_(e, n, t, r) {
  for (const o of t) {
    const { handleImportAfterStartMatch: i, regExpEnd: s, regExpStart: a, replace: l } = o, u = e[n].match(a);
    if (!u) continue;
    if (i) {
      const g = i({ lines: e, rootNode: r, startLineIndex: n, startMatch: u, transformer: o });
      if (g === null) continue;
      if (g) return g;
    }
    const c = typeof s == "object" && "regExp" in s ? s.regExp : s, d = s && typeof s == "object" && "optional" in s ? s.optional : !s;
    let f = n;
    const p = e.length;
    for (; f < p; ) {
      const g = c ? e[f].match(c) : null;
      if (!g && (!d || d && f < p - 1)) {
        f++;
        continue;
      }
      if (g && n === f && g.index === u.index) {
        f++;
        continue;
      }
      const h = [];
      if (g && n === f) h.push(e[n].slice(u[0].length, -g[0].length));
      else for (let m = n; m <= f; m++) if (m === n) {
        const v = e[m].slice(u[0].length);
        h.push(v);
      } else if (m === f && g) {
        const v = e[m].slice(0, -g[0].length);
        h.push(v);
      } else h.push(e[m]);
      if (l(r, null, u, g, h, !0) !== !1) return [!0, f];
      break;
    }
  }
  return [!1, n];
}
function R_(e, n, t, r, o, i) {
  const s = he(e), a = ve();
  a.append(s), n.append(a);
  for (const { regExp: l, replace: u } of t) {
    const c = e.match(l);
    if (c && (s.setTextContent(e.slice(c[0].length)), u(a, [s], c, !0) !== !1)) break;
  }
  if (qt(s, r, o), a.isAttached() && e.length > 0) {
    const l = a.getPreviousSibling();
    if (!i && (Fr(l) || Ns(l) || se(l))) {
      let u = l;
      if (se(l)) {
        const c = l.getLastDescendant();
        u = c == null ? null : Mt(c, Oe);
      }
      u != null && u.getTextContentSize() > 0 && (u.splice(u.getChildrenSize(), 0, [et(), ...a.getChildren()]), a.remove());
    }
  }
}
function A_(e, ...n) {
  const t = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", e);
  for (const o of n) r.append("v", o);
  throw t.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
const _g = /^(\s*)(\d{1,})\.\s/, wg = /^(\s*)[-*+]\s/, T_ = /^(\s*)(?:[-*+]\s)?\s?(\[(\s|x)?\])\s/i, Ts = /^(#{1,6})\s/, Sg = /^>\s/, Cg = /^[ \t]*```([\w-]+)?/, Fs = /[ \t]*```$/, F_ = /^[ \t]*```[^`]+(?:(?:`{1,2}|`{4,})[^`]+)*```(?:[^`]|$)/, I_ = /^(?:\|)(.+)(?:\|)\s?$/, O_ = /^(\| ?:?-*:? ?)+\|\s?$/, Pu = /^<[a-z_][\w-]*(?:\s[^<>]*)?\/?>/i, Lu = /^<\/[a-z_][\w-]*\s*>/i, Du = (e) => new RegExp(`(?:${e.source})$`, e.flags), ar = Sv("mdListMarker", { parse: (e) => typeof e == "string" && /^[-*+]$/.test(e) ? e : "-" }), kg = (e) => (n, t, r, o) => {
  const i = e(r);
  i.append(...t), n.replace(i), o || i.select(0, 0);
}, Eg = (e) => (n, t, r, o) => {
  const i = n.getPreviousSibling(), s = n.getNextSibling(), a = Et(e === "check" ? r[3] === "x" : void 0), l = r[0].trim()[0], u = e !== "bullet" && e !== "check" || l !== ar.parse(l) ? void 0 : l;
  if (se(s) && s.getListType() === e) {
    u && xi(s, ar, u);
    const d = s.getFirstChild();
    d !== null ? d.insertBefore(a) : s.append(a), n.remove();
  } else if (se(i) && i.getListType() === e) u && xi(i, ar, u), i.append(a), n.remove();
  else {
    const d = ct(e, e === "number" ? Number(r[2]) : void 0);
    u && xi(d, ar, u), d.append(a), n.replace(d);
  }
  a.append(...t), o || a.select(0, 0);
  const c = (function(d) {
    const f = d.match(/\t/g), p = d.match(/ /g);
    let g = 0;
    return f && (g += f.length), p && (g += Math.floor(p.length / 4)), g;
  })(r[1]);
  c && a.setIndent(c);
}, Ra = (e, n, t) => {
  const r = [], o = e.getChildren();
  let i = 0;
  for (const s of o) if (Oe(s)) {
    if (s.getChildrenSize() === 1) {
      const d = s.getFirstChild();
      if (se(d)) {
        r.push(Ra(d, n, t + 1));
        continue;
      }
    }
    const a = " ".repeat(4 * t), l = e.getListType(), u = Cd(e, ar), c = l === "number" ? `${e.getStart() + i}. ` : l === "check" ? `${u} [${s.getChecked() ? "x" : " "}] ` : u + " ";
    r.push(a + c + n(s)), i++;
  }
  return r.join(`
`);
}, M_ = { dependencies: [oi], export: (e, n) => {
  if (!Px(e)) return null;
  const t = Number(e.getTag().slice(1));
  return "#".repeat(t) + " " + n(e);
}, regExp: Ts, replace: kg((e) => {
  const n = "h" + e[1].length;
  return kn(n);
}), type: "element" }, $_ = { dependencies: [ri], export: (e, n) => {
  if (!Ns(e)) return null;
  const t = n(e).split(`
`), r = [];
  for (const o of t) r.push("> " + o);
  return r.join(`
`);
}, regExp: Sg, replace: (e, n, t, r) => {
  if (r) {
    const i = e.getPreviousSibling();
    if (Ns(i)) return i.splice(i.getChildrenSize(), 0, [et(), ...n]), void e.remove();
  }
  const o = wa();
  o.append(...n), e.replace(o), r || o.select(0, 0);
}, type: "element" }, P_ = { dependencies: [ii], export: (e) => {
  if (!ka(e)) return null;
  const n = e.getTextContent();
  return "```" + (e.getLanguage() || "") + (n ? `
` + n : "") + "\n```";
}, regExpEnd: { optional: !0, regExp: Fs }, regExpStart: Cg, replace: (e, n, t, r, o, i) => {
  let s, a;
  if (!n && o) {
    if (o.length === 1) r ? (s = _t(), a = t[1] + o[0]) : (s = _t(t[1]), a = o[0].startsWith(" ") ? o[0].slice(1) : o[0]);
    else {
      if (s = _t(t[1]), o[0].trim().length === 0) for (; o.length > 0 && !o[0].length; ) o.shift();
      else o[0] = o[0].startsWith(" ") ? o[0].slice(1) : o[0];
      for (; o.length > 0 && !o[o.length - 1].length; ) o.pop();
      a = o.join(`
`);
    }
    const l = he(a);
    s.append(l), e.append(s);
  } else n && kg((l) => _t(l ? l[1] : void 0))(e, n, t, i);
}, type: "multiline-element" }, L_ = { dependencies: [Pr, $r], export: (e, n) => se(e) ? Ra(e, n, 0) : null, regExp: wg, replace: Eg("bullet"), type: "element" }, D_ = { dependencies: [Pr, $r], export: (e, n) => se(e) ? Ra(e, n, 0) : null, regExp: _g, replace: Eg("number"), type: "element" }, z_ = { format: ["code"], tag: "`", type: "text-format" }, B_ = { format: ["highlight"], tag: "==", type: "text-format" }, V_ = { format: ["bold", "italic"], tag: "***", type: "text-format" }, j_ = { format: ["bold", "italic"], intraword: !1, tag: "___", type: "text-format" }, U_ = { format: ["bold"], tag: "**", type: "text-format" }, G_ = { format: ["bold"], intraword: !1, tag: "__", type: "text-format" }, H_ = { format: ["strikethrough"], tag: "~~", type: "text-format" }, W_ = { format: ["italic"], tag: "*", type: "text-format" }, K_ = { format: ["italic"], intraword: !1, tag: "_", type: "text-format" }, q_ = { dependencies: [hn], export: (e, n, t) => {
  if (!x_(e) || __(e)) return null;
  const r = e.getTitle(), o = n(e);
  return r ? `[${o}](${e.getURL()} "${r}")` : `[${o}](${e.getURL()})`;
}, importRegExp: /(?:\[(.+?)\])(?:\((?:([^()\s]+)(?:\s"((?:[^"]*\\")*[^"]*)"\s*)?)\))/, regExp: /(?:\[(.+?)\])(?:\((?:([^()\s]+)(?:\s"((?:[^"]*\\")*[^"]*)"\s*)?)\))$/, replace: (e, n) => {
  const [, t, r, o] = n, i = Io(r, { title: o }), s = t.split("[").length - 1, a = t.split("]").length - 1;
  let l = t, u = "";
  if (s < a) return;
  if (s > a) {
    const d = t.split("[");
    u = "[" + d[0], l = d.slice(1).join("[");
  }
  const c = he(l);
  return c.setFormat(e.getFormat()), i.append(c), e.replace(i), u && i.insertBefore(he(u)), c;
}, trigger: ")", type: "text-match" }, Z_ = [M_, $_, L_, D_], J_ = [P_], Y_ = [z_, V_, j_, U_, G_, B_, W_, K_, H_], X_ = [q_], fn = [...Z_, ...J_, ...Y_, ...X_];
function zu(e, n, t) {
  const r = t.length;
  for (let o = n; o >= r; o--) {
    const i = o - r;
    if (Ng(e, i, t, 0, r) && e[i + r] !== " ") return i;
  }
  return -1;
}
function Ng(e, n, t, r, o) {
  for (let i = 0; i < o; i++) if (e[n + i] !== t[r + i]) return !1;
  return !0;
}
function Q_(e, n = fn) {
  const t = Na(n), r = Rs(t.textFormat, ({ tag: s }) => s[s.length - 1]), o = Rs(t.textMatch, ({ trigger: s }) => s);
  for (const s of n) {
    const a = s.type;
    if (a === "element" || a === "text-match" || a === "multiline-element") {
      const l = s.dependencies;
      for (const u of l) e.hasNode(u) || A_(173, u.getType());
    }
  }
  const i = (s, a, l) => {
    (function(u, c, d, f) {
      const p = u.getParent();
      if (!Ue(p) || u.getFirstChild() !== c) return !1;
      const g = c.getTextContent();
      if (g[d - 1] !== " ") return !1;
      for (const { regExp: h, replace: m } of f) {
        const v = g.match(h);
        if (v && v[0].length === (v[0].endsWith(" ") ? d : d - 1)) {
          const y = c.getNextSiblings(), [b, x] = c.splitText(d);
          if (m(u, x ? [x, ...y] : y, v, !1) !== !1) return b.remove(), !0;
        }
      }
      return !1;
    })(s, a, l, t.element) || (function(u, c, d, f) {
      const p = u.getParent();
      if (!Ue(p) || u.getFirstChild() !== c) return !1;
      const g = c.getTextContent();
      if (g[d - 1] !== " ") return !1;
      for (const { regExpStart: h, replace: m, regExpEnd: v } of f) {
        if (v && !("optional" in v) || v && "optional" in v && !v.optional) continue;
        const y = g.match(h);
        if (y && y[0].length === (y[0].endsWith(" ") ? d : d - 1)) {
          const b = c.getNextSiblings(), [x, w] = c.splitText(d);
          if (m(u, w ? [w, ...b] : b, y, null, null, !1) !== !1) return x.remove(), !0;
        }
      }
      return !1;
    })(s, a, l, t.multilineElement) || (function(u, c, d) {
      let f = u.getTextContent();
      const p = d[f[c - 1]];
      if (p == null) return !1;
      c < f.length && (f = f.slice(0, c));
      for (const g of p) {
        if (!g.replace || !g.regExp) continue;
        const h = f.match(g.regExp);
        if (h === null) continue;
        const m = h.index || 0, v = m + h[0].length;
        let y;
        return m === 0 ? [y] = u.splitText(v) : [, y] = u.splitText(m, v), y.selectNext(0, 0), g.replace(y, h), !0;
      }
      return !1;
    })(a, l, o) || (function(u, c, d) {
      const f = u.getTextContent(), p = c - 1, g = f[p], h = d[g];
      if (!h) return !1;
      for (const m of h) {
        const { tag: v } = m, y = v.length, b = p - y + 1;
        if (y > 1 && !Ng(f, b, v, 0, y) || f[b - 1] === " ") continue;
        const x = f[p + 1];
        if (m.intraword === !1 && x && !Oo.test(x)) continue;
        const w = u;
        let S = w, k = zu(f, b, v), N = S;
        for (; k < 0 && (N = N.getPreviousSibling()) && !Xt(N); ) if (B(N)) {
          if (N.hasFormat("code")) continue;
          const H = N.getTextContent();
          S = N, k = zu(H, H.length, v);
        }
        if (k < 0 || S === w && k + y === b) continue;
        const C = S.getTextContent();
        if (k > 0 && C[k - 1] === g) continue;
        const R = C[k - 1];
        if (m.intraword === !1 && R && !Oo.test(R)) continue;
        const O = w.getTextContent(), F = O.slice(0, b) + O.slice(p + 1);
        w.setTextContent(F);
        const U = S === w ? F : C;
        S.setTextContent(U.slice(0, k) + U.slice(k + y));
        const L = j(), M = Js();
        $e(M);
        const G = p - y * (S === w ? 2 : 1) + 1;
        M.anchor.set(S.__key, k, "text"), M.focus.set(w.__key, G, "text");
        for (const H of m.format) M.hasFormat(H) || M.formatText(H);
        M.anchor.set(M.focus.key, M.focus.offset, M.focus.type);
        for (const H of m.format) M.hasFormat(H) && M.toggleFormat(H);
        return z(L) && (M.format = L.format), !0;
      }
    })(a, l, r);
  };
  return e.registerUpdateListener(({ tags: s, dirtyLeaves: a, editorState: l, prevEditorState: u }) => {
    if (s.has(sf) || s.has(Co) || e.isComposing()) return;
    const c = l.read(j), d = u.read(j);
    if (!z(d) || !z(c) || !c.isCollapsed() || c.is(d)) return;
    const f = c.anchor.key, p = c.anchor.offset, g = l._nodeMap.get(f);
    !B(g) || !a.has(f) || p !== 1 && p > d.anchor.offset + 1 || e.update(() => {
      if (!Kt(g)) return;
      const h = g.getParent();
      h === null || ka(h) || i(h, g, c.anchor.offset);
    });
  });
}
function ew(e, n = fn, t, r = !1, o = !1) {
  const i = r ? e : (function(s, a = !1) {
    const l = s.split(`
`);
    let u = !1;
    const c = [];
    for (let d = 0; d < l.length; d++) {
      const f = l[d].trimEnd(), p = c[c.length - 1];
      F_.test(f) ? c.push(f) : Cg.test(f) || Fs.test(f) ? (u = !u, c.push(f)) : u || f === "" || p === "" || !p || Ts.test(p) || Ts.test(f) || Sg.test(f) || _g.test(f) || wg.test(f) || T_.test(f) || I_.test(f) || O_.test(f) || !a || Pu.test(f) || Lu.test(f) || Du(Lu).test(p) || Du(Pu).test(p) || Fs.test(p) ? c.push(f) : c[c.length - 1] = p + " " + f.trimStart();
    }
    return c.join(`
`);
  })(e, o);
  return E_(n, r)(i, t);
}
function tw(e = fn, n, t = !1) {
  return (function(o, i = !1) {
    const s = Na(o), a = [...s.multilineElement, ...s.element], l = !i, u = s.textFormat.filter((c) => c.format.length === 1).sort((c, d) => Number(c.format.includes("code")) - Number(d.format.includes("code")));
    return (c) => {
      const d = [], f = (c || pe()).getChildren();
      for (let p = 0; p < f.length; p++) {
        const g = f[p], h = C_(g, a, u, s.textMatch);
        h != null && d.push(l && p > 0 && !As(g) && !As(f[p - 1]) ? `
`.concat(h) : h);
      }
      return d.join(`
`);
    };
  })(e, t)(n);
}
function Bu(e, n) {
  return e.getEditorState().read(() => {
    const t = we(n);
    return t !== null && t.isSelected();
  });
}
function nw(e) {
  const [n] = ft(), [t, r] = Qe(() => Bu(n, e));
  return Se(() => {
    let o = !0;
    const i = n.registerUpdateListener(() => {
      o && r(Bu(n, e));
    });
    return () => {
      o = !1, i();
    };
  }, [n, e]), [t, St((o) => {
    n.update(() => {
      let i = j();
      Ie(i) || (i = Ys(), $e(i)), Ie(i) && (o ? i.add(e) : i.delete(e));
    });
  }, [n, e]), St(() => {
    n.update(() => {
      const o = j();
      Ie(o) && o.clear();
    });
  }, [n])];
}
function rw({ nodeKey: e }) {
  const [n] = ft(), [t, r, o] = nw(e);
  return Se(() => jt(n.registerCommand(Gs, (i) => {
    const s = n.getElementByKey(e);
    return i.target === s && (i.shiftKey || o(), r(!t), !0);
  }, p0)), [o, n, t, e, r]), Se(() => {
    const i = n.getElementByKey(e), s = n._config.theme.hrSelected ?? "selected";
    i !== null && (t ? tt(i, s) : ti(i, s));
  }, [n, t, e]), null;
}
class ai extends Mr {
  static getType() {
    return "horizontalrule";
  }
  static clone(n) {
    return new ai(n.__key);
  }
  static importJSON(n) {
    return Aa().updateFromJSON(n);
  }
  static importDOM() {
    return { hr: () => ({ conversion: ow, priority: 0 }) };
  }
  decorate() {
    return _(rw, { nodeKey: this.__key });
  }
}
function ow() {
  return { node: Aa() };
}
function Aa() {
  return He(new ai());
}
const iw = [{ dependencies: [ai], export: (e) => px(e) ? "***" : null, regExp: /^(---|\*\*\*|___)\s?$/, replace: (e, n, t, r) => {
  const o = Aa();
  r || e.getNextSibling() != null ? e.replace(o) : e.insertBefore(o), o.selectNext();
}, type: "element" }, ...fn];
function sw({ transformers: e = iw }) {
  const [n] = ft();
  return Se(() => Q_(n, e), [n, e]), null;
}
function Vu(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, r = Array(n); t < n; t++) r[t] = e[t];
  return r;
}
function aw(e) {
  if (Array.isArray(e)) return e;
}
function lw(e, n, t) {
  return (n = hw(n)) in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = t, e;
}
function uw(e, n) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var r, o, i, s, a = [], l = !0, u = !1;
    try {
      if (i = (t = t.call(e)).next, n !== 0) for (; !(l = (r = i.call(t)).done) && (a.push(r.value), a.length !== n); l = !0) ;
    } catch (c) {
      u = !0, o = c;
    } finally {
      try {
        if (!l && t.return != null && (s = t.return(), Object(s) !== s)) return;
      } finally {
        if (u) throw o;
      }
    }
    return a;
  }
}
function cw() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ju(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Uu(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? ju(Object(t), !0).forEach(function(r) {
      lw(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ju(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function dw(e, n) {
  if (e == null) return {};
  var t, r, o = fw(e, n);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++) t = i[r], n.indexOf(t) === -1 && {}.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
  }
  return o;
}
function fw(e, n) {
  if (e == null) return {};
  var t = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (n.indexOf(r) !== -1) continue;
    t[r] = e[r];
  }
  return t;
}
function gw(e, n) {
  return aw(e) || uw(e, n) || mw(e, n) || cw();
}
function pw(e, n) {
  if (typeof e != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(e, n);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function hw(e) {
  var n = pw(e, "string");
  return typeof n == "symbol" ? n : n + "";
}
function mw(e, n) {
  if (e) {
    if (typeof e == "string") return Vu(e, n);
    var t = {}.toString.call(e).slice(8, -1);
    return t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set" ? Array.from(e) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Vu(e, n) : void 0;
  }
}
function yw(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = t, e;
}
function Gu(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Hu(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Gu(Object(t), !0).forEach(function(r) {
      yw(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Gu(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function bw() {
  for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
    n[t] = arguments[t];
  return function(r) {
    return n.reduceRight(function(o, i) {
      return i(o);
    }, r);
  };
}
function lr(e) {
  return function n() {
    for (var t = this, r = arguments.length, o = new Array(r), i = 0; i < r; i++)
      o[i] = arguments[i];
    return o.length >= e.length ? e.apply(this, o) : function() {
      for (var s = arguments.length, a = new Array(s), l = 0; l < s; l++)
        a[l] = arguments[l];
      return n.apply(t, [].concat(o, a));
    };
  };
}
function $o(e) {
  return {}.toString.call(e).includes("Object");
}
function vw(e) {
  return !Object.keys(e).length;
}
function Cr(e) {
  return typeof e == "function";
}
function xw(e, n) {
  return Object.prototype.hasOwnProperty.call(e, n);
}
function _w(e, n) {
  return $o(n) || Dt("changeType"), Object.keys(n).some(function(t) {
    return !xw(e, t);
  }) && Dt("changeField"), n;
}
function ww(e) {
  Cr(e) || Dt("selectorType");
}
function Sw(e) {
  Cr(e) || $o(e) || Dt("handlerType"), $o(e) && Object.values(e).some(function(n) {
    return !Cr(n);
  }) && Dt("handlersType");
}
function Cw(e) {
  e || Dt("initialIsRequired"), $o(e) || Dt("initialType"), vw(e) && Dt("initialContent");
}
function kw(e, n) {
  throw new Error(e[n] || e.default);
}
var Ew = {
  initialIsRequired: "initial state is required",
  initialType: "initial state should be an object",
  initialContent: "initial state shouldn't be an empty object",
  handlerType: "handler should be an object or a function",
  handlersType: "all handlers should be a functions",
  selectorType: "selector should be a function",
  changeType: "provided value of changes should be an object",
  changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
  default: "an unknown error accured in `state-local` package"
}, Dt = lr(kw)(Ew), to = {
  changes: _w,
  selector: ww,
  handler: Sw,
  initial: Cw
};
function Nw(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  to.initial(e), to.handler(n);
  var t = {
    current: e
  }, r = lr(Tw)(t, n), o = lr(Aw)(t), i = lr(to.changes)(e), s = lr(Rw)(t);
  function a() {
    var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function(c) {
      return c;
    };
    return to.selector(u), u(t.current);
  }
  function l(u) {
    bw(r, o, i, s)(u);
  }
  return [a, l];
}
function Rw(e, n) {
  return Cr(n) ? n(e.current) : n;
}
function Aw(e, n) {
  return e.current = Hu(Hu({}, e.current), n), n;
}
function Tw(e, n, t) {
  return Cr(n) ? n(e.current) : Object.keys(t).forEach(function(r) {
    var o;
    return (o = n[r]) === null || o === void 0 ? void 0 : o.call(n, e.current[r]);
  }), t;
}
var Fw = {
  create: Nw
}, Iw = {
  paths: {
    vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"
  }
};
function Ow(e) {
  return function n() {
    for (var t = this, r = arguments.length, o = new Array(r), i = 0; i < r; i++)
      o[i] = arguments[i];
    return o.length >= e.length ? e.apply(this, o) : function() {
      for (var s = arguments.length, a = new Array(s), l = 0; l < s; l++)
        a[l] = arguments[l];
      return n.apply(t, [].concat(o, a));
    };
  };
}
function Mw(e) {
  return {}.toString.call(e).includes("Object");
}
function $w(e) {
  return e || Wu("configIsRequired"), Mw(e) || Wu("configType"), e.urls ? (Pw(), {
    paths: {
      vs: e.urls.monacoBase
    }
  }) : e;
}
function Pw() {
  console.warn(Rg.deprecation);
}
function Lw(e, n) {
  throw new Error(e[n] || e.default);
}
var Rg = {
  configIsRequired: "the configuration object is required",
  configType: "the configuration object should be an object",
  default: "an unknown error accured in `@monaco-editor/loader` package",
  deprecation: `Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `
}, Wu = Ow(Lw)(Rg), Dw = {
  config: $w
}, zw = function() {
  for (var n = arguments.length, t = new Array(n), r = 0; r < n; r++)
    t[r] = arguments[r];
  return function(o) {
    return t.reduceRight(function(i, s) {
      return s(i);
    }, o);
  };
};
function Ag(e, n) {
  return Object.keys(n).forEach(function(t) {
    n[t] instanceof Object && e[t] && Object.assign(n[t], Ag(e[t], n[t]));
  }), Uu(Uu({}, e), n);
}
var Bw = {
  type: "cancelation",
  msg: "operation is manually canceled"
};
function Bi(e) {
  var n = !1, t = new Promise(function(r, o) {
    e.then(function(i) {
      return n ? o(Bw) : r(i);
    }), e.catch(o);
  });
  return t.cancel = function() {
    return n = !0;
  }, t;
}
var Vw = ["monaco"], jw = Fw.create({
  config: Iw,
  isInitialized: !1,
  resolve: null,
  reject: null,
  monaco: null
}), Tg = gw(jw, 2), Lr = Tg[0], li = Tg[1];
function Uw(e) {
  var n = Dw.config(e), t = n.monaco, r = dw(n, Vw);
  li(function(o) {
    return {
      config: Ag(o.config, r),
      monaco: t
    };
  });
}
function Gw() {
  var e = Lr(function(n) {
    var t = n.monaco, r = n.isInitialized, o = n.resolve;
    return {
      monaco: t,
      isInitialized: r,
      resolve: o
    };
  });
  if (!e.isInitialized) {
    if (li({
      isInitialized: !0
    }), e.monaco)
      return e.resolve(e.monaco), Bi(Vi);
    if (window.monaco && window.monaco.editor)
      return Fg(window.monaco), e.resolve(window.monaco), Bi(Vi);
    zw(Hw, Kw)(qw);
  }
  return Bi(Vi);
}
function Hw(e) {
  return document.body.appendChild(e);
}
function Ww(e) {
  var n = document.createElement("script");
  return e && (n.src = e), n;
}
function Kw(e) {
  var n = Lr(function(r) {
    var o = r.config, i = r.reject;
    return {
      config: o,
      reject: i
    };
  }), t = Ww("".concat(n.config.paths.vs, "/loader.js"));
  return t.onload = function() {
    return e();
  }, t.onerror = n.reject, t;
}
function qw() {
  var e = Lr(function(t) {
    var r = t.config, o = t.resolve, i = t.reject;
    return {
      config: r,
      resolve: o,
      reject: i
    };
  }), n = window.require;
  n.config(e.config), n(["vs/editor/editor.main"], function(t) {
    var r = t.m || t;
    Fg(r), e.resolve(r);
  }, function(t) {
    e.reject(t);
  });
}
function Fg(e) {
  Lr().monaco || li({
    monaco: e
  });
}
function Zw() {
  return Lr(function(e) {
    var n = e.monaco;
    return n;
  });
}
var Vi = new Promise(function(e, n) {
  return li({
    resolve: e,
    reject: n
  });
}), Ig = {
  config: Uw,
  init: Gw,
  __getMonacoInstance: Zw
}, Jw = { wrapper: { display: "flex", position: "relative", textAlign: "initial" }, fullWidth: { width: "100%" }, hide: { display: "none" } }, ji = Jw, Yw = { container: { display: "flex", height: "100%", width: "100%", justifyContent: "center", alignItems: "center" } }, Xw = Yw;
function Qw({ children: e }) {
  return ye.createElement("div", { style: Xw.container }, e);
}
var eS = Qw, tS = eS;
function nS({ width: e, height: n, isEditorReady: t, loading: r, _ref: o, className: i, wrapperProps: s }) {
  return ye.createElement("section", { style: { ...ji.wrapper, width: e, height: n }, ...s }, !t && ye.createElement(tS, null, r), ye.createElement("div", { ref: o, style: { ...ji.fullWidth, ...!t && ji.hide }, className: i }));
}
var rS = nS, Og = Is(rS);
function oS(e) {
  Se(e, []);
}
var Mg = oS;
function iS(e, n, t = !0) {
  let r = Ce(!0);
  Se(r.current || !t ? () => {
    r.current = !1;
  } : e, n);
}
var Be = iS;
function pr() {
}
function En(e, n, t, r) {
  return sS(e, r) || aS(e, n, t, r);
}
function sS(e, n) {
  return e.editor.getModel($g(e, n));
}
function aS(e, n, t, r) {
  return e.editor.createModel(n, t, r ? $g(e, r) : void 0);
}
function $g(e, n) {
  return e.Uri.parse(n);
}
function lS({ original: e, modified: n, language: t, originalLanguage: r, modifiedLanguage: o, originalModelPath: i, modifiedModelPath: s, keepCurrentOriginalModel: a = !1, keepCurrentModifiedModel: l = !1, theme: u = "light", loading: c = "Loading...", options: d = {}, height: f = "100%", width: p = "100%", className: g, wrapperProps: h = {}, beforeMount: m = pr, onMount: v = pr }) {
  let [y, b] = Qe(!1), [x, w] = Qe(!0), S = Ce(null), k = Ce(null), N = Ce(null), C = Ce(v), R = Ce(m), O = Ce(!1);
  Mg(() => {
    let M = Ig.init();
    return M.then((G) => (k.current = G) && w(!1)).catch((G) => (G == null ? void 0 : G.type) !== "cancelation" && console.error("Monaco initialization: error:", G)), () => S.current ? L() : M.cancel();
  }), Be(() => {
    if (S.current && k.current) {
      let M = S.current.getOriginalEditor(), G = En(k.current, e || "", r || t || "text", i || "");
      G !== M.getModel() && M.setModel(G);
    }
  }, [i], y), Be(() => {
    if (S.current && k.current) {
      let M = S.current.getModifiedEditor(), G = En(k.current, n || "", o || t || "text", s || "");
      G !== M.getModel() && M.setModel(G);
    }
  }, [s], y), Be(() => {
    let M = S.current.getModifiedEditor();
    M.getOption(k.current.editor.EditorOption.readOnly) ? M.setValue(n || "") : n !== M.getValue() && (M.executeEdits("", [{ range: M.getModel().getFullModelRange(), text: n || "", forceMoveMarkers: !0 }]), M.pushUndoStop());
  }, [n], y), Be(() => {
    var M, G;
    (G = (M = S.current) == null ? void 0 : M.getModel()) == null || G.original.setValue(e || "");
  }, [e], y), Be(() => {
    let { original: M, modified: G } = S.current.getModel();
    k.current.editor.setModelLanguage(M, r || t || "text"), k.current.editor.setModelLanguage(G, o || t || "text");
  }, [t, r, o], y), Be(() => {
    var M;
    (M = k.current) == null || M.editor.setTheme(u);
  }, [u], y), Be(() => {
    var M;
    (M = S.current) == null || M.updateOptions(d);
  }, [d], y);
  let F = St(() => {
    var H;
    if (!k.current) return;
    R.current(k.current);
    let M = En(k.current, e || "", r || t || "text", i || ""), G = En(k.current, n || "", o || t || "text", s || "");
    (H = S.current) == null || H.setModel({ original: M, modified: G });
  }, [t, n, o, e, r, i, s]), U = St(() => {
    var M;
    !O.current && N.current && (S.current = k.current.editor.createDiffEditor(N.current, { automaticLayout: !0, ...d }), F(), (M = k.current) == null || M.editor.setTheme(u), b(!0), O.current = !0);
  }, [d, u, F]);
  Se(() => {
    y && C.current(S.current, k.current);
  }, [y]), Se(() => {
    !x && !y && U();
  }, [x, y, U]);
  function L() {
    var G, H, J, ee;
    let M = (G = S.current) == null ? void 0 : G.getModel();
    a || ((H = M == null ? void 0 : M.original) == null || H.dispose()), l || ((J = M == null ? void 0 : M.modified) == null || J.dispose()), (ee = S.current) == null || ee.dispose();
  }
  return ye.createElement(Og, { width: p, height: f, isEditorReady: y, loading: c, _ref: N, className: g, wrapperProps: h });
}
var uS = lS;
Is(uS);
function cS(e) {
  let n = Ce();
  return Se(() => {
    n.current = e;
  }, [e]), n.current;
}
var dS = cS, no = /* @__PURE__ */ new Map();
function fS({ defaultValue: e, defaultLanguage: n, defaultPath: t, value: r, language: o, path: i, theme: s = "light", line: a, loading: l = "Loading...", options: u = {}, overrideServices: c = {}, saveViewState: d = !0, keepCurrentModel: f = !1, width: p = "100%", height: g = "100%", className: h, wrapperProps: m = {}, beforeMount: v = pr, onMount: y = pr, onChange: b, onValidate: x = pr }) {
  let [w, S] = Qe(!1), [k, N] = Qe(!0), C = Ce(null), R = Ce(null), O = Ce(null), F = Ce(y), U = Ce(v), L = Ce(), M = Ce(r), G = dS(i), H = Ce(!1), J = Ce(!1);
  Mg(() => {
    let W = Ig.init();
    return W.then((Y) => (C.current = Y) && N(!1)).catch((Y) => (Y == null ? void 0 : Y.type) !== "cancelation" && console.error("Monaco initialization: error:", Y)), () => R.current ? oe() : W.cancel();
  }), Be(() => {
    var Y, ue, ge, me;
    let W = En(C.current, e || r || "", n || o || "", i || t || "");
    W !== ((Y = R.current) == null ? void 0 : Y.getModel()) && (d && no.set(G, (ue = R.current) == null ? void 0 : ue.saveViewState()), (ge = R.current) == null || ge.setModel(W), d && ((me = R.current) == null || me.restoreViewState(no.get(i))));
  }, [i], w), Be(() => {
    var W;
    (W = R.current) == null || W.updateOptions(u);
  }, [u], w), Be(() => {
    !R.current || r === void 0 || (R.current.getOption(C.current.editor.EditorOption.readOnly) ? R.current.setValue(r) : r !== R.current.getValue() && (J.current = !0, R.current.executeEdits("", [{ range: R.current.getModel().getFullModelRange(), text: r, forceMoveMarkers: !0 }]), R.current.pushUndoStop(), J.current = !1));
  }, [r], w), Be(() => {
    var Y, ue;
    let W = (Y = R.current) == null ? void 0 : Y.getModel();
    W && o && ((ue = C.current) == null || ue.editor.setModelLanguage(W, o));
  }, [o], w), Be(() => {
    var W;
    a !== void 0 && ((W = R.current) == null || W.revealLine(a));
  }, [a], w), Be(() => {
    var W;
    (W = C.current) == null || W.editor.setTheme(s);
  }, [s], w);
  let ee = St(() => {
    var W;
    if (!(!O.current || !C.current) && !H.current) {
      U.current(C.current);
      let Y = i || t, ue = En(C.current, r || e || "", n || o || "", Y || "");
      R.current = (W = C.current) == null ? void 0 : W.editor.create(O.current, { model: ue, automaticLayout: !0, ...u }, c), d && R.current.restoreViewState(no.get(Y)), C.current.editor.setTheme(s), a !== void 0 && R.current.revealLine(a), S(!0), H.current = !0;
    }
  }, [e, n, t, r, o, i, u, c, d, s, a]);
  Se(() => {
    w && F.current(R.current, C.current);
  }, [w]), Se(() => {
    !k && !w && ee();
  }, [k, w, ee]), M.current = r, Se(() => {
    var W, Y;
    w && b && ((W = L.current) == null || W.dispose(), L.current = (Y = R.current) == null ? void 0 : Y.onDidChangeModelContent((ue) => {
      J.current || b(R.current.getValue(), ue);
    }));
  }, [w, b]), Se(() => {
    if (w) {
      let W = C.current.editor.onDidChangeMarkers((Y) => {
        var ge;
        let ue = (ge = R.current.getModel()) == null ? void 0 : ge.uri;
        if (ue && Y.find((me) => me.path === ue.path)) {
          let me = C.current.editor.getModelMarkers({ resource: ue });
          x == null || x(me);
        }
      });
      return () => {
        W == null || W.dispose();
      };
    }
    return () => {
    };
  }, [w, x]);
  function oe() {
    var W, Y;
    (W = L.current) == null || W.dispose(), f ? d && no.set(i, R.current.saveViewState()) : (Y = R.current.getModel()) == null || Y.dispose(), R.current.dispose();
  }
  return ye.createElement(Og, { width: p, height: g, isEditorReady: w, loading: l, _ref: O, className: h, wrapperProps: m });
}
var gS = fS, pS = Is(gS), hS = pS;
const mS = {
  paragraph: "mb-2 last:mb-0",
  heading: {
    h1: "text-3xl font-bold mb-4 mt-6 first:mt-0",
    h2: "text-2xl font-bold mb-3 mt-5 first:mt-0",
    h3: "text-xl font-bold mb-2 mt-4 first:mt-0"
  },
  list: {
    ul: "list-disc list-inside mb-2 ml-4",
    ol: "list-decimal list-inside mb-2 ml-4",
    listitem: "mb-1"
  },
  link: "text-primary hover:underline cursor-pointer",
  text: {
    bold: "font-bold",
    italic: "italic",
    underline: "underline",
    strikethrough: "line-through",
    code: "bg-muted px-1.5 py-0.5 rounded font-mono text-sm"
  },
  code: "bg-muted p-4 rounded-lg font-mono text-sm block my-4",
  quote: "border-l-4 border-primary pl-4 italic my-4"
};
function yS({
  mode: e,
  onModeChange: n,
  onAIClick: t,
  showAI: r = !0
}) {
  const [o] = ft(), i = () => {
    o.dispatchCommand({ type: "FORMAT_TEXT_COMMAND", format: "bold" }, void 0);
  }, s = () => {
    o.dispatchCommand({ type: "FORMAT_TEXT_COMMAND", format: "italic" }, void 0);
  }, a = (c) => {
    o.dispatchCommand({ type: "FORMAT_ELEMENT_COMMAND", format: `h${c}` }, void 0);
  };
  return /* @__PURE__ */ D("div", { className: "flex items-center justify-between border-b border-border bg-muted/30 px-2 py-1.5", children: [
    /* @__PURE__ */ D("div", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ D("div", { className: "flex items-center gap-0.5 mr-2 border-r border-border pr-2", children: [
        /* @__PURE__ */ _(
          ce,
          {
            variant: e === "rich" ? "default" : "ghost",
            size: "sm",
            onClick: () => n("rich"),
            title: "Rich Text Mode",
            className: "h-8 px-2",
            children: /* @__PURE__ */ _(tc, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ _(
          ce,
          {
            variant: e === "code" ? "default" : "ghost",
            size: "sm",
            onClick: () => n("code"),
            title: "Code Mode",
            className: "h-8 px-2",
            children: /* @__PURE__ */ _(Xu, { className: "h-4 w-4" })
          }
        )
      ] }),
      e === "rich" && /* @__PURE__ */ D(Xe, { children: [
        /* @__PURE__ */ _(
          ce,
          {
            variant: "ghost",
            size: "sm",
            onClick: i,
            title: "Bold (⌘B)",
            className: "h-8 px-2",
            children: /* @__PURE__ */ _(Kg, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ _(
          ce,
          {
            variant: "ghost",
            size: "sm",
            onClick: s,
            title: "Italic (⌘I)",
            className: "h-8 px-2",
            children: /* @__PURE__ */ _(tp, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ _("div", { className: "w-px h-6 bg-border mx-1" }),
        /* @__PURE__ */ _(
          ce,
          {
            variant: "ghost",
            size: "sm",
            onClick: () => a(1),
            title: "Heading 1",
            className: "h-8 px-2",
            children: /* @__PURE__ */ _(Xg, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ _(
          ce,
          {
            variant: "ghost",
            size: "sm",
            onClick: () => a(2),
            title: "Heading 2",
            className: "h-8 px-2",
            children: /* @__PURE__ */ _(Qg, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ _("div", { className: "w-px h-6 bg-border mx-1" }),
        /* @__PURE__ */ _(
          ce,
          {
            variant: "ghost",
            size: "sm",
            onClick: () => {
              o.dispatchCommand({ type: "INSERT_UNORDERED_LIST_COMMAND" }, void 0);
            },
            title: "Bullet List",
            className: "h-8 px-2",
            children: /* @__PURE__ */ _(np, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ _(
          ce,
          {
            variant: "ghost",
            size: "sm",
            onClick: () => {
              o.dispatchCommand({ type: "FORMAT_ELEMENT_COMMAND", format: "quote" }, void 0);
            },
            title: "Quote",
            className: "h-8 px-2",
            children: /* @__PURE__ */ _(op, { className: "h-4 w-4" })
          }
        )
      ] })
    ] }),
    r && t && /* @__PURE__ */ D(
      ce,
      {
        variant: "gradient-purple",
        size: "sm",
        onClick: t,
        className: "h-8 px-3 gap-1.5",
        title: "Ask AI for help",
        children: [
          /* @__PURE__ */ _(ec, { className: "h-4 w-4" }),
          /* @__PURE__ */ _("span", { className: "hidden sm:inline", children: "Ask AI" })
        ]
      }
    )
  ] });
}
function bS({
  value: e,
  onChange: n,
  isInitialized: t,
  setIsInitialized: r
}) {
  const [o] = ft();
  return E.useEffect(() => {
    !t && e && (o.update(() => {
      ew(e, fn);
    }), r(!0));
  }, [o, e, t, r]), E.useEffect(() => {
    if (n)
      return o.registerUpdateListener(({ editorState: i }) => {
        i.read(() => {
          const s = tw(fn);
          n(s);
        });
      });
  }, [o, n]), null;
}
const vS = E.forwardRef(
  ({
    value: e = "",
    onChange: n,
    initialMode: t = "rich",
    showAI: r = !0,
    onAIClick: o,
    placeholder: i = "Start typing...",
    minHeight: s = 200,
    maxHeight: a,
    disabled: l = !1,
    className: u,
    monacoTheme: c = "vs-dark"
  }, d) => {
    const [f, p] = E.useState(t), [g, h] = E.useState(e), [m, v] = E.useState(!1), y = E.useRef(null);
    E.useEffect(() => {
      e !== g && h(e);
    }, [e]);
    const b = E.useCallback((C) => {
      h(C), n == null || n(C);
    }, [n]), x = E.useCallback((C) => {
      p(C);
    }, []), w = (C) => {
      y.current = C;
    }, S = E.useCallback(() => {
      var R, O;
      if (!o) return;
      let C = "";
      if (f === "rich")
        C = ((R = window.getSelection()) == null ? void 0 : R.toString()) || "";
      else {
        const F = y.current;
        if (F) {
          const U = F.getSelection();
          U && (C = ((O = F.getModel()) == null ? void 0 : O.getValueInRange(U)) || "");
        }
      }
      o(C, g);
    }, [f, g, o]), k = {
      namespace: "HybridEditor",
      theme: mS,
      onError: (C) => {
        console.error("Lexical error:", C);
      },
      nodes: [
        oi,
        ri,
        Pr,
        $r,
        ii,
        Ea,
        hn
      ],
      editable: !l
    }, N = a ? { minHeight: s, maxHeight: a, overflowY: "auto" } : { minHeight: s };
    return /* @__PURE__ */ _(
      "div",
      {
        ref: d,
        className: P(
          "rounded-lg border border-border bg-background overflow-hidden",
          l && "opacity-60 pointer-events-none",
          u
        ),
        children: f === "rich" ? /* @__PURE__ */ D(G0, { initialConfig: k, children: [
          /* @__PURE__ */ _(
            yS,
            {
              mode: f,
              onModeChange: x,
              onAIClick: S,
              showAI: r
            }
          ),
          /* @__PURE__ */ D("div", { className: "relative", style: N, children: [
            /* @__PURE__ */ _(
              Vx,
              {
                contentEditable: /* @__PURE__ */ _(
                  Hx,
                  {
                    className: "outline-none px-4 py-3 prose prose-sm max-w-none dark:prose-invert",
                    style: { minHeight: s }
                  }
                ),
                placeholder: /* @__PURE__ */ _("div", { className: "absolute top-3 left-4 text-muted-foreground pointer-events-none", children: i }),
                ErrorBoundary: e_
              }
            ),
            /* @__PURE__ */ _(Jx, {}),
            /* @__PURE__ */ _(sw, { transformers: fn }),
            /* @__PURE__ */ _(
              bS,
              {
                value: g,
                onChange: b,
                isInitialized: m,
                setIsInitialized: v
              }
            )
          ] })
        ] }) : /* @__PURE__ */ D(Xe, { children: [
          /* @__PURE__ */ D("div", { className: "flex items-center justify-between border-b border-border bg-muted/30 px-2 py-1.5", children: [
            /* @__PURE__ */ D("div", { className: "flex items-center gap-0.5", children: [
              /* @__PURE__ */ _(
                ce,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: () => x("rich"),
                  title: "Rich Text Mode",
                  className: "h-8 px-2",
                  children: /* @__PURE__ */ _(tc, { className: "h-4 w-4" })
                }
              ),
              /* @__PURE__ */ _(
                ce,
                {
                  variant: "default",
                  size: "sm",
                  onClick: () => x("code"),
                  title: "Code Mode",
                  className: "h-8 px-2",
                  children: /* @__PURE__ */ _(Xu, { className: "h-4 w-4" })
                }
              )
            ] }),
            r && o && /* @__PURE__ */ D(
              ce,
              {
                variant: "gradient-purple",
                size: "sm",
                onClick: S,
                className: "h-8 px-3 gap-1.5",
                title: "Ask AI for help",
                children: [
                  /* @__PURE__ */ _(ec, { className: "h-4 w-4" }),
                  /* @__PURE__ */ _("span", { className: "hidden sm:inline", children: "Ask AI" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ _(
            hS,
            {
              height: a || s,
              defaultLanguage: "markdown",
              value: g,
              onChange: (C) => b(C || ""),
              onMount: w,
              theme: c,
              options: {
                minimap: { enabled: !1 },
                lineNumbers: "on",
                wordWrap: "on",
                fontSize: 14,
                padding: { top: 12, bottom: 12 },
                scrollBeyondLastLine: !1,
                automaticLayout: !0,
                readOnly: l
              }
            }
          )
        ] })
      }
    );
  }
);
vS.displayName = "HybridEditor";
export {
  Hm as Alert,
  Km as AlertDescription,
  Wm as AlertTitle,
  Vm as Avatar,
  cc as Badge,
  mc as Breadcrumb,
  ce as Button,
  uc as Card,
  Zp as CardContent,
  qp as CardDescription,
  Jp as CardFooter,
  Wp as CardHeader,
  Kp as CardTitle,
  Mh as Checkbox,
  $h as CheckboxGroup,
  Qy as CodeBlock,
  GS as ConfirmDialog,
  jS as ConnectionStatus,
  PS as DataTable,
  Rh as Dialog,
  Fh as DialogClose,
  vc as DialogContent,
  Sc as DialogDescription,
  _c as DialogFooter,
  xc as DialogHeader,
  bc as DialogOverlay,
  Th as DialogPortal,
  wc as DialogTitle,
  Ah as DialogTrigger,
  NS as Dropdown,
  AS as DropdownContent,
  FS as DropdownItem,
  TS as DropdownLabel,
  IS as DropdownSeparator,
  OS as DropdownSubmenu,
  $S as DropdownSubmenuContent,
  MS as DropdownSubmenuTrigger,
  RS as DropdownTrigger,
  zS as EmptyState,
  BS as ErrorState,
  vS as HybridEditor,
  lc as Input,
  Qp as Loading,
  zp as LoadingButton,
  VS as MetricCard,
  CS as ModalFooter,
  kh as PageHeader,
  Fm as RadioGroup,
  Im as RadioGroupItem,
  Gp as Select,
  th as Skeleton,
  dc as Spinner,
  jm as StatusIndicator,
  Dh as Switch,
  zh as SwitchGroup,
  oh as Tabs,
  ah as TabsContent,
  ih as TabsList,
  sh as TabsTrigger,
  Vh as Textarea,
  Jc as ToastContainer,
  Zc as ToastItem,
  ES as ToastProvider,
  US as Tooltip,
  kS as ViewModeToggle,
  Yp as badgeVariants,
  _h as breadcrumbItemVariants,
  wh as breadcrumbSeparatorVariants,
  xh as breadcrumbVariants,
  Dp as buttonVariants,
  Hp as cardVariants,
  Ih as checkboxVariants,
  P as cn,
  DS as createSelectionColumn,
  LS as createSortableHeader,
  Nh as dialogContentVariants,
  Eh as dialogOverlayVariants,
  Pm as dropdownContentVariants,
  Yc as dropdownItemVariants,
  Bp as inputVariants,
  Sh as pageHeaderVariants,
  jp as selectVariants,
  eh as skeletonVariants,
  Xp as spinnerVariants,
  Ba as statusIndicatorVariants,
  Lh as switchThumbVariants,
  Ph as switchVariants,
  nh as tabsListVariants,
  rh as tabsTriggerVariants,
  Bh as textareaVariants,
  $m as useToast
};
//# sourceMappingURL=index.es.js.map
