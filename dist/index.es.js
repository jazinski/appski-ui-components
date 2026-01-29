var Uy = Object.defineProperty;
var Gy = (e, n, t) => n in e ? Uy(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var I = (e, n, t) => Gy(e, typeof n != "symbol" ? n + "" : n, t);
import { jsx as x, jsxs as F, Fragment as Ge } from "react/jsx-runtime";
import * as w from "react";
import de, { forwardRef as Oi, createElement as dr, useCallback as fr, useMemo as xr, createContext as uf, useContext as Hy, useLayoutEffect as wr, useEffect as Ke, useState as on, useRef as Wy, Suspense as Ky, Component as qy } from "react";
import * as df from "react-dom";
import Yy, { createPortal as ff, flushSync as Zy } from "react-dom";
function gf(e) {
  var n, t, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (n = 0; n < o; n++) e[n] && (t = gf(e[n])) && (r && (r += " "), r += t);
  } else for (t in e) e[t] && (r && (r += " "), r += t);
  return r;
}
function $i() {
  for (var e, n, t = 0, r = "", o = arguments.length; t < o; t++) (e = arguments[t]) && (n = gf(e)) && (r && (r += " "), r += n);
  return r;
}
const wc = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, _c = $i, K = (e, n) => (t) => {
  var r;
  if ((n == null ? void 0 : n.variants) == null) return _c(e, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
  const { variants: o, defaultVariants: i } = n, s = Object.keys(o).map((c) => {
    const u = t == null ? void 0 : t[c], d = i == null ? void 0 : i[c];
    if (u === null) return null;
    const f = wc(u) || wc(d);
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
  return _c(e, s, l, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jy = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), pf = (...e) => e.filter((n, t, r) => !!n && n.trim() !== "" && r.indexOf(n) === t).join(" ").trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Xy = {
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
const Qy = Oi(
  ({
    color: e = "currentColor",
    size: n = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: i,
    iconNode: s,
    ...a
  }, l) => dr(
    "svg",
    {
      ref: l,
      ...Xy,
      width: n,
      height: n,
      stroke: e,
      strokeWidth: r ? Number(t) * 24 / Number(n) : t,
      className: pf("lucide", o),
      ...a
    },
    [
      ...s.map(([c, u]) => dr(c, u)),
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
const ne = (e, n) => {
  const t = Oi(
    ({ className: r, ...o }, i) => dr(Qy, {
      ref: i,
      iconNode: n,
      className: pf(`lucide-${Jy(e)}`, r),
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
const eb = ne("ArrowUpDown", [
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
const tb = ne("Bold", [
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
const Jo = ne("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mi = ne("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nb = ne("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rb = ne("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hf = ne("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ob = ne("ChevronsLeft", [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ib = ne("ChevronsRight", [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sb = ne("ChevronsUpDown", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ab = ne("CircleAlert", [
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
const lb = ne("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cb = ne("CircleHelp", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ub = ne("CircleX", [
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
const db = ne("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mf = ne("CodeXml", [
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
const Sc = ne("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fb = ne("Ellipsis", [
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
const gb = ne("Heading1", [
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
const pb = ne("Heading2", [
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
const hb = ne("House", [
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
const Xo = ne("Info", [
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
const mb = ne("Italic", [
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
const yb = ne("List", [
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
const Di = ne("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bb = ne("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vb = ne("Quote", [
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
const Cc = ne("RefreshCw", [
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
const xb = ne("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yf = ne("Sparkles", [
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
const wb = ne("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qo = ne("TriangleAlert", [
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
const bf = ne("Type", [
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
const _b = ne("Wifi", [
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
const ol = ne("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), il = "-", Sb = (e) => {
  const n = kb(e), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (s) => {
      const a = s.split(il);
      return a[0] === "" && a.length !== 1 && a.shift(), vf(a, n) || Cb(s);
    },
    getConflictingClassGroupIds: (s, a) => {
      const l = t[s] || [];
      return a && r[s] ? [...l, ...r[s]] : l;
    }
  };
}, vf = (e, n) => {
  var s;
  if (e.length === 0)
    return n.classGroupId;
  const t = e[0], r = n.nextPart.get(t), o = r ? vf(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (n.validators.length === 0)
    return;
  const i = e.join(il);
  return (s = n.validators.find(({
    validator: a
  }) => a(i))) == null ? void 0 : s.classGroupId;
}, kc = /^\[(.+)\]$/, Cb = (e) => {
  if (kc.test(e)) {
    const n = kc.exec(e)[1], t = n == null ? void 0 : n.substring(0, n.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}, kb = (e) => {
  const {
    theme: n,
    prefix: t
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Nb(Object.entries(e.classGroups), t).forEach(([i, s]) => {
    aa(s, r, i, n);
  }), r;
}, aa = (e, n, t, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const i = o === "" ? n : Ec(n, o);
      i.classGroupId = t;
      return;
    }
    if (typeof o == "function") {
      if (Eb(o)) {
        aa(o(r), n, t, r);
        return;
      }
      n.validators.push({
        validator: o,
        classGroupId: t
      });
      return;
    }
    Object.entries(o).forEach(([i, s]) => {
      aa(s, Ec(n, i), t, r);
    });
  });
}, Ec = (e, n) => {
  let t = e;
  return n.split(il).forEach((r) => {
    t.nextPart.has(r) || t.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(r);
  }), t;
}, Eb = (e) => e.isThemeGetter, Nb = (e, n) => n ? e.map(([t, r]) => {
  const o = r.map((i) => typeof i == "string" ? n + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([s, a]) => [n + s, a])) : i);
  return [t, o];
}) : e, Rb = (e) => {
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
}, xf = "!", Ab = (e) => {
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
    const f = l.length === 0 ? a : a.substring(u), g = f.startsWith(xf), p = g ? f.substring(1) : f, h = d && d > u ? d - u : void 0;
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
}, Tb = (e) => {
  if (e.length <= 1)
    return e;
  const n = [];
  let t = [];
  return e.forEach((r) => {
    r[0] === "[" ? (n.push(...t.sort(), r), t = []) : t.push(r);
  }), n.push(...t.sort()), n;
}, Fb = (e) => ({
  cache: Rb(e.cacheSize),
  parseClassName: Ab(e),
  ...Sb(e)
}), Pb = /\s+/, Ib = (e, n) => {
  const {
    parseClassName: t,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = n, i = [], s = e.trim().split(Pb);
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
    const m = Tb(u).join(":"), b = d ? m + xf : m, y = b + h;
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
function Ob() {
  let e = 0, n, t, r = "";
  for (; e < arguments.length; )
    (n = arguments[e++]) && (t = wf(n)) && (r && (r += " "), r += t);
  return r;
}
const wf = (e) => {
  if (typeof e == "string")
    return e;
  let n, t = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (n = wf(e[r])) && (t && (t += " "), t += n);
  return t;
};
function $b(e, ...n) {
  let t, r, o, i = s;
  function s(l) {
    const c = n.reduce((u, d) => d(u), e());
    return t = Fb(c), r = t.cache.get, o = t.cache.set, i = a, a(l);
  }
  function a(l) {
    const c = r(l);
    if (c)
      return c;
    const u = Ib(l, t);
    return o(l, u), u;
  }
  return function() {
    return i(Ob.apply(null, arguments));
  };
}
const fe = (e) => {
  const n = (t) => t[e] || [];
  return n.isThemeGetter = !0, n;
}, _f = /^\[(?:([a-z-]+):)?(.+)\]$/i, Mb = /^\d+\/\d+$/, Db = /* @__PURE__ */ new Set(["px", "full", "screen"]), Lb = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, zb = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Bb = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Vb = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, jb = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ft = (e) => rr(e) || Db.has(e) || Mb.test(e), qt = (e) => _r(e, "length", Zb), rr = (e) => !!e && !Number.isNaN(Number(e)), ws = (e) => _r(e, "number", rr), $r = (e) => !!e && Number.isInteger(Number(e)), Ub = (e) => e.endsWith("%") && rr(e.slice(0, -1)), Q = (e) => _f.test(e), Yt = (e) => Lb.test(e), Gb = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Hb = (e) => _r(e, Gb, Sf), Wb = (e) => _r(e, "position", Sf), Kb = /* @__PURE__ */ new Set(["image", "url"]), qb = (e) => _r(e, Kb, Xb), Yb = (e) => _r(e, "", Jb), Mr = () => !0, _r = (e, n, t) => {
  const r = _f.exec(e);
  return r ? r[1] ? typeof n == "string" ? r[1] === n : n.has(r[1]) : t(r[2]) : !1;
}, Zb = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  zb.test(e) && !Bb.test(e)
), Sf = () => !1, Jb = (e) => Vb.test(e), Xb = (e) => jb.test(e), Qb = () => {
  const e = fe("colors"), n = fe("spacing"), t = fe("blur"), r = fe("brightness"), o = fe("borderColor"), i = fe("borderRadius"), s = fe("borderSpacing"), a = fe("borderWidth"), l = fe("contrast"), c = fe("grayscale"), u = fe("hueRotate"), d = fe("invert"), f = fe("gap"), g = fe("gradientColorStops"), p = fe("gradientColorStopPositions"), h = fe("inset"), m = fe("margin"), b = fe("opacity"), y = fe("padding"), v = fe("saturate"), _ = fe("scale"), S = fe("sepia"), C = fe("skew"), k = fe("space"), N = fe("translate"), E = () => ["auto", "contain", "none"], R = () => ["auto", "hidden", "clip", "visible", "scroll"], T = () => ["auto", Q, n], A = () => [Q, n], D = () => ["", Ft, qt], $ = () => ["auto", rr, Q], B = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], H = () => ["solid", "dashed", "dotted", "double", "none"], U = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], j = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], Y = () => ["", "0", Q], te = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], ie = () => [rr, Q];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Mr],
      spacing: [Ft, qt],
      blur: ["none", "", Yt, Q],
      brightness: ie(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Yt, Q],
      borderSpacing: A(),
      borderWidth: D(),
      contrast: ie(),
      grayscale: Y(),
      hueRotate: ie(),
      invert: Y(),
      gap: A(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Ub, qt],
      inset: T(),
      margin: T(),
      opacity: ie(),
      padding: A(),
      saturate: ie(),
      scale: ie(),
      sepia: Y(),
      skew: ie(),
      space: A(),
      translate: A()
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
        columns: [Yt]
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
        z: ["auto", $r, Q]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: T()
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
        grow: Y()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: Y()
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
        "col-start": $()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": $()
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
        "row-start": $()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": $()
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
          screen: [Yt]
        }, Yt]
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
        text: ["base", Yt, qt]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ws]
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
        "line-clamp": ["none", rr, ws]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ft, Q]
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
        decoration: [...H(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Ft, qt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Ft, Q]
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
        indent: A()
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
        bg: [...B(), Wb]
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
        bg: ["auto", "cover", "contain", Hb]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, qb]
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
        border: [...H(), "hidden"]
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
        divide: H()
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
        outline: ["", ...H()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Ft, Q]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Ft, qt]
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
        "ring-offset": [Ft, qt]
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
        shadow: ["", "inner", "none", Yt, Yb]
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
        "drop-shadow": ["", "none", Yt, Q]
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
        "scroll-m": A()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": A()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": A()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": A()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": A()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": A()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": A()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": A()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": A()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": A()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": A()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": A()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": A()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": A()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": A()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": A()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": A()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": A()
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
        stroke: [Ft, qt, ws]
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
}, ev = /* @__PURE__ */ $b(Qb);
function P(...e) {
  return ev($i(e));
}
const tv = K(
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
), le = w.forwardRef(
  ({ className: e, variant: n, size: t, isLoading: r, loadingText: o, children: i, disabled: s, ...a }, l) => /* @__PURE__ */ x(
    "button",
    {
      className: P(tv({ variant: n, size: t, className: e })),
      ref: l,
      disabled: s ?? r,
      "aria-busy": r,
      ...a,
      children: r ? /* @__PURE__ */ F(Ge, { children: [
        /* @__PURE__ */ x(Di, { className: "mr-2 h-4 w-4 animate-spin", "aria-hidden": "true" }),
        /* @__PURE__ */ x("span", { children: o ?? i })
      ] }) : i
    }
  )
);
le.displayName = "Button";
const nv = w.forwardRef(
  ({ loading: e = !1, loadingText: n, children: t, ...r }, o) => {
    const i = {
      ...r,
      isLoading: e,
      ...n && { loadingText: n }
    };
    return /* @__PURE__ */ x(le, { ref: o, ...i, children: t });
  }
);
nv.displayName = "LoadingButton";
function OT({
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
  return /* @__PURE__ */ F(
    "div",
    {
      className: P(
        "flex items-center justify-between gap-3 border-t border-slate-200 bg-slate-50 px-6 py-4 dark:border-slate-800 dark:bg-slate-900/50",
        c
      ),
      children: [
        d && /* @__PURE__ */ x("div", { className: "flex-1", children: d }),
        /* @__PURE__ */ F(
          "div",
          {
            className: P("flex items-center gap-3", !d && "ml-auto", u),
            children: [
              !g && /* @__PURE__ */ x(le, { type: "button", onClick: e, variant: l, children: t }),
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
function $T({
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
const rv = K(
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
), ov = K(
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
), Cf = w.forwardRef(
  ({ className: e, variant: n, inputSize: t, label: r, error: o, helperText: i, id: s, type: a = "text", ...l }, c) => {
    const u = w.useId(), d = s ?? u, f = `${d}-error`, g = `${d}-helper`, p = !!o, h = p ? "error" : n;
    return /* @__PURE__ */ F("div", { className: "flex flex-col gap-1.5", children: [
      r && /* @__PURE__ */ x("label", { htmlFor: d, className: P(ov({ variant: h })), children: r }),
      /* @__PURE__ */ x(
        "input",
        {
          type: a,
          id: d,
          className: P(rv({ variant: h, inputSize: t, className: e })),
          ref: c,
          "aria-invalid": p,
          "aria-describedby": p ? f : i ? g : void 0,
          ...l
        }
      ),
      p && /* @__PURE__ */ x("p", { id: f, className: "text-destructive text-sm", role: "alert", children: o }),
      !p && i && /* @__PURE__ */ x("p", { id: g, className: "text-muted-foreground text-sm", children: i })
    ] });
  }
);
Cf.displayName = "Input";
const iv = K(
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
), sv = K(
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
), av = w.forwardRef(
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
    const f = w.useId(), g = l ?? f, p = `${g}-error`, h = `${g}-helper`, m = !!s, b = m ? "error" : n, y = () => c || (r ? /* @__PURE__ */ F(Ge, { children: [
      i && /* @__PURE__ */ x("option", { value: "", disabled: !0, children: i }),
      r.map((v) => /* @__PURE__ */ x("option", { value: v.value, disabled: v.disabled, children: v.label }, v.value))
    ] }) : null);
    return /* @__PURE__ */ F("div", { className: "flex flex-col gap-1.5", children: [
      o && /* @__PURE__ */ x("label", { htmlFor: g, className: P(sv({ variant: b })), children: o }),
      /* @__PURE__ */ F("div", { className: "relative", children: [
        /* @__PURE__ */ x(
          "select",
          {
            id: g,
            className: P(
              iv({ variant: b, selectSize: t, className: e }),
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
        /* @__PURE__ */ x(
          Mi,
          {
            className: "text-muted-foreground pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2",
            "aria-hidden": "true"
          }
        )
      ] }),
      m && /* @__PURE__ */ x("p", { id: p, className: "text-destructive text-sm", role: "alert", children: s }),
      !m && a && /* @__PURE__ */ x("p", { id: h, className: "text-muted-foreground text-sm", children: a })
    ] });
  }
);
av.displayName = "Select";
function Nc(e, n) {
  if (typeof e == "function")
    return e(n);
  e != null && (e.current = n);
}
function io(...e) {
  return (n) => {
    let t = !1;
    const r = e.map((o) => {
      const i = Nc(o, n);
      return !t && typeof i == "function" && (t = !0), i;
    });
    if (t)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : Nc(e[o], null);
        }
      };
  };
}
function ve(...e) {
  return w.useCallback(io(...e), e);
}
var lv = Symbol.for("react.lazy"), ei = w[" use ".trim().toString()];
function cv(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function kf(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === lv && "_payload" in e && cv(e._payload);
}
// @__NO_SIDE_EFFECTS__
function uv(e) {
  const n = /* @__PURE__ */ dv(e), t = w.forwardRef((r, o) => {
    let { children: i, ...s } = r;
    kf(i) && typeof ei == "function" && (i = ei(i._payload));
    const a = w.Children.toArray(i), l = a.find(gv);
    if (l) {
      const c = l.props.children, u = a.map((d) => d === l ? w.Children.count(c) > 1 ? w.Children.only(null) : w.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ x(n, { ...s, ref: o, children: w.isValidElement(c) ? w.cloneElement(c, void 0, u) : null });
    }
    return /* @__PURE__ */ x(n, { ...s, ref: o, children: i });
  });
  return t.displayName = `${e}.Slot`, t;
}
// @__NO_SIDE_EFFECTS__
function dv(e) {
  const n = w.forwardRef((t, r) => {
    let { children: o, ...i } = t;
    if (kf(o) && typeof ei == "function" && (o = ei(o._payload)), w.isValidElement(o)) {
      const s = hv(o), a = pv(i, o.props);
      return o.type !== w.Fragment && (a.ref = r ? io(r, s) : s), w.cloneElement(o, a);
    }
    return w.Children.count(o) > 1 ? w.Children.only(null) : null;
  });
  return n.displayName = `${e}.SlotClone`, n;
}
var fv = Symbol("radix.slottable");
function gv(e) {
  return w.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === fv;
}
function pv(e, n) {
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
function hv(e) {
  var r, o;
  let n = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
var mv = [
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
], yv = mv.reduce((e, n) => {
  const t = /* @__PURE__ */ uv(`Primitive.${n}`), r = w.forwardRef((o, i) => {
    const { asChild: s, ...a } = o, l = s ? t : n;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ x(l, { ...a, ref: i });
  });
  return r.displayName = `Primitive.${n}`, { ...e, [n]: r };
}, {}), bv = "Label", Ef = w.forwardRef((e, n) => /* @__PURE__ */ x(
  yv.label,
  {
    ...e,
    ref: n,
    onMouseDown: (t) => {
      var o;
      t.target.closest("button, input, select, textarea") || ((o = e.onMouseDown) == null || o.call(e, t), !t.defaultPrevented && t.detail > 1 && t.preventDefault());
    }
  }
));
Ef.displayName = bv;
var Nf = Ef;
const vv = K(
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
), Rf = w.forwardRef(
  ({ className: e, variant: n, size: t, required: r, children: o, ...i }, s) => /* @__PURE__ */ F(
    Nf,
    {
      ref: s,
      className: P(vv({ variant: n, size: t }), e),
      ...i,
      children: [
        o,
        r && /* @__PURE__ */ x("span", { className: "text-destructive ml-1", children: "*" })
      ]
    }
  )
);
Rf.displayName = Nf.displayName;
const xv = K("rounded-lg border bg-card text-card-foreground", {
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
}), Af = w.forwardRef(
  ({ className: e, variant: n, status: t, ...r }, o) => /* @__PURE__ */ x("div", { ref: o, className: P(xv({ variant: n, status: t, className: e })), ...r })
);
Af.displayName = "Card";
const wv = w.forwardRef(
  ({ className: e, ...n }, t) => /* @__PURE__ */ x("div", { ref: t, className: P("flex flex-col space-y-1.5 p-6", e), ...n })
);
wv.displayName = "CardHeader";
const _v = w.forwardRef(
  ({ className: e, as: n = "h3", ...t }, r) => /* @__PURE__ */ x(
    n,
    {
      ref: r,
      className: P("text-2xl leading-none font-semibold tracking-tight", e),
      ...t
    }
  )
);
_v.displayName = "CardTitle";
const Sv = w.forwardRef(
  ({ className: e, ...n }, t) => /* @__PURE__ */ x("p", { ref: t, className: P("text-muted-foreground text-sm", e), ...n })
);
Sv.displayName = "CardDescription";
const Cv = w.forwardRef(
  ({ className: e, ...n }, t) => /* @__PURE__ */ x("div", { ref: t, className: P("p-6 pt-0", e), ...n })
);
Cv.displayName = "CardContent";
const kv = w.forwardRef(
  ({ className: e, ...n }, t) => /* @__PURE__ */ x("div", { ref: t, className: P("flex items-center p-6 pt-0", e), ...n })
);
kv.displayName = "CardFooter";
const Ev = K(
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
), sl = w.forwardRef(
  ({ className: e, variant: n, ...t }, r) => /* @__PURE__ */ x("div", { ref: r, className: P(Ev({ variant: n }), e), ...t })
);
sl.displayName = "Badge";
const Nv = K("animate-spin text-muted-foreground", {
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
}), Tf = w.forwardRef(
  ({ className: e, size: n, label: t = "Loading...", ...r }, o) => /* @__PURE__ */ x(
    Di,
    {
      ref: o,
      className: P(Nv({ size: n, className: e })),
      "aria-label": t,
      role: "status",
      ...r
    }
  )
);
Tf.displayName = "Spinner";
const Rv = w.forwardRef(
  ({ className: e, size: n = "default", message: t, fullScreen: r = !1, ...o }, i) => /* @__PURE__ */ x(
    "div",
    {
      ref: i,
      className: P(r ? "fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm" : "flex items-center justify-center p-4", e),
      role: "status",
      "aria-busy": "true",
      ...o,
      children: /* @__PURE__ */ F("div", { className: "flex flex-col items-center gap-2", children: [
        /* @__PURE__ */ x(Tf, { size: n, label: t ?? "Loading..." }),
        t && /* @__PURE__ */ x("p", { className: "text-muted-foreground text-sm", children: t })
      ] })
    }
  )
);
Rv.displayName = "Loading";
const Av = K("animate-pulse rounded-md bg-muted", {
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
}), Tv = w.forwardRef(
  ({ className: e, variant: n, ...t }, r) => /* @__PURE__ */ x(
    "div",
    {
      ref: r,
      className: P(Av({ variant: n, className: e })),
      "aria-hidden": "true",
      ...t
    }
  )
);
Tv.displayName = "Skeleton";
const Fv = K(
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
), Pv = K(
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
), Ff = w.createContext(null);
function al() {
  const e = w.useContext(Ff);
  if (!e)
    throw new Error("Tabs components must be used within a Tabs provider");
  return e;
}
const Iv = w.forwardRef(
  ({ className: e, defaultValue: n, value: t, onValueChange: r, variant: o = "default", children: i, ...s }, a) => {
    const [l, c] = w.useState(n), u = t ?? l, d = w.useCallback(
      (f) => {
        t === void 0 && c(f), r == null || r(f);
      },
      [t, r]
    );
    return /* @__PURE__ */ x(Ff.Provider, { value: { activeTab: u, setActiveTab: d, variant: o ?? "default" }, children: /* @__PURE__ */ x("div", { ref: a, className: P("w-full", e), ...s, children: i }) });
  }
);
Iv.displayName = "Tabs";
const Ov = w.forwardRef(({ className: e, ...n }, t) => {
  const { variant: r } = al();
  return /* @__PURE__ */ x(
    "div",
    {
      ref: t,
      role: "tablist",
      className: P(Fv({ variant: r, className: e })),
      ...n
    }
  );
});
Ov.displayName = "TabsList";
const $v = w.forwardRef(
  ({ className: e, value: n, children: t, disabled: r, ...o }, i) => {
    const { activeTab: s, setActiveTab: a, variant: l } = al(), c = s === n, u = `tabpanel-${n}`, d = `tab-${n}`;
    return /* @__PURE__ */ x(
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
        className: P(Pv({ variant: l, className: e })),
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
$v.displayName = "TabsTrigger";
const Mv = w.forwardRef(
  ({ className: e, value: n, forceMount: t = !1, children: r, ...o }, i) => {
    const { activeTab: s } = al(), a = s === n, l = `tabpanel-${n}`, c = `tab-${n}`;
    return !a && !t ? null : /* @__PURE__ */ x(
      "div",
      {
        ref: i,
        role: "tabpanel",
        id: l,
        "aria-labelledby": c,
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
Mv.displayName = "TabsContent";
var Pf = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Rc = de.createContext && /* @__PURE__ */ de.createContext(Pf), Dv = ["attr", "size", "title"];
function Lv(e, n) {
  if (e == null) return {};
  var t = zv(e, n), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (t[r] = e[r]);
  }
  return t;
}
function zv(e, n) {
  if (e == null) return {};
  var t = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (n.indexOf(r) >= 0) continue;
      t[r] = e[r];
    }
  return t;
}
function ti() {
  return ti = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, ti.apply(this, arguments);
}
function Ac(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function ni(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Ac(Object(t), !0).forEach(function(r) {
      Bv(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ac(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function Bv(e, n, t) {
  return n = Vv(n), n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
function Vv(e) {
  var n = jv(e, "string");
  return typeof n == "symbol" ? n : n + "";
}
function jv(e, n) {
  if (typeof e != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(e, n);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function If(e) {
  return e && e.map((n, t) => /* @__PURE__ */ de.createElement(n.tag, ni({
    key: t
  }, n.attr), If(n.child)));
}
function ft(e) {
  return (n) => /* @__PURE__ */ de.createElement(Uv, ti({
    attr: ni({}, e.attr)
  }, n), If(e.child));
}
function Uv(e) {
  var n = (t) => {
    var {
      attr: r,
      size: o,
      title: i
    } = e, s = Lv(e, Dv), a = o || t.size || "1em", l;
    return t.className && (l = t.className), e.className && (l = (l ? l + " " : "") + e.className), /* @__PURE__ */ de.createElement("svg", ti({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, r, s, {
      className: l,
      style: ni(ni({
        color: e.color || t.color
      }, t.style), e.style),
      height: a,
      width: a,
      xmlns: "http://www.w3.org/2000/svg"
    }), i && /* @__PURE__ */ de.createElement("title", null, i), e.children);
  };
  return Rc !== void 0 ? /* @__PURE__ */ de.createElement(Rc.Consumer, null, (t) => n(t)) : n(Pf);
}
function Gv(e) {
  return ft({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" }, child: [] }] })(e);
}
function Hv(e) {
  return ft({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" }, child: [] }] })(e);
}
function Wv(e) {
  return ft({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" }, child: [] }] })(e);
}
function Of(e) {
  return ft({ attr: { viewBox: "0 0 320 512" }, child: [{ tag: "path", attr: { d: "M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" }, child: [] }] })(e);
}
function Kv(e) {
  return ft({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z" }, child: [] }] })(e);
}
function qv(e) {
  return ft({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" }, child: [] }] })(e);
}
function Yv(e) {
  return ft({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" }, child: [] }] })(e);
}
function Zv(e) {
  return ft({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z" }, child: [] }] })(e);
}
function Jv(e) {
  return ft({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z" }, child: [] }] })(e);
}
function $f(e) {
  return ft({ attr: { viewBox: "0 0 352 512" }, child: [{ tag: "path", attr: { d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" }, child: [] }] })(e);
}
function Xv(e) {
  return ft({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" }, child: [] }] })(e);
}
const Qv = K(
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
), e0 = K("inline-flex items-center gap-1.5 transition-all duration-200", {
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
}), Tc = K(
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
), t0 = K(
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
), Mf = w.forwardRef(
  ({
    items: e,
    separator: n = /* @__PURE__ */ x(Of, {}),
    maxItems: t,
    size: r,
    variant: o = "default",
    LinkComponent: i,
    mobileMaxItems: s = 2,
    className: a,
    ...l
  }, c) => {
    const [u, d] = w.useState(!1);
    w.useEffect(() => {
      const g = () => {
        d(window.innerWidth < 640);
      };
      return g(), window.addEventListener("resize", g), () => {
        window.removeEventListener("resize", g);
      };
    }, []);
    const f = w.useMemo(() => {
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
    return /* @__PURE__ */ x(
      "nav",
      {
        ref: c,
        "aria-label": "Breadcrumb",
        className: P(Qv({ size: r }), a),
        ...l,
        children: /* @__PURE__ */ x("ol", { className: "flex list-none flex-wrap items-center gap-1.5", children: f.map((g, p) => {
          if (!g) return null;
          const h = p === f.length - 1, m = h && !g.href, b = g.label === "...";
          return /* @__PURE__ */ F(w.Fragment, { children: [
            /* @__PURE__ */ x(
              "li",
              {
                className: P(
                  e0({
                    variant: o,
                    size: r,
                    current: m
                  })
                ),
                children: b ? /* @__PURE__ */ x("span", { className: "px-1", children: g.label }) : g.href && !m ? i ? /* @__PURE__ */ F(
                  i,
                  {
                    to: g.href,
                    className: P(
                      Tc({ variant: o }),
                      "inline-flex items-center gap-1.5"
                    ),
                    children: [
                      g.icon && /* @__PURE__ */ x("span", { className: "inline-flex items-center", "aria-hidden": "true", children: g.icon }),
                      /* @__PURE__ */ x("span", { children: g.label })
                    ]
                  }
                ) : /* @__PURE__ */ F(
                  "a",
                  {
                    href: g.href,
                    onClick: g.onClick,
                    className: P(
                      Tc({ variant: o }),
                      "inline-flex items-center gap-1.5"
                    ),
                    children: [
                      g.icon && /* @__PURE__ */ x("span", { className: "inline-flex items-center", "aria-hidden": "true", children: g.icon }),
                      /* @__PURE__ */ x("span", { children: g.label })
                    ]
                  }
                ) : /* @__PURE__ */ F("span", { className: "inline-flex items-center gap-1.5", children: [
                  g.icon && /* @__PURE__ */ x("span", { className: "inline-flex items-center", "aria-hidden": "true", children: g.icon }),
                  /* @__PURE__ */ x("span", { "aria-current": m ? "page" : void 0, children: g.label })
                ] })
              }
            ),
            !h && /* @__PURE__ */ x("li", { className: P(t0({ size: r })), "aria-hidden": "true", children: n })
          ] }, `${g.label}-${String(p)}`);
        }) })
      }
    );
  }
);
Mf.displayName = "Breadcrumb";
const n0 = K("w-full", {
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
}), r0 = {
  default: "text-foreground",
  success: "text-green-600 dark:text-green-400",
  warning: "text-yellow-600 dark:text-yellow-400",
  destructive: "text-red-600 dark:text-red-400"
}, o0 = w.forwardRef(
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
    LinkComponent: d,
    isLive: f,
    onToggleLive: g,
    liveLabel: p,
    uptime: h,
    helpText: m,
    helpLink: b,
    actionsPosition: y = "inline",
    controls: v,
    ..._
  }, S) => {
    const C = w.useMemo(() => {
      if (!s) return [];
      const k = s.map((N) => {
        const E = N.icon, R = {
          label: N.label,
          icon: E ? /* @__PURE__ */ x(E, { className: "h-4 w-4" }) : void 0
        };
        return N.href && (R.href = N.href), R;
      });
      return c ? [
        {
          label: "Home",
          href: "/",
          icon: /* @__PURE__ */ x(hb, { className: "h-4 w-4", "aria-label": "Home" })
        },
        ...k
      ] : k;
    }, [s, c]);
    return /* @__PURE__ */ x(
      "header",
      {
        ref: S,
        className: P(n0({ variant: n, sticky: t, className: e })),
        ..._,
        children: /* @__PURE__ */ F("div", { className: "px-4 py-4 sm:px-6 sm:py-6", children: [
          s && s.length > 0 && /* @__PURE__ */ x("div", { className: "mb-3", children: /* @__PURE__ */ x(
            Mf,
            {
              items: C,
              separator: u,
              className: "text-muted-foreground",
              ...d && { LinkComponent: d }
            }
          ) }),
          /* @__PURE__ */ F("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", children: [
            /* @__PURE__ */ F("div", { className: "flex min-w-0 flex-1 items-center gap-3", children: [
              i && /* @__PURE__ */ x("div", { className: "bg-primary/10 text-primary flex-shrink-0 rounded-lg p-2", children: /* @__PURE__ */ x(i, { className: "h-6 w-6", "aria-hidden": "true" }) }),
              /* @__PURE__ */ F("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ F("h1", { className: "text-foreground flex items-center gap-2 text-2xl font-semibold", children: [
                  r,
                  m && /* @__PURE__ */ F("div", { className: "group relative", children: [
                    /* @__PURE__ */ F(le, { variant: "ghost", size: "icon", type: "button", className: "h-5 w-5", children: [
                      /* @__PURE__ */ x(Xo, { className: "h-5 w-5" }),
                      /* @__PURE__ */ x("span", { className: "sr-only", children: "Help" })
                    ] }),
                    /* @__PURE__ */ F("div", { className: "absolute left-0 top-6 z-50 hidden w-64 max-w-sm whitespace-normal break-words rounded-lg bg-slate-800 p-3 text-xs text-white shadow-lg group-hover:block dark:bg-slate-700", children: [
                      m,
                      b && /* @__PURE__ */ x(
                        "a",
                        {
                          href: b,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "mt-1 block break-all text-blue-300 underline hover:text-blue-200",
                          children: "Learn more →"
                        }
                      )
                    ] })
                  ] })
                ] }),
                o && /* @__PURE__ */ x("p", { className: "text-muted-foreground mt-1 text-sm", children: o })
              ] })
            ] }),
            /* @__PURE__ */ F("div", { className: "flex flex-shrink-0 flex-col items-end gap-3", children: [
              /* @__PURE__ */ F("div", { className: "flex flex-col items-end gap-2", children: [
                /* @__PURE__ */ F("div", { className: "flex items-center gap-3", children: [
                  g !== void 0 && /* @__PURE__ */ F(
                    le,
                    {
                      variant: "ghost",
                      onClick: g,
                      className: P(
                        "flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium transition-all",
                        f ? "bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-400 dark:hover:bg-emerald-900/40" : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700"
                      ),
                      "aria-label": f ? "Pause live updates" : "Resume live updates",
                      children: [
                        /* @__PURE__ */ F("span", { className: "relative flex h-2.5 w-2.5", children: [
                          f && /* @__PURE__ */ x("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" }),
                          /* @__PURE__ */ x(
                            "span",
                            {
                              className: P(
                                "relative inline-flex h-2.5 w-2.5 rounded-full",
                                f ? "bg-emerald-500" : "bg-slate-400 dark:bg-slate-500"
                              )
                            }
                          )
                        ] }),
                        /* @__PURE__ */ x("span", { children: p || (f ? "Live" : "Paused") })
                      ]
                    }
                  ),
                  f && g === void 0 && /* @__PURE__ */ F("div", { className: "flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-1.5 text-sm font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400", children: [
                    /* @__PURE__ */ F("span", { className: "relative flex h-2.5 w-2.5", children: [
                      /* @__PURE__ */ x("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" }),
                      /* @__PURE__ */ x("span", { className: "relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" })
                    ] }),
                    /* @__PURE__ */ x("span", { children: p || "Live" })
                  ] }),
                  a && y === "inline" && /* @__PURE__ */ x("div", { className: "flex items-center gap-2", children: a })
                ] }),
                h && /* @__PURE__ */ F("div", { className: "text-muted-foreground flex items-center gap-1.5 text-xs", children: [
                  /* @__PURE__ */ x(
                    "svg",
                    {
                      className: "h-3.5 w-3.5",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      strokeWidth: "2",
                      stroke: "currentColor",
                      children: /* @__PURE__ */ x(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          d: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ F("span", { children: [
                    "Uptime: ",
                    h
                  ] })
                ] })
              ] }),
              a && y === "below" && /* @__PURE__ */ x("div", { className: "flex items-center gap-2", children: a })
            ] })
          ] }),
          l && l.length > 0 && /* @__PURE__ */ x("div", { className: "border-border mt-4 border-t pt-4", children: /* @__PURE__ */ x("dl", { className: "grid grid-cols-2 gap-4 sm:grid-cols-4", children: l.map((k, N) => {
            const E = k.icon;
            return /* @__PURE__ */ F("div", { className: "flex items-center gap-2", children: [
              E && /* @__PURE__ */ x("div", { className: "bg-muted flex-shrink-0 rounded-md p-1.5", children: /* @__PURE__ */ x(E, { className: "text-muted-foreground h-4 w-4", "aria-hidden": "true" }) }),
              /* @__PURE__ */ F("div", { children: [
                /* @__PURE__ */ x("dt", { className: "text-muted-foreground text-xs", children: k.label }),
                /* @__PURE__ */ x(
                  "dd",
                  {
                    className: P(
                      "text-lg font-semibold",
                      r0[k.color ?? "default"]
                    ),
                    children: k.value
                  }
                )
              ] })
            ] }, N);
          }) }) }),
          v && /* @__PURE__ */ x("div", { className: "border-border mt-4 border-t pt-4", children: v })
        ] })
      }
    );
  }
);
o0.displayName = "PageHeader";
const i0 = K(
  "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
  {
    variants: {},
    defaultVariants: {}
  }
), s0 = K(
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
), Df = w.createContext(void 0);
function Li() {
  const e = w.useContext(Df);
  if (!e)
    throw new Error("Dialog components must be used within a Dialog");
  return e;
}
function a0({
  open: e,
  defaultOpen: n = !1,
  onOpenChange: t,
  children: r
}) {
  const [o, i] = w.useState(n), s = e !== void 0, a = s ? e : o, l = w.useCallback(
    (c) => {
      s || i(c), t == null || t(c);
    },
    [s, t]
  );
  return /* @__PURE__ */ x(Df.Provider, { value: { open: a, onOpenChange: l }, children: r });
}
const l0 = w.forwardRef(
  ({ asChild: e = !1, onClick: n, children: t, ...r }, o) => {
    const { onOpenChange: i } = Li(), s = (a) => {
      n == null || n(a), i(!0);
    };
    return e && w.isValidElement(t) ? w.cloneElement(
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
    ) : /* @__PURE__ */ x("button", { ref: o, type: "button", onClick: s, ...r, children: t });
  }
);
l0.displayName = "DialogTrigger";
function c0({ children: e, container: n }) {
  const [t, r] = w.useState(!1);
  if (w.useEffect(() => (r(!0), () => {
    r(!1);
  }), []), !t) return null;
  const o = n ?? document.body;
  return /* @__PURE__ */ x(Ge, { children: w.Children.map(
    e,
    (i) => o ? ff(i, o) : i
  ) });
}
const Lf = w.forwardRef(
  ({ className: e, ...n }, t) => {
    const { open: r } = Li();
    return /* @__PURE__ */ x(
      "div",
      {
        ref: t,
        "data-state": r ? "open" : "closed",
        className: P(i0(), e),
        ...n
      }
    );
  }
);
Lf.displayName = "DialogOverlay";
const zf = w.forwardRef(
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
    const { open: u, onOpenChange: d } = Li(), f = w.useRef(null), g = w.useRef(null);
    w.useImperativeHandle(c, () => {
      if (!f.current)
        throw new Error("Content ref is not attached");
      return f.current;
    });
    const p = w.useCallback(() => {
      d(!1), s == null || s();
    }, [d, s]);
    return w.useEffect(() => {
      if (!u || !o) return;
      const h = (m) => {
        m.key === "Escape" && (m.preventDefault(), p());
      };
      return document.addEventListener("keydown", h), () => {
        document.removeEventListener("keydown", h);
      };
    }, [u, o, p]), w.useEffect(() => {
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
    }, [u]), w.useEffect(() => {
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
    }, [u]), u ? /* @__PURE__ */ F(c0, { container: a, children: [
      /* @__PURE__ */ x(Lf, { onClick: r ? p : void 0 }),
      /* @__PURE__ */ F(
        "div",
        {
          ref: f,
          role: "dialog",
          "aria-modal": "true",
          "data-state": u ? "open" : "closed",
          className: P(s0({ size: t }), e),
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
                onClick: p,
                className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none",
                "aria-label": "Close",
                children: /* @__PURE__ */ x(ol, { className: "h-4 w-4" })
              }
            )
          ]
        }
      )
    ] }) : null;
  }
);
zf.displayName = "DialogContent";
const Bf = w.forwardRef(
  ({ className: e, ...n }, t) => /* @__PURE__ */ x(
    "div",
    {
      ref: t,
      className: P("flex flex-col space-y-1.5 text-center sm:text-left", e),
      ...n
    }
  )
);
Bf.displayName = "DialogHeader";
const Vf = w.forwardRef(
  ({ className: e, ...n }, t) => /* @__PURE__ */ x(
    "div",
    {
      ref: t,
      className: P("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e),
      ...n
    }
  )
);
Vf.displayName = "DialogFooter";
const jf = w.forwardRef(
  ({ className: e, ...n }, t) => /* @__PURE__ */ x(
    "h2",
    {
      ref: t,
      className: P("text-foreground text-lg leading-none font-semibold tracking-tight", e),
      ...n
    }
  )
);
jf.displayName = "DialogTitle";
const Uf = w.forwardRef(
  ({ className: e, ...n }, t) => /* @__PURE__ */ x("p", { ref: t, className: P("text-muted-foreground text-sm", e), ...n })
);
Uf.displayName = "DialogDescription";
const u0 = w.forwardRef(
  ({ asChild: e = !1, onClick: n, children: t, ...r }, o) => {
    const { onOpenChange: i } = Li(), s = (a) => {
      n == null || n(a), i(!1);
    };
    return e && w.isValidElement(t) ? w.cloneElement(
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
    ) : /* @__PURE__ */ x("button", { ref: o, type: "button", onClick: s, ...r, children: t });
  }
);
u0.displayName = "DialogClose";
const d0 = K(
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
), f0 = {
  sm: "h-3 w-3",
  default: "h-3.5 w-3.5",
  lg: "h-4 w-4"
}, g0 = w.forwardRef(
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
    const h = w.useRef(null), [m, b] = w.useState(o ?? !1), y = w.useId();
    w.useImperativeHandle(p, () => {
      if (!h.current)
        throw new Error("Input ref is not attached");
      return h.current;
    });
    const v = r !== void 0, _ = v ? r : m;
    w.useEffect(() => {
      h.current && (h.current.indeterminate = s);
    }, [s]);
    const S = () => s ? "indeterminate" : _ ? "checked" : "unchecked", C = (E) => {
      const R = E.target.checked;
      v || b(R), i == null || i(R);
    }, k = f ?? y, N = f0[t ?? "default"];
    return /* @__PURE__ */ F("div", { className: "flex items-start gap-2", children: [
      /* @__PURE__ */ F("div", { className: "relative flex items-center justify-center", children: [
        /* @__PURE__ */ x(
          "input",
          {
            ref: h,
            type: "checkbox",
            id: k,
            checked: _,
            onChange: C,
            disabled: d,
            required: u,
            className: "sr-only",
            "aria-invalid": c ? "true" : void 0,
            "aria-describedby": l || c ? `${k}-description` : void 0,
            "aria-label": !a && g["aria-label"] ? g["aria-label"] : void 0,
            ...g
          }
        ),
        /* @__PURE__ */ x(
          "div",
          {
            "data-state": S(),
            className: P(
              d0({ variant: n, size: t }),
              "flex cursor-pointer items-center justify-center",
              d && "cursor-not-allowed",
              c && "border-destructive",
              e
            ),
            onClick: () => {
              !d && h.current && h.current.click();
            },
            role: "presentation",
            children: s ? /* @__PURE__ */ x(bb, { className: N, "aria-hidden": "true" }) : _ ? /* @__PURE__ */ x(Jo, { className: N, "aria-hidden": "true" }) : null
          }
        )
      ] }),
      (a || l || c) && /* @__PURE__ */ F("div", { className: "flex flex-col", children: [
        a && /* @__PURE__ */ F(
          "label",
          {
            htmlFor: k,
            className: P(
              "cursor-pointer text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
              d && "cursor-not-allowed opacity-70"
            ),
            children: [
              a,
              u && /* @__PURE__ */ x("span", { className: "text-destructive ml-1", children: "*" })
            ]
          }
        ),
        (l || c) && /* @__PURE__ */ x(
          "p",
          {
            id: `${k}-description`,
            className: P(
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
g0.displayName = "Checkbox";
const p0 = w.forwardRef(
  ({
    label: e,
    description: n,
    error: t,
    required: r,
    children: o,
    className: i,
    orientation: s = "vertical",
    ...a
  }, l) => /* @__PURE__ */ F(
    "fieldset",
    {
      ref: l,
      className: P("space-y-2", i),
      "aria-describedby": n || t ? "checkbox-group-description" : void 0,
      ...a,
      children: [
        e && /* @__PURE__ */ F("legend", { className: "text-sm leading-none font-medium", children: [
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
p0.displayName = "CheckboxGroup";
const h0 = K(
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
), m0 = K(
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
), y0 = w.forwardRef(
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
    const [m, b] = w.useState(o), y = w.useId(), v = r !== void 0, _ = v ? r : m, S = () => {
      if (c) return;
      const A = !_;
      v || b(A), i == null || i(A);
    }, C = (A) => {
      (A.key === " " || A.key === "Enter") && (A.preventDefault(), S());
    }, k = g ?? y, N = _ ? "checked" : "unchecked", E = /* @__PURE__ */ x(
      "button",
      {
        ref: h,
        type: "button",
        role: "switch",
        id: k,
        "aria-checked": _,
        "aria-required": u,
        "aria-describedby": a ? `${k}-description` : void 0,
        "data-state": N,
        disabled: c,
        onClick: S,
        onKeyDown: C,
        className: P(h0({ variant: n, size: t }), e),
        ...p,
        children: /* @__PURE__ */ x("span", { "data-state": N, className: P(m0({ size: t })) })
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
      return /* @__PURE__ */ F(Ge, { children: [
        R,
        E
      ] });
    const T = /* @__PURE__ */ F("div", { className: "flex flex-col", children: [
      s && /* @__PURE__ */ F(
        "label",
        {
          htmlFor: k,
          className: P(
            "cursor-pointer text-sm leading-none font-medium",
            c && "cursor-not-allowed opacity-70"
          ),
          children: [
            s,
            u && /* @__PURE__ */ x("span", { className: "text-destructive ml-1", children: "*" })
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
    return /* @__PURE__ */ F("div", { className: "flex items-center gap-3", children: [
      R,
      l === "left" && T,
      E,
      l === "right" && T
    ] });
  }
);
y0.displayName = "Switch";
const b0 = w.forwardRef(
  ({ label: e, description: n, children: t, className: r, ...o }, i) => /* @__PURE__ */ F("div", { ref: i, role: "group", className: P("space-y-4", r), ...o, children: [
    (e || n) && /* @__PURE__ */ F("div", { className: "space-y-1", children: [
      e && /* @__PURE__ */ x("h3", { className: "text-sm leading-none font-medium", children: e }),
      n && /* @__PURE__ */ x("p", { className: "text-muted-foreground text-sm", children: n })
    ] }),
    /* @__PURE__ */ x("div", { className: "space-y-4", children: t })
  ] })
);
b0.displayName = "SwitchGroup";
const v0 = K(
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
), x0 = w.forwardRef(
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
    const [S, C] = w.useState(
      p !== void 0 ? p : h || ""
    ), k = w.useRef(null), N = p !== void 0, E = N ? p : S, R = String(E || "").length, T = w.useCallback(() => {
      if (!c || !k.current) return;
      const U = k.current;
      U.style.height = "auto";
      const j = parseInt(window.getComputedStyle(U).lineHeight), Y = parseInt(window.getComputedStyle(U).paddingTop), te = parseInt(window.getComputedStyle(U).paddingBottom), ie = j * u + Y + te, he = d ? j * d + Y + te : 1 / 0, ze = Math.min(Math.max(U.scrollHeight, ie), he);
      U.style.height = `${String(ze)}px`;
    }, [c, u, d]);
    w.useEffect(() => {
      c && T();
    }, [E, c, T]);
    const A = w.useCallback(
      (U) => {
        k.current = U, typeof _ == "function" ? _(U) : _ && (_.current = U);
      },
      [_]
    ), D = (U) => {
      N || C(U.target.value), m == null || m(U), c && T();
    }, $ = !!s, B = $ ? "destructive" : n, H = l !== void 0 && R > l;
    return /* @__PURE__ */ F("div", { className: P("w-full", f), children: [
      o && /* @__PURE__ */ F(
        "label",
        {
          htmlFor: v.id,
          className: P(
            "text-foreground mb-2 block text-sm font-medium",
            b && "cursor-not-allowed opacity-50",
            g
          ),
          children: [
            o,
            v.required && /* @__PURE__ */ x("span", { className: "text-destructive ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ x("div", { className: "relative", children: /* @__PURE__ */ x(
        "textarea",
        {
          ref: A,
          className: P(
            v0({
              variant: B,
              textareaSize: t,
              resize: c ? "none" : r
            }),
            $ && "border-destructive focus-visible:ring-destructive",
            e
          ),
          value: E,
          onChange: D,
          disabled: b,
          maxLength: l,
          rows: c ? u : y,
          "aria-invalid": $ ? "true" : void 0,
          "aria-describedby": s || i || a ? `${v.id ?? ""}-description ${v.id ?? ""}-error ${v.id ?? ""}-count` : void 0,
          ...v
        }
      ) }),
      /* @__PURE__ */ F("div", { className: "mt-1.5 flex items-center justify-between gap-2", children: [
        /* @__PURE__ */ F("div", { className: "flex-1", children: [
          i && !s && /* @__PURE__ */ x(
            "p",
            {
              id: `${v.id ?? ""}-description`,
              className: P("text-muted-foreground text-sm", b && "opacity-50"),
              children: i
            }
          ),
          s && /* @__PURE__ */ x(
            "p",
            {
              id: `${v.id ?? ""}-error`,
              className: "text-destructive text-sm font-medium",
              role: "alert",
              children: s
            }
          )
        ] }),
        a && /* @__PURE__ */ F(
          "p",
          {
            id: `${v.id ?? ""}-count`,
            className: P(
              "text-sm tabular-nums",
              H ? "text-destructive font-medium" : "text-muted-foreground",
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
x0.displayName = "Textarea";
function ge(e, n, { checkForDefaultPrevented: t = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), t === !1 || !o.defaultPrevented)
      return n == null ? void 0 : n(o);
  };
}
function Ht(e, n = []) {
  let t = [];
  function r(i, s) {
    const a = w.createContext(s), l = t.length;
    t = [...t, s];
    const c = (d) => {
      var b;
      const { scope: f, children: g, ...p } = d, h = ((b = f == null ? void 0 : f[e]) == null ? void 0 : b[l]) || a, m = w.useMemo(() => p, Object.values(p));
      return /* @__PURE__ */ x(h.Provider, { value: m, children: g });
    };
    c.displayName = i + "Provider";
    function u(d, f) {
      var h;
      const g = ((h = f == null ? void 0 : f[e]) == null ? void 0 : h[l]) || a, p = w.useContext(g);
      if (p) return p;
      if (s !== void 0) return s;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return [c, u];
  }
  const o = () => {
    const i = t.map((s) => w.createContext(s));
    return function(a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return w.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: l } }),
        [a, l]
      );
    };
  };
  return o.scopeName = e, [r, w0(o, ...n)];
}
function w0(...e) {
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
      return w.useMemo(() => ({ [`__scope${n.scopeName}`]: s }), [s]);
    };
  };
  return t.scopeName = n.scopeName, t;
}
// @__NO_SIDE_EFFECTS__
function ri(e) {
  const n = /* @__PURE__ */ _0(e), t = w.forwardRef((r, o) => {
    const { children: i, ...s } = r, a = w.Children.toArray(i), l = a.find(C0);
    if (l) {
      const c = l.props.children, u = a.map((d) => d === l ? w.Children.count(c) > 1 ? w.Children.only(null) : w.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ x(n, { ...s, ref: o, children: w.isValidElement(c) ? w.cloneElement(c, void 0, u) : null });
    }
    return /* @__PURE__ */ x(n, { ...s, ref: o, children: i });
  });
  return t.displayName = `${e}.Slot`, t;
}
// @__NO_SIDE_EFFECTS__
function _0(e) {
  const n = w.forwardRef((t, r) => {
    const { children: o, ...i } = t;
    if (w.isValidElement(o)) {
      const s = E0(o), a = k0(i, o.props);
      return o.type !== w.Fragment && (a.ref = r ? io(r, s) : s), w.cloneElement(o, a);
    }
    return w.Children.count(o) > 1 ? w.Children.only(null) : null;
  });
  return n.displayName = `${e}.SlotClone`, n;
}
var S0 = Symbol("radix.slottable");
function C0(e) {
  return w.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === S0;
}
function k0(e, n) {
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
function E0(e) {
  var r, o;
  let n = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
var N0 = [
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
], pe = N0.reduce((e, n) => {
  const t = /* @__PURE__ */ ri(`Primitive.${n}`), r = w.forwardRef((o, i) => {
    const { asChild: s, ...a } = o, l = s ? t : n;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ x(l, { ...a, ref: i });
  });
  return r.displayName = `Primitive.${n}`, { ...e, [n]: r };
}, {});
function R0(e, n) {
  e && df.flushSync(() => e.dispatchEvent(n));
}
function ll(e) {
  const n = e + "CollectionProvider", [t, r] = Ht(n), [o, i] = t(
    n,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), s = (h) => {
    const { scope: m, children: b } = h, y = de.useRef(null), v = de.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ x(o, { scope: m, itemMap: v, collectionRef: y, children: b });
  };
  s.displayName = n;
  const a = e + "CollectionSlot", l = /* @__PURE__ */ ri(a), c = de.forwardRef(
    (h, m) => {
      const { scope: b, children: y } = h, v = i(a, b), _ = ve(m, v.collectionRef);
      return /* @__PURE__ */ x(l, { ref: _, children: y });
    }
  );
  c.displayName = a;
  const u = e + "CollectionItemSlot", d = "data-radix-collection-item", f = /* @__PURE__ */ ri(u), g = de.forwardRef(
    (h, m) => {
      const { scope: b, children: y, ...v } = h, _ = de.useRef(null), S = ve(m, _), C = i(u, b);
      return de.useEffect(() => (C.itemMap.set(_, { ref: _, ...v }), () => void C.itemMap.delete(_))), /* @__PURE__ */ x(f, { [d]: "", ref: S, children: y });
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
        (C, k) => v.indexOf(C.ref.current) - v.indexOf(k.ref.current)
      );
    }, [m.collectionRef, m.itemMap]);
  }
  return [
    { Provider: s, Slot: c, ItemSlot: g },
    p,
    r
  ];
}
var Bt = globalThis != null && globalThis.document ? w.useLayoutEffect : () => {
}, A0 = w[" useId ".trim().toString()] || (() => {
}), T0 = 0;
function zi(e) {
  const [n, t] = w.useState(A0());
  return Bt(() => {
    t((r) => r ?? String(T0++));
  }, [e]), e || (n ? `radix-${n}` : "");
}
function kn(e) {
  const n = w.useRef(e);
  return w.useEffect(() => {
    n.current = e;
  }), w.useMemo(() => (...t) => {
    var r;
    return (r = n.current) == null ? void 0 : r.call(n, ...t);
  }, []);
}
var F0 = w[" useInsertionEffect ".trim().toString()] || Bt;
function zn({
  prop: e,
  defaultProp: n,
  onChange: t = () => {
  },
  caller: r
}) {
  const [o, i, s] = P0({
    defaultProp: n,
    onChange: t
  }), a = e !== void 0, l = a ? e : o;
  {
    const u = w.useRef(e !== void 0);
    w.useEffect(() => {
      const d = u.current;
      d !== a && console.warn(
        `${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), u.current = a;
    }, [a, r]);
  }
  const c = w.useCallback(
    (u) => {
      var d;
      if (a) {
        const f = I0(u) ? u(e) : u;
        f !== e && ((d = s.current) == null || d.call(s, f));
      } else
        i(u);
    },
    [a, e, i, s]
  );
  return [l, c];
}
function P0({
  defaultProp: e,
  onChange: n
}) {
  const [t, r] = w.useState(e), o = w.useRef(t), i = w.useRef(n);
  return F0(() => {
    i.current = n;
  }, [n]), w.useEffect(() => {
    var s;
    o.current !== t && ((s = i.current) == null || s.call(i, t), o.current = t);
  }, [t, o]), [t, r, i];
}
function I0(e) {
  return typeof e == "function";
}
var O0 = w.createContext(void 0);
function Bi(e) {
  const n = w.useContext(O0);
  return e || n || "ltr";
}
var _s = "rovingFocusGroup.onEntryFocus", $0 = { bubbles: !1, cancelable: !0 }, so = "RovingFocusGroup", [la, Gf, M0] = ll(so), [D0, Hf] = Ht(
  so,
  [M0]
), [L0, z0] = D0(so), Wf = w.forwardRef(
  (e, n) => /* @__PURE__ */ x(la.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ x(la.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ x(B0, { ...e, ref: n }) }) })
);
Wf.displayName = so;
var B0 = w.forwardRef((e, n) => {
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
  } = e, f = w.useRef(null), g = ve(n, f), p = Bi(i), [h, m] = zn({
    prop: s,
    defaultProp: a ?? null,
    onChange: l,
    caller: so
  }), [b, y] = w.useState(!1), v = kn(c), _ = Gf(t), S = w.useRef(!1), [C, k] = w.useState(0);
  return w.useEffect(() => {
    const N = f.current;
    if (N)
      return N.addEventListener(_s, v), () => N.removeEventListener(_s, v);
  }, [v]), /* @__PURE__ */ x(
    L0,
    {
      scope: t,
      orientation: r,
      dir: p,
      loop: o,
      currentTabStopId: h,
      onItemFocus: w.useCallback(
        (N) => m(N),
        [m]
      ),
      onItemShiftTab: w.useCallback(() => y(!0), []),
      onFocusableItemAdd: w.useCallback(
        () => k((N) => N + 1),
        []
      ),
      onFocusableItemRemove: w.useCallback(
        () => k((N) => N - 1),
        []
      ),
      children: /* @__PURE__ */ x(
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
            const E = !S.current;
            if (N.target === N.currentTarget && E && !b) {
              const R = new CustomEvent(_s, $0);
              if (N.currentTarget.dispatchEvent(R), !R.defaultPrevented) {
                const T = _().filter((H) => H.focusable), A = T.find((H) => H.active), D = T.find((H) => H.id === h), B = [A, D, ...T].filter(
                  Boolean
                ).map((H) => H.ref.current);
                Yf(B, u);
              }
            }
            S.current = !1;
          }),
          onBlur: ge(e.onBlur, () => y(!1))
        }
      )
    }
  );
}), Kf = "RovingFocusGroupItem", qf = w.forwardRef(
  (e, n) => {
    const {
      __scopeRovingFocusGroup: t,
      focusable: r = !0,
      active: o = !1,
      tabStopId: i,
      children: s,
      ...a
    } = e, l = zi(), c = i || l, u = z0(Kf, t), d = u.currentTabStopId === c, f = Gf(t), { onFocusableItemAdd: g, onFocusableItemRemove: p, currentTabStopId: h } = u;
    return w.useEffect(() => {
      if (r)
        return g(), () => p();
    }, [r, g, p]), /* @__PURE__ */ x(
      la.ItemSlot,
      {
        scope: t,
        id: c,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ x(
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
              const b = U0(m, u.orientation, u.dir);
              if (b !== void 0) {
                if (m.metaKey || m.ctrlKey || m.altKey || m.shiftKey) return;
                m.preventDefault();
                let v = f().filter((_) => _.focusable).map((_) => _.ref.current);
                if (b === "last") v.reverse();
                else if (b === "prev" || b === "next") {
                  b === "prev" && v.reverse();
                  const _ = v.indexOf(m.currentTarget);
                  v = u.loop ? G0(v, _ + 1) : v.slice(_ + 1);
                }
                setTimeout(() => Yf(v));
              }
            }),
            children: typeof s == "function" ? s({ isCurrentTabStop: d, hasTabStop: h != null }) : s
          }
        )
      }
    );
  }
);
qf.displayName = Kf;
var V0 = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function j0(e, n) {
  return n !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function U0(e, n, t) {
  const r = j0(e.key, t);
  if (!(n === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(n === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return V0[r];
}
function Yf(e, n = !1) {
  const t = document.activeElement;
  for (const r of e)
    if (r === t || (r.focus({ preventScroll: n }), document.activeElement !== t)) return;
}
function G0(e, n) {
  return e.map((t, r) => e[(n + r) % e.length]);
}
var H0 = Wf, W0 = qf;
function cl(e) {
  const [n, t] = w.useState(void 0);
  return Bt(() => {
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
function Zf(e) {
  const n = w.useRef({ value: e, previous: e });
  return w.useMemo(() => (n.current.value !== e && (n.current.previous = n.current.value, n.current.value = e), n.current.previous), [e]);
}
function K0(e, n) {
  return w.useReducer((t, r) => n[t][r] ?? t, e);
}
var ao = (e) => {
  const { present: n, children: t } = e, r = q0(n), o = typeof t == "function" ? t({ present: r.isPresent }) : w.Children.only(t), i = ve(r.ref, Y0(o));
  return typeof t == "function" || r.isPresent ? w.cloneElement(o, { ref: i }) : null;
};
ao.displayName = "Presence";
function q0(e) {
  const [n, t] = w.useState(), r = w.useRef(null), o = w.useRef(e), i = w.useRef("none"), s = e ? "mounted" : "unmounted", [a, l] = K0(s, {
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
  return w.useEffect(() => {
    const c = wo(r.current);
    i.current = a === "mounted" ? c : "none";
  }, [a]), Bt(() => {
    const c = r.current, u = o.current;
    if (u !== e) {
      const f = i.current, g = wo(c);
      e ? l("MOUNT") : g === "none" || (c == null ? void 0 : c.display) === "none" ? l("UNMOUNT") : l(u && f !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), Bt(() => {
    if (n) {
      let c;
      const u = n.ownerDocument.defaultView ?? window, d = (g) => {
        const h = wo(r.current).includes(CSS.escape(g.animationName));
        if (g.target === n && h && (l("ANIMATION_END"), !o.current)) {
          const m = n.style.animationFillMode;
          n.style.animationFillMode = "forwards", c = u.setTimeout(() => {
            n.style.animationFillMode === "forwards" && (n.style.animationFillMode = m);
          });
        }
      }, f = (g) => {
        g.target === n && (i.current = wo(r.current));
      };
      return n.addEventListener("animationstart", f), n.addEventListener("animationcancel", d), n.addEventListener("animationend", d), () => {
        u.clearTimeout(c), n.removeEventListener("animationstart", f), n.removeEventListener("animationcancel", d), n.removeEventListener("animationend", d);
      };
    } else
      l("ANIMATION_END");
  }, [n, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(a),
    ref: w.useCallback((c) => {
      r.current = c ? getComputedStyle(c) : null, t(c);
    }, [])
  };
}
function wo(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Y0(e) {
  var r, o;
  let n = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
var ul = "Radio", [Z0, Jf] = Ht(ul), [J0, X0] = Z0(ul), Xf = w.forwardRef(
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
    } = e, [d, f] = w.useState(null), g = ve(n, (m) => f(m)), p = w.useRef(!1), h = d ? c || !!d.closest("form") : !0;
    return /* @__PURE__ */ F(J0, { scope: t, checked: o, disabled: s, children: [
      /* @__PURE__ */ x(
        pe.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": ng(o),
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
      h && /* @__PURE__ */ x(
        tg,
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
Xf.displayName = ul;
var Qf = "RadioIndicator", eg = w.forwardRef(
  (e, n) => {
    const { __scopeRadio: t, forceMount: r, ...o } = e, i = X0(Qf, t);
    return /* @__PURE__ */ x(ao, { present: r || i.checked, children: /* @__PURE__ */ x(
      pe.span,
      {
        "data-state": ng(i.checked),
        "data-disabled": i.disabled ? "" : void 0,
        ...o,
        ref: n
      }
    ) });
  }
);
eg.displayName = Qf;
var Q0 = "RadioBubbleInput", tg = w.forwardRef(
  ({
    __scopeRadio: e,
    control: n,
    checked: t,
    bubbles: r = !0,
    ...o
  }, i) => {
    const s = w.useRef(null), a = ve(s, i), l = Zf(t), c = cl(n);
    return w.useEffect(() => {
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
    }, [l, t, r]), /* @__PURE__ */ x(
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
tg.displayName = Q0;
function ng(e) {
  return e ? "checked" : "unchecked";
}
var ex = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Vi = "RadioGroup", [tx] = Ht(Vi, [
  Hf,
  Jf
]), rg = Hf(), og = Jf(), [nx, rx] = tx(Vi), ig = w.forwardRef(
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
    } = e, g = rg(t), p = Bi(c), [h, m] = zn({
      prop: i,
      defaultProp: o ?? null,
      onChange: d,
      caller: Vi
    });
    return /* @__PURE__ */ x(
      nx,
      {
        scope: t,
        name: r,
        required: s,
        disabled: a,
        value: h,
        onValueChange: m,
        children: /* @__PURE__ */ x(
          H0,
          {
            asChild: !0,
            ...g,
            orientation: l,
            dir: p,
            loop: u,
            children: /* @__PURE__ */ x(
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
ig.displayName = Vi;
var sg = "RadioGroupItem", ag = w.forwardRef(
  (e, n) => {
    const { __scopeRadioGroup: t, disabled: r, ...o } = e, i = rx(sg, t), s = i.disabled || r, a = rg(t), l = og(t), c = w.useRef(null), u = ve(n, c), d = i.value === o.value, f = w.useRef(!1);
    return w.useEffect(() => {
      const g = (h) => {
        ex.includes(h.key) && (f.current = !0);
      }, p = () => f.current = !1;
      return document.addEventListener("keydown", g), document.addEventListener("keyup", p), () => {
        document.removeEventListener("keydown", g), document.removeEventListener("keyup", p);
      };
    }, []), /* @__PURE__ */ x(
      W0,
      {
        asChild: !0,
        ...a,
        focusable: !s,
        active: d,
        children: /* @__PURE__ */ x(
          Xf,
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
ag.displayName = sg;
var ox = "RadioGroupIndicator", lg = w.forwardRef(
  (e, n) => {
    const { __scopeRadioGroup: t, ...r } = e, o = og(t);
    return /* @__PURE__ */ x(eg, { ...o, ...r, ref: n });
  }
);
lg.displayName = ox;
var cg = ig, ug = ag, ix = lg;
const sx = w.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ x(cg, { className: P("grid gap-2", e), ...n, ref: t }));
sx.displayName = cg.displayName;
const ax = w.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ x(
  ug,
  {
    ref: t,
    className: P(
      "border-input text-primary ring-offset-background focus-visible:ring-ring aspect-square h-4 w-4 rounded-full border focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...n,
    children: /* @__PURE__ */ x(ix, { className: "flex items-center justify-center", children: /* @__PURE__ */ x(db, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
ax.displayName = ug.displayName;
const dg = w.createContext(void 0), lx = K(
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
), fg = w.forwardRef(
  ({ toast: e, onClose: n, variant: t, className: r, ...o }, i) => {
    const s = w.useMemo(() => {
      switch (t || e.variant) {
        case "success":
          return Hv;
        case "error":
          return Jv;
        case "warning":
          return qv;
        case "info":
          return Yv;
        default:
          return null;
      }
    }, [t, e.variant]);
    return /* @__PURE__ */ F(
      "div",
      {
        ref: i,
        role: "alert",
        "aria-live": "polite",
        "aria-atomic": "true",
        className: P(lx({ variant: t || e.variant }), r),
        ...o,
        children: [
          s && /* @__PURE__ */ x("div", { className: "mt-0.5 flex-shrink-0", children: /* @__PURE__ */ x(s, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ F("div", { className: "grid flex-1 gap-1", children: [
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
              children: /* @__PURE__ */ x($f, { className: "h-4 w-4" })
            }
          )
        ]
      }
    );
  }
);
fg.displayName = "ToastItem";
const cx = {
  "top-right": "top-0 right-0 sm:top-4 sm:right-4",
  "top-left": "top-0 left-0 sm:top-4 sm:left-4",
  "bottom-right": "bottom-0 right-0 sm:bottom-4 sm:right-4",
  "bottom-left": "bottom-0 left-0 sm:bottom-4 sm:left-4",
  "top-center": "top-0 left-1/2 -translate-x-1/2 sm:top-4",
  "bottom-center": "bottom-0 left-1/2 -translate-x-1/2 sm:bottom-4"
}, gg = w.forwardRef(
  ({ position: e = "top-right" }, n) => {
    const { toasts: t, removeToast: r } = ux(), [o, i] = w.useState(!1);
    return w.useEffect(() => {
      i(!0);
    }, []), !o || t.length === 0 ? null : /* @__PURE__ */ x(
      "div",
      {
        ref: n,
        className: P(
          "pointer-events-none fixed z-[100] flex w-full max-w-[420px] flex-col gap-2 p-4",
          cx[e]
        ),
        children: t.map((s) => /* @__PURE__ */ x(
          fg,
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
gg.displayName = "ToastContainer";
const MT = ({
  children: e,
  position: n = "top-right",
  duration: t = 5e3,
  max: r = 5
}) => {
  const [o, i] = w.useState([]), s = w.useRef(/* @__PURE__ */ new Map()), a = w.useCallback((p) => {
    const h = s.current.get(p);
    h && (clearTimeout(h), s.current.delete(p)), i((m) => m.filter((b) => b.id !== p));
  }, []), l = w.useCallback(
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
  ), c = w.useCallback(
    (p, h) => l({ ...h, description: p, variant: "success" }),
    [l]
  ), u = w.useCallback(
    (p, h) => l({ ...h, description: p, variant: "error" }),
    [l]
  ), d = w.useCallback(
    (p, h) => l({ ...h, description: p, variant: "warning" }),
    [l]
  ), f = w.useCallback(
    (p, h) => l({ ...h, description: p, variant: "info" }),
    [l]
  );
  w.useEffect(() => {
    const p = s.current;
    return () => {
      p.forEach((h) => {
        clearTimeout(h);
      }), p.clear();
    };
  }, []);
  const g = w.useMemo(
    () => ({ toasts: o, addToast: l, removeToast: a, success: c, error: u, warning: d, info: f }),
    [o, l, a, c, u, d, f]
  );
  return /* @__PURE__ */ F(dg.Provider, { value: g, children: [
    e,
    /* @__PURE__ */ x(gg, { position: n })
  ] });
}, ux = () => {
  const e = w.useContext(dg);
  if (!e)
    throw new Error("useToast must be used within a ToastProvider");
  return e;
}, dx = K(
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
), pg = K(
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
), hg = w.createContext(void 0), dl = () => {
  const e = w.useContext(hg);
  if (!e)
    throw new Error("Dropdown components must be used within a Dropdown");
  return e;
}, mg = w.createContext(
  void 0
), yg = () => {
  const e = w.useContext(mg);
  if (!e)
    throw new Error("DropdownSubmenu components must be used within a DropdownSubmenu");
  return e;
}, fx = ({
  children: e,
  open: n,
  onOpenChange: t,
  defaultOpen: r = !1
}) => {
  const [o, i] = w.useState(r), s = w.useRef(null), a = w.useRef(null), l = n !== void 0 ? n : o, c = w.useCallback(
    (u) => {
      n === void 0 && i(u), t == null || t(u);
    },
    [n, t]
  );
  return w.useEffect(() => {
    if (!l) return;
    const u = (d) => {
      var g, p;
      const f = d.target;
      !((g = s.current) != null && g.contains(f)) && !((p = a.current) != null && p.contains(f)) && c(!1);
    };
    return document.addEventListener("mousedown", u), () => {
      document.removeEventListener("mousedown", u);
    };
  }, [l, c]), w.useEffect(() => {
    if (!l) return;
    const u = (d) => {
      var f;
      d.key === "Escape" && (c(!1), (f = s.current) == null || f.focus());
    };
    return document.addEventListener("keydown", u), () => {
      document.removeEventListener("keydown", u);
    };
  }, [l, c]), /* @__PURE__ */ x(hg.Provider, { value: { open: l, setOpen: c, triggerRef: s, contentRef: a }, children: /* @__PURE__ */ x("div", { className: "relative inline-block", children: e }) });
}, gx = ({ children: e, asChild: n = !1 }) => {
  const { open: t, setOpen: r, triggerRef: o } = dl(), i = () => {
    r(!t);
  }, s = (a) => {
    a.key === "Enter" || a.key === " " ? (a.preventDefault(), r(!t)) : a.key === "ArrowDown" && !t && (a.preventDefault(), r(!0));
  };
  if (n && w.isValidElement(e)) {
    const a = e.props || {};
    return w.cloneElement(e, {
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
}, px = ({
  children: e,
  className: n,
  align: t = "start",
  side: r = "bottom"
}) => {
  const { open: o, setOpen: i, contentRef: s } = dl(), [a, l] = w.useState(-1), c = w.useCallback(() => s.current ? Array.from(
    s.current.querySelectorAll(
      '[role="menuitem"]:not([aria-disabled="true"])'
    )
  ) : [], [s]);
  return w.useEffect(() => {
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
  }, [o, i, c]), w.useEffect(() => {
    var u;
    if (o) {
      const d = c();
      d.length > 0 && ((u = d[0]) == null || u.focus(), l(0));
    } else
      l(-1);
  }, [o, c]), o ? /* @__PURE__ */ x(
    "div",
    {
      ref: s,
      role: "menu",
      "aria-orientation": "vertical",
      className: P(dx({ align: t, side: r }), n),
      children: e
    }
  ) : null;
}, hx = ({ children: e, className: n }) => /* @__PURE__ */ x(
  "div",
  {
    className: P(
      "px-2 py-1.5 text-sm font-semibold text-slate-900 dark:text-slate-100",
      n
    ),
    children: e
  }
), Ss = ({
  children: e,
  onSelect: n,
  icon: t,
  shortcut: r,
  variant: o = "default",
  disabled: i = !1,
  className: s
}) => {
  const { setOpen: a } = dl(), l = () => {
    i || (n == null || n(), a(!1));
  };
  return /* @__PURE__ */ F(
    "div",
    {
      role: "menuitem",
      tabIndex: i ? void 0 : 0,
      "aria-disabled": i ? !0 : void 0,
      onClick: l,
      onKeyDown: (u) => {
        (u.key === "Enter" || u.key === " ") && (u.preventDefault(), l());
      },
      className: P(pg({ variant: o, disabled: i }), s),
      children: [
        t && /* @__PURE__ */ x("span", { className: "shrink-0", children: t }),
        /* @__PURE__ */ x("span", { className: "flex-1", children: e }),
        r && /* @__PURE__ */ x("span", { className: "ml-auto text-xs tracking-widest text-slate-500 dark:text-slate-400", children: r })
      ]
    }
  );
}, Fc = ({ className: e }) => /* @__PURE__ */ x("div", { role: "separator", className: P("my-1 h-px bg-slate-200 dark:bg-slate-700", e) }), DT = ({ children: e }) => {
  const [n, t] = w.useState(!1);
  return /* @__PURE__ */ x(mg.Provider, { value: { open: n, setOpen: t }, children: /* @__PURE__ */ x("div", { className: "relative", children: e }) });
}, LT = ({
  children: e,
  icon: n,
  className: t
}) => {
  const { open: r, setOpen: o } = yg();
  return /* @__PURE__ */ F(
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
      className: P(pg({ variant: "default", disabled: !1 }), t),
      children: [
        n && /* @__PURE__ */ x("span", { className: "shrink-0", children: n }),
        /* @__PURE__ */ x("span", { className: "flex-1", children: e }),
        /* @__PURE__ */ x(Of, { className: "ml-auto h-3 w-3 text-slate-500 dark:text-slate-400" })
      ]
    }
  );
}, zT = ({
  children: e,
  className: n
}) => {
  const { open: t } = yg();
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
}, mx = K(
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
), yx = K(
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
function bx(e) {
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
function vx(e) {
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
const bg = w.forwardRef(
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
    const [d, f] = w.useState(!1), [g, p] = w.useState(!!r);
    w.useEffect(() => {
      r && (f(!1), p(!0));
    }, [r]);
    const h = l || bx(o), m = vx(o), b = r && !d && !a, y = !b && !a, v = a || g;
    return /* @__PURE__ */ F("div", { ref: u, className: P(mx({ size: n, shape: t }), e), ...c, children: [
      b && /* @__PURE__ */ x(
        "img",
        {
          src: r,
          alt: i || o || "Avatar",
          className: P(
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
      v && !b && /* @__PURE__ */ x("div", { className: "h-full w-full animate-pulse bg-slate-200 dark:bg-slate-700" }),
      s && !a && /* @__PURE__ */ x(
        "span",
        {
          className: P(yx({ status: s, size: n })),
          "aria-label": `Status: ${s}`
        }
      )
    ] });
  }
);
bg.displayName = "Avatar";
const Pc = K("inline-flex rounded-full flex-shrink-0", {
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
}), Ic = K("text-sm font-medium", {
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
}), xx = w.forwardRef(
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
    return u ? /* @__PURE__ */ F(
      "span",
      {
        ref: l,
        className: P("inline-flex items-center gap-2", e),
        role: "status",
        "aria-label": `Status: ${n || "online"}`,
        ...a,
        children: [
          i === "left" && /* @__PURE__ */ x("span", { className: Ic({ status: n }), children: u }),
          /* @__PURE__ */ x(
            "span",
            {
              className: Pc({ status: n, size: t, variant: c }),
              "aria-hidden": "true"
            }
          ),
          i === "right" && /* @__PURE__ */ x("span", { className: Ic({ status: n }), children: u })
        ]
      }
    ) : /* @__PURE__ */ x(
      "span",
      {
        ref: l,
        className: P(
          Pc({ status: n, size: t, variant: c }),
          e
        ),
        role: "status",
        "aria-label": `Status: ${n || "online"}`,
        ...a
      }
    );
  }
);
xx.displayName = "StatusIndicator";
const wx = K(
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
), _x = {
  default: Xo,
  info: Xo,
  success: lb,
  warning: Qo,
  error: ab
}, Sx = w.forwardRef(
  ({ className: e, variant: n, showIcon: t = !0, dismissible: r, onDismiss: o, children: i, ...s }, a) => {
    const [l, c] = w.useState(!1), u = () => {
      c(!0), o == null || o();
    };
    if (l) return null;
    const d = _x[n || "default"];
    return /* @__PURE__ */ F("div", { ref: a, role: "alert", className: P(wx({ variant: n }), e), ...s, children: [
      t && /* @__PURE__ */ x(d, { className: "h-4 w-4", "aria-hidden": "true" }),
      /* @__PURE__ */ x("div", { className: "flex-1", children: i }),
      r && /* @__PURE__ */ x(
        "button",
        {
          onClick: u,
          className: "ring-offset-background focus:ring-ring absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none",
          "aria-label": "Dismiss alert",
          children: /* @__PURE__ */ x(ol, { className: "h-4 w-4" })
        }
      )
    ] });
  }
);
Sx.displayName = "Alert";
const Cx = w.forwardRef(
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
Cx.displayName = "AlertTitle";
const kx = w.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ x("div", { ref: t, className: P("text-sm [&_p]:leading-relaxed", e), ...n }));
kx.displayName = "AlertDescription";
var Ex = Object.create, ji = Object.defineProperty, Nx = Object.defineProperties, Rx = Object.getOwnPropertyDescriptor, Ax = Object.getOwnPropertyDescriptors, vg = Object.getOwnPropertyNames, oi = Object.getOwnPropertySymbols, Tx = Object.getPrototypeOf, fl = Object.prototype.hasOwnProperty, xg = Object.prototype.propertyIsEnumerable, Oc = (e, n, t) => n in e ? ji(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, _t = (e, n) => {
  for (var t in n || (n = {}))
    fl.call(n, t) && Oc(e, t, n[t]);
  if (oi)
    for (var t of oi(n))
      xg.call(n, t) && Oc(e, t, n[t]);
  return e;
}, Ui = (e, n) => Nx(e, Ax(n)), wg = (e, n) => {
  var t = {};
  for (var r in e)
    fl.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && oi)
    for (var r of oi(e))
      n.indexOf(r) < 0 && xg.call(e, r) && (t[r] = e[r]);
  return t;
}, Fx = (e, n) => function() {
  return n || (0, e[vg(e)[0]])((n = { exports: {} }).exports, n), n.exports;
}, Px = (e, n) => {
  for (var t in n)
    ji(e, t, { get: n[t], enumerable: !0 });
}, Ix = (e, n, t, r) => {
  if (n && typeof n == "object" || typeof n == "function")
    for (let o of vg(n))
      !fl.call(e, o) && o !== t && ji(e, o, { get: () => n[o], enumerable: !(r = Rx(n, o)) || r.enumerable });
  return e;
}, Ox = (e, n, t) => (t = e != null ? Ex(Tx(e)) : {}, Ix(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !e || !e.__esModule ? ji(t, "default", { value: e, enumerable: !0 }) : t,
  e
)), $x = Fx({
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
            return b[p] = v, s.languages.DFS(s.languages, function(k, N) {
              N === C && k != p && (this[k] = v);
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
              var k = S[C], N = k.inside, E = !!k.lookbehind, R = !!k.greedy, T = k.alias;
              if (R && !k.pattern.global) {
                var A = k.pattern.toString().match(/[imsuy]*$/)[0];
                k.pattern = RegExp(k.pattern.source, A + "g");
              }
              for (var D = k.pattern || k, $ = b.next, B = y; $ !== h.tail && !(v && B >= v.reach); B += $.value.length, $ = $.next) {
                var H = $.value;
                if (h.length > p.length)
                  return;
                if (!(H instanceof a)) {
                  var U = 1, j;
                  if (R) {
                    if (j = l(D, B, p, E), !j || j.index >= p.length)
                      break;
                    var he = j.index, Y = j.index + j[0].length, te = B;
                    for (te += $.value.length; he >= te; )
                      $ = $.next, te += $.value.length;
                    if (te -= $.value.length, B = te, $.value instanceof a)
                      continue;
                    for (var ie = $; ie !== h.tail && (te < Y || typeof ie.value == "string"); ie = ie.next)
                      U++, te += ie.value.length;
                    U--, H = p.slice(B, te), j.index -= B;
                  } else if (j = l(D, 0, H, E), !j)
                    continue;
                  var he = j.index, ze = j[0], Se = H.slice(0, he), De = H.slice(he + ze.length), Ce = B + H.length;
                  v && Ce > v.reach && (v.reach = Ce);
                  var Pe = $.prev;
                  Se && (Pe = d(h, Pe, Se), B += Se.length), f(h, Pe, U);
                  var Be = new a(_, N ? s.tokenize(ze, N) : ze, T, ze);
                  if ($ = d(h, Pe, Be), De && d(h, $, De), U > 1) {
                    var Ve = {
                      cause: _ + "," + C,
                      reach: Ce
                    };
                    c(p, h, m, $.prev, B, Ve), v && Ve.reach > v.reach && (v.reach = Ve.reach);
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
}), M = Ox($x());
M.languages.markup = { comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 }, prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 }, doctype: { pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i, greedy: !0, inside: { "internal-subset": { pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/, lookbehind: !0, greedy: !0, inside: null }, string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 }, punctuation: /^<!|>$|[[\]]/, "doctype-tag": /^DOCTYPE/i, name: /[^\s<>'"]+/ } }, cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 }, tag: { pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/, greedy: !0, inside: { tag: { pattern: /^<\/?[^\s>\/]+/, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } }, "special-attr": [], "attr-value": { pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/, inside: { punctuation: [{ pattern: /^=/, alias: "attr-equals" }, { pattern: /^(\s*)["']|["']$/, lookbehind: !0 }] } }, punctuation: /\/?>/, "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } } } }, entity: [{ pattern: /&[\da-z]{1,8};/i, alias: "named-entity" }, /&#x?[\da-f]{1,8};/i] }, M.languages.markup.tag.inside["attr-value"].inside.entity = M.languages.markup.entity, M.languages.markup.doctype.inside["internal-subset"].inside = M.languages.markup, M.hooks.add("wrap", function(e) {
  e.type === "entity" && (e.attributes.title = e.content.replace(/&amp;/, "&"));
}), Object.defineProperty(M.languages.markup.tag, "addInlined", { value: function(e, r) {
  var t = {}, t = (t["language-" + r] = { pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i, lookbehind: !0, inside: M.languages[r] }, t.cdata = /^<!\[CDATA\[|\]\]>$/i, { "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: t } }), r = (t["language-" + r] = { pattern: /[\s\S]+/, inside: M.languages[r] }, {});
  r[e] = { pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
    return e;
  }), "i"), lookbehind: !0, greedy: !0, inside: t }, M.languages.insertBefore("markup", "cdata", r);
} }), Object.defineProperty(M.languages.markup.tag, "addAttribute", { value: function(e, n) {
  M.languages.markup.tag.inside["special-attr"].push({ pattern: RegExp(/(^|["'\s])/.source + "(?:" + e + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"), lookbehind: !0, inside: { "attr-name": /^[^\s=]+/, "attr-value": { pattern: /=[\s\S]+/, inside: { value: { pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/, lookbehind: !0, alias: [n, "language-" + n], inside: M.languages[n] }, punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/] } } } });
} }), M.languages.html = M.languages.markup, M.languages.mathml = M.languages.markup, M.languages.svg = M.languages.markup, M.languages.xml = M.languages.extend("markup", {}), M.languages.ssml = M.languages.xml, M.languages.atom = M.languages.xml, M.languages.rss = M.languages.xml, (function(e) {
  var n = { pattern: /\\[\\(){}[\]^$+*?|.]/, alias: "escape" }, t = /\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/, r = "(?:[^\\\\-]|" + t.source + ")", r = RegExp(r + "-" + r), o = { pattern: /(<|')[^<>']+(?=[>']$)/, lookbehind: !0, alias: "variable" };
  e.languages.regex = { "char-class": { pattern: /((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/, lookbehind: !0, inside: { "char-class-negation": { pattern: /(^\[)\^/, lookbehind: !0, alias: "operator" }, "char-class-punctuation": { pattern: /^\[|\]$/, alias: "punctuation" }, range: { pattern: r, inside: { escape: t, "range-punctuation": { pattern: /-/, alias: "operator" } } }, "special-escape": n, "char-set": { pattern: /\\[wsd]|\\p\{[^{}]+\}/i, alias: "class-name" }, escape: t } }, "special-escape": n, "char-set": { pattern: /\.|\\[wsd]|\\p\{[^{}]+\}/i, alias: "class-name" }, backreference: [{ pattern: /\\(?![123][0-7]{2})[1-9]/, alias: "keyword" }, { pattern: /\\k<[^<>']+>/, alias: "keyword", inside: { "group-name": o } }], anchor: { pattern: /[$^]|\\[ABbGZz]/, alias: "function" }, escape: t, group: [{ pattern: /\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/, alias: "punctuation", inside: { "group-name": o } }, { pattern: /\)/, alias: "punctuation" }], quantifier: { pattern: /(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/, alias: "number" }, alternation: { pattern: /\|/, alias: "keyword" } };
})(M), M.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0, greedy: !0 }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 }, "class-name": { pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i, lookbehind: !0, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/, boolean: /\b(?:false|true)\b/, function: /\b\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/, punctuation: /[{}[\];(),.:]/ }, M.languages.javascript = M.languages.extend("clike", { "class-name": [M.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/, lookbehind: !0 }], keyword: [{ pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 }, { pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: !0 }], function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, number: { pattern: RegExp(/(^|[^\w$])/.source + "(?:" + /NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source + ")" + /(?![\w$])/.source), lookbehind: !0 }, operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/ }), M.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, M.languages.insertBefore("javascript", "keyword", { regex: { pattern: RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source), lookbehind: !0, greedy: !0, inside: { "regex-source": { pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/, lookbehind: !0, alias: "language-regex", inside: M.languages.regex }, "regex-delimiter": /^\/|\/$/, "regex-flags": /^[a-z]+$/ } }, "function-variable": { pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/, lookbehind: !0, inside: M.languages.javascript }, { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i, lookbehind: !0, inside: M.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/, lookbehind: !0, inside: M.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/, lookbehind: !0, inside: M.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ }), M.languages.insertBefore("javascript", "string", { hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" }, "template-string": { pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/, greedy: !0, inside: { "template-punctuation": { pattern: /^`|`$/, alias: "string" }, interpolation: { pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/, lookbehind: !0, inside: { "interpolation-punctuation": { pattern: /^\$\{|\}$/, alias: "punctuation" }, rest: M.languages.javascript } }, string: /[\s\S]+/ } }, "string-property": { pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m, lookbehind: !0, greedy: !0, alias: "property" } }), M.languages.insertBefore("javascript", "operator", { "literal-property": { pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m, lookbehind: !0, alias: "property" } }), M.languages.markup && (M.languages.markup.tag.addInlined("script", "javascript"), M.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript")), M.languages.js = M.languages.javascript, M.languages.actionscript = M.languages.extend("javascript", { keyword: /\b(?:as|break|case|catch|class|const|default|delete|do|dynamic|each|else|extends|final|finally|for|function|get|if|implements|import|in|include|instanceof|interface|internal|is|namespace|native|new|null|override|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|use|var|void|while|with)\b/, operator: /\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/ }), M.languages.actionscript["class-name"].alias = "function", delete M.languages.actionscript.parameter, delete M.languages.actionscript["literal-property"], M.languages.markup && M.languages.insertBefore("actionscript", "string", { xml: { pattern: /(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/, lookbehind: !0, inside: M.languages.markup } }), (function(e) {
  var n = /#(?!\{).+/, t = { pattern: /#\{[^}]+\}/, alias: "variable" };
  e.languages.coffeescript = e.languages.extend("javascript", { comment: n, string: [{ pattern: /'(?:\\[\s\S]|[^\\'])*'/, greedy: !0 }, { pattern: /"(?:\\[\s\S]|[^\\"])*"/, greedy: !0, inside: { interpolation: t } }], keyword: /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/, "class-member": { pattern: /@(?!\d)\w+/, alias: "variable" } }), e.languages.insertBefore("coffeescript", "comment", { "multiline-comment": { pattern: /###[\s\S]+?###/, alias: "comment" }, "block-regex": { pattern: /\/{3}[\s\S]*?\/{3}/, alias: "regex", inside: { comment: n, interpolation: t } } }), e.languages.insertBefore("coffeescript", "string", { "inline-javascript": { pattern: /`(?:\\[\s\S]|[^\\`])*`/, inside: { delimiter: { pattern: /^`|`$/, alias: "punctuation" }, script: { pattern: /[\s\S]+/, alias: "language-javascript", inside: e.languages.javascript } } }, "multiline-string": [{ pattern: /'''[\s\S]*?'''/, greedy: !0, alias: "string" }, { pattern: /"""[\s\S]*?"""/, greedy: !0, alias: "string", inside: { interpolation: t } }] }), e.languages.insertBefore("coffeescript", "keyword", { property: /(?!\d)\w+(?=\s*:(?!:))/ }), delete e.languages.coffeescript["template-string"], e.languages.coffee = e.languages.coffeescript;
})(M), (function(e) {
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
})(M), (function(e) {
  var n = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/, n = (e.languages.css = { comment: /\/\*[\s\S]*?\*\//, atrule: { pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + n.source + ")*?" + /(?:;|(?=\s*\{))/.source), inside: { rule: /^@[\w-]+/, "selector-function-argument": { pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/, lookbehind: !0, alias: "selector" }, keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: !0 } } }, url: { pattern: RegExp("\\burl\\((?:" + n.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"), greedy: !0, inside: { function: /^url/i, punctuation: /^\(|\)$/, string: { pattern: RegExp("^" + n.source + "$"), alias: "url" } } }, selector: { pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + n.source + ")*(?=\\s*\\{)"), lookbehind: !0 }, string: { pattern: n, greedy: !0 }, property: { pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i, lookbehind: !0 }, important: /!important\b/i, function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0 }, punctuation: /[(){};:,]/ }, e.languages.css.atrule.inside.rest = e.languages.css, e.languages.markup);
  n && (n.tag.addInlined("style", "css"), n.tag.addAttribute("style", "css"));
})(M), (function(e) {
  var n = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, n = (e.languages.css.selector = { pattern: e.languages.css.selector.pattern, lookbehind: !0, inside: n = { "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/, "pseudo-class": /:[-\w]+/, class: /\.[-\w]+/, id: /#[-\w]+/, attribute: { pattern: RegExp(`\\[(?:[^[\\]"']|` + n.source + ")*\\]"), greedy: !0, inside: { punctuation: /^\[|\]$/, "case-sensitivity": { pattern: /(\s)[si]$/i, lookbehind: !0, alias: "keyword" }, namespace: { pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/, lookbehind: !0, inside: { punctuation: /\|$/ } }, "attr-name": { pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/, lookbehind: !0 }, "attr-value": [n, { pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/, lookbehind: !0 }], operator: /[|~*^$]?=/ } }, "n-th": [{ pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/, lookbehind: !0, inside: { number: /[\dn]+/, operator: /[+-]/ } }, { pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i, lookbehind: !0 }], combinator: />|\+|~|\|\|/, punctuation: /[(),]/ } }, e.languages.css.atrule.inside["selector-function-argument"].inside = n, e.languages.insertBefore("css", "property", { variable: { pattern: /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i, lookbehind: !0 } }), { pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/, lookbehind: !0 }), t = { pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/, lookbehind: !0 };
  e.languages.insertBefore("css", "function", { operator: { pattern: /(\s)[+\-*\/](?=\s)/, lookbehind: !0 }, hexcode: { pattern: /\B#[\da-f]{3,8}\b/i, alias: "color" }, color: [{ pattern: /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i, lookbehind: !0 }, { pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i, inside: { unit: n, number: t, function: /[\w-]+(?=\()/, punctuation: /[(),]/ } }], entity: /\\[\da-f]{1,8}/i, unit: n, number: t });
})(M), (function(e) {
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
})(M), (function(e) {
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
})(M), M.languages.graphql = { comment: /#.*/, description: { pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i, greedy: !0, alias: "string", inside: { "language-markdown": { pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/, lookbehind: !0, inside: M.languages.markdown } } }, string: { pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/, greedy: !0 }, number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i, boolean: /\b(?:false|true)\b/, variable: /\$[a-z_]\w*/i, directive: { pattern: /@[a-z_]\w*/i, alias: "function" }, "attr-name": { pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i, greedy: !0 }, "atom-input": { pattern: /\b[A-Z]\w*Input\b/, alias: "class-name" }, scalar: /\b(?:Boolean|Float|ID|Int|String)\b/, constant: /\b[A-Z][A-Z_\d]*\b/, "class-name": { pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/, lookbehind: !0 }, fragment: { pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/, lookbehind: !0, alias: "function" }, "definition-mutation": { pattern: /(\bmutation\s+)[a-zA-Z_]\w*/, lookbehind: !0, alias: "function" }, "definition-query": { pattern: /(\bquery\s+)[a-zA-Z_]\w*/, lookbehind: !0, alias: "function" }, keyword: /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/, operator: /[!=|&]|\.{3}/, "property-query": /\w+(?=\s*\()/, object: /\w+(?=\s*\{)/, punctuation: /[!(){}\[\]:=,]/, property: /\w+/ }, M.hooks.add("after-tokenize", function(e) {
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
}), M.languages.sql = { comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/, lookbehind: !0 }, variable: [{ pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/, greedy: !0 }, /@[\w.$]+/], string: { pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/, greedy: !0, lookbehind: !0 }, identifier: { pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/, greedy: !0, lookbehind: !0, inside: { punctuation: /^`|`$/ } }, function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i, keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i, boolean: /\b(?:FALSE|NULL|TRUE)\b/i, number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i, operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i, punctuation: /[;[\]()`,.]/ }, (function(e) {
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
        var S, C, k, N, E, R, T, A = v[_];
        typeof A == "string" || typeof A.content == "string" ? (S = b[p], (T = (R = typeof A == "string" ? A : A.content).indexOf(S)) !== -1 && (++p, C = R.substring(0, T), E = h[S], k = void 0, (N = {})["interpolation-punctuation"] = o, (N = e.tokenize(E, N)).length === 3 && ((k = [1, 1]).push.apply(k, a(N[1], e.languages.javascript, "javascript")), N.splice.apply(N, k)), k = new e.Token("interpolation", N, r.alias, E), N = R.substring(T + S.length), E = [], C && E.push(C), E.push(k), N && (y(R = [N]), E.push.apply(E, R)), typeof A == "string" ? (v.splice.apply(v, [_, 1].concat(E)), _ += E.length - 1) : A.content = E)) : (T = A.content, Array.isArray(T) ? y(T) : y([T]));
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
})(M), (function(e) {
  e.languages.typescript = e.languages.extend("javascript", { "class-name": { pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/, lookbehind: !0, greedy: !0, inside: null }, builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/ }), e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/), delete e.languages.typescript.parameter, delete e.languages.typescript["literal-property"];
  var n = e.languages.extend("typescript", {});
  delete n["class-name"], e.languages.typescript["class-name"].inside = n, e.languages.insertBefore("typescript", "function", { decorator: { pattern: /@[$\w\xA0-\uFFFF]+/, inside: { at: { pattern: /^@/, alias: "operator" }, function: /^[\s\S]+/ } }, "generic-function": { pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/, greedy: !0, inside: { function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/, generic: { pattern: /<[\s\S]+/, alias: "class-name", inside: n } } } }), e.languages.ts = e.languages.typescript;
})(M), (function(e) {
  var n = e.languages.javascript, t = /\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})+\}/.source, r = "(@(?:arg|argument|param|property)\\s+(?:" + t + "\\s+)?)";
  e.languages.jsdoc = e.languages.extend("javadoclike", { parameter: { pattern: RegExp(r + /(?:(?!\s)[$\w\xA0-\uFFFF.])+(?=\s|$)/.source), lookbehind: !0, inside: { punctuation: /\./ } } }), e.languages.insertBefore("jsdoc", "keyword", { "optional-parameter": { pattern: RegExp(r + /\[(?:(?!\s)[$\w\xA0-\uFFFF.])+(?:=[^[\]]+)?\](?=\s|$)/.source), lookbehind: !0, inside: { parameter: { pattern: /(^\[)[$\w\xA0-\uFFFF\.]+/, lookbehind: !0, inside: { punctuation: /\./ } }, code: { pattern: /(=)[\s\S]*(?=\]$)/, lookbehind: !0, inside: n, alias: "language-javascript" }, punctuation: /[=[\]]/ } }, "class-name": [{ pattern: RegExp(/(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\s+(?:<TYPE>\s+)?)[A-Z]\w*(?:\.[A-Z]\w*)*/.source.replace(/<TYPE>/g, function() {
    return t;
  })), lookbehind: !0, inside: { punctuation: /\./ } }, { pattern: RegExp("(@[a-z]+\\s+)" + t), lookbehind: !0, inside: { string: n.string, number: n.number, boolean: n.boolean, keyword: e.languages.typescript.keyword, operator: /=>|\.\.\.|[&|?:*]/, punctuation: /[.,;=<>{}()[\]]/ } }], example: { pattern: /(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/, lookbehind: !0, inside: { code: { pattern: /^([\t ]*(?:\*\s*)?)\S.*$/m, lookbehind: !0, inside: n, alias: "language-javascript" } } } }), e.languages.javadoclike.addSupport("javascript", e.languages.jsdoc);
})(M), (function(e) {
  e.languages.flow = e.languages.extend("javascript", {}), e.languages.insertBefore("flow", "keyword", { type: [{ pattern: /\b(?:[Bb]oolean|Function|[Nn]umber|[Ss]tring|[Ss]ymbol|any|mixed|null|void)\b/, alias: "class-name" }] }), e.languages.flow["function-variable"].pattern = /(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/i, delete e.languages.flow.parameter, e.languages.insertBefore("flow", "operator", { "flow-punctuation": { pattern: /\{\||\|\}/, alias: "punctuation" } }), Array.isArray(e.languages.flow.keyword) || (e.languages.flow.keyword = [e.languages.flow.keyword]), e.languages.flow.keyword.unshift({ pattern: /(^|[^$]\b)(?:Class|declare|opaque|type)\b(?!\$)/, lookbehind: !0 }, { pattern: /(^|[^$]\B)\$(?:Diff|Enum|Exact|Keys|ObjMap|PropertyType|Record|Shape|Subtype|Supertype|await)\b(?!\$)/, lookbehind: !0 });
})(M), M.languages.n4js = M.languages.extend("javascript", { keyword: /\b(?:Array|any|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/ }), M.languages.insertBefore("n4js", "constant", { annotation: { pattern: /@+\w+/, alias: "operator" } }), M.languages.n4jsd = M.languages.n4js, (function(e) {
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
})(M), (function(e) {
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
})(M), (function(e) {
  var n = e.util.clone(e.languages.typescript), n = (e.languages.tsx = e.languages.extend("jsx", n), delete e.languages.tsx.parameter, delete e.languages.tsx["literal-property"], e.languages.tsx.tag);
  n.pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + "(?:" + n.pattern.source + ")", n.pattern.flags), n.lookbehind = !0;
})(M), M.languages.swift = { comment: { pattern: /(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/, lookbehind: !0, greedy: !0 }, "string-literal": [{ pattern: RegExp(/(^|[^"#])/.source + "(?:" + /"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/.source + "|" + /"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/.source + ")" + /(?!["#])/.source), lookbehind: !0, greedy: !0, inside: { interpolation: { pattern: /(\\\()(?:[^()]|\([^()]*\))*(?=\))/, lookbehind: !0, inside: null }, "interpolation-punctuation": { pattern: /^\)|\\\($/, alias: "punctuation" }, punctuation: /\\(?=[\r\n])/, string: /[\s\S]+/ } }, { pattern: RegExp(/(^|[^"#])(#+)/.source + "(?:" + /"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/.source + "|" + /"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/.source + ")\\2"), lookbehind: !0, greedy: !0, inside: { interpolation: { pattern: /(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/, lookbehind: !0, inside: null }, "interpolation-punctuation": { pattern: /^\)|\\#+\($/, alias: "punctuation" }, string: /[\s\S]+/ } }], directive: { pattern: RegExp(/#/.source + "(?:" + /(?:elseif|if)\b/.source + "(?:[ 	]*" + /(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/.source + ")+|" + /(?:else|endif)\b/.source + ")"), alias: "property", inside: { "directive-name": /^#\w+/, boolean: /\b(?:false|true)\b/, number: /\b\d+(?:\.\d+)*\b/, operator: /!|&&|\|\||[<>]=?/, punctuation: /[(),]/ } }, literal: { pattern: /#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/, alias: "constant" }, "other-directive": { pattern: /#\w+\b/, alias: "property" }, attribute: { pattern: /@\w+/, alias: "atrule" }, "function-definition": { pattern: /(\bfunc\s+)\w+/, lookbehind: !0, alias: "function" }, label: { pattern: /\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/, lookbehind: !0, alias: "important" }, keyword: /\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/, boolean: /\b(?:false|true)\b/, nil: { pattern: /\bnil\b/, alias: "constant" }, "short-argument": /\$\d+\b/, omit: { pattern: /\b_\b/, alias: "keyword" }, number: /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i, "class-name": /\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/, function: /\b[a-z_]\w*(?=\s*\()/i, constant: /\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/, operator: /[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/, punctuation: /[{}[\]();,.:\\]/ }, M.languages.swift["string-literal"].forEach(function(e) {
  e.inside.interpolation.inside = M.languages.swift;
}), (function(e) {
  e.languages.kotlin = e.languages.extend("clike", { keyword: { pattern: /(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/, lookbehind: !0 }, function: [{ pattern: /(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/, greedy: !0 }, { pattern: /(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/, lookbehind: !0, greedy: !0 }], number: /\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/, operator: /\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/ }), delete e.languages.kotlin["class-name"];
  var n = { "interpolation-punctuation": { pattern: /^\$\{?|\}$/, alias: "punctuation" }, expression: { pattern: /[\s\S]+/, inside: e.languages.kotlin } };
  e.languages.insertBefore("kotlin", "string", { "string-literal": [{ pattern: /"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/, alias: "multiline", inside: { interpolation: { pattern: /\$(?:[a-z_]\w*|\{[^{}]*\})/i, inside: n }, string: /[\s\S]+/ } }, { pattern: /"(?:[^"\\\r\n$]|\\.|\$(?:(?!\{)|\{[^{}]*\}))*"/, alias: "singleline", inside: { interpolation: { pattern: /((?:^|[^\\])(?:\\{2})*)\$(?:[a-z_]\w*|\{[^{}]*\})/i, lookbehind: !0, inside: n }, string: /[\s\S]+/ } }], char: { pattern: /'(?:[^'\\\r\n]|\\(?:.|u[a-fA-F0-9]{0,4}))'/, greedy: !0 } }), delete e.languages.kotlin.string, e.languages.insertBefore("kotlin", "keyword", { annotation: { pattern: /\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/, alias: "builtin" } }), e.languages.insertBefore("kotlin", "function", { label: { pattern: /\b\w+@|@\w+\b/, alias: "symbol" } }), e.languages.kt = e.languages.kotlin, e.languages.kts = e.languages.kotlin;
})(M), M.languages.c = M.languages.extend("clike", { comment: { pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 }, string: { pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/, greedy: !0 }, "class-name": { pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/, lookbehind: !0 }, keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/, function: /\b[a-z_]\w*(?=\s*\()/i, number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i, operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/ }), M.languages.insertBefore("c", "string", { char: { pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/, greedy: !0 } }), M.languages.insertBefore("c", "string", { macro: { pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im, lookbehind: !0, greedy: !0, alias: "property", inside: { string: [{ pattern: /^(#\s*include\s*)<[^>]+>/, lookbehind: !0 }, M.languages.c.string], char: M.languages.c.char, comment: M.languages.c.comment, "macro-name": [{ pattern: /(^#\s*define\s+)\w+\b(?!\()/i, lookbehind: !0 }, { pattern: /(^#\s*define\s+)\w+\b(?=\()/i, lookbehind: !0, alias: "function" }], directive: { pattern: /^(#\s*)[a-z]+/, lookbehind: !0, alias: "keyword" }, "directive-hash": /^#/, punctuation: /##|\\(?=[\r\n])/, expression: { pattern: /\S[\s\S]*/, inside: M.languages.c } } } }), M.languages.insertBefore("c", "function", { constant: /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/ }), delete M.languages.c.boolean, M.languages.objectivec = M.languages.extend("c", { string: { pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/, greedy: !0 }, keyword: /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/, operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/ }), delete M.languages.objectivec["class-name"], M.languages.objc = M.languages.objectivec, M.languages.reason = M.languages.extend("clike", { string: { pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/, greedy: !0 }, "class-name": /\b[A-Z]\w*/, keyword: /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/, operator: /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/ }), M.languages.insertBefore("reason", "class-name", { char: { pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/, greedy: !0 }, constructor: /\b[A-Z]\w*\b(?!\s*\.)/, label: { pattern: /\b[a-z]\w*(?=::)/, alias: "symbol" } }), delete M.languages.reason.function, (function(e) {
  for (var n = /\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source, t = 0; t < 2; t++)
    n = n.replace(/<self>/g, function() {
      return n;
    });
  n = n.replace(/<self>/g, function() {
    return /[^\s\S]/.source;
  }), e.languages.rust = { comment: [{ pattern: RegExp(/(^|[^\\])/.source + n), lookbehind: !0, greedy: !0 }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }], string: { pattern: /b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/, greedy: !0 }, char: { pattern: /b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/, greedy: !0 }, attribute: { pattern: /#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/, greedy: !0, alias: "attr-name", inside: { string: null } }, "closure-params": { pattern: /([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/, lookbehind: !0, greedy: !0, inside: { "closure-punctuation": { pattern: /^\||\|$/, alias: "punctuation" }, rest: null } }, "lifetime-annotation": { pattern: /'\w+/, alias: "symbol" }, "fragment-specifier": { pattern: /(\$\w+:)[a-z]+/, lookbehind: !0, alias: "punctuation" }, variable: /\$\w+/, "function-definition": { pattern: /(\bfn\s+)\w+/, lookbehind: !0, alias: "function" }, "type-definition": { pattern: /(\b(?:enum|struct|trait|type|union)\s+)\w+/, lookbehind: !0, alias: "class-name" }, "module-declaration": [{ pattern: /(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/, lookbehind: !0, alias: "namespace" }, { pattern: /(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/, lookbehind: !0, alias: "namespace", inside: { punctuation: /::/ } }], keyword: [/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/, /\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/], function: /\b[a-z_]\w*(?=\s*(?:::\s*<|\())/, macro: { pattern: /\b\w+!/, alias: "property" }, constant: /\b[A-Z_][A-Z_\d]+\b/, "class-name": /\b[A-Z]\w*\b/, namespace: { pattern: /(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/, inside: { punctuation: /::/ } }, number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/, boolean: /\b(?:false|true)\b/, punctuation: /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/, operator: /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/ }, e.languages.rust["closure-params"].inside.rest = e.languages.rust, e.languages.rust.attribute.inside.string = e.languages.rust.string;
})(M), M.languages.go = M.languages.extend("clike", { string: { pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/, lookbehind: !0, greedy: !0 }, keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/, boolean: /\b(?:_|false|iota|nil|true)\b/, number: [/\b0(?:b[01_]+|o[0-7_]+)i?\b/i, /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i, /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i], operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./, builtin: /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/ }), M.languages.insertBefore("go", "string", { char: { pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/, greedy: !0 } }), delete M.languages.go["class-name"], (function(e) {
  var n = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/, t = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function() {
    return n.source;
  });
  e.languages.cpp = e.languages.extend("c", { "class-name": [{ pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, function() {
    return n.source;
  })), lookbehind: !0 }, /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/, /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i, /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/], keyword: n, number: { pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i, greedy: !0 }, operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/, boolean: /\b(?:false|true)\b/ }), e.languages.insertBefore("cpp", "string", { module: { pattern: RegExp(/(\b(?:import|module)\s+)/.source + "(?:" + /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source + "|" + /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, function() {
    return t;
  }) + ")"), lookbehind: !0, greedy: !0, inside: { string: /^[<"][\s\S]+/, operator: /:/, punctuation: /\./ } }, "raw-string": { pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/, alias: "string", greedy: !0 } }), e.languages.insertBefore("cpp", "keyword", { "generic-function": { pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i, inside: { function: /^\w+/, generic: { pattern: /<[\s\S]+/, alias: "class-name", inside: e.languages.cpp } } } }), e.languages.insertBefore("cpp", "operator", { "double-colon": { pattern: /::/, alias: "punctuation" } }), e.languages.insertBefore("cpp", "class-name", { "base-clause": { pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/, lookbehind: !0, greedy: !0, inside: e.languages.extend("cpp", {}) } }), e.languages.insertBefore("inside", "double-colon", { "class-name": /\b[a-z_]\w*\b(?!\s*::)/i }, e.languages.cpp["base-clause"]);
})(M), M.languages.python = { comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0, greedy: !0 }, "string-interpolation": { pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i, greedy: !0, inside: { interpolation: { pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/, lookbehind: !0, inside: { "format-spec": { pattern: /(:)[^:(){}]+(?=\}$)/, lookbehind: !0 }, "conversion-option": { pattern: /![sra](?=[:}]$)/, alias: "punctuation" }, rest: null } }, string: /[\s\S]+/ } }, "triple-quoted-string": { pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i, greedy: !0, alias: "string" }, string: { pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i, greedy: !0 }, function: { pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g, lookbehind: !0 }, "class-name": { pattern: /(\bclass\s+)\w+/i, lookbehind: !0 }, decorator: { pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m, lookbehind: !0, alias: ["annotation", "punctuation"], inside: { punctuation: /\./ } }, keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/, builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/, boolean: /\b(?:False|None|True)\b/, number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i, operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/, punctuation: /[{}[\];(),.:]/ }, M.languages.python["string-interpolation"].inside.interpolation.inside.rest = M.languages.python, M.languages.py = M.languages.python, M.languages.json = { property: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, lookbehind: !0, greedy: !0 }, string: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, lookbehind: !0, greedy: !0 }, comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 }, number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i, punctuation: /[{}[\],]/, operator: /:/, boolean: /\b(?:false|true)\b/, null: { pattern: /\bnull\b/, alias: "keyword" } }, M.languages.webmanifest = M.languages.json;
var _g = {};
Px(_g, {
  dracula: () => Dx,
  duotoneDark: () => zx,
  duotoneLight: () => Vx,
  github: () => Ux,
  gruvboxMaterialDark: () => bw,
  gruvboxMaterialLight: () => xw,
  jettwaveDark: () => uw,
  jettwaveLight: () => fw,
  nightOwl: () => Hx,
  nightOwlLight: () => Kx,
  oceanicNext: () => Yx,
  okaidia: () => Jx,
  oneDark: () => pw,
  oneLight: () => mw,
  palenight: () => Qx,
  shadesOfPurple: () => tw,
  synthwave84: () => rw,
  ultramin: () => iw,
  vsDark: () => Sg,
  vsLight: () => lw
});
var Mx = {
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
}, Dx = Mx, Lx = {
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
}, zx = Lx, Bx = {
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
}, Vx = Bx, jx = {
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
}, Ux = jx, Gx = {
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
}, Hx = Gx, Wx = {
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
}, Kx = Wx, He = {
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
}, qx = {
  plain: {
    backgroundColor: "#282c34",
    color: "#ffffff"
  },
  styles: [
    {
      types: ["attr-name"],
      style: {
        color: He.keyword
      }
    },
    {
      types: ["attr-value"],
      style: {
        color: He.string
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
        color: He.comment
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
        color: He.primitive
      }
    },
    {
      types: ["boolean"],
      style: {
        color: He.boolean
      }
    },
    {
      types: ["tag"],
      style: {
        color: He.tag
      }
    },
    {
      types: ["string"],
      style: {
        color: He.string
      }
    },
    {
      types: ["punctuation"],
      style: {
        color: He.string
      }
    },
    {
      types: ["selector", "char", "builtin", "inserted"],
      style: {
        color: He.char
      }
    },
    {
      types: ["function"],
      style: {
        color: He.function
      }
    },
    {
      types: ["operator", "entity", "url", "variable"],
      style: {
        color: He.variable
      }
    },
    {
      types: ["keyword"],
      style: {
        color: He.keyword
      }
    },
    {
      types: ["atrule", "class-name"],
      style: {
        color: He.className
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
}, Yx = qx, Zx = {
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
}, Jx = Zx, Xx = {
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
}, Qx = Xx, ew = {
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
}, tw = ew, nw = {
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
}, rw = nw, ow = {
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
}, iw = ow, sw = {
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
}, Sg = sw, aw = {
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
}, lw = aw, cw = {
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
}, uw = cw, dw = {
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
}, fw = dw, gw = {
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
}, pw = gw, hw = {
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
}, mw = hw, yw = {
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
}, bw = yw, vw = {
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
}, xw = vw, ww = (e) => fr(
  (n) => {
    var t = n, { className: r, style: o, line: i } = t, s = wg(t, ["className", "style", "line"]);
    const a = Ui(_t({}, s), {
      className: $i("token-line", r)
    });
    return typeof e == "object" && "plain" in e && (a.style = e.plain), typeof o == "object" && (a.style = _t(_t({}, a.style || {}), o)), a;
  },
  [e]
), _w = (e) => {
  const n = fr(
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
  return fr(
    (t) => {
      var r = t, { token: o, className: i, style: s } = r, a = wg(r, ["token", "className", "style"]);
      const l = Ui(_t({}, a), {
        className: $i("token", ...o.types, i),
        children: o.content,
        style: n(o)
      });
      return s != null && (l.style = _t(_t({}, l.style || {}), s)), l;
    },
    [n]
  );
}, Sw = /\r\n|\r|\n/, $c = (e) => {
  e.length === 0 ? e.push({
    types: ["plain"],
    content: `
`,
    empty: !0
  }) : e.length === 1 && e[0].content === "" && (e[0].content = `
`, e[0].empty = !0);
}, Mc = (e, n) => {
  const t = e.length;
  return t > 0 && e[t - 1] === n ? e : e.concat(n);
}, Cw = (e) => {
  const n = [[]], t = [e], r = [0], o = [e.length];
  let i = 0, s = 0, a = [];
  const l = [a];
  for (; s > -1; ) {
    for (; (i = r[s]++) < o[s]; ) {
      let c, u = n[s];
      const f = t[s][i];
      if (typeof f == "string" ? (u = s > 0 ? u : ["plain"], c = f) : (u = Mc(u, f.type), f.alias && (u = Mc(u, f.alias)), c = f.content), typeof c != "string") {
        s++, n.push(u), t.push(c), r.push(0), o.push(c.length);
        continue;
      }
      const g = c.split(Sw), p = g.length;
      a.push({
        types: u,
        content: g[0]
      });
      for (let h = 1; h < p; h++)
        $c(a), l.push(a = []), a.push({
          types: u,
          content: g[h]
        });
    }
    s--, n.pop(), t.pop(), r.pop(), o.pop();
  }
  return $c(a), l;
}, Dc = Cw, kw = ({ prism: e, code: n, grammar: t, language: r }) => xr(() => {
  if (t == null)
    return Dc([n]);
  const o = {
    code: n,
    grammar: t,
    language: r,
    tokens: []
  };
  return e.hooks.run("before-tokenize", o), o.tokens = e.tokenize(n, t), e.hooks.run("after-tokenize", o), Dc(o.tokens);
}, [
  n,
  t,
  r,
  // prism is a stable import
  e
]), Ew = (e, n) => {
  const { plain: t } = e, r = e.styles.reduce((o, i) => {
    const { languages: s, style: a } = i;
    return s && !s.includes(n) || i.types.forEach((l) => {
      const c = _t(_t({}, o[l]), a);
      o[l] = c;
    }), o;
  }, {});
  return r.root = t, r.plain = Ui(_t({}, t), { backgroundColor: void 0 }), r;
}, Nw = Ew, Rw = ({
  children: e,
  language: n,
  code: t,
  theme: r,
  prism: o
}) => {
  const i = n.toLowerCase(), s = Nw(r, i), a = ww(s), l = _w(s), c = o.languages[i], u = kw({ prism: o, language: i, code: t, grammar: c });
  return e({
    tokens: u,
    className: `prism-code language-${i}`,
    style: s != null ? s.root : {},
    getLineProps: a,
    getTokenProps: l
  });
}, Aw = (e) => dr(Rw, Ui(_t({}, e), {
  prism: e.prism || M,
  theme: e.theme || Sg,
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
const Tw = K(
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
), Fw = w.forwardRef(
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
    const [g, p] = w.useState(!1), [h, m] = w.useState(l), b = () => {
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
      return _.split(",").forEach((k) => {
        const N = k.trim();
        if (N.includes("-")) {
          const E = N.split("-"), R = Number(E[0]), T = Number(E[1]);
          if (!isNaN(R) && !isNaN(T))
            for (let A = R; A <= T; A++)
              S.add(A);
        } else {
          const E = Number(N);
          isNaN(E) || S.add(E);
        }
      }), S;
    })(u);
    return /* @__PURE__ */ F("div", { ref: f, className: P(Tw({ size: n }), e), ...d, children: [
      (s || a) && /* @__PURE__ */ F("div", { className: "flex items-center justify-between border-b border-slate-800 bg-slate-900/50 px-4 py-2", children: [
        /* @__PURE__ */ F("div", { className: "flex items-center gap-2", children: [
          s && /* @__PURE__ */ x("span", { className: "font-mono text-xs text-slate-400", children: s }),
          a && /* @__PURE__ */ x(
            "button",
            {
              onClick: () => {
                m(!h);
              },
              className: "ml-2 rounded p-1 text-slate-400 transition-colors hover:bg-slate-800 hover:text-slate-200",
              "aria-label": h ? "Expand code" : "Collapse code",
              children: h ? /* @__PURE__ */ x(Mi, { className: "h-4 w-4" }) : /* @__PURE__ */ x(hf, { className: "h-4 w-4" })
            }
          )
        ] }),
        i && !h && /* @__PURE__ */ x(
          "button",
          {
            onClick: b,
            className: "flex items-center gap-1.5 rounded px-2 py-1 text-xs text-slate-400 transition-colors hover:bg-slate-800 hover:text-slate-200",
            "aria-label": "Copy code to clipboard",
            children: g ? /* @__PURE__ */ F(Ge, { children: [
              /* @__PURE__ */ x(Jo, { className: "h-3.5 w-3.5" }),
              /* @__PURE__ */ x("span", { children: "Copied!" })
            ] }) : /* @__PURE__ */ F(Ge, { children: [
              /* @__PURE__ */ x(Sc, { className: "h-3.5 w-3.5" }),
              /* @__PURE__ */ x("span", { children: "Copy" })
            ] })
          }
        )
      ] }),
      !h && /* @__PURE__ */ x(
        "div",
        {
          className: "overflow-auto",
          style: c ? { maxHeight: `${c}px` } : void 0,
          children: /* @__PURE__ */ x(Aw, { theme: _g.nightOwl, code: t.trim(), language: r, children: ({ className: _, style: S, tokens: C, getLineProps: k, getTokenProps: N }) => /* @__PURE__ */ x("pre", { className: P("p-4 font-mono", _), style: S, children: C.map((E, R) => {
            const T = R + 1, A = v.has(T), D = k({ line: E });
            return /* @__PURE__ */ F(
              "div",
              {
                ...D,
                className: P(
                  D.className,
                  "table-row",
                  A && "bg-blue-500/10"
                ),
                children: [
                  o && /* @__PURE__ */ x("span", { className: "table-cell w-8 pr-4 text-right text-slate-500 select-none", children: T }),
                  /* @__PURE__ */ x("span", { className: "table-cell", children: E.map(($, B) => /* @__PURE__ */ x("span", { ...N({ token: $ }) }, B)) })
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
          onClick: b,
          className: "absolute top-2 right-2 rounded bg-slate-800/80 p-2 text-slate-400 backdrop-blur-sm transition-colors hover:bg-slate-700 hover:text-slate-200",
          "aria-label": "Copy code to clipboard",
          children: g ? /* @__PURE__ */ x(Jo, { className: "h-4 w-4" }) : /* @__PURE__ */ x(Sc, { className: "h-4 w-4" })
        }
      )
    ] });
  }
);
Fw.displayName = "CodeBlock";
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
function Jt(e, n) {
  return typeof e == "function" ? e(n) : e;
}
function Ye(e, n) {
  return (t) => {
    n.setState((r) => ({
      ...r,
      [e]: Jt(t, r[e])
    }));
  };
}
function Gi(e) {
  return e instanceof Function;
}
function Pw(e) {
  return Array.isArray(e) && e.every((n) => typeof n == "number");
}
function Iw(e, n) {
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
function Ow(e, n, t, r) {
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
function $w(e, n, t, r) {
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
function Lc(e, n, t) {
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
const Mw = {
  createTable: (e) => {
    e.getHeaderGroups = Z(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (n, t, r, o) => {
      var i, s;
      const a = (i = r == null ? void 0 : r.map((d) => t.find((f) => f.id === d)).filter(Boolean)) != null ? i : [], l = (s = o == null ? void 0 : o.map((d) => t.find((f) => f.id === d)).filter(Boolean)) != null ? s : [], c = t.filter((d) => !(r != null && r.includes(d.id)) && !(o != null && o.includes(d.id)));
      return _o(n, [...a, ...c, ...l], e);
    }, J(e.options, Ie, "getHeaderGroups")), e.getCenterHeaderGroups = Z(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (n, t, r, o) => (t = t.filter((i) => !(r != null && r.includes(i.id)) && !(o != null && o.includes(i.id))), _o(n, t, e, "center")), J(e.options, Ie, "getCenterHeaderGroups")), e.getLeftHeaderGroups = Z(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left], (n, t, r) => {
      var o;
      const i = (o = r == null ? void 0 : r.map((s) => t.find((a) => a.id === s)).filter(Boolean)) != null ? o : [];
      return _o(n, i, e, "left");
    }, J(e.options, Ie, "getLeftHeaderGroups")), e.getRightHeaderGroups = Z(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right], (n, t, r) => {
      var o;
      const i = (o = r == null ? void 0 : r.map((s) => t.find((a) => a.id === s)).filter(Boolean)) != null ? o : [];
      return _o(n, i, e, "right");
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
function _o(e, n, t, r) {
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
        const S = Lc(t, v, {
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
  }, u = n.map((f, g) => Lc(t, f, {
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
const gl = (e, n, t, r, o, i, s) => {
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
    getLeafRows: () => Iw(a.subRows, (l) => l.subRows),
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
    getAllCells: Z(() => [e.getAllLeafColumns()], (l) => l.map((c) => Ow(e, a, c, c.id)), J(e.options, "debugRows", "getAllCells")),
    _getAllCellsByColumnId: Z(() => [a.getAllCells()], (l) => l.reduce((c, u) => (c[u.column.id] = u, c), {}), J(e.options, "debugRows", "getAllCellsByColumnId"))
  };
  for (let l = 0; l < e._features.length; l++) {
    const c = e._features[l];
    c == null || c.createRow == null || c.createRow(a, e);
  }
  return a;
}, Dw = {
  createColumn: (e, n) => {
    e._getFacetedRowModel = n.options.getFacetedRowModel && n.options.getFacetedRowModel(n, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : n.getPreFilteredRowModel(), e._getFacetedUniqueValues = n.options.getFacetedUniqueValues && n.options.getFacetedUniqueValues(n, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = n.options.getFacetedMinMaxValues && n.options.getFacetedMinMaxValues(n, e.id), e.getFacetedMinMaxValues = () => {
      if (e._getFacetedMinMaxValues)
        return e._getFacetedMinMaxValues();
    };
  }
}, Cg = (e, n, t) => {
  var r, o;
  const i = t == null || (r = t.toString()) == null ? void 0 : r.toLowerCase();
  return !!(!((o = e.getValue(n)) == null || (o = o.toString()) == null || (o = o.toLowerCase()) == null) && o.includes(i));
};
Cg.autoRemove = (e) => ot(e);
const kg = (e, n, t) => {
  var r;
  return !!(!((r = e.getValue(n)) == null || (r = r.toString()) == null) && r.includes(t));
};
kg.autoRemove = (e) => ot(e);
const Eg = (e, n, t) => {
  var r;
  return ((r = e.getValue(n)) == null || (r = r.toString()) == null ? void 0 : r.toLowerCase()) === (t == null ? void 0 : t.toLowerCase());
};
Eg.autoRemove = (e) => ot(e);
const Ng = (e, n, t) => {
  var r;
  return (r = e.getValue(n)) == null ? void 0 : r.includes(t);
};
Ng.autoRemove = (e) => ot(e);
const Rg = (e, n, t) => !t.some((r) => {
  var o;
  return !((o = e.getValue(n)) != null && o.includes(r));
});
Rg.autoRemove = (e) => ot(e) || !(e != null && e.length);
const Ag = (e, n, t) => t.some((r) => {
  var o;
  return (o = e.getValue(n)) == null ? void 0 : o.includes(r);
});
Ag.autoRemove = (e) => ot(e) || !(e != null && e.length);
const Tg = (e, n, t) => e.getValue(n) === t;
Tg.autoRemove = (e) => ot(e);
const Fg = (e, n, t) => e.getValue(n) == t;
Fg.autoRemove = (e) => ot(e);
const pl = (e, n, t) => {
  let [r, o] = t;
  const i = e.getValue(n);
  return i >= r && i <= o;
};
pl.resolveFilterValue = (e) => {
  let [n, t] = e, r = typeof n != "number" ? parseFloat(n) : n, o = typeof t != "number" ? parseFloat(t) : t, i = n === null || Number.isNaN(r) ? -1 / 0 : r, s = t === null || Number.isNaN(o) ? 1 / 0 : o;
  if (i > s) {
    const a = i;
    i = s, s = a;
  }
  return [i, s];
};
pl.autoRemove = (e) => ot(e) || ot(e[0]) && ot(e[1]);
const $t = {
  includesString: Cg,
  includesStringSensitive: kg,
  equalsString: Eg,
  arrIncludes: Ng,
  arrIncludesAll: Rg,
  arrIncludesSome: Ag,
  equals: Tg,
  weakEquals: Fg,
  inNumberRange: pl
};
function ot(e) {
  return e == null || e === "";
}
const Lw = {
  getDefaultColumnDef: () => ({
    filterFn: "auto"
  }),
  getInitialState: (e) => ({
    columnFilters: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnFiltersChange: Ye("columnFilters", e),
    filterFromLeafRows: !1,
    maxLeafRowFilterDepth: 100
  }),
  createColumn: (e, n) => {
    e.getAutoFilterFn = () => {
      const t = n.getCoreRowModel().flatRows[0], r = t == null ? void 0 : t.getValue(e.id);
      return typeof r == "string" ? $t.includesString : typeof r == "number" ? $t.inNumberRange : typeof r == "boolean" || r !== null && typeof r == "object" ? $t.equals : Array.isArray(r) ? $t.arrIncludes : $t.weakEquals;
    }, e.getFilterFn = () => {
      var t, r;
      return Gi(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (
        // @ts-ignore
        (t = (r = n.options.filterFns) == null ? void 0 : r[e.columnDef.filterFn]) != null ? t : $t[e.columnDef.filterFn]
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
        const o = e.getFilterFn(), i = r == null ? void 0 : r.find((u) => u.id === e.id), s = Jt(t, i ? i.value : void 0);
        if (zc(o, s, e)) {
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
        return (i = Jt(n, o)) == null ? void 0 : i.filter((s) => {
          const a = t.find((l) => l.id === s.id);
          if (a) {
            const l = a.getFilterFn();
            if (zc(l, s.value, a))
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
function zc(e, n, t) {
  return (e && e.autoRemove ? e.autoRemove(n, t) : !1) || typeof n > "u" || typeof n == "string" && !n;
}
const zw = (e, n, t) => t.reduce((r, o) => {
  const i = o.getValue(e);
  return r + (typeof i == "number" ? i : 0);
}, 0), Bw = (e, n, t) => {
  let r;
  return t.forEach((o) => {
    const i = o.getValue(e);
    i != null && (r > i || r === void 0 && i >= i) && (r = i);
  }), r;
}, Vw = (e, n, t) => {
  let r;
  return t.forEach((o) => {
    const i = o.getValue(e);
    i != null && (r < i || r === void 0 && i >= i) && (r = i);
  }), r;
}, jw = (e, n, t) => {
  let r, o;
  return t.forEach((i) => {
    const s = i.getValue(e);
    s != null && (r === void 0 ? s >= s && (r = o = s) : (r > s && (r = s), o < s && (o = s)));
  }), [r, o];
}, Uw = (e, n) => {
  let t = 0, r = 0;
  if (n.forEach((o) => {
    let i = o.getValue(e);
    i != null && (i = +i) >= i && (++t, r += i);
  }), t) return r / t;
}, Gw = (e, n) => {
  if (!n.length)
    return;
  const t = n.map((i) => i.getValue(e));
  if (!Pw(t))
    return;
  if (t.length === 1)
    return t[0];
  const r = Math.floor(t.length / 2), o = t.sort((i, s) => i - s);
  return t.length % 2 !== 0 ? o[r] : (o[r - 1] + o[r]) / 2;
}, Hw = (e, n) => Array.from(new Set(n.map((t) => t.getValue(e))).values()), Ww = (e, n) => new Set(n.map((t) => t.getValue(e))).size, Kw = (e, n) => n.length, Cs = {
  sum: zw,
  min: Bw,
  max: Vw,
  extent: jw,
  mean: Uw,
  median: Gw,
  unique: Hw,
  uniqueCount: Ww,
  count: Kw
}, qw = {
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
    onGroupingChange: Ye("grouping", e),
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
        return Cs.sum;
      if (Object.prototype.toString.call(r) === "[object Date]")
        return Cs.extent;
    }, e.getAggregationFn = () => {
      var t, r;
      if (!e)
        throw new Error();
      return Gi(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (t = (r = n.options.aggregationFns) == null ? void 0 : r[e.columnDef.aggregationFn]) != null ? t : Cs[e.columnDef.aggregationFn];
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
function Yw(e, n, t) {
  if (!(n != null && n.length) || !t)
    return e;
  const r = e.filter((i) => !n.includes(i.id));
  return t === "remove" ? r : [...n.map((i) => e.find((s) => s.id === i)).filter(Boolean), ...r];
}
const Zw = {
  getInitialState: (e) => ({
    columnOrder: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnOrderChange: Ye("columnOrder", e)
  }),
  createColumn: (e, n) => {
    e.getIndex = Z((t) => [Hr(n, t)], (t) => t.findIndex((r) => r.id === e.id), J(n.options, "debugColumns", "getIndex")), e.getIsFirstColumn = (t) => {
      var r;
      return ((r = Hr(n, t)[0]) == null ? void 0 : r.id) === e.id;
    }, e.getIsLastColumn = (t) => {
      var r;
      const o = Hr(n, t);
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
      return Yw(i, t, r);
    }, J(e.options, "debugTable", "_getOrderColumnsFn"));
  }
}, ks = () => ({
  left: [],
  right: []
}), Jw = {
  getInitialState: (e) => ({
    columnPinning: ks(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnPinningChange: Ye("columnPinning", e)
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
      return e.setColumnPinning(n ? ks() : (t = (r = e.initialState) == null ? void 0 : r.columnPinning) != null ? t : ks());
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
function Xw(e) {
  return e || (typeof document < "u" ? document : null);
}
const So = {
  size: 150,
  minSize: 20,
  maxSize: Number.MAX_SAFE_INTEGER
}, Es = () => ({
  startOffset: null,
  startSize: null,
  deltaOffset: null,
  deltaPercentage: null,
  isResizingColumn: !1,
  columnSizingStart: []
}), Qw = {
  getDefaultColumnDef: () => So,
  getInitialState: (e) => ({
    columnSizing: {},
    columnSizingInfo: Es(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    columnResizeMode: "onEnd",
    columnResizeDirection: "ltr",
    onColumnSizingChange: Ye("columnSizing", e),
    onColumnSizingInfoChange: Ye("columnSizingInfo", e)
  }),
  createColumn: (e, n) => {
    e.getSize = () => {
      var t, r, o;
      const i = n.getState().columnSizing[e.id];
      return Math.min(Math.max((t = e.columnDef.minSize) != null ? t : So.minSize, (r = i ?? e.columnDef.size) != null ? r : So.size), (o = e.columnDef.maxSize) != null ? o : So.maxSize);
    }, e.getStart = Z((t) => [t, Hr(n, t), n.getState().columnSizing], (t, r) => r.slice(0, e.getIndex(t)).reduce((o, i) => o + i.getSize(), 0), J(n.options, "debugColumns", "getStart")), e.getAfter = Z((t) => [t, Hr(n, t), n.getState().columnSizing], (t, r) => r.slice(e.getIndex(t) + 1).reduce((o, i) => o + i.getSize(), 0), J(n.options, "debugColumns", "getAfter")), e.resetSize = () => {
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
        if (!r || !o || (i.persist == null || i.persist(), Ns(i) && i.touches && i.touches.length > 1))
          return;
        const s = e.getSize(), a = e ? e.getLeafHeaders().map((b) => [b.column.id, b.column.getSize()]) : [[r.id, r.getSize()]], l = Ns(i) ? Math.round(i.touches[0].clientX) : i.clientX, c = {}, u = (b, y) => {
          typeof y == "number" && (n.setColumnSizingInfo((v) => {
            var _, S;
            const C = n.options.columnResizeDirection === "rtl" ? -1 : 1, k = (y - ((_ = v == null ? void 0 : v.startOffset) != null ? _ : 0)) * C, N = Math.max(k / ((S = v == null ? void 0 : v.startSize) != null ? S : 0), -0.999999);
            return v.columnSizingStart.forEach((E) => {
              let [R, T] = E;
              c[R] = Math.round(Math.max(T + T * N, 0) * 100) / 100;
            }), {
              ...v,
              deltaOffset: k,
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
        }, g = Xw(t), p = {
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
        }, m = e_() ? {
          passive: !1
        } : !1;
        Ns(i) ? (g == null || g.addEventListener("touchmove", h.moveHandler, m), g == null || g.addEventListener("touchend", h.upHandler, m)) : (g == null || g.addEventListener("mousemove", p.moveHandler, m), g == null || g.addEventListener("mouseup", p.upHandler, m)), n.setColumnSizingInfo((b) => ({
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
      e.setColumnSizingInfo(n ? Es() : (t = e.initialState.columnSizingInfo) != null ? t : Es());
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
let Co = null;
function e_() {
  if (typeof Co == "boolean") return Co;
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
  return Co = e, Co;
}
function Ns(e) {
  return e.type === "touchstart";
}
const t_ = {
  getInitialState: (e) => ({
    columnVisibility: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnVisibilityChange: Ye("columnVisibility", e)
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
function Hr(e, n) {
  return n ? n === "center" ? e.getCenterVisibleLeafColumns() : n === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
}
const n_ = {
  createTable: (e) => {
    e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
      if (e._getGlobalFacetedMinMaxValues)
        return e._getGlobalFacetedMinMaxValues();
    };
  }
}, r_ = {
  getInitialState: (e) => ({
    globalFilter: void 0,
    ...e
  }),
  getDefaultOptions: (e) => ({
    onGlobalFilterChange: Ye("globalFilter", e),
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
    e.getGlobalAutoFilterFn = () => $t.includesString, e.getGlobalFilterFn = () => {
      var n, t;
      const {
        globalFilterFn: r
      } = e.options;
      return Gi(r) ? r : r === "auto" ? e.getGlobalAutoFilterFn() : (n = (t = e.options.filterFns) == null ? void 0 : t[r]) != null ? n : $t[r];
    }, e.setGlobalFilter = (n) => {
      e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(n);
    }, e.resetGlobalFilter = (n) => {
      e.setGlobalFilter(n ? void 0 : e.initialState.globalFilter);
    };
  }
}, o_ = {
  getInitialState: (e) => ({
    expanded: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onExpandedChange: Ye("expanded", e),
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
}, ca = 0, ua = 10, Rs = () => ({
  pageIndex: ca,
  pageSize: ua
}), i_ = {
  getInitialState: (e) => ({
    ...e,
    pagination: {
      ...Rs(),
      ...e == null ? void 0 : e.pagination
    }
  }),
  getDefaultOptions: (e) => ({
    onPaginationChange: Ye("pagination", e)
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
      const o = (i) => Jt(r, i);
      return e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange(o);
    }, e.resetPagination = (r) => {
      var o;
      e.setPagination(r ? Rs() : (o = e.initialState.pagination) != null ? o : Rs());
    }, e.setPageIndex = (r) => {
      e.setPagination((o) => {
        let i = Jt(r, o.pageIndex);
        const s = typeof e.options.pageCount > "u" || e.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1;
        return i = Math.max(0, Math.min(i, s)), {
          ...o,
          pageIndex: i
        };
      });
    }, e.resetPageIndex = (r) => {
      var o, i;
      e.setPageIndex(r ? ca : (o = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageIndex) != null ? o : ca);
    }, e.resetPageSize = (r) => {
      var o, i;
      e.setPageSize(r ? ua : (o = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageSize) != null ? o : ua);
    }, e.setPageSize = (r) => {
      e.setPagination((o) => {
        const i = Math.max(1, Jt(r, o.pageSize)), s = o.pageSize * o.pageIndex, a = Math.floor(s / i);
        return {
          ...o,
          pageIndex: a,
          pageSize: i
        };
      });
    }, e.setPageCount = (r) => e.setPagination((o) => {
      var i;
      let s = Jt(r, (i = e.options.pageCount) != null ? i : -1);
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
}, As = () => ({
  top: [],
  bottom: []
}), s_ = {
  getInitialState: (e) => ({
    rowPinning: As(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowPinningChange: Ye("rowPinning", e)
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
      return e.setRowPinning(n ? As() : (t = (r = e.initialState) == null ? void 0 : r.rowPinning) != null ? t : As());
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
}, a_ = {
  getInitialState: (e) => ({
    rowSelection: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowSelectionChange: Ye("rowSelection", e),
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
        da(o, i.id, r, !0, e);
      }), o;
    }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = Z(() => [e.getState().rowSelection, e.getCoreRowModel()], (n, t) => Object.keys(n).length ? Ts(e, t) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, J(e.options, "debugTable", "getSelectedRowModel")), e.getFilteredSelectedRowModel = Z(() => [e.getState().rowSelection, e.getFilteredRowModel()], (n, t) => Object.keys(n).length ? Ts(e, t) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, J(e.options, "debugTable", "getFilteredSelectedRowModel")), e.getGroupedSelectedRowModel = Z(() => [e.getState().rowSelection, e.getSortedRowModel()], (n, t) => Object.keys(n).length ? Ts(e, t) : {
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
        return da(a, e.id, t, (s = r == null ? void 0 : r.selectChildren) != null ? s : !0, n), a;
      });
    }, e.getIsSelected = () => {
      const {
        rowSelection: t
      } = n.getState();
      return hl(e, t);
    }, e.getIsSomeSelected = () => {
      const {
        rowSelection: t
      } = n.getState();
      return fa(e, t) === "some";
    }, e.getIsAllSubRowsSelected = () => {
      const {
        rowSelection: t
      } = n.getState();
      return fa(e, t) === "all";
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
}, da = (e, n, t, r, o) => {
  var i;
  const s = o.getRow(n, !0);
  t ? (s.getCanMultiSelect() || Object.keys(e).forEach((a) => delete e[a]), s.getCanSelect() && (e[n] = !0)) : delete e[n], r && (i = s.subRows) != null && i.length && s.getCanSelectSubRows() && s.subRows.forEach((a) => da(e, a.id, t, r, o));
};
function Ts(e, n) {
  const t = e.getState().rowSelection, r = [], o = {}, i = function(s, a) {
    return s.map((l) => {
      var c;
      const u = hl(l, t);
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
function hl(e, n) {
  var t;
  return (t = n[e.id]) != null ? t : !1;
}
function fa(e, n, t) {
  var r;
  if (!((r = e.subRows) != null && r.length)) return !1;
  let o = !0, i = !1;
  return e.subRows.forEach((s) => {
    if (!(i && !o) && (s.getCanSelect() && (hl(s, n) ? i = !0 : o = !1), s.subRows && s.subRows.length)) {
      const a = fa(s, n);
      a === "all" ? i = !0 : (a === "some" && (i = !0), o = !1);
    }
  }), o ? "all" : i ? "some" : !1;
}
const ga = /([0-9]+)/gm, l_ = (e, n, t) => Pg(sn(e.getValue(t)).toLowerCase(), sn(n.getValue(t)).toLowerCase()), c_ = (e, n, t) => Pg(sn(e.getValue(t)), sn(n.getValue(t))), u_ = (e, n, t) => ml(sn(e.getValue(t)).toLowerCase(), sn(n.getValue(t)).toLowerCase()), d_ = (e, n, t) => ml(sn(e.getValue(t)), sn(n.getValue(t))), f_ = (e, n, t) => {
  const r = e.getValue(t), o = n.getValue(t);
  return r > o ? 1 : r < o ? -1 : 0;
}, g_ = (e, n, t) => ml(e.getValue(t), n.getValue(t));
function ml(e, n) {
  return e === n ? 0 : e > n ? 1 : -1;
}
function sn(e) {
  return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
}
function Pg(e, n) {
  const t = e.split(ga).filter(Boolean), r = n.split(ga).filter(Boolean);
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
  alphanumeric: l_,
  alphanumericCaseSensitive: c_,
  text: u_,
  textCaseSensitive: d_,
  datetime: f_,
  basic: g_
}, p_ = {
  getInitialState: (e) => ({
    sorting: [],
    ...e
  }),
  getDefaultColumnDef: () => ({
    sortingFn: "auto",
    sortUndefined: 1
  }),
  getDefaultOptions: (e) => ({
    onSortingChange: Ye("sorting", e),
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
        if (typeof i == "string" && (r = !0, i.split(ga).length > 1))
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
      return Gi(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (t = (r = n.options.sortingFns) == null ? void 0 : r[e.columnDef.sortingFn]) != null ? t : Dr[e.columnDef.sortingFn];
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
}, h_ = [
  Mw,
  t_,
  Zw,
  Jw,
  Dw,
  Lw,
  n_,
  //depends on ColumnFaceting
  r_,
  //depends on ColumnFiltering
  p_,
  qw,
  //depends on RowSorting
  o_,
  i_,
  s_,
  a_,
  Qw
];
function m_(e) {
  var n, t;
  process.env.NODE_ENV !== "production" && (e.debugAll || e.debugTable) && console.info("Creating Table Instance...");
  const r = [...h_, ...(n = e._features) != null ? n : []];
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
      const g = Jt(f, o.options);
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
          const y = $w(o, b, m, h), v = b;
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
function y_() {
  return (e) => Z(() => [e.options.data], (n) => {
    const t = {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, r = function(o, i, s) {
      i === void 0 && (i = 0);
      const a = [];
      for (let c = 0; c < o.length; c++) {
        const u = gl(e, e._getRowId(o[c], c, s), o[c], c, i, void 0, s == null ? void 0 : s.id);
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
function b_(e) {
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
function v_(e, n, t) {
  return t.options.filterFromLeafRows ? x_(e, n, t) : w_(e, n, t);
}
function x_(e, n, t) {
  var r;
  const o = [], i = {}, s = (r = t.options.maxLeafRowFilterDepth) != null ? r : 100, a = function(l, c) {
    c === void 0 && (c = 0);
    const u = [];
    for (let f = 0; f < l.length; f++) {
      var d;
      let g = l[f];
      const p = gl(t, g.id, g.original, g.index, g.depth, void 0, g.parentId);
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
function w_(e, n, t) {
  var r;
  const o = [], i = {}, s = (r = t.options.maxLeafRowFilterDepth) != null ? r : 100, a = function(l, c) {
    c === void 0 && (c = 0);
    const u = [];
    for (let f = 0; f < l.length; f++) {
      let g = l[f];
      if (n(g)) {
        var d;
        if ((d = g.subRows) != null && d.length && c < s) {
          const h = gl(t, g.id, g.original, g.index, g.depth, void 0, g.parentId);
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
function __() {
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
    return v_(n.rows, d, e);
  }, J(e.options, "debugTable", "getFilteredRowModel", () => e._autoResetPageIndex()));
}
function S_(e) {
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
    } : d = b_({
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
function C_() {
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
function Bc(e, n) {
  return e ? k_(e) ? /* @__PURE__ */ w.createElement(e, n) : e : null;
}
function k_(e) {
  return E_(e) || typeof e == "function" || N_(e);
}
function E_(e) {
  return typeof e == "function" && (() => {
    const n = Object.getPrototypeOf(e);
    return n.prototype && n.prototype.isReactComponent;
  })();
}
function N_(e) {
  return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
}
function R_(e) {
  const n = {
    state: {},
    // Dummy state
    onStateChange: () => {
    },
    // noop
    renderFallbackValue: null,
    ...e
  }, [t] = w.useState(() => ({
    current: m_(n)
  })), [r, o] = w.useState(() => t.current.initialState);
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
function BT({
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
  const [m, b] = w.useState([]), [y, v] = w.useState([]), [_, S] = w.useState({}), [C, k] = w.useState({}), [N, E] = w.useState(""), [R, T] = w.useState({
    pageIndex: 0,
    pageSize: i
  }), A = R_({
    data: n,
    columns: e,
    getCoreRowModel: y_(),
    getSortedRowModel: C_(),
    getFilteredRowModel: __(),
    ...o && { getPaginationRowModel: S_() },
    onSortingChange: b,
    onColumnFiltersChange: v,
    onColumnVisibilityChange: S,
    onRowSelectionChange: k,
    onGlobalFilterChange: E,
    onPaginationChange: T,
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
  return w.useEffect(() => {
    if (l) {
      const $ = A.getFilteredSelectedRowModel().rows.map((B) => B.original);
      l($);
    }
  }, [C, A, l]), /* @__PURE__ */ F("div", { className: P("w-full space-y-4", d), children: [
    (t || c) && /* @__PURE__ */ F("div", { className: "flex items-center justify-between gap-4", children: [
      t && /* @__PURE__ */ x("div", { className: "max-w-sm flex-1", children: /* @__PURE__ */ x(
        Cf,
        {
          placeholder: r,
          value: N ?? "",
          onChange: ($) => {
            E($.target.value);
          },
          className: "w-full"
        }
      ) }),
      c && /* @__PURE__ */ F("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ x("span", { className: "text-muted-foreground text-sm", children: "Columns:" }),
        A.getAllLeafColumns().map(($) => $.id === "select" ? null : /* @__PURE__ */ F("label", { className: "flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ x(
            "input",
            {
              type: "checkbox",
              checked: $.getIsVisible(),
              onChange: (B) => {
                $.toggleVisibility(B.target.checked);
              },
              className: "rounded border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-slate-700"
            }
          ),
          /* @__PURE__ */ x("span", { className: "capitalize", children: $.id })
        ] }, $.id))
      ] })
    ] }),
    /* @__PURE__ */ x("div", { className: "overflow-hidden rounded-md border border-slate-200 dark:border-slate-800", children: /* @__PURE__ */ x("div", { className: P("overflow-auto", f && "max-h-[600px]"), children: /* @__PURE__ */ F("table", { className: "w-full caption-bottom text-sm", children: [
      /* @__PURE__ */ x(
        "thead",
        {
          className: P(
            "border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900",
            f && "sticky top-0 z-10"
          ),
          children: A.getHeaderGroups().map(($) => /* @__PURE__ */ x("tr", { children: $.headers.map((B) => /* @__PURE__ */ x(
            "th",
            {
              className: "h-12 px-4 text-left align-middle font-medium text-slate-700 dark:text-slate-300",
              children: B.isPlaceholder ? null : Bc(B.column.columnDef.header, B.getContext())
            },
            B.id
          )) }, $.id))
        }
      ),
      /* @__PURE__ */ x("tbody", { className: "divide-y divide-slate-200 dark:divide-slate-800", children: h ? /* @__PURE__ */ x("tr", { children: /* @__PURE__ */ x("td", { colSpan: e.length, className: "text-muted-foreground h-24 text-center", children: "Loading..." }) }) : (D = A.getRowModel().rows) != null && D.length ? A.getRowModel().rows.map(($) => /* @__PURE__ */ x(
        "tr",
        {
          "data-state": $.getIsSelected() && "selected",
          className: P(
            "border-b border-slate-200 bg-white transition-colors hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-900/50",
            $.getIsSelected() && "bg-slate-50 dark:bg-slate-900",
            p && "cursor-pointer",
            g == null ? void 0 : g($.original)
          ),
          onClick: () => p == null ? void 0 : p($.original),
          children: $.getVisibleCells().map((B) => /* @__PURE__ */ x("td", { className: "px-4 py-3 align-middle", children: Bc(B.column.columnDef.cell, B.getContext()) }, B.id))
        },
        $.id
      )) : /* @__PURE__ */ x("tr", { children: /* @__PURE__ */ x("td", { colSpan: e.length, className: "text-muted-foreground h-24 text-center", children: u }) }) })
    ] }) }) }),
    o && /* @__PURE__ */ F("div", { className: "flex items-center justify-between px-2", children: [
      /* @__PURE__ */ x("div", { className: "flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300", children: a && /* @__PURE__ */ F("div", { className: "text-muted-foreground flex-1 text-sm", children: [
        A.getFilteredSelectedRowModel().rows.length,
        " of",
        " ",
        A.getFilteredRowModel().rows.length,
        " row(s) selected."
      ] }) }),
      /* @__PURE__ */ F("div", { className: "flex items-center gap-6", children: [
        /* @__PURE__ */ F("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ x("label", { htmlFor: "rows-per-page", className: "text-sm text-slate-700 dark:text-slate-300", children: "Rows per page" }),
          /* @__PURE__ */ x(
            "select",
            {
              id: "rows-per-page",
              value: A.getState().pagination.pageSize.toString(),
              onChange: ($) => {
                A.setPageSize(Number($.target.value));
              },
              className: "h-8 w-[70px] rounded-md border border-slate-300 bg-white text-sm dark:border-slate-700 dark:bg-slate-950",
              "aria-label": "Rows per page",
              children: s.map(($) => /* @__PURE__ */ x("option", { value: $, children: $ }, $))
            }
          )
        ] }),
        /* @__PURE__ */ F("div", { className: "flex items-center gap-1 text-sm font-medium text-slate-700 dark:text-slate-300", children: [
          "Page ",
          A.getState().pagination.pageIndex + 1,
          " of ",
          A.getPageCount()
        ] }),
        /* @__PURE__ */ F("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ x(
            le,
            {
              variant: "outline",
              size: "sm",
              onClick: () => {
                A.previousPage();
              },
              disabled: !A.getCanPreviousPage(),
              children: "Previous"
            }
          ),
          /* @__PURE__ */ x(
            le,
            {
              variant: "outline",
              size: "sm",
              onClick: () => {
                A.nextPage();
              },
              disabled: !A.getCanNextPage(),
              children: "Next"
            }
          )
        ] })
      ] })
    ] })
  ] });
}
function VT(e) {
  return ({ column: n }) => /* @__PURE__ */ F(
    le,
    {
      variant: "ghost",
      onClick: () => {
        n.toggleSorting(n.getIsSorted() === "asc");
      },
      className: "-ml-4 h-8",
      children: [
        e,
        n.getIsSorted() === "asc" ? /* @__PURE__ */ x(hf, { className: "ml-2 h-4 w-4" }) : n.getIsSorted() === "desc" ? /* @__PURE__ */ x(Mi, { className: "ml-2 h-4 w-4" }) : /* @__PURE__ */ x(eb, { className: "ml-2 h-4 w-4 opacity-50" })
      ]
    }
  );
}
function jT() {
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
function UT({
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
  return /* @__PURE__ */ x(
    "div",
    {
      className: P(
        "flex items-center justify-center text-slate-500 dark:text-slate-400",
        c.container,
        i
      ),
      role: "status",
      "aria-live": "polite",
      children: /* @__PURE__ */ F("div", { className: "max-w-md text-center", children: [
        e && /* @__PURE__ */ x(
          "div",
          {
            className: P(
              "flex items-center justify-center text-slate-300 dark:text-slate-600",
              c.icon
            ),
            "aria-hidden": "true",
            children: e
          }
        ),
        /* @__PURE__ */ x("h3", { className: P("font-medium text-slate-700 dark:text-slate-300", c.title), children: n }),
        t && /* @__PURE__ */ x("p", { className: P("text-slate-600 dark:text-slate-400", c.description), children: t }),
        a && /* @__PURE__ */ x("div", { className: P(c.description), children: a }),
        (r || o) && /* @__PURE__ */ F("div", { className: P("flex items-center justify-center", c.actions), children: [
          r && /* @__PURE__ */ F(le, { onClick: r.onClick, variant: r.variant || "default", children: [
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
function GT({
  error: e,
  onRetry: n,
  variant: t = "default",
  className: r,
  compact: o = !1
}) {
  const i = e instanceof Error ? e.message : e, s = () => {
    switch (t) {
      case "network":
        return _b;
      case "auth":
        return ub;
      case "notfound":
        return Qo;
      // Or a specific not-found icon if available
      default:
        return Qo;
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
  return o ? /* @__PURE__ */ F(
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
        /* @__PURE__ */ F("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ x(c, { className: "text-destructive h-5 w-5 flex-shrink-0", "aria-hidden": "true" }),
          /* @__PURE__ */ F("div", { children: [
            /* @__PURE__ */ x("p", { className: "text-destructive-foreground text-sm font-medium", children: a() }),
            /* @__PURE__ */ x("p", { className: "text-destructive-foreground/80 mt-0.5 text-sm", children: i || l() })
          ] })
        ] }),
        n && /* @__PURE__ */ F(
          le,
          {
            variant: "ghost",
            size: "sm",
            onClick: n,
            className: "hover:bg-destructive/10 text-destructive hover:text-destructive ml-4",
            "aria-label": "Retry operation",
            children: [
              /* @__PURE__ */ x(Cc, { className: "mr-2 h-4 w-4" }),
              "Retry"
            ]
          }
        )
      ]
    }
  ) : /* @__PURE__ */ F(
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
        /* @__PURE__ */ x("div", { className: "bg-destructive/10 mb-4 flex h-16 w-16 items-center justify-center rounded-full", children: /* @__PURE__ */ x(c, { className: "text-destructive h-8 w-8", "aria-hidden": "true" }) }),
        /* @__PURE__ */ x("h3", { className: "text-foreground mb-2 text-lg font-semibold", children: a() }),
        /* @__PURE__ */ x("p", { className: "text-muted-foreground mb-4 max-w-md text-center text-sm", children: l() }),
        i && /* @__PURE__ */ x("div", { className: "bg-muted/50 border-border/50 mb-6 w-full max-w-md rounded-md border p-3", children: /* @__PURE__ */ x("p", { className: "text-muted-foreground text-center font-mono text-xs break-words", children: i }) }),
        n && /* @__PURE__ */ F(
          le,
          {
            variant: "default",
            onClick: n,
            className: "min-w-[120px]",
            "aria-label": "Retry operation",
            children: [
              /* @__PURE__ */ x(Cc, { className: "mr-2 h-4 w-4" }),
              "Try Again"
            ]
          }
        )
      ]
    }
  );
}
const A_ = K(
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
), T_ = K("flex items-center justify-center rounded-full p-2", {
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
}), F_ = K("text-2xl font-bold tracking-tight", {
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
}), P_ = K("text-sm font-medium", {
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
function HT({
  className: e,
  variant: n,
  icon: t,
  value: r,
  label: o,
  trend: i,
  ...s
}) {
  return /* @__PURE__ */ x(Af, { className: P(A_({ variant: n, className: e })), ...s, children: /* @__PURE__ */ F("div", { className: "flex items-start justify-between space-x-4 p-6", children: [
    /* @__PURE__ */ F("div", { className: "space-y-1", children: [
      /* @__PURE__ */ x("p", { className: P(F_({ variant: n })), children: r }),
      /* @__PURE__ */ x("p", { className: P(P_({ variant: n })), children: o }),
      i && /* @__PURE__ */ F("div", { className: "mt-2 flex items-center space-x-1 text-xs", children: [
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
    t && /* @__PURE__ */ x("div", { className: P(T_({ variant: n })), children: /* @__PURE__ */ x("div", { className: "h-6 w-6", children: t }) })
  ] }) });
}
const Vc = K("h-2.5 w-2.5 rounded-full", {
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
function WT({
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
  return r ? /* @__PURE__ */ F(sl, { variant: {
    online: "success",
    offline: "secondary",
    connecting: "warning",
    error: "destructive"
  }[e], className: P("gap-1.5", i), ...s, children: [
    /* @__PURE__ */ x(
      "span",
      {
        className: P(Vc({ status: e, animate: c }), "h-2 w-2"),
        "aria-hidden": "true"
      }
    ),
    o && /* @__PURE__ */ x("span", { children: l })
  ] }) : /* @__PURE__ */ F("div", { className: P("flex items-center gap-2 text-sm", i), ...s, children: [
    /* @__PURE__ */ x(
      "span",
      {
        className: P(Vc({ status: e, animate: c })),
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
function I_({
  content: e,
  children: n,
  side: t = "top",
  disabled: r = !1,
  interactive: o = !1,
  className: i
}) {
  const [s, a] = w.useState(!1), [l, c] = w.useState({ top: 0, left: 0 }), u = w.useRef(null), d = w.useRef(null), f = w.useRef(null), g = () => {
    f.current && (clearTimeout(f.current), f.current = null), a(!0);
  }, p = () => {
    o ? f.current = setTimeout(() => {
      a(!1);
    }, 100) : a(!1);
  };
  return w.useEffect(() => () => {
    f.current && clearTimeout(f.current);
  }, []), w.useLayoutEffect(() => {
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
  }, [s, t]), r ? n : /* @__PURE__ */ F(Ge, { children: [
    /* @__PURE__ */ x(
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
        onMouseEnter: o ? g : void 0,
        onMouseLeave: o ? p : void 0,
        children: e
      }
    )
  ] });
}
function O_({
  open: e,
  onOpenChange: n,
  onConfirm: t,
  title: r,
  message: o,
  confirmText: i = "Confirm",
  cancelText: s = "Cancel",
  variant: a = "danger",
  loading: l = !1
}) {
  const c = () => {
    t(), l || n(!1);
  }, d = {
    danger: {
      icon: wb,
      iconClassName: "text-destructive",
      iconBgClassName: "bg-destructive/10",
      headerGradient: "from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30",
      titleColor: "from-red-600 to-orange-600 dark:from-red-400 dark:to-orange-400",
      buttonVariant: "destructive",
      buttonClassName: "bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700"
    },
    warning: {
      icon: Qo,
      iconClassName: "text-amber-600 dark:text-amber-400",
      iconBgClassName: "bg-amber-100 dark:bg-amber-950/50",
      headerGradient: "from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/30",
      titleColor: "from-amber-600 to-yellow-600 dark:from-amber-400 dark:to-yellow-400",
      buttonVariant: "default",
      buttonClassName: "bg-yellow-600 hover:bg-yellow-700 dark:bg-yellow-600 dark:hover:bg-yellow-700"
    },
    info: {
      icon: Xo,
      iconClassName: "text-blue-600 dark:text-blue-400",
      iconBgClassName: "bg-blue-100 dark:bg-blue-950/50",
      headerGradient: "from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30",
      titleColor: "from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400",
      buttonVariant: "default",
      buttonClassName: "bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
    },
    default: {
      icon: cb,
      iconClassName: "text-purple-600 dark:text-purple-400",
      iconBgClassName: "bg-purple-100 dark:bg-purple-950/50",
      headerGradient: "from-purple-50 to-fuchsia-50 dark:from-purple-950/30 dark:to-fuchsia-950/30",
      titleColor: "from-purple-600 to-fuchsia-600 dark:from-purple-400 dark:to-fuchsia-400",
      buttonVariant: "default",
      buttonClassName: "bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700"
    }
  }[a], f = d.icon;
  return /* @__PURE__ */ x(a0, { open: e, onOpenChange: n, children: /* @__PURE__ */ F(zf, { className: "max-w-md overflow-hidden p-0", children: [
    /* @__PURE__ */ x("div", { className: P("bg-gradient-to-r px-6 py-4", d.headerGradient), children: /* @__PURE__ */ F("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ x("div", { className: P("rounded-full p-3", d.iconBgClassName), children: /* @__PURE__ */ x(f, { className: P("h-6 w-6", d.iconClassName) }) }),
      /* @__PURE__ */ x(Bf, { className: "space-y-1 p-0", children: /* @__PURE__ */ x(
        jf,
        {
          className: P(
            "bg-gradient-to-r bg-clip-text text-lg font-bold text-transparent",
            d.titleColor
          ),
          children: r
        }
      ) })
    ] }) }),
    /* @__PURE__ */ x("div", { className: "px-6 py-4", children: /* @__PURE__ */ x(Uf, { className: "text-muted-foreground text-sm leading-relaxed", children: o }) }),
    /* @__PURE__ */ F(Vf, { className: "border-border bg-muted/50 border-t px-6 py-4", children: [
      /* @__PURE__ */ x(le, { variant: "outline", onClick: () => n(!1), disabled: l, children: s }),
      /* @__PURE__ */ x(
        le,
        {
          variant: d.buttonVariant,
          onClick: c,
          disabled: l,
          className: P(d.buttonClassName, l && "cursor-not-allowed opacity-70"),
          children: l ? /* @__PURE__ */ F("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ x(Di, { className: "h-4 w-4 animate-spin" }),
            "Processing..."
          ] }) : i
        }
      )
    ] })
  ] }) });
}
function KT(e) {
  const [n, t] = w.useState(!1), r = w.useRef(null), o = w.useCallback(() => new Promise((l) => {
    r.current = l, t(!0);
  }), []), i = w.useCallback(() => {
    var l;
    t(!1), (l = r.current) == null || l.call(r, !1), r.current = null;
  }, []), s = w.useCallback(() => {
    var l;
    t(!1), (l = r.current) == null || l.call(r, !0), r.current = null;
  }, []), a = w.useCallback(
    () => /* @__PURE__ */ x(
      O_,
      {
        open: n,
        onOpenChange: i,
        onConfirm: s,
        title: e.title,
        message: e.message,
        ...e.confirmText !== void 0 && { confirmText: e.confirmText },
        ...e.cancelText !== void 0 && { cancelText: e.cancelText },
        ...e.variant !== void 0 && { variant: e.variant }
      }
    ),
    [n, i, s, e]
  );
  return { confirm: o, ConfirmDialogComponent: a };
}
const Ig = uf(null);
function $_(e, n) {
  return { getTheme: function() {
    return n ?? null;
  } };
}
function gt() {
  const e = Hy(Ig);
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
function Og(e, ...n) {
  const t = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", e);
  for (const o of n) r.append("v", o);
  t.search = r.toString(), console.warn(`Minified Lexical warning #${e}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
const pt = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, M_ = pt && "documentMode" in document ? document.documentMode : null, rt = pt && /Mac|iPod|iPhone|iPad/.test(navigator.platform), En = pt && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent), ii = !(!pt || !("InputEvent" in window) || M_) && "getTargetRanges" in new window.InputEvent("input"), lo = pt && /Version\/[\d.]+.*Safari/.test(navigator.userAgent), Sr = pt && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, D_ = pt && /Android/.test(navigator.userAgent), $g = pt && /^(?=.*Chrome).*/i.test(navigator.userAgent), jc = pt && D_ && $g, co = pt && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && rt && !$g;
function Mg(...e) {
  const n = [];
  for (const t of e) if (t && typeof t == "string") for (const [r] of t.matchAll(/\S+/g)) n.push(r);
  return n;
}
const L_ = 0, z_ = 1, B_ = 2, Dg = 128, V_ = 1, j_ = 2, U_ = 3, G_ = 4, H_ = 5, W_ = 6, Hi = lo || Sr || co ? " " : "​", an = `

`, K_ = En ? " " : Hi, Nn = { bold: 1, capitalize: 1024, code: 16, highlight: Dg, italic: 2, lowercase: 256, strikethrough: 4, subscript: 32, superscript: 64, underline: 8, uppercase: 512 }, q_ = { directionless: 1, unmergeable: 2 }, Uc = { center: 2, end: 6, justify: 4, left: 1, right: 3, start: 5 }, Y_ = { [j_]: "center", [W_]: "end", [G_]: "justify", [V_]: "left", [U_]: "right", [H_]: "start" }, Z_ = { normal: 0, segmented: 2, token: 1 }, J_ = { [L_]: "normal", [B_]: "segmented", [z_]: "token" }, Gc = "$config";
function Lg(e, n, t, r, o, i) {
  let s = e.getFirstChild();
  for (; s !== null; ) {
    const a = s.__key;
    s.__parent === n && (O(s) && Lg(s, a, t, r, o, i), t.has(a) || i.delete(a), o.push(a)), s = s.getNextSibling();
  }
}
let pa = !1, yl = 0;
function X_(e) {
  yl = e.timeStamp;
}
function Fs(e, n, t) {
  const r = e.nodeName === "BR", o = n.__lexicalLineBreak;
  return o && (e === o || r && e.previousSibling === o) || r && Qi(e, t) !== void 0;
}
function Q_(e, n, t) {
  const r = ht(tt(t));
  let o = null, i = null;
  r !== null && r.anchorNode === e && (o = r.anchorOffset, i = r.focusOffset);
  const s = e.nodeValue;
  s !== null && Ml(n, s, o, i, !1);
}
function eS(e, n, t) {
  if (L(e)) {
    const r = e.anchor.getNode();
    if (r.is(t) && e.format !== r.getFormat()) return !1;
  }
  return Kt(n) && t.isAttached();
}
function tS(e, n, t, r) {
  for (let o = e; o && !lC(o); o = ho(o)) {
    const i = Qi(o, n);
    if (i !== void 0) {
      const s = xe(i, t);
      if (s) return re(s) || !_e(o) ? void 0 : [o, s];
    } else if (o === r) return [r, Gp(t)];
  }
}
function zg(e, n, t) {
  pa = !0;
  const r = performance.now() - yl > 100;
  try {
    St(e, () => {
      const o = G() || (function(f) {
        return f.getEditorState().read(() => {
          const g = G();
          return g !== null ? g.clone() : null;
        });
      })(e), i = /* @__PURE__ */ new Map(), s = e.getRootElement(), a = e._editorState, l = e._blockCursorElement;
      let c = !1, u = "";
      for (let f = 0; f < n.length; f++) {
        const g = n[f], p = g.type, h = g.target, m = tS(h, e, a, s);
        if (!m) continue;
        const [b, y] = m;
        if (p === "characterData") r && V(y) && Kt(h) && eS(o, h, y) && Q_(h, y, e);
        else if (p === "childList") {
          c = !0;
          const v = g.addedNodes;
          for (let C = 0; C < v.length; C++) {
            const k = v[C], N = jp(k), E = k.parentNode;
            if (E != null && k !== l && N === null && !Fs(k, E, e)) {
              if (En) {
                const R = (_e(k) ? k.innerText : null) || k.nodeValue;
                R && (u += R);
              }
              E.removeChild(k);
            }
          }
          const _ = g.removedNodes, S = _.length;
          if (S > 0) {
            let C = 0;
            for (let k = 0; k < S; k++) {
              const N = _[k];
              (Fs(N, h, e) || l === N) && (h.appendChild(N), C++);
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
            y == null || b.nodeName !== "BR" || Fs(b, h, e) || y.removeChild(b);
          }
        }
        t.takeRecords();
      }
      o !== null && (c && Fe(o), En && qp(e) && o.insertRawText(u));
    });
  } finally {
    pa = !1;
  }
}
function Bg(e) {
  const n = e._observer;
  n !== null && zg(e, n.takeRecords(), n);
}
function Vg(e) {
  (function(n) {
    yl === 0 && tt(n).addEventListener("textInput", X_, !0);
  })(e), e._observer = new MutationObserver((n, t) => {
    zg(e, n, t);
  });
}
let nS = class {
  constructor(n, t) {
    I(this, "key");
    I(this, "parse");
    I(this, "unparse");
    I(this, "isEqual");
    I(this, "defaultValue");
    this.key = n, this.parse = t.parse.bind(t), this.unparse = (t.unparse || sS).bind(t), this.isEqual = (t.isEqual || Object.is).bind(t), this.defaultValue = this.parse(void 0);
  }
};
function rS(e, n) {
  return new nS(e, n);
}
function jg(e, n, t = "latest") {
  const r = (t === "latest" ? e.getLatest() : e).__state;
  return r ? r.getValue(n) : n.defaultValue;
}
function Ps(e, n, t) {
  let r;
  if (Ee(), typeof t == "function") {
    const i = e.getLatest(), s = jg(i, n);
    if (r = t(s), n.isEqual(s, r)) return i;
  } else r = t;
  const o = e.getWritable();
  return Gg(o).updateFromKnown(n, r), o;
}
function oS(e) {
  const n = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Set();
  for (let r = typeof e == "function" ? e : e.replace; r.prototype && r.prototype.getType !== void 0; r = Object.getPrototypeOf(r)) {
    const { ownNodeConfig: o } = ns(r);
    if (o && o.stateConfigs) for (const i of o.stateConfigs) {
      let s;
      "stateConfig" in i ? (s = i.stateConfig, i.flat && t.add(s.key)) : s = i, n.set(s.key, s);
    }
  }
  return { flatKeys: t, sharedConfigMap: n };
}
let iS = class Ug {
  constructor(n, t, r = void 0, o = /* @__PURE__ */ new Map(), i = void 0) {
    I(this, "node");
    I(this, "knownState");
    I(this, "unknownState");
    I(this, "sharedNodeState");
    I(this, "size");
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
    return Hc(n) && (t.$ = n), t;
  }
  getWritable(n) {
    if (this.node === n) return this;
    const { sharedNodeState: t, unknownState: r } = this, o = new Map(this.knownState);
    return new Ug(n, t, (function(i, s, a) {
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
    o.has(n) || i && r in i || (i && (delete i[r], this.unknownState = Hc(i)), this.size++), o.set(n, t);
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
function Gg(e) {
  const n = e.getWritable(), t = n.__state ? n.__state.getWritable(n) : new iS(n, Hg(n));
  return n.__state = t, t;
}
function Hg(e) {
  return e.__state ? e.__state.sharedNodeState : Dp(ts(), e.getType()).sharedNodeState;
}
function Hc(e) {
  if (e) for (const n in e) return e;
}
function sS(e) {
  return e;
}
function Wc(e, n, t) {
  for (const [r, o] of n.knownState) {
    if (e.has(r.key)) continue;
    e.add(r.key);
    const i = t ? t.getValue(r) : r.defaultValue;
    if (i !== o && !r.isEqual(i, o)) return !0;
  }
  return !1;
}
function Kc(e, n, t) {
  const { unknownState: r } = n, o = t ? t.unknownState : void 0;
  if (r) {
    for (const [i, s] of Object.entries(r))
      if (!e.has(i) && (e.add(i), s !== (o ? o[i] : void 0)))
        return !0;
  }
  return !1;
}
function qc(e, n) {
  const t = e.__state;
  return t && t.node === e ? t.getWritable(n) : t;
}
function Yc(e, n) {
  const t = e.__mode, r = e.__format, o = e.__style, i = n.__mode, s = n.__format, a = n.__style, l = e.__state, c = n.__state;
  return (t === null || t === i) && (r === null || r === s) && (o === null || o === a) && (e.__state === null || l === c || (function(u, d) {
    if (u === d) return !0;
    if (u && d && u.size !== d.size) return !1;
    const f = /* @__PURE__ */ new Set();
    return !(u && Wc(f, u, d) || d && Wc(f, d, u) || u && Kc(f, u, d) || d && Kc(f, d, u));
  })(l, c));
}
function Zc(e, n) {
  const t = e.mergeWithSibling(n), r = ce()._normalizedNodes;
  return r.add(e.__key), r.add(n.__key), t;
}
function Jc(e) {
  let n, t, r = e;
  if (r.__text !== "" || !r.isSimpleText() || r.isUnmergeable()) {
    for (; (n = r.getPreviousSibling()) !== null && V(n) && n.isSimpleText() && !n.isUnmergeable(); ) {
      if (n.__text !== "") {
        if (Yc(n, r)) {
          r = Zc(n, r);
          break;
        }
        break;
      }
      n.remove();
    }
    for (; (t = r.getNextSibling()) !== null && V(t) && t.isSimpleText() && !t.isUnmergeable(); ) {
      if (t.__text !== "") {
        if (Yc(r, t)) {
          r = Zc(r, t);
          break;
        }
        break;
      }
      t.remove();
    }
  } else r.remove();
}
function si(e) {
  return Xc(e.anchor), Xc(e.focus), e;
}
function Xc(e) {
  for (; e.type === "element"; ) {
    const n = e.getNode(), t = e.offset;
    let r, o;
    if (t === n.getChildrenSize() ? (r = n.getChildAtIndex(t - 1), o = !0) : (r = n.getChildAtIndex(t), o = !1), V(r)) {
      e.set(r.__key, o ? r.getTextContentSize() : 0, "text", !0);
      break;
    }
    if (!O(r)) break;
    e.set(r.__key, o ? r.getChildrenSize() : 0, "element", !0);
  }
}
let Rn, $e, Zr, Wi, ha, ma, An, it, ya, Jr, ke = "", yt = null, mn = null, Dt = "", Xn = !1, ai = !1;
function li(e, n) {
  const t = An.get(e);
  if (n !== null) {
    const r = wa(e);
    r.parentNode === n && n.removeChild(r);
  }
  if (it.has(e) || $e._keyToDOMMap.delete(e), O(t)) {
    const r = ui(t, An);
    ba(r, 0, r.length - 1, null);
  }
  t !== void 0 && Dl(Jr, Zr, Wi, t, "destroyed");
}
function ba(e, n, t, r) {
  let o = n;
  for (; o <= t; ++o) {
    const i = e[o];
    i !== void 0 && li(i, r);
  }
}
function hn(e, n) {
  e.setProperty("text-align", n);
}
const aS = "40px";
function Wg(e, n) {
  const t = Rn.theme.indent;
  if (typeof t == "string") {
    const o = e.classList.contains(t);
    n > 0 && !o ? e.classList.add(t) : n < 1 && o && e.classList.remove(t);
  }
  const r = getComputedStyle(e).getPropertyValue("--lexical-indent-base-value") || aS;
  e.style.setProperty("padding-inline-start", n === 0 ? "" : `calc(${n} * ${r})`);
}
function Kg(e, n) {
  const t = e.style;
  n === 0 ? hn(t, "") : n === 1 ? hn(t, "left") : n === 2 ? hn(t, "center") : n === 3 ? hn(t, "right") : n === 4 ? hn(t, "justify") : n === 5 ? hn(t, "start") : n === 6 && hn(t, "end");
}
function va(e, n) {
  const t = (function(r) {
    const o = r.__dir;
    if (o !== null) return o;
    if (we(r)) return null;
    const i = r.getParentOrThrow();
    return we(i) && i.__dir === null ? "auto" : null;
  })(n);
  t !== null ? e.dir = t : e.removeAttribute("dir");
}
function ci(e, n) {
  const t = it.get(e);
  t === void 0 && z(60);
  const r = t.createDOM(Rn, $e);
  if ((function(o, i, s) {
    const a = s._keyToDOMMap;
    (function(l, c, u) {
      const d = `__lexicalKey_${c._key}`;
      l[d] = u;
    })(i, s, o), a.set(o, i);
  })(e, r, $e), V(t) ? r.setAttribute("data-lexical-text", "true") : re(t) && r.setAttribute("data-lexical-decorator", "true"), O(t)) {
    const o = t.__indent, i = t.__size;
    if (va(r, t), o !== 0 && Wg(r, o), i !== 0) {
      const a = i - 1;
      xa(ui(t, it), t, 0, a, t.getDOMSlot(r));
    }
    const s = t.__format;
    s !== 0 && Kg(r, s), t.isInline() || qg(null, t, r), es(t) && (ke += an, Dt += an);
  } else {
    const o = t.getTextContent();
    if (re(t)) {
      const i = t.decorate($e, Rn);
      i !== null && Yg(e, i), r.contentEditable = "false";
    }
    ke += o, Dt += o;
  }
  return n !== null && n.insertChild(r), Dl(Jr, Zr, Wi, t, "created"), r;
}
function xa(e, n, t, r, o) {
  const i = ke;
  ke = "";
  let s = t;
  for (; s <= r; ++s) {
    ci(e[s], o);
    const a = it.get(e[s]);
    a !== null && V(a) && yt === null && (yt = a.getFormat(), mn = a.getStyle());
  }
  es(n) && (ke += an), o.element.__lexicalTextContent = ke, ke = i + ke;
}
function Qc(e, n) {
  if (e) {
    const t = e.__last;
    if (t) {
      const r = n.get(t);
      if (r) return en(r) ? "line-break" : re(r) && r.isInline() ? "decorator" : null;
    }
    return "empty";
  }
  return null;
}
function qg(e, n, t) {
  const r = Qc(e, An), o = Qc(n, it);
  r !== o && n.getDOMSlot(t).setManagedLineBreak(o);
}
function lS(e, n, t) {
  var r;
  yt = null, mn = null, (function(o, i, s) {
    const a = ke, l = o.__size, c = i.__size;
    ke = "";
    const u = s.element;
    if (l === 1 && c === 1) {
      const d = o.__first, f = i.__first;
      if (d === f) Vr(d, u);
      else {
        const p = wa(d), h = ci(f, null);
        try {
          u.replaceChild(h, p);
        } catch (m) {
          if (typeof m == "object" && m != null) {
            const b = `${m.toString()} Parent: ${u.tagName}, new child: {tag: ${h.tagName} key: ${f}}, old child: {tag: ${p.tagName}, key: ${d}}.`;
            throw new Error(b);
          }
          throw m;
        }
        li(d, null);
      }
      const g = it.get(f);
      V(g) && yt === null && (yt = g.getFormat(), mn = g.getStyle());
    } else {
      const d = ui(o, An), f = ui(i, it);
      if (d.length !== l && z(227), f.length !== c && z(228), l === 0) c !== 0 && xa(f, i, 0, c - 1, s);
      else if (c === 0) {
        if (l !== 0) {
          const g = s.after == null && s.before == null && s.element.__lexicalLineBreak == null;
          ba(d, 0, l - 1, g ? null : u), g && (u.textContent = "");
        }
      } else (function(g, p, h, m, b, y) {
        const v = m - 1, _ = b - 1;
        let S, C, k = y.getFirstChild(), N = 0, E = 0;
        for (; N <= v && E <= _; ) {
          const A = p[N], D = h[E];
          if (A === D) k = Is(Vr(D, y.element)), N++, E++;
          else {
            S === void 0 && (S = new Set(p)), C === void 0 && (C = new Set(h));
            const B = C.has(A), H = S.has(D);
            if (B) if (H) {
              const U = Fn($e, D);
              U === k ? k = Is(Vr(D, y.element)) : (y.withBefore(k).insertChild(U), Vr(D, y.element)), N++, E++;
            } else ci(D, y.withBefore(k)), E++;
            else k = Is(wa(A)), li(A, y.element), N++;
          }
          const $ = it.get(D);
          $ !== null && V($) && yt === null && (yt = $.getFormat(), mn = $.getStyle());
        }
        const R = N > v, T = E > _;
        if (R && !T) {
          const A = h[_ + 1], D = A === void 0 ? null : $e.getElementByKey(A);
          xa(h, g, E, _, y.withBefore(D));
        } else T && !R && ba(p, N, v, y.element);
      })(i, d, f, l, c, s);
    }
    es(i) && (ke += an), u.__lexicalTextContent = ke, ke = a + ke;
  })(e, n, n.getDOMSlot(t)), r = n, yt == null || yt === r.__textFormat || ai || r.setTextFormat(yt), (function(o) {
    mn == null || mn === o.__textStyle || ai || o.setTextStyle(mn);
  })(n);
}
function ui(e, n) {
  const t = [];
  let r = e.__first;
  for (; r !== null; ) {
    const o = n.get(r);
    o === void 0 && z(101), t.push(r), r = o.__next;
  }
  return t;
}
function Vr(e, n) {
  const t = An.get(e);
  let r = it.get(e);
  t !== void 0 && r !== void 0 || z(61);
  const o = Xn || ma.has(e) || ha.has(e), i = Fn($e, e);
  if (t === r && !o) {
    if (O(t)) {
      const s = i.__lexicalTextContent;
      s !== void 0 && (ke += s, Dt += s);
    } else {
      const s = t.getTextContent();
      Dt += s, ke += s;
    }
    return i;
  }
  if (t !== r && o && Dl(Jr, Zr, Wi, r, "updated"), r.updateDOM(t, i, Rn)) {
    const s = ci(e, null);
    return n === null && z(62), n.replaceChild(s, i), li(e, null), s;
  }
  if (O(t) && O(r)) {
    const s = r.__indent;
    (Xn || s !== t.__indent) && Wg(i, s);
    const a = r.__format;
    if ((Xn || a !== t.__format) && Kg(i, a), o && (lS(t, r, i), we(r) || r.isInline() || qg(t, r, i)), es(r) && (ke += an, Dt += an), (Xn || r.__dir !== t.__dir) && (va(i, r), we(r) && !Xn)) for (const l of r.getChildren()) O(l) && va(Fn($e, l.getKey()), l);
  } else {
    const s = r.getTextContent();
    if (re(r)) {
      const a = r.decorate($e, Rn);
      a !== null && Yg(e, a);
    }
    ke += s, Dt += s;
  }
  if (!ai && we(r) && r.__cachedText !== Dt) {
    const s = r.getWritable();
    s.__cachedText = Dt, r = s;
  }
  return i;
}
function Yg(e, n) {
  let t = $e._pendingDecorators;
  const r = $e._decorators;
  if (t === null) {
    if (r[e] === n) return;
    t = Up($e);
  }
  t[e] = n;
}
function Is(e) {
  let n = e.nextSibling;
  return n !== null && n === $e._blockCursorElement && (n = n.nextSibling), n;
}
function cS(e, n, t, r, o, i) {
  ke = "", Dt = "", Xn = r === 2, $e = t, Rn = t._config, Zr = t._nodes, Wi = $e._listeners.mutation, ha = o, ma = i, An = e._nodeMap, it = n._nodeMap, ai = n._readOnly, ya = new Map(t._keyToDOMMap);
  const s = /* @__PURE__ */ new Map();
  return Jr = s, Vr("root", null), $e = void 0, Zr = void 0, ha = void 0, ma = void 0, An = void 0, it = void 0, Rn = void 0, ya = void 0, Jr = void 0, s;
}
function wa(e) {
  const n = ya.get(e);
  return n === void 0 && z(75, e), n;
}
function q(e) {
  return { type: e };
}
const Zg = q("SELECTION_CHANGE_COMMAND"), uS = q("SELECTION_INSERT_CLIPBOARD_NODES_COMMAND"), bl = q("CLICK_COMMAND"), Jg = q("BEFORE_INPUT_COMMAND"), Xg = q("INPUT_COMMAND"), Qg = q("COMPOSITION_START_COMMAND"), ep = q("COMPOSITION_END_COMMAND"), _n = q("DELETE_CHARACTER_COMMAND"), or = q("INSERT_LINE_BREAK_COMMAND"), Xr = q("INSERT_PARAGRAPH_COMMAND"), ir = q("CONTROLLED_TEXT_INSERTION_COMMAND"), vl = q("PASTE_COMMAND"), _a = q("REMOVE_TEXT_COMMAND"), Qr = q("DELETE_WORD_COMMAND"), eo = q("DELETE_LINE_COMMAND"), xt = q("FORMAT_TEXT_COMMAND"), xl = q("UNDO_COMMAND"), wl = q("REDO_COMMAND"), tp = q("KEYDOWN_COMMAND"), np = q("KEY_ARROW_RIGHT_COMMAND"), dS = q("MOVE_TO_END"), rp = q("KEY_ARROW_LEFT_COMMAND"), fS = q("MOVE_TO_START"), op = q("KEY_ARROW_UP_COMMAND"), ip = q("KEY_ARROW_DOWN_COMMAND"), di = q("KEY_ENTER_COMMAND"), sp = q("KEY_SPACE_COMMAND"), ap = q("KEY_BACKSPACE_COMMAND"), lp = q("KEY_ESCAPE_COMMAND"), cp = q("KEY_DELETE_COMMAND"), up = q("KEY_TAB_COMMAND"), gS = q("INSERT_TAB_COMMAND"), pS = q("INDENT_CONTENT_COMMAND"), eu = q("OUTDENT_CONTENT_COMMAND"), dp = q("DROP_COMMAND"), hS = q("FORMAT_ELEMENT_COMMAND"), fp = q("DRAGSTART_COMMAND"), gp = q("DRAGOVER_COMMAND"), mS = q("DRAGEND_COMMAND"), Ki = q("COPY_COMMAND"), _l = q("CUT_COMMAND"), Sa = q("SELECT_ALL_COMMAND"), yS = q("CLEAR_EDITOR_COMMAND"), bS = q("CLEAR_HISTORY_COMMAND"), ko = q("CAN_REDO_COMMAND"), Eo = q("CAN_UNDO_COMMAND"), vS = q("FOCUS_COMMAND"), xS = q("BLUR_COMMAND"), wS = q("KEY_MODIFIER_COMMAND"), Pt = Object.freeze({}), Ca = [["keydown", function(e, n) {
  to = e.timeStamp, pp = e.key, !n.isComposing() && W(n, tp, e);
}], ["pointerdown", function(e, n) {
  const t = e.target, r = e.pointerType;
  Tr(t) && r !== "touch" && r !== "pen" && e.button === 0 && St(n, () => {
    Lp(t) || (Na = !0);
  });
}], ["compositionstart", function(e, n) {
  W(n, Qg, e);
}], ["compositionend", function(e, n) {
  En ? jr = !0 : Sr || !lo && !co ? W(n, ep, e) : (Ra = !0, Aa = e.data);
}], ["input", function(e, n) {
  e.stopPropagation(), St(n, () => {
    n.dispatchCommand(Xg, e);
  }, { event: e }), Qn = null;
}], ["click", function(e, n) {
  St(n, () => {
    const t = G(), r = ht(tt(n)), o = Nr();
    if (r) {
      if (L(t)) {
        const i = t.anchor, s = i.getNode();
        if (i.type === "element" && i.offset === 0 && t.isCollapsed() && !we(s) && ye().getChildrenSize() === 1 && s.getTopLevelElementOrThrow().isEmpty() && o !== null && t.is(o)) r.removeAllRanges(), t.dirty = !0;
        else if (e.detail === 3 && !t.isCollapsed() && s !== t.focus.getNode()) {
          const a = et(s, (l) => O(l) && !l.isInline());
          O(a) && a.select(0);
        }
      } else if (e.pointerType === "touch" || e.pointerType === "pen") {
        const i = r.anchorNode;
        (_e(i) || Kt(i)) && Fe(kl(o, r, n, e));
      }
    }
    W(n, bl, e);
  });
}], ["cut", Pt], ["copy", Pt], ["dragstart", Pt], ["dragover", Pt], ["dragend", Pt], ["paste", Pt], ["focus", Pt], ["blur", Pt], ["drop", Pt]];
ii && Ca.push(["beforeinput", (e, n) => (function(t, r) {
  const o = t.inputType;
  o === "deleteCompositionText" || En && qp(r) || o !== "insertCompositionText" && W(r, Jg, t);
})(e, n)]);
let to = 0, pp = null, hp = 0, Qn = null;
const ka = /* @__PURE__ */ new WeakMap(), fi = /* @__PURE__ */ new WeakMap();
let Ea = !1, Na = !1, Wr = !1, jr = !1, Ra = !1, Aa = "", vn = null, mp = [0, "", 0, "root", 0];
function yp(e, n, t, r, o) {
  const i = e.anchor, s = e.focus, a = i.getNode(), l = ce(), c = ht(tt(l)), u = c !== null ? c.anchorNode : null, d = i.key, f = l.getElementByKey(d), g = t.length;
  return d !== s.key || !V(a) || (!o && (!ii || hp < r + 50) || a.isDirty() && g < 2 || Hp(t)) && i.offset !== s.offset && !a.isComposing() || Mt(a) || a.isDirty() && g > 1 || (o || !ii) && f !== null && !a.isComposing() && u !== gr(f) || c !== null && n !== null && (!n.collapsed || n.startContainer !== c.anchorNode || n.startOffset !== c.anchorOffset) || a.getFormat() !== e.format || a.getStyle() !== e.style || (function(p, h) {
    if (h.isSegmented()) return !0;
    if (!p.isCollapsed()) return !1;
    const m = p.anchor.offset, b = h.getParentOrThrow(), y = Sn(h);
    return m === 0 ? !h.canInsertTextBefore() || !b.canInsertTextBefore() && !h.isComposing() || y || (function(v) {
      const _ = v.getPreviousSibling();
      return (V(_) || O(_) && _.isInline()) && !_.canInsertTextAfter();
    })(h) : m === h.getTextContentSize() && (!h.canInsertTextAfter() || !b.canInsertTextAfter() && !h.isComposing() || y);
  })(e, a);
}
function tu(e, n) {
  return Kt(e) && e.nodeValue !== null && n !== 0 && n !== e.nodeValue.length;
}
function nu(e, n, t) {
  const { anchorNode: r, anchorOffset: o, focusNode: i, focusOffset: s } = e;
  Ea && (Ea = !1, tu(r, o) && tu(i, s) && !vn) || St(n, () => {
    if (!t) return void Fe(null);
    if (!po(n, r, i)) return;
    let a = G();
    if (vn && L(a) && a.isCollapsed()) {
      const l = a.anchor, c = vn.anchor;
      (l.key === c.key && l.offset === c.offset + 1 || l.offset === 1 && c.getNode().is(l.getNode().getPreviousSibling())) && (a = vn.clone(), Fe(a));
    }
    if (vn = null, L(a)) {
      const l = a.anchor, c = l.getNode();
      if (a.isCollapsed()) {
        e.type === "Range" && e.anchorNode === e.focusNode && (a.dirty = !0);
        const u = tt(n).event, d = u ? u.timeStamp : performance.now(), [f, g, p, h, m] = mp, b = ye(), y = n.isComposing() === !1 && b.getTextContent() === "";
        if (d < m + 200 && l.offset === p && l.key === h) jo(a, f, g);
        else if (l.type === "text") V(c) || z(141), bp(a, c);
        else if (l.type === "element" && !y) {
          O(c) || z(259);
          const v = l.getNode();
          v.isEmpty() ? (function(_, S) {
            const C = S.getTextFormat(), k = S.getTextStyle();
            jo(_, C, k);
          })(a, v) : jo(a, 0, "");
        }
      } else {
        const u = l.key, d = a.focus.key, f = a.getNodes(), g = f.length, p = a.isBackward(), h = p ? s : o, m = p ? o : s, b = p ? d : u, y = p ? u : d;
        let v = 2047, _ = !1;
        for (let S = 0; S < g; S++) {
          const C = f[S], k = C.getTextContentSize();
          if (V(C) && k !== 0 && !(S === 0 && C.__key === b && h === k || S === g - 1 && C.__key === y && m === 0) && (_ = !0, v &= C.getFormat(), v === 0)) break;
        }
        a.format = _ ? v : 0;
      }
    }
    W(n, Zg, void 0);
  });
}
function jo(e, n, t) {
  e.format === n && e.style === t || (e.format = n, e.style = t, e.dirty = !0);
}
function bp(e, n) {
  jo(e, n.getFormat(), n.getStyle());
}
function vp(e) {
  if (!e.getTargetRanges) return null;
  const n = e.getTargetRanges();
  return n.length === 0 ? null : n[0];
}
function _S(e) {
  const n = e.inputType, t = vp(e), r = ce(), o = G();
  if (n === "deleteContentBackward") {
    if (o === null) {
      const d = Nr();
      if (!L(d)) return !0;
      Fe(d.clone());
    }
    if (L(o)) {
      const d = o.anchor.key === o.focus.key;
      if (i = e.timeStamp, pp === "MediaLast" && i < to + 30 && r.isComposing() && d) {
        if (Ae(null), to = 0, setTimeout(() => {
          St(r, () => {
            Ae(null);
          });
        }, 30), L(o)) {
          const f = o.anchor.getNode();
          f.markDirty(), V(f) || z(142), bp(o, f);
        }
      } else {
        Ae(null), e.preventDefault();
        const f = o.anchor.getNode(), g = f.getTextContent(), p = f.canInsertTextAfter(), h = o.anchor.offset === 0 && o.focus.offset === g.length;
        let m = jc && d && !h && p;
        if (m && o.isCollapsed() && (m = !re(Oa(o.anchor, !0))), !m) {
          W(r, _n, !0);
          const b = G();
          jc && L(b) && b.isCollapsed() && (vn = b, setTimeout(() => vn = null));
        }
      }
      return !0;
    }
  }
  var i;
  if (!L(o)) return !0;
  const s = e.data;
  Qn !== null && $l(!1, r, Qn), o.dirty && Qn === null || !o.isCollapsed() || we(o.anchor.getNode()) || t === null || o.applyDOMRange(t), Qn = null;
  const a = o.anchor, l = o.focus, c = a.getNode(), u = l.getNode();
  if (n === "insertText" || n === "insertTranspose") {
    if (s === `
`) e.preventDefault(), W(r, or, !1);
    else if (s === an) e.preventDefault(), W(r, Xr, void 0);
    else if (s == null && e.dataTransfer) {
      const d = e.dataTransfer.getData("text/plain");
      e.preventDefault(), o.insertRawText(d);
    } else s != null && yp(o, t, s, e.timeStamp, !0) ? (e.preventDefault(), W(r, ir, s)) : Qn = s;
    return hp = e.timeStamp, !0;
  }
  switch (e.preventDefault(), n) {
    case "insertFromYank":
    case "insertFromDrop":
    case "insertReplacementText":
      W(r, ir, e);
      break;
    case "insertFromComposition":
      Ae(null), W(r, ir, e);
      break;
    case "insertLineBreak":
      Ae(null), W(r, or, !1);
      break;
    case "insertParagraph":
      Ae(null), Wr && !Sr ? (Wr = !1, W(r, or, !1)) : W(r, Xr, void 0);
      break;
    case "insertFromPaste":
    case "insertFromPasteAsQuotation":
      W(r, vl, e);
      break;
    case "deleteByComposition":
      (function(d, f) {
        return d !== f || O(d) || O(f) || !Sn(d) || !Sn(f);
      })(c, u) && W(r, _a, e);
      break;
    case "deleteByDrag":
    case "deleteByCut":
      W(r, _a, e);
      break;
    case "deleteContent":
      W(r, _n, !1);
      break;
    case "deleteWordBackward":
      W(r, Qr, !0);
      break;
    case "deleteWordForward":
      W(r, Qr, !1);
      break;
    case "deleteHardLineBackward":
    case "deleteSoftLineBackward":
      W(r, eo, !0);
      break;
    case "deleteContentForward":
    case "deleteHardLineForward":
    case "deleteSoftLineForward":
      W(r, eo, !1);
      break;
    case "formatStrikeThrough":
      W(r, xt, "strikethrough");
      break;
    case "formatBold":
      W(r, xt, "bold");
      break;
    case "formatItalic":
      W(r, xt, "italic");
      break;
    case "formatUnderline":
      W(r, xt, "underline");
      break;
    case "historyUndo":
      W(r, xl, void 0);
      break;
    case "historyRedo":
      W(r, wl, void 0);
  }
  return !0;
}
function SS(e) {
  if (_e(e.target) && Lp(e.target)) return !0;
  const n = ce(), t = G(), r = e.data, o = vp(e);
  if (r != null && L(t) && yp(t, o, r, e.timeStamp, !1)) {
    jr && (gi(n, r), jr = !1);
    const i = t.anchor.getNode(), s = ht(tt(n));
    if (s === null) return !0;
    const a = t.isBackward(), l = a ? t.anchor.offset : t.focus.offset, c = a ? t.focus.offset : t.anchor.offset;
    ii && !t.isCollapsed() && V(i) && s.anchorNode !== null && i.getTextContent().slice(0, l) + r + i.getTextContent().slice(l + c) === Kp(s.anchorNode) || W(n, ir, r);
    const u = r.length;
    En && u > 1 && e.inputType === "insertCompositionText" && !n.isComposing() && (t.anchor.offset -= u), lo || Sr || co || !n.isComposing() || (to = 0, Ae(null));
  } else
    $l(!1, n, r !== null ? r : void 0), jr && (gi(n, r || void 0), jr = !1);
  return (function() {
    Ee();
    const i = ce();
    Bg(i);
  })(), !0;
}
function CS(e) {
  const n = ce(), t = G();
  if (L(t) && !n.isComposing()) {
    const r = t.anchor, o = t.anchor.getNode();
    Ae(r.key), (e.timeStamp < to + 30 || r.type === "element" || !t.isCollapsed() || o.getFormat() !== t.format || V(o) && o.getStyle() !== t.style) && W(n, ir, K_);
  }
  return !0;
}
function kS(e) {
  return gi(ce(), e.data), !0;
}
function gi(e, n) {
  const t = e._compositionKey;
  if (Ae(null), t !== null && n != null) {
    if (n === "") {
      const r = xe(t), o = gr(e.getElementByKey(t));
      return void (o !== null && o.nodeValue !== null && V(r) && Ml(r, o.nodeValue, null, null, !0));
    }
    if (n[n.length - 1] === `
`) {
      const r = G();
      if (L(r)) {
        const o = r.focus;
        return r.anchor.set(o.key, o.offset, o.type), void W(e, di, null);
      }
    }
  }
  $l(!0, e, n);
}
function ES(e) {
  const n = ce();
  if (e.key == null) return !0;
  if (Ra && Nu(e)) return St(n, () => {
    gi(n, Aa);
  }), Ra = !1, Aa = "", !0;
  if ((function(t) {
    return ae(t, "ArrowRight", { shiftKey: "any" });
  })(e)) W(n, np, e);
  else if ((function(t) {
    return ae(t, "ArrowRight", Ot);
  })(e)) W(n, dS, e);
  else if ((function(t) {
    return ae(t, "ArrowLeft", { shiftKey: "any" });
  })(e)) W(n, rp, e);
  else if ((function(t) {
    return ae(t, "ArrowLeft", Ot);
  })(e)) W(n, fS, e);
  else if ((function(t) {
    return ae(t, "ArrowUp", { altKey: "any", shiftKey: "any" });
  })(e)) W(n, op, e);
  else if ((function(t) {
    return ae(t, "ArrowDown", { altKey: "any", shiftKey: "any" });
  })(e)) W(n, ip, e);
  else if ((function(t) {
    return ae(t, "Enter", { altKey: "any", ctrlKey: "any", metaKey: "any", shiftKey: !0 });
  })(e)) Wr = !0, W(n, di, e);
  else if ((function(t) {
    return t.key === " ";
  })(e)) W(n, sp, e);
  else if ((function(t) {
    return rt && ae(t, "o", { ctrlKey: !0 });
  })(e)) e.preventDefault(), Wr = !0, W(n, or, !0);
  else if ((function(t) {
    return ae(t, "Enter", { altKey: "any", ctrlKey: "any", metaKey: "any" });
  })(e)) Wr = !1, W(n, di, e);
  else if ((function(t) {
    return ae(t, "Backspace", { shiftKey: "any" }) || rt && ae(t, "h", { ctrlKey: !0 });
  })(e)) Nu(e) ? W(n, ap, e) : (e.preventDefault(), W(n, _n, !0));
  else if ((function(t) {
    return t.key === "Escape";
  })(e)) W(n, lp, e);
  else if ((function(t) {
    return ae(t, "Delete", {}) || rt && ae(t, "d", { ctrlKey: !0 });
  })(e)) (function(t) {
    return t.key === "Delete";
  })(e) ? W(n, cp, e) : (e.preventDefault(), W(n, _n, !1));
  else if ((function(t) {
    return ae(t, "Backspace", Eu);
  })(e)) e.preventDefault(), W(n, Qr, !0);
  else if ((function(t) {
    return ae(t, "Delete", Eu);
  })(e)) e.preventDefault(), W(n, Qr, !1);
  else if ((function(t) {
    return rt && ae(t, "Backspace", { metaKey: !0 });
  })(e)) e.preventDefault(), W(n, eo, !0);
  else if ((function(t) {
    return rt && (ae(t, "Delete", { metaKey: !0 }) || ae(t, "k", { ctrlKey: !0 }));
  })(e)) e.preventDefault(), W(n, eo, !1);
  else if ((function(t) {
    return ae(t, "b", Ot);
  })(e)) e.preventDefault(), W(n, xt, "bold");
  else if ((function(t) {
    return ae(t, "u", Ot);
  })(e)) e.preventDefault(), W(n, xt, "underline");
  else if ((function(t) {
    return ae(t, "i", Ot);
  })(e)) e.preventDefault(), W(n, xt, "italic");
  else if ((function(t) {
    return ae(t, "Tab", { shiftKey: "any" });
  })(e)) W(n, up, e);
  else if ((function(t) {
    return ae(t, "z", Ot);
  })(e)) e.preventDefault(), W(n, xl, void 0);
  else if ((function(t) {
    return rt ? ae(t, "z", { metaKey: !0, shiftKey: !0 }) : ae(t, "y", { ctrlKey: !0 }) || ae(t, "z", { ctrlKey: !0, shiftKey: !0 });
  })(e)) e.preventDefault(), W(n, wl, void 0);
  else {
    const t = n._editorState._selection;
    t === null || L(t) ? Ru(e) && (e.preventDefault(), W(n, Sa, e)) : (function(r) {
      return ae(r, "c", Ot);
    })(e) ? (e.preventDefault(), W(n, Ki, e)) : (function(r) {
      return ae(r, "x", Ot);
    })(e) ? (e.preventDefault(), W(n, _l, e)) : Ru(e) && (e.preventDefault(), W(n, Sa, e));
  }
  return (function(t) {
    return t.ctrlKey || t.shiftKey || t.altKey || t.metaKey;
  })(e) && n.dispatchCommand(wS, e), !0;
}
function xp(e) {
  let n = e.__lexicalEventHandles;
  return n === void 0 && (n = [], e.__lexicalEventHandles = n), n;
}
const sr = /* @__PURE__ */ new Map();
function wp(e) {
  const n = iC(e.target);
  if (n === null) return;
  const t = zp(n.anchorNode);
  if (t === null) return;
  Na && (Na = !1, St(t, () => {
    const l = Nr(), c = n.anchorNode;
    (_e(c) || Kt(c)) && Fe(kl(l, n, t, e));
  }));
  const r = Ol(t), o = r[r.length - 1], i = o._key, s = sr.get(i), a = s || o;
  a !== t && nu(n, a, !1), nu(n, t, !0), t !== o ? sr.set(i, t) : s && sr.delete(i);
}
function ru(e) {
  e._lexicalHandled = !0;
}
function ou(e) {
  return e._lexicalHandled === !0;
}
function NS(e) {
  const n = ka.get(e);
  if (n === void 0) return;
  const t = fi.get(n);
  if (t === void 0) return;
  const r = t - 1;
  r >= 0 || z(164), ka.delete(e), fi.set(n, r), r === 0 && n.removeEventListener("selectionchange", wp);
  const o = Xi(e);
  Il(o) ? ((function(s) {
    if (s._parentEditor !== null) {
      const a = Ol(s), l = a[a.length - 1]._key;
      sr.get(l) === s && sr.delete(l);
    } else sr.delete(s._key);
  })(o), e.__lexicalEditor = null) : o && z(198);
  const i = xp(e);
  for (let s = 0; s < i.length; s++) i[s]();
  e.__lexicalEventHandles = [];
}
function Ta(e, n, t) {
  Ee();
  const r = e.__key, o = e.getParent();
  if (o === null) return;
  const i = (function(a) {
    const l = G();
    if (!L(l) || !O(a)) return l;
    const { anchor: c, focus: u } = l, d = c.getNode(), f = u.getNode();
    return $a(d, a) && c.set(a.__key, 0, "element"), $a(f, a) && u.set(a.__key, 0, "element"), l;
  })(e);
  let s = !1;
  if (L(i) && n) {
    const a = i.anchor, l = i.focus;
    a.key === r && (yi(a, e, o, e.getPreviousSibling(), e.getNextSibling()), s = !0), l.key === r && (yi(l, e, o, e.getPreviousSibling(), e.getNextSibling()), s = !0);
  } else Oe(i) && n && e.isSelected() && e.selectPrevious();
  if (L(i) && n && !s) {
    const a = e.getIndexWithinParent();
    Cn(e), mi(i, o, a, -1);
  } else Cn(e);
  t || Me(o) || o.canBeEmpty() || !o.isEmpty() || Ta(o, n), n && i && we(o) && o.isEmpty() && o.selectEnd();
}
const _p = Symbol.for("ephemeral");
function pi(e) {
  return e[_p] || !1;
}
class st {
  constructor(n) {
    I(this, "__type");
    I(this, "__key");
    I(this, "__parent");
    I(this, "__prev");
    I(this, "__next");
    I(this, "__state");
    this.__type = this.constructor.getType(), this.__parent = null, this.__prev = null, this.__next = null, Object.defineProperty(this, "__state", { configurable: !0, enumerable: !1, value: void 0, writable: !0 }), XS(this, n);
  }
  static getType() {
    const { ownNodeType: n } = ns(this);
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
      if (re(this) && this.isInline() && o) {
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
      if (Me(t)) return O(n) || n === this && re(n) || z(194), n;
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
    const t = O(this) ? this : this.getParent(), r = O(n) ? n : n.getParent(), o = t && r ? Go(t, r) : null;
    return o ? o.commonAncestor : null;
  }
  is(n) {
    return n != null && this.__key === n.__key;
  }
  isBefore(n) {
    const t = Go(this, n);
    return t !== null && (t.type === "descendant" || (t.type === "branch" ? th(t) === -1 : (t.type !== "same" && t.type !== "ancestor" && z(279), !1)));
  }
  isParentOf(n) {
    const t = Go(this, n);
    return t !== null && t.type === "ancestor";
  }
  getNodesBetween(n) {
    const t = this.isBefore(n), r = [], o = /* @__PURE__ */ new Set();
    let i = this;
    for (; i !== null; ) {
      const s = i.__key;
      if (o.has(s) || (o.add(s), r.push(i)), i === n) break;
      const a = O(i) ? t ? i.getFirstChild() : i.getLastChild() : null;
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
    const n = ce()._dirtyLeaves;
    return n !== null && n.has(this.__key);
  }
  getLatest() {
    if (pi(this)) return this;
    const n = xe(this.__key);
    return n === null && z(113), n;
  }
  getWritable() {
    if (pi(this)) return this;
    Ee();
    const n = dn(), t = ce(), r = n._nodeMap, o = this.__key, i = this.getLatest(), s = t._cloneNotNeeded, a = G();
    if (a !== null && a.setCachedNodes(null), s.has(o)) return vi(i), i;
    const l = Jp(i);
    return s.add(o), vi(l), r.set(o, l), l;
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
      for (const a of Hg(o).flatKeys) a in r && (s !== void 0 && s !== i || (s = { ...i }), s[a] = r[a]);
      return (o.__state || s) && Gg(t).updateFromJSON(s), o;
    })(this, n);
  }
  static transform() {
    return null;
  }
  remove(n) {
    Ta(this, !0, n);
  }
  replace(n, t) {
    Ee();
    let r = G();
    r !== null && (r = r.clone()), zs(this, n);
    const o = this.getLatest(), i = this.__key, s = n.__key, a = n.getWritable(), l = this.getParentOrThrow().getWritable(), c = l.__size;
    Cn(a);
    const u = o.getPreviousSibling(), d = o.getNextSibling(), f = o.__prev, g = o.__next, p = o.__parent;
    if (Ta(o, !1, !0), u === null ? l.__first = s : u.getWritable().__next = s, a.__prev = f, d === null ? l.__last = s : d.getWritable().__prev = s, a.__next = g, a.__parent = p, l.__size = c, t && (O(this) && O(a) || z(139), this.getChildren().forEach((h) => {
      a.append(h);
    })), L(r)) {
      Fe(r);
      const h = r.anchor, m = r.focus;
      h.key === i && lu(h, a), m.key === i && lu(m, a);
    }
    return Xt() === i && Ae(s), a;
  }
  insertAfter(n, t = !0) {
    Ee(), zs(this, n);
    const r = this.getWritable(), o = n.getWritable(), i = o.getParent(), s = G();
    let a = !1, l = !1;
    if (i !== null) {
      const g = n.getIndexWithinParent();
      if (Cn(o), L(s)) {
        const p = i.__key, h = s.anchor, m = s.focus;
        a = h.type === "element" && h.key === p && h.offset === g + 1, l = m.type === "element" && m.key === p && m.offset === g + 1;
      }
    }
    const c = this.getNextSibling(), u = this.getParentOrThrow().getWritable(), d = o.__key, f = r.__next;
    if (c === null ? u.__last = d : c.getWritable().__prev = d, u.__size++, r.__next = d, o.__next = f, o.__prev = r.__key, o.__parent = r.__parent, t && L(s)) {
      const g = this.getIndexWithinParent();
      mi(s, u, g + 1);
      const p = u.__key;
      a && s.anchor.set(p, g + 2, "element"), l && s.focus.set(p, g + 2, "element");
    }
    return n;
  }
  insertBefore(n, t = !0) {
    Ee(), zs(this, n);
    const r = this.getWritable(), o = n.getWritable(), i = o.__key;
    Cn(o);
    const s = this.getPreviousSibling(), a = this.getParentOrThrow().getWritable(), l = r.__prev, c = this.getIndexWithinParent();
    s === null ? a.__first = i : s.getWritable().__next = i, a.__size++, r.__prev = i, o.__prev = l, o.__next = r.__key, o.__parent = r.__parent;
    const u = G();
    return t && L(u) && mi(u, this.getParentOrThrow(), c), n;
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
    Ee();
    const r = this.getPreviousSibling(), o = this.getParentOrThrow();
    if (r === null) return o.select(0, 0);
    if (O(r)) return r.select();
    if (!V(r)) {
      const i = r.getIndexWithinParent() + 1;
      return o.select(i, i);
    }
    return r.select(n, t);
  }
  selectNext(n, t) {
    Ee();
    const r = this.getNextSibling(), o = this.getParentOrThrow();
    if (r === null) return o.select();
    if (O(r)) return r.select(0, 0);
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
I(st, "importDOM");
const hi = "historic", RS = "history-push", ar = "history-merge", AS = "paste", Sp = "collaboration", TS = "skip-scroll-into-view", FS = "skip-dom-selection", PS = "skip-selection-focus";
class Cr extends st {
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
      if (r !== null && xi(r)) {
        const o = r.firstChild;
        if (o === t || o.nextSibling === t && No(o)) {
          const i = r.lastChild;
          if (i === t || i.previousSibling === t && No(i)) return !0;
        }
      }
      return !1;
    })(n) || (function(t) {
      const r = t.parentElement;
      if (r !== null && xi(r)) {
        const o = r.firstChild;
        if (o === t || o.nextSibling === t && No(o)) return !1;
        const i = r.lastChild;
        if (i === t || i.previousSibling === t && No(i)) return !0;
      }
      return !1;
    })(n) ? null : { conversion: IS, priority: 0 } };
  }
  static importJSON(n) {
    return at().updateFromJSON(n);
  }
}
function IS(e) {
  return { node: at() };
}
function at() {
  return nt(new Cr());
}
function en(e) {
  return e instanceof Cr;
}
function No(e) {
  return Kt(e) && /^( |\t|\r?\n)+$/.test(e.textContent || "");
}
function Os(e, n) {
  return 16 & n ? "code" : n & Dg ? "mark" : 32 & n ? "sub" : 64 & n ? "sup" : null;
}
function $s(e, n) {
  return 1 & n ? "strong" : 2 & n ? "em" : "span";
}
function Cp(e, n, t, r, o) {
  const i = r.classList;
  let s = lr(o, "base");
  s !== void 0 && i.add(...s), s = lr(o, "underlineStrikethrough");
  let a = !1;
  const l = 8 & n && 4 & n;
  s !== void 0 && (8 & t && 4 & t ? (a = !0, l || i.add(...s)) : l && i.remove(...s));
  for (const c in Nn) {
    const u = Nn[c];
    if (s = lr(o, c), s !== void 0) if (t & u) {
      if (a && (c === "underline" || c === "strikethrough")) {
        n & u && i.remove(...s);
        continue;
      }
      ((n & u) === 0 || l && c === "underline" || c === "strikethrough") && i.add(...s);
    } else n & u && i.remove(...s);
  }
}
function kp(e, n, t) {
  const r = n.firstChild, o = t.isComposing(), i = e + (o ? Hi : "");
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
function iu(e, n, t, r, o, i) {
  kp(o, e, n);
  const s = i.theme.text;
  s !== void 0 && Cp(0, 0, r, e, s);
}
function Ro(e, n) {
  const t = document.createElement(n);
  return t.appendChild(e), t;
}
class Wt extends st {
  constructor(t = "", r) {
    super(r);
    I(this, "__text");
    I(this, "__format");
    I(this, "__style");
    I(this, "__mode");
    I(this, "__detail");
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
    return J_[t.__mode];
  }
  getStyle() {
    return this.getLatest().__style;
  }
  isToken() {
    return this.getLatest().__mode === 1;
  }
  isComposing() {
    return this.__key === Xt();
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
    const r = Nn[t];
    return (this.getFormat() & r) !== 0;
  }
  isSimpleText() {
    return this.__type === "text" && this.__mode === 0;
  }
  getTextContent() {
    return this.getLatest().__text;
  }
  getFormatFlags(t, r) {
    return bi(this.getLatest().__format, t, r);
  }
  canHaveFormat() {
    return !0;
  }
  isInline() {
    return !0;
  }
  createDOM(t, r) {
    const o = this.__format, i = Os(0, o), s = $s(0, o), a = i === null ? s : i, l = document.createElement(a);
    let c = l;
    this.hasFormat("code") && l.setAttribute("spellcheck", "false"), i !== null && (c = document.createElement(s), l.appendChild(c)), iu(c, this, 0, o, this.__text, t);
    const u = this.__style;
    return u !== "" && (l.style.cssText = u), l;
  }
  updateDOM(t, r, o) {
    const i = this.__text, s = t.__format, a = this.__format, l = Os(0, s), c = Os(0, a), u = $s(0, s), d = $s(0, a);
    if ((l === null ? u : l) !== (c === null ? d : c)) return !0;
    if (l === c && u !== d) {
      const m = r.firstChild;
      m == null && z(48);
      const b = document.createElement(d);
      return iu(b, this, 0, a, i, o), r.replaceChild(b, m), !1;
    }
    let f = r;
    c !== null && l !== null && (f = r.firstChild, f == null && z(49)), kp(i, f, this);
    const g = o.theme.text;
    g !== void 0 && s !== a && Cp(0, s, a, f, g);
    const p = t.__style, h = this.__style;
    return p !== h && (r.style.cssText = h), !1;
  }
  static importDOM() {
    return { "#text": () => ({ conversion: DS, priority: 0 }), b: () => ({ conversion: $S, priority: 0 }), code: () => ({ conversion: It, priority: 0 }), em: () => ({ conversion: It, priority: 0 }), i: () => ({ conversion: It, priority: 0 }), mark: () => ({ conversion: It, priority: 0 }), s: () => ({ conversion: It, priority: 0 }), span: () => ({ conversion: OS, priority: 0 }), strong: () => ({ conversion: It, priority: 0 }), sub: () => ({ conversion: It, priority: 0 }), sup: () => ({ conversion: It, priority: 0 }), u: () => ({ conversion: It, priority: 0 }) };
  }
  static importJSON(t) {
    return be().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setTextContent(t.text).setFormat(t.format).setDetail(t.detail).setMode(t.mode).setStyle(t.style);
  }
  exportDOM(t) {
    let { element: r } = super.exportDOM(t);
    return _e(r) || z(132), r.style.whiteSpace = "pre-wrap", this.hasFormat("lowercase") ? r.style.textTransform = "lowercase" : this.hasFormat("uppercase") ? r.style.textTransform = "uppercase" : this.hasFormat("capitalize") && (r.style.textTransform = "capitalize"), this.hasFormat("bold") && (r = Ro(r, "b")), this.hasFormat("italic") && (r = Ro(r, "i")), this.hasFormat("strikethrough") && (r = Ro(r, "s")), this.hasFormat("underline") && (r = Ro(r, "u")), { element: r };
  }
  exportJSON() {
    return { detail: this.getDetail(), format: this.getFormat(), mode: this.getMode(), style: this.getStyle(), text: this.getTextContent(), ...super.exportJSON() };
  }
  selectionTransform(t, r) {
  }
  setFormat(t) {
    const r = this.getWritable();
    return r.__format = typeof t == "string" ? Nn[t] : t, r;
  }
  setDetail(t) {
    const r = this.getWritable();
    return r.__detail = typeof t == "string" ? q_[t] : t, r;
  }
  setStyle(t) {
    const r = this.getWritable();
    return r.__style = t, r;
  }
  toggleFormat(t) {
    const r = bi(this.getFormat(), t, null);
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
    const r = Z_[t];
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
    Ee();
    let o = t, i = r;
    const s = G(), a = this.getTextContent(), l = this.__key;
    if (typeof a == "string") {
      const c = a.length;
      o === void 0 && (o = c), i === void 0 && (i = c);
    } else o = 0, i = 0;
    if (!L(s)) return Rp(l, o, l, i, "text", "text");
    {
      const c = Xt();
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
    Ee();
    const r = this.getLatest(), o = r.getTextContent();
    if (o === "") return [];
    const i = r.__key, s = Xt(), a = o.length;
    t.sort((E, R) => E - R), t.push(a);
    const l = [], c = t.length;
    for (let E = 0, R = 0; E < a && R <= c; R++) {
      const T = t[R];
      T > E && (l.push(o.slice(E, T)), E = T);
    }
    const u = l.length;
    if (u === 1) return [r];
    const d = l[0], f = r.getParent();
    let g;
    const p = r.getFormat(), h = r.getStyle(), m = r.__detail;
    let b = !1, y = null, v = null;
    const _ = G();
    if (L(_)) {
      const [E, R] = _.isBackward() ? [_.focus, _.anchor] : [_.anchor, _.focus];
      E.type === "text" && E.key === i && (y = E), R.type === "text" && R.key === i && (v = R);
    }
    r.isSegmented() ? (g = be(d), g.__format = p, g.__style = h, g.__detail = m, g.__state = qc(r, g), b = !0) : g = r.setTextContent(d);
    const S = [g];
    for (let E = 1; E < u; E++) {
      const R = be(l[E]);
      R.__format = p, R.__style = h, R.__detail = m, R.__state = qc(r, R);
      const T = R.__key;
      s === i && Ae(T), S.push(R);
    }
    const C = y ? y.offset : null, k = v ? v.offset : null;
    let N = 0;
    for (const E of S) {
      if (!y && !v) break;
      const R = N + E.getTextContentSize();
      if (y !== null && C !== null && C <= R && C >= N && (y.set(E.getKey(), C - N, "text"), C < R && (y = null)), v !== null && k !== null && k <= R && k >= N) {
        v.set(E.getKey(), k - N, "text");
        break;
      }
      N = R;
    }
    if (f !== null) {
      (function(T) {
        const A = T.getPreviousSibling(), D = T.getNextSibling();
        A !== null && vi(A), D !== null && vi(D);
      })(this);
      const E = f.getWritable(), R = this.getIndexWithinParent();
      b ? (E.splice(R, 0, S), this.remove()) : E.splice(R, 1, S), L(_) && mi(_, f, R, u - 1);
    }
    return S;
  }
  mergeWithSibling(t) {
    const r = t === this.getPreviousSibling();
    r || t === this.getNextSibling() || z(50);
    const o = this.__key, i = t.__key, s = this.__text, a = s.length;
    Xt() === i && Ae(o);
    const l = G();
    if (L(l)) {
      const f = l.anchor, g = l.focus;
      f !== null && f.key === i && hu(f, r, o, t, a), g !== null && g.key === i && hu(g, r, o, t, a);
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
function OS(e) {
  return { forChild: Sl(e.style), node: null };
}
function $S(e) {
  const n = e, t = n.style.fontWeight === "normal";
  return { forChild: Sl(n.style, t ? void 0 : "bold"), node: null };
}
const su = /* @__PURE__ */ new WeakMap();
function MS(e) {
  if (!_e(e)) return !1;
  if (e.nodeName === "PRE") return !0;
  const n = e.style.whiteSpace;
  return typeof n == "string" && n.startsWith("pre");
}
function DS(e) {
  const n = e;
  e.parentElement === null && z(129);
  let t = n.textContent || "";
  if ((function(r) {
    let o, i = r.parentNode;
    const s = [r];
    for (; i !== null && (o = su.get(i)) === void 0 && !MS(i); ) s.push(i), i = i.parentNode;
    const a = o === void 0 ? i : o;
    for (let l = 0; l < s.length; l++) su.set(s[l], a);
    return a;
  })(n) !== null) {
    const r = t.split(/(\r?\n|\t)/), o = [], i = r.length;
    for (let s = 0; s < i; s++) {
      const a = r[s];
      a === `
` || a === `\r
` ? o.push(at()) : a === "	" ? o.push(Er()) : a !== "" && o.push(be(a));
    }
    return { node: o };
  }
  if (t = t.replace(/\r/g, "").replace(/[ \t\n]+/g, " "), t === "") return { node: null };
  if (t[0] === " ") {
    let r = n, o = !0;
    for (; r !== null && (r = au(r, !1)) !== null; ) {
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
    for (; r !== null && (r = au(r, !0)) !== null; )
      if ((r.textContent || "").replace(/^( |\t|\r?\n)+/, "").length > 0) {
        o = !1;
        break;
      }
    o && (t = t.slice(0, t.length - 1));
  }
  return t === "" ? { node: null } : { node: be(t) };
}
function au(e, n) {
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
      if (i === "" && !La(t) || i !== "" && !i.startsWith("inline")) return null;
    }
    let o = t;
    for (; (o = n ? t.firstChild : t.lastChild) !== null; ) t = o;
    if (Kt(t)) return t;
    if (t.nodeName === "BR") return null;
  }
}
const LS = { code: "code", em: "italic", i: "italic", mark: "highlight", s: "strikethrough", strong: "bold", sub: "subscript", sup: "superscript", u: "underline" };
function It(e) {
  const n = LS[e.nodeName.toLowerCase()];
  return n === void 0 ? { node: null } : { forChild: Sl(e.style, n), node: null };
}
function be(e = "") {
  return nt(new Wt(e));
}
function V(e) {
  return e instanceof Wt;
}
function Sl(e, n) {
  const t = e.fontWeight, r = e.textDecoration.split(" "), o = t === "700" || t === "bold", i = r.includes("line-through"), s = e.fontStyle === "italic", a = r.includes("underline"), l = e.verticalAlign;
  return (c) => (V(c) && (o && !c.hasFormat("bold") && c.toggleFormat("bold"), i && !c.hasFormat("strikethrough") && c.toggleFormat("strikethrough"), s && !c.hasFormat("italic") && c.toggleFormat("italic"), a && !c.hasFormat("underline") && c.toggleFormat("underline"), l !== "sub" || c.hasFormat("subscript") || c.toggleFormat("subscript"), l !== "super" || c.hasFormat("superscript") || c.toggleFormat("superscript"), n && !c.hasFormat(n) && c.toggleFormat(n)), c);
}
class kr extends Wt {
  static getType() {
    return "tab";
  }
  static clone(n) {
    return new kr(n.__key);
  }
  constructor(n) {
    super("	", n), this.__detail = 2;
  }
  static importDOM() {
    return null;
  }
  createDOM(n) {
    const t = super.createDOM(n), r = lr(n.theme, "tab");
    return r !== void 0 && t.classList.add(...r), t;
  }
  static importJSON(n) {
    return Er().updateFromJSON(n);
  }
  setTextContent(n) {
    return n !== "	" && n !== "" && Og(126), super.setTextContent("	");
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
function Er() {
  return nt(new kr());
}
function qi(e) {
  return e instanceof kr;
}
class zS {
  constructor(n, t, r) {
    I(this, "key");
    I(this, "offset");
    I(this, "type");
    I(this, "_selection");
    this._selection = null, this.key = n, this.offset = t, this.type = r;
  }
  is(n) {
    return this.key === n.key && this.offset === n.offset && this.type === n.type;
  }
  isBefore(n) {
    return this.key === n.key ? this.offset < n.offset : eh(Qe(Vt(this, "next")), Qe(Vt(n, "next"))) < 0;
  }
  getNode() {
    const n = xe(this.key);
    return n === null && z(20), n;
  }
  set(n, t, r, o) {
    const i = this._selection, s = this.key;
    o && this.key === n && this.offset === t && this.type === r || (this.key = n, this.offset = t, this.type = r, uo() || (Xt() === s && Ae(n), i !== null && (i.setCachedNodes(null), i.dirty = !0)));
  }
}
function Et(e, n, t) {
  return new zS(e, n, t);
}
function Ms(e, n) {
  let t = n.__key, r = e.offset, o = "element";
  if (V(n)) {
    o = "text";
    const i = n.getTextContentSize();
    r > i && (r = i);
  } else if (!O(n)) {
    const i = n.getNextSibling();
    if (V(i)) t = i.__key, r = 0, o = "text";
    else {
      const s = n.getParent();
      s && (t = s.__key, r = n.getIndexWithinParent() + 1);
    }
  }
  e.set(t, r, o);
}
function lu(e, n) {
  if (O(n)) {
    const t = n.getLastDescendant();
    O(t) || V(t) ? Ms(e, t) : Ms(e, n);
  } else Ms(e, n);
}
class Yi {
  constructor(n) {
    I(this, "_nodes");
    I(this, "_cachedNodes");
    I(this, "dirty");
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
    return new Yi(new Set(this._nodes));
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
    return uo() || (this._cachedNodes = r), r;
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
      yC(ln(t, t));
    }
    for (const t of n) t.remove();
  }
}
function L(e) {
  return e instanceof Bn;
}
class Bn {
  constructor(n, t, r, o) {
    I(this, "format");
    I(this, "style");
    I(this, "anchor");
    I(this, "focus");
    I(this, "_cachedNodes");
    I(this, "dirty");
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
      for (const c of r) if (Ct(c)) {
        const { origin: u } = c;
        o.length === 0 ? a.add(u) : (l.add(u), o.push(u));
      } else {
        const { origin: u } = c;
        O(u) && l.has(u) || o.push(u);
      }
      if (s && o.push(s.caret.origin), hr(r.focus) && O(r.focus.origin) && r.focus.getNodeAtCaret() === null) for (let c = lt(r.focus.origin, "previous"); Ct(c) && a.has(c.origin) && !c.origin.isEmpty() && c.origin.is(o[o.length - 1]); c = jl(c)) a.delete(c.origin), o.pop();
      for (; o.length > 1; ) {
        const c = o[o.length - 1];
        if (!O(c) || l.has(c) || c.isEmpty() || a.has(c)) break;
        o.pop();
      }
      if (o.length === 0 && r.isCollapsed()) {
        const c = Qe(r.anchor), u = Qe(r.anchor.getFlipped()), d = (g) => tn(g) ? g.origin : g.getNodeAtCaret(), f = d(c) || d(u) || (r.anchor.getNodeAtCaret() ? c.origin : u.origin);
        o.push(f);
      }
      return o;
    })(rh(Ou(this), "next"));
    return uo() || (this._cachedNodes = t), t;
  }
  setTextNodeRange(n, t, r, o) {
    this.anchor.set(n.__key, t, "text"), this.focus.set(r.__key, o, "text");
  }
  getTextContent() {
    const n = this.getNodes();
    if (n.length === 0) return "";
    const t = n[0], r = n[n.length - 1], o = this.anchor, i = this.focus, s = o.isBefore(i), [a, l] = Fa(this);
    let c = "", u = !0;
    for (let d = 0; d < n.length; d++) {
      const f = n[d];
      if (O(f) && !f.isInline()) u || (c += `
`), u = !f.isEmpty();
      else if (u = !1, V(f)) {
        let g = f.getTextContent();
        f === t ? f === r ? o.type === "element" && i.type === "element" && i.offset !== o.offset || (g = a < l ? g.slice(a, l) : g.slice(l, a)) : g = s ? g.slice(a) : g.slice(l) : f === r && (g = s ? g.slice(0, l) : g.slice(0, a)), c += g;
      } else !re(f) && !en(f) || f === r && this.isCollapsed() || (c += f.getTextContent());
    }
    return c;
  }
  applyDOMRange(n) {
    const t = ce(), r = t.getEditorState()._selection, o = Np(n.startContainer, n.startOffset, n.endContainer, n.endOffset, t, r);
    if (o === null) return;
    const [i, s] = o;
    this.anchor.set(i.key, i.offset, i.type, !0), this.focus.set(s.key, s.offset, s.type, !0), si(this);
  }
  clone() {
    const n = this.anchor, t = this.focus;
    return new Bn(Et(n.key, n.offset, n.type), Et(t.key, t.offset, t.type), this.format, this.style);
  }
  toggleFormat(n) {
    this.format = bi(this.format, n, null), this.dirty = !0;
  }
  setFormat(n) {
    this.format = n, this.dirty = !0;
  }
  setStyle(n) {
    this.style = n, this.dirty = !0;
  }
  hasFormat(n) {
    const t = Nn[n];
    return (this.format & t) !== 0;
  }
  insertRawText(n) {
    const t = n.split(/(\r?\n|\t)/), r = [], o = t.length;
    for (let i = 0; i < o; i++) {
      const s = t[i];
      s === `
` || s === `\r
` ? r.push(at()) : s === "	" ? r.push(Er()) : r.push(be(s));
    }
    this.insertNodes(r);
  }
  insertText(n) {
    const t = this.anchor, r = this.focus, o = this.format, i = this.style;
    let s = t, a = r;
    !this.isCollapsed() && r.isBefore(t) && (s = r, a = t), s.type === "element" && (function(m, b, y, v) {
      const _ = m.getNode(), S = _.getChildAtIndex(m.offset), C = be();
      if (C.setFormat(y), C.setStyle(v), go(S)) S.splice(0, 0, [C]);
      else {
        const k = we(_) ? me().append(C) : C;
        S === null ? _.append(k) : S.insertBefore(k);
      }
      m.is(b) && b.set(C.__key, 0, "text"), m.set(C.__key, 0, "text");
    })(s, a, o, i), a.type === "element" && $n(a, Qe(Vt(a, "next")));
    const l = s.offset;
    let c = a.offset;
    const u = this.getNodes(), d = u.length;
    let f = u[0];
    V(f) || z(26);
    const g = f.getTextContent().length, p = f.getParentOrThrow();
    let h = u[d - 1];
    if (d === 1 && a.type === "element" && (c = g, a.set(s.key, c, "text")), this.isCollapsed() && l === g && (Mt(f) || !f.canInsertTextAfter() || !p.canInsertTextAfter() && f.getNextSibling() === null)) {
      let m = f.getNextSibling();
      if (V(m) && m.canInsertTextBefore() && !Mt(m) || (m = be(), m.setFormat(o), m.setStyle(i), p.canInsertTextAfter() ? f.insertAfter(m) : p.insertAfter(m)), m.select(0, 0), f = m, n !== "") return void this.insertText(n);
    } else if (this.isCollapsed() && l === 0 && (Mt(f) || !f.canInsertTextBefore() || !p.canInsertTextBefore() && f.getPreviousSibling() === null)) {
      let m = f.getPreviousSibling();
      if (V(m) && !Mt(m) || (m = be(), m.setFormat(o), p.canInsertTextBefore() ? f.insertBefore(m) : p.insertBefore(m)), m.select(), f = m, n !== "") return void this.insertText(n);
    } else if (f.isSegmented() && l !== g) {
      const m = be(f.getTextContent());
      m.setFormat(o), f.replace(m), f = m;
    } else if (!this.isCollapsed() && n !== "") {
      const m = h.getParent();
      if (!p.canInsertTextBefore() || !p.canInsertTextAfter() || O(m) && (!m.canInsertTextBefore() || !m.canInsertTextAfter())) return this.insertText(""), Ep(this.anchor, this.focus, null), void this.insertText(n);
    }
    if (d === 1) {
      if (Sn(f)) {
        const v = be(n);
        return v.select(), void f.replace(v);
      }
      const m = f.getFormat(), b = f.getStyle();
      if (l !== c || m === o && b === i) {
        if (qi(f)) {
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
      const m = /* @__PURE__ */ new Set([...f.getParentKeys(), ...h.getParentKeys()]), b = O(f) ? f : f.getParentOrThrow();
      let y = O(h) ? h : h.getParentOrThrow(), v = h;
      if (!b.is(y) && y.isInline()) do
        v = y, y = y.getParentOrThrow();
      while (y.isInline());
      if (a.type === "text" && (c !== 0 || h.getTextContent() === "") || a.type === "element" && h.getIndexWithinParent() < c) if (V(h) && !Sn(h) && c !== h.getTextContentSize()) {
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
      const _ = y.getChildren(), S = new Set(u), C = b.is(y), k = b.isInline() && f.getNextSibling() === null ? b : f;
      for (let N = _.length - 1; N >= 0; N--) {
        const E = _[N];
        if (E.is(f) || O(E) && E.isParentOf(f)) break;
        E.isAttached() && (!S.has(E) || E.is(v) ? C || k.insertAfter(E, !1) : E.remove());
      }
      if (!C) {
        let N = y, E = null;
        for (; N !== null; ) {
          const R = N.getChildren(), T = R.length;
          (T === 0 || R[T - 1].is(E)) && (m.delete(N.__key), E = N), N = N.getParent();
        }
      }
      if (Sn(f)) if (l === g) f.select();
      else {
        const N = be(n);
        N.select(), f.replace(N);
      }
      else f = f.spliceText(l, g - l, n, !0), f.getTextContent() === "" ? f.remove() : f.isComposing() && this.anchor.type === "text" && (this.anchor.offset -= n.length);
      for (let N = 1; N < d; N++) {
        const E = u[N], R = E.__key;
        m.has(R) || E.remove();
      }
    }
  }
  removeText() {
    const n = G() === this;
    Ho(this, bC(Ou(this))), n && G() !== this && Fe(this);
  }
  formatText(n, t = null) {
    if (this.isCollapsed()) return this.toggleFormat(n), void Ae(null);
    const r = this.getNodes(), o = [];
    for (const _ of r) V(_) && o.push(_);
    const i = (_) => {
      r.forEach((S) => {
        if (O(S)) {
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
      if (Mt(g) || p === 0 && y === g.getTextContentSize()) g.setFormat(h);
      else {
        const _ = g.splitText(p, y), S = p === 0 ? _[0] : _[1];
        S.setFormat(h), u.type === "text" && u.set(S.__key, 0, "text"), d.type === "text" && d.set(S.__key, y - p, "text");
      }
      return void (this.format = h);
    }
    p === 0 || Mt(g) || ([, g] = g.splitText(p), p = 0), g.setFormat(h);
    const v = b.getFormatFlags(n, h);
    y > 0 && (y === b.getTextContentSize() || Mt(b) || ([b] = b.splitText(y)), b.setFormat(v));
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
    const t = (this.isBackward() ? this.focus : this.anchor).getNode(), r = et(t, Xe), o = n[n.length - 1];
    if (O(r) && "__language" in r) {
      if ("__language" in n[0]) this.insertText(n[0].getTextContent());
      else {
        const p = Ds(this);
        r.splice(p, 0, n), o.selectEnd();
      }
      return;
    }
    if (!n.some((p) => (O(p) || re(p)) && !p.isInline())) {
      O(r) || z(211, t.constructor.name, t.getType());
      const p = Ds(this);
      return r.splice(p, 0, n), void o.selectEnd();
    }
    const i = (function(p) {
      const h = me();
      let m = null;
      for (let b = 0; b < p.length; b++) {
        const y = p[b], v = en(y);
        if (v || re(y) && y.isInline() || O(y) && y.isInline() || V(y) || y.isParentRequired()) {
          if (m === null && (m = y.createParentElementNode(), h.append(m), v)) continue;
          m !== null && m.append(y);
        } else h.append(y), m = null;
      }
      return h;
    })(n), s = i.getLastDescendant(), a = i.getChildren(), l = !O(r) || !r.isEmpty() ? this.insertParagraph() : null, c = a[a.length - 1];
    let u = a[0];
    var d;
    O(d = u) && Xe(d) && !d.isEmpty() && O(r) && (!r.isEmpty() || r.canMergeWhenEmpty()) && (O(r) || z(211, t.constructor.name, t.getType()), r.append(...u.getChildren()), u = a[1]), u && (r === null && z(212, t.constructor.name, t.getType()), (function(p, h) {
      const m = h.getParentOrThrow().getLastChild();
      let b = h;
      const y = [h];
      for (; b !== m; ) b.getNextSibling() || z(140), b = b.getNextSibling(), y.push(b);
      let v = p;
      for (const _ of y) v = v.insertAfter(_);
    })(r, u));
    const f = et(s, Xe);
    l && O(f) && (l.canMergeWhenEmpty() || Xe(c)) && (f.append(...l.getChildren()), l.remove()), O(r) && r.isEmpty() && r.remove(), s.selectEnd();
    const g = O(r) ? r.getLastChild() : null;
    en(g) && f !== r && g.remove();
  }
  insertParagraph() {
    if (this.anchor.key === "root") {
      const s = me();
      return ye().splice(this.anchor.offset, 0, [s]), s.select(), s;
    }
    const n = Ds(this), t = et(this.anchor.getNode(), Xe);
    O(t) || z(213);
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
    const [i, s] = Fa(this), a = this.isBackward(), [l, c] = a ? [this.focus, this.anchor] : [this.anchor, this.focus], [u, d] = a ? [s, i] : [i, s];
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
    if (mu(this, n, t, r)) return;
    const o = n === "move", i = ce(), s = ht(tt(i));
    if (!s) return;
    const a = i._blockCursorElement, l = i._rootElement, c = this.focus.getNode();
    if (l === null || a === null || !O(c) || c.isInline() || c.canBeEmpty() || Ma(a, i, l), this.dirty) {
      let u = Fn(i, this.anchor.key), d = Fn(i, this.focus.key);
      this.anchor.type === "text" && (u = gr(u)), this.focus.type === "text" && (d = gr(d)), u && d && Ap(s, u, this.anchor.offset, d, this.focus.offset);
    }
    if ((function(u, d, f, g) {
      u.modify(d, f, g);
    })(s, n, t ? "backward" : "forward", r), s.rangeCount > 0) {
      const u = s.getRangeAt(0), d = this.anchor.getNode(), f = we(d) ? d : rC(d);
      if (this.applyDOMRange(u), this.dirty = !0, !o) {
        const g = this.getNodes(), p = [];
        let h = !1;
        for (let m = 0; m < g.length; m++) {
          const b = g[m];
          $a(b, f) ? p.push(b) : h = !0;
        }
        if (h && p.length > 0) if (t) {
          const m = p[0];
          O(m) ? m.selectStart() : m.getParentOrThrow().selectStart();
        } else {
          const m = p[p.length - 1];
          O(m) ? m.selectEnd() : m.getParentOrThrow().selectEnd();
        }
        s.anchorNode === u.startContainer && s.anchorOffset === u.startOffset || (function(m) {
          const b = m.focus, y = m.anchor, v = y.key, _ = y.offset, S = y.type;
          y.set(b.key, b.offset, b.type, !0), b.set(v, _, S, !0);
        })(this);
      }
    }
    r === "lineboundary" && mu(this, n, t, r, "decorators");
  }
  forwardDeletion(n, t, r) {
    if (!r && (n.type === "element" && O(t) && n.offset === t.getChildrenSize() || n.type === "text" && n.offset === t.getTextContentSize())) {
      const o = t.getParent(), i = t.getNextSibling() || (o === null ? null : o.getNextSibling());
      if (O(i) && i.isShadowRoot()) return !0;
    }
    return !1;
  }
  deleteCharacter(n) {
    const t = this.isCollapsed();
    if (this.isCollapsed()) {
      const r = this.anchor;
      let o = r.getNode();
      if (this.forwardDeletion(r, o, n)) return;
      const i = Gl(Vt(r, n ? "previous" : "next"));
      if (i.getTextSlices().every((a) => a === null || a.distance === 0)) {
        let a = { type: "initial" };
        for (const l of i.iterNodeCarets("shadowRoot")) if (Ct(l)) {
          if (!l.origin.isInline()) {
            if (l.origin.isShadowRoot()) {
              if (a.type === "merge-block") break;
              if (O(i.anchor.origin) && i.anchor.origin.isEmpty()) {
                const c = Qe(l);
                Ho(this, ln(c, c)), i.anchor.origin.remove();
              }
              return;
            }
            a.type !== "merge-next-block" && a.type !== "merge-block" || (a = { block: a.block, caret: l, type: "merge-block" });
          }
        } else {
          if (a.type === "merge-block") break;
          if (hr(l)) {
            if (O(l.origin)) {
              if (l.origin.isInline()) {
                if (!l.origin.isParentOf(i.anchor.origin)) break;
              } else a = { block: l.origin, type: "merge-next-block" };
              continue;
            }
            if (re(l.origin)) {
              if (!l.origin.isIsolated()) if (a.type === "merge-next-block" && (l.origin.isKeyboardSelectable() || !l.origin.isInline()) && O(i.anchor.origin) && i.anchor.origin.isEmpty()) {
                i.anchor.origin.remove();
                const c = Cl();
                c.add(l.origin.getKey()), Fe(c);
              } else l.origin.remove();
              return;
            }
            break;
          }
        }
        if (a.type === "merge-block") {
          const { caret: l, block: c } = a;
          return Ho(this, ln(!l.origin.isEmpty() && c.isEmpty() ? Hl(Te(c, l.direction)) : i.anchor, l)), this.removeText();
        }
      }
      const s = this.focus;
      if (this.modify("extend", n, "character"), this.isCollapsed()) {
        if (n && r.offset === 0 && uu(this, r.getNode())) return;
      } else {
        const a = s.type === "text" ? s.getNode() : null;
        if (o = r.type === "text" ? r.getNode() : null, a !== null && a.isSegmented()) {
          const l = s.offset, c = a.getTextContentSize();
          if (a.is(o) || n && l !== c || !n && l !== 0) return void du(a, n, l);
        } else if (o !== null && o.isSegmented()) {
          const l = r.offset, c = o.getTextContentSize();
          if (o.is(a) || n && l !== 0 || !n && l !== c) return void du(o, n, l);
        }
        (function(l, c) {
          const u = l.anchor, d = l.focus, f = u.getNode(), g = d.getNode();
          if (f === g && u.type === "text" && d.type === "text") {
            const p = u.offset, h = d.offset, m = p < h, b = m ? p : h, y = m ? h : p, v = y - 1;
            b !== v && (function(_) {
              return !(Hp(_) || BS(_));
            })(f.getTextContent().slice(b, y)) && (c ? d.set(d.key, v, d.type) : u.set(u.key, v, u.type));
          }
        })(this, n);
      }
    }
    if (this.removeText(), n && !t && this.isCollapsed() && this.anchor.type === "element" && this.anchor.offset === 0) {
      const r = this.anchor.getNode();
      r.isEmpty() && we(r.getParent()) && r.getPreviousSibling() === null && uu(this, r);
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
  return e instanceof Yi;
}
function cu(e) {
  const n = e.offset;
  if (e.type === "text") return n;
  const t = e.getNode();
  return n === t.getChildrenSize() ? t.getTextContent().length : 0;
}
function Fa(e) {
  const n = e.getStartEndPoints();
  if (n === null) return [0, 0];
  const [t, r] = n;
  return t.type === "element" && r.type === "element" && t.key === r.key && t.offset === r.offset ? [0, 0] : [cu(t), cu(r)];
}
function uu(e, n) {
  for (let t = n; t; t = t.getParent()) {
    if (O(t)) {
      if (t.collapseAtStart(e)) return !0;
      if (Me(t)) break;
    }
    if (t.getPreviousSibling()) break;
  }
  return !1;
}
const BS = (() => {
  try {
    const e = new RegExp("\\p{Emoji}", "u"), n = e.test.bind(e);
    if (n("❤️") && n("#️⃣") && n("👍")) return n;
  } catch {
  }
  return () => !1;
})();
function du(e, n, t) {
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
function fu(e, n, t, r) {
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
    if (o = nr(u), V(o)) i = nn(o, s ? "next" : "previous");
    else {
      let f = nr(e);
      if (f === null) return null;
      if (O(f)) {
        const g = r.getElementByKey(f.getKey());
        g === null && z(214), [f, i] = f.getDOMSlot(g).resolveChildIndex(f, g, e, n), O(f) || z(215), s && i >= f.getChildrenSize() && (i = Math.max(0, f.getChildrenSize() - 1));
        let h = f.getChildAtIndex(i);
        if (O(h) && (function(m, b, y) {
          const v = m.getParent();
          return y === null || v === null || !v.canBeEmpty() || v !== y.getNode();
        })(h, 0, t)) {
          const m = s ? h.getLastDescendant() : h.getFirstDescendant();
          m === null ? f = h : (h = m, f = O(h) ? h : h.getParentOrThrow()), i = 0;
        }
        V(h) ? (o = h, f = null, i = nn(h, s ? "next" : "previous")) : h !== f && s && !d && (O(f) || z(216), i = Math.min(f.getChildrenSize(), i + 1));
      } else {
        const g = f.getIndexWithinParent();
        i = n === 0 && re(f) && nr(e) === f ? g : g + 1, f = f.getParentOrThrow();
      }
      if (O(f)) return Et(f.__key, i, "element");
    }
  } else o = nr(e);
  return V(o) ? Et(o.__key, nn(o, i, "clamp"), "text") : null;
}
function gu(e, n, t) {
  const r = e.offset, o = e.getNode();
  if (r === 0) {
    const i = o.getPreviousSibling(), s = o.getParent();
    if (n) {
      if ((t || !n) && i === null && O(s) && s.isInline()) {
        const a = s.getPreviousSibling();
        V(a) && e.set(a.__key, a.getTextContent().length, "text");
      }
    } else O(i) && !t && i.isInline() ? e.set(i.__key, i.getChildrenSize(), "element") : V(i) && e.set(i.__key, i.getTextContent().length, "text");
  } else if (r === o.getTextContent().length) {
    const i = o.getNextSibling(), s = o.getParent();
    if (n && O(i) && i.isInline()) e.set(i.__key, 0, "element");
    else if ((t || n) && i === null && O(s) && s.isInline() && !s.canInsertTextAfter()) {
      const a = s.getNextSibling();
      V(a) && e.set(a.__key, 0, "text");
    }
  }
}
function Ep(e, n, t) {
  if (e.type === "text" && n.type === "text") {
    const r = e.isBefore(n), o = e.is(n);
    gu(e, r, o), gu(n, !r, o), o && n.set(e.key, e.offset, e.type);
    const i = ce();
    if (i.isComposing() && i._compositionKey !== e.key && L(t)) {
      const s = t.anchor, a = t.focus;
      e.set(s.key, s.offset, s.type, !0), n.set(a.key, a.offset, a.type, !0);
    }
  }
}
function Np(e, n, t, r, o, i) {
  if (e === null || t === null || !po(o, e, t)) return null;
  const s = fu(e, n, L(i) ? i.anchor : null, o);
  if (s === null) return null;
  const a = fu(t, r, L(i) ? i.focus : null, o);
  if (a === null) return null;
  if (s.type === "element" && a.type === "element") {
    const l = nr(e), c = nr(t);
    if (re(l) && re(c)) return null;
  }
  return Ep(s, a, i), [s, a];
}
function Pa(e) {
  return O(e) && !e.isInline();
}
function Rp(e, n, t, r, o, i) {
  const s = dn(), a = new Bn(Et(e, n, o), Et(t, r, i), 0, "");
  return a.dirty = !0, s._selection = a, a;
}
function Zi() {
  const e = Et("root", 0, "element"), n = Et("root", 0, "element");
  return new Bn(e, n, 0, "");
}
function Cl() {
  return new Yi(/* @__PURE__ */ new Set());
}
function kl(e, n, t, r) {
  const o = t._window;
  if (o === null) return null;
  const i = r || o.event, s = i ? i.type : void 0, a = s === "selectionchange", l = !pa && (a || s === "beforeinput" || s === "compositionstart" || s === "compositionend" || s === "click" && i && i.detail === 3 || s === "drop" || s === void 0);
  let c, u, d, f;
  if (L(e) && !l) return e.clone();
  if (n === null) return null;
  if (c = n.anchorNode, u = n.focusNode, d = n.anchorOffset, f = n.focusOffset, (a || s === void 0) && L(e) && !po(t, c, u)) return e.clone();
  const g = Np(c, d, u, f, t, e);
  if (g === null) return null;
  const [p, h] = g;
  return new Bn(p, h, L(e) ? e.format : 0, L(e) ? e.style : "");
}
function G() {
  return dn()._selection;
}
function Nr() {
  return ce()._editorState._selection;
}
function mi(e, n, t, r = 1) {
  const o = e.anchor, i = e.focus, s = o.getNode(), a = i.getNode();
  if (!n.is(s) && !n.is(a)) return;
  const l = n.__key;
  if (e.isCollapsed()) {
    const c = o.offset;
    if (t <= c && r > 0 || t < c && r < 0) {
      const u = Math.max(0, c + r);
      o.set(l, u, "element"), i.set(l, u, "element"), pu(e);
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
  pu(e);
}
function pu(e) {
  const n = e.anchor, t = n.offset, r = e.focus, o = r.offset, i = n.getNode(), s = r.getNode();
  if (e.isCollapsed()) {
    if (!O(i)) return;
    const a = i.getChildrenSize(), l = t >= a, c = l ? i.getChildAtIndex(a - 1) : i.getChildAtIndex(t);
    if (V(c)) {
      let u = 0;
      l && (u = c.getTextContentSize()), n.set(c.__key, u, "text"), r.set(c.__key, u, "text");
    }
    return;
  }
  if (O(i)) {
    const a = i.getChildrenSize(), l = t >= a, c = l ? i.getChildAtIndex(a - 1) : i.getChildAtIndex(t);
    if (V(c)) {
      let u = 0;
      l && (u = c.getTextContentSize()), n.set(c.__key, u, "text");
    }
  }
  if (O(s)) {
    const a = s.getChildrenSize(), l = o >= a, c = l ? s.getChildAtIndex(a - 1) : s.getChildAtIndex(o);
    if (V(c)) {
      let u = 0;
      l && (u = c.getTextContentSize()), r.set(c.__key, u, "text");
    }
  }
}
function yi(e, n, t, r, o) {
  let i = null, s = 0, a = null;
  r !== null ? (i = r.__key, V(r) ? (s = r.getTextContentSize(), a = "text") : O(r) && (s = r.getChildrenSize(), a = "element")) : o !== null && (i = o.__key, V(o) ? a = "text" : O(o) && (a = "element")), i !== null && a !== null ? e.set(i, s, a) : (s = n.getIndexWithinParent(), s === -1 && (s = t.getChildrenSize()), e.set(t.__key, s, "element"));
}
function hu(e, n, t, r, o) {
  e.type === "text" ? e.set(t, e.offset + (n ? 0 : o), "text") : e.offset > r.getIndexWithinParent() && e.set(e.key, e.offset - 1, "element");
}
function Ap(e, n, t, r, o) {
  try {
    e.setBaseAndExtent(n, t, r, o);
  } catch {
  }
}
function VS(e, n, t, r, o, i, s) {
  const a = r.anchorNode, l = r.focusNode, c = r.anchorOffset, u = r.focusOffset, d = document.activeElement;
  if (o.has(Sp) && d !== i || d !== null && Pl(d)) return;
  if (!L(n)) return void (e !== null && po(t, a, l) && r.removeAllRanges());
  const f = n.anchor, g = n.focus, p = f.key, h = g.key, m = Fn(t, p), b = Fn(t, h), y = f.offset, v = g.offset, _ = n.format, S = n.style, C = n.isCollapsed();
  let k = m, N = b, E = !1;
  if (f.type === "text") {
    k = gr(m);
    const B = f.getNode();
    E = B.getFormat() !== _ || B.getStyle() !== S;
  } else L(e) && e.anchor.type === "text" && (E = !0);
  var R, T, A, D, $;
  if (g.type === "text" && (N = gr(b)), k !== null && N !== null && (C && (e === null || E || L(e) && (e.format !== _ || e.style !== S)) && (R = _, T = S, A = y, D = p, $ = performance.now(), mp = [R, T, A, D, $]), c !== y || u !== v || a !== k || l !== N || r.type === "Range" && C || (d !== null && i.contains(d) || o.has(PS) || i.focus({ preventScroll: !0 }), f.type === "element"))) {
    if (Ap(r, k, y, N, v), !o.has(TS) && n.isCollapsed() && i !== null && i === document.activeElement) {
      const B = L(n) && n.anchor.type === "element" ? k.childNodes[y] || null : r.rangeCount > 0 ? r.getRangeAt(0) : null;
      if (B !== null) {
        let H;
        if (B instanceof Text) {
          const U = document.createRange();
          U.selectNode(B), H = U.getBoundingClientRect();
        } else H = B.getBoundingClientRect();
        (function(U, j, Y) {
          const te = Yp(Y), ie = Ll(te);
          if (te === null || ie === null) return;
          let { top: he, bottom: ze } = j, Se = 0, De = 0, Ce = Y;
          for (; Ce !== null; ) {
            const Pe = Ce === te.body;
            if (Pe) Se = 0, De = tt(U).innerHeight;
            else {
              const Ve = Ce.getBoundingClientRect();
              Se = Ve.top, De = Ve.bottom;
            }
            let Be = 0;
            if (he < Se ? Be = -(Se - he) : ze > De && (Be = ze - De), Be !== 0) if (Pe) ie.scrollBy(0, Be);
            else {
              const Ve = Ce.scrollTop;
              Ce.scrollTop += Be;
              const At = Ce.scrollTop - Ve;
              he -= At, ze -= At;
            }
            if (Pe) break;
            Ce = ho(Ce);
          }
        })(t, H, i);
      }
    }
    Ea = !0;
  }
}
function jS(e) {
  let n = G() || Nr();
  n === null && (n = ye().selectEnd()), n.insertNodes(e);
}
function Ds(e) {
  let n = e;
  e.isCollapsed() || n.removeText();
  const t = G();
  L(t) && (n = t), L(n) || z(161);
  const r = n.anchor;
  let o = r.getNode(), i = r.offset;
  for (; !Xe(o); ) {
    const s = o;
    if ([o, i] = US(o, i), s.is(o)) break;
  }
  return i;
}
function US(e, n) {
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
  if (!O(e) || n === 0) return [t, e.getIndexWithinParent()];
  const r = e.getChildAtIndex(n);
  if (r) {
    const o = new Bn(Et(e.__key, n, "element"), Et(e.__key, n, "element"), 0, ""), i = e.insertNewAfter(o);
    i && i.append(r, ...r.getNextSiblings());
  }
  return [t, e.getIndexWithinParent() + 1];
}
function mu(e, n, t, r, o = "decorators-and-blocks") {
  if (n === "move" && r === "character" && !e.isCollapsed()) {
    const [u, d] = t === e.isBackward() ? [e.focus, e.anchor] : [e.anchor, e.focus];
    return d.set(u.key, u.offset, u.type), !0;
  }
  const i = Vt(e.focus, t ? "previous" : "next"), s = r === "lineboundary", a = n === "move";
  let l = i, c = o === "decorators-and-blocks";
  if (!nh(l)) {
    for (const u of l) {
      c = !1;
      const { origin: d } = u;
      if (!re(d) || d.isIsolated() || (l = u, !s || !d.isInline())) break;
    }
    if (c) for (const u of Gl(i).iterNodeCarets(n === "extend" ? "shadowRoot" : "root")) {
      if (Ct(u)) u.origin.isInline() || (l = u);
      else {
        if (O(u.origin)) continue;
        re(u.origin) && !u.origin.isInline() && (l = u);
      }
      break;
    }
  }
  if (l === i) return !1;
  if (a && !s && re(l.origin) && l.origin.isKeyboardSelectable()) {
    const u = Cl();
    return u.add(l.origin.getKey()), Fe(u), !0;
  }
  return l = Qe(l), a && $n(e.anchor, l), $n(e.focus, l), c || !s;
}
let Ne = null, Re = null, je = !1, Ls = !1, Uo = 0;
const yu = { characterData: !0, childList: !0, subtree: !0 };
function uo() {
  return je || Ne !== null && Ne._readOnly;
}
function Ee() {
  je && z(13);
}
function Tp() {
  Uo > 99 && z(14);
}
function dn() {
  return Ne === null && z(195, Fp()), Ne;
}
function ce() {
  return Re === null && z(196, Fp()), Re;
}
function Fp() {
  let e = 0;
  const n = /* @__PURE__ */ new Set(), t = Tn.version;
  if (typeof window < "u") for (const o of document.querySelectorAll("[contenteditable]")) {
    const i = Xi(o);
    if (Il(i)) e++;
    else if (i) {
      let s = String(i.constructor.version || "<0.17.1");
      s === t && (s += " (separately built, likely a bundler configuration issue)"), n.add(s);
    }
  }
  let r = ` Detected on the page: ${e} compatible editor(s) with version ${t}`;
  return n.size && (r += ` and incompatible editors with versions ${Array.from(n).join(", ")}`), r;
}
function GS() {
  return Re;
}
function bu(e, n, t) {
  const r = n.__type, o = Dp(e, r);
  let i = t.get(r);
  i === void 0 && (i = Array.from(o.transforms), t.set(r, i));
  const s = i.length;
  for (let a = 0; a < s && (i[a](n), n.isAttached()); a++) ;
}
function vu(e, n) {
  return e !== void 0 && e.__key !== n && e.isAttached();
}
function Pp(e, n) {
  if (!n) return;
  const t = e._updateTags;
  let r = n;
  Array.isArray(n) || (r = [n]);
  for (const o of r) t.add(o);
}
function HS(e) {
  return El(e, ce()._nodes);
}
function El(e, n) {
  const t = e.type, r = n.get(t);
  r === void 0 && z(17, t);
  const o = r.klass;
  e.type !== o.getType() && z(18, o.name);
  const i = o.importJSON(e), s = e.children;
  if (O(i) && Array.isArray(s)) for (let a = 0; a < s.length; a++) {
    const l = El(s[a], n);
    i.append(l);
  }
  return i;
}
function xu(e, n, t) {
  const r = Ne, o = je, i = Re;
  Ne = n, je = !0, Re = e;
  try {
    return t();
  } finally {
    Ne = r, je = o, Re = i;
  }
}
function Lt(e, n) {
  const t = e._pendingEditorState, r = e._rootElement, o = e._headless || r === null;
  if (t === null) return;
  const i = e._editorState, s = i._selection, a = t._selection, l = e._dirtyType !== 0, c = Ne, u = je, d = Re, f = e._updating, g = e._observer;
  let p = null;
  if (e._pendingEditorState = null, e._editorState = t, !o && l && g !== null) {
    Re = e, Ne = t, je = !1, e._updating = !0;
    try {
      const C = e._dirtyType, k = e._dirtyElements, N = e._dirtyLeaves;
      g.disconnect(), p = cS(i, t, e, C, k, N);
    } catch (C) {
      if (C instanceof Error && e._onError(C), Ls) throw C;
      return $p(e, null, r, t), Vg(e), e._dirtyType = 2, Ls = !0, Lt(e, i), void (Ls = !1);
    } finally {
      g.observe(r, yu), e._updating = f, Ne = c, je = u, Re = d;
    }
  }
  t._readOnly || (t._readOnly = !0);
  const h = e._dirtyLeaves, m = e._dirtyElements, b = e._normalizedNodes, y = e._updateTags, v = e._deferred;
  l && (e._dirtyType = 0, e._cloneNotNeeded.clear(), e._dirtyLeaves = /* @__PURE__ */ new Set(), e._dirtyElements = /* @__PURE__ */ new Map(), e._normalizedNodes = /* @__PURE__ */ new Set(), e._updateTags = /* @__PURE__ */ new Set()), (function(C, k) {
    const N = C._decorators;
    let E = C._pendingDecorators || N;
    const R = k._nodeMap;
    let T;
    for (T in E) R.has(T) || (E === N && (E = Up(C)), delete E[T]);
  })(e, t);
  const _ = o ? null : ht(tt(e));
  if (e._editable && _ !== null && (l || a === null || a.dirty || !a.is(s)) && r !== null && !y.has(FS)) {
    Re = e, Ne = t;
    try {
      if (g !== null && g.disconnect(), l || a === null || a.dirty) {
        const C = e._blockCursorElement;
        C !== null && Ma(C, e, r), VS(s, a, e, _, y, r);
      }
      (function(C, k, N) {
        let E = C._blockCursorElement;
        if (L(N) && N.isCollapsed() && N.anchor.type === "element" && k.contains(document.activeElement)) {
          const R = N.anchor, T = R.getNode(), A = R.offset;
          let D = !1, $ = null;
          if (A === T.getChildrenSize())
            Bs(T.getChildAtIndex(A - 1)) && (D = !0);
          else {
            const B = T.getChildAtIndex(A);
            if (B !== null && Bs(B)) {
              const H = B.getPreviousSibling();
              (H === null || Bs(H)) && (D = !0, $ = C.getElementByKey(B.__key));
            }
          }
          if (D) {
            const B = C.getElementByKey(T.__key);
            return E === null && (C._blockCursorElement = E = (function(H) {
              const U = H.theme, j = document.createElement("div");
              j.contentEditable = "false", j.setAttribute("data-lexical-cursor", "true");
              let Y = U.blockCursor;
              if (Y !== void 0) {
                if (typeof Y == "string") {
                  const te = Mg(Y);
                  Y = U.blockCursor = te;
                }
                Y !== void 0 && j.classList.add(...Y);
              }
              return j;
            })(C._config)), k.style.caretColor = "transparent", void ($ === null ? B.appendChild(E) : B.insertBefore(E, $));
          }
        }
        E !== null && Ma(E, C, k);
      })(e, r, a);
    } finally {
      g !== null && g.observe(r, yu), Re = d, Ne = c;
    }
  }
  p !== null && (function(C, k, N, E, R) {
    const T = Array.from(C._listeners.mutation), A = T.length;
    for (let D = 0; D < A; D++) {
      const [$, B] = T[D];
      for (const H of B) {
        const U = k.get(H);
        U !== void 0 && $(U, { dirtyLeaves: E, prevEditorState: R, updateTags: N });
      }
    }
  })(e, p, y, h, i), L(a) || a === null || s !== null && s.is(a) || e.dispatchCommand(Zg, void 0);
  const S = e._pendingDecorators;
  S !== null && (e._decorators = S, e._pendingDecorators = null, Kr("decorator", e, !0, S)), (function(C, k, N) {
    const E = Cu(k), R = Cu(N);
    E !== R && Kr("textcontent", C, !0, R);
  })(e, n || i, t), Kr("update", e, !0, { dirtyElements: m, dirtyLeaves: h, editorState: t, mutatedNodes: p, normalizedNodes: b, prevEditorState: n || i, tags: y }), (function(C, k) {
    if (C._deferred = [], k.length !== 0) {
      const N = C._updating;
      C._updating = !0;
      try {
        for (let E = 0; E < k.length; E++) k[E]();
      } finally {
        C._updating = N;
      }
    }
  })(e, v), (function(C) {
    const k = C._updates;
    if (k.length !== 0) {
      const N = k.shift();
      if (N) {
        const [E, R] = N;
        Ji(C, E, R);
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
function wu(e, n) {
  const t = e._updates;
  let r = n || !1;
  for (; t.length !== 0; ) {
    const o = t.shift();
    if (o) {
      const [i, s] = o, a = e._pendingEditorState;
      let l;
      s !== void 0 && (l = s.onUpdate, s.skipTransforms && (r = !0), s.discrete && (a === null && z(191), a._flushSync = !0), l && e._deferred.push(l), Pp(e, s.tag)), a == null ? Ji(e, i, s) : i();
    }
  }
  return r;
}
function Ji(e, n, t) {
  const r = e._updateTags;
  let o, i = !1, s = !1;
  t !== void 0 && (o = t.onUpdate, Pp(e, t.tag), i = t.skipTransforms || !1, s = t.discrete || !1), o && e._deferred.push(o);
  const a = e._editorState;
  let l = e._pendingEditorState, c = !1;
  (l === null || l._readOnly) && (l = e._pendingEditorState = Ip(l || a), c = !0), l._flushSync = s;
  const u = Ne, d = je, f = Re, g = e._updating;
  Ne = l, je = !1, e._updating = !0, Re = e;
  const p = e._headless || e.getRootElement() === null;
  Tl(null);
  try {
    c && (p ? a._selection !== null && (l._selection = a._selection.clone()) : l._selection = (function(y, v) {
      const _ = y.getEditorState()._selection, S = ht(tt(y));
      return L(_) || _ == null ? kl(_, S, y, v) : _.clone();
    })(e, t && t.event || null));
    const m = e._compositionKey;
    n(), i = wu(e, i), (function(y, v) {
      const _ = v.getEditorState()._selection, S = y._selection;
      if (L(S)) {
        const C = S.anchor, k = S.focus;
        let N;
        if (C.type === "text" && (N = C.getNode(), N.selectionTransform(_, S)), k.type === "text") {
          const E = k.getNode();
          N !== E && E.selectionTransform(_, S);
        }
      }
    })(l, e), e._dirtyType !== 0 && (i ? (function(y, v) {
      const _ = v._dirtyLeaves, S = y._nodeMap;
      for (const C of _) {
        const k = S.get(C);
        V(k) && k.isAttached() && k.isSimpleText() && !k.isUnmergeable() && Jc(k);
      }
    })(l, e) : (function(y, v) {
      const _ = v._dirtyLeaves, S = v._dirtyElements, C = y._nodeMap, k = Xt(), N = /* @__PURE__ */ new Map();
      let E = _, R = E.size, T = S, A = T.size;
      for (; R > 0 || A > 0; ) {
        if (R > 0) {
          v._dirtyLeaves = /* @__PURE__ */ new Set();
          for (const D of E) {
            const $ = C.get(D);
            V($) && $.isAttached() && $.isSimpleText() && !$.isUnmergeable() && Jc($), $ !== void 0 && vu($, k) && bu(v, $, N), _.add(D);
          }
          if (E = v._dirtyLeaves, R = E.size, R > 0) {
            Uo++;
            continue;
          }
        }
        v._dirtyLeaves = /* @__PURE__ */ new Set(), v._dirtyElements = /* @__PURE__ */ new Map(), T.delete("root") && T.set("root", !0);
        for (const D of T) {
          const $ = D[0], B = D[1];
          if (S.set($, B), !B) continue;
          const H = C.get($);
          H !== void 0 && vu(H, k) && bu(v, H, N);
        }
        E = v._dirtyLeaves, R = E.size, T = v._dirtyElements, A = T.size, Uo++;
      }
      v._dirtyLeaves = _, v._dirtyElements = S;
    })(l, e), wu(e), (function(y, v, _, S) {
      const C = y._nodeMap, k = v._nodeMap, N = [];
      for (const [E] of S) {
        const R = k.get(E);
        R !== void 0 && (R.isAttached() || (O(R) && Lg(R, E, C, k, N, S), C.has(E) || S.delete(E), N.push(E)));
      }
      for (const E of N) k.delete(E);
      for (const E of _) {
        const R = k.get(E);
        R === void 0 || R.isAttached() || (C.has(E) || _.delete(E), k.delete(E));
      }
    })(a, l, e._dirtyLeaves, e._dirtyElements)), m !== e._compositionKey && (l._flushSync = !0);
    const b = l._selection;
    if (L(b)) {
      const y = l._nodeMap, v = b.anchor.key, _ = b.focus.key;
      y.get(v) !== void 0 && y.get(_) !== void 0 || z(19);
    } else Oe(b) && b._nodes.size === 0 && (l._selection = null);
  } catch (m) {
    return m instanceof Error && e._onError(m), e._pendingEditorState = a, e._dirtyType = 2, e._cloneNotNeeded.clear(), e._dirtyLeaves = /* @__PURE__ */ new Set(), e._dirtyElements.clear(), void Lt(e);
  } finally {
    Ne = u, je = d, Re = f, e._updating = g, Uo = 0;
  }
  e._dirtyType !== 0 || e._deferred.length > 0 || (function(m, b) {
    const y = b.getEditorState()._selection, v = m._selection;
    if (v !== null) {
      if (v.dirty || !v.is(y)) return !0;
    } else if (y !== null) return !0;
    return !1;
  })(l, e) ? l._flushSync ? (l._flushSync = !1, Lt(e)) : c && JS(() => {
    Lt(e);
  }) : (l._flushSync = !1, c && (r.clear(), e._deferred = [], e._pendingEditorState = null));
}
function St(e, n, t) {
  Re === e && t === void 0 ? n() : Ji(e, n, t);
}
class qr {
  constructor(n, t, r) {
    I(this, "element");
    I(this, "before");
    I(this, "after");
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
      const t = n === "decorator" && (co || Sr || lo);
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
    const i = _u(t, r);
    i.push(o);
    const s = _u(t, this.element);
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
function _u(e, n) {
  const t = [];
  let r = n;
  for (; r !== e && r !== null; r = r.parentNode) {
    let o = 0;
    for (let i = r.previousSibling; i !== null; i = i.previousSibling) o++;
    t.push(o);
  }
  return r !== e && z(225), t.reverse();
}
class Ze extends st {
  constructor(t) {
    super(t);
    I(this, "__first");
    I(this, "__last");
    I(this, "__size");
    I(this, "__format");
    I(this, "__style");
    I(this, "__indent");
    I(this, "__dir");
    I(this, "__textFormat");
    I(this, "__textStyle");
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
    return Y_[t] || "";
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
    const t = ce()._dirtyElements;
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
      if (V(r) && t.push(r), O(r)) {
        const o = r.getAllTextNodes();
        t.push(...o);
      }
      r = r.getNextSibling();
    }
    return t;
  }
  getFirstDescendant() {
    let t = this.getFirstChild();
    for (; O(t); ) {
      const r = t.getFirstChild();
      if (r === null) break;
      t = r;
    }
    return t;
  }
  getLastDescendant() {
    let t = this.getLastChild();
    for (; O(t); ) {
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
      return O(s) && s.getLastDescendant() || s || null;
    }
    const i = r[t];
    return O(i) && i.getFirstDescendant() || i || null;
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
      t += s.getTextContent(), O(s) && i !== o - 1 && !s.isInline() && (t += an);
    }
    return t;
  }
  getTextContentSize() {
    let t = 0;
    const r = this.getChildren(), o = r.length;
    for (let i = 0; i < o; i++) {
      const s = r[i];
      t += s.getTextContentSize(), O(s) && i !== o - 1 && !s.isInline() && (t += 2);
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
      const r = Uc[t];
      return (this.getFormat() & r) !== 0;
    }
    return !1;
  }
  hasTextFormat(t) {
    const r = Nn[t];
    return (this.getTextFormat() & r) !== 0;
  }
  getFormatFlags(t, r) {
    return bi(this.getLatest().__textFormat, t, r);
  }
  getTextStyle() {
    return this.getLatest().__textStyle;
  }
  select(t, r) {
    Ee();
    const o = G();
    let i = t, s = r;
    const a = this.getChildrenSize();
    if (!this.canBeEmpty()) {
      if (t === 0 && r === 0) {
        const c = this.getFirstChild();
        if (V(c) || O(c)) return c.select(0, 0);
      } else if (!(t !== void 0 && t !== a || r !== void 0 && r !== a)) {
        const c = this.getLastChild();
        if (V(c) || O(c)) return c.select();
      }
    }
    i === void 0 && (i = a), s === void 0 && (s = a);
    const l = this.__key;
    return L(o) ? (o.anchor.set(l, i, "element"), o.focus.set(l, s, "element"), o.dirty = !0, o) : Rp(l, i, l, s, "element", "element");
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
    return this.getWritable().__format = t !== "" ? Uc[t] : 0, this;
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
    pi(this) && z(324, this.__key, this.__type);
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
        Cn(p.getWritable()), c.push(b), p = m;
      }
    }
    let g = d;
    for (const p of o) {
      g !== null && p.is(g) && (d = g = g.getPreviousSibling());
      const h = p.getWritable();
      h.__parent === a && f--, Cn(h);
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
        Su(b, h, m) && yi(b, b.getNode(), this, d, u), Su(y, h, m) && yi(y, y.getNode(), this, d, u), f !== 0 || this.canBeEmpty() || Me(this) || this.remove();
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
function O(e) {
  return e instanceof Ze;
}
function Su(e, n, t) {
  let r = e.getNode();
  for (; r; ) {
    const o = r.__key;
    if (n.has(o) && !t.has(o)) return !0;
    r = r.getParent();
  }
  return !1;
}
class Nl extends st {
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
function re(e) {
  return e instanceof Nl;
}
class Rr extends Ze {
  constructor() {
    super("root");
    I(this, "__cachedText");
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
    return !uo() && ce()._dirtyType !== 0 || t === null ? super.getTextContent() : t;
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
    for (const i of o) O(i) || re(i) || z(282);
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
function Ip(e) {
  return new fo(new Map(e._nodeMap));
}
function Rl() {
  return new fo(/* @__PURE__ */ new Map([["root", new Rr()]]));
}
function Op(e) {
  const n = e.exportJSON(), t = e.constructor;
  if (n.type !== t.getType() && z(130, t.name), O(e)) {
    const r = n.children;
    Array.isArray(r) || z(59, t.name);
    const o = e.getChildren();
    for (let i = 0; i < o.length; i++) {
      const s = Op(o[i]);
      r.push(s);
    }
  }
  return n;
}
function WS(e) {
  return e instanceof fo;
}
class fo {
  constructor(n, t) {
    I(this, "_nodeMap");
    I(this, "_selection");
    I(this, "_flushSync");
    I(this, "_readOnly");
    this._nodeMap = n, this._selection = t || null, this._flushSync = !1, this._readOnly = !1;
  }
  isEmpty() {
    return this._nodeMap.size === 1 && this._selection === null;
  }
  read(n, t) {
    return xu(t && t.editor || null, this, n);
  }
  clone(n) {
    const t = new fo(this._nodeMap, n === void 0 ? this._selection : n);
    return t._readOnly = !0, t;
  }
  toJSON() {
    return xu(null, this, () => ({ root: Op(ye()) }));
  }
}
class Al extends Ze {
  static getType() {
    return "artificial";
  }
  createDOM(n) {
    return document.createElement("div");
  }
}
class Ar extends Ze {
  static getType() {
    return "paragraph";
  }
  static clone(n) {
    return new Ar(n.__key);
  }
  createDOM(n) {
    const t = document.createElement("p"), r = lr(n.theme, "paragraph");
    return r !== void 0 && t.classList.add(...r), t;
  }
  updateDOM(n, t, r) {
    return !1;
  }
  static importDOM() {
    return { p: (n) => ({ conversion: KS, priority: 0 }) };
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
function KS(e) {
  const n = me();
  return e.style && (n.setFormat(e.style.textAlign), zl(e, n)), { node: n };
}
function me() {
  return nt(new Ar());
}
function go(e) {
  return e instanceof Ar;
}
const ee = 0, er = 1, qS = 4;
function $p(e, n, t, r) {
  const o = e._keyToDOMMap;
  o.clear(), e._editorState = Rl(), e._pendingEditorState = r, e._compositionKey = null, e._dirtyType = 0, e._cloneNotNeeded.clear(), e._dirtyLeaves = /* @__PURE__ */ new Set(), e._dirtyElements.clear(), e._normalizedNodes = /* @__PURE__ */ new Set(), e._updateTags = /* @__PURE__ */ new Set(), e._updates = [], e._blockCursorElement = null;
  const i = e._observer;
  i !== null && (i.disconnect(), e._observer = null), n !== null && (n.textContent = ""), t !== null && (t.textContent = "", o.set("root", t));
}
function YS(e) {
  const n = /* @__PURE__ */ new Set(), t = /* @__PURE__ */ new Set();
  let r = e;
  for (; r; ) {
    const { ownNodeConfig: o } = ns(r), i = r.transform;
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
      r = s.prototype instanceof st && s !== st ? s : void 0;
    }
  }
  return n;
}
function Mp(e) {
  const n = e || {}, t = GS(), r = n.theme || {}, o = e === void 0 ? t : n.parentEditor || null, i = n.disableEvents || !1, s = Rl(), a = n.namespace || (o !== null ? o._config.namespace : Wp()), l = n.editorState, c = [Rr, Wt, Cr, kr, Ar, Al, ...n.nodes || []], { onError: u, html: d } = n, f = n.editable === void 0 || n.editable;
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
      ns(m);
      const v = m.getType(), _ = YS(m);
      g.set(v, { exportDOM: d && d.export ? d.export.get(m) : void 0, klass: m, replace: b, replaceWithKlass: y, sharedNodeState: oS(c[h]), transforms: _ });
    }
  }
  const p = new Tn(s, o, g, { disableEvents: i, namespace: a, theme: r }, u || console.error, (function(h, m) {
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
    h.registerCommand(Jg, _S, ee), h.registerCommand(Xg, SS, ee), h.registerCommand(Qg, CS, ee), h.registerCommand(ep, kS, ee), h.registerCommand(tp, ES, ee);
  })(p), p;
}
class Tn {
  constructor(n, t, r, o, i, s, a, l) {
    I(this, "_headless");
    I(this, "_parentEditor");
    I(this, "_rootElement");
    I(this, "_editorState");
    I(this, "_pendingEditorState");
    I(this, "_compositionKey");
    I(this, "_deferred");
    I(this, "_keyToDOMMap");
    I(this, "_updates");
    I(this, "_updating");
    I(this, "_listeners");
    I(this, "_commands");
    I(this, "_nodes");
    I(this, "_decorators");
    I(this, "_pendingDecorators");
    I(this, "_config");
    I(this, "_dirtyType");
    I(this, "_cloneNotNeeded");
    I(this, "_dirtyLeaves");
    I(this, "_dirtyElements");
    I(this, "_normalizedNodes");
    I(this, "_updateTags");
    I(this, "_observer");
    I(this, "_key");
    I(this, "_onError");
    I(this, "_htmlConversions");
    I(this, "_window");
    I(this, "_editable");
    I(this, "_blockCursorElement");
    I(this, "_createEditorArgs");
    this._createEditorArgs = l, this._parentEditor = t, this._rootElement = null, this._editorState = n, this._pendingEditorState = null, this._compositionKey = null, this._deferred = [], this._keyToDOMMap = /* @__PURE__ */ new Map(), this._updates = [], this._updating = !1, this._listeners = { decorator: /* @__PURE__ */ new Set(), editable: /* @__PURE__ */ new Set(), mutation: /* @__PURE__ */ new Map(), root: /* @__PURE__ */ new Set(), textcontent: /* @__PURE__ */ new Set(), update: /* @__PURE__ */ new Set() }, this._commands = /* @__PURE__ */ new Map(), this._config = o, this._nodes = r, this._decorators = {}, this._pendingDecorators = null, this._dirtyType = 0, this._cloneNotNeeded = /* @__PURE__ */ new Set(), this._dirtyLeaves = /* @__PURE__ */ new Set(), this._dirtyElements = /* @__PURE__ */ new Map(), this._normalizedNodes = /* @__PURE__ */ new Set(), this._updateTags = /* @__PURE__ */ new Set(), this._observer = null, this._key = Wp(), this._onError = i, this._htmlConversions = s, this._editable = a, this._headless = t !== null && t._headless, this._window = null, this._blockCursorElement = null;
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
    const r = this._editorState, o = Fu(r).get(t.getType());
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
      const l = Fu(s.getEditorState()), c = [];
      for (const u of a) {
        const d = l.get(u);
        d && c.push(d);
      }
      c.length !== 0 && s.update(() => {
        for (const u of c) for (const d of u.keys()) {
          const f = xe(d);
          f && f.markDirty();
        }
      }, s._pendingEditorState === null ? { tag: ar } : void 0);
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
    return W(this, n, t);
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
      const r = lr(this._config.theme, "root"), o = this._pendingEditorState || this._editorState;
      if (this._rootElement = n, $p(this, t, n, o), t !== null && (this._config.disableEvents || NS(t), r != null && t.classList.remove(...r)), n !== null) {
        const i = Ll(n), s = n.style;
        s.userSelect = "text", s.whiteSpace = "pre-wrap", s.wordBreak = "break-word", n.setAttribute("data-lexical-editor", "true"), this._window = i, this._dirtyType = 2, Vg(this), this._updateTags.add(ar), Lt(this), this._config.disableEvents || (function(a, l) {
          const c = a.ownerDocument;
          ka.set(a, c);
          const u = fi.get(c) ?? 0;
          u < 1 && c.addEventListener("selectionchange", wp), fi.set(c, u + 1), a.__lexicalEditor = l;
          const d = xp(a);
          for (let f = 0; f < Ca.length; f++) {
            const [g, p] = Ca[f], h = typeof p == "function" ? (m) => {
              ou(m) || (ru(m), (l.isEditable() || g === "click") && p(m, l));
            } : (m) => {
              if (ou(m)) return;
              ru(m);
              const b = l.isEditable();
              switch (g) {
                case "cut":
                  return b && W(l, _l, m);
                case "copy":
                  return W(l, Ki, m);
                case "paste":
                  return b && W(l, vl, m);
                case "dragstart":
                  return b && W(l, fp, m);
                case "dragover":
                  return b && W(l, gp, m);
                case "dragend":
                  return b && W(l, mS, m);
                case "focus":
                  return b && W(l, vS, m);
                case "blur":
                  return b && W(l, xS, m);
                case "drop":
                  return b && W(l, dp, m);
              }
            };
            a.addEventListener(g, h), d.push(() => {
              a.removeEventListener(g, h);
            });
          }
        })(n, this), r != null && n.classList.add(...r);
      } else this._window = null, this._updateTags.add(ar), Lt(this);
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
    r._readOnly && (r = Ip(n), r._selection = n._selection ? n._selection.clone() : null), Bg(this);
    const o = this._pendingEditorState, i = this._updateTags, s = t !== void 0 ? t.tag : null;
    o === null || o.isEmpty() || (s != null && i.add(s), Lt(this)), this._pendingEditorState = r, this._dirtyType = 2, this._dirtyElements.set("root", !1), this._compositionKey = null, s != null && i.add(s), this._updating || Lt(this);
  }
  parseEditorState(n, t) {
    return (function(r, o, i) {
      const s = Rl(), a = Ne, l = je, c = Re, u = o._dirtyElements, d = o._dirtyLeaves, f = o._cloneNotNeeded, g = o._dirtyType;
      o._dirtyElements = /* @__PURE__ */ new Map(), o._dirtyLeaves = /* @__PURE__ */ new Set(), o._cloneNotNeeded = /* @__PURE__ */ new Set(), o._dirtyType = 0, Ne = s, je = !1, Re = o, Tl(null);
      try {
        const p = o._nodes;
        El(r.root, p), i && i(), s._readOnly = !0;
      } catch (p) {
        p instanceof Error && o._onError(p);
      } finally {
        o._dirtyElements = u, o._dirtyLeaves = d, o._cloneNotNeeded = f, o._dirtyType = g, Ne = a, je = l, Re = c;
      }
      return s;
    })(typeof n == "string" ? JSON.parse(n) : n, this, t);
  }
  read(n) {
    return Lt(this), this.getEditorState().read(n, { editor: this });
  }
  update(n, t) {
    (function(r, o, i) {
      r._updating ? r._updates.push([o, i]) : Ji(r, o, i);
    })(this, n, t);
  }
  focus(n, t = {}) {
    const r = this._rootElement;
    r !== null && (r.setAttribute("autocapitalize", "off"), St(this, () => {
      const o = G(), i = ye();
      o !== null ? o.dirty || Fe(o.clone()) : i.getChildrenSize() !== 0 && (t.defaultSelection === "rootStart" ? i.selectStart() : i.selectEnd()), tC("focus"), nC(() => {
        r.removeAttribute("autocapitalize"), n && n();
      });
    }), this._pendingEditorState === null && r.removeAttribute("autocapitalize"));
  }
  blur() {
    const n = this._rootElement;
    n !== null && n.blur();
    const t = ht(this._window);
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
I(Tn, "version");
Tn.version = "0.39.0+prod.esm";
let Ia = null;
function Tl(e) {
  Ia = e;
}
let ZS = 1;
function Dp(e, n) {
  const t = Fl(e, n);
  return t === void 0 && z(30, n), t;
}
function Fl(e, n) {
  return e._nodes.get(n);
}
const JS = typeof queueMicrotask == "function" ? queueMicrotask : (e) => {
  Promise.resolve().then(e);
};
function Lp(e) {
  return re(pr(e));
}
function Pl(e) {
  const n = document.activeElement;
  if (!_e(n)) return !1;
  const t = n.nodeName;
  return re(pr(e)) && (t === "INPUT" || t === "TEXTAREA" || n.contentEditable === "true" && Xi(n) == null);
}
function po(e, n, t) {
  const r = e.getRootElement();
  try {
    return r !== null && r.contains(n) && r.contains(t) && n !== null && !Pl(n) && zp(n) === e;
  } catch {
    return !1;
  }
}
function Il(e) {
  return e instanceof Tn;
}
function zp(e) {
  let n = e;
  for (; n != null; ) {
    const t = Xi(n);
    if (Il(t)) return t;
    n = ho(n);
  }
  return null;
}
function Xi(e) {
  return e ? e.__lexicalEditor : null;
}
function Sn(e) {
  return qi(e) || e.isToken();
}
function Mt(e) {
  return Sn(e) || e.isSegmented();
}
function Kt(e) {
  return Tr(e) && e.nodeType === 3;
}
function Bp(e) {
  return Tr(e) && e.nodeType === 9;
}
function gr(e) {
  let n = e;
  for (; n != null; ) {
    if (Kt(n)) return n;
    n = n.firstChild;
  }
  return null;
}
function bi(e, n, t) {
  const r = Nn[n];
  if (t !== null && (e & r) === (t & r)) return e;
  let o = e ^ r;
  return n === "subscript" ? o &= -65 : n === "superscript" ? o &= -33 : n === "lowercase" ? (o &= -513, o &= -1025) : n === "uppercase" ? (o &= -257, o &= -1025) : n === "capitalize" && (o &= -257, o &= -513), o;
}
function Vp(e) {
  return V(e) || en(e) || re(e);
}
function XS(e, n) {
  const t = (function() {
    const s = Ia;
    return Ia = null, s;
  })();
  if ((n = n || t && t.__key) != null) return void (e.__key = n);
  Ee(), Tp();
  const r = ce(), o = dn(), i = "" + ZS++;
  o._nodeMap.set(i, e), O(e) ? r._dirtyElements.set(i, !0) : r._dirtyLeaves.add(i), r._cloneNotNeeded.add(i), r._dirtyType = 1, e.__key = i;
}
function Cn(e) {
  const n = e.getParent();
  if (n !== null) {
    const t = e.getWritable(), r = n.getWritable(), o = e.getPreviousSibling(), i = e.getNextSibling(), s = i !== null ? i.__key : null, a = o !== null ? o.__key : null, l = o !== null ? o.getWritable() : null, c = i !== null ? i.getWritable() : null;
    o === null && (r.__first = s), i === null && (r.__last = a), l !== null && (l.__next = s), c !== null && (c.__prev = a), t.__prev = null, t.__next = null, t.__parent = null, r.__size--;
  }
}
function vi(e) {
  Tp(), pi(e) && z(323, e.__key, e.__type);
  const n = e.getLatest(), t = n.__parent, r = dn(), o = ce(), i = r._nodeMap, s = o._dirtyElements;
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
  o._dirtyType = 1, O(e) ? s.set(a, !0) : o._dirtyLeaves.add(a);
}
function Ae(e) {
  Ee();
  const n = ce(), t = n._compositionKey;
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
function Xt() {
  return uo() ? null : ce()._compositionKey;
}
function xe(e, n) {
  const t = (n || dn())._nodeMap.get(e);
  return t === void 0 ? null : t;
}
function jp(e, n) {
  const t = Qi(e, ce());
  return t !== void 0 ? xe(t, n) : null;
}
function Qi(e, n) {
  return e[`__lexicalKey_${n._key}`];
}
function pr(e, n) {
  let t = e;
  for (; t != null; ) {
    const r = jp(t, n);
    if (r !== null) return r;
    t = ho(t);
  }
  return null;
}
function Up(e) {
  const n = e._decorators, t = Object.assign({}, n);
  return e._pendingDecorators = t, t;
}
function Cu(e) {
  return e.read(() => ye().getTextContent());
}
function ye() {
  return Gp(dn());
}
function Gp(e) {
  return e._nodeMap.get("root");
}
function Fe(e) {
  Ee();
  const n = dn();
  e !== null && (e.dirty = !0, e.setCachedNodes(null)), n._selection = e;
}
function nr(e) {
  const n = ce(), t = (function(r, o) {
    let i = r;
    for (; i != null; ) {
      const s = Qi(i, o);
      if (s !== void 0) return s;
      i = ho(i);
    }
    return null;
  })(e, n);
  return t === null ? e === n.getRootElement() ? xe("root") : null : xe(t);
}
function Hp(e) {
  return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(e);
}
function Ol(e) {
  const n = [];
  let t = e;
  for (; t !== null; ) n.push(t), t = t._parentEditor;
  return n;
}
function Wp() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substring(0, 5);
}
function Kp(e) {
  return Kt(e) ? e.nodeValue : null;
}
function $l(e, n, t) {
  const r = ht(tt(n));
  if (r === null) return;
  const o = r.anchorNode;
  let { anchorOffset: i, focusOffset: s } = r;
  if (o !== null) {
    let a = Kp(o);
    const l = pr(o);
    if (a !== null && V(l)) {
      if (a === Hi && t) {
        const c = t.length;
        a = t, i = c, s = c;
      }
      a !== null && Ml(l, a, i, s, e);
    }
  }
}
function Ml(e, n, t, r, o) {
  let i = e;
  if (i.isAttached() && (o || !i.isDirty())) {
    const s = i.isComposing();
    let a = n;
    (s || o) && n[n.length - 1] === Hi && (a = n.slice(0, -1));
    const l = i.getTextContent();
    if (o || a !== l) {
      if (a === "") {
        if (Ae(null), lo || Sr || co) i.remove();
        else {
          const h = ce();
          setTimeout(() => {
            h.update(() => {
              i.isAttached() && i.remove();
            });
          }, 20);
        }
        return;
      }
      const c = i.getParent(), u = Nr(), d = i.getTextContentSize(), f = Xt(), g = i.getKey();
      if (i.isToken() || f !== null && g === f && !s || L(u) && (c !== null && !c.canInsertTextBefore() && u.anchor.offset === 0 || u.anchor.key === e.__key && u.anchor.offset === 0 && !i.canInsertTextBefore() && !s || u.focus.key === e.__key && u.focus.offset === d && !i.canInsertTextAfter() && !s)) return void i.markDirty();
      const p = G();
      if (!L(p) || t === null || r === null) return void ku(i, a, p);
      if (p.setTextNodeRange(i, t, i, r), i.isSegmented()) {
        const h = be(i.getTextContent());
        i.replace(h), i = h;
      }
      ku(i, a, p);
    }
  }
}
function ku(e, n, t) {
  if (e.setTextContent(n), L(t)) {
    const r = e.getKey();
    for (const o of ["anchor", "focus"]) {
      const i = t[o];
      i.type === "text" && i.key === r && (i.offset = nn(e, i.offset, "clamp"));
    }
  }
}
function Ao(e, n, t) {
  const r = n[t] || !1;
  return r === "any" || r === e[t];
}
function QS(e, n) {
  return Ao(e, n, "altKey") && Ao(e, n, "ctrlKey") && Ao(e, n, "shiftKey") && Ao(e, n, "metaKey");
}
function ae(e, n, t) {
  return QS(e, t) && e.key.toLowerCase() === n.toLowerCase();
}
const Ot = { ctrlKey: !rt, metaKey: rt }, Eu = { altKey: rt, ctrlKey: !rt };
function Nu(e) {
  return e.key === "Backspace";
}
function Ru(e) {
  return ae(e, "a", Ot);
}
function eC(e) {
  const n = ye();
  if (L(e)) {
    const t = e.anchor, r = e.focus, o = t.getNode().getTopLevelElementOrThrow().getParentOrThrow();
    return t.set(o.getKey(), 0, "element"), r.set(o.getKey(), o.getChildrenSize(), "element"), si(e), e;
  }
  {
    const t = n.select(0, n.getChildrenSize());
    return Fe(si(t)), t;
  }
}
function lr(e, n) {
  e.__lexicalClassNameCache === void 0 && (e.__lexicalClassNameCache = {});
  const t = e.__lexicalClassNameCache, r = t[n];
  if (r !== void 0) return r;
  const o = e[n];
  if (typeof o == "string") {
    const i = Mg(o);
    return t[n] = i, i;
  }
  return o;
}
function Dl(e, n, t, r, o) {
  if (t.size === 0) return;
  const i = r.__type, s = r.__key, a = n.get(i);
  a === void 0 && z(33, i);
  const l = a.klass;
  let c = e.get(l);
  c === void 0 && (c = /* @__PURE__ */ new Map(), e.set(l, c));
  const u = c.get(s), d = u === "destroyed" && o === "created";
  (u === void 0 || d) && c.set(s, d ? "updated" : o);
}
function Au(e, n, t) {
  const r = e.getParent();
  let o = t, i = e;
  return r !== null && (n && t === 0 ? (o = i.getIndexWithinParent(), i = r) : n || t !== i.getChildrenSize() || (o = i.getIndexWithinParent() + 1, i = r)), i.getChildAtIndex(n ? o - 1 : o);
}
function Oa(e, n) {
  const t = e.offset;
  if (e.type === "element")
    return Au(e.getNode(), n, t);
  {
    const r = e.getNode();
    if (n && t === 0 || !n && t === r.getTextContentSize()) {
      const o = n ? r.getPreviousSibling() : r.getNextSibling();
      return o === null ? Au(r.getParentOrThrow(), n, r.getIndexWithinParent() + (n ? 0 : 1)) : o;
    }
  }
  return null;
}
function qp(e) {
  const n = tt(e).event, t = n && n.inputType;
  return t === "insertFromPaste" || t === "insertFromPasteAsQuotation";
}
function W(e, n, t) {
  return (function(r, o, i) {
    const s = Ol(r);
    for (let a = 4; a >= 0; a--) for (let l = 0; l < s.length; l++) {
      const c = s[l], u = c._commands.get(o);
      if (u !== void 0) {
        const d = u[a];
        if (d !== void 0) {
          const f = Array.from(d), g = f.length;
          let p = !1;
          if (St(c, () => {
            for (let h = 0; h < g; h++) if (f[h](i, r)) return void (p = !0);
          }), p) return p;
        }
      }
    }
    return !1;
  })(e, n, t);
}
function es(e) {
  return !we(e) && !e.isLastChild() && !e.isInline();
}
function Fn(e, n) {
  const t = e._keyToDOMMap.get(n);
  return t === void 0 && z(75, n), t;
}
function ho(e) {
  const n = e.assignedSlot || e.parentElement;
  return Da(n) ? n.host : n;
}
function Yp(e) {
  return Bp(e) ? e : _e(e) ? e.ownerDocument : null;
}
function tC(e) {
  Ee(), ce()._updateTags.add(e);
}
function nC(e) {
  Ee(), ce()._deferred.push(e);
}
function $a(e, n) {
  let t = e.getParent();
  for (; t !== null; ) {
    if (t.is(n)) return !0;
    t = t.getParent();
  }
  return !1;
}
function Ll(e) {
  const n = Yp(e);
  return n ? n.defaultView : null;
}
function tt(e) {
  const n = e._window;
  return n === null && z(78), n;
}
function rC(e) {
  let n = e.getParentOrThrow();
  for (; n !== null; ) {
    if (Me(n)) return n;
    n = n.getParentOrThrow();
  }
  return n;
}
function Me(e) {
  return we(e) || O(e) && e.isShadowRoot();
}
function nt(e) {
  const n = ce(), t = e.getType(), r = Fl(n, t);
  r === void 0 && z(200, e.constructor.name, t);
  const { replace: o, replaceWithKlass: i } = r;
  if (o !== null) {
    const s = o(e), a = s.constructor;
    return i !== null ? s instanceof i || z(201, i.name, i.getType(), a.name, a.getType(), e.constructor.name, t) : s instanceof e.constructor && a !== e.constructor || z(202, a.name, a.getType(), e.constructor.name, t), s.__key === e.__key && z(203, e.constructor.name, t, a.name, a.getType()), s;
  }
  return e;
}
function zs(e, n) {
  !we(e.getParent()) || O(n) || re(n) || z(99);
}
function oC(e) {
  const n = xe(e);
  return n === null && z(63, e), n;
}
function Bs(e) {
  return (re(e) || O(e) && !e.canBeEmpty()) && !e.isInline();
}
function Ma(e, n, t) {
  t.style.removeProperty("caret-color"), n._blockCursorElement = null;
  const r = e.parentElement;
  r !== null && r.removeChild(e);
}
function ht(e) {
  return pt ? (e || window).getSelection() : null;
}
function iC(e) {
  const n = Ll(e);
  return n ? n.getSelection() : null;
}
function Zp(e) {
  return _e(e) && e.tagName === "A";
}
function _e(e) {
  return Tr(e) && e.nodeType === 1;
}
function Tr(e) {
  return typeof e == "object" && e !== null && "nodeType" in e && typeof e.nodeType == "number";
}
function Da(e) {
  return Tr(e) && e.nodeType === 11;
}
function La(e) {
  const n = new RegExp(/^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|mark|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var|#text)$/, "i");
  return e.nodeName.match(n) !== null;
}
function xi(e) {
  const n = new RegExp(/^(address|article|aside|blockquote|canvas|dd|div|dl|dt|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hr|li|main|nav|noscript|ol|p|pre|section|table|td|tfoot|ul|video)$/, "i");
  return e.nodeName.match(n) !== null;
}
function Xe(e) {
  if (re(e) && !e.isInline()) return !0;
  if (!O(e) || Me(e)) return !1;
  const n = e.getFirstChild(), t = n === null || en(n) || V(n) || n.isInline();
  return !e.isInline() && e.canBeEmpty() !== !1 && t;
}
function ts() {
  return ce();
}
const Tu = /* @__PURE__ */ new WeakMap(), sC = /* @__PURE__ */ new Map();
function Fu(e) {
  if (!e._readOnly && e.isEmpty()) return sC;
  e._readOnly || z(192);
  let n = Tu.get(e);
  return n || (n = (function(t) {
    const r = /* @__PURE__ */ new Map();
    for (const [o, i] of t._nodeMap) {
      const s = i.__type;
      let a = r.get(s);
      a || (a = /* @__PURE__ */ new Map(), r.set(s, a)), a.set(o, i);
    }
    return r;
  })(e), Tu.set(e, n)), n;
}
function Jp(e) {
  const n = e.constructor.clone(e);
  return n.afterCloneFrom(e), n;
}
function aC(e) {
  return (n = Jp(e))[_p] = !0, n;
  var n;
}
function zl(e, n) {
  const t = parseInt(e.style.paddingInlineStart, 10) || 0, r = Math.round(t / 40);
  n.setIndent(r);
}
function lC(e) {
  return e.__lexicalUnmanaged === !0;
}
function Lr(e, n) {
  return (function(t, r) {
    return Object.prototype.hasOwnProperty.call(t, r);
  })(e, n) && e[n] !== st[n];
}
function ns(e) {
  const n = Gc in e.prototype ? e.prototype[Gc]() : void 0, t = (function(s) {
    if (!(s === st || s.prototype instanceof st)) {
      let a = "<unknown>", l = "<unknown>";
      try {
        a = s.getType();
      } catch {
      }
      try {
        Tn.version && (l = JSON.parse(Tn.version));
      } catch {
      }
      z(290, s.name, a, l);
    }
    return s === Nl || s === Ze || s === st;
  })(e), r = !t && Lr(e, "getType") ? e.getType() : void 0;
  let o, i = r;
  if (n) if (r) o = n[r];
  else for (const [s, a] of Object.entries(n)) i = s, o = a;
  if (!t && i && (Lr(e, "getType") || (e.getType = () => i), Lr(e, "clone") || (e.clone = (s) => (Tl(s), new e())), Lr(e, "importJSON") || (e.importJSON = o && o.$importJSON || ((s) => new e().updateFromJSON(s))), !Lr(e, "importDOM") && o)) {
    const { importDOM: s } = o;
    s && (e.importDOM = () => s);
  }
  return { ownNodeConfig: o, ownNodeType: i };
}
function Xp(e) {
  const n = ts();
  return Ee(), new (n.resolveRegisteredNodeAfterReplacements(n.getRegisteredNode(e))).klass();
}
const et = (e, n) => {
  let t = e;
  for (; t != null && !we(t); ) {
    if (n(t)) return t;
    t = t.getParent();
  }
  return null;
}, cC = { next: "previous", previous: "next" };
class Bl {
  constructor(n) {
    I(this, "origin");
    this.origin = n;
  }
  [Symbol.iterator]() {
    return Qp({ hasNext: hr, initial: this.getAdjacentCaret(), map: (n) => n, step: (n) => n.getAdjacentCaret() });
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
class no extends Bl {
  constructor() {
    super(...arguments);
    I(this, "type", "child");
  }
  getLatest() {
    const t = this.origin.getLatest();
    return t === this.origin ? this : lt(t, this.direction);
  }
  getParentCaret(t = "root") {
    return Te(Vl(this.getParentAtCaret(), t), this.direction);
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
    return t instanceof no && this.direction === t.direction && this.origin.is(t.origin);
  }
  isSamePointCaret(t) {
    return this.isSameNodeCaret(t);
  }
}
const uC = { root: we, shadowRoot: Me };
function Fr(e) {
  return cC[e];
}
function Vl(e, n = "root") {
  return uC[n](e) ? null : e;
}
class Pn extends Bl {
  constructor() {
    super(...arguments);
    I(this, "type", "sibling");
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
    return O(this.origin) ? lt(this.origin, this.direction) : null;
  }
  getParentCaret(t = "root") {
    return Te(Vl(this.getParentAtCaret(), t), this.direction);
  }
  getFlipped() {
    const t = Fr(this.direction);
    return Te(this.getNodeAtCaret(), t) || lt(this.origin.getParentOrThrow(), t);
  }
  isSamePointCaret(t) {
    return t instanceof Pn && this.direction === t.direction && this.origin.is(t.origin);
  }
  isSameNodeCaret(t) {
    return (t instanceof Pn || t instanceof In) && this.direction === t.direction && this.origin.is(t.origin);
  }
}
class In extends Bl {
  constructor(t, r) {
    super(t);
    I(this, "type", "text");
    I(this, "offset");
    this.offset = r;
  }
  getLatest() {
    const t = this.origin.getLatest();
    return t === this.origin ? this : On(t, this.direction, this.offset);
  }
  getParentAtCaret() {
    return this.origin.getParent();
  }
  getChildCaret() {
    return null;
  }
  getParentCaret(t = "root") {
    return Te(Vl(this.getParentAtCaret(), t), this.direction);
  }
  getFlipped() {
    return On(this.origin, Fr(this.direction), this.offset);
  }
  isSamePointCaret(t) {
    return t instanceof In && this.direction === t.direction && this.origin.is(t.origin) && this.offset === t.offset;
  }
  isSameNodeCaret(t) {
    return (t instanceof Pn || t instanceof In) && this.direction === t.direction && this.origin.is(t.origin);
  }
  getSiblingCaret() {
    return Te(this.origin, this.direction);
  }
}
function tn(e) {
  return e instanceof In;
}
function hr(e) {
  return e instanceof Pn;
}
function Ct(e) {
  return e instanceof no;
}
const dC = { next: class extends In {
  constructor() {
    super(...arguments);
    I(this, "direction", "next");
  }
  getNodeAtCaret() {
    return this.origin.getNextSibling();
  }
  insert(n) {
    return this.origin.insertAfter(n), this;
  }
}, previous: class extends In {
  constructor() {
    super(...arguments);
    I(this, "direction", "previous");
  }
  getNodeAtCaret() {
    return this.origin.getPreviousSibling();
  }
  insert(n) {
    return this.origin.insertBefore(n), this;
  }
} }, fC = { next: class extends Pn {
  constructor() {
    super(...arguments);
    I(this, "direction", "next");
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
    I(this, "direction", "previous");
  }
  getNodeAtCaret() {
    return this.origin.getPreviousSibling();
  }
  insert(n) {
    return this.origin.insertBefore(n), this;
  }
} }, gC = { next: class extends no {
  constructor() {
    super(...arguments);
    I(this, "direction", "next");
  }
  getNodeAtCaret() {
    return this.origin.getFirstChild();
  }
  insert(n) {
    return this.origin.splice(0, 0, [n]), this;
  }
}, previous: class extends no {
  constructor() {
    super(...arguments);
    I(this, "direction", "previous");
  }
  getNodeAtCaret() {
    return this.origin.getLastChild();
  }
  insert(n) {
    return this.origin.splice(this.origin.getChildrenSize(), 0, [n]), this;
  }
} };
function Te(e, n) {
  return e ? new fC[n](e) : null;
}
function On(e, n, t) {
  return e ? new dC[n](e, nn(e, t)) : null;
}
function nn(e, n, t = "error") {
  const r = e.getTextContentSize();
  let o = n === "next" ? r : n === "previous" ? 0 : n;
  return (o < 0 || o > r) && (t !== "clamp" && Og(284, String(n), String(r), e.getKey()), o = o < 0 ? 0 : r), o;
}
function Pu(e, n) {
  return new hC(e, n);
}
function lt(e, n) {
  return O(e) ? new gC[n](e) : null;
}
function pC(e) {
  return e && e.getChildCaret() || e;
}
function jl(e) {
  return e && pC(e.getAdjacentCaret());
}
class Ul {
  constructor(n, t, r) {
    I(this, "type", "node-caret-range");
    I(this, "direction");
    I(this, "anchor");
    I(this, "focus");
    this.anchor = n, this.focus = t, this.direction = r;
  }
  getLatest() {
    const n = this.anchor.getLatest(), t = this.focus.getLatest();
    return n === this.anchor && t === this.focus ? this : new Ul(n, t, this.direction);
  }
  isCollapsed() {
    return this.anchor.isSamePointCaret(this.focus);
  }
  getTextSlices() {
    const n = (o) => {
      const i = this[o].getLatest();
      return tn(i) ? (function(s, a) {
        const { direction: l, origin: c } = s, u = nn(c, a === "focus" ? Fr(l) : l);
        return Pu(s, u - s.offset);
      })(i, o) : null;
    }, t = n("anchor"), r = n("focus");
    if (t && r) {
      const { caret: o } = t, { caret: i } = r;
      if (o.isSameNodeCaret(i)) return [Pu(o, i.offset - o.offset), null];
    }
    return [t, r];
  }
  iterNodeCarets(n = "root") {
    const t = tn(this.anchor) ? this.anchor.getSiblingCaret() : this.anchor.getLatest(), r = this.focus.getLatest(), o = tn(r), i = (s) => s.isSameNodeCaret(r) ? null : jl(s) || s.getParentCaret(n);
    return Qp({ hasNext: (s) => s !== null && !(o && r.isSameNodeCaret(s)), initial: t.isSameNodeCaret(r) ? null : i(t), map: (s) => s, step: i });
  }
  [Symbol.iterator]() {
    return this.iterNodeCarets("root");
  }
}
class hC {
  constructor(n, t) {
    I(this, "type", "slice");
    I(this, "caret");
    I(this, "distance");
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
    return On(n.setTextContent(i.slice(0, r) + i.slice(o)), t, r);
  }
}
function Gl(e) {
  return ln(e, Te(ye(), e.direction));
}
function mC(e) {
  return ln(e, e);
}
function ln(e, n) {
  return e.direction !== n.direction && z(265), new Ul(e, n, e.direction);
}
function Qp(e) {
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
function eh(e, n) {
  const t = Go(e.origin, n.origin);
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
      return th(t);
  }
}
function th(e) {
  const { a: n, b: t } = e, r = n.__key, o = t.__key;
  let i = n, s = t;
  for (; i && s; i = i.getNextSibling(), s = s.getNextSibling()) {
    if (i.__key === o) return -1;
    if (s.__key === r) return 1;
  }
  return i === null ? 1 : -1;
}
function To(e, n) {
  return n.is(e);
}
function Iu(e) {
  return O(e) ? [e.getLatest(), null] : [e.getParent(), e.getLatest()];
}
function Go(e, n) {
  if (e.is(n)) return { commonAncestor: e, type: "same" };
  const t = /* @__PURE__ */ new Map();
  for (let [r, o] = Iu(e); r; o = r, r = r.getParent()) t.set(r, o);
  for (let [r, o] = Iu(n); r; o = r, r = r.getParent()) {
    const i = t.get(r);
    if (i !== void 0) return i === null ? (To(e, r) || z(276), { commonAncestor: r, type: "ancestor" }) : o === null ? (To(n, r) || z(277), { commonAncestor: r, type: "descendant" }) : ((O(i) || To(e, i)) && (O(o) || To(n, o)) && r.is(i.getParent()) && r.is(o.getParent()) || z(278), { a: i, b: o, commonAncestor: r, type: "branch" });
  }
  return null;
}
function Vt(e, n) {
  const { type: t, key: r, offset: o } = e, i = oC(e.key);
  return t === "text" ? (V(i) || z(266, i.getType(), r), On(i, n, o)) : (O(i) || z(267, i.getType(), r), vC(i, e.offset, n));
}
function $n(e, n) {
  const { origin: t, direction: r } = n, o = r === "next";
  tn(n) ? e.set(t.getKey(), n.offset, "text") : hr(n) ? V(t) ? e.set(t.getKey(), nn(t, r), "text") : e.set(t.getParentOrThrow().getKey(), t.getIndexWithinParent() + (o ? 1 : 0), "element") : (Ct(n) && O(t) || z(268), e.set(t.getKey(), o ? 0 : t.getChildrenSize(), "element"));
}
function yC(e) {
  const n = G(), t = L(n) ? n : Zi();
  return Ho(t, e), Fe(t), t;
}
function Ho(e, n) {
  $n(e.anchor, n.anchor), $n(e.focus, n.focus);
}
function Ou(e) {
  const { anchor: n, focus: t } = e, r = Vt(n, "next"), o = Vt(t, "next"), i = eh(r, o) <= 0 ? "next" : "previous";
  return ln(mr(r, i), mr(o, i));
}
function Hl(e) {
  const { direction: n, origin: t } = e, r = Te(t, Fr(n)).getNodeAtCaret();
  return r ? Te(r, n) : lt(t.getParentOrThrow(), n);
}
function $u(e, n = "root") {
  const t = [e];
  for (let r = Ct(e) ? e.getParentCaret(n) : e.getSiblingCaret(); r !== null; r = r.getParentCaret(n)) t.push(Hl(r));
  return t;
}
function Vs(e) {
  return !!e && e.origin.isAttached();
}
function bC(e, n = "removeEmptySlices") {
  if (e.isCollapsed()) return e;
  const t = "root", r = "next";
  let o = n;
  const i = rh(e, r), s = $u(i.anchor, t), a = $u(i.focus.getFlipped(), t), l = /* @__PURE__ */ new Set(), c = [];
  for (const p of i.iterNodeCarets(t)) if (Ct(p)) l.add(p.origin.getKey());
  else if (hr(p)) {
    const { origin: h } = p;
    O(h) && !l.has(h.getKey()) || c.push(h);
  }
  for (const p of c) p.remove();
  for (const p of i.getTextSlices()) {
    if (!p) continue;
    const { origin: h } = p.caret, m = h.getTextContentSize(), b = Hl(Te(h, r)), y = h.getMode();
    if (Math.abs(p.distance) === m && o === "removeEmptySlices" || y === "token" && p.distance !== 0) b.remove();
    else if (p.distance !== 0) {
      o = "removeEmptySlices";
      let v = p.removeTextSlice();
      const _ = p.caret.origin;
      if (y === "segmented") {
        const S = v.origin, C = be(S.getTextContent()).setStyle(S.getStyle()).setFormat(S.getFormat());
        b.replaceOrInsert(C), v = On(C, r, v.offset);
      }
      _.is(s[0].origin) && (s[0] = v), _.is(a[0].origin) && (a[0] = v.getFlipped());
    }
  }
  let u, d;
  for (const p of s) if (Vs(p)) {
    u = Qe(p);
    break;
  }
  for (const p of a) if (Vs(p)) {
    d = Qe(p);
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
    const k = (R, T) => {
      let A;
      for (let D = C; D < R.length; D++) {
        const $ = R[D];
        if (Me($)) return;
        !A && T($) && (A = $);
      }
      return A;
    }, N = k(v, Xe), E = N && k(_, (R) => m.has(R.getKey()) && Xe(R));
    return N && E ? [N, E] : null;
  })(u, d, l);
  if (f) {
    const [p, h] = f;
    lt(p, "previous").splice(0, h.getChildren()), h.remove();
  }
  const g = [u, d, ...s, ...a].find(Vs);
  if (g)
    return mC(mr(Qe(g), e.direction));
  z(269, JSON.stringify(s.map((p) => p.origin.__key)));
}
function Qe(e) {
  const n = (function(o) {
    let i = o;
    for (; Ct(i); ) {
      const s = jl(i);
      if (!Ct(s)) break;
      i = s;
    }
    return i;
  })(e.getLatest()), { direction: t } = n;
  if (V(n.origin)) return tn(n) ? n : On(n.origin, t, t);
  const r = n.getAdjacentCaret();
  return hr(r) && V(r.origin) ? On(r.origin, t, Fr(t)) : n;
}
function nh(e) {
  return tn(e) && e.offset !== nn(e.origin, e.direction);
}
function mr(e, n) {
  return e.direction === n ? e : e.getFlipped();
}
function rh(e, n) {
  return e.direction === n ? e : ln(mr(e.focus, n), mr(e.anchor, n));
}
function vC(e, n, t) {
  let r = lt(e, "next");
  for (let o = 0; o < n; o++) {
    const i = r.getAdjacentCaret();
    if (i === null) break;
    r = i;
  }
  return mr(r, t);
}
function xC(...e) {
  return e;
}
function wC(e, n) {
  if (!n || e === n) return e;
  for (const t in n) if (e[t] !== n[t]) return { ...e, ...n };
  return e;
}
const oh = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, _C = oh ? wr : Ke, Fo = { tag: ar };
function SC({ initialConfig: e, children: n }) {
  const t = xr(() => {
    const { theme: r, namespace: o, nodes: i, onError: s, editorState: a, html: l } = e, c = $_(null, r), u = Mp({ editable: e.editable, html: l, namespace: o, nodes: i, onError: (d) => s(d, u), theme: r });
    return (function(d, f) {
      if (f !== null) {
        if (f === void 0) d.update(() => {
          const g = ye();
          if (g.isEmpty()) {
            const p = me();
            g.append(p);
            const h = oh ? document.activeElement : null;
            (G() !== null || h !== null && h === d.getRootElement()) && p.select();
          }
        }, Fo);
        else if (f !== null) switch (typeof f) {
          case "string": {
            const g = d.parseEditorState(f);
            d.setEditorState(g, Fo);
            break;
          }
          case "object":
            d.setEditorState(f, Fo);
            break;
          case "function":
            d.update(() => {
              ye().isEmpty() && f(d);
            }, Fo);
        }
      }
    })(u, a), [u, c];
  }, []);
  return _C(() => {
    const r = e.editable, [o] = t;
    o.setEditable(r === void 0 || r);
  }, []), x(Ig.Provider, { value: t, children: n });
}
const CC = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? wr : Ke;
function kC(e) {
  return { initialValueFn: () => e.isEditable(), subscribe: (n) => e.registerEditableListener(n) };
}
function EC() {
  return (function(e) {
    const [n] = gt(), t = xr(() => e(n), [n, e]), [r, o] = on(() => t.initialValueFn()), i = Wy(r);
    return CC(() => {
      const { initialValueFn: s, subscribe: a } = t, l = s();
      return i.current !== l && (i.current = l, o(l)), a((c) => {
        i.current = c, o(c);
      });
    }, [t, e]), r;
  })(kC);
}
const za = /* @__PURE__ */ new Map();
function ih(e) {
  const n = {};
  if (!e) return n;
  const t = e.split(";");
  for (const r of t) if (r !== "") {
    const [o, i] = r.split(/:([^]+)/);
    o && i && (n[o.trim()] = i.trim());
  }
  return n;
}
function Mu(e) {
  let n = za.get(e);
  return n === void 0 && (n = ih(e), za.set(e, n)), n;
}
function sh(e) {
  const n = ts().getElementByKey(e.getKey());
  if (n === null) return null;
  const t = n.ownerDocument.defaultView;
  return t === null ? null : t.getComputedStyle(n);
}
function ah(e) {
  return sh(we(e) ? e : e.getParentOrThrow());
}
function Du(e) {
  const n = ah(e);
  return n !== null && n.direction === "rtl";
}
function lh(e, n, t = "self") {
  const r = e.getStartEndPoints();
  if (n.isSelected(e) && !Mt(n) && r !== null) {
    const [o, i] = r, s = e.isBackward(), a = o.getNode(), l = i.getNode(), c = n.is(a), u = n.is(l);
    if (c || u) {
      const [d, f] = Fa(e), g = a.is(l), p = n.is(s ? l : a), h = n.is(s ? a : l);
      let m, b = 0;
      g ? (b = d > f ? f : d, m = d > f ? d : f) : p ? (b = s ? f : d, m = void 0) : h && (b = 0, m = s ? d : f);
      const y = n.__text.slice(b, m);
      y !== n.__text && (t === "clone" && (n = aC(n)), n.__text = y);
    }
  }
  return n;
}
function NC(e) {
  const n = e.getStyle(), t = ih(n);
  za.set(n, t);
}
function RC(e, n) {
  const t = e.getFormatType(), r = e.getIndent();
  t !== n.getFormatType() && n.setFormat(t), r !== n.getIndent() && n.setIndent(r);
}
function Lu(e, n, t = RC) {
  if (e === null) return;
  const r = e.getStartEndPoints(), o = /* @__PURE__ */ new Map();
  let i = null;
  if (r) {
    const [s, a] = r;
    i = Zi(), i.anchor.set(s.key, s.offset, s.type), i.focus.set(a.key, a.offset, a.type);
    const l = et(s.getNode(), Xe), c = et(a.getNode(), Xe);
    O(l) && o.set(l.getKey(), l), O(c) && o.set(c.getKey(), c);
  }
  for (const s of e.getNodes()) if (O(s) && Xe(s)) o.set(s.getKey(), s);
  else if (r === null) {
    const a = et(s, Xe);
    O(a) && o.set(a.getKey(), a);
  }
  for (const [s, a] of o) {
    const l = n();
    t(a, l), a.replace(l, !0), i && (s === i.anchor.key && i.anchor.set(l.getKey(), i.anchor.offset, i.anchor.type), s === i.focus.key && i.focus.set(l.getKey(), i.focus.offset, i.focus.type));
  }
  i && e.is(G()) && Fe(i);
}
function ch(e) {
  const n = uh(e);
  return n !== null && n.writingMode === "vertical-rl";
}
function uh(e) {
  const n = e.anchor.getNode();
  return O(n) ? sh(n) : ah(n);
}
function zu(e, n) {
  let t = ch(e) ? !n : n;
  dh(e) && (t = !t);
  const r = Vt(e.focus, t ? "previous" : "next");
  if (nh(r)) return !1;
  for (const o of Gl(r)) {
    if (Ct(o)) return !o.origin.isInline();
    if (!O(o.origin)) {
      if (re(o.origin)) return !0;
      break;
    }
  }
  return !1;
}
function AC(e, n, t, r) {
  e.modify(n ? "extend" : "move", t, r);
}
function dh(e) {
  const n = uh(e);
  return n !== null && n.direction === "rtl";
}
function Bu(e, n, t) {
  const r = dh(e);
  let o;
  o = ch(e) || r ? !t : t, AC(e, n, o, "character");
}
function TC(e, ...n) {
  const t = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", e);
  for (const o of n) r.append("v", o);
  throw t.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
const fh = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, FC = fh && "documentMode" in document ? document.documentMode : null;
!(!fh || !("InputEvent" in window) || FC) && "getTargetRanges" in new window.InputEvent("input");
function gh(...e) {
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
function ct(e, ...n) {
  const t = gh(...n);
  t.length > 0 && e.classList.add(...t);
}
function rs(e, ...n) {
  const t = gh(...n);
  t.length > 0 && e.classList.remove(...t);
}
function PC(e) {
  return e ? e.getAdjacentCaret() : null;
}
function IC(e, n) {
  let t = e;
  for (; t != null; ) {
    if (t instanceof n) return t;
    t = t.getParent();
  }
  return null;
}
function OC(e) {
  const n = et(e, (t) => O(t) && !t.isInline());
  return O(n) || TC(4, e.__key), n;
}
function xn(e, n) {
  return e !== null && Object.getPrototypeOf(e).constructor.name === n.name;
}
const $C = Symbol.for("preact-signals");
function os() {
  if (rn > 1) return void rn--;
  let e, n = !1;
  for (; Yr !== void 0; ) {
    let t = Yr;
    for (Yr = void 0, Ba++; t !== void 0; ) {
      const r = t.o;
      if (t.o = void 0, t.f &= -3, !(8 & t.f) && ph(t)) try {
        t.c();
      } catch (o) {
        n || (e = o, n = !0);
      }
      t = r;
    }
  }
  if (Ba = 0, rn--, n) throw e;
}
function MC(e) {
  if (rn > 0) return e();
  rn++;
  try {
    return e();
  } finally {
    os();
  }
}
let se, Yr;
function Vu(e) {
  const n = se;
  se = void 0;
  try {
    return e();
  } finally {
    se = n;
  }
}
let rn = 0, Ba = 0, Wo = 0;
function ju(e) {
  if (se === void 0) return;
  let n = e.n;
  return n === void 0 || n.t !== se ? (n = { i: 0, S: e, p: se.s, n: void 0, t: se, e: void 0, x: void 0, r: n }, se.s !== void 0 && (se.s.n = n), se.s = n, e.n = n, 32 & se.f && e.S(n), n) : n.i === -1 ? (n.i = 0, n.n !== void 0 && (n.n.p = n.p, n.p !== void 0 && (n.p.n = n.n), n.p = se.s, n.n = void 0, se.s.n = n, se.s = n), n) : void 0;
}
function Le(e, n) {
  this.v = e, this.i = 0, this.n = void 0, this.t = void 0, this.W = n == null ? void 0 : n.watched, this.Z = n == null ? void 0 : n.unwatched, this.name = n == null ? void 0 : n.name;
}
function DC(e, n) {
  return new Le(e, n);
}
function ph(e) {
  for (let n = e.s; n !== void 0; n = n.n) if (n.S.i !== n.i || !n.S.h() || n.S.i !== n.i) return !0;
  return !1;
}
function Uu(e) {
  for (let n = e.s; n !== void 0; n = n.n) {
    const t = n.S.n;
    if (t !== void 0 && (n.r = t), n.S.n = n, n.i = -1, n.n === void 0) {
      e.s = n;
      break;
    }
  }
}
function hh(e) {
  let n, t = e.s;
  for (; t !== void 0; ) {
    const r = t.p;
    t.i === -1 ? (t.S.U(t), r !== void 0 && (r.n = t.n), t.n !== void 0 && (t.n.p = r)) : n = t, t.S.n = t.r, t.r !== void 0 && (t.r = void 0), t = r;
  }
  e.s = n;
}
function Gn(e, n) {
  Le.call(this, void 0), this.x = e, this.s = void 0, this.g = Wo - 1, this.f = 4, this.W = n == null ? void 0 : n.watched, this.Z = n == null ? void 0 : n.unwatched, this.name = n == null ? void 0 : n.name;
}
function mh(e) {
  const n = e.u;
  if (e.u = void 0, typeof n == "function") {
    rn++;
    const t = se;
    se = void 0;
    try {
      n();
    } catch (r) {
      throw e.f &= -2, e.f |= 8, Wl(e), r;
    } finally {
      se = t, os();
    }
  }
}
function Wl(e) {
  for (let n = e.s; n !== void 0; n = n.n) n.S.U(n);
  e.x = void 0, e.s = void 0, mh(e);
}
function LC(e) {
  if (se !== this) throw new Error("Out-of-order effect");
  hh(this), se = e, this.f &= -2, 8 & this.f && Wl(this), os();
}
function tr(e, n) {
  this.x = e, this.u = void 0, this.s = void 0, this.o = void 0, this.f = 32, this.name = n == null ? void 0 : n.name;
}
function Kl(e, n) {
  const t = new tr(e, n);
  try {
    t.c();
  } catch (o) {
    throw t.d(), o;
  }
  const r = t.d.bind(t);
  return r[Symbol.dispose] = r, r;
}
function zC(e, n = {}) {
  const t = {};
  for (const r in e) {
    const o = n[r], i = DC(o === void 0 ? e[r] : o);
    t[r] = i;
  }
  return t;
}
Le.prototype.brand = $C, Le.prototype.h = function() {
  return !0;
}, Le.prototype.S = function(e) {
  const n = this.t;
  n !== e && e.e === void 0 && (e.x = n, this.t = e, n !== void 0 ? n.e = e : Vu(() => {
    var t;
    (t = this.W) == null || t.call(this);
  }));
}, Le.prototype.U = function(e) {
  if (this.t !== void 0) {
    const n = e.e, t = e.x;
    n !== void 0 && (n.x = t, e.e = void 0), t !== void 0 && (t.e = n, e.x = void 0), e === this.t && (this.t = t, t === void 0 && Vu(() => {
      var r;
      (r = this.Z) == null || r.call(this);
    }));
  }
}, Le.prototype.subscribe = function(e) {
  return Kl(() => {
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
  const e = ju(this);
  return e !== void 0 && (e.i = this.i), this.v;
}, set(e) {
  if (e !== this.v) {
    if (Ba > 100) throw new Error("Cycle detected");
    this.v = e, this.i++, Wo++, rn++;
    try {
      for (let n = this.t; n !== void 0; n = n.x) n.t.N();
    } finally {
      os();
    }
  }
} }), Gn.prototype = new Le(), Gn.prototype.h = function() {
  if (this.f &= -3, 1 & this.f) return !1;
  if ((36 & this.f) == 32 || (this.f &= -5, this.g === Wo)) return !0;
  if (this.g = Wo, this.f |= 1, this.i > 0 && !ph(this)) return this.f &= -2, !0;
  const e = se;
  try {
    Uu(this), se = this;
    const n = this.x();
    (16 & this.f || this.v !== n || this.i === 0) && (this.v = n, this.f &= -17, this.i++);
  } catch (n) {
    this.v = n, this.f |= 16, this.i++;
  }
  return se = e, hh(this), this.f &= -2, !0;
}, Gn.prototype.S = function(e) {
  if (this.t === void 0) {
    this.f |= 36;
    for (let n = this.s; n !== void 0; n = n.n) n.S.S(n);
  }
  Le.prototype.S.call(this, e);
}, Gn.prototype.U = function(e) {
  if (this.t !== void 0 && (Le.prototype.U.call(this, e), this.t === void 0)) {
    this.f &= -33;
    for (let n = this.s; n !== void 0; n = n.n) n.S.U(n);
  }
}, Gn.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 6;
    for (let e = this.t; e !== void 0; e = e.x) e.t.N();
  }
}, Object.defineProperty(Gn.prototype, "value", { get() {
  if (1 & this.f) throw new Error("Cycle detected");
  const e = ju(this);
  if (this.h(), e !== void 0 && (e.i = this.i), 16 & this.f) throw this.v;
  return this.v;
} }), tr.prototype.c = function() {
  const e = this.S();
  try {
    if (8 & this.f || this.x === void 0) return;
    const n = this.x();
    typeof n == "function" && (this.u = n);
  } finally {
    e();
  }
}, tr.prototype.S = function() {
  if (1 & this.f) throw new Error("Cycle detected");
  this.f |= 1, this.f &= -9, mh(this), Uu(this), rn++;
  const e = se;
  return se = this, LC.bind(this, e);
}, tr.prototype.N = function() {
  2 & this.f || (this.f |= 2, this.o = Yr, Yr = this);
}, tr.prototype.d = function() {
  this.f |= 8, 1 & this.f || Wl(this);
}, tr.prototype.dispose = function() {
  this.d();
};
function BC(e) {
  return (typeof e.nodes == "function" ? e.nodes() : e.nodes) || [];
}
function ue(e, ...n) {
  const t = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", e);
  for (const o of n) r.append("v", o);
  throw t.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
function yh(e, n) {
  if (e && n && !Array.isArray(n) && typeof e == "object" && typeof n == "object") {
    const t = e, r = n;
    for (const o in r) t[o] = yh(t[o], r[o]);
    return e;
  }
  return n;
}
const ql = 0, Va = 1, bh = 2, js = 3, Po = 4, Hn = 5, Us = 6, zr = 7;
function Gs(e) {
  return e.id === ql;
}
function vh(e) {
  return e.id === bh;
}
function VC(e) {
  return (function(n) {
    return n.id === Va;
  })(e) || ue(305, String(e.id), String(Va)), Object.assign(e, { id: bh });
}
const jC = /* @__PURE__ */ new Set();
let UC = class {
  constructor(n, t) {
    I(this, "builder");
    I(this, "configs");
    I(this, "_dependency");
    I(this, "_peerNameSet");
    I(this, "extension");
    I(this, "state");
    I(this, "_signal");
    this.builder = n, this.extension = t, this.configs = /* @__PURE__ */ new Set(), this.state = { id: ql };
  }
  mergeConfigs() {
    let n = this.extension.config || {};
    const t = this.extension.mergeConfig ? this.extension.mergeConfig.bind(this.extension) : wC;
    for (const r of this.configs) n = t(n, r);
    return n;
  }
  init(n) {
    const t = this.state;
    vh(t) || ue(306, String(t.id));
    const r = { getDependency: this.getInitDependency.bind(this), getDirectDependentNames: this.getDirectDependentNames.bind(this), getPeer: this.getInitPeer.bind(this), getPeerNameSet: this.getPeerNameSet.bind(this) }, o = { ...r, getDependency: this.getDependency.bind(this), getInitResult: this.getInitResult.bind(this), getPeer: this.getPeer.bind(this) }, i = (function(a, l, c) {
      return Object.assign(a, { config: l, id: js, registerState: c });
    })(t, this.mergeConfigs(), r);
    let s;
    this.state = i, this.extension.init && (s = this.extension.init(n, i.config, r)), this.state = (function(a, l, c) {
      return Object.assign(a, { id: Po, initResult: l, registerState: c });
    })(i, s, o);
  }
  build(n) {
    const t = this.state;
    let r;
    t.id !== Po && ue(307, String(t.id), String(Hn)), this.extension.build && (r = this.extension.build(n, t.config, t.registerState));
    const o = { ...t.registerState, getOutput: () => r, getSignal: this.getSignal.bind(this) };
    this.state = (function(i, s, a) {
      return Object.assign(i, { id: Hn, output: s, registerState: a });
    })(t, r, o);
  }
  register(n, t) {
    this._signal = t;
    const r = this.state;
    r.id !== Hn && ue(308, String(r.id), String(Hn));
    const o = this.extension.register && this.extension.register(n, r.config, r.registerState);
    return this.state = (function(i) {
      return Object.assign(i, { id: Us });
    })(r), () => {
      const i = this.state;
      i.id !== zr && ue(309, String(r.id), String(zr)), this.state = (function(s) {
        return Object.assign(s, { id: Hn });
      })(i), o && o();
    };
  }
  afterRegistration(n) {
    const t = this.state;
    let r;
    return t.id !== Us && ue(310, String(t.id), String(Us)), this.extension.afterRegistration && (r = this.extension.afterRegistration(n, t.config, t.registerState)), this.state = (function(o) {
      return Object.assign(o, { id: zr });
    })(t), r;
  }
  getSignal() {
    return this._signal === void 0 && ue(311), this._signal;
  }
  getInitResult() {
    this.extension.init === void 0 && ue(312, this.extension.name);
    const n = this.state;
    return (function(t) {
      return t.id >= Po;
    })(n) || ue(313, String(n.id), String(Po)), n.initResult;
  }
  getInitPeer(n) {
    const t = this.builder.extensionNameMap.get(n);
    return t ? t.getExtensionInitDependency() : void 0;
  }
  getExtensionInitDependency() {
    const n = this.state;
    return (function(t) {
      return t.id >= js;
    })(n) || ue(314, String(n.id), String(js)), { config: n.config };
  }
  getPeer(n) {
    const t = this.builder.extensionNameMap.get(n);
    return t ? t.getExtensionDependency() : void 0;
  }
  getInitDependency(n) {
    const t = this.builder.getExtensionRep(n);
    return t === void 0 && ue(315, this.extension.name, n.name), t.getExtensionInitDependency();
  }
  getDependency(n) {
    const t = this.builder.getExtensionRep(n);
    return t === void 0 && ue(315, this.extension.name, n.name), t.getExtensionDependency();
  }
  getState() {
    const n = this.state;
    return (function(t) {
      return t.id >= zr;
    })(n) || ue(316, String(n.id), String(zr)), n;
  }
  getDirectDependentNames() {
    return this.builder.incomingEdges.get(this.extension.name) || jC;
  }
  getPeerNameSet() {
    let n = this._peerNameSet;
    return n || (n = new Set((this.extension.peerDependencies || []).map(([t]) => t)), this._peerNameSet = n), n;
  }
  getExtensionDependency() {
    if (!this._dependency) {
      const n = this.state;
      (function(t) {
        return t.id >= Hn;
      })(n) || ue(317, this.extension.name), this._dependency = { config: n.config, init: n.initResult, output: n.output };
    }
    return this._dependency;
  }
};
const Gu = { tag: ar };
function GC() {
  const e = ye();
  e.isEmpty() && e.append(me());
}
const HC = { config: { setOptions: Gu, updateOptions: Gu }, init: ({ $initialEditorState: e = GC }) => ({ $initialEditorState: e, initialized: !1 }), afterRegistration(e, { updateOptions: n, setOptions: t }, r) {
  const o = r.getInitResult();
  if (!o.initialized) {
    o.initialized = !0;
    const { $initialEditorState: i } = o;
    if (WS(i)) e.setEditorState(i, t);
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
}, name: "@lexical/extension/InitialState", nodes: [Rr, Wt, Cr, kr, Ar] }, Hu = Symbol.for("@lexical/extension/LexicalBuilder");
function Wu() {
}
function WC(e) {
  throw e;
}
function Io(e) {
  return Array.isArray(e) ? e : [e];
}
const Hs = "0.39.0+prod.esm";
let xh = class Ko {
  constructor(n) {
    I(this, "roots");
    I(this, "extensionNameMap");
    I(this, "outgoingConfigEdges");
    I(this, "incomingEdges");
    I(this, "conflicts");
    I(this, "_sortedExtensionReps");
    I(this, "PACKAGE_VERSION");
    this.outgoingConfigEdges = /* @__PURE__ */ new Map(), this.incomingEdges = /* @__PURE__ */ new Map(), this.extensionNameMap = /* @__PURE__ */ new Map(), this.conflicts = /* @__PURE__ */ new Map(), this.PACKAGE_VERSION = Hs, this.roots = n;
    for (const t of n) this.addExtension(t);
  }
  static fromExtensions(n) {
    const t = [Io(HC)];
    for (const r of n) t.push(Io(r));
    return new Ko(t);
  }
  static maybeFromEditor(n) {
    const t = n[Hu];
    return t && (t.PACKAGE_VERSION !== Hs && ue(292, t.PACKAGE_VERSION, Hs), t instanceof Ko || ue(293)), t;
  }
  static fromEditor(n) {
    const t = Ko.maybeFromEditor(n);
    return t === void 0 && ue(294), t;
  }
  constructEditor() {
    const { $initialEditorState: n, onError: t, ...r } = this.buildCreateEditorArgs(), o = Object.assign(Mp({ ...r, ...t ? { onError: (i) => {
      t(i, o);
    } } : {} }), { [Hu]: this });
    for (const i of this.sortedExtensionReps()) i.build(o);
    return o;
  }
  buildEditor() {
    let n = Wu;
    function t() {
      try {
        n();
      } finally {
        n = Wu;
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
    if (t) return t.extension !== n && ue(295, n.name), t;
  }
  addEdge(n, t, r) {
    const o = this.outgoingConfigEdges.get(n);
    o ? o.set(t, r) : this.outgoingConfigEdges.set(n, /* @__PURE__ */ new Map([[t, r]]));
    const i = this.incomingEdges.get(t);
    i ? i.add(n) : this.incomingEdges.set(t, /* @__PURE__ */ new Set([n]));
  }
  addExtension(n) {
    this._sortedExtensionReps !== void 0 && ue(296);
    const t = Io(n), [r] = t;
    typeof r.name != "string" && ue(297, typeof r.name);
    let o = this.extensionNameMap.get(r.name);
    if (o !== void 0 && o.extension !== r && ue(298, r.name), !o) {
      o = new UC(this, r), this.extensionNameMap.set(r.name, o);
      const i = this.conflicts.get(r.name);
      typeof i == "string" && ue(299, r.name, i);
      for (const s of r.conflictsWith || []) this.extensionNameMap.has(s) && ue(299, r.name, s), this.conflicts.set(s, r.name);
      for (const s of r.dependencies || []) {
        const a = Io(s);
        this.addEdge(r.name, a[0].name, a.slice(1)), this.addExtension(a);
      }
      for (const [s, a] of r.peerDependencies || []) this.addEdge(r.name, s, a ? [a] : []);
    }
  }
  sortedExtensionReps() {
    if (this._sortedExtensionReps) return this._sortedExtensionReps;
    const n = [], t = (r, o) => {
      let i = r.state;
      if (vh(i)) return;
      const s = r.extension.name;
      var a;
      Gs(i) || ue(300, s, o || "[unknown]"), Gs(a = i) || ue(304, String(a.id), String(ql)), i = Object.assign(a, { id: Va }), r.state = i;
      const l = this.outgoingConfigEdges.get(s);
      if (l) for (const c of l.keys()) {
        const u = this.extensionNameMap.get(c);
        u && t(u, s);
      }
      i = VC(i), r.state = i, n.push(r);
    };
    for (const r of this.extensionNameMap.values()) Gs(r.state) && t(r);
    for (const r of n) for (const [o, i] of this.outgoingConfigEdges.get(r.extension.name) || []) if (i.length > 0) {
      const s = this.extensionNameMap.get(o);
      if (s) for (const a of i) s.configs.add(a);
    }
    for (const [r, ...o] of this.roots) if (o.length > 0) {
      const i = this.extensionNameMap.get(r.name);
      i === void 0 && ue(301, r.name);
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
    for (const u of a) {
      const { extension: d } = u;
      if (d.onError !== void 0 && (n.onError = d.onError), d.disableEvents !== void 0 && (n.disableEvents = d.disableEvents), d.parentEditor !== void 0 && (n.parentEditor = d.parentEditor), d.editable !== void 0 && (n.editable = d.editable), d.namespace !== void 0 && (n.namespace = d.namespace), d.$initialEditorState !== void 0 && (n.$initialEditorState = d.$initialEditorState), d.nodes) for (const f of BC(d)) {
        if (typeof f != "function") {
          const g = r.get(f.replace);
          g && ue(302, d.name, f.replace.name, g.extension.name), r.set(f.replace, u);
        }
        t.add(f);
      }
      if (d.html) {
        if (d.html.export) for (const [f, g] of d.html.export.entries()) o.set(f, g);
        d.html.import && Object.assign(i, d.html.import);
      }
      d.theme && yh(s, d.theme);
    }
    Object.keys(s).length > 0 && (n.theme = s), t.size && (n.nodes = [...t]);
    const l = Object.keys(i).length > 0, c = o.size > 0;
    (l || c) && (n.html = {}, l && (n.html.import = i), c && (n.html.export = o));
    for (const u of a) u.init(n);
    return n.onError || (n.onError = WC), n;
  }
};
function KC(e, n) {
  const t = xh.fromEditor(e).extensionNameMap.get(n);
  return t ? t.getExtensionDependency() : void 0;
}
class mo extends Nl {
  static getType() {
    return "horizontalrule";
  }
  static clone(n) {
    return new mo(n.__key);
  }
  static importJSON(n) {
    return wh().updateFromJSON(n);
  }
  static importDOM() {
    return { hr: () => ({ conversion: qC, priority: 0 }) };
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
function qC() {
  return { node: wh() };
}
function wh() {
  return Xp(mo);
}
function YC(e) {
  return e instanceof mo;
}
const ZC = { name: "@lexical/react/ReactProvider" };
function JC() {
  return ye().getTextContent();
}
function XC(e, n = !0) {
  if (e) return !1;
  let t = JC();
  return n && (t = t.trim()), t === "";
}
function QC(e) {
  if (!XC(e, !1)) return !1;
  const n = ye().getChildren(), t = n.length;
  if (t > 1) return !1;
  for (let r = 0; r < t; r++) {
    const o = n[r];
    if (re(o)) return !1;
    if (O(o)) {
      if (!go(o) || o.__indent !== 0) return !1;
      const i = o.getChildren(), s = i.length;
      for (let a = 0; a < s; a++) {
        const l = i[r];
        if (!V(l)) return !1;
      }
    }
  }
  return !0;
}
function _h(e) {
  return () => QC(e);
}
function e1(e) {
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
function t1(e, n) {
  const t = Bp(n) ? n.body.childNodes : n.childNodes;
  let r = [];
  const o = [];
  for (const i of t) if (!Ch.has(i.nodeName)) {
    const s = kh(i, e, o, !1);
    s !== null && (r = r.concat(s));
  }
  return (function(i) {
    for (const s of i) s.getNextSibling() instanceof Al && s.insertAfter(at());
    for (const s of i) {
      const a = s.getChildren();
      for (const l of a) s.insertBefore(l);
      s.remove();
    }
  })(o), r;
}
function n1(e, n) {
  if (typeof document > "u" || typeof window > "u" && global.window === void 0) throw new Error("To use $generateHtmlFromNodes in headless mode please initialize a headless browser implementation such as JSDom before calling this function.");
  const t = document.createElement("div"), r = ye().getChildren();
  for (let o = 0; o < r.length; o++)
    Sh(e, r[o], t, n);
  return t.innerHTML;
}
function Sh(e, n, t, r = null) {
  let o = r === null || n.isSelected(r);
  const i = O(n) && n.excludeFromCopy("html");
  let s = n;
  r !== null && V(n) && (s = lh(r, n, "clone"));
  const a = O(s) ? s.getChildren() : [], l = Fl(e, s.getType());
  let c;
  c = l && l.exportDOM !== void 0 ? l.exportDOM(e, s) : s.exportDOM(e);
  const { element: u, after: d } = c;
  if (!u) return !1;
  const f = document.createDocumentFragment();
  for (let g = 0; g < a.length; g++) {
    const p = a[g], h = Sh(e, p, f, r);
    !o && O(n) && h && n.extractWithChild(p, r, "html") && (o = !0);
  }
  if (o && !i) {
    if ((_e(u) || Da(u)) && u.append(f), t.append(u), d) {
      const g = d.call(s, u);
      g && (Da(u) ? u.replaceChildren(g) : u.replaceWith(g));
    }
  } else t.append(f);
  return o;
}
const Ch = /* @__PURE__ */ new Set(["STYLE", "SCRIPT"]);
function kh(e, n, t, r, o = /* @__PURE__ */ new Map(), i) {
  let s = [];
  if (Ch.has(e.nodeName)) return s;
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
  const g = (a == null || !Me(a)) && (a != null && Pa(a) || r);
  for (let p = 0; p < d.length; p++) f.push(...kh(d[p], n, t, g, new Map(o), a));
  return u != null && (f = u(f)), xi(e) && (f = r1(e, f, g ? () => {
    const p = new Al();
    return t.push(p), p;
  } : me)), a == null ? f.length > 0 ? s = s.concat(f) : xi(e) && (function(p) {
    return p.nextSibling == null || p.previousSibling == null ? !1 : La(p.nextSibling) && La(p.previousSibling);
  })(e) && (s = s.concat(at())) : O(a) && a.append(...f), s;
}
function r1(e, n, t) {
  const r = e.style.textAlign, o = [];
  let i = [];
  for (let s = 0; s < n.length; s++) {
    const a = n[s];
    if (Pa(a)) r && !a.getFormat() && a.setFormat(r), o.push(a);
    else if (i.push(a), s === n.length - 1 || s < n.length - 1 && Pa(n[s + 1])) {
      const l = t();
      l.setFormat(r), l.append(...i), o.push(l), i = [];
    }
  }
  return o;
}
function wi(e, ...n) {
  const t = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", e);
  for (const o of n) r.append("v", o);
  throw t.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
function o1(e, n = G()) {
  return n == null && wi(166), L(n) && n.isCollapsed() || n.getNodes().length === 0 ? "" : n1(e, n);
}
function i1(e, n = G()) {
  return n == null && wi(166), L(n) && n.isCollapsed() || n.getNodes().length === 0 ? null : JSON.stringify(s1(e, n));
}
function Ku(e, n, t) {
  const r = e.getData("application/x-lexical-editor");
  if (r) try {
    const a = JSON.parse(r);
    if (a.namespace === t._config.namespace && Array.isArray(a.nodes))
      return qu(t, a1(a.nodes), n);
  } catch (a) {
    console.error(a);
  }
  const o = e.getData("text/html"), i = e.getData("text/plain");
  if (o && i !== o) try {
    const a = new DOMParser().parseFromString((function(l) {
      return window.trustedTypes && window.trustedTypes.createPolicy ? window.trustedTypes.createPolicy("lexical", { createHTML: (c) => c }).createHTML(l) : l;
    })(o), "text/html");
    return qu(t, t1(t, a), n);
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
` ? c.insertParagraph() : u === "	" ? c.insertNodes([Er()]) : c.insertText(u);
      }
    }
  } else n.insertRawText(s);
}
function qu(e, n, t) {
  e.dispatchCommand(uS, { nodes: n, selection: t }) || (t.insertNodes(n), (function(r) {
    if (L(r) && r.isCollapsed()) {
      const o = r.anchor;
      let i = null;
      const s = Vt(o, "previous");
      if (s) if (tn(s)) i = s.origin;
      else {
        const a = ln(s, lt(ye(), "next").getFlipped());
        for (const l of a) {
          if (V(l.origin)) {
            i = l.origin;
            break;
          }
          if (O(l.origin) && !l.origin.isInline()) break;
        }
      }
      if (i && V(i)) {
        const a = i.getFormat(), l = i.getStyle();
        r.format === a && r.style === l || (r.format = a, r.style = l, r.dirty = !0);
      }
    }
  })(t));
}
function Eh(e, n, t, r = []) {
  let o = n === null || t.isSelected(n);
  const i = O(t) && t.excludeFromCopy("html");
  let s = t;
  n !== null && V(s) && (s = lh(n, s, "clone"));
  const a = O(s) ? s.getChildren() : [], l = (function(c) {
    const u = c.exportJSON(), d = c.constructor;
    if (u.type !== d.getType() && wi(58, d.name), O(c)) {
      const f = u.children;
      Array.isArray(f) || wi(59, d.name);
    }
    return u;
  })(s);
  V(s) && s.getTextContentSize() === 0 && (o = !1);
  for (let c = 0; c < a.length; c++) {
    const u = a[c], d = Eh(e, n, u, l.children);
    !o && O(t) && d && t.extractWithChild(u, n, "clone") && (o = !0);
  }
  if (o && !i) r.push(l);
  else if (Array.isArray(l.children)) for (let c = 0; c < l.children.length; c++) {
    const u = l.children[c];
    r.push(u);
  }
  return o;
}
function s1(e, n) {
  const t = [], r = ye().getChildren();
  for (let o = 0; o < r.length; o++)
    Eh(e, n, r[o], t);
  return { namespace: e._config.namespace, nodes: t };
}
function a1(e) {
  const n = [];
  for (let t = 0; t < e.length; t++) {
    const r = e[t], o = HS(r);
    V(o) && NC(o), n.push(o);
  }
  return n;
}
let Wn = null;
async function Yu(e, n, t) {
  if (Wn !== null) return !1;
  if (n !== null) return new Promise((c, u) => {
    e.update(() => {
      c(Zu(e, n, t));
    });
  });
  const r = e.getRootElement(), o = e._window || window, i = o.document, s = ht(o);
  if (r === null || s === null) return !1;
  const a = i.createElement("span");
  a.style.cssText = "position: fixed; top: -1000px;", a.append(i.createTextNode("#")), r.append(a);
  const l = new Range();
  return l.setStart(a, 0), l.setEnd(a, 1), s.removeAllRanges(), s.addRange(l), new Promise((c, u) => {
    const d = e.registerCommand(Ki, (f) => (xn(f, ClipboardEvent) && (d(), Wn !== null && (o.clearTimeout(Wn), Wn = null), c(Zu(e, f, t))), !0), qS);
    Wn = o.setTimeout(() => {
      d(), Wn = null, c(!1);
    }, 50), i.execCommand("copy"), a.remove();
  });
}
function Zu(e, n, t) {
  if (t === void 0) {
    const o = ht(e._window), i = G();
    if (!i || i.isCollapsed() || !o) return !1;
    const s = o.anchorNode, a = o.focusNode;
    if (s !== null && a !== null && !po(e, s, a)) return !1;
    t = l1(i);
  }
  n.preventDefault();
  const r = n.clipboardData;
  return r !== null && (c1(r, t), !0);
}
const Nh = [["text/html", o1], ["application/x-lexical-editor", i1]];
function l1(e = G()) {
  const n = { "text/plain": e ? e.getTextContent() : "" };
  if (e) {
    const t = ts();
    for (const [r, o] of Nh) {
      const i = o(t, e);
      i !== null && (n[r] = i);
    }
  }
  return n;
}
function c1(e, n) {
  for (const [t] of Nh) n[t] === void 0 && e.setData(t, "");
  for (const t in n) {
    const r = n[t];
    r !== void 0 && e.setData(t, r);
  }
}
function Ju(e, n) {
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
const Vn = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, u1 = Vn && "documentMode" in document ? document.documentMode : null, d1 = Vn && /Mac|iPod|iPhone|iPad/.test(navigator.platform), f1 = !(!Vn || !("InputEvent" in window) || u1) && "getTargetRanges" in new window.InputEvent("input"), g1 = Vn && /Version\/[\d.]+.*Safari/.test(navigator.userAgent), Xu = Vn && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, p1 = Vn && /^(?=.*Chrome).*/i.test(navigator.userAgent), h1 = Vn && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && d1 && !p1, Qu = q("DRAG_DROP_PASTE_FILE");
let is = class Rh extends Ze {
  static getType() {
    return "quote";
  }
  static clone(n) {
    return new Rh(n.__key);
  }
  createDOM(n) {
    const t = document.createElement("blockquote");
    return ct(t, n.theme.quote), t;
  }
  updateDOM(n, t) {
    return !1;
  }
  static importDOM() {
    return { blockquote: (n) => ({ conversion: m1, priority: 0 }) };
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
    return ss().updateFromJSON(n);
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
function ss() {
  return nt(new is());
}
function ja(e) {
  return e instanceof is;
}
let as = class Ah extends Ze {
  constructor(t, r) {
    super(r);
    I(this, "__tag");
    this.__tag = t;
  }
  static getType() {
    return "heading";
  }
  static clone(t) {
    return new Ah(t.__tag, t.__key);
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
    return { h1: (t) => ({ conversion: Kn, priority: 0 }), h2: (t) => ({ conversion: Kn, priority: 0 }), h3: (t) => ({ conversion: Kn, priority: 0 }), h4: (t) => ({ conversion: Kn, priority: 0 }), h5: (t) => ({ conversion: Kn, priority: 0 }), h6: (t) => ({ conversion: Kn, priority: 0 }), p: (t) => {
      const r = t.firstChild;
      return r !== null && ed(r) ? { conversion: () => ({ node: null }), priority: 3 } : null;
    }, span: (t) => ed(t) ? { conversion: (r) => ({ node: wn("h1") }), priority: 3 } : null };
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
    return wn(t.tag).updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setTag(t.tag);
  }
  exportJSON() {
    return { ...super.exportJSON(), tag: this.getTag() };
  }
  insertNewAfter(t, r = !0) {
    const o = t ? t.anchor.offset : 0, i = this.getLastDescendant(), s = !i || t && t.anchor.key === i.getKey() && o === i.getTextContentSize() || !t ? me() : wn(this.getTag()), a = this.getDirection();
    if (s.setDirection(a), this.insertAfter(s, r), o === 0 && !this.isEmpty() && t) {
      const l = me();
      l.select(), this.replace(l, !0);
    }
    return s;
  }
  collapseAtStart() {
    const t = this.isEmpty() ? me() : wn(this.getTag());
    return this.getChildren().forEach((r) => t.append(r)), this.replace(t), !0;
  }
  extractWithChild() {
    return !0;
  }
};
function ed(e) {
  return e.nodeName.toLowerCase() === "span" && e.style.fontSize === "26pt";
}
function Kn(e) {
  const n = e.nodeName.toLowerCase();
  let t = null;
  return n !== "h1" && n !== "h2" && n !== "h3" && n !== "h4" && n !== "h5" && n !== "h6" || (t = wn(n), e.style !== null && (zl(e, t), t.setFormat(e.style.textAlign))), { node: t };
}
function m1(e) {
  const n = ss();
  return e.style !== null && (n.setFormat(e.style.textAlign), zl(e, n)), { node: n };
}
function wn(e = "h1") {
  return nt(new as(e));
}
function y1(e) {
  return e instanceof as;
}
function Oo(e) {
  let n = null;
  if (xn(e, DragEvent) ? n = e.dataTransfer : xn(e, ClipboardEvent) && (n = e.clipboardData), n === null) return [!1, [], !1];
  const t = n.types, r = t.includes("Files"), o = t.includes("text/html") || t.includes("text/plain");
  return [r, Array.from(n.files), o];
}
function td(e) {
  const n = G();
  if (!L(n)) return !1;
  const t = /* @__PURE__ */ new Set(), r = n.getNodes();
  for (let o = 0; o < r.length; o++) {
    const i = r[o], s = i.getKey();
    if (t.has(s)) continue;
    const a = et(i, (c) => O(c) && !c.isInline());
    if (a === null) continue;
    const l = a.getKey();
    a.canIndent() && !t.has(l) && (t.add(l), e(a));
  }
  return t.size > 0;
}
function nd(e) {
  const n = pr(e);
  return re(n);
}
function Ws(e) {
  for (const n of ["lowercase", "uppercase", "capitalize"]) e.hasFormat(n) && e.toggleFormat(n);
}
function b1(e) {
  return jt(e.registerCommand(bl, (n) => {
    const t = G();
    return !!Oe(t) && (t.clear(), !0);
  }, ee), e.registerCommand(_n, (n) => {
    const t = G();
    return L(t) ? (t.deleteCharacter(n), !0) : !!Oe(t) && (t.deleteNodes(), !0);
  }, ee), e.registerCommand(Qr, (n) => {
    const t = G();
    return !!L(t) && (t.deleteWord(n), !0);
  }, ee), e.registerCommand(eo, (n) => {
    const t = G();
    return !!L(t) && (t.deleteLine(n), !0);
  }, ee), e.registerCommand(ir, (n) => {
    const t = G();
    if (typeof n == "string") t !== null && t.insertText(n);
    else {
      if (t === null) return !1;
      const r = n.dataTransfer;
      if (r != null) Ku(r, t, e);
      else if (L(t)) {
        const o = n.data;
        return o && t.insertText(o), !0;
      }
    }
    return !0;
  }, ee), e.registerCommand(_a, () => {
    const n = G();
    return !!L(n) && (n.removeText(), !0);
  }, ee), e.registerCommand(xt, (n) => {
    const t = G();
    return !!L(t) && (t.formatText(n), !0);
  }, ee), e.registerCommand(hS, (n) => {
    const t = G();
    if (!L(t) && !Oe(t)) return !1;
    const r = t.getNodes();
    for (const o of r) {
      const i = et(o, (s) => O(s) && !s.isInline());
      i !== null && i.setFormat(n);
    }
    return !0;
  }, ee), e.registerCommand(or, (n) => {
    const t = G();
    return !!L(t) && (t.insertLineBreak(n), !0);
  }, ee), e.registerCommand(Xr, () => {
    const n = G();
    return !!L(n) && (n.insertParagraph(), !0);
  }, ee), e.registerCommand(gS, () => (jS([Er()]), !0), ee), e.registerCommand(pS, () => td((n) => {
    const t = n.getIndent();
    n.setIndent(t + 1);
  }), ee), e.registerCommand(eu, () => td((n) => {
    const t = n.getIndent();
    t > 0 && n.setIndent(Math.max(0, t - 1));
  }), ee), e.registerCommand(op, (n) => {
    const t = G();
    if (Oe(t)) {
      const r = t.getNodes();
      if (r.length > 0) return n.preventDefault(), r[0].selectPrevious(), !0;
    } else if (L(t)) {
      const r = Oa(t.focus, !0);
      if (!n.shiftKey && re(r) && !r.isIsolated() && !r.isInline()) return r.selectPrevious(), n.preventDefault(), !0;
    }
    return !1;
  }, ee), e.registerCommand(ip, (n) => {
    const t = G();
    if (Oe(t)) {
      const r = t.getNodes();
      if (r.length > 0) return n.preventDefault(), r[0].selectNext(0, 0), !0;
    } else if (L(t)) {
      if ((function(o) {
        const i = o.focus;
        return i.key === "root" && i.offset === ye().getChildrenSize();
      })(t)) return n.preventDefault(), !0;
      const r = Oa(t.focus, !1);
      if (!n.shiftKey && re(r) && !r.isIsolated() && !r.isInline()) return r.selectNext(), n.preventDefault(), !0;
    }
    return !1;
  }, ee), e.registerCommand(rp, (n) => {
    const t = G();
    if (Oe(t)) {
      const r = t.getNodes();
      if (r.length > 0) return n.preventDefault(), Du(r[0]) ? r[0].selectNext(0, 0) : r[0].selectPrevious(), !0;
    }
    if (!L(t)) return !1;
    if (zu(t, !0)) {
      const r = n.shiftKey;
      return n.preventDefault(), Bu(t, r, !0), !0;
    }
    return !1;
  }, ee), e.registerCommand(np, (n) => {
    const t = G();
    if (Oe(t)) {
      const o = t.getNodes();
      if (o.length > 0) return n.preventDefault(), Du(o[0]) ? o[0].selectPrevious() : o[0].selectNext(0, 0), !0;
    }
    if (!L(t)) return !1;
    const r = n.shiftKey;
    return !!zu(t, !1) && (n.preventDefault(), Bu(t, r, !1), !0);
  }, ee), e.registerCommand(ap, (n) => {
    if (nd(n.target)) return !1;
    const t = G();
    if (L(t)) {
      if ((function(r) {
        if (!r.isCollapsed()) return !1;
        const { anchor: o } = r;
        if (o.offset !== 0) return !1;
        const i = o.getNode();
        if (we(i)) return !1;
        const s = OC(i);
        return s.getIndent() > 0 && (s.is(i) || i.is(s.getFirstDescendant()));
      })(t)) return n.preventDefault(), e.dispatchCommand(eu, void 0);
      if (Xu && navigator.language === "ko-KR") return !1;
    } else if (!Oe(t)) return !1;
    return n.preventDefault(), e.dispatchCommand(_n, !0);
  }, ee), e.registerCommand(cp, (n) => {
    if (nd(n.target)) return !1;
    const t = G();
    return !(!L(t) && !Oe(t)) && (n.preventDefault(), e.dispatchCommand(_n, !1));
  }, ee), e.registerCommand(di, (n) => {
    const t = G();
    if (!L(t)) return !1;
    if (Ws(t), n !== null) {
      if ((Xu || g1 || h1) && f1) return !1;
      if (n.preventDefault(), n.shiftKey) return e.dispatchCommand(or, !1);
    }
    return e.dispatchCommand(Xr, void 0);
  }, ee), e.registerCommand(lp, () => {
    const n = G();
    return !!L(n) && (e.blur(), !0);
  }, ee), e.registerCommand(dp, (n) => {
    const [, t] = Oo(n);
    if (t.length > 0) {
      const o = Ju(n.clientX, n.clientY);
      if (o !== null) {
        const { offset: i, node: s } = o, a = pr(s);
        if (a !== null) {
          const l = Zi();
          if (V(a)) l.anchor.set(a.getKey(), i, "text"), l.focus.set(a.getKey(), i, "text");
          else {
            const u = a.getParentOrThrow().getKey(), d = a.getIndexWithinParent() + 1;
            l.anchor.set(u, d, "element"), l.focus.set(u, d, "element");
          }
          const c = si(l);
          Fe(c);
        }
        e.dispatchCommand(Qu, t);
      }
      return n.preventDefault(), !0;
    }
    const r = G();
    return !!L(r);
  }, ee), e.registerCommand(fp, (n) => {
    const [t] = Oo(n), r = G();
    return !(t && !L(r));
  }, ee), e.registerCommand(gp, (n) => {
    const [t] = Oo(n), r = G();
    if (t && !L(r)) return !1;
    const o = Ju(n.clientX, n.clientY);
    if (o !== null) {
      const i = pr(o.node);
      re(i) && n.preventDefault();
    }
    return !0;
  }, ee), e.registerCommand(Sa, () => (eC(), !0), ee), e.registerCommand(Ki, (n) => (Yu(e, xn(n, ClipboardEvent) ? n : null), !0), ee), e.registerCommand(_l, (n) => ((async function(t, r) {
    await Yu(r, xn(t, ClipboardEvent) ? t : null), r.update(() => {
      const o = G();
      L(o) ? o.removeText() : Oe(o) && o.getNodes().forEach((i) => i.remove());
    });
  })(n, e), !0), ee), e.registerCommand(vl, (n) => {
    const [, t, r] = Oo(n);
    return t.length > 0 && !r ? (e.dispatchCommand(Qu, t), !0) : Tr(n.target) && Pl(n.target) ? !1 : G() !== null && ((function(o, i) {
      o.preventDefault(), i.update(() => {
        const s = G(), a = xn(o, InputEvent) || xn(o, KeyboardEvent) ? null : o.clipboardData;
        a != null && s !== null && Ku(a, s, i);
      }, { tag: AS });
    })(n, e), !0);
  }, ee), e.registerCommand(sp, (n) => {
    const t = G();
    return L(t) && Ws(t), !1;
  }, ee), e.registerCommand(up, (n) => {
    const t = G();
    return L(t) && Ws(t), !1;
  }, ee));
}
function v1(e, ...n) {
  const t = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", e);
  for (const o of n) r.append("v", o);
  throw t.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
const Yl = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? wr : Ke;
function x1({ editor: e, ErrorBoundary: n }) {
  return (function(t, r) {
    const [o, i] = on(() => t.getDecorators());
    return Yl(() => t.registerDecoratorListener((s) => {
      Zy(() => {
        i(s);
      });
    }), [t]), Ke(() => {
      i(t.getDecorators());
    }, [t]), xr(() => {
      const s = [], a = Object.keys(o);
      for (let l = 0; l < a.length; l++) {
        const c = a[l], u = x(r, { onError: (f) => t._onError(f), children: x(Ky, { fallback: null, children: o[c] }) }), d = t.getElementByKey(c);
        d !== null && s.push(ff(u, d, c));
      }
      return s;
    }, [r, o, t]);
  })(e, n);
}
function w1({ editor: e, ErrorBoundary: n }) {
  return (function(t) {
    const r = xh.maybeFromEditor(t);
    if (r && r.hasExtensionByName(ZC.name)) {
      for (const o of ["@lexical/plain-text", "@lexical/rich-text"]) r.hasExtensionByName(o) && v1(320, o);
      return !0;
    }
    return !1;
  })(e) ? null : x(x1, { editor: e, ErrorBoundary: n });
}
function rd(e) {
  return e.getEditorState().read(_h(e.isComposing()));
}
function _1({ contentEditable: e, placeholder: n = null, ErrorBoundary: t }) {
  const [r] = gt();
  return (function(o) {
    Yl(() => jt(b1(o), e1(o)), [o]);
  })(r), F(Ge, { children: [e, x(S1, { content: n }), x(w1, { editor: r, ErrorBoundary: t })] });
}
function S1({ content: e }) {
  const [n] = gt(), t = (function(o) {
    const [i, s] = on(() => rd(o));
    return Yl(() => {
      function a() {
        const l = rd(o);
        s(l);
      }
      return a(), jt(o.registerUpdateListener(() => {
        a();
      }), o.registerEditableListener(() => {
        a();
      }));
    }, [o]), i;
  })(n), r = EC();
  return t ? typeof e == "function" ? e(r) : e : null;
}
const Th = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? wr : Ke;
function C1({ editor: e, ariaActiveDescendant: n, ariaAutoComplete: t, ariaControls: r, ariaDescribedBy: o, ariaErrorMessage: i, ariaExpanded: s, ariaInvalid: a, ariaLabel: l, ariaLabelledBy: c, ariaMultiline: u, ariaOwns: d, ariaRequired: f, autoCapitalize: g, className: p, id: h, role: m = "textbox", spellCheck: b = !0, style: y, tabIndex: v, "data-testid": _, ...S }, C) {
  const [k, N] = on(e.isEditable()), E = fr((T) => {
    T && T.ownerDocument && T.ownerDocument.defaultView ? e.setRootElement(T) : e.setRootElement(null);
  }, [e]), R = xr(() => /* @__PURE__ */ (function(...T) {
    return (A) => {
      for (const D of T) typeof D == "function" ? D(A) : D != null && (D.current = A);
    };
  })(C, E), [E, C]);
  return Th(() => (N(e.isEditable()), e.registerEditableListener((T) => {
    N(T);
  })), [e]), x("div", { "aria-activedescendant": k ? n : void 0, "aria-autocomplete": k ? t : "none", "aria-controls": k ? r : void 0, "aria-describedby": o, ...i != null ? { "aria-errormessage": i } : {}, "aria-expanded": k && m === "combobox" ? !!s : void 0, ...a != null ? { "aria-invalid": a } : {}, "aria-label": l, "aria-labelledby": c, "aria-multiline": u, "aria-owns": k ? d : void 0, "aria-readonly": !k || void 0, "aria-required": f, autoCapitalize: g, className: p, contentEditable: k, "data-testid": _, id: h, ref: R, role: m, spellCheck: b, style: y, tabIndex: v, ...S });
}
const k1 = Oi(C1);
function od(e) {
  return e.getEditorState().read(_h(e.isComposing()));
}
const E1 = Oi(N1);
function N1(e, n) {
  const { placeholder: t, ...r } = e, [o] = gt();
  return F(Ge, { children: [x(k1, { editor: o, ...r, ref: n }), t != null && x(R1, { editor: o, content: t })] });
}
function R1({ content: e, editor: n }) {
  const t = (function(s) {
    const [a, l] = on(() => od(s));
    return Th(() => {
      function c() {
        const u = od(s);
        l(u);
      }
      return c(), jt(s.registerUpdateListener(() => {
        c();
      }), s.registerEditableListener(() => {
        c();
      }));
    }, [s]), a;
  })(n), [r, o] = on(n.isEditable());
  if (wr(() => (o(n.isEditable()), n.registerEditableListener((s) => {
    o(s);
  })), [n]), !t) return null;
  let i = null;
  return typeof e == "function" ? i = e(r) : e !== null && (i = e), i === null ? null : x("div", { "aria-hidden": !0, children: i });
}
function A1(e, n, t, r, o) {
  if (e === null || t.size === 0 && r.size === 0 && !o) return 0;
  const i = n._selection, s = e._selection;
  if (o) return 1;
  if (!(L(i) && L(s) && s.isCollapsed() && i.isCollapsed())) return 0;
  const a = (function(b, y, v) {
    const _ = b._nodeMap, S = [];
    for (const C of y) {
      const k = _.get(C);
      k !== void 0 && S.push(k);
    }
    for (const [C, k] of v) {
      if (!k) continue;
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
function T1(e, n) {
  let t = Date.now(), r = 0;
  return (o, i, s, a, l, c) => {
    const u = Date.now();
    if (c.has(hi)) return r = 0, t = u, 2;
    const d = A1(o, i, a, l, e.isComposing()), f = (() => {
      const g = s === null || s.editor === e, p = c.has(RS);
      if (!p && g && c.has(ar)) return 0;
      if (o === null) return 1;
      const h = i._selection;
      if (!(a.size > 0 || l.size > 0)) return h !== null ? 0 : 2;
      const m = typeof n == "number" ? n : n.peek();
      return p === !1 && d !== 0 && d === r && u < t + m && g || a.size === 1 && (function(b, y, v) {
        const _ = y._nodeMap.get(b), S = v._nodeMap.get(b), C = y._selection, k = v._selection;
        return !(L(C) && L(k) && C.anchor.type === "element" && C.focus.type === "element" && k.anchor.type === "text" && k.focus.type === "text" || !V(_) || !V(S) || _.__parent !== S.__parent) && JSON.stringify(y.read(() => _.exportJSON())) === JSON.stringify(v.read(() => S.exportJSON()));
      })(Array.from(a)[0], o, i) ? 0 : 1;
    })();
    return t = u, r = d, f;
  };
}
function id(e) {
  e.undoStack = [], e.redoStack = [], e.current = null;
}
function Fh(e, n, t) {
  const r = T1(e, t);
  return jt(e.registerCommand(xl, () => ((function(i, s) {
    const a = s.redoStack, l = s.undoStack;
    if (l.length !== 0) {
      const c = s.current, u = l.pop();
      c !== null && (a.push(c), i.dispatchCommand(ko, !0)), l.length === 0 && i.dispatchCommand(Eo, !1), s.current = u || null, u && u.editor.setEditorState(u.editorState, { tag: hi });
    }
  })(e, n), !0), ee), e.registerCommand(wl, () => ((function(i, s) {
    const a = s.redoStack, l = s.undoStack;
    if (a.length !== 0) {
      const c = s.current;
      c !== null && (l.push(c), i.dispatchCommand(Eo, !0));
      const u = a.pop();
      a.length === 0 && i.dispatchCommand(ko, !1), s.current = u || null, u && u.editor.setEditorState(u.editorState, { tag: hi });
    }
  })(e, n), !0), ee), e.registerCommand(yS, () => (id(n), !1), ee), e.registerCommand(bS, () => (id(n), e.dispatchCommand(ko, !1), e.dispatchCommand(Eo, !1), !0), ee), e.registerUpdateListener(({ editorState: i, prevEditorState: s, dirtyLeaves: a, dirtyElements: l, tags: c }) => {
    const u = n.current, d = n.redoStack, f = n.undoStack, g = u === null ? null : u.editorState;
    if (u !== null && i === g) return;
    const p = r(s, i, u, a, l, c);
    if (p === 1) d.length !== 0 && (n.redoStack = [], e.dispatchCommand(ko, !1)), u !== null && (f.push({ ...u }), e.dispatchCommand(Eo, !0));
    else if (p === 2) return;
    n.current = { editor: e, editorState: i };
  }));
}
function Ph() {
  return { current: null, redoStack: [], undoStack: [] };
}
const Ks = { build: (e, { delay: n, createInitialHistoryState: t, disabled: r }) => zC({ delay: n, disabled: r, historyState: t(e) }), config: { createInitialHistoryState: Ph, delay: 300, disabled: typeof window > "u" }, name: "@lexical/history/History", register: (e, n, t) => {
  const r = t.getOutput();
  return Kl(() => r.disabled.value ? void 0 : Fh(e, r.historyState.value, r.delay));
} };
xC(Ks, { createInitialHistoryState: () => {
  throw new Error("SharedHistory did not inherit parent history");
}, disabled: !0 });
function F1({ delay: e, externalHistoryState: n }) {
  const [t] = gt();
  return (function(r, o, i = 1e3) {
    const s = xr(() => o || Ph(), [o]);
    Ke(() => Fh(r, s, i), [i, r, s]);
  })(t, n, e), null;
}
const P1 = uf(null), qs = {
  didCatch: !1,
  error: null
};
class I1 extends qy {
  constructor(n) {
    super(n), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = qs;
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
    }), this.setState(qs));
  }
  componentDidCatch(n, t) {
    var r, o;
    (o = (r = this.props).onError) == null || o.call(r, n, t);
  }
  componentDidUpdate(n, t) {
    var i, s;
    const { didCatch: r } = this.state, { resetKeys: o } = this.props;
    r && t.error !== null && O1(n.resetKeys, o) && ((s = (i = this.props).onReset) == null || s.call(i, {
      next: o,
      prev: n.resetKeys,
      reason: "keys"
    }), this.setState(qs));
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
        a = dr(r, l);
      else if (o !== void 0)
        a = o;
      else
        throw s;
    }
    return dr(
      P1.Provider,
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
function O1(e = [], n = []) {
  return e.length !== n.length || e.some((t, r) => !Object.is(t, n[r]));
}
function $1({ children: e, onError: n }) {
  return x(I1, { fallback: x("div", { style: { border: "1px solid #f00", color: "#f00", padding: "8px" }, children: "An error was thrown." }), onError: n, children: e });
}
function Qt(e, ...n) {
  const t = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", e);
  for (const o of n) r.append("v", o);
  throw t.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
function Ua(e) {
  let n = 1, t = e.getParent();
  for (; t != null; ) {
    if (oe(t)) {
      const r = t.getParent();
      if (X(r)) {
        n++, t = r.getParent();
        continue;
      }
      Qt(40);
    }
    return n;
  }
  return n;
}
function Ga(e) {
  let n = e.getParent();
  X(n) || Qt(40);
  let t = n;
  for (; t !== null; ) t = t.getParent(), X(t) && (n = t);
  return n;
}
function Ih(e) {
  let n = [];
  const t = e.getChildren().filter(oe);
  for (let r = 0; r < t.length; r++) {
    const o = t[r], i = o.getFirstChild();
    X(i) ? n = n.concat(Ih(i)) : n.push(o);
  }
  return n;
}
function bt(e) {
  return oe(e) && X(e.getFirstChild());
}
function sd(e) {
  return Je().append(e);
}
function Oh(e, n) {
  return oe(e) && (n.length === 0 || n.length === 1 && e.is(n[0]) && e.getChildrenSize() === 0);
}
function ad(e) {
  const n = G();
  if (n !== null) {
    let t = n.getNodes();
    if (L(n)) {
      const o = n.getStartEndPoints();
      o === null && Qt(143);
      const [i] = o, s = i.getNode(), a = s.getParent();
      if (Me(s)) {
        const l = s.getFirstChild();
        if (l) t = l.selectStart().getNodes();
        else {
          const c = me();
          s.append(c), t = c.select().getNodes();
        }
      } else if (Oh(s, t)) {
        const l = Ue(e);
        if (Me(a)) {
          s.replace(l);
          const c = Je();
          O(s) && (c.setFormat(s.getFormatType()), c.setIndent(s.getIndent())), l.append(c);
        } else if (oe(s)) {
          const c = s.getParentOrThrow();
          Mn(l, c.getChildren()), c.replace(l);
        }
        return;
      }
    }
    const r = /* @__PURE__ */ new Set();
    for (let o = 0; o < t.length; o++) {
      const i = t[o];
      if (O(i) && i.isEmpty() && !oe(i) && !r.has(i.getKey())) {
        ld(i, e);
        continue;
      }
      let s = Vp(i) ? i.getParent() : oe(i) && i.isEmpty() ? i : null;
      for (; s != null; ) {
        const a = s.getKey();
        if (X(s)) {
          if (!r.has(a)) {
            const l = Ue(e);
            Mn(l, s.getChildren()), s.replace(l), r.add(a);
          }
          break;
        }
        {
          const l = s.getParent();
          if (Me(l) && !r.has(a)) {
            r.add(a), ld(s, e);
            break;
          }
          s = l;
        }
      }
    }
  }
}
function Mn(e, n) {
  e.splice(e.getChildrenSize(), 0, n);
}
function ld(e, n) {
  if (X(e)) return e;
  const t = e.getPreviousSibling(), r = e.getNextSibling(), o = Je();
  let i;
  if (Mn(o, e.getChildren()), X(t) && n === t.getListType()) t.append(o), X(r) && n === r.getListType() && (Mn(t, r.getChildren()), r.remove()), i = t;
  else if (X(r) && n === r.getListType()) r.getFirstChildOrThrow().insertBefore(o), i = r;
  else {
    const s = Ue(n);
    s.append(o), e.replace(s), i = s;
  }
  return o.setFormat(e.getFormatType()), o.setIndent(e.getIndent()), e.remove(), i;
}
function Zl(e, n) {
  const t = e.getLastChild(), r = n.getFirstChild();
  t && r && bt(t) && bt(r) && (Zl(t.getFirstChild(), r.getFirstChild()), r.remove());
  const o = n.getChildren();
  o.length > 0 && e.append(...o), n.remove();
}
function M1() {
  const e = G();
  if (L(e)) {
    const n = /* @__PURE__ */ new Set(), t = e.getNodes(), r = e.anchor.getNode();
    if (Oh(r, t)) n.add(Ga(r));
    else for (let o = 0; o < t.length; o++) {
      const i = t[o];
      if (Vp(i)) {
        const s = IC(i, fn);
        s != null && n.add(Ga(s));
      }
    }
    for (const o of n) {
      let i = o;
      const s = Ih(o);
      for (const a of s) {
        const l = me().setTextStyle(e.style).setTextFormat(e.format);
        Mn(l, a.getChildren()), i.insertAfter(l), i = l, a.__key === e.anchor.key && $n(e.anchor, Qe(lt(l, "next"))), a.__key === e.focus.key && $n(e.focus, Qe(lt(l, "next"))), a.remove();
      }
      o.remove();
    }
  }
}
function $h(e) {
  const n = e.getListType() !== "check";
  let t = e.getStart();
  for (const r of e.getChildren()) oe(r) && (r.getValue() !== t && r.setValue(t), n && r.getLatest().__checked != null && r.setChecked(void 0), X(r.getFirstChild()) || t++);
}
function D1(e) {
  const n = /* @__PURE__ */ new Set();
  if (bt(e) || n.has(e.getKey())) return;
  const t = e.getParent(), r = e.getNextSibling(), o = e.getPreviousSibling();
  if (bt(r) && bt(o)) {
    const i = o.getFirstChild();
    if (X(i)) {
      i.append(e);
      const s = r.getFirstChild();
      X(s) && (Mn(i, s.getChildren()), r.remove(), n.add(r.getKey()));
    }
  } else if (bt(r)) {
    const i = r.getFirstChild();
    if (X(i)) {
      const s = i.getFirstChild();
      s !== null && s.insertBefore(e);
    }
  } else if (bt(o)) {
    const i = o.getFirstChild();
    X(i) && i.append(e);
  } else if (X(t)) {
    const i = Je().setTextFormat(e.getTextFormat()).setTextStyle(e.getTextStyle()), s = Ue(t.getListType()).setTextFormat(t.getTextFormat()).setTextStyle(t.getTextStyle());
    i.append(s), s.append(e), o ? o.insertAfter(i) : r ? r.insertBefore(i) : t.append(i);
  }
}
function L1(e) {
  if (bt(e)) return;
  const n = e.getParent(), t = n ? n.getParent() : void 0;
  if (X(t ? t.getParent() : void 0) && oe(t) && X(n)) {
    const r = n ? n.getFirstChild() : void 0, o = n ? n.getLastChild() : void 0;
    if (e.is(r)) t.insertBefore(e), n.isEmpty() && t.remove();
    else if (e.is(o)) t.insertAfter(e), n.isEmpty() && t.remove();
    else {
      const i = n.getListType(), s = Je(), a = Ue(i);
      s.append(a), e.getPreviousSiblings().forEach((u) => a.append(u));
      const l = Je(), c = Ue(i);
      l.append(c), Mn(c, e.getNextSiblings()), t.insertBefore(s), t.insertAfter(l), t.replace(e);
    }
  }
}
function z1() {
  const e = G();
  if (!L(e) || !e.isCollapsed()) return !1;
  const n = e.anchor.getNode();
  if (!oe(n) || n.getChildrenSize() !== 0) return !1;
  const t = Ga(n), r = n.getParent();
  X(r) || Qt(40);
  const o = r.getParent();
  let i;
  if (Me(o)) i = me(), t.insertAfter(i);
  else {
    if (!oe(o)) return !1;
    i = Je(), o.insertAfter(i);
  }
  i.setTextStyle(e.style).setTextFormat(e.format).select();
  const s = n.getNextSiblings();
  if (s.length > 0) {
    const a = Ue(r.getListType());
    if (oe(i)) {
      const l = Je();
      l.append(a), i.insertAfter(l);
    } else i.insertAfter(a);
    a.append(...s);
  }
  return (function(a) {
    let l = a;
    for (; l.getNextSibling() == null && l.getPreviousSibling() == null; ) {
      const c = l.getParent();
      if (c == null || !oe(c) && !X(c)) break;
      l = c;
    }
    l.remove();
  })(n), !0;
}
function _i(...e) {
  const n = [];
  for (const t of e) if (t && typeof t == "string") for (const [r] of t.matchAll(/\S+/g)) n.push(r);
  return n;
}
let fn = class extends Ze {
  constructor(t = 1, r = void 0, o) {
    super(o);
    I(this, "__value");
    I(this, "__checked");
    this.__value = t === void 0 ? 1 : t, this.__checked = r;
  }
  $config() {
    return this.config("listitem", { $transform: (t) => {
      if (t.__checked == null) return;
      const r = t.getParent();
      X(r) && r.getListType() !== "check" && t.getChecked() != null && t.setChecked(void 0);
    }, extends: Ze, importDOM: { li: () => ({ conversion: B1, priority: 0 }) } });
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
      if (f && f.nested && (p = f.nested.listitem), g !== void 0 && u.push(..._i(g)), f) {
        const h = c.getParent(), m = X(h) && h.getListType() === "check", b = c.getChecked();
        m && !b || d.push(f.listitemUnchecked), m && b || d.push(f.listitemChecked), m && u.push(b ? f.listitemChecked : f.listitemUnchecked);
      }
      if (p !== void 0) {
        const h = _i(p);
        c.getChildren().some((m) => X(m)) ? u.push(...h) : d.push(...h);
      }
      d.length > 0 && rs(a, ...d), u.length > 0 && ct(a, ...u);
    })(r, o.theme, this);
    const i = t ? t.__style : "", s = this.__style;
    i !== s && (s === "" ? r.removeAttribute("style") : r.style.cssText = s), (function(a, l, c) {
      const u = Mu(l.__textStyle);
      for (const d in u) a.style.setProperty(`--listitem-marker-${d}`, u[d]);
      if (c) for (const d in Mu(c.__textStyle)) d in u || a.style.removeProperty(`--listitem-marker-${d}`);
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
      if (O(o) && this.canMergeWith(o)) {
        const i = o.getChildren();
        this.append(...i), o.remove();
      } else super.append(o);
    }
    return this;
  }
  replace(t, r) {
    if (oe(t)) return super.replace(t);
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
    return r && (O(t) || Qt(139), this.getChildren().forEach((i) => {
      t.append(i);
    })), this.remove(), o.getChildrenSize() === 0 && o.remove(), t;
  }
  insertAfter(t, r = !0) {
    const o = this.getParentOrThrow();
    if (X(o) || Qt(39), oe(t)) return super.insertAfter(t, r);
    const i = this.getNextSiblings();
    if (o.insertAfter(t, r), i.length !== 0) {
      const s = Ue(o.getListType());
      i.forEach((a) => s.append(a)), t.insertAfter(s, r);
    }
    return t;
  }
  remove(t) {
    const r = this.getPreviousSibling(), o = this.getNextSibling();
    super.remove(t), r && o && bt(r) && bt(o) && (Zl(r.getFirstChild(), o.getFirstChild()), o.remove());
  }
  insertNewAfter(t, r = !0) {
    const o = Je().updateFromJSON(this.exportJSON()).setChecked(!this.getChecked() && void 0);
    return this.insertAfter(o, r), o;
  }
  collapseAtStart(t) {
    const r = me();
    this.getChildren().forEach((a) => r.append(a));
    const o = this.getParentOrThrow(), i = o.getParentOrThrow(), s = oe(i);
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
    for (; oe(r); ) r = r.getParentOrThrow().getParentOrThrow(), o++;
    return o;
  }
  setIndent(t) {
    typeof t != "number" && Qt(117), (t = Math.floor(t)) >= 0 || Qt(199);
    let r = this.getIndent();
    for (; r !== t; ) r < t ? (D1(this), r++) : (L1(this), r--);
    return this;
  }
  canInsertAfter(t) {
    return oe(t);
  }
  canReplaceWith(t) {
    return oe(t);
  }
  canMergeWith(t) {
    return oe(t) || go(t);
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
function B1(e) {
  if (e.classList.contains("task-list-item")) {
    for (const t of e.children) if (t.tagName === "INPUT") return cd(t);
  }
  if (e.classList.contains("joplin-checkbox")) {
    for (const t of e.children) if (t.classList.contains("checkbox-wrapper") && t.children.length > 0 && t.children[0].tagName === "INPUT") return cd(t.children[0]);
  }
  const n = e.getAttribute("aria-checked");
  return { node: Je(n === "true" || n !== "false" && void 0) };
}
function cd(e) {
  return e.getAttribute("type") !== "checkbox" ? { node: null } : { node: Je(e.hasAttribute("checked")) };
}
function Je(e) {
  return nt(new fn(void 0, e));
}
function oe(e) {
  return e instanceof fn;
}
let jn = class extends Ze {
  constructor(t = "number", r = 1, o) {
    super(o);
    I(this, "__tag");
    I(this, "__start");
    I(this, "__listType");
    const i = j1[t] || t;
    this.__listType = i, this.__tag = i === "number" ? "ol" : "ul", this.__start = r;
  }
  $config() {
    return this.config("list", { $transform: (t) => {
      (function(r) {
        const o = r.getNextSibling();
        X(o) && r.getListType() === o.getListType() && Zl(r, o);
      })(t), $h(t);
    }, extends: Ze, importDOM: { ol: () => ({ conversion: dd, priority: 0 }), ul: () => ({ conversion: dd, priority: 0 }) } });
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
    return this.__start !== 1 && i.setAttribute("start", String(this.__start)), i.__lexicalListType = this.__listType, ud(i, t.theme, this), i;
  }
  updateDOM(t, r, o) {
    return t.__tag !== this.__tag || t.__listType !== this.__listType || (ud(r, o.theme, this), !1);
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
      oe(a) || (i === o && (i = [...o]), i[s] = Je().append(!O(a) || X(a) || a.isInline() ? a : be(a.getTextContent())));
    }
    return super.splice(t, r, i);
  }
  extractWithChild(t) {
    return oe(t);
  }
};
function ud(e, n, t) {
  const r = [], o = [], i = n.list;
  if (i !== void 0) {
    const s = i[`${t.__tag}Depth`] || [], a = Ua(t) - 1, l = a % s.length, c = s[l], u = i[t.__tag];
    let d;
    const f = i.nested, g = i.checklist;
    if (f !== void 0 && f.list && (d = f.list), u !== void 0 && r.push(u), g !== void 0 && t.__listType === "check" && r.push(g), c !== void 0) {
      r.push(..._i(c));
      for (let p = 0; p < s.length; p++) p !== l && o.push(t.__tag + p);
    }
    if (d !== void 0) {
      const p = _i(d);
      a > 1 ? r.push(...p) : o.push(...p);
    }
  }
  o.length > 0 && rs(e, ...o), r.length > 0 && ct(e, ...r);
}
function V1(e) {
  const n = [];
  for (let t = 0; t < e.length; t++) {
    const r = e[t];
    if (oe(r)) {
      n.push(r);
      const o = r.getChildren();
      o.length > 1 && o.forEach((i) => {
        X(i) && n.push(sd(i));
      });
    } else n.push(sd(r));
  }
  return n;
}
function dd(e) {
  const n = e.nodeName.toLowerCase();
  let t = null;
  return n === "ol" ? t = Ue("number", e.start) : n === "ul" && (t = (function(r) {
    if (r.getAttribute("__lexicallisttype") === "check" || r.classList.contains("contains-task-list") || r.getAttribute("data-is-checklist") === "1") return !0;
    for (const o of r.childNodes) if (_e(o) && o.hasAttribute("aria-checked")) return !0;
    return !1;
  })(e) ? Ue("check") : Ue("bullet")), { after: V1, node: t };
}
const j1 = { ol: "number", ul: "bullet" };
function Ue(e = "number", n = 1) {
  return nt(new jn(e, n));
}
function X(e) {
  return e instanceof jn;
}
const U1 = q("UPDATE_LIST_START_COMMAND"), Mh = q("INSERT_UNORDERED_LIST_COMMAND"), G1 = q("INSERT_ORDERED_LIST_COMMAND"), H1 = q("REMOVE_LIST_COMMAND");
function W1(e) {
  return jt(e.registerCommand(G1, () => (ad("number"), !0), er), e.registerCommand(U1, (n) => {
    const { listNodeKey: t, newStart: r } = n, o = xe(t);
    return !!X(o) && (o.getListType() === "number" && (o.setStart(r), $h(o)), !0);
  }, er), e.registerCommand(Mh, () => (ad("bullet"), !0), er), e.registerCommand(H1, () => (M1(), !0), er), e.registerCommand(Xr, () => z1(), er), e.registerNodeTransform(fn, (n) => {
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
    if (oe(t) && n.is(t.getFirstChild())) {
      const r = n.getStyle(), o = n.getFormat();
      r === t.getTextStyle() && o === t.getTextFormat() || t.setTextStyle(r).setTextFormat(o);
    }
  }));
}
function K1(e) {
  const n = (t) => {
    const r = t.getParent();
    if (X(t.getFirstChild()) || !X(r)) return;
    const o = et(t, (i) => oe(i) && X(i.getParent()) && oe(i.getPreviousSibling()));
    if (o === null && t.getIndent() > 0) t.setIndent(0);
    else if (oe(o)) {
      const i = o.getPreviousSibling();
      if (oe(i)) {
        const s = (function(l) {
          let c = l, u = c.getFirstChild();
          for (; X(u); ) {
            const d = u.getLastChild();
            if (!oe(d)) break;
            c = d, u = c.getFirstChild();
          }
          return c;
        })(i), a = s.getParent();
        if (X(a)) {
          const l = Ua(a);
          l + 1 < Ua(r) && t.setIndent(l);
        }
      }
    }
  };
  return e.registerNodeTransform(jn, (t) => {
    const r = [t];
    for (; r.length > 0; ) {
      const o = r.shift();
      if (X(o)) {
        for (const i of o.getChildren()) if (oe(i)) {
          n(i);
          const s = i.getFirstChild();
          X(s) && r.push(s);
        }
      }
    }
  });
}
function q1({ hasStrictIndent: e = !1 }) {
  const [n] = gt();
  return Ke(() => {
    if (!n.hasNodes([jn, fn])) throw new Error("ListPlugin: ListNode and/or ListItemNode not registered on editor");
  }, [n]), Ke(() => {
    if (e) return K1(n);
  }, [n, e]), (function(t) {
    Ke(() => W1(t), [t]);
  })(n), null;
}
var fd = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ys = { exports: {} }, gd;
function Y1() {
  return gd || (gd = 1, (function(e) {
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
                for (var k in v)
                  v.hasOwnProperty(k) && (S[k] = y(v[k], _));
                return (
                  /** @type {any} */
                  S
                );
              case "Array":
                return C = a.util.objId(v), _[C] ? _[C] : (S = [], _[C] = S, /** @type {Array} */
                /** @type {any} */
                v.forEach(function(N, E) {
                  S[E] = y(N, _);
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
            var C = S[y], k = {};
            for (var N in C)
              if (C.hasOwnProperty(N)) {
                if (N == v)
                  for (var E in _)
                    _.hasOwnProperty(E) && (k[E] = _[E]);
                _.hasOwnProperty(N) || (k[N] = C[N]);
              }
            var R = S[y];
            return S[y] = k, a.languages.DFS(a.languages, function(T, A) {
              A === R && T != y && (this[T] = k);
            }), k;
          },
          // Traverse a language definition with Depth First Search
          DFS: function y(v, _, S, C) {
            C = C || {};
            var k = a.util.objId;
            for (var N in v)
              if (v.hasOwnProperty(N)) {
                _.call(v, N, v[N], S || N);
                var E = v[N], R = a.util.type(E);
                R === "Object" && !C[k(E)] ? (C[k(E)] = !0, y(E, _, null, C)) : R === "Array" && !C[k(E)] && (C[k(E)] = !0, y(E, _, N, C));
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
          for (var C = 0, k; k = S.elements[C++]; )
            a.highlightElement(k, v === !0, S.callback);
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
          var k = y.parentElement;
          k && k.nodeName.toLowerCase() === "pre" && a.util.setLanguage(k, S);
          var N = y.textContent, E = {
            element: y,
            language: S,
            grammar: C,
            code: N
          };
          function R(A) {
            E.highlightedCode = A, a.hooks.run("before-insert", E), E.element.innerHTML = E.highlightedCode, a.hooks.run("after-highlight", E), a.hooks.run("complete", E), _ && _.call(E.element);
          }
          if (a.hooks.run("before-sanity-check", E), k = E.element.parentElement, k && k.nodeName.toLowerCase() === "pre" && !k.hasAttribute("tabindex") && k.setAttribute("tabindex", "0"), !E.code) {
            a.hooks.run("complete", E), _ && _.call(E.element);
            return;
          }
          if (a.hooks.run("before-highlight", E), !E.grammar) {
            R(a.util.encode(E.code));
            return;
          }
          if (v && r.Worker) {
            var T = new Worker(a.filename);
            T.onmessage = function(A) {
              R(A.data);
            }, T.postMessage(JSON.stringify({
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
        }, k = v.alias;
        k && (Array.isArray(k) ? Array.prototype.push.apply(C.classes, k) : C.classes.push(k)), a.hooks.run("wrap", C);
        var N = "";
        for (var E in C.attributes)
          N += " " + E + '="' + (C.attributes[E] || "").replace(/"/g, "&quot;") + '"';
        return "<" + C.tag + ' class="' + C.classes.join(" ") + '"' + N + ">" + C.content + "</" + C.tag + ">";
      };
      function c(y, v, _, S) {
        y.lastIndex = v;
        var C = y.exec(_);
        if (C && S && C[1]) {
          var k = C[1].length;
          C.index += k, C[0] = C[0].slice(k);
        }
        return C;
      }
      function u(y, v, _, S, C, k) {
        for (var N in _)
          if (!(!_.hasOwnProperty(N) || !_[N])) {
            var E = _[N];
            E = Array.isArray(E) ? E : [E];
            for (var R = 0; R < E.length; ++R) {
              if (k && k.cause == N + "," + R)
                return;
              var T = E[R], A = T.inside, D = !!T.lookbehind, $ = !!T.greedy, B = T.alias;
              if ($ && !T.pattern.global) {
                var H = T.pattern.toString().match(/[imsuy]*$/)[0];
                T.pattern = RegExp(T.pattern.source, H + "g");
              }
              for (var U = T.pattern || T, j = S.next, Y = C; j !== v.tail && !(k && Y >= k.reach); Y += j.value.length, j = j.next) {
                var te = j.value;
                if (v.length > y.length)
                  return;
                if (!(te instanceof l)) {
                  var ie = 1, he;
                  if ($) {
                    if (he = c(U, Y, y, D), !he || he.index >= y.length)
                      break;
                    var Ce = he.index, ze = he.index + he[0].length, Se = Y;
                    for (Se += j.value.length; Ce >= Se; )
                      j = j.next, Se += j.value.length;
                    if (Se -= j.value.length, Y = Se, j.value instanceof l)
                      continue;
                    for (var De = j; De !== v.tail && (Se < ze || typeof De.value == "string"); De = De.next)
                      ie++, Se += De.value.length;
                    ie--, te = y.slice(Y, Se), he.index -= Y;
                  } else if (he = c(U, 0, te, D), !he)
                    continue;
                  var Ce = he.index, Pe = he[0], Be = te.slice(0, Ce), Ve = te.slice(Ce + Pe.length), At = Y + te.length;
                  k && At > k.reach && (k.reach = At);
                  var pn = j.prev;
                  Be && (pn = f(v, pn, Be), Y += Be.length), g(v, pn, ie);
                  var vo = new l(N, A ? a.tokenize(Pe, A) : Pe, B, Pe);
                  if (j = f(v, pn, vo), Ve && f(v, j, Ve), ie > 1) {
                    var Tt = {
                      cause: N + "," + R,
                      reach: At
                    };
                    u(y, v, _, j.prev, Y, Tt), k && Tt.reach > k.reach && (k.reach = Tt.reach);
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
    e.exports && (e.exports = t), typeof fd < "u" && (fd.Prism = t), t.languages.markup = {
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
              var k = g(m.getAttribute("data-range"));
              if (k) {
                var N = C.split(/\r\n?|\n/g), E = k[0], R = k[1] == null ? N.length : k[1];
                E < 0 && (E += N.length), E = Math.max(0, Math.min(E - 1, N.length)), R < 0 && (R += N.length), R = Math.max(0, Math.min(R, N.length)), C = N.slice(E, R).join(`
`), m.hasAttribute("data-start") || m.setAttribute("data-start", String(E + 1));
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
  })(Ys)), Ys.exports;
}
Y1();
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
var pd = {}, hd;
function Z1() {
  return hd || (hd = 1, Prism.languages.python = {
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
  }, Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest = Prism.languages.python, Prism.languages.py = Prism.languages.python), pd;
}
Z1();
var md = {}, yd;
function J1() {
  return yd || (yd = 1, (function(e) {
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
  })(Prism)), md;
}
J1();
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
var bd = {}, vd;
function X1() {
  return vd || (vd = 1, (function(e) {
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
  })(Prism)), bd;
}
X1();
var xd = {}, wd;
function Q1() {
  return wd || (wd = 1, (function(e) {
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
  })(Prism)), xd;
}
Q1();
var _d = {}, Sd;
function ek() {
  return Sd || (Sd = 1, (function(e) {
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
  })(Prism)), _d;
}
ek();
function Dh(e, n) {
  for (const t of e.childNodes) {
    if (_e(t) && t.tagName === n) return !0;
    Dh(t, n);
  }
  return !1;
}
const Ur = "data-language", Br = "data-highlight-language", $o = "data-theme";
let ls = class Lh extends Ze {
  constructor(t, r) {
    super(r);
    I(this, "__language");
    I(this, "__theme");
    I(this, "__isSyntaxHighlightSupported");
    this.__language = t || void 0, this.__isSyntaxHighlightSupported = !1, this.__theme = void 0;
  }
  static getType() {
    return "code";
  }
  static clone(t) {
    return new Lh(t.__language, t.__key);
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
    i && r.setAttribute($o, i);
    const s = this.getStyle();
    return s && r.setAttribute("style", s), r;
  }
  updateDOM(t, r, o) {
    const i = this.__language, s = t.__language;
    i ? i !== s && r.setAttribute(Ur, i) : s && r.removeAttribute(Ur);
    const a = this.__isSyntaxHighlightSupported;
    t.__isSyntaxHighlightSupported && s ? a && i ? i !== s && r.setAttribute(Br, i) : r.removeAttribute(Br) : a && i && r.setAttribute(Br, i);
    const l = this.__theme, c = t.__theme;
    l ? l !== c && r.setAttribute($o, l) : c && r.removeAttribute($o);
    const u = this.__style, d = t.__style;
    return u ? u !== d && r.setAttribute("style", u) : d && r.removeAttribute("style"), !1;
  }
  exportDOM(t) {
    const r = document.createElement("pre");
    ct(r, t._config.theme.code), r.setAttribute("spellcheck", "false");
    const o = this.getLanguage();
    o && (r.setAttribute(Ur, o), this.getIsSyntaxHighlightSupported() && r.setAttribute(Br, o));
    const i = this.getTheme();
    i && r.setAttribute($o, i);
    const s = this.getStyle();
    return s && r.setAttribute("style", s), { element: r };
  }
  static importDOM() {
    return { code: (t) => t.textContent != null && (/\r?\n/.test(t.textContent) || Dh(t, "BR")) ? { conversion: Cd, priority: 1 } : null, div: () => ({ conversion: tk, priority: 1 }), pre: () => ({ conversion: Cd, priority: 0 }), table: (t) => Zs(t) ? { conversion: nk, priority: 3 } : null, td: (t) => {
      const r = t, o = r.closest("table");
      return r.classList.contains("js-file-line") || o && Zs(o) ? { conversion: kd, priority: 3 } : null;
    }, tr: (t) => {
      const r = t.closest("table");
      return r && Zs(r) ? { conversion: kd, priority: 3 } : null;
    } };
  }
  static importJSON(t) {
    return zt().updateFromJSON(t);
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
      let c = ok(l);
      const u = [];
      for (; ; ) if (qi(c)) u.push(Er()), c = c.getNextSibling();
      else {
        if (!Vh(c)) break;
        {
          let b = 0;
          const y = c.getTextContent(), v = c.getTextContentSize();
          for (; b < v && y[b] === " "; ) b++;
          if (b !== 0 && u.push(Bh(" ".repeat(b))), b !== v) break;
          c = c.getNextSibling();
        }
      }
      const d = l.splitText(s.offset)[0], f = s.offset === 0 ? 0 : 1, g = d.getIndexWithinParent() + f, p = l.getParentOrThrow(), h = [at(), ...u];
      p.splice(g, 0, h);
      const m = u[u.length - 1];
      m ? m.select() : s.offset === 0 ? d.selectPrevious() : d.getNextSibling().selectNext(0, 0);
    }
    if (Jl(l)) {
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
function zt(e, n) {
  return Xp(ls).setLanguage(e).setTheme(n);
}
function Jl(e) {
  return e instanceof ls;
}
function Cd(e) {
  return { node: zt(e.getAttribute(Ur)) };
}
function tk(e) {
  const n = e, t = Ed(n);
  return t || (function(r) {
    let o = r.parentElement;
    for (; o !== null; ) {
      if (Ed(o)) return !0;
      o = o.parentElement;
    }
    return !1;
  })(n) ? { node: t ? zt() : null } : { node: null };
}
function nk() {
  return { node: zt() };
}
function kd() {
  return { node: null };
}
function Ed(e) {
  return e.style.fontFamily.match("monospace") !== null;
}
function Zs(e) {
  return e.classList.contains("js-file-line-container");
}
let Xl = class zh extends Wt {
  constructor(t = "", r, o) {
    super(t, o);
    I(this, "__highlightType");
    this.__highlightType = r;
  }
  static getType() {
    return "code-highlight";
  }
  static clone(t) {
    return new zh(t.__text, t.__highlightType || void 0, t.__key);
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
    const r = super.createDOM(t), o = Js(t.theme, this.__highlightType);
    return ct(r, o), r;
  }
  updateDOM(t, r, o) {
    const i = super.updateDOM(t, r, o), s = Js(o.theme, t.__highlightType), a = Js(o.theme, this.__highlightType);
    return s !== a && (s && rs(r, s), a && ct(r, a)), i;
  }
  static importJSON(t) {
    return Bh().updateFromJSON(t);
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
    return zt();
  }
};
function Js(e, n) {
  return n && e && e.codeHighlight && e.codeHighlight[n];
}
function Bh(e = "", n) {
  return nt(new Xl(e, n));
}
function Vh(e) {
  return e instanceof Xl;
}
function rk(e, n) {
  let t = e;
  for (let r = Te(e, n); r && (Vh(r.origin) || qi(r.origin)); r = PC(r)) t = r.origin;
  return t;
}
function ok(e) {
  return rk(e, "previous");
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
const ik = /* @__PURE__ */ new Set(["http:", "https:", "mailto:", "sms:", "tel:"]);
class Un extends Ze {
  constructor(t = "", r = {}, o) {
    super(o);
    I(this, "__url");
    I(this, "__target");
    I(this, "__rel");
    I(this, "__title");
    const { target: i = null, rel: s = null, title: a = null } = r;
    this.__url = t, this.__target = i, this.__rel = s, this.__title = a;
  }
  static getType() {
    return "link";
  }
  static clone(t) {
    return new Un(t.__url, { rel: t.__rel, target: t.__target, title: t.__title }, t.__key);
  }
  createDOM(t) {
    const r = document.createElement("a");
    return this.updateLinkDOM(null, r, t), ct(r, t.theme.link), r;
  }
  updateLinkDOM(t, r, o) {
    if (Zp(r)) {
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
    return { a: (t) => ({ conversion: sk, priority: 1 }) };
  }
  static importJSON(t) {
    return Si().updateFromJSON(t);
  }
  updateFromJSON(t) {
    return super.updateFromJSON(t).setURL(t.url).setRel(t.rel || null).setTarget(t.target || null).setTitle(t.title || null);
  }
  sanitizeUrl(t) {
    t = Rd(t);
    try {
      const r = new URL(Rd(t));
      if (!ik.has(r.protocol)) return "about:blank";
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
    const o = Si(this.__url, { rel: this.__rel, target: this.__target, title: this.__title });
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
function sk(e) {
  let n = null;
  if (Zp(e)) {
    const t = e.textContent;
    (t !== null && t !== "" || e.children.length > 0) && (n = Si(e.getAttribute("href") || "", { rel: e.getAttribute("rel"), target: e.getAttribute("target"), title: e.getAttribute("title") }));
  }
  return { node: n };
}
function Si(e = "", n) {
  return nt(new Un(e, n));
}
function ak(e) {
  return e instanceof Un;
}
class cs extends Un {
  constructor(t = "", r = {}, o) {
    super(t, r, o);
    I(this, "__isUnlinked");
    this.__isUnlinked = r.isUnlinked !== void 0 && r.isUnlinked !== null && r.isUnlinked;
  }
  static getType() {
    return "autolink";
  }
  static clone(t) {
    return new cs(t.__url, { isUnlinked: t.__isUnlinked, rel: t.__rel, target: t.__target, title: t.__title }, t.__key);
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
    return Nd().updateFromJSON(t);
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
    if (O(o)) {
      const i = Nd(this.__url, { isUnlinked: this.__isUnlinked, rel: this.__rel, target: this.__target, title: this.__title });
      return o.append(i), i;
    }
    return null;
  }
}
function Nd(e = "", n) {
  return nt(new cs(e, n));
}
function lk(e) {
  return e instanceof cs;
}
const ck = /^\+?[0-9\s()-]{5,}$/;
function Rd(e) {
  return e.match(/^[a-z][a-z0-9+.-]*:/i) || e.match(/^[/#.]/) ? e : e.includes("@") ? `mailto:${e}` : ck.test(e) ? `tel:${e}` : `https://${e}`;
}
function Ha(e, n) {
  const t = {};
  for (const r of e) {
    const o = n(r);
    o && (t[o] ? t[o].push(r) : t[o] = [r]);
  }
  return t;
}
function Ql(e) {
  const n = Ha(e, (t) => t.type);
  return { element: n.element || [], multilineElement: n["multiline-element"] || [], textFormat: n["text-format"] || [], textMatch: n["text-match"] || [] };
}
const Ci = /[!-/:-@[-`{-~\s]/, uk = /^\s{0,3}$/;
function Wa(e) {
  if (!go(e)) return !1;
  const n = e.getFirstChild();
  return n == null || e.getChildrenSize() === 1 && V(n) && uk.test(n.getTextContent());
}
function dk(e, n, t, r) {
  for (const o of n) {
    if (!o.export) continue;
    const i = o.export(e, (s) => ki(s, t, r));
    if (i != null) return i;
  }
  return O(e) ? ki(e, t, r) : re(e) ? e.getTextContent() : null;
}
function ki(e, n, t, r, o) {
  const i = [], s = e.getChildren();
  r || (r = []), o || (o = []);
  e: for (const a of s) {
    for (const l of t) {
      if (!l.export) continue;
      const c = l.export(a, (u) => ki(u, n, t, r, [...o, ...r]), (u, d) => Ad(u, d, n, r, o));
      if (c != null) {
        i.push(c);
        continue e;
      }
    }
    en(a) ? i.push(`
`) : V(a) ? i.push(Ad(a, a.getTextContent(), n, r, o)) : O(a) ? i.push(ki(a, n, t, r, o)) : re(a) && i.push(a.getTextContent());
  }
  return i.join("");
}
function Ad(e, n, t, r, o) {
  let i = e.getFormat() === 0 ? n : (function(f) {
    return f.replace(/^\s+|\s+$/g, (g) => [...g].map((p) => "&#" + p.codePointAt(0) + ";").join(""));
  })(n);
  e.hasFormat("code") || (i = i.replace(/([*_`~\\])/g, "\\$1"));
  let s = "", a = "", l = "";
  const c = Td(e, !0), u = Td(e, !1), d = /* @__PURE__ */ new Set();
  for (const f of t) {
    const g = f.format[0], p = f.tag;
    Mo(e, g) && !d.has(g) && (d.add(g), Mo(c, g) && r.find((h) => h.tag === p) || (r.push({ format: g, tag: p }), s += p));
  }
  for (let f = 0; f < r.length; f++) {
    const g = Mo(e, r[f].format), p = Mo(u, r[f].format);
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
function Td(e, n) {
  let t = n ? e.getPreviousSibling() : e.getNextSibling();
  if (!t) {
    const r = e.getParentOrThrow();
    r.isInline() && (t = n ? r.getPreviousSibling() : r.getNextSibling());
  }
  for (; t; ) {
    if (O(t)) {
      if (!t.isInline()) break;
      const r = n ? t.getLastDescendant() : t.getFirstDescendant();
      if (V(r)) return r;
      t = n ? t.getPreviousSibling() : t.getNextSibling();
    }
    if (V(t)) return t;
    if (!O(t)) return null;
  }
  return null;
}
function Mo(e, n) {
  return V(e) && e.hasFormat(n);
}
function fk(e, n) {
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
        if ((!g || Ci.test(g)) && (!p || Ci.test(p))) return u;
      }
    }
    return null;
  })(e.getTextContent(), n);
  if (!t) return null;
  const r = t.index || 0;
  return { endIndex: r + t[0].length, match: t, startIndex: r, transformer: n.transformersByTag[t[1]] };
}
function yn(e) {
  return V(e) && !e.hasFormat("code");
}
function bn(e, n, t) {
  let r = fk(e, n), o = (function(s, a) {
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
    yn(s.nodeAfter) && bn(s.nodeAfter, n, t), yn(s.nodeBefore) && bn(s.nodeBefore, n, t), yn(s.transformedNode) && bn(s.transformedNode, n, t);
  } else if (o) {
    const s = (function(a, l, c, u, d) {
      let f, g, p;
      return l === 0 ? [f, g] = a.splitText(c) : [p, f, g] = a.splitText(l, c), u.replace ? { nodeAfter: g, nodeBefore: p, transformedNode: u.replace(f, d) || void 0 } : null;
    })(e, o.startIndex, o.endIndex, o.transformer, o.match);
    if (!s) return;
    yn(s.nodeAfter) && bn(s.nodeAfter, n, t), yn(s.nodeBefore) && bn(s.nodeBefore, n, t), yn(s.transformedNode) && bn(s.transformedNode, n, t);
  }
  const i = e.getTextContent().replace(/\\([*_`~\\])/g, "$1").replace(/&#(\d+);/g, (s, a) => String.fromCodePoint(a));
  e.setTextContent(i);
}
function gk(e, n = !1) {
  const t = Ql(e), r = (function(o) {
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
      const d = s[u], [f, g] = pk(s, u, t.multilineElement, l);
      f ? u = g : hk(d, l, t.element, r, t.textMatch, n);
    }
    const c = l.getChildren();
    for (const u of c) !n && Wa(u) && l.getChildrenSize() > 1 && u.remove();
    G() !== null && l.selectStart();
  };
}
function pk(e, n, t, r) {
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
function hk(e, n, t, r, o, i) {
  const s = be(e), a = me();
  a.append(s), n.append(a);
  for (const { regExp: l, replace: c } of t) {
    const u = e.match(l);
    if (u && (s.setTextContent(e.slice(u[0].length)), c(a, [s], u, !0) !== !1)) break;
  }
  if (bn(s, r, o), a.isAttached() && e.length > 0) {
    const l = a.getPreviousSibling();
    if (!i && (go(l) || ja(l) || X(l))) {
      let c = l;
      if (X(l)) {
        const u = l.getLastDescendant();
        c = u == null ? null : et(u, oe);
      }
      c != null && c.getTextContentSize() > 0 && (c.splice(c.getChildrenSize(), 0, [at(), ...a.getChildren()]), a.remove());
    }
  }
}
function mk(e, ...n) {
  const t = new URL("https://lexical.dev/docs/error"), r = new URLSearchParams();
  r.append("code", e);
  for (const o of n) r.append("v", o);
  throw t.search = r.toString(), Error(`Minified Lexical error #${e}; visit ${t.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
}
const jh = /^(\s*)(\d{1,})\.\s/, Uh = /^(\s*)[-*+]\s/, yk = /^(\s*)(?:[-*+]\s)?\s?(\[(\s|x)?\])\s/i, Ka = /^(#{1,6})\s/, Gh = /^>\s/, Hh = /^[ \t]*```([\w-]+)?/, qa = /[ \t]*```$/, bk = /^[ \t]*```[^`]+(?:(?:`{1,2}|`{4,})[^`]+)*```(?:[^`]|$)/, vk = /^(?:\|)(.+)(?:\|)\s?$/, xk = /^(\| ?:?-*:? ?)+\|\s?$/, Fd = /^<[a-z_][\w-]*(?:\s[^<>]*)?\/?>/i, Pd = /^<\/[a-z_][\w-]*\s*>/i, Id = (e) => new RegExp(`(?:${e.source})$`, e.flags), Gr = rS("mdListMarker", { parse: (e) => typeof e == "string" && /^[-*+]$/.test(e) ? e : "-" }), Wh = (e) => (n, t, r, o) => {
  const i = e(r);
  i.append(...t), n.replace(i), o || i.select(0, 0);
}, Kh = (e) => (n, t, r, o) => {
  const i = n.getPreviousSibling(), s = n.getNextSibling(), a = Je(e === "check" ? r[3] === "x" : void 0), l = r[0].trim()[0], c = e !== "bullet" && e !== "check" || l !== Gr.parse(l) ? void 0 : l;
  if (X(s) && s.getListType() === e) {
    c && Ps(s, Gr, c);
    const d = s.getFirstChild();
    d !== null ? d.insertBefore(a) : s.append(a), n.remove();
  } else if (X(i) && i.getListType() === e) c && Ps(i, Gr, c), i.append(a), n.remove();
  else {
    const d = Ue(e, e === "number" ? Number(r[2]) : void 0);
    c && Ps(d, Gr, c), d.append(a), n.replace(d);
  }
  a.append(...t), o || a.select(0, 0);
  const u = (function(d) {
    const f = d.match(/\t/g), g = d.match(/ /g);
    let p = 0;
    return f && (p += f.length), g && (p += Math.floor(g.length / 4)), p;
  })(r[1]);
  u && a.setIndent(u);
}, ec = (e, n, t) => {
  const r = [], o = e.getChildren();
  let i = 0;
  for (const s of o) if (oe(s)) {
    if (s.getChildrenSize() === 1) {
      const d = s.getFirstChild();
      if (X(d)) {
        r.push(ec(d, n, t + 1));
        continue;
      }
    }
    const a = " ".repeat(4 * t), l = e.getListType(), c = jg(e, Gr), u = l === "number" ? `${e.getStart() + i}. ` : l === "check" ? `${c} [${s.getChecked() ? "x" : " "}] ` : c + " ";
    r.push(a + u + n(s)), i++;
  }
  return r.join(`
`);
}, wk = { dependencies: [as], export: (e, n) => {
  if (!y1(e)) return null;
  const t = Number(e.getTag().slice(1));
  return "#".repeat(t) + " " + n(e);
}, regExp: Ka, replace: Wh((e) => {
  const n = "h" + e[1].length;
  return wn(n);
}), type: "element" }, _k = { dependencies: [is], export: (e, n) => {
  if (!ja(e)) return null;
  const t = n(e).split(`
`), r = [];
  for (const o of t) r.push("> " + o);
  return r.join(`
`);
}, regExp: Gh, replace: (e, n, t, r) => {
  if (r) {
    const i = e.getPreviousSibling();
    if (ja(i)) return i.splice(i.getChildrenSize(), 0, [at(), ...n]), void e.remove();
  }
  const o = ss();
  o.append(...n), e.replace(o), r || o.select(0, 0);
}, type: "element" }, Sk = { dependencies: [ls], export: (e) => {
  if (!Jl(e)) return null;
  const n = e.getTextContent();
  return "```" + (e.getLanguage() || "") + (n ? `
` + n : "") + "\n```";
}, regExpEnd: { optional: !0, regExp: qa }, regExpStart: Hh, replace: (e, n, t, r, o, i) => {
  let s, a;
  if (!n && o) {
    if (o.length === 1) r ? (s = zt(), a = t[1] + o[0]) : (s = zt(t[1]), a = o[0].startsWith(" ") ? o[0].slice(1) : o[0]);
    else {
      if (s = zt(t[1]), o[0].trim().length === 0) for (; o.length > 0 && !o[0].length; ) o.shift();
      else o[0] = o[0].startsWith(" ") ? o[0].slice(1) : o[0];
      for (; o.length > 0 && !o[o.length - 1].length; ) o.pop();
      a = o.join(`
`);
    }
    const l = be(a);
    s.append(l), e.append(s);
  } else n && Wh((l) => zt(l ? l[1] : void 0))(e, n, t, i);
}, type: "multiline-element" }, Ck = { dependencies: [jn, fn], export: (e, n) => X(e) ? ec(e, n, 0) : null, regExp: Uh, replace: Kh("bullet"), type: "element" }, kk = { dependencies: [jn, fn], export: (e, n) => X(e) ? ec(e, n, 0) : null, regExp: jh, replace: Kh("number"), type: "element" }, Ek = { format: ["code"], tag: "`", type: "text-format" }, Nk = { format: ["highlight"], tag: "==", type: "text-format" }, Rk = { format: ["bold", "italic"], tag: "***", type: "text-format" }, Ak = { format: ["bold", "italic"], intraword: !1, tag: "___", type: "text-format" }, Tk = { format: ["bold"], tag: "**", type: "text-format" }, Fk = { format: ["bold"], intraword: !1, tag: "__", type: "text-format" }, Pk = { format: ["strikethrough"], tag: "~~", type: "text-format" }, Ik = { format: ["italic"], tag: "*", type: "text-format" }, Ok = { format: ["italic"], intraword: !1, tag: "_", type: "text-format" }, $k = { dependencies: [Un], export: (e, n, t) => {
  if (!ak(e) || lk(e)) return null;
  const r = e.getTitle(), o = n(e);
  return r ? `[${o}](${e.getURL()} "${r}")` : `[${o}](${e.getURL()})`;
}, importRegExp: /(?:\[(.+?)\])(?:\((?:([^()\s]+)(?:\s"((?:[^"]*\\")*[^"]*)"\s*)?)\))/, regExp: /(?:\[(.+?)\])(?:\((?:([^()\s]+)(?:\s"((?:[^"]*\\")*[^"]*)"\s*)?)\))$/, replace: (e, n) => {
  const [, t, r, o] = n, i = Si(r, { title: o }), s = t.split("[").length - 1, a = t.split("]").length - 1;
  let l = t, c = "";
  if (s < a) return;
  if (s > a) {
    const d = t.split("[");
    c = "[" + d[0], l = d.slice(1).join("[");
  }
  const u = be(l);
  return u.setFormat(e.getFormat()), i.append(u), e.replace(i), c && i.insertBefore(be(c)), u;
}, trigger: ")", type: "text-match" }, Mk = [wk, _k, Ck, kk], Dk = [Sk], Lk = [Ek, Rk, Ak, Tk, Fk, Nk, Ik, Ok, Pk], zk = [$k], Dn = [...Mk, ...Dk, ...Lk, ...zk];
function Od(e, n, t) {
  const r = t.length;
  for (let o = n; o >= r; o--) {
    const i = o - r;
    if (qh(e, i, t, 0, r) && e[i + r] !== " ") return i;
  }
  return -1;
}
function qh(e, n, t, r, o) {
  for (let i = 0; i < o; i++) if (e[n + i] !== t[r + i]) return !1;
  return !0;
}
function Bk(e, n = Dn) {
  const t = Ql(n), r = Ha(t.textFormat, ({ tag: s }) => s[s.length - 1]), o = Ha(t.textMatch, ({ trigger: s }) => s);
  for (const s of n) {
    const a = s.type;
    if (a === "element" || a === "text-match" || a === "multiline-element") {
      const l = s.dependencies;
      for (const c of l) e.hasNode(c) || mk(173, c.getType());
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
        if (y > 1 && !qh(f, v, b, 0, y) || f[v - 1] === " ") continue;
        const _ = f[g + 1];
        if (m.intraword === !1 && _ && !Ci.test(_)) continue;
        const S = c;
        let C = S, k = Od(f, v, b), N = C;
        for (; k < 0 && (N = N.getPreviousSibling()) && !en(N); ) if (V(N)) {
          if (N.hasFormat("code")) continue;
          const U = N.getTextContent();
          C = N, k = Od(U, U.length, b);
        }
        if (k < 0 || C === S && k + y === v) continue;
        const E = C.getTextContent();
        if (k > 0 && E[k - 1] === p) continue;
        const R = E[k - 1];
        if (m.intraword === !1 && R && !Ci.test(R)) continue;
        const T = S.getTextContent(), A = T.slice(0, v) + T.slice(g + 1);
        S.setTextContent(A);
        const D = C === S ? A : E;
        C.setTextContent(D.slice(0, k) + D.slice(k + y));
        const $ = G(), B = Zi();
        Fe(B);
        const H = g - y * (C === S ? 2 : 1) + 1;
        B.anchor.set(C.__key, k, "text"), B.focus.set(S.__key, H, "text");
        for (const U of m.format) B.hasFormat(U) || B.formatText(U);
        B.anchor.set(B.focus.key, B.focus.offset, B.focus.type);
        for (const U of m.format) B.hasFormat(U) && B.toggleFormat(U);
        return L($) && (B.format = $.format), !0;
      }
    })(a, l, r);
  };
  return e.registerUpdateListener(({ tags: s, dirtyLeaves: a, editorState: l, prevEditorState: c }) => {
    if (s.has(Sp) || s.has(hi) || e.isComposing()) return;
    const u = l.read(G), d = c.read(G);
    if (!L(d) || !L(u) || !u.isCollapsed() || u.is(d)) return;
    const f = u.anchor.key, g = u.anchor.offset, p = l._nodeMap.get(f);
    !V(p) || !a.has(f) || g !== 1 && g > d.anchor.offset + 1 || e.update(() => {
      if (!yn(p)) return;
      const h = p.getParent();
      h === null || Jl(h) || i(h, p, u.anchor.offset);
    });
  });
}
function Vk(e, n = Dn, t, r = !1, o = !1) {
  const i = r ? e : (function(s, a = !1) {
    const l = s.split(`
`);
    let c = !1;
    const u = [];
    for (let d = 0; d < l.length; d++) {
      const f = l[d].trimEnd(), g = u[u.length - 1];
      bk.test(f) ? u.push(f) : Hh.test(f) || qa.test(f) ? (c = !c, u.push(f)) : c || f === "" || g === "" || !g || Ka.test(g) || Ka.test(f) || Gh.test(f) || jh.test(f) || Uh.test(f) || yk.test(f) || vk.test(f) || xk.test(f) || !a || Fd.test(f) || Pd.test(f) || Id(Pd).test(g) || Id(Fd).test(g) || qa.test(g) ? u.push(f) : u[u.length - 1] = g + " " + f.trimStart();
    }
    return u.join(`
`);
  })(e, o);
  return gk(n, r)(i, t);
}
function jk(e = Dn, n, t = !1) {
  return (function(o, i = !1) {
    const s = Ql(o), a = [...s.multilineElement, ...s.element], l = !i, c = s.textFormat.filter((u) => u.format.length === 1).sort((u, d) => Number(u.format.includes("code")) - Number(d.format.includes("code")));
    return (u) => {
      const d = [], f = (u || ye()).getChildren();
      for (let g = 0; g < f.length; g++) {
        const p = f[g], h = dk(p, a, c, s.textMatch);
        h != null && d.push(l && g > 0 && !Wa(p) && !Wa(f[g - 1]) ? `
`.concat(h) : h);
      }
      return d.join(`
`);
    };
  })(e, t)(n);
}
function $d(e, n) {
  return e.getEditorState().read(() => {
    const t = xe(n);
    return t !== null && t.isSelected();
  });
}
function Uk(e) {
  const [n] = gt(), [t, r] = on(() => $d(n, e));
  return Ke(() => {
    let o = !0;
    const i = n.registerUpdateListener(() => {
      o && r($d(n, e));
    });
    return () => {
      o = !1, i();
    };
  }, [n, e]), [t, fr((o) => {
    n.update(() => {
      let i = G();
      Oe(i) || (i = Cl(), Fe(i)), Oe(i) && (o ? i.add(e) : i.delete(e));
    });
  }, [n, e]), fr(() => {
    n.update(() => {
      const o = G();
      Oe(o) && o.clear();
    });
  }, [n])];
}
function Gk({ nodeKey: e }) {
  const [n] = gt(), [t, r, o] = Uk(e);
  return Ke(() => jt(n.registerCommand(bl, (i) => {
    const s = n.getElementByKey(e);
    return i.target === s && (i.shiftKey || o(), r(!t), !0);
  }, er)), [o, n, t, e, r]), Ke(() => {
    const i = n.getElementByKey(e), s = n._config.theme.hrSelected ?? "selected";
    i !== null && (t ? ct(i, s) : rs(i, s));
  }, [n, t, e]), null;
}
class us extends mo {
  static getType() {
    return "horizontalrule";
  }
  static clone(n) {
    return new us(n.__key);
  }
  static importJSON(n) {
    return tc().updateFromJSON(n);
  }
  static importDOM() {
    return { hr: () => ({ conversion: Hk, priority: 0 }) };
  }
  decorate() {
    return x(Gk, { nodeKey: this.__key });
  }
}
function Hk() {
  return { node: tc() };
}
function tc() {
  return nt(new us());
}
const Wk = [{ dependencies: [us], export: (e) => YC(e) ? "***" : null, regExp: /^(---|\*\*\*|___)\s?$/, replace: (e, n, t, r) => {
  const o = tc();
  r || e.getNextSibling() != null ? e.replace(o) : e.insertBefore(o), o.selectNext();
}, type: "element" }, ...Dn];
function Kk({ transformers: e = Wk }) {
  const [n] = gt();
  return Ke(() => Bk(n, e), [n, e]), null;
}
const qk = w.lazy(() => import("./index-CLIixv8m.js")), Yk = {
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
function Zk({
  mode: e,
  onModeChange: n,
  onAIClick: t,
  showAI: r = !0
}) {
  const [o] = gt(), i = () => {
    o.dispatchCommand(xt, "bold");
  }, s = () => {
    o.dispatchCommand(xt, "italic");
  }, a = (u) => {
    o.update(() => {
      const d = G();
      L(d) && Lu(d, () => wn(`h${u}`));
    });
  };
  return /* @__PURE__ */ F("div", { className: "flex items-center justify-between border-b border-border bg-muted/30 px-2 py-1.5", children: [
    /* @__PURE__ */ F("div", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ F("div", { className: "flex items-center gap-0.5 mr-2 border-r border-border pr-2", children: [
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
            children: /* @__PURE__ */ x(bf, { className: "h-4 w-4" })
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
            children: /* @__PURE__ */ x(mf, { className: "h-4 w-4" })
          }
        )
      ] }),
      e === "rich" && /* @__PURE__ */ F(Ge, { children: [
        /* @__PURE__ */ x(
          le,
          {
            variant: "ghost",
            size: "sm",
            onClick: i,
            title: "Bold (⌘B)",
            className: "h-8 px-2",
            children: /* @__PURE__ */ x(tb, { className: "h-4 w-4" })
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
            children: /* @__PURE__ */ x(mb, { className: "h-4 w-4" })
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
            children: /* @__PURE__ */ x(gb, { className: "h-4 w-4" })
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
            children: /* @__PURE__ */ x(pb, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ x("div", { className: "w-px h-6 bg-border mx-1" }),
        /* @__PURE__ */ x(
          le,
          {
            variant: "ghost",
            size: "sm",
            onClick: () => {
              o.dispatchCommand(Mh, void 0);
            },
            title: "Bullet List",
            className: "h-8 px-2",
            children: /* @__PURE__ */ x(yb, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ x(
          le,
          {
            variant: "ghost",
            size: "sm",
            onClick: () => {
              o.update(() => {
                const u = G();
                L(u) && Lu(u, () => ss());
              });
            },
            title: "Quote",
            className: "h-8 px-2",
            children: /* @__PURE__ */ x(vb, { className: "h-4 w-4" })
          }
        )
      ] })
    ] }),
    r && t && /* @__PURE__ */ F(
      le,
      {
        variant: "gradient-purple",
        size: "sm",
        onClick: t,
        className: "h-8 px-3 gap-1.5",
        title: "Ask AI for help",
        children: [
          /* @__PURE__ */ x(yf, { className: "h-4 w-4" }),
          /* @__PURE__ */ x("span", { className: "hidden sm:inline", children: "Ask AI" })
        ]
      }
    )
  ] });
}
function Jk({
  value: e,
  onChange: n,
  isInitialized: t,
  setIsInitialized: r
}) {
  const [o] = gt(), i = w.useRef(!1);
  return w.useEffect(() => {
    !t && e && (i.current = !0, o.update(() => {
      Vk(e, Dn);
    }, {
      // Use discrete update to batch this and prevent intermediate onChange
      discrete: !0
    }), requestAnimationFrame(() => {
      i.current = !1, r(!0);
    }));
  }, [o, e, t, r]), w.useEffect(() => {
    if (n)
      return o.registerUpdateListener(({ editorState: s, tags: a }) => {
        i.current || a.has("history-merge") || s.read(() => {
          const l = jk(Dn);
          n(l);
        });
      });
  }, [o, n]), null;
}
const Xk = w.forwardRef(
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
    const [f, g] = w.useState(t), [p, h] = w.useState(e), [m, b] = w.useState(!1), [y, v] = w.useState(0), _ = w.useRef(null), S = w.useRef(e), C = (D) => {
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
    w.useEffect(() => {
      e !== p && (h(e), f === "rich" && e !== S.current && (S.current = e, b(!1), v((D) => D + 1)));
    }, [e]);
    const k = w.useCallback((D) => {
      h(D), n == null || n(D);
    }, [n]), N = w.useCallback((D) => {
      D === "rich" && (b(!1), v(($) => $ + 1)), g(D);
    }, []), E = (D) => {
      _.current = D;
    }, R = w.useCallback(() => {
      var $, B;
      if (!o) return;
      let D = "";
      if (f === "rich")
        D = (($ = window.getSelection()) == null ? void 0 : $.toString()) || "";
      else {
        const H = _.current;
        if (H) {
          const U = H.getSelection();
          U && (D = ((B = H.getModel()) == null ? void 0 : B.getValueInRange(U)) || "");
        }
      }
      o(D, p);
    }, [f, p, o]), T = {
      namespace: "HybridEditor",
      theme: Yk,
      onError: (D) => {
        console.error("Lexical error:", D);
      },
      nodes: [
        as,
        is,
        jn,
        fn,
        ls,
        Xl,
        Un
      ],
      editable: !l
    }, A = a ? { minHeight: s, maxHeight: a, overflowY: "auto" } : { minHeight: s };
    return /* @__PURE__ */ x(
      "div",
      {
        ref: d,
        className: P(
          "rounded-lg border border-border bg-background overflow-hidden",
          l && "opacity-60 pointer-events-none",
          c
        ),
        children: f === "rich" ? /* @__PURE__ */ F(SC, { initialConfig: T, children: [
          /* @__PURE__ */ x(
            Zk,
            {
              mode: f,
              onModeChange: N,
              onAIClick: o ? R : void 0,
              showAI: r
            }
          ),
          /* @__PURE__ */ F("div", { className: "relative", style: A, children: [
            /* @__PURE__ */ x(
              _1,
              {
                contentEditable: /* @__PURE__ */ x(
                  E1,
                  {
                    className: "outline-none px-4 py-3 prose prose-sm max-w-none dark:prose-invert text-slate-900 dark:text-slate-100",
                    style: { minHeight: s }
                  }
                ),
                placeholder: /* @__PURE__ */ x("div", { className: "absolute top-3 left-4 text-muted-foreground pointer-events-none", children: i }),
                ErrorBoundary: $1
              }
            ),
            /* @__PURE__ */ x(F1, {}),
            /* @__PURE__ */ x(q1, {}),
            /* @__PURE__ */ x(Kk, { transformers: Dn }),
            /* @__PURE__ */ x(
              Jk,
              {
                value: p,
                onChange: k,
                isInitialized: m,
                setIsInitialized: b
              }
            )
          ] })
        ] }, y) : /* @__PURE__ */ F(Ge, { children: [
          /* @__PURE__ */ F("div", { className: "flex items-center justify-between border-b border-border bg-muted/30 px-2 py-1.5", children: [
            /* @__PURE__ */ F("div", { className: "flex items-center gap-0.5", children: [
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
                  children: /* @__PURE__ */ x(bf, { className: "h-4 w-4" })
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
                  children: /* @__PURE__ */ x(mf, { className: "h-4 w-4" })
                }
              )
            ] }),
            r && o && /* @__PURE__ */ F(
              le,
              {
                variant: "gradient-purple",
                size: "sm",
                onClick: R,
                className: "h-8 px-3 gap-1.5",
                title: "Ask AI for help",
                children: [
                  /* @__PURE__ */ x(yf, { className: "h-4 w-4" }),
                  /* @__PURE__ */ x("span", { className: "hidden sm:inline", children: "Ask AI" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ x(w.Suspense, { fallback: /* @__PURE__ */ x(
            "div",
            {
              className: "flex items-center justify-center bg-slate-900 text-slate-400",
              style: { height: a || s },
              children: /* @__PURE__ */ F("div", { className: "text-center", children: [
                /* @__PURE__ */ x("div", { className: "inline-block animate-spin rounded-full h-8 w-8 border-2 border-slate-600 border-t-purple-500 mb-2" }),
                /* @__PURE__ */ x("p", { className: "text-sm", children: "Loading editor..." })
              ] })
            }
          ), children: /* @__PURE__ */ x(
            qk,
            {
              height: a || s,
              defaultLanguage: "markdown",
              value: p,
              onChange: (D) => {
                k(D || "");
              },
              beforeMount: C,
              onMount: E,
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
Xk.displayName = "HybridEditor";
var ds = "Collapsible", [Qk, Yh] = Ht(ds), [eE, nc] = Qk(ds), Zh = w.forwardRef(
  (e, n) => {
    const {
      __scopeCollapsible: t,
      open: r,
      defaultOpen: o,
      disabled: i,
      onOpenChange: s,
      ...a
    } = e, [l, c] = zn({
      prop: r,
      defaultProp: o ?? !1,
      onChange: s,
      caller: ds
    });
    return /* @__PURE__ */ x(
      eE,
      {
        scope: t,
        disabled: i,
        contentId: zi(),
        open: l,
        onOpenToggle: w.useCallback(() => c((u) => !u), [c]),
        children: /* @__PURE__ */ x(
          pe.div,
          {
            "data-state": oc(l),
            "data-disabled": i ? "" : void 0,
            ...a,
            ref: n
          }
        )
      }
    );
  }
);
Zh.displayName = ds;
var Jh = "CollapsibleTrigger", Xh = w.forwardRef(
  (e, n) => {
    const { __scopeCollapsible: t, ...r } = e, o = nc(Jh, t);
    return /* @__PURE__ */ x(
      pe.button,
      {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": oc(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...r,
        ref: n,
        onClick: ge(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Xh.displayName = Jh;
var rc = "CollapsibleContent", Qh = w.forwardRef(
  (e, n) => {
    const { forceMount: t, ...r } = e, o = nc(rc, e.__scopeCollapsible);
    return /* @__PURE__ */ x(ao, { present: t || o.open, children: ({ present: i }) => /* @__PURE__ */ x(tE, { ...r, ref: n, present: i }) });
  }
);
Qh.displayName = rc;
var tE = w.forwardRef((e, n) => {
  const { __scopeCollapsible: t, present: r, children: o, ...i } = e, s = nc(rc, t), [a, l] = w.useState(r), c = w.useRef(null), u = ve(n, c), d = w.useRef(0), f = d.current, g = w.useRef(0), p = g.current, h = s.open || a, m = w.useRef(h), b = w.useRef(void 0);
  return w.useEffect(() => {
    const y = requestAnimationFrame(() => m.current = !1);
    return () => cancelAnimationFrame(y);
  }, []), Bt(() => {
    const y = c.current;
    if (y) {
      b.current = b.current || {
        transitionDuration: y.style.transitionDuration,
        animationName: y.style.animationName
      }, y.style.transitionDuration = "0s", y.style.animationName = "none";
      const v = y.getBoundingClientRect();
      d.current = v.height, g.current = v.width, m.current || (y.style.transitionDuration = b.current.transitionDuration, y.style.animationName = b.current.animationName), l(r);
    }
  }, [s.open, r]), /* @__PURE__ */ x(
    pe.div,
    {
      "data-state": oc(s.open),
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
function oc(e) {
  return e ? "open" : "closed";
}
var nE = Zh, rE = Xh, oE = Qh, mt = "Accordion", iE = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [ic, sE, aE] = ll(mt), [fs] = Ht(mt, [
  aE,
  Yh
]), sc = Yh(), em = de.forwardRef(
  (e, n) => {
    const { type: t, ...r } = e, o = r, i = r;
    return /* @__PURE__ */ x(ic.Provider, { scope: e.__scopeAccordion, children: t === "multiple" ? /* @__PURE__ */ x(dE, { ...i, ref: n }) : /* @__PURE__ */ x(uE, { ...o, ref: n }) });
  }
);
em.displayName = mt;
var [tm, lE] = fs(mt), [nm, cE] = fs(
  mt,
  { collapsible: !1 }
), uE = de.forwardRef(
  (e, n) => {
    const {
      value: t,
      defaultValue: r,
      onValueChange: o = () => {
      },
      collapsible: i = !1,
      ...s
    } = e, [a, l] = zn({
      prop: t,
      defaultProp: r ?? "",
      onChange: o,
      caller: mt
    });
    return /* @__PURE__ */ x(
      tm,
      {
        scope: e.__scopeAccordion,
        value: de.useMemo(() => a ? [a] : [], [a]),
        onItemOpen: l,
        onItemClose: de.useCallback(() => i && l(""), [i, l]),
        children: /* @__PURE__ */ x(nm, { scope: e.__scopeAccordion, collapsible: i, children: /* @__PURE__ */ x(rm, { ...s, ref: n }) })
      }
    );
  }
), dE = de.forwardRef((e, n) => {
  const {
    value: t,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...i
  } = e, [s, a] = zn({
    prop: t,
    defaultProp: r ?? [],
    onChange: o,
    caller: mt
  }), l = de.useCallback(
    (u) => a((d = []) => [...d, u]),
    [a]
  ), c = de.useCallback(
    (u) => a((d = []) => d.filter((f) => f !== u)),
    [a]
  );
  return /* @__PURE__ */ x(
    tm,
    {
      scope: e.__scopeAccordion,
      value: s,
      onItemOpen: l,
      onItemClose: c,
      children: /* @__PURE__ */ x(nm, { scope: e.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ x(rm, { ...i, ref: n }) })
    }
  );
}), [fE, gs] = fs(mt), rm = de.forwardRef(
  (e, n) => {
    const { __scopeAccordion: t, disabled: r, dir: o, orientation: i = "vertical", ...s } = e, a = de.useRef(null), l = ve(a, n), c = sE(t), d = Bi(o) === "ltr", f = ge(e.onKeyDown, (g) => {
      var N;
      if (!iE.includes(g.key)) return;
      const p = g.target, h = c().filter((E) => {
        var R;
        return !((R = E.ref.current) != null && R.disabled);
      }), m = h.findIndex((E) => E.ref.current === p), b = h.length;
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
      const k = y % b;
      (N = h[k].ref.current) == null || N.focus();
    });
    return /* @__PURE__ */ x(
      fE,
      {
        scope: t,
        disabled: r,
        direction: o,
        orientation: i,
        children: /* @__PURE__ */ x(ic.Slot, { scope: t, children: /* @__PURE__ */ x(
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
), Ei = "AccordionItem", [gE, ac] = fs(Ei), om = de.forwardRef(
  (e, n) => {
    const { __scopeAccordion: t, value: r, ...o } = e, i = gs(Ei, t), s = lE(Ei, t), a = sc(t), l = zi(), c = r && s.value.includes(r) || !1, u = i.disabled || e.disabled;
    return /* @__PURE__ */ x(
      gE,
      {
        scope: t,
        open: c,
        disabled: u,
        triggerId: l,
        children: /* @__PURE__ */ x(
          nE,
          {
            "data-orientation": i.orientation,
            "data-state": um(c),
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
om.displayName = Ei;
var im = "AccordionHeader", sm = de.forwardRef(
  (e, n) => {
    const { __scopeAccordion: t, ...r } = e, o = gs(mt, t), i = ac(im, t);
    return /* @__PURE__ */ x(
      pe.h3,
      {
        "data-orientation": o.orientation,
        "data-state": um(i.open),
        "data-disabled": i.disabled ? "" : void 0,
        ...r,
        ref: n
      }
    );
  }
);
sm.displayName = im;
var Ya = "AccordionTrigger", am = de.forwardRef(
  (e, n) => {
    const { __scopeAccordion: t, ...r } = e, o = gs(mt, t), i = ac(Ya, t), s = cE(Ya, t), a = sc(t);
    return /* @__PURE__ */ x(ic.ItemSlot, { scope: t, children: /* @__PURE__ */ x(
      rE,
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
am.displayName = Ya;
var lm = "AccordionContent", cm = de.forwardRef(
  (e, n) => {
    const { __scopeAccordion: t, ...r } = e, o = gs(mt, t), i = ac(lm, t), s = sc(t);
    return /* @__PURE__ */ x(
      oE,
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
cm.displayName = lm;
function um(e) {
  return e ? "open" : "closed";
}
var pE = em, hE = om, mE = sm, dm = am, fm = cm;
const yE = K("border-b border-border", {
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
}), bE = K(
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
), vE = K(
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
), XT = pE, xE = w.forwardRef(({ className: e, variant: n, ...t }, r) => /* @__PURE__ */ x(
  hE,
  {
    ref: r,
    className: P(yE({ variant: n }), e),
    ...t
  }
));
xE.displayName = "AccordionItem";
const wE = w.forwardRef(({ className: e, children: n, variant: t, ...r }, o) => /* @__PURE__ */ x(mE, { className: "flex", children: /* @__PURE__ */ F(
  dm,
  {
    ref: o,
    className: P(bE({ variant: t }), e),
    ...r,
    children: [
      n,
      /* @__PURE__ */ x(Mi, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
wE.displayName = dm.displayName;
const _E = w.forwardRef(({ className: e, children: n, variant: t, ...r }, o) => /* @__PURE__ */ x(
  fm,
  {
    ref: o,
    className: P(vE({ variant: t }), e),
    ...r,
    children: /* @__PURE__ */ x("div", { className: "pt-0 pb-4", children: n })
  }
));
_E.displayName = fm.displayName;
function SE(e, n = globalThis == null ? void 0 : globalThis.document) {
  const t = kn(e);
  w.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && t(o);
    };
    return n.addEventListener("keydown", r, { capture: !0 }), () => n.removeEventListener("keydown", r, { capture: !0 });
  }, [t, n]);
}
var CE = "DismissableLayer", Za = "dismissableLayer.update", kE = "dismissableLayer.pointerDownOutside", EE = "dismissableLayer.focusOutside", Md, gm = w.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), pm = w.forwardRef(
  (e, n) => {
    const {
      disableOutsidePointerEvents: t = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: i,
      onInteractOutside: s,
      onDismiss: a,
      ...l
    } = e, c = w.useContext(gm), [u, d] = w.useState(null), f = (u == null ? void 0 : u.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, g] = w.useState({}), p = ve(n, (k) => d(k)), h = Array.from(c.layers), [m] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), b = h.indexOf(m), y = u ? h.indexOf(u) : -1, v = c.layersWithOutsidePointerEventsDisabled.size > 0, _ = y >= b, S = AE((k) => {
      const N = k.target, E = [...c.branches].some((R) => R.contains(N));
      !_ || E || (o == null || o(k), s == null || s(k), k.defaultPrevented || a == null || a());
    }, f), C = TE((k) => {
      const N = k.target;
      [...c.branches].some((R) => R.contains(N)) || (i == null || i(k), s == null || s(k), k.defaultPrevented || a == null || a());
    }, f);
    return SE((k) => {
      y === c.layers.size - 1 && (r == null || r(k), !k.defaultPrevented && a && (k.preventDefault(), a()));
    }, f), w.useEffect(() => {
      if (u)
        return t && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (Md = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(u)), c.layers.add(u), Dd(), () => {
          t && c.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = Md);
        };
    }, [u, f, t, c]), w.useEffect(() => () => {
      u && (c.layers.delete(u), c.layersWithOutsidePointerEventsDisabled.delete(u), Dd());
    }, [u, c]), w.useEffect(() => {
      const k = () => g({});
      return document.addEventListener(Za, k), () => document.removeEventListener(Za, k);
    }, []), /* @__PURE__ */ x(
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
pm.displayName = CE;
var NE = "DismissableLayerBranch", RE = w.forwardRef((e, n) => {
  const t = w.useContext(gm), r = w.useRef(null), o = ve(n, r);
  return w.useEffect(() => {
    const i = r.current;
    if (i)
      return t.branches.add(i), () => {
        t.branches.delete(i);
      };
  }, [t.branches]), /* @__PURE__ */ x(pe.div, { ...e, ref: o });
});
RE.displayName = NE;
function AE(e, n = globalThis == null ? void 0 : globalThis.document) {
  const t = kn(e), r = w.useRef(!1), o = w.useRef(() => {
  });
  return w.useEffect(() => {
    const i = (a) => {
      if (a.target && !r.current) {
        let l = function() {
          hm(
            kE,
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
function TE(e, n = globalThis == null ? void 0 : globalThis.document) {
  const t = kn(e), r = w.useRef(!1);
  return w.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && hm(EE, t, { originalEvent: i }, {
        discrete: !1
      });
    };
    return n.addEventListener("focusin", o), () => n.removeEventListener("focusin", o);
  }, [n, t]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Dd() {
  const e = new CustomEvent(Za);
  document.dispatchEvent(e);
}
function hm(e, n, t, { discrete: r }) {
  const o = t.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: t });
  n && o.addEventListener(e, n, { once: !0 }), r ? R0(o, i) : o.dispatchEvent(i);
}
var Xs = 0;
function FE() {
  w.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Ld()), document.body.insertAdjacentElement("beforeend", e[1] ?? Ld()), Xs++, () => {
      Xs === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((n) => n.remove()), Xs--;
    };
  }, []);
}
function Ld() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Qs = "focusScope.autoFocusOnMount", ea = "focusScope.autoFocusOnUnmount", zd = { bubbles: !1, cancelable: !0 }, PE = "FocusScope", mm = w.forwardRef((e, n) => {
  const {
    loop: t = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i,
    ...s
  } = e, [a, l] = w.useState(null), c = kn(o), u = kn(i), d = w.useRef(null), f = ve(n, (h) => l(h)), g = w.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  w.useEffect(() => {
    if (r) {
      let h = function(v) {
        if (g.paused || !a) return;
        const _ = v.target;
        a.contains(_) ? d.current = _ : Zt(d.current, { select: !0 });
      }, m = function(v) {
        if (g.paused || !a) return;
        const _ = v.relatedTarget;
        _ !== null && (a.contains(_) || Zt(d.current, { select: !0 }));
      }, b = function(v) {
        if (document.activeElement === document.body)
          for (const S of v)
            S.removedNodes.length > 0 && Zt(a);
      };
      document.addEventListener("focusin", h), document.addEventListener("focusout", m);
      const y = new MutationObserver(b);
      return a && y.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", h), document.removeEventListener("focusout", m), y.disconnect();
      };
    }
  }, [r, a, g.paused]), w.useEffect(() => {
    if (a) {
      Vd.add(g);
      const h = document.activeElement;
      if (!a.contains(h)) {
        const b = new CustomEvent(Qs, zd);
        a.addEventListener(Qs, c), a.dispatchEvent(b), b.defaultPrevented || (IE(LE(ym(a)), { select: !0 }), document.activeElement === h && Zt(a));
      }
      return () => {
        a.removeEventListener(Qs, c), setTimeout(() => {
          const b = new CustomEvent(ea, zd);
          a.addEventListener(ea, u), a.dispatchEvent(b), b.defaultPrevented || Zt(h ?? document.body, { select: !0 }), a.removeEventListener(ea, u), Vd.remove(g);
        }, 0);
      };
    }
  }, [a, c, u, g]);
  const p = w.useCallback(
    (h) => {
      if (!t && !r || g.paused) return;
      const m = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey, b = document.activeElement;
      if (m && b) {
        const y = h.currentTarget, [v, _] = OE(y);
        v && _ ? !h.shiftKey && b === _ ? (h.preventDefault(), t && Zt(v, { select: !0 })) : h.shiftKey && b === v && (h.preventDefault(), t && Zt(_, { select: !0 })) : b === y && h.preventDefault();
      }
    },
    [t, r, g.paused]
  );
  return /* @__PURE__ */ x(pe.div, { tabIndex: -1, ...s, ref: f, onKeyDown: p });
});
mm.displayName = PE;
function IE(e, { select: n = !1 } = {}) {
  const t = document.activeElement;
  for (const r of e)
    if (Zt(r, { select: n }), document.activeElement !== t) return;
}
function OE(e) {
  const n = ym(e), t = Bd(n, e), r = Bd(n.reverse(), e);
  return [t, r];
}
function ym(e) {
  const n = [], t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; t.nextNode(); ) n.push(t.currentNode);
  return n;
}
function Bd(e, n) {
  for (const t of e)
    if (!$E(t, { upTo: n })) return t;
}
function $E(e, { upTo: n }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (n !== void 0 && e === n) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function ME(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Zt(e, { select: n = !1 } = {}) {
  if (e && e.focus) {
    const t = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== t && ME(e) && n && e.select();
  }
}
var Vd = DE();
function DE() {
  let e = [];
  return {
    add(n) {
      const t = e[0];
      n !== t && (t == null || t.pause()), e = jd(e, n), e.unshift(n);
    },
    remove(n) {
      var t;
      e = jd(e, n), (t = e[0]) == null || t.resume();
    }
  };
}
function jd(e, n) {
  const t = [...e], r = t.indexOf(n);
  return r !== -1 && t.splice(r, 1), t;
}
function LE(e) {
  return e.filter((n) => n.tagName !== "A");
}
const zE = ["top", "right", "bottom", "left"], cn = Math.min, We = Math.max, Ni = Math.round, Do = Math.floor, kt = (e) => ({
  x: e,
  y: e
}), BE = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, VE = {
  start: "end",
  end: "start"
};
function Ja(e, n, t) {
  return We(e, cn(n, t));
}
function Ut(e, n) {
  return typeof e == "function" ? e(n) : e;
}
function Gt(e) {
  return e.split("-")[0];
}
function Pr(e) {
  return e.split("-")[1];
}
function lc(e) {
  return e === "x" ? "y" : "x";
}
function cc(e) {
  return e === "y" ? "height" : "width";
}
const jE = /* @__PURE__ */ new Set(["top", "bottom"]);
function wt(e) {
  return jE.has(Gt(e)) ? "y" : "x";
}
function uc(e) {
  return lc(wt(e));
}
function UE(e, n, t) {
  t === void 0 && (t = !1);
  const r = Pr(e), o = uc(e), i = cc(o);
  let s = o === "x" ? r === (t ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return n.reference[i] > n.floating[i] && (s = Ri(s)), [s, Ri(s)];
}
function GE(e) {
  const n = Ri(e);
  return [Xa(e), n, Xa(n)];
}
function Xa(e) {
  return e.replace(/start|end/g, (n) => VE[n]);
}
const Ud = ["left", "right"], Gd = ["right", "left"], HE = ["top", "bottom"], WE = ["bottom", "top"];
function KE(e, n, t) {
  switch (e) {
    case "top":
    case "bottom":
      return t ? n ? Gd : Ud : n ? Ud : Gd;
    case "left":
    case "right":
      return n ? HE : WE;
    default:
      return [];
  }
}
function qE(e, n, t, r) {
  const o = Pr(e);
  let i = KE(Gt(e), t === "start", r);
  return o && (i = i.map((s) => s + "-" + o), n && (i = i.concat(i.map(Xa)))), i;
}
function Ri(e) {
  return e.replace(/left|right|bottom|top/g, (n) => BE[n]);
}
function YE(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function bm(e) {
  return typeof e != "number" ? YE(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ai(e) {
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
function Hd(e, n, t) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = wt(n), s = uc(n), a = cc(s), l = Gt(n), c = i === "y", u = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
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
async function ZE(e, n) {
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
  } = Ut(n, e), p = bm(g), m = a[f ? d === "floating" ? "reference" : "floating" : d], b = Ai(await i.getClippingRect({
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
  }, S = Ai(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const JE = async (e, n, t) => {
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
  } = Hd(c, r, l), f = r, g = {}, p = 0;
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
        detectOverflow: (h = s.detectOverflow) != null ? h : ZE
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
    } = Hd(c, f, l)), m = -1);
  }
  return {
    x: u,
    y: d,
    placement: f,
    strategy: o,
    middlewareData: g
  };
}, XE = (e) => ({
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
    } = Ut(e, n) || {};
    if (c == null)
      return {};
    const d = bm(u), f = {
      x: t,
      y: r
    }, g = uc(o), p = cc(g), h = await s.getDimensions(c), m = g === "y", b = m ? "top" : "left", y = m ? "bottom" : "right", v = m ? "clientHeight" : "clientWidth", _ = i.reference[p] + i.reference[g] - f[g] - i.floating[p], S = f[g] - i.reference[g], C = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let k = C ? C[v] : 0;
    (!k || !await (s.isElement == null ? void 0 : s.isElement(C))) && (k = a.floating[v] || i.floating[p]);
    const N = _ / 2 - S / 2, E = k / 2 - h[p] / 2 - 1, R = cn(d[b], E), T = cn(d[y], E), A = R, D = k - h[p] - T, $ = k / 2 - h[p] / 2 + N, B = Ja(A, $, D), H = !l.arrow && Pr(o) != null && $ !== B && i.reference[p] / 2 - ($ < A ? R : T) - h[p] / 2 < 0, U = H ? $ < A ? $ - A : $ - D : 0;
    return {
      [g]: f[g] + U,
      data: {
        [g]: B,
        centerOffset: $ - B - U,
        ...H && {
          alignmentOffset: U
        }
      },
      reset: H
    };
  }
}), QE = function(e) {
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
      } = Ut(e, n);
      if ((t = i.arrow) != null && t.alignmentOffset)
        return {};
      const b = Gt(o), y = wt(a), v = Gt(a) === a, _ = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), S = f || (v || !h ? [Ri(a)] : GE(a)), C = p !== "none";
      !f && C && S.push(...qE(a, h, p, _));
      const k = [a, ...S], N = await l.detectOverflow(n, m), E = [];
      let R = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (u && E.push(N[b]), d) {
        const $ = UE(o, s, _);
        E.push(N[$[0]], N[$[1]]);
      }
      if (R = [...R, {
        placement: o,
        overflows: E
      }], !E.every(($) => $ <= 0)) {
        var T, A;
        const $ = (((T = i.flip) == null ? void 0 : T.index) || 0) + 1, B = k[$];
        if (B && (!(d === "alignment" ? y !== wt(B) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        R.every((j) => wt(j.placement) === y ? j.overflows[0] > 0 : !0)))
          return {
            data: {
              index: $,
              overflows: R
            },
            reset: {
              placement: B
            }
          };
        let H = (A = R.filter((U) => U.overflows[0] <= 0).sort((U, j) => U.overflows[1] - j.overflows[1])[0]) == null ? void 0 : A.placement;
        if (!H)
          switch (g) {
            case "bestFit": {
              var D;
              const U = (D = R.filter((j) => {
                if (C) {
                  const Y = wt(j.placement);
                  return Y === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  Y === "y";
                }
                return !0;
              }).map((j) => [j.placement, j.overflows.filter((Y) => Y > 0).reduce((Y, te) => Y + te, 0)]).sort((j, Y) => j[1] - Y[1])[0]) == null ? void 0 : D[0];
              U && (H = U);
              break;
            }
            case "initialPlacement":
              H = a;
              break;
          }
        if (o !== H)
          return {
            reset: {
              placement: H
            }
          };
      }
      return {};
    }
  };
};
function Wd(e, n) {
  return {
    top: e.top - n.height,
    right: e.right - n.width,
    bottom: e.bottom - n.height,
    left: e.left - n.width
  };
}
function Kd(e) {
  return zE.some((n) => e[n] >= 0);
}
const eN = function(e) {
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
      } = Ut(e, n);
      switch (o) {
        case "referenceHidden": {
          const s = await r.detectOverflow(n, {
            ...i,
            elementContext: "reference"
          }), a = Wd(s, t.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: Kd(a)
            }
          };
        }
        case "escaped": {
          const s = await r.detectOverflow(n, {
            ...i,
            altBoundary: !0
          }), a = Wd(s, t.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: Kd(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, vm = /* @__PURE__ */ new Set(["left", "top"]);
async function tN(e, n) {
  const {
    placement: t,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Gt(t), a = Pr(t), l = wt(t) === "y", c = vm.has(s) ? -1 : 1, u = i && l ? -1 : 1, d = Ut(n, e);
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
const nN = function(e) {
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
      } = n, l = await tN(n, e);
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
}, rN = function(e) {
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
      } = Ut(e, n), u = {
        x: t,
        y: r
      }, d = await i.detectOverflow(n, c), f = wt(Gt(o)), g = lc(f);
      let p = u[g], h = u[f];
      if (s) {
        const b = g === "y" ? "top" : "left", y = g === "y" ? "bottom" : "right", v = p + d[b], _ = p - d[y];
        p = Ja(v, p, _);
      }
      if (a) {
        const b = f === "y" ? "top" : "left", y = f === "y" ? "bottom" : "right", v = h + d[b], _ = h - d[y];
        h = Ja(v, h, _);
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
}, oN = function(e) {
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
      } = Ut(e, n), u = {
        x: t,
        y: r
      }, d = wt(o), f = lc(d);
      let g = u[f], p = u[d];
      const h = Ut(a, n), m = typeof h == "number" ? {
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
        const v = f === "y" ? "width" : "height", _ = vm.has(Gt(o)), S = i.reference[d] - i.floating[v] + (_ && ((b = s.offset) == null ? void 0 : b[d]) || 0) + (_ ? 0 : m.crossAxis), C = i.reference[d] + i.reference[v] + (_ ? 0 : ((y = s.offset) == null ? void 0 : y[d]) || 0) - (_ ? m.crossAxis : 0);
        p < S ? p = S : p > C && (p = C);
      }
      return {
        [f]: g,
        [d]: p
      };
    }
  };
}, iN = function(e) {
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
      } = Ut(e, n), u = await s.detectOverflow(n, c), d = Gt(o), f = Pr(o), g = wt(o) === "y", {
        width: p,
        height: h
      } = i.floating;
      let m, b;
      d === "top" || d === "bottom" ? (m = d, b = f === (await (s.isRTL == null ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (b = d, m = f === "end" ? "top" : "bottom");
      const y = h - u.top - u.bottom, v = p - u.left - u.right, _ = cn(h - u[m], y), S = cn(p - u[b], v), C = !n.middlewareData.shift;
      let k = _, N = S;
      if ((t = n.middlewareData.shift) != null && t.enabled.x && (N = v), (r = n.middlewareData.shift) != null && r.enabled.y && (k = y), C && !f) {
        const R = We(u.left, 0), T = We(u.right, 0), A = We(u.top, 0), D = We(u.bottom, 0);
        g ? N = p - 2 * (R !== 0 || T !== 0 ? R + T : We(u.left, u.right)) : k = h - 2 * (A !== 0 || D !== 0 ? A + D : We(u.top, u.bottom));
      }
      await l({
        ...n,
        availableWidth: N,
        availableHeight: k
      });
      const E = await s.getDimensions(a.floating);
      return p !== E.width || h !== E.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function ps() {
  return typeof window < "u";
}
function Ir(e) {
  return xm(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function qe(e) {
  var n;
  return (e == null || (n = e.ownerDocument) == null ? void 0 : n.defaultView) || window;
}
function Rt(e) {
  var n;
  return (n = (xm(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : n.documentElement;
}
function xm(e) {
  return ps() ? e instanceof Node || e instanceof qe(e).Node : !1;
}
function ut(e) {
  return ps() ? e instanceof Element || e instanceof qe(e).Element : !1;
}
function Nt(e) {
  return ps() ? e instanceof HTMLElement || e instanceof qe(e).HTMLElement : !1;
}
function qd(e) {
  return !ps() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof qe(e).ShadowRoot;
}
const sN = /* @__PURE__ */ new Set(["inline", "contents"]);
function yo(e) {
  const {
    overflow: n,
    overflowX: t,
    overflowY: r,
    display: o
  } = dt(e);
  return /auto|scroll|overlay|hidden|clip/.test(n + r + t) && !sN.has(o);
}
const aN = /* @__PURE__ */ new Set(["table", "td", "th"]);
function lN(e) {
  return aN.has(Ir(e));
}
const cN = [":popover-open", ":modal"];
function hs(e) {
  return cN.some((n) => {
    try {
      return e.matches(n);
    } catch {
      return !1;
    }
  });
}
const uN = ["transform", "translate", "scale", "rotate", "perspective"], dN = ["transform", "translate", "scale", "rotate", "perspective", "filter"], fN = ["paint", "layout", "strict", "content"];
function dc(e) {
  const n = fc(), t = ut(e) ? dt(e) : e;
  return uN.some((r) => t[r] ? t[r] !== "none" : !1) || (t.containerType ? t.containerType !== "normal" : !1) || !n && (t.backdropFilter ? t.backdropFilter !== "none" : !1) || !n && (t.filter ? t.filter !== "none" : !1) || dN.some((r) => (t.willChange || "").includes(r)) || fN.some((r) => (t.contain || "").includes(r));
}
function gN(e) {
  let n = un(e);
  for (; Nt(n) && !yr(n); ) {
    if (dc(n))
      return n;
    if (hs(n))
      return null;
    n = un(n);
  }
  return null;
}
function fc() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const pN = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function yr(e) {
  return pN.has(Ir(e));
}
function dt(e) {
  return qe(e).getComputedStyle(e);
}
function ms(e) {
  return ut(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function un(e) {
  if (Ir(e) === "html")
    return e;
  const n = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    qd(e) && e.host || // Fallback.
    Rt(e)
  );
  return qd(n) ? n.host : n;
}
function wm(e) {
  const n = un(e);
  return yr(n) ? e.ownerDocument ? e.ownerDocument.body : e.body : Nt(n) && yo(n) ? n : wm(n);
}
function ro(e, n, t) {
  var r;
  n === void 0 && (n = []), t === void 0 && (t = !0);
  const o = wm(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = qe(o);
  if (i) {
    const a = Qa(s);
    return n.concat(s, s.visualViewport || [], yo(o) ? o : [], a && t ? ro(a) : []);
  }
  return n.concat(o, ro(o, [], t));
}
function Qa(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function _m(e) {
  const n = dt(e);
  let t = parseFloat(n.width) || 0, r = parseFloat(n.height) || 0;
  const o = Nt(e), i = o ? e.offsetWidth : t, s = o ? e.offsetHeight : r, a = Ni(t) !== i || Ni(r) !== s;
  return a && (t = i, r = s), {
    width: t,
    height: r,
    $: a
  };
}
function gc(e) {
  return ut(e) ? e : e.contextElement;
}
function cr(e) {
  const n = gc(e);
  if (!Nt(n))
    return kt(1);
  const t = n.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = _m(n);
  let s = (i ? Ni(t.width) : t.width) / r, a = (i ? Ni(t.height) : t.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const hN = /* @__PURE__ */ kt(0);
function Sm(e) {
  const n = qe(e);
  return !fc() || !n.visualViewport ? hN : {
    x: n.visualViewport.offsetLeft,
    y: n.visualViewport.offsetTop
  };
}
function mN(e, n, t) {
  return n === void 0 && (n = !1), !t || n && t !== qe(e) ? !1 : n;
}
function Ln(e, n, t, r) {
  n === void 0 && (n = !1), t === void 0 && (t = !1);
  const o = e.getBoundingClientRect(), i = gc(e);
  let s = kt(1);
  n && (r ? ut(r) && (s = cr(r)) : s = cr(e));
  const a = mN(i, t, r) ? Sm(i) : kt(0);
  let l = (o.left + a.x) / s.x, c = (o.top + a.y) / s.y, u = o.width / s.x, d = o.height / s.y;
  if (i) {
    const f = qe(i), g = r && ut(r) ? qe(r) : r;
    let p = f, h = Qa(p);
    for (; h && r && g !== p; ) {
      const m = cr(h), b = h.getBoundingClientRect(), y = dt(h), v = b.left + (h.clientLeft + parseFloat(y.paddingLeft)) * m.x, _ = b.top + (h.clientTop + parseFloat(y.paddingTop)) * m.y;
      l *= m.x, c *= m.y, u *= m.x, d *= m.y, l += v, c += _, p = qe(h), h = Qa(p);
    }
  }
  return Ai({
    width: u,
    height: d,
    x: l,
    y: c
  });
}
function ys(e, n) {
  const t = ms(e).scrollLeft;
  return n ? n.left + t : Ln(Rt(e)).left + t;
}
function Cm(e, n) {
  const t = e.getBoundingClientRect(), r = t.left + n.scrollLeft - ys(e, t), o = t.top + n.scrollTop;
  return {
    x: r,
    y: o
  };
}
function yN(e) {
  let {
    elements: n,
    rect: t,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = Rt(r), a = n ? hs(n.floating) : !1;
  if (r === s || a && i)
    return t;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = kt(1);
  const u = kt(0), d = Nt(r);
  if ((d || !d && !i) && ((Ir(r) !== "body" || yo(s)) && (l = ms(r)), Nt(r))) {
    const g = Ln(r);
    c = cr(r), u.x = g.x + r.clientLeft, u.y = g.y + r.clientTop;
  }
  const f = s && !d && !i ? Cm(s, l) : kt(0);
  return {
    width: t.width * c.x,
    height: t.height * c.y,
    x: t.x * c.x - l.scrollLeft * c.x + u.x + f.x,
    y: t.y * c.y - l.scrollTop * c.y + u.y + f.y
  };
}
function bN(e) {
  return Array.from(e.getClientRects());
}
function vN(e) {
  const n = Rt(e), t = ms(e), r = e.ownerDocument.body, o = We(n.scrollWidth, n.clientWidth, r.scrollWidth, r.clientWidth), i = We(n.scrollHeight, n.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -t.scrollLeft + ys(e);
  const a = -t.scrollTop;
  return dt(r).direction === "rtl" && (s += We(n.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
const Yd = 25;
function xN(e, n) {
  const t = qe(e), r = Rt(e), o = t.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const u = fc();
    (!u || u && n === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  const c = ys(r);
  if (c <= 0) {
    const u = r.ownerDocument, d = u.body, f = getComputedStyle(d), g = u.compatMode === "CSS1Compat" && parseFloat(f.marginLeft) + parseFloat(f.marginRight) || 0, p = Math.abs(r.clientWidth - d.clientWidth - g);
    p <= Yd && (i -= p);
  } else c <= Yd && (i += c);
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
const wN = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function _N(e, n) {
  const t = Ln(e, !0, n === "fixed"), r = t.top + e.clientTop, o = t.left + e.clientLeft, i = Nt(e) ? cr(e) : kt(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, c = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: c
  };
}
function Zd(e, n, t) {
  let r;
  if (n === "viewport")
    r = xN(e, t);
  else if (n === "document")
    r = vN(Rt(e));
  else if (ut(n))
    r = _N(n, t);
  else {
    const o = Sm(e);
    r = {
      x: n.x - o.x,
      y: n.y - o.y,
      width: n.width,
      height: n.height
    };
  }
  return Ai(r);
}
function km(e, n) {
  const t = un(e);
  return t === n || !ut(t) || yr(t) ? !1 : dt(t).position === "fixed" || km(t, n);
}
function SN(e, n) {
  const t = n.get(e);
  if (t)
    return t;
  let r = ro(e, [], !1).filter((a) => ut(a) && Ir(a) !== "body"), o = null;
  const i = dt(e).position === "fixed";
  let s = i ? un(e) : e;
  for (; ut(s) && !yr(s); ) {
    const a = dt(s), l = dc(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && wN.has(o.position) || yo(s) && !l && km(e, s)) ? r = r.filter((u) => u !== s) : o = a, s = un(s);
  }
  return n.set(e, r), r;
}
function CN(e) {
  let {
    element: n,
    boundary: t,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...t === "clippingAncestors" ? hs(n) ? [] : SN(n, this._c) : [].concat(t), r], a = s[0], l = s.reduce((c, u) => {
    const d = Zd(n, u, o);
    return c.top = We(d.top, c.top), c.right = cn(d.right, c.right), c.bottom = cn(d.bottom, c.bottom), c.left = We(d.left, c.left), c;
  }, Zd(n, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function kN(e) {
  const {
    width: n,
    height: t
  } = _m(e);
  return {
    width: n,
    height: t
  };
}
function EN(e, n, t) {
  const r = Nt(n), o = Rt(n), i = t === "fixed", s = Ln(e, !0, i, n);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = kt(0);
  function c() {
    l.x = ys(o);
  }
  if (r || !r && !i)
    if ((Ir(n) !== "body" || yo(o)) && (a = ms(n)), r) {
      const g = Ln(n, !0, i, n);
      l.x = g.x + n.clientLeft, l.y = g.y + n.clientTop;
    } else o && c();
  i && !r && o && c();
  const u = o && !r && !i ? Cm(o, a) : kt(0), d = s.left + a.scrollLeft - l.x - u.x, f = s.top + a.scrollTop - l.y - u.y;
  return {
    x: d,
    y: f,
    width: s.width,
    height: s.height
  };
}
function ta(e) {
  return dt(e).position === "static";
}
function Jd(e, n) {
  if (!Nt(e) || dt(e).position === "fixed")
    return null;
  if (n)
    return n(e);
  let t = e.offsetParent;
  return Rt(e) === t && (t = t.ownerDocument.body), t;
}
function Em(e, n) {
  const t = qe(e);
  if (hs(e))
    return t;
  if (!Nt(e)) {
    let o = un(e);
    for (; o && !yr(o); ) {
      if (ut(o) && !ta(o))
        return o;
      o = un(o);
    }
    return t;
  }
  let r = Jd(e, n);
  for (; r && lN(r) && ta(r); )
    r = Jd(r, n);
  return r && yr(r) && ta(r) && !dc(r) ? t : r || gN(e) || t;
}
const NN = async function(e) {
  const n = this.getOffsetParent || Em, t = this.getDimensions, r = await t(e.floating);
  return {
    reference: EN(e.reference, await n(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function RN(e) {
  return dt(e).direction === "rtl";
}
const AN = {
  convertOffsetParentRelativeRectToViewportRelativeRect: yN,
  getDocumentElement: Rt,
  getClippingRect: CN,
  getOffsetParent: Em,
  getElementRects: NN,
  getClientRects: bN,
  getDimensions: kN,
  getScale: cr,
  isElement: ut,
  isRTL: RN
};
function Nm(e, n) {
  return e.x === n.x && e.y === n.y && e.width === n.width && e.height === n.height;
}
function TN(e, n) {
  let t = null, r;
  const o = Rt(e);
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
    const p = Do(d), h = Do(o.clientWidth - (u + f)), m = Do(o.clientHeight - (d + g)), b = Do(u), v = {
      rootMargin: -p + "px " + -h + "px " + -m + "px " + -b + "px",
      threshold: We(0, cn(1, l)) || 1
    };
    let _ = !0;
    function S(C) {
      const k = C[0].intersectionRatio;
      if (k !== l) {
        if (!_)
          return s();
        k ? s(!1, k) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      k === 1 && !Nm(c, e.getBoundingClientRect()) && s(), _ = !1;
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
function FN(e, n, t, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, c = gc(e), u = o || i ? [...c ? ro(c) : [], ...ro(n)] : [];
  u.forEach((b) => {
    o && b.addEventListener("scroll", t, {
      passive: !0
    }), i && b.addEventListener("resize", t);
  });
  const d = c && a ? TN(c, t) : null;
  let f = -1, g = null;
  s && (g = new ResizeObserver((b) => {
    let [y] = b;
    y && y.target === c && g && (g.unobserve(n), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var v;
      (v = g) == null || v.observe(n);
    })), t();
  }), c && !l && g.observe(c), g.observe(n));
  let p, h = l ? Ln(e) : null;
  l && m();
  function m() {
    const b = Ln(e);
    h && !Nm(h, b) && t(), h = b, p = requestAnimationFrame(m);
  }
  return t(), () => {
    var b;
    u.forEach((y) => {
      o && y.removeEventListener("scroll", t), i && y.removeEventListener("resize", t);
    }), d == null || d(), (b = g) == null || b.disconnect(), g = null, l && cancelAnimationFrame(p);
  };
}
const PN = nN, IN = rN, ON = QE, $N = iN, MN = eN, Xd = XE, DN = oN, LN = (e, n, t) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: AN,
    ...t
  }, i = {
    ...o.platform,
    _c: r
  };
  return JE(e, n, {
    ...o,
    platform: i
  });
};
var zN = typeof document < "u", BN = function() {
}, qo = zN ? wr : BN;
function Ti(e, n) {
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
        if (!Ti(e[r], n[r]))
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
      if (!(i === "_owner" && e.$$typeof) && !Ti(e[i], n[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && n !== n;
}
function Rm(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Qd(e, n) {
  const t = Rm(e);
  return Math.round(n * t) / t;
}
function na(e) {
  const n = w.useRef(e);
  return qo(() => {
    n.current = e;
  }), n;
}
function VN(e) {
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
  } = e, [u, d] = w.useState({
    x: 0,
    y: 0,
    strategy: t,
    placement: n,
    middlewareData: {},
    isPositioned: !1
  }), [f, g] = w.useState(r);
  Ti(f, r) || g(r);
  const [p, h] = w.useState(null), [m, b] = w.useState(null), y = w.useCallback((j) => {
    j !== C.current && (C.current = j, h(j));
  }, []), v = w.useCallback((j) => {
    j !== k.current && (k.current = j, b(j));
  }, []), _ = i || p, S = s || m, C = w.useRef(null), k = w.useRef(null), N = w.useRef(u), E = l != null, R = na(l), T = na(o), A = na(c), D = w.useCallback(() => {
    if (!C.current || !k.current)
      return;
    const j = {
      placement: n,
      strategy: t,
      middleware: f
    };
    T.current && (j.platform = T.current), LN(C.current, k.current, j).then((Y) => {
      const te = {
        ...Y,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: A.current !== !1
      };
      $.current && !Ti(N.current, te) && (N.current = te, df.flushSync(() => {
        d(te);
      }));
    });
  }, [f, n, t, T, A]);
  qo(() => {
    c === !1 && N.current.isPositioned && (N.current.isPositioned = !1, d((j) => ({
      ...j,
      isPositioned: !1
    })));
  }, [c]);
  const $ = w.useRef(!1);
  qo(() => ($.current = !0, () => {
    $.current = !1;
  }), []), qo(() => {
    if (_ && (C.current = _), S && (k.current = S), _ && S) {
      if (R.current)
        return R.current(_, S, D);
      D();
    }
  }, [_, S, D, R, E]);
  const B = w.useMemo(() => ({
    reference: C,
    floating: k,
    setReference: y,
    setFloating: v
  }), [y, v]), H = w.useMemo(() => ({
    reference: _,
    floating: S
  }), [_, S]), U = w.useMemo(() => {
    const j = {
      position: t,
      left: 0,
      top: 0
    };
    if (!H.floating)
      return j;
    const Y = Qd(H.floating, u.x), te = Qd(H.floating, u.y);
    return a ? {
      ...j,
      transform: "translate(" + Y + "px, " + te + "px)",
      ...Rm(H.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: t,
      left: Y,
      top: te
    };
  }, [t, a, H.floating, u.x, u.y]);
  return w.useMemo(() => ({
    ...u,
    update: D,
    refs: B,
    elements: H,
    floatingStyles: U
  }), [u, D, B, H, U]);
}
const jN = (e) => {
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
      return r && n(r) ? r.current != null ? Xd({
        element: r.current,
        padding: o
      }).fn(t) : {} : r ? Xd({
        element: r,
        padding: o
      }).fn(t) : {};
    }
  };
}, UN = (e, n) => ({
  ...PN(e),
  options: [e, n]
}), GN = (e, n) => ({
  ...IN(e),
  options: [e, n]
}), HN = (e, n) => ({
  ...DN(e),
  options: [e, n]
}), WN = (e, n) => ({
  ...ON(e),
  options: [e, n]
}), KN = (e, n) => ({
  ...$N(e),
  options: [e, n]
}), qN = (e, n) => ({
  ...MN(e),
  options: [e, n]
}), YN = (e, n) => ({
  ...jN(e),
  options: [e, n]
});
var ZN = "Arrow", Am = w.forwardRef((e, n) => {
  const { children: t, width: r = 10, height: o = 5, ...i } = e;
  return /* @__PURE__ */ x(
    pe.svg,
    {
      ...i,
      ref: n,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? t : /* @__PURE__ */ x("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Am.displayName = ZN;
var JN = Am, pc = "Popper", [Tm, Fm] = Ht(pc), [XN, Pm] = Tm(pc), Im = (e) => {
  const { __scopePopper: n, children: t } = e, [r, o] = w.useState(null);
  return /* @__PURE__ */ x(XN, { scope: n, anchor: r, onAnchorChange: o, children: t });
};
Im.displayName = pc;
var Om = "PopperAnchor", $m = w.forwardRef(
  (e, n) => {
    const { __scopePopper: t, virtualRef: r, ...o } = e, i = Pm(Om, t), s = w.useRef(null), a = ve(n, s), l = w.useRef(null);
    return w.useEffect(() => {
      const c = l.current;
      l.current = (r == null ? void 0 : r.current) || s.current, c !== l.current && i.onAnchorChange(l.current);
    }), r ? null : /* @__PURE__ */ x(pe.div, { ...o, ref: a });
  }
);
$m.displayName = Om;
var hc = "PopperContent", [QN, eR] = Tm(hc), Mm = w.forwardRef(
  (e, n) => {
    var Pe, Be, Ve, At, pn, vo;
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
    } = e, m = Pm(hc, t), [b, y] = w.useState(null), v = ve(n, (Tt) => y(Tt)), [_, S] = w.useState(null), C = cl(_), k = (C == null ? void 0 : C.width) ?? 0, N = (C == null ? void 0 : C.height) ?? 0, E = r + (i !== "center" ? "-" + i : ""), R = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, T = Array.isArray(c) ? c : [c], A = T.length > 0, D = {
      padding: R,
      boundary: T.filter(nR),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: A
    }, { refs: $, floatingStyles: B, placement: H, isPositioned: U, middlewareData: j } = VN({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: E,
      whileElementsMounted: (...Tt) => FN(...Tt, {
        animationFrame: g === "always"
      }),
      elements: {
        reference: m.anchor
      },
      middleware: [
        UN({ mainAxis: o + N, alignmentAxis: s }),
        l && GN({
          mainAxis: !0,
          crossAxis: !1,
          limiter: d === "partial" ? HN() : void 0,
          ...D
        }),
        l && WN({ ...D }),
        KN({
          ...D,
          apply: ({ elements: Tt, rects: xc, availableWidth: zy, availableHeight: By }) => {
            const { width: Vy, height: jy } = xc.reference, xo = Tt.floating.style;
            xo.setProperty("--radix-popper-available-width", `${zy}px`), xo.setProperty("--radix-popper-available-height", `${By}px`), xo.setProperty("--radix-popper-anchor-width", `${Vy}px`), xo.setProperty("--radix-popper-anchor-height", `${jy}px`);
          }
        }),
        _ && YN({ element: _, padding: a }),
        rR({ arrowWidth: k, arrowHeight: N }),
        f && qN({ strategy: "referenceHidden", ...D })
      ]
    }), [Y, te] = zm(H), ie = kn(p);
    Bt(() => {
      U && (ie == null || ie());
    }, [U, ie]);
    const he = (Pe = j.arrow) == null ? void 0 : Pe.x, ze = (Be = j.arrow) == null ? void 0 : Be.y, Se = ((Ve = j.arrow) == null ? void 0 : Ve.centerOffset) !== 0, [De, Ce] = w.useState();
    return Bt(() => {
      b && Ce(window.getComputedStyle(b).zIndex);
    }, [b]), /* @__PURE__ */ x(
      "div",
      {
        ref: $.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...B,
          transform: U ? B.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: De,
          "--radix-popper-transform-origin": [
            (At = j.transformOrigin) == null ? void 0 : At.x,
            (pn = j.transformOrigin) == null ? void 0 : pn.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((vo = j.hide) == null ? void 0 : vo.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ x(
          QN,
          {
            scope: t,
            placedSide: Y,
            onArrowChange: S,
            arrowX: he,
            arrowY: ze,
            shouldHideArrow: Se,
            children: /* @__PURE__ */ x(
              pe.div,
              {
                "data-side": Y,
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
Mm.displayName = hc;
var Dm = "PopperArrow", tR = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Lm = w.forwardRef(function(n, t) {
  const { __scopePopper: r, ...o } = n, i = eR(Dm, r), s = tR[i.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ x(
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
        children: /* @__PURE__ */ x(
          JN,
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
Lm.displayName = Dm;
function nR(e) {
  return e !== null;
}
var rR = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(n) {
    var m, b, y;
    const { placement: t, rects: r, middlewareData: o } = n, s = ((m = o.arrow) == null ? void 0 : m.centerOffset) !== 0, a = s ? 0 : e.arrowWidth, l = s ? 0 : e.arrowHeight, [c, u] = zm(t), d = { start: "0%", center: "50%", end: "100%" }[u], f = (((b = o.arrow) == null ? void 0 : b.x) ?? 0) + a / 2, g = (((y = o.arrow) == null ? void 0 : y.y) ?? 0) + l / 2;
    let p = "", h = "";
    return c === "bottom" ? (p = s ? d : `${f}px`, h = `${-l}px`) : c === "top" ? (p = s ? d : `${f}px`, h = `${r.floating.height + l}px`) : c === "right" ? (p = `${-l}px`, h = s ? d : `${g}px`) : c === "left" && (p = `${r.floating.width + l}px`, h = s ? d : `${g}px`), { data: { x: p, y: h } };
  }
});
function zm(e) {
  const [n, t = "center"] = e.split("-");
  return [n, t];
}
var oR = Im, Bm = $m, iR = Mm, sR = Lm, aR = "Portal", Vm = w.forwardRef((e, n) => {
  var a;
  const { container: t, ...r } = e, [o, i] = w.useState(!1);
  Bt(() => i(!0), []);
  const s = t || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
  return s ? Yy.createPortal(/* @__PURE__ */ x(pe.div, { ...r, ref: n }), s) : null;
});
Vm.displayName = aR;
var lR = function(e) {
  if (typeof document > "u")
    return null;
  var n = Array.isArray(e) ? e[0] : e;
  return n.ownerDocument.body;
}, qn = /* @__PURE__ */ new WeakMap(), Lo = /* @__PURE__ */ new WeakMap(), zo = {}, ra = 0, jm = function(e) {
  return e && (e.host || jm(e.parentNode));
}, cR = function(e, n) {
  return n.map(function(t) {
    if (e.contains(t))
      return t;
    var r = jm(t);
    return r && e.contains(r) ? r : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(t) {
    return !!t;
  });
}, uR = function(e, n, t, r) {
  var o = cR(n, Array.isArray(e) ? e : [e]);
  zo[t] || (zo[t] = /* @__PURE__ */ new WeakMap());
  var i = zo[t], s = [], a = /* @__PURE__ */ new Set(), l = new Set(o), c = function(d) {
    !d || a.has(d) || (a.add(d), c(d.parentNode));
  };
  o.forEach(c);
  var u = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (a.has(f))
        u(f);
      else
        try {
          var g = f.getAttribute(r), p = g !== null && g !== "false", h = (qn.get(f) || 0) + 1, m = (i.get(f) || 0) + 1;
          qn.set(f, h), i.set(f, m), s.push(f), h === 1 && p && Lo.set(f, !0), m === 1 && f.setAttribute(t, "true"), p || f.setAttribute(r, "true");
        } catch (b) {
          console.error("aria-hidden: cannot operate on ", f, b);
        }
    });
  };
  return u(n), a.clear(), ra++, function() {
    s.forEach(function(d) {
      var f = qn.get(d) - 1, g = i.get(d) - 1;
      qn.set(d, f), i.set(d, g), f || (Lo.has(d) || d.removeAttribute(r), Lo.delete(d)), g || d.removeAttribute(t);
    }), ra--, ra || (qn = /* @__PURE__ */ new WeakMap(), qn = /* @__PURE__ */ new WeakMap(), Lo = /* @__PURE__ */ new WeakMap(), zo = {});
  };
}, dR = function(e, n, t) {
  t === void 0 && (t = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = lR(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), uR(r, o, t, "aria-hidden")) : function() {
    return null;
  };
}, vt = function() {
  return vt = Object.assign || function(n) {
    for (var t, r = 1, o = arguments.length; r < o; r++) {
      t = arguments[r];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
    }
    return n;
  }, vt.apply(this, arguments);
};
function Um(e, n) {
  var t = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
  return t;
}
function fR(e, n, t) {
  if (t || arguments.length === 2) for (var r = 0, o = n.length, i; r < o; r++)
    (i || !(r in n)) && (i || (i = Array.prototype.slice.call(n, 0, r)), i[r] = n[r]);
  return e.concat(i || Array.prototype.slice.call(n));
}
var Yo = "right-scroll-bar-position", Zo = "width-before-scroll-bar", gR = "with-scroll-bars-hidden", pR = "--removed-body-scroll-bar-size";
function oa(e, n) {
  return typeof e == "function" ? e(n) : e && (e.current = n), e;
}
function hR(e, n) {
  var t = on(function() {
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
var mR = typeof window < "u" ? w.useLayoutEffect : w.useEffect, ef = /* @__PURE__ */ new WeakMap();
function yR(e, n) {
  var t = hR(null, function(r) {
    return e.forEach(function(o) {
      return oa(o, r);
    });
  });
  return mR(function() {
    var r = ef.get(t);
    if (r) {
      var o = new Set(r), i = new Set(e), s = t.current;
      o.forEach(function(a) {
        i.has(a) || oa(a, null);
      }), i.forEach(function(a) {
        o.has(a) || oa(a, s);
      });
    }
    ef.set(t, e);
  }, [e]), t;
}
function bR(e) {
  return e;
}
function vR(e, n) {
  n === void 0 && (n = bR);
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
function xR(e) {
  e === void 0 && (e = {});
  var n = vR(null);
  return n.options = vt({ async: !0, ssr: !1 }, e), n;
}
var Gm = function(e) {
  var n = e.sideCar, t = Um(e, ["sideCar"]);
  if (!n)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = n.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return w.createElement(r, vt({}, t));
};
Gm.isSideCarExport = !0;
function wR(e, n) {
  return e.useMedium(n), Gm;
}
var Hm = xR(), ia = function() {
}, bs = w.forwardRef(function(e, n) {
  var t = w.useRef(null), r = w.useState({
    onScrollCapture: ia,
    onWheelCapture: ia,
    onTouchMoveCapture: ia
  }), o = r[0], i = r[1], s = e.forwardProps, a = e.children, l = e.className, c = e.removeScrollBar, u = e.enabled, d = e.shards, f = e.sideCar, g = e.noRelative, p = e.noIsolation, h = e.inert, m = e.allowPinchZoom, b = e.as, y = b === void 0 ? "div" : b, v = e.gapMode, _ = Um(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), S = f, C = yR([t, n]), k = vt(vt({}, _), o);
  return w.createElement(
    w.Fragment,
    null,
    u && w.createElement(S, { sideCar: Hm, removeScrollBar: c, shards: d, noRelative: g, noIsolation: p, inert: h, setCallbacks: i, allowPinchZoom: !!m, lockRef: t, gapMode: v }),
    s ? w.cloneElement(w.Children.only(a), vt(vt({}, k), { ref: C })) : w.createElement(y, vt({}, k, { className: l, ref: C }), a)
  );
});
bs.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
bs.classNames = {
  fullWidth: Zo,
  zeroRight: Yo
};
var _R = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function SR() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var n = _R();
  return n && e.setAttribute("nonce", n), e;
}
function CR(e, n) {
  e.styleSheet ? e.styleSheet.cssText = n : e.appendChild(document.createTextNode(n));
}
function kR(e) {
  var n = document.head || document.getElementsByTagName("head")[0];
  n.appendChild(e);
}
var ER = function() {
  var e = 0, n = null;
  return {
    add: function(t) {
      e == 0 && (n = SR()) && (CR(n, t), kR(n)), e++;
    },
    remove: function() {
      e--, !e && n && (n.parentNode && n.parentNode.removeChild(n), n = null);
    }
  };
}, NR = function() {
  var e = ER();
  return function(n, t) {
    w.useEffect(function() {
      return e.add(n), function() {
        e.remove();
      };
    }, [n && t]);
  };
}, Wm = function() {
  var e = NR(), n = function(t) {
    var r = t.styles, o = t.dynamic;
    return e(r, o), null;
  };
  return n;
}, RR = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, sa = function(e) {
  return parseInt(e || "", 10) || 0;
}, AR = function(e) {
  var n = window.getComputedStyle(document.body), t = n[e === "padding" ? "paddingLeft" : "marginLeft"], r = n[e === "padding" ? "paddingTop" : "marginTop"], o = n[e === "padding" ? "paddingRight" : "marginRight"];
  return [sa(t), sa(r), sa(o)];
}, TR = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return RR;
  var n = AR(e), t = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: n[0],
    top: n[1],
    right: n[2],
    gap: Math.max(0, r - t + n[2] - n[0])
  };
}, FR = Wm(), ur = "data-scroll-locked", PR = function(e, n, t, r) {
  var o = e.left, i = e.top, s = e.right, a = e.gap;
  return t === void 0 && (t = "margin"), `
  .`.concat(gR, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(ur, `] {
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
  
  .`).concat(Yo, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Zo, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Yo, " .").concat(Yo, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Zo, " .").concat(Zo, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(ur, `] {
    `).concat(pR, ": ").concat(a, `px;
  }
`);
}, tf = function() {
  var e = parseInt(document.body.getAttribute(ur) || "0", 10);
  return isFinite(e) ? e : 0;
}, IR = function() {
  w.useEffect(function() {
    return document.body.setAttribute(ur, (tf() + 1).toString()), function() {
      var e = tf() - 1;
      e <= 0 ? document.body.removeAttribute(ur) : document.body.setAttribute(ur, e.toString());
    };
  }, []);
}, OR = function(e) {
  var n = e.noRelative, t = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  IR();
  var i = w.useMemo(function() {
    return TR(o);
  }, [o]);
  return w.createElement(FR, { styles: PR(i, !n, o, t ? "" : "!important") });
}, el = !1;
if (typeof window < "u")
  try {
    var Bo = Object.defineProperty({}, "passive", {
      get: function() {
        return el = !0, !0;
      }
    });
    window.addEventListener("test", Bo, Bo), window.removeEventListener("test", Bo, Bo);
  } catch {
    el = !1;
  }
var Yn = el ? { passive: !1 } : !1, $R = function(e) {
  return e.tagName === "TEXTAREA";
}, Km = function(e, n) {
  if (!(e instanceof Element))
    return !1;
  var t = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    t[n] !== "hidden" && // contains scroll inside self
    !(t.overflowY === t.overflowX && !$R(e) && t[n] === "visible")
  );
}, MR = function(e) {
  return Km(e, "overflowY");
}, DR = function(e) {
  return Km(e, "overflowX");
}, nf = function(e, n) {
  var t = n.ownerDocument, r = n;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = qm(e, r);
    if (o) {
      var i = Ym(e, r), s = i[1], a = i[2];
      if (s > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== t.body);
  return !1;
}, LR = function(e) {
  var n = e.scrollTop, t = e.scrollHeight, r = e.clientHeight;
  return [
    n,
    t,
    r
  ];
}, zR = function(e) {
  var n = e.scrollLeft, t = e.scrollWidth, r = e.clientWidth;
  return [
    n,
    t,
    r
  ];
}, qm = function(e, n) {
  return e === "v" ? MR(n) : DR(n);
}, Ym = function(e, n) {
  return e === "v" ? LR(n) : zR(n);
}, BR = function(e, n) {
  return e === "h" && n === "rtl" ? -1 : 1;
}, VR = function(e, n, t, r, o) {
  var i = BR(e, window.getComputedStyle(n).direction), s = i * r, a = t.target, l = n.contains(a), c = !1, u = s > 0, d = 0, f = 0;
  do {
    if (!a)
      break;
    var g = Ym(e, a), p = g[0], h = g[1], m = g[2], b = h - m - i * p;
    (p || b) && qm(e, a) && (d += b, f += p);
    var y = a.parentNode;
    a = y && y.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? y.host : y;
  } while (
    // portaled content
    !l && a !== document.body || // self content
    l && (n.contains(a) || n === a)
  );
  return (u && Math.abs(d) < 1 || !u && Math.abs(f) < 1) && (c = !0), c;
}, Vo = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, rf = function(e) {
  return [e.deltaX, e.deltaY];
}, of = function(e) {
  return e && "current" in e ? e.current : e;
}, jR = function(e, n) {
  return e[0] === n[0] && e[1] === n[1];
}, UR = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, GR = 0, Zn = [];
function HR(e) {
  var n = w.useRef([]), t = w.useRef([0, 0]), r = w.useRef(), o = w.useState(GR++)[0], i = w.useState(Wm)[0], s = w.useRef(e);
  w.useEffect(function() {
    s.current = e;
  }, [e]), w.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var h = fR([e.lockRef.current], (e.shards || []).map(of), !0).filter(Boolean);
      return h.forEach(function(m) {
        return m.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), h.forEach(function(m) {
          return m.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = w.useCallback(function(h, m) {
    if ("touches" in h && h.touches.length === 2 || h.type === "wheel" && h.ctrlKey)
      return !s.current.allowPinchZoom;
    var b = Vo(h), y = t.current, v = "deltaX" in h ? h.deltaX : y[0] - b[0], _ = "deltaY" in h ? h.deltaY : y[1] - b[1], S, C = h.target, k = Math.abs(v) > Math.abs(_) ? "h" : "v";
    if ("touches" in h && k === "h" && C.type === "range")
      return !1;
    var N = window.getSelection(), E = N && N.anchorNode, R = E ? E === C || E.contains(C) : !1;
    if (R)
      return !1;
    var T = nf(k, C);
    if (!T)
      return !0;
    if (T ? S = k : (S = k === "v" ? "h" : "v", T = nf(k, C)), !T)
      return !1;
    if (!r.current && "changedTouches" in h && (v || _) && (r.current = S), !S)
      return !0;
    var A = r.current || S;
    return VR(A, m, h, A === "h" ? v : _);
  }, []), l = w.useCallback(function(h) {
    var m = h;
    if (!(!Zn.length || Zn[Zn.length - 1] !== i)) {
      var b = "deltaY" in m ? rf(m) : Vo(m), y = n.current.filter(function(S) {
        return S.name === m.type && (S.target === m.target || m.target === S.shadowParent) && jR(S.delta, b);
      })[0];
      if (y && y.should) {
        m.cancelable && m.preventDefault();
        return;
      }
      if (!y) {
        var v = (s.current.shards || []).map(of).filter(Boolean).filter(function(S) {
          return S.contains(m.target);
        }), _ = v.length > 0 ? a(m, v[0]) : !s.current.noIsolation;
        _ && m.cancelable && m.preventDefault();
      }
    }
  }, []), c = w.useCallback(function(h, m, b, y) {
    var v = { name: h, delta: m, target: b, should: y, shadowParent: WR(b) };
    n.current.push(v), setTimeout(function() {
      n.current = n.current.filter(function(_) {
        return _ !== v;
      });
    }, 1);
  }, []), u = w.useCallback(function(h) {
    t.current = Vo(h), r.current = void 0;
  }, []), d = w.useCallback(function(h) {
    c(h.type, rf(h), h.target, a(h, e.lockRef.current));
  }, []), f = w.useCallback(function(h) {
    c(h.type, Vo(h), h.target, a(h, e.lockRef.current));
  }, []);
  w.useEffect(function() {
    return Zn.push(i), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", l, Yn), document.addEventListener("touchmove", l, Yn), document.addEventListener("touchstart", u, Yn), function() {
      Zn = Zn.filter(function(h) {
        return h !== i;
      }), document.removeEventListener("wheel", l, Yn), document.removeEventListener("touchmove", l, Yn), document.removeEventListener("touchstart", u, Yn);
    };
  }, []);
  var g = e.removeScrollBar, p = e.inert;
  return w.createElement(
    w.Fragment,
    null,
    p ? w.createElement(i, { styles: UR(o) }) : null,
    g ? w.createElement(OR, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function WR(e) {
  for (var n = null; e !== null; )
    e instanceof ShadowRoot && (n = e.host, e = e.host), e = e.parentNode;
  return n;
}
const KR = wR(Hm, HR);
var Zm = w.forwardRef(function(e, n) {
  return w.createElement(bs, vt({}, e, { ref: n, sideCar: KR }));
});
Zm.classNames = bs.classNames;
var vs = "Popover", [Jm] = Ht(vs, [
  Fm
]), bo = Fm(), [qR, gn] = Jm(vs), Xm = (e) => {
  const {
    __scopePopover: n,
    children: t,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    modal: s = !1
  } = e, a = bo(n), l = w.useRef(null), [c, u] = w.useState(!1), [d, f] = zn({
    prop: r,
    defaultProp: o ?? !1,
    onChange: i,
    caller: vs
  });
  return /* @__PURE__ */ x(oR, { ...a, children: /* @__PURE__ */ x(
    qR,
    {
      scope: n,
      contentId: zi(),
      triggerRef: l,
      open: d,
      onOpenChange: f,
      onOpenToggle: w.useCallback(() => f((g) => !g), [f]),
      hasCustomAnchor: c,
      onCustomAnchorAdd: w.useCallback(() => u(!0), []),
      onCustomAnchorRemove: w.useCallback(() => u(!1), []),
      modal: s,
      children: t
    }
  ) });
};
Xm.displayName = vs;
var Qm = "PopoverAnchor", ey = w.forwardRef(
  (e, n) => {
    const { __scopePopover: t, ...r } = e, o = gn(Qm, t), i = bo(t), { onCustomAnchorAdd: s, onCustomAnchorRemove: a } = o;
    return w.useEffect(() => (s(), () => a()), [s, a]), /* @__PURE__ */ x(Bm, { ...i, ...r, ref: n });
  }
);
ey.displayName = Qm;
var ty = "PopoverTrigger", ny = w.forwardRef(
  (e, n) => {
    const { __scopePopover: t, ...r } = e, o = gn(ty, t), i = bo(t), s = ve(n, o.triggerRef), a = /* @__PURE__ */ x(
      pe.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": ly(o.open),
        ...r,
        ref: s,
        onClick: ge(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? a : /* @__PURE__ */ x(Bm, { asChild: !0, ...i, children: a });
  }
);
ny.displayName = ty;
var mc = "PopoverPortal", [YR, ZR] = Jm(mc, {
  forceMount: void 0
}), ry = (e) => {
  const { __scopePopover: n, forceMount: t, children: r, container: o } = e, i = gn(mc, n);
  return /* @__PURE__ */ x(YR, { scope: n, forceMount: t, children: /* @__PURE__ */ x(ao, { present: t || i.open, children: /* @__PURE__ */ x(Vm, { asChild: !0, container: o, children: r }) }) });
};
ry.displayName = mc;
var br = "PopoverContent", oy = w.forwardRef(
  (e, n) => {
    const t = ZR(br, e.__scopePopover), { forceMount: r = t.forceMount, ...o } = e, i = gn(br, e.__scopePopover);
    return /* @__PURE__ */ x(ao, { present: r || i.open, children: i.modal ? /* @__PURE__ */ x(XR, { ...o, ref: n }) : /* @__PURE__ */ x(QR, { ...o, ref: n }) });
  }
);
oy.displayName = br;
var JR = /* @__PURE__ */ ri("PopoverContent.RemoveScroll"), XR = w.forwardRef(
  (e, n) => {
    const t = gn(br, e.__scopePopover), r = w.useRef(null), o = ve(n, r), i = w.useRef(!1);
    return w.useEffect(() => {
      const s = r.current;
      if (s) return dR(s);
    }, []), /* @__PURE__ */ x(Zm, { as: JR, allowPinchZoom: !0, children: /* @__PURE__ */ x(
      iy,
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
), QR = w.forwardRef(
  (e, n) => {
    const t = gn(br, e.__scopePopover), r = w.useRef(!1), o = w.useRef(!1);
    return /* @__PURE__ */ x(
      iy,
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
), iy = w.forwardRef(
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
    } = e, f = gn(br, t), g = bo(t);
    return FE(), /* @__PURE__ */ x(
      mm,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: i,
        children: /* @__PURE__ */ x(
          pm,
          {
            asChild: !0,
            disableOutsidePointerEvents: s,
            onInteractOutside: u,
            onEscapeKeyDown: a,
            onPointerDownOutside: l,
            onFocusOutside: c,
            onDismiss: () => f.onOpenChange(!1),
            children: /* @__PURE__ */ x(
              iR,
              {
                "data-state": ly(f.open),
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
), sy = "PopoverClose", ay = w.forwardRef(
  (e, n) => {
    const { __scopePopover: t, ...r } = e, o = gn(sy, t);
    return /* @__PURE__ */ x(
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
ay.displayName = sy;
var eA = "PopoverArrow", tA = w.forwardRef(
  (e, n) => {
    const { __scopePopover: t, ...r } = e, o = bo(t);
    return /* @__PURE__ */ x(sR, { ...o, ...r, ref: n });
  }
);
tA.displayName = eA;
function ly(e) {
  return e ? "open" : "closed";
}
var nA = Xm, rA = ey, oA = ny, iA = ry, cy = oy, sA = ay;
const aA = K(
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
), lA = nA, cA = oA, uy = w.forwardRef(({ className: e, size: n, align: t = "center", sideOffset: r = 4, ...o }, i) => /* @__PURE__ */ x(iA, { children: /* @__PURE__ */ x(
  cy,
  {
    ref: i,
    align: t,
    sideOffset: r,
    className: P(aA({ size: n }), e),
    ...o
  }
) }));
uy.displayName = cy.displayName;
const QT = rA, e2 = sA;
function uA(e, n = []) {
  let t = [];
  function r(i, s) {
    const a = w.createContext(s);
    a.displayName = i + "Context";
    const l = t.length;
    t = [...t, s];
    const c = (d) => {
      var b;
      const { scope: f, children: g, ...p } = d, h = ((b = f == null ? void 0 : f[e]) == null ? void 0 : b[l]) || a, m = w.useMemo(() => p, Object.values(p));
      return /* @__PURE__ */ x(h.Provider, { value: m, children: g });
    };
    c.displayName = i + "Provider";
    function u(d, f) {
      var h;
      const g = ((h = f == null ? void 0 : f[e]) == null ? void 0 : h[l]) || a, p = w.useContext(g);
      if (p) return p;
      if (s !== void 0) return s;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return [c, u];
  }
  const o = () => {
    const i = t.map((s) => w.createContext(s));
    return function(a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return w.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: l } }),
        [a, l]
      );
    };
  };
  return o.scopeName = e, [r, dA(o, ...n)];
}
function dA(...e) {
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
      return w.useMemo(() => ({ [`__scope${n.scopeName}`]: s }), [s]);
    };
  };
  return t.scopeName = n.scopeName, t;
}
var fA = Symbol.for("react.lazy"), Fi = w[" use ".trim().toString()];
function gA(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function dy(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === fA && "_payload" in e && gA(e._payload);
}
// @__NO_SIDE_EFFECTS__
function pA(e) {
  const n = /* @__PURE__ */ hA(e), t = w.forwardRef((r, o) => {
    let { children: i, ...s } = r;
    dy(i) && typeof Fi == "function" && (i = Fi(i._payload));
    const a = w.Children.toArray(i), l = a.find(yA);
    if (l) {
      const c = l.props.children, u = a.map((d) => d === l ? w.Children.count(c) > 1 ? w.Children.only(null) : w.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ x(n, { ...s, ref: o, children: w.isValidElement(c) ? w.cloneElement(c, void 0, u) : null });
    }
    return /* @__PURE__ */ x(n, { ...s, ref: o, children: i });
  });
  return t.displayName = `${e}.Slot`, t;
}
// @__NO_SIDE_EFFECTS__
function hA(e) {
  const n = w.forwardRef((t, r) => {
    let { children: o, ...i } = t;
    if (dy(o) && typeof Fi == "function" && (o = Fi(o._payload)), w.isValidElement(o)) {
      const s = vA(o), a = bA(i, o.props);
      return o.type !== w.Fragment && (a.ref = r ? io(r, s) : s), w.cloneElement(o, a);
    }
    return w.Children.count(o) > 1 ? w.Children.only(null) : null;
  });
  return n.displayName = `${e}.SlotClone`, n;
}
var mA = Symbol("radix.slottable");
function yA(e) {
  return w.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === mA;
}
function bA(e, n) {
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
function vA(e) {
  var r, o;
  let n = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
var xA = [
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
], fy = xA.reduce((e, n) => {
  const t = /* @__PURE__ */ pA(`Primitive.${n}`), r = w.forwardRef((o, i) => {
    const { asChild: s, ...a } = o, l = s ? t : n;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ x(l, { ...a, ref: i });
  });
  return r.displayName = `Primitive.${n}`, { ...e, [n]: r };
}, {}), yc = "Progress", bc = 100, [wA] = uA(yc), [_A, SA] = wA(yc), gy = w.forwardRef(
  (e, n) => {
    const {
      __scopeProgress: t,
      value: r = null,
      max: o,
      getValueLabel: i = CA,
      ...s
    } = e;
    (o || o === 0) && !sf(o) && console.error(kA(`${o}`, "Progress"));
    const a = sf(o) ? o : bc;
    r !== null && !af(r, a) && console.error(EA(`${r}`, "Progress"));
    const l = af(r, a) ? r : null, c = Pi(l) ? i(l, a) : void 0;
    return /* @__PURE__ */ x(_A, { scope: t, value: l, max: a, children: /* @__PURE__ */ x(
      fy.div,
      {
        "aria-valuemax": a,
        "aria-valuemin": 0,
        "aria-valuenow": Pi(l) ? l : void 0,
        "aria-valuetext": c,
        role: "progressbar",
        "data-state": my(l, a),
        "data-value": l ?? void 0,
        "data-max": a,
        ...s,
        ref: n
      }
    ) });
  }
);
gy.displayName = yc;
var py = "ProgressIndicator", hy = w.forwardRef(
  (e, n) => {
    const { __scopeProgress: t, ...r } = e, o = SA(py, t);
    return /* @__PURE__ */ x(
      fy.div,
      {
        "data-state": my(o.value, o.max),
        "data-value": o.value ?? void 0,
        "data-max": o.max,
        ...r,
        ref: n
      }
    );
  }
);
hy.displayName = py;
function CA(e, n) {
  return `${Math.round(e / n * 100)}%`;
}
function my(e, n) {
  return e == null ? "indeterminate" : e === n ? "complete" : "loading";
}
function Pi(e) {
  return typeof e == "number";
}
function sf(e) {
  return Pi(e) && !isNaN(e) && e > 0;
}
function af(e, n) {
  return Pi(e) && !isNaN(e) && e <= n && e >= 0;
}
function kA(e, n) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${n}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${bc}\`.`;
}
function EA(e, n) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${n}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${bc} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var yy = gy, NA = hy;
const RA = K("relative h-4 w-full overflow-hidden rounded-full bg-secondary", {
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
}), AA = K("h-full w-full flex-1 bg-primary transition-all", {
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
}), TA = w.forwardRef(
  ({ className: e, value: n = 0, size: t, variant: r, showValue: o, ...i }, s) => /* @__PURE__ */ F("div", { className: "relative", children: [
    /* @__PURE__ */ x(
      yy,
      {
        ref: s,
        value: n,
        className: P(RA({ size: t, variant: r }), e),
        ...i,
        children: /* @__PURE__ */ x(
          NA,
          {
            className: P(AA({ variant: r })),
            style: { transform: `translateX(-${100 - (n || 0)}%)` }
          }
        )
      }
    ),
    o && /* @__PURE__ */ F("div", { className: "text-muted-foreground mt-1 text-right text-xs", children: [
      n,
      "%"
    ] })
  ] })
);
TA.displayName = yy.displayName;
function by(e, [n, t]) {
  return Math.min(t, Math.max(n, e));
}
var vy = ["PageUp", "PageDown"], xy = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], wy = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, Or = "Slider", [tl, FA, PA] = ll(Or), [_y] = Ht(Or, [
  PA
]), [IA, xs] = _y(Or), Sy = w.forwardRef(
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
    } = e, m = w.useRef(/* @__PURE__ */ new Set()), b = w.useRef(0), v = s === "horizontal" ? OA : $A, [_ = [], S] = zn({
      prop: u,
      defaultProp: c,
      onChange: (T) => {
        var D;
        (D = [...m.current][b.current]) == null || D.focus(), d(T);
      }
    }), C = w.useRef(_);
    function k(T) {
      const A = BA(_, T);
      R(T, A);
    }
    function N(T) {
      R(T, b.current);
    }
    function E() {
      const T = C.current[b.current];
      _[b.current] !== T && f(_);
    }
    function R(T, A, { commit: D } = { commit: !1 }) {
      const $ = GA(i), B = HA(Math.round((T - r) / i) * i + r, $), H = by(B, [r, o]);
      S((U = []) => {
        const j = LA(U, H, A);
        if (UA(j, l * i)) {
          b.current = j.indexOf(H);
          const Y = String(j) !== String(U);
          return Y && D && f(j), Y ? j : U;
        } else
          return U;
      });
    }
    return /* @__PURE__ */ x(
      IA,
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
        children: /* @__PURE__ */ x(tl.Provider, { scope: e.__scopeSlider, children: /* @__PURE__ */ x(tl.Slot, { scope: e.__scopeSlider, children: /* @__PURE__ */ x(
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
            onSlideStart: a ? void 0 : k,
            onSlideMove: a ? void 0 : N,
            onSlideEnd: a ? void 0 : E,
            onHomeKeyDown: () => !a && R(r, 0, { commit: !0 }),
            onEndKeyDown: () => !a && R(o, _.length - 1, { commit: !0 }),
            onStepKeyDown: ({ event: T, direction: A }) => {
              if (!a) {
                const B = vy.includes(T.key) || T.shiftKey && xy.includes(T.key) ? 10 : 1, H = b.current, U = _[H], j = i * B * A;
                R(U + j, H, { commit: !0 });
              }
            }
          }
        ) }) })
      }
    );
  }
);
Sy.displayName = Or;
var [Cy, ky] = _y(Or, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), OA = w.forwardRef(
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
    } = e, [d, f] = w.useState(null), g = ve(n, (v) => f(v)), p = w.useRef(void 0), h = Bi(o), m = h === "ltr", b = m && !i || !m && i;
    function y(v) {
      const _ = p.current || d.getBoundingClientRect(), S = [0, _.width], k = vc(S, b ? [t, r] : [r, t]);
      return p.current = _, k(v - _.left);
    }
    return /* @__PURE__ */ x(
      Cy,
      {
        scope: e.__scopeSlider,
        startEdge: b ? "left" : "right",
        endEdge: b ? "right" : "left",
        direction: b ? 1 : -1,
        size: "width",
        children: /* @__PURE__ */ x(
          Ey,
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
              const S = wy[b ? "from-left" : "from-right"].includes(v.key);
              c == null || c({ event: v, direction: S ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), $A = w.forwardRef(
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
    } = e, u = w.useRef(null), d = ve(n, u), f = w.useRef(void 0), g = !o;
    function p(h) {
      const m = f.current || u.current.getBoundingClientRect(), b = [0, m.height], v = vc(b, g ? [r, t] : [t, r]);
      return f.current = m, v(h - m.top);
    }
    return /* @__PURE__ */ x(
      Cy,
      {
        scope: e.__scopeSlider,
        startEdge: g ? "bottom" : "top",
        endEdge: g ? "top" : "bottom",
        size: "height",
        direction: g ? 1 : -1,
        children: /* @__PURE__ */ x(
          Ey,
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
              const b = wy[g ? "from-bottom" : "from-top"].includes(h.key);
              l == null || l({ event: h, direction: b ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), Ey = w.forwardRef(
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
    } = e, u = xs(Or, t);
    return /* @__PURE__ */ x(
      pe.span,
      {
        ...c,
        ref: n,
        onKeyDown: ge(e.onKeyDown, (d) => {
          d.key === "Home" ? (s(d), d.preventDefault()) : d.key === "End" ? (a(d), d.preventDefault()) : vy.concat(xy).includes(d.key) && (l(d), d.preventDefault());
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
), Ny = "SliderTrack", Ry = w.forwardRef(
  (e, n) => {
    const { __scopeSlider: t, ...r } = e, o = xs(Ny, t);
    return /* @__PURE__ */ x(
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
Ry.displayName = Ny;
var nl = "SliderRange", Ay = w.forwardRef(
  (e, n) => {
    const { __scopeSlider: t, ...r } = e, o = xs(nl, t), i = ky(nl, t), s = w.useRef(null), a = ve(n, s), l = o.values.length, c = o.values.map(
      (f) => Py(f, o.min, o.max)
    ), u = l > 1 ? Math.min(...c) : 0, d = 100 - Math.max(...c);
    return /* @__PURE__ */ x(
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
Ay.displayName = nl;
var rl = "SliderThumb", Ty = w.forwardRef(
  (e, n) => {
    const t = FA(e.__scopeSlider), [r, o] = w.useState(null), i = ve(n, (a) => o(a)), s = w.useMemo(
      () => r ? t().findIndex((a) => a.ref.current === r) : -1,
      [t, r]
    );
    return /* @__PURE__ */ x(MA, { ...e, ref: i, index: s });
  }
), MA = w.forwardRef(
  (e, n) => {
    const { __scopeSlider: t, index: r, name: o, ...i } = e, s = xs(rl, t), a = ky(rl, t), [l, c] = w.useState(null), u = ve(n, (y) => c(y)), d = l ? s.form || !!l.closest("form") : !0, f = cl(l), g = s.values[r], p = g === void 0 ? 0 : Py(g, s.min, s.max), h = zA(r, s.values.length), m = f == null ? void 0 : f[a.size], b = m ? VA(m, p, a.direction) : 0;
    return w.useEffect(() => {
      if (l)
        return s.thumbs.add(l), () => {
          s.thumbs.delete(l);
        };
    }, [l, s.thumbs]), /* @__PURE__ */ F(
      "span",
      {
        style: {
          transform: "var(--radix-slider-thumb-transform)",
          position: "absolute",
          [a.startEdge]: `calc(${p}% + ${b}px)`
        },
        children: [
          /* @__PURE__ */ x(tl.ItemSlot, { scope: e.__scopeSlider, children: /* @__PURE__ */ x(
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
          d && /* @__PURE__ */ x(
            Fy,
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
Ty.displayName = rl;
var DA = "RadioBubbleInput", Fy = w.forwardRef(
  ({ __scopeSlider: e, value: n, ...t }, r) => {
    const o = w.useRef(null), i = ve(o, r), s = Zf(n);
    return w.useEffect(() => {
      const a = o.current;
      if (!a) return;
      const l = window.HTMLInputElement.prototype, u = Object.getOwnPropertyDescriptor(l, "value").set;
      if (s !== n && u) {
        const d = new Event("input", { bubbles: !0 });
        u.call(a, n), a.dispatchEvent(d);
      }
    }, [s, n]), /* @__PURE__ */ x(
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
Fy.displayName = DA;
function LA(e = [], n, t) {
  const r = [...e];
  return r[t] = n, r.sort((o, i) => o - i);
}
function Py(e, n, t) {
  const i = 100 / (t - n) * (e - n);
  return by(i, [0, 100]);
}
function zA(e, n) {
  return n > 2 ? `Value ${e + 1} of ${n}` : n === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function BA(e, n) {
  if (e.length === 1) return 0;
  const t = e.map((o) => Math.abs(o - n)), r = Math.min(...t);
  return t.indexOf(r);
}
function VA(e, n, t) {
  const r = e / 2, i = vc([0, 50], [0, r]);
  return (r - i(n) * t) * t;
}
function jA(e) {
  return e.slice(0, -1).map((n, t) => e[t + 1] - n);
}
function UA(e, n) {
  if (n > 0) {
    const t = jA(e);
    return Math.min(...t) >= n;
  }
  return !0;
}
function vc(e, n) {
  return (t) => {
    if (e[0] === e[1] || n[0] === n[1]) return n[0];
    const r = (n[1] - n[0]) / (e[1] - e[0]);
    return n[0] + r * (t - e[0]);
  };
}
function GA(e) {
  return (String(e).split(".")[1] || "").length;
}
function HA(e, n) {
  const t = Math.pow(10, n);
  return Math.round(e * t) / t;
}
var Iy = Sy, WA = Ry, KA = Ay, qA = Ty;
const YA = K("relative flex w-full touch-none select-none items-center", {
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
}), ZA = K("relative w-full grow overflow-hidden rounded-full bg-secondary", {
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
}), JA = K("absolute h-full bg-primary", {
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
}), XA = K(
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
), QA = w.forwardRef(
  ({ className: e, size: n, variant: t, showValue: r, ...o }, i) => {
    const [s, a] = w.useState(o.defaultValue || o.value || [0]);
    w.useEffect(() => {
      o.value && a(o.value);
    }, [o.value]);
    const l = (c) => {
      a(c), o.onValueChange && o.onValueChange(c);
    };
    return /* @__PURE__ */ F("div", { className: "relative w-full", children: [
      r && /* @__PURE__ */ x("div", { className: "text-muted-foreground mb-2 flex justify-between text-xs", children: s.map((c, u) => /* @__PURE__ */ x("span", { children: c }, u)) }),
      /* @__PURE__ */ F(
        Iy,
        {
          ref: i,
          className: P(YA({ size: n }), e),
          onValueChange: l,
          ...o,
          children: [
            /* @__PURE__ */ x(WA, { className: P(ZA({ size: n })), children: /* @__PURE__ */ x(KA, { className: P(JA({ variant: t })) }) }),
            s.map((c, u) => /* @__PURE__ */ x(
              qA,
              {
                className: P(XA({ size: n, variant: t }))
              },
              u
            ))
          ]
        }
      )
    ] });
  }
);
QA.displayName = Iy.displayName;
var eT = Symbol.for("react.lazy"), Ii = w[" use ".trim().toString()];
function tT(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function Oy(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === eT && "_payload" in e && tT(e._payload);
}
// @__NO_SIDE_EFFECTS__
function nT(e) {
  const n = /* @__PURE__ */ rT(e), t = w.forwardRef((r, o) => {
    let { children: i, ...s } = r;
    Oy(i) && typeof Ii == "function" && (i = Ii(i._payload));
    const a = w.Children.toArray(i), l = a.find(iT);
    if (l) {
      const c = l.props.children, u = a.map((d) => d === l ? w.Children.count(c) > 1 ? w.Children.only(null) : w.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ x(n, { ...s, ref: o, children: w.isValidElement(c) ? w.cloneElement(c, void 0, u) : null });
    }
    return /* @__PURE__ */ x(n, { ...s, ref: o, children: i });
  });
  return t.displayName = `${e}.Slot`, t;
}
// @__NO_SIDE_EFFECTS__
function rT(e) {
  const n = w.forwardRef((t, r) => {
    let { children: o, ...i } = t;
    if (Oy(o) && typeof Ii == "function" && (o = Ii(o._payload)), w.isValidElement(o)) {
      const s = aT(o), a = sT(i, o.props);
      return o.type !== w.Fragment && (a.ref = r ? io(r, s) : s), w.cloneElement(o, a);
    }
    return w.Children.count(o) > 1 ? w.Children.only(null) : null;
  });
  return n.displayName = `${e}.SlotClone`, n;
}
var oT = Symbol("radix.slottable");
function iT(e) {
  return w.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === oT;
}
function sT(e, n) {
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
function aT(e) {
  var r, o;
  let n = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
var lT = [
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
], cT = lT.reduce((e, n) => {
  const t = /* @__PURE__ */ nT(`Primitive.${n}`), r = w.forwardRef((o, i) => {
    const { asChild: s, ...a } = o, l = s ? t : n;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ x(l, { ...a, ref: i });
  });
  return r.displayName = `Primitive.${n}`, { ...e, [n]: r };
}, {}), uT = "Separator", lf = "horizontal", dT = ["horizontal", "vertical"], $y = w.forwardRef((e, n) => {
  const { decorative: t, orientation: r = lf, ...o } = e, i = fT(r) ? r : lf, a = t ? { role: "none" } : { "aria-orientation": i === "vertical" ? i : void 0, role: "separator" };
  return /* @__PURE__ */ x(
    cT.div,
    {
      "data-orientation": i,
      ...a,
      ...o,
      ref: n
    }
  );
});
$y.displayName = uT;
function fT(e) {
  return dT.includes(e);
}
var My = $y;
const gT = K("shrink-0 bg-border", {
  variants: {
    orientation: {
      horizontal: "h-[1px] w-full",
      vertical: "h-full w-[1px]"
    },
    variant: {
      default: "bg-border",
      muted: "bg-muted",
      primary: "bg-primary/20",
      dashed: "border-dashed border-t border-border bg-transparent",
      dotted: "border-dotted border-t border-border bg-transparent"
    }
  },
  defaultVariants: {
    orientation: "horizontal",
    variant: "default"
  }
}), pT = w.forwardRef(({ className: e, orientation: n = "horizontal", variant: t, decorative: r = !0, ...o }, i) => /* @__PURE__ */ x(
  My,
  {
    ref: i,
    decorative: r,
    orientation: n,
    className: P(gT({ orientation: n, variant: t }), e),
    ...o
  }
));
pT.displayName = My.displayName;
const hT = K("w-full justify-between", {
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
}), mT = w.forwardRef(
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
    const [f, g] = w.useState(!1), [p, h] = w.useState(""), m = e.find((v) => v.value === n), b = w.useMemo(() => !i || !p ? e : e.filter(
      (v) => v.label.toLowerCase().includes(p.toLowerCase())
    ), [e, p, i]), y = (v) => {
      t == null || t(v === n ? "" : v), g(!1), h("");
    };
    return /* @__PURE__ */ F(lA, { open: f, onOpenChange: g, children: [
      /* @__PURE__ */ x(cA, { asChild: !0, children: /* @__PURE__ */ F(
        le,
        {
          ref: d,
          variant: "outline",
          role: "combobox",
          "aria-expanded": f,
          disabled: a,
          className: P(hT({ variant: c, size: u }), l),
          children: [
            /* @__PURE__ */ x("span", { className: "truncate", children: m ? m.label : r }),
            /* @__PURE__ */ x(sb, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })
          ]
        }
      ) }),
      /* @__PURE__ */ x(uy, { className: "w-[var(--radix-popover-trigger-width)] p-0", align: "start", children: /* @__PURE__ */ F("div", { className: "flex flex-col", children: [
        i && /* @__PURE__ */ x("div", { className: "border-border border-b p-2", children: /* @__PURE__ */ x(
          "input",
          {
            type: "text",
            placeholder: s,
            value: p,
            onChange: (v) => {
              h(v.target.value);
            },
            className: "border-border bg-background focus:ring-ring w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-offset-2"
          }
        ) }),
        /* @__PURE__ */ x("div", { className: "max-h-[300px] overflow-y-auto", children: b.length === 0 ? /* @__PURE__ */ x("div", { className: "text-muted-foreground py-6 text-center text-sm", children: o }) : /* @__PURE__ */ x("div", { className: "p-1", children: b.map((v) => /* @__PURE__ */ F(
          "button",
          {
            onClick: () => {
              v.disabled || y(v.value);
            },
            disabled: v.disabled,
            className: P(
              "relative flex w-full cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm transition-colors outline-none select-none",
              "hover:bg-accent hover:text-accent-foreground",
              "disabled:pointer-events-none disabled:opacity-50",
              n === v.value && "bg-accent text-accent-foreground"
            ),
            children: [
              /* @__PURE__ */ x(
                Jo,
                {
                  className: P(
                    "mr-2 h-4 w-4",
                    n === v.value ? "opacity-100" : "opacity-0"
                  )
                }
              ),
              /* @__PURE__ */ x("span", { className: "truncate", children: v.label })
            ]
          },
          v.value
        )) }) })
      ] }) })
    ] });
  }
);
mT.displayName = "Combobox";
const yT = K("flex items-center justify-center gap-1", {
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
}), Jn = K(
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
), bT = w.forwardRef(
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
    const d = w.useMemo(() => {
      const g = (_, S) => Array.from({ length: S - _ + 1 }, (C, k) => _ + k), h = i * 2 + 3 + 2;
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
    return /* @__PURE__ */ F(
      "nav",
      {
        ref: u,
        role: "navigation",
        "aria-label": "pagination",
        className: P(yT({ size: l }), a),
        ...c,
        children: [
          r && /* @__PURE__ */ x(
            "button",
            {
              onClick: () => {
                f(1);
              },
              disabled: e === 1 || s,
              "aria-label": "Go to first page",
              className: P(Jn({ size: l })),
              children: /* @__PURE__ */ x(ob, { className: "h-4 w-4" })
            }
          ),
          o && /* @__PURE__ */ x(
            "button",
            {
              onClick: () => {
                f(e - 1);
              },
              disabled: e === 1 || s,
              "aria-label": "Go to previous page",
              className: P(Jn({ size: l })),
              children: /* @__PURE__ */ x(nb, { className: "h-4 w-4" })
            }
          ),
          d.map((g, p) => g === "dots" ? /* @__PURE__ */ x(
            "span",
            {
              className: P(Jn({ size: l }), "pointer-events-none"),
              children: /* @__PURE__ */ x(fb, { className: "h-4 w-4" })
            },
            `dots-${p}`
          ) : /* @__PURE__ */ x(
            "button",
            {
              onClick: () => {
                f(g);
              },
              disabled: s,
              "aria-label": `Go to page ${g}`,
              "aria-current": e === g ? "page" : void 0,
              className: P(
                Jn({
                  size: l,
                  variant: e === g ? "active" : "default"
                })
              ),
              children: g
            },
            g
          )),
          o && /* @__PURE__ */ x(
            "button",
            {
              onClick: () => {
                f(e + 1);
              },
              disabled: e === n || s,
              "aria-label": "Go to next page",
              className: P(Jn({ size: l })),
              children: /* @__PURE__ */ x(rb, { className: "h-4 w-4" })
            }
          ),
          r && /* @__PURE__ */ x(
            "button",
            {
              onClick: () => {
                f(n);
              },
              disabled: e === n || s,
              "aria-label": "Go to last page",
              className: P(Jn({ size: l })),
              children: /* @__PURE__ */ x(ib, { className: "h-4 w-4" })
            }
          )
        ]
      }
    );
  }
);
bT.displayName = "Pagination";
var oo;
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
})(oo || (oo = {}));
var cf;
(function(e) {
  e.mergeShapes = (n, t) => ({
    ...n,
    ...t
    // second overwrites first
  });
})(cf || (cf = {}));
oo.arrayToEnum([
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
oo.arrayToEnum([
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
class vr extends Error {
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
    if (!(n instanceof vr))
      throw new Error(`Not a ZodError: ${n}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, oo.jsonStringifyReplacer, 2);
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
vr.create = (e) => new vr(e);
const Dy = w.createContext(void 0), vT = () => {
  const e = w.useContext(Dy);
  if (!e)
    throw new Error("useFormContext must be used within a Form component");
  return e;
};
function t2({
  schema: e,
  initialValues: n,
  onSubmit: t,
  validateOnBlur: r = !0,
  validateOnChange: o = !1,
  children: i,
  className: s,
  ...a
}) {
  const [l, c] = w.useState(n), [u, d] = w.useState({}), [f, g] = w.useState({}), [p, h] = w.useState(!1), m = w.useCallback(
    async (S, C) => {
      var k, N;
      try {
        const E = (k = e.shape) == null ? void 0 : k[S];
        E && await E.parseAsync(C);
        return;
      } catch (E) {
        return E instanceof vr ? (N = E.errors[0]) == null ? void 0 : N.message : "Validation error";
      }
    },
    [e]
  ), b = w.useCallback(
    (S, C) => {
      c((k) => ({ ...k, [S]: C })), o && m(S, C).then((k) => {
        d((N) => ({ ...N, [S]: k }));
      });
    },
    [m, o]
  ), y = w.useCallback(
    (S, C) => {
      g((k) => ({ ...k, [S]: C })), C && r && m(S, l[S]).then((k) => {
        d((N) => ({ ...N, [S]: k }));
      });
    },
    [m, r, l]
  ), v = async (S) => {
    S.preventDefault(), h(!0);
    try {
      const C = await e.parseAsync(l);
      await t(C);
    } catch (C) {
      if (C instanceof vr) {
        const k = {};
        C.errors.forEach((E) => {
          const R = E.path.join(".");
          k[R] = E.message;
        }), d(k);
        const N = {};
        Object.keys(l).forEach((E) => {
          N[E] = !0;
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
  return /* @__PURE__ */ x(Dy.Provider, { value: _, children: /* @__PURE__ */ x("form", { onSubmit: v, className: P("space-y-4", s), ...a, children: typeof i == "function" ? i(_) : i }) });
}
function n2({ name: e, label: n, required: t, description: r, children: o }) {
  const { errors: i, touched: s, setFieldValue: a, setFieldTouched: l } = vT(), c = s[e] ? i[e] : void 0, u = `form-field-${e}`, d = w.cloneElement(o, {
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
  return /* @__PURE__ */ F("div", { className: "space-y-2", children: [
    n && /* @__PURE__ */ x(Rf, { htmlFor: u, ...t && { required: t }, children: n }),
    d,
    r && !c && /* @__PURE__ */ x("p", { id: `${u}-description`, className: "text-muted-foreground text-xs", children: r }),
    c && /* @__PURE__ */ x("p", { id: `${u}-error`, className: "text-destructive text-xs", role: "alert", children: c })
  ] });
}
function r2({
  variant: e = "default",
  className: n,
  children: t,
  ...r
}) {
  return t ? /* @__PURE__ */ x(
    "p",
    {
      className: P(
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
const xT = w.forwardRef(
  ({
    value: e,
    onChange: n,
    onSearch: t,
    placeholder: r = "Search...",
    debounceMs: o = 300,
    loading: i = !1,
    disabled: s = !1,
    className: a,
    ...l
  }, c) => {
    const [u, d] = w.useState(e), f = w.useRef(null), g = w.useRef();
    w.useEffect(() => {
      d(e);
    }, [e]), w.useEffect(() => {
      const b = (y) => {
        var v;
        (y.metaKey || y.ctrlKey) && y.key === "k" && (y.preventDefault(), (v = f.current) == null || v.focus());
      };
      return window.addEventListener("keydown", b), () => {
        window.removeEventListener("keydown", b);
      };
    }, []), w.useImperativeHandle(c, () => f.current);
    const p = (b) => {
      const y = b.target.value;
      d(y), g.current && clearTimeout(g.current), g.current = setTimeout(() => {
        n(y);
      }, o);
    }, h = () => {
      var b;
      d(""), n(""), (b = f.current) == null || b.focus();
    }, m = (b) => {
      var y;
      b.key === "Escape" ? h() : b.key === "Enter" && t && t(u), (y = l.onKeyDown) == null || y.call(l, b);
    };
    return w.useEffect(() => () => {
      g.current && clearTimeout(g.current);
    }, []), /* @__PURE__ */ F("div", { className: P("relative", a), children: [
      /* @__PURE__ */ x("div", { className: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3", children: /* @__PURE__ */ x(xb, { className: "text-muted-foreground h-4 w-4" }) }),
      /* @__PURE__ */ x(
        "input",
        {
          ref: f,
          type: "text",
          value: u,
          onChange: p,
          onKeyDown: m,
          placeholder: r,
          disabled: s || i,
          className: P(
            "border-input bg-background ring-offset-background flex h-10 w-full rounded-md border py-2 pr-10 pl-10 text-sm",
            "placeholder:text-muted-foreground",
            "focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
            "disabled:cursor-not-allowed disabled:opacity-50"
          ),
          "aria-label": "Search",
          ...l
        }
      ),
      /* @__PURE__ */ x("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3", children: i ? /* @__PURE__ */ x(Di, { className: "text-muted-foreground h-4 w-4 animate-spin" }) : u ? /* @__PURE__ */ x(
        "button",
        {
          type: "button",
          onClick: h,
          disabled: s,
          className: P(
            "ring-offset-background rounded-sm opacity-70 transition-opacity",
            "focus:ring-ring hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none",
            "disabled:pointer-events-none"
          ),
          "aria-label": "Clear search",
          children: /* @__PURE__ */ x(ol, { className: "h-4 w-4" })
        }
      ) : null })
    ] });
  }
);
xT.displayName = "SearchBar";
const wT = K("flex flex-col gap-1 py-2", {
  variants: {
    size: {
      default: "text-sm",
      sm: "text-xs",
      lg: "text-base"
    }
  },
  defaultVariants: {
    size: "default"
  }
}), _T = K(
  "flex items-center gap-3 rounded-md px-3 py-2 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
        active: "bg-indigo-600 text-white hover:bg-indigo-700 border-l-4 border-indigo-500 pl-[10px]"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), ST = K("px-3 py-2 text-xs font-semibold text-muted-foreground", {
  variants: {
    spacing: {
      default: "mt-4 mb-1",
      none: ""
    }
  },
  defaultVariants: {
    spacing: "default"
  }
}), CT = w.forwardRef(
  ({ items: e, onItemClick: n, size: t, collapsed: r = !1, className: o, ...i }, s) => {
    const l = e.length > 0 && e[0] && "items" in e[0] ? e : [{ items: e }], c = (d, f) => {
      if (f.disabled) {
        d.preventDefault();
        return;
      }
      f.onClick && (d.preventDefault(), f.onClick()), n == null || n(f);
    }, u = (d, f) => {
      f.disabled || (d.key === "Enter" || d.key === " ") && (d.preventDefault(), f.onClick && f.onClick(), n == null || n(f));
    };
    return /* @__PURE__ */ x(
      "nav",
      {
        ref: s,
        className: P(wT({ size: t, className: o })),
        "aria-label": "Main navigation",
        ...i,
        children: l.map((d, f) => /* @__PURE__ */ F("div", { children: [
          d.title && !r && /* @__PURE__ */ x(
            "div",
            {
              className: P(
                ST({ spacing: f === 0 ? "none" : "default" })
              ),
              children: d.title
            }
          ),
          d.items.map((g, p) => {
            const h = g.icon, m = g.active ? "active" : "default", b = /* @__PURE__ */ F(
              "a",
              {
                href: g.href,
                onClick: (y) => {
                  c(y, g);
                },
                onKeyDown: (y) => {
                  u(y, g);
                },
                className: P(
                  _T({ variant: m }),
                  r && "justify-center px-0"
                ),
                "aria-current": g.active ? "page" : void 0,
                "aria-disabled": g.disabled,
                "aria-label": r ? g.label : void 0,
                tabIndex: g.disabled ? -1 : 0,
                children: [
                  /* @__PURE__ */ x(h, { className: "h-5 w-5 flex-shrink-0", "aria-hidden": "true" }),
                  !r && /* @__PURE__ */ F(Ge, { children: [
                    /* @__PURE__ */ x("span", { className: "flex-1", children: g.label }),
                    g.badge !== void 0 && /* @__PURE__ */ x(sl, { variant: "secondary", className: "ml-auto", children: g.badge })
                  ] })
                ]
              },
              `${f}-${p}`
            );
            return r ? /* @__PURE__ */ x(I_, { content: g.label, children: b }, `${f}-${p}`) : b;
          })
        ] }, f))
      }
    );
  }
);
CT.displayName = "MainNav";
const kT = K(
  "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors hover:bg-slate-800 dark:hover:bg-slate-700",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        active: "bg-slate-800 dark:bg-slate-700"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), ET = w.forwardRef(
  ({
    name: e,
    email: n,
    avatarSrc: t,
    avatarStatus: r,
    avatarSize: o = "sm",
    onProfileClick: i,
    onSettingsClick: s,
    onSignOutClick: a,
    className: l,
    variant: c,
    disabled: u = !1,
    open: d,
    onOpenChange: f,
    collapsed: g = !1
  }, p) => /* @__PURE__ */ F(fx, { ...d !== void 0 && { open: d }, ...f && { onOpenChange: f }, children: [
    /* @__PURE__ */ x(gx, { asChild: !0, children: /* @__PURE__ */ F(
      "button",
      {
        ref: p,
        type: "button",
        disabled: u,
        className: P(
          kT({ variant: c }),
          u && "cursor-not-allowed opacity-50",
          g && "justify-center px-2",
          l
        ),
        "aria-label": "User menu",
        children: [
          /* @__PURE__ */ x(
            bg,
            {
              ...t && { src: t },
              name: e,
              alt: e,
              ...r && { status: r },
              size: o
            }
          ),
          !g && /* @__PURE__ */ F(Ge, { children: [
            /* @__PURE__ */ F("div", { className: "flex flex-1 flex-col overflow-hidden", children: [
              /* @__PURE__ */ x("span", { className: "truncate text-sm font-medium text-white", children: e }),
              /* @__PURE__ */ x("span", { className: "truncate text-xs text-slate-400", children: n })
            ] }),
            /* @__PURE__ */ x(
              Wv,
              {
                className: "h-4 w-4 text-slate-400 transition-transform duration-200",
                "aria-hidden": "true"
              }
            )
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ F(px, { align: "start", side: "top", className: "w-56", children: [
      /* @__PURE__ */ x(hx, { children: /* @__PURE__ */ F("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ x("span", { className: "text-sm font-semibold text-slate-900 dark:text-slate-100", children: e }),
        /* @__PURE__ */ x("span", { className: "text-xs text-slate-600 dark:text-slate-400", children: n })
      ] }) }),
      /* @__PURE__ */ x(Fc, {}),
      /* @__PURE__ */ x(
        Ss,
        {
          icon: /* @__PURE__ */ x(Xv, { className: "h-4 w-4" }),
          ...i && { onSelect: i },
          children: "Profile"
        }
      ),
      /* @__PURE__ */ x(
        Ss,
        {
          icon: /* @__PURE__ */ x(Kv, { className: "h-4 w-4" }),
          ...s && { onSelect: s },
          children: "Settings"
        }
      ),
      /* @__PURE__ */ x(Fc, {}),
      /* @__PURE__ */ x(
        Ss,
        {
          icon: /* @__PURE__ */ x(Zv, { className: "h-4 w-4" }),
          ...a && { onSelect: a },
          variant: "destructive",
          children: "Sign out"
        }
      )
    ] })
  ] })
);
ET.displayName = "UserMenu";
const NT = K(
  "flex h-full flex-col bg-slate-900 border-r border-slate-800 transition-all duration-300 ease-in-out",
  {
    variants: {
      position: {
        fixed: "fixed top-0 left-0 z-40",
        static: "relative"
      },
      state: {
        open: "translate-x-0",
        closed: "-translate-x-full"
      },
      collapsed: {
        true: "w-[60px]",
        false: ""
      }
    },
    defaultVariants: {
      position: "fixed",
      state: "closed",
      collapsed: !1
    }
  }
), RT = K(
  "fixed inset-0 z-30 bg-black/50 transition-opacity duration-300",
  {
    variants: {
      visible: {
        true: "opacity-100",
        false: "opacity-0 pointer-events-none"
      }
    },
    defaultVariants: {
      visible: !1
    }
  }
), Ly = w.forwardRef(
  ({
    logo: e,
    children: n,
    footer: t,
    open: r = !1,
    onOpenChange: o,
    collapsed: i,
    onCollapsedChange: s,
    width: a = "240px",
    className: l,
    position: c = "fixed",
    showOverlay: u = !0,
    showCloseButton: d = !0,
    showCollapseButton: f = !0,
    ...g
  }, p) => {
    const [h, m] = w.useState(!1), [b, y] = w.useState(!1), v = i ?? b, _ = (A) => {
      i === void 0 && y(A), s == null || s(A);
    };
    w.useEffect(() => {
      const A = () => {
        m(window.innerWidth < 768);
      };
      return A(), window.addEventListener("resize", A), () => {
        window.removeEventListener("resize", A);
      };
    }, []), w.useEffect(() => {
      if (!r || !h) return;
      const A = (D) => {
        D.key === "Escape" && (o == null || o(!1));
      };
      return document.addEventListener("keydown", A), () => {
        document.removeEventListener("keydown", A);
      };
    }, [r, h, o]), w.useEffect(() => (h && r ? document.body.style.overflow = "hidden" : document.body.style.overflow = "", () => {
      document.body.style.overflow = "";
    }), [h, r]);
    const S = () => {
      o == null || o(!1);
    }, C = () => {
      o == null || o(!1);
    }, k = () => {
      _(!v);
    }, N = h ? r ? "open" : "closed" : "open", E = h && u && r, R = !h && v, T = R ? "60px" : a;
    return /* @__PURE__ */ F(Ge, { children: [
      E && /* @__PURE__ */ x(
        "div",
        {
          className: P(RT({ visible: !0 })),
          onClick: S,
          "aria-hidden": "true"
        }
      ),
      /* @__PURE__ */ F(
        "aside",
        {
          ref: p,
          className: P(
            NT({
              position: h ? c : "static",
              state: N,
              collapsed: R
            }),
            l
          ),
          style: { width: T },
          "aria-label": "Sidebar navigation",
          "data-testid": "sidebar",
          "data-collapsed": R,
          ...g,
          children: [
            h && d && r && /* @__PURE__ */ x(
              "button",
              {
                type: "button",
                onClick: C,
                className: "absolute top-4 right-4 z-50 rounded-md p-2 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white",
                "aria-label": "Close sidebar",
                children: /* @__PURE__ */ x($f, { className: "h-5 w-5" })
              }
            ),
            !h && f && /* @__PURE__ */ x(
              "button",
              {
                type: "button",
                onClick: k,
                className: "absolute top-4 right-4 z-50 rounded-md p-2 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white",
                "aria-label": v ? "Expand sidebar" : "Collapse sidebar",
                "data-testid": "collapse-toggle",
                children: /* @__PURE__ */ x(Gv, { className: "h-5 w-5" })
              }
            ),
            e && !R && /* @__PURE__ */ x("div", { className: "flex h-16 items-center justify-center border-b border-slate-800 px-4", children: e }),
            /* @__PURE__ */ x("div", { className: "flex-1 overflow-x-hidden overflow-y-auto px-3 py-4", children: w.isValidElement(n) ? w.cloneElement(n, { collapsed: R }) : n }),
            t && /* @__PURE__ */ x("div", { className: "border-t border-slate-800 p-3", children: w.isValidElement(t) ? w.cloneElement(t, { collapsed: R }) : t })
          ]
        }
      )
    ] });
  }
);
Ly.displayName = "Sidebar";
const AT = w.forwardRef(
  ({
    sidebar: e,
    sidebarLogo: n,
    sidebarFooter: t,
    sidebarOpen: r,
    onSidebarOpenChange: o,
    sidebarCollapsed: i,
    onSidebarCollapsedChange: s,
    header: a,
    children: l,
    className: c
  }, u) => /* @__PURE__ */ F(
    "div",
    {
      ref: u,
      className: "flex h-screen w-full overflow-hidden bg-slate-950",
      "data-testid": "app-shell",
      children: [
        /* @__PURE__ */ x(
          Ly,
          {
            ...n !== void 0 && { logo: n },
            ...t !== void 0 && { footer: t },
            ...r !== void 0 && { open: r },
            ...o !== void 0 && { onOpenChange: o },
            ...i !== void 0 && { collapsed: i },
            ...s !== void 0 && {
              onCollapsedChange: s
            },
            children: e
          }
        ),
        /* @__PURE__ */ F("div", { className: "flex flex-1 flex-col overflow-hidden", children: [
          a && /* @__PURE__ */ x(
            "header",
            {
              className: "flex-shrink-0 border-b border-slate-800 bg-slate-900",
              "data-testid": "app-shell-header",
              children: a
            }
          ),
          /* @__PURE__ */ x(
            "main",
            {
              className: P("flex-1 overflow-x-hidden overflow-y-auto bg-slate-950", c),
              "data-testid": "app-shell-main",
              children: l
            }
          )
        ] })
      ]
    }
  )
);
AT.displayName = "AppShell";
export {
  XT as Accordion,
  _E as AccordionContent,
  xE as AccordionItem,
  wE as AccordionTrigger,
  Sx as Alert,
  kx as AlertDescription,
  Cx as AlertTitle,
  AT as AppShell,
  bg as Avatar,
  sl as Badge,
  Mf as Breadcrumb,
  le as Button,
  Af as Card,
  Cv as CardContent,
  Sv as CardDescription,
  kv as CardFooter,
  wv as CardHeader,
  _v as CardTitle,
  g0 as Checkbox,
  p0 as CheckboxGroup,
  Fw as CodeBlock,
  mT as Combobox,
  O_ as ConfirmDialog,
  WT as ConnectionStatus,
  BT as DataTable,
  a0 as Dialog,
  u0 as DialogClose,
  zf as DialogContent,
  Uf as DialogDescription,
  Vf as DialogFooter,
  Bf as DialogHeader,
  Lf as DialogOverlay,
  c0 as DialogPortal,
  jf as DialogTitle,
  l0 as DialogTrigger,
  fx as Dropdown,
  px as DropdownContent,
  Ss as DropdownItem,
  hx as DropdownLabel,
  Fc as DropdownSeparator,
  DT as DropdownSubmenu,
  zT as DropdownSubmenuContent,
  LT as DropdownSubmenuTrigger,
  gx as DropdownTrigger,
  UT as EmptyState,
  GT as ErrorState,
  t2 as Form,
  n2 as FormField,
  r2 as FormMessage,
  Xk as HybridEditor,
  Cf as Input,
  Rf as Label,
  Rv as Loading,
  nv as LoadingButton,
  CT as MainNav,
  HT as MetricCard,
  OT as ModalFooter,
  o0 as PageHeader,
  bT as Pagination,
  lA as Popover,
  QT as PopoverAnchor,
  e2 as PopoverClose,
  uy as PopoverContent,
  cA as PopoverTrigger,
  TA as Progress,
  sx as RadioGroup,
  ax as RadioGroupItem,
  xT as SearchBar,
  av as Select,
  pT as Separator,
  Ly as Sidebar,
  Tv as Skeleton,
  QA as Slider,
  Tf as Spinner,
  xx as StatusIndicator,
  y0 as Switch,
  b0 as SwitchGroup,
  Iv as Tabs,
  Mv as TabsContent,
  Ov as TabsList,
  $v as TabsTrigger,
  x0 as Textarea,
  gg as ToastContainer,
  fg as ToastItem,
  MT as ToastProvider,
  I_ as Tooltip,
  ET as UserMenu,
  $T as ViewModeToggle,
  vE as accordionContentVariants,
  yE as accordionItemVariants,
  bE as accordionTriggerVariants,
  Ev as badgeVariants,
  e0 as breadcrumbItemVariants,
  t0 as breadcrumbSeparatorVariants,
  Qv as breadcrumbVariants,
  tv as buttonVariants,
  xv as cardVariants,
  d0 as checkboxVariants,
  P as cn,
  hT as comboboxVariants,
  jT as createSelectionColumn,
  VT as createSortableHeader,
  s0 as dialogContentVariants,
  i0 as dialogOverlayVariants,
  dx as dropdownContentVariants,
  pg as dropdownItemVariants,
  rv as inputVariants,
  vv as labelVariants,
  _T as mainNavItemVariants,
  ST as mainNavSectionVariants,
  wT as mainNavVariants,
  n0 as pageHeaderVariants,
  Jn as paginationItemVariants,
  yT as paginationVariants,
  aA as popoverContentVariants,
  AA as progressIndicatorVariants,
  RA as progressVariants,
  iv as selectVariants,
  gT as separatorVariants,
  RT as sidebarOverlayVariants,
  NT as sidebarVariants,
  Av as skeletonVariants,
  JA as sliderRangeVariants,
  XA as sliderThumbVariants,
  ZA as sliderTrackVariants,
  YA as sliderVariants,
  Nv as spinnerVariants,
  Pc as statusIndicatorVariants,
  m0 as switchThumbVariants,
  h0 as switchVariants,
  Fv as tabsListVariants,
  Pv as tabsTriggerVariants,
  v0 as textareaVariants,
  KT as useConfirmDialog,
  vT as useFormContext,
  ux as useToast,
  kT as userMenuVariants
};
//# sourceMappingURL=index.es.js.map
