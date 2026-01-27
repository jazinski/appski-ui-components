import { jsx as h, jsxs as R, Fragment as ue } from "react/jsx-runtime";
import * as y from "react";
import Z, { forwardRef as zt, createElement as Ne, useCallback as Qe, useMemo as sr } from "react";
import { createPortal as ir } from "react-dom";
function Bt(e) {
  var n, t, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (n = 0; n < o; n++) e[n] && (t = Bt(e[n])) && (r && (r += " "), r += t);
  } else for (t in e) e[t] && (r && (r += " "), r += t);
  return r;
}
function Me() {
  for (var e, n, t = 0, r = "", o = arguments.length; t < o; t++) (e = arguments[t]) && (n = Bt(e)) && (r && (r += " "), r += n);
  return r;
}
const wt = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, xt = Me, T = (e, n) => (t) => {
  var r;
  if ((n == null ? void 0 : n.variants) == null) return xt(e, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
  const { variants: o, defaultVariants: a } = n, s = Object.keys(o).map((u) => {
    const p = t == null ? void 0 : t[u], m = a == null ? void 0 : a[u];
    if (p === null) return null;
    const b = wt(p) || wt(m);
    return o[u][b];
  }), i = t && Object.entries(t).reduce((u, p) => {
    let [m, b] = p;
    return b === void 0 || (u[m] = b), u;
  }, {}), l = n == null || (r = n.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, p) => {
    let { class: m, className: b, ...g } = p;
    return Object.entries(g).every((c) => {
      let [d, f] = c;
      return Array.isArray(f) ? f.includes({
        ...a,
        ...i
      }[d]) : {
        ...a,
        ...i
      }[d] === f;
    }) ? [
      ...u,
      m,
      b
    ] : u;
  }, []);
  return xt(e, s, l, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lr = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Gt = (...e) => e.filter((n, t, r) => !!n && n.trim() !== "" && r.indexOf(n) === t).join(" ").trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ur = {
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
const cr = zt(
  ({
    color: e = "currentColor",
    size: n = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: a,
    iconNode: s,
    ...i
  }, l) => Ne(
    "svg",
    {
      ref: l,
      ...ur,
      width: n,
      height: n,
      stroke: e,
      strokeWidth: r ? Number(t) * 24 / Number(n) : t,
      className: Gt("lucide", o),
      ...i
    },
    [
      ...s.map(([u, p]) => Ne(u, p)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U = (e, n) => {
  const t = zt(
    ({ className: r, ...o }, a) => Ne(cr, {
      ref: a,
      iconNode: n,
      className: Gt(`lucide-${lr(e)}`, r),
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
const dr = U("ArrowUpDown", [
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
const Je = U("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ut = U("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jt = U("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gr = U("CircleAlert", [
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
const pr = U("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fr = U("CircleX", [
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
const mr = U("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const St = U("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hr = U("House", [
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
const et = U("Info", [
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
const Ht = U("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const br = U("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ct = U("RefreshCw", [
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
const xe = U("TriangleAlert", [
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
const yr = U("Wifi", [
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
const Ut = U("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), ct = "-", vr = (e) => {
  const n = xr(e), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (s) => {
      const i = s.split(ct);
      return i[0] === "" && i.length !== 1 && i.shift(), qt(i, n) || wr(s);
    },
    getConflictingClassGroupIds: (s, i) => {
      const l = t[s] || [];
      return i && r[s] ? [...l, ...r[s]] : l;
    }
  };
}, qt = (e, n) => {
  var s;
  if (e.length === 0)
    return n.classGroupId;
  const t = e[0], r = n.nextPart.get(t), o = r ? qt(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (n.validators.length === 0)
    return;
  const a = e.join(ct);
  return (s = n.validators.find(({
    validator: i
  }) => i(a))) == null ? void 0 : s.classGroupId;
}, kt = /^\[(.+)\]$/, wr = (e) => {
  if (kt.test(e)) {
    const n = kt.exec(e)[1], t = n == null ? void 0 : n.substring(0, n.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}, xr = (e) => {
  const {
    theme: n,
    prefix: t
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Cr(Object.entries(e.classGroups), t).forEach(([a, s]) => {
    tt(s, r, a, n);
  }), r;
}, tt = (e, n, t, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const a = o === "" ? n : Rt(n, o);
      a.classGroupId = t;
      return;
    }
    if (typeof o == "function") {
      if (Sr(o)) {
        tt(o(r), n, t, r);
        return;
      }
      n.validators.push({
        validator: o,
        classGroupId: t
      });
      return;
    }
    Object.entries(o).forEach(([a, s]) => {
      tt(s, Rt(n, a), t, r);
    });
  });
}, Rt = (e, n) => {
  let t = e;
  return n.split(ct).forEach((r) => {
    t.nextPart.has(r) || t.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(r);
  }), t;
}, Sr = (e) => e.isThemeGetter, Cr = (e, n) => n ? e.map(([t, r]) => {
  const o = r.map((a) => typeof a == "string" ? n + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(([s, i]) => [n + s, i])) : a);
  return [t, o];
}) : e, kr = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let n = 0, t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const o = (a, s) => {
    t.set(a, s), n++, n > e && (n = 0, r = t, t = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let s = t.get(a);
      if (s !== void 0)
        return s;
      if ((s = r.get(a)) !== void 0)
        return o(a, s), s;
    },
    set(a, s) {
      t.has(a) ? t.set(a, s) : o(a, s);
    }
  };
}, Wt = "!", Rr = (e) => {
  const {
    separator: n,
    experimentalParseClassName: t
  } = e, r = n.length === 1, o = n[0], a = n.length, s = (i) => {
    const l = [];
    let u = 0, p = 0, m;
    for (let f = 0; f < i.length; f++) {
      let v = i[f];
      if (u === 0) {
        if (v === o && (r || i.slice(f, f + a) === n)) {
          l.push(i.slice(p, f)), p = f + a;
          continue;
        }
        if (v === "/") {
          m = f;
          continue;
        }
      }
      v === "[" ? u++ : v === "]" && u--;
    }
    const b = l.length === 0 ? i : i.substring(p), g = b.startsWith(Wt), c = g ? b.substring(1) : b, d = m && m > p ? m - p : void 0;
    return {
      modifiers: l,
      hasImportantModifier: g,
      baseClassName: c,
      maybePostfixModifierPosition: d
    };
  };
  return t ? (i) => t({
    className: i,
    parseClassName: s
  }) : s;
}, Er = (e) => {
  if (e.length <= 1)
    return e;
  const n = [];
  let t = [];
  return e.forEach((r) => {
    r[0] === "[" ? (n.push(...t.sort(), r), t = []) : t.push(r);
  }), n.push(...t.sort()), n;
}, _r = (e) => ({
  cache: kr(e.cacheSize),
  parseClassName: Rr(e),
  ...vr(e)
}), Fr = /\s+/, Nr = (e, n) => {
  const {
    parseClassName: t,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = n, a = [], s = e.trim().split(Fr);
  let i = "";
  for (let l = s.length - 1; l >= 0; l -= 1) {
    const u = s[l], {
      modifiers: p,
      hasImportantModifier: m,
      baseClassName: b,
      maybePostfixModifierPosition: g
    } = t(u);
    let c = !!g, d = r(c ? b.substring(0, g) : b);
    if (!d) {
      if (!c) {
        i = u + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (d = r(b), !d) {
        i = u + (i.length > 0 ? " " + i : i);
        continue;
      }
      c = !1;
    }
    const f = Er(p).join(":"), v = m ? f + Wt : f, w = v + d;
    if (a.includes(w))
      continue;
    a.push(w);
    const x = o(d, c);
    for (let C = 0; C < x.length; ++C) {
      const E = x[C];
      a.push(v + E);
    }
    i = u + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function Ir() {
  let e = 0, n, t, r = "";
  for (; e < arguments.length; )
    (n = arguments[e++]) && (t = Kt(n)) && (r && (r += " "), r += t);
  return r;
}
const Kt = (e) => {
  if (typeof e == "string")
    return e;
  let n, t = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (n = Kt(e[r])) && (t && (t += " "), t += n);
  return t;
};
function Ar(e, ...n) {
  let t, r, o, a = s;
  function s(l) {
    const u = n.reduce((p, m) => m(p), e());
    return t = _r(u), r = t.cache.get, o = t.cache.set, a = i, i(l);
  }
  function i(l) {
    const u = r(l);
    if (u)
      return u;
    const p = Nr(l, t);
    return o(l, p), p;
  }
  return function() {
    return a(Ir.apply(null, arguments));
  };
}
const z = (e) => {
  const n = (t) => t[e] || [];
  return n.isThemeGetter = !0, n;
}, Zt = /^\[(?:([a-z-]+):)?(.+)\]$/i, Pr = /^\d+\/\d+$/, Mr = /* @__PURE__ */ new Set(["px", "full", "screen"]), $r = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Dr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Tr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Lr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Or = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ne = (e) => pe(e) || Mr.has(e) || Pr.test(e), ae = (e) => fe(e, "length", qr), pe = (e) => !!e && !Number.isNaN(Number(e)), je = (e) => fe(e, "number", pe), be = (e) => !!e && Number.isInteger(Number(e)), Vr = (e) => e.endsWith("%") && pe(e.slice(0, -1)), D = (e) => Zt.test(e), se = (e) => $r.test(e), zr = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Br = (e) => fe(e, zr, Yt), Gr = (e) => fe(e, "position", Yt), jr = /* @__PURE__ */ new Set(["image", "url"]), Hr = (e) => fe(e, jr, Kr), Ur = (e) => fe(e, "", Wr), ye = () => !0, fe = (e, n, t) => {
  const r = Zt.exec(e);
  return r ? r[1] ? typeof n == "string" ? r[1] === n : n.has(r[1]) : t(r[2]) : !1;
}, qr = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Dr.test(e) && !Tr.test(e)
), Yt = () => !1, Wr = (e) => Lr.test(e), Kr = (e) => Or.test(e), Zr = () => {
  const e = z("colors"), n = z("spacing"), t = z("blur"), r = z("brightness"), o = z("borderColor"), a = z("borderRadius"), s = z("borderSpacing"), i = z("borderWidth"), l = z("contrast"), u = z("grayscale"), p = z("hueRotate"), m = z("invert"), b = z("gap"), g = z("gradientColorStops"), c = z("gradientColorStopPositions"), d = z("inset"), f = z("margin"), v = z("opacity"), w = z("padding"), x = z("saturate"), C = z("scale"), E = z("sepia"), M = z("skew"), I = z("space"), N = z("translate"), $ = () => ["auto", "contain", "none"], O = () => ["auto", "hidden", "clip", "visible", "scroll"], L = () => ["auto", D, n], _ = () => [D, n], W = () => ["", ne, ae], F = () => ["auto", pe, D], V = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], B = () => ["solid", "dashed", "dotted", "double", "none"], G = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], j = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], ee = () => ["", "0", D], K = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], H = () => [pe, D];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ye],
      spacing: [ne, ae],
      blur: ["none", "", se, D],
      brightness: H(),
      borderColor: [e],
      borderRadius: ["none", "", "full", se, D],
      borderSpacing: _(),
      borderWidth: W(),
      contrast: H(),
      grayscale: ee(),
      hueRotate: H(),
      invert: ee(),
      gap: _(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Vr, ae],
      inset: L(),
      margin: L(),
      opacity: H(),
      padding: _(),
      saturate: H(),
      scale: H(),
      sepia: ee(),
      skew: H(),
      space: _(),
      translate: _()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", D]
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
        columns: [se]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": K()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": K()
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
        object: [...V(), D]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: O()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": O()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": O()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: $()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": $()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": $()
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
        inset: [d]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [d]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [d]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [d]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [d]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [d]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [d]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [d]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [d]
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
        z: ["auto", be, D]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: L()
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
        flex: ["1", "auto", "initial", "none", D]
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
        order: ["first", "last", "none", be, D]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ye]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", be, D]
        }, D]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": F()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": F()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [ye]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [be, D]
        }, D]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": F()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": F()
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
        "auto-cols": ["auto", "min", "max", "fr", D]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", D]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [b]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [b]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [b]
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
        p: [w]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [w]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [w]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [w]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [w]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [w]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [w]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [w]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [w]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [f]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [f]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [f]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [f]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [f]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [f]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [f]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [f]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [f]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [I]
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
        "space-y": [I]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", D, n]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [D, n, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [D, n, "none", "full", "min", "max", "fit", "prose", {
          screen: [se]
        }, se]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [D, n, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [D, n, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [D, n, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [D, n, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", se, ae]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", je]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ye]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", D]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", pe, je]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", ne, D]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", D]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", D]
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
        decoration: [...B(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", ne, ae]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", ne, D]
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
        indent: _()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", D]
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
        content: ["none", D]
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
        bg: [...V(), Gr]
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
        bg: ["auto", "cover", "contain", Br]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Hr]
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
        from: [c]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [c]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [c]
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
        rounded: [a]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [a]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [a]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [a]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [a]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [a]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [a]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [a]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [a]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [a]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [a]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [a]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [a]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [a]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [a]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [i]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [i]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [i]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [i]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [i]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [i]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [i]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [i]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [i]
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
        border: [...B(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [i]
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
        "divide-y": [i]
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
        divide: B()
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
        outline: ["", ...B()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ne, D]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [ne, ae]
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
        ring: W()
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
        "ring-offset": [ne, ae]
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
        shadow: ["", "inner", "none", se, Ur]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ye]
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
        "mix-blend": [...G(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": G()
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
        "drop-shadow": ["", "none", se, D]
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
        "hue-rotate": [p]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [m]
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
        sepia: [E]
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
        "backdrop-hue-rotate": [p]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [m]
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
        "backdrop-saturate": [x]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [E]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", D]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: H()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", D]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: H()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", D]
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
        scale: [C]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [C]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [C]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [be, D]
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
        "skew-x": [M]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [M]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", D]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", D]
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
        "scroll-m": _()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": _()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": _()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": _()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": _()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": _()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": _()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": _()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": _()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": _()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": _()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": _()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": _()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": _()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": _()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": _()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": _()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": _()
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
        "will-change": ["auto", "scroll", "contents", "transform", D]
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
        stroke: [ne, ae, je]
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
}, Yr = /* @__PURE__ */ Ar(Zr);
function k(...e) {
  return Yr(Me(e));
}
const Xr = T(
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
), Y = y.forwardRef(
  ({ className: e, variant: n, size: t, isLoading: r, loadingText: o, children: a, disabled: s, ...i }, l) => /* @__PURE__ */ h(
    "button",
    {
      className: k(Xr({ variant: n, size: t, className: e })),
      ref: l,
      disabled: s ?? r,
      "aria-busy": r,
      ...i,
      children: r ? /* @__PURE__ */ R(ue, { children: [
        /* @__PURE__ */ h(Ht, { className: "mr-2 h-4 w-4 animate-spin", "aria-hidden": "true" }),
        /* @__PURE__ */ h("span", { children: o ?? a })
      ] }) : a
    }
  )
);
Y.displayName = "Button";
const Qr = y.forwardRef(
  ({ loading: e = !1, loadingText: n, children: t, ...r }, o) => {
    const a = {
      ...r,
      isLoading: e,
      ...n && { loadingText: n }
    };
    return /* @__PURE__ */ h(Y, { ref: o, ...a, children: t });
  }
);
Qr.displayName = "LoadingButton";
function yl({
  onCancel: e,
  onConfirm: n,
  cancelText: t = "Cancel",
  confirmText: r = "Confirm",
  confirmDisabled: o = !1,
  confirmLoading: a = !1,
  confirmLoadingText: s,
  confirmVariant: i = "default",
  cancelVariant: l = "outline",
  className: u,
  buttonContainerClassName: p,
  children: m,
  confirmType: b = "button",
  hideCancelButton: g = !1
}) {
  return /* @__PURE__ */ R(
    "div",
    {
      className: k(
        "flex items-center justify-between gap-3 border-t border-slate-200 bg-slate-50 px-6 py-4 dark:border-slate-800 dark:bg-slate-900/50",
        u
      ),
      children: [
        m && /* @__PURE__ */ h("div", { className: "flex-1", children: m }),
        /* @__PURE__ */ R(
          "div",
          {
            className: k("flex items-center gap-3", !m && "ml-auto", p),
            children: [
              !g && /* @__PURE__ */ h(Y, { type: "button", onClick: e, variant: l, children: t }),
              /* @__PURE__ */ h(
                Y,
                {
                  type: b,
                  onClick: n,
                  variant: i,
                  disabled: o || a,
                  isLoading: a,
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
function vl({
  value: e,
  onChange: n,
  options: t,
  className: r,
  size: o = "icon"
}) {
  return /* @__PURE__ */ h(
    "div",
    {
      className: k(
        "flex items-center gap-1 rounded-lg bg-slate-200 p-1 dark:bg-slate-700",
        r
      ),
      role: "group",
      "aria-label": "View mode toggle",
      children: t.map((a) => /* @__PURE__ */ h(
        Y,
        {
          variant: e === a.value ? "default" : "ghost",
          size: o,
          onClick: () => {
            n(a.value);
          },
          title: a.label,
          "aria-label": a.label,
          "aria-pressed": e === a.value,
          children: a.icon
        },
        a.value
      ))
    }
  );
}
const Jr = T(
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
), eo = T(
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
), Xt = y.forwardRef(
  ({ className: e, variant: n, inputSize: t, label: r, error: o, helperText: a, id: s, type: i = "text", ...l }, u) => {
    const p = y.useId(), m = s ?? p, b = `${m}-error`, g = `${m}-helper`, c = !!o, d = c ? "error" : n;
    return /* @__PURE__ */ R("div", { className: "flex flex-col gap-1.5", children: [
      r && /* @__PURE__ */ h("label", { htmlFor: m, className: k(eo({ variant: d })), children: r }),
      /* @__PURE__ */ h(
        "input",
        {
          type: i,
          id: m,
          className: k(Jr({ variant: d, inputSize: t, className: e })),
          ref: u,
          "aria-invalid": c,
          "aria-describedby": c ? b : a ? g : void 0,
          ...l
        }
      ),
      c && /* @__PURE__ */ h("p", { id: b, className: "text-destructive text-sm", role: "alert", children: o }),
      !c && a && /* @__PURE__ */ h("p", { id: g, className: "text-muted-foreground text-sm", children: a })
    ] });
  }
);
Xt.displayName = "Input";
const to = T(
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
), no = T(
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
), ro = y.forwardRef(
  ({
    className: e,
    variant: n,
    selectSize: t,
    options: r,
    label: o,
    placeholder: a,
    error: s,
    helperText: i,
    id: l,
    children: u,
    ...p
  }, m) => {
    const b = y.useId(), g = l ?? b, c = `${g}-error`, d = `${g}-helper`, f = !!s, v = f ? "error" : n, w = () => u || (r ? /* @__PURE__ */ R(ue, { children: [
      a && /* @__PURE__ */ h("option", { value: "", disabled: !0, children: a }),
      r.map((x) => /* @__PURE__ */ h("option", { value: x.value, disabled: x.disabled, children: x.label }, x.value))
    ] }) : null);
    return /* @__PURE__ */ R("div", { className: "flex flex-col gap-1.5", children: [
      o && /* @__PURE__ */ h("label", { htmlFor: g, className: k(no({ variant: v })), children: o }),
      /* @__PURE__ */ R("div", { className: "relative", children: [
        /* @__PURE__ */ h(
          "select",
          {
            id: g,
            className: k(
              to({ variant: v, selectSize: t, className: e }),
              "cursor-pointer appearance-none pr-10",
              // Ensure dropdown options have proper background/text colors
              "[&>option]:bg-background [&>option]:text-foreground"
            ),
            ref: m,
            "aria-invalid": f,
            "aria-describedby": f ? c : i ? d : void 0,
            ...p,
            children: w()
          }
        ),
        /* @__PURE__ */ h(
          ut,
          {
            className: "text-muted-foreground pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2",
            "aria-hidden": "true"
          }
        )
      ] }),
      f && /* @__PURE__ */ h("p", { id: c, className: "text-destructive text-sm", role: "alert", children: s }),
      !f && i && /* @__PURE__ */ h("p", { id: d, className: "text-muted-foreground text-sm", children: i })
    ] });
  }
);
ro.displayName = "Select";
const oo = T("rounded-lg border bg-card text-card-foreground", {
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
}), Qt = y.forwardRef(
  ({ className: e, variant: n, ...t }, r) => /* @__PURE__ */ h("div", { ref: r, className: k(oo({ variant: n, className: e })), ...t })
);
Qt.displayName = "Card";
const ao = y.forwardRef(
  ({ className: e, ...n }, t) => /* @__PURE__ */ h("div", { ref: t, className: k("flex flex-col space-y-1.5 p-6", e), ...n })
);
ao.displayName = "CardHeader";
const so = y.forwardRef(
  ({ className: e, as: n = "h3", ...t }, r) => /* @__PURE__ */ h(
    n,
    {
      ref: r,
      className: k("text-2xl leading-none font-semibold tracking-tight", e),
      ...t
    }
  )
);
so.displayName = "CardTitle";
const io = y.forwardRef(
  ({ className: e, ...n }, t) => /* @__PURE__ */ h("p", { ref: t, className: k("text-muted-foreground text-sm", e), ...n })
);
io.displayName = "CardDescription";
const lo = y.forwardRef(
  ({ className: e, ...n }, t) => /* @__PURE__ */ h("div", { ref: t, className: k("p-6 pt-0", e), ...n })
);
lo.displayName = "CardContent";
const uo = y.forwardRef(
  ({ className: e, ...n }, t) => /* @__PURE__ */ h("div", { ref: t, className: k("flex items-center p-6 pt-0", e), ...n })
);
uo.displayName = "CardFooter";
const co = T(
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
), Jt = y.forwardRef(
  ({ className: e, variant: n, ...t }, r) => /* @__PURE__ */ h("div", { ref: r, className: k(co({ variant: n }), e), ...t })
);
Jt.displayName = "Badge";
const go = T("animate-spin text-muted-foreground", {
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
}), en = y.forwardRef(
  ({ className: e, size: n, label: t = "Loading...", ...r }, o) => /* @__PURE__ */ h(
    Ht,
    {
      ref: o,
      className: k(go({ size: n, className: e })),
      "aria-label": t,
      role: "status",
      ...r
    }
  )
);
en.displayName = "Spinner";
const po = y.forwardRef(
  ({ className: e, size: n = "default", message: t, fullScreen: r = !1, ...o }, a) => /* @__PURE__ */ h(
    "div",
    {
      ref: a,
      className: k(r ? "fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm" : "flex items-center justify-center p-4", e),
      role: "status",
      "aria-busy": "true",
      ...o,
      children: /* @__PURE__ */ R("div", { className: "flex flex-col items-center gap-2", children: [
        /* @__PURE__ */ h(en, { size: n, label: t ?? "Loading..." }),
        t && /* @__PURE__ */ h("p", { className: "text-muted-foreground text-sm", children: t })
      ] })
    }
  )
);
po.displayName = "Loading";
const fo = T("animate-pulse rounded-md bg-muted", {
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
}), mo = y.forwardRef(
  ({ className: e, variant: n, ...t }, r) => /* @__PURE__ */ h(
    "div",
    {
      ref: r,
      className: k(fo({ variant: n, className: e })),
      "aria-hidden": "true",
      ...t
    }
  )
);
mo.displayName = "Skeleton";
const ho = T(
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
), bo = T(
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
), tn = y.createContext(null);
function dt() {
  const e = y.useContext(tn);
  if (!e)
    throw new Error("Tabs components must be used within a Tabs provider");
  return e;
}
const yo = y.forwardRef(
  ({ className: e, defaultValue: n, value: t, onValueChange: r, variant: o = "default", children: a, ...s }, i) => {
    const [l, u] = y.useState(n), p = t ?? l, m = y.useCallback(
      (b) => {
        t === void 0 && u(b), r == null || r(b);
      },
      [t, r]
    );
    return /* @__PURE__ */ h(tn.Provider, { value: { activeTab: p, setActiveTab: m, variant: o ?? "default" }, children: /* @__PURE__ */ h("div", { ref: i, className: k("w-full", e), ...s, children: a }) });
  }
);
yo.displayName = "Tabs";
const vo = y.forwardRef(({ className: e, ...n }, t) => {
  const { variant: r } = dt();
  return /* @__PURE__ */ h(
    "div",
    {
      ref: t,
      role: "tablist",
      className: k(ho({ variant: r, className: e })),
      ...n
    }
  );
});
vo.displayName = "TabsList";
const wo = y.forwardRef(
  ({ className: e, value: n, children: t, disabled: r, ...o }, a) => {
    const { activeTab: s, setActiveTab: i, variant: l } = dt(), u = s === n, p = `tabpanel-${n}`, m = `tab-${n}`;
    return /* @__PURE__ */ h(
      "button",
      {
        ref: a,
        type: "button",
        role: "tab",
        id: m,
        "aria-selected": u,
        "aria-controls": p,
        "data-state": u ? "active" : "inactive",
        disabled: r,
        className: k(bo({ variant: l, className: e })),
        onClick: () => {
          i(n);
        },
        tabIndex: u ? 0 : -1,
        ...o,
        children: t
      }
    );
  }
);
wo.displayName = "TabsTrigger";
const xo = y.forwardRef(
  ({ className: e, value: n, forceMount: t = !1, children: r, ...o }, a) => {
    const { activeTab: s } = dt(), i = s === n, l = `tabpanel-${n}`, u = `tab-${n}`;
    return !i && !t ? null : /* @__PURE__ */ h(
      "div",
      {
        ref: a,
        role: "tabpanel",
        id: l,
        "aria-labelledby": u,
        hidden: !i,
        tabIndex: 0,
        className: k(
          "ring-offset-background focus-visible:ring-ring mt-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
          !i && "hidden",
          e
        ),
        ...o,
        children: r
      }
    );
  }
);
xo.displayName = "TabsContent";
var nn = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Et = Z.createContext && /* @__PURE__ */ Z.createContext(nn), So = ["attr", "size", "title"];
function Co(e, n) {
  if (e == null) return {};
  var t = ko(e, n), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (t[r] = e[r]);
  }
  return t;
}
function ko(e, n) {
  if (e == null) return {};
  var t = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (n.indexOf(r) >= 0) continue;
      t[r] = e[r];
    }
  return t;
}
function Ie() {
  return Ie = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, Ie.apply(this, arguments);
}
function _t(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Ae(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? _t(Object(t), !0).forEach(function(r) {
      Ro(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _t(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function Ro(e, n, t) {
  return n = Eo(n), n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = t, e;
}
function Eo(e) {
  var n = _o(e, "string");
  return typeof n == "symbol" ? n : n + "";
}
function _o(e, n) {
  if (typeof e != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(e, n);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (n === "string" ? String : Number)(e);
}
function rn(e) {
  return e && e.map((n, t) => /* @__PURE__ */ Z.createElement(n.tag, Ae({
    key: t
  }, n.attr), rn(n.child)));
}
function me(e) {
  return (n) => /* @__PURE__ */ Z.createElement(Fo, Ie({
    attr: Ae({}, e.attr)
  }, n), rn(e.child));
}
function Fo(e) {
  var n = (t) => {
    var {
      attr: r,
      size: o,
      title: a
    } = e, s = Co(e, So), i = o || t.size || "1em", l;
    return t.className && (l = t.className), e.className && (l = (l ? l + " " : "") + e.className), /* @__PURE__ */ Z.createElement("svg", Ie({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, r, s, {
      className: l,
      style: Ae(Ae({
        color: e.color || t.color
      }, t.style), e.style),
      height: i,
      width: i,
      xmlns: "http://www.w3.org/2000/svg"
    }), a && /* @__PURE__ */ Z.createElement("title", null, a), e.children);
  };
  return Et !== void 0 ? /* @__PURE__ */ Z.createElement(Et.Consumer, null, (t) => n(t)) : n(nn);
}
function No(e) {
  return me({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" }, child: [] }] })(e);
}
function on(e) {
  return me({ attr: { viewBox: "0 0 320 512" }, child: [{ tag: "path", attr: { d: "M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" }, child: [] }] })(e);
}
function Io(e) {
  return me({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" }, child: [] }] })(e);
}
function Ao(e) {
  return me({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" }, child: [] }] })(e);
}
function Po(e) {
  return me({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z" }, child: [] }] })(e);
}
function Mo(e) {
  return me({ attr: { viewBox: "0 0 352 512" }, child: [{ tag: "path", attr: { d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" }, child: [] }] })(e);
}
const $o = T(
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
), Do = T("inline-flex items-center gap-1.5 transition-all duration-200", {
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
}), Ft = T(
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
), To = T(
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
), an = y.forwardRef(
  ({
    items: e,
    separator: n = /* @__PURE__ */ h(on, {}),
    maxItems: t,
    size: r,
    variant: o = "default",
    LinkComponent: a,
    mobileMaxItems: s = 2,
    className: i,
    ...l
  }, u) => {
    const [p, m] = y.useState(!1);
    y.useEffect(() => {
      const g = () => {
        m(window.innerWidth < 640);
      };
      return g(), window.addEventListener("resize", g), () => {
        window.removeEventListener("resize", g);
      };
    }, []);
    const b = y.useMemo(() => {
      const g = p && s > 0 ? s : t;
      if (!g || e.length <= g)
        return e;
      if (g === 1)
        return [e[e.length - 1]];
      if (g === 2)
        return [e[0], e[e.length - 1]];
      const c = e[0], d = g - 2, f = e.slice(-d);
      return [
        c,
        { label: "..." },
        // Ellipsis placeholder
        ...f
      ];
    }, [e, t, s, p]);
    return /* @__PURE__ */ h(
      "nav",
      {
        ref: u,
        "aria-label": "Breadcrumb",
        className: k($o({ size: r }), i),
        ...l,
        children: /* @__PURE__ */ h("ol", { className: "flex list-none flex-wrap items-center gap-1.5", children: b.map((g, c) => {
          if (!g) return null;
          const d = c === b.length - 1, f = d && !g.href, v = g.label === "...";
          return /* @__PURE__ */ R(y.Fragment, { children: [
            /* @__PURE__ */ h(
              "li",
              {
                className: k(
                  Do({
                    variant: o,
                    size: r,
                    current: f
                  })
                ),
                children: v ? /* @__PURE__ */ h("span", { className: "px-1", children: g.label }) : g.href && !f ? a ? /* @__PURE__ */ R(
                  a,
                  {
                    to: g.href,
                    className: k(
                      Ft({ variant: o }),
                      "inline-flex items-center gap-1.5"
                    ),
                    children: [
                      g.icon && /* @__PURE__ */ h("span", { className: "inline-flex items-center", "aria-hidden": "true", children: g.icon }),
                      /* @__PURE__ */ h("span", { children: g.label })
                    ]
                  }
                ) : /* @__PURE__ */ R(
                  "a",
                  {
                    href: g.href,
                    onClick: g.onClick,
                    className: k(
                      Ft({ variant: o }),
                      "inline-flex items-center gap-1.5"
                    ),
                    children: [
                      g.icon && /* @__PURE__ */ h("span", { className: "inline-flex items-center", "aria-hidden": "true", children: g.icon }),
                      /* @__PURE__ */ h("span", { children: g.label })
                    ]
                  }
                ) : /* @__PURE__ */ R("span", { className: "inline-flex items-center gap-1.5", children: [
                  g.icon && /* @__PURE__ */ h("span", { className: "inline-flex items-center", "aria-hidden": "true", children: g.icon }),
                  /* @__PURE__ */ h("span", { "aria-current": f ? "page" : void 0, children: g.label })
                ] })
              }
            ),
            !d && /* @__PURE__ */ h("li", { className: k(To({ size: r })), "aria-hidden": "true", children: n })
          ] }, `${g.label}-${String(c)}`);
        }) })
      }
    );
  }
);
an.displayName = "Breadcrumb";
const Lo = T("w-full", {
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
}), Oo = {
  default: "text-foreground",
  success: "text-green-600 dark:text-green-400",
  warning: "text-yellow-600 dark:text-yellow-400",
  destructive: "text-red-600 dark:text-red-400"
}, Vo = y.forwardRef(
  ({
    className: e,
    variant: n,
    sticky: t,
    title: r,
    description: o,
    icon: a,
    breadcrumbs: s,
    actions: i,
    stats: l,
    showHomeInBreadcrumbs: u = !0,
    breadcrumbSeparator: p,
    ...m
  }, b) => {
    const g = y.useMemo(() => {
      if (!s) return [];
      const c = s.map((d) => {
        const f = d.icon, v = {
          label: d.label,
          icon: f ? /* @__PURE__ */ h(f, { className: "h-4 w-4" }) : void 0
        };
        return d.href && (v.href = d.href), v;
      });
      return u ? [
        {
          label: "Home",
          href: "/",
          icon: /* @__PURE__ */ h(hr, { className: "h-4 w-4", "aria-label": "Home" })
        },
        ...c
      ] : c;
    }, [s, u]);
    return /* @__PURE__ */ h(
      "header",
      {
        ref: b,
        className: k(Lo({ variant: n, sticky: t, className: e })),
        ...m,
        children: /* @__PURE__ */ R("div", { className: "px-4 py-4 sm:px-6 sm:py-6", children: [
          s && s.length > 0 && /* @__PURE__ */ h("div", { className: "mb-3", children: /* @__PURE__ */ h(
            an,
            {
              items: g,
              separator: p,
              className: "text-muted-foreground"
            }
          ) }),
          /* @__PURE__ */ R("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", children: [
            /* @__PURE__ */ R("div", { className: "flex items-center gap-3", children: [
              a && /* @__PURE__ */ h("div", { className: "bg-primary/10 text-primary flex-shrink-0 rounded-lg p-2", children: /* @__PURE__ */ h(a, { className: "h-6 w-6", "aria-hidden": "true" }) }),
              /* @__PURE__ */ R("div", { children: [
                /* @__PURE__ */ h("h1", { className: "text-foreground text-2xl font-semibold", children: r }),
                o && /* @__PURE__ */ h("p", { className: "text-muted-foreground mt-1 text-sm", children: o })
              ] })
            ] }),
            i && /* @__PURE__ */ h("div", { className: "flex flex-shrink-0 items-center gap-2", children: i })
          ] }),
          l && l.length > 0 && /* @__PURE__ */ h("div", { className: "border-border mt-4 border-t pt-4", children: /* @__PURE__ */ h("dl", { className: "grid grid-cols-2 gap-4 sm:grid-cols-4", children: l.map((c, d) => {
            const f = c.icon;
            return /* @__PURE__ */ R("div", { className: "flex items-center gap-2", children: [
              f && /* @__PURE__ */ h("div", { className: "bg-muted flex-shrink-0 rounded-md p-1.5", children: /* @__PURE__ */ h(f, { className: "text-muted-foreground h-4 w-4", "aria-hidden": "true" }) }),
              /* @__PURE__ */ R("div", { children: [
                /* @__PURE__ */ h("dt", { className: "text-muted-foreground text-xs", children: c.label }),
                /* @__PURE__ */ h(
                  "dd",
                  {
                    className: k(
                      "text-lg font-semibold",
                      Oo[c.color ?? "default"]
                    ),
                    children: c.value
                  }
                )
              ] })
            ] }, d);
          }) }) })
        ] })
      }
    );
  }
);
Vo.displayName = "PageHeader";
const zo = T(
  "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
  {
    variants: {},
    defaultVariants: {}
  }
), Bo = T(
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
), sn = y.createContext(void 0);
function $e() {
  const e = y.useContext(sn);
  if (!e)
    throw new Error("Dialog components must be used within a Dialog");
  return e;
}
function Go({
  open: e,
  defaultOpen: n = !1,
  onOpenChange: t,
  children: r
}) {
  const [o, a] = y.useState(n), s = e !== void 0, i = s ? e : o, l = y.useCallback(
    (u) => {
      s || a(u), t == null || t(u);
    },
    [s, t]
  );
  return /* @__PURE__ */ h(sn.Provider, { value: { open: i, onOpenChange: l }, children: r });
}
const jo = y.forwardRef(
  ({ asChild: e = !1, onClick: n, children: t, ...r }, o) => {
    const { onOpenChange: a } = $e(), s = (i) => {
      n == null || n(i), a(!0);
    };
    return e && y.isValidElement(t) ? y.cloneElement(
      t,
      {
        onClick: (i) => {
          var l, u;
          (u = (l = t.props).onClick) == null || u.call(
            l,
            i
          ), a(!0);
        }
      }
    ) : /* @__PURE__ */ h("button", { ref: o, type: "button", onClick: s, ...r, children: t });
  }
);
jo.displayName = "DialogTrigger";
function Ho({ children: e, container: n }) {
  const [t, r] = y.useState(!1);
  if (y.useEffect(() => (r(!0), () => {
    r(!1);
  }), []), !t) return null;
  const o = n ?? document.body;
  return /* @__PURE__ */ h(ue, { children: y.Children.map(
    e,
    (a) => o ? ir(a, o) : a
  ) });
}
const ln = y.forwardRef(
  ({ className: e, ...n }, t) => {
    const { open: r } = $e();
    return /* @__PURE__ */ h(
      "div",
      {
        ref: t,
        "data-state": r ? "open" : "closed",
        className: k(zo(), e),
        ...n
      }
    );
  }
);
ln.displayName = "DialogOverlay";
const un = y.forwardRef(
  ({
    className: e,
    children: n,
    size: t,
    closeOnOverlayClick: r = !0,
    closeOnEscape: o = !0,
    showCloseButton: a = !0,
    onClose: s,
    container: i,
    ...l
  }, u) => {
    const { open: p, onOpenChange: m } = $e(), b = y.useRef(null), g = y.useRef(null);
    y.useImperativeHandle(u, () => {
      if (!b.current)
        throw new Error("Content ref is not attached");
      return b.current;
    });
    const c = y.useCallback(() => {
      m(!1), s == null || s();
    }, [m, s]);
    return y.useEffect(() => {
      if (!p || !o) return;
      const d = (f) => {
        f.key === "Escape" && (f.preventDefault(), c());
      };
      return document.addEventListener("keydown", d), () => {
        document.removeEventListener("keydown", d);
      };
    }, [p, o, c]), y.useEffect(() => {
      var w;
      if (!p) return;
      g.current = document.activeElement;
      const d = (w = b.current) == null ? void 0 : w.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ), f = d == null ? void 0 : d[0];
      f == null || f.focus();
      const v = document.body.style.overflow;
      return document.body.style.overflow = "hidden", () => {
        var x;
        document.body.style.overflow = v, (x = g.current) == null || x.focus();
      };
    }, [p]), y.useEffect(() => {
      if (!p) return;
      const d = (f) => {
        var C;
        if (f.key !== "Tab") return;
        const v = (C = b.current) == null ? void 0 : C.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!(v != null && v.length)) return;
        const w = v[0], x = v[v.length - 1];
        f.shiftKey ? document.activeElement === w && (f.preventDefault(), x.focus()) : document.activeElement === x && (f.preventDefault(), w.focus());
      };
      return document.addEventListener("keydown", d), () => {
        document.removeEventListener("keydown", d);
      };
    }, [p]), p ? /* @__PURE__ */ R(Ho, { container: i, children: [
      /* @__PURE__ */ h(ln, { onClick: r ? c : void 0 }),
      /* @__PURE__ */ R(
        "div",
        {
          ref: b,
          role: "dialog",
          "aria-modal": "true",
          "data-state": p ? "open" : "closed",
          className: k(Bo({ size: t }), e),
          onClick: (d) => {
            d.stopPropagation();
          },
          ...l,
          children: [
            n,
            a && /* @__PURE__ */ h(
              "button",
              {
                type: "button",
                onClick: c,
                className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none",
                "aria-label": "Close",
                children: /* @__PURE__ */ h(Ut, { className: "h-4 w-4" })
              }
            )
          ]
        }
      )
    ] }) : null;
  }
);
un.displayName = "DialogContent";
const cn = y.forwardRef(
  ({ className: e, ...n }, t) => /* @__PURE__ */ h(
    "div",
    {
      ref: t,
      className: k("flex flex-col space-y-1.5 text-center sm:text-left", e),
      ...n
    }
  )
);
cn.displayName = "DialogHeader";
const dn = y.forwardRef(
  ({ className: e, ...n }, t) => /* @__PURE__ */ h(
    "div",
    {
      ref: t,
      className: k("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e),
      ...n
    }
  )
);
dn.displayName = "DialogFooter";
const gn = y.forwardRef(
  ({ className: e, ...n }, t) => /* @__PURE__ */ h(
    "h2",
    {
      ref: t,
      className: k("text-foreground text-lg leading-none font-semibold tracking-tight", e),
      ...n
    }
  )
);
gn.displayName = "DialogTitle";
const pn = y.forwardRef(
  ({ className: e, ...n }, t) => /* @__PURE__ */ h("p", { ref: t, className: k("text-muted-foreground text-sm", e), ...n })
);
pn.displayName = "DialogDescription";
const Uo = y.forwardRef(
  ({ asChild: e = !1, onClick: n, children: t, ...r }, o) => {
    const { onOpenChange: a } = $e(), s = (i) => {
      n == null || n(i), a(!1);
    };
    return e && y.isValidElement(t) ? y.cloneElement(
      t,
      {
        onClick: (i) => {
          var l, u;
          (u = (l = t.props).onClick) == null || u.call(
            l,
            i
          ), a(!1);
        }
      }
    ) : /* @__PURE__ */ h("button", { ref: o, type: "button", onClick: s, ...r, children: t });
  }
);
Uo.displayName = "DialogClose";
const qo = T(
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
), Wo = {
  sm: "h-3 w-3",
  default: "h-3.5 w-3.5",
  lg: "h-4 w-4"
}, Ko = y.forwardRef(
  ({
    className: e,
    variant: n,
    size: t,
    checked: r,
    defaultChecked: o,
    onCheckedChange: a,
    indeterminate: s = !1,
    label: i,
    description: l,
    error: u,
    required: p,
    disabled: m,
    id: b,
    ...g
  }, c) => {
    const d = y.useRef(null), [f, v] = y.useState(o ?? !1), w = y.useId();
    y.useImperativeHandle(c, () => {
      if (!d.current)
        throw new Error("Input ref is not attached");
      return d.current;
    });
    const x = r !== void 0, C = x ? r : f;
    y.useEffect(() => {
      d.current && (d.current.indeterminate = s);
    }, [s]);
    const E = () => s ? "indeterminate" : C ? "checked" : "unchecked", M = ($) => {
      const O = $.target.checked;
      x || v(O), a == null || a(O);
    }, I = b ?? w, N = Wo[t ?? "default"];
    return /* @__PURE__ */ R("div", { className: "flex items-start gap-2", children: [
      /* @__PURE__ */ R("div", { className: "relative flex items-center justify-center", children: [
        /* @__PURE__ */ h(
          "input",
          {
            ref: d,
            type: "checkbox",
            id: I,
            checked: C,
            onChange: M,
            disabled: m,
            required: p,
            className: "sr-only",
            "aria-invalid": u ? "true" : void 0,
            "aria-describedby": l || u ? `${I}-description` : void 0,
            ...g
          }
        ),
        /* @__PURE__ */ h(
          "div",
          {
            "data-state": E(),
            className: k(
              qo({ variant: n, size: t }),
              "flex cursor-pointer items-center justify-center",
              m && "cursor-not-allowed",
              u && "border-destructive",
              e
            ),
            onClick: () => {
              !m && d.current && d.current.click();
            },
            role: "presentation",
            children: s ? /* @__PURE__ */ h(br, { className: N, "aria-hidden": "true" }) : C ? /* @__PURE__ */ h(Je, { className: N, "aria-hidden": "true" }) : null
          }
        )
      ] }),
      (i || l || u) && /* @__PURE__ */ R("div", { className: "flex flex-col", children: [
        i && /* @__PURE__ */ R(
          "label",
          {
            htmlFor: I,
            className: k(
              "cursor-pointer text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
              m && "cursor-not-allowed opacity-70"
            ),
            children: [
              i,
              p && /* @__PURE__ */ h("span", { className: "text-destructive ml-1", children: "*" })
            ]
          }
        ),
        (l || u) && /* @__PURE__ */ h(
          "p",
          {
            id: `${I}-description`,
            className: k(
              "text-sm",
              u ? "text-destructive" : "text-muted-foreground",
              i && "mt-1"
            ),
            children: u || l
          }
        )
      ] })
    ] });
  }
);
Ko.displayName = "Checkbox";
const Zo = y.forwardRef(
  ({
    label: e,
    description: n,
    error: t,
    required: r,
    children: o,
    className: a,
    orientation: s = "vertical",
    ...i
  }, l) => /* @__PURE__ */ R(
    "fieldset",
    {
      ref: l,
      className: k("space-y-2", a),
      "aria-describedby": n || t ? "checkbox-group-description" : void 0,
      ...i,
      children: [
        e && /* @__PURE__ */ R("legend", { className: "text-sm leading-none font-medium", children: [
          e,
          r && /* @__PURE__ */ h("span", { className: "text-destructive ml-1", children: "*" })
        ] }),
        n && !t && /* @__PURE__ */ h("p", { id: "checkbox-group-description", className: "text-muted-foreground text-sm", children: n }),
        /* @__PURE__ */ h(
          "div",
          {
            className: k(
              "flex gap-4",
              s === "vertical" ? "flex-col" : "flex-row flex-wrap"
            ),
            children: o
          }
        ),
        t && /* @__PURE__ */ h("p", { id: "checkbox-group-description", className: "text-destructive text-sm", children: t })
      ]
    }
  )
);
Zo.displayName = "CheckboxGroup";
const Yo = T(
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
), Xo = T(
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
), Qo = y.forwardRef(
  ({
    className: e,
    variant: n,
    size: t,
    checked: r,
    defaultChecked: o = !1,
    onCheckedChange: a,
    label: s,
    description: i,
    labelPosition: l = "right",
    disabled: u,
    required: p,
    name: m,
    value: b,
    id: g,
    ...c
  }, d) => {
    const [f, v] = y.useState(o), w = y.useId(), x = r !== void 0, C = x ? r : f, E = () => {
      if (u) return;
      const _ = !C;
      x || v(_), a == null || a(_);
    }, M = (_) => {
      (_.key === " " || _.key === "Enter") && (_.preventDefault(), E());
    }, I = g ?? w, N = C ? "checked" : "unchecked", $ = /* @__PURE__ */ h(
      "button",
      {
        ref: d,
        type: "button",
        role: "switch",
        id: I,
        "aria-checked": C,
        "aria-required": p,
        "aria-describedby": i ? `${I}-description` : void 0,
        "data-state": N,
        disabled: u,
        onClick: E,
        onKeyDown: M,
        className: k(Yo({ variant: n, size: t }), e),
        ...c,
        children: /* @__PURE__ */ h("span", { "data-state": N, className: k(Xo({ size: t })) })
      }
    ), O = m ? /* @__PURE__ */ h(
      "input",
      {
        type: "checkbox",
        name: m,
        value: b ?? "on",
        checked: C,
        onChange: () => {
        },
        "aria-hidden": "true",
        tabIndex: -1,
        className: "sr-only"
      }
    ) : null;
    if (!s && !i)
      return /* @__PURE__ */ R(ue, { children: [
        O,
        $
      ] });
    const L = /* @__PURE__ */ R("div", { className: "flex flex-col", children: [
      s && /* @__PURE__ */ R(
        "label",
        {
          htmlFor: I,
          className: k(
            "cursor-pointer text-sm leading-none font-medium",
            u && "cursor-not-allowed opacity-70"
          ),
          children: [
            s,
            p && /* @__PURE__ */ h("span", { className: "text-destructive ml-1", children: "*" })
          ]
        }
      ),
      i && /* @__PURE__ */ h(
        "p",
        {
          id: `${I}-description`,
          className: k("text-muted-foreground text-sm", s && "mt-1"),
          children: i
        }
      )
    ] });
    return /* @__PURE__ */ R("div", { className: "flex items-center gap-3", children: [
      O,
      l === "left" && L,
      $,
      l === "right" && L
    ] });
  }
);
Qo.displayName = "Switch";
const Jo = y.forwardRef(
  ({ label: e, description: n, children: t, className: r, ...o }, a) => /* @__PURE__ */ R("div", { ref: a, role: "group", className: k("space-y-4", r), ...o, children: [
    (e || n) && /* @__PURE__ */ R("div", { className: "space-y-1", children: [
      e && /* @__PURE__ */ h("h3", { className: "text-sm leading-none font-medium", children: e }),
      n && /* @__PURE__ */ h("p", { className: "text-muted-foreground text-sm", children: n })
    ] }),
    /* @__PURE__ */ h("div", { className: "space-y-4", children: t })
  ] })
);
Jo.displayName = "SwitchGroup";
const ea = T(
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
), ta = y.forwardRef(
  ({
    className: e,
    variant: n,
    textareaSize: t,
    resize: r,
    label: o,
    description: a,
    error: s,
    showCharacterCount: i,
    maxLength: l,
    autoResize: u = !1,
    minRows: p = 2,
    maxRows: m,
    wrapperClassName: b,
    labelClassName: g,
    value: c,
    defaultValue: d,
    onChange: f,
    disabled: v,
    rows: w = 4,
    ...x
  }, C) => {
    const [E, M] = y.useState(
      c !== void 0 ? c : d || ""
    ), I = y.useRef(null), N = c !== void 0, $ = N ? c : E, O = String($ || "").length, L = y.useCallback(() => {
      if (!u || !I.current) return;
      const G = I.current;
      G.style.height = "auto";
      const j = parseInt(window.getComputedStyle(G).lineHeight), ee = parseInt(window.getComputedStyle(G).paddingTop), K = parseInt(window.getComputedStyle(G).paddingBottom), H = j * p + ee + K, de = m ? j * m + ee + K : 1 / 0, ge = Math.min(Math.max(G.scrollHeight, H), de);
      G.style.height = `${String(ge)}px`;
    }, [u, p, m]);
    y.useEffect(() => {
      u && L();
    }, [$, u, L]);
    const _ = y.useCallback(
      (G) => {
        I.current = G, typeof C == "function" ? C(G) : C && (C.current = G);
      },
      [C]
    ), W = (G) => {
      N || M(G.target.value), f == null || f(G), u && L();
    }, F = !!s, V = F ? "destructive" : n, B = l !== void 0 && O > l;
    return /* @__PURE__ */ R("div", { className: k("w-full", b), children: [
      o && /* @__PURE__ */ R(
        "label",
        {
          htmlFor: x.id,
          className: k(
            "text-foreground mb-2 block text-sm font-medium",
            v && "cursor-not-allowed opacity-50",
            g
          ),
          children: [
            o,
            x.required && /* @__PURE__ */ h("span", { className: "text-destructive ml-1", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ h("div", { className: "relative", children: /* @__PURE__ */ h(
        "textarea",
        {
          ref: _,
          className: k(
            ea({
              variant: V,
              textareaSize: t,
              resize: u ? "none" : r
            }),
            F && "border-destructive focus-visible:ring-destructive",
            e
          ),
          value: $,
          onChange: W,
          disabled: v,
          maxLength: l,
          rows: u ? p : w,
          "aria-invalid": F ? "true" : void 0,
          "aria-describedby": s || a || i ? `${x.id ?? ""}-description ${x.id ?? ""}-error ${x.id ?? ""}-count` : void 0,
          ...x
        }
      ) }),
      /* @__PURE__ */ R("div", { className: "mt-1.5 flex items-center justify-between gap-2", children: [
        /* @__PURE__ */ R("div", { className: "flex-1", children: [
          a && !s && /* @__PURE__ */ h(
            "p",
            {
              id: `${x.id ?? ""}-description`,
              className: k("text-muted-foreground text-sm", v && "opacity-50"),
              children: a
            }
          ),
          s && /* @__PURE__ */ h(
            "p",
            {
              id: `${x.id ?? ""}-error`,
              className: "text-destructive text-sm font-medium",
              role: "alert",
              children: s
            }
          )
        ] }),
        i && /* @__PURE__ */ R(
          "p",
          {
            id: `${x.id ?? ""}-count`,
            className: k(
              "text-sm tabular-nums",
              B ? "text-destructive font-medium" : "text-muted-foreground",
              v && "opacity-50"
            ),
            "aria-live": "polite",
            children: [
              O,
              l !== void 0 && ` / ${String(l)}`
            ]
          }
        )
      ] })
    ] });
  }
);
ta.displayName = "Textarea";
function oe(e, n, { checkForDefaultPrevented: t = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), t === !1 || !o.defaultPrevented)
      return n == null ? void 0 : n(o);
  };
}
function Nt(e, n) {
  if (typeof e == "function")
    return e(n);
  e != null && (e.current = n);
}
function fn(...e) {
  return (n) => {
    let t = !1;
    const r = e.map((o) => {
      const a = Nt(o, n);
      return !t && typeof a == "function" && (t = !0), a;
    });
    if (t)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const a = r[o];
          typeof a == "function" ? a() : Nt(e[o], null);
        }
      };
  };
}
function ce(...e) {
  return y.useCallback(fn(...e), e);
}
function De(e, n = []) {
  let t = [];
  function r(a, s) {
    const i = y.createContext(s), l = t.length;
    t = [...t, s];
    const u = (m) => {
      var v;
      const { scope: b, children: g, ...c } = m, d = ((v = b == null ? void 0 : b[e]) == null ? void 0 : v[l]) || i, f = y.useMemo(() => c, Object.values(c));
      return /* @__PURE__ */ h(d.Provider, { value: f, children: g });
    };
    u.displayName = a + "Provider";
    function p(m, b) {
      var d;
      const g = ((d = b == null ? void 0 : b[e]) == null ? void 0 : d[l]) || i, c = y.useContext(g);
      if (c) return c;
      if (s !== void 0) return s;
      throw new Error(`\`${m}\` must be used within \`${a}\``);
    }
    return [u, p];
  }
  const o = () => {
    const a = t.map((s) => y.createContext(s));
    return function(i) {
      const l = (i == null ? void 0 : i[e]) || a;
      return y.useMemo(
        () => ({ [`__scope${e}`]: { ...i, [e]: l } }),
        [i, l]
      );
    };
  };
  return o.scopeName = e, [r, na(o, ...n)];
}
function na(...e) {
  const n = e[0];
  if (e.length === 1) return n;
  const t = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(a) {
      const s = r.reduce((i, { useScope: l, scopeName: u }) => {
        const m = l(a)[`__scope${u}`];
        return { ...i, ...m };
      }, {});
      return y.useMemo(() => ({ [`__scope${n.scopeName}`]: s }), [s]);
    };
  };
  return t.scopeName = n.scopeName, t;
}
// @__NO_SIDE_EFFECTS__
function nt(e) {
  const n = /* @__PURE__ */ ra(e), t = y.forwardRef((r, o) => {
    const { children: a, ...s } = r, i = y.Children.toArray(a), l = i.find(aa);
    if (l) {
      const u = l.props.children, p = i.map((m) => m === l ? y.Children.count(u) > 1 ? y.Children.only(null) : y.isValidElement(u) ? u.props.children : null : m);
      return /* @__PURE__ */ h(n, { ...s, ref: o, children: y.isValidElement(u) ? y.cloneElement(u, void 0, p) : null });
    }
    return /* @__PURE__ */ h(n, { ...s, ref: o, children: a });
  });
  return t.displayName = `${e}.Slot`, t;
}
// @__NO_SIDE_EFFECTS__
function ra(e) {
  const n = y.forwardRef((t, r) => {
    const { children: o, ...a } = t;
    if (y.isValidElement(o)) {
      const s = ia(o), i = sa(a, o.props);
      return o.type !== y.Fragment && (i.ref = r ? fn(r, s) : s), y.cloneElement(o, i);
    }
    return y.Children.count(o) > 1 ? y.Children.only(null) : null;
  });
  return n.displayName = `${e}.SlotClone`, n;
}
var oa = Symbol("radix.slottable");
function aa(e) {
  return y.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === oa;
}
function sa(e, n) {
  const t = { ...n };
  for (const r in n) {
    const o = e[r], a = n[r];
    /^on[A-Z]/.test(r) ? o && a ? t[r] = (...i) => {
      const l = a(...i);
      return o(...i), l;
    } : o && (t[r] = o) : r === "style" ? t[r] = { ...o, ...a } : r === "className" && (t[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...t };
}
function ia(e) {
  var r, o;
  let n = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
var la = [
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
], he = la.reduce((e, n) => {
  const t = /* @__PURE__ */ nt(`Primitive.${n}`), r = y.forwardRef((o, a) => {
    const { asChild: s, ...i } = o, l = s ? t : n;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ h(l, { ...i, ref: a });
  });
  return r.displayName = `Primitive.${n}`, { ...e, [n]: r };
}, {});
function ua(e) {
  const n = e + "CollectionProvider", [t, r] = De(n), [o, a] = t(
    n,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), s = (d) => {
    const { scope: f, children: v } = d, w = Z.useRef(null), x = Z.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ h(o, { scope: f, itemMap: x, collectionRef: w, children: v });
  };
  s.displayName = n;
  const i = e + "CollectionSlot", l = /* @__PURE__ */ nt(i), u = Z.forwardRef(
    (d, f) => {
      const { scope: v, children: w } = d, x = a(i, v), C = ce(f, x.collectionRef);
      return /* @__PURE__ */ h(l, { ref: C, children: w });
    }
  );
  u.displayName = i;
  const p = e + "CollectionItemSlot", m = "data-radix-collection-item", b = /* @__PURE__ */ nt(p), g = Z.forwardRef(
    (d, f) => {
      const { scope: v, children: w, ...x } = d, C = Z.useRef(null), E = ce(f, C), M = a(p, v);
      return Z.useEffect(() => (M.itemMap.set(C, { ref: C, ...x }), () => void M.itemMap.delete(C))), /* @__PURE__ */ h(b, { [m]: "", ref: E, children: w });
    }
  );
  g.displayName = p;
  function c(d) {
    const f = a(e + "CollectionConsumer", d);
    return Z.useCallback(() => {
      const w = f.collectionRef.current;
      if (!w) return [];
      const x = Array.from(w.querySelectorAll(`[${m}]`));
      return Array.from(f.itemMap.values()).sort(
        (M, I) => x.indexOf(M.ref.current) - x.indexOf(I.ref.current)
      );
    }, [f.collectionRef, f.itemMap]);
  }
  return [
    { Provider: s, Slot: u, ItemSlot: g },
    c,
    r
  ];
}
var Se = globalThis != null && globalThis.document ? y.useLayoutEffect : () => {
}, ca = y[" useId ".trim().toString()] || (() => {
}), da = 0;
function ga(e) {
  const [n, t] = y.useState(ca());
  return Se(() => {
    t((r) => r ?? String(da++));
  }, [e]), n ? `radix-${n}` : "";
}
function pa(e) {
  const n = y.useRef(e);
  return y.useEffect(() => {
    n.current = e;
  }), y.useMemo(() => (...t) => {
    var r;
    return (r = n.current) == null ? void 0 : r.call(n, ...t);
  }, []);
}
var fa = y[" useInsertionEffect ".trim().toString()] || Se;
function mn({
  prop: e,
  defaultProp: n,
  onChange: t = () => {
  },
  caller: r
}) {
  const [o, a, s] = ma({
    defaultProp: n,
    onChange: t
  }), i = e !== void 0, l = i ? e : o;
  {
    const p = y.useRef(e !== void 0);
    y.useEffect(() => {
      const m = p.current;
      m !== i && console.warn(
        `${r} is changing from ${m ? "controlled" : "uncontrolled"} to ${i ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), p.current = i;
    }, [i, r]);
  }
  const u = y.useCallback(
    (p) => {
      var m;
      if (i) {
        const b = ha(p) ? p(e) : p;
        b !== e && ((m = s.current) == null || m.call(s, b));
      } else
        a(p);
    },
    [i, e, a, s]
  );
  return [l, u];
}
function ma({
  defaultProp: e,
  onChange: n
}) {
  const [t, r] = y.useState(e), o = y.useRef(t), a = y.useRef(n);
  return fa(() => {
    a.current = n;
  }, [n]), y.useEffect(() => {
    var s;
    o.current !== t && ((s = a.current) == null || s.call(a, t), o.current = t);
  }, [t, o]), [t, r, a];
}
function ha(e) {
  return typeof e == "function";
}
var ba = y.createContext(void 0);
function hn(e) {
  const n = y.useContext(ba);
  return e || n || "ltr";
}
var He = "rovingFocusGroup.onEntryFocus", ya = { bubbles: !1, cancelable: !0 }, Ce = "RovingFocusGroup", [rt, bn, va] = ua(Ce), [wa, yn] = De(
  Ce,
  [va]
), [xa, Sa] = wa(Ce), vn = y.forwardRef(
  (e, n) => /* @__PURE__ */ h(rt.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ h(rt.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ h(Ca, { ...e, ref: n }) }) })
);
vn.displayName = Ce;
var Ca = y.forwardRef((e, n) => {
  const {
    __scopeRovingFocusGroup: t,
    orientation: r,
    loop: o = !1,
    dir: a,
    currentTabStopId: s,
    defaultCurrentTabStopId: i,
    onCurrentTabStopIdChange: l,
    onEntryFocus: u,
    preventScrollOnEntryFocus: p = !1,
    ...m
  } = e, b = y.useRef(null), g = ce(n, b), c = hn(a), [d, f] = mn({
    prop: s,
    defaultProp: i ?? null,
    onChange: l,
    caller: Ce
  }), [v, w] = y.useState(!1), x = pa(u), C = bn(t), E = y.useRef(!1), [M, I] = y.useState(0);
  return y.useEffect(() => {
    const N = b.current;
    if (N)
      return N.addEventListener(He, x), () => N.removeEventListener(He, x);
  }, [x]), /* @__PURE__ */ h(
    xa,
    {
      scope: t,
      orientation: r,
      dir: c,
      loop: o,
      currentTabStopId: d,
      onItemFocus: y.useCallback(
        (N) => f(N),
        [f]
      ),
      onItemShiftTab: y.useCallback(() => w(!0), []),
      onFocusableItemAdd: y.useCallback(
        () => I((N) => N + 1),
        []
      ),
      onFocusableItemRemove: y.useCallback(
        () => I((N) => N - 1),
        []
      ),
      children: /* @__PURE__ */ h(
        he.div,
        {
          tabIndex: v || M === 0 ? -1 : 0,
          "data-orientation": r,
          ...m,
          ref: g,
          style: { outline: "none", ...e.style },
          onMouseDown: oe(e.onMouseDown, () => {
            E.current = !0;
          }),
          onFocus: oe(e.onFocus, (N) => {
            const $ = !E.current;
            if (N.target === N.currentTarget && $ && !v) {
              const O = new CustomEvent(He, ya);
              if (N.currentTarget.dispatchEvent(O), !O.defaultPrevented) {
                const L = C().filter((B) => B.focusable), _ = L.find((B) => B.active), W = L.find((B) => B.id === d), V = [_, W, ...L].filter(
                  Boolean
                ).map((B) => B.ref.current);
                Sn(V, p);
              }
            }
            E.current = !1;
          }),
          onBlur: oe(e.onBlur, () => w(!1))
        }
      )
    }
  );
}), wn = "RovingFocusGroupItem", xn = y.forwardRef(
  (e, n) => {
    const {
      __scopeRovingFocusGroup: t,
      focusable: r = !0,
      active: o = !1,
      tabStopId: a,
      children: s,
      ...i
    } = e, l = ga(), u = a || l, p = Sa(wn, t), m = p.currentTabStopId === u, b = bn(t), { onFocusableItemAdd: g, onFocusableItemRemove: c, currentTabStopId: d } = p;
    return y.useEffect(() => {
      if (r)
        return g(), () => c();
    }, [r, g, c]), /* @__PURE__ */ h(
      rt.ItemSlot,
      {
        scope: t,
        id: u,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ h(
          he.span,
          {
            tabIndex: m ? 0 : -1,
            "data-orientation": p.orientation,
            ...i,
            ref: n,
            onMouseDown: oe(e.onMouseDown, (f) => {
              r ? p.onItemFocus(u) : f.preventDefault();
            }),
            onFocus: oe(e.onFocus, () => p.onItemFocus(u)),
            onKeyDown: oe(e.onKeyDown, (f) => {
              if (f.key === "Tab" && f.shiftKey) {
                p.onItemShiftTab();
                return;
              }
              if (f.target !== f.currentTarget) return;
              const v = Ea(f, p.orientation, p.dir);
              if (v !== void 0) {
                if (f.metaKey || f.ctrlKey || f.altKey || f.shiftKey) return;
                f.preventDefault();
                let x = b().filter((C) => C.focusable).map((C) => C.ref.current);
                if (v === "last") x.reverse();
                else if (v === "prev" || v === "next") {
                  v === "prev" && x.reverse();
                  const C = x.indexOf(f.currentTarget);
                  x = p.loop ? _a(x, C + 1) : x.slice(C + 1);
                }
                setTimeout(() => Sn(x));
              }
            }),
            children: typeof s == "function" ? s({ isCurrentTabStop: m, hasTabStop: d != null }) : s
          }
        )
      }
    );
  }
);
xn.displayName = wn;
var ka = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Ra(e, n) {
  return n !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Ea(e, n, t) {
  const r = Ra(e.key, t);
  if (!(n === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(n === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return ka[r];
}
function Sn(e, n = !1) {
  const t = document.activeElement;
  for (const r of e)
    if (r === t || (r.focus({ preventScroll: n }), document.activeElement !== t)) return;
}
function _a(e, n) {
  return e.map((t, r) => e[(n + r) % e.length]);
}
var Fa = vn, Na = xn;
function Ia(e) {
  const [n, t] = y.useState(void 0);
  return Se(() => {
    if (e) {
      t({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const a = o[0];
        let s, i;
        if ("borderBoxSize" in a) {
          const l = a.borderBoxSize, u = Array.isArray(l) ? l[0] : l;
          s = u.inlineSize, i = u.blockSize;
        } else
          s = e.offsetWidth, i = e.offsetHeight;
        t({ width: s, height: i });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      t(void 0);
  }, [e]), n;
}
function Aa(e) {
  const n = y.useRef({ value: e, previous: e });
  return y.useMemo(() => (n.current.value !== e && (n.current.previous = n.current.value, n.current.value = e), n.current.previous), [e]);
}
function Pa(e, n) {
  return y.useReducer((t, r) => n[t][r] ?? t, e);
}
var Cn = (e) => {
  const { present: n, children: t } = e, r = Ma(n), o = typeof t == "function" ? t({ present: r.isPresent }) : y.Children.only(t), a = ce(r.ref, $a(o));
  return typeof t == "function" || r.isPresent ? y.cloneElement(o, { ref: a }) : null;
};
Cn.displayName = "Presence";
function Ma(e) {
  const [n, t] = y.useState(), r = y.useRef(null), o = y.useRef(e), a = y.useRef("none"), s = e ? "mounted" : "unmounted", [i, l] = Pa(s, {
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
  return y.useEffect(() => {
    const u = Re(r.current);
    a.current = i === "mounted" ? u : "none";
  }, [i]), Se(() => {
    const u = r.current, p = o.current;
    if (p !== e) {
      const b = a.current, g = Re(u);
      e ? l("MOUNT") : g === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(p && b !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), Se(() => {
    if (n) {
      let u;
      const p = n.ownerDocument.defaultView ?? window, m = (g) => {
        const d = Re(r.current).includes(CSS.escape(g.animationName));
        if (g.target === n && d && (l("ANIMATION_END"), !o.current)) {
          const f = n.style.animationFillMode;
          n.style.animationFillMode = "forwards", u = p.setTimeout(() => {
            n.style.animationFillMode === "forwards" && (n.style.animationFillMode = f);
          });
        }
      }, b = (g) => {
        g.target === n && (a.current = Re(r.current));
      };
      return n.addEventListener("animationstart", b), n.addEventListener("animationcancel", m), n.addEventListener("animationend", m), () => {
        p.clearTimeout(u), n.removeEventListener("animationstart", b), n.removeEventListener("animationcancel", m), n.removeEventListener("animationend", m);
      };
    } else
      l("ANIMATION_END");
  }, [n, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(i),
    ref: y.useCallback((u) => {
      r.current = u ? getComputedStyle(u) : null, t(u);
    }, [])
  };
}
function Re(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function $a(e) {
  var r, o;
  let n = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? e.ref : (n = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
var gt = "Radio", [Da, kn] = De(gt), [Ta, La] = Da(gt), Rn = y.forwardRef(
  (e, n) => {
    const {
      __scopeRadio: t,
      name: r,
      checked: o = !1,
      required: a,
      disabled: s,
      value: i = "on",
      onCheck: l,
      form: u,
      ...p
    } = e, [m, b] = y.useState(null), g = ce(n, (f) => b(f)), c = y.useRef(!1), d = m ? u || !!m.closest("form") : !0;
    return /* @__PURE__ */ R(Ta, { scope: t, checked: o, disabled: s, children: [
      /* @__PURE__ */ h(
        he.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": Nn(o),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: i,
          ...p,
          ref: g,
          onClick: oe(e.onClick, (f) => {
            o || l == null || l(), d && (c.current = f.isPropagationStopped(), c.current || f.stopPropagation());
          })
        }
      ),
      d && /* @__PURE__ */ h(
        Fn,
        {
          control: m,
          bubbles: !c.current,
          name: r,
          value: i,
          checked: o,
          required: a,
          disabled: s,
          form: u,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Rn.displayName = gt;
var En = "RadioIndicator", _n = y.forwardRef(
  (e, n) => {
    const { __scopeRadio: t, forceMount: r, ...o } = e, a = La(En, t);
    return /* @__PURE__ */ h(Cn, { present: r || a.checked, children: /* @__PURE__ */ h(
      he.span,
      {
        "data-state": Nn(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...o,
        ref: n
      }
    ) });
  }
);
_n.displayName = En;
var Oa = "RadioBubbleInput", Fn = y.forwardRef(
  ({
    __scopeRadio: e,
    control: n,
    checked: t,
    bubbles: r = !0,
    ...o
  }, a) => {
    const s = y.useRef(null), i = ce(s, a), l = Aa(t), u = Ia(n);
    return y.useEffect(() => {
      const p = s.current;
      if (!p) return;
      const m = window.HTMLInputElement.prototype, g = Object.getOwnPropertyDescriptor(
        m,
        "checked"
      ).set;
      if (l !== t && g) {
        const c = new Event("click", { bubbles: r });
        g.call(p, t), p.dispatchEvent(c);
      }
    }, [l, t, r]), /* @__PURE__ */ h(
      he.input,
      {
        type: "radio",
        "aria-hidden": !0,
        defaultChecked: t,
        ...o,
        tabIndex: -1,
        ref: i,
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
Fn.displayName = Oa;
function Nn(e) {
  return e ? "checked" : "unchecked";
}
var Va = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Te = "RadioGroup", [za] = De(Te, [
  yn,
  kn
]), In = yn(), An = kn(), [Ba, Ga] = za(Te), Pn = y.forwardRef(
  (e, n) => {
    const {
      __scopeRadioGroup: t,
      name: r,
      defaultValue: o,
      value: a,
      required: s = !1,
      disabled: i = !1,
      orientation: l,
      dir: u,
      loop: p = !0,
      onValueChange: m,
      ...b
    } = e, g = In(t), c = hn(u), [d, f] = mn({
      prop: a,
      defaultProp: o ?? null,
      onChange: m,
      caller: Te
    });
    return /* @__PURE__ */ h(
      Ba,
      {
        scope: t,
        name: r,
        required: s,
        disabled: i,
        value: d,
        onValueChange: f,
        children: /* @__PURE__ */ h(
          Fa,
          {
            asChild: !0,
            ...g,
            orientation: l,
            dir: c,
            loop: p,
            children: /* @__PURE__ */ h(
              he.div,
              {
                role: "radiogroup",
                "aria-required": s,
                "aria-orientation": l,
                "data-disabled": i ? "" : void 0,
                dir: c,
                ...b,
                ref: n
              }
            )
          }
        )
      }
    );
  }
);
Pn.displayName = Te;
var Mn = "RadioGroupItem", $n = y.forwardRef(
  (e, n) => {
    const { __scopeRadioGroup: t, disabled: r, ...o } = e, a = Ga(Mn, t), s = a.disabled || r, i = In(t), l = An(t), u = y.useRef(null), p = ce(n, u), m = a.value === o.value, b = y.useRef(!1);
    return y.useEffect(() => {
      const g = (d) => {
        Va.includes(d.key) && (b.current = !0);
      }, c = () => b.current = !1;
      return document.addEventListener("keydown", g), document.addEventListener("keyup", c), () => {
        document.removeEventListener("keydown", g), document.removeEventListener("keyup", c);
      };
    }, []), /* @__PURE__ */ h(
      Na,
      {
        asChild: !0,
        ...i,
        focusable: !s,
        active: m,
        children: /* @__PURE__ */ h(
          Rn,
          {
            disabled: s,
            required: a.required,
            checked: m,
            ...l,
            ...o,
            name: a.name,
            ref: p,
            onCheck: () => a.onValueChange(o.value),
            onKeyDown: oe((g) => {
              g.key === "Enter" && g.preventDefault();
            }),
            onFocus: oe(o.onFocus, () => {
              var g;
              b.current && ((g = u.current) == null || g.click());
            })
          }
        )
      }
    );
  }
);
$n.displayName = Mn;
var ja = "RadioGroupIndicator", Dn = y.forwardRef(
  (e, n) => {
    const { __scopeRadioGroup: t, ...r } = e, o = An(t);
    return /* @__PURE__ */ h(_n, { ...o, ...r, ref: n });
  }
);
Dn.displayName = ja;
var Tn = Pn, Ln = $n, Ha = Dn;
const Ua = y.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ h(Tn, { className: k("grid gap-2", e), ...n, ref: t }));
Ua.displayName = Tn.displayName;
const qa = y.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ h(
  Ln,
  {
    ref: t,
    className: k(
      "border-input text-primary ring-offset-background focus-visible:ring-ring aspect-square h-4 w-4 rounded-full border focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...n,
    children: /* @__PURE__ */ h(Ha, { className: "flex items-center justify-center", children: /* @__PURE__ */ h(mr, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
qa.displayName = Ln.displayName;
const On = y.createContext(void 0), Wa = T(
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
), Vn = y.forwardRef(
  ({ toast: e, onClose: n, variant: t, className: r, ...o }, a) => {
    const s = y.useMemo(() => {
      switch (t || e.variant) {
        case "success":
          return No;
        case "error":
          return Po;
        case "warning":
          return Io;
        case "info":
          return Ao;
        default:
          return null;
      }
    }, [t, e.variant]);
    return /* @__PURE__ */ R(
      "div",
      {
        ref: a,
        role: "alert",
        "aria-live": "polite",
        "aria-atomic": "true",
        className: k(Wa({ variant: t || e.variant }), r),
        ...o,
        children: [
          s && /* @__PURE__ */ h("div", { className: "mt-0.5 flex-shrink-0", children: /* @__PURE__ */ h(s, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ R("div", { className: "grid flex-1 gap-1", children: [
            e.title && /* @__PURE__ */ h("div", { className: "text-sm leading-none font-semibold", children: e.title }),
            /* @__PURE__ */ h("div", { className: "text-sm leading-snug opacity-90", children: e.description }),
            e.action && /* @__PURE__ */ h(
              "button",
              {
                onClick: e.action.onClick,
                className: "mt-2 inline-flex h-8 items-center justify-center rounded-md border border-current px-3 text-xs font-medium transition-colors hover:bg-black/5 focus:ring-2 focus:ring-offset-2 focus:outline-none dark:hover:bg-white/10",
                children: e.action.label
              }
            )
          ] }),
          /* @__PURE__ */ h(
            "button",
            {
              onClick: n,
              className: "inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md text-current opacity-60 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none",
              "aria-label": "Close",
              children: /* @__PURE__ */ h(Mo, { className: "h-4 w-4" })
            }
          )
        ]
      }
    );
  }
);
Vn.displayName = "ToastItem";
const Ka = {
  "top-right": "top-0 right-0 sm:top-4 sm:right-4",
  "top-left": "top-0 left-0 sm:top-4 sm:left-4",
  "bottom-right": "bottom-0 right-0 sm:bottom-4 sm:right-4",
  "bottom-left": "bottom-0 left-0 sm:bottom-4 sm:left-4",
  "top-center": "top-0 left-1/2 -translate-x-1/2 sm:top-4",
  "bottom-center": "bottom-0 left-1/2 -translate-x-1/2 sm:bottom-4"
}, zn = y.forwardRef(
  ({ position: e = "top-right" }, n) => {
    const { toasts: t, removeToast: r } = Za(), [o, a] = y.useState(!1);
    return y.useEffect(() => {
      a(!0);
    }, []), !o || t.length === 0 ? null : /* @__PURE__ */ h(
      "div",
      {
        ref: n,
        className: k(
          "pointer-events-none fixed z-[100] flex w-full max-w-[420px] flex-col gap-2 p-4",
          Ka[e]
        ),
        children: t.map((s) => /* @__PURE__ */ h(
          Vn,
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
zn.displayName = "ToastContainer";
const wl = ({
  children: e,
  position: n = "top-right",
  duration: t = 5e3,
  max: r = 5
}) => {
  const [o, a] = y.useState([]), s = y.useRef(/* @__PURE__ */ new Map()), i = y.useCallback((c) => {
    const d = s.current.get(c);
    d && (clearTimeout(d), s.current.delete(c)), a((f) => f.filter((v) => v.id !== c));
  }, []), l = y.useCallback(
    (c) => {
      const d = Math.random().toString(36).substring(2, 9), f = { ...c, id: d };
      a((w) => {
        const x = [...w, f];
        return x.length > r ? (x.slice(0, x.length - r).forEach((E) => {
          const M = s.current.get(E.id);
          M && (clearTimeout(M), s.current.delete(E.id));
        }), x.slice(x.length - r)) : x;
      });
      const v = c.duration ?? t;
      if (v > 0) {
        const w = setTimeout(() => {
          i(d);
        }, v);
        s.current.set(d, w);
      }
      return d;
    },
    [t, r, i]
  ), u = y.useCallback(
    (c, d) => l({ ...d, description: c, variant: "success" }),
    [l]
  ), p = y.useCallback(
    (c, d) => l({ ...d, description: c, variant: "error" }),
    [l]
  ), m = y.useCallback(
    (c, d) => l({ ...d, description: c, variant: "warning" }),
    [l]
  ), b = y.useCallback(
    (c, d) => l({ ...d, description: c, variant: "info" }),
    [l]
  );
  y.useEffect(() => {
    const c = s.current;
    return () => {
      c.forEach((d) => {
        clearTimeout(d);
      }), c.clear();
    };
  }, []);
  const g = y.useMemo(
    () => ({ toasts: o, addToast: l, removeToast: i, success: u, error: p, warning: m, info: b }),
    [o, l, i, u, p, m, b]
  );
  return /* @__PURE__ */ R(On.Provider, { value: g, children: [
    e,
    /* @__PURE__ */ h(zn, { position: n })
  ] });
}, Za = () => {
  const e = y.useContext(On);
  if (!e)
    throw new Error("useToast must be used within a ToastProvider");
  return e;
}, Ya = T(
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
), Bn = T(
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
), Gn = y.createContext(void 0), pt = () => {
  const e = y.useContext(Gn);
  if (!e)
    throw new Error("Dropdown components must be used within a Dropdown");
  return e;
}, jn = y.createContext(
  void 0
), Hn = () => {
  const e = y.useContext(jn);
  if (!e)
    throw new Error("DropdownSubmenu components must be used within a DropdownSubmenu");
  return e;
}, xl = ({
  children: e,
  open: n,
  onOpenChange: t,
  defaultOpen: r = !1
}) => {
  const [o, a] = y.useState(r), s = y.useRef(null), i = y.useRef(null), l = n !== void 0 ? n : o, u = y.useCallback(
    (p) => {
      n === void 0 && a(p), t == null || t(p);
    },
    [n, t]
  );
  return y.useEffect(() => {
    if (!l) return;
    const p = (m) => {
      var g, c;
      const b = m.target;
      !((g = s.current) != null && g.contains(b)) && !((c = i.current) != null && c.contains(b)) && u(!1);
    };
    return document.addEventListener("mousedown", p), () => {
      document.removeEventListener("mousedown", p);
    };
  }, [l, u]), y.useEffect(() => {
    if (!l) return;
    const p = (m) => {
      var b;
      m.key === "Escape" && (u(!1), (b = s.current) == null || b.focus());
    };
    return document.addEventListener("keydown", p), () => {
      document.removeEventListener("keydown", p);
    };
  }, [l, u]), /* @__PURE__ */ h(Gn.Provider, { value: { open: l, setOpen: u, triggerRef: s, contentRef: i }, children: /* @__PURE__ */ h("div", { className: "relative inline-block", children: e }) });
}, Sl = ({ children: e, asChild: n = !1 }) => {
  const { open: t, setOpen: r, triggerRef: o } = pt(), a = () => {
    r(!t);
  }, s = (i) => {
    i.key === "Enter" || i.key === " " ? (i.preventDefault(), r(!t)) : i.key === "ArrowDown" && !t && (i.preventDefault(), r(!0));
  };
  if (n && y.isValidElement(e)) {
    const i = e.props || {};
    return y.cloneElement(e, {
      ...i,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref: o,
      onClick: a,
      onKeyDown: s,
      "aria-expanded": t,
      "aria-haspopup": "menu"
    });
  }
  return /* @__PURE__ */ h(
    "button",
    {
      ref: o,
      type: "button",
      onClick: a,
      onKeyDown: s,
      "aria-expanded": t,
      "aria-haspopup": "menu",
      children: e
    }
  );
}, Cl = ({
  children: e,
  className: n,
  align: t = "start",
  side: r = "bottom"
}) => {
  const { open: o, setOpen: a, contentRef: s } = pt(), [i, l] = y.useState(-1), u = y.useCallback(() => s.current ? Array.from(
    s.current.querySelectorAll(
      '[role="menuitem"]:not([aria-disabled="true"])'
    )
  ) : [], [s]);
  return y.useEffect(() => {
    var b;
    if (!o) return;
    const p = (g) => {
      var d, f;
      const c = u();
      if (c.length !== 0)
        switch (g.key) {
          case "ArrowDown":
            g.preventDefault(), l((v) => {
              var x;
              const w = v + 1 >= c.length ? 0 : v + 1;
              return (x = c[w]) == null || x.focus(), w;
            });
            break;
          case "ArrowUp":
            g.preventDefault(), l((v) => {
              var x;
              const w = v - 1 < 0 ? c.length - 1 : v - 1;
              return (x = c[w]) == null || x.focus(), w;
            });
            break;
          case "Home":
            g.preventDefault(), (d = c[0]) == null || d.focus(), l(0);
            break;
          case "End":
            g.preventDefault(), (f = c[c.length - 1]) == null || f.focus(), l(c.length - 1);
            break;
          case "Tab":
            g.preventDefault(), a(!1);
            break;
        }
    }, m = s.current;
    return (b = s.current) == null || b.addEventListener("keydown", p), () => m == null ? void 0 : m.removeEventListener("keydown", p);
  }, [o, a, u]), y.useEffect(() => {
    var p;
    if (o) {
      const m = u();
      m.length > 0 && ((p = m[0]) == null || p.focus(), l(0));
    } else
      l(-1);
  }, [o, u]), o ? /* @__PURE__ */ h(
    "div",
    {
      ref: s,
      role: "menu",
      "aria-orientation": "vertical",
      className: k(Ya({ align: t, side: r }), n),
      children: e
    }
  ) : null;
}, kl = ({ children: e, className: n }) => /* @__PURE__ */ h(
  "div",
  {
    className: k(
      "px-2 py-1.5 text-sm font-semibold text-slate-900 dark:text-slate-100",
      n
    ),
    children: e
  }
), Rl = ({
  children: e,
  onSelect: n,
  icon: t,
  shortcut: r,
  variant: o = "default",
  disabled: a = !1,
  className: s
}) => {
  const { setOpen: i } = pt(), l = () => {
    a || (n == null || n(), i(!1));
  };
  return /* @__PURE__ */ R(
    "div",
    {
      role: "menuitem",
      tabIndex: a ? void 0 : 0,
      "aria-disabled": a ? !0 : void 0,
      onClick: l,
      onKeyDown: (p) => {
        (p.key === "Enter" || p.key === " ") && (p.preventDefault(), l());
      },
      className: k(Bn({ variant: o, disabled: a }), s),
      children: [
        t && /* @__PURE__ */ h("span", { className: "shrink-0", children: t }),
        /* @__PURE__ */ h("span", { className: "flex-1", children: e }),
        r && /* @__PURE__ */ h("span", { className: "ml-auto text-xs tracking-widest text-slate-500 dark:text-slate-400", children: r })
      ]
    }
  );
}, El = ({ className: e }) => /* @__PURE__ */ h("div", { role: "separator", className: k("my-1 h-px bg-slate-200 dark:bg-slate-700", e) }), _l = ({ children: e }) => {
  const [n, t] = y.useState(!1);
  return /* @__PURE__ */ h(jn.Provider, { value: { open: n, setOpen: t }, children: /* @__PURE__ */ h("div", { className: "relative", children: e }) });
}, Fl = ({
  children: e,
  icon: n,
  className: t
}) => {
  const { open: r, setOpen: o } = Hn();
  return /* @__PURE__ */ R(
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
      className: k(Bn({ variant: "default", disabled: !1 }), t),
      children: [
        n && /* @__PURE__ */ h("span", { className: "shrink-0", children: n }),
        /* @__PURE__ */ h("span", { className: "flex-1", children: e }),
        /* @__PURE__ */ h(on, { className: "ml-auto h-3 w-3 text-slate-500 dark:text-slate-400" })
      ]
    }
  );
}, Nl = ({
  children: e,
  className: n
}) => {
  const { open: t } = Hn();
  return t ? /* @__PURE__ */ h(
    "div",
    {
      role: "menu",
      "aria-orientation": "vertical",
      className: k(
        "animate-in fade-in-0 zoom-in-95 absolute top-0 left-full ml-1 min-w-[12rem] overflow-hidden rounded-md border bg-white p-1 shadow-lg dark:border-slate-700 dark:bg-slate-800",
        n
      ),
      children: e
    }
  ) : null;
}, Xa = T(
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
), Qa = T(
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
function Ja(e) {
  var o, a;
  if (!e) return "?";
  const n = e.trim().split(/\s+/).filter(Boolean);
  if (n.length === 0) return "?";
  if (n.length === 1) {
    const s = n[0];
    return s ? s.substring(0, 2).toUpperCase() : "?";
  }
  const t = ((o = n[0]) == null ? void 0 : o.charAt(0)) || "", r = ((a = n[1]) == null ? void 0 : a.charAt(0)) || "";
  return (t + r).toUpperCase() || "?";
}
function es(e) {
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
const ts = y.forwardRef(
  ({
    className: e,
    size: n,
    shape: t,
    src: r,
    name: o = "",
    alt: a,
    status: s,
    loading: i = !1,
    initials: l,
    ...u
  }, p) => {
    const [m, b] = y.useState(!1), [g, c] = y.useState(!!r);
    y.useEffect(() => {
      r && (b(!1), c(!0));
    }, [r]);
    const d = l || Ja(o), f = es(o), v = r && !m && !i, w = !v && !i, x = i || g;
    return /* @__PURE__ */ R("div", { ref: p, className: k(Xa({ size: n, shape: t }), e), ...u, children: [
      v && /* @__PURE__ */ h(
        "img",
        {
          src: r,
          alt: a || o || "Avatar",
          className: k(
            "h-full w-full object-cover",
            x && "opacity-0",
            !x && "opacity-100 transition-opacity duration-200"
          ),
          onError: () => {
            b(!0), c(!1);
          },
          onLoad: () => {
            c(!1);
          }
        }
      ),
      w && /* @__PURE__ */ h(
        "div",
        {
          className: k(
            "flex h-full w-full items-center justify-center font-medium text-white",
            f
          ),
          children: d
        }
      ),
      x && !v && /* @__PURE__ */ h("div", { className: "h-full w-full animate-pulse bg-slate-200 dark:bg-slate-700" }),
      s && !i && /* @__PURE__ */ h(
        "span",
        {
          className: k(Qa({ status: s, size: n })),
          "aria-label": `Status: ${s}`
        }
      )
    ] });
  }
);
ts.displayName = "Avatar";
const It = T("inline-flex rounded-full flex-shrink-0", {
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
}), At = T("text-sm font-medium", {
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
}), ns = y.forwardRef(
  ({
    className: e,
    status: n = "online",
    size: t = "md",
    variant: r = "dot",
    label: o,
    labelPosition: a = "right",
    showRing: s = !1,
    ...i
  }, l) => {
    const u = s ? "ring" : r, p = o !== void 0 ? o : "";
    return p ? /* @__PURE__ */ R(
      "span",
      {
        ref: l,
        className: k("inline-flex items-center gap-2", e),
        role: "status",
        "aria-label": `Status: ${n || "online"}`,
        ...i,
        children: [
          a === "left" && /* @__PURE__ */ h("span", { className: At({ status: n }), children: p }),
          /* @__PURE__ */ h(
            "span",
            {
              className: It({ status: n, size: t, variant: u }),
              "aria-hidden": "true"
            }
          ),
          a === "right" && /* @__PURE__ */ h("span", { className: At({ status: n }), children: p })
        ]
      }
    ) : /* @__PURE__ */ h(
      "span",
      {
        ref: l,
        className: k(
          It({ status: n, size: t, variant: u }),
          e
        ),
        role: "status",
        "aria-label": `Status: ${n || "online"}`,
        ...i
      }
    );
  }
);
ns.displayName = "StatusIndicator";
const rs = T(
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
), os = {
  default: et,
  info: et,
  success: pr,
  warning: xe,
  error: gr
}, as = y.forwardRef(
  ({ className: e, variant: n, showIcon: t = !0, dismissible: r, onDismiss: o, children: a, ...s }, i) => {
    const [l, u] = y.useState(!1), p = () => {
      u(!0), o == null || o();
    };
    if (l) return null;
    const m = os[n || "default"];
    return /* @__PURE__ */ R("div", { ref: i, role: "alert", className: k(rs({ variant: n }), e), ...s, children: [
      t && /* @__PURE__ */ h(m, { className: "h-4 w-4", "aria-hidden": "true" }),
      /* @__PURE__ */ h("div", { className: "flex-1", children: a }),
      r && /* @__PURE__ */ h(
        "button",
        {
          onClick: p,
          className: "ring-offset-background focus:ring-ring absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none",
          "aria-label": "Dismiss alert",
          children: /* @__PURE__ */ h(Ut, { className: "h-4 w-4" })
        }
      )
    ] });
  }
);
as.displayName = "Alert";
const ss = y.forwardRef(
  ({ className: e, children: n, ...t }, r) => /* @__PURE__ */ h(
    "h5",
    {
      ref: r,
      className: k("mb-1 leading-none font-medium tracking-tight", e),
      ...t,
      children: n
    }
  )
);
ss.displayName = "AlertTitle";
const is = y.forwardRef(({ className: e, ...n }, t) => /* @__PURE__ */ h("div", { ref: t, className: k("text-sm [&_p]:leading-relaxed", e), ...n }));
is.displayName = "AlertDescription";
var ls = Object.create, Le = Object.defineProperty, us = Object.defineProperties, cs = Object.getOwnPropertyDescriptor, ds = Object.getOwnPropertyDescriptors, Un = Object.getOwnPropertyNames, Pe = Object.getOwnPropertySymbols, gs = Object.getPrototypeOf, ft = Object.prototype.hasOwnProperty, qn = Object.prototype.propertyIsEnumerable, Pt = (e, n, t) => n in e ? Le(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, te = (e, n) => {
  for (var t in n || (n = {}))
    ft.call(n, t) && Pt(e, t, n[t]);
  if (Pe)
    for (var t of Pe(n))
      qn.call(n, t) && Pt(e, t, n[t]);
  return e;
}, Oe = (e, n) => us(e, ds(n)), Wn = (e, n) => {
  var t = {};
  for (var r in e)
    ft.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
  if (e != null && Pe)
    for (var r of Pe(e))
      n.indexOf(r) < 0 && qn.call(e, r) && (t[r] = e[r]);
  return t;
}, ps = (e, n) => function() {
  return n || (0, e[Un(e)[0]])((n = { exports: {} }).exports, n), n.exports;
}, fs = (e, n) => {
  for (var t in n)
    Le(e, t, { get: n[t], enumerable: !0 });
}, ms = (e, n, t, r) => {
  if (n && typeof n == "object" || typeof n == "function")
    for (let o of Un(n))
      !ft.call(e, o) && o !== t && Le(e, o, { get: () => n[o], enumerable: !(r = cs(n, o)) || r.enumerable });
  return e;
}, hs = (e, n, t) => (t = e != null ? ls(gs(e)) : {}, ms(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !e || !e.__esModule ? Le(t, "default", { value: e, enumerable: !0 }) : t,
  e
)), bs = ps({
  "../../node_modules/.pnpm/prismjs@1.29.0_patch_hash=vrxx3pzkik6jpmgpayxfjunetu/node_modules/prismjs/prism.js"(e, n) {
    var t = (function() {
      var r = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, o = 0, a = {}, s = {
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
          encode: function c(d) {
            return d instanceof i ? new i(d.type, c(d.content), d.alias) : Array.isArray(d) ? d.map(c) : d.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
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
          type: function(c) {
            return Object.prototype.toString.call(c).slice(8, -1);
          },
          /**
           * Returns a unique number for the given object. Later calls will still return the same number.
           *
           * @param {Object} obj
           * @returns {number}
           */
          objId: function(c) {
            return c.__id || Object.defineProperty(c, "__id", { value: ++o }), c.__id;
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
          clone: function c(d, f) {
            f = f || {};
            var v, w;
            switch (s.util.type(d)) {
              case "Object":
                if (w = s.util.objId(d), f[w])
                  return f[w];
                v = /** @type {Record<string, any>} */
                {}, f[w] = v;
                for (var x in d)
                  d.hasOwnProperty(x) && (v[x] = c(d[x], f));
                return (
                  /** @type {any} */
                  v
                );
              case "Array":
                return w = s.util.objId(d), f[w] ? f[w] : (v = [], f[w] = v, d.forEach(function(C, E) {
                  v[E] = c(C, f);
                }), /** @type {any} */
                v);
              default:
                return d;
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
          getLanguage: function(c) {
            for (; c; ) {
              var d = r.exec(c.className);
              if (d)
                return d[1].toLowerCase();
              c = c.parentElement;
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
          setLanguage: function(c, d) {
            c.className = c.className.replace(RegExp(r, "gi"), ""), c.classList.add("language-" + d);
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
          isActive: function(c, d, f) {
            for (var v = "no-" + d; c; ) {
              var w = c.classList;
              if (w.contains(d))
                return !0;
              if (w.contains(v))
                return !1;
              c = c.parentElement;
            }
            return !!f;
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
          plain: a,
          plaintext: a,
          text: a,
          txt: a,
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
          extend: function(c, d) {
            var f = s.util.clone(s.languages[c]);
            for (var v in d)
              f[v] = d[v];
            return f;
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
          insertBefore: function(c, d, f, v) {
            v = v || /** @type {any} */
            s.languages;
            var w = v[c], x = {};
            for (var C in w)
              if (w.hasOwnProperty(C)) {
                if (C == d)
                  for (var E in f)
                    f.hasOwnProperty(E) && (x[E] = f[E]);
                f.hasOwnProperty(C) || (x[C] = w[C]);
              }
            var M = v[c];
            return v[c] = x, s.languages.DFS(s.languages, function(I, N) {
              N === M && I != c && (this[I] = x);
            }), x;
          },
          // Traverse a language definition with Depth First Search
          DFS: function c(d, f, v, w) {
            w = w || {};
            var x = s.util.objId;
            for (var C in d)
              if (d.hasOwnProperty(C)) {
                f.call(d, C, d[C], v || C);
                var E = d[C], M = s.util.type(E);
                M === "Object" && !w[x(E)] ? (w[x(E)] = !0, c(E, f, null, w)) : M === "Array" && !w[x(E)] && (w[x(E)] = !0, c(E, f, C, w));
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
        highlight: function(c, d, f) {
          var v = {
            code: c,
            grammar: d,
            language: f
          };
          if (s.hooks.run("before-tokenize", v), !v.grammar)
            throw new Error('The language "' + v.language + '" has no grammar.');
          return v.tokens = s.tokenize(v.code, v.grammar), s.hooks.run("after-tokenize", v), i.stringify(s.util.encode(v.tokens), v.language);
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
        tokenize: function(c, d) {
          var f = d.rest;
          if (f) {
            for (var v in f)
              d[v] = f[v];
            delete d.rest;
          }
          var w = new p();
          return m(w, w.head, c), u(c, w, d, w.head, 0), g(w);
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
          add: function(c, d) {
            var f = s.hooks.all;
            f[c] = f[c] || [], f[c].push(d);
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
          run: function(c, d) {
            var f = s.hooks.all[c];
            if (!(!f || !f.length))
              for (var v = 0, w; w = f[v++]; )
                w(d);
          }
        },
        Token: i
      };
      function i(c, d, f, v) {
        this.type = c, this.content = d, this.alias = f, this.length = (v || "").length | 0;
      }
      i.stringify = function c(d, f) {
        if (typeof d == "string")
          return d;
        if (Array.isArray(d)) {
          var v = "";
          return d.forEach(function(M) {
            v += c(M, f);
          }), v;
        }
        var w = {
          type: d.type,
          content: c(d.content, f),
          tag: "span",
          classes: ["token", d.type],
          attributes: {},
          language: f
        }, x = d.alias;
        x && (Array.isArray(x) ? Array.prototype.push.apply(w.classes, x) : w.classes.push(x)), s.hooks.run("wrap", w);
        var C = "";
        for (var E in w.attributes)
          C += " " + E + '="' + (w.attributes[E] || "").replace(/"/g, "&quot;") + '"';
        return "<" + w.tag + ' class="' + w.classes.join(" ") + '"' + C + ">" + w.content + "</" + w.tag + ">";
      };
      function l(c, d, f, v) {
        c.lastIndex = d;
        var w = c.exec(f);
        if (w && v && w[1]) {
          var x = w[1].length;
          w.index += x, w[0] = w[0].slice(x);
        }
        return w;
      }
      function u(c, d, f, v, w, x) {
        for (var C in f)
          if (!(!f.hasOwnProperty(C) || !f[C])) {
            var E = f[C];
            E = Array.isArray(E) ? E : [E];
            for (var M = 0; M < E.length; ++M) {
              if (x && x.cause == C + "," + M)
                return;
              var I = E[M], N = I.inside, $ = !!I.lookbehind, O = !!I.greedy, L = I.alias;
              if (O && !I.pattern.global) {
                var _ = I.pattern.toString().match(/[imsuy]*$/)[0];
                I.pattern = RegExp(I.pattern.source, _ + "g");
              }
              for (var W = I.pattern || I, F = v.next, V = w; F !== d.tail && !(x && V >= x.reach); V += F.value.length, F = F.next) {
                var B = F.value;
                if (d.length > c.length)
                  return;
                if (!(B instanceof i)) {
                  var G = 1, j;
                  if (O) {
                    if (j = l(W, V, c, $), !j || j.index >= c.length)
                      break;
                    var de = j.index, ee = j.index + j[0].length, K = V;
                    for (K += F.value.length; de >= K; )
                      F = F.next, K += F.value.length;
                    if (K -= F.value.length, V = K, F.value instanceof i)
                      continue;
                    for (var H = F; H !== d.tail && (K < ee || typeof H.value == "string"); H = H.next)
                      G++, K += H.value.length;
                    G--, B = c.slice(V, K), j.index -= V;
                  } else if (j = l(W, 0, B, $), !j)
                    continue;
                  var de = j.index, ge = j[0], ze = B.slice(0, de), vt = B.slice(de + ge.length), Be = V + B.length;
                  x && Be > x.reach && (x.reach = Be);
                  var ke = F.prev;
                  ze && (ke = m(d, ke, ze), V += ze.length), b(d, ke, G);
                  var ar = new i(C, N ? s.tokenize(ge, N) : ge, L, ge);
                  if (F = m(d, ke, ar), vt && m(d, F, vt), G > 1) {
                    var Ge = {
                      cause: C + "," + M,
                      reach: Be
                    };
                    u(c, d, f, F.prev, V, Ge), x && Ge.reach > x.reach && (x.reach = Ge.reach);
                  }
                }
              }
            }
          }
      }
      function p() {
        var c = { value: null, prev: null, next: null }, d = { value: null, prev: c, next: null };
        c.next = d, this.head = c, this.tail = d, this.length = 0;
      }
      function m(c, d, f) {
        var v = d.next, w = { value: f, prev: d, next: v };
        return d.next = w, v.prev = w, c.length++, w;
      }
      function b(c, d, f) {
        for (var v = d.next, w = 0; w < f && v !== c.tail; w++)
          v = v.next;
        d.next = v, v.prev = d, c.length -= w;
      }
      function g(c) {
        for (var d = [], f = c.head.next; f !== c.tail; )
          d.push(f.value), f = f.next;
        return d;
      }
      return s;
    })();
    n.exports = t, t.default = t;
  }
}), S = hs(bs());
S.languages.markup = { comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 }, prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 }, doctype: { pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i, greedy: !0, inside: { "internal-subset": { pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/, lookbehind: !0, greedy: !0, inside: null }, string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 }, punctuation: /^<!|>$|[[\]]/, "doctype-tag": /^DOCTYPE/i, name: /[^\s<>'"]+/ } }, cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 }, tag: { pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/, greedy: !0, inside: { tag: { pattern: /^<\/?[^\s>\/]+/, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } }, "special-attr": [], "attr-value": { pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/, inside: { punctuation: [{ pattern: /^=/, alias: "attr-equals" }, { pattern: /^(\s*)["']|["']$/, lookbehind: !0 }] } }, punctuation: /\/?>/, "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } } } }, entity: [{ pattern: /&[\da-z]{1,8};/i, alias: "named-entity" }, /&#x?[\da-f]{1,8};/i] }, S.languages.markup.tag.inside["attr-value"].inside.entity = S.languages.markup.entity, S.languages.markup.doctype.inside["internal-subset"].inside = S.languages.markup, S.hooks.add("wrap", function(e) {
  e.type === "entity" && (e.attributes.title = e.content.replace(/&amp;/, "&"));
}), Object.defineProperty(S.languages.markup.tag, "addInlined", { value: function(e, r) {
  var t = {}, t = (t["language-" + r] = { pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i, lookbehind: !0, inside: S.languages[r] }, t.cdata = /^<!\[CDATA\[|\]\]>$/i, { "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: t } }), r = (t["language-" + r] = { pattern: /[\s\S]+/, inside: S.languages[r] }, {});
  r[e] = { pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
    return e;
  }), "i"), lookbehind: !0, greedy: !0, inside: t }, S.languages.insertBefore("markup", "cdata", r);
} }), Object.defineProperty(S.languages.markup.tag, "addAttribute", { value: function(e, n) {
  S.languages.markup.tag.inside["special-attr"].push({ pattern: RegExp(/(^|["'\s])/.source + "(?:" + e + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"), lookbehind: !0, inside: { "attr-name": /^[^\s=]+/, "attr-value": { pattern: /=[\s\S]+/, inside: { value: { pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/, lookbehind: !0, alias: [n, "language-" + n], inside: S.languages[n] }, punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/] } } } });
} }), S.languages.html = S.languages.markup, S.languages.mathml = S.languages.markup, S.languages.svg = S.languages.markup, S.languages.xml = S.languages.extend("markup", {}), S.languages.ssml = S.languages.xml, S.languages.atom = S.languages.xml, S.languages.rss = S.languages.xml, (function(e) {
  var n = { pattern: /\\[\\(){}[\]^$+*?|.]/, alias: "escape" }, t = /\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/, r = "(?:[^\\\\-]|" + t.source + ")", r = RegExp(r + "-" + r), o = { pattern: /(<|')[^<>']+(?=[>']$)/, lookbehind: !0, alias: "variable" };
  e.languages.regex = { "char-class": { pattern: /((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/, lookbehind: !0, inside: { "char-class-negation": { pattern: /(^\[)\^/, lookbehind: !0, alias: "operator" }, "char-class-punctuation": { pattern: /^\[|\]$/, alias: "punctuation" }, range: { pattern: r, inside: { escape: t, "range-punctuation": { pattern: /-/, alias: "operator" } } }, "special-escape": n, "char-set": { pattern: /\\[wsd]|\\p\{[^{}]+\}/i, alias: "class-name" }, escape: t } }, "special-escape": n, "char-set": { pattern: /\.|\\[wsd]|\\p\{[^{}]+\}/i, alias: "class-name" }, backreference: [{ pattern: /\\(?![123][0-7]{2})[1-9]/, alias: "keyword" }, { pattern: /\\k<[^<>']+>/, alias: "keyword", inside: { "group-name": o } }], anchor: { pattern: /[$^]|\\[ABbGZz]/, alias: "function" }, escape: t, group: [{ pattern: /\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/, alias: "punctuation", inside: { "group-name": o } }, { pattern: /\)/, alias: "punctuation" }], quantifier: { pattern: /(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/, alias: "number" }, alternation: { pattern: /\|/, alias: "keyword" } };
})(S), S.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0, greedy: !0 }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 }, "class-name": { pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i, lookbehind: !0, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/, boolean: /\b(?:false|true)\b/, function: /\b\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/, punctuation: /[{}[\];(),.:]/ }, S.languages.javascript = S.languages.extend("clike", { "class-name": [S.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/, lookbehind: !0 }], keyword: [{ pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 }, { pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: !0 }], function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, number: { pattern: RegExp(/(^|[^\w$])/.source + "(?:" + /NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source + ")" + /(?![\w$])/.source), lookbehind: !0 }, operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/ }), S.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, S.languages.insertBefore("javascript", "keyword", { regex: { pattern: RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source), lookbehind: !0, greedy: !0, inside: { "regex-source": { pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/, lookbehind: !0, alias: "language-regex", inside: S.languages.regex }, "regex-delimiter": /^\/|\/$/, "regex-flags": /^[a-z]+$/ } }, "function-variable": { pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/, lookbehind: !0, inside: S.languages.javascript }, { pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i, lookbehind: !0, inside: S.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/, lookbehind: !0, inside: S.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/, lookbehind: !0, inside: S.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ }), S.languages.insertBefore("javascript", "string", { hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" }, "template-string": { pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/, greedy: !0, inside: { "template-punctuation": { pattern: /^`|`$/, alias: "string" }, interpolation: { pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/, lookbehind: !0, inside: { "interpolation-punctuation": { pattern: /^\$\{|\}$/, alias: "punctuation" }, rest: S.languages.javascript } }, string: /[\s\S]+/ } }, "string-property": { pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m, lookbehind: !0, greedy: !0, alias: "property" } }), S.languages.insertBefore("javascript", "operator", { "literal-property": { pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m, lookbehind: !0, alias: "property" } }), S.languages.markup && (S.languages.markup.tag.addInlined("script", "javascript"), S.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript")), S.languages.js = S.languages.javascript, S.languages.actionscript = S.languages.extend("javascript", { keyword: /\b(?:as|break|case|catch|class|const|default|delete|do|dynamic|each|else|extends|final|finally|for|function|get|if|implements|import|in|include|instanceof|interface|internal|is|namespace|native|new|null|override|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|use|var|void|while|with)\b/, operator: /\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/ }), S.languages.actionscript["class-name"].alias = "function", delete S.languages.actionscript.parameter, delete S.languages.actionscript["literal-property"], S.languages.markup && S.languages.insertBefore("actionscript", "string", { xml: { pattern: /(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/, lookbehind: !0, inside: S.languages.markup } }), (function(e) {
  var n = /#(?!\{).+/, t = { pattern: /#\{[^}]+\}/, alias: "variable" };
  e.languages.coffeescript = e.languages.extend("javascript", { comment: n, string: [{ pattern: /'(?:\\[\s\S]|[^\\'])*'/, greedy: !0 }, { pattern: /"(?:\\[\s\S]|[^\\"])*"/, greedy: !0, inside: { interpolation: t } }], keyword: /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/, "class-member": { pattern: /@(?!\d)\w+/, alias: "variable" } }), e.languages.insertBefore("coffeescript", "comment", { "multiline-comment": { pattern: /###[\s\S]+?###/, alias: "comment" }, "block-regex": { pattern: /\/{3}[\s\S]*?\/{3}/, alias: "regex", inside: { comment: n, interpolation: t } } }), e.languages.insertBefore("coffeescript", "string", { "inline-javascript": { pattern: /`(?:\\[\s\S]|[^\\`])*`/, inside: { delimiter: { pattern: /^`|`$/, alias: "punctuation" }, script: { pattern: /[\s\S]+/, alias: "language-javascript", inside: e.languages.javascript } } }, "multiline-string": [{ pattern: /'''[\s\S]*?'''/, greedy: !0, alias: "string" }, { pattern: /"""[\s\S]*?"""/, greedy: !0, alias: "string", inside: { interpolation: t } }] }), e.languages.insertBefore("coffeescript", "keyword", { property: /(?!\d)\w+(?=\s*:(?!:))/ }), delete e.languages.coffeescript["template-string"], e.languages.coffee = e.languages.coffeescript;
})(S), (function(e) {
  var n = e.languages.javadoclike = { parameter: { pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m, lookbehind: !0 }, keyword: { pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m, lookbehind: !0 }, punctuation: /[{}]/ };
  Object.defineProperty(n, "addSupport", { value: function(t, r) {
    (t = typeof t == "string" ? [t] : t).forEach(function(o) {
      var a = function(m) {
        m.inside || (m.inside = {}), m.inside.rest = r;
      }, s = "doc-comment";
      if (i = e.languages[o]) {
        var i, l = i[s];
        if ((l = l || (i = e.languages.insertBefore(o, "comment", { "doc-comment": { pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/, lookbehind: !0, alias: "comment" } }))[s]) instanceof RegExp && (l = i[s] = { pattern: l }), Array.isArray(l))
          for (var u = 0, p = l.length; u < p; u++)
            l[u] instanceof RegExp && (l[u] = { pattern: l[u] }), a(l[u]);
        else
          a(l);
      }
    });
  } }), n.addSupport(["java", "javascript", "php"], n);
})(S), (function(e) {
  var n = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/, n = (e.languages.css = { comment: /\/\*[\s\S]*?\*\//, atrule: { pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + n.source + ")*?" + /(?:;|(?=\s*\{))/.source), inside: { rule: /^@[\w-]+/, "selector-function-argument": { pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/, lookbehind: !0, alias: "selector" }, keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: !0 } } }, url: { pattern: RegExp("\\burl\\((?:" + n.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"), greedy: !0, inside: { function: /^url/i, punctuation: /^\(|\)$/, string: { pattern: RegExp("^" + n.source + "$"), alias: "url" } } }, selector: { pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + n.source + ")*(?=\\s*\\{)"), lookbehind: !0 }, string: { pattern: n, greedy: !0 }, property: { pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i, lookbehind: !0 }, important: /!important\b/i, function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0 }, punctuation: /[(){};:,]/ }, e.languages.css.atrule.inside.rest = e.languages.css, e.languages.markup);
  n && (n.tag.addInlined("style", "css"), n.tag.addAttribute("style", "css"));
})(S), (function(e) {
  var n = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, n = (e.languages.css.selector = { pattern: e.languages.css.selector.pattern, lookbehind: !0, inside: n = { "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/, "pseudo-class": /:[-\w]+/, class: /\.[-\w]+/, id: /#[-\w]+/, attribute: { pattern: RegExp(`\\[(?:[^[\\]"']|` + n.source + ")*\\]"), greedy: !0, inside: { punctuation: /^\[|\]$/, "case-sensitivity": { pattern: /(\s)[si]$/i, lookbehind: !0, alias: "keyword" }, namespace: { pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/, lookbehind: !0, inside: { punctuation: /\|$/ } }, "attr-name": { pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/, lookbehind: !0 }, "attr-value": [n, { pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/, lookbehind: !0 }], operator: /[|~*^$]?=/ } }, "n-th": [{ pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/, lookbehind: !0, inside: { number: /[\dn]+/, operator: /[+-]/ } }, { pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i, lookbehind: !0 }], combinator: />|\+|~|\|\|/, punctuation: /[(),]/ } }, e.languages.css.atrule.inside["selector-function-argument"].inside = n, e.languages.insertBefore("css", "property", { variable: { pattern: /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i, lookbehind: !0 } }), { pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/, lookbehind: !0 }), t = { pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/, lookbehind: !0 };
  e.languages.insertBefore("css", "function", { operator: { pattern: /(\s)[+\-*\/](?=\s)/, lookbehind: !0 }, hexcode: { pattern: /\B#[\da-f]{3,8}\b/i, alias: "color" }, color: [{ pattern: /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i, lookbehind: !0 }, { pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i, inside: { unit: n, number: t, function: /[\w-]+(?=\()/, punctuation: /[(),]/ } }], entity: /\\[\da-f]{1,8}/i, unit: n, number: t });
})(S), (function(e) {
  var n = /[*&][^\s[\]{},]+/, t = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/, r = "(?:" + t.source + "(?:[ 	]+" + n.source + ")?|" + n.source + "(?:[ 	]+" + t.source + ")?)", o = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, function() {
    return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
  }), a = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
  function s(i, l) {
    l = (l || "").replace(/m/g, "") + "m";
    var u = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function() {
      return r;
    }).replace(/<<value>>/g, function() {
      return i;
    });
    return RegExp(u, l);
  }
  e.languages.yaml = { scalar: { pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, function() {
    return r;
  })), lookbehind: !0, alias: "string" }, comment: /#.*/, key: { pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, function() {
    return r;
  }).replace(/<<key>>/g, function() {
    return "(?:" + o + "|" + a + ")";
  })), lookbehind: !0, greedy: !0, alias: "atrule" }, directive: { pattern: /(^[ \t]*)%.+/m, lookbehind: !0, alias: "important" }, datetime: { pattern: s(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source), lookbehind: !0, alias: "number" }, boolean: { pattern: s(/false|true/.source, "i"), lookbehind: !0, alias: "important" }, null: { pattern: s(/null|~/.source, "i"), lookbehind: !0, alias: "important" }, string: { pattern: s(a), lookbehind: !0, greedy: !0 }, number: { pattern: s(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, "i"), lookbehind: !0 }, tag: t, important: n, punctuation: /---|[:[\]{}\-,|>?]|\.\.\./ }, e.languages.yml = e.languages.yaml;
})(S), (function(e) {
  var n = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
  function t(u) {
    return u = u.replace(/<inner>/g, function() {
      return n;
    }), RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + u + ")");
  }
  var r = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source, o = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function() {
    return r;
  }), a = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source, s = (e.languages.markdown = e.languages.extend("markup", {}), e.languages.insertBefore("markdown", "prolog", { "front-matter-block": { pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/, lookbehind: !0, greedy: !0, inside: { punctuation: /^---|---$/, "front-matter": { pattern: /\S+(?:\s+\S+)*/, alias: ["yaml", "language-yaml"], inside: e.languages.yaml } } }, blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: "punctuation" }, table: { pattern: RegExp("^" + o + a + "(?:" + o + ")*", "m"), inside: { "table-data-rows": { pattern: RegExp("^(" + o + a + ")(?:" + o + ")*$"), lookbehind: !0, inside: { "table-data": { pattern: RegExp(r), inside: e.languages.markdown }, punctuation: /\|/ } }, "table-line": { pattern: RegExp("^(" + o + ")" + a + "$"), lookbehind: !0, inside: { punctuation: /\||:?-{3,}:?/ } }, "table-header-row": { pattern: RegExp("^" + o + "$"), inside: { "table-header": { pattern: RegExp(r), alias: "important", inside: e.languages.markdown }, punctuation: /\|/ } } } }, code: [{ pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/, lookbehind: !0, alias: "keyword" }, { pattern: /^```[\s\S]*?^```$/m, greedy: !0, inside: { "code-block": { pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m, lookbehind: !0 }, "code-language": { pattern: /^(```).+/, lookbehind: !0 }, punctuation: /```/ } }], title: [{ pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m, alias: "important", inside: { punctuation: /==+$|--+$/ } }, { pattern: /(^\s*)#.+/m, lookbehind: !0, alias: "important", inside: { punctuation: /^#+|#+$/ } }], hr: { pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m, lookbehind: !0, alias: "punctuation" }, list: { pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m, lookbehind: !0, alias: "punctuation" }, "url-reference": { pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/, inside: { variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 }, string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/, punctuation: /^[\[\]!:]|[<>]/ }, alias: "url" }, bold: { pattern: t(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source), lookbehind: !0, greedy: !0, inside: { content: { pattern: /(^..)[\s\S]+(?=..$)/, lookbehind: !0, inside: {} }, punctuation: /\*\*|__/ } }, italic: { pattern: t(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source), lookbehind: !0, greedy: !0, inside: { content: { pattern: /(^.)[\s\S]+(?=.$)/, lookbehind: !0, inside: {} }, punctuation: /[*_]/ } }, strike: { pattern: t(/(~~?)(?:(?!~)<inner>)+\2/.source), lookbehind: !0, greedy: !0, inside: { content: { pattern: /(^~~?)[\s\S]+(?=\1$)/, lookbehind: !0, inside: {} }, punctuation: /~~?/ } }, "code-snippet": { pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/, lookbehind: !0, greedy: !0, alias: ["code", "keyword"] }, url: { pattern: t(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source), lookbehind: !0, greedy: !0, inside: { operator: /^!/, content: { pattern: /(^\[)[^\]]+(?=\])/, lookbehind: !0, inside: {} }, variable: { pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/, lookbehind: !0 }, url: { pattern: /(^\]\()[^\s)]+/, lookbehind: !0 }, string: { pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/, lookbehind: !0 } } } }), ["url", "bold", "italic", "strike"].forEach(function(u) {
    ["url", "bold", "italic", "strike", "code-snippet"].forEach(function(p) {
      u !== p && (e.languages.markdown[u].inside.content.inside[p] = e.languages.markdown[p]);
    });
  }), e.hooks.add("after-tokenize", function(u) {
    u.language !== "markdown" && u.language !== "md" || (function p(m) {
      if (m && typeof m != "string")
        for (var b = 0, g = m.length; b < g; b++) {
          var c, d = m[b];
          d.type !== "code" ? p(d.content) : (c = d.content[1], d = d.content[3], c && d && c.type === "code-language" && d.type === "code-block" && typeof c.content == "string" && (c = c.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp"), c = "language-" + (c = (/[a-z][\w-]*/i.exec(c) || [""])[0].toLowerCase()), d.alias ? typeof d.alias == "string" ? d.alias = [d.alias, c] : d.alias.push(c) : d.alias = [c]));
        }
    })(u.tokens);
  }), e.hooks.add("wrap", function(u) {
    if (u.type === "code-block") {
      for (var p = "", m = 0, b = u.classes.length; m < b; m++) {
        var g = u.classes[m], g = /language-(.+)/.exec(g);
        if (g) {
          p = g[1];
          break;
        }
      }
      var c, d = e.languages[p];
      d ? u.content = e.highlight((function(f) {
        return f = f.replace(s, ""), f = f.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function(v, w) {
          var x;
          return (w = w.toLowerCase())[0] === "#" ? (x = w[1] === "x" ? parseInt(w.slice(2), 16) : Number(w.slice(1)), l(x)) : i[w] || v;
        });
      })(u.content), d, p) : p && p !== "none" && e.plugins.autoloader && (c = "md-" + (/* @__PURE__ */ new Date()).valueOf() + "-" + Math.floor(1e16 * Math.random()), u.attributes.id = c, e.plugins.autoloader.loadLanguages(p, function() {
        var f = document.getElementById(c);
        f && (f.innerHTML = e.highlight(f.textContent, e.languages[p], p));
      }));
    }
  }), RegExp(e.languages.markup.tag.pattern.source, "gi")), i = { amp: "&", lt: "<", gt: ">", quot: '"' }, l = String.fromCodePoint || String.fromCharCode;
  e.languages.md = e.languages.markdown;
})(S), S.languages.graphql = { comment: /#.*/, description: { pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i, greedy: !0, alias: "string", inside: { "language-markdown": { pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/, lookbehind: !0, inside: S.languages.markdown } } }, string: { pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/, greedy: !0 }, number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i, boolean: /\b(?:false|true)\b/, variable: /\$[a-z_]\w*/i, directive: { pattern: /@[a-z_]\w*/i, alias: "function" }, "attr-name": { pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i, greedy: !0 }, "atom-input": { pattern: /\b[A-Z]\w*Input\b/, alias: "class-name" }, scalar: /\b(?:Boolean|Float|ID|Int|String)\b/, constant: /\b[A-Z][A-Z_\d]*\b/, "class-name": { pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/, lookbehind: !0 }, fragment: { pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/, lookbehind: !0, alias: "function" }, "definition-mutation": { pattern: /(\bmutation\s+)[a-zA-Z_]\w*/, lookbehind: !0, alias: "function" }, "definition-query": { pattern: /(\bquery\s+)[a-zA-Z_]\w*/, lookbehind: !0, alias: "function" }, keyword: /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/, operator: /[!=|&]|\.{3}/, "property-query": /\w+(?=\s*\()/, object: /\w+(?=\s*\{)/, punctuation: /[!(){}\[\]:=,]/, property: /\w+/ }, S.hooks.add("after-tokenize", function(e) {
  if (e.language === "graphql")
    for (var n = e.tokens.filter(function(c) {
      return typeof c != "string" && c.type !== "comment" && c.type !== "scalar";
    }), t = 0; t < n.length; ) {
      var r = n[t++];
      if (r.type === "keyword" && r.content === "mutation") {
        var o = [];
        if (m(["definition-mutation", "punctuation"]) && p(1).content === "(") {
          t += 2;
          var a = b(/^\($/, /^\)$/);
          if (a === -1)
            continue;
          for (; t < a; t++) {
            var s = p(0);
            s.type === "variable" && (g(s, "variable-input"), o.push(s.content));
          }
          t = a + 1;
        }
        if (m(["punctuation", "property-query"]) && p(0).content === "{" && (t++, g(p(0), "property-mutation"), 0 < o.length)) {
          var i = b(/^\{$/, /^\}$/);
          if (i !== -1)
            for (var l = t; l < i; l++) {
              var u = n[l];
              u.type === "variable" && 0 <= o.indexOf(u.content) && g(u, "variable-input");
            }
        }
      }
    }
  function p(c) {
    return n[t + c];
  }
  function m(c, d) {
    d = d || 0;
    for (var f = 0; f < c.length; f++) {
      var v = p(f + d);
      if (!v || v.type !== c[f])
        return;
    }
    return 1;
  }
  function b(c, d) {
    for (var f = 1, v = t; v < n.length; v++) {
      var w = n[v], x = w.content;
      if (w.type === "punctuation" && typeof x == "string") {
        if (c.test(x))
          f++;
        else if (d.test(x) && --f === 0)
          return v;
      }
    }
    return -1;
  }
  function g(c, d) {
    var f = c.alias;
    f ? Array.isArray(f) || (c.alias = f = [f]) : c.alias = f = [], f.push(d);
  }
}), S.languages.sql = { comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/, lookbehind: !0 }, variable: [{ pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/, greedy: !0 }, /@[\w.$]+/], string: { pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/, greedy: !0, lookbehind: !0 }, identifier: { pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/, greedy: !0, lookbehind: !0, inside: { punctuation: /^`|`$/ } }, function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i, keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i, boolean: /\b(?:FALSE|NULL|TRUE)\b/i, number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i, operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i, punctuation: /[;[\]()`,.]/ }, (function(e) {
  var n = e.languages.javascript["template-string"], t = n.pattern.source, r = n.inside.interpolation, o = r.inside["interpolation-punctuation"], a = r.pattern.source;
  function s(m, b) {
    if (e.languages[m])
      return { pattern: RegExp("((?:" + b + ")\\s*)" + t), lookbehind: !0, greedy: !0, inside: { "template-punctuation": { pattern: /^`|`$/, alias: "string" }, "embedded-code": { pattern: /[\s\S]+/, alias: m } } };
  }
  function i(m, b, g) {
    return m = { code: m, grammar: b, language: g }, e.hooks.run("before-tokenize", m), m.tokens = e.tokenize(m.code, m.grammar), e.hooks.run("after-tokenize", m), m.tokens;
  }
  function l(m, b, g) {
    var f = e.tokenize(m, { interpolation: { pattern: RegExp(a), lookbehind: !0 } }), c = 0, d = {}, f = i(f.map(function(w) {
      if (typeof w == "string")
        return w;
      for (var x, C, w = w.content; m.indexOf((C = c++, x = "___" + g.toUpperCase() + "_" + C + "___")) !== -1; )
        ;
      return d[x] = w, x;
    }).join(""), b, g), v = Object.keys(d);
    return c = 0, (function w(x) {
      for (var C = 0; C < x.length; C++) {
        if (c >= v.length)
          return;
        var E, M, I, N, $, O, L, _ = x[C];
        typeof _ == "string" || typeof _.content == "string" ? (E = v[c], (L = (O = typeof _ == "string" ? _ : _.content).indexOf(E)) !== -1 && (++c, M = O.substring(0, L), $ = d[E], I = void 0, (N = {})["interpolation-punctuation"] = o, (N = e.tokenize($, N)).length === 3 && ((I = [1, 1]).push.apply(I, i(N[1], e.languages.javascript, "javascript")), N.splice.apply(N, I)), I = new e.Token("interpolation", N, r.alias, $), N = O.substring(L + E.length), $ = [], M && $.push(M), $.push(I), N && (w(O = [N]), $.push.apply($, O)), typeof _ == "string" ? (x.splice.apply(x, [C, 1].concat($)), C += $.length - 1) : _.content = $)) : (L = _.content, Array.isArray(L) ? w(L) : w([L]));
      }
    })(f), new e.Token(g, f, "language-" + g, m);
  }
  e.languages.javascript["template-string"] = [s("css", /\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source), s("html", /\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source), s("svg", /\bsvg/.source), s("markdown", /\b(?:markdown|md)/.source), s("graphql", /\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source), s("sql", /\bsql/.source), n].filter(Boolean);
  var u = { javascript: !0, js: !0, typescript: !0, ts: !0, jsx: !0, tsx: !0 };
  function p(m) {
    return typeof m == "string" ? m : Array.isArray(m) ? m.map(p).join("") : p(m.content);
  }
  e.hooks.add("after-tokenize", function(m) {
    m.language in u && (function b(g) {
      for (var c = 0, d = g.length; c < d; c++) {
        var f, v, w, x = g[c];
        typeof x != "string" && (f = x.content, Array.isArray(f) ? x.type === "template-string" ? (x = f[1], f.length === 3 && typeof x != "string" && x.type === "embedded-code" && (v = p(x), x = x.alias, x = Array.isArray(x) ? x[0] : x, w = e.languages[x]) && (f[1] = l(v, w, x))) : b(f) : typeof f != "string" && b([f]));
      }
    })(m.tokens);
  });
})(S), (function(e) {
  e.languages.typescript = e.languages.extend("javascript", { "class-name": { pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/, lookbehind: !0, greedy: !0, inside: null }, builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/ }), e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/), delete e.languages.typescript.parameter, delete e.languages.typescript["literal-property"];
  var n = e.languages.extend("typescript", {});
  delete n["class-name"], e.languages.typescript["class-name"].inside = n, e.languages.insertBefore("typescript", "function", { decorator: { pattern: /@[$\w\xA0-\uFFFF]+/, inside: { at: { pattern: /^@/, alias: "operator" }, function: /^[\s\S]+/ } }, "generic-function": { pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/, greedy: !0, inside: { function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/, generic: { pattern: /<[\s\S]+/, alias: "class-name", inside: n } } } }), e.languages.ts = e.languages.typescript;
})(S), (function(e) {
  var n = e.languages.javascript, t = /\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})+\}/.source, r = "(@(?:arg|argument|param|property)\\s+(?:" + t + "\\s+)?)";
  e.languages.jsdoc = e.languages.extend("javadoclike", { parameter: { pattern: RegExp(r + /(?:(?!\s)[$\w\xA0-\uFFFF.])+(?=\s|$)/.source), lookbehind: !0, inside: { punctuation: /\./ } } }), e.languages.insertBefore("jsdoc", "keyword", { "optional-parameter": { pattern: RegExp(r + /\[(?:(?!\s)[$\w\xA0-\uFFFF.])+(?:=[^[\]]+)?\](?=\s|$)/.source), lookbehind: !0, inside: { parameter: { pattern: /(^\[)[$\w\xA0-\uFFFF\.]+/, lookbehind: !0, inside: { punctuation: /\./ } }, code: { pattern: /(=)[\s\S]*(?=\]$)/, lookbehind: !0, inside: n, alias: "language-javascript" }, punctuation: /[=[\]]/ } }, "class-name": [{ pattern: RegExp(/(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\s+(?:<TYPE>\s+)?)[A-Z]\w*(?:\.[A-Z]\w*)*/.source.replace(/<TYPE>/g, function() {
    return t;
  })), lookbehind: !0, inside: { punctuation: /\./ } }, { pattern: RegExp("(@[a-z]+\\s+)" + t), lookbehind: !0, inside: { string: n.string, number: n.number, boolean: n.boolean, keyword: e.languages.typescript.keyword, operator: /=>|\.\.\.|[&|?:*]/, punctuation: /[.,;=<>{}()[\]]/ } }], example: { pattern: /(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/, lookbehind: !0, inside: { code: { pattern: /^([\t ]*(?:\*\s*)?)\S.*$/m, lookbehind: !0, inside: n, alias: "language-javascript" } } } }), e.languages.javadoclike.addSupport("javascript", e.languages.jsdoc);
})(S), (function(e) {
  e.languages.flow = e.languages.extend("javascript", {}), e.languages.insertBefore("flow", "keyword", { type: [{ pattern: /\b(?:[Bb]oolean|Function|[Nn]umber|[Ss]tring|[Ss]ymbol|any|mixed|null|void)\b/, alias: "class-name" }] }), e.languages.flow["function-variable"].pattern = /(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/i, delete e.languages.flow.parameter, e.languages.insertBefore("flow", "operator", { "flow-punctuation": { pattern: /\{\||\|\}/, alias: "punctuation" } }), Array.isArray(e.languages.flow.keyword) || (e.languages.flow.keyword = [e.languages.flow.keyword]), e.languages.flow.keyword.unshift({ pattern: /(^|[^$]\b)(?:Class|declare|opaque|type)\b(?!\$)/, lookbehind: !0 }, { pattern: /(^|[^$]\B)\$(?:Diff|Enum|Exact|Keys|ObjMap|PropertyType|Record|Shape|Subtype|Supertype|await)\b(?!\$)/, lookbehind: !0 });
})(S), S.languages.n4js = S.languages.extend("javascript", { keyword: /\b(?:Array|any|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/ }), S.languages.insertBefore("n4js", "constant", { annotation: { pattern: /@+\w+/, alias: "operator" } }), S.languages.n4jsd = S.languages.n4js, (function(e) {
  function n(s, i) {
    return RegExp(s.replace(/<ID>/g, function() {
      return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source;
    }), i);
  }
  e.languages.insertBefore("javascript", "function-variable", { "method-variable": { pattern: RegExp("(\\.\\s*)" + e.languages.javascript["function-variable"].pattern.source), lookbehind: !0, alias: ["function-variable", "method", "function", "property-access"] } }), e.languages.insertBefore("javascript", "function", { method: { pattern: RegExp("(\\.\\s*)" + e.languages.javascript.function.source), lookbehind: !0, alias: ["function", "property-access"] } }), e.languages.insertBefore("javascript", "constant", { "known-class-name": [{ pattern: /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/, alias: "class-name" }, { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: "class-name" }] }), e.languages.insertBefore("javascript", "keyword", { imports: { pattern: n(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source), lookbehind: !0, inside: e.languages.javascript }, exports: { pattern: n(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source), lookbehind: !0, inside: e.languages.javascript } }), e.languages.javascript.keyword.unshift({ pattern: /\b(?:as|default|export|from|import)\b/, alias: "module" }, { pattern: /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/, alias: "control-flow" }, { pattern: /\bnull\b/, alias: ["null", "nil"] }, { pattern: /\bundefined\b/, alias: "nil" }), e.languages.insertBefore("javascript", "operator", { spread: { pattern: /\.{3}/, alias: "operator" }, arrow: { pattern: /=>/, alias: "operator" } }), e.languages.insertBefore("javascript", "punctuation", { "property-access": { pattern: n(/(\.\s*)#?<ID>/.source), lookbehind: !0 }, "maybe-class-name": { pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/, lookbehind: !0 }, dom: { pattern: /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/, alias: "variable" }, console: { pattern: /\bconsole(?=\s*\.)/, alias: "class-name" } });
  for (var t = ["function", "function-variable", "method", "method-variable", "property-access"], r = 0; r < t.length; r++) {
    var a = t[r], o = e.languages.javascript[a], a = (o = e.util.type(o) === "RegExp" ? e.languages.javascript[a] = { pattern: o } : o).inside || {};
    (o.inside = a)["maybe-class-name"] = /^[A-Z][\s\S]*/;
  }
})(S), (function(e) {
  var n = e.util.clone(e.languages.javascript), t = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source, r = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source, o = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
  function a(l, u) {
    return l = l.replace(/<S>/g, function() {
      return t;
    }).replace(/<BRACES>/g, function() {
      return r;
    }).replace(/<SPREAD>/g, function() {
      return o;
    }), RegExp(l, u);
  }
  o = a(o).source, e.languages.jsx = e.languages.extend("markup", n), e.languages.jsx.tag.pattern = a(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source), e.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/, e.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/, e.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, e.languages.jsx.tag.inside.comment = n.comment, e.languages.insertBefore("inside", "attr-name", { spread: { pattern: a(/<SPREAD>/.source), inside: e.languages.jsx } }, e.languages.jsx.tag), e.languages.insertBefore("inside", "special-attr", { script: { pattern: a(/=<BRACES>/.source), alias: "language-javascript", inside: { "script-punctuation": { pattern: /^=(?=\{)/, alias: "punctuation" }, rest: e.languages.jsx } } }, e.languages.jsx.tag);
  function s(l) {
    for (var u = [], p = 0; p < l.length; p++) {
      var m = l[p], b = !1;
      typeof m != "string" && (m.type === "tag" && m.content[0] && m.content[0].type === "tag" ? m.content[0].content[0].content === "</" ? 0 < u.length && u[u.length - 1].tagName === i(m.content[0].content[1]) && u.pop() : m.content[m.content.length - 1].content !== "/>" && u.push({ tagName: i(m.content[0].content[1]), openedBraces: 0 }) : 0 < u.length && m.type === "punctuation" && m.content === "{" ? u[u.length - 1].openedBraces++ : 0 < u.length && 0 < u[u.length - 1].openedBraces && m.type === "punctuation" && m.content === "}" ? u[u.length - 1].openedBraces-- : b = !0), (b || typeof m == "string") && 0 < u.length && u[u.length - 1].openedBraces === 0 && (b = i(m), p < l.length - 1 && (typeof l[p + 1] == "string" || l[p + 1].type === "plain-text") && (b += i(l[p + 1]), l.splice(p + 1, 1)), 0 < p && (typeof l[p - 1] == "string" || l[p - 1].type === "plain-text") && (b = i(l[p - 1]) + b, l.splice(p - 1, 1), p--), l[p] = new e.Token("plain-text", b, null, b)), m.content && typeof m.content != "string" && s(m.content);
    }
  }
  var i = function(l) {
    return l ? typeof l == "string" ? l : typeof l.content == "string" ? l.content : l.content.map(i).join("") : "";
  };
  e.hooks.add("after-tokenize", function(l) {
    l.language !== "jsx" && l.language !== "tsx" || s(l.tokens);
  });
})(S), (function(e) {
  var n = e.util.clone(e.languages.typescript), n = (e.languages.tsx = e.languages.extend("jsx", n), delete e.languages.tsx.parameter, delete e.languages.tsx["literal-property"], e.languages.tsx.tag);
  n.pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + "(?:" + n.pattern.source + ")", n.pattern.flags), n.lookbehind = !0;
})(S), S.languages.swift = { comment: { pattern: /(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/, lookbehind: !0, greedy: !0 }, "string-literal": [{ pattern: RegExp(/(^|[^"#])/.source + "(?:" + /"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/.source + "|" + /"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/.source + ")" + /(?!["#])/.source), lookbehind: !0, greedy: !0, inside: { interpolation: { pattern: /(\\\()(?:[^()]|\([^()]*\))*(?=\))/, lookbehind: !0, inside: null }, "interpolation-punctuation": { pattern: /^\)|\\\($/, alias: "punctuation" }, punctuation: /\\(?=[\r\n])/, string: /[\s\S]+/ } }, { pattern: RegExp(/(^|[^"#])(#+)/.source + "(?:" + /"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/.source + "|" + /"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/.source + ")\\2"), lookbehind: !0, greedy: !0, inside: { interpolation: { pattern: /(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/, lookbehind: !0, inside: null }, "interpolation-punctuation": { pattern: /^\)|\\#+\($/, alias: "punctuation" }, string: /[\s\S]+/ } }], directive: { pattern: RegExp(/#/.source + "(?:" + /(?:elseif|if)\b/.source + "(?:[ 	]*" + /(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/.source + ")+|" + /(?:else|endif)\b/.source + ")"), alias: "property", inside: { "directive-name": /^#\w+/, boolean: /\b(?:false|true)\b/, number: /\b\d+(?:\.\d+)*\b/, operator: /!|&&|\|\||[<>]=?/, punctuation: /[(),]/ } }, literal: { pattern: /#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/, alias: "constant" }, "other-directive": { pattern: /#\w+\b/, alias: "property" }, attribute: { pattern: /@\w+/, alias: "atrule" }, "function-definition": { pattern: /(\bfunc\s+)\w+/, lookbehind: !0, alias: "function" }, label: { pattern: /\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/, lookbehind: !0, alias: "important" }, keyword: /\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/, boolean: /\b(?:false|true)\b/, nil: { pattern: /\bnil\b/, alias: "constant" }, "short-argument": /\$\d+\b/, omit: { pattern: /\b_\b/, alias: "keyword" }, number: /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i, "class-name": /\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/, function: /\b[a-z_]\w*(?=\s*\()/i, constant: /\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/, operator: /[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/, punctuation: /[{}[\]();,.:\\]/ }, S.languages.swift["string-literal"].forEach(function(e) {
  e.inside.interpolation.inside = S.languages.swift;
}), (function(e) {
  e.languages.kotlin = e.languages.extend("clike", { keyword: { pattern: /(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/, lookbehind: !0 }, function: [{ pattern: /(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/, greedy: !0 }, { pattern: /(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/, lookbehind: !0, greedy: !0 }], number: /\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/, operator: /\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/ }), delete e.languages.kotlin["class-name"];
  var n = { "interpolation-punctuation": { pattern: /^\$\{?|\}$/, alias: "punctuation" }, expression: { pattern: /[\s\S]+/, inside: e.languages.kotlin } };
  e.languages.insertBefore("kotlin", "string", { "string-literal": [{ pattern: /"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/, alias: "multiline", inside: { interpolation: { pattern: /\$(?:[a-z_]\w*|\{[^{}]*\})/i, inside: n }, string: /[\s\S]+/ } }, { pattern: /"(?:[^"\\\r\n$]|\\.|\$(?:(?!\{)|\{[^{}]*\}))*"/, alias: "singleline", inside: { interpolation: { pattern: /((?:^|[^\\])(?:\\{2})*)\$(?:[a-z_]\w*|\{[^{}]*\})/i, lookbehind: !0, inside: n }, string: /[\s\S]+/ } }], char: { pattern: /'(?:[^'\\\r\n]|\\(?:.|u[a-fA-F0-9]{0,4}))'/, greedy: !0 } }), delete e.languages.kotlin.string, e.languages.insertBefore("kotlin", "keyword", { annotation: { pattern: /\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/, alias: "builtin" } }), e.languages.insertBefore("kotlin", "function", { label: { pattern: /\b\w+@|@\w+\b/, alias: "symbol" } }), e.languages.kt = e.languages.kotlin, e.languages.kts = e.languages.kotlin;
})(S), S.languages.c = S.languages.extend("clike", { comment: { pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 }, string: { pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/, greedy: !0 }, "class-name": { pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/, lookbehind: !0 }, keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/, function: /\b[a-z_]\w*(?=\s*\()/i, number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i, operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/ }), S.languages.insertBefore("c", "string", { char: { pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/, greedy: !0 } }), S.languages.insertBefore("c", "string", { macro: { pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im, lookbehind: !0, greedy: !0, alias: "property", inside: { string: [{ pattern: /^(#\s*include\s*)<[^>]+>/, lookbehind: !0 }, S.languages.c.string], char: S.languages.c.char, comment: S.languages.c.comment, "macro-name": [{ pattern: /(^#\s*define\s+)\w+\b(?!\()/i, lookbehind: !0 }, { pattern: /(^#\s*define\s+)\w+\b(?=\()/i, lookbehind: !0, alias: "function" }], directive: { pattern: /^(#\s*)[a-z]+/, lookbehind: !0, alias: "keyword" }, "directive-hash": /^#/, punctuation: /##|\\(?=[\r\n])/, expression: { pattern: /\S[\s\S]*/, inside: S.languages.c } } } }), S.languages.insertBefore("c", "function", { constant: /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/ }), delete S.languages.c.boolean, S.languages.objectivec = S.languages.extend("c", { string: { pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/, greedy: !0 }, keyword: /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/, operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/ }), delete S.languages.objectivec["class-name"], S.languages.objc = S.languages.objectivec, S.languages.reason = S.languages.extend("clike", { string: { pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/, greedy: !0 }, "class-name": /\b[A-Z]\w*/, keyword: /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/, operator: /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/ }), S.languages.insertBefore("reason", "class-name", { char: { pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/, greedy: !0 }, constructor: /\b[A-Z]\w*\b(?!\s*\.)/, label: { pattern: /\b[a-z]\w*(?=::)/, alias: "symbol" } }), delete S.languages.reason.function, (function(e) {
  for (var n = /\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source, t = 0; t < 2; t++)
    n = n.replace(/<self>/g, function() {
      return n;
    });
  n = n.replace(/<self>/g, function() {
    return /[^\s\S]/.source;
  }), e.languages.rust = { comment: [{ pattern: RegExp(/(^|[^\\])/.source + n), lookbehind: !0, greedy: !0 }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }], string: { pattern: /b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/, greedy: !0 }, char: { pattern: /b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/, greedy: !0 }, attribute: { pattern: /#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/, greedy: !0, alias: "attr-name", inside: { string: null } }, "closure-params": { pattern: /([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/, lookbehind: !0, greedy: !0, inside: { "closure-punctuation": { pattern: /^\||\|$/, alias: "punctuation" }, rest: null } }, "lifetime-annotation": { pattern: /'\w+/, alias: "symbol" }, "fragment-specifier": { pattern: /(\$\w+:)[a-z]+/, lookbehind: !0, alias: "punctuation" }, variable: /\$\w+/, "function-definition": { pattern: /(\bfn\s+)\w+/, lookbehind: !0, alias: "function" }, "type-definition": { pattern: /(\b(?:enum|struct|trait|type|union)\s+)\w+/, lookbehind: !0, alias: "class-name" }, "module-declaration": [{ pattern: /(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/, lookbehind: !0, alias: "namespace" }, { pattern: /(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/, lookbehind: !0, alias: "namespace", inside: { punctuation: /::/ } }], keyword: [/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/, /\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/], function: /\b[a-z_]\w*(?=\s*(?:::\s*<|\())/, macro: { pattern: /\b\w+!/, alias: "property" }, constant: /\b[A-Z_][A-Z_\d]+\b/, "class-name": /\b[A-Z]\w*\b/, namespace: { pattern: /(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/, inside: { punctuation: /::/ } }, number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/, boolean: /\b(?:false|true)\b/, punctuation: /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/, operator: /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/ }, e.languages.rust["closure-params"].inside.rest = e.languages.rust, e.languages.rust.attribute.inside.string = e.languages.rust.string;
})(S), S.languages.go = S.languages.extend("clike", { string: { pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/, lookbehind: !0, greedy: !0 }, keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/, boolean: /\b(?:_|false|iota|nil|true)\b/, number: [/\b0(?:b[01_]+|o[0-7_]+)i?\b/i, /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i, /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i], operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./, builtin: /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/ }), S.languages.insertBefore("go", "string", { char: { pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/, greedy: !0 } }), delete S.languages.go["class-name"], (function(e) {
  var n = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/, t = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function() {
    return n.source;
  });
  e.languages.cpp = e.languages.extend("c", { "class-name": [{ pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, function() {
    return n.source;
  })), lookbehind: !0 }, /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/, /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i, /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/], keyword: n, number: { pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i, greedy: !0 }, operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/, boolean: /\b(?:false|true)\b/ }), e.languages.insertBefore("cpp", "string", { module: { pattern: RegExp(/(\b(?:import|module)\s+)/.source + "(?:" + /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source + "|" + /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, function() {
    return t;
  }) + ")"), lookbehind: !0, greedy: !0, inside: { string: /^[<"][\s\S]+/, operator: /:/, punctuation: /\./ } }, "raw-string": { pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/, alias: "string", greedy: !0 } }), e.languages.insertBefore("cpp", "keyword", { "generic-function": { pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i, inside: { function: /^\w+/, generic: { pattern: /<[\s\S]+/, alias: "class-name", inside: e.languages.cpp } } } }), e.languages.insertBefore("cpp", "operator", { "double-colon": { pattern: /::/, alias: "punctuation" } }), e.languages.insertBefore("cpp", "class-name", { "base-clause": { pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/, lookbehind: !0, greedy: !0, inside: e.languages.extend("cpp", {}) } }), e.languages.insertBefore("inside", "double-colon", { "class-name": /\b[a-z_]\w*\b(?!\s*::)/i }, e.languages.cpp["base-clause"]);
})(S), S.languages.python = { comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0, greedy: !0 }, "string-interpolation": { pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i, greedy: !0, inside: { interpolation: { pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/, lookbehind: !0, inside: { "format-spec": { pattern: /(:)[^:(){}]+(?=\}$)/, lookbehind: !0 }, "conversion-option": { pattern: /![sra](?=[:}]$)/, alias: "punctuation" }, rest: null } }, string: /[\s\S]+/ } }, "triple-quoted-string": { pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i, greedy: !0, alias: "string" }, string: { pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i, greedy: !0 }, function: { pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g, lookbehind: !0 }, "class-name": { pattern: /(\bclass\s+)\w+/i, lookbehind: !0 }, decorator: { pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m, lookbehind: !0, alias: ["annotation", "punctuation"], inside: { punctuation: /\./ } }, keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/, builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/, boolean: /\b(?:False|None|True)\b/, number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i, operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/, punctuation: /[{}[\];(),.:]/ }, S.languages.python["string-interpolation"].inside.interpolation.inside.rest = S.languages.python, S.languages.py = S.languages.python, S.languages.json = { property: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, lookbehind: !0, greedy: !0 }, string: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, lookbehind: !0, greedy: !0 }, comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 }, number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i, punctuation: /[{}[\],]/, operator: /:/, boolean: /\b(?:false|true)\b/, null: { pattern: /\bnull\b/, alias: "keyword" } }, S.languages.webmanifest = S.languages.json;
var Kn = {};
fs(Kn, {
  dracula: () => vs,
  duotoneDark: () => xs,
  duotoneLight: () => Cs,
  github: () => Rs,
  gruvboxMaterialDark: () => ei,
  gruvboxMaterialLight: () => ni,
  jettwaveDark: () => qs,
  jettwaveLight: () => Ks,
  nightOwl: () => _s,
  nightOwlLight: () => Ns,
  oceanicNext: () => As,
  okaidia: () => Ms,
  oneDark: () => Ys,
  oneLight: () => Qs,
  palenight: () => Ds,
  shadesOfPurple: () => Ls,
  synthwave84: () => Vs,
  ultramin: () => Bs,
  vsDark: () => Zn,
  vsLight: () => Hs
});
var ys = {
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
}, vs = ys, ws = {
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
}, xs = ws, Ss = {
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
}, Cs = Ss, ks = {
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
}, Rs = ks, Es = {
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
}, _s = Es, Fs = {
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
}, Ns = Fs, X = {
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
}, Is = {
  plain: {
    backgroundColor: "#282c34",
    color: "#ffffff"
  },
  styles: [
    {
      types: ["attr-name"],
      style: {
        color: X.keyword
      }
    },
    {
      types: ["attr-value"],
      style: {
        color: X.string
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
        color: X.comment
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
        color: X.primitive
      }
    },
    {
      types: ["boolean"],
      style: {
        color: X.boolean
      }
    },
    {
      types: ["tag"],
      style: {
        color: X.tag
      }
    },
    {
      types: ["string"],
      style: {
        color: X.string
      }
    },
    {
      types: ["punctuation"],
      style: {
        color: X.string
      }
    },
    {
      types: ["selector", "char", "builtin", "inserted"],
      style: {
        color: X.char
      }
    },
    {
      types: ["function"],
      style: {
        color: X.function
      }
    },
    {
      types: ["operator", "entity", "url", "variable"],
      style: {
        color: X.variable
      }
    },
    {
      types: ["keyword"],
      style: {
        color: X.keyword
      }
    },
    {
      types: ["atrule", "class-name"],
      style: {
        color: X.className
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
}, As = Is, Ps = {
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
}, Ms = Ps, $s = {
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
}, Ds = $s, Ts = {
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
}, Ls = Ts, Os = {
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
}, Vs = Os, zs = {
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
}, Bs = zs, Gs = {
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
}, Zn = Gs, js = {
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
}, Hs = js, Us = {
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
}, qs = Us, Ws = {
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
}, Ks = Ws, Zs = {
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
}, Ys = Zs, Xs = {
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
}, Qs = Xs, Js = {
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
}, ei = Js, ti = {
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
}, ni = ti, ri = (e) => Qe(
  (n) => {
    var t = n, { className: r, style: o, line: a } = t, s = Wn(t, ["className", "style", "line"]);
    const i = Oe(te({}, s), {
      className: Me("token-line", r)
    });
    return typeof e == "object" && "plain" in e && (i.style = e.plain), typeof o == "object" && (i.style = te(te({}, i.style || {}), o)), i;
  },
  [e]
), oi = (e) => {
  const n = Qe(
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
  return Qe(
    (t) => {
      var r = t, { token: o, className: a, style: s } = r, i = Wn(r, ["token", "className", "style"]);
      const l = Oe(te({}, i), {
        className: Me("token", ...o.types, a),
        children: o.content,
        style: n(o)
      });
      return s != null && (l.style = te(te({}, l.style || {}), s)), l;
    },
    [n]
  );
}, ai = /\r\n|\r|\n/, Mt = (e) => {
  e.length === 0 ? e.push({
    types: ["plain"],
    content: `
`,
    empty: !0
  }) : e.length === 1 && e[0].content === "" && (e[0].content = `
`, e[0].empty = !0);
}, $t = (e, n) => {
  const t = e.length;
  return t > 0 && e[t - 1] === n ? e : e.concat(n);
}, si = (e) => {
  const n = [[]], t = [e], r = [0], o = [e.length];
  let a = 0, s = 0, i = [];
  const l = [i];
  for (; s > -1; ) {
    for (; (a = r[s]++) < o[s]; ) {
      let u, p = n[s];
      const b = t[s][a];
      if (typeof b == "string" ? (p = s > 0 ? p : ["plain"], u = b) : (p = $t(p, b.type), b.alias && (p = $t(p, b.alias)), u = b.content), typeof u != "string") {
        s++, n.push(p), t.push(u), r.push(0), o.push(u.length);
        continue;
      }
      const g = u.split(ai), c = g.length;
      i.push({
        types: p,
        content: g[0]
      });
      for (let d = 1; d < c; d++)
        Mt(i), l.push(i = []), i.push({
          types: p,
          content: g[d]
        });
    }
    s--, n.pop(), t.pop(), r.pop(), o.pop();
  }
  return Mt(i), l;
}, Dt = si, ii = ({ prism: e, code: n, grammar: t, language: r }) => sr(() => {
  if (t == null)
    return Dt([n]);
  const o = {
    code: n,
    grammar: t,
    language: r,
    tokens: []
  };
  return e.hooks.run("before-tokenize", o), o.tokens = e.tokenize(n, t), e.hooks.run("after-tokenize", o), Dt(o.tokens);
}, [
  n,
  t,
  r,
  // prism is a stable import
  e
]), li = (e, n) => {
  const { plain: t } = e, r = e.styles.reduce((o, a) => {
    const { languages: s, style: i } = a;
    return s && !s.includes(n) || a.types.forEach((l) => {
      const u = te(te({}, o[l]), i);
      o[l] = u;
    }), o;
  }, {});
  return r.root = t, r.plain = Oe(te({}, t), { backgroundColor: void 0 }), r;
}, ui = li, ci = ({
  children: e,
  language: n,
  code: t,
  theme: r,
  prism: o
}) => {
  const a = n.toLowerCase(), s = ui(r, a), i = ri(s), l = oi(s), u = o.languages[a], p = ii({ prism: o, language: a, code: t, grammar: u });
  return e({
    tokens: p,
    className: `prism-code language-${a}`,
    style: s != null ? s.root : {},
    getLineProps: i,
    getTokenProps: l
  });
}, di = (e) => Ne(ci, Oe(te({}, e), {
  prism: e.prism || S,
  theme: e.theme || Zn,
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
const gi = T(
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
), pi = y.forwardRef(
  ({
    className: e,
    size: n,
    code: t,
    language: r = "typescript",
    showLineNumbers: o = !1,
    copyable: a = !0,
    filename: s,
    collapsible: i = !1,
    defaultCollapsed: l = !1,
    maxHeight: u,
    highlightLines: p,
    ...m
  }, b) => {
    const [g, c] = y.useState(!1), [d, f] = y.useState(l), v = () => {
      navigator.clipboard.writeText(t).then(() => {
        c(!0), setTimeout(() => {
          c(!1);
        }, 2e3);
      }).catch((C) => {
        console.error("Failed to copy code:", C);
      });
    }, x = ((C) => {
      if (!C) return /* @__PURE__ */ new Set();
      if (Array.isArray(C)) return new Set(C);
      const E = /* @__PURE__ */ new Set();
      return C.split(",").forEach((I) => {
        const N = I.trim();
        if (N.includes("-")) {
          const $ = N.split("-"), O = Number($[0]), L = Number($[1]);
          if (!isNaN(O) && !isNaN(L))
            for (let _ = O; _ <= L; _++)
              E.add(_);
        } else {
          const $ = Number(N);
          isNaN($) || E.add($);
        }
      }), E;
    })(p);
    return /* @__PURE__ */ R("div", { ref: b, className: k(gi({ size: n }), e), ...m, children: [
      (s || i) && /* @__PURE__ */ R("div", { className: "flex items-center justify-between border-b border-slate-800 bg-slate-900/50 px-4 py-2", children: [
        /* @__PURE__ */ R("div", { className: "flex items-center gap-2", children: [
          s && /* @__PURE__ */ h("span", { className: "font-mono text-xs text-slate-400", children: s }),
          i && /* @__PURE__ */ h(
            "button",
            {
              onClick: () => {
                f(!d);
              },
              className: "ml-2 rounded p-1 text-slate-400 transition-colors hover:bg-slate-800 hover:text-slate-200",
              "aria-label": d ? "Expand code" : "Collapse code",
              children: d ? /* @__PURE__ */ h(ut, { className: "h-4 w-4" }) : /* @__PURE__ */ h(jt, { className: "h-4 w-4" })
            }
          )
        ] }),
        a && !d && /* @__PURE__ */ h(
          "button",
          {
            onClick: v,
            className: "flex items-center gap-1.5 rounded px-2 py-1 text-xs text-slate-400 transition-colors hover:bg-slate-800 hover:text-slate-200",
            "aria-label": "Copy code to clipboard",
            children: g ? /* @__PURE__ */ R(ue, { children: [
              /* @__PURE__ */ h(Je, { className: "h-3.5 w-3.5" }),
              /* @__PURE__ */ h("span", { children: "Copied!" })
            ] }) : /* @__PURE__ */ R(ue, { children: [
              /* @__PURE__ */ h(St, { className: "h-3.5 w-3.5" }),
              /* @__PURE__ */ h("span", { children: "Copy" })
            ] })
          }
        )
      ] }),
      !d && /* @__PURE__ */ h(
        "div",
        {
          className: "overflow-auto",
          style: u ? { maxHeight: `${u}px` } : void 0,
          children: /* @__PURE__ */ h(di, { theme: Kn.nightOwl, code: t.trim(), language: r, children: ({ className: C, style: E, tokens: M, getLineProps: I, getTokenProps: N }) => /* @__PURE__ */ h("pre", { className: k("p-4 font-mono", C), style: E, children: M.map(($, O) => {
            const L = O + 1, _ = x.has(L), W = I({ line: $ });
            return /* @__PURE__ */ R(
              "div",
              {
                ...W,
                className: k(
                  W.className,
                  "table-row",
                  _ && "bg-blue-500/10"
                ),
                children: [
                  o && /* @__PURE__ */ h("span", { className: "table-cell w-8 pr-4 text-right text-slate-500 select-none", children: L }),
                  /* @__PURE__ */ h("span", { className: "table-cell", children: $.map((F, V) => /* @__PURE__ */ h("span", { ...N({ token: F }) }, V)) })
                ]
              },
              O
            );
          }) }) })
        }
      ),
      a && !s && !i && /* @__PURE__ */ h(
        "button",
        {
          onClick: v,
          className: "absolute top-2 right-2 rounded bg-slate-800/80 p-2 text-slate-400 backdrop-blur-sm transition-colors hover:bg-slate-700 hover:text-slate-200",
          "aria-label": "Copy code to clipboard",
          children: g ? /* @__PURE__ */ h(Je, { className: "h-4 w-4" }) : /* @__PURE__ */ h(St, { className: "h-4 w-4" })
        }
      )
    ] });
  }
);
pi.displayName = "CodeBlock";
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
function ie(e, n) {
  return typeof e == "function" ? e(n) : e;
}
function Q(e, n) {
  return (t) => {
    n.setState((r) => ({
      ...r,
      [e]: ie(t, r[e])
    }));
  };
}
function Ve(e) {
  return e instanceof Function;
}
function fi(e) {
  return Array.isArray(e) && e.every((n) => typeof n == "number");
}
function mi(e, n) {
  const t = [], r = (o) => {
    o.forEach((a) => {
      t.push(a);
      const s = n(a);
      s != null && s.length && r(s);
    });
  };
  return r(e), t;
}
function A(e, n, t) {
  let r = [], o;
  return (a) => {
    let s;
    t.key && t.debug && (s = Date.now());
    const i = e(a);
    if (!(i.length !== r.length || i.some((p, m) => r[m] !== p)))
      return o;
    r = i;
    let u;
    if (t.key && t.debug && (u = Date.now()), o = n(...i), t == null || t.onChange == null || t.onChange(o), t.key && t.debug && t != null && t.debug()) {
      const p = Math.round((Date.now() - s) * 100) / 100, m = Math.round((Date.now() - u) * 100) / 100, b = m / 16, g = (c, d) => {
        for (c = String(c); c.length < d; )
          c = " " + c;
        return c;
      };
      console.info(`%c⏱ ${g(m, 5)} /${g(p, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * b, 120))}deg 100% 31%);`, t == null ? void 0 : t.key);
    }
    return o;
  };
}
function P(e, n, t, r) {
  return {
    debug: () => {
      var o;
      return (o = e == null ? void 0 : e.debugAll) != null ? o : e[n];
    },
    key: process.env.NODE_ENV === "development" && t,
    onChange: r
  };
}
function hi(e, n, t, r) {
  const o = () => {
    var s;
    return (s = a.getValue()) != null ? s : e.options.renderFallbackValue;
  }, a = {
    id: `${n.id}_${t.id}`,
    row: n,
    column: t,
    getValue: () => n.getValue(r),
    renderValue: o,
    getContext: A(() => [e, t, n, a], (s, i, l, u) => ({
      table: s,
      column: i,
      row: l,
      cell: u,
      getValue: u.getValue,
      renderValue: u.renderValue
    }), P(e.options, "debugCells", "cell.getContext"))
  };
  return e._features.forEach((s) => {
    s.createCell == null || s.createCell(a, t, n, e);
  }, {}), a;
}
function bi(e, n, t, r) {
  var o, a;
  const i = {
    ...e._getDefaultColumnDef(),
    ...n
  }, l = i.accessorKey;
  let u = (o = (a = i.id) != null ? a : l ? typeof String.prototype.replaceAll == "function" ? l.replaceAll(".", "_") : l.replace(/\./g, "_") : void 0) != null ? o : typeof i.header == "string" ? i.header : void 0, p;
  if (i.accessorFn ? p = i.accessorFn : l && (l.includes(".") ? p = (b) => {
    let g = b;
    for (const d of l.split(".")) {
      var c;
      g = (c = g) == null ? void 0 : c[d], process.env.NODE_ENV !== "production" && g === void 0 && console.warn(`"${d}" in deeply nested key "${l}" returned undefined.`);
    }
    return g;
  } : p = (b) => b[i.accessorKey]), !u)
    throw process.env.NODE_ENV !== "production" ? new Error(i.accessorFn ? "Columns require an id when using an accessorFn" : "Columns require an id when using a non-string header") : new Error();
  let m = {
    id: `${String(u)}`,
    accessorFn: p,
    parent: r,
    depth: t,
    columnDef: i,
    columns: [],
    getFlatColumns: A(() => [!0], () => {
      var b;
      return [m, ...(b = m.columns) == null ? void 0 : b.flatMap((g) => g.getFlatColumns())];
    }, P(e.options, "debugColumns", "column.getFlatColumns")),
    getLeafColumns: A(() => [e._getOrderColumnsFn()], (b) => {
      var g;
      if ((g = m.columns) != null && g.length) {
        let c = m.columns.flatMap((d) => d.getLeafColumns());
        return b(c);
      }
      return [m];
    }, P(e.options, "debugColumns", "column.getLeafColumns"))
  };
  for (const b of e._features)
    b.createColumn == null || b.createColumn(m, e);
  return m;
}
const q = "debugHeaders";
function Tt(e, n, t) {
  var r;
  let a = {
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
      const s = [], i = (l) => {
        l.subHeaders && l.subHeaders.length && l.subHeaders.map(i), s.push(l);
      };
      return i(a), s;
    },
    getContext: () => ({
      table: e,
      header: a,
      column: n
    })
  };
  return e._features.forEach((s) => {
    s.createHeader == null || s.createHeader(a, e);
  }), a;
}
const yi = {
  createTable: (e) => {
    e.getHeaderGroups = A(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (n, t, r, o) => {
      var a, s;
      const i = (a = r == null ? void 0 : r.map((m) => t.find((b) => b.id === m)).filter(Boolean)) != null ? a : [], l = (s = o == null ? void 0 : o.map((m) => t.find((b) => b.id === m)).filter(Boolean)) != null ? s : [], u = t.filter((m) => !(r != null && r.includes(m.id)) && !(o != null && o.includes(m.id)));
      return Ee(n, [...i, ...u, ...l], e);
    }, P(e.options, q, "getHeaderGroups")), e.getCenterHeaderGroups = A(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (n, t, r, o) => (t = t.filter((a) => !(r != null && r.includes(a.id)) && !(o != null && o.includes(a.id))), Ee(n, t, e, "center")), P(e.options, q, "getCenterHeaderGroups")), e.getLeftHeaderGroups = A(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left], (n, t, r) => {
      var o;
      const a = (o = r == null ? void 0 : r.map((s) => t.find((i) => i.id === s)).filter(Boolean)) != null ? o : [];
      return Ee(n, a, e, "left");
    }, P(e.options, q, "getLeftHeaderGroups")), e.getRightHeaderGroups = A(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right], (n, t, r) => {
      var o;
      const a = (o = r == null ? void 0 : r.map((s) => t.find((i) => i.id === s)).filter(Boolean)) != null ? o : [];
      return Ee(n, a, e, "right");
    }, P(e.options, q, "getRightHeaderGroups")), e.getFooterGroups = A(() => [e.getHeaderGroups()], (n) => [...n].reverse(), P(e.options, q, "getFooterGroups")), e.getLeftFooterGroups = A(() => [e.getLeftHeaderGroups()], (n) => [...n].reverse(), P(e.options, q, "getLeftFooterGroups")), e.getCenterFooterGroups = A(() => [e.getCenterHeaderGroups()], (n) => [...n].reverse(), P(e.options, q, "getCenterFooterGroups")), e.getRightFooterGroups = A(() => [e.getRightHeaderGroups()], (n) => [...n].reverse(), P(e.options, q, "getRightFooterGroups")), e.getFlatHeaders = A(() => [e.getHeaderGroups()], (n) => n.map((t) => t.headers).flat(), P(e.options, q, "getFlatHeaders")), e.getLeftFlatHeaders = A(() => [e.getLeftHeaderGroups()], (n) => n.map((t) => t.headers).flat(), P(e.options, q, "getLeftFlatHeaders")), e.getCenterFlatHeaders = A(() => [e.getCenterHeaderGroups()], (n) => n.map((t) => t.headers).flat(), P(e.options, q, "getCenterFlatHeaders")), e.getRightFlatHeaders = A(() => [e.getRightHeaderGroups()], (n) => n.map((t) => t.headers).flat(), P(e.options, q, "getRightFlatHeaders")), e.getCenterLeafHeaders = A(() => [e.getCenterFlatHeaders()], (n) => n.filter((t) => {
      var r;
      return !((r = t.subHeaders) != null && r.length);
    }), P(e.options, q, "getCenterLeafHeaders")), e.getLeftLeafHeaders = A(() => [e.getLeftFlatHeaders()], (n) => n.filter((t) => {
      var r;
      return !((r = t.subHeaders) != null && r.length);
    }), P(e.options, q, "getLeftLeafHeaders")), e.getRightLeafHeaders = A(() => [e.getRightFlatHeaders()], (n) => n.filter((t) => {
      var r;
      return !((r = t.subHeaders) != null && r.length);
    }), P(e.options, q, "getRightLeafHeaders")), e.getLeafHeaders = A(() => [e.getLeftHeaderGroups(), e.getCenterHeaderGroups(), e.getRightHeaderGroups()], (n, t, r) => {
      var o, a, s, i, l, u;
      return [...(o = (a = n[0]) == null ? void 0 : a.headers) != null ? o : [], ...(s = (i = t[0]) == null ? void 0 : i.headers) != null ? s : [], ...(l = (u = r[0]) == null ? void 0 : u.headers) != null ? l : []].map((p) => p.getLeafHeaders()).flat();
    }, P(e.options, q, "getLeafHeaders"));
  }
};
function Ee(e, n, t, r) {
  var o, a;
  let s = 0;
  const i = function(b, g) {
    g === void 0 && (g = 1), s = Math.max(s, g), b.filter((c) => c.getIsVisible()).forEach((c) => {
      var d;
      (d = c.columns) != null && d.length && i(c.columns, g + 1);
    }, 0);
  };
  i(e);
  let l = [];
  const u = (b, g) => {
    const c = {
      depth: g,
      id: [r, `${g}`].filter(Boolean).join("_"),
      headers: []
    }, d = [];
    b.forEach((f) => {
      const v = [...d].reverse()[0], w = f.column.depth === c.depth;
      let x, C = !1;
      if (w && f.column.parent ? x = f.column.parent : (x = f.column, C = !0), v && (v == null ? void 0 : v.column) === x)
        v.subHeaders.push(f);
      else {
        const E = Tt(t, x, {
          id: [r, g, x.id, f == null ? void 0 : f.id].filter(Boolean).join("_"),
          isPlaceholder: C,
          placeholderId: C ? `${d.filter((M) => M.column === x).length}` : void 0,
          depth: g,
          index: d.length
        });
        E.subHeaders.push(f), d.push(E);
      }
      c.headers.push(f), f.headerGroup = c;
    }), l.push(c), g > 0 && u(d, g - 1);
  }, p = n.map((b, g) => Tt(t, b, {
    depth: s,
    index: g
  }));
  u(p, s - 1), l.reverse();
  const m = (b) => b.filter((c) => c.column.getIsVisible()).map((c) => {
    let d = 0, f = 0, v = [0];
    c.subHeaders && c.subHeaders.length ? (v = [], m(c.subHeaders).forEach((x) => {
      let {
        colSpan: C,
        rowSpan: E
      } = x;
      d += C, v.push(E);
    })) : d = 1;
    const w = Math.min(...v);
    return f = f + w, c.colSpan = d, c.rowSpan = f, {
      colSpan: d,
      rowSpan: f
    };
  });
  return m((o = (a = l[0]) == null ? void 0 : a.headers) != null ? o : []), l;
}
const mt = (e, n, t, r, o, a, s) => {
  let i = {
    id: n,
    index: r,
    original: t,
    depth: o,
    parentId: s,
    _valuesCache: {},
    _uniqueValuesCache: {},
    getValue: (l) => {
      if (i._valuesCache.hasOwnProperty(l))
        return i._valuesCache[l];
      const u = e.getColumn(l);
      if (u != null && u.accessorFn)
        return i._valuesCache[l] = u.accessorFn(i.original, r), i._valuesCache[l];
    },
    getUniqueValues: (l) => {
      if (i._uniqueValuesCache.hasOwnProperty(l))
        return i._uniqueValuesCache[l];
      const u = e.getColumn(l);
      if (u != null && u.accessorFn)
        return u.columnDef.getUniqueValues ? (i._uniqueValuesCache[l] = u.columnDef.getUniqueValues(i.original, r), i._uniqueValuesCache[l]) : (i._uniqueValuesCache[l] = [i.getValue(l)], i._uniqueValuesCache[l]);
    },
    renderValue: (l) => {
      var u;
      return (u = i.getValue(l)) != null ? u : e.options.renderFallbackValue;
    },
    subRows: [],
    getLeafRows: () => mi(i.subRows, (l) => l.subRows),
    getParentRow: () => i.parentId ? e.getRow(i.parentId, !0) : void 0,
    getParentRows: () => {
      let l = [], u = i;
      for (; ; ) {
        const p = u.getParentRow();
        if (!p) break;
        l.push(p), u = p;
      }
      return l.reverse();
    },
    getAllCells: A(() => [e.getAllLeafColumns()], (l) => l.map((u) => hi(e, i, u, u.id)), P(e.options, "debugRows", "getAllCells")),
    _getAllCellsByColumnId: A(() => [i.getAllCells()], (l) => l.reduce((u, p) => (u[p.column.id] = p, u), {}), P(e.options, "debugRows", "getAllCellsByColumnId"))
  };
  for (let l = 0; l < e._features.length; l++) {
    const u = e._features[l];
    u == null || u.createRow == null || u.createRow(i, e);
  }
  return i;
}, vi = {
  createColumn: (e, n) => {
    e._getFacetedRowModel = n.options.getFacetedRowModel && n.options.getFacetedRowModel(n, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : n.getPreFilteredRowModel(), e._getFacetedUniqueValues = n.options.getFacetedUniqueValues && n.options.getFacetedUniqueValues(n, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = n.options.getFacetedMinMaxValues && n.options.getFacetedMinMaxValues(n, e.id), e.getFacetedMinMaxValues = () => {
      if (e._getFacetedMinMaxValues)
        return e._getFacetedMinMaxValues();
    };
  }
}, Yn = (e, n, t) => {
  var r, o;
  const a = t == null || (r = t.toString()) == null ? void 0 : r.toLowerCase();
  return !!(!((o = e.getValue(n)) == null || (o = o.toString()) == null || (o = o.toLowerCase()) == null) && o.includes(a));
};
Yn.autoRemove = (e) => J(e);
const Xn = (e, n, t) => {
  var r;
  return !!(!((r = e.getValue(n)) == null || (r = r.toString()) == null) && r.includes(t));
};
Xn.autoRemove = (e) => J(e);
const Qn = (e, n, t) => {
  var r;
  return ((r = e.getValue(n)) == null || (r = r.toString()) == null ? void 0 : r.toLowerCase()) === (t == null ? void 0 : t.toLowerCase());
};
Qn.autoRemove = (e) => J(e);
const Jn = (e, n, t) => {
  var r;
  return (r = e.getValue(n)) == null ? void 0 : r.includes(t);
};
Jn.autoRemove = (e) => J(e);
const er = (e, n, t) => !t.some((r) => {
  var o;
  return !((o = e.getValue(n)) != null && o.includes(r));
});
er.autoRemove = (e) => J(e) || !(e != null && e.length);
const tr = (e, n, t) => t.some((r) => {
  var o;
  return (o = e.getValue(n)) == null ? void 0 : o.includes(r);
});
tr.autoRemove = (e) => J(e) || !(e != null && e.length);
const nr = (e, n, t) => e.getValue(n) === t;
nr.autoRemove = (e) => J(e);
const rr = (e, n, t) => e.getValue(n) == t;
rr.autoRemove = (e) => J(e);
const ht = (e, n, t) => {
  let [r, o] = t;
  const a = e.getValue(n);
  return a >= r && a <= o;
};
ht.resolveFilterValue = (e) => {
  let [n, t] = e, r = typeof n != "number" ? parseFloat(n) : n, o = typeof t != "number" ? parseFloat(t) : t, a = n === null || Number.isNaN(r) ? -1 / 0 : r, s = t === null || Number.isNaN(o) ? 1 / 0 : o;
  if (a > s) {
    const i = a;
    a = s, s = i;
  }
  return [a, s];
};
ht.autoRemove = (e) => J(e) || J(e[0]) && J(e[1]);
const re = {
  includesString: Yn,
  includesStringSensitive: Xn,
  equalsString: Qn,
  arrIncludes: Jn,
  arrIncludesAll: er,
  arrIncludesSome: tr,
  equals: nr,
  weakEquals: rr,
  inNumberRange: ht
};
function J(e) {
  return e == null || e === "";
}
const wi = {
  getDefaultColumnDef: () => ({
    filterFn: "auto"
  }),
  getInitialState: (e) => ({
    columnFilters: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnFiltersChange: Q("columnFilters", e),
    filterFromLeafRows: !1,
    maxLeafRowFilterDepth: 100
  }),
  createColumn: (e, n) => {
    e.getAutoFilterFn = () => {
      const t = n.getCoreRowModel().flatRows[0], r = t == null ? void 0 : t.getValue(e.id);
      return typeof r == "string" ? re.includesString : typeof r == "number" ? re.inNumberRange : typeof r == "boolean" || r !== null && typeof r == "object" ? re.equals : Array.isArray(r) ? re.arrIncludes : re.weakEquals;
    }, e.getFilterFn = () => {
      var t, r;
      return Ve(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (
        // @ts-ignore
        (t = (r = n.options.filterFns) == null ? void 0 : r[e.columnDef.filterFn]) != null ? t : re[e.columnDef.filterFn]
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
        const o = e.getFilterFn(), a = r == null ? void 0 : r.find((p) => p.id === e.id), s = ie(t, a ? a.value : void 0);
        if (Lt(o, s, e)) {
          var i;
          return (i = r == null ? void 0 : r.filter((p) => p.id !== e.id)) != null ? i : [];
        }
        const l = {
          id: e.id,
          value: s
        };
        if (a) {
          var u;
          return (u = r == null ? void 0 : r.map((p) => p.id === e.id ? l : p)) != null ? u : [];
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
        var a;
        return (a = ie(n, o)) == null ? void 0 : a.filter((s) => {
          const i = t.find((l) => l.id === s.id);
          if (i) {
            const l = i.getFilterFn();
            if (Lt(l, s.value, i))
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
function Lt(e, n, t) {
  return (e && e.autoRemove ? e.autoRemove(n, t) : !1) || typeof n > "u" || typeof n == "string" && !n;
}
const xi = (e, n, t) => t.reduce((r, o) => {
  const a = o.getValue(e);
  return r + (typeof a == "number" ? a : 0);
}, 0), Si = (e, n, t) => {
  let r;
  return t.forEach((o) => {
    const a = o.getValue(e);
    a != null && (r > a || r === void 0 && a >= a) && (r = a);
  }), r;
}, Ci = (e, n, t) => {
  let r;
  return t.forEach((o) => {
    const a = o.getValue(e);
    a != null && (r < a || r === void 0 && a >= a) && (r = a);
  }), r;
}, ki = (e, n, t) => {
  let r, o;
  return t.forEach((a) => {
    const s = a.getValue(e);
    s != null && (r === void 0 ? s >= s && (r = o = s) : (r > s && (r = s), o < s && (o = s)));
  }), [r, o];
}, Ri = (e, n) => {
  let t = 0, r = 0;
  if (n.forEach((o) => {
    let a = o.getValue(e);
    a != null && (a = +a) >= a && (++t, r += a);
  }), t) return r / t;
}, Ei = (e, n) => {
  if (!n.length)
    return;
  const t = n.map((a) => a.getValue(e));
  if (!fi(t))
    return;
  if (t.length === 1)
    return t[0];
  const r = Math.floor(t.length / 2), o = t.sort((a, s) => a - s);
  return t.length % 2 !== 0 ? o[r] : (o[r - 1] + o[r]) / 2;
}, _i = (e, n) => Array.from(new Set(n.map((t) => t.getValue(e))).values()), Fi = (e, n) => new Set(n.map((t) => t.getValue(e))).size, Ni = (e, n) => n.length, Ue = {
  sum: xi,
  min: Si,
  max: Ci,
  extent: ki,
  mean: Ri,
  median: Ei,
  unique: _i,
  uniqueCount: Fi,
  count: Ni
}, Ii = {
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
    onGroupingChange: Q("grouping", e),
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
        return Ue.sum;
      if (Object.prototype.toString.call(r) === "[object Date]")
        return Ue.extent;
    }, e.getAggregationFn = () => {
      var t, r;
      if (!e)
        throw new Error();
      return Ve(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (t = (r = n.options.aggregationFns) == null ? void 0 : r[e.columnDef.aggregationFn]) != null ? t : Ue[e.columnDef.aggregationFn];
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
function Ai(e, n, t) {
  if (!(n != null && n.length) || !t)
    return e;
  const r = e.filter((a) => !n.includes(a.id));
  return t === "remove" ? r : [...n.map((a) => e.find((s) => s.id === a)).filter(Boolean), ...r];
}
const Pi = {
  getInitialState: (e) => ({
    columnOrder: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnOrderChange: Q("columnOrder", e)
  }),
  createColumn: (e, n) => {
    e.getIndex = A((t) => [we(n, t)], (t) => t.findIndex((r) => r.id === e.id), P(n.options, "debugColumns", "getIndex")), e.getIsFirstColumn = (t) => {
      var r;
      return ((r = we(n, t)[0]) == null ? void 0 : r.id) === e.id;
    }, e.getIsLastColumn = (t) => {
      var r;
      const o = we(n, t);
      return ((r = o[o.length - 1]) == null ? void 0 : r.id) === e.id;
    };
  },
  createTable: (e) => {
    e.setColumnOrder = (n) => e.options.onColumnOrderChange == null ? void 0 : e.options.onColumnOrderChange(n), e.resetColumnOrder = (n) => {
      var t;
      e.setColumnOrder(n ? [] : (t = e.initialState.columnOrder) != null ? t : []);
    }, e._getOrderColumnsFn = A(() => [e.getState().columnOrder, e.getState().grouping, e.options.groupedColumnMode], (n, t, r) => (o) => {
      let a = [];
      if (!(n != null && n.length))
        a = o;
      else {
        const s = [...n], i = [...o];
        for (; i.length && s.length; ) {
          const l = s.shift(), u = i.findIndex((p) => p.id === l);
          u > -1 && a.push(i.splice(u, 1)[0]);
        }
        a = [...a, ...i];
      }
      return Ai(a, t, r);
    }, P(e.options, "debugTable", "_getOrderColumnsFn"));
  }
}, qe = () => ({
  left: [],
  right: []
}), Mi = {
  getInitialState: (e) => ({
    columnPinning: qe(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnPinningChange: Q("columnPinning", e)
  }),
  createColumn: (e, n) => {
    e.pin = (t) => {
      const r = e.getLeafColumns().map((o) => o.id).filter(Boolean);
      n.setColumnPinning((o) => {
        var a, s;
        if (t === "right") {
          var i, l;
          return {
            left: ((i = o == null ? void 0 : o.left) != null ? i : []).filter((m) => !(r != null && r.includes(m))),
            right: [...((l = o == null ? void 0 : o.right) != null ? l : []).filter((m) => !(r != null && r.includes(m))), ...r]
          };
        }
        if (t === "left") {
          var u, p;
          return {
            left: [...((u = o == null ? void 0 : o.left) != null ? u : []).filter((m) => !(r != null && r.includes(m))), ...r],
            right: ((p = o == null ? void 0 : o.right) != null ? p : []).filter((m) => !(r != null && r.includes(m)))
          };
        }
        return {
          left: ((a = o == null ? void 0 : o.left) != null ? a : []).filter((m) => !(r != null && r.includes(m))),
          right: ((s = o == null ? void 0 : o.right) != null ? s : []).filter((m) => !(r != null && r.includes(m)))
        };
      });
    }, e.getCanPin = () => e.getLeafColumns().some((r) => {
      var o, a, s;
      return ((o = r.columnDef.enablePinning) != null ? o : !0) && ((a = (s = n.options.enableColumnPinning) != null ? s : n.options.enablePinning) != null ? a : !0);
    }), e.getIsPinned = () => {
      const t = e.getLeafColumns().map((i) => i.id), {
        left: r,
        right: o
      } = n.getState().columnPinning, a = t.some((i) => r == null ? void 0 : r.includes(i)), s = t.some((i) => o == null ? void 0 : o.includes(i));
      return a ? "left" : s ? "right" : !1;
    }, e.getPinnedIndex = () => {
      var t, r;
      const o = e.getIsPinned();
      return o ? (t = (r = n.getState().columnPinning) == null || (r = r[o]) == null ? void 0 : r.indexOf(e.id)) != null ? t : -1 : 0;
    };
  },
  createRow: (e, n) => {
    e.getCenterVisibleCells = A(() => [e._getAllVisibleCells(), n.getState().columnPinning.left, n.getState().columnPinning.right], (t, r, o) => {
      const a = [...r ?? [], ...o ?? []];
      return t.filter((s) => !a.includes(s.column.id));
    }, P(n.options, "debugRows", "getCenterVisibleCells")), e.getLeftVisibleCells = A(() => [e._getAllVisibleCells(), n.getState().columnPinning.left], (t, r) => (r ?? []).map((a) => t.find((s) => s.column.id === a)).filter(Boolean).map((a) => ({
      ...a,
      position: "left"
    })), P(n.options, "debugRows", "getLeftVisibleCells")), e.getRightVisibleCells = A(() => [e._getAllVisibleCells(), n.getState().columnPinning.right], (t, r) => (r ?? []).map((a) => t.find((s) => s.column.id === a)).filter(Boolean).map((a) => ({
      ...a,
      position: "right"
    })), P(n.options, "debugRows", "getRightVisibleCells"));
  },
  createTable: (e) => {
    e.setColumnPinning = (n) => e.options.onColumnPinningChange == null ? void 0 : e.options.onColumnPinningChange(n), e.resetColumnPinning = (n) => {
      var t, r;
      return e.setColumnPinning(n ? qe() : (t = (r = e.initialState) == null ? void 0 : r.columnPinning) != null ? t : qe());
    }, e.getIsSomeColumnsPinned = (n) => {
      var t;
      const r = e.getState().columnPinning;
      if (!n) {
        var o, a;
        return !!((o = r.left) != null && o.length || (a = r.right) != null && a.length);
      }
      return !!((t = r[n]) != null && t.length);
    }, e.getLeftLeafColumns = A(() => [e.getAllLeafColumns(), e.getState().columnPinning.left], (n, t) => (t ?? []).map((r) => n.find((o) => o.id === r)).filter(Boolean), P(e.options, "debugColumns", "getLeftLeafColumns")), e.getRightLeafColumns = A(() => [e.getAllLeafColumns(), e.getState().columnPinning.right], (n, t) => (t ?? []).map((r) => n.find((o) => o.id === r)).filter(Boolean), P(e.options, "debugColumns", "getRightLeafColumns")), e.getCenterLeafColumns = A(() => [e.getAllLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (n, t, r) => {
      const o = [...t ?? [], ...r ?? []];
      return n.filter((a) => !o.includes(a.id));
    }, P(e.options, "debugColumns", "getCenterLeafColumns"));
  }
};
function $i(e) {
  return e || (typeof document < "u" ? document : null);
}
const _e = {
  size: 150,
  minSize: 20,
  maxSize: Number.MAX_SAFE_INTEGER
}, We = () => ({
  startOffset: null,
  startSize: null,
  deltaOffset: null,
  deltaPercentage: null,
  isResizingColumn: !1,
  columnSizingStart: []
}), Di = {
  getDefaultColumnDef: () => _e,
  getInitialState: (e) => ({
    columnSizing: {},
    columnSizingInfo: We(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    columnResizeMode: "onEnd",
    columnResizeDirection: "ltr",
    onColumnSizingChange: Q("columnSizing", e),
    onColumnSizingInfoChange: Q("columnSizingInfo", e)
  }),
  createColumn: (e, n) => {
    e.getSize = () => {
      var t, r, o;
      const a = n.getState().columnSizing[e.id];
      return Math.min(Math.max((t = e.columnDef.minSize) != null ? t : _e.minSize, (r = a ?? e.columnDef.size) != null ? r : _e.size), (o = e.columnDef.maxSize) != null ? o : _e.maxSize);
    }, e.getStart = A((t) => [t, we(n, t), n.getState().columnSizing], (t, r) => r.slice(0, e.getIndex(t)).reduce((o, a) => o + a.getSize(), 0), P(n.options, "debugColumns", "getStart")), e.getAfter = A((t) => [t, we(n, t), n.getState().columnSizing], (t, r) => r.slice(e.getIndex(t) + 1).reduce((o, a) => o + a.getSize(), 0), P(n.options, "debugColumns", "getAfter")), e.resetSize = () => {
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
          var a;
          t += (a = o.column.getSize()) != null ? a : 0;
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
      return (a) => {
        if (!r || !o || (a.persist == null || a.persist(), Ke(a) && a.touches && a.touches.length > 1))
          return;
        const s = e.getSize(), i = e ? e.getLeafHeaders().map((v) => [v.column.id, v.column.getSize()]) : [[r.id, r.getSize()]], l = Ke(a) ? Math.round(a.touches[0].clientX) : a.clientX, u = {}, p = (v, w) => {
          typeof w == "number" && (n.setColumnSizingInfo((x) => {
            var C, E;
            const M = n.options.columnResizeDirection === "rtl" ? -1 : 1, I = (w - ((C = x == null ? void 0 : x.startOffset) != null ? C : 0)) * M, N = Math.max(I / ((E = x == null ? void 0 : x.startSize) != null ? E : 0), -0.999999);
            return x.columnSizingStart.forEach(($) => {
              let [O, L] = $;
              u[O] = Math.round(Math.max(L + L * N, 0) * 100) / 100;
            }), {
              ...x,
              deltaOffset: I,
              deltaPercentage: N
            };
          }), (n.options.columnResizeMode === "onChange" || v === "end") && n.setColumnSizing((x) => ({
            ...x,
            ...u
          })));
        }, m = (v) => p("move", v), b = (v) => {
          p("end", v), n.setColumnSizingInfo((w) => ({
            ...w,
            isResizingColumn: !1,
            startOffset: null,
            startSize: null,
            deltaOffset: null,
            deltaPercentage: null,
            columnSizingStart: []
          }));
        }, g = $i(t), c = {
          moveHandler: (v) => m(v.clientX),
          upHandler: (v) => {
            g == null || g.removeEventListener("mousemove", c.moveHandler), g == null || g.removeEventListener("mouseup", c.upHandler), b(v.clientX);
          }
        }, d = {
          moveHandler: (v) => (v.cancelable && (v.preventDefault(), v.stopPropagation()), m(v.touches[0].clientX), !1),
          upHandler: (v) => {
            var w;
            g == null || g.removeEventListener("touchmove", d.moveHandler), g == null || g.removeEventListener("touchend", d.upHandler), v.cancelable && (v.preventDefault(), v.stopPropagation()), b((w = v.touches[0]) == null ? void 0 : w.clientX);
          }
        }, f = Ti() ? {
          passive: !1
        } : !1;
        Ke(a) ? (g == null || g.addEventListener("touchmove", d.moveHandler, f), g == null || g.addEventListener("touchend", d.upHandler, f)) : (g == null || g.addEventListener("mousemove", c.moveHandler, f), g == null || g.addEventListener("mouseup", c.upHandler, f)), n.setColumnSizingInfo((v) => ({
          ...v,
          startOffset: l,
          startSize: s,
          deltaOffset: 0,
          deltaPercentage: 0,
          columnSizingStart: i,
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
      e.setColumnSizingInfo(n ? We() : (t = e.initialState.columnSizingInfo) != null ? t : We());
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
let Fe = null;
function Ti() {
  if (typeof Fe == "boolean") return Fe;
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
  return Fe = e, Fe;
}
function Ke(e) {
  return e.type === "touchstart";
}
const Li = {
  getInitialState: (e) => ({
    columnVisibility: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnVisibilityChange: Q("columnVisibility", e)
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
      return (t = o.length ? o.some((a) => a.getIsVisible()) : (r = n.getState().columnVisibility) == null ? void 0 : r[e.id]) != null ? t : !0;
    }, e.getCanHide = () => {
      var t, r;
      return ((t = e.columnDef.enableHiding) != null ? t : !0) && ((r = n.options.enableHiding) != null ? r : !0);
    }, e.getToggleVisibilityHandler = () => (t) => {
      e.toggleVisibility == null || e.toggleVisibility(t.target.checked);
    };
  },
  createRow: (e, n) => {
    e._getAllVisibleCells = A(() => [e.getAllCells(), n.getState().columnVisibility], (t) => t.filter((r) => r.column.getIsVisible()), P(n.options, "debugRows", "_getAllVisibleCells")), e.getVisibleCells = A(() => [e.getLeftVisibleCells(), e.getCenterVisibleCells(), e.getRightVisibleCells()], (t, r, o) => [...t, ...r, ...o], P(n.options, "debugRows", "getVisibleCells"));
  },
  createTable: (e) => {
    const n = (t, r) => A(() => [r(), r().filter((o) => o.getIsVisible()).map((o) => o.id).join("_")], (o) => o.filter((a) => a.getIsVisible == null ? void 0 : a.getIsVisible()), P(e.options, "debugColumns", t));
    e.getVisibleFlatColumns = n("getVisibleFlatColumns", () => e.getAllFlatColumns()), e.getVisibleLeafColumns = n("getVisibleLeafColumns", () => e.getAllLeafColumns()), e.getLeftVisibleLeafColumns = n("getLeftVisibleLeafColumns", () => e.getLeftLeafColumns()), e.getRightVisibleLeafColumns = n("getRightVisibleLeafColumns", () => e.getRightLeafColumns()), e.getCenterVisibleLeafColumns = n("getCenterVisibleLeafColumns", () => e.getCenterLeafColumns()), e.setColumnVisibility = (t) => e.options.onColumnVisibilityChange == null ? void 0 : e.options.onColumnVisibilityChange(t), e.resetColumnVisibility = (t) => {
      var r;
      e.setColumnVisibility(t ? {} : (r = e.initialState.columnVisibility) != null ? r : {});
    }, e.toggleAllColumnsVisible = (t) => {
      var r;
      t = (r = t) != null ? r : !e.getIsAllColumnsVisible(), e.setColumnVisibility(e.getAllLeafColumns().reduce((o, a) => ({
        ...o,
        [a.id]: t || !(a.getCanHide != null && a.getCanHide())
      }), {}));
    }, e.getIsAllColumnsVisible = () => !e.getAllLeafColumns().some((t) => !(t.getIsVisible != null && t.getIsVisible())), e.getIsSomeColumnsVisible = () => e.getAllLeafColumns().some((t) => t.getIsVisible == null ? void 0 : t.getIsVisible()), e.getToggleAllColumnsVisibilityHandler = () => (t) => {
      var r;
      e.toggleAllColumnsVisible((r = t.target) == null ? void 0 : r.checked);
    };
  }
};
function we(e, n) {
  return n ? n === "center" ? e.getCenterVisibleLeafColumns() : n === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
}
const Oi = {
  createTable: (e) => {
    e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
      if (e._getGlobalFacetedMinMaxValues)
        return e._getGlobalFacetedMinMaxValues();
    };
  }
}, Vi = {
  getInitialState: (e) => ({
    globalFilter: void 0,
    ...e
  }),
  getDefaultOptions: (e) => ({
    onGlobalFilterChange: Q("globalFilter", e),
    globalFilterFn: "auto",
    getColumnCanGlobalFilter: (n) => {
      var t;
      const r = (t = e.getCoreRowModel().flatRows[0]) == null || (t = t._getAllCellsByColumnId()[n.id]) == null ? void 0 : t.getValue();
      return typeof r == "string" || typeof r == "number";
    }
  }),
  createColumn: (e, n) => {
    e.getCanGlobalFilter = () => {
      var t, r, o, a;
      return ((t = e.columnDef.enableGlobalFilter) != null ? t : !0) && ((r = n.options.enableGlobalFilter) != null ? r : !0) && ((o = n.options.enableFilters) != null ? o : !0) && ((a = n.options.getColumnCanGlobalFilter == null ? void 0 : n.options.getColumnCanGlobalFilter(e)) != null ? a : !0) && !!e.accessorFn;
    };
  },
  createTable: (e) => {
    e.getGlobalAutoFilterFn = () => re.includesString, e.getGlobalFilterFn = () => {
      var n, t;
      const {
        globalFilterFn: r
      } = e.options;
      return Ve(r) ? r : r === "auto" ? e.getGlobalAutoFilterFn() : (n = (t = e.options.filterFns) == null ? void 0 : t[r]) != null ? n : re[r];
    }, e.setGlobalFilter = (n) => {
      e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(n);
    }, e.resetGlobalFilter = (n) => {
      e.setGlobalFilter(n ? void 0 : e.initialState.globalFilter);
    };
  }
}, zi = {
  getInitialState: (e) => ({
    expanded: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onExpandedChange: Q("expanded", e),
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
      var o, a;
      e.setExpanded(r ? {} : (o = (a = e.initialState) == null ? void 0 : a.expanded) != null ? o : {});
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
      return (e.getState().expanded === !0 ? Object.keys(e.getRowModel().rowsById) : Object.keys(e.getState().expanded)).forEach((a) => {
        const s = a.split(".");
        r = Math.max(r, s.length);
      }), r;
    }, e.getPreExpandedRowModel = () => e.getSortedRowModel(), e.getExpandedRowModel = () => (!e._getExpandedRowModel && e.options.getExpandedRowModel && (e._getExpandedRowModel = e.options.getExpandedRowModel(e)), e.options.manualExpanding || !e._getExpandedRowModel ? e.getPreExpandedRowModel() : e._getExpandedRowModel());
  },
  createRow: (e, n) => {
    e.toggleExpanded = (t) => {
      n.setExpanded((r) => {
        var o;
        const a = r === !0 ? !0 : !!(r != null && r[e.id]);
        let s = {};
        if (r === !0 ? Object.keys(n.getRowModel().rowsById).forEach((i) => {
          s[i] = !0;
        }) : s = r, t = (o = t) != null ? o : !a, !a && t)
          return {
            ...s,
            [e.id]: !0
          };
        if (a && !t) {
          const {
            [e.id]: i,
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
}, ot = 0, at = 10, Ze = () => ({
  pageIndex: ot,
  pageSize: at
}), Bi = {
  getInitialState: (e) => ({
    ...e,
    pagination: {
      ...Ze(),
      ...e == null ? void 0 : e.pagination
    }
  }),
  getDefaultOptions: (e) => ({
    onPaginationChange: Q("pagination", e)
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
      const o = (a) => ie(r, a);
      return e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange(o);
    }, e.resetPagination = (r) => {
      var o;
      e.setPagination(r ? Ze() : (o = e.initialState.pagination) != null ? o : Ze());
    }, e.setPageIndex = (r) => {
      e.setPagination((o) => {
        let a = ie(r, o.pageIndex);
        const s = typeof e.options.pageCount > "u" || e.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1;
        return a = Math.max(0, Math.min(a, s)), {
          ...o,
          pageIndex: a
        };
      });
    }, e.resetPageIndex = (r) => {
      var o, a;
      e.setPageIndex(r ? ot : (o = (a = e.initialState) == null || (a = a.pagination) == null ? void 0 : a.pageIndex) != null ? o : ot);
    }, e.resetPageSize = (r) => {
      var o, a;
      e.setPageSize(r ? at : (o = (a = e.initialState) == null || (a = a.pagination) == null ? void 0 : a.pageSize) != null ? o : at);
    }, e.setPageSize = (r) => {
      e.setPagination((o) => {
        const a = Math.max(1, ie(r, o.pageSize)), s = o.pageSize * o.pageIndex, i = Math.floor(s / a);
        return {
          ...o,
          pageIndex: i,
          pageSize: a
        };
      });
    }, e.setPageCount = (r) => e.setPagination((o) => {
      var a;
      let s = ie(r, (a = e.options.pageCount) != null ? a : -1);
      return typeof s == "number" && (s = Math.max(-1, s)), {
        ...o,
        pageCount: s
      };
    }), e.getPageOptions = A(() => [e.getPageCount()], (r) => {
      let o = [];
      return r && r > 0 && (o = [...new Array(r)].fill(null).map((a, s) => s)), o;
    }, P(e.options, "debugTable", "getPageOptions")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
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
}, Ye = () => ({
  top: [],
  bottom: []
}), Gi = {
  getInitialState: (e) => ({
    rowPinning: Ye(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowPinningChange: Q("rowPinning", e)
  }),
  createRow: (e, n) => {
    e.pin = (t, r, o) => {
      const a = r ? e.getLeafRows().map((l) => {
        let {
          id: u
        } = l;
        return u;
      }) : [], s = o ? e.getParentRows().map((l) => {
        let {
          id: u
        } = l;
        return u;
      }) : [], i = /* @__PURE__ */ new Set([...s, e.id, ...a]);
      n.setRowPinning((l) => {
        var u, p;
        if (t === "bottom") {
          var m, b;
          return {
            top: ((m = l == null ? void 0 : l.top) != null ? m : []).filter((d) => !(i != null && i.has(d))),
            bottom: [...((b = l == null ? void 0 : l.bottom) != null ? b : []).filter((d) => !(i != null && i.has(d))), ...Array.from(i)]
          };
        }
        if (t === "top") {
          var g, c;
          return {
            top: [...((g = l == null ? void 0 : l.top) != null ? g : []).filter((d) => !(i != null && i.has(d))), ...Array.from(i)],
            bottom: ((c = l == null ? void 0 : l.bottom) != null ? c : []).filter((d) => !(i != null && i.has(d)))
          };
        }
        return {
          top: ((u = l == null ? void 0 : l.top) != null ? u : []).filter((d) => !(i != null && i.has(d))),
          bottom: ((p = l == null ? void 0 : l.bottom) != null ? p : []).filter((d) => !(i != null && i.has(d)))
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
      } = n.getState().rowPinning, a = t.some((i) => r == null ? void 0 : r.includes(i)), s = t.some((i) => o == null ? void 0 : o.includes(i));
      return a ? "top" : s ? "bottom" : !1;
    }, e.getPinnedIndex = () => {
      var t, r;
      const o = e.getIsPinned();
      if (!o) return -1;
      const a = (t = o === "top" ? n.getTopRows() : n.getBottomRows()) == null ? void 0 : t.map((s) => {
        let {
          id: i
        } = s;
        return i;
      });
      return (r = a == null ? void 0 : a.indexOf(e.id)) != null ? r : -1;
    };
  },
  createTable: (e) => {
    e.setRowPinning = (n) => e.options.onRowPinningChange == null ? void 0 : e.options.onRowPinningChange(n), e.resetRowPinning = (n) => {
      var t, r;
      return e.setRowPinning(n ? Ye() : (t = (r = e.initialState) == null ? void 0 : r.rowPinning) != null ? t : Ye());
    }, e.getIsSomeRowsPinned = (n) => {
      var t;
      const r = e.getState().rowPinning;
      if (!n) {
        var o, a;
        return !!((o = r.top) != null && o.length || (a = r.bottom) != null && a.length);
      }
      return !!((t = r[n]) != null && t.length);
    }, e._getPinnedRows = (n, t, r) => {
      var o;
      return ((o = e.options.keepPinnedRows) == null || o ? (
        //get all rows that are pinned even if they would not be otherwise visible
        //account for expanded parent rows, but not pagination or filtering
        (t ?? []).map((s) => {
          const i = e.getRow(s, !0);
          return i.getIsAllParentsExpanded() ? i : null;
        })
      ) : (
        //else get only visible rows that are pinned
        (t ?? []).map((s) => n.find((i) => i.id === s))
      )).filter(Boolean).map((s) => ({
        ...s,
        position: r
      }));
    }, e.getTopRows = A(() => [e.getRowModel().rows, e.getState().rowPinning.top], (n, t) => e._getPinnedRows(n, t, "top"), P(e.options, "debugRows", "getTopRows")), e.getBottomRows = A(() => [e.getRowModel().rows, e.getState().rowPinning.bottom], (n, t) => e._getPinnedRows(n, t, "bottom"), P(e.options, "debugRows", "getBottomRows")), e.getCenterRows = A(() => [e.getRowModel().rows, e.getState().rowPinning.top, e.getState().rowPinning.bottom], (n, t, r) => {
      const o = /* @__PURE__ */ new Set([...t ?? [], ...r ?? []]);
      return n.filter((a) => !o.has(a.id));
    }, P(e.options, "debugRows", "getCenterRows"));
  }
}, ji = {
  getInitialState: (e) => ({
    rowSelection: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowSelectionChange: Q("rowSelection", e),
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
        return n ? o.forEach((a) => {
          a.getCanSelect() && (r[a.id] = !0);
        }) : o.forEach((a) => {
          delete r[a.id];
        }), r;
      });
    }, e.toggleAllPageRowsSelected = (n) => e.setRowSelection((t) => {
      const r = typeof n < "u" ? n : !e.getIsAllPageRowsSelected(), o = {
        ...t
      };
      return e.getRowModel().rows.forEach((a) => {
        st(o, a.id, r, !0, e);
      }), o;
    }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = A(() => [e.getState().rowSelection, e.getCoreRowModel()], (n, t) => Object.keys(n).length ? Xe(e, t) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, P(e.options, "debugTable", "getSelectedRowModel")), e.getFilteredSelectedRowModel = A(() => [e.getState().rowSelection, e.getFilteredRowModel()], (n, t) => Object.keys(n).length ? Xe(e, t) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, P(e.options, "debugTable", "getFilteredSelectedRowModel")), e.getGroupedSelectedRowModel = A(() => [e.getState().rowSelection, e.getSortedRowModel()], (n, t) => Object.keys(n).length ? Xe(e, t) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, P(e.options, "debugTable", "getGroupedSelectedRowModel")), e.getIsAllRowsSelected = () => {
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
      n.setRowSelection((a) => {
        var s;
        if (t = typeof t < "u" ? t : !o, e.getCanSelect() && o === t)
          return a;
        const i = {
          ...a
        };
        return st(i, e.id, t, (s = r == null ? void 0 : r.selectChildren) != null ? s : !0, n), i;
      });
    }, e.getIsSelected = () => {
      const {
        rowSelection: t
      } = n.getState();
      return bt(e, t);
    }, e.getIsSomeSelected = () => {
      const {
        rowSelection: t
      } = n.getState();
      return it(e, t) === "some";
    }, e.getIsAllSubRowsSelected = () => {
      const {
        rowSelection: t
      } = n.getState();
      return it(e, t) === "all";
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
}, st = (e, n, t, r, o) => {
  var a;
  const s = o.getRow(n, !0);
  t ? (s.getCanMultiSelect() || Object.keys(e).forEach((i) => delete e[i]), s.getCanSelect() && (e[n] = !0)) : delete e[n], r && (a = s.subRows) != null && a.length && s.getCanSelectSubRows() && s.subRows.forEach((i) => st(e, i.id, t, r, o));
};
function Xe(e, n) {
  const t = e.getState().rowSelection, r = [], o = {}, a = function(s, i) {
    return s.map((l) => {
      var u;
      const p = bt(l, t);
      if (p && (r.push(l), o[l.id] = l), (u = l.subRows) != null && u.length && (l = {
        ...l,
        subRows: a(l.subRows)
      }), p)
        return l;
    }).filter(Boolean);
  };
  return {
    rows: a(n.rows),
    flatRows: r,
    rowsById: o
  };
}
function bt(e, n) {
  var t;
  return (t = n[e.id]) != null ? t : !1;
}
function it(e, n, t) {
  var r;
  if (!((r = e.subRows) != null && r.length)) return !1;
  let o = !0, a = !1;
  return e.subRows.forEach((s) => {
    if (!(a && !o) && (s.getCanSelect() && (bt(s, n) ? a = !0 : o = !1), s.subRows && s.subRows.length)) {
      const i = it(s, n);
      i === "all" ? a = !0 : (i === "some" && (a = !0), o = !1);
    }
  }), o ? "all" : a ? "some" : !1;
}
const lt = /([0-9]+)/gm, Hi = (e, n, t) => or(le(e.getValue(t)).toLowerCase(), le(n.getValue(t)).toLowerCase()), Ui = (e, n, t) => or(le(e.getValue(t)), le(n.getValue(t))), qi = (e, n, t) => yt(le(e.getValue(t)).toLowerCase(), le(n.getValue(t)).toLowerCase()), Wi = (e, n, t) => yt(le(e.getValue(t)), le(n.getValue(t))), Ki = (e, n, t) => {
  const r = e.getValue(t), o = n.getValue(t);
  return r > o ? 1 : r < o ? -1 : 0;
}, Zi = (e, n, t) => yt(e.getValue(t), n.getValue(t));
function yt(e, n) {
  return e === n ? 0 : e > n ? 1 : -1;
}
function le(e) {
  return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
}
function or(e, n) {
  const t = e.split(lt).filter(Boolean), r = n.split(lt).filter(Boolean);
  for (; t.length && r.length; ) {
    const o = t.shift(), a = r.shift(), s = parseInt(o, 10), i = parseInt(a, 10), l = [s, i].sort();
    if (isNaN(l[0])) {
      if (o > a)
        return 1;
      if (a > o)
        return -1;
      continue;
    }
    if (isNaN(l[1]))
      return isNaN(s) ? -1 : 1;
    if (s > i)
      return 1;
    if (i > s)
      return -1;
  }
  return t.length - r.length;
}
const ve = {
  alphanumeric: Hi,
  alphanumericCaseSensitive: Ui,
  text: qi,
  textCaseSensitive: Wi,
  datetime: Ki,
  basic: Zi
}, Yi = {
  getInitialState: (e) => ({
    sorting: [],
    ...e
  }),
  getDefaultColumnDef: () => ({
    sortingFn: "auto",
    sortUndefined: 1
  }),
  getDefaultOptions: (e) => ({
    onSortingChange: Q("sorting", e),
    isMultiSortEvent: (n) => n.shiftKey
  }),
  createColumn: (e, n) => {
    e.getAutoSortingFn = () => {
      const t = n.getFilteredRowModel().flatRows.slice(10);
      let r = !1;
      for (const o of t) {
        const a = o == null ? void 0 : o.getValue(e.id);
        if (Object.prototype.toString.call(a) === "[object Date]")
          return ve.datetime;
        if (typeof a == "string" && (r = !0, a.split(lt).length > 1))
          return ve.alphanumeric;
      }
      return r ? ve.text : ve.basic;
    }, e.getAutoSortDir = () => {
      const t = n.getFilteredRowModel().flatRows[0];
      return typeof (t == null ? void 0 : t.getValue(e.id)) == "string" ? "asc" : "desc";
    }, e.getSortingFn = () => {
      var t, r;
      if (!e)
        throw new Error();
      return Ve(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (t = (r = n.options.sortingFns) == null ? void 0 : r[e.columnDef.sortingFn]) != null ? t : ve[e.columnDef.sortingFn];
    }, e.toggleSorting = (t, r) => {
      const o = e.getNextSortingOrder(), a = typeof t < "u" && t !== null;
      n.setSorting((s) => {
        const i = s == null ? void 0 : s.find((g) => g.id === e.id), l = s == null ? void 0 : s.findIndex((g) => g.id === e.id);
        let u = [], p, m = a ? t : o === "desc";
        if (s != null && s.length && e.getCanMultiSort() && r ? i ? p = "toggle" : p = "add" : s != null && s.length && l !== s.length - 1 ? p = "replace" : i ? p = "toggle" : p = "replace", p === "toggle" && (a || o || (p = "remove")), p === "add") {
          var b;
          u = [...s, {
            id: e.id,
            desc: m
          }], u.splice(0, u.length - ((b = n.options.maxMultiSortColCount) != null ? b : Number.MAX_SAFE_INTEGER));
        } else p === "toggle" ? u = s.map((g) => g.id === e.id ? {
          ...g,
          desc: m
        } : g) : p === "remove" ? u = s.filter((g) => g.id !== e.id) : u = [{
          id: e.id,
          desc: m
        }];
        return u;
      });
    }, e.getFirstSortDir = () => {
      var t, r;
      return ((t = (r = e.columnDef.sortDescFirst) != null ? r : n.options.sortDescFirst) != null ? t : e.getAutoSortDir() === "desc") ? "desc" : "asc";
    }, e.getNextSortingOrder = (t) => {
      var r, o;
      const a = e.getFirstSortDir(), s = e.getIsSorted();
      return s ? s !== a && ((r = n.options.enableSortingRemoval) == null || r) && // If enableSortRemove, enable in general
      (!(t && (o = n.options.enableMultiRemove) != null) || o) ? !1 : s === "desc" ? "asc" : "desc" : a;
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
}, Xi = [
  yi,
  Li,
  Pi,
  Mi,
  vi,
  wi,
  Oi,
  //depends on ColumnFaceting
  Vi,
  //depends on ColumnFiltering
  Yi,
  Ii,
  //depends on RowSorting
  zi,
  Bi,
  Gi,
  ji,
  Di
];
function Qi(e) {
  var n, t;
  process.env.NODE_ENV !== "production" && (e.debugAll || e.debugTable) && console.info("Creating Table Instance...");
  const r = [...Xi, ...(n = e._features) != null ? n : []];
  let o = {
    _features: r
  };
  const a = o._features.reduce((b, g) => Object.assign(b, g.getDefaultOptions == null ? void 0 : g.getDefaultOptions(o)), {}), s = (b) => o.options.mergeOptions ? o.options.mergeOptions(a, b) : {
    ...a,
    ...b
  };
  let l = {
    ...{},
    ...(t = e.initialState) != null ? t : {}
  };
  o._features.forEach((b) => {
    var g;
    l = (g = b.getInitialState == null ? void 0 : b.getInitialState(l)) != null ? g : l;
  });
  const u = [];
  let p = !1;
  const m = {
    _features: r,
    options: {
      ...a,
      ...e
    },
    initialState: l,
    _queue: (b) => {
      u.push(b), p || (p = !0, Promise.resolve().then(() => {
        for (; u.length; )
          u.shift()();
        p = !1;
      }).catch((g) => setTimeout(() => {
        throw g;
      })));
    },
    reset: () => {
      o.setState(o.initialState);
    },
    setOptions: (b) => {
      const g = ie(b, o.options);
      o.options = s(g);
    },
    getState: () => o.options.state,
    setState: (b) => {
      o.options.onStateChange == null || o.options.onStateChange(b);
    },
    _getRowId: (b, g, c) => {
      var d;
      return (d = o.options.getRowId == null ? void 0 : o.options.getRowId(b, g, c)) != null ? d : `${c ? [c.id, g].join(".") : g}`;
    },
    getCoreRowModel: () => (o._getCoreRowModel || (o._getCoreRowModel = o.options.getCoreRowModel(o)), o._getCoreRowModel()),
    // The final calls start at the bottom of the model,
    // expanded rows, which then work their way up
    getRowModel: () => o.getPaginationRowModel(),
    //in next version, we should just pass in the row model as the optional 2nd arg
    getRow: (b, g) => {
      let c = (g ? o.getPrePaginationRowModel() : o.getRowModel()).rowsById[b];
      if (!c && (c = o.getCoreRowModel().rowsById[b], !c))
        throw process.env.NODE_ENV !== "production" ? new Error(`getRow could not find row with ID: ${b}`) : new Error();
      return c;
    },
    _getDefaultColumnDef: A(() => [o.options.defaultColumn], (b) => {
      var g;
      return b = (g = b) != null ? g : {}, {
        header: (c) => {
          const d = c.header.column.columnDef;
          return d.accessorKey ? d.accessorKey : d.accessorFn ? d.id : null;
        },
        // footer: props => props.header.column.id,
        cell: (c) => {
          var d, f;
          return (d = (f = c.renderValue()) == null || f.toString == null ? void 0 : f.toString()) != null ? d : null;
        },
        ...o._features.reduce((c, d) => Object.assign(c, d.getDefaultColumnDef == null ? void 0 : d.getDefaultColumnDef()), {}),
        ...b
      };
    }, P(e, "debugColumns", "_getDefaultColumnDef")),
    _getColumnDefs: () => o.options.columns,
    getAllColumns: A(() => [o._getColumnDefs()], (b) => {
      const g = function(c, d, f) {
        return f === void 0 && (f = 0), c.map((v) => {
          const w = bi(o, v, f, d), x = v;
          return w.columns = x.columns ? g(x.columns, w, f + 1) : [], w;
        });
      };
      return g(b);
    }, P(e, "debugColumns", "getAllColumns")),
    getAllFlatColumns: A(() => [o.getAllColumns()], (b) => b.flatMap((g) => g.getFlatColumns()), P(e, "debugColumns", "getAllFlatColumns")),
    _getAllFlatColumnsById: A(() => [o.getAllFlatColumns()], (b) => b.reduce((g, c) => (g[c.id] = c, g), {}), P(e, "debugColumns", "getAllFlatColumnsById")),
    getAllLeafColumns: A(() => [o.getAllColumns(), o._getOrderColumnsFn()], (b, g) => {
      let c = b.flatMap((d) => d.getLeafColumns());
      return g(c);
    }, P(e, "debugColumns", "getAllLeafColumns")),
    getColumn: (b) => {
      const g = o._getAllFlatColumnsById()[b];
      return process.env.NODE_ENV !== "production" && !g && console.error(`[Table] Column with id '${b}' does not exist.`), g;
    }
  };
  Object.assign(o, m);
  for (let b = 0; b < o._features.length; b++) {
    const g = o._features[b];
    g == null || g.createTable == null || g.createTable(o);
  }
  return o;
}
function Ji() {
  return (e) => A(() => [e.options.data], (n) => {
    const t = {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, r = function(o, a, s) {
      a === void 0 && (a = 0);
      const i = [];
      for (let u = 0; u < o.length; u++) {
        const p = mt(e, e._getRowId(o[u], u, s), o[u], u, a, void 0, s == null ? void 0 : s.id);
        if (t.flatRows.push(p), t.rowsById[p.id] = p, i.push(p), e.options.getSubRows) {
          var l;
          p.originalSubRows = e.options.getSubRows(o[u], u), (l = p.originalSubRows) != null && l.length && (p.subRows = r(p.originalSubRows, a + 1, p));
        }
      }
      return i;
    };
    return t.rows = r(n), t;
  }, P(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
}
function el(e) {
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
function tl(e, n, t) {
  return t.options.filterFromLeafRows ? nl(e, n, t) : rl(e, n, t);
}
function nl(e, n, t) {
  var r;
  const o = [], a = {}, s = (r = t.options.maxLeafRowFilterDepth) != null ? r : 100, i = function(l, u) {
    u === void 0 && (u = 0);
    const p = [];
    for (let b = 0; b < l.length; b++) {
      var m;
      let g = l[b];
      const c = mt(t, g.id, g.original, g.index, g.depth, void 0, g.parentId);
      if (c.columnFilters = g.columnFilters, (m = g.subRows) != null && m.length && u < s) {
        if (c.subRows = i(g.subRows, u + 1), g = c, n(g) && !c.subRows.length) {
          p.push(g), a[g.id] = g, o.push(g);
          continue;
        }
        if (n(g) || c.subRows.length) {
          p.push(g), a[g.id] = g, o.push(g);
          continue;
        }
      } else
        g = c, n(g) && (p.push(g), a[g.id] = g, o.push(g));
    }
    return p;
  };
  return {
    rows: i(e),
    flatRows: o,
    rowsById: a
  };
}
function rl(e, n, t) {
  var r;
  const o = [], a = {}, s = (r = t.options.maxLeafRowFilterDepth) != null ? r : 100, i = function(l, u) {
    u === void 0 && (u = 0);
    const p = [];
    for (let b = 0; b < l.length; b++) {
      let g = l[b];
      if (n(g)) {
        var m;
        if ((m = g.subRows) != null && m.length && u < s) {
          const d = mt(t, g.id, g.original, g.index, g.depth, void 0, g.parentId);
          d.subRows = i(g.subRows, u + 1), g = d;
        }
        p.push(g), o.push(g), a[g.id] = g;
      }
    }
    return p;
  };
  return {
    rows: i(e),
    flatRows: o,
    rowsById: a
  };
}
function ol() {
  return (e) => A(() => [e.getPreFilteredRowModel(), e.getState().columnFilters, e.getState().globalFilter], (n, t, r) => {
    if (!n.rows.length || !(t != null && t.length) && !r) {
      for (let b = 0; b < n.flatRows.length; b++)
        n.flatRows[b].columnFilters = {}, n.flatRows[b].columnFiltersMeta = {};
      return n;
    }
    const o = [], a = [];
    (t ?? []).forEach((b) => {
      var g;
      const c = e.getColumn(b.id);
      if (!c)
        return;
      const d = c.getFilterFn();
      if (!d) {
        process.env.NODE_ENV !== "production" && console.warn(`Could not find a valid 'column.filterFn' for column with the ID: ${c.id}.`);
        return;
      }
      o.push({
        id: b.id,
        filterFn: d,
        resolvedValue: (g = d.resolveFilterValue == null ? void 0 : d.resolveFilterValue(b.value)) != null ? g : b.value
      });
    });
    const s = (t ?? []).map((b) => b.id), i = e.getGlobalFilterFn(), l = e.getAllLeafColumns().filter((b) => b.getCanGlobalFilter());
    r && i && l.length && (s.push("__global__"), l.forEach((b) => {
      var g;
      a.push({
        id: b.id,
        filterFn: i,
        resolvedValue: (g = i.resolveFilterValue == null ? void 0 : i.resolveFilterValue(r)) != null ? g : r
      });
    }));
    let u, p;
    for (let b = 0; b < n.flatRows.length; b++) {
      const g = n.flatRows[b];
      if (g.columnFilters = {}, o.length)
        for (let c = 0; c < o.length; c++) {
          u = o[c];
          const d = u.id;
          g.columnFilters[d] = u.filterFn(g, d, u.resolvedValue, (f) => {
            g.columnFiltersMeta[d] = f;
          });
        }
      if (a.length) {
        for (let c = 0; c < a.length; c++) {
          p = a[c];
          const d = p.id;
          if (p.filterFn(g, d, p.resolvedValue, (f) => {
            g.columnFiltersMeta[d] = f;
          })) {
            g.columnFilters.__global__ = !0;
            break;
          }
        }
        g.columnFilters.__global__ !== !0 && (g.columnFilters.__global__ = !1);
      }
    }
    const m = (b) => {
      for (let g = 0; g < s.length; g++)
        if (b.columnFilters[s[g]] === !1)
          return !1;
      return !0;
    };
    return tl(n.rows, m, e);
  }, P(e.options, "debugTable", "getFilteredRowModel", () => e._autoResetPageIndex()));
}
function al(e) {
  return (n) => A(() => [n.getState().pagination, n.getPrePaginationRowModel(), n.options.paginateExpandedRows ? void 0 : n.getState().expanded], (t, r) => {
    if (!r.rows.length)
      return r;
    const {
      pageSize: o,
      pageIndex: a
    } = t;
    let {
      rows: s,
      flatRows: i,
      rowsById: l
    } = r;
    const u = o * a, p = u + o;
    s = s.slice(u, p);
    let m;
    n.options.paginateExpandedRows ? m = {
      rows: s,
      flatRows: i,
      rowsById: l
    } : m = el({
      rows: s,
      flatRows: i,
      rowsById: l
    }), m.flatRows = [];
    const b = (g) => {
      m.flatRows.push(g), g.subRows.length && g.subRows.forEach(b);
    };
    return m.rows.forEach(b), m;
  }, P(n.options, "debugTable", "getPaginationRowModel"));
}
function sl() {
  return (e) => A(() => [e.getState().sorting, e.getPreSortedRowModel()], (n, t) => {
    if (!t.rows.length || !(n != null && n.length))
      return t;
    const r = e.getState().sorting, o = [], a = r.filter((l) => {
      var u;
      return (u = e.getColumn(l.id)) == null ? void 0 : u.getCanSort();
    }), s = {};
    a.forEach((l) => {
      const u = e.getColumn(l.id);
      u && (s[l.id] = {
        sortUndefined: u.columnDef.sortUndefined,
        invertSorting: u.columnDef.invertSorting,
        sortingFn: u.getSortingFn()
      });
    });
    const i = (l) => {
      const u = l.map((p) => ({
        ...p
      }));
      return u.sort((p, m) => {
        for (let g = 0; g < a.length; g += 1) {
          var b;
          const c = a[g], d = s[c.id], f = d.sortUndefined, v = (b = c == null ? void 0 : c.desc) != null ? b : !1;
          let w = 0;
          if (f) {
            const x = p.getValue(c.id), C = m.getValue(c.id), E = x === void 0, M = C === void 0;
            if (E || M) {
              if (f === "first") return E ? -1 : 1;
              if (f === "last") return E ? 1 : -1;
              w = E && M ? 0 : E ? f : -f;
            }
          }
          if (w === 0 && (w = d.sortingFn(p, m, c.id)), w !== 0)
            return v && (w *= -1), d.invertSorting && (w *= -1), w;
        }
        return p.index - m.index;
      }), u.forEach((p) => {
        var m;
        o.push(p), (m = p.subRows) != null && m.length && (p.subRows = i(p.subRows));
      }), u;
    };
    return {
      rows: i(t.rows),
      flatRows: o,
      rowsById: t.rowsById
    };
  }, P(e.options, "debugTable", "getSortedRowModel", () => e._autoResetPageIndex()));
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
function Ot(e, n) {
  return e ? il(e) ? /* @__PURE__ */ y.createElement(e, n) : e : null;
}
function il(e) {
  return ll(e) || typeof e == "function" || ul(e);
}
function ll(e) {
  return typeof e == "function" && (() => {
    const n = Object.getPrototypeOf(e);
    return n.prototype && n.prototype.isReactComponent;
  })();
}
function ul(e) {
  return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
}
function cl(e) {
  const n = {
    state: {},
    // Dummy state
    onStateChange: () => {
    },
    // noop
    renderFallbackValue: null,
    ...e
  }, [t] = y.useState(() => ({
    current: Qi(n)
  })), [r, o] = y.useState(() => t.current.initialState);
  return t.current.setOptions((a) => ({
    ...a,
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
function Il({
  columns: e,
  data: n,
  searchable: t = !1,
  searchPlaceholder: r = "Search...",
  pagination: o = !1,
  pageSize: a = 10,
  pageSizeOptions: s = [10, 20, 50, 100],
  enableRowSelection: i = !1,
  onRowSelectionChange: l,
  enableColumnVisibility: u = !1,
  emptyMessage: p = "No results.",
  className: m,
  stickyHeader: b = !1,
  getRowClassName: g,
  onRowClick: c,
  loading: d = !1
}) {
  var W;
  const [f, v] = y.useState([]), [w, x] = y.useState([]), [C, E] = y.useState({}), [M, I] = y.useState({}), [N, $] = y.useState(""), [O, L] = y.useState({
    pageIndex: 0,
    pageSize: a
  }), _ = cl({
    data: n,
    columns: e,
    getCoreRowModel: Ji(),
    getSortedRowModel: sl(),
    getFilteredRowModel: ol(),
    ...o && { getPaginationRowModel: al() },
    onSortingChange: v,
    onColumnFiltersChange: x,
    onColumnVisibilityChange: E,
    onRowSelectionChange: I,
    onGlobalFilterChange: $,
    onPaginationChange: L,
    enableRowSelection: i,
    state: {
      sorting: f,
      columnFilters: w,
      columnVisibility: C,
      rowSelection: M,
      globalFilter: N,
      pagination: O
    }
  });
  return y.useEffect(() => {
    if (l) {
      const F = _.getFilteredSelectedRowModel().rows.map((V) => V.original);
      l(F);
    }
  }, [M, _, l]), /* @__PURE__ */ R("div", { className: k("w-full space-y-4", m), children: [
    (t || u) && /* @__PURE__ */ R("div", { className: "flex items-center justify-between gap-4", children: [
      t && /* @__PURE__ */ h("div", { className: "max-w-sm flex-1", children: /* @__PURE__ */ h(
        Xt,
        {
          placeholder: r,
          value: N ?? "",
          onChange: (F) => {
            $(F.target.value);
          },
          className: "w-full"
        }
      ) }),
      u && /* @__PURE__ */ R("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ h("span", { className: "text-muted-foreground text-sm", children: "Columns:" }),
        _.getAllLeafColumns().map((F) => F.id === "select" ? null : /* @__PURE__ */ R("label", { className: "flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ h(
            "input",
            {
              type: "checkbox",
              checked: F.getIsVisible(),
              onChange: (V) => {
                F.toggleVisibility(V.target.checked);
              },
              className: "rounded border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-slate-700"
            }
          ),
          /* @__PURE__ */ h("span", { className: "capitalize", children: F.id })
        ] }, F.id))
      ] })
    ] }),
    /* @__PURE__ */ h("div", { className: "overflow-hidden rounded-md border border-slate-200 dark:border-slate-800", children: /* @__PURE__ */ h("div", { className: k("overflow-auto", b && "max-h-[600px]"), children: /* @__PURE__ */ R("table", { className: "w-full caption-bottom text-sm", children: [
      /* @__PURE__ */ h(
        "thead",
        {
          className: k(
            "border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900",
            b && "sticky top-0 z-10"
          ),
          children: _.getHeaderGroups().map((F) => /* @__PURE__ */ h("tr", { children: F.headers.map((V) => /* @__PURE__ */ h(
            "th",
            {
              className: "h-12 px-4 text-left align-middle font-medium text-slate-700 dark:text-slate-300",
              children: V.isPlaceholder ? null : Ot(V.column.columnDef.header, V.getContext())
            },
            V.id
          )) }, F.id))
        }
      ),
      /* @__PURE__ */ h("tbody", { className: "divide-y divide-slate-200 dark:divide-slate-800", children: d ? /* @__PURE__ */ h("tr", { children: /* @__PURE__ */ h("td", { colSpan: e.length, className: "text-muted-foreground h-24 text-center", children: "Loading..." }) }) : (W = _.getRowModel().rows) != null && W.length ? _.getRowModel().rows.map((F) => /* @__PURE__ */ h(
        "tr",
        {
          "data-state": F.getIsSelected() && "selected",
          className: k(
            "border-b border-slate-200 bg-white transition-colors hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-900/50",
            F.getIsSelected() && "bg-slate-50 dark:bg-slate-900",
            c && "cursor-pointer",
            g == null ? void 0 : g(F.original)
          ),
          onClick: () => c == null ? void 0 : c(F.original),
          children: F.getVisibleCells().map((V) => /* @__PURE__ */ h("td", { className: "px-4 py-3 align-middle", children: Ot(V.column.columnDef.cell, V.getContext()) }, V.id))
        },
        F.id
      )) : /* @__PURE__ */ h("tr", { children: /* @__PURE__ */ h("td", { colSpan: e.length, className: "text-muted-foreground h-24 text-center", children: p }) }) })
    ] }) }) }),
    o && /* @__PURE__ */ R("div", { className: "flex items-center justify-between px-2", children: [
      /* @__PURE__ */ h("div", { className: "flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300", children: i && /* @__PURE__ */ R("div", { className: "text-muted-foreground flex-1 text-sm", children: [
        _.getFilteredSelectedRowModel().rows.length,
        " of",
        " ",
        _.getFilteredRowModel().rows.length,
        " row(s) selected."
      ] }) }),
      /* @__PURE__ */ R("div", { className: "flex items-center gap-6", children: [
        /* @__PURE__ */ R("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ h("span", { className: "text-sm text-slate-700 dark:text-slate-300", children: "Rows per page" }),
          /* @__PURE__ */ h(
            "select",
            {
              value: _.getState().pagination.pageSize.toString(),
              onChange: (F) => {
                _.setPageSize(Number(F.target.value));
              },
              className: "h-8 w-[70px] rounded-md border border-slate-300 bg-white text-sm dark:border-slate-700 dark:bg-slate-950",
              children: s.map((F) => /* @__PURE__ */ h("option", { value: F, children: F }, F))
            }
          )
        ] }),
        /* @__PURE__ */ R("div", { className: "flex items-center gap-1 text-sm font-medium text-slate-700 dark:text-slate-300", children: [
          "Page ",
          _.getState().pagination.pageIndex + 1,
          " of ",
          _.getPageCount()
        ] }),
        /* @__PURE__ */ R("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ h(
            Y,
            {
              variant: "outline",
              size: "sm",
              onClick: () => {
                _.previousPage();
              },
              disabled: !_.getCanPreviousPage(),
              children: "Previous"
            }
          ),
          /* @__PURE__ */ h(
            Y,
            {
              variant: "outline",
              size: "sm",
              onClick: () => {
                _.nextPage();
              },
              disabled: !_.getCanNextPage(),
              children: "Next"
            }
          )
        ] })
      ] })
    ] })
  ] });
}
function Al(e) {
  return ({ column: n }) => /* @__PURE__ */ R(
    Y,
    {
      variant: "ghost",
      onClick: () => {
        n.toggleSorting(n.getIsSorted() === "asc");
      },
      className: "-ml-4 h-8",
      children: [
        e,
        n.getIsSorted() === "asc" ? /* @__PURE__ */ h(jt, { className: "ml-2 h-4 w-4" }) : n.getIsSorted() === "desc" ? /* @__PURE__ */ h(ut, { className: "ml-2 h-4 w-4" }) : /* @__PURE__ */ h(dr, { className: "ml-2 h-4 w-4 opacity-50" })
      ]
    }
  );
}
function Pl() {
  return {
    id: "select",
    header: ({ table: e }) => /* @__PURE__ */ h(
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
    cell: ({ row: e }) => /* @__PURE__ */ h(
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
function Ml({
  icon: e,
  title: n,
  description: t,
  action: r,
  secondaryAction: o,
  className: a,
  size: s = "md",
  children: i
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
  return /* @__PURE__ */ h(
    "div",
    {
      className: k(
        "flex items-center justify-center text-slate-500 dark:text-slate-400",
        u.container,
        a
      ),
      role: "status",
      "aria-live": "polite",
      children: /* @__PURE__ */ R("div", { className: "max-w-md text-center", children: [
        e && /* @__PURE__ */ h(
          "div",
          {
            className: k(
              "flex items-center justify-center text-slate-300 dark:text-slate-600",
              u.icon
            ),
            "aria-hidden": "true",
            children: e
          }
        ),
        /* @__PURE__ */ h("h3", { className: k("font-medium text-slate-700 dark:text-slate-300", u.title), children: n }),
        t && /* @__PURE__ */ h("p", { className: k("text-slate-600 dark:text-slate-400", u.description), children: t }),
        i && /* @__PURE__ */ h("div", { className: k(u.description), children: i }),
        (r || o) && /* @__PURE__ */ R("div", { className: k("flex items-center justify-center", u.actions), children: [
          r && /* @__PURE__ */ R(Y, { onClick: r.onClick, variant: r.variant || "default", children: [
            r.icon && /* @__PURE__ */ h("span", { className: "mr-2", children: r.icon }),
            r.label
          ] }),
          o && /* @__PURE__ */ h(
            Y,
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
function $l({
  error: e,
  onRetry: n,
  variant: t = "default",
  className: r,
  compact: o = !1
}) {
  const a = e instanceof Error ? e.message : e, s = () => {
    switch (t) {
      case "network":
        return yr;
      case "auth":
        return fr;
      case "notfound":
        return xe;
      // Or a specific not-found icon if available
      default:
        return xe;
    }
  }, i = () => {
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
  return o ? /* @__PURE__ */ R(
    "div",
    {
      className: k(
        "flex items-center justify-between rounded-lg border p-4",
        "bg-destructive/5 dark:bg-destructive/10 border-destructive/20 dark:border-destructive/30",
        r
      ),
      role: "alert",
      "aria-live": "polite",
      children: [
        /* @__PURE__ */ R("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ h(u, { className: "text-destructive h-5 w-5 flex-shrink-0", "aria-hidden": "true" }),
          /* @__PURE__ */ R("div", { children: [
            /* @__PURE__ */ h("p", { className: "text-destructive-foreground text-sm font-medium", children: i() }),
            /* @__PURE__ */ h("p", { className: "text-destructive-foreground/80 mt-0.5 text-sm", children: a || l() })
          ] })
        ] }),
        n && /* @__PURE__ */ R(
          Y,
          {
            variant: "ghost",
            size: "sm",
            onClick: n,
            className: "hover:bg-destructive/10 text-destructive hover:text-destructive ml-4",
            "aria-label": "Retry operation",
            children: [
              /* @__PURE__ */ h(Ct, { className: "mr-2 h-4 w-4" }),
              "Retry"
            ]
          }
        )
      ]
    }
  ) : /* @__PURE__ */ R(
    "div",
    {
      className: k(
        "bg-background flex flex-col items-center justify-center rounded-lg border px-4 py-12",
        "border-border/60",
        r
      ),
      role: "alert",
      "aria-live": "polite",
      children: [
        /* @__PURE__ */ h("div", { className: "bg-destructive/10 mb-4 flex h-16 w-16 items-center justify-center rounded-full", children: /* @__PURE__ */ h(u, { className: "text-destructive h-8 w-8", "aria-hidden": "true" }) }),
        /* @__PURE__ */ h("h3", { className: "text-foreground mb-2 text-lg font-semibold", children: i() }),
        /* @__PURE__ */ h("p", { className: "text-muted-foreground mb-4 max-w-md text-center text-sm", children: l() }),
        a && /* @__PURE__ */ h("div", { className: "bg-muted/50 border-border/50 mb-6 w-full max-w-md rounded-md border p-3", children: /* @__PURE__ */ h("p", { className: "text-muted-foreground text-center font-mono text-xs break-words", children: a }) }),
        n && /* @__PURE__ */ R(
          Y,
          {
            variant: "default",
            onClick: n,
            className: "min-w-[120px]",
            "aria-label": "Retry operation",
            children: [
              /* @__PURE__ */ h(Ct, { className: "mr-2 h-4 w-4" }),
              "Try Again"
            ]
          }
        )
      ]
    }
  );
}
const dl = T(
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
), gl = T("flex items-center justify-center rounded-full p-2", {
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
}), pl = T("text-2xl font-bold tracking-tight", {
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
}), fl = T("text-sm font-medium", {
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
function Dl({
  className: e,
  variant: n,
  icon: t,
  value: r,
  label: o,
  trend: a,
  ...s
}) {
  return /* @__PURE__ */ h(Qt, { className: k(dl({ variant: n, className: e })), ...s, children: /* @__PURE__ */ R("div", { className: "flex items-start justify-between space-x-4 p-6", children: [
    /* @__PURE__ */ R("div", { className: "space-y-1", children: [
      /* @__PURE__ */ h("p", { className: k(pl({ variant: n })), children: r }),
      /* @__PURE__ */ h("p", { className: k(fl({ variant: n })), children: o }),
      a && /* @__PURE__ */ R("div", { className: "mt-2 flex items-center space-x-1 text-xs", children: [
        /* @__PURE__ */ h(
          "span",
          {
            className: k(
              "font-medium",
              a.direction === "up" && "text-emerald-600 dark:text-emerald-400",
              a.direction === "down" && "text-rose-600 dark:text-rose-400",
              a.direction === "neutral" && "text-slate-500"
            ),
            children: a.value
          }
        ),
        a.label && /* @__PURE__ */ h("span", { className: "text-slate-500 dark:text-slate-400", children: a.label })
      ] })
    ] }),
    t && /* @__PURE__ */ h("div", { className: k(gl({ variant: n })), children: /* @__PURE__ */ h("div", { className: "h-6 w-6", children: t }) })
  ] }) });
}
const Vt = T("h-2.5 w-2.5 rounded-full", {
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
function Tl({
  status: e,
  label: n,
  pulse: t,
  asBadge: r = !1,
  showLabel: o = !0,
  className: a,
  ...s
}) {
  const l = n || {
    online: "Online",
    offline: "Offline",
    connecting: "Connecting...",
    error: "Error"
  }[e], u = t ?? (e === "online" || e === "connecting");
  return r ? /* @__PURE__ */ R(Jt, { variant: {
    online: "success",
    offline: "secondary",
    connecting: "warning",
    error: "destructive"
  }[e], className: k("gap-1.5", a), ...s, children: [
    /* @__PURE__ */ h(
      "span",
      {
        className: k(Vt({ status: e, animate: u }), "h-2 w-2"),
        "aria-hidden": "true"
      }
    ),
    o && /* @__PURE__ */ h("span", { children: l })
  ] }) : /* @__PURE__ */ R("div", { className: k("flex items-center gap-2 text-sm", a), ...s, children: [
    /* @__PURE__ */ h(
      "span",
      {
        className: k(Vt({ status: e, animate: u })),
        "aria-hidden": "true"
      }
    ),
    o && /* @__PURE__ */ h(
      "span",
      {
        className: k(
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
function Ll({
  content: e,
  children: n,
  side: t = "top",
  disabled: r = !1,
  interactive: o = !1,
  className: a
}) {
  const [s, i] = y.useState(!1), [l, u] = y.useState({ top: 0, left: 0 }), p = y.useRef(null), m = y.useRef(null), b = y.useRef(null), g = () => {
    b.current && (clearTimeout(b.current), b.current = null), i(!0);
  }, c = () => {
    o ? b.current = setTimeout(() => {
      i(!1);
    }, 100) : i(!1);
  };
  return y.useEffect(() => () => {
    b.current && clearTimeout(b.current);
  }, []), y.useLayoutEffect(() => {
    if (s && p.current && m.current) {
      const d = p.current.getBoundingClientRect(), f = m.current.getBoundingClientRect();
      let v = 0, w = 0;
      switch (t) {
        case "right":
          v = d.top + d.height / 2 - f.height / 2, w = d.right + 8;
          break;
        case "left":
          v = d.top + d.height / 2 - f.height / 2, w = d.left - f.width - 8;
          break;
        case "top":
          v = d.top - f.height - 8, w = d.left + d.width / 2 - f.width / 2;
          break;
        case "bottom":
          v = d.bottom + 8, w = d.left + d.width / 2 - f.width / 2;
          break;
      }
      v += window.scrollY, w += window.scrollX, u({ top: v, left: w });
    }
  }, [s, t]), r ? n : /* @__PURE__ */ R(ue, { children: [
    /* @__PURE__ */ h(
      "div",
      {
        ref: p,
        onMouseEnter: g,
        onMouseLeave: c,
        onFocus: g,
        onBlur: c,
        className: "inline-block",
        "data-testid": "tooltip-trigger",
        children: n
      }
    ),
    s && /* @__PURE__ */ h(
      "div",
      {
        ref: m,
        role: "tooltip",
        className: k(
          "bg-popover text-popover-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 fixed z-50 rounded-md border px-3 py-1.5 text-sm shadow-md",
          o ? "pointer-events-auto" : "pointer-events-none",
          a
        ),
        style: {
          top: `${l.top}px`,
          left: `${l.left}px`
        },
        onMouseEnter: o ? g : void 0,
        onMouseLeave: o ? c : void 0,
        children: e
      }
    )
  ] });
}
function Ol({
  open: e,
  onOpenChange: n,
  onConfirm: t,
  title: r,
  message: o,
  confirmText: a = "Confirm",
  cancelText: s = "Cancel",
  variant: i = "danger"
}) {
  const l = () => {
    t(), n(!1);
  }, p = {
    danger: {
      icon: xe,
      iconClassName: "text-destructive",
      iconBgClassName: "bg-destructive/10",
      buttonVariant: "destructive",
      buttonClassName: void 0
    },
    warning: {
      icon: xe,
      iconClassName: "text-yellow-600 dark:text-yellow-400",
      iconBgClassName: "bg-yellow-100 dark:bg-yellow-900/30",
      buttonVariant: "default",
      buttonClassName: "bg-yellow-600 hover:bg-yellow-700 dark:bg-yellow-600 dark:hover:bg-yellow-700"
    },
    info: {
      icon: et,
      iconClassName: "text-blue-600 dark:text-blue-400",
      iconBgClassName: "bg-blue-100 dark:bg-blue-900/30",
      buttonVariant: "default",
      buttonClassName: "bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
    }
  }[i], m = p.icon;
  return /* @__PURE__ */ h(Go, { open: e, onOpenChange: n, children: /* @__PURE__ */ R(un, { children: [
    /* @__PURE__ */ h(cn, { children: /* @__PURE__ */ R("div", { className: "flex items-start gap-4", children: [
      /* @__PURE__ */ h(
        "div",
        {
          className: k(
            "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full",
            p.iconBgClassName
          ),
          children: /* @__PURE__ */ h(m, { className: k("h-6 w-6", p.iconClassName) })
        }
      ),
      /* @__PURE__ */ R("div", { className: "flex-1", children: [
        /* @__PURE__ */ h(gn, { children: r }),
        /* @__PURE__ */ h(pn, { className: "mt-2", children: o })
      ] })
    ] }) }),
    /* @__PURE__ */ R(dn, { children: [
      /* @__PURE__ */ h(Y, { variant: "outline", onClick: () => n(!1), children: s }),
      /* @__PURE__ */ h(
        Y,
        {
          variant: p.buttonVariant,
          onClick: l,
          className: p.buttonClassName,
          children: a
        }
      )
    ] })
  ] }) });
}
export {
  as as Alert,
  is as AlertDescription,
  ss as AlertTitle,
  ts as Avatar,
  Jt as Badge,
  an as Breadcrumb,
  Y as Button,
  Qt as Card,
  lo as CardContent,
  io as CardDescription,
  uo as CardFooter,
  ao as CardHeader,
  so as CardTitle,
  Ko as Checkbox,
  Zo as CheckboxGroup,
  pi as CodeBlock,
  Ol as ConfirmDialog,
  Tl as ConnectionStatus,
  Il as DataTable,
  Go as Dialog,
  Uo as DialogClose,
  un as DialogContent,
  pn as DialogDescription,
  dn as DialogFooter,
  cn as DialogHeader,
  ln as DialogOverlay,
  Ho as DialogPortal,
  gn as DialogTitle,
  jo as DialogTrigger,
  xl as Dropdown,
  Cl as DropdownContent,
  Rl as DropdownItem,
  kl as DropdownLabel,
  El as DropdownSeparator,
  _l as DropdownSubmenu,
  Nl as DropdownSubmenuContent,
  Fl as DropdownSubmenuTrigger,
  Sl as DropdownTrigger,
  Ml as EmptyState,
  $l as ErrorState,
  Xt as Input,
  po as Loading,
  Qr as LoadingButton,
  Dl as MetricCard,
  yl as ModalFooter,
  Vo as PageHeader,
  Ua as RadioGroup,
  qa as RadioGroupItem,
  ro as Select,
  mo as Skeleton,
  en as Spinner,
  ns as StatusIndicator,
  Qo as Switch,
  Jo as SwitchGroup,
  yo as Tabs,
  xo as TabsContent,
  vo as TabsList,
  wo as TabsTrigger,
  ta as Textarea,
  zn as ToastContainer,
  Vn as ToastItem,
  wl as ToastProvider,
  Ll as Tooltip,
  vl as ViewModeToggle,
  co as badgeVariants,
  Do as breadcrumbItemVariants,
  To as breadcrumbSeparatorVariants,
  $o as breadcrumbVariants,
  Xr as buttonVariants,
  oo as cardVariants,
  qo as checkboxVariants,
  k as cn,
  Pl as createSelectionColumn,
  Al as createSortableHeader,
  Bo as dialogContentVariants,
  zo as dialogOverlayVariants,
  Ya as dropdownContentVariants,
  Bn as dropdownItemVariants,
  Jr as inputVariants,
  Lo as pageHeaderVariants,
  to as selectVariants,
  fo as skeletonVariants,
  go as spinnerVariants,
  It as statusIndicatorVariants,
  Xo as switchThumbVariants,
  Yo as switchVariants,
  ho as tabsListVariants,
  bo as tabsTriggerVariants,
  ea as textareaVariants,
  Za as useToast
};
//# sourceMappingURL=index.es.js.map
