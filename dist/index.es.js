var Ly = Object.defineProperty;
var zy = (e, n, t) => n in e ? Ly(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var F = (e, n, t) => zy(e, typeof n != "symbol" ? n + "" : n, t);
import { jsx as w, jsxs as M, Fragment as st } from "react/jsx-runtime";
import * as x from "react";
import de, { forwardRef as Ii, createElement as ur, useCallback as dr, useMemo as vr, createContext as of, useContext as By, useLayoutEffect as xr, useEffect as He, useState as rn, useRef as Vy, Suspense as jy, Component as Uy } from "react";
import * as sf from "react-dom";
import Gy, { createPortal as af, flushSync as Wy } from "react-dom";
function lf(e) {
  var n, t, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (n = 0; n < o; n++) e[n] && (t = lf(e[n])) && (r && (r += " "), r += t);
  } else for (t in e) e[t] && (r && (r += " "), r += t);
  return r;
}
function Oi() {
  for (var e, n, t = 0, r = "", o = arguments.length; t < o; t++) (e = arguments[t]) && (n = lf(e)) && (r && (r += " "), r += n);
  return r;
}
const yc = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, bc = Oi, Y = (e, n) => (t) => {
  var r;
  if ((n == null ? void 0 : n.variants) == null) return bc(e, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
  const { variants: o, defaultVariants: i } = n, s = Object.keys(o).map((c) => {
    const u = t == null ? void 0 : t[c], d = i == null ? void 0 : i[c];
    if (u === null) return null;
    const f = yc(u) || yc(d);
    return o[c][f];
  }), a = t && Object.entries(t).reduce((c, u) => {
    let [d, f] = u;
    return f === void 0 || (c[d] = f), c;
  }, {}), l = n == null || (r = n.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((c, u) => {
    let { class: d, className: f, ...g } = u;
    return Object.entries(g).every((p) => {
      let [h, m] = p;
      return Array.isArray(m) ? m.includes({
        ...i,
        ...a
      }[h]) : {
        ...i,
        ...a
      }[h] === m;
    }) ? [
      ...c,
      d,
      f
    ] : c;
  }, []);
  return bc(e, s, l, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hy = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), cf = (...e) => e.filter((n, t, r) => !!n && n.trim() !== "" && r.indexOf(n) === t).join(" ").trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ky = {
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
const qy = Ii(
  ({
    color: e = "currentColor",
    size: n = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: i,
    iconNode: s,
    ...a
  }, l) => ur(
    "svg",
    {
      ref: l,
      ...Ky,
      width: n,
      height: n,
      stroke: e,
      strokeWidth: r ? Number(t) * 24 / Number(n) : t,
      className: cf("lucide", o),
      ...a
    },
    [
      ...s.map(([c, u]) => ur(c, u)),
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
const oe = (e, n) => {
  const t = Ii(
    ({ className: r, ...o }, i) => ur(qy, {
      ref: i,
      iconNode: n,
      className: cf(`lucide-${Hy(e)}`, r),
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
const Yy = oe("ArrowUpDown", [
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
const Zy = oe("Bold", [
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
const Xo = oe("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $i = oe("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jy = oe("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xy = oe("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uf = oe("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qy = oe("ChevronsLeft", [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eb = oe("ChevronsRight", [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tb = oe("ChevronsUpDown", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nb = oe("CircleAlert", [
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
const rb = oe("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ob = oe("CircleX", [
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
const ib = oe("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const df = oe("CodeXml", [
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
const vc = oe("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sb = oe("Ellipsis", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ab = oe("Heading1", [
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
const lb = oe("Heading2", [
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
const cb = oe("House", [
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
const oa = oe("Info", [
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
const ub = oe("Italic", [
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
const db = oe("List", [
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
const ff = oe("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fb = oe("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gb = oe("Quote", [
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
const xc = oe("RefreshCw", [
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
const gf = oe("Sparkles", [
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
const Zr = oe("TriangleAlert", [
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
const pf = oe("Type", [
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
const pb = oe("Wifi", [
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
const hf = oe("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), nl = "-", hb = (e) => {
  const n = yb(e), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (s) => {
      const a = s.split(nl);
      return a[0] === "" && a.length !== 1 && a.shift(), mf(a, n) || mb(s);
    },
    getConflictingClassGroupIds: (s, a) => {
      const l = t[s] || [];
      return a && r[s] ? [...l, ...r[s]] : l;
    }
  };
}, mf = (e, n) => {
  var s;
  if (e.length === 0)
    return n.classGroupId;
  const t = e[0], r = n.nextPart.get(t), o = r ? mf(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (n.validators.length === 0)
    return;
  const i = e.join(nl);
  return (s = n.validators.find(({
    validator: a
  }) => a(i))) == null ? void 0 : s.classGroupId;
}, wc = /^\[(.+)\]$/, mb = (e) => {
  if (wc.test(e)) {
    const n = wc.exec(e)[1], t = n == null ? void 0 : n.substring(0, n.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}, yb = (e) => {
  const {
    theme: n,
    prefix: t
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return vb(Object.entries(e.classGroups), t).forEach(([i, s]) => {
    ia(s, r, i, n);
  }), r;
}, ia = (e, n, t, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const i = o === "" ? n : _c(n, o);
      i.classGroupId = t;
      return;
    }
    if (typeof o == "function") {
      if (bb(o)) {
        ia(o(r), n, t, r);
        return;
      }
      n.validators.push({
        validator: o,
        classGroupId: t
      });
      return;
    }
    Object.entries(o).forEach(([i, s]) => {
      ia(s, _c(n, i), t, r);
    });
  });
}, _c = (e, n) => {
  let t = e;
  return n.split(nl).forEach((r) => {
    t.nextPart.has(r) || t.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(r);
  }), t;
}, bb = (e) => e.isThemeGetter, vb = (e, n) => n ? e.map(([t, r]) => {
  const o = r.map((i) => typeof i == "string" ? n + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([s, a]) => [n + s, a])) : i);
  return [t, o];
}) : e, xb = (e) => {
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
}, yf = "!", wb = (e) => {
  const {
    separator: n,
    experimentalParseClassName: t
  } = e, r = n.length === 1, o = n[0], i = n.length, s = (a) => {
    const l = [];
    let c = 0, u = 0, d;
    for (let m = 0; m < a.length; m++) {
      let b = a[m];
      if (c === 0) {
        if (b === o && (r || a.slice(m, m + i) === n)) {
          l.push(a.slice(u, m)), u = m + i;
          continue;
        }
        if (b === "/") {
          d = m;
          continue;
        }
      }
      b === "[" ? c++ : b === "]" && c--;
    }
    const f = l.length === 0 ? a : a.substring(u), g = f.startsWith(yf), p = g ? f.substring(1) : f, h = d && d > u ? d - u : void 0;
    return {
      modifiers: l,
      hasImportantModifier: g,
      baseClassName: p,
      maybePostfixModifierPosition: h
    };
  };
  return t ? (a) => t({
    className: a,
    parseClassName: s
  }) : s;
}, _b = (e) => {
  if (e.length <= 1)
    return e;
  const n = [];
  let t = [];
  return e.forEach((r) => {
    r[0] === "[" ? (n.push(...t.sort(), r), t = []) : t.push(r);
  }), n.push(...t.sort()), n;
}, Sb = (e) => ({
  cache: xb(e.cacheSize),
  parseClassName: wb(e),
  ...hb(e)
}), Cb = /\s+/, Eb = (e, n) => {
  const {
    parseClassName: t,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = n, i = [], s = e.trim().split(Cb);
  let a = "";
  for (let l = s.length - 1; l >= 0; l -= 1) {
    const c = s[l], {
      modifiers: u,
      hasImportantModifier: d,
      baseClassName: f,
      maybePostfixModifierPosition: g
    } = t(c);
    let p = !!g, h = r(p ? f.substring(0, g) : f);
    if (!h) {
      if (!p) {
        a = c + (a.length > 0 ? " " + a : a);
        continue;
      }
      if (h = r(f), !h) {
        a = c + (a.length > 0 ? " " + a : a);
        continue;
      }
      p = !1;
    }
    const m = _b(u).join(":"), b = d ? m + yf : m, y = b + h;
    if (i.includes(y))
      continue;
    i.push(y);
    const v = o(h, p);
    for (let _ = 0; _ < v.length; ++_) {
      const S = v[_];
      i.push(b + S);
    }
    a = c + (a.length > 0 ? " " + a : a);
  }
  return a;
};
function kb() {
  let e = 0, n, t, r = "";
  for (; e < arguments.length; )
    (n = arguments[e++]) && (t = bf(n)) && (r && (r += " "), r += t);
  return r;
}
const bf = (e) => {
  if (typeof e == "string")
    return e;
  let n, t = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (n = bf(e[r])) && (t && (t += " "), t += n);
  return t;
};
function Nb(e, ...n) {
  let t, r, o, i = s;
  function s(l) {
    const c = n.reduce((u, d) => d(u), e());
    return t = Sb(c), r = t.cache.get, o = t.cache.set, i = a, a(l);
  }
  function a(l) {
    const c = r(l);
    if (c)
      return c;
    const u = Eb(l, t);
    return o(l, u), u;
  }
  return function() {
    return i(kb.apply(null, arguments));
  };
}
const fe = (e) => {
  const n = (t) => t[e] || [];
  return n.isThemeGetter = !0, n;
}, vf = /^\[(?:([a-z-]+):)?(.+)\]$/i, Rb = /^\d+\/\d+$/, Ab = /* @__PURE__ */ new Set(["px", "full", "screen"]), Tb = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Fb = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Pb = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Ib = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Ob = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Tt = (e) => nr(e) || Ab.has(e) || Rb.test(e), Kt = (e) => wr(e, "length", jb), nr = (e) => !!e && !Number.isNaN(Number(e)), vs = (e) => wr(e, "number", nr), $r = (e) => !!e && Number.isInteger(Number(e)), $b = (e) => e.endsWith("%") && nr(e.slice(0, -1)), Q = (e) => vf.test(e), qt = (e) => Tb.test(e), Mb = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Db = (e) => wr(e, Mb, xf), Lb = (e) => wr(e, "position", xf), zb = /* @__PURE__ */ new Set(["image", "url"]), Bb = (e) => wr(e, zb, Gb), Vb = (e) => wr(e, "", Ub), Mr = () => !0, wr = (e, n, t) => {
  const r = vf.exec(e);
  return r ? r[1] ? typeof n == "string" ? r[1] === n : n.has(r[1]) : t(r[2]) : !1;
}, jb = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Fb.test(e) && !Pb.test(e)
), xf = () => !1, Ub = (e) => Ib.test(e), Gb = (e) => Ob.test(e), Wb = () => {
  const e = fe("colors"), n = fe("spacing"), t = fe("blur"), r = fe("brightness"), o = fe("borderColor"), i = fe("borderRadius"), s = fe("borderSpacing"), a = fe("borderWidth"), l = fe("contrast"), c = fe("grayscale"), u = fe("hueRotate"), d = fe("invert"), f = fe("gap"), g = fe("gradientColorStops"), p = fe("gradientColorStopPositions"), h = fe("inset"), m = fe("margin"), b = fe("opacity"), y = fe("padding"), v = fe("saturate"), _ = fe("scale"), S = fe("sepia"), C = fe("skew"), E = fe("space"), N = fe("translate"), k = () => ["auto", "contain", "none"], R = () => ["auto", "hidden", "clip", "visible", "scroll"], A = () => ["auto", Q, n], T = () => [Q, n], D = () => ["", Tt, Kt], O = () => ["auto", nr, Q], B = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], W = () => ["solid", "dashed", "dotted", "double", "none"], U = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], j = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], q = () => ["", "0", Q], te = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], ie = () => [nr, Q];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Mr],
      spacing: [Tt, Kt],
      blur: ["none", "", qt, Q],
      brightness: ie(),
      borderColor: [e],
      borderRadius: ["none", "", "full", qt, Q],
      borderSpacing: T(),
      borderWidth: D(),
      contrast: ie(),
      grayscale: q(),
      hueRotate: ie(),
      invert: q(),
      gap: T(),
      gradientColorStops: [e],
      gradientColorStopPositions: [$b, Kt],
      inset: A(),
      margin: A(),
      opacity: ie(),
      padding: T(),
      saturate: ie(),
      scale: ie(),
      sepia: q(),
      skew: ie(),
      space: T(),
      translate: T()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", Q]
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
        columns: [qt]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": te()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": te()
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
        object: [...B(), Q]
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
        overscroll: k()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": k()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": k()
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
        z: ["auto", $r, Q]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: A()
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
        flex: ["1", "auto", "initial", "none", Q]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: q()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: q()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", $r, Q]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Mr]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", $r, Q]
        }, Q]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": O()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": O()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Mr]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [$r, Q]
        }, Q]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": O()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": O()
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
        "auto-cols": ["auto", "min", "max", "fr", Q]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", Q]
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
        justify: ["normal", ...j()]
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
        content: ["normal", ...j(), "baseline"]
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
        "place-content": [...j(), "baseline"]
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
        "space-x": [E]
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
        "space-y": [E]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Q, n]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [Q, n, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [Q, n, "none", "full", "min", "max", "fit", "prose", {
          screen: [qt]
        }, qt]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [Q, n, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [Q, n, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [Q, n, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [Q, n, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", qt, Kt]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", vs]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Mr]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Q]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", nr, vs]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Tt, Q]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Q]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", Q]
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
        "placeholder-opacity": [b]
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
        "text-opacity": [b]
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
        decoration: [...W(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Tt, Kt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Tt, Q]
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
        indent: T()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Q]
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
        content: ["none", Q]
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
        "bg-opacity": [b]
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
        bg: [...B(), Lb]
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
        bg: ["auto", "cover", "contain", Db]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Bb]
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
        from: [p]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [p]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [p]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [g]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [g]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [g]
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
        "border-opacity": [b]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...W(), "hidden"]
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
        "divide-opacity": [b]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: W()
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
        outline: ["", ...W()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Tt, Q]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Tt, Kt]
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
        ring: D()
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
        "ring-opacity": [b]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Tt, Kt]
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
        shadow: ["", "inner", "none", qt, Vb]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Mr]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [b]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...U(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": U()
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
        "drop-shadow": ["", "none", qt, Q]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [c]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [u]
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
        saturate: [v]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [S]
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
        "backdrop-grayscale": [c]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [u]
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
        "backdrop-opacity": [b]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [v]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [S]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Q]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: ie()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", Q]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: ie()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", Q]
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
        rotate: [$r, Q]
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
        "skew-x": [C]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [C]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Q]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Q]
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
        "scroll-m": T()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": T()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": T()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": T()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": T()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": T()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": T()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": T()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": T()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": T()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": T()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": T()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": T()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": T()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": T()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": T()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": T()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": T()
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
        "will-change": ["auto", "scroll", "contents", "transform", Q]
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
        stroke: [Tt, Kt, vs]
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
}, Hb = /* @__PURE__ */ Nb(Wb);
function I(...e) {
  return Hb(Oi(e));
}
const Kb = Y(
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
), ue = x.forwardRef(
  ({ className: e, variant: n, size: t, isLoading: r, loadingText: o, children: i, disabled: s, ...a }, l) => /* @__PURE__ */ w(
    "button",
    {
      className: I(Kb({ variant: n, size: t, className: e })),
      ref: l,
      disabled: s ?? r,
      "aria-busy": r,
      ...a,
      children: r ? /* @__PURE__ */ M(st, { children: [
        /* @__PURE__ */ w(ff, { className: "mr-2 h-4 w-4 animate-spin", "aria-hidden": "true" }),
        /* @__PURE__ */ w("span", { children: o ?? i })
      ] }) : i
    }
  )
);
ue.displayName = "Button";
const qb = x.forwardRef(
  ({ loading: e = !1, loadingText: n, children: t, ...r }, o) => {
    const i = {
      ...r,
      isLoading: e,
      ...n && { loadingText: n }
    };
    return /* @__PURE__ */ w(ue, { ref: o, ...i, children: t });
  }
);
qb.displayName = "LoadingButton";
function aT({
  onCancel: e,
  onConfirm: n,
  cancelText: t = "Cancel",
  confirmText: r = "Confirm",
  confirmDisabled: o = !1,
  confirmLoading: i = !1,
  confirmLoadingText: s,
  confirmVariant: a = "default",
  cancelVariant: l = "outline",
  className: c,
  buttonContainerClassName: u,
  children: d,
  confirmType: f = "button",
  hideCancelButton: g = !1
}) {
  return /* @__PURE__ */ M(
    "div",
    {
      className: I(
        "flex items-center justify-between gap-3 border-t border-slate-200 bg-slate-50 px-6 py-4 dark:border-slate-800 dark:bg-slate-900/50",
        c
      ),
      children: [
        d && /* @__PURE__ */ w("div", { className: "flex-1", children: d }),
        /* @__PURE__ */ M(
          "div",
          {
            className: I("flex items-center gap-3", !d && "ml-auto", u),
            children: [
              !g && /* @__PURE__ */ w(ue, { type: "button", onClick: e, variant: l, children: t }),
              /* @__PURE__ */ w(
                ue,
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
function lT({
  value: e,
  onChange: n,
  options: t,
  className: r,
  size: o = "icon"
}) {
  return /* @__PURE__ */ w(
    "div",
    {
      className: I(
        "flex items-center gap-1 rounded-lg bg-slate-200 p-1 dark:bg-slate-700",
        r
      ),
      role: "group",
      "aria-label": "View mode toggle",
      children: t.map((i) => /* @__PURE__ */ w(
        ue,
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
const Yb = Y(
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
), Zb = Y(
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
), wf = x.forwardRef(
  ({ className: e, variant: n, inputSize: t, label: r, error: o, helperText: i, id: s, type: a = "text", ...l }, c) => {
    const u = x.useId(), d = s ?? u, f = `${d}-error`, g = `${d}-helper`, p = !!o, h = p ? "error" : n;
    return /* @__PURE__ */ M("div", { className: "flex flex-col gap-1.5", children: [
      r && /* @__PURE__ */ w("label", { htmlFor: d, className: I(Zb({ variant: h })), children: r }),
      /* @__PURE__ */ w(
        "input",
        {
          type: a,
          id: d,
          className: I(Yb({ variant: h, inputSize: t, className: e })),
          ref: c,
          "aria-invalid": p,
          "aria-describedby": p ? f : i ? g : void 0,
          ...l
        }
      ),
      p && /* @__PURE__ */ w("p", { id: f, className: "text-destructive text-sm", role: "alert", children: o }),
      !p && i && /* @__PURE__ */ w("p", { id: g, className: "text-muted-foreground text-sm", children: i })
    ] });
  }
);
wf.displayName = "Input";
const Jb = Y(
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
), Xb = Y(
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
), Qb = x.forwardRef(
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
    children: c,
    ...u
  }, d) => {
    const f = x.useId(), g = l ?? f, p = `${g}-error`, h = `${g}-helper`, m = !!s, b = m ? "error" : n, y = () => c || (r ? /* @__PURE__ */ M(st, { children: [
      i && /* @__PURE__ */ w("option", { value: "", disabled: !0, children: i }),
      r.map((v) => /* @__PURE__ */ w("option", { value: v.value, disabled: v.disabled, children: v.label }, v.value))
    ] }) : null);
    return /* @__PURE__ */ M("div", { className: "flex flex-col gap-1.5", children: [
      o && /* @__PURE__ */ w("label", { htmlFor: g, className: I(Xb({ variant: b })), children: o }),
      /* @__PURE__ */ M("div", { className: "relative", children: [
        /* @__PURE__ */ w(
          "select",
          {
            id: g,
            className: I(
              Jb({ variant: b, selectSize: t, className: e }),
              "cursor-pointer appearance-none pr-10",
              // Ensure dropdown options have proper background/text colors
              "[&>option]:bg-background [&>option]:text-foreground"
            ),
            ref: d,
            "aria-invalid": m,
            "aria-describedby": m ? p : a ? h : void 0,
            ...u,
            children: y()
          }
        ),
        /* @__PURE__ */ w(
          $i,
          {
            className: "text-muted-foreground pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2",
            "aria-hidden": "true"
          }
        )
      ] }),
      m && /* @__PURE__ */ w("p", { id: p, className: "text-destructive text-sm", role: "alert", children: s }),
      !m && a && /* @__PURE__ */ w("p", { id: h, className: "text-muted-foreground text-sm", children: a })
    ] });
  }
);
Qb.displayName = "Select";
function Sc(e, n) {
  if (typeof e == "function")
    return e(n);
  e != null && (e.current = n);
}
function so(...e) {
  return (n) => {
    let t = !1;
    const r = e.map((o) => {
      const i = Sc(o, n);
      return !t && typeof i == "function" && (t = !0), i;
    });
    if (t)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : Sc(e[o], null);
        }
      };
  };
}
function ve(...e) {
  return x.useCallback(so(...e), e);
}
var ev = Symbol.for("react.lazy"), Qo = x[" use ".trim().toString()];
function tv(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function _f(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === ev && "_payload" in e && tv(e._payload);
}
// @__NO_SIDE_EFFECTS__
function nv(e) {
  const n = /* @__PURE__ */ rv(e), t = x.forwardRef((r, o) => {
    let { children: i, ...s } = r;
    _f(i) && typeof Qo == "function" && (i = Qo(i._payload));
    const a = x.Children.toArray(i), l = a.find(iv);
    if (l) {
      const c = l.props.children, u = a.map((d) => d === l ? x.Children.count(c) > 1 ? x.Children.only(null) : x.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ w(n, { ...s, ref: o, children: x.isValidElement(c) ? x.cloneElement(c, void 0, u) : null });
    }
    return /* @__PURE__ */ w(n, { ...s, ref: o, children: i });
  });
  return t.displayName = `${e}.Slot`, t;
}
// @__NO_SIDE_EFFECTS__
function rv(e) {
  const n = x.forwardRef((t, r) => {
    let { children: o, ...i } = t;
    if (_f(o) && typeof Qo == "function" && (o = Qo(o._payload)), x.isValidElement(o)) {
      const s = av(o), a = sv(i, o.props);
      return o.type !== x.Fragment && (a.ref = r ? so(r, s) : s), x.cloneElement(o, a);
    }
    return x.Children.count(o) > 1 ? x.Children.only(null) : null;
  });
  return n.displayName = `${e}.SlotClone`, n;
}
var ov = Symbol("radix.slottable");
function iv(e) {
  return x.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === ov;
}
function sv(e, n) {
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
function av(e) {
  var r, o;
  let n = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
var lv = [
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
], cv = lv.reduce((e, n) => {
  const t = /* @__PURE__ */ nv(`Primitive.${n}`), r = x.forwardRef((o, i) => {
    const { asChild: s, ...a } = o, l = s ? t : n;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ w(l, { ...a, ref: i });
  });
  return r.displayName = `Primitive.${n}`, { ...e, [n]: r };
}, {}), uv = "Label", Sf = x.forwardRef((e, n) => /* @__PURE__ */ w(
  cv.label,
  {
    ...e,
    ref: n,
    onMouseDown: (t) => {
      var o;
      t.target.closest("button, input, select, textarea") || ((o = e.onMouseDown) == null || o.call(e, t), !t.defaultPrevented && t.detail > 1 && t.preventDefault());
    }
  }
));
Sf.displayName = uv;
var Cf = Sf;
const dv = Y(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  {
    variants: {
      variant: {
        default: "text-foreground",
        error: "text-destructive",
        success: "text-success",
        muted: "text-muted-foreground"
      },
      size: {
        default: "text-sm",
        sm: "text-xs",
        lg: "text-base"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Ef = x.forwardRef(
  ({ className: e, variant: n, size: t, required: r, children: o, ...i }, s) => /* @__PURE__ */ M(
    Cf,
    {
      ref: s,
      className: I(dv({ variant: n, size: t }), e),
      ...i,
      children: [
        o,
        r && /* @__PURE__ */ w("span", { className: "text-destructive ml-1", children: "*" })
      ]
    }
  )
);
Ef.displayName = Cf.displayName;
const fv = Y("rounded-lg border bg-card text-card-foreground", {
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
    },
    /**
     * Status variant for active/inactive card states.
     * Uses left border accent for clear visual distinction.
     * Active uses pink accent, inactive uses muted gray.
     */
    status: {
      default: "",
      active: "border-l-4 border-l-pink-500",
      inactive: "border-l-4 border-l-muted-foreground/30"
    }
  },
  defaultVariants: {
    variant: "default",
    padding: "default",
    status: "default"
  }
}), kf = x.forwardRef(
  ({ className: e, variant: n, status: t, ...r }, o) => /* @__PURE__ */ w("div", { ref: o, className: I(fv({ variant: n, status: t, className: e })), ...r })
);
kf.displayName = "Card";
const gv = x.forwardRef(
  ({ className: e, ...n }, t) => /* @__PURE__ */ w("div", { ref: t, className: I("flex flex-col space-y-1.5 p-6", e), ...n })
);
gv.displayName = "CardHeader";
const pv = x.forwardRef(
  ({ className: e, as: n = "h3", ...t }, r) => /* @__PURE__ */ w(
    n,
    {
      ref: r,
      className: I("text-2xl leading-none font-semibold tracking-tight", e),
      ...t
    }
  )
);
pv.displayName = "CardTitle";
const hv = x.forwardRef(
  ({ className: e, ...n }, t) => /* @__PURE__ */ w("p", { ref: t, className: I("text-muted-foreground text-sm", e), ...n })
);
hv.displayName = "CardDescription";
const mv = x.forwardRef(
  ({ className: e, ...n }, t) => /* @__PURE__ */ w("div", { ref: t, className: I("p-6 pt-0", e), ...n })
);
mv.displayName = "CardContent";
const yv = x.forwardRef(
  ({ className: e, ...n }, t) => /* @__PURE__ */ w("div", { ref: t, className: I("flex items-center p-6 pt-0", e), ...n })
);
yv.displayName = "CardFooter";
const bv = Y(
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
), Nf = x.forwardRef(
  ({ className: e, variant: n, ...t }, r) => /* @__PURE__ */ w("div", { ref: r, className: I(bv({ variant: n }), e), ...t })
);
Nf.displayName = "Badge";
const vv = Y("animate-spin text-muted-foreground", {
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
}), Rf = x.forwardRef(
  ({ className: e, size: n, label: t = "Loading...", ...r }, o) => /* @__PURE__ */ w(
    ff,
    {
      ref: o,
      className: I(vv({ size: n, className: e })),
      "aria-label": t,
      role: "status",
      ...r
    }
  )
);
Rf.displayName = "Spinner";
const xv = x.forwardRef(
  ({ className: e, size: n = "default", message: t, fullScreen: r = !1, ...o }, i) => /* @__PURE__ */ w(
    "div",
    {
      ref: i,
      className: I(r ? "fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm" : "flex items-center justify-center p-4", e),
      role: "status",
      "aria-busy": "true",
      ...o,
      children: /* @__PURE__ */ M("div", { className: "flex flex-col items-center gap-2", children: [
        /* @__PURE__ */ w(Rf, { size: n, label: t ?? "Loading..." }),
        t && /* @__PURE__ */ w("p", { className: "text-muted-foreground text-sm", children: t })
      ] })
    }
  )
);
xv.displayName = "Loading";
const wv = Y("animate-pulse rounded-md bg-muted", {
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
}), _v = x.forwardRef(
  ({ className: e, variant: n, ...t }, r) => /* @__PURE__ */ w(
    "div",
    {
      ref: r,
      className: I(wv({ variant: n, className: e })),
      "aria-hidden": "true",
      ...t
    }
  )
);
_v.displayName = "Skeleton";
const Sv = Y(
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
), Cv = Y(
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
), Af = x.createContext(null);
function rl() {
  const e = x.useContext(Af);
  if (!e)
    throw new Error("Tabs components must be used within a Tabs provider");
  return e;
}
const Ev = x.forwardRef(
  ({ className: e, defaultValue: n, value: t, onValueChange: r, variant: o = "default", children: i, ...s }, a) => {
    const [l, c] = x.useState(n), u = t ?? l, d = x.useCallback(
      (f) => {
        t === void 0 && c(f), r == null || r(f);
      },
      [t, r]
    );
    return /* @__PURE__ */ w(Af.Provider, { value: { activeTab: u, setActiveTab: d, variant: o ?? "default" }, children: /* @__PURE__ */ w("div", { ref: a, className: I("w-full", e), ...s, children: i }) });
  }
);
Ev.displayName = "Tabs";
const kv = x.forwardRef(({ className: e, ...n }, t) => {
  const { variant: r } = rl();
  return /* @__PURE__ */ w(
    "div",
    {
      ref: t,
      role: "tablist",
      className: I(Sv({ variant: r, className: e })),
      ...n
    }
  );
});
kv.displayName = "TabsList";
const Nv = x.forwardRef(
  ({ className: e, value: n, children: t, disabled: r, ...o }, i) => {
    const { activeTab: s, setActiveTab: a, variant: l } = rl(), c = s === n, u = `tabpanel-${n}`, d = `tab-${n}`;
    return /* @__PURE__ */ w(
      "button",
      {
        ref: i,
        type: "button",
        role: "tab",
        id: d,
        "aria-selected": c,
        "aria-controls": u,
        "data-state": c ? "active" : "inactive",
        disabled: r,
        className: I(Cv({ variant: l, className: e })),
        onClick: () => {
          a(n);
        },
        tabIndex: c ? 0 : -1,
        ...o,
        children: t
      }
    );
  }
);
Nv.displayName = "TabsTrigger";
const Rv = x.forwardRef(
  ({ className: e, value: n, forceMount: t = !1, children: r, ...o }, i) => {
    const { activeTab: s } = rl(), a = s === n, l = `tabpanel-${n}`, c = `tab-${n}`;
    return !a && !t ? null : /* @__PURE__ */ w(
      "div",
      {
        ref: i,
        role: "tabpanel",
        id: l,
        "aria-labelledby": c,
        hidden: !a,
        tabIndex: 0,
        className: I(
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
Rv.displayName = "TabsContent";
var Tf = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Cc = de.createContext && /* @__PURE__ */ de.createContext(Tf), Av = ["attr", "size", "title"];
function Tv(e, n) {
  if (e == null) return {};
  var t = Fv(e, n), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (t[r] = e[r]);
  }
  return t;
}
function Fv(e, n) {
  if (e == null) return {};
  var t = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (n.indexOf(r) >= 0) continue;
      t[r] = e[r];
    }
  return t;
}
function ei() {
  return ei = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, ei.apply(this, arguments);
}
function Ec(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function ti(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Ec(Object(t), !0).forEach(function(r) {
      Pv(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ec(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function Pv(e, n, t) {
  return n = Iv(n), n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
function Iv(e) {
  var n = Ov(e, "string");
  return typeof n == "symbol" ? n : n + "";
}
function Ov(e, n) {
  if (typeof e != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(e, n);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function Ff(e) {
  return e && e.map((n, t) => /* @__PURE__ */ de.createElement(n.tag, ti({
    key: t
  }, n.attr), Ff(n.child)));
}
function _r(e) {
  return (n) => /* @__PURE__ */ de.createElement($v, ei({
    attr: ti({}, e.attr)
  }, n), Ff(e.child));
}
function $v(e) {
  var n = (t) => {
    var {
      attr: r,
      size: o,
      title: i
    } = e, s = Tv(e, Av), a = o || t.size || "1em", l;
    return t.className && (l = t.className), e.className && (l = (l ? l + " " : "") + e.className), /* @__PURE__ */ de.createElement("svg", ei({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, r, s, {
      className: l,
      style: ti(ti({
        color: e.color || t.color
      }, t.style), e.style),
      height: a,
      width: a,
      xmlns: "http://www.w3.org/2000/svg"
    }), i && /* @__PURE__ */ de.createElement("title", null, i), e.children);
  };
  return Cc !== void 0 ? /* @__PURE__ */ de.createElement(Cc.Consumer, null, (t) => n(t)) : n(Tf);
}
function Mv(e) {
  return _r({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" }, child: [] }] })(e);
}
function Pf(e) {
  return _r({ attr: { viewBox: "0 0 320 512" }, child: [{ tag: "path", attr: { d: "M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" }, child: [] }] })(e);
}
function Dv(e) {
  return _r({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" }, child: [] }] })(e);
}
function Lv(e) {
  return _r({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" }, child: [] }] })(e);
}
function zv(e) {
  return _r({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z" }, child: [] }] })(e);
}
function Bv(e) {
  return _r({ attr: { viewBox: "0 0 352 512" }, child: [{ tag: "path", attr: { d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" }, child: [] }] })(e);
}
const Vv = Y(
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
), jv = Y("inline-flex items-center gap-1.5 transition-all duration-200", {
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
}), kc = Y(
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
), Uv = Y(
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
), If = x.forwardRef(
  ({
    items: e,
    separator: n = /* @__PURE__ */ w(Pf, {}),
    maxItems: t,
    size: r,
    variant: o = "default",
    LinkComponent: i,
    mobileMaxItems: s = 2,
    className: a,
    ...l
  }, c) => {
    const [u, d] = x.useState(!1);
    x.useEffect(() => {
      const g = () => {
        d(window.innerWidth < 640);
      };
      return g(), window.addEventListener("resize", g), () => {
        window.removeEventListener("resize", g);
      };
    }, []);
    const f = x.useMemo(() => {
      const g = u && s > 0 ? s : t;
      if (!g || e.length <= g)
        return e;
      if (g === 1)
        return [e[e.length - 1]];
      if (g === 2)
        return [e[0], e[e.length - 1]];
      const p = e[0], h = g - 2, m = e.slice(-h);
      return [
        p,
        { label: "..." },
        // Ellipsis placeholder
        ...m
      ];
    }, [e, t, s, u]);
    return /* @__PURE__ */ w(
      "nav",
      {
        ref: c,
        "aria-label": "Breadcrumb",
        className: I(Vv({ size: r }), a),
        ...l,
        children: /* @__PURE__ */ w("ol", { className: "flex list-none flex-wrap items-center gap-1.5", children: f.map((g, p) => {
          if (!g) return null;
          const h = p === f.length - 1, m = h && !g.href, b = g.label === "...";
          return /* @__PURE__ */ M(x.Fragment, { children: [
            /* @__PURE__ */ w(
              "li",
              {
                className: I(
                  jv({
                    variant: o,
                    size: r,
                    current: m
                  })
                ),
                children: b ? /* @__PURE__ */ w("span", { className: "px-1", children: g.label }) : g.href && !m ? i ? /* @__PURE__ */ M(
                  i,
                  {
                    to: g.href,
                    className: I(
                      kc({ variant: o }),
                      "inline-flex items-center gap-1.5"
                    ),
                    children: [
                      g.icon && /* @__PURE__ */ w("span", { className: "inline-flex items-center", "aria-hidden": "true", children: g.icon }),
                      /* @__PURE__ */ w("span", { children: g.label })
                    ]
                  }
                ) : /* @__PURE__ */ M(
                  "a",
                  {
                    href: g.href,
                    onClick: g.onClick,
                    className: I(
                      kc({ variant: o }),
                      "inline-flex items-center gap-1.5"
                    ),
                    children: [
                      g.icon && /* @__PURE__ */ w("span", { className: "inline-flex items-center", "aria-hidden": "true", children: g.icon }),
                      /* @__PURE__ */ w("span", { children: g.label })
                    ]
                  }
                ) : /* @__PURE__ */ M("span", { className: "inline-flex items-center gap-1.5", children: [
                  g.icon && /* @__PURE__ */ w("span", { className: "inline-flex items-center", "aria-hidden": "true", children: g.icon }),
                  /* @__PURE__ */ w("span", { "aria-current": m ? "page" : void 0, children: g.label })
                ] })
              }
            ),
            !h && /* @__PURE__ */ w("li", { className: I(Uv({ size: r })), "aria-hidden": "true", children: n })
          ] }, `${g.label}-${String(p)}`);
        }) })
      }
    );
  }
);
If.displayName = "Breadcrumb";
const Gv = Y("w-full", {
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
}), Wv = {
  default: "text-foreground",
  success: "text-green-600 dark:text-green-400",
  warning: "text-yellow-600 dark:text-yellow-400",
  destructive: "text-red-600 dark:text-red-400"
}, Hv = x.forwardRef(
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
    showHomeInBreadcrumbs: c = !0,
    breadcrumbSeparator: u,
    ...d
  }, f) => {
    const g = x.useMemo(() => {
      if (!s) return [];
      const p = s.map((h) => {
        const m = h.icon, b = {
          label: h.label,
          icon: m ? /* @__PURE__ */ w(m, { className: "h-4 w-4" }) : void 0
        };
        return h.href && (b.href = h.href), b;
      });
      return c ? [
        {
          label: "Home",
          href: "/",
          icon: /* @__PURE__ */ w(cb, { className: "h-4 w-4", "aria-label": "Home" })
        },
        ...p
      ] : p;
    }, [s, c]);
    return /* @__PURE__ */ w(
      "header",
      {
        ref: f,
        className: I(Gv({ variant: n, sticky: t, className: e })),
        ...d,
        children: /* @__PURE__ */ M("div", { className: "px-4 py-4 sm:px-6 sm:py-6", children: [
          s && s.length > 0 && /* @__PURE__ */ w("div", { className: "mb-3", children: /* @__PURE__ */ w(
            If,
            {
              items: g,
              separator: u,
              className: "text-muted-foreground"
            }
          ) }),
          /* @__PURE__ */ M("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", children: [
            /* @__PURE__ */ M("div", { className: "flex items-center gap-3", children: [
              i && /* @__PURE__ */ w("div", { className: "bg-primary/10 text-primary flex-shrink-0 rounded-lg p-2", children: /* @__PURE__ */ w(i, { className: "h-6 w-6", "aria-hidden": "true" }) }),
              /* @__PURE__ */ M("div", { children: [
                /* @__PURE__ */ w("h1", { className: "text-foreground text-2xl font-semibold", children: r }),
                o && /* @__PURE__ */ w("p", { className: "text-muted-foreground mt-1 text-sm", children: o })
              ] })
            ] }),
            a && /* @__PURE__ */ w("div", { className: "flex flex-shrink-0 items-center gap-2", children: a })
          ] }),
          l && l.length > 0 && /* @__PURE__ */ w("div", { className: "border-border mt-4 border-t pt-4", children: /* @__PURE__ */ w("dl", { className: "grid grid-cols-2 gap-4 sm:grid-cols-4", children: l.map((p, h) => {
            const m = p.icon;
            return /* @__PURE__ */ M("div", { className: "flex items-center gap-2", children: [
              m && /* @__PURE__ */ w("div", { className: "bg-muted flex-shrink-0 rounded-md p-1.5", children: /* @__PURE__ */ w(m, { className: "text-muted-foreground h-4 w-4", "aria-hidden": "true" }) }),
              /* @__PURE__ */ M("div", { children: [
                /* @__PURE__ */ w("dt", { className: "text-muted-foreground text-xs", children: p.label }),
                /* @__PURE__ */ w(
                  "dd",
                  {
                    className: I(
                      "text-lg font-semibold",
                      Wv[p.color ?? "default"]
                    ),
                    children: p.value
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
Hv.displayName = "PageHeader";
const Kv = Y(
  "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
  {
    variants: {},
    defaultVariants: {}
  }
), qv = Y(
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
), Of = x.createContext(void 0);
function Mi() {
  const e = x.useContext(Of);
  if (!e)
    throw new Error("Dialog components must be used within a Dialog");
  return e;
}
function Yv({
  open: e,
  defaultOpen: n = !1,
  onOpenChange: t,
  children: r
}) {
  const [o, i] = x.useState(n), s = e !== void 0, a = s ? e : o, l = x.useCallback(
    (c) => {
      s || i(c), t == null || t(c);
    },
    [s, t]
  );
  return /* @__PURE__ */ w(Of.Provider, { value: { open: a, onOpenChange: l }, children: r });
}
const Zv = x.forwardRef(
  ({ asChild: e = !1, onClick: n, children: t, ...r }, o) => {
    const { onOpenChange: i } = Mi(), s = (a) => {
      n == null || n(a), i(!0);
    };
    return e && x.isValidElement(t) ? x.cloneElement(
      t,
      {
        onClick: (a) => {
          var l, c;
          (c = (l = t.props).onClick) == null || c.call(
            l,
            a
          ), i(!0);
        }
      }
    ) : /* @__PURE__ */ w("button", { ref: o, type: "button", onClick: s, ...r, children: t });
  }
);
Zv.displayName = "DialogTrigger";
function Jv({ children: e, container: n }) {
  const [t, r] = x.useState(!1);
  if (x.useEffect(() => (r(!0), () => {
    r(!1);
  }), []), !t) return null;
  const o = n ?? document.body;
  return /* @__PURE__ */ w(st, { children: x.Children.map(
    e,
    (i) => o ? af(i, o) : i
  ) });
}
const $f = x.forwardRef(
  ({ className: e, ...n }, t) => {
    const { open: r } = Mi();
    return /* @__PURE__ */ w(
      "div",
      {
        ref: t,
        "data-state": r ? "open" : "closed",
        className: I(Kv(), e),
        ...n
      }
    );
  }
);
$f.displayName = "DialogOverlay";
const Mf = x.forwardRef(
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
  }, c) => {
    const { open: u, onOpenChange: d } = Mi(), f = x.useRef(null), g = x.useRef(null);
    x.useImperativeHandle(c, () => {
      if (!f.current)
        throw new Error("Content ref is not attached");
      return f.current;
    });
    const p = x.useCallback(() => {
      d(!1), s == null || s();
    }, [d, s]);
    return x.useEffect(() => {
      if (!u || !o) return;
      const h = (m) => {
        m.key === "Escape" && (m.preventDefault(), p());
      };
      return document.addEventListener("keydown", h), () => {
        document.removeEventListener("keydown", h);
      };
    }, [u, o, p]), x.useEffect(() => {
      var y;
      if (!u) return;
      g.current = document.activeElement;
      const h = (y = f.current) == null ? void 0 : y.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ), m = h == null ? void 0 : h[0];
      m == null || m.focus();
      const b = document.body.style.overflow;
      return document.body.style.overflow = "hidden", () => {
        var v;
        document.body.style.overflow = b, (v = g.current) == null || v.focus();
      };
    }, [u]), x.useEffect(() => {
      if (!u) return;
      const h = (m) => {
        var _;
        if (m.key !== "Tab") return;
        const b = (_ = f.current) == null ? void 0 : _.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!(b != null && b.length)) return;
        const y = b[0], v = b[b.length - 1];
        m.shiftKey ? document.activeElement === y && (m.preventDefault(), v.focus()) : document.activeElement === v && (m.preventDefault(), y.focus());
      };
      return document.addEventListener("keydown", h), () => {
        document.removeEventListener("keydown", h);
      };
    }, [u]), u ? /* @__PURE__ */ M(Jv, { container: a, children: [
      /* @__PURE__ */ w($f, { onClick: r ? p : void 0 }),
      /* @__PURE__ */ M(
        "div",
        {
          ref: f,
          role: "dialog",
          "aria-modal": "true",
          "data-state": u ? "open" : "closed",
          className: I(qv({ size: t }), e),
          onClick: (h) => {
            h.stopPropagation();
          },
          ...l,
          children: [
            n,
            i && /* @__PURE__ */ w(
              "button",
              {
                type: "button",
                onClick: p,
                className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none",
                "aria-label": "Close",
                children: /* @__PURE__ */ w(hf, { className: "h-4 w-4" })
              }
            )
          ]
        }
      )
    ] }) : null;
  }
);
Mf.displayName = "DialogContent";
const Df = x.forwardRef(
  ({ className: e, ...n }, t) => /* @__PURE__ */ w(
    "div",
    {
      ref: t,
      className: I("flex flex-col space-y-1.5 text-center sm:text-left", e),
      ...n
    }
  )
);
Df.displayName = "DialogHeader";
const Lf = x.forwardRef(
  ({ className: e, ...n }, t) => /* @__PURE__ */ w(
    "div",
    {
      ref: t,
      className: I("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e),
      ...n
    }
  )
);
Lf.displayName = "DialogFooter";
const zf = x.forwardRef(
  ({ className: e, ...n }, t) => /* @__PURE__ */ w(
    "h2",
    {
      ref: t,
      className: I("text-foreground text-lg leading-none font-semibold tracking-tight", e),
      ...n
    }
  )
);
zf.displayName = "DialogTitle";
const Bf = x.forwardRef(
  ({ className: e, ...n }, t) => /* @__PURE__ */ w("p", { ref: t, className: I("text-muted-foreground text-sm", e), ...n })
);
Bf.displayName = "DialogDescription";
const Xv = x.forwardRef(
  ({ asChild: e = !1, onClick: n, children: t, ...r }, o) => {
    const { onOpenChange: i } = Mi(), s = (a) => {
      n == null || n(a), i(!1);
    };
    return e && x.isValidElement(t) ? x.cloneElement(
      t,
      {
        onClick: (a) => {
          var l, c;
          (c = (l = t.props).onClick) == null || c.call(
            l,
            a
          ), i(!1);
        }
      }
    ) : /* @__PURE__ */ w("button", { ref: o, type: "button", onClick: s, ...r, children: t });
  }
);
Xv.displayName = "DialogClose";
const Qv = Y(
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
), e0 = {
  sm: "h-3 w-3",
  default: "h-3.5 w-3.5",
  lg: "h-4 w-4"
}, t0 = x.forwardRef(
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
    error: c,
    required: u,
    disabled: d,
    id: f,
    ...g
  }, p) => {
    const h = x.useRef(null), [m, b] = x.useState(o ?? !1), y = x.useId();
    x.useImperativeHandle(p, () => {
      if (!h.current)
        throw new Error("Input ref is not attached");
      return h.current;
    });
    const v = r !== void 0, _ = v ? r : m;
    x.useEffect(() => {
      h.current && (h.current.indeterminate = s);
    }, [s]);
    const S = () => s ? "indeterminate" : _ ? "checked" : "unchecked", C = (k) => {
      const R = k.target.checked;
      v || b(R), i == null || i(R);
    }, E = f ?? y, N = e0[t ?? "default"];
    return /* @__PURE__ */ M("div", { className: "flex items-start gap-2", children: [
      /* @__PURE__ */ M("div", { className: "relative flex items-center justify-center", children: [
        /* @__PURE__ */ w(
          "input",
          {
            ref: h,
            type: "checkbox",
            id: E,
            checked: _,
            onChange: C,
            disabled: d,
            required: u,
            className: "sr-only",
            "aria-invalid": c ? "true" : void 0,
            "aria-describedby": l || c ? `${E}-description` : void 0,
            "aria-label": !a && g["aria-label"] ? g["aria-label"] : void 0,
            ...g
          }
        ),
        /* @__PURE__ */ w(
          "div",
          {
            "data-state": S(),
            className: I(
              Qv({ variant: n, size: t }),
              "flex cursor-pointer items-center justify-center",
              d && "cursor-not-allowed",
              c && "border-destructive",
              e
            ),
            onClick: () => {
              !d && h.current && h.current.click();
            },
            role: "presentation",
            children: s ? /* @__PURE__ */ w(fb, { className: N, "aria-hidden": "true" }) : _ ? /* @__PURE__ */ w(Xo, { className: N, "aria-hidden": "true" }) : null
          }
        )
      ] }),
      (a || l || c) && /* @__PURE__ */ M("div", { className: "flex flex-col", children: [
        a && /* @__PURE__ */ M(
          "label",
          {
            htmlFor: E,
            className: I(
              "cursor-pointer text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
              d && "cursor-not-allowed opacity-70"
            ),
            children: [
              a,
              u && /* @__PURE__ */ w("span", { className: "text-destructive ml-1", children: "*" })
            ]
          }
        ),
        (l || c) && /* @__PURE__ */ w(
          "p",
          {
            id: `${E}-description`,
            className: I(
              "text-sm",
              c ? "text-destructive" : "text-muted-foreground",
              a && "mt-1"
            ),
            children: c || l
          }
        )
      ] })
    ] });
  }
);
t0.displayName = "Checkbox";
const n0 = x.forwardRef(
  ({
    label: e,
    description: n,
    error: t,
    required: r,
    children: o,
    className: i,
    orientation: s = "vertical",
    ...a
  }, l) => /* @__PURE__ */ M(
    "fieldset",
    {
      ref: l,
      className: I("space-y-2", i),
      "aria-describedby": n || t ? "checkbox-group-description" : void 0,
      ...a,
      children: [
        e && /* @__PURE__ */ M("legend", { className: "text-sm leading-none font-medium", children: [
          e,
          r && /* @__PURE__ */ w("span", { className: "text-destructive ml-1", children: "*" })
        ] }),
        n && !t && /* @__PURE__ */ w("p", { id: "checkbox-group-description", className: "text-muted-foreground text-sm", children: n }),
        /* @__PURE__ */ w(
          "div",
          {
            className: I(
              "flex gap-4",
              s === "vertical" ? "flex-col" : "flex-row flex-wrap"
            ),
            children: o
          }
        ),
        t && /* @__PURE__ */ w("p", { id: "checkbox-group-description", className: "text-destructive text-sm", children: t })
      ]
    }
  )
);
n0.displayName = "CheckboxGroup";
const r0 = Y(
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
), o0 = Y(
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
), i0 = x.forwardRef(
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
    disabled: c,
    required: u,
    name: d,
    value: f,
    id: g,
    ...p
  }, h) => {
    const [m, b] = x.useState(o), y = x.useId(), v = r !== void 0, _ = v ? r : m, S = () => {
      if (c) return;
      const T = !_;
      v || b(T), i == null || i(T);
    }, C = (T) => {
      (T.key === " " || T.key === "Enter") && (T.preventDefault(), S());
    }, E = g ?? y, N = _ ? "checked" : "unchecked", k = /* @__PURE__ */ w(
      "button",
      {
        ref: h,
        type: "button",
        role: "switch",
        id: E,
        "aria-checked": _,
        "aria-required": u,
        "aria-describedby": a ? `${E}-description` : void 0,
        "data-state": N,
        disabled: c,
        onClick: S,
        onKeyDown: C,
        className: I(r0({ variant: n, size: t }), e),
        ...p,
        children: /* @__PURE__ */ w("span", { "data-state": N, className: I(o0({ size: t })) })
      }
    ), R = d ? /* @__PURE__ */ w(
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
      return /* @__PURE__ */ M(st, { children: [
        R,
        k
      ] });
    const A = /* @__PURE__ */ M("div", { className: "flex flex-col", children: [
      s && /* @__PURE__ */ M(
        "label",
        {
          htmlFor: E,
          className: I(
            "cursor-pointer text-sm leading-none font-medium",
            c && "cursor-not-allowed opacity-70"
          ),
          children: [
            s,
            u && /* @__PURE__ */ w("span", { className: "text-destructive ml-1", children: "*" })
          ]
        }
      ),
      a && /* @__PURE__ */ w(
        "p",
        {
          id: `${E}-description`,
          className: I("text-muted-foreground text-sm", s && "mt-1"),
          children: a
        }
      )
    ] });
    return /* @__PURE__ */ M("div", { className: "flex items-center gap-3", children: [
      R,
      l === "left" && A,
      k,
      l === "right" && A
    ] });
  }
);
i0.displayName = "Switch";
const s0 = x.forwardRef(
  ({ label: e, description: n, children: t, className: r, ...o }, i) => /* @__PURE__ */ M("div", { ref: i, role: "group", className: I("space-y-4", r), ...o, children: [
    (e || n) && /* @__PURE__ */ M("div", { className: "space-y-1", children: [
      e && /* @__PURE__ */ w("h3", { className: "text-sm leading-none font-medium", children: e }),
      n && /* @__PURE__ */ w("p", { className: "text-muted-foreground text-sm", children: n })
    ] }),
    /* @__PURE__ */ w("div", { className: "space-y-4", children: t })
  ] })
);
s0.displayName = "SwitchGroup";
const a0 = Y(
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
), l0 = x.forwardRef(
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
    autoResize: c = !1,
    minRows: u = 2,
    maxRows: d,
    wrapperClassName: f,
    labelClassName: g,
    value: p,
    defaultValue: h,
    onChange: m,
    disabled: b,
    rows: y = 4,
    ...v
  }, _) => {
    const [S, C] = x.useState(
      p !== void 0 ? p : h || ""
    ), E = x.useRef(null), N = p !== void 0, k = N ? p : S, R = String(k || "").length, A = x.useCallback(() => {
      if (!c || !E.current) return;
      const U = E.current;
      U.style.height = "auto";
      const j = parseInt(window.getComputedStyle(U).lineHeight), q = parseInt(window.getComputedStyle(U).paddingTop), te = parseInt(window.getComputedStyle(U).paddingBottom), ie = j * u + q + te, he = d ? j * d + q + te : 1 / 0, ze = Math.min(Math.max(U.scrollHeight, ie), he);
      U.style.height = `${String(ze)}px`;
    }, [c, u, d]);
    x.useEffect(() => {
      c && A();
    }, [k, c, A]);
    const T = x.useCallback(
      (U) => {
        E.current = U, typeof _ == "function" ? _(U) : _ && (_.current = U);
      },
      [_]
    ), D = (U) => {
      N || C(U.target.value), m == null || m(U), c && A();
    }, O = !!s, B = O ? "destructive" : n, W = l !== void 0 && R > l;
    return /* @__PURE__ */ M("div", { className: I("w-full", f), children: [
      o && /* @__PURE__ */ M(
        "label",
        {
          htmlFor: v.id,
          className: I(
            "text-foreground mb-2 block text-sm font-medium",
            b && "cursor-not-allowed opacity-50",
            g
          ),
          children: [
            o,
            v.required && /* @__PURE__ */ w("span", { className: "text-destructive ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ w("div", { className: "relative", children: /* @__PURE__ */ w(
        "textarea",
        {
          ref: T,
          className: I(
            a0({
              variant: B,
              textareaSize: t,
              resize: c ? "none" : r
            }),
            O && "border-destructive focus-visible:ring-destructive",
            e
          ),
          value: k,
          onChange: D,
          disabled: b,
          maxLength: l,
          rows: c ? u : y,
          "aria-invalid": O ? "true" : void 0,
          "aria-describedby": s || i || a ? `${v.id ?? ""}-description ${v.id ?? ""}-error ${v.id ?? ""}-count` : void 0,
          ...v
        }
      ) }),
      /* @__PURE__ */ M("div", { className: "mt-1.5 flex items-center justify-between gap-2", children: [
        /* @__PURE__ */ M("div", { className: "flex-1", children: [
          i && !s && /* @__PURE__ */ w(
            "p",
            {
              id: `${v.id ?? ""}-description`,
              className: I("text-muted-foreground text-sm", b && "opacity-50"),
              children: i
            }
          ),
          s && /* @__PURE__ */ w(
            "p",
            {
              id: `${v.id ?? ""}-error`,
              className: "text-destructive text-sm font-medium",
              role: "alert",
              children: s
            }
          )
        ] }),
        a && /* @__PURE__ */ M(
          "p",
          {
            id: `${v.id ?? ""}-count`,
            className: I(
              "text-sm tabular-nums",
              W ? "text-destructive font-medium" : "text-muted-foreground",
              b && "opacity-50"
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
l0.displayName = "Textarea";
function ge(e, n, { checkForDefaultPrevented: t = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), t === !1 || !o.defaultPrevented)
      return n == null ? void 0 : n(o);
  };
}
function Gt(e, n = []) {
  let t = [];
  function r(i, s) {
    const a = x.createContext(s), l = t.length;
    t = [...t, s];
    const c = (d) => {
      var b;
      const { scope: f, children: g, ...p } = d, h = ((b = f == null ? void 0 : f[e]) == null ? void 0 : b[l]) || a, m = x.useMemo(() => p, Object.values(p));
      return /* @__PURE__ */ w(h.Provider, { value: m, children: g });
    };
    c.displayName = i + "Provider";
    function u(d, f) {
      var h;
      const g = ((h = f == null ? void 0 : f[e]) == null ? void 0 : h[l]) || a, p = x.useContext(g);
      if (p) return p;
      if (s !== void 0) return s;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return [c, u];
  }
  const o = () => {
    const i = t.map((s) => x.createContext(s));
    return function(a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return x.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: l } }),
        [a, l]
      );
    };
  };
  return o.scopeName = e, [r, c0(o, ...n)];
}
function c0(...e) {
  const n = e[0];
  if (e.length === 1) return n;
  const t = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(i) {
      const s = r.reduce((a, { useScope: l, scopeName: c }) => {
        const d = l(i)[`__scope${c}`];
        return { ...a, ...d };
      }, {});
      return x.useMemo(() => ({ [`__scope${n.scopeName}`]: s }), [s]);
    };
  };
  return t.scopeName = n.scopeName, t;
}
// @__NO_SIDE_EFFECTS__
function ni(e) {
  const n = /* @__PURE__ */ u0(e), t = x.forwardRef((r, o) => {
    const { children: i, ...s } = r, a = x.Children.toArray(i), l = a.find(f0);
    if (l) {
      const c = l.props.children, u = a.map((d) => d === l ? x.Children.count(c) > 1 ? x.Children.only(null) : x.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ w(n, { ...s, ref: o, children: x.isValidElement(c) ? x.cloneElement(c, void 0, u) : null });
    }
    return /* @__PURE__ */ w(n, { ...s, ref: o, children: i });
  });
  return t.displayName = `${e}.Slot`, t;
}
// @__NO_SIDE_EFFECTS__
function u0(e) {
  const n = x.forwardRef((t, r) => {
    const { children: o, ...i } = t;
    if (x.isValidElement(o)) {
      const s = p0(o), a = g0(i, o.props);
      return o.type !== x.Fragment && (a.ref = r ? so(r, s) : s), x.cloneElement(o, a);
    }
    return x.Children.count(o) > 1 ? x.Children.only(null) : null;
  });
  return n.displayName = `${e}.SlotClone`, n;
}
var d0 = Symbol("radix.slottable");
function f0(e) {
  return x.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === d0;
}
function g0(e, n) {
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
function p0(e) {
  var r, o;
  let n = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
var h0 = [
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
], pe = h0.reduce((e, n) => {
  const t = /* @__PURE__ */ ni(`Primitive.${n}`), r = x.forwardRef((o, i) => {
    const { asChild: s, ...a } = o, l = s ? t : n;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ w(l, { ...a, ref: i });
  });
  return r.displayName = `Primitive.${n}`, { ...e, [n]: r };
}, {});
function m0(e, n) {
  e && sf.flushSync(() => e.dispatchEvent(n));
}
function ol(e) {
  const n = e + "CollectionProvider", [t, r] = Gt(n), [o, i] = t(
    n,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), s = (h) => {
    const { scope: m, children: b } = h, y = de.useRef(null), v = de.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ w(o, { scope: m, itemMap: v, collectionRef: y, children: b });
  };
  s.displayName = n;
  const a = e + "CollectionSlot", l = /* @__PURE__ */ ni(a), c = de.forwardRef(
    (h, m) => {
      const { scope: b, children: y } = h, v = i(a, b), _ = ve(m, v.collectionRef);
      return /* @__PURE__ */ w(l, { ref: _, children: y });
    }
  );
  c.displayName = a;
  const u = e + "CollectionItemSlot", d = "data-radix-collection-item", f = /* @__PURE__ */ ni(u), g = de.forwardRef(
    (h, m) => {
      const { scope: b, children: y, ...v } = h, _ = de.useRef(null), S = ve(m, _), C = i(u, b);
      return de.useEffect(() => (C.itemMap.set(_, { ref: _, ...v }), () => void C.itemMap.delete(_))), /* @__PURE__ */ w(f, { [d]: "", ref: S, children: y });
    }
  );
  g.displayName = u;
  function p(h) {
    const m = i(e + "CollectionConsumer", h);
    return de.useCallback(() => {
      const y = m.collectionRef.current;
      if (!y) return [];
      const v = Array.from(y.querySelectorAll(`[${d}]`));
      return Array.from(m.itemMap.values()).sort(
        (C, E) => v.indexOf(C.ref.current) - v.indexOf(E.ref.current)
      );
    }, [m.collectionRef, m.itemMap]);
  }
  return [
    { Provider: s, Slot: c, ItemSlot: g },
    p,
    r
  ];
}
var zt = globalThis != null && globalThis.document ? x.useLayoutEffect : () => {
}, y0 = x[" useId ".trim().toString()] || (() => {
}), b0 = 0;
function Di(e) {
  const [n, t] = x.useState(y0());
  return zt(() => {
    t((r) => r ?? String(b0++));
  }, [e]), e || (n ? `radix-${n}` : "");
}
function Cn(e) {
  const n = x.useRef(e);
  return x.useEffect(() => {
    n.current = e;
  }), x.useMemo(() => (...t) => {
    var r;
    return (r = n.current) == null ? void 0 : r.call(n, ...t);
  }, []);
}
var v0 = x[" useInsertionEffect ".trim().toString()] || zt;
function Ln({
  prop: e,
  defaultProp: n,
  onChange: t = () => {
  },
  caller: r
}) {
  const [o, i, s] = x0({
    defaultProp: n,
    onChange: t
  }), a = e !== void 0, l = a ? e : o;
  {
    const u = x.useRef(e !== void 0);
    x.useEffect(() => {
      const d = u.current;
      d !== a && console.warn(
        `${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), u.current = a;
    }, [a, r]);
  }
  const c = x.useCallback(
    (u) => {
      var d;
      if (a) {
        const f = w0(u) ? u(e) : u;
        f !== e && ((d = s.current) == null || d.call(s, f));
      } else
        i(u);
    },
    [a, e, i, s]
  );
  return [l, c];
}
function x0({
  defaultProp: e,
  onChange: n
}) {
  const [t, r] = x.useState(e), o = x.useRef(t), i = x.useRef(n);
  return v0(() => {
    i.current = n;
  }, [n]), x.useEffect(() => {
    var s;
    o.current !== t && ((s = i.current) == null || s.call(i, t), o.current = t);
  }, [t, o]), [t, r, i];
}
function w0(e) {
  return typeof e == "function";
}
var _0 = x.createContext(void 0);
function Li(e) {
  const n = x.useContext(_0);
  return e || n || "ltr";
}
var xs = "rovingFocusGroup.onEntryFocus", S0 = { bubbles: !1, cancelable: !0 }, ao = "RovingFocusGroup", [sa, Vf, C0] = ol(ao), [E0, jf] = Gt(
  ao,
  [C0]
), [k0, N0] = E0(ao), Uf = x.forwardRef(
  (e, n) => /* @__PURE__ */ w(sa.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ w(sa.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ w(R0, { ...e, ref: n }) }) })
);
Uf.displayName = ao;
var R0 = x.forwardRef((e, n) => {
  const {
    __scopeRovingFocusGroup: t,
    orientation: r,
    loop: o = !1,
    dir: i,
    currentTabStopId: s,
    defaultCurrentTabStopId: a,
    onCurrentTabStopIdChange: l,
    onEntryFocus: c,
    preventScrollOnEntryFocus: u = !1,
    ...d
  } = e, f = x.useRef(null), g = ve(n, f), p = Li(i), [h, m] = Ln({
    prop: s,
    defaultProp: a ?? null,
    onChange: l,
    caller: ao
  }), [b, y] = x.useState(!1), v = Cn(c), _ = Vf(t), S = x.useRef(!1), [C, E] = x.useState(0);
  return x.useEffect(() => {
    const N = f.current;
    if (N)
      return N.addEventListener(xs, v), () => N.removeEventListener(xs, v);
  }, [v]), /* @__PURE__ */ w(
    k0,
    {
      scope: t,
      orientation: r,
      dir: p,
      loop: o,
      currentTabStopId: h,
      onItemFocus: x.useCallback(
        (N) => m(N),
        [m]
      ),
      onItemShiftTab: x.useCallback(() => y(!0), []),
      onFocusableItemAdd: x.useCallback(
        () => E((N) => N + 1),
        []
      ),
      onFocusableItemRemove: x.useCallback(
        () => E((N) => N - 1),
        []
      ),
      children: /* @__PURE__ */ w(
        pe.div,
        {
          tabIndex: b || C === 0 ? -1 : 0,
          "data-orientation": r,
          ...d,
          ref: g,
          style: { outline: "none", ...e.style },
          onMouseDown: ge(e.onMouseDown, () => {
            S.current = !0;
          }),
          onFocus: ge(e.onFocus, (N) => {
            const k = !S.current;
            if (N.target === N.currentTarget && k && !b) {
              const R = new CustomEvent(xs, S0);
              if (N.currentTarget.dispatchEvent(R), !R.defaultPrevented) {
                const A = _().filter((W) => W.focusable), T = A.find((W) => W.active), D = A.find((W) => W.id === h), B = [T, D, ...A].filter(
                  Boolean
                ).map((W) => W.ref.current);
                Hf(B, u);
              }
            }
            S.current = !1;
          }),
          onBlur: ge(e.onBlur, () => y(!1))
        }
      )
    }
  );
}), Gf = "RovingFocusGroupItem", Wf = x.forwardRef(
  (e, n) => {
    const {
      __scopeRovingFocusGroup: t,
      focusable: r = !0,
      active: o = !1,
      tabStopId: i,
      children: s,
      ...a
    } = e, l = Di(), c = i || l, u = N0(Gf, t), d = u.currentTabStopId === c, f = Vf(t), { onFocusableItemAdd: g, onFocusableItemRemove: p, currentTabStopId: h } = u;
    return x.useEffect(() => {
      if (r)
        return g(), () => p();
    }, [r, g, p]), /* @__PURE__ */ w(
      sa.ItemSlot,
      {
        scope: t,
        id: c,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ w(
          pe.span,
          {
            tabIndex: d ? 0 : -1,
            "data-orientation": u.orientation,
            ...a,
            ref: n,
            onMouseDown: ge(e.onMouseDown, (m) => {
              r ? u.onItemFocus(c) : m.preventDefault();
            }),
            onFocus: ge(e.onFocus, () => u.onItemFocus(c)),
            onKeyDown: ge(e.onKeyDown, (m) => {
              if (m.key === "Tab" && m.shiftKey) {
                u.onItemShiftTab();
                return;
              }
              if (m.target !== m.currentTarget) return;
              const b = F0(m, u.orientation, u.dir);
              if (b !== void 0) {
                if (m.metaKey || m.ctrlKey || m.altKey || m.shiftKey) return;
                m.preventDefault();
                let v = f().filter((_) => _.focusable).map((_) => _.ref.current);
                if (b === "last") v.reverse();
                else if (b === "prev" || b === "next") {
                  b === "prev" && v.reverse();
                  const _ = v.indexOf(m.currentTarget);
                  v = u.loop ? P0(v, _ + 1) : v.slice(_ + 1);
                }
                setTimeout(() => Hf(v));
              }
            }),
            children: typeof s == "function" ? s({ isCurrentTabStop: d, hasTabStop: h != null }) : s
          }
        )
      }
    );
  }
);
Wf.displayName = Gf;
var A0 = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function T0(e, n) {
  return n !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function F0(e, n, t) {
  const r = T0(e.key, t);
  if (!(n === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(n === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return A0[r];
}
function Hf(e, n = !1) {
  const t = document.activeElement;
  for (const r of e)
    if (r === t || (r.focus({ preventScroll: n }), document.activeElement !== t)) return;
}
function P0(e, n) {
  return e.map((t, r) => e[(n + r) % e.length]);
}
var I0 = Uf, O0 = Wf;
function il(e) {
  const [n, t] = x.useState(void 0);
  return zt(() => {
    if (e) {
      t({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const i = o[0];
        let s, a;
        if ("borderBoxSize" in i) {
          const l = i.borderBoxSize, c = Array.isArray(l) ? l[0] : l;
          s = c.inlineSize, a = c.blockSize;
        } else
          s = e.offsetWidth, a = e.offsetHeight;
        t({ width: s, height: a });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      t(void 0);
  }, [e]), n;
}
function Kf(e) {
  const n = x.useRef({ value: e, previous: e });
  return x.useMemo(() => (n.current.value !== e && (n.current.previous = n.current.value, n.current.value = e), n.current.previous), [e]);
}
function $0(e, n) {
  return x.useReducer((t, r) => n[t][r] ?? t, e);
}
var lo = (e) => {
  const { present: n, children: t } = e, r = M0(n), o = typeof t == "function" ? t({ present: r.isPresent }) : x.Children.only(t), i = ve(r.ref, D0(o));
  return typeof t == "function" || r.isPresent ? x.cloneElement(o, { ref: i }) : null;
};
lo.displayName = "Presence";
function M0(e) {
  const [n, t] = x.useState(), r = x.useRef(null), o = x.useRef(e), i = x.useRef("none"), s = e ? "mounted" : "unmounted", [a, l] = $0(s, {
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
  return x.useEffect(() => {
    const c = _o(r.current);
    i.current = a === "mounted" ? c : "none";
  }, [a]), zt(() => {
    const c = r.current, u = o.current;
    if (u !== e) {
      const f = i.current, g = _o(c);
      e ? l("MOUNT") : g === "none" || (c == null ? void 0 : c.display) === "none" ? l("UNMOUNT") : l(u && f !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), zt(() => {
    if (n) {
      let c;
      const u = n.ownerDocument.defaultView ?? window, d = (g) => {
        const h = _o(r.current).includes(CSS.escape(g.animationName));
        if (g.target === n && h && (l("ANIMATION_END"), !o.current)) {
          const m = n.style.animationFillMode;
          n.style.animationFillMode = "forwards", c = u.setTimeout(() => {
            n.style.animationFillMode === "forwards" && (n.style.animationFillMode = m);
          });
        }
      }, f = (g) => {
        g.target === n && (i.current = _o(r.current));
      };
      return n.addEventListener("animationstart", f), n.addEventListener("animationcancel", d), n.addEventListener("animationend", d), () => {
        u.clearTimeout(c), n.removeEventListener("animationstart", f), n.removeEventListener("animationcancel", d), n.removeEventListener("animationend", d);
      };
    } else
      l("ANIMATION_END");
  }, [n, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(a),
    ref: x.useCallback((c) => {
      r.current = c ? getComputedStyle(c) : null, t(c);
    }, [])
  };
}
function _o(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function D0(e) {
  var r, o;
  let n = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
var sl = "Radio", [L0, qf] = Gt(sl), [z0, B0] = L0(sl), Yf = x.forwardRef(
  (e, n) => {
    const {
      __scopeRadio: t,
      name: r,
      checked: o = !1,
      required: i,
      disabled: s,
      value: a = "on",
      onCheck: l,
      form: c,
      ...u
    } = e, [d, f] = x.useState(null), g = ve(n, (m) => f(m)), p = x.useRef(!1), h = d ? c || !!d.closest("form") : !0;
    return /* @__PURE__ */ M(z0, { scope: t, checked: o, disabled: s, children: [
      /* @__PURE__ */ w(
        pe.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": Qf(o),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: a,
          ...u,
          ref: g,
          onClick: ge(e.onClick, (m) => {
            o || l == null || l(), h && (p.current = m.isPropagationStopped(), p.current || m.stopPropagation());
          })
        }
      ),
      h && /* @__PURE__ */ w(
        Xf,
        {
          control: d,
          bubbles: !p.current,
          name: r,
          value: a,
          checked: o,
          required: i,
          disabled: s,
          form: c,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Yf.displayName = sl;
var Zf = "RadioIndicator", Jf = x.forwardRef(
  (e, n) => {
    const { __scopeRadio: t, forceMount: r, ...o } = e, i = B0(Zf, t);
    return /* @__PURE__ */ w(lo, { present: r || i.checked, children: /* @__PURE__ */ w(
      pe.span,
      {
        "data-state": Qf(i.checked),
        "data-disabled": i.disabled ? "" : void 0,
        ...o,
        ref: n
      }
    ) });
  }
);
Jf.displayName = Zf;
var V0 = "RadioBubbleInput", Xf = x.forwardRef(
  ({
    __scopeRadio: e,
    control: n,
    checked: t,
    bubbles: r = !0,
    ...o
  }, i) => {
    const s = x.useRef(null), a = ve(s, i), l = Kf(t), c = il(n);
    return x.useEffect(() => {
      const u = s.current;
      if (!u) return;
      const d = window.HTMLInputElement.prototype, g = Object.getOwnPropertyDescriptor(
        d,
        "checked"
      ).set;
      if (l !== t && g) {
        const p = new Event("click", { bubbles: r });
        g.call(u, t), u.dispatchEvent(p);
      }
    }, [l, t, r]), /* @__PURE__ */ w(
      pe.input,
      {
        type: "radio",
        "aria-hidden": !0,
        defaultChecked: t,
        ...o,
        tabIndex: -1,
        ref: a,
        style: {
          ...o.style,
          ...c,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
Xf.displayName = V0;
function Qf(e) {
  return e ? "checked" : "unchecked";
}
var j0 = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], zi = "RadioGroup", [U0] = Gt(zi, [
  jf,
  qf
]), eg = jf(), tg = qf(), [G0, W0] = U0(zi), ng = x.forwardRef(
  (e, n) => {
    const {
      __scopeRadioGroup: t,
      name: r,
      defaultValue: o,
      value: i,
      required: s = !1,
      disabled: a = !1,
      orientation: l,
      dir: c,
      loop: u = !0,
      onValueChange: d,
      ...f
    } = e, g = eg(t), p = Li(c), [h, m] = Ln({
      prop: i,
      defaultProp: o ?? null,
      onChange: d,
      caller: zi
    });
    return /* @__PURE__ */ w(
      G0,
      {
        scope: t,
        name: r,
        required: s,
        disabled: a,
        value: h,
        onValueChange: m,
        children: /* @__PURE__ */ w(
          I0,
          {
            asChild: !0,
            ...g,
            orientation: l,
            dir: p,
            loop: u,
            children: /* @__PURE__ */ w(
              pe.div,
              {
                role: "radiogroup",
                "aria-required": s,
                "aria-orientation": l,
                "data-disabled": a ? "" : void 0,
                dir: p,
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
ng.displayName = zi;
var rg = "RadioGroupItem", og = x.forwardRef(
  (e, n) => {
    const { __scopeRadioGroup: t, disabled: r, ...o } = e, i = W0(rg, t), s = i.disabled || r, a = eg(t), l = tg(t), c = x.useRef(null), u = ve(n, c), d = i.value === o.value, f = x.useRef(!1);
    return x.useEffect(() => {
      const g = (h) => {
        j0.includes(h.key) && (f.current = !0);
      }, p = () => f.current = !1;
      return document.addEventListener("keydown", g), document.addEventListener("keyup", p), () => {
        document.removeEventListener("keydown", g), document.removeEventListener("keyup", p);
      };
    }, []), /* @__PURE__ */ w(
      O0,
      {
        asChild: !0,
        ...a,
        focusable: !s,
        active: d,
        children: /* @__PURE__ */ w(
          Yf,
          {
            disabled: s,
            required: i.required,
            checked: d,
            ...l,
            ...o,
            name: i.name,
            ref: u,
            onCheck: () => i.onValueChange(o.value),
            onKeyDown: ge((g) => {
              g.key === "Enter" && g.preventDefault();
            }),
            onFocus: ge(o.onFocus, () => {
              var g;
              f.current && ((g = c.current) == null || g.click());
            })
          }
        )
      }
    );
  }
);
og.displayName = rg;
var H0 = "RadioGroupIndicator", ig = x.forwardRef(
  (e, n) => {
    const { __scopeRadioGroup: t, ...r } = e, o = tg(t);
    return /* @__PURE__ */ w(Jf, { ...o, ...r, ref: n });
  }
);
ig.displayName = H0;
var sg = ng, ag = og, K0 = ig;
const q0 = x.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ w(sg, { className: I("grid gap-2", e), ...n, ref: t }));
q0.displayName = sg.displayName;
const Y0 = x.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ w(
  ag,
  {
    ref: t,
    className: I(
      "border-input text-primary ring-offset-background focus-visible:ring-ring aspect-square h-4 w-4 rounded-full border focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...n,
    children: /* @__PURE__ */ w(K0, { className: "flex items-center justify-center", children: /* @__PURE__ */ w(ib, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
Y0.displayName = ag.displayName;
const lg = x.createContext(void 0), Z0 = Y(
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
), cg = x.forwardRef(
  ({ toast: e, onClose: n, variant: t, className: r, ...o }, i) => {
    const s = x.useMemo(() => {
      switch (t || e.variant) {
        case "success":
          return Mv;
        case "error":
          return zv;
        case "warning":
          return Dv;
        case "info":
          return Lv;
        default:
          return null;
      }
    }, [t, e.variant]);
    return /* @__PURE__ */ M(
      "div",
      {
        ref: i,
        role: "alert",
        "aria-live": "polite",
        "aria-atomic": "true",
        className: I(Z0({ variant: t || e.variant }), r),
        ...o,
        children: [
          s && /* @__PURE__ */ w("div", { className: "mt-0.5 flex-shrink-0", children: /* @__PURE__ */ w(s, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ M("div", { className: "grid flex-1 gap-1", children: [
            e.title && /* @__PURE__ */ w("div", { className: "text-sm leading-none font-semibold", children: e.title }),
            /* @__PURE__ */ w("div", { className: "text-sm leading-snug opacity-90", children: e.description }),
            e.action && /* @__PURE__ */ w(
              "button",
              {
                onClick: e.action.onClick,
                className: "mt-2 inline-flex h-8 items-center justify-center rounded-md border border-current px-3 text-xs font-medium transition-colors hover:bg-black/5 focus:ring-2 focus:ring-offset-2 focus:outline-none dark:hover:bg-white/10",
                children: e.action.label
              }
            )
          ] }),
          /* @__PURE__ */ w(
            "button",
            {
              onClick: n,
              className: "inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md text-current opacity-60 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none",
              "aria-label": "Close",
              children: /* @__PURE__ */ w(Bv, { className: "h-4 w-4" })
            }
          )
        ]
      }
    );
  }
);
cg.displayName = "ToastItem";
const J0 = {
  "top-right": "top-0 right-0 sm:top-4 sm:right-4",
  "top-left": "top-0 left-0 sm:top-4 sm:left-4",
  "bottom-right": "bottom-0 right-0 sm:bottom-4 sm:right-4",
  "bottom-left": "bottom-0 left-0 sm:bottom-4 sm:left-4",
  "top-center": "top-0 left-1/2 -translate-x-1/2 sm:top-4",
  "bottom-center": "bottom-0 left-1/2 -translate-x-1/2 sm:bottom-4"
}, ug = x.forwardRef(
  ({ position: e = "top-right" }, n) => {
    const { toasts: t, removeToast: r } = X0(), [o, i] = x.useState(!1);
    return x.useEffect(() => {
      i(!0);
    }, []), !o || t.length === 0 ? null : /* @__PURE__ */ w(
      "div",
      {
        ref: n,
        className: I(
          "pointer-events-none fixed z-[100] flex w-full max-w-[420px] flex-col gap-2 p-4",
          J0[e]
        ),
        children: t.map((s) => /* @__PURE__ */ w(
          cg,
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
ug.displayName = "ToastContainer";
const cT = ({
  children: e,
  position: n = "top-right",
  duration: t = 5e3,
  max: r = 5
}) => {
  const [o, i] = x.useState([]), s = x.useRef(/* @__PURE__ */ new Map()), a = x.useCallback((p) => {
    const h = s.current.get(p);
    h && (clearTimeout(h), s.current.delete(p)), i((m) => m.filter((b) => b.id !== p));
  }, []), l = x.useCallback(
    (p) => {
      const h = Math.random().toString(36).substring(2, 9), m = { ...p, id: h };
      i((y) => {
        const v = [...y, m];
        return v.length > r ? (v.slice(0, v.length - r).forEach((S) => {
          const C = s.current.get(S.id);
          C && (clearTimeout(C), s.current.delete(S.id));
        }), v.slice(v.length - r)) : v;
      });
      const b = p.duration ?? t;
      if (b > 0) {
        const y = setTimeout(() => {
          a(h);
        }, b);
        s.current.set(h, y);
      }
      return h;
    },
    [t, r, a]
  ), c = x.useCallback(
    (p, h) => l({ ...h, description: p, variant: "success" }),
    [l]
  ), u = x.useCallback(
    (p, h) => l({ ...h, description: p, variant: "error" }),
    [l]
  ), d = x.useCallback(
    (p, h) => l({ ...h, description: p, variant: "warning" }),
    [l]
  ), f = x.useCallback(
    (p, h) => l({ ...h, description: p, variant: "info" }),
    [l]
  );
  x.useEffect(() => {
    const p = s.current;
    return () => {
      p.forEach((h) => {
        clearTimeout(h);
      }), p.clear();
    };
  }, []);
  const g = x.useMemo(
    () => ({ toasts: o, addToast: l, removeToast: a, success: c, error: u, warning: d, info: f }),
    [o, l, a, c, u, d, f]
  );
  return /* @__PURE__ */ M(lg.Provider, { value: g, children: [
    e,
    /* @__PURE__ */ w(ug, { position: n })
  ] });
}, X0 = () => {
  const e = x.useContext(lg);
  if (!e)
    throw new Error("useToast must be used within a ToastProvider");
  return e;
}, Q0 = Y(
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
), dg = Y(
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
), fg = x.createContext(void 0), al = () => {
  const e = x.useContext(fg);
  if (!e)
    throw new Error("Dropdown components must be used within a Dropdown");
  return e;
}, gg = x.createContext(
  void 0
), pg = () => {
  const e = x.useContext(gg);
  if (!e)
    throw new Error("DropdownSubmenu components must be used within a DropdownSubmenu");
  return e;
}, uT = ({
  children: e,
  open: n,
  onOpenChange: t,
  defaultOpen: r = !1
}) => {
  const [o, i] = x.useState(r), s = x.useRef(null), a = x.useRef(null), l = n !== void 0 ? n : o, c = x.useCallback(
    (u) => {
      n === void 0 && i(u), t == null || t(u);
    },
    [n, t]
  );
  return x.useEffect(() => {
    if (!l) return;
    const u = (d) => {
      var g, p;
      const f = d.target;
      !((g = s.current) != null && g.contains(f)) && !((p = a.current) != null && p.contains(f)) && c(!1);
    };
    return document.addEventListener("mousedown", u), () => {
      document.removeEventListener("mousedown", u);
    };
  }, [l, c]), x.useEffect(() => {
    if (!l) return;
    const u = (d) => {
      var f;
      d.key === "Escape" && (c(!1), (f = s.current) == null || f.focus());
    };
    return document.addEventListener("keydown", u), () => {
      document.removeEventListener("keydown", u);
    };
  }, [l, c]), /* @__PURE__ */ w(fg.Provider, { value: { open: l, setOpen: c, triggerRef: s, contentRef: a }, children: /* @__PURE__ */ w("div", { className: "relative inline-block", children: e }) });
}, dT = ({ children: e, asChild: n = !1 }) => {
  const { open: t, setOpen: r, triggerRef: o } = al(), i = () => {
    r(!t);
  }, s = (a) => {
    a.key === "Enter" || a.key === " " ? (a.preventDefault(), r(!t)) : a.key === "ArrowDown" && !t && (a.preventDefault(), r(!0));
  };
  if (n && x.isValidElement(e)) {
    const a = e.props || {};
    return x.cloneElement(e, {
      ...a,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref: o,
      onClick: i,
      onKeyDown: s,
      "aria-expanded": t,
      "aria-haspopup": "menu"
    });
  }
  return /* @__PURE__ */ w(
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
}, fT = ({
  children: e,
  className: n,
  align: t = "start",
  side: r = "bottom"
}) => {
  const { open: o, setOpen: i, contentRef: s } = al(), [a, l] = x.useState(-1), c = x.useCallback(() => s.current ? Array.from(
    s.current.querySelectorAll(
      '[role="menuitem"]:not([aria-disabled="true"])'
    )
  ) : [], [s]);
  return x.useEffect(() => {
    var f;
    if (!o) return;
    const u = (g) => {
      var h, m;
      const p = c();
      if (p.length !== 0)
        switch (g.key) {
          case "ArrowDown":
            g.preventDefault(), l((b) => {
              var v;
              const y = b + 1 >= p.length ? 0 : b + 1;
              return (v = p[y]) == null || v.focus(), y;
            });
            break;
          case "ArrowUp":
            g.preventDefault(), l((b) => {
              var v;
              const y = b - 1 < 0 ? p.length - 1 : b - 1;
              return (v = p[y]) == null || v.focus(), y;
            });
            break;
          case "Home":
            g.preventDefault(), (h = p[0]) == null || h.focus(), l(0);
            break;
          case "End":
            g.preventDefault(), (m = p[p.length - 1]) == null || m.focus(), l(p.length - 1);
            break;
          case "Tab":
            g.preventDefault(), i(!1);
            break;
        }
    }, d = s.current;
    return (f = s.current) == null || f.addEventListener("keydown", u), () => d == null ? void 0 : d.removeEventListener("keydown", u);
  }, [o, i, c]), x.useEffect(() => {
    var u;
    if (o) {
      const d = c();
      d.length > 0 && ((u = d[0]) == null || u.focus(), l(0));
    } else
      l(-1);
  }, [o, c]), o ? /* @__PURE__ */ w(
    "div",
    {
      ref: s,
      role: "menu",
      "aria-orientation": "vertical",
      className: I(Q0({ align: t, side: r }), n),
      children: e
    }
  ) : null;
}, gT = ({ children: e, className: n }) => /* @__PURE__ */ w(
  "div",
  {
    className: I(
      "px-2 py-1.5 text-sm font-semibold text-slate-900 dark:text-slate-100",
      n
    ),
    children: e
  }
), pT = ({
  children: e,
  onSelect: n,
  icon: t,
  shortcut: r,
  variant: o = "default",
  disabled: i = !1,
  className: s
}) => {
  const { setOpen: a } = al(), l = () => {
    i || (n == null || n(), a(!1));
  };
  return /* @__PURE__ */ M(
    "div",
    {
      role: "menuitem",
      tabIndex: i ? void 0 : 0,
      "aria-disabled": i ? !0 : void 0,
      onClick: l,
      onKeyDown: (u) => {
        (u.key === "Enter" || u.key === " ") && (u.preventDefault(), l());
      },
      className: I(dg({ variant: o, disabled: i }), s),
      children: [
        t && /* @__PURE__ */ w("span", { className: "shrink-0", children: t }),
        /* @__PURE__ */ w("span", { className: "flex-1", children: e }),
        r && /* @__PURE__ */ w("span", { className: "ml-auto text-xs tracking-widest text-slate-500 dark:text-slate-400", children: r })
      ]
    }
  );
}, hT = ({ className: e }) => /* @__PURE__ */ w("div", { role: "separator", className: I("my-1 h-px bg-slate-200 dark:bg-slate-700", e) }), mT = ({ children: e }) => {
  const [n, t] = x.useState(!1);
  return /* @__PURE__ */ w(gg.Provider, { value: { open: n, setOpen: t }, children: /* @__PURE__ */ w("div", { className: "relative", children: e }) });
}, yT = ({
  children: e,
  icon: n,
  className: t
}) => {
  const { open: r, setOpen: o } = pg();
  return /* @__PURE__ */ M(
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
      className: I(dg({ variant: "default", disabled: !1 }), t),
      children: [
        n && /* @__PURE__ */ w("span", { className: "shrink-0", children: n }),
        /* @__PURE__ */ w("span", { className: "flex-1", children: e }),
        /* @__PURE__ */ w(Pf, { className: "ml-auto h-3 w-3 text-slate-500 dark:text-slate-400" })
      ]
    }
  );
}, bT = ({
  children: e,
  className: n
}) => {
  const { open: t } = pg();
  return t ? /* @__PURE__ */ w(
    "div",
    {
      role: "menu",
      "aria-orientation": "vertical",
      className: I(
        "animate-in fade-in-0 zoom-in-95 absolute top-0 left-full ml-1 min-w-[12rem] overflow-hidden rounded-md border bg-white p-1 shadow-lg dark:border-slate-700 dark:bg-slate-800",
        n
      ),
      children: e
    }
  ) : null;
}, ex = Y(
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
), tx = Y(
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
function nx(e) {
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
function rx(e) {
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
const ox = x.forwardRef(
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
    ...c
  }, u) => {
    const [d, f] = x.useState(!1), [g, p] = x.useState(!!r);
    x.useEffect(() => {
      r && (f(!1), p(!0));
    }, [r]);
    const h = l || nx(o), m = rx(o), b = r && !d && !a, y = !b && !a, v = a || g;
    return /* @__PURE__ */ M("div", { ref: u, className: I(ex({ size: n, shape: t }), e), ...c, children: [
      b && /* @__PURE__ */ w(
        "img",
        {
          src: r,
          alt: i || o || "Avatar",
          className: I(
            "h-full w-full object-cover",
            v && "opacity-0",
            !v && "opacity-100 transition-opacity duration-200"
          ),
          onError: () => {
            f(!0), p(!1);
          },
          onLoad: () => {
            p(!1);
          }
        }
      ),
      y && /* @__PURE__ */ w(
        "div",
        {
          className: I(
            "flex h-full w-full items-center justify-center font-medium text-white",
            m
          ),
          children: h
        }
      ),
      v && !b && /* @__PURE__ */ w("div", { className: "h-full w-full animate-pulse bg-slate-200 dark:bg-slate-700" }),
      s && !a && /* @__PURE__ */ w(
        "span",
        {
          className: I(tx({ status: s, size: n })),
          "aria-label": `Status: ${s}`
        }
      )
    ] });
  }
);
ox.displayName = "Avatar";
const Nc = Y("inline-flex rounded-full flex-shrink-0", {
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
}), Rc = Y("text-sm font-medium", {
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
}), ix = x.forwardRef(
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
    const c = s ? "ring" : r, u = o !== void 0 ? o : "";
    return u ? /* @__PURE__ */ M(
      "span",
      {
        ref: l,
        className: I("inline-flex items-center gap-2", e),
        role: "status",
        "aria-label": `Status: ${n || "online"}`,
        ...a,
        children: [
          i === "left" && /* @__PURE__ */ w("span", { className: Rc({ status: n }), children: u }),
          /* @__PURE__ */ w(
            "span",
            {
              className: Nc({ status: n, size: t, variant: c }),
              "aria-hidden": "true"
            }
          ),
          i === "right" && /* @__PURE__ */ w("span", { className: Rc({ status: n }), children: u })
        ]
      }
    ) : /* @__PURE__ */ w(
      "span",
      {
        ref: l,
        className: I(
          Nc({ status: n, size: t, variant: c }),
          e
        ),
        role: "status",
        "aria-label": `Status: ${n || "online"}`,
        ...a
      }
    );
  }
);
ix.displayName = "StatusIndicator";
const sx = Y(
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
), ax = {
  default: oa,
  info: oa,
  success: rb,
  warning: Zr,
  error: nb
}, lx = x.forwardRef(
  ({ className: e, variant: n, showIcon: t = !0, dismissible: r, onDismiss: o, children: i, ...s }, a) => {
    const [l, c] = x.useState(!1), u = () => {
      c(!0), o == null || o();
    };
    if (l) return null;
    const d = ax[n || "default"];
    return /* @__PURE__ */ M("div", { ref: a, role: "alert", className: I(sx({ variant: n }), e), ...s, children: [
      t && /* @__PURE__ */ w(d, { className: "h-4 w-4", "aria-hidden": "true" }),
      /* @__PURE__ */ w("div", { className: "flex-1", children: i }),
      r && /* @__PURE__ */ w(
        "button",
        {
          onClick: u,
          className: "ring-offset-background focus:ring-ring absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none",
          "aria-label": "Dismiss alert",
          children: /* @__PURE__ */ w(hf, { className: "h-4 w-4" })
        }
      )
    ] });
  }
);
lx.displayName = "Alert";
const cx = x.forwardRef(
  ({ className: e, children: n, ...t }, r) => /* @__PURE__ */ w(
    "h5",
    {
      ref: r,
      className: I("mb-1 leading-none font-medium tracking-tight", e),
      ...t,
      children: n
    }
  )
);
cx.displayName = "AlertTitle";
const ux = x.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ w("div", { ref: t, className: I("text-sm [&_p]:leading-relaxed", e), ...n }));
ux.displayName = "AlertDescription";
var dx = Object.create, Bi = Object.defineProperty, fx = Object.defineProperties, gx = Object.getOwnPropertyDescriptor, px = Object.getOwnPropertyDescriptors, hg = Object.getOwnPropertyNames, ri = Object.getOwnPropertySymbols, hx = Object.getPrototypeOf, ll = Object.prototype.hasOwnProperty, mg = Object.prototype.propertyIsEnumerable, Ac = (e, n, t) => n in e ? Bi(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, wt = (e, n) => {
  for (var t in n || (n = {}))
    ll.call(n, t) && Ac(e, t, n[t]);
  if (ri)
    for (var t of ri(n))
      mg.call(n, t) && Ac(e, t, n[t]);
  return e;
}, Vi = (e, n) => fx(e, px(n)), yg = (e, n) => {
  var t = {};
  for (var r in e)
    ll.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && ri)
    for (var r of ri(e))
      n.indexOf(r) < 0 && mg.call(e, r) && (t[r] = e[r]);
  return t;
}, mx = (e, n) => function() {
  return n || (0, e[hg(e)[0]])((n = { exports: {} }).exports, n), n.exports;
}, yx = (e, n) => {
  for (var t in n)
    Bi(e, t, { get: n[t], enumerable: !0 });
}, bx = (e, n, t, r) => {
  if (n && typeof n == "object" || typeof n == "function")
    for (let o of hg(n))
      !ll.call(e, o) && o !== t && Bi(e, o, { get: () => n[o], enumerable: !(r = gx(n, o)) || r.enumerable });
  return e;
}, vx = (e, n, t) => (t = e != null ? dx(hx(e)) : {}, bx(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !e || !e.__esModule ? Bi(t, "default", { value: e, enumerable: !0 }) : t,
  e
)), xx = mx({
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
          encode: function p(h) {
            return h instanceof a ? new a(h.type, p(h.content), h.alias) : Array.isArray(h) ? h.map(p) : h.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
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
          type: function(p) {
            return Object.prototype.toString.call(p).slice(8, -1);
          },
          /**
           * Returns a unique number for the given object. Later calls will still return the same number.
           *
           * @param {Object} obj
           * @returns {number}
           */
          objId: function(p) {
            return p.__id || Object.defineProperty(p, "__id", { value: ++o }), p.__id;
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
          clone: function p(h, m) {
            m = m || {};
            var b, y;
            switch (s.util.type(h)) {
              case "Object":
                if (y = s.util.objId(h), m[y])
                  return m[y];
                b = /** @type {Record<string, any>} */
                {}, m[y] = b;
                for (var v in h)
                  h.hasOwnProperty(v) && (b[v] = p(h[v], m));
                return (
                  /** @type {any} */
                  b
                );
              case "Array":
                return y = s.util.objId(h), m[y] ? m[y] : (b = [], m[y] = b, h.forEach(function(_, S) {
                  b[S] = p(_, m);
                }), /** @type {any} */
                b);
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
          getLanguage: function(p) {
            for (; p; ) {
              var h = r.exec(p.className);
              if (h)
                return h[1].toLowerCase();
              p = p.parentElement;
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
          setLanguage: function(p, h) {
            p.className = p.className.replace(RegExp(r, "gi"), ""), p.classList.add("language-" + h);
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
          isActive: function(p, h, m) {
            for (var b = "no-" + h; p; ) {
              var y = p.classList;
              if (y.contains(h))
                return !0;
              if (y.contains(b))
                return !1;
              p = p.parentElement;
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
          extend: function(p, h) {
            var m = s.util.clone(s.languages[p]);
            for (var b in h)
              m[b] = h[b];
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
          insertBefore: function(p, h, m, b) {
            b = b || /** @type {any} */
            s.languages;
            var y = b[p], v = {};
            for (var _ in y)
              if (y.hasOwnProperty(_)) {
                if (_ == h)
                  for (var S in m)
                    m.hasOwnProperty(S) && (v[S] = m[S]);
                m.hasOwnProperty(_) || (v[_] = y[_]);
              }
            var C = b[p];
            return b[p] = v, s.languages.DFS(s.languages, function(E, N) {
              N === C && E != p && (this[E] = v);
            }), v;
          },
          // Traverse a language definition with Depth First Search
          DFS: function p(h, m, b, y) {
            y = y || {};
            var v = s.util.objId;
            for (var _ in h)
              if (h.hasOwnProperty(_)) {
                m.call(h, _, h[_], b || _);
                var S = h[_], C = s.util.type(S);
                C === "Object" && !y[v(S)] ? (y[v(S)] = !0, p(S, m, null, y)) : C === "Array" && !y[v(S)] && (y[v(S)] = !0, p(S, m, _, y));
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
        highlight: function(p, h, m) {
          var b = {
            code: p,
            grammar: h,
            language: m
          };
          if (s.hooks.run("before-tokenize", b), !b.grammar)
            throw new Error('The language "' + b.language + '" has no grammar.');
          return b.tokens = s.tokenize(b.code, b.grammar), s.hooks.run("after-tokenize", b), a.stringify(s.util.encode(b.tokens), b.language);
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
        tokenize: function(p, h) {
          var m = h.rest;
          if (m) {
            for (var b in m)
              h[b] = m[b];
            delete h.rest;
          }
          var y = new u();
          return d(y, y.head, p), c(p, y, h, y.head, 0), g(y);
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
          add: function(p, h) {
            var m = s.hooks.all;
            m[p] = m[p] || [], m[p].push(h);
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
          run: function(p, h) {
            var m = s.hooks.all[p];
            if (!(!m || !m.length))
              for (var b = 0, y; y = m[b++]; )
                y(h);
          }
        },
        Token: a
      };
      function a(p, h, m, b) {
        this.type = p, this.content = h, this.alias = m, this.length = (b || "").length | 0;
      }
      a.stringify = function p(h, m) {
        if (typeof h == "string")
          return h;
        if (Array.isArray(h)) {
          var b = "";
          return h.forEach(function(C) {
            b += p(C, m);
          }), b;
        }
        var y = {
          type: h.type,
          content: p(h.content, m),
          tag: "span",
          classes: ["token", h.type],
          attributes: {},
          language: m
        }, v = h.alias;
        v && (Array.isArray(v) ? Array.prototype.push.apply(y.classes, v) : y.classes.push(v)), s.hooks.run("wrap", y);
        var _ = "";
        for (var S in y.attributes)
          _ += " " + S + '="' + (y.attributes[S] || "").replace(/"/g, "&quot;") + '"';
        return "<" + y.tag + ' class="' + y.classes.join(" ") + '"' + _ + ">" + y.content + "</" + y.tag + ">";
      };
      function l(p, h, m, b) {
        p.lastIndex = h;
        var y = p.exec(m);
        if (y && b && y[1]) {
          var v = y[1].length;
          y.index += v, y[0] = y[0].slice(v);
        }
        return y;
      }
      function c(p, h, m, b, y, v) {
        for (var _ in m)
          if (!(!m.hasOwnProperty(_) || !m[_])) {
            var S = m[_];
            S = Array.isArray(S) ? S : [S];
            for (var C = 0; C < S.length; ++C) {
              if (v && v.cause == _ + "," + C)
                return;
              var E = S[C], N = E.inside, k = !!E.lookbehind, R = !!E.greedy, A = E.alias;
              if (R && !E.pattern.global) {
                var T = E.pattern.toString().match(/[imsuy]*$/)[0];
                E.pattern = RegExp(E.pattern.source, T + "g");
              }
              for (var D = E.pattern || E, O = b.next, B = y; O !== h.tail && !(v && B >= v.reach); B += O.value.length, O = O.next) {
                var W = O.value;
                if (h.length > p.length)
                  return;
                if (!(W instanceof a)) {
                  var U = 1, j;
                  if (R) {
                    if (j = l(D, B, p, k), !j || j.index >= p.length)
                      break;
                    var he = j.index, q = j.index + j[0].length, te = B;
                    for (te += O.value.length; he >= te; )
                      O = O.next, te += O.value.length;
                    if (te -= O.value.length, B = te, O.value instanceof a)
                      continue;
                    for (var ie = O; ie !== h.tail && (te < q || typeof ie.value == "string"); ie = ie.next)
                      U++, te += ie.value.length;
                    U--, W = p.slice(B, te), j.index -= B;
                  } else if (j = l(D, 0, W, k), !j)
                    continue;
                  var he = j.index, ze = j[0], Se = W.slice(0, he), De = W.slice(he + ze.length), Ce = B + W.length;
                  v && Ce > v.reach && (v.reach = Ce);
                  var Pe = O.prev;
                  Se && (Pe = d(h, Pe, Se), B += Se.length), f(h, Pe, U);
                  var Be = new a(_, N ? s.tokenize(ze, N) : ze, A, ze);
                  if (O = d(h, Pe, Be), De && d(h, O, De), U > 1) {
                    var Ve = {
                      cause: _ + "," + C,
                      reach: Ce
                    };
                    c(p, h, m, O.prev, B, Ve), v && Ve.reach > v.reach && (v.reach = Ve.reach);
                  }
                }
              }
            }
          }
      }
      function u() {
        var p = { value: null, prev: null, next: null }, h = { value: null, prev: p, next: null };
        p.next = h, this.head = p, this.tail = h, this.length = 0;
      }
      function d(p, h, m) {
        var b = h.next, y = { value: m, prev: h, next: b };
        return h.next = y, b.prev = y, p.length++, y;
      }
      function f(p, h, m) {
        for (var b = h.next, y = 0; y < m && b !== p.tail; y++)
          b = b.next;
        h.next = b, b.prev = h, p.length -= y;
      }
      function g(p) {
        for (var h = [], m = p.head.next; m !== p.tail; )
          h.push(m.value), m = m.next;
        return h;
      }
      return s;
    })();
    n.exports = t, t.default = t;
  }
}), $ = vx(xx());
$.languages.markup = { comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 }, prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 }, doctype: { pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i, greedy: !0, inside: { "internal-subset": { pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/, lookbehind: !0, greedy: !0, inside: null }, string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 }, punctuation: /^<!|>$|[[\]]/, "doctype-tag": /^DOCTYPE/i, name: /[^\s<>'"]+/ } }, cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 }, tag: { pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/, greedy: !0, inside: { tag: { pattern: /^<\/?[^\s>\/]+/, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } }, "special-attr": [], "attr-value": { pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/, inside: { punctuation: [{ pattern: /^=/, alias: "attr-equals" }, { pattern: /^(\s*)["']|["']$/, lookbehind: !0 }] } }, punctuation: /\/?>/, "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } } } }, entity: [{ pattern: /&[\da-z]{1,8};/i, alias: "named-entity" }, /&#x?[\da-f]{1,8};/i] }, $.languages.markup.tag.inside["attr-value"].inside.entity = $.languages.markup.entity, $.languages.markup.doctype.inside["internal-subset"].inside = $.languages.markup, $.hooks.add("wrap", function(e) {
  e.type === "entity" && (e.attributes.title = e.content.replace(/&amp;/, "&"));
}), Object.defineProperty($.languages.markup.tag, "addInlined", { value: function(e, r) {
  var t = {}, t = (t["language-" + r] = { pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i, lookbehind: !0, inside: $.languages[r] }, t.cdata = /^<!\[CDATA\[|\]\]>$/i, { "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: t } }), r = (t["language-" + r] = { pattern: /[\s\S]+/, inside: $.languages[r] }, {});
  r[e] = { pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
    return e;
  }), "i"), lookbehind: !0, greedy: !0, inside: t }, $.languages.insertBefore("markup", "cdata", r);
} }), Object.defineProperty($.languages.markup.tag, "addAttribute", { value: function(e, n) {
  $.languages.markup.tag.inside["special-attr"].push({ pattern: RegExp(/(^|["'\s])/.source + "(?:" + e + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"), lookbehind: !0, inside: { "attr-name": /^[^\s=]+/, "attr-value": { pattern: /=[\s\S]+/, inside: { value: { pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/, lookbehind: !0, alias: [n, "language-" + n], inside: $.languages[n] }, punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/] } } } });
} }), $.languages.html = $.languages.markup, $.languages.mathml = $.languages.markup, $.languages.svg = $.languages.markup, $.languages.xml = $.languages.extend("markup", {}), $.languages.ssml = $.languages.xml, $.languages.atom = $.languages.xml, $.languages.rss = $.languages.xml, (function(e) {
  var n = { pattern: /\\[\\(){}[\]^$+*?|.]/, alias: "escape" }, t = /\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/, r = "(?:[^\\\\-]|" + t.source + ")", r = RegExp(r + "-" + r), o = { pattern: /(<|')[^<>']+(?=[>']$)/, lookbehind: !0, alias: "variable" };
  e.languages.regex = { "char-class": { pattern: /((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/, lookbehind: !0, inside: { "char-class-negation": { pattern: /(^\[)\^/, lookbehind: !0, alias: "operator" }, "char-class-punctuation": { pattern: /^\[|\]$/, alias: "punctuation" }, range: { pattern: r, inside: { escape: t, "range-punctuation": { pattern: /-/, alias: "operator" } } }, "special-escape": n, "char-set": { pattern: /\\[wsd]|\\p\{[^{}]+\}/i, alias: "class-name" }, escape: t } }, "special-escape": n, "char-set": { pattern: /\.|\\[wsd]|\\p\{[^{}]+\}/i, alias: "class-name" }, backreference: [{ pattern: /\\(?![123][0-7]{2})[1-9]/, alias: "keyword" }, { pattern: /\\k<[^<>']+>/, alias: "keyword", inside: { "group-name": o } }], anchor: { pattern: /[$^]|\\[ABbGZz]/, alias: "function" }, escape: t, group: [{ pattern: /\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/, alias: "punctuation", inside: { "group-name": o } }, { pattern: /\)/, alias: "punctuation" }], quantifier: { pattern: /(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/, alias: "number" }, alternation: { pattern: /\|/, alias: "keyword" } };
})($), $.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0, greedy: !0 }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 }, "class-name": { pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i, lookbehind: !0, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/, boolean: /\b(?:false|true)\b/, function: /\b\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/, punctuation: /[{}[\];(),.:]/ }, $.languages.javascript = $.languages.extend("clike", { "class-name": [$.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/, lookbehind: !0 }], keyword: [{ pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 }, { pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: !0 }], function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, number: { pattern: RegExp(/(^|[^\w$])/.source + "(?:" + /NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source + ")" + /(?![\w$])/.source), lookbehind: !0 }, operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/ }), $.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, $.languages.insertBefore("javascript", "keyword", { regex: { pattern: RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source), lookbehind: !0, greedy: !0, inside: { "regex-source": { pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/, lookbehind: !0, alias: "language-regex", inside: $.languages.regex }, "regex-delimiter": /^\/|\/$/, "regex-flags": /^[a-z]+$/ } }, "function-variable": { pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/, lookbehind: !0, inside: $.languages.javascript }, { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i, lookbehind: !0, inside: $.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/, lookbehind: !0, inside: $.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/, lookbehind: !0, inside: $.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ }), $.languages.insertBefore("javascript", "string", { hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" }, "template-string": { pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/, greedy: !0, inside: { "template-punctuation": { pattern: /^`|`$/, alias: "string" }, interpolation: { pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/, lookbehind: !0, inside: { "interpolation-punctuation": { pattern: /^\$\{|\}$/, alias: "punctuation" }, rest: $.languages.javascript } }, string: /[\s\S]+/ } }, "string-property": { pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m, lookbehind: !0, greedy: !0, alias: "property" } }), $.languages.insertBefore("javascript", "operator", { "literal-property": { pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m, lookbehind: !0, alias: "property" } }), $.languages.markup && ($.languages.markup.tag.addInlined("script", "javascript"), $.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript")), $.languages.js = $.languages.javascript, $.languages.actionscript = $.languages.extend("javascript", { keyword: /\b(?:as|break|case|catch|class|const|default|delete|do|dynamic|each|else|extends|final|finally|for|function|get|if|implements|import|in|include|instanceof|interface|internal|is|namespace|native|new|null|override|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|use|var|void|while|with)\b/, operator: /\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/ }), $.languages.actionscript["class-name"].alias = "function", delete $.languages.actionscript.parameter, delete $.languages.actionscript["literal-property"], $.languages.markup && $.languages.insertBefore("actionscript", "string", { xml: { pattern: /(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/, lookbehind: !0, inside: $.languages.markup } }), (function(e) {
  var n = /#(?!\{).+/, t = { pattern: /#\{[^}]+\}/, alias: "variable" };
  e.languages.coffeescript = e.languages.extend("javascript", { comment: n, string: [{ pattern: /'(?:\\[\s\S]|[^\\'])*'/, greedy: !0 }, { pattern: /"(?:\\[\s\S]|[^\\"])*"/, greedy: !0, inside: { interpolation: t } }], keyword: /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/, "class-member": { pattern: /@(?!\d)\w+/, alias: "variable" } }), e.languages.insertBefore("coffeescript", "comment", { "multiline-comment": { pattern: /###[\s\S]+?###/, alias: "comment" }, "block-regex": { pattern: /\/{3}[\s\S]*?\/{3}/, alias: "regex", inside: { comment: n, interpolation: t } } }), e.languages.insertBefore("coffeescript", "string", { "inline-javascript": { pattern: /`(?:\\[\s\S]|[^\\`])*`/, inside: { delimiter: { pattern: /^`|`$/, alias: "punctuation" }, script: { pattern: /[\s\S]+/, alias: "language-javascript", inside: e.languages.javascript } } }, "multiline-string": [{ pattern: /'''[\s\S]*?'''/, greedy: !0, alias: "string" }, { pattern: /"""[\s\S]*?"""/, greedy: !0, alias: "string", inside: { interpolation: t } }] }), e.languages.insertBefore("coffeescript", "keyword", { property: /(?!\d)\w+(?=\s*:(?!:))/ }), delete e.languages.coffeescript["template-string"], e.languages.coffee = e.languages.coffeescript;
})($), (function(e) {
  var n = e.languages.javadoclike = { parameter: { pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m, lookbehind: !0 }, keyword: { pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m, lookbehind: !0 }, punctuation: /[{}]/ };
  Object.defineProperty(n, "addSupport", { value: function(t, r) {
    (t = typeof t == "string" ? [t] : t).forEach(function(o) {
      var i = function(d) {
        d.inside || (d.inside = {}), d.inside.rest = r;
      }, s = "doc-comment";
      if (a = e.languages[o]) {
        var a, l = a[s];
        if ((l = l || (a = e.languages.insertBefore(o, "comment", { "doc-comment": { pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/, lookbehind: !0, alias: "comment" } }))[s]) instanceof RegExp && (l = a[s] = { pattern: l }), Array.isArray(l))
          for (var c = 0, u = l.length; c < u; c++)
            l[c] instanceof RegExp && (l[c] = { pattern: l[c] }), i(l[c]);
        else
          i(l);
      }
    });
  } }), n.addSupport(["java", "javascript", "php"], n);
})($), (function(e) {
  var n = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/, n = (e.languages.css = { comment: /\/\*[\s\S]*?\*\//, atrule: { pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + n.source + ")*?" + /(?:;|(?=\s*\{))/.source), inside: { rule: /^@[\w-]+/, "selector-function-argument": { pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/, lookbehind: !0, alias: "selector" }, keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: !0 } } }, url: { pattern: RegExp("\\burl\\((?:" + n.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"), greedy: !0, inside: { function: /^url/i, punctuation: /^\(|\)$/, string: { pattern: RegExp("^" + n.source + "$"), alias: "url" } } }, selector: { pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + n.source + ")*(?=\\s*\\{)"), lookbehind: !0 }, string: { pattern: n, greedy: !0 }, property: { pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i, lookbehind: !0 }, important: /!important\b/i, function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0 }, punctuation: /[(){};:,]/ }, e.languages.css.atrule.inside.rest = e.languages.css, e.languages.markup);
  n && (n.tag.addInlined("style", "css"), n.tag.addAttribute("style", "css"));
})($), (function(e) {
  var n = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, n = (e.languages.css.selector = { pattern: e.languages.css.selector.pattern, lookbehind: !0, inside: n = { "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/, "pseudo-class": /:[-\w]+/, class: /\.[-\w]+/, id: /#[-\w]+/, attribute: { pattern: RegExp(`\\[(?:[^[\\]"']|` + n.source + ")*\\]"), greedy: !0, inside: { punctuation: /^\[|\]$/, "case-sensitivity": { pattern: /(\s)[si]$/i, lookbehind: !0, alias: "keyword" }, namespace: { pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/, lookbehind: !0, inside: { punctuation: /\|$/ } }, "attr-name": { pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/, lookbehind: !0 }, "attr-value": [n, { pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/, lookbehind: !0 }], operator: /[|~*^$]?=/ } }, "n-th": [{ pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/, lookbehind: !0, inside: { number: /[\dn]+/, operator: /[+-]/ } }, { pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i, lookbehind: !0 }], combinator: />|\+|~|\|\|/, punctuation: /[(),]/ } }, e.languages.css.atrule.inside["selector-function-argument"].inside = n, e.languages.insertBefore("css", "property", { variable: { pattern: /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i, lookbehind: !0 } }), { pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/, lookbehind: !0 }), t = { pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/, lookbehind: !0 };
  e.languages.insertBefore("css", "function", { operator: { pattern: /(\s)[+\-*\/](?=\s)/, lookbehind: !0 }, hexcode: { pattern: /\B#[\da-f]{3,8}\b/i, alias: "color" }, color: [{ pattern: /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i, lookbehind: !0 }, { pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i, inside: { unit: n, number: t, function: /[\w-]+(?=\()/, punctuation: /[(),]/ } }], entity: /\\[\da-f]{1,8}/i, unit: n, number: t });
})($), (function(e) {
  var n = /[*&][^\s[\]{},]+/, t = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/, r = "(?:" + t.source + "(?:[ 	]+" + n.source + ")?|" + n.source + "(?:[ 	]+" + t.source + ")?)", o = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, function() {
    return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
  }), i = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
  function s(a, l) {
    l = (l || "").replace(/m/g, "") + "m";
    var c = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function() {
      return r;
    }).replace(/<<value>>/g, function() {
      return a;
    });
    return RegExp(c, l);
  }
  e.languages.yaml = { scalar: { pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, function() {
    return r;
  })), lookbehind: !0, alias: "string" }, comment: /#.*/, key: { pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, function() {
    return r;
  }).replace(/<<key>>/g, function() {
    return "(?:" + o + "|" + i + ")";
  })), lookbehind: !0, greedy: !0, alias: "atrule" }, directive: { pattern: /(^[ \t]*)%.+/m, lookbehind: !0, alias: "important" }, datetime: { pattern: s(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source), lookbehind: !0, alias: "number" }, boolean: { pattern: s(/false|true/.source, "i"), lookbehind: !0, alias: "important" }, null: { pattern: s(/null|~/.source, "i"), lookbehind: !0, alias: "important" }, string: { pattern: s(i), lookbehind: !0, greedy: !0 }, number: { pattern: s(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, "i"), lookbehind: !0 }, tag: t, important: n, punctuation: /---|[:[\]{}\-,|>?]|\.\.\./ }, e.languages.yml = e.languages.yaml;
})($), (function(e) {
  var n = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
  function t(c) {
    return c = c.replace(/<inner>/g, function() {
      return n;
    }), RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + c + ")");
  }
  var r = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source, o = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function() {
    return r;
  }), i = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source, s = (e.languages.markdown = e.languages.extend("markup", {}), e.languages.insertBefore("markdown", "prolog", { "front-matter-block": { pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/, lookbehind: !0, greedy: !0, inside: { punctuation: /^---|---$/, "front-matter": { pattern: /\S+(?:\s+\S+)*/, alias: ["yaml", "language-yaml"], inside: e.languages.yaml } } }, blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: "punctuation" }, table: { pattern: RegExp("^" + o + i + "(?:" + o + ")*", "m"), inside: { "table-data-rows": { pattern: RegExp("^(" + o + i + ")(?:" + o + ")*$"), lookbehind: !0, inside: { "table-data": { pattern: RegExp(r), inside: e.languages.markdown }, punctuation: /\|/ } }, "table-line": { pattern: RegExp("^(" + o + ")" + i + "$"), lookbehind: !0, inside: { punctuation: /\||:?-{3,}:?/ } }, "table-header-row": { pattern: RegExp("^" + o + "$"), inside: { "table-header": { pattern: RegExp(r), alias: "important", inside: e.languages.markdown }, punctuation: /\|/ } } } }, code: [{ pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/, lookbehind: !0, alias: "keyword" }, { pattern: /^```[\s\S]*?^```$/m, greedy: !0, inside: { "code-block": { pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m, lookbehind: !0 }, "code-language": { pattern: /^(```).+/, lookbehind: !0 }, punctuation: /```/ } }], title: [{ pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m, alias: "important", inside: { punctuation: /==+$|--+$/ } }, { pattern: /(^\s*)#.+/m, lookbehind: !0, alias: "important", inside: { punctuation: /^#+|#+$/ } }], hr: { pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m, lookbehind: !0, alias: "punctuation" }, list: { pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m, lookbehind: !0, alias: "punctuation" }, "url-reference": { pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/, inside: { variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 }, string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/, punctuation: /^[\[\]!:]|[<>]/ }, alias: "url" }, bold: { pattern: t(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source), lookbehind: !0, greedy: !0, inside: { content: { pattern: /(^..)[\s\S]+(?=..$)/, lookbehind: !0, inside: {} }, punctuation: /\*\*|__/ } }, italic: { pattern: t(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source), lookbehind: !0, greedy: !0, inside: { content: { pattern: /(^.)[\s\S]+(?=.$)/, lookbehind: !0, inside: {} }, punctuation: /[*_]/ } }, strike: { pattern: t(/(~~?)(?:(?!~)<inner>)+\2/.source), lookbehind: !0, greedy: !0, inside: { content: { pattern: /(^~~?)[\s\S]+(?=\1$)/, lookbehind: !0, inside: {} }, punctuation: /~~?/ } }, "code-snippet": { pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/, lookbehind: !0, greedy: !0, alias: ["code", "keyword"] }, url: { pattern: t(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source), lookbehind: !0, greedy: !0, inside: { operator: /^!/, content: { pattern: /(^\[)[^\]]+(?=\])/, lookbehind: !0, inside: {} }, variable: { pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/, lookbehind: !0 }, url: { pattern: /(^\]\()[^\s)]+/, lookbehind: !0 }, string: { pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/, lookbehind: !0 } } } }), ["url", "bold", "italic", "strike"].forEach(function(c) {
    ["url", "bold", "italic", "strike", "code-snippet"].forEach(function(u) {
      c !== u && (e.languages.markdown[c].inside.content.inside[u] = e.languages.markdown[u]);
    });
  }), e.hooks.add("after-tokenize", function(c) {
    c.language !== "markdown" && c.language !== "md" || (function u(d) {
      if (d && typeof d != "string")
        for (var f = 0, g = d.length; f < g; f++) {
          var p, h = d[f];
          h.type !== "code" ? u(h.content) : (p = h.content[1], h = h.content[3], p && h && p.type === "code-language" && h.type === "code-block" && typeof p.content == "string" && (p = p.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp"), p = "language-" + (p = (/[a-z][\w-]*/i.exec(p) || [""])[0].toLowerCase()), h.alias ? typeof h.alias == "string" ? h.alias = [h.alias, p] : h.alias.push(p) : h.alias = [p]));
        }
    })(c.tokens);
  }), e.hooks.add("wrap", function(c) {
    if (c.type === "code-block") {
      for (var u = "", d = 0, f = c.classes.length; d < f; d++) {
        var g = c.classes[d], g = /language-(.+)/.exec(g);
        if (g) {
          u = g[1];
          break;
        }
      }
      var p, h = e.languages[u];
      h ? c.content = e.highlight((function(m) {
        return m = m.replace(s, ""), m = m.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function(b, y) {
          var v;
          return (y = y.toLowerCase())[0] === "#" ? (v = y[1] === "x" ? parseInt(y.slice(2), 16) : Number(y.slice(1)), l(v)) : a[y] || b;
        });
      })(c.content), h, u) : u && u !== "none" && e.plugins.autoloader && (p = "md-" + (/* @__PURE__ */ new Date()).valueOf() + "-" + Math.floor(1e16 * Math.random()), c.attributes.id = p, e.plugins.autoloader.loadLanguages(u, function() {
        var m = document.getElementById(p);
        m && (m.innerHTML = e.highlight(m.textContent, e.languages[u], u));
      }));
    }
  }), RegExp(e.languages.markup.tag.pattern.source, "gi")), a = { amp: "&", lt: "<", gt: ">", quot: '"' }, l = String.fromCodePoint || String.fromCharCode;
  e.languages.md = e.languages.markdown;
})($), $.languages.graphql = { comment: /#.*/, description: { pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i, greedy: !0, alias: "string", inside: { "language-markdown": { pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/, lookbehind: !0, inside: $.languages.markdown } } }, string: { pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/, greedy: !0 }, number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i, boolean: /\b(?:false|true)\b/, variable: /\$[a-z_]\w*/i, directive: { pattern: /@[a-z_]\w*/i, alias: "function" }, "attr-name": { pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i, greedy: !0 }, "atom-input": { pattern: /\b[A-Z]\w*Input\b/, alias: "class-name" }, scalar: /\b(?:Boolean|Float|ID|Int|String)\b/, constant: /\b[A-Z][A-Z_\d]*\b/, "class-name": { pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/, lookbehind: !0 }, fragment: { pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/, lookbehind: !0, alias: "function" }, "definition-mutation": { pattern: /(\bmutation\s+)[a-zA-Z_]\w*/, lookbehind: !0, alias: "function" }, "definition-query": { pattern: /(\bquery\s+)[a-zA-Z_]\w*/, lookbehind: !0, alias: "function" }, keyword: /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/, operator: /[!=|&]|\.{3}/, "property-query": /\w+(?=\s*\()/, object: /\w+(?=\s*\{)/, punctuation: /[!(){}\[\]:=,]/, property: /\w+/ }, $.hooks.add("after-tokenize", function(e) {
  if (e.language === "graphql")
    for (var n = e.tokens.filter(function(p) {
      return typeof p != "string" && p.type !== "comment" && p.type !== "scalar";
    }), t = 0; t < n.length; ) {
      var r = n[t++];
      if (r.type === "keyword" && r.content === "mutation") {
        var o = [];
        if (d(["definition-mutation", "punctuation"]) && u(1).content === "(") {
          t += 2;
          var i = f(/^\($/, /^\)$/);
          if (i === -1)
            continue;
          for (; t < i; t++) {
            var s = u(0);
            s.type === "variable" && (g(s, "variable-input"), o.push(s.content));
          }
          t = i + 1;
        }
        if (d(["punctuation", "property-query"]) && u(0).content === "{" && (t++, g(u(0), "property-mutation"), 0 < o.length)) {
          var a = f(/^\{$/, /^\}$/);
          if (a !== -1)
            for (var l = t; l < a; l++) {
              var c = n[l];
              c.type === "variable" && 0 <= o.indexOf(c.content) && g(c, "variable-input");
            }
        }
      }
    }
  function u(p) {
    return n[t + p];
  }
  function d(p, h) {
    h = h || 0;
    for (var m = 0; m < p.length; m++) {
      var b = u(m + h);
      if (!b || b.type !== p[m])
        return;
    }
    return 1;
  }
  function f(p, h) {
    for (var m = 1, b = t; b < n.length; b++) {
      var y = n[b], v = y.content;
      if (y.type === "punctuation" && typeof v == "string") {
        if (p.test(v))
          m++;
        else if (h.test(v) && --m === 0)
          return b;
      }
    }
    return -1;
  }
  function g(p, h) {
    var m = p.alias;
    m ? Array.isArray(m) || (p.alias = m = [m]) : p.alias = m = [], m.push(h);
  }
}), $.languages.sql = { comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/, lookbehind: !0 }, variable: [{ pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/, greedy: !0 }, /@[\w.$]+/], string: { pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/, greedy: !0, lookbehind: !0 }, identifier: { pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/, greedy: !0, lookbehind: !0, inside: { punctuation: /^`|`$/ } }, function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i, keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i, boolean: /\b(?:FALSE|NULL|TRUE)\b/i, number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i, operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i, punctuation: /[;[\]()`,.]/ }, (function(e) {
  var n = e.languages.javascript["template-string"], t = n.pattern.source, r = n.inside.interpolation, o = r.inside["interpolation-punctuation"], i = r.pattern.source;
  function s(d, f) {
    if (e.languages[d])
      return { pattern: RegExp("((?:" + f + ")\\s*)" + t), lookbehind: !0, greedy: !0, inside: { "template-punctuation": { pattern: /^`|`$/, alias: "string" }, "embedded-code": { pattern: /[\s\S]+/, alias: d } } };
  }
  function a(d, f, g) {
    return d = { code: d, grammar: f, language: g }, e.hooks.run("before-tokenize", d), d.tokens = e.tokenize(d.code, d.grammar), e.hooks.run("after-tokenize", d), d.tokens;
  }
  function l(d, f, g) {
    var m = e.tokenize(d, { interpolation: { pattern: RegExp(i), lookbehind: !0 } }), p = 0, h = {}, m = a(m.map(function(y) {
      if (typeof y == "string")
        return y;
      for (var v, _, y = y.content; d.indexOf((_ = p++, v = "___" + g.toUpperCase() + "_" + _ + "___")) !== -1; )
        ;
      return h[v] = y, v;
    }).join(""), f, g), b = Object.keys(h);
    return p = 0, (function y(v) {
      for (var _ = 0; _ < v.length; _++) {
        if (p >= b.length)
          return;
        var S, C, E, N, k, R, A, T = v[_];
        typeof T == "string" || typeof T.content == "string" ? (S = b[p], (A = (R = typeof T == "string" ? T : T.content).indexOf(S)) !== -1 && (++p, C = R.substring(0, A), k = h[S], E = void 0, (N = {})["interpolation-punctuation"] = o, (N = e.tokenize(k, N)).length === 3 && ((E = [1, 1]).push.apply(E, a(N[1], e.languages.javascript, "javascript")), N.splice.apply(N, E)), E = new e.Token("interpolation", N, r.alias, k), N = R.substring(A + S.length), k = [], C && k.push(C), k.push(E), N && (y(R = [N]), k.push.apply(k, R)), typeof T == "string" ? (v.splice.apply(v, [_, 1].concat(k)), _ += k.length - 1) : T.content = k)) : (A = T.content, Array.isArray(A) ? y(A) : y([A]));
      }
    })(m), new e.Token(g, m, "language-" + g, d);
  }
  e.languages.javascript["template-string"] = [s("css", /\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source), s("html", /\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source), s("svg", /\bsvg/.source), s("markdown", /\b(?:markdown|md)/.source), s("graphql", /\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source), s("sql", /\bsql/.source), n].filter(Boolean);
  var c = { javascript: !0, js: !0, typescript: !0, ts: !0, jsx: !0, tsx: !0 };
  function u(d) {
    return typeof d == "string" ? d : Array.isArray(d) ? d.map(u).join("") : u(d.content);
  }
  e.hooks.add("after-tokenize", function(d) {
    d.language in c && (function f(g) {
      for (var p = 0, h = g.length; p < h; p++) {
        var m, b, y, v = g[p];
        typeof v != "string" && (m = v.content, Array.isArray(m) ? v.type === "template-string" ? (v = m[1], m.length === 3 && typeof v != "string" && v.type === "embedded-code" && (b = u(v), v = v.alias, v = Array.isArray(v) ? v[0] : v, y = e.languages[v]) && (m[1] = l(b, y, v))) : f(m) : typeof m != "string" && f([m]));
      }
    })(d.tokens);
  });
})($), (function(e) {
  e.languages.typescript = e.languages.extend("javascript", { "class-name": { pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/, lookbehind: !0, greedy: !0, inside: null }, builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/ }), e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/), delete e.languages.typescript.parameter, delete e.languages.typescript["literal-property"];
  var n = e.languages.extend("typescript", {});
  delete n["class-name"], e.languages.typescript["class-name"].inside = n, e.languages.insertBefore("typescript", "function", { decorator: { pattern: /@[$\w\xA0-\uFFFF]+/, inside: { at: { pattern: /^@/, alias: "operator" }, function: /^[\s\S]+/ } }, "generic-function": { pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/, greedy: !0, inside: { function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/, generic: { pattern: /<[\s\S]+/, alias: "class-name", inside: n } } } }), e.languages.ts = e.languages.typescript;
})($), (function(e) {
  var n = e.languages.javascript, t = /\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})+\}/.source, r = "(@(?:arg|argument|param|property)\\s+(?:" + t + "\\s+)?)";
  e.languages.jsdoc = e.languages.extend("javadoclike", { parameter: { pattern: RegExp(r + /(?:(?!\s)[$\w\xA0-\uFFFF.])+(?=\s|$)/.source), lookbehind: !0, inside: { punctuation: /\./ } } }), e.languages.insertBefore("jsdoc", "keyword", { "optional-parameter": { pattern: RegExp(r + /\[(?:(?!\s)[$\w\xA0-\uFFFF.])+(?:=[^[\]]+)?\](?=\s|$)/.source), lookbehind: !0, inside: { parameter: { pattern: /(^\[)[$\w\xA0-\uFFFF\.]+/, lookbehind: !0, inside: { punctuation: /\./ } }, code: { pattern: /(=)[\s\S]*(?=\]$)/, lookbehind: !0, inside: n, alias: "language-javascript" }, punctuation: /[=[\]]/ } }, "class-name": [{ pattern: RegExp(/(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\s+(?:<TYPE>\s+)?)[A-Z]\w*(?:\.[A-Z]\w*)*/.source.replace(/<TYPE>/g, function() {
    return t;
  })), lookbehind: !0, inside: { punctuation: /\./ } }, { pattern: RegExp("(@[a-z]+\\s+)" + t), lookbehind: !0, inside: { string: n.string, number: n.number, boolean: n.boolean, keyword: e.languages.typescript.keyword, operator: /=>|\.\.\.|[&|?:*]/, punctuation: /[.,;=<>{}()[\]]/ } }], example: { pattern: /(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/, lookbehind: !0, inside: { code: { pattern: /^([\t ]*(?:\*\s*)?)\S.*$/m, lookbehind: !0, inside: n, alias: "language-javascript" } } } }), e.languages.javadoclike.addSupport("javascript", e.languages.jsdoc);
})($), (function(e) {
  e.languages.flow = e.languages.extend("javascript", {}), e.languages.insertBefore("flow", "keyword", { type: [{ pattern: /\b(?:[Bb]oolean|Function|[Nn]umber|[Ss]tring|[Ss]ymbol|any|mixed|null|void)\b/, alias: "class-name" }] }), e.languages.flow["function-variable"].pattern = /(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/i, delete e.languages.flow.parameter, e.languages.insertBefore("flow", "operator", { "flow-punctuation": { pattern: /\{\||\|\}/, alias: "punctuation" } }), Array.isArray(e.languages.flow.keyword) || (e.languages.flow.keyword = [e.languages.flow.keyword]), e.languages.flow.keyword.unshift({ pattern: /(^|[^$]\b)(?:Class|declare|opaque|type)\b(?!\$)/, lookbehind: !0 }, { pattern: /(^|[^$]\B)\$(?:Diff|Enum|Exact|Keys|ObjMap|PropertyType|Record|Shape|Subtype|Supertype|await)\b(?!\$)/, lookbehind: !0 });
})($), $.languages.n4js = $.languages.extend("javascript", { keyword: /\b(?:Array|any|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/ }), $.languages.insertBefore("n4js", "constant", { annotation: { pattern: /@+\w+/, alias: "operator" } }), $.languages.n4jsd = $.languages.n4js, (function(e) {
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
})($), (function(e) {
  var n = e.util.clone(e.languages.javascript), t = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source, r = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source, o = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
  function i(l, c) {
    return l = l.replace(/<S>/g, function() {
      return t;
    }).replace(/<BRACES>/g, function() {
      return r;
    }).replace(/<SPREAD>/g, function() {
      return o;
    }), RegExp(l, c);
  }
  o = i(o).source, e.languages.jsx = e.languages.extend("markup", n), e.languages.jsx.tag.pattern = i(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source), e.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/, e.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/, e.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, e.languages.jsx.tag.inside.comment = n.comment, e.languages.insertBefore("inside", "attr-name", { spread: { pattern: i(/<SPREAD>/.source), inside: e.languages.jsx } }, e.languages.jsx.tag), e.languages.insertBefore("inside", "special-attr", { script: { pattern: i(/=<BRACES>/.source), alias: "language-javascript", inside: { "script-punctuation": { pattern: /^=(?=\{)/, alias: "punctuation" }, rest: e.languages.jsx } } }, e.languages.jsx.tag);
  function s(l) {
    for (var c = [], u = 0; u < l.length; u++) {
      var d = l[u], f = !1;
      typeof d != "string" && (d.type === "tag" && d.content[0] && d.content[0].type === "tag" ? d.content[0].content[0].content === "</" ? 0 < c.length && c[c.length - 1].tagName === a(d.content[0].content[1]) && c.pop() : d.content[d.content.length - 1].content !== "/>" && c.push({ tagName: a(d.content[0].content[1]), openedBraces: 0 }) : 0 < c.length && d.type === "punctuation" && d.content === "{" ? c[c.length - 1].openedBraces++ : 0 < c.length && 0 < c[c.length - 1].openedBraces && d.type === "punctuation" && d.content === "}" ? c[c.length - 1].openedBraces-- : f = !0), (f || typeof d == "string") && 0 < c.length && c[c.length - 1].openedBraces === 0 && (f = a(d), u < l.length - 1 && (typeof l[u + 1] == "string" || l[u + 1].type === "plain-text") && (f += a(l[u + 1]), l.splice(u + 1, 1)), 0 < u && (typeof l[u - 1] == "string" || l[u - 1].type === "plain-text") && (f = a(l[u - 1]) + f, l.splice(u - 1, 1), u--), l[u] = new e.Token("plain-text", f, null, f)), d.content && typeof d.content != "string" && s(d.content);
    }
  }
  var a = function(l) {
    return l ? typeof l == "string" ? l : typeof l.content == "string" ? l.content : l.content.map(a).join("") : "";
  };
  e.hooks.add("after-tokenize", function(l) {
    l.language !== "jsx" && l.language !== "tsx" || s(l.tokens);
  });
})($), (function(e) {
  var n = e.util.clone(e.languages.typescript), n = (e.languages.tsx = e.languages.extend("jsx", n), delete e.languages.tsx.parameter, delete e.languages.tsx["literal-property"], e.languages.tsx.tag);
  n.pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + "(?:" + n.pattern.source + ")", n.pattern.flags), n.lookbehind = !0;
})($), $.languages.swift = { comment: { pattern: /(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/, lookbehind: !0, greedy: !0 }, "string-literal": [{ pattern: RegExp(/(^|[^"#])/.source + "(?:" + /"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/.source + "|" + /"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/.source + ")" + /(?!["#])/.source), lookbehind: !0, greedy: !0, inside: { interpolation: { pattern: /(\\\()(?:[^()]|\([^()]*\))*(?=\))/, lookbehind: !0, inside: null }, "interpolation-punctuation": { pattern: /^\)|\\\($/, alias: "punctuation" }, punctuation: /\\(?=[\r\n])/, string: /[\s\S]+/ } }, { pattern: RegExp(/(^|[^"#])(#+)/.source + "(?:" + /"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/.source + "|" + /"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/.source + ")\\2"), lookbehind: !0, greedy: !0, inside: { interpolation: { pattern: /(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/, lookbehind: !0, inside: null }, "interpolation-punctuation": { pattern: /^\)|\\#+\($/, alias: "punctuation" }, string: /[\s\S]+/ } }], directive: { pattern: RegExp(/#/.source + "(?:" + /(?:elseif|if)\b/.source + "(?:[ 	]*" + /(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/.source + ")+|" + /(?:else|endif)\b/.source + ")"), alias: "property", inside: { "directive-name": /^#\w+/, boolean: /\b(?:false|true)\b/, number: /\b\d+(?:\.\d+)*\b/, operator: /!|&&|\|\||[<>]=?/, punctuation: /[(),]/ } }, literal: { pattern: /#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/, alias: "constant" }, "other-directive": { pattern: /#\w+\b/, alias: "property" }, attribute: { pattern: /@\w+/, alias: "atrule" }, "function-definition": { pattern: /(\bfunc\s+)\w+/, lookbehind: !0, alias: "function" }, label: { pattern: /\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/, lookbehind: !0, alias: "important" }, keyword: /\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/, boolean: /\b(?:false|true)\b/, nil: { pattern: /\bnil\b/, alias: "constant" }, "short-argument": /\$\d+\b/, omit: { pattern: /\b_\b/, alias: "keyword" }, number: /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i, "class-name": /\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/, function: /\b[a-z_]\w*(?=\s*\()/i, constant: /\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/, operator: /[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/, punctuation: /[{}[\]();,.:\\]/ }, $.languages.swift["string-literal"].forEach(function(e) {
  e.inside.interpolation.inside = $.languages.swift;
}), (function(e) {
  e.languages.kotlin = e.languages.extend("clike", { keyword: { pattern: /(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/, lookbehind: !0 }, function: [{ pattern: /(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/, greedy: !0 }, { pattern: /(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/, lookbehind: !0, greedy: !0 }], number: /\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/, operator: /\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/ }), delete e.languages.kotlin["class-name"];
  var n = { "interpolation-punctuation": { pattern: /^\$\{?|\}$/, alias: "punctuation" }, expression: { pattern: /[\s\S]+/, inside: e.languages.kotlin } };
  e.languages.insertBefore("kotlin", "string", { "string-literal": [{ pattern: /"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/, alias: "multiline", inside: { interpolation: { pattern: /\$(?:[a-z_]\w*|\{[^{}]*\})/i, inside: n }, string: /[\s\S]+/ } }, { pattern: /"(?:[^"\\\r\n$]|\\.|\$(?:(?!\{)|\{[^{}]*\}))*"/, alias: "singleline", inside: { interpolation: { pattern: /((?:^|[^\\])(?:\\{2})*)\$(?:[a-z_]\w*|\{[^{}]*\})/i, lookbehind: !0, inside: n }, string: /[\s\S]+/ } }], char: { pattern: /'(?:[^'\\\r\n]|\\(?:.|u[a-fA-F0-9]{0,4}))'/, greedy: !0 } }), delete e.languages.kotlin.string, e.languages.insertBefore("kotlin", "keyword", { annotation: { pattern: /\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/, alias: "builtin" } }), e.languages.insertBefore("kotlin", "function", { label: { pattern: /\b\w+@|@\w+\b/, alias: "symbol" } }), e.languages.kt = e.languages.kotlin, e.languages.kts = e.languages.kotlin;
})($), $.languages.c = $.languages.extend("clike", { comment: { pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 }, string: { pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/, greedy: !0 }, "class-name": { pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/, lookbehind: !0 }, keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/, function: /\b[a-z_]\w*(?=\s*\()/i, number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i, operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/ }), $.languages.insertBefore("c", "string", { char: { pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/, greedy: !0 } }), $.languages.insertBefore("c", "string", { macro: { pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im, lookbehind: !0, greedy: !0, alias: "property", inside: { string: [{ pattern: /^(#\s*include\s*)<[^>]+>/, lookbehind: !0 }, $.languages.c.string], char: $.languages.c.char, comment: $.languages.c.comment, "macro-name": [{ pattern: /(^#\s*define\s+)\w+\b(?!\()/i, lookbehind: !0 }, { pattern: /(^#\s*define\s+)\w+\b(?=\()/i, lookbehind: !0, alias: "function" }], directive: { pattern: /^(#\s*)[a-z]+/, lookbehind: !0, alias: "keyword" }, "directive-hash": /^#/, punctuation: /##|\\(?=[\r\n])/, expression: { pattern: /\S[\s\S]*/, inside: $.languages.c } } } }), $.languages.insertBefore("c", "function", { constant: /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/ }), delete $.languages.c.boolean, $.languages.objectivec = $.languages.extend("c", { string: { pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/, greedy: !0 }, keyword: /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/, operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/ }), delete $.languages.objectivec["class-name"], $.languages.objc = $.languages.objectivec, $.languages.reason = $.languages.extend("clike", { string: { pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/, greedy: !0 }, "class-name": /\b[A-Z]\w*/, keyword: /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/, operator: /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/ }), $.languages.insertBefore("reason", "class-name", { char: { pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/, greedy: !0 }, constructor: /\b[A-Z]\w*\b(?!\s*\.)/, label: { pattern: /\b[a-z]\w*(?=::)/, alias: "symbol" } }), delete $.languages.reason.function, (function(e) {
  for (var n = /\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source, t = 0; t < 2; t++)
    n = n.replace(/<self>/g, function() {
      return n;
    });
  n = n.replace(/<self>/g, function() {
    return /[^\s\S]/.source;
  }), e.languages.rust = { comment: [{ pattern: RegExp(/(^|[^\\])/.source + n), lookbehind: !0, greedy: !0 }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }], string: { pattern: /b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/, greedy: !0 }, char: { pattern: /b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/, greedy: !0 }, attribute: { pattern: /#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/, greedy: !0, alias: "attr-name", inside: { string: null } }, "closure-params": { pattern: /([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/, lookbehind: !0, greedy: !0, inside: { "closure-punctuation": { pattern: /^\||\|$/, alias: "punctuation" }, rest: null } }, "lifetime-annotation": { pattern: /'\w+/, alias: "symbol" }, "fragment-specifier": { pattern: /(\$\w+:)[a-z]+/, lookbehind: !0, alias: "punctuation" }, variable: /\$\w+/, "function-definition": { pattern: /(\bfn\s+)\w+/, lookbehind: !0, alias: "function" }, "type-definition": { pattern: /(\b(?:enum|struct|trait|type|union)\s+)\w+/, lookbehind: !0, alias: "class-name" }, "module-declaration": [{ pattern: /(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/, lookbehind: !0, alias: "namespace" }, { pattern: /(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/, lookbehind: !0, alias: "namespace", inside: { punctuation: /::/ } }], keyword: [/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/, /\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/], function: /\b[a-z_]\w*(?=\s*(?:::\s*<|\())/, macro: { pattern: /\b\w+!/, alias: "property" }, constant: /\b[A-Z_][A-Z_\d]+\b/, "class-name": /\b[A-Z]\w*\b/, namespace: { pattern: /(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/, inside: { punctuation: /::/ } }, number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/, boolean: /\b(?:false|true)\b/, punctuation: /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/, operator: /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/ }, e.languages.rust["closure-params"].inside.rest = e.languages.rust, e.languages.rust.attribute.inside.string = e.languages.rust.string;
})($), $.languages.go = $.languages.extend("clike", { string: { pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/, lookbehind: !0, greedy: !0 }, keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/, boolean: /\b(?:_|false|iota|nil|true)\b/, number: [/\b0(?:b[01_]+|o[0-7_]+)i?\b/i, /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i, /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i], operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./, builtin: /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/ }), $.languages.insertBefore("go", "string", { char: { pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/, greedy: !0 } }), delete $.languages.go["class-name"], (function(e) {
  var n = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/, t = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function() {
    return n.source;
  });
  e.languages.cpp = e.languages.extend("c", { "class-name": [{ pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, function() {
    return n.source;
  })), lookbehind: !0 }, /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/, /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i, /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/], keyword: n, number: { pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i, greedy: !0 }, operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/, boolean: /\b(?:false|true)\b/ }), e.languages.insertBefore("cpp", "string", { module: { pattern: RegExp(/(\b(?:import|module)\s+)/.source + "(?:" + /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source + "|" + /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, function() {
    return t;
  }) + ")"), lookbehind: !0, greedy: !0, inside: { string: /^[<"][\s\S]+/, operator: /:/, punctuation: /\./ } }, "raw-string": { pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/, alias: "string", greedy: !0 } }), e.languages.insertBefore("cpp", "keyword", { "generic-function": { pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i, inside: { function: /^\w+/, generic: { pattern: /<[\s\S]+/, alias: "class-name", inside: e.languages.cpp } } } }), e.languages.insertBefore("cpp", "operator", { "double-colon": { pattern: /::/, alias: "punctuation" } }), e.languages.insertBefore("cpp", "class-name", { "base-clause": { pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/, lookbehind: !0, greedy: !0, inside: e.languages.extend("cpp", {}) } }), e.languages.insertBefore("inside", "double-colon", { "class-name": /\b[a-z_]\w*\b(?!\s*::)/i }, e.languages.cpp["base-clause"]);
})($), $.languages.python = { comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0, greedy: !0 }, "string-interpolation": { pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i, greedy: !0, inside: { interpolation: { pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/, lookbehind: !0, inside: { "format-spec": { pattern: /(:)[^:(){}]+(?=\}$)/, lookbehind: !0 }, "conversion-option": { pattern: /![sra](?=[:}]$)/, alias: "punctuation" }, rest: null } }, string: /[\s\S]+/ } }, "triple-quoted-string": { pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i, greedy: !0, alias: "string" }, string: { pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i, greedy: !0 }, function: { pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g, lookbehind: !0 }, "class-name": { pattern: /(\bclass\s+)\w+/i, lookbehind: !0 }, decorator: { pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m, lookbehind: !0, alias: ["annotation", "punctuation"], inside: { punctuation: /\./ } }, keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/, builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/, boolean: /\b(?:False|None|True)\b/, number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i, operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/, punctuation: /[{}[\];(),.:]/ }, $.languages.python["string-interpolation"].inside.interpolation.inside.rest = $.languages.python, $.languages.py = $.languages.python, $.languages.json = { property: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, lookbehind: !0, greedy: !0 }, string: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, lookbehind: !0, greedy: !0 }, comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 }, number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i, punctuation: /[{}[\],]/, operator: /:/, boolean: /\b(?:false|true)\b/, null: { pattern: /\bnull\b/, alias: "keyword" } }, $.languages.webmanifest = $.languages.json;
var bg = {};
yx(bg, {
  dracula: () => _x,
  duotoneDark: () => Cx,
  duotoneLight: () => kx,
  github: () => Rx,
  gruvboxMaterialDark: () => rw,
  gruvboxMaterialLight: () => iw,
  jettwaveDark: () => Yx,
  jettwaveLight: () => Jx,
  nightOwl: () => Tx,
  nightOwlLight: () => Px,
  oceanicNext: () => Ox,
  okaidia: () => Mx,
  oneDark: () => Qx,
  oneLight: () => tw,
  palenight: () => Lx,
  shadesOfPurple: () => Bx,
  synthwave84: () => jx,
  ultramin: () => Gx,
  vsDark: () => vg,
  vsLight: () => Kx
});
var wx = {
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
}, _x = wx, Sx = {
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
}, Cx = Sx, Ex = {
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
}, kx = Ex, Nx = {
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
}, Rx = Nx, Ax = {
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
}, Tx = Ax, Fx = {
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
}, Px = Fx, Ge = {
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
}, Ix = {
  plain: {
    backgroundColor: "#282c34",
    color: "#ffffff"
  },
  styles: [
    {
      types: ["attr-name"],
      style: {
        color: Ge.keyword
      }
    },
    {
      types: ["attr-value"],
      style: {
        color: Ge.string
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
        color: Ge.comment
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
        color: Ge.primitive
      }
    },
    {
      types: ["boolean"],
      style: {
        color: Ge.boolean
      }
    },
    {
      types: ["tag"],
      style: {
        color: Ge.tag
      }
    },
    {
      types: ["string"],
      style: {
        color: Ge.string
      }
    },
    {
      types: ["punctuation"],
      style: {
        color: Ge.string
      }
    },
    {
      types: ["selector", "char", "builtin", "inserted"],
      style: {
        color: Ge.char
      }
    },
    {
      types: ["function"],
      style: {
        color: Ge.function
      }
    },
    {
      types: ["operator", "entity", "url", "variable"],
      style: {
        color: Ge.variable
      }
    },
    {
      types: ["keyword"],
      style: {
        color: Ge.keyword
      }
    },
    {
      types: ["atrule", "class-name"],
      style: {
        color: Ge.className
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
}, Ox = Ix, $x = {
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
}, Mx = $x, Dx = {
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
}, Lx = Dx, zx = {
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
}, Bx = zx, Vx = {
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
}, jx = Vx, Ux = {
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
}, Gx = Ux, Wx = {
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
}, vg = Wx, Hx = {
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
}, Kx = Hx, qx = {
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
}, Yx = qx, Zx = {
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
}, Jx = Zx, Xx = {
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
}, Qx = Xx, ew = {
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
}, tw = ew, nw = {
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
}, rw = nw, ow = {
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
}, iw = ow, sw = (e) => dr(
  (n) => {
    var t = n, { className: r, style: o, line: i } = t, s = yg(t, ["className", "style", "line"]);
    const a = Vi(wt({}, s), {
      className: Oi("token-line", r)
    });
    return typeof e == "object" && "plain" in e && (a.style = e.plain), typeof o == "object" && (a.style = wt(wt({}, a.style || {}), o)), a;
  },
  [e]
), aw = (e) => {
  const n = dr(
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
  return dr(
    (t) => {
      var r = t, { token: o, className: i, style: s } = r, a = yg(r, ["token", "className", "style"]);
      const l = Vi(wt({}, a), {
        className: Oi("token", ...o.types, i),
        children: o.content,
        style: n(o)
      });
      return s != null && (l.style = wt(wt({}, l.style || {}), s)), l;
    },
    [n]
  );
}, lw = /\r\n|\r|\n/, Tc = (e) => {
  e.length === 0 ? e.push({
    types: ["plain"],
    content: `
`,
    empty: !0
  }) : e.length === 1 && e[0].content === "" && (e[0].content = `
`, e[0].empty = !0);
}, Fc = (e, n) => {
  const t = e.length;
  return t > 0 && e[t - 1] === n ? e : e.concat(n);
}, cw = (e) => {
  const n = [[]], t = [e], r = [0], o = [e.length];
  let i = 0, s = 0, a = [];
  const l = [a];
  for (; s > -1; ) {
    for (; (i = r[s]++) < o[s]; ) {
      let c, u = n[s];
      const f = t[s][i];
      if (typeof f == "string" ? (u = s > 0 ? u : ["plain"], c = f) : (u = Fc(u, f.type), f.alias && (u = Fc(u, f.alias)), c = f.content), typeof c != "string") {
        s++, n.push(u), t.push(c), r.push(0), o.push(c.length);
        continue;
      }
      const g = c.split(lw), p = g.length;
      a.push({
        types: u,
        content: g[0]
      });
      for (let h = 1; h < p; h++)
        Tc(a), l.push(a = []), a.push({
          types: u,
          content: g[h]
        });
    }
    s--, n.pop(), t.pop(), r.pop(), o.pop();
  }
  return Tc(a), l;
}, Pc = cw, uw = ({ prism: e, code: n, grammar: t, language: r }) => vr(() => {
  if (t == null)
    return Pc([n]);
  const o = {
    code: n,
    grammar: t,
    language: r,
    tokens: []
  };
  return e.hooks.run("before-tokenize", o), o.tokens = e.tokenize(n, t), e.hooks.run("after-tokenize", o), Pc(o.tokens);
}, [
  n,
  t,
  r,
  // prism is a stable import
  e
]), dw = (e, n) => {
  const { plain: t } = e, r = e.styles.reduce((o, i) => {
    const { languages: s, style: a } = i;
    return s && !s.includes(n) || i.types.forEach((l) => {
      const c = wt(wt({}, o[l]), a);
      o[l] = c;
    }), o;
  }, {});
  return r.root = t, r.plain = Vi(wt({}, t), { backgroundColor: void 0 }), r;
}, fw = dw, gw = ({
  children: e,
  language: n,
  code: t,
  theme: r,
  prism: o
}) => {
  const i = n.toLowerCase(), s = fw(r, i), a = sw(s), l = aw(s), c = o.languages[i], u = uw({ prism: o, language: i, code: t, grammar: c });
  return e({
    tokens: u,
    className: `prism-code language-${i}`,
    style: s != null ? s.root : {},
    getLineProps: a,
    getTokenProps: l
  });
}, pw = (e) => ur(gw, Vi(wt({}, e), {
  prism: e.prism || $,
  theme: e.theme || vg,
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
const hw = Y(
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
), mw = x.forwardRef(
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
    maxHeight: c,
    highlightLines: u,
    ...d
  }, f) => {
    const [g, p] = x.useState(!1), [h, m] = x.useState(l), b = () => {
      navigator.clipboard.writeText(t).then(() => {
        p(!0), setTimeout(() => {
          p(!1);
        }, 2e3);
      }).catch((_) => {
        console.error("Failed to copy code:", _);
      });
    }, v = ((_) => {
      if (!_) return /* @__PURE__ */ new Set();
      if (Array.isArray(_)) return new Set(_);
      const S = /* @__PURE__ */ new Set();
      return _.split(",").forEach((E) => {
        const N = E.trim();
        if (N.includes("-")) {
          const k = N.split("-"), R = Number(k[0]), A = Number(k[1]);
          if (!isNaN(R) && !isNaN(A))
            for (let T = R; T <= A; T++)
              S.add(T);
        } else {
          const k = Number(N);
          isNaN(k) || S.add(k);
        }
      }), S;
    })(u);
    return /* @__PURE__ */ M("div", { ref: f, className: I(hw({ size: n }), e), ...d, children: [
      (s || a) && /* @__PURE__ */ M("div", { className: "flex items-center justify-between border-b border-slate-800 bg-slate-900/50 px-4 py-2", children: [
        /* @__PURE__ */ M("div", { className: "flex items-center gap-2", children: [
          s && /* @__PURE__ */ w("span", { className: "font-mono text-xs text-slate-400", children: s }),
          a && /* @__PURE__ */ w(
            "button",
            {
              onClick: () => {
                m(!h);
              },
              className: "ml-2 rounded p-1 text-slate-400 transition-colors hover:bg-slate-800 hover:text-slate-200",
              "aria-label": h ? "Expand code" : "Collapse code",
              children: h ? /* @__PURE__ */ w($i, { className: "h-4 w-4" }) : /* @__PURE__ */ w(uf, { className: "h-4 w-4" })
            }
          )
        ] }),
        i && !h && /* @__PURE__ */ w(
          "button",
          {
            onClick: b,
            className: "flex items-center gap-1.5 rounded px-2 py-1 text-xs text-slate-400 transition-colors hover:bg-slate-800 hover:text-slate-200",
            "aria-label": "Copy code to clipboard",
            children: g ? /* @__PURE__ */ M(st, { children: [
              /* @__PURE__ */ w(Xo, { className: "h-3.5 w-3.5" }),
              /* @__PURE__ */ w("span", { children: "Copied!" })
            ] }) : /* @__PURE__ */ M(st, { children: [
              /* @__PURE__ */ w(vc, { className: "h-3.5 w-3.5" }),
              /* @__PURE__ */ w("span", { children: "Copy" })
            ] })
          }
        )
      ] }),
      !h && /* @__PURE__ */ w(
        "div",
        {
          className: "overflow-auto",
          style: c ? { maxHeight: `${c}px` } : void 0,
          children: /* @__PURE__ */ w(pw, { theme: bg.nightOwl, code: t.trim(), language: r, children: ({ className: _, style: S, tokens: C, getLineProps: E, getTokenProps: N }) => /* @__PURE__ */ w("pre", { className: I("p-4 font-mono", _), style: S, children: C.map((k, R) => {
            const A = R + 1, T = v.has(A), D = E({ line: k });
            return /* @__PURE__ */ M(
              "div",
              {
                ...D,
                className: I(
                  D.className,
                  "table-row",
                  T && "bg-blue-500/10"
                ),
                children: [
                  o && /* @__PURE__ */ w("span", { className: "table-cell w-8 pr-4 text-right text-slate-500 select-none", children: A }),
                  /* @__PURE__ */ w("span", { className: "table-cell", children: k.map((O, B) => /* @__PURE__ */ w("span", { ...N({ token: O }) }, B)) })
                ]
              },
              R
            );
          }) }) })
        }
      ),
      i && !s && !a && /* @__PURE__ */ w(
        "button",
        {
          onClick: b,
          className: "absolute top-2 right-2 rounded bg-slate-800/80 p-2 text-slate-400 backdrop-blur-sm transition-colors hover:bg-slate-700 hover:text-slate-200",
          "aria-label": "Copy code to clipboard",
          children: g ? /* @__PURE__ */ w(Xo, { className: "h-4 w-4" }) : /* @__PURE__ */ w(vc, { className: "h-4 w-4" })
        }
      )
    ] });
  }
);
mw.displayName = "CodeBlock";
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
function Zt(e, n) {
  return typeof e == "function" ? e(n) : e;
}
function qe(e, n) {
  return (t) => {
    n.setState((r) => ({
      ...r,
      [e]: Zt(t, r[e])
    }));
  };
}
function ji(e) {
  return e instanceof Function;
}
function yw(e) {
  return Array.isArray(e) && e.every((n) => typeof n == "number");
}
function bw(e, n) {
  const t = [], r = (o) => {
    o.forEach((i) => {
      t.push(i);
      const s = n(i);
      s != null && s.length && r(s);
    });
  };
  return r(e), t;
}
function Z(e, n, t) {
  let r = [], o;
  return (i) => {
    let s;
    t.key && t.debug && (s = Date.now());
    const a = e(i);
    if (!(a.length !== r.length || a.some((u, d) => r[d] !== u)))
      return o;
    r = a;
    let c;
    if (t.key && t.debug && (c = Date.now()), o = n(...a), t == null || t.onChange == null || t.onChange(o), t.key && t.debug && t != null && t.debug()) {
      const u = Math.round((Date.now() - s) * 100) / 100, d = Math.round((Date.now() - c) * 100) / 100, f = d / 16, g = (p, h) => {
        for (p = String(p); p.length < h; )
          p = " " + p;
        return p;
      };
      console.info(`%c⏱ ${g(d, 5)} /${g(u, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * f, 120))}deg 100% 31%);`, t == null ? void 0 : t.key);
    }
    return o;
  };
}
function J(e, n, t, r) {
  return {
    debug: () => {
      var o;
      return (o = e == null ? void 0 : e.debugAll) != null ? o : e[n];
    },
    key: process.env.NODE_ENV === "development" && t,
    onChange: r
  };
}
function vw(e, n, t, r) {
  const o = () => {
    var s;
    return (s = i.getValue()) != null ? s : e.options.renderFallbackValue;
  }, i = {
    id: `${n.id}_${t.id}`,
    row: n,
    column: t,
    getValue: () => n.getValue(r),
    renderValue: o,
    getContext: Z(() => [e, t, n, i], (s, a, l, c) => ({
      table: s,
      column: a,
      row: l,
      cell: c,
      getValue: c.getValue,
      renderValue: c.renderValue
    }), J(e.options, "debugCells", "cell.getContext"))
  };
  return e._features.forEach((s) => {
    s.createCell == null || s.createCell(i, t, n, e);
  }, {}), i;
}
function xw(e, n, t, r) {
  var o, i;
  const a = {
    ...e._getDefaultColumnDef(),
    ...n
  }, l = a.accessorKey;
  let c = (o = (i = a.id) != null ? i : l ? typeof String.prototype.replaceAll == "function" ? l.replaceAll(".", "_") : l.replace(/\./g, "_") : void 0) != null ? o : typeof a.header == "string" ? a.header : void 0, u;
  if (a.accessorFn ? u = a.accessorFn : l && (l.includes(".") ? u = (f) => {
    let g = f;
    for (const h of l.split(".")) {
      var p;
      g = (p = g) == null ? void 0 : p[h], process.env.NODE_ENV !== "production" && g === void 0 && console.warn(`"${h}" in deeply nested key "${l}" returned undefined.`);
    }
    return g;
  } : u = (f) => f[a.accessorKey]), !c)
    throw process.env.NODE_ENV !== "production" ? new Error(a.accessorFn ? "Columns require an id when using an accessorFn" : "Columns require an id when using a non-string header") : new Error();
  let d = {
    id: `${String(c)}`,
    accessorFn: u,
    parent: r,
    depth: t,
    columnDef: a,
    columns: [],
    getFlatColumns: Z(() => [!0], () => {
      var f;
      return [d, ...(f = d.columns) == null ? void 0 : f.flatMap((g) => g.getFlatColumns())];
    }, J(e.options, "debugColumns", "column.getFlatColumns")),
    getLeafColumns: Z(() => [e._getOrderColumnsFn()], (f) => {
      var g;
      if ((g = d.columns) != null && g.length) {
        let p = d.columns.flatMap((h) => h.getLeafColumns());
        return f(p);
      }
      return [d];
    }, J(e.options, "debugColumns", "column.getLeafColumns"))
  };
  for (const f of e._features)
    f.createColumn == null || f.createColumn(d, e);
  return d;
}
const Ie = "debugHeaders";
function Ic(e, n, t) {
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
const ww = {
  createTable: (e) => {
    e.getHeaderGroups = Z(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (n, t, r, o) => {
      var i, s;
      const a = (i = r == null ? void 0 : r.map((d) => t.find((f) => f.id === d)).filter(Boolean)) != null ? i : [], l = (s = o == null ? void 0 : o.map((d) => t.find((f) => f.id === d)).filter(Boolean)) != null ? s : [], c = t.filter((d) => !(r != null && r.includes(d.id)) && !(o != null && o.includes(d.id)));
      return So(n, [...a, ...c, ...l], e);
    }, J(e.options, Ie, "getHeaderGroups")), e.getCenterHeaderGroups = Z(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (n, t, r, o) => (t = t.filter((i) => !(r != null && r.includes(i.id)) && !(o != null && o.includes(i.id))), So(n, t, e, "center")), J(e.options, Ie, "getCenterHeaderGroups")), e.getLeftHeaderGroups = Z(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left], (n, t, r) => {
      var o;
      const i = (o = r == null ? void 0 : r.map((s) => t.find((a) => a.id === s)).filter(Boolean)) != null ? o : [];
      return So(n, i, e, "left");
    }, J(e.options, Ie, "getLeftHeaderGroups")), e.getRightHeaderGroups = Z(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right], (n, t, r) => {
      var o;
      const i = (o = r == null ? void 0 : r.map((s) => t.find((a) => a.id === s)).filter(Boolean)) != null ? o : [];
      return So(n, i, e, "right");
    }, J(e.options, Ie, "getRightHeaderGroups")), e.getFooterGroups = Z(() => [e.getHeaderGroups()], (n) => [...n].reverse(), J(e.options, Ie, "getFooterGroups")), e.getLeftFooterGroups = Z(() => [e.getLeftHeaderGroups()], (n) => [...n].reverse(), J(e.options, Ie, "getLeftFooterGroups")), e.getCenterFooterGroups = Z(() => [e.getCenterHeaderGroups()], (n) => [...n].reverse(), J(e.options, Ie, "getCenterFooterGroups")), e.getRightFooterGroups = Z(() => [e.getRightHeaderGroups()], (n) => [...n].reverse(), J(e.options, Ie, "getRightFooterGroups")), e.getFlatHeaders = Z(() => [e.getHeaderGroups()], (n) => n.map((t) => t.headers).flat(), J(e.options, Ie, "getFlatHeaders")), e.getLeftFlatHeaders = Z(() => [e.getLeftHeaderGroups()], (n) => n.map((t) => t.headers).flat(), J(e.options, Ie, "getLeftFlatHeaders")), e.getCenterFlatHeaders = Z(() => [e.getCenterHeaderGroups()], (n) => n.map((t) => t.headers).flat(), J(e.options, Ie, "getCenterFlatHeaders")), e.getRightFlatHeaders = Z(() => [e.getRightHeaderGroups()], (n) => n.map((t) => t.headers).flat(), J(e.options, Ie, "getRightFlatHeaders")), e.getCenterLeafHeaders = Z(() => [e.getCenterFlatHeaders()], (n) => n.filter((t) => {
      var r;
      return !((r = t.subHeaders) != null && r.length);
    }), J(e.options, Ie, "getCenterLeafHeaders")), e.getLeftLeafHeaders = Z(() => [e.getLeftFlatHeaders()], (n) => n.filter((t) => {
      var r;
      return !((r = t.subHeaders) != null && r.length);
    }), J(e.options, Ie, "getLeftLeafHeaders")), e.getRightLeafHeaders = Z(() => [e.getRightFlatHeaders()], (n) => n.filter((t) => {
      var r;
      return !((r = t.subHeaders) != null && r.length);
    }), J(e.options, Ie, "getRightLeafHeaders")), e.getLeafHeaders = Z(() => [e.getLeftHeaderGroups(), e.getCenterHeaderGroups(), e.getRightHeaderGroups()], (n, t, r) => {
      var o, i, s, a, l, c;
      return [...(o = (i = n[0]) == null ? void 0 : i.headers) != null ? o : [], ...(s = (a = t[0]) == null ? void 0 : a.headers) != null ? s : [], ...(l = (c = r[0]) == null ? void 0 : c.headers) != null ? l : []].map((u) => u.getLeafHeaders()).flat();
    }, J(e.options, Ie, "getLeafHeaders"));
  }
};
function So(e, n, t, r) {
  var o, i;
  let s = 0;
  const a = function(f, g) {
    g === void 0 && (g = 1), s = Math.max(s, g), f.filter((p) => p.getIsVisible()).forEach((p) => {
      var h;
      (h = p.columns) != null && h.length && a(p.columns, g + 1);
    }, 0);
  };
  a(e);
  let l = [];
  const c = (f, g) => {
    const p = {
      depth: g,
      id: [r, `${g}`].filter(Boolean).join("_"),
      headers: []
    }, h = [];
    f.forEach((m) => {
      const b = [...h].reverse()[0], y = m.column.depth === p.depth;
      let v, _ = !1;
      if (y && m.column.parent ? v = m.column.parent : (v = m.column, _ = !0), b && (b == null ? void 0 : b.column) === v)
        b.subHeaders.push(m);
      else {
        const S = Ic(t, v, {
          id: [r, g, v.id, m == null ? void 0 : m.id].filter(Boolean).join("_"),
          isPlaceholder: _,
          placeholderId: _ ? `${h.filter((C) => C.column === v).length}` : void 0,
          depth: g,
          index: h.length
        });
        S.subHeaders.push(m), h.push(S);
      }
      p.headers.push(m), m.headerGroup = p;
    }), l.push(p), g > 0 && c(h, g - 1);
  }, u = n.map((f, g) => Ic(t, f, {
    depth: s,
    index: g
  }));
  c(u, s - 1), l.reverse();
  const d = (f) => f.filter((p) => p.column.getIsVisible()).map((p) => {
    let h = 0, m = 0, b = [0];
    p.subHeaders && p.subHeaders.length ? (b = [], d(p.subHeaders).forEach((v) => {
      let {
        colSpan: _,
        rowSpan: S
      } = v;
      h += _, b.push(S);
    })) : h = 1;
    const y = Math.min(...b);
    return m = m + y, p.colSpan = h, p.rowSpan = m, {
      colSpan: h,
      rowSpan: m
    };
  });
  return d((o = (i = l[0]) == null ? void 0 : i.headers) != null ? o : []), l;
}
const cl = (e, n, t, r, o, i, s) => {
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
      const c = e.getColumn(l);
      if (c != null && c.accessorFn)
        return a._valuesCache[l] = c.accessorFn(a.original, r), a._valuesCache[l];
    },
    getUniqueValues: (l) => {
      if (a._uniqueValuesCache.hasOwnProperty(l))
        return a._uniqueValuesCache[l];
      const c = e.getColumn(l);
      if (c != null && c.accessorFn)
        return c.columnDef.getUniqueValues ? (a._uniqueValuesCache[l] = c.columnDef.getUniqueValues(a.original, r), a._uniqueValuesCache[l]) : (a._uniqueValuesCache[l] = [a.getValue(l)], a._uniqueValuesCache[l]);
    },
    renderValue: (l) => {
      var c;
      return (c = a.getValue(l)) != null ? c : e.options.renderFallbackValue;
    },
    subRows: [],
    getLeafRows: () => bw(a.subRows, (l) => l.subRows),
    getParentRow: () => a.parentId ? e.getRow(a.parentId, !0) : void 0,
    getParentRows: () => {
      let l = [], c = a;
      for (; ; ) {
        const u = c.getParentRow();
        if (!u) break;
        l.push(u), c = u;
      }
      return l.reverse();
    },
    getAllCells: Z(() => [e.getAllLeafColumns()], (l) => l.map((c) => vw(e, a, c, c.id)), J(e.options, "debugRows", "getAllCells")),
    _getAllCellsByColumnId: Z(() => [a.getAllCells()], (l) => l.reduce((c, u) => (c[u.column.id] = u, c), {}), J(e.options, "debugRows", "getAllCellsByColumnId"))
  };
  for (let l = 0; l < e._features.length; l++) {
    const c = e._features[l];
    c == null || c.createRow == null || c.createRow(a, e);
  }
  return a;
}, _w = {
  createColumn: (e, n) => {
    e._getFacetedRowModel = n.options.getFacetedRowModel && n.options.getFacetedRowModel(n, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : n.getPreFilteredRowModel(), e._getFacetedUniqueValues = n.options.getFacetedUniqueValues && n.options.getFacetedUniqueValues(n, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = n.options.getFacetedMinMaxValues && n.options.getFacetedMinMaxValues(n, e.id), e.getFacetedMinMaxValues = () => {
      if (e._getFacetedMinMaxValues)
        return e._getFacetedMinMaxValues();
    };
  }
}, xg = (e, n, t) => {
  var r, o;
  const i = t == null || (r = t.toString()) == null ? void 0 : r.toLowerCase();
  return !!(!((o = e.getValue(n)) == null || (o = o.toString()) == null || (o = o.toLowerCase()) == null) && o.includes(i));
};
xg.autoRemove = (e) => rt(e);
const wg = (e, n, t) => {
  var r;
  return !!(!((r = e.getValue(n)) == null || (r = r.toString()) == null) && r.includes(t));
};
wg.autoRemove = (e) => rt(e);
const _g = (e, n, t) => {
  var r;
  return ((r = e.getValue(n)) == null || (r = r.toString()) == null ? void 0 : r.toLowerCase()) === (t == null ? void 0 : t.toLowerCase());
};
_g.autoRemove = (e) => rt(e);
const Sg = (e, n, t) => {
  var r;
  return (r = e.getValue(n)) == null ? void 0 : r.includes(t);
};
Sg.autoRemove = (e) => rt(e);
const Cg = (e, n, t) => !t.some((r) => {
  var o;
  return !((o = e.getValue(n)) != null && o.includes(r));
});
Cg.autoRemove = (e) => rt(e) || !(e != null && e.length);
const Eg = (e, n, t) => t.some((r) => {
  var o;
  return (o = e.getValue(n)) == null ? void 0 : o.includes(r);
});
Eg.autoRemove = (e) => rt(e) || !(e != null && e.length);
const kg = (e, n, t) => e.getValue(n) === t;
kg.autoRemove = (e) => rt(e);
const Ng = (e, n, t) => e.getValue(n) == t;
Ng.autoRemove = (e) => rt(e);
const ul = (e, n, t) => {
  let [r, o] = t;
  const i = e.getValue(n);
  return i >= r && i <= o;
};
ul.resolveFilterValue = (e) => {
  let [n, t] = e, r = typeof n != "number" ? parseFloat(n) : n, o = typeof t != "number" ? parseFloat(t) : t, i = n === null || Number.isNaN(r) ? -1 / 0 : r, s = t === null || Number.isNaN(o) ? 1 / 0 : o;
  if (i > s) {
    const a = i;
    i = s, s = a;
  }
  return [i, s];
};
ul.autoRemove = (e) => rt(e) || rt(e[0]) && rt(e[1]);
const Ot = {
  includesString: xg,
  includesStringSensitive: wg,
  equalsString: _g,
  arrIncludes: Sg,
  arrIncludesAll: Cg,
  arrIncludesSome: Eg,
  equals: kg,
  weakEquals: Ng,
  inNumberRange: ul
};
function rt(e) {
  return e == null || e === "";
}
const Sw = {
  getDefaultColumnDef: () => ({
    filterFn: "auto"
  }),
  getInitialState: (e) => ({
    columnFilters: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnFiltersChange: qe("columnFilters", e),
    filterFromLeafRows: !1,
    maxLeafRowFilterDepth: 100
  }),
  createColumn: (e, n) => {
    e.getAutoFilterFn = () => {
      const t = n.getCoreRowModel().flatRows[0], r = t == null ? void 0 : t.getValue(e.id);
      return typeof r == "string" ? Ot.includesString : typeof r == "number" ? Ot.inNumberRange : typeof r == "boolean" || r !== null && typeof r == "object" ? Ot.equals : Array.isArray(r) ? Ot.arrIncludes : Ot.weakEquals;
    }, e.getFilterFn = () => {
      var t, r;
      return ji(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (
        // @ts-ignore
        (t = (r = n.options.filterFns) == null ? void 0 : r[e.columnDef.filterFn]) != null ? t : Ot[e.columnDef.filterFn]
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
        const o = e.getFilterFn(), i = r == null ? void 0 : r.find((u) => u.id === e.id), s = Zt(t, i ? i.value : void 0);
        if (Oc(o, s, e)) {
          var a;
          return (a = r == null ? void 0 : r.filter((u) => u.id !== e.id)) != null ? a : [];
        }
        const l = {
          id: e.id,
          value: s
        };
        if (i) {
          var c;
          return (c = r == null ? void 0 : r.map((u) => u.id === e.id ? l : u)) != null ? c : [];
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
        return (i = Zt(n, o)) == null ? void 0 : i.filter((s) => {
          const a = t.find((l) => l.id === s.id);
          if (a) {
            const l = a.getFilterFn();
            if (Oc(l, s.value, a))
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
function Oc(e, n, t) {
  return (e && e.autoRemove ? e.autoRemove(n, t) : !1) || typeof n > "u" || typeof n == "string" && !n;
}
const Cw = (e, n, t) => t.reduce((r, o) => {
  const i = o.getValue(e);
  return r + (typeof i == "number" ? i : 0);
}, 0), Ew = (e, n, t) => {
  let r;
  return t.forEach((o) => {
    const i = o.getValue(e);
    i != null && (r > i || r === void 0 && i >= i) && (r = i);
  }), r;
}, kw = (e, n, t) => {
  let r;
  return t.forEach((o) => {
    const i = o.getValue(e);
    i != null && (r < i || r === void 0 && i >= i) && (r = i);
  }), r;
}, Nw = (e, n, t) => {
  let r, o;
  return t.forEach((i) => {
    const s = i.getValue(e);
    s != null && (r === void 0 ? s >= s && (r = o = s) : (r > s && (r = s), o < s && (o = s)));
  }), [r, o];
}, Rw = (e, n) => {
  let t = 0, r = 0;
  if (n.forEach((o) => {
    let i = o.getValue(e);
    i != null && (i = +i) >= i && (++t, r += i);
  }), t) return r / t;
}, Aw = (e, n) => {
  if (!n.length)
    return;
  const t = n.map((i) => i.getValue(e));
  if (!yw(t))
    return;
  if (t.length === 1)
    return t[0];
  const r = Math.floor(t.length / 2), o = t.sort((i, s) => i - s);
  return t.length % 2 !== 0 ? o[r] : (o[r - 1] + o[r]) / 2;
}, Tw = (e, n) => Array.from(new Set(n.map((t) => t.getValue(e))).values()), Fw = (e, n) => new Set(n.map((t) => t.getValue(e))).size, Pw = (e, n) => n.length, ws = {
  sum: Cw,
  min: Ew,
  max: kw,
  extent: Nw,
  mean: Rw,
  median: Aw,
  unique: Tw,
  uniqueCount: Fw,
  count: Pw
}, Iw = {
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
    onGroupingChange: qe("grouping", e),
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
        return ws.sum;
      if (Object.prototype.toString.call(r) === "[object Date]")
        return ws.extent;
    }, e.getAggregationFn = () => {
      var t, r;
      if (!e)
        throw new Error();
      return ji(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (t = (r = n.options.aggregationFns) == null ? void 0 : r[e.columnDef.aggregationFn]) != null ? t : ws[e.columnDef.aggregationFn];
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
function Ow(e, n, t) {
  if (!(n != null && n.length) || !t)
    return e;
  const r = e.filter((i) => !n.includes(i.id));
  return t === "remove" ? r : [...n.map((i) => e.find((s) => s.id === i)).filter(Boolean), ...r];
}
const $w = {
  getInitialState: (e) => ({
    columnOrder: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnOrderChange: qe("columnOrder", e)
  }),
  createColumn: (e, n) => {
    e.getIndex = Z((t) => [Wr(n, t)], (t) => t.findIndex((r) => r.id === e.id), J(n.options, "debugColumns", "getIndex")), e.getIsFirstColumn = (t) => {
      var r;
      return ((r = Wr(n, t)[0]) == null ? void 0 : r.id) === e.id;
    }, e.getIsLastColumn = (t) => {
      var r;
      const o = Wr(n, t);
      return ((r = o[o.length - 1]) == null ? void 0 : r.id) === e.id;
    };
  },
  createTable: (e) => {
    e.setColumnOrder = (n) => e.options.onColumnOrderChange == null ? void 0 : e.options.onColumnOrderChange(n), e.resetColumnOrder = (n) => {
      var t;
      e.setColumnOrder(n ? [] : (t = e.initialState.columnOrder) != null ? t : []);
    }, e._getOrderColumnsFn = Z(() => [e.getState().columnOrder, e.getState().grouping, e.options.groupedColumnMode], (n, t, r) => (o) => {
      let i = [];
      if (!(n != null && n.length))
        i = o;
      else {
        const s = [...n], a = [...o];
        for (; a.length && s.length; ) {
          const l = s.shift(), c = a.findIndex((u) => u.id === l);
          c > -1 && i.push(a.splice(c, 1)[0]);
        }
        i = [...i, ...a];
      }
      return Ow(i, t, r);
    }, J(e.options, "debugTable", "_getOrderColumnsFn"));
  }
}, _s = () => ({
  left: [],
  right: []
}), Mw = {
  getInitialState: (e) => ({
    columnPinning: _s(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnPinningChange: qe("columnPinning", e)
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
          var c, u;
          return {
            left: [...((c = o == null ? void 0 : o.left) != null ? c : []).filter((d) => !(r != null && r.includes(d))), ...r],
            right: ((u = o == null ? void 0 : o.right) != null ? u : []).filter((d) => !(r != null && r.includes(d)))
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
    e.getCenterVisibleCells = Z(() => [e._getAllVisibleCells(), n.getState().columnPinning.left, n.getState().columnPinning.right], (t, r, o) => {
      const i = [...r ?? [], ...o ?? []];
      return t.filter((s) => !i.includes(s.column.id));
    }, J(n.options, "debugRows", "getCenterVisibleCells")), e.getLeftVisibleCells = Z(() => [e._getAllVisibleCells(), n.getState().columnPinning.left], (t, r) => (r ?? []).map((i) => t.find((s) => s.column.id === i)).filter(Boolean).map((i) => ({
      ...i,
      position: "left"
    })), J(n.options, "debugRows", "getLeftVisibleCells")), e.getRightVisibleCells = Z(() => [e._getAllVisibleCells(), n.getState().columnPinning.right], (t, r) => (r ?? []).map((i) => t.find((s) => s.column.id === i)).filter(Boolean).map((i) => ({
      ...i,
      position: "right"
    })), J(n.options, "debugRows", "getRightVisibleCells"));
  },
  createTable: (e) => {
    e.setColumnPinning = (n) => e.options.onColumnPinningChange == null ? void 0 : e.options.onColumnPinningChange(n), e.resetColumnPinning = (n) => {
      var t, r;
      return e.setColumnPinning(n ? _s() : (t = (r = e.initialState) == null ? void 0 : r.columnPinning) != null ? t : _s());
    }, e.getIsSomeColumnsPinned = (n) => {
      var t;
      const r = e.getState().columnPinning;
      if (!n) {
        var o, i;
        return !!((o = r.left) != null && o.length || (i = r.right) != null && i.length);
      }
      return !!((t = r[n]) != null && t.length);
    }, e.getLeftLeafColumns = Z(() => [e.getAllLeafColumns(), e.getState().columnPinning.left], (n, t) => (t ?? []).map((r) => n.find((o) => o.id === r)).filter(Boolean), J(e.options, "debugColumns", "getLeftLeafColumns")), e.getRightLeafColumns = Z(() => [e.getAllLeafColumns(), e.getState().columnPinning.right], (n, t) => (t ?? []).map((r) => n.find((o) => o.id === r)).filter(Boolean), J(e.options, "debugColumns", "getRightLeafColumns")), e.getCenterLeafColumns = Z(() => [e.getAllLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (n, t, r) => {
      const o = [...t ?? [], ...r ?? []];
      return n.filter((i) => !o.includes(i.id));
    }, J(e.options, "debugColumns", "getCenterLeafColumns"));
  }
};
function Dw(e) {
  return e || (typeof document < "u" ? document : null);
}
const Co = {
  size: 150,
  minSize: 20,
  maxSize: Number.MAX_SAFE_INTEGER
}, Ss = () => ({
  startOffset: null,
  startSize: null,
  deltaOffset: null,
  deltaPercentage: null,
  isResizingColumn: !1,
  columnSizingStart: []
}), Lw = {
  getDefaultColumnDef: () => Co,
  getInitialState: (e) => ({
    columnSizing: {},
    columnSizingInfo: Ss(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    columnResizeMode: "onEnd",
    columnResizeDirection: "ltr",
    onColumnSizingChange: qe("columnSizing", e),
    onColumnSizingInfoChange: qe("columnSizingInfo", e)
  }),
  createColumn: (e, n) => {
    e.getSize = () => {
      var t, r, o;
      const i = n.getState().columnSizing[e.id];
      return Math.min(Math.max((t = e.columnDef.minSize) != null ? t : Co.minSize, (r = i ?? e.columnDef.size) != null ? r : Co.size), (o = e.columnDef.maxSize) != null ? o : Co.maxSize);
    }, e.getStart = Z((t) => [t, Wr(n, t), n.getState().columnSizing], (t, r) => r.slice(0, e.getIndex(t)).reduce((o, i) => o + i.getSize(), 0), J(n.options, "debugColumns", "getStart")), e.getAfter = Z((t) => [t, Wr(n, t), n.getState().columnSizing], (t, r) => r.slice(e.getIndex(t) + 1).reduce((o, i) => o + i.getSize(), 0), J(n.options, "debugColumns", "getAfter")), e.resetSize = () => {
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
        if (!r || !o || (i.persist == null || i.persist(), Cs(i) && i.touches && i.touches.length > 1))
          return;
        const s = e.getSize(), a = e ? e.getLeafHeaders().map((b) => [b.column.id, b.column.getSize()]) : [[r.id, r.getSize()]], l = Cs(i) ? Math.round(i.touches[0].clientX) : i.clientX, c = {}, u = (b, y) => {
          typeof y == "number" && (n.setColumnSizingInfo((v) => {
            var _, S;
            const C = n.options.columnResizeDirection === "rtl" ? -1 : 1, E = (y - ((_ = v == null ? void 0 : v.startOffset) != null ? _ : 0)) * C, N = Math.max(E / ((S = v == null ? void 0 : v.startSize) != null ? S : 0), -0.999999);
            return v.columnSizingStart.forEach((k) => {
              let [R, A] = k;
              c[R] = Math.round(Math.max(A + A * N, 0) * 100) / 100;
            }), {
              ...v,
              deltaOffset: E,
              deltaPercentage: N
            };
          }), (n.options.columnResizeMode === "onChange" || b === "end") && n.setColumnSizing((v) => ({
            ...v,
            ...c
          })));
        }, d = (b) => u("move", b), f = (b) => {
          u("end", b), n.setColumnSizingInfo((y) => ({
            ...y,
            isResizingColumn: !1,
            startOffset: null,
            startSize: null,
            deltaOffset: null,
            deltaPercentage: null,
            columnSizingStart: []
          }));
        }, g = Dw(t), p = {
          moveHandler: (b) => d(b.clientX),
          upHandler: (b) => {
            g == null || g.removeEventListener("mousemove", p.moveHandler), g == null || g.removeEventListener("mouseup", p.upHandler), f(b.clientX);
          }
        }, h = {
          moveHandler: (b) => (b.cancelable && (b.preventDefault(), b.stopPropagation()), d(b.touches[0].clientX), !1),
          upHandler: (b) => {
            var y;
            g == null || g.removeEventListener("touchmove", h.moveHandler), g == null || g.removeEventListener("touchend", h.upHandler), b.cancelable && (b.preventDefault(), b.stopPropagation()), f((y = b.touches[0]) == null ? void 0 : y.clientX);
          }
        }, m = zw() ? {
          passive: !1
        } : !1;
        Cs(i) ? (g == null || g.addEventListener("touchmove", h.moveHandler, m), g == null || g.addEventListener("touchend", h.upHandler, m)) : (g == null || g.addEventListener("mousemove", p.moveHandler, m), g == null || g.addEventListener("mouseup", p.upHandler, m)), n.setColumnSizingInfo((b) => ({
          ...b,
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
      e.setColumnSizingInfo(n ? Ss() : (t = e.initialState.columnSizingInfo) != null ? t : Ss());
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
let Eo = null;
function zw() {
  if (typeof Eo == "boolean") return Eo;
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
  return Eo = e, Eo;
}
function Cs(e) {
  return e.type === "touchstart";
}
const Bw = {
  getInitialState: (e) => ({
    columnVisibility: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnVisibilityChange: qe("columnVisibility", e)
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
    e._getAllVisibleCells = Z(() => [e.getAllCells(), n.getState().columnVisibility], (t) => t.filter((r) => r.column.getIsVisible()), J(n.options, "debugRows", "_getAllVisibleCells")), e.getVisibleCells = Z(() => [e.getLeftVisibleCells(), e.getCenterVisibleCells(), e.getRightVisibleCells()], (t, r, o) => [...t, ...r, ...o], J(n.options, "debugRows", "getVisibleCells"));
  },
  createTable: (e) => {
    const n = (t, r) => Z(() => [r(), r().filter((o) => o.getIsVisible()).map((o) => o.id).join("_")], (o) => o.filter((i) => i.getIsVisible == null ? void 0 : i.getIsVisible()), J(e.options, "debugColumns", t));
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
function Wr(e, n) {
  return n ? n === "center" ? e.getCenterVisibleLeafColumns() : n === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
}
const Vw = {
  createTable: (e) => {
    e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
      if (e._getGlobalFacetedMinMaxValues)
        return e._getGlobalFacetedMinMaxValues();
    };
  }
}, jw = {
  getInitialState: (e) => ({
    globalFilter: void 0,
    ...e
  }),
  getDefaultOptions: (e) => ({
    onGlobalFilterChange: qe("globalFilter", e),
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
    e.getGlobalAutoFilterFn = () => Ot.includesString, e.getGlobalFilterFn = () => {
      var n, t;
      const {
        globalFilterFn: r
      } = e.options;
      return ji(r) ? r : r === "auto" ? e.getGlobalAutoFilterFn() : (n = (t = e.options.filterFns) == null ? void 0 : t[r]) != null ? n : Ot[r];
    }, e.setGlobalFilter = (n) => {
      e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(n);
    }, e.resetGlobalFilter = (n) => {
      e.setGlobalFilter(n ? void 0 : e.initialState.globalFilter);
    };
  }
}, Uw = {
  getInitialState: (e) => ({
    expanded: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onExpandedChange: qe("expanded", e),
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
}, aa = 0, la = 10, Es = () => ({
  pageIndex: aa,
  pageSize: la
}), Gw = {
  getInitialState: (e) => ({
    ...e,
    pagination: {
      ...Es(),
      ...e == null ? void 0 : e.pagination
    }
  }),
  getDefaultOptions: (e) => ({
    onPaginationChange: qe("pagination", e)
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
      const o = (i) => Zt(r, i);
      return e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange(o);
    }, e.resetPagination = (r) => {
      var o;
      e.setPagination(r ? Es() : (o = e.initialState.pagination) != null ? o : Es());
    }, e.setPageIndex = (r) => {
      e.setPagination((o) => {
        let i = Zt(r, o.pageIndex);
        const s = typeof e.options.pageCount > "u" || e.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1;
        return i = Math.max(0, Math.min(i, s)), {
          ...o,
          pageIndex: i
        };
      });
    }, e.resetPageIndex = (r) => {
      var o, i;
      e.setPageIndex(r ? aa : (o = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageIndex) != null ? o : aa);
    }, e.resetPageSize = (r) => {
      var o, i;
      e.setPageSize(r ? la : (o = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageSize) != null ? o : la);
    }, e.setPageSize = (r) => {
      e.setPagination((o) => {
        const i = Math.max(1, Zt(r, o.pageSize)), s = o.pageSize * o.pageIndex, a = Math.floor(s / i);
        return {
          ...o,
          pageIndex: a,
          pageSize: i
        };
      });
    }, e.setPageCount = (r) => e.setPagination((o) => {
      var i;
      let s = Zt(r, (i = e.options.pageCount) != null ? i : -1);
      return typeof s == "number" && (s = Math.max(-1, s)), {
        ...o,
        pageCount: s
      };
    }), e.getPageOptions = Z(() => [e.getPageCount()], (r) => {
      let o = [];
      return r && r > 0 && (o = [...new Array(r)].fill(null).map((i, s) => s)), o;
    }, J(e.options, "debugTable", "getPageOptions")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
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
}, ks = () => ({
  top: [],
  bottom: []
}), Ww = {
  getInitialState: (e) => ({
    rowPinning: ks(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowPinningChange: qe("rowPinning", e)
  }),
  createRow: (e, n) => {
    e.pin = (t, r, o) => {
      const i = r ? e.getLeafRows().map((l) => {
        let {
          id: c
        } = l;
        return c;
      }) : [], s = o ? e.getParentRows().map((l) => {
        let {
          id: c
        } = l;
        return c;
      }) : [], a = /* @__PURE__ */ new Set([...s, e.id, ...i]);
      n.setRowPinning((l) => {
        var c, u;
        if (t === "bottom") {
          var d, f;
          return {
            top: ((d = l == null ? void 0 : l.top) != null ? d : []).filter((h) => !(a != null && a.has(h))),
            bottom: [...((f = l == null ? void 0 : l.bottom) != null ? f : []).filter((h) => !(a != null && a.has(h))), ...Array.from(a)]
          };
        }
        if (t === "top") {
          var g, p;
          return {
            top: [...((g = l == null ? void 0 : l.top) != null ? g : []).filter((h) => !(a != null && a.has(h))), ...Array.from(a)],
            bottom: ((p = l == null ? void 0 : l.bottom) != null ? p : []).filter((h) => !(a != null && a.has(h)))
          };
        }
        return {
          top: ((c = l == null ? void 0 : l.top) != null ? c : []).filter((h) => !(a != null && a.has(h))),
          bottom: ((u = l == null ? void 0 : l.bottom) != null ? u : []).filter((h) => !(a != null && a.has(h)))
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
      return e.setRowPinning(n ? ks() : (t = (r = e.initialState) == null ? void 0 : r.rowPinning) != null ? t : ks());
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
    }, e.getTopRows = Z(() => [e.getRowModel().rows, e.getState().rowPinning.top], (n, t) => e._getPinnedRows(n, t, "top"), J(e.options, "debugRows", "getTopRows")), e.getBottomRows = Z(() => [e.getRowModel().rows, e.getState().rowPinning.bottom], (n, t) => e._getPinnedRows(n, t, "bottom"), J(e.options, "debugRows", "getBottomRows")), e.getCenterRows = Z(() => [e.getRowModel().rows, e.getState().rowPinning.top, e.getState().rowPinning.bottom], (n, t, r) => {
      const o = /* @__PURE__ */ new Set([...t ?? [], ...r ?? []]);
      return n.filter((i) => !o.has(i.id));
    }, J(e.options, "debugRows", "getCenterRows"));
  }
}, Hw = {
  getInitialState: (e) => ({
    rowSelection: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowSelectionChange: qe("rowSelection", e),
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
        ca(o, i.id, r, !0, e);
      }), o;
    }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = Z(() => [e.getState().rowSelection, e.getCoreRowModel()], (n, t) => Object.keys(n).length ? Ns(e, t) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, J(e.options, "debugTable", "getSelectedRowModel")), e.getFilteredSelectedRowModel = Z(() => [e.getState().rowSelection, e.getFilteredRowModel()], (n, t) => Object.keys(n).length ? Ns(e, t) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, J(e.options, "debugTable", "getFilteredSelectedRowModel")), e.getGroupedSelectedRowModel = Z(() => [e.getState().rowSelection, e.getSortedRowModel()], (n, t) => Object.keys(n).length ? Ns(e, t) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, J(e.options, "debugTable", "getGroupedSelectedRowModel")), e.getIsAllRowsSelected = () => {
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
        return ca(a, e.id, t, (s = r == null ? void 0 : r.selectChildren) != null ? s : !0, n), a;
      });
    }, e.getIsSelected = () => {
      const {
        rowSelection: t
      } = n.getState();
      return dl(e, t);
    }, e.getIsSomeSelected = () => {
      const {
        rowSelection: t
      } = n.getState();
      return ua(e, t) === "some";
    }, e.getIsAllSubRowsSelected = () => {
      const {
        rowSelection: t
      } = n.getState();
      return ua(e, t) === "all";
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
}, ca = (e, n, t, r, o) => {
  var i;
  const s = o.getRow(n, !0);
  t ? (s.getCanMultiSelect() || Object.keys(e).forEach((a) => delete e[a]), s.getCanSelect() && (e[n] = !0)) : delete e[n], r && (i = s.subRows) != null && i.length && s.getCanSelectSubRows() && s.subRows.forEach((a) => ca(e, a.id, t, r, o));
};
function Ns(e, n) {
  const t = e.getState().rowSelection, r = [], o = {}, i = function(s, a) {
    return s.map((l) => {
      var c;
      const u = dl(l, t);
      if (u && (r.push(l), o[l.id] = l), (c = l.subRows) != null && c.length && (l = {
        ...l,
        subRows: i(l.subRows)
      }), u)
        return l;
    }).filter(Boolean);
  };
  return {
    rows: i(n.rows),
    flatRows: r,
    rowsById: o
  };
}
function dl(e, n) {
  var t;
  return (t = n[e.id]) != null ? t : !1;
}
function ua(e, n, t) {
  var r;
  if (!((r = e.subRows) != null && r.length)) return !1;
  let o = !0, i = !1;
  return e.subRows.forEach((s) => {
    if (!(i && !o) && (s.getCanSelect() && (dl(s, n) ? i = !0 : o = !1), s.subRows && s.subRows.length)) {
      const a = ua(s, n);
      a === "all" ? i = !0 : (a === "some" && (i = !0), o = !1);
    }
  }), o ? "all" : i ? "some" : !1;
}
const da = /([0-9]+)/gm, Kw = (e, n, t) => Rg(on(e.getValue(t)).toLowerCase(), on(n.getValue(t)).toLowerCase()), qw = (e, n, t) => Rg(on(e.getValue(t)), on(n.getValue(t))), Yw = (e, n, t) => fl(on(e.getValue(t)).toLowerCase(), on(n.getValue(t)).toLowerCase()), Zw = (e, n, t) => fl(on(e.getValue(t)), on(n.getValue(t))), Jw = (e, n, t) => {
  const r = e.getValue(t), o = n.getValue(t);
  return r > o ? 1 : r < o ? -1 : 0;
}, Xw = (e, n, t) => fl(e.getValue(t), n.getValue(t));
function fl(e, n) {
  return e === n ? 0 : e > n ? 1 : -1;
}
function on(e) {
  return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
}
function Rg(e, n) {
  const t = e.split(da).filter(Boolean), r = n.split(da).filter(Boolean);
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
const Dr = {
  alphanumeric: Kw,
  alphanumericCaseSensitive: qw,
  text: Yw,
  textCaseSensitive: Zw,
  datetime: Jw,
  basic: Xw
}, Qw = {
  getInitialState: (e) => ({
    sorting: [],
    ...e
  }),
  getDefaultColumnDef: () => ({
    sortingFn: "auto",
    sortUndefined: 1
  }),
  getDefaultOptions: (e) => ({
    onSortingChange: qe("sorting", e),
    isMultiSortEvent: (n) => n.shiftKey
  }),
  createColumn: (e, n) => {
    e.getAutoSortingFn = () => {
      const t = n.getFilteredRowModel().flatRows.slice(10);
      let r = !1;
      for (const o of t) {
        const i = o == null ? void 0 : o.getValue(e.id);
        if (Object.prototype.toString.call(i) === "[object Date]")
          return Dr.datetime;
        if (typeof i == "string" && (r = !0, i.split(da).length > 1))
          return Dr.alphanumeric;
      }
      return r ? Dr.text : Dr.basic;
    }, e.getAutoSortDir = () => {
      const t = n.getFilteredRowModel().flatRows[0];
      return typeof (t == null ? void 0 : t.getValue(e.id)) == "string" ? "asc" : "desc";
    }, e.getSortingFn = () => {
      var t, r;
      if (!e)
        throw new Error();
      return ji(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (t = (r = n.options.sortingFns) == null ? void 0 : r[e.columnDef.sortingFn]) != null ? t : Dr[e.columnDef.sortingFn];
    }, e.toggleSorting = (t, r) => {
      const o = e.getNextSortingOrder(), i = typeof t < "u" && t !== null;
      n.setSorting((s) => {
        const a = s == null ? void 0 : s.find((g) => g.id === e.id), l = s == null ? void 0 : s.findIndex((g) => g.id === e.id);
        let c = [], u, d = i ? t : o === "desc";
        if (s != null && s.length && e.getCanMultiSort() && r ? a ? u = "toggle" : u = "add" : s != null && s.length && l !== s.length - 1 ? u = "replace" : a ? u = "toggle" : u = "replace", u === "toggle" && (i || o || (u = "remove")), u === "add") {
          var f;
          c = [...s, {
            id: e.id,
            desc: d
          }], c.splice(0, c.length - ((f = n.options.maxMultiSortColCount) != null ? f : Number.MAX_SAFE_INTEGER));
        } else u === "toggle" ? c = s.map((g) => g.id === e.id ? {
          ...g,
          desc: d
        } : g) : u === "remove" ? c = s.filter((g) => g.id !== e.id) : c = [{
          id: e.id,
          desc: d
        }];
        return c;
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
}, e_ = [
  ww,
  Bw,
  $w,
  Mw,
  _w,
  Sw,
  Vw,
  //depends on ColumnFaceting
  jw,
  //depends on ColumnFiltering
  Qw,
  Iw,
  //depends on RowSorting
  Uw,
  Gw,
  Ww,
  Hw,
  Lw
];
function t_(e) {
  var n, t;
  process.env.NODE_ENV !== "production" && (e.debugAll || e.debugTable) && console.info("Creating Table Instance...");
  const r = [...e_, ...(n = e._features) != null ? n : []];
  let o = {
    _features: r
  };
  const i = o._features.reduce((f, g) => Object.assign(f, g.getDefaultOptions == null ? void 0 : g.getDefaultOptions(o)), {}), s = (f) => o.options.mergeOptions ? o.options.mergeOptions(i, f) : {
    ...i,
    ...f
  };
  let l = {
    ...{},
    ...(t = e.initialState) != null ? t : {}
  };
  o._features.forEach((f) => {
    var g;
    l = (g = f.getInitialState == null ? void 0 : f.getInitialState(l)) != null ? g : l;
  });
  const c = [];
  let u = !1;
  const d = {
    _features: r,
    options: {
      ...i,
      ...e
    },
    initialState: l,
    _queue: (f) => {
      c.push(f), u || (u = !0, Promise.resolve().then(() => {
        for (; c.length; )
          c.shift()();
        u = !1;
      }).catch((g) => setTimeout(() => {
        throw g;
      })));
    },
    reset: () => {
      o.setState(o.initialState);
    },
    setOptions: (f) => {
      const g = Zt(f, o.options);
      o.options = s(g);
    },
    getState: () => o.options.state,
    setState: (f) => {
      o.options.onStateChange == null || o.options.onStateChange(f);
    },
    _getRowId: (f, g, p) => {
      var h;
      return (h = o.options.getRowId == null ? void 0 : o.options.getRowId(f, g, p)) != null ? h : `${p ? [p.id, g].join(".") : g}`;
    },
    getCoreRowModel: () => (o._getCoreRowModel || (o._getCoreRowModel = o.options.getCoreRowModel(o)), o._getCoreRowModel()),
    // The final calls start at the bottom of the model,
    // expanded rows, which then work their way up
    getRowModel: () => o.getPaginationRowModel(),
    //in next version, we should just pass in the row model as the optional 2nd arg
    getRow: (f, g) => {
      let p = (g ? o.getPrePaginationRowModel() : o.getRowModel()).rowsById[f];
      if (!p && (p = o.getCoreRowModel().rowsById[f], !p))
        throw process.env.NODE_ENV !== "production" ? new Error(`getRow could not find row with ID: ${f}`) : new Error();
      return p;
    },
    _getDefaultColumnDef: Z(() => [o.options.defaultColumn], (f) => {
      var g;
      return f = (g = f) != null ? g : {}, {
        header: (p) => {
          const h = p.header.column.columnDef;
          return h.accessorKey ? h.accessorKey : h.accessorFn ? h.id : null;
        },
        // footer: props => props.header.column.id,
        cell: (p) => {
          var h, m;
          return (h = (m = p.renderValue()) == null || m.toString == null ? void 0 : m.toString()) != null ? h : null;
        },
        ...o._features.reduce((p, h) => Object.assign(p, h.getDefaultColumnDef == null ? void 0 : h.getDefaultColumnDef()), {}),
        ...f
      };
    }, J(e, "debugColumns", "_getDefaultColumnDef")),
    _getColumnDefs: () => o.options.columns,
    getAllColumns: Z(() => [o._getColumnDefs()], (f) => {
      const g = function(p, h, m) {
        return m === void 0 && (m = 0), p.map((b) => {
          const y = xw(o, b, m, h), v = b;
          return y.columns = v.columns ? g(v.columns, y, m + 1) : [], y;
        });
      };
      return g(f);
    }, J(e, "debugColumns", "getAllColumns")),
    getAllFlatColumns: Z(() => [o.getAllColumns()], (f) => f.flatMap((g) => g.getFlatColumns()), J(e, "debugColumns", "getAllFlatColumns")),
    _getAllFlatColumnsById: Z(() => [o.getAllFlatColumns()], (f) => f.reduce((g, p) => (g[p.id] = p, g), {}), J(e, "debugColumns", "getAllFlatColumnsById")),
    getAllLeafColumns: Z(() => [o.getAllColumns(), o._getOrderColumnsFn()], (f, g) => {
      let p = f.flatMap((h) => h.getLeafColumns());
      return g(p);
    }, J(e, "debugColumns", "getAllLeafColumns")),
    getColumn: (f) => {
      const g = o._getAllFlatColumnsById()[f];
      return process.env.NODE_ENV !== "production" && !g && console.error(`[Table] Column with id '${f}' does not exist.`), g;
    }
  };
  Object.assign(o, d);
  for (let f = 0; f < o._features.length; f++) {
    const g = o._features[f];
    g == null || g.createTable == null || g.createTable(o);
  }
  return o;
}
function n_() {
  return (e) => Z(() => [e.options.data], (n) => {
    const t = {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, r = function(o, i, s) {
      i === void 0 && (i = 0);
      const a = [];
      for (let c = 0; c < o.length; c++) {
        const u = cl(e, e._getRowId(o[c], c, s), o[c], c, i, void 0, s == null ? void 0 : s.id);
        if (t.flatRows.push(u), t.rowsById[u.id] = u, a.push(u), e.options.getSubRows) {
          var l;
          u.originalSubRows = e.options.getSubRows(o[c], c), (l = u.originalSubRows) != null && l.length && (u.subRows = r(u.originalSubRows, i + 1, u));
        }
      }
      return a;
    };
    return t.rows = r(n), t;
  }, J(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
}
function r_(e) {
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
function o_(e, n, t) {
  return t.options.filterFromLeafRows ? i_(e, n, t) : s_(e, n, t);
}
function i_(e, n, t) {
  var r;
  const o = [], i = {}, s = (r = t.options.maxLeafRowFilterDepth) != null ? r : 100, a = function(l, c) {
    c === void 0 && (c = 0);
    const u = [];
    for (let f = 0; f < l.length; f++) {
      var d;
      let g = l[f];
      const p = cl(t, g.id, g.original, g.index, g.depth, void 0, g.parentId);
      if (p.columnFilters = g.columnFilters, (d = g.subRows) != null && d.length && c < s) {
        if (p.subRows = a(g.subRows, c + 1), g = p, n(g) && !p.subRows.length) {
          u.push(g), i[g.id] = g, o.push(g);
          continue;
        }
        if (n(g) || p.subRows.length) {
          u.push(g), i[g.id] = g, o.push(g);
          continue;
        }
      } else
        g = p, n(g) && (u.push(g), i[g.id] = g, o.push(g));
    }
    return u;
  };
  return {
    rows: a(e),
    flatRows: o,
    rowsById: i
  };
}
function s_(e, n, t) {
  var r;
  const o = [], i = {}, s = (r = t.options.maxLeafRowFilterDepth) != null ? r : 100, a = function(l, c) {
    c === void 0 && (c = 0);
    const u = [];
    for (let f = 0; f < l.length; f++) {
      let g = l[f];
      if (n(g)) {
        var d;
        if ((d = g.subRows) != null && d.length && c < s) {
          const h = cl(t, g.id, g.original, g.index, g.depth, void 0, g.parentId);
          h.subRows = a(g.subRows, c + 1), g = h;
        }
        u.push(g), o.push(g), i[g.id] = g;
      }
    }
    return u;
  };
  return {
    rows: a(e),
    flatRows: o,
    rowsById: i
  };
}
function a_() {
  return (e) => Z(() => [e.getPreFilteredRowModel(), e.getState().columnFilters, e.getState().globalFilter], (n, t, r) => {
    if (!n.rows.length || !(t != null && t.length) && !r) {
      for (let f = 0; f < n.flatRows.length; f++)
        n.flatRows[f].columnFilters = {}, n.flatRows[f].columnFiltersMeta = {};
      return n;
    }
    const o = [], i = [];
    (t ?? []).forEach((f) => {
      var g;
      const p = e.getColumn(f.id);
      if (!p)
        return;
      const h = p.getFilterFn();
      if (!h) {
        process.env.NODE_ENV !== "production" && console.warn(`Could not find a valid 'column.filterFn' for column with the ID: ${p.id}.`);
        return;
      }
      o.push({
        id: f.id,
        filterFn: h,
        resolvedValue: (g = h.resolveFilterValue == null ? void 0 : h.resolveFilterValue(f.value)) != null ? g : f.value
      });
    });
    const s = (t ?? []).map((f) => f.id), a = e.getGlobalFilterFn(), l = e.getAllLeafColumns().filter((f) => f.getCanGlobalFilter());
    r && a && l.length && (s.push("__global__"), l.forEach((f) => {
      var g;
      i.push({
        id: f.id,
        filterFn: a,
        resolvedValue: (g = a.resolveFilterValue == null ? void 0 : a.resolveFilterValue(r)) != null ? g : r
      });
    }));
    let c, u;
    for (let f = 0; f < n.flatRows.length; f++) {
      const g = n.flatRows[f];
      if (g.columnFilters = {}, o.length)
        for (let p = 0; p < o.length; p++) {
          c = o[p];
          const h = c.id;
          g.columnFilters[h] = c.filterFn(g, h, c.resolvedValue, (m) => {
            g.columnFiltersMeta[h] = m;
          });
        }
      if (i.length) {
        for (let p = 0; p < i.length; p++) {
          u = i[p];
          const h = u.id;
          if (u.filterFn(g, h, u.resolvedValue, (m) => {
            g.columnFiltersMeta[h] = m;
          })) {
            g.columnFilters.__global__ = !0;
            break;
          }
        }
        g.columnFilters.__global__ !== !0 && (g.columnFilters.__global__ = !1);
      }
    }
    const d = (f) => {
      for (let g = 0; g < s.length; g++)
        if (f.columnFilters[s[g]] === !1)
          return !1;
      return !0;
    };
    return o_(n.rows, d, e);
  }, J(e.options, "debugTable", "getFilteredRowModel", () => e._autoResetPageIndex()));
}
function l_(e) {
  return (n) => Z(() => [n.getState().pagination, n.getPrePaginationRowModel(), n.options.paginateExpandedRows ? void 0 : n.getState().expanded], (t, r) => {
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
    const c = o * i, u = c + o;
    s = s.slice(c, u);
    let d;
    n.options.paginateExpandedRows ? d = {
      rows: s,
      flatRows: a,
      rowsById: l
    } : d = r_({
      rows: s,
      flatRows: a,
      rowsById: l
    }), d.flatRows = [];
    const f = (g) => {
      d.flatRows.push(g), g.subRows.length && g.subRows.forEach(f);
    };
    return d.rows.forEach(f), d;
  }, J(n.options, "debugTable", "getPaginationRowModel"));
}
function c_() {
  return (e) => Z(() => [e.getState().sorting, e.getPreSortedRowModel()], (n, t) => {
    if (!t.rows.length || !(n != null && n.length))
      return t;
    const r = e.getState().sorting, o = [], i = r.filter((l) => {
      var c;
      return (c = e.getColumn(l.id)) == null ? void 0 : c.getCanSort();
    }), s = {};
    i.forEach((l) => {
      const c = e.getColumn(l.id);
      c && (s[l.id] = {
        sortUndefined: c.columnDef.sortUndefined,
        invertSorting: c.columnDef.invertSorting,
        sortingFn: c.getSortingFn()
      });
    });
    const a = (l) => {
      const c = l.map((u) => ({
        ...u
      }));
      return c.sort((u, d) => {
        for (let g = 0; g < i.length; g += 1) {
          var f;
          const p = i[g], h = s[p.id], m = h.sortUndefined, b = (f = p == null ? void 0 : p.desc) != null ? f : !1;
          let y = 0;
          if (m) {
            const v = u.getValue(p.id), _ = d.getValue(p.id), S = v === void 0, C = _ === void 0;
            if (S || C) {
              if (m === "first") return S ? -1 : 1;
              if (m === "last") return S ? 1 : -1;
              y = S && C ? 0 : S ? m : -m;
            }
          }
          if (y === 0 && (y = h.sortingFn(u, d, p.id)), y !== 0)
            return b && (y *= -1), h.invertSorting && (y *= -1), y;
        }
        return u.index - d.index;
      }), c.forEach((u) => {
        var d;
        o.push(u), (d = u.subRows) != null && d.length && (u.subRows = a(u.subRows));
      }), c;
    };
    return {
      rows: a(t.rows),
      flatRows: o,
      rowsById: t.rowsById
    };
  }, J(e.options, "debugTable", "getSortedRowModel", () => e._autoResetPageIndex()));
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
function $c(e, n) {
  return e ? u_(e) ? /* @__PURE__ */ x.createElement(e, n) : e : null;
}
function u_(e) {
  return d_(e) || typeof e == "function" || f_(e);
}
function d_(e) {
  return typeof e == "function" && (() => {
    const n = Object.getPrototypeOf(e);
    return n.prototype && n.prototype.isReactComponent;
  })();
}
function f_(e) {
  return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
}
function g_(e) {
  const n = {
    state: {},
    // Dummy state
    onStateChange: () => {
    },
    // noop
    renderFallbackValue: null,
    ...e
  }, [t] = x.useState(() => ({
    current: t_(n)
  })), [r, o] = x.useState(() => t.current.initialState);
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
function vT({
  columns: e,
  data: n,
  searchable: t = !1,
  searchPlaceholder: r = "Search...",
  pagination: o = !1,
  pageSize: i = 10,
  pageSizeOptions: s = [10, 20, 50, 100],
  enableRowSelection: a = !1,
  onRowSelectionChange: l,
  enableColumnVisibility: c = !1,
  emptyMessage: u = "No results.",
  className: d,
  stickyHeader: f = !1,
  getRowClassName: g,
  onRowClick: p,
  loading: h = !1
}) {
  var D;
  const [m, b] = x.useState([]), [y, v] = x.useState([]), [_, S] = x.useState({}), [C, E] = x.useState({}), [N, k] = x.useState(""), [R, A] = x.useState({
    pageIndex: 0,
    pageSize: i
  }), T = g_({
    data: n,
    columns: e,
    getCoreRowModel: n_(),
    getSortedRowModel: c_(),
    getFilteredRowModel: a_(),
    ...o && { getPaginationRowModel: l_() },
    onSortingChange: b,
    onColumnFiltersChange: v,
    onColumnVisibilityChange: S,
    onRowSelectionChange: E,
    onGlobalFilterChange: k,
    onPaginationChange: A,
    enableRowSelection: a,
    state: {
      sorting: m,
      columnFilters: y,
      columnVisibility: _,
      rowSelection: C,
      globalFilter: N,
      pagination: R
    }
  });
  return x.useEffect(() => {
    if (l) {
      const O = T.getFilteredSelectedRowModel().rows.map((B) => B.original);
      l(O);
    }
  }, [C, T, l]), /* @__PURE__ */ M("div", { className: I("w-full space-y-4", d), children: [
    (t || c) && /* @__PURE__ */ M("div", { className: "flex items-center justify-between gap-4", children: [
      t && /* @__PURE__ */ w("div", { className: "max-w-sm flex-1", children: /* @__PURE__ */ w(
        wf,
        {
          placeholder: r,
          value: N ?? "",
          onChange: (O) => {
            k(O.target.value);
          },
          className: "w-full"
        }
      ) }),
      c && /* @__PURE__ */ M("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ w("span", { className: "text-muted-foreground text-sm", children: "Columns:" }),
        T.getAllLeafColumns().map((O) => O.id === "select" ? null : /* @__PURE__ */ M("label", { className: "flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ w(
            "input",
            {
              type: "checkbox",
              checked: O.getIsVisible(),
              onChange: (B) => {
                O.toggleVisibility(B.target.checked);
              },
              className: "rounded border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-slate-700"
            }
          ),
          /* @__PURE__ */ w("span", { className: "capitalize", children: O.id })
        ] }, O.id))
      ] })
    ] }),
    /* @__PURE__ */ w("div", { className: "overflow-hidden rounded-md border border-slate-200 dark:border-slate-800", children: /* @__PURE__ */ w("div", { className: I("overflow-auto", f && "max-h-[600px]"), children: /* @__PURE__ */ M("table", { className: "w-full caption-bottom text-sm", children: [
      /* @__PURE__ */ w(
        "thead",
        {
          className: I(
            "border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900",
            f && "sticky top-0 z-10"
          ),
          children: T.getHeaderGroups().map((O) => /* @__PURE__ */ w("tr", { children: O.headers.map((B) => /* @__PURE__ */ w(
            "th",
            {
              className: "h-12 px-4 text-left align-middle font-medium text-slate-700 dark:text-slate-300",
              children: B.isPlaceholder ? null : $c(B.column.columnDef.header, B.getContext())
            },
            B.id
          )) }, O.id))
        }
      ),
      /* @__PURE__ */ w("tbody", { className: "divide-y divide-slate-200 dark:divide-slate-800", children: h ? /* @__PURE__ */ w("tr", { children: /* @__PURE__ */ w("td", { colSpan: e.length, className: "text-muted-foreground h-24 text-center", children: "Loading..." }) }) : (D = T.getRowModel().rows) != null && D.length ? T.getRowModel().rows.map((O) => /* @__PURE__ */ w(
        "tr",
        {
          "data-state": O.getIsSelected() && "selected",
          className: I(
            "border-b border-slate-200 bg-white transition-colors hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-900/50",
            O.getIsSelected() && "bg-slate-50 dark:bg-slate-900",
            p && "cursor-pointer",
            g == null ? void 0 : g(O.original)
          ),
          onClick: () => p == null ? void 0 : p(O.original),
          children: O.getVisibleCells().map((B) => /* @__PURE__ */ w("td", { className: "px-4 py-3 align-middle", children: $c(B.column.columnDef.cell, B.getContext()) }, B.id))
        },
        O.id
      )) : /* @__PURE__ */ w("tr", { children: /* @__PURE__ */ w("td", { colSpan: e.length, className: "text-muted-foreground h-24 text-center", children: u }) }) })
    ] }) }) }),
    o && /* @__PURE__ */ M("div", { className: "flex items-center justify-between px-2", children: [
      /* @__PURE__ */ w("div", { className: "flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300", children: a && /* @__PURE__ */ M("div", { className: "text-muted-foreground flex-1 text-sm", children: [
        T.getFilteredSelectedRowModel().rows.length,
        " of",
        " ",
        T.getFilteredRowModel().rows.length,
        " row(s) selected."
      ] }) }),
      /* @__PURE__ */ M("div", { className: "flex items-center gap-6", children: [
        /* @__PURE__ */ M("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ w("label", { htmlFor: "rows-per-page", className: "text-sm text-slate-700 dark:text-slate-300", children: "Rows per page" }),
          /* @__PURE__ */ w(
            "select",
            {
              id: "rows-per-page",
              value: T.getState().pagination.pageSize.toString(),
              onChange: (O) => {
                T.setPageSize(Number(O.target.value));
              },
              className: "h-8 w-[70px] rounded-md border border-slate-300 bg-white text-sm dark:border-slate-700 dark:bg-slate-950",
              "aria-label": "Rows per page",
              children: s.map((O) => /* @__PURE__ */ w("option", { value: O, children: O }, O))
            }
          )
        ] }),
        /* @__PURE__ */ M("div", { className: "flex items-center gap-1 text-sm font-medium text-slate-700 dark:text-slate-300", children: [
          "Page ",
          T.getState().pagination.pageIndex + 1,
          " of ",
          T.getPageCount()
        ] }),
        /* @__PURE__ */ M("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ w(
            ue,
            {
              variant: "outline",
              size: "sm",
              onClick: () => {
                T.previousPage();
              },
              disabled: !T.getCanPreviousPage(),
              children: "Previous"
            }
          ),
          /* @__PURE__ */ w(
            ue,
            {
              variant: "outline",
              size: "sm",
              onClick: () => {
                T.nextPage();
              },
              disabled: !T.getCanNextPage(),
              children: "Next"
            }
          )
        ] })
      ] })
    ] })
  ] });
}
function xT(e) {
  return ({ column: n }) => /* @__PURE__ */ M(
    ue,
    {
      variant: "ghost",
      onClick: () => {
        n.toggleSorting(n.getIsSorted() === "asc");
      },
      className: "-ml-4 h-8",
      children: [
        e,
        n.getIsSorted() === "asc" ? /* @__PURE__ */ w(uf, { className: "ml-2 h-4 w-4" }) : n.getIsSorted() === "desc" ? /* @__PURE__ */ w($i, { className: "ml-2 h-4 w-4" }) : /* @__PURE__ */ w(Yy, { className: "ml-2 h-4 w-4 opacity-50" })
      ]
    }
  );
}
function wT() {
  return {
    id: "select",
    header: ({ table: e }) => /* @__PURE__ */ w(
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
    cell: ({ row: e }) => /* @__PURE__ */ w(
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
function _T({
  icon: e,
  title: n,
  description: t,
  action: r,
  secondaryAction: o,
  className: i,
  size: s = "md",
  children: a
}) {
  const c = {
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
  return /* @__PURE__ */ w(
    "div",
    {
      className: I(
        "flex items-center justify-center text-slate-500 dark:text-slate-400",
        c.container,
        i
      ),
      role: "status",
      "aria-live": "polite",
      children: /* @__PURE__ */ M("div", { className: "max-w-md text-center", children: [
        e && /* @__PURE__ */ w(
          "div",
          {
            className: I(
              "flex items-center justify-center text-slate-300 dark:text-slate-600",
              c.icon
            ),
            "aria-hidden": "true",
            children: e
          }
        ),
        /* @__PURE__ */ w("h3", { className: I("font-medium text-slate-700 dark:text-slate-300", c.title), children: n }),
        t && /* @__PURE__ */ w("p", { className: I("text-slate-600 dark:text-slate-400", c.description), children: t }),
        a && /* @__PURE__ */ w("div", { className: I(c.description), children: a }),
        (r || o) && /* @__PURE__ */ M("div", { className: I("flex items-center justify-center", c.actions), children: [
          r && /* @__PURE__ */ M(ue, { onClick: r.onClick, variant: r.variant || "default", children: [
            r.icon && /* @__PURE__ */ w("span", { className: "mr-2", children: r.icon }),
            r.label
          ] }),
          o && /* @__PURE__ */ w(
            ue,
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
function ST({
  error: e,
  onRetry: n,
  variant: t = "default",
  className: r,
  compact: o = !1
}) {
  const i = e instanceof Error ? e.message : e, s = () => {
    switch (t) {
      case "network":
        return pb;
      case "auth":
        return ob;
      case "notfound":
        return Zr;
      // Or a specific not-found icon if available
      default:
        return Zr;
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
  }, c = s();
  return o ? /* @__PURE__ */ M(
    "div",
    {
      className: I(
        "flex items-center justify-between rounded-lg border p-4",
        "bg-destructive/5 dark:bg-destructive/10 border-destructive/20 dark:border-destructive/30",
        r
      ),
      role: "alert",
      "aria-live": "polite",
      children: [
        /* @__PURE__ */ M("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ w(c, { className: "text-destructive h-5 w-5 flex-shrink-0", "aria-hidden": "true" }),
          /* @__PURE__ */ M("div", { children: [
            /* @__PURE__ */ w("p", { className: "text-destructive-foreground text-sm font-medium", children: a() }),
            /* @__PURE__ */ w("p", { className: "text-destructive-foreground/80 mt-0.5 text-sm", children: i || l() })
          ] })
        ] }),
        n && /* @__PURE__ */ M(
          ue,
          {
            variant: "ghost",
            size: "sm",
            onClick: n,
            className: "hover:bg-destructive/10 text-destructive hover:text-destructive ml-4",
            "aria-label": "Retry operation",
            children: [
              /* @__PURE__ */ w(xc, { className: "mr-2 h-4 w-4" }),
              "Retry"
            ]
          }
        )
      ]
    }
  ) : /* @__PURE__ */ M(
    "div",
    {
      className: I(
        "bg-background flex flex-col items-center justify-center rounded-lg border px-4 py-12",
        "border-border/60",
        r
      ),
      role: "alert",
      "aria-live": "polite",
      children: [
        /* @__PURE__ */ w("div", { className: "bg-destructive/10 mb-4 flex h-16 w-16 items-center justify-center rounded-full", children: /* @__PURE__ */ w(c, { className: "text-destructive h-8 w-8", "aria-hidden": "true" }) }),
        /* @__PURE__ */ w("h3", { className: "text-foreground mb-2 text-lg font-semibold", children: a() }),
        /* @__PURE__ */ w("p", { className: "text-muted-foreground mb-4 max-w-md text-center text-sm", children: l() }),
        i && /* @__PURE__ */ w("div", { className: "bg-muted/50 border-border/50 mb-6 w-full max-w-md rounded-md border p-3", children: /* @__PURE__ */ w("p", { className: "text-muted-foreground text-center font-mono text-xs break-words", children: i }) }),
        n && /* @__PURE__ */ M(
          ue,
          {
            variant: "default",
            onClick: n,
            className: "min-w-[120px]",
            "aria-label": "Retry operation",
            children: [
              /* @__PURE__ */ w(xc, { className: "mr-2 h-4 w-4" }),
              "Try Again"
            ]
          }
        )
      ]
    }
  );
}
const p_ = Y(
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
), h_ = Y("flex items-center justify-center rounded-full p-2", {
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
}), m_ = Y("text-2xl font-bold tracking-tight", {
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
}), y_ = Y("text-sm font-medium", {
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
function CT({
  className: e,
  variant: n,
  icon: t,
  value: r,
  label: o,
  trend: i,
  ...s
}) {
  return /* @__PURE__ */ w(kf, { className: I(p_({ variant: n, className: e })), ...s, children: /* @__PURE__ */ M("div", { className: "flex items-start justify-between space-x-4 p-6", children: [
    /* @__PURE__ */ M("div", { className: "space-y-1", children: [
      /* @__PURE__ */ w("p", { className: I(m_({ variant: n })), children: r }),
      /* @__PURE__ */ w("p", { className: I(y_({ variant: n })), children: o }),
      i && /* @__PURE__ */ M("div", { className: "mt-2 flex items-center space-x-1 text-xs", children: [
        /* @__PURE__ */ w(
          "span",
          {
            className: I(
              "font-medium",
              i.direction === "up" && "text-emerald-600 dark:text-emerald-400",
              i.direction === "down" && "text-rose-600 dark:text-rose-400",
              i.direction === "neutral" && "text-slate-500"
            ),
            children: i.value
          }
        ),
        i.label && /* @__PURE__ */ w("span", { className: "text-slate-500 dark:text-slate-400", children: i.label })
      ] })
    ] }),
    t && /* @__PURE__ */ w("div", { className: I(h_({ variant: n })), children: /* @__PURE__ */ w("div", { className: "h-6 w-6", children: t }) })
  ] }) });
}
const Mc = Y("h-2.5 w-2.5 rounded-full", {
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
function ET({
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
  }[e], c = t ?? (e === "online" || e === "connecting");
  return r ? /* @__PURE__ */ M(Nf, { variant: {
    online: "success",
    offline: "secondary",
    connecting: "warning",
    error: "destructive"
  }[e], className: I("gap-1.5", i), ...s, children: [
    /* @__PURE__ */ w(
      "span",
      {
        className: I(Mc({ status: e, animate: c }), "h-2 w-2"),
        "aria-hidden": "true"
      }
    ),
    o && /* @__PURE__ */ w("span", { children: l })
  ] }) : /* @__PURE__ */ M("div", { className: I("flex items-center gap-2 text-sm", i), ...s, children: [
    /* @__PURE__ */ w(
      "span",
      {
        className: I(Mc({ status: e, animate: c })),
        "aria-hidden": "true"
      }
    ),
    o && /* @__PURE__ */ w(
      "span",
      {
        className: I(
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
function kT({
  content: e,
  children: n,
  side: t = "top",
  disabled: r = !1,
  interactive: o = !1,
  className: i
}) {
  const [s, a] = x.useState(!1), [l, c] = x.useState({ top: 0, left: 0 }), u = x.useRef(null), d = x.useRef(null), f = x.useRef(null), g = () => {
    f.current && (clearTimeout(f.current), f.current = null), a(!0);
  }, p = () => {
    o ? f.current = setTimeout(() => {
      a(!1);
    }, 100) : a(!1);
  };
  return x.useEffect(() => () => {
    f.current && clearTimeout(f.current);
  }, []), x.useLayoutEffect(() => {
    if (s && u.current && d.current) {
      const h = u.current.getBoundingClientRect(), m = d.current.getBoundingClientRect();
      let b = 0, y = 0;
      switch (t) {
        case "right":
          b = h.top + h.height / 2 - m.height / 2, y = h.right + 8;
          break;
        case "left":
          b = h.top + h.height / 2 - m.height / 2, y = h.left - m.width - 8;
          break;
        case "top":
          b = h.top - m.height - 8, y = h.left + h.width / 2 - m.width / 2;
          break;
        case "bottom":
          b = h.bottom + 8, y = h.left + h.width / 2 - m.width / 2;
          break;
      }
      b += window.scrollY, y += window.scrollX, c({ top: b, left: y });
    }
  }, [s, t]), r ? n : /* @__PURE__ */ M(st, { children: [
    /* @__PURE__ */ w(
      "div",
      {
        ref: u,
        onMouseEnter: g,
        onMouseLeave: p,
        onFocus: g,
        onBlur: p,
        className: "inline-block",
        "data-testid": "tooltip-trigger",
        children: n
      }
    ),
    s && /* @__PURE__ */ w(
      "div",
      {
        ref: d,
        role: "tooltip",
        className: I(
          "bg-popover text-popover-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 fixed z-50 rounded-md border px-3 py-1.5 text-sm shadow-md",
          o ? "pointer-events-auto" : "pointer-events-none",
          i
        ),
        style: {
          top: `${l.top}px`,
          left: `${l.left}px`
        },
        onMouseEnter: o ? g : void 0,
        onMouseLeave: o ? p : void 0,
        children: e
      }
    )
  ] });
}
function NT({
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
  }, u = {
    danger: {
      icon: Zr,
      iconClassName: "text-destructive",
      iconBgClassName: "bg-destructive/10",
      buttonVariant: "destructive",
      buttonClassName: void 0
    },
    warning: {
      icon: Zr,
      iconClassName: "text-yellow-600 dark:text-yellow-400",
      iconBgClassName: "bg-yellow-100 dark:bg-yellow-900/30",
      buttonVariant: "default",
      buttonClassName: "bg-yellow-600 hover:bg-yellow-700 dark:bg-yellow-600 dark:hover:bg-yellow-700"
    },
    info: {
      icon: oa,
      iconClassName: "text-blue-600 dark:text-blue-400",
      iconBgClassName: "bg-blue-100 dark:bg-blue-900/30",
      buttonVariant: "default",
      buttonClassName: "bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
    }
  }[a], d = u.icon;
  return /* @__PURE__ */ w(Yv, { open: e, onOpenChange: n, children: /* @__PURE__ */ M(Mf, { children: [
    /* @__PURE__ */ w(Df, { children: /* @__PURE__ */ M("div", { className: "flex items-start gap-4", children: [
      /* @__PURE__ */ w(
        "div",
        {
          className: I(
            "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full",
            u.iconBgClassName
          ),
          children: /* @__PURE__ */ w(d, { className: I("h-6 w-6", u.iconClassName) })
        }
      ),
      /* @__PURE__ */ M("div", { className: "flex-1", children: [
        /* @__PURE__ */ w(zf, { children: r }),
        /* @__PURE__ */ w(Bf, { className: "mt-2", children: o })
      ] })
    ] }) }),
    /* @__PURE__ */ M(Lf, { children: [
      /* @__PURE__ */ w(ue, { variant: "outline", onClick: () => {
        n(!1);
      }, children: s }),
      /* @__PURE__ */ w(
        ue,
        {
          variant: u.buttonVariant,
          onClick: l,
          className: u.buttonClassName,
          children: i
        }
      )
    ] })
  ] }) });
}
const Ag = of(null);
function b_(e, n) {
  return { getTheme: function() {
    return n ?? null;
  } };
}
function ft() {
  const e = By(Ag);
  return e == null && (function(n, ...t) {
    const r = new URL("https://lexical.dev/docs/error"), o = new URLSearchParams();
    o.append("code", n);
    for (const i of t) o.append("v", i);
    throw r.search = o.toString(), Error(`Minified Lexical error #${n}; visit ${r.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
  })(8), e;
}
function z(e, ...n) {
  const t = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", e);
  for (const o of n) r.append("v", o);
  throw t.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
function Tg(e, ...n) {
  const t = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", e);
  for (const o of n) r.append("v", o);
  t.search = r.toString(), console.warn(`Minified Lexical warning #${e}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
const gt = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, v_ = gt && "documentMode" in document ? document.documentMode : null, nt = gt && /Mac|iPod|iPhone|iPad/.test(navigator.platform), En = gt && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent), oi = !(!gt || !("InputEvent" in window) || v_) && "getTargetRanges" in new window.InputEvent("input"), co = gt && /Version\/[\d.]+.*Safari/.test(navigator.userAgent), Sr = gt && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, x_ = gt && /Android/.test(navigator.userAgent), Fg = gt && /^(?=.*Chrome).*/i.test(navigator.userAgent), Dc = gt && x_ && Fg, uo = gt && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && nt && !Fg;
function Pg(...e) {
  const n = [];
  for (const t of e) if (t && typeof t == "string") for (const [r] of t.matchAll(/\S+/g)) n.push(r);
  return n;
}
const w_ = 0, __ = 1, S_ = 2, Ig = 128, C_ = 1, E_ = 2, k_ = 3, N_ = 4, R_ = 5, A_ = 6, Ui = co || Sr || uo ? " " : "​", sn = `

`, T_ = En ? " " : Ui, kn = { bold: 1, capitalize: 1024, code: 16, highlight: Ig, italic: 2, lowercase: 256, strikethrough: 4, subscript: 32, superscript: 64, underline: 8, uppercase: 512 }, F_ = { directionless: 1, unmergeable: 2 }, Lc = { center: 2, end: 6, justify: 4, left: 1, right: 3, start: 5 }, P_ = { [E_]: "center", [A_]: "end", [N_]: "justify", [C_]: "left", [k_]: "right", [R_]: "start" }, I_ = { normal: 0, segmented: 2, token: 1 }, O_ = { [w_]: "normal", [S_]: "segmented", [__]: "token" }, zc = "$config";
function Og(e, n, t, r, o, i) {
  let s = e.getFirstChild();
  for (; s !== null; ) {
    const a = s.__key;
    s.__parent === n && (P(s) && Og(s, a, t, r, o, i), t.has(a) || i.delete(a), o.push(a)), s = s.getNextSibling();
  }
}
let fa = !1, gl = 0;
function $_(e) {
  gl = e.timeStamp;
}
function Rs(e, n, t) {
  const r = e.nodeName === "BR", o = n.__lexicalLineBreak;
  return o && (e === o || r && e.previousSibling === o) || r && Ji(e, t) !== void 0;
}
function M_(e, n, t) {
  const r = pt(et(t));
  let o = null, i = null;
  r !== null && r.anchorNode === e && (o = r.anchorOffset, i = r.focusOffset);
  const s = e.nodeValue;
  s !== null && Pl(n, s, o, i, !1);
}
function D_(e, n, t) {
  if (L(e)) {
    const r = e.anchor.getNode();
    if (r.is(t) && e.format !== r.getFormat()) return !1;
  }
  return Ht(n) && t.isAttached();
}
function L_(e, n, t, r) {
  for (let o = e; o && !WS(o); o = mo(o)) {
    const i = Ji(o, n);
    if (i !== void 0) {
      const s = xe(i, t);
      if (s) return ne(s) || !_e(o) ? void 0 : [o, s];
    } else if (o === r) return [r, Bp(t)];
  }
}
function $g(e, n, t) {
  fa = !0;
  const r = performance.now() - gl > 100;
  try {
    _t(e, () => {
      const o = G() || (function(f) {
        return f.getEditorState().read(() => {
          const g = G();
          return g !== null ? g.clone() : null;
        });
      })(e), i = /* @__PURE__ */ new Map(), s = e.getRootElement(), a = e._editorState, l = e._blockCursorElement;
      let c = !1, u = "";
      for (let f = 0; f < n.length; f++) {
        const g = n[f], p = g.type, h = g.target, m = L_(h, e, a, s);
        if (!m) continue;
        const [b, y] = m;
        if (p === "characterData") r && V(y) && Ht(h) && D_(o, h, y) && M_(h, y, e);
        else if (p === "childList") {
          c = !0;
          const v = g.addedNodes;
          for (let C = 0; C < v.length; C++) {
            const E = v[C], N = Lp(E), k = E.parentNode;
            if (k != null && E !== l && N === null && !Rs(E, k, e)) {
              if (En) {
                const R = (_e(E) ? E.innerText : null) || E.nodeValue;
                R && (u += R);
              }
              k.removeChild(E);
            }
          }
          const _ = g.removedNodes, S = _.length;
          if (S > 0) {
            let C = 0;
            for (let E = 0; E < S; E++) {
              const N = _[E];
              (Rs(N, h, e) || l === N) && (h.appendChild(N), C++);
            }
            S !== C && i.set(b, y);
          }
        }
      }
      if (i.size > 0) for (const [f, g] of i) g.reconcileObservedMutation(f, e);
      const d = t.takeRecords();
      if (d.length > 0) {
        for (let f = 0; f < d.length; f++) {
          const g = d[f], p = g.addedNodes, h = g.target;
          for (let m = 0; m < p.length; m++) {
            const b = p[m], y = b.parentNode;
            y == null || b.nodeName !== "BR" || Rs(b, h, e) || y.removeChild(b);
          }
        }
        t.takeRecords();
      }
      o !== null && (c && Fe(o), En && Gp(e) && o.insertRawText(u));
    });
  } finally {
    fa = !1;
  }
}
function Mg(e) {
  const n = e._observer;
  n !== null && $g(e, n.takeRecords(), n);
}
function Dg(e) {
  (function(n) {
    gl === 0 && et(n).addEventListener("textInput", $_, !0);
  })(e), e._observer = new MutationObserver((n, t) => {
    $g(e, n, t);
  });
}
let z_ = class {
  constructor(n, t) {
    F(this, "key");
    F(this, "parse");
    F(this, "unparse");
    F(this, "isEqual");
    F(this, "defaultValue");
    this.key = n, this.parse = t.parse.bind(t), this.unparse = (t.unparse || U_).bind(t), this.isEqual = (t.isEqual || Object.is).bind(t), this.defaultValue = this.parse(void 0);
  }
};
function B_(e, n) {
  return new z_(e, n);
}
function Lg(e, n, t = "latest") {
  const r = (t === "latest" ? e.getLatest() : e).__state;
  return r ? r.getValue(n) : n.defaultValue;
}
function As(e, n, t) {
  let r;
  if (ke(), typeof t == "function") {
    const i = e.getLatest(), s = Lg(i, n);
    if (r = t(s), n.isEqual(s, r)) return i;
  } else r = t;
  const o = e.getWritable();
  return Bg(o).updateFromKnown(n, r), o;
}
function V_(e) {
  const n = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Set();
  for (let r = typeof e == "function" ? e : e.replace; r.prototype && r.prototype.getType !== void 0; r = Object.getPrototypeOf(r)) {
    const { ownNodeConfig: o } = es(r);
    if (o && o.stateConfigs) for (const i of o.stateConfigs) {
      let s;
      "stateConfig" in i ? (s = i.stateConfig, i.flat && t.add(s.key)) : s = i, n.set(s.key, s);
    }
  }
  return { flatKeys: t, sharedConfigMap: n };
}
let j_ = class zg {
  constructor(n, t, r = void 0, o = /* @__PURE__ */ new Map(), i = void 0) {
    F(this, "node");
    F(this, "knownState");
    F(this, "unknownState");
    F(this, "sharedNodeState");
    F(this, "size");
    this.node = n, this.sharedNodeState = t, this.unknownState = r, this.knownState = o;
    const { sharedConfigMap: s } = this.sharedNodeState, a = i !== void 0 ? i : (function(l, c, u) {
      let d = u.size;
      if (c) for (const f in c) {
        const g = l.get(f);
        g && u.has(g) || d++;
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
    return Bc(n) && (t.$ = n), t;
  }
  getWritable(n) {
    if (this.node === n) return this;
    const { sharedNodeState: t, unknownState: r } = this, o = new Map(this.knownState);
    return new zg(n, t, (function(i, s, a) {
      let l;
      if (a) for (const [c, u] of Object.entries(a)) {
        const d = i.get(c);
        d ? s.has(d) || s.set(d, d.parse(u)) : (l = l || {}, l[c] = u);
      }
      return l;
    })(t.sharedConfigMap, o, r), o, this.size);
  }
  updateFromKnown(n, t) {
    const r = n.key;
    this.sharedNodeState.sharedConfigMap.set(r, n);
    const { knownState: o, unknownState: i } = this;
    o.has(n) || i && r in i || (i && (delete i[r], this.unknownState = Bc(i)), this.size++), o.set(n, t);
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
function Bg(e) {
  const n = e.getWritable(), t = n.__state ? n.__state.getWritable(n) : new j_(n, Vg(n));
  return n.__state = t, t;
}
function Vg(e) {
  return e.__state ? e.__state.sharedNodeState : Ip(Qi(), e.getType()).sharedNodeState;
}
function Bc(e) {
  if (e) for (const n in e) return e;
}
function U_(e) {
  return e;
}
function Vc(e, n, t) {
  for (const [r, o] of n.knownState) {
    if (e.has(r.key)) continue;
    e.add(r.key);
    const i = t ? t.getValue(r) : r.defaultValue;
    if (i !== o && !r.isEqual(i, o)) return !0;
  }
  return !1;
}
function jc(e, n, t) {
  const { unknownState: r } = n, o = t ? t.unknownState : void 0;
  if (r) {
    for (const [i, s] of Object.entries(r))
      if (!e.has(i) && (e.add(i), s !== (o ? o[i] : void 0)))
        return !0;
  }
  return !1;
}
function Uc(e, n) {
  const t = e.__state;
  return t && t.node === e ? t.getWritable(n) : t;
}
function Gc(e, n) {
  const t = e.__mode, r = e.__format, o = e.__style, i = n.__mode, s = n.__format, a = n.__style, l = e.__state, c = n.__state;
  return (t === null || t === i) && (r === null || r === s) && (o === null || o === a) && (e.__state === null || l === c || (function(u, d) {
    if (u === d) return !0;
    if (u && d && u.size !== d.size) return !1;
    const f = /* @__PURE__ */ new Set();
    return !(u && Vc(f, u, d) || d && Vc(f, d, u) || u && jc(f, u, d) || d && jc(f, d, u));
  })(l, c));
}
function Wc(e, n) {
  const t = e.mergeWithSibling(n), r = le()._normalizedNodes;
  return r.add(e.__key), r.add(n.__key), t;
}
function Hc(e) {
  let n, t, r = e;
  if (r.__text !== "" || !r.isSimpleText() || r.isUnmergeable()) {
    for (; (n = r.getPreviousSibling()) !== null && V(n) && n.isSimpleText() && !n.isUnmergeable(); ) {
      if (n.__text !== "") {
        if (Gc(n, r)) {
          r = Wc(n, r);
          break;
        }
        break;
      }
      n.remove();
    }
    for (; (t = r.getNextSibling()) !== null && V(t) && t.isSimpleText() && !t.isUnmergeable(); ) {
      if (t.__text !== "") {
        if (Gc(r, t)) {
          r = Wc(r, t);
          break;
        }
        break;
      }
      t.remove();
    }
  } else r.remove();
}
function ii(e) {
  return Kc(e.anchor), Kc(e.focus), e;
}
function Kc(e) {
  for (; e.type === "element"; ) {
    const n = e.getNode(), t = e.offset;
    let r, o;
    if (t === n.getChildrenSize() ? (r = n.getChildAtIndex(t - 1), o = !0) : (r = n.getChildAtIndex(t), o = !1), V(r)) {
      e.set(r.__key, o ? r.getTextContentSize() : 0, "text", !0);
      break;
    }
    if (!P(r)) break;
    e.set(r.__key, o ? r.getChildrenSize() : 0, "element", !0);
  }
}
let Nn, $e, Jr, Gi, ga, pa, Rn, ot, ha, Xr, Ee = "", mt = null, hn = null, Mt = "", Jn = !1, si = !1;
function ai(e, n) {
  const t = Rn.get(e);
  if (n !== null) {
    const r = va(e);
    r.parentNode === n && n.removeChild(r);
  }
  if (ot.has(e) || $e._keyToDOMMap.delete(e), P(t)) {
    const r = ci(t, Rn);
    ma(r, 0, r.length - 1, null);
  }
  t !== void 0 && Il(Xr, Jr, Gi, t, "destroyed");
}
function ma(e, n, t, r) {
  let o = n;
  for (; o <= t; ++o) {
    const i = e[o];
    i !== void 0 && ai(i, r);
  }
}
function pn(e, n) {
  e.setProperty("text-align", n);
}
const G_ = "40px";
function jg(e, n) {
  const t = Nn.theme.indent;
  if (typeof t == "string") {
    const o = e.classList.contains(t);
    n > 0 && !o ? e.classList.add(t) : n < 1 && o && e.classList.remove(t);
  }
  const r = getComputedStyle(e).getPropertyValue("--lexical-indent-base-value") || G_;
  e.style.setProperty("padding-inline-start", n === 0 ? "" : `calc(${n} * ${r})`);
}
function Ug(e, n) {
  const t = e.style;
  n === 0 ? pn(t, "") : n === 1 ? pn(t, "left") : n === 2 ? pn(t, "center") : n === 3 ? pn(t, "right") : n === 4 ? pn(t, "justify") : n === 5 ? pn(t, "start") : n === 6 && pn(t, "end");
}
function ya(e, n) {
  const t = (function(r) {
    const o = r.__dir;
    if (o !== null) return o;
    if (we(r)) return null;
    const i = r.getParentOrThrow();
    return we(i) && i.__dir === null ? "auto" : null;
  })(n);
  t !== null ? e.dir = t : e.removeAttribute("dir");
}
function li(e, n) {
  const t = ot.get(e);
  t === void 0 && z(60);
  const r = t.createDOM(Nn, $e);
  if ((function(o, i, s) {
    const a = s._keyToDOMMap;
    (function(l, c, u) {
      const d = `__lexicalKey_${c._key}`;
      l[d] = u;
    })(i, s, o), a.set(o, i);
  })(e, r, $e), V(t) ? r.setAttribute("data-lexical-text", "true") : ne(t) && r.setAttribute("data-lexical-decorator", "true"), P(t)) {
    const o = t.__indent, i = t.__size;
    if (ya(r, t), o !== 0 && jg(r, o), i !== 0) {
      const a = i - 1;
      ba(ci(t, ot), t, 0, a, t.getDOMSlot(r));
    }
    const s = t.__format;
    s !== 0 && Ug(r, s), t.isInline() || Gg(null, t, r), Xi(t) && (Ee += sn, Mt += sn);
  } else {
    const o = t.getTextContent();
    if (ne(t)) {
      const i = t.decorate($e, Nn);
      i !== null && Wg(e, i), r.contentEditable = "false";
    }
    Ee += o, Mt += o;
  }
  return n !== null && n.insertChild(r), Il(Xr, Jr, Gi, t, "created"), r;
}
function ba(e, n, t, r, o) {
  const i = Ee;
  Ee = "";
  let s = t;
  for (; s <= r; ++s) {
    li(e[s], o);
    const a = ot.get(e[s]);
    a !== null && V(a) && mt === null && (mt = a.getFormat(), hn = a.getStyle());
  }
  Xi(n) && (Ee += sn), o.element.__lexicalTextContent = Ee, Ee = i + Ee;
}
function qc(e, n) {
  if (e) {
    const t = e.__last;
    if (t) {
      const r = n.get(t);
      if (r) return Qt(r) ? "line-break" : ne(r) && r.isInline() ? "decorator" : null;
    }
    return "empty";
  }
  return null;
}
function Gg(e, n, t) {
  const r = qc(e, Rn), o = qc(n, ot);
  r !== o && n.getDOMSlot(t).setManagedLineBreak(o);
}
function W_(e, n, t) {
  var r;
  mt = null, hn = null, (function(o, i, s) {
    const a = Ee, l = o.__size, c = i.__size;
    Ee = "";
    const u = s.element;
    if (l === 1 && c === 1) {
      const d = o.__first, f = i.__first;
      if (d === f) Vr(d, u);
      else {
        const p = va(d), h = li(f, null);
        try {
          u.replaceChild(h, p);
        } catch (m) {
          if (typeof m == "object" && m != null) {
            const b = `${m.toString()} Parent: ${u.tagName}, new child: {tag: ${h.tagName} key: ${f}}, old child: {tag: ${p.tagName}, key: ${d}}.`;
            throw new Error(b);
          }
          throw m;
        }
        ai(d, null);
      }
      const g = ot.get(f);
      V(g) && mt === null && (mt = g.getFormat(), hn = g.getStyle());
    } else {
      const d = ci(o, Rn), f = ci(i, ot);
      if (d.length !== l && z(227), f.length !== c && z(228), l === 0) c !== 0 && ba(f, i, 0, c - 1, s);
      else if (c === 0) {
        if (l !== 0) {
          const g = s.after == null && s.before == null && s.element.__lexicalLineBreak == null;
          ma(d, 0, l - 1, g ? null : u), g && (u.textContent = "");
        }
      } else (function(g, p, h, m, b, y) {
        const v = m - 1, _ = b - 1;
        let S, C, E = y.getFirstChild(), N = 0, k = 0;
        for (; N <= v && k <= _; ) {
          const T = p[N], D = h[k];
          if (T === D) E = Ts(Vr(D, y.element)), N++, k++;
          else {
            S === void 0 && (S = new Set(p)), C === void 0 && (C = new Set(h));
            const B = C.has(T), W = S.has(D);
            if (B) if (W) {
              const U = Tn($e, D);
              U === E ? E = Ts(Vr(D, y.element)) : (y.withBefore(E).insertChild(U), Vr(D, y.element)), N++, k++;
            } else li(D, y.withBefore(E)), k++;
            else E = Ts(va(T)), ai(T, y.element), N++;
          }
          const O = ot.get(D);
          O !== null && V(O) && mt === null && (mt = O.getFormat(), hn = O.getStyle());
        }
        const R = N > v, A = k > _;
        if (R && !A) {
          const T = h[_ + 1], D = T === void 0 ? null : $e.getElementByKey(T);
          ba(h, g, k, _, y.withBefore(D));
        } else A && !R && ma(p, N, v, y.element);
      })(i, d, f, l, c, s);
    }
    Xi(i) && (Ee += sn), u.__lexicalTextContent = Ee, Ee = a + Ee;
  })(e, n, n.getDOMSlot(t)), r = n, mt == null || mt === r.__textFormat || si || r.setTextFormat(mt), (function(o) {
    hn == null || hn === o.__textStyle || si || o.setTextStyle(hn);
  })(n);
}
function ci(e, n) {
  const t = [];
  let r = e.__first;
  for (; r !== null; ) {
    const o = n.get(r);
    o === void 0 && z(101), t.push(r), r = o.__next;
  }
  return t;
}
function Vr(e, n) {
  const t = Rn.get(e);
  let r = ot.get(e);
  t !== void 0 && r !== void 0 || z(61);
  const o = Jn || pa.has(e) || ga.has(e), i = Tn($e, e);
  if (t === r && !o) {
    if (P(t)) {
      const s = i.__lexicalTextContent;
      s !== void 0 && (Ee += s, Mt += s);
    } else {
      const s = t.getTextContent();
      Mt += s, Ee += s;
    }
    return i;
  }
  if (t !== r && o && Il(Xr, Jr, Gi, r, "updated"), r.updateDOM(t, i, Nn)) {
    const s = li(e, null);
    return n === null && z(62), n.replaceChild(s, i), ai(e, null), s;
  }
  if (P(t) && P(r)) {
    const s = r.__indent;
    (Jn || s !== t.__indent) && jg(i, s);
    const a = r.__format;
    if ((Jn || a !== t.__format) && Ug(i, a), o && (W_(t, r, i), we(r) || r.isInline() || Gg(t, r, i)), Xi(r) && (Ee += sn, Mt += sn), (Jn || r.__dir !== t.__dir) && (ya(i, r), we(r) && !Jn)) for (const l of r.getChildren()) P(l) && ya(Tn($e, l.getKey()), l);
  } else {
    const s = r.getTextContent();
    if (ne(r)) {
      const a = r.decorate($e, Nn);
      a !== null && Wg(e, a);
    }
    Ee += s, Mt += s;
  }
  if (!si && we(r) && r.__cachedText !== Mt) {
    const s = r.getWritable();
    s.__cachedText = Mt, r = s;
  }
  return i;
}
function Wg(e, n) {
  let t = $e._pendingDecorators;
  const r = $e._decorators;
  if (t === null) {
    if (r[e] === n) return;
    t = zp($e);
  }
  t[e] = n;
}
function Ts(e) {
  let n = e.nextSibling;
  return n !== null && n === $e._blockCursorElement && (n = n.nextSibling), n;
}
function H_(e, n, t, r, o, i) {
  Ee = "", Mt = "", Jn = r === 2, $e = t, Nn = t._config, Jr = t._nodes, Gi = $e._listeners.mutation, ga = o, pa = i, Rn = e._nodeMap, ot = n._nodeMap, si = n._readOnly, ha = new Map(t._keyToDOMMap);
  const s = /* @__PURE__ */ new Map();
  return Xr = s, Vr("root", null), $e = void 0, Jr = void 0, ga = void 0, pa = void 0, Rn = void 0, ot = void 0, Nn = void 0, ha = void 0, Xr = void 0, s;
}
function va(e) {
  const n = ha.get(e);
  return n === void 0 && z(75, e), n;
}
function K(e) {
  return { type: e };
}
const Hg = K("SELECTION_CHANGE_COMMAND"), K_ = K("SELECTION_INSERT_CLIPBOARD_NODES_COMMAND"), pl = K("CLICK_COMMAND"), Kg = K("BEFORE_INPUT_COMMAND"), qg = K("INPUT_COMMAND"), Yg = K("COMPOSITION_START_COMMAND"), Zg = K("COMPOSITION_END_COMMAND"), wn = K("DELETE_CHARACTER_COMMAND"), rr = K("INSERT_LINE_BREAK_COMMAND"), Qr = K("INSERT_PARAGRAPH_COMMAND"), or = K("CONTROLLED_TEXT_INSERTION_COMMAND"), hl = K("PASTE_COMMAND"), xa = K("REMOVE_TEXT_COMMAND"), eo = K("DELETE_WORD_COMMAND"), to = K("DELETE_LINE_COMMAND"), vt = K("FORMAT_TEXT_COMMAND"), ml = K("UNDO_COMMAND"), yl = K("REDO_COMMAND"), Jg = K("KEYDOWN_COMMAND"), Xg = K("KEY_ARROW_RIGHT_COMMAND"), q_ = K("MOVE_TO_END"), Qg = K("KEY_ARROW_LEFT_COMMAND"), Y_ = K("MOVE_TO_START"), ep = K("KEY_ARROW_UP_COMMAND"), tp = K("KEY_ARROW_DOWN_COMMAND"), ui = K("KEY_ENTER_COMMAND"), np = K("KEY_SPACE_COMMAND"), rp = K("KEY_BACKSPACE_COMMAND"), op = K("KEY_ESCAPE_COMMAND"), ip = K("KEY_DELETE_COMMAND"), sp = K("KEY_TAB_COMMAND"), Z_ = K("INSERT_TAB_COMMAND"), J_ = K("INDENT_CONTENT_COMMAND"), Yc = K("OUTDENT_CONTENT_COMMAND"), ap = K("DROP_COMMAND"), X_ = K("FORMAT_ELEMENT_COMMAND"), lp = K("DRAGSTART_COMMAND"), cp = K("DRAGOVER_COMMAND"), Q_ = K("DRAGEND_COMMAND"), Wi = K("COPY_COMMAND"), bl = K("CUT_COMMAND"), wa = K("SELECT_ALL_COMMAND"), eS = K("CLEAR_EDITOR_COMMAND"), tS = K("CLEAR_HISTORY_COMMAND"), ko = K("CAN_REDO_COMMAND"), No = K("CAN_UNDO_COMMAND"), nS = K("FOCUS_COMMAND"), rS = K("BLUR_COMMAND"), oS = K("KEY_MODIFIER_COMMAND"), Ft = Object.freeze({}), _a = [["keydown", function(e, n) {
  no = e.timeStamp, up = e.key, !n.isComposing() && H(n, Jg, e);
}], ["pointerdown", function(e, n) {
  const t = e.target, r = e.pointerType;
  Tr(t) && r !== "touch" && r !== "pen" && e.button === 0 && _t(n, () => {
    Op(t) || (Ea = !0);
  });
}], ["compositionstart", function(e, n) {
  H(n, Yg, e);
}], ["compositionend", function(e, n) {
  En ? jr = !0 : Sr || !co && !uo ? H(n, Zg, e) : (ka = !0, Na = e.data);
}], ["input", function(e, n) {
  e.stopPropagation(), _t(n, () => {
    n.dispatchCommand(qg, e);
  }, { event: e }), Xn = null;
}], ["click", function(e, n) {
  _t(n, () => {
    const t = G(), r = pt(et(n)), o = Nr();
    if (r) {
      if (L(t)) {
        const i = t.anchor, s = i.getNode();
        if (i.type === "element" && i.offset === 0 && t.isCollapsed() && !we(s) && ye().getChildrenSize() === 1 && s.getTopLevelElementOrThrow().isEmpty() && o !== null && t.is(o)) r.removeAllRanges(), t.dirty = !0;
        else if (e.detail === 3 && !t.isCollapsed() && s !== t.focus.getNode()) {
          const a = Qe(s, (l) => P(l) && !l.isInline());
          P(a) && a.select(0);
        }
      } else if (e.pointerType === "touch" || e.pointerType === "pen") {
        const i = r.anchorNode;
        (_e(i) || Ht(i)) && Fe(wl(o, r, n, e));
      }
    }
    H(n, pl, e);
  });
}], ["cut", Ft], ["copy", Ft], ["dragstart", Ft], ["dragover", Ft], ["dragend", Ft], ["paste", Ft], ["focus", Ft], ["blur", Ft], ["drop", Ft]];
oi && _a.push(["beforeinput", (e, n) => (function(t, r) {
  const o = t.inputType;
  o === "deleteCompositionText" || En && Gp(r) || o !== "insertCompositionText" && H(r, Kg, t);
})(e, n)]);
let no = 0, up = null, dp = 0, Xn = null;
const Sa = /* @__PURE__ */ new WeakMap(), di = /* @__PURE__ */ new WeakMap();
let Ca = !1, Ea = !1, Hr = !1, jr = !1, ka = !1, Na = "", bn = null, fp = [0, "", 0, "root", 0];
function gp(e, n, t, r, o) {
  const i = e.anchor, s = e.focus, a = i.getNode(), l = le(), c = pt(et(l)), u = c !== null ? c.anchorNode : null, d = i.key, f = l.getElementByKey(d), g = t.length;
  return d !== s.key || !V(a) || (!o && (!oi || dp < r + 50) || a.isDirty() && g < 2 || Vp(t)) && i.offset !== s.offset && !a.isComposing() || $t(a) || a.isDirty() && g > 1 || (o || !oi) && f !== null && !a.isComposing() && u !== fr(f) || c !== null && n !== null && (!n.collapsed || n.startContainer !== c.anchorNode || n.startOffset !== c.anchorOffset) || a.getFormat() !== e.format || a.getStyle() !== e.style || (function(p, h) {
    if (h.isSegmented()) return !0;
    if (!p.isCollapsed()) return !1;
    const m = p.anchor.offset, b = h.getParentOrThrow(), y = _n(h);
    return m === 0 ? !h.canInsertTextBefore() || !b.canInsertTextBefore() && !h.isComposing() || y || (function(v) {
      const _ = v.getPreviousSibling();
      return (V(_) || P(_) && _.isInline()) && !_.canInsertTextAfter();
    })(h) : m === h.getTextContentSize() && (!h.canInsertTextAfter() || !b.canInsertTextAfter() && !h.isComposing() || y);
  })(e, a);
}
function Zc(e, n) {
  return Ht(e) && e.nodeValue !== null && n !== 0 && n !== e.nodeValue.length;
}
function Jc(e, n, t) {
  const { anchorNode: r, anchorOffset: o, focusNode: i, focusOffset: s } = e;
  Ca && (Ca = !1, Zc(r, o) && Zc(i, s) && !bn) || _t(n, () => {
    if (!t) return void Fe(null);
    if (!ho(n, r, i)) return;
    let a = G();
    if (bn && L(a) && a.isCollapsed()) {
      const l = a.anchor, c = bn.anchor;
      (l.key === c.key && l.offset === c.offset + 1 || l.offset === 1 && c.getNode().is(l.getNode().getPreviousSibling())) && (a = bn.clone(), Fe(a));
    }
    if (bn = null, L(a)) {
      const l = a.anchor, c = l.getNode();
      if (a.isCollapsed()) {
        e.type === "Range" && e.anchorNode === e.focusNode && (a.dirty = !0);
        const u = et(n).event, d = u ? u.timeStamp : performance.now(), [f, g, p, h, m] = fp, b = ye(), y = n.isComposing() === !1 && b.getTextContent() === "";
        if (d < m + 200 && l.offset === p && l.key === h) Uo(a, f, g);
        else if (l.type === "text") V(c) || z(141), pp(a, c);
        else if (l.type === "element" && !y) {
          P(c) || z(259);
          const v = l.getNode();
          v.isEmpty() ? (function(_, S) {
            const C = S.getTextFormat(), E = S.getTextStyle();
            Uo(_, C, E);
          })(a, v) : Uo(a, 0, "");
        }
      } else {
        const u = l.key, d = a.focus.key, f = a.getNodes(), g = f.length, p = a.isBackward(), h = p ? s : o, m = p ? o : s, b = p ? d : u, y = p ? u : d;
        let v = 2047, _ = !1;
        for (let S = 0; S < g; S++) {
          const C = f[S], E = C.getTextContentSize();
          if (V(C) && E !== 0 && !(S === 0 && C.__key === b && h === E || S === g - 1 && C.__key === y && m === 0) && (_ = !0, v &= C.getFormat(), v === 0)) break;
        }
        a.format = _ ? v : 0;
      }
    }
    H(n, Hg, void 0);
  });
}
function Uo(e, n, t) {
  e.format === n && e.style === t || (e.format = n, e.style = t, e.dirty = !0);
}
function pp(e, n) {
  Uo(e, n.getFormat(), n.getStyle());
}
function hp(e) {
  if (!e.getTargetRanges) return null;
  const n = e.getTargetRanges();
  return n.length === 0 ? null : n[0];
}
function iS(e) {
  const n = e.inputType, t = hp(e), r = le(), o = G();
  if (n === "deleteContentBackward") {
    if (o === null) {
      const d = Nr();
      if (!L(d)) return !0;
      Fe(d.clone());
    }
    if (L(o)) {
      const d = o.anchor.key === o.focus.key;
      if (i = e.timeStamp, up === "MediaLast" && i < no + 30 && r.isComposing() && d) {
        if (Ae(null), no = 0, setTimeout(() => {
          _t(r, () => {
            Ae(null);
          });
        }, 30), L(o)) {
          const f = o.anchor.getNode();
          f.markDirty(), V(f) || z(142), pp(o, f);
        }
      } else {
        Ae(null), e.preventDefault();
        const f = o.anchor.getNode(), g = f.getTextContent(), p = f.canInsertTextAfter(), h = o.anchor.offset === 0 && o.focus.offset === g.length;
        let m = Dc && d && !h && p;
        if (m && o.isCollapsed() && (m = !ne(Pa(o.anchor, !0))), !m) {
          H(r, wn, !0);
          const b = G();
          Dc && L(b) && b.isCollapsed() && (bn = b, setTimeout(() => bn = null));
        }
      }
      return !0;
    }
  }
  var i;
  if (!L(o)) return !0;
  const s = e.data;
  Xn !== null && Fl(!1, r, Xn), o.dirty && Xn === null || !o.isCollapsed() || we(o.anchor.getNode()) || t === null || o.applyDOMRange(t), Xn = null;
  const a = o.anchor, l = o.focus, c = a.getNode(), u = l.getNode();
  if (n === "insertText" || n === "insertTranspose") {
    if (s === `
`) e.preventDefault(), H(r, rr, !1);
    else if (s === sn) e.preventDefault(), H(r, Qr, void 0);
    else if (s == null && e.dataTransfer) {
      const d = e.dataTransfer.getData("text/plain");
      e.preventDefault(), o.insertRawText(d);
    } else s != null && gp(o, t, s, e.timeStamp, !0) ? (e.preventDefault(), H(r, or, s)) : Xn = s;
    return dp = e.timeStamp, !0;
  }
  switch (e.preventDefault(), n) {
    case "insertFromYank":
    case "insertFromDrop":
    case "insertReplacementText":
      H(r, or, e);
      break;
    case "insertFromComposition":
      Ae(null), H(r, or, e);
      break;
    case "insertLineBreak":
      Ae(null), H(r, rr, !1);
      break;
    case "insertParagraph":
      Ae(null), Hr && !Sr ? (Hr = !1, H(r, rr, !1)) : H(r, Qr, void 0);
      break;
    case "insertFromPaste":
    case "insertFromPasteAsQuotation":
      H(r, hl, e);
      break;
    case "deleteByComposition":
      (function(d, f) {
        return d !== f || P(d) || P(f) || !_n(d) || !_n(f);
      })(c, u) && H(r, xa, e);
      break;
    case "deleteByDrag":
    case "deleteByCut":
      H(r, xa, e);
      break;
    case "deleteContent":
      H(r, wn, !1);
      break;
    case "deleteWordBackward":
      H(r, eo, !0);
      break;
    case "deleteWordForward":
      H(r, eo, !1);
      break;
    case "deleteHardLineBackward":
    case "deleteSoftLineBackward":
      H(r, to, !0);
      break;
    case "deleteContentForward":
    case "deleteHardLineForward":
    case "deleteSoftLineForward":
      H(r, to, !1);
      break;
    case "formatStrikeThrough":
      H(r, vt, "strikethrough");
      break;
    case "formatBold":
      H(r, vt, "bold");
      break;
    case "formatItalic":
      H(r, vt, "italic");
      break;
    case "formatUnderline":
      H(r, vt, "underline");
      break;
    case "historyUndo":
      H(r, ml, void 0);
      break;
    case "historyRedo":
      H(r, yl, void 0);
  }
  return !0;
}
function sS(e) {
  if (_e(e.target) && Op(e.target)) return !0;
  const n = le(), t = G(), r = e.data, o = hp(e);
  if (r != null && L(t) && gp(t, o, r, e.timeStamp, !1)) {
    jr && (fi(n, r), jr = !1);
    const i = t.anchor.getNode(), s = pt(et(n));
    if (s === null) return !0;
    const a = t.isBackward(), l = a ? t.anchor.offset : t.focus.offset, c = a ? t.focus.offset : t.anchor.offset;
    oi && !t.isCollapsed() && V(i) && s.anchorNode !== null && i.getTextContent().slice(0, l) + r + i.getTextContent().slice(l + c) === Up(s.anchorNode) || H(n, or, r);
    const u = r.length;
    En && u > 1 && e.inputType === "insertCompositionText" && !n.isComposing() && (t.anchor.offset -= u), co || Sr || uo || !n.isComposing() || (no = 0, Ae(null));
  } else
    Fl(!1, n, r !== null ? r : void 0), jr && (fi(n, r || void 0), jr = !1);
  return (function() {
    ke();
    const i = le();
    Mg(i);
  })(), !0;
}
function aS(e) {
  const n = le(), t = G();
  if (L(t) && !n.isComposing()) {
    const r = t.anchor, o = t.anchor.getNode();
    Ae(r.key), (e.timeStamp < no + 30 || r.type === "element" || !t.isCollapsed() || o.getFormat() !== t.format || V(o) && o.getStyle() !== t.style) && H(n, or, T_);
  }
  return !0;
}
function lS(e) {
  return fi(le(), e.data), !0;
}
function fi(e, n) {
  const t = e._compositionKey;
  if (Ae(null), t !== null && n != null) {
    if (n === "") {
      const r = xe(t), o = fr(e.getElementByKey(t));
      return void (o !== null && o.nodeValue !== null && V(r) && Pl(r, o.nodeValue, null, null, !0));
    }
    if (n[n.length - 1] === `
`) {
      const r = G();
      if (L(r)) {
        const o = r.focus;
        return r.anchor.set(o.key, o.offset, o.type), void H(e, ui, null);
      }
    }
  }
  Fl(!0, e, n);
}
function cS(e) {
  const n = le();
  if (e.key == null) return !0;
  if (ka && _u(e)) return _t(n, () => {
    fi(n, Na);
  }), ka = !1, Na = "", !0;
  if ((function(t) {
    return ae(t, "ArrowRight", { shiftKey: "any" });
  })(e)) H(n, Xg, e);
  else if ((function(t) {
    return ae(t, "ArrowRight", It);
  })(e)) H(n, q_, e);
  else if ((function(t) {
    return ae(t, "ArrowLeft", { shiftKey: "any" });
  })(e)) H(n, Qg, e);
  else if ((function(t) {
    return ae(t, "ArrowLeft", It);
  })(e)) H(n, Y_, e);
  else if ((function(t) {
    return ae(t, "ArrowUp", { altKey: "any", shiftKey: "any" });
  })(e)) H(n, ep, e);
  else if ((function(t) {
    return ae(t, "ArrowDown", { altKey: "any", shiftKey: "any" });
  })(e)) H(n, tp, e);
  else if ((function(t) {
    return ae(t, "Enter", { altKey: "any", ctrlKey: "any", metaKey: "any", shiftKey: !0 });
  })(e)) Hr = !0, H(n, ui, e);
  else if ((function(t) {
    return t.key === " ";
  })(e)) H(n, np, e);
  else if ((function(t) {
    return nt && ae(t, "o", { ctrlKey: !0 });
  })(e)) e.preventDefault(), Hr = !0, H(n, rr, !0);
  else if ((function(t) {
    return ae(t, "Enter", { altKey: "any", ctrlKey: "any", metaKey: "any" });
  })(e)) Hr = !1, H(n, ui, e);
  else if ((function(t) {
    return ae(t, "Backspace", { shiftKey: "any" }) || nt && ae(t, "h", { ctrlKey: !0 });
  })(e)) _u(e) ? H(n, rp, e) : (e.preventDefault(), H(n, wn, !0));
  else if ((function(t) {
    return t.key === "Escape";
  })(e)) H(n, op, e);
  else if ((function(t) {
    return ae(t, "Delete", {}) || nt && ae(t, "d", { ctrlKey: !0 });
  })(e)) (function(t) {
    return t.key === "Delete";
  })(e) ? H(n, ip, e) : (e.preventDefault(), H(n, wn, !1));
  else if ((function(t) {
    return ae(t, "Backspace", wu);
  })(e)) e.preventDefault(), H(n, eo, !0);
  else if ((function(t) {
    return ae(t, "Delete", wu);
  })(e)) e.preventDefault(), H(n, eo, !1);
  else if ((function(t) {
    return nt && ae(t, "Backspace", { metaKey: !0 });
  })(e)) e.preventDefault(), H(n, to, !0);
  else if ((function(t) {
    return nt && (ae(t, "Delete", { metaKey: !0 }) || ae(t, "k", { ctrlKey: !0 }));
  })(e)) e.preventDefault(), H(n, to, !1);
  else if ((function(t) {
    return ae(t, "b", It);
  })(e)) e.preventDefault(), H(n, vt, "bold");
  else if ((function(t) {
    return ae(t, "u", It);
  })(e)) e.preventDefault(), H(n, vt, "underline");
  else if ((function(t) {
    return ae(t, "i", It);
  })(e)) e.preventDefault(), H(n, vt, "italic");
  else if ((function(t) {
    return ae(t, "Tab", { shiftKey: "any" });
  })(e)) H(n, sp, e);
  else if ((function(t) {
    return ae(t, "z", It);
  })(e)) e.preventDefault(), H(n, ml, void 0);
  else if ((function(t) {
    return nt ? ae(t, "z", { metaKey: !0, shiftKey: !0 }) : ae(t, "y", { ctrlKey: !0 }) || ae(t, "z", { ctrlKey: !0, shiftKey: !0 });
  })(e)) e.preventDefault(), H(n, yl, void 0);
  else {
    const t = n._editorState._selection;
    t === null || L(t) ? Su(e) && (e.preventDefault(), H(n, wa, e)) : (function(r) {
      return ae(r, "c", It);
    })(e) ? (e.preventDefault(), H(n, Wi, e)) : (function(r) {
      return ae(r, "x", It);
    })(e) ? (e.preventDefault(), H(n, bl, e)) : Su(e) && (e.preventDefault(), H(n, wa, e));
  }
  return (function(t) {
    return t.ctrlKey || t.shiftKey || t.altKey || t.metaKey;
  })(e) && n.dispatchCommand(oS, e), !0;
}
function mp(e) {
  let n = e.__lexicalEventHandles;
  return n === void 0 && (n = [], e.__lexicalEventHandles = n), n;
}
const ir = /* @__PURE__ */ new Map();
function yp(e) {
  const n = jS(e.target);
  if (n === null) return;
  const t = $p(n.anchorNode);
  if (t === null) return;
  Ea && (Ea = !1, _t(t, () => {
    const l = Nr(), c = n.anchorNode;
    (_e(c) || Ht(c)) && Fe(wl(l, n, t, e));
  }));
  const r = Tl(t), o = r[r.length - 1], i = o._key, s = ir.get(i), a = s || o;
  a !== t && Jc(n, a, !1), Jc(n, t, !0), t !== o ? ir.set(i, t) : s && ir.delete(i);
}
function Xc(e) {
  e._lexicalHandled = !0;
}
function Qc(e) {
  return e._lexicalHandled === !0;
}
function uS(e) {
  const n = Sa.get(e);
  if (n === void 0) return;
  const t = di.get(n);
  if (t === void 0) return;
  const r = t - 1;
  r >= 0 || z(164), Sa.delete(e), di.set(n, r), r === 0 && n.removeEventListener("selectionchange", yp);
  const o = Zi(e);
  Al(o) ? ((function(s) {
    if (s._parentEditor !== null) {
      const a = Tl(s), l = a[a.length - 1]._key;
      ir.get(l) === s && ir.delete(l);
    } else ir.delete(s._key);
  })(o), e.__lexicalEditor = null) : o && z(198);
  const i = mp(e);
  for (let s = 0; s < i.length; s++) i[s]();
  e.__lexicalEventHandles = [];
}
function Ra(e, n, t) {
  ke();
  const r = e.__key, o = e.getParent();
  if (o === null) return;
  const i = (function(a) {
    const l = G();
    if (!L(l) || !P(a)) return l;
    const { anchor: c, focus: u } = l, d = c.getNode(), f = u.getNode();
    return Ia(d, a) && c.set(a.__key, 0, "element"), Ia(f, a) && u.set(a.__key, 0, "element"), l;
  })(e);
  let s = !1;
  if (L(i) && n) {
    const a = i.anchor, l = i.focus;
    a.key === r && (mi(a, e, o, e.getPreviousSibling(), e.getNextSibling()), s = !0), l.key === r && (mi(l, e, o, e.getPreviousSibling(), e.getNextSibling()), s = !0);
  } else Oe(i) && n && e.isSelected() && e.selectPrevious();
  if (L(i) && n && !s) {
    const a = e.getIndexWithinParent();
    Sn(e), hi(i, o, a, -1);
  } else Sn(e);
  t || Me(o) || o.canBeEmpty() || !o.isEmpty() || Ra(o, n), n && i && we(o) && o.isEmpty() && o.selectEnd();
}
const bp = Symbol.for("ephemeral");
function gi(e) {
  return e[bp] || !1;
}
class it {
  constructor(n) {
    F(this, "__type");
    F(this, "__key");
    F(this, "__parent");
    F(this, "__prev");
    F(this, "__next");
    F(this, "__state");
    this.__type = this.constructor.getType(), this.__parent = null, this.__prev = null, this.__next = null, Object.defineProperty(this, "__state", { configurable: !0, enumerable: !1, value: void 0, writable: !0 }), $S(this, n);
  }
  static getType() {
    const { ownNodeType: n } = es(this);
    return n === void 0 && z(64, this.name), n;
  }
  static clone(n) {
    z(65, this.name);
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
    z(137, this.constructor.name);
  }
  isAttached() {
    let n = this.__key;
    for (; n !== null; ) {
      if (n === "root") return !0;
      const t = xe(n);
      if (t === null) break;
      n = t.__parent;
    }
    return !1;
  }
  isSelected(n) {
    const t = n || G();
    if (t == null) return !1;
    const r = t.getNodes().some((o) => o.__key === this.__key);
    if (V(this)) return r;
    if (L(t) && t.anchor.type === "element" && t.focus.type === "element") {
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
    return n === null ? null : xe(n);
  }
  getParentOrThrow() {
    const n = this.getParent();
    return n === null && z(66, this.__key), n;
  }
  getTopLevelElement() {
    let n = this;
    for (; n !== null; ) {
      const t = n.getParent();
      if (Me(t)) return P(n) || n === this && ne(n) || z(194), n;
      n = t;
    }
    return null;
  }
  getTopLevelElementOrThrow() {
    const n = this.getTopLevelElement();
    return n === null && z(67, this.__key), n;
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
    return n === null ? null : xe(n);
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
    return n === null ? null : xe(n);
  }
  getNextSiblings() {
    const n = [];
    let t = this.getNextSibling();
    for (; t !== null; ) n.push(t), t = t.getNextSibling();
    return n;
  }
  getCommonAncestor(n) {
    const t = P(this) ? this : this.getParent(), r = P(n) ? n : n.getParent(), o = t && r ? Wo(t, r) : null;
    return o ? o.commonAncestor : null;
  }
  is(n) {
    return n != null && this.__key === n.__key;
  }
  isBefore(n) {
    const t = Wo(this, n);
    return t !== null && (t.type === "descendant" || (t.type === "branch" ? Jp(t) === -1 : (t.type !== "same" && t.type !== "ancestor" && z(279), !1)));
  }
  isParentOf(n) {
    const t = Wo(this, n);
    return t !== null && t.type === "ancestor";
  }
  getNodesBetween(n) {
    const t = this.isBefore(n), r = [], o = /* @__PURE__ */ new Set();
    let i = this;
    for (; i !== null; ) {
      const s = i.__key;
      if (o.has(s) || (o.add(s), r.push(i)), i === n) break;
      const a = P(i) ? t ? i.getFirstChild() : i.getLastChild() : null;
      if (a !== null) {
        i = a;
        continue;
      }
      const l = t ? i.getNextSibling() : i.getPreviousSibling();
      if (l !== null) {
        i = l;
        continue;
      }
      const c = i.getParentOrThrow();
      if (o.has(c.__key) || r.push(c), c === n) break;
      let u = null, d = c;
      do {
        if (d === null && z(68), u = t ? d.getNextSibling() : d.getPreviousSibling(), d = d.getParent(), d === null) break;
        u !== null || o.has(d.__key) || r.push(d);
      } while (u === null);
      i = u;
    }
    return t || r.reverse(), r;
  }
  isDirty() {
    const n = le()._dirtyLeaves;
    return n !== null && n.has(this.__key);
  }
  getLatest() {
    if (gi(this)) return this;
    const n = xe(this.__key);
    return n === null && z(113), n;
  }
  getWritable() {
    if (gi(this)) return this;
    ke();
    const n = un(), t = le(), r = n._nodeMap, o = this.__key, i = this.getLatest(), s = t._cloneNotNeeded, a = G();
    if (a !== null && a.setCachedNodes(null), s.has(o)) return bi(i), i;
    const l = Kp(i);
    return s.add(o), bi(l), r.set(o, l), l;
  }
  getTextContent() {
    return "";
  }
  getTextContentSize() {
    return this.getTextContent().length;
  }
  createDOM(n, t) {
    z(70);
  }
  updateDOM(n, t, r) {
    z(71);
  }
  exportDOM(n) {
    return { element: this.createDOM(n._config, n) };
  }
  exportJSON() {
    const n = this.__state ? this.__state.toJSON() : void 0;
    return { type: this.__type, version: 1, ...n };
  }
  static importJSON(n) {
    z(18, this.name);
  }
  updateFromJSON(n) {
    return (function(t, r) {
      const o = t.getWritable(), i = r.$;
      let s = i;
      for (const a of Vg(o).flatKeys) a in r && (s !== void 0 && s !== i || (s = { ...i }), s[a] = r[a]);
      return (o.__state || s) && Bg(t).updateFromJSON(s), o;
    })(this, n);
  }
  static transform() {
    return null;
  }
  remove(n) {
    Ra(this, !0, n);
  }
  replace(n, t) {
    ke();
    let r = G();
    r !== null && (r = r.clone()), Ms(this, n);
    const o = this.getLatest(), i = this.__key, s = n.__key, a = n.getWritable(), l = this.getParentOrThrow().getWritable(), c = l.__size;
    Sn(a);
    const u = o.getPreviousSibling(), d = o.getNextSibling(), f = o.__prev, g = o.__next, p = o.__parent;
    if (Ra(o, !1, !0), u === null ? l.__first = s : u.getWritable().__next = s, a.__prev = f, d === null ? l.__last = s : d.getWritable().__prev = s, a.__next = g, a.__parent = p, l.__size = c, t && (P(this) && P(a) || z(139), this.getChildren().forEach((h) => {
      a.append(h);
    })), L(r)) {
      Fe(r);
      const h = r.anchor, m = r.focus;
      h.key === i && ru(h, a), m.key === i && ru(m, a);
    }
    return Jt() === i && Ae(s), a;
  }
  insertAfter(n, t = !0) {
    ke(), Ms(this, n);
    const r = this.getWritable(), o = n.getWritable(), i = o.getParent(), s = G();
    let a = !1, l = !1;
    if (i !== null) {
      const g = n.getIndexWithinParent();
      if (Sn(o), L(s)) {
        const p = i.__key, h = s.anchor, m = s.focus;
        a = h.type === "element" && h.key === p && h.offset === g + 1, l = m.type === "element" && m.key === p && m.offset === g + 1;
      }
    }
    const c = this.getNextSibling(), u = this.getParentOrThrow().getWritable(), d = o.__key, f = r.__next;
    if (c === null ? u.__last = d : c.getWritable().__prev = d, u.__size++, r.__next = d, o.__next = f, o.__prev = r.__key, o.__parent = r.__parent, t && L(s)) {
      const g = this.getIndexWithinParent();
      hi(s, u, g + 1);
      const p = u.__key;
      a && s.anchor.set(p, g + 2, "element"), l && s.focus.set(p, g + 2, "element");
    }
    return n;
  }
  insertBefore(n, t = !0) {
    ke(), Ms(this, n);
    const r = this.getWritable(), o = n.getWritable(), i = o.__key;
    Sn(o);
    const s = this.getPreviousSibling(), a = this.getParentOrThrow().getWritable(), l = r.__prev, c = this.getIndexWithinParent();
    s === null ? a.__first = i : s.getWritable().__next = i, a.__size++, r.__prev = i, o.__prev = l, o.__next = r.__key, o.__parent = r.__parent;
    const u = G();
    return t && L(u) && hi(u, this.getParentOrThrow(), c), n;
  }
  isParentRequired() {
    return !1;
  }
  createParentElementNode() {
    return me();
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
    if (P(r)) return r.select();
    if (!V(r)) {
      const i = r.getIndexWithinParent() + 1;
      return o.select(i, i);
    }
    return r.select(n, t);
  }
  selectNext(n, t) {
    ke();
    const r = this.getNextSibling(), o = this.getParentOrThrow();
    if (r === null) return o.select();
    if (P(r)) return r.select(0, 0);
    if (!V(r)) {
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
F(it, "importDOM");
const pi = "historic", dS = "history-push", sr = "history-merge", fS = "paste", vp = "collaboration", gS = "skip-scroll-into-view", pS = "skip-dom-selection", hS = "skip-selection-focus";
class Cr extends it {
  static getType() {
    return "linebreak";
  }
  static clone(n) {
    return new Cr(n.__key);
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
      if (r !== null && vi(r)) {
        const o = r.firstChild;
        if (o === t || o.nextSibling === t && Ro(o)) {
          const i = r.lastChild;
          if (i === t || i.previousSibling === t && Ro(i)) return !0;
        }
      }
      return !1;
    })(n) || (function(t) {
      const r = t.parentElement;
      if (r !== null && vi(r)) {
        const o = r.firstChild;
        if (o === t || o.nextSibling === t && Ro(o)) return !1;
        const i = r.lastChild;
        if (i === t || i.previousSibling === t && Ro(i)) return !0;
      }
      return !1;
    })(n) ? null : { conversion: mS, priority: 0 } };
  }
  static importJSON(n) {
    return at().updateFromJSON(n);
  }
}
function mS(e) {
  return { node: at() };
}
function at() {
  return tt(new Cr());
}
function Qt(e) {
  return e instanceof Cr;
}
function Ro(e) {
  return Ht(e) && /^( |\t|\r?\n)+$/.test(e.textContent || "");
}
function Fs(e, n) {
  return 16 & n ? "code" : n & Ig ? "mark" : 32 & n ? "sub" : 64 & n ? "sup" : null;
}
function Ps(e, n) {
  return 1 & n ? "strong" : 2 & n ? "em" : "span";
}
function xp(e, n, t, r, o) {
  const i = r.classList;
  let s = ar(o, "base");
  s !== void 0 && i.add(...s), s = ar(o, "underlineStrikethrough");
  let a = !1;
  const l = 8 & n && 4 & n;
  s !== void 0 && (8 & t && 4 & t ? (a = !0, l || i.add(...s)) : l && i.remove(...s));
  for (const c in kn) {
    const u = kn[c];
    if (s = ar(o, c), s !== void 0) if (t & u) {
      if (a && (c === "underline" || c === "strikethrough")) {
        n & u && i.remove(...s);
        continue;
      }
      ((n & u) === 0 || l && c === "underline" || c === "strikethrough") && i.add(...s);
    } else n & u && i.remove(...s);
  }
}
function wp(e, n, t) {
  const r = n.firstChild, o = t.isComposing(), i = e + (o ? Ui : "");
  if (r == null) n.textContent = i;
  else {
    const s = r.nodeValue;
    if (s !== i) if (o || En) {
      const [a, l, c] = (function(u, d) {
        const f = u.length, g = d.length;
        let p = 0, h = 0;
        for (; p < f && p < g && u[p] === d[p]; ) p++;
        for (; h + p < f && h + p < g && u[f - h - 1] === d[g - h - 1]; ) h++;
        return [p, f - p - h, d.slice(p, g - h)];
      })(s, i);
      l !== 0 && r.deleteData(a, l), r.insertData(a, c);
    } else r.nodeValue = i;
  }
}
function eu(e, n, t, r, o, i) {
  wp(o, e, n);
  const s = i.theme.text;
  s !== void 0 && xp(0, 0, r, e, s);
}
function Ao(e, n) {
  const t = document.createElement(n);
  return t.appendChild(e), t;
}
class Wt extends it {
  constructor(t = "", r) {
    super(r);
    F(this, "__text");
    F(this, "__format");
    F(this, "__style");
    F(this, "__mode");
    F(this, "__detail");
    this.__text = t, this.__format = 0, this.__style = "", this.__mode = 0, this.__detail = 0;
  }
  static getType() {
    return "text";
  }
  static clone(t) {
    return new Wt(t.__text, t.__key);
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
    return O_[t.__mode];
  }
  getStyle() {
    return this.getLatest().__style;
  }
  isToken() {
    return this.getLatest().__mode === 1;
  }
  isComposing() {
    return this.__key === Jt();
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
    const r = kn[t];
    return (this.getFormat() & r) !== 0;
  }
  isSimpleText() {
    return this.__type === "text" && this.__mode === 0;
  }
  getTextContent() {
    return this.getLatest().__text;
  }
  getFormatFlags(t, r) {
    return yi(this.getLatest().__format, t, r);
  }
  canHaveFormat() {
    return !0;
  }
  isInline() {
    return !0;
  }
  createDOM(t, r) {
    const o = this.__format, i = Fs(0, o), s = Ps(0, o), a = i === null ? s : i, l = document.createElement(a);
    let c = l;
    this.hasFormat("code") && l.setAttribute("spellcheck", "false"), i !== null && (c = document.createElement(s), l.appendChild(c)), eu(c, this, 0, o, this.__text, t);
    const u = this.__style;
    return u !== "" && (l.style.cssText = u), l;
  }
  updateDOM(t, r, o) {
    const i = this.__text, s = t.__format, a = this.__format, l = Fs(0, s), c = Fs(0, a), u = Ps(0, s), d = Ps(0, a);
    if ((l === null ? u : l) !== (c === null ? d : c)) return !0;
    if (l === c && u !== d) {
      const m = r.firstChild;
      m == null && z(48);
      const b = document.createElement(d);
      return eu(b, this, 0, a, i, o), r.replaceChild(b, m), !1;
    }
    let f = r;
    c !== null && l !== null && (f = r.firstChild, f == null && z(49)), wp(i, f, this);
    const g = o.theme.text;
    g !== void 0 && s !== a && xp(0, s, a, f, g);
    const p = t.__style, h = this.__style;
    return p !== h && (r.style.cssText = h), !1;
  }
  static importDOM() {
    return { "#text": () => ({ conversion: xS, priority: 0 }), b: () => ({ conversion: bS, priority: 0 }), code: () => ({ conversion: Pt, priority: 0 }), em: () => ({ conversion: Pt, priority: 0 }), i: () => ({ conversion: Pt, priority: 0 }), mark: () => ({ conversion: Pt, priority: 0 }), s: () => ({ conversion: Pt, priority: 0 }), span: () => ({ conversion: yS, priority: 0 }), strong: () => ({ conversion: Pt, priority: 0 }), sub: () => ({ conversion: Pt, priority: 0 }), sup: () => ({ conversion: Pt, priority: 0 }), u: () => ({ conversion: Pt, priority: 0 }) };
  }
  static importJSON(t) {
    return be().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setTextContent(t.text).setFormat(t.format).setDetail(t.detail).setMode(t.mode).setStyle(t.style);
  }
  exportDOM(t) {
    let { element: r } = super.exportDOM(t);
    return _e(r) || z(132), r.style.whiteSpace = "pre-wrap", this.hasFormat("lowercase") ? r.style.textTransform = "lowercase" : this.hasFormat("uppercase") ? r.style.textTransform = "uppercase" : this.hasFormat("capitalize") && (r.style.textTransform = "capitalize"), this.hasFormat("bold") && (r = Ao(r, "b")), this.hasFormat("italic") && (r = Ao(r, "i")), this.hasFormat("strikethrough") && (r = Ao(r, "s")), this.hasFormat("underline") && (r = Ao(r, "u")), { element: r };
  }
  exportJSON() {
    return { detail: this.getDetail(), format: this.getFormat(), mode: this.getMode(), style: this.getStyle(), text: this.getTextContent(), ...super.exportJSON() };
  }
  selectionTransform(t, r) {
  }
  setFormat(t) {
    const r = this.getWritable();
    return r.__format = typeof t == "string" ? kn[t] : t, r;
  }
  setDetail(t) {
    const r = this.getWritable();
    return r.__detail = typeof t == "string" ? F_[t] : t, r;
  }
  setStyle(t) {
    const r = this.getWritable();
    return r.__style = t, r;
  }
  toggleFormat(t) {
    const r = yi(this.getFormat(), t, null);
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
    const r = I_[t];
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
    const s = G(), a = this.getTextContent(), l = this.__key;
    if (typeof a == "string") {
      const c = a.length;
      o === void 0 && (o = c), i === void 0 && (i = c);
    } else o = 0, i = 0;
    if (!L(s)) return Cp(l, o, l, i, "text", "text");
    {
      const c = Jt();
      c !== s.anchor.key && c !== s.focus.key || Ae(l), s.setTextNodeRange(this, o, this, i);
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
    let c = t;
    c < 0 && (c = l + c, c < 0 && (c = 0));
    const u = G();
    if (i && L(u)) {
      const f = t + l;
      u.setTextNodeRange(s, f, s, f);
    }
    const d = a.slice(0, c) + o + a.slice(c + r);
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
    const i = r.__key, s = Jt(), a = o.length;
    t.sort((k, R) => k - R), t.push(a);
    const l = [], c = t.length;
    for (let k = 0, R = 0; k < a && R <= c; R++) {
      const A = t[R];
      A > k && (l.push(o.slice(k, A)), k = A);
    }
    const u = l.length;
    if (u === 1) return [r];
    const d = l[0], f = r.getParent();
    let g;
    const p = r.getFormat(), h = r.getStyle(), m = r.__detail;
    let b = !1, y = null, v = null;
    const _ = G();
    if (L(_)) {
      const [k, R] = _.isBackward() ? [_.focus, _.anchor] : [_.anchor, _.focus];
      k.type === "text" && k.key === i && (y = k), R.type === "text" && R.key === i && (v = R);
    }
    r.isSegmented() ? (g = be(d), g.__format = p, g.__style = h, g.__detail = m, g.__state = Uc(r, g), b = !0) : g = r.setTextContent(d);
    const S = [g];
    for (let k = 1; k < u; k++) {
      const R = be(l[k]);
      R.__format = p, R.__style = h, R.__detail = m, R.__state = Uc(r, R);
      const A = R.__key;
      s === i && Ae(A), S.push(R);
    }
    const C = y ? y.offset : null, E = v ? v.offset : null;
    let N = 0;
    for (const k of S) {
      if (!y && !v) break;
      const R = N + k.getTextContentSize();
      if (y !== null && C !== null && C <= R && C >= N && (y.set(k.getKey(), C - N, "text"), C < R && (y = null)), v !== null && E !== null && E <= R && E >= N) {
        v.set(k.getKey(), E - N, "text");
        break;
      }
      N = R;
    }
    if (f !== null) {
      (function(A) {
        const T = A.getPreviousSibling(), D = A.getNextSibling();
        T !== null && bi(T), D !== null && bi(D);
      })(this);
      const k = f.getWritable(), R = this.getIndexWithinParent();
      b ? (k.splice(R, 0, S), this.remove()) : k.splice(R, 1, S), L(_) && hi(_, f, R, u - 1);
    }
    return S;
  }
  mergeWithSibling(t) {
    const r = t === this.getPreviousSibling();
    r || t === this.getNextSibling() || z(50);
    const o = this.__key, i = t.__key, s = this.__text, a = s.length;
    Jt() === i && Ae(o);
    const l = G();
    if (L(l)) {
      const f = l.anchor, g = l.focus;
      f !== null && f.key === i && uu(f, r, o, t, a), g !== null && g.key === i && uu(g, r, o, t, a);
    }
    const c = t.__text, u = r ? c + s : s + c;
    this.setTextContent(u);
    const d = this.getWritable();
    return t.remove(), d;
  }
  isTextEntity() {
    return !1;
  }
}
function yS(e) {
  return { forChild: vl(e.style), node: null };
}
function bS(e) {
  const n = e, t = n.style.fontWeight === "normal";
  return { forChild: vl(n.style, t ? void 0 : "bold"), node: null };
}
const tu = /* @__PURE__ */ new WeakMap();
function vS(e) {
  if (!_e(e)) return !1;
  if (e.nodeName === "PRE") return !0;
  const n = e.style.whiteSpace;
  return typeof n == "string" && n.startsWith("pre");
}
function xS(e) {
  const n = e;
  e.parentElement === null && z(129);
  let t = n.textContent || "";
  if ((function(r) {
    let o, i = r.parentNode;
    const s = [r];
    for (; i !== null && (o = tu.get(i)) === void 0 && !vS(i); ) s.push(i), i = i.parentNode;
    const a = o === void 0 ? i : o;
    for (let l = 0; l < s.length; l++) tu.set(s[l], a);
    return a;
  })(n) !== null) {
    const r = t.split(/(\r?\n|\t)/), o = [], i = r.length;
    for (let s = 0; s < i; s++) {
      const a = r[s];
      a === `
` || a === `\r
` ? o.push(at()) : a === "	" ? o.push(kr()) : a !== "" && o.push(be(a));
    }
    return { node: o };
  }
  if (t = t.replace(/\r/g, "").replace(/[ \t\n]+/g, " "), t === "") return { node: null };
  if (t[0] === " ") {
    let r = n, o = !0;
    for (; r !== null && (r = nu(r, !1)) !== null; ) {
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
    for (; r !== null && (r = nu(r, !0)) !== null; )
      if ((r.textContent || "").replace(/^( |\t|\r?\n)+/, "").length > 0) {
        o = !1;
        break;
      }
    o && (t = t.slice(0, t.length - 1));
  }
  return t === "" ? { node: null } : { node: be(t) };
}
function nu(e, n) {
  let t = e;
  for (; ; ) {
    let r;
    for (; (r = n ? t.nextSibling : t.previousSibling) === null; ) {
      const i = t.parentElement;
      if (i === null) return null;
      t = i;
    }
    if (t = r, _e(t)) {
      const i = t.style.display;
      if (i === "" && !Ma(t) || i !== "" && !i.startsWith("inline")) return null;
    }
    let o = t;
    for (; (o = n ? t.firstChild : t.lastChild) !== null; ) t = o;
    if (Ht(t)) return t;
    if (t.nodeName === "BR") return null;
  }
}
const wS = { code: "code", em: "italic", i: "italic", mark: "highlight", s: "strikethrough", strong: "bold", sub: "subscript", sup: "superscript", u: "underline" };
function Pt(e) {
  const n = wS[e.nodeName.toLowerCase()];
  return n === void 0 ? { node: null } : { forChild: vl(e.style, n), node: null };
}
function be(e = "") {
  return tt(new Wt(e));
}
function V(e) {
  return e instanceof Wt;
}
function vl(e, n) {
  const t = e.fontWeight, r = e.textDecoration.split(" "), o = t === "700" || t === "bold", i = r.includes("line-through"), s = e.fontStyle === "italic", a = r.includes("underline"), l = e.verticalAlign;
  return (c) => (V(c) && (o && !c.hasFormat("bold") && c.toggleFormat("bold"), i && !c.hasFormat("strikethrough") && c.toggleFormat("strikethrough"), s && !c.hasFormat("italic") && c.toggleFormat("italic"), a && !c.hasFormat("underline") && c.toggleFormat("underline"), l !== "sub" || c.hasFormat("subscript") || c.toggleFormat("subscript"), l !== "super" || c.hasFormat("superscript") || c.toggleFormat("superscript"), n && !c.hasFormat(n) && c.toggleFormat(n)), c);
}
class Er extends Wt {
  static getType() {
    return "tab";
  }
  static clone(n) {
    return new Er(n.__key);
  }
  constructor(n) {
    super("	", n), this.__detail = 2;
  }
  static importDOM() {
    return null;
  }
  createDOM(n) {
    const t = super.createDOM(n), r = ar(n.theme, "tab");
    return r !== void 0 && t.classList.add(...r), t;
  }
  static importJSON(n) {
    return kr().updateFromJSON(n);
  }
  setTextContent(n) {
    return n !== "	" && n !== "" && Tg(126), super.setTextContent("	");
  }
  spliceText(n, t, r, o) {
    return r === "" && t === 0 || r === "	" && t === 1 || z(286), this;
  }
  setDetail(n) {
    return n !== 2 && z(127), this;
  }
  setMode(n) {
    return n !== "normal" && z(128), this;
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
function kr() {
  return tt(new Er());
}
function Hi(e) {
  return e instanceof Er;
}
class _S {
  constructor(n, t, r) {
    F(this, "key");
    F(this, "offset");
    F(this, "type");
    F(this, "_selection");
    this._selection = null, this.key = n, this.offset = t, this.type = r;
  }
  is(n) {
    return this.key === n.key && this.offset === n.offset && this.type === n.type;
  }
  isBefore(n) {
    return this.key === n.key ? this.offset < n.offset : Zp(Xe(Bt(this, "next")), Xe(Bt(n, "next"))) < 0;
  }
  getNode() {
    const n = xe(this.key);
    return n === null && z(20), n;
  }
  set(n, t, r, o) {
    const i = this._selection, s = this.key;
    o && this.key === n && this.offset === t && this.type === r || (this.key = n, this.offset = t, this.type = r, fo() || (Jt() === s && Ae(n), i !== null && (i.setCachedNodes(null), i.dirty = !0)));
  }
}
function Et(e, n, t) {
  return new _S(e, n, t);
}
function Is(e, n) {
  let t = n.__key, r = e.offset, o = "element";
  if (V(n)) {
    o = "text";
    const i = n.getTextContentSize();
    r > i && (r = i);
  } else if (!P(n)) {
    const i = n.getNextSibling();
    if (V(i)) t = i.__key, r = 0, o = "text";
    else {
      const s = n.getParent();
      s && (t = s.__key, r = n.getIndexWithinParent() + 1);
    }
  }
  e.set(t, r, o);
}
function ru(e, n) {
  if (P(n)) {
    const t = n.getLastDescendant();
    P(t) || V(t) ? Is(e, t) : Is(e, n);
  } else Is(e, n);
}
class Ki {
  constructor(n) {
    F(this, "_nodes");
    F(this, "_cachedNodes");
    F(this, "dirty");
    this._cachedNodes = null, this._nodes = n, this.dirty = !1;
  }
  getCachedNodes() {
    return this._cachedNodes;
  }
  setCachedNodes(n) {
    this._cachedNodes = n;
  }
  is(n) {
    if (!Oe(n)) return !1;
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
    return new Ki(new Set(this._nodes));
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
    if (V(o)) i = o.select();
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
      const i = xe(o);
      i !== null && r.push(i);
    }
    return fo() || (this._cachedNodes = r), r;
  }
  getTextContent() {
    const n = this.getNodes();
    let t = "";
    for (let r = 0; r < n.length; r++) t += n[r].getTextContent();
    return t;
  }
  deleteNodes() {
    const n = this.getNodes();
    if ((G() || Nr()) === this && n[0]) {
      const t = Te(n[0], "next");
      eC(an(t, t));
    }
    for (const t of n) t.remove();
  }
}
function L(e) {
  return e instanceof zn;
}
class zn {
  constructor(n, t, r, o) {
    F(this, "format");
    F(this, "style");
    F(this, "anchor");
    F(this, "focus");
    F(this, "_cachedNodes");
    F(this, "dirty");
    this.anchor = n, this.focus = t, n._selection = this, t._selection = this, this._cachedNodes = null, this.format = r, this.style = o, this.dirty = !1;
  }
  getCachedNodes() {
    return this._cachedNodes;
  }
  setCachedNodes(n) {
    this._cachedNodes = n;
  }
  is(n) {
    return !!L(n) && this.anchor.is(n.anchor) && this.focus.is(n.focus) && this.format === n.format && this.style === n.style;
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
      for (const c of r) if (St(c)) {
        const { origin: u } = c;
        o.length === 0 ? a.add(u) : (l.add(u), o.push(u));
      } else {
        const { origin: u } = c;
        P(u) && l.has(u) || o.push(u);
      }
      if (s && o.push(s.caret.origin), pr(r.focus) && P(r.focus.origin) && r.focus.getNodeAtCaret() === null) for (let c = lt(r.focus.origin, "previous"); St(c) && a.has(c.origin) && !c.origin.isEmpty() && c.origin.is(o[o.length - 1]); c = Ll(c)) a.delete(c.origin), o.pop();
      for (; o.length > 1; ) {
        const c = o[o.length - 1];
        if (!P(c) || l.has(c) || c.isEmpty() || a.has(c)) break;
        o.pop();
      }
      if (o.length === 0 && r.isCollapsed()) {
        const c = Xe(r.anchor), u = Xe(r.anchor.getFlipped()), d = (g) => en(g) ? g.origin : g.getNodeAtCaret(), f = d(c) || d(u) || (r.anchor.getNodeAtCaret() ? c.origin : u.origin);
        o.push(f);
      }
      return o;
    })(Qp(Au(this), "next"));
    return fo() || (this._cachedNodes = t), t;
  }
  setTextNodeRange(n, t, r, o) {
    this.anchor.set(n.__key, t, "text"), this.focus.set(r.__key, o, "text");
  }
  getTextContent() {
    const n = this.getNodes();
    if (n.length === 0) return "";
    const t = n[0], r = n[n.length - 1], o = this.anchor, i = this.focus, s = o.isBefore(i), [a, l] = Aa(this);
    let c = "", u = !0;
    for (let d = 0; d < n.length; d++) {
      const f = n[d];
      if (P(f) && !f.isInline()) u || (c += `
`), u = !f.isEmpty();
      else if (u = !1, V(f)) {
        let g = f.getTextContent();
        f === t ? f === r ? o.type === "element" && i.type === "element" && i.offset !== o.offset || (g = a < l ? g.slice(a, l) : g.slice(l, a)) : g = s ? g.slice(a) : g.slice(l) : f === r && (g = s ? g.slice(0, l) : g.slice(0, a)), c += g;
      } else !ne(f) && !Qt(f) || f === r && this.isCollapsed() || (c += f.getTextContent());
    }
    return c;
  }
  applyDOMRange(n) {
    const t = le(), r = t.getEditorState()._selection, o = Sp(n.startContainer, n.startOffset, n.endContainer, n.endOffset, t, r);
    if (o === null) return;
    const [i, s] = o;
    this.anchor.set(i.key, i.offset, i.type, !0), this.focus.set(s.key, s.offset, s.type, !0), ii(this);
  }
  clone() {
    const n = this.anchor, t = this.focus;
    return new zn(Et(n.key, n.offset, n.type), Et(t.key, t.offset, t.type), this.format, this.style);
  }
  toggleFormat(n) {
    this.format = yi(this.format, n, null), this.dirty = !0;
  }
  setFormat(n) {
    this.format = n, this.dirty = !0;
  }
  setStyle(n) {
    this.style = n, this.dirty = !0;
  }
  hasFormat(n) {
    const t = kn[n];
    return (this.format & t) !== 0;
  }
  insertRawText(n) {
    const t = n.split(/(\r?\n|\t)/), r = [], o = t.length;
    for (let i = 0; i < o; i++) {
      const s = t[i];
      s === `
` || s === `\r
` ? r.push(at()) : s === "	" ? r.push(kr()) : r.push(be(s));
    }
    this.insertNodes(r);
  }
  insertText(n) {
    const t = this.anchor, r = this.focus, o = this.format, i = this.style;
    let s = t, a = r;
    !this.isCollapsed() && r.isBefore(t) && (s = r, a = t), s.type === "element" && (function(m, b, y, v) {
      const _ = m.getNode(), S = _.getChildAtIndex(m.offset), C = be();
      if (C.setFormat(y), C.setStyle(v), po(S)) S.splice(0, 0, [C]);
      else {
        const E = we(_) ? me().append(C) : C;
        S === null ? _.append(E) : S.insertBefore(E);
      }
      m.is(b) && b.set(C.__key, 0, "text"), m.set(C.__key, 0, "text");
    })(s, a, o, i), a.type === "element" && On(a, Xe(Bt(a, "next")));
    const l = s.offset;
    let c = a.offset;
    const u = this.getNodes(), d = u.length;
    let f = u[0];
    V(f) || z(26);
    const g = f.getTextContent().length, p = f.getParentOrThrow();
    let h = u[d - 1];
    if (d === 1 && a.type === "element" && (c = g, a.set(s.key, c, "text")), this.isCollapsed() && l === g && ($t(f) || !f.canInsertTextAfter() || !p.canInsertTextAfter() && f.getNextSibling() === null)) {
      let m = f.getNextSibling();
      if (V(m) && m.canInsertTextBefore() && !$t(m) || (m = be(), m.setFormat(o), m.setStyle(i), p.canInsertTextAfter() ? f.insertAfter(m) : p.insertAfter(m)), m.select(0, 0), f = m, n !== "") return void this.insertText(n);
    } else if (this.isCollapsed() && l === 0 && ($t(f) || !f.canInsertTextBefore() || !p.canInsertTextBefore() && f.getPreviousSibling() === null)) {
      let m = f.getPreviousSibling();
      if (V(m) && !$t(m) || (m = be(), m.setFormat(o), p.canInsertTextBefore() ? f.insertBefore(m) : p.insertBefore(m)), m.select(), f = m, n !== "") return void this.insertText(n);
    } else if (f.isSegmented() && l !== g) {
      const m = be(f.getTextContent());
      m.setFormat(o), f.replace(m), f = m;
    } else if (!this.isCollapsed() && n !== "") {
      const m = h.getParent();
      if (!p.canInsertTextBefore() || !p.canInsertTextAfter() || P(m) && (!m.canInsertTextBefore() || !m.canInsertTextAfter())) return this.insertText(""), _p(this.anchor, this.focus, null), void this.insertText(n);
    }
    if (d === 1) {
      if (_n(f)) {
        const v = be(n);
        return v.select(), void f.replace(v);
      }
      const m = f.getFormat(), b = f.getStyle();
      if (l !== c || m === o && b === i) {
        if (Hi(f)) {
          const v = be(n);
          return v.setFormat(o), v.setStyle(i), v.select(), void f.replace(v);
        }
      } else {
        if (f.getTextContent() !== "") {
          const v = be(n);
          if (v.setFormat(o), v.setStyle(i), v.select(), l === 0) f.insertBefore(v, !1);
          else {
            const [_] = f.splitText(l);
            _.insertAfter(v, !1);
          }
          return void (v.isComposing() && this.anchor.type === "text" && (this.anchor.offset -= n.length));
        }
        f.setFormat(o), f.setStyle(i);
      }
      const y = c - l;
      f = f.spliceText(l, y, n, !0), f.getTextContent() === "" ? f.remove() : this.anchor.type === "text" && (f.isComposing() ? this.anchor.offset -= n.length : (this.format = m, this.style = b));
    } else {
      const m = /* @__PURE__ */ new Set([...f.getParentKeys(), ...h.getParentKeys()]), b = P(f) ? f : f.getParentOrThrow();
      let y = P(h) ? h : h.getParentOrThrow(), v = h;
      if (!b.is(y) && y.isInline()) do
        v = y, y = y.getParentOrThrow();
      while (y.isInline());
      if (a.type === "text" && (c !== 0 || h.getTextContent() === "") || a.type === "element" && h.getIndexWithinParent() < c) if (V(h) && !_n(h) && c !== h.getTextContentSize()) {
        if (h.isSegmented()) {
          const N = be(h.getTextContent());
          h.replace(N), h = N;
        }
        we(a.getNode()) || a.type !== "text" || (h = h.spliceText(0, c, "")), m.add(h.__key);
      } else {
        const N = h.getParentOrThrow();
        N.canBeEmpty() || N.getChildrenSize() !== 1 ? h.remove() : N.remove();
      }
      else m.add(h.__key);
      const _ = y.getChildren(), S = new Set(u), C = b.is(y), E = b.isInline() && f.getNextSibling() === null ? b : f;
      for (let N = _.length - 1; N >= 0; N--) {
        const k = _[N];
        if (k.is(f) || P(k) && k.isParentOf(f)) break;
        k.isAttached() && (!S.has(k) || k.is(v) ? C || E.insertAfter(k, !1) : k.remove());
      }
      if (!C) {
        let N = y, k = null;
        for (; N !== null; ) {
          const R = N.getChildren(), A = R.length;
          (A === 0 || R[A - 1].is(k)) && (m.delete(N.__key), k = N), N = N.getParent();
        }
      }
      if (_n(f)) if (l === g) f.select();
      else {
        const N = be(n);
        N.select(), f.replace(N);
      }
      else f = f.spliceText(l, g - l, n, !0), f.getTextContent() === "" ? f.remove() : f.isComposing() && this.anchor.type === "text" && (this.anchor.offset -= n.length);
      for (let N = 1; N < d; N++) {
        const k = u[N], R = k.__key;
        m.has(R) || k.remove();
      }
    }
  }
  removeText() {
    const n = G() === this;
    Ho(this, tC(Au(this))), n && G() !== this && Fe(this);
  }
  formatText(n, t = null) {
    if (this.isCollapsed()) return this.toggleFormat(n), void Ae(null);
    const r = this.getNodes(), o = [];
    for (const _ of r) V(_) && o.push(_);
    const i = (_) => {
      r.forEach((S) => {
        if (P(S)) {
          const C = S.getFormatFlags(n, _);
          S.setTextFormat(C);
        }
      });
    }, s = o.length;
    if (s === 0) return this.toggleFormat(n), Ae(null), void i(t);
    const a = this.anchor, l = this.focus, c = this.isBackward(), u = c ? l : a, d = c ? a : l;
    let f = 0, g = o[0], p = u.type === "element" ? 0 : u.offset;
    if (u.type === "text" && p === g.getTextContentSize() && (f = 1, g = o[1], p = 0), g == null) return;
    const h = g.getFormatFlags(n, t);
    i(h);
    const m = s - 1;
    let b = o[m];
    const y = d.type === "text" ? d.offset : b.getTextContentSize();
    if (g.is(b)) {
      if (p === y) return;
      if ($t(g) || p === 0 && y === g.getTextContentSize()) g.setFormat(h);
      else {
        const _ = g.splitText(p, y), S = p === 0 ? _[0] : _[1];
        S.setFormat(h), u.type === "text" && u.set(S.__key, 0, "text"), d.type === "text" && d.set(S.__key, y - p, "text");
      }
      return void (this.format = h);
    }
    p === 0 || $t(g) || ([, g] = g.splitText(p), p = 0), g.setFormat(h);
    const v = b.getFormatFlags(n, h);
    y > 0 && (y === b.getTextContentSize() || $t(b) || ([b] = b.splitText(y)), b.setFormat(v));
    for (let _ = f + 1; _ < m; _++) {
      const S = o[_], C = S.getFormatFlags(n, v);
      S.setFormat(C);
    }
    u.type === "text" && u.set(g.__key, p, "text"), d.type === "text" && d.set(b.__key, y, "text"), this.format = h | v;
  }
  insertNodes(n) {
    if (n.length === 0) return;
    if (this.isCollapsed() || this.removeText(), this.anchor.key === "root") {
      this.insertParagraph();
      const p = G();
      return L(p) || z(134), p.insertNodes(n);
    }
    const t = (this.isBackward() ? this.focus : this.anchor).getNode(), r = Qe(t, Je), o = n[n.length - 1];
    if (P(r) && "__language" in r) {
      if ("__language" in n[0]) this.insertText(n[0].getTextContent());
      else {
        const p = Os(this);
        r.splice(p, 0, n), o.selectEnd();
      }
      return;
    }
    if (!n.some((p) => (P(p) || ne(p)) && !p.isInline())) {
      P(r) || z(211, t.constructor.name, t.getType());
      const p = Os(this);
      return r.splice(p, 0, n), void o.selectEnd();
    }
    const i = (function(p) {
      const h = me();
      let m = null;
      for (let b = 0; b < p.length; b++) {
        const y = p[b], v = Qt(y);
        if (v || ne(y) && y.isInline() || P(y) && y.isInline() || V(y) || y.isParentRequired()) {
          if (m === null && (m = y.createParentElementNode(), h.append(m), v)) continue;
          m !== null && m.append(y);
        } else h.append(y), m = null;
      }
      return h;
    })(n), s = i.getLastDescendant(), a = i.getChildren(), l = !P(r) || !r.isEmpty() ? this.insertParagraph() : null, c = a[a.length - 1];
    let u = a[0];
    var d;
    P(d = u) && Je(d) && !d.isEmpty() && P(r) && (!r.isEmpty() || r.canMergeWhenEmpty()) && (P(r) || z(211, t.constructor.name, t.getType()), r.append(...u.getChildren()), u = a[1]), u && (r === null && z(212, t.constructor.name, t.getType()), (function(p, h) {
      const m = h.getParentOrThrow().getLastChild();
      let b = h;
      const y = [h];
      for (; b !== m; ) b.getNextSibling() || z(140), b = b.getNextSibling(), y.push(b);
      let v = p;
      for (const _ of y) v = v.insertAfter(_);
    })(r, u));
    const f = Qe(s, Je);
    l && P(f) && (l.canMergeWhenEmpty() || Je(c)) && (f.append(...l.getChildren()), l.remove()), P(r) && r.isEmpty() && r.remove(), s.selectEnd();
    const g = P(r) ? r.getLastChild() : null;
    Qt(g) && f !== r && g.remove();
  }
  insertParagraph() {
    if (this.anchor.key === "root") {
      const s = me();
      return ye().splice(this.anchor.offset, 0, [s]), s.select(), s;
    }
    const n = Os(this), t = Qe(this.anchor.getNode(), Je);
    P(t) || z(213);
    const r = t.getChildAtIndex(n), o = r ? [r, ...r.getNextSiblings()] : [], i = t.insertNewAfter(this, !1);
    return i ? (i.append(...o), i.selectStart(), i) : null;
  }
  insertLineBreak(n) {
    const t = at();
    if (this.insertNodes([t]), n) {
      const r = t.getParentOrThrow(), o = t.getIndexWithinParent();
      r.select(o, o);
    }
  }
  extract() {
    const n = [...this.getNodes()], t = n.length;
    let r = n[0], o = n[t - 1];
    const [i, s] = Aa(this), a = this.isBackward(), [l, c] = a ? [this.focus, this.anchor] : [this.anchor, this.focus], [u, d] = a ? [s, i] : [i, s];
    if (t === 0) return [];
    if (t === 1) {
      if (V(r) && !this.isCollapsed()) {
        const f = r.splitText(u, d), g = u === 0 ? f[0] : f[1];
        return g ? (l.set(g.getKey(), 0, "text"), c.set(g.getKey(), g.getTextContentSize(), "text"), [g]) : [];
      }
      return [r];
    }
    if (V(r) && (u === r.getTextContentSize() ? n.shift() : u !== 0 && ([, r] = r.splitText(u), n[0] = r, l.set(r.getKey(), 0, "text"))), V(o)) {
      const f = o.getTextContent().length;
      d === 0 ? n.pop() : d !== f && ([o] = o.splitText(d), n[n.length - 1] = o, c.set(o.getKey(), o.getTextContentSize(), "text"));
    }
    return n;
  }
  modify(n, t, r) {
    if (du(this, n, t, r)) return;
    const o = n === "move", i = le(), s = pt(et(i));
    if (!s) return;
    const a = i._blockCursorElement, l = i._rootElement, c = this.focus.getNode();
    if (l === null || a === null || !P(c) || c.isInline() || c.canBeEmpty() || Oa(a, i, l), this.dirty) {
      let u = Tn(i, this.anchor.key), d = Tn(i, this.focus.key);
      this.anchor.type === "text" && (u = fr(u)), this.focus.type === "text" && (d = fr(d)), u && d && Ep(s, u, this.anchor.offset, d, this.focus.offset);
    }
    if ((function(u, d, f, g) {
      u.modify(d, f, g);
    })(s, n, t ? "backward" : "forward", r), s.rangeCount > 0) {
      const u = s.getRangeAt(0), d = this.anchor.getNode(), f = we(d) ? d : BS(d);
      if (this.applyDOMRange(u), this.dirty = !0, !o) {
        const g = this.getNodes(), p = [];
        let h = !1;
        for (let m = 0; m < g.length; m++) {
          const b = g[m];
          Ia(b, f) ? p.push(b) : h = !0;
        }
        if (h && p.length > 0) if (t) {
          const m = p[0];
          P(m) ? m.selectStart() : m.getParentOrThrow().selectStart();
        } else {
          const m = p[p.length - 1];
          P(m) ? m.selectEnd() : m.getParentOrThrow().selectEnd();
        }
        s.anchorNode === u.startContainer && s.anchorOffset === u.startOffset || (function(m) {
          const b = m.focus, y = m.anchor, v = y.key, _ = y.offset, S = y.type;
          y.set(b.key, b.offset, b.type, !0), b.set(v, _, S, !0);
        })(this);
      }
    }
    r === "lineboundary" && du(this, n, t, r, "decorators");
  }
  forwardDeletion(n, t, r) {
    if (!r && (n.type === "element" && P(t) && n.offset === t.getChildrenSize() || n.type === "text" && n.offset === t.getTextContentSize())) {
      const o = t.getParent(), i = t.getNextSibling() || (o === null ? null : o.getNextSibling());
      if (P(i) && i.isShadowRoot()) return !0;
    }
    return !1;
  }
  deleteCharacter(n) {
    const t = this.isCollapsed();
    if (this.isCollapsed()) {
      const r = this.anchor;
      let o = r.getNode();
      if (this.forwardDeletion(r, o, n)) return;
      const i = Bl(Bt(r, n ? "previous" : "next"));
      if (i.getTextSlices().every((a) => a === null || a.distance === 0)) {
        let a = { type: "initial" };
        for (const l of i.iterNodeCarets("shadowRoot")) if (St(l)) {
          if (!l.origin.isInline()) {
            if (l.origin.isShadowRoot()) {
              if (a.type === "merge-block") break;
              if (P(i.anchor.origin) && i.anchor.origin.isEmpty()) {
                const c = Xe(l);
                Ho(this, an(c, c)), i.anchor.origin.remove();
              }
              return;
            }
            a.type !== "merge-next-block" && a.type !== "merge-block" || (a = { block: a.block, caret: l, type: "merge-block" });
          }
        } else {
          if (a.type === "merge-block") break;
          if (pr(l)) {
            if (P(l.origin)) {
              if (l.origin.isInline()) {
                if (!l.origin.isParentOf(i.anchor.origin)) break;
              } else a = { block: l.origin, type: "merge-next-block" };
              continue;
            }
            if (ne(l.origin)) {
              if (!l.origin.isIsolated()) if (a.type === "merge-next-block" && (l.origin.isKeyboardSelectable() || !l.origin.isInline()) && P(i.anchor.origin) && i.anchor.origin.isEmpty()) {
                i.anchor.origin.remove();
                const c = xl();
                c.add(l.origin.getKey()), Fe(c);
              } else l.origin.remove();
              return;
            }
            break;
          }
        }
        if (a.type === "merge-block") {
          const { caret: l, block: c } = a;
          return Ho(this, an(!l.origin.isEmpty() && c.isEmpty() ? Vl(Te(c, l.direction)) : i.anchor, l)), this.removeText();
        }
      }
      const s = this.focus;
      if (this.modify("extend", n, "character"), this.isCollapsed()) {
        if (n && r.offset === 0 && iu(this, r.getNode())) return;
      } else {
        const a = s.type === "text" ? s.getNode() : null;
        if (o = r.type === "text" ? r.getNode() : null, a !== null && a.isSegmented()) {
          const l = s.offset, c = a.getTextContentSize();
          if (a.is(o) || n && l !== c || !n && l !== 0) return void su(a, n, l);
        } else if (o !== null && o.isSegmented()) {
          const l = r.offset, c = o.getTextContentSize();
          if (o.is(a) || n && l !== 0 || !n && l !== c) return void su(o, n, l);
        }
        (function(l, c) {
          const u = l.anchor, d = l.focus, f = u.getNode(), g = d.getNode();
          if (f === g && u.type === "text" && d.type === "text") {
            const p = u.offset, h = d.offset, m = p < h, b = m ? p : h, y = m ? h : p, v = y - 1;
            b !== v && (function(_) {
              return !(Vp(_) || SS(_));
            })(f.getTextContent().slice(b, y)) && (c ? d.set(d.key, v, d.type) : u.set(u.key, v, u.type));
          }
        })(this, n);
      }
    }
    if (this.removeText(), n && !t && this.isCollapsed() && this.anchor.type === "element" && this.anchor.offset === 0) {
      const r = this.anchor.getNode();
      r.isEmpty() && we(r.getParent()) && r.getPreviousSibling() === null && iu(this, r);
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
function Oe(e) {
  return e instanceof Ki;
}
function ou(e) {
  const n = e.offset;
  if (e.type === "text") return n;
  const t = e.getNode();
  return n === t.getChildrenSize() ? t.getTextContent().length : 0;
}
function Aa(e) {
  const n = e.getStartEndPoints();
  if (n === null) return [0, 0];
  const [t, r] = n;
  return t.type === "element" && r.type === "element" && t.key === r.key && t.offset === r.offset ? [0, 0] : [ou(t), ou(r)];
}
function iu(e, n) {
  for (let t = n; t; t = t.getParent()) {
    if (P(t)) {
      if (t.collapseAtStart(e)) return !0;
      if (Me(t)) break;
    }
    if (t.getPreviousSibling()) break;
  }
  return !1;
}
const SS = (() => {
  try {
    const e = new RegExp("\\p{Emoji}", "u"), n = e.test.bind(e);
    if (n("❤️") && n("#️⃣") && n("👍")) return n;
  } catch {
  }
  return () => !1;
})();
function su(e, n, t) {
  const r = e, o = r.getTextContent().split(/(?=\s)/g), i = o.length;
  let s = 0, a = 0;
  for (let c = 0; c < i; c++) {
    const u = c === i - 1;
    if (a = s, s += o[c].length, n && s === t || s > t || u) {
      o.splice(c, 1), u && (a = void 0);
      break;
    }
  }
  const l = o.join("").trim();
  l === "" ? r.remove() : (r.setTextContent(l), r.select(a, a));
}
function au(e, n, t, r) {
  let o, i = n;
  if (_e(e)) {
    let s = !1;
    const a = e.childNodes, l = a.length, c = r._blockCursorElement;
    i === l && (s = !0, i = l - 1);
    let u = a[i], d = !1;
    if (u === c) u = a[i + 1], d = !0;
    else if (c !== null) {
      const f = c.parentNode;
      e === f && n > Array.prototype.indexOf.call(f.children, c) && i--;
    }
    if (o = tr(u), V(o)) i = tn(o, s ? "next" : "previous");
    else {
      let f = tr(e);
      if (f === null) return null;
      if (P(f)) {
        const g = r.getElementByKey(f.getKey());
        g === null && z(214), [f, i] = f.getDOMSlot(g).resolveChildIndex(f, g, e, n), P(f) || z(215), s && i >= f.getChildrenSize() && (i = Math.max(0, f.getChildrenSize() - 1));
        let h = f.getChildAtIndex(i);
        if (P(h) && (function(m, b, y) {
          const v = m.getParent();
          return y === null || v === null || !v.canBeEmpty() || v !== y.getNode();
        })(h, 0, t)) {
          const m = s ? h.getLastDescendant() : h.getFirstDescendant();
          m === null ? f = h : (h = m, f = P(h) ? h : h.getParentOrThrow()), i = 0;
        }
        V(h) ? (o = h, f = null, i = tn(h, s ? "next" : "previous")) : h !== f && s && !d && (P(f) || z(216), i = Math.min(f.getChildrenSize(), i + 1));
      } else {
        const g = f.getIndexWithinParent();
        i = n === 0 && ne(f) && tr(e) === f ? g : g + 1, f = f.getParentOrThrow();
      }
      if (P(f)) return Et(f.__key, i, "element");
    }
  } else o = tr(e);
  return V(o) ? Et(o.__key, tn(o, i, "clamp"), "text") : null;
}
function lu(e, n, t) {
  const r = e.offset, o = e.getNode();
  if (r === 0) {
    const i = o.getPreviousSibling(), s = o.getParent();
    if (n) {
      if ((t || !n) && i === null && P(s) && s.isInline()) {
        const a = s.getPreviousSibling();
        V(a) && e.set(a.__key, a.getTextContent().length, "text");
      }
    } else P(i) && !t && i.isInline() ? e.set(i.__key, i.getChildrenSize(), "element") : V(i) && e.set(i.__key, i.getTextContent().length, "text");
  } else if (r === o.getTextContent().length) {
    const i = o.getNextSibling(), s = o.getParent();
    if (n && P(i) && i.isInline()) e.set(i.__key, 0, "element");
    else if ((t || n) && i === null && P(s) && s.isInline() && !s.canInsertTextAfter()) {
      const a = s.getNextSibling();
      V(a) && e.set(a.__key, 0, "text");
    }
  }
}
function _p(e, n, t) {
  if (e.type === "text" && n.type === "text") {
    const r = e.isBefore(n), o = e.is(n);
    lu(e, r, o), lu(n, !r, o), o && n.set(e.key, e.offset, e.type);
    const i = le();
    if (i.isComposing() && i._compositionKey !== e.key && L(t)) {
      const s = t.anchor, a = t.focus;
      e.set(s.key, s.offset, s.type, !0), n.set(a.key, a.offset, a.type, !0);
    }
  }
}
function Sp(e, n, t, r, o, i) {
  if (e === null || t === null || !ho(o, e, t)) return null;
  const s = au(e, n, L(i) ? i.anchor : null, o);
  if (s === null) return null;
  const a = au(t, r, L(i) ? i.focus : null, o);
  if (a === null) return null;
  if (s.type === "element" && a.type === "element") {
    const l = tr(e), c = tr(t);
    if (ne(l) && ne(c)) return null;
  }
  return _p(s, a, i), [s, a];
}
function Ta(e) {
  return P(e) && !e.isInline();
}
function Cp(e, n, t, r, o, i) {
  const s = un(), a = new zn(Et(e, n, o), Et(t, r, i), 0, "");
  return a.dirty = !0, s._selection = a, a;
}
function qi() {
  const e = Et("root", 0, "element"), n = Et("root", 0, "element");
  return new zn(e, n, 0, "");
}
function xl() {
  return new Ki(/* @__PURE__ */ new Set());
}
function wl(e, n, t, r) {
  const o = t._window;
  if (o === null) return null;
  const i = r || o.event, s = i ? i.type : void 0, a = s === "selectionchange", l = !fa && (a || s === "beforeinput" || s === "compositionstart" || s === "compositionend" || s === "click" && i && i.detail === 3 || s === "drop" || s === void 0);
  let c, u, d, f;
  if (L(e) && !l) return e.clone();
  if (n === null) return null;
  if (c = n.anchorNode, u = n.focusNode, d = n.anchorOffset, f = n.focusOffset, (a || s === void 0) && L(e) && !ho(t, c, u)) return e.clone();
  const g = Sp(c, d, u, f, t, e);
  if (g === null) return null;
  const [p, h] = g;
  return new zn(p, h, L(e) ? e.format : 0, L(e) ? e.style : "");
}
function G() {
  return un()._selection;
}
function Nr() {
  return le()._editorState._selection;
}
function hi(e, n, t, r = 1) {
  const o = e.anchor, i = e.focus, s = o.getNode(), a = i.getNode();
  if (!n.is(s) && !n.is(a)) return;
  const l = n.__key;
  if (e.isCollapsed()) {
    const c = o.offset;
    if (t <= c && r > 0 || t < c && r < 0) {
      const u = Math.max(0, c + r);
      o.set(l, u, "element"), i.set(l, u, "element"), cu(e);
    }
  } else {
    const c = e.isBackward(), u = c ? i : o, d = u.getNode(), f = c ? o : i, g = f.getNode();
    if (n.is(d)) {
      const p = u.offset;
      (t <= p && r > 0 || t < p && r < 0) && u.set(l, Math.max(0, p + r), "element");
    }
    if (n.is(g)) {
      const p = f.offset;
      (t <= p && r > 0 || t < p && r < 0) && f.set(l, Math.max(0, p + r), "element");
    }
  }
  cu(e);
}
function cu(e) {
  const n = e.anchor, t = n.offset, r = e.focus, o = r.offset, i = n.getNode(), s = r.getNode();
  if (e.isCollapsed()) {
    if (!P(i)) return;
    const a = i.getChildrenSize(), l = t >= a, c = l ? i.getChildAtIndex(a - 1) : i.getChildAtIndex(t);
    if (V(c)) {
      let u = 0;
      l && (u = c.getTextContentSize()), n.set(c.__key, u, "text"), r.set(c.__key, u, "text");
    }
    return;
  }
  if (P(i)) {
    const a = i.getChildrenSize(), l = t >= a, c = l ? i.getChildAtIndex(a - 1) : i.getChildAtIndex(t);
    if (V(c)) {
      let u = 0;
      l && (u = c.getTextContentSize()), n.set(c.__key, u, "text");
    }
  }
  if (P(s)) {
    const a = s.getChildrenSize(), l = o >= a, c = l ? s.getChildAtIndex(a - 1) : s.getChildAtIndex(o);
    if (V(c)) {
      let u = 0;
      l && (u = c.getTextContentSize()), r.set(c.__key, u, "text");
    }
  }
}
function mi(e, n, t, r, o) {
  let i = null, s = 0, a = null;
  r !== null ? (i = r.__key, V(r) ? (s = r.getTextContentSize(), a = "text") : P(r) && (s = r.getChildrenSize(), a = "element")) : o !== null && (i = o.__key, V(o) ? a = "text" : P(o) && (a = "element")), i !== null && a !== null ? e.set(i, s, a) : (s = n.getIndexWithinParent(), s === -1 && (s = t.getChildrenSize()), e.set(t.__key, s, "element"));
}
function uu(e, n, t, r, o) {
  e.type === "text" ? e.set(t, e.offset + (n ? 0 : o), "text") : e.offset > r.getIndexWithinParent() && e.set(e.key, e.offset - 1, "element");
}
function Ep(e, n, t, r, o) {
  try {
    e.setBaseAndExtent(n, t, r, o);
  } catch {
  }
}
function CS(e, n, t, r, o, i, s) {
  const a = r.anchorNode, l = r.focusNode, c = r.anchorOffset, u = r.focusOffset, d = document.activeElement;
  if (o.has(vp) && d !== i || d !== null && Rl(d)) return;
  if (!L(n)) return void (e !== null && ho(t, a, l) && r.removeAllRanges());
  const f = n.anchor, g = n.focus, p = f.key, h = g.key, m = Tn(t, p), b = Tn(t, h), y = f.offset, v = g.offset, _ = n.format, S = n.style, C = n.isCollapsed();
  let E = m, N = b, k = !1;
  if (f.type === "text") {
    E = fr(m);
    const B = f.getNode();
    k = B.getFormat() !== _ || B.getStyle() !== S;
  } else L(e) && e.anchor.type === "text" && (k = !0);
  var R, A, T, D, O;
  if (g.type === "text" && (N = fr(b)), E !== null && N !== null && (C && (e === null || k || L(e) && (e.format !== _ || e.style !== S)) && (R = _, A = S, T = y, D = p, O = performance.now(), fp = [R, A, T, D, O]), c !== y || u !== v || a !== E || l !== N || r.type === "Range" && C || (d !== null && i.contains(d) || o.has(hS) || i.focus({ preventScroll: !0 }), f.type === "element"))) {
    if (Ep(r, E, y, N, v), !o.has(gS) && n.isCollapsed() && i !== null && i === document.activeElement) {
      const B = L(n) && n.anchor.type === "element" ? E.childNodes[y] || null : r.rangeCount > 0 ? r.getRangeAt(0) : null;
      if (B !== null) {
        let W;
        if (B instanceof Text) {
          const U = document.createRange();
          U.selectNode(B), W = U.getBoundingClientRect();
        } else W = B.getBoundingClientRect();
        (function(U, j, q) {
          const te = Wp(q), ie = Ol(te);
          if (te === null || ie === null) return;
          let { top: he, bottom: ze } = j, Se = 0, De = 0, Ce = q;
          for (; Ce !== null; ) {
            const Pe = Ce === te.body;
            if (Pe) Se = 0, De = et(U).innerHeight;
            else {
              const Ve = Ce.getBoundingClientRect();
              Se = Ve.top, De = Ve.bottom;
            }
            let Be = 0;
            if (he < Se ? Be = -(Se - he) : ze > De && (Be = ze - De), Be !== 0) if (Pe) ie.scrollBy(0, Be);
            else {
              const Ve = Ce.scrollTop;
              Ce.scrollTop += Be;
              const Rt = Ce.scrollTop - Ve;
              he -= Rt, ze -= Rt;
            }
            if (Pe) break;
            Ce = mo(Ce);
          }
        })(t, W, i);
      }
    }
    Ca = !0;
  }
}
function ES(e) {
  let n = G() || Nr();
  n === null && (n = ye().selectEnd()), n.insertNodes(e);
}
function Os(e) {
  let n = e;
  e.isCollapsed() || n.removeText();
  const t = G();
  L(t) && (n = t), L(n) || z(161);
  const r = n.anchor;
  let o = r.getNode(), i = r.offset;
  for (; !Je(o); ) {
    const s = o;
    if ([o, i] = kS(o, i), s.is(o)) break;
  }
  return i;
}
function kS(e, n) {
  const t = e.getParent();
  if (!t) {
    const o = me();
    return ye().append(o), o.select(), [ye(), 0];
  }
  if (V(e)) {
    const o = e.splitText(n);
    if (o.length === 0) return [t, e.getIndexWithinParent()];
    const i = n === 0 ? 0 : 1;
    return [t, o[0].getIndexWithinParent() + i];
  }
  if (!P(e) || n === 0) return [t, e.getIndexWithinParent()];
  const r = e.getChildAtIndex(n);
  if (r) {
    const o = new zn(Et(e.__key, n, "element"), Et(e.__key, n, "element"), 0, ""), i = e.insertNewAfter(o);
    i && i.append(r, ...r.getNextSiblings());
  }
  return [t, e.getIndexWithinParent() + 1];
}
function du(e, n, t, r, o = "decorators-and-blocks") {
  if (n === "move" && r === "character" && !e.isCollapsed()) {
    const [u, d] = t === e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus];
    return d.set(u.key, u.offset, u.type), !0;
  }
  const i = Bt(e.focus, t ? "previous" : "next"), s = r === "lineboundary", a = n === "move";
  let l = i, c = o === "decorators-and-blocks";
  if (!Xp(l)) {
    for (const u of l) {
      c = !1;
      const { origin: d } = u;
      if (!ne(d) || d.isIsolated() || (l = u, !s || !d.isInline())) break;
    }
    if (c) for (const u of Bl(i).iterNodeCarets(n === "extend" ? "shadowRoot" : "root")) {
      if (St(u)) u.origin.isInline() || (l = u);
      else {
        if (P(u.origin)) continue;
        ne(u.origin) && !u.origin.isInline() && (l = u);
      }
      break;
    }
  }
  if (l === i) return !1;
  if (a && !s && ne(l.origin) && l.origin.isKeyboardSelectable()) {
    const u = xl();
    return u.add(l.origin.getKey()), Fe(u), !0;
  }
  return l = Xe(l), a && On(e.anchor, l), On(e.focus, l), c || !s;
}
let Ne = null, Re = null, je = !1, $s = !1, Go = 0;
const fu = { characterData: !0, childList: !0, subtree: !0 };
function fo() {
  return je || Ne !== null && Ne._readOnly;
}
function ke() {
  je && z(13);
}
function kp() {
  Go > 99 && z(14);
}
function un() {
  return Ne === null && z(195, Np()), Ne;
}
function le() {
  return Re === null && z(196, Np()), Re;
}
function Np() {
  let e = 0;
  const n = /* @__PURE__ */ new Set(), t = An.version;
  if (typeof window < "u") for (const o of document.querySelectorAll("[contenteditable]")) {
    const i = Zi(o);
    if (Al(i)) e++;
    else if (i) {
      let s = String(i.constructor.version || "<0.17.1");
      s === t && (s += " (separately built, likely a bundler configuration issue)"), n.add(s);
    }
  }
  let r = ` Detected on the page: ${e} compatible editor(s) with version ${t}`;
  return n.size && (r += ` and incompatible editors with versions ${Array.from(n).join(", ")}`), r;
}
function NS() {
  return Re;
}
function gu(e, n, t) {
  const r = n.__type, o = Ip(e, r);
  let i = t.get(r);
  i === void 0 && (i = Array.from(o.transforms), t.set(r, i));
  const s = i.length;
  for (let a = 0; a < s && (i[a](n), n.isAttached()); a++) ;
}
function pu(e, n) {
  return e !== void 0 && e.__key !== n && e.isAttached();
}
function Rp(e, n) {
  if (!n) return;
  const t = e._updateTags;
  let r = n;
  Array.isArray(n) || (r = [n]);
  for (const o of r) t.add(o);
}
function RS(e) {
  return _l(e, le()._nodes);
}
function _l(e, n) {
  const t = e.type, r = n.get(t);
  r === void 0 && z(17, t);
  const o = r.klass;
  e.type !== o.getType() && z(18, o.name);
  const i = o.importJSON(e), s = e.children;
  if (P(i) && Array.isArray(s)) for (let a = 0; a < s.length; a++) {
    const l = _l(s[a], n);
    i.append(l);
  }
  return i;
}
function hu(e, n, t) {
  const r = Ne, o = je, i = Re;
  Ne = n, je = !0, Re = e;
  try {
    return t();
  } finally {
    Ne = r, je = o, Re = i;
  }
}
function Dt(e, n) {
  const t = e._pendingEditorState, r = e._rootElement, o = e._headless || r === null;
  if (t === null) return;
  const i = e._editorState, s = i._selection, a = t._selection, l = e._dirtyType !== 0, c = Ne, u = je, d = Re, f = e._updating, g = e._observer;
  let p = null;
  if (e._pendingEditorState = null, e._editorState = t, !o && l && g !== null) {
    Re = e, Ne = t, je = !1, e._updating = !0;
    try {
      const C = e._dirtyType, E = e._dirtyElements, N = e._dirtyLeaves;
      g.disconnect(), p = H_(i, t, e, C, E, N);
    } catch (C) {
      if (C instanceof Error && e._onError(C), $s) throw C;
      return Fp(e, null, r, t), Dg(e), e._dirtyType = 2, $s = !0, Dt(e, i), void ($s = !1);
    } finally {
      g.observe(r, fu), e._updating = f, Ne = c, je = u, Re = d;
    }
  }
  t._readOnly || (t._readOnly = !0);
  const h = e._dirtyLeaves, m = e._dirtyElements, b = e._normalizedNodes, y = e._updateTags, v = e._deferred;
  l && (e._dirtyType = 0, e._cloneNotNeeded.clear(), e._dirtyLeaves = /* @__PURE__ */ new Set(), e._dirtyElements = /* @__PURE__ */ new Map(), e._normalizedNodes = /* @__PURE__ */ new Set(), e._updateTags = /* @__PURE__ */ new Set()), (function(C, E) {
    const N = C._decorators;
    let k = C._pendingDecorators || N;
    const R = E._nodeMap;
    let A;
    for (A in k) R.has(A) || (k === N && (k = zp(C)), delete k[A]);
  })(e, t);
  const _ = o ? null : pt(et(e));
  if (e._editable && _ !== null && (l || a === null || a.dirty || !a.is(s)) && r !== null && !y.has(pS)) {
    Re = e, Ne = t;
    try {
      if (g !== null && g.disconnect(), l || a === null || a.dirty) {
        const C = e._blockCursorElement;
        C !== null && Oa(C, e, r), CS(s, a, e, _, y, r);
      }
      (function(C, E, N) {
        let k = C._blockCursorElement;
        if (L(N) && N.isCollapsed() && N.anchor.type === "element" && E.contains(document.activeElement)) {
          const R = N.anchor, A = R.getNode(), T = R.offset;
          let D = !1, O = null;
          if (T === A.getChildrenSize())
            Ds(A.getChildAtIndex(T - 1)) && (D = !0);
          else {
            const B = A.getChildAtIndex(T);
            if (B !== null && Ds(B)) {
              const W = B.getPreviousSibling();
              (W === null || Ds(W)) && (D = !0, O = C.getElementByKey(B.__key));
            }
          }
          if (D) {
            const B = C.getElementByKey(A.__key);
            return k === null && (C._blockCursorElement = k = (function(W) {
              const U = W.theme, j = document.createElement("div");
              j.contentEditable = "false", j.setAttribute("data-lexical-cursor", "true");
              let q = U.blockCursor;
              if (q !== void 0) {
                if (typeof q == "string") {
                  const te = Pg(q);
                  q = U.blockCursor = te;
                }
                q !== void 0 && j.classList.add(...q);
              }
              return j;
            })(C._config)), E.style.caretColor = "transparent", void (O === null ? B.appendChild(k) : B.insertBefore(k, O));
          }
        }
        k !== null && Oa(k, C, E);
      })(e, r, a);
    } finally {
      g !== null && g.observe(r, fu), Re = d, Ne = c;
    }
  }
  p !== null && (function(C, E, N, k, R) {
    const A = Array.from(C._listeners.mutation), T = A.length;
    for (let D = 0; D < T; D++) {
      const [O, B] = A[D];
      for (const W of B) {
        const U = E.get(W);
        U !== void 0 && O(U, { dirtyLeaves: k, prevEditorState: R, updateTags: N });
      }
    }
  })(e, p, y, h, i), L(a) || a === null || s !== null && s.is(a) || e.dispatchCommand(Hg, void 0);
  const S = e._pendingDecorators;
  S !== null && (e._decorators = S, e._pendingDecorators = null, Kr("decorator", e, !0, S)), (function(C, E, N) {
    const k = vu(E), R = vu(N);
    k !== R && Kr("textcontent", C, !0, R);
  })(e, n || i, t), Kr("update", e, !0, { dirtyElements: m, dirtyLeaves: h, editorState: t, mutatedNodes: p, normalizedNodes: b, prevEditorState: n || i, tags: y }), (function(C, E) {
    if (C._deferred = [], E.length !== 0) {
      const N = C._updating;
      C._updating = !0;
      try {
        for (let k = 0; k < E.length; k++) E[k]();
      } finally {
        C._updating = N;
      }
    }
  })(e, v), (function(C) {
    const E = C._updates;
    if (E.length !== 0) {
      const N = E.shift();
      if (N) {
        const [k, R] = N;
        Yi(C, k, R);
      }
    }
  })(e);
}
function Kr(e, n, t, ...r) {
  const o = n._updating;
  n._updating = t;
  try {
    const i = Array.from(n._listeners[e]);
    for (let s = 0; s < i.length; s++) i[s].apply(null, r);
  } finally {
    n._updating = o;
  }
}
function mu(e, n) {
  const t = e._updates;
  let r = n || !1;
  for (; t.length !== 0; ) {
    const o = t.shift();
    if (o) {
      const [i, s] = o, a = e._pendingEditorState;
      let l;
      s !== void 0 && (l = s.onUpdate, s.skipTransforms && (r = !0), s.discrete && (a === null && z(191), a._flushSync = !0), l && e._deferred.push(l), Rp(e, s.tag)), a == null ? Yi(e, i, s) : i();
    }
  }
  return r;
}
function Yi(e, n, t) {
  const r = e._updateTags;
  let o, i = !1, s = !1;
  t !== void 0 && (o = t.onUpdate, Rp(e, t.tag), i = t.skipTransforms || !1, s = t.discrete || !1), o && e._deferred.push(o);
  const a = e._editorState;
  let l = e._pendingEditorState, c = !1;
  (l === null || l._readOnly) && (l = e._pendingEditorState = Ap(l || a), c = !0), l._flushSync = s;
  const u = Ne, d = je, f = Re, g = e._updating;
  Ne = l, je = !1, e._updating = !0, Re = e;
  const p = e._headless || e.getRootElement() === null;
  kl(null);
  try {
    c && (p ? a._selection !== null && (l._selection = a._selection.clone()) : l._selection = (function(y, v) {
      const _ = y.getEditorState()._selection, S = pt(et(y));
      return L(_) || _ == null ? wl(_, S, y, v) : _.clone();
    })(e, t && t.event || null));
    const m = e._compositionKey;
    n(), i = mu(e, i), (function(y, v) {
      const _ = v.getEditorState()._selection, S = y._selection;
      if (L(S)) {
        const C = S.anchor, E = S.focus;
        let N;
        if (C.type === "text" && (N = C.getNode(), N.selectionTransform(_, S)), E.type === "text") {
          const k = E.getNode();
          N !== k && k.selectionTransform(_, S);
        }
      }
    })(l, e), e._dirtyType !== 0 && (i ? (function(y, v) {
      const _ = v._dirtyLeaves, S = y._nodeMap;
      for (const C of _) {
        const E = S.get(C);
        V(E) && E.isAttached() && E.isSimpleText() && !E.isUnmergeable() && Hc(E);
      }
    })(l, e) : (function(y, v) {
      const _ = v._dirtyLeaves, S = v._dirtyElements, C = y._nodeMap, E = Jt(), N = /* @__PURE__ */ new Map();
      let k = _, R = k.size, A = S, T = A.size;
      for (; R > 0 || T > 0; ) {
        if (R > 0) {
          v._dirtyLeaves = /* @__PURE__ */ new Set();
          for (const D of k) {
            const O = C.get(D);
            V(O) && O.isAttached() && O.isSimpleText() && !O.isUnmergeable() && Hc(O), O !== void 0 && pu(O, E) && gu(v, O, N), _.add(D);
          }
          if (k = v._dirtyLeaves, R = k.size, R > 0) {
            Go++;
            continue;
          }
        }
        v._dirtyLeaves = /* @__PURE__ */ new Set(), v._dirtyElements = /* @__PURE__ */ new Map(), A.delete("root") && A.set("root", !0);
        for (const D of A) {
          const O = D[0], B = D[1];
          if (S.set(O, B), !B) continue;
          const W = C.get(O);
          W !== void 0 && pu(W, E) && gu(v, W, N);
        }
        k = v._dirtyLeaves, R = k.size, A = v._dirtyElements, T = A.size, Go++;
      }
      v._dirtyLeaves = _, v._dirtyElements = S;
    })(l, e), mu(e), (function(y, v, _, S) {
      const C = y._nodeMap, E = v._nodeMap, N = [];
      for (const [k] of S) {
        const R = E.get(k);
        R !== void 0 && (R.isAttached() || (P(R) && Og(R, k, C, E, N, S), C.has(k) || S.delete(k), N.push(k)));
      }
      for (const k of N) E.delete(k);
      for (const k of _) {
        const R = E.get(k);
        R === void 0 || R.isAttached() || (C.has(k) || _.delete(k), E.delete(k));
      }
    })(a, l, e._dirtyLeaves, e._dirtyElements)), m !== e._compositionKey && (l._flushSync = !0);
    const b = l._selection;
    if (L(b)) {
      const y = l._nodeMap, v = b.anchor.key, _ = b.focus.key;
      y.get(v) !== void 0 && y.get(_) !== void 0 || z(19);
    } else Oe(b) && b._nodes.size === 0 && (l._selection = null);
  } catch (m) {
    return m instanceof Error && e._onError(m), e._pendingEditorState = a, e._dirtyType = 2, e._cloneNotNeeded.clear(), e._dirtyLeaves = /* @__PURE__ */ new Set(), e._dirtyElements.clear(), void Dt(e);
  } finally {
    Ne = u, je = d, Re = f, e._updating = g, Go = 0;
  }
  e._dirtyType !== 0 || e._deferred.length > 0 || (function(m, b) {
    const y = b.getEditorState()._selection, v = m._selection;
    if (v !== null) {
      if (v.dirty || !v.is(y)) return !0;
    } else if (y !== null) return !0;
    return !1;
  })(l, e) ? l._flushSync ? (l._flushSync = !1, Dt(e)) : c && OS(() => {
    Dt(e);
  }) : (l._flushSync = !1, c && (r.clear(), e._deferred = [], e._pendingEditorState = null));
}
function _t(e, n, t) {
  Re === e && t === void 0 ? n() : Yi(e, n, t);
}
class qr {
  constructor(n, t, r) {
    F(this, "element");
    F(this, "before");
    F(this, "after");
    this.element = n, this.before = t || null, this.after = r || null;
  }
  withBefore(n) {
    return new qr(this.element, n, this.after);
  }
  withAfter(n) {
    return new qr(this.element, this.before, n);
  }
  withElement(n) {
    return this.element === n ? this : new qr(n, this.before, this.after);
  }
  insertChild(n) {
    const t = this.before || this.getManagedLineBreak();
    return t !== null && t.parentElement !== this.element && z(222), this.element.insertBefore(n, t), this;
  }
  removeChild(n) {
    return n.parentElement !== this.element && z(223), this.element.removeChild(n), this;
  }
  replaceChild(n, t) {
    return t.parentElement !== this.element && z(224), this.element.replaceChild(n, t), this;
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
      const t = n === "decorator" && (uo || Sr || co);
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
    const i = yu(t, r);
    i.push(o);
    const s = yu(t, this.element);
    let a = n.getIndexWithinParent();
    for (let l = 0; l < s.length; l++) {
      const c = i[l], u = s[l];
      if (c === void 0 || c < u) break;
      if (c > u) {
        a += 1;
        break;
      }
    }
    return [n.getParentOrThrow(), a];
  }
}
function yu(e, n) {
  const t = [];
  let r = n;
  for (; r !== e && r !== null; r = r.parentNode) {
    let o = 0;
    for (let i = r.previousSibling; i !== null; i = i.previousSibling) o++;
    t.push(o);
  }
  return r !== e && z(225), t.reverse();
}
class Ye extends it {
  constructor(t) {
    super(t);
    F(this, "__first");
    F(this, "__last");
    F(this, "__size");
    F(this, "__format");
    F(this, "__style");
    F(this, "__indent");
    F(this, "__dir");
    F(this, "__textFormat");
    F(this, "__textStyle");
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
    return P_[t] || "";
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
    const t = le()._dirtyElements;
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
      if (V(r) && t.push(r), P(r)) {
        const o = r.getAllTextNodes();
        t.push(...o);
      }
      r = r.getNextSibling();
    }
    return t;
  }
  getFirstDescendant() {
    let t = this.getFirstChild();
    for (; P(t); ) {
      const r = t.getFirstChild();
      if (r === null) break;
      t = r;
    }
    return t;
  }
  getLastDescendant() {
    let t = this.getLastChild();
    for (; P(t); ) {
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
      return P(s) && s.getLastDescendant() || s || null;
    }
    const i = r[t];
    return P(i) && i.getFirstDescendant() || i || null;
  }
  getFirstChild() {
    const t = this.getLatest().__first;
    return t === null ? null : xe(t);
  }
  getFirstChildOrThrow() {
    const t = this.getFirstChild();
    return t === null && z(45, this.__key), t;
  }
  getLastChild() {
    const t = this.getLatest().__last;
    return t === null ? null : xe(t);
  }
  getLastChildOrThrow() {
    const t = this.getLastChild();
    return t === null && z(96, this.__key), t;
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
      t += s.getTextContent(), P(s) && i !== o - 1 && !s.isInline() && (t += sn);
    }
    return t;
  }
  getTextContentSize() {
    let t = 0;
    const r = this.getChildren(), o = r.length;
    for (let i = 0; i < o; i++) {
      const s = r[i];
      t += s.getTextContentSize(), P(s) && i !== o - 1 && !s.isInline() && (t += 2);
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
      const r = Lc[t];
      return (this.getFormat() & r) !== 0;
    }
    return !1;
  }
  hasTextFormat(t) {
    const r = kn[t];
    return (this.getTextFormat() & r) !== 0;
  }
  getFormatFlags(t, r) {
    return yi(this.getLatest().__textFormat, t, r);
  }
  getTextStyle() {
    return this.getLatest().__textStyle;
  }
  select(t, r) {
    ke();
    const o = G();
    let i = t, s = r;
    const a = this.getChildrenSize();
    if (!this.canBeEmpty()) {
      if (t === 0 && r === 0) {
        const c = this.getFirstChild();
        if (V(c) || P(c)) return c.select(0, 0);
      } else if (!(t !== void 0 && t !== a || r !== void 0 && r !== a)) {
        const c = this.getLastChild();
        if (V(c) || P(c)) return c.select();
      }
    }
    i === void 0 && (i = a), s === void 0 && (s = a);
    const l = this.__key;
    return L(o) ? (o.anchor.set(l, i, "element"), o.focus.set(l, s, "element"), o.dirty = !0, o) : Cp(l, i, l, s, "element", "element");
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
    return this.getWritable().__format = t !== "" ? Lc[t] : 0, this;
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
    gi(this) && z(324, this.__key, this.__type);
    const i = this.getChildrenSize(), s = this.getWritable();
    t + r <= i || z(226, String(t), String(r), String(i));
    const a = s.__key, l = [], c = [], u = this.getChildAtIndex(t + r);
    let d = null, f = i - r + o.length;
    if (t !== 0) if (t === i) d = this.getLastChild();
    else {
      const p = this.getChildAtIndex(t);
      p !== null && (d = p.getPreviousSibling());
    }
    if (r > 0) {
      let p = d === null ? this.getFirstChild() : d.getNextSibling();
      for (let h = 0; h < r; h++) {
        p === null && z(100);
        const m = p.getNextSibling(), b = p.__key;
        Sn(p.getWritable()), c.push(b), p = m;
      }
    }
    let g = d;
    for (const p of o) {
      g !== null && p.is(g) && (d = g = g.getPreviousSibling());
      const h = p.getWritable();
      h.__parent === a && f--, Sn(h);
      const m = p.__key;
      if (g === null) s.__first = m, h.__prev = null;
      else {
        const b = g.getWritable();
        b.__next = m, h.__prev = b.__key;
      }
      p.__key === a && z(76), h.__parent = a, l.push(m), g = p;
    }
    if (t + r === i)
      g !== null && (g.getWritable().__next = null, s.__last = g.__key);
    else if (u !== null) {
      const p = u.getWritable();
      if (g !== null) {
        const h = g.getWritable();
        p.__prev = g.__key, h.__next = u.__key;
      } else p.__prev = null;
    }
    if (s.__size = f, c.length) {
      const p = G();
      if (L(p)) {
        const h = new Set(c), m = new Set(l), { anchor: b, focus: y } = p;
        bu(b, h, m) && mi(b, b.getNode(), this, d, u), bu(y, h, m) && mi(y, y.getNode(), this, d, u), f !== 0 || this.canBeEmpty() || Me(this) || this.remove();
      }
    }
    return s;
  }
  getDOMSlot(t) {
    return new qr(t);
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    if (_e(r)) {
      const o = this.getIndent();
      o > 0 && (r.style.paddingInlineStart = 40 * o + "px");
      const i = this.getDirection();
      i && (r.dir = i);
    }
    return { element: r };
  }
  exportJSON() {
    const t = { children: [], direction: this.getDirection(), format: this.getFormatType(), indent: this.getIndent(), ...super.exportJSON() }, r = this.getTextFormat(), o = this.getTextStyle();
    return r === 0 && o === "" || Me(this) || this.getChildren().some(V) || (r !== 0 && (t.textFormat = r), o !== "" && (t.textStyle = o)), t;
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
function P(e) {
  return e instanceof Ye;
}
function bu(e, n, t) {
  let r = e.getNode();
  for (; r; ) {
    const o = r.__key;
    if (n.has(o) && !t.has(o)) return !0;
    r = r.getParent();
  }
  return !1;
}
class Sl extends it {
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
  return e instanceof Sl;
}
class Rr extends Ye {
  constructor() {
    super("root");
    F(this, "__cachedText");
    this.__cachedText = null;
  }
  static getType() {
    return "root";
  }
  static clone() {
    return new Rr();
  }
  getTopLevelElementOrThrow() {
    z(51);
  }
  getTextContent() {
    const t = this.__cachedText;
    return !fo() && le()._dirtyType !== 0 || t === null ? super.getTextContent() : t;
  }
  remove() {
    z(52);
  }
  replace(t) {
    z(53);
  }
  insertBefore(t) {
    z(54);
  }
  insertAfter(t) {
    z(55);
  }
  updateDOM(t, r) {
    return !1;
  }
  splice(t, r, o) {
    for (const i of o) P(i) || ne(i) || z(282);
    return super.splice(t, r, o);
  }
  static importJSON(t) {
    return ye().updateFromJSON(t);
  }
  collapseAtStart() {
    return !0;
  }
}
function we(e) {
  return e instanceof Rr;
}
function Ap(e) {
  return new go(new Map(e._nodeMap));
}
function Cl() {
  return new go(/* @__PURE__ */ new Map([["root", new Rr()]]));
}
function Tp(e) {
  const n = e.exportJSON(), t = e.constructor;
  if (n.type !== t.getType() && z(130, t.name), P(e)) {
    const r = n.children;
    Array.isArray(r) || z(59, t.name);
    const o = e.getChildren();
    for (let i = 0; i < o.length; i++) {
      const s = Tp(o[i]);
      r.push(s);
    }
  }
  return n;
}
function AS(e) {
  return e instanceof go;
}
class go {
  constructor(n, t) {
    F(this, "_nodeMap");
    F(this, "_selection");
    F(this, "_flushSync");
    F(this, "_readOnly");
    this._nodeMap = n, this._selection = t || null, this._flushSync = !1, this._readOnly = !1;
  }
  isEmpty() {
    return this._nodeMap.size === 1 && this._selection === null;
  }
  read(n, t) {
    return hu(t && t.editor || null, this, n);
  }
  clone(n) {
    const t = new go(this._nodeMap, n === void 0 ? this._selection : n);
    return t._readOnly = !0, t;
  }
  toJSON() {
    return hu(null, this, () => ({ root: Tp(ye()) }));
  }
}
class El extends Ye {
  static getType() {
    return "artificial";
  }
  createDOM(n) {
    return document.createElement("div");
  }
}
class Ar extends Ye {
  static getType() {
    return "paragraph";
  }
  static clone(n) {
    return new Ar(n.__key);
  }
  createDOM(n) {
    const t = document.createElement("p"), r = ar(n.theme, "paragraph");
    return r !== void 0 && t.classList.add(...r), t;
  }
  updateDOM(n, t, r) {
    return !1;
  }
  static importDOM() {
    return { p: (n) => ({ conversion: TS, priority: 0 }) };
  }
  exportDOM(n) {
    const { element: t } = super.exportDOM(n);
    if (_e(t)) {
      this.isEmpty() && t.append(document.createElement("br"));
      const r = this.getFormatType();
      r && (t.style.textAlign = r);
    }
    return { element: t };
  }
  static importJSON(n) {
    return me().updateFromJSON(n);
  }
  exportJSON() {
    const n = super.exportJSON();
    if (n.textFormat === void 0 || n.textStyle === void 0) {
      const t = this.getChildren().find(V);
      t ? (n.textFormat = t.getFormat(), n.textStyle = t.getStyle()) : (n.textFormat = this.getTextFormat(), n.textStyle = this.getTextStyle());
    }
    return n;
  }
  insertNewAfter(n, t) {
    const r = me();
    r.setTextFormat(n.format), r.setTextStyle(n.style);
    const o = this.getDirection();
    return r.setDirection(o), r.setFormat(this.getFormatType()), r.setStyle(this.getStyle()), this.insertAfter(r, t), r;
  }
  collapseAtStart() {
    const n = this.getChildren();
    if (n.length === 0 || V(n[0]) && n[0].getTextContent().trim() === "") {
      if (this.getNextSibling() !== null) return this.selectNext(), this.remove(), !0;
      if (this.getPreviousSibling() !== null) return this.selectPrevious(), this.remove(), !0;
    }
    return !1;
  }
}
function TS(e) {
  const n = me();
  return e.style && (n.setFormat(e.style.textAlign), $l(e, n)), { node: n };
}
function me() {
  return tt(new Ar());
}
function po(e) {
  return e instanceof Ar;
}
const ee = 0, Qn = 1, FS = 4;
function Fp(e, n, t, r) {
  const o = e._keyToDOMMap;
  o.clear(), e._editorState = Cl(), e._pendingEditorState = r, e._compositionKey = null, e._dirtyType = 0, e._cloneNotNeeded.clear(), e._dirtyLeaves = /* @__PURE__ */ new Set(), e._dirtyElements.clear(), e._normalizedNodes = /* @__PURE__ */ new Set(), e._updateTags = /* @__PURE__ */ new Set(), e._updates = [], e._blockCursorElement = null;
  const i = e._observer;
  i !== null && (i.disconnect(), e._observer = null), n !== null && (n.textContent = ""), t !== null && (t.textContent = "", o.set("root", t));
}
function PS(e) {
  const n = /* @__PURE__ */ new Set(), t = /* @__PURE__ */ new Set();
  let r = e;
  for (; r; ) {
    const { ownNodeConfig: o } = es(r), i = r.transform;
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
      r = s.prototype instanceof it && s !== it ? s : void 0;
    }
  }
  return n;
}
function Pp(e) {
  const n = e || {}, t = NS(), r = n.theme || {}, o = e === void 0 ? t : n.parentEditor || null, i = n.disableEvents || !1, s = Cl(), a = n.namespace || (o !== null ? o._config.namespace : jp()), l = n.editorState, c = [Rr, Wt, Cr, Er, Ar, El, ...n.nodes || []], { onError: u, html: d } = n, f = n.editable === void 0 || n.editable;
  let g;
  if (e === void 0 && t !== null) g = t._nodes;
  else {
    g = /* @__PURE__ */ new Map();
    for (let h = 0; h < c.length; h++) {
      let m = c[h], b = null, y = null;
      if (typeof m != "function") {
        const S = m;
        m = S.replace, b = S.with, y = S.withKlass || null;
      }
      es(m);
      const v = m.getType(), _ = PS(m);
      g.set(v, { exportDOM: d && d.export ? d.export.get(m) : void 0, klass: m, replace: b, replaceWithKlass: y, sharedNodeState: V_(c[h]), transforms: _ });
    }
  }
  const p = new An(s, o, g, { disableEvents: i, namespace: a, theme: r }, u || console.error, (function(h, m) {
    const b = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Set(), v = (_) => {
      Object.keys(_).forEach((S) => {
        let C = b.get(S);
        C === void 0 && (C = [], b.set(S, C)), C.push(_[S]);
      });
    };
    return h.forEach((_) => {
      const S = _.klass.importDOM;
      if (S == null || y.has(S)) return;
      y.add(S);
      const C = S.call(_.klass);
      C !== null && v(C);
    }), m && v(m), b;
  })(g, d ? d.import : void 0), f, e);
  return l !== void 0 && (p._pendingEditorState = l, p._dirtyType = 2), (function(h) {
    h.registerCommand(Kg, iS, ee), h.registerCommand(qg, sS, ee), h.registerCommand(Yg, aS, ee), h.registerCommand(Zg, lS, ee), h.registerCommand(Jg, cS, ee);
  })(p), p;
}
class An {
  constructor(n, t, r, o, i, s, a, l) {
    F(this, "_headless");
    F(this, "_parentEditor");
    F(this, "_rootElement");
    F(this, "_editorState");
    F(this, "_pendingEditorState");
    F(this, "_compositionKey");
    F(this, "_deferred");
    F(this, "_keyToDOMMap");
    F(this, "_updates");
    F(this, "_updating");
    F(this, "_listeners");
    F(this, "_commands");
    F(this, "_nodes");
    F(this, "_decorators");
    F(this, "_pendingDecorators");
    F(this, "_config");
    F(this, "_dirtyType");
    F(this, "_cloneNotNeeded");
    F(this, "_dirtyLeaves");
    F(this, "_dirtyElements");
    F(this, "_normalizedNodes");
    F(this, "_updateTags");
    F(this, "_observer");
    F(this, "_key");
    F(this, "_onError");
    F(this, "_htmlConversions");
    F(this, "_window");
    F(this, "_editable");
    F(this, "_blockCursorElement");
    F(this, "_createEditorArgs");
    this._createEditorArgs = l, this._parentEditor = t, this._rootElement = null, this._editorState = n, this._pendingEditorState = null, this._compositionKey = null, this._deferred = [], this._keyToDOMMap = /* @__PURE__ */ new Map(), this._updates = [], this._updating = !1, this._listeners = { decorator: /* @__PURE__ */ new Set(), editable: /* @__PURE__ */ new Set(), mutation: /* @__PURE__ */ new Map(), root: /* @__PURE__ */ new Set(), textcontent: /* @__PURE__ */ new Set(), update: /* @__PURE__ */ new Set() }, this._commands = /* @__PURE__ */ new Map(), this._config = o, this._nodes = r, this._decorators = {}, this._pendingDecorators = null, this._dirtyType = 0, this._cloneNotNeeded = /* @__PURE__ */ new Set(), this._dirtyLeaves = /* @__PURE__ */ new Set(), this._dirtyElements = /* @__PURE__ */ new Map(), this._normalizedNodes = /* @__PURE__ */ new Set(), this._updateTags = /* @__PURE__ */ new Set(), this._observer = null, this._key = jp(), this._onError = i, this._htmlConversions = s, this._editable = a, this._headless = t !== null && t._headless, this._window = null, this._blockCursorElement = null;
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
    r === void 0 && z(35);
    const o = this._commands;
    o.has(n) || o.set(n, [/* @__PURE__ */ new Set(), /* @__PURE__ */ new Set(), /* @__PURE__ */ new Set(), /* @__PURE__ */ new Set(), /* @__PURE__ */ new Set()]);
    const i = o.get(n);
    i === void 0 && z(36, String(n));
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
    return t === void 0 && z(37, n.name), t;
  }
  resolveRegisteredNodeAfterReplacements(n) {
    for (; n.replaceWithKlass; ) n = this.getRegisteredNode(n.replaceWithKlass);
    return n;
  }
  initializeMutationListener(n, t) {
    const r = this._editorState, o = ku(r).get(t.getType());
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
      const l = ku(s.getEditorState()), c = [];
      for (const u of a) {
        const d = l.get(u);
        d && c.push(d);
      }
      c.length !== 0 && s.update(() => {
        for (const u of c) for (const d of u.keys()) {
          const f = xe(d);
          f && f.markDirty();
        }
      }, s._pendingEditorState === null ? { tag: sr } : void 0);
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
    return H(this, n, t);
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
      const r = ar(this._config.theme, "root"), o = this._pendingEditorState || this._editorState;
      if (this._rootElement = n, Fp(this, t, n, o), t !== null && (this._config.disableEvents || uS(t), r != null && t.classList.remove(...r)), n !== null) {
        const i = Ol(n), s = n.style;
        s.userSelect = "text", s.whiteSpace = "pre-wrap", s.wordBreak = "break-word", n.setAttribute("data-lexical-editor", "true"), this._window = i, this._dirtyType = 2, Dg(this), this._updateTags.add(sr), Dt(this), this._config.disableEvents || (function(a, l) {
          const c = a.ownerDocument;
          Sa.set(a, c);
          const u = di.get(c) ?? 0;
          u < 1 && c.addEventListener("selectionchange", yp), di.set(c, u + 1), a.__lexicalEditor = l;
          const d = mp(a);
          for (let f = 0; f < _a.length; f++) {
            const [g, p] = _a[f], h = typeof p == "function" ? (m) => {
              Qc(m) || (Xc(m), (l.isEditable() || g === "click") && p(m, l));
            } : (m) => {
              if (Qc(m)) return;
              Xc(m);
              const b = l.isEditable();
              switch (g) {
                case "cut":
                  return b && H(l, bl, m);
                case "copy":
                  return H(l, Wi, m);
                case "paste":
                  return b && H(l, hl, m);
                case "dragstart":
                  return b && H(l, lp, m);
                case "dragover":
                  return b && H(l, cp, m);
                case "dragend":
                  return b && H(l, Q_, m);
                case "focus":
                  return b && H(l, nS, m);
                case "blur":
                  return b && H(l, rS, m);
                case "drop":
                  return b && H(l, ap, m);
              }
            };
            a.addEventListener(g, h), d.push(() => {
              a.removeEventListener(g, h);
            });
          }
        })(n, this), r != null && n.classList.add(...r);
      } else this._window = null, this._updateTags.add(sr), Dt(this);
      Kr("root", this, !1, n, t);
    }
  }
  getElementByKey(n) {
    return this._keyToDOMMap.get(n) || null;
  }
  getEditorState() {
    return this._editorState;
  }
  setEditorState(n, t) {
    n.isEmpty() && z(38);
    let r = n;
    r._readOnly && (r = Ap(n), r._selection = n._selection ? n._selection.clone() : null), Mg(this);
    const o = this._pendingEditorState, i = this._updateTags, s = t !== void 0 ? t.tag : null;
    o === null || o.isEmpty() || (s != null && i.add(s), Dt(this)), this._pendingEditorState = r, this._dirtyType = 2, this._dirtyElements.set("root", !1), this._compositionKey = null, s != null && i.add(s), this._updating || Dt(this);
  }
  parseEditorState(n, t) {
    return (function(r, o, i) {
      const s = Cl(), a = Ne, l = je, c = Re, u = o._dirtyElements, d = o._dirtyLeaves, f = o._cloneNotNeeded, g = o._dirtyType;
      o._dirtyElements = /* @__PURE__ */ new Map(), o._dirtyLeaves = /* @__PURE__ */ new Set(), o._cloneNotNeeded = /* @__PURE__ */ new Set(), o._dirtyType = 0, Ne = s, je = !1, Re = o, kl(null);
      try {
        const p = o._nodes;
        _l(r.root, p), i && i(), s._readOnly = !0;
      } catch (p) {
        p instanceof Error && o._onError(p);
      } finally {
        o._dirtyElements = u, o._dirtyLeaves = d, o._cloneNotNeeded = f, o._dirtyType = g, Ne = a, je = l, Re = c;
      }
      return s;
    })(typeof n == "string" ? JSON.parse(n) : n, this, t);
  }
  read(n) {
    return Dt(this), this.getEditorState().read(n, { editor: this });
  }
  update(n, t) {
    (function(r, o, i) {
      r._updating ? r._updates.push([o, i]) : Yi(r, o, i);
    })(this, n, t);
  }
  focus(n, t = {}) {
    const r = this._rootElement;
    r !== null && (r.setAttribute("autocapitalize", "off"), _t(this, () => {
      const o = G(), i = ye();
      o !== null ? o.dirty || Fe(o.clone()) : i.getChildrenSize() !== 0 && (t.defaultSelection === "rootStart" ? i.selectStart() : i.selectEnd()), LS("focus"), zS(() => {
        r.removeAttribute("autocapitalize"), n && n();
      });
    }), this._pendingEditorState === null && r.removeAttribute("autocapitalize"));
  }
  blur() {
    const n = this._rootElement;
    n !== null && n.blur();
    const t = pt(this._window);
    t !== null && t.removeAllRanges();
  }
  isEditable() {
    return this._editable;
  }
  setEditable(n) {
    this._editable !== n && (this._editable = n, Kr("editable", this, !0, n));
  }
  toJSON() {
    return { editorState: this._editorState.toJSON() };
  }
}
F(An, "version");
An.version = "0.39.0+prod.esm";
let Fa = null;
function kl(e) {
  Fa = e;
}
let IS = 1;
function Ip(e, n) {
  const t = Nl(e, n);
  return t === void 0 && z(30, n), t;
}
function Nl(e, n) {
  return e._nodes.get(n);
}
const OS = typeof queueMicrotask == "function" ? queueMicrotask : (e) => {
  Promise.resolve().then(e);
};
function Op(e) {
  return ne(gr(e));
}
function Rl(e) {
  const n = document.activeElement;
  if (!_e(n)) return !1;
  const t = n.nodeName;
  return ne(gr(e)) && (t === "INPUT" || t === "TEXTAREA" || n.contentEditable === "true" && Zi(n) == null);
}
function ho(e, n, t) {
  const r = e.getRootElement();
  try {
    return r !== null && r.contains(n) && r.contains(t) && n !== null && !Rl(n) && $p(n) === e;
  } catch {
    return !1;
  }
}
function Al(e) {
  return e instanceof An;
}
function $p(e) {
  let n = e;
  for (; n != null; ) {
    const t = Zi(n);
    if (Al(t)) return t;
    n = mo(n);
  }
  return null;
}
function Zi(e) {
  return e ? e.__lexicalEditor : null;
}
function _n(e) {
  return Hi(e) || e.isToken();
}
function $t(e) {
  return _n(e) || e.isSegmented();
}
function Ht(e) {
  return Tr(e) && e.nodeType === 3;
}
function Mp(e) {
  return Tr(e) && e.nodeType === 9;
}
function fr(e) {
  let n = e;
  for (; n != null; ) {
    if (Ht(n)) return n;
    n = n.firstChild;
  }
  return null;
}
function yi(e, n, t) {
  const r = kn[n];
  if (t !== null && (e & r) === (t & r)) return e;
  let o = e ^ r;
  return n === "subscript" ? o &= -65 : n === "superscript" ? o &= -33 : n === "lowercase" ? (o &= -513, o &= -1025) : n === "uppercase" ? (o &= -257, o &= -1025) : n === "capitalize" && (o &= -257, o &= -513), o;
}
function Dp(e) {
  return V(e) || Qt(e) || ne(e);
}
function $S(e, n) {
  const t = (function() {
    const s = Fa;
    return Fa = null, s;
  })();
  if ((n = n || t && t.__key) != null) return void (e.__key = n);
  ke(), kp();
  const r = le(), o = un(), i = "" + IS++;
  o._nodeMap.set(i, e), P(e) ? r._dirtyElements.set(i, !0) : r._dirtyLeaves.add(i), r._cloneNotNeeded.add(i), r._dirtyType = 1, e.__key = i;
}
function Sn(e) {
  const n = e.getParent();
  if (n !== null) {
    const t = e.getWritable(), r = n.getWritable(), o = e.getPreviousSibling(), i = e.getNextSibling(), s = i !== null ? i.__key : null, a = o !== null ? o.__key : null, l = o !== null ? o.getWritable() : null, c = i !== null ? i.getWritable() : null;
    o === null && (r.__first = s), i === null && (r.__last = a), l !== null && (l.__next = s), c !== null && (c.__prev = a), t.__prev = null, t.__next = null, t.__parent = null, r.__size--;
  }
}
function bi(e) {
  kp(), gi(e) && z(323, e.__key, e.__type);
  const n = e.getLatest(), t = n.__parent, r = un(), o = le(), i = r._nodeMap, s = o._dirtyElements;
  t !== null && (function(l, c, u) {
    let d = l;
    for (; d !== null; ) {
      if (u.has(d)) return;
      const f = c.get(d);
      if (f === void 0) break;
      u.set(d, !1), d = f.__parent;
    }
  })(t, i, s);
  const a = n.__key;
  o._dirtyType = 1, P(e) ? s.set(a, !0) : o._dirtyLeaves.add(a);
}
function Ae(e) {
  ke();
  const n = le(), t = n._compositionKey;
  if (e !== t) {
    if (n._compositionKey = e, t !== null) {
      const r = xe(t);
      r !== null && r.getWritable();
    }
    if (e !== null) {
      const r = xe(e);
      r !== null && r.getWritable();
    }
  }
}
function Jt() {
  return fo() ? null : le()._compositionKey;
}
function xe(e, n) {
  const t = (n || un())._nodeMap.get(e);
  return t === void 0 ? null : t;
}
function Lp(e, n) {
  const t = Ji(e, le());
  return t !== void 0 ? xe(t, n) : null;
}
function Ji(e, n) {
  return e[`__lexicalKey_${n._key}`];
}
function gr(e, n) {
  let t = e;
  for (; t != null; ) {
    const r = Lp(t, n);
    if (r !== null) return r;
    t = mo(t);
  }
  return null;
}
function zp(e) {
  const n = e._decorators, t = Object.assign({}, n);
  return e._pendingDecorators = t, t;
}
function vu(e) {
  return e.read(() => ye().getTextContent());
}
function ye() {
  return Bp(un());
}
function Bp(e) {
  return e._nodeMap.get("root");
}
function Fe(e) {
  ke();
  const n = un();
  e !== null && (e.dirty = !0, e.setCachedNodes(null)), n._selection = e;
}
function tr(e) {
  const n = le(), t = (function(r, o) {
    let i = r;
    for (; i != null; ) {
      const s = Ji(i, o);
      if (s !== void 0) return s;
      i = mo(i);
    }
    return null;
  })(e, n);
  return t === null ? e === n.getRootElement() ? xe("root") : null : xe(t);
}
function Vp(e) {
  return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(e);
}
function Tl(e) {
  const n = [];
  let t = e;
  for (; t !== null; ) n.push(t), t = t._parentEditor;
  return n;
}
function jp() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substring(0, 5);
}
function Up(e) {
  return Ht(e) ? e.nodeValue : null;
}
function Fl(e, n, t) {
  const r = pt(et(n));
  if (r === null) return;
  const o = r.anchorNode;
  let { anchorOffset: i, focusOffset: s } = r;
  if (o !== null) {
    let a = Up(o);
    const l = gr(o);
    if (a !== null && V(l)) {
      if (a === Ui && t) {
        const c = t.length;
        a = t, i = c, s = c;
      }
      a !== null && Pl(l, a, i, s, e);
    }
  }
}
function Pl(e, n, t, r, o) {
  let i = e;
  if (i.isAttached() && (o || !i.isDirty())) {
    const s = i.isComposing();
    let a = n;
    (s || o) && n[n.length - 1] === Ui && (a = n.slice(0, -1));
    const l = i.getTextContent();
    if (o || a !== l) {
      if (a === "") {
        if (Ae(null), co || Sr || uo) i.remove();
        else {
          const h = le();
          setTimeout(() => {
            h.update(() => {
              i.isAttached() && i.remove();
            });
          }, 20);
        }
        return;
      }
      const c = i.getParent(), u = Nr(), d = i.getTextContentSize(), f = Jt(), g = i.getKey();
      if (i.isToken() || f !== null && g === f && !s || L(u) && (c !== null && !c.canInsertTextBefore() && u.anchor.offset === 0 || u.anchor.key === e.__key && u.anchor.offset === 0 && !i.canInsertTextBefore() && !s || u.focus.key === e.__key && u.focus.offset === d && !i.canInsertTextAfter() && !s)) return void i.markDirty();
      const p = G();
      if (!L(p) || t === null || r === null) return void xu(i, a, p);
      if (p.setTextNodeRange(i, t, i, r), i.isSegmented()) {
        const h = be(i.getTextContent());
        i.replace(h), i = h;
      }
      xu(i, a, p);
    }
  }
}
function xu(e, n, t) {
  if (e.setTextContent(n), L(t)) {
    const r = e.getKey();
    for (const o of ["anchor", "focus"]) {
      const i = t[o];
      i.type === "text" && i.key === r && (i.offset = tn(e, i.offset, "clamp"));
    }
  }
}
function To(e, n, t) {
  const r = n[t] || !1;
  return r === "any" || r === e[t];
}
function MS(e, n) {
  return To(e, n, "altKey") && To(e, n, "ctrlKey") && To(e, n, "shiftKey") && To(e, n, "metaKey");
}
function ae(e, n, t) {
  return MS(e, t) && e.key.toLowerCase() === n.toLowerCase();
}
const It = { ctrlKey: !nt, metaKey: nt }, wu = { altKey: nt, ctrlKey: !nt };
function _u(e) {
  return e.key === "Backspace";
}
function Su(e) {
  return ae(e, "a", It);
}
function DS(e) {
  const n = ye();
  if (L(e)) {
    const t = e.anchor, r = e.focus, o = t.getNode().getTopLevelElementOrThrow().getParentOrThrow();
    return t.set(o.getKey(), 0, "element"), r.set(o.getKey(), o.getChildrenSize(), "element"), ii(e), e;
  }
  {
    const t = n.select(0, n.getChildrenSize());
    return Fe(ii(t)), t;
  }
}
function ar(e, n) {
  e.__lexicalClassNameCache === void 0 && (e.__lexicalClassNameCache = {});
  const t = e.__lexicalClassNameCache, r = t[n];
  if (r !== void 0) return r;
  const o = e[n];
  if (typeof o == "string") {
    const i = Pg(o);
    return t[n] = i, i;
  }
  return o;
}
function Il(e, n, t, r, o) {
  if (t.size === 0) return;
  const i = r.__type, s = r.__key, a = n.get(i);
  a === void 0 && z(33, i);
  const l = a.klass;
  let c = e.get(l);
  c === void 0 && (c = /* @__PURE__ */ new Map(), e.set(l, c));
  const u = c.get(s), d = u === "destroyed" && o === "created";
  (u === void 0 || d) && c.set(s, d ? "updated" : o);
}
function Cu(e, n, t) {
  const r = e.getParent();
  let o = t, i = e;
  return r !== null && (n && t === 0 ? (o = i.getIndexWithinParent(), i = r) : n || t !== i.getChildrenSize() || (o = i.getIndexWithinParent() + 1, i = r)), i.getChildAtIndex(n ? o - 1 : o);
}
function Pa(e, n) {
  const t = e.offset;
  if (e.type === "element")
    return Cu(e.getNode(), n, t);
  {
    const r = e.getNode();
    if (n && t === 0 || !n && t === r.getTextContentSize()) {
      const o = n ? r.getPreviousSibling() : r.getNextSibling();
      return o === null ? Cu(r.getParentOrThrow(), n, r.getIndexWithinParent() + (n ? 0 : 1)) : o;
    }
  }
  return null;
}
function Gp(e) {
  const n = et(e).event, t = n && n.inputType;
  return t === "insertFromPaste" || t === "insertFromPasteAsQuotation";
}
function H(e, n, t) {
  return (function(r, o, i) {
    const s = Tl(r);
    for (let a = 4; a >= 0; a--) for (let l = 0; l < s.length; l++) {
      const c = s[l], u = c._commands.get(o);
      if (u !== void 0) {
        const d = u[a];
        if (d !== void 0) {
          const f = Array.from(d), g = f.length;
          let p = !1;
          if (_t(c, () => {
            for (let h = 0; h < g; h++) if (f[h](i, r)) return void (p = !0);
          }), p) return p;
        }
      }
    }
    return !1;
  })(e, n, t);
}
function Xi(e) {
  return !we(e) && !e.isLastChild() && !e.isInline();
}
function Tn(e, n) {
  const t = e._keyToDOMMap.get(n);
  return t === void 0 && z(75, n), t;
}
function mo(e) {
  const n = e.assignedSlot || e.parentElement;
  return $a(n) ? n.host : n;
}
function Wp(e) {
  return Mp(e) ? e : _e(e) ? e.ownerDocument : null;
}
function LS(e) {
  ke(), le()._updateTags.add(e);
}
function zS(e) {
  ke(), le()._deferred.push(e);
}
function Ia(e, n) {
  let t = e.getParent();
  for (; t !== null; ) {
    if (t.is(n)) return !0;
    t = t.getParent();
  }
  return !1;
}
function Ol(e) {
  const n = Wp(e);
  return n ? n.defaultView : null;
}
function et(e) {
  const n = e._window;
  return n === null && z(78), n;
}
function BS(e) {
  let n = e.getParentOrThrow();
  for (; n !== null; ) {
    if (Me(n)) return n;
    n = n.getParentOrThrow();
  }
  return n;
}
function Me(e) {
  return we(e) || P(e) && e.isShadowRoot();
}
function tt(e) {
  const n = le(), t = e.getType(), r = Nl(n, t);
  r === void 0 && z(200, e.constructor.name, t);
  const { replace: o, replaceWithKlass: i } = r;
  if (o !== null) {
    const s = o(e), a = s.constructor;
    return i !== null ? s instanceof i || z(201, i.name, i.getType(), a.name, a.getType(), e.constructor.name, t) : s instanceof e.constructor && a !== e.constructor || z(202, a.name, a.getType(), e.constructor.name, t), s.__key === e.__key && z(203, e.constructor.name, t, a.name, a.getType()), s;
  }
  return e;
}
function Ms(e, n) {
  !we(e.getParent()) || P(n) || ne(n) || z(99);
}
function VS(e) {
  const n = xe(e);
  return n === null && z(63, e), n;
}
function Ds(e) {
  return (ne(e) || P(e) && !e.canBeEmpty()) && !e.isInline();
}
function Oa(e, n, t) {
  t.style.removeProperty("caret-color"), n._blockCursorElement = null;
  const r = e.parentElement;
  r !== null && r.removeChild(e);
}
function pt(e) {
  return gt ? (e || window).getSelection() : null;
}
function jS(e) {
  const n = Ol(e);
  return n ? n.getSelection() : null;
}
function Hp(e) {
  return _e(e) && e.tagName === "A";
}
function _e(e) {
  return Tr(e) && e.nodeType === 1;
}
function Tr(e) {
  return typeof e == "object" && e !== null && "nodeType" in e && typeof e.nodeType == "number";
}
function $a(e) {
  return Tr(e) && e.nodeType === 11;
}
function Ma(e) {
  const n = new RegExp(/^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|mark|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var|#text)$/, "i");
  return e.nodeName.match(n) !== null;
}
function vi(e) {
  const n = new RegExp(/^(address|article|aside|blockquote|canvas|dd|div|dl|dt|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hr|li|main|nav|noscript|ol|p|pre|section|table|td|tfoot|ul|video)$/, "i");
  return e.nodeName.match(n) !== null;
}
function Je(e) {
  if (ne(e) && !e.isInline()) return !0;
  if (!P(e) || Me(e)) return !1;
  const n = e.getFirstChild(), t = n === null || Qt(n) || V(n) || n.isInline();
  return !e.isInline() && e.canBeEmpty() !== !1 && t;
}
function Qi() {
  return le();
}
const Eu = /* @__PURE__ */ new WeakMap(), US = /* @__PURE__ */ new Map();
function ku(e) {
  if (!e._readOnly && e.isEmpty()) return US;
  e._readOnly || z(192);
  let n = Eu.get(e);
  return n || (n = (function(t) {
    const r = /* @__PURE__ */ new Map();
    for (const [o, i] of t._nodeMap) {
      const s = i.__type;
      let a = r.get(s);
      a || (a = /* @__PURE__ */ new Map(), r.set(s, a)), a.set(o, i);
    }
    return r;
  })(e), Eu.set(e, n)), n;
}
function Kp(e) {
  const n = e.constructor.clone(e);
  return n.afterCloneFrom(e), n;
}
function GS(e) {
  return (n = Kp(e))[bp] = !0, n;
  var n;
}
function $l(e, n) {
  const t = parseInt(e.style.paddingInlineStart, 10) || 0, r = Math.round(t / 40);
  n.setIndent(r);
}
function WS(e) {
  return e.__lexicalUnmanaged === !0;
}
function Lr(e, n) {
  return (function(t, r) {
    return Object.prototype.hasOwnProperty.call(t, r);
  })(e, n) && e[n] !== it[n];
}
function es(e) {
  const n = zc in e.prototype ? e.prototype[zc]() : void 0, t = (function(s) {
    if (!(s === it || s.prototype instanceof it)) {
      let a = "<unknown>", l = "<unknown>";
      try {
        a = s.getType();
      } catch {
      }
      try {
        An.version && (l = JSON.parse(An.version));
      } catch {
      }
      z(290, s.name, a, l);
    }
    return s === Sl || s === Ye || s === it;
  })(e), r = !t && Lr(e, "getType") ? e.getType() : void 0;
  let o, i = r;
  if (n) if (r) o = n[r];
  else for (const [s, a] of Object.entries(n)) i = s, o = a;
  if (!t && i && (Lr(e, "getType") || (e.getType = () => i), Lr(e, "clone") || (e.clone = (s) => (kl(s), new e())), Lr(e, "importJSON") || (e.importJSON = o && o.$importJSON || ((s) => new e().updateFromJSON(s))), !Lr(e, "importDOM") && o)) {
    const { importDOM: s } = o;
    s && (e.importDOM = () => s);
  }
  return { ownNodeConfig: o, ownNodeType: i };
}
function qp(e) {
  const n = Qi();
  return ke(), new (n.resolveRegisteredNodeAfterReplacements(n.getRegisteredNode(e))).klass();
}
const Qe = (e, n) => {
  let t = e;
  for (; t != null && !we(t); ) {
    if (n(t)) return t;
    t = t.getParent();
  }
  return null;
}, HS = { next: "previous", previous: "next" };
class Ml {
  constructor(n) {
    F(this, "origin");
    this.origin = n;
  }
  [Symbol.iterator]() {
    return Yp({ hasNext: pr, initial: this.getAdjacentCaret(), map: (n) => n, step: (n) => n.getAdjacentCaret() });
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
      const c = l.origin.getWritable();
      a.set(c.getKey(), c);
    }
    for (const l of o) {
      if (a.size > 0) {
        const c = i.getNodeAtCaret();
        if (c) {
          if (a.delete(c.getKey()), a.delete(l.getKey()), !(c.is(l) || i.origin.is(l))) {
            const u = l.getParent();
            u && u.is(s) && l.remove(), c.replace(l);
          }
        } else c === null && z(263, Array.from(a).join(" "));
      } else i.insert(l);
      i = Te(l, this.direction);
    }
    for (const l of a.values()) l.remove();
    return this;
  }
}
class ro extends Ml {
  constructor() {
    super(...arguments);
    F(this, "type", "child");
  }
  getLatest() {
    const t = this.origin.getLatest();
    return t === this.origin ? this : lt(t, this.direction);
  }
  getParentCaret(t = "root") {
    return Te(Dl(this.getParentAtCaret(), t), this.direction);
  }
  getFlipped() {
    const t = Fr(this.direction);
    return Te(this.getNodeAtCaret(), t) || lt(this.origin, t);
  }
  getParentAtCaret() {
    return this.origin;
  }
  getChildCaret() {
    return this;
  }
  isSameNodeCaret(t) {
    return t instanceof ro && this.direction === t.direction && this.origin.is(t.origin);
  }
  isSamePointCaret(t) {
    return this.isSameNodeCaret(t);
  }
}
const KS = { root: we, shadowRoot: Me };
function Fr(e) {
  return HS[e];
}
function Dl(e, n = "root") {
  return KS[n](e) ? null : e;
}
class Fn extends Ml {
  constructor() {
    super(...arguments);
    F(this, "type", "sibling");
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
    return P(this.origin) ? lt(this.origin, this.direction) : null;
  }
  getParentCaret(t = "root") {
    return Te(Dl(this.getParentAtCaret(), t), this.direction);
  }
  getFlipped() {
    const t = Fr(this.direction);
    return Te(this.getNodeAtCaret(), t) || lt(this.origin.getParentOrThrow(), t);
  }
  isSamePointCaret(t) {
    return t instanceof Fn && this.direction === t.direction && this.origin.is(t.origin);
  }
  isSameNodeCaret(t) {
    return (t instanceof Fn || t instanceof Pn) && this.direction === t.direction && this.origin.is(t.origin);
  }
}
class Pn extends Ml {
  constructor(t, r) {
    super(t);
    F(this, "type", "text");
    F(this, "offset");
    this.offset = r;
  }
  getLatest() {
    const t = this.origin.getLatest();
    return t === this.origin ? this : In(t, this.direction, this.offset);
  }
  getParentAtCaret() {
    return this.origin.getParent();
  }
  getChildCaret() {
    return null;
  }
  getParentCaret(t = "root") {
    return Te(Dl(this.getParentAtCaret(), t), this.direction);
  }
  getFlipped() {
    return In(this.origin, Fr(this.direction), this.offset);
  }
  isSamePointCaret(t) {
    return t instanceof Pn && this.direction === t.direction && this.origin.is(t.origin) && this.offset === t.offset;
  }
  isSameNodeCaret(t) {
    return (t instanceof Fn || t instanceof Pn) && this.direction === t.direction && this.origin.is(t.origin);
  }
  getSiblingCaret() {
    return Te(this.origin, this.direction);
  }
}
function en(e) {
  return e instanceof Pn;
}
function pr(e) {
  return e instanceof Fn;
}
function St(e) {
  return e instanceof ro;
}
const qS = { next: class extends Pn {
  constructor() {
    super(...arguments);
    F(this, "direction", "next");
  }
  getNodeAtCaret() {
    return this.origin.getNextSibling();
  }
  insert(n) {
    return this.origin.insertAfter(n), this;
  }
}, previous: class extends Pn {
  constructor() {
    super(...arguments);
    F(this, "direction", "previous");
  }
  getNodeAtCaret() {
    return this.origin.getPreviousSibling();
  }
  insert(n) {
    return this.origin.insertBefore(n), this;
  }
} }, YS = { next: class extends Fn {
  constructor() {
    super(...arguments);
    F(this, "direction", "next");
  }
  getNodeAtCaret() {
    return this.origin.getNextSibling();
  }
  insert(n) {
    return this.origin.insertAfter(n), this;
  }
}, previous: class extends Fn {
  constructor() {
    super(...arguments);
    F(this, "direction", "previous");
  }
  getNodeAtCaret() {
    return this.origin.getPreviousSibling();
  }
  insert(n) {
    return this.origin.insertBefore(n), this;
  }
} }, ZS = { next: class extends ro {
  constructor() {
    super(...arguments);
    F(this, "direction", "next");
  }
  getNodeAtCaret() {
    return this.origin.getFirstChild();
  }
  insert(n) {
    return this.origin.splice(0, 0, [n]), this;
  }
}, previous: class extends ro {
  constructor() {
    super(...arguments);
    F(this, "direction", "previous");
  }
  getNodeAtCaret() {
    return this.origin.getLastChild();
  }
  insert(n) {
    return this.origin.splice(this.origin.getChildrenSize(), 0, [n]), this;
  }
} };
function Te(e, n) {
  return e ? new YS[n](e) : null;
}
function In(e, n, t) {
  return e ? new qS[n](e, tn(e, t)) : null;
}
function tn(e, n, t = "error") {
  const r = e.getTextContentSize();
  let o = n === "next" ? r : n === "previous" ? 0 : n;
  return (o < 0 || o > r) && (t !== "clamp" && Tg(284, String(n), String(r), e.getKey()), o = o < 0 ? 0 : r), o;
}
function Nu(e, n) {
  return new XS(e, n);
}
function lt(e, n) {
  return P(e) ? new ZS[n](e) : null;
}
function JS(e) {
  return e && e.getChildCaret() || e;
}
function Ll(e) {
  return e && JS(e.getAdjacentCaret());
}
class zl {
  constructor(n, t, r) {
    F(this, "type", "node-caret-range");
    F(this, "direction");
    F(this, "anchor");
    F(this, "focus");
    this.anchor = n, this.focus = t, this.direction = r;
  }
  getLatest() {
    const n = this.anchor.getLatest(), t = this.focus.getLatest();
    return n === this.anchor && t === this.focus ? this : new zl(n, t, this.direction);
  }
  isCollapsed() {
    return this.anchor.isSamePointCaret(this.focus);
  }
  getTextSlices() {
    const n = (o) => {
      const i = this[o].getLatest();
      return en(i) ? (function(s, a) {
        const { direction: l, origin: c } = s, u = tn(c, a === "focus" ? Fr(l) : l);
        return Nu(s, u - s.offset);
      })(i, o) : null;
    }, t = n("anchor"), r = n("focus");
    if (t && r) {
      const { caret: o } = t, { caret: i } = r;
      if (o.isSameNodeCaret(i)) return [Nu(o, i.offset - o.offset), null];
    }
    return [t, r];
  }
  iterNodeCarets(n = "root") {
    const t = en(this.anchor) ? this.anchor.getSiblingCaret() : this.anchor.getLatest(), r = this.focus.getLatest(), o = en(r), i = (s) => s.isSameNodeCaret(r) ? null : Ll(s) || s.getParentCaret(n);
    return Yp({ hasNext: (s) => s !== null && !(o && r.isSameNodeCaret(s)), initial: t.isSameNodeCaret(r) ? null : i(t), map: (s) => s, step: i });
  }
  [Symbol.iterator]() {
    return this.iterNodeCarets("root");
  }
}
class XS {
  constructor(n, t) {
    F(this, "type", "slice");
    F(this, "caret");
    F(this, "distance");
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
    return In(n.setTextContent(i.slice(0, r) + i.slice(o)), t, r);
  }
}
function Bl(e) {
  return an(e, Te(ye(), e.direction));
}
function QS(e) {
  return an(e, e);
}
function an(e, n) {
  return e.direction !== n.direction && z(265), new zl(e, n, e.direction);
}
function Yp(e) {
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
function Zp(e, n) {
  const t = Wo(e.origin, n.origin);
  switch (t === null && z(275, e.origin.getKey(), n.origin.getKey()), t.type) {
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
      return Jp(t);
  }
}
function Jp(e) {
  const { a: n, b: t } = e, r = n.__key, o = t.__key;
  let i = n, s = t;
  for (; i && s; i = i.getNextSibling(), s = s.getNextSibling()) {
    if (i.__key === o) return -1;
    if (s.__key === r) return 1;
  }
  return i === null ? 1 : -1;
}
function Fo(e, n) {
  return n.is(e);
}
function Ru(e) {
  return P(e) ? [e.getLatest(), null] : [e.getParent(), e.getLatest()];
}
function Wo(e, n) {
  if (e.is(n)) return { commonAncestor: e, type: "same" };
  const t = /* @__PURE__ */ new Map();
  for (let [r, o] = Ru(e); r; o = r, r = r.getParent()) t.set(r, o);
  for (let [r, o] = Ru(n); r; o = r, r = r.getParent()) {
    const i = t.get(r);
    if (i !== void 0) return i === null ? (Fo(e, r) || z(276), { commonAncestor: r, type: "ancestor" }) : o === null ? (Fo(n, r) || z(277), { commonAncestor: r, type: "descendant" }) : ((P(i) || Fo(e, i)) && (P(o) || Fo(n, o)) && r.is(i.getParent()) && r.is(o.getParent()) || z(278), { a: i, b: o, commonAncestor: r, type: "branch" });
  }
  return null;
}
function Bt(e, n) {
  const { type: t, key: r, offset: o } = e, i = VS(e.key);
  return t === "text" ? (V(i) || z(266, i.getType(), r), In(i, n, o)) : (P(i) || z(267, i.getType(), r), nC(i, e.offset, n));
}
function On(e, n) {
  const { origin: t, direction: r } = n, o = r === "next";
  en(n) ? e.set(t.getKey(), n.offset, "text") : pr(n) ? V(t) ? e.set(t.getKey(), tn(t, r), "text") : e.set(t.getParentOrThrow().getKey(), t.getIndexWithinParent() + (o ? 1 : 0), "element") : (St(n) && P(t) || z(268), e.set(t.getKey(), o ? 0 : t.getChildrenSize(), "element"));
}
function eC(e) {
  const n = G(), t = L(n) ? n : qi();
  return Ho(t, e), Fe(t), t;
}
function Ho(e, n) {
  On(e.anchor, n.anchor), On(e.focus, n.focus);
}
function Au(e) {
  const { anchor: n, focus: t } = e, r = Bt(n, "next"), o = Bt(t, "next"), i = Zp(r, o) <= 0 ? "next" : "previous";
  return an(hr(r, i), hr(o, i));
}
function Vl(e) {
  const { direction: n, origin: t } = e, r = Te(t, Fr(n)).getNodeAtCaret();
  return r ? Te(r, n) : lt(t.getParentOrThrow(), n);
}
function Tu(e, n = "root") {
  const t = [e];
  for (let r = St(e) ? e.getParentCaret(n) : e.getSiblingCaret(); r !== null; r = r.getParentCaret(n)) t.push(Vl(r));
  return t;
}
function Ls(e) {
  return !!e && e.origin.isAttached();
}
function tC(e, n = "removeEmptySlices") {
  if (e.isCollapsed()) return e;
  const t = "root", r = "next";
  let o = n;
  const i = Qp(e, r), s = Tu(i.anchor, t), a = Tu(i.focus.getFlipped(), t), l = /* @__PURE__ */ new Set(), c = [];
  for (const p of i.iterNodeCarets(t)) if (St(p)) l.add(p.origin.getKey());
  else if (pr(p)) {
    const { origin: h } = p;
    P(h) && !l.has(h.getKey()) || c.push(h);
  }
  for (const p of c) p.remove();
  for (const p of i.getTextSlices()) {
    if (!p) continue;
    const { origin: h } = p.caret, m = h.getTextContentSize(), b = Vl(Te(h, r)), y = h.getMode();
    if (Math.abs(p.distance) === m && o === "removeEmptySlices" || y === "token" && p.distance !== 0) b.remove();
    else if (p.distance !== 0) {
      o = "removeEmptySlices";
      let v = p.removeTextSlice();
      const _ = p.caret.origin;
      if (y === "segmented") {
        const S = v.origin, C = be(S.getTextContent()).setStyle(S.getStyle()).setFormat(S.getFormat());
        b.replaceOrInsert(C), v = In(C, r, v.offset);
      }
      _.is(s[0].origin) && (s[0] = v), _.is(a[0].origin) && (a[0] = v.getFlipped());
    }
  }
  let u, d;
  for (const p of s) if (Ls(p)) {
    u = Xe(p);
    break;
  }
  for (const p of a) if (Ls(p)) {
    d = Xe(p);
    break;
  }
  const f = (function(p, h, m) {
    if (!p || !h) return null;
    const b = p.getParentAtCaret(), y = h.getParentAtCaret();
    if (!b || !y) return null;
    const v = b.getParents().reverse();
    v.push(b);
    const _ = y.getParents().reverse();
    _.push(y);
    const S = Math.min(v.length, _.length);
    let C;
    for (C = 0; C < S && v[C] === _[C]; C++) ;
    const E = (R, A) => {
      let T;
      for (let D = C; D < R.length; D++) {
        const O = R[D];
        if (Me(O)) return;
        !T && A(O) && (T = O);
      }
      return T;
    }, N = E(v, Je), k = N && E(_, (R) => m.has(R.getKey()) && Je(R));
    return N && k ? [N, k] : null;
  })(u, d, l);
  if (f) {
    const [p, h] = f;
    lt(p, "previous").splice(0, h.getChildren()), h.remove();
  }
  const g = [u, d, ...s, ...a].find(Ls);
  if (g)
    return QS(hr(Xe(g), e.direction));
  z(269, JSON.stringify(s.map((p) => p.origin.__key)));
}
function Xe(e) {
  const n = (function(o) {
    let i = o;
    for (; St(i); ) {
      const s = Ll(i);
      if (!St(s)) break;
      i = s;
    }
    return i;
  })(e.getLatest()), { direction: t } = n;
  if (V(n.origin)) return en(n) ? n : In(n.origin, t, t);
  const r = n.getAdjacentCaret();
  return pr(r) && V(r.origin) ? In(r.origin, t, Fr(t)) : n;
}
function Xp(e) {
  return en(e) && e.offset !== tn(e.origin, e.direction);
}
function hr(e, n) {
  return e.direction === n ? e : e.getFlipped();
}
function Qp(e, n) {
  return e.direction === n ? e : an(hr(e.focus, n), hr(e.anchor, n));
}
function nC(e, n, t) {
  let r = lt(e, "next");
  for (let o = 0; o < n; o++) {
    const i = r.getAdjacentCaret();
    if (i === null) break;
    r = i;
  }
  return hr(r, t);
}
function rC(...e) {
  return e;
}
function oC(e, n) {
  if (!n || e === n) return e;
  for (const t in n) if (e[t] !== n[t]) return { ...e, ...n };
  return e;
}
const eh = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, iC = eh ? xr : He, Po = { tag: sr };
function sC({ initialConfig: e, children: n }) {
  const t = vr(() => {
    const { theme: r, namespace: o, nodes: i, onError: s, editorState: a, html: l } = e, c = b_(null, r), u = Pp({ editable: e.editable, html: l, namespace: o, nodes: i, onError: (d) => s(d, u), theme: r });
    return (function(d, f) {
      if (f !== null) {
        if (f === void 0) d.update(() => {
          const g = ye();
          if (g.isEmpty()) {
            const p = me();
            g.append(p);
            const h = eh ? document.activeElement : null;
            (G() !== null || h !== null && h === d.getRootElement()) && p.select();
          }
        }, Po);
        else if (f !== null) switch (typeof f) {
          case "string": {
            const g = d.parseEditorState(f);
            d.setEditorState(g, Po);
            break;
          }
          case "object":
            d.setEditorState(f, Po);
            break;
          case "function":
            d.update(() => {
              ye().isEmpty() && f(d);
            }, Po);
        }
      }
    })(u, a), [u, c];
  }, []);
  return iC(() => {
    const r = e.editable, [o] = t;
    o.setEditable(r === void 0 || r);
  }, []), w(Ag.Provider, { value: t, children: n });
}
const aC = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? xr : He;
function lC(e) {
  return { initialValueFn: () => e.isEditable(), subscribe: (n) => e.registerEditableListener(n) };
}
function cC() {
  return (function(e) {
    const [n] = ft(), t = vr(() => e(n), [n, e]), [r, o] = rn(() => t.initialValueFn()), i = Vy(r);
    return aC(() => {
      const { initialValueFn: s, subscribe: a } = t, l = s();
      return i.current !== l && (i.current = l, o(l)), a((c) => {
        i.current = c, o(c);
      });
    }, [t, e]), r;
  })(lC);
}
const Da = /* @__PURE__ */ new Map();
function th(e) {
  const n = {};
  if (!e) return n;
  const t = e.split(";");
  for (const r of t) if (r !== "") {
    const [o, i] = r.split(/:([^]+)/);
    o && i && (n[o.trim()] = i.trim());
  }
  return n;
}
function Fu(e) {
  let n = Da.get(e);
  return n === void 0 && (n = th(e), Da.set(e, n)), n;
}
function nh(e) {
  const n = Qi().getElementByKey(e.getKey());
  if (n === null) return null;
  const t = n.ownerDocument.defaultView;
  return t === null ? null : t.getComputedStyle(n);
}
function rh(e) {
  return nh(we(e) ? e : e.getParentOrThrow());
}
function Pu(e) {
  const n = rh(e);
  return n !== null && n.direction === "rtl";
}
function oh(e, n, t = "self") {
  const r = e.getStartEndPoints();
  if (n.isSelected(e) && !$t(n) && r !== null) {
    const [o, i] = r, s = e.isBackward(), a = o.getNode(), l = i.getNode(), c = n.is(a), u = n.is(l);
    if (c || u) {
      const [d, f] = Aa(e), g = a.is(l), p = n.is(s ? l : a), h = n.is(s ? a : l);
      let m, b = 0;
      g ? (b = d > f ? f : d, m = d > f ? d : f) : p ? (b = s ? f : d, m = void 0) : h && (b = 0, m = s ? d : f);
      const y = n.__text.slice(b, m);
      y !== n.__text && (t === "clone" && (n = GS(n)), n.__text = y);
    }
  }
  return n;
}
function uC(e) {
  const n = e.getStyle(), t = th(n);
  Da.set(n, t);
}
function dC(e, n) {
  const t = e.getFormatType(), r = e.getIndent();
  t !== n.getFormatType() && n.setFormat(t), r !== n.getIndent() && n.setIndent(r);
}
function Iu(e, n, t = dC) {
  if (e === null) return;
  const r = e.getStartEndPoints(), o = /* @__PURE__ */ new Map();
  let i = null;
  if (r) {
    const [s, a] = r;
    i = qi(), i.anchor.set(s.key, s.offset, s.type), i.focus.set(a.key, a.offset, a.type);
    const l = Qe(s.getNode(), Je), c = Qe(a.getNode(), Je);
    P(l) && o.set(l.getKey(), l), P(c) && o.set(c.getKey(), c);
  }
  for (const s of e.getNodes()) if (P(s) && Je(s)) o.set(s.getKey(), s);
  else if (r === null) {
    const a = Qe(s, Je);
    P(a) && o.set(a.getKey(), a);
  }
  for (const [s, a] of o) {
    const l = n();
    t(a, l), a.replace(l, !0), i && (s === i.anchor.key && i.anchor.set(l.getKey(), i.anchor.offset, i.anchor.type), s === i.focus.key && i.focus.set(l.getKey(), i.focus.offset, i.focus.type));
  }
  i && e.is(G()) && Fe(i);
}
function ih(e) {
  const n = sh(e);
  return n !== null && n.writingMode === "vertical-rl";
}
function sh(e) {
  const n = e.anchor.getNode();
  return P(n) ? nh(n) : rh(n);
}
function Ou(e, n) {
  let t = ih(e) ? !n : n;
  ah(e) && (t = !t);
  const r = Bt(e.focus, t ? "previous" : "next");
  if (Xp(r)) return !1;
  for (const o of Bl(r)) {
    if (St(o)) return !o.origin.isInline();
    if (!P(o.origin)) {
      if (ne(o.origin)) return !0;
      break;
    }
  }
  return !1;
}
function fC(e, n, t, r) {
  e.modify(n ? "extend" : "move", t, r);
}
function ah(e) {
  const n = sh(e);
  return n !== null && n.direction === "rtl";
}
function $u(e, n, t) {
  const r = ah(e);
  let o;
  o = ih(e) || r ? !t : t, fC(e, n, o, "character");
}
function gC(e, ...n) {
  const t = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", e);
  for (const o of n) r.append("v", o);
  throw t.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
const lh = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, pC = lh && "documentMode" in document ? document.documentMode : null;
!(!lh || !("InputEvent" in window) || pC) && "getTargetRanges" in new window.InputEvent("input");
function ch(...e) {
  const n = [];
  for (const t of e) if (t && typeof t == "string") for (const [r] of t.matchAll(/\S+/g)) n.push(r);
  return n;
}
function Vt(...e) {
  return () => {
    for (let n = e.length - 1; n >= 0; n--) e[n]();
    e.length = 0;
  };
}
function ct(e, ...n) {
  const t = ch(...n);
  t.length > 0 && e.classList.add(...t);
}
function ts(e, ...n) {
  const t = ch(...n);
  t.length > 0 && e.classList.remove(...t);
}
function hC(e) {
  return e ? e.getAdjacentCaret() : null;
}
function mC(e, n) {
  let t = e;
  for (; t != null; ) {
    if (t instanceof n) return t;
    t = t.getParent();
  }
  return null;
}
function yC(e) {
  const n = Qe(e, (t) => P(t) && !t.isInline());
  return P(n) || gC(4, e.__key), n;
}
function vn(e, n) {
  return e !== null && Object.getPrototypeOf(e).constructor.name === n.name;
}
const bC = Symbol.for("preact-signals");
function ns() {
  if (nn > 1) return void nn--;
  let e, n = !1;
  for (; Yr !== void 0; ) {
    let t = Yr;
    for (Yr = void 0, La++; t !== void 0; ) {
      const r = t.o;
      if (t.o = void 0, t.f &= -3, !(8 & t.f) && uh(t)) try {
        t.c();
      } catch (o) {
        n || (e = o, n = !0);
      }
      t = r;
    }
  }
  if (La = 0, nn--, n) throw e;
}
function vC(e) {
  if (nn > 0) return e();
  nn++;
  try {
    return e();
  } finally {
    ns();
  }
}
let se, Yr;
function Mu(e) {
  const n = se;
  se = void 0;
  try {
    return e();
  } finally {
    se = n;
  }
}
let nn = 0, La = 0, Ko = 0;
function Du(e) {
  if (se === void 0) return;
  let n = e.n;
  return n === void 0 || n.t !== se ? (n = { i: 0, S: e, p: se.s, n: void 0, t: se, e: void 0, x: void 0, r: n }, se.s !== void 0 && (se.s.n = n), se.s = n, e.n = n, 32 & se.f && e.S(n), n) : n.i === -1 ? (n.i = 0, n.n !== void 0 && (n.n.p = n.p, n.p !== void 0 && (n.p.n = n.n), n.p = se.s, n.n = void 0, se.s.n = n, se.s = n), n) : void 0;
}
function Le(e, n) {
  this.v = e, this.i = 0, this.n = void 0, this.t = void 0, this.W = n == null ? void 0 : n.watched, this.Z = n == null ? void 0 : n.unwatched, this.name = n == null ? void 0 : n.name;
}
function xC(e, n) {
  return new Le(e, n);
}
function uh(e) {
  for (let n = e.s; n !== void 0; n = n.n) if (n.S.i !== n.i || !n.S.h() || n.S.i !== n.i) return !0;
  return !1;
}
function Lu(e) {
  for (let n = e.s; n !== void 0; n = n.n) {
    const t = n.S.n;
    if (t !== void 0 && (n.r = t), n.S.n = n, n.i = -1, n.n === void 0) {
      e.s = n;
      break;
    }
  }
}
function dh(e) {
  let n, t = e.s;
  for (; t !== void 0; ) {
    const r = t.p;
    t.i === -1 ? (t.S.U(t), r !== void 0 && (r.n = t.n), t.n !== void 0 && (t.n.p = r)) : n = t, t.S.n = t.r, t.r !== void 0 && (t.r = void 0), t = r;
  }
  e.s = n;
}
function Un(e, n) {
  Le.call(this, void 0), this.x = e, this.s = void 0, this.g = Ko - 1, this.f = 4, this.W = n == null ? void 0 : n.watched, this.Z = n == null ? void 0 : n.unwatched, this.name = n == null ? void 0 : n.name;
}
function fh(e) {
  const n = e.u;
  if (e.u = void 0, typeof n == "function") {
    nn++;
    const t = se;
    se = void 0;
    try {
      n();
    } catch (r) {
      throw e.f &= -2, e.f |= 8, jl(e), r;
    } finally {
      se = t, ns();
    }
  }
}
function jl(e) {
  for (let n = e.s; n !== void 0; n = n.n) n.S.U(n);
  e.x = void 0, e.s = void 0, fh(e);
}
function wC(e) {
  if (se !== this) throw new Error("Out-of-order effect");
  dh(this), se = e, this.f &= -2, 8 & this.f && jl(this), ns();
}
function er(e, n) {
  this.x = e, this.u = void 0, this.s = void 0, this.o = void 0, this.f = 32, this.name = n == null ? void 0 : n.name;
}
function Ul(e, n) {
  const t = new er(e, n);
  try {
    t.c();
  } catch (o) {
    throw t.d(), o;
  }
  const r = t.d.bind(t);
  return r[Symbol.dispose] = r, r;
}
function _C(e, n = {}) {
  const t = {};
  for (const r in e) {
    const o = n[r], i = xC(o === void 0 ? e[r] : o);
    t[r] = i;
  }
  return t;
}
Le.prototype.brand = bC, Le.prototype.h = function() {
  return !0;
}, Le.prototype.S = function(e) {
  const n = this.t;
  n !== e && e.e === void 0 && (e.x = n, this.t = e, n !== void 0 ? n.e = e : Mu(() => {
    var t;
    (t = this.W) == null || t.call(this);
  }));
}, Le.prototype.U = function(e) {
  if (this.t !== void 0) {
    const n = e.e, t = e.x;
    n !== void 0 && (n.x = t, e.e = void 0), t !== void 0 && (t.e = n, e.x = void 0), e === this.t && (this.t = t, t === void 0 && Mu(() => {
      var r;
      (r = this.Z) == null || r.call(this);
    }));
  }
}, Le.prototype.subscribe = function(e) {
  return Ul(() => {
    const n = this.value, t = se;
    se = void 0;
    try {
      e(n);
    } finally {
      se = t;
    }
  }, { name: "sub" });
}, Le.prototype.valueOf = function() {
  return this.value;
}, Le.prototype.toString = function() {
  return this.value + "";
}, Le.prototype.toJSON = function() {
  return this.value;
}, Le.prototype.peek = function() {
  const e = se;
  se = void 0;
  try {
    return this.value;
  } finally {
    se = e;
  }
}, Object.defineProperty(Le.prototype, "value", { get() {
  const e = Du(this);
  return e !== void 0 && (e.i = this.i), this.v;
}, set(e) {
  if (e !== this.v) {
    if (La > 100) throw new Error("Cycle detected");
    this.v = e, this.i++, Ko++, nn++;
    try {
      for (let n = this.t; n !== void 0; n = n.x) n.t.N();
    } finally {
      ns();
    }
  }
} }), Un.prototype = new Le(), Un.prototype.h = function() {
  if (this.f &= -3, 1 & this.f) return !1;
  if ((36 & this.f) == 32 || (this.f &= -5, this.g === Ko)) return !0;
  if (this.g = Ko, this.f |= 1, this.i > 0 && !uh(this)) return this.f &= -2, !0;
  const e = se;
  try {
    Lu(this), se = this;
    const n = this.x();
    (16 & this.f || this.v !== n || this.i === 0) && (this.v = n, this.f &= -17, this.i++);
  } catch (n) {
    this.v = n, this.f |= 16, this.i++;
  }
  return se = e, dh(this), this.f &= -2, !0;
}, Un.prototype.S = function(e) {
  if (this.t === void 0) {
    this.f |= 36;
    for (let n = this.s; n !== void 0; n = n.n) n.S.S(n);
  }
  Le.prototype.S.call(this, e);
}, Un.prototype.U = function(e) {
  if (this.t !== void 0 && (Le.prototype.U.call(this, e), this.t === void 0)) {
    this.f &= -33;
    for (let n = this.s; n !== void 0; n = n.n) n.S.U(n);
  }
}, Un.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 6;
    for (let e = this.t; e !== void 0; e = e.x) e.t.N();
  }
}, Object.defineProperty(Un.prototype, "value", { get() {
  if (1 & this.f) throw new Error("Cycle detected");
  const e = Du(this);
  if (this.h(), e !== void 0 && (e.i = this.i), 16 & this.f) throw this.v;
  return this.v;
} }), er.prototype.c = function() {
  const e = this.S();
  try {
    if (8 & this.f || this.x === void 0) return;
    const n = this.x();
    typeof n == "function" && (this.u = n);
  } finally {
    e();
  }
}, er.prototype.S = function() {
  if (1 & this.f) throw new Error("Cycle detected");
  this.f |= 1, this.f &= -9, fh(this), Lu(this), nn++;
  const e = se;
  return se = this, wC.bind(this, e);
}, er.prototype.N = function() {
  2 & this.f || (this.f |= 2, this.o = Yr, Yr = this);
}, er.prototype.d = function() {
  this.f |= 8, 1 & this.f || jl(this);
}, er.prototype.dispose = function() {
  this.d();
};
function SC(e) {
  return (typeof e.nodes == "function" ? e.nodes() : e.nodes) || [];
}
function ce(e, ...n) {
  const t = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", e);
  for (const o of n) r.append("v", o);
  throw t.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
function gh(e, n) {
  if (e && n && !Array.isArray(n) && typeof e == "object" && typeof n == "object") {
    const t = e, r = n;
    for (const o in r) t[o] = gh(t[o], r[o]);
    return e;
  }
  return n;
}
const Gl = 0, za = 1, ph = 2, zs = 3, Io = 4, Gn = 5, Bs = 6, zr = 7;
function Vs(e) {
  return e.id === Gl;
}
function hh(e) {
  return e.id === ph;
}
function CC(e) {
  return (function(n) {
    return n.id === za;
  })(e) || ce(305, String(e.id), String(za)), Object.assign(e, { id: ph });
}
const EC = /* @__PURE__ */ new Set();
let kC = class {
  constructor(n, t) {
    F(this, "builder");
    F(this, "configs");
    F(this, "_dependency");
    F(this, "_peerNameSet");
    F(this, "extension");
    F(this, "state");
    F(this, "_signal");
    this.builder = n, this.extension = t, this.configs = /* @__PURE__ */ new Set(), this.state = { id: Gl };
  }
  mergeConfigs() {
    let n = this.extension.config || {};
    const t = this.extension.mergeConfig ? this.extension.mergeConfig.bind(this.extension) : oC;
    for (const r of this.configs) n = t(n, r);
    return n;
  }
  init(n) {
    const t = this.state;
    hh(t) || ce(306, String(t.id));
    const r = { getDependency: this.getInitDependency.bind(this), getDirectDependentNames: this.getDirectDependentNames.bind(this), getPeer: this.getInitPeer.bind(this), getPeerNameSet: this.getPeerNameSet.bind(this) }, o = { ...r, getDependency: this.getDependency.bind(this), getInitResult: this.getInitResult.bind(this), getPeer: this.getPeer.bind(this) }, i = (function(a, l, c) {
      return Object.assign(a, { config: l, id: zs, registerState: c });
    })(t, this.mergeConfigs(), r);
    let s;
    this.state = i, this.extension.init && (s = this.extension.init(n, i.config, r)), this.state = (function(a, l, c) {
      return Object.assign(a, { id: Io, initResult: l, registerState: c });
    })(i, s, o);
  }
  build(n) {
    const t = this.state;
    let r;
    t.id !== Io && ce(307, String(t.id), String(Gn)), this.extension.build && (r = this.extension.build(n, t.config, t.registerState));
    const o = { ...t.registerState, getOutput: () => r, getSignal: this.getSignal.bind(this) };
    this.state = (function(i, s, a) {
      return Object.assign(i, { id: Gn, output: s, registerState: a });
    })(t, r, o);
  }
  register(n, t) {
    this._signal = t;
    const r = this.state;
    r.id !== Gn && ce(308, String(r.id), String(Gn));
    const o = this.extension.register && this.extension.register(n, r.config, r.registerState);
    return this.state = (function(i) {
      return Object.assign(i, { id: Bs });
    })(r), () => {
      const i = this.state;
      i.id !== zr && ce(309, String(r.id), String(zr)), this.state = (function(s) {
        return Object.assign(s, { id: Gn });
      })(i), o && o();
    };
  }
  afterRegistration(n) {
    const t = this.state;
    let r;
    return t.id !== Bs && ce(310, String(t.id), String(Bs)), this.extension.afterRegistration && (r = this.extension.afterRegistration(n, t.config, t.registerState)), this.state = (function(o) {
      return Object.assign(o, { id: zr });
    })(t), r;
  }
  getSignal() {
    return this._signal === void 0 && ce(311), this._signal;
  }
  getInitResult() {
    this.extension.init === void 0 && ce(312, this.extension.name);
    const n = this.state;
    return (function(t) {
      return t.id >= Io;
    })(n) || ce(313, String(n.id), String(Io)), n.initResult;
  }
  getInitPeer(n) {
    const t = this.builder.extensionNameMap.get(n);
    return t ? t.getExtensionInitDependency() : void 0;
  }
  getExtensionInitDependency() {
    const n = this.state;
    return (function(t) {
      return t.id >= zs;
    })(n) || ce(314, String(n.id), String(zs)), { config: n.config };
  }
  getPeer(n) {
    const t = this.builder.extensionNameMap.get(n);
    return t ? t.getExtensionDependency() : void 0;
  }
  getInitDependency(n) {
    const t = this.builder.getExtensionRep(n);
    return t === void 0 && ce(315, this.extension.name, n.name), t.getExtensionInitDependency();
  }
  getDependency(n) {
    const t = this.builder.getExtensionRep(n);
    return t === void 0 && ce(315, this.extension.name, n.name), t.getExtensionDependency();
  }
  getState() {
    const n = this.state;
    return (function(t) {
      return t.id >= zr;
    })(n) || ce(316, String(n.id), String(zr)), n;
  }
  getDirectDependentNames() {
    return this.builder.incomingEdges.get(this.extension.name) || EC;
  }
  getPeerNameSet() {
    let n = this._peerNameSet;
    return n || (n = new Set((this.extension.peerDependencies || []).map(([t]) => t)), this._peerNameSet = n), n;
  }
  getExtensionDependency() {
    if (!this._dependency) {
      const n = this.state;
      (function(t) {
        return t.id >= Gn;
      })(n) || ce(317, this.extension.name), this._dependency = { config: n.config, init: n.initResult, output: n.output };
    }
    return this._dependency;
  }
};
const zu = { tag: sr };
function NC() {
  const e = ye();
  e.isEmpty() && e.append(me());
}
const RC = { config: { setOptions: zu, updateOptions: zu }, init: ({ $initialEditorState: e = NC }) => ({ $initialEditorState: e, initialized: !1 }), afterRegistration(e, { updateOptions: n, setOptions: t }, r) {
  const o = r.getInitResult();
  if (!o.initialized) {
    o.initialized = !0;
    const { $initialEditorState: i } = o;
    if (AS(i)) e.setEditorState(i, t);
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
}, name: "@lexical/extension/InitialState", nodes: [Rr, Wt, Cr, Er, Ar] }, Bu = Symbol.for("@lexical/extension/LexicalBuilder");
function Vu() {
}
function AC(e) {
  throw e;
}
function Oo(e) {
  return Array.isArray(e) ? e : [e];
}
const js = "0.39.0+prod.esm";
let mh = class qo {
  constructor(n) {
    F(this, "roots");
    F(this, "extensionNameMap");
    F(this, "outgoingConfigEdges");
    F(this, "incomingEdges");
    F(this, "conflicts");
    F(this, "_sortedExtensionReps");
    F(this, "PACKAGE_VERSION");
    this.outgoingConfigEdges = /* @__PURE__ */ new Map(), this.incomingEdges = /* @__PURE__ */ new Map(), this.extensionNameMap = /* @__PURE__ */ new Map(), this.conflicts = /* @__PURE__ */ new Map(), this.PACKAGE_VERSION = js, this.roots = n;
    for (const t of n) this.addExtension(t);
  }
  static fromExtensions(n) {
    const t = [Oo(RC)];
    for (const r of n) t.push(Oo(r));
    return new qo(t);
  }
  static maybeFromEditor(n) {
    const t = n[Bu];
    return t && (t.PACKAGE_VERSION !== js && ce(292, t.PACKAGE_VERSION, js), t instanceof qo || ce(293)), t;
  }
  static fromEditor(n) {
    const t = qo.maybeFromEditor(n);
    return t === void 0 && ce(294), t;
  }
  constructEditor() {
    const { $initialEditorState: n, onError: t, ...r } = this.buildCreateEditorArgs(), o = Object.assign(Pp({ ...r, ...t ? { onError: (i) => {
      t(i, o);
    } } : {} }), { [Bu]: this });
    for (const i of this.sortedExtensionReps()) i.build(o);
    return o;
  }
  buildEditor() {
    let n = Vu;
    function t() {
      try {
        n();
      } finally {
        n = Vu;
      }
    }
    const r = Object.assign(this.constructEditor(), { dispose: t, [Symbol.dispose]: t });
    return n = Vt(this.registerEditor(r), () => r.setRootElement(null)), r;
  }
  hasExtensionByName(n) {
    return this.extensionNameMap.has(n);
  }
  getExtensionRep(n) {
    const t = this.extensionNameMap.get(n.name);
    if (t) return t.extension !== n && ce(295, n.name), t;
  }
  addEdge(n, t, r) {
    const o = this.outgoingConfigEdges.get(n);
    o ? o.set(t, r) : this.outgoingConfigEdges.set(n, /* @__PURE__ */ new Map([[t, r]]));
    const i = this.incomingEdges.get(t);
    i ? i.add(n) : this.incomingEdges.set(t, /* @__PURE__ */ new Set([n]));
  }
  addExtension(n) {
    this._sortedExtensionReps !== void 0 && ce(296);
    const t = Oo(n), [r] = t;
    typeof r.name != "string" && ce(297, typeof r.name);
    let o = this.extensionNameMap.get(r.name);
    if (o !== void 0 && o.extension !== r && ce(298, r.name), !o) {
      o = new kC(this, r), this.extensionNameMap.set(r.name, o);
      const i = this.conflicts.get(r.name);
      typeof i == "string" && ce(299, r.name, i);
      for (const s of r.conflictsWith || []) this.extensionNameMap.has(s) && ce(299, r.name, s), this.conflicts.set(s, r.name);
      for (const s of r.dependencies || []) {
        const a = Oo(s);
        this.addEdge(r.name, a[0].name, a.slice(1)), this.addExtension(a);
      }
      for (const [s, a] of r.peerDependencies || []) this.addEdge(r.name, s, a ? [a] : []);
    }
  }
  sortedExtensionReps() {
    if (this._sortedExtensionReps) return this._sortedExtensionReps;
    const n = [], t = (r, o) => {
      let i = r.state;
      if (hh(i)) return;
      const s = r.extension.name;
      var a;
      Vs(i) || ce(300, s, o || "[unknown]"), Vs(a = i) || ce(304, String(a.id), String(Gl)), i = Object.assign(a, { id: za }), r.state = i;
      const l = this.outgoingConfigEdges.get(s);
      if (l) for (const c of l.keys()) {
        const u = this.extensionNameMap.get(c);
        u && t(u, s);
      }
      i = CC(i), r.state = i, n.push(r);
    };
    for (const r of this.extensionNameMap.values()) Vs(r.state) && t(r);
    for (const r of n) for (const [o, i] of this.outgoingConfigEdges.get(r.extension.name) || []) if (i.length > 0) {
      const s = this.extensionNameMap.get(o);
      if (s) for (const a of i) s.configs.add(a);
    }
    for (const [r, ...o] of this.roots) if (o.length > 0) {
      const i = this.extensionNameMap.get(r.name);
      i === void 0 && ce(301, r.name);
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
    return Vt(...o);
  }
  buildCreateEditorArgs() {
    const n = {}, t = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), i = {}, s = {}, a = this.sortedExtensionReps();
    for (const u of a) {
      const { extension: d } = u;
      if (d.onError !== void 0 && (n.onError = d.onError), d.disableEvents !== void 0 && (n.disableEvents = d.disableEvents), d.parentEditor !== void 0 && (n.parentEditor = d.parentEditor), d.editable !== void 0 && (n.editable = d.editable), d.namespace !== void 0 && (n.namespace = d.namespace), d.$initialEditorState !== void 0 && (n.$initialEditorState = d.$initialEditorState), d.nodes) for (const f of SC(d)) {
        if (typeof f != "function") {
          const g = r.get(f.replace);
          g && ce(302, d.name, f.replace.name, g.extension.name), r.set(f.replace, u);
        }
        t.add(f);
      }
      if (d.html) {
        if (d.html.export) for (const [f, g] of d.html.export.entries()) o.set(f, g);
        d.html.import && Object.assign(i, d.html.import);
      }
      d.theme && gh(s, d.theme);
    }
    Object.keys(s).length > 0 && (n.theme = s), t.size && (n.nodes = [...t]);
    const l = Object.keys(i).length > 0, c = o.size > 0;
    (l || c) && (n.html = {}, l && (n.html.import = i), c && (n.html.export = o));
    for (const u of a) u.init(n);
    return n.onError || (n.onError = AC), n;
  }
};
function TC(e, n) {
  const t = mh.fromEditor(e).extensionNameMap.get(n);
  return t ? t.getExtensionDependency() : void 0;
}
class yo extends Sl {
  static getType() {
    return "horizontalrule";
  }
  static clone(n) {
    return new yo(n.__key);
  }
  static importJSON(n) {
    return yh().updateFromJSON(n);
  }
  static importDOM() {
    return { hr: () => ({ conversion: FC, priority: 0 }) };
  }
  exportDOM() {
    return { element: document.createElement("hr") };
  }
  createDOM(n) {
    const t = document.createElement("hr");
    return ct(t, n.theme.hr), t;
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
function FC() {
  return { node: yh() };
}
function yh() {
  return qp(yo);
}
function PC(e) {
  return e instanceof yo;
}
const IC = { name: "@lexical/react/ReactProvider" };
function OC() {
  return ye().getTextContent();
}
function $C(e, n = !0) {
  if (e) return !1;
  let t = OC();
  return n && (t = t.trim()), t === "";
}
function MC(e) {
  if (!$C(e, !1)) return !1;
  const n = ye().getChildren(), t = n.length;
  if (t > 1) return !1;
  for (let r = 0; r < t; r++) {
    const o = n[r];
    if (ne(o)) return !1;
    if (P(o)) {
      if (!po(o) || o.__indent !== 0) return !1;
      const i = o.getChildren(), s = i.length;
      for (let a = 0; a < s; a++) {
        const l = i[r];
        if (!V(l)) return !1;
      }
    }
  }
  return !0;
}
function bh(e) {
  return () => MC(e);
}
function DC(e) {
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
            const [c, u, d, f, g] = l;
            e.update(() => {
              const p = G();
              if (L(p)) {
                const h = p.anchor;
                let m = h.getNode(), b = 0, y = 0;
                if (V(m) && c >= 0 && u >= 0 && (b = c, y = c + u, p.setTextNodeRange(m, b, m, y)), b === y && d === "" || (p.insertRawText(d), m = h.getNode()), V(m)) {
                  b = f, y = f + g;
                  const v = m.getTextContentSize();
                  b = b > v ? v : b, y = y > v ? v : y, p.setTextNodeRange(m, b, m, y);
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
function LC(e, n) {
  const t = Mp(n) ? n.body.childNodes : n.childNodes;
  let r = [];
  const o = [];
  for (const i of t) if (!xh.has(i.nodeName)) {
    const s = wh(i, e, o, !1);
    s !== null && (r = r.concat(s));
  }
  return (function(i) {
    for (const s of i) s.getNextSibling() instanceof El && s.insertAfter(at());
    for (const s of i) {
      const a = s.getChildren();
      for (const l of a) s.insertBefore(l);
      s.remove();
    }
  })(o), r;
}
function zC(e, n) {
  if (typeof document > "u" || typeof window > "u" && global.window === void 0) throw new Error("To use $generateHtmlFromNodes in headless mode please initialize a headless browser implementation such as JSDom before calling this function.");
  const t = document.createElement("div"), r = ye().getChildren();
  for (let o = 0; o < r.length; o++)
    vh(e, r[o], t, n);
  return t.innerHTML;
}
function vh(e, n, t, r = null) {
  let o = r === null || n.isSelected(r);
  const i = P(n) && n.excludeFromCopy("html");
  let s = n;
  r !== null && V(n) && (s = oh(r, n, "clone"));
  const a = P(s) ? s.getChildren() : [], l = Nl(e, s.getType());
  let c;
  c = l && l.exportDOM !== void 0 ? l.exportDOM(e, s) : s.exportDOM(e);
  const { element: u, after: d } = c;
  if (!u) return !1;
  const f = document.createDocumentFragment();
  for (let g = 0; g < a.length; g++) {
    const p = a[g], h = vh(e, p, f, r);
    !o && P(n) && h && n.extractWithChild(p, r, "html") && (o = !0);
  }
  if (o && !i) {
    if ((_e(u) || $a(u)) && u.append(f), t.append(u), d) {
      const g = d.call(s, u);
      g && ($a(u) ? u.replaceChildren(g) : u.replaceWith(g));
    }
  } else t.append(f);
  return o;
}
const xh = /* @__PURE__ */ new Set(["STYLE", "SCRIPT"]);
function wh(e, n, t, r, o = /* @__PURE__ */ new Map(), i) {
  let s = [];
  if (xh.has(e.nodeName)) return s;
  let a = null;
  const l = (function(p, h) {
    const { nodeName: m } = p, b = h._htmlConversions.get(m.toLowerCase());
    let y = null;
    if (b !== void 0) for (const v of b) {
      const _ = v(p);
      _ !== null && (y === null || (y.priority || 0) <= (_.priority || 0)) && (y = _);
    }
    return y !== null ? y.conversion : null;
  })(e, n), c = l ? l(e) : null;
  let u = null;
  if (c !== null) {
    u = c.after;
    const p = c.node;
    if (a = Array.isArray(p) ? p[p.length - 1] : p, a !== null) {
      for (const [, h] of o) if (a = h(a, i), !a) break;
      a && s.push(...Array.isArray(p) ? p : [a]);
    }
    c.forChild != null && o.set(e.nodeName, c.forChild);
  }
  const d = e.childNodes;
  let f = [];
  const g = (a == null || !Me(a)) && (a != null && Ta(a) || r);
  for (let p = 0; p < d.length; p++) f.push(...wh(d[p], n, t, g, new Map(o), a));
  return u != null && (f = u(f)), vi(e) && (f = BC(e, f, g ? () => {
    const p = new El();
    return t.push(p), p;
  } : me)), a == null ? f.length > 0 ? s = s.concat(f) : vi(e) && (function(p) {
    return p.nextSibling == null || p.previousSibling == null ? !1 : Ma(p.nextSibling) && Ma(p.previousSibling);
  })(e) && (s = s.concat(at())) : P(a) && a.append(...f), s;
}
function BC(e, n, t) {
  const r = e.style.textAlign, o = [];
  let i = [];
  for (let s = 0; s < n.length; s++) {
    const a = n[s];
    if (Ta(a)) r && !a.getFormat() && a.setFormat(r), o.push(a);
    else if (i.push(a), s === n.length - 1 || s < n.length - 1 && Ta(n[s + 1])) {
      const l = t();
      l.setFormat(r), l.append(...i), o.push(l), i = [];
    }
  }
  return o;
}
function xi(e, ...n) {
  const t = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", e);
  for (const o of n) r.append("v", o);
  throw t.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
function VC(e, n = G()) {
  return n == null && xi(166), L(n) && n.isCollapsed() || n.getNodes().length === 0 ? "" : zC(e, n);
}
function jC(e, n = G()) {
  return n == null && xi(166), L(n) && n.isCollapsed() || n.getNodes().length === 0 ? null : JSON.stringify(UC(e, n));
}
function ju(e, n, t) {
  const r = e.getData("application/x-lexical-editor");
  if (r) try {
    const a = JSON.parse(r);
    if (a.namespace === t._config.namespace && Array.isArray(a.nodes))
      return Uu(t, GC(a.nodes), n);
  } catch (a) {
    console.error(a);
  }
  const o = e.getData("text/html"), i = e.getData("text/plain");
  if (o && i !== o) try {
    const a = new DOMParser().parseFromString((function(l) {
      return window.trustedTypes && window.trustedTypes.createPolicy ? window.trustedTypes.createPolicy("lexical", { createHTML: (c) => c }).createHTML(l) : l;
    })(o), "text/html");
    return Uu(t, LC(t, a), n);
  } catch (a) {
    console.error(a);
  }
  const s = i || e.getData("text/uri-list");
  if (s != null) if (L(n)) {
    const a = s.split(/(\r?\n|\t)/);
    a[a.length - 1] === "" && a.pop();
    for (let l = 0; l < a.length; l++) {
      const c = G();
      if (L(c)) {
        const u = a[l];
        u === `
` || u === `\r
` ? c.insertParagraph() : u === "	" ? c.insertNodes([kr()]) : c.insertText(u);
      }
    }
  } else n.insertRawText(s);
}
function Uu(e, n, t) {
  e.dispatchCommand(K_, { nodes: n, selection: t }) || (t.insertNodes(n), (function(r) {
    if (L(r) && r.isCollapsed()) {
      const o = r.anchor;
      let i = null;
      const s = Bt(o, "previous");
      if (s) if (en(s)) i = s.origin;
      else {
        const a = an(s, lt(ye(), "next").getFlipped());
        for (const l of a) {
          if (V(l.origin)) {
            i = l.origin;
            break;
          }
          if (P(l.origin) && !l.origin.isInline()) break;
        }
      }
      if (i && V(i)) {
        const a = i.getFormat(), l = i.getStyle();
        r.format === a && r.style === l || (r.format = a, r.style = l, r.dirty = !0);
      }
    }
  })(t));
}
function _h(e, n, t, r = []) {
  let o = n === null || t.isSelected(n);
  const i = P(t) && t.excludeFromCopy("html");
  let s = t;
  n !== null && V(s) && (s = oh(n, s, "clone"));
  const a = P(s) ? s.getChildren() : [], l = (function(c) {
    const u = c.exportJSON(), d = c.constructor;
    if (u.type !== d.getType() && xi(58, d.name), P(c)) {
      const f = u.children;
      Array.isArray(f) || xi(59, d.name);
    }
    return u;
  })(s);
  V(s) && s.getTextContentSize() === 0 && (o = !1);
  for (let c = 0; c < a.length; c++) {
    const u = a[c], d = _h(e, n, u, l.children);
    !o && P(t) && d && t.extractWithChild(u, n, "clone") && (o = !0);
  }
  if (o && !i) r.push(l);
  else if (Array.isArray(l.children)) for (let c = 0; c < l.children.length; c++) {
    const u = l.children[c];
    r.push(u);
  }
  return o;
}
function UC(e, n) {
  const t = [], r = ye().getChildren();
  for (let o = 0; o < r.length; o++)
    _h(e, n, r[o], t);
  return { namespace: e._config.namespace, nodes: t };
}
function GC(e) {
  const n = [];
  for (let t = 0; t < e.length; t++) {
    const r = e[t], o = RS(r);
    V(o) && uC(o), n.push(o);
  }
  return n;
}
let Wn = null;
async function Gu(e, n, t) {
  if (Wn !== null) return !1;
  if (n !== null) return new Promise((c, u) => {
    e.update(() => {
      c(Wu(e, n, t));
    });
  });
  const r = e.getRootElement(), o = e._window || window, i = o.document, s = pt(o);
  if (r === null || s === null) return !1;
  const a = i.createElement("span");
  a.style.cssText = "position: fixed; top: -1000px;", a.append(i.createTextNode("#")), r.append(a);
  const l = new Range();
  return l.setStart(a, 0), l.setEnd(a, 1), s.removeAllRanges(), s.addRange(l), new Promise((c, u) => {
    const d = e.registerCommand(Wi, (f) => (vn(f, ClipboardEvent) && (d(), Wn !== null && (o.clearTimeout(Wn), Wn = null), c(Wu(e, f, t))), !0), FS);
    Wn = o.setTimeout(() => {
      d(), Wn = null, c(!1);
    }, 50), i.execCommand("copy"), a.remove();
  });
}
function Wu(e, n, t) {
  if (t === void 0) {
    const o = pt(e._window), i = G();
    if (!i || i.isCollapsed() || !o) return !1;
    const s = o.anchorNode, a = o.focusNode;
    if (s !== null && a !== null && !ho(e, s, a)) return !1;
    t = WC(i);
  }
  n.preventDefault();
  const r = n.clipboardData;
  return r !== null && (HC(r, t), !0);
}
const Sh = [["text/html", VC], ["application/x-lexical-editor", jC]];
function WC(e = G()) {
  const n = { "text/plain": e ? e.getTextContent() : "" };
  if (e) {
    const t = Qi();
    for (const [r, o] of Sh) {
      const i = o(t, e);
      i !== null && (n[r] = i);
    }
  }
  return n;
}
function HC(e, n) {
  for (const [t] of Sh) n[t] === void 0 && e.setData(t, "");
  for (const t in n) {
    const r = n[t];
    r !== void 0 && e.setData(t, r);
  }
}
function Hu(e, n) {
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
const Bn = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, KC = Bn && "documentMode" in document ? document.documentMode : null, qC = Bn && /Mac|iPod|iPhone|iPad/.test(navigator.platform), YC = !(!Bn || !("InputEvent" in window) || KC) && "getTargetRanges" in new window.InputEvent("input"), ZC = Bn && /Version\/[\d.]+.*Safari/.test(navigator.userAgent), Ku = Bn && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, JC = Bn && /^(?=.*Chrome).*/i.test(navigator.userAgent), XC = Bn && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && qC && !JC, qu = K("DRAG_DROP_PASTE_FILE");
let rs = class Ch extends Ye {
  static getType() {
    return "quote";
  }
  static clone(n) {
    return new Ch(n.__key);
  }
  createDOM(n) {
    const t = document.createElement("blockquote");
    return ct(t, n.theme.quote), t;
  }
  updateDOM(n, t) {
    return !1;
  }
  static importDOM() {
    return { blockquote: (n) => ({ conversion: QC, priority: 0 }) };
  }
  exportDOM(n) {
    const { element: t } = super.exportDOM(n);
    if (_e(t)) {
      this.isEmpty() && t.append(document.createElement("br"));
      const r = this.getFormatType();
      r && (t.style.textAlign = r);
      const o = this.getDirection();
      o && (t.dir = o);
    }
    return { element: t };
  }
  static importJSON(n) {
    return os().updateFromJSON(n);
  }
  insertNewAfter(n, t) {
    const r = me(), o = this.getDirection();
    return r.setDirection(o), this.insertAfter(r, t), r;
  }
  collapseAtStart() {
    const n = me();
    return this.getChildren().forEach((t) => n.append(t)), this.replace(n), !0;
  }
  canMergeWhenEmpty() {
    return !0;
  }
};
function os() {
  return tt(new rs());
}
function Ba(e) {
  return e instanceof rs;
}
let is = class Eh extends Ye {
  constructor(t, r) {
    super(r);
    F(this, "__tag");
    this.__tag = t;
  }
  static getType() {
    return "heading";
  }
  static clone(t) {
    return new Eh(t.__tag, t.__key);
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
      ct(o, s);
    }
    return o;
  }
  updateDOM(t, r, o) {
    return t.__tag !== this.__tag;
  }
  static importDOM() {
    return { h1: (t) => ({ conversion: Hn, priority: 0 }), h2: (t) => ({ conversion: Hn, priority: 0 }), h3: (t) => ({ conversion: Hn, priority: 0 }), h4: (t) => ({ conversion: Hn, priority: 0 }), h5: (t) => ({ conversion: Hn, priority: 0 }), h6: (t) => ({ conversion: Hn, priority: 0 }), p: (t) => {
      const r = t.firstChild;
      return r !== null && Yu(r) ? { conversion: () => ({ node: null }), priority: 3 } : null;
    }, span: (t) => Yu(t) ? { conversion: (r) => ({ node: xn("h1") }), priority: 3 } : null };
  }
  exportDOM(t) {
    const { element: r } = super.exportDOM(t);
    if (_e(r)) {
      this.isEmpty() && r.append(document.createElement("br"));
      const o = this.getFormatType();
      o && (r.style.textAlign = o);
      const i = this.getDirection();
      i && (r.dir = i);
    }
    return { element: r };
  }
  static importJSON(t) {
    return xn(t.tag).updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setTag(t.tag);
  }
  exportJSON() {
    return { ...super.exportJSON(), tag: this.getTag() };
  }
  insertNewAfter(t, r = !0) {
    const o = t ? t.anchor.offset : 0, i = this.getLastDescendant(), s = !i || t && t.anchor.key === i.getKey() && o === i.getTextContentSize() || !t ? me() : xn(this.getTag()), a = this.getDirection();
    if (s.setDirection(a), this.insertAfter(s, r), o === 0 && !this.isEmpty() && t) {
      const l = me();
      l.select(), this.replace(l, !0);
    }
    return s;
  }
  collapseAtStart() {
    const t = this.isEmpty() ? me() : xn(this.getTag());
    return this.getChildren().forEach((r) => t.append(r)), this.replace(t), !0;
  }
  extractWithChild() {
    return !0;
  }
};
function Yu(e) {
  return e.nodeName.toLowerCase() === "span" && e.style.fontSize === "26pt";
}
function Hn(e) {
  const n = e.nodeName.toLowerCase();
  let t = null;
  return n !== "h1" && n !== "h2" && n !== "h3" && n !== "h4" && n !== "h5" && n !== "h6" || (t = xn(n), e.style !== null && ($l(e, t), t.setFormat(e.style.textAlign))), { node: t };
}
function QC(e) {
  const n = os();
  return e.style !== null && (n.setFormat(e.style.textAlign), $l(e, n)), { node: n };
}
function xn(e = "h1") {
  return tt(new is(e));
}
function eE(e) {
  return e instanceof is;
}
function $o(e) {
  let n = null;
  if (vn(e, DragEvent) ? n = e.dataTransfer : vn(e, ClipboardEvent) && (n = e.clipboardData), n === null) return [!1, [], !1];
  const t = n.types, r = t.includes("Files"), o = t.includes("text/html") || t.includes("text/plain");
  return [r, Array.from(n.files), o];
}
function Zu(e) {
  const n = G();
  if (!L(n)) return !1;
  const t = /* @__PURE__ */ new Set(), r = n.getNodes();
  for (let o = 0; o < r.length; o++) {
    const i = r[o], s = i.getKey();
    if (t.has(s)) continue;
    const a = Qe(i, (c) => P(c) && !c.isInline());
    if (a === null) continue;
    const l = a.getKey();
    a.canIndent() && !t.has(l) && (t.add(l), e(a));
  }
  return t.size > 0;
}
function Ju(e) {
  const n = gr(e);
  return ne(n);
}
function Us(e) {
  for (const n of ["lowercase", "uppercase", "capitalize"]) e.hasFormat(n) && e.toggleFormat(n);
}
function tE(e) {
  return Vt(e.registerCommand(pl, (n) => {
    const t = G();
    return !!Oe(t) && (t.clear(), !0);
  }, ee), e.registerCommand(wn, (n) => {
    const t = G();
    return L(t) ? (t.deleteCharacter(n), !0) : !!Oe(t) && (t.deleteNodes(), !0);
  }, ee), e.registerCommand(eo, (n) => {
    const t = G();
    return !!L(t) && (t.deleteWord(n), !0);
  }, ee), e.registerCommand(to, (n) => {
    const t = G();
    return !!L(t) && (t.deleteLine(n), !0);
  }, ee), e.registerCommand(or, (n) => {
    const t = G();
    if (typeof n == "string") t !== null && t.insertText(n);
    else {
      if (t === null) return !1;
      const r = n.dataTransfer;
      if (r != null) ju(r, t, e);
      else if (L(t)) {
        const o = n.data;
        return o && t.insertText(o), !0;
      }
    }
    return !0;
  }, ee), e.registerCommand(xa, () => {
    const n = G();
    return !!L(n) && (n.removeText(), !0);
  }, ee), e.registerCommand(vt, (n) => {
    const t = G();
    return !!L(t) && (t.formatText(n), !0);
  }, ee), e.registerCommand(X_, (n) => {
    const t = G();
    if (!L(t) && !Oe(t)) return !1;
    const r = t.getNodes();
    for (const o of r) {
      const i = Qe(o, (s) => P(s) && !s.isInline());
      i !== null && i.setFormat(n);
    }
    return !0;
  }, ee), e.registerCommand(rr, (n) => {
    const t = G();
    return !!L(t) && (t.insertLineBreak(n), !0);
  }, ee), e.registerCommand(Qr, () => {
    const n = G();
    return !!L(n) && (n.insertParagraph(), !0);
  }, ee), e.registerCommand(Z_, () => (ES([kr()]), !0), ee), e.registerCommand(J_, () => Zu((n) => {
    const t = n.getIndent();
    n.setIndent(t + 1);
  }), ee), e.registerCommand(Yc, () => Zu((n) => {
    const t = n.getIndent();
    t > 0 && n.setIndent(Math.max(0, t - 1));
  }), ee), e.registerCommand(ep, (n) => {
    const t = G();
    if (Oe(t)) {
      const r = t.getNodes();
      if (r.length > 0) return n.preventDefault(), r[0].selectPrevious(), !0;
    } else if (L(t)) {
      const r = Pa(t.focus, !0);
      if (!n.shiftKey && ne(r) && !r.isIsolated() && !r.isInline()) return r.selectPrevious(), n.preventDefault(), !0;
    }
    return !1;
  }, ee), e.registerCommand(tp, (n) => {
    const t = G();
    if (Oe(t)) {
      const r = t.getNodes();
      if (r.length > 0) return n.preventDefault(), r[0].selectNext(0, 0), !0;
    } else if (L(t)) {
      if ((function(o) {
        const i = o.focus;
        return i.key === "root" && i.offset === ye().getChildrenSize();
      })(t)) return n.preventDefault(), !0;
      const r = Pa(t.focus, !1);
      if (!n.shiftKey && ne(r) && !r.isIsolated() && !r.isInline()) return r.selectNext(), n.preventDefault(), !0;
    }
    return !1;
  }, ee), e.registerCommand(Qg, (n) => {
    const t = G();
    if (Oe(t)) {
      const r = t.getNodes();
      if (r.length > 0) return n.preventDefault(), Pu(r[0]) ? r[0].selectNext(0, 0) : r[0].selectPrevious(), !0;
    }
    if (!L(t)) return !1;
    if (Ou(t, !0)) {
      const r = n.shiftKey;
      return n.preventDefault(), $u(t, r, !0), !0;
    }
    return !1;
  }, ee), e.registerCommand(Xg, (n) => {
    const t = G();
    if (Oe(t)) {
      const o = t.getNodes();
      if (o.length > 0) return n.preventDefault(), Pu(o[0]) ? o[0].selectPrevious() : o[0].selectNext(0, 0), !0;
    }
    if (!L(t)) return !1;
    const r = n.shiftKey;
    return !!Ou(t, !1) && (n.preventDefault(), $u(t, r, !1), !0);
  }, ee), e.registerCommand(rp, (n) => {
    if (Ju(n.target)) return !1;
    const t = G();
    if (L(t)) {
      if ((function(r) {
        if (!r.isCollapsed()) return !1;
        const { anchor: o } = r;
        if (o.offset !== 0) return !1;
        const i = o.getNode();
        if (we(i)) return !1;
        const s = yC(i);
        return s.getIndent() > 0 && (s.is(i) || i.is(s.getFirstDescendant()));
      })(t)) return n.preventDefault(), e.dispatchCommand(Yc, void 0);
      if (Ku && navigator.language === "ko-KR") return !1;
    } else if (!Oe(t)) return !1;
    return n.preventDefault(), e.dispatchCommand(wn, !0);
  }, ee), e.registerCommand(ip, (n) => {
    if (Ju(n.target)) return !1;
    const t = G();
    return !(!L(t) && !Oe(t)) && (n.preventDefault(), e.dispatchCommand(wn, !1));
  }, ee), e.registerCommand(ui, (n) => {
    const t = G();
    if (!L(t)) return !1;
    if (Us(t), n !== null) {
      if ((Ku || ZC || XC) && YC) return !1;
      if (n.preventDefault(), n.shiftKey) return e.dispatchCommand(rr, !1);
    }
    return e.dispatchCommand(Qr, void 0);
  }, ee), e.registerCommand(op, () => {
    const n = G();
    return !!L(n) && (e.blur(), !0);
  }, ee), e.registerCommand(ap, (n) => {
    const [, t] = $o(n);
    if (t.length > 0) {
      const o = Hu(n.clientX, n.clientY);
      if (o !== null) {
        const { offset: i, node: s } = o, a = gr(s);
        if (a !== null) {
          const l = qi();
          if (V(a)) l.anchor.set(a.getKey(), i, "text"), l.focus.set(a.getKey(), i, "text");
          else {
            const u = a.getParentOrThrow().getKey(), d = a.getIndexWithinParent() + 1;
            l.anchor.set(u, d, "element"), l.focus.set(u, d, "element");
          }
          const c = ii(l);
          Fe(c);
        }
        e.dispatchCommand(qu, t);
      }
      return n.preventDefault(), !0;
    }
    const r = G();
    return !!L(r);
  }, ee), e.registerCommand(lp, (n) => {
    const [t] = $o(n), r = G();
    return !(t && !L(r));
  }, ee), e.registerCommand(cp, (n) => {
    const [t] = $o(n), r = G();
    if (t && !L(r)) return !1;
    const o = Hu(n.clientX, n.clientY);
    if (o !== null) {
      const i = gr(o.node);
      ne(i) && n.preventDefault();
    }
    return !0;
  }, ee), e.registerCommand(wa, () => (DS(), !0), ee), e.registerCommand(Wi, (n) => (Gu(e, vn(n, ClipboardEvent) ? n : null), !0), ee), e.registerCommand(bl, (n) => ((async function(t, r) {
    await Gu(r, vn(t, ClipboardEvent) ? t : null), r.update(() => {
      const o = G();
      L(o) ? o.removeText() : Oe(o) && o.getNodes().forEach((i) => i.remove());
    });
  })(n, e), !0), ee), e.registerCommand(hl, (n) => {
    const [, t, r] = $o(n);
    return t.length > 0 && !r ? (e.dispatchCommand(qu, t), !0) : Tr(n.target) && Rl(n.target) ? !1 : G() !== null && ((function(o, i) {
      o.preventDefault(), i.update(() => {
        const s = G(), a = vn(o, InputEvent) || vn(o, KeyboardEvent) ? null : o.clipboardData;
        a != null && s !== null && ju(a, s, i);
      }, { tag: fS });
    })(n, e), !0);
  }, ee), e.registerCommand(np, (n) => {
    const t = G();
    return L(t) && Us(t), !1;
  }, ee), e.registerCommand(sp, (n) => {
    const t = G();
    return L(t) && Us(t), !1;
  }, ee));
}
function nE(e, ...n) {
  const t = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", e);
  for (const o of n) r.append("v", o);
  throw t.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
const Wl = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? xr : He;
function rE({ editor: e, ErrorBoundary: n }) {
  return (function(t, r) {
    const [o, i] = rn(() => t.getDecorators());
    return Wl(() => t.registerDecoratorListener((s) => {
      Wy(() => {
        i(s);
      });
    }), [t]), He(() => {
      i(t.getDecorators());
    }, [t]), vr(() => {
      const s = [], a = Object.keys(o);
      for (let l = 0; l < a.length; l++) {
        const c = a[l], u = w(r, { onError: (f) => t._onError(f), children: w(jy, { fallback: null, children: o[c] }) }), d = t.getElementByKey(c);
        d !== null && s.push(af(u, d, c));
      }
      return s;
    }, [r, o, t]);
  })(e, n);
}
function oE({ editor: e, ErrorBoundary: n }) {
  return (function(t) {
    const r = mh.maybeFromEditor(t);
    if (r && r.hasExtensionByName(IC.name)) {
      for (const o of ["@lexical/plain-text", "@lexical/rich-text"]) r.hasExtensionByName(o) && nE(320, o);
      return !0;
    }
    return !1;
  })(e) ? null : w(rE, { editor: e, ErrorBoundary: n });
}
function Xu(e) {
  return e.getEditorState().read(bh(e.isComposing()));
}
function iE({ contentEditable: e, placeholder: n = null, ErrorBoundary: t }) {
  const [r] = ft();
  return (function(o) {
    Wl(() => Vt(tE(o), DC(o)), [o]);
  })(r), M(st, { children: [e, w(sE, { content: n }), w(oE, { editor: r, ErrorBoundary: t })] });
}
function sE({ content: e }) {
  const [n] = ft(), t = (function(o) {
    const [i, s] = rn(() => Xu(o));
    return Wl(() => {
      function a() {
        const l = Xu(o);
        s(l);
      }
      return a(), Vt(o.registerUpdateListener(() => {
        a();
      }), o.registerEditableListener(() => {
        a();
      }));
    }, [o]), i;
  })(n), r = cC();
  return t ? typeof e == "function" ? e(r) : e : null;
}
const kh = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? xr : He;
function aE({ editor: e, ariaActiveDescendant: n, ariaAutoComplete: t, ariaControls: r, ariaDescribedBy: o, ariaErrorMessage: i, ariaExpanded: s, ariaInvalid: a, ariaLabel: l, ariaLabelledBy: c, ariaMultiline: u, ariaOwns: d, ariaRequired: f, autoCapitalize: g, className: p, id: h, role: m = "textbox", spellCheck: b = !0, style: y, tabIndex: v, "data-testid": _, ...S }, C) {
  const [E, N] = rn(e.isEditable()), k = dr((A) => {
    A && A.ownerDocument && A.ownerDocument.defaultView ? e.setRootElement(A) : e.setRootElement(null);
  }, [e]), R = vr(() => /* @__PURE__ */ (function(...A) {
    return (T) => {
      for (const D of A) typeof D == "function" ? D(T) : D != null && (D.current = T);
    };
  })(C, k), [k, C]);
  return kh(() => (N(e.isEditable()), e.registerEditableListener((A) => {
    N(A);
  })), [e]), w("div", { "aria-activedescendant": E ? n : void 0, "aria-autocomplete": E ? t : "none", "aria-controls": E ? r : void 0, "aria-describedby": o, ...i != null ? { "aria-errormessage": i } : {}, "aria-expanded": E && m === "combobox" ? !!s : void 0, ...a != null ? { "aria-invalid": a } : {}, "aria-label": l, "aria-labelledby": c, "aria-multiline": u, "aria-owns": E ? d : void 0, "aria-readonly": !E || void 0, "aria-required": f, autoCapitalize: g, className: p, contentEditable: E, "data-testid": _, id: h, ref: R, role: m, spellCheck: b, style: y, tabIndex: v, ...S });
}
const lE = Ii(aE);
function Qu(e) {
  return e.getEditorState().read(bh(e.isComposing()));
}
const cE = Ii(uE);
function uE(e, n) {
  const { placeholder: t, ...r } = e, [o] = ft();
  return M(st, { children: [w(lE, { editor: o, ...r, ref: n }), t != null && w(dE, { editor: o, content: t })] });
}
function dE({ content: e, editor: n }) {
  const t = (function(s) {
    const [a, l] = rn(() => Qu(s));
    return kh(() => {
      function c() {
        const u = Qu(s);
        l(u);
      }
      return c(), Vt(s.registerUpdateListener(() => {
        c();
      }), s.registerEditableListener(() => {
        c();
      }));
    }, [s]), a;
  })(n), [r, o] = rn(n.isEditable());
  if (xr(() => (o(n.isEditable()), n.registerEditableListener((s) => {
    o(s);
  })), [n]), !t) return null;
  let i = null;
  return typeof e == "function" ? i = e(r) : e !== null && (i = e), i === null ? null : w("div", { "aria-hidden": !0, children: i });
}
function fE(e, n, t, r, o) {
  if (e === null || t.size === 0 && r.size === 0 && !o) return 0;
  const i = n._selection, s = e._selection;
  if (o) return 1;
  if (!(L(i) && L(s) && s.isCollapsed() && i.isCollapsed())) return 0;
  const a = (function(b, y, v) {
    const _ = b._nodeMap, S = [];
    for (const C of y) {
      const E = _.get(C);
      E !== void 0 && S.push(E);
    }
    for (const [C, E] of v) {
      if (!E) continue;
      const N = _.get(C);
      N === void 0 || we(N) || S.push(N);
    }
    return S;
  })(n, t, r);
  if (a.length === 0) return 0;
  if (a.length > 1) {
    const b = n._nodeMap, y = b.get(i.anchor.key), v = b.get(s.anchor.key);
    return y && v && !e._nodeMap.has(y.__key) && V(y) && y.__text.length === 1 && i.anchor.offset === 1 ? 2 : 0;
  }
  const l = a[0], c = e._nodeMap.get(l.__key);
  if (!V(c) || !V(l) || c.__mode !== l.__mode) return 0;
  const u = c.__text, d = l.__text;
  if (u === d) return 0;
  const f = i.anchor, g = s.anchor;
  if (f.key !== g.key || f.type !== "text") return 0;
  const p = f.offset, h = g.offset, m = d.length - u.length;
  return m === 1 && h === p - 1 ? 2 : m === -1 && h === p + 1 ? 3 : m === -1 && h === p ? 4 : 0;
}
function gE(e, n) {
  let t = Date.now(), r = 0;
  return (o, i, s, a, l, c) => {
    const u = Date.now();
    if (c.has(pi)) return r = 0, t = u, 2;
    const d = fE(o, i, a, l, e.isComposing()), f = (() => {
      const g = s === null || s.editor === e, p = c.has(dS);
      if (!p && g && c.has(sr)) return 0;
      if (o === null) return 1;
      const h = i._selection;
      if (!(a.size > 0 || l.size > 0)) return h !== null ? 0 : 2;
      const m = typeof n == "number" ? n : n.peek();
      return p === !1 && d !== 0 && d === r && u < t + m && g || a.size === 1 && (function(b, y, v) {
        const _ = y._nodeMap.get(b), S = v._nodeMap.get(b), C = y._selection, E = v._selection;
        return !(L(C) && L(E) && C.anchor.type === "element" && C.focus.type === "element" && E.anchor.type === "text" && E.focus.type === "text" || !V(_) || !V(S) || _.__parent !== S.__parent) && JSON.stringify(y.read(() => _.exportJSON())) === JSON.stringify(v.read(() => S.exportJSON()));
      })(Array.from(a)[0], o, i) ? 0 : 1;
    })();
    return t = u, r = d, f;
  };
}
function ed(e) {
  e.undoStack = [], e.redoStack = [], e.current = null;
}
function Nh(e, n, t) {
  const r = gE(e, t);
  return Vt(e.registerCommand(ml, () => ((function(i, s) {
    const a = s.redoStack, l = s.undoStack;
    if (l.length !== 0) {
      const c = s.current, u = l.pop();
      c !== null && (a.push(c), i.dispatchCommand(ko, !0)), l.length === 0 && i.dispatchCommand(No, !1), s.current = u || null, u && u.editor.setEditorState(u.editorState, { tag: pi });
    }
  })(e, n), !0), ee), e.registerCommand(yl, () => ((function(i, s) {
    const a = s.redoStack, l = s.undoStack;
    if (a.length !== 0) {
      const c = s.current;
      c !== null && (l.push(c), i.dispatchCommand(No, !0));
      const u = a.pop();
      a.length === 0 && i.dispatchCommand(ko, !1), s.current = u || null, u && u.editor.setEditorState(u.editorState, { tag: pi });
    }
  })(e, n), !0), ee), e.registerCommand(eS, () => (ed(n), !1), ee), e.registerCommand(tS, () => (ed(n), e.dispatchCommand(ko, !1), e.dispatchCommand(No, !1), !0), ee), e.registerUpdateListener(({ editorState: i, prevEditorState: s, dirtyLeaves: a, dirtyElements: l, tags: c }) => {
    const u = n.current, d = n.redoStack, f = n.undoStack, g = u === null ? null : u.editorState;
    if (u !== null && i === g) return;
    const p = r(s, i, u, a, l, c);
    if (p === 1) d.length !== 0 && (n.redoStack = [], e.dispatchCommand(ko, !1)), u !== null && (f.push({ ...u }), e.dispatchCommand(No, !0));
    else if (p === 2) return;
    n.current = { editor: e, editorState: i };
  }));
}
function Rh() {
  return { current: null, redoStack: [], undoStack: [] };
}
const Gs = { build: (e, { delay: n, createInitialHistoryState: t, disabled: r }) => _C({ delay: n, disabled: r, historyState: t(e) }), config: { createInitialHistoryState: Rh, delay: 300, disabled: typeof window > "u" }, name: "@lexical/history/History", register: (e, n, t) => {
  const r = t.getOutput();
  return Ul(() => r.disabled.value ? void 0 : Nh(e, r.historyState.value, r.delay));
} };
rC(Gs, { createInitialHistoryState: () => {
  throw new Error("SharedHistory did not inherit parent history");
}, disabled: !0 });
function pE({ delay: e, externalHistoryState: n }) {
  const [t] = ft();
  return (function(r, o, i = 1e3) {
    const s = vr(() => o || Rh(), [o]);
    He(() => Nh(r, s, i), [i, r, s]);
  })(t, n, e), null;
}
const hE = of(null), Ws = {
  didCatch: !1,
  error: null
};
class mE extends Uy {
  constructor(n) {
    super(n), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = Ws;
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
    }), this.setState(Ws));
  }
  componentDidCatch(n, t) {
    var r, o;
    (o = (r = this.props).onError) == null || o.call(r, n, t);
  }
  componentDidUpdate(n, t) {
    var i, s;
    const { didCatch: r } = this.state, { resetKeys: o } = this.props;
    r && t.error !== null && yE(n.resetKeys, o) && ((s = (i = this.props).onReset) == null || s.call(i, {
      next: o,
      prev: n.resetKeys,
      reason: "keys"
    }), this.setState(Ws));
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
        a = ur(r, l);
      else if (o !== void 0)
        a = o;
      else
        throw s;
    }
    return ur(
      hE.Provider,
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
function yE(e = [], n = []) {
  return e.length !== n.length || e.some((t, r) => !Object.is(t, n[r]));
}
function bE({ children: e, onError: n }) {
  return w(mE, { fallback: w("div", { style: { border: "1px solid #f00", color: "#f00", padding: "8px" }, children: "An error was thrown." }), onError: n, children: e });
}
function Xt(e, ...n) {
  const t = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", e);
  for (const o of n) r.append("v", o);
  throw t.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
function Va(e) {
  let n = 1, t = e.getParent();
  for (; t != null; ) {
    if (re(t)) {
      const r = t.getParent();
      if (X(r)) {
        n++, t = r.getParent();
        continue;
      }
      Xt(40);
    }
    return n;
  }
  return n;
}
function ja(e) {
  let n = e.getParent();
  X(n) || Xt(40);
  let t = n;
  for (; t !== null; ) t = t.getParent(), X(t) && (n = t);
  return n;
}
function Ah(e) {
  let n = [];
  const t = e.getChildren().filter(re);
  for (let r = 0; r < t.length; r++) {
    const o = t[r], i = o.getFirstChild();
    X(i) ? n = n.concat(Ah(i)) : n.push(o);
  }
  return n;
}
function yt(e) {
  return re(e) && X(e.getFirstChild());
}
function td(e) {
  return Ze().append(e);
}
function Th(e, n) {
  return re(e) && (n.length === 0 || n.length === 1 && e.is(n[0]) && e.getChildrenSize() === 0);
}
function nd(e) {
  const n = G();
  if (n !== null) {
    let t = n.getNodes();
    if (L(n)) {
      const o = n.getStartEndPoints();
      o === null && Xt(143);
      const [i] = o, s = i.getNode(), a = s.getParent();
      if (Me(s)) {
        const l = s.getFirstChild();
        if (l) t = l.selectStart().getNodes();
        else {
          const c = me();
          s.append(c), t = c.select().getNodes();
        }
      } else if (Th(s, t)) {
        const l = Ue(e);
        if (Me(a)) {
          s.replace(l);
          const c = Ze();
          P(s) && (c.setFormat(s.getFormatType()), c.setIndent(s.getIndent())), l.append(c);
        } else if (re(s)) {
          const c = s.getParentOrThrow();
          $n(l, c.getChildren()), c.replace(l);
        }
        return;
      }
    }
    const r = /* @__PURE__ */ new Set();
    for (let o = 0; o < t.length; o++) {
      const i = t[o];
      if (P(i) && i.isEmpty() && !re(i) && !r.has(i.getKey())) {
        rd(i, e);
        continue;
      }
      let s = Dp(i) ? i.getParent() : re(i) && i.isEmpty() ? i : null;
      for (; s != null; ) {
        const a = s.getKey();
        if (X(s)) {
          if (!r.has(a)) {
            const l = Ue(e);
            $n(l, s.getChildren()), s.replace(l), r.add(a);
          }
          break;
        }
        {
          const l = s.getParent();
          if (Me(l) && !r.has(a)) {
            r.add(a), rd(s, e);
            break;
          }
          s = l;
        }
      }
    }
  }
}
function $n(e, n) {
  e.splice(e.getChildrenSize(), 0, n);
}
function rd(e, n) {
  if (X(e)) return e;
  const t = e.getPreviousSibling(), r = e.getNextSibling(), o = Ze();
  let i;
  if ($n(o, e.getChildren()), X(t) && n === t.getListType()) t.append(o), X(r) && n === r.getListType() && ($n(t, r.getChildren()), r.remove()), i = t;
  else if (X(r) && n === r.getListType()) r.getFirstChildOrThrow().insertBefore(o), i = r;
  else {
    const s = Ue(n);
    s.append(o), e.replace(s), i = s;
  }
  return o.setFormat(e.getFormatType()), o.setIndent(e.getIndent()), e.remove(), i;
}
function Hl(e, n) {
  const t = e.getLastChild(), r = n.getFirstChild();
  t && r && yt(t) && yt(r) && (Hl(t.getFirstChild(), r.getFirstChild()), r.remove());
  const o = n.getChildren();
  o.length > 0 && e.append(...o), n.remove();
}
function vE() {
  const e = G();
  if (L(e)) {
    const n = /* @__PURE__ */ new Set(), t = e.getNodes(), r = e.anchor.getNode();
    if (Th(r, t)) n.add(ja(r));
    else for (let o = 0; o < t.length; o++) {
      const i = t[o];
      if (Dp(i)) {
        const s = mC(i, dn);
        s != null && n.add(ja(s));
      }
    }
    for (const o of n) {
      let i = o;
      const s = Ah(o);
      for (const a of s) {
        const l = me().setTextStyle(e.style).setTextFormat(e.format);
        $n(l, a.getChildren()), i.insertAfter(l), i = l, a.__key === e.anchor.key && On(e.anchor, Xe(lt(l, "next"))), a.__key === e.focus.key && On(e.focus, Xe(lt(l, "next"))), a.remove();
      }
      o.remove();
    }
  }
}
function Fh(e) {
  const n = e.getListType() !== "check";
  let t = e.getStart();
  for (const r of e.getChildren()) re(r) && (r.getValue() !== t && r.setValue(t), n && r.getLatest().__checked != null && r.setChecked(void 0), X(r.getFirstChild()) || t++);
}
function xE(e) {
  const n = /* @__PURE__ */ new Set();
  if (yt(e) || n.has(e.getKey())) return;
  const t = e.getParent(), r = e.getNextSibling(), o = e.getPreviousSibling();
  if (yt(r) && yt(o)) {
    const i = o.getFirstChild();
    if (X(i)) {
      i.append(e);
      const s = r.getFirstChild();
      X(s) && ($n(i, s.getChildren()), r.remove(), n.add(r.getKey()));
    }
  } else if (yt(r)) {
    const i = r.getFirstChild();
    if (X(i)) {
      const s = i.getFirstChild();
      s !== null && s.insertBefore(e);
    }
  } else if (yt(o)) {
    const i = o.getFirstChild();
    X(i) && i.append(e);
  } else if (X(t)) {
    const i = Ze().setTextFormat(e.getTextFormat()).setTextStyle(e.getTextStyle()), s = Ue(t.getListType()).setTextFormat(t.getTextFormat()).setTextStyle(t.getTextStyle());
    i.append(s), s.append(e), o ? o.insertAfter(i) : r ? r.insertBefore(i) : t.append(i);
  }
}
function wE(e) {
  if (yt(e)) return;
  const n = e.getParent(), t = n ? n.getParent() : void 0;
  if (X(t ? t.getParent() : void 0) && re(t) && X(n)) {
    const r = n ? n.getFirstChild() : void 0, o = n ? n.getLastChild() : void 0;
    if (e.is(r)) t.insertBefore(e), n.isEmpty() && t.remove();
    else if (e.is(o)) t.insertAfter(e), n.isEmpty() && t.remove();
    else {
      const i = n.getListType(), s = Ze(), a = Ue(i);
      s.append(a), e.getPreviousSiblings().forEach((u) => a.append(u));
      const l = Ze(), c = Ue(i);
      l.append(c), $n(c, e.getNextSiblings()), t.insertBefore(s), t.insertAfter(l), t.replace(e);
    }
  }
}
function _E() {
  const e = G();
  if (!L(e) || !e.isCollapsed()) return !1;
  const n = e.anchor.getNode();
  if (!re(n) || n.getChildrenSize() !== 0) return !1;
  const t = ja(n), r = n.getParent();
  X(r) || Xt(40);
  const o = r.getParent();
  let i;
  if (Me(o)) i = me(), t.insertAfter(i);
  else {
    if (!re(o)) return !1;
    i = Ze(), o.insertAfter(i);
  }
  i.setTextStyle(e.style).setTextFormat(e.format).select();
  const s = n.getNextSiblings();
  if (s.length > 0) {
    const a = Ue(r.getListType());
    if (re(i)) {
      const l = Ze();
      l.append(a), i.insertAfter(l);
    } else i.insertAfter(a);
    a.append(...s);
  }
  return (function(a) {
    let l = a;
    for (; l.getNextSibling() == null && l.getPreviousSibling() == null; ) {
      const c = l.getParent();
      if (c == null || !re(c) && !X(c)) break;
      l = c;
    }
    l.remove();
  })(n), !0;
}
function wi(...e) {
  const n = [];
  for (const t of e) if (t && typeof t == "string") for (const [r] of t.matchAll(/\S+/g)) n.push(r);
  return n;
}
let dn = class extends Ye {
  constructor(t = 1, r = void 0, o) {
    super(o);
    F(this, "__value");
    F(this, "__checked");
    this.__value = t === void 0 ? 1 : t, this.__checked = r;
  }
  $config() {
    return this.config("listitem", { $transform: (t) => {
      if (t.__checked == null) return;
      const r = t.getParent();
      X(r) && r.getListType() !== "check" && t.getChecked() != null && t.setChecked(void 0);
    }, extends: Ye, importDOM: { li: () => ({ conversion: SE, priority: 0 }) } });
  }
  afterCloneFrom(t) {
    super.afterCloneFrom(t), this.__value = t.__value, this.__checked = t.__checked;
  }
  createDOM(t) {
    const r = document.createElement("li");
    return this.updateListItemDOM(null, r, t), r;
  }
  updateListItemDOM(t, r, o) {
    (function(a, l, c) {
      const u = l.getParent();
      !X(u) || u.getListType() !== "check" || X(l.getFirstChild()) ? (a.removeAttribute("role"), a.removeAttribute("tabIndex"), a.removeAttribute("aria-checked")) : (a.setAttribute("role", "checkbox"), a.setAttribute("tabIndex", "-1"), c && l.__checked === c.__checked || a.setAttribute("aria-checked", l.getChecked() ? "true" : "false"));
    })(r, this, t), r.value = this.__value, (function(a, l, c) {
      const u = [], d = [], f = l.list, g = f ? f.listitem : void 0;
      let p;
      if (f && f.nested && (p = f.nested.listitem), g !== void 0 && u.push(...wi(g)), f) {
        const h = c.getParent(), m = X(h) && h.getListType() === "check", b = c.getChecked();
        m && !b || d.push(f.listitemUnchecked), m && b || d.push(f.listitemChecked), m && u.push(b ? f.listitemChecked : f.listitemUnchecked);
      }
      if (p !== void 0) {
        const h = wi(p);
        c.getChildren().some((m) => X(m)) ? u.push(...h) : d.push(...h);
      }
      d.length > 0 && ts(a, ...d), u.length > 0 && ct(a, ...u);
    })(r, o.theme, this);
    const i = t ? t.__style : "", s = this.__style;
    i !== s && (s === "" ? r.removeAttribute("style") : r.style.cssText = s), (function(a, l, c) {
      const u = Fu(l.__textStyle);
      for (const d in u) a.style.setProperty(`--listitem-marker-${d}`, u[d]);
      if (c) for (const d in Fu(c.__textStyle)) d in u || a.style.removeProperty(`--listitem-marker-${d}`);
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
      if (P(o) && this.canMergeWith(o)) {
        const i = o.getChildren();
        this.append(...i), o.remove();
      } else super.append(o);
    }
    return this;
  }
  replace(t, r) {
    if (re(t)) return super.replace(t);
    this.setIndent(0);
    const o = this.getParentOrThrow();
    if (!X(o)) return t;
    if (o.__first === this.getKey()) o.insertBefore(t);
    else if (o.__last === this.getKey()) o.insertAfter(t);
    else {
      const i = Ue(o.getListType());
      let s = this.getNextSibling();
      for (; s; ) {
        const a = s;
        s = s.getNextSibling(), i.append(a);
      }
      o.insertAfter(t), t.insertAfter(i);
    }
    return r && (P(t) || Xt(139), this.getChildren().forEach((i) => {
      t.append(i);
    })), this.remove(), o.getChildrenSize() === 0 && o.remove(), t;
  }
  insertAfter(t, r = !0) {
    const o = this.getParentOrThrow();
    if (X(o) || Xt(39), re(t)) return super.insertAfter(t, r);
    const i = this.getNextSiblings();
    if (o.insertAfter(t, r), i.length !== 0) {
      const s = Ue(o.getListType());
      i.forEach((a) => s.append(a)), t.insertAfter(s, r);
    }
    return t;
  }
  remove(t) {
    const r = this.getPreviousSibling(), o = this.getNextSibling();
    super.remove(t), r && o && yt(r) && yt(o) && (Hl(r.getFirstChild(), o.getFirstChild()), o.remove());
  }
  insertNewAfter(t, r = !0) {
    const o = Ze().updateFromJSON(this.exportJSON()).setChecked(!this.getChecked() && void 0);
    return this.insertAfter(o, r), o;
  }
  collapseAtStart(t) {
    const r = me();
    this.getChildren().forEach((a) => r.append(a));
    const o = this.getParentOrThrow(), i = o.getParentOrThrow(), s = re(i);
    if (o.getChildrenSize() === 1) if (s) o.remove(), i.select();
    else {
      o.insertBefore(r), o.remove();
      const a = t.anchor, l = t.focus, c = r.getKey();
      a.type === "element" && a.getNode().is(this) && a.set(c, a.offset, "element"), l.type === "element" && l.getNode().is(this) && l.set(c, l.offset, "element");
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
    return X(o) && (r = o.getListType()), r === "check" ? !!t.__checked : void 0;
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
    for (; re(r); ) r = r.getParentOrThrow().getParentOrThrow(), o++;
    return o;
  }
  setIndent(t) {
    typeof t != "number" && Xt(117), (t = Math.floor(t)) >= 0 || Xt(199);
    let r = this.getIndent();
    for (; r !== t; ) r < t ? (xE(this), r++) : (wE(this), r--);
    return this;
  }
  canInsertAfter(t) {
    return re(t);
  }
  canReplaceWith(t) {
    return re(t);
  }
  canMergeWith(t) {
    return re(t) || po(t);
  }
  extractWithChild(t, r) {
    if (!L(r)) return !1;
    const o = r.anchor.getNode(), i = r.focus.getNode();
    return this.isParentOf(o) && this.isParentOf(i) && this.getTextContent().length === r.getTextContent().length;
  }
  isParentRequired() {
    return !0;
  }
  createParentElementNode() {
    return Ue("bullet");
  }
  canMergeWhenEmpty() {
    return !0;
  }
};
function SE(e) {
  if (e.classList.contains("task-list-item")) {
    for (const t of e.children) if (t.tagName === "INPUT") return od(t);
  }
  if (e.classList.contains("joplin-checkbox")) {
    for (const t of e.children) if (t.classList.contains("checkbox-wrapper") && t.children.length > 0 && t.children[0].tagName === "INPUT") return od(t.children[0]);
  }
  const n = e.getAttribute("aria-checked");
  return { node: Ze(n === "true" || n !== "false" && void 0) };
}
function od(e) {
  return e.getAttribute("type") !== "checkbox" ? { node: null } : { node: Ze(e.hasAttribute("checked")) };
}
function Ze(e) {
  return tt(new dn(void 0, e));
}
function re(e) {
  return e instanceof dn;
}
let Vn = class extends Ye {
  constructor(t = "number", r = 1, o) {
    super(o);
    F(this, "__tag");
    F(this, "__start");
    F(this, "__listType");
    const i = EE[t] || t;
    this.__listType = i, this.__tag = i === "number" ? "ol" : "ul", this.__start = r;
  }
  $config() {
    return this.config("list", { $transform: (t) => {
      (function(r) {
        const o = r.getNextSibling();
        X(o) && r.getListType() === o.getListType() && Hl(r, o);
      })(t), Fh(t);
    }, extends: Ye, importDOM: { ol: () => ({ conversion: sd, priority: 0 }), ul: () => ({ conversion: sd, priority: 0 }) } });
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
    return this.__start !== 1 && i.setAttribute("start", String(this.__start)), i.__lexicalListType = this.__listType, id(i, t.theme, this), i;
  }
  updateDOM(t, r, o) {
    return t.__tag !== this.__tag || t.__listType !== this.__listType || (id(r, o.theme, this), !1);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setListType(t.listType).setStart(t.start);
  }
  exportDOM(t) {
    const r = this.createDOM(t._config, t);
    return _e(r) && (this.__start !== 1 && r.setAttribute("start", String(this.__start)), this.__listType === "check" && r.setAttribute("__lexicalListType", "check")), { element: r };
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
      re(a) || (i === o && (i = [...o]), i[s] = Ze().append(!P(a) || X(a) || a.isInline() ? a : be(a.getTextContent())));
    }
    return super.splice(t, r, i);
  }
  extractWithChild(t) {
    return re(t);
  }
};
function id(e, n, t) {
  const r = [], o = [], i = n.list;
  if (i !== void 0) {
    const s = i[`${t.__tag}Depth`] || [], a = Va(t) - 1, l = a % s.length, c = s[l], u = i[t.__tag];
    let d;
    const f = i.nested, g = i.checklist;
    if (f !== void 0 && f.list && (d = f.list), u !== void 0 && r.push(u), g !== void 0 && t.__listType === "check" && r.push(g), c !== void 0) {
      r.push(...wi(c));
      for (let p = 0; p < s.length; p++) p !== l && o.push(t.__tag + p);
    }
    if (d !== void 0) {
      const p = wi(d);
      a > 1 ? r.push(...p) : o.push(...p);
    }
  }
  o.length > 0 && ts(e, ...o), r.length > 0 && ct(e, ...r);
}
function CE(e) {
  const n = [];
  for (let t = 0; t < e.length; t++) {
    const r = e[t];
    if (re(r)) {
      n.push(r);
      const o = r.getChildren();
      o.length > 1 && o.forEach((i) => {
        X(i) && n.push(td(i));
      });
    } else n.push(td(r));
  }
  return n;
}
function sd(e) {
  const n = e.nodeName.toLowerCase();
  let t = null;
  return n === "ol" ? t = Ue("number", e.start) : n === "ul" && (t = (function(r) {
    if (r.getAttribute("__lexicallisttype") === "check" || r.classList.contains("contains-task-list") || r.getAttribute("data-is-checklist") === "1") return !0;
    for (const o of r.childNodes) if (_e(o) && o.hasAttribute("aria-checked")) return !0;
    return !1;
  })(e) ? Ue("check") : Ue("bullet")), { after: CE, node: t };
}
const EE = { ol: "number", ul: "bullet" };
function Ue(e = "number", n = 1) {
  return tt(new Vn(e, n));
}
function X(e) {
  return e instanceof Vn;
}
const kE = K("UPDATE_LIST_START_COMMAND"), Ph = K("INSERT_UNORDERED_LIST_COMMAND"), NE = K("INSERT_ORDERED_LIST_COMMAND"), RE = K("REMOVE_LIST_COMMAND");
function AE(e) {
  return Vt(e.registerCommand(NE, () => (nd("number"), !0), Qn), e.registerCommand(kE, (n) => {
    const { listNodeKey: t, newStart: r } = n, o = xe(t);
    return !!X(o) && (o.getListType() === "number" && (o.setStart(r), Fh(o)), !0);
  }, Qn), e.registerCommand(Ph, () => (nd("bullet"), !0), Qn), e.registerCommand(RE, () => (vE(), !0), Qn), e.registerCommand(Qr, () => _E(), Qn), e.registerNodeTransform(dn, (n) => {
    const t = n.getFirstChild();
    if (t) {
      if (V(t)) {
        const r = t.getStyle(), o = t.getFormat();
        n.getTextStyle() !== r && n.setTextStyle(r), n.getTextFormat() !== o && n.setTextFormat(o);
      }
    } else {
      const r = G();
      L(r) && (r.style !== n.getTextStyle() || r.format !== n.getTextFormat()) && r.isCollapsed() && n.is(r.anchor.getNode()) && n.setTextStyle(r.style).setTextFormat(r.format);
    }
  }), e.registerNodeTransform(Wt, (n) => {
    const t = n.getParent();
    if (re(t) && n.is(t.getFirstChild())) {
      const r = n.getStyle(), o = n.getFormat();
      r === t.getTextStyle() && o === t.getTextFormat() || t.setTextStyle(r).setTextFormat(o);
    }
  }));
}
function TE(e) {
  const n = (t) => {
    const r = t.getParent();
    if (X(t.getFirstChild()) || !X(r)) return;
    const o = Qe(t, (i) => re(i) && X(i.getParent()) && re(i.getPreviousSibling()));
    if (o === null && t.getIndent() > 0) t.setIndent(0);
    else if (re(o)) {
      const i = o.getPreviousSibling();
      if (re(i)) {
        const s = (function(l) {
          let c = l, u = c.getFirstChild();
          for (; X(u); ) {
            const d = u.getLastChild();
            if (!re(d)) break;
            c = d, u = c.getFirstChild();
          }
          return c;
        })(i), a = s.getParent();
        if (X(a)) {
          const l = Va(a);
          l + 1 < Va(r) && t.setIndent(l);
        }
      }
    }
  };
  return e.registerNodeTransform(Vn, (t) => {
    const r = [t];
    for (; r.length > 0; ) {
      const o = r.shift();
      if (X(o)) {
        for (const i of o.getChildren()) if (re(i)) {
          n(i);
          const s = i.getFirstChild();
          X(s) && r.push(s);
        }
      }
    }
  });
}
function FE({ hasStrictIndent: e = !1 }) {
  const [n] = ft();
  return He(() => {
    if (!n.hasNodes([Vn, dn])) throw new Error("ListPlugin: ListNode and/or ListItemNode not registered on editor");
  }, [n]), He(() => {
    if (e) return TE(n);
  }, [n, e]), (function(t) {
    He(() => AE(t), [t]);
  })(n), null;
}
var ad = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Hs = { exports: {} }, ld;
function PE() {
  return ld || (ld = 1, (function(e) {
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
          encode: function y(v) {
            return v instanceof l ? new l(v.type, y(v.content), v.alias) : Array.isArray(v) ? v.map(y) : v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
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
          clone: function y(v, _) {
            _ = _ || {};
            var S, C;
            switch (a.util.type(v)) {
              case "Object":
                if (C = a.util.objId(v), _[C])
                  return _[C];
                S = /** @type {Record<string, any>} */
                {}, _[C] = S;
                for (var E in v)
                  v.hasOwnProperty(E) && (S[E] = y(v[E], _));
                return (
                  /** @type {any} */
                  S
                );
              case "Array":
                return C = a.util.objId(v), _[C] ? _[C] : (S = [], _[C] = S, /** @type {Array} */
                /** @type {any} */
                v.forEach(function(N, k) {
                  S[k] = y(N, _);
                }), /** @type {any} */
                S);
              default:
                return v;
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
              var v = o.exec(y.className);
              if (v)
                return v[1].toLowerCase();
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
          setLanguage: function(y, v) {
            y.className = y.className.replace(RegExp(o, "gi"), ""), y.classList.add("language-" + v);
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
            } catch (S) {
              var y = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(S.stack) || [])[1];
              if (y) {
                var v = document.getElementsByTagName("script");
                for (var _ in v)
                  if (v[_].src == y)
                    return v[_];
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
          isActive: function(y, v, _) {
            for (var S = "no-" + v; y; ) {
              var C = y.classList;
              if (C.contains(v))
                return !0;
              if (C.contains(S))
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
          extend: function(y, v) {
            var _ = a.util.clone(a.languages[y]);
            for (var S in v)
              _[S] = v[S];
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
          insertBefore: function(y, v, _, S) {
            S = S || /** @type {any} */
            a.languages;
            var C = S[y], E = {};
            for (var N in C)
              if (C.hasOwnProperty(N)) {
                if (N == v)
                  for (var k in _)
                    _.hasOwnProperty(k) && (E[k] = _[k]);
                _.hasOwnProperty(N) || (E[N] = C[N]);
              }
            var R = S[y];
            return S[y] = E, a.languages.DFS(a.languages, function(A, T) {
              T === R && A != y && (this[A] = E);
            }), E;
          },
          // Traverse a language definition with Depth First Search
          DFS: function y(v, _, S, C) {
            C = C || {};
            var E = a.util.objId;
            for (var N in v)
              if (v.hasOwnProperty(N)) {
                _.call(v, N, v[N], S || N);
                var k = v[N], R = a.util.type(k);
                R === "Object" && !C[E(k)] ? (C[E(k)] = !0, y(k, _, null, C)) : R === "Array" && !C[E(k)] && (C[E(k)] = !0, y(k, _, N, C));
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
        highlightAll: function(y, v) {
          a.highlightAllUnder(document, y, v);
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
        highlightAllUnder: function(y, v, _) {
          var S = {
            callback: _,
            container: y,
            selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
          };
          a.hooks.run("before-highlightall", S), S.elements = Array.prototype.slice.apply(S.container.querySelectorAll(S.selector)), a.hooks.run("before-all-elements-highlight", S);
          for (var C = 0, E; E = S.elements[C++]; )
            a.highlightElement(E, v === !0, S.callback);
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
        highlightElement: function(y, v, _) {
          var S = a.util.getLanguage(y), C = a.languages[S];
          a.util.setLanguage(y, S);
          var E = y.parentElement;
          E && E.nodeName.toLowerCase() === "pre" && a.util.setLanguage(E, S);
          var N = y.textContent, k = {
            element: y,
            language: S,
            grammar: C,
            code: N
          };
          function R(T) {
            k.highlightedCode = T, a.hooks.run("before-insert", k), k.element.innerHTML = k.highlightedCode, a.hooks.run("after-highlight", k), a.hooks.run("complete", k), _ && _.call(k.element);
          }
          if (a.hooks.run("before-sanity-check", k), E = k.element.parentElement, E && E.nodeName.toLowerCase() === "pre" && !E.hasAttribute("tabindex") && E.setAttribute("tabindex", "0"), !k.code) {
            a.hooks.run("complete", k), _ && _.call(k.element);
            return;
          }
          if (a.hooks.run("before-highlight", k), !k.grammar) {
            R(a.util.encode(k.code));
            return;
          }
          if (v && r.Worker) {
            var A = new Worker(a.filename);
            A.onmessage = function(T) {
              R(T.data);
            }, A.postMessage(JSON.stringify({
              language: k.language,
              code: k.code,
              immediateClose: !0
            }));
          } else
            R(a.highlight(k.code, k.grammar, k.language));
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
        highlight: function(y, v, _) {
          var S = {
            code: y,
            grammar: v,
            language: _
          };
          if (a.hooks.run("before-tokenize", S), !S.grammar)
            throw new Error('The language "' + S.language + '" has no grammar.');
          return S.tokens = a.tokenize(S.code, S.grammar), a.hooks.run("after-tokenize", S), l.stringify(a.util.encode(S.tokens), S.language);
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
        tokenize: function(y, v) {
          var _ = v.rest;
          if (_) {
            for (var S in _)
              v[S] = _[S];
            delete v.rest;
          }
          var C = new d();
          return f(C, C.head, y), u(y, C, v, C.head, 0), p(C);
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
          add: function(y, v) {
            var _ = a.hooks.all;
            _[y] = _[y] || [], _[y].push(v);
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
          run: function(y, v) {
            var _ = a.hooks.all[y];
            if (!(!_ || !_.length))
              for (var S = 0, C; C = _[S++]; )
                C(v);
          }
        },
        Token: l
      };
      r.Prism = a;
      function l(y, v, _, S) {
        this.type = y, this.content = v, this.alias = _, this.length = (S || "").length | 0;
      }
      l.stringify = function y(v, _) {
        if (typeof v == "string")
          return v;
        if (Array.isArray(v)) {
          var S = "";
          return v.forEach(function(R) {
            S += y(R, _);
          }), S;
        }
        var C = {
          type: v.type,
          content: y(v.content, _),
          tag: "span",
          classes: ["token", v.type],
          attributes: {},
          language: _
        }, E = v.alias;
        E && (Array.isArray(E) ? Array.prototype.push.apply(C.classes, E) : C.classes.push(E)), a.hooks.run("wrap", C);
        var N = "";
        for (var k in C.attributes)
          N += " " + k + '="' + (C.attributes[k] || "").replace(/"/g, "&quot;") + '"';
        return "<" + C.tag + ' class="' + C.classes.join(" ") + '"' + N + ">" + C.content + "</" + C.tag + ">";
      };
      function c(y, v, _, S) {
        y.lastIndex = v;
        var C = y.exec(_);
        if (C && S && C[1]) {
          var E = C[1].length;
          C.index += E, C[0] = C[0].slice(E);
        }
        return C;
      }
      function u(y, v, _, S, C, E) {
        for (var N in _)
          if (!(!_.hasOwnProperty(N) || !_[N])) {
            var k = _[N];
            k = Array.isArray(k) ? k : [k];
            for (var R = 0; R < k.length; ++R) {
              if (E && E.cause == N + "," + R)
                return;
              var A = k[R], T = A.inside, D = !!A.lookbehind, O = !!A.greedy, B = A.alias;
              if (O && !A.pattern.global) {
                var W = A.pattern.toString().match(/[imsuy]*$/)[0];
                A.pattern = RegExp(A.pattern.source, W + "g");
              }
              for (var U = A.pattern || A, j = S.next, q = C; j !== v.tail && !(E && q >= E.reach); q += j.value.length, j = j.next) {
                var te = j.value;
                if (v.length > y.length)
                  return;
                if (!(te instanceof l)) {
                  var ie = 1, he;
                  if (O) {
                    if (he = c(U, q, y, D), !he || he.index >= y.length)
                      break;
                    var Ce = he.index, ze = he.index + he[0].length, Se = q;
                    for (Se += j.value.length; Ce >= Se; )
                      j = j.next, Se += j.value.length;
                    if (Se -= j.value.length, q = Se, j.value instanceof l)
                      continue;
                    for (var De = j; De !== v.tail && (Se < ze || typeof De.value == "string"); De = De.next)
                      ie++, Se += De.value.length;
                    ie--, te = y.slice(q, Se), he.index -= q;
                  } else if (he = c(U, 0, te, D), !he)
                    continue;
                  var Ce = he.index, Pe = he[0], Be = te.slice(0, Ce), Ve = te.slice(Ce + Pe.length), Rt = q + te.length;
                  E && Rt > E.reach && (E.reach = Rt);
                  var gn = j.prev;
                  Be && (gn = f(v, gn, Be), q += Be.length), g(v, gn, ie);
                  var xo = new l(N, T ? a.tokenize(Pe, T) : Pe, B, Pe);
                  if (j = f(v, gn, xo), Ve && f(v, j, Ve), ie > 1) {
                    var At = {
                      cause: N + "," + R,
                      reach: Rt
                    };
                    u(y, v, _, j.prev, q, At), E && At.reach > E.reach && (E.reach = At.reach);
                  }
                }
              }
            }
          }
      }
      function d() {
        var y = { value: null, prev: null, next: null }, v = { value: null, prev: y, next: null };
        y.next = v, this.head = y, this.tail = v, this.length = 0;
      }
      function f(y, v, _) {
        var S = v.next, C = { value: _, prev: v, next: S };
        return v.next = C, S.prev = C, y.length++, C;
      }
      function g(y, v, _) {
        for (var S = v.next, C = 0; C < _ && S !== y.tail; C++)
          S = S.next;
        v.next = S, S.prev = v, y.length -= C;
      }
      function p(y) {
        for (var v = [], _ = y.head.next; _ !== y.tail; )
          v.push(_.value), _ = _.next;
        return v;
      }
      if (!r.document)
        return r.addEventListener && (a.disableWorkerMessageHandler || r.addEventListener("message", function(y) {
          var v = JSON.parse(y.data), _ = v.language, S = v.code, C = v.immediateClose;
          r.postMessage(a.highlight(S, a.languages[_], _)), C && r.close();
        }, !1)), a;
      var h = a.util.currentScript();
      h && (a.filename = h.src, h.hasAttribute("data-manual") && (a.manual = !0));
      function m() {
        a.manual || a.highlightAll();
      }
      if (!a.manual) {
        var b = document.readyState;
        b === "loading" || b === "interactive" && h && h.defer ? document.addEventListener("DOMContentLoaded", m) : window.requestAnimationFrame ? window.requestAnimationFrame(m) : window.setTimeout(m, 16);
      }
      return a;
    })(n);
    e.exports && (e.exports = t), typeof ad < "u" && (ad.Prism = t), t.languages.markup = {
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
      }, a = "data-src-status", l = "loading", c = "loaded", u = "failed", d = "pre[data-src]:not([" + a + '="' + c + '"]):not([' + a + '="' + l + '"])';
      function f(h, m, b) {
        var y = new XMLHttpRequest();
        y.open("GET", h, !0), y.onreadystatechange = function() {
          y.readyState == 4 && (y.status < 400 && y.responseText ? m(y.responseText) : y.status >= 400 ? b(o(y.status, y.statusText)) : b(i));
        }, y.send(null);
      }
      function g(h) {
        var m = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(h || "");
        if (m) {
          var b = Number(m[1]), y = m[2], v = m[3];
          return y ? v ? [b, Number(v)] : [b, void 0] : [b, b];
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
          var b = m.appendChild(document.createElement("CODE"));
          b.textContent = r;
          var y = m.getAttribute("data-src"), v = h.language;
          if (v === "none") {
            var _ = (/\.(\w+)$/.exec(y) || [, "none"])[1];
            v = s[_] || _;
          }
          t.util.setLanguage(b, v), t.util.setLanguage(m, v);
          var S = t.plugins.autoloader;
          S && S.loadLanguages(v), f(
            y,
            function(C) {
              m.setAttribute(a, c);
              var E = g(m.getAttribute("data-range"));
              if (E) {
                var N = C.split(/\r\n?|\n/g), k = E[0], R = E[1] == null ? N.length : E[1];
                k < 0 && (k += N.length), k = Math.max(0, Math.min(k - 1, N.length)), R < 0 && (R += N.length), R = Math.max(0, Math.min(R, N.length)), C = N.slice(k, R).join(`
`), m.hasAttribute("data-start") || m.setAttribute("data-start", String(k + 1));
              }
              b.textContent = C, t.highlightElement(b);
            },
            function(C) {
              m.setAttribute(a, u), b.textContent = C;
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
          for (var b = (m || document).querySelectorAll(d), y = 0, v; v = b[y++]; )
            t.highlightElement(v);
        }
      };
      var p = !1;
      t.fileHighlight = function() {
        p || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), p = !0), t.plugins.fileHighlight.highlight.apply(this, arguments);
      };
    })();
  })(Hs)), Hs.exports;
}
PE();
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
  function t(u) {
    return u = u.replace(/<inner>/g, function() {
      return n;
    }), RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + u + ")");
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
  }), ["url", "bold", "italic", "strike"].forEach(function(u) {
    ["url", "bold", "italic", "strike", "code-snippet"].forEach(function(d) {
      u !== d && (e.languages.markdown[u].inside.content.inside[d] = e.languages.markdown[d]);
    });
  }), e.hooks.add("after-tokenize", function(u) {
    if (u.language !== "markdown" && u.language !== "md")
      return;
    function d(f) {
      if (!(!f || typeof f == "string"))
        for (var g = 0, p = f.length; g < p; g++) {
          var h = f[g];
          if (h.type !== "code") {
            d(h.content);
            continue;
          }
          var m = h.content[1], b = h.content[3];
          if (m && b && m.type === "code-language" && b.type === "code-block" && typeof m.content == "string") {
            var y = m.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp");
            y = (/[a-z][\w-]*/i.exec(y) || [""])[0].toLowerCase();
            var v = "language-" + y;
            b.alias ? typeof b.alias == "string" ? b.alias = [b.alias, v] : b.alias.push(v) : b.alias = [v];
          }
        }
    }
    d(u.tokens);
  }), e.hooks.add("wrap", function(u) {
    if (u.type === "code-block") {
      for (var d = "", f = 0, g = u.classes.length; f < g; f++) {
        var p = u.classes[f], h = /language-(.+)/.exec(p);
        if (h) {
          d = h[1];
          break;
        }
      }
      var m = e.languages[d];
      if (m)
        u.content = e.highlight(c(u.content), m, d);
      else if (d && d !== "none" && e.plugins.autoloader) {
        var b = "md-" + (/* @__PURE__ */ new Date()).valueOf() + "-" + Math.floor(Math.random() * 1e16);
        u.attributes.id = b, e.plugins.autoloader.loadLanguages(d, function() {
          var y = document.getElementById(b);
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
  function c(u) {
    var d = u.replace(s, "");
    return d = d.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function(f, g) {
      if (g = g.toLowerCase(), g[0] === "#") {
        var p;
        return g[1] === "x" ? p = parseInt(g.slice(2), 16) : p = Number(g.slice(1)), l(p);
      } else {
        var h = a[g];
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
var cd = {}, ud;
function IE() {
  return ud || (ud = 1, Prism.languages.python = {
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
  }, Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest = Prism.languages.python, Prism.languages.py = Prism.languages.python), cd;
}
IE();
var dd = {}, fd;
function OE() {
  return fd || (fd = 1, (function(e) {
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
  })(Prism)), dd;
}
OE();
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
var gd = {}, pd;
function $E() {
  return pd || (pd = 1, (function(e) {
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
  })(Prism)), gd;
}
$E();
var hd = {}, md;
function ME() {
  return md || (md = 1, (function(e) {
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
  })(Prism)), hd;
}
ME();
var yd = {}, bd;
function DE() {
  return bd || (bd = 1, (function(e) {
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
  })(Prism)), yd;
}
DE();
function Ih(e, n) {
  for (const t of e.childNodes) {
    if (_e(t) && t.tagName === n) return !0;
    Ih(t, n);
  }
  return !1;
}
const Ur = "data-language", Br = "data-highlight-language", Mo = "data-theme";
let ss = class Oh extends Ye {
  constructor(t, r) {
    super(r);
    F(this, "__language");
    F(this, "__theme");
    F(this, "__isSyntaxHighlightSupported");
    this.__language = t || void 0, this.__isSyntaxHighlightSupported = !1, this.__theme = void 0;
  }
  static getType() {
    return "code";
  }
  static clone(t) {
    return new Oh(t.__language, t.__key);
  }
  afterCloneFrom(t) {
    super.afterCloneFrom(t), this.__language = t.__language, this.__theme = t.__theme, this.__isSyntaxHighlightSupported = t.__isSyntaxHighlightSupported;
  }
  createDOM(t) {
    const r = document.createElement("code");
    ct(r, t.theme.code), r.setAttribute("spellcheck", "false");
    const o = this.getLanguage();
    o && (r.setAttribute(Ur, o), this.getIsSyntaxHighlightSupported() && r.setAttribute(Br, o));
    const i = this.getTheme();
    i && r.setAttribute(Mo, i);
    const s = this.getStyle();
    return s && r.setAttribute("style", s), r;
  }
  updateDOM(t, r, o) {
    const i = this.__language, s = t.__language;
    i ? i !== s && r.setAttribute(Ur, i) : s && r.removeAttribute(Ur);
    const a = this.__isSyntaxHighlightSupported;
    t.__isSyntaxHighlightSupported && s ? a && i ? i !== s && r.setAttribute(Br, i) : r.removeAttribute(Br) : a && i && r.setAttribute(Br, i);
    const l = this.__theme, c = t.__theme;
    l ? l !== c && r.setAttribute(Mo, l) : c && r.removeAttribute(Mo);
    const u = this.__style, d = t.__style;
    return u ? u !== d && r.setAttribute("style", u) : d && r.removeAttribute("style"), !1;
  }
  exportDOM(t) {
    const r = document.createElement("pre");
    ct(r, t._config.theme.code), r.setAttribute("spellcheck", "false");
    const o = this.getLanguage();
    o && (r.setAttribute(Ur, o), this.getIsSyntaxHighlightSupported() && r.setAttribute(Br, o));
    const i = this.getTheme();
    i && r.setAttribute(Mo, i);
    const s = this.getStyle();
    return s && r.setAttribute("style", s), { element: r };
  }
  static importDOM() {
    return { code: (t) => t.textContent != null && (/\r?\n/.test(t.textContent) || Ih(t, "BR")) ? { conversion: vd, priority: 1 } : null, div: () => ({ conversion: LE, priority: 1 }), pre: () => ({ conversion: vd, priority: 0 }), table: (t) => Ks(t) ? { conversion: zE, priority: 3 } : null, td: (t) => {
      const r = t, o = r.closest("table");
      return r.classList.contains("js-file-line") || o && Ks(o) ? { conversion: xd, priority: 3 } : null;
    }, tr: (t) => {
      const r = t.closest("table");
      return r && Ks(r) ? { conversion: xd, priority: 3 } : null;
    } };
  }
  static importJSON(t) {
    return Lt().updateFromJSON(t);
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
      const c = me();
      return this.insertAfter(c, r), c;
    }
    const { anchor: s, focus: a } = t, l = (s.isBefore(a) ? s : a).getNode();
    if (V(l)) {
      let c = VE(l);
      const u = [];
      for (; ; ) if (Hi(c)) u.push(kr()), c = c.getNextSibling();
      else {
        if (!Dh(c)) break;
        {
          let b = 0;
          const y = c.getTextContent(), v = c.getTextContentSize();
          for (; b < v && y[b] === " "; ) b++;
          if (b !== 0 && u.push(Mh(" ".repeat(b))), b !== v) break;
          c = c.getNextSibling();
        }
      }
      const d = l.splitText(s.offset)[0], f = s.offset === 0 ? 0 : 1, g = d.getIndexWithinParent() + f, p = l.getParentOrThrow(), h = [at(), ...u];
      p.splice(g, 0, h);
      const m = u[u.length - 1];
      m ? m.select() : s.offset === 0 ? d.selectPrevious() : d.getNextSibling().selectNext(0, 0);
    }
    if (Kl(l)) {
      const { offset: c } = t.anchor;
      l.splice(c, 0, [at()]), l.select(c + 1, c + 1);
    }
    return null;
  }
  canIndent() {
    return !1;
  }
  collapseAtStart() {
    const t = me();
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
function Lt(e, n) {
  return qp(ss).setLanguage(e).setTheme(n);
}
function Kl(e) {
  return e instanceof ss;
}
function vd(e) {
  return { node: Lt(e.getAttribute(Ur)) };
}
function LE(e) {
  const n = e, t = wd(n);
  return t || (function(r) {
    let o = r.parentElement;
    for (; o !== null; ) {
      if (wd(o)) return !0;
      o = o.parentElement;
    }
    return !1;
  })(n) ? { node: t ? Lt() : null } : { node: null };
}
function zE() {
  return { node: Lt() };
}
function xd() {
  return { node: null };
}
function wd(e) {
  return e.style.fontFamily.match("monospace") !== null;
}
function Ks(e) {
  return e.classList.contains("js-file-line-container");
}
let ql = class $h extends Wt {
  constructor(t = "", r, o) {
    super(t, o);
    F(this, "__highlightType");
    this.__highlightType = r;
  }
  static getType() {
    return "code-highlight";
  }
  static clone(t) {
    return new $h(t.__text, t.__highlightType || void 0, t.__key);
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
    const r = super.createDOM(t), o = qs(t.theme, this.__highlightType);
    return ct(r, o), r;
  }
  updateDOM(t, r, o) {
    const i = super.updateDOM(t, r, o), s = qs(o.theme, t.__highlightType), a = qs(o.theme, this.__highlightType);
    return s !== a && (s && ts(r, s), a && ct(r, a)), i;
  }
  static importJSON(t) {
    return Mh().updateFromJSON(t);
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
    return Lt();
  }
};
function qs(e, n) {
  return n && e && e.codeHighlight && e.codeHighlight[n];
}
function Mh(e = "", n) {
  return tt(new ql(e, n));
}
function Dh(e) {
  return e instanceof ql;
}
function BE(e, n) {
  let t = e;
  for (let r = Te(e, n); r && (Dh(r.origin) || Hi(r.origin)); r = hC(r)) t = r.origin;
  return t;
}
function VE(e) {
  return BE(e, "previous");
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
const jE = /* @__PURE__ */ new Set(["http:", "https:", "mailto:", "sms:", "tel:"]);
class jn extends Ye {
  constructor(t = "", r = {}, o) {
    super(o);
    F(this, "__url");
    F(this, "__target");
    F(this, "__rel");
    F(this, "__title");
    const { target: i = null, rel: s = null, title: a = null } = r;
    this.__url = t, this.__target = i, this.__rel = s, this.__title = a;
  }
  static getType() {
    return "link";
  }
  static clone(t) {
    return new jn(t.__url, { rel: t.__rel, target: t.__target, title: t.__title }, t.__key);
  }
  createDOM(t) {
    const r = document.createElement("a");
    return this.updateLinkDOM(null, r, t), ct(r, t.theme.link), r;
  }
  updateLinkDOM(t, r, o) {
    if (Hp(r)) {
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
    return { a: (t) => ({ conversion: UE, priority: 1 }) };
  }
  static importJSON(t) {
    return _i().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setURL(t.url).setRel(t.rel || null).setTarget(t.target || null).setTitle(t.title || null);
  }
  sanitizeUrl(t) {
    t = Sd(t);
    try {
      const r = new URL(Sd(t));
      if (!jE.has(r.protocol)) return "about:blank";
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
    const o = _i(this.__url, { rel: this.__rel, target: this.__target, title: this.__title });
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
    if (!L(r)) return !1;
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
function UE(e) {
  let n = null;
  if (Hp(e)) {
    const t = e.textContent;
    (t !== null && t !== "" || e.children.length > 0) && (n = _i(e.getAttribute("href") || "", { rel: e.getAttribute("rel"), target: e.getAttribute("target"), title: e.getAttribute("title") }));
  }
  return { node: n };
}
function _i(e = "", n) {
  return tt(new jn(e, n));
}
function GE(e) {
  return e instanceof jn;
}
class as extends jn {
  constructor(t = "", r = {}, o) {
    super(t, r, o);
    F(this, "__isUnlinked");
    this.__isUnlinked = r.isUnlinked !== void 0 && r.isUnlinked !== null && r.isUnlinked;
  }
  static getType() {
    return "autolink";
  }
  static clone(t) {
    return new as(t.__url, { isUnlinked: t.__isUnlinked, rel: t.__rel, target: t.__target, title: t.__title }, t.__key);
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
    return _d().updateFromJSON(t);
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
    if (P(o)) {
      const i = _d(this.__url, { isUnlinked: this.__isUnlinked, rel: this.__rel, target: this.__target, title: this.__title });
      return o.append(i), i;
    }
    return null;
  }
}
function _d(e = "", n) {
  return tt(new as(e, n));
}
function WE(e) {
  return e instanceof as;
}
const HE = /^\+?[0-9\s()-]{5,}$/;
function Sd(e) {
  return e.match(/^[a-z][a-z0-9+.-]*:/i) || e.match(/^[/#.]/) ? e : e.includes("@") ? `mailto:${e}` : HE.test(e) ? `tel:${e}` : `https://${e}`;
}
function Ua(e, n) {
  const t = {};
  for (const r of e) {
    const o = n(r);
    o && (t[o] ? t[o].push(r) : t[o] = [r]);
  }
  return t;
}
function Yl(e) {
  const n = Ua(e, (t) => t.type);
  return { element: n.element || [], multilineElement: n["multiline-element"] || [], textFormat: n["text-format"] || [], textMatch: n["text-match"] || [] };
}
const Si = /[!-/:-@[-`{-~\s]/, KE = /^\s{0,3}$/;
function Ga(e) {
  if (!po(e)) return !1;
  const n = e.getFirstChild();
  return n == null || e.getChildrenSize() === 1 && V(n) && KE.test(n.getTextContent());
}
function qE(e, n, t, r) {
  for (const o of n) {
    if (!o.export) continue;
    const i = o.export(e, (s) => Ci(s, t, r));
    if (i != null) return i;
  }
  return P(e) ? Ci(e, t, r) : ne(e) ? e.getTextContent() : null;
}
function Ci(e, n, t, r, o) {
  const i = [], s = e.getChildren();
  r || (r = []), o || (o = []);
  e: for (const a of s) {
    for (const l of t) {
      if (!l.export) continue;
      const c = l.export(a, (u) => Ci(u, n, t, r, [...o, ...r]), (u, d) => Cd(u, d, n, r, o));
      if (c != null) {
        i.push(c);
        continue e;
      }
    }
    Qt(a) ? i.push(`
`) : V(a) ? i.push(Cd(a, a.getTextContent(), n, r, o)) : P(a) ? i.push(Ci(a, n, t, r, o)) : ne(a) && i.push(a.getTextContent());
  }
  return i.join("");
}
function Cd(e, n, t, r, o) {
  let i = e.getFormat() === 0 ? n : (function(f) {
    return f.replace(/^\s+|\s+$/g, (g) => [...g].map((p) => "&#" + p.codePointAt(0) + ";").join(""));
  })(n);
  e.hasFormat("code") || (i = i.replace(/([*_`~\\])/g, "\\$1"));
  let s = "", a = "", l = "";
  const c = Ed(e, !0), u = Ed(e, !1), d = /* @__PURE__ */ new Set();
  for (const f of t) {
    const g = f.format[0], p = f.tag;
    Do(e, g) && !d.has(g) && (d.add(g), Do(c, g) && r.find((h) => h.tag === p) || (r.push({ format: g, tag: p }), s += p));
  }
  for (let f = 0; f < r.length; f++) {
    const g = Do(e, r[f].format), p = Do(u, r[f].format);
    if (g && p) continue;
    const h = [...r];
    for (; h.length > f; ) {
      const m = h.pop();
      o && m && o.find((b) => b.tag === m.tag) || (m && typeof m.tag == "string" && (g ? p || (l += m.tag) : a += m.tag), r.pop());
    }
    break;
  }
  return i = s + i + l, a + i;
}
function Ed(e, n) {
  let t = n ? e.getPreviousSibling() : e.getNextSibling();
  if (!t) {
    const r = e.getParentOrThrow();
    r.isInline() && (t = n ? r.getPreviousSibling() : r.getNextSibling());
  }
  for (; t; ) {
    if (P(t)) {
      if (!t.isInline()) break;
      const r = n ? t.getLastDescendant() : t.getFirstDescendant();
      if (V(r)) return r;
      t = n ? t.getPreviousSibling() : t.getNextSibling();
    }
    if (V(t)) return t;
    if (!P(t)) return null;
  }
  return null;
}
function Do(e, n) {
  return V(e) && e.hasFormat(n);
}
function YE(e, n) {
  const t = (function(o, i) {
    const s = o.match(i.openTagsRegExp);
    if (s == null) return null;
    for (const a of s) {
      const l = a.replace(/^\s/, ""), c = i.fullMatchRegExpByTag[l];
      if (c == null) continue;
      const u = o.match(c), d = i.transformersByTag[l];
      if (u != null && d != null) {
        if (d.intraword !== !1) return u;
        const { index: f = 0 } = u, g = o[f - 1], p = o[f + u[0].length];
        if ((!g || Si.test(g)) && (!p || Si.test(p))) return u;
      }
    }
    return null;
  })(e.getTextContent(), n);
  if (!t) return null;
  const r = t.index || 0;
  return { endIndex: r + t[0].length, match: t, startIndex: r, transformer: n.transformersByTag[t[1]] };
}
function mn(e) {
  return V(e) && !e.hasFormat("code");
}
function yn(e, n, t) {
  let r = YE(e, n), o = (function(s, a) {
    const l = s;
    let c, u, d, f;
    for (const g of a) {
      if (!g.replace || !g.importRegExp) continue;
      const p = l.getTextContent().match(g.importRegExp);
      if (!p) continue;
      const h = p.index || 0, m = g.getEndIndex ? g.getEndIndex(l, p) : h + p[0].length;
      m !== !1 && (c === void 0 || u === void 0 || h < c && (m > u || m <= c)) && (c = h, u = m, d = g, f = p);
    }
    return c === void 0 || u === void 0 || d === void 0 || f === void 0 ? null : { endIndex: u, match: f, startIndex: c, transformer: d };
  })(e, t);
  if (r && o && (r.startIndex <= o.startIndex && r.endIndex >= o.endIndex || o.startIndex > r.endIndex ? o = null : r = null), r) {
    const s = (function(a, l, c, u, d) {
      const f = a.getTextContent();
      let g, p, h;
      if (d[0] === f ? g = a : l === 0 ? [g, p] = a.splitText(c) : [h, g, p] = a.splitText(l, c), g.setTextContent(d[2]), u) for (const m of u.format) g.hasFormat(m) || g.toggleFormat(m);
      return { nodeAfter: p, nodeBefore: h, transformedNode: g };
    })(e, r.startIndex, r.endIndex, r.transformer, r.match);
    mn(s.nodeAfter) && yn(s.nodeAfter, n, t), mn(s.nodeBefore) && yn(s.nodeBefore, n, t), mn(s.transformedNode) && yn(s.transformedNode, n, t);
  } else if (o) {
    const s = (function(a, l, c, u, d) {
      let f, g, p;
      return l === 0 ? [f, g] = a.splitText(c) : [p, f, g] = a.splitText(l, c), u.replace ? { nodeAfter: g, nodeBefore: p, transformedNode: u.replace(f, d) || void 0 } : null;
    })(e, o.startIndex, o.endIndex, o.transformer, o.match);
    if (!s) return;
    mn(s.nodeAfter) && yn(s.nodeAfter, n, t), mn(s.nodeBefore) && yn(s.nodeBefore, n, t), mn(s.transformedNode) && yn(s.transformedNode, n, t);
  }
  const i = e.getTextContent().replace(/\\([*_`~\\])/g, "$1").replace(/&#(\d+);/g, (s, a) => String.fromCodePoint(a));
  e.setTextContent(i);
}
function ZE(e, n = !1) {
  const t = Yl(e), r = (function(o) {
    const i = {}, s = {}, a = [], l = "(?<![\\\\])";
    for (const c of o) {
      const { tag: u } = c;
      i[u] = c;
      const d = u.replace(/(\*|\^|\+)/g, "\\$1");
      a.push(d), u.length === 1 ? s[u] = u === "`" ? new RegExp("(?<![\\\\`])(`)((?:\\\\`|[^`])+?)(`)(?!`)") : new RegExp(`(?<![\\\\${d}])(${d})((\\\\${d})?.*?[^${d}\\s](\\\\${d})?)((?<!\\\\)|(?<=\\\\\\\\))(${d})(?![\\\\${d}])`) : s[u] = new RegExp(`(?<!\\\\)(${d})((\\\\${d})?.*?[^\\s](\\\\${d})?)((?<!\\\\)|(?<=\\\\\\\\))(${d})(?!\\\\)`);
    }
    return { fullMatchRegExpByTag: s, openTagsRegExp: new RegExp(`${l}(${a.join("|")})`, "g"), transformersByTag: i };
  })(t.textFormat);
  return (o, i) => {
    const s = o.split(`
`), a = s.length, l = i || ye();
    l.clear();
    for (let u = 0; u < a; u++) {
      const d = s[u], [f, g] = JE(s, u, t.multilineElement, l);
      f ? u = g : XE(d, l, t.element, r, t.textMatch, n);
    }
    const c = l.getChildren();
    for (const u of c) !n && Ga(u) && l.getChildrenSize() > 1 && u.remove();
    G() !== null && l.selectStart();
  };
}
function JE(e, n, t, r) {
  for (const o of t) {
    const { handleImportAfterStartMatch: i, regExpEnd: s, regExpStart: a, replace: l } = o, c = e[n].match(a);
    if (!c) continue;
    if (i) {
      const p = i({ lines: e, rootNode: r, startLineIndex: n, startMatch: c, transformer: o });
      if (p === null) continue;
      if (p) return p;
    }
    const u = typeof s == "object" && "regExp" in s ? s.regExp : s, d = s && typeof s == "object" && "optional" in s ? s.optional : !s;
    let f = n;
    const g = e.length;
    for (; f < g; ) {
      const p = u ? e[f].match(u) : null;
      if (!p && (!d || d && f < g - 1)) {
        f++;
        continue;
      }
      if (p && n === f && p.index === c.index) {
        f++;
        continue;
      }
      const h = [];
      if (p && n === f) h.push(e[n].slice(c[0].length, -p[0].length));
      else for (let m = n; m <= f; m++) if (m === n) {
        const b = e[m].slice(c[0].length);
        h.push(b);
      } else if (m === f && p) {
        const b = e[m].slice(0, -p[0].length);
        h.push(b);
      } else h.push(e[m]);
      if (l(r, null, c, p, h, !0) !== !1) return [!0, f];
      break;
    }
  }
  return [!1, n];
}
function XE(e, n, t, r, o, i) {
  const s = be(e), a = me();
  a.append(s), n.append(a);
  for (const { regExp: l, replace: c } of t) {
    const u = e.match(l);
    if (u && (s.setTextContent(e.slice(u[0].length)), c(a, [s], u, !0) !== !1)) break;
  }
  if (yn(s, r, o), a.isAttached() && e.length > 0) {
    const l = a.getPreviousSibling();
    if (!i && (po(l) || Ba(l) || X(l))) {
      let c = l;
      if (X(l)) {
        const u = l.getLastDescendant();
        c = u == null ? null : Qe(u, re);
      }
      c != null && c.getTextContentSize() > 0 && (c.splice(c.getChildrenSize(), 0, [at(), ...a.getChildren()]), a.remove());
    }
  }
}
function QE(e, ...n) {
  const t = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", e);
  for (const o of n) r.append("v", o);
  throw t.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
const Lh = /^(\s*)(\d{1,})\.\s/, zh = /^(\s*)[-*+]\s/, ek = /^(\s*)(?:[-*+]\s)?\s?(\[(\s|x)?\])\s/i, Wa = /^(#{1,6})\s/, Bh = /^>\s/, Vh = /^[ \t]*```([\w-]+)?/, Ha = /[ \t]*```$/, tk = /^[ \t]*```[^`]+(?:(?:`{1,2}|`{4,})[^`]+)*```(?:[^`]|$)/, nk = /^(?:\|)(.+)(?:\|)\s?$/, rk = /^(\| ?:?-*:? ?)+\|\s?$/, kd = /^<[a-z_][\w-]*(?:\s[^<>]*)?\/?>/i, Nd = /^<\/[a-z_][\w-]*\s*>/i, Rd = (e) => new RegExp(`(?:${e.source})$`, e.flags), Gr = B_("mdListMarker", { parse: (e) => typeof e == "string" && /^[-*+]$/.test(e) ? e : "-" }), jh = (e) => (n, t, r, o) => {
  const i = e(r);
  i.append(...t), n.replace(i), o || i.select(0, 0);
}, Uh = (e) => (n, t, r, o) => {
  const i = n.getPreviousSibling(), s = n.getNextSibling(), a = Ze(e === "check" ? r[3] === "x" : void 0), l = r[0].trim()[0], c = e !== "bullet" && e !== "check" || l !== Gr.parse(l) ? void 0 : l;
  if (X(s) && s.getListType() === e) {
    c && As(s, Gr, c);
    const d = s.getFirstChild();
    d !== null ? d.insertBefore(a) : s.append(a), n.remove();
  } else if (X(i) && i.getListType() === e) c && As(i, Gr, c), i.append(a), n.remove();
  else {
    const d = Ue(e, e === "number" ? Number(r[2]) : void 0);
    c && As(d, Gr, c), d.append(a), n.replace(d);
  }
  a.append(...t), o || a.select(0, 0);
  const u = (function(d) {
    const f = d.match(/\t/g), g = d.match(/ /g);
    let p = 0;
    return f && (p += f.length), g && (p += Math.floor(g.length / 4)), p;
  })(r[1]);
  u && a.setIndent(u);
}, Zl = (e, n, t) => {
  const r = [], o = e.getChildren();
  let i = 0;
  for (const s of o) if (re(s)) {
    if (s.getChildrenSize() === 1) {
      const d = s.getFirstChild();
      if (X(d)) {
        r.push(Zl(d, n, t + 1));
        continue;
      }
    }
    const a = " ".repeat(4 * t), l = e.getListType(), c = Lg(e, Gr), u = l === "number" ? `${e.getStart() + i}. ` : l === "check" ? `${c} [${s.getChecked() ? "x" : " "}] ` : c + " ";
    r.push(a + u + n(s)), i++;
  }
  return r.join(`
`);
}, ok = { dependencies: [is], export: (e, n) => {
  if (!eE(e)) return null;
  const t = Number(e.getTag().slice(1));
  return "#".repeat(t) + " " + n(e);
}, regExp: Wa, replace: jh((e) => {
  const n = "h" + e[1].length;
  return xn(n);
}), type: "element" }, ik = { dependencies: [rs], export: (e, n) => {
  if (!Ba(e)) return null;
  const t = n(e).split(`
`), r = [];
  for (const o of t) r.push("> " + o);
  return r.join(`
`);
}, regExp: Bh, replace: (e, n, t, r) => {
  if (r) {
    const i = e.getPreviousSibling();
    if (Ba(i)) return i.splice(i.getChildrenSize(), 0, [at(), ...n]), void e.remove();
  }
  const o = os();
  o.append(...n), e.replace(o), r || o.select(0, 0);
}, type: "element" }, sk = { dependencies: [ss], export: (e) => {
  if (!Kl(e)) return null;
  const n = e.getTextContent();
  return "```" + (e.getLanguage() || "") + (n ? `
` + n : "") + "\n```";
}, regExpEnd: { optional: !0, regExp: Ha }, regExpStart: Vh, replace: (e, n, t, r, o, i) => {
  let s, a;
  if (!n && o) {
    if (o.length === 1) r ? (s = Lt(), a = t[1] + o[0]) : (s = Lt(t[1]), a = o[0].startsWith(" ") ? o[0].slice(1) : o[0]);
    else {
      if (s = Lt(t[1]), o[0].trim().length === 0) for (; o.length > 0 && !o[0].length; ) o.shift();
      else o[0] = o[0].startsWith(" ") ? o[0].slice(1) : o[0];
      for (; o.length > 0 && !o[o.length - 1].length; ) o.pop();
      a = o.join(`
`);
    }
    const l = be(a);
    s.append(l), e.append(s);
  } else n && jh((l) => Lt(l ? l[1] : void 0))(e, n, t, i);
}, type: "multiline-element" }, ak = { dependencies: [Vn, dn], export: (e, n) => X(e) ? Zl(e, n, 0) : null, regExp: zh, replace: Uh("bullet"), type: "element" }, lk = { dependencies: [Vn, dn], export: (e, n) => X(e) ? Zl(e, n, 0) : null, regExp: Lh, replace: Uh("number"), type: "element" }, ck = { format: ["code"], tag: "`", type: "text-format" }, uk = { format: ["highlight"], tag: "==", type: "text-format" }, dk = { format: ["bold", "italic"], tag: "***", type: "text-format" }, fk = { format: ["bold", "italic"], intraword: !1, tag: "___", type: "text-format" }, gk = { format: ["bold"], tag: "**", type: "text-format" }, pk = { format: ["bold"], intraword: !1, tag: "__", type: "text-format" }, hk = { format: ["strikethrough"], tag: "~~", type: "text-format" }, mk = { format: ["italic"], tag: "*", type: "text-format" }, yk = { format: ["italic"], intraword: !1, tag: "_", type: "text-format" }, bk = { dependencies: [jn], export: (e, n, t) => {
  if (!GE(e) || WE(e)) return null;
  const r = e.getTitle(), o = n(e);
  return r ? `[${o}](${e.getURL()} "${r}")` : `[${o}](${e.getURL()})`;
}, importRegExp: /(?:\[(.+?)\])(?:\((?:([^()\s]+)(?:\s"((?:[^"]*\\")*[^"]*)"\s*)?)\))/, regExp: /(?:\[(.+?)\])(?:\((?:([^()\s]+)(?:\s"((?:[^"]*\\")*[^"]*)"\s*)?)\))$/, replace: (e, n) => {
  const [, t, r, o] = n, i = _i(r, { title: o }), s = t.split("[").length - 1, a = t.split("]").length - 1;
  let l = t, c = "";
  if (s < a) return;
  if (s > a) {
    const d = t.split("[");
    c = "[" + d[0], l = d.slice(1).join("[");
  }
  const u = be(l);
  return u.setFormat(e.getFormat()), i.append(u), e.replace(i), c && i.insertBefore(be(c)), u;
}, trigger: ")", type: "text-match" }, vk = [ok, ik, ak, lk], xk = [sk], wk = [ck, dk, fk, gk, pk, uk, mk, yk, hk], _k = [bk], Mn = [...vk, ...xk, ...wk, ..._k];
function Ad(e, n, t) {
  const r = t.length;
  for (let o = n; o >= r; o--) {
    const i = o - r;
    if (Gh(e, i, t, 0, r) && e[i + r] !== " ") return i;
  }
  return -1;
}
function Gh(e, n, t, r, o) {
  for (let i = 0; i < o; i++) if (e[n + i] !== t[r + i]) return !1;
  return !0;
}
function Sk(e, n = Mn) {
  const t = Yl(n), r = Ua(t.textFormat, ({ tag: s }) => s[s.length - 1]), o = Ua(t.textMatch, ({ trigger: s }) => s);
  for (const s of n) {
    const a = s.type;
    if (a === "element" || a === "text-match" || a === "multiline-element") {
      const l = s.dependencies;
      for (const c of l) e.hasNode(c) || QE(173, c.getType());
    }
  }
  const i = (s, a, l) => {
    (function(c, u, d, f) {
      const g = c.getParent();
      if (!Me(g) || c.getFirstChild() !== u) return !1;
      const p = u.getTextContent();
      if (p[d - 1] !== " ") return !1;
      for (const { regExp: h, replace: m } of f) {
        const b = p.match(h);
        if (b && b[0].length === (b[0].endsWith(" ") ? d : d - 1)) {
          const y = u.getNextSiblings(), [v, _] = u.splitText(d);
          if (m(c, _ ? [_, ...y] : y, b, !1) !== !1) return v.remove(), !0;
        }
      }
      return !1;
    })(s, a, l, t.element) || (function(c, u, d, f) {
      const g = c.getParent();
      if (!Me(g) || c.getFirstChild() !== u) return !1;
      const p = u.getTextContent();
      if (p[d - 1] !== " ") return !1;
      for (const { regExpStart: h, replace: m, regExpEnd: b } of f) {
        if (b && !("optional" in b) || b && "optional" in b && !b.optional) continue;
        const y = p.match(h);
        if (y && y[0].length === (y[0].endsWith(" ") ? d : d - 1)) {
          const v = u.getNextSiblings(), [_, S] = u.splitText(d);
          if (m(c, S ? [S, ...v] : v, y, null, null, !1) !== !1) return _.remove(), !0;
        }
      }
      return !1;
    })(s, a, l, t.multilineElement) || (function(c, u, d) {
      let f = c.getTextContent();
      const g = d[f[u - 1]];
      if (g == null) return !1;
      u < f.length && (f = f.slice(0, u));
      for (const p of g) {
        if (!p.replace || !p.regExp) continue;
        const h = f.match(p.regExp);
        if (h === null) continue;
        const m = h.index || 0, b = m + h[0].length;
        let y;
        return m === 0 ? [y] = c.splitText(b) : [, y] = c.splitText(m, b), y.selectNext(0, 0), p.replace(y, h), !0;
      }
      return !1;
    })(a, l, o) || (function(c, u, d) {
      const f = c.getTextContent(), g = u - 1, p = f[g], h = d[p];
      if (!h) return !1;
      for (const m of h) {
        const { tag: b } = m, y = b.length, v = g - y + 1;
        if (y > 1 && !Gh(f, v, b, 0, y) || f[v - 1] === " ") continue;
        const _ = f[g + 1];
        if (m.intraword === !1 && _ && !Si.test(_)) continue;
        const S = c;
        let C = S, E = Ad(f, v, b), N = C;
        for (; E < 0 && (N = N.getPreviousSibling()) && !Qt(N); ) if (V(N)) {
          if (N.hasFormat("code")) continue;
          const U = N.getTextContent();
          C = N, E = Ad(U, U.length, b);
        }
        if (E < 0 || C === S && E + y === v) continue;
        const k = C.getTextContent();
        if (E > 0 && k[E - 1] === p) continue;
        const R = k[E - 1];
        if (m.intraword === !1 && R && !Si.test(R)) continue;
        const A = S.getTextContent(), T = A.slice(0, v) + A.slice(g + 1);
        S.setTextContent(T);
        const D = C === S ? T : k;
        C.setTextContent(D.slice(0, E) + D.slice(E + y));
        const O = G(), B = qi();
        Fe(B);
        const W = g - y * (C === S ? 2 : 1) + 1;
        B.anchor.set(C.__key, E, "text"), B.focus.set(S.__key, W, "text");
        for (const U of m.format) B.hasFormat(U) || B.formatText(U);
        B.anchor.set(B.focus.key, B.focus.offset, B.focus.type);
        for (const U of m.format) B.hasFormat(U) && B.toggleFormat(U);
        return L(O) && (B.format = O.format), !0;
      }
    })(a, l, r);
  };
  return e.registerUpdateListener(({ tags: s, dirtyLeaves: a, editorState: l, prevEditorState: c }) => {
    if (s.has(vp) || s.has(pi) || e.isComposing()) return;
    const u = l.read(G), d = c.read(G);
    if (!L(d) || !L(u) || !u.isCollapsed() || u.is(d)) return;
    const f = u.anchor.key, g = u.anchor.offset, p = l._nodeMap.get(f);
    !V(p) || !a.has(f) || g !== 1 && g > d.anchor.offset + 1 || e.update(() => {
      if (!mn(p)) return;
      const h = p.getParent();
      h === null || Kl(h) || i(h, p, u.anchor.offset);
    });
  });
}
function Ck(e, n = Mn, t, r = !1, o = !1) {
  const i = r ? e : (function(s, a = !1) {
    const l = s.split(`
`);
    let c = !1;
    const u = [];
    for (let d = 0; d < l.length; d++) {
      const f = l[d].trimEnd(), g = u[u.length - 1];
      tk.test(f) ? u.push(f) : Vh.test(f) || Ha.test(f) ? (c = !c, u.push(f)) : c || f === "" || g === "" || !g || Wa.test(g) || Wa.test(f) || Bh.test(f) || Lh.test(f) || zh.test(f) || ek.test(f) || nk.test(f) || rk.test(f) || !a || kd.test(f) || Nd.test(f) || Rd(Nd).test(g) || Rd(kd).test(g) || Ha.test(g) ? u.push(f) : u[u.length - 1] = g + " " + f.trimStart();
    }
    return u.join(`
`);
  })(e, o);
  return ZE(n, r)(i, t);
}
function Ek(e = Mn, n, t = !1) {
  return (function(o, i = !1) {
    const s = Yl(o), a = [...s.multilineElement, ...s.element], l = !i, c = s.textFormat.filter((u) => u.format.length === 1).sort((u, d) => Number(u.format.includes("code")) - Number(d.format.includes("code")));
    return (u) => {
      const d = [], f = (u || ye()).getChildren();
      for (let g = 0; g < f.length; g++) {
        const p = f[g], h = qE(p, a, c, s.textMatch);
        h != null && d.push(l && g > 0 && !Ga(p) && !Ga(f[g - 1]) ? `
`.concat(h) : h);
      }
      return d.join(`
`);
    };
  })(e, t)(n);
}
function Td(e, n) {
  return e.getEditorState().read(() => {
    const t = xe(n);
    return t !== null && t.isSelected();
  });
}
function kk(e) {
  const [n] = ft(), [t, r] = rn(() => Td(n, e));
  return He(() => {
    let o = !0;
    const i = n.registerUpdateListener(() => {
      o && r(Td(n, e));
    });
    return () => {
      o = !1, i();
    };
  }, [n, e]), [t, dr((o) => {
    n.update(() => {
      let i = G();
      Oe(i) || (i = xl(), Fe(i)), Oe(i) && (o ? i.add(e) : i.delete(e));
    });
  }, [n, e]), dr(() => {
    n.update(() => {
      const o = G();
      Oe(o) && o.clear();
    });
  }, [n])];
}
function Nk({ nodeKey: e }) {
  const [n] = ft(), [t, r, o] = kk(e);
  return He(() => Vt(n.registerCommand(pl, (i) => {
    const s = n.getElementByKey(e);
    return i.target === s && (i.shiftKey || o(), r(!t), !0);
  }, Qn)), [o, n, t, e, r]), He(() => {
    const i = n.getElementByKey(e), s = n._config.theme.hrSelected ?? "selected";
    i !== null && (t ? ct(i, s) : ts(i, s));
  }, [n, t, e]), null;
}
class ls extends yo {
  static getType() {
    return "horizontalrule";
  }
  static clone(n) {
    return new ls(n.__key);
  }
  static importJSON(n) {
    return Jl().updateFromJSON(n);
  }
  static importDOM() {
    return { hr: () => ({ conversion: Rk, priority: 0 }) };
  }
  decorate() {
    return w(Nk, { nodeKey: this.__key });
  }
}
function Rk() {
  return { node: Jl() };
}
function Jl() {
  return tt(new ls());
}
const Ak = [{ dependencies: [ls], export: (e) => PC(e) ? "***" : null, regExp: /^(---|\*\*\*|___)\s?$/, replace: (e, n, t, r) => {
  const o = Jl();
  r || e.getNextSibling() != null ? e.replace(o) : e.insertBefore(o), o.selectNext();
}, type: "element" }, ...Mn];
function Tk({ transformers: e = Ak }) {
  const [n] = ft();
  return He(() => Sk(n, e), [n, e]), null;
}
const Fk = x.lazy(() => import("./index-CLIixv8m.js")), Pk = {
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
function Ik({
  mode: e,
  onModeChange: n,
  onAIClick: t,
  showAI: r = !0
}) {
  const [o] = ft(), i = () => {
    o.dispatchCommand(vt, "bold");
  }, s = () => {
    o.dispatchCommand(vt, "italic");
  }, a = (u) => {
    o.update(() => {
      const d = G();
      L(d) && Iu(d, () => xn(`h${u}`));
    });
  };
  return /* @__PURE__ */ M("div", { className: "flex items-center justify-between border-b border-border bg-muted/30 px-2 py-1.5", children: [
    /* @__PURE__ */ M("div", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ M("div", { className: "flex items-center gap-0.5 mr-2 border-r border-border pr-2", children: [
        /* @__PURE__ */ w(
          ue,
          {
            variant: e === "rich" ? "default" : "ghost",
            size: "sm",
            onClick: () => {
              n("rich");
            },
            title: "Rich Text Mode",
            className: "h-8 px-2",
            children: /* @__PURE__ */ w(pf, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ w(
          ue,
          {
            variant: e === "code" ? "default" : "ghost",
            size: "sm",
            onClick: () => {
              n("code");
            },
            title: "Code Mode",
            className: "h-8 px-2",
            children: /* @__PURE__ */ w(df, { className: "h-4 w-4" })
          }
        )
      ] }),
      e === "rich" && /* @__PURE__ */ M(st, { children: [
        /* @__PURE__ */ w(
          ue,
          {
            variant: "ghost",
            size: "sm",
            onClick: i,
            title: "Bold (⌘B)",
            className: "h-8 px-2",
            children: /* @__PURE__ */ w(Zy, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ w(
          ue,
          {
            variant: "ghost",
            size: "sm",
            onClick: s,
            title: "Italic (⌘I)",
            className: "h-8 px-2",
            children: /* @__PURE__ */ w(ub, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ w("div", { className: "w-px h-6 bg-border mx-1" }),
        /* @__PURE__ */ w(
          ue,
          {
            variant: "ghost",
            size: "sm",
            onClick: () => {
              a(1);
            },
            title: "Heading 1",
            className: "h-8 px-2",
            children: /* @__PURE__ */ w(ab, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ w(
          ue,
          {
            variant: "ghost",
            size: "sm",
            onClick: () => {
              a(2);
            },
            title: "Heading 2",
            className: "h-8 px-2",
            children: /* @__PURE__ */ w(lb, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ w("div", { className: "w-px h-6 bg-border mx-1" }),
        /* @__PURE__ */ w(
          ue,
          {
            variant: "ghost",
            size: "sm",
            onClick: () => {
              o.dispatchCommand(Ph, void 0);
            },
            title: "Bullet List",
            className: "h-8 px-2",
            children: /* @__PURE__ */ w(db, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ w(
          ue,
          {
            variant: "ghost",
            size: "sm",
            onClick: () => {
              o.update(() => {
                const u = G();
                L(u) && Iu(u, () => os());
              });
            },
            title: "Quote",
            className: "h-8 px-2",
            children: /* @__PURE__ */ w(gb, { className: "h-4 w-4" })
          }
        )
      ] })
    ] }),
    r && t && /* @__PURE__ */ M(
      ue,
      {
        variant: "gradient-purple",
        size: "sm",
        onClick: t,
        className: "h-8 px-3 gap-1.5",
        title: "Ask AI for help",
        children: [
          /* @__PURE__ */ w(gf, { className: "h-4 w-4" }),
          /* @__PURE__ */ w("span", { className: "hidden sm:inline", children: "Ask AI" })
        ]
      }
    )
  ] });
}
function Ok({
  value: e,
  onChange: n,
  isInitialized: t,
  setIsInitialized: r
}) {
  const [o] = ft(), i = x.useRef(!1);
  return x.useEffect(() => {
    !t && e && (i.current = !0, o.update(() => {
      Ck(e, Mn);
    }, {
      // Use discrete update to batch this and prevent intermediate onChange
      discrete: !0
    }), requestAnimationFrame(() => {
      i.current = !1, r(!0);
    }));
  }, [o, e, t, r]), x.useEffect(() => {
    if (n)
      return o.registerUpdateListener(({ editorState: s, tags: a }) => {
        i.current || a.has("history-merge") || s.read(() => {
          const l = Ek(Mn);
          n(l);
        });
      });
  }, [o, n]), null;
}
const $k = x.forwardRef(
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
    className: c,
    monacoTheme: u = "vs-dark"
  }, d) => {
    const [f, g] = x.useState(t), [p, h] = x.useState(e), [m, b] = x.useState(!1), [y, v] = x.useState(0), _ = x.useRef(null), S = x.useRef(e), C = (D) => {
      D.editor.defineTheme("appski-dark", {
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
    x.useEffect(() => {
      e !== p && (h(e), f === "rich" && e !== S.current && (S.current = e, b(!1), v((D) => D + 1)));
    }, [e]);
    const E = x.useCallback((D) => {
      h(D), n == null || n(D);
    }, [n]), N = x.useCallback((D) => {
      D === "rich" && (b(!1), v((O) => O + 1)), g(D);
    }, []), k = (D) => {
      _.current = D;
    }, R = x.useCallback(() => {
      var O, B;
      if (!o) return;
      let D = "";
      if (f === "rich")
        D = ((O = window.getSelection()) == null ? void 0 : O.toString()) || "";
      else {
        const W = _.current;
        if (W) {
          const U = W.getSelection();
          U && (D = ((B = W.getModel()) == null ? void 0 : B.getValueInRange(U)) || "");
        }
      }
      o(D, p);
    }, [f, p, o]), A = {
      namespace: "HybridEditor",
      theme: Pk,
      onError: (D) => {
        console.error("Lexical error:", D);
      },
      nodes: [
        is,
        rs,
        Vn,
        dn,
        ss,
        ql,
        jn
      ],
      editable: !l
    }, T = a ? { minHeight: s, maxHeight: a, overflowY: "auto" } : { minHeight: s };
    return /* @__PURE__ */ w(
      "div",
      {
        ref: d,
        className: I(
          "rounded-lg border border-border bg-background overflow-hidden",
          l && "opacity-60 pointer-events-none",
          c
        ),
        children: f === "rich" ? /* @__PURE__ */ M(sC, { initialConfig: A, children: [
          /* @__PURE__ */ w(
            Ik,
            {
              mode: f,
              onModeChange: N,
              onAIClick: o ? R : void 0,
              showAI: r
            }
          ),
          /* @__PURE__ */ M("div", { className: "relative", style: T, children: [
            /* @__PURE__ */ w(
              iE,
              {
                contentEditable: /* @__PURE__ */ w(
                  cE,
                  {
                    className: "outline-none px-4 py-3 prose prose-sm max-w-none dark:prose-invert text-slate-900 dark:text-slate-100",
                    style: { minHeight: s }
                  }
                ),
                placeholder: /* @__PURE__ */ w("div", { className: "absolute top-3 left-4 text-muted-foreground pointer-events-none", children: i }),
                ErrorBoundary: bE
              }
            ),
            /* @__PURE__ */ w(pE, {}),
            /* @__PURE__ */ w(FE, {}),
            /* @__PURE__ */ w(Tk, { transformers: Mn }),
            /* @__PURE__ */ w(
              Ok,
              {
                value: p,
                onChange: E,
                isInitialized: m,
                setIsInitialized: b
              }
            )
          ] })
        ] }, y) : /* @__PURE__ */ M(st, { children: [
          /* @__PURE__ */ M("div", { className: "flex items-center justify-between border-b border-border bg-muted/30 px-2 py-1.5", children: [
            /* @__PURE__ */ M("div", { className: "flex items-center gap-0.5", children: [
              /* @__PURE__ */ w(
                ue,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: () => {
                    N("rich");
                  },
                  title: "Rich Text Mode",
                  className: "h-8 px-2",
                  children: /* @__PURE__ */ w(pf, { className: "h-4 w-4" })
                }
              ),
              /* @__PURE__ */ w(
                ue,
                {
                  variant: "default",
                  size: "sm",
                  onClick: () => {
                    N("code");
                  },
                  title: "Code Mode",
                  className: "h-8 px-2",
                  children: /* @__PURE__ */ w(df, { className: "h-4 w-4" })
                }
              )
            ] }),
            r && o && /* @__PURE__ */ M(
              ue,
              {
                variant: "gradient-purple",
                size: "sm",
                onClick: R,
                className: "h-8 px-3 gap-1.5",
                title: "Ask AI for help",
                children: [
                  /* @__PURE__ */ w(gf, { className: "h-4 w-4" }),
                  /* @__PURE__ */ w("span", { className: "hidden sm:inline", children: "Ask AI" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ w(x.Suspense, { fallback: /* @__PURE__ */ w(
            "div",
            {
              className: "flex items-center justify-center bg-slate-900 text-slate-400",
              style: { height: a || s },
              children: /* @__PURE__ */ M("div", { className: "text-center", children: [
                /* @__PURE__ */ w("div", { className: "inline-block animate-spin rounded-full h-8 w-8 border-2 border-slate-600 border-t-purple-500 mb-2" }),
                /* @__PURE__ */ w("p", { className: "text-sm", children: "Loading editor..." })
              ] })
            }
          ), children: /* @__PURE__ */ w(
            Fk,
            {
              height: a || s,
              defaultLanguage: "markdown",
              value: p,
              onChange: (D) => {
                E(D || "");
              },
              beforeMount: C,
              onMount: k,
              theme: u === "vs-dark" ? "appski-dark" : u,
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
$k.displayName = "HybridEditor";
var cs = "Collapsible", [Mk, Wh] = Gt(cs), [Dk, Xl] = Mk(cs), Hh = x.forwardRef(
  (e, n) => {
    const {
      __scopeCollapsible: t,
      open: r,
      defaultOpen: o,
      disabled: i,
      onOpenChange: s,
      ...a
    } = e, [l, c] = Ln({
      prop: r,
      defaultProp: o ?? !1,
      onChange: s,
      caller: cs
    });
    return /* @__PURE__ */ w(
      Dk,
      {
        scope: t,
        disabled: i,
        contentId: Di(),
        open: l,
        onOpenToggle: x.useCallback(() => c((u) => !u), [c]),
        children: /* @__PURE__ */ w(
          pe.div,
          {
            "data-state": ec(l),
            "data-disabled": i ? "" : void 0,
            ...a,
            ref: n
          }
        )
      }
    );
  }
);
Hh.displayName = cs;
var Kh = "CollapsibleTrigger", qh = x.forwardRef(
  (e, n) => {
    const { __scopeCollapsible: t, ...r } = e, o = Xl(Kh, t);
    return /* @__PURE__ */ w(
      pe.button,
      {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": ec(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...r,
        ref: n,
        onClick: ge(e.onClick, o.onOpenToggle)
      }
    );
  }
);
qh.displayName = Kh;
var Ql = "CollapsibleContent", Yh = x.forwardRef(
  (e, n) => {
    const { forceMount: t, ...r } = e, o = Xl(Ql, e.__scopeCollapsible);
    return /* @__PURE__ */ w(lo, { present: t || o.open, children: ({ present: i }) => /* @__PURE__ */ w(Lk, { ...r, ref: n, present: i }) });
  }
);
Yh.displayName = Ql;
var Lk = x.forwardRef((e, n) => {
  const { __scopeCollapsible: t, present: r, children: o, ...i } = e, s = Xl(Ql, t), [a, l] = x.useState(r), c = x.useRef(null), u = ve(n, c), d = x.useRef(0), f = d.current, g = x.useRef(0), p = g.current, h = s.open || a, m = x.useRef(h), b = x.useRef(void 0);
  return x.useEffect(() => {
    const y = requestAnimationFrame(() => m.current = !1);
    return () => cancelAnimationFrame(y);
  }, []), zt(() => {
    const y = c.current;
    if (y) {
      b.current = b.current || {
        transitionDuration: y.style.transitionDuration,
        animationName: y.style.animationName
      }, y.style.transitionDuration = "0s", y.style.animationName = "none";
      const v = y.getBoundingClientRect();
      d.current = v.height, g.current = v.width, m.current || (y.style.transitionDuration = b.current.transitionDuration, y.style.animationName = b.current.animationName), l(r);
    }
  }, [s.open, r]), /* @__PURE__ */ w(
    pe.div,
    {
      "data-state": ec(s.open),
      "data-disabled": s.disabled ? "" : void 0,
      id: s.contentId,
      hidden: !h,
      ...i,
      ref: u,
      style: {
        "--radix-collapsible-content-height": f ? `${f}px` : void 0,
        "--radix-collapsible-content-width": p ? `${p}px` : void 0,
        ...e.style
      },
      children: h && o
    }
  );
});
function ec(e) {
  return e ? "open" : "closed";
}
var zk = Hh, Bk = qh, Vk = Yh, ht = "Accordion", jk = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [tc, Uk, Gk] = ol(ht), [us] = Gt(ht, [
  Gk,
  Wh
]), nc = Wh(), Zh = de.forwardRef(
  (e, n) => {
    const { type: t, ...r } = e, o = r, i = r;
    return /* @__PURE__ */ w(tc.Provider, { scope: e.__scopeAccordion, children: t === "multiple" ? /* @__PURE__ */ w(qk, { ...i, ref: n }) : /* @__PURE__ */ w(Kk, { ...o, ref: n }) });
  }
);
Zh.displayName = ht;
var [Jh, Wk] = us(ht), [Xh, Hk] = us(
  ht,
  { collapsible: !1 }
), Kk = de.forwardRef(
  (e, n) => {
    const {
      value: t,
      defaultValue: r,
      onValueChange: o = () => {
      },
      collapsible: i = !1,
      ...s
    } = e, [a, l] = Ln({
      prop: t,
      defaultProp: r ?? "",
      onChange: o,
      caller: ht
    });
    return /* @__PURE__ */ w(
      Jh,
      {
        scope: e.__scopeAccordion,
        value: de.useMemo(() => a ? [a] : [], [a]),
        onItemOpen: l,
        onItemClose: de.useCallback(() => i && l(""), [i, l]),
        children: /* @__PURE__ */ w(Xh, { scope: e.__scopeAccordion, collapsible: i, children: /* @__PURE__ */ w(Qh, { ...s, ref: n }) })
      }
    );
  }
), qk = de.forwardRef((e, n) => {
  const {
    value: t,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...i
  } = e, [s, a] = Ln({
    prop: t,
    defaultProp: r ?? [],
    onChange: o,
    caller: ht
  }), l = de.useCallback(
    (u) => a((d = []) => [...d, u]),
    [a]
  ), c = de.useCallback(
    (u) => a((d = []) => d.filter((f) => f !== u)),
    [a]
  );
  return /* @__PURE__ */ w(
    Jh,
    {
      scope: e.__scopeAccordion,
      value: s,
      onItemOpen: l,
      onItemClose: c,
      children: /* @__PURE__ */ w(Xh, { scope: e.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ w(Qh, { ...i, ref: n }) })
    }
  );
}), [Yk, ds] = us(ht), Qh = de.forwardRef(
  (e, n) => {
    const { __scopeAccordion: t, disabled: r, dir: o, orientation: i = "vertical", ...s } = e, a = de.useRef(null), l = ve(a, n), c = Uk(t), d = Li(o) === "ltr", f = ge(e.onKeyDown, (g) => {
      var N;
      if (!jk.includes(g.key)) return;
      const p = g.target, h = c().filter((k) => {
        var R;
        return !((R = k.ref.current) != null && R.disabled);
      }), m = h.findIndex((k) => k.ref.current === p), b = h.length;
      if (m === -1) return;
      g.preventDefault();
      let y = m;
      const v = 0, _ = b - 1, S = () => {
        y = m + 1, y > _ && (y = v);
      }, C = () => {
        y = m - 1, y < v && (y = _);
      };
      switch (g.key) {
        case "Home":
          y = v;
          break;
        case "End":
          y = _;
          break;
        case "ArrowRight":
          i === "horizontal" && (d ? S() : C());
          break;
        case "ArrowDown":
          i === "vertical" && S();
          break;
        case "ArrowLeft":
          i === "horizontal" && (d ? C() : S());
          break;
        case "ArrowUp":
          i === "vertical" && C();
          break;
      }
      const E = y % b;
      (N = h[E].ref.current) == null || N.focus();
    });
    return /* @__PURE__ */ w(
      Yk,
      {
        scope: t,
        disabled: r,
        direction: o,
        orientation: i,
        children: /* @__PURE__ */ w(tc.Slot, { scope: t, children: /* @__PURE__ */ w(
          pe.div,
          {
            ...s,
            "data-orientation": i,
            ref: l,
            onKeyDown: r ? void 0 : f
          }
        ) })
      }
    );
  }
), Ei = "AccordionItem", [Zk, rc] = us(Ei), em = de.forwardRef(
  (e, n) => {
    const { __scopeAccordion: t, value: r, ...o } = e, i = ds(Ei, t), s = Wk(Ei, t), a = nc(t), l = Di(), c = r && s.value.includes(r) || !1, u = i.disabled || e.disabled;
    return /* @__PURE__ */ w(
      Zk,
      {
        scope: t,
        open: c,
        disabled: u,
        triggerId: l,
        children: /* @__PURE__ */ w(
          zk,
          {
            "data-orientation": i.orientation,
            "data-state": sm(c),
            ...a,
            ...o,
            ref: n,
            disabled: u,
            open: c,
            onOpenChange: (d) => {
              d ? s.onItemOpen(r) : s.onItemClose(r);
            }
          }
        )
      }
    );
  }
);
em.displayName = Ei;
var tm = "AccordionHeader", nm = de.forwardRef(
  (e, n) => {
    const { __scopeAccordion: t, ...r } = e, o = ds(ht, t), i = rc(tm, t);
    return /* @__PURE__ */ w(
      pe.h3,
      {
        "data-orientation": o.orientation,
        "data-state": sm(i.open),
        "data-disabled": i.disabled ? "" : void 0,
        ...r,
        ref: n
      }
    );
  }
);
nm.displayName = tm;
var Ka = "AccordionTrigger", rm = de.forwardRef(
  (e, n) => {
    const { __scopeAccordion: t, ...r } = e, o = ds(ht, t), i = rc(Ka, t), s = Hk(Ka, t), a = nc(t);
    return /* @__PURE__ */ w(tc.ItemSlot, { scope: t, children: /* @__PURE__ */ w(
      Bk,
      {
        "aria-disabled": i.open && !s.collapsible || void 0,
        "data-orientation": o.orientation,
        id: i.triggerId,
        ...a,
        ...r,
        ref: n
      }
    ) });
  }
);
rm.displayName = Ka;
var om = "AccordionContent", im = de.forwardRef(
  (e, n) => {
    const { __scopeAccordion: t, ...r } = e, o = ds(ht, t), i = rc(om, t), s = nc(t);
    return /* @__PURE__ */ w(
      Vk,
      {
        role: "region",
        "aria-labelledby": i.triggerId,
        "data-orientation": o.orientation,
        ...s,
        ...r,
        ref: n,
        style: {
          "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
          "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
          ...e.style
        }
      }
    );
  }
);
im.displayName = om;
function sm(e) {
  return e ? "open" : "closed";
}
var Jk = Zh, Xk = em, Qk = nm, am = rm, lm = im;
const e1 = Y("border-b border-border", {
  variants: {
    variant: {
      default: "",
      bordered: "border rounded-lg mb-2 border-border",
      ghost: "border-0"
    }
  },
  defaultVariants: {
    variant: "default"
  }
}), t1 = Y(
  "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
  {
    variants: {
      variant: {
        default: "",
        bordered: "px-4",
        ghost: ""
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), n1 = Y(
  "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
  {
    variants: {
      variant: {
        default: "",
        bordered: "px-4",
        ghost: ""
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), PT = Jk, r1 = x.forwardRef(({ className: e, variant: n, ...t }, r) => /* @__PURE__ */ w(
  Xk,
  {
    ref: r,
    className: I(e1({ variant: n }), e),
    ...t
  }
));
r1.displayName = "AccordionItem";
const o1 = x.forwardRef(({ className: e, children: n, variant: t, ...r }, o) => /* @__PURE__ */ w(Qk, { className: "flex", children: /* @__PURE__ */ M(
  am,
  {
    ref: o,
    className: I(t1({ variant: t }), e),
    ...r,
    children: [
      n,
      /* @__PURE__ */ w($i, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
o1.displayName = am.displayName;
const i1 = x.forwardRef(({ className: e, children: n, variant: t, ...r }, o) => /* @__PURE__ */ w(
  lm,
  {
    ref: o,
    className: I(n1({ variant: t }), e),
    ...r,
    children: /* @__PURE__ */ w("div", { className: "pt-0 pb-4", children: n })
  }
));
i1.displayName = lm.displayName;
function s1(e, n = globalThis == null ? void 0 : globalThis.document) {
  const t = Cn(e);
  x.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && t(o);
    };
    return n.addEventListener("keydown", r, { capture: !0 }), () => n.removeEventListener("keydown", r, { capture: !0 });
  }, [t, n]);
}
var a1 = "DismissableLayer", qa = "dismissableLayer.update", l1 = "dismissableLayer.pointerDownOutside", c1 = "dismissableLayer.focusOutside", Fd, cm = x.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), um = x.forwardRef(
  (e, n) => {
    const {
      disableOutsidePointerEvents: t = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: i,
      onInteractOutside: s,
      onDismiss: a,
      ...l
    } = e, c = x.useContext(cm), [u, d] = x.useState(null), f = (u == null ? void 0 : u.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, g] = x.useState({}), p = ve(n, (E) => d(E)), h = Array.from(c.layers), [m] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), b = h.indexOf(m), y = u ? h.indexOf(u) : -1, v = c.layersWithOutsidePointerEventsDisabled.size > 0, _ = y >= b, S = f1((E) => {
      const N = E.target, k = [...c.branches].some((R) => R.contains(N));
      !_ || k || (o == null || o(E), s == null || s(E), E.defaultPrevented || a == null || a());
    }, f), C = g1((E) => {
      const N = E.target;
      [...c.branches].some((R) => R.contains(N)) || (i == null || i(E), s == null || s(E), E.defaultPrevented || a == null || a());
    }, f);
    return s1((E) => {
      y === c.layers.size - 1 && (r == null || r(E), !E.defaultPrevented && a && (E.preventDefault(), a()));
    }, f), x.useEffect(() => {
      if (u)
        return t && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (Fd = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(u)), c.layers.add(u), Pd(), () => {
          t && c.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = Fd);
        };
    }, [u, f, t, c]), x.useEffect(() => () => {
      u && (c.layers.delete(u), c.layersWithOutsidePointerEventsDisabled.delete(u), Pd());
    }, [u, c]), x.useEffect(() => {
      const E = () => g({});
      return document.addEventListener(qa, E), () => document.removeEventListener(qa, E);
    }, []), /* @__PURE__ */ w(
      pe.div,
      {
        ...l,
        ref: p,
        style: {
          pointerEvents: v ? _ ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: ge(e.onFocusCapture, C.onFocusCapture),
        onBlurCapture: ge(e.onBlurCapture, C.onBlurCapture),
        onPointerDownCapture: ge(
          e.onPointerDownCapture,
          S.onPointerDownCapture
        )
      }
    );
  }
);
um.displayName = a1;
var u1 = "DismissableLayerBranch", d1 = x.forwardRef((e, n) => {
  const t = x.useContext(cm), r = x.useRef(null), o = ve(n, r);
  return x.useEffect(() => {
    const i = r.current;
    if (i)
      return t.branches.add(i), () => {
        t.branches.delete(i);
      };
  }, [t.branches]), /* @__PURE__ */ w(pe.div, { ...e, ref: o });
});
d1.displayName = u1;
function f1(e, n = globalThis == null ? void 0 : globalThis.document) {
  const t = Cn(e), r = x.useRef(!1), o = x.useRef(() => {
  });
  return x.useEffect(() => {
    const i = (a) => {
      if (a.target && !r.current) {
        let l = function() {
          dm(
            l1,
            t,
            c,
            { discrete: !0 }
          );
        };
        const c = { originalEvent: a };
        a.pointerType === "touch" ? (n.removeEventListener("click", o.current), o.current = l, n.addEventListener("click", o.current, { once: !0 })) : l();
      } else
        n.removeEventListener("click", o.current);
      r.current = !1;
    }, s = window.setTimeout(() => {
      n.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(s), n.removeEventListener("pointerdown", i), n.removeEventListener("click", o.current);
    };
  }, [n, t]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function g1(e, n = globalThis == null ? void 0 : globalThis.document) {
  const t = Cn(e), r = x.useRef(!1);
  return x.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && dm(c1, t, { originalEvent: i }, {
        discrete: !1
      });
    };
    return n.addEventListener("focusin", o), () => n.removeEventListener("focusin", o);
  }, [n, t]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Pd() {
  const e = new CustomEvent(qa);
  document.dispatchEvent(e);
}
function dm(e, n, t, { discrete: r }) {
  const o = t.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: t });
  n && o.addEventListener(e, n, { once: !0 }), r ? m0(o, i) : o.dispatchEvent(i);
}
var Ys = 0;
function p1() {
  x.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Id()), document.body.insertAdjacentElement("beforeend", e[1] ?? Id()), Ys++, () => {
      Ys === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((n) => n.remove()), Ys--;
    };
  }, []);
}
function Id() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Zs = "focusScope.autoFocusOnMount", Js = "focusScope.autoFocusOnUnmount", Od = { bubbles: !1, cancelable: !0 }, h1 = "FocusScope", fm = x.forwardRef((e, n) => {
  const {
    loop: t = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i,
    ...s
  } = e, [a, l] = x.useState(null), c = Cn(o), u = Cn(i), d = x.useRef(null), f = ve(n, (h) => l(h)), g = x.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  x.useEffect(() => {
    if (r) {
      let h = function(v) {
        if (g.paused || !a) return;
        const _ = v.target;
        a.contains(_) ? d.current = _ : Yt(d.current, { select: !0 });
      }, m = function(v) {
        if (g.paused || !a) return;
        const _ = v.relatedTarget;
        _ !== null && (a.contains(_) || Yt(d.current, { select: !0 }));
      }, b = function(v) {
        if (document.activeElement === document.body)
          for (const S of v)
            S.removedNodes.length > 0 && Yt(a);
      };
      document.addEventListener("focusin", h), document.addEventListener("focusout", m);
      const y = new MutationObserver(b);
      return a && y.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", h), document.removeEventListener("focusout", m), y.disconnect();
      };
    }
  }, [r, a, g.paused]), x.useEffect(() => {
    if (a) {
      Md.add(g);
      const h = document.activeElement;
      if (!a.contains(h)) {
        const b = new CustomEvent(Zs, Od);
        a.addEventListener(Zs, c), a.dispatchEvent(b), b.defaultPrevented || (m1(w1(gm(a)), { select: !0 }), document.activeElement === h && Yt(a));
      }
      return () => {
        a.removeEventListener(Zs, c), setTimeout(() => {
          const b = new CustomEvent(Js, Od);
          a.addEventListener(Js, u), a.dispatchEvent(b), b.defaultPrevented || Yt(h ?? document.body, { select: !0 }), a.removeEventListener(Js, u), Md.remove(g);
        }, 0);
      };
    }
  }, [a, c, u, g]);
  const p = x.useCallback(
    (h) => {
      if (!t && !r || g.paused) return;
      const m = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey, b = document.activeElement;
      if (m && b) {
        const y = h.currentTarget, [v, _] = y1(y);
        v && _ ? !h.shiftKey && b === _ ? (h.preventDefault(), t && Yt(v, { select: !0 })) : h.shiftKey && b === v && (h.preventDefault(), t && Yt(_, { select: !0 })) : b === y && h.preventDefault();
      }
    },
    [t, r, g.paused]
  );
  return /* @__PURE__ */ w(pe.div, { tabIndex: -1, ...s, ref: f, onKeyDown: p });
});
fm.displayName = h1;
function m1(e, { select: n = !1 } = {}) {
  const t = document.activeElement;
  for (const r of e)
    if (Yt(r, { select: n }), document.activeElement !== t) return;
}
function y1(e) {
  const n = gm(e), t = $d(n, e), r = $d(n.reverse(), e);
  return [t, r];
}
function gm(e) {
  const n = [], t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; t.nextNode(); ) n.push(t.currentNode);
  return n;
}
function $d(e, n) {
  for (const t of e)
    if (!b1(t, { upTo: n })) return t;
}
function b1(e, { upTo: n }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (n !== void 0 && e === n) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function v1(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Yt(e, { select: n = !1 } = {}) {
  if (e && e.focus) {
    const t = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== t && v1(e) && n && e.select();
  }
}
var Md = x1();
function x1() {
  let e = [];
  return {
    add(n) {
      const t = e[0];
      n !== t && (t == null || t.pause()), e = Dd(e, n), e.unshift(n);
    },
    remove(n) {
      var t;
      e = Dd(e, n), (t = e[0]) == null || t.resume();
    }
  };
}
function Dd(e, n) {
  const t = [...e], r = t.indexOf(n);
  return r !== -1 && t.splice(r, 1), t;
}
function w1(e) {
  return e.filter((n) => n.tagName !== "A");
}
const _1 = ["top", "right", "bottom", "left"], ln = Math.min, We = Math.max, ki = Math.round, Lo = Math.floor, Ct = (e) => ({
  x: e,
  y: e
}), S1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, C1 = {
  start: "end",
  end: "start"
};
function Ya(e, n, t) {
  return We(e, ln(n, t));
}
function jt(e, n) {
  return typeof e == "function" ? e(n) : e;
}
function Ut(e) {
  return e.split("-")[0];
}
function Pr(e) {
  return e.split("-")[1];
}
function oc(e) {
  return e === "x" ? "y" : "x";
}
function ic(e) {
  return e === "y" ? "height" : "width";
}
const E1 = /* @__PURE__ */ new Set(["top", "bottom"]);
function xt(e) {
  return E1.has(Ut(e)) ? "y" : "x";
}
function sc(e) {
  return oc(xt(e));
}
function k1(e, n, t) {
  t === void 0 && (t = !1);
  const r = Pr(e), o = sc(e), i = ic(o);
  let s = o === "x" ? r === (t ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return n.reference[i] > n.floating[i] && (s = Ni(s)), [s, Ni(s)];
}
function N1(e) {
  const n = Ni(e);
  return [Za(e), n, Za(n)];
}
function Za(e) {
  return e.replace(/start|end/g, (n) => C1[n]);
}
const Ld = ["left", "right"], zd = ["right", "left"], R1 = ["top", "bottom"], A1 = ["bottom", "top"];
function T1(e, n, t) {
  switch (e) {
    case "top":
    case "bottom":
      return t ? n ? zd : Ld : n ? Ld : zd;
    case "left":
    case "right":
      return n ? R1 : A1;
    default:
      return [];
  }
}
function F1(e, n, t, r) {
  const o = Pr(e);
  let i = T1(Ut(e), t === "start", r);
  return o && (i = i.map((s) => s + "-" + o), n && (i = i.concat(i.map(Za)))), i;
}
function Ni(e) {
  return e.replace(/left|right|bottom|top/g, (n) => S1[n]);
}
function P1(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function pm(e) {
  return typeof e != "number" ? P1(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ri(e) {
  const {
    x: n,
    y: t,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: t,
    left: n,
    right: n + r,
    bottom: t + o,
    x: n,
    y: t
  };
}
function Bd(e, n, t) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = xt(n), s = sc(n), a = ic(s), l = Ut(n), c = i === "y", u = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
  let g;
  switch (l) {
    case "top":
      g = {
        x: u,
        y: r.y - o.height
      };
      break;
    case "bottom":
      g = {
        x: u,
        y: r.y + r.height
      };
      break;
    case "right":
      g = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      g = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      g = {
        x: r.x,
        y: r.y
      };
  }
  switch (Pr(n)) {
    case "start":
      g[s] -= f * (t && c ? -1 : 1);
      break;
    case "end":
      g[s] += f * (t && c ? -1 : 1);
      break;
  }
  return g;
}
async function I1(e, n) {
  var t;
  n === void 0 && (n = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: s,
    elements: a,
    strategy: l
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: g = 0
  } = jt(n, e), p = pm(g), m = a[f ? d === "floating" ? "reference" : "floating" : d], b = Ri(await i.getClippingRect({
    element: (t = await (i.isElement == null ? void 0 : i.isElement(m))) == null || t ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: u,
    strategy: l
  })), y = d === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, v = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), _ = await (i.isElement == null ? void 0 : i.isElement(v)) ? await (i.getScale == null ? void 0 : i.getScale(v)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = Ri(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: y,
    offsetParent: v,
    strategy: l
  }) : y);
  return {
    top: (b.top - S.top + p.top) / _.y,
    bottom: (S.bottom - b.bottom + p.bottom) / _.y,
    left: (b.left - S.left + p.left) / _.x,
    right: (S.right - b.right + p.right) / _.x
  };
}
const O1 = async (e, n, t) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s
  } = t, a = i.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(n));
  let c = await s.getElementRects({
    reference: e,
    floating: n,
    strategy: o
  }), {
    x: u,
    y: d
  } = Bd(c, r, l), f = r, g = {}, p = 0;
  for (let m = 0; m < a.length; m++) {
    var h;
    const {
      name: b,
      fn: y
    } = a[m], {
      x: v,
      y: _,
      data: S,
      reset: C
    } = await y({
      x: u,
      y: d,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: g,
      rects: c,
      platform: {
        ...s,
        detectOverflow: (h = s.detectOverflow) != null ? h : I1
      },
      elements: {
        reference: e,
        floating: n
      }
    });
    u = v ?? u, d = _ ?? d, g = {
      ...g,
      [b]: {
        ...g[b],
        ...S
      }
    }, C && p <= 50 && (p++, typeof C == "object" && (C.placement && (f = C.placement), C.rects && (c = C.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: n,
      strategy: o
    }) : C.rects), {
      x: u,
      y: d
    } = Bd(c, f, l)), m = -1);
  }
  return {
    x: u,
    y: d,
    placement: f,
    strategy: o,
    middlewareData: g
  };
}, $1 = (e) => ({
  name: "arrow",
  options: e,
  async fn(n) {
    const {
      x: t,
      y: r,
      placement: o,
      rects: i,
      platform: s,
      elements: a,
      middlewareData: l
    } = n, {
      element: c,
      padding: u = 0
    } = jt(e, n) || {};
    if (c == null)
      return {};
    const d = pm(u), f = {
      x: t,
      y: r
    }, g = sc(o), p = ic(g), h = await s.getDimensions(c), m = g === "y", b = m ? "top" : "left", y = m ? "bottom" : "right", v = m ? "clientHeight" : "clientWidth", _ = i.reference[p] + i.reference[g] - f[g] - i.floating[p], S = f[g] - i.reference[g], C = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let E = C ? C[v] : 0;
    (!E || !await (s.isElement == null ? void 0 : s.isElement(C))) && (E = a.floating[v] || i.floating[p]);
    const N = _ / 2 - S / 2, k = E / 2 - h[p] / 2 - 1, R = ln(d[b], k), A = ln(d[y], k), T = R, D = E - h[p] - A, O = E / 2 - h[p] / 2 + N, B = Ya(T, O, D), W = !l.arrow && Pr(o) != null && O !== B && i.reference[p] / 2 - (O < T ? R : A) - h[p] / 2 < 0, U = W ? O < T ? O - T : O - D : 0;
    return {
      [g]: f[g] + U,
      data: {
        [g]: B,
        centerOffset: O - B - U,
        ...W && {
          alignmentOffset: U
        }
      },
      reset: W
    };
  }
}), M1 = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(n) {
      var t, r;
      const {
        placement: o,
        middlewareData: i,
        rects: s,
        initialPlacement: a,
        platform: l,
        elements: c
      } = n, {
        mainAxis: u = !0,
        crossAxis: d = !0,
        fallbackPlacements: f,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: h = !0,
        ...m
      } = jt(e, n);
      if ((t = i.arrow) != null && t.alignmentOffset)
        return {};
      const b = Ut(o), y = xt(a), v = Ut(a) === a, _ = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), S = f || (v || !h ? [Ni(a)] : N1(a)), C = p !== "none";
      !f && C && S.push(...F1(a, h, p, _));
      const E = [a, ...S], N = await l.detectOverflow(n, m), k = [];
      let R = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (u && k.push(N[b]), d) {
        const O = k1(o, s, _);
        k.push(N[O[0]], N[O[1]]);
      }
      if (R = [...R, {
        placement: o,
        overflows: k
      }], !k.every((O) => O <= 0)) {
        var A, T;
        const O = (((A = i.flip) == null ? void 0 : A.index) || 0) + 1, B = E[O];
        if (B && (!(d === "alignment" ? y !== xt(B) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        R.every((j) => xt(j.placement) === y ? j.overflows[0] > 0 : !0)))
          return {
            data: {
              index: O,
              overflows: R
            },
            reset: {
              placement: B
            }
          };
        let W = (T = R.filter((U) => U.overflows[0] <= 0).sort((U, j) => U.overflows[1] - j.overflows[1])[0]) == null ? void 0 : T.placement;
        if (!W)
          switch (g) {
            case "bestFit": {
              var D;
              const U = (D = R.filter((j) => {
                if (C) {
                  const q = xt(j.placement);
                  return q === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  q === "y";
                }
                return !0;
              }).map((j) => [j.placement, j.overflows.filter((q) => q > 0).reduce((q, te) => q + te, 0)]).sort((j, q) => j[1] - q[1])[0]) == null ? void 0 : D[0];
              U && (W = U);
              break;
            }
            case "initialPlacement":
              W = a;
              break;
          }
        if (o !== W)
          return {
            reset: {
              placement: W
            }
          };
      }
      return {};
    }
  };
};
function Vd(e, n) {
  return {
    top: e.top - n.height,
    right: e.right - n.width,
    bottom: e.bottom - n.height,
    left: e.left - n.width
  };
}
function jd(e) {
  return _1.some((n) => e[n] >= 0);
}
const D1 = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(n) {
      const {
        rects: t,
        platform: r
      } = n, {
        strategy: o = "referenceHidden",
        ...i
      } = jt(e, n);
      switch (o) {
        case "referenceHidden": {
          const s = await r.detectOverflow(n, {
            ...i,
            elementContext: "reference"
          }), a = Vd(s, t.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: jd(a)
            }
          };
        }
        case "escaped": {
          const s = await r.detectOverflow(n, {
            ...i,
            altBoundary: !0
          }), a = Vd(s, t.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: jd(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, hm = /* @__PURE__ */ new Set(["left", "top"]);
async function L1(e, n) {
  const {
    placement: t,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Ut(t), a = Pr(t), l = xt(t) === "y", c = hm.has(s) ? -1 : 1, u = i && l ? -1 : 1, d = jt(n, e);
  let {
    mainAxis: f,
    crossAxis: g,
    alignmentAxis: p
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return a && typeof p == "number" && (g = a === "end" ? p * -1 : p), l ? {
    x: g * u,
    y: f * c
  } : {
    x: f * c,
    y: g * u
  };
}
const z1 = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(n) {
      var t, r;
      const {
        x: o,
        y: i,
        placement: s,
        middlewareData: a
      } = n, l = await L1(n, e);
      return s === ((t = a.offset) == null ? void 0 : t.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
        x: o + l.x,
        y: i + l.y,
        data: {
          ...l,
          placement: s
        }
      };
    }
  };
}, B1 = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(n) {
      const {
        x: t,
        y: r,
        placement: o,
        platform: i
      } = n, {
        mainAxis: s = !0,
        crossAxis: a = !1,
        limiter: l = {
          fn: (b) => {
            let {
              x: y,
              y: v
            } = b;
            return {
              x: y,
              y: v
            };
          }
        },
        ...c
      } = jt(e, n), u = {
        x: t,
        y: r
      }, d = await i.detectOverflow(n, c), f = xt(Ut(o)), g = oc(f);
      let p = u[g], h = u[f];
      if (s) {
        const b = g === "y" ? "top" : "left", y = g === "y" ? "bottom" : "right", v = p + d[b], _ = p - d[y];
        p = Ya(v, p, _);
      }
      if (a) {
        const b = f === "y" ? "top" : "left", y = f === "y" ? "bottom" : "right", v = h + d[b], _ = h - d[y];
        h = Ya(v, h, _);
      }
      const m = l.fn({
        ...n,
        [g]: p,
        [f]: h
      });
      return {
        ...m,
        data: {
          x: m.x - t,
          y: m.y - r,
          enabled: {
            [g]: s,
            [f]: a
          }
        }
      };
    }
  };
}, V1 = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(n) {
      const {
        x: t,
        y: r,
        placement: o,
        rects: i,
        middlewareData: s
      } = n, {
        offset: a = 0,
        mainAxis: l = !0,
        crossAxis: c = !0
      } = jt(e, n), u = {
        x: t,
        y: r
      }, d = xt(o), f = oc(d);
      let g = u[f], p = u[d];
      const h = jt(a, n), m = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (l) {
        const v = f === "y" ? "height" : "width", _ = i.reference[f] - i.floating[v] + m.mainAxis, S = i.reference[f] + i.reference[v] - m.mainAxis;
        g < _ ? g = _ : g > S && (g = S);
      }
      if (c) {
        var b, y;
        const v = f === "y" ? "width" : "height", _ = hm.has(Ut(o)), S = i.reference[d] - i.floating[v] + (_ && ((b = s.offset) == null ? void 0 : b[d]) || 0) + (_ ? 0 : m.crossAxis), C = i.reference[d] + i.reference[v] + (_ ? 0 : ((y = s.offset) == null ? void 0 : y[d]) || 0) - (_ ? m.crossAxis : 0);
        p < S ? p = S : p > C && (p = C);
      }
      return {
        [f]: g,
        [d]: p
      };
    }
  };
}, j1 = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(n) {
      var t, r;
      const {
        placement: o,
        rects: i,
        platform: s,
        elements: a
      } = n, {
        apply: l = () => {
        },
        ...c
      } = jt(e, n), u = await s.detectOverflow(n, c), d = Ut(o), f = Pr(o), g = xt(o) === "y", {
        width: p,
        height: h
      } = i.floating;
      let m, b;
      d === "top" || d === "bottom" ? (m = d, b = f === (await (s.isRTL == null ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (b = d, m = f === "end" ? "top" : "bottom");
      const y = h - u.top - u.bottom, v = p - u.left - u.right, _ = ln(h - u[m], y), S = ln(p - u[b], v), C = !n.middlewareData.shift;
      let E = _, N = S;
      if ((t = n.middlewareData.shift) != null && t.enabled.x && (N = v), (r = n.middlewareData.shift) != null && r.enabled.y && (E = y), C && !f) {
        const R = We(u.left, 0), A = We(u.right, 0), T = We(u.top, 0), D = We(u.bottom, 0);
        g ? N = p - 2 * (R !== 0 || A !== 0 ? R + A : We(u.left, u.right)) : E = h - 2 * (T !== 0 || D !== 0 ? T + D : We(u.top, u.bottom));
      }
      await l({
        ...n,
        availableWidth: N,
        availableHeight: E
      });
      const k = await s.getDimensions(a.floating);
      return p !== k.width || h !== k.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function fs() {
  return typeof window < "u";
}
function Ir(e) {
  return mm(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ke(e) {
  var n;
  return (e == null || (n = e.ownerDocument) == null ? void 0 : n.defaultView) || window;
}
function Nt(e) {
  var n;
  return (n = (mm(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : n.documentElement;
}
function mm(e) {
  return fs() ? e instanceof Node || e instanceof Ke(e).Node : !1;
}
function ut(e) {
  return fs() ? e instanceof Element || e instanceof Ke(e).Element : !1;
}
function kt(e) {
  return fs() ? e instanceof HTMLElement || e instanceof Ke(e).HTMLElement : !1;
}
function Ud(e) {
  return !fs() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ke(e).ShadowRoot;
}
const U1 = /* @__PURE__ */ new Set(["inline", "contents"]);
function bo(e) {
  const {
    overflow: n,
    overflowX: t,
    overflowY: r,
    display: o
  } = dt(e);
  return /auto|scroll|overlay|hidden|clip/.test(n + r + t) && !U1.has(o);
}
const G1 = /* @__PURE__ */ new Set(["table", "td", "th"]);
function W1(e) {
  return G1.has(Ir(e));
}
const H1 = [":popover-open", ":modal"];
function gs(e) {
  return H1.some((n) => {
    try {
      return e.matches(n);
    } catch {
      return !1;
    }
  });
}
const K1 = ["transform", "translate", "scale", "rotate", "perspective"], q1 = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Y1 = ["paint", "layout", "strict", "content"];
function ac(e) {
  const n = lc(), t = ut(e) ? dt(e) : e;
  return K1.some((r) => t[r] ? t[r] !== "none" : !1) || (t.containerType ? t.containerType !== "normal" : !1) || !n && (t.backdropFilter ? t.backdropFilter !== "none" : !1) || !n && (t.filter ? t.filter !== "none" : !1) || q1.some((r) => (t.willChange || "").includes(r)) || Y1.some((r) => (t.contain || "").includes(r));
}
function Z1(e) {
  let n = cn(e);
  for (; kt(n) && !mr(n); ) {
    if (ac(n))
      return n;
    if (gs(n))
      return null;
    n = cn(n);
  }
  return null;
}
function lc() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const J1 = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function mr(e) {
  return J1.has(Ir(e));
}
function dt(e) {
  return Ke(e).getComputedStyle(e);
}
function ps(e) {
  return ut(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function cn(e) {
  if (Ir(e) === "html")
    return e;
  const n = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Ud(e) && e.host || // Fallback.
    Nt(e)
  );
  return Ud(n) ? n.host : n;
}
function ym(e) {
  const n = cn(e);
  return mr(n) ? e.ownerDocument ? e.ownerDocument.body : e.body : kt(n) && bo(n) ? n : ym(n);
}
function oo(e, n, t) {
  var r;
  n === void 0 && (n = []), t === void 0 && (t = !0);
  const o = ym(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Ke(o);
  if (i) {
    const a = Ja(s);
    return n.concat(s, s.visualViewport || [], bo(o) ? o : [], a && t ? oo(a) : []);
  }
  return n.concat(o, oo(o, [], t));
}
function Ja(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function bm(e) {
  const n = dt(e);
  let t = parseFloat(n.width) || 0, r = parseFloat(n.height) || 0;
  const o = kt(e), i = o ? e.offsetWidth : t, s = o ? e.offsetHeight : r, a = ki(t) !== i || ki(r) !== s;
  return a && (t = i, r = s), {
    width: t,
    height: r,
    $: a
  };
}
function cc(e) {
  return ut(e) ? e : e.contextElement;
}
function lr(e) {
  const n = cc(e);
  if (!kt(n))
    return Ct(1);
  const t = n.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = bm(n);
  let s = (i ? ki(t.width) : t.width) / r, a = (i ? ki(t.height) : t.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const X1 = /* @__PURE__ */ Ct(0);
function vm(e) {
  const n = Ke(e);
  return !lc() || !n.visualViewport ? X1 : {
    x: n.visualViewport.offsetLeft,
    y: n.visualViewport.offsetTop
  };
}
function Q1(e, n, t) {
  return n === void 0 && (n = !1), !t || n && t !== Ke(e) ? !1 : n;
}
function Dn(e, n, t, r) {
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  const o = e.getBoundingClientRect(), i = cc(e);
  let s = Ct(1);
  n && (r ? ut(r) && (s = lr(r)) : s = lr(e));
  const a = Q1(i, t, r) ? vm(i) : Ct(0);
  let l = (o.left + a.x) / s.x, c = (o.top + a.y) / s.y, u = o.width / s.x, d = o.height / s.y;
  if (i) {
    const f = Ke(i), g = r && ut(r) ? Ke(r) : r;
    let p = f, h = Ja(p);
    for (; h && r && g !== p; ) {
      const m = lr(h), b = h.getBoundingClientRect(), y = dt(h), v = b.left + (h.clientLeft + parseFloat(y.paddingLeft)) * m.x, _ = b.top + (h.clientTop + parseFloat(y.paddingTop)) * m.y;
      l *= m.x, c *= m.y, u *= m.x, d *= m.y, l += v, c += _, p = Ke(h), h = Ja(p);
    }
  }
  return Ri({
    width: u,
    height: d,
    x: l,
    y: c
  });
}
function hs(e, n) {
  const t = ps(e).scrollLeft;
  return n ? n.left + t : Dn(Nt(e)).left + t;
}
function xm(e, n) {
  const t = e.getBoundingClientRect(), r = t.left + n.scrollLeft - hs(e, t), o = t.top + n.scrollTop;
  return {
    x: r,
    y: o
  };
}
function eN(e) {
  let {
    elements: n,
    rect: t,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = Nt(r), a = n ? gs(n.floating) : !1;
  if (r === s || a && i)
    return t;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = Ct(1);
  const u = Ct(0), d = kt(r);
  if ((d || !d && !i) && ((Ir(r) !== "body" || bo(s)) && (l = ps(r)), kt(r))) {
    const g = Dn(r);
    c = lr(r), u.x = g.x + r.clientLeft, u.y = g.y + r.clientTop;
  }
  const f = s && !d && !i ? xm(s, l) : Ct(0);
  return {
    width: t.width * c.x,
    height: t.height * c.y,
    x: t.x * c.x - l.scrollLeft * c.x + u.x + f.x,
    y: t.y * c.y - l.scrollTop * c.y + u.y + f.y
  };
}
function tN(e) {
  return Array.from(e.getClientRects());
}
function nN(e) {
  const n = Nt(e), t = ps(e), r = e.ownerDocument.body, o = We(n.scrollWidth, n.clientWidth, r.scrollWidth, r.clientWidth), i = We(n.scrollHeight, n.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -t.scrollLeft + hs(e);
  const a = -t.scrollTop;
  return dt(r).direction === "rtl" && (s += We(n.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
const Gd = 25;
function rN(e, n) {
  const t = Ke(e), r = Nt(e), o = t.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const u = lc();
    (!u || u && n === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  const c = hs(r);
  if (c <= 0) {
    const u = r.ownerDocument, d = u.body, f = getComputedStyle(d), g = u.compatMode === "CSS1Compat" && parseFloat(f.marginLeft) + parseFloat(f.marginRight) || 0, p = Math.abs(r.clientWidth - d.clientWidth - g);
    p <= Gd && (i -= p);
  } else c <= Gd && (i += c);
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
const oN = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function iN(e, n) {
  const t = Dn(e, !0, n === "fixed"), r = t.top + e.clientTop, o = t.left + e.clientLeft, i = kt(e) ? lr(e) : Ct(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, c = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: c
  };
}
function Wd(e, n, t) {
  let r;
  if (n === "viewport")
    r = rN(e, t);
  else if (n === "document")
    r = nN(Nt(e));
  else if (ut(n))
    r = iN(n, t);
  else {
    const o = vm(e);
    r = {
      x: n.x - o.x,
      y: n.y - o.y,
      width: n.width,
      height: n.height
    };
  }
  return Ri(r);
}
function wm(e, n) {
  const t = cn(e);
  return t === n || !ut(t) || mr(t) ? !1 : dt(t).position === "fixed" || wm(t, n);
}
function sN(e, n) {
  const t = n.get(e);
  if (t)
    return t;
  let r = oo(e, [], !1).filter((a) => ut(a) && Ir(a) !== "body"), o = null;
  const i = dt(e).position === "fixed";
  let s = i ? cn(e) : e;
  for (; ut(s) && !mr(s); ) {
    const a = dt(s), l = ac(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && oN.has(o.position) || bo(s) && !l && wm(e, s)) ? r = r.filter((u) => u !== s) : o = a, s = cn(s);
  }
  return n.set(e, r), r;
}
function aN(e) {
  let {
    element: n,
    boundary: t,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...t === "clippingAncestors" ? gs(n) ? [] : sN(n, this._c) : [].concat(t), r], a = s[0], l = s.reduce((c, u) => {
    const d = Wd(n, u, o);
    return c.top = We(d.top, c.top), c.right = ln(d.right, c.right), c.bottom = ln(d.bottom, c.bottom), c.left = We(d.left, c.left), c;
  }, Wd(n, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function lN(e) {
  const {
    width: n,
    height: t
  } = bm(e);
  return {
    width: n,
    height: t
  };
}
function cN(e, n, t) {
  const r = kt(n), o = Nt(n), i = t === "fixed", s = Dn(e, !0, i, n);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Ct(0);
  function c() {
    l.x = hs(o);
  }
  if (r || !r && !i)
    if ((Ir(n) !== "body" || bo(o)) && (a = ps(n)), r) {
      const g = Dn(n, !0, i, n);
      l.x = g.x + n.clientLeft, l.y = g.y + n.clientTop;
    } else o && c();
  i && !r && o && c();
  const u = o && !r && !i ? xm(o, a) : Ct(0), d = s.left + a.scrollLeft - l.x - u.x, f = s.top + a.scrollTop - l.y - u.y;
  return {
    x: d,
    y: f,
    width: s.width,
    height: s.height
  };
}
function Xs(e) {
  return dt(e).position === "static";
}
function Hd(e, n) {
  if (!kt(e) || dt(e).position === "fixed")
    return null;
  if (n)
    return n(e);
  let t = e.offsetParent;
  return Nt(e) === t && (t = t.ownerDocument.body), t;
}
function _m(e, n) {
  const t = Ke(e);
  if (gs(e))
    return t;
  if (!kt(e)) {
    let o = cn(e);
    for (; o && !mr(o); ) {
      if (ut(o) && !Xs(o))
        return o;
      o = cn(o);
    }
    return t;
  }
  let r = Hd(e, n);
  for (; r && W1(r) && Xs(r); )
    r = Hd(r, n);
  return r && mr(r) && Xs(r) && !ac(r) ? t : r || Z1(e) || t;
}
const uN = async function(e) {
  const n = this.getOffsetParent || _m, t = this.getDimensions, r = await t(e.floating);
  return {
    reference: cN(e.reference, await n(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function dN(e) {
  return dt(e).direction === "rtl";
}
const fN = {
  convertOffsetParentRelativeRectToViewportRelativeRect: eN,
  getDocumentElement: Nt,
  getClippingRect: aN,
  getOffsetParent: _m,
  getElementRects: uN,
  getClientRects: tN,
  getDimensions: lN,
  getScale: lr,
  isElement: ut,
  isRTL: dN
};
function Sm(e, n) {
  return e.x === n.x && e.y === n.y && e.width === n.width && e.height === n.height;
}
function gN(e, n) {
  let t = null, r;
  const o = Nt(e);
  function i() {
    var a;
    clearTimeout(r), (a = t) == null || a.disconnect(), t = null;
  }
  function s(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), i();
    const c = e.getBoundingClientRect(), {
      left: u,
      top: d,
      width: f,
      height: g
    } = c;
    if (a || n(), !f || !g)
      return;
    const p = Lo(d), h = Lo(o.clientWidth - (u + f)), m = Lo(o.clientHeight - (d + g)), b = Lo(u), v = {
      rootMargin: -p + "px " + -h + "px " + -m + "px " + -b + "px",
      threshold: We(0, ln(1, l)) || 1
    };
    let _ = !0;
    function S(C) {
      const E = C[0].intersectionRatio;
      if (E !== l) {
        if (!_)
          return s();
        E ? s(!1, E) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      E === 1 && !Sm(c, e.getBoundingClientRect()) && s(), _ = !1;
    }
    try {
      t = new IntersectionObserver(S, {
        ...v,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      t = new IntersectionObserver(S, v);
    }
    t.observe(e);
  }
  return s(!0), i;
}
function pN(e, n, t, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, c = cc(e), u = o || i ? [...c ? oo(c) : [], ...oo(n)] : [];
  u.forEach((b) => {
    o && b.addEventListener("scroll", t, {
      passive: !0
    }), i && b.addEventListener("resize", t);
  });
  const d = c && a ? gN(c, t) : null;
  let f = -1, g = null;
  s && (g = new ResizeObserver((b) => {
    let [y] = b;
    y && y.target === c && g && (g.unobserve(n), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var v;
      (v = g) == null || v.observe(n);
    })), t();
  }), c && !l && g.observe(c), g.observe(n));
  let p, h = l ? Dn(e) : null;
  l && m();
  function m() {
    const b = Dn(e);
    h && !Sm(h, b) && t(), h = b, p = requestAnimationFrame(m);
  }
  return t(), () => {
    var b;
    u.forEach((y) => {
      o && y.removeEventListener("scroll", t), i && y.removeEventListener("resize", t);
    }), d == null || d(), (b = g) == null || b.disconnect(), g = null, l && cancelAnimationFrame(p);
  };
}
const hN = z1, mN = B1, yN = M1, bN = j1, vN = D1, Kd = $1, xN = V1, wN = (e, n, t) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: fN,
    ...t
  }, i = {
    ...o.platform,
    _c: r
  };
  return O1(e, n, {
    ...o,
    platform: i
  });
};
var _N = typeof document < "u", SN = function() {
}, Yo = _N ? xr : SN;
function Ai(e, n) {
  if (e === n)
    return !0;
  if (typeof e != typeof n)
    return !1;
  if (typeof e == "function" && e.toString() === n.toString())
    return !0;
  let t, r, o;
  if (e && n && typeof e == "object") {
    if (Array.isArray(e)) {
      if (t = e.length, t !== n.length) return !1;
      for (r = t; r-- !== 0; )
        if (!Ai(e[r], n[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), t = o.length, t !== Object.keys(n).length)
      return !1;
    for (r = t; r-- !== 0; )
      if (!{}.hasOwnProperty.call(n, o[r]))
        return !1;
    for (r = t; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !Ai(e[i], n[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && n !== n;
}
function Cm(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function qd(e, n) {
  const t = Cm(e);
  return Math.round(n * t) / t;
}
function Qs(e) {
  const n = x.useRef(e);
  return Yo(() => {
    n.current = e;
  }), n;
}
function CN(e) {
  e === void 0 && (e = {});
  const {
    placement: n = "bottom",
    strategy: t = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: i,
      floating: s
    } = {},
    transform: a = !0,
    whileElementsMounted: l,
    open: c
  } = e, [u, d] = x.useState({
    x: 0,
    y: 0,
    strategy: t,
    placement: n,
    middlewareData: {},
    isPositioned: !1
  }), [f, g] = x.useState(r);
  Ai(f, r) || g(r);
  const [p, h] = x.useState(null), [m, b] = x.useState(null), y = x.useCallback((j) => {
    j !== C.current && (C.current = j, h(j));
  }, []), v = x.useCallback((j) => {
    j !== E.current && (E.current = j, b(j));
  }, []), _ = i || p, S = s || m, C = x.useRef(null), E = x.useRef(null), N = x.useRef(u), k = l != null, R = Qs(l), A = Qs(o), T = Qs(c), D = x.useCallback(() => {
    if (!C.current || !E.current)
      return;
    const j = {
      placement: n,
      strategy: t,
      middleware: f
    };
    A.current && (j.platform = A.current), wN(C.current, E.current, j).then((q) => {
      const te = {
        ...q,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: T.current !== !1
      };
      O.current && !Ai(N.current, te) && (N.current = te, sf.flushSync(() => {
        d(te);
      }));
    });
  }, [f, n, t, A, T]);
  Yo(() => {
    c === !1 && N.current.isPositioned && (N.current.isPositioned = !1, d((j) => ({
      ...j,
      isPositioned: !1
    })));
  }, [c]);
  const O = x.useRef(!1);
  Yo(() => (O.current = !0, () => {
    O.current = !1;
  }), []), Yo(() => {
    if (_ && (C.current = _), S && (E.current = S), _ && S) {
      if (R.current)
        return R.current(_, S, D);
      D();
    }
  }, [_, S, D, R, k]);
  const B = x.useMemo(() => ({
    reference: C,
    floating: E,
    setReference: y,
    setFloating: v
  }), [y, v]), W = x.useMemo(() => ({
    reference: _,
    floating: S
  }), [_, S]), U = x.useMemo(() => {
    const j = {
      position: t,
      left: 0,
      top: 0
    };
    if (!W.floating)
      return j;
    const q = qd(W.floating, u.x), te = qd(W.floating, u.y);
    return a ? {
      ...j,
      transform: "translate(" + q + "px, " + te + "px)",
      ...Cm(W.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: t,
      left: q,
      top: te
    };
  }, [t, a, W.floating, u.x, u.y]);
  return x.useMemo(() => ({
    ...u,
    update: D,
    refs: B,
    elements: W,
    floatingStyles: U
  }), [u, D, B, W, U]);
}
const EN = (e) => {
  function n(t) {
    return {}.hasOwnProperty.call(t, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(t) : e;
      return r && n(r) ? r.current != null ? Kd({
        element: r.current,
        padding: o
      }).fn(t) : {} : r ? Kd({
        element: r,
        padding: o
      }).fn(t) : {};
    }
  };
}, kN = (e, n) => ({
  ...hN(e),
  options: [e, n]
}), NN = (e, n) => ({
  ...mN(e),
  options: [e, n]
}), RN = (e, n) => ({
  ...xN(e),
  options: [e, n]
}), AN = (e, n) => ({
  ...yN(e),
  options: [e, n]
}), TN = (e, n) => ({
  ...bN(e),
  options: [e, n]
}), FN = (e, n) => ({
  ...vN(e),
  options: [e, n]
}), PN = (e, n) => ({
  ...EN(e),
  options: [e, n]
});
var IN = "Arrow", Em = x.forwardRef((e, n) => {
  const { children: t, width: r = 10, height: o = 5, ...i } = e;
  return /* @__PURE__ */ w(
    pe.svg,
    {
      ...i,
      ref: n,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? t : /* @__PURE__ */ w("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Em.displayName = IN;
var ON = Em, uc = "Popper", [km, Nm] = Gt(uc), [$N, Rm] = km(uc), Am = (e) => {
  const { __scopePopper: n, children: t } = e, [r, o] = x.useState(null);
  return /* @__PURE__ */ w($N, { scope: n, anchor: r, onAnchorChange: o, children: t });
};
Am.displayName = uc;
var Tm = "PopperAnchor", Fm = x.forwardRef(
  (e, n) => {
    const { __scopePopper: t, virtualRef: r, ...o } = e, i = Rm(Tm, t), s = x.useRef(null), a = ve(n, s), l = x.useRef(null);
    return x.useEffect(() => {
      const c = l.current;
      l.current = (r == null ? void 0 : r.current) || s.current, c !== l.current && i.onAnchorChange(l.current);
    }), r ? null : /* @__PURE__ */ w(pe.div, { ...o, ref: a });
  }
);
Fm.displayName = Tm;
var dc = "PopperContent", [MN, DN] = km(dc), Pm = x.forwardRef(
  (e, n) => {
    var Pe, Be, Ve, Rt, gn, xo;
    const {
      __scopePopper: t,
      side: r = "bottom",
      sideOffset: o = 0,
      align: i = "center",
      alignOffset: s = 0,
      arrowPadding: a = 0,
      avoidCollisions: l = !0,
      collisionBoundary: c = [],
      collisionPadding: u = 0,
      sticky: d = "partial",
      hideWhenDetached: f = !1,
      updatePositionStrategy: g = "optimized",
      onPlaced: p,
      ...h
    } = e, m = Rm(dc, t), [b, y] = x.useState(null), v = ve(n, (At) => y(At)), [_, S] = x.useState(null), C = il(_), E = (C == null ? void 0 : C.width) ?? 0, N = (C == null ? void 0 : C.height) ?? 0, k = r + (i !== "center" ? "-" + i : ""), R = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, A = Array.isArray(c) ? c : [c], T = A.length > 0, D = {
      padding: R,
      boundary: A.filter(zN),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: T
    }, { refs: O, floatingStyles: B, placement: W, isPositioned: U, middlewareData: j } = CN({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: k,
      whileElementsMounted: (...At) => pN(...At, {
        animationFrame: g === "always"
      }),
      elements: {
        reference: m.anchor
      },
      middleware: [
        kN({ mainAxis: o + N, alignmentAxis: s }),
        l && NN({
          mainAxis: !0,
          crossAxis: !1,
          limiter: d === "partial" ? RN() : void 0,
          ...D
        }),
        l && AN({ ...D }),
        TN({
          ...D,
          apply: ({ elements: At, rects: mc, availableWidth: Oy, availableHeight: $y }) => {
            const { width: My, height: Dy } = mc.reference, wo = At.floating.style;
            wo.setProperty("--radix-popper-available-width", `${Oy}px`), wo.setProperty("--radix-popper-available-height", `${$y}px`), wo.setProperty("--radix-popper-anchor-width", `${My}px`), wo.setProperty("--radix-popper-anchor-height", `${Dy}px`);
          }
        }),
        _ && PN({ element: _, padding: a }),
        BN({ arrowWidth: E, arrowHeight: N }),
        f && FN({ strategy: "referenceHidden", ...D })
      ]
    }), [q, te] = $m(W), ie = Cn(p);
    zt(() => {
      U && (ie == null || ie());
    }, [U, ie]);
    const he = (Pe = j.arrow) == null ? void 0 : Pe.x, ze = (Be = j.arrow) == null ? void 0 : Be.y, Se = ((Ve = j.arrow) == null ? void 0 : Ve.centerOffset) !== 0, [De, Ce] = x.useState();
    return zt(() => {
      b && Ce(window.getComputedStyle(b).zIndex);
    }, [b]), /* @__PURE__ */ w(
      "div",
      {
        ref: O.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...B,
          transform: U ? B.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: De,
          "--radix-popper-transform-origin": [
            (Rt = j.transformOrigin) == null ? void 0 : Rt.x,
            (gn = j.transformOrigin) == null ? void 0 : gn.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((xo = j.hide) == null ? void 0 : xo.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ w(
          MN,
          {
            scope: t,
            placedSide: q,
            onArrowChange: S,
            arrowX: he,
            arrowY: ze,
            shouldHideArrow: Se,
            children: /* @__PURE__ */ w(
              pe.div,
              {
                "data-side": q,
                "data-align": te,
                ...h,
                ref: v,
                style: {
                  ...h.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: U ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Pm.displayName = dc;
var Im = "PopperArrow", LN = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Om = x.forwardRef(function(n, t) {
  const { __scopePopper: r, ...o } = n, i = DN(Im, r), s = LN[i.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ w(
      "span",
      {
        ref: i.onArrowChange,
        style: {
          position: "absolute",
          left: i.arrowX,
          top: i.arrowY,
          [s]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[i.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[i.placedSide],
          visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ w(
          ON,
          {
            ...o,
            ref: t,
            style: {
              ...o.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
Om.displayName = Im;
function zN(e) {
  return e !== null;
}
var BN = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(n) {
    var m, b, y;
    const { placement: t, rects: r, middlewareData: o } = n, s = ((m = o.arrow) == null ? void 0 : m.centerOffset) !== 0, a = s ? 0 : e.arrowWidth, l = s ? 0 : e.arrowHeight, [c, u] = $m(t), d = { start: "0%", center: "50%", end: "100%" }[u], f = (((b = o.arrow) == null ? void 0 : b.x) ?? 0) + a / 2, g = (((y = o.arrow) == null ? void 0 : y.y) ?? 0) + l / 2;
    let p = "", h = "";
    return c === "bottom" ? (p = s ? d : `${f}px`, h = `${-l}px`) : c === "top" ? (p = s ? d : `${f}px`, h = `${r.floating.height + l}px`) : c === "right" ? (p = `${-l}px`, h = s ? d : `${g}px`) : c === "left" && (p = `${r.floating.width + l}px`, h = s ? d : `${g}px`), { data: { x: p, y: h } };
  }
});
function $m(e) {
  const [n, t = "center"] = e.split("-");
  return [n, t];
}
var VN = Am, Mm = Fm, jN = Pm, UN = Om, GN = "Portal", Dm = x.forwardRef((e, n) => {
  var a;
  const { container: t, ...r } = e, [o, i] = x.useState(!1);
  zt(() => i(!0), []);
  const s = t || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
  return s ? Gy.createPortal(/* @__PURE__ */ w(pe.div, { ...r, ref: n }), s) : null;
});
Dm.displayName = GN;
var WN = function(e) {
  if (typeof document > "u")
    return null;
  var n = Array.isArray(e) ? e[0] : e;
  return n.ownerDocument.body;
}, Kn = /* @__PURE__ */ new WeakMap(), zo = /* @__PURE__ */ new WeakMap(), Bo = {}, ea = 0, Lm = function(e) {
  return e && (e.host || Lm(e.parentNode));
}, HN = function(e, n) {
  return n.map(function(t) {
    if (e.contains(t))
      return t;
    var r = Lm(t);
    return r && e.contains(r) ? r : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(t) {
    return !!t;
  });
}, KN = function(e, n, t, r) {
  var o = HN(n, Array.isArray(e) ? e : [e]);
  Bo[t] || (Bo[t] = /* @__PURE__ */ new WeakMap());
  var i = Bo[t], s = [], a = /* @__PURE__ */ new Set(), l = new Set(o), c = function(d) {
    !d || a.has(d) || (a.add(d), c(d.parentNode));
  };
  o.forEach(c);
  var u = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (a.has(f))
        u(f);
      else
        try {
          var g = f.getAttribute(r), p = g !== null && g !== "false", h = (Kn.get(f) || 0) + 1, m = (i.get(f) || 0) + 1;
          Kn.set(f, h), i.set(f, m), s.push(f), h === 1 && p && zo.set(f, !0), m === 1 && f.setAttribute(t, "true"), p || f.setAttribute(r, "true");
        } catch (b) {
          console.error("aria-hidden: cannot operate on ", f, b);
        }
    });
  };
  return u(n), a.clear(), ea++, function() {
    s.forEach(function(d) {
      var f = Kn.get(d) - 1, g = i.get(d) - 1;
      Kn.set(d, f), i.set(d, g), f || (zo.has(d) || d.removeAttribute(r), zo.delete(d)), g || d.removeAttribute(t);
    }), ea--, ea || (Kn = /* @__PURE__ */ new WeakMap(), Kn = /* @__PURE__ */ new WeakMap(), zo = /* @__PURE__ */ new WeakMap(), Bo = {});
  };
}, qN = function(e, n, t) {
  t === void 0 && (t = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = WN(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), KN(r, o, t, "aria-hidden")) : function() {
    return null;
  };
}, bt = function() {
  return bt = Object.assign || function(n) {
    for (var t, r = 1, o = arguments.length; r < o; r++) {
      t = arguments[r];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
    }
    return n;
  }, bt.apply(this, arguments);
};
function zm(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
}
function YN(e, n, t) {
  if (t || arguments.length === 2) for (var r = 0, o = n.length, i; r < o; r++)
    (i || !(r in n)) && (i || (i = Array.prototype.slice.call(n, 0, r)), i[r] = n[r]);
  return e.concat(i || Array.prototype.slice.call(n));
}
var Zo = "right-scroll-bar-position", Jo = "width-before-scroll-bar", ZN = "with-scroll-bars-hidden", JN = "--removed-body-scroll-bar-size";
function ta(e, n) {
  return typeof e == "function" ? e(n) : e && (e.current = n), e;
}
function XN(e, n) {
  var t = rn(function() {
    return {
      // value
      value: e,
      // last callback
      callback: n,
      // "memoized" public interface
      facade: {
        get current() {
          return t.value;
        },
        set current(r) {
          var o = t.value;
          o !== r && (t.value = r, t.callback(r, o));
        }
      }
    };
  })[0];
  return t.callback = n, t.facade;
}
var QN = typeof window < "u" ? x.useLayoutEffect : x.useEffect, Yd = /* @__PURE__ */ new WeakMap();
function eR(e, n) {
  var t = XN(null, function(r) {
    return e.forEach(function(o) {
      return ta(o, r);
    });
  });
  return QN(function() {
    var r = Yd.get(t);
    if (r) {
      var o = new Set(r), i = new Set(e), s = t.current;
      o.forEach(function(a) {
        i.has(a) || ta(a, null);
      }), i.forEach(function(a) {
        o.has(a) || ta(a, s);
      });
    }
    Yd.set(t, e);
  }, [e]), t;
}
function tR(e) {
  return e;
}
function nR(e, n) {
  n === void 0 && (n = tR);
  var t = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return t.length ? t[t.length - 1] : e;
    },
    useMedium: function(i) {
      var s = n(i, r);
      return t.push(s), function() {
        t = t.filter(function(a) {
          return a !== s;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (r = !0; t.length; ) {
        var s = t;
        t = [], s.forEach(i);
      }
      t = {
        push: function(a) {
          return i(a);
        },
        filter: function() {
          return t;
        }
      };
    },
    assignMedium: function(i) {
      r = !0;
      var s = [];
      if (t.length) {
        var a = t;
        t = [], a.forEach(i), s = t;
      }
      var l = function() {
        var u = s;
        s = [], u.forEach(i);
      }, c = function() {
        return Promise.resolve().then(l);
      };
      c(), t = {
        push: function(u) {
          s.push(u), c();
        },
        filter: function(u) {
          return s = s.filter(u), t;
        }
      };
    }
  };
  return o;
}
function rR(e) {
  e === void 0 && (e = {});
  var n = nR(null);
  return n.options = bt({ async: !0, ssr: !1 }, e), n;
}
var Bm = function(e) {
  var n = e.sideCar, t = zm(e, ["sideCar"]);
  if (!n)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = n.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return x.createElement(r, bt({}, t));
};
Bm.isSideCarExport = !0;
function oR(e, n) {
  return e.useMedium(n), Bm;
}
var Vm = rR(), na = function() {
}, ms = x.forwardRef(function(e, n) {
  var t = x.useRef(null), r = x.useState({
    onScrollCapture: na,
    onWheelCapture: na,
    onTouchMoveCapture: na
  }), o = r[0], i = r[1], s = e.forwardProps, a = e.children, l = e.className, c = e.removeScrollBar, u = e.enabled, d = e.shards, f = e.sideCar, g = e.noRelative, p = e.noIsolation, h = e.inert, m = e.allowPinchZoom, b = e.as, y = b === void 0 ? "div" : b, v = e.gapMode, _ = zm(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), S = f, C = eR([t, n]), E = bt(bt({}, _), o);
  return x.createElement(
    x.Fragment,
    null,
    u && x.createElement(S, { sideCar: Vm, removeScrollBar: c, shards: d, noRelative: g, noIsolation: p, inert: h, setCallbacks: i, allowPinchZoom: !!m, lockRef: t, gapMode: v }),
    s ? x.cloneElement(x.Children.only(a), bt(bt({}, E), { ref: C })) : x.createElement(y, bt({}, E, { className: l, ref: C }), a)
  );
});
ms.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ms.classNames = {
  fullWidth: Jo,
  zeroRight: Zo
};
var iR = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function sR() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var n = iR();
  return n && e.setAttribute("nonce", n), e;
}
function aR(e, n) {
  e.styleSheet ? e.styleSheet.cssText = n : e.appendChild(document.createTextNode(n));
}
function lR(e) {
  var n = document.head || document.getElementsByTagName("head")[0];
  n.appendChild(e);
}
var cR = function() {
  var e = 0, n = null;
  return {
    add: function(t) {
      e == 0 && (n = sR()) && (aR(n, t), lR(n)), e++;
    },
    remove: function() {
      e--, !e && n && (n.parentNode && n.parentNode.removeChild(n), n = null);
    }
  };
}, uR = function() {
  var e = cR();
  return function(n, t) {
    x.useEffect(function() {
      return e.add(n), function() {
        e.remove();
      };
    }, [n && t]);
  };
}, jm = function() {
  var e = uR(), n = function(t) {
    var r = t.styles, o = t.dynamic;
    return e(r, o), null;
  };
  return n;
}, dR = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, ra = function(e) {
  return parseInt(e || "", 10) || 0;
}, fR = function(e) {
  var n = window.getComputedStyle(document.body), t = n[e === "padding" ? "paddingLeft" : "marginLeft"], r = n[e === "padding" ? "paddingTop" : "marginTop"], o = n[e === "padding" ? "paddingRight" : "marginRight"];
  return [ra(t), ra(r), ra(o)];
}, gR = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return dR;
  var n = fR(e), t = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: n[0],
    top: n[1],
    right: n[2],
    gap: Math.max(0, r - t + n[2] - n[0])
  };
}, pR = jm(), cr = "data-scroll-locked", hR = function(e, n, t, r) {
  var o = e.left, i = e.top, s = e.right, a = e.gap;
  return t === void 0 && (t = "margin"), `
  .`.concat(ZN, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(cr, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    n && "position: relative ".concat(r, ";"),
    t === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(r, `;
    `),
    t === "padding" && "padding-right: ".concat(a, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Zo, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Jo, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Zo, " .").concat(Zo, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Jo, " .").concat(Jo, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(cr, `] {
    `).concat(JN, ": ").concat(a, `px;
  }
`);
}, Zd = function() {
  var e = parseInt(document.body.getAttribute(cr) || "0", 10);
  return isFinite(e) ? e : 0;
}, mR = function() {
  x.useEffect(function() {
    return document.body.setAttribute(cr, (Zd() + 1).toString()), function() {
      var e = Zd() - 1;
      e <= 0 ? document.body.removeAttribute(cr) : document.body.setAttribute(cr, e.toString());
    };
  }, []);
}, yR = function(e) {
  var n = e.noRelative, t = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  mR();
  var i = x.useMemo(function() {
    return gR(o);
  }, [o]);
  return x.createElement(pR, { styles: hR(i, !n, o, t ? "" : "!important") });
}, Xa = !1;
if (typeof window < "u")
  try {
    var Vo = Object.defineProperty({}, "passive", {
      get: function() {
        return Xa = !0, !0;
      }
    });
    window.addEventListener("test", Vo, Vo), window.removeEventListener("test", Vo, Vo);
  } catch {
    Xa = !1;
  }
var qn = Xa ? { passive: !1 } : !1, bR = function(e) {
  return e.tagName === "TEXTAREA";
}, Um = function(e, n) {
  if (!(e instanceof Element))
    return !1;
  var t = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    t[n] !== "hidden" && // contains scroll inside self
    !(t.overflowY === t.overflowX && !bR(e) && t[n] === "visible")
  );
}, vR = function(e) {
  return Um(e, "overflowY");
}, xR = function(e) {
  return Um(e, "overflowX");
}, Jd = function(e, n) {
  var t = n.ownerDocument, r = n;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Gm(e, r);
    if (o) {
      var i = Wm(e, r), s = i[1], a = i[2];
      if (s > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== t.body);
  return !1;
}, wR = function(e) {
  var n = e.scrollTop, t = e.scrollHeight, r = e.clientHeight;
  return [
    n,
    t,
    r
  ];
}, _R = function(e) {
  var n = e.scrollLeft, t = e.scrollWidth, r = e.clientWidth;
  return [
    n,
    t,
    r
  ];
}, Gm = function(e, n) {
  return e === "v" ? vR(n) : xR(n);
}, Wm = function(e, n) {
  return e === "v" ? wR(n) : _R(n);
}, SR = function(e, n) {
  return e === "h" && n === "rtl" ? -1 : 1;
}, CR = function(e, n, t, r, o) {
  var i = SR(e, window.getComputedStyle(n).direction), s = i * r, a = t.target, l = n.contains(a), c = !1, u = s > 0, d = 0, f = 0;
  do {
    if (!a)
      break;
    var g = Wm(e, a), p = g[0], h = g[1], m = g[2], b = h - m - i * p;
    (p || b) && Gm(e, a) && (d += b, f += p);
    var y = a.parentNode;
    a = y && y.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? y.host : y;
  } while (
    // portaled content
    !l && a !== document.body || // self content
    l && (n.contains(a) || n === a)
  );
  return (u && Math.abs(d) < 1 || !u && Math.abs(f) < 1) && (c = !0), c;
}, jo = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Xd = function(e) {
  return [e.deltaX, e.deltaY];
}, Qd = function(e) {
  return e && "current" in e ? e.current : e;
}, ER = function(e, n) {
  return e[0] === n[0] && e[1] === n[1];
}, kR = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, NR = 0, Yn = [];
function RR(e) {
  var n = x.useRef([]), t = x.useRef([0, 0]), r = x.useRef(), o = x.useState(NR++)[0], i = x.useState(jm)[0], s = x.useRef(e);
  x.useEffect(function() {
    s.current = e;
  }, [e]), x.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var h = YN([e.lockRef.current], (e.shards || []).map(Qd), !0).filter(Boolean);
      return h.forEach(function(m) {
        return m.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), h.forEach(function(m) {
          return m.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = x.useCallback(function(h, m) {
    if ("touches" in h && h.touches.length === 2 || h.type === "wheel" && h.ctrlKey)
      return !s.current.allowPinchZoom;
    var b = jo(h), y = t.current, v = "deltaX" in h ? h.deltaX : y[0] - b[0], _ = "deltaY" in h ? h.deltaY : y[1] - b[1], S, C = h.target, E = Math.abs(v) > Math.abs(_) ? "h" : "v";
    if ("touches" in h && E === "h" && C.type === "range")
      return !1;
    var N = window.getSelection(), k = N && N.anchorNode, R = k ? k === C || k.contains(C) : !1;
    if (R)
      return !1;
    var A = Jd(E, C);
    if (!A)
      return !0;
    if (A ? S = E : (S = E === "v" ? "h" : "v", A = Jd(E, C)), !A)
      return !1;
    if (!r.current && "changedTouches" in h && (v || _) && (r.current = S), !S)
      return !0;
    var T = r.current || S;
    return CR(T, m, h, T === "h" ? v : _);
  }, []), l = x.useCallback(function(h) {
    var m = h;
    if (!(!Yn.length || Yn[Yn.length - 1] !== i)) {
      var b = "deltaY" in m ? Xd(m) : jo(m), y = n.current.filter(function(S) {
        return S.name === m.type && (S.target === m.target || m.target === S.shadowParent) && ER(S.delta, b);
      })[0];
      if (y && y.should) {
        m.cancelable && m.preventDefault();
        return;
      }
      if (!y) {
        var v = (s.current.shards || []).map(Qd).filter(Boolean).filter(function(S) {
          return S.contains(m.target);
        }), _ = v.length > 0 ? a(m, v[0]) : !s.current.noIsolation;
        _ && m.cancelable && m.preventDefault();
      }
    }
  }, []), c = x.useCallback(function(h, m, b, y) {
    var v = { name: h, delta: m, target: b, should: y, shadowParent: AR(b) };
    n.current.push(v), setTimeout(function() {
      n.current = n.current.filter(function(_) {
        return _ !== v;
      });
    }, 1);
  }, []), u = x.useCallback(function(h) {
    t.current = jo(h), r.current = void 0;
  }, []), d = x.useCallback(function(h) {
    c(h.type, Xd(h), h.target, a(h, e.lockRef.current));
  }, []), f = x.useCallback(function(h) {
    c(h.type, jo(h), h.target, a(h, e.lockRef.current));
  }, []);
  x.useEffect(function() {
    return Yn.push(i), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", l, qn), document.addEventListener("touchmove", l, qn), document.addEventListener("touchstart", u, qn), function() {
      Yn = Yn.filter(function(h) {
        return h !== i;
      }), document.removeEventListener("wheel", l, qn), document.removeEventListener("touchmove", l, qn), document.removeEventListener("touchstart", u, qn);
    };
  }, []);
  var g = e.removeScrollBar, p = e.inert;
  return x.createElement(
    x.Fragment,
    null,
    p ? x.createElement(i, { styles: kR(o) }) : null,
    g ? x.createElement(yR, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function AR(e) {
  for (var n = null; e !== null; )
    e instanceof ShadowRoot && (n = e.host, e = e.host), e = e.parentNode;
  return n;
}
const TR = oR(Vm, RR);
var Hm = x.forwardRef(function(e, n) {
  return x.createElement(ms, bt({}, e, { ref: n, sideCar: TR }));
});
Hm.classNames = ms.classNames;
var ys = "Popover", [Km] = Gt(ys, [
  Nm
]), vo = Nm(), [FR, fn] = Km(ys), qm = (e) => {
  const {
    __scopePopover: n,
    children: t,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    modal: s = !1
  } = e, a = vo(n), l = x.useRef(null), [c, u] = x.useState(!1), [d, f] = Ln({
    prop: r,
    defaultProp: o ?? !1,
    onChange: i,
    caller: ys
  });
  return /* @__PURE__ */ w(VN, { ...a, children: /* @__PURE__ */ w(
    FR,
    {
      scope: n,
      contentId: Di(),
      triggerRef: l,
      open: d,
      onOpenChange: f,
      onOpenToggle: x.useCallback(() => f((g) => !g), [f]),
      hasCustomAnchor: c,
      onCustomAnchorAdd: x.useCallback(() => u(!0), []),
      onCustomAnchorRemove: x.useCallback(() => u(!1), []),
      modal: s,
      children: t
    }
  ) });
};
qm.displayName = ys;
var Ym = "PopoverAnchor", Zm = x.forwardRef(
  (e, n) => {
    const { __scopePopover: t, ...r } = e, o = fn(Ym, t), i = vo(t), { onCustomAnchorAdd: s, onCustomAnchorRemove: a } = o;
    return x.useEffect(() => (s(), () => a()), [s, a]), /* @__PURE__ */ w(Mm, { ...i, ...r, ref: n });
  }
);
Zm.displayName = Ym;
var Jm = "PopoverTrigger", Xm = x.forwardRef(
  (e, n) => {
    const { __scopePopover: t, ...r } = e, o = fn(Jm, t), i = vo(t), s = ve(n, o.triggerRef), a = /* @__PURE__ */ w(
      pe.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": oy(o.open),
        ...r,
        ref: s,
        onClick: ge(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? a : /* @__PURE__ */ w(Mm, { asChild: !0, ...i, children: a });
  }
);
Xm.displayName = Jm;
var fc = "PopoverPortal", [PR, IR] = Km(fc, {
  forceMount: void 0
}), Qm = (e) => {
  const { __scopePopover: n, forceMount: t, children: r, container: o } = e, i = fn(fc, n);
  return /* @__PURE__ */ w(PR, { scope: n, forceMount: t, children: /* @__PURE__ */ w(lo, { present: t || i.open, children: /* @__PURE__ */ w(Dm, { asChild: !0, container: o, children: r }) }) });
};
Qm.displayName = fc;
var yr = "PopoverContent", ey = x.forwardRef(
  (e, n) => {
    const t = IR(yr, e.__scopePopover), { forceMount: r = t.forceMount, ...o } = e, i = fn(yr, e.__scopePopover);
    return /* @__PURE__ */ w(lo, { present: r || i.open, children: i.modal ? /* @__PURE__ */ w($R, { ...o, ref: n }) : /* @__PURE__ */ w(MR, { ...o, ref: n }) });
  }
);
ey.displayName = yr;
var OR = /* @__PURE__ */ ni("PopoverContent.RemoveScroll"), $R = x.forwardRef(
  (e, n) => {
    const t = fn(yr, e.__scopePopover), r = x.useRef(null), o = ve(n, r), i = x.useRef(!1);
    return x.useEffect(() => {
      const s = r.current;
      if (s) return qN(s);
    }, []), /* @__PURE__ */ w(Hm, { as: OR, allowPinchZoom: !0, children: /* @__PURE__ */ w(
      ty,
      {
        ...e,
        ref: o,
        trapFocus: t.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: ge(e.onCloseAutoFocus, (s) => {
          var a;
          s.preventDefault(), i.current || (a = t.triggerRef.current) == null || a.focus();
        }),
        onPointerDownOutside: ge(
          e.onPointerDownOutside,
          (s) => {
            const a = s.detail.originalEvent, l = a.button === 0 && a.ctrlKey === !0, c = a.button === 2 || l;
            i.current = c;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: ge(
          e.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), MR = x.forwardRef(
  (e, n) => {
    const t = fn(yr, e.__scopePopover), r = x.useRef(!1), o = x.useRef(!1);
    return /* @__PURE__ */ w(
      ty,
      {
        ...e,
        ref: n,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (i) => {
          var s, a;
          (s = e.onCloseAutoFocus) == null || s.call(e, i), i.defaultPrevented || (r.current || (a = t.triggerRef.current) == null || a.focus(), i.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (i) => {
          var l, c;
          (l = e.onInteractOutside) == null || l.call(e, i), i.defaultPrevented || (r.current = !0, i.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const s = i.target;
          ((c = t.triggerRef.current) == null ? void 0 : c.contains(s)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && o.current && i.preventDefault();
        }
      }
    );
  }
), ty = x.forwardRef(
  (e, n) => {
    const {
      __scopePopover: t,
      trapFocus: r,
      onOpenAutoFocus: o,
      onCloseAutoFocus: i,
      disableOutsidePointerEvents: s,
      onEscapeKeyDown: a,
      onPointerDownOutside: l,
      onFocusOutside: c,
      onInteractOutside: u,
      ...d
    } = e, f = fn(yr, t), g = vo(t);
    return p1(), /* @__PURE__ */ w(
      fm,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: i,
        children: /* @__PURE__ */ w(
          um,
          {
            asChild: !0,
            disableOutsidePointerEvents: s,
            onInteractOutside: u,
            onEscapeKeyDown: a,
            onPointerDownOutside: l,
            onFocusOutside: c,
            onDismiss: () => f.onOpenChange(!1),
            children: /* @__PURE__ */ w(
              jN,
              {
                "data-state": oy(f.open),
                role: "dialog",
                id: f.contentId,
                ...g,
                ...d,
                ref: n,
                style: {
                  ...d.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              }
            )
          }
        )
      }
    );
  }
), ny = "PopoverClose", ry = x.forwardRef(
  (e, n) => {
    const { __scopePopover: t, ...r } = e, o = fn(ny, t);
    return /* @__PURE__ */ w(
      pe.button,
      {
        type: "button",
        ...r,
        ref: n,
        onClick: ge(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
ry.displayName = ny;
var DR = "PopoverArrow", LR = x.forwardRef(
  (e, n) => {
    const { __scopePopover: t, ...r } = e, o = vo(t);
    return /* @__PURE__ */ w(UN, { ...o, ...r, ref: n });
  }
);
LR.displayName = DR;
function oy(e) {
  return e ? "open" : "closed";
}
var zR = qm, BR = Zm, VR = Xm, jR = Qm, iy = ey, UR = ry;
const GR = Y(
  "z-50 w-72 rounded-md border border-border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
  {
    variants: {
      size: {
        default: "w-72",
        sm: "w-56",
        lg: "w-96",
        auto: "w-auto"
      }
    },
    defaultVariants: {
      size: "default"
    }
  }
), WR = zR, HR = VR, sy = x.forwardRef(({ className: e, size: n, align: t = "center", sideOffset: r = 4, ...o }, i) => /* @__PURE__ */ w(jR, { children: /* @__PURE__ */ w(
  iy,
  {
    ref: i,
    align: t,
    sideOffset: r,
    className: I(GR({ size: n }), e),
    ...o
  }
) }));
sy.displayName = iy.displayName;
const IT = BR, OT = UR;
function KR(e, n = []) {
  let t = [];
  function r(i, s) {
    const a = x.createContext(s);
    a.displayName = i + "Context";
    const l = t.length;
    t = [...t, s];
    const c = (d) => {
      var b;
      const { scope: f, children: g, ...p } = d, h = ((b = f == null ? void 0 : f[e]) == null ? void 0 : b[l]) || a, m = x.useMemo(() => p, Object.values(p));
      return /* @__PURE__ */ w(h.Provider, { value: m, children: g });
    };
    c.displayName = i + "Provider";
    function u(d, f) {
      var h;
      const g = ((h = f == null ? void 0 : f[e]) == null ? void 0 : h[l]) || a, p = x.useContext(g);
      if (p) return p;
      if (s !== void 0) return s;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return [c, u];
  }
  const o = () => {
    const i = t.map((s) => x.createContext(s));
    return function(a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return x.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: l } }),
        [a, l]
      );
    };
  };
  return o.scopeName = e, [r, qR(o, ...n)];
}
function qR(...e) {
  const n = e[0];
  if (e.length === 1) return n;
  const t = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(i) {
      const s = r.reduce((a, { useScope: l, scopeName: c }) => {
        const d = l(i)[`__scope${c}`];
        return { ...a, ...d };
      }, {});
      return x.useMemo(() => ({ [`__scope${n.scopeName}`]: s }), [s]);
    };
  };
  return t.scopeName = n.scopeName, t;
}
var YR = Symbol.for("react.lazy"), Ti = x[" use ".trim().toString()];
function ZR(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function ay(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === YR && "_payload" in e && ZR(e._payload);
}
// @__NO_SIDE_EFFECTS__
function JR(e) {
  const n = /* @__PURE__ */ XR(e), t = x.forwardRef((r, o) => {
    let { children: i, ...s } = r;
    ay(i) && typeof Ti == "function" && (i = Ti(i._payload));
    const a = x.Children.toArray(i), l = a.find(eA);
    if (l) {
      const c = l.props.children, u = a.map((d) => d === l ? x.Children.count(c) > 1 ? x.Children.only(null) : x.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ w(n, { ...s, ref: o, children: x.isValidElement(c) ? x.cloneElement(c, void 0, u) : null });
    }
    return /* @__PURE__ */ w(n, { ...s, ref: o, children: i });
  });
  return t.displayName = `${e}.Slot`, t;
}
// @__NO_SIDE_EFFECTS__
function XR(e) {
  const n = x.forwardRef((t, r) => {
    let { children: o, ...i } = t;
    if (ay(o) && typeof Ti == "function" && (o = Ti(o._payload)), x.isValidElement(o)) {
      const s = nA(o), a = tA(i, o.props);
      return o.type !== x.Fragment && (a.ref = r ? so(r, s) : s), x.cloneElement(o, a);
    }
    return x.Children.count(o) > 1 ? x.Children.only(null) : null;
  });
  return n.displayName = `${e}.SlotClone`, n;
}
var QR = Symbol("radix.slottable");
function eA(e) {
  return x.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === QR;
}
function tA(e, n) {
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
function nA(e) {
  var r, o;
  let n = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
var rA = [
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
], ly = rA.reduce((e, n) => {
  const t = /* @__PURE__ */ JR(`Primitive.${n}`), r = x.forwardRef((o, i) => {
    const { asChild: s, ...a } = o, l = s ? t : n;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ w(l, { ...a, ref: i });
  });
  return r.displayName = `Primitive.${n}`, { ...e, [n]: r };
}, {}), gc = "Progress", pc = 100, [oA] = KR(gc), [iA, sA] = oA(gc), cy = x.forwardRef(
  (e, n) => {
    const {
      __scopeProgress: t,
      value: r = null,
      max: o,
      getValueLabel: i = aA,
      ...s
    } = e;
    (o || o === 0) && !ef(o) && console.error(lA(`${o}`, "Progress"));
    const a = ef(o) ? o : pc;
    r !== null && !tf(r, a) && console.error(cA(`${r}`, "Progress"));
    const l = tf(r, a) ? r : null, c = Fi(l) ? i(l, a) : void 0;
    return /* @__PURE__ */ w(iA, { scope: t, value: l, max: a, children: /* @__PURE__ */ w(
      ly.div,
      {
        "aria-valuemax": a,
        "aria-valuemin": 0,
        "aria-valuenow": Fi(l) ? l : void 0,
        "aria-valuetext": c,
        role: "progressbar",
        "data-state": fy(l, a),
        "data-value": l ?? void 0,
        "data-max": a,
        ...s,
        ref: n
      }
    ) });
  }
);
cy.displayName = gc;
var uy = "ProgressIndicator", dy = x.forwardRef(
  (e, n) => {
    const { __scopeProgress: t, ...r } = e, o = sA(uy, t);
    return /* @__PURE__ */ w(
      ly.div,
      {
        "data-state": fy(o.value, o.max),
        "data-value": o.value ?? void 0,
        "data-max": o.max,
        ...r,
        ref: n
      }
    );
  }
);
dy.displayName = uy;
function aA(e, n) {
  return `${Math.round(e / n * 100)}%`;
}
function fy(e, n) {
  return e == null ? "indeterminate" : e === n ? "complete" : "loading";
}
function Fi(e) {
  return typeof e == "number";
}
function ef(e) {
  return Fi(e) && !isNaN(e) && e > 0;
}
function tf(e, n) {
  return Fi(e) && !isNaN(e) && e <= n && e >= 0;
}
function lA(e, n) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${n}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${pc}\`.`;
}
function cA(e, n) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${n}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${pc} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var gy = cy, uA = dy;
const dA = Y("relative h-4 w-full overflow-hidden rounded-full bg-secondary", {
  variants: {
    size: {
      default: "h-4",
      sm: "h-2",
      lg: "h-6"
    },
    variant: {
      default: "",
      success: "",
      warning: "",
      error: ""
    }
  },
  defaultVariants: {
    size: "default",
    variant: "default"
  }
}), fA = Y("h-full w-full flex-1 bg-primary transition-all", {
  variants: {
    variant: {
      default: "bg-primary",
      success: "bg-success",
      warning: "bg-warning",
      error: "bg-destructive"
    }
  },
  defaultVariants: {
    variant: "default"
  }
}), gA = x.forwardRef(
  ({ className: e, value: n = 0, size: t, variant: r, showValue: o, ...i }, s) => /* @__PURE__ */ M("div", { className: "relative", children: [
    /* @__PURE__ */ w(
      gy,
      {
        ref: s,
        className: I(dA({ size: t, variant: r }), e),
        ...i,
        children: /* @__PURE__ */ w(
          uA,
          {
            className: I(fA({ variant: r })),
            style: { transform: `translateX(-${100 - (n || 0)}%)` }
          }
        )
      }
    ),
    o && /* @__PURE__ */ M("div", { className: "text-muted-foreground mt-1 text-right text-xs", children: [
      n,
      "%"
    ] })
  ] })
);
gA.displayName = gy.displayName;
function py(e, [n, t]) {
  return Math.min(t, Math.max(n, e));
}
var hy = ["PageUp", "PageDown"], my = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], yy = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, Or = "Slider", [Qa, pA, hA] = ol(Or), [by] = Gt(Or, [
  hA
]), [mA, bs] = by(Or), vy = x.forwardRef(
  (e, n) => {
    const {
      name: t,
      min: r = 0,
      max: o = 100,
      step: i = 1,
      orientation: s = "horizontal",
      disabled: a = !1,
      minStepsBetweenThumbs: l = 0,
      defaultValue: c = [r],
      value: u,
      onValueChange: d = () => {
      },
      onValueCommit: f = () => {
      },
      inverted: g = !1,
      form: p,
      ...h
    } = e, m = x.useRef(/* @__PURE__ */ new Set()), b = x.useRef(0), v = s === "horizontal" ? yA : bA, [_ = [], S] = Ln({
      prop: u,
      defaultProp: c,
      onChange: (A) => {
        var D;
        (D = [...m.current][b.current]) == null || D.focus(), d(A);
      }
    }), C = x.useRef(_);
    function E(A) {
      const T = SA(_, A);
      R(A, T);
    }
    function N(A) {
      R(A, b.current);
    }
    function k() {
      const A = C.current[b.current];
      _[b.current] !== A && f(_);
    }
    function R(A, T, { commit: D } = { commit: !1 }) {
      const O = NA(i), B = RA(Math.round((A - r) / i) * i + r, O), W = py(B, [r, o]);
      S((U = []) => {
        const j = wA(U, W, T);
        if (kA(j, l * i)) {
          b.current = j.indexOf(W);
          const q = String(j) !== String(U);
          return q && D && f(j), q ? j : U;
        } else
          return U;
      });
    }
    return /* @__PURE__ */ w(
      mA,
      {
        scope: e.__scopeSlider,
        name: t,
        disabled: a,
        min: r,
        max: o,
        valueIndexToChangeRef: b,
        thumbs: m.current,
        values: _,
        orientation: s,
        form: p,
        children: /* @__PURE__ */ w(Qa.Provider, { scope: e.__scopeSlider, children: /* @__PURE__ */ w(Qa.Slot, { scope: e.__scopeSlider, children: /* @__PURE__ */ w(
          v,
          {
            "aria-disabled": a,
            "data-disabled": a ? "" : void 0,
            ...h,
            ref: n,
            onPointerDown: ge(h.onPointerDown, () => {
              a || (C.current = _);
            }),
            min: r,
            max: o,
            inverted: g,
            onSlideStart: a ? void 0 : E,
            onSlideMove: a ? void 0 : N,
            onSlideEnd: a ? void 0 : k,
            onHomeKeyDown: () => !a && R(r, 0, { commit: !0 }),
            onEndKeyDown: () => !a && R(o, _.length - 1, { commit: !0 }),
            onStepKeyDown: ({ event: A, direction: T }) => {
              if (!a) {
                const B = hy.includes(A.key) || A.shiftKey && my.includes(A.key) ? 10 : 1, W = b.current, U = _[W], j = i * B * T;
                R(U + j, W, { commit: !0 });
              }
            }
          }
        ) }) })
      }
    );
  }
);
vy.displayName = Or;
var [xy, wy] = by(Or, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), yA = x.forwardRef(
  (e, n) => {
    const {
      min: t,
      max: r,
      dir: o,
      inverted: i,
      onSlideStart: s,
      onSlideMove: a,
      onSlideEnd: l,
      onStepKeyDown: c,
      ...u
    } = e, [d, f] = x.useState(null), g = ve(n, (v) => f(v)), p = x.useRef(void 0), h = Li(o), m = h === "ltr", b = m && !i || !m && i;
    function y(v) {
      const _ = p.current || d.getBoundingClientRect(), S = [0, _.width], E = hc(S, b ? [t, r] : [r, t]);
      return p.current = _, E(v - _.left);
    }
    return /* @__PURE__ */ w(
      xy,
      {
        scope: e.__scopeSlider,
        startEdge: b ? "left" : "right",
        endEdge: b ? "right" : "left",
        direction: b ? 1 : -1,
        size: "width",
        children: /* @__PURE__ */ w(
          _y,
          {
            dir: h,
            "data-orientation": "horizontal",
            ...u,
            ref: g,
            style: {
              ...u.style,
              "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: (v) => {
              const _ = y(v.clientX);
              s == null || s(_);
            },
            onSlideMove: (v) => {
              const _ = y(v.clientX);
              a == null || a(_);
            },
            onSlideEnd: () => {
              p.current = void 0, l == null || l();
            },
            onStepKeyDown: (v) => {
              const S = yy[b ? "from-left" : "from-right"].includes(v.key);
              c == null || c({ event: v, direction: S ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), bA = x.forwardRef(
  (e, n) => {
    const {
      min: t,
      max: r,
      inverted: o,
      onSlideStart: i,
      onSlideMove: s,
      onSlideEnd: a,
      onStepKeyDown: l,
      ...c
    } = e, u = x.useRef(null), d = ve(n, u), f = x.useRef(void 0), g = !o;
    function p(h) {
      const m = f.current || u.current.getBoundingClientRect(), b = [0, m.height], v = hc(b, g ? [r, t] : [t, r]);
      return f.current = m, v(h - m.top);
    }
    return /* @__PURE__ */ w(
      xy,
      {
        scope: e.__scopeSlider,
        startEdge: g ? "bottom" : "top",
        endEdge: g ? "top" : "bottom",
        size: "height",
        direction: g ? 1 : -1,
        children: /* @__PURE__ */ w(
          _y,
          {
            "data-orientation": "vertical",
            ...c,
            ref: d,
            style: {
              ...c.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: (h) => {
              const m = p(h.clientY);
              i == null || i(m);
            },
            onSlideMove: (h) => {
              const m = p(h.clientY);
              s == null || s(m);
            },
            onSlideEnd: () => {
              f.current = void 0, a == null || a();
            },
            onStepKeyDown: (h) => {
              const b = yy[g ? "from-bottom" : "from-top"].includes(h.key);
              l == null || l({ event: h, direction: b ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), _y = x.forwardRef(
  (e, n) => {
    const {
      __scopeSlider: t,
      onSlideStart: r,
      onSlideMove: o,
      onSlideEnd: i,
      onHomeKeyDown: s,
      onEndKeyDown: a,
      onStepKeyDown: l,
      ...c
    } = e, u = bs(Or, t);
    return /* @__PURE__ */ w(
      pe.span,
      {
        ...c,
        ref: n,
        onKeyDown: ge(e.onKeyDown, (d) => {
          d.key === "Home" ? (s(d), d.preventDefault()) : d.key === "End" ? (a(d), d.preventDefault()) : hy.concat(my).includes(d.key) && (l(d), d.preventDefault());
        }),
        onPointerDown: ge(e.onPointerDown, (d) => {
          const f = d.target;
          f.setPointerCapture(d.pointerId), d.preventDefault(), u.thumbs.has(f) ? f.focus() : r(d);
        }),
        onPointerMove: ge(e.onPointerMove, (d) => {
          d.target.hasPointerCapture(d.pointerId) && o(d);
        }),
        onPointerUp: ge(e.onPointerUp, (d) => {
          const f = d.target;
          f.hasPointerCapture(d.pointerId) && (f.releasePointerCapture(d.pointerId), i(d));
        })
      }
    );
  }
), Sy = "SliderTrack", Cy = x.forwardRef(
  (e, n) => {
    const { __scopeSlider: t, ...r } = e, o = bs(Sy, t);
    return /* @__PURE__ */ w(
      pe.span,
      {
        "data-disabled": o.disabled ? "" : void 0,
        "data-orientation": o.orientation,
        ...r,
        ref: n
      }
    );
  }
);
Cy.displayName = Sy;
var el = "SliderRange", Ey = x.forwardRef(
  (e, n) => {
    const { __scopeSlider: t, ...r } = e, o = bs(el, t), i = wy(el, t), s = x.useRef(null), a = ve(n, s), l = o.values.length, c = o.values.map(
      (f) => Ry(f, o.min, o.max)
    ), u = l > 1 ? Math.min(...c) : 0, d = 100 - Math.max(...c);
    return /* @__PURE__ */ w(
      pe.span,
      {
        "data-orientation": o.orientation,
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: a,
        style: {
          ...e.style,
          [i.startEdge]: u + "%",
          [i.endEdge]: d + "%"
        }
      }
    );
  }
);
Ey.displayName = el;
var tl = "SliderThumb", ky = x.forwardRef(
  (e, n) => {
    const t = pA(e.__scopeSlider), [r, o] = x.useState(null), i = ve(n, (a) => o(a)), s = x.useMemo(
      () => r ? t().findIndex((a) => a.ref.current === r) : -1,
      [t, r]
    );
    return /* @__PURE__ */ w(vA, { ...e, ref: i, index: s });
  }
), vA = x.forwardRef(
  (e, n) => {
    const { __scopeSlider: t, index: r, name: o, ...i } = e, s = bs(tl, t), a = wy(tl, t), [l, c] = x.useState(null), u = ve(n, (y) => c(y)), d = l ? s.form || !!l.closest("form") : !0, f = il(l), g = s.values[r], p = g === void 0 ? 0 : Ry(g, s.min, s.max), h = _A(r, s.values.length), m = f == null ? void 0 : f[a.size], b = m ? CA(m, p, a.direction) : 0;
    return x.useEffect(() => {
      if (l)
        return s.thumbs.add(l), () => {
          s.thumbs.delete(l);
        };
    }, [l, s.thumbs]), /* @__PURE__ */ M(
      "span",
      {
        style: {
          transform: "var(--radix-slider-thumb-transform)",
          position: "absolute",
          [a.startEdge]: `calc(${p}% + ${b}px)`
        },
        children: [
          /* @__PURE__ */ w(Qa.ItemSlot, { scope: e.__scopeSlider, children: /* @__PURE__ */ w(
            pe.span,
            {
              role: "slider",
              "aria-label": e["aria-label"] || h,
              "aria-valuemin": s.min,
              "aria-valuenow": g,
              "aria-valuemax": s.max,
              "aria-orientation": s.orientation,
              "data-orientation": s.orientation,
              "data-disabled": s.disabled ? "" : void 0,
              tabIndex: s.disabled ? void 0 : 0,
              ...i,
              ref: u,
              style: g === void 0 ? { display: "none" } : e.style,
              onFocus: ge(e.onFocus, () => {
                s.valueIndexToChangeRef.current = r;
              })
            }
          ) }),
          d && /* @__PURE__ */ w(
            Ny,
            {
              name: o ?? (s.name ? s.name + (s.values.length > 1 ? "[]" : "") : void 0),
              form: s.form,
              value: g
            },
            r
          )
        ]
      }
    );
  }
);
ky.displayName = tl;
var xA = "RadioBubbleInput", Ny = x.forwardRef(
  ({ __scopeSlider: e, value: n, ...t }, r) => {
    const o = x.useRef(null), i = ve(o, r), s = Kf(n);
    return x.useEffect(() => {
      const a = o.current;
      if (!a) return;
      const l = window.HTMLInputElement.prototype, u = Object.getOwnPropertyDescriptor(l, "value").set;
      if (s !== n && u) {
        const d = new Event("input", { bubbles: !0 });
        u.call(a, n), a.dispatchEvent(d);
      }
    }, [s, n]), /* @__PURE__ */ w(
      pe.input,
      {
        style: { display: "none" },
        ...t,
        ref: i,
        defaultValue: n
      }
    );
  }
);
Ny.displayName = xA;
function wA(e = [], n, t) {
  const r = [...e];
  return r[t] = n, r.sort((o, i) => o - i);
}
function Ry(e, n, t) {
  const i = 100 / (t - n) * (e - n);
  return py(i, [0, 100]);
}
function _A(e, n) {
  return n > 2 ? `Value ${e + 1} of ${n}` : n === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function SA(e, n) {
  if (e.length === 1) return 0;
  const t = e.map((o) => Math.abs(o - n)), r = Math.min(...t);
  return t.indexOf(r);
}
function CA(e, n, t) {
  const r = e / 2, i = hc([0, 50], [0, r]);
  return (r - i(n) * t) * t;
}
function EA(e) {
  return e.slice(0, -1).map((n, t) => e[t + 1] - n);
}
function kA(e, n) {
  if (n > 0) {
    const t = EA(e);
    return Math.min(...t) >= n;
  }
  return !0;
}
function hc(e, n) {
  return (t) => {
    if (e[0] === e[1] || n[0] === n[1]) return n[0];
    const r = (n[1] - n[0]) / (e[1] - e[0]);
    return n[0] + r * (t - e[0]);
  };
}
function NA(e) {
  return (String(e).split(".")[1] || "").length;
}
function RA(e, n) {
  const t = Math.pow(10, n);
  return Math.round(e * t) / t;
}
var Ay = vy, AA = Cy, TA = Ey, FA = ky;
const PA = Y("relative flex w-full touch-none select-none items-center", {
  variants: {
    size: {
      default: "h-2",
      sm: "h-1",
      lg: "h-3"
    }
  },
  defaultVariants: {
    size: "default"
  }
}), IA = Y("relative w-full grow overflow-hidden rounded-full bg-secondary", {
  variants: {
    size: {
      default: "h-2",
      sm: "h-1",
      lg: "h-3"
    }
  },
  defaultVariants: {
    size: "default"
  }
}), OA = Y("absolute h-full bg-primary", {
  variants: {
    variant: {
      default: "bg-primary",
      success: "bg-success",
      warning: "bg-warning",
      error: "bg-destructive"
    }
  },
  defaultVariants: {
    variant: "default"
  }
}), $A = Y(
  "block rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      size: {
        default: "h-5 w-5",
        sm: "h-4 w-4",
        lg: "h-6 w-6"
      },
      variant: {
        default: "border-primary",
        success: "border-success",
        warning: "border-warning",
        error: "border-destructive"
      }
    },
    defaultVariants: {
      size: "default",
      variant: "default"
    }
  }
), MA = x.forwardRef(
  ({ className: e, size: n, variant: t, showValue: r, ...o }, i) => {
    const [s, a] = x.useState(o.defaultValue || o.value || [0]);
    x.useEffect(() => {
      o.value && a(o.value);
    }, [o.value]);
    const l = (c) => {
      a(c), o.onValueChange && o.onValueChange(c);
    };
    return /* @__PURE__ */ M("div", { className: "relative w-full", children: [
      r && /* @__PURE__ */ w("div", { className: "text-muted-foreground mb-2 flex justify-between text-xs", children: s.map((c, u) => /* @__PURE__ */ w("span", { children: c }, u)) }),
      /* @__PURE__ */ M(
        Ay,
        {
          ref: i,
          className: I(PA({ size: n }), e),
          onValueChange: l,
          ...o,
          children: [
            /* @__PURE__ */ w(AA, { className: I(IA({ size: n })), children: /* @__PURE__ */ w(TA, { className: I(OA({ variant: t })) }) }),
            s.map((c, u) => /* @__PURE__ */ w(
              FA,
              {
                className: I($A({ size: n, variant: t }))
              },
              u
            ))
          ]
        }
      )
    ] });
  }
);
MA.displayName = Ay.displayName;
var DA = Symbol.for("react.lazy"), Pi = x[" use ".trim().toString()];
function LA(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function Ty(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === DA && "_payload" in e && LA(e._payload);
}
// @__NO_SIDE_EFFECTS__
function zA(e) {
  const n = /* @__PURE__ */ BA(e), t = x.forwardRef((r, o) => {
    let { children: i, ...s } = r;
    Ty(i) && typeof Pi == "function" && (i = Pi(i._payload));
    const a = x.Children.toArray(i), l = a.find(jA);
    if (l) {
      const c = l.props.children, u = a.map((d) => d === l ? x.Children.count(c) > 1 ? x.Children.only(null) : x.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ w(n, { ...s, ref: o, children: x.isValidElement(c) ? x.cloneElement(c, void 0, u) : null });
    }
    return /* @__PURE__ */ w(n, { ...s, ref: o, children: i });
  });
  return t.displayName = `${e}.Slot`, t;
}
// @__NO_SIDE_EFFECTS__
function BA(e) {
  const n = x.forwardRef((t, r) => {
    let { children: o, ...i } = t;
    if (Ty(o) && typeof Pi == "function" && (o = Pi(o._payload)), x.isValidElement(o)) {
      const s = GA(o), a = UA(i, o.props);
      return o.type !== x.Fragment && (a.ref = r ? so(r, s) : s), x.cloneElement(o, a);
    }
    return x.Children.count(o) > 1 ? x.Children.only(null) : null;
  });
  return n.displayName = `${e}.SlotClone`, n;
}
var VA = Symbol("radix.slottable");
function jA(e) {
  return x.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === VA;
}
function UA(e, n) {
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
function GA(e) {
  var r, o;
  let n = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
var WA = [
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
], HA = WA.reduce((e, n) => {
  const t = /* @__PURE__ */ zA(`Primitive.${n}`), r = x.forwardRef((o, i) => {
    const { asChild: s, ...a } = o, l = s ? t : n;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ w(l, { ...a, ref: i });
  });
  return r.displayName = `Primitive.${n}`, { ...e, [n]: r };
}, {}), KA = "Separator", nf = "horizontal", qA = ["horizontal", "vertical"], Fy = x.forwardRef((e, n) => {
  const { decorative: t, orientation: r = nf, ...o } = e, i = YA(r) ? r : nf, a = t ? { role: "none" } : { "aria-orientation": i === "vertical" ? i : void 0, role: "separator" };
  return /* @__PURE__ */ w(
    HA.div,
    {
      "data-orientation": i,
      ...a,
      ...o,
      ref: n
    }
  );
});
Fy.displayName = KA;
function YA(e) {
  return qA.includes(e);
}
var Py = Fy;
const ZA = Y("shrink-0 bg-border", {
  variants: {
    orientation: {
      horizontal: "h-[1px] w-full",
      vertical: "h-full w-[1px]"
    },
    variant: {
      default: "bg-border",
      muted: "bg-muted",
      primary: "bg-primary/20"
    }
  },
  defaultVariants: {
    orientation: "horizontal",
    variant: "default"
  }
}), JA = x.forwardRef(({ className: e, orientation: n = "horizontal", variant: t, decorative: r = !0, ...o }, i) => /* @__PURE__ */ w(
  Py,
  {
    ref: i,
    decorative: r,
    orientation: n,
    className: I(ZA({ orientation: n, variant: t }), e),
    ...o
  }
));
JA.displayName = Py.displayName;
const XA = Y("w-full justify-between", {
  variants: {
    variant: {
      default: "",
      outline: ""
    },
    size: {
      default: "h-10",
      sm: "h-9",
      lg: "h-11"
    }
  },
  defaultVariants: {
    variant: "outline",
    size: "default"
  }
}), QA = x.forwardRef(
  ({
    options: e,
    value: n,
    onValueChange: t,
    placeholder: r = "Select an option...",
    emptyText: o = "No results found.",
    searchable: i = !0,
    searchPlaceholder: s = "Search...",
    disabled: a,
    className: l,
    variant: c,
    size: u
  }, d) => {
    const [f, g] = x.useState(!1), [p, h] = x.useState(""), m = e.find((v) => v.value === n), b = x.useMemo(() => !i || !p ? e : e.filter(
      (v) => v.label.toLowerCase().includes(p.toLowerCase())
    ), [e, p, i]), y = (v) => {
      t == null || t(v === n ? "" : v), g(!1), h("");
    };
    return /* @__PURE__ */ M(WR, { open: f, onOpenChange: g, children: [
      /* @__PURE__ */ w(HR, { asChild: !0, children: /* @__PURE__ */ M(
        ue,
        {
          ref: d,
          variant: "outline",
          role: "combobox",
          "aria-expanded": f,
          disabled: a,
          className: I(XA({ variant: c, size: u }), l),
          children: [
            /* @__PURE__ */ w("span", { className: "truncate", children: m ? m.label : r }),
            /* @__PURE__ */ w(tb, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
          ]
        }
      ) }),
      /* @__PURE__ */ w(sy, { className: "w-[var(--radix-popover-trigger-width)] p-0", align: "start", children: /* @__PURE__ */ M("div", { className: "flex flex-col", children: [
        i && /* @__PURE__ */ w("div", { className: "border-border border-b p-2", children: /* @__PURE__ */ w(
          "input",
          {
            type: "text",
            placeholder: s,
            value: p,
            onChange: (v) => h(v.target.value),
            className: "border-border bg-background focus:ring-ring w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-offset-2"
          }
        ) }),
        /* @__PURE__ */ w("div", { className: "max-h-[300px] overflow-y-auto", children: b.length === 0 ? /* @__PURE__ */ w("div", { className: "text-muted-foreground py-6 text-center text-sm", children: o }) : /* @__PURE__ */ w("div", { className: "p-1", children: b.map((v) => /* @__PURE__ */ M(
          "button",
          {
            onClick: () => !v.disabled && y(v.value),
            disabled: v.disabled,
            className: I(
              "relative flex w-full cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm transition-colors outline-none select-none",
              "hover:bg-accent hover:text-accent-foreground",
              "disabled:pointer-events-none disabled:opacity-50",
              n === v.value && "bg-accent text-accent-foreground"
            ),
            children: [
              /* @__PURE__ */ w(
                Xo,
                {
                  className: I(
                    "mr-2 h-4 w-4",
                    n === v.value ? "opacity-100" : "opacity-0"
                  )
                }
              ),
              /* @__PURE__ */ w("span", { className: "truncate", children: v.label })
            ]
          },
          v.value
        )) }) })
      ] }) })
    ] });
  }
);
QA.displayName = "Combobox";
const eT = Y("flex items-center justify-center gap-1", {
  variants: {
    size: {
      default: "",
      sm: "",
      lg: ""
    }
  },
  defaultVariants: {
    size: "default"
  }
}), Zn = Y(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "hover:bg-accent hover:text-accent-foreground",
        active: "bg-primary text-primary-foreground hover:bg-primary/90"
      },
      size: {
        default: "h-9 w-9",
        sm: "h-8 w-8 text-xs",
        lg: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), tT = x.forwardRef(
  ({
    currentPage: e,
    totalPages: n,
    onPageChange: t,
    showFirstLast: r = !0,
    showPrevNext: o = !0,
    siblingCount: i = 1,
    disabled: s,
    className: a,
    size: l,
    ...c
  }, u) => {
    const d = x.useMemo(() => {
      const g = (_, S) => Array.from({ length: S - _ + 1 }, (C, E) => _ + E), h = i * 2 + 3 + 2;
      if (n <= h)
        return g(1, n);
      const m = Math.max(e - i, 1), b = Math.min(e + i, n), y = m > 2, v = b < n - 1;
      if (!y && v) {
        const _ = 3 + 2 * i;
        return [...g(1, _), "dots", n];
      }
      if (y && !v) {
        const _ = 3 + 2 * i;
        return [1, "dots", ...g(n - _ + 1, n)];
      }
      return y && v ? [1, "dots", ...g(m, b), "dots", n] : g(1, n);
    }, [e, n, i]), f = (g) => {
      g >= 1 && g <= n && g !== e && !s && t(g);
    };
    return /* @__PURE__ */ M(
      "nav",
      {
        ref: u,
        role: "navigation",
        "aria-label": "pagination",
        className: I(eT({ size: l }), a),
        ...c,
        children: [
          r && /* @__PURE__ */ w(
            "button",
            {
              onClick: () => f(1),
              disabled: e === 1 || s,
              "aria-label": "Go to first page",
              className: I(Zn({ size: l })),
              children: /* @__PURE__ */ w(Qy, { className: "h-4 w-4" })
            }
          ),
          o && /* @__PURE__ */ w(
            "button",
            {
              onClick: () => f(e - 1),
              disabled: e === 1 || s,
              "aria-label": "Go to previous page",
              className: I(Zn({ size: l })),
              children: /* @__PURE__ */ w(Jy, { className: "h-4 w-4" })
            }
          ),
          d.map((g, p) => g === "dots" ? /* @__PURE__ */ w(
            "span",
            {
              className: I(Zn({ size: l }), "pointer-events-none"),
              children: /* @__PURE__ */ w(sb, { className: "h-4 w-4" })
            },
            `dots-${p}`
          ) : /* @__PURE__ */ w(
            "button",
            {
              onClick: () => f(g),
              disabled: s,
              "aria-label": `Go to page ${g}`,
              "aria-current": e === g ? "page" : void 0,
              className: I(
                Zn({
                  size: l,
                  variant: e === g ? "active" : "default"
                })
              ),
              children: g
            },
            g
          )),
          o && /* @__PURE__ */ w(
            "button",
            {
              onClick: () => f(e + 1),
              disabled: e === n || s,
              "aria-label": "Go to next page",
              className: I(Zn({ size: l })),
              children: /* @__PURE__ */ w(Xy, { className: "h-4 w-4" })
            }
          ),
          r && /* @__PURE__ */ w(
            "button",
            {
              onClick: () => f(n),
              disabled: e === n || s,
              "aria-label": "Go to last page",
              className: I(Zn({ size: l })),
              children: /* @__PURE__ */ w(eb, { className: "h-4 w-4" })
            }
          )
        ]
      }
    );
  }
);
tT.displayName = "Pagination";
var io;
(function(e) {
  e.assertEqual = (o) => {
  };
  function n(o) {
  }
  e.assertIs = n;
  function t(o) {
    throw new Error();
  }
  e.assertNever = t, e.arrayToEnum = (o) => {
    const i = {};
    for (const s of o)
      i[s] = s;
    return i;
  }, e.getValidEnumValues = (o) => {
    const i = e.objectKeys(o).filter((a) => typeof o[o[a]] != "number"), s = {};
    for (const a of i)
      s[a] = o[a];
    return e.objectValues(s);
  }, e.objectValues = (o) => e.objectKeys(o).map(function(i) {
    return o[i];
  }), e.objectKeys = typeof Object.keys == "function" ? (o) => Object.keys(o) : (o) => {
    const i = [];
    for (const s in o)
      Object.prototype.hasOwnProperty.call(o, s) && i.push(s);
    return i;
  }, e.find = (o, i) => {
    for (const s of o)
      if (i(s))
        return s;
  }, e.isInteger = typeof Number.isInteger == "function" ? (o) => Number.isInteger(o) : (o) => typeof o == "number" && Number.isFinite(o) && Math.floor(o) === o;
  function r(o, i = " | ") {
    return o.map((s) => typeof s == "string" ? `'${s}'` : s).join(i);
  }
  e.joinValues = r, e.jsonStringifyReplacer = (o, i) => typeof i == "bigint" ? i.toString() : i;
})(io || (io = {}));
var rf;
(function(e) {
  e.mergeShapes = (n, t) => ({
    ...n,
    ...t
    // second overwrites first
  });
})(rf || (rf = {}));
io.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
io.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
class br extends Error {
  get errors() {
    return this.issues;
  }
  constructor(n) {
    super(), this.issues = [], this.addIssue = (r) => {
      this.issues = [...this.issues, r];
    }, this.addIssues = (r = []) => {
      this.issues = [...this.issues, ...r];
    };
    const t = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, t) : this.__proto__ = t, this.name = "ZodError", this.issues = n;
  }
  format(n) {
    const t = n || function(i) {
      return i.message;
    }, r = { _errors: [] }, o = (i) => {
      for (const s of i.issues)
        if (s.code === "invalid_union")
          s.unionErrors.map(o);
        else if (s.code === "invalid_return_type")
          o(s.returnTypeError);
        else if (s.code === "invalid_arguments")
          o(s.argumentsError);
        else if (s.path.length === 0)
          r._errors.push(t(s));
        else {
          let a = r, l = 0;
          for (; l < s.path.length; ) {
            const c = s.path[l];
            l === s.path.length - 1 ? (a[c] = a[c] || { _errors: [] }, a[c]._errors.push(t(s))) : a[c] = a[c] || { _errors: [] }, a = a[c], l++;
          }
        }
    };
    return o(this), r;
  }
  static assert(n) {
    if (!(n instanceof br))
      throw new Error(`Not a ZodError: ${n}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, io.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(n = (t) => t.message) {
    const t = {}, r = [];
    for (const o of this.issues)
      if (o.path.length > 0) {
        const i = o.path[0];
        t[i] = t[i] || [], t[i].push(n(o));
      } else
        r.push(n(o));
    return { formErrors: r, fieldErrors: t };
  }
  get formErrors() {
    return this.flatten();
  }
}
br.create = (e) => new br(e);
const Iy = x.createContext(void 0), nT = () => {
  const e = x.useContext(Iy);
  if (!e)
    throw new Error("useFormContext must be used within a Form component");
  return e;
};
function $T({
  schema: e,
  initialValues: n,
  onSubmit: t,
  validateOnBlur: r = !0,
  validateOnChange: o = !1,
  children: i,
  className: s,
  ...a
}) {
  const [l, c] = x.useState(n), [u, d] = x.useState({}), [f, g] = x.useState({}), [p, h] = x.useState(!1), m = x.useCallback(
    async (S, C) => {
      var E;
      try {
        const N = e.shape[S];
        N && await N.parseAsync(C);
        return;
      } catch (N) {
        return N instanceof br ? (E = N.errors[0]) == null ? void 0 : E.message : "Validation error";
      }
    },
    [e]
  ), b = x.useCallback(
    async (S, C) => {
      if (c((E) => ({ ...E, [S]: C })), o) {
        const E = await m(S, C);
        d((N) => ({ ...N, [S]: E }));
      }
    },
    [m, o]
  ), y = x.useCallback(
    async (S, C) => {
      if (g((E) => ({ ...E, [S]: C })), C && r) {
        const E = await m(S, l[S]);
        d((N) => ({ ...N, [S]: E }));
      }
    },
    [m, r, l]
  ), v = async (S) => {
    S.preventDefault(), h(!0);
    try {
      const C = await e.parseAsync(l);
      await t(C);
    } catch (C) {
      if (C instanceof br) {
        const E = {};
        C.errors.forEach((k) => {
          const R = k.path.join(".");
          E[R] = k.message;
        }), d(E);
        const N = {};
        Object.keys(l).forEach((k) => {
          N[k] = !0;
        }), g(N);
      }
    } finally {
      h(!1);
    }
  }, _ = {
    errors: u,
    touched: f,
    isSubmitting: p,
    setFieldValue: b,
    setFieldTouched: y,
    validateField: m
  };
  return /* @__PURE__ */ w(Iy.Provider, { value: _, children: /* @__PURE__ */ w("form", { onSubmit: v, className: I("space-y-4", s), ...a, children: typeof i == "function" ? i(_) : i }) });
}
function MT({ name: e, label: n, required: t, description: r, children: o }) {
  const { errors: i, touched: s, setFieldValue: a, setFieldTouched: l } = nT(), c = s[e] ? i[e] : void 0, u = `form-field-${e}`, d = x.cloneElement(o, {
    id: u,
    name: e,
    "aria-invalid": !!c,
    "aria-describedby": c ? `${u}-error` : r ? `${u}-description` : void 0,
    onChange: (f) => {
      const g = f.target.value;
      a(e, g), o.props.onChange && o.props.onChange(f);
    },
    onBlur: (f) => {
      l(e, !0), o.props.onBlur && o.props.onBlur(f);
    }
  });
  return /* @__PURE__ */ M("div", { className: "space-y-2", children: [
    n && /* @__PURE__ */ w(Ef, { htmlFor: u, ...t && { required: t }, children: n }),
    d,
    r && !c && /* @__PURE__ */ w("p", { id: `${u}-description`, className: "text-muted-foreground text-xs", children: r }),
    c && /* @__PURE__ */ w("p", { id: `${u}-error`, className: "text-destructive text-xs", role: "alert", children: c })
  ] });
}
function DT({
  variant: e = "default",
  className: n,
  children: t,
  ...r
}) {
  return t ? /* @__PURE__ */ w(
    "p",
    {
      className: I(
        "text-sm",
        {
          "text-muted-foreground": e === "default",
          "text-destructive": e === "error",
          "text-success": e === "success"
        },
        n
      ),
      ...r,
      children: t
    }
  ) : null;
}
export {
  PT as Accordion,
  i1 as AccordionContent,
  r1 as AccordionItem,
  o1 as AccordionTrigger,
  lx as Alert,
  ux as AlertDescription,
  cx as AlertTitle,
  ox as Avatar,
  Nf as Badge,
  If as Breadcrumb,
  ue as Button,
  kf as Card,
  mv as CardContent,
  hv as CardDescription,
  yv as CardFooter,
  gv as CardHeader,
  pv as CardTitle,
  t0 as Checkbox,
  n0 as CheckboxGroup,
  mw as CodeBlock,
  QA as Combobox,
  NT as ConfirmDialog,
  ET as ConnectionStatus,
  vT as DataTable,
  Yv as Dialog,
  Xv as DialogClose,
  Mf as DialogContent,
  Bf as DialogDescription,
  Lf as DialogFooter,
  Df as DialogHeader,
  $f as DialogOverlay,
  Jv as DialogPortal,
  zf as DialogTitle,
  Zv as DialogTrigger,
  uT as Dropdown,
  fT as DropdownContent,
  pT as DropdownItem,
  gT as DropdownLabel,
  hT as DropdownSeparator,
  mT as DropdownSubmenu,
  bT as DropdownSubmenuContent,
  yT as DropdownSubmenuTrigger,
  dT as DropdownTrigger,
  _T as EmptyState,
  ST as ErrorState,
  $T as Form,
  MT as FormField,
  DT as FormMessage,
  $k as HybridEditor,
  wf as Input,
  Ef as Label,
  xv as Loading,
  qb as LoadingButton,
  CT as MetricCard,
  aT as ModalFooter,
  Hv as PageHeader,
  tT as Pagination,
  WR as Popover,
  IT as PopoverAnchor,
  OT as PopoverClose,
  sy as PopoverContent,
  HR as PopoverTrigger,
  gA as Progress,
  q0 as RadioGroup,
  Y0 as RadioGroupItem,
  Qb as Select,
  JA as Separator,
  _v as Skeleton,
  MA as Slider,
  Rf as Spinner,
  ix as StatusIndicator,
  i0 as Switch,
  s0 as SwitchGroup,
  Ev as Tabs,
  Rv as TabsContent,
  kv as TabsList,
  Nv as TabsTrigger,
  l0 as Textarea,
  ug as ToastContainer,
  cg as ToastItem,
  cT as ToastProvider,
  kT as Tooltip,
  lT as ViewModeToggle,
  n1 as accordionContentVariants,
  e1 as accordionItemVariants,
  t1 as accordionTriggerVariants,
  bv as badgeVariants,
  jv as breadcrumbItemVariants,
  Uv as breadcrumbSeparatorVariants,
  Vv as breadcrumbVariants,
  Kb as buttonVariants,
  fv as cardVariants,
  Qv as checkboxVariants,
  I as cn,
  XA as comboboxVariants,
  wT as createSelectionColumn,
  xT as createSortableHeader,
  qv as dialogContentVariants,
  Kv as dialogOverlayVariants,
  Q0 as dropdownContentVariants,
  dg as dropdownItemVariants,
  Yb as inputVariants,
  dv as labelVariants,
  Gv as pageHeaderVariants,
  Zn as paginationItemVariants,
  eT as paginationVariants,
  GR as popoverContentVariants,
  fA as progressIndicatorVariants,
  dA as progressVariants,
  Jb as selectVariants,
  ZA as separatorVariants,
  wv as skeletonVariants,
  OA as sliderRangeVariants,
  $A as sliderThumbVariants,
  IA as sliderTrackVariants,
  PA as sliderVariants,
  vv as spinnerVariants,
  Nc as statusIndicatorVariants,
  o0 as switchThumbVariants,
  r0 as switchVariants,
  Sv as tabsListVariants,
  Cv as tabsTriggerVariants,
  a0 as textareaVariants,
  nT as useFormContext,
  X0 as useToast
};
//# sourceMappingURL=index.es.js.map
