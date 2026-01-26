import { jsx as u, jsxs as S, Fragment as de } from "react/jsx-runtime";
import * as h from "react";
import ae, { forwardRef as Ze, createElement as pe, useCallback as Ne, useMemo as Nt } from "react";
import { createPortal as Et } from "react-dom";
function We(e) {
  var t, r, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var n = e.length;
    for (t = 0; t < n; t++) e[t] && (r = We(e[t])) && (a && (a += " "), a += r);
  } else for (r in e) e[r] && (a && (a += " "), a += r);
  return a;
}
function me() {
  for (var e, t, r = 0, a = "", n = arguments.length; r < n; r++) (e = arguments[r]) && (t = We(e)) && (a && (a += " "), a += t);
  return a;
}
const Ie = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Re = me, O = (e, t) => (r) => {
  var a;
  if ((t == null ? void 0 : t.variants) == null) return Re(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: n, defaultVariants: s } = t, o = Object.keys(n).map((p) => {
    const f = r == null ? void 0 : r[p], b = s == null ? void 0 : s[p];
    if (f === null) return null;
    const w = Ie(f) || Ie(b);
    return n[p][w];
  }), c = r && Object.entries(r).reduce((p, f) => {
    let [b, w] = f;
    return w === void 0 || (p[b] = w), p;
  }, {}), d = t == null || (a = t.compoundVariants) === null || a === void 0 ? void 0 : a.reduce((p, f) => {
    let { class: b, className: w, ...k } = f;
    return Object.entries(k).every((i) => {
      let [l, g] = i;
      return Array.isArray(g) ? g.includes({
        ...s,
        ...c
      }[l]) : {
        ...s,
        ...c
      }[l] === g;
    }) ? [
      ...p,
      b,
      w
    ] : p;
  }, []);
  return Re(e, o, d, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const St = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), qe = (...e) => e.filter((t, r, a) => !!t && t.trim() !== "" && a.indexOf(t) === r).join(" ").trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var At = {
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
const Ct = Ze(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: a,
    className: n = "",
    children: s,
    iconNode: o,
    ...c
  }, d) => pe(
    "svg",
    {
      ref: d,
      ...At,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: a ? Number(r) * 24 / Number(t) : r,
      className: qe("lucide", n),
      ...c
    },
    [
      ...o.map(([p, f]) => pe(p, f)),
      ...Array.isArray(s) ? s : [s]
    ]
  )
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Y = (e, t) => {
  const r = Ze(
    ({ className: a, ...n }, s) => pe(Ct, {
      ref: s,
      iconNode: t,
      className: qe(`lucide-${St(e)}`, a),
      ...n
    })
  );
  return r.displayName = `${e}`, r;
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ee = Y("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ae = Y("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ke = Y("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _t = Y("ChevronsUpDown", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tt = Y("CircleAlert", [
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
const Ft = Y("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Le = Y("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const It = Y("House", [
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
const Oe = Y("Info", [
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
const Ye = Y("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rt = Y("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lt = Y("TriangleAlert", [
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
const Xe = Y("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), Ce = "-", Ot = (e) => {
  const t = zt(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: a
  } = e;
  return {
    getClassGroupId: (o) => {
      const c = o.split(Ce);
      return c[0] === "" && c.length !== 1 && c.shift(), Qe(c, t) || Dt(o);
    },
    getConflictingClassGroupIds: (o, c) => {
      const d = r[o] || [];
      return c && a[o] ? [...d, ...a[o]] : d;
    }
  };
}, Qe = (e, t) => {
  var o;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], a = t.nextPart.get(r), n = a ? Qe(e.slice(1), a) : void 0;
  if (n)
    return n;
  if (t.validators.length === 0)
    return;
  const s = e.join(Ce);
  return (o = t.validators.find(({
    validator: c
  }) => c(s))) == null ? void 0 : o.classGroupId;
}, De = /^\[(.+)\]$/, Dt = (e) => {
  if (De.test(e)) {
    const t = De.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, zt = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, a = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Bt(Object.entries(e.classGroups), r).forEach(([s, o]) => {
    Se(o, a, s, t);
  }), a;
}, Se = (e, t, r, a) => {
  e.forEach((n) => {
    if (typeof n == "string") {
      const s = n === "" ? t : ze(t, n);
      s.classGroupId = r;
      return;
    }
    if (typeof n == "function") {
      if ($t(n)) {
        Se(n(a), t, r, a);
        return;
      }
      t.validators.push({
        validator: n,
        classGroupId: r
      });
      return;
    }
    Object.entries(n).forEach(([s, o]) => {
      Se(o, ze(t, s), r, a);
    });
  });
}, ze = (e, t) => {
  let r = e;
  return t.split(Ce).forEach((a) => {
    r.nextPart.has(a) || r.nextPart.set(a, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(a);
  }), r;
}, $t = (e) => e.isThemeGetter, Bt = (e, t) => t ? e.map(([r, a]) => {
  const n = a.map((s) => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([o, c]) => [t + o, c])) : s);
  return [r, n];
}) : e, jt = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  const n = (s, o) => {
    r.set(s, o), t++, t > e && (t = 0, a = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let o = r.get(s);
      if (o !== void 0)
        return o;
      if ((o = a.get(s)) !== void 0)
        return n(s, o), o;
    },
    set(s, o) {
      r.has(s) ? r.set(s, o) : n(s, o);
    }
  };
}, Je = "!", Pt = (e) => {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, a = t.length === 1, n = t[0], s = t.length, o = (c) => {
    const d = [];
    let p = 0, f = 0, b;
    for (let g = 0; g < c.length; g++) {
      let m = c[g];
      if (p === 0) {
        if (m === n && (a || c.slice(g, g + s) === t)) {
          d.push(c.slice(f, g)), f = g + s;
          continue;
        }
        if (m === "/") {
          b = g;
          continue;
        }
      }
      m === "[" ? p++ : m === "]" && p--;
    }
    const w = d.length === 0 ? c : c.substring(f), k = w.startsWith(Je), i = k ? w.substring(1) : w, l = b && b > f ? b - f : void 0;
    return {
      modifiers: d,
      hasImportantModifier: k,
      baseClassName: i,
      maybePostfixModifierPosition: l
    };
  };
  return r ? (c) => r({
    className: c,
    parseClassName: o
  }) : o;
}, Mt = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((a) => {
    a[0] === "[" ? (t.push(...r.sort(), a), r = []) : r.push(a);
  }), t.push(...r.sort()), t;
}, Vt = (e) => ({
  cache: jt(e.cacheSize),
  parseClassName: Pt(e),
  ...Ot(e)
}), Gt = /\s+/, Ut = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: a,
    getConflictingClassGroupIds: n
  } = t, s = [], o = e.trim().split(Gt);
  let c = "";
  for (let d = o.length - 1; d >= 0; d -= 1) {
    const p = o[d], {
      modifiers: f,
      hasImportantModifier: b,
      baseClassName: w,
      maybePostfixModifierPosition: k
    } = r(p);
    let i = !!k, l = a(i ? w.substring(0, k) : w);
    if (!l) {
      if (!i) {
        c = p + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (l = a(w), !l) {
        c = p + (c.length > 0 ? " " + c : c);
        continue;
      }
      i = !1;
    }
    const g = Mt(f).join(":"), m = b ? g + Je : g, y = m + l;
    if (s.includes(y))
      continue;
    s.push(y);
    const x = n(l, i);
    for (let E = 0; E < x.length; ++E) {
      const _ = x[E];
      s.push(m + _);
    }
    c = p + (c.length > 0 ? " " + c : c);
  }
  return c;
};
function Ht() {
  let e = 0, t, r, a = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = et(t)) && (a && (a += " "), a += r);
  return a;
}
const et = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let a = 0; a < e.length; a++)
    e[a] && (t = et(e[a])) && (r && (r += " "), r += t);
  return r;
};
function Zt(e, ...t) {
  let r, a, n, s = o;
  function o(d) {
    const p = t.reduce((f, b) => b(f), e());
    return r = Vt(p), a = r.cache.get, n = r.cache.set, s = c, c(d);
  }
  function c(d) {
    const p = a(d);
    if (p)
      return p;
    const f = Ut(d, r);
    return n(d, f), f;
  }
  return function() {
    return s(Ht.apply(null, arguments));
  };
}
const P = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, tt = /^\[(?:([a-z-]+):)?(.+)\]$/i, Wt = /^\d+\/\d+$/, qt = /* @__PURE__ */ new Set(["px", "full", "screen"]), Kt = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Yt = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Xt = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Qt = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Jt = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, J = (e) => oe(e) || qt.has(e) || Wt.test(e), ee = (e) => se(e, "length", lr), oe = (e) => !!e && !Number.isNaN(Number(e)), ke = (e) => se(e, "number", oe), ie = (e) => !!e && Number.isInteger(Number(e)), er = (e) => e.endsWith("%") && oe(e.slice(0, -1)), I = (e) => tt.test(e), te = (e) => Kt.test(e), tr = /* @__PURE__ */ new Set(["length", "size", "percentage"]), rr = (e) => se(e, tr, rt), ar = (e) => se(e, "position", rt), nr = /* @__PURE__ */ new Set(["image", "url"]), or = (e) => se(e, nr, cr), sr = (e) => se(e, "", ir), ce = () => !0, se = (e, t, r) => {
  const a = tt.exec(e);
  return a ? a[1] ? typeof t == "string" ? a[1] === t : t.has(a[1]) : r(a[2]) : !1;
}, lr = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Yt.test(e) && !Xt.test(e)
), rt = () => !1, ir = (e) => Qt.test(e), cr = (e) => Jt.test(e), dr = () => {
  const e = P("colors"), t = P("spacing"), r = P("blur"), a = P("brightness"), n = P("borderColor"), s = P("borderRadius"), o = P("borderSpacing"), c = P("borderWidth"), d = P("contrast"), p = P("grayscale"), f = P("hueRotate"), b = P("invert"), w = P("gap"), k = P("gradientColorStops"), i = P("gradientColorStopPositions"), l = P("inset"), g = P("margin"), m = P("opacity"), y = P("padding"), x = P("saturate"), E = P("scale"), _ = P("sepia"), L = P("skew"), T = P("space"), R = P("translate"), F = () => ["auto", "contain", "none"], z = () => ["auto", "hidden", "clip", "visible", "scroll"], B = () => ["auto", I, t], A = () => [I, t], q = () => ["", J, ee], $ = () => ["auto", oe, I], G = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], U = () => ["solid", "dashed", "dotted", "double", "none"], D = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], M = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], Z = () => ["", "0", I], H = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], C = () => [oe, I];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ce],
      spacing: [J, ee],
      blur: ["none", "", te, I],
      brightness: C(),
      borderColor: [e],
      borderRadius: ["none", "", "full", te, I],
      borderSpacing: A(),
      borderWidth: q(),
      contrast: C(),
      grayscale: Z(),
      hueRotate: C(),
      invert: Z(),
      gap: A(),
      gradientColorStops: [e],
      gradientColorStopPositions: [er, ee],
      inset: B(),
      margin: B(),
      opacity: C(),
      padding: A(),
      saturate: C(),
      scale: C(),
      sepia: Z(),
      skew: C(),
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
        aspect: ["auto", "square", "video", I]
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
        columns: [te]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": H()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": H()
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
        object: [...G(), I]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: z()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": z()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": z()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: F()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": F()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": F()
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
        inset: [l]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [l]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [l]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [l]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [l]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [l]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [l]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [l]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [l]
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
        z: ["auto", ie, I]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: B()
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
        flex: ["1", "auto", "initial", "none", I]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: Z()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: Z()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", ie, I]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ce]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", ie, I]
        }, I]
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
        "grid-rows": [ce]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [ie, I]
        }, I]
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
        "auto-cols": ["auto", "min", "max", "fr", I]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", I]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [w]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [w]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [w]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...M()]
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
        content: ["normal", ...M(), "baseline"]
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
        "place-content": [...M(), "baseline"]
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
        m: [g]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [g]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [g]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [g]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [g]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [g]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [g]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [g]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [g]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [T]
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
        "space-y": [T]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", I, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [I, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [I, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [te]
        }, te]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [I, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [I, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [I, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [I, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", te, ee]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ke]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ce]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", I]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", oe, ke]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", J, I]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", I]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", I]
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
        "placeholder-opacity": [m]
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
        "text-opacity": [m]
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
        decoration: [...U(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", J, ee]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", J, I]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", I]
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
        content: ["none", I]
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
        "bg-opacity": [m]
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
        bg: [...G(), ar]
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
        bg: ["auto", "cover", "contain", rr]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, or]
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
        from: [i]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [i]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [i]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [k]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [k]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [k]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [s]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [s]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [s]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [s]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [s]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [s]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [s]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [s]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [s]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [s]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [s]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [s]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [s]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [s]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [s]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [c]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [c]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [c]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [c]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [c]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [c]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [c]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [c]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [c]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [m]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...U(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [c]
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
        "divide-y": [c]
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
        "divide-opacity": [m]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: U()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [n]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [n]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [n]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [n]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [n]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [n]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [n]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [n]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [n]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [n]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...U()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [J, I]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [J, ee]
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
        ring: q()
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
        "ring-opacity": [m]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [J, ee]
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
        shadow: ["", "inner", "none", te, sr]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ce]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [m]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...D(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": D()
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
        blur: [r]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [a]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [d]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", te, I]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [p]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [f]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [b]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [x]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [_]
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
        "backdrop-blur": [r]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [a]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [d]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [p]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [f]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [b]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [m]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [x]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [_]
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
        "border-spacing": [o]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [o]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [o]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", I]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: C()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", I]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: C()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", I]
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
        scale: [E]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [E]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [E]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [ie, I]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [R]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [R]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [L]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [L]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", I]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", I]
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
        "will-change": ["auto", "scroll", "contents", "transform", I]
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
        stroke: [J, ee, ke]
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
}, ur = /* @__PURE__ */ Zt(dr);
function N(...e) {
  return ur(me(e));
}
const pr = O(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-primary/60 bg-background text-primary hover:bg-primary/10 hover:border-primary dark:border-primary/50 dark:text-primary dark:hover:bg-primary/20",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 dark:bg-secondary dark:text-secondary-foreground",
        ghost: "text-foreground hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), ne = h.forwardRef(
  ({ className: e, variant: t, size: r, isLoading: a, loadingText: n, children: s, disabled: o, ...c }, d) => /* @__PURE__ */ u(
    "button",
    {
      className: N(pr({ variant: t, size: r, className: e })),
      ref: d,
      disabled: o ?? a,
      "aria-busy": a,
      ...c,
      children: a ? /* @__PURE__ */ S(de, { children: [
        /* @__PURE__ */ u(Ye, { className: "mr-2 h-4 w-4 animate-spin", "aria-hidden": "true" }),
        /* @__PURE__ */ u("span", { children: n ?? s })
      ] }) : s
    }
  )
);
ne.displayName = "Button";
const gr = h.forwardRef(
  ({ loading: e = !1, loadingText: t, children: r, ...a }, n) => {
    const s = {
      ...a,
      isLoading: e,
      ...t && { loadingText: t }
    };
    return /* @__PURE__ */ u(ne, { ref: n, ...s, children: r });
  }
);
gr.displayName = "LoadingButton";
function Yn({
  onCancel: e,
  onConfirm: t,
  cancelText: r = "Cancel",
  confirmText: a = "Confirm",
  confirmDisabled: n = !1,
  confirmLoading: s = !1,
  confirmLoadingText: o,
  confirmVariant: c = "default",
  cancelVariant: d = "outline",
  className: p,
  buttonContainerClassName: f,
  children: b,
  confirmType: w = "button",
  hideCancelButton: k = !1
}) {
  return /* @__PURE__ */ S(
    "div",
    {
      className: N(
        "flex items-center justify-between gap-3 border-t border-slate-200 bg-slate-50 px-6 py-4 dark:border-slate-800 dark:bg-slate-900/50",
        p
      ),
      children: [
        b && /* @__PURE__ */ u("div", { className: "flex-1", children: b }),
        /* @__PURE__ */ S(
          "div",
          {
            className: N("flex items-center gap-3", !b && "ml-auto", f),
            children: [
              !k && /* @__PURE__ */ u(ne, { type: "button", onClick: e, variant: d, children: r }),
              /* @__PURE__ */ u(
                ne,
                {
                  type: w,
                  onClick: t,
                  variant: c,
                  disabled: n || s,
                  isLoading: s,
                  ...o && { loadingText: o },
                  children: a
                }
              )
            ]
          }
        )
      ]
    }
  );
}
function Xn({
  value: e,
  onChange: t,
  options: r,
  className: a,
  size: n = "icon"
}) {
  return /* @__PURE__ */ u(
    "div",
    {
      className: N(
        "flex items-center gap-1 rounded-lg bg-slate-200 p-1 dark:bg-slate-700",
        a
      ),
      role: "group",
      "aria-label": "View mode toggle",
      children: r.map((s) => /* @__PURE__ */ u(
        ne,
        {
          variant: e === s.value ? "default" : "ghost",
          size: n,
          onClick: () => {
            t(s.value);
          },
          title: s.label,
          "aria-label": s.label,
          "aria-pressed": e === s.value,
          children: s.icon
        },
        s.value
      ))
    }
  );
}
const fr = O(
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
), br = O(
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
), mr = h.forwardRef(
  ({ className: e, variant: t, inputSize: r, label: a, error: n, helperText: s, id: o, type: c = "text", ...d }, p) => {
    const f = h.useId(), b = o ?? f, w = `${b}-error`, k = `${b}-helper`, i = !!n, l = i ? "error" : t;
    return /* @__PURE__ */ S("div", { className: "flex flex-col gap-1.5", children: [
      a && /* @__PURE__ */ u("label", { htmlFor: b, className: N(br({ variant: l })), children: a }),
      /* @__PURE__ */ u(
        "input",
        {
          type: c,
          id: b,
          className: N(fr({ variant: l, inputSize: r, className: e })),
          ref: p,
          "aria-invalid": i,
          "aria-describedby": i ? w : s ? k : void 0,
          ...d
        }
      ),
      i && /* @__PURE__ */ u("p", { id: w, className: "text-destructive text-sm", role: "alert", children: n }),
      !i && s && /* @__PURE__ */ u("p", { id: k, className: "text-muted-foreground text-sm", children: s })
    ] });
  }
);
mr.displayName = "Input";
const yr = O(
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
), hr = O(
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
), vr = h.forwardRef(
  ({
    className: e,
    variant: t,
    selectSize: r,
    options: a,
    label: n,
    placeholder: s,
    error: o,
    helperText: c,
    id: d,
    ...p
  }, f) => {
    const b = h.useId(), w = d ?? b, k = `${w}-error`, i = `${w}-helper`, l = !!o, g = l ? "error" : t;
    return /* @__PURE__ */ S("div", { className: "flex flex-col gap-1.5", children: [
      n && /* @__PURE__ */ u("label", { htmlFor: w, className: N(hr({ variant: g })), children: n }),
      /* @__PURE__ */ S("div", { className: "relative", children: [
        /* @__PURE__ */ S(
          "select",
          {
            id: w,
            className: N(
              yr({ variant: g, selectSize: r, className: e }),
              "cursor-pointer appearance-none pr-10"
            ),
            ref: f,
            "aria-invalid": l,
            "aria-describedby": l ? k : c ? i : void 0,
            defaultValue: "",
            ...p,
            children: [
              s && /* @__PURE__ */ u("option", { value: "", disabled: !0, children: s }),
              a.map((m) => /* @__PURE__ */ u("option", { value: m.value, disabled: m.disabled, children: m.label }, m.value))
            ]
          }
        ),
        /* @__PURE__ */ u(
          Ae,
          {
            className: "text-muted-foreground pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2",
            "aria-hidden": "true"
          }
        )
      ] }),
      l && /* @__PURE__ */ u("p", { id: k, className: "text-destructive text-sm", role: "alert", children: o }),
      !l && c && /* @__PURE__ */ u("p", { id: i, className: "text-muted-foreground text-sm", children: c })
    ] });
  }
);
vr.displayName = "Select";
const xr = O("rounded-lg border bg-card text-card-foreground", {
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
}), wr = h.forwardRef(
  ({ className: e, variant: t, ...r }, a) => /* @__PURE__ */ u("div", { ref: a, className: N(xr({ variant: t, className: e })), ...r })
);
wr.displayName = "Card";
const kr = h.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ u("div", { ref: r, className: N("flex flex-col space-y-1.5 p-6", e), ...t })
);
kr.displayName = "CardHeader";
const Nr = h.forwardRef(
  ({ className: e, as: t = "h3", ...r }, a) => /* @__PURE__ */ u(
    t,
    {
      ref: a,
      className: N("text-2xl leading-none font-semibold tracking-tight", e),
      ...r
    }
  )
);
Nr.displayName = "CardTitle";
const Er = h.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ u("p", { ref: r, className: N("text-muted-foreground text-sm", e), ...t })
);
Er.displayName = "CardDescription";
const Sr = h.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ u("div", { ref: r, className: N("p-6 pt-0", e), ...t })
);
Sr.displayName = "CardContent";
const Ar = h.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ u("div", { ref: r, className: N("flex items-center p-6 pt-0", e), ...t })
);
Ar.displayName = "CardFooter";
const Cr = O(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        destructive: "border-transparent bg-destructive text-destructive-foreground",
        success: "border-transparent bg-green-500 text-white dark:bg-green-600",
        warning: "border-transparent bg-yellow-500 text-white dark:bg-yellow-600",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), _r = h.forwardRef(
  ({ className: e, variant: t, ...r }, a) => /* @__PURE__ */ u("div", { ref: a, className: N(Cr({ variant: t }), e), ...r })
);
_r.displayName = "Badge";
const Tr = O("animate-spin text-muted-foreground", {
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
}), at = h.forwardRef(
  ({ className: e, size: t, label: r = "Loading...", ...a }, n) => /* @__PURE__ */ u(
    Ye,
    {
      ref: n,
      className: N(Tr({ size: t, className: e })),
      "aria-label": r,
      role: "status",
      ...a
    }
  )
);
at.displayName = "Spinner";
const Fr = h.forwardRef(
  ({ className: e, size: t = "default", message: r, fullScreen: a = !1, ...n }, s) => /* @__PURE__ */ u(
    "div",
    {
      ref: s,
      className: N(a ? "fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm" : "flex items-center justify-center p-4", e),
      role: "status",
      "aria-busy": "true",
      ...n,
      children: /* @__PURE__ */ S("div", { className: "flex flex-col items-center gap-2", children: [
        /* @__PURE__ */ u(at, { size: t, label: r ?? "Loading..." }),
        r && /* @__PURE__ */ u("p", { className: "text-muted-foreground text-sm", children: r })
      ] })
    }
  )
);
Fr.displayName = "Loading";
const Ir = O("animate-pulse rounded-md bg-muted", {
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
}), Rr = h.forwardRef(
  ({ className: e, variant: t, ...r }, a) => /* @__PURE__ */ u(
    "div",
    {
      ref: a,
      className: N(Ir({ variant: t, className: e })),
      "aria-hidden": "true",
      ...r
    }
  )
);
Rr.displayName = "Skeleton";
const Lr = O(
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
), Or = O(
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
), nt = h.createContext(null);
function _e() {
  const e = h.useContext(nt);
  if (!e)
    throw new Error("Tabs components must be used within a Tabs provider");
  return e;
}
const Dr = h.forwardRef(
  ({ className: e, defaultValue: t, value: r, onValueChange: a, variant: n = "default", children: s, ...o }, c) => {
    const [d, p] = h.useState(t), f = r ?? d, b = h.useCallback(
      (w) => {
        r === void 0 && p(w), a == null || a(w);
      },
      [r, a]
    );
    return /* @__PURE__ */ u(nt.Provider, { value: { activeTab: f, setActiveTab: b, variant: n ?? "default" }, children: /* @__PURE__ */ u("div", { ref: c, className: N("w-full", e), ...o, children: s }) });
  }
);
Dr.displayName = "Tabs";
const zr = h.forwardRef(({ className: e, ...t }, r) => {
  const { variant: a } = _e();
  return /* @__PURE__ */ u(
    "div",
    {
      ref: r,
      role: "tablist",
      className: N(Lr({ variant: a, className: e })),
      ...t
    }
  );
});
zr.displayName = "TabsList";
const $r = h.forwardRef(
  ({ className: e, value: t, children: r, disabled: a, ...n }, s) => {
    const { activeTab: o, setActiveTab: c, variant: d } = _e(), p = o === t, f = `tabpanel-${t}`, b = `tab-${t}`;
    return /* @__PURE__ */ u(
      "button",
      {
        ref: s,
        type: "button",
        role: "tab",
        id: b,
        "aria-selected": p,
        "aria-controls": f,
        "data-state": p ? "active" : "inactive",
        disabled: a,
        className: N(Or({ variant: d, className: e })),
        onClick: () => {
          c(t);
        },
        tabIndex: p ? 0 : -1,
        ...n,
        children: r
      }
    );
  }
);
$r.displayName = "TabsTrigger";
const Br = h.forwardRef(
  ({ className: e, value: t, forceMount: r = !1, children: a, ...n }, s) => {
    const { activeTab: o } = _e(), c = o === t, d = `tabpanel-${t}`, p = `tab-${t}`;
    return !c && !r ? null : /* @__PURE__ */ u(
      "div",
      {
        ref: s,
        role: "tabpanel",
        id: d,
        "aria-labelledby": p,
        hidden: !c,
        tabIndex: 0,
        className: N(
          "ring-offset-background focus-visible:ring-ring mt-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
          !c && "hidden",
          e
        ),
        ...n,
        children: a
      }
    );
  }
);
Br.displayName = "TabsContent";
var ot = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, $e = ae.createContext && /* @__PURE__ */ ae.createContext(ot), jr = ["attr", "size", "title"];
function Pr(e, t) {
  if (e == null) return {};
  var r = Mr(e, t), a, n;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (n = 0; n < s.length; n++)
      a = s[n], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]);
  }
  return r;
}
function Mr(e, t) {
  if (e == null) return {};
  var r = {};
  for (var a in e)
    if (Object.prototype.hasOwnProperty.call(e, a)) {
      if (t.indexOf(a) >= 0) continue;
      r[a] = e[a];
    }
  return r;
}
function ge() {
  return ge = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ge.apply(this, arguments);
}
function Be(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function fe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Be(Object(r), !0).forEach(function(a) {
      Vr(e, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Be(Object(r)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return e;
}
function Vr(e, t, r) {
  return t = Gr(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Gr(e) {
  var t = Ur(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Ur(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function st(e) {
  return e && e.map((t, r) => /* @__PURE__ */ ae.createElement(t.tag, fe({
    key: r
  }, t.attr), st(t.child)));
}
function le(e) {
  return (t) => /* @__PURE__ */ ae.createElement(Hr, ge({
    attr: fe({}, e.attr)
  }, t), st(e.child));
}
function Hr(e) {
  var t = (r) => {
    var {
      attr: a,
      size: n,
      title: s
    } = e, o = Pr(e, jr), c = n || r.size || "1em", d;
    return r.className && (d = r.className), e.className && (d = (d ? d + " " : "") + e.className), /* @__PURE__ */ ae.createElement("svg", ge({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, a, o, {
      className: d,
      style: fe(fe({
        color: e.color || r.color
      }, r.style), e.style),
      height: c,
      width: c,
      xmlns: "http://www.w3.org/2000/svg"
    }), s && /* @__PURE__ */ ae.createElement("title", null, s), e.children);
  };
  return $e !== void 0 ? /* @__PURE__ */ ae.createElement($e.Consumer, null, (r) => t(r)) : t(ot);
}
function Zr(e) {
  return le({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" }, child: [] }] })(e);
}
function lt(e) {
  return le({ attr: { viewBox: "0 0 320 512" }, child: [{ tag: "path", attr: { d: "M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" }, child: [] }] })(e);
}
function Wr(e) {
  return le({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" }, child: [] }] })(e);
}
function qr(e) {
  return le({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" }, child: [] }] })(e);
}
function Kr(e) {
  return le({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z" }, child: [] }] })(e);
}
function Yr(e) {
  return le({ attr: { viewBox: "0 0 352 512" }, child: [{ tag: "path", attr: { d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" }, child: [] }] })(e);
}
const Xr = O(
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
), Qr = O("inline-flex items-center gap-1.5 transition-colors", {
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
      true: "font-medium text-foreground pointer-events-none",
      false: ""
    }
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    current: !1
  }
}), je = O("hover:underline transition-colors", {
  variants: {
    variant: {
      default: "hover:text-foreground",
      ghost: "hover:text-foreground/80"
    }
  },
  defaultVariants: {
    variant: "default"
  }
}), Jr = O("flex items-center text-muted-foreground/50", {
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
}), it = h.forwardRef(
  ({
    items: e,
    separator: t = /* @__PURE__ */ u(lt, {}),
    maxItems: r,
    size: a,
    variant: n = "default",
    LinkComponent: s,
    className: o,
    ...c
  }, d) => {
    const p = h.useMemo(() => {
      if (!r || e.length <= r)
        return e;
      if (r === 1)
        return [e[e.length - 1]];
      if (r === 2)
        return [e[0], e[e.length - 1]];
      const f = e[0], b = r - 2, w = e.slice(-b);
      return [
        f,
        { label: "..." },
        // Ellipsis placeholder
        ...w
      ];
    }, [e, r]);
    return /* @__PURE__ */ u(
      "nav",
      {
        ref: d,
        "aria-label": "breadcrumb",
        className: N(Xr({ size: a }), o),
        ...c,
        children: /* @__PURE__ */ u("ol", { className: "flex list-none flex-wrap items-center gap-1.5", children: p.map((f, b) => {
          if (!f) return null;
          const w = b === p.length - 1, k = w && !f.href, i = f.label === "...";
          return /* @__PURE__ */ S(h.Fragment, { children: [
            /* @__PURE__ */ u(
              "li",
              {
                className: N(
                  Qr({
                    variant: n,
                    size: a,
                    current: k
                  })
                ),
                children: i ? /* @__PURE__ */ u("span", { className: "px-1", children: f.label }) : f.href && !k ? s ? /* @__PURE__ */ S(
                  s,
                  {
                    to: f.href,
                    className: N(
                      je({ variant: n }),
                      "inline-flex items-center gap-1.5"
                    ),
                    children: [
                      f.icon && /* @__PURE__ */ u("span", { className: "inline-flex items-center", "aria-hidden": "true", children: f.icon }),
                      /* @__PURE__ */ u("span", { children: f.label })
                    ]
                  }
                ) : /* @__PURE__ */ S(
                  "a",
                  {
                    href: f.href,
                    onClick: f.onClick,
                    className: N(
                      je({ variant: n }),
                      "inline-flex items-center gap-1.5"
                    ),
                    children: [
                      f.icon && /* @__PURE__ */ u("span", { className: "inline-flex items-center", "aria-hidden": "true", children: f.icon }),
                      /* @__PURE__ */ u("span", { children: f.label })
                    ]
                  }
                ) : /* @__PURE__ */ S(
                  "span",
                  {
                    className: "inline-flex items-center gap-1.5",
                    "aria-current": k ? "page" : void 0,
                    children: [
                      f.icon && /* @__PURE__ */ u("span", { className: "inline-flex items-center", "aria-hidden": "true", children: f.icon }),
                      /* @__PURE__ */ u("span", { children: f.label })
                    ]
                  }
                )
              }
            ),
            !w && /* @__PURE__ */ u("li", { className: N(Jr({ size: a })), "aria-hidden": "true", children: t })
          ] }, `${f.label}-${String(b)}`);
        }) })
      }
    );
  }
);
it.displayName = "Breadcrumb";
const ea = O("w-full", {
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
}), ta = {
  default: "text-foreground",
  success: "text-green-600 dark:text-green-400",
  warning: "text-yellow-600 dark:text-yellow-400",
  destructive: "text-red-600 dark:text-red-400"
}, ra = h.forwardRef(
  ({
    className: e,
    variant: t,
    sticky: r,
    title: a,
    description: n,
    icon: s,
    breadcrumbs: o,
    actions: c,
    stats: d,
    showHomeInBreadcrumbs: p = !0,
    breadcrumbSeparator: f,
    ...b
  }, w) => {
    const k = h.useMemo(() => {
      if (!o) return [];
      const i = o.map((l) => {
        const g = l.icon, m = {
          label: l.label,
          icon: g ? /* @__PURE__ */ u(g, { className: "h-4 w-4" }) : void 0
        };
        return l.href && (m.href = l.href), m;
      });
      return p ? [
        {
          label: "Home",
          href: "/",
          icon: /* @__PURE__ */ u(It, { className: "h-4 w-4", "aria-label": "Home" })
        },
        ...i
      ] : i;
    }, [o, p]);
    return /* @__PURE__ */ u(
      "header",
      {
        ref: w,
        className: N(ea({ variant: t, sticky: r, className: e })),
        ...b,
        children: /* @__PURE__ */ S("div", { className: "px-4 py-4 sm:px-6 sm:py-6", children: [
          o && o.length > 0 && /* @__PURE__ */ u("div", { className: "mb-3", children: /* @__PURE__ */ u(
            it,
            {
              items: k,
              separator: f,
              className: "text-muted-foreground"
            }
          ) }),
          /* @__PURE__ */ S("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", children: [
            /* @__PURE__ */ S("div", { className: "flex items-center gap-3", children: [
              s && /* @__PURE__ */ u("div", { className: "bg-primary/10 text-primary flex-shrink-0 rounded-lg p-2", children: /* @__PURE__ */ u(s, { className: "h-6 w-6", "aria-hidden": "true" }) }),
              /* @__PURE__ */ S("div", { children: [
                /* @__PURE__ */ u("h1", { className: "text-foreground text-2xl font-semibold", children: a }),
                n && /* @__PURE__ */ u("p", { className: "text-muted-foreground mt-1 text-sm", children: n })
              ] })
            ] }),
            c && /* @__PURE__ */ u("div", { className: "flex flex-shrink-0 items-center gap-2", children: c })
          ] }),
          d && d.length > 0 && /* @__PURE__ */ u("div", { className: "border-border mt-4 border-t pt-4", children: /* @__PURE__ */ u("dl", { className: "grid grid-cols-2 gap-4 sm:grid-cols-4", children: d.map((i, l) => {
            const g = i.icon;
            return /* @__PURE__ */ S("div", { className: "flex items-center gap-2", children: [
              g && /* @__PURE__ */ u("div", { className: "bg-muted flex-shrink-0 rounded-md p-1.5", children: /* @__PURE__ */ u(g, { className: "text-muted-foreground h-4 w-4", "aria-hidden": "true" }) }),
              /* @__PURE__ */ S("div", { children: [
                /* @__PURE__ */ u("dt", { className: "text-muted-foreground text-xs", children: i.label }),
                /* @__PURE__ */ u(
                  "dd",
                  {
                    className: N(
                      "text-lg font-semibold",
                      ta[i.color ?? "default"]
                    ),
                    children: i.value
                  }
                )
              ] })
            ] }, l);
          }) }) })
        ] })
      }
    );
  }
);
ra.displayName = "PageHeader";
const aa = O(
  "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
  {
    variants: {},
    defaultVariants: {}
  }
), na = O(
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
), ct = h.createContext(void 0);
function ye() {
  const e = h.useContext(ct);
  if (!e)
    throw new Error("Dialog components must be used within a Dialog");
  return e;
}
function Qn({
  open: e,
  defaultOpen: t = !1,
  onOpenChange: r,
  children: a
}) {
  const [n, s] = h.useState(t), o = e !== void 0, c = o ? e : n, d = h.useCallback(
    (p) => {
      o || s(p), r == null || r(p);
    },
    [o, r]
  );
  return /* @__PURE__ */ u(ct.Provider, { value: { open: c, onOpenChange: d }, children: a });
}
const oa = h.forwardRef(
  ({ asChild: e = !1, onClick: t, children: r, ...a }, n) => {
    const { onOpenChange: s } = ye(), o = (c) => {
      t == null || t(c), s(!0);
    };
    return e && h.isValidElement(r) ? h.cloneElement(
      r,
      {
        onClick: (c) => {
          var d, p;
          (p = (d = r.props).onClick) == null || p.call(
            d,
            c
          ), s(!0);
        }
      }
    ) : /* @__PURE__ */ u("button", { ref: n, type: "button", onClick: o, ...a, children: r });
  }
);
oa.displayName = "DialogTrigger";
function sa({ children: e, container: t }) {
  const [r, a] = h.useState(!1);
  if (h.useEffect(() => (a(!0), () => {
    a(!1);
  }), []), !r) return null;
  const n = t ?? document.body;
  return /* @__PURE__ */ u(de, { children: h.Children.map(
    e,
    (s) => n ? Et(s, n) : s
  ) });
}
const dt = h.forwardRef(
  ({ className: e, ...t }, r) => {
    const { open: a } = ye();
    return /* @__PURE__ */ u(
      "div",
      {
        ref: r,
        "data-state": a ? "open" : "closed",
        className: N(aa(), e),
        ...t
      }
    );
  }
);
dt.displayName = "DialogOverlay";
const la = h.forwardRef(
  ({
    className: e,
    children: t,
    size: r,
    closeOnOverlayClick: a = !0,
    closeOnEscape: n = !0,
    showCloseButton: s = !0,
    onClose: o,
    container: c,
    ...d
  }, p) => {
    const { open: f, onOpenChange: b } = ye(), w = h.useRef(null), k = h.useRef(null);
    h.useImperativeHandle(p, () => {
      if (!w.current)
        throw new Error("Content ref is not attached");
      return w.current;
    });
    const i = h.useCallback(() => {
      b(!1), o == null || o();
    }, [b, o]);
    return h.useEffect(() => {
      if (!f || !n) return;
      const l = (g) => {
        g.key === "Escape" && (g.preventDefault(), i());
      };
      return document.addEventListener("keydown", l), () => {
        document.removeEventListener("keydown", l);
      };
    }, [f, n, i]), h.useEffect(() => {
      var y;
      if (!f) return;
      k.current = document.activeElement;
      const l = (y = w.current) == null ? void 0 : y.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ), g = l == null ? void 0 : l[0];
      g == null || g.focus();
      const m = document.body.style.overflow;
      return document.body.style.overflow = "hidden", () => {
        var x;
        document.body.style.overflow = m, (x = k.current) == null || x.focus();
      };
    }, [f]), h.useEffect(() => {
      if (!f) return;
      const l = (g) => {
        var E;
        if (g.key !== "Tab") return;
        const m = (E = w.current) == null ? void 0 : E.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!(m != null && m.length)) return;
        const y = m[0], x = m[m.length - 1];
        g.shiftKey ? document.activeElement === y && (g.preventDefault(), x.focus()) : document.activeElement === x && (g.preventDefault(), y.focus());
      };
      return document.addEventListener("keydown", l), () => {
        document.removeEventListener("keydown", l);
      };
    }, [f]), f ? /* @__PURE__ */ S(sa, { container: c, children: [
      /* @__PURE__ */ u(dt, { onClick: a ? i : void 0 }),
      /* @__PURE__ */ S(
        "div",
        {
          ref: w,
          role: "dialog",
          "aria-modal": "true",
          "data-state": f ? "open" : "closed",
          className: N(na({ size: r }), e),
          onClick: (l) => {
            l.stopPropagation();
          },
          ...d,
          children: [
            t,
            s && /* @__PURE__ */ u(
              "button",
              {
                type: "button",
                onClick: i,
                className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none",
                "aria-label": "Close",
                children: /* @__PURE__ */ u(Xe, { className: "h-4 w-4" })
              }
            )
          ]
        }
      )
    ] }) : null;
  }
);
la.displayName = "DialogContent";
const ia = h.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ u(
    "div",
    {
      ref: r,
      className: N("flex flex-col space-y-1.5 text-center sm:text-left", e),
      ...t
    }
  )
);
ia.displayName = "DialogHeader";
const ca = h.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ u(
    "div",
    {
      ref: r,
      className: N("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e),
      ...t
    }
  )
);
ca.displayName = "DialogFooter";
const da = h.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ u(
    "h2",
    {
      ref: r,
      className: N("text-foreground text-lg leading-none font-semibold tracking-tight", e),
      ...t
    }
  )
);
da.displayName = "DialogTitle";
const ua = h.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ u("p", { ref: r, className: N("text-muted-foreground text-sm", e), ...t })
);
ua.displayName = "DialogDescription";
const pa = h.forwardRef(
  ({ asChild: e = !1, onClick: t, children: r, ...a }, n) => {
    const { onOpenChange: s } = ye(), o = (c) => {
      t == null || t(c), s(!1);
    };
    return e && h.isValidElement(r) ? h.cloneElement(
      r,
      {
        onClick: (c) => {
          var d, p;
          (p = (d = r.props).onClick) == null || p.call(
            d,
            c
          ), s(!1);
        }
      }
    ) : /* @__PURE__ */ u("button", { ref: n, type: "button", onClick: o, ...a, children: r });
  }
);
pa.displayName = "DialogClose";
const ga = O(
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
), fa = {
  sm: "h-3 w-3",
  default: "h-3.5 w-3.5",
  lg: "h-4 w-4"
}, ba = h.forwardRef(
  ({
    className: e,
    variant: t,
    size: r,
    checked: a,
    defaultChecked: n,
    onCheckedChange: s,
    indeterminate: o = !1,
    label: c,
    description: d,
    error: p,
    required: f,
    disabled: b,
    id: w,
    ...k
  }, i) => {
    const l = h.useRef(null), [g, m] = h.useState(n ?? !1), y = h.useId();
    h.useImperativeHandle(i, () => {
      if (!l.current)
        throw new Error("Input ref is not attached");
      return l.current;
    });
    const x = a !== void 0, E = x ? a : g;
    h.useEffect(() => {
      l.current && (l.current.indeterminate = o);
    }, [o]);
    const _ = () => o ? "indeterminate" : E ? "checked" : "unchecked", L = (F) => {
      const z = F.target.checked;
      x || m(z), s == null || s(z);
    }, T = w ?? y, R = fa[r ?? "default"];
    return /* @__PURE__ */ S("div", { className: "flex items-start gap-2", children: [
      /* @__PURE__ */ S("div", { className: "relative flex items-center justify-center", children: [
        /* @__PURE__ */ u(
          "input",
          {
            ref: l,
            type: "checkbox",
            id: T,
            checked: E,
            onChange: L,
            disabled: b,
            required: f,
            className: "sr-only",
            "aria-invalid": p ? "true" : void 0,
            "aria-describedby": d || p ? `${T}-description` : void 0,
            ...k
          }
        ),
        /* @__PURE__ */ u(
          "div",
          {
            "data-state": _(),
            className: N(
              ga({ variant: t, size: r }),
              "flex cursor-pointer items-center justify-center",
              b && "cursor-not-allowed",
              p && "border-destructive",
              e
            ),
            onClick: () => {
              !b && l.current && l.current.click();
            },
            role: "presentation",
            children: o ? /* @__PURE__ */ u(Rt, { className: R, "aria-hidden": "true" }) : E ? /* @__PURE__ */ u(Ee, { className: R, "aria-hidden": "true" }) : null
          }
        )
      ] }),
      (c || d || p) && /* @__PURE__ */ S("div", { className: "flex flex-col", children: [
        c && /* @__PURE__ */ S(
          "label",
          {
            htmlFor: T,
            className: N(
              "cursor-pointer text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
              b && "cursor-not-allowed opacity-70"
            ),
            children: [
              c,
              f && /* @__PURE__ */ u("span", { className: "text-destructive ml-1", children: "*" })
            ]
          }
        ),
        (d || p) && /* @__PURE__ */ u(
          "p",
          {
            id: `${T}-description`,
            className: N(
              "text-sm",
              p ? "text-destructive" : "text-muted-foreground",
              c && "mt-1"
            ),
            children: p || d
          }
        )
      ] })
    ] });
  }
);
ba.displayName = "Checkbox";
const ma = h.forwardRef(
  ({
    label: e,
    description: t,
    error: r,
    required: a,
    children: n,
    className: s,
    orientation: o = "vertical",
    ...c
  }, d) => /* @__PURE__ */ S(
    "fieldset",
    {
      ref: d,
      className: N("space-y-2", s),
      "aria-describedby": t || r ? "checkbox-group-description" : void 0,
      ...c,
      children: [
        e && /* @__PURE__ */ S("legend", { className: "text-sm leading-none font-medium", children: [
          e,
          a && /* @__PURE__ */ u("span", { className: "text-destructive ml-1", children: "*" })
        ] }),
        t && !r && /* @__PURE__ */ u("p", { id: "checkbox-group-description", className: "text-muted-foreground text-sm", children: t }),
        /* @__PURE__ */ u(
          "div",
          {
            className: N(
              "flex gap-4",
              o === "vertical" ? "flex-col" : "flex-row flex-wrap"
            ),
            children: n
          }
        ),
        r && /* @__PURE__ */ u("p", { id: "checkbox-group-description", className: "text-destructive text-sm", children: r })
      ]
    }
  )
);
ma.displayName = "CheckboxGroup";
const ya = O(
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
), ha = O(
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
), va = h.forwardRef(
  ({
    className: e,
    variant: t,
    size: r,
    checked: a,
    defaultChecked: n = !1,
    onCheckedChange: s,
    label: o,
    description: c,
    labelPosition: d = "right",
    disabled: p,
    required: f,
    name: b,
    value: w,
    id: k,
    ...i
  }, l) => {
    const [g, m] = h.useState(n), y = h.useId(), x = a !== void 0, E = x ? a : g, _ = () => {
      if (p) return;
      const A = !E;
      x || m(A), s == null || s(A);
    }, L = (A) => {
      (A.key === " " || A.key === "Enter") && (A.preventDefault(), _());
    }, T = k ?? y, R = E ? "checked" : "unchecked", F = /* @__PURE__ */ u(
      "button",
      {
        ref: l,
        type: "button",
        role: "switch",
        id: T,
        "aria-checked": E,
        "aria-required": f,
        "aria-describedby": c ? `${T}-description` : void 0,
        "data-state": R,
        disabled: p,
        onClick: _,
        onKeyDown: L,
        className: N(ya({ variant: t, size: r }), e),
        ...i,
        children: /* @__PURE__ */ u("span", { "data-state": R, className: N(ha({ size: r })) })
      }
    ), z = b ? /* @__PURE__ */ u(
      "input",
      {
        type: "checkbox",
        name: b,
        value: w ?? "on",
        checked: E,
        onChange: () => {
        },
        "aria-hidden": "true",
        tabIndex: -1,
        className: "sr-only"
      }
    ) : null;
    if (!o && !c)
      return /* @__PURE__ */ S(de, { children: [
        z,
        F
      ] });
    const B = /* @__PURE__ */ S("div", { className: "flex flex-col", children: [
      o && /* @__PURE__ */ S(
        "label",
        {
          htmlFor: T,
          className: N(
            "cursor-pointer text-sm leading-none font-medium",
            p && "cursor-not-allowed opacity-70"
          ),
          children: [
            o,
            f && /* @__PURE__ */ u("span", { className: "text-destructive ml-1", children: "*" })
          ]
        }
      ),
      c && /* @__PURE__ */ u(
        "p",
        {
          id: `${T}-description`,
          className: N("text-muted-foreground text-sm", o && "mt-1"),
          children: c
        }
      )
    ] });
    return /* @__PURE__ */ S("div", { className: "flex items-center gap-3", children: [
      z,
      d === "left" && B,
      F,
      d === "right" && B
    ] });
  }
);
va.displayName = "Switch";
const xa = h.forwardRef(
  ({ label: e, description: t, children: r, className: a, ...n }, s) => /* @__PURE__ */ S("div", { ref: s, role: "group", className: N("space-y-4", a), ...n, children: [
    (e || t) && /* @__PURE__ */ S("div", { className: "space-y-1", children: [
      e && /* @__PURE__ */ u("h3", { className: "text-sm leading-none font-medium", children: e }),
      t && /* @__PURE__ */ u("p", { className: "text-muted-foreground text-sm", children: t })
    ] }),
    /* @__PURE__ */ u("div", { className: "space-y-4", children: r })
  ] })
);
xa.displayName = "SwitchGroup";
const wa = O(
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
), ka = h.forwardRef(
  ({
    className: e,
    variant: t,
    textareaSize: r,
    resize: a,
    label: n,
    description: s,
    error: o,
    showCharacterCount: c,
    maxLength: d,
    autoResize: p = !1,
    minRows: f = 2,
    maxRows: b,
    wrapperClassName: w,
    labelClassName: k,
    value: i,
    defaultValue: l,
    onChange: g,
    disabled: m,
    rows: y = 4,
    ...x
  }, E) => {
    const [_, L] = h.useState(
      i !== void 0 ? i : l || ""
    ), T = h.useRef(null), R = i !== void 0, F = R ? i : _, z = String(F || "").length, B = h.useCallback(() => {
      if (!p || !T.current) return;
      const D = T.current;
      D.style.height = "auto";
      const M = parseInt(window.getComputedStyle(D).lineHeight), Z = parseInt(window.getComputedStyle(D).paddingTop), H = parseInt(window.getComputedStyle(D).paddingBottom), C = M * f + Z + H, j = b ? M * b + Z + H : 1 / 0, V = Math.min(Math.max(D.scrollHeight, C), j);
      D.style.height = `${String(V)}px`;
    }, [p, f, b]);
    h.useEffect(() => {
      p && B();
    }, [F, p, B]);
    const A = h.useCallback(
      (D) => {
        T.current = D, typeof E == "function" ? E(D) : E && (E.current = D);
      },
      [E]
    ), q = (D) => {
      R || L(D.target.value), g == null || g(D), p && B();
    }, $ = !!o, G = $ ? "destructive" : t, U = d !== void 0 && z > d;
    return /* @__PURE__ */ S("div", { className: N("w-full", w), children: [
      n && /* @__PURE__ */ S(
        "label",
        {
          htmlFor: x.id,
          className: N(
            "text-foreground mb-2 block text-sm font-medium",
            m && "cursor-not-allowed opacity-50",
            k
          ),
          children: [
            n,
            x.required && /* @__PURE__ */ u("span", { className: "text-destructive ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ u("div", { className: "relative", children: /* @__PURE__ */ u(
        "textarea",
        {
          ref: A,
          className: N(
            wa({
              variant: G,
              textareaSize: r,
              resize: p ? "none" : a
            }),
            $ && "border-destructive focus-visible:ring-destructive",
            e
          ),
          value: F,
          onChange: q,
          disabled: m,
          maxLength: d,
          rows: p ? f : y,
          "aria-invalid": $ ? "true" : void 0,
          "aria-describedby": o || s || c ? `${x.id ?? ""}-description ${x.id ?? ""}-error ${x.id ?? ""}-count` : void 0,
          ...x
        }
      ) }),
      /* @__PURE__ */ S("div", { className: "mt-1.5 flex items-center justify-between gap-2", children: [
        /* @__PURE__ */ S("div", { className: "flex-1", children: [
          s && !o && /* @__PURE__ */ u(
            "p",
            {
              id: `${x.id ?? ""}-description`,
              className: N("text-muted-foreground text-sm", m && "opacity-50"),
              children: s
            }
          ),
          o && /* @__PURE__ */ u(
            "p",
            {
              id: `${x.id ?? ""}-error`,
              className: "text-destructive text-sm font-medium",
              role: "alert",
              children: o
            }
          )
        ] }),
        c && /* @__PURE__ */ S(
          "p",
          {
            id: `${x.id ?? ""}-count`,
            className: N(
              "text-sm tabular-nums",
              U ? "text-destructive font-medium" : "text-muted-foreground",
              m && "opacity-50"
            ),
            "aria-live": "polite",
            children: [
              z,
              d !== void 0 && ` / ${String(d)}`
            ]
          }
        )
      ] })
    ] });
  }
);
ka.displayName = "Textarea";
const ut = h.createContext(void 0), Na = O(
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
), pt = h.forwardRef(
  ({ toast: e, onClose: t, variant: r, className: a, ...n }, s) => {
    const o = h.useMemo(() => {
      switch (r || e.variant) {
        case "success":
          return Zr;
        case "error":
          return Kr;
        case "warning":
          return Wr;
        case "info":
          return qr;
        default:
          return null;
      }
    }, [r, e.variant]);
    return /* @__PURE__ */ S(
      "div",
      {
        ref: s,
        role: "alert",
        "aria-live": "polite",
        "aria-atomic": "true",
        className: N(Na({ variant: r || e.variant }), a),
        ...n,
        children: [
          o && /* @__PURE__ */ u("div", { className: "mt-0.5 flex-shrink-0", children: /* @__PURE__ */ u(o, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ S("div", { className: "grid flex-1 gap-1", children: [
            e.title && /* @__PURE__ */ u("div", { className: "text-sm leading-none font-semibold", children: e.title }),
            /* @__PURE__ */ u("div", { className: "text-sm leading-snug opacity-90", children: e.description }),
            e.action && /* @__PURE__ */ u(
              "button",
              {
                onClick: e.action.onClick,
                className: "mt-2 inline-flex h-8 items-center justify-center rounded-md border border-current px-3 text-xs font-medium transition-colors hover:bg-black/5 focus:ring-2 focus:ring-offset-2 focus:outline-none dark:hover:bg-white/10",
                children: e.action.label
              }
            )
          ] }),
          /* @__PURE__ */ u(
            "button",
            {
              onClick: t,
              className: "inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md text-current opacity-60 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none",
              "aria-label": "Close",
              children: /* @__PURE__ */ u(Yr, { className: "h-4 w-4" })
            }
          )
        ]
      }
    );
  }
);
pt.displayName = "ToastItem";
const Ea = {
  "top-right": "top-0 right-0 sm:top-4 sm:right-4",
  "top-left": "top-0 left-0 sm:top-4 sm:left-4",
  "bottom-right": "bottom-0 right-0 sm:bottom-4 sm:right-4",
  "bottom-left": "bottom-0 left-0 sm:bottom-4 sm:left-4",
  "top-center": "top-0 left-1/2 -translate-x-1/2 sm:top-4",
  "bottom-center": "bottom-0 left-1/2 -translate-x-1/2 sm:bottom-4"
}, gt = h.forwardRef(
  ({ position: e = "top-right" }, t) => {
    const { toasts: r, removeToast: a } = Sa(), [n, s] = h.useState(!1);
    return h.useEffect(() => {
      s(!0);
    }, []), !n || r.length === 0 ? null : /* @__PURE__ */ u(
      "div",
      {
        ref: t,
        className: N(
          "pointer-events-none fixed z-[100] flex w-full max-w-[420px] flex-col gap-2 p-4",
          Ea[e]
        ),
        children: r.map((o) => /* @__PURE__ */ u(
          pt,
          {
            toast: o,
            variant: o.variant,
            onClose: () => {
              a(o.id);
            }
          },
          o.id
        ))
      }
    );
  }
);
gt.displayName = "ToastContainer";
const Jn = ({
  children: e,
  position: t = "top-right",
  duration: r = 5e3,
  max: a = 5
}) => {
  const [n, s] = h.useState([]), o = h.useRef(/* @__PURE__ */ new Map()), c = h.useCallback((i) => {
    const l = o.current.get(i);
    l && (clearTimeout(l), o.current.delete(i)), s((g) => g.filter((m) => m.id !== i));
  }, []), d = h.useCallback(
    (i) => {
      const l = Math.random().toString(36).substring(2, 9), g = { ...i, id: l };
      s((y) => {
        const x = [...y, g];
        return x.length > a ? (x.slice(0, x.length - a).forEach((_) => {
          const L = o.current.get(_.id);
          L && (clearTimeout(L), o.current.delete(_.id));
        }), x.slice(x.length - a)) : x;
      });
      const m = i.duration ?? r;
      if (m > 0) {
        const y = setTimeout(() => {
          c(l);
        }, m);
        o.current.set(l, y);
      }
      return l;
    },
    [r, a, c]
  ), p = h.useCallback(
    (i, l) => d({ ...l, description: i, variant: "success" }),
    [d]
  ), f = h.useCallback(
    (i, l) => d({ ...l, description: i, variant: "error" }),
    [d]
  ), b = h.useCallback(
    (i, l) => d({ ...l, description: i, variant: "warning" }),
    [d]
  ), w = h.useCallback(
    (i, l) => d({ ...l, description: i, variant: "info" }),
    [d]
  );
  h.useEffect(() => {
    const i = o.current;
    return () => {
      i.forEach((l) => {
        clearTimeout(l);
      }), i.clear();
    };
  }, []);
  const k = h.useMemo(
    () => ({ toasts: n, addToast: d, removeToast: c, success: p, error: f, warning: b, info: w }),
    [n, d, c, p, f, b, w]
  );
  return /* @__PURE__ */ S(ut.Provider, { value: k, children: [
    e,
    /* @__PURE__ */ u(gt, { position: t })
  ] });
}, Sa = () => {
  const e = h.useContext(ut);
  if (!e)
    throw new Error("useToast must be used within a ToastProvider");
  return e;
}, Aa = O(
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
), ft = O(
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
), bt = h.createContext(void 0), Te = () => {
  const e = h.useContext(bt);
  if (!e)
    throw new Error("Dropdown components must be used within a Dropdown");
  return e;
}, mt = h.createContext(
  void 0
), yt = () => {
  const e = h.useContext(mt);
  if (!e)
    throw new Error("DropdownSubmenu components must be used within a DropdownSubmenu");
  return e;
}, eo = ({
  children: e,
  open: t,
  onOpenChange: r,
  defaultOpen: a = !1
}) => {
  const [n, s] = h.useState(a), o = h.useRef(null), c = h.useRef(null), d = t !== void 0 ? t : n, p = h.useCallback(
    (f) => {
      t === void 0 && s(f), r == null || r(f);
    },
    [t, r]
  );
  return h.useEffect(() => {
    if (!d) return;
    const f = (b) => {
      var k, i;
      const w = b.target;
      !((k = o.current) != null && k.contains(w)) && !((i = c.current) != null && i.contains(w)) && p(!1);
    };
    return document.addEventListener("mousedown", f), () => {
      document.removeEventListener("mousedown", f);
    };
  }, [d, p]), h.useEffect(() => {
    if (!d) return;
    const f = (b) => {
      var w;
      b.key === "Escape" && (p(!1), (w = o.current) == null || w.focus());
    };
    return document.addEventListener("keydown", f), () => {
      document.removeEventListener("keydown", f);
    };
  }, [d, p]), /* @__PURE__ */ u(bt.Provider, { value: { open: d, setOpen: p, triggerRef: o, contentRef: c }, children: /* @__PURE__ */ u("div", { className: "relative inline-block", children: e }) });
}, to = ({ children: e, asChild: t = !1 }) => {
  const { open: r, setOpen: a, triggerRef: n } = Te(), s = () => {
    a(!r);
  }, o = (c) => {
    c.key === "Enter" || c.key === " " ? (c.preventDefault(), a(!r)) : c.key === "ArrowDown" && !r && (c.preventDefault(), a(!0));
  };
  if (t && h.isValidElement(e)) {
    const c = e.props || {};
    return h.cloneElement(e, {
      ...c,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref: n,
      onClick: s,
      onKeyDown: o,
      "aria-expanded": r,
      "aria-haspopup": "menu"
    });
  }
  return /* @__PURE__ */ u(
    "button",
    {
      ref: n,
      type: "button",
      onClick: s,
      onKeyDown: o,
      "aria-expanded": r,
      "aria-haspopup": "menu",
      children: e
    }
  );
}, ro = ({
  children: e,
  className: t,
  align: r = "start",
  side: a = "bottom"
}) => {
  const { open: n, setOpen: s, contentRef: o } = Te(), [c, d] = h.useState(-1), p = h.useCallback(() => o.current ? Array.from(
    o.current.querySelectorAll(
      '[role="menuitem"]:not([aria-disabled="true"])'
    )
  ) : [], [o]);
  return h.useEffect(() => {
    var w;
    if (!n) return;
    const f = (k) => {
      var l, g;
      const i = p();
      if (i.length !== 0)
        switch (k.key) {
          case "ArrowDown":
            k.preventDefault(), d((m) => {
              var x;
              const y = m + 1 >= i.length ? 0 : m + 1;
              return (x = i[y]) == null || x.focus(), y;
            });
            break;
          case "ArrowUp":
            k.preventDefault(), d((m) => {
              var x;
              const y = m - 1 < 0 ? i.length - 1 : m - 1;
              return (x = i[y]) == null || x.focus(), y;
            });
            break;
          case "Home":
            k.preventDefault(), (l = i[0]) == null || l.focus(), d(0);
            break;
          case "End":
            k.preventDefault(), (g = i[i.length - 1]) == null || g.focus(), d(i.length - 1);
            break;
          case "Tab":
            k.preventDefault(), s(!1);
            break;
        }
    }, b = o.current;
    return (w = o.current) == null || w.addEventListener("keydown", f), () => b == null ? void 0 : b.removeEventListener("keydown", f);
  }, [n, s, p]), h.useEffect(() => {
    var f;
    if (n) {
      const b = p();
      b.length > 0 && ((f = b[0]) == null || f.focus(), d(0));
    } else
      d(-1);
  }, [n, p]), n ? /* @__PURE__ */ u(
    "div",
    {
      ref: o,
      role: "menu",
      "aria-orientation": "vertical",
      className: N(Aa({ align: r, side: a }), t),
      children: e
    }
  ) : null;
}, ao = ({ children: e, className: t }) => /* @__PURE__ */ u(
  "div",
  {
    className: N(
      "px-2 py-1.5 text-sm font-semibold text-slate-900 dark:text-slate-100",
      t
    ),
    children: e
  }
), no = ({
  children: e,
  onSelect: t,
  icon: r,
  shortcut: a,
  variant: n = "default",
  disabled: s = !1,
  className: o
}) => {
  const { setOpen: c } = Te(), d = () => {
    s || (t == null || t(), c(!1));
  };
  return /* @__PURE__ */ S(
    "div",
    {
      role: "menuitem",
      tabIndex: s ? void 0 : 0,
      "aria-disabled": s ? !0 : void 0,
      onClick: d,
      onKeyDown: (f) => {
        (f.key === "Enter" || f.key === " ") && (f.preventDefault(), d());
      },
      className: N(ft({ variant: n, disabled: s }), o),
      children: [
        r && /* @__PURE__ */ u("span", { className: "shrink-0", children: r }),
        /* @__PURE__ */ u("span", { className: "flex-1", children: e }),
        a && /* @__PURE__ */ u("span", { className: "ml-auto text-xs tracking-widest text-slate-500 dark:text-slate-400", children: a })
      ]
    }
  );
}, oo = ({ className: e }) => /* @__PURE__ */ u("div", { role: "separator", className: N("my-1 h-px bg-slate-200 dark:bg-slate-700", e) }), so = ({ children: e }) => {
  const [t, r] = h.useState(!1);
  return /* @__PURE__ */ u(mt.Provider, { value: { open: t, setOpen: r }, children: /* @__PURE__ */ u("div", { className: "relative", children: e }) });
}, lo = ({
  children: e,
  icon: t,
  className: r
}) => {
  const { open: a, setOpen: n } = yt();
  return /* @__PURE__ */ S(
    "div",
    {
      role: "menuitem",
      tabIndex: 0,
      "aria-haspopup": "menu",
      "aria-expanded": a,
      onMouseEnter: () => {
        n(!0);
      },
      onMouseLeave: () => {
        n(!1);
      },
      onKeyDown: (d) => {
        d.key === "ArrowRight" ? (d.preventDefault(), n(!0)) : d.key === "ArrowLeft" && a ? (d.preventDefault(), n(!1)) : (d.key === "Enter" || d.key === " ") && (d.preventDefault(), n(!a));
      },
      className: N(ft({ variant: "default", disabled: !1 }), r),
      children: [
        t && /* @__PURE__ */ u("span", { className: "shrink-0", children: t }),
        /* @__PURE__ */ u("span", { className: "flex-1", children: e }),
        /* @__PURE__ */ u(lt, { className: "ml-auto h-3 w-3 text-slate-500 dark:text-slate-400" })
      ]
    }
  );
}, io = ({
  children: e,
  className: t
}) => {
  const { open: r } = yt();
  return r ? /* @__PURE__ */ u(
    "div",
    {
      role: "menu",
      "aria-orientation": "vertical",
      className: N(
        "animate-in fade-in-0 zoom-in-95 absolute top-0 left-full ml-1 min-w-[12rem] overflow-hidden rounded-md border bg-white p-1 shadow-lg dark:border-slate-700 dark:bg-slate-800",
        t
      ),
      children: e
    }
  ) : null;
}, Ca = O(
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
), _a = O(
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
function Ta(e) {
  var n, s;
  if (!e) return "?";
  const t = e.trim().split(/\s+/).filter(Boolean);
  if (t.length === 0) return "?";
  if (t.length === 1) {
    const o = t[0];
    return o ? o.substring(0, 2).toUpperCase() : "?";
  }
  const r = ((n = t[0]) == null ? void 0 : n.charAt(0)) || "", a = ((s = t[1]) == null ? void 0 : s.charAt(0)) || "";
  return (r + a).toUpperCase() || "?";
}
function Fa(e) {
  if (!e) return "bg-slate-500";
  let t = 0;
  for (let a = 0; a < e.length; a++)
    t = e.charCodeAt(a) + ((t << 5) - t);
  const r = [
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
  return r[Math.abs(t) % r.length] ?? "bg-slate-500";
}
const Ia = h.forwardRef(
  ({
    className: e,
    size: t,
    shape: r,
    src: a,
    name: n = "",
    alt: s,
    status: o,
    loading: c = !1,
    initials: d,
    ...p
  }, f) => {
    const [b, w] = h.useState(!1), [k, i] = h.useState(!!a);
    h.useEffect(() => {
      a && (w(!1), i(!0));
    }, [a]);
    const l = d || Ta(n), g = Fa(n), m = a && !b && !c, y = !m && !c, x = c || k;
    return /* @__PURE__ */ S("div", { ref: f, className: N(Ca({ size: t, shape: r }), e), ...p, children: [
      m && /* @__PURE__ */ u(
        "img",
        {
          src: a,
          alt: s || n || "Avatar",
          className: N(
            "h-full w-full object-cover",
            x && "opacity-0",
            !x && "opacity-100 transition-opacity duration-200"
          ),
          onError: () => {
            w(!0), i(!1);
          },
          onLoad: () => {
            i(!1);
          }
        }
      ),
      y && /* @__PURE__ */ u(
        "div",
        {
          className: N(
            "flex h-full w-full items-center justify-center font-medium text-white",
            g
          ),
          children: l
        }
      ),
      x && !m && /* @__PURE__ */ u("div", { className: "h-full w-full animate-pulse bg-slate-200 dark:bg-slate-700" }),
      o && !c && /* @__PURE__ */ u(
        "span",
        {
          className: N(_a({ status: o, size: t })),
          "aria-label": `Status: ${o}`
        }
      )
    ] });
  }
);
Ia.displayName = "Avatar";
const Pe = O("inline-flex rounded-full flex-shrink-0", {
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
}), Me = O("text-sm font-medium", {
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
}), Ra = h.forwardRef(
  ({
    className: e,
    status: t = "online",
    size: r = "md",
    variant: a = "dot",
    label: n,
    labelPosition: s = "right",
    showRing: o = !1,
    ...c
  }, d) => {
    const p = o ? "ring" : a, f = n !== void 0 ? n : "";
    return f ? /* @__PURE__ */ S(
      "span",
      {
        ref: d,
        className: N("inline-flex items-center gap-2", e),
        role: "status",
        "aria-label": `Status: ${t || "online"}`,
        ...c,
        children: [
          s === "left" && /* @__PURE__ */ u("span", { className: Me({ status: t }), children: f }),
          /* @__PURE__ */ u(
            "span",
            {
              className: Pe({ status: t, size: r, variant: p }),
              "aria-hidden": "true"
            }
          ),
          s === "right" && /* @__PURE__ */ u("span", { className: Me({ status: t }), children: f })
        ]
      }
    ) : /* @__PURE__ */ u(
      "span",
      {
        ref: d,
        className: N(
          Pe({ status: t, size: r, variant: p }),
          e
        ),
        role: "status",
        "aria-label": `Status: ${t || "online"}`,
        ...c
      }
    );
  }
);
Ra.displayName = "StatusIndicator";
const La = O(
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
), Oa = {
  default: Oe,
  info: Oe,
  success: Ft,
  warning: Lt,
  error: Tt
}, Da = h.forwardRef(
  ({ className: e, variant: t, showIcon: r = !0, dismissible: a, onDismiss: n, children: s, ...o }, c) => {
    const [d, p] = h.useState(!1), f = () => {
      p(!0), n == null || n();
    };
    if (d) return null;
    const b = Oa[t || "default"];
    return /* @__PURE__ */ S("div", { ref: c, role: "alert", className: N(La({ variant: t }), e), ...o, children: [
      r && /* @__PURE__ */ u(b, { className: "h-4 w-4", "aria-hidden": "true" }),
      /* @__PURE__ */ u("div", { className: "flex-1", children: s }),
      a && /* @__PURE__ */ u(
        "button",
        {
          onClick: f,
          className: "ring-offset-background focus:ring-ring absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none",
          "aria-label": "Dismiss alert",
          children: /* @__PURE__ */ u(Xe, { className: "h-4 w-4" })
        }
      )
    ] });
  }
);
Da.displayName = "Alert";
const za = h.forwardRef(
  ({ className: e, children: t, ...r }, a) => /* @__PURE__ */ u(
    "h5",
    {
      ref: a,
      className: N("mb-1 leading-none font-medium tracking-tight", e),
      ...r,
      children: t
    }
  )
);
za.displayName = "AlertTitle";
const $a = h.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ u("div", { ref: r, className: N("text-sm [&_p]:leading-relaxed", e), ...t }));
$a.displayName = "AlertDescription";
var Ba = Object.create, he = Object.defineProperty, ja = Object.defineProperties, Pa = Object.getOwnPropertyDescriptor, Ma = Object.getOwnPropertyDescriptors, ht = Object.getOwnPropertyNames, be = Object.getOwnPropertySymbols, Va = Object.getPrototypeOf, Fe = Object.prototype.hasOwnProperty, vt = Object.prototype.propertyIsEnumerable, Ve = (e, t, r) => t in e ? he(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Q = (e, t) => {
  for (var r in t || (t = {}))
    Fe.call(t, r) && Ve(e, r, t[r]);
  if (be)
    for (var r of be(t))
      vt.call(t, r) && Ve(e, r, t[r]);
  return e;
}, ve = (e, t) => ja(e, Ma(t)), xt = (e, t) => {
  var r = {};
  for (var a in e)
    Fe.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && be)
    for (var a of be(e))
      t.indexOf(a) < 0 && vt.call(e, a) && (r[a] = e[a]);
  return r;
}, Ga = (e, t) => function() {
  return t || (0, e[ht(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, Ua = (e, t) => {
  for (var r in t)
    he(e, r, { get: t[r], enumerable: !0 });
}, Ha = (e, t, r, a) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let n of ht(t))
      !Fe.call(e, n) && n !== r && he(e, n, { get: () => t[n], enumerable: !(a = Pa(t, n)) || a.enumerable });
  return e;
}, Za = (e, t, r) => (r = e != null ? Ba(Va(e)) : {}, Ha(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !e || !e.__esModule ? he(r, "default", { value: e, enumerable: !0 }) : r,
  e
)), Wa = Ga({
  "../../node_modules/.pnpm/prismjs@1.29.0_patch_hash=vrxx3pzkik6jpmgpayxfjunetu/node_modules/prismjs/prism.js"(e, t) {
    var r = (function() {
      var a = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, n = 0, s = {}, o = {
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
          encode: function i(l) {
            return l instanceof c ? new c(l.type, i(l.content), l.alias) : Array.isArray(l) ? l.map(i) : l.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
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
          type: function(i) {
            return Object.prototype.toString.call(i).slice(8, -1);
          },
          /**
           * Returns a unique number for the given object. Later calls will still return the same number.
           *
           * @param {Object} obj
           * @returns {number}
           */
          objId: function(i) {
            return i.__id || Object.defineProperty(i, "__id", { value: ++n }), i.__id;
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
          clone: function i(l, g) {
            g = g || {};
            var m, y;
            switch (o.util.type(l)) {
              case "Object":
                if (y = o.util.objId(l), g[y])
                  return g[y];
                m = /** @type {Record<string, any>} */
                {}, g[y] = m;
                for (var x in l)
                  l.hasOwnProperty(x) && (m[x] = i(l[x], g));
                return (
                  /** @type {any} */
                  m
                );
              case "Array":
                return y = o.util.objId(l), g[y] ? g[y] : (m = [], g[y] = m, l.forEach(function(E, _) {
                  m[_] = i(E, g);
                }), /** @type {any} */
                m);
              default:
                return l;
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
          getLanguage: function(i) {
            for (; i; ) {
              var l = a.exec(i.className);
              if (l)
                return l[1].toLowerCase();
              i = i.parentElement;
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
          setLanguage: function(i, l) {
            i.className = i.className.replace(RegExp(a, "gi"), ""), i.classList.add("language-" + l);
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
          isActive: function(i, l, g) {
            for (var m = "no-" + l; i; ) {
              var y = i.classList;
              if (y.contains(l))
                return !0;
              if (y.contains(m))
                return !1;
              i = i.parentElement;
            }
            return !!g;
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
          extend: function(i, l) {
            var g = o.util.clone(o.languages[i]);
            for (var m in l)
              g[m] = l[m];
            return g;
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
          insertBefore: function(i, l, g, m) {
            m = m || /** @type {any} */
            o.languages;
            var y = m[i], x = {};
            for (var E in y)
              if (y.hasOwnProperty(E)) {
                if (E == l)
                  for (var _ in g)
                    g.hasOwnProperty(_) && (x[_] = g[_]);
                g.hasOwnProperty(E) || (x[E] = y[E]);
              }
            var L = m[i];
            return m[i] = x, o.languages.DFS(o.languages, function(T, R) {
              R === L && T != i && (this[T] = x);
            }), x;
          },
          // Traverse a language definition with Depth First Search
          DFS: function i(l, g, m, y) {
            y = y || {};
            var x = o.util.objId;
            for (var E in l)
              if (l.hasOwnProperty(E)) {
                g.call(l, E, l[E], m || E);
                var _ = l[E], L = o.util.type(_);
                L === "Object" && !y[x(_)] ? (y[x(_)] = !0, i(_, g, null, y)) : L === "Array" && !y[x(_)] && (y[x(_)] = !0, i(_, g, E, y));
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
        highlight: function(i, l, g) {
          var m = {
            code: i,
            grammar: l,
            language: g
          };
          if (o.hooks.run("before-tokenize", m), !m.grammar)
            throw new Error('The language "' + m.language + '" has no grammar.');
          return m.tokens = o.tokenize(m.code, m.grammar), o.hooks.run("after-tokenize", m), c.stringify(o.util.encode(m.tokens), m.language);
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
        tokenize: function(i, l) {
          var g = l.rest;
          if (g) {
            for (var m in g)
              l[m] = g[m];
            delete l.rest;
          }
          var y = new f();
          return b(y, y.head, i), p(i, y, l, y.head, 0), k(y);
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
          add: function(i, l) {
            var g = o.hooks.all;
            g[i] = g[i] || [], g[i].push(l);
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
          run: function(i, l) {
            var g = o.hooks.all[i];
            if (!(!g || !g.length))
              for (var m = 0, y; y = g[m++]; )
                y(l);
          }
        },
        Token: c
      };
      function c(i, l, g, m) {
        this.type = i, this.content = l, this.alias = g, this.length = (m || "").length | 0;
      }
      c.stringify = function i(l, g) {
        if (typeof l == "string")
          return l;
        if (Array.isArray(l)) {
          var m = "";
          return l.forEach(function(L) {
            m += i(L, g);
          }), m;
        }
        var y = {
          type: l.type,
          content: i(l.content, g),
          tag: "span",
          classes: ["token", l.type],
          attributes: {},
          language: g
        }, x = l.alias;
        x && (Array.isArray(x) ? Array.prototype.push.apply(y.classes, x) : y.classes.push(x)), o.hooks.run("wrap", y);
        var E = "";
        for (var _ in y.attributes)
          E += " " + _ + '="' + (y.attributes[_] || "").replace(/"/g, "&quot;") + '"';
        return "<" + y.tag + ' class="' + y.classes.join(" ") + '"' + E + ">" + y.content + "</" + y.tag + ">";
      };
      function d(i, l, g, m) {
        i.lastIndex = l;
        var y = i.exec(g);
        if (y && m && y[1]) {
          var x = y[1].length;
          y.index += x, y[0] = y[0].slice(x);
        }
        return y;
      }
      function p(i, l, g, m, y, x) {
        for (var E in g)
          if (!(!g.hasOwnProperty(E) || !g[E])) {
            var _ = g[E];
            _ = Array.isArray(_) ? _ : [_];
            for (var L = 0; L < _.length; ++L) {
              if (x && x.cause == E + "," + L)
                return;
              var T = _[L], R = T.inside, F = !!T.lookbehind, z = !!T.greedy, B = T.alias;
              if (z && !T.pattern.global) {
                var A = T.pattern.toString().match(/[imsuy]*$/)[0];
                T.pattern = RegExp(T.pattern.source, A + "g");
              }
              for (var q = T.pattern || T, $ = m.next, G = y; $ !== l.tail && !(x && G >= x.reach); G += $.value.length, $ = $.next) {
                var U = $.value;
                if (l.length > i.length)
                  return;
                if (!(U instanceof c)) {
                  var D = 1, M;
                  if (z) {
                    if (M = d(q, G, i, F), !M || M.index >= i.length)
                      break;
                    var j = M.index, Z = M.index + M[0].length, H = G;
                    for (H += $.value.length; j >= H; )
                      $ = $.next, H += $.value.length;
                    if (H -= $.value.length, G = H, $.value instanceof c)
                      continue;
                    for (var C = $; C !== l.tail && (H < Z || typeof C.value == "string"); C = C.next)
                      D++, H += C.value.length;
                    D--, U = i.slice(G, H), M.index -= G;
                  } else if (M = d(q, 0, U, F), !M)
                    continue;
                  var j = M.index, V = M[0], X = U.slice(0, j), ue = U.slice(j + V.length), W = G + U.length;
                  x && W > x.reach && (x.reach = W);
                  var re = $.prev;
                  X && (re = b(l, re, X), G += X.length), w(l, re, D);
                  var xe = new c(E, R ? o.tokenize(V, R) : V, B, V);
                  if ($ = b(l, re, xe), ue && b(l, $, ue), D > 1) {
                    var we = {
                      cause: E + "," + L,
                      reach: W
                    };
                    p(i, l, g, $.prev, G, we), x && we.reach > x.reach && (x.reach = we.reach);
                  }
                }
              }
            }
          }
      }
      function f() {
        var i = { value: null, prev: null, next: null }, l = { value: null, prev: i, next: null };
        i.next = l, this.head = i, this.tail = l, this.length = 0;
      }
      function b(i, l, g) {
        var m = l.next, y = { value: g, prev: l, next: m };
        return l.next = y, m.prev = y, i.length++, y;
      }
      function w(i, l, g) {
        for (var m = l.next, y = 0; y < g && m !== i.tail; y++)
          m = m.next;
        l.next = m, m.prev = l, i.length -= y;
      }
      function k(i) {
        for (var l = [], g = i.head.next; g !== i.tail; )
          l.push(g.value), g = g.next;
        return l;
      }
      return o;
    })();
    t.exports = r, r.default = r;
  }
}), v = Za(Wa());
v.languages.markup = { comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 }, prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 }, doctype: { pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i, greedy: !0, inside: { "internal-subset": { pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/, lookbehind: !0, greedy: !0, inside: null }, string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 }, punctuation: /^<!|>$|[[\]]/, "doctype-tag": /^DOCTYPE/i, name: /[^\s<>'"]+/ } }, cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 }, tag: { pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/, greedy: !0, inside: { tag: { pattern: /^<\/?[^\s>\/]+/, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } }, "special-attr": [], "attr-value": { pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/, inside: { punctuation: [{ pattern: /^=/, alias: "attr-equals" }, { pattern: /^(\s*)["']|["']$/, lookbehind: !0 }] } }, punctuation: /\/?>/, "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } } } }, entity: [{ pattern: /&[\da-z]{1,8};/i, alias: "named-entity" }, /&#x?[\da-f]{1,8};/i] }, v.languages.markup.tag.inside["attr-value"].inside.entity = v.languages.markup.entity, v.languages.markup.doctype.inside["internal-subset"].inside = v.languages.markup, v.hooks.add("wrap", function(e) {
  e.type === "entity" && (e.attributes.title = e.content.replace(/&amp;/, "&"));
}), Object.defineProperty(v.languages.markup.tag, "addInlined", { value: function(e, a) {
  var r = {}, r = (r["language-" + a] = { pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i, lookbehind: !0, inside: v.languages[a] }, r.cdata = /^<!\[CDATA\[|\]\]>$/i, { "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: r } }), a = (r["language-" + a] = { pattern: /[\s\S]+/, inside: v.languages[a] }, {});
  a[e] = { pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
    return e;
  }), "i"), lookbehind: !0, greedy: !0, inside: r }, v.languages.insertBefore("markup", "cdata", a);
} }), Object.defineProperty(v.languages.markup.tag, "addAttribute", { value: function(e, t) {
  v.languages.markup.tag.inside["special-attr"].push({ pattern: RegExp(/(^|["'\s])/.source + "(?:" + e + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"), lookbehind: !0, inside: { "attr-name": /^[^\s=]+/, "attr-value": { pattern: /=[\s\S]+/, inside: { value: { pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/, lookbehind: !0, alias: [t, "language-" + t], inside: v.languages[t] }, punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/] } } } });
} }), v.languages.html = v.languages.markup, v.languages.mathml = v.languages.markup, v.languages.svg = v.languages.markup, v.languages.xml = v.languages.extend("markup", {}), v.languages.ssml = v.languages.xml, v.languages.atom = v.languages.xml, v.languages.rss = v.languages.xml, (function(e) {
  var t = { pattern: /\\[\\(){}[\]^$+*?|.]/, alias: "escape" }, r = /\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/, a = "(?:[^\\\\-]|" + r.source + ")", a = RegExp(a + "-" + a), n = { pattern: /(<|')[^<>']+(?=[>']$)/, lookbehind: !0, alias: "variable" };
  e.languages.regex = { "char-class": { pattern: /((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/, lookbehind: !0, inside: { "char-class-negation": { pattern: /(^\[)\^/, lookbehind: !0, alias: "operator" }, "char-class-punctuation": { pattern: /^\[|\]$/, alias: "punctuation" }, range: { pattern: a, inside: { escape: r, "range-punctuation": { pattern: /-/, alias: "operator" } } }, "special-escape": t, "char-set": { pattern: /\\[wsd]|\\p\{[^{}]+\}/i, alias: "class-name" }, escape: r } }, "special-escape": t, "char-set": { pattern: /\.|\\[wsd]|\\p\{[^{}]+\}/i, alias: "class-name" }, backreference: [{ pattern: /\\(?![123][0-7]{2})[1-9]/, alias: "keyword" }, { pattern: /\\k<[^<>']+>/, alias: "keyword", inside: { "group-name": n } }], anchor: { pattern: /[$^]|\\[ABbGZz]/, alias: "function" }, escape: r, group: [{ pattern: /\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/, alias: "punctuation", inside: { "group-name": n } }, { pattern: /\)/, alias: "punctuation" }], quantifier: { pattern: /(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/, alias: "number" }, alternation: { pattern: /\|/, alias: "keyword" } };
})(v), v.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0, greedy: !0 }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 }, "class-name": { pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i, lookbehind: !0, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/, boolean: /\b(?:false|true)\b/, function: /\b\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/, punctuation: /[{}[\];(),.:]/ }, v.languages.javascript = v.languages.extend("clike", { "class-name": [v.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/, lookbehind: !0 }], keyword: [{ pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 }, { pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: !0 }], function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, number: { pattern: RegExp(/(^|[^\w$])/.source + "(?:" + /NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source + ")" + /(?![\w$])/.source), lookbehind: !0 }, operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/ }), v.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, v.languages.insertBefore("javascript", "keyword", { regex: { pattern: RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source), lookbehind: !0, greedy: !0, inside: { "regex-source": { pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/, lookbehind: !0, alias: "language-regex", inside: v.languages.regex }, "regex-delimiter": /^\/|\/$/, "regex-flags": /^[a-z]+$/ } }, "function-variable": { pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/, lookbehind: !0, inside: v.languages.javascript }, { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i, lookbehind: !0, inside: v.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/, lookbehind: !0, inside: v.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/, lookbehind: !0, inside: v.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ }), v.languages.insertBefore("javascript", "string", { hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" }, "template-string": { pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/, greedy: !0, inside: { "template-punctuation": { pattern: /^`|`$/, alias: "string" }, interpolation: { pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/, lookbehind: !0, inside: { "interpolation-punctuation": { pattern: /^\$\{|\}$/, alias: "punctuation" }, rest: v.languages.javascript } }, string: /[\s\S]+/ } }, "string-property": { pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m, lookbehind: !0, greedy: !0, alias: "property" } }), v.languages.insertBefore("javascript", "operator", { "literal-property": { pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m, lookbehind: !0, alias: "property" } }), v.languages.markup && (v.languages.markup.tag.addInlined("script", "javascript"), v.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript")), v.languages.js = v.languages.javascript, v.languages.actionscript = v.languages.extend("javascript", { keyword: /\b(?:as|break|case|catch|class|const|default|delete|do|dynamic|each|else|extends|final|finally|for|function|get|if|implements|import|in|include|instanceof|interface|internal|is|namespace|native|new|null|override|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|use|var|void|while|with)\b/, operator: /\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/ }), v.languages.actionscript["class-name"].alias = "function", delete v.languages.actionscript.parameter, delete v.languages.actionscript["literal-property"], v.languages.markup && v.languages.insertBefore("actionscript", "string", { xml: { pattern: /(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/, lookbehind: !0, inside: v.languages.markup } }), (function(e) {
  var t = /#(?!\{).+/, r = { pattern: /#\{[^}]+\}/, alias: "variable" };
  e.languages.coffeescript = e.languages.extend("javascript", { comment: t, string: [{ pattern: /'(?:\\[\s\S]|[^\\'])*'/, greedy: !0 }, { pattern: /"(?:\\[\s\S]|[^\\"])*"/, greedy: !0, inside: { interpolation: r } }], keyword: /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/, "class-member": { pattern: /@(?!\d)\w+/, alias: "variable" } }), e.languages.insertBefore("coffeescript", "comment", { "multiline-comment": { pattern: /###[\s\S]+?###/, alias: "comment" }, "block-regex": { pattern: /\/{3}[\s\S]*?\/{3}/, alias: "regex", inside: { comment: t, interpolation: r } } }), e.languages.insertBefore("coffeescript", "string", { "inline-javascript": { pattern: /`(?:\\[\s\S]|[^\\`])*`/, inside: { delimiter: { pattern: /^`|`$/, alias: "punctuation" }, script: { pattern: /[\s\S]+/, alias: "language-javascript", inside: e.languages.javascript } } }, "multiline-string": [{ pattern: /'''[\s\S]*?'''/, greedy: !0, alias: "string" }, { pattern: /"""[\s\S]*?"""/, greedy: !0, alias: "string", inside: { interpolation: r } }] }), e.languages.insertBefore("coffeescript", "keyword", { property: /(?!\d)\w+(?=\s*:(?!:))/ }), delete e.languages.coffeescript["template-string"], e.languages.coffee = e.languages.coffeescript;
})(v), (function(e) {
  var t = e.languages.javadoclike = { parameter: { pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m, lookbehind: !0 }, keyword: { pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m, lookbehind: !0 }, punctuation: /[{}]/ };
  Object.defineProperty(t, "addSupport", { value: function(r, a) {
    (r = typeof r == "string" ? [r] : r).forEach(function(n) {
      var s = function(b) {
        b.inside || (b.inside = {}), b.inside.rest = a;
      }, o = "doc-comment";
      if (c = e.languages[n]) {
        var c, d = c[o];
        if ((d = d || (c = e.languages.insertBefore(n, "comment", { "doc-comment": { pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/, lookbehind: !0, alias: "comment" } }))[o]) instanceof RegExp && (d = c[o] = { pattern: d }), Array.isArray(d))
          for (var p = 0, f = d.length; p < f; p++)
            d[p] instanceof RegExp && (d[p] = { pattern: d[p] }), s(d[p]);
        else
          s(d);
      }
    });
  } }), t.addSupport(["java", "javascript", "php"], t);
})(v), (function(e) {
  var t = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/, t = (e.languages.css = { comment: /\/\*[\s\S]*?\*\//, atrule: { pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + t.source + ")*?" + /(?:;|(?=\s*\{))/.source), inside: { rule: /^@[\w-]+/, "selector-function-argument": { pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/, lookbehind: !0, alias: "selector" }, keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: !0 } } }, url: { pattern: RegExp("\\burl\\((?:" + t.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"), greedy: !0, inside: { function: /^url/i, punctuation: /^\(|\)$/, string: { pattern: RegExp("^" + t.source + "$"), alias: "url" } } }, selector: { pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + t.source + ")*(?=\\s*\\{)"), lookbehind: !0 }, string: { pattern: t, greedy: !0 }, property: { pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i, lookbehind: !0 }, important: /!important\b/i, function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0 }, punctuation: /[(){};:,]/ }, e.languages.css.atrule.inside.rest = e.languages.css, e.languages.markup);
  t && (t.tag.addInlined("style", "css"), t.tag.addAttribute("style", "css"));
})(v), (function(e) {
  var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, t = (e.languages.css.selector = { pattern: e.languages.css.selector.pattern, lookbehind: !0, inside: t = { "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/, "pseudo-class": /:[-\w]+/, class: /\.[-\w]+/, id: /#[-\w]+/, attribute: { pattern: RegExp(`\\[(?:[^[\\]"']|` + t.source + ")*\\]"), greedy: !0, inside: { punctuation: /^\[|\]$/, "case-sensitivity": { pattern: /(\s)[si]$/i, lookbehind: !0, alias: "keyword" }, namespace: { pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/, lookbehind: !0, inside: { punctuation: /\|$/ } }, "attr-name": { pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/, lookbehind: !0 }, "attr-value": [t, { pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/, lookbehind: !0 }], operator: /[|~*^$]?=/ } }, "n-th": [{ pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/, lookbehind: !0, inside: { number: /[\dn]+/, operator: /[+-]/ } }, { pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i, lookbehind: !0 }], combinator: />|\+|~|\|\|/, punctuation: /[(),]/ } }, e.languages.css.atrule.inside["selector-function-argument"].inside = t, e.languages.insertBefore("css", "property", { variable: { pattern: /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i, lookbehind: !0 } }), { pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/, lookbehind: !0 }), r = { pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/, lookbehind: !0 };
  e.languages.insertBefore("css", "function", { operator: { pattern: /(\s)[+\-*\/](?=\s)/, lookbehind: !0 }, hexcode: { pattern: /\B#[\da-f]{3,8}\b/i, alias: "color" }, color: [{ pattern: /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i, lookbehind: !0 }, { pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i, inside: { unit: t, number: r, function: /[\w-]+(?=\()/, punctuation: /[(),]/ } }], entity: /\\[\da-f]{1,8}/i, unit: t, number: r });
})(v), (function(e) {
  var t = /[*&][^\s[\]{},]+/, r = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/, a = "(?:" + r.source + "(?:[ 	]+" + t.source + ")?|" + t.source + "(?:[ 	]+" + r.source + ")?)", n = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, function() {
    return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
  }), s = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
  function o(c, d) {
    d = (d || "").replace(/m/g, "") + "m";
    var p = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function() {
      return a;
    }).replace(/<<value>>/g, function() {
      return c;
    });
    return RegExp(p, d);
  }
  e.languages.yaml = { scalar: { pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, function() {
    return a;
  })), lookbehind: !0, alias: "string" }, comment: /#.*/, key: { pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, function() {
    return a;
  }).replace(/<<key>>/g, function() {
    return "(?:" + n + "|" + s + ")";
  })), lookbehind: !0, greedy: !0, alias: "atrule" }, directive: { pattern: /(^[ \t]*)%.+/m, lookbehind: !0, alias: "important" }, datetime: { pattern: o(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source), lookbehind: !0, alias: "number" }, boolean: { pattern: o(/false|true/.source, "i"), lookbehind: !0, alias: "important" }, null: { pattern: o(/null|~/.source, "i"), lookbehind: !0, alias: "important" }, string: { pattern: o(s), lookbehind: !0, greedy: !0 }, number: { pattern: o(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, "i"), lookbehind: !0 }, tag: r, important: t, punctuation: /---|[:[\]{}\-,|>?]|\.\.\./ }, e.languages.yml = e.languages.yaml;
})(v), (function(e) {
  var t = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
  function r(p) {
    return p = p.replace(/<inner>/g, function() {
      return t;
    }), RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + p + ")");
  }
  var a = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source, n = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function() {
    return a;
  }), s = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source, o = (e.languages.markdown = e.languages.extend("markup", {}), e.languages.insertBefore("markdown", "prolog", { "front-matter-block": { pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/, lookbehind: !0, greedy: !0, inside: { punctuation: /^---|---$/, "front-matter": { pattern: /\S+(?:\s+\S+)*/, alias: ["yaml", "language-yaml"], inside: e.languages.yaml } } }, blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: "punctuation" }, table: { pattern: RegExp("^" + n + s + "(?:" + n + ")*", "m"), inside: { "table-data-rows": { pattern: RegExp("^(" + n + s + ")(?:" + n + ")*$"), lookbehind: !0, inside: { "table-data": { pattern: RegExp(a), inside: e.languages.markdown }, punctuation: /\|/ } }, "table-line": { pattern: RegExp("^(" + n + ")" + s + "$"), lookbehind: !0, inside: { punctuation: /\||:?-{3,}:?/ } }, "table-header-row": { pattern: RegExp("^" + n + "$"), inside: { "table-header": { pattern: RegExp(a), alias: "important", inside: e.languages.markdown }, punctuation: /\|/ } } } }, code: [{ pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/, lookbehind: !0, alias: "keyword" }, { pattern: /^```[\s\S]*?^```$/m, greedy: !0, inside: { "code-block": { pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m, lookbehind: !0 }, "code-language": { pattern: /^(```).+/, lookbehind: !0 }, punctuation: /```/ } }], title: [{ pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m, alias: "important", inside: { punctuation: /==+$|--+$/ } }, { pattern: /(^\s*)#.+/m, lookbehind: !0, alias: "important", inside: { punctuation: /^#+|#+$/ } }], hr: { pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m, lookbehind: !0, alias: "punctuation" }, list: { pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m, lookbehind: !0, alias: "punctuation" }, "url-reference": { pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/, inside: { variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 }, string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/, punctuation: /^[\[\]!:]|[<>]/ }, alias: "url" }, bold: { pattern: r(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source), lookbehind: !0, greedy: !0, inside: { content: { pattern: /(^..)[\s\S]+(?=..$)/, lookbehind: !0, inside: {} }, punctuation: /\*\*|__/ } }, italic: { pattern: r(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source), lookbehind: !0, greedy: !0, inside: { content: { pattern: /(^.)[\s\S]+(?=.$)/, lookbehind: !0, inside: {} }, punctuation: /[*_]/ } }, strike: { pattern: r(/(~~?)(?:(?!~)<inner>)+\2/.source), lookbehind: !0, greedy: !0, inside: { content: { pattern: /(^~~?)[\s\S]+(?=\1$)/, lookbehind: !0, inside: {} }, punctuation: /~~?/ } }, "code-snippet": { pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/, lookbehind: !0, greedy: !0, alias: ["code", "keyword"] }, url: { pattern: r(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source), lookbehind: !0, greedy: !0, inside: { operator: /^!/, content: { pattern: /(^\[)[^\]]+(?=\])/, lookbehind: !0, inside: {} }, variable: { pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/, lookbehind: !0 }, url: { pattern: /(^\]\()[^\s)]+/, lookbehind: !0 }, string: { pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/, lookbehind: !0 } } } }), ["url", "bold", "italic", "strike"].forEach(function(p) {
    ["url", "bold", "italic", "strike", "code-snippet"].forEach(function(f) {
      p !== f && (e.languages.markdown[p].inside.content.inside[f] = e.languages.markdown[f]);
    });
  }), e.hooks.add("after-tokenize", function(p) {
    p.language !== "markdown" && p.language !== "md" || (function f(b) {
      if (b && typeof b != "string")
        for (var w = 0, k = b.length; w < k; w++) {
          var i, l = b[w];
          l.type !== "code" ? f(l.content) : (i = l.content[1], l = l.content[3], i && l && i.type === "code-language" && l.type === "code-block" && typeof i.content == "string" && (i = i.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp"), i = "language-" + (i = (/[a-z][\w-]*/i.exec(i) || [""])[0].toLowerCase()), l.alias ? typeof l.alias == "string" ? l.alias = [l.alias, i] : l.alias.push(i) : l.alias = [i]));
        }
    })(p.tokens);
  }), e.hooks.add("wrap", function(p) {
    if (p.type === "code-block") {
      for (var f = "", b = 0, w = p.classes.length; b < w; b++) {
        var k = p.classes[b], k = /language-(.+)/.exec(k);
        if (k) {
          f = k[1];
          break;
        }
      }
      var i, l = e.languages[f];
      l ? p.content = e.highlight((function(g) {
        return g = g.replace(o, ""), g = g.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function(m, y) {
          var x;
          return (y = y.toLowerCase())[0] === "#" ? (x = y[1] === "x" ? parseInt(y.slice(2), 16) : Number(y.slice(1)), d(x)) : c[y] || m;
        });
      })(p.content), l, f) : f && f !== "none" && e.plugins.autoloader && (i = "md-" + (/* @__PURE__ */ new Date()).valueOf() + "-" + Math.floor(1e16 * Math.random()), p.attributes.id = i, e.plugins.autoloader.loadLanguages(f, function() {
        var g = document.getElementById(i);
        g && (g.innerHTML = e.highlight(g.textContent, e.languages[f], f));
      }));
    }
  }), RegExp(e.languages.markup.tag.pattern.source, "gi")), c = { amp: "&", lt: "<", gt: ">", quot: '"' }, d = String.fromCodePoint || String.fromCharCode;
  e.languages.md = e.languages.markdown;
})(v), v.languages.graphql = { comment: /#.*/, description: { pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i, greedy: !0, alias: "string", inside: { "language-markdown": { pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/, lookbehind: !0, inside: v.languages.markdown } } }, string: { pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/, greedy: !0 }, number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i, boolean: /\b(?:false|true)\b/, variable: /\$[a-z_]\w*/i, directive: { pattern: /@[a-z_]\w*/i, alias: "function" }, "attr-name": { pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i, greedy: !0 }, "atom-input": { pattern: /\b[A-Z]\w*Input\b/, alias: "class-name" }, scalar: /\b(?:Boolean|Float|ID|Int|String)\b/, constant: /\b[A-Z][A-Z_\d]*\b/, "class-name": { pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/, lookbehind: !0 }, fragment: { pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/, lookbehind: !0, alias: "function" }, "definition-mutation": { pattern: /(\bmutation\s+)[a-zA-Z_]\w*/, lookbehind: !0, alias: "function" }, "definition-query": { pattern: /(\bquery\s+)[a-zA-Z_]\w*/, lookbehind: !0, alias: "function" }, keyword: /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/, operator: /[!=|&]|\.{3}/, "property-query": /\w+(?=\s*\()/, object: /\w+(?=\s*\{)/, punctuation: /[!(){}\[\]:=,]/, property: /\w+/ }, v.hooks.add("after-tokenize", function(e) {
  if (e.language === "graphql")
    for (var t = e.tokens.filter(function(i) {
      return typeof i != "string" && i.type !== "comment" && i.type !== "scalar";
    }), r = 0; r < t.length; ) {
      var a = t[r++];
      if (a.type === "keyword" && a.content === "mutation") {
        var n = [];
        if (b(["definition-mutation", "punctuation"]) && f(1).content === "(") {
          r += 2;
          var s = w(/^\($/, /^\)$/);
          if (s === -1)
            continue;
          for (; r < s; r++) {
            var o = f(0);
            o.type === "variable" && (k(o, "variable-input"), n.push(o.content));
          }
          r = s + 1;
        }
        if (b(["punctuation", "property-query"]) && f(0).content === "{" && (r++, k(f(0), "property-mutation"), 0 < n.length)) {
          var c = w(/^\{$/, /^\}$/);
          if (c !== -1)
            for (var d = r; d < c; d++) {
              var p = t[d];
              p.type === "variable" && 0 <= n.indexOf(p.content) && k(p, "variable-input");
            }
        }
      }
    }
  function f(i) {
    return t[r + i];
  }
  function b(i, l) {
    l = l || 0;
    for (var g = 0; g < i.length; g++) {
      var m = f(g + l);
      if (!m || m.type !== i[g])
        return;
    }
    return 1;
  }
  function w(i, l) {
    for (var g = 1, m = r; m < t.length; m++) {
      var y = t[m], x = y.content;
      if (y.type === "punctuation" && typeof x == "string") {
        if (i.test(x))
          g++;
        else if (l.test(x) && --g === 0)
          return m;
      }
    }
    return -1;
  }
  function k(i, l) {
    var g = i.alias;
    g ? Array.isArray(g) || (i.alias = g = [g]) : i.alias = g = [], g.push(l);
  }
}), v.languages.sql = { comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/, lookbehind: !0 }, variable: [{ pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/, greedy: !0 }, /@[\w.$]+/], string: { pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/, greedy: !0, lookbehind: !0 }, identifier: { pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/, greedy: !0, lookbehind: !0, inside: { punctuation: /^`|`$/ } }, function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i, keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i, boolean: /\b(?:FALSE|NULL|TRUE)\b/i, number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i, operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i, punctuation: /[;[\]()`,.]/ }, (function(e) {
  var t = e.languages.javascript["template-string"], r = t.pattern.source, a = t.inside.interpolation, n = a.inside["interpolation-punctuation"], s = a.pattern.source;
  function o(b, w) {
    if (e.languages[b])
      return { pattern: RegExp("((?:" + w + ")\\s*)" + r), lookbehind: !0, greedy: !0, inside: { "template-punctuation": { pattern: /^`|`$/, alias: "string" }, "embedded-code": { pattern: /[\s\S]+/, alias: b } } };
  }
  function c(b, w, k) {
    return b = { code: b, grammar: w, language: k }, e.hooks.run("before-tokenize", b), b.tokens = e.tokenize(b.code, b.grammar), e.hooks.run("after-tokenize", b), b.tokens;
  }
  function d(b, w, k) {
    var g = e.tokenize(b, { interpolation: { pattern: RegExp(s), lookbehind: !0 } }), i = 0, l = {}, g = c(g.map(function(y) {
      if (typeof y == "string")
        return y;
      for (var x, E, y = y.content; b.indexOf((E = i++, x = "___" + k.toUpperCase() + "_" + E + "___")) !== -1; )
        ;
      return l[x] = y, x;
    }).join(""), w, k), m = Object.keys(l);
    return i = 0, (function y(x) {
      for (var E = 0; E < x.length; E++) {
        if (i >= m.length)
          return;
        var _, L, T, R, F, z, B, A = x[E];
        typeof A == "string" || typeof A.content == "string" ? (_ = m[i], (B = (z = typeof A == "string" ? A : A.content).indexOf(_)) !== -1 && (++i, L = z.substring(0, B), F = l[_], T = void 0, (R = {})["interpolation-punctuation"] = n, (R = e.tokenize(F, R)).length === 3 && ((T = [1, 1]).push.apply(T, c(R[1], e.languages.javascript, "javascript")), R.splice.apply(R, T)), T = new e.Token("interpolation", R, a.alias, F), R = z.substring(B + _.length), F = [], L && F.push(L), F.push(T), R && (y(z = [R]), F.push.apply(F, z)), typeof A == "string" ? (x.splice.apply(x, [E, 1].concat(F)), E += F.length - 1) : A.content = F)) : (B = A.content, Array.isArray(B) ? y(B) : y([B]));
      }
    })(g), new e.Token(k, g, "language-" + k, b);
  }
  e.languages.javascript["template-string"] = [o("css", /\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source), o("html", /\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source), o("svg", /\bsvg/.source), o("markdown", /\b(?:markdown|md)/.source), o("graphql", /\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source), o("sql", /\bsql/.source), t].filter(Boolean);
  var p = { javascript: !0, js: !0, typescript: !0, ts: !0, jsx: !0, tsx: !0 };
  function f(b) {
    return typeof b == "string" ? b : Array.isArray(b) ? b.map(f).join("") : f(b.content);
  }
  e.hooks.add("after-tokenize", function(b) {
    b.language in p && (function w(k) {
      for (var i = 0, l = k.length; i < l; i++) {
        var g, m, y, x = k[i];
        typeof x != "string" && (g = x.content, Array.isArray(g) ? x.type === "template-string" ? (x = g[1], g.length === 3 && typeof x != "string" && x.type === "embedded-code" && (m = f(x), x = x.alias, x = Array.isArray(x) ? x[0] : x, y = e.languages[x]) && (g[1] = d(m, y, x))) : w(g) : typeof g != "string" && w([g]));
      }
    })(b.tokens);
  });
})(v), (function(e) {
  e.languages.typescript = e.languages.extend("javascript", { "class-name": { pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/, lookbehind: !0, greedy: !0, inside: null }, builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/ }), e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/), delete e.languages.typescript.parameter, delete e.languages.typescript["literal-property"];
  var t = e.languages.extend("typescript", {});
  delete t["class-name"], e.languages.typescript["class-name"].inside = t, e.languages.insertBefore("typescript", "function", { decorator: { pattern: /@[$\w\xA0-\uFFFF]+/, inside: { at: { pattern: /^@/, alias: "operator" }, function: /^[\s\S]+/ } }, "generic-function": { pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/, greedy: !0, inside: { function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/, generic: { pattern: /<[\s\S]+/, alias: "class-name", inside: t } } } }), e.languages.ts = e.languages.typescript;
})(v), (function(e) {
  var t = e.languages.javascript, r = /\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})+\}/.source, a = "(@(?:arg|argument|param|property)\\s+(?:" + r + "\\s+)?)";
  e.languages.jsdoc = e.languages.extend("javadoclike", { parameter: { pattern: RegExp(a + /(?:(?!\s)[$\w\xA0-\uFFFF.])+(?=\s|$)/.source), lookbehind: !0, inside: { punctuation: /\./ } } }), e.languages.insertBefore("jsdoc", "keyword", { "optional-parameter": { pattern: RegExp(a + /\[(?:(?!\s)[$\w\xA0-\uFFFF.])+(?:=[^[\]]+)?\](?=\s|$)/.source), lookbehind: !0, inside: { parameter: { pattern: /(^\[)[$\w\xA0-\uFFFF\.]+/, lookbehind: !0, inside: { punctuation: /\./ } }, code: { pattern: /(=)[\s\S]*(?=\]$)/, lookbehind: !0, inside: t, alias: "language-javascript" }, punctuation: /[=[\]]/ } }, "class-name": [{ pattern: RegExp(/(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\s+(?:<TYPE>\s+)?)[A-Z]\w*(?:\.[A-Z]\w*)*/.source.replace(/<TYPE>/g, function() {
    return r;
  })), lookbehind: !0, inside: { punctuation: /\./ } }, { pattern: RegExp("(@[a-z]+\\s+)" + r), lookbehind: !0, inside: { string: t.string, number: t.number, boolean: t.boolean, keyword: e.languages.typescript.keyword, operator: /=>|\.\.\.|[&|?:*]/, punctuation: /[.,;=<>{}()[\]]/ } }], example: { pattern: /(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/, lookbehind: !0, inside: { code: { pattern: /^([\t ]*(?:\*\s*)?)\S.*$/m, lookbehind: !0, inside: t, alias: "language-javascript" } } } }), e.languages.javadoclike.addSupport("javascript", e.languages.jsdoc);
})(v), (function(e) {
  e.languages.flow = e.languages.extend("javascript", {}), e.languages.insertBefore("flow", "keyword", { type: [{ pattern: /\b(?:[Bb]oolean|Function|[Nn]umber|[Ss]tring|[Ss]ymbol|any|mixed|null|void)\b/, alias: "class-name" }] }), e.languages.flow["function-variable"].pattern = /(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/i, delete e.languages.flow.parameter, e.languages.insertBefore("flow", "operator", { "flow-punctuation": { pattern: /\{\||\|\}/, alias: "punctuation" } }), Array.isArray(e.languages.flow.keyword) || (e.languages.flow.keyword = [e.languages.flow.keyword]), e.languages.flow.keyword.unshift({ pattern: /(^|[^$]\b)(?:Class|declare|opaque|type)\b(?!\$)/, lookbehind: !0 }, { pattern: /(^|[^$]\B)\$(?:Diff|Enum|Exact|Keys|ObjMap|PropertyType|Record|Shape|Subtype|Supertype|await)\b(?!\$)/, lookbehind: !0 });
})(v), v.languages.n4js = v.languages.extend("javascript", { keyword: /\b(?:Array|any|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/ }), v.languages.insertBefore("n4js", "constant", { annotation: { pattern: /@+\w+/, alias: "operator" } }), v.languages.n4jsd = v.languages.n4js, (function(e) {
  function t(o, c) {
    return RegExp(o.replace(/<ID>/g, function() {
      return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source;
    }), c);
  }
  e.languages.insertBefore("javascript", "function-variable", { "method-variable": { pattern: RegExp("(\\.\\s*)" + e.languages.javascript["function-variable"].pattern.source), lookbehind: !0, alias: ["function-variable", "method", "function", "property-access"] } }), e.languages.insertBefore("javascript", "function", { method: { pattern: RegExp("(\\.\\s*)" + e.languages.javascript.function.source), lookbehind: !0, alias: ["function", "property-access"] } }), e.languages.insertBefore("javascript", "constant", { "known-class-name": [{ pattern: /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/, alias: "class-name" }, { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: "class-name" }] }), e.languages.insertBefore("javascript", "keyword", { imports: { pattern: t(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source), lookbehind: !0, inside: e.languages.javascript }, exports: { pattern: t(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source), lookbehind: !0, inside: e.languages.javascript } }), e.languages.javascript.keyword.unshift({ pattern: /\b(?:as|default|export|from|import)\b/, alias: "module" }, { pattern: /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/, alias: "control-flow" }, { pattern: /\bnull\b/, alias: ["null", "nil"] }, { pattern: /\bundefined\b/, alias: "nil" }), e.languages.insertBefore("javascript", "operator", { spread: { pattern: /\.{3}/, alias: "operator" }, arrow: { pattern: /=>/, alias: "operator" } }), e.languages.insertBefore("javascript", "punctuation", { "property-access": { pattern: t(/(\.\s*)#?<ID>/.source), lookbehind: !0 }, "maybe-class-name": { pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/, lookbehind: !0 }, dom: { pattern: /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/, alias: "variable" }, console: { pattern: /\bconsole(?=\s*\.)/, alias: "class-name" } });
  for (var r = ["function", "function-variable", "method", "method-variable", "property-access"], a = 0; a < r.length; a++) {
    var s = r[a], n = e.languages.javascript[s], s = (n = e.util.type(n) === "RegExp" ? e.languages.javascript[s] = { pattern: n } : n).inside || {};
    (n.inside = s)["maybe-class-name"] = /^[A-Z][\s\S]*/;
  }
})(v), (function(e) {
  var t = e.util.clone(e.languages.javascript), r = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source, a = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source, n = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
  function s(d, p) {
    return d = d.replace(/<S>/g, function() {
      return r;
    }).replace(/<BRACES>/g, function() {
      return a;
    }).replace(/<SPREAD>/g, function() {
      return n;
    }), RegExp(d, p);
  }
  n = s(n).source, e.languages.jsx = e.languages.extend("markup", t), e.languages.jsx.tag.pattern = s(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source), e.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/, e.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/, e.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, e.languages.jsx.tag.inside.comment = t.comment, e.languages.insertBefore("inside", "attr-name", { spread: { pattern: s(/<SPREAD>/.source), inside: e.languages.jsx } }, e.languages.jsx.tag), e.languages.insertBefore("inside", "special-attr", { script: { pattern: s(/=<BRACES>/.source), alias: "language-javascript", inside: { "script-punctuation": { pattern: /^=(?=\{)/, alias: "punctuation" }, rest: e.languages.jsx } } }, e.languages.jsx.tag);
  function o(d) {
    for (var p = [], f = 0; f < d.length; f++) {
      var b = d[f], w = !1;
      typeof b != "string" && (b.type === "tag" && b.content[0] && b.content[0].type === "tag" ? b.content[0].content[0].content === "</" ? 0 < p.length && p[p.length - 1].tagName === c(b.content[0].content[1]) && p.pop() : b.content[b.content.length - 1].content !== "/>" && p.push({ tagName: c(b.content[0].content[1]), openedBraces: 0 }) : 0 < p.length && b.type === "punctuation" && b.content === "{" ? p[p.length - 1].openedBraces++ : 0 < p.length && 0 < p[p.length - 1].openedBraces && b.type === "punctuation" && b.content === "}" ? p[p.length - 1].openedBraces-- : w = !0), (w || typeof b == "string") && 0 < p.length && p[p.length - 1].openedBraces === 0 && (w = c(b), f < d.length - 1 && (typeof d[f + 1] == "string" || d[f + 1].type === "plain-text") && (w += c(d[f + 1]), d.splice(f + 1, 1)), 0 < f && (typeof d[f - 1] == "string" || d[f - 1].type === "plain-text") && (w = c(d[f - 1]) + w, d.splice(f - 1, 1), f--), d[f] = new e.Token("plain-text", w, null, w)), b.content && typeof b.content != "string" && o(b.content);
    }
  }
  var c = function(d) {
    return d ? typeof d == "string" ? d : typeof d.content == "string" ? d.content : d.content.map(c).join("") : "";
  };
  e.hooks.add("after-tokenize", function(d) {
    d.language !== "jsx" && d.language !== "tsx" || o(d.tokens);
  });
})(v), (function(e) {
  var t = e.util.clone(e.languages.typescript), t = (e.languages.tsx = e.languages.extend("jsx", t), delete e.languages.tsx.parameter, delete e.languages.tsx["literal-property"], e.languages.tsx.tag);
  t.pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + "(?:" + t.pattern.source + ")", t.pattern.flags), t.lookbehind = !0;
})(v), v.languages.swift = { comment: { pattern: /(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/, lookbehind: !0, greedy: !0 }, "string-literal": [{ pattern: RegExp(/(^|[^"#])/.source + "(?:" + /"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/.source + "|" + /"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/.source + ")" + /(?!["#])/.source), lookbehind: !0, greedy: !0, inside: { interpolation: { pattern: /(\\\()(?:[^()]|\([^()]*\))*(?=\))/, lookbehind: !0, inside: null }, "interpolation-punctuation": { pattern: /^\)|\\\($/, alias: "punctuation" }, punctuation: /\\(?=[\r\n])/, string: /[\s\S]+/ } }, { pattern: RegExp(/(^|[^"#])(#+)/.source + "(?:" + /"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/.source + "|" + /"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/.source + ")\\2"), lookbehind: !0, greedy: !0, inside: { interpolation: { pattern: /(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/, lookbehind: !0, inside: null }, "interpolation-punctuation": { pattern: /^\)|\\#+\($/, alias: "punctuation" }, string: /[\s\S]+/ } }], directive: { pattern: RegExp(/#/.source + "(?:" + /(?:elseif|if)\b/.source + "(?:[ 	]*" + /(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/.source + ")+|" + /(?:else|endif)\b/.source + ")"), alias: "property", inside: { "directive-name": /^#\w+/, boolean: /\b(?:false|true)\b/, number: /\b\d+(?:\.\d+)*\b/, operator: /!|&&|\|\||[<>]=?/, punctuation: /[(),]/ } }, literal: { pattern: /#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/, alias: "constant" }, "other-directive": { pattern: /#\w+\b/, alias: "property" }, attribute: { pattern: /@\w+/, alias: "atrule" }, "function-definition": { pattern: /(\bfunc\s+)\w+/, lookbehind: !0, alias: "function" }, label: { pattern: /\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/, lookbehind: !0, alias: "important" }, keyword: /\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/, boolean: /\b(?:false|true)\b/, nil: { pattern: /\bnil\b/, alias: "constant" }, "short-argument": /\$\d+\b/, omit: { pattern: /\b_\b/, alias: "keyword" }, number: /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i, "class-name": /\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/, function: /\b[a-z_]\w*(?=\s*\()/i, constant: /\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/, operator: /[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/, punctuation: /[{}[\]();,.:\\]/ }, v.languages.swift["string-literal"].forEach(function(e) {
  e.inside.interpolation.inside = v.languages.swift;
}), (function(e) {
  e.languages.kotlin = e.languages.extend("clike", { keyword: { pattern: /(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/, lookbehind: !0 }, function: [{ pattern: /(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/, greedy: !0 }, { pattern: /(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/, lookbehind: !0, greedy: !0 }], number: /\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/, operator: /\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/ }), delete e.languages.kotlin["class-name"];
  var t = { "interpolation-punctuation": { pattern: /^\$\{?|\}$/, alias: "punctuation" }, expression: { pattern: /[\s\S]+/, inside: e.languages.kotlin } };
  e.languages.insertBefore("kotlin", "string", { "string-literal": [{ pattern: /"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/, alias: "multiline", inside: { interpolation: { pattern: /\$(?:[a-z_]\w*|\{[^{}]*\})/i, inside: t }, string: /[\s\S]+/ } }, { pattern: /"(?:[^"\\\r\n$]|\\.|\$(?:(?!\{)|\{[^{}]*\}))*"/, alias: "singleline", inside: { interpolation: { pattern: /((?:^|[^\\])(?:\\{2})*)\$(?:[a-z_]\w*|\{[^{}]*\})/i, lookbehind: !0, inside: t }, string: /[\s\S]+/ } }], char: { pattern: /'(?:[^'\\\r\n]|\\(?:.|u[a-fA-F0-9]{0,4}))'/, greedy: !0 } }), delete e.languages.kotlin.string, e.languages.insertBefore("kotlin", "keyword", { annotation: { pattern: /\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/, alias: "builtin" } }), e.languages.insertBefore("kotlin", "function", { label: { pattern: /\b\w+@|@\w+\b/, alias: "symbol" } }), e.languages.kt = e.languages.kotlin, e.languages.kts = e.languages.kotlin;
})(v), v.languages.c = v.languages.extend("clike", { comment: { pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 }, string: { pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/, greedy: !0 }, "class-name": { pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/, lookbehind: !0 }, keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/, function: /\b[a-z_]\w*(?=\s*\()/i, number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i, operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/ }), v.languages.insertBefore("c", "string", { char: { pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/, greedy: !0 } }), v.languages.insertBefore("c", "string", { macro: { pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im, lookbehind: !0, greedy: !0, alias: "property", inside: { string: [{ pattern: /^(#\s*include\s*)<[^>]+>/, lookbehind: !0 }, v.languages.c.string], char: v.languages.c.char, comment: v.languages.c.comment, "macro-name": [{ pattern: /(^#\s*define\s+)\w+\b(?!\()/i, lookbehind: !0 }, { pattern: /(^#\s*define\s+)\w+\b(?=\()/i, lookbehind: !0, alias: "function" }], directive: { pattern: /^(#\s*)[a-z]+/, lookbehind: !0, alias: "keyword" }, "directive-hash": /^#/, punctuation: /##|\\(?=[\r\n])/, expression: { pattern: /\S[\s\S]*/, inside: v.languages.c } } } }), v.languages.insertBefore("c", "function", { constant: /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/ }), delete v.languages.c.boolean, v.languages.objectivec = v.languages.extend("c", { string: { pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/, greedy: !0 }, keyword: /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/, operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/ }), delete v.languages.objectivec["class-name"], v.languages.objc = v.languages.objectivec, v.languages.reason = v.languages.extend("clike", { string: { pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/, greedy: !0 }, "class-name": /\b[A-Z]\w*/, keyword: /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/, operator: /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/ }), v.languages.insertBefore("reason", "class-name", { char: { pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/, greedy: !0 }, constructor: /\b[A-Z]\w*\b(?!\s*\.)/, label: { pattern: /\b[a-z]\w*(?=::)/, alias: "symbol" } }), delete v.languages.reason.function, (function(e) {
  for (var t = /\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source, r = 0; r < 2; r++)
    t = t.replace(/<self>/g, function() {
      return t;
    });
  t = t.replace(/<self>/g, function() {
    return /[^\s\S]/.source;
  }), e.languages.rust = { comment: [{ pattern: RegExp(/(^|[^\\])/.source + t), lookbehind: !0, greedy: !0 }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }], string: { pattern: /b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/, greedy: !0 }, char: { pattern: /b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/, greedy: !0 }, attribute: { pattern: /#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/, greedy: !0, alias: "attr-name", inside: { string: null } }, "closure-params": { pattern: /([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/, lookbehind: !0, greedy: !0, inside: { "closure-punctuation": { pattern: /^\||\|$/, alias: "punctuation" }, rest: null } }, "lifetime-annotation": { pattern: /'\w+/, alias: "symbol" }, "fragment-specifier": { pattern: /(\$\w+:)[a-z]+/, lookbehind: !0, alias: "punctuation" }, variable: /\$\w+/, "function-definition": { pattern: /(\bfn\s+)\w+/, lookbehind: !0, alias: "function" }, "type-definition": { pattern: /(\b(?:enum|struct|trait|type|union)\s+)\w+/, lookbehind: !0, alias: "class-name" }, "module-declaration": [{ pattern: /(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/, lookbehind: !0, alias: "namespace" }, { pattern: /(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/, lookbehind: !0, alias: "namespace", inside: { punctuation: /::/ } }], keyword: [/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/, /\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/], function: /\b[a-z_]\w*(?=\s*(?:::\s*<|\())/, macro: { pattern: /\b\w+!/, alias: "property" }, constant: /\b[A-Z_][A-Z_\d]+\b/, "class-name": /\b[A-Z]\w*\b/, namespace: { pattern: /(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/, inside: { punctuation: /::/ } }, number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/, boolean: /\b(?:false|true)\b/, punctuation: /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/, operator: /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/ }, e.languages.rust["closure-params"].inside.rest = e.languages.rust, e.languages.rust.attribute.inside.string = e.languages.rust.string;
})(v), v.languages.go = v.languages.extend("clike", { string: { pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/, lookbehind: !0, greedy: !0 }, keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/, boolean: /\b(?:_|false|iota|nil|true)\b/, number: [/\b0(?:b[01_]+|o[0-7_]+)i?\b/i, /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i, /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i], operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./, builtin: /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/ }), v.languages.insertBefore("go", "string", { char: { pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/, greedy: !0 } }), delete v.languages.go["class-name"], (function(e) {
  var t = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/, r = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function() {
    return t.source;
  });
  e.languages.cpp = e.languages.extend("c", { "class-name": [{ pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, function() {
    return t.source;
  })), lookbehind: !0 }, /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/, /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i, /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/], keyword: t, number: { pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i, greedy: !0 }, operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/, boolean: /\b(?:false|true)\b/ }), e.languages.insertBefore("cpp", "string", { module: { pattern: RegExp(/(\b(?:import|module)\s+)/.source + "(?:" + /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source + "|" + /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, function() {
    return r;
  }) + ")"), lookbehind: !0, greedy: !0, inside: { string: /^[<"][\s\S]+/, operator: /:/, punctuation: /\./ } }, "raw-string": { pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/, alias: "string", greedy: !0 } }), e.languages.insertBefore("cpp", "keyword", { "generic-function": { pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i, inside: { function: /^\w+/, generic: { pattern: /<[\s\S]+/, alias: "class-name", inside: e.languages.cpp } } } }), e.languages.insertBefore("cpp", "operator", { "double-colon": { pattern: /::/, alias: "punctuation" } }), e.languages.insertBefore("cpp", "class-name", { "base-clause": { pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/, lookbehind: !0, greedy: !0, inside: e.languages.extend("cpp", {}) } }), e.languages.insertBefore("inside", "double-colon", { "class-name": /\b[a-z_]\w*\b(?!\s*::)/i }, e.languages.cpp["base-clause"]);
})(v), v.languages.python = { comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0, greedy: !0 }, "string-interpolation": { pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i, greedy: !0, inside: { interpolation: { pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/, lookbehind: !0, inside: { "format-spec": { pattern: /(:)[^:(){}]+(?=\}$)/, lookbehind: !0 }, "conversion-option": { pattern: /![sra](?=[:}]$)/, alias: "punctuation" }, rest: null } }, string: /[\s\S]+/ } }, "triple-quoted-string": { pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i, greedy: !0, alias: "string" }, string: { pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i, greedy: !0 }, function: { pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g, lookbehind: !0 }, "class-name": { pattern: /(\bclass\s+)\w+/i, lookbehind: !0 }, decorator: { pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m, lookbehind: !0, alias: ["annotation", "punctuation"], inside: { punctuation: /\./ } }, keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/, builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/, boolean: /\b(?:False|None|True)\b/, number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i, operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/, punctuation: /[{}[\];(),.:]/ }, v.languages.python["string-interpolation"].inside.interpolation.inside.rest = v.languages.python, v.languages.py = v.languages.python, v.languages.json = { property: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, lookbehind: !0, greedy: !0 }, string: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, lookbehind: !0, greedy: !0 }, comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 }, number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i, punctuation: /[{}[\],]/, operator: /:/, boolean: /\b(?:false|true)\b/, null: { pattern: /\bnull\b/, alias: "keyword" } }, v.languages.webmanifest = v.languages.json;
var wt = {};
Ua(wt, {
  dracula: () => Ka,
  duotoneDark: () => Xa,
  duotoneLight: () => Ja,
  github: () => tn,
  gruvboxMaterialDark: () => In,
  gruvboxMaterialLight: () => Ln,
  jettwaveDark: () => Nn,
  jettwaveLight: () => Sn,
  nightOwl: () => an,
  nightOwlLight: () => on,
  oceanicNext: () => ln,
  okaidia: () => dn,
  oneDark: () => Cn,
  oneLight: () => Tn,
  palenight: () => pn,
  shadesOfPurple: () => fn,
  synthwave84: () => mn,
  ultramin: () => hn,
  vsDark: () => kt,
  vsLight: () => wn
});
var qa = {
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
}, Ka = qa, Ya = {
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
}, Xa = Ya, Qa = {
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
}, Ja = Qa, en = {
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
}, tn = en, rn = {
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
}, an = rn, nn = {
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
}, on = nn, K = {
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
}, sn = {
  plain: {
    backgroundColor: "#282c34",
    color: "#ffffff"
  },
  styles: [
    {
      types: ["attr-name"],
      style: {
        color: K.keyword
      }
    },
    {
      types: ["attr-value"],
      style: {
        color: K.string
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
        color: K.comment
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
        color: K.primitive
      }
    },
    {
      types: ["boolean"],
      style: {
        color: K.boolean
      }
    },
    {
      types: ["tag"],
      style: {
        color: K.tag
      }
    },
    {
      types: ["string"],
      style: {
        color: K.string
      }
    },
    {
      types: ["punctuation"],
      style: {
        color: K.string
      }
    },
    {
      types: ["selector", "char", "builtin", "inserted"],
      style: {
        color: K.char
      }
    },
    {
      types: ["function"],
      style: {
        color: K.function
      }
    },
    {
      types: ["operator", "entity", "url", "variable"],
      style: {
        color: K.variable
      }
    },
    {
      types: ["keyword"],
      style: {
        color: K.keyword
      }
    },
    {
      types: ["atrule", "class-name"],
      style: {
        color: K.className
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
}, ln = sn, cn = {
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
}, dn = cn, un = {
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
}, pn = un, gn = {
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
}, fn = gn, bn = {
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
}, mn = bn, yn = {
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
}, hn = yn, vn = {
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
}, kt = vn, xn = {
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
}, wn = xn, kn = {
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
}, Nn = kn, En = {
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
}, Sn = En, An = {
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
}, Cn = An, _n = {
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
}, Tn = _n, Fn = {
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
}, In = Fn, Rn = {
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
}, Ln = Rn, On = (e) => Ne(
  (t) => {
    var r = t, { className: a, style: n, line: s } = r, o = xt(r, ["className", "style", "line"]);
    const c = ve(Q({}, o), {
      className: me("token-line", a)
    });
    return typeof e == "object" && "plain" in e && (c.style = e.plain), typeof n == "object" && (c.style = Q(Q({}, c.style || {}), n)), c;
  },
  [e]
), Dn = (e) => {
  const t = Ne(
    ({ types: r, empty: a }) => {
      if (e != null) {
        {
          if (r.length === 1 && r[0] === "plain")
            return a != null ? { display: "inline-block" } : void 0;
          if (r.length === 1 && a != null)
            return e[r[0]];
        }
        return Object.assign(
          a != null ? { display: "inline-block" } : {},
          ...r.map((n) => e[n])
        );
      }
    },
    [e]
  );
  return Ne(
    (r) => {
      var a = r, { token: n, className: s, style: o } = a, c = xt(a, ["token", "className", "style"]);
      const d = ve(Q({}, c), {
        className: me("token", ...n.types, s),
        children: n.content,
        style: t(n)
      });
      return o != null && (d.style = Q(Q({}, d.style || {}), o)), d;
    },
    [t]
  );
}, zn = /\r\n|\r|\n/, Ge = (e) => {
  e.length === 0 ? e.push({
    types: ["plain"],
    content: `
`,
    empty: !0
  }) : e.length === 1 && e[0].content === "" && (e[0].content = `
`, e[0].empty = !0);
}, Ue = (e, t) => {
  const r = e.length;
  return r > 0 && e[r - 1] === t ? e : e.concat(t);
}, $n = (e) => {
  const t = [[]], r = [e], a = [0], n = [e.length];
  let s = 0, o = 0, c = [];
  const d = [c];
  for (; o > -1; ) {
    for (; (s = a[o]++) < n[o]; ) {
      let p, f = t[o];
      const w = r[o][s];
      if (typeof w == "string" ? (f = o > 0 ? f : ["plain"], p = w) : (f = Ue(f, w.type), w.alias && (f = Ue(f, w.alias)), p = w.content), typeof p != "string") {
        o++, t.push(f), r.push(p), a.push(0), n.push(p.length);
        continue;
      }
      const k = p.split(zn), i = k.length;
      c.push({
        types: f,
        content: k[0]
      });
      for (let l = 1; l < i; l++)
        Ge(c), d.push(c = []), c.push({
          types: f,
          content: k[l]
        });
    }
    o--, t.pop(), r.pop(), a.pop(), n.pop();
  }
  return Ge(c), d;
}, He = $n, Bn = ({ prism: e, code: t, grammar: r, language: a }) => Nt(() => {
  if (r == null)
    return He([t]);
  const n = {
    code: t,
    grammar: r,
    language: a,
    tokens: []
  };
  return e.hooks.run("before-tokenize", n), n.tokens = e.tokenize(t, r), e.hooks.run("after-tokenize", n), He(n.tokens);
}, [
  t,
  r,
  a,
  // prism is a stable import
  e
]), jn = (e, t) => {
  const { plain: r } = e, a = e.styles.reduce((n, s) => {
    const { languages: o, style: c } = s;
    return o && !o.includes(t) || s.types.forEach((d) => {
      const p = Q(Q({}, n[d]), c);
      n[d] = p;
    }), n;
  }, {});
  return a.root = r, a.plain = ve(Q({}, r), { backgroundColor: void 0 }), a;
}, Pn = jn, Mn = ({
  children: e,
  language: t,
  code: r,
  theme: a,
  prism: n
}) => {
  const s = t.toLowerCase(), o = Pn(a, s), c = On(o), d = Dn(o), p = n.languages[s], f = Bn({ prism: n, language: s, code: r, grammar: p });
  return e({
    tokens: f,
    className: `prism-code language-${s}`,
    style: o != null ? o.root : {},
    getLineProps: c,
    getTokenProps: d
  });
}, Vn = (e) => pe(Mn, ve(Q({}, e), {
  prism: e.prism || v,
  theme: e.theme || kt,
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
const Gn = O(
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
), Un = h.forwardRef(
  ({
    className: e,
    size: t,
    code: r,
    language: a = "typescript",
    showLineNumbers: n = !1,
    copyable: s = !0,
    filename: o,
    collapsible: c = !1,
    defaultCollapsed: d = !1,
    maxHeight: p,
    highlightLines: f,
    ...b
  }, w) => {
    const [k, i] = h.useState(!1), [l, g] = h.useState(d), m = () => {
      navigator.clipboard.writeText(r).then(() => {
        i(!0), setTimeout(() => {
          i(!1);
        }, 2e3);
      }).catch((E) => {
        console.error("Failed to copy code:", E);
      });
    }, x = ((E) => {
      if (!E) return /* @__PURE__ */ new Set();
      if (Array.isArray(E)) return new Set(E);
      const _ = /* @__PURE__ */ new Set();
      return E.split(",").forEach((T) => {
        const R = T.trim();
        if (R.includes("-")) {
          const F = R.split("-"), z = Number(F[0]), B = Number(F[1]);
          if (!isNaN(z) && !isNaN(B))
            for (let A = z; A <= B; A++)
              _.add(A);
        } else {
          const F = Number(R);
          isNaN(F) || _.add(F);
        }
      }), _;
    })(f);
    return /* @__PURE__ */ S("div", { ref: w, className: N(Gn({ size: t }), e), ...b, children: [
      (o || c) && /* @__PURE__ */ S("div", { className: "flex items-center justify-between border-b border-slate-800 bg-slate-900/50 px-4 py-2", children: [
        /* @__PURE__ */ S("div", { className: "flex items-center gap-2", children: [
          o && /* @__PURE__ */ u("span", { className: "font-mono text-xs text-slate-400", children: o }),
          c && /* @__PURE__ */ u(
            "button",
            {
              onClick: () => {
                g(!l);
              },
              className: "ml-2 rounded p-1 text-slate-400 transition-colors hover:bg-slate-800 hover:text-slate-200",
              "aria-label": l ? "Expand code" : "Collapse code",
              children: l ? /* @__PURE__ */ u(Ae, { className: "h-4 w-4" }) : /* @__PURE__ */ u(Ke, { className: "h-4 w-4" })
            }
          )
        ] }),
        s && !l && /* @__PURE__ */ u(
          "button",
          {
            onClick: m,
            className: "flex items-center gap-1.5 rounded px-2 py-1 text-xs text-slate-400 transition-colors hover:bg-slate-800 hover:text-slate-200",
            "aria-label": "Copy code to clipboard",
            children: k ? /* @__PURE__ */ S(de, { children: [
              /* @__PURE__ */ u(Ee, { className: "h-3.5 w-3.5" }),
              /* @__PURE__ */ u("span", { children: "Copied!" })
            ] }) : /* @__PURE__ */ S(de, { children: [
              /* @__PURE__ */ u(Le, { className: "h-3.5 w-3.5" }),
              /* @__PURE__ */ u("span", { children: "Copy" })
            ] })
          }
        )
      ] }),
      !l && /* @__PURE__ */ u(
        "div",
        {
          className: "overflow-auto",
          style: p ? { maxHeight: `${p}px` } : void 0,
          children: /* @__PURE__ */ u(Vn, { theme: wt.nightOwl, code: r.trim(), language: a, children: ({ className: E, style: _, tokens: L, getLineProps: T, getTokenProps: R }) => /* @__PURE__ */ u("pre", { className: N("p-4 font-mono", E), style: _, children: L.map((F, z) => {
            const B = z + 1, A = x.has(B), q = T({ line: F });
            return /* @__PURE__ */ S(
              "div",
              {
                ...q,
                className: N(
                  q.className,
                  "table-row",
                  A && "bg-blue-500/10"
                ),
                children: [
                  n && /* @__PURE__ */ u("span", { className: "table-cell w-8 pr-4 text-right text-slate-500 select-none", children: B }),
                  /* @__PURE__ */ u("span", { className: "table-cell", children: F.map(($, G) => /* @__PURE__ */ u("span", { ...R({ token: $ }) }, G)) })
                ]
              },
              z
            );
          }) }) })
        }
      ),
      s && !o && !c && /* @__PURE__ */ u(
        "button",
        {
          onClick: m,
          className: "absolute top-2 right-2 rounded bg-slate-800/80 p-2 text-slate-400 backdrop-blur-sm transition-colors hover:bg-slate-700 hover:text-slate-200",
          "aria-label": "Copy code to clipboard",
          children: k ? /* @__PURE__ */ u(Ee, { className: "h-4 w-4" }) : /* @__PURE__ */ u(Le, { className: "h-4 w-4" })
        }
      )
    ] });
  }
);
Un.displayName = "CodeBlock";
const Hn = O("w-full caption-bottom text-sm", {
  variants: {
    variant: {
      default: "border-collapse",
      striped: "border-collapse"
    },
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "md"
  }
}), Zn = h.forwardRef(
  ({
    className: e,
    variant: t,
    size: r,
    columns: a,
    data: n,
    selectable: s = !1,
    selectedRows: o = /* @__PURE__ */ new Set(),
    onSelectionChange: c,
    sortable: d = !1,
    sortColumn: p,
    sortDirection: f,
    onSortChange: b,
    paginate: w = !1,
    currentPage: k = 0,
    pageSize: i = 10,
    totalItems: l,
    onPageChange: g,
    onPageSizeChange: m,
    filterable: y = !1,
    filterValue: x = "",
    onFilterChange: E,
    emptyMessage: _ = "No data available",
    stickyHeader: L = !1,
    getRowId: T = (A, q) => String(q),
    getRowClassName: R,
    onRowClick: F,
    ...z
  }, B) => {
    const A = a.filter((C) => !C.hidden), q = (C) => {
      if (c)
        if (C) {
          const j = n.map((V, X) => T(V, X));
          c(new Set(j));
        } else
          c(/* @__PURE__ */ new Set());
    }, $ = (C, j) => {
      if (!c) return;
      const V = new Set(o);
      j ? V.add(C) : V.delete(C), c(V);
    }, G = (C) => {
      if (!b) return;
      let j = "asc";
      p === C && (f === "asc" ? j = "desc" : f === "desc" && (j = null)), b(C, j);
    }, U = Math.ceil(l ? l / i : n.length / i), D = k * i, M = Math.min(D + i, l ?? n.length), Z = w ? n.slice(D, M) : n, H = Z.length > 0 && Z.every((C, j) => o.has(T(C, D + j)));
    return /* @__PURE__ */ S("div", { ref: B, className: N("w-full", e), ...z, children: [
      y && /* @__PURE__ */ u("div", { className: "mb-4", children: /* @__PURE__ */ u(
        "input",
        {
          type: "text",
          placeholder: "Filter...",
          value: x,
          onChange: (C) => E == null ? void 0 : E(C.target.value),
          className: "w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800",
          "aria-label": "Filter table data"
        }
      ) }),
      /* @__PURE__ */ u("div", { className: "overflow-auto rounded-md border border-slate-200 dark:border-slate-800", children: /* @__PURE__ */ S("table", { className: N(Hn({ variant: t, size: r })), children: [
        /* @__PURE__ */ u(
          "thead",
          {
            className: N("bg-slate-50 dark:bg-slate-900", L && "sticky top-0 z-10"),
            children: /* @__PURE__ */ S("tr", { children: [
              s && /* @__PURE__ */ u("th", { className: "w-12 px-4 py-3 text-left", children: /* @__PURE__ */ u(
                "input",
                {
                  type: "checkbox",
                  checked: H,
                  onChange: (C) => {
                    q(C.target.checked);
                  },
                  "aria-label": "Select all rows",
                  className: "h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-slate-700"
                }
              ) }),
              A.map((C) => {
                const j = d && C.sortable !== !1, V = p === C.id, X = V ? f === "asc" ? /* @__PURE__ */ u(Ke, { className: "ml-1 h-4 w-4", "aria-hidden": "true" }) : /* @__PURE__ */ u(Ae, { className: "ml-1 h-4 w-4", "aria-hidden": "true" }) : /* @__PURE__ */ u(_t, { className: "ml-1 h-4 w-4 opacity-50", "aria-hidden": "true" });
                return /* @__PURE__ */ u(
                  "th",
                  {
                    className: N(
                      "px-4 py-3 font-medium",
                      C.align === "center" && "text-center",
                      C.align === "right" && "text-right",
                      !C.align && "text-left"
                    ),
                    style: { width: C.width },
                    children: j ? /* @__PURE__ */ S(
                      "button",
                      {
                        onClick: () => {
                          G(C.id);
                        },
                        className: "inline-flex items-center font-medium hover:text-blue-600 dark:hover:text-blue-400",
                        "aria-label": `Sort by ${C.header}${V ? ` (currently sorted ${f === "asc" ? "ascending" : "descending"})` : ""}`,
                        "aria-sort": V ? f === "asc" ? "ascending" : "descending" : "none",
                        children: [
                          C.header,
                          X
                        ]
                      }
                    ) : C.header
                  },
                  C.id
                );
              })
            ] })
          }
        ),
        /* @__PURE__ */ u("tbody", { children: Z.length === 0 ? /* @__PURE__ */ u("tr", { children: /* @__PURE__ */ u(
          "td",
          {
            colSpan: A.length + (s ? 1 : 0),
            className: "px-4 py-8 text-center text-slate-500 dark:text-slate-400",
            children: _
          }
        ) }) : Z.map((C, j) => {
          const V = T(C, D + j), X = o.has(V), ue = R == null ? void 0 : R(C, D + j);
          return /* @__PURE__ */ S(
            "tr",
            {
              className: N(
                "border-t border-slate-200 dark:border-slate-800",
                t === "striped" && j % 2 === 1 && "bg-slate-50 dark:bg-slate-900",
                X && "bg-blue-50 dark:bg-blue-950",
                F && "cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800",
                ue
              ),
              onClick: () => F == null ? void 0 : F(C, D + j),
              children: [
                s && /* @__PURE__ */ u("td", { className: "px-4 py-3", children: /* @__PURE__ */ u(
                  "input",
                  {
                    type: "checkbox",
                    checked: X,
                    onChange: (W) => {
                      W.stopPropagation(), $(V, W.target.checked);
                    },
                    "aria-label": `Select row ${j + 1}`,
                    className: "h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-slate-700"
                  }
                ) }),
                A.map((W) => {
                  const re = typeof W.accessor == "function" ? W.accessor(C) : C[W.accessor], xe = W.cell ? W.cell(re, C, D + j) : re;
                  return /* @__PURE__ */ u(
                    "td",
                    {
                      className: N(
                        "px-4 py-3",
                        W.align === "center" && "text-center",
                        W.align === "right" && "text-right"
                      ),
                      children: xe
                    },
                    W.id
                  );
                })
              ]
            },
            V
          );
        }) })
      ] }) }),
      w && U > 1 && /* @__PURE__ */ S("div", { className: "mt-4 flex items-center justify-between", children: [
        /* @__PURE__ */ S("div", { className: "text-sm text-slate-600 dark:text-slate-400", children: [
          "Showing ",
          D + 1,
          " to ",
          M,
          " of ",
          l ?? n.length,
          " items"
        ] }),
        /* @__PURE__ */ S("div", { className: "flex items-center gap-2", children: [
          m && /* @__PURE__ */ S(
            "select",
            {
              value: i,
              onChange: (C) => {
                m(Number(C.target.value));
              },
              className: "rounded-md border border-slate-300 px-2 py-1 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800",
              "aria-label": "Rows per page",
              children: [
                /* @__PURE__ */ u("option", { value: 5, children: "5" }),
                /* @__PURE__ */ u("option", { value: 10, children: "10" }),
                /* @__PURE__ */ u("option", { value: 25, children: "25" }),
                /* @__PURE__ */ u("option", { value: 50, children: "50" }),
                /* @__PURE__ */ u("option", { value: 100, children: "100" })
              ]
            }
          ),
          /* @__PURE__ */ u(
            "button",
            {
              onClick: () => g == null ? void 0 : g(k - 1),
              disabled: k === 0,
              className: "rounded-md border border-slate-300 px-3 py-1 text-sm hover:bg-slate-100 disabled:opacity-50 dark:border-slate-700 dark:hover:bg-slate-800",
              "aria-label": "Previous page",
              children: "Previous"
            }
          ),
          /* @__PURE__ */ S("span", { className: "text-sm text-slate-600 dark:text-slate-400", children: [
            "Page ",
            k + 1,
            " of ",
            U
          ] }),
          /* @__PURE__ */ u(
            "button",
            {
              onClick: () => g == null ? void 0 : g(k + 1),
              disabled: k >= U - 1,
              className: "rounded-md border border-slate-300 px-3 py-1 text-sm hover:bg-slate-100 disabled:opacity-50 dark:border-slate-700 dark:hover:bg-slate-800",
              "aria-label": "Next page",
              children: "Next"
            }
          )
        ] })
      ] })
    ] });
  }
);
Zn.displayName = "Table";
function co({
  icon: e,
  title: t,
  description: r,
  action: a,
  secondaryAction: n,
  className: s,
  size: o = "md",
  children: c
}) {
  const p = {
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
  }[o];
  return /* @__PURE__ */ u(
    "div",
    {
      className: N(
        "flex items-center justify-center text-slate-500 dark:text-slate-400",
        p.container,
        s
      ),
      role: "status",
      "aria-live": "polite",
      children: /* @__PURE__ */ S("div", { className: "max-w-md text-center", children: [
        e && /* @__PURE__ */ u(
          "div",
          {
            className: N(
              "flex items-center justify-center text-slate-300 dark:text-slate-600",
              p.icon
            ),
            "aria-hidden": "true",
            children: e
          }
        ),
        /* @__PURE__ */ u("h3", { className: N("font-medium text-slate-700 dark:text-slate-300", p.title), children: t }),
        r && /* @__PURE__ */ u("p", { className: N("text-slate-600 dark:text-slate-400", p.description), children: r }),
        c && /* @__PURE__ */ u("div", { className: N(p.description), children: c }),
        (a || n) && /* @__PURE__ */ S("div", { className: N("flex items-center justify-center", p.actions), children: [
          a && /* @__PURE__ */ S(ne, { onClick: a.onClick, variant: a.variant || "default", children: [
            a.icon && /* @__PURE__ */ u("span", { className: "mr-2", children: a.icon }),
            a.label
          ] }),
          n && /* @__PURE__ */ u(
            ne,
            {
              onClick: n.onClick,
              variant: n.variant || "outline",
              children: n.label
            }
          )
        ] })
      ] })
    }
  );
}
export {
  Da as Alert,
  $a as AlertDescription,
  za as AlertTitle,
  Ia as Avatar,
  _r as Badge,
  it as Breadcrumb,
  ne as Button,
  wr as Card,
  Sr as CardContent,
  Er as CardDescription,
  Ar as CardFooter,
  kr as CardHeader,
  Nr as CardTitle,
  ba as Checkbox,
  ma as CheckboxGroup,
  Un as CodeBlock,
  Qn as Dialog,
  pa as DialogClose,
  la as DialogContent,
  ua as DialogDescription,
  ca as DialogFooter,
  ia as DialogHeader,
  dt as DialogOverlay,
  sa as DialogPortal,
  da as DialogTitle,
  oa as DialogTrigger,
  eo as Dropdown,
  ro as DropdownContent,
  no as DropdownItem,
  ao as DropdownLabel,
  oo as DropdownSeparator,
  so as DropdownSubmenu,
  io as DropdownSubmenuContent,
  lo as DropdownSubmenuTrigger,
  to as DropdownTrigger,
  co as EmptyState,
  mr as Input,
  Fr as Loading,
  gr as LoadingButton,
  Yn as ModalFooter,
  ra as PageHeader,
  vr as Select,
  Rr as Skeleton,
  at as Spinner,
  Ra as StatusIndicator,
  va as Switch,
  xa as SwitchGroup,
  Zn as Table,
  Dr as Tabs,
  Br as TabsContent,
  zr as TabsList,
  $r as TabsTrigger,
  ka as Textarea,
  gt as ToastContainer,
  pt as ToastItem,
  Jn as ToastProvider,
  Xn as ViewModeToggle,
  Cr as badgeVariants,
  Qr as breadcrumbItemVariants,
  Jr as breadcrumbSeparatorVariants,
  Xr as breadcrumbVariants,
  pr as buttonVariants,
  xr as cardVariants,
  ga as checkboxVariants,
  N as cn,
  na as dialogContentVariants,
  aa as dialogOverlayVariants,
  Aa as dropdownContentVariants,
  ft as dropdownItemVariants,
  fr as inputVariants,
  ea as pageHeaderVariants,
  yr as selectVariants,
  Ir as skeletonVariants,
  Tr as spinnerVariants,
  Pe as statusIndicatorVariants,
  ha as switchThumbVariants,
  ya as switchVariants,
  Hn as tableVariants,
  Lr as tabsListVariants,
  Or as tabsTriggerVariants,
  wa as textareaVariants,
  Sa as useToast
};
//# sourceMappingURL=index.es.js.map
