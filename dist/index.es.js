var bg = Object.defineProperty;
var vg = (e, n, t) => n in e ? bg(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var T = (e, n, t) => vg(e, typeof n != "symbol" ? n + "" : n, t);
import { jsx as x, jsxs as L, Fragment as tt } from "react/jsx-runtime";
import * as C from "react";
import Oe, { forwardRef as No, createElement as $n, useCallback as Mn, useMemo as Bn, createContext as Iu, useContext as xg, useLayoutEffect as Sr, useEffect as ze, useState as Qt, useRef as _g, Suspense as wg, Component as Sg } from "react";
import { createPortal as Ou, flushSync as Cg } from "react-dom";
function $u(e) {
  var n, t, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (n = 0; n < o; n++) e[n] && (t = $u(e[n])) && (r && (r += " "), r += t);
  } else for (t in e) e[t] && (r && (r += " "), r += t);
  return r;
}
function Ro() {
  for (var e, n, t = 0, r = "", o = arguments.length; t < o; t++) (e = arguments[t]) && (n = $u(e)) && (r && (r += " "), r += n);
  return r;
}
const ba = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, va = Ro, Q = (e, n) => (t) => {
  var r;
  if ((n == null ? void 0 : n.variants) == null) return va(e, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
  const { variants: o, defaultVariants: i } = n, s = Object.keys(o).map((u) => {
    const c = t == null ? void 0 : t[u], d = i == null ? void 0 : i[u];
    if (c === null) return null;
    const f = ba(c) || ba(d);
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
  return va(e, s, l, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kg = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Mu = (...e) => e.filter((n, t, r) => !!n && n.trim() !== "" && r.indexOf(n) === t).join(" ").trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Eg = {
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
const Ng = No(
  ({
    color: e = "currentColor",
    size: n = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: i,
    iconNode: s,
    ...a
  }, l) => $n(
    "svg",
    {
      ref: l,
      ...Eg,
      width: n,
      height: n,
      stroke: e,
      strokeWidth: r ? Number(t) * 24 / Number(n) : t,
      className: Mu("lucide", o),
      ...a
    },
    [
      ...s.map(([u, c]) => $n(u, c)),
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
const ue = (e, n) => {
  const t = No(
    ({ className: r, ...o }, i) => $n(Ng, {
      ref: i,
      iconNode: n,
      className: Mu(`lucide-${kg(e)}`, r),
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
const Rg = ue("ArrowUpDown", [
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
const Tg = ue("Bold", [
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
const Ii = ue("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ss = ue("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pu = ue("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ag = ue("CircleAlert", [
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
const Fg = ue("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ig = ue("CircleX", [
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
const Og = ue("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lu = ue("CodeXml", [
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
const xa = ue("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $g = ue("Heading1", [
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
const Mg = ue("Heading2", [
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
const Pg = ue("House", [
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
const Oi = ue("Info", [
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
const Lg = ue("Italic", [
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
const Dg = ue("List", [
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
const Du = ue("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zg = ue("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bg = ue("Quote", [
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
const _a = ue("RefreshCw", [
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
const zu = ue("Sparkles", [
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
const pr = ue("TriangleAlert", [
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
const Bu = ue("Type", [
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
const Vg = ue("Wifi", [
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
const Vu = ue("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), Cs = "-", Ug = (e) => {
  const n = Gg(e), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (s) => {
      const a = s.split(Cs);
      return a[0] === "" && a.length !== 1 && a.shift(), Uu(a, n) || jg(s);
    },
    getConflictingClassGroupIds: (s, a) => {
      const l = t[s] || [];
      return a && r[s] ? [...l, ...r[s]] : l;
    }
  };
}, Uu = (e, n) => {
  var s;
  if (e.length === 0)
    return n.classGroupId;
  const t = e[0], r = n.nextPart.get(t), o = r ? Uu(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (n.validators.length === 0)
    return;
  const i = e.join(Cs);
  return (s = n.validators.find(({
    validator: a
  }) => a(i))) == null ? void 0 : s.classGroupId;
}, wa = /^\[(.+)\]$/, jg = (e) => {
  if (wa.test(e)) {
    const n = wa.exec(e)[1], t = n == null ? void 0 : n.substring(0, n.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}, Gg = (e) => {
  const {
    theme: n,
    prefix: t
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Kg(Object.entries(e.classGroups), t).forEach(([i, s]) => {
    $i(s, r, i, n);
  }), r;
}, $i = (e, n, t, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const i = o === "" ? n : Sa(n, o);
      i.classGroupId = t;
      return;
    }
    if (typeof o == "function") {
      if (Hg(o)) {
        $i(o(r), n, t, r);
        return;
      }
      n.validators.push({
        validator: o,
        classGroupId: t
      });
      return;
    }
    Object.entries(o).forEach(([i, s]) => {
      $i(s, Sa(n, i), t, r);
    });
  });
}, Sa = (e, n) => {
  let t = e;
  return n.split(Cs).forEach((r) => {
    t.nextPart.has(r) || t.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(r);
  }), t;
}, Hg = (e) => e.isThemeGetter, Kg = (e, n) => n ? e.map(([t, r]) => {
  const o = r.map((i) => typeof i == "string" ? n + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([s, a]) => [n + s, a])) : i);
  return [t, o];
}) : e, Wg = (e) => {
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
}, ju = "!", qg = (e) => {
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
    const f = l.length === 0 ? a : a.substring(c), p = f.startsWith(ju), g = p ? f.substring(1) : f, h = d && d > c ? d - c : void 0;
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
}, Zg = (e) => {
  if (e.length <= 1)
    return e;
  const n = [];
  let t = [];
  return e.forEach((r) => {
    r[0] === "[" ? (n.push(...t.sort(), r), t = []) : t.push(r);
  }), n.push(...t.sort()), n;
}, Jg = (e) => ({
  cache: Wg(e.cacheSize),
  parseClassName: qg(e),
  ...Ug(e)
}), Yg = /\s+/, Xg = (e, n) => {
  const {
    parseClassName: t,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = n, i = [], s = e.trim().split(Yg);
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
    const m = Zg(c).join(":"), v = d ? m + ju : m, y = v + h;
    if (i.includes(y))
      continue;
    i.push(y);
    const b = o(h, g);
    for (let _ = 0; _ < b.length; ++_) {
      const w = b[_];
      i.push(v + w);
    }
    a = u + (a.length > 0 ? " " + a : a);
  }
  return a;
};
function Qg() {
  let e = 0, n, t, r = "";
  for (; e < arguments.length; )
    (n = arguments[e++]) && (t = Gu(n)) && (r && (r += " "), r += t);
  return r;
}
const Gu = (e) => {
  if (typeof e == "string")
    return e;
  let n, t = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (n = Gu(e[r])) && (t && (t += " "), t += n);
  return t;
};
function ep(e, ...n) {
  let t, r, o, i = s;
  function s(l) {
    const u = n.reduce((c, d) => d(c), e());
    return t = Jg(u), r = t.cache.get, o = t.cache.set, i = a, a(l);
  }
  function a(l) {
    const u = r(l);
    if (u)
      return u;
    const c = Xg(l, t);
    return o(l, c), c;
  }
  return function() {
    return i(Qg.apply(null, arguments));
  };
}
const de = (e) => {
  const n = (t) => t[e] || [];
  return n.isThemeGetter = !0, n;
}, Hu = /^\[(?:([a-z-]+):)?(.+)\]$/i, tp = /^\d+\/\d+$/, np = /* @__PURE__ */ new Set(["px", "full", "screen"]), rp = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, op = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ip = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, sp = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ap = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ht = (e) => Rn(e) || np.has(e) || tp.test(e), Tt = (e) => Vn(e, "length", hp), Rn = (e) => !!e && !Number.isNaN(Number(e)), ni = (e) => Vn(e, "number", Rn), Qn = (e) => !!e && Number.isInteger(Number(e)), lp = (e) => e.endsWith("%") && Rn(e.slice(0, -1)), Y = (e) => Hu.test(e), At = (e) => rp.test(e), up = /* @__PURE__ */ new Set(["length", "size", "percentage"]), cp = (e) => Vn(e, up, Ku), dp = (e) => Vn(e, "position", Ku), fp = /* @__PURE__ */ new Set(["image", "url"]), gp = (e) => Vn(e, fp, yp), pp = (e) => Vn(e, "", mp), er = () => !0, Vn = (e, n, t) => {
  const r = Hu.exec(e);
  return r ? r[1] ? typeof n == "string" ? r[1] === n : n.has(r[1]) : t(r[2]) : !1;
}, hp = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  op.test(e) && !ip.test(e)
), Ku = () => !1, mp = (e) => sp.test(e), yp = (e) => ap.test(e), bp = () => {
  const e = de("colors"), n = de("spacing"), t = de("blur"), r = de("brightness"), o = de("borderColor"), i = de("borderRadius"), s = de("borderSpacing"), a = de("borderWidth"), l = de("contrast"), u = de("grayscale"), c = de("hueRotate"), d = de("invert"), f = de("gap"), p = de("gradientColorStops"), g = de("gradientColorStopPositions"), h = de("inset"), m = de("margin"), v = de("opacity"), y = de("padding"), b = de("saturate"), _ = de("scale"), w = de("sepia"), S = de("skew"), k = de("space"), N = de("translate"), E = () => ["auto", "contain", "none"], R = () => ["auto", "hidden", "clip", "visible", "scroll"], O = () => ["auto", Y, n], I = () => [Y, n], B = () => ["", ht, Tt], D = () => ["auto", Rn, Y], U = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], q = () => ["solid", "dashed", "dotted", "double", "none"], H = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], J = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], ne = () => ["", "0", Y], se = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], ce = () => [Rn, Y];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [er],
      spacing: [ht, Tt],
      blur: ["none", "", At, Y],
      brightness: ce(),
      borderColor: [e],
      borderRadius: ["none", "", "full", At, Y],
      borderSpacing: I(),
      borderWidth: B(),
      contrast: ce(),
      grayscale: ne(),
      hueRotate: ce(),
      invert: ne(),
      gap: I(),
      gradientColorStops: [e],
      gradientColorStopPositions: [lp, Tt],
      inset: O(),
      margin: O(),
      opacity: ce(),
      padding: I(),
      saturate: ce(),
      scale: ce(),
      sepia: ne(),
      skew: ce(),
      space: I(),
      translate: I()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", Y]
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
        "break-after": se()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": se()
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
        object: [...U(), Y]
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
        overscroll: E()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": E()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": E()
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
        z: ["auto", Qn, Y]
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
        flex: ["1", "auto", "initial", "none", Y]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ne()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ne()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Qn, Y]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [er]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Qn, Y]
        }, Y]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": D()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": D()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [er]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Qn, Y]
        }, Y]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": D()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": D()
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
        "auto-cols": ["auto", "min", "max", "fr", Y]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", Y]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Y, n]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [Y, n, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [Y, n, "none", "full", "min", "max", "fit", "prose", {
          screen: [At]
        }, At]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [Y, n, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [Y, n, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [Y, n, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [Y, n, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", At, Tt]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ni]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [er]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Y]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Rn, ni]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", ht, Y]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Y]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", Y]
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
        decoration: [...q(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", ht, Tt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", ht, Y]
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
        indent: I()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Y]
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
        content: ["none", Y]
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
        bg: [...U(), dp]
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
        bg: ["auto", "cover", "contain", cp]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, gp]
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
        border: [...q(), "hidden"]
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
        divide: q()
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
        outline: ["", ...q()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ht, Y]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [ht, Tt]
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
        ring: B()
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
        "ring-offset": [ht, Tt]
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
        shadow: ["", "inner", "none", At, pp]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [er]
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
        "drop-shadow": ["", "none", At, Y]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Y]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: ce()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", Y]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: ce()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", Y]
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
        scale: [_]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [_]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [_]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Qn, Y]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Y]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Y]
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
        "scroll-m": I()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": I()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": I()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": I()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": I()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": I()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": I()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": I()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": I()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": I()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": I()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": I()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": I()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": I()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": I()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": I()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": I()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": I()
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
        "will-change": ["auto", "scroll", "contents", "transform", Y]
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
        stroke: [ht, Tt, ni]
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
}, vp = /* @__PURE__ */ ep(bp);
function P(...e) {
  return vp(Ro(e));
}
const xp = Q(
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
), le = C.forwardRef(
  ({ className: e, variant: n, size: t, isLoading: r, loadingText: o, children: i, disabled: s, ...a }, l) => /* @__PURE__ */ x(
    "button",
    {
      className: P(xp({ variant: n, size: t, className: e })),
      ref: l,
      disabled: s ?? r,
      "aria-busy": r,
      ...a,
      children: r ? /* @__PURE__ */ L(tt, { children: [
        /* @__PURE__ */ x(Du, { className: "mr-2 h-4 w-4 animate-spin", "aria-hidden": "true" }),
        /* @__PURE__ */ x("span", { children: o ?? i })
      ] }) : i
    }
  )
);
le.displayName = "Button";
const _p = C.forwardRef(
  ({ loading: e = !1, loadingText: n, children: t, ...r }, o) => {
    const i = {
      ...r,
      isLoading: e,
      ...n && { loadingText: n }
    };
    return /* @__PURE__ */ x(le, { ref: o, ...i, children: t });
  }
);
_p.displayName = "LoadingButton";
function iw({
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
  return /* @__PURE__ */ L(
    "div",
    {
      className: P(
        "flex items-center justify-between gap-3 border-t border-slate-200 bg-slate-50 px-6 py-4 dark:border-slate-800 dark:bg-slate-900/50",
        u
      ),
      children: [
        d && /* @__PURE__ */ x("div", { className: "flex-1", children: d }),
        /* @__PURE__ */ L(
          "div",
          {
            className: P("flex items-center gap-3", !d && "ml-auto", c),
            children: [
              !p && /* @__PURE__ */ x(le, { type: "button", onClick: e, variant: l, children: t }),
              /* @__PURE__ */ x(
                le,
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
function sw({
  value: e,
  onChange: n,
  options: t,
  className: r,
  size: o = "icon"
}) {
  return /* @__PURE__ */ x(
    "div",
    {
      className: P(
        "flex items-center gap-1 rounded-lg bg-slate-200 p-1 dark:bg-slate-700",
        r
      ),
      role: "group",
      "aria-label": "View mode toggle",
      children: t.map((i) => /* @__PURE__ */ x(
        le,
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
const wp = Q(
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
), Sp = Q(
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
), Wu = C.forwardRef(
  ({ className: e, variant: n, inputSize: t, label: r, error: o, helperText: i, id: s, type: a = "text", ...l }, u) => {
    const c = C.useId(), d = s ?? c, f = `${d}-error`, p = `${d}-helper`, g = !!o, h = g ? "error" : n;
    return /* @__PURE__ */ L("div", { className: "flex flex-col gap-1.5", children: [
      r && /* @__PURE__ */ x("label", { htmlFor: d, className: P(Sp({ variant: h })), children: r }),
      /* @__PURE__ */ x(
        "input",
        {
          type: a,
          id: d,
          className: P(wp({ variant: h, inputSize: t, className: e })),
          ref: u,
          "aria-invalid": g,
          "aria-describedby": g ? f : i ? p : void 0,
          ...l
        }
      ),
      g && /* @__PURE__ */ x("p", { id: f, className: "text-destructive text-sm", role: "alert", children: o }),
      !g && i && /* @__PURE__ */ x("p", { id: p, className: "text-muted-foreground text-sm", children: i })
    ] });
  }
);
Wu.displayName = "Input";
const Cp = Q(
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
), kp = Q(
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
), Ep = C.forwardRef(
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
    const f = C.useId(), p = l ?? f, g = `${p}-error`, h = `${p}-helper`, m = !!s, v = m ? "error" : n, y = () => u || (r ? /* @__PURE__ */ L(tt, { children: [
      i && /* @__PURE__ */ x("option", { value: "", disabled: !0, children: i }),
      r.map((b) => /* @__PURE__ */ x("option", { value: b.value, disabled: b.disabled, children: b.label }, b.value))
    ] }) : null);
    return /* @__PURE__ */ L("div", { className: "flex flex-col gap-1.5", children: [
      o && /* @__PURE__ */ x("label", { htmlFor: p, className: P(kp({ variant: v })), children: o }),
      /* @__PURE__ */ L("div", { className: "relative", children: [
        /* @__PURE__ */ x(
          "select",
          {
            id: p,
            className: P(
              Cp({ variant: v, selectSize: t, className: e }),
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
        /* @__PURE__ */ x(
          Ss,
          {
            className: "text-muted-foreground pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2",
            "aria-hidden": "true"
          }
        )
      ] }),
      m && /* @__PURE__ */ x("p", { id: g, className: "text-destructive text-sm", role: "alert", children: s }),
      !m && a && /* @__PURE__ */ x("p", { id: h, className: "text-muted-foreground text-sm", children: a })
    ] });
  }
);
Ep.displayName = "Select";
const Np = Q("rounded-lg border bg-card text-card-foreground", {
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
}), qu = C.forwardRef(
  ({ className: e, variant: n, ...t }, r) => /* @__PURE__ */ x("div", { ref: r, className: P(Np({ variant: n, className: e })), ...t })
);
qu.displayName = "Card";
const Rp = C.forwardRef(
  ({ className: e, ...n }, t) => /* @__PURE__ */ x("div", { ref: t, className: P("flex flex-col space-y-1.5 p-6", e), ...n })
);
Rp.displayName = "CardHeader";
const Tp = C.forwardRef(
  ({ className: e, as: n = "h3", ...t }, r) => /* @__PURE__ */ x(
    n,
    {
      ref: r,
      className: P("text-2xl leading-none font-semibold tracking-tight", e),
      ...t
    }
  )
);
Tp.displayName = "CardTitle";
const Ap = C.forwardRef(
  ({ className: e, ...n }, t) => /* @__PURE__ */ x("p", { ref: t, className: P("text-muted-foreground text-sm", e), ...n })
);
Ap.displayName = "CardDescription";
const Fp = C.forwardRef(
  ({ className: e, ...n }, t) => /* @__PURE__ */ x("div", { ref: t, className: P("p-6 pt-0", e), ...n })
);
Fp.displayName = "CardContent";
const Ip = C.forwardRef(
  ({ className: e, ...n }, t) => /* @__PURE__ */ x("div", { ref: t, className: P("flex items-center p-6 pt-0", e), ...n })
);
Ip.displayName = "CardFooter";
const Op = Q(
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
), Zu = C.forwardRef(
  ({ className: e, variant: n, ...t }, r) => /* @__PURE__ */ x("div", { ref: r, className: P(Op({ variant: n }), e), ...t })
);
Zu.displayName = "Badge";
const $p = Q("animate-spin text-muted-foreground", {
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
}), Ju = C.forwardRef(
  ({ className: e, size: n, label: t = "Loading...", ...r }, o) => /* @__PURE__ */ x(
    Du,
    {
      ref: o,
      className: P($p({ size: n, className: e })),
      "aria-label": t,
      role: "status",
      ...r
    }
  )
);
Ju.displayName = "Spinner";
const Mp = C.forwardRef(
  ({ className: e, size: n = "default", message: t, fullScreen: r = !1, ...o }, i) => /* @__PURE__ */ x(
    "div",
    {
      ref: i,
      className: P(r ? "fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm" : "flex items-center justify-center p-4", e),
      role: "status",
      "aria-busy": "true",
      ...o,
      children: /* @__PURE__ */ L("div", { className: "flex flex-col items-center gap-2", children: [
        /* @__PURE__ */ x(Ju, { size: n, label: t ?? "Loading..." }),
        t && /* @__PURE__ */ x("p", { className: "text-muted-foreground text-sm", children: t })
      ] })
    }
  )
);
Mp.displayName = "Loading";
const Pp = Q("animate-pulse rounded-md bg-muted", {
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
}), Lp = C.forwardRef(
  ({ className: e, variant: n, ...t }, r) => /* @__PURE__ */ x(
    "div",
    {
      ref: r,
      className: P(Pp({ variant: n, className: e })),
      "aria-hidden": "true",
      ...t
    }
  )
);
Lp.displayName = "Skeleton";
const Dp = Q(
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
), zp = Q(
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
), Yu = C.createContext(null);
function ks() {
  const e = C.useContext(Yu);
  if (!e)
    throw new Error("Tabs components must be used within a Tabs provider");
  return e;
}
const Bp = C.forwardRef(
  ({ className: e, defaultValue: n, value: t, onValueChange: r, variant: o = "default", children: i, ...s }, a) => {
    const [l, u] = C.useState(n), c = t ?? l, d = C.useCallback(
      (f) => {
        t === void 0 && u(f), r == null || r(f);
      },
      [t, r]
    );
    return /* @__PURE__ */ x(Yu.Provider, { value: { activeTab: c, setActiveTab: d, variant: o ?? "default" }, children: /* @__PURE__ */ x("div", { ref: a, className: P("w-full", e), ...s, children: i }) });
  }
);
Bp.displayName = "Tabs";
const Vp = C.forwardRef(({ className: e, ...n }, t) => {
  const { variant: r } = ks();
  return /* @__PURE__ */ x(
    "div",
    {
      ref: t,
      role: "tablist",
      className: P(Dp({ variant: r, className: e })),
      ...n
    }
  );
});
Vp.displayName = "TabsList";
const Up = C.forwardRef(
  ({ className: e, value: n, children: t, disabled: r, ...o }, i) => {
    const { activeTab: s, setActiveTab: a, variant: l } = ks(), u = s === n, c = `tabpanel-${n}`, d = `tab-${n}`;
    return /* @__PURE__ */ x(
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
        className: P(zp({ variant: l, className: e })),
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
Up.displayName = "TabsTrigger";
const jp = C.forwardRef(
  ({ className: e, value: n, forceMount: t = !1, children: r, ...o }, i) => {
    const { activeTab: s } = ks(), a = s === n, l = `tabpanel-${n}`, u = `tab-${n}`;
    return !a && !t ? null : /* @__PURE__ */ x(
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
jp.displayName = "TabsContent";
var Xu = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Ca = Oe.createContext && /* @__PURE__ */ Oe.createContext(Xu), Gp = ["attr", "size", "title"];
function Hp(e, n) {
  if (e == null) return {};
  var t = Kp(e, n), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (t[r] = e[r]);
  }
  return t;
}
function Kp(e, n) {
  if (e == null) return {};
  var t = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (n.indexOf(r) >= 0) continue;
      t[r] = e[r];
    }
  return t;
}
function no() {
  return no = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, no.apply(this, arguments);
}
function ka(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function ro(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? ka(Object(t), !0).forEach(function(r) {
      Wp(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ka(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function Wp(e, n, t) {
  return n = qp(n), n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
function qp(e) {
  var n = Zp(e, "string");
  return typeof n == "symbol" ? n : n + "";
}
function Zp(e, n) {
  if (typeof e != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(e, n);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function Qu(e) {
  return e && e.map((n, t) => /* @__PURE__ */ Oe.createElement(n.tag, ro({
    key: t
  }, n.attr), Qu(n.child)));
}
function Un(e) {
  return (n) => /* @__PURE__ */ Oe.createElement(Jp, no({
    attr: ro({}, e.attr)
  }, n), Qu(e.child));
}
function Jp(e) {
  var n = (t) => {
    var {
      attr: r,
      size: o,
      title: i
    } = e, s = Hp(e, Gp), a = o || t.size || "1em", l;
    return t.className && (l = t.className), e.className && (l = (l ? l + " " : "") + e.className), /* @__PURE__ */ Oe.createElement("svg", no({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, r, s, {
      className: l,
      style: ro(ro({
        color: e.color || t.color
      }, t.style), e.style),
      height: a,
      width: a,
      xmlns: "http://www.w3.org/2000/svg"
    }), i && /* @__PURE__ */ Oe.createElement("title", null, i), e.children);
  };
  return Ca !== void 0 ? /* @__PURE__ */ Oe.createElement(Ca.Consumer, null, (t) => n(t)) : n(Xu);
}
function Yp(e) {
  return Un({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" }, child: [] }] })(e);
}
function ec(e) {
  return Un({ attr: { viewBox: "0 0 320 512" }, child: [{ tag: "path", attr: { d: "M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" }, child: [] }] })(e);
}
function Xp(e) {
  return Un({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" }, child: [] }] })(e);
}
function Qp(e) {
  return Un({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" }, child: [] }] })(e);
}
function eh(e) {
  return Un({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z" }, child: [] }] })(e);
}
function th(e) {
  return Un({ attr: { viewBox: "0 0 352 512" }, child: [{ tag: "path", attr: { d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" }, child: [] }] })(e);
}
const nh = Q(
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
), rh = Q("inline-flex items-center gap-1.5 transition-all duration-200", {
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
}), Ea = Q(
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
), oh = Q(
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
), tc = C.forwardRef(
  ({
    items: e,
    separator: n = /* @__PURE__ */ x(ec, {}),
    maxItems: t,
    size: r,
    variant: o = "default",
    LinkComponent: i,
    mobileMaxItems: s = 2,
    className: a,
    ...l
  }, u) => {
    const [c, d] = C.useState(!1);
    C.useEffect(() => {
      const p = () => {
        d(window.innerWidth < 640);
      };
      return p(), window.addEventListener("resize", p), () => {
        window.removeEventListener("resize", p);
      };
    }, []);
    const f = C.useMemo(() => {
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
    return /* @__PURE__ */ x(
      "nav",
      {
        ref: u,
        "aria-label": "Breadcrumb",
        className: P(nh({ size: r }), a),
        ...l,
        children: /* @__PURE__ */ x("ol", { className: "flex list-none flex-wrap items-center gap-1.5", children: f.map((p, g) => {
          if (!p) return null;
          const h = g === f.length - 1, m = h && !p.href, v = p.label === "...";
          return /* @__PURE__ */ L(C.Fragment, { children: [
            /* @__PURE__ */ x(
              "li",
              {
                className: P(
                  rh({
                    variant: o,
                    size: r,
                    current: m
                  })
                ),
                children: v ? /* @__PURE__ */ x("span", { className: "px-1", children: p.label }) : p.href && !m ? i ? /* @__PURE__ */ L(
                  i,
                  {
                    to: p.href,
                    className: P(
                      Ea({ variant: o }),
                      "inline-flex items-center gap-1.5"
                    ),
                    children: [
                      p.icon && /* @__PURE__ */ x("span", { className: "inline-flex items-center", "aria-hidden": "true", children: p.icon }),
                      /* @__PURE__ */ x("span", { children: p.label })
                    ]
                  }
                ) : /* @__PURE__ */ L(
                  "a",
                  {
                    href: p.href,
                    onClick: p.onClick,
                    className: P(
                      Ea({ variant: o }),
                      "inline-flex items-center gap-1.5"
                    ),
                    children: [
                      p.icon && /* @__PURE__ */ x("span", { className: "inline-flex items-center", "aria-hidden": "true", children: p.icon }),
                      /* @__PURE__ */ x("span", { children: p.label })
                    ]
                  }
                ) : /* @__PURE__ */ L("span", { className: "inline-flex items-center gap-1.5", children: [
                  p.icon && /* @__PURE__ */ x("span", { className: "inline-flex items-center", "aria-hidden": "true", children: p.icon }),
                  /* @__PURE__ */ x("span", { "aria-current": m ? "page" : void 0, children: p.label })
                ] })
              }
            ),
            !h && /* @__PURE__ */ x("li", { className: P(oh({ size: r })), "aria-hidden": "true", children: n })
          ] }, `${p.label}-${String(g)}`);
        }) })
      }
    );
  }
);
tc.displayName = "Breadcrumb";
const ih = Q("w-full", {
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
}), sh = {
  default: "text-foreground",
  success: "text-green-600 dark:text-green-400",
  warning: "text-yellow-600 dark:text-yellow-400",
  destructive: "text-red-600 dark:text-red-400"
}, ah = C.forwardRef(
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
    const p = C.useMemo(() => {
      if (!s) return [];
      const g = s.map((h) => {
        const m = h.icon, v = {
          label: h.label,
          icon: m ? /* @__PURE__ */ x(m, { className: "h-4 w-4" }) : void 0
        };
        return h.href && (v.href = h.href), v;
      });
      return u ? [
        {
          label: "Home",
          href: "/",
          icon: /* @__PURE__ */ x(Pg, { className: "h-4 w-4", "aria-label": "Home" })
        },
        ...g
      ] : g;
    }, [s, u]);
    return /* @__PURE__ */ x(
      "header",
      {
        ref: f,
        className: P(ih({ variant: n, sticky: t, className: e })),
        ...d,
        children: /* @__PURE__ */ L("div", { className: "px-4 py-4 sm:px-6 sm:py-6", children: [
          s && s.length > 0 && /* @__PURE__ */ x("div", { className: "mb-3", children: /* @__PURE__ */ x(
            tc,
            {
              items: p,
              separator: c,
              className: "text-muted-foreground"
            }
          ) }),
          /* @__PURE__ */ L("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", children: [
            /* @__PURE__ */ L("div", { className: "flex items-center gap-3", children: [
              i && /* @__PURE__ */ x("div", { className: "bg-primary/10 text-primary flex-shrink-0 rounded-lg p-2", children: /* @__PURE__ */ x(i, { className: "h-6 w-6", "aria-hidden": "true" }) }),
              /* @__PURE__ */ L("div", { children: [
                /* @__PURE__ */ x("h1", { className: "text-foreground text-2xl font-semibold", children: r }),
                o && /* @__PURE__ */ x("p", { className: "text-muted-foreground mt-1 text-sm", children: o })
              ] })
            ] }),
            a && /* @__PURE__ */ x("div", { className: "flex flex-shrink-0 items-center gap-2", children: a })
          ] }),
          l && l.length > 0 && /* @__PURE__ */ x("div", { className: "border-border mt-4 border-t pt-4", children: /* @__PURE__ */ x("dl", { className: "grid grid-cols-2 gap-4 sm:grid-cols-4", children: l.map((g, h) => {
            const m = g.icon;
            return /* @__PURE__ */ L("div", { className: "flex items-center gap-2", children: [
              m && /* @__PURE__ */ x("div", { className: "bg-muted flex-shrink-0 rounded-md p-1.5", children: /* @__PURE__ */ x(m, { className: "text-muted-foreground h-4 w-4", "aria-hidden": "true" }) }),
              /* @__PURE__ */ L("div", { children: [
                /* @__PURE__ */ x("dt", { className: "text-muted-foreground text-xs", children: g.label }),
                /* @__PURE__ */ x(
                  "dd",
                  {
                    className: P(
                      "text-lg font-semibold",
                      sh[g.color ?? "default"]
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
ah.displayName = "PageHeader";
const lh = Q(
  "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
  {
    variants: {},
    defaultVariants: {}
  }
), uh = Q(
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
), nc = C.createContext(void 0);
function To() {
  const e = C.useContext(nc);
  if (!e)
    throw new Error("Dialog components must be used within a Dialog");
  return e;
}
function ch({
  open: e,
  defaultOpen: n = !1,
  onOpenChange: t,
  children: r
}) {
  const [o, i] = C.useState(n), s = e !== void 0, a = s ? e : o, l = C.useCallback(
    (u) => {
      s || i(u), t == null || t(u);
    },
    [s, t]
  );
  return /* @__PURE__ */ x(nc.Provider, { value: { open: a, onOpenChange: l }, children: r });
}
const dh = C.forwardRef(
  ({ asChild: e = !1, onClick: n, children: t, ...r }, o) => {
    const { onOpenChange: i } = To(), s = (a) => {
      n == null || n(a), i(!0);
    };
    return e && C.isValidElement(t) ? C.cloneElement(
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
    ) : /* @__PURE__ */ x("button", { ref: o, type: "button", onClick: s, ...r, children: t });
  }
);
dh.displayName = "DialogTrigger";
function fh({ children: e, container: n }) {
  const [t, r] = C.useState(!1);
  if (C.useEffect(() => (r(!0), () => {
    r(!1);
  }), []), !t) return null;
  const o = n ?? document.body;
  return /* @__PURE__ */ x(tt, { children: C.Children.map(
    e,
    (i) => o ? Ou(i, o) : i
  ) });
}
const rc = C.forwardRef(
  ({ className: e, ...n }, t) => {
    const { open: r } = To();
    return /* @__PURE__ */ x(
      "div",
      {
        ref: t,
        "data-state": r ? "open" : "closed",
        className: P(lh(), e),
        ...n
      }
    );
  }
);
rc.displayName = "DialogOverlay";
const oc = C.forwardRef(
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
    const { open: c, onOpenChange: d } = To(), f = C.useRef(null), p = C.useRef(null);
    C.useImperativeHandle(u, () => {
      if (!f.current)
        throw new Error("Content ref is not attached");
      return f.current;
    });
    const g = C.useCallback(() => {
      d(!1), s == null || s();
    }, [d, s]);
    return C.useEffect(() => {
      if (!c || !o) return;
      const h = (m) => {
        m.key === "Escape" && (m.preventDefault(), g());
      };
      return document.addEventListener("keydown", h), () => {
        document.removeEventListener("keydown", h);
      };
    }, [c, o, g]), C.useEffect(() => {
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
    }, [c]), C.useEffect(() => {
      if (!c) return;
      const h = (m) => {
        var _;
        if (m.key !== "Tab") return;
        const v = (_ = f.current) == null ? void 0 : _.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!(v != null && v.length)) return;
        const y = v[0], b = v[v.length - 1];
        m.shiftKey ? document.activeElement === y && (m.preventDefault(), b.focus()) : document.activeElement === b && (m.preventDefault(), y.focus());
      };
      return document.addEventListener("keydown", h), () => {
        document.removeEventListener("keydown", h);
      };
    }, [c]), c ? /* @__PURE__ */ L(fh, { container: a, children: [
      /* @__PURE__ */ x(rc, { onClick: r ? g : void 0 }),
      /* @__PURE__ */ L(
        "div",
        {
          ref: f,
          role: "dialog",
          "aria-modal": "true",
          "data-state": c ? "open" : "closed",
          className: P(uh({ size: t }), e),
          onClick: (h) => {
            h.stopPropagation();
          },
          ...l,
          children: [
            n,
            i && /* @__PURE__ */ x(
              "button",
              {
                type: "button",
                onClick: g,
                className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none",
                "aria-label": "Close",
                children: /* @__PURE__ */ x(Vu, { className: "h-4 w-4" })
              }
            )
          ]
        }
      )
    ] }) : null;
  }
);
oc.displayName = "DialogContent";
const ic = C.forwardRef(
  ({ className: e, ...n }, t) => /* @__PURE__ */ x(
    "div",
    {
      ref: t,
      className: P("flex flex-col space-y-1.5 text-center sm:text-left", e),
      ...n
    }
  )
);
ic.displayName = "DialogHeader";
const sc = C.forwardRef(
  ({ className: e, ...n }, t) => /* @__PURE__ */ x(
    "div",
    {
      ref: t,
      className: P("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e),
      ...n
    }
  )
);
sc.displayName = "DialogFooter";
const ac = C.forwardRef(
  ({ className: e, ...n }, t) => /* @__PURE__ */ x(
    "h2",
    {
      ref: t,
      className: P("text-foreground text-lg leading-none font-semibold tracking-tight", e),
      ...n
    }
  )
);
ac.displayName = "DialogTitle";
const lc = C.forwardRef(
  ({ className: e, ...n }, t) => /* @__PURE__ */ x("p", { ref: t, className: P("text-muted-foreground text-sm", e), ...n })
);
lc.displayName = "DialogDescription";
const gh = C.forwardRef(
  ({ asChild: e = !1, onClick: n, children: t, ...r }, o) => {
    const { onOpenChange: i } = To(), s = (a) => {
      n == null || n(a), i(!1);
    };
    return e && C.isValidElement(t) ? C.cloneElement(
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
    ) : /* @__PURE__ */ x("button", { ref: o, type: "button", onClick: s, ...r, children: t });
  }
);
gh.displayName = "DialogClose";
const ph = Q(
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
), hh = {
  sm: "h-3 w-3",
  default: "h-3.5 w-3.5",
  lg: "h-4 w-4"
}, mh = C.forwardRef(
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
    const h = C.useRef(null), [m, v] = C.useState(o ?? !1), y = C.useId();
    C.useImperativeHandle(g, () => {
      if (!h.current)
        throw new Error("Input ref is not attached");
      return h.current;
    });
    const b = r !== void 0, _ = b ? r : m;
    C.useEffect(() => {
      h.current && (h.current.indeterminate = s);
    }, [s]);
    const w = () => s ? "indeterminate" : _ ? "checked" : "unchecked", S = (E) => {
      const R = E.target.checked;
      b || v(R), i == null || i(R);
    }, k = f ?? y, N = hh[t ?? "default"];
    return /* @__PURE__ */ L("div", { className: "flex items-start gap-2", children: [
      /* @__PURE__ */ L("div", { className: "relative flex items-center justify-center", children: [
        /* @__PURE__ */ x(
          "input",
          {
            ref: h,
            type: "checkbox",
            id: k,
            checked: _,
            onChange: S,
            disabled: d,
            required: c,
            className: "sr-only",
            "aria-invalid": u ? "true" : void 0,
            "aria-describedby": l || u ? `${k}-description` : void 0,
            ...p
          }
        ),
        /* @__PURE__ */ x(
          "div",
          {
            "data-state": w(),
            className: P(
              ph({ variant: n, size: t }),
              "flex cursor-pointer items-center justify-center",
              d && "cursor-not-allowed",
              u && "border-destructive",
              e
            ),
            onClick: () => {
              !d && h.current && h.current.click();
            },
            role: "presentation",
            children: s ? /* @__PURE__ */ x(zg, { className: N, "aria-hidden": "true" }) : _ ? /* @__PURE__ */ x(Ii, { className: N, "aria-hidden": "true" }) : null
          }
        )
      ] }),
      (a || l || u) && /* @__PURE__ */ L("div", { className: "flex flex-col", children: [
        a && /* @__PURE__ */ L(
          "label",
          {
            htmlFor: k,
            className: P(
              "cursor-pointer text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
              d && "cursor-not-allowed opacity-70"
            ),
            children: [
              a,
              c && /* @__PURE__ */ x("span", { className: "text-destructive ml-1", children: "*" })
            ]
          }
        ),
        (l || u) && /* @__PURE__ */ x(
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
mh.displayName = "Checkbox";
const yh = C.forwardRef(
  ({
    label: e,
    description: n,
    error: t,
    required: r,
    children: o,
    className: i,
    orientation: s = "vertical",
    ...a
  }, l) => /* @__PURE__ */ L(
    "fieldset",
    {
      ref: l,
      className: P("space-y-2", i),
      "aria-describedby": n || t ? "checkbox-group-description" : void 0,
      ...a,
      children: [
        e && /* @__PURE__ */ L("legend", { className: "text-sm leading-none font-medium", children: [
          e,
          r && /* @__PURE__ */ x("span", { className: "text-destructive ml-1", children: "*" })
        ] }),
        n && !t && /* @__PURE__ */ x("p", { id: "checkbox-group-description", className: "text-muted-foreground text-sm", children: n }),
        /* @__PURE__ */ x(
          "div",
          {
            className: P(
              "flex gap-4",
              s === "vertical" ? "flex-col" : "flex-row flex-wrap"
            ),
            children: o
          }
        ),
        t && /* @__PURE__ */ x("p", { id: "checkbox-group-description", className: "text-destructive text-sm", children: t })
      ]
    }
  )
);
yh.displayName = "CheckboxGroup";
const bh = Q(
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
), vh = Q(
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
), xh = C.forwardRef(
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
    const [m, v] = C.useState(o), y = C.useId(), b = r !== void 0, _ = b ? r : m, w = () => {
      if (u) return;
      const I = !_;
      b || v(I), i == null || i(I);
    }, S = (I) => {
      (I.key === " " || I.key === "Enter") && (I.preventDefault(), w());
    }, k = p ?? y, N = _ ? "checked" : "unchecked", E = /* @__PURE__ */ x(
      "button",
      {
        ref: h,
        type: "button",
        role: "switch",
        id: k,
        "aria-checked": _,
        "aria-required": c,
        "aria-describedby": a ? `${k}-description` : void 0,
        "data-state": N,
        disabled: u,
        onClick: w,
        onKeyDown: S,
        className: P(bh({ variant: n, size: t }), e),
        ...g,
        children: /* @__PURE__ */ x("span", { "data-state": N, className: P(vh({ size: t })) })
      }
    ), R = d ? /* @__PURE__ */ x(
      "input",
      {
        type: "checkbox",
        name: d,
        value: f ?? "on",
        checked: _,
        onChange: () => {
        },
        "aria-hidden": "true",
        tabIndex: -1,
        className: "sr-only"
      }
    ) : null;
    if (!s && !a)
      return /* @__PURE__ */ L(tt, { children: [
        R,
        E
      ] });
    const O = /* @__PURE__ */ L("div", { className: "flex flex-col", children: [
      s && /* @__PURE__ */ L(
        "label",
        {
          htmlFor: k,
          className: P(
            "cursor-pointer text-sm leading-none font-medium",
            u && "cursor-not-allowed opacity-70"
          ),
          children: [
            s,
            c && /* @__PURE__ */ x("span", { className: "text-destructive ml-1", children: "*" })
          ]
        }
      ),
      a && /* @__PURE__ */ x(
        "p",
        {
          id: `${k}-description`,
          className: P("text-muted-foreground text-sm", s && "mt-1"),
          children: a
        }
      )
    ] });
    return /* @__PURE__ */ L("div", { className: "flex items-center gap-3", children: [
      R,
      l === "left" && O,
      E,
      l === "right" && O
    ] });
  }
);
xh.displayName = "Switch";
const _h = C.forwardRef(
  ({ label: e, description: n, children: t, className: r, ...o }, i) => /* @__PURE__ */ L("div", { ref: i, role: "group", className: P("space-y-4", r), ...o, children: [
    (e || n) && /* @__PURE__ */ L("div", { className: "space-y-1", children: [
      e && /* @__PURE__ */ x("h3", { className: "text-sm leading-none font-medium", children: e }),
      n && /* @__PURE__ */ x("p", { className: "text-muted-foreground text-sm", children: n })
    ] }),
    /* @__PURE__ */ x("div", { className: "space-y-4", children: t })
  ] })
);
_h.displayName = "SwitchGroup";
const wh = Q(
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
), Sh = C.forwardRef(
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
  }, _) => {
    const [w, S] = C.useState(
      g !== void 0 ? g : h || ""
    ), k = C.useRef(null), N = g !== void 0, E = N ? g : w, R = String(E || "").length, O = C.useCallback(() => {
      if (!u || !k.current) return;
      const H = k.current;
      H.style.height = "auto";
      const J = parseInt(window.getComputedStyle(H).lineHeight), ne = parseInt(window.getComputedStyle(H).paddingTop), se = parseInt(window.getComputedStyle(H).paddingBottom), ce = J * c + ne + se, pe = d ? J * d + ne + se : 1 / 0, je = Math.min(Math.max(H.scrollHeight, ce), pe);
      H.style.height = `${String(je)}px`;
    }, [u, c, d]);
    C.useEffect(() => {
      u && O();
    }, [E, u, O]);
    const I = C.useCallback(
      (H) => {
        k.current = H, typeof _ == "function" ? _(H) : _ && (_.current = H);
      },
      [_]
    ), B = (H) => {
      N || S(H.target.value), m == null || m(H), u && O();
    }, D = !!s, U = D ? "destructive" : n, q = l !== void 0 && R > l;
    return /* @__PURE__ */ L("div", { className: P("w-full", f), children: [
      o && /* @__PURE__ */ L(
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
            b.required && /* @__PURE__ */ x("span", { className: "text-destructive ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ x("div", { className: "relative", children: /* @__PURE__ */ x(
        "textarea",
        {
          ref: I,
          className: P(
            wh({
              variant: U,
              textareaSize: t,
              resize: u ? "none" : r
            }),
            D && "border-destructive focus-visible:ring-destructive",
            e
          ),
          value: E,
          onChange: B,
          disabled: v,
          maxLength: l,
          rows: u ? c : y,
          "aria-invalid": D ? "true" : void 0,
          "aria-describedby": s || i || a ? `${b.id ?? ""}-description ${b.id ?? ""}-error ${b.id ?? ""}-count` : void 0,
          ...b
        }
      ) }),
      /* @__PURE__ */ L("div", { className: "mt-1.5 flex items-center justify-between gap-2", children: [
        /* @__PURE__ */ L("div", { className: "flex-1", children: [
          i && !s && /* @__PURE__ */ x(
            "p",
            {
              id: `${b.id ?? ""}-description`,
              className: P("text-muted-foreground text-sm", v && "opacity-50"),
              children: i
            }
          ),
          s && /* @__PURE__ */ x(
            "p",
            {
              id: `${b.id ?? ""}-error`,
              className: "text-destructive text-sm font-medium",
              role: "alert",
              children: s
            }
          )
        ] }),
        a && /* @__PURE__ */ L(
          "p",
          {
            id: `${b.id ?? ""}-count`,
            className: P(
              "text-sm tabular-nums",
              q ? "text-destructive font-medium" : "text-muted-foreground",
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
Sh.displayName = "Textarea";
function Ct(e, n, { checkForDefaultPrevented: t = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), t === !1 || !o.defaultPrevented)
      return n == null ? void 0 : n(o);
  };
}
function Na(e, n) {
  if (typeof e == "function")
    return e(n);
  e != null && (e.current = n);
}
function uc(...e) {
  return (n) => {
    let t = !1;
    const r = e.map((o) => {
      const i = Na(o, n);
      return !t && typeof i == "function" && (t = !0), i;
    });
    if (t)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : Na(e[o], null);
        }
      };
  };
}
function en(...e) {
  return C.useCallback(uc(...e), e);
}
function Ao(e, n = []) {
  let t = [];
  function r(i, s) {
    const a = C.createContext(s), l = t.length;
    t = [...t, s];
    const u = (d) => {
      var v;
      const { scope: f, children: p, ...g } = d, h = ((v = f == null ? void 0 : f[e]) == null ? void 0 : v[l]) || a, m = C.useMemo(() => g, Object.values(g));
      return /* @__PURE__ */ x(h.Provider, { value: m, children: p });
    };
    u.displayName = i + "Provider";
    function c(d, f) {
      var h;
      const p = ((h = f == null ? void 0 : f[e]) == null ? void 0 : h[l]) || a, g = C.useContext(p);
      if (g) return g;
      if (s !== void 0) return s;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return [u, c];
  }
  const o = () => {
    const i = t.map((s) => C.createContext(s));
    return function(a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return C.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: l } }),
        [a, l]
      );
    };
  };
  return o.scopeName = e, [r, Ch(o, ...n)];
}
function Ch(...e) {
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
      return C.useMemo(() => ({ [`__scope${n.scopeName}`]: s }), [s]);
    };
  };
  return t.scopeName = n.scopeName, t;
}
// @__NO_SIDE_EFFECTS__
function Mi(e) {
  const n = /* @__PURE__ */ kh(e), t = C.forwardRef((r, o) => {
    const { children: i, ...s } = r, a = C.Children.toArray(i), l = a.find(Nh);
    if (l) {
      const u = l.props.children, c = a.map((d) => d === l ? C.Children.count(u) > 1 ? C.Children.only(null) : C.isValidElement(u) ? u.props.children : null : d);
      return /* @__PURE__ */ x(n, { ...s, ref: o, children: C.isValidElement(u) ? C.cloneElement(u, void 0, c) : null });
    }
    return /* @__PURE__ */ x(n, { ...s, ref: o, children: i });
  });
  return t.displayName = `${e}.Slot`, t;
}
// @__NO_SIDE_EFFECTS__
function kh(e) {
  const n = C.forwardRef((t, r) => {
    const { children: o, ...i } = t;
    if (C.isValidElement(o)) {
      const s = Th(o), a = Rh(i, o.props);
      return o.type !== C.Fragment && (a.ref = r ? uc(r, s) : s), C.cloneElement(o, a);
    }
    return C.Children.count(o) > 1 ? C.Children.only(null) : null;
  });
  return n.displayName = `${e}.SlotClone`, n;
}
var Eh = Symbol("radix.slottable");
function Nh(e) {
  return C.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Eh;
}
function Rh(e, n) {
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
function Th(e) {
  var r, o;
  let n = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
var Ah = [
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
], jn = Ah.reduce((e, n) => {
  const t = /* @__PURE__ */ Mi(`Primitive.${n}`), r = C.forwardRef((o, i) => {
    const { asChild: s, ...a } = o, l = s ? t : n;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ x(l, { ...a, ref: i });
  });
  return r.displayName = `Primitive.${n}`, { ...e, [n]: r };
}, {});
function Fh(e) {
  const n = e + "CollectionProvider", [t, r] = Ao(n), [o, i] = t(
    n,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), s = (h) => {
    const { scope: m, children: v } = h, y = Oe.useRef(null), b = Oe.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ x(o, { scope: m, itemMap: b, collectionRef: y, children: v });
  };
  s.displayName = n;
  const a = e + "CollectionSlot", l = /* @__PURE__ */ Mi(a), u = Oe.forwardRef(
    (h, m) => {
      const { scope: v, children: y } = h, b = i(a, v), _ = en(m, b.collectionRef);
      return /* @__PURE__ */ x(l, { ref: _, children: y });
    }
  );
  u.displayName = a;
  const c = e + "CollectionItemSlot", d = "data-radix-collection-item", f = /* @__PURE__ */ Mi(c), p = Oe.forwardRef(
    (h, m) => {
      const { scope: v, children: y, ...b } = h, _ = Oe.useRef(null), w = en(m, _), S = i(c, v);
      return Oe.useEffect(() => (S.itemMap.set(_, { ref: _, ...b }), () => void S.itemMap.delete(_))), /* @__PURE__ */ x(f, { [d]: "", ref: w, children: y });
    }
  );
  p.displayName = c;
  function g(h) {
    const m = i(e + "CollectionConsumer", h);
    return Oe.useCallback(() => {
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
var hr = globalThis != null && globalThis.document ? C.useLayoutEffect : () => {
}, Ih = C[" useId ".trim().toString()] || (() => {
}), Oh = 0;
function $h(e) {
  const [n, t] = C.useState(Ih());
  return hr(() => {
    t((r) => r ?? String(Oh++));
  }, [e]), n ? `radix-${n}` : "";
}
function Mh(e) {
  const n = C.useRef(e);
  return C.useEffect(() => {
    n.current = e;
  }), C.useMemo(() => (...t) => {
    var r;
    return (r = n.current) == null ? void 0 : r.call(n, ...t);
  }, []);
}
var Ph = C[" useInsertionEffect ".trim().toString()] || hr;
function cc({
  prop: e,
  defaultProp: n,
  onChange: t = () => {
  },
  caller: r
}) {
  const [o, i, s] = Lh({
    defaultProp: n,
    onChange: t
  }), a = e !== void 0, l = a ? e : o;
  {
    const c = C.useRef(e !== void 0);
    C.useEffect(() => {
      const d = c.current;
      d !== a && console.warn(
        `${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), c.current = a;
    }, [a, r]);
  }
  const u = C.useCallback(
    (c) => {
      var d;
      if (a) {
        const f = Dh(c) ? c(e) : c;
        f !== e && ((d = s.current) == null || d.call(s, f));
      } else
        i(c);
    },
    [a, e, i, s]
  );
  return [l, u];
}
function Lh({
  defaultProp: e,
  onChange: n
}) {
  const [t, r] = C.useState(e), o = C.useRef(t), i = C.useRef(n);
  return Ph(() => {
    i.current = n;
  }, [n]), C.useEffect(() => {
    var s;
    o.current !== t && ((s = i.current) == null || s.call(i, t), o.current = t);
  }, [t, o]), [t, r, i];
}
function Dh(e) {
  return typeof e == "function";
}
var zh = C.createContext(void 0);
function dc(e) {
  const n = C.useContext(zh);
  return e || n || "ltr";
}
var ri = "rovingFocusGroup.onEntryFocus", Bh = { bubbles: !1, cancelable: !0 }, Cr = "RovingFocusGroup", [Pi, fc, Vh] = Fh(Cr), [Uh, gc] = Ao(
  Cr,
  [Vh]
), [jh, Gh] = Uh(Cr), pc = C.forwardRef(
  (e, n) => /* @__PURE__ */ x(Pi.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ x(Pi.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ x(Hh, { ...e, ref: n }) }) })
);
pc.displayName = Cr;
var Hh = C.forwardRef((e, n) => {
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
  } = e, f = C.useRef(null), p = en(n, f), g = dc(i), [h, m] = cc({
    prop: s,
    defaultProp: a ?? null,
    onChange: l,
    caller: Cr
  }), [v, y] = C.useState(!1), b = Mh(u), _ = fc(t), w = C.useRef(!1), [S, k] = C.useState(0);
  return C.useEffect(() => {
    const N = f.current;
    if (N)
      return N.addEventListener(ri, b), () => N.removeEventListener(ri, b);
  }, [b]), /* @__PURE__ */ x(
    jh,
    {
      scope: t,
      orientation: r,
      dir: g,
      loop: o,
      currentTabStopId: h,
      onItemFocus: C.useCallback(
        (N) => m(N),
        [m]
      ),
      onItemShiftTab: C.useCallback(() => y(!0), []),
      onFocusableItemAdd: C.useCallback(
        () => k((N) => N + 1),
        []
      ),
      onFocusableItemRemove: C.useCallback(
        () => k((N) => N - 1),
        []
      ),
      children: /* @__PURE__ */ x(
        jn.div,
        {
          tabIndex: v || S === 0 ? -1 : 0,
          "data-orientation": r,
          ...d,
          ref: p,
          style: { outline: "none", ...e.style },
          onMouseDown: Ct(e.onMouseDown, () => {
            w.current = !0;
          }),
          onFocus: Ct(e.onFocus, (N) => {
            const E = !w.current;
            if (N.target === N.currentTarget && E && !v) {
              const R = new CustomEvent(ri, Bh);
              if (N.currentTarget.dispatchEvent(R), !R.defaultPrevented) {
                const O = _().filter((q) => q.focusable), I = O.find((q) => q.active), B = O.find((q) => q.id === h), U = [I, B, ...O].filter(
                  Boolean
                ).map((q) => q.ref.current);
                yc(U, c);
              }
            }
            w.current = !1;
          }),
          onBlur: Ct(e.onBlur, () => y(!1))
        }
      )
    }
  );
}), hc = "RovingFocusGroupItem", mc = C.forwardRef(
  (e, n) => {
    const {
      __scopeRovingFocusGroup: t,
      focusable: r = !0,
      active: o = !1,
      tabStopId: i,
      children: s,
      ...a
    } = e, l = $h(), u = i || l, c = Gh(hc, t), d = c.currentTabStopId === u, f = fc(t), { onFocusableItemAdd: p, onFocusableItemRemove: g, currentTabStopId: h } = c;
    return C.useEffect(() => {
      if (r)
        return p(), () => g();
    }, [r, p, g]), /* @__PURE__ */ x(
      Pi.ItemSlot,
      {
        scope: t,
        id: u,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ x(
          jn.span,
          {
            tabIndex: d ? 0 : -1,
            "data-orientation": c.orientation,
            ...a,
            ref: n,
            onMouseDown: Ct(e.onMouseDown, (m) => {
              r ? c.onItemFocus(u) : m.preventDefault();
            }),
            onFocus: Ct(e.onFocus, () => c.onItemFocus(u)),
            onKeyDown: Ct(e.onKeyDown, (m) => {
              if (m.key === "Tab" && m.shiftKey) {
                c.onItemShiftTab();
                return;
              }
              if (m.target !== m.currentTarget) return;
              const v = qh(m, c.orientation, c.dir);
              if (v !== void 0) {
                if (m.metaKey || m.ctrlKey || m.altKey || m.shiftKey) return;
                m.preventDefault();
                let b = f().filter((_) => _.focusable).map((_) => _.ref.current);
                if (v === "last") b.reverse();
                else if (v === "prev" || v === "next") {
                  v === "prev" && b.reverse();
                  const _ = b.indexOf(m.currentTarget);
                  b = c.loop ? Zh(b, _ + 1) : b.slice(_ + 1);
                }
                setTimeout(() => yc(b));
              }
            }),
            children: typeof s == "function" ? s({ isCurrentTabStop: d, hasTabStop: h != null }) : s
          }
        )
      }
    );
  }
);
mc.displayName = hc;
var Kh = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Wh(e, n) {
  return n !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function qh(e, n, t) {
  const r = Wh(e.key, t);
  if (!(n === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(n === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return Kh[r];
}
function yc(e, n = !1) {
  const t = document.activeElement;
  for (const r of e)
    if (r === t || (r.focus({ preventScroll: n }), document.activeElement !== t)) return;
}
function Zh(e, n) {
  return e.map((t, r) => e[(n + r) % e.length]);
}
var Jh = pc, Yh = mc;
function Xh(e) {
  const [n, t] = C.useState(void 0);
  return hr(() => {
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
function Qh(e) {
  const n = C.useRef({ value: e, previous: e });
  return C.useMemo(() => (n.current.value !== e && (n.current.previous = n.current.value, n.current.value = e), n.current.previous), [e]);
}
function em(e, n) {
  return C.useReducer((t, r) => n[t][r] ?? t, e);
}
var bc = (e) => {
  const { present: n, children: t } = e, r = tm(n), o = typeof t == "function" ? t({ present: r.isPresent }) : C.Children.only(t), i = en(r.ref, nm(o));
  return typeof t == "function" || r.isPresent ? C.cloneElement(o, { ref: i }) : null;
};
bc.displayName = "Presence";
function tm(e) {
  const [n, t] = C.useState(), r = C.useRef(null), o = C.useRef(e), i = C.useRef("none"), s = e ? "mounted" : "unmounted", [a, l] = em(s, {
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
  return C.useEffect(() => {
    const u = $r(r.current);
    i.current = a === "mounted" ? u : "none";
  }, [a]), hr(() => {
    const u = r.current, c = o.current;
    if (c !== e) {
      const f = i.current, p = $r(u);
      e ? l("MOUNT") : p === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(c && f !== p ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), hr(() => {
    if (n) {
      let u;
      const c = n.ownerDocument.defaultView ?? window, d = (p) => {
        const h = $r(r.current).includes(CSS.escape(p.animationName));
        if (p.target === n && h && (l("ANIMATION_END"), !o.current)) {
          const m = n.style.animationFillMode;
          n.style.animationFillMode = "forwards", u = c.setTimeout(() => {
            n.style.animationFillMode === "forwards" && (n.style.animationFillMode = m);
          });
        }
      }, f = (p) => {
        p.target === n && (i.current = $r(r.current));
      };
      return n.addEventListener("animationstart", f), n.addEventListener("animationcancel", d), n.addEventListener("animationend", d), () => {
        c.clearTimeout(u), n.removeEventListener("animationstart", f), n.removeEventListener("animationcancel", d), n.removeEventListener("animationend", d);
      };
    } else
      l("ANIMATION_END");
  }, [n, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(a),
    ref: C.useCallback((u) => {
      r.current = u ? getComputedStyle(u) : null, t(u);
    }, [])
  };
}
function $r(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function nm(e) {
  var r, o;
  let n = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
var Es = "Radio", [rm, vc] = Ao(Es), [om, im] = rm(Es), xc = C.forwardRef(
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
    } = e, [d, f] = C.useState(null), p = en(n, (m) => f(m)), g = C.useRef(!1), h = d ? u || !!d.closest("form") : !0;
    return /* @__PURE__ */ L(om, { scope: t, checked: o, disabled: s, children: [
      /* @__PURE__ */ x(
        jn.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": Cc(o),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: a,
          ...c,
          ref: p,
          onClick: Ct(e.onClick, (m) => {
            o || l == null || l(), h && (g.current = m.isPropagationStopped(), g.current || m.stopPropagation());
          })
        }
      ),
      h && /* @__PURE__ */ x(
        Sc,
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
xc.displayName = Es;
var _c = "RadioIndicator", wc = C.forwardRef(
  (e, n) => {
    const { __scopeRadio: t, forceMount: r, ...o } = e, i = im(_c, t);
    return /* @__PURE__ */ x(bc, { present: r || i.checked, children: /* @__PURE__ */ x(
      jn.span,
      {
        "data-state": Cc(i.checked),
        "data-disabled": i.disabled ? "" : void 0,
        ...o,
        ref: n
      }
    ) });
  }
);
wc.displayName = _c;
var sm = "RadioBubbleInput", Sc = C.forwardRef(
  ({
    __scopeRadio: e,
    control: n,
    checked: t,
    bubbles: r = !0,
    ...o
  }, i) => {
    const s = C.useRef(null), a = en(s, i), l = Qh(t), u = Xh(n);
    return C.useEffect(() => {
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
    }, [l, t, r]), /* @__PURE__ */ x(
      jn.input,
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
Sc.displayName = sm;
function Cc(e) {
  return e ? "checked" : "unchecked";
}
var am = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Fo = "RadioGroup", [lm] = Ao(Fo, [
  gc,
  vc
]), kc = gc(), Ec = vc(), [um, cm] = lm(Fo), Nc = C.forwardRef(
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
    } = e, p = kc(t), g = dc(u), [h, m] = cc({
      prop: i,
      defaultProp: o ?? null,
      onChange: d,
      caller: Fo
    });
    return /* @__PURE__ */ x(
      um,
      {
        scope: t,
        name: r,
        required: s,
        disabled: a,
        value: h,
        onValueChange: m,
        children: /* @__PURE__ */ x(
          Jh,
          {
            asChild: !0,
            ...p,
            orientation: l,
            dir: g,
            loop: c,
            children: /* @__PURE__ */ x(
              jn.div,
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
Nc.displayName = Fo;
var Rc = "RadioGroupItem", Tc = C.forwardRef(
  (e, n) => {
    const { __scopeRadioGroup: t, disabled: r, ...o } = e, i = cm(Rc, t), s = i.disabled || r, a = kc(t), l = Ec(t), u = C.useRef(null), c = en(n, u), d = i.value === o.value, f = C.useRef(!1);
    return C.useEffect(() => {
      const p = (h) => {
        am.includes(h.key) && (f.current = !0);
      }, g = () => f.current = !1;
      return document.addEventListener("keydown", p), document.addEventListener("keyup", g), () => {
        document.removeEventListener("keydown", p), document.removeEventListener("keyup", g);
      };
    }, []), /* @__PURE__ */ x(
      Yh,
      {
        asChild: !0,
        ...a,
        focusable: !s,
        active: d,
        children: /* @__PURE__ */ x(
          xc,
          {
            disabled: s,
            required: i.required,
            checked: d,
            ...l,
            ...o,
            name: i.name,
            ref: c,
            onCheck: () => i.onValueChange(o.value),
            onKeyDown: Ct((p) => {
              p.key === "Enter" && p.preventDefault();
            }),
            onFocus: Ct(o.onFocus, () => {
              var p;
              f.current && ((p = u.current) == null || p.click());
            })
          }
        )
      }
    );
  }
);
Tc.displayName = Rc;
var dm = "RadioGroupIndicator", Ac = C.forwardRef(
  (e, n) => {
    const { __scopeRadioGroup: t, ...r } = e, o = Ec(t);
    return /* @__PURE__ */ x(wc, { ...o, ...r, ref: n });
  }
);
Ac.displayName = dm;
var Fc = Nc, Ic = Tc, fm = Ac;
const gm = C.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ x(Fc, { className: P("grid gap-2", e), ...n, ref: t }));
gm.displayName = Fc.displayName;
const pm = C.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ x(
  Ic,
  {
    ref: t,
    className: P(
      "border-input text-primary ring-offset-background focus-visible:ring-ring aspect-square h-4 w-4 rounded-full border focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...n,
    children: /* @__PURE__ */ x(fm, { className: "flex items-center justify-center", children: /* @__PURE__ */ x(Og, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
pm.displayName = Ic.displayName;
const Oc = C.createContext(void 0), hm = Q(
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
), $c = C.forwardRef(
  ({ toast: e, onClose: n, variant: t, className: r, ...o }, i) => {
    const s = C.useMemo(() => {
      switch (t || e.variant) {
        case "success":
          return Yp;
        case "error":
          return eh;
        case "warning":
          return Xp;
        case "info":
          return Qp;
        default:
          return null;
      }
    }, [t, e.variant]);
    return /* @__PURE__ */ L(
      "div",
      {
        ref: i,
        role: "alert",
        "aria-live": "polite",
        "aria-atomic": "true",
        className: P(hm({ variant: t || e.variant }), r),
        ...o,
        children: [
          s && /* @__PURE__ */ x("div", { className: "mt-0.5 flex-shrink-0", children: /* @__PURE__ */ x(s, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ L("div", { className: "grid flex-1 gap-1", children: [
            e.title && /* @__PURE__ */ x("div", { className: "text-sm leading-none font-semibold", children: e.title }),
            /* @__PURE__ */ x("div", { className: "text-sm leading-snug opacity-90", children: e.description }),
            e.action && /* @__PURE__ */ x(
              "button",
              {
                onClick: e.action.onClick,
                className: "mt-2 inline-flex h-8 items-center justify-center rounded-md border border-current px-3 text-xs font-medium transition-colors hover:bg-black/5 focus:ring-2 focus:ring-offset-2 focus:outline-none dark:hover:bg-white/10",
                children: e.action.label
              }
            )
          ] }),
          /* @__PURE__ */ x(
            "button",
            {
              onClick: n,
              className: "inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md text-current opacity-60 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none",
              "aria-label": "Close",
              children: /* @__PURE__ */ x(th, { className: "h-4 w-4" })
            }
          )
        ]
      }
    );
  }
);
$c.displayName = "ToastItem";
const mm = {
  "top-right": "top-0 right-0 sm:top-4 sm:right-4",
  "top-left": "top-0 left-0 sm:top-4 sm:left-4",
  "bottom-right": "bottom-0 right-0 sm:bottom-4 sm:right-4",
  "bottom-left": "bottom-0 left-0 sm:bottom-4 sm:left-4",
  "top-center": "top-0 left-1/2 -translate-x-1/2 sm:top-4",
  "bottom-center": "bottom-0 left-1/2 -translate-x-1/2 sm:bottom-4"
}, Mc = C.forwardRef(
  ({ position: e = "top-right" }, n) => {
    const { toasts: t, removeToast: r } = ym(), [o, i] = C.useState(!1);
    return C.useEffect(() => {
      i(!0);
    }, []), !o || t.length === 0 ? null : /* @__PURE__ */ x(
      "div",
      {
        ref: n,
        className: P(
          "pointer-events-none fixed z-[100] flex w-full max-w-[420px] flex-col gap-2 p-4",
          mm[e]
        ),
        children: t.map((s) => /* @__PURE__ */ x(
          $c,
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
Mc.displayName = "ToastContainer";
const aw = ({
  children: e,
  position: n = "top-right",
  duration: t = 5e3,
  max: r = 5
}) => {
  const [o, i] = C.useState([]), s = C.useRef(/* @__PURE__ */ new Map()), a = C.useCallback((g) => {
    const h = s.current.get(g);
    h && (clearTimeout(h), s.current.delete(g)), i((m) => m.filter((v) => v.id !== g));
  }, []), l = C.useCallback(
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
  ), u = C.useCallback(
    (g, h) => l({ ...h, description: g, variant: "success" }),
    [l]
  ), c = C.useCallback(
    (g, h) => l({ ...h, description: g, variant: "error" }),
    [l]
  ), d = C.useCallback(
    (g, h) => l({ ...h, description: g, variant: "warning" }),
    [l]
  ), f = C.useCallback(
    (g, h) => l({ ...h, description: g, variant: "info" }),
    [l]
  );
  C.useEffect(() => {
    const g = s.current;
    return () => {
      g.forEach((h) => {
        clearTimeout(h);
      }), g.clear();
    };
  }, []);
  const p = C.useMemo(
    () => ({ toasts: o, addToast: l, removeToast: a, success: u, error: c, warning: d, info: f }),
    [o, l, a, u, c, d, f]
  );
  return /* @__PURE__ */ L(Oc.Provider, { value: p, children: [
    e,
    /* @__PURE__ */ x(Mc, { position: n })
  ] });
}, ym = () => {
  const e = C.useContext(Oc);
  if (!e)
    throw new Error("useToast must be used within a ToastProvider");
  return e;
}, bm = Q(
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
), Pc = Q(
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
), Lc = C.createContext(void 0), Ns = () => {
  const e = C.useContext(Lc);
  if (!e)
    throw new Error("Dropdown components must be used within a Dropdown");
  return e;
}, Dc = C.createContext(
  void 0
), zc = () => {
  const e = C.useContext(Dc);
  if (!e)
    throw new Error("DropdownSubmenu components must be used within a DropdownSubmenu");
  return e;
}, lw = ({
  children: e,
  open: n,
  onOpenChange: t,
  defaultOpen: r = !1
}) => {
  const [o, i] = C.useState(r), s = C.useRef(null), a = C.useRef(null), l = n !== void 0 ? n : o, u = C.useCallback(
    (c) => {
      n === void 0 && i(c), t == null || t(c);
    },
    [n, t]
  );
  return C.useEffect(() => {
    if (!l) return;
    const c = (d) => {
      var p, g;
      const f = d.target;
      !((p = s.current) != null && p.contains(f)) && !((g = a.current) != null && g.contains(f)) && u(!1);
    };
    return document.addEventListener("mousedown", c), () => {
      document.removeEventListener("mousedown", c);
    };
  }, [l, u]), C.useEffect(() => {
    if (!l) return;
    const c = (d) => {
      var f;
      d.key === "Escape" && (u(!1), (f = s.current) == null || f.focus());
    };
    return document.addEventListener("keydown", c), () => {
      document.removeEventListener("keydown", c);
    };
  }, [l, u]), /* @__PURE__ */ x(Lc.Provider, { value: { open: l, setOpen: u, triggerRef: s, contentRef: a }, children: /* @__PURE__ */ x("div", { className: "relative inline-block", children: e }) });
}, uw = ({ children: e, asChild: n = !1 }) => {
  const { open: t, setOpen: r, triggerRef: o } = Ns(), i = () => {
    r(!t);
  }, s = (a) => {
    a.key === "Enter" || a.key === " " ? (a.preventDefault(), r(!t)) : a.key === "ArrowDown" && !t && (a.preventDefault(), r(!0));
  };
  if (n && C.isValidElement(e)) {
    const a = e.props || {};
    return C.cloneElement(e, {
      ...a,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref: o,
      onClick: i,
      onKeyDown: s,
      "aria-expanded": t,
      "aria-haspopup": "menu"
    });
  }
  return /* @__PURE__ */ x(
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
}, cw = ({
  children: e,
  className: n,
  align: t = "start",
  side: r = "bottom"
}) => {
  const { open: o, setOpen: i, contentRef: s } = Ns(), [a, l] = C.useState(-1), u = C.useCallback(() => s.current ? Array.from(
    s.current.querySelectorAll(
      '[role="menuitem"]:not([aria-disabled="true"])'
    )
  ) : [], [s]);
  return C.useEffect(() => {
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
  }, [o, i, u]), C.useEffect(() => {
    var c;
    if (o) {
      const d = u();
      d.length > 0 && ((c = d[0]) == null || c.focus(), l(0));
    } else
      l(-1);
  }, [o, u]), o ? /* @__PURE__ */ x(
    "div",
    {
      ref: s,
      role: "menu",
      "aria-orientation": "vertical",
      className: P(bm({ align: t, side: r }), n),
      children: e
    }
  ) : null;
}, dw = ({ children: e, className: n }) => /* @__PURE__ */ x(
  "div",
  {
    className: P(
      "px-2 py-1.5 text-sm font-semibold text-slate-900 dark:text-slate-100",
      n
    ),
    children: e
  }
), fw = ({
  children: e,
  onSelect: n,
  icon: t,
  shortcut: r,
  variant: o = "default",
  disabled: i = !1,
  className: s
}) => {
  const { setOpen: a } = Ns(), l = () => {
    i || (n == null || n(), a(!1));
  };
  return /* @__PURE__ */ L(
    "div",
    {
      role: "menuitem",
      tabIndex: i ? void 0 : 0,
      "aria-disabled": i ? !0 : void 0,
      onClick: l,
      onKeyDown: (c) => {
        (c.key === "Enter" || c.key === " ") && (c.preventDefault(), l());
      },
      className: P(Pc({ variant: o, disabled: i }), s),
      children: [
        t && /* @__PURE__ */ x("span", { className: "shrink-0", children: t }),
        /* @__PURE__ */ x("span", { className: "flex-1", children: e }),
        r && /* @__PURE__ */ x("span", { className: "ml-auto text-xs tracking-widest text-slate-500 dark:text-slate-400", children: r })
      ]
    }
  );
}, gw = ({ className: e }) => /* @__PURE__ */ x("div", { role: "separator", className: P("my-1 h-px bg-slate-200 dark:bg-slate-700", e) }), pw = ({ children: e }) => {
  const [n, t] = C.useState(!1);
  return /* @__PURE__ */ x(Dc.Provider, { value: { open: n, setOpen: t }, children: /* @__PURE__ */ x("div", { className: "relative", children: e }) });
}, hw = ({
  children: e,
  icon: n,
  className: t
}) => {
  const { open: r, setOpen: o } = zc();
  return /* @__PURE__ */ L(
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
      className: P(Pc({ variant: "default", disabled: !1 }), t),
      children: [
        n && /* @__PURE__ */ x("span", { className: "shrink-0", children: n }),
        /* @__PURE__ */ x("span", { className: "flex-1", children: e }),
        /* @__PURE__ */ x(ec, { className: "ml-auto h-3 w-3 text-slate-500 dark:text-slate-400" })
      ]
    }
  );
}, mw = ({
  children: e,
  className: n
}) => {
  const { open: t } = zc();
  return t ? /* @__PURE__ */ x(
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
}, vm = Q(
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
), xm = Q(
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
function _m(e) {
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
function wm(e) {
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
const Sm = C.forwardRef(
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
    const [d, f] = C.useState(!1), [p, g] = C.useState(!!r);
    C.useEffect(() => {
      r && (f(!1), g(!0));
    }, [r]);
    const h = l || _m(o), m = wm(o), v = r && !d && !a, y = !v && !a, b = a || p;
    return /* @__PURE__ */ L("div", { ref: c, className: P(vm({ size: n, shape: t }), e), ...u, children: [
      v && /* @__PURE__ */ x(
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
      y && /* @__PURE__ */ x(
        "div",
        {
          className: P(
            "flex h-full w-full items-center justify-center font-medium text-white",
            m
          ),
          children: h
        }
      ),
      b && !v && /* @__PURE__ */ x("div", { className: "h-full w-full animate-pulse bg-slate-200 dark:bg-slate-700" }),
      s && !a && /* @__PURE__ */ x(
        "span",
        {
          className: P(xm({ status: s, size: n })),
          "aria-label": `Status: ${s}`
        }
      )
    ] });
  }
);
Sm.displayName = "Avatar";
const Ra = Q("inline-flex rounded-full flex-shrink-0", {
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
}), Ta = Q("text-sm font-medium", {
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
}), Cm = C.forwardRef(
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
    return c ? /* @__PURE__ */ L(
      "span",
      {
        ref: l,
        className: P("inline-flex items-center gap-2", e),
        role: "status",
        "aria-label": `Status: ${n || "online"}`,
        ...a,
        children: [
          i === "left" && /* @__PURE__ */ x("span", { className: Ta({ status: n }), children: c }),
          /* @__PURE__ */ x(
            "span",
            {
              className: Ra({ status: n, size: t, variant: u }),
              "aria-hidden": "true"
            }
          ),
          i === "right" && /* @__PURE__ */ x("span", { className: Ta({ status: n }), children: c })
        ]
      }
    ) : /* @__PURE__ */ x(
      "span",
      {
        ref: l,
        className: P(
          Ra({ status: n, size: t, variant: u }),
          e
        ),
        role: "status",
        "aria-label": `Status: ${n || "online"}`,
        ...a
      }
    );
  }
);
Cm.displayName = "StatusIndicator";
const km = Q(
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
), Em = {
  default: Oi,
  info: Oi,
  success: Fg,
  warning: pr,
  error: Ag
}, Nm = C.forwardRef(
  ({ className: e, variant: n, showIcon: t = !0, dismissible: r, onDismiss: o, children: i, ...s }, a) => {
    const [l, u] = C.useState(!1), c = () => {
      u(!0), o == null || o();
    };
    if (l) return null;
    const d = Em[n || "default"];
    return /* @__PURE__ */ L("div", { ref: a, role: "alert", className: P(km({ variant: n }), e), ...s, children: [
      t && /* @__PURE__ */ x(d, { className: "h-4 w-4", "aria-hidden": "true" }),
      /* @__PURE__ */ x("div", { className: "flex-1", children: i }),
      r && /* @__PURE__ */ x(
        "button",
        {
          onClick: c,
          className: "ring-offset-background focus:ring-ring absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none",
          "aria-label": "Dismiss alert",
          children: /* @__PURE__ */ x(Vu, { className: "h-4 w-4" })
        }
      )
    ] });
  }
);
Nm.displayName = "Alert";
const Rm = C.forwardRef(
  ({ className: e, children: n, ...t }, r) => /* @__PURE__ */ x(
    "h5",
    {
      ref: r,
      className: P("mb-1 leading-none font-medium tracking-tight", e),
      ...t,
      children: n
    }
  )
);
Rm.displayName = "AlertTitle";
const Tm = C.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ x("div", { ref: t, className: P("text-sm [&_p]:leading-relaxed", e), ...n }));
Tm.displayName = "AlertDescription";
var Am = Object.create, Io = Object.defineProperty, Fm = Object.defineProperties, Im = Object.getOwnPropertyDescriptor, Om = Object.getOwnPropertyDescriptors, Bc = Object.getOwnPropertyNames, oo = Object.getOwnPropertySymbols, $m = Object.getPrototypeOf, Rs = Object.prototype.hasOwnProperty, Vc = Object.prototype.propertyIsEnumerable, Aa = (e, n, t) => n in e ? Io(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, dt = (e, n) => {
  for (var t in n || (n = {}))
    Rs.call(n, t) && Aa(e, t, n[t]);
  if (oo)
    for (var t of oo(n))
      Vc.call(n, t) && Aa(e, t, n[t]);
  return e;
}, Oo = (e, n) => Fm(e, Om(n)), Uc = (e, n) => {
  var t = {};
  for (var r in e)
    Rs.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && oo)
    for (var r of oo(e))
      n.indexOf(r) < 0 && Vc.call(e, r) && (t[r] = e[r]);
  return t;
}, Mm = (e, n) => function() {
  return n || (0, e[Bc(e)[0]])((n = { exports: {} }).exports, n), n.exports;
}, Pm = (e, n) => {
  for (var t in n)
    Io(e, t, { get: n[t], enumerable: !0 });
}, Lm = (e, n, t, r) => {
  if (n && typeof n == "object" || typeof n == "function")
    for (let o of Bc(n))
      !Rs.call(e, o) && o !== t && Io(e, o, { get: () => n[o], enumerable: !(r = Im(n, o)) || r.enumerable });
  return e;
}, Dm = (e, n, t) => (t = e != null ? Am($m(e)) : {}, Lm(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !e || !e.__esModule ? Io(t, "default", { value: e, enumerable: !0 }) : t,
  e
)), zm = Mm({
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
                return y = s.util.objId(h), m[y] ? m[y] : (v = [], m[y] = v, h.forEach(function(_, w) {
                  v[w] = g(_, m);
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
            for (var _ in y)
              if (y.hasOwnProperty(_)) {
                if (_ == h)
                  for (var w in m)
                    m.hasOwnProperty(w) && (b[w] = m[w]);
                m.hasOwnProperty(_) || (b[_] = y[_]);
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
            for (var _ in h)
              if (h.hasOwnProperty(_)) {
                m.call(h, _, h[_], v || _);
                var w = h[_], S = s.util.type(w);
                S === "Object" && !y[b(w)] ? (y[b(w)] = !0, g(w, m, null, y)) : S === "Array" && !y[b(w)] && (y[b(w)] = !0, g(w, m, _, y));
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
        var _ = "";
        for (var w in y.attributes)
          _ += " " + w + '="' + (y.attributes[w] || "").replace(/"/g, "&quot;") + '"';
        return "<" + y.tag + ' class="' + y.classes.join(" ") + '"' + _ + ">" + y.content + "</" + y.tag + ">";
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
        for (var _ in m)
          if (!(!m.hasOwnProperty(_) || !m[_])) {
            var w = m[_];
            w = Array.isArray(w) ? w : [w];
            for (var S = 0; S < w.length; ++S) {
              if (b && b.cause == _ + "," + S)
                return;
              var k = w[S], N = k.inside, E = !!k.lookbehind, R = !!k.greedy, O = k.alias;
              if (R && !k.pattern.global) {
                var I = k.pattern.toString().match(/[imsuy]*$/)[0];
                k.pattern = RegExp(k.pattern.source, I + "g");
              }
              for (var B = k.pattern || k, D = v.next, U = y; D !== h.tail && !(b && U >= b.reach); U += D.value.length, D = D.next) {
                var q = D.value;
                if (h.length > g.length)
                  return;
                if (!(q instanceof a)) {
                  var H = 1, J;
                  if (R) {
                    if (J = l(B, U, g, E), !J || J.index >= g.length)
                      break;
                    var pe = J.index, ne = J.index + J[0].length, se = U;
                    for (se += D.value.length; pe >= se; )
                      D = D.next, se += D.value.length;
                    if (se -= D.value.length, U = se, D.value instanceof a)
                      continue;
                    for (var ce = D; ce !== h.tail && (se < ne || typeof ce.value == "string"); ce = ce.next)
                      H++, se += ce.value.length;
                    H--, q = g.slice(U, se), J.index -= U;
                  } else if (J = l(B, 0, q, E), !J)
                    continue;
                  var pe = J.index, je = J[0], Se = q.slice(0, pe), Pe = q.slice(pe + je.length), Ce = U + q.length;
                  b && Ce > b.reach && (b.reach = Ce);
                  var Le = D.prev;
                  Se && (Le = d(h, Le, Se), U += Se.length), f(h, Le, H);
                  var Ze = new a(_, N ? s.tokenize(je, N) : je, O, je);
                  if (D = d(h, Le, Ze), Pe && d(h, D, Pe), H > 1) {
                    var Je = {
                      cause: _ + "," + S,
                      reach: Ce
                    };
                    u(g, h, m, D.prev, U, Je), b && Je.reach > b.reach && (b.reach = Je.reach);
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
}), F = Dm(zm());
F.languages.markup = { comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 }, prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 }, doctype: { pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i, greedy: !0, inside: { "internal-subset": { pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/, lookbehind: !0, greedy: !0, inside: null }, string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 }, punctuation: /^<!|>$|[[\]]/, "doctype-tag": /^DOCTYPE/i, name: /[^\s<>'"]+/ } }, cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 }, tag: { pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/, greedy: !0, inside: { tag: { pattern: /^<\/?[^\s>\/]+/, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } }, "special-attr": [], "attr-value": { pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/, inside: { punctuation: [{ pattern: /^=/, alias: "attr-equals" }, { pattern: /^(\s*)["']|["']$/, lookbehind: !0 }] } }, punctuation: /\/?>/, "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } } } }, entity: [{ pattern: /&[\da-z]{1,8};/i, alias: "named-entity" }, /&#x?[\da-f]{1,8};/i] }, F.languages.markup.tag.inside["attr-value"].inside.entity = F.languages.markup.entity, F.languages.markup.doctype.inside["internal-subset"].inside = F.languages.markup, F.hooks.add("wrap", function(e) {
  e.type === "entity" && (e.attributes.title = e.content.replace(/&amp;/, "&"));
}), Object.defineProperty(F.languages.markup.tag, "addInlined", { value: function(e, r) {
  var t = {}, t = (t["language-" + r] = { pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i, lookbehind: !0, inside: F.languages[r] }, t.cdata = /^<!\[CDATA\[|\]\]>$/i, { "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: t } }), r = (t["language-" + r] = { pattern: /[\s\S]+/, inside: F.languages[r] }, {});
  r[e] = { pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
    return e;
  }), "i"), lookbehind: !0, greedy: !0, inside: t }, F.languages.insertBefore("markup", "cdata", r);
} }), Object.defineProperty(F.languages.markup.tag, "addAttribute", { value: function(e, n) {
  F.languages.markup.tag.inside["special-attr"].push({ pattern: RegExp(/(^|["'\s])/.source + "(?:" + e + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"), lookbehind: !0, inside: { "attr-name": /^[^\s=]+/, "attr-value": { pattern: /=[\s\S]+/, inside: { value: { pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/, lookbehind: !0, alias: [n, "language-" + n], inside: F.languages[n] }, punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/] } } } });
} }), F.languages.html = F.languages.markup, F.languages.mathml = F.languages.markup, F.languages.svg = F.languages.markup, F.languages.xml = F.languages.extend("markup", {}), F.languages.ssml = F.languages.xml, F.languages.atom = F.languages.xml, F.languages.rss = F.languages.xml, (function(e) {
  var n = { pattern: /\\[\\(){}[\]^$+*?|.]/, alias: "escape" }, t = /\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/, r = "(?:[^\\\\-]|" + t.source + ")", r = RegExp(r + "-" + r), o = { pattern: /(<|')[^<>']+(?=[>']$)/, lookbehind: !0, alias: "variable" };
  e.languages.regex = { "char-class": { pattern: /((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/, lookbehind: !0, inside: { "char-class-negation": { pattern: /(^\[)\^/, lookbehind: !0, alias: "operator" }, "char-class-punctuation": { pattern: /^\[|\]$/, alias: "punctuation" }, range: { pattern: r, inside: { escape: t, "range-punctuation": { pattern: /-/, alias: "operator" } } }, "special-escape": n, "char-set": { pattern: /\\[wsd]|\\p\{[^{}]+\}/i, alias: "class-name" }, escape: t } }, "special-escape": n, "char-set": { pattern: /\.|\\[wsd]|\\p\{[^{}]+\}/i, alias: "class-name" }, backreference: [{ pattern: /\\(?![123][0-7]{2})[1-9]/, alias: "keyword" }, { pattern: /\\k<[^<>']+>/, alias: "keyword", inside: { "group-name": o } }], anchor: { pattern: /[$^]|\\[ABbGZz]/, alias: "function" }, escape: t, group: [{ pattern: /\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/, alias: "punctuation", inside: { "group-name": o } }, { pattern: /\)/, alias: "punctuation" }], quantifier: { pattern: /(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/, alias: "number" }, alternation: { pattern: /\|/, alias: "keyword" } };
})(F), F.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0, greedy: !0 }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 }, "class-name": { pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i, lookbehind: !0, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/, boolean: /\b(?:false|true)\b/, function: /\b\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/, punctuation: /[{}[\];(),.:]/ }, F.languages.javascript = F.languages.extend("clike", { "class-name": [F.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/, lookbehind: !0 }], keyword: [{ pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 }, { pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: !0 }], function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, number: { pattern: RegExp(/(^|[^\w$])/.source + "(?:" + /NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source + ")" + /(?![\w$])/.source), lookbehind: !0 }, operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/ }), F.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, F.languages.insertBefore("javascript", "keyword", { regex: { pattern: RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source), lookbehind: !0, greedy: !0, inside: { "regex-source": { pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/, lookbehind: !0, alias: "language-regex", inside: F.languages.regex }, "regex-delimiter": /^\/|\/$/, "regex-flags": /^[a-z]+$/ } }, "function-variable": { pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/, lookbehind: !0, inside: F.languages.javascript }, { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i, lookbehind: !0, inside: F.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/, lookbehind: !0, inside: F.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/, lookbehind: !0, inside: F.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ }), F.languages.insertBefore("javascript", "string", { hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" }, "template-string": { pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/, greedy: !0, inside: { "template-punctuation": { pattern: /^`|`$/, alias: "string" }, interpolation: { pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/, lookbehind: !0, inside: { "interpolation-punctuation": { pattern: /^\$\{|\}$/, alias: "punctuation" }, rest: F.languages.javascript } }, string: /[\s\S]+/ } }, "string-property": { pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m, lookbehind: !0, greedy: !0, alias: "property" } }), F.languages.insertBefore("javascript", "operator", { "literal-property": { pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m, lookbehind: !0, alias: "property" } }), F.languages.markup && (F.languages.markup.tag.addInlined("script", "javascript"), F.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript")), F.languages.js = F.languages.javascript, F.languages.actionscript = F.languages.extend("javascript", { keyword: /\b(?:as|break|case|catch|class|const|default|delete|do|dynamic|each|else|extends|final|finally|for|function|get|if|implements|import|in|include|instanceof|interface|internal|is|namespace|native|new|null|override|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|use|var|void|while|with)\b/, operator: /\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/ }), F.languages.actionscript["class-name"].alias = "function", delete F.languages.actionscript.parameter, delete F.languages.actionscript["literal-property"], F.languages.markup && F.languages.insertBefore("actionscript", "string", { xml: { pattern: /(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/, lookbehind: !0, inside: F.languages.markup } }), (function(e) {
  var n = /#(?!\{).+/, t = { pattern: /#\{[^}]+\}/, alias: "variable" };
  e.languages.coffeescript = e.languages.extend("javascript", { comment: n, string: [{ pattern: /'(?:\\[\s\S]|[^\\'])*'/, greedy: !0 }, { pattern: /"(?:\\[\s\S]|[^\\"])*"/, greedy: !0, inside: { interpolation: t } }], keyword: /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/, "class-member": { pattern: /@(?!\d)\w+/, alias: "variable" } }), e.languages.insertBefore("coffeescript", "comment", { "multiline-comment": { pattern: /###[\s\S]+?###/, alias: "comment" }, "block-regex": { pattern: /\/{3}[\s\S]*?\/{3}/, alias: "regex", inside: { comment: n, interpolation: t } } }), e.languages.insertBefore("coffeescript", "string", { "inline-javascript": { pattern: /`(?:\\[\s\S]|[^\\`])*`/, inside: { delimiter: { pattern: /^`|`$/, alias: "punctuation" }, script: { pattern: /[\s\S]+/, alias: "language-javascript", inside: e.languages.javascript } } }, "multiline-string": [{ pattern: /'''[\s\S]*?'''/, greedy: !0, alias: "string" }, { pattern: /"""[\s\S]*?"""/, greedy: !0, alias: "string", inside: { interpolation: t } }] }), e.languages.insertBefore("coffeescript", "keyword", { property: /(?!\d)\w+(?=\s*:(?!:))/ }), delete e.languages.coffeescript["template-string"], e.languages.coffee = e.languages.coffeescript;
})(F), (function(e) {
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
})(F), (function(e) {
  var n = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/, n = (e.languages.css = { comment: /\/\*[\s\S]*?\*\//, atrule: { pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + n.source + ")*?" + /(?:;|(?=\s*\{))/.source), inside: { rule: /^@[\w-]+/, "selector-function-argument": { pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/, lookbehind: !0, alias: "selector" }, keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: !0 } } }, url: { pattern: RegExp("\\burl\\((?:" + n.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"), greedy: !0, inside: { function: /^url/i, punctuation: /^\(|\)$/, string: { pattern: RegExp("^" + n.source + "$"), alias: "url" } } }, selector: { pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + n.source + ")*(?=\\s*\\{)"), lookbehind: !0 }, string: { pattern: n, greedy: !0 }, property: { pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i, lookbehind: !0 }, important: /!important\b/i, function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0 }, punctuation: /[(){};:,]/ }, e.languages.css.atrule.inside.rest = e.languages.css, e.languages.markup);
  n && (n.tag.addInlined("style", "css"), n.tag.addAttribute("style", "css"));
})(F), (function(e) {
  var n = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, n = (e.languages.css.selector = { pattern: e.languages.css.selector.pattern, lookbehind: !0, inside: n = { "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/, "pseudo-class": /:[-\w]+/, class: /\.[-\w]+/, id: /#[-\w]+/, attribute: { pattern: RegExp(`\\[(?:[^[\\]"']|` + n.source + ")*\\]"), greedy: !0, inside: { punctuation: /^\[|\]$/, "case-sensitivity": { pattern: /(\s)[si]$/i, lookbehind: !0, alias: "keyword" }, namespace: { pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/, lookbehind: !0, inside: { punctuation: /\|$/ } }, "attr-name": { pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/, lookbehind: !0 }, "attr-value": [n, { pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/, lookbehind: !0 }], operator: /[|~*^$]?=/ } }, "n-th": [{ pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/, lookbehind: !0, inside: { number: /[\dn]+/, operator: /[+-]/ } }, { pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i, lookbehind: !0 }], combinator: />|\+|~|\|\|/, punctuation: /[(),]/ } }, e.languages.css.atrule.inside["selector-function-argument"].inside = n, e.languages.insertBefore("css", "property", { variable: { pattern: /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i, lookbehind: !0 } }), { pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/, lookbehind: !0 }), t = { pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/, lookbehind: !0 };
  e.languages.insertBefore("css", "function", { operator: { pattern: /(\s)[+\-*\/](?=\s)/, lookbehind: !0 }, hexcode: { pattern: /\B#[\da-f]{3,8}\b/i, alias: "color" }, color: [{ pattern: /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i, lookbehind: !0 }, { pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i, inside: { unit: n, number: t, function: /[\w-]+(?=\()/, punctuation: /[(),]/ } }], entity: /\\[\da-f]{1,8}/i, unit: n, number: t });
})(F), (function(e) {
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
})(F), (function(e) {
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
})(F), F.languages.graphql = { comment: /#.*/, description: { pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i, greedy: !0, alias: "string", inside: { "language-markdown": { pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/, lookbehind: !0, inside: F.languages.markdown } } }, string: { pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/, greedy: !0 }, number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i, boolean: /\b(?:false|true)\b/, variable: /\$[a-z_]\w*/i, directive: { pattern: /@[a-z_]\w*/i, alias: "function" }, "attr-name": { pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i, greedy: !0 }, "atom-input": { pattern: /\b[A-Z]\w*Input\b/, alias: "class-name" }, scalar: /\b(?:Boolean|Float|ID|Int|String)\b/, constant: /\b[A-Z][A-Z_\d]*\b/, "class-name": { pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/, lookbehind: !0 }, fragment: { pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/, lookbehind: !0, alias: "function" }, "definition-mutation": { pattern: /(\bmutation\s+)[a-zA-Z_]\w*/, lookbehind: !0, alias: "function" }, "definition-query": { pattern: /(\bquery\s+)[a-zA-Z_]\w*/, lookbehind: !0, alias: "function" }, keyword: /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/, operator: /[!=|&]|\.{3}/, "property-query": /\w+(?=\s*\()/, object: /\w+(?=\s*\{)/, punctuation: /[!(){}\[\]:=,]/, property: /\w+/ }, F.hooks.add("after-tokenize", function(e) {
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
}), F.languages.sql = { comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/, lookbehind: !0 }, variable: [{ pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/, greedy: !0 }, /@[\w.$]+/], string: { pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/, greedy: !0, lookbehind: !0 }, identifier: { pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/, greedy: !0, lookbehind: !0, inside: { punctuation: /^`|`$/ } }, function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i, keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i, boolean: /\b(?:FALSE|NULL|TRUE)\b/i, number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i, operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i, punctuation: /[;[\]()`,.]/ }, (function(e) {
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
      for (var b, _, y = y.content; d.indexOf((_ = g++, b = "___" + p.toUpperCase() + "_" + _ + "___")) !== -1; )
        ;
      return h[b] = y, b;
    }).join(""), f, p), v = Object.keys(h);
    return g = 0, (function y(b) {
      for (var _ = 0; _ < b.length; _++) {
        if (g >= v.length)
          return;
        var w, S, k, N, E, R, O, I = b[_];
        typeof I == "string" || typeof I.content == "string" ? (w = v[g], (O = (R = typeof I == "string" ? I : I.content).indexOf(w)) !== -1 && (++g, S = R.substring(0, O), E = h[w], k = void 0, (N = {})["interpolation-punctuation"] = o, (N = e.tokenize(E, N)).length === 3 && ((k = [1, 1]).push.apply(k, a(N[1], e.languages.javascript, "javascript")), N.splice.apply(N, k)), k = new e.Token("interpolation", N, r.alias, E), N = R.substring(O + w.length), E = [], S && E.push(S), E.push(k), N && (y(R = [N]), E.push.apply(E, R)), typeof I == "string" ? (b.splice.apply(b, [_, 1].concat(E)), _ += E.length - 1) : I.content = E)) : (O = I.content, Array.isArray(O) ? y(O) : y([O]));
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
})(F), (function(e) {
  e.languages.typescript = e.languages.extend("javascript", { "class-name": { pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/, lookbehind: !0, greedy: !0, inside: null }, builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/ }), e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/), delete e.languages.typescript.parameter, delete e.languages.typescript["literal-property"];
  var n = e.languages.extend("typescript", {});
  delete n["class-name"], e.languages.typescript["class-name"].inside = n, e.languages.insertBefore("typescript", "function", { decorator: { pattern: /@[$\w\xA0-\uFFFF]+/, inside: { at: { pattern: /^@/, alias: "operator" }, function: /^[\s\S]+/ } }, "generic-function": { pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/, greedy: !0, inside: { function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/, generic: { pattern: /<[\s\S]+/, alias: "class-name", inside: n } } } }), e.languages.ts = e.languages.typescript;
})(F), (function(e) {
  var n = e.languages.javascript, t = /\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})+\}/.source, r = "(@(?:arg|argument|param|property)\\s+(?:" + t + "\\s+)?)";
  e.languages.jsdoc = e.languages.extend("javadoclike", { parameter: { pattern: RegExp(r + /(?:(?!\s)[$\w\xA0-\uFFFF.])+(?=\s|$)/.source), lookbehind: !0, inside: { punctuation: /\./ } } }), e.languages.insertBefore("jsdoc", "keyword", { "optional-parameter": { pattern: RegExp(r + /\[(?:(?!\s)[$\w\xA0-\uFFFF.])+(?:=[^[\]]+)?\](?=\s|$)/.source), lookbehind: !0, inside: { parameter: { pattern: /(^\[)[$\w\xA0-\uFFFF\.]+/, lookbehind: !0, inside: { punctuation: /\./ } }, code: { pattern: /(=)[\s\S]*(?=\]$)/, lookbehind: !0, inside: n, alias: "language-javascript" }, punctuation: /[=[\]]/ } }, "class-name": [{ pattern: RegExp(/(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\s+(?:<TYPE>\s+)?)[A-Z]\w*(?:\.[A-Z]\w*)*/.source.replace(/<TYPE>/g, function() {
    return t;
  })), lookbehind: !0, inside: { punctuation: /\./ } }, { pattern: RegExp("(@[a-z]+\\s+)" + t), lookbehind: !0, inside: { string: n.string, number: n.number, boolean: n.boolean, keyword: e.languages.typescript.keyword, operator: /=>|\.\.\.|[&|?:*]/, punctuation: /[.,;=<>{}()[\]]/ } }], example: { pattern: /(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/, lookbehind: !0, inside: { code: { pattern: /^([\t ]*(?:\*\s*)?)\S.*$/m, lookbehind: !0, inside: n, alias: "language-javascript" } } } }), e.languages.javadoclike.addSupport("javascript", e.languages.jsdoc);
})(F), (function(e) {
  e.languages.flow = e.languages.extend("javascript", {}), e.languages.insertBefore("flow", "keyword", { type: [{ pattern: /\b(?:[Bb]oolean|Function|[Nn]umber|[Ss]tring|[Ss]ymbol|any|mixed|null|void)\b/, alias: "class-name" }] }), e.languages.flow["function-variable"].pattern = /(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/i, delete e.languages.flow.parameter, e.languages.insertBefore("flow", "operator", { "flow-punctuation": { pattern: /\{\||\|\}/, alias: "punctuation" } }), Array.isArray(e.languages.flow.keyword) || (e.languages.flow.keyword = [e.languages.flow.keyword]), e.languages.flow.keyword.unshift({ pattern: /(^|[^$]\b)(?:Class|declare|opaque|type)\b(?!\$)/, lookbehind: !0 }, { pattern: /(^|[^$]\B)\$(?:Diff|Enum|Exact|Keys|ObjMap|PropertyType|Record|Shape|Subtype|Supertype|await)\b(?!\$)/, lookbehind: !0 });
})(F), F.languages.n4js = F.languages.extend("javascript", { keyword: /\b(?:Array|any|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/ }), F.languages.insertBefore("n4js", "constant", { annotation: { pattern: /@+\w+/, alias: "operator" } }), F.languages.n4jsd = F.languages.n4js, (function(e) {
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
})(F), (function(e) {
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
})(F), (function(e) {
  var n = e.util.clone(e.languages.typescript), n = (e.languages.tsx = e.languages.extend("jsx", n), delete e.languages.tsx.parameter, delete e.languages.tsx["literal-property"], e.languages.tsx.tag);
  n.pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + "(?:" + n.pattern.source + ")", n.pattern.flags), n.lookbehind = !0;
})(F), F.languages.swift = { comment: { pattern: /(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/, lookbehind: !0, greedy: !0 }, "string-literal": [{ pattern: RegExp(/(^|[^"#])/.source + "(?:" + /"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/.source + "|" + /"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/.source + ")" + /(?!["#])/.source), lookbehind: !0, greedy: !0, inside: { interpolation: { pattern: /(\\\()(?:[^()]|\([^()]*\))*(?=\))/, lookbehind: !0, inside: null }, "interpolation-punctuation": { pattern: /^\)|\\\($/, alias: "punctuation" }, punctuation: /\\(?=[\r\n])/, string: /[\s\S]+/ } }, { pattern: RegExp(/(^|[^"#])(#+)/.source + "(?:" + /"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/.source + "|" + /"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/.source + ")\\2"), lookbehind: !0, greedy: !0, inside: { interpolation: { pattern: /(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/, lookbehind: !0, inside: null }, "interpolation-punctuation": { pattern: /^\)|\\#+\($/, alias: "punctuation" }, string: /[\s\S]+/ } }], directive: { pattern: RegExp(/#/.source + "(?:" + /(?:elseif|if)\b/.source + "(?:[ 	]*" + /(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/.source + ")+|" + /(?:else|endif)\b/.source + ")"), alias: "property", inside: { "directive-name": /^#\w+/, boolean: /\b(?:false|true)\b/, number: /\b\d+(?:\.\d+)*\b/, operator: /!|&&|\|\||[<>]=?/, punctuation: /[(),]/ } }, literal: { pattern: /#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/, alias: "constant" }, "other-directive": { pattern: /#\w+\b/, alias: "property" }, attribute: { pattern: /@\w+/, alias: "atrule" }, "function-definition": { pattern: /(\bfunc\s+)\w+/, lookbehind: !0, alias: "function" }, label: { pattern: /\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/, lookbehind: !0, alias: "important" }, keyword: /\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/, boolean: /\b(?:false|true)\b/, nil: { pattern: /\bnil\b/, alias: "constant" }, "short-argument": /\$\d+\b/, omit: { pattern: /\b_\b/, alias: "keyword" }, number: /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i, "class-name": /\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/, function: /\b[a-z_]\w*(?=\s*\()/i, constant: /\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/, operator: /[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/, punctuation: /[{}[\]();,.:\\]/ }, F.languages.swift["string-literal"].forEach(function(e) {
  e.inside.interpolation.inside = F.languages.swift;
}), (function(e) {
  e.languages.kotlin = e.languages.extend("clike", { keyword: { pattern: /(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/, lookbehind: !0 }, function: [{ pattern: /(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/, greedy: !0 }, { pattern: /(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/, lookbehind: !0, greedy: !0 }], number: /\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/, operator: /\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/ }), delete e.languages.kotlin["class-name"];
  var n = { "interpolation-punctuation": { pattern: /^\$\{?|\}$/, alias: "punctuation" }, expression: { pattern: /[\s\S]+/, inside: e.languages.kotlin } };
  e.languages.insertBefore("kotlin", "string", { "string-literal": [{ pattern: /"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/, alias: "multiline", inside: { interpolation: { pattern: /\$(?:[a-z_]\w*|\{[^{}]*\})/i, inside: n }, string: /[\s\S]+/ } }, { pattern: /"(?:[^"\\\r\n$]|\\.|\$(?:(?!\{)|\{[^{}]*\}))*"/, alias: "singleline", inside: { interpolation: { pattern: /((?:^|[^\\])(?:\\{2})*)\$(?:[a-z_]\w*|\{[^{}]*\})/i, lookbehind: !0, inside: n }, string: /[\s\S]+/ } }], char: { pattern: /'(?:[^'\\\r\n]|\\(?:.|u[a-fA-F0-9]{0,4}))'/, greedy: !0 } }), delete e.languages.kotlin.string, e.languages.insertBefore("kotlin", "keyword", { annotation: { pattern: /\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/, alias: "builtin" } }), e.languages.insertBefore("kotlin", "function", { label: { pattern: /\b\w+@|@\w+\b/, alias: "symbol" } }), e.languages.kt = e.languages.kotlin, e.languages.kts = e.languages.kotlin;
})(F), F.languages.c = F.languages.extend("clike", { comment: { pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 }, string: { pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/, greedy: !0 }, "class-name": { pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/, lookbehind: !0 }, keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/, function: /\b[a-z_]\w*(?=\s*\()/i, number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i, operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/ }), F.languages.insertBefore("c", "string", { char: { pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/, greedy: !0 } }), F.languages.insertBefore("c", "string", { macro: { pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im, lookbehind: !0, greedy: !0, alias: "property", inside: { string: [{ pattern: /^(#\s*include\s*)<[^>]+>/, lookbehind: !0 }, F.languages.c.string], char: F.languages.c.char, comment: F.languages.c.comment, "macro-name": [{ pattern: /(^#\s*define\s+)\w+\b(?!\()/i, lookbehind: !0 }, { pattern: /(^#\s*define\s+)\w+\b(?=\()/i, lookbehind: !0, alias: "function" }], directive: { pattern: /^(#\s*)[a-z]+/, lookbehind: !0, alias: "keyword" }, "directive-hash": /^#/, punctuation: /##|\\(?=[\r\n])/, expression: { pattern: /\S[\s\S]*/, inside: F.languages.c } } } }), F.languages.insertBefore("c", "function", { constant: /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/ }), delete F.languages.c.boolean, F.languages.objectivec = F.languages.extend("c", { string: { pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/, greedy: !0 }, keyword: /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/, operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/ }), delete F.languages.objectivec["class-name"], F.languages.objc = F.languages.objectivec, F.languages.reason = F.languages.extend("clike", { string: { pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/, greedy: !0 }, "class-name": /\b[A-Z]\w*/, keyword: /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/, operator: /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/ }), F.languages.insertBefore("reason", "class-name", { char: { pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/, greedy: !0 }, constructor: /\b[A-Z]\w*\b(?!\s*\.)/, label: { pattern: /\b[a-z]\w*(?=::)/, alias: "symbol" } }), delete F.languages.reason.function, (function(e) {
  for (var n = /\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source, t = 0; t < 2; t++)
    n = n.replace(/<self>/g, function() {
      return n;
    });
  n = n.replace(/<self>/g, function() {
    return /[^\s\S]/.source;
  }), e.languages.rust = { comment: [{ pattern: RegExp(/(^|[^\\])/.source + n), lookbehind: !0, greedy: !0 }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }], string: { pattern: /b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/, greedy: !0 }, char: { pattern: /b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/, greedy: !0 }, attribute: { pattern: /#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/, greedy: !0, alias: "attr-name", inside: { string: null } }, "closure-params": { pattern: /([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/, lookbehind: !0, greedy: !0, inside: { "closure-punctuation": { pattern: /^\||\|$/, alias: "punctuation" }, rest: null } }, "lifetime-annotation": { pattern: /'\w+/, alias: "symbol" }, "fragment-specifier": { pattern: /(\$\w+:)[a-z]+/, lookbehind: !0, alias: "punctuation" }, variable: /\$\w+/, "function-definition": { pattern: /(\bfn\s+)\w+/, lookbehind: !0, alias: "function" }, "type-definition": { pattern: /(\b(?:enum|struct|trait|type|union)\s+)\w+/, lookbehind: !0, alias: "class-name" }, "module-declaration": [{ pattern: /(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/, lookbehind: !0, alias: "namespace" }, { pattern: /(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/, lookbehind: !0, alias: "namespace", inside: { punctuation: /::/ } }], keyword: [/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/, /\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/], function: /\b[a-z_]\w*(?=\s*(?:::\s*<|\())/, macro: { pattern: /\b\w+!/, alias: "property" }, constant: /\b[A-Z_][A-Z_\d]+\b/, "class-name": /\b[A-Z]\w*\b/, namespace: { pattern: /(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/, inside: { punctuation: /::/ } }, number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/, boolean: /\b(?:false|true)\b/, punctuation: /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/, operator: /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/ }, e.languages.rust["closure-params"].inside.rest = e.languages.rust, e.languages.rust.attribute.inside.string = e.languages.rust.string;
})(F), F.languages.go = F.languages.extend("clike", { string: { pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/, lookbehind: !0, greedy: !0 }, keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/, boolean: /\b(?:_|false|iota|nil|true)\b/, number: [/\b0(?:b[01_]+|o[0-7_]+)i?\b/i, /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i, /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i], operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./, builtin: /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/ }), F.languages.insertBefore("go", "string", { char: { pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/, greedy: !0 } }), delete F.languages.go["class-name"], (function(e) {
  var n = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/, t = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function() {
    return n.source;
  });
  e.languages.cpp = e.languages.extend("c", { "class-name": [{ pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, function() {
    return n.source;
  })), lookbehind: !0 }, /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/, /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i, /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/], keyword: n, number: { pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i, greedy: !0 }, operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/, boolean: /\b(?:false|true)\b/ }), e.languages.insertBefore("cpp", "string", { module: { pattern: RegExp(/(\b(?:import|module)\s+)/.source + "(?:" + /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source + "|" + /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, function() {
    return t;
  }) + ")"), lookbehind: !0, greedy: !0, inside: { string: /^[<"][\s\S]+/, operator: /:/, punctuation: /\./ } }, "raw-string": { pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/, alias: "string", greedy: !0 } }), e.languages.insertBefore("cpp", "keyword", { "generic-function": { pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i, inside: { function: /^\w+/, generic: { pattern: /<[\s\S]+/, alias: "class-name", inside: e.languages.cpp } } } }), e.languages.insertBefore("cpp", "operator", { "double-colon": { pattern: /::/, alias: "punctuation" } }), e.languages.insertBefore("cpp", "class-name", { "base-clause": { pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/, lookbehind: !0, greedy: !0, inside: e.languages.extend("cpp", {}) } }), e.languages.insertBefore("inside", "double-colon", { "class-name": /\b[a-z_]\w*\b(?!\s*::)/i }, e.languages.cpp["base-clause"]);
})(F), F.languages.python = { comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0, greedy: !0 }, "string-interpolation": { pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i, greedy: !0, inside: { interpolation: { pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/, lookbehind: !0, inside: { "format-spec": { pattern: /(:)[^:(){}]+(?=\}$)/, lookbehind: !0 }, "conversion-option": { pattern: /![sra](?=[:}]$)/, alias: "punctuation" }, rest: null } }, string: /[\s\S]+/ } }, "triple-quoted-string": { pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i, greedy: !0, alias: "string" }, string: { pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i, greedy: !0 }, function: { pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g, lookbehind: !0 }, "class-name": { pattern: /(\bclass\s+)\w+/i, lookbehind: !0 }, decorator: { pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m, lookbehind: !0, alias: ["annotation", "punctuation"], inside: { punctuation: /\./ } }, keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/, builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/, boolean: /\b(?:False|None|True)\b/, number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i, operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/, punctuation: /[{}[\];(),.:]/ }, F.languages.python["string-interpolation"].inside.interpolation.inside.rest = F.languages.python, F.languages.py = F.languages.python, F.languages.json = { property: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, lookbehind: !0, greedy: !0 }, string: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, lookbehind: !0, greedy: !0 }, comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 }, number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i, punctuation: /[{}[\],]/, operator: /:/, boolean: /\b(?:false|true)\b/, null: { pattern: /\bnull\b/, alias: "keyword" } }, F.languages.webmanifest = F.languages.json;
var jc = {};
Pm(jc, {
  dracula: () => Vm,
  duotoneDark: () => jm,
  duotoneLight: () => Hm,
  github: () => Wm,
  gruvboxMaterialDark: () => wy,
  gruvboxMaterialLight: () => Cy,
  jettwaveDark: () => py,
  jettwaveLight: () => my,
  nightOwl: () => Zm,
  nightOwlLight: () => Ym,
  oceanicNext: () => Qm,
  okaidia: () => ty,
  oneDark: () => by,
  oneLight: () => xy,
  palenight: () => ry,
  shadesOfPurple: () => iy,
  synthwave84: () => ay,
  ultramin: () => uy,
  vsDark: () => Gc,
  vsLight: () => fy
});
var Bm = {
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
}, Vm = Bm, Um = {
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
}, jm = Um, Gm = {
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
}, Hm = Gm, Km = {
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
}, Wm = Km, qm = {
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
}, Zm = qm, Jm = {
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
}, Ym = Jm, De = {
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
}, Xm = {
  plain: {
    backgroundColor: "#282c34",
    color: "#ffffff"
  },
  styles: [
    {
      types: ["attr-name"],
      style: {
        color: De.keyword
      }
    },
    {
      types: ["attr-value"],
      style: {
        color: De.string
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
        color: De.comment
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
        color: De.primitive
      }
    },
    {
      types: ["boolean"],
      style: {
        color: De.boolean
      }
    },
    {
      types: ["tag"],
      style: {
        color: De.tag
      }
    },
    {
      types: ["string"],
      style: {
        color: De.string
      }
    },
    {
      types: ["punctuation"],
      style: {
        color: De.string
      }
    },
    {
      types: ["selector", "char", "builtin", "inserted"],
      style: {
        color: De.char
      }
    },
    {
      types: ["function"],
      style: {
        color: De.function
      }
    },
    {
      types: ["operator", "entity", "url", "variable"],
      style: {
        color: De.variable
      }
    },
    {
      types: ["keyword"],
      style: {
        color: De.keyword
      }
    },
    {
      types: ["atrule", "class-name"],
      style: {
        color: De.className
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
}, Qm = Xm, ey = {
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
}, ty = ey, ny = {
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
}, ry = ny, oy = {
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
}, iy = oy, sy = {
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
}, ay = sy, ly = {
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
}, uy = ly, cy = {
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
}, Gc = cy, dy = {
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
}, fy = dy, gy = {
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
}, py = gy, hy = {
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
}, my = hy, yy = {
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
}, by = yy, vy = {
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
}, xy = vy, _y = {
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
}, wy = _y, Sy = {
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
}, Cy = Sy, ky = (e) => Mn(
  (n) => {
    var t = n, { className: r, style: o, line: i } = t, s = Uc(t, ["className", "style", "line"]);
    const a = Oo(dt({}, s), {
      className: Ro("token-line", r)
    });
    return typeof e == "object" && "plain" in e && (a.style = e.plain), typeof o == "object" && (a.style = dt(dt({}, a.style || {}), o)), a;
  },
  [e]
), Ey = (e) => {
  const n = Mn(
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
  return Mn(
    (t) => {
      var r = t, { token: o, className: i, style: s } = r, a = Uc(r, ["token", "className", "style"]);
      const l = Oo(dt({}, a), {
        className: Ro("token", ...o.types, i),
        children: o.content,
        style: n(o)
      });
      return s != null && (l.style = dt(dt({}, l.style || {}), s)), l;
    },
    [n]
  );
}, Ny = /\r\n|\r|\n/, Fa = (e) => {
  e.length === 0 ? e.push({
    types: ["plain"],
    content: `
`,
    empty: !0
  }) : e.length === 1 && e[0].content === "" && (e[0].content = `
`, e[0].empty = !0);
}, Ia = (e, n) => {
  const t = e.length;
  return t > 0 && e[t - 1] === n ? e : e.concat(n);
}, Ry = (e) => {
  const n = [[]], t = [e], r = [0], o = [e.length];
  let i = 0, s = 0, a = [];
  const l = [a];
  for (; s > -1; ) {
    for (; (i = r[s]++) < o[s]; ) {
      let u, c = n[s];
      const f = t[s][i];
      if (typeof f == "string" ? (c = s > 0 ? c : ["plain"], u = f) : (c = Ia(c, f.type), f.alias && (c = Ia(c, f.alias)), u = f.content), typeof u != "string") {
        s++, n.push(c), t.push(u), r.push(0), o.push(u.length);
        continue;
      }
      const p = u.split(Ny), g = p.length;
      a.push({
        types: c,
        content: p[0]
      });
      for (let h = 1; h < g; h++)
        Fa(a), l.push(a = []), a.push({
          types: c,
          content: p[h]
        });
    }
    s--, n.pop(), t.pop(), r.pop(), o.pop();
  }
  return Fa(a), l;
}, Oa = Ry, Ty = ({ prism: e, code: n, grammar: t, language: r }) => Bn(() => {
  if (t == null)
    return Oa([n]);
  const o = {
    code: n,
    grammar: t,
    language: r,
    tokens: []
  };
  return e.hooks.run("before-tokenize", o), o.tokens = e.tokenize(n, t), e.hooks.run("after-tokenize", o), Oa(o.tokens);
}, [
  n,
  t,
  r,
  // prism is a stable import
  e
]), Ay = (e, n) => {
  const { plain: t } = e, r = e.styles.reduce((o, i) => {
    const { languages: s, style: a } = i;
    return s && !s.includes(n) || i.types.forEach((l) => {
      const u = dt(dt({}, o[l]), a);
      o[l] = u;
    }), o;
  }, {});
  return r.root = t, r.plain = Oo(dt({}, t), { backgroundColor: void 0 }), r;
}, Fy = Ay, Iy = ({
  children: e,
  language: n,
  code: t,
  theme: r,
  prism: o
}) => {
  const i = n.toLowerCase(), s = Fy(r, i), a = ky(s), l = Ey(s), u = o.languages[i], c = Ty({ prism: o, language: i, code: t, grammar: u });
  return e({
    tokens: c,
    className: `prism-code language-${i}`,
    style: s != null ? s.root : {},
    getLineProps: a,
    getTokenProps: l
  });
}, Oy = (e) => $n(Iy, Oo(dt({}, e), {
  prism: e.prism || F,
  theme: e.theme || Gc,
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
const $y = Q(
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
), My = C.forwardRef(
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
    const [p, g] = C.useState(!1), [h, m] = C.useState(l), v = () => {
      navigator.clipboard.writeText(t).then(() => {
        g(!0), setTimeout(() => {
          g(!1);
        }, 2e3);
      }).catch((_) => {
        console.error("Failed to copy code:", _);
      });
    }, b = ((_) => {
      if (!_) return /* @__PURE__ */ new Set();
      if (Array.isArray(_)) return new Set(_);
      const w = /* @__PURE__ */ new Set();
      return _.split(",").forEach((k) => {
        const N = k.trim();
        if (N.includes("-")) {
          const E = N.split("-"), R = Number(E[0]), O = Number(E[1]);
          if (!isNaN(R) && !isNaN(O))
            for (let I = R; I <= O; I++)
              w.add(I);
        } else {
          const E = Number(N);
          isNaN(E) || w.add(E);
        }
      }), w;
    })(c);
    return /* @__PURE__ */ L("div", { ref: f, className: P($y({ size: n }), e), ...d, children: [
      (s || a) && /* @__PURE__ */ L("div", { className: "flex items-center justify-between border-b border-slate-800 bg-slate-900/50 px-4 py-2", children: [
        /* @__PURE__ */ L("div", { className: "flex items-center gap-2", children: [
          s && /* @__PURE__ */ x("span", { className: "font-mono text-xs text-slate-400", children: s }),
          a && /* @__PURE__ */ x(
            "button",
            {
              onClick: () => {
                m(!h);
              },
              className: "ml-2 rounded p-1 text-slate-400 transition-colors hover:bg-slate-800 hover:text-slate-200",
              "aria-label": h ? "Expand code" : "Collapse code",
              children: h ? /* @__PURE__ */ x(Ss, { className: "h-4 w-4" }) : /* @__PURE__ */ x(Pu, { className: "h-4 w-4" })
            }
          )
        ] }),
        i && !h && /* @__PURE__ */ x(
          "button",
          {
            onClick: v,
            className: "flex items-center gap-1.5 rounded px-2 py-1 text-xs text-slate-400 transition-colors hover:bg-slate-800 hover:text-slate-200",
            "aria-label": "Copy code to clipboard",
            children: p ? /* @__PURE__ */ L(tt, { children: [
              /* @__PURE__ */ x(Ii, { className: "h-3.5 w-3.5" }),
              /* @__PURE__ */ x("span", { children: "Copied!" })
            ] }) : /* @__PURE__ */ L(tt, { children: [
              /* @__PURE__ */ x(xa, { className: "h-3.5 w-3.5" }),
              /* @__PURE__ */ x("span", { children: "Copy" })
            ] })
          }
        )
      ] }),
      !h && /* @__PURE__ */ x(
        "div",
        {
          className: "overflow-auto",
          style: u ? { maxHeight: `${u}px` } : void 0,
          children: /* @__PURE__ */ x(Oy, { theme: jc.nightOwl, code: t.trim(), language: r, children: ({ className: _, style: w, tokens: S, getLineProps: k, getTokenProps: N }) => /* @__PURE__ */ x("pre", { className: P("p-4 font-mono", _), style: w, children: S.map((E, R) => {
            const O = R + 1, I = b.has(O), B = k({ line: E });
            return /* @__PURE__ */ L(
              "div",
              {
                ...B,
                className: P(
                  B.className,
                  "table-row",
                  I && "bg-blue-500/10"
                ),
                children: [
                  o && /* @__PURE__ */ x("span", { className: "table-cell w-8 pr-4 text-right text-slate-500 select-none", children: O }),
                  /* @__PURE__ */ x("span", { className: "table-cell", children: E.map((D, U) => /* @__PURE__ */ x("span", { ...N({ token: D }) }, U)) })
                ]
              },
              R
            );
          }) }) })
        }
      ),
      i && !s && !a && /* @__PURE__ */ x(
        "button",
        {
          onClick: v,
          className: "absolute top-2 right-2 rounded bg-slate-800/80 p-2 text-slate-400 backdrop-blur-sm transition-colors hover:bg-slate-700 hover:text-slate-200",
          "aria-label": "Copy code to clipboard",
          children: p ? /* @__PURE__ */ x(Ii, { className: "h-4 w-4" }) : /* @__PURE__ */ x(xa, { className: "h-4 w-4" })
        }
      )
    ] });
  }
);
My.displayName = "CodeBlock";
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
function Be(e, n) {
  return (t) => {
    n.setState((r) => ({
      ...r,
      [e]: Ft(t, r[e])
    }));
  };
}
function $o(e) {
  return e instanceof Function;
}
function Py(e) {
  return Array.isArray(e) && e.every((n) => typeof n == "number");
}
function Ly(e, n) {
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
function W(e, n, t, r) {
  return {
    debug: () => {
      var o;
      return (o = e == null ? void 0 : e.debugAll) != null ? o : e[n];
    },
    key: process.env.NODE_ENV === "development" && t,
    onChange: r
  };
}
function Dy(e, n, t, r) {
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
    }), W(e.options, "debugCells", "cell.getContext"))
  };
  return e._features.forEach((s) => {
    s.createCell == null || s.createCell(i, t, n, e);
  }, {}), i;
}
function zy(e, n, t, r) {
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
    }, W(e.options, "debugColumns", "column.getFlatColumns")),
    getLeafColumns: K(() => [e._getOrderColumnsFn()], (f) => {
      var p;
      if ((p = d.columns) != null && p.length) {
        let g = d.columns.flatMap((h) => h.getLeafColumns());
        return f(g);
      }
      return [d];
    }, W(e.options, "debugColumns", "column.getLeafColumns"))
  };
  for (const f of e._features)
    f.createColumn == null || f.createColumn(d, e);
  return d;
}
const Re = "debugHeaders";
function $a(e, n, t) {
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
const By = {
  createTable: (e) => {
    e.getHeaderGroups = K(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (n, t, r, o) => {
      var i, s;
      const a = (i = r == null ? void 0 : r.map((d) => t.find((f) => f.id === d)).filter(Boolean)) != null ? i : [], l = (s = o == null ? void 0 : o.map((d) => t.find((f) => f.id === d)).filter(Boolean)) != null ? s : [], u = t.filter((d) => !(r != null && r.includes(d.id)) && !(o != null && o.includes(d.id)));
      return Mr(n, [...a, ...u, ...l], e);
    }, W(e.options, Re, "getHeaderGroups")), e.getCenterHeaderGroups = K(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (n, t, r, o) => (t = t.filter((i) => !(r != null && r.includes(i.id)) && !(o != null && o.includes(i.id))), Mr(n, t, e, "center")), W(e.options, Re, "getCenterHeaderGroups")), e.getLeftHeaderGroups = K(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left], (n, t, r) => {
      var o;
      const i = (o = r == null ? void 0 : r.map((s) => t.find((a) => a.id === s)).filter(Boolean)) != null ? o : [];
      return Mr(n, i, e, "left");
    }, W(e.options, Re, "getLeftHeaderGroups")), e.getRightHeaderGroups = K(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right], (n, t, r) => {
      var o;
      const i = (o = r == null ? void 0 : r.map((s) => t.find((a) => a.id === s)).filter(Boolean)) != null ? o : [];
      return Mr(n, i, e, "right");
    }, W(e.options, Re, "getRightHeaderGroups")), e.getFooterGroups = K(() => [e.getHeaderGroups()], (n) => [...n].reverse(), W(e.options, Re, "getFooterGroups")), e.getLeftFooterGroups = K(() => [e.getLeftHeaderGroups()], (n) => [...n].reverse(), W(e.options, Re, "getLeftFooterGroups")), e.getCenterFooterGroups = K(() => [e.getCenterHeaderGroups()], (n) => [...n].reverse(), W(e.options, Re, "getCenterFooterGroups")), e.getRightFooterGroups = K(() => [e.getRightHeaderGroups()], (n) => [...n].reverse(), W(e.options, Re, "getRightFooterGroups")), e.getFlatHeaders = K(() => [e.getHeaderGroups()], (n) => n.map((t) => t.headers).flat(), W(e.options, Re, "getFlatHeaders")), e.getLeftFlatHeaders = K(() => [e.getLeftHeaderGroups()], (n) => n.map((t) => t.headers).flat(), W(e.options, Re, "getLeftFlatHeaders")), e.getCenterFlatHeaders = K(() => [e.getCenterHeaderGroups()], (n) => n.map((t) => t.headers).flat(), W(e.options, Re, "getCenterFlatHeaders")), e.getRightFlatHeaders = K(() => [e.getRightHeaderGroups()], (n) => n.map((t) => t.headers).flat(), W(e.options, Re, "getRightFlatHeaders")), e.getCenterLeafHeaders = K(() => [e.getCenterFlatHeaders()], (n) => n.filter((t) => {
      var r;
      return !((r = t.subHeaders) != null && r.length);
    }), W(e.options, Re, "getCenterLeafHeaders")), e.getLeftLeafHeaders = K(() => [e.getLeftFlatHeaders()], (n) => n.filter((t) => {
      var r;
      return !((r = t.subHeaders) != null && r.length);
    }), W(e.options, Re, "getLeftLeafHeaders")), e.getRightLeafHeaders = K(() => [e.getRightFlatHeaders()], (n) => n.filter((t) => {
      var r;
      return !((r = t.subHeaders) != null && r.length);
    }), W(e.options, Re, "getRightLeafHeaders")), e.getLeafHeaders = K(() => [e.getLeftHeaderGroups(), e.getCenterHeaderGroups(), e.getRightHeaderGroups()], (n, t, r) => {
      var o, i, s, a, l, u;
      return [...(o = (i = n[0]) == null ? void 0 : i.headers) != null ? o : [], ...(s = (a = t[0]) == null ? void 0 : a.headers) != null ? s : [], ...(l = (u = r[0]) == null ? void 0 : u.headers) != null ? l : []].map((c) => c.getLeafHeaders()).flat();
    }, W(e.options, Re, "getLeafHeaders"));
  }
};
function Mr(e, n, t, r) {
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
      let b, _ = !1;
      if (y && m.column.parent ? b = m.column.parent : (b = m.column, _ = !0), v && (v == null ? void 0 : v.column) === b)
        v.subHeaders.push(m);
      else {
        const w = $a(t, b, {
          id: [r, p, b.id, m == null ? void 0 : m.id].filter(Boolean).join("_"),
          isPlaceholder: _,
          placeholderId: _ ? `${h.filter((S) => S.column === b).length}` : void 0,
          depth: p,
          index: h.length
        });
        w.subHeaders.push(m), h.push(w);
      }
      g.headers.push(m), m.headerGroup = g;
    }), l.push(g), p > 0 && u(h, p - 1);
  }, c = n.map((f, p) => $a(t, f, {
    depth: s,
    index: p
  }));
  u(c, s - 1), l.reverse();
  const d = (f) => f.filter((g) => g.column.getIsVisible()).map((g) => {
    let h = 0, m = 0, v = [0];
    g.subHeaders && g.subHeaders.length ? (v = [], d(g.subHeaders).forEach((b) => {
      let {
        colSpan: _,
        rowSpan: w
      } = b;
      h += _, v.push(w);
    })) : h = 1;
    const y = Math.min(...v);
    return m = m + y, g.colSpan = h, g.rowSpan = m, {
      colSpan: h,
      rowSpan: m
    };
  });
  return d((o = (i = l[0]) == null ? void 0 : i.headers) != null ? o : []), l;
}
const Ts = (e, n, t, r, o, i, s) => {
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
    getLeafRows: () => Ly(a.subRows, (l) => l.subRows),
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
    getAllCells: K(() => [e.getAllLeafColumns()], (l) => l.map((u) => Dy(e, a, u, u.id)), W(e.options, "debugRows", "getAllCells")),
    _getAllCellsByColumnId: K(() => [a.getAllCells()], (l) => l.reduce((u, c) => (u[c.column.id] = c, u), {}), W(e.options, "debugRows", "getAllCellsByColumnId"))
  };
  for (let l = 0; l < e._features.length; l++) {
    const u = e._features[l];
    u == null || u.createRow == null || u.createRow(a, e);
  }
  return a;
}, Vy = {
  createColumn: (e, n) => {
    e._getFacetedRowModel = n.options.getFacetedRowModel && n.options.getFacetedRowModel(n, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : n.getPreFilteredRowModel(), e._getFacetedUniqueValues = n.options.getFacetedUniqueValues && n.options.getFacetedUniqueValues(n, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = n.options.getFacetedMinMaxValues && n.options.getFacetedMinMaxValues(n, e.id), e.getFacetedMinMaxValues = () => {
      if (e._getFacetedMinMaxValues)
        return e._getFacetedMinMaxValues();
    };
  }
}, Hc = (e, n, t) => {
  var r, o;
  const i = t == null || (r = t.toString()) == null ? void 0 : r.toLowerCase();
  return !!(!((o = e.getValue(n)) == null || (o = o.toString()) == null || (o = o.toLowerCase()) == null) && o.includes(i));
};
Hc.autoRemove = (e) => Xe(e);
const Kc = (e, n, t) => {
  var r;
  return !!(!((r = e.getValue(n)) == null || (r = r.toString()) == null) && r.includes(t));
};
Kc.autoRemove = (e) => Xe(e);
const Wc = (e, n, t) => {
  var r;
  return ((r = e.getValue(n)) == null || (r = r.toString()) == null ? void 0 : r.toLowerCase()) === (t == null ? void 0 : t.toLowerCase());
};
Wc.autoRemove = (e) => Xe(e);
const qc = (e, n, t) => {
  var r;
  return (r = e.getValue(n)) == null ? void 0 : r.includes(t);
};
qc.autoRemove = (e) => Xe(e);
const Zc = (e, n, t) => !t.some((r) => {
  var o;
  return !((o = e.getValue(n)) != null && o.includes(r));
});
Zc.autoRemove = (e) => Xe(e) || !(e != null && e.length);
const Jc = (e, n, t) => t.some((r) => {
  var o;
  return (o = e.getValue(n)) == null ? void 0 : o.includes(r);
});
Jc.autoRemove = (e) => Xe(e) || !(e != null && e.length);
const Yc = (e, n, t) => e.getValue(n) === t;
Yc.autoRemove = (e) => Xe(e);
const Xc = (e, n, t) => e.getValue(n) == t;
Xc.autoRemove = (e) => Xe(e);
const As = (e, n, t) => {
  let [r, o] = t;
  const i = e.getValue(n);
  return i >= r && i <= o;
};
As.resolveFilterValue = (e) => {
  let [n, t] = e, r = typeof n != "number" ? parseFloat(n) : n, o = typeof t != "number" ? parseFloat(t) : t, i = n === null || Number.isNaN(r) ? -1 / 0 : r, s = t === null || Number.isNaN(o) ? 1 / 0 : o;
  if (i > s) {
    const a = i;
    i = s, s = a;
  }
  return [i, s];
};
As.autoRemove = (e) => Xe(e) || Xe(e[0]) && Xe(e[1]);
const vt = {
  includesString: Hc,
  includesStringSensitive: Kc,
  equalsString: Wc,
  arrIncludes: qc,
  arrIncludesAll: Zc,
  arrIncludesSome: Jc,
  equals: Yc,
  weakEquals: Xc,
  inNumberRange: As
};
function Xe(e) {
  return e == null || e === "";
}
const Uy = {
  getDefaultColumnDef: () => ({
    filterFn: "auto"
  }),
  getInitialState: (e) => ({
    columnFilters: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnFiltersChange: Be("columnFilters", e),
    filterFromLeafRows: !1,
    maxLeafRowFilterDepth: 100
  }),
  createColumn: (e, n) => {
    e.getAutoFilterFn = () => {
      const t = n.getCoreRowModel().flatRows[0], r = t == null ? void 0 : t.getValue(e.id);
      return typeof r == "string" ? vt.includesString : typeof r == "number" ? vt.inNumberRange : typeof r == "boolean" || r !== null && typeof r == "object" ? vt.equals : Array.isArray(r) ? vt.arrIncludes : vt.weakEquals;
    }, e.getFilterFn = () => {
      var t, r;
      return $o(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (
        // @ts-ignore
        (t = (r = n.options.filterFns) == null ? void 0 : r[e.columnDef.filterFn]) != null ? t : vt[e.columnDef.filterFn]
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
        if (Ma(o, s, e)) {
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
            if (Ma(l, s.value, a))
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
function Ma(e, n, t) {
  return (e && e.autoRemove ? e.autoRemove(n, t) : !1) || typeof n > "u" || typeof n == "string" && !n;
}
const jy = (e, n, t) => t.reduce((r, o) => {
  const i = o.getValue(e);
  return r + (typeof i == "number" ? i : 0);
}, 0), Gy = (e, n, t) => {
  let r;
  return t.forEach((o) => {
    const i = o.getValue(e);
    i != null && (r > i || r === void 0 && i >= i) && (r = i);
  }), r;
}, Hy = (e, n, t) => {
  let r;
  return t.forEach((o) => {
    const i = o.getValue(e);
    i != null && (r < i || r === void 0 && i >= i) && (r = i);
  }), r;
}, Ky = (e, n, t) => {
  let r, o;
  return t.forEach((i) => {
    const s = i.getValue(e);
    s != null && (r === void 0 ? s >= s && (r = o = s) : (r > s && (r = s), o < s && (o = s)));
  }), [r, o];
}, Wy = (e, n) => {
  let t = 0, r = 0;
  if (n.forEach((o) => {
    let i = o.getValue(e);
    i != null && (i = +i) >= i && (++t, r += i);
  }), t) return r / t;
}, qy = (e, n) => {
  if (!n.length)
    return;
  const t = n.map((i) => i.getValue(e));
  if (!Py(t))
    return;
  if (t.length === 1)
    return t[0];
  const r = Math.floor(t.length / 2), o = t.sort((i, s) => i - s);
  return t.length % 2 !== 0 ? o[r] : (o[r - 1] + o[r]) / 2;
}, Zy = (e, n) => Array.from(new Set(n.map((t) => t.getValue(e))).values()), Jy = (e, n) => new Set(n.map((t) => t.getValue(e))).size, Yy = (e, n) => n.length, oi = {
  sum: jy,
  min: Gy,
  max: Hy,
  extent: Ky,
  mean: Wy,
  median: qy,
  unique: Zy,
  uniqueCount: Jy,
  count: Yy
}, Xy = {
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
    onGroupingChange: Be("grouping", e),
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
        return oi.sum;
      if (Object.prototype.toString.call(r) === "[object Date]")
        return oi.extent;
    }, e.getAggregationFn = () => {
      var t, r;
      if (!e)
        throw new Error();
      return $o(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (t = (r = n.options.aggregationFns) == null ? void 0 : r[e.columnDef.aggregationFn]) != null ? t : oi[e.columnDef.aggregationFn];
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
function Qy(e, n, t) {
  if (!(n != null && n.length) || !t)
    return e;
  const r = e.filter((i) => !n.includes(i.id));
  return t === "remove" ? r : [...n.map((i) => e.find((s) => s.id === i)).filter(Boolean), ...r];
}
const eb = {
  getInitialState: (e) => ({
    columnOrder: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnOrderChange: Be("columnOrder", e)
  }),
  createColumn: (e, n) => {
    e.getIndex = K((t) => [ur(n, t)], (t) => t.findIndex((r) => r.id === e.id), W(n.options, "debugColumns", "getIndex")), e.getIsFirstColumn = (t) => {
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
      return Qy(i, t, r);
    }, W(e.options, "debugTable", "_getOrderColumnsFn"));
  }
}, ii = () => ({
  left: [],
  right: []
}), tb = {
  getInitialState: (e) => ({
    columnPinning: ii(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnPinningChange: Be("columnPinning", e)
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
    }, W(n.options, "debugRows", "getCenterVisibleCells")), e.getLeftVisibleCells = K(() => [e._getAllVisibleCells(), n.getState().columnPinning.left], (t, r) => (r ?? []).map((i) => t.find((s) => s.column.id === i)).filter(Boolean).map((i) => ({
      ...i,
      position: "left"
    })), W(n.options, "debugRows", "getLeftVisibleCells")), e.getRightVisibleCells = K(() => [e._getAllVisibleCells(), n.getState().columnPinning.right], (t, r) => (r ?? []).map((i) => t.find((s) => s.column.id === i)).filter(Boolean).map((i) => ({
      ...i,
      position: "right"
    })), W(n.options, "debugRows", "getRightVisibleCells"));
  },
  createTable: (e) => {
    e.setColumnPinning = (n) => e.options.onColumnPinningChange == null ? void 0 : e.options.onColumnPinningChange(n), e.resetColumnPinning = (n) => {
      var t, r;
      return e.setColumnPinning(n ? ii() : (t = (r = e.initialState) == null ? void 0 : r.columnPinning) != null ? t : ii());
    }, e.getIsSomeColumnsPinned = (n) => {
      var t;
      const r = e.getState().columnPinning;
      if (!n) {
        var o, i;
        return !!((o = r.left) != null && o.length || (i = r.right) != null && i.length);
      }
      return !!((t = r[n]) != null && t.length);
    }, e.getLeftLeafColumns = K(() => [e.getAllLeafColumns(), e.getState().columnPinning.left], (n, t) => (t ?? []).map((r) => n.find((o) => o.id === r)).filter(Boolean), W(e.options, "debugColumns", "getLeftLeafColumns")), e.getRightLeafColumns = K(() => [e.getAllLeafColumns(), e.getState().columnPinning.right], (n, t) => (t ?? []).map((r) => n.find((o) => o.id === r)).filter(Boolean), W(e.options, "debugColumns", "getRightLeafColumns")), e.getCenterLeafColumns = K(() => [e.getAllLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (n, t, r) => {
      const o = [...t ?? [], ...r ?? []];
      return n.filter((i) => !o.includes(i.id));
    }, W(e.options, "debugColumns", "getCenterLeafColumns"));
  }
};
function nb(e) {
  return e || (typeof document < "u" ? document : null);
}
const Pr = {
  size: 150,
  minSize: 20,
  maxSize: Number.MAX_SAFE_INTEGER
}, si = () => ({
  startOffset: null,
  startSize: null,
  deltaOffset: null,
  deltaPercentage: null,
  isResizingColumn: !1,
  columnSizingStart: []
}), rb = {
  getDefaultColumnDef: () => Pr,
  getInitialState: (e) => ({
    columnSizing: {},
    columnSizingInfo: si(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    columnResizeMode: "onEnd",
    columnResizeDirection: "ltr",
    onColumnSizingChange: Be("columnSizing", e),
    onColumnSizingInfoChange: Be("columnSizingInfo", e)
  }),
  createColumn: (e, n) => {
    e.getSize = () => {
      var t, r, o;
      const i = n.getState().columnSizing[e.id];
      return Math.min(Math.max((t = e.columnDef.minSize) != null ? t : Pr.minSize, (r = i ?? e.columnDef.size) != null ? r : Pr.size), (o = e.columnDef.maxSize) != null ? o : Pr.maxSize);
    }, e.getStart = K((t) => [t, ur(n, t), n.getState().columnSizing], (t, r) => r.slice(0, e.getIndex(t)).reduce((o, i) => o + i.getSize(), 0), W(n.options, "debugColumns", "getStart")), e.getAfter = K((t) => [t, ur(n, t), n.getState().columnSizing], (t, r) => r.slice(e.getIndex(t) + 1).reduce((o, i) => o + i.getSize(), 0), W(n.options, "debugColumns", "getAfter")), e.resetSize = () => {
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
        if (!r || !o || (i.persist == null || i.persist(), ai(i) && i.touches && i.touches.length > 1))
          return;
        const s = e.getSize(), a = e ? e.getLeafHeaders().map((v) => [v.column.id, v.column.getSize()]) : [[r.id, r.getSize()]], l = ai(i) ? Math.round(i.touches[0].clientX) : i.clientX, u = {}, c = (v, y) => {
          typeof y == "number" && (n.setColumnSizingInfo((b) => {
            var _, w;
            const S = n.options.columnResizeDirection === "rtl" ? -1 : 1, k = (y - ((_ = b == null ? void 0 : b.startOffset) != null ? _ : 0)) * S, N = Math.max(k / ((w = b == null ? void 0 : b.startSize) != null ? w : 0), -0.999999);
            return b.columnSizingStart.forEach((E) => {
              let [R, O] = E;
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
        }, p = nb(t), g = {
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
        }, m = ob() ? {
          passive: !1
        } : !1;
        ai(i) ? (p == null || p.addEventListener("touchmove", h.moveHandler, m), p == null || p.addEventListener("touchend", h.upHandler, m)) : (p == null || p.addEventListener("mousemove", g.moveHandler, m), p == null || p.addEventListener("mouseup", g.upHandler, m)), n.setColumnSizingInfo((v) => ({
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
      e.setColumnSizingInfo(n ? si() : (t = e.initialState.columnSizingInfo) != null ? t : si());
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
let Lr = null;
function ob() {
  if (typeof Lr == "boolean") return Lr;
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
  return Lr = e, Lr;
}
function ai(e) {
  return e.type === "touchstart";
}
const ib = {
  getInitialState: (e) => ({
    columnVisibility: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnVisibilityChange: Be("columnVisibility", e)
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
    e._getAllVisibleCells = K(() => [e.getAllCells(), n.getState().columnVisibility], (t) => t.filter((r) => r.column.getIsVisible()), W(n.options, "debugRows", "_getAllVisibleCells")), e.getVisibleCells = K(() => [e.getLeftVisibleCells(), e.getCenterVisibleCells(), e.getRightVisibleCells()], (t, r, o) => [...t, ...r, ...o], W(n.options, "debugRows", "getVisibleCells"));
  },
  createTable: (e) => {
    const n = (t, r) => K(() => [r(), r().filter((o) => o.getIsVisible()).map((o) => o.id).join("_")], (o) => o.filter((i) => i.getIsVisible == null ? void 0 : i.getIsVisible()), W(e.options, "debugColumns", t));
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
const sb = {
  createTable: (e) => {
    e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
      if (e._getGlobalFacetedMinMaxValues)
        return e._getGlobalFacetedMinMaxValues();
    };
  }
}, ab = {
  getInitialState: (e) => ({
    globalFilter: void 0,
    ...e
  }),
  getDefaultOptions: (e) => ({
    onGlobalFilterChange: Be("globalFilter", e),
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
    e.getGlobalAutoFilterFn = () => vt.includesString, e.getGlobalFilterFn = () => {
      var n, t;
      const {
        globalFilterFn: r
      } = e.options;
      return $o(r) ? r : r === "auto" ? e.getGlobalAutoFilterFn() : (n = (t = e.options.filterFns) == null ? void 0 : t[r]) != null ? n : vt[r];
    }, e.setGlobalFilter = (n) => {
      e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(n);
    }, e.resetGlobalFilter = (n) => {
      e.setGlobalFilter(n ? void 0 : e.initialState.globalFilter);
    };
  }
}, lb = {
  getInitialState: (e) => ({
    expanded: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onExpandedChange: Be("expanded", e),
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
}, Li = 0, Di = 10, li = () => ({
  pageIndex: Li,
  pageSize: Di
}), ub = {
  getInitialState: (e) => ({
    ...e,
    pagination: {
      ...li(),
      ...e == null ? void 0 : e.pagination
    }
  }),
  getDefaultOptions: (e) => ({
    onPaginationChange: Be("pagination", e)
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
      e.setPagination(r ? li() : (o = e.initialState.pagination) != null ? o : li());
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
      e.setPageIndex(r ? Li : (o = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageIndex) != null ? o : Li);
    }, e.resetPageSize = (r) => {
      var o, i;
      e.setPageSize(r ? Di : (o = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageSize) != null ? o : Di);
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
    }, W(e.options, "debugTable", "getPageOptions")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
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
}, ui = () => ({
  top: [],
  bottom: []
}), cb = {
  getInitialState: (e) => ({
    rowPinning: ui(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowPinningChange: Be("rowPinning", e)
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
      return e.setRowPinning(n ? ui() : (t = (r = e.initialState) == null ? void 0 : r.rowPinning) != null ? t : ui());
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
    }, e.getTopRows = K(() => [e.getRowModel().rows, e.getState().rowPinning.top], (n, t) => e._getPinnedRows(n, t, "top"), W(e.options, "debugRows", "getTopRows")), e.getBottomRows = K(() => [e.getRowModel().rows, e.getState().rowPinning.bottom], (n, t) => e._getPinnedRows(n, t, "bottom"), W(e.options, "debugRows", "getBottomRows")), e.getCenterRows = K(() => [e.getRowModel().rows, e.getState().rowPinning.top, e.getState().rowPinning.bottom], (n, t, r) => {
      const o = /* @__PURE__ */ new Set([...t ?? [], ...r ?? []]);
      return n.filter((i) => !o.has(i.id));
    }, W(e.options, "debugRows", "getCenterRows"));
  }
}, db = {
  getInitialState: (e) => ({
    rowSelection: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowSelectionChange: Be("rowSelection", e),
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
        zi(o, i.id, r, !0, e);
      }), o;
    }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = K(() => [e.getState().rowSelection, e.getCoreRowModel()], (n, t) => Object.keys(n).length ? ci(e, t) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, W(e.options, "debugTable", "getSelectedRowModel")), e.getFilteredSelectedRowModel = K(() => [e.getState().rowSelection, e.getFilteredRowModel()], (n, t) => Object.keys(n).length ? ci(e, t) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, W(e.options, "debugTable", "getFilteredSelectedRowModel")), e.getGroupedSelectedRowModel = K(() => [e.getState().rowSelection, e.getSortedRowModel()], (n, t) => Object.keys(n).length ? ci(e, t) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, W(e.options, "debugTable", "getGroupedSelectedRowModel")), e.getIsAllRowsSelected = () => {
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
        return zi(a, e.id, t, (s = r == null ? void 0 : r.selectChildren) != null ? s : !0, n), a;
      });
    }, e.getIsSelected = () => {
      const {
        rowSelection: t
      } = n.getState();
      return Fs(e, t);
    }, e.getIsSomeSelected = () => {
      const {
        rowSelection: t
      } = n.getState();
      return Bi(e, t) === "some";
    }, e.getIsAllSubRowsSelected = () => {
      const {
        rowSelection: t
      } = n.getState();
      return Bi(e, t) === "all";
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
}, zi = (e, n, t, r, o) => {
  var i;
  const s = o.getRow(n, !0);
  t ? (s.getCanMultiSelect() || Object.keys(e).forEach((a) => delete e[a]), s.getCanSelect() && (e[n] = !0)) : delete e[n], r && (i = s.subRows) != null && i.length && s.getCanSelectSubRows() && s.subRows.forEach((a) => zi(e, a.id, t, r, o));
};
function ci(e, n) {
  const t = e.getState().rowSelection, r = [], o = {}, i = function(s, a) {
    return s.map((l) => {
      var u;
      const c = Fs(l, t);
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
function Fs(e, n) {
  var t;
  return (t = n[e.id]) != null ? t : !1;
}
function Bi(e, n, t) {
  var r;
  if (!((r = e.subRows) != null && r.length)) return !1;
  let o = !0, i = !1;
  return e.subRows.forEach((s) => {
    if (!(i && !o) && (s.getCanSelect() && (Fs(s, n) ? i = !0 : o = !1), s.subRows && s.subRows.length)) {
      const a = Bi(s, n);
      a === "all" ? i = !0 : (a === "some" && (i = !0), o = !1);
    }
  }), o ? "all" : i ? "some" : !1;
}
const Vi = /([0-9]+)/gm, fb = (e, n, t) => Qc(Dt(e.getValue(t)).toLowerCase(), Dt(n.getValue(t)).toLowerCase()), gb = (e, n, t) => Qc(Dt(e.getValue(t)), Dt(n.getValue(t))), pb = (e, n, t) => Is(Dt(e.getValue(t)).toLowerCase(), Dt(n.getValue(t)).toLowerCase()), hb = (e, n, t) => Is(Dt(e.getValue(t)), Dt(n.getValue(t))), mb = (e, n, t) => {
  const r = e.getValue(t), o = n.getValue(t);
  return r > o ? 1 : r < o ? -1 : 0;
}, yb = (e, n, t) => Is(e.getValue(t), n.getValue(t));
function Is(e, n) {
  return e === n ? 0 : e > n ? 1 : -1;
}
function Dt(e) {
  return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
}
function Qc(e, n) {
  const t = e.split(Vi).filter(Boolean), r = n.split(Vi).filter(Boolean);
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
const tr = {
  alphanumeric: fb,
  alphanumericCaseSensitive: gb,
  text: pb,
  textCaseSensitive: hb,
  datetime: mb,
  basic: yb
}, bb = {
  getInitialState: (e) => ({
    sorting: [],
    ...e
  }),
  getDefaultColumnDef: () => ({
    sortingFn: "auto",
    sortUndefined: 1
  }),
  getDefaultOptions: (e) => ({
    onSortingChange: Be("sorting", e),
    isMultiSortEvent: (n) => n.shiftKey
  }),
  createColumn: (e, n) => {
    e.getAutoSortingFn = () => {
      const t = n.getFilteredRowModel().flatRows.slice(10);
      let r = !1;
      for (const o of t) {
        const i = o == null ? void 0 : o.getValue(e.id);
        if (Object.prototype.toString.call(i) === "[object Date]")
          return tr.datetime;
        if (typeof i == "string" && (r = !0, i.split(Vi).length > 1))
          return tr.alphanumeric;
      }
      return r ? tr.text : tr.basic;
    }, e.getAutoSortDir = () => {
      const t = n.getFilteredRowModel().flatRows[0];
      return typeof (t == null ? void 0 : t.getValue(e.id)) == "string" ? "asc" : "desc";
    }, e.getSortingFn = () => {
      var t, r;
      if (!e)
        throw new Error();
      return $o(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (t = (r = n.options.sortingFns) == null ? void 0 : r[e.columnDef.sortingFn]) != null ? t : tr[e.columnDef.sortingFn];
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
}, vb = [
  By,
  ib,
  eb,
  tb,
  Vy,
  Uy,
  sb,
  //depends on ColumnFaceting
  ab,
  //depends on ColumnFiltering
  bb,
  Xy,
  //depends on RowSorting
  lb,
  ub,
  cb,
  db,
  rb
];
function xb(e) {
  var n, t;
  process.env.NODE_ENV !== "production" && (e.debugAll || e.debugTable) && console.info("Creating Table Instance...");
  const r = [...vb, ...(n = e._features) != null ? n : []];
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
    }, W(e, "debugColumns", "_getDefaultColumnDef")),
    _getColumnDefs: () => o.options.columns,
    getAllColumns: K(() => [o._getColumnDefs()], (f) => {
      const p = function(g, h, m) {
        return m === void 0 && (m = 0), g.map((v) => {
          const y = zy(o, v, m, h), b = v;
          return y.columns = b.columns ? p(b.columns, y, m + 1) : [], y;
        });
      };
      return p(f);
    }, W(e, "debugColumns", "getAllColumns")),
    getAllFlatColumns: K(() => [o.getAllColumns()], (f) => f.flatMap((p) => p.getFlatColumns()), W(e, "debugColumns", "getAllFlatColumns")),
    _getAllFlatColumnsById: K(() => [o.getAllFlatColumns()], (f) => f.reduce((p, g) => (p[g.id] = g, p), {}), W(e, "debugColumns", "getAllFlatColumnsById")),
    getAllLeafColumns: K(() => [o.getAllColumns(), o._getOrderColumnsFn()], (f, p) => {
      let g = f.flatMap((h) => h.getLeafColumns());
      return p(g);
    }, W(e, "debugColumns", "getAllLeafColumns")),
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
function _b() {
  return (e) => K(() => [e.options.data], (n) => {
    const t = {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, r = function(o, i, s) {
      i === void 0 && (i = 0);
      const a = [];
      for (let u = 0; u < o.length; u++) {
        const c = Ts(e, e._getRowId(o[u], u, s), o[u], u, i, void 0, s == null ? void 0 : s.id);
        if (t.flatRows.push(c), t.rowsById[c.id] = c, a.push(c), e.options.getSubRows) {
          var l;
          c.originalSubRows = e.options.getSubRows(o[u], u), (l = c.originalSubRows) != null && l.length && (c.subRows = r(c.originalSubRows, i + 1, c));
        }
      }
      return a;
    };
    return t.rows = r(n), t;
  }, W(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
}
function wb(e) {
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
function Sb(e, n, t) {
  return t.options.filterFromLeafRows ? Cb(e, n, t) : kb(e, n, t);
}
function Cb(e, n, t) {
  var r;
  const o = [], i = {}, s = (r = t.options.maxLeafRowFilterDepth) != null ? r : 100, a = function(l, u) {
    u === void 0 && (u = 0);
    const c = [];
    for (let f = 0; f < l.length; f++) {
      var d;
      let p = l[f];
      const g = Ts(t, p.id, p.original, p.index, p.depth, void 0, p.parentId);
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
function kb(e, n, t) {
  var r;
  const o = [], i = {}, s = (r = t.options.maxLeafRowFilterDepth) != null ? r : 100, a = function(l, u) {
    u === void 0 && (u = 0);
    const c = [];
    for (let f = 0; f < l.length; f++) {
      let p = l[f];
      if (n(p)) {
        var d;
        if ((d = p.subRows) != null && d.length && u < s) {
          const h = Ts(t, p.id, p.original, p.index, p.depth, void 0, p.parentId);
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
function Eb() {
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
    return Sb(n.rows, d, e);
  }, W(e.options, "debugTable", "getFilteredRowModel", () => e._autoResetPageIndex()));
}
function Nb(e) {
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
    } : d = wb({
      rows: s,
      flatRows: a,
      rowsById: l
    }), d.flatRows = [];
    const f = (p) => {
      d.flatRows.push(p), p.subRows.length && p.subRows.forEach(f);
    };
    return d.rows.forEach(f), d;
  }, W(n.options, "debugTable", "getPaginationRowModel"));
}
function Rb() {
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
            const b = c.getValue(g.id), _ = d.getValue(g.id), w = b === void 0, S = _ === void 0;
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
  }, W(e.options, "debugTable", "getSortedRowModel", () => e._autoResetPageIndex()));
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
function Pa(e, n) {
  return e ? Tb(e) ? /* @__PURE__ */ C.createElement(e, n) : e : null;
}
function Tb(e) {
  return Ab(e) || typeof e == "function" || Fb(e);
}
function Ab(e) {
  return typeof e == "function" && (() => {
    const n = Object.getPrototypeOf(e);
    return n.prototype && n.prototype.isReactComponent;
  })();
}
function Fb(e) {
  return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
}
function Ib(e) {
  const n = {
    state: {},
    // Dummy state
    onStateChange: () => {
    },
    // noop
    renderFallbackValue: null,
    ...e
  }, [t] = C.useState(() => ({
    current: xb(n)
  })), [r, o] = C.useState(() => t.current.initialState);
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
function yw({
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
  var B;
  const [m, v] = C.useState([]), [y, b] = C.useState([]), [_, w] = C.useState({}), [S, k] = C.useState({}), [N, E] = C.useState(""), [R, O] = C.useState({
    pageIndex: 0,
    pageSize: i
  }), I = Ib({
    data: n,
    columns: e,
    getCoreRowModel: _b(),
    getSortedRowModel: Rb(),
    getFilteredRowModel: Eb(),
    ...o && { getPaginationRowModel: Nb() },
    onSortingChange: v,
    onColumnFiltersChange: b,
    onColumnVisibilityChange: w,
    onRowSelectionChange: k,
    onGlobalFilterChange: E,
    onPaginationChange: O,
    enableRowSelection: a,
    state: {
      sorting: m,
      columnFilters: y,
      columnVisibility: _,
      rowSelection: S,
      globalFilter: N,
      pagination: R
    }
  });
  return C.useEffect(() => {
    if (l) {
      const D = I.getFilteredSelectedRowModel().rows.map((U) => U.original);
      l(D);
    }
  }, [S, I, l]), /* @__PURE__ */ L("div", { className: P("w-full space-y-4", d), children: [
    (t || u) && /* @__PURE__ */ L("div", { className: "flex items-center justify-between gap-4", children: [
      t && /* @__PURE__ */ x("div", { className: "max-w-sm flex-1", children: /* @__PURE__ */ x(
        Wu,
        {
          placeholder: r,
          value: N ?? "",
          onChange: (D) => {
            E(D.target.value);
          },
          className: "w-full"
        }
      ) }),
      u && /* @__PURE__ */ L("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ x("span", { className: "text-muted-foreground text-sm", children: "Columns:" }),
        I.getAllLeafColumns().map((D) => D.id === "select" ? null : /* @__PURE__ */ L("label", { className: "flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ x(
            "input",
            {
              type: "checkbox",
              checked: D.getIsVisible(),
              onChange: (U) => {
                D.toggleVisibility(U.target.checked);
              },
              className: "rounded border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-slate-700"
            }
          ),
          /* @__PURE__ */ x("span", { className: "capitalize", children: D.id })
        ] }, D.id))
      ] })
    ] }),
    /* @__PURE__ */ x("div", { className: "overflow-hidden rounded-md border border-slate-200 dark:border-slate-800", children: /* @__PURE__ */ x("div", { className: P("overflow-auto", f && "max-h-[600px]"), children: /* @__PURE__ */ L("table", { className: "w-full caption-bottom text-sm", children: [
      /* @__PURE__ */ x(
        "thead",
        {
          className: P(
            "border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900",
            f && "sticky top-0 z-10"
          ),
          children: I.getHeaderGroups().map((D) => /* @__PURE__ */ x("tr", { children: D.headers.map((U) => /* @__PURE__ */ x(
            "th",
            {
              className: "h-12 px-4 text-left align-middle font-medium text-slate-700 dark:text-slate-300",
              children: U.isPlaceholder ? null : Pa(U.column.columnDef.header, U.getContext())
            },
            U.id
          )) }, D.id))
        }
      ),
      /* @__PURE__ */ x("tbody", { className: "divide-y divide-slate-200 dark:divide-slate-800", children: h ? /* @__PURE__ */ x("tr", { children: /* @__PURE__ */ x("td", { colSpan: e.length, className: "text-muted-foreground h-24 text-center", children: "Loading..." }) }) : (B = I.getRowModel().rows) != null && B.length ? I.getRowModel().rows.map((D) => /* @__PURE__ */ x(
        "tr",
        {
          "data-state": D.getIsSelected() && "selected",
          className: P(
            "border-b border-slate-200 bg-white transition-colors hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-900/50",
            D.getIsSelected() && "bg-slate-50 dark:bg-slate-900",
            g && "cursor-pointer",
            p == null ? void 0 : p(D.original)
          ),
          onClick: () => g == null ? void 0 : g(D.original),
          children: D.getVisibleCells().map((U) => /* @__PURE__ */ x("td", { className: "px-4 py-3 align-middle", children: Pa(U.column.columnDef.cell, U.getContext()) }, U.id))
        },
        D.id
      )) : /* @__PURE__ */ x("tr", { children: /* @__PURE__ */ x("td", { colSpan: e.length, className: "text-muted-foreground h-24 text-center", children: c }) }) })
    ] }) }) }),
    o && /* @__PURE__ */ L("div", { className: "flex items-center justify-between px-2", children: [
      /* @__PURE__ */ x("div", { className: "flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300", children: a && /* @__PURE__ */ L("div", { className: "text-muted-foreground flex-1 text-sm", children: [
        I.getFilteredSelectedRowModel().rows.length,
        " of",
        " ",
        I.getFilteredRowModel().rows.length,
        " row(s) selected."
      ] }) }),
      /* @__PURE__ */ L("div", { className: "flex items-center gap-6", children: [
        /* @__PURE__ */ L("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ x("span", { className: "text-sm text-slate-700 dark:text-slate-300", children: "Rows per page" }),
          /* @__PURE__ */ x(
            "select",
            {
              value: I.getState().pagination.pageSize.toString(),
              onChange: (D) => {
                I.setPageSize(Number(D.target.value));
              },
              className: "h-8 w-[70px] rounded-md border border-slate-300 bg-white text-sm dark:border-slate-700 dark:bg-slate-950",
              children: s.map((D) => /* @__PURE__ */ x("option", { value: D, children: D }, D))
            }
          )
        ] }),
        /* @__PURE__ */ L("div", { className: "flex items-center gap-1 text-sm font-medium text-slate-700 dark:text-slate-300", children: [
          "Page ",
          I.getState().pagination.pageIndex + 1,
          " of ",
          I.getPageCount()
        ] }),
        /* @__PURE__ */ L("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ x(
            le,
            {
              variant: "outline",
              size: "sm",
              onClick: () => {
                I.previousPage();
              },
              disabled: !I.getCanPreviousPage(),
              children: "Previous"
            }
          ),
          /* @__PURE__ */ x(
            le,
            {
              variant: "outline",
              size: "sm",
              onClick: () => {
                I.nextPage();
              },
              disabled: !I.getCanNextPage(),
              children: "Next"
            }
          )
        ] })
      ] })
    ] })
  ] });
}
function bw(e) {
  return ({ column: n }) => /* @__PURE__ */ L(
    le,
    {
      variant: "ghost",
      onClick: () => {
        n.toggleSorting(n.getIsSorted() === "asc");
      },
      className: "-ml-4 h-8",
      children: [
        e,
        n.getIsSorted() === "asc" ? /* @__PURE__ */ x(Pu, { className: "ml-2 h-4 w-4" }) : n.getIsSorted() === "desc" ? /* @__PURE__ */ x(Ss, { className: "ml-2 h-4 w-4" }) : /* @__PURE__ */ x(Rg, { className: "ml-2 h-4 w-4 opacity-50" })
      ]
    }
  );
}
function vw() {
  return {
    id: "select",
    header: ({ table: e }) => /* @__PURE__ */ x(
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
    cell: ({ row: e }) => /* @__PURE__ */ x(
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
function xw({
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
  return /* @__PURE__ */ x(
    "div",
    {
      className: P(
        "flex items-center justify-center text-slate-500 dark:text-slate-400",
        u.container,
        i
      ),
      role: "status",
      "aria-live": "polite",
      children: /* @__PURE__ */ L("div", { className: "max-w-md text-center", children: [
        e && /* @__PURE__ */ x(
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
        /* @__PURE__ */ x("h3", { className: P("font-medium text-slate-700 dark:text-slate-300", u.title), children: n }),
        t && /* @__PURE__ */ x("p", { className: P("text-slate-600 dark:text-slate-400", u.description), children: t }),
        a && /* @__PURE__ */ x("div", { className: P(u.description), children: a }),
        (r || o) && /* @__PURE__ */ L("div", { className: P("flex items-center justify-center", u.actions), children: [
          r && /* @__PURE__ */ L(le, { onClick: r.onClick, variant: r.variant || "default", children: [
            r.icon && /* @__PURE__ */ x("span", { className: "mr-2", children: r.icon }),
            r.label
          ] }),
          o && /* @__PURE__ */ x(
            le,
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
function _w({
  error: e,
  onRetry: n,
  variant: t = "default",
  className: r,
  compact: o = !1
}) {
  const i = e instanceof Error ? e.message : e, s = () => {
    switch (t) {
      case "network":
        return Vg;
      case "auth":
        return Ig;
      case "notfound":
        return pr;
      // Or a specific not-found icon if available
      default:
        return pr;
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
  return o ? /* @__PURE__ */ L(
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
        /* @__PURE__ */ L("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ x(u, { className: "text-destructive h-5 w-5 flex-shrink-0", "aria-hidden": "true" }),
          /* @__PURE__ */ L("div", { children: [
            /* @__PURE__ */ x("p", { className: "text-destructive-foreground text-sm font-medium", children: a() }),
            /* @__PURE__ */ x("p", { className: "text-destructive-foreground/80 mt-0.5 text-sm", children: i || l() })
          ] })
        ] }),
        n && /* @__PURE__ */ L(
          le,
          {
            variant: "ghost",
            size: "sm",
            onClick: n,
            className: "hover:bg-destructive/10 text-destructive hover:text-destructive ml-4",
            "aria-label": "Retry operation",
            children: [
              /* @__PURE__ */ x(_a, { className: "mr-2 h-4 w-4" }),
              "Retry"
            ]
          }
        )
      ]
    }
  ) : /* @__PURE__ */ L(
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
        /* @__PURE__ */ x("div", { className: "bg-destructive/10 mb-4 flex h-16 w-16 items-center justify-center rounded-full", children: /* @__PURE__ */ x(u, { className: "text-destructive h-8 w-8", "aria-hidden": "true" }) }),
        /* @__PURE__ */ x("h3", { className: "text-foreground mb-2 text-lg font-semibold", children: a() }),
        /* @__PURE__ */ x("p", { className: "text-muted-foreground mb-4 max-w-md text-center text-sm", children: l() }),
        i && /* @__PURE__ */ x("div", { className: "bg-muted/50 border-border/50 mb-6 w-full max-w-md rounded-md border p-3", children: /* @__PURE__ */ x("p", { className: "text-muted-foreground text-center font-mono text-xs break-words", children: i }) }),
        n && /* @__PURE__ */ L(
          le,
          {
            variant: "default",
            onClick: n,
            className: "min-w-[120px]",
            "aria-label": "Retry operation",
            children: [
              /* @__PURE__ */ x(_a, { className: "mr-2 h-4 w-4" }),
              "Try Again"
            ]
          }
        )
      ]
    }
  );
}
const Ob = Q(
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
), $b = Q("flex items-center justify-center rounded-full p-2", {
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
}), Mb = Q("text-2xl font-bold tracking-tight", {
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
}), Pb = Q("text-sm font-medium", {
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
function ww({
  className: e,
  variant: n,
  icon: t,
  value: r,
  label: o,
  trend: i,
  ...s
}) {
  return /* @__PURE__ */ x(qu, { className: P(Ob({ variant: n, className: e })), ...s, children: /* @__PURE__ */ L("div", { className: "flex items-start justify-between space-x-4 p-6", children: [
    /* @__PURE__ */ L("div", { className: "space-y-1", children: [
      /* @__PURE__ */ x("p", { className: P(Mb({ variant: n })), children: r }),
      /* @__PURE__ */ x("p", { className: P(Pb({ variant: n })), children: o }),
      i && /* @__PURE__ */ L("div", { className: "mt-2 flex items-center space-x-1 text-xs", children: [
        /* @__PURE__ */ x(
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
        i.label && /* @__PURE__ */ x("span", { className: "text-slate-500 dark:text-slate-400", children: i.label })
      ] })
    ] }),
    t && /* @__PURE__ */ x("div", { className: P($b({ variant: n })), children: /* @__PURE__ */ x("div", { className: "h-6 w-6", children: t }) })
  ] }) });
}
const La = Q("h-2.5 w-2.5 rounded-full", {
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
function Sw({
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
  return r ? /* @__PURE__ */ L(Zu, { variant: {
    online: "success",
    offline: "secondary",
    connecting: "warning",
    error: "destructive"
  }[e], className: P("gap-1.5", i), ...s, children: [
    /* @__PURE__ */ x(
      "span",
      {
        className: P(La({ status: e, animate: u }), "h-2 w-2"),
        "aria-hidden": "true"
      }
    ),
    o && /* @__PURE__ */ x("span", { children: l })
  ] }) : /* @__PURE__ */ L("div", { className: P("flex items-center gap-2 text-sm", i), ...s, children: [
    /* @__PURE__ */ x(
      "span",
      {
        className: P(La({ status: e, animate: u })),
        "aria-hidden": "true"
      }
    ),
    o && /* @__PURE__ */ x(
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
function Cw({
  content: e,
  children: n,
  side: t = "top",
  disabled: r = !1,
  interactive: o = !1,
  className: i
}) {
  const [s, a] = C.useState(!1), [l, u] = C.useState({ top: 0, left: 0 }), c = C.useRef(null), d = C.useRef(null), f = C.useRef(null), p = () => {
    f.current && (clearTimeout(f.current), f.current = null), a(!0);
  }, g = () => {
    o ? f.current = setTimeout(() => {
      a(!1);
    }, 100) : a(!1);
  };
  return C.useEffect(() => () => {
    f.current && clearTimeout(f.current);
  }, []), C.useLayoutEffect(() => {
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
  }, [s, t]), r ? n : /* @__PURE__ */ L(tt, { children: [
    /* @__PURE__ */ x(
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
    s && /* @__PURE__ */ x(
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
function kw({
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
      icon: pr,
      iconClassName: "text-destructive",
      iconBgClassName: "bg-destructive/10",
      buttonVariant: "destructive",
      buttonClassName: void 0
    },
    warning: {
      icon: pr,
      iconClassName: "text-yellow-600 dark:text-yellow-400",
      iconBgClassName: "bg-yellow-100 dark:bg-yellow-900/30",
      buttonVariant: "default",
      buttonClassName: "bg-yellow-600 hover:bg-yellow-700 dark:bg-yellow-600 dark:hover:bg-yellow-700"
    },
    info: {
      icon: Oi,
      iconClassName: "text-blue-600 dark:text-blue-400",
      iconBgClassName: "bg-blue-100 dark:bg-blue-900/30",
      buttonVariant: "default",
      buttonClassName: "bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
    }
  }[a], d = c.icon;
  return /* @__PURE__ */ x(ch, { open: e, onOpenChange: n, children: /* @__PURE__ */ L(oc, { children: [
    /* @__PURE__ */ x(ic, { children: /* @__PURE__ */ L("div", { className: "flex items-start gap-4", children: [
      /* @__PURE__ */ x(
        "div",
        {
          className: P(
            "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full",
            c.iconBgClassName
          ),
          children: /* @__PURE__ */ x(d, { className: P("h-6 w-6", c.iconClassName) })
        }
      ),
      /* @__PURE__ */ L("div", { className: "flex-1", children: [
        /* @__PURE__ */ x(ac, { children: r }),
        /* @__PURE__ */ x(lc, { className: "mt-2", children: o })
      ] })
    ] }) }),
    /* @__PURE__ */ L(sc, { children: [
      /* @__PURE__ */ x(le, { variant: "outline", onClick: () => {
        n(!1);
      }, children: s }),
      /* @__PURE__ */ x(
        le,
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
const ed = Iu(null);
function Lb(e, n) {
  return { getTheme: function() {
    return n ?? null;
  } };
}
function it() {
  const e = xg(ed);
  return e == null && (function(n, ...t) {
    const r = new URL("https://lexical.dev/docs/error"), o = new URLSearchParams();
    o.append("code", n);
    for (const i of t) o.append("v", i);
    throw r.search = o.toString(), Error(`Minified Lexical error #${n}; visit ${r.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
  })(8), e;
}
function M(e, ...n) {
  const t = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", e);
  for (const o of n) r.append("v", o);
  throw t.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
function td(e, ...n) {
  const t = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", e);
  for (const o of n) r.append("v", o);
  t.search = r.toString(), console.warn(`Minified Lexical warning #${e}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
const st = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, Db = st && "documentMode" in document ? document.documentMode : null, Ye = st && /Mac|iPod|iPhone|iPad/.test(navigator.platform), tn = st && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent), io = !(!st || !("InputEvent" in window) || Db) && "getTargetRanges" in new window.InputEvent("input"), kr = st && /Version\/[\d.]+.*Safari/.test(navigator.userAgent), Gn = st && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, zb = st && /Android/.test(navigator.userAgent), nd = st && /^(?=.*Chrome).*/i.test(navigator.userAgent), Da = st && zb && nd, Er = st && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && Ye && !nd;
function rd(...e) {
  const n = [];
  for (const t of e) if (t && typeof t == "string") for (const [r] of t.matchAll(/\S+/g)) n.push(r);
  return n;
}
const Bb = 0, Vb = 1, Ub = 2, od = 128, jb = 1, Gb = 2, Hb = 3, Kb = 4, Wb = 5, qb = 6, Mo = kr || Gn || Er ? " " : "​", zt = `

`, Zb = tn ? " " : Mo, nn = { bold: 1, capitalize: 1024, code: 16, highlight: od, italic: 2, lowercase: 256, strikethrough: 4, subscript: 32, superscript: 64, underline: 8, uppercase: 512 }, Jb = { directionless: 1, unmergeable: 2 }, za = { center: 2, end: 6, justify: 4, left: 1, right: 3, start: 5 }, Yb = { [Gb]: "center", [qb]: "end", [Kb]: "justify", [jb]: "left", [Hb]: "right", [Wb]: "start" }, Xb = { normal: 0, segmented: 2, token: 1 }, Qb = { [Bb]: "normal", [Ub]: "segmented", [Vb]: "token" }, Ba = "$config";
function id(e, n, t, r, o, i) {
  let s = e.getFirstChild();
  for (; s !== null; ) {
    const a = s.__key;
    s.__parent === n && (A(s) && id(s, a, t, r, o, i), t.has(a) || i.delete(a), o.push(a)), s = s.getNextSibling();
  }
}
let Ui = !1, Os = 0;
function e0(e) {
  Os = e.timeStamp;
}
function di(e, n, t) {
  const r = e.nodeName === "BR", o = n.__lexicalLineBreak;
  return o && (e === o || r && e.previousSibling === o) || r && jo(e, t) !== void 0;
}
function t0(e, n, t) {
  const r = at(We(t));
  let o = null, i = null;
  r !== null && r.anchorNode === e && (o = r.anchorOffset, i = r.focusOffset);
  const s = e.nodeValue;
  s !== null && Xs(n, s, o, i, !1);
}
function n0(e, n, t) {
  if ($(e)) {
    const r = e.anchor.getNode();
    if (r.is(t) && e.format !== r.getFormat()) return !1;
  }
  return Rt(n) && t.isAttached();
}
function r0(e, n, t, r) {
  for (let o = e; o && !cv(o); o = Fr(o)) {
    const i = jo(o, n);
    if (i !== void 0) {
      const s = me(i, t);
      if (s) return ee(s) || !be(o) ? void 0 : [o, s];
    } else if (o === r) return [r, ff(t)];
  }
}
function sd(e, n, t) {
  Ui = !0;
  const r = performance.now() - Os > 100;
  try {
    ft(e, () => {
      const o = V() || (function(f) {
        return f.getEditorState().read(() => {
          const p = V();
          return p !== null ? p.clone() : null;
        });
      })(e), i = /* @__PURE__ */ new Map(), s = e.getRootElement(), a = e._editorState, l = e._blockCursorElement;
      let u = !1, c = "";
      for (let f = 0; f < n.length; f++) {
        const p = n[f], g = p.type, h = p.target, m = r0(h, e, a, s);
        if (!m) continue;
        const [v, y] = m;
        if (g === "characterData") r && z(y) && Rt(h) && n0(o, h, y) && t0(h, y, e);
        else if (g === "childList") {
          u = !0;
          const b = p.addedNodes;
          for (let S = 0; S < b.length; S++) {
            const k = b[S], N = cf(k), E = k.parentNode;
            if (E != null && k !== l && N === null && !di(k, E, e)) {
              if (tn) {
                const R = (be(k) ? k.innerText : null) || k.nodeValue;
                R && (c += R);
              }
              E.removeChild(k);
            }
          }
          const _ = p.removedNodes, w = _.length;
          if (w > 0) {
            let S = 0;
            for (let k = 0; k < w; k++) {
              const N = _[k];
              (di(N, h, e) || l === N) && (h.appendChild(N), S++);
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
            y == null || v.nodeName !== "BR" || di(v, h, e) || y.removeChild(v);
          }
        }
        t.takeRecords();
      }
      o !== null && (u && Ne(o), tn && mf(e) && o.insertRawText(c));
    });
  } finally {
    Ui = !1;
  }
}
function ad(e) {
  const n = e._observer;
  n !== null && sd(e, n.takeRecords(), n);
}
function ld(e) {
  (function(n) {
    Os === 0 && We(n).addEventListener("textInput", e0, !0);
  })(e), e._observer = new MutationObserver((n, t) => {
    sd(e, n, t);
  });
}
let o0 = class {
  constructor(n, t) {
    T(this, "key");
    T(this, "parse");
    T(this, "unparse");
    T(this, "isEqual");
    T(this, "defaultValue");
    this.key = n, this.parse = t.parse.bind(t), this.unparse = (t.unparse || l0).bind(t), this.isEqual = (t.isEqual || Object.is).bind(t), this.defaultValue = this.parse(void 0);
  }
};
function i0(e, n) {
  return new o0(e, n);
}
function ud(e, n, t = "latest") {
  const r = (t === "latest" ? e.getLatest() : e).__state;
  return r ? r.getValue(n) : n.defaultValue;
}
function fi(e, n, t) {
  let r;
  if (xe(), typeof t == "function") {
    const i = e.getLatest(), s = ud(i, n);
    if (r = t(s), n.isEqual(s, r)) return i;
  } else r = t;
  const o = e.getWritable();
  return dd(o).updateFromKnown(n, r), o;
}
function s0(e) {
  const n = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Set();
  for (let r = typeof e == "function" ? e : e.replace; r.prototype && r.prototype.getType !== void 0; r = Object.getPrototypeOf(r)) {
    const { ownNodeConfig: o } = Ko(r);
    if (o && o.stateConfigs) for (const i of o.stateConfigs) {
      let s;
      "stateConfig" in i ? (s = i.stateConfig, i.flat && t.add(s.key)) : s = i, n.set(s.key, s);
    }
  }
  return { flatKeys: t, sharedConfigMap: n };
}
let a0 = class cd {
  constructor(n, t, r = void 0, o = /* @__PURE__ */ new Map(), i = void 0) {
    T(this, "node");
    T(this, "knownState");
    T(this, "unknownState");
    T(this, "sharedNodeState");
    T(this, "size");
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
    return Va(n) && (t.$ = n), t;
  }
  getWritable(n) {
    if (this.node === n) return this;
    const { sharedNodeState: t, unknownState: r } = this, o = new Map(this.knownState);
    return new cd(n, t, (function(i, s, a) {
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
    o.has(n) || i && r in i || (i && (delete i[r], this.unknownState = Va(i)), this.size++), o.set(n, t);
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
function dd(e) {
  const n = e.getWritable(), t = n.__state ? n.__state.getWritable(n) : new a0(n, fd(n));
  return n.__state = t, t;
}
function fd(e) {
  return e.__state ? e.__state.sharedNodeState : of(Ho(), e.getType()).sharedNodeState;
}
function Va(e) {
  if (e) for (const n in e) return e;
}
function l0(e) {
  return e;
}
function Ua(e, n, t) {
  for (const [r, o] of n.knownState) {
    if (e.has(r.key)) continue;
    e.add(r.key);
    const i = t ? t.getValue(r) : r.defaultValue;
    if (i !== o && !r.isEqual(i, o)) return !0;
  }
  return !1;
}
function ja(e, n, t) {
  const { unknownState: r } = n, o = t ? t.unknownState : void 0;
  if (r) {
    for (const [i, s] of Object.entries(r))
      if (!e.has(i) && (e.add(i), s !== (o ? o[i] : void 0)))
        return !0;
  }
  return !1;
}
function Ga(e, n) {
  const t = e.__state;
  return t && t.node === e ? t.getWritable(n) : t;
}
function Ha(e, n) {
  const t = e.__mode, r = e.__format, o = e.__style, i = n.__mode, s = n.__format, a = n.__style, l = e.__state, u = n.__state;
  return (t === null || t === i) && (r === null || r === s) && (o === null || o === a) && (e.__state === null || l === u || (function(c, d) {
    if (c === d) return !0;
    if (c && d && c.size !== d.size) return !1;
    const f = /* @__PURE__ */ new Set();
    return !(c && Ua(f, c, d) || d && Ua(f, d, c) || c && ja(f, c, d) || d && ja(f, d, c));
  })(l, u));
}
function Ka(e, n) {
  const t = e.mergeWithSibling(n), r = ie()._normalizedNodes;
  return r.add(e.__key), r.add(n.__key), t;
}
function Wa(e) {
  let n, t, r = e;
  if (r.__text !== "" || !r.isSimpleText() || r.isUnmergeable()) {
    for (; (n = r.getPreviousSibling()) !== null && z(n) && n.isSimpleText() && !n.isUnmergeable(); ) {
      if (n.__text !== "") {
        if (Ha(n, r)) {
          r = Ka(n, r);
          break;
        }
        break;
      }
      n.remove();
    }
    for (; (t = r.getNextSibling()) !== null && z(t) && t.isSimpleText() && !t.isUnmergeable(); ) {
      if (t.__text !== "") {
        if (Ha(r, t)) {
          r = Ka(r, t);
          break;
        }
        break;
      }
      t.remove();
    }
  } else r.remove();
}
function so(e) {
  return qa(e.anchor), qa(e.focus), e;
}
function qa(e) {
  for (; e.type === "element"; ) {
    const n = e.getNode(), t = e.offset;
    let r, o;
    if (t === n.getChildrenSize() ? (r = n.getChildAtIndex(t - 1), o = !0) : (r = n.getChildAtIndex(t), o = !1), z(r)) {
      e.set(r.__key, o ? r.getTextContentSize() : 0, "text", !0);
      break;
    }
    if (!A(r)) break;
    e.set(r.__key, o ? r.getChildrenSize() : 0, "element", !0);
  }
}
let rn, Ae, mr, Po, ji, Gi, on, Qe, Hi, yr, ve = "", lt = null, Gt = null, _t = "", Sn = !1, ao = !1;
function lo(e, n) {
  const t = on.get(e);
  if (n !== null) {
    const r = Zi(e);
    r.parentNode === n && n.removeChild(r);
  }
  if (Qe.has(e) || Ae._keyToDOMMap.delete(e), A(t)) {
    const r = co(t, on);
    Ki(r, 0, r.length - 1, null);
  }
  t !== void 0 && Qs(yr, mr, Po, t, "destroyed");
}
function Ki(e, n, t, r) {
  let o = n;
  for (; o <= t; ++o) {
    const i = e[o];
    i !== void 0 && lo(i, r);
  }
}
function jt(e, n) {
  e.setProperty("text-align", n);
}
const u0 = "40px";
function gd(e, n) {
  const t = rn.theme.indent;
  if (typeof t == "string") {
    const o = e.classList.contains(t);
    n > 0 && !o ? e.classList.add(t) : n < 1 && o && e.classList.remove(t);
  }
  const r = getComputedStyle(e).getPropertyValue("--lexical-indent-base-value") || u0;
  e.style.setProperty("padding-inline-start", n === 0 ? "" : `calc(${n} * ${r})`);
}
function pd(e, n) {
  const t = e.style;
  n === 0 ? jt(t, "") : n === 1 ? jt(t, "left") : n === 2 ? jt(t, "center") : n === 3 ? jt(t, "right") : n === 4 ? jt(t, "justify") : n === 5 ? jt(t, "start") : n === 6 && jt(t, "end");
}
function Wi(e, n) {
  const t = (function(r) {
    const o = r.__dir;
    if (o !== null) return o;
    if (ye(r)) return null;
    const i = r.getParentOrThrow();
    return ye(i) && i.__dir === null ? "auto" : null;
  })(n);
  t !== null ? e.dir = t : e.removeAttribute("dir");
}
function uo(e, n) {
  const t = Qe.get(e);
  t === void 0 && M(60);
  const r = t.createDOM(rn, Ae);
  if ((function(o, i, s) {
    const a = s._keyToDOMMap;
    (function(l, u, c) {
      const d = `__lexicalKey_${u._key}`;
      l[d] = c;
    })(i, s, o), a.set(o, i);
  })(e, r, Ae), z(t) ? r.setAttribute("data-lexical-text", "true") : ee(t) && r.setAttribute("data-lexical-decorator", "true"), A(t)) {
    const o = t.__indent, i = t.__size;
    if (Wi(r, t), o !== 0 && gd(r, o), i !== 0) {
      const a = i - 1;
      qi(co(t, Qe), t, 0, a, t.getDOMSlot(r));
    }
    const s = t.__format;
    s !== 0 && pd(r, s), t.isInline() || hd(null, t, r), Go(t) && (ve += zt, _t += zt);
  } else {
    const o = t.getTextContent();
    if (ee(t)) {
      const i = t.decorate(Ae, rn);
      i !== null && md(e, i), r.contentEditable = "false";
    }
    ve += o, _t += o;
  }
  return n !== null && n.insertChild(r), Qs(yr, mr, Po, t, "created"), r;
}
function qi(e, n, t, r, o) {
  const i = ve;
  ve = "";
  let s = t;
  for (; s <= r; ++s) {
    uo(e[s], o);
    const a = Qe.get(e[s]);
    a !== null && z(a) && lt === null && (lt = a.getFormat(), Gt = a.getStyle());
  }
  Go(n) && (ve += zt), o.element.__lexicalTextContent = ve, ve = i + ve;
}
function Za(e, n) {
  if (e) {
    const t = e.__last;
    if (t) {
      const r = n.get(t);
      if (r) return $t(r) ? "line-break" : ee(r) && r.isInline() ? "decorator" : null;
    }
    return "empty";
  }
  return null;
}
function hd(e, n, t) {
  const r = Za(e, on), o = Za(n, Qe);
  r !== o && n.getDOMSlot(t).setManagedLineBreak(o);
}
function c0(e, n, t) {
  var r;
  lt = null, Gt = null, (function(o, i, s) {
    const a = ve, l = o.__size, u = i.__size;
    ve = "";
    const c = s.element;
    if (l === 1 && u === 1) {
      const d = o.__first, f = i.__first;
      if (d === f) ir(d, c);
      else {
        const g = Zi(d), h = uo(f, null);
        try {
          c.replaceChild(h, g);
        } catch (m) {
          if (typeof m == "object" && m != null) {
            const v = `${m.toString()} Parent: ${c.tagName}, new child: {tag: ${h.tagName} key: ${f}}, old child: {tag: ${g.tagName}, key: ${d}}.`;
            throw new Error(v);
          }
          throw m;
        }
        lo(d, null);
      }
      const p = Qe.get(f);
      z(p) && lt === null && (lt = p.getFormat(), Gt = p.getStyle());
    } else {
      const d = co(o, on), f = co(i, Qe);
      if (d.length !== l && M(227), f.length !== u && M(228), l === 0) u !== 0 && qi(f, i, 0, u - 1, s);
      else if (u === 0) {
        if (l !== 0) {
          const p = s.after == null && s.before == null && s.element.__lexicalLineBreak == null;
          Ki(d, 0, l - 1, p ? null : c), p && (c.textContent = "");
        }
      } else (function(p, g, h, m, v, y) {
        const b = m - 1, _ = v - 1;
        let w, S, k = y.getFirstChild(), N = 0, E = 0;
        for (; N <= b && E <= _; ) {
          const I = g[N], B = h[E];
          if (I === B) k = gi(ir(B, y.element)), N++, E++;
          else {
            w === void 0 && (w = new Set(g)), S === void 0 && (S = new Set(h));
            const U = S.has(I), q = w.has(B);
            if (U) if (q) {
              const H = an(Ae, B);
              H === k ? k = gi(ir(B, y.element)) : (y.withBefore(k).insertChild(H), ir(B, y.element)), N++, E++;
            } else uo(B, y.withBefore(k)), E++;
            else k = gi(Zi(I)), lo(I, y.element), N++;
          }
          const D = Qe.get(B);
          D !== null && z(D) && lt === null && (lt = D.getFormat(), Gt = D.getStyle());
        }
        const R = N > b, O = E > _;
        if (R && !O) {
          const I = h[_ + 1], B = I === void 0 ? null : Ae.getElementByKey(I);
          qi(h, p, E, _, y.withBefore(B));
        } else O && !R && Ki(g, N, b, y.element);
      })(i, d, f, l, u, s);
    }
    Go(i) && (ve += zt), c.__lexicalTextContent = ve, ve = a + ve;
  })(e, n, n.getDOMSlot(t)), r = n, lt == null || lt === r.__textFormat || ao || r.setTextFormat(lt), (function(o) {
    Gt == null || Gt === o.__textStyle || ao || o.setTextStyle(Gt);
  })(n);
}
function co(e, n) {
  const t = [];
  let r = e.__first;
  for (; r !== null; ) {
    const o = n.get(r);
    o === void 0 && M(101), t.push(r), r = o.__next;
  }
  return t;
}
function ir(e, n) {
  const t = on.get(e);
  let r = Qe.get(e);
  t !== void 0 && r !== void 0 || M(61);
  const o = Sn || Gi.has(e) || ji.has(e), i = an(Ae, e);
  if (t === r && !o) {
    if (A(t)) {
      const s = i.__lexicalTextContent;
      s !== void 0 && (ve += s, _t += s);
    } else {
      const s = t.getTextContent();
      _t += s, ve += s;
    }
    return i;
  }
  if (t !== r && o && Qs(yr, mr, Po, r, "updated"), r.updateDOM(t, i, rn)) {
    const s = uo(e, null);
    return n === null && M(62), n.replaceChild(s, i), lo(e, null), s;
  }
  if (A(t) && A(r)) {
    const s = r.__indent;
    (Sn || s !== t.__indent) && gd(i, s);
    const a = r.__format;
    if ((Sn || a !== t.__format) && pd(i, a), o && (c0(t, r, i), ye(r) || r.isInline() || hd(t, r, i)), Go(r) && (ve += zt, _t += zt), (Sn || r.__dir !== t.__dir) && (Wi(i, r), ye(r) && !Sn)) for (const l of r.getChildren()) A(l) && Wi(an(Ae, l.getKey()), l);
  } else {
    const s = r.getTextContent();
    if (ee(r)) {
      const a = r.decorate(Ae, rn);
      a !== null && md(e, a);
    }
    ve += s, _t += s;
  }
  if (!ao && ye(r) && r.__cachedText !== _t) {
    const s = r.getWritable();
    s.__cachedText = _t, r = s;
  }
  return i;
}
function md(e, n) {
  let t = Ae._pendingDecorators;
  const r = Ae._decorators;
  if (t === null) {
    if (r[e] === n) return;
    t = df(Ae);
  }
  t[e] = n;
}
function gi(e) {
  let n = e.nextSibling;
  return n !== null && n === Ae._blockCursorElement && (n = n.nextSibling), n;
}
function d0(e, n, t, r, o, i) {
  ve = "", _t = "", Sn = r === 2, Ae = t, rn = t._config, mr = t._nodes, Po = Ae._listeners.mutation, ji = o, Gi = i, on = e._nodeMap, Qe = n._nodeMap, ao = n._readOnly, Hi = new Map(t._keyToDOMMap);
  const s = /* @__PURE__ */ new Map();
  return yr = s, ir("root", null), Ae = void 0, mr = void 0, ji = void 0, Gi = void 0, on = void 0, Qe = void 0, rn = void 0, Hi = void 0, yr = void 0, s;
}
function Zi(e) {
  const n = Hi.get(e);
  return n === void 0 && M(75, e), n;
}
function G(e) {
  return { type: e };
}
const yd = G("SELECTION_CHANGE_COMMAND"), f0 = G("SELECTION_INSERT_CLIPBOARD_NODES_COMMAND"), $s = G("CLICK_COMMAND"), bd = G("BEFORE_INPUT_COMMAND"), vd = G("INPUT_COMMAND"), xd = G("COMPOSITION_START_COMMAND"), _d = G("COMPOSITION_END_COMMAND"), Jt = G("DELETE_CHARACTER_COMMAND"), Tn = G("INSERT_LINE_BREAK_COMMAND"), br = G("INSERT_PARAGRAPH_COMMAND"), An = G("CONTROLLED_TEXT_INSERTION_COMMAND"), Ms = G("PASTE_COMMAND"), Ji = G("REMOVE_TEXT_COMMAND"), vr = G("DELETE_WORD_COMMAND"), xr = G("DELETE_LINE_COMMAND"), ct = G("FORMAT_TEXT_COMMAND"), Ps = G("UNDO_COMMAND"), Ls = G("REDO_COMMAND"), wd = G("KEYDOWN_COMMAND"), Sd = G("KEY_ARROW_RIGHT_COMMAND"), g0 = G("MOVE_TO_END"), Cd = G("KEY_ARROW_LEFT_COMMAND"), p0 = G("MOVE_TO_START"), kd = G("KEY_ARROW_UP_COMMAND"), Ed = G("KEY_ARROW_DOWN_COMMAND"), fo = G("KEY_ENTER_COMMAND"), Nd = G("KEY_SPACE_COMMAND"), Rd = G("KEY_BACKSPACE_COMMAND"), Td = G("KEY_ESCAPE_COMMAND"), Ad = G("KEY_DELETE_COMMAND"), Fd = G("KEY_TAB_COMMAND"), h0 = G("INSERT_TAB_COMMAND"), m0 = G("INDENT_CONTENT_COMMAND"), Ja = G("OUTDENT_CONTENT_COMMAND"), Id = G("DROP_COMMAND"), y0 = G("FORMAT_ELEMENT_COMMAND"), Od = G("DRAGSTART_COMMAND"), $d = G("DRAGOVER_COMMAND"), b0 = G("DRAGEND_COMMAND"), Lo = G("COPY_COMMAND"), Ds = G("CUT_COMMAND"), Yi = G("SELECT_ALL_COMMAND"), v0 = G("CLEAR_EDITOR_COMMAND"), x0 = G("CLEAR_HISTORY_COMMAND"), Dr = G("CAN_REDO_COMMAND"), zr = G("CAN_UNDO_COMMAND"), _0 = G("FOCUS_COMMAND"), w0 = G("BLUR_COMMAND"), S0 = G("KEY_MODIFIER_COMMAND"), mt = Object.freeze({}), Xi = [["keydown", function(e, n) {
  _r = e.timeStamp, Md = e.key, !n.isComposing() && j(n, wd, e);
}], ["pointerdown", function(e, n) {
  const t = e.target, r = e.pointerType;
  Yn(t) && r !== "touch" && r !== "pen" && e.button === 0 && ft(n, () => {
    sf(t) || (ts = !0);
  });
}], ["compositionstart", function(e, n) {
  j(n, xd, e);
}], ["compositionend", function(e, n) {
  tn ? sr = !0 : Gn || !kr && !Er ? j(n, _d, e) : (ns = !0, rs = e.data);
}], ["input", function(e, n) {
  e.stopPropagation(), ft(n, () => {
    n.dispatchCommand(vd, e);
  }, { event: e }), Cn = null;
}], ["click", function(e, n) {
  ft(n, () => {
    const t = V(), r = at(We(n)), o = qn();
    if (r) {
      if ($(t)) {
        const i = t.anchor, s = i.getNode();
        if (i.type === "element" && i.offset === 0 && t.isCollapsed() && !ye(s) && ge().getChildrenSize() === 1 && s.getTopLevelElementOrThrow().isEmpty() && o !== null && t.is(o)) r.removeAllRanges(), t.dirty = !0;
        else if (e.detail === 3 && !t.isCollapsed() && s !== t.focus.getNode()) {
          const a = Ke(s, (l) => A(l) && !l.isInline());
          A(a) && a.select(0);
        }
      } else if (e.pointerType === "touch" || e.pointerType === "pen") {
        const i = r.anchorNode;
        (be(i) || Rt(i)) && Ne(Vs(o, r, n, e));
      }
    }
    j(n, $s, e);
  });
}], ["cut", mt], ["copy", mt], ["dragstart", mt], ["dragover", mt], ["dragend", mt], ["paste", mt], ["focus", mt], ["blur", mt], ["drop", mt]];
io && Xi.push(["beforeinput", (e, n) => (function(t, r) {
  const o = t.inputType;
  o === "deleteCompositionText" || tn && mf(r) || o !== "insertCompositionText" && j(r, bd, t);
})(e, n)]);
let _r = 0, Md = null, Pd = 0, Cn = null;
const Qi = /* @__PURE__ */ new WeakMap(), go = /* @__PURE__ */ new WeakMap();
let es = !1, ts = !1, cr = !1, sr = !1, ns = !1, rs = "", Wt = null, Ld = [0, "", 0, "root", 0];
function Dd(e, n, t, r, o) {
  const i = e.anchor, s = e.focus, a = i.getNode(), l = ie(), u = at(We(l)), c = u !== null ? u.anchorNode : null, d = i.key, f = l.getElementByKey(d), p = t.length;
  return d !== s.key || !z(a) || (!o && (!io || Pd < r + 50) || a.isDirty() && p < 2 || gf(t)) && i.offset !== s.offset && !a.isComposing() || xt(a) || a.isDirty() && p > 1 || (o || !io) && f !== null && !a.isComposing() && c !== Pn(f) || u !== null && n !== null && (!n.collapsed || n.startContainer !== u.anchorNode || n.startOffset !== u.anchorOffset) || a.getFormat() !== e.format || a.getStyle() !== e.style || (function(g, h) {
    if (h.isSegmented()) return !0;
    if (!g.isCollapsed()) return !1;
    const m = g.anchor.offset, v = h.getParentOrThrow(), y = Yt(h);
    return m === 0 ? !h.canInsertTextBefore() || !v.canInsertTextBefore() && !h.isComposing() || y || (function(b) {
      const _ = b.getPreviousSibling();
      return (z(_) || A(_) && _.isInline()) && !_.canInsertTextAfter();
    })(h) : m === h.getTextContentSize() && (!h.canInsertTextAfter() || !v.canInsertTextAfter() && !h.isComposing() || y);
  })(e, a);
}
function Ya(e, n) {
  return Rt(e) && e.nodeValue !== null && n !== 0 && n !== e.nodeValue.length;
}
function Xa(e, n, t) {
  const { anchorNode: r, anchorOffset: o, focusNode: i, focusOffset: s } = e;
  es && (es = !1, Ya(r, o) && Ya(i, s) && !Wt) || ft(n, () => {
    if (!t) return void Ne(null);
    if (!Ar(n, r, i)) return;
    let a = V();
    if (Wt && $(a) && a.isCollapsed()) {
      const l = a.anchor, u = Wt.anchor;
      (l.key === u.key && l.offset === u.offset + 1 || l.offset === 1 && u.getNode().is(l.getNode().getPreviousSibling())) && (a = Wt.clone(), Ne(a));
    }
    if (Wt = null, $(a)) {
      const l = a.anchor, u = l.getNode();
      if (a.isCollapsed()) {
        e.type === "Range" && e.anchorNode === e.focusNode && (a.dirty = !0);
        const c = We(n).event, d = c ? c.timeStamp : performance.now(), [f, p, g, h, m] = Ld, v = ge(), y = n.isComposing() === !1 && v.getTextContent() === "";
        if (d < m + 200 && l.offset === g && l.key === h) Jr(a, f, p);
        else if (l.type === "text") z(u) || M(141), zd(a, u);
        else if (l.type === "element" && !y) {
          A(u) || M(259);
          const b = l.getNode();
          b.isEmpty() ? (function(_, w) {
            const S = w.getTextFormat(), k = w.getTextStyle();
            Jr(_, S, k);
          })(a, b) : Jr(a, 0, "");
        }
      } else {
        const c = l.key, d = a.focus.key, f = a.getNodes(), p = f.length, g = a.isBackward(), h = g ? s : o, m = g ? o : s, v = g ? d : c, y = g ? c : d;
        let b = 2047, _ = !1;
        for (let w = 0; w < p; w++) {
          const S = f[w], k = S.getTextContentSize();
          if (z(S) && k !== 0 && !(w === 0 && S.__key === v && h === k || w === p - 1 && S.__key === y && m === 0) && (_ = !0, b &= S.getFormat(), b === 0)) break;
        }
        a.format = _ ? b : 0;
      }
    }
    j(n, yd, void 0);
  });
}
function Jr(e, n, t) {
  e.format === n && e.style === t || (e.format = n, e.style = t, e.dirty = !0);
}
function zd(e, n) {
  Jr(e, n.getFormat(), n.getStyle());
}
function Bd(e) {
  if (!e.getTargetRanges) return null;
  const n = e.getTargetRanges();
  return n.length === 0 ? null : n[0];
}
function C0(e) {
  const n = e.inputType, t = Bd(e), r = ie(), o = V();
  if (n === "deleteContentBackward") {
    if (o === null) {
      const d = qn();
      if (!$(d)) return !0;
      Ne(d.clone());
    }
    if ($(o)) {
      const d = o.anchor.key === o.focus.key;
      if (i = e.timeStamp, Md === "MediaLast" && i < _r + 30 && r.isComposing() && d) {
        if (ke(null), _r = 0, setTimeout(() => {
          ft(r, () => {
            ke(null);
          });
        }, 30), $(o)) {
          const f = o.anchor.getNode();
          f.markDirty(), z(f) || M(142), zd(o, f);
        }
      } else {
        ke(null), e.preventDefault();
        const f = o.anchor.getNode(), p = f.getTextContent(), g = f.canInsertTextAfter(), h = o.anchor.offset === 0 && o.focus.offset === p.length;
        let m = Da && d && !h && g;
        if (m && o.isCollapsed() && (m = !ee(ls(o.anchor, !0))), !m) {
          j(r, Jt, !0);
          const v = V();
          Da && $(v) && v.isCollapsed() && (Wt = v, setTimeout(() => Wt = null));
        }
      }
      return !0;
    }
  }
  var i;
  if (!$(o)) return !0;
  const s = e.data;
  Cn !== null && Ys(!1, r, Cn), o.dirty && Cn === null || !o.isCollapsed() || ye(o.anchor.getNode()) || t === null || o.applyDOMRange(t), Cn = null;
  const a = o.anchor, l = o.focus, u = a.getNode(), c = l.getNode();
  if (n === "insertText" || n === "insertTranspose") {
    if (s === `
`) e.preventDefault(), j(r, Tn, !1);
    else if (s === zt) e.preventDefault(), j(r, br, void 0);
    else if (s == null && e.dataTransfer) {
      const d = e.dataTransfer.getData("text/plain");
      e.preventDefault(), o.insertRawText(d);
    } else s != null && Dd(o, t, s, e.timeStamp, !0) ? (e.preventDefault(), j(r, An, s)) : Cn = s;
    return Pd = e.timeStamp, !0;
  }
  switch (e.preventDefault(), n) {
    case "insertFromYank":
    case "insertFromDrop":
    case "insertReplacementText":
      j(r, An, e);
      break;
    case "insertFromComposition":
      ke(null), j(r, An, e);
      break;
    case "insertLineBreak":
      ke(null), j(r, Tn, !1);
      break;
    case "insertParagraph":
      ke(null), cr && !Gn ? (cr = !1, j(r, Tn, !1)) : j(r, br, void 0);
      break;
    case "insertFromPaste":
    case "insertFromPasteAsQuotation":
      j(r, Ms, e);
      break;
    case "deleteByComposition":
      (function(d, f) {
        return d !== f || A(d) || A(f) || !Yt(d) || !Yt(f);
      })(u, c) && j(r, Ji, e);
      break;
    case "deleteByDrag":
    case "deleteByCut":
      j(r, Ji, e);
      break;
    case "deleteContent":
      j(r, Jt, !1);
      break;
    case "deleteWordBackward":
      j(r, vr, !0);
      break;
    case "deleteWordForward":
      j(r, vr, !1);
      break;
    case "deleteHardLineBackward":
    case "deleteSoftLineBackward":
      j(r, xr, !0);
      break;
    case "deleteContentForward":
    case "deleteHardLineForward":
    case "deleteSoftLineForward":
      j(r, xr, !1);
      break;
    case "formatStrikeThrough":
      j(r, ct, "strikethrough");
      break;
    case "formatBold":
      j(r, ct, "bold");
      break;
    case "formatItalic":
      j(r, ct, "italic");
      break;
    case "formatUnderline":
      j(r, ct, "underline");
      break;
    case "historyUndo":
      j(r, Ps, void 0);
      break;
    case "historyRedo":
      j(r, Ls, void 0);
  }
  return !0;
}
function k0(e) {
  if (be(e.target) && sf(e.target)) return !0;
  const n = ie(), t = V(), r = e.data, o = Bd(e);
  if (r != null && $(t) && Dd(t, o, r, e.timeStamp, !1)) {
    sr && (po(n, r), sr = !1);
    const i = t.anchor.getNode(), s = at(We(n));
    if (s === null) return !0;
    const a = t.isBackward(), l = a ? t.anchor.offset : t.focus.offset, u = a ? t.focus.offset : t.anchor.offset;
    io && !t.isCollapsed() && z(i) && s.anchorNode !== null && i.getTextContent().slice(0, l) + r + i.getTextContent().slice(l + u) === hf(s.anchorNode) || j(n, An, r);
    const c = r.length;
    tn && c > 1 && e.inputType === "insertCompositionText" && !n.isComposing() && (t.anchor.offset -= c), kr || Gn || Er || !n.isComposing() || (_r = 0, ke(null));
  } else
    Ys(!1, n, r !== null ? r : void 0), sr && (po(n, r || void 0), sr = !1);
  return (function() {
    xe();
    const i = ie();
    ad(i);
  })(), !0;
}
function E0(e) {
  const n = ie(), t = V();
  if ($(t) && !n.isComposing()) {
    const r = t.anchor, o = t.anchor.getNode();
    ke(r.key), (e.timeStamp < _r + 30 || r.type === "element" || !t.isCollapsed() || o.getFormat() !== t.format || z(o) && o.getStyle() !== t.style) && j(n, An, Zb);
  }
  return !0;
}
function N0(e) {
  return po(ie(), e.data), !0;
}
function po(e, n) {
  const t = e._compositionKey;
  if (ke(null), t !== null && n != null) {
    if (n === "") {
      const r = me(t), o = Pn(e.getElementByKey(t));
      return void (o !== null && o.nodeValue !== null && z(r) && Xs(r, o.nodeValue, null, null, !0));
    }
    if (n[n.length - 1] === `
`) {
      const r = V();
      if ($(r)) {
        const o = r.focus;
        return r.anchor.set(o.key, o.offset, o.type), void j(e, fo, null);
      }
    }
  }
  Ys(!0, e, n);
}
function R0(e) {
  const n = ie();
  if (e.key == null) return !0;
  if (ns && Sl(e)) return ft(n, () => {
    po(n, rs);
  }), ns = !1, rs = "", !0;
  if ((function(t) {
    return oe(t, "ArrowRight", { shiftKey: "any" });
  })(e)) j(n, Sd, e);
  else if ((function(t) {
    return oe(t, "ArrowRight", bt);
  })(e)) j(n, g0, e);
  else if ((function(t) {
    return oe(t, "ArrowLeft", { shiftKey: "any" });
  })(e)) j(n, Cd, e);
  else if ((function(t) {
    return oe(t, "ArrowLeft", bt);
  })(e)) j(n, p0, e);
  else if ((function(t) {
    return oe(t, "ArrowUp", { altKey: "any", shiftKey: "any" });
  })(e)) j(n, kd, e);
  else if ((function(t) {
    return oe(t, "ArrowDown", { altKey: "any", shiftKey: "any" });
  })(e)) j(n, Ed, e);
  else if ((function(t) {
    return oe(t, "Enter", { altKey: "any", ctrlKey: "any", metaKey: "any", shiftKey: !0 });
  })(e)) cr = !0, j(n, fo, e);
  else if ((function(t) {
    return t.key === " ";
  })(e)) j(n, Nd, e);
  else if ((function(t) {
    return Ye && oe(t, "o", { ctrlKey: !0 });
  })(e)) e.preventDefault(), cr = !0, j(n, Tn, !0);
  else if ((function(t) {
    return oe(t, "Enter", { altKey: "any", ctrlKey: "any", metaKey: "any" });
  })(e)) cr = !1, j(n, fo, e);
  else if ((function(t) {
    return oe(t, "Backspace", { shiftKey: "any" }) || Ye && oe(t, "h", { ctrlKey: !0 });
  })(e)) Sl(e) ? j(n, Rd, e) : (e.preventDefault(), j(n, Jt, !0));
  else if ((function(t) {
    return t.key === "Escape";
  })(e)) j(n, Td, e);
  else if ((function(t) {
    return oe(t, "Delete", {}) || Ye && oe(t, "d", { ctrlKey: !0 });
  })(e)) (function(t) {
    return t.key === "Delete";
  })(e) ? j(n, Ad, e) : (e.preventDefault(), j(n, Jt, !1));
  else if ((function(t) {
    return oe(t, "Backspace", wl);
  })(e)) e.preventDefault(), j(n, vr, !0);
  else if ((function(t) {
    return oe(t, "Delete", wl);
  })(e)) e.preventDefault(), j(n, vr, !1);
  else if ((function(t) {
    return Ye && oe(t, "Backspace", { metaKey: !0 });
  })(e)) e.preventDefault(), j(n, xr, !0);
  else if ((function(t) {
    return Ye && (oe(t, "Delete", { metaKey: !0 }) || oe(t, "k", { ctrlKey: !0 }));
  })(e)) e.preventDefault(), j(n, xr, !1);
  else if ((function(t) {
    return oe(t, "b", bt);
  })(e)) e.preventDefault(), j(n, ct, "bold");
  else if ((function(t) {
    return oe(t, "u", bt);
  })(e)) e.preventDefault(), j(n, ct, "underline");
  else if ((function(t) {
    return oe(t, "i", bt);
  })(e)) e.preventDefault(), j(n, ct, "italic");
  else if ((function(t) {
    return oe(t, "Tab", { shiftKey: "any" });
  })(e)) j(n, Fd, e);
  else if ((function(t) {
    return oe(t, "z", bt);
  })(e)) e.preventDefault(), j(n, Ps, void 0);
  else if ((function(t) {
    return Ye ? oe(t, "z", { metaKey: !0, shiftKey: !0 }) : oe(t, "y", { ctrlKey: !0 }) || oe(t, "z", { ctrlKey: !0, shiftKey: !0 });
  })(e)) e.preventDefault(), j(n, Ls, void 0);
  else {
    const t = n._editorState._selection;
    t === null || $(t) ? Cl(e) && (e.preventDefault(), j(n, Yi, e)) : (function(r) {
      return oe(r, "c", bt);
    })(e) ? (e.preventDefault(), j(n, Lo, e)) : (function(r) {
      return oe(r, "x", bt);
    })(e) ? (e.preventDefault(), j(n, Ds, e)) : Cl(e) && (e.preventDefault(), j(n, Yi, e));
  }
  return (function(t) {
    return t.ctrlKey || t.shiftKey || t.altKey || t.metaKey;
  })(e) && n.dispatchCommand(S0, e), !0;
}
function Vd(e) {
  let n = e.__lexicalEventHandles;
  return n === void 0 && (n = [], e.__lexicalEventHandles = n), n;
}
const Fn = /* @__PURE__ */ new Map();
function Ud(e) {
  const n = av(e.target);
  if (n === null) return;
  const t = af(n.anchorNode);
  if (t === null) return;
  ts && (ts = !1, ft(t, () => {
    const l = qn(), u = n.anchorNode;
    (be(u) || Rt(u)) && Ne(Vs(l, n, t, e));
  }));
  const r = Js(t), o = r[r.length - 1], i = o._key, s = Fn.get(i), a = s || o;
  a !== t && Xa(n, a, !1), Xa(n, t, !0), t !== o ? Fn.set(i, t) : s && Fn.delete(i);
}
function Qa(e) {
  e._lexicalHandled = !0;
}
function el(e) {
  return e._lexicalHandled === !0;
}
function T0(e) {
  const n = Qi.get(e);
  if (n === void 0) return;
  const t = go.get(n);
  if (t === void 0) return;
  const r = t - 1;
  r >= 0 || M(164), Qi.delete(e), go.set(n, r), r === 0 && n.removeEventListener("selectionchange", Ud);
  const o = Uo(e);
  Zs(o) ? ((function(s) {
    if (s._parentEditor !== null) {
      const a = Js(s), l = a[a.length - 1]._key;
      Fn.get(l) === s && Fn.delete(l);
    } else Fn.delete(s._key);
  })(o), e.__lexicalEditor = null) : o && M(198);
  const i = Vd(e);
  for (let s = 0; s < i.length; s++) i[s]();
  e.__lexicalEventHandles = [];
}
function os(e, n, t) {
  xe();
  const r = e.__key, o = e.getParent();
  if (o === null) return;
  const i = (function(a) {
    const l = V();
    if (!$(l) || !A(a)) return l;
    const { anchor: u, focus: c } = l, d = u.getNode(), f = c.getNode();
    return us(d, a) && u.set(a.__key, 0, "element"), us(f, a) && c.set(a.__key, 0, "element"), l;
  })(e);
  let s = !1;
  if ($(i) && n) {
    const a = i.anchor, l = i.focus;
    a.key === r && (bo(a, e, o, e.getPreviousSibling(), e.getNextSibling()), s = !0), l.key === r && (bo(l, e, o, e.getPreviousSibling(), e.getNextSibling()), s = !0);
  } else Te(i) && n && e.isSelected() && e.selectPrevious();
  if ($(i) && n && !s) {
    const a = e.getIndexWithinParent();
    Xt(e), yo(i, o, a, -1);
  } else Xt(e);
  t || Fe(o) || o.canBeEmpty() || !o.isEmpty() || os(o, n), n && i && ye(o) && o.isEmpty() && o.selectEnd();
}
const jd = Symbol.for("ephemeral");
function ho(e) {
  return e[jd] || !1;
}
class et {
  constructor(n) {
    T(this, "__type");
    T(this, "__key");
    T(this, "__parent");
    T(this, "__prev");
    T(this, "__next");
    T(this, "__state");
    this.__type = this.constructor.getType(), this.__parent = null, this.__prev = null, this.__next = null, Object.defineProperty(this, "__state", { configurable: !0, enumerable: !1, value: void 0, writable: !0 }), ev(this, n);
  }
  static getType() {
    const { ownNodeType: n } = Ko(this);
    return n === void 0 && M(64, this.name), n;
  }
  static clone(n) {
    M(65, this.name);
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
    M(137, this.constructor.name);
  }
  isAttached() {
    let n = this.__key;
    for (; n !== null; ) {
      if (n === "root") return !0;
      const t = me(n);
      if (t === null) break;
      n = t.__parent;
    }
    return !1;
  }
  isSelected(n) {
    const t = n || V();
    if (t == null) return !1;
    const r = t.getNodes().some((o) => o.__key === this.__key);
    if (z(this)) return r;
    if ($(t) && t.anchor.type === "element" && t.focus.type === "element") {
      if (t.isCollapsed()) return !1;
      const o = this.getParent();
      if (ee(this) && this.isInline() && o) {
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
    return n === null ? null : me(n);
  }
  getParentOrThrow() {
    const n = this.getParent();
    return n === null && M(66, this.__key), n;
  }
  getTopLevelElement() {
    let n = this;
    for (; n !== null; ) {
      const t = n.getParent();
      if (Fe(t)) return A(n) || n === this && ee(n) || M(194), n;
      n = t;
    }
    return null;
  }
  getTopLevelElementOrThrow() {
    const n = this.getTopLevelElement();
    return n === null && M(67, this.__key), n;
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
    return n === null ? null : me(n);
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
    return n === null ? null : me(n);
  }
  getNextSiblings() {
    const n = [];
    let t = this.getNextSibling();
    for (; t !== null; ) n.push(t), t = t.getNextSibling();
    return n;
  }
  getCommonAncestor(n) {
    const t = A(this) ? this : this.getParent(), r = A(n) ? n : n.getParent(), o = t && r ? Xr(t, r) : null;
    return o ? o.commonAncestor : null;
  }
  is(n) {
    return n != null && this.__key === n.__key;
  }
  isBefore(n) {
    const t = Xr(this, n);
    return t !== null && (t.type === "descendant" || (t.type === "branch" ? Sf(t) === -1 : (t.type !== "same" && t.type !== "ancestor" && M(279), !1)));
  }
  isParentOf(n) {
    const t = Xr(this, n);
    return t !== null && t.type === "ancestor";
  }
  getNodesBetween(n) {
    const t = this.isBefore(n), r = [], o = /* @__PURE__ */ new Set();
    let i = this;
    for (; i !== null; ) {
      const s = i.__key;
      if (o.has(s) || (o.add(s), r.push(i)), i === n) break;
      const a = A(i) ? t ? i.getFirstChild() : i.getLastChild() : null;
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
        if (d === null && M(68), c = t ? d.getNextSibling() : d.getPreviousSibling(), d = d.getParent(), d === null) break;
        c !== null || o.has(d.__key) || r.push(d);
      } while (c === null);
      i = c;
    }
    return t || r.reverse(), r;
  }
  isDirty() {
    const n = ie()._dirtyLeaves;
    return n !== null && n.has(this.__key);
  }
  getLatest() {
    if (ho(this)) return this;
    const n = me(this.__key);
    return n === null && M(113), n;
  }
  getWritable() {
    if (ho(this)) return this;
    xe();
    const n = Vt(), t = ie(), r = n._nodeMap, o = this.__key, i = this.getLatest(), s = t._cloneNotNeeded, a = V();
    if (a !== null && a.setCachedNodes(null), s.has(o)) return xo(i), i;
    const l = vf(i);
    return s.add(o), xo(l), r.set(o, l), l;
  }
  getTextContent() {
    return "";
  }
  getTextContentSize() {
    return this.getTextContent().length;
  }
  createDOM(n, t) {
    M(70);
  }
  updateDOM(n, t, r) {
    M(71);
  }
  exportDOM(n) {
    return { element: this.createDOM(n._config, n) };
  }
  exportJSON() {
    const n = this.__state ? this.__state.toJSON() : void 0;
    return { type: this.__type, version: 1, ...n };
  }
  static importJSON(n) {
    M(18, this.name);
  }
  updateFromJSON(n) {
    return (function(t, r) {
      const o = t.getWritable(), i = r.$;
      let s = i;
      for (const a of fd(o).flatKeys) a in r && (s !== void 0 && s !== i || (s = { ...i }), s[a] = r[a]);
      return (o.__state || s) && dd(t).updateFromJSON(s), o;
    })(this, n);
  }
  static transform() {
    return null;
  }
  remove(n) {
    os(this, !0, n);
  }
  replace(n, t) {
    xe();
    let r = V();
    r !== null && (r = r.clone()), vi(this, n);
    const o = this.getLatest(), i = this.__key, s = n.__key, a = n.getWritable(), l = this.getParentOrThrow().getWritable(), u = l.__size;
    Xt(a);
    const c = o.getPreviousSibling(), d = o.getNextSibling(), f = o.__prev, p = o.__next, g = o.__parent;
    if (os(o, !1, !0), c === null ? l.__first = s : c.getWritable().__next = s, a.__prev = f, d === null ? l.__last = s : d.getWritable().__prev = s, a.__next = p, a.__parent = g, l.__size = u, t && (A(this) && A(a) || M(139), this.getChildren().forEach((h) => {
      a.append(h);
    })), $(r)) {
      Ne(r);
      const h = r.anchor, m = r.focus;
      h.key === i && ol(h, a), m.key === i && ol(m, a);
    }
    return It() === i && ke(s), a;
  }
  insertAfter(n, t = !0) {
    xe(), vi(this, n);
    const r = this.getWritable(), o = n.getWritable(), i = o.getParent(), s = V();
    let a = !1, l = !1;
    if (i !== null) {
      const p = n.getIndexWithinParent();
      if (Xt(o), $(s)) {
        const g = i.__key, h = s.anchor, m = s.focus;
        a = h.type === "element" && h.key === g && h.offset === p + 1, l = m.type === "element" && m.key === g && m.offset === p + 1;
      }
    }
    const u = this.getNextSibling(), c = this.getParentOrThrow().getWritable(), d = o.__key, f = r.__next;
    if (u === null ? c.__last = d : u.getWritable().__prev = d, c.__size++, r.__next = d, o.__next = f, o.__prev = r.__key, o.__parent = r.__parent, t && $(s)) {
      const p = this.getIndexWithinParent();
      yo(s, c, p + 1);
      const g = c.__key;
      a && s.anchor.set(g, p + 2, "element"), l && s.focus.set(g, p + 2, "element");
    }
    return n;
  }
  insertBefore(n, t = !0) {
    xe(), vi(this, n);
    const r = this.getWritable(), o = n.getWritable(), i = o.__key;
    Xt(o);
    const s = this.getPreviousSibling(), a = this.getParentOrThrow().getWritable(), l = r.__prev, u = this.getIndexWithinParent();
    s === null ? a.__first = i : s.getWritable().__next = i, a.__size++, r.__prev = i, o.__prev = l, o.__next = r.__key, o.__parent = r.__parent;
    const c = V();
    return t && $(c) && yo(c, this.getParentOrThrow(), u), n;
  }
  isParentRequired() {
    return !1;
  }
  createParentElementNode() {
    return fe();
  }
  selectStart() {
    return this.selectPrevious();
  }
  selectEnd() {
    return this.selectNext(0, 0);
  }
  selectPrevious(n, t) {
    xe();
    const r = this.getPreviousSibling(), o = this.getParentOrThrow();
    if (r === null) return o.select(0, 0);
    if (A(r)) return r.select();
    if (!z(r)) {
      const i = r.getIndexWithinParent() + 1;
      return o.select(i, i);
    }
    return r.select(n, t);
  }
  selectNext(n, t) {
    xe();
    const r = this.getNextSibling(), o = this.getParentOrThrow();
    if (r === null) return o.select();
    if (A(r)) return r.select(0, 0);
    if (!z(r)) {
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
T(et, "importDOM");
const mo = "historic", A0 = "history-push", In = "history-merge", F0 = "paste", Gd = "collaboration", I0 = "skip-scroll-into-view", O0 = "skip-dom-selection", $0 = "skip-selection-focus";
class Hn extends et {
  static getType() {
    return "linebreak";
  }
  static clone(n) {
    return new Hn(n.__key);
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
      if (r !== null && _o(r)) {
        const o = r.firstChild;
        if (o === t || o.nextSibling === t && Br(o)) {
          const i = r.lastChild;
          if (i === t || i.previousSibling === t && Br(i)) return !0;
        }
      }
      return !1;
    })(n) || (function(t) {
      const r = t.parentElement;
      if (r !== null && _o(r)) {
        const o = r.firstChild;
        if (o === t || o.nextSibling === t && Br(o)) return !1;
        const i = r.lastChild;
        if (i === t || i.previousSibling === t && Br(i)) return !0;
      }
      return !1;
    })(n) ? null : { conversion: M0, priority: 0 } };
  }
  static importJSON(n) {
    return nt().updateFromJSON(n);
  }
}
function M0(e) {
  return { node: nt() };
}
function nt() {
  return qe(new Hn());
}
function $t(e) {
  return e instanceof Hn;
}
function Br(e) {
  return Rt(e) && /^( |\t|\r?\n)+$/.test(e.textContent || "");
}
function pi(e, n) {
  return 16 & n ? "code" : n & od ? "mark" : 32 & n ? "sub" : 64 & n ? "sup" : null;
}
function hi(e, n) {
  return 1 & n ? "strong" : 2 & n ? "em" : "span";
}
function Hd(e, n, t, r, o) {
  const i = r.classList;
  let s = On(o, "base");
  s !== void 0 && i.add(...s), s = On(o, "underlineStrikethrough");
  let a = !1;
  const l = 8 & n && 4 & n;
  s !== void 0 && (8 & t && 4 & t ? (a = !0, l || i.add(...s)) : l && i.remove(...s));
  for (const u in nn) {
    const c = nn[u];
    if (s = On(o, u), s !== void 0) if (t & c) {
      if (a && (u === "underline" || u === "strikethrough")) {
        n & c && i.remove(...s);
        continue;
      }
      ((n & c) === 0 || l && u === "underline" || u === "strikethrough") && i.add(...s);
    } else n & c && i.remove(...s);
  }
}
function Kd(e, n, t) {
  const r = n.firstChild, o = t.isComposing(), i = e + (o ? Mo : "");
  if (r == null) n.textContent = i;
  else {
    const s = r.nodeValue;
    if (s !== i) if (o || tn) {
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
function tl(e, n, t, r, o, i) {
  Kd(o, e, n);
  const s = i.theme.text;
  s !== void 0 && Hd(0, 0, r, e, s);
}
function Vr(e, n) {
  const t = document.createElement(n);
  return t.appendChild(e), t;
}
class Nt extends et {
  constructor(t = "", r) {
    super(r);
    T(this, "__text");
    T(this, "__format");
    T(this, "__style");
    T(this, "__mode");
    T(this, "__detail");
    this.__text = t, this.__format = 0, this.__style = "", this.__mode = 0, this.__detail = 0;
  }
  static getType() {
    return "text";
  }
  static clone(t) {
    return new Nt(t.__text, t.__key);
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
    return Qb[t.__mode];
  }
  getStyle() {
    return this.getLatest().__style;
  }
  isToken() {
    return this.getLatest().__mode === 1;
  }
  isComposing() {
    return this.__key === It();
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
    const r = nn[t];
    return (this.getFormat() & r) !== 0;
  }
  isSimpleText() {
    return this.__type === "text" && this.__mode === 0;
  }
  getTextContent() {
    return this.getLatest().__text;
  }
  getFormatFlags(t, r) {
    return vo(this.getLatest().__format, t, r);
  }
  canHaveFormat() {
    return !0;
  }
  isInline() {
    return !0;
  }
  createDOM(t, r) {
    const o = this.__format, i = pi(0, o), s = hi(0, o), a = i === null ? s : i, l = document.createElement(a);
    let u = l;
    this.hasFormat("code") && l.setAttribute("spellcheck", "false"), i !== null && (u = document.createElement(s), l.appendChild(u)), tl(u, this, 0, o, this.__text, t);
    const c = this.__style;
    return c !== "" && (l.style.cssText = c), l;
  }
  updateDOM(t, r, o) {
    const i = this.__text, s = t.__format, a = this.__format, l = pi(0, s), u = pi(0, a), c = hi(0, s), d = hi(0, a);
    if ((l === null ? c : l) !== (u === null ? d : u)) return !0;
    if (l === u && c !== d) {
      const m = r.firstChild;
      m == null && M(48);
      const v = document.createElement(d);
      return tl(v, this, 0, a, i, o), r.replaceChild(v, m), !1;
    }
    let f = r;
    u !== null && l !== null && (f = r.firstChild, f == null && M(49)), Kd(i, f, this);
    const p = o.theme.text;
    p !== void 0 && s !== a && Hd(0, s, a, f, p);
    const g = t.__style, h = this.__style;
    return g !== h && (r.style.cssText = h), !1;
  }
  static importDOM() {
    return { "#text": () => ({ conversion: z0, priority: 0 }), b: () => ({ conversion: L0, priority: 0 }), code: () => ({ conversion: yt, priority: 0 }), em: () => ({ conversion: yt, priority: 0 }), i: () => ({ conversion: yt, priority: 0 }), mark: () => ({ conversion: yt, priority: 0 }), s: () => ({ conversion: yt, priority: 0 }), span: () => ({ conversion: P0, priority: 0 }), strong: () => ({ conversion: yt, priority: 0 }), sub: () => ({ conversion: yt, priority: 0 }), sup: () => ({ conversion: yt, priority: 0 }), u: () => ({ conversion: yt, priority: 0 }) };
  }
  static importJSON(t) {
    return he().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setTextContent(t.text).setFormat(t.format).setDetail(t.detail).setMode(t.mode).setStyle(t.style);
  }
  exportDOM(t) {
    let { element: r } = super.exportDOM(t);
    return be(r) || M(132), r.style.whiteSpace = "pre-wrap", this.hasFormat("lowercase") ? r.style.textTransform = "lowercase" : this.hasFormat("uppercase") ? r.style.textTransform = "uppercase" : this.hasFormat("capitalize") && (r.style.textTransform = "capitalize"), this.hasFormat("bold") && (r = Vr(r, "b")), this.hasFormat("italic") && (r = Vr(r, "i")), this.hasFormat("strikethrough") && (r = Vr(r, "s")), this.hasFormat("underline") && (r = Vr(r, "u")), { element: r };
  }
  exportJSON() {
    return { detail: this.getDetail(), format: this.getFormat(), mode: this.getMode(), style: this.getStyle(), text: this.getTextContent(), ...super.exportJSON() };
  }
  selectionTransform(t, r) {
  }
  setFormat(t) {
    const r = this.getWritable();
    return r.__format = typeof t == "string" ? nn[t] : t, r;
  }
  setDetail(t) {
    const r = this.getWritable();
    return r.__detail = typeof t == "string" ? Jb[t] : t, r;
  }
  setStyle(t) {
    const r = this.getWritable();
    return r.__style = t, r;
  }
  toggleFormat(t) {
    const r = vo(this.getFormat(), t, null);
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
    const r = Xb[t];
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
    xe();
    let o = t, i = r;
    const s = V(), a = this.getTextContent(), l = this.__key;
    if (typeof a == "string") {
      const u = a.length;
      o === void 0 && (o = u), i === void 0 && (i = u);
    } else o = 0, i = 0;
    if (!$(s)) return Zd(l, o, l, i, "text", "text");
    {
      const u = It();
      u !== s.anchor.key && u !== s.focus.key || ke(l), s.setTextNodeRange(this, o, this, i);
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
    const c = V();
    if (i && $(c)) {
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
    xe();
    const r = this.getLatest(), o = r.getTextContent();
    if (o === "") return [];
    const i = r.__key, s = It(), a = o.length;
    t.sort((E, R) => E - R), t.push(a);
    const l = [], u = t.length;
    for (let E = 0, R = 0; E < a && R <= u; R++) {
      const O = t[R];
      O > E && (l.push(o.slice(E, O)), E = O);
    }
    const c = l.length;
    if (c === 1) return [r];
    const d = l[0], f = r.getParent();
    let p;
    const g = r.getFormat(), h = r.getStyle(), m = r.__detail;
    let v = !1, y = null, b = null;
    const _ = V();
    if ($(_)) {
      const [E, R] = _.isBackward() ? [_.focus, _.anchor] : [_.anchor, _.focus];
      E.type === "text" && E.key === i && (y = E), R.type === "text" && R.key === i && (b = R);
    }
    r.isSegmented() ? (p = he(d), p.__format = g, p.__style = h, p.__detail = m, p.__state = Ga(r, p), v = !0) : p = r.setTextContent(d);
    const w = [p];
    for (let E = 1; E < c; E++) {
      const R = he(l[E]);
      R.__format = g, R.__style = h, R.__detail = m, R.__state = Ga(r, R);
      const O = R.__key;
      s === i && ke(O), w.push(R);
    }
    const S = y ? y.offset : null, k = b ? b.offset : null;
    let N = 0;
    for (const E of w) {
      if (!y && !b) break;
      const R = N + E.getTextContentSize();
      if (y !== null && S !== null && S <= R && S >= N && (y.set(E.getKey(), S - N, "text"), S < R && (y = null)), b !== null && k !== null && k <= R && k >= N) {
        b.set(E.getKey(), k - N, "text");
        break;
      }
      N = R;
    }
    if (f !== null) {
      (function(O) {
        const I = O.getPreviousSibling(), B = O.getNextSibling();
        I !== null && xo(I), B !== null && xo(B);
      })(this);
      const E = f.getWritable(), R = this.getIndexWithinParent();
      v ? (E.splice(R, 0, w), this.remove()) : E.splice(R, 1, w), $(_) && yo(_, f, R, c - 1);
    }
    return w;
  }
  mergeWithSibling(t) {
    const r = t === this.getPreviousSibling();
    r || t === this.getNextSibling() || M(50);
    const o = this.__key, i = t.__key, s = this.__text, a = s.length;
    It() === i && ke(o);
    const l = V();
    if ($(l)) {
      const f = l.anchor, p = l.focus;
      f !== null && f.key === i && dl(f, r, o, t, a), p !== null && p.key === i && dl(p, r, o, t, a);
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
function P0(e) {
  return { forChild: zs(e.style), node: null };
}
function L0(e) {
  const n = e, t = n.style.fontWeight === "normal";
  return { forChild: zs(n.style, t ? void 0 : "bold"), node: null };
}
const nl = /* @__PURE__ */ new WeakMap();
function D0(e) {
  if (!be(e)) return !1;
  if (e.nodeName === "PRE") return !0;
  const n = e.style.whiteSpace;
  return typeof n == "string" && n.startsWith("pre");
}
function z0(e) {
  const n = e;
  e.parentElement === null && M(129);
  let t = n.textContent || "";
  if ((function(r) {
    let o, i = r.parentNode;
    const s = [r];
    for (; i !== null && (o = nl.get(i)) === void 0 && !D0(i); ) s.push(i), i = i.parentNode;
    const a = o === void 0 ? i : o;
    for (let l = 0; l < s.length; l++) nl.set(s[l], a);
    return a;
  })(n) !== null) {
    const r = t.split(/(\r?\n|\t)/), o = [], i = r.length;
    for (let s = 0; s < i; s++) {
      const a = r[s];
      a === `
` || a === `\r
` ? o.push(nt()) : a === "	" ? o.push(Wn()) : a !== "" && o.push(he(a));
    }
    return { node: o };
  }
  if (t = t.replace(/\r/g, "").replace(/[ \t\n]+/g, " "), t === "") return { node: null };
  if (t[0] === " ") {
    let r = n, o = !0;
    for (; r !== null && (r = rl(r, !1)) !== null; ) {
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
    for (; r !== null && (r = rl(r, !0)) !== null; )
      if ((r.textContent || "").replace(/^( |\t|\r?\n)+/, "").length > 0) {
        o = !1;
        break;
      }
    o && (t = t.slice(0, t.length - 1));
  }
  return t === "" ? { node: null } : { node: he(t) };
}
function rl(e, n) {
  let t = e;
  for (; ; ) {
    let r;
    for (; (r = n ? t.nextSibling : t.previousSibling) === null; ) {
      const i = t.parentElement;
      if (i === null) return null;
      t = i;
    }
    if (t = r, be(t)) {
      const i = t.style.display;
      if (i === "" && !fs(t) || i !== "" && !i.startsWith("inline")) return null;
    }
    let o = t;
    for (; (o = n ? t.firstChild : t.lastChild) !== null; ) t = o;
    if (Rt(t)) return t;
    if (t.nodeName === "BR") return null;
  }
}
const B0 = { code: "code", em: "italic", i: "italic", mark: "highlight", s: "strikethrough", strong: "bold", sub: "subscript", sup: "superscript", u: "underline" };
function yt(e) {
  const n = B0[e.nodeName.toLowerCase()];
  return n === void 0 ? { node: null } : { forChild: zs(e.style, n), node: null };
}
function he(e = "") {
  return qe(new Nt(e));
}
function z(e) {
  return e instanceof Nt;
}
function zs(e, n) {
  const t = e.fontWeight, r = e.textDecoration.split(" "), o = t === "700" || t === "bold", i = r.includes("line-through"), s = e.fontStyle === "italic", a = r.includes("underline"), l = e.verticalAlign;
  return (u) => (z(u) && (o && !u.hasFormat("bold") && u.toggleFormat("bold"), i && !u.hasFormat("strikethrough") && u.toggleFormat("strikethrough"), s && !u.hasFormat("italic") && u.toggleFormat("italic"), a && !u.hasFormat("underline") && u.toggleFormat("underline"), l !== "sub" || u.hasFormat("subscript") || u.toggleFormat("subscript"), l !== "super" || u.hasFormat("superscript") || u.toggleFormat("superscript"), n && !u.hasFormat(n) && u.toggleFormat(n)), u);
}
class Kn extends Nt {
  static getType() {
    return "tab";
  }
  static clone(n) {
    return new Kn(n.__key);
  }
  constructor(n) {
    super("	", n), this.__detail = 2;
  }
  static importDOM() {
    return null;
  }
  createDOM(n) {
    const t = super.createDOM(n), r = On(n.theme, "tab");
    return r !== void 0 && t.classList.add(...r), t;
  }
  static importJSON(n) {
    return Wn().updateFromJSON(n);
  }
  setTextContent(n) {
    return n !== "	" && n !== "" && td(126), super.setTextContent("	");
  }
  spliceText(n, t, r, o) {
    return r === "" && t === 0 || r === "	" && t === 1 || M(286), this;
  }
  setDetail(n) {
    return n !== 2 && M(127), this;
  }
  setMode(n) {
    return n !== "normal" && M(128), this;
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function Wn() {
  return qe(new Kn());
}
function Do(e) {
  return e instanceof Kn;
}
class V0 {
  constructor(n, t, r) {
    T(this, "key");
    T(this, "offset");
    T(this, "type");
    T(this, "_selection");
    this._selection = null, this.key = n, this.offset = t, this.type = r;
  }
  is(n) {
    return this.key === n.key && this.offset === n.offset && this.type === n.type;
  }
  isBefore(n) {
    return this.key === n.key ? this.offset < n.offset : wf(He(kt(this, "next")), He(kt(n, "next"))) < 0;
  }
  getNode() {
    const n = me(this.key);
    return n === null && M(20), n;
  }
  set(n, t, r, o) {
    const i = this._selection, s = this.key;
    o && this.key === n && this.offset === t && this.type === r || (this.key = n, this.offset = t, this.type = r, Nr() || (It() === s && ke(n), i !== null && (i.setCachedNodes(null), i.dirty = !0)));
  }
}
function pt(e, n, t) {
  return new V0(e, n, t);
}
function mi(e, n) {
  let t = n.__key, r = e.offset, o = "element";
  if (z(n)) {
    o = "text";
    const i = n.getTextContentSize();
    r > i && (r = i);
  } else if (!A(n)) {
    const i = n.getNextSibling();
    if (z(i)) t = i.__key, r = 0, o = "text";
    else {
      const s = n.getParent();
      s && (t = s.__key, r = n.getIndexWithinParent() + 1);
    }
  }
  e.set(t, r, o);
}
function ol(e, n) {
  if (A(n)) {
    const t = n.getLastDescendant();
    A(t) || z(t) ? mi(e, t) : mi(e, n);
  } else mi(e, n);
}
class zo {
  constructor(n) {
    T(this, "_nodes");
    T(this, "_cachedNodes");
    T(this, "dirty");
    this._cachedNodes = null, this._nodes = n, this.dirty = !1;
  }
  getCachedNodes() {
    return this._cachedNodes;
  }
  setCachedNodes(n) {
    this._cachedNodes = n;
  }
  is(n) {
    if (!Te(n)) return !1;
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
    return new zo(new Set(this._nodes));
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
    if (z(o)) i = o.select();
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
      const i = me(o);
      i !== null && r.push(i);
    }
    return Nr() || (this._cachedNodes = r), r;
  }
  getTextContent() {
    const n = this.getNodes();
    let t = "";
    for (let r = 0; r < n.length; r++) t += n[r].getTextContent();
    return t;
  }
  deleteNodes() {
    const n = this.getNodes();
    if ((V() || qn()) === this && n[0]) {
      const t = Ee(n[0], "next");
      vv(Bt(t, t));
    }
    for (const t of n) t.remove();
  }
}
function $(e) {
  return e instanceof pn;
}
class pn {
  constructor(n, t, r, o) {
    T(this, "format");
    T(this, "style");
    T(this, "anchor");
    T(this, "focus");
    T(this, "_cachedNodes");
    T(this, "dirty");
    this.anchor = n, this.focus = t, n._selection = this, t._selection = this, this._cachedNodes = null, this.format = r, this.style = o, this.dirty = !1;
  }
  getCachedNodes() {
    return this._cachedNodes;
  }
  setCachedNodes(n) {
    this._cachedNodes = n;
  }
  is(n) {
    return !!$(n) && this.anchor.is(n.anchor) && this.focus.is(n.focus) && this.format === n.format && this.style === n.style;
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
      for (const u of r) if (gt(u)) {
        const { origin: c } = u;
        o.length === 0 ? a.add(c) : (l.add(c), o.push(c));
      } else {
        const { origin: c } = u;
        A(c) && l.has(c) || o.push(c);
      }
      if (s && o.push(s.caret.origin), Dn(r.focus) && A(r.focus.origin) && r.focus.getNodeAtCaret() === null) for (let u = rt(r.focus.origin, "previous"); gt(u) && a.has(u.origin) && !u.origin.isEmpty() && u.origin.is(o[o.length - 1]); u = oa(u)) a.delete(u.origin), o.pop();
      for (; o.length > 1; ) {
        const u = o[o.length - 1];
        if (!A(u) || l.has(u) || u.isEmpty() || a.has(u)) break;
        o.pop();
      }
      if (o.length === 0 && r.isCollapsed()) {
        const u = He(r.anchor), c = He(r.anchor.getFlipped()), d = (p) => Mt(p) ? p.origin : p.getNodeAtCaret(), f = d(u) || d(c) || (r.anchor.getNodeAtCaret() ? u.origin : c.origin);
        o.push(f);
      }
      return o;
    })(kf(Al(this), "next"));
    return Nr() || (this._cachedNodes = t), t;
  }
  setTextNodeRange(n, t, r, o) {
    this.anchor.set(n.__key, t, "text"), this.focus.set(r.__key, o, "text");
  }
  getTextContent() {
    const n = this.getNodes();
    if (n.length === 0) return "";
    const t = n[0], r = n[n.length - 1], o = this.anchor, i = this.focus, s = o.isBefore(i), [a, l] = is(this);
    let u = "", c = !0;
    for (let d = 0; d < n.length; d++) {
      const f = n[d];
      if (A(f) && !f.isInline()) c || (u += `
`), c = !f.isEmpty();
      else if (c = !1, z(f)) {
        let p = f.getTextContent();
        f === t ? f === r ? o.type === "element" && i.type === "element" && i.offset !== o.offset || (p = a < l ? p.slice(a, l) : p.slice(l, a)) : p = s ? p.slice(a) : p.slice(l) : f === r && (p = s ? p.slice(0, l) : p.slice(0, a)), u += p;
      } else !ee(f) && !$t(f) || f === r && this.isCollapsed() || (u += f.getTextContent());
    }
    return u;
  }
  applyDOMRange(n) {
    const t = ie(), r = t.getEditorState()._selection, o = qd(n.startContainer, n.startOffset, n.endContainer, n.endOffset, t, r);
    if (o === null) return;
    const [i, s] = o;
    this.anchor.set(i.key, i.offset, i.type, !0), this.focus.set(s.key, s.offset, s.type, !0), so(this);
  }
  clone() {
    const n = this.anchor, t = this.focus;
    return new pn(pt(n.key, n.offset, n.type), pt(t.key, t.offset, t.type), this.format, this.style);
  }
  toggleFormat(n) {
    this.format = vo(this.format, n, null), this.dirty = !0;
  }
  setFormat(n) {
    this.format = n, this.dirty = !0;
  }
  setStyle(n) {
    this.style = n, this.dirty = !0;
  }
  hasFormat(n) {
    const t = nn[n];
    return (this.format & t) !== 0;
  }
  insertRawText(n) {
    const t = n.split(/(\r?\n|\t)/), r = [], o = t.length;
    for (let i = 0; i < o; i++) {
      const s = t[i];
      s === `
` || s === `\r
` ? r.push(nt()) : s === "	" ? r.push(Wn()) : r.push(he(s));
    }
    this.insertNodes(r);
  }
  insertText(n) {
    const t = this.anchor, r = this.focus, o = this.format, i = this.style;
    let s = t, a = r;
    !this.isCollapsed() && r.isBefore(t) && (s = r, a = t), s.type === "element" && (function(m, v, y, b) {
      const _ = m.getNode(), w = _.getChildAtIndex(m.offset), S = he();
      if (S.setFormat(y), S.setStyle(b), Tr(w)) w.splice(0, 0, [S]);
      else {
        const k = ye(_) ? fe().append(S) : S;
        w === null ? _.append(k) : w.insertBefore(k);
      }
      m.is(v) && v.set(S.__key, 0, "text"), m.set(S.__key, 0, "text");
    })(s, a, o, i), a.type === "element" && dn(a, He(kt(a, "next")));
    const l = s.offset;
    let u = a.offset;
    const c = this.getNodes(), d = c.length;
    let f = c[0];
    z(f) || M(26);
    const p = f.getTextContent().length, g = f.getParentOrThrow();
    let h = c[d - 1];
    if (d === 1 && a.type === "element" && (u = p, a.set(s.key, u, "text")), this.isCollapsed() && l === p && (xt(f) || !f.canInsertTextAfter() || !g.canInsertTextAfter() && f.getNextSibling() === null)) {
      let m = f.getNextSibling();
      if (z(m) && m.canInsertTextBefore() && !xt(m) || (m = he(), m.setFormat(o), m.setStyle(i), g.canInsertTextAfter() ? f.insertAfter(m) : g.insertAfter(m)), m.select(0, 0), f = m, n !== "") return void this.insertText(n);
    } else if (this.isCollapsed() && l === 0 && (xt(f) || !f.canInsertTextBefore() || !g.canInsertTextBefore() && f.getPreviousSibling() === null)) {
      let m = f.getPreviousSibling();
      if (z(m) && !xt(m) || (m = he(), m.setFormat(o), g.canInsertTextBefore() ? f.insertBefore(m) : g.insertBefore(m)), m.select(), f = m, n !== "") return void this.insertText(n);
    } else if (f.isSegmented() && l !== p) {
      const m = he(f.getTextContent());
      m.setFormat(o), f.replace(m), f = m;
    } else if (!this.isCollapsed() && n !== "") {
      const m = h.getParent();
      if (!g.canInsertTextBefore() || !g.canInsertTextAfter() || A(m) && (!m.canInsertTextBefore() || !m.canInsertTextAfter())) return this.insertText(""), Wd(this.anchor, this.focus, null), void this.insertText(n);
    }
    if (d === 1) {
      if (Yt(f)) {
        const b = he(n);
        return b.select(), void f.replace(b);
      }
      const m = f.getFormat(), v = f.getStyle();
      if (l !== u || m === o && v === i) {
        if (Do(f)) {
          const b = he(n);
          return b.setFormat(o), b.setStyle(i), b.select(), void f.replace(b);
        }
      } else {
        if (f.getTextContent() !== "") {
          const b = he(n);
          if (b.setFormat(o), b.setStyle(i), b.select(), l === 0) f.insertBefore(b, !1);
          else {
            const [_] = f.splitText(l);
            _.insertAfter(b, !1);
          }
          return void (b.isComposing() && this.anchor.type === "text" && (this.anchor.offset -= n.length));
        }
        f.setFormat(o), f.setStyle(i);
      }
      const y = u - l;
      f = f.spliceText(l, y, n, !0), f.getTextContent() === "" ? f.remove() : this.anchor.type === "text" && (f.isComposing() ? this.anchor.offset -= n.length : (this.format = m, this.style = v));
    } else {
      const m = /* @__PURE__ */ new Set([...f.getParentKeys(), ...h.getParentKeys()]), v = A(f) ? f : f.getParentOrThrow();
      let y = A(h) ? h : h.getParentOrThrow(), b = h;
      if (!v.is(y) && y.isInline()) do
        b = y, y = y.getParentOrThrow();
      while (y.isInline());
      if (a.type === "text" && (u !== 0 || h.getTextContent() === "") || a.type === "element" && h.getIndexWithinParent() < u) if (z(h) && !Yt(h) && u !== h.getTextContentSize()) {
        if (h.isSegmented()) {
          const N = he(h.getTextContent());
          h.replace(N), h = N;
        }
        ye(a.getNode()) || a.type !== "text" || (h = h.spliceText(0, u, "")), m.add(h.__key);
      } else {
        const N = h.getParentOrThrow();
        N.canBeEmpty() || N.getChildrenSize() !== 1 ? h.remove() : N.remove();
      }
      else m.add(h.__key);
      const _ = y.getChildren(), w = new Set(c), S = v.is(y), k = v.isInline() && f.getNextSibling() === null ? v : f;
      for (let N = _.length - 1; N >= 0; N--) {
        const E = _[N];
        if (E.is(f) || A(E) && E.isParentOf(f)) break;
        E.isAttached() && (!w.has(E) || E.is(b) ? S || k.insertAfter(E, !1) : E.remove());
      }
      if (!S) {
        let N = y, E = null;
        for (; N !== null; ) {
          const R = N.getChildren(), O = R.length;
          (O === 0 || R[O - 1].is(E)) && (m.delete(N.__key), E = N), N = N.getParent();
        }
      }
      if (Yt(f)) if (l === p) f.select();
      else {
        const N = he(n);
        N.select(), f.replace(N);
      }
      else f = f.spliceText(l, p - l, n, !0), f.getTextContent() === "" ? f.remove() : f.isComposing() && this.anchor.type === "text" && (this.anchor.offset -= n.length);
      for (let N = 1; N < d; N++) {
        const E = c[N], R = E.__key;
        m.has(R) || E.remove();
      }
    }
  }
  removeText() {
    const n = V() === this;
    Qr(this, xv(Al(this))), n && V() !== this && Ne(this);
  }
  formatText(n, t = null) {
    if (this.isCollapsed()) return this.toggleFormat(n), void ke(null);
    const r = this.getNodes(), o = [];
    for (const _ of r) z(_) && o.push(_);
    const i = (_) => {
      r.forEach((w) => {
        if (A(w)) {
          const S = w.getFormatFlags(n, _);
          w.setTextFormat(S);
        }
      });
    }, s = o.length;
    if (s === 0) return this.toggleFormat(n), ke(null), void i(t);
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
      if (xt(p) || g === 0 && y === p.getTextContentSize()) p.setFormat(h);
      else {
        const _ = p.splitText(g, y), w = g === 0 ? _[0] : _[1];
        w.setFormat(h), c.type === "text" && c.set(w.__key, 0, "text"), d.type === "text" && d.set(w.__key, y - g, "text");
      }
      return void (this.format = h);
    }
    g === 0 || xt(p) || ([, p] = p.splitText(g), g = 0), p.setFormat(h);
    const b = v.getFormatFlags(n, h);
    y > 0 && (y === v.getTextContentSize() || xt(v) || ([v] = v.splitText(y)), v.setFormat(b));
    for (let _ = f + 1; _ < m; _++) {
      const w = o[_], S = w.getFormatFlags(n, b);
      w.setFormat(S);
    }
    c.type === "text" && c.set(p.__key, g, "text"), d.type === "text" && d.set(v.__key, y, "text"), this.format = h | b;
  }
  insertNodes(n) {
    if (n.length === 0) return;
    if (this.isCollapsed() || this.removeText(), this.anchor.key === "root") {
      this.insertParagraph();
      const g = V();
      return $(g) || M(134), g.insertNodes(n);
    }
    const t = (this.isBackward() ? this.focus : this.anchor).getNode(), r = Ke(t, Ge), o = n[n.length - 1];
    if (A(r) && "__language" in r) {
      if ("__language" in n[0]) this.insertText(n[0].getTextContent());
      else {
        const g = yi(this);
        r.splice(g, 0, n), o.selectEnd();
      }
      return;
    }
    if (!n.some((g) => (A(g) || ee(g)) && !g.isInline())) {
      A(r) || M(211, t.constructor.name, t.getType());
      const g = yi(this);
      return r.splice(g, 0, n), void o.selectEnd();
    }
    const i = (function(g) {
      const h = fe();
      let m = null;
      for (let v = 0; v < g.length; v++) {
        const y = g[v], b = $t(y);
        if (b || ee(y) && y.isInline() || A(y) && y.isInline() || z(y) || y.isParentRequired()) {
          if (m === null && (m = y.createParentElementNode(), h.append(m), b)) continue;
          m !== null && m.append(y);
        } else h.append(y), m = null;
      }
      return h;
    })(n), s = i.getLastDescendant(), a = i.getChildren(), l = !A(r) || !r.isEmpty() ? this.insertParagraph() : null, u = a[a.length - 1];
    let c = a[0];
    var d;
    A(d = c) && Ge(d) && !d.isEmpty() && A(r) && (!r.isEmpty() || r.canMergeWhenEmpty()) && (A(r) || M(211, t.constructor.name, t.getType()), r.append(...c.getChildren()), c = a[1]), c && (r === null && M(212, t.constructor.name, t.getType()), (function(g, h) {
      const m = h.getParentOrThrow().getLastChild();
      let v = h;
      const y = [h];
      for (; v !== m; ) v.getNextSibling() || M(140), v = v.getNextSibling(), y.push(v);
      let b = g;
      for (const _ of y) b = b.insertAfter(_);
    })(r, c));
    const f = Ke(s, Ge);
    l && A(f) && (l.canMergeWhenEmpty() || Ge(u)) && (f.append(...l.getChildren()), l.remove()), A(r) && r.isEmpty() && r.remove(), s.selectEnd();
    const p = A(r) ? r.getLastChild() : null;
    $t(p) && f !== r && p.remove();
  }
  insertParagraph() {
    if (this.anchor.key === "root") {
      const s = fe();
      return ge().splice(this.anchor.offset, 0, [s]), s.select(), s;
    }
    const n = yi(this), t = Ke(this.anchor.getNode(), Ge);
    A(t) || M(213);
    const r = t.getChildAtIndex(n), o = r ? [r, ...r.getNextSiblings()] : [], i = t.insertNewAfter(this, !1);
    return i ? (i.append(...o), i.selectStart(), i) : null;
  }
  insertLineBreak(n) {
    const t = nt();
    if (this.insertNodes([t]), n) {
      const r = t.getParentOrThrow(), o = t.getIndexWithinParent();
      r.select(o, o);
    }
  }
  extract() {
    const n = [...this.getNodes()], t = n.length;
    let r = n[0], o = n[t - 1];
    const [i, s] = is(this), a = this.isBackward(), [l, u] = a ? [this.focus, this.anchor] : [this.anchor, this.focus], [c, d] = a ? [s, i] : [i, s];
    if (t === 0) return [];
    if (t === 1) {
      if (z(r) && !this.isCollapsed()) {
        const f = r.splitText(c, d), p = c === 0 ? f[0] : f[1];
        return p ? (l.set(p.getKey(), 0, "text"), u.set(p.getKey(), p.getTextContentSize(), "text"), [p]) : [];
      }
      return [r];
    }
    if (z(r) && (c === r.getTextContentSize() ? n.shift() : c !== 0 && ([, r] = r.splitText(c), n[0] = r, l.set(r.getKey(), 0, "text"))), z(o)) {
      const f = o.getTextContent().length;
      d === 0 ? n.pop() : d !== f && ([o] = o.splitText(d), n[n.length - 1] = o, u.set(o.getKey(), o.getTextContentSize(), "text"));
    }
    return n;
  }
  modify(n, t, r) {
    if (fl(this, n, t, r)) return;
    const o = n === "move", i = ie(), s = at(We(i));
    if (!s) return;
    const a = i._blockCursorElement, l = i._rootElement, u = this.focus.getNode();
    if (l === null || a === null || !A(u) || u.isInline() || u.canBeEmpty() || cs(a, i, l), this.dirty) {
      let c = an(i, this.anchor.key), d = an(i, this.focus.key);
      this.anchor.type === "text" && (c = Pn(c)), this.focus.type === "text" && (d = Pn(d)), c && d && Jd(s, c, this.anchor.offset, d, this.focus.offset);
    }
    if ((function(c, d, f, p) {
      c.modify(d, f, p);
    })(s, n, t ? "backward" : "forward", r), s.rangeCount > 0) {
      const c = s.getRangeAt(0), d = this.anchor.getNode(), f = ye(d) ? d : iv(d);
      if (this.applyDOMRange(c), this.dirty = !0, !o) {
        const p = this.getNodes(), g = [];
        let h = !1;
        for (let m = 0; m < p.length; m++) {
          const v = p[m];
          us(v, f) ? g.push(v) : h = !0;
        }
        if (h && g.length > 0) if (t) {
          const m = g[0];
          A(m) ? m.selectStart() : m.getParentOrThrow().selectStart();
        } else {
          const m = g[g.length - 1];
          A(m) ? m.selectEnd() : m.getParentOrThrow().selectEnd();
        }
        s.anchorNode === c.startContainer && s.anchorOffset === c.startOffset || (function(m) {
          const v = m.focus, y = m.anchor, b = y.key, _ = y.offset, w = y.type;
          y.set(v.key, v.offset, v.type, !0), v.set(b, _, w, !0);
        })(this);
      }
    }
    r === "lineboundary" && fl(this, n, t, r, "decorators");
  }
  forwardDeletion(n, t, r) {
    if (!r && (n.type === "element" && A(t) && n.offset === t.getChildrenSize() || n.type === "text" && n.offset === t.getTextContentSize())) {
      const o = t.getParent(), i = t.getNextSibling() || (o === null ? null : o.getNextSibling());
      if (A(i) && i.isShadowRoot()) return !0;
    }
    return !1;
  }
  deleteCharacter(n) {
    const t = this.isCollapsed();
    if (this.isCollapsed()) {
      const r = this.anchor;
      let o = r.getNode();
      if (this.forwardDeletion(r, o, n)) return;
      const i = sa(kt(r, n ? "previous" : "next"));
      if (i.getTextSlices().every((a) => a === null || a.distance === 0)) {
        let a = { type: "initial" };
        for (const l of i.iterNodeCarets("shadowRoot")) if (gt(l)) {
          if (!l.origin.isInline()) {
            if (l.origin.isShadowRoot()) {
              if (a.type === "merge-block") break;
              if (A(i.anchor.origin) && i.anchor.origin.isEmpty()) {
                const u = He(l);
                Qr(this, Bt(u, u)), i.anchor.origin.remove();
              }
              return;
            }
            a.type !== "merge-next-block" && a.type !== "merge-block" || (a = { block: a.block, caret: l, type: "merge-block" });
          }
        } else {
          if (a.type === "merge-block") break;
          if (Dn(l)) {
            if (A(l.origin)) {
              if (l.origin.isInline()) {
                if (!l.origin.isParentOf(i.anchor.origin)) break;
              } else a = { block: l.origin, type: "merge-next-block" };
              continue;
            }
            if (ee(l.origin)) {
              if (!l.origin.isIsolated()) if (a.type === "merge-next-block" && (l.origin.isKeyboardSelectable() || !l.origin.isInline()) && A(i.anchor.origin) && i.anchor.origin.isEmpty()) {
                i.anchor.origin.remove();
                const u = Bs();
                u.add(l.origin.getKey()), Ne(u);
              } else l.origin.remove();
              return;
            }
            break;
          }
        }
        if (a.type === "merge-block") {
          const { caret: l, block: u } = a;
          return Qr(this, Bt(!l.origin.isEmpty() && u.isEmpty() ? aa(Ee(u, l.direction)) : i.anchor, l)), this.removeText();
        }
      }
      const s = this.focus;
      if (this.modify("extend", n, "character"), this.isCollapsed()) {
        if (n && r.offset === 0 && sl(this, r.getNode())) return;
      } else {
        const a = s.type === "text" ? s.getNode() : null;
        if (o = r.type === "text" ? r.getNode() : null, a !== null && a.isSegmented()) {
          const l = s.offset, u = a.getTextContentSize();
          if (a.is(o) || n && l !== u || !n && l !== 0) return void al(a, n, l);
        } else if (o !== null && o.isSegmented()) {
          const l = r.offset, u = o.getTextContentSize();
          if (o.is(a) || n && l !== 0 || !n && l !== u) return void al(o, n, l);
        }
        (function(l, u) {
          const c = l.anchor, d = l.focus, f = c.getNode(), p = d.getNode();
          if (f === p && c.type === "text" && d.type === "text") {
            const g = c.offset, h = d.offset, m = g < h, v = m ? g : h, y = m ? h : g, b = y - 1;
            v !== b && (function(_) {
              return !(gf(_) || U0(_));
            })(f.getTextContent().slice(v, y)) && (u ? d.set(d.key, b, d.type) : c.set(c.key, b, c.type));
          }
        })(this, n);
      }
    }
    if (this.removeText(), n && !t && this.isCollapsed() && this.anchor.type === "element" && this.anchor.offset === 0) {
      const r = this.anchor.getNode();
      r.isEmpty() && ye(r.getParent()) && r.getPreviousSibling() === null && sl(this, r);
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
function Te(e) {
  return e instanceof zo;
}
function il(e) {
  const n = e.offset;
  if (e.type === "text") return n;
  const t = e.getNode();
  return n === t.getChildrenSize() ? t.getTextContent().length : 0;
}
function is(e) {
  const n = e.getStartEndPoints();
  if (n === null) return [0, 0];
  const [t, r] = n;
  return t.type === "element" && r.type === "element" && t.key === r.key && t.offset === r.offset ? [0, 0] : [il(t), il(r)];
}
function sl(e, n) {
  for (let t = n; t; t = t.getParent()) {
    if (A(t)) {
      if (t.collapseAtStart(e)) return !0;
      if (Fe(t)) break;
    }
    if (t.getPreviousSibling()) break;
  }
  return !1;
}
const U0 = (() => {
  try {
    const e = new RegExp("\\p{Emoji}", "u"), n = e.test.bind(e);
    if (n("❤️") && n("#️⃣") && n("👍")) return n;
  } catch {
  }
  return () => !1;
})();
function al(e, n, t) {
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
function ll(e, n, t, r) {
  let o, i = n;
  if (be(e)) {
    let s = !1;
    const a = e.childNodes, l = a.length, u = r._blockCursorElement;
    i === l && (s = !0, i = l - 1);
    let c = a[i], d = !1;
    if (c === u) c = a[i + 1], d = !0;
    else if (u !== null) {
      const f = u.parentNode;
      e === f && n > Array.prototype.indexOf.call(f.children, u) && i--;
    }
    if (o = Nn(c), z(o)) i = Pt(o, s ? "next" : "previous");
    else {
      let f = Nn(e);
      if (f === null) return null;
      if (A(f)) {
        const p = r.getElementByKey(f.getKey());
        p === null && M(214), [f, i] = f.getDOMSlot(p).resolveChildIndex(f, p, e, n), A(f) || M(215), s && i >= f.getChildrenSize() && (i = Math.max(0, f.getChildrenSize() - 1));
        let h = f.getChildAtIndex(i);
        if (A(h) && (function(m, v, y) {
          const b = m.getParent();
          return y === null || b === null || !b.canBeEmpty() || b !== y.getNode();
        })(h, 0, t)) {
          const m = s ? h.getLastDescendant() : h.getFirstDescendant();
          m === null ? f = h : (h = m, f = A(h) ? h : h.getParentOrThrow()), i = 0;
        }
        z(h) ? (o = h, f = null, i = Pt(h, s ? "next" : "previous")) : h !== f && s && !d && (A(f) || M(216), i = Math.min(f.getChildrenSize(), i + 1));
      } else {
        const p = f.getIndexWithinParent();
        i = n === 0 && ee(f) && Nn(e) === f ? p : p + 1, f = f.getParentOrThrow();
      }
      if (A(f)) return pt(f.__key, i, "element");
    }
  } else o = Nn(e);
  return z(o) ? pt(o.__key, Pt(o, i, "clamp"), "text") : null;
}
function ul(e, n, t) {
  const r = e.offset, o = e.getNode();
  if (r === 0) {
    const i = o.getPreviousSibling(), s = o.getParent();
    if (n) {
      if ((t || !n) && i === null && A(s) && s.isInline()) {
        const a = s.getPreviousSibling();
        z(a) && e.set(a.__key, a.getTextContent().length, "text");
      }
    } else A(i) && !t && i.isInline() ? e.set(i.__key, i.getChildrenSize(), "element") : z(i) && e.set(i.__key, i.getTextContent().length, "text");
  } else if (r === o.getTextContent().length) {
    const i = o.getNextSibling(), s = o.getParent();
    if (n && A(i) && i.isInline()) e.set(i.__key, 0, "element");
    else if ((t || n) && i === null && A(s) && s.isInline() && !s.canInsertTextAfter()) {
      const a = s.getNextSibling();
      z(a) && e.set(a.__key, 0, "text");
    }
  }
}
function Wd(e, n, t) {
  if (e.type === "text" && n.type === "text") {
    const r = e.isBefore(n), o = e.is(n);
    ul(e, r, o), ul(n, !r, o), o && n.set(e.key, e.offset, e.type);
    const i = ie();
    if (i.isComposing() && i._compositionKey !== e.key && $(t)) {
      const s = t.anchor, a = t.focus;
      e.set(s.key, s.offset, s.type, !0), n.set(a.key, a.offset, a.type, !0);
    }
  }
}
function qd(e, n, t, r, o, i) {
  if (e === null || t === null || !Ar(o, e, t)) return null;
  const s = ll(e, n, $(i) ? i.anchor : null, o);
  if (s === null) return null;
  const a = ll(t, r, $(i) ? i.focus : null, o);
  if (a === null) return null;
  if (s.type === "element" && a.type === "element") {
    const l = Nn(e), u = Nn(t);
    if (ee(l) && ee(u)) return null;
  }
  return Wd(s, a, i), [s, a];
}
function ss(e) {
  return A(e) && !e.isInline();
}
function Zd(e, n, t, r, o, i) {
  const s = Vt(), a = new pn(pt(e, n, o), pt(t, r, i), 0, "");
  return a.dirty = !0, s._selection = a, a;
}
function Bo() {
  const e = pt("root", 0, "element"), n = pt("root", 0, "element");
  return new pn(e, n, 0, "");
}
function Bs() {
  return new zo(/* @__PURE__ */ new Set());
}
function Vs(e, n, t, r) {
  const o = t._window;
  if (o === null) return null;
  const i = r || o.event, s = i ? i.type : void 0, a = s === "selectionchange", l = !Ui && (a || s === "beforeinput" || s === "compositionstart" || s === "compositionend" || s === "click" && i && i.detail === 3 || s === "drop" || s === void 0);
  let u, c, d, f;
  if ($(e) && !l) return e.clone();
  if (n === null) return null;
  if (u = n.anchorNode, c = n.focusNode, d = n.anchorOffset, f = n.focusOffset, (a || s === void 0) && $(e) && !Ar(t, u, c)) return e.clone();
  const p = qd(u, d, c, f, t, e);
  if (p === null) return null;
  const [g, h] = p;
  return new pn(g, h, $(e) ? e.format : 0, $(e) ? e.style : "");
}
function V() {
  return Vt()._selection;
}
function qn() {
  return ie()._editorState._selection;
}
function yo(e, n, t, r = 1) {
  const o = e.anchor, i = e.focus, s = o.getNode(), a = i.getNode();
  if (!n.is(s) && !n.is(a)) return;
  const l = n.__key;
  if (e.isCollapsed()) {
    const u = o.offset;
    if (t <= u && r > 0 || t < u && r < 0) {
      const c = Math.max(0, u + r);
      o.set(l, c, "element"), i.set(l, c, "element"), cl(e);
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
  cl(e);
}
function cl(e) {
  const n = e.anchor, t = n.offset, r = e.focus, o = r.offset, i = n.getNode(), s = r.getNode();
  if (e.isCollapsed()) {
    if (!A(i)) return;
    const a = i.getChildrenSize(), l = t >= a, u = l ? i.getChildAtIndex(a - 1) : i.getChildAtIndex(t);
    if (z(u)) {
      let c = 0;
      l && (c = u.getTextContentSize()), n.set(u.__key, c, "text"), r.set(u.__key, c, "text");
    }
    return;
  }
  if (A(i)) {
    const a = i.getChildrenSize(), l = t >= a, u = l ? i.getChildAtIndex(a - 1) : i.getChildAtIndex(t);
    if (z(u)) {
      let c = 0;
      l && (c = u.getTextContentSize()), n.set(u.__key, c, "text");
    }
  }
  if (A(s)) {
    const a = s.getChildrenSize(), l = o >= a, u = l ? s.getChildAtIndex(a - 1) : s.getChildAtIndex(o);
    if (z(u)) {
      let c = 0;
      l && (c = u.getTextContentSize()), r.set(u.__key, c, "text");
    }
  }
}
function bo(e, n, t, r, o) {
  let i = null, s = 0, a = null;
  r !== null ? (i = r.__key, z(r) ? (s = r.getTextContentSize(), a = "text") : A(r) && (s = r.getChildrenSize(), a = "element")) : o !== null && (i = o.__key, z(o) ? a = "text" : A(o) && (a = "element")), i !== null && a !== null ? e.set(i, s, a) : (s = n.getIndexWithinParent(), s === -1 && (s = t.getChildrenSize()), e.set(t.__key, s, "element"));
}
function dl(e, n, t, r, o) {
  e.type === "text" ? e.set(t, e.offset + (n ? 0 : o), "text") : e.offset > r.getIndexWithinParent() && e.set(e.key, e.offset - 1, "element");
}
function Jd(e, n, t, r, o) {
  try {
    e.setBaseAndExtent(n, t, r, o);
  } catch {
  }
}
function j0(e, n, t, r, o, i, s) {
  const a = r.anchorNode, l = r.focusNode, u = r.anchorOffset, c = r.focusOffset, d = document.activeElement;
  if (o.has(Gd) && d !== i || d !== null && qs(d)) return;
  if (!$(n)) return void (e !== null && Ar(t, a, l) && r.removeAllRanges());
  const f = n.anchor, p = n.focus, g = f.key, h = p.key, m = an(t, g), v = an(t, h), y = f.offset, b = p.offset, _ = n.format, w = n.style, S = n.isCollapsed();
  let k = m, N = v, E = !1;
  if (f.type === "text") {
    k = Pn(m);
    const U = f.getNode();
    E = U.getFormat() !== _ || U.getStyle() !== w;
  } else $(e) && e.anchor.type === "text" && (E = !0);
  var R, O, I, B, D;
  if (p.type === "text" && (N = Pn(v)), k !== null && N !== null && (S && (e === null || E || $(e) && (e.format !== _ || e.style !== w)) && (R = _, O = w, I = y, B = g, D = performance.now(), Ld = [R, O, I, B, D]), u !== y || c !== b || a !== k || l !== N || r.type === "Range" && S || (d !== null && i.contains(d) || o.has($0) || i.focus({ preventScroll: !0 }), f.type === "element"))) {
    if (Jd(r, k, y, N, b), !o.has(I0) && n.isCollapsed() && i !== null && i === document.activeElement) {
      const U = $(n) && n.anchor.type === "element" ? k.childNodes[y] || null : r.rangeCount > 0 ? r.getRangeAt(0) : null;
      if (U !== null) {
        let q;
        if (U instanceof Text) {
          const H = document.createRange();
          H.selectNode(U), q = H.getBoundingClientRect();
        } else q = U.getBoundingClientRect();
        (function(H, J, ne) {
          const se = yf(ne), ce = ea(se);
          if (se === null || ce === null) return;
          let { top: pe, bottom: je } = J, Se = 0, Pe = 0, Ce = ne;
          for (; Ce !== null; ) {
            const Le = Ce === se.body;
            if (Le) Se = 0, Pe = We(H).innerHeight;
            else {
              const Je = Ce.getBoundingClientRect();
              Se = Je.top, Pe = Je.bottom;
            }
            let Ze = 0;
            if (pe < Se ? Ze = -(Se - pe) : je > Pe && (Ze = je - Pe), Ze !== 0) if (Le) ce.scrollBy(0, Ze);
            else {
              const Je = Ce.scrollTop;
              Ce.scrollTop += Ze;
              const bn = Ce.scrollTop - Je;
              pe -= bn, je -= bn;
            }
            if (Le) break;
            Ce = Fr(Ce);
          }
        })(t, q, i);
      }
    }
    es = !0;
  }
}
function G0(e) {
  let n = V() || qn();
  n === null && (n = ge().selectEnd()), n.insertNodes(e);
}
function yi(e) {
  let n = e;
  e.isCollapsed() || n.removeText();
  const t = V();
  $(t) && (n = t), $(n) || M(161);
  const r = n.anchor;
  let o = r.getNode(), i = r.offset;
  for (; !Ge(o); ) {
    const s = o;
    if ([o, i] = H0(o, i), s.is(o)) break;
  }
  return i;
}
function H0(e, n) {
  const t = e.getParent();
  if (!t) {
    const o = fe();
    return ge().append(o), o.select(), [ge(), 0];
  }
  if (z(e)) {
    const o = e.splitText(n);
    if (o.length === 0) return [t, e.getIndexWithinParent()];
    const i = n === 0 ? 0 : 1;
    return [t, o[0].getIndexWithinParent() + i];
  }
  if (!A(e) || n === 0) return [t, e.getIndexWithinParent()];
  const r = e.getChildAtIndex(n);
  if (r) {
    const o = new pn(pt(e.__key, n, "element"), pt(e.__key, n, "element"), 0, ""), i = e.insertNewAfter(o);
    i && i.append(r, ...r.getNextSiblings());
  }
  return [t, e.getIndexWithinParent() + 1];
}
function fl(e, n, t, r, o = "decorators-and-blocks") {
  if (n === "move" && r === "character" && !e.isCollapsed()) {
    const [c, d] = t === e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus];
    return d.set(c.key, c.offset, c.type), !0;
  }
  const i = kt(e.focus, t ? "previous" : "next"), s = r === "lineboundary", a = n === "move";
  let l = i, u = o === "decorators-and-blocks";
  if (!Cf(l)) {
    for (const c of l) {
      u = !1;
      const { origin: d } = c;
      if (!ee(d) || d.isIsolated() || (l = c, !s || !d.isInline())) break;
    }
    if (u) for (const c of sa(i).iterNodeCarets(n === "extend" ? "shadowRoot" : "root")) {
      if (gt(c)) c.origin.isInline() || (l = c);
      else {
        if (A(c.origin)) continue;
        ee(c.origin) && !c.origin.isInline() && (l = c);
      }
      break;
    }
  }
  if (l === i) return !1;
  if (a && !s && ee(l.origin) && l.origin.isKeyboardSelectable()) {
    const c = Bs();
    return c.add(l.origin.getKey()), Ne(c), !0;
  }
  return l = He(l), a && dn(e.anchor, l), dn(e.focus, l), u || !s;
}
let _e = null, we = null, $e = !1, bi = !1, Yr = 0;
const gl = { characterData: !0, childList: !0, subtree: !0 };
function Nr() {
  return $e || _e !== null && _e._readOnly;
}
function xe() {
  $e && M(13);
}
function Yd() {
  Yr > 99 && M(14);
}
function Vt() {
  return _e === null && M(195, Xd()), _e;
}
function ie() {
  return we === null && M(196, Xd()), we;
}
function Xd() {
  let e = 0;
  const n = /* @__PURE__ */ new Set(), t = sn.version;
  if (typeof window < "u") for (const o of document.querySelectorAll("[contenteditable]")) {
    const i = Uo(o);
    if (Zs(i)) e++;
    else if (i) {
      let s = String(i.constructor.version || "<0.17.1");
      s === t && (s += " (separately built, likely a bundler configuration issue)"), n.add(s);
    }
  }
  let r = ` Detected on the page: ${e} compatible editor(s) with version ${t}`;
  return n.size && (r += ` and incompatible editors with versions ${Array.from(n).join(", ")}`), r;
}
function K0() {
  return we;
}
function pl(e, n, t) {
  const r = n.__type, o = of(e, r);
  let i = t.get(r);
  i === void 0 && (i = Array.from(o.transforms), t.set(r, i));
  const s = i.length;
  for (let a = 0; a < s && (i[a](n), n.isAttached()); a++) ;
}
function hl(e, n) {
  return e !== void 0 && e.__key !== n && e.isAttached();
}
function Qd(e, n) {
  if (!n) return;
  const t = e._updateTags;
  let r = n;
  Array.isArray(n) || (r = [n]);
  for (const o of r) t.add(o);
}
function W0(e) {
  return Us(e, ie()._nodes);
}
function Us(e, n) {
  const t = e.type, r = n.get(t);
  r === void 0 && M(17, t);
  const o = r.klass;
  e.type !== o.getType() && M(18, o.name);
  const i = o.importJSON(e), s = e.children;
  if (A(i) && Array.isArray(s)) for (let a = 0; a < s.length; a++) {
    const l = Us(s[a], n);
    i.append(l);
  }
  return i;
}
function ml(e, n, t) {
  const r = _e, o = $e, i = we;
  _e = n, $e = !0, we = e;
  try {
    return t();
  } finally {
    _e = r, $e = o, we = i;
  }
}
function wt(e, n) {
  const t = e._pendingEditorState, r = e._rootElement, o = e._headless || r === null;
  if (t === null) return;
  const i = e._editorState, s = i._selection, a = t._selection, l = e._dirtyType !== 0, u = _e, c = $e, d = we, f = e._updating, p = e._observer;
  let g = null;
  if (e._pendingEditorState = null, e._editorState = t, !o && l && p !== null) {
    we = e, _e = t, $e = !1, e._updating = !0;
    try {
      const S = e._dirtyType, k = e._dirtyElements, N = e._dirtyLeaves;
      p.disconnect(), g = d0(i, t, e, S, k, N);
    } catch (S) {
      if (S instanceof Error && e._onError(S), bi) throw S;
      return nf(e, null, r, t), ld(e), e._dirtyType = 2, bi = !0, wt(e, i), void (bi = !1);
    } finally {
      p.observe(r, gl), e._updating = f, _e = u, $e = c, we = d;
    }
  }
  t._readOnly || (t._readOnly = !0);
  const h = e._dirtyLeaves, m = e._dirtyElements, v = e._normalizedNodes, y = e._updateTags, b = e._deferred;
  l && (e._dirtyType = 0, e._cloneNotNeeded.clear(), e._dirtyLeaves = /* @__PURE__ */ new Set(), e._dirtyElements = /* @__PURE__ */ new Map(), e._normalizedNodes = /* @__PURE__ */ new Set(), e._updateTags = /* @__PURE__ */ new Set()), (function(S, k) {
    const N = S._decorators;
    let E = S._pendingDecorators || N;
    const R = k._nodeMap;
    let O;
    for (O in E) R.has(O) || (E === N && (E = df(S)), delete E[O]);
  })(e, t);
  const _ = o ? null : at(We(e));
  if (e._editable && _ !== null && (l || a === null || a.dirty || !a.is(s)) && r !== null && !y.has(O0)) {
    we = e, _e = t;
    try {
      if (p !== null && p.disconnect(), l || a === null || a.dirty) {
        const S = e._blockCursorElement;
        S !== null && cs(S, e, r), j0(s, a, e, _, y, r);
      }
      (function(S, k, N) {
        let E = S._blockCursorElement;
        if ($(N) && N.isCollapsed() && N.anchor.type === "element" && k.contains(document.activeElement)) {
          const R = N.anchor, O = R.getNode(), I = R.offset;
          let B = !1, D = null;
          if (I === O.getChildrenSize())
            xi(O.getChildAtIndex(I - 1)) && (B = !0);
          else {
            const U = O.getChildAtIndex(I);
            if (U !== null && xi(U)) {
              const q = U.getPreviousSibling();
              (q === null || xi(q)) && (B = !0, D = S.getElementByKey(U.__key));
            }
          }
          if (B) {
            const U = S.getElementByKey(O.__key);
            return E === null && (S._blockCursorElement = E = (function(q) {
              const H = q.theme, J = document.createElement("div");
              J.contentEditable = "false", J.setAttribute("data-lexical-cursor", "true");
              let ne = H.blockCursor;
              if (ne !== void 0) {
                if (typeof ne == "string") {
                  const se = rd(ne);
                  ne = H.blockCursor = se;
                }
                ne !== void 0 && J.classList.add(...ne);
              }
              return J;
            })(S._config)), k.style.caretColor = "transparent", void (D === null ? U.appendChild(E) : U.insertBefore(E, D));
          }
        }
        E !== null && cs(E, S, k);
      })(e, r, a);
    } finally {
      p !== null && p.observe(r, gl), we = d, _e = u;
    }
  }
  g !== null && (function(S, k, N, E, R) {
    const O = Array.from(S._listeners.mutation), I = O.length;
    for (let B = 0; B < I; B++) {
      const [D, U] = O[B];
      for (const q of U) {
        const H = k.get(q);
        H !== void 0 && D(H, { dirtyLeaves: E, prevEditorState: R, updateTags: N });
      }
    }
  })(e, g, y, h, i), $(a) || a === null || s !== null && s.is(a) || e.dispatchCommand(yd, void 0);
  const w = e._pendingDecorators;
  w !== null && (e._decorators = w, e._pendingDecorators = null, dr("decorator", e, !0, w)), (function(S, k, N) {
    const E = xl(k), R = xl(N);
    E !== R && dr("textcontent", S, !0, R);
  })(e, n || i, t), dr("update", e, !0, { dirtyElements: m, dirtyLeaves: h, editorState: t, mutatedNodes: g, normalizedNodes: v, prevEditorState: n || i, tags: y }), (function(S, k) {
    if (S._deferred = [], k.length !== 0) {
      const N = S._updating;
      S._updating = !0;
      try {
        for (let E = 0; E < k.length; E++) k[E]();
      } finally {
        S._updating = N;
      }
    }
  })(e, b), (function(S) {
    const k = S._updates;
    if (k.length !== 0) {
      const N = k.shift();
      if (N) {
        const [E, R] = N;
        Vo(S, E, R);
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
function yl(e, n) {
  const t = e._updates;
  let r = n || !1;
  for (; t.length !== 0; ) {
    const o = t.shift();
    if (o) {
      const [i, s] = o, a = e._pendingEditorState;
      let l;
      s !== void 0 && (l = s.onUpdate, s.skipTransforms && (r = !0), s.discrete && (a === null && M(191), a._flushSync = !0), l && e._deferred.push(l), Qd(e, s.tag)), a == null ? Vo(e, i, s) : i();
    }
  }
  return r;
}
function Vo(e, n, t) {
  const r = e._updateTags;
  let o, i = !1, s = !1;
  t !== void 0 && (o = t.onUpdate, Qd(e, t.tag), i = t.skipTransforms || !1, s = t.discrete || !1), o && e._deferred.push(o);
  const a = e._editorState;
  let l = e._pendingEditorState, u = !1;
  (l === null || l._readOnly) && (l = e._pendingEditorState = ef(l || a), u = !0), l._flushSync = s;
  const c = _e, d = $e, f = we, p = e._updating;
  _e = l, $e = !1, e._updating = !0, we = e;
  const g = e._headless || e.getRootElement() === null;
  Ks(null);
  try {
    u && (g ? a._selection !== null && (l._selection = a._selection.clone()) : l._selection = (function(y, b) {
      const _ = y.getEditorState()._selection, w = at(We(y));
      return $(_) || _ == null ? Vs(_, w, y, b) : _.clone();
    })(e, t && t.event || null));
    const m = e._compositionKey;
    n(), i = yl(e, i), (function(y, b) {
      const _ = b.getEditorState()._selection, w = y._selection;
      if ($(w)) {
        const S = w.anchor, k = w.focus;
        let N;
        if (S.type === "text" && (N = S.getNode(), N.selectionTransform(_, w)), k.type === "text") {
          const E = k.getNode();
          N !== E && E.selectionTransform(_, w);
        }
      }
    })(l, e), e._dirtyType !== 0 && (i ? (function(y, b) {
      const _ = b._dirtyLeaves, w = y._nodeMap;
      for (const S of _) {
        const k = w.get(S);
        z(k) && k.isAttached() && k.isSimpleText() && !k.isUnmergeable() && Wa(k);
      }
    })(l, e) : (function(y, b) {
      const _ = b._dirtyLeaves, w = b._dirtyElements, S = y._nodeMap, k = It(), N = /* @__PURE__ */ new Map();
      let E = _, R = E.size, O = w, I = O.size;
      for (; R > 0 || I > 0; ) {
        if (R > 0) {
          b._dirtyLeaves = /* @__PURE__ */ new Set();
          for (const B of E) {
            const D = S.get(B);
            z(D) && D.isAttached() && D.isSimpleText() && !D.isUnmergeable() && Wa(D), D !== void 0 && hl(D, k) && pl(b, D, N), _.add(B);
          }
          if (E = b._dirtyLeaves, R = E.size, R > 0) {
            Yr++;
            continue;
          }
        }
        b._dirtyLeaves = /* @__PURE__ */ new Set(), b._dirtyElements = /* @__PURE__ */ new Map(), O.delete("root") && O.set("root", !0);
        for (const B of O) {
          const D = B[0], U = B[1];
          if (w.set(D, U), !U) continue;
          const q = S.get(D);
          q !== void 0 && hl(q, k) && pl(b, q, N);
        }
        E = b._dirtyLeaves, R = E.size, O = b._dirtyElements, I = O.size, Yr++;
      }
      b._dirtyLeaves = _, b._dirtyElements = w;
    })(l, e), yl(e), (function(y, b, _, w) {
      const S = y._nodeMap, k = b._nodeMap, N = [];
      for (const [E] of w) {
        const R = k.get(E);
        R !== void 0 && (R.isAttached() || (A(R) && id(R, E, S, k, N, w), S.has(E) || w.delete(E), N.push(E)));
      }
      for (const E of N) k.delete(E);
      for (const E of _) {
        const R = k.get(E);
        R === void 0 || R.isAttached() || (S.has(E) || _.delete(E), k.delete(E));
      }
    })(a, l, e._dirtyLeaves, e._dirtyElements)), m !== e._compositionKey && (l._flushSync = !0);
    const v = l._selection;
    if ($(v)) {
      const y = l._nodeMap, b = v.anchor.key, _ = v.focus.key;
      y.get(b) !== void 0 && y.get(_) !== void 0 || M(19);
    } else Te(v) && v._nodes.size === 0 && (l._selection = null);
  } catch (m) {
    return m instanceof Error && e._onError(m), e._pendingEditorState = a, e._dirtyType = 2, e._cloneNotNeeded.clear(), e._dirtyLeaves = /* @__PURE__ */ new Set(), e._dirtyElements.clear(), void wt(e);
  } finally {
    _e = c, $e = d, we = f, e._updating = p, Yr = 0;
  }
  e._dirtyType !== 0 || e._deferred.length > 0 || (function(m, v) {
    const y = v.getEditorState()._selection, b = m._selection;
    if (b !== null) {
      if (b.dirty || !b.is(y)) return !0;
    } else if (y !== null) return !0;
    return !1;
  })(l, e) ? l._flushSync ? (l._flushSync = !1, wt(e)) : u && Q0(() => {
    wt(e);
  }) : (l._flushSync = !1, u && (r.clear(), e._deferred = [], e._pendingEditorState = null));
}
function ft(e, n, t) {
  we === e && t === void 0 ? n() : Vo(e, n, t);
}
class fr {
  constructor(n, t, r) {
    T(this, "element");
    T(this, "before");
    T(this, "after");
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
    return t !== null && t.parentElement !== this.element && M(222), this.element.insertBefore(n, t), this;
  }
  removeChild(n) {
    return n.parentElement !== this.element && M(223), this.element.removeChild(n), this;
  }
  replaceChild(n, t) {
    return t.parentElement !== this.element && M(224), this.element.replaceChild(n, t), this;
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
      const t = n === "decorator" && (Er || Gn || kr);
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
    const i = bl(t, r);
    i.push(o);
    const s = bl(t, this.element);
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
function bl(e, n) {
  const t = [];
  let r = n;
  for (; r !== e && r !== null; r = r.parentNode) {
    let o = 0;
    for (let i = r.previousSibling; i !== null; i = i.previousSibling) o++;
    t.push(o);
  }
  return r !== e && M(225), t.reverse();
}
class Ve extends et {
  constructor(t) {
    super(t);
    T(this, "__first");
    T(this, "__last");
    T(this, "__size");
    T(this, "__format");
    T(this, "__style");
    T(this, "__indent");
    T(this, "__dir");
    T(this, "__textFormat");
    T(this, "__textStyle");
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
    return Yb[t] || "";
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
    const t = ie()._dirtyElements;
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
      if (z(r) && t.push(r), A(r)) {
        const o = r.getAllTextNodes();
        t.push(...o);
      }
      r = r.getNextSibling();
    }
    return t;
  }
  getFirstDescendant() {
    let t = this.getFirstChild();
    for (; A(t); ) {
      const r = t.getFirstChild();
      if (r === null) break;
      t = r;
    }
    return t;
  }
  getLastDescendant() {
    let t = this.getLastChild();
    for (; A(t); ) {
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
      return A(s) && s.getLastDescendant() || s || null;
    }
    const i = r[t];
    return A(i) && i.getFirstDescendant() || i || null;
  }
  getFirstChild() {
    const t = this.getLatest().__first;
    return t === null ? null : me(t);
  }
  getFirstChildOrThrow() {
    const t = this.getFirstChild();
    return t === null && M(45, this.__key), t;
  }
  getLastChild() {
    const t = this.getLatest().__last;
    return t === null ? null : me(t);
  }
  getLastChildOrThrow() {
    const t = this.getLastChild();
    return t === null && M(96, this.__key), t;
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
      t += s.getTextContent(), A(s) && i !== o - 1 && !s.isInline() && (t += zt);
    }
    return t;
  }
  getTextContentSize() {
    let t = 0;
    const r = this.getChildren(), o = r.length;
    for (let i = 0; i < o; i++) {
      const s = r[i];
      t += s.getTextContentSize(), A(s) && i !== o - 1 && !s.isInline() && (t += 2);
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
      const r = za[t];
      return (this.getFormat() & r) !== 0;
    }
    return !1;
  }
  hasTextFormat(t) {
    const r = nn[t];
    return (this.getTextFormat() & r) !== 0;
  }
  getFormatFlags(t, r) {
    return vo(this.getLatest().__textFormat, t, r);
  }
  getTextStyle() {
    return this.getLatest().__textStyle;
  }
  select(t, r) {
    xe();
    const o = V();
    let i = t, s = r;
    const a = this.getChildrenSize();
    if (!this.canBeEmpty()) {
      if (t === 0 && r === 0) {
        const u = this.getFirstChild();
        if (z(u) || A(u)) return u.select(0, 0);
      } else if (!(t !== void 0 && t !== a || r !== void 0 && r !== a)) {
        const u = this.getLastChild();
        if (z(u) || A(u)) return u.select();
      }
    }
    i === void 0 && (i = a), s === void 0 && (s = a);
    const l = this.__key;
    return $(o) ? (o.anchor.set(l, i, "element"), o.focus.set(l, s, "element"), o.dirty = !0, o) : Zd(l, i, l, s, "element", "element");
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
    return this.getWritable().__format = t !== "" ? za[t] : 0, this;
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
    ho(this) && M(324, this.__key, this.__type);
    const i = this.getChildrenSize(), s = this.getWritable();
    t + r <= i || M(226, String(t), String(r), String(i));
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
        g === null && M(100);
        const m = g.getNextSibling(), v = g.__key;
        Xt(g.getWritable()), u.push(v), g = m;
      }
    }
    let p = d;
    for (const g of o) {
      p !== null && g.is(p) && (d = p = p.getPreviousSibling());
      const h = g.getWritable();
      h.__parent === a && f--, Xt(h);
      const m = g.__key;
      if (p === null) s.__first = m, h.__prev = null;
      else {
        const v = p.getWritable();
        v.__next = m, h.__prev = v.__key;
      }
      g.__key === a && M(76), h.__parent = a, l.push(m), p = g;
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
      const g = V();
      if ($(g)) {
        const h = new Set(u), m = new Set(l), { anchor: v, focus: y } = g;
        vl(v, h, m) && bo(v, v.getNode(), this, d, c), vl(y, h, m) && bo(y, y.getNode(), this, d, c), f !== 0 || this.canBeEmpty() || Fe(this) || this.remove();
      }
    }
    return s;
  }
  getDOMSlot(t) {
    return new fr(t);
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    if (be(r)) {
      const o = this.getIndent();
      o > 0 && (r.style.paddingInlineStart = 40 * o + "px");
      const i = this.getDirection();
      i && (r.dir = i);
    }
    return { element: r };
  }
  exportJSON() {
    const t = { children: [], direction: this.getDirection(), format: this.getFormatType(), indent: this.getIndent(), ...super.exportJSON() }, r = this.getTextFormat(), o = this.getTextStyle();
    return r === 0 && o === "" || Fe(this) || this.getChildren().some(z) || (r !== 0 && (t.textFormat = r), o !== "" && (t.textStyle = o)), t;
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
function A(e) {
  return e instanceof Ve;
}
function vl(e, n, t) {
  let r = e.getNode();
  for (; r; ) {
    const o = r.__key;
    if (n.has(o) && !t.has(o)) return !0;
    r = r.getParent();
  }
  return !1;
}
class js extends et {
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
function ee(e) {
  return e instanceof js;
}
class Zn extends Ve {
  constructor() {
    super("root");
    T(this, "__cachedText");
    this.__cachedText = null;
  }
  static getType() {
    return "root";
  }
  static clone() {
    return new Zn();
  }
  getTopLevelElementOrThrow() {
    M(51);
  }
  getTextContent() {
    const t = this.__cachedText;
    return !Nr() && ie()._dirtyType !== 0 || t === null ? super.getTextContent() : t;
  }
  remove() {
    M(52);
  }
  replace(t) {
    M(53);
  }
  insertBefore(t) {
    M(54);
  }
  insertAfter(t) {
    M(55);
  }
  updateDOM(t, r) {
    return !1;
  }
  splice(t, r, o) {
    for (const i of o) A(i) || ee(i) || M(282);
    return super.splice(t, r, o);
  }
  static importJSON(t) {
    return ge().updateFromJSON(t);
  }
  collapseAtStart() {
    return !0;
  }
}
function ye(e) {
  return e instanceof Zn;
}
function ef(e) {
  return new Rr(new Map(e._nodeMap));
}
function Gs() {
  return new Rr(/* @__PURE__ */ new Map([["root", new Zn()]]));
}
function tf(e) {
  const n = e.exportJSON(), t = e.constructor;
  if (n.type !== t.getType() && M(130, t.name), A(e)) {
    const r = n.children;
    Array.isArray(r) || M(59, t.name);
    const o = e.getChildren();
    for (let i = 0; i < o.length; i++) {
      const s = tf(o[i]);
      r.push(s);
    }
  }
  return n;
}
function q0(e) {
  return e instanceof Rr;
}
class Rr {
  constructor(n, t) {
    T(this, "_nodeMap");
    T(this, "_selection");
    T(this, "_flushSync");
    T(this, "_readOnly");
    this._nodeMap = n, this._selection = t || null, this._flushSync = !1, this._readOnly = !1;
  }
  isEmpty() {
    return this._nodeMap.size === 1 && this._selection === null;
  }
  read(n, t) {
    return ml(t && t.editor || null, this, n);
  }
  clone(n) {
    const t = new Rr(this._nodeMap, n === void 0 ? this._selection : n);
    return t._readOnly = !0, t;
  }
  toJSON() {
    return ml(null, this, () => ({ root: tf(ge()) }));
  }
}
class Hs extends Ve {
  static getType() {
    return "artificial";
  }
  createDOM(n) {
    return document.createElement("div");
  }
}
class Jn extends Ve {
  static getType() {
    return "paragraph";
  }
  static clone(n) {
    return new Jn(n.__key);
  }
  createDOM(n) {
    const t = document.createElement("p"), r = On(n.theme, "paragraph");
    return r !== void 0 && t.classList.add(...r), t;
  }
  updateDOM(n, t, r) {
    return !1;
  }
  static importDOM() {
    return { p: (n) => ({ conversion: Z0, priority: 0 }) };
  }
  exportDOM(n) {
    const { element: t } = super.exportDOM(n);
    if (be(t)) {
      this.isEmpty() && t.append(document.createElement("br"));
      const r = this.getFormatType();
      r && (t.style.textAlign = r);
    }
    return { element: t };
  }
  static importJSON(n) {
    return fe().updateFromJSON(n);
  }
  exportJSON() {
    const n = super.exportJSON();
    if (n.textFormat === void 0 || n.textStyle === void 0) {
      const t = this.getChildren().find(z);
      t ? (n.textFormat = t.getFormat(), n.textStyle = t.getStyle()) : (n.textFormat = this.getTextFormat(), n.textStyle = this.getTextStyle());
    }
    return n;
  }
  insertNewAfter(n, t) {
    const r = fe();
    r.setTextFormat(n.format), r.setTextStyle(n.style);
    const o = this.getDirection();
    return r.setDirection(o), r.setFormat(this.getFormatType()), r.setStyle(this.getStyle()), this.insertAfter(r, t), r;
  }
  collapseAtStart() {
    const n = this.getChildren();
    if (n.length === 0 || z(n[0]) && n[0].getTextContent().trim() === "") {
      if (this.getNextSibling() !== null) return this.selectNext(), this.remove(), !0;
      if (this.getPreviousSibling() !== null) return this.selectPrevious(), this.remove(), !0;
    }
    return !1;
  }
}
function Z0(e) {
  const n = fe();
  return e.style && (n.setFormat(e.style.textAlign), ta(e, n)), { node: n };
}
function fe() {
  return qe(new Jn());
}
function Tr(e) {
  return e instanceof Jn;
}
const X = 0, kn = 1, J0 = 4;
function nf(e, n, t, r) {
  const o = e._keyToDOMMap;
  o.clear(), e._editorState = Gs(), e._pendingEditorState = r, e._compositionKey = null, e._dirtyType = 0, e._cloneNotNeeded.clear(), e._dirtyLeaves = /* @__PURE__ */ new Set(), e._dirtyElements.clear(), e._normalizedNodes = /* @__PURE__ */ new Set(), e._updateTags = /* @__PURE__ */ new Set(), e._updates = [], e._blockCursorElement = null;
  const i = e._observer;
  i !== null && (i.disconnect(), e._observer = null), n !== null && (n.textContent = ""), t !== null && (t.textContent = "", o.set("root", t));
}
function Y0(e) {
  const n = /* @__PURE__ */ new Set(), t = /* @__PURE__ */ new Set();
  let r = e;
  for (; r; ) {
    const { ownNodeConfig: o } = Ko(r), i = r.transform;
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
      r = s.prototype instanceof et && s !== et ? s : void 0;
    }
  }
  return n;
}
function rf(e) {
  const n = e || {}, t = K0(), r = n.theme || {}, o = e === void 0 ? t : n.parentEditor || null, i = n.disableEvents || !1, s = Gs(), a = n.namespace || (o !== null ? o._config.namespace : pf()), l = n.editorState, u = [Zn, Nt, Hn, Kn, Jn, Hs, ...n.nodes || []], { onError: c, html: d } = n, f = n.editable === void 0 || n.editable;
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
      Ko(m);
      const b = m.getType(), _ = Y0(m);
      p.set(b, { exportDOM: d && d.export ? d.export.get(m) : void 0, klass: m, replace: v, replaceWithKlass: y, sharedNodeState: s0(u[h]), transforms: _ });
    }
  }
  const g = new sn(s, o, p, { disableEvents: i, namespace: a, theme: r }, c || console.error, (function(h, m) {
    const v = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Set(), b = (_) => {
      Object.keys(_).forEach((w) => {
        let S = v.get(w);
        S === void 0 && (S = [], v.set(w, S)), S.push(_[w]);
      });
    };
    return h.forEach((_) => {
      const w = _.klass.importDOM;
      if (w == null || y.has(w)) return;
      y.add(w);
      const S = w.call(_.klass);
      S !== null && b(S);
    }), m && b(m), v;
  })(p, d ? d.import : void 0), f, e);
  return l !== void 0 && (g._pendingEditorState = l, g._dirtyType = 2), (function(h) {
    h.registerCommand(bd, C0, X), h.registerCommand(vd, k0, X), h.registerCommand(xd, E0, X), h.registerCommand(_d, N0, X), h.registerCommand(wd, R0, X);
  })(g), g;
}
class sn {
  constructor(n, t, r, o, i, s, a, l) {
    T(this, "_headless");
    T(this, "_parentEditor");
    T(this, "_rootElement");
    T(this, "_editorState");
    T(this, "_pendingEditorState");
    T(this, "_compositionKey");
    T(this, "_deferred");
    T(this, "_keyToDOMMap");
    T(this, "_updates");
    T(this, "_updating");
    T(this, "_listeners");
    T(this, "_commands");
    T(this, "_nodes");
    T(this, "_decorators");
    T(this, "_pendingDecorators");
    T(this, "_config");
    T(this, "_dirtyType");
    T(this, "_cloneNotNeeded");
    T(this, "_dirtyLeaves");
    T(this, "_dirtyElements");
    T(this, "_normalizedNodes");
    T(this, "_updateTags");
    T(this, "_observer");
    T(this, "_key");
    T(this, "_onError");
    T(this, "_htmlConversions");
    T(this, "_window");
    T(this, "_editable");
    T(this, "_blockCursorElement");
    T(this, "_createEditorArgs");
    this._createEditorArgs = l, this._parentEditor = t, this._rootElement = null, this._editorState = n, this._pendingEditorState = null, this._compositionKey = null, this._deferred = [], this._keyToDOMMap = /* @__PURE__ */ new Map(), this._updates = [], this._updating = !1, this._listeners = { decorator: /* @__PURE__ */ new Set(), editable: /* @__PURE__ */ new Set(), mutation: /* @__PURE__ */ new Map(), root: /* @__PURE__ */ new Set(), textcontent: /* @__PURE__ */ new Set(), update: /* @__PURE__ */ new Set() }, this._commands = /* @__PURE__ */ new Map(), this._config = o, this._nodes = r, this._decorators = {}, this._pendingDecorators = null, this._dirtyType = 0, this._cloneNotNeeded = /* @__PURE__ */ new Set(), this._dirtyLeaves = /* @__PURE__ */ new Set(), this._dirtyElements = /* @__PURE__ */ new Map(), this._normalizedNodes = /* @__PURE__ */ new Set(), this._updateTags = /* @__PURE__ */ new Set(), this._observer = null, this._key = pf(), this._onError = i, this._htmlConversions = s, this._editable = a, this._headless = t !== null && t._headless, this._window = null, this._blockCursorElement = null;
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
    r === void 0 && M(35);
    const o = this._commands;
    o.has(n) || o.set(n, [/* @__PURE__ */ new Set(), /* @__PURE__ */ new Set(), /* @__PURE__ */ new Set(), /* @__PURE__ */ new Set(), /* @__PURE__ */ new Set()]);
    const i = o.get(n);
    i === void 0 && M(36, String(n));
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
    return t === void 0 && M(37, n.name), t;
  }
  resolveRegisteredNodeAfterReplacements(n) {
    for (; n.replaceWithKlass; ) n = this.getRegisteredNode(n.replaceWithKlass);
    return n;
  }
  initializeMutationListener(n, t) {
    const r = this._editorState, o = Nl(r).get(t.getType());
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
      const l = Nl(s.getEditorState()), u = [];
      for (const c of a) {
        const d = l.get(c);
        d && u.push(d);
      }
      u.length !== 0 && s.update(() => {
        for (const c of u) for (const d of c.keys()) {
          const f = me(d);
          f && f.markDirty();
        }
      }, s._pendingEditorState === null ? { tag: In } : void 0);
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
    return j(this, n, t);
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
      const r = On(this._config.theme, "root"), o = this._pendingEditorState || this._editorState;
      if (this._rootElement = n, nf(this, t, n, o), t !== null && (this._config.disableEvents || T0(t), r != null && t.classList.remove(...r)), n !== null) {
        const i = ea(n), s = n.style;
        s.userSelect = "text", s.whiteSpace = "pre-wrap", s.wordBreak = "break-word", n.setAttribute("data-lexical-editor", "true"), this._window = i, this._dirtyType = 2, ld(this), this._updateTags.add(In), wt(this), this._config.disableEvents || (function(a, l) {
          const u = a.ownerDocument;
          Qi.set(a, u);
          const c = go.get(u) ?? 0;
          c < 1 && u.addEventListener("selectionchange", Ud), go.set(u, c + 1), a.__lexicalEditor = l;
          const d = Vd(a);
          for (let f = 0; f < Xi.length; f++) {
            const [p, g] = Xi[f], h = typeof g == "function" ? (m) => {
              el(m) || (Qa(m), (l.isEditable() || p === "click") && g(m, l));
            } : (m) => {
              if (el(m)) return;
              Qa(m);
              const v = l.isEditable();
              switch (p) {
                case "cut":
                  return v && j(l, Ds, m);
                case "copy":
                  return j(l, Lo, m);
                case "paste":
                  return v && j(l, Ms, m);
                case "dragstart":
                  return v && j(l, Od, m);
                case "dragover":
                  return v && j(l, $d, m);
                case "dragend":
                  return v && j(l, b0, m);
                case "focus":
                  return v && j(l, _0, m);
                case "blur":
                  return v && j(l, w0, m);
                case "drop":
                  return v && j(l, Id, m);
              }
            };
            a.addEventListener(p, h), d.push(() => {
              a.removeEventListener(p, h);
            });
          }
        })(n, this), r != null && n.classList.add(...r);
      } else this._window = null, this._updateTags.add(In), wt(this);
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
    n.isEmpty() && M(38);
    let r = n;
    r._readOnly && (r = ef(n), r._selection = n._selection ? n._selection.clone() : null), ad(this);
    const o = this._pendingEditorState, i = this._updateTags, s = t !== void 0 ? t.tag : null;
    o === null || o.isEmpty() || (s != null && i.add(s), wt(this)), this._pendingEditorState = r, this._dirtyType = 2, this._dirtyElements.set("root", !1), this._compositionKey = null, s != null && i.add(s), this._updating || wt(this);
  }
  parseEditorState(n, t) {
    return (function(r, o, i) {
      const s = Gs(), a = _e, l = $e, u = we, c = o._dirtyElements, d = o._dirtyLeaves, f = o._cloneNotNeeded, p = o._dirtyType;
      o._dirtyElements = /* @__PURE__ */ new Map(), o._dirtyLeaves = /* @__PURE__ */ new Set(), o._cloneNotNeeded = /* @__PURE__ */ new Set(), o._dirtyType = 0, _e = s, $e = !1, we = o, Ks(null);
      try {
        const g = o._nodes;
        Us(r.root, g), i && i(), s._readOnly = !0;
      } catch (g) {
        g instanceof Error && o._onError(g);
      } finally {
        o._dirtyElements = c, o._dirtyLeaves = d, o._cloneNotNeeded = f, o._dirtyType = p, _e = a, $e = l, we = u;
      }
      return s;
    })(typeof n == "string" ? JSON.parse(n) : n, this, t);
  }
  read(n) {
    return wt(this), this.getEditorState().read(n, { editor: this });
  }
  update(n, t) {
    (function(r, o, i) {
      r._updating ? r._updates.push([o, i]) : Vo(r, o, i);
    })(this, n, t);
  }
  focus(n, t = {}) {
    const r = this._rootElement;
    r !== null && (r.setAttribute("autocapitalize", "off"), ft(this, () => {
      const o = V(), i = ge();
      o !== null ? o.dirty || Ne(o.clone()) : i.getChildrenSize() !== 0 && (t.defaultSelection === "rootStart" ? i.selectStart() : i.selectEnd()), rv("focus"), ov(() => {
        r.removeAttribute("autocapitalize"), n && n();
      });
    }), this._pendingEditorState === null && r.removeAttribute("autocapitalize"));
  }
  blur() {
    const n = this._rootElement;
    n !== null && n.blur();
    const t = at(this._window);
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
T(sn, "version");
sn.version = "0.39.0+prod.esm";
let as = null;
function Ks(e) {
  as = e;
}
let X0 = 1;
function of(e, n) {
  const t = Ws(e, n);
  return t === void 0 && M(30, n), t;
}
function Ws(e, n) {
  return e._nodes.get(n);
}
const Q0 = typeof queueMicrotask == "function" ? queueMicrotask : (e) => {
  Promise.resolve().then(e);
};
function sf(e) {
  return ee(Ln(e));
}
function qs(e) {
  const n = document.activeElement;
  if (!be(n)) return !1;
  const t = n.nodeName;
  return ee(Ln(e)) && (t === "INPUT" || t === "TEXTAREA" || n.contentEditable === "true" && Uo(n) == null);
}
function Ar(e, n, t) {
  const r = e.getRootElement();
  try {
    return r !== null && r.contains(n) && r.contains(t) && n !== null && !qs(n) && af(n) === e;
  } catch {
    return !1;
  }
}
function Zs(e) {
  return e instanceof sn;
}
function af(e) {
  let n = e;
  for (; n != null; ) {
    const t = Uo(n);
    if (Zs(t)) return t;
    n = Fr(n);
  }
  return null;
}
function Uo(e) {
  return e ? e.__lexicalEditor : null;
}
function Yt(e) {
  return Do(e) || e.isToken();
}
function xt(e) {
  return Yt(e) || e.isSegmented();
}
function Rt(e) {
  return Yn(e) && e.nodeType === 3;
}
function lf(e) {
  return Yn(e) && e.nodeType === 9;
}
function Pn(e) {
  let n = e;
  for (; n != null; ) {
    if (Rt(n)) return n;
    n = n.firstChild;
  }
  return null;
}
function vo(e, n, t) {
  const r = nn[n];
  if (t !== null && (e & r) === (t & r)) return e;
  let o = e ^ r;
  return n === "subscript" ? o &= -65 : n === "superscript" ? o &= -33 : n === "lowercase" ? (o &= -513, o &= -1025) : n === "uppercase" ? (o &= -257, o &= -1025) : n === "capitalize" && (o &= -257, o &= -513), o;
}
function uf(e) {
  return z(e) || $t(e) || ee(e);
}
function ev(e, n) {
  const t = (function() {
    const s = as;
    return as = null, s;
  })();
  if ((n = n || t && t.__key) != null) return void (e.__key = n);
  xe(), Yd();
  const r = ie(), o = Vt(), i = "" + X0++;
  o._nodeMap.set(i, e), A(e) ? r._dirtyElements.set(i, !0) : r._dirtyLeaves.add(i), r._cloneNotNeeded.add(i), r._dirtyType = 1, e.__key = i;
}
function Xt(e) {
  const n = e.getParent();
  if (n !== null) {
    const t = e.getWritable(), r = n.getWritable(), o = e.getPreviousSibling(), i = e.getNextSibling(), s = i !== null ? i.__key : null, a = o !== null ? o.__key : null, l = o !== null ? o.getWritable() : null, u = i !== null ? i.getWritable() : null;
    o === null && (r.__first = s), i === null && (r.__last = a), l !== null && (l.__next = s), u !== null && (u.__prev = a), t.__prev = null, t.__next = null, t.__parent = null, r.__size--;
  }
}
function xo(e) {
  Yd(), ho(e) && M(323, e.__key, e.__type);
  const n = e.getLatest(), t = n.__parent, r = Vt(), o = ie(), i = r._nodeMap, s = o._dirtyElements;
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
  o._dirtyType = 1, A(e) ? s.set(a, !0) : o._dirtyLeaves.add(a);
}
function ke(e) {
  xe();
  const n = ie(), t = n._compositionKey;
  if (e !== t) {
    if (n._compositionKey = e, t !== null) {
      const r = me(t);
      r !== null && r.getWritable();
    }
    if (e !== null) {
      const r = me(e);
      r !== null && r.getWritable();
    }
  }
}
function It() {
  return Nr() ? null : ie()._compositionKey;
}
function me(e, n) {
  const t = (n || Vt())._nodeMap.get(e);
  return t === void 0 ? null : t;
}
function cf(e, n) {
  const t = jo(e, ie());
  return t !== void 0 ? me(t, n) : null;
}
function jo(e, n) {
  return e[`__lexicalKey_${n._key}`];
}
function Ln(e, n) {
  let t = e;
  for (; t != null; ) {
    const r = cf(t, n);
    if (r !== null) return r;
    t = Fr(t);
  }
  return null;
}
function df(e) {
  const n = e._decorators, t = Object.assign({}, n);
  return e._pendingDecorators = t, t;
}
function xl(e) {
  return e.read(() => ge().getTextContent());
}
function ge() {
  return ff(Vt());
}
function ff(e) {
  return e._nodeMap.get("root");
}
function Ne(e) {
  xe();
  const n = Vt();
  e !== null && (e.dirty = !0, e.setCachedNodes(null)), n._selection = e;
}
function Nn(e) {
  const n = ie(), t = (function(r, o) {
    let i = r;
    for (; i != null; ) {
      const s = jo(i, o);
      if (s !== void 0) return s;
      i = Fr(i);
    }
    return null;
  })(e, n);
  return t === null ? e === n.getRootElement() ? me("root") : null : me(t);
}
function gf(e) {
  return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(e);
}
function Js(e) {
  const n = [];
  let t = e;
  for (; t !== null; ) n.push(t), t = t._parentEditor;
  return n;
}
function pf() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substring(0, 5);
}
function hf(e) {
  return Rt(e) ? e.nodeValue : null;
}
function Ys(e, n, t) {
  const r = at(We(n));
  if (r === null) return;
  const o = r.anchorNode;
  let { anchorOffset: i, focusOffset: s } = r;
  if (o !== null) {
    let a = hf(o);
    const l = Ln(o);
    if (a !== null && z(l)) {
      if (a === Mo && t) {
        const u = t.length;
        a = t, i = u, s = u;
      }
      a !== null && Xs(l, a, i, s, e);
    }
  }
}
function Xs(e, n, t, r, o) {
  let i = e;
  if (i.isAttached() && (o || !i.isDirty())) {
    const s = i.isComposing();
    let a = n;
    (s || o) && n[n.length - 1] === Mo && (a = n.slice(0, -1));
    const l = i.getTextContent();
    if (o || a !== l) {
      if (a === "") {
        if (ke(null), kr || Gn || Er) i.remove();
        else {
          const h = ie();
          setTimeout(() => {
            h.update(() => {
              i.isAttached() && i.remove();
            });
          }, 20);
        }
        return;
      }
      const u = i.getParent(), c = qn(), d = i.getTextContentSize(), f = It(), p = i.getKey();
      if (i.isToken() || f !== null && p === f && !s || $(c) && (u !== null && !u.canInsertTextBefore() && c.anchor.offset === 0 || c.anchor.key === e.__key && c.anchor.offset === 0 && !i.canInsertTextBefore() && !s || c.focus.key === e.__key && c.focus.offset === d && !i.canInsertTextAfter() && !s)) return void i.markDirty();
      const g = V();
      if (!$(g) || t === null || r === null) return void _l(i, a, g);
      if (g.setTextNodeRange(i, t, i, r), i.isSegmented()) {
        const h = he(i.getTextContent());
        i.replace(h), i = h;
      }
      _l(i, a, g);
    }
  }
}
function _l(e, n, t) {
  if (e.setTextContent(n), $(t)) {
    const r = e.getKey();
    for (const o of ["anchor", "focus"]) {
      const i = t[o];
      i.type === "text" && i.key === r && (i.offset = Pt(e, i.offset, "clamp"));
    }
  }
}
function Ur(e, n, t) {
  const r = n[t] || !1;
  return r === "any" || r === e[t];
}
function tv(e, n) {
  return Ur(e, n, "altKey") && Ur(e, n, "ctrlKey") && Ur(e, n, "shiftKey") && Ur(e, n, "metaKey");
}
function oe(e, n, t) {
  return tv(e, t) && e.key.toLowerCase() === n.toLowerCase();
}
const bt = { ctrlKey: !Ye, metaKey: Ye }, wl = { altKey: Ye, ctrlKey: !Ye };
function Sl(e) {
  return e.key === "Backspace";
}
function Cl(e) {
  return oe(e, "a", bt);
}
function nv(e) {
  const n = ge();
  if ($(e)) {
    const t = e.anchor, r = e.focus, o = t.getNode().getTopLevelElementOrThrow().getParentOrThrow();
    return t.set(o.getKey(), 0, "element"), r.set(o.getKey(), o.getChildrenSize(), "element"), so(e), e;
  }
  {
    const t = n.select(0, n.getChildrenSize());
    return Ne(so(t)), t;
  }
}
function On(e, n) {
  e.__lexicalClassNameCache === void 0 && (e.__lexicalClassNameCache = {});
  const t = e.__lexicalClassNameCache, r = t[n];
  if (r !== void 0) return r;
  const o = e[n];
  if (typeof o == "string") {
    const i = rd(o);
    return t[n] = i, i;
  }
  return o;
}
function Qs(e, n, t, r, o) {
  if (t.size === 0) return;
  const i = r.__type, s = r.__key, a = n.get(i);
  a === void 0 && M(33, i);
  const l = a.klass;
  let u = e.get(l);
  u === void 0 && (u = /* @__PURE__ */ new Map(), e.set(l, u));
  const c = u.get(s), d = c === "destroyed" && o === "created";
  (c === void 0 || d) && u.set(s, d ? "updated" : o);
}
function kl(e, n, t) {
  const r = e.getParent();
  let o = t, i = e;
  return r !== null && (n && t === 0 ? (o = i.getIndexWithinParent(), i = r) : n || t !== i.getChildrenSize() || (o = i.getIndexWithinParent() + 1, i = r)), i.getChildAtIndex(n ? o - 1 : o);
}
function ls(e, n) {
  const t = e.offset;
  if (e.type === "element")
    return kl(e.getNode(), n, t);
  {
    const r = e.getNode();
    if (n && t === 0 || !n && t === r.getTextContentSize()) {
      const o = n ? r.getPreviousSibling() : r.getNextSibling();
      return o === null ? kl(r.getParentOrThrow(), n, r.getIndexWithinParent() + (n ? 0 : 1)) : o;
    }
  }
  return null;
}
function mf(e) {
  const n = We(e).event, t = n && n.inputType;
  return t === "insertFromPaste" || t === "insertFromPasteAsQuotation";
}
function j(e, n, t) {
  return (function(r, o, i) {
    const s = Js(r);
    for (let a = 4; a >= 0; a--) for (let l = 0; l < s.length; l++) {
      const u = s[l], c = u._commands.get(o);
      if (c !== void 0) {
        const d = c[a];
        if (d !== void 0) {
          const f = Array.from(d), p = f.length;
          let g = !1;
          if (ft(u, () => {
            for (let h = 0; h < p; h++) if (f[h](i, r)) return void (g = !0);
          }), g) return g;
        }
      }
    }
    return !1;
  })(e, n, t);
}
function Go(e) {
  return !ye(e) && !e.isLastChild() && !e.isInline();
}
function an(e, n) {
  const t = e._keyToDOMMap.get(n);
  return t === void 0 && M(75, n), t;
}
function Fr(e) {
  const n = e.assignedSlot || e.parentElement;
  return ds(n) ? n.host : n;
}
function yf(e) {
  return lf(e) ? e : be(e) ? e.ownerDocument : null;
}
function rv(e) {
  xe(), ie()._updateTags.add(e);
}
function ov(e) {
  xe(), ie()._deferred.push(e);
}
function us(e, n) {
  let t = e.getParent();
  for (; t !== null; ) {
    if (t.is(n)) return !0;
    t = t.getParent();
  }
  return !1;
}
function ea(e) {
  const n = yf(e);
  return n ? n.defaultView : null;
}
function We(e) {
  const n = e._window;
  return n === null && M(78), n;
}
function iv(e) {
  let n = e.getParentOrThrow();
  for (; n !== null; ) {
    if (Fe(n)) return n;
    n = n.getParentOrThrow();
  }
  return n;
}
function Fe(e) {
  return ye(e) || A(e) && e.isShadowRoot();
}
function qe(e) {
  const n = ie(), t = e.getType(), r = Ws(n, t);
  r === void 0 && M(200, e.constructor.name, t);
  const { replace: o, replaceWithKlass: i } = r;
  if (o !== null) {
    const s = o(e), a = s.constructor;
    return i !== null ? s instanceof i || M(201, i.name, i.getType(), a.name, a.getType(), e.constructor.name, t) : s instanceof e.constructor && a !== e.constructor || M(202, a.name, a.getType(), e.constructor.name, t), s.__key === e.__key && M(203, e.constructor.name, t, a.name, a.getType()), s;
  }
  return e;
}
function vi(e, n) {
  !ye(e.getParent()) || A(n) || ee(n) || M(99);
}
function sv(e) {
  const n = me(e);
  return n === null && M(63, e), n;
}
function xi(e) {
  return (ee(e) || A(e) && !e.canBeEmpty()) && !e.isInline();
}
function cs(e, n, t) {
  t.style.removeProperty("caret-color"), n._blockCursorElement = null;
  const r = e.parentElement;
  r !== null && r.removeChild(e);
}
function at(e) {
  return st ? (e || window).getSelection() : null;
}
function av(e) {
  const n = ea(e);
  return n ? n.getSelection() : null;
}
function bf(e) {
  return be(e) && e.tagName === "A";
}
function be(e) {
  return Yn(e) && e.nodeType === 1;
}
function Yn(e) {
  return typeof e == "object" && e !== null && "nodeType" in e && typeof e.nodeType == "number";
}
function ds(e) {
  return Yn(e) && e.nodeType === 11;
}
function fs(e) {
  const n = new RegExp(/^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|mark|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var|#text)$/, "i");
  return e.nodeName.match(n) !== null;
}
function _o(e) {
  const n = new RegExp(/^(address|article|aside|blockquote|canvas|dd|div|dl|dt|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hr|li|main|nav|noscript|ol|p|pre|section|table|td|tfoot|ul|video)$/, "i");
  return e.nodeName.match(n) !== null;
}
function Ge(e) {
  if (ee(e) && !e.isInline()) return !0;
  if (!A(e) || Fe(e)) return !1;
  const n = e.getFirstChild(), t = n === null || $t(n) || z(n) || n.isInline();
  return !e.isInline() && e.canBeEmpty() !== !1 && t;
}
function Ho() {
  return ie();
}
const El = /* @__PURE__ */ new WeakMap(), lv = /* @__PURE__ */ new Map();
function Nl(e) {
  if (!e._readOnly && e.isEmpty()) return lv;
  e._readOnly || M(192);
  let n = El.get(e);
  return n || (n = (function(t) {
    const r = /* @__PURE__ */ new Map();
    for (const [o, i] of t._nodeMap) {
      const s = i.__type;
      let a = r.get(s);
      a || (a = /* @__PURE__ */ new Map(), r.set(s, a)), a.set(o, i);
    }
    return r;
  })(e), El.set(e, n)), n;
}
function vf(e) {
  const n = e.constructor.clone(e);
  return n.afterCloneFrom(e), n;
}
function uv(e) {
  return (n = vf(e))[jd] = !0, n;
  var n;
}
function ta(e, n) {
  const t = parseInt(e.style.paddingInlineStart, 10) || 0, r = Math.round(t / 40);
  n.setIndent(r);
}
function cv(e) {
  return e.__lexicalUnmanaged === !0;
}
function nr(e, n) {
  return (function(t, r) {
    return Object.prototype.hasOwnProperty.call(t, r);
  })(e, n) && e[n] !== et[n];
}
function Ko(e) {
  const n = Ba in e.prototype ? e.prototype[Ba]() : void 0, t = (function(s) {
    if (!(s === et || s.prototype instanceof et)) {
      let a = "<unknown>", l = "<unknown>";
      try {
        a = s.getType();
      } catch {
      }
      try {
        sn.version && (l = JSON.parse(sn.version));
      } catch {
      }
      M(290, s.name, a, l);
    }
    return s === js || s === Ve || s === et;
  })(e), r = !t && nr(e, "getType") ? e.getType() : void 0;
  let o, i = r;
  if (n) if (r) o = n[r];
  else for (const [s, a] of Object.entries(n)) i = s, o = a;
  if (!t && i && (nr(e, "getType") || (e.getType = () => i), nr(e, "clone") || (e.clone = (s) => (Ks(s), new e())), nr(e, "importJSON") || (e.importJSON = o && o.$importJSON || ((s) => new e().updateFromJSON(s))), !nr(e, "importDOM") && o)) {
    const { importDOM: s } = o;
    s && (e.importDOM = () => s);
  }
  return { ownNodeConfig: o, ownNodeType: i };
}
function xf(e) {
  const n = Ho();
  return xe(), new (n.resolveRegisteredNodeAfterReplacements(n.getRegisteredNode(e))).klass();
}
const Ke = (e, n) => {
  let t = e;
  for (; t != null && !ye(t); ) {
    if (n(t)) return t;
    t = t.getParent();
  }
  return null;
}, dv = { next: "previous", previous: "next" };
class na {
  constructor(n) {
    T(this, "origin");
    this.origin = n;
  }
  [Symbol.iterator]() {
    return _f({ hasNext: Dn, initial: this.getAdjacentCaret(), map: (n) => n, step: (n) => n.getAdjacentCaret() });
  }
  getAdjacentCaret() {
    return Ee(this.getNodeAtCaret(), this.direction);
  }
  getSiblingCaret() {
    return Ee(this.origin, this.direction);
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
        } else u === null && M(263, Array.from(a).join(" "));
      } else i.insert(l);
      i = Ee(l, this.direction);
    }
    for (const l of a.values()) l.remove();
    return this;
  }
}
class wr extends na {
  constructor() {
    super(...arguments);
    T(this, "type", "child");
  }
  getLatest() {
    const t = this.origin.getLatest();
    return t === this.origin ? this : rt(t, this.direction);
  }
  getParentCaret(t = "root") {
    return Ee(ra(this.getParentAtCaret(), t), this.direction);
  }
  getFlipped() {
    const t = Xn(this.direction);
    return Ee(this.getNodeAtCaret(), t) || rt(this.origin, t);
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
const fv = { root: ye, shadowRoot: Fe };
function Xn(e) {
  return dv[e];
}
function ra(e, n = "root") {
  return fv[n](e) ? null : e;
}
class ln extends na {
  constructor() {
    super(...arguments);
    T(this, "type", "sibling");
  }
  getLatest() {
    const t = this.origin.getLatest();
    return t === this.origin ? this : Ee(t, this.direction);
  }
  getSiblingCaret() {
    return this;
  }
  getParentAtCaret() {
    return this.origin.getParent();
  }
  getChildCaret() {
    return A(this.origin) ? rt(this.origin, this.direction) : null;
  }
  getParentCaret(t = "root") {
    return Ee(ra(this.getParentAtCaret(), t), this.direction);
  }
  getFlipped() {
    const t = Xn(this.direction);
    return Ee(this.getNodeAtCaret(), t) || rt(this.origin.getParentOrThrow(), t);
  }
  isSamePointCaret(t) {
    return t instanceof ln && this.direction === t.direction && this.origin.is(t.origin);
  }
  isSameNodeCaret(t) {
    return (t instanceof ln || t instanceof un) && this.direction === t.direction && this.origin.is(t.origin);
  }
}
class un extends na {
  constructor(t, r) {
    super(t);
    T(this, "type", "text");
    T(this, "offset");
    this.offset = r;
  }
  getLatest() {
    const t = this.origin.getLatest();
    return t === this.origin ? this : cn(t, this.direction, this.offset);
  }
  getParentAtCaret() {
    return this.origin.getParent();
  }
  getChildCaret() {
    return null;
  }
  getParentCaret(t = "root") {
    return Ee(ra(this.getParentAtCaret(), t), this.direction);
  }
  getFlipped() {
    return cn(this.origin, Xn(this.direction), this.offset);
  }
  isSamePointCaret(t) {
    return t instanceof un && this.direction === t.direction && this.origin.is(t.origin) && this.offset === t.offset;
  }
  isSameNodeCaret(t) {
    return (t instanceof ln || t instanceof un) && this.direction === t.direction && this.origin.is(t.origin);
  }
  getSiblingCaret() {
    return Ee(this.origin, this.direction);
  }
}
function Mt(e) {
  return e instanceof un;
}
function Dn(e) {
  return e instanceof ln;
}
function gt(e) {
  return e instanceof wr;
}
const gv = { next: class extends un {
  constructor() {
    super(...arguments);
    T(this, "direction", "next");
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
    T(this, "direction", "previous");
  }
  getNodeAtCaret() {
    return this.origin.getPreviousSibling();
  }
  insert(n) {
    return this.origin.insertBefore(n), this;
  }
} }, pv = { next: class extends ln {
  constructor() {
    super(...arguments);
    T(this, "direction", "next");
  }
  getNodeAtCaret() {
    return this.origin.getNextSibling();
  }
  insert(n) {
    return this.origin.insertAfter(n), this;
  }
}, previous: class extends ln {
  constructor() {
    super(...arguments);
    T(this, "direction", "previous");
  }
  getNodeAtCaret() {
    return this.origin.getPreviousSibling();
  }
  insert(n) {
    return this.origin.insertBefore(n), this;
  }
} }, hv = { next: class extends wr {
  constructor() {
    super(...arguments);
    T(this, "direction", "next");
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
    T(this, "direction", "previous");
  }
  getNodeAtCaret() {
    return this.origin.getLastChild();
  }
  insert(n) {
    return this.origin.splice(this.origin.getChildrenSize(), 0, [n]), this;
  }
} };
function Ee(e, n) {
  return e ? new pv[n](e) : null;
}
function cn(e, n, t) {
  return e ? new gv[n](e, Pt(e, t)) : null;
}
function Pt(e, n, t = "error") {
  const r = e.getTextContentSize();
  let o = n === "next" ? r : n === "previous" ? 0 : n;
  return (o < 0 || o > r) && (t !== "clamp" && td(284, String(n), String(r), e.getKey()), o = o < 0 ? 0 : r), o;
}
function Rl(e, n) {
  return new yv(e, n);
}
function rt(e, n) {
  return A(e) ? new hv[n](e) : null;
}
function mv(e) {
  return e && e.getChildCaret() || e;
}
function oa(e) {
  return e && mv(e.getAdjacentCaret());
}
class ia {
  constructor(n, t, r) {
    T(this, "type", "node-caret-range");
    T(this, "direction");
    T(this, "anchor");
    T(this, "focus");
    this.anchor = n, this.focus = t, this.direction = r;
  }
  getLatest() {
    const n = this.anchor.getLatest(), t = this.focus.getLatest();
    return n === this.anchor && t === this.focus ? this : new ia(n, t, this.direction);
  }
  isCollapsed() {
    return this.anchor.isSamePointCaret(this.focus);
  }
  getTextSlices() {
    const n = (o) => {
      const i = this[o].getLatest();
      return Mt(i) ? (function(s, a) {
        const { direction: l, origin: u } = s, c = Pt(u, a === "focus" ? Xn(l) : l);
        return Rl(s, c - s.offset);
      })(i, o) : null;
    }, t = n("anchor"), r = n("focus");
    if (t && r) {
      const { caret: o } = t, { caret: i } = r;
      if (o.isSameNodeCaret(i)) return [Rl(o, i.offset - o.offset), null];
    }
    return [t, r];
  }
  iterNodeCarets(n = "root") {
    const t = Mt(this.anchor) ? this.anchor.getSiblingCaret() : this.anchor.getLatest(), r = this.focus.getLatest(), o = Mt(r), i = (s) => s.isSameNodeCaret(r) ? null : oa(s) || s.getParentCaret(n);
    return _f({ hasNext: (s) => s !== null && !(o && r.isSameNodeCaret(s)), initial: t.isSameNodeCaret(r) ? null : i(t), map: (s) => s, step: i });
  }
  [Symbol.iterator]() {
    return this.iterNodeCarets("root");
  }
}
class yv {
  constructor(n, t) {
    T(this, "type", "slice");
    T(this, "caret");
    T(this, "distance");
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
    return cn(n.setTextContent(i.slice(0, r) + i.slice(o)), t, r);
  }
}
function sa(e) {
  return Bt(e, Ee(ge(), e.direction));
}
function bv(e) {
  return Bt(e, e);
}
function Bt(e, n) {
  return e.direction !== n.direction && M(265), new ia(e, n, e.direction);
}
function _f(e) {
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
function wf(e, n) {
  const t = Xr(e.origin, n.origin);
  switch (t === null && M(275, e.origin.getKey(), n.origin.getKey()), t.type) {
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
      return Sf(t);
  }
}
function Sf(e) {
  const { a: n, b: t } = e, r = n.__key, o = t.__key;
  let i = n, s = t;
  for (; i && s; i = i.getNextSibling(), s = s.getNextSibling()) {
    if (i.__key === o) return -1;
    if (s.__key === r) return 1;
  }
  return i === null ? 1 : -1;
}
function jr(e, n) {
  return n.is(e);
}
function Tl(e) {
  return A(e) ? [e.getLatest(), null] : [e.getParent(), e.getLatest()];
}
function Xr(e, n) {
  if (e.is(n)) return { commonAncestor: e, type: "same" };
  const t = /* @__PURE__ */ new Map();
  for (let [r, o] = Tl(e); r; o = r, r = r.getParent()) t.set(r, o);
  for (let [r, o] = Tl(n); r; o = r, r = r.getParent()) {
    const i = t.get(r);
    if (i !== void 0) return i === null ? (jr(e, r) || M(276), { commonAncestor: r, type: "ancestor" }) : o === null ? (jr(n, r) || M(277), { commonAncestor: r, type: "descendant" }) : ((A(i) || jr(e, i)) && (A(o) || jr(n, o)) && r.is(i.getParent()) && r.is(o.getParent()) || M(278), { a: i, b: o, commonAncestor: r, type: "branch" });
  }
  return null;
}
function kt(e, n) {
  const { type: t, key: r, offset: o } = e, i = sv(e.key);
  return t === "text" ? (z(i) || M(266, i.getType(), r), cn(i, n, o)) : (A(i) || M(267, i.getType(), r), _v(i, e.offset, n));
}
function dn(e, n) {
  const { origin: t, direction: r } = n, o = r === "next";
  Mt(n) ? e.set(t.getKey(), n.offset, "text") : Dn(n) ? z(t) ? e.set(t.getKey(), Pt(t, r), "text") : e.set(t.getParentOrThrow().getKey(), t.getIndexWithinParent() + (o ? 1 : 0), "element") : (gt(n) && A(t) || M(268), e.set(t.getKey(), o ? 0 : t.getChildrenSize(), "element"));
}
function vv(e) {
  const n = V(), t = $(n) ? n : Bo();
  return Qr(t, e), Ne(t), t;
}
function Qr(e, n) {
  dn(e.anchor, n.anchor), dn(e.focus, n.focus);
}
function Al(e) {
  const { anchor: n, focus: t } = e, r = kt(n, "next"), o = kt(t, "next"), i = wf(r, o) <= 0 ? "next" : "previous";
  return Bt(zn(r, i), zn(o, i));
}
function aa(e) {
  const { direction: n, origin: t } = e, r = Ee(t, Xn(n)).getNodeAtCaret();
  return r ? Ee(r, n) : rt(t.getParentOrThrow(), n);
}
function Fl(e, n = "root") {
  const t = [e];
  for (let r = gt(e) ? e.getParentCaret(n) : e.getSiblingCaret(); r !== null; r = r.getParentCaret(n)) t.push(aa(r));
  return t;
}
function _i(e) {
  return !!e && e.origin.isAttached();
}
function xv(e, n = "removeEmptySlices") {
  if (e.isCollapsed()) return e;
  const t = "root", r = "next";
  let o = n;
  const i = kf(e, r), s = Fl(i.anchor, t), a = Fl(i.focus.getFlipped(), t), l = /* @__PURE__ */ new Set(), u = [];
  for (const g of i.iterNodeCarets(t)) if (gt(g)) l.add(g.origin.getKey());
  else if (Dn(g)) {
    const { origin: h } = g;
    A(h) && !l.has(h.getKey()) || u.push(h);
  }
  for (const g of u) g.remove();
  for (const g of i.getTextSlices()) {
    if (!g) continue;
    const { origin: h } = g.caret, m = h.getTextContentSize(), v = aa(Ee(h, r)), y = h.getMode();
    if (Math.abs(g.distance) === m && o === "removeEmptySlices" || y === "token" && g.distance !== 0) v.remove();
    else if (g.distance !== 0) {
      o = "removeEmptySlices";
      let b = g.removeTextSlice();
      const _ = g.caret.origin;
      if (y === "segmented") {
        const w = b.origin, S = he(w.getTextContent()).setStyle(w.getStyle()).setFormat(w.getFormat());
        v.replaceOrInsert(S), b = cn(S, r, b.offset);
      }
      _.is(s[0].origin) && (s[0] = b), _.is(a[0].origin) && (a[0] = b.getFlipped());
    }
  }
  let c, d;
  for (const g of s) if (_i(g)) {
    c = He(g);
    break;
  }
  for (const g of a) if (_i(g)) {
    d = He(g);
    break;
  }
  const f = (function(g, h, m) {
    if (!g || !h) return null;
    const v = g.getParentAtCaret(), y = h.getParentAtCaret();
    if (!v || !y) return null;
    const b = v.getParents().reverse();
    b.push(v);
    const _ = y.getParents().reverse();
    _.push(y);
    const w = Math.min(b.length, _.length);
    let S;
    for (S = 0; S < w && b[S] === _[S]; S++) ;
    const k = (R, O) => {
      let I;
      for (let B = S; B < R.length; B++) {
        const D = R[B];
        if (Fe(D)) return;
        !I && O(D) && (I = D);
      }
      return I;
    }, N = k(b, Ge), E = N && k(_, (R) => m.has(R.getKey()) && Ge(R));
    return N && E ? [N, E] : null;
  })(c, d, l);
  if (f) {
    const [g, h] = f;
    rt(g, "previous").splice(0, h.getChildren()), h.remove();
  }
  const p = [c, d, ...s, ...a].find(_i);
  if (p)
    return bv(zn(He(p), e.direction));
  M(269, JSON.stringify(s.map((g) => g.origin.__key)));
}
function He(e) {
  const n = (function(o) {
    let i = o;
    for (; gt(i); ) {
      const s = oa(i);
      if (!gt(s)) break;
      i = s;
    }
    return i;
  })(e.getLatest()), { direction: t } = n;
  if (z(n.origin)) return Mt(n) ? n : cn(n.origin, t, t);
  const r = n.getAdjacentCaret();
  return Dn(r) && z(r.origin) ? cn(r.origin, t, Xn(t)) : n;
}
function Cf(e) {
  return Mt(e) && e.offset !== Pt(e.origin, e.direction);
}
function zn(e, n) {
  return e.direction === n ? e : e.getFlipped();
}
function kf(e, n) {
  return e.direction === n ? e : Bt(zn(e.focus, n), zn(e.anchor, n));
}
function _v(e, n, t) {
  let r = rt(e, "next");
  for (let o = 0; o < n; o++) {
    const i = r.getAdjacentCaret();
    if (i === null) break;
    r = i;
  }
  return zn(r, t);
}
function wv(...e) {
  return e;
}
function Sv(e, n) {
  if (!n || e === n) return e;
  for (const t in n) if (e[t] !== n[t]) return { ...e, ...n };
  return e;
}
const Ef = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, Cv = Ef ? Sr : ze, Gr = { tag: In };
function kv({ initialConfig: e, children: n }) {
  const t = Bn(() => {
    const { theme: r, namespace: o, nodes: i, onError: s, editorState: a, html: l } = e, u = Lb(null, r), c = rf({ editable: e.editable, html: l, namespace: o, nodes: i, onError: (d) => s(d, c), theme: r });
    return (function(d, f) {
      if (f !== null) {
        if (f === void 0) d.update(() => {
          const p = ge();
          if (p.isEmpty()) {
            const g = fe();
            p.append(g);
            const h = Ef ? document.activeElement : null;
            (V() !== null || h !== null && h === d.getRootElement()) && g.select();
          }
        }, Gr);
        else if (f !== null) switch (typeof f) {
          case "string": {
            const p = d.parseEditorState(f);
            d.setEditorState(p, Gr);
            break;
          }
          case "object":
            d.setEditorState(f, Gr);
            break;
          case "function":
            d.update(() => {
              ge().isEmpty() && f(d);
            }, Gr);
        }
      }
    })(c, a), [c, u];
  }, []);
  return Cv(() => {
    const r = e.editable, [o] = t;
    o.setEditable(r === void 0 || r);
  }, []), x(ed.Provider, { value: t, children: n });
}
const Ev = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? Sr : ze;
function Nv(e) {
  return { initialValueFn: () => e.isEditable(), subscribe: (n) => e.registerEditableListener(n) };
}
function Rv() {
  return (function(e) {
    const [n] = it(), t = Bn(() => e(n), [n, e]), [r, o] = Qt(() => t.initialValueFn()), i = _g(r);
    return Ev(() => {
      const { initialValueFn: s, subscribe: a } = t, l = s();
      return i.current !== l && (i.current = l, o(l)), a((u) => {
        i.current = u, o(u);
      });
    }, [t, e]), r;
  })(Nv);
}
const gs = /* @__PURE__ */ new Map();
function Nf(e) {
  const n = {};
  if (!e) return n;
  const t = e.split(";");
  for (const r of t) if (r !== "") {
    const [o, i] = r.split(/:([^]+)/);
    o && i && (n[o.trim()] = i.trim());
  }
  return n;
}
function Il(e) {
  let n = gs.get(e);
  return n === void 0 && (n = Nf(e), gs.set(e, n)), n;
}
function Rf(e) {
  const n = Ho().getElementByKey(e.getKey());
  if (n === null) return null;
  const t = n.ownerDocument.defaultView;
  return t === null ? null : t.getComputedStyle(n);
}
function Tf(e) {
  return Rf(ye(e) ? e : e.getParentOrThrow());
}
function Ol(e) {
  const n = Tf(e);
  return n !== null && n.direction === "rtl";
}
function Af(e, n, t = "self") {
  const r = e.getStartEndPoints();
  if (n.isSelected(e) && !xt(n) && r !== null) {
    const [o, i] = r, s = e.isBackward(), a = o.getNode(), l = i.getNode(), u = n.is(a), c = n.is(l);
    if (u || c) {
      const [d, f] = is(e), p = a.is(l), g = n.is(s ? l : a), h = n.is(s ? a : l);
      let m, v = 0;
      p ? (v = d > f ? f : d, m = d > f ? d : f) : g ? (v = s ? f : d, m = void 0) : h && (v = 0, m = s ? d : f);
      const y = n.__text.slice(v, m);
      y !== n.__text && (t === "clone" && (n = uv(n)), n.__text = y);
    }
  }
  return n;
}
function Tv(e) {
  const n = e.getStyle(), t = Nf(n);
  gs.set(n, t);
}
function Av(e, n) {
  const t = e.getFormatType(), r = e.getIndent();
  t !== n.getFormatType() && n.setFormat(t), r !== n.getIndent() && n.setIndent(r);
}
function $l(e, n, t = Av) {
  if (e === null) return;
  const r = e.getStartEndPoints(), o = /* @__PURE__ */ new Map();
  let i = null;
  if (r) {
    const [s, a] = r;
    i = Bo(), i.anchor.set(s.key, s.offset, s.type), i.focus.set(a.key, a.offset, a.type);
    const l = Ke(s.getNode(), Ge), u = Ke(a.getNode(), Ge);
    A(l) && o.set(l.getKey(), l), A(u) && o.set(u.getKey(), u);
  }
  for (const s of e.getNodes()) if (A(s) && Ge(s)) o.set(s.getKey(), s);
  else if (r === null) {
    const a = Ke(s, Ge);
    A(a) && o.set(a.getKey(), a);
  }
  for (const [s, a] of o) {
    const l = n();
    t(a, l), a.replace(l, !0), i && (s === i.anchor.key && i.anchor.set(l.getKey(), i.anchor.offset, i.anchor.type), s === i.focus.key && i.focus.set(l.getKey(), i.focus.offset, i.focus.type));
  }
  i && e.is(V()) && Ne(i);
}
function Ff(e) {
  const n = If(e);
  return n !== null && n.writingMode === "vertical-rl";
}
function If(e) {
  const n = e.anchor.getNode();
  return A(n) ? Rf(n) : Tf(n);
}
function Ml(e, n) {
  let t = Ff(e) ? !n : n;
  Of(e) && (t = !t);
  const r = kt(e.focus, t ? "previous" : "next");
  if (Cf(r)) return !1;
  for (const o of sa(r)) {
    if (gt(o)) return !o.origin.isInline();
    if (!A(o.origin)) {
      if (ee(o.origin)) return !0;
      break;
    }
  }
  return !1;
}
function Fv(e, n, t, r) {
  e.modify(n ? "extend" : "move", t, r);
}
function Of(e) {
  const n = If(e);
  return n !== null && n.direction === "rtl";
}
function Pl(e, n, t) {
  const r = Of(e);
  let o;
  o = Ff(e) || r ? !t : t, Fv(e, n, o, "character");
}
function Iv(e, ...n) {
  const t = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", e);
  for (const o of n) r.append("v", o);
  throw t.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
const $f = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, Ov = $f && "documentMode" in document ? document.documentMode : null;
!(!$f || !("InputEvent" in window) || Ov) && "getTargetRanges" in new window.InputEvent("input");
function Mf(...e) {
  const n = [];
  for (const t of e) if (t && typeof t == "string") for (const [r] of t.matchAll(/\S+/g)) n.push(r);
  return n;
}
function Et(...e) {
  return () => {
    for (let n = e.length - 1; n >= 0; n--) e[n]();
    e.length = 0;
  };
}
function ot(e, ...n) {
  const t = Mf(...n);
  t.length > 0 && e.classList.add(...t);
}
function Wo(e, ...n) {
  const t = Mf(...n);
  t.length > 0 && e.classList.remove(...t);
}
function $v(e) {
  return e ? e.getAdjacentCaret() : null;
}
function Mv(e, n) {
  let t = e;
  for (; t != null; ) {
    if (t instanceof n) return t;
    t = t.getParent();
  }
  return null;
}
function Pv(e) {
  const n = Ke(e, (t) => A(t) && !t.isInline());
  return A(n) || Iv(4, e.__key), n;
}
function qt(e, n) {
  return e !== null && Object.getPrototypeOf(e).constructor.name === n.name;
}
const Lv = Symbol.for("preact-signals");
function qo() {
  if (Lt > 1) return void Lt--;
  let e, n = !1;
  for (; gr !== void 0; ) {
    let t = gr;
    for (gr = void 0, ps++; t !== void 0; ) {
      const r = t.o;
      if (t.o = void 0, t.f &= -3, !(8 & t.f) && Pf(t)) try {
        t.c();
      } catch (o) {
        n || (e = o, n = !0);
      }
      t = r;
    }
  }
  if (ps = 0, Lt--, n) throw e;
}
function Dv(e) {
  if (Lt > 0) return e();
  Lt++;
  try {
    return e();
  } finally {
    qo();
  }
}
let re, gr;
function Ll(e) {
  const n = re;
  re = void 0;
  try {
    return e();
  } finally {
    re = n;
  }
}
let Lt = 0, ps = 0, eo = 0;
function Dl(e) {
  if (re === void 0) return;
  let n = e.n;
  return n === void 0 || n.t !== re ? (n = { i: 0, S: e, p: re.s, n: void 0, t: re, e: void 0, x: void 0, r: n }, re.s !== void 0 && (re.s.n = n), re.s = n, e.n = n, 32 & re.f && e.S(n), n) : n.i === -1 ? (n.i = 0, n.n !== void 0 && (n.n.p = n.p, n.p !== void 0 && (n.p.n = n.n), n.p = re.s, n.n = void 0, re.s.n = n, re.s = n), n) : void 0;
}
function Ie(e, n) {
  this.v = e, this.i = 0, this.n = void 0, this.t = void 0, this.W = n == null ? void 0 : n.watched, this.Z = n == null ? void 0 : n.unwatched, this.name = n == null ? void 0 : n.name;
}
function zv(e, n) {
  return new Ie(e, n);
}
function Pf(e) {
  for (let n = e.s; n !== void 0; n = n.n) if (n.S.i !== n.i || !n.S.h() || n.S.i !== n.i) return !0;
  return !1;
}
function zl(e) {
  for (let n = e.s; n !== void 0; n = n.n) {
    const t = n.S.n;
    if (t !== void 0 && (n.r = t), n.S.n = n, n.i = -1, n.n === void 0) {
      e.s = n;
      break;
    }
  }
}
function Lf(e) {
  let n, t = e.s;
  for (; t !== void 0; ) {
    const r = t.p;
    t.i === -1 ? (t.S.U(t), r !== void 0 && (r.n = t.n), t.n !== void 0 && (t.n.p = r)) : n = t, t.S.n = t.r, t.r !== void 0 && (t.r = void 0), t = r;
  }
  e.s = n;
}
function vn(e, n) {
  Ie.call(this, void 0), this.x = e, this.s = void 0, this.g = eo - 1, this.f = 4, this.W = n == null ? void 0 : n.watched, this.Z = n == null ? void 0 : n.unwatched, this.name = n == null ? void 0 : n.name;
}
function Df(e) {
  const n = e.u;
  if (e.u = void 0, typeof n == "function") {
    Lt++;
    const t = re;
    re = void 0;
    try {
      n();
    } catch (r) {
      throw e.f &= -2, e.f |= 8, la(e), r;
    } finally {
      re = t, qo();
    }
  }
}
function la(e) {
  for (let n = e.s; n !== void 0; n = n.n) n.S.U(n);
  e.x = void 0, e.s = void 0, Df(e);
}
function Bv(e) {
  if (re !== this) throw new Error("Out-of-order effect");
  Lf(this), re = e, this.f &= -2, 8 & this.f && la(this), qo();
}
function En(e, n) {
  this.x = e, this.u = void 0, this.s = void 0, this.o = void 0, this.f = 32, this.name = n == null ? void 0 : n.name;
}
function ua(e, n) {
  const t = new En(e, n);
  try {
    t.c();
  } catch (o) {
    throw t.d(), o;
  }
  const r = t.d.bind(t);
  return r[Symbol.dispose] = r, r;
}
function Vv(e, n = {}) {
  const t = {};
  for (const r in e) {
    const o = n[r], i = zv(o === void 0 ? e[r] : o);
    t[r] = i;
  }
  return t;
}
Ie.prototype.brand = Lv, Ie.prototype.h = function() {
  return !0;
}, Ie.prototype.S = function(e) {
  const n = this.t;
  n !== e && e.e === void 0 && (e.x = n, this.t = e, n !== void 0 ? n.e = e : Ll(() => {
    var t;
    (t = this.W) == null || t.call(this);
  }));
}, Ie.prototype.U = function(e) {
  if (this.t !== void 0) {
    const n = e.e, t = e.x;
    n !== void 0 && (n.x = t, e.e = void 0), t !== void 0 && (t.e = n, e.x = void 0), e === this.t && (this.t = t, t === void 0 && Ll(() => {
      var r;
      (r = this.Z) == null || r.call(this);
    }));
  }
}, Ie.prototype.subscribe = function(e) {
  return ua(() => {
    const n = this.value, t = re;
    re = void 0;
    try {
      e(n);
    } finally {
      re = t;
    }
  }, { name: "sub" });
}, Ie.prototype.valueOf = function() {
  return this.value;
}, Ie.prototype.toString = function() {
  return this.value + "";
}, Ie.prototype.toJSON = function() {
  return this.value;
}, Ie.prototype.peek = function() {
  const e = re;
  re = void 0;
  try {
    return this.value;
  } finally {
    re = e;
  }
}, Object.defineProperty(Ie.prototype, "value", { get() {
  const e = Dl(this);
  return e !== void 0 && (e.i = this.i), this.v;
}, set(e) {
  if (e !== this.v) {
    if (ps > 100) throw new Error("Cycle detected");
    this.v = e, this.i++, eo++, Lt++;
    try {
      for (let n = this.t; n !== void 0; n = n.x) n.t.N();
    } finally {
      qo();
    }
  }
} }), vn.prototype = new Ie(), vn.prototype.h = function() {
  if (this.f &= -3, 1 & this.f) return !1;
  if ((36 & this.f) == 32 || (this.f &= -5, this.g === eo)) return !0;
  if (this.g = eo, this.f |= 1, this.i > 0 && !Pf(this)) return this.f &= -2, !0;
  const e = re;
  try {
    zl(this), re = this;
    const n = this.x();
    (16 & this.f || this.v !== n || this.i === 0) && (this.v = n, this.f &= -17, this.i++);
  } catch (n) {
    this.v = n, this.f |= 16, this.i++;
  }
  return re = e, Lf(this), this.f &= -2, !0;
}, vn.prototype.S = function(e) {
  if (this.t === void 0) {
    this.f |= 36;
    for (let n = this.s; n !== void 0; n = n.n) n.S.S(n);
  }
  Ie.prototype.S.call(this, e);
}, vn.prototype.U = function(e) {
  if (this.t !== void 0 && (Ie.prototype.U.call(this, e), this.t === void 0)) {
    this.f &= -33;
    for (let n = this.s; n !== void 0; n = n.n) n.S.U(n);
  }
}, vn.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 6;
    for (let e = this.t; e !== void 0; e = e.x) e.t.N();
  }
}, Object.defineProperty(vn.prototype, "value", { get() {
  if (1 & this.f) throw new Error("Cycle detected");
  const e = Dl(this);
  if (this.h(), e !== void 0 && (e.i = this.i), 16 & this.f) throw this.v;
  return this.v;
} }), En.prototype.c = function() {
  const e = this.S();
  try {
    if (8 & this.f || this.x === void 0) return;
    const n = this.x();
    typeof n == "function" && (this.u = n);
  } finally {
    e();
  }
}, En.prototype.S = function() {
  if (1 & this.f) throw new Error("Cycle detected");
  this.f |= 1, this.f &= -9, Df(this), zl(this), Lt++;
  const e = re;
  return re = this, Bv.bind(this, e);
}, En.prototype.N = function() {
  2 & this.f || (this.f |= 2, this.o = gr, gr = this);
}, En.prototype.d = function() {
  this.f |= 8, 1 & this.f || la(this);
}, En.prototype.dispose = function() {
  this.d();
};
function Uv(e) {
  return (typeof e.nodes == "function" ? e.nodes() : e.nodes) || [];
}
function ae(e, ...n) {
  const t = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", e);
  for (const o of n) r.append("v", o);
  throw t.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
function zf(e, n) {
  if (e && n && !Array.isArray(n) && typeof e == "object" && typeof n == "object") {
    const t = e, r = n;
    for (const o in r) t[o] = zf(t[o], r[o]);
    return e;
  }
  return n;
}
const ca = 0, hs = 1, Bf = 2, wi = 3, Hr = 4, xn = 5, Si = 6, rr = 7;
function Ci(e) {
  return e.id === ca;
}
function Vf(e) {
  return e.id === Bf;
}
function jv(e) {
  return (function(n) {
    return n.id === hs;
  })(e) || ae(305, String(e.id), String(hs)), Object.assign(e, { id: Bf });
}
const Gv = /* @__PURE__ */ new Set();
let Hv = class {
  constructor(n, t) {
    T(this, "builder");
    T(this, "configs");
    T(this, "_dependency");
    T(this, "_peerNameSet");
    T(this, "extension");
    T(this, "state");
    T(this, "_signal");
    this.builder = n, this.extension = t, this.configs = /* @__PURE__ */ new Set(), this.state = { id: ca };
  }
  mergeConfigs() {
    let n = this.extension.config || {};
    const t = this.extension.mergeConfig ? this.extension.mergeConfig.bind(this.extension) : Sv;
    for (const r of this.configs) n = t(n, r);
    return n;
  }
  init(n) {
    const t = this.state;
    Vf(t) || ae(306, String(t.id));
    const r = { getDependency: this.getInitDependency.bind(this), getDirectDependentNames: this.getDirectDependentNames.bind(this), getPeer: this.getInitPeer.bind(this), getPeerNameSet: this.getPeerNameSet.bind(this) }, o = { ...r, getDependency: this.getDependency.bind(this), getInitResult: this.getInitResult.bind(this), getPeer: this.getPeer.bind(this) }, i = (function(a, l, u) {
      return Object.assign(a, { config: l, id: wi, registerState: u });
    })(t, this.mergeConfigs(), r);
    let s;
    this.state = i, this.extension.init && (s = this.extension.init(n, i.config, r)), this.state = (function(a, l, u) {
      return Object.assign(a, { id: Hr, initResult: l, registerState: u });
    })(i, s, o);
  }
  build(n) {
    const t = this.state;
    let r;
    t.id !== Hr && ae(307, String(t.id), String(xn)), this.extension.build && (r = this.extension.build(n, t.config, t.registerState));
    const o = { ...t.registerState, getOutput: () => r, getSignal: this.getSignal.bind(this) };
    this.state = (function(i, s, a) {
      return Object.assign(i, { id: xn, output: s, registerState: a });
    })(t, r, o);
  }
  register(n, t) {
    this._signal = t;
    const r = this.state;
    r.id !== xn && ae(308, String(r.id), String(xn));
    const o = this.extension.register && this.extension.register(n, r.config, r.registerState);
    return this.state = (function(i) {
      return Object.assign(i, { id: Si });
    })(r), () => {
      const i = this.state;
      i.id !== rr && ae(309, String(r.id), String(rr)), this.state = (function(s) {
        return Object.assign(s, { id: xn });
      })(i), o && o();
    };
  }
  afterRegistration(n) {
    const t = this.state;
    let r;
    return t.id !== Si && ae(310, String(t.id), String(Si)), this.extension.afterRegistration && (r = this.extension.afterRegistration(n, t.config, t.registerState)), this.state = (function(o) {
      return Object.assign(o, { id: rr });
    })(t), r;
  }
  getSignal() {
    return this._signal === void 0 && ae(311), this._signal;
  }
  getInitResult() {
    this.extension.init === void 0 && ae(312, this.extension.name);
    const n = this.state;
    return (function(t) {
      return t.id >= Hr;
    })(n) || ae(313, String(n.id), String(Hr)), n.initResult;
  }
  getInitPeer(n) {
    const t = this.builder.extensionNameMap.get(n);
    return t ? t.getExtensionInitDependency() : void 0;
  }
  getExtensionInitDependency() {
    const n = this.state;
    return (function(t) {
      return t.id >= wi;
    })(n) || ae(314, String(n.id), String(wi)), { config: n.config };
  }
  getPeer(n) {
    const t = this.builder.extensionNameMap.get(n);
    return t ? t.getExtensionDependency() : void 0;
  }
  getInitDependency(n) {
    const t = this.builder.getExtensionRep(n);
    return t === void 0 && ae(315, this.extension.name, n.name), t.getExtensionInitDependency();
  }
  getDependency(n) {
    const t = this.builder.getExtensionRep(n);
    return t === void 0 && ae(315, this.extension.name, n.name), t.getExtensionDependency();
  }
  getState() {
    const n = this.state;
    return (function(t) {
      return t.id >= rr;
    })(n) || ae(316, String(n.id), String(rr)), n;
  }
  getDirectDependentNames() {
    return this.builder.incomingEdges.get(this.extension.name) || Gv;
  }
  getPeerNameSet() {
    let n = this._peerNameSet;
    return n || (n = new Set((this.extension.peerDependencies || []).map(([t]) => t)), this._peerNameSet = n), n;
  }
  getExtensionDependency() {
    if (!this._dependency) {
      const n = this.state;
      (function(t) {
        return t.id >= xn;
      })(n) || ae(317, this.extension.name), this._dependency = { config: n.config, init: n.initResult, output: n.output };
    }
    return this._dependency;
  }
};
const Bl = { tag: In };
function Kv() {
  const e = ge();
  e.isEmpty() && e.append(fe());
}
const Wv = { config: { setOptions: Bl, updateOptions: Bl }, init: ({ $initialEditorState: e = Kv }) => ({ $initialEditorState: e, initialized: !1 }), afterRegistration(e, { updateOptions: n, setOptions: t }, r) {
  const o = r.getInitResult();
  if (!o.initialized) {
    o.initialized = !0;
    const { $initialEditorState: i } = o;
    if (q0(i)) e.setEditorState(i, t);
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
}, name: "@lexical/extension/InitialState", nodes: [Zn, Nt, Hn, Kn, Jn] }, Vl = Symbol.for("@lexical/extension/LexicalBuilder");
function Ul() {
}
function qv(e) {
  throw e;
}
function Kr(e) {
  return Array.isArray(e) ? e : [e];
}
const ki = "0.39.0+prod.esm";
let Uf = class to {
  constructor(n) {
    T(this, "roots");
    T(this, "extensionNameMap");
    T(this, "outgoingConfigEdges");
    T(this, "incomingEdges");
    T(this, "conflicts");
    T(this, "_sortedExtensionReps");
    T(this, "PACKAGE_VERSION");
    this.outgoingConfigEdges = /* @__PURE__ */ new Map(), this.incomingEdges = /* @__PURE__ */ new Map(), this.extensionNameMap = /* @__PURE__ */ new Map(), this.conflicts = /* @__PURE__ */ new Map(), this.PACKAGE_VERSION = ki, this.roots = n;
    for (const t of n) this.addExtension(t);
  }
  static fromExtensions(n) {
    const t = [Kr(Wv)];
    for (const r of n) t.push(Kr(r));
    return new to(t);
  }
  static maybeFromEditor(n) {
    const t = n[Vl];
    return t && (t.PACKAGE_VERSION !== ki && ae(292, t.PACKAGE_VERSION, ki), t instanceof to || ae(293)), t;
  }
  static fromEditor(n) {
    const t = to.maybeFromEditor(n);
    return t === void 0 && ae(294), t;
  }
  constructEditor() {
    const { $initialEditorState: n, onError: t, ...r } = this.buildCreateEditorArgs(), o = Object.assign(rf({ ...r, ...t ? { onError: (i) => {
      t(i, o);
    } } : {} }), { [Vl]: this });
    for (const i of this.sortedExtensionReps()) i.build(o);
    return o;
  }
  buildEditor() {
    let n = Ul;
    function t() {
      try {
        n();
      } finally {
        n = Ul;
      }
    }
    const r = Object.assign(this.constructEditor(), { dispose: t, [Symbol.dispose]: t });
    return n = Et(this.registerEditor(r), () => r.setRootElement(null)), r;
  }
  hasExtensionByName(n) {
    return this.extensionNameMap.has(n);
  }
  getExtensionRep(n) {
    const t = this.extensionNameMap.get(n.name);
    if (t) return t.extension !== n && ae(295, n.name), t;
  }
  addEdge(n, t, r) {
    const o = this.outgoingConfigEdges.get(n);
    o ? o.set(t, r) : this.outgoingConfigEdges.set(n, /* @__PURE__ */ new Map([[t, r]]));
    const i = this.incomingEdges.get(t);
    i ? i.add(n) : this.incomingEdges.set(t, /* @__PURE__ */ new Set([n]));
  }
  addExtension(n) {
    this._sortedExtensionReps !== void 0 && ae(296);
    const t = Kr(n), [r] = t;
    typeof r.name != "string" && ae(297, typeof r.name);
    let o = this.extensionNameMap.get(r.name);
    if (o !== void 0 && o.extension !== r && ae(298, r.name), !o) {
      o = new Hv(this, r), this.extensionNameMap.set(r.name, o);
      const i = this.conflicts.get(r.name);
      typeof i == "string" && ae(299, r.name, i);
      for (const s of r.conflictsWith || []) this.extensionNameMap.has(s) && ae(299, r.name, s), this.conflicts.set(s, r.name);
      for (const s of r.dependencies || []) {
        const a = Kr(s);
        this.addEdge(r.name, a[0].name, a.slice(1)), this.addExtension(a);
      }
      for (const [s, a] of r.peerDependencies || []) this.addEdge(r.name, s, a ? [a] : []);
    }
  }
  sortedExtensionReps() {
    if (this._sortedExtensionReps) return this._sortedExtensionReps;
    const n = [], t = (r, o) => {
      let i = r.state;
      if (Vf(i)) return;
      const s = r.extension.name;
      var a;
      Ci(i) || ae(300, s, o || "[unknown]"), Ci(a = i) || ae(304, String(a.id), String(ca)), i = Object.assign(a, { id: hs }), r.state = i;
      const l = this.outgoingConfigEdges.get(s);
      if (l) for (const u of l.keys()) {
        const c = this.extensionNameMap.get(u);
        c && t(c, s);
      }
      i = jv(i), r.state = i, n.push(r);
    };
    for (const r of this.extensionNameMap.values()) Ci(r.state) && t(r);
    for (const r of n) for (const [o, i] of this.outgoingConfigEdges.get(r.extension.name) || []) if (i.length > 0) {
      const s = this.extensionNameMap.get(o);
      if (s) for (const a of i) s.configs.add(a);
    }
    for (const [r, ...o] of this.roots) if (o.length > 0) {
      const i = this.extensionNameMap.get(r.name);
      i === void 0 && ae(301, r.name);
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
    return Et(...o);
  }
  buildCreateEditorArgs() {
    const n = {}, t = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), i = {}, s = {}, a = this.sortedExtensionReps();
    for (const c of a) {
      const { extension: d } = c;
      if (d.onError !== void 0 && (n.onError = d.onError), d.disableEvents !== void 0 && (n.disableEvents = d.disableEvents), d.parentEditor !== void 0 && (n.parentEditor = d.parentEditor), d.editable !== void 0 && (n.editable = d.editable), d.namespace !== void 0 && (n.namespace = d.namespace), d.$initialEditorState !== void 0 && (n.$initialEditorState = d.$initialEditorState), d.nodes) for (const f of Uv(d)) {
        if (typeof f != "function") {
          const p = r.get(f.replace);
          p && ae(302, d.name, f.replace.name, p.extension.name), r.set(f.replace, c);
        }
        t.add(f);
      }
      if (d.html) {
        if (d.html.export) for (const [f, p] of d.html.export.entries()) o.set(f, p);
        d.html.import && Object.assign(i, d.html.import);
      }
      d.theme && zf(s, d.theme);
    }
    Object.keys(s).length > 0 && (n.theme = s), t.size && (n.nodes = [...t]);
    const l = Object.keys(i).length > 0, u = o.size > 0;
    (l || u) && (n.html = {}, l && (n.html.import = i), u && (n.html.export = o));
    for (const c of a) c.init(n);
    return n.onError || (n.onError = qv), n;
  }
};
function Zv(e, n) {
  const t = Uf.fromEditor(e).extensionNameMap.get(n);
  return t ? t.getExtensionDependency() : void 0;
}
class Ir extends js {
  static getType() {
    return "horizontalrule";
  }
  static clone(n) {
    return new Ir(n.__key);
  }
  static importJSON(n) {
    return jf().updateFromJSON(n);
  }
  static importDOM() {
    return { hr: () => ({ conversion: Jv, priority: 0 }) };
  }
  exportDOM() {
    return { element: document.createElement("hr") };
  }
  createDOM(n) {
    const t = document.createElement("hr");
    return ot(t, n.theme.hr), t;
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
function Jv() {
  return { node: jf() };
}
function jf() {
  return xf(Ir);
}
function Yv(e) {
  return e instanceof Ir;
}
const Xv = { name: "@lexical/react/ReactProvider" };
function Qv() {
  return ge().getTextContent();
}
function ex(e, n = !0) {
  if (e) return !1;
  let t = Qv();
  return n && (t = t.trim()), t === "";
}
function tx(e) {
  if (!ex(e, !1)) return !1;
  const n = ge().getChildren(), t = n.length;
  if (t > 1) return !1;
  for (let r = 0; r < t; r++) {
    const o = n[r];
    if (ee(o)) return !1;
    if (A(o)) {
      if (!Tr(o) || o.__indent !== 0) return !1;
      const i = o.getChildren(), s = i.length;
      for (let a = 0; a < s; a++) {
        const l = i[r];
        if (!z(l)) return !1;
      }
    }
  }
  return !0;
}
function Gf(e) {
  return () => tx(e);
}
function nx(e) {
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
              const g = V();
              if ($(g)) {
                const h = g.anchor;
                let m = h.getNode(), v = 0, y = 0;
                if (z(m) && u >= 0 && c >= 0 && (v = u, y = u + c, g.setTextNodeRange(m, v, m, y)), v === y && d === "" || (g.insertRawText(d), m = h.getNode()), z(m)) {
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
function rx(e, n) {
  const t = lf(n) ? n.body.childNodes : n.childNodes;
  let r = [];
  const o = [];
  for (const i of t) if (!Kf.has(i.nodeName)) {
    const s = Wf(i, e, o, !1);
    s !== null && (r = r.concat(s));
  }
  return (function(i) {
    for (const s of i) s.getNextSibling() instanceof Hs && s.insertAfter(nt());
    for (const s of i) {
      const a = s.getChildren();
      for (const l of a) s.insertBefore(l);
      s.remove();
    }
  })(o), r;
}
function ox(e, n) {
  if (typeof document > "u" || typeof window > "u" && global.window === void 0) throw new Error("To use $generateHtmlFromNodes in headless mode please initialize a headless browser implementation such as JSDom before calling this function.");
  const t = document.createElement("div"), r = ge().getChildren();
  for (let o = 0; o < r.length; o++)
    Hf(e, r[o], t, n);
  return t.innerHTML;
}
function Hf(e, n, t, r = null) {
  let o = r === null || n.isSelected(r);
  const i = A(n) && n.excludeFromCopy("html");
  let s = n;
  r !== null && z(n) && (s = Af(r, n, "clone"));
  const a = A(s) ? s.getChildren() : [], l = Ws(e, s.getType());
  let u;
  u = l && l.exportDOM !== void 0 ? l.exportDOM(e, s) : s.exportDOM(e);
  const { element: c, after: d } = u;
  if (!c) return !1;
  const f = document.createDocumentFragment();
  for (let p = 0; p < a.length; p++) {
    const g = a[p], h = Hf(e, g, f, r);
    !o && A(n) && h && n.extractWithChild(g, r, "html") && (o = !0);
  }
  if (o && !i) {
    if ((be(c) || ds(c)) && c.append(f), t.append(c), d) {
      const p = d.call(s, c);
      p && (ds(c) ? c.replaceChildren(p) : c.replaceWith(p));
    }
  } else t.append(f);
  return o;
}
const Kf = /* @__PURE__ */ new Set(["STYLE", "SCRIPT"]);
function Wf(e, n, t, r, o = /* @__PURE__ */ new Map(), i) {
  let s = [];
  if (Kf.has(e.nodeName)) return s;
  let a = null;
  const l = (function(g, h) {
    const { nodeName: m } = g, v = h._htmlConversions.get(m.toLowerCase());
    let y = null;
    if (v !== void 0) for (const b of v) {
      const _ = b(g);
      _ !== null && (y === null || (y.priority || 0) <= (_.priority || 0)) && (y = _);
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
  const p = (a == null || !Fe(a)) && (a != null && ss(a) || r);
  for (let g = 0; g < d.length; g++) f.push(...Wf(d[g], n, t, p, new Map(o), a));
  return c != null && (f = c(f)), _o(e) && (f = ix(e, f, p ? () => {
    const g = new Hs();
    return t.push(g), g;
  } : fe)), a == null ? f.length > 0 ? s = s.concat(f) : _o(e) && (function(g) {
    return g.nextSibling == null || g.previousSibling == null ? !1 : fs(g.nextSibling) && fs(g.previousSibling);
  })(e) && (s = s.concat(nt())) : A(a) && a.append(...f), s;
}
function ix(e, n, t) {
  const r = e.style.textAlign, o = [];
  let i = [];
  for (let s = 0; s < n.length; s++) {
    const a = n[s];
    if (ss(a)) r && !a.getFormat() && a.setFormat(r), o.push(a);
    else if (i.push(a), s === n.length - 1 || s < n.length - 1 && ss(n[s + 1])) {
      const l = t();
      l.setFormat(r), l.append(...i), o.push(l), i = [];
    }
  }
  return o;
}
function wo(e, ...n) {
  const t = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", e);
  for (const o of n) r.append("v", o);
  throw t.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
function sx(e, n = V()) {
  return n == null && wo(166), $(n) && n.isCollapsed() || n.getNodes().length === 0 ? "" : ox(e, n);
}
function ax(e, n = V()) {
  return n == null && wo(166), $(n) && n.isCollapsed() || n.getNodes().length === 0 ? null : JSON.stringify(lx(e, n));
}
function jl(e, n, t) {
  const r = e.getData("application/x-lexical-editor");
  if (r) try {
    const a = JSON.parse(r);
    if (a.namespace === t._config.namespace && Array.isArray(a.nodes))
      return Gl(t, ux(a.nodes), n);
  } catch (a) {
    console.error(a);
  }
  const o = e.getData("text/html"), i = e.getData("text/plain");
  if (o && i !== o) try {
    const a = new DOMParser().parseFromString((function(l) {
      return window.trustedTypes && window.trustedTypes.createPolicy ? window.trustedTypes.createPolicy("lexical", { createHTML: (u) => u }).createHTML(l) : l;
    })(o), "text/html");
    return Gl(t, rx(t, a), n);
  } catch (a) {
    console.error(a);
  }
  const s = i || e.getData("text/uri-list");
  if (s != null) if ($(n)) {
    const a = s.split(/(\r?\n|\t)/);
    a[a.length - 1] === "" && a.pop();
    for (let l = 0; l < a.length; l++) {
      const u = V();
      if ($(u)) {
        const c = a[l];
        c === `
` || c === `\r
` ? u.insertParagraph() : c === "	" ? u.insertNodes([Wn()]) : u.insertText(c);
      }
    }
  } else n.insertRawText(s);
}
function Gl(e, n, t) {
  e.dispatchCommand(f0, { nodes: n, selection: t }) || (t.insertNodes(n), (function(r) {
    if ($(r) && r.isCollapsed()) {
      const o = r.anchor;
      let i = null;
      const s = kt(o, "previous");
      if (s) if (Mt(s)) i = s.origin;
      else {
        const a = Bt(s, rt(ge(), "next").getFlipped());
        for (const l of a) {
          if (z(l.origin)) {
            i = l.origin;
            break;
          }
          if (A(l.origin) && !l.origin.isInline()) break;
        }
      }
      if (i && z(i)) {
        const a = i.getFormat(), l = i.getStyle();
        r.format === a && r.style === l || (r.format = a, r.style = l, r.dirty = !0);
      }
    }
  })(t));
}
function qf(e, n, t, r = []) {
  let o = n === null || t.isSelected(n);
  const i = A(t) && t.excludeFromCopy("html");
  let s = t;
  n !== null && z(s) && (s = Af(n, s, "clone"));
  const a = A(s) ? s.getChildren() : [], l = (function(u) {
    const c = u.exportJSON(), d = u.constructor;
    if (c.type !== d.getType() && wo(58, d.name), A(u)) {
      const f = c.children;
      Array.isArray(f) || wo(59, d.name);
    }
    return c;
  })(s);
  z(s) && s.getTextContentSize() === 0 && (o = !1);
  for (let u = 0; u < a.length; u++) {
    const c = a[u], d = qf(e, n, c, l.children);
    !o && A(t) && d && t.extractWithChild(c, n, "clone") && (o = !0);
  }
  if (o && !i) r.push(l);
  else if (Array.isArray(l.children)) for (let u = 0; u < l.children.length; u++) {
    const c = l.children[u];
    r.push(c);
  }
  return o;
}
function lx(e, n) {
  const t = [], r = ge().getChildren();
  for (let o = 0; o < r.length; o++)
    qf(e, n, r[o], t);
  return { namespace: e._config.namespace, nodes: t };
}
function ux(e) {
  const n = [];
  for (let t = 0; t < e.length; t++) {
    const r = e[t], o = W0(r);
    z(o) && Tv(o), n.push(o);
  }
  return n;
}
let _n = null;
async function Hl(e, n, t) {
  if (_n !== null) return !1;
  if (n !== null) return new Promise((u, c) => {
    e.update(() => {
      u(Kl(e, n, t));
    });
  });
  const r = e.getRootElement(), o = e._window || window, i = o.document, s = at(o);
  if (r === null || s === null) return !1;
  const a = i.createElement("span");
  a.style.cssText = "position: fixed; top: -1000px;", a.append(i.createTextNode("#")), r.append(a);
  const l = new Range();
  return l.setStart(a, 0), l.setEnd(a, 1), s.removeAllRanges(), s.addRange(l), new Promise((u, c) => {
    const d = e.registerCommand(Lo, (f) => (qt(f, ClipboardEvent) && (d(), _n !== null && (o.clearTimeout(_n), _n = null), u(Kl(e, f, t))), !0), J0);
    _n = o.setTimeout(() => {
      d(), _n = null, u(!1);
    }, 50), i.execCommand("copy"), a.remove();
  });
}
function Kl(e, n, t) {
  if (t === void 0) {
    const o = at(e._window), i = V();
    if (!i || i.isCollapsed() || !o) return !1;
    const s = o.anchorNode, a = o.focusNode;
    if (s !== null && a !== null && !Ar(e, s, a)) return !1;
    t = cx(i);
  }
  n.preventDefault();
  const r = n.clipboardData;
  return r !== null && (dx(r, t), !0);
}
const Zf = [["text/html", sx], ["application/x-lexical-editor", ax]];
function cx(e = V()) {
  const n = { "text/plain": e ? e.getTextContent() : "" };
  if (e) {
    const t = Ho();
    for (const [r, o] of Zf) {
      const i = o(t, e);
      i !== null && (n[r] = i);
    }
  }
  return n;
}
function dx(e, n) {
  for (const [t] of Zf) n[t] === void 0 && e.setData(t, "");
  for (const t in n) {
    const r = n[t];
    r !== void 0 && e.setData(t, r);
  }
}
function Wl(e, n) {
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
const hn = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, fx = hn && "documentMode" in document ? document.documentMode : null, gx = hn && /Mac|iPod|iPhone|iPad/.test(navigator.platform), px = !(!hn || !("InputEvent" in window) || fx) && "getTargetRanges" in new window.InputEvent("input"), hx = hn && /Version\/[\d.]+.*Safari/.test(navigator.userAgent), ql = hn && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, mx = hn && /^(?=.*Chrome).*/i.test(navigator.userAgent), yx = hn && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && gx && !mx, Zl = G("DRAG_DROP_PASTE_FILE");
let Zo = class Jf extends Ve {
  static getType() {
    return "quote";
  }
  static clone(n) {
    return new Jf(n.__key);
  }
  createDOM(n) {
    const t = document.createElement("blockquote");
    return ot(t, n.theme.quote), t;
  }
  updateDOM(n, t) {
    return !1;
  }
  static importDOM() {
    return { blockquote: (n) => ({ conversion: bx, priority: 0 }) };
  }
  exportDOM(n) {
    const { element: t } = super.exportDOM(n);
    if (be(t)) {
      this.isEmpty() && t.append(document.createElement("br"));
      const r = this.getFormatType();
      r && (t.style.textAlign = r);
      const o = this.getDirection();
      o && (t.dir = o);
    }
    return { element: t };
  }
  static importJSON(n) {
    return Jo().updateFromJSON(n);
  }
  insertNewAfter(n, t) {
    const r = fe(), o = this.getDirection();
    return r.setDirection(o), this.insertAfter(r, t), r;
  }
  collapseAtStart() {
    const n = fe();
    return this.getChildren().forEach((t) => n.append(t)), this.replace(n), !0;
  }
  canMergeWhenEmpty() {
    return !0;
  }
};
function Jo() {
  return qe(new Zo());
}
function ms(e) {
  return e instanceof Zo;
}
let Yo = class Yf extends Ve {
  constructor(t, r) {
    super(r);
    T(this, "__tag");
    this.__tag = t;
  }
  static getType() {
    return "heading";
  }
  static clone(t) {
    return new Yf(t.__tag, t.__key);
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
      ot(o, s);
    }
    return o;
  }
  updateDOM(t, r, o) {
    return t.__tag !== this.__tag;
  }
  static importDOM() {
    return { h1: (t) => ({ conversion: wn, priority: 0 }), h2: (t) => ({ conversion: wn, priority: 0 }), h3: (t) => ({ conversion: wn, priority: 0 }), h4: (t) => ({ conversion: wn, priority: 0 }), h5: (t) => ({ conversion: wn, priority: 0 }), h6: (t) => ({ conversion: wn, priority: 0 }), p: (t) => {
      const r = t.firstChild;
      return r !== null && Jl(r) ? { conversion: () => ({ node: null }), priority: 3 } : null;
    }, span: (t) => Jl(t) ? { conversion: (r) => ({ node: Zt("h1") }), priority: 3 } : null };
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    if (be(r)) {
      this.isEmpty() && r.append(document.createElement("br"));
      const o = this.getFormatType();
      o && (r.style.textAlign = o);
      const i = this.getDirection();
      i && (r.dir = i);
    }
    return { element: r };
  }
  static importJSON(t) {
    return Zt(t.tag).updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setTag(t.tag);
  }
  exportJSON() {
    return { ...super.exportJSON(), tag: this.getTag() };
  }
  insertNewAfter(t, r = !0) {
    const o = t ? t.anchor.offset : 0, i = this.getLastDescendant(), s = !i || t && t.anchor.key === i.getKey() && o === i.getTextContentSize() || !t ? fe() : Zt(this.getTag()), a = this.getDirection();
    if (s.setDirection(a), this.insertAfter(s, r), o === 0 && !this.isEmpty() && t) {
      const l = fe();
      l.select(), this.replace(l, !0);
    }
    return s;
  }
  collapseAtStart() {
    const t = this.isEmpty() ? fe() : Zt(this.getTag());
    return this.getChildren().forEach((r) => t.append(r)), this.replace(t), !0;
  }
  extractWithChild() {
    return !0;
  }
};
function Jl(e) {
  return e.nodeName.toLowerCase() === "span" && e.style.fontSize === "26pt";
}
function wn(e) {
  const n = e.nodeName.toLowerCase();
  let t = null;
  return n !== "h1" && n !== "h2" && n !== "h3" && n !== "h4" && n !== "h5" && n !== "h6" || (t = Zt(n), e.style !== null && (ta(e, t), t.setFormat(e.style.textAlign))), { node: t };
}
function bx(e) {
  const n = Jo();
  return e.style !== null && (n.setFormat(e.style.textAlign), ta(e, n)), { node: n };
}
function Zt(e = "h1") {
  return qe(new Yo(e));
}
function vx(e) {
  return e instanceof Yo;
}
function Wr(e) {
  let n = null;
  if (qt(e, DragEvent) ? n = e.dataTransfer : qt(e, ClipboardEvent) && (n = e.clipboardData), n === null) return [!1, [], !1];
  const t = n.types, r = t.includes("Files"), o = t.includes("text/html") || t.includes("text/plain");
  return [r, Array.from(n.files), o];
}
function Yl(e) {
  const n = V();
  if (!$(n)) return !1;
  const t = /* @__PURE__ */ new Set(), r = n.getNodes();
  for (let o = 0; o < r.length; o++) {
    const i = r[o], s = i.getKey();
    if (t.has(s)) continue;
    const a = Ke(i, (u) => A(u) && !u.isInline());
    if (a === null) continue;
    const l = a.getKey();
    a.canIndent() && !t.has(l) && (t.add(l), e(a));
  }
  return t.size > 0;
}
function Xl(e) {
  const n = Ln(e);
  return ee(n);
}
function Ei(e) {
  for (const n of ["lowercase", "uppercase", "capitalize"]) e.hasFormat(n) && e.toggleFormat(n);
}
function xx(e) {
  return Et(e.registerCommand($s, (n) => {
    const t = V();
    return !!Te(t) && (t.clear(), !0);
  }, X), e.registerCommand(Jt, (n) => {
    const t = V();
    return $(t) ? (t.deleteCharacter(n), !0) : !!Te(t) && (t.deleteNodes(), !0);
  }, X), e.registerCommand(vr, (n) => {
    const t = V();
    return !!$(t) && (t.deleteWord(n), !0);
  }, X), e.registerCommand(xr, (n) => {
    const t = V();
    return !!$(t) && (t.deleteLine(n), !0);
  }, X), e.registerCommand(An, (n) => {
    const t = V();
    if (typeof n == "string") t !== null && t.insertText(n);
    else {
      if (t === null) return !1;
      const r = n.dataTransfer;
      if (r != null) jl(r, t, e);
      else if ($(t)) {
        const o = n.data;
        return o && t.insertText(o), !0;
      }
    }
    return !0;
  }, X), e.registerCommand(Ji, () => {
    const n = V();
    return !!$(n) && (n.removeText(), !0);
  }, X), e.registerCommand(ct, (n) => {
    const t = V();
    return !!$(t) && (t.formatText(n), !0);
  }, X), e.registerCommand(y0, (n) => {
    const t = V();
    if (!$(t) && !Te(t)) return !1;
    const r = t.getNodes();
    for (const o of r) {
      const i = Ke(o, (s) => A(s) && !s.isInline());
      i !== null && i.setFormat(n);
    }
    return !0;
  }, X), e.registerCommand(Tn, (n) => {
    const t = V();
    return !!$(t) && (t.insertLineBreak(n), !0);
  }, X), e.registerCommand(br, () => {
    const n = V();
    return !!$(n) && (n.insertParagraph(), !0);
  }, X), e.registerCommand(h0, () => (G0([Wn()]), !0), X), e.registerCommand(m0, () => Yl((n) => {
    const t = n.getIndent();
    n.setIndent(t + 1);
  }), X), e.registerCommand(Ja, () => Yl((n) => {
    const t = n.getIndent();
    t > 0 && n.setIndent(Math.max(0, t - 1));
  }), X), e.registerCommand(kd, (n) => {
    const t = V();
    if (Te(t)) {
      const r = t.getNodes();
      if (r.length > 0) return n.preventDefault(), r[0].selectPrevious(), !0;
    } else if ($(t)) {
      const r = ls(t.focus, !0);
      if (!n.shiftKey && ee(r) && !r.isIsolated() && !r.isInline()) return r.selectPrevious(), n.preventDefault(), !0;
    }
    return !1;
  }, X), e.registerCommand(Ed, (n) => {
    const t = V();
    if (Te(t)) {
      const r = t.getNodes();
      if (r.length > 0) return n.preventDefault(), r[0].selectNext(0, 0), !0;
    } else if ($(t)) {
      if ((function(o) {
        const i = o.focus;
        return i.key === "root" && i.offset === ge().getChildrenSize();
      })(t)) return n.preventDefault(), !0;
      const r = ls(t.focus, !1);
      if (!n.shiftKey && ee(r) && !r.isIsolated() && !r.isInline()) return r.selectNext(), n.preventDefault(), !0;
    }
    return !1;
  }, X), e.registerCommand(Cd, (n) => {
    const t = V();
    if (Te(t)) {
      const r = t.getNodes();
      if (r.length > 0) return n.preventDefault(), Ol(r[0]) ? r[0].selectNext(0, 0) : r[0].selectPrevious(), !0;
    }
    if (!$(t)) return !1;
    if (Ml(t, !0)) {
      const r = n.shiftKey;
      return n.preventDefault(), Pl(t, r, !0), !0;
    }
    return !1;
  }, X), e.registerCommand(Sd, (n) => {
    const t = V();
    if (Te(t)) {
      const o = t.getNodes();
      if (o.length > 0) return n.preventDefault(), Ol(o[0]) ? o[0].selectPrevious() : o[0].selectNext(0, 0), !0;
    }
    if (!$(t)) return !1;
    const r = n.shiftKey;
    return !!Ml(t, !1) && (n.preventDefault(), Pl(t, r, !1), !0);
  }, X), e.registerCommand(Rd, (n) => {
    if (Xl(n.target)) return !1;
    const t = V();
    if ($(t)) {
      if ((function(r) {
        if (!r.isCollapsed()) return !1;
        const { anchor: o } = r;
        if (o.offset !== 0) return !1;
        const i = o.getNode();
        if (ye(i)) return !1;
        const s = Pv(i);
        return s.getIndent() > 0 && (s.is(i) || i.is(s.getFirstDescendant()));
      })(t)) return n.preventDefault(), e.dispatchCommand(Ja, void 0);
      if (ql && navigator.language === "ko-KR") return !1;
    } else if (!Te(t)) return !1;
    return n.preventDefault(), e.dispatchCommand(Jt, !0);
  }, X), e.registerCommand(Ad, (n) => {
    if (Xl(n.target)) return !1;
    const t = V();
    return !(!$(t) && !Te(t)) && (n.preventDefault(), e.dispatchCommand(Jt, !1));
  }, X), e.registerCommand(fo, (n) => {
    const t = V();
    if (!$(t)) return !1;
    if (Ei(t), n !== null) {
      if ((ql || hx || yx) && px) return !1;
      if (n.preventDefault(), n.shiftKey) return e.dispatchCommand(Tn, !1);
    }
    return e.dispatchCommand(br, void 0);
  }, X), e.registerCommand(Td, () => {
    const n = V();
    return !!$(n) && (e.blur(), !0);
  }, X), e.registerCommand(Id, (n) => {
    const [, t] = Wr(n);
    if (t.length > 0) {
      const o = Wl(n.clientX, n.clientY);
      if (o !== null) {
        const { offset: i, node: s } = o, a = Ln(s);
        if (a !== null) {
          const l = Bo();
          if (z(a)) l.anchor.set(a.getKey(), i, "text"), l.focus.set(a.getKey(), i, "text");
          else {
            const c = a.getParentOrThrow().getKey(), d = a.getIndexWithinParent() + 1;
            l.anchor.set(c, d, "element"), l.focus.set(c, d, "element");
          }
          const u = so(l);
          Ne(u);
        }
        e.dispatchCommand(Zl, t);
      }
      return n.preventDefault(), !0;
    }
    const r = V();
    return !!$(r);
  }, X), e.registerCommand(Od, (n) => {
    const [t] = Wr(n), r = V();
    return !(t && !$(r));
  }, X), e.registerCommand($d, (n) => {
    const [t] = Wr(n), r = V();
    if (t && !$(r)) return !1;
    const o = Wl(n.clientX, n.clientY);
    if (o !== null) {
      const i = Ln(o.node);
      ee(i) && n.preventDefault();
    }
    return !0;
  }, X), e.registerCommand(Yi, () => (nv(), !0), X), e.registerCommand(Lo, (n) => (Hl(e, qt(n, ClipboardEvent) ? n : null), !0), X), e.registerCommand(Ds, (n) => ((async function(t, r) {
    await Hl(r, qt(t, ClipboardEvent) ? t : null), r.update(() => {
      const o = V();
      $(o) ? o.removeText() : Te(o) && o.getNodes().forEach((i) => i.remove());
    });
  })(n, e), !0), X), e.registerCommand(Ms, (n) => {
    const [, t, r] = Wr(n);
    return t.length > 0 && !r ? (e.dispatchCommand(Zl, t), !0) : Yn(n.target) && qs(n.target) ? !1 : V() !== null && ((function(o, i) {
      o.preventDefault(), i.update(() => {
        const s = V(), a = qt(o, InputEvent) || qt(o, KeyboardEvent) ? null : o.clipboardData;
        a != null && s !== null && jl(a, s, i);
      }, { tag: F0 });
    })(n, e), !0);
  }, X), e.registerCommand(Nd, (n) => {
    const t = V();
    return $(t) && Ei(t), !1;
  }, X), e.registerCommand(Fd, (n) => {
    const t = V();
    return $(t) && Ei(t), !1;
  }, X));
}
function _x(e, ...n) {
  const t = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", e);
  for (const o of n) r.append("v", o);
  throw t.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
const da = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? Sr : ze;
function wx({ editor: e, ErrorBoundary: n }) {
  return (function(t, r) {
    const [o, i] = Qt(() => t.getDecorators());
    return da(() => t.registerDecoratorListener((s) => {
      Cg(() => {
        i(s);
      });
    }), [t]), ze(() => {
      i(t.getDecorators());
    }, [t]), Bn(() => {
      const s = [], a = Object.keys(o);
      for (let l = 0; l < a.length; l++) {
        const u = a[l], c = x(r, { onError: (f) => t._onError(f), children: x(wg, { fallback: null, children: o[u] }) }), d = t.getElementByKey(u);
        d !== null && s.push(Ou(c, d, u));
      }
      return s;
    }, [r, o, t]);
  })(e, n);
}
function Sx({ editor: e, ErrorBoundary: n }) {
  return (function(t) {
    const r = Uf.maybeFromEditor(t);
    if (r && r.hasExtensionByName(Xv.name)) {
      for (const o of ["@lexical/plain-text", "@lexical/rich-text"]) r.hasExtensionByName(o) && _x(320, o);
      return !0;
    }
    return !1;
  })(e) ? null : x(wx, { editor: e, ErrorBoundary: n });
}
function Ql(e) {
  return e.getEditorState().read(Gf(e.isComposing()));
}
function Cx({ contentEditable: e, placeholder: n = null, ErrorBoundary: t }) {
  const [r] = it();
  return (function(o) {
    da(() => Et(xx(o), nx(o)), [o]);
  })(r), L(tt, { children: [e, x(kx, { content: n }), x(Sx, { editor: r, ErrorBoundary: t })] });
}
function kx({ content: e }) {
  const [n] = it(), t = (function(o) {
    const [i, s] = Qt(() => Ql(o));
    return da(() => {
      function a() {
        const l = Ql(o);
        s(l);
      }
      return a(), Et(o.registerUpdateListener(() => {
        a();
      }), o.registerEditableListener(() => {
        a();
      }));
    }, [o]), i;
  })(n), r = Rv();
  return t ? typeof e == "function" ? e(r) : e : null;
}
const Xf = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? Sr : ze;
function Ex({ editor: e, ariaActiveDescendant: n, ariaAutoComplete: t, ariaControls: r, ariaDescribedBy: o, ariaErrorMessage: i, ariaExpanded: s, ariaInvalid: a, ariaLabel: l, ariaLabelledBy: u, ariaMultiline: c, ariaOwns: d, ariaRequired: f, autoCapitalize: p, className: g, id: h, role: m = "textbox", spellCheck: v = !0, style: y, tabIndex: b, "data-testid": _, ...w }, S) {
  const [k, N] = Qt(e.isEditable()), E = Mn((O) => {
    O && O.ownerDocument && O.ownerDocument.defaultView ? e.setRootElement(O) : e.setRootElement(null);
  }, [e]), R = Bn(() => /* @__PURE__ */ (function(...O) {
    return (I) => {
      for (const B of O) typeof B == "function" ? B(I) : B != null && (B.current = I);
    };
  })(S, E), [E, S]);
  return Xf(() => (N(e.isEditable()), e.registerEditableListener((O) => {
    N(O);
  })), [e]), x("div", { "aria-activedescendant": k ? n : void 0, "aria-autocomplete": k ? t : "none", "aria-controls": k ? r : void 0, "aria-describedby": o, ...i != null ? { "aria-errormessage": i } : {}, "aria-expanded": k && m === "combobox" ? !!s : void 0, ...a != null ? { "aria-invalid": a } : {}, "aria-label": l, "aria-labelledby": u, "aria-multiline": c, "aria-owns": k ? d : void 0, "aria-readonly": !k || void 0, "aria-required": f, autoCapitalize: p, className: g, contentEditable: k, "data-testid": _, id: h, ref: R, role: m, spellCheck: v, style: y, tabIndex: b, ...w });
}
const Nx = No(Ex);
function eu(e) {
  return e.getEditorState().read(Gf(e.isComposing()));
}
const Rx = No(Tx);
function Tx(e, n) {
  const { placeholder: t, ...r } = e, [o] = it();
  return L(tt, { children: [x(Nx, { editor: o, ...r, ref: n }), t != null && x(Ax, { editor: o, content: t })] });
}
function Ax({ content: e, editor: n }) {
  const t = (function(s) {
    const [a, l] = Qt(() => eu(s));
    return Xf(() => {
      function u() {
        const c = eu(s);
        l(c);
      }
      return u(), Et(s.registerUpdateListener(() => {
        u();
      }), s.registerEditableListener(() => {
        u();
      }));
    }, [s]), a;
  })(n), [r, o] = Qt(n.isEditable());
  if (Sr(() => (o(n.isEditable()), n.registerEditableListener((s) => {
    o(s);
  })), [n]), !t) return null;
  let i = null;
  return typeof e == "function" ? i = e(r) : e !== null && (i = e), i === null ? null : x("div", { "aria-hidden": !0, children: i });
}
function Fx(e, n, t, r, o) {
  if (e === null || t.size === 0 && r.size === 0 && !o) return 0;
  const i = n._selection, s = e._selection;
  if (o) return 1;
  if (!($(i) && $(s) && s.isCollapsed() && i.isCollapsed())) return 0;
  const a = (function(v, y, b) {
    const _ = v._nodeMap, w = [];
    for (const S of y) {
      const k = _.get(S);
      k !== void 0 && w.push(k);
    }
    for (const [S, k] of b) {
      if (!k) continue;
      const N = _.get(S);
      N === void 0 || ye(N) || w.push(N);
    }
    return w;
  })(n, t, r);
  if (a.length === 0) return 0;
  if (a.length > 1) {
    const v = n._nodeMap, y = v.get(i.anchor.key), b = v.get(s.anchor.key);
    return y && b && !e._nodeMap.has(y.__key) && z(y) && y.__text.length === 1 && i.anchor.offset === 1 ? 2 : 0;
  }
  const l = a[0], u = e._nodeMap.get(l.__key);
  if (!z(u) || !z(l) || u.__mode !== l.__mode) return 0;
  const c = u.__text, d = l.__text;
  if (c === d) return 0;
  const f = i.anchor, p = s.anchor;
  if (f.key !== p.key || f.type !== "text") return 0;
  const g = f.offset, h = p.offset, m = d.length - c.length;
  return m === 1 && h === g - 1 ? 2 : m === -1 && h === g + 1 ? 3 : m === -1 && h === g ? 4 : 0;
}
function Ix(e, n) {
  let t = Date.now(), r = 0;
  return (o, i, s, a, l, u) => {
    const c = Date.now();
    if (u.has(mo)) return r = 0, t = c, 2;
    const d = Fx(o, i, a, l, e.isComposing()), f = (() => {
      const p = s === null || s.editor === e, g = u.has(A0);
      if (!g && p && u.has(In)) return 0;
      if (o === null) return 1;
      const h = i._selection;
      if (!(a.size > 0 || l.size > 0)) return h !== null ? 0 : 2;
      const m = typeof n == "number" ? n : n.peek();
      return g === !1 && d !== 0 && d === r && c < t + m && p || a.size === 1 && (function(v, y, b) {
        const _ = y._nodeMap.get(v), w = b._nodeMap.get(v), S = y._selection, k = b._selection;
        return !($(S) && $(k) && S.anchor.type === "element" && S.focus.type === "element" && k.anchor.type === "text" && k.focus.type === "text" || !z(_) || !z(w) || _.__parent !== w.__parent) && JSON.stringify(y.read(() => _.exportJSON())) === JSON.stringify(b.read(() => w.exportJSON()));
      })(Array.from(a)[0], o, i) ? 0 : 1;
    })();
    return t = c, r = d, f;
  };
}
function tu(e) {
  e.undoStack = [], e.redoStack = [], e.current = null;
}
function Qf(e, n, t) {
  const r = Ix(e, t);
  return Et(e.registerCommand(Ps, () => ((function(i, s) {
    const a = s.redoStack, l = s.undoStack;
    if (l.length !== 0) {
      const u = s.current, c = l.pop();
      u !== null && (a.push(u), i.dispatchCommand(Dr, !0)), l.length === 0 && i.dispatchCommand(zr, !1), s.current = c || null, c && c.editor.setEditorState(c.editorState, { tag: mo });
    }
  })(e, n), !0), X), e.registerCommand(Ls, () => ((function(i, s) {
    const a = s.redoStack, l = s.undoStack;
    if (a.length !== 0) {
      const u = s.current;
      u !== null && (l.push(u), i.dispatchCommand(zr, !0));
      const c = a.pop();
      a.length === 0 && i.dispatchCommand(Dr, !1), s.current = c || null, c && c.editor.setEditorState(c.editorState, { tag: mo });
    }
  })(e, n), !0), X), e.registerCommand(v0, () => (tu(n), !1), X), e.registerCommand(x0, () => (tu(n), e.dispatchCommand(Dr, !1), e.dispatchCommand(zr, !1), !0), X), e.registerUpdateListener(({ editorState: i, prevEditorState: s, dirtyLeaves: a, dirtyElements: l, tags: u }) => {
    const c = n.current, d = n.redoStack, f = n.undoStack, p = c === null ? null : c.editorState;
    if (c !== null && i === p) return;
    const g = r(s, i, c, a, l, u);
    if (g === 1) d.length !== 0 && (n.redoStack = [], e.dispatchCommand(Dr, !1)), c !== null && (f.push({ ...c }), e.dispatchCommand(zr, !0));
    else if (g === 2) return;
    n.current = { editor: e, editorState: i };
  }));
}
function eg() {
  return { current: null, redoStack: [], undoStack: [] };
}
const Ni = { build: (e, { delay: n, createInitialHistoryState: t, disabled: r }) => Vv({ delay: n, disabled: r, historyState: t(e) }), config: { createInitialHistoryState: eg, delay: 300, disabled: typeof window > "u" }, name: "@lexical/history/History", register: (e, n, t) => {
  const r = t.getOutput();
  return ua(() => r.disabled.value ? void 0 : Qf(e, r.historyState.value, r.delay));
} };
wv(Ni, { createInitialHistoryState: () => {
  throw new Error("SharedHistory did not inherit parent history");
}, disabled: !0 });
function Ox({ delay: e, externalHistoryState: n }) {
  const [t] = it();
  return (function(r, o, i = 1e3) {
    const s = Bn(() => o || eg(), [o]);
    ze(() => Qf(r, s, i), [i, r, s]);
  })(t, n, e), null;
}
const $x = Iu(null), Ri = {
  didCatch: !1,
  error: null
};
class Mx extends Sg {
  constructor(n) {
    super(n), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = Ri;
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
    }), this.setState(Ri));
  }
  componentDidCatch(n, t) {
    var r, o;
    (o = (r = this.props).onError) == null || o.call(r, n, t);
  }
  componentDidUpdate(n, t) {
    var i, s;
    const { didCatch: r } = this.state, { resetKeys: o } = this.props;
    r && t.error !== null && Px(n.resetKeys, o) && ((s = (i = this.props).onReset) == null || s.call(i, {
      next: o,
      prev: n.resetKeys,
      reason: "keys"
    }), this.setState(Ri));
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
        a = $n(r, l);
      else if (o !== void 0)
        a = o;
      else
        throw s;
    }
    return $n(
      $x.Provider,
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
function Px(e = [], n = []) {
  return e.length !== n.length || e.some((t, r) => !Object.is(t, n[r]));
}
function Lx({ children: e, onError: n }) {
  return x(Mx, { fallback: x("div", { style: { border: "1px solid #f00", color: "#f00", padding: "8px" }, children: "An error was thrown." }), onError: n, children: e });
}
function Ot(e, ...n) {
  const t = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", e);
  for (const o of n) r.append("v", o);
  throw t.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
function ys(e) {
  let n = 1, t = e.getParent();
  for (; t != null; ) {
    if (te(t)) {
      const r = t.getParent();
      if (Z(r)) {
        n++, t = r.getParent();
        continue;
      }
      Ot(40);
    }
    return n;
  }
  return n;
}
function bs(e) {
  let n = e.getParent();
  Z(n) || Ot(40);
  let t = n;
  for (; t !== null; ) t = t.getParent(), Z(t) && (n = t);
  return n;
}
function tg(e) {
  let n = [];
  const t = e.getChildren().filter(te);
  for (let r = 0; r < t.length; r++) {
    const o = t[r], i = o.getFirstChild();
    Z(i) ? n = n.concat(tg(i)) : n.push(o);
  }
  return n;
}
function ut(e) {
  return te(e) && Z(e.getFirstChild());
}
function nu(e) {
  return Ue().append(e);
}
function ng(e, n) {
  return te(e) && (n.length === 0 || n.length === 1 && e.is(n[0]) && e.getChildrenSize() === 0);
}
function ru(e) {
  const n = V();
  if (n !== null) {
    let t = n.getNodes();
    if ($(n)) {
      const o = n.getStartEndPoints();
      o === null && Ot(143);
      const [i] = o, s = i.getNode(), a = s.getParent();
      if (Fe(s)) {
        const l = s.getFirstChild();
        if (l) t = l.selectStart().getNodes();
        else {
          const u = fe();
          s.append(u), t = u.select().getNodes();
        }
      } else if (ng(s, t)) {
        const l = Me(e);
        if (Fe(a)) {
          s.replace(l);
          const u = Ue();
          A(s) && (u.setFormat(s.getFormatType()), u.setIndent(s.getIndent())), l.append(u);
        } else if (te(s)) {
          const u = s.getParentOrThrow();
          fn(l, u.getChildren()), u.replace(l);
        }
        return;
      }
    }
    const r = /* @__PURE__ */ new Set();
    for (let o = 0; o < t.length; o++) {
      const i = t[o];
      if (A(i) && i.isEmpty() && !te(i) && !r.has(i.getKey())) {
        ou(i, e);
        continue;
      }
      let s = uf(i) ? i.getParent() : te(i) && i.isEmpty() ? i : null;
      for (; s != null; ) {
        const a = s.getKey();
        if (Z(s)) {
          if (!r.has(a)) {
            const l = Me(e);
            fn(l, s.getChildren()), s.replace(l), r.add(a);
          }
          break;
        }
        {
          const l = s.getParent();
          if (Fe(l) && !r.has(a)) {
            r.add(a), ou(s, e);
            break;
          }
          s = l;
        }
      }
    }
  }
}
function fn(e, n) {
  e.splice(e.getChildrenSize(), 0, n);
}
function ou(e, n) {
  if (Z(e)) return e;
  const t = e.getPreviousSibling(), r = e.getNextSibling(), o = Ue();
  let i;
  if (fn(o, e.getChildren()), Z(t) && n === t.getListType()) t.append(o), Z(r) && n === r.getListType() && (fn(t, r.getChildren()), r.remove()), i = t;
  else if (Z(r) && n === r.getListType()) r.getFirstChildOrThrow().insertBefore(o), i = r;
  else {
    const s = Me(n);
    s.append(o), e.replace(s), i = s;
  }
  return o.setFormat(e.getFormatType()), o.setIndent(e.getIndent()), e.remove(), i;
}
function fa(e, n) {
  const t = e.getLastChild(), r = n.getFirstChild();
  t && r && ut(t) && ut(r) && (fa(t.getFirstChild(), r.getFirstChild()), r.remove());
  const o = n.getChildren();
  o.length > 0 && e.append(...o), n.remove();
}
function Dx() {
  const e = V();
  if ($(e)) {
    const n = /* @__PURE__ */ new Set(), t = e.getNodes(), r = e.anchor.getNode();
    if (ng(r, t)) n.add(bs(r));
    else for (let o = 0; o < t.length; o++) {
      const i = t[o];
      if (uf(i)) {
        const s = Mv(i, Ut);
        s != null && n.add(bs(s));
      }
    }
    for (const o of n) {
      let i = o;
      const s = tg(o);
      for (const a of s) {
        const l = fe().setTextStyle(e.style).setTextFormat(e.format);
        fn(l, a.getChildren()), i.insertAfter(l), i = l, a.__key === e.anchor.key && dn(e.anchor, He(rt(l, "next"))), a.__key === e.focus.key && dn(e.focus, He(rt(l, "next"))), a.remove();
      }
      o.remove();
    }
  }
}
function rg(e) {
  const n = e.getListType() !== "check";
  let t = e.getStart();
  for (const r of e.getChildren()) te(r) && (r.getValue() !== t && r.setValue(t), n && r.getLatest().__checked != null && r.setChecked(void 0), Z(r.getFirstChild()) || t++);
}
function zx(e) {
  const n = /* @__PURE__ */ new Set();
  if (ut(e) || n.has(e.getKey())) return;
  const t = e.getParent(), r = e.getNextSibling(), o = e.getPreviousSibling();
  if (ut(r) && ut(o)) {
    const i = o.getFirstChild();
    if (Z(i)) {
      i.append(e);
      const s = r.getFirstChild();
      Z(s) && (fn(i, s.getChildren()), r.remove(), n.add(r.getKey()));
    }
  } else if (ut(r)) {
    const i = r.getFirstChild();
    if (Z(i)) {
      const s = i.getFirstChild();
      s !== null && s.insertBefore(e);
    }
  } else if (ut(o)) {
    const i = o.getFirstChild();
    Z(i) && i.append(e);
  } else if (Z(t)) {
    const i = Ue().setTextFormat(e.getTextFormat()).setTextStyle(e.getTextStyle()), s = Me(t.getListType()).setTextFormat(t.getTextFormat()).setTextStyle(t.getTextStyle());
    i.append(s), s.append(e), o ? o.insertAfter(i) : r ? r.insertBefore(i) : t.append(i);
  }
}
function Bx(e) {
  if (ut(e)) return;
  const n = e.getParent(), t = n ? n.getParent() : void 0;
  if (Z(t ? t.getParent() : void 0) && te(t) && Z(n)) {
    const r = n ? n.getFirstChild() : void 0, o = n ? n.getLastChild() : void 0;
    if (e.is(r)) t.insertBefore(e), n.isEmpty() && t.remove();
    else if (e.is(o)) t.insertAfter(e), n.isEmpty() && t.remove();
    else {
      const i = n.getListType(), s = Ue(), a = Me(i);
      s.append(a), e.getPreviousSiblings().forEach((c) => a.append(c));
      const l = Ue(), u = Me(i);
      l.append(u), fn(u, e.getNextSiblings()), t.insertBefore(s), t.insertAfter(l), t.replace(e);
    }
  }
}
function Vx() {
  const e = V();
  if (!$(e) || !e.isCollapsed()) return !1;
  const n = e.anchor.getNode();
  if (!te(n) || n.getChildrenSize() !== 0) return !1;
  const t = bs(n), r = n.getParent();
  Z(r) || Ot(40);
  const o = r.getParent();
  let i;
  if (Fe(o)) i = fe(), t.insertAfter(i);
  else {
    if (!te(o)) return !1;
    i = Ue(), o.insertAfter(i);
  }
  i.setTextStyle(e.style).setTextFormat(e.format).select();
  const s = n.getNextSiblings();
  if (s.length > 0) {
    const a = Me(r.getListType());
    if (te(i)) {
      const l = Ue();
      l.append(a), i.insertAfter(l);
    } else i.insertAfter(a);
    a.append(...s);
  }
  return (function(a) {
    let l = a;
    for (; l.getNextSibling() == null && l.getPreviousSibling() == null; ) {
      const u = l.getParent();
      if (u == null || !te(u) && !Z(u)) break;
      l = u;
    }
    l.remove();
  })(n), !0;
}
function So(...e) {
  const n = [];
  for (const t of e) if (t && typeof t == "string") for (const [r] of t.matchAll(/\S+/g)) n.push(r);
  return n;
}
let Ut = class extends Ve {
  constructor(t = 1, r = void 0, o) {
    super(o);
    T(this, "__value");
    T(this, "__checked");
    this.__value = t === void 0 ? 1 : t, this.__checked = r;
  }
  $config() {
    return this.config("listitem", { $transform: (t) => {
      if (t.__checked == null) return;
      const r = t.getParent();
      Z(r) && r.getListType() !== "check" && t.getChecked() != null && t.setChecked(void 0);
    }, extends: Ve, importDOM: { li: () => ({ conversion: Ux, priority: 0 }) } });
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
      !Z(c) || c.getListType() !== "check" || Z(l.getFirstChild()) ? (a.removeAttribute("role"), a.removeAttribute("tabIndex"), a.removeAttribute("aria-checked")) : (a.setAttribute("role", "checkbox"), a.setAttribute("tabIndex", "-1"), u && l.__checked === u.__checked || a.setAttribute("aria-checked", l.getChecked() ? "true" : "false"));
    })(r, this, t), r.value = this.__value, (function(a, l, u) {
      const c = [], d = [], f = l.list, p = f ? f.listitem : void 0;
      let g;
      if (f && f.nested && (g = f.nested.listitem), p !== void 0 && c.push(...So(p)), f) {
        const h = u.getParent(), m = Z(h) && h.getListType() === "check", v = u.getChecked();
        m && !v || d.push(f.listitemUnchecked), m && v || d.push(f.listitemChecked), m && c.push(v ? f.listitemChecked : f.listitemUnchecked);
      }
      if (g !== void 0) {
        const h = So(g);
        u.getChildren().some((m) => Z(m)) ? c.push(...h) : d.push(...h);
      }
      d.length > 0 && Wo(a, ...d), c.length > 0 && ot(a, ...c);
    })(r, o.theme, this);
    const i = t ? t.__style : "", s = this.__style;
    i !== s && (s === "" ? r.removeAttribute("style") : r.style.cssText = s), (function(a, l, u) {
      const c = Il(l.__textStyle);
      for (const d in c) a.style.setProperty(`--listitem-marker-${d}`, c[d]);
      if (u) for (const d in Il(u.__textStyle)) d in c || a.style.removeProperty(`--listitem-marker-${d}`);
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
      if (A(o) && this.canMergeWith(o)) {
        const i = o.getChildren();
        this.append(...i), o.remove();
      } else super.append(o);
    }
    return this;
  }
  replace(t, r) {
    if (te(t)) return super.replace(t);
    this.setIndent(0);
    const o = this.getParentOrThrow();
    if (!Z(o)) return t;
    if (o.__first === this.getKey()) o.insertBefore(t);
    else if (o.__last === this.getKey()) o.insertAfter(t);
    else {
      const i = Me(o.getListType());
      let s = this.getNextSibling();
      for (; s; ) {
        const a = s;
        s = s.getNextSibling(), i.append(a);
      }
      o.insertAfter(t), t.insertAfter(i);
    }
    return r && (A(t) || Ot(139), this.getChildren().forEach((i) => {
      t.append(i);
    })), this.remove(), o.getChildrenSize() === 0 && o.remove(), t;
  }
  insertAfter(t, r = !0) {
    const o = this.getParentOrThrow();
    if (Z(o) || Ot(39), te(t)) return super.insertAfter(t, r);
    const i = this.getNextSiblings();
    if (o.insertAfter(t, r), i.length !== 0) {
      const s = Me(o.getListType());
      i.forEach((a) => s.append(a)), t.insertAfter(s, r);
    }
    return t;
  }
  remove(t) {
    const r = this.getPreviousSibling(), o = this.getNextSibling();
    super.remove(t), r && o && ut(r) && ut(o) && (fa(r.getFirstChild(), o.getFirstChild()), o.remove());
  }
  insertNewAfter(t, r = !0) {
    const o = Ue().updateFromJSON(this.exportJSON()).setChecked(!this.getChecked() && void 0);
    return this.insertAfter(o, r), o;
  }
  collapseAtStart(t) {
    const r = fe();
    this.getChildren().forEach((a) => r.append(a));
    const o = this.getParentOrThrow(), i = o.getParentOrThrow(), s = te(i);
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
    return Z(o) && (r = o.getListType()), r === "check" ? !!t.__checked : void 0;
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
    for (; te(r); ) r = r.getParentOrThrow().getParentOrThrow(), o++;
    return o;
  }
  setIndent(t) {
    typeof t != "number" && Ot(117), (t = Math.floor(t)) >= 0 || Ot(199);
    let r = this.getIndent();
    for (; r !== t; ) r < t ? (zx(this), r++) : (Bx(this), r--);
    return this;
  }
  canInsertAfter(t) {
    return te(t);
  }
  canReplaceWith(t) {
    return te(t);
  }
  canMergeWith(t) {
    return te(t) || Tr(t);
  }
  extractWithChild(t, r) {
    if (!$(r)) return !1;
    const o = r.anchor.getNode(), i = r.focus.getNode();
    return this.isParentOf(o) && this.isParentOf(i) && this.getTextContent().length === r.getTextContent().length;
  }
  isParentRequired() {
    return !0;
  }
  createParentElementNode() {
    return Me("bullet");
  }
  canMergeWhenEmpty() {
    return !0;
  }
};
function Ux(e) {
  if (e.classList.contains("task-list-item")) {
    for (const t of e.children) if (t.tagName === "INPUT") return iu(t);
  }
  if (e.classList.contains("joplin-checkbox")) {
    for (const t of e.children) if (t.classList.contains("checkbox-wrapper") && t.children.length > 0 && t.children[0].tagName === "INPUT") return iu(t.children[0]);
  }
  const n = e.getAttribute("aria-checked");
  return { node: Ue(n === "true" || n !== "false" && void 0) };
}
function iu(e) {
  return e.getAttribute("type") !== "checkbox" ? { node: null } : { node: Ue(e.hasAttribute("checked")) };
}
function Ue(e) {
  return qe(new Ut(void 0, e));
}
function te(e) {
  return e instanceof Ut;
}
let mn = class extends Ve {
  constructor(t = "number", r = 1, o) {
    super(o);
    T(this, "__tag");
    T(this, "__start");
    T(this, "__listType");
    const i = Gx[t] || t;
    this.__listType = i, this.__tag = i === "number" ? "ol" : "ul", this.__start = r;
  }
  $config() {
    return this.config("list", { $transform: (t) => {
      (function(r) {
        const o = r.getNextSibling();
        Z(o) && r.getListType() === o.getListType() && fa(r, o);
      })(t), rg(t);
    }, extends: Ve, importDOM: { ol: () => ({ conversion: au, priority: 0 }), ul: () => ({ conversion: au, priority: 0 }) } });
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
    return this.__start !== 1 && i.setAttribute("start", String(this.__start)), i.__lexicalListType = this.__listType, su(i, t.theme, this), i;
  }
  updateDOM(t, r, o) {
    return t.__tag !== this.__tag || t.__listType !== this.__listType || (su(r, o.theme, this), !1);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setListType(t.listType).setStart(t.start);
  }
  exportDOM(t) {
    const r = this.createDOM(t._config, t);
    return be(r) && (this.__start !== 1 && r.setAttribute("start", String(this.__start)), this.__listType === "check" && r.setAttribute("__lexicalListType", "check")), { element: r };
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
      te(a) || (i === o && (i = [...o]), i[s] = Ue().append(!A(a) || Z(a) || a.isInline() ? a : he(a.getTextContent())));
    }
    return super.splice(t, r, i);
  }
  extractWithChild(t) {
    return te(t);
  }
};
function su(e, n, t) {
  const r = [], o = [], i = n.list;
  if (i !== void 0) {
    const s = i[`${t.__tag}Depth`] || [], a = ys(t) - 1, l = a % s.length, u = s[l], c = i[t.__tag];
    let d;
    const f = i.nested, p = i.checklist;
    if (f !== void 0 && f.list && (d = f.list), c !== void 0 && r.push(c), p !== void 0 && t.__listType === "check" && r.push(p), u !== void 0) {
      r.push(...So(u));
      for (let g = 0; g < s.length; g++) g !== l && o.push(t.__tag + g);
    }
    if (d !== void 0) {
      const g = So(d);
      a > 1 ? r.push(...g) : o.push(...g);
    }
  }
  o.length > 0 && Wo(e, ...o), r.length > 0 && ot(e, ...r);
}
function jx(e) {
  const n = [];
  for (let t = 0; t < e.length; t++) {
    const r = e[t];
    if (te(r)) {
      n.push(r);
      const o = r.getChildren();
      o.length > 1 && o.forEach((i) => {
        Z(i) && n.push(nu(i));
      });
    } else n.push(nu(r));
  }
  return n;
}
function au(e) {
  const n = e.nodeName.toLowerCase();
  let t = null;
  return n === "ol" ? t = Me("number", e.start) : n === "ul" && (t = (function(r) {
    if (r.getAttribute("__lexicallisttype") === "check" || r.classList.contains("contains-task-list") || r.getAttribute("data-is-checklist") === "1") return !0;
    for (const o of r.childNodes) if (be(o) && o.hasAttribute("aria-checked")) return !0;
    return !1;
  })(e) ? Me("check") : Me("bullet")), { after: jx, node: t };
}
const Gx = { ol: "number", ul: "bullet" };
function Me(e = "number", n = 1) {
  return qe(new mn(e, n));
}
function Z(e) {
  return e instanceof mn;
}
const Hx = G("UPDATE_LIST_START_COMMAND"), og = G("INSERT_UNORDERED_LIST_COMMAND"), Kx = G("INSERT_ORDERED_LIST_COMMAND"), Wx = G("REMOVE_LIST_COMMAND");
function qx(e) {
  return Et(e.registerCommand(Kx, () => (ru("number"), !0), kn), e.registerCommand(Hx, (n) => {
    const { listNodeKey: t, newStart: r } = n, o = me(t);
    return !!Z(o) && (o.getListType() === "number" && (o.setStart(r), rg(o)), !0);
  }, kn), e.registerCommand(og, () => (ru("bullet"), !0), kn), e.registerCommand(Wx, () => (Dx(), !0), kn), e.registerCommand(br, () => Vx(), kn), e.registerNodeTransform(Ut, (n) => {
    const t = n.getFirstChild();
    if (t) {
      if (z(t)) {
        const r = t.getStyle(), o = t.getFormat();
        n.getTextStyle() !== r && n.setTextStyle(r), n.getTextFormat() !== o && n.setTextFormat(o);
      }
    } else {
      const r = V();
      $(r) && (r.style !== n.getTextStyle() || r.format !== n.getTextFormat()) && r.isCollapsed() && n.is(r.anchor.getNode()) && n.setTextStyle(r.style).setTextFormat(r.format);
    }
  }), e.registerNodeTransform(Nt, (n) => {
    const t = n.getParent();
    if (te(t) && n.is(t.getFirstChild())) {
      const r = n.getStyle(), o = n.getFormat();
      r === t.getTextStyle() && o === t.getTextFormat() || t.setTextStyle(r).setTextFormat(o);
    }
  }));
}
function Zx(e) {
  const n = (t) => {
    const r = t.getParent();
    if (Z(t.getFirstChild()) || !Z(r)) return;
    const o = Ke(t, (i) => te(i) && Z(i.getParent()) && te(i.getPreviousSibling()));
    if (o === null && t.getIndent() > 0) t.setIndent(0);
    else if (te(o)) {
      const i = o.getPreviousSibling();
      if (te(i)) {
        const s = (function(l) {
          let u = l, c = u.getFirstChild();
          for (; Z(c); ) {
            const d = c.getLastChild();
            if (!te(d)) break;
            u = d, c = u.getFirstChild();
          }
          return u;
        })(i), a = s.getParent();
        if (Z(a)) {
          const l = ys(a);
          l + 1 < ys(r) && t.setIndent(l);
        }
      }
    }
  };
  return e.registerNodeTransform(mn, (t) => {
    const r = [t];
    for (; r.length > 0; ) {
      const o = r.shift();
      if (Z(o)) {
        for (const i of o.getChildren()) if (te(i)) {
          n(i);
          const s = i.getFirstChild();
          Z(s) && r.push(s);
        }
      }
    }
  });
}
function Jx({ hasStrictIndent: e = !1 }) {
  const [n] = it();
  return ze(() => {
    if (!n.hasNodes([mn, Ut])) throw new Error("ListPlugin: ListNode and/or ListItemNode not registered on editor");
  }, [n]), ze(() => {
    if (e) return Zx(n);
  }, [n, e]), (function(t) {
    ze(() => qx(t), [t]);
  })(n), null;
}
var lu = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ti = { exports: {} }, uu;
function Yx() {
  return uu || (uu = 1, (function(e) {
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
          clone: function y(b, _) {
            _ = _ || {};
            var w, S;
            switch (a.util.type(b)) {
              case "Object":
                if (S = a.util.objId(b), _[S])
                  return _[S];
                w = /** @type {Record<string, any>} */
                {}, _[S] = w;
                for (var k in b)
                  b.hasOwnProperty(k) && (w[k] = y(b[k], _));
                return (
                  /** @type {any} */
                  w
                );
              case "Array":
                return S = a.util.objId(b), _[S] ? _[S] : (w = [], _[S] = w, /** @type {Array} */
                /** @type {any} */
                b.forEach(function(N, E) {
                  w[E] = y(N, _);
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
                for (var _ in b)
                  if (b[_].src == y)
                    return b[_];
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
          isActive: function(y, b, _) {
            for (var w = "no-" + b; y; ) {
              var S = y.classList;
              if (S.contains(b))
                return !0;
              if (S.contains(w))
                return !1;
              y = y.parentElement;
            }
            return !!_;
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
            var _ = a.util.clone(a.languages[y]);
            for (var w in b)
              _[w] = b[w];
            return _;
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
          insertBefore: function(y, b, _, w) {
            w = w || /** @type {any} */
            a.languages;
            var S = w[y], k = {};
            for (var N in S)
              if (S.hasOwnProperty(N)) {
                if (N == b)
                  for (var E in _)
                    _.hasOwnProperty(E) && (k[E] = _[E]);
                _.hasOwnProperty(N) || (k[N] = S[N]);
              }
            var R = w[y];
            return w[y] = k, a.languages.DFS(a.languages, function(O, I) {
              I === R && O != y && (this[O] = k);
            }), k;
          },
          // Traverse a language definition with Depth First Search
          DFS: function y(b, _, w, S) {
            S = S || {};
            var k = a.util.objId;
            for (var N in b)
              if (b.hasOwnProperty(N)) {
                _.call(b, N, b[N], w || N);
                var E = b[N], R = a.util.type(E);
                R === "Object" && !S[k(E)] ? (S[k(E)] = !0, y(E, _, null, S)) : R === "Array" && !S[k(E)] && (S[k(E)] = !0, y(E, _, N, S));
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
        highlightAllUnder: function(y, b, _) {
          var w = {
            callback: _,
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
        highlightElement: function(y, b, _) {
          var w = a.util.getLanguage(y), S = a.languages[w];
          a.util.setLanguage(y, w);
          var k = y.parentElement;
          k && k.nodeName.toLowerCase() === "pre" && a.util.setLanguage(k, w);
          var N = y.textContent, E = {
            element: y,
            language: w,
            grammar: S,
            code: N
          };
          function R(I) {
            E.highlightedCode = I, a.hooks.run("before-insert", E), E.element.innerHTML = E.highlightedCode, a.hooks.run("after-highlight", E), a.hooks.run("complete", E), _ && _.call(E.element);
          }
          if (a.hooks.run("before-sanity-check", E), k = E.element.parentElement, k && k.nodeName.toLowerCase() === "pre" && !k.hasAttribute("tabindex") && k.setAttribute("tabindex", "0"), !E.code) {
            a.hooks.run("complete", E), _ && _.call(E.element);
            return;
          }
          if (a.hooks.run("before-highlight", E), !E.grammar) {
            R(a.util.encode(E.code));
            return;
          }
          if (b && r.Worker) {
            var O = new Worker(a.filename);
            O.onmessage = function(I) {
              R(I.data);
            }, O.postMessage(JSON.stringify({
              language: E.language,
              code: E.code,
              immediateClose: !0
            }));
          } else
            R(a.highlight(E.code, E.grammar, E.language));
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
        highlight: function(y, b, _) {
          var w = {
            code: y,
            grammar: b,
            language: _
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
          var _ = b.rest;
          if (_) {
            for (var w in _)
              b[w] = _[w];
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
            var _ = a.hooks.all;
            _[y] = _[y] || [], _[y].push(b);
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
            var _ = a.hooks.all[y];
            if (!(!_ || !_.length))
              for (var w = 0, S; S = _[w++]; )
                S(b);
          }
        },
        Token: l
      };
      r.Prism = a;
      function l(y, b, _, w) {
        this.type = y, this.content = b, this.alias = _, this.length = (w || "").length | 0;
      }
      l.stringify = function y(b, _) {
        if (typeof b == "string")
          return b;
        if (Array.isArray(b)) {
          var w = "";
          return b.forEach(function(R) {
            w += y(R, _);
          }), w;
        }
        var S = {
          type: b.type,
          content: y(b.content, _),
          tag: "span",
          classes: ["token", b.type],
          attributes: {},
          language: _
        }, k = b.alias;
        k && (Array.isArray(k) ? Array.prototype.push.apply(S.classes, k) : S.classes.push(k)), a.hooks.run("wrap", S);
        var N = "";
        for (var E in S.attributes)
          N += " " + E + '="' + (S.attributes[E] || "").replace(/"/g, "&quot;") + '"';
        return "<" + S.tag + ' class="' + S.classes.join(" ") + '"' + N + ">" + S.content + "</" + S.tag + ">";
      };
      function u(y, b, _, w) {
        y.lastIndex = b;
        var S = y.exec(_);
        if (S && w && S[1]) {
          var k = S[1].length;
          S.index += k, S[0] = S[0].slice(k);
        }
        return S;
      }
      function c(y, b, _, w, S, k) {
        for (var N in _)
          if (!(!_.hasOwnProperty(N) || !_[N])) {
            var E = _[N];
            E = Array.isArray(E) ? E : [E];
            for (var R = 0; R < E.length; ++R) {
              if (k && k.cause == N + "," + R)
                return;
              var O = E[R], I = O.inside, B = !!O.lookbehind, D = !!O.greedy, U = O.alias;
              if (D && !O.pattern.global) {
                var q = O.pattern.toString().match(/[imsuy]*$/)[0];
                O.pattern = RegExp(O.pattern.source, q + "g");
              }
              for (var H = O.pattern || O, J = w.next, ne = S; J !== b.tail && !(k && ne >= k.reach); ne += J.value.length, J = J.next) {
                var se = J.value;
                if (b.length > y.length)
                  return;
                if (!(se instanceof l)) {
                  var ce = 1, pe;
                  if (D) {
                    if (pe = u(H, ne, y, B), !pe || pe.index >= y.length)
                      break;
                    var Ce = pe.index, je = pe.index + pe[0].length, Se = ne;
                    for (Se += J.value.length; Ce >= Se; )
                      J = J.next, Se += J.value.length;
                    if (Se -= J.value.length, ne = Se, J.value instanceof l)
                      continue;
                    for (var Pe = J; Pe !== b.tail && (Se < je || typeof Pe.value == "string"); Pe = Pe.next)
                      ce++, Se += Pe.value.length;
                    ce--, se = y.slice(ne, Se), pe.index -= ne;
                  } else if (pe = u(H, 0, se, B), !pe)
                    continue;
                  var Ce = pe.index, Le = pe[0], Ze = se.slice(0, Ce), Je = se.slice(Ce + Le.length), bn = ne + se.length;
                  k && bn > k.reach && (k.reach = bn);
                  var Or = J.prev;
                  Ze && (Or = f(b, Or, Ze), ne += Ze.length), p(b, Or, ce);
                  var yg = new l(N, I ? a.tokenize(Le, I) : Le, U, Le);
                  if (J = f(b, Or, yg), Je && f(b, J, Je), ce > 1) {
                    var ti = {
                      cause: N + "," + R,
                      reach: bn
                    };
                    c(y, b, _, J.prev, ne, ti), k && ti.reach > k.reach && (k.reach = ti.reach);
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
      function f(y, b, _) {
        var w = b.next, S = { value: _, prev: b, next: w };
        return b.next = S, w.prev = S, y.length++, S;
      }
      function p(y, b, _) {
        for (var w = b.next, S = 0; S < _ && w !== y.tail; S++)
          w = w.next;
        b.next = w, w.prev = b, y.length -= S;
      }
      function g(y) {
        for (var b = [], _ = y.head.next; _ !== y.tail; )
          b.push(_.value), _ = _.next;
        return b;
      }
      if (!r.document)
        return r.addEventListener && (a.disableWorkerMessageHandler || r.addEventListener("message", function(y) {
          var b = JSON.parse(y.data), _ = b.language, w = b.code, S = b.immediateClose;
          r.postMessage(a.highlight(w, a.languages[_], _)), S && r.close();
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
    e.exports && (e.exports = t), typeof lu < "u" && (lu.Prism = t), t.languages.markup = {
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
            var _ = (/\.(\w+)$/.exec(y) || [, "none"])[1];
            b = s[_] || _;
          }
          t.util.setLanguage(v, b), t.util.setLanguage(m, b);
          var w = t.plugins.autoloader;
          w && w.loadLanguages(b), f(
            y,
            function(S) {
              m.setAttribute(a, u);
              var k = p(m.getAttribute("data-range"));
              if (k) {
                var N = S.split(/\r\n?|\n/g), E = k[0], R = k[1] == null ? N.length : k[1];
                E < 0 && (E += N.length), E = Math.max(0, Math.min(E - 1, N.length)), R < 0 && (R += N.length), R = Math.max(0, Math.min(R, N.length)), S = N.slice(E, R).join(`
`), m.hasAttribute("data-start") || m.setAttribute("data-start", String(E + 1));
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
  })(Ti)), Ti.exports;
}
Yx();
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
var cu = {}, du;
function Xx() {
  return du || (du = 1, Prism.languages.python = {
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
  }, Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest = Prism.languages.python, Prism.languages.py = Prism.languages.python), cu;
}
Xx();
var fu = {}, gu;
function Qx() {
  return gu || (gu = 1, (function(e) {
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
  })(Prism)), fu;
}
Qx();
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
var pu = {}, hu;
function e_() {
  return hu || (hu = 1, (function(e) {
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
  })(Prism)), pu;
}
e_();
var mu = {}, yu;
function t_() {
  return yu || (yu = 1, (function(e) {
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
  })(Prism)), mu;
}
t_();
var bu = {}, vu;
function n_() {
  return vu || (vu = 1, (function(e) {
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
  })(Prism)), bu;
}
n_();
function ig(e, n) {
  for (const t of e.childNodes) {
    if (be(t) && t.tagName === n) return !0;
    ig(t, n);
  }
  return !1;
}
const ar = "data-language", or = "data-highlight-language", qr = "data-theme";
let Xo = class sg extends Ve {
  constructor(t, r) {
    super(r);
    T(this, "__language");
    T(this, "__theme");
    T(this, "__isSyntaxHighlightSupported");
    this.__language = t || void 0, this.__isSyntaxHighlightSupported = !1, this.__theme = void 0;
  }
  static getType() {
    return "code";
  }
  static clone(t) {
    return new sg(t.__language, t.__key);
  }
  afterCloneFrom(t) {
    super.afterCloneFrom(t), this.__language = t.__language, this.__theme = t.__theme, this.__isSyntaxHighlightSupported = t.__isSyntaxHighlightSupported;
  }
  createDOM(t) {
    const r = document.createElement("code");
    ot(r, t.theme.code), r.setAttribute("spellcheck", "false");
    const o = this.getLanguage();
    o && (r.setAttribute(ar, o), this.getIsSyntaxHighlightSupported() && r.setAttribute(or, o));
    const i = this.getTheme();
    i && r.setAttribute(qr, i);
    const s = this.getStyle();
    return s && r.setAttribute("style", s), r;
  }
  updateDOM(t, r, o) {
    const i = this.__language, s = t.__language;
    i ? i !== s && r.setAttribute(ar, i) : s && r.removeAttribute(ar);
    const a = this.__isSyntaxHighlightSupported;
    t.__isSyntaxHighlightSupported && s ? a && i ? i !== s && r.setAttribute(or, i) : r.removeAttribute(or) : a && i && r.setAttribute(or, i);
    const l = this.__theme, u = t.__theme;
    l ? l !== u && r.setAttribute(qr, l) : u && r.removeAttribute(qr);
    const c = this.__style, d = t.__style;
    return c ? c !== d && r.setAttribute("style", c) : d && r.removeAttribute("style"), !1;
  }
  exportDOM(t) {
    const r = document.createElement("pre");
    ot(r, t._config.theme.code), r.setAttribute("spellcheck", "false");
    const o = this.getLanguage();
    o && (r.setAttribute(ar, o), this.getIsSyntaxHighlightSupported() && r.setAttribute(or, o));
    const i = this.getTheme();
    i && r.setAttribute(qr, i);
    const s = this.getStyle();
    return s && r.setAttribute("style", s), { element: r };
  }
  static importDOM() {
    return { code: (t) => t.textContent != null && (/\r?\n/.test(t.textContent) || ig(t, "BR")) ? { conversion: xu, priority: 1 } : null, div: () => ({ conversion: r_, priority: 1 }), pre: () => ({ conversion: xu, priority: 0 }), table: (t) => Ai(t) ? { conversion: o_, priority: 3 } : null, td: (t) => {
      const r = t, o = r.closest("table");
      return r.classList.contains("js-file-line") || o && Ai(o) ? { conversion: _u, priority: 3 } : null;
    }, tr: (t) => {
      const r = t.closest("table");
      return r && Ai(r) ? { conversion: _u, priority: 3 } : null;
    } };
  }
  static importJSON(t) {
    return St().updateFromJSON(t);
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
      const u = fe();
      return this.insertAfter(u, r), u;
    }
    const { anchor: s, focus: a } = t, l = (s.isBefore(a) ? s : a).getNode();
    if (z(l)) {
      let u = s_(l);
      const c = [];
      for (; ; ) if (Do(u)) c.push(Wn()), u = u.getNextSibling();
      else {
        if (!ug(u)) break;
        {
          let v = 0;
          const y = u.getTextContent(), b = u.getTextContentSize();
          for (; v < b && y[v] === " "; ) v++;
          if (v !== 0 && c.push(lg(" ".repeat(v))), v !== b) break;
          u = u.getNextSibling();
        }
      }
      const d = l.splitText(s.offset)[0], f = s.offset === 0 ? 0 : 1, p = d.getIndexWithinParent() + f, g = l.getParentOrThrow(), h = [nt(), ...c];
      g.splice(p, 0, h);
      const m = c[c.length - 1];
      m ? m.select() : s.offset === 0 ? d.selectPrevious() : d.getNextSibling().selectNext(0, 0);
    }
    if (ga(l)) {
      const { offset: u } = t.anchor;
      l.splice(u, 0, [nt()]), l.select(u + 1, u + 1);
    }
    return null;
  }
  canIndent() {
    return !1;
  }
  collapseAtStart() {
    const t = fe();
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
function St(e, n) {
  return xf(Xo).setLanguage(e).setTheme(n);
}
function ga(e) {
  return e instanceof Xo;
}
function xu(e) {
  return { node: St(e.getAttribute(ar)) };
}
function r_(e) {
  const n = e, t = wu(n);
  return t || (function(r) {
    let o = r.parentElement;
    for (; o !== null; ) {
      if (wu(o)) return !0;
      o = o.parentElement;
    }
    return !1;
  })(n) ? { node: t ? St() : null } : { node: null };
}
function o_() {
  return { node: St() };
}
function _u() {
  return { node: null };
}
function wu(e) {
  return e.style.fontFamily.match("monospace") !== null;
}
function Ai(e) {
  return e.classList.contains("js-file-line-container");
}
let pa = class ag extends Nt {
  constructor(t = "", r, o) {
    super(t, o);
    T(this, "__highlightType");
    this.__highlightType = r;
  }
  static getType() {
    return "code-highlight";
  }
  static clone(t) {
    return new ag(t.__text, t.__highlightType || void 0, t.__key);
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
    const r = super.createDOM(t), o = Fi(t.theme, this.__highlightType);
    return ot(r, o), r;
  }
  updateDOM(t, r, o) {
    const i = super.updateDOM(t, r, o), s = Fi(o.theme, t.__highlightType), a = Fi(o.theme, this.__highlightType);
    return s !== a && (s && Wo(r, s), a && ot(r, a)), i;
  }
  static importJSON(t) {
    return lg().updateFromJSON(t);
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
    return St();
  }
};
function Fi(e, n) {
  return n && e && e.codeHighlight && e.codeHighlight[n];
}
function lg(e = "", n) {
  return qe(new pa(e, n));
}
function ug(e) {
  return e instanceof pa;
}
function i_(e, n) {
  let t = e;
  for (let r = Ee(e, n); r && (ug(r.origin) || Do(r.origin)); r = $v(r)) t = r.origin;
  return t;
}
function s_(e) {
  return i_(e, "previous");
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
const a_ = /* @__PURE__ */ new Set(["http:", "https:", "mailto:", "sms:", "tel:"]);
class yn extends Ve {
  constructor(t = "", r = {}, o) {
    super(o);
    T(this, "__url");
    T(this, "__target");
    T(this, "__rel");
    T(this, "__title");
    const { target: i = null, rel: s = null, title: a = null } = r;
    this.__url = t, this.__target = i, this.__rel = s, this.__title = a;
  }
  static getType() {
    return "link";
  }
  static clone(t) {
    return new yn(t.__url, { rel: t.__rel, target: t.__target, title: t.__title }, t.__key);
  }
  createDOM(t) {
    const r = document.createElement("a");
    return this.updateLinkDOM(null, r, t), ot(r, t.theme.link), r;
  }
  updateLinkDOM(t, r, o) {
    if (bf(r)) {
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
    return { a: (t) => ({ conversion: l_, priority: 1 }) };
  }
  static importJSON(t) {
    return Co().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setURL(t.url).setRel(t.rel || null).setTarget(t.target || null).setTitle(t.title || null);
  }
  sanitizeUrl(t) {
    t = Cu(t);
    try {
      const r = new URL(Cu(t));
      if (!a_.has(r.protocol)) return "about:blank";
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
    const o = Co(this.__url, { rel: this.__rel, target: this.__target, title: this.__title });
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
    if (!$(r)) return !1;
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
function l_(e) {
  let n = null;
  if (bf(e)) {
    const t = e.textContent;
    (t !== null && t !== "" || e.children.length > 0) && (n = Co(e.getAttribute("href") || "", { rel: e.getAttribute("rel"), target: e.getAttribute("target"), title: e.getAttribute("title") }));
  }
  return { node: n };
}
function Co(e = "", n) {
  return qe(new yn(e, n));
}
function u_(e) {
  return e instanceof yn;
}
class Qo extends yn {
  constructor(t = "", r = {}, o) {
    super(t, r, o);
    T(this, "__isUnlinked");
    this.__isUnlinked = r.isUnlinked !== void 0 && r.isUnlinked !== null && r.isUnlinked;
  }
  static getType() {
    return "autolink";
  }
  static clone(t) {
    return new Qo(t.__url, { isUnlinked: t.__isUnlinked, rel: t.__rel, target: t.__target, title: t.__title }, t.__key);
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
    return Su().updateFromJSON(t);
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
    if (A(o)) {
      const i = Su(this.__url, { isUnlinked: this.__isUnlinked, rel: this.__rel, target: this.__target, title: this.__title });
      return o.append(i), i;
    }
    return null;
  }
}
function Su(e = "", n) {
  return qe(new Qo(e, n));
}
function c_(e) {
  return e instanceof Qo;
}
const d_ = /^\+?[0-9\s()-]{5,}$/;
function Cu(e) {
  return e.match(/^[a-z][a-z0-9+.-]*:/i) || e.match(/^[/#.]/) ? e : e.includes("@") ? `mailto:${e}` : d_.test(e) ? `tel:${e}` : `https://${e}`;
}
function vs(e, n) {
  const t = {};
  for (const r of e) {
    const o = n(r);
    o && (t[o] ? t[o].push(r) : t[o] = [r]);
  }
  return t;
}
function ha(e) {
  const n = vs(e, (t) => t.type);
  return { element: n.element || [], multilineElement: n["multiline-element"] || [], textFormat: n["text-format"] || [], textMatch: n["text-match"] || [] };
}
const ko = /[!-/:-@[-`{-~\s]/, f_ = /^\s{0,3}$/;
function xs(e) {
  if (!Tr(e)) return !1;
  const n = e.getFirstChild();
  return n == null || e.getChildrenSize() === 1 && z(n) && f_.test(n.getTextContent());
}
function g_(e, n, t, r) {
  for (const o of n) {
    if (!o.export) continue;
    const i = o.export(e, (s) => Eo(s, t, r));
    if (i != null) return i;
  }
  return A(e) ? Eo(e, t, r) : ee(e) ? e.getTextContent() : null;
}
function Eo(e, n, t, r, o) {
  const i = [], s = e.getChildren();
  r || (r = []), o || (o = []);
  e: for (const a of s) {
    for (const l of t) {
      if (!l.export) continue;
      const u = l.export(a, (c) => Eo(c, n, t, r, [...o, ...r]), (c, d) => ku(c, d, n, r, o));
      if (u != null) {
        i.push(u);
        continue e;
      }
    }
    $t(a) ? i.push(`
`) : z(a) ? i.push(ku(a, a.getTextContent(), n, r, o)) : A(a) ? i.push(Eo(a, n, t, r, o)) : ee(a) && i.push(a.getTextContent());
  }
  return i.join("");
}
function ku(e, n, t, r, o) {
  let i = e.getFormat() === 0 ? n : (function(f) {
    return f.replace(/^\s+|\s+$/g, (p) => [...p].map((g) => "&#" + g.codePointAt(0) + ";").join(""));
  })(n);
  e.hasFormat("code") || (i = i.replace(/([*_`~\\])/g, "\\$1"));
  let s = "", a = "", l = "";
  const u = Eu(e, !0), c = Eu(e, !1), d = /* @__PURE__ */ new Set();
  for (const f of t) {
    const p = f.format[0], g = f.tag;
    Zr(e, p) && !d.has(p) && (d.add(p), Zr(u, p) && r.find((h) => h.tag === g) || (r.push({ format: p, tag: g }), s += g));
  }
  for (let f = 0; f < r.length; f++) {
    const p = Zr(e, r[f].format), g = Zr(c, r[f].format);
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
function Eu(e, n) {
  let t = n ? e.getPreviousSibling() : e.getNextSibling();
  if (!t) {
    const r = e.getParentOrThrow();
    r.isInline() && (t = n ? r.getPreviousSibling() : r.getNextSibling());
  }
  for (; t; ) {
    if (A(t)) {
      if (!t.isInline()) break;
      const r = n ? t.getLastDescendant() : t.getFirstDescendant();
      if (z(r)) return r;
      t = n ? t.getPreviousSibling() : t.getNextSibling();
    }
    if (z(t)) return t;
    if (!A(t)) return null;
  }
  return null;
}
function Zr(e, n) {
  return z(e) && e.hasFormat(n);
}
function p_(e, n) {
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
        if ((!p || ko.test(p)) && (!g || ko.test(g))) return c;
      }
    }
    return null;
  })(e.getTextContent(), n);
  if (!t) return null;
  const r = t.index || 0;
  return { endIndex: r + t[0].length, match: t, startIndex: r, transformer: n.transformersByTag[t[1]] };
}
function Ht(e) {
  return z(e) && !e.hasFormat("code");
}
function Kt(e, n, t) {
  let r = p_(e, n), o = (function(s, a) {
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
    Ht(s.nodeAfter) && Kt(s.nodeAfter, n, t), Ht(s.nodeBefore) && Kt(s.nodeBefore, n, t), Ht(s.transformedNode) && Kt(s.transformedNode, n, t);
  } else if (o) {
    const s = (function(a, l, u, c, d) {
      let f, p, g;
      return l === 0 ? [f, p] = a.splitText(u) : [g, f, p] = a.splitText(l, u), c.replace ? { nodeAfter: p, nodeBefore: g, transformedNode: c.replace(f, d) || void 0 } : null;
    })(e, o.startIndex, o.endIndex, o.transformer, o.match);
    if (!s) return;
    Ht(s.nodeAfter) && Kt(s.nodeAfter, n, t), Ht(s.nodeBefore) && Kt(s.nodeBefore, n, t), Ht(s.transformedNode) && Kt(s.transformedNode, n, t);
  }
  const i = e.getTextContent().replace(/\\([*_`~\\])/g, "$1").replace(/&#(\d+);/g, (s, a) => String.fromCodePoint(a));
  e.setTextContent(i);
}
function h_(e, n = !1) {
  const t = ha(e), r = (function(o) {
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
`), a = s.length, l = i || ge();
    l.clear();
    for (let c = 0; c < a; c++) {
      const d = s[c], [f, p] = m_(s, c, t.multilineElement, l);
      f ? c = p : y_(d, l, t.element, r, t.textMatch, n);
    }
    const u = l.getChildren();
    for (const c of u) !n && xs(c) && l.getChildrenSize() > 1 && c.remove();
    V() !== null && l.selectStart();
  };
}
function m_(e, n, t, r) {
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
function y_(e, n, t, r, o, i) {
  const s = he(e), a = fe();
  a.append(s), n.append(a);
  for (const { regExp: l, replace: u } of t) {
    const c = e.match(l);
    if (c && (s.setTextContent(e.slice(c[0].length)), u(a, [s], c, !0) !== !1)) break;
  }
  if (Kt(s, r, o), a.isAttached() && e.length > 0) {
    const l = a.getPreviousSibling();
    if (!i && (Tr(l) || ms(l) || Z(l))) {
      let u = l;
      if (Z(l)) {
        const c = l.getLastDescendant();
        u = c == null ? null : Ke(c, te);
      }
      u != null && u.getTextContentSize() > 0 && (u.splice(u.getChildrenSize(), 0, [nt(), ...a.getChildren()]), a.remove());
    }
  }
}
function b_(e, ...n) {
  const t = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", e);
  for (const o of n) r.append("v", o);
  throw t.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
const cg = /^(\s*)(\d{1,})\.\s/, dg = /^(\s*)[-*+]\s/, v_ = /^(\s*)(?:[-*+]\s)?\s?(\[(\s|x)?\])\s/i, _s = /^(#{1,6})\s/, fg = /^>\s/, gg = /^[ \t]*```([\w-]+)?/, ws = /[ \t]*```$/, x_ = /^[ \t]*```[^`]+(?:(?:`{1,2}|`{4,})[^`]+)*```(?:[^`]|$)/, __ = /^(?:\|)(.+)(?:\|)\s?$/, w_ = /^(\| ?:?-*:? ?)+\|\s?$/, Nu = /^<[a-z_][\w-]*(?:\s[^<>]*)?\/?>/i, Ru = /^<\/[a-z_][\w-]*\s*>/i, Tu = (e) => new RegExp(`(?:${e.source})$`, e.flags), lr = i0("mdListMarker", { parse: (e) => typeof e == "string" && /^[-*+]$/.test(e) ? e : "-" }), pg = (e) => (n, t, r, o) => {
  const i = e(r);
  i.append(...t), n.replace(i), o || i.select(0, 0);
}, hg = (e) => (n, t, r, o) => {
  const i = n.getPreviousSibling(), s = n.getNextSibling(), a = Ue(e === "check" ? r[3] === "x" : void 0), l = r[0].trim()[0], u = e !== "bullet" && e !== "check" || l !== lr.parse(l) ? void 0 : l;
  if (Z(s) && s.getListType() === e) {
    u && fi(s, lr, u);
    const d = s.getFirstChild();
    d !== null ? d.insertBefore(a) : s.append(a), n.remove();
  } else if (Z(i) && i.getListType() === e) u && fi(i, lr, u), i.append(a), n.remove();
  else {
    const d = Me(e, e === "number" ? Number(r[2]) : void 0);
    u && fi(d, lr, u), d.append(a), n.replace(d);
  }
  a.append(...t), o || a.select(0, 0);
  const c = (function(d) {
    const f = d.match(/\t/g), p = d.match(/ /g);
    let g = 0;
    return f && (g += f.length), p && (g += Math.floor(p.length / 4)), g;
  })(r[1]);
  c && a.setIndent(c);
}, ma = (e, n, t) => {
  const r = [], o = e.getChildren();
  let i = 0;
  for (const s of o) if (te(s)) {
    if (s.getChildrenSize() === 1) {
      const d = s.getFirstChild();
      if (Z(d)) {
        r.push(ma(d, n, t + 1));
        continue;
      }
    }
    const a = " ".repeat(4 * t), l = e.getListType(), u = ud(e, lr), c = l === "number" ? `${e.getStart() + i}. ` : l === "check" ? `${u} [${s.getChecked() ? "x" : " "}] ` : u + " ";
    r.push(a + c + n(s)), i++;
  }
  return r.join(`
`);
}, S_ = { dependencies: [Yo], export: (e, n) => {
  if (!vx(e)) return null;
  const t = Number(e.getTag().slice(1));
  return "#".repeat(t) + " " + n(e);
}, regExp: _s, replace: pg((e) => {
  const n = "h" + e[1].length;
  return Zt(n);
}), type: "element" }, C_ = { dependencies: [Zo], export: (e, n) => {
  if (!ms(e)) return null;
  const t = n(e).split(`
`), r = [];
  for (const o of t) r.push("> " + o);
  return r.join(`
`);
}, regExp: fg, replace: (e, n, t, r) => {
  if (r) {
    const i = e.getPreviousSibling();
    if (ms(i)) return i.splice(i.getChildrenSize(), 0, [nt(), ...n]), void e.remove();
  }
  const o = Jo();
  o.append(...n), e.replace(o), r || o.select(0, 0);
}, type: "element" }, k_ = { dependencies: [Xo], export: (e) => {
  if (!ga(e)) return null;
  const n = e.getTextContent();
  return "```" + (e.getLanguage() || "") + (n ? `
` + n : "") + "\n```";
}, regExpEnd: { optional: !0, regExp: ws }, regExpStart: gg, replace: (e, n, t, r, o, i) => {
  let s, a;
  if (!n && o) {
    if (o.length === 1) r ? (s = St(), a = t[1] + o[0]) : (s = St(t[1]), a = o[0].startsWith(" ") ? o[0].slice(1) : o[0]);
    else {
      if (s = St(t[1]), o[0].trim().length === 0) for (; o.length > 0 && !o[0].length; ) o.shift();
      else o[0] = o[0].startsWith(" ") ? o[0].slice(1) : o[0];
      for (; o.length > 0 && !o[o.length - 1].length; ) o.pop();
      a = o.join(`
`);
    }
    const l = he(a);
    s.append(l), e.append(s);
  } else n && pg((l) => St(l ? l[1] : void 0))(e, n, t, i);
}, type: "multiline-element" }, E_ = { dependencies: [mn, Ut], export: (e, n) => Z(e) ? ma(e, n, 0) : null, regExp: dg, replace: hg("bullet"), type: "element" }, N_ = { dependencies: [mn, Ut], export: (e, n) => Z(e) ? ma(e, n, 0) : null, regExp: cg, replace: hg("number"), type: "element" }, R_ = { format: ["code"], tag: "`", type: "text-format" }, T_ = { format: ["highlight"], tag: "==", type: "text-format" }, A_ = { format: ["bold", "italic"], tag: "***", type: "text-format" }, F_ = { format: ["bold", "italic"], intraword: !1, tag: "___", type: "text-format" }, I_ = { format: ["bold"], tag: "**", type: "text-format" }, O_ = { format: ["bold"], intraword: !1, tag: "__", type: "text-format" }, $_ = { format: ["strikethrough"], tag: "~~", type: "text-format" }, M_ = { format: ["italic"], tag: "*", type: "text-format" }, P_ = { format: ["italic"], intraword: !1, tag: "_", type: "text-format" }, L_ = { dependencies: [yn], export: (e, n, t) => {
  if (!u_(e) || c_(e)) return null;
  const r = e.getTitle(), o = n(e);
  return r ? `[${o}](${e.getURL()} "${r}")` : `[${o}](${e.getURL()})`;
}, importRegExp: /(?:\[(.+?)\])(?:\((?:([^()\s]+)(?:\s"((?:[^"]*\\")*[^"]*)"\s*)?)\))/, regExp: /(?:\[(.+?)\])(?:\((?:([^()\s]+)(?:\s"((?:[^"]*\\")*[^"]*)"\s*)?)\))$/, replace: (e, n) => {
  const [, t, r, o] = n, i = Co(r, { title: o }), s = t.split("[").length - 1, a = t.split("]").length - 1;
  let l = t, u = "";
  if (s < a) return;
  if (s > a) {
    const d = t.split("[");
    u = "[" + d[0], l = d.slice(1).join("[");
  }
  const c = he(l);
  return c.setFormat(e.getFormat()), i.append(c), e.replace(i), u && i.insertBefore(he(u)), c;
}, trigger: ")", type: "text-match" }, D_ = [S_, C_, E_, N_], z_ = [k_], B_ = [R_, A_, F_, I_, O_, T_, M_, P_, $_], V_ = [L_], gn = [...D_, ...z_, ...B_, ...V_];
function Au(e, n, t) {
  const r = t.length;
  for (let o = n; o >= r; o--) {
    const i = o - r;
    if (mg(e, i, t, 0, r) && e[i + r] !== " ") return i;
  }
  return -1;
}
function mg(e, n, t, r, o) {
  for (let i = 0; i < o; i++) if (e[n + i] !== t[r + i]) return !1;
  return !0;
}
function U_(e, n = gn) {
  const t = ha(n), r = vs(t.textFormat, ({ tag: s }) => s[s.length - 1]), o = vs(t.textMatch, ({ trigger: s }) => s);
  for (const s of n) {
    const a = s.type;
    if (a === "element" || a === "text-match" || a === "multiline-element") {
      const l = s.dependencies;
      for (const u of l) e.hasNode(u) || b_(173, u.getType());
    }
  }
  const i = (s, a, l) => {
    (function(u, c, d, f) {
      const p = u.getParent();
      if (!Fe(p) || u.getFirstChild() !== c) return !1;
      const g = c.getTextContent();
      if (g[d - 1] !== " ") return !1;
      for (const { regExp: h, replace: m } of f) {
        const v = g.match(h);
        if (v && v[0].length === (v[0].endsWith(" ") ? d : d - 1)) {
          const y = c.getNextSiblings(), [b, _] = c.splitText(d);
          if (m(u, _ ? [_, ...y] : y, v, !1) !== !1) return b.remove(), !0;
        }
      }
      return !1;
    })(s, a, l, t.element) || (function(u, c, d, f) {
      const p = u.getParent();
      if (!Fe(p) || u.getFirstChild() !== c) return !1;
      const g = c.getTextContent();
      if (g[d - 1] !== " ") return !1;
      for (const { regExpStart: h, replace: m, regExpEnd: v } of f) {
        if (v && !("optional" in v) || v && "optional" in v && !v.optional) continue;
        const y = g.match(h);
        if (y && y[0].length === (y[0].endsWith(" ") ? d : d - 1)) {
          const b = c.getNextSiblings(), [_, w] = c.splitText(d);
          if (m(u, w ? [w, ...b] : b, y, null, null, !1) !== !1) return _.remove(), !0;
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
        if (y > 1 && !mg(f, b, v, 0, y) || f[b - 1] === " ") continue;
        const _ = f[p + 1];
        if (m.intraword === !1 && _ && !ko.test(_)) continue;
        const w = u;
        let S = w, k = Au(f, b, v), N = S;
        for (; k < 0 && (N = N.getPreviousSibling()) && !$t(N); ) if (z(N)) {
          if (N.hasFormat("code")) continue;
          const H = N.getTextContent();
          S = N, k = Au(H, H.length, v);
        }
        if (k < 0 || S === w && k + y === b) continue;
        const E = S.getTextContent();
        if (k > 0 && E[k - 1] === g) continue;
        const R = E[k - 1];
        if (m.intraword === !1 && R && !ko.test(R)) continue;
        const O = w.getTextContent(), I = O.slice(0, b) + O.slice(p + 1);
        w.setTextContent(I);
        const B = S === w ? I : E;
        S.setTextContent(B.slice(0, k) + B.slice(k + y));
        const D = V(), U = Bo();
        Ne(U);
        const q = p - y * (S === w ? 2 : 1) + 1;
        U.anchor.set(S.__key, k, "text"), U.focus.set(w.__key, q, "text");
        for (const H of m.format) U.hasFormat(H) || U.formatText(H);
        U.anchor.set(U.focus.key, U.focus.offset, U.focus.type);
        for (const H of m.format) U.hasFormat(H) && U.toggleFormat(H);
        return $(D) && (U.format = D.format), !0;
      }
    })(a, l, r);
  };
  return e.registerUpdateListener(({ tags: s, dirtyLeaves: a, editorState: l, prevEditorState: u }) => {
    if (s.has(Gd) || s.has(mo) || e.isComposing()) return;
    const c = l.read(V), d = u.read(V);
    if (!$(d) || !$(c) || !c.isCollapsed() || c.is(d)) return;
    const f = c.anchor.key, p = c.anchor.offset, g = l._nodeMap.get(f);
    !z(g) || !a.has(f) || p !== 1 && p > d.anchor.offset + 1 || e.update(() => {
      if (!Ht(g)) return;
      const h = g.getParent();
      h === null || ga(h) || i(h, g, c.anchor.offset);
    });
  });
}
function j_(e, n = gn, t, r = !1, o = !1) {
  const i = r ? e : (function(s, a = !1) {
    const l = s.split(`
`);
    let u = !1;
    const c = [];
    for (let d = 0; d < l.length; d++) {
      const f = l[d].trimEnd(), p = c[c.length - 1];
      x_.test(f) ? c.push(f) : gg.test(f) || ws.test(f) ? (u = !u, c.push(f)) : u || f === "" || p === "" || !p || _s.test(p) || _s.test(f) || fg.test(f) || cg.test(f) || dg.test(f) || v_.test(f) || __.test(f) || w_.test(f) || !a || Nu.test(f) || Ru.test(f) || Tu(Ru).test(p) || Tu(Nu).test(p) || ws.test(p) ? c.push(f) : c[c.length - 1] = p + " " + f.trimStart();
    }
    return c.join(`
`);
  })(e, o);
  return h_(n, r)(i, t);
}
function G_(e = gn, n, t = !1) {
  return (function(o, i = !1) {
    const s = ha(o), a = [...s.multilineElement, ...s.element], l = !i, u = s.textFormat.filter((c) => c.format.length === 1).sort((c, d) => Number(c.format.includes("code")) - Number(d.format.includes("code")));
    return (c) => {
      const d = [], f = (c || ge()).getChildren();
      for (let p = 0; p < f.length; p++) {
        const g = f[p], h = g_(g, a, u, s.textMatch);
        h != null && d.push(l && p > 0 && !xs(g) && !xs(f[p - 1]) ? `
`.concat(h) : h);
      }
      return d.join(`
`);
    };
  })(e, t)(n);
}
function Fu(e, n) {
  return e.getEditorState().read(() => {
    const t = me(n);
    return t !== null && t.isSelected();
  });
}
function H_(e) {
  const [n] = it(), [t, r] = Qt(() => Fu(n, e));
  return ze(() => {
    let o = !0;
    const i = n.registerUpdateListener(() => {
      o && r(Fu(n, e));
    });
    return () => {
      o = !1, i();
    };
  }, [n, e]), [t, Mn((o) => {
    n.update(() => {
      let i = V();
      Te(i) || (i = Bs(), Ne(i)), Te(i) && (o ? i.add(e) : i.delete(e));
    });
  }, [n, e]), Mn(() => {
    n.update(() => {
      const o = V();
      Te(o) && o.clear();
    });
  }, [n])];
}
function K_({ nodeKey: e }) {
  const [n] = it(), [t, r, o] = H_(e);
  return ze(() => Et(n.registerCommand($s, (i) => {
    const s = n.getElementByKey(e);
    return i.target === s && (i.shiftKey || o(), r(!t), !0);
  }, kn)), [o, n, t, e, r]), ze(() => {
    const i = n.getElementByKey(e), s = n._config.theme.hrSelected ?? "selected";
    i !== null && (t ? ot(i, s) : Wo(i, s));
  }, [n, t, e]), null;
}
class ei extends Ir {
  static getType() {
    return "horizontalrule";
  }
  static clone(n) {
    return new ei(n.__key);
  }
  static importJSON(n) {
    return ya().updateFromJSON(n);
  }
  static importDOM() {
    return { hr: () => ({ conversion: W_, priority: 0 }) };
  }
  decorate() {
    return x(K_, { nodeKey: this.__key });
  }
}
function W_() {
  return { node: ya() };
}
function ya() {
  return qe(new ei());
}
const q_ = [{ dependencies: [ei], export: (e) => Yv(e) ? "***" : null, regExp: /^(---|\*\*\*|___)\s?$/, replace: (e, n, t, r) => {
  const o = ya();
  r || e.getNextSibling() != null ? e.replace(o) : e.insertBefore(o), o.selectNext();
}, type: "element" }, ...gn];
function Z_({ transformers: e = q_ }) {
  const [n] = it();
  return ze(() => U_(n, e), [n, e]), null;
}
const J_ = C.lazy(() => import("./index-CLIixv8m.js")), Y_ = {
  paragraph: "mb-2 last:mb-0 text-slate-900 dark:text-slate-100",
  heading: {
    h1: "text-3xl font-bold mb-4 mt-6 first:mt-0 text-slate-900 dark:text-white",
    h2: "text-2xl font-bold mb-3 mt-5 first:mt-0 text-slate-900 dark:text-white",
    h3: "text-xl font-bold mb-2 mt-4 first:mt-0 text-slate-900 dark:text-slate-100"
  },
  list: {
    ul: "list-disc list-inside mb-2 ml-4 text-slate-900 dark:text-slate-100",
    ol: "list-decimal list-inside mb-2 ml-4 text-slate-900 dark:text-slate-100",
    listitem: "mb-1"
  },
  link: "text-primary hover:underline cursor-pointer",
  text: {
    bold: "font-bold",
    italic: "italic",
    underline: "underline",
    strikethrough: "line-through",
    code: "bg-muted text-slate-900 dark:text-slate-100 px-1.5 py-0.5 rounded font-mono text-sm"
  },
  code: "bg-muted text-slate-900 dark:text-slate-100 p-4 rounded-lg font-mono text-sm block my-4",
  quote: "border-l-4 border-primary pl-4 italic my-4 text-slate-700 dark:text-slate-300"
};
function X_({
  mode: e,
  onModeChange: n,
  onAIClick: t,
  showAI: r = !0
}) {
  const [o] = it(), i = () => {
    o.dispatchCommand(ct, "bold");
  }, s = () => {
    o.dispatchCommand(ct, "italic");
  }, a = (c) => {
    o.update(() => {
      const d = V();
      $(d) && $l(d, () => Zt(`h${c}`));
    });
  };
  return /* @__PURE__ */ L("div", { className: "flex items-center justify-between border-b border-border bg-muted/30 px-2 py-1.5", children: [
    /* @__PURE__ */ L("div", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ L("div", { className: "flex items-center gap-0.5 mr-2 border-r border-border pr-2", children: [
        /* @__PURE__ */ x(
          le,
          {
            variant: e === "rich" ? "default" : "ghost",
            size: "sm",
            onClick: () => {
              n("rich");
            },
            title: "Rich Text Mode",
            className: "h-8 px-2",
            children: /* @__PURE__ */ x(Bu, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ x(
          le,
          {
            variant: e === "code" ? "default" : "ghost",
            size: "sm",
            onClick: () => {
              n("code");
            },
            title: "Code Mode",
            className: "h-8 px-2",
            children: /* @__PURE__ */ x(Lu, { className: "h-4 w-4" })
          }
        )
      ] }),
      e === "rich" && /* @__PURE__ */ L(tt, { children: [
        /* @__PURE__ */ x(
          le,
          {
            variant: "ghost",
            size: "sm",
            onClick: i,
            title: "Bold (⌘B)",
            className: "h-8 px-2",
            children: /* @__PURE__ */ x(Tg, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ x(
          le,
          {
            variant: "ghost",
            size: "sm",
            onClick: s,
            title: "Italic (⌘I)",
            className: "h-8 px-2",
            children: /* @__PURE__ */ x(Lg, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ x("div", { className: "w-px h-6 bg-border mx-1" }),
        /* @__PURE__ */ x(
          le,
          {
            variant: "ghost",
            size: "sm",
            onClick: () => {
              a(1);
            },
            title: "Heading 1",
            className: "h-8 px-2",
            children: /* @__PURE__ */ x($g, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ x(
          le,
          {
            variant: "ghost",
            size: "sm",
            onClick: () => {
              a(2);
            },
            title: "Heading 2",
            className: "h-8 px-2",
            children: /* @__PURE__ */ x(Mg, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ x("div", { className: "w-px h-6 bg-border mx-1" }),
        /* @__PURE__ */ x(
          le,
          {
            variant: "ghost",
            size: "sm",
            onClick: () => {
              o.dispatchCommand(og, void 0);
            },
            title: "Bullet List",
            className: "h-8 px-2",
            children: /* @__PURE__ */ x(Dg, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ x(
          le,
          {
            variant: "ghost",
            size: "sm",
            onClick: () => {
              o.update(() => {
                const c = V();
                $(c) && $l(c, () => Jo());
              });
            },
            title: "Quote",
            className: "h-8 px-2",
            children: /* @__PURE__ */ x(Bg, { className: "h-4 w-4" })
          }
        )
      ] })
    ] }),
    r && t && /* @__PURE__ */ L(
      le,
      {
        variant: "gradient-purple",
        size: "sm",
        onClick: t,
        className: "h-8 px-3 gap-1.5",
        title: "Ask AI for help",
        children: [
          /* @__PURE__ */ x(zu, { className: "h-4 w-4" }),
          /* @__PURE__ */ x("span", { className: "hidden sm:inline", children: "Ask AI" })
        ]
      }
    )
  ] });
}
function Q_({
  value: e,
  onChange: n,
  isInitialized: t,
  setIsInitialized: r
}) {
  const [o] = it(), i = C.useRef(!1);
  return C.useEffect(() => {
    !t && e && (i.current = !0, o.update(() => {
      j_(e, gn);
    }, {
      // Use discrete update to batch this and prevent intermediate onChange
      discrete: !0
    }), requestAnimationFrame(() => {
      i.current = !1, r(!0);
    }));
  }, [o, e, t, r]), C.useEffect(() => {
    if (n)
      return o.registerUpdateListener(({ editorState: s, tags: a }) => {
        i.current || a.has("history-merge") || s.read(() => {
          const l = G_(gn);
          n(l);
        });
      });
  }, [o, n]), null;
}
const ew = C.forwardRef(
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
    const [f, p] = C.useState(t), [g, h] = C.useState(e), [m, v] = C.useState(!1), [y, b] = C.useState(0), _ = C.useRef(null), w = C.useRef(e), S = (B) => {
      B.editor.defineTheme("appski-dark", {
        base: "vs-dark",
        inherit: !0,
        rules: [
          // Markdown headings - make them bright and visible
          { token: "markup.heading", foreground: "e5c07b", fontStyle: "bold" },
          { token: "markup.heading.1", foreground: "c678dd", fontStyle: "bold" },
          { token: "markup.heading.2", foreground: "c678dd", fontStyle: "bold" },
          { token: "markup.heading.3", foreground: "c678dd", fontStyle: "bold" },
          { token: "entity.name.section", foreground: "c678dd", fontStyle: "bold" },
          // Alternative token names Monaco might use
          { token: "keyword.md", foreground: "c678dd" },
          { token: "string.link.md", foreground: "61afef" },
          { token: "variable.md", foreground: "e06c75" },
          { token: "emphasis.md", foreground: "d4d4d4", fontStyle: "italic" },
          { token: "strong.md", foreground: "d4d4d4", fontStyle: "bold" },
          // Generic text should be clearly visible
          { token: "", foreground: "d4d4d4" }
        ],
        colors: {
          "editor.background": "#1e1e2e",
          "editor.foreground": "#d4d4d4"
        }
      });
    };
    C.useEffect(() => {
      e !== g && (h(e), f === "rich" && e !== w.current && (w.current = e, v(!1), b((B) => B + 1)));
    }, [e]);
    const k = C.useCallback((B) => {
      h(B), n == null || n(B);
    }, [n]), N = C.useCallback((B) => {
      B === "rich" && (v(!1), b((D) => D + 1)), p(B);
    }, []), E = (B) => {
      _.current = B;
    }, R = C.useCallback(() => {
      var D, U;
      if (!o) return;
      let B = "";
      if (f === "rich")
        B = ((D = window.getSelection()) == null ? void 0 : D.toString()) || "";
      else {
        const q = _.current;
        if (q) {
          const H = q.getSelection();
          H && (B = ((U = q.getModel()) == null ? void 0 : U.getValueInRange(H)) || "");
        }
      }
      o(B, g);
    }, [f, g, o]), O = {
      namespace: "HybridEditor",
      theme: Y_,
      onError: (B) => {
        console.error("Lexical error:", B);
      },
      nodes: [
        Yo,
        Zo,
        mn,
        Ut,
        Xo,
        pa,
        yn
      ],
      editable: !l
    }, I = a ? { minHeight: s, maxHeight: a, overflowY: "auto" } : { minHeight: s };
    return /* @__PURE__ */ x(
      "div",
      {
        ref: d,
        className: P(
          "rounded-lg border border-border bg-background overflow-hidden",
          l && "opacity-60 pointer-events-none",
          u
        ),
        children: f === "rich" ? /* @__PURE__ */ L(kv, { initialConfig: O, children: [
          /* @__PURE__ */ x(
            X_,
            {
              mode: f,
              onModeChange: N,
              onAIClick: o ? R : void 0,
              showAI: r
            }
          ),
          /* @__PURE__ */ L("div", { className: "relative", style: I, children: [
            /* @__PURE__ */ x(
              Cx,
              {
                contentEditable: /* @__PURE__ */ x(
                  Rx,
                  {
                    className: "outline-none px-4 py-3 prose prose-sm max-w-none dark:prose-invert text-slate-900 dark:text-slate-100",
                    style: { minHeight: s }
                  }
                ),
                placeholder: /* @__PURE__ */ x("div", { className: "absolute top-3 left-4 text-muted-foreground pointer-events-none", children: i }),
                ErrorBoundary: Lx
              }
            ),
            /* @__PURE__ */ x(Ox, {}),
            /* @__PURE__ */ x(Jx, {}),
            /* @__PURE__ */ x(Z_, { transformers: gn }),
            /* @__PURE__ */ x(
              Q_,
              {
                value: g,
                onChange: k,
                isInitialized: m,
                setIsInitialized: v
              }
            )
          ] })
        ] }, y) : /* @__PURE__ */ L(tt, { children: [
          /* @__PURE__ */ L("div", { className: "flex items-center justify-between border-b border-border bg-muted/30 px-2 py-1.5", children: [
            /* @__PURE__ */ L("div", { className: "flex items-center gap-0.5", children: [
              /* @__PURE__ */ x(
                le,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: () => {
                    N("rich");
                  },
                  title: "Rich Text Mode",
                  className: "h-8 px-2",
                  children: /* @__PURE__ */ x(Bu, { className: "h-4 w-4" })
                }
              ),
              /* @__PURE__ */ x(
                le,
                {
                  variant: "default",
                  size: "sm",
                  onClick: () => {
                    N("code");
                  },
                  title: "Code Mode",
                  className: "h-8 px-2",
                  children: /* @__PURE__ */ x(Lu, { className: "h-4 w-4" })
                }
              )
            ] }),
            r && o && /* @__PURE__ */ L(
              le,
              {
                variant: "gradient-purple",
                size: "sm",
                onClick: R,
                className: "h-8 px-3 gap-1.5",
                title: "Ask AI for help",
                children: [
                  /* @__PURE__ */ x(zu, { className: "h-4 w-4" }),
                  /* @__PURE__ */ x("span", { className: "hidden sm:inline", children: "Ask AI" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ x(C.Suspense, { fallback: /* @__PURE__ */ x(
            "div",
            {
              className: "flex items-center justify-center bg-slate-900 text-slate-400",
              style: { height: a || s },
              children: /* @__PURE__ */ L("div", { className: "text-center", children: [
                /* @__PURE__ */ x("div", { className: "inline-block animate-spin rounded-full h-8 w-8 border-2 border-slate-600 border-t-purple-500 mb-2" }),
                /* @__PURE__ */ x("p", { className: "text-sm", children: "Loading editor..." })
              ] })
            }
          ), children: /* @__PURE__ */ x(
            J_,
            {
              height: a || s,
              defaultLanguage: "markdown",
              value: g,
              onChange: (B) => {
                k(B || "");
              },
              beforeMount: S,
              onMount: E,
              theme: c === "vs-dark" ? "appski-dark" : c,
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
          ) })
        ] })
      }
    );
  }
);
ew.displayName = "HybridEditor";
export {
  Nm as Alert,
  Tm as AlertDescription,
  Rm as AlertTitle,
  Sm as Avatar,
  Zu as Badge,
  tc as Breadcrumb,
  le as Button,
  qu as Card,
  Fp as CardContent,
  Ap as CardDescription,
  Ip as CardFooter,
  Rp as CardHeader,
  Tp as CardTitle,
  mh as Checkbox,
  yh as CheckboxGroup,
  My as CodeBlock,
  kw as ConfirmDialog,
  Sw as ConnectionStatus,
  yw as DataTable,
  ch as Dialog,
  gh as DialogClose,
  oc as DialogContent,
  lc as DialogDescription,
  sc as DialogFooter,
  ic as DialogHeader,
  rc as DialogOverlay,
  fh as DialogPortal,
  ac as DialogTitle,
  dh as DialogTrigger,
  lw as Dropdown,
  cw as DropdownContent,
  fw as DropdownItem,
  dw as DropdownLabel,
  gw as DropdownSeparator,
  pw as DropdownSubmenu,
  mw as DropdownSubmenuContent,
  hw as DropdownSubmenuTrigger,
  uw as DropdownTrigger,
  xw as EmptyState,
  _w as ErrorState,
  ew as HybridEditor,
  Wu as Input,
  Mp as Loading,
  _p as LoadingButton,
  ww as MetricCard,
  iw as ModalFooter,
  ah as PageHeader,
  gm as RadioGroup,
  pm as RadioGroupItem,
  Ep as Select,
  Lp as Skeleton,
  Ju as Spinner,
  Cm as StatusIndicator,
  xh as Switch,
  _h as SwitchGroup,
  Bp as Tabs,
  jp as TabsContent,
  Vp as TabsList,
  Up as TabsTrigger,
  Sh as Textarea,
  Mc as ToastContainer,
  $c as ToastItem,
  aw as ToastProvider,
  Cw as Tooltip,
  sw as ViewModeToggle,
  Op as badgeVariants,
  rh as breadcrumbItemVariants,
  oh as breadcrumbSeparatorVariants,
  nh as breadcrumbVariants,
  xp as buttonVariants,
  Np as cardVariants,
  ph as checkboxVariants,
  P as cn,
  vw as createSelectionColumn,
  bw as createSortableHeader,
  uh as dialogContentVariants,
  lh as dialogOverlayVariants,
  bm as dropdownContentVariants,
  Pc as dropdownItemVariants,
  wp as inputVariants,
  ih as pageHeaderVariants,
  Cp as selectVariants,
  Pp as skeletonVariants,
  $p as spinnerVariants,
  Ra as statusIndicatorVariants,
  vh as switchThumbVariants,
  bh as switchVariants,
  Dp as tabsListVariants,
  zp as tabsTriggerVariants,
  wh as textareaVariants,
  ym as useToast
};
//# sourceMappingURL=index.es.js.map
