var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn2, res) => function __init() {
  return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/@electric-sql/pglite/dist/chunk-QY3QWFKW.js
var p, i2, c, f, l, s, a, _, d, D, F, g, L, P, n, h, R, x, T, U, u;
var init_chunk_QY3QWFKW = __esm({
  "node_modules/@electric-sql/pglite/dist/chunk-QY3QWFKW.js"() {
    p = Object.create;
    i2 = Object.defineProperty;
    c = Object.getOwnPropertyDescriptor;
    f = Object.getOwnPropertyNames;
    l = Object.getPrototypeOf;
    s = Object.prototype.hasOwnProperty;
    a = (t2) => {
      throw TypeError(t2);
    };
    _ = (t2, e, o5) => e in t2 ? i2(t2, e, { enumerable: true, configurable: true, writable: true, value: o5 }) : t2[e] = o5;
    d = (t2, e) => () => (t2 && (e = t2(t2 = 0)), e);
    D = (t2, e) => () => (e || t2((e = { exports: {} }).exports, e), e.exports);
    F = (t2, e) => {
      for (var o5 in e) i2(t2, o5, { get: e[o5], enumerable: true });
    };
    g = (t2, e, o5, m5) => {
      if (e && typeof e == "object" || typeof e == "function") for (let r2 of f(e)) !s.call(t2, r2) && r2 !== o5 && i2(t2, r2, { get: () => e[r2], enumerable: !(m5 = c(e, r2)) || m5.enumerable });
      return t2;
    };
    L = (t2, e, o5) => (o5 = t2 != null ? p(l(t2)) : {}, g(e || !t2 || !t2.__esModule ? i2(o5, "default", { value: t2, enumerable: true }) : o5, t2));
    P = (t2, e, o5) => _(t2, typeof e != "symbol" ? e + "" : e, o5);
    n = (t2, e, o5) => e.has(t2) || a("Cannot " + o5);
    h = (t2, e, o5) => (n(t2, e, "read from private field"), o5 ? o5.call(t2) : e.get(t2));
    R = (t2, e, o5) => e.has(t2) ? a("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t2) : e.set(t2, o5);
    x = (t2, e, o5, m5) => (n(t2, e, "write to private field"), m5 ? m5.call(t2, o5) : e.set(t2, o5), o5);
    T = (t2, e, o5) => (n(t2, e, "access private method"), o5);
    U = (t2, e, o5, m5) => ({ set _(r2) {
      x(t2, e, r2, o5);
    }, get _() {
      return h(t2, e, m5);
    } });
    u = d(() => {
      "use strict";
    });
  }
});

// (disabled):fs/promises
var require_promises = __commonJS({
  "(disabled):fs/promises"() {
  }
});

// node_modules/@electric-sql/pglite/dist/chunk-XP4OYHYJ.js
async function c3(t2) {
  s3 || r.has(t2.toString()) || r.set(t2.toString(), fetch(t2));
}
async function m2(t2, e, a2) {
  if (a2 || o3.has(e.toString())) {
    let n3 = a2 || o3.get(e.toString());
    return { instance: await WebAssembly.instantiate(n3, t2), module: n3 };
  }
  if (s3) {
    let n3 = await (await Promise.resolve().then(() => __toESM(require_promises(), 1))).readFile(e), { module: i4, instance: l2 } = await WebAssembly.instantiate(n3, t2);
    return o3.set(e.toString(), i4), { instance: l2, module: i4 };
  } else {
    r.has(e.toString()) || c3(e);
    let n3 = await r.get(e.toString()), { module: i4, instance: l2 } = await WebAssembly.instantiateStreaming(n3.clone(), t2);
    return o3.set(e.toString(), i4), { instance: l2, module: i4 };
  }
}
async function p3(t2) {
  return s3 ? (await (await Promise.resolve().then(() => __toESM(require_promises(), 1))).readFile(t2)).buffer : (c3(t2), (await r.get(t2.toString())).clone().arrayBuffer());
}
function y3(t2) {
  let e;
  return t2.startsWith('"') && t2.endsWith('"') ? e = t2.substring(1, t2.length - 1) : e = t2.toLowerCase(), e;
}
var u2, f3, d2, s3, r, o3, b2;
var init_chunk_XP4OYHYJ = __esm({
  "node_modules/@electric-sql/pglite/dist/chunk-XP4OYHYJ.js"() {
    init_chunk_QY3QWFKW();
    u();
    u2 = Object.defineProperty;
    f3 = (t2, e) => {
      for (var a2 in e) u2(t2, a2, { get: e[a2], enumerable: true });
    };
    d2 = {};
    f3(d2, { IN_NODE: () => s3, getFsBundle: () => p3, instantiateWasm: () => m2, startArtifactDownload: () => c3, toPostgresName: () => y3, uuid: () => b2 });
    s3 = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string";
    r = /* @__PURE__ */ new Map();
    o3 = /* @__PURE__ */ new Map();
    b2 = () => {
      if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID();
      let t2 = new Uint8Array(16);
      if (globalThis.crypto?.getRandomValues) globalThis.crypto.getRandomValues(t2);
      else for (let a2 = 0; a2 < t2.length; a2++) t2[a2] = Math.floor(Math.random() * 256);
      t2[6] = t2[6] & 15 | 64, t2[8] = t2[8] & 63 | 128;
      let e = [];
      return t2.forEach((a2) => {
        e.push(a2.toString(16).padStart(2, "0"));
      }), e.slice(0, 4).join("") + "-" + e.slice(4, 6).join("") + "-" + e.slice(6, 8).join("") + "-" + e.slice(8, 10).join("") + "-" + e.slice(10).join("");
    };
  }
});

// (disabled):util
var require_util = __commonJS({
  "(disabled):util"() {
  }
});

// (disabled):zlib
var require_zlib = __commonJS({
  "(disabled):zlib"() {
  }
});

// (disabled):module
var require_module = __commonJS({
  "(disabled):module"() {
  }
});

// node_modules/@electric-sql/pglite/dist/chunk-4QMGOB4T.js
async function ue2(e, r2, t2 = "pgdata", n3 = "auto") {
  let o5 = Tr(e, r2), [a2, s5] = await Mr(o5, n3), l2 = t2 + (s5 ? ".tar.gz" : ".tar"), u3 = s5 ? "application/x-gzip" : "application/x-tar";
  return typeof File < "u" ? new File([a2], l2, { type: u3 }) : new Blob([a2], { type: u3 });
}
async function ot2(e, r2, t2) {
  let n3 = new Uint8Array(await r2.arrayBuffer()), o5 = typeof File < "u" && r2 instanceof File ? r2.name : void 0;
  (Ar.includes(r2.type) || o5?.endsWith(".tgz") || o5?.endsWith(".tar.gz")) && (n3 = await De2(n3));
  let s5;
  try {
    s5 = (0, D3.untar)(n3);
  } catch (l2) {
    if (l2 instanceof Error && l2.message.includes("File is corrupted")) n3 = await De2(n3), s5 = (0, D3.untar)(n3);
    else throw l2;
  }
  for (let l2 of s5) {
    let u3 = t2 + l2.name, d3 = u3.split("/").slice(0, -1);
    for (let c4 = 1; c4 <= d3.length; c4++) {
      let p5 = d3.slice(0, c4).join("/");
      e.analyzePath(p5).exists || e.mkdir(p5);
    }
    l2.type === D3.REGTYPE ? (e.writeFile(u3, l2.data), e.utime(u3, Ne2(l2.modifyTime), Ne2(l2.modifyTime))) : l2.type === D3.DIRTYPE && e.mkdir(u3);
  }
}
function br(e, r2) {
  let t2 = [], n3 = (o5) => {
    e.readdir(o5).forEach((s5) => {
      if (s5 === "." || s5 === "..") return;
      let l2 = o5 + "/" + s5, u3 = e.stat(l2), d3 = e.isFile(u3.mode) ? e.readFile(l2, { encoding: "binary" }) : new Uint8Array(0);
      t2.push({ name: l2.substring(r2.length), mode: u3.mode, size: u3.size, type: e.isFile(u3.mode) ? D3.REGTYPE : D3.DIRTYPE, modifyTime: u3.mtime, data: d3 }), e.isDir(u3.mode) && n3(l2);
    });
  };
  return n3(r2), t2;
}
function Tr(e, r2) {
  let t2 = br(e, r2);
  return (0, D3.tar)(t2);
}
async function Mr(e, r2 = "auto") {
  if (r2 === "none") return [e, false];
  if (typeof CompressionStream < "u") return [await Pr(e), true];
  if (typeof process < "u" && process.versions && process.versions.node) return [await kr(e), true];
  if (r2 === "auto") return [e, false];
  throw new Error("Compression not supported in this environment");
}
async function Pr(e) {
  let r2 = new CompressionStream("gzip"), t2 = r2.writable.getWriter(), n3 = r2.readable.getReader();
  t2.write(e), t2.close();
  let o5 = [];
  for (; ; ) {
    let { value: l2, done: u3 } = await n3.read();
    if (u3) break;
    l2 && o5.push(l2);
  }
  let a2 = new Uint8Array(o5.reduce((l2, u3) => l2 + u3.length, 0)), s5 = 0;
  return o5.forEach((l2) => {
    a2.set(l2, s5), s5 += l2.length;
  }), a2;
}
async function kr(e) {
  let { promisify: r2 } = await Promise.resolve().then(() => __toESM(require_util(), 1)), { gzip: t2 } = await Promise.resolve().then(() => __toESM(require_zlib(), 1));
  return await r2(t2)(e);
}
async function De2(e) {
  if (typeof CompressionStream < "u") return await Or(e);
  if (typeof process < "u" && process.versions && process.versions.node) return await Rr(e);
  throw new Error("Unsupported environment for decompression");
}
async function Or(e) {
  let r2 = new DecompressionStream("gzip"), t2 = r2.writable.getWriter(), n3 = r2.readable.getReader();
  t2.write(e), t2.close();
  let o5 = [];
  for (; ; ) {
    let { value: l2, done: u3 } = await n3.read();
    if (u3) break;
    l2 && o5.push(l2);
  }
  let a2 = new Uint8Array(o5.reduce((l2, u3) => l2 + u3.length, 0)), s5 = 0;
  return o5.forEach((l2) => {
    a2.set(l2, s5), s5 += l2.length;
  }), a2;
}
async function Rr(e) {
  let { promisify: r2 } = await Promise.resolve().then(() => __toESM(require_util(), 1)), { gunzip: t2 } = await Promise.resolve().then(() => __toESM(require_zlib(), 1));
  return await r2(t2)(e);
}
function Ne2(e) {
  return e ? typeof e == "number" ? e : Math.floor(e.getTime() / 1e3) : Math.floor(Date.now() / 1e3);
}
function Lr(e, r2) {
  let t2 = r2.lastIndex, n3 = [], o5;
  for (; o5 = r2.exec(e); ) n3.push(o5), r2.lastIndex === o5.index && (r2.lastIndex += 1);
  return r2.lastIndex = t2, n3;
}
function Cr(e, r2, t2) {
  let n3 = typeof e == "function" ? e(t2) : e[t2];
  return typeof n3 > "u" && t2 !== "" ? n3 = "" : typeof n3 > "u" && (n3 = "$"), typeof n3 == "object" ? r2 + L3 + JSON.stringify(n3) + L3 : r2 + n3;
}
function Br(e, r2, t2) {
  t2 || (t2 = {});
  let n3 = t2.escape || "\\", o5 = "(\\" + n3 + `['"` + He2 + `]|[^\\s'"` + He2 + "])+", a2 = new RegExp(["(" + Be2 + ")", "(" + o5 + "|" + Nr + "|" + xr + ")+"].join("|"), "g"), s5 = Lr(e, a2);
  if (s5.length === 0) return [];
  r2 || (r2 = {});
  let l2 = false;
  return s5.map(function(u3) {
    let d3 = u3[0];
    if (!d3 || l2) return;
    if (Ie2.test(d3)) return { op: d3 };
    let c4 = false, p5 = false, f5 = "", m5 = false, _5;
    function g5() {
      _5 += 1;
      let E3, y5, A3 = d3.charAt(_5);
      if (A3 === "{") {
        if (_5 += 1, d3.charAt(_5) === "}") throw new Error("Bad substitution: " + d3.slice(_5 - 2, _5 + 1));
        if (E3 = d3.indexOf("}", _5), E3 < 0) throw new Error("Bad substitution: " + d3.slice(_5));
        y5 = d3.slice(_5, E3), _5 = E3;
      } else if (/[*@#?$!_-]/.test(A3)) y5 = A3, _5 += 1;
      else {
        let S4 = d3.slice(_5), v5 = S4.match(/[^\w\d_]/);
        v5 ? (y5 = S4.slice(0, v5.index), _5 += v5.index - 1) : (y5 = S4, _5 = d3.length);
      }
      return Cr(r2, "", y5);
    }
    for (_5 = 0; _5 < d3.length; _5++) {
      let E3 = d3.charAt(_5);
      if (m5 = m5 || !c4 && (E3 === "*" || E3 === "?"), p5) f5 += E3, p5 = false;
      else if (c4) E3 === c4 ? c4 = false : c4 === Le2 ? f5 += E3 : E3 === n3 ? (_5 += 1, E3 = d3.charAt(_5), E3 === Ce2 || E3 === n3 || E3 === de2 ? f5 += E3 : f5 += n3 + E3) : E3 === de2 ? f5 += g5() : f5 += E3;
      else if (E3 === Ce2 || E3 === Le2) c4 = E3;
      else {
        if (Ie2.test(E3)) return { op: d3 };
        if (Ur.test(E3)) {
          l2 = true;
          let y5 = { comment: e.slice(u3.index + _5 + 1) };
          return f5.length ? [f5, y5] : [y5];
        } else E3 === n3 ? p5 = true : E3 === de2 ? f5 += g5() : f5 += E3;
      }
    }
    return m5 ? { op: "glob", pattern: f5 } : f5;
  }).reduce(function(u3, d3) {
    return typeof d3 > "u" ? u3 : u3.concat(d3);
  }, []);
}
function ce2(e, r2, t2) {
  let n3 = Br(e, r2, t2);
  return typeof r2 != "function" ? n3 : n3.reduce(function(o5, a2) {
    if (typeof a2 == "object") return o5.concat(a2);
    let s5 = a2.split(RegExp("(" + L3 + ".*?" + L3 + ")", "g"));
    return s5.length === 1 ? o5.concat(s5[0]) : o5.concat(s5.filter(Boolean).map(function(l2) {
      return Hr.test(l2) ? JSON.parse(l2.split(L3)[1]) : l2;
    }));
  }, []);
}
function zr(e, r2) {
  if (!e) throw new Error(r2 ?? "Assertion failed");
}
function Y2(e, ...r2) {
  e && e > 0 && console.log("initdb: ", ...r2);
}
async function Yr({ pg: e, debug: r2, args: t2, wasmModule: n3 }) {
  let o5, a2, s5, l2 = false, u3 = [], d3 = 0, c4 = -1, p5 = -1, f5 = "", m5 = "", _5 = (S4) => {
    let v5 = S4.shift();
    Y2(r2, "initdb: firstArg", v5), zr(v5 === "/pglite/bin/postgres", `trying to execute ${v5}`), e.Module.HEAPU8.set(g5), Y2(r2, "executing pg main with", S4);
    let h2 = e.callMain(S4);
    return Y2(r2, h2), u3 = [], h2;
  }, g5 = e.Module.HEAPU8.slice(), y5 = await Ue2({ arguments: t2, noExitRuntime: false, thisProgram: jr, stdin: () => null, print: (S4) => {
    m5 += S4, Y2(r2, "initdbout", S4);
  }, printErr: (S4) => {
    f5 += S4, Y2(r2, "initdberr", S4);
  }, instantiateWasm: (S4, v5) => {
    let h2 = new URL("./initdb.wasm", import.meta.url);
    return d2.instantiateWasm(S4, h2, n3).then(({ instance: b4, module: F4 }) => {
      v5(b4, F4);
    }), {};
  }, preRun: [(S4) => {
    S4.ENV.PGDATA = B2, S4.ENV.HOME = "/home/postgres", S4.ENV.USER = "postgres", S4.ENV.LOGNAME = "postgres";
  }, (S4) => {
    S4.onRuntimeInitialized = () => {
      o5 = S4.addFunction((v5) => (u3 = Ye2(S4.UTF8ToString(v5)), _5(u3)), "pi"), S4._pgl_set_system_fn(o5), a2 = S4.addFunction((v5, h2) => {
        let b4 = S4.UTF8ToString(h2);
        if (u3 = Ye2(S4.UTF8ToString(v5)), b4 === "r") return d3 = _5(u3), c4;
        if (b4 === "w") return l2 = true, p5;
        throw `Unexpected popen mode value ${b4}`;
      }, "ppi"), S4._pgl_set_popen_fn(a2), s5 = S4.addFunction((v5) => v5 === c4 || v5 === p5 ? (l2 && (l2 = false, d3 = _5(u3)), d3) : S4._pclose(v5), "pi"), S4._pgl_set_pclose_fn(s5);
      {
        let v5 = e.Module.stringToUTF8OnStack(je2), h2 = e.Module.stringToUTF8OnStack("r");
        e.Module._pgl_freopen(v5, h2, 0);
        let b4 = e.Module.stringToUTF8OnStack(ze2), F4 = e.Module.stringToUTF8OnStack("w");
        e.Module._pgl_freopen(b4, F4, 1);
      }
      {
        let v5 = S4.stringToUTF8OnStack(ze2), h2 = S4.stringToUTF8OnStack("r");
        c4 = S4._fopen(v5, h2);
        let b4 = S4.stringToUTF8OnStack(je2), F4 = S4.stringToUTF8OnStack("w");
        p5 = S4._fopen(b4, F4);
      }
    };
  }, (S4) => {
    S4.FS.mkdir(C2), S4.FS.mount(S4.PROXYFS, { root: C2, fs: e.Module.FS }, C2);
  }] });
  return Y2(r2, "calling initdb.main with", t2), { exitCode: y5.callMain(t2), stderr: f5, stdout: m5, dataFolder: B2 };
}
function Ye2(e) {
  let r2 = [], t2 = ce2(e);
  for (let n3 = 0; n3 < t2.length; n3++) {
    let o5 = t2[n3];
    if (typeof o5 == "object" && "op" in o5) break;
    typeof o5 == "string" && r2.push(o5);
  }
  return r2;
}
async function ht2({ pg: e, debug: r2, args: t2, wasmModule: n3 }) {
  return await Yr({ pg: e, debug: r2, args: ["--allow-group-access", "--encoding", "UTF8", "--locale=C.UTF-8", "--locale-provider=libc", "--auth=trust", ...t2 ?? []], wasmModule: n3 });
}
var W2, G2, ie2, Me2, ke2, Re2, D3, Ar, Dr, xe2, Ue2, Be2, Ie2, He2, Nr, xr, Ur, Le2, Ce2, de2, L3, Ir, Hr, C2, B2, jr, ze2, je2, Mt2, We2, Ge2, Ve2, Wr;
var init_chunk_4QMGOB4T = __esm({
  "node_modules/@electric-sql/pglite/dist/chunk-4QMGOB4T.js"() {
    init_chunk_XP4OYHYJ();
    init_chunk_QY3QWFKW();
    W2 = D((Vr, M4) => {
      "use strict";
      u();
      var me3 = 9007199254740991, pe3 = /* @__PURE__ */ (function(e) {
        return e;
      })();
      function $e3(e) {
        return e === pe3;
      }
      function Se3(e) {
        return typeof e == "string" || Object.prototype.toString.call(e) == "[object String]";
      }
      function Ke3(e) {
        return Object.prototype.toString.call(e) == "[object Date]";
      }
      function q4(e) {
        return e !== null && typeof e == "object";
      }
      function $5(e) {
        return typeof e == "function";
      }
      function Je3(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= me3;
      }
      function Qe3(e) {
        return Object.prototype.toString.call(e) == "[object Array]";
      }
      function Ee3(e) {
        return q4(e) && !$5(e) && Je3(e.length);
      }
      function te3(e) {
        return Object.prototype.toString.call(e) == "[object ArrayBuffer]";
      }
      function Ze3(e, r2) {
        return Array.prototype.map.call(e, r2);
      }
      function er(e, r2) {
        var t2 = pe3;
        return $5(r2) && Array.prototype.every.call(e, function(n3, o5, a2) {
          var s5 = r2(n3, o5, a2);
          return s5 && (t2 = n3), !s5;
        }), t2;
      }
      function rr(e) {
        return Object.assign.apply(null, arguments);
      }
      function ge3(e) {
        var r2, t2, n3;
        if (Se3(e)) {
          for (t2 = e.length, n3 = new Uint8Array(t2), r2 = 0; r2 < t2; r2++) n3[r2] = e.charCodeAt(r2) & 255;
          return n3;
        }
        return te3(e) ? new Uint8Array(e) : q4(e) && te3(e.buffer) ? new Uint8Array(e.buffer) : Ee3(e) ? new Uint8Array(e) : q4(e) && $5(e.toString) ? ge3(e.toString()) : new Uint8Array();
      }
      M4.exports.MAX_SAFE_INTEGER = me3;
      M4.exports.isUndefined = $e3;
      M4.exports.isString = Se3;
      M4.exports.isObject = q4;
      M4.exports.isDateTime = Ke3;
      M4.exports.isFunction = $5;
      M4.exports.isArray = Qe3;
      M4.exports.isArrayLike = Ee3;
      M4.exports.isArrayBuffer = te3;
      M4.exports.map = Ze3;
      M4.exports.find = er;
      M4.exports.extend = rr;
      M4.exports.toUint8Array = ge3;
    });
    G2 = D((qr, ve3) => {
      "use strict";
      u();
      var ne2 = "\0";
      ve3.exports = { NULL_CHAR: ne2, TMAGIC: "ustar" + ne2 + "00", OLDGNU_MAGIC: "ustar  " + ne2, REGTYPE: 0, LNKTYPE: 1, SYMTYPE: 2, CHRTYPE: 3, BLKTYPE: 4, DIRTYPE: 5, FIFOTYPE: 6, CONTTYPE: 7, TSUID: parseInt("4000", 8), TSGID: parseInt("2000", 8), TSVTX: parseInt("1000", 8), TUREAD: parseInt("0400", 8), TUWRITE: parseInt("0200", 8), TUEXEC: parseInt("0100", 8), TGREAD: parseInt("0040", 8), TGWRITE: parseInt("0020", 8), TGEXEC: parseInt("0010", 8), TOREAD: parseInt("0004", 8), TOWRITE: parseInt("0002", 8), TOEXEC: parseInt("0001", 8), TPERMALL: parseInt("0777", 8), TPERMMASK: parseInt("0777", 8) };
    });
    ie2 = D((Kr, P7) => {
      "use strict";
      u();
      var ye2 = W2(), T5 = G2(), tr = 512, oe2 = T5.TPERMALL, Fe3 = 0, he3 = 0, ae2 = [["name", 100, 0, function(e, r2) {
        return V3(e[r2[0]], r2[1]);
      }, function(e, r2, t2) {
        return H4(e.slice(r2, r2 + t2[1]));
      }], ["mode", 8, 100, function(e, r2) {
        var t2 = e[r2[0]] || oe2;
        return t2 = t2 & T5.TPERMMASK, j4(t2, r2[1], oe2);
      }, function(e, r2, t2) {
        var n3 = x5(e.slice(r2, r2 + t2[1]));
        return n3 &= T5.TPERMMASK, n3;
      }], ["uid", 8, 108, function(e, r2) {
        return j4(e[r2[0]], r2[1], Fe3);
      }, function(e, r2, t2) {
        return x5(e.slice(r2, r2 + t2[1]));
      }], ["gid", 8, 116, function(e, r2) {
        return j4(e[r2[0]], r2[1], he3);
      }, function(e, r2, t2) {
        return x5(e.slice(r2, r2 + t2[1]));
      }], ["size", 12, 124, function(e, r2) {
        return j4(e.data.length, r2[1]);
      }, function(e, r2, t2) {
        return x5(e.slice(r2, r2 + t2[1]));
      }], ["modifyTime", 12, 136, function(e, r2) {
        return K3(e[r2[0]], r2[1]);
      }, function(e, r2, t2) {
        return J4(e.slice(r2, r2 + t2[1]));
      }], ["checksum", 8, 148, function(e, r2) {
        return "        ";
      }, function(e, r2, t2) {
        return x5(e.slice(r2, r2 + t2[1]));
      }], ["type", 1, 156, function(e, r2) {
        return "" + (parseInt(e[r2[0]], 10) || 0) % 8;
      }, function(e, r2, t2) {
        return (parseInt(String.fromCharCode(e[r2]), 10) || 0) % 8;
      }], ["linkName", 100, 157, function(e, r2) {
        return "";
      }, function(e, r2, t2) {
        return H4(e.slice(r2, r2 + t2[1]));
      }], ["ustar", 8, 257, function(e, r2) {
        return T5.TMAGIC;
      }, function(e, r2, t2) {
        return nr(H4(e.slice(r2, r2 + t2[1]), true));
      }, function(e, r2) {
        return e[r2[0]] == T5.TMAGIC || e[r2[0]] == T5.OLDGNU_MAGIC;
      }], ["owner", 32, 265, function(e, r2) {
        return V3(e[r2[0]], r2[1]);
      }, function(e, r2, t2) {
        return H4(e.slice(r2, r2 + t2[1]));
      }], ["group", 32, 297, function(e, r2) {
        return V3(e[r2[0]], r2[1]);
      }, function(e, r2, t2) {
        return H4(e.slice(r2, r2 + t2[1]));
      }], ["majorNumber", 8, 329, function(e, r2) {
        return "";
      }, function(e, r2, t2) {
        return x5(e.slice(r2, r2 + t2[1]));
      }], ["minorNumber", 8, 337, function(e, r2) {
        return "";
      }, function(e, r2, t2) {
        return x5(e.slice(r2, r2 + t2[1]));
      }], ["prefix", 131, 345, function(e, r2) {
        return V3(e[r2[0]], r2[1]);
      }, function(e, r2, t2) {
        return H4(e.slice(r2, r2 + t2[1]));
      }], ["accessTime", 12, 476, function(e, r2) {
        return K3(e[r2[0]], r2[1]);
      }, function(e, r2, t2) {
        return J4(e.slice(r2, r2 + t2[1]));
      }], ["createTime", 12, 488, function(e, r2) {
        return K3(e[r2[0]], r2[1]);
      }, function(e, r2, t2) {
        return J4(e.slice(r2, r2 + t2[1]));
      }]], we3 = (function(e) {
        var r2 = e[e.length - 1];
        return r2[2] + r2[1];
      })(ae2);
      function nr(e) {
        if (e.length == 8) {
          var r2 = e.split("");
          if (r2[5] == T5.NULL_CHAR) return (r2[6] == " " || r2[6] == T5.NULL_CHAR) && (r2[6] = "0"), (r2[7] == " " || r2[7] == T5.NULL_CHAR) && (r2[7] = "0"), r2 = r2.join(""), r2 == T5.TMAGIC ? r2 : e;
          if (r2[7] == T5.NULL_CHAR) return r2[5] == T5.NULL_CHAR && (r2[5] = " "), r2[6] == T5.NULL_CHAR && (r2[6] = " "), r2 == T5.OLDGNU_MAGIC ? r2 : e;
        }
        return e;
      }
      function V3(e, r2) {
        return r2 -= 1, ye2.isUndefined(e) && (e = ""), e = ("" + e).substr(0, r2), e + T5.NULL_CHAR;
      }
      function j4(e, r2, t2) {
        for (t2 = parseInt(t2) || 0, r2 -= 1, e = (parseInt(e) || t2).toString(8).substr(-r2, r2); e.length < r2; ) e = "0" + e;
        return e + T5.NULL_CHAR;
      }
      function K3(e, r2) {
        if (ye2.isDateTime(e)) e = Math.floor(1 * e / 1e3);
        else if (e = parseInt(e, 10), isFinite(e)) {
          if (e <= 0) return "";
        } else e = Math.floor(1 * /* @__PURE__ */ new Date() / 1e3);
        return j4(e, r2, 0);
      }
      function H4(e, r2) {
        var t2 = String.fromCharCode.apply(null, e);
        if (r2) return t2;
        var n3 = t2.indexOf(T5.NULL_CHAR);
        return n3 >= 0 ? t2.substr(0, n3) : t2;
      }
      function x5(e) {
        var r2 = String.fromCharCode.apply(null, e);
        return parseInt(r2.replace(/^0+$/g, ""), 8) || 0;
      }
      function J4(e) {
        return e.length == 0 || e[0] == 0 ? null : new Date(1e3 * x5(e));
      }
      function or(e, r2, t2) {
        var n3 = parseInt(r2, 10) || 0, o5 = Math.min(n3 + we3, e.length), a2 = 0, s5 = 0, l2 = 0;
        t2 && ae2.every(function(p5) {
          return p5[0] == "checksum" ? (s5 = n3 + p5[2], l2 = s5 + p5[1], false) : true;
        });
        for (var u3 = 32, d3 = n3; d3 < o5; d3++) {
          var c4 = d3 >= s5 && d3 < l2 ? u3 : e[d3];
          a2 = (a2 + c4) % 262144;
        }
        return a2;
      }
      P7.exports.recordSize = tr;
      P7.exports.defaultFileMode = oe2;
      P7.exports.defaultUid = Fe3;
      P7.exports.defaultGid = he3;
      P7.exports.posixHeader = ae2;
      P7.exports.effectiveHeaderSize = we3;
      P7.exports.calculateChecksum = or;
      P7.exports.formatTarString = V3;
      P7.exports.formatTarNumber = j4;
      P7.exports.formatTarDateTime = K3;
      P7.exports.parseTarString = H4;
      P7.exports.parseTarNumber = x5;
      P7.exports.parseTarDateTime = J4;
    });
    Me2 = D((Qr, Te3) => {
      "use strict";
      u();
      var ar = G2(), Q3 = W2(), I2 = ie2();
      function Ae2(e) {
        return I2.recordSize;
      }
      function be2(e) {
        return Math.ceil(e.data.length / I2.recordSize) * I2.recordSize;
      }
      function ir(e) {
        var r2 = 0;
        return e.forEach(function(t2) {
          r2 += Ae2(t2) + be2(t2);
        }), r2 += I2.recordSize * 2, new Uint8Array(r2);
      }
      function sr(e, r2, t2) {
        t2 = parseInt(t2) || 0;
        var n3 = t2;
        I2.posixHeader.forEach(function(u3) {
          for (var d3 = u3[3](r2, u3), c4 = d3.length, p5 = 0; p5 < c4; p5 += 1) e[n3 + p5] = d3.charCodeAt(p5) & 255;
          n3 += u3[1];
        });
        var o5 = Q3.find(I2.posixHeader, function(u3) {
          return u3[0] == "checksum";
        });
        if (o5) {
          var a2 = I2.calculateChecksum(e, t2, true), s5 = I2.formatTarNumber(a2, o5[1] - 2) + ar.NULL_CHAR + " ";
          n3 = t2 + o5[2];
          for (var l2 = 0; l2 < s5.length; l2 += 1) e[n3] = s5.charCodeAt(l2) & 255, n3++;
        }
        return t2 + Ae2(r2);
      }
      function lr(e, r2, t2) {
        return t2 = parseInt(t2, 10) || 0, e.set(r2.data, t2), t2 + be2(r2);
      }
      function ur(e) {
        e = Q3.map(e, function(n3) {
          return Q3.extend({}, n3, { data: Q3.toUint8Array(n3.data) });
        });
        var r2 = ir(e), t2 = 0;
        return e.forEach(function(n3) {
          t2 = sr(r2, n3, t2), t2 = lr(r2, n3, t2);
        }), r2;
      }
      Te3.exports.tar = ur;
    });
    ke2 = D((et3, Pe3) => {
      "use strict";
      u();
      var dr = G2(), le3 = W2(), N4 = ie2(), cr = { extractData: true, checkHeader: true, checkChecksum: true, checkFileSize: true }, _r = { size: true, checksum: true, ustar: true }, se3 = { unexpectedEndOfFile: "Unexpected end of file.", fileCorrupted: "File is corrupted.", checksumCheckFailed: "Checksum check failed." };
      function fr(e) {
        return N4.recordSize;
      }
      function mr(e) {
        return Math.ceil(e / N4.recordSize) * N4.recordSize;
      }
      function pr(e, r2) {
        for (var t2 = r2, n3 = Math.min(e.length, r2 + N4.recordSize * 2), o5 = t2; o5 < n3; o5++) if (e[o5] != 0) return false;
        return true;
      }
      function Sr(e, r2, t2) {
        if (e.length - r2 < N4.recordSize) {
          if (t2.checkFileSize) throw new Error(se3.unexpectedEndOfFile);
          return null;
        }
        r2 = parseInt(r2) || 0;
        var n3 = {}, o5 = r2;
        if (N4.posixHeader.forEach(function(l2) {
          n3[l2[0]] = l2[4](e, o5, l2), o5 += l2[1];
        }), n3.type != 0 && (n3.size = 0), t2.checkHeader && N4.posixHeader.forEach(function(l2) {
          if (le3.isFunction(l2[5]) && !l2[5](n3, l2)) {
            var u3 = new Error(se3.fileCorrupted);
            throw u3.data = { offset: r2 + l2[2], field: l2[0] }, u3;
          }
        }), t2.checkChecksum) {
          var a2 = N4.calculateChecksum(e, r2, true);
          if (a2 != n3.checksum) {
            var s5 = new Error(se3.checksumCheckFailed);
            throw s5.data = { offset: r2, header: n3, checksum: a2 }, s5;
          }
        }
        return n3;
      }
      function Er(e, r2, t2, n3) {
        return n3.extractData ? t2.size <= 0 ? new Uint8Array() : e.slice(r2, r2 + t2.size) : null;
      }
      function gr(e, r2) {
        var t2 = {};
        return N4.posixHeader.forEach(function(n3) {
          var o5 = n3[0];
          _r[o5] || (t2[o5] = e[o5]);
        }), t2.isOldGNUFormat = e.ustar == dr.OLDGNU_MAGIC, r2 && (t2.data = r2), t2;
      }
      function vr(e, r2) {
        r2 = le3.extend({}, cr, r2);
        for (var t2 = [], n3 = 0, o5 = e.length; o5 - n3 >= N4.recordSize; ) {
          e = le3.toUint8Array(e);
          var a2 = Sr(e, n3, r2);
          if (!a2) break;
          n3 += fr(a2);
          var s5 = Er(e, n3, a2, r2);
          if (t2.push(gr(a2, s5)), n3 += mr(a2.size), pr(e, n3)) break;
        }
        return t2;
      }
      Pe3.exports.untar = vr;
    });
    Re2 = D((tt3, Oe2) => {
      "use strict";
      u();
      var yr = W2(), Fr = G2(), hr = Me2(), wr = ke2();
      yr.extend(Oe2.exports, hr, wr, Fr);
    });
    u();
    u();
    D3 = L(Re2(), 1);
    Ar = ["application/x-gtar", "application/x-tar+gzip", "application/x-gzip", "application/gzip"];
    u();
    u();
    u();
    Dr = (() => {
      var _scriptName = import.meta.url;
      return async function(moduleArg = {}) {
        var moduleRtn, Module = moduleArg, readyPromiseResolve, readyPromiseReject, readyPromise = new Promise((e, r2) => {
          readyPromiseResolve = e, readyPromiseReject = r2;
        }), ENVIRONMENT_IS_WEB = typeof window == "object", ENVIRONMENT_IS_WORKER = typeof WorkerGlobalScope < "u", ENVIRONMENT_IS_NODE = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string" && process.type != "renderer";
        if (ENVIRONMENT_IS_NODE) {
          let { createRequire: e } = await Promise.resolve().then(() => __toESM(require_module(), 1)), r2 = import.meta.url;
          r2.startsWith("data:") && (r2 = "/");
          var require = e(r2);
        }
        var moduleOverrides = Object.assign({}, Module), arguments_ = [], thisProgram = "./this.program", quit_ = (e, r2) => {
          throw r2;
        }, scriptDirectory = "";
        function locateFile(e) {
          return Module.locateFile ? Module.locateFile(e, scriptDirectory) : scriptDirectory + e;
        }
        var readAsync, readBinary;
        if (ENVIRONMENT_IS_NODE) {
          var fs = require("fs"), nodePath = require("path");
          import.meta.url.startsWith("data:") || (scriptDirectory = nodePath.dirname(require("url").fileURLToPath(import.meta.url)) + "/"), readBinary = (e) => {
            e = isFileURI(e) ? new URL(e) : e;
            var r2 = fs.readFileSync(e);
            return r2;
          }, readAsync = async (e, r2 = true) => {
            e = isFileURI(e) ? new URL(e) : e;
            var t2 = fs.readFileSync(e, r2 ? void 0 : "utf8");
            return t2;
          }, !Module.thisProgram && process.argv.length > 1 && (thisProgram = process.argv[1].replace(/\\/g, "/")), arguments_ = process.argv.slice(2), quit_ = (e, r2) => {
            throw process.exitCode = e, r2;
          };
        } else (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) && (ENVIRONMENT_IS_WORKER ? scriptDirectory = self.location.href : typeof document < "u" && document.currentScript && (scriptDirectory = document.currentScript.src), _scriptName && (scriptDirectory = _scriptName), scriptDirectory.startsWith("blob:") ? scriptDirectory = "" : scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1), ENVIRONMENT_IS_WORKER && (readBinary = (e) => {
          var r2 = new XMLHttpRequest();
          return r2.open("GET", e, false), r2.responseType = "arraybuffer", r2.send(null), new Uint8Array(r2.response);
        }), readAsync = async (e) => {
          var r2 = await fetch(e, { credentials: "same-origin" });
          if (r2.ok) return r2.arrayBuffer();
          throw new Error(r2.status + " : " + r2.url);
        });
        var out = Module.print || console.log.bind(console), err = Module.printErr || console.error.bind(console);
        Object.assign(Module, moduleOverrides), moduleOverrides = null, Module.arguments && (arguments_ = Module.arguments), Module.thisProgram && (thisProgram = Module.thisProgram);
        var dynamicLibraries = Module.dynamicLibraries || [], wasmBinary = Module.wasmBinary;
        function intArrayFromBase64(e) {
          if (typeof ENVIRONMENT_IS_NODE < "u" && ENVIRONMENT_IS_NODE) {
            var r2 = Buffer.from(e, "base64");
            return new Uint8Array(r2.buffer, r2.byteOffset, r2.length);
          }
          for (var t2 = atob(e), n3 = new Uint8Array(t2.length), o5 = 0; o5 < t2.length; ++o5) n3[o5] = t2.charCodeAt(o5);
          return n3;
        }
        var wasmMemory, ABORT = false, EXITSTATUS;
        function assert(e, r2) {
          e || abort(r2);
        }
        var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAP64, HEAPU64, HEAPF64;
        function updateMemoryViews() {
          var e = wasmMemory.buffer;
          Module.HEAP8 = HEAP8 = new Int8Array(e), Module.HEAP16 = HEAP16 = new Int16Array(e), Module.HEAPU8 = HEAPU8 = new Uint8Array(e), Module.HEAPU16 = HEAPU16 = new Uint16Array(e), Module.HEAP32 = HEAP32 = new Int32Array(e), Module.HEAPU32 = HEAPU32 = new Uint32Array(e), Module.HEAPF32 = HEAPF32 = new Float32Array(e), Module.HEAPF64 = HEAPF64 = new Float64Array(e), Module.HEAP64 = HEAP64 = new BigInt64Array(e), Module.HEAPU64 = HEAPU64 = new BigUint64Array(e);
        }
        if (Module.wasmMemory) wasmMemory = Module.wasmMemory;
        else {
          var INITIAL_MEMORY = Module.INITIAL_MEMORY || 33554432;
          wasmMemory = new WebAssembly.Memory({ initial: INITIAL_MEMORY / 65536, maximum: 32768 });
        }
        updateMemoryViews();
        var __ATPRERUN__ = [], __ATINIT__ = [], __ATMAIN__ = [], __ATEXIT__ = [], __ATPOSTRUN__ = [], __RELOC_FUNCS__ = [], runtimeInitialized = false, runtimeExited = false;
        function preRun() {
          if (Module.preRun) for (typeof Module.preRun == "function" && (Module.preRun = [Module.preRun]); Module.preRun.length; ) addOnPreRun(Module.preRun.shift());
          callRuntimeCallbacks(__ATPRERUN__);
        }
        function initRuntime() {
          runtimeInitialized = true, callRuntimeCallbacks(__RELOC_FUNCS__), !Module.noFSInit && !FS.initialized && FS.init(), FS.ignorePermissions = false, TTY.init(), callRuntimeCallbacks(__ATINIT__);
        }
        function preMain() {
          callRuntimeCallbacks(__ATMAIN__);
        }
        function exitRuntime() {
          ___funcs_on_exit(), callRuntimeCallbacks(__ATEXIT__), FS.quit(), TTY.shutdown(), runtimeExited = true;
        }
        function postRun() {
          if (Module.postRun) for (typeof Module.postRun == "function" && (Module.postRun = [Module.postRun]); Module.postRun.length; ) addOnPostRun(Module.postRun.shift());
          callRuntimeCallbacks(__ATPOSTRUN__);
        }
        function addOnPreRun(e) {
          __ATPRERUN__.unshift(e);
        }
        function addOnInit(e) {
          __ATINIT__.unshift(e);
        }
        function addOnPostRun(e) {
          __ATPOSTRUN__.unshift(e);
        }
        var runDependencies = 0, dependenciesFulfilled = null;
        function getUniqueRunDependency(e) {
          return e;
        }
        function addRunDependency(e) {
          runDependencies++, Module.monitorRunDependencies?.(runDependencies);
        }
        function removeRunDependency(e) {
          if (runDependencies--, Module.monitorRunDependencies?.(runDependencies), runDependencies == 0 && dependenciesFulfilled) {
            var r2 = dependenciesFulfilled;
            dependenciesFulfilled = null, r2();
          }
        }
        function abort(e) {
          Module.onAbort?.(e), e = "Aborted(" + e + ")", err(e), ABORT = true, e += ". Build with -sASSERTIONS for more info.";
          var r2 = new WebAssembly.RuntimeError(e);
          throw readyPromiseReject(r2), r2;
        }
        var dataURIPrefix = "data:application/octet-stream;base64,", isDataURI = (e) => e.startsWith(dataURIPrefix), isFileURI = (e) => e.startsWith("file://");
        function findWasmBinary() {
          if (Module.locateFile) {
            var e = "initdb.wasm";
            return isDataURI(e) ? e : locateFile(e);
          }
          return new URL("initdb.wasm", import.meta.url).href;
        }
        var wasmBinaryFile;
        function getBinarySync(e) {
          if (e == wasmBinaryFile && wasmBinary) return new Uint8Array(wasmBinary);
          if (readBinary) return readBinary(e);
          throw "both async and sync fetching of the wasm failed";
        }
        async function getWasmBinary(e) {
          if (!wasmBinary) try {
            var r2 = await readAsync(e);
            return new Uint8Array(r2);
          } catch {
          }
          return getBinarySync(e);
        }
        async function instantiateArrayBuffer(e, r2) {
          try {
            var t2 = await getWasmBinary(e), n3 = await WebAssembly.instantiate(t2, r2);
            return n3;
          } catch (o5) {
            err(`failed to asynchronously prepare wasm: ${o5}`), abort(o5);
          }
        }
        async function instantiateAsync(e, r2, t2) {
          if (!e && typeof WebAssembly.instantiateStreaming == "function" && !isDataURI(r2) && !ENVIRONMENT_IS_NODE && typeof fetch == "function") try {
            var n3 = fetch(r2, { credentials: "same-origin" }), o5 = await WebAssembly.instantiateStreaming(n3, t2);
            return o5;
          } catch (a2) {
            err(`wasm streaming compile failed: ${a2}`), err("falling back to ArrayBuffer instantiation");
          }
          return instantiateArrayBuffer(r2, t2);
        }
        function getWasmImports() {
          return { env: wasmImports, wasi_snapshot_preview1: wasmImports, "GOT.mem": new Proxy(wasmImports, GOTHandler), "GOT.func": new Proxy(wasmImports, GOTHandler) };
        }
        async function createWasm() {
          function e(o5, a2) {
            wasmExports = o5.exports, wasmExports = relocateExports(wasmExports, 1024);
            var s5 = getDylinkMetadata(a2);
            return s5.neededDynlibs && (dynamicLibraries = s5.neededDynlibs.concat(dynamicLibraries)), mergeLibSymbols(wasmExports, "main"), LDSO.init(), loadDylibs(), addOnInit(wasmExports.__wasm_call_ctors), __RELOC_FUNCS__.push(wasmExports.__wasm_apply_data_relocs), removeRunDependency("wasm-instantiate"), wasmExports;
          }
          addRunDependency("wasm-instantiate");
          function r2(o5) {
            e(o5.instance, o5.module);
          }
          var t2 = getWasmImports();
          if (Module.instantiateWasm) try {
            return Module.instantiateWasm(t2, e);
          } catch (o5) {
            err(`Module.instantiateWasm callback failed with error: ${o5}`), readyPromiseReject(o5);
          }
          wasmBinaryFile ?? (wasmBinaryFile = findWasmBinary());
          try {
            var n3 = await instantiateAsync(wasmBinary, wasmBinaryFile, t2);
            return r2(n3), n3;
          } catch (o5) {
            readyPromiseReject(o5);
            return;
          }
        }
        var ASM_CONSTS = {};
        class ExitStatus {
          constructor(r2) {
            P(this, "name", "ExitStatus");
            this.message = `Program terminated with exit(${r2})`, this.status = r2;
          }
        }
        var GOT = {}, currentModuleWeakSymbols = /* @__PURE__ */ new Set([]), GOTHandler = { get(e, r2) {
          var t2 = GOT[r2];
          return t2 || (t2 = GOT[r2] = new WebAssembly.Global({ value: "i32", mutable: true })), currentModuleWeakSymbols.has(r2) || (t2.required = true), t2;
        } }, callRuntimeCallbacks = (e) => {
          for (; e.length > 0; ) e.shift()(Module);
        }, UTF8Decoder = typeof TextDecoder < "u" ? new TextDecoder() : void 0, UTF8ArrayToString = (e, r2 = 0, t2 = NaN) => {
          for (var n3 = r2 + t2, o5 = r2; e[o5] && !(o5 >= n3); ) ++o5;
          if (o5 - r2 > 16 && e.buffer && UTF8Decoder) return UTF8Decoder.decode(e.subarray(r2, o5));
          for (var a2 = ""; r2 < o5; ) {
            var s5 = e[r2++];
            if (!(s5 & 128)) {
              a2 += String.fromCharCode(s5);
              continue;
            }
            var l2 = e[r2++] & 63;
            if ((s5 & 224) == 192) {
              a2 += String.fromCharCode((s5 & 31) << 6 | l2);
              continue;
            }
            var u3 = e[r2++] & 63;
            if ((s5 & 240) == 224 ? s5 = (s5 & 15) << 12 | l2 << 6 | u3 : s5 = (s5 & 7) << 18 | l2 << 12 | u3 << 6 | e[r2++] & 63, s5 < 65536) a2 += String.fromCharCode(s5);
            else {
              var d3 = s5 - 65536;
              a2 += String.fromCharCode(55296 | d3 >> 10, 56320 | d3 & 1023);
            }
          }
          return a2;
        }, getDylinkMetadata = (e) => {
          var r2 = 0, t2 = 0;
          function n3() {
            return e[r2++];
          }
          function o5() {
            for (var U3 = 0, X2 = 1; ; ) {
              var _e3 = e[r2++];
              if (U3 += (_e3 & 127) * X2, X2 *= 128, !(_e3 & 128)) break;
            }
            return U3;
          }
          function a2() {
            var U3 = o5();
            return r2 += U3, UTF8ArrayToString(e, r2 - U3, U3);
          }
          function s5(U3, X2) {
            if (U3) throw new Error(X2);
          }
          var l2 = "dylink.0";
          if (e instanceof WebAssembly.Module) {
            var u3 = WebAssembly.Module.customSections(e, l2);
            u3.length === 0 && (l2 = "dylink", u3 = WebAssembly.Module.customSections(e, l2)), s5(u3.length === 0, "need dylink section"), e = new Uint8Array(u3[0]), t2 = e.length;
          } else {
            var d3 = new Uint32Array(new Uint8Array(e.subarray(0, 24)).buffer), c4 = d3[0] == 1836278016;
            s5(!c4, "need to see wasm magic number"), s5(e[8] !== 0, "need the dylink section to be first"), r2 = 9;
            var p5 = o5();
            t2 = r2 + p5, l2 = a2();
          }
          var f5 = { neededDynlibs: [], tlsExports: /* @__PURE__ */ new Set(), weakImports: /* @__PURE__ */ new Set() };
          if (l2 == "dylink") {
            f5.memorySize = o5(), f5.memoryAlign = o5(), f5.tableSize = o5(), f5.tableAlign = o5();
            for (var m5 = o5(), _5 = 0; _5 < m5; ++_5) {
              var g5 = a2();
              f5.neededDynlibs.push(g5);
            }
          } else {
            s5(l2 !== "dylink.0");
            for (var E3 = 1, y5 = 2, A3 = 3, S4 = 4, v5 = 256, h2 = 3, b4 = 1; r2 < t2; ) {
              var F4 = n3(), Xe3 = o5();
              if (F4 === E3) f5.memorySize = o5(), f5.memoryAlign = o5(), f5.tableSize = o5(), f5.tableAlign = o5();
              else if (F4 === y5) for (var m5 = o5(), _5 = 0; _5 < m5; ++_5) g5 = a2(), f5.neededDynlibs.push(g5);
              else if (F4 === A3) for (var Z3 = o5(); Z3--; ) {
                var ee3 = a2(), re2 = o5();
                re2 & v5 && f5.tlsExports.add(ee3);
              }
              else if (F4 === S4) for (var Z3 = o5(); Z3--; ) {
                var Gr = a2(), ee3 = a2(), re2 = o5();
                (re2 & h2) == b4 && f5.weakImports.add(ee3);
              }
              else r2 += Xe3;
            }
          }
          return f5;
        }, newDSO = (e, r2, t2) => {
          var n3 = { refcount: 1 / 0, name: e, exports: t2, global: true };
          return LDSO.loadedLibsByName[e] = n3, r2 != null && (LDSO.loadedLibsByHandle[r2] = n3), n3;
        }, LDSO = { loadedLibsByName: {}, loadedLibsByHandle: {}, init() {
          newDSO("__main__", 0, wasmImports);
        } }, ___heap_base = 137184, alignMemory = (e, r2) => Math.ceil(e / r2) * r2, getMemory = (e) => {
          if (runtimeInitialized) return _calloc(e, 1);
          var r2 = ___heap_base, t2 = r2 + alignMemory(e, 16);
          return ___heap_base = t2, GOT.__heap_base.value = t2, r2;
        }, isInternalSym = (e) => ["__cpp_exception", "__c_longjmp", "__wasm_apply_data_relocs", "__dso_handle", "__tls_size", "__tls_align", "__set_stack_limits", "_emscripten_tls_init", "__wasm_init_tls", "__wasm_call_ctors", "__start_em_asm", "__stop_em_asm", "__start_em_js", "__stop_em_js"].includes(e) || e.startsWith("__em_js__"), uleb128Encode = (e, r2) => {
          e < 128 ? r2.push(e) : r2.push(e % 128 | 128, e >> 7);
        }, sigToWasmTypes = (e) => {
          for (var r2 = { i: "i32", j: "i64", f: "f32", d: "f64", e: "externref", p: "i32" }, t2 = { parameters: [], results: e[0] == "v" ? [] : [r2[e[0]]] }, n3 = 1; n3 < e.length; ++n3) t2.parameters.push(r2[e[n3]]);
          return t2;
        }, generateFuncType = (e, r2) => {
          var t2 = e.slice(0, 1), n3 = e.slice(1), o5 = { i: 127, p: 127, j: 126, f: 125, d: 124, e: 111 };
          r2.push(96), uleb128Encode(n3.length, r2);
          for (var a2 = 0; a2 < n3.length; ++a2) r2.push(o5[n3[a2]]);
          t2 == "v" ? r2.push(0) : r2.push(1, o5[t2]);
        }, convertJsFunctionToWasm = (e, r2) => {
          if (typeof WebAssembly.Function == "function") return new WebAssembly.Function(sigToWasmTypes(r2), e);
          var t2 = [1];
          generateFuncType(r2, t2);
          var n3 = [0, 97, 115, 109, 1, 0, 0, 0, 1];
          uleb128Encode(t2.length, n3), n3.push(...t2), n3.push(2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0);
          var o5 = new WebAssembly.Module(new Uint8Array(n3)), a2 = new WebAssembly.Instance(o5, { e: { f: e } }), s5 = a2.exports.f;
          return s5;
        }, wasmTableMirror = [], wasmTable = new WebAssembly.Table({ initial: 21, element: "anyfunc" }), getWasmTableEntry = (e) => {
          var r2 = wasmTableMirror[e];
          return r2 || (e >= wasmTableMirror.length && (wasmTableMirror.length = e + 1), wasmTableMirror[e] = r2 = wasmTable.get(e)), r2;
        }, updateTableMap = (e, r2) => {
          if (functionsInTableMap) for (var t2 = e; t2 < e + r2; t2++) {
            var n3 = getWasmTableEntry(t2);
            n3 && functionsInTableMap.set(n3, t2);
          }
        }, functionsInTableMap, getFunctionAddress = (e) => (functionsInTableMap || (functionsInTableMap = /* @__PURE__ */ new WeakMap(), updateTableMap(0, wasmTable.length)), functionsInTableMap.get(e) || 0), freeTableIndexes = [], getEmptyTableSlot = () => {
          if (freeTableIndexes.length) return freeTableIndexes.pop();
          try {
            wasmTable.grow(1);
          } catch (e) {
            throw e instanceof RangeError ? "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH." : e;
          }
          return wasmTable.length - 1;
        }, setWasmTableEntry = (e, r2) => {
          wasmTable.set(e, r2), wasmTableMirror[e] = wasmTable.get(e);
        }, addFunction = (e, r2) => {
          var t2 = getFunctionAddress(e);
          if (t2) return t2;
          var n3 = getEmptyTableSlot();
          try {
            setWasmTableEntry(n3, e);
          } catch (a2) {
            if (!(a2 instanceof TypeError)) throw a2;
            var o5 = convertJsFunctionToWasm(e, r2);
            setWasmTableEntry(n3, o5);
          }
          return functionsInTableMap.set(e, n3), n3;
        }, updateGOT = (e, r2) => {
          for (var t2 in e) if (!isInternalSym(t2)) {
            var n3 = e[t2];
            GOT[t2] || (GOT[t2] = new WebAssembly.Global({ value: "i32", mutable: true })), (r2 || GOT[t2].value == 0) && (typeof n3 == "function" ? GOT[t2].value = addFunction(n3) : typeof n3 == "number" ? GOT[t2].value = n3 : err(`unhandled export type for '${t2}': ${typeof n3}`));
          }
        }, relocateExports = (e, r2, t2) => {
          var n3 = {};
          for (var o5 in e) {
            var a2 = e[o5];
            typeof a2 == "object" && (a2 = a2.value), typeof a2 == "number" && (a2 += r2), n3[o5] = a2;
          }
          return updateGOT(n3, t2), n3;
        }, isSymbolDefined = (e) => {
          var r2 = wasmImports[e];
          return !(!r2 || r2.stub);
        }, dynCall = (e, r2, t2 = []) => {
          var n3 = getWasmTableEntry(r2)(...t2);
          return n3;
        }, stackSave = () => _emscripten_stack_get_current(), stackRestore = (e) => __emscripten_stack_restore(e), createInvokeFunction = (e) => (r2, ...t2) => {
          var n3 = stackSave();
          try {
            return dynCall(e, r2, t2);
          } catch (o5) {
            if (stackRestore(n3), o5 !== o5 + 0) throw o5;
            if (_setThrew(1, 0), e[0] == "j") return 0n;
          }
        }, resolveGlobalSymbol = (e, r2 = false) => {
          var t2;
          return isSymbolDefined(e) ? t2 = wasmImports[e] : e.startsWith("invoke_") && (t2 = wasmImports[e] = createInvokeFunction(e.split("_")[1])), { sym: t2, name: e };
        }, UTF8ToString = (e, r2) => e ? UTF8ArrayToString(HEAPU8, e, r2) : "", loadWebAssemblyModule = (binary, flags, libName, localScope, handle) => {
          var metadata = getDylinkMetadata(binary);
          currentModuleWeakSymbols = metadata.weakImports;
          function loadModule() {
            var firstLoad = !handle || !HEAP8[handle + 8];
            if (firstLoad) {
              var memAlign = Math.pow(2, metadata.memoryAlign), memoryBase = metadata.memorySize ? alignMemory(getMemory(metadata.memorySize + memAlign), memAlign) : 0, tableBase = metadata.tableSize ? wasmTable.length : 0;
              handle && (HEAP8[handle + 8] = 1, HEAPU32[handle + 12 >> 2] = memoryBase, HEAP32[handle + 16 >> 2] = metadata.memorySize, HEAPU32[handle + 20 >> 2] = tableBase, HEAP32[handle + 24 >> 2] = metadata.tableSize);
            } else memoryBase = HEAPU32[handle + 12 >> 2], tableBase = HEAPU32[handle + 20 >> 2];
            var tableGrowthNeeded = tableBase + metadata.tableSize - wasmTable.length;
            tableGrowthNeeded > 0 && wasmTable.grow(tableGrowthNeeded);
            var moduleExports;
            function resolveSymbol(e) {
              var r2 = resolveGlobalSymbol(e).sym;
              return !r2 && localScope && (r2 = localScope[e]), r2 || (r2 = moduleExports[e]), r2;
            }
            var proxyHandler = { get(e, r2) {
              switch (r2) {
                case "__memory_base":
                  return memoryBase;
                case "__table_base":
                  return tableBase;
              }
              if (r2 in wasmImports && !wasmImports[r2].stub) return wasmImports[r2];
              if (!(r2 in e)) {
                var t2;
                e[r2] = (...n3) => (t2 || (t2 = resolveSymbol(r2)), t2(...n3));
              }
              return e[r2];
            } }, proxy = new Proxy({}, proxyHandler), info = { "GOT.mem": new Proxy({}, GOTHandler), "GOT.func": new Proxy({}, GOTHandler), env: proxy, wasi_snapshot_preview1: proxy };
            function postInstantiation(module, instance) {
              updateTableMap(tableBase, metadata.tableSize), moduleExports = relocateExports(instance.exports, memoryBase), flags.allowUndefined || reportUndefinedSymbols();
              function addEmAsm(addr, body) {
                for (var args = [], arity = 0; arity < 16 && body.indexOf("$" + arity) != -1; arity++) args.push("$" + arity);
                args = args.join(",");
                var func = `(${args}) => { ${body} };`;
                ASM_CONSTS[start] = eval(func);
              }
              if ("__start_em_asm" in moduleExports) for (var start = moduleExports.__start_em_asm, stop = moduleExports.__stop_em_asm; start < stop; ) {
                var jsString = UTF8ToString(start);
                addEmAsm(start, jsString), start = HEAPU8.indexOf(0, start) + 1;
              }
              function addEmJs(name, cSig, body) {
                var jsArgs = [];
                if (cSig = cSig.slice(1, -1), cSig != "void") {
                  cSig = cSig.split(",");
                  for (var i in cSig) {
                    var jsArg = cSig[i].split(" ").pop();
                    jsArgs.push(jsArg.replace("*", ""));
                  }
                }
                var func = `(${jsArgs}) => ${body};`;
                moduleExports[name] = eval(func);
              }
              for (var name in moduleExports) if (name.startsWith("__em_js__")) {
                var start = moduleExports[name], jsString = UTF8ToString(start), parts = jsString.split("<::>");
                addEmJs(name.replace("__em_js__", ""), parts[0], parts[1]), delete moduleExports[name];
              }
              var applyRelocs = moduleExports.__wasm_apply_data_relocs;
              applyRelocs && (runtimeInitialized ? applyRelocs() : __RELOC_FUNCS__.push(applyRelocs));
              var init = moduleExports.__wasm_call_ctors;
              return init && (runtimeInitialized ? init() : __ATINIT__.push(init)), moduleExports;
            }
            if (flags.loadAsync) {
              if (binary instanceof WebAssembly.Module) {
                var instance = new WebAssembly.Instance(binary, info);
                return Promise.resolve(postInstantiation(binary, instance));
              }
              return WebAssembly.instantiate(binary, info).then((e) => postInstantiation(e.module, e.instance));
            }
            var module = binary instanceof WebAssembly.Module ? binary : new WebAssembly.Module(binary), instance = new WebAssembly.Instance(module, info);
            return postInstantiation(module, instance);
          }
          return flags.loadAsync ? metadata.neededDynlibs.reduce((e, r2) => e.then(() => loadDynamicLibrary(r2, flags, localScope)), Promise.resolve()).then(loadModule) : (metadata.neededDynlibs.forEach((e) => loadDynamicLibrary(e, flags, localScope)), loadModule());
        }, mergeLibSymbols = (e, r2) => {
          for (var [t2, n3] of Object.entries(e)) {
            let o5 = (s5) => {
              isSymbolDefined(s5) || (wasmImports[s5] = n3);
            };
            o5(t2);
            let a2 = "__main_argc_argv";
            t2 == "main" && o5(a2), t2 == a2 && o5("main");
          }
        }, asyncLoad = async (e) => {
          var r2 = await readAsync(e);
          return new Uint8Array(r2);
        }, preloadPlugins = Module.preloadPlugins || [], registerWasmPlugin = () => {
          var e = { promiseChainEnd: Promise.resolve(), canHandle: (r2) => !Module.noWasmDecoding && r2.endsWith(".so"), handle: (r2, t2, n3, o5) => {
            e.promiseChainEnd = e.promiseChainEnd.then(() => loadWebAssemblyModule(r2, { loadAsync: true, nodelete: true }, t2, {})).then((a2) => {
              preloadedWasm[t2] = a2, n3(r2);
            }, (a2) => {
              err(`failed to instantiate wasm: ${t2}: ${a2}`), o5();
            });
          } };
          preloadPlugins.push(e);
        }, preloadedWasm = {};
        function loadDynamicLibrary(e, r2 = { global: true, nodelete: true }, t2, n3) {
          var o5 = LDSO.loadedLibsByName[e];
          if (o5) return r2.global ? o5.global || (o5.global = true, mergeLibSymbols(o5.exports, e)) : t2 && Object.assign(t2, o5.exports), r2.nodelete && o5.refcount !== 1 / 0 && (o5.refcount = 1 / 0), o5.refcount++, n3 && (LDSO.loadedLibsByHandle[n3] = o5), r2.loadAsync ? Promise.resolve(true) : true;
          o5 = newDSO(e, n3, "loading"), o5.refcount = r2.nodelete ? 1 / 0 : 1, o5.global = r2.global;
          function a2() {
            if (n3) {
              var u3 = HEAPU32[n3 + 28 >> 2], d3 = HEAPU32[n3 + 32 >> 2];
              if (u3 && d3) {
                var c4 = HEAP8.slice(u3, u3 + d3);
                return r2.loadAsync ? Promise.resolve(c4) : c4;
              }
            }
            var p5 = locateFile(e);
            if (r2.loadAsync) return asyncLoad(p5);
            if (!readBinary) throw new Error(`${p5}: file not found, and synchronous loading of external files is not available`);
            return readBinary(p5);
          }
          function s5() {
            var u3 = preloadedWasm[e];
            return u3 ? r2.loadAsync ? Promise.resolve(u3) : u3 : r2.loadAsync ? a2().then((d3) => loadWebAssemblyModule(d3, r2, e, t2, n3)) : loadWebAssemblyModule(a2(), r2, e, t2, n3);
          }
          function l2(u3) {
            o5.global ? mergeLibSymbols(u3, e) : t2 && Object.assign(t2, u3), o5.exports = u3;
          }
          return r2.loadAsync ? s5().then((u3) => (l2(u3), true)) : (l2(s5()), true);
        }
        var reportUndefinedSymbols = () => {
          for (var [e, r2] of Object.entries(GOT)) if (r2.value == 0) {
            var t2 = resolveGlobalSymbol(e, true).sym;
            if (!t2 && !r2.required) continue;
            if (typeof t2 == "function") r2.value = addFunction(t2, t2.sig);
            else if (typeof t2 == "number") r2.value = t2;
            else throw new Error(`bad export type for '${e}': ${typeof t2}`);
          }
        }, loadDylibs = () => {
          if (!dynamicLibraries.length) {
            reportUndefinedSymbols();
            return;
          }
          addRunDependency("loadDylibs"), dynamicLibraries.reduce((e, r2) => e.then(() => loadDynamicLibrary(r2, { loadAsync: true, global: true, nodelete: true, allowUndefined: true })), Promise.resolve()).then(() => {
            reportUndefinedSymbols(), removeRunDependency("loadDylibs");
          });
        }, noExitRuntime = Module.noExitRuntime || false, ___call_sighandler = (e, r2) => getWasmTableEntry(e)(r2);
        ___call_sighandler.sig = "vpi";
        var ___memory_base = new WebAssembly.Global({ value: "i32", mutable: false }, 1024), ___stack_pointer = new WebAssembly.Global({ value: "i32", mutable: true }, 137184), PATH = { isAbs: (e) => e.charAt(0) === "/", splitPath: (e) => {
          var r2 = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
          return r2.exec(e).slice(1);
        }, normalizeArray: (e, r2) => {
          for (var t2 = 0, n3 = e.length - 1; n3 >= 0; n3--) {
            var o5 = e[n3];
            o5 === "." ? e.splice(n3, 1) : o5 === ".." ? (e.splice(n3, 1), t2++) : t2 && (e.splice(n3, 1), t2--);
          }
          if (r2) for (; t2; t2--) e.unshift("..");
          return e;
        }, normalize: (e) => {
          var r2 = PATH.isAbs(e), t2 = e.substr(-1) === "/";
          return e = PATH.normalizeArray(e.split("/").filter((n3) => !!n3), !r2).join("/"), !e && !r2 && (e = "."), e && t2 && (e += "/"), (r2 ? "/" : "") + e;
        }, dirname: (e) => {
          var r2 = PATH.splitPath(e), t2 = r2[0], n3 = r2[1];
          return !t2 && !n3 ? "." : (n3 && (n3 = n3.substr(0, n3.length - 1)), t2 + n3);
        }, basename: (e) => {
          if (e === "/") return "/";
          e = PATH.normalize(e), e = e.replace(/\/$/, "");
          var r2 = e.lastIndexOf("/");
          return r2 === -1 ? e : e.substr(r2 + 1);
        }, join: (...e) => PATH.normalize(e.join("/")), join2: (e, r2) => PATH.normalize(e + "/" + r2) }, initRandomFill = () => {
          if (typeof crypto == "object" && typeof crypto.getRandomValues == "function") return (n3) => crypto.getRandomValues(n3);
          if (ENVIRONMENT_IS_NODE) try {
            var e = require("crypto"), r2 = e.randomFillSync;
            if (r2) return (n3) => e.randomFillSync(n3);
            var t2 = e.randomBytes;
            return (n3) => (n3.set(t2(n3.byteLength)), n3);
          } catch {
          }
          abort("initRandomDevice");
        }, randomFill = (e) => (randomFill = initRandomFill())(e), PATH_FS = { resolve: (...e) => {
          for (var r2 = "", t2 = false, n3 = e.length - 1; n3 >= -1 && !t2; n3--) {
            var o5 = n3 >= 0 ? e[n3] : FS.cwd();
            if (typeof o5 != "string") throw new TypeError("Arguments to path.resolve must be strings");
            if (!o5) return "";
            r2 = o5 + "/" + r2, t2 = PATH.isAbs(o5);
          }
          return r2 = PATH.normalizeArray(r2.split("/").filter((a2) => !!a2), !t2).join("/"), (t2 ? "/" : "") + r2 || ".";
        }, relative: (e, r2) => {
          e = PATH_FS.resolve(e).substr(1), r2 = PATH_FS.resolve(r2).substr(1);
          function t2(d3) {
            for (var c4 = 0; c4 < d3.length && d3[c4] === ""; c4++) ;
            for (var p5 = d3.length - 1; p5 >= 0 && d3[p5] === ""; p5--) ;
            return c4 > p5 ? [] : d3.slice(c4, p5 - c4 + 1);
          }
          for (var n3 = t2(e.split("/")), o5 = t2(r2.split("/")), a2 = Math.min(n3.length, o5.length), s5 = a2, l2 = 0; l2 < a2; l2++) if (n3[l2] !== o5[l2]) {
            s5 = l2;
            break;
          }
          for (var u3 = [], l2 = s5; l2 < n3.length; l2++) u3.push("..");
          return u3 = u3.concat(o5.slice(s5)), u3.join("/");
        } }, FS_stdin_getChar_buffer = [], lengthBytesUTF8 = (e) => {
          for (var r2 = 0, t2 = 0; t2 < e.length; ++t2) {
            var n3 = e.charCodeAt(t2);
            n3 <= 127 ? r2++ : n3 <= 2047 ? r2 += 2 : n3 >= 55296 && n3 <= 57343 ? (r2 += 4, ++t2) : r2 += 3;
          }
          return r2;
        }, stringToUTF8Array = (e, r2, t2, n3) => {
          if (!(n3 > 0)) return 0;
          for (var o5 = t2, a2 = t2 + n3 - 1, s5 = 0; s5 < e.length; ++s5) {
            var l2 = e.charCodeAt(s5);
            if (l2 >= 55296 && l2 <= 57343) {
              var u3 = e.charCodeAt(++s5);
              l2 = 65536 + ((l2 & 1023) << 10) | u3 & 1023;
            }
            if (l2 <= 127) {
              if (t2 >= a2) break;
              r2[t2++] = l2;
            } else if (l2 <= 2047) {
              if (t2 + 1 >= a2) break;
              r2[t2++] = 192 | l2 >> 6, r2[t2++] = 128 | l2 & 63;
            } else if (l2 <= 65535) {
              if (t2 + 2 >= a2) break;
              r2[t2++] = 224 | l2 >> 12, r2[t2++] = 128 | l2 >> 6 & 63, r2[t2++] = 128 | l2 & 63;
            } else {
              if (t2 + 3 >= a2) break;
              r2[t2++] = 240 | l2 >> 18, r2[t2++] = 128 | l2 >> 12 & 63, r2[t2++] = 128 | l2 >> 6 & 63, r2[t2++] = 128 | l2 & 63;
            }
          }
          return r2[t2] = 0, t2 - o5;
        };
        function intArrayFromString(e, r2, t2) {
          var n3 = t2 > 0 ? t2 : lengthBytesUTF8(e) + 1, o5 = new Array(n3), a2 = stringToUTF8Array(e, o5, 0, o5.length);
          return r2 && (o5.length = a2), o5;
        }
        var FS_stdin_getChar = () => {
          if (!FS_stdin_getChar_buffer.length) {
            var e = null;
            if (ENVIRONMENT_IS_NODE) {
              var r2 = 256, t2 = Buffer.alloc(r2), n3 = 0, o5 = process.stdin.fd;
              try {
                n3 = fs.readSync(o5, t2, 0, r2);
              } catch (a2) {
                if (a2.toString().includes("EOF")) n3 = 0;
                else throw a2;
              }
              n3 > 0 && (e = t2.slice(0, n3).toString("utf-8"));
            } else typeof window < "u" && typeof window.prompt == "function" && (e = window.prompt("Input: "), e !== null && (e += `
`));
            if (!e) return null;
            FS_stdin_getChar_buffer = intArrayFromString(e, true);
          }
          return FS_stdin_getChar_buffer.shift();
        }, TTY = { ttys: [], init() {
        }, shutdown() {
        }, register(e, r2) {
          TTY.ttys[e] = { input: [], output: [], ops: r2 }, FS.registerDevice(e, TTY.stream_ops);
        }, stream_ops: { open(e) {
          var r2 = TTY.ttys[e.node.rdev];
          if (!r2) throw new FS.ErrnoError(43);
          e.tty = r2, e.seekable = false;
        }, close(e) {
          e.tty.ops.fsync(e.tty);
        }, fsync(e) {
          e.tty.ops.fsync(e.tty);
        }, read(e, r2, t2, n3, o5) {
          if (!e.tty || !e.tty.ops.get_char) throw new FS.ErrnoError(60);
          for (var a2 = 0, s5 = 0; s5 < n3; s5++) {
            var l2;
            try {
              l2 = e.tty.ops.get_char(e.tty);
            } catch {
              throw new FS.ErrnoError(29);
            }
            if (l2 === void 0 && a2 === 0) throw new FS.ErrnoError(6);
            if (l2 == null) break;
            a2++, r2[t2 + s5] = l2;
          }
          return a2 && (e.node.atime = Date.now()), a2;
        }, write(e, r2, t2, n3, o5) {
          if (!e.tty || !e.tty.ops.put_char) throw new FS.ErrnoError(60);
          try {
            for (var a2 = 0; a2 < n3; a2++) e.tty.ops.put_char(e.tty, r2[t2 + a2]);
          } catch {
            throw new FS.ErrnoError(29);
          }
          return n3 && (e.node.mtime = e.node.ctime = Date.now()), a2;
        } }, default_tty_ops: { get_char(e) {
          return FS_stdin_getChar();
        }, put_char(e, r2) {
          r2 === null || r2 === 10 ? (out(UTF8ArrayToString(e.output)), e.output = []) : r2 != 0 && e.output.push(r2);
        }, fsync(e) {
          e.output && e.output.length > 0 && (out(UTF8ArrayToString(e.output)), e.output = []);
        }, ioctl_tcgets(e) {
          return { c_iflag: 25856, c_oflag: 5, c_cflag: 191, c_lflag: 35387, c_cc: [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] };
        }, ioctl_tcsets(e, r2, t2) {
          return 0;
        }, ioctl_tiocgwinsz(e) {
          return [24, 80];
        } }, default_tty1_ops: { put_char(e, r2) {
          r2 === null || r2 === 10 ? (err(UTF8ArrayToString(e.output)), e.output = []) : r2 != 0 && e.output.push(r2);
        }, fsync(e) {
          e.output && e.output.length > 0 && (err(UTF8ArrayToString(e.output)), e.output = []);
        } } }, zeroMemory = (e, r2) => {
          HEAPU8.fill(0, e, e + r2);
        }, mmapAlloc = (e) => {
          abort();
        }, MEMFS = { ops_table: null, mount(e) {
          return MEMFS.createNode(null, "/", 16895, 0);
        }, createNode(e, r2, t2, n3) {
          if (FS.isBlkdev(t2) || FS.isFIFO(t2)) throw new FS.ErrnoError(63);
          MEMFS.ops_table || (MEMFS.ops_table = { dir: { node: { getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr, lookup: MEMFS.node_ops.lookup, mknod: MEMFS.node_ops.mknod, rename: MEMFS.node_ops.rename, unlink: MEMFS.node_ops.unlink, rmdir: MEMFS.node_ops.rmdir, readdir: MEMFS.node_ops.readdir, symlink: MEMFS.node_ops.symlink }, stream: { llseek: MEMFS.stream_ops.llseek } }, file: { node: { getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr }, stream: { llseek: MEMFS.stream_ops.llseek, read: MEMFS.stream_ops.read, write: MEMFS.stream_ops.write, allocate: MEMFS.stream_ops.allocate, mmap: MEMFS.stream_ops.mmap, msync: MEMFS.stream_ops.msync } }, link: { node: { getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr, readlink: MEMFS.node_ops.readlink }, stream: {} }, chrdev: { node: { getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr }, stream: FS.chrdev_stream_ops } });
          var o5 = FS.createNode(e, r2, t2, n3);
          return FS.isDir(o5.mode) ? (o5.node_ops = MEMFS.ops_table.dir.node, o5.stream_ops = MEMFS.ops_table.dir.stream, o5.contents = {}) : FS.isFile(o5.mode) ? (o5.node_ops = MEMFS.ops_table.file.node, o5.stream_ops = MEMFS.ops_table.file.stream, o5.usedBytes = 0, o5.contents = null) : FS.isLink(o5.mode) ? (o5.node_ops = MEMFS.ops_table.link.node, o5.stream_ops = MEMFS.ops_table.link.stream) : FS.isChrdev(o5.mode) && (o5.node_ops = MEMFS.ops_table.chrdev.node, o5.stream_ops = MEMFS.ops_table.chrdev.stream), o5.atime = o5.mtime = o5.ctime = Date.now(), e && (e.contents[r2] = o5, e.atime = e.mtime = e.ctime = o5.atime), o5;
        }, getFileDataAsTypedArray(e) {
          return e.contents ? e.contents.subarray ? e.contents.subarray(0, e.usedBytes) : new Uint8Array(e.contents) : new Uint8Array(0);
        }, expandFileStorage(e, r2) {
          var t2 = e.contents ? e.contents.length : 0;
          if (!(t2 >= r2)) {
            var n3 = 1024 * 1024;
            r2 = Math.max(r2, t2 * (t2 < n3 ? 2 : 1.125) >>> 0), t2 != 0 && (r2 = Math.max(r2, 256));
            var o5 = e.contents;
            e.contents = new Uint8Array(r2), e.usedBytes > 0 && e.contents.set(o5.subarray(0, e.usedBytes), 0);
          }
        }, resizeFileStorage(e, r2) {
          if (e.usedBytes != r2) if (r2 == 0) e.contents = null, e.usedBytes = 0;
          else {
            var t2 = e.contents;
            e.contents = new Uint8Array(r2), t2 && e.contents.set(t2.subarray(0, Math.min(r2, e.usedBytes))), e.usedBytes = r2;
          }
        }, node_ops: { getattr(e) {
          var r2 = {};
          return r2.dev = FS.isChrdev(e.mode) ? e.id : 1, r2.ino = e.id, r2.mode = e.mode, r2.nlink = 1, r2.uid = 0, r2.gid = 0, r2.rdev = e.rdev, FS.isDir(e.mode) ? r2.size = 4096 : FS.isFile(e.mode) ? r2.size = e.usedBytes : FS.isLink(e.mode) ? r2.size = e.link.length : r2.size = 0, r2.atime = new Date(e.atime), r2.mtime = new Date(e.mtime), r2.ctime = new Date(e.ctime), r2.blksize = 4096, r2.blocks = Math.ceil(r2.size / r2.blksize), r2;
        }, setattr(e, r2) {
          for (let t2 of ["mode", "atime", "mtime", "ctime"]) r2[t2] && (e[t2] = r2[t2]);
          r2.size !== void 0 && MEMFS.resizeFileStorage(e, r2.size);
        }, lookup(e, r2) {
          throw MEMFS.doesNotExistError;
        }, mknod(e, r2, t2, n3) {
          return MEMFS.createNode(e, r2, t2, n3);
        }, rename(e, r2, t2) {
          var n3;
          try {
            n3 = FS.lookupNode(r2, t2);
          } catch {
          }
          if (n3) {
            if (FS.isDir(e.mode)) for (var o5 in n3.contents) throw new FS.ErrnoError(55);
            FS.hashRemoveNode(n3);
          }
          delete e.parent.contents[e.name], r2.contents[t2] = e, e.name = t2, r2.ctime = r2.mtime = e.parent.ctime = e.parent.mtime = Date.now();
        }, unlink(e, r2) {
          delete e.contents[r2], e.ctime = e.mtime = Date.now();
        }, rmdir(e, r2) {
          var t2 = FS.lookupNode(e, r2);
          for (var n3 in t2.contents) throw new FS.ErrnoError(55);
          delete e.contents[r2], e.ctime = e.mtime = Date.now();
        }, readdir(e) {
          return [".", "..", ...Object.keys(e.contents)];
        }, symlink(e, r2, t2) {
          var n3 = MEMFS.createNode(e, r2, 41471, 0);
          return n3.link = t2, n3;
        }, readlink(e) {
          if (!FS.isLink(e.mode)) throw new FS.ErrnoError(28);
          return e.link;
        } }, stream_ops: { read(e, r2, t2, n3, o5) {
          var a2 = e.node.contents;
          if (o5 >= e.node.usedBytes) return 0;
          var s5 = Math.min(e.node.usedBytes - o5, n3);
          if (s5 > 8 && a2.subarray) r2.set(a2.subarray(o5, o5 + s5), t2);
          else for (var l2 = 0; l2 < s5; l2++) r2[t2 + l2] = a2[o5 + l2];
          return s5;
        }, write(e, r2, t2, n3, o5, a2) {
          if (r2.buffer === HEAP8.buffer && (a2 = false), !n3) return 0;
          var s5 = e.node;
          if (s5.mtime = s5.ctime = Date.now(), r2.subarray && (!s5.contents || s5.contents.subarray)) {
            if (a2) return s5.contents = r2.subarray(t2, t2 + n3), s5.usedBytes = n3, n3;
            if (s5.usedBytes === 0 && o5 === 0) return s5.contents = r2.slice(t2, t2 + n3), s5.usedBytes = n3, n3;
            if (o5 + n3 <= s5.usedBytes) return s5.contents.set(r2.subarray(t2, t2 + n3), o5), n3;
          }
          if (MEMFS.expandFileStorage(s5, o5 + n3), s5.contents.subarray && r2.subarray) s5.contents.set(r2.subarray(t2, t2 + n3), o5);
          else for (var l2 = 0; l2 < n3; l2++) s5.contents[o5 + l2] = r2[t2 + l2];
          return s5.usedBytes = Math.max(s5.usedBytes, o5 + n3), n3;
        }, llseek(e, r2, t2) {
          var n3 = r2;
          if (t2 === 1 ? n3 += e.position : t2 === 2 && FS.isFile(e.node.mode) && (n3 += e.node.usedBytes), n3 < 0) throw new FS.ErrnoError(28);
          return n3;
        }, allocate(e, r2, t2) {
          MEMFS.expandFileStorage(e.node, r2 + t2), e.node.usedBytes = Math.max(e.node.usedBytes, r2 + t2);
        }, mmap(e, r2, t2, n3, o5) {
          if (!FS.isFile(e.node.mode)) throw new FS.ErrnoError(43);
          var a2, s5, l2 = e.node.contents;
          if (!(o5 & 2) && l2 && l2.buffer === HEAP8.buffer) s5 = false, a2 = l2.byteOffset;
          else {
            if (s5 = true, a2 = mmapAlloc(r2), !a2) throw new FS.ErrnoError(48);
            l2 && ((t2 > 0 || t2 + r2 < l2.length) && (l2.subarray ? l2 = l2.subarray(t2, t2 + r2) : l2 = Array.prototype.slice.call(l2, t2, t2 + r2)), HEAP8.set(l2, a2));
          }
          return { ptr: a2, allocated: s5 };
        }, msync(e, r2, t2, n3, o5) {
          return MEMFS.stream_ops.write(e, r2, 0, n3, t2, false), 0;
        } } }, FS_createDataFile = (e, r2, t2, n3, o5, a2) => {
          FS.createDataFile(e, r2, t2, n3, o5, a2);
        }, FS_handledByPreloadPlugin = (e, r2, t2, n3) => {
          typeof Browser < "u" && Browser.init();
          var o5 = false;
          return preloadPlugins.forEach((a2) => {
            o5 || a2.canHandle(r2) && (a2.handle(e, r2, t2, n3), o5 = true);
          }), o5;
        }, FS_createPreloadedFile = (e, r2, t2, n3, o5, a2, s5, l2, u3, d3) => {
          var c4 = r2 ? PATH_FS.resolve(PATH.join2(e, r2)) : e, p5 = `cp ${c4}`;
          function f5(m5) {
            function _5(g5) {
              d3?.(), l2 || FS_createDataFile(e, r2, g5, n3, o5, u3), a2?.(), removeRunDependency(p5);
            }
            FS_handledByPreloadPlugin(m5, c4, _5, () => {
              s5?.(), removeRunDependency(p5);
            }) || _5(m5);
          }
          addRunDependency(p5), typeof t2 == "string" ? asyncLoad(t2).then(f5, s5) : f5(t2);
        }, FS_modeStringToFlags = (e) => {
          var r2 = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 }, t2 = r2[e];
          if (typeof t2 > "u") throw new Error(`Unknown file open mode: ${e}`);
          return t2;
        }, FS_getMode = (e, r2) => {
          var t2 = 0;
          return e && (t2 |= 365), r2 && (t2 |= 146), t2;
        }, ERRNO_CODES = { EPERM: 63, ENOENT: 44, ESRCH: 71, EINTR: 27, EIO: 29, ENXIO: 60, E2BIG: 1, ENOEXEC: 45, EBADF: 8, ECHILD: 12, EAGAIN: 6, EWOULDBLOCK: 6, ENOMEM: 48, EACCES: 2, EFAULT: 21, ENOTBLK: 105, EBUSY: 10, EEXIST: 20, EXDEV: 75, ENODEV: 43, ENOTDIR: 54, EISDIR: 31, EINVAL: 28, ENFILE: 41, EMFILE: 33, ENOTTY: 59, ETXTBSY: 74, EFBIG: 22, ENOSPC: 51, ESPIPE: 70, EROFS: 69, EMLINK: 34, EPIPE: 64, EDOM: 18, ERANGE: 68, ENOMSG: 49, EIDRM: 24, ECHRNG: 106, EL2NSYNC: 156, EL3HLT: 107, EL3RST: 108, ELNRNG: 109, EUNATCH: 110, ENOCSI: 111, EL2HLT: 112, EDEADLK: 16, ENOLCK: 46, EBADE: 113, EBADR: 114, EXFULL: 115, ENOANO: 104, EBADRQC: 103, EBADSLT: 102, EDEADLOCK: 16, EBFONT: 101, ENOSTR: 100, ENODATA: 116, ETIME: 117, ENOSR: 118, ENONET: 119, ENOPKG: 120, EREMOTE: 121, ENOLINK: 47, EADV: 122, ESRMNT: 123, ECOMM: 124, EPROTO: 65, EMULTIHOP: 36, EDOTDOT: 125, EBADMSG: 9, ENOTUNIQ: 126, EBADFD: 127, EREMCHG: 128, ELIBACC: 129, ELIBBAD: 130, ELIBSCN: 131, ELIBMAX: 132, ELIBEXEC: 133, ENOSYS: 52, ENOTEMPTY: 55, ENAMETOOLONG: 37, ELOOP: 32, EOPNOTSUPP: 138, EPFNOSUPPORT: 139, ECONNRESET: 15, ENOBUFS: 42, EAFNOSUPPORT: 5, EPROTOTYPE: 67, ENOTSOCK: 57, ENOPROTOOPT: 50, ESHUTDOWN: 140, ECONNREFUSED: 14, EADDRINUSE: 3, ECONNABORTED: 13, ENETUNREACH: 40, ENETDOWN: 38, ETIMEDOUT: 73, EHOSTDOWN: 142, EHOSTUNREACH: 23, EINPROGRESS: 26, EALREADY: 7, EDESTADDRREQ: 17, EMSGSIZE: 35, EPROTONOSUPPORT: 66, ESOCKTNOSUPPORT: 137, EADDRNOTAVAIL: 4, ENETRESET: 39, EISCONN: 30, ENOTCONN: 53, ETOOMANYREFS: 141, EUSERS: 136, EDQUOT: 19, ESTALE: 72, ENOTSUP: 138, ENOMEDIUM: 148, EILSEQ: 25, EOVERFLOW: 61, ECANCELED: 11, ENOTRECOVERABLE: 56, EOWNERDEAD: 62, ESTRPIPE: 135 }, PROXYFS = { mount(e) {
          return PROXYFS.createNode(null, "/", e.opts.fs.lstat(e.opts.root).mode, 0);
        }, createNode(e, r2, t2, n3) {
          if (!FS.isDir(t2) && !FS.isFile(t2) && !FS.isLink(t2)) throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          var o5 = FS.createNode(e, r2, t2);
          return o5.node_ops = PROXYFS.node_ops, o5.stream_ops = PROXYFS.stream_ops, o5;
        }, realPath(e) {
          for (var r2 = []; e.parent !== e; ) r2.push(e.name), e = e.parent;
          return r2.push(e.mount.opts.root), r2.reverse(), PATH.join(...r2);
        }, node_ops: { getattr(e) {
          var r2 = PROXYFS.realPath(e), t2;
          try {
            t2 = e.mount.opts.fs.lstat(r2);
          } catch (n3) {
            throw n3.code ? new FS.ErrnoError(ERRNO_CODES[n3.code]) : n3;
          }
          return { dev: t2.dev, ino: t2.ino, mode: t2.mode, nlink: t2.nlink, uid: t2.uid, gid: t2.gid, rdev: t2.rdev, size: t2.size, atime: t2.atime, mtime: t2.mtime, ctime: t2.ctime, blksize: t2.blksize, blocks: t2.blocks };
        }, setattr(e, r2) {
          var t2 = PROXYFS.realPath(e);
          try {
            if (r2.mode !== void 0 && (e.mount.opts.fs.chmod(t2, r2.mode), e.mode = r2.mode), r2.atime || r2.mtime) {
              var n3 = new Date(r2.atime || r2.mtime), o5 = new Date(r2.mtime || r2.atime);
              e.mount.opts.fs.utime(t2, n3, o5);
            }
            r2.size !== void 0 && e.mount.opts.fs.truncate(t2, r2.size);
          } catch (a2) {
            throw a2.code ? new FS.ErrnoError(ERRNO_CODES[a2.code]) : a2;
          }
        }, lookup(e, r2) {
          try {
            var t2 = PATH.join2(PROXYFS.realPath(e), r2), n3 = e.mount.opts.fs.lstat(t2).mode, o5 = PROXYFS.createNode(e, r2, n3);
            return o5;
          } catch (a2) {
            throw a2.code ? new FS.ErrnoError(ERRNO_CODES[a2.code]) : a2;
          }
        }, mknod(e, r2, t2, n3) {
          var o5 = PROXYFS.createNode(e, r2, t2, n3), a2 = PROXYFS.realPath(o5);
          try {
            FS.isDir(o5.mode) ? o5.mount.opts.fs.mkdir(a2, o5.mode) : o5.mount.opts.fs.writeFile(a2, "", { mode: o5.mode });
          } catch (s5) {
            throw s5.code ? new FS.ErrnoError(ERRNO_CODES[s5.code]) : s5;
          }
          return o5;
        }, rename(e, r2, t2) {
          var n3 = PROXYFS.realPath(e), o5 = PATH.join2(PROXYFS.realPath(r2), t2);
          try {
            e.mount.opts.fs.rename(n3, o5), e.name = t2;
          } catch (a2) {
            throw a2.code ? new FS.ErrnoError(ERRNO_CODES[a2.code]) : a2;
          }
        }, unlink(e, r2) {
          var t2 = PATH.join2(PROXYFS.realPath(e), r2);
          try {
            e.mount.opts.fs.unlink(t2);
          } catch (n3) {
            throw n3.code ? new FS.ErrnoError(ERRNO_CODES[n3.code]) : n3;
          }
        }, rmdir(e, r2) {
          var t2 = PATH.join2(PROXYFS.realPath(e), r2);
          try {
            e.mount.opts.fs.rmdir(t2);
          } catch (n3) {
            throw n3.code ? new FS.ErrnoError(ERRNO_CODES[n3.code]) : n3;
          }
        }, readdir(e) {
          var r2 = PROXYFS.realPath(e);
          try {
            return e.mount.opts.fs.readdir(r2);
          } catch (t2) {
            throw t2.code ? new FS.ErrnoError(ERRNO_CODES[t2.code]) : t2;
          }
        }, symlink(e, r2, t2) {
          var n3 = PATH.join2(PROXYFS.realPath(e), r2);
          try {
            e.mount.opts.fs.symlink(t2, n3);
          } catch (o5) {
            throw o5.code ? new FS.ErrnoError(ERRNO_CODES[o5.code]) : o5;
          }
        }, readlink(e) {
          var r2 = PROXYFS.realPath(e);
          try {
            return e.mount.opts.fs.readlink(r2);
          } catch (t2) {
            throw t2.code ? new FS.ErrnoError(ERRNO_CODES[t2.code]) : t2;
          }
        } }, stream_ops: { open(e) {
          var r2 = PROXYFS.realPath(e.node);
          try {
            e.nfd = e.node.mount.opts.fs.open(r2, e.flags);
          } catch (t2) {
            throw t2.code ? new FS.ErrnoError(ERRNO_CODES[t2.code]) : t2;
          }
        }, close(e) {
          try {
            e.node.mount.opts.fs.close(e.nfd);
          } catch (r2) {
            throw r2.code ? new FS.ErrnoError(ERRNO_CODES[r2.code]) : r2;
          }
        }, read(e, r2, t2, n3, o5) {
          try {
            return e.node.mount.opts.fs.read(e.nfd, r2, t2, n3, o5);
          } catch (a2) {
            throw a2.code ? new FS.ErrnoError(ERRNO_CODES[a2.code]) : a2;
          }
        }, write(e, r2, t2, n3, o5) {
          try {
            return e.node.mount.opts.fs.write(e.nfd, r2, t2, n3, o5);
          } catch (a2) {
            throw a2.code ? new FS.ErrnoError(ERRNO_CODES[a2.code]) : a2;
          }
        }, llseek(e, r2, t2) {
          var n3 = r2;
          if (t2 === 1) n3 += e.position;
          else if (t2 === 2 && FS.isFile(e.node.mode)) try {
            var o5 = e.node.node_ops.getattr(e.node);
            n3 += o5.size;
          } catch (a2) {
            throw new FS.ErrnoError(ERRNO_CODES[a2.code]);
          }
          if (n3 < 0) throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          return n3;
        } } }, FS = { root: null, mounts: [], devices: {}, streams: [], nextInode: 1, nameTable: null, currentPath: "/", initialized: false, ignorePermissions: true, ErrnoError: class {
          constructor(e) {
            P(this, "name", "ErrnoError");
            this.errno = e;
          }
        }, filesystems: null, syncFSRequests: 0, readFiles: {}, FSStream: class {
          constructor() {
            P(this, "shared", {});
          }
          get object() {
            return this.node;
          }
          set object(e) {
            this.node = e;
          }
          get isRead() {
            return (this.flags & 2097155) !== 1;
          }
          get isWrite() {
            return (this.flags & 2097155) !== 0;
          }
          get isAppend() {
            return this.flags & 1024;
          }
          get flags() {
            return this.shared.flags;
          }
          set flags(e) {
            this.shared.flags = e;
          }
          get position() {
            return this.shared.position;
          }
          set position(e) {
            this.shared.position = e;
          }
        }, FSNode: class {
          constructor(e, r2, t2, n3) {
            P(this, "node_ops", {});
            P(this, "stream_ops", {});
            P(this, "readMode", 365);
            P(this, "writeMode", 146);
            P(this, "mounted", null);
            e || (e = this), this.parent = e, this.mount = e.mount, this.id = FS.nextInode++, this.name = r2, this.mode = t2, this.rdev = n3, this.atime = this.mtime = this.ctime = Date.now();
          }
          get read() {
            return (this.mode & this.readMode) === this.readMode;
          }
          set read(e) {
            e ? this.mode |= this.readMode : this.mode &= ~this.readMode;
          }
          get write() {
            return (this.mode & this.writeMode) === this.writeMode;
          }
          set write(e) {
            e ? this.mode |= this.writeMode : this.mode &= ~this.writeMode;
          }
          get isFolder() {
            return FS.isDir(this.mode);
          }
          get isDevice() {
            return FS.isChrdev(this.mode);
          }
        }, lookupPath(e, r2 = {}) {
          if (!e) return { path: "", node: null };
          r2.follow_mount ?? (r2.follow_mount = true), PATH.isAbs(e) || (e = FS.cwd() + "/" + e);
          e: for (var t2 = 0; t2 < 40; t2++) {
            for (var n3 = e.split("/").filter((d3) => !!d3 && d3 !== "."), o5 = FS.root, a2 = "/", s5 = 0; s5 < n3.length; s5++) {
              var l2 = s5 === n3.length - 1;
              if (l2 && r2.parent) break;
              if (n3[s5] === "..") {
                a2 = PATH.dirname(a2), o5 = o5.parent;
                continue;
              }
              a2 = PATH.join2(a2, n3[s5]);
              try {
                o5 = FS.lookupNode(o5, n3[s5]);
              } catch (d3) {
                if (d3?.errno === 44 && l2 && r2.noent_okay) return { path: a2 };
                throw d3;
              }
              if (FS.isMountpoint(o5) && (!l2 || r2.follow_mount) && (o5 = o5.mounted.root), FS.isLink(o5.mode) && (!l2 || r2.follow)) {
                if (!o5.node_ops.readlink) throw new FS.ErrnoError(52);
                var u3 = o5.node_ops.readlink(o5);
                PATH.isAbs(u3) || (u3 = PATH.dirname(a2) + "/" + u3), e = u3 + "/" + n3.slice(s5 + 1).join("/");
                continue e;
              }
            }
            return { path: a2, node: o5 };
          }
          throw new FS.ErrnoError(32);
        }, getPath(e) {
          for (var r2; ; ) {
            if (FS.isRoot(e)) {
              var t2 = e.mount.mountpoint;
              return r2 ? t2[t2.length - 1] !== "/" ? `${t2}/${r2}` : t2 + r2 : t2;
            }
            r2 = r2 ? `${e.name}/${r2}` : e.name, e = e.parent;
          }
        }, hashName(e, r2) {
          for (var t2 = 0, n3 = 0; n3 < r2.length; n3++) t2 = (t2 << 5) - t2 + r2.charCodeAt(n3) | 0;
          return (e + t2 >>> 0) % FS.nameTable.length;
        }, hashAddNode(e) {
          var r2 = FS.hashName(e.parent.id, e.name);
          e.name_next = FS.nameTable[r2], FS.nameTable[r2] = e;
        }, hashRemoveNode(e) {
          var r2 = FS.hashName(e.parent.id, e.name);
          if (FS.nameTable[r2] === e) FS.nameTable[r2] = e.name_next;
          else for (var t2 = FS.nameTable[r2]; t2; ) {
            if (t2.name_next === e) {
              t2.name_next = e.name_next;
              break;
            }
            t2 = t2.name_next;
          }
        }, lookupNode(e, r2) {
          var t2 = FS.mayLookup(e);
          if (t2) throw new FS.ErrnoError(t2);
          for (var n3 = FS.hashName(e.id, r2), o5 = FS.nameTable[n3]; o5; o5 = o5.name_next) {
            var a2 = o5.name;
            if (o5.parent.id === e.id && a2 === r2) return o5;
          }
          return FS.lookup(e, r2);
        }, createNode(e, r2, t2, n3) {
          var o5 = new FS.FSNode(e, r2, t2, n3);
          return FS.hashAddNode(o5), o5;
        }, destroyNode(e) {
          FS.hashRemoveNode(e);
        }, isRoot(e) {
          return e === e.parent;
        }, isMountpoint(e) {
          return !!e.mounted;
        }, isFile(e) {
          return (e & 61440) === 32768;
        }, isDir(e) {
          return (e & 61440) === 16384;
        }, isLink(e) {
          return (e & 61440) === 40960;
        }, isChrdev(e) {
          return (e & 61440) === 8192;
        }, isBlkdev(e) {
          return (e & 61440) === 24576;
        }, isFIFO(e) {
          return (e & 61440) === 4096;
        }, isSocket(e) {
          return (e & 49152) === 49152;
        }, flagsToPermissionString(e) {
          var r2 = ["r", "w", "rw"][e & 3];
          return e & 512 && (r2 += "w"), r2;
        }, nodePermissions(e, r2) {
          return FS.ignorePermissions ? 0 : r2.includes("r") && !(e.mode & 292) || r2.includes("w") && !(e.mode & 146) || r2.includes("x") && !(e.mode & 73) ? 2 : 0;
        }, mayLookup(e) {
          if (!FS.isDir(e.mode)) return 54;
          var r2 = FS.nodePermissions(e, "x");
          return r2 || (e.node_ops.lookup ? 0 : 2);
        }, mayCreate(e, r2) {
          if (!FS.isDir(e.mode)) return 54;
          try {
            var t2 = FS.lookupNode(e, r2);
            return 20;
          } catch {
          }
          return FS.nodePermissions(e, "wx");
        }, mayDelete(e, r2, t2) {
          var n3;
          try {
            n3 = FS.lookupNode(e, r2);
          } catch (a2) {
            return a2.errno;
          }
          var o5 = FS.nodePermissions(e, "wx");
          if (o5) return o5;
          if (t2) {
            if (!FS.isDir(n3.mode)) return 54;
            if (FS.isRoot(n3) || FS.getPath(n3) === FS.cwd()) return 10;
          } else if (FS.isDir(n3.mode)) return 31;
          return 0;
        }, mayOpen(e, r2) {
          return e ? FS.isLink(e.mode) ? 32 : FS.isDir(e.mode) && (FS.flagsToPermissionString(r2) !== "r" || r2 & 512) ? 31 : FS.nodePermissions(e, FS.flagsToPermissionString(r2)) : 44;
        }, MAX_OPEN_FDS: 4096, nextfd() {
          for (var e = 0; e <= FS.MAX_OPEN_FDS; e++) if (!FS.streams[e]) return e;
          throw new FS.ErrnoError(33);
        }, getStreamChecked(e) {
          var r2 = FS.getStream(e);
          if (!r2) throw new FS.ErrnoError(8);
          return r2;
        }, getStream: (e) => FS.streams[e], createStream(e, r2 = -1) {
          return e = Object.assign(new FS.FSStream(), e), r2 == -1 && (r2 = FS.nextfd()), e.fd = r2, FS.streams[r2] = e, e;
        }, closeStream(e) {
          FS.streams[e] = null;
        }, dupStream(e, r2 = -1) {
          var t2 = FS.createStream(e, r2);
          return t2.stream_ops?.dup?.(t2), t2;
        }, chrdev_stream_ops: { open(e) {
          var r2 = FS.getDevice(e.node.rdev);
          e.stream_ops = r2.stream_ops, e.stream_ops.open?.(e);
        }, llseek() {
          throw new FS.ErrnoError(70);
        } }, major: (e) => e >> 8, minor: (e) => e & 255, makedev: (e, r2) => e << 8 | r2, registerDevice(e, r2) {
          FS.devices[e] = { stream_ops: r2 };
        }, getDevice: (e) => FS.devices[e], getMounts(e) {
          for (var r2 = [], t2 = [e]; t2.length; ) {
            var n3 = t2.pop();
            r2.push(n3), t2.push(...n3.mounts);
          }
          return r2;
        }, syncfs(e, r2) {
          typeof e == "function" && (r2 = e, e = false), FS.syncFSRequests++, FS.syncFSRequests > 1 && err(`warning: ${FS.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);
          var t2 = FS.getMounts(FS.root.mount), n3 = 0;
          function o5(s5) {
            return FS.syncFSRequests--, r2(s5);
          }
          function a2(s5) {
            if (s5) return a2.errored ? void 0 : (a2.errored = true, o5(s5));
            ++n3 >= t2.length && o5(null);
          }
          t2.forEach((s5) => {
            if (!s5.type.syncfs) return a2(null);
            s5.type.syncfs(s5, e, a2);
          });
        }, mount(e, r2, t2) {
          var n3 = t2 === "/", o5 = !t2, a2;
          if (n3 && FS.root) throw new FS.ErrnoError(10);
          if (!n3 && !o5) {
            var s5 = FS.lookupPath(t2, { follow_mount: false });
            if (t2 = s5.path, a2 = s5.node, FS.isMountpoint(a2)) throw new FS.ErrnoError(10);
            if (!FS.isDir(a2.mode)) throw new FS.ErrnoError(54);
          }
          var l2 = { type: e, opts: r2, mountpoint: t2, mounts: [] }, u3 = e.mount(l2);
          return u3.mount = l2, l2.root = u3, n3 ? FS.root = u3 : a2 && (a2.mounted = l2, a2.mount && a2.mount.mounts.push(l2)), u3;
        }, unmount(e) {
          var r2 = FS.lookupPath(e, { follow_mount: false });
          if (!FS.isMountpoint(r2.node)) throw new FS.ErrnoError(28);
          var t2 = r2.node, n3 = t2.mounted, o5 = FS.getMounts(n3);
          Object.keys(FS.nameTable).forEach((s5) => {
            for (var l2 = FS.nameTable[s5]; l2; ) {
              var u3 = l2.name_next;
              o5.includes(l2.mount) && FS.destroyNode(l2), l2 = u3;
            }
          }), t2.mounted = null;
          var a2 = t2.mount.mounts.indexOf(n3);
          t2.mount.mounts.splice(a2, 1);
        }, lookup(e, r2) {
          return e.node_ops.lookup(e, r2);
        }, mknod(e, r2, t2) {
          var n3 = FS.lookupPath(e, { parent: true }), o5 = n3.node, a2 = PATH.basename(e);
          if (!a2 || a2 === "." || a2 === "..") throw new FS.ErrnoError(28);
          var s5 = FS.mayCreate(o5, a2);
          if (s5) throw new FS.ErrnoError(s5);
          if (!o5.node_ops.mknod) throw new FS.ErrnoError(63);
          return o5.node_ops.mknod(o5, a2, r2, t2);
        }, statfs(e) {
          var r2 = { bsize: 4096, frsize: 4096, blocks: 1e6, bfree: 5e5, bavail: 5e5, files: FS.nextInode, ffree: FS.nextInode - 1, fsid: 42, flags: 2, namelen: 255 }, t2 = FS.lookupPath(e, { follow: true }).node;
          return t2?.node_ops.statfs && Object.assign(r2, t2.node_ops.statfs(t2.mount.opts.root)), r2;
        }, create(e, r2 = 438) {
          return r2 &= 4095, r2 |= 32768, FS.mknod(e, r2, 0);
        }, mkdir(e, r2 = 511) {
          return r2 &= 1023, r2 |= 16384, FS.mknod(e, r2, 0);
        }, mkdirTree(e, r2) {
          for (var t2 = e.split("/"), n3 = "", o5 = 0; o5 < t2.length; ++o5) if (t2[o5]) {
            n3 += "/" + t2[o5];
            try {
              FS.mkdir(n3, r2);
            } catch (a2) {
              if (a2.errno != 20) throw a2;
            }
          }
        }, mkdev(e, r2, t2) {
          return typeof t2 > "u" && (t2 = r2, r2 = 438), r2 |= 8192, FS.mknod(e, r2, t2);
        }, symlink(e, r2) {
          if (!PATH_FS.resolve(e)) throw new FS.ErrnoError(44);
          var t2 = FS.lookupPath(r2, { parent: true }), n3 = t2.node;
          if (!n3) throw new FS.ErrnoError(44);
          var o5 = PATH.basename(r2), a2 = FS.mayCreate(n3, o5);
          if (a2) throw new FS.ErrnoError(a2);
          if (!n3.node_ops.symlink) throw new FS.ErrnoError(63);
          return n3.node_ops.symlink(n3, o5, e);
        }, rename(e, r2) {
          var t2 = PATH.dirname(e), n3 = PATH.dirname(r2), o5 = PATH.basename(e), a2 = PATH.basename(r2), s5, l2, u3;
          if (s5 = FS.lookupPath(e, { parent: true }), l2 = s5.node, s5 = FS.lookupPath(r2, { parent: true }), u3 = s5.node, !l2 || !u3) throw new FS.ErrnoError(44);
          if (l2.mount !== u3.mount) throw new FS.ErrnoError(75);
          var d3 = FS.lookupNode(l2, o5), c4 = PATH_FS.relative(e, n3);
          if (c4.charAt(0) !== ".") throw new FS.ErrnoError(28);
          if (c4 = PATH_FS.relative(r2, t2), c4.charAt(0) !== ".") throw new FS.ErrnoError(55);
          var p5;
          try {
            p5 = FS.lookupNode(u3, a2);
          } catch {
          }
          if (d3 !== p5) {
            var f5 = FS.isDir(d3.mode), m5 = FS.mayDelete(l2, o5, f5);
            if (m5) throw new FS.ErrnoError(m5);
            if (m5 = p5 ? FS.mayDelete(u3, a2, f5) : FS.mayCreate(u3, a2), m5) throw new FS.ErrnoError(m5);
            if (!l2.node_ops.rename) throw new FS.ErrnoError(63);
            if (FS.isMountpoint(d3) || p5 && FS.isMountpoint(p5)) throw new FS.ErrnoError(10);
            if (u3 !== l2 && (m5 = FS.nodePermissions(l2, "w"), m5)) throw new FS.ErrnoError(m5);
            FS.hashRemoveNode(d3);
            try {
              l2.node_ops.rename(d3, u3, a2), d3.parent = u3;
            } catch (_5) {
              throw _5;
            } finally {
              FS.hashAddNode(d3);
            }
          }
        }, rmdir(e) {
          var r2 = FS.lookupPath(e, { parent: true }), t2 = r2.node, n3 = PATH.basename(e), o5 = FS.lookupNode(t2, n3), a2 = FS.mayDelete(t2, n3, true);
          if (a2) throw new FS.ErrnoError(a2);
          if (!t2.node_ops.rmdir) throw new FS.ErrnoError(63);
          if (FS.isMountpoint(o5)) throw new FS.ErrnoError(10);
          t2.node_ops.rmdir(t2, n3), FS.destroyNode(o5);
        }, readdir(e) {
          var r2 = FS.lookupPath(e, { follow: true }), t2 = r2.node;
          if (!t2.node_ops.readdir) throw new FS.ErrnoError(54);
          return t2.node_ops.readdir(t2);
        }, unlink(e) {
          var r2 = FS.lookupPath(e, { parent: true }), t2 = r2.node;
          if (!t2) throw new FS.ErrnoError(44);
          var n3 = PATH.basename(e), o5 = FS.lookupNode(t2, n3), a2 = FS.mayDelete(t2, n3, false);
          if (a2) throw new FS.ErrnoError(a2);
          if (!t2.node_ops.unlink) throw new FS.ErrnoError(63);
          if (FS.isMountpoint(o5)) throw new FS.ErrnoError(10);
          t2.node_ops.unlink(t2, n3), FS.destroyNode(o5);
        }, readlink(e) {
          var r2 = FS.lookupPath(e), t2 = r2.node;
          if (!t2) throw new FS.ErrnoError(44);
          if (!t2.node_ops.readlink) throw new FS.ErrnoError(28);
          return t2.node_ops.readlink(t2);
        }, stat(e, r2) {
          var t2 = FS.lookupPath(e, { follow: !r2 }), n3 = t2.node;
          if (!n3) throw new FS.ErrnoError(44);
          if (!n3.node_ops.getattr) throw new FS.ErrnoError(63);
          return n3.node_ops.getattr(n3);
        }, lstat(e) {
          return FS.stat(e, true);
        }, chmod(e, r2, t2) {
          var n3;
          if (typeof e == "string") {
            var o5 = FS.lookupPath(e, { follow: !t2 });
            n3 = o5.node;
          } else n3 = e;
          if (!n3.node_ops.setattr) throw new FS.ErrnoError(63);
          n3.node_ops.setattr(n3, { mode: r2 & 4095 | n3.mode & -4096, ctime: Date.now() });
        }, lchmod(e, r2) {
          FS.chmod(e, r2, true);
        }, fchmod(e, r2) {
          var t2 = FS.getStreamChecked(e);
          FS.chmod(t2.node, r2);
        }, chown(e, r2, t2, n3) {
          var o5;
          if (typeof e == "string") {
            var a2 = FS.lookupPath(e, { follow: !n3 });
            o5 = a2.node;
          } else o5 = e;
          if (!o5.node_ops.setattr) throw new FS.ErrnoError(63);
          o5.node_ops.setattr(o5, { timestamp: Date.now() });
        }, lchown(e, r2, t2) {
          FS.chown(e, r2, t2, true);
        }, fchown(e, r2, t2) {
          var n3 = FS.getStreamChecked(e);
          FS.chown(n3.node, r2, t2);
        }, truncate(e, r2) {
          if (r2 < 0) throw new FS.ErrnoError(28);
          var t2;
          if (typeof e == "string") {
            var n3 = FS.lookupPath(e, { follow: true });
            t2 = n3.node;
          } else t2 = e;
          if (!t2.node_ops.setattr) throw new FS.ErrnoError(63);
          if (FS.isDir(t2.mode)) throw new FS.ErrnoError(31);
          if (!FS.isFile(t2.mode)) throw new FS.ErrnoError(28);
          var o5 = FS.nodePermissions(t2, "w");
          if (o5) throw new FS.ErrnoError(o5);
          t2.node_ops.setattr(t2, { size: r2, timestamp: Date.now() });
        }, ftruncate(e, r2) {
          var t2 = FS.getStreamChecked(e);
          if (!(t2.flags & 2097155)) throw new FS.ErrnoError(28);
          FS.truncate(t2.node, r2);
        }, utime(e, r2, t2) {
          var n3 = FS.lookupPath(e, { follow: true }), o5 = n3.node;
          o5.node_ops.setattr(o5, { atime: r2, mtime: t2 });
        }, open(e, r2, t2 = 438) {
          if (e === "") throw new FS.ErrnoError(44);
          r2 = typeof r2 == "string" ? FS_modeStringToFlags(r2) : r2, r2 & 64 ? t2 = t2 & 4095 | 32768 : t2 = 0;
          var n3;
          if (typeof e == "object") n3 = e;
          else {
            var o5 = FS.lookupPath(e, { follow: !(r2 & 131072), noent_okay: true });
            n3 = o5.node, e = o5.path;
          }
          var a2 = false;
          if (r2 & 64) if (n3) {
            if (r2 & 128) throw new FS.ErrnoError(20);
          } else n3 = FS.mknod(e, t2, 0), a2 = true;
          if (!n3) throw new FS.ErrnoError(44);
          if (FS.isChrdev(n3.mode) && (r2 &= -513), r2 & 65536 && !FS.isDir(n3.mode)) throw new FS.ErrnoError(54);
          if (!a2) {
            var s5 = FS.mayOpen(n3, r2);
            if (s5) throw new FS.ErrnoError(s5);
          }
          r2 & 512 && !a2 && FS.truncate(n3, 0), r2 &= -131713;
          var l2 = FS.createStream({ node: n3, path: FS.getPath(n3), flags: r2, seekable: true, position: 0, stream_ops: n3.stream_ops, ungotten: [], error: false });
          return l2.stream_ops.open && l2.stream_ops.open(l2), Module.logReadFiles && !(r2 & 1) && (e in FS.readFiles || (FS.readFiles[e] = 1)), l2;
        }, close(e) {
          if (FS.isClosed(e)) throw new FS.ErrnoError(8);
          e.getdents && (e.getdents = null);
          try {
            e.stream_ops.close && e.stream_ops.close(e);
          } catch (r2) {
            throw r2;
          } finally {
            FS.closeStream(e.fd);
          }
          e.fd = null;
        }, isClosed(e) {
          return e.fd === null;
        }, llseek(e, r2, t2) {
          if (FS.isClosed(e)) throw new FS.ErrnoError(8);
          if (!e.seekable || !e.stream_ops.llseek) throw new FS.ErrnoError(70);
          if (t2 != 0 && t2 != 1 && t2 != 2) throw new FS.ErrnoError(28);
          return e.position = e.stream_ops.llseek(e, r2, t2), e.ungotten = [], e.position;
        }, read(e, r2, t2, n3, o5) {
          if (n3 < 0 || o5 < 0) throw new FS.ErrnoError(28);
          if (FS.isClosed(e)) throw new FS.ErrnoError(8);
          if ((e.flags & 2097155) === 1) throw new FS.ErrnoError(8);
          if (FS.isDir(e.node.mode)) throw new FS.ErrnoError(31);
          if (!e.stream_ops.read) throw new FS.ErrnoError(28);
          var a2 = typeof o5 < "u";
          if (!a2) o5 = e.position;
          else if (!e.seekable) throw new FS.ErrnoError(70);
          var s5 = e.stream_ops.read(e, r2, t2, n3, o5);
          return a2 || (e.position += s5), s5;
        }, write(e, r2, t2, n3, o5, a2) {
          if (n3 < 0 || o5 < 0) throw new FS.ErrnoError(28);
          if (FS.isClosed(e)) throw new FS.ErrnoError(8);
          if (!(e.flags & 2097155)) throw new FS.ErrnoError(8);
          if (FS.isDir(e.node.mode)) throw new FS.ErrnoError(31);
          if (!e.stream_ops.write) throw new FS.ErrnoError(28);
          e.seekable && e.flags & 1024 && FS.llseek(e, 0, 2);
          var s5 = typeof o5 < "u";
          if (!s5) o5 = e.position;
          else if (!e.seekable) throw new FS.ErrnoError(70);
          var l2 = e.stream_ops.write(e, r2, t2, n3, o5, a2);
          return s5 || (e.position += l2), l2;
        }, allocate(e, r2, t2) {
          if (FS.isClosed(e)) throw new FS.ErrnoError(8);
          if (r2 < 0 || t2 <= 0) throw new FS.ErrnoError(28);
          if (!(e.flags & 2097155)) throw new FS.ErrnoError(8);
          if (!FS.isFile(e.node.mode) && !FS.isDir(e.node.mode)) throw new FS.ErrnoError(43);
          if (!e.stream_ops.allocate) throw new FS.ErrnoError(138);
          e.stream_ops.allocate(e, r2, t2);
        }, mmap(e, r2, t2, n3, o5) {
          if (n3 & 2 && !(o5 & 2) && (e.flags & 2097155) !== 2) throw new FS.ErrnoError(2);
          if ((e.flags & 2097155) === 1) throw new FS.ErrnoError(2);
          if (!e.stream_ops.mmap) throw new FS.ErrnoError(43);
          if (!r2) throw new FS.ErrnoError(28);
          return e.stream_ops.mmap(e, r2, t2, n3, o5);
        }, msync(e, r2, t2, n3, o5) {
          return e.stream_ops.msync ? e.stream_ops.msync(e, r2, t2, n3, o5) : 0;
        }, ioctl(e, r2, t2) {
          if (!e.stream_ops.ioctl) throw new FS.ErrnoError(59);
          return e.stream_ops.ioctl(e, r2, t2);
        }, readFile(e, r2 = {}) {
          if (r2.flags = r2.flags || 0, r2.encoding = r2.encoding || "binary", r2.encoding !== "utf8" && r2.encoding !== "binary") throw new Error(`Invalid encoding type "${r2.encoding}"`);
          var t2, n3 = FS.open(e, r2.flags), o5 = FS.stat(e), a2 = o5.size, s5 = new Uint8Array(a2);
          return FS.read(n3, s5, 0, a2, 0), r2.encoding === "utf8" ? t2 = UTF8ArrayToString(s5) : r2.encoding === "binary" && (t2 = s5), FS.close(n3), t2;
        }, writeFile(e, r2, t2 = {}) {
          t2.flags = t2.flags || 577;
          var n3 = FS.open(e, t2.flags, t2.mode);
          if (typeof r2 == "string") {
            var o5 = new Uint8Array(lengthBytesUTF8(r2) + 1), a2 = stringToUTF8Array(r2, o5, 0, o5.length);
            FS.write(n3, o5, 0, a2, void 0, t2.canOwn);
          } else if (ArrayBuffer.isView(r2)) FS.write(n3, r2, 0, r2.byteLength, void 0, t2.canOwn);
          else throw new Error("Unsupported data type");
          FS.close(n3);
        }, cwd: () => FS.currentPath, chdir(e) {
          var r2 = FS.lookupPath(e, { follow: true });
          if (r2.node === null) throw new FS.ErrnoError(44);
          if (!FS.isDir(r2.node.mode)) throw new FS.ErrnoError(54);
          var t2 = FS.nodePermissions(r2.node, "x");
          if (t2) throw new FS.ErrnoError(t2);
          FS.currentPath = r2.path;
        }, createDefaultDirectories() {
          FS.mkdir("/tmp"), FS.mkdir("/home"), FS.mkdir("/home/web_user");
        }, createDefaultDevices() {
          FS.mkdir("/dev"), FS.registerDevice(FS.makedev(1, 3), { read: () => 0, write: (n3, o5, a2, s5, l2) => s5, llseek: () => 0 }), FS.mkdev("/dev/null", FS.makedev(1, 3)), TTY.register(FS.makedev(5, 0), TTY.default_tty_ops), TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops), FS.mkdev("/dev/tty", FS.makedev(5, 0)), FS.mkdev("/dev/tty1", FS.makedev(6, 0));
          var e = new Uint8Array(1024), r2 = 0, t2 = () => (r2 === 0 && (r2 = randomFill(e).byteLength), e[--r2]);
          FS.createDevice("/dev", "random", t2), FS.createDevice("/dev", "urandom", t2), FS.mkdir("/dev/shm"), FS.mkdir("/dev/shm/tmp");
        }, createSpecialDirectories() {
          FS.mkdir("/proc");
          var e = FS.mkdir("/proc/self");
          FS.mkdir("/proc/self/fd"), FS.mount({ mount() {
            var r2 = FS.createNode(e, "fd", 16895, 73);
            return r2.stream_ops = { llseek: MEMFS.stream_ops.llseek }, r2.node_ops = { lookup(t2, n3) {
              var o5 = +n3, a2 = FS.getStreamChecked(o5), s5 = { parent: null, mount: { mountpoint: "fake" }, node_ops: { readlink: () => a2.path }, id: o5 + 1 };
              return s5.parent = s5, s5;
            }, readdir() {
              return Array.from(FS.streams.entries()).filter(([t2, n3]) => n3).map(([t2, n3]) => t2.toString());
            } }, r2;
          } }, {}, "/proc/self/fd");
        }, createStandardStreams(e, r2, t2) {
          e ? FS.createDevice("/dev", "stdin", e) : FS.symlink("/dev/tty", "/dev/stdin"), r2 ? FS.createDevice("/dev", "stdout", null, r2) : FS.symlink("/dev/tty", "/dev/stdout"), t2 ? FS.createDevice("/dev", "stderr", null, t2) : FS.symlink("/dev/tty1", "/dev/stderr");
          var n3 = FS.open("/dev/stdin", 0), o5 = FS.open("/dev/stdout", 1), a2 = FS.open("/dev/stderr", 1);
        }, staticInit() {
          FS.nameTable = new Array(4096), FS.mount(MEMFS, {}, "/"), FS.createDefaultDirectories(), FS.createDefaultDevices(), FS.createSpecialDirectories(), FS.filesystems = { MEMFS, PROXYFS };
        }, init(e, r2, t2) {
          FS.initialized = true, e ?? (e = Module.stdin), r2 ?? (r2 = Module.stdout), t2 ?? (t2 = Module.stderr), FS.createStandardStreams(e, r2, t2);
        }, quit() {
          FS.initialized = false, _fflush(0);
          for (var e = 0; e < FS.streams.length; e++) {
            var r2 = FS.streams[e];
            r2 && FS.close(r2);
          }
        }, findObject(e, r2) {
          var t2 = FS.analyzePath(e, r2);
          return t2.exists ? t2.object : null;
        }, analyzePath(e, r2) {
          try {
            var t2 = FS.lookupPath(e, { follow: !r2 });
            e = t2.path;
          } catch {
          }
          var n3 = { isRoot: false, exists: false, error: 0, name: null, path: null, object: null, parentExists: false, parentPath: null, parentObject: null };
          try {
            var t2 = FS.lookupPath(e, { parent: true });
            n3.parentExists = true, n3.parentPath = t2.path, n3.parentObject = t2.node, n3.name = PATH.basename(e), t2 = FS.lookupPath(e, { follow: !r2 }), n3.exists = true, n3.path = t2.path, n3.object = t2.node, n3.name = t2.node.name, n3.isRoot = t2.path === "/";
          } catch (o5) {
            n3.error = o5.errno;
          }
          return n3;
        }, createPath(e, r2, t2, n3) {
          e = typeof e == "string" ? e : FS.getPath(e);
          for (var o5 = r2.split("/").reverse(); o5.length; ) {
            var a2 = o5.pop();
            if (a2) {
              var s5 = PATH.join2(e, a2);
              try {
                FS.mkdir(s5);
              } catch {
              }
              e = s5;
            }
          }
          return s5;
        }, createFile(e, r2, t2, n3, o5) {
          var a2 = PATH.join2(typeof e == "string" ? e : FS.getPath(e), r2), s5 = FS_getMode(n3, o5);
          return FS.create(a2, s5);
        }, createDataFile(e, r2, t2, n3, o5, a2) {
          var s5 = r2;
          e && (e = typeof e == "string" ? e : FS.getPath(e), s5 = r2 ? PATH.join2(e, r2) : e);
          var l2 = FS_getMode(n3, o5), u3 = FS.create(s5, l2);
          if (t2) {
            if (typeof t2 == "string") {
              for (var d3 = new Array(t2.length), c4 = 0, p5 = t2.length; c4 < p5; ++c4) d3[c4] = t2.charCodeAt(c4);
              t2 = d3;
            }
            FS.chmod(u3, l2 | 146);
            var f5 = FS.open(u3, 577);
            FS.write(f5, t2, 0, t2.length, 0, a2), FS.close(f5), FS.chmod(u3, l2);
          }
        }, createDevice(e, r2, t2, n3) {
          var l2;
          var o5 = PATH.join2(typeof e == "string" ? e : FS.getPath(e), r2), a2 = FS_getMode(!!t2, !!n3);
          (l2 = FS.createDevice).major ?? (l2.major = 64);
          var s5 = FS.makedev(FS.createDevice.major++, 0);
          return FS.registerDevice(s5, { open(u3) {
            u3.seekable = false;
          }, close(u3) {
            n3?.buffer?.length && n3(10);
          }, read(u3, d3, c4, p5, f5) {
            for (var m5 = 0, _5 = 0; _5 < p5; _5++) {
              var g5;
              try {
                g5 = t2();
              } catch {
                throw new FS.ErrnoError(29);
              }
              if (g5 === void 0 && m5 === 0) throw new FS.ErrnoError(6);
              if (g5 == null) break;
              m5++, d3[c4 + _5] = g5;
            }
            return m5 && (u3.node.atime = Date.now()), m5;
          }, write(u3, d3, c4, p5, f5) {
            for (var m5 = 0; m5 < p5; m5++) try {
              n3(d3[c4 + m5]);
            } catch {
              throw new FS.ErrnoError(29);
            }
            return p5 && (u3.node.mtime = u3.node.ctime = Date.now()), m5;
          } }), FS.mkdev(o5, a2, s5);
        }, forceLoadFile(e) {
          if (e.isDevice || e.isFolder || e.link || e.contents) return true;
          if (typeof XMLHttpRequest < "u") throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
          try {
            e.contents = readBinary(e.url), e.usedBytes = e.contents.length;
          } catch {
            throw new FS.ErrnoError(29);
          }
        }, createLazyFile(e, r2, t2, n3, o5) {
          class a2 {
            constructor() {
              P(this, "lengthKnown", false);
              P(this, "chunks", []);
            }
            get(m5) {
              if (!(m5 > this.length - 1 || m5 < 0)) {
                var _5 = m5 % this.chunkSize, g5 = m5 / this.chunkSize | 0;
                return this.getter(g5)[_5];
              }
            }
            setDataGetter(m5) {
              this.getter = m5;
            }
            cacheLength() {
              var m5 = new XMLHttpRequest();
              if (m5.open("HEAD", t2, false), m5.send(null), !(m5.status >= 200 && m5.status < 300 || m5.status === 304)) throw new Error("Couldn't load " + t2 + ". Status: " + m5.status);
              var _5 = Number(m5.getResponseHeader("Content-length")), g5, E3 = (g5 = m5.getResponseHeader("Accept-Ranges")) && g5 === "bytes", y5 = (g5 = m5.getResponseHeader("Content-Encoding")) && g5 === "gzip", A3 = 1024 * 1024;
              E3 || (A3 = _5);
              var S4 = (h2, b4) => {
                if (h2 > b4) throw new Error("invalid range (" + h2 + ", " + b4 + ") or no bytes requested!");
                if (b4 > _5 - 1) throw new Error("only " + _5 + " bytes available! programmer error!");
                var F4 = new XMLHttpRequest();
                if (F4.open("GET", t2, false), _5 !== A3 && F4.setRequestHeader("Range", "bytes=" + h2 + "-" + b4), F4.responseType = "arraybuffer", F4.overrideMimeType && F4.overrideMimeType("text/plain; charset=x-user-defined"), F4.send(null), !(F4.status >= 200 && F4.status < 300 || F4.status === 304)) throw new Error("Couldn't load " + t2 + ". Status: " + F4.status);
                return F4.response !== void 0 ? new Uint8Array(F4.response || []) : intArrayFromString(F4.responseText || "", true);
              }, v5 = this;
              v5.setDataGetter((h2) => {
                var b4 = h2 * A3, F4 = (h2 + 1) * A3 - 1;
                if (F4 = Math.min(F4, _5 - 1), typeof v5.chunks[h2] > "u" && (v5.chunks[h2] = S4(b4, F4)), typeof v5.chunks[h2] > "u") throw new Error("doXHR failed!");
                return v5.chunks[h2];
              }), (y5 || !_5) && (A3 = _5 = 1, _5 = this.getter(0).length, A3 = _5, out("LazyFiles on gzip forces download of the whole file when length is accessed")), this._length = _5, this._chunkSize = A3, this.lengthKnown = true;
            }
            get length() {
              return this.lengthKnown || this.cacheLength(), this._length;
            }
            get chunkSize() {
              return this.lengthKnown || this.cacheLength(), this._chunkSize;
            }
          }
          if (typeof XMLHttpRequest < "u") {
            if (!ENVIRONMENT_IS_WORKER) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
            var s5 = new a2(), l2 = { isDevice: false, contents: s5 };
          } else var l2 = { isDevice: false, url: t2 };
          var u3 = FS.createFile(e, r2, l2, n3, o5);
          l2.contents ? u3.contents = l2.contents : l2.url && (u3.contents = null, u3.url = l2.url), Object.defineProperties(u3, { usedBytes: { get: function() {
            return this.contents.length;
          } } });
          var d3 = {}, c4 = Object.keys(u3.stream_ops);
          c4.forEach((f5) => {
            var m5 = u3.stream_ops[f5];
            d3[f5] = (..._5) => (FS.forceLoadFile(u3), m5(..._5));
          });
          function p5(f5, m5, _5, g5, E3) {
            var y5 = f5.node.contents;
            if (E3 >= y5.length) return 0;
            var A3 = Math.min(y5.length - E3, g5);
            if (y5.slice) for (var S4 = 0; S4 < A3; S4++) m5[_5 + S4] = y5[E3 + S4];
            else for (var S4 = 0; S4 < A3; S4++) m5[_5 + S4] = y5.get(E3 + S4);
            return A3;
          }
          return d3.read = (f5, m5, _5, g5, E3) => (FS.forceLoadFile(u3), p5(f5, m5, _5, g5, E3)), d3.mmap = (f5, m5, _5, g5, E3) => {
            FS.forceLoadFile(u3);
            var y5 = mmapAlloc(m5);
            if (!y5) throw new FS.ErrnoError(48);
            return p5(f5, HEAP8, y5, m5, _5), { ptr: y5, allocated: true };
          }, u3.stream_ops = d3, u3;
        } }, SYSCALLS = { DEFAULT_POLLMASK: 5, calculateAt(e, r2, t2) {
          if (PATH.isAbs(r2)) return r2;
          var n3;
          if (e === -100) n3 = FS.cwd();
          else {
            var o5 = SYSCALLS.getStreamFromFD(e);
            n3 = o5.path;
          }
          if (r2.length == 0) {
            if (!t2) throw new FS.ErrnoError(44);
            return n3;
          }
          return n3 + "/" + r2;
        }, doStat(e, r2, t2) {
          var n3 = e(r2);
          HEAP32[t2 >> 2] = n3.dev, HEAP32[t2 + 4 >> 2] = n3.mode, HEAPU32[t2 + 8 >> 2] = n3.nlink, HEAP32[t2 + 12 >> 2] = n3.uid, HEAP32[t2 + 16 >> 2] = n3.gid, HEAP32[t2 + 20 >> 2] = n3.rdev, HEAP64[t2 + 24 >> 3] = BigInt(n3.size), HEAP32[t2 + 32 >> 2] = 4096, HEAP32[t2 + 36 >> 2] = n3.blocks;
          var o5 = n3.atime.getTime(), a2 = n3.mtime.getTime(), s5 = n3.ctime.getTime();
          return HEAP64[t2 + 40 >> 3] = BigInt(Math.floor(o5 / 1e3)), HEAPU32[t2 + 48 >> 2] = o5 % 1e3 * 1e3 * 1e3, HEAP64[t2 + 56 >> 3] = BigInt(Math.floor(a2 / 1e3)), HEAPU32[t2 + 64 >> 2] = a2 % 1e3 * 1e3 * 1e3, HEAP64[t2 + 72 >> 3] = BigInt(Math.floor(s5 / 1e3)), HEAPU32[t2 + 80 >> 2] = s5 % 1e3 * 1e3 * 1e3, HEAP64[t2 + 88 >> 3] = BigInt(n3.ino), 0;
        }, doMsync(e, r2, t2, n3, o5) {
          if (!FS.isFile(r2.node.mode)) throw new FS.ErrnoError(43);
          if (n3 & 2) return 0;
          var a2 = HEAPU8.slice(e, e + t2);
          FS.msync(r2, a2, o5, t2, n3);
        }, getStreamFromFD(e) {
          var r2 = FS.getStreamChecked(e);
          return r2;
        }, varargs: void 0, getStr(e) {
          var r2 = UTF8ToString(e);
          return r2;
        } };
        function ___syscall_chmod(e, r2) {
          try {
            return e = SYSCALLS.getStr(e), FS.chmod(e, r2), 0;
          } catch (t2) {
            if (typeof FS > "u" || t2.name !== "ErrnoError") throw t2;
            return -t2.errno;
          }
        }
        ___syscall_chmod.sig = "ipi";
        function ___syscall_dup3(e, r2, t2) {
          try {
            var n3 = SYSCALLS.getStreamFromFD(e);
            if (n3.fd === r2) return -28;
            if (r2 < 0 || r2 >= FS.MAX_OPEN_FDS) return -8;
            var o5 = FS.getStream(r2);
            return o5 && FS.close(o5), FS.dupStream(n3, r2).fd;
          } catch (a2) {
            if (typeof FS > "u" || a2.name !== "ErrnoError") throw a2;
            return -a2.errno;
          }
        }
        ___syscall_dup3.sig = "iiii";
        function ___syscall_faccessat(e, r2, t2, n3) {
          try {
            if (r2 = SYSCALLS.getStr(r2), r2 = SYSCALLS.calculateAt(e, r2), t2 & -8) return -28;
            var o5 = FS.lookupPath(r2, { follow: true }), a2 = o5.node;
            if (!a2) return -44;
            var s5 = "";
            return t2 & 4 && (s5 += "r"), t2 & 2 && (s5 += "w"), t2 & 1 && (s5 += "x"), s5 && FS.nodePermissions(a2, s5) ? -2 : 0;
          } catch (l2) {
            if (typeof FS > "u" || l2.name !== "ErrnoError") throw l2;
            return -l2.errno;
          }
        }
        ___syscall_faccessat.sig = "iipii";
        var ___syscall_fadvise64 = (e, r2, t2, n3) => 0;
        ___syscall_fadvise64.sig = "iijji";
        var syscallGetVarargI = () => {
          var e = HEAP32[+SYSCALLS.varargs >> 2];
          return SYSCALLS.varargs += 4, e;
        }, syscallGetVarargP = syscallGetVarargI;
        function ___syscall_fcntl64(e, r2, t2) {
          SYSCALLS.varargs = t2;
          try {
            var n3 = SYSCALLS.getStreamFromFD(e);
            switch (r2) {
              case 0: {
                var o5 = syscallGetVarargI();
                if (o5 < 0) return -28;
                for (; FS.streams[o5]; ) o5++;
                var a2;
                return a2 = FS.dupStream(n3, o5), a2.fd;
              }
              case 1:
              case 2:
                return 0;
              case 3:
                return n3.flags;
              case 4: {
                var o5 = syscallGetVarargI();
                return n3.flags |= o5, 0;
              }
              case 12: {
                var o5 = syscallGetVarargP(), s5 = 0;
                return HEAP16[o5 + s5 >> 1] = 2, 0;
              }
              case 13:
              case 14:
                return 0;
            }
            return -28;
          } catch (l2) {
            if (typeof FS > "u" || l2.name !== "ErrnoError") throw l2;
            return -l2.errno;
          }
        }
        ___syscall_fcntl64.sig = "iiip";
        function ___syscall_fstat64(e, r2) {
          try {
            var t2 = SYSCALLS.getStreamFromFD(e);
            return SYSCALLS.doStat(FS.stat, t2.path, r2);
          } catch (n3) {
            if (typeof FS > "u" || n3.name !== "ErrnoError") throw n3;
            return -n3.errno;
          }
        }
        ___syscall_fstat64.sig = "iip";
        var stringToUTF8 = (e, r2, t2) => stringToUTF8Array(e, HEAPU8, r2, t2);
        function ___syscall_getcwd(e, r2) {
          try {
            if (r2 === 0) return -28;
            var t2 = FS.cwd(), n3 = lengthBytesUTF8(t2) + 1;
            return r2 < n3 ? -68 : (stringToUTF8(t2, e, r2), n3);
          } catch (o5) {
            if (typeof FS > "u" || o5.name !== "ErrnoError") throw o5;
            return -o5.errno;
          }
        }
        ___syscall_getcwd.sig = "ipp";
        function ___syscall_getdents64(e, r2, t2) {
          try {
            var n3 = SYSCALLS.getStreamFromFD(e);
            n3.getdents || (n3.getdents = FS.readdir(n3.path));
            for (var o5 = 280, a2 = 0, s5 = FS.llseek(n3, 0, 1), l2 = Math.floor(s5 / o5), u3 = Math.min(n3.getdents.length, l2 + Math.floor(t2 / o5)), d3 = l2; d3 < u3; d3++) {
              var c4, p5, f5 = n3.getdents[d3];
              if (f5 === ".") c4 = n3.node.id, p5 = 4;
              else if (f5 === "..") {
                var m5 = FS.lookupPath(n3.path, { parent: true });
                c4 = m5.node.id, p5 = 4;
              } else {
                var _5;
                try {
                  _5 = FS.lookupNode(n3.node, f5);
                } catch (g5) {
                  if (g5?.errno === 28) continue;
                  throw g5;
                }
                c4 = _5.id, p5 = FS.isChrdev(_5.mode) ? 2 : FS.isDir(_5.mode) ? 4 : FS.isLink(_5.mode) ? 10 : 8;
              }
              HEAP64[r2 + a2 >> 3] = BigInt(c4), HEAP64[r2 + a2 + 8 >> 3] = BigInt((d3 + 1) * o5), HEAP16[r2 + a2 + 16 >> 1] = 280, HEAP8[r2 + a2 + 18] = p5, stringToUTF8(f5, r2 + a2 + 19, 256), a2 += o5;
            }
            return FS.llseek(n3, d3 * o5, 0), a2;
          } catch (g5) {
            if (typeof FS > "u" || g5.name !== "ErrnoError") throw g5;
            return -g5.errno;
          }
        }
        ___syscall_getdents64.sig = "iipp";
        function ___syscall_ioctl(e, r2, t2) {
          SYSCALLS.varargs = t2;
          try {
            var n3 = SYSCALLS.getStreamFromFD(e);
            switch (r2) {
              case 21509:
                return n3.tty ? 0 : -59;
              case 21505: {
                if (!n3.tty) return -59;
                if (n3.tty.ops.ioctl_tcgets) {
                  var o5 = n3.tty.ops.ioctl_tcgets(n3), a2 = syscallGetVarargP();
                  HEAP32[a2 >> 2] = o5.c_iflag || 0, HEAP32[a2 + 4 >> 2] = o5.c_oflag || 0, HEAP32[a2 + 8 >> 2] = o5.c_cflag || 0, HEAP32[a2 + 12 >> 2] = o5.c_lflag || 0;
                  for (var s5 = 0; s5 < 32; s5++) HEAP8[a2 + s5 + 17] = o5.c_cc[s5] || 0;
                  return 0;
                }
                return 0;
              }
              case 21510:
              case 21511:
              case 21512:
                return n3.tty ? 0 : -59;
              case 21506:
              case 21507:
              case 21508: {
                if (!n3.tty) return -59;
                if (n3.tty.ops.ioctl_tcsets) {
                  for (var a2 = syscallGetVarargP(), l2 = HEAP32[a2 >> 2], u3 = HEAP32[a2 + 4 >> 2], d3 = HEAP32[a2 + 8 >> 2], c4 = HEAP32[a2 + 12 >> 2], p5 = [], s5 = 0; s5 < 32; s5++) p5.push(HEAP8[a2 + s5 + 17]);
                  return n3.tty.ops.ioctl_tcsets(n3.tty, r2, { c_iflag: l2, c_oflag: u3, c_cflag: d3, c_lflag: c4, c_cc: p5 });
                }
                return 0;
              }
              case 21519: {
                if (!n3.tty) return -59;
                var a2 = syscallGetVarargP();
                return HEAP32[a2 >> 2] = 0, 0;
              }
              case 21520:
                return n3.tty ? -28 : -59;
              case 21531: {
                var a2 = syscallGetVarargP();
                return FS.ioctl(n3, r2, a2);
              }
              case 21523: {
                if (!n3.tty) return -59;
                if (n3.tty.ops.ioctl_tiocgwinsz) {
                  var f5 = n3.tty.ops.ioctl_tiocgwinsz(n3.tty), a2 = syscallGetVarargP();
                  HEAP16[a2 >> 1] = f5[0], HEAP16[a2 + 2 >> 1] = f5[1];
                }
                return 0;
              }
              case 21524:
                return n3.tty ? 0 : -59;
              case 21515:
                return n3.tty ? 0 : -59;
              default:
                return -28;
            }
          } catch (m5) {
            if (typeof FS > "u" || m5.name !== "ErrnoError") throw m5;
            return -m5.errno;
          }
        }
        ___syscall_ioctl.sig = "iiip";
        function ___syscall_lstat64(e, r2) {
          try {
            return e = SYSCALLS.getStr(e), SYSCALLS.doStat(FS.lstat, e, r2);
          } catch (t2) {
            if (typeof FS > "u" || t2.name !== "ErrnoError") throw t2;
            return -t2.errno;
          }
        }
        ___syscall_lstat64.sig = "ipp";
        function ___syscall_mkdirat(e, r2, t2) {
          try {
            return r2 = SYSCALLS.getStr(r2), r2 = SYSCALLS.calculateAt(e, r2), FS.mkdir(r2, t2, 0), 0;
          } catch (n3) {
            if (typeof FS > "u" || n3.name !== "ErrnoError") throw n3;
            return -n3.errno;
          }
        }
        ___syscall_mkdirat.sig = "iipi";
        function ___syscall_newfstatat(e, r2, t2, n3) {
          try {
            r2 = SYSCALLS.getStr(r2);
            var o5 = n3 & 256, a2 = n3 & 4096;
            return n3 = n3 & -6401, r2 = SYSCALLS.calculateAt(e, r2, a2), SYSCALLS.doStat(o5 ? FS.lstat : FS.stat, r2, t2);
          } catch (s5) {
            if (typeof FS > "u" || s5.name !== "ErrnoError") throw s5;
            return -s5.errno;
          }
        }
        ___syscall_newfstatat.sig = "iippi";
        function ___syscall_openat(e, r2, t2, n3) {
          SYSCALLS.varargs = n3;
          try {
            r2 = SYSCALLS.getStr(r2), r2 = SYSCALLS.calculateAt(e, r2);
            var o5 = n3 ? syscallGetVarargI() : 0;
            return FS.open(r2, t2, o5).fd;
          } catch (a2) {
            if (typeof FS > "u" || a2.name !== "ErrnoError") throw a2;
            return -a2.errno;
          }
        }
        ___syscall_openat.sig = "iipip";
        function ___syscall_readlinkat(e, r2, t2, n3) {
          try {
            if (r2 = SYSCALLS.getStr(r2), r2 = SYSCALLS.calculateAt(e, r2), n3 <= 0) return -28;
            var o5 = FS.readlink(r2), a2 = Math.min(n3, lengthBytesUTF8(o5)), s5 = HEAP8[t2 + a2];
            return stringToUTF8(o5, t2, n3 + 1), HEAP8[t2 + a2] = s5, a2;
          } catch (l2) {
            if (typeof FS > "u" || l2.name !== "ErrnoError") throw l2;
            return -l2.errno;
          }
        }
        ___syscall_readlinkat.sig = "iippp";
        function ___syscall_rmdir(e) {
          try {
            return e = SYSCALLS.getStr(e), FS.rmdir(e), 0;
          } catch (r2) {
            if (typeof FS > "u" || r2.name !== "ErrnoError") throw r2;
            return -r2.errno;
          }
        }
        ___syscall_rmdir.sig = "ip";
        function ___syscall_stat64(e, r2) {
          try {
            return e = SYSCALLS.getStr(e), SYSCALLS.doStat(FS.stat, e, r2);
          } catch (t2) {
            if (typeof FS > "u" || t2.name !== "ErrnoError") throw t2;
            return -t2.errno;
          }
        }
        ___syscall_stat64.sig = "ipp";
        function ___syscall_symlinkat(e, r2, t2) {
          try {
            return e = SYSCALLS.getStr(e), t2 = SYSCALLS.getStr(t2), t2 = SYSCALLS.calculateAt(r2, t2), FS.symlink(e, t2), 0;
          } catch (n3) {
            if (typeof FS > "u" || n3.name !== "ErrnoError") throw n3;
            return -n3.errno;
          }
        }
        ___syscall_symlinkat.sig = "ipip";
        function ___syscall_unlinkat(e, r2, t2) {
          try {
            return r2 = SYSCALLS.getStr(r2), r2 = SYSCALLS.calculateAt(e, r2), t2 === 0 ? FS.unlink(r2) : t2 === 512 ? FS.rmdir(r2) : abort("Invalid flags passed to unlinkat"), 0;
          } catch (n3) {
            if (typeof FS > "u" || n3.name !== "ErrnoError") throw n3;
            return -n3.errno;
          }
        }
        ___syscall_unlinkat.sig = "iipi";
        var ___table_base = new WebAssembly.Global({ value: "i32", mutable: false }, 1), __abort_js = () => abort("");
        __abort_js.sig = "v";
        var runtimeKeepaliveCounter = 0, __emscripten_runtime_keepalive_clear = () => {
          noExitRuntime = false, runtimeKeepaliveCounter = 0;
        };
        __emscripten_runtime_keepalive_clear.sig = "v";
        var __emscripten_throw_longjmp = () => {
          throw 1 / 0;
        };
        __emscripten_throw_longjmp.sig = "v";
        var isLeapYear = (e) => e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0), MONTH_DAYS_LEAP_CUMULATIVE = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335], MONTH_DAYS_REGULAR_CUMULATIVE = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], ydayFromDate = (e) => {
          var r2 = isLeapYear(e.getFullYear()), t2 = r2 ? MONTH_DAYS_LEAP_CUMULATIVE : MONTH_DAYS_REGULAR_CUMULATIVE, n3 = t2[e.getMonth()] + e.getDate() - 1;
          return n3;
        }, INT53_MAX = 9007199254740992, INT53_MIN = -9007199254740992, bigintToI53Checked = (e) => e < INT53_MIN || e > INT53_MAX ? NaN : Number(e);
        function __localtime_js(e, r2) {
          e = bigintToI53Checked(e);
          var t2 = new Date(e * 1e3);
          HEAP32[r2 >> 2] = t2.getSeconds(), HEAP32[r2 + 4 >> 2] = t2.getMinutes(), HEAP32[r2 + 8 >> 2] = t2.getHours(), HEAP32[r2 + 12 >> 2] = t2.getDate(), HEAP32[r2 + 16 >> 2] = t2.getMonth(), HEAP32[r2 + 20 >> 2] = t2.getFullYear() - 1900, HEAP32[r2 + 24 >> 2] = t2.getDay();
          var n3 = ydayFromDate(t2) | 0;
          HEAP32[r2 + 28 >> 2] = n3, HEAP32[r2 + 36 >> 2] = -(t2.getTimezoneOffset() * 60);
          var o5 = new Date(t2.getFullYear(), 0, 1), a2 = new Date(t2.getFullYear(), 6, 1).getTimezoneOffset(), s5 = o5.getTimezoneOffset(), l2 = (a2 != s5 && t2.getTimezoneOffset() == Math.min(s5, a2)) | 0;
          HEAP32[r2 + 32 >> 2] = l2;
        }
        __localtime_js.sig = "vjp";
        var __mktime_js = function(e) {
          var r2 = (() => {
            var t2 = new Date(HEAP32[e + 20 >> 2] + 1900, HEAP32[e + 16 >> 2], HEAP32[e + 12 >> 2], HEAP32[e + 8 >> 2], HEAP32[e + 4 >> 2], HEAP32[e >> 2], 0), n3 = HEAP32[e + 32 >> 2], o5 = t2.getTimezoneOffset(), a2 = new Date(t2.getFullYear(), 0, 1), s5 = new Date(t2.getFullYear(), 6, 1).getTimezoneOffset(), l2 = a2.getTimezoneOffset(), u3 = Math.min(l2, s5);
            if (n3 < 0) HEAP32[e + 32 >> 2] = +(s5 != l2 && u3 == o5);
            else if (n3 > 0 != (u3 == o5)) {
              var d3 = Math.max(l2, s5), c4 = n3 > 0 ? u3 : d3;
              t2.setTime(t2.getTime() + (c4 - o5) * 6e4);
            }
            HEAP32[e + 24 >> 2] = t2.getDay();
            var p5 = ydayFromDate(t2) | 0;
            HEAP32[e + 28 >> 2] = p5, HEAP32[e >> 2] = t2.getSeconds(), HEAP32[e + 4 >> 2] = t2.getMinutes(), HEAP32[e + 8 >> 2] = t2.getHours(), HEAP32[e + 12 >> 2] = t2.getDate(), HEAP32[e + 16 >> 2] = t2.getMonth(), HEAP32[e + 20 >> 2] = t2.getYear();
            var f5 = t2.getTime();
            return isNaN(f5) ? -1 : f5 / 1e3;
          })();
          return BigInt(r2);
        };
        __mktime_js.sig = "jp";
        var timers = {}, handleException = (e) => {
          if (e instanceof ExitStatus || e == "unwind") return EXITSTATUS;
          quit_(1, e);
        }, keepRuntimeAlive = () => noExitRuntime || runtimeKeepaliveCounter > 0, _proc_exit = (e) => {
          EXITSTATUS = e, keepRuntimeAlive() || (Module.onExit?.(e), ABORT = true), quit_(e, new ExitStatus(e));
        };
        _proc_exit.sig = "vi";
        var exitJS = (e, r2) => {
          EXITSTATUS = e, keepRuntimeAlive() || exitRuntime(), _proc_exit(e);
        }, _exit = exitJS;
        _exit.sig = "vi";
        var maybeExit = () => {
          if (!runtimeExited && !keepRuntimeAlive()) try {
            _exit(EXITSTATUS);
          } catch (e) {
            handleException(e);
          }
        }, callUserCallback = (e) => {
          if (!(runtimeExited || ABORT)) try {
            e(), maybeExit();
          } catch (r2) {
            handleException(r2);
          }
        }, _emscripten_get_now = () => performance.now();
        _emscripten_get_now.sig = "d";
        var __setitimer_js = (e, r2) => {
          if (timers[e] && (clearTimeout(timers[e].id), delete timers[e]), !r2) return 0;
          var t2 = setTimeout(() => {
            delete timers[e], callUserCallback(() => __emscripten_timeout(e, _emscripten_get_now()));
          }, r2);
          return timers[e] = { id: t2, timeout_ms: r2 }, 0;
        };
        __setitimer_js.sig = "iid";
        var __tzset_js = (e, r2, t2, n3) => {
          var o5 = (/* @__PURE__ */ new Date()).getFullYear(), a2 = new Date(o5, 0, 1), s5 = new Date(o5, 6, 1), l2 = a2.getTimezoneOffset(), u3 = s5.getTimezoneOffset(), d3 = Math.max(l2, u3);
          HEAPU32[e >> 2] = d3 * 60, HEAP32[r2 >> 2] = +(l2 != u3);
          var c4 = (m5) => {
            var _5 = m5 >= 0 ? "-" : "+", g5 = Math.abs(m5), E3 = String(Math.floor(g5 / 60)).padStart(2, "0"), y5 = String(g5 % 60).padStart(2, "0");
            return `UTC${_5}${E3}${y5}`;
          }, p5 = c4(l2), f5 = c4(u3);
          u3 < l2 ? (stringToUTF8(p5, t2, 17), stringToUTF8(f5, n3, 17)) : (stringToUTF8(p5, n3, 17), stringToUTF8(f5, t2, 17));
        };
        __tzset_js.sig = "vpppp";
        var _emscripten_date_now = () => Date.now();
        _emscripten_date_now.sig = "d";
        var getHeapMax = () => 2147483648, growMemory = (e) => {
          var r2 = wasmMemory.buffer, t2 = (e - r2.byteLength + 65535) / 65536 | 0;
          try {
            return wasmMemory.grow(t2), updateMemoryViews(), 1;
          } catch {
          }
        }, _emscripten_resize_heap = (e) => {
          var r2 = HEAPU8.length;
          e >>>= 0;
          var t2 = getHeapMax();
          if (e > t2) return false;
          for (var n3 = 1; n3 <= 4; n3 *= 2) {
            var o5 = r2 * (1 + 0.2 / n3);
            o5 = Math.min(o5, e + 100663296);
            var a2 = Math.min(t2, alignMemory(Math.max(e, o5), 65536)), s5 = growMemory(a2);
            if (s5) return true;
          }
          return false;
        };
        _emscripten_resize_heap.sig = "ip";
        var ENV = {}, getExecutableName = () => thisProgram || "./this.program", getEnvStrings = () => {
          if (!getEnvStrings.strings) {
            var e = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", r2 = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: e, _: getExecutableName() };
            for (var t2 in ENV) ENV[t2] === void 0 ? delete r2[t2] : r2[t2] = ENV[t2];
            var n3 = [];
            for (var t2 in r2) n3.push(`${t2}=${r2[t2]}`);
            getEnvStrings.strings = n3;
          }
          return getEnvStrings.strings;
        }, stringToAscii = (e, r2) => {
          for (var t2 = 0; t2 < e.length; ++t2) HEAP8[r2++] = e.charCodeAt(t2);
          HEAP8[r2] = 0;
        }, _environ_get = (e, r2) => {
          var t2 = 0;
          return getEnvStrings().forEach((n3, o5) => {
            var a2 = r2 + t2;
            HEAPU32[e + o5 * 4 >> 2] = a2, stringToAscii(n3, a2), t2 += n3.length + 1;
          }), 0;
        };
        _environ_get.sig = "ipp";
        var _environ_sizes_get = (e, r2) => {
          var t2 = getEnvStrings();
          HEAPU32[e >> 2] = t2.length;
          var n3 = 0;
          return t2.forEach((o5) => n3 += o5.length + 1), HEAPU32[r2 >> 2] = n3, 0;
        };
        _environ_sizes_get.sig = "ipp";
        function _fd_close(e) {
          try {
            var r2 = SYSCALLS.getStreamFromFD(e);
            return FS.close(r2), 0;
          } catch (t2) {
            if (typeof FS > "u" || t2.name !== "ErrnoError") throw t2;
            return t2.errno;
          }
        }
        _fd_close.sig = "ii";
        function _fd_fdstat_get(e, r2) {
          try {
            var t2 = 0, n3 = 0, o5 = 0, a2 = SYSCALLS.getStreamFromFD(e), s5 = a2.tty ? 2 : FS.isDir(a2.mode) ? 3 : FS.isLink(a2.mode) ? 7 : 4;
            return HEAP8[r2] = s5, HEAP16[r2 + 2 >> 1] = o5, HEAP64[r2 + 8 >> 3] = BigInt(t2), HEAP64[r2 + 16 >> 3] = BigInt(n3), 0;
          } catch (l2) {
            if (typeof FS > "u" || l2.name !== "ErrnoError") throw l2;
            return l2.errno;
          }
        }
        _fd_fdstat_get.sig = "iip";
        var doReadv = (e, r2, t2, n3) => {
          for (var o5 = 0, a2 = 0; a2 < t2; a2++) {
            var s5 = HEAPU32[r2 >> 2], l2 = HEAPU32[r2 + 4 >> 2];
            r2 += 8;
            var u3 = FS.read(e, HEAP8, s5, l2, n3);
            if (u3 < 0) return -1;
            if (o5 += u3, u3 < l2) break;
            typeof n3 < "u" && (n3 += u3);
          }
          return o5;
        };
        function _fd_read(e, r2, t2, n3) {
          try {
            var o5 = SYSCALLS.getStreamFromFD(e), a2 = doReadv(o5, r2, t2);
            return HEAPU32[n3 >> 2] = a2, 0;
          } catch (s5) {
            if (typeof FS > "u" || s5.name !== "ErrnoError") throw s5;
            return s5.errno;
          }
        }
        _fd_read.sig = "iippp";
        function _fd_seek(e, r2, t2, n3) {
          r2 = bigintToI53Checked(r2);
          try {
            if (isNaN(r2)) return 61;
            var o5 = SYSCALLS.getStreamFromFD(e);
            return FS.llseek(o5, r2, t2), HEAP64[n3 >> 3] = BigInt(o5.position), o5.getdents && r2 === 0 && t2 === 0 && (o5.getdents = null), 0;
          } catch (a2) {
            if (typeof FS > "u" || a2.name !== "ErrnoError") throw a2;
            return a2.errno;
          }
        }
        _fd_seek.sig = "iijip";
        function _fd_sync(e) {
          try {
            var r2 = SYSCALLS.getStreamFromFD(e);
            return r2.stream_ops?.fsync ? r2.stream_ops.fsync(r2) : 0;
          } catch (t2) {
            if (typeof FS > "u" || t2.name !== "ErrnoError") throw t2;
            return t2.errno;
          }
        }
        _fd_sync.sig = "ii";
        var doWritev = (e, r2, t2, n3) => {
          for (var o5 = 0, a2 = 0; a2 < t2; a2++) {
            var s5 = HEAPU32[r2 >> 2], l2 = HEAPU32[r2 + 4 >> 2];
            r2 += 8;
            var u3 = FS.write(e, HEAP8, s5, l2, n3);
            if (u3 < 0) return -1;
            if (o5 += u3, u3 < l2) break;
            typeof n3 < "u" && (n3 += u3);
          }
          return o5;
        };
        function _fd_write(e, r2, t2, n3) {
          try {
            var o5 = SYSCALLS.getStreamFromFD(e), a2 = doWritev(o5, r2, t2);
            return HEAPU32[n3 >> 2] = a2, 0;
          } catch (s5) {
            if (typeof FS > "u" || s5.name !== "ErrnoError") throw s5;
            return s5.errno;
          }
        }
        _fd_write.sig = "iippp";
        var inetPton4 = (e) => {
          for (var r2 = e.split("."), t2 = 0; t2 < 4; t2++) {
            var n3 = Number(r2[t2]);
            if (isNaN(n3)) return null;
            r2[t2] = n3;
          }
          return (r2[0] | r2[1] << 8 | r2[2] << 16 | r2[3] << 24) >>> 0;
        }, jstoi_q = (e) => parseInt(e), inetPton6 = (e) => {
          var r2, t2, n3, o5, a2 = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i, s5 = [];
          if (!a2.test(e)) return null;
          if (e === "::") return [0, 0, 0, 0, 0, 0, 0, 0];
          for (e.startsWith("::") ? e = e.replace("::", "Z:") : e = e.replace("::", ":Z:"), e.indexOf(".") > 0 ? (e = e.replace(new RegExp("[.]", "g"), ":"), r2 = e.split(":"), r2[r2.length - 4] = jstoi_q(r2[r2.length - 4]) + jstoi_q(r2[r2.length - 3]) * 256, r2[r2.length - 3] = jstoi_q(r2[r2.length - 2]) + jstoi_q(r2[r2.length - 1]) * 256, r2 = r2.slice(0, r2.length - 2)) : r2 = e.split(":"), n3 = 0, o5 = 0, t2 = 0; t2 < r2.length; t2++) if (typeof r2[t2] == "string") if (r2[t2] === "Z") {
            for (o5 = 0; o5 < 8 - r2.length + 1; o5++) s5[t2 + o5] = 0;
            n3 = o5 - 1;
          } else s5[t2 + n3] = _htons(parseInt(r2[t2], 16));
          else s5[t2 + n3] = r2[t2];
          return [s5[1] << 16 | s5[0], s5[3] << 16 | s5[2], s5[5] << 16 | s5[4], s5[7] << 16 | s5[6]];
        }, DNS = { address_map: { id: 1, addrs: {}, names: {} }, lookup_name(e) {
          var r2 = inetPton4(e);
          if (r2 !== null || (r2 = inetPton6(e), r2 !== null)) return e;
          var t2;
          if (DNS.address_map.addrs[e]) t2 = DNS.address_map.addrs[e];
          else {
            var n3 = DNS.address_map.id++;
            assert(n3 < 65535, "exceeded max address mappings of 65535"), t2 = "172.29." + (n3 & 255) + "." + (n3 & 65280), DNS.address_map.names[t2] = e, DNS.address_map.addrs[e] = t2;
          }
          return t2;
        }, lookup_addr(e) {
          return DNS.address_map.names[e] ? DNS.address_map.names[e] : null;
        } }, inetNtop4 = (e) => (e & 255) + "." + (e >> 8 & 255) + "." + (e >> 16 & 255) + "." + (e >> 24 & 255), inetNtop6 = (e) => {
          var r2 = "", t2 = 0, n3 = 0, o5 = 0, a2 = 0, s5 = 0, l2 = 0, u3 = [e[0] & 65535, e[0] >> 16, e[1] & 65535, e[1] >> 16, e[2] & 65535, e[2] >> 16, e[3] & 65535, e[3] >> 16], d3 = true, c4 = "";
          for (l2 = 0; l2 < 5; l2++) if (u3[l2] !== 0) {
            d3 = false;
            break;
          }
          if (d3) {
            if (c4 = inetNtop4(u3[6] | u3[7] << 16), u3[5] === -1) return r2 = "::ffff:", r2 += c4, r2;
            if (u3[5] === 0) return r2 = "::", c4 === "0.0.0.0" && (c4 = ""), c4 === "0.0.0.1" && (c4 = "1"), r2 += c4, r2;
          }
          for (t2 = 0; t2 < 8; t2++) u3[t2] === 0 && (t2 - o5 > 1 && (s5 = 0), o5 = t2, s5++), s5 > n3 && (n3 = s5, a2 = t2 - n3 + 1);
          for (t2 = 0; t2 < 8; t2++) {
            if (n3 > 1 && u3[t2] === 0 && t2 >= a2 && t2 < a2 + n3) {
              t2 === a2 && (r2 += ":", a2 === 0 && (r2 += ":"));
              continue;
            }
            r2 += Number(_ntohs(u3[t2] & 65535)).toString(16), r2 += t2 < 7 ? ":" : "";
          }
          return r2;
        }, writeSockaddr = (e, r2, t2, n3, o5) => {
          switch (r2) {
            case 2:
              t2 = inetPton4(t2), zeroMemory(e, 16), o5 && (HEAP32[o5 >> 2] = 16), HEAP16[e >> 1] = r2, HEAP32[e + 4 >> 2] = t2, HEAP16[e + 2 >> 1] = _htons(n3);
              break;
            case 10:
              t2 = inetPton6(t2), zeroMemory(e, 28), o5 && (HEAP32[o5 >> 2] = 28), HEAP32[e >> 2] = r2, HEAP32[e + 8 >> 2] = t2[0], HEAP32[e + 12 >> 2] = t2[1], HEAP32[e + 16 >> 2] = t2[2], HEAP32[e + 20 >> 2] = t2[3], HEAP16[e + 2 >> 1] = _htons(n3);
              break;
            default:
              return 5;
          }
          return 0;
        }, _getaddrinfo = (e, r2, t2, n3) => {
          var o5 = 0, a2 = 0, s5 = 0, l2 = 0, u3 = 0, d3 = 0, c4;
          function p5(f5, m5, _5, g5, E3, y5) {
            var A3, S4, v5, h2;
            return S4 = f5 === 10 ? 28 : 16, E3 = f5 === 10 ? inetNtop6(E3) : inetNtop4(E3), A3 = _malloc(S4), h2 = writeSockaddr(A3, f5, E3, y5), assert(!h2), v5 = _malloc(32), HEAP32[v5 + 4 >> 2] = f5, HEAP32[v5 + 8 >> 2] = m5, HEAP32[v5 + 12 >> 2] = _5, HEAPU32[v5 + 24 >> 2] = g5, HEAPU32[v5 + 20 >> 2] = A3, f5 === 10 ? HEAP32[v5 + 16 >> 2] = 28 : HEAP32[v5 + 16 >> 2] = 16, HEAP32[v5 + 28 >> 2] = 0, v5;
          }
          if (t2 && (s5 = HEAP32[t2 >> 2], l2 = HEAP32[t2 + 4 >> 2], u3 = HEAP32[t2 + 8 >> 2], d3 = HEAP32[t2 + 12 >> 2]), u3 && !d3 && (d3 = u3 === 2 ? 17 : 6), !u3 && d3 && (u3 = d3 === 17 ? 2 : 1), d3 === 0 && (d3 = 6), u3 === 0 && (u3 = 1), !e && !r2) return -2;
          if (s5 & -1088 || t2 !== 0 && HEAP32[t2 >> 2] & 2 && !e) return -1;
          if (s5 & 32) return -2;
          if (u3 !== 0 && u3 !== 1 && u3 !== 2) return -7;
          if (l2 !== 0 && l2 !== 2 && l2 !== 10) return -6;
          if (r2 && (r2 = UTF8ToString(r2), a2 = parseInt(r2, 10), isNaN(a2))) return s5 & 1024 ? -2 : -8;
          if (!e) return l2 === 0 && (l2 = 2), s5 & 1 || (l2 === 2 ? o5 = _htonl(2130706433) : o5 = [0, 0, 0, _htonl(1)]), c4 = p5(l2, u3, d3, null, o5, a2), HEAPU32[n3 >> 2] = c4, 0;
          if (e = UTF8ToString(e), o5 = inetPton4(e), o5 !== null) if (l2 === 0 || l2 === 2) l2 = 2;
          else if (l2 === 10 && s5 & 8) o5 = [0, 0, _htonl(65535), o5], l2 = 10;
          else return -2;
          else if (o5 = inetPton6(e), o5 !== null) if (l2 === 0 || l2 === 10) l2 = 10;
          else return -2;
          return o5 != null ? (c4 = p5(l2, u3, d3, e, o5, a2), HEAPU32[n3 >> 2] = c4, 0) : s5 & 4 ? -2 : (e = DNS.lookup_name(e), o5 = inetPton4(e), l2 === 0 ? l2 = 2 : l2 === 10 && (o5 = [0, 0, _htonl(65535), o5]), c4 = p5(l2, u3, d3, null, o5, a2), HEAPU32[n3 >> 2] = c4, 0);
        };
        _getaddrinfo.sig = "ipppp";
        var stackAlloc = (e) => __emscripten_stack_alloc(e), stringToUTF8OnStack = (e) => {
          var r2 = lengthBytesUTF8(e) + 1, t2 = stackAlloc(r2);
          return stringToUTF8(e, t2, r2), t2;
        }, removeFunction = (e) => {
          functionsInTableMap.delete(getWasmTableEntry(e)), setWasmTableEntry(e, null), freeTableIndexes.push(e);
        }, stringToNewUTF8 = (e) => {
          var r2 = lengthBytesUTF8(e) + 1, t2 = _malloc(r2);
          return t2 && stringToUTF8(e, t2, r2), t2;
        }, FS_createPath = FS.createPath, FS_unlink = (e) => FS.unlink(e), FS_createLazyFile = FS.createLazyFile, FS_createDevice = FS.createDevice;
        registerWasmPlugin(), FS.createPreloadedFile = FS_createPreloadedFile, FS.staticInit(), Module.FS_createPath = FS.createPath, Module.FS_createDataFile = FS.createDataFile, Module.FS_createPreloadedFile = FS.createPreloadedFile, Module.FS_unlink = FS.unlink, Module.FS_createLazyFile = FS.createLazyFile, Module.FS_createDevice = FS.createDevice, MEMFS.doesNotExistError = new FS.ErrnoError(44), MEMFS.doesNotExistError.stack = "<generic error, no stack>";
        var wasmImports = { __call_sighandler: ___call_sighandler, __heap_base: ___heap_base, __indirect_function_table: wasmTable, __memory_base: ___memory_base, __stack_pointer: ___stack_pointer, __syscall_chmod: ___syscall_chmod, __syscall_dup3: ___syscall_dup3, __syscall_faccessat: ___syscall_faccessat, __syscall_fadvise64: ___syscall_fadvise64, __syscall_fcntl64: ___syscall_fcntl64, __syscall_fstat64: ___syscall_fstat64, __syscall_getcwd: ___syscall_getcwd, __syscall_getdents64: ___syscall_getdents64, __syscall_ioctl: ___syscall_ioctl, __syscall_lstat64: ___syscall_lstat64, __syscall_mkdirat: ___syscall_mkdirat, __syscall_newfstatat: ___syscall_newfstatat, __syscall_openat: ___syscall_openat, __syscall_readlinkat: ___syscall_readlinkat, __syscall_rmdir: ___syscall_rmdir, __syscall_stat64: ___syscall_stat64, __syscall_symlinkat: ___syscall_symlinkat, __syscall_unlinkat: ___syscall_unlinkat, __table_base: ___table_base, _abort_js: __abort_js, _emscripten_runtime_keepalive_clear: __emscripten_runtime_keepalive_clear, _emscripten_throw_longjmp: __emscripten_throw_longjmp, _localtime_js: __localtime_js, _mktime_js: __mktime_js, _setitimer_js: __setitimer_js, _tzset_js: __tzset_js, emscripten_date_now: _emscripten_date_now, emscripten_get_now: _emscripten_get_now, emscripten_resize_heap: _emscripten_resize_heap, environ_get: _environ_get, environ_sizes_get: _environ_sizes_get, exit: _exit, fd_close: _fd_close, fd_fdstat_get: _fd_fdstat_get, fd_read: _fd_read, fd_seek: _fd_seek, fd_sync: _fd_sync, fd_write: _fd_write, getaddrinfo: _getaddrinfo, invoke_ii, invoke_iiii, invoke_vii, memory: wasmMemory, proc_exit: _proc_exit }, wasmExports;
        createWasm();
        var ___wasm_call_ctors = () => (___wasm_call_ctors = wasmExports.__wasm_call_ctors)(), _pgl_exit = Module._pgl_exit = (e) => (_pgl_exit = Module._pgl_exit = wasmExports.pgl_exit)(e), ___errno_location = Module.___errno_location = () => (___errno_location = Module.___errno_location = wasmExports.__errno_location)(), _fflush = Module._fflush = (e) => (_fflush = Module._fflush = wasmExports.fflush)(e), _fopen = Module._fopen = (e, r2) => (_fopen = Module._fopen = wasmExports.fopen)(e, r2), _fclose = Module._fclose = (e) => (_fclose = Module._fclose = wasmExports.fclose)(e), _pgl_popen = Module._pgl_popen = (e, r2) => (_pgl_popen = Module._pgl_popen = wasmExports.pgl_popen)(e, r2), _fputs = Module._fputs = (e, r2) => (_fputs = Module._fputs = wasmExports.fputs)(e, r2), _main = Module._main = (e, r2) => (_main = Module._main = wasmExports.__main_argc_argv)(e, r2), _pgl_atexit = Module._pgl_atexit = (e) => (_pgl_atexit = Module._pgl_atexit = wasmExports.pgl_atexit)(e), _pgl_geteuid = Module._pgl_geteuid = () => (_pgl_geteuid = Module._pgl_geteuid = wasmExports.pgl_geteuid)(), _pgl_system = Module._pgl_system = (e) => (_pgl_system = Module._pgl_system = wasmExports.pgl_system)(e), _malloc = (e) => (_malloc = wasmExports.malloc)(e), _calloc = (e, r2) => (_calloc = wasmExports.calloc)(e, r2), _pgl_setsockopt = Module._pgl_setsockopt = (e, r2, t2, n3, o5) => (_pgl_setsockopt = Module._pgl_setsockopt = wasmExports.pgl_setsockopt)(e, r2, t2, n3, o5), _pgl_connect = Module._pgl_connect = (e, r2, t2) => (_pgl_connect = Module._pgl_connect = wasmExports.pgl_connect)(e, r2, t2), _pgl_send = Module._pgl_send = (e, r2, t2, n3) => (_pgl_send = Module._pgl_send = wasmExports.pgl_send)(e, r2, t2, n3), _pgl_recv = Module._pgl_recv = (e, r2, t2, n3) => (_pgl_recv = Module._pgl_recv = wasmExports.pgl_recv)(e, r2, t2, n3), _fgets = Module._fgets = (e, r2, t2) => (_fgets = Module._fgets = wasmExports.fgets)(e, r2, t2), _pgl_getsockopt = Module._pgl_getsockopt = (e, r2, t2, n3, o5) => (_pgl_getsockopt = Module._pgl_getsockopt = wasmExports.pgl_getsockopt)(e, r2, t2, n3, o5), _pgl_getsockname = Module._pgl_getsockname = (e, r2, t2) => (_pgl_getsockname = Module._pgl_getsockname = wasmExports.pgl_getsockname)(e, r2, t2), _pgl_poll = Module._pgl_poll = (e, r2, t2) => (_pgl_poll = Module._pgl_poll = wasmExports.pgl_poll)(e, r2, t2), _clear_setitimer = Module._clear_setitimer = () => (_clear_setitimer = Module._clear_setitimer = wasmExports.clear_setitimer)(), _pgl_longjmp = Module._pgl_longjmp = (e, r2) => (_pgl_longjmp = Module._pgl_longjmp = wasmExports.pgl_longjmp)(e, r2), _pgl_siglongjmp = Module._pgl_siglongjmp = (e, r2) => (_pgl_siglongjmp = Module._pgl_siglongjmp = wasmExports.pgl_siglongjmp)(e, r2), _pgl_set_system_fn = Module._pgl_set_system_fn = (e) => (_pgl_set_system_fn = Module._pgl_set_system_fn = wasmExports.pgl_set_system_fn)(e), _pgl_set_popen_fn = Module._pgl_set_popen_fn = (e) => (_pgl_set_popen_fn = Module._pgl_set_popen_fn = wasmExports.pgl_set_popen_fn)(e), _pgl_set_pclose_fn = Module._pgl_set_pclose_fn = (e) => (_pgl_set_pclose_fn = Module._pgl_set_pclose_fn = wasmExports.pgl_set_pclose_fn)(e), _pgl_pclose = Module._pgl_pclose = (e) => (_pgl_pclose = Module._pgl_pclose = wasmExports.pgl_pclose)(e), _pclose = Module._pclose = (e) => (_pclose = Module._pclose = wasmExports.pclose)(e), _pgl_getuid = Module._pgl_getuid = () => (_pgl_getuid = Module._pgl_getuid = wasmExports.pgl_getuid)(), _pgl_getpwuid = Module._pgl_getpwuid = (e) => (_pgl_getpwuid = Module._pgl_getpwuid = wasmExports.pgl_getpwuid)(e), _pgl_run_atexit_funcs = Module._pgl_run_atexit_funcs = () => (_pgl_run_atexit_funcs = Module._pgl_run_atexit_funcs = wasmExports.pgl_run_atexit_funcs)(), _pgl_freopen = Module._pgl_freopen = (e, r2, t2) => (_pgl_freopen = Module._pgl_freopen = wasmExports.pgl_freopen)(e, r2, t2), _pgl_shmget = Module._pgl_shmget = (e, r2, t2) => (_pgl_shmget = Module._pgl_shmget = wasmExports.pgl_shmget)(e, r2, t2), _pgl_shmat = Module._pgl_shmat = (e, r2, t2) => (_pgl_shmat = Module._pgl_shmat = wasmExports.pgl_shmat)(e, r2, t2), _pgl_shmdt = Module._pgl_shmdt = (e) => (_pgl_shmdt = Module._pgl_shmdt = wasmExports.pgl_shmdt)(e), _pgl_shmctl = Module._pgl_shmctl = (e, r2, t2) => (_pgl_shmctl = Module._pgl_shmctl = wasmExports.pgl_shmctl)(e, r2, t2), _pgl_munmap = Module._pgl_munmap = (e, r2) => (_pgl_munmap = Module._pgl_munmap = wasmExports.pgl_munmap)(e, r2), _pgl_set_rw_cbs = Module._pgl_set_rw_cbs = (e, r2) => (_pgl_set_rw_cbs = Module._pgl_set_rw_cbs = wasmExports.pgl_set_rw_cbs)(e, r2), _pgl_fcntl = Module._pgl_fcntl = (e, r2, t2) => (_pgl_fcntl = Module._pgl_fcntl = wasmExports.pgl_fcntl)(e, r2, t2), _strerror = Module._strerror = (e) => (_strerror = Module._strerror = wasmExports.strerror)(e), ___funcs_on_exit = () => (___funcs_on_exit = wasmExports.__funcs_on_exit)(), _htonl = (e) => (_htonl = wasmExports.htonl)(e), _htons = (e) => (_htons = wasmExports.htons)(e), _ntohs = (e) => (_ntohs = wasmExports.ntohs)(e), __emscripten_timeout = (e, r2) => (__emscripten_timeout = wasmExports._emscripten_timeout)(e, r2), _setThrew = (e, r2) => (_setThrew = wasmExports.setThrew)(e, r2), __emscripten_stack_restore = (e) => (__emscripten_stack_restore = wasmExports._emscripten_stack_restore)(e), __emscripten_stack_alloc = (e) => (__emscripten_stack_alloc = wasmExports._emscripten_stack_alloc)(e), _emscripten_stack_get_current = () => (_emscripten_stack_get_current = wasmExports.emscripten_stack_get_current)(), ___wasm_apply_data_relocs = () => (___wasm_apply_data_relocs = wasmExports.__wasm_apply_data_relocs)();
        function invoke_iiii(e, r2, t2, n3) {
          var o5 = stackSave();
          try {
            return getWasmTableEntry(e)(r2, t2, n3);
          } catch (a2) {
            if (stackRestore(o5), a2 !== a2 + 0) throw a2;
            _setThrew(1, 0);
          }
        }
        function invoke_ii(e, r2) {
          var t2 = stackSave();
          try {
            return getWasmTableEntry(e)(r2);
          } catch (n3) {
            if (stackRestore(t2), n3 !== n3 + 0) throw n3;
            _setThrew(1, 0);
          }
        }
        function invoke_vii(e, r2, t2) {
          var n3 = stackSave();
          try {
            getWasmTableEntry(e)(r2, t2);
          } catch (o5) {
            if (stackRestore(n3), o5 !== o5 + 0) throw o5;
            _setThrew(1, 0);
          }
        }
        Module.addRunDependency = addRunDependency, Module.removeRunDependency = removeRunDependency, Module.callMain = callMain, Module.ENV = ENV, Module.addFunction = addFunction, Module.removeFunction = removeFunction, Module.UTF8ToString = UTF8ToString, Module.stringToNewUTF8 = stringToNewUTF8, Module.stringToUTF8OnStack = stringToUTF8OnStack, Module.FS_createPreloadedFile = FS_createPreloadedFile, Module.FS_unlink = FS_unlink, Module.FS_createPath = FS_createPath, Module.FS_createDevice = FS_createDevice, Module.FS = FS, Module.FS_createDataFile = FS_createDataFile, Module.FS_createLazyFile = FS_createLazyFile, Module.MEMFS = MEMFS, Module.PROXYFS = PROXYFS;
        var calledRun;
        dependenciesFulfilled = function e() {
          calledRun || run(), calledRun || (dependenciesFulfilled = e);
        };
        function callMain(e = []) {
          var r2 = resolveGlobalSymbol("main").sym;
          if (r2) {
            e.unshift(thisProgram);
            var t2 = e.length, n3 = stackAlloc((t2 + 1) * 4), o5 = n3;
            e.forEach((s5) => {
              HEAPU32[o5 >> 2] = stringToUTF8OnStack(s5), o5 += 4;
            }), HEAPU32[o5 >> 2] = 0;
            try {
              var a2 = r2(t2, n3);
              return exitJS(a2, true), a2;
            } catch (s5) {
              return handleException(s5);
            }
          }
        }
        function run(e = arguments_) {
          if (runDependencies > 0 || (preRun(), runDependencies > 0)) return;
          function r2() {
            calledRun || (calledRun = true, Module.calledRun = true, !ABORT && (initRuntime(), preMain(), readyPromiseResolve(Module), Module.onRuntimeInitialized?.(), shouldRunNow && callMain(e), postRun()));
          }
          Module.setStatus ? (Module.setStatus("Running..."), setTimeout(() => {
            setTimeout(() => Module.setStatus(""), 1), r2();
          }, 1)) : r2();
        }
        if (Module.preInit) for (typeof Module.preInit == "function" && (Module.preInit = [Module.preInit]); Module.preInit.length > 0; ) Module.preInit.pop()();
        var shouldRunNow = false;
        return Module.noInitialRun && (shouldRunNow = false), run(), moduleRtn = readyPromise, moduleRtn;
      };
    })();
    xe2 = Dr;
    Ue2 = xe2;
    u();
    Be2 = "(?:" + ["\\|\\|", "\\&\\&", ";;", "\\|\\&", "\\<\\(", "\\<\\<\\<", ">>", ">\\&", "<\\&", "[&;()|<>]"].join("|") + ")";
    Ie2 = new RegExp("^" + Be2 + "$");
    He2 = "|&;()<> \\t";
    Nr = '"((\\\\"|[^"])*?)"';
    xr = "'((\\\\'|[^'])*?)'";
    Ur = /^#$/;
    Le2 = "'";
    Ce2 = '"';
    de2 = "$";
    L3 = "";
    Ir = 4294967296;
    for (let e = 0; e < 4; e++) L3 += (Ir * Math.random()).toString(16);
    Hr = new RegExp("^" + L3);
    C2 = "/pglite";
    B2 = C2 + "/data";
    jr = C2 + "/bin/initdb";
    ze2 = C2 + "/pgstdout";
    je2 = C2 + "/pgstdin";
    Mt2 = "/pglite";
    We2 = class {
      constructor(r2) {
        this.dataDir = r2;
      }
      async init(r2, t2) {
        return this.pg = r2, { emscriptenOpts: t2 };
      }
      async syncToFs(r2) {
      }
      async initialSyncFs() {
      }
      async closeFs() {
      }
      async dumpTar(r2, t2) {
        return ue2(this.pg.Module.FS, B2, r2, t2);
      }
    };
    Ge2 = class {
      constructor(r2, { debug: t2 = false } = {}) {
        this.dataDir = r2, this.debug = t2;
      }
      async syncToFs(r2) {
      }
      async initialSyncFs() {
      }
      async closeFs() {
      }
      async dumpTar(r2, t2) {
        return ue2(this.pg.Module.FS, B2, r2, t2);
      }
      async init(r2, t2) {
        return this.pg = r2, { emscriptenOpts: { ...t2, preRun: [...t2.preRun || [], (o5) => {
          let a2 = Wr(o5, this);
          o5.FS.mkdir(B2), o5.FS.mount(a2, {}, B2);
        }] } };
      }
    };
    Ve2 = { EBADF: 8, EBADFD: 127, EEXIST: 20, EINVAL: 28, EISDIR: 31, ENODEV: 43, ENOENT: 44, ENOTDIR: 54, ENOTEMPTY: 55 };
    Wr = (e, r2) => {
      let t2 = e.FS, n3 = r2.debug ? console.log : null, o5 = { tryFSOperation(a2) {
        try {
          return a2();
        } catch (s5) {
          throw s5.code ? s5.code === "UNKNOWN" ? new t2.ErrnoError(Ve2.EINVAL) : new t2.ErrnoError(s5.code) : s5;
        }
      }, mount(a2) {
        return o5.createNode(null, "/", 16895, 0);
      }, syncfs(a2, s5, l2) {
      }, createNode(a2, s5, l2, u3) {
        if (!t2.isDir(l2) && !t2.isFile(l2)) throw new t2.ErrnoError(28);
        let d3 = t2.createNode(a2, s5, l2);
        return d3.node_ops = o5.node_ops, d3.stream_ops = o5.stream_ops, d3;
      }, getMode: function(a2) {
        return n3?.("getMode", a2), o5.tryFSOperation(() => r2.lstat(a2).mode);
      }, realPath: function(a2) {
        let s5 = [];
        for (; a2.parent !== a2; ) s5.push(a2.name), a2 = a2.parent;
        return s5.push(a2.mount.opts.root), s5.reverse(), s5.join("/");
      }, node_ops: { getattr(a2) {
        n3?.("getattr", o5.realPath(a2));
        let s5 = o5.realPath(a2);
        return o5.tryFSOperation(() => {
          let l2 = r2.lstat(s5);
          return { ...l2, dev: 0, ino: a2.id, nlink: 1, rdev: a2.rdev, atime: new Date(l2.atime), mtime: new Date(l2.mtime), ctime: new Date(l2.ctime) };
        });
      }, setattr(a2, s5) {
        n3?.("setattr", o5.realPath(a2), s5);
        let l2 = o5.realPath(a2);
        o5.tryFSOperation(() => {
          s5.mode !== void 0 && r2.chmod(l2, s5.mode), s5.size !== void 0 && r2.truncate(l2, s5.size), s5.timestamp !== void 0 && r2.utimes(l2, s5.timestamp, s5.timestamp), s5.size !== void 0 && r2.truncate(l2, s5.size);
        });
      }, lookup(a2, s5) {
        n3?.("lookup", o5.realPath(a2), s5);
        let l2 = [o5.realPath(a2), s5].join("/"), u3 = o5.getMode(l2);
        return o5.createNode(a2, s5, u3);
      }, mknod(a2, s5, l2, u3) {
        n3?.("mknod", o5.realPath(a2), s5, l2, u3);
        let d3 = o5.createNode(a2, s5, l2, u3), c4 = o5.realPath(d3);
        return o5.tryFSOperation(() => (t2.isDir(d3.mode) ? r2.mkdir(c4, { mode: l2 }) : r2.writeFile(c4, "", { mode: l2 }), d3));
      }, rename(a2, s5, l2) {
        n3?.("rename", o5.realPath(a2), o5.realPath(s5), l2);
        let u3 = o5.realPath(a2), d3 = [o5.realPath(s5), l2].join("/");
        o5.tryFSOperation(() => {
          r2.rename(u3, d3);
        }), a2.name = l2;
      }, unlink(a2, s5) {
        n3?.("unlink", o5.realPath(a2), s5);
        let l2 = [o5.realPath(a2), s5].join("/");
        try {
          r2.unlink(l2);
        } catch {
        }
      }, rmdir(a2, s5) {
        n3?.("rmdir", o5.realPath(a2), s5);
        let l2 = [o5.realPath(a2), s5].join("/");
        return o5.tryFSOperation(() => {
          r2.rmdir(l2);
        });
      }, readdir(a2) {
        n3?.("readdir", o5.realPath(a2));
        let s5 = o5.realPath(a2);
        return o5.tryFSOperation(() => r2.readdir(s5));
      }, symlink(a2, s5, l2) {
        throw n3?.("symlink", o5.realPath(a2), s5, l2), new t2.ErrnoError(63);
      }, readlink(a2) {
        throw n3?.("readlink", o5.realPath(a2)), new t2.ErrnoError(63);
      } }, stream_ops: { open(a2) {
        n3?.("open stream", o5.realPath(a2.node));
        let s5 = o5.realPath(a2.node);
        return o5.tryFSOperation(() => {
          t2.isFile(a2.node.mode) && (a2.shared.refcount = 1, a2.nfd = r2.open(s5));
        });
      }, close(a2) {
        return n3?.("close stream", o5.realPath(a2.node)), o5.tryFSOperation(() => {
          t2.isFile(a2.node.mode) && a2.nfd && --a2.shared.refcount === 0 && r2.close(a2.nfd);
        });
      }, dup(a2) {
        n3?.("dup stream", o5.realPath(a2.node)), a2.shared.refcount++;
      }, read(a2, s5, l2, u3, d3) {
        return n3?.("read stream", o5.realPath(a2.node), l2, u3, d3), u3 === 0 ? 0 : o5.tryFSOperation(() => r2.read(a2.nfd, s5, l2, u3, d3));
      }, write(a2, s5, l2, u3, d3) {
        return n3?.("write stream", o5.realPath(a2.node), l2, u3, d3), o5.tryFSOperation(() => r2.write(a2.nfd, s5.buffer, l2, u3, d3));
      }, llseek(a2, s5, l2) {
        n3?.("llseek stream", o5.realPath(a2.node), s5, l2);
        let u3 = s5;
        if (l2 === 1 ? u3 += a2.position : l2 === 2 && t2.isFile(a2.node.mode) && o5.tryFSOperation(() => {
          let d3 = r2.fstat(a2.nfd);
          u3 += d3.size;
        }), u3 < 0) throw new t2.ErrnoError(28);
        return u3;
      }, mmap(a2, s5, l2, u3, d3) {
        if (n3?.("mmap stream", o5.realPath(a2.node), s5, l2, u3, d3), !t2.isFile(a2.node.mode)) throw new t2.ErrnoError(Ve2.ENODEV);
        let c4 = e.mmapAlloc(s5);
        return o5.stream_ops.read(a2, e.HEAP8, c4, s5, l2), { ptr: c4, allocated: true };
      }, msync(a2, s5, l2, u3, d3) {
        return n3?.("msync stream", o5.realPath(a2.node), l2, u3, d3), o5.stream_ops.write(a2, s5, 0, u3, l2), 0;
      } } };
      return o5;
    };
  }
});

// (disabled):fs
var require_fs = __commonJS({
  "(disabled):fs"() {
  }
});

// (disabled):stream
var require_stream = __commonJS({
  "(disabled):stream"() {
  }
});

// (disabled):stream/promises
var require_promises2 = __commonJS({
  "(disabled):stream/promises"() {
  }
});

// (disabled):path
var require_path = __commonJS({
  "(disabled):path"() {
  }
});

// node_modules/@electric-sql/pglite/dist/fs/nodefs.js
var nodefs_exports = {};
__export(nodefs_exports, {
  NodeFS: () => m3
});
var s4, o4, m3;
var init_nodefs = __esm({
  "node_modules/@electric-sql/pglite/dist/fs/nodefs.js"() {
    init_chunk_4QMGOB4T();
    init_chunk_XP4OYHYJ();
    init_chunk_QY3QWFKW();
    s4 = __toESM(require_fs(), 1);
    o4 = __toESM(require_path(), 1);
    u();
    m3 = class extends We2 {
      constructor(t2) {
        super(t2), this.rootDir = (void 0)(t2), (void 0)((void 0)(this.rootDir)) || (void 0)(this.rootDir);
      }
      async init(t2, e) {
        return this.pg = t2, { emscriptenOpts: { ...e, preRun: [...e.preRun || [], (r2) => {
          let c4 = r2.FS.filesystems.NODEFS;
          r2.FS.mkdir(B2), r2.FS.mount(c4, { root: this.rootDir }, B2);
        }] } };
      }
      async closeFs() {
        this.pg.Module.FS.quit();
      }
    };
  }
});

// node_modules/@electric-sql/pglite/dist/fs/opfs-ahp.js
var opfs_ahp_exports = {};
__export(opfs_ahp_exports, {
  OpfsAhpFS: () => L4
});
var $2, G3, T3, H2, v2, F3, M2, y4, b3, m4, x3, P4, D4, S2, n2, C3, O2, k2, w2, f4, I, W3, j2, L4, p4;
var init_opfs_ahp = __esm({
  "node_modules/@electric-sql/pglite/dist/fs/opfs-ahp.js"() {
    init_chunk_4QMGOB4T();
    init_chunk_XP4OYHYJ();
    init_chunk_QY3QWFKW();
    u();
    $2 = "state.txt";
    G3 = "data";
    T3 = { DIR: 16384, FILE: 32768 };
    L4 = class extends Ge2 {
      constructor(e, { initialPoolSize: t2 = 1e3, maintainedPoolSize: o5 = 100, debug: i4 = false } = {}) {
        super(e, { debug: i4 });
        R(this, n2);
        R(this, H2);
        R(this, v2);
        R(this, F3);
        R(this, M2);
        R(this, y4);
        R(this, b3, /* @__PURE__ */ new Map());
        R(this, m4, /* @__PURE__ */ new Map());
        R(this, x3, 0);
        R(this, P4, /* @__PURE__ */ new Map());
        R(this, D4, /* @__PURE__ */ new Map());
        this.lastCheckpoint = 0;
        this.checkpointInterval = 1e3 * 60;
        this.poolCounter = 0;
        R(this, S2, /* @__PURE__ */ new Set());
        this.initialPoolSize = t2, this.maintainedPoolSize = o5;
      }
      async init(e, t2) {
        return await T(this, n2, C3).call(this), super.init(e, t2);
      }
      async syncToFs(e = false) {
        await this.maybeCheckpointState(), await this.maintainPool(), e || this.flush();
      }
      async closeFs() {
        for (let e of h(this, m4).values()) e.close();
        h(this, y4).flush(), h(this, y4).close(), this.pg.Module.FS.quit();
      }
      async maintainPool(e) {
        e = e || this.maintainedPoolSize;
        let t2 = e - this.state.pool.length, o5 = [];
        for (let i4 = 0; i4 < t2; i4++) o5.push(new Promise(async (c4) => {
          ++this.poolCounter;
          let a2 = `${(Date.now() - 1704063600).toString(16).padStart(8, "0")}-${this.poolCounter.toString(16).padStart(8, "0")}`, h2 = await h(this, F3).getFileHandle(a2, { create: true }), d3 = await h2.createSyncAccessHandle();
          h(this, b3).set(a2, h2), h(this, m4).set(a2, d3), T(this, n2, k2).call(this, { opp: "createPoolFile", args: [a2] }), this.state.pool.push(a2), c4();
        }));
        for (let i4 = 0; i4 > t2; i4--) o5.push(new Promise(async (c4) => {
          let a2 = this.state.pool.pop();
          T(this, n2, k2).call(this, { opp: "deletePoolFile", args: [a2] });
          let h2 = h(this, b3).get(a2);
          h(this, m4).get(a2)?.close(), await h(this, F3).removeEntry(h2.name), h(this, b3).delete(a2), h(this, m4).delete(a2), c4();
        }));
        await Promise.all(o5);
      }
      _createPoolFileState(e) {
        this.state.pool.push(e);
      }
      _deletePoolFileState(e) {
        let t2 = this.state.pool.indexOf(e);
        t2 > -1 && this.state.pool.splice(t2, 1);
      }
      async maybeCheckpointState() {
        Date.now() - this.lastCheckpoint > this.checkpointInterval && await this.checkpointState();
      }
      async checkpointState() {
        let e = new TextEncoder().encode(JSON.stringify(this.state));
        h(this, y4).truncate(0), h(this, y4).write(e, { at: 0 }), h(this, y4).flush(), this.lastCheckpoint = Date.now();
      }
      flush() {
        for (let e of h(this, S2)) try {
          e.flush();
        } catch {
        }
        h(this, S2).clear();
      }
      chmod(e, t2) {
        T(this, n2, O2).call(this, { opp: "chmod", args: [e, t2] }, () => {
          this._chmodState(e, t2);
        });
      }
      _chmodState(e, t2) {
        let o5 = T(this, n2, f4).call(this, e);
        o5.mode = t2;
      }
      close(e) {
        let t2 = T(this, n2, I).call(this, e);
        h(this, P4).delete(e), h(this, D4).delete(t2);
      }
      fstat(e) {
        let t2 = T(this, n2, I).call(this, e);
        return this.lstat(t2);
      }
      lstat(e) {
        let t2 = T(this, n2, f4).call(this, e), o5 = t2.type === "file" ? h(this, m4).get(t2.backingFilename).getSize() : 0, i4 = 4096;
        return { dev: 0, ino: 0, mode: t2.mode, nlink: 1, uid: 0, gid: 0, rdev: 0, size: o5, blksize: i4, blocks: Math.ceil(o5 / i4), atime: t2.lastModified, mtime: t2.lastModified, ctime: t2.lastModified };
      }
      mkdir(e, t2) {
        T(this, n2, O2).call(this, { opp: "mkdir", args: [e, t2] }, () => {
          this._mkdirState(e, t2);
        });
      }
      _mkdirState(e, t2) {
        let o5 = T(this, n2, w2).call(this, e), i4 = o5.pop(), c4 = [], a2 = this.state.root;
        for (let d3 of o5) {
          if (c4.push(e), !Object.prototype.hasOwnProperty.call(a2.children, d3)) if (t2?.recursive) this.mkdir(c4.join("/"));
          else throw new p4("ENOENT", "No such file or directory");
          if (a2.children[d3].type !== "directory") throw new p4("ENOTDIR", "Not a directory");
          a2 = a2.children[d3];
        }
        if (Object.prototype.hasOwnProperty.call(a2.children, i4)) throw new p4("EEXIST", "File exists");
        let h2 = { type: "directory", lastModified: Date.now(), mode: t2?.mode || T3.DIR, children: {} };
        a2.children[i4] = h2;
      }
      open(e, t2, o5) {
        if (T(this, n2, f4).call(this, e).type !== "file") throw new p4("EISDIR", "Is a directory");
        let c4 = T(this, n2, W3).call(this);
        return h(this, P4).set(c4, e), h(this, D4).set(e, c4), c4;
      }
      readdir(e) {
        let t2 = T(this, n2, f4).call(this, e);
        if (t2.type !== "directory") throw new p4("ENOTDIR", "Not a directory");
        return Object.keys(t2.children);
      }
      read(e, t2, o5, i4, c4) {
        let a2 = T(this, n2, I).call(this, e), h2 = T(this, n2, f4).call(this, a2);
        if (h2.type !== "file") throw new p4("EISDIR", "Is a directory");
        return h(this, m4).get(h2.backingFilename).read(new Uint8Array(t2.buffer, o5, i4), { at: c4 });
      }
      rename(e, t2) {
        T(this, n2, O2).call(this, { opp: "rename", args: [e, t2] }, () => {
          this._renameState(e, t2, true);
        });
      }
      _renameState(e, t2, o5 = false) {
        let i4 = T(this, n2, w2).call(this, e), c4 = i4.pop(), a2 = T(this, n2, f4).call(this, i4.join("/"));
        if (!Object.prototype.hasOwnProperty.call(a2.children, c4)) throw new p4("ENOENT", "No such file or directory");
        let h2 = T(this, n2, w2).call(this, t2), d3 = h2.pop(), l2 = T(this, n2, f4).call(this, h2.join("/"));
        if (o5 && Object.prototype.hasOwnProperty.call(l2.children, d3)) {
          let u3 = l2.children[d3];
          h(this, m4).get(u3.backingFilename).truncate(0), this.state.pool.push(u3.backingFilename);
        }
        l2.children[d3] = a2.children[c4], delete a2.children[c4];
      }
      rmdir(e) {
        T(this, n2, O2).call(this, { opp: "rmdir", args: [e] }, () => {
          this._rmdirState(e);
        });
      }
      _rmdirState(e) {
        let t2 = T(this, n2, w2).call(this, e), o5 = t2.pop(), i4 = T(this, n2, f4).call(this, t2.join("/"));
        if (!Object.prototype.hasOwnProperty.call(i4.children, o5)) throw new p4("ENOENT", "No such file or directory");
        let c4 = i4.children[o5];
        if (c4.type !== "directory") throw new p4("ENOTDIR", "Not a directory");
        if (Object.keys(c4.children).length > 0) throw new p4("ENOTEMPTY", "Directory not empty");
        delete i4.children[o5];
      }
      truncate(e, t2 = 0) {
        let o5 = T(this, n2, f4).call(this, e);
        if (o5.type !== "file") throw new p4("EISDIR", "Is a directory");
        let i4 = h(this, m4).get(o5.backingFilename);
        if (!i4) throw new p4("ENOENT", "No such file or directory");
        i4.truncate(t2), h(this, S2).add(i4);
      }
      unlink(e) {
        T(this, n2, O2).call(this, { opp: "unlink", args: [e] }, () => {
          this._unlinkState(e, true);
        });
      }
      _unlinkState(e, t2 = false) {
        let o5 = T(this, n2, w2).call(this, e), i4 = o5.pop(), c4 = T(this, n2, f4).call(this, o5.join("/"));
        if (!Object.prototype.hasOwnProperty.call(c4.children, i4)) throw new p4("ENOENT", "No such file or directory");
        let a2 = c4.children[i4];
        if (a2.type !== "file") throw new p4("EISDIR", "Is a directory");
        if (delete c4.children[i4], t2) {
          let h2 = h(this, m4).get(a2.backingFilename);
          h2?.truncate(0), h(this, S2).add(h2), h(this, D4).has(e) && (h(this, P4).delete(h(this, D4).get(e)), h(this, D4).delete(e));
        }
        this.state.pool.push(a2.backingFilename);
      }
      utimes(e, t2, o5) {
        T(this, n2, O2).call(this, { opp: "utimes", args: [e, t2, o5] }, () => {
          this._utimesState(e, t2, o5);
        });
      }
      _utimesState(e, t2, o5) {
        let i4 = T(this, n2, f4).call(this, e);
        i4.lastModified = o5;
      }
      writeFile(e, t2, o5) {
        let i4 = T(this, n2, w2).call(this, e), c4 = i4.pop(), a2 = T(this, n2, f4).call(this, i4.join("/"));
        if (Object.prototype.hasOwnProperty.call(a2.children, c4)) {
          let l2 = a2.children[c4];
          l2.lastModified = Date.now(), T(this, n2, k2).call(this, { opp: "setLastModified", args: [e, l2.lastModified] });
        } else {
          if (this.state.pool.length === 0) throw new Error("No more file handles available in the pool");
          let l2 = { type: "file", lastModified: Date.now(), mode: o5?.mode || T3.FILE, backingFilename: this.state.pool.pop() };
          a2.children[c4] = l2, T(this, n2, k2).call(this, { opp: "createFileNode", args: [e, l2] });
        }
        let h2 = a2.children[c4], d3 = h(this, m4).get(h2.backingFilename);
        t2.length > 0 && (d3.write(typeof t2 == "string" ? new TextEncoder().encode(t2) : new Uint8Array(t2), { at: 0 }), e.startsWith("/pg_wal") && h(this, S2).add(d3));
      }
      _createFileNodeState(e, t2) {
        let o5 = T(this, n2, w2).call(this, e), i4 = o5.pop(), c4 = T(this, n2, f4).call(this, o5.join("/"));
        c4.children[i4] = t2;
        let a2 = this.state.pool.indexOf(t2.backingFilename);
        return a2 > -1 && this.state.pool.splice(a2, 1), t2;
      }
      _setLastModifiedState(e, t2) {
        let o5 = T(this, n2, f4).call(this, e);
        o5.lastModified = t2;
      }
      write(e, t2, o5, i4, c4) {
        let a2 = T(this, n2, I).call(this, e), h2 = T(this, n2, f4).call(this, a2);
        if (h2.type !== "file") throw new p4("EISDIR", "Is a directory");
        let d3 = h(this, m4).get(h2.backingFilename);
        if (!d3) throw new p4("EBADF", "Bad file descriptor");
        let l2 = d3.write(new Uint8Array(t2, o5, i4), { at: c4 });
        return a2.startsWith("/pg_wal") && h(this, S2).add(d3), l2;
      }
    };
    H2 = /* @__PURE__ */ new WeakMap(), v2 = /* @__PURE__ */ new WeakMap(), F3 = /* @__PURE__ */ new WeakMap(), M2 = /* @__PURE__ */ new WeakMap(), y4 = /* @__PURE__ */ new WeakMap(), b3 = /* @__PURE__ */ new WeakMap(), m4 = /* @__PURE__ */ new WeakMap(), x3 = /* @__PURE__ */ new WeakMap(), P4 = /* @__PURE__ */ new WeakMap(), D4 = /* @__PURE__ */ new WeakMap(), S2 = /* @__PURE__ */ new WeakMap(), n2 = /* @__PURE__ */ new WeakSet(), C3 = async function() {
      x(this, H2, await navigator.storage.getDirectory()), x(this, v2, await T(this, n2, j2).call(this, this.dataDir, { create: true })), x(this, F3, await T(this, n2, j2).call(this, G3, { from: h(this, v2), create: true })), x(this, M2, await h(this, v2).getFileHandle($2, { create: true })), x(this, y4, await h(this, M2).createSyncAccessHandle());
      let e = new ArrayBuffer(h(this, y4).getSize());
      h(this, y4).read(e, { at: 0 });
      let t2, o5 = new TextDecoder().decode(e).split(`
`), i4 = false;
      try {
        t2 = JSON.parse(o5[0]);
      } catch {
        t2 = { root: { type: "directory", lastModified: Date.now(), mode: T3.DIR, children: {} }, pool: [] }, h(this, y4).truncate(0), h(this, y4).write(new TextEncoder().encode(JSON.stringify(t2)), { at: 0 }), i4 = true;
      }
      this.state = t2;
      let c4 = o5.slice(1).filter(Boolean).map((l2) => JSON.parse(l2));
      for (let l2 of c4) {
        let u3 = `_${l2.opp}State`;
        if (typeof this[u3] == "function") try {
          this[u3].bind(this)(...l2.args);
        } catch (N4) {
          console.warn("Error applying OPFS AHP WAL entry", l2, N4);
        }
      }
      let a2 = [], h2 = async (l2) => {
        if (l2.type === "file") try {
          let u3 = await h(this, F3).getFileHandle(l2.backingFilename), N4 = await u3.createSyncAccessHandle();
          h(this, b3).set(l2.backingFilename, u3), h(this, m4).set(l2.backingFilename, N4);
        } catch (u3) {
          console.error("Error opening file handle for node", l2, u3);
        }
        else for (let u3 of Object.values(l2.children)) a2.push(h2(u3));
      };
      await h2(this.state.root);
      let d3 = [];
      for (let l2 of this.state.pool) d3.push(new Promise(async (u3) => {
        h(this, b3).has(l2) && console.warn("File handle already exists for pool file", l2);
        let N4 = await h(this, F3).getFileHandle(l2), U3 = await N4.createSyncAccessHandle();
        h(this, b3).set(l2, N4), h(this, m4).set(l2, U3), u3();
      }));
      await Promise.all([...a2, ...d3]), await this.maintainPool(i4 ? this.initialPoolSize : this.maintainedPoolSize);
    }, O2 = function(e, t2) {
      let o5 = T(this, n2, k2).call(this, e);
      try {
        t2();
      } catch (i4) {
        throw h(this, y4).truncate(o5), i4;
      }
    }, k2 = function(e) {
      let t2 = JSON.stringify(e), o5 = new TextEncoder().encode(`
${t2}`), i4 = h(this, y4).getSize();
      return h(this, y4).write(o5, { at: i4 }), h(this, S2).add(h(this, y4)), i4;
    }, w2 = function(e) {
      return e.split("/").filter(Boolean);
    }, f4 = function(e, t2) {
      let o5 = T(this, n2, w2).call(this, e), i4 = t2 || this.state.root;
      for (let c4 of o5) {
        if (i4.type !== "directory") throw new p4("ENOTDIR", "Not a directory");
        if (!Object.prototype.hasOwnProperty.call(i4.children, c4)) throw new p4("ENOENT", "No such file or directory");
        i4 = i4.children[c4];
      }
      return i4;
    }, I = function(e) {
      let t2 = h(this, P4).get(e);
      if (!t2) throw new p4("EBADF", "Bad file descriptor");
      return t2;
    }, W3 = function() {
      let e = ++U(this, x3)._;
      for (; h(this, P4).has(e); ) U(this, x3)._++;
      return e;
    }, j2 = async function(e, t2) {
      let o5 = T(this, n2, w2).call(this, e), i4 = t2?.from || h(this, H2);
      for (let c4 of o5) i4 = await i4.getDirectoryHandle(c4, { create: t2?.create });
      return i4;
    };
    p4 = class extends Error {
      constructor(A3, e) {
        super(e), typeof A3 == "number" ? this.code = A3 : typeof A3 == "string" && (this.code = Ve2[A3]);
      }
    };
  }
});

// node_modules/@electric-sql/pglite/dist/chunk-ACJ7KGEC.js
init_chunk_QY3QWFKW();
var dn = {};
F(dn, { ABSTIME: () => xt, ACLITEM: () => Ot, BIT: () => Vt, BOOL: () => fe, BPCHAR: () => Ge, BYTEA: () => me, CHAR: () => mt, CID: () => gt, CIDR: () => It, CIRCLE: () => Et, DATE: () => Qe, FLOAT4: () => Ve, FLOAT8: () => Fe, GTSVECTOR: () => Zt, INET: () => Nt, INT2: () => ke, INT4: () => Ue, INT8: () => ye, INTERVAL: () => Ut, JSON: () => be, JSONB: () => _e, MACADDR: () => Pt, MACADDR8: () => Ct, MONEY: () => Tt, NUMERIC: () => Gt, OID: () => Le, PATH: () => Bt, PG_DEPENDENCIES: () => Jt, PG_LSN: () => Wt, PG_NDISTINCT: () => Kt, PG_NODE_TREE: () => At, POLYGON: () => Dt, REFCURSOR: () => vt, REGCLASS: () => zt, REGCONFIG: () => en, REGDICTIONARY: () => tn, REGNAMESPACE: () => nn, REGOPER: () => Ht, REGOPERATOR: () => _t, REGPROC: () => yt, REGPROCEDURE: () => Qt, REGROLE: () => rn, REGTYPE: () => Yt, RELTIME: () => Mt, SMGR: () => St, TEXT: () => he, TID: () => ht, TIME: () => kt, TIMESTAMP: () => He, TIMESTAMPTZ: () => ge, TIMETZ: () => Lt, TINTERVAL: () => Rt, TSQUERY: () => Xt, TSVECTOR: () => $t, TXID_SNAPSHOT: () => qt, UUID: () => jt, VARBIT: () => Ft, VARCHAR: () => ve, XID: () => bt, XML: () => wt, arrayParser: () => pn, arraySerializer: () => Ye, parseType: () => se, parsers: () => sn, serializers: () => an, types: () => ze });
u();
var dt = globalThis.JSON.parse;
var ft = globalThis.JSON.stringify;
var fe = 16;
var me = 17;
var mt = 18;
var ye = 20;
var ke = 21;
var Ue = 23;
var yt = 24;
var he = 25;
var Le = 26;
var ht = 27;
var bt = 28;
var gt = 29;
var be = 114;
var wt = 142;
var At = 194;
var St = 210;
var Bt = 602;
var Dt = 604;
var It = 650;
var Ve = 700;
var Fe = 701;
var xt = 702;
var Mt = 703;
var Rt = 704;
var Et = 718;
var Ct = 774;
var Tt = 790;
var Pt = 829;
var Nt = 869;
var Ot = 1033;
var Ge = 1042;
var ve = 1043;
var Qe = 1082;
var kt = 1083;
var He = 1114;
var ge = 1184;
var Ut = 1186;
var Lt = 1266;
var Vt = 1560;
var Ft = 1562;
var Gt = 1700;
var vt = 1790;
var Qt = 2202;
var Ht = 2203;
var _t = 2204;
var zt = 2205;
var Yt = 2206;
var jt = 2950;
var qt = 2970;
var Wt = 3220;
var Kt = 3361;
var Jt = 3402;
var $t = 3614;
var Xt = 3615;
var Zt = 3642;
var en = 3734;
var tn = 3769;
var _e = 3802;
var nn = 4089;
var rn = 4096;
var ze = { string: { to: he, from: [he, ve, Ge], serialize: (t2) => {
  if (typeof t2 == "string") return t2;
  if (typeof t2 == "number") return t2.toString();
  throw new Error("Invalid input for string type");
}, parse: (t2) => t2 }, number: { to: 0, from: [ke, Ue, Le, Ve, Fe], serialize: (t2) => t2.toString(), parse: (t2) => +t2 }, bigint: { to: ye, from: [ye], serialize: (t2) => t2.toString(), parse: (t2) => {
  let e = BigInt(t2);
  return e < Number.MIN_SAFE_INTEGER || e > Number.MAX_SAFE_INTEGER ? e : Number(e);
} }, json: { to: be, from: [be, _e], serialize: (t2) => typeof t2 == "string" ? t2 : ft(t2), parse: (t2) => dt(t2) }, boolean: { to: fe, from: [fe], serialize: (t2) => {
  if (typeof t2 != "boolean") throw new Error("Invalid input for boolean type");
  return t2 ? "t" : "f";
}, parse: (t2) => t2 === "t" }, date: { to: ge, from: [Qe, He, ge], serialize: (t2) => {
  if (typeof t2 == "string") return t2;
  if (typeof t2 == "number") return new Date(t2).toISOString();
  if (t2 instanceof Date) return t2.toISOString();
  throw new Error("Invalid input for date type");
}, parse: (t2) => new Date(t2) }, bytea: { to: me, from: [me], serialize: (t2) => {
  if (!(t2 instanceof Uint8Array)) throw new Error("Invalid input for bytea type");
  return "\\x" + Array.from(t2).map((e) => e.toString(16).padStart(2, "0")).join("");
}, parse: (t2) => {
  let e = t2.slice(2);
  return Uint8Array.from({ length: e.length / 2 }, (n3, s5) => parseInt(e.substring(s5 * 2, (s5 + 1) * 2), 16));
} } };
var we = on(ze);
var sn = we.parsers;
var an = we.serializers;
function se(t2, e, n3) {
  if (t2 === null) return null;
  let s5 = n3?.[e] ?? we.parsers[e];
  return s5 ? s5(t2, e) : t2;
}
function on(t2) {
  return Object.keys(t2).reduce(({ parsers: e, serializers: n3 }, s5) => {
    let { to: i4, from: a2, serialize: u3, parse: m5 } = t2[s5];
    return n3[i4] = u3, n3[s5] = u3, e[s5] = m5, Array.isArray(a2) ? a2.forEach((l2) => {
      e[l2] = m5, n3[l2] = u3;
    }) : (e[a2] = m5, n3[a2] = u3), { parsers: e, serializers: n3 };
  }, { parsers: {}, serializers: {} });
}
var un = /\\/g;
var cn = /"/g;
function ln(t2) {
  return t2.replace(un, "\\\\").replace(cn, '\\"');
}
function Ye(t2, e, n3) {
  if (Array.isArray(t2) === false) return t2;
  if (!t2.length) return "{}";
  let s5 = t2[0], i4 = n3 === 1020 ? ";" : ",";
  return Array.isArray(s5) ? `{${t2.map((a2) => Ye(a2, e, n3)).join(i4)}}` : `{${t2.map((a2) => (a2 === void 0 && (a2 = null), a2 === null ? "null" : '"' + ln(e ? e(a2) : a2.toString()) + '"')).join(i4)}}`;
}
var de = { i: 0, char: null, str: "", quoted: false, last: 0, p: null };
function pn(t2, e, n3) {
  return de.i = de.last = 0, je(de, t2, e, n3)[0];
}
function je(t2, e, n3, s5) {
  let i4 = [], a2 = s5 === 1020 ? ";" : ",";
  for (; t2.i < e.length; t2.i++) {
    if (t2.char = e[t2.i], t2.quoted) t2.char === "\\" ? t2.str += e[++t2.i] : t2.char === '"' ? (i4.push(n3 ? n3(t2.str) : t2.str), t2.str = "", t2.quoted = e[t2.i + 1] === '"', t2.last = t2.i + 2) : t2.str += t2.char;
    else if (t2.char === '"') t2.quoted = true;
    else if (t2.char === "{") t2.last = ++t2.i, i4.push(je(t2, e, n3, s5));
    else if (t2.char === "}") {
      t2.quoted = false, t2.last < t2.i && i4.push(n3 ? n3(e.slice(t2.last, t2.i)) : e.slice(t2.last, t2.i)), t2.last = t2.i + 1;
      break;
    } else t2.char === a2 && t2.p !== "}" && t2.p !== '"' && (i4.push(n3 ? n3(e.slice(t2.last, t2.i)) : e.slice(t2.last, t2.i)), t2.last = t2.i + 1);
    t2.p = t2.char;
  }
  return t2.last < t2.i && i4.push(n3 ? n3(e.slice(t2.last, t2.i + 1)) : e.slice(t2.last, t2.i + 1)), i4;
}
var hn = {};
F(hn, { parseDescribeStatementResults: () => yn, parseResults: () => fn });
u();
function fn(t2, e, n3, s5) {
  let i4 = [], a2 = { rows: [], fields: [] }, u3 = 0, m5 = { ...e, ...n3?.parsers };
  return t2.forEach((l2) => {
    switch (l2.name) {
      case "rowDescription": {
        let U3 = l2;
        a2.fields = U3.fields.map((E3) => ({ name: E3.name, dataTypeID: E3.dataTypeID }));
        break;
      }
      case "dataRow": {
        if (!a2) break;
        let U3 = l2;
        n3?.rowMode === "array" ? a2.rows.push(U3.fields.map((E3, te3) => se(E3, a2.fields[te3].dataTypeID, m5))) : a2.rows.push(Object.fromEntries(U3.fields.map((E3, te3) => [a2.fields[te3].name, se(E3, a2.fields[te3].dataTypeID, m5)])));
        break;
      }
      case "commandComplete": {
        u3 += mn(l2), i4.push({ ...a2, affectedRows: u3, ...s5 ? { blob: s5 } : {} }), a2 = { rows: [], fields: [] };
        break;
      }
    }
  }), i4.length === 0 && i4.push({ affectedRows: 0, rows: [], fields: [] }), i4;
}
function mn(t2) {
  let e = t2.text.split(" ");
  switch (e[0]) {
    case "INSERT":
      return parseInt(e[2], 10);
    case "UPDATE":
    case "DELETE":
    case "COPY":
    case "MERGE":
      return parseInt(e[1], 10);
    default:
      return 0;
  }
}
function yn(t2) {
  let e = t2.find((n3) => n3.name === "parameterDescription");
  return e ? e.dataTypeIDs : [];
}
var Ee = {};
F(Ee, { AuthenticationCleartextPassword: () => V, AuthenticationMD5Password: () => F2, AuthenticationOk: () => L2, AuthenticationSASL: () => G, AuthenticationSASLContinue: () => v, AuthenticationSASLFinal: () => Q, BackendKeyDataMessage: () => W, CommandCompleteMessage: () => $, CopyDataMessage: () => H, CopyResponse: () => _2, DataRowMessage: () => X, DatabaseError: () => C, Field: () => z, NoticeMessage: () => Z, NotificationResponseMessage: () => K, ParameterDescriptionMessage: () => j, ParameterStatusMessage: () => q, ReadyForQueryMessage: () => J, RowDescriptionMessage: () => Y, bindComplete: () => Se, closeComplete: () => Be, copyDone: () => Re, emptyQuery: () => Me, noData: () => De, parseComplete: () => Ae, portalSuspended: () => Ie, replicationStart: () => xe });
u();
var Ae = { name: "parseComplete", length: 5 };
var Se = { name: "bindComplete", length: 5 };
var Be = { name: "closeComplete", length: 5 };
var De = { name: "noData", length: 5 };
var Ie = { name: "portalSuspended", length: 5 };
var xe = { name: "replicationStart", length: 4 };
var Me = { name: "emptyQuery", length: 4 };
var Re = { name: "copyDone", length: 4 };
var L2 = class {
  constructor(e) {
    this.length = e;
    this.name = "authenticationOk";
  }
};
var V = class {
  constructor(e) {
    this.length = e;
    this.name = "authenticationCleartextPassword";
  }
};
var F2 = class {
  constructor(e, n3) {
    this.length = e;
    this.salt = n3;
    this.name = "authenticationMD5Password";
  }
};
var G = class {
  constructor(e, n3) {
    this.length = e;
    this.mechanisms = n3;
    this.name = "authenticationSASL";
  }
};
var v = class {
  constructor(e, n3) {
    this.length = e;
    this.data = n3;
    this.name = "authenticationSASLContinue";
  }
};
var Q = class {
  constructor(e, n3) {
    this.length = e;
    this.data = n3;
    this.name = "authenticationSASLFinal";
  }
};
var C = class extends Error {
  constructor(n3, s5, i4) {
    super(n3);
    this.length = s5;
    this.name = i4;
  }
};
var H = class {
  constructor(e, n3) {
    this.length = e;
    this.chunk = n3;
    this.name = "copyData";
  }
};
var _2 = class {
  constructor(e, n3, s5, i4) {
    this.length = e;
    this.name = n3;
    this.binary = s5;
    this.columnTypes = new Array(i4);
  }
};
var z = class {
  constructor(e, n3, s5, i4, a2, u3, m5) {
    this.name = e;
    this.tableID = n3;
    this.columnID = s5;
    this.dataTypeID = i4;
    this.dataTypeSize = a2;
    this.dataTypeModifier = u3;
    this.format = m5;
  }
};
var Y = class {
  constructor(e, n3) {
    this.length = e;
    this.fieldCount = n3;
    this.name = "rowDescription";
    this.fields = new Array(this.fieldCount);
  }
};
var j = class {
  constructor(e, n3) {
    this.length = e;
    this.parameterCount = n3;
    this.name = "parameterDescription";
    this.dataTypeIDs = new Array(this.parameterCount);
  }
};
var q = class {
  constructor(e, n3, s5) {
    this.length = e;
    this.parameterName = n3;
    this.parameterValue = s5;
    this.name = "parameterStatus";
  }
};
var W = class {
  constructor(e, n3, s5) {
    this.length = e;
    this.processID = n3;
    this.secretKey = s5;
    this.name = "backendKeyData";
  }
};
var K = class {
  constructor(e, n3, s5, i4) {
    this.length = e;
    this.processId = n3;
    this.channel = s5;
    this.payload = i4;
    this.name = "notification";
  }
};
var J = class {
  constructor(e, n3) {
    this.length = e;
    this.status = n3;
    this.name = "readyForQuery";
  }
};
var $ = class {
  constructor(e, n3) {
    this.length = e;
    this.text = n3;
    this.name = "commandComplete";
  }
};
var X = class {
  constructor(e, n3) {
    this.length = e;
    this.fields = n3;
    this.name = "dataRow";
    this.fieldCount = n3.length;
  }
};
var Z = class {
  constructor(e, n3) {
    this.length = e;
    this.message = n3;
    this.name = "notice";
  }
};
var Hn = {};
F(Hn, { Parser: () => pe, messages: () => Ee, serialize: () => We });
u();
u();
u();
u();
function T2(t2) {
  let e = t2.length;
  for (let n3 = t2.length - 1; n3 >= 0; n3--) {
    let s5 = t2.charCodeAt(n3);
    s5 > 127 && s5 <= 2047 ? e++ : s5 > 2047 && s5 <= 65535 && (e += 2), s5 >= 56320 && s5 <= 57343 && n3--;
  }
  return e;
}
var b;
var g2;
var N;
var ae;
var O;
var S;
var ie;
var P2;
var qe;
var R2 = class {
  constructor(e = 256) {
    this.size = e;
    R(this, S);
    R(this, b);
    R(this, g2, 5);
    R(this, N, false);
    R(this, ae, new TextEncoder());
    R(this, O, 0);
    x(this, b, T(this, S, ie).call(this, e));
  }
  addInt32(e) {
    return T(this, S, P2).call(this, 4), h(this, b).setInt32(h(this, g2), e, h(this, N)), x(this, g2, h(this, g2) + 4), this;
  }
  addInt16(e) {
    return T(this, S, P2).call(this, 2), h(this, b).setInt16(h(this, g2), e, h(this, N)), x(this, g2, h(this, g2) + 2), this;
  }
  addCString(e) {
    return e && this.addString(e), T(this, S, P2).call(this, 1), h(this, b).setUint8(h(this, g2), 0), U(this, g2)._++, this;
  }
  addString(e = "") {
    let n3 = T2(e);
    return T(this, S, P2).call(this, n3), h(this, ae).encodeInto(e, new Uint8Array(h(this, b).buffer, h(this, g2))), x(this, g2, h(this, g2) + n3), this;
  }
  add(e) {
    return T(this, S, P2).call(this, e.byteLength), new Uint8Array(h(this, b).buffer).set(new Uint8Array(e), h(this, g2)), x(this, g2, h(this, g2) + e.byteLength), this;
  }
  flush(e) {
    let n3 = T(this, S, qe).call(this, e);
    return x(this, g2, 5), x(this, b, T(this, S, ie).call(this, this.size)), new Uint8Array(n3);
  }
};
b = /* @__PURE__ */ new WeakMap(), g2 = /* @__PURE__ */ new WeakMap(), N = /* @__PURE__ */ new WeakMap(), ae = /* @__PURE__ */ new WeakMap(), O = /* @__PURE__ */ new WeakMap(), S = /* @__PURE__ */ new WeakSet(), ie = function(e) {
  return new DataView(new ArrayBuffer(e));
}, P2 = function(e) {
  if (h(this, b).byteLength - h(this, g2) < e) {
    let s5 = h(this, b).buffer, i4 = s5.byteLength + (s5.byteLength >> 1) + e;
    x(this, b, T(this, S, ie).call(this, i4)), new Uint8Array(h(this, b).buffer).set(new Uint8Array(s5));
  }
}, qe = function(e) {
  if (e) {
    h(this, b).setUint8(h(this, O), e);
    let n3 = h(this, g2) - (h(this, O) + 1);
    h(this, b).setInt32(h(this, O) + 1, n3, h(this, N));
  }
  return h(this, b).buffer.slice(e ? 0 : 5, h(this, g2));
};
var f2 = new R2();
var bn = (t2) => {
  f2.addInt16(3).addInt16(0);
  for (let s5 of Object.keys(t2)) f2.addCString(s5).addCString(t2[s5]);
  f2.addCString("client_encoding").addCString("UTF8");
  let e = f2.addCString("").flush(), n3 = e.byteLength + 4;
  return new R2().addInt32(n3).add(e).flush();
};
var gn = () => {
  let t2 = new DataView(new ArrayBuffer(8));
  return t2.setInt32(0, 8, false), t2.setInt32(4, 80877103, false), new Uint8Array(t2.buffer);
};
var wn = (t2) => f2.addCString(t2).flush(112);
var An = (t2, e) => (f2.addCString(t2).addInt32(T2(e)).addString(e), f2.flush(112));
var Sn = (t2) => f2.addString(t2).flush(112);
var Bn = (t2) => f2.addCString(t2).flush(81);
var Dn = [];
var In = (t2) => {
  let e = t2.name ?? "";
  e.length > 63 && (console.error("Warning! Postgres only supports 63 characters for query names."), console.error("You supplied %s (%s)", e, e.length), console.error("This can cause conflicts and silent errors executing queries"));
  let n3 = f2.addCString(e).addCString(t2.text).addInt16(t2.types?.length ?? 0);
  return t2.types?.forEach((s5) => n3.addInt32(s5)), f2.flush(80);
};
var k = new R2();
var xn = (t2, e) => {
  for (let n3 = 0; n3 < t2.length; n3++) {
    let s5 = e ? e(t2[n3], n3) : t2[n3];
    if (s5 === null) f2.addInt16(0), k.addInt32(-1);
    else if (s5 instanceof ArrayBuffer || ArrayBuffer.isView(s5)) {
      let i4 = ArrayBuffer.isView(s5) ? s5.buffer.slice(s5.byteOffset, s5.byteOffset + s5.byteLength) : s5;
      f2.addInt16(1), k.addInt32(i4.byteLength), k.add(i4);
    } else f2.addInt16(0), k.addInt32(T2(s5)), k.addString(s5);
  }
};
var Mn = (t2 = {}) => {
  let e = t2.portal ?? "", n3 = t2.statement ?? "", s5 = t2.binary ?? false, i4 = t2.values ?? Dn, a2 = i4.length;
  return f2.addCString(e).addCString(n3), f2.addInt16(a2), xn(i4, t2.valueMapper), f2.addInt16(a2), f2.add(k.flush()), f2.addInt16(s5 ? 1 : 0), f2.flush(66);
};
var Rn = new Uint8Array([69, 0, 0, 0, 9, 0, 0, 0, 0, 0]);
var En = (t2) => {
  if (!t2 || !t2.portal && !t2.rows) return Rn;
  let e = t2.portal ?? "", n3 = t2.rows ?? 0, s5 = T2(e), i4 = 4 + s5 + 1 + 4, a2 = new DataView(new ArrayBuffer(1 + i4));
  return a2.setUint8(0, 69), a2.setInt32(1, i4, false), new TextEncoder().encodeInto(e, new Uint8Array(a2.buffer, 5)), a2.setUint8(s5 + 5, 0), a2.setUint32(a2.byteLength - 4, n3, false), new Uint8Array(a2.buffer);
};
var Cn = (t2, e) => {
  let n3 = new DataView(new ArrayBuffer(16));
  return n3.setInt32(0, 16, false), n3.setInt16(4, 1234, false), n3.setInt16(6, 5678, false), n3.setInt32(8, t2, false), n3.setInt32(12, e, false), new Uint8Array(n3.buffer);
};
var Ce = (t2, e) => {
  let n3 = new R2();
  return n3.addCString(e), n3.flush(t2);
};
var Tn = f2.addCString("P").flush(68);
var Pn = f2.addCString("S").flush(68);
var Nn = (t2) => t2.name ? Ce(68, `${t2.type}${t2.name ?? ""}`) : t2.type === "P" ? Tn : Pn;
var On = (t2) => {
  let e = `${t2.type}${t2.name ?? ""}`;
  return Ce(67, e);
};
var kn = (t2) => f2.add(t2).flush(100);
var Un = (t2) => Ce(102, t2);
var oe = (t2) => new Uint8Array([t2, 0, 0, 0, 4]);
var Ln = oe(72);
var Vn = oe(83);
var Fn = oe(88);
var Gn = oe(99);
var We = { startup: bn, password: wn, requestSsl: gn, sendSASLInitialResponseMessage: An, sendSCRAMClientFinalMessage: Sn, query: Bn, parse: In, bind: Mn, execute: En, describe: Nn, close: On, flush: () => Ln, sync: () => Vn, end: () => Fn, copyData: kn, copyDone: () => Gn, copyFail: Un, cancel: Cn };
u();
u();
var Te = { text: 0, binary: 1 };
u();
var vn = new ArrayBuffer(0);
var M;
var w;
var ce;
var le;
var ee;
var ue = class {
  constructor(e = 0) {
    R(this, M, new DataView(vn));
    R(this, w);
    R(this, ce, "utf-8");
    R(this, le, new TextDecoder(h(this, ce)));
    R(this, ee, false);
    x(this, w, e);
  }
  setBuffer(e, n3) {
    x(this, w, e), x(this, M, new DataView(n3));
  }
  int16() {
    let e = h(this, M).getInt16(h(this, w), h(this, ee));
    return x(this, w, h(this, w) + 2), e;
  }
  byte() {
    let e = h(this, M).getUint8(h(this, w));
    return U(this, w)._++, e;
  }
  int32() {
    let e = h(this, M).getInt32(h(this, w), h(this, ee));
    return x(this, w, h(this, w) + 4), e;
  }
  string(e) {
    return h(this, le).decode(this.bytes(e));
  }
  cstring() {
    let e = h(this, w), n3 = e;
    for (; h(this, M).getUint8(n3++) !== 0; ) ;
    let s5 = this.string(n3 - e - 1);
    return x(this, w, n3), s5;
  }
  bytes(e) {
    let n3 = h(this, M).buffer.slice(h(this, w), h(this, w) + e);
    return x(this, w, h(this, w) + e), new Uint8Array(n3);
  }
};
M = /* @__PURE__ */ new WeakMap(), w = /* @__PURE__ */ new WeakMap(), ce = /* @__PURE__ */ new WeakMap(), le = /* @__PURE__ */ new WeakMap(), ee = /* @__PURE__ */ new WeakMap();
var Pe = 1;
var Qn = 4;
var Ke = Pe + Qn;
var Je = new ArrayBuffer(0);
var A;
var B;
var D2;
var o;
var c2;
var $e;
var Xe;
var Ze;
var et;
var tt;
var nt;
var rt;
var Ne;
var st;
var it;
var at;
var ot;
var ut;
var ct;
var lt;
var pt;
var Oe;
var pe = class {
  constructor() {
    R(this, c2);
    R(this, A, new DataView(Je));
    R(this, B, 0);
    R(this, D2, 0);
    R(this, o, new ue());
  }
  parse(e, n3) {
    T(this, c2, $e).call(this, ArrayBuffer.isView(e) ? e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength) : e);
    let s5 = h(this, D2) + h(this, B), i4 = h(this, D2);
    for (; i4 + Ke <= s5; ) {
      let a2 = h(this, A).getUint8(i4), u3 = h(this, A).getUint32(i4 + Pe, false), m5 = Pe + u3;
      if (m5 + i4 <= s5 && u3 > 0) {
        let l2 = T(this, c2, Xe).call(this, i4 + Ke, a2, u3, h(this, A).buffer);
        n3(l2), i4 += m5;
      } else break;
    }
    i4 === s5 ? (x(this, A, new DataView(Je)), x(this, B, 0), x(this, D2, 0)) : (x(this, B, s5 - i4), x(this, D2, i4));
  }
};
A = /* @__PURE__ */ new WeakMap(), B = /* @__PURE__ */ new WeakMap(), D2 = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap(), c2 = /* @__PURE__ */ new WeakSet(), $e = function(e) {
  if (h(this, B) > 0) {
    let n3 = h(this, B) + e.byteLength;
    if (n3 + h(this, D2) > h(this, A).byteLength) {
      let i4;
      if (n3 <= h(this, A).byteLength && h(this, D2) >= h(this, B)) i4 = h(this, A).buffer;
      else {
        let a2 = h(this, A).byteLength * 2;
        for (; n3 >= a2; ) a2 *= 2;
        i4 = new ArrayBuffer(a2);
      }
      new Uint8Array(i4).set(new Uint8Array(h(this, A).buffer, h(this, D2), h(this, B))), x(this, A, new DataView(i4)), x(this, D2, 0);
    }
    new Uint8Array(h(this, A).buffer).set(new Uint8Array(e), h(this, D2) + h(this, B)), x(this, B, n3);
  } else x(this, A, new DataView(e)), x(this, D2, 0), x(this, B, e.byteLength);
}, Xe = function(e, n3, s5, i4) {
  switch (n3) {
    case 50:
      return Se;
    case 49:
      return Ae;
    case 51:
      return Be;
    case 110:
      return De;
    case 115:
      return Ie;
    case 99:
      return Re;
    case 87:
      return xe;
    case 73:
      return Me;
    case 68:
      return T(this, c2, ut).call(this, e, s5, i4);
    case 67:
      return T(this, c2, et).call(this, e, s5, i4);
    case 90:
      return T(this, c2, Ze).call(this, e, s5, i4);
    case 65:
      return T(this, c2, st).call(this, e, s5, i4);
    case 82:
      return T(this, c2, pt).call(this, e, s5, i4);
    case 83:
      return T(this, c2, ct).call(this, e, s5, i4);
    case 75:
      return T(this, c2, lt).call(this, e, s5, i4);
    case 69:
      return T(this, c2, Oe).call(this, e, s5, i4, "error");
    case 78:
      return T(this, c2, Oe).call(this, e, s5, i4, "notice");
    case 84:
      return T(this, c2, it).call(this, e, s5, i4);
    case 116:
      return T(this, c2, ot).call(this, e, s5, i4);
    case 71:
      return T(this, c2, nt).call(this, e, s5, i4);
    case 72:
      return T(this, c2, rt).call(this, e, s5, i4);
    case 100:
      return T(this, c2, tt).call(this, e, s5, i4);
    default:
      return new C("received invalid response: " + n3.toString(16), s5, "error");
  }
}, Ze = function(e, n3, s5) {
  h(this, o).setBuffer(e, s5);
  let i4 = h(this, o).string(1);
  return new J(n3, i4);
}, et = function(e, n3, s5) {
  h(this, o).setBuffer(e, s5);
  let i4 = h(this, o).cstring();
  return new $(n3, i4);
}, tt = function(e, n3, s5) {
  let i4 = s5.slice(e, e + (n3 - 4));
  return new H(n3, new Uint8Array(i4));
}, nt = function(e, n3, s5) {
  return T(this, c2, Ne).call(this, e, n3, s5, "copyInResponse");
}, rt = function(e, n3, s5) {
  return T(this, c2, Ne).call(this, e, n3, s5, "copyOutResponse");
}, Ne = function(e, n3, s5, i4) {
  h(this, o).setBuffer(e, s5);
  let a2 = h(this, o).byte() !== 0, u3 = h(this, o).int16(), m5 = new _2(n3, i4, a2, u3);
  for (let l2 = 0; l2 < u3; l2++) m5.columnTypes[l2] = h(this, o).int16();
  return m5;
}, st = function(e, n3, s5) {
  h(this, o).setBuffer(e, s5);
  let i4 = h(this, o).int32(), a2 = h(this, o).cstring(), u3 = h(this, o).cstring();
  return new K(n3, i4, a2, u3);
}, it = function(e, n3, s5) {
  h(this, o).setBuffer(e, s5);
  let i4 = h(this, o).int16(), a2 = new Y(n3, i4);
  for (let u3 = 0; u3 < i4; u3++) a2.fields[u3] = T(this, c2, at).call(this);
  return a2;
}, at = function() {
  let e = h(this, o).cstring(), n3 = h(this, o).int32(), s5 = h(this, o).int16(), i4 = h(this, o).int32(), a2 = h(this, o).int16(), u3 = h(this, o).int32(), m5 = h(this, o).int16() === 0 ? Te.text : Te.binary;
  return new z(e, n3, s5, i4, a2, u3, m5);
}, ot = function(e, n3, s5) {
  h(this, o).setBuffer(e, s5);
  let i4 = h(this, o).int16(), a2 = new j(n3, i4);
  for (let u3 = 0; u3 < i4; u3++) a2.dataTypeIDs[u3] = h(this, o).int32();
  return a2;
}, ut = function(e, n3, s5) {
  h(this, o).setBuffer(e, s5);
  let i4 = h(this, o).int16(), a2 = new Array(i4);
  for (let u3 = 0; u3 < i4; u3++) {
    let m5 = h(this, o).int32();
    a2[u3] = m5 === -1 ? null : h(this, o).string(m5);
  }
  return new X(n3, a2);
}, ct = function(e, n3, s5) {
  h(this, o).setBuffer(e, s5);
  let i4 = h(this, o).cstring(), a2 = h(this, o).cstring();
  return new q(n3, i4, a2);
}, lt = function(e, n3, s5) {
  h(this, o).setBuffer(e, s5);
  let i4 = h(this, o).int32(), a2 = h(this, o).int32();
  return new W(n3, i4, a2);
}, pt = function(e, n3, s5) {
  h(this, o).setBuffer(e, s5);
  let i4 = h(this, o).int32();
  switch (i4) {
    case 0:
      return new L2(n3);
    case 3:
      return new V(n3);
    case 5:
      return new F2(n3, h(this, o).bytes(4));
    case 10: {
      let a2 = [];
      for (; ; ) {
        let u3 = h(this, o).cstring();
        if (u3.length === 0) return new G(n3, a2);
        a2.push(u3);
      }
    }
    case 11:
      return new v(n3, h(this, o).string(n3 - 8));
    case 12:
      return new Q(n3, h(this, o).string(n3 - 8));
    default:
      throw new Error("Unknown authenticationOk message type " + i4);
  }
}, Oe = function(e, n3, s5, i4) {
  h(this, o).setBuffer(e, s5);
  let a2 = {}, u3 = h(this, o).string(1);
  for (; u3 !== "\0"; ) a2[u3] = h(this, o).cstring(), u3 = h(this, o).string(1);
  let m5 = a2.M, l2 = i4 === "notice" ? new Z(n3, m5) : new C(m5, n3, i4);
  return l2.severity = a2.S, l2.code = a2.C, l2.detail = a2.D, l2.hint = a2.H, l2.position = a2.P, l2.internalPosition = a2.p, l2.internalQuery = a2.q, l2.where = a2.W, l2.schema = a2.s, l2.table = a2.t, l2.column = a2.c, l2.dataType = a2.d, l2.constraint = a2.n, l2.file = a2.F, l2.line = a2.L, l2.routine = a2.R, l2;
};

// node_modules/@electric-sql/pglite/dist/chunk-F4GETNPB.js
init_chunk_QY3QWFKW();
u();
var o2 = { part: "part", container: "container" };
function s2(t2, r2, ...e) {
  let a2 = t2.length - 1, p5 = e.length - 1;
  if (p5 !== -1) {
    if (p5 === 0) {
      t2[a2] = t2[a2] + e[0] + r2;
      return;
    }
    t2[a2] = t2[a2] + e[0], t2.push(...e.slice(1, p5)), t2.push(e[p5] + r2);
  }
}
function y(t2, ...r2) {
  let e = [t2[0]];
  e.raw = [t2.raw[0]];
  let a2 = [];
  for (let p5 = 0; p5 < r2.length; p5++) {
    let n3 = r2[p5], i4 = p5 + 1;
    if (n3?._templateType === o2.part) {
      s2(e, t2[i4], n3.str), s2(e.raw, t2.raw[i4], n3.str);
      continue;
    }
    if (n3?._templateType === o2.container) {
      s2(e, t2[i4], ...n3.strings), s2(e.raw, t2.raw[i4], ...n3.strings.raw), a2.push(...n3.values);
      continue;
    }
    e.push(t2[i4]), e.raw.push(t2.raw[i4]), a2.push(n3);
  }
  return { _templateType: "container", strings: e, values: a2 };
}
function g3(t2, ...r2) {
  let { strings: e, values: a2 } = y(t2, ...r2);
  return { query: [e[0], ...a2.flatMap((p5, n3) => [`$${n3 + 1}`, e[n3 + 1]])].join(""), params: a2 };
}

// node_modules/@electric-sql/pglite/dist/chunk-HDIMFN25.js
init_chunk_QY3QWFKW();
u();
u();
function E(h2) {
  let s5 = h2.e;
  return s5.query = h2.query, s5.params = h2.params, s5.queryOptions = h2.options, s5;
}
var P3;
var p2;
var t;
var y2;
var x2;
var m;
var _3;
var z2 = class {
  constructor() {
    R(this, t);
    this.serializers = { ...an };
    this.parsers = { ...sn };
    R(this, P3, false);
    R(this, p2, false);
  }
  async _initArrayTypes({ force: s5 = false } = {}) {
    if (h(this, P3) && !s5) return;
    x(this, P3, true);
    let e = await this.query(`
      SELECT b.oid, b.typarray
      FROM pg_catalog.pg_type a
      LEFT JOIN pg_catalog.pg_type b ON b.oid = a.typelem
      WHERE a.typcategory = 'A'
      GROUP BY b.oid, b.typarray
      ORDER BY b.oid
    `);
    for (let r2 of e.rows) this.serializers[r2.typarray] = (o5) => Ye(o5, this.serializers[r2.oid], r2.typarray), this.parsers[r2.typarray] = (o5) => pn(o5, this.parsers[r2.oid], r2.typarray);
  }
  async refreshArrayTypes() {
    await this._initArrayTypes({ force: true });
  }
  async query(s5, e, r2) {
    return await this._checkReady(), await this._runExclusiveTransaction(async () => await T(this, t, x2).call(this, s5, e, r2));
  }
  async sql(s5, ...e) {
    let { query: r2, params: o5 } = g3(s5, ...e);
    return await this.query(r2, o5);
  }
  async exec(s5, e) {
    return await this._checkReady(), await this._runExclusiveTransaction(async () => await T(this, t, m).call(this, s5, e));
  }
  async describeQuery(s5, e) {
    let r2 = [];
    try {
      await T(this, t, y2).call(this, We.parse({ text: s5, types: e?.paramTypes }), e), r2 = await T(this, t, y2).call(this, We.describe({ type: "S" }), e);
    } catch (n3) {
      throw n3 instanceof C ? E({ e: n3, options: e, params: void 0, query: s5 }) : n3;
    } finally {
      r2.push(...await T(this, t, y2).call(this, We.sync(), e));
    }
    let o5 = r2.find((n3) => n3.name === "parameterDescription"), i4 = r2.find((n3) => n3.name === "rowDescription"), c4 = o5?.dataTypeIDs.map((n3) => ({ dataTypeID: n3, serializer: this.serializers[n3] })) ?? [], u3 = i4?.fields.map((n3) => ({ name: n3.name, dataTypeID: n3.dataTypeID, parser: this.parsers[n3.dataTypeID] })) ?? [];
    return { queryParams: c4, resultFields: u3 };
  }
  async transaction(s5) {
    return await this._checkReady(), await this._runExclusiveTransaction(async () => {
      await T(this, t, m).call(this, "BEGIN"), x(this, p2, true);
      let e = false, r2 = () => {
        if (e) throw new Error("Transaction is closed");
      }, o5 = { query: async (i4, c4, u3) => (r2(), await T(this, t, x2).call(this, i4, c4, u3)), sql: async (i4, ...c4) => {
        let { query: u3, params: n3 } = g3(i4, ...c4);
        return await T(this, t, x2).call(this, u3, n3);
      }, exec: async (i4, c4) => (r2(), await T(this, t, m).call(this, i4, c4)), rollback: async () => {
        r2(), await T(this, t, m).call(this, "ROLLBACK"), e = true;
      }, listen: async (i4, c4) => (r2(), await this.listen(i4, c4, o5)), get closed() {
        return e;
      } };
      try {
        let i4 = await s5(o5);
        return e || (e = true, await T(this, t, m).call(this, "COMMIT")), x(this, p2, false), i4;
      } catch (i4) {
        throw e || await T(this, t, m).call(this, "ROLLBACK"), x(this, p2, false), i4;
      }
    });
  }
  async runExclusive(s5) {
    return await this._runExclusiveQuery(s5);
  }
};
P3 = /* @__PURE__ */ new WeakMap(), p2 = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakSet(), y2 = async function(s5, e = {}) {
  return await this.execProtocolStream(s5, { ...e, syncToFs: false });
}, x2 = async function(s5, e = [], r2) {
  return await this._runExclusiveQuery(async () => {
    T(this, t, _3).call(this, "runQuery", s5, e, r2), await this._handleBlob(r2?.blob);
    let o5 = [];
    try {
      let c4 = await T(this, t, y2).call(this, We.parse({ text: s5, types: r2?.paramTypes }), r2), u3 = yn(await T(this, t, y2).call(this, We.describe({ type: "S" }), r2)), n3 = e.map((b4, k4) => {
        let D7 = u3[k4];
        if (b4 == null) return null;
        let v5 = r2?.serializers?.[D7] ?? this.serializers[D7];
        return v5 ? v5(b4) : b4.toString();
      });
      o5 = [...c4, ...await T(this, t, y2).call(this, We.bind({ values: n3 }), r2), ...await T(this, t, y2).call(this, We.describe({ type: "P" }), r2), ...await T(this, t, y2).call(this, We.execute({}), r2)];
    } catch (c4) {
      throw c4 instanceof C ? E({ e: c4, options: r2, params: e, query: s5 }) : c4;
    } finally {
      o5.push(...await T(this, t, y2).call(this, We.sync(), r2));
    }
    await this._cleanupBlob(), h(this, p2) || await this.syncToFs();
    let i4 = await this._getWrittenBlob();
    return fn(o5, this.parsers, r2, i4)[0];
  });
}, m = async function(s5, e) {
  return await this._runExclusiveQuery(async () => {
    T(this, t, _3).call(this, "runExec", s5, e), await this._handleBlob(e?.blob);
    let r2 = [];
    try {
      r2 = await T(this, t, y2).call(this, We.query(s5), e);
    } catch (i4) {
      throw i4 instanceof C ? E({ e: i4, options: e, params: void 0, query: s5 }) : i4;
    } finally {
      r2.push(...await T(this, t, y2).call(this, We.sync(), e));
    }
    this._cleanupBlob(), h(this, p2) || await this.syncToFs();
    let o5 = await this._getWrittenBlob();
    return fn(r2, this.parsers, e, o5);
  });
}, _3 = function(...s5) {
  this.debug > 0 && console.log(...s5);
};

// node_modules/@electric-sql/pglite/dist/index.js
init_chunk_4QMGOB4T();

// node_modules/@electric-sql/pglite/dist/chunk-WCYGQFD6.js
init_chunk_QY3QWFKW();
u();

// node_modules/@electric-sql/pglite/dist/index.js
init_chunk_XP4OYHYJ();
init_chunk_QY3QWFKW();
u();
u();
u();
var Et2 = new Error("timeout while waiting for mutex to become available");
var xt2 = new Error("mutex already locked");
var ct2 = new Error("request for lock canceled");
var mt2 = function(e, t2, r2, a2) {
  function o5(_5) {
    return _5 instanceof r2 ? _5 : new r2(function(s5) {
      s5(_5);
    });
  }
  return new (r2 || (r2 = Promise))(function(_5, s5) {
    function n3(u3) {
      try {
        d3(a2.next(u3));
      } catch (g5) {
        s5(g5);
      }
    }
    function l2(u3) {
      try {
        d3(a2.throw(u3));
      } catch (g5) {
        s5(g5);
      }
    }
    function d3(u3) {
      u3.done ? _5(u3.value) : o5(u3.value).then(n3, l2);
    }
    d3((a2 = a2.apply(e, t2 || [])).next());
  });
};
var Ie3 = class {
  constructor(t2, r2 = ct2) {
    this._value = t2, this._cancelError = r2, this._weightedQueues = [], this._weightedWaiters = [];
  }
  acquire(t2 = 1) {
    if (t2 <= 0) throw new Error(`invalid weight ${t2}: must be positive`);
    return new Promise((r2, a2) => {
      this._weightedQueues[t2 - 1] || (this._weightedQueues[t2 - 1] = []), this._weightedQueues[t2 - 1].push({ resolve: r2, reject: a2 }), this._dispatch();
    });
  }
  runExclusive(t2, r2 = 1) {
    return mt2(this, void 0, void 0, function* () {
      let [a2, o5] = yield this.acquire(r2);
      try {
        return yield t2(a2);
      } finally {
        o5();
      }
    });
  }
  waitForUnlock(t2 = 1) {
    if (t2 <= 0) throw new Error(`invalid weight ${t2}: must be positive`);
    return new Promise((r2) => {
      this._weightedWaiters[t2 - 1] || (this._weightedWaiters[t2 - 1] = []), this._weightedWaiters[t2 - 1].push(r2), this._dispatch();
    });
  }
  isLocked() {
    return this._value <= 0;
  }
  getValue() {
    return this._value;
  }
  setValue(t2) {
    this._value = t2, this._dispatch();
  }
  release(t2 = 1) {
    if (t2 <= 0) throw new Error(`invalid weight ${t2}: must be positive`);
    this._value += t2, this._dispatch();
  }
  cancel() {
    this._weightedQueues.forEach((t2) => t2.forEach((r2) => r2.reject(this._cancelError))), this._weightedQueues = [];
  }
  _dispatch() {
    var t2;
    for (let r2 = this._value; r2 > 0; r2--) {
      let a2 = (t2 = this._weightedQueues[r2 - 1]) === null || t2 === void 0 ? void 0 : t2.shift();
      if (!a2) continue;
      let o5 = this._value, _5 = r2;
      this._value -= r2, r2 = this._value + 1, a2.resolve([o5, this._newReleaser(_5)]);
    }
    this._drainUnlockWaiters();
  }
  _newReleaser(t2) {
    let r2 = false;
    return () => {
      r2 || (r2 = true, this.release(t2));
    };
  }
  _drainUnlockWaiters() {
    for (let t2 = this._value; t2 > 0; t2--) this._weightedWaiters[t2 - 1] && (this._weightedWaiters[t2 - 1].forEach((r2) => r2()), this._weightedWaiters[t2 - 1] = []);
  }
};
var gt2 = function(e, t2, r2, a2) {
  function o5(_5) {
    return _5 instanceof r2 ? _5 : new r2(function(s5) {
      s5(_5);
    });
  }
  return new (r2 || (r2 = Promise))(function(_5, s5) {
    function n3(u3) {
      try {
        d3(a2.next(u3));
      } catch (g5) {
        s5(g5);
      }
    }
    function l2(u3) {
      try {
        d3(a2.throw(u3));
      } catch (g5) {
        s5(g5);
      }
    }
    function d3(u3) {
      u3.done ? _5(u3.value) : o5(u3.value).then(n3, l2);
    }
    d3((a2 = a2.apply(e, t2 || [])).next());
  });
};
var J2 = class {
  constructor(t2) {
    this._semaphore = new Ie3(1, t2);
  }
  acquire() {
    return gt2(this, void 0, void 0, function* () {
      let [, t2] = yield this._semaphore.acquire();
      return t2;
    });
  }
  runExclusive(t2) {
    return this._semaphore.runExclusive(() => t2());
  }
  isLocked() {
    return this._semaphore.isLocked();
  }
  waitForUnlock() {
    return this._semaphore.waitForUnlock();
  }
  release() {
    this._semaphore.isLocked() && this._semaphore.release();
  }
  cancel() {
    return this._semaphore.cancel();
  }
};
u();
var Be3 = L(Re2(), 1);
async function Re3(e) {
  if (d2.IN_NODE) {
    let t2 = await Promise.resolve().then(() => __toESM(require_fs(), 1)), r2 = await Promise.resolve().then(() => __toESM(require_zlib(), 1)), { Writable: a2 } = await Promise.resolve().then(() => __toESM(require_stream(), 1)), { pipeline: o5 } = await Promise.resolve().then(() => __toESM(require_promises2(), 1));
    if (!t2.existsSync(e)) throw new Error(`Extension bundle not found: ${e}`);
    let _5 = r2.createGunzip(), s5 = [];
    return await o5(t2.createReadStream(e), _5, new a2({ write(n3, l2, d3) {
      s5.push(n3), d3();
    } })), new Blob(s5);
  } else {
    let t2 = await fetch(e.toString());
    if (!t2.ok || !t2.body) return null;
    if (t2.headers.get("Content-Encoding") === "gzip") return t2.blob();
    {
      let r2 = new DecompressionStream("gzip");
      return new Response(t2.body.pipeThrough(r2)).blob();
    }
  }
}
async function Ue3(e, t2) {
  let r2 = new Array();
  for (let a2 in e.pg_extensions) {
    let o5;
    try {
      o5 = await e.pg_extensions[a2];
    } catch (_5) {
      console.error("Failed to fetch extension:", a2, _5);
      continue;
    }
    if (o5) {
      let _5 = new Uint8Array(await o5.arrayBuffer());
      r2.push(...ft2(e, a2, _5, t2));
    } else console.error("Could not get binary data for extension:", a2);
  }
  return Promise.all(r2);
}
function ft2(e, t2, r2, a2) {
  let o5 = [];
  return Be3.default.untar(r2).sort((s5, n3) => s5.name > n3.name ? 1 : s5.name < n3.name ? -1 : 0).forEach((s5) => {
    if (s5.name.endsWith("/")) {
      let n3 = `${e.WASM_PREFIX}/${s5.name}`;
      e.FS.analyzePath(n3).exists === false && e.FS.mkdirTree(n3);
    } else if (!s5.name.startsWith(".")) {
      let n3 = e.WASM_PREFIX + "/" + s5.name;
      if (s5.name.endsWith(".so")) {
        a2(`pgfs:ext preloading ${n3}`);
        let l2 = s5.name.split("/").pop(), d3 = vt2(n3), u3 = new Promise((g5, p5) => {
          let m5 = (...c4) => {
            a2("pgfs:ext OK", n3, c4), g5();
          }, f5 = (...c4) => {
            a2("pgfs:ext FAIL", n3, c4), Ge3(n3, e, s5), g5();
          };
          e.FS.createPreloadedFile(d3, l2, s5.data, true, true, m5, f5, false);
        });
        o5.push(u3);
      } else Ge3(n3, e, s5);
    }
  }), o5;
}
function Ge3(e, t2, r2) {
  try {
    let a2 = e.substring(0, e.lastIndexOf("/"));
    t2.FS.analyzePath(a2).exists === false && t2.FS.mkdirTree(a2), t2.FS.writeFile(e, r2.data);
  } catch (a2) {
    console.error(`Error writing file ${e}`, a2);
  }
}
function vt2(e) {
  let t2 = e.lastIndexOf("/");
  return t2 > 0 ? e.slice(0, t2) : e;
}
u();
u();
var Me3 = class extends We2 {
  async init(t2, r2) {
    return this.pg = t2, { emscriptenOpts: { ...r2, preRun: [...r2.preRun || [], (o5) => {
      let _5 = o5.FS.filesystems.IDBFS;
      o5.FS.analyzePath(C2).exists || o5.FS.mkdir(C2), o5.FS.analyzePath(`${C2}/${this.dataDir}`).exists || o5.FS.mkdir(`${C2}/${this.dataDir}`), o5.FS.mount(_5, {}, `${C2}/${this.dataDir}`), o5.FS.symlink(`${C2}/${this.dataDir}`, B2);
    }] } };
  }
  initialSyncFs() {
    return new Promise((t2, r2) => {
      this.pg.Module.FS.syncfs(true, (a2) => {
        a2 ? r2(a2) : t2();
      });
    });
  }
  syncToFs(t2) {
    return new Promise((r2, a2) => {
      this.pg.Module.FS.syncfs(false, (o5) => {
        o5 ? a2(o5) : r2();
      });
    });
  }
  async closeFs() {
    let t2 = this.pg.Module.FS.filesystems.IDBFS.dbs[this.dataDir];
    t2 && t2.close(), this.pg.Module.FS.quit();
  }
};
u();
var he2 = class extends We2 {
  async closeFs() {
    this.pg.Module.FS.quit();
  }
};
function Ze2(e) {
  let t2;
  if (e?.startsWith("file://")) {
    if (e = e.slice(7), !e) throw new Error("Invalid dataDir, must be a valid path");
    t2 = "nodefs";
  } else e?.startsWith("idb://") ? (e = e.slice(6), t2 = "idbfs") : e?.startsWith("opfs-ahp://") ? (e = e.slice(11), t2 = "opfs-ahp") : !e || e?.startsWith("memory://") ? t2 = "memoryfs" : t2 = "nodefs";
  return { dataDir: e, fsType: t2 };
}
async function je3(e, t2) {
  let r2;
  if (e && t2 === "nodefs") {
    let { NodeFS: a2 } = await Promise.resolve().then(() => (init_nodefs(), nodefs_exports));
    r2 = new a2(e);
  } else if (e && t2 === "idbfs") r2 = new Me3(e);
  else if (e && t2 === "opfs-ahp") {
    let { OpfsAhpFS: a2 } = await Promise.resolve().then(() => (init_opfs_ahp(), opfs_ahp_exports));
    r2 = new a2(e);
  } else r2 = new he2();
  return r2;
}
u();
u();
var Mt3 = (() => {
  var _scriptName = import.meta.url;
  return async function(moduleArg = {}) {
    var moduleRtn, Module = moduleArg, readyPromiseResolve, readyPromiseReject, readyPromise = new Promise((e, t2) => {
      readyPromiseResolve = e, readyPromiseReject = t2;
    }), ENVIRONMENT_IS_WEB = typeof window == "object", ENVIRONMENT_IS_WORKER = typeof WorkerGlobalScope < "u", ENVIRONMENT_IS_NODE = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string" && process.type != "renderer";
    if (ENVIRONMENT_IS_NODE) {
      let { createRequire: e } = await Promise.resolve().then(() => __toESM(require_module(), 1)), t2 = import.meta.url;
      t2.startsWith("data:") && (t2 = "/");
      var require = e(t2);
    }
    Module.expectedDataFileDownloads ?? (Module.expectedDataFileDownloads = 0), Module.expectedDataFileDownloads++, (() => {
      var e = typeof ENVIRONMENT_IS_PTHREAD < "u" && ENVIRONMENT_IS_PTHREAD, t2 = typeof ENVIRONMENT_IS_WASM_WORKER < "u" && ENVIRONMENT_IS_WASM_WORKER;
      if (e || t2) return;
      var r2 = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string";
      function a2(o5) {
        var _5 = "";
        typeof window == "object" ? _5 = window.encodeURIComponent(window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/")) + "/") : typeof process > "u" && typeof location < "u" && (_5 = encodeURIComponent(location.pathname.substring(0, location.pathname.lastIndexOf("/")) + "/"));
        var s5 = "pglite.data", n3 = "pglite.data", l2 = Module.locateFile ? Module.locateFile(n3, "") : n3, d3 = o5.remote_package_size;
        function u3(c4, w4, x5, y5) {
          if (r2) {
            require("fs").readFile(c4, (h2, F4) => {
              h2 ? y5(h2) : x5(F4.buffer);
            });
            return;
          }
          Module.dataFileDownloads ?? (Module.dataFileDownloads = {}), fetch(c4).catch((h2) => Promise.reject(new Error(`Network Error: ${c4}`, { cause: h2 }))).then((h2) => {
            if (!h2.ok) return Promise.reject(new Error(`${h2.status}: ${h2.url}`));
            if (!h2.body && h2.arrayBuffer) return h2.arrayBuffer().then(x5);
            let F4 = h2.body.getReader(), E3 = () => F4.read().then(ae2).catch((U3) => Promise.reject(new Error(`Unexpected error while handling : ${h2.url} ${U3}`, { cause: U3 }))), b4 = [], S4 = h2.headers, z3 = Number(S4.get("Content-Length") ?? w4), H4 = 0, ae2 = ({ done: U3, value: W5 }) => {
              if (U3) {
                let A3 = new Uint8Array(b4.map((I2) => I2.length).reduce((I2, _t2) => I2 + _t2, 0)), O4 = 0;
                for (let I2 of b4) A3.set(I2, O4), O4 += I2.length;
                x5(A3.buffer);
              } else {
                b4.push(W5), H4 += W5.length, Module.dataFileDownloads[c4] = { loaded: H4, total: z3 };
                let A3 = 0, O4 = 0;
                for (let I2 of Object.values(Module.dataFileDownloads)) A3 += I2.loaded, O4 += I2.total;
                return Module.setStatus?.(`Downloading data... (${A3}/${O4})`), E3();
              }
            };
            return Module.setStatus?.("Downloading data..."), E3();
          });
        }
        function g5(c4) {
          console.error("package error:", c4);
        }
        var p5 = null, m5 = Module.getPreloadedPackage ? Module.getPreloadedPackage(l2, d3) : null;
        m5 || u3(l2, d3, (c4) => {
          p5 ? (p5(c4), p5 = null) : m5 = c4;
        }, g5);
        function f5(c4) {
          function w4(E3, b4) {
            if (!E3) throw b4 + new Error().stack;
          }
          c4.FS_createPath("/", "home", true, true), c4.FS_createPath("/home", "postgres", true, true), c4.FS_createPath("/", "pglite", true, true), c4.FS_createPath("/pglite", "bin", true, true), c4.FS_createPath("/pglite", "lib", true, true), c4.FS_createPath("/pglite/lib", "postgresql", true, true), c4.FS_createPath("/pglite/lib/postgresql", "pgxs", true, true), c4.FS_createPath("/pglite/lib/postgresql/pgxs", "config", true, true), c4.FS_createPath("/pglite/lib/postgresql/pgxs", "src", true, true), c4.FS_createPath("/pglite/lib/postgresql/pgxs/src", "makefiles", true, true), c4.FS_createPath("/pglite/lib/postgresql/pgxs/src", "test", true, true), c4.FS_createPath("/pglite/lib/postgresql/pgxs/src/test", "isolation", true, true), c4.FS_createPath("/pglite/lib/postgresql/pgxs/src/test", "regress", true, true), c4.FS_createPath("/pglite", "share", true, true), c4.FS_createPath("/pglite/share", "postgresql", true, true), c4.FS_createPath("/pglite/share/postgresql", "extension", true, true), c4.FS_createPath("/pglite/share/postgresql", "timezone", true, true), c4.FS_createPath("/pglite/share/postgresql/timezone", "Africa", true, true), c4.FS_createPath("/pglite/share/postgresql/timezone", "America", true, true), c4.FS_createPath("/pglite/share/postgresql/timezone/America", "Argentina", true, true), c4.FS_createPath("/pglite/share/postgresql/timezone/America", "Indiana", true, true), c4.FS_createPath("/pglite/share/postgresql/timezone/America", "Kentucky", true, true), c4.FS_createPath("/pglite/share/postgresql/timezone/America", "North_Dakota", true, true), c4.FS_createPath("/pglite/share/postgresql/timezone", "Antarctica", true, true), c4.FS_createPath("/pglite/share/postgresql/timezone", "Arctic", true, true), c4.FS_createPath("/pglite/share/postgresql/timezone", "Asia", true, true), c4.FS_createPath("/pglite/share/postgresql/timezone", "Atlantic", true, true), c4.FS_createPath("/pglite/share/postgresql/timezone", "Australia", true, true), c4.FS_createPath("/pglite/share/postgresql/timezone", "Brazil", true, true), c4.FS_createPath("/pglite/share/postgresql/timezone", "Canada", true, true), c4.FS_createPath("/pglite/share/postgresql/timezone", "Chile", true, true), c4.FS_createPath("/pglite/share/postgresql/timezone", "Etc", true, true), c4.FS_createPath("/pglite/share/postgresql/timezone", "Europe", true, true), c4.FS_createPath("/pglite/share/postgresql/timezone", "Indian", true, true), c4.FS_createPath("/pglite/share/postgresql/timezone", "Mexico", true, true), c4.FS_createPath("/pglite/share/postgresql/timezone", "Pacific", true, true), c4.FS_createPath("/pglite/share/postgresql/timezone", "US", true, true), c4.FS_createPath("/pglite/share/postgresql", "timezonesets", true, true), c4.FS_createPath("/pglite/share/postgresql", "tsearch_data", true, true);
          function x5(E3, b4, S4) {
            this.start = E3, this.end = b4, this.audio = S4;
          }
          x5.prototype = { requests: {}, open: function(E3, b4) {
            this.name = b4, this.requests[b4] = this, c4.addRunDependency(`fp ${this.name}`);
          }, send: function() {
          }, onload: function() {
            var E3 = this.byteArray.subarray(this.start, this.end);
            this.finish(E3);
          }, finish: function(E3) {
            var b4 = this;
            c4.FS_createDataFile(this.name, null, E3, true, true, true), c4.removeRunDependency(`fp ${b4.name}`), this.requests[this.name] = null;
          } };
          for (var y5 = o5.files, h2 = 0; h2 < y5.length; ++h2) new x5(y5[h2].start, y5[h2].end, y5[h2].audio || 0).open("GET", y5[h2].filename);
          function F4(E3) {
            w4(E3, "Loading data file failed."), w4(E3.constructor.name === ArrayBuffer.name, "bad input to processPackageData");
            var b4 = new Uint8Array(E3);
            x5.prototype.byteArray = b4;
            for (var S4 = o5.files, z3 = 0; z3 < S4.length; ++z3) x5.prototype.requests[S4[z3].filename].onload();
            c4.removeRunDependency("datafile_pglite.data");
          }
          c4.addRunDependency("datafile_pglite.data"), c4.preloadResults ?? (c4.preloadResults = {}), c4.preloadResults[s5] = { fromCache: false }, m5 ? (F4(m5), m5 = null) : p5 = F4;
        }
        Module.calledRun ? f5(Module) : (Module.preRun ?? (Module.preRun = [])).push(f5);
      }
      a2({ files: [{ filename: "/home/postgres/.pgpass", start: 0, end: 204 }, { filename: "/pglite/bin/initdb", start: 204, end: 223 }, { filename: "/pglite/bin/pg_dump", start: 223, end: 242 }, { filename: "/pglite/bin/postgres", start: 242, end: 261 }, { filename: "/pglite/lib/postgresql/cyrillic_and_mic.so", start: 261, end: 4755 }, { filename: "/pglite/lib/postgresql/dict_snowball.so", start: 4755, end: 577875 }, { filename: "/pglite/lib/postgresql/euc2004_sjis2004.so", start: 577875, end: 579948 }, { filename: "/pglite/lib/postgresql/euc_cn_and_mic.so", start: 579948, end: 580889 }, { filename: "/pglite/lib/postgresql/euc_jp_and_sjis.so", start: 580889, end: 588149 }, { filename: "/pglite/lib/postgresql/euc_kr_and_mic.so", start: 588149, end: 589100 }, { filename: "/pglite/lib/postgresql/euc_tw_and_big5.so", start: 589100, end: 593658 }, { filename: "/pglite/lib/postgresql/latin2_and_win1250.so", start: 593658, end: 595064 }, { filename: "/pglite/lib/postgresql/latin_and_mic.so", start: 595064, end: 596085 }, { filename: "/pglite/lib/postgresql/libpqwalreceiver.so", start: 596085, end: 717586 }, { filename: "/pglite/lib/postgresql/pgoutput.so", start: 717586, end: 730818 }, { filename: "/pglite/lib/postgresql/pgxs/config/install-sh", start: 730818, end: 744815 }, { filename: "/pglite/lib/postgresql/pgxs/config/missing", start: 744815, end: 746163 }, { filename: "/pglite/lib/postgresql/pgxs/src/Makefile.global", start: 746163, end: 783456 }, { filename: "/pglite/lib/postgresql/pgxs/src/Makefile.port", start: 783456, end: 784302 }, { filename: "/pglite/lib/postgresql/pgxs/src/Makefile.shlib", start: 784302, end: 799163 }, { filename: "/pglite/lib/postgresql/pgxs/src/makefiles/pgxs.mk", start: 799163, end: 815370 }, { filename: "/pglite/lib/postgresql/pgxs/src/nls-global.mk", start: 815370, end: 822238 }, { filename: "/pglite/lib/postgresql/pgxs/src/test/isolation/isolationtester.js", start: 822238, end: 937770 }, { filename: "/pglite/lib/postgresql/pgxs/src/test/isolation/pg_isolation_regress.js", start: 937770, end: 1055739 }, { filename: "/pglite/lib/postgresql/pgxs/src/test/regress/pg_regress.js", start: 1055739, end: 1173194 }, { filename: "/pglite/lib/postgresql/plpgsql.so", start: 1173194, end: 1323230 }, { filename: "/pglite/lib/postgresql/utf8_and_big5.so", start: 1323230, end: 1437978 }, { filename: "/pglite/lib/postgresql/utf8_and_cyrillic.so", start: 1437978, end: 1443952 }, { filename: "/pglite/lib/postgresql/utf8_and_euc2004.so", start: 1443952, end: 1648884 }, { filename: "/pglite/lib/postgresql/utf8_and_euc_cn.so", start: 1648884, end: 1724064 }, { filename: "/pglite/lib/postgresql/utf8_and_euc_jp.so", start: 1724064, end: 1875292 }, { filename: "/pglite/lib/postgresql/utf8_and_euc_kr.so", start: 1875292, end: 1978148 }, { filename: "/pglite/lib/postgresql/utf8_and_euc_tw.so", start: 1978148, end: 2177704 }, { filename: "/pglite/lib/postgresql/utf8_and_gb18030.so", start: 2177704, end: 2440081 }, { filename: "/pglite/lib/postgresql/utf8_and_gbk.so", start: 2440081, end: 2586613 }, { filename: "/pglite/lib/postgresql/utf8_and_iso8859.so", start: 2586613, end: 2610141 }, { filename: "/pglite/lib/postgresql/utf8_and_iso8859_1.so", start: 2610141, end: 2611113 }, { filename: "/pglite/lib/postgresql/utf8_and_johab.so", start: 2611113, end: 2772817 }, { filename: "/pglite/lib/postgresql/utf8_and_sjis.so", start: 2772817, end: 2854477 }, { filename: "/pglite/lib/postgresql/utf8_and_sjis2004.so", start: 2854477, end: 2981109 }, { filename: "/pglite/lib/postgresql/utf8_and_uhc.so", start: 2981109, end: 3148381 }, { filename: "/pglite/lib/postgresql/utf8_and_win.so", start: 3148381, end: 3174836 }, { filename: "/pglite/locale-a", start: 3174836, end: 3174861 }, { filename: "/pglite/password", start: 3174861, end: 3174869 }, { filename: "/pglite/pgstdin", start: 3174869, end: 3174888 }, { filename: "/pglite/pgstdout", start: 3174888, end: 3174907 }, { filename: "/pglite/share/postgresql/errcodes.txt", start: 3174907, end: 3208299 }, { filename: "/pglite/share/postgresql/extension/plpgsql--1.0.sql", start: 3208299, end: 3208957 }, { filename: "/pglite/share/postgresql/extension/plpgsql.control", start: 3208957, end: 3209150 }, { filename: "/pglite/share/postgresql/information_schema.sql", start: 3209150, end: 3324673 }, { filename: "/pglite/share/postgresql/pg_hba.conf.sample", start: 3324673, end: 3330298 }, { filename: "/pglite/share/postgresql/pg_ident.conf.sample", start: 3330298, end: 3332938 }, { filename: "/pglite/share/postgresql/pg_service.conf.sample", start: 3332938, end: 3333542 }, { filename: "/pglite/share/postgresql/postgres.bki", start: 3333542, end: 4286810 }, { filename: "/pglite/share/postgresql/postgresql.conf.sample", start: 4286810, end: 4317472 }, { filename: "/pglite/share/postgresql/psqlrc.sample", start: 4317472, end: 4317750 }, { filename: "/pglite/share/postgresql/snowball_create.sql", start: 4317750, end: 4361926 }, { filename: "/pglite/share/postgresql/sql_features.txt", start: 4361926, end: 4397659 }, { filename: "/pglite/share/postgresql/system_constraints.sql", start: 4397659, end: 4406554 }, { filename: "/pglite/share/postgresql/system_functions.sql", start: 4406554, end: 4430857 }, { filename: "/pglite/share/postgresql/system_views.sql", start: 4430857, end: 4482551 }, { filename: "/pglite/share/postgresql/timezone/Africa/Abidjan", start: 4482551, end: 4482699 }, { filename: "/pglite/share/postgresql/timezone/Africa/Accra", start: 4482699, end: 4482847 }, { filename: "/pglite/share/postgresql/timezone/Africa/Addis_Ababa", start: 4482847, end: 4483112 }, { filename: "/pglite/share/postgresql/timezone/Africa/Algiers", start: 4483112, end: 4483847 }, { filename: "/pglite/share/postgresql/timezone/Africa/Asmara", start: 4483847, end: 4484112 }, { filename: "/pglite/share/postgresql/timezone/Africa/Asmera", start: 4484112, end: 4484377 }, { filename: "/pglite/share/postgresql/timezone/Africa/Bamako", start: 4484377, end: 4484525 }, { filename: "/pglite/share/postgresql/timezone/Africa/Bangui", start: 4484525, end: 4484760 }, { filename: "/pglite/share/postgresql/timezone/Africa/Banjul", start: 4484760, end: 4484908 }, { filename: "/pglite/share/postgresql/timezone/Africa/Bissau", start: 4484908, end: 4485102 }, { filename: "/pglite/share/postgresql/timezone/Africa/Blantyre", start: 4485102, end: 4485251 }, { filename: "/pglite/share/postgresql/timezone/Africa/Brazzaville", start: 4485251, end: 4485486 }, { filename: "/pglite/share/postgresql/timezone/Africa/Bujumbura", start: 4485486, end: 4485635 }, { filename: "/pglite/share/postgresql/timezone/Africa/Cairo", start: 4485635, end: 4488034 }, { filename: "/pglite/share/postgresql/timezone/Africa/Casablanca", start: 4488034, end: 4490463 }, { filename: "/pglite/share/postgresql/timezone/Africa/Ceuta", start: 4490463, end: 4492515 }, { filename: "/pglite/share/postgresql/timezone/Africa/Conakry", start: 4492515, end: 4492663 }, { filename: "/pglite/share/postgresql/timezone/Africa/Dakar", start: 4492663, end: 4492811 }, { filename: "/pglite/share/postgresql/timezone/Africa/Dar_es_Salaam", start: 4492811, end: 4493076 }, { filename: "/pglite/share/postgresql/timezone/Africa/Djibouti", start: 4493076, end: 4493341 }, { filename: "/pglite/share/postgresql/timezone/Africa/Douala", start: 4493341, end: 4493576 }, { filename: "/pglite/share/postgresql/timezone/Africa/El_Aaiun", start: 4493576, end: 4495871 }, { filename: "/pglite/share/postgresql/timezone/Africa/Freetown", start: 4495871, end: 4496019 }, { filename: "/pglite/share/postgresql/timezone/Africa/Gaborone", start: 4496019, end: 4496168 }, { filename: "/pglite/share/postgresql/timezone/Africa/Harare", start: 4496168, end: 4496317 }, { filename: "/pglite/share/postgresql/timezone/Africa/Johannesburg", start: 4496317, end: 4496563 }, { filename: "/pglite/share/postgresql/timezone/Africa/Juba", start: 4496563, end: 4497242 }, { filename: "/pglite/share/postgresql/timezone/Africa/Kampala", start: 4497242, end: 4497507 }, { filename: "/pglite/share/postgresql/timezone/Africa/Khartoum", start: 4497507, end: 4498186 }, { filename: "/pglite/share/postgresql/timezone/Africa/Kigali", start: 4498186, end: 4498335 }, { filename: "/pglite/share/postgresql/timezone/Africa/Kinshasa", start: 4498335, end: 4498570 }, { filename: "/pglite/share/postgresql/timezone/Africa/Lagos", start: 4498570, end: 4498805 }, { filename: "/pglite/share/postgresql/timezone/Africa/Libreville", start: 4498805, end: 4499040 }, { filename: "/pglite/share/postgresql/timezone/Africa/Lome", start: 4499040, end: 4499188 }, { filename: "/pglite/share/postgresql/timezone/Africa/Luanda", start: 4499188, end: 4499423 }, { filename: "/pglite/share/postgresql/timezone/Africa/Lubumbashi", start: 4499423, end: 4499572 }, { filename: "/pglite/share/postgresql/timezone/Africa/Lusaka", start: 4499572, end: 4499721 }, { filename: "/pglite/share/postgresql/timezone/Africa/Malabo", start: 4499721, end: 4499956 }, { filename: "/pglite/share/postgresql/timezone/Africa/Maputo", start: 4499956, end: 4500105 }, { filename: "/pglite/share/postgresql/timezone/Africa/Maseru", start: 4500105, end: 4500351 }, { filename: "/pglite/share/postgresql/timezone/Africa/Mbabane", start: 4500351, end: 4500597 }, { filename: "/pglite/share/postgresql/timezone/Africa/Mogadishu", start: 4500597, end: 4500862 }, { filename: "/pglite/share/postgresql/timezone/Africa/Monrovia", start: 4500862, end: 4501070 }, { filename: "/pglite/share/postgresql/timezone/Africa/Nairobi", start: 4501070, end: 4501335 }, { filename: "/pglite/share/postgresql/timezone/Africa/Ndjamena", start: 4501335, end: 4501534 }, { filename: "/pglite/share/postgresql/timezone/Africa/Niamey", start: 4501534, end: 4501769 }, { filename: "/pglite/share/postgresql/timezone/Africa/Nouakchott", start: 4501769, end: 4501917 }, { filename: "/pglite/share/postgresql/timezone/Africa/Ouagadougou", start: 4501917, end: 4502065 }, { filename: "/pglite/share/postgresql/timezone/Africa/Porto-Novo", start: 4502065, end: 4502300 }, { filename: "/pglite/share/postgresql/timezone/Africa/Sao_Tome", start: 4502300, end: 4502554 }, { filename: "/pglite/share/postgresql/timezone/Africa/Timbuktu", start: 4502554, end: 4502702 }, { filename: "/pglite/share/postgresql/timezone/Africa/Tripoli", start: 4502702, end: 4503327 }, { filename: "/pglite/share/postgresql/timezone/Africa/Tunis", start: 4503327, end: 4504016 }, { filename: "/pglite/share/postgresql/timezone/Africa/Windhoek", start: 4504016, end: 4504971 }, { filename: "/pglite/share/postgresql/timezone/America/Adak", start: 4504971, end: 4507327 }, { filename: "/pglite/share/postgresql/timezone/America/Anchorage", start: 4507327, end: 4509698 }, { filename: "/pglite/share/postgresql/timezone/America/Anguilla", start: 4509698, end: 4509944 }, { filename: "/pglite/share/postgresql/timezone/America/Antigua", start: 4509944, end: 4510190 }, { filename: "/pglite/share/postgresql/timezone/America/Araguaina", start: 4510190, end: 4511074 }, { filename: "/pglite/share/postgresql/timezone/America/Argentina/Buenos_Aires", start: 4511074, end: 4512150 }, { filename: "/pglite/share/postgresql/timezone/America/Argentina/Catamarca", start: 4512150, end: 4513226 }, { filename: "/pglite/share/postgresql/timezone/America/Argentina/ComodRivadavia", start: 4513226, end: 4514302 }, { filename: "/pglite/share/postgresql/timezone/America/Argentina/Cordoba", start: 4514302, end: 4515378 }, { filename: "/pglite/share/postgresql/timezone/America/Argentina/Jujuy", start: 4515378, end: 4516426 }, { filename: "/pglite/share/postgresql/timezone/America/Argentina/La_Rioja", start: 4516426, end: 4517516 }, { filename: "/pglite/share/postgresql/timezone/America/Argentina/Mendoza", start: 4517516, end: 4518592 }, { filename: "/pglite/share/postgresql/timezone/America/Argentina/Rio_Gallegos", start: 4518592, end: 4519668 }, { filename: "/pglite/share/postgresql/timezone/America/Argentina/Salta", start: 4519668, end: 4520716 }, { filename: "/pglite/share/postgresql/timezone/America/Argentina/San_Juan", start: 4520716, end: 4521806 }, { filename: "/pglite/share/postgresql/timezone/America/Argentina/San_Luis", start: 4521806, end: 4522908 }, { filename: "/pglite/share/postgresql/timezone/America/Argentina/Tucuman", start: 4522908, end: 4524012 }, { filename: "/pglite/share/postgresql/timezone/America/Argentina/Ushuaia", start: 4524012, end: 4525088 }, { filename: "/pglite/share/postgresql/timezone/America/Aruba", start: 4525088, end: 4525334 }, { filename: "/pglite/share/postgresql/timezone/America/Asuncion", start: 4525334, end: 4526992 }, { filename: "/pglite/share/postgresql/timezone/America/Atikokan", start: 4526992, end: 4527174 }, { filename: "/pglite/share/postgresql/timezone/America/Atka", start: 4527174, end: 4529530 }, { filename: "/pglite/share/postgresql/timezone/America/Bahia", start: 4529530, end: 4530554 }, { filename: "/pglite/share/postgresql/timezone/America/Bahia_Banderas", start: 4530554, end: 4531654 }, { filename: "/pglite/share/postgresql/timezone/America/Barbados", start: 4531654, end: 4532090 }, { filename: "/pglite/share/postgresql/timezone/America/Belem", start: 4532090, end: 4532666 }, { filename: "/pglite/share/postgresql/timezone/America/Belize", start: 4532666, end: 4534280 }, { filename: "/pglite/share/postgresql/timezone/America/Blanc-Sablon", start: 4534280, end: 4534526 }, { filename: "/pglite/share/postgresql/timezone/America/Boa_Vista", start: 4534526, end: 4535158 }, { filename: "/pglite/share/postgresql/timezone/America/Bogota", start: 4535158, end: 4535404 }, { filename: "/pglite/share/postgresql/timezone/America/Boise", start: 4535404, end: 4537814 }, { filename: "/pglite/share/postgresql/timezone/America/Buenos_Aires", start: 4537814, end: 4538890 }, { filename: "/pglite/share/postgresql/timezone/America/Cambridge_Bay", start: 4538890, end: 4541144 }, { filename: "/pglite/share/postgresql/timezone/America/Campo_Grande", start: 4541144, end: 4542588 }, { filename: "/pglite/share/postgresql/timezone/America/Cancun", start: 4542588, end: 4543452 }, { filename: "/pglite/share/postgresql/timezone/America/Caracas", start: 4543452, end: 4543716 }, { filename: "/pglite/share/postgresql/timezone/America/Catamarca", start: 4543716, end: 4544792 }, { filename: "/pglite/share/postgresql/timezone/America/Cayenne", start: 4544792, end: 4544990 }, { filename: "/pglite/share/postgresql/timezone/America/Cayman", start: 4544990, end: 4545172 }, { filename: "/pglite/share/postgresql/timezone/America/Chicago", start: 4545172, end: 4548764 }, { filename: "/pglite/share/postgresql/timezone/America/Chihuahua", start: 4548764, end: 4549866 }, { filename: "/pglite/share/postgresql/timezone/America/Ciudad_Juarez", start: 4549866, end: 4551404 }, { filename: "/pglite/share/postgresql/timezone/America/Coral_Harbour", start: 4551404, end: 4551586 }, { filename: "/pglite/share/postgresql/timezone/America/Cordoba", start: 4551586, end: 4552662 }, { filename: "/pglite/share/postgresql/timezone/America/Costa_Rica", start: 4552662, end: 4552978 }, { filename: "/pglite/share/postgresql/timezone/America/Coyhaique", start: 4552978, end: 4555118 }, { filename: "/pglite/share/postgresql/timezone/America/Creston", start: 4555118, end: 4555478 }, { filename: "/pglite/share/postgresql/timezone/America/Cuiaba", start: 4555478, end: 4556894 }, { filename: "/pglite/share/postgresql/timezone/America/Curacao", start: 4556894, end: 4557140 }, { filename: "/pglite/share/postgresql/timezone/America/Danmarkshavn", start: 4557140, end: 4557838 }, { filename: "/pglite/share/postgresql/timezone/America/Dawson", start: 4557838, end: 4559452 }, { filename: "/pglite/share/postgresql/timezone/America/Dawson_Creek", start: 4559452, end: 4560502 }, { filename: "/pglite/share/postgresql/timezone/America/Denver", start: 4560502, end: 4562962 }, { filename: "/pglite/share/postgresql/timezone/America/Detroit", start: 4562962, end: 4565192 }, { filename: "/pglite/share/postgresql/timezone/America/Dominica", start: 4565192, end: 4565438 }, { filename: "/pglite/share/postgresql/timezone/America/Edmonton", start: 4565438, end: 4567770 }, { filename: "/pglite/share/postgresql/timezone/America/Eirunepe", start: 4567770, end: 4568426 }, { filename: "/pglite/share/postgresql/timezone/America/El_Salvador", start: 4568426, end: 4568650 }, { filename: "/pglite/share/postgresql/timezone/America/Ensenada", start: 4568650, end: 4571108 }, { filename: "/pglite/share/postgresql/timezone/America/Fort_Nelson", start: 4571108, end: 4573348 }, { filename: "/pglite/share/postgresql/timezone/America/Fort_Wayne", start: 4573348, end: 4575030 }, { filename: "/pglite/share/postgresql/timezone/America/Fortaleza", start: 4575030, end: 4575746 }, { filename: "/pglite/share/postgresql/timezone/America/Glace_Bay", start: 4575746, end: 4577938 }, { filename: "/pglite/share/postgresql/timezone/America/Godthab", start: 4577938, end: 4579841 }, { filename: "/pglite/share/postgresql/timezone/America/Goose_Bay", start: 4579841, end: 4583051 }, { filename: "/pglite/share/postgresql/timezone/America/Grand_Turk", start: 4583051, end: 4584885 }, { filename: "/pglite/share/postgresql/timezone/America/Grenada", start: 4584885, end: 4585131 }, { filename: "/pglite/share/postgresql/timezone/America/Guadeloupe", start: 4585131, end: 4585377 }, { filename: "/pglite/share/postgresql/timezone/America/Guatemala", start: 4585377, end: 4585657 }, { filename: "/pglite/share/postgresql/timezone/America/Guayaquil", start: 4585657, end: 4585903 }, { filename: "/pglite/share/postgresql/timezone/America/Guyana", start: 4585903, end: 4586165 }, { filename: "/pglite/share/postgresql/timezone/America/Halifax", start: 4586165, end: 4589589 }, { filename: "/pglite/share/postgresql/timezone/America/Havana", start: 4589589, end: 4592005 }, { filename: "/pglite/share/postgresql/timezone/America/Hermosillo", start: 4592005, end: 4592393 }, { filename: "/pglite/share/postgresql/timezone/America/Indiana/Indianapolis", start: 4592393, end: 4594075 }, { filename: "/pglite/share/postgresql/timezone/America/Indiana/Knox", start: 4594075, end: 4596519 }, { filename: "/pglite/share/postgresql/timezone/America/Indiana/Marengo", start: 4596519, end: 4598257 }, { filename: "/pglite/share/postgresql/timezone/America/Indiana/Petersburg", start: 4598257, end: 4600177 }, { filename: "/pglite/share/postgresql/timezone/America/Indiana/Tell_City", start: 4600177, end: 4601877 }, { filename: "/pglite/share/postgresql/timezone/America/Indiana/Vevay", start: 4601877, end: 4603307 }, { filename: "/pglite/share/postgresql/timezone/America/Indiana/Vincennes", start: 4603307, end: 4605017 }, { filename: "/pglite/share/postgresql/timezone/America/Indiana/Winamac", start: 4605017, end: 4606811 }, { filename: "/pglite/share/postgresql/timezone/America/Indianapolis", start: 4606811, end: 4608493 }, { filename: "/pglite/share/postgresql/timezone/America/Inuvik", start: 4608493, end: 4610567 }, { filename: "/pglite/share/postgresql/timezone/America/Iqaluit", start: 4610567, end: 4612769 }, { filename: "/pglite/share/postgresql/timezone/America/Jamaica", start: 4612769, end: 4613251 }, { filename: "/pglite/share/postgresql/timezone/America/Jujuy", start: 4613251, end: 4614299 }, { filename: "/pglite/share/postgresql/timezone/America/Juneau", start: 4614299, end: 4616652 }, { filename: "/pglite/share/postgresql/timezone/America/Kentucky/Louisville", start: 4616652, end: 4619440 }, { filename: "/pglite/share/postgresql/timezone/America/Kentucky/Monticello", start: 4619440, end: 4621808 }, { filename: "/pglite/share/postgresql/timezone/America/Knox_IN", start: 4621808, end: 4624252 }, { filename: "/pglite/share/postgresql/timezone/America/Kralendijk", start: 4624252, end: 4624498 }, { filename: "/pglite/share/postgresql/timezone/America/La_Paz", start: 4624498, end: 4624730 }, { filename: "/pglite/share/postgresql/timezone/America/Lima", start: 4624730, end: 4625136 }, { filename: "/pglite/share/postgresql/timezone/America/Los_Angeles", start: 4625136, end: 4627988 }, { filename: "/pglite/share/postgresql/timezone/America/Louisville", start: 4627988, end: 4630776 }, { filename: "/pglite/share/postgresql/timezone/America/Lower_Princes", start: 4630776, end: 4631022 }, { filename: "/pglite/share/postgresql/timezone/America/Maceio", start: 4631022, end: 4631766 }, { filename: "/pglite/share/postgresql/timezone/America/Managua", start: 4631766, end: 4632196 }, { filename: "/pglite/share/postgresql/timezone/America/Manaus", start: 4632196, end: 4632800 }, { filename: "/pglite/share/postgresql/timezone/America/Marigot", start: 4632800, end: 4633046 }, { filename: "/pglite/share/postgresql/timezone/America/Martinique", start: 4633046, end: 4633278 }, { filename: "/pglite/share/postgresql/timezone/America/Matamoros", start: 4633278, end: 4634696 }, { filename: "/pglite/share/postgresql/timezone/America/Mazatlan", start: 4634696, end: 4635756 }, { filename: "/pglite/share/postgresql/timezone/America/Mendoza", start: 4635756, end: 4636832 }, { filename: "/pglite/share/postgresql/timezone/America/Menominee", start: 4636832, end: 4639106 }, { filename: "/pglite/share/postgresql/timezone/America/Merida", start: 4639106, end: 4640110 }, { filename: "/pglite/share/postgresql/timezone/America/Metlakatla", start: 4640110, end: 4641533 }, { filename: "/pglite/share/postgresql/timezone/America/Mexico_City", start: 4641533, end: 4642755 }, { filename: "/pglite/share/postgresql/timezone/America/Miquelon", start: 4642755, end: 4644421 }, { filename: "/pglite/share/postgresql/timezone/America/Moncton", start: 4644421, end: 4647575 }, { filename: "/pglite/share/postgresql/timezone/America/Monterrey", start: 4647575, end: 4648689 }, { filename: "/pglite/share/postgresql/timezone/America/Montevideo", start: 4648689, end: 4650199 }, { filename: "/pglite/share/postgresql/timezone/America/Montreal", start: 4650199, end: 4653693 }, { filename: "/pglite/share/postgresql/timezone/America/Montserrat", start: 4653693, end: 4653939 }, { filename: "/pglite/share/postgresql/timezone/America/Nassau", start: 4653939, end: 4657433 }, { filename: "/pglite/share/postgresql/timezone/America/New_York", start: 4657433, end: 4660985 }, { filename: "/pglite/share/postgresql/timezone/America/Nipigon", start: 4660985, end: 4664479 }, { filename: "/pglite/share/postgresql/timezone/America/Nome", start: 4664479, end: 4666846 }, { filename: "/pglite/share/postgresql/timezone/America/Noronha", start: 4666846, end: 4667562 }, { filename: "/pglite/share/postgresql/timezone/America/North_Dakota/Beulah", start: 4667562, end: 4669958 }, { filename: "/pglite/share/postgresql/timezone/America/North_Dakota/Center", start: 4669958, end: 4672354 }, { filename: "/pglite/share/postgresql/timezone/America/North_Dakota/New_Salem", start: 4672354, end: 4674750 }, { filename: "/pglite/share/postgresql/timezone/America/Nuuk", start: 4674750, end: 4676653 }, { filename: "/pglite/share/postgresql/timezone/America/Ojinaga", start: 4676653, end: 4678177 }, { filename: "/pglite/share/postgresql/timezone/America/Panama", start: 4678177, end: 4678359 }, { filename: "/pglite/share/postgresql/timezone/America/Pangnirtung", start: 4678359, end: 4680561 }, { filename: "/pglite/share/postgresql/timezone/America/Paramaribo", start: 4680561, end: 4680823 }, { filename: "/pglite/share/postgresql/timezone/America/Phoenix", start: 4680823, end: 4681183 }, { filename: "/pglite/share/postgresql/timezone/America/Port-au-Prince", start: 4681183, end: 4682617 }, { filename: "/pglite/share/postgresql/timezone/America/Port_of_Spain", start: 4682617, end: 4682863 }, { filename: "/pglite/share/postgresql/timezone/America/Porto_Acre", start: 4682863, end: 4683491 }, { filename: "/pglite/share/postgresql/timezone/America/Porto_Velho", start: 4683491, end: 4684067 }, { filename: "/pglite/share/postgresql/timezone/America/Puerto_Rico", start: 4684067, end: 4684313 }, { filename: "/pglite/share/postgresql/timezone/America/Punta_Arenas", start: 4684313, end: 4686229 }, { filename: "/pglite/share/postgresql/timezone/America/Rainy_River", start: 4686229, end: 4689097 }, { filename: "/pglite/share/postgresql/timezone/America/Rankin_Inlet", start: 4689097, end: 4691163 }, { filename: "/pglite/share/postgresql/timezone/America/Recife", start: 4691163, end: 4691879 }, { filename: "/pglite/share/postgresql/timezone/America/Regina", start: 4691879, end: 4692859 }, { filename: "/pglite/share/postgresql/timezone/America/Resolute", start: 4692859, end: 4694925 }, { filename: "/pglite/share/postgresql/timezone/America/Rio_Branco", start: 4694925, end: 4695553 }, { filename: "/pglite/share/postgresql/timezone/America/Rosario", start: 4695553, end: 4696629 }, { filename: "/pglite/share/postgresql/timezone/America/Santa_Isabel", start: 4696629, end: 4699087 }, { filename: "/pglite/share/postgresql/timezone/America/Santarem", start: 4699087, end: 4699689 }, { filename: "/pglite/share/postgresql/timezone/America/Santiago", start: 4699689, end: 4702218 }, { filename: "/pglite/share/postgresql/timezone/America/Santo_Domingo", start: 4702218, end: 4702676 }, { filename: "/pglite/share/postgresql/timezone/America/Sao_Paulo", start: 4702676, end: 4704120 }, { filename: "/pglite/share/postgresql/timezone/America/Scoresbysund", start: 4704120, end: 4706069 }, { filename: "/pglite/share/postgresql/timezone/America/Shiprock", start: 4706069, end: 4708529 }, { filename: "/pglite/share/postgresql/timezone/America/Sitka", start: 4708529, end: 4710858 }, { filename: "/pglite/share/postgresql/timezone/America/St_Barthelemy", start: 4710858, end: 4711104 }, { filename: "/pglite/share/postgresql/timezone/America/St_Johns", start: 4711104, end: 4714759 }, { filename: "/pglite/share/postgresql/timezone/America/St_Kitts", start: 4714759, end: 4715005 }, { filename: "/pglite/share/postgresql/timezone/America/St_Lucia", start: 4715005, end: 4715251 }, { filename: "/pglite/share/postgresql/timezone/America/St_Thomas", start: 4715251, end: 4715497 }, { filename: "/pglite/share/postgresql/timezone/America/St_Vincent", start: 4715497, end: 4715743 }, { filename: "/pglite/share/postgresql/timezone/America/Swift_Current", start: 4715743, end: 4716303 }, { filename: "/pglite/share/postgresql/timezone/America/Tegucigalpa", start: 4716303, end: 4716555 }, { filename: "/pglite/share/postgresql/timezone/America/Thule", start: 4716555, end: 4718057 }, { filename: "/pglite/share/postgresql/timezone/America/Thunder_Bay", start: 4718057, end: 4721551 }, { filename: "/pglite/share/postgresql/timezone/America/Tijuana", start: 4721551, end: 4724009 }, { filename: "/pglite/share/postgresql/timezone/America/Toronto", start: 4724009, end: 4727503 }, { filename: "/pglite/share/postgresql/timezone/America/Tortola", start: 4727503, end: 4727749 }, { filename: "/pglite/share/postgresql/timezone/America/Vancouver", start: 4727749, end: 4730641 }, { filename: "/pglite/share/postgresql/timezone/America/Virgin", start: 4730641, end: 4730887 }, { filename: "/pglite/share/postgresql/timezone/America/Whitehorse", start: 4730887, end: 4732501 }, { filename: "/pglite/share/postgresql/timezone/America/Winnipeg", start: 4732501, end: 4735369 }, { filename: "/pglite/share/postgresql/timezone/America/Yakutat", start: 4735369, end: 4737674 }, { filename: "/pglite/share/postgresql/timezone/America/Yellowknife", start: 4737674, end: 4740006 }, { filename: "/pglite/share/postgresql/timezone/Antarctica/Casey", start: 4740006, end: 4740443 }, { filename: "/pglite/share/postgresql/timezone/Antarctica/Davis", start: 4740443, end: 4740740 }, { filename: "/pglite/share/postgresql/timezone/Antarctica/DumontDUrville", start: 4740740, end: 4740926 }, { filename: "/pglite/share/postgresql/timezone/Antarctica/Macquarie", start: 4740926, end: 4743186 }, { filename: "/pglite/share/postgresql/timezone/Antarctica/Mawson", start: 4743186, end: 4743385 }, { filename: "/pglite/share/postgresql/timezone/Antarctica/McMurdo", start: 4743385, end: 4745822 }, { filename: "/pglite/share/postgresql/timezone/Antarctica/Palmer", start: 4745822, end: 4747240 }, { filename: "/pglite/share/postgresql/timezone/Antarctica/Rothera", start: 4747240, end: 4747404 }, { filename: "/pglite/share/postgresql/timezone/Antarctica/South_Pole", start: 4747404, end: 4749841 }, { filename: "/pglite/share/postgresql/timezone/Antarctica/Syowa", start: 4749841, end: 4750006 }, { filename: "/pglite/share/postgresql/timezone/Antarctica/Troll", start: 4750006, end: 4751168 }, { filename: "/pglite/share/postgresql/timezone/Antarctica/Vostok", start: 4751168, end: 4751395 }, { filename: "/pglite/share/postgresql/timezone/Arctic/Longyearbyen", start: 4751395, end: 4753693 }, { filename: "/pglite/share/postgresql/timezone/Asia/Aden", start: 4753693, end: 4753858 }, { filename: "/pglite/share/postgresql/timezone/Asia/Almaty", start: 4753858, end: 4754855 }, { filename: "/pglite/share/postgresql/timezone/Asia/Amman", start: 4754855, end: 4756302 }, { filename: "/pglite/share/postgresql/timezone/Asia/Anadyr", start: 4756302, end: 4757490 }, { filename: "/pglite/share/postgresql/timezone/Asia/Aqtau", start: 4757490, end: 4758473 }, { filename: "/pglite/share/postgresql/timezone/Asia/Aqtobe", start: 4758473, end: 4759484 }, { filename: "/pglite/share/postgresql/timezone/Asia/Ashgabat", start: 4759484, end: 4760103 }, { filename: "/pglite/share/postgresql/timezone/Asia/Ashkhabad", start: 4760103, end: 4760722 }, { filename: "/pglite/share/postgresql/timezone/Asia/Atyrau", start: 4760722, end: 4761713 }, { filename: "/pglite/share/postgresql/timezone/Asia/Baghdad", start: 4761713, end: 4762696 }, { filename: "/pglite/share/postgresql/timezone/Asia/Bahrain", start: 4762696, end: 4762895 }, { filename: "/pglite/share/postgresql/timezone/Asia/Baku", start: 4762895, end: 4764122 }, { filename: "/pglite/share/postgresql/timezone/Asia/Bangkok", start: 4764122, end: 4764321 }, { filename: "/pglite/share/postgresql/timezone/Asia/Barnaul", start: 4764321, end: 4765542 }, { filename: "/pglite/share/postgresql/timezone/Asia/Beirut", start: 4765542, end: 4767696 }, { filename: "/pglite/share/postgresql/timezone/Asia/Bishkek", start: 4767696, end: 4768679 }, { filename: "/pglite/share/postgresql/timezone/Asia/Brunei", start: 4768679, end: 4769162 }, { filename: "/pglite/share/postgresql/timezone/Asia/Calcutta", start: 4769162, end: 4769447 }, { filename: "/pglite/share/postgresql/timezone/Asia/Chita", start: 4769447, end: 4770668 }, { filename: "/pglite/share/postgresql/timezone/Asia/Choibalsan", start: 4770668, end: 4771559 }, { filename: "/pglite/share/postgresql/timezone/Asia/Chongqing", start: 4771559, end: 4772120 }, { filename: "/pglite/share/postgresql/timezone/Asia/Chungking", start: 4772120, end: 4772681 }, { filename: "/pglite/share/postgresql/timezone/Asia/Colombo", start: 4772681, end: 4773053 }, { filename: "/pglite/share/postgresql/timezone/Asia/Dacca", start: 4773053, end: 4773390 }, { filename: "/pglite/share/postgresql/timezone/Asia/Damascus", start: 4773390, end: 4775277 }, { filename: "/pglite/share/postgresql/timezone/Asia/Dhaka", start: 4775277, end: 4775614 }, { filename: "/pglite/share/postgresql/timezone/Asia/Dili", start: 4775614, end: 4775885 }, { filename: "/pglite/share/postgresql/timezone/Asia/Dubai", start: 4775885, end: 4776050 }, { filename: "/pglite/share/postgresql/timezone/Asia/Dushanbe", start: 4776050, end: 4776641 }, { filename: "/pglite/share/postgresql/timezone/Asia/Famagusta", start: 4776641, end: 4778669 }, { filename: "/pglite/share/postgresql/timezone/Asia/Gaza", start: 4778669, end: 4782513 }, { filename: "/pglite/share/postgresql/timezone/Asia/Harbin", start: 4782513, end: 4783074 }, { filename: "/pglite/share/postgresql/timezone/Asia/Hebron", start: 4783074, end: 4786946 }, { filename: "/pglite/share/postgresql/timezone/Asia/Ho_Chi_Minh", start: 4786946, end: 4787297 }, { filename: "/pglite/share/postgresql/timezone/Asia/Hong_Kong", start: 4787297, end: 4788530 }, { filename: "/pglite/share/postgresql/timezone/Asia/Hovd", start: 4788530, end: 4789421 }, { filename: "/pglite/share/postgresql/timezone/Asia/Irkutsk", start: 4789421, end: 4790664 }, { filename: "/pglite/share/postgresql/timezone/Asia/Istanbul", start: 4790664, end: 4792611 }, { filename: "/pglite/share/postgresql/timezone/Asia/Jakarta", start: 4792611, end: 4792994 }, { filename: "/pglite/share/postgresql/timezone/Asia/Jayapura", start: 4792994, end: 4793215 }, { filename: "/pglite/share/postgresql/timezone/Asia/Jerusalem", start: 4793215, end: 4795603 }, { filename: "/pglite/share/postgresql/timezone/Asia/Kabul", start: 4795603, end: 4795811 }, { filename: "/pglite/share/postgresql/timezone/Asia/Kamchatka", start: 4795811, end: 4796977 }, { filename: "/pglite/share/postgresql/timezone/Asia/Karachi", start: 4796977, end: 4797356 }, { filename: "/pglite/share/postgresql/timezone/Asia/Kashgar", start: 4797356, end: 4797521 }, { filename: "/pglite/share/postgresql/timezone/Asia/Kathmandu", start: 4797521, end: 4797733 }, { filename: "/pglite/share/postgresql/timezone/Asia/Katmandu", start: 4797733, end: 4797945 }, { filename: "/pglite/share/postgresql/timezone/Asia/Khandyga", start: 4797945, end: 4799216 }, { filename: "/pglite/share/postgresql/timezone/Asia/Kolkata", start: 4799216, end: 4799501 }, { filename: "/pglite/share/postgresql/timezone/Asia/Krasnoyarsk", start: 4799501, end: 4800708 }, { filename: "/pglite/share/postgresql/timezone/Asia/Kuala_Lumpur", start: 4800708, end: 4801123 }, { filename: "/pglite/share/postgresql/timezone/Asia/Kuching", start: 4801123, end: 4801606 }, { filename: "/pglite/share/postgresql/timezone/Asia/Kuwait", start: 4801606, end: 4801771 }, { filename: "/pglite/share/postgresql/timezone/Asia/Macao", start: 4801771, end: 4802998 }, { filename: "/pglite/share/postgresql/timezone/Asia/Macau", start: 4802998, end: 4804225 }, { filename: "/pglite/share/postgresql/timezone/Asia/Magadan", start: 4804225, end: 4805447 }, { filename: "/pglite/share/postgresql/timezone/Asia/Makassar", start: 4805447, end: 4805701 }, { filename: "/pglite/share/postgresql/timezone/Asia/Manila", start: 4805701, end: 4806123 }, { filename: "/pglite/share/postgresql/timezone/Asia/Muscat", start: 4806123, end: 4806288 }, { filename: "/pglite/share/postgresql/timezone/Asia/Nicosia", start: 4806288, end: 4808290 }, { filename: "/pglite/share/postgresql/timezone/Asia/Novokuznetsk", start: 4808290, end: 4809455 }, { filename: "/pglite/share/postgresql/timezone/Asia/Novosibirsk", start: 4809455, end: 4810676 }, { filename: "/pglite/share/postgresql/timezone/Asia/Omsk", start: 4810676, end: 4811883 }, { filename: "/pglite/share/postgresql/timezone/Asia/Oral", start: 4811883, end: 4812888 }, { filename: "/pglite/share/postgresql/timezone/Asia/Phnom_Penh", start: 4812888, end: 4813087 }, { filename: "/pglite/share/postgresql/timezone/Asia/Pontianak", start: 4813087, end: 4813440 }, { filename: "/pglite/share/postgresql/timezone/Asia/Pyongyang", start: 4813440, end: 4813677 }, { filename: "/pglite/share/postgresql/timezone/Asia/Qatar", start: 4813677, end: 4813876 }, { filename: "/pglite/share/postgresql/timezone/Asia/Qostanay", start: 4813876, end: 4814915 }, { filename: "/pglite/share/postgresql/timezone/Asia/Qyzylorda", start: 4814915, end: 4815940 }, { filename: "/pglite/share/postgresql/timezone/Asia/Rangoon", start: 4815940, end: 4816208 }, { filename: "/pglite/share/postgresql/timezone/Asia/Riyadh", start: 4816208, end: 4816373 }, { filename: "/pglite/share/postgresql/timezone/Asia/Saigon", start: 4816373, end: 4816724 }, { filename: "/pglite/share/postgresql/timezone/Asia/Sakhalin", start: 4816724, end: 4817926 }, { filename: "/pglite/share/postgresql/timezone/Asia/Samarkand", start: 4817926, end: 4818503 }, { filename: "/pglite/share/postgresql/timezone/Asia/Seoul", start: 4818503, end: 4819120 }, { filename: "/pglite/share/postgresql/timezone/Asia/Shanghai", start: 4819120, end: 4819681 }, { filename: "/pglite/share/postgresql/timezone/Asia/Singapore", start: 4819681, end: 4820096 }, { filename: "/pglite/share/postgresql/timezone/Asia/Srednekolymsk", start: 4820096, end: 4821304 }, { filename: "/pglite/share/postgresql/timezone/Asia/Taipei", start: 4821304, end: 4822065 }, { filename: "/pglite/share/postgresql/timezone/Asia/Tashkent", start: 4822065, end: 4822656 }, { filename: "/pglite/share/postgresql/timezone/Asia/Tbilisi", start: 4822656, end: 4823691 }, { filename: "/pglite/share/postgresql/timezone/Asia/Tehran", start: 4823691, end: 4824953 }, { filename: "/pglite/share/postgresql/timezone/Asia/Tel_Aviv", start: 4824953, end: 4827341 }, { filename: "/pglite/share/postgresql/timezone/Asia/Thimbu", start: 4827341, end: 4827544 }, { filename: "/pglite/share/postgresql/timezone/Asia/Thimphu", start: 4827544, end: 4827747 }, { filename: "/pglite/share/postgresql/timezone/Asia/Tokyo", start: 4827747, end: 4828056 }, { filename: "/pglite/share/postgresql/timezone/Asia/Tomsk", start: 4828056, end: 4829277 }, { filename: "/pglite/share/postgresql/timezone/Asia/Ujung_Pandang", start: 4829277, end: 4829531 }, { filename: "/pglite/share/postgresql/timezone/Asia/Ulaanbaatar", start: 4829531, end: 4830422 }, { filename: "/pglite/share/postgresql/timezone/Asia/Ulan_Bator", start: 4830422, end: 4831313 }, { filename: "/pglite/share/postgresql/timezone/Asia/Urumqi", start: 4831313, end: 4831478 }, { filename: "/pglite/share/postgresql/timezone/Asia/Ust-Nera", start: 4831478, end: 4832730 }, { filename: "/pglite/share/postgresql/timezone/Asia/Vientiane", start: 4832730, end: 4832929 }, { filename: "/pglite/share/postgresql/timezone/Asia/Vladivostok", start: 4832929, end: 4834137 }, { filename: "/pglite/share/postgresql/timezone/Asia/Yakutsk", start: 4834137, end: 4835344 }, { filename: "/pglite/share/postgresql/timezone/Asia/Yangon", start: 4835344, end: 4835612 }, { filename: "/pglite/share/postgresql/timezone/Asia/Yekaterinburg", start: 4835612, end: 4836855 }, { filename: "/pglite/share/postgresql/timezone/Asia/Yerevan", start: 4836855, end: 4838006 }, { filename: "/pglite/share/postgresql/timezone/Atlantic/Azores", start: 4838006, end: 4841462 }, { filename: "/pglite/share/postgresql/timezone/Atlantic/Bermuda", start: 4841462, end: 4843858 }, { filename: "/pglite/share/postgresql/timezone/Atlantic/Canary", start: 4843858, end: 4845755 }, { filename: "/pglite/share/postgresql/timezone/Atlantic/Cape_Verde", start: 4845755, end: 4846025 }, { filename: "/pglite/share/postgresql/timezone/Atlantic/Faeroe", start: 4846025, end: 4847840 }, { filename: "/pglite/share/postgresql/timezone/Atlantic/Faroe", start: 4847840, end: 4849655 }, { filename: "/pglite/share/postgresql/timezone/Atlantic/Jan_Mayen", start: 4849655, end: 4851953 }, { filename: "/pglite/share/postgresql/timezone/Atlantic/Madeira", start: 4851953, end: 4855330 }, { filename: "/pglite/share/postgresql/timezone/Atlantic/Reykjavik", start: 4855330, end: 4855478 }, { filename: "/pglite/share/postgresql/timezone/Atlantic/South_Georgia", start: 4855478, end: 4855642 }, { filename: "/pglite/share/postgresql/timezone/Atlantic/St_Helena", start: 4855642, end: 4855790 }, { filename: "/pglite/share/postgresql/timezone/Atlantic/Stanley", start: 4855790, end: 4857004 }, { filename: "/pglite/share/postgresql/timezone/Australia/ACT", start: 4857004, end: 4859194 }, { filename: "/pglite/share/postgresql/timezone/Australia/Adelaide", start: 4859194, end: 4861402 }, { filename: "/pglite/share/postgresql/timezone/Australia/Brisbane", start: 4861402, end: 4861821 }, { filename: "/pglite/share/postgresql/timezone/Australia/Broken_Hill", start: 4861821, end: 4864050 }, { filename: "/pglite/share/postgresql/timezone/Australia/Canberra", start: 4864050, end: 4866240 }, { filename: "/pglite/share/postgresql/timezone/Australia/Currie", start: 4866240, end: 4868598 }, { filename: "/pglite/share/postgresql/timezone/Australia/Darwin", start: 4868598, end: 4868923 }, { filename: "/pglite/share/postgresql/timezone/Australia/Eucla", start: 4868923, end: 4869393 }, { filename: "/pglite/share/postgresql/timezone/Australia/Hobart", start: 4869393, end: 4871751 }, { filename: "/pglite/share/postgresql/timezone/Australia/LHI", start: 4871751, end: 4873611 }, { filename: "/pglite/share/postgresql/timezone/Australia/Lindeman", start: 4873611, end: 4874086 }, { filename: "/pglite/share/postgresql/timezone/Australia/Lord_Howe", start: 4874086, end: 4875946 }, { filename: "/pglite/share/postgresql/timezone/Australia/Melbourne", start: 4875946, end: 4878136 }, { filename: "/pglite/share/postgresql/timezone/Australia/NSW", start: 4878136, end: 4880326 }, { filename: "/pglite/share/postgresql/timezone/Australia/North", start: 4880326, end: 4880651 }, { filename: "/pglite/share/postgresql/timezone/Australia/Perth", start: 4880651, end: 4881097 }, { filename: "/pglite/share/postgresql/timezone/Australia/Queensland", start: 4881097, end: 4881516 }, { filename: "/pglite/share/postgresql/timezone/Australia/South", start: 4881516, end: 4883724 }, { filename: "/pglite/share/postgresql/timezone/Australia/Sydney", start: 4883724, end: 4885914 }, { filename: "/pglite/share/postgresql/timezone/Australia/Tasmania", start: 4885914, end: 4888272 }, { filename: "/pglite/share/postgresql/timezone/Australia/Victoria", start: 4888272, end: 4890462 }, { filename: "/pglite/share/postgresql/timezone/Australia/West", start: 4890462, end: 4890908 }, { filename: "/pglite/share/postgresql/timezone/Australia/Yancowinna", start: 4890908, end: 4893137 }, { filename: "/pglite/share/postgresql/timezone/Brazil/Acre", start: 4893137, end: 4893765 }, { filename: "/pglite/share/postgresql/timezone/Brazil/DeNoronha", start: 4893765, end: 4894481 }, { filename: "/pglite/share/postgresql/timezone/Brazil/East", start: 4894481, end: 4895925 }, { filename: "/pglite/share/postgresql/timezone/Brazil/West", start: 4895925, end: 4896529 }, { filename: "/pglite/share/postgresql/timezone/CET", start: 4896529, end: 4899462 }, { filename: "/pglite/share/postgresql/timezone/CST6CDT", start: 4899462, end: 4903054 }, { filename: "/pglite/share/postgresql/timezone/Canada/Atlantic", start: 4903054, end: 4906478 }, { filename: "/pglite/share/postgresql/timezone/Canada/Central", start: 4906478, end: 4909346 }, { filename: "/pglite/share/postgresql/timezone/Canada/Eastern", start: 4909346, end: 4912840 }, { filename: "/pglite/share/postgresql/timezone/Canada/Mountain", start: 4912840, end: 4915172 }, { filename: "/pglite/share/postgresql/timezone/Canada/Newfoundland", start: 4915172, end: 4918827 }, { filename: "/pglite/share/postgresql/timezone/Canada/Pacific", start: 4918827, end: 4921719 }, { filename: "/pglite/share/postgresql/timezone/Canada/Saskatchewan", start: 4921719, end: 4922699 }, { filename: "/pglite/share/postgresql/timezone/Canada/Yukon", start: 4922699, end: 4924313 }, { filename: "/pglite/share/postgresql/timezone/Chile/Continental", start: 4924313, end: 4926842 }, { filename: "/pglite/share/postgresql/timezone/Chile/EasterIsland", start: 4926842, end: 4929075 }, { filename: "/pglite/share/postgresql/timezone/Cuba", start: 4929075, end: 4931491 }, { filename: "/pglite/share/postgresql/timezone/EET", start: 4931491, end: 4933753 }, { filename: "/pglite/share/postgresql/timezone/EST", start: 4933753, end: 4933935 }, { filename: "/pglite/share/postgresql/timezone/EST5EDT", start: 4933935, end: 4937487 }, { filename: "/pglite/share/postgresql/timezone/Egypt", start: 4937487, end: 4939886 }, { filename: "/pglite/share/postgresql/timezone/Eire", start: 4939886, end: 4943378 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT", start: 4943378, end: 4943492 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT+0", start: 4943492, end: 4943606 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT+1", start: 4943606, end: 4943722 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT+10", start: 4943722, end: 4943839 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT+11", start: 4943839, end: 4943956 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT+12", start: 4943956, end: 4944073 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT+2", start: 4944073, end: 4944189 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT+3", start: 4944189, end: 4944305 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT+4", start: 4944305, end: 4944421 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT+5", start: 4944421, end: 4944537 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT+6", start: 4944537, end: 4944653 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT+7", start: 4944653, end: 4944769 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT+8", start: 4944769, end: 4944885 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT+9", start: 4944885, end: 4945001 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT-0", start: 4945001, end: 4945115 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT-1", start: 4945115, end: 4945232 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT-10", start: 4945232, end: 4945350 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT-11", start: 4945350, end: 4945468 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT-12", start: 4945468, end: 4945586 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT-13", start: 4945586, end: 4945704 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT-14", start: 4945704, end: 4945822 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT-2", start: 4945822, end: 4945939 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT-3", start: 4945939, end: 4946056 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT-4", start: 4946056, end: 4946173 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT-5", start: 4946173, end: 4946290 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT-6", start: 4946290, end: 4946407 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT-7", start: 4946407, end: 4946524 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT-8", start: 4946524, end: 4946641 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT-9", start: 4946641, end: 4946758 }, { filename: "/pglite/share/postgresql/timezone/Etc/GMT0", start: 4946758, end: 4946872 }, { filename: "/pglite/share/postgresql/timezone/Etc/Greenwich", start: 4946872, end: 4946986 }, { filename: "/pglite/share/postgresql/timezone/Etc/UCT", start: 4946986, end: 4947100 }, { filename: "/pglite/share/postgresql/timezone/Etc/UTC", start: 4947100, end: 4947214 }, { filename: "/pglite/share/postgresql/timezone/Etc/Universal", start: 4947214, end: 4947328 }, { filename: "/pglite/share/postgresql/timezone/Etc/Zulu", start: 4947328, end: 4947442 }, { filename: "/pglite/share/postgresql/timezone/Europe/Amsterdam", start: 4947442, end: 4950375 }, { filename: "/pglite/share/postgresql/timezone/Europe/Andorra", start: 4950375, end: 4952117 }, { filename: "/pglite/share/postgresql/timezone/Europe/Astrakhan", start: 4952117, end: 4953282 }, { filename: "/pglite/share/postgresql/timezone/Europe/Athens", start: 4953282, end: 4955544 }, { filename: "/pglite/share/postgresql/timezone/Europe/Belfast", start: 4955544, end: 4959208 }, { filename: "/pglite/share/postgresql/timezone/Europe/Belgrade", start: 4959208, end: 4961128 }, { filename: "/pglite/share/postgresql/timezone/Europe/Berlin", start: 4961128, end: 4963426 }, { filename: "/pglite/share/postgresql/timezone/Europe/Bratislava", start: 4963426, end: 4965727 }, { filename: "/pglite/share/postgresql/timezone/Europe/Brussels", start: 4965727, end: 4968660 }, { filename: "/pglite/share/postgresql/timezone/Europe/Bucharest", start: 4968660, end: 4970844 }, { filename: "/pglite/share/postgresql/timezone/Europe/Budapest", start: 4970844, end: 4973212 }, { filename: "/pglite/share/postgresql/timezone/Europe/Busingen", start: 4973212, end: 4975121 }, { filename: "/pglite/share/postgresql/timezone/Europe/Chisinau", start: 4975121, end: 4977511 }, { filename: "/pglite/share/postgresql/timezone/Europe/Copenhagen", start: 4977511, end: 4979809 }, { filename: "/pglite/share/postgresql/timezone/Europe/Dublin", start: 4979809, end: 4983301 }, { filename: "/pglite/share/postgresql/timezone/Europe/Gibraltar", start: 4983301, end: 4986369 }, { filename: "/pglite/share/postgresql/timezone/Europe/Guernsey", start: 4986369, end: 4990033 }, { filename: "/pglite/share/postgresql/timezone/Europe/Helsinki", start: 4990033, end: 4991933 }, { filename: "/pglite/share/postgresql/timezone/Europe/Isle_of_Man", start: 4991933, end: 4995597 }, { filename: "/pglite/share/postgresql/timezone/Europe/Istanbul", start: 4995597, end: 4997544 }, { filename: "/pglite/share/postgresql/timezone/Europe/Jersey", start: 4997544, end: 5001208 }, { filename: "/pglite/share/postgresql/timezone/Europe/Kaliningrad", start: 5001208, end: 5002701 }, { filename: "/pglite/share/postgresql/timezone/Europe/Kiev", start: 5002701, end: 5004821 }, { filename: "/pglite/share/postgresql/timezone/Europe/Kirov", start: 5004821, end: 5006006 }, { filename: "/pglite/share/postgresql/timezone/Europe/Kyiv", start: 5006006, end: 5008126 }, { filename: "/pglite/share/postgresql/timezone/Europe/Lisbon", start: 5008126, end: 5011653 }, { filename: "/pglite/share/postgresql/timezone/Europe/Ljubljana", start: 5011653, end: 5013573 }, { filename: "/pglite/share/postgresql/timezone/Europe/London", start: 5013573, end: 5017237 }, { filename: "/pglite/share/postgresql/timezone/Europe/Luxembourg", start: 5017237, end: 5020170 }, { filename: "/pglite/share/postgresql/timezone/Europe/Madrid", start: 5020170, end: 5022784 }, { filename: "/pglite/share/postgresql/timezone/Europe/Malta", start: 5022784, end: 5025404 }, { filename: "/pglite/share/postgresql/timezone/Europe/Mariehamn", start: 5025404, end: 5027304 }, { filename: "/pglite/share/postgresql/timezone/Europe/Minsk", start: 5027304, end: 5028625 }, { filename: "/pglite/share/postgresql/timezone/Europe/Monaco", start: 5028625, end: 5031587 }, { filename: "/pglite/share/postgresql/timezone/Europe/Moscow", start: 5031587, end: 5033122 }, { filename: "/pglite/share/postgresql/timezone/Europe/Nicosia", start: 5033122, end: 5035124 }, { filename: "/pglite/share/postgresql/timezone/Europe/Oslo", start: 5035124, end: 5037422 }, { filename: "/pglite/share/postgresql/timezone/Europe/Paris", start: 5037422, end: 5040384 }, { filename: "/pglite/share/postgresql/timezone/Europe/Podgorica", start: 5040384, end: 5042304 }, { filename: "/pglite/share/postgresql/timezone/Europe/Prague", start: 5042304, end: 5044605 }, { filename: "/pglite/share/postgresql/timezone/Europe/Riga", start: 5044605, end: 5046803 }, { filename: "/pglite/share/postgresql/timezone/Europe/Rome", start: 5046803, end: 5049444 }, { filename: "/pglite/share/postgresql/timezone/Europe/Samara", start: 5049444, end: 5050659 }, { filename: "/pglite/share/postgresql/timezone/Europe/San_Marino", start: 5050659, end: 5053300 }, { filename: "/pglite/share/postgresql/timezone/Europe/Sarajevo", start: 5053300, end: 5055220 }, { filename: "/pglite/share/postgresql/timezone/Europe/Saratov", start: 5055220, end: 5056403 }, { filename: "/pglite/share/postgresql/timezone/Europe/Simferopol", start: 5056403, end: 5057872 }, { filename: "/pglite/share/postgresql/timezone/Europe/Skopje", start: 5057872, end: 5059792 }, { filename: "/pglite/share/postgresql/timezone/Europe/Sofia", start: 5059792, end: 5061869 }, { filename: "/pglite/share/postgresql/timezone/Europe/Stockholm", start: 5061869, end: 5064167 }, { filename: "/pglite/share/postgresql/timezone/Europe/Tallinn", start: 5064167, end: 5066315 }, { filename: "/pglite/share/postgresql/timezone/Europe/Tirane", start: 5066315, end: 5068399 }, { filename: "/pglite/share/postgresql/timezone/Europe/Tiraspol", start: 5068399, end: 5070789 }, { filename: "/pglite/share/postgresql/timezone/Europe/Ulyanovsk", start: 5070789, end: 5072056 }, { filename: "/pglite/share/postgresql/timezone/Europe/Uzhgorod", start: 5072056, end: 5074176 }, { filename: "/pglite/share/postgresql/timezone/Europe/Vaduz", start: 5074176, end: 5076085 }, { filename: "/pglite/share/postgresql/timezone/Europe/Vatican", start: 5076085, end: 5078726 }, { filename: "/pglite/share/postgresql/timezone/Europe/Vienna", start: 5078726, end: 5080926 }, { filename: "/pglite/share/postgresql/timezone/Europe/Vilnius", start: 5080926, end: 5083088 }, { filename: "/pglite/share/postgresql/timezone/Europe/Volgograd", start: 5083088, end: 5084281 }, { filename: "/pglite/share/postgresql/timezone/Europe/Warsaw", start: 5084281, end: 5086935 }, { filename: "/pglite/share/postgresql/timezone/Europe/Zagreb", start: 5086935, end: 5088855 }, { filename: "/pglite/share/postgresql/timezone/Europe/Zaporozhye", start: 5088855, end: 5090975 }, { filename: "/pglite/share/postgresql/timezone/Europe/Zurich", start: 5090975, end: 5092884 }, { filename: "/pglite/share/postgresql/timezone/Factory", start: 5092884, end: 5093e3 }, { filename: "/pglite/share/postgresql/timezone/GB", start: 5093e3, end: 5096664 }, { filename: "/pglite/share/postgresql/timezone/GB-Eire", start: 5096664, end: 5100328 }, { filename: "/pglite/share/postgresql/timezone/GMT", start: 5100328, end: 5100442 }, { filename: "/pglite/share/postgresql/timezone/GMT+0", start: 5100442, end: 5100556 }, { filename: "/pglite/share/postgresql/timezone/GMT-0", start: 5100556, end: 5100670 }, { filename: "/pglite/share/postgresql/timezone/GMT0", start: 5100670, end: 5100784 }, { filename: "/pglite/share/postgresql/timezone/Greenwich", start: 5100784, end: 5100898 }, { filename: "/pglite/share/postgresql/timezone/HST", start: 5100898, end: 5101227 }, { filename: "/pglite/share/postgresql/timezone/Hongkong", start: 5101227, end: 5102460 }, { filename: "/pglite/share/postgresql/timezone/Iceland", start: 5102460, end: 5102608 }, { filename: "/pglite/share/postgresql/timezone/Indian/Antananarivo", start: 5102608, end: 5102873 }, { filename: "/pglite/share/postgresql/timezone/Indian/Chagos", start: 5102873, end: 5103072 }, { filename: "/pglite/share/postgresql/timezone/Indian/Christmas", start: 5103072, end: 5103271 }, { filename: "/pglite/share/postgresql/timezone/Indian/Cocos", start: 5103271, end: 5103539 }, { filename: "/pglite/share/postgresql/timezone/Indian/Comoro", start: 5103539, end: 5103804 }, { filename: "/pglite/share/postgresql/timezone/Indian/Kerguelen", start: 5103804, end: 5104003 }, { filename: "/pglite/share/postgresql/timezone/Indian/Mahe", start: 5104003, end: 5104168 }, { filename: "/pglite/share/postgresql/timezone/Indian/Maldives", start: 5104168, end: 5104367 }, { filename: "/pglite/share/postgresql/timezone/Indian/Mauritius", start: 5104367, end: 5104608 }, { filename: "/pglite/share/postgresql/timezone/Indian/Mayotte", start: 5104608, end: 5104873 }, { filename: "/pglite/share/postgresql/timezone/Indian/Reunion", start: 5104873, end: 5105038 }, { filename: "/pglite/share/postgresql/timezone/Iran", start: 5105038, end: 5106300 }, { filename: "/pglite/share/postgresql/timezone/Israel", start: 5106300, end: 5108688 }, { filename: "/pglite/share/postgresql/timezone/Jamaica", start: 5108688, end: 5109170 }, { filename: "/pglite/share/postgresql/timezone/Japan", start: 5109170, end: 5109479 }, { filename: "/pglite/share/postgresql/timezone/Kwajalein", start: 5109479, end: 5109795 }, { filename: "/pglite/share/postgresql/timezone/Libya", start: 5109795, end: 5110420 }, { filename: "/pglite/share/postgresql/timezone/MET", start: 5110420, end: 5113353 }, { filename: "/pglite/share/postgresql/timezone/MST", start: 5113353, end: 5113713 }, { filename: "/pglite/share/postgresql/timezone/MST7MDT", start: 5113713, end: 5116173 }, { filename: "/pglite/share/postgresql/timezone/Mexico/BajaNorte", start: 5116173, end: 5118631 }, { filename: "/pglite/share/postgresql/timezone/Mexico/BajaSur", start: 5118631, end: 5119691 }, { filename: "/pglite/share/postgresql/timezone/Mexico/General", start: 5119691, end: 5120913 }, { filename: "/pglite/share/postgresql/timezone/NZ", start: 5120913, end: 5123350 }, { filename: "/pglite/share/postgresql/timezone/NZ-CHAT", start: 5123350, end: 5125418 }, { filename: "/pglite/share/postgresql/timezone/Navajo", start: 5125418, end: 5127878 }, { filename: "/pglite/share/postgresql/timezone/PRC", start: 5127878, end: 5128439 }, { filename: "/pglite/share/postgresql/timezone/PST8PDT", start: 5128439, end: 5131291 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Apia", start: 5131291, end: 5131903 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Auckland", start: 5131903, end: 5134340 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Bougainville", start: 5134340, end: 5134608 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Chatham", start: 5134608, end: 5136676 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Chuuk", start: 5136676, end: 5136862 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Easter", start: 5136862, end: 5139095 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Efate", start: 5139095, end: 5139633 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Enderbury", start: 5139633, end: 5139867 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Fakaofo", start: 5139867, end: 5140067 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Fiji", start: 5140067, end: 5140645 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Funafuti", start: 5140645, end: 5140811 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Galapagos", start: 5140811, end: 5141049 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Gambier", start: 5141049, end: 5141213 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Guadalcanal", start: 5141213, end: 5141379 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Guam", start: 5141379, end: 5141873 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Honolulu", start: 5141873, end: 5142202 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Johnston", start: 5142202, end: 5142531 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Kanton", start: 5142531, end: 5142765 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Kiritimati", start: 5142765, end: 5143003 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Kosrae", start: 5143003, end: 5143354 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Kwajalein", start: 5143354, end: 5143670 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Majuro", start: 5143670, end: 5143836 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Marquesas", start: 5143836, end: 5144009 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Midway", start: 5144009, end: 5144184 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Nauru", start: 5144184, end: 5144436 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Niue", start: 5144436, end: 5144639 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Norfolk", start: 5144639, end: 5145519 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Noumea", start: 5145519, end: 5145823 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Pago_Pago", start: 5145823, end: 5145998 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Palau", start: 5145998, end: 5146178 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Pitcairn", start: 5146178, end: 5146380 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Pohnpei", start: 5146380, end: 5146546 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Ponape", start: 5146546, end: 5146712 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Port_Moresby", start: 5146712, end: 5146898 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Rarotonga", start: 5146898, end: 5147501 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Saipan", start: 5147501, end: 5147995 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Samoa", start: 5147995, end: 5148170 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Tahiti", start: 5148170, end: 5148335 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Tarawa", start: 5148335, end: 5148501 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Tongatapu", start: 5148501, end: 5148873 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Truk", start: 5148873, end: 5149059 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Wake", start: 5149059, end: 5149225 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Wallis", start: 5149225, end: 5149391 }, { filename: "/pglite/share/postgresql/timezone/Pacific/Yap", start: 5149391, end: 5149577 }, { filename: "/pglite/share/postgresql/timezone/Poland", start: 5149577, end: 5152231 }, { filename: "/pglite/share/postgresql/timezone/Portugal", start: 5152231, end: 5155758 }, { filename: "/pglite/share/postgresql/timezone/ROC", start: 5155758, end: 5156519 }, { filename: "/pglite/share/postgresql/timezone/ROK", start: 5156519, end: 5157136 }, { filename: "/pglite/share/postgresql/timezone/Singapore", start: 5157136, end: 5157551 }, { filename: "/pglite/share/postgresql/timezone/Turkey", start: 5157551, end: 5159498 }, { filename: "/pglite/share/postgresql/timezone/UCT", start: 5159498, end: 5159612 }, { filename: "/pglite/share/postgresql/timezone/US/Alaska", start: 5159612, end: 5161983 }, { filename: "/pglite/share/postgresql/timezone/US/Aleutian", start: 5161983, end: 5164339 }, { filename: "/pglite/share/postgresql/timezone/US/Arizona", start: 5164339, end: 5164699 }, { filename: "/pglite/share/postgresql/timezone/US/Central", start: 5164699, end: 5168291 }, { filename: "/pglite/share/postgresql/timezone/US/East-Indiana", start: 5168291, end: 5169973 }, { filename: "/pglite/share/postgresql/timezone/US/Eastern", start: 5169973, end: 5173525 }, { filename: "/pglite/share/postgresql/timezone/US/Hawaii", start: 5173525, end: 5173854 }, { filename: "/pglite/share/postgresql/timezone/US/Indiana-Starke", start: 5173854, end: 5176298 }, { filename: "/pglite/share/postgresql/timezone/US/Michigan", start: 5176298, end: 5178528 }, { filename: "/pglite/share/postgresql/timezone/US/Mountain", start: 5178528, end: 5180988 }, { filename: "/pglite/share/postgresql/timezone/US/Pacific", start: 5180988, end: 5183840 }, { filename: "/pglite/share/postgresql/timezone/US/Samoa", start: 5183840, end: 5184015 }, { filename: "/pglite/share/postgresql/timezone/UTC", start: 5184015, end: 5184129 }, { filename: "/pglite/share/postgresql/timezone/Universal", start: 5184129, end: 5184243 }, { filename: "/pglite/share/postgresql/timezone/W-SU", start: 5184243, end: 5185778 }, { filename: "/pglite/share/postgresql/timezone/WET", start: 5185778, end: 5189305 }, { filename: "/pglite/share/postgresql/timezone/Zulu", start: 5189305, end: 5189419 }, { filename: "/pglite/share/postgresql/timezonesets/Africa.txt", start: 5189419, end: 5196392 }, { filename: "/pglite/share/postgresql/timezonesets/America.txt", start: 5196392, end: 5207399 }, { filename: "/pglite/share/postgresql/timezonesets/Antarctica.txt", start: 5207399, end: 5208533 }, { filename: "/pglite/share/postgresql/timezonesets/Asia.txt", start: 5208533, end: 5216844 }, { filename: "/pglite/share/postgresql/timezonesets/Atlantic.txt", start: 5216844, end: 5220377 }, { filename: "/pglite/share/postgresql/timezonesets/Australia", start: 5220377, end: 5221512 }, { filename: "/pglite/share/postgresql/timezonesets/Australia.txt", start: 5221512, end: 5224896 }, { filename: "/pglite/share/postgresql/timezonesets/Default", start: 5224896, end: 5252110 }, { filename: "/pglite/share/postgresql/timezonesets/Etc.txt", start: 5252110, end: 5253360 }, { filename: "/pglite/share/postgresql/timezonesets/Europe.txt", start: 5253360, end: 5262106 }, { filename: "/pglite/share/postgresql/timezonesets/India", start: 5262106, end: 5262699 }, { filename: "/pglite/share/postgresql/timezonesets/Indian.txt", start: 5262699, end: 5263960 }, { filename: "/pglite/share/postgresql/timezonesets/Pacific.txt", start: 5263960, end: 5267728 }, { filename: "/pglite/share/postgresql/tsearch_data/danish.stop", start: 5267728, end: 5268152 }, { filename: "/pglite/share/postgresql/tsearch_data/dutch.stop", start: 5268152, end: 5268605 }, { filename: "/pglite/share/postgresql/tsearch_data/english.stop", start: 5268605, end: 5269227 }, { filename: "/pglite/share/postgresql/tsearch_data/finnish.stop", start: 5269227, end: 5270806 }, { filename: "/pglite/share/postgresql/tsearch_data/french.stop", start: 5270806, end: 5271611 }, { filename: "/pglite/share/postgresql/tsearch_data/german.stop", start: 5271611, end: 5272960 }, { filename: "/pglite/share/postgresql/tsearch_data/hungarian.stop", start: 5272960, end: 5274187 }, { filename: "/pglite/share/postgresql/tsearch_data/hunspell_sample.affix", start: 5274187, end: 5274430 }, { filename: "/pglite/share/postgresql/tsearch_data/hunspell_sample_long.affix", start: 5274430, end: 5275063 }, { filename: "/pglite/share/postgresql/tsearch_data/hunspell_sample_long.dict", start: 5275063, end: 5275161 }, { filename: "/pglite/share/postgresql/tsearch_data/hunspell_sample_num.affix", start: 5275161, end: 5275623 }, { filename: "/pglite/share/postgresql/tsearch_data/hunspell_sample_num.dict", start: 5275623, end: 5275752 }, { filename: "/pglite/share/postgresql/tsearch_data/ispell_sample.affix", start: 5275752, end: 5276217 }, { filename: "/pglite/share/postgresql/tsearch_data/ispell_sample.dict", start: 5276217, end: 5276298 }, { filename: "/pglite/share/postgresql/tsearch_data/italian.stop", start: 5276298, end: 5277952 }, { filename: "/pglite/share/postgresql/tsearch_data/nepali.stop", start: 5277952, end: 5282213 }, { filename: "/pglite/share/postgresql/tsearch_data/norwegian.stop", start: 5282213, end: 5283064 }, { filename: "/pglite/share/postgresql/tsearch_data/portuguese.stop", start: 5283064, end: 5284331 }, { filename: "/pglite/share/postgresql/tsearch_data/russian.stop", start: 5284331, end: 5285566 }, { filename: "/pglite/share/postgresql/tsearch_data/spanish.stop", start: 5285566, end: 5287744 }, { filename: "/pglite/share/postgresql/tsearch_data/swedish.stop", start: 5287744, end: 5288303 }, { filename: "/pglite/share/postgresql/tsearch_data/synonym_sample.syn", start: 5288303, end: 5288376 }, { filename: "/pglite/share/postgresql/tsearch_data/thesaurus_sample.ths", start: 5288376, end: 5288849 }, { filename: "/pglite/share/postgresql/tsearch_data/turkish.stop", start: 5288849, end: 5289109 }], remote_package_size: 5289109 });
    })();
    var moduleOverrides = Object.assign({}, Module), arguments_ = [], thisProgram = "./this.program", quit_ = (e, t2) => {
      throw t2;
    }, scriptDirectory = "";
    function locateFile(e) {
      return Module.locateFile ? Module.locateFile(e, scriptDirectory) : scriptDirectory + e;
    }
    var readAsync, readBinary;
    if (ENVIRONMENT_IS_NODE) {
      var fs = require("fs"), nodePath = require("path");
      import.meta.url.startsWith("data:") || (scriptDirectory = nodePath.dirname(require("url").fileURLToPath(import.meta.url)) + "/"), readBinary = (e) => {
        e = isFileURI(e) ? new URL(e) : e;
        var t2 = fs.readFileSync(e);
        return t2;
      }, readAsync = async (e, t2 = true) => {
        e = isFileURI(e) ? new URL(e) : e;
        var r2 = fs.readFileSync(e, t2 ? void 0 : "utf8");
        return r2;
      }, !Module.thisProgram && process.argv.length > 1 && (thisProgram = process.argv[1].replace(/\\/g, "/")), arguments_ = process.argv.slice(2), quit_ = (e, t2) => {
        throw process.exitCode = e, t2;
      };
    } else (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) && (ENVIRONMENT_IS_WORKER ? scriptDirectory = self.location.href : typeof document < "u" && document.currentScript && (scriptDirectory = document.currentScript.src), _scriptName && (scriptDirectory = _scriptName), scriptDirectory.startsWith("blob:") ? scriptDirectory = "" : scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1), ENVIRONMENT_IS_WORKER && (readBinary = (e) => {
      var t2 = new XMLHttpRequest();
      return t2.open("GET", e, false), t2.responseType = "arraybuffer", t2.send(null), new Uint8Array(t2.response);
    }), readAsync = async (e) => {
      var t2 = await fetch(e, { credentials: "same-origin" });
      if (t2.ok) return t2.arrayBuffer();
      throw new Error(t2.status + " : " + t2.url);
    });
    var out = Module.print || console.log.bind(console), err = Module.printErr || console.error.bind(console);
    Object.assign(Module, moduleOverrides), moduleOverrides = null, Module.arguments && (arguments_ = Module.arguments), Module.thisProgram && (thisProgram = Module.thisProgram);
    var dynamicLibraries = Module.dynamicLibraries || [], wasmBinary = Module.wasmBinary;
    function intArrayFromBase64(e) {
      if (typeof ENVIRONMENT_IS_NODE < "u" && ENVIRONMENT_IS_NODE) {
        var t2 = Buffer.from(e, "base64");
        return new Uint8Array(t2.buffer, t2.byteOffset, t2.length);
      }
      for (var r2 = atob(e), a2 = new Uint8Array(r2.length), o5 = 0; o5 < r2.length; ++o5) a2[o5] = r2.charCodeAt(o5);
      return a2;
    }
    var wasmMemory, ABORT = false, EXITSTATUS;
    function assert(e, t2) {
      e || abort(t2);
    }
    var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAP64, HEAPU64, HEAPF64;
    function updateMemoryViews() {
      var e = wasmMemory.buffer;
      Module.HEAP8 = HEAP8 = new Int8Array(e), Module.HEAP16 = HEAP16 = new Int16Array(e), Module.HEAPU8 = HEAPU8 = new Uint8Array(e), Module.HEAPU16 = HEAPU16 = new Uint16Array(e), Module.HEAP32 = HEAP32 = new Int32Array(e), Module.HEAPU32 = HEAPU32 = new Uint32Array(e), Module.HEAPF32 = HEAPF32 = new Float32Array(e), Module.HEAPF64 = HEAPF64 = new Float64Array(e), Module.HEAP64 = HEAP64 = new BigInt64Array(e), Module.HEAPU64 = HEAPU64 = new BigUint64Array(e);
    }
    if (Module.wasmMemory) wasmMemory = Module.wasmMemory;
    else {
      var INITIAL_MEMORY = Module.INITIAL_MEMORY || 134217728;
      wasmMemory = new WebAssembly.Memory({ initial: INITIAL_MEMORY / 65536, maximum: 32768 });
    }
    updateMemoryViews();
    var __ATPRERUN__ = [], __ATINIT__ = [], __ATMAIN__ = [], __ATEXIT__ = [], __ATPOSTRUN__ = [], __RELOC_FUNCS__ = [], runtimeInitialized = false, runtimeExited = false;
    function preRun() {
      if (Module.preRun) for (typeof Module.preRun == "function" && (Module.preRun = [Module.preRun]); Module.preRun.length; ) addOnPreRun(Module.preRun.shift());
      callRuntimeCallbacks(__ATPRERUN__);
    }
    function initRuntime() {
      runtimeInitialized = true, callRuntimeCallbacks(__RELOC_FUNCS__), !Module.noFSInit && !FS.initialized && FS.init(), FS.ignorePermissions = false, TTY.init(), SOCKFS.root = FS.mount(SOCKFS, {}, null), PIPEFS.root = FS.mount(PIPEFS, {}, null), callRuntimeCallbacks(__ATINIT__);
    }
    function preMain() {
      callRuntimeCallbacks(__ATMAIN__);
    }
    function exitRuntime() {
      ___funcs_on_exit(), callRuntimeCallbacks(__ATEXIT__), FS.quit(), TTY.shutdown(), IDBFS.quit(), runtimeExited = true;
    }
    function postRun() {
      if (Module.postRun) for (typeof Module.postRun == "function" && (Module.postRun = [Module.postRun]); Module.postRun.length; ) addOnPostRun(Module.postRun.shift());
      callRuntimeCallbacks(__ATPOSTRUN__);
    }
    function addOnPreRun(e) {
      __ATPRERUN__.unshift(e);
    }
    function addOnInit(e) {
      __ATINIT__.unshift(e);
    }
    function addOnPostRun(e) {
      __ATPOSTRUN__.unshift(e);
    }
    var runDependencies = 0, dependenciesFulfilled = null;
    function getUniqueRunDependency(e) {
      return e;
    }
    function addRunDependency(e) {
      runDependencies++, Module.monitorRunDependencies?.(runDependencies);
    }
    function removeRunDependency(e) {
      if (runDependencies--, Module.monitorRunDependencies?.(runDependencies), runDependencies == 0 && dependenciesFulfilled) {
        var t2 = dependenciesFulfilled;
        dependenciesFulfilled = null, t2();
      }
    }
    function abort(e) {
      Module.onAbort?.(e), e = "Aborted(" + e + ")", err(e), ABORT = true, e += ". Build with -sASSERTIONS for more info.";
      var t2 = new WebAssembly.RuntimeError(e);
      throw readyPromiseReject(t2), t2;
    }
    var dataURIPrefix = "data:application/octet-stream;base64,", isDataURI = (e) => e.startsWith(dataURIPrefix), isFileURI = (e) => e.startsWith("file://");
    function findWasmBinary() {
      if (Module.locateFile) {
        var e = "pglite.wasm";
        return isDataURI(e) ? e : locateFile(e);
      }
      return new URL("pglite.wasm", import.meta.url).href;
    }
    var wasmBinaryFile;
    function getBinarySync(e) {
      if (e == wasmBinaryFile && wasmBinary) return new Uint8Array(wasmBinary);
      if (readBinary) return readBinary(e);
      throw "both async and sync fetching of the wasm failed";
    }
    async function getWasmBinary(e) {
      if (!wasmBinary) try {
        var t2 = await readAsync(e);
        return new Uint8Array(t2);
      } catch {
      }
      return getBinarySync(e);
    }
    async function instantiateArrayBuffer(e, t2) {
      try {
        var r2 = await getWasmBinary(e), a2 = await WebAssembly.instantiate(r2, t2);
        return a2;
      } catch (o5) {
        err(`failed to asynchronously prepare wasm: ${o5}`), abort(o5);
      }
    }
    async function instantiateAsync(e, t2, r2) {
      if (!e && typeof WebAssembly.instantiateStreaming == "function" && !isDataURI(t2) && !ENVIRONMENT_IS_NODE && typeof fetch == "function") try {
        var a2 = fetch(t2, { credentials: "same-origin" }), o5 = await WebAssembly.instantiateStreaming(a2, r2);
        return o5;
      } catch (_5) {
        err(`wasm streaming compile failed: ${_5}`), err("falling back to ArrayBuffer instantiation");
      }
      return instantiateArrayBuffer(t2, r2);
    }
    function getWasmImports() {
      return { env: wasmImports, wasi_snapshot_preview1: wasmImports, "GOT.mem": new Proxy(wasmImports, GOTHandler), "GOT.func": new Proxy(wasmImports, GOTHandler) };
    }
    async function createWasm() {
      function e(o5, _5) {
        wasmExports = o5.exports, wasmExports = relocateExports(wasmExports, 1024);
        var s5 = getDylinkMetadata(_5);
        return s5.neededDynlibs && (dynamicLibraries = s5.neededDynlibs.concat(dynamicLibraries)), mergeLibSymbols(wasmExports, "main"), LDSO.init(), loadDylibs(), addOnInit(wasmExports.__wasm_call_ctors), __RELOC_FUNCS__.push(wasmExports.__wasm_apply_data_relocs), removeRunDependency("wasm-instantiate"), wasmExports;
      }
      addRunDependency("wasm-instantiate");
      function t2(o5) {
        e(o5.instance, o5.module);
      }
      var r2 = getWasmImports();
      if (Module.instantiateWasm) try {
        return Module.instantiateWasm(r2, e);
      } catch (o5) {
        err(`Module.instantiateWasm callback failed with error: ${o5}`), readyPromiseReject(o5);
      }
      wasmBinaryFile ?? (wasmBinaryFile = findWasmBinary());
      try {
        var a2 = await instantiateAsync(wasmBinary, wasmBinaryFile, r2);
        return t2(a2), a2;
      } catch (o5) {
        readyPromiseReject(o5);
        return;
      }
    }
    var ASM_CONSTS = {};
    class ExitStatus {
      constructor(t2) {
        P(this, "name", "ExitStatus");
        this.message = `Program terminated with exit(${t2})`, this.status = t2;
      }
    }
    var GOT = {}, currentModuleWeakSymbols = /* @__PURE__ */ new Set([]), GOTHandler = { get(e, t2) {
      var r2 = GOT[t2];
      return r2 || (r2 = GOT[t2] = new WebAssembly.Global({ value: "i32", mutable: true })), currentModuleWeakSymbols.has(t2) || (r2.required = true), r2;
    } }, callRuntimeCallbacks = (e) => {
      for (; e.length > 0; ) e.shift()(Module);
    }, UTF8Decoder = typeof TextDecoder < "u" ? new TextDecoder() : void 0, UTF8ArrayToString = (e, t2 = 0, r2 = NaN) => {
      for (var a2 = t2 + r2, o5 = t2; e[o5] && !(o5 >= a2); ) ++o5;
      if (o5 - t2 > 16 && e.buffer && UTF8Decoder) return UTF8Decoder.decode(e.subarray(t2, o5));
      for (var _5 = ""; t2 < o5; ) {
        var s5 = e[t2++];
        if (!(s5 & 128)) {
          _5 += String.fromCharCode(s5);
          continue;
        }
        var n3 = e[t2++] & 63;
        if ((s5 & 224) == 192) {
          _5 += String.fromCharCode((s5 & 31) << 6 | n3);
          continue;
        }
        var l2 = e[t2++] & 63;
        if ((s5 & 240) == 224 ? s5 = (s5 & 15) << 12 | n3 << 6 | l2 : s5 = (s5 & 7) << 18 | n3 << 12 | l2 << 6 | e[t2++] & 63, s5 < 65536) _5 += String.fromCharCode(s5);
        else {
          var d3 = s5 - 65536;
          _5 += String.fromCharCode(55296 | d3 >> 10, 56320 | d3 & 1023);
        }
      }
      return _5;
    }, getDylinkMetadata = (e) => {
      var t2 = 0, r2 = 0;
      function a2() {
        return e[t2++];
      }
      function o5() {
        for (var A3 = 0, O4 = 1; ; ) {
          var I2 = e[t2++];
          if (A3 += (I2 & 127) * O4, O4 *= 128, !(I2 & 128)) break;
        }
        return A3;
      }
      function _5() {
        var A3 = o5();
        return t2 += A3, UTF8ArrayToString(e, t2 - A3, A3);
      }
      function s5(A3, O4) {
        if (A3) throw new Error(O4);
      }
      var n3 = "dylink.0";
      if (e instanceof WebAssembly.Module) {
        var l2 = WebAssembly.Module.customSections(e, n3);
        l2.length === 0 && (n3 = "dylink", l2 = WebAssembly.Module.customSections(e, n3)), s5(l2.length === 0, "need dylink section"), e = new Uint8Array(l2[0]), r2 = e.length;
      } else {
        var d3 = new Uint32Array(new Uint8Array(e.subarray(0, 24)).buffer), u3 = d3[0] == 1836278016;
        s5(!u3, "need to see wasm magic number"), s5(e[8] !== 0, "need the dylink section to be first"), t2 = 9;
        var g5 = o5();
        r2 = t2 + g5, n3 = _5();
      }
      var p5 = { neededDynlibs: [], tlsExports: /* @__PURE__ */ new Set(), weakImports: /* @__PURE__ */ new Set() };
      if (n3 == "dylink") {
        p5.memorySize = o5(), p5.memoryAlign = o5(), p5.tableSize = o5(), p5.tableAlign = o5();
        for (var m5 = o5(), f5 = 0; f5 < m5; ++f5) {
          var c4 = _5();
          p5.neededDynlibs.push(c4);
        }
      } else {
        s5(n3 !== "dylink.0");
        for (var w4 = 1, x5 = 2, y5 = 3, h2 = 4, F4 = 256, E3 = 3, b4 = 1; t2 < r2; ) {
          var S4 = a2(), z3 = o5();
          if (S4 === w4) p5.memorySize = o5(), p5.memoryAlign = o5(), p5.tableSize = o5(), p5.tableAlign = o5();
          else if (S4 === x5) for (var m5 = o5(), f5 = 0; f5 < m5; ++f5) c4 = _5(), p5.neededDynlibs.push(c4);
          else if (S4 === y5) for (var H4 = o5(); H4--; ) {
            var ae2 = _5(), U3 = o5();
            U3 & F4 && p5.tlsExports.add(ae2);
          }
          else if (S4 === h2) for (var H4 = o5(); H4--; ) {
            var W5 = _5(), ae2 = _5(), U3 = o5();
            (U3 & E3) == b4 && p5.weakImports.add(ae2);
          }
          else t2 += z3;
        }
      }
      return p5;
    };
    function getValue(e, t2 = "i8") {
      switch (t2.endsWith("*") && (t2 = "*"), t2) {
        case "i1":
          return HEAP8[e];
        case "i8":
          return HEAP8[e];
        case "i16":
          return HEAP16[e >> 1];
        case "i32":
          return HEAP32[e >> 2];
        case "i64":
          return HEAP64[e >> 3];
        case "float":
          return HEAPF32[e >> 2];
        case "double":
          return HEAPF64[e >> 3];
        case "*":
          return HEAPU32[e >> 2];
        default:
          abort(`invalid type for getValue: ${t2}`);
      }
    }
    var newDSO = (e, t2, r2) => {
      var a2 = { refcount: 1 / 0, name: e, exports: r2, global: true };
      return LDSO.loadedLibsByName[e] = a2, t2 != null && (LDSO.loadedLibsByHandle[t2] = a2), a2;
    }, LDSO = { loadedLibsByName: {}, loadedLibsByHandle: {}, init() {
      newDSO("__main__", 0, wasmImports);
    } }, ___heap_base = 10937088, alignMemory = (e, t2) => Math.ceil(e / t2) * t2, getMemory = (e) => {
      if (runtimeInitialized) return _calloc(e, 1);
      var t2 = ___heap_base, r2 = t2 + alignMemory(e, 16);
      return ___heap_base = r2, GOT.__heap_base.value = r2, t2;
    }, isInternalSym = (e) => ["__cpp_exception", "__c_longjmp", "__wasm_apply_data_relocs", "__dso_handle", "__tls_size", "__tls_align", "__set_stack_limits", "_emscripten_tls_init", "__wasm_init_tls", "__wasm_call_ctors", "__start_em_asm", "__stop_em_asm", "__start_em_js", "__stop_em_js"].includes(e) || e.startsWith("__em_js__"), uleb128Encode = (e, t2) => {
      e < 128 ? t2.push(e) : t2.push(e % 128 | 128, e >> 7);
    }, sigToWasmTypes = (e) => {
      for (var t2 = { i: "i32", j: "i64", f: "f32", d: "f64", e: "externref", p: "i32" }, r2 = { parameters: [], results: e[0] == "v" ? [] : [t2[e[0]]] }, a2 = 1; a2 < e.length; ++a2) r2.parameters.push(t2[e[a2]]);
      return r2;
    }, generateFuncType = (e, t2) => {
      var r2 = e.slice(0, 1), a2 = e.slice(1), o5 = { i: 127, p: 127, j: 126, f: 125, d: 124, e: 111 };
      t2.push(96), uleb128Encode(a2.length, t2);
      for (var _5 = 0; _5 < a2.length; ++_5) t2.push(o5[a2[_5]]);
      r2 == "v" ? t2.push(0) : t2.push(1, o5[r2]);
    }, convertJsFunctionToWasm = (e, t2) => {
      if (typeof WebAssembly.Function == "function") return new WebAssembly.Function(sigToWasmTypes(t2), e);
      var r2 = [1];
      generateFuncType(t2, r2);
      var a2 = [0, 97, 115, 109, 1, 0, 0, 0, 1];
      uleb128Encode(r2.length, a2), a2.push(...r2), a2.push(2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0);
      var o5 = new WebAssembly.Module(new Uint8Array(a2)), _5 = new WebAssembly.Instance(o5, { e: { f: e } }), s5 = _5.exports.f;
      return s5;
    }, wasmTableMirror = [], wasmTable = new WebAssembly.Table({ initial: 6098, element: "anyfunc" }), getWasmTableEntry = (e) => {
      var t2 = wasmTableMirror[e];
      return t2 || (e >= wasmTableMirror.length && (wasmTableMirror.length = e + 1), wasmTableMirror[e] = t2 = wasmTable.get(e)), t2;
    }, updateTableMap = (e, t2) => {
      if (functionsInTableMap) for (var r2 = e; r2 < e + t2; r2++) {
        var a2 = getWasmTableEntry(r2);
        a2 && functionsInTableMap.set(a2, r2);
      }
    }, functionsInTableMap, getFunctionAddress = (e) => (functionsInTableMap || (functionsInTableMap = /* @__PURE__ */ new WeakMap(), updateTableMap(0, wasmTable.length)), functionsInTableMap.get(e) || 0), freeTableIndexes = [], getEmptyTableSlot = () => {
      if (freeTableIndexes.length) return freeTableIndexes.pop();
      try {
        wasmTable.grow(1);
      } catch (e) {
        throw e instanceof RangeError ? "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH." : e;
      }
      return wasmTable.length - 1;
    }, setWasmTableEntry = (e, t2) => {
      wasmTable.set(e, t2), wasmTableMirror[e] = wasmTable.get(e);
    }, addFunction = (e, t2) => {
      var r2 = getFunctionAddress(e);
      if (r2) return r2;
      var a2 = getEmptyTableSlot();
      try {
        setWasmTableEntry(a2, e);
      } catch (_5) {
        if (!(_5 instanceof TypeError)) throw _5;
        var o5 = convertJsFunctionToWasm(e, t2);
        setWasmTableEntry(a2, o5);
      }
      return functionsInTableMap.set(e, a2), a2;
    }, updateGOT = (e, t2) => {
      for (var r2 in e) if (!isInternalSym(r2)) {
        var a2 = e[r2];
        GOT[r2] || (GOT[r2] = new WebAssembly.Global({ value: "i32", mutable: true })), (t2 || GOT[r2].value == 0) && (typeof a2 == "function" ? GOT[r2].value = addFunction(a2) : typeof a2 == "number" ? GOT[r2].value = a2 : err(`unhandled export type for '${r2}': ${typeof a2}`));
      }
    }, relocateExports = (e, t2, r2) => {
      var a2 = {};
      for (var o5 in e) {
        var _5 = e[o5];
        typeof _5 == "object" && (_5 = _5.value), typeof _5 == "number" && (_5 += t2), a2[o5] = _5;
      }
      return updateGOT(a2, r2), a2;
    }, isSymbolDefined = (e) => {
      var t2 = wasmImports[e];
      return !(!t2 || t2.stub);
    }, dynCall = (e, t2, r2 = []) => {
      var a2 = getWasmTableEntry(t2)(...r2);
      return a2;
    }, stackSave = () => _emscripten_stack_get_current(), stackRestore = (e) => __emscripten_stack_restore(e), createInvokeFunction = (e) => (t2, ...r2) => {
      var a2 = stackSave();
      try {
        return dynCall(e, t2, r2);
      } catch (o5) {
        if (stackRestore(a2), o5 !== o5 + 0) throw o5;
        if (_setThrew(1, 0), e[0] == "j") return 0n;
      }
    }, resolveGlobalSymbol = (e, t2 = false) => {
      var r2;
      return isSymbolDefined(e) ? r2 = wasmImports[e] : e.startsWith("invoke_") && (r2 = wasmImports[e] = createInvokeFunction(e.split("_")[1])), { sym: r2, name: e };
    }, UTF8ToString = (e, t2) => e ? UTF8ArrayToString(HEAPU8, e, t2) : "", loadWebAssemblyModule = (binary, flags, libName, localScope, handle) => {
      var metadata = getDylinkMetadata(binary);
      currentModuleWeakSymbols = metadata.weakImports;
      function loadModule() {
        var firstLoad = !handle || !HEAP8[handle + 8];
        if (firstLoad) {
          var memAlign = Math.pow(2, metadata.memoryAlign), memoryBase = metadata.memorySize ? alignMemory(getMemory(metadata.memorySize + memAlign), memAlign) : 0, tableBase = metadata.tableSize ? wasmTable.length : 0;
          handle && (HEAP8[handle + 8] = 1, HEAPU32[handle + 12 >> 2] = memoryBase, HEAP32[handle + 16 >> 2] = metadata.memorySize, HEAPU32[handle + 20 >> 2] = tableBase, HEAP32[handle + 24 >> 2] = metadata.tableSize);
        } else memoryBase = HEAPU32[handle + 12 >> 2], tableBase = HEAPU32[handle + 20 >> 2];
        var tableGrowthNeeded = tableBase + metadata.tableSize - wasmTable.length;
        tableGrowthNeeded > 0 && wasmTable.grow(tableGrowthNeeded);
        var moduleExports;
        function resolveSymbol(e) {
          var t2 = resolveGlobalSymbol(e).sym;
          return !t2 && localScope && (t2 = localScope[e]), t2 || (t2 = moduleExports[e]), t2;
        }
        var proxyHandler = { get(e, t2) {
          switch (t2) {
            case "__memory_base":
              return memoryBase;
            case "__table_base":
              return tableBase;
          }
          if (t2 in wasmImports && !wasmImports[t2].stub) return wasmImports[t2];
          if (!(t2 in e)) {
            var r2;
            e[t2] = (...a2) => (r2 || (r2 = resolveSymbol(t2)), r2(...a2));
          }
          return e[t2];
        } }, proxy = new Proxy({}, proxyHandler), info = { "GOT.mem": new Proxy({}, GOTHandler), "GOT.func": new Proxy({}, GOTHandler), env: proxy, wasi_snapshot_preview1: proxy };
        function postInstantiation(module, instance) {
          updateTableMap(tableBase, metadata.tableSize), moduleExports = relocateExports(instance.exports, memoryBase), flags.allowUndefined || reportUndefinedSymbols();
          function addEmAsm(addr, body) {
            for (var args = [], arity = 0; arity < 16 && body.indexOf("$" + arity) != -1; arity++) args.push("$" + arity);
            args = args.join(",");
            var func = `(${args}) => { ${body} };`;
            ASM_CONSTS[start] = eval(func);
          }
          if ("__start_em_asm" in moduleExports) for (var start = moduleExports.__start_em_asm, stop = moduleExports.__stop_em_asm; start < stop; ) {
            var jsString = UTF8ToString(start);
            addEmAsm(start, jsString), start = HEAPU8.indexOf(0, start) + 1;
          }
          function addEmJs(name, cSig, body) {
            var jsArgs = [];
            if (cSig = cSig.slice(1, -1), cSig != "void") {
              cSig = cSig.split(",");
              for (var i in cSig) {
                var jsArg = cSig[i].split(" ").pop();
                jsArgs.push(jsArg.replace("*", ""));
              }
            }
            var func = `(${jsArgs}) => ${body};`;
            moduleExports[name] = eval(func);
          }
          for (var name in moduleExports) if (name.startsWith("__em_js__")) {
            var start = moduleExports[name], jsString = UTF8ToString(start), parts = jsString.split("<::>");
            addEmJs(name.replace("__em_js__", ""), parts[0], parts[1]), delete moduleExports[name];
          }
          var applyRelocs = moduleExports.__wasm_apply_data_relocs;
          applyRelocs && (runtimeInitialized ? applyRelocs() : __RELOC_FUNCS__.push(applyRelocs));
          var init = moduleExports.__wasm_call_ctors;
          return init && (runtimeInitialized ? init() : __ATINIT__.push(init)), moduleExports;
        }
        if (flags.loadAsync) {
          if (binary instanceof WebAssembly.Module) {
            var instance = new WebAssembly.Instance(binary, info);
            return Promise.resolve(postInstantiation(binary, instance));
          }
          return WebAssembly.instantiate(binary, info).then((e) => postInstantiation(e.module, e.instance));
        }
        var module = binary instanceof WebAssembly.Module ? binary : new WebAssembly.Module(binary), instance = new WebAssembly.Instance(module, info);
        return postInstantiation(module, instance);
      }
      return flags.loadAsync ? metadata.neededDynlibs.reduce((e, t2) => e.then(() => loadDynamicLibrary(t2, flags, localScope)), Promise.resolve()).then(loadModule) : (metadata.neededDynlibs.forEach((e) => loadDynamicLibrary(e, flags, localScope)), loadModule());
    }, mergeLibSymbols = (e, t2) => {
      for (var [r2, a2] of Object.entries(e)) {
        let o5 = (s5) => {
          isSymbolDefined(s5) || (wasmImports[s5] = a2);
        };
        o5(r2);
        let _5 = "__main_argc_argv";
        r2 == "main" && o5(_5), r2 == _5 && o5("main");
      }
    }, asyncLoad = async (e) => {
      var t2 = await readAsync(e);
      return new Uint8Array(t2);
    }, preloadPlugins = Module.preloadPlugins || [], registerWasmPlugin = () => {
      var e = { promiseChainEnd: Promise.resolve(), canHandle: (t2) => !Module.noWasmDecoding && t2.endsWith(".so"), handle: (t2, r2, a2, o5) => {
        e.promiseChainEnd = e.promiseChainEnd.then(() => loadWebAssemblyModule(t2, { loadAsync: true, nodelete: true }, r2, {})).then((_5) => {
          preloadedWasm[r2] = _5, a2(t2);
        }, (_5) => {
          err(`failed to instantiate wasm: ${r2}: ${_5}`), o5();
        });
      } };
      preloadPlugins.push(e);
    }, preloadedWasm = {};
    function loadDynamicLibrary(e, t2 = { global: true, nodelete: true }, r2, a2) {
      var o5 = LDSO.loadedLibsByName[e];
      if (o5) return t2.global ? o5.global || (o5.global = true, mergeLibSymbols(o5.exports, e)) : r2 && Object.assign(r2, o5.exports), t2.nodelete && o5.refcount !== 1 / 0 && (o5.refcount = 1 / 0), o5.refcount++, a2 && (LDSO.loadedLibsByHandle[a2] = o5), t2.loadAsync ? Promise.resolve(true) : true;
      o5 = newDSO(e, a2, "loading"), o5.refcount = t2.nodelete ? 1 / 0 : 1, o5.global = t2.global;
      function _5() {
        if (a2) {
          var l2 = HEAPU32[a2 + 28 >> 2], d3 = HEAPU32[a2 + 32 >> 2];
          if (l2 && d3) {
            var u3 = HEAP8.slice(l2, l2 + d3);
            return t2.loadAsync ? Promise.resolve(u3) : u3;
          }
        }
        var g5 = locateFile(e);
        if (t2.loadAsync) return asyncLoad(g5);
        if (!readBinary) throw new Error(`${g5}: file not found, and synchronous loading of external files is not available`);
        return readBinary(g5);
      }
      function s5() {
        var l2 = preloadedWasm[e];
        return l2 ? t2.loadAsync ? Promise.resolve(l2) : l2 : t2.loadAsync ? _5().then((d3) => loadWebAssemblyModule(d3, t2, e, r2, a2)) : loadWebAssemblyModule(_5(), t2, e, r2, a2);
      }
      function n3(l2) {
        o5.global ? mergeLibSymbols(l2, e) : r2 && Object.assign(r2, l2), o5.exports = l2;
      }
      return t2.loadAsync ? s5().then((l2) => (n3(l2), true)) : (n3(s5()), true);
    }
    var reportUndefinedSymbols = () => {
      for (var [e, t2] of Object.entries(GOT)) if (t2.value == 0) {
        var r2 = resolveGlobalSymbol(e, true).sym;
        if (!r2 && !t2.required) continue;
        if (typeof r2 == "function") t2.value = addFunction(r2, r2.sig);
        else if (typeof r2 == "number") t2.value = r2;
        else throw new Error(`bad export type for '${e}': ${typeof r2}`);
      }
    }, loadDylibs = () => {
      if (!dynamicLibraries.length) {
        reportUndefinedSymbols();
        return;
      }
      addRunDependency("loadDylibs"), dynamicLibraries.reduce((e, t2) => e.then(() => loadDynamicLibrary(t2, { loadAsync: true, global: true, nodelete: true, allowUndefined: true })), Promise.resolve()).then(() => {
        reportUndefinedSymbols(), removeRunDependency("loadDylibs");
      });
    }, noExitRuntime = Module.noExitRuntime || false;
    function setValue(e, t2, r2 = "i8") {
      switch (r2.endsWith("*") && (r2 = "*"), r2) {
        case "i1":
          HEAP8[e] = t2;
          break;
        case "i8":
          HEAP8[e] = t2;
          break;
        case "i16":
          HEAP16[e >> 1] = t2;
          break;
        case "i32":
          HEAP32[e >> 2] = t2;
          break;
        case "i64":
          HEAP64[e >> 3] = BigInt(t2);
          break;
        case "float":
          HEAPF32[e >> 2] = t2;
          break;
        case "double":
          HEAPF64[e >> 3] = t2;
          break;
        case "*":
          HEAPU32[e >> 2] = t2;
          break;
        default:
          abort(`invalid type for setValue: ${r2}`);
      }
    }
    var ___assert_fail = (e, t2, r2, a2) => abort(`Assertion failed: ${UTF8ToString(e)}, at: ` + [t2 ? UTF8ToString(t2) : "unknown filename", r2, a2 ? UTF8ToString(a2) : "unknown function"]);
    ___assert_fail.sig = "vppip";
    var ___call_sighandler = (e, t2) => getWasmTableEntry(e)(t2);
    ___call_sighandler.sig = "vpi";
    var ___memory_base = new WebAssembly.Global({ value: "i32", mutable: false }, 1024);
    Module.___memory_base = ___memory_base;
    var ___stack_pointer = new WebAssembly.Global({ value: "i32", mutable: true }, 10937088);
    Module.___stack_pointer = ___stack_pointer;
    var PATH = { isAbs: (e) => e.charAt(0) === "/", splitPath: (e) => {
      var t2 = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
      return t2.exec(e).slice(1);
    }, normalizeArray: (e, t2) => {
      for (var r2 = 0, a2 = e.length - 1; a2 >= 0; a2--) {
        var o5 = e[a2];
        o5 === "." ? e.splice(a2, 1) : o5 === ".." ? (e.splice(a2, 1), r2++) : r2 && (e.splice(a2, 1), r2--);
      }
      if (t2) for (; r2; r2--) e.unshift("..");
      return e;
    }, normalize: (e) => {
      var t2 = PATH.isAbs(e), r2 = e.substr(-1) === "/";
      return e = PATH.normalizeArray(e.split("/").filter((a2) => !!a2), !t2).join("/"), !e && !t2 && (e = "."), e && r2 && (e += "/"), (t2 ? "/" : "") + e;
    }, dirname: (e) => {
      var t2 = PATH.splitPath(e), r2 = t2[0], a2 = t2[1];
      return !r2 && !a2 ? "." : (a2 && (a2 = a2.substr(0, a2.length - 1)), r2 + a2);
    }, basename: (e) => {
      if (e === "/") return "/";
      e = PATH.normalize(e), e = e.replace(/\/$/, "");
      var t2 = e.lastIndexOf("/");
      return t2 === -1 ? e : e.substr(t2 + 1);
    }, join: (...e) => PATH.normalize(e.join("/")), join2: (e, t2) => PATH.normalize(e + "/" + t2) }, initRandomFill = () => {
      if (typeof crypto == "object" && typeof crypto.getRandomValues == "function") return (a2) => crypto.getRandomValues(a2);
      if (ENVIRONMENT_IS_NODE) try {
        var e = require("crypto"), t2 = e.randomFillSync;
        if (t2) return (a2) => e.randomFillSync(a2);
        var r2 = e.randomBytes;
        return (a2) => (a2.set(r2(a2.byteLength)), a2);
      } catch {
      }
      abort("initRandomDevice");
    }, randomFill = (e) => (randomFill = initRandomFill())(e), PATH_FS = { resolve: (...e) => {
      for (var t2 = "", r2 = false, a2 = e.length - 1; a2 >= -1 && !r2; a2--) {
        var o5 = a2 >= 0 ? e[a2] : FS.cwd();
        if (typeof o5 != "string") throw new TypeError("Arguments to path.resolve must be strings");
        if (!o5) return "";
        t2 = o5 + "/" + t2, r2 = PATH.isAbs(o5);
      }
      return t2 = PATH.normalizeArray(t2.split("/").filter((_5) => !!_5), !r2).join("/"), (r2 ? "/" : "") + t2 || ".";
    }, relative: (e, t2) => {
      e = PATH_FS.resolve(e).substr(1), t2 = PATH_FS.resolve(t2).substr(1);
      function r2(d3) {
        for (var u3 = 0; u3 < d3.length && d3[u3] === ""; u3++) ;
        for (var g5 = d3.length - 1; g5 >= 0 && d3[g5] === ""; g5--) ;
        return u3 > g5 ? [] : d3.slice(u3, g5 - u3 + 1);
      }
      for (var a2 = r2(e.split("/")), o5 = r2(t2.split("/")), _5 = Math.min(a2.length, o5.length), s5 = _5, n3 = 0; n3 < _5; n3++) if (a2[n3] !== o5[n3]) {
        s5 = n3;
        break;
      }
      for (var l2 = [], n3 = s5; n3 < a2.length; n3++) l2.push("..");
      return l2 = l2.concat(o5.slice(s5)), l2.join("/");
    } }, FS_stdin_getChar_buffer = [], lengthBytesUTF8 = (e) => {
      for (var t2 = 0, r2 = 0; r2 < e.length; ++r2) {
        var a2 = e.charCodeAt(r2);
        a2 <= 127 ? t2++ : a2 <= 2047 ? t2 += 2 : a2 >= 55296 && a2 <= 57343 ? (t2 += 4, ++r2) : t2 += 3;
      }
      return t2;
    }, stringToUTF8Array = (e, t2, r2, a2) => {
      if (!(a2 > 0)) return 0;
      for (var o5 = r2, _5 = r2 + a2 - 1, s5 = 0; s5 < e.length; ++s5) {
        var n3 = e.charCodeAt(s5);
        if (n3 >= 55296 && n3 <= 57343) {
          var l2 = e.charCodeAt(++s5);
          n3 = 65536 + ((n3 & 1023) << 10) | l2 & 1023;
        }
        if (n3 <= 127) {
          if (r2 >= _5) break;
          t2[r2++] = n3;
        } else if (n3 <= 2047) {
          if (r2 + 1 >= _5) break;
          t2[r2++] = 192 | n3 >> 6, t2[r2++] = 128 | n3 & 63;
        } else if (n3 <= 65535) {
          if (r2 + 2 >= _5) break;
          t2[r2++] = 224 | n3 >> 12, t2[r2++] = 128 | n3 >> 6 & 63, t2[r2++] = 128 | n3 & 63;
        } else {
          if (r2 + 3 >= _5) break;
          t2[r2++] = 240 | n3 >> 18, t2[r2++] = 128 | n3 >> 12 & 63, t2[r2++] = 128 | n3 >> 6 & 63, t2[r2++] = 128 | n3 & 63;
        }
      }
      return t2[r2] = 0, r2 - o5;
    };
    function intArrayFromString(e, t2, r2) {
      var a2 = r2 > 0 ? r2 : lengthBytesUTF8(e) + 1, o5 = new Array(a2), _5 = stringToUTF8Array(e, o5, 0, o5.length);
      return t2 && (o5.length = _5), o5;
    }
    var FS_stdin_getChar = () => {
      if (!FS_stdin_getChar_buffer.length) {
        var e = null;
        if (ENVIRONMENT_IS_NODE) {
          var t2 = 256, r2 = Buffer.alloc(t2), a2 = 0, o5 = process.stdin.fd;
          try {
            a2 = fs.readSync(o5, r2, 0, t2);
          } catch (_5) {
            if (_5.toString().includes("EOF")) a2 = 0;
            else throw _5;
          }
          a2 > 0 && (e = r2.slice(0, a2).toString("utf-8"));
        } else typeof window < "u" && typeof window.prompt == "function" && (e = window.prompt("Input: "), e !== null && (e += `
`));
        if (!e) return null;
        FS_stdin_getChar_buffer = intArrayFromString(e, true);
      }
      return FS_stdin_getChar_buffer.shift();
    }, TTY = { ttys: [], init() {
    }, shutdown() {
    }, register(e, t2) {
      TTY.ttys[e] = { input: [], output: [], ops: t2 }, FS.registerDevice(e, TTY.stream_ops);
    }, stream_ops: { open(e) {
      var t2 = TTY.ttys[e.node.rdev];
      if (!t2) throw new FS.ErrnoError(43);
      e.tty = t2, e.seekable = false;
    }, close(e) {
      e.tty.ops.fsync(e.tty);
    }, fsync(e) {
      e.tty.ops.fsync(e.tty);
    }, read(e, t2, r2, a2, o5) {
      if (!e.tty || !e.tty.ops.get_char) throw new FS.ErrnoError(60);
      for (var _5 = 0, s5 = 0; s5 < a2; s5++) {
        var n3;
        try {
          n3 = e.tty.ops.get_char(e.tty);
        } catch {
          throw new FS.ErrnoError(29);
        }
        if (n3 === void 0 && _5 === 0) throw new FS.ErrnoError(6);
        if (n3 == null) break;
        _5++, t2[r2 + s5] = n3;
      }
      return _5 && (e.node.atime = Date.now()), _5;
    }, write(e, t2, r2, a2, o5) {
      if (!e.tty || !e.tty.ops.put_char) throw new FS.ErrnoError(60);
      try {
        for (var _5 = 0; _5 < a2; _5++) e.tty.ops.put_char(e.tty, t2[r2 + _5]);
      } catch {
        throw new FS.ErrnoError(29);
      }
      return a2 && (e.node.mtime = e.node.ctime = Date.now()), _5;
    } }, default_tty_ops: { get_char(e) {
      return FS_stdin_getChar();
    }, put_char(e, t2) {
      t2 === null || t2 === 10 ? (out(UTF8ArrayToString(e.output)), e.output = []) : t2 != 0 && e.output.push(t2);
    }, fsync(e) {
      e.output && e.output.length > 0 && (out(UTF8ArrayToString(e.output)), e.output = []);
    }, ioctl_tcgets(e) {
      return { c_iflag: 25856, c_oflag: 5, c_cflag: 191, c_lflag: 35387, c_cc: [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] };
    }, ioctl_tcsets(e, t2, r2) {
      return 0;
    }, ioctl_tiocgwinsz(e) {
      return [24, 80];
    } }, default_tty1_ops: { put_char(e, t2) {
      t2 === null || t2 === 10 ? (err(UTF8ArrayToString(e.output)), e.output = []) : t2 != 0 && e.output.push(t2);
    }, fsync(e) {
      e.output && e.output.length > 0 && (err(UTF8ArrayToString(e.output)), e.output = []);
    } } }, zeroMemory = (e, t2) => {
      HEAPU8.fill(0, e, e + t2);
    }, mmapAlloc = (e) => {
      e = alignMemory(e, 65536);
      var t2 = _emscripten_builtin_memalign(65536, e);
      return t2 && zeroMemory(t2, e), t2;
    }, MEMFS = { ops_table: null, mount(e) {
      return MEMFS.createNode(null, "/", 16895, 0);
    }, createNode(e, t2, r2, a2) {
      if (FS.isBlkdev(r2) || FS.isFIFO(r2)) throw new FS.ErrnoError(63);
      MEMFS.ops_table || (MEMFS.ops_table = { dir: { node: { getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr, lookup: MEMFS.node_ops.lookup, mknod: MEMFS.node_ops.mknod, rename: MEMFS.node_ops.rename, unlink: MEMFS.node_ops.unlink, rmdir: MEMFS.node_ops.rmdir, readdir: MEMFS.node_ops.readdir, symlink: MEMFS.node_ops.symlink }, stream: { llseek: MEMFS.stream_ops.llseek } }, file: { node: { getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr }, stream: { llseek: MEMFS.stream_ops.llseek, read: MEMFS.stream_ops.read, write: MEMFS.stream_ops.write, allocate: MEMFS.stream_ops.allocate, mmap: MEMFS.stream_ops.mmap, msync: MEMFS.stream_ops.msync } }, link: { node: { getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr, readlink: MEMFS.node_ops.readlink }, stream: {} }, chrdev: { node: { getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr }, stream: FS.chrdev_stream_ops } });
      var o5 = FS.createNode(e, t2, r2, a2);
      return FS.isDir(o5.mode) ? (o5.node_ops = MEMFS.ops_table.dir.node, o5.stream_ops = MEMFS.ops_table.dir.stream, o5.contents = {}) : FS.isFile(o5.mode) ? (o5.node_ops = MEMFS.ops_table.file.node, o5.stream_ops = MEMFS.ops_table.file.stream, o5.usedBytes = 0, o5.contents = null) : FS.isLink(o5.mode) ? (o5.node_ops = MEMFS.ops_table.link.node, o5.stream_ops = MEMFS.ops_table.link.stream) : FS.isChrdev(o5.mode) && (o5.node_ops = MEMFS.ops_table.chrdev.node, o5.stream_ops = MEMFS.ops_table.chrdev.stream), o5.atime = o5.mtime = o5.ctime = Date.now(), e && (e.contents[t2] = o5, e.atime = e.mtime = e.ctime = o5.atime), o5;
    }, getFileDataAsTypedArray(e) {
      return e.contents ? e.contents.subarray ? e.contents.subarray(0, e.usedBytes) : new Uint8Array(e.contents) : new Uint8Array(0);
    }, expandFileStorage(e, t2) {
      var r2 = e.contents ? e.contents.length : 0;
      if (!(r2 >= t2)) {
        var a2 = 1024 * 1024;
        t2 = Math.max(t2, r2 * (r2 < a2 ? 2 : 1.125) >>> 0), r2 != 0 && (t2 = Math.max(t2, 256));
        var o5 = e.contents;
        e.contents = new Uint8Array(t2), e.usedBytes > 0 && e.contents.set(o5.subarray(0, e.usedBytes), 0);
      }
    }, resizeFileStorage(e, t2) {
      if (e.usedBytes != t2) if (t2 == 0) e.contents = null, e.usedBytes = 0;
      else {
        var r2 = e.contents;
        e.contents = new Uint8Array(t2), r2 && e.contents.set(r2.subarray(0, Math.min(t2, e.usedBytes))), e.usedBytes = t2;
      }
    }, node_ops: { getattr(e) {
      var t2 = {};
      return t2.dev = FS.isChrdev(e.mode) ? e.id : 1, t2.ino = e.id, t2.mode = e.mode, t2.nlink = 1, t2.uid = 0, t2.gid = 0, t2.rdev = e.rdev, FS.isDir(e.mode) ? t2.size = 4096 : FS.isFile(e.mode) ? t2.size = e.usedBytes : FS.isLink(e.mode) ? t2.size = e.link.length : t2.size = 0, t2.atime = new Date(e.atime), t2.mtime = new Date(e.mtime), t2.ctime = new Date(e.ctime), t2.blksize = 4096, t2.blocks = Math.ceil(t2.size / t2.blksize), t2;
    }, setattr(e, t2) {
      for (let r2 of ["mode", "atime", "mtime", "ctime"]) t2[r2] && (e[r2] = t2[r2]);
      t2.size !== void 0 && MEMFS.resizeFileStorage(e, t2.size);
    }, lookup(e, t2) {
      throw MEMFS.doesNotExistError;
    }, mknod(e, t2, r2, a2) {
      return MEMFS.createNode(e, t2, r2, a2);
    }, rename(e, t2, r2) {
      var a2;
      try {
        a2 = FS.lookupNode(t2, r2);
      } catch {
      }
      if (a2) {
        if (FS.isDir(e.mode)) for (var o5 in a2.contents) throw new FS.ErrnoError(55);
        FS.hashRemoveNode(a2);
      }
      delete e.parent.contents[e.name], t2.contents[r2] = e, e.name = r2, t2.ctime = t2.mtime = e.parent.ctime = e.parent.mtime = Date.now();
    }, unlink(e, t2) {
      delete e.contents[t2], e.ctime = e.mtime = Date.now();
    }, rmdir(e, t2) {
      var r2 = FS.lookupNode(e, t2);
      for (var a2 in r2.contents) throw new FS.ErrnoError(55);
      delete e.contents[t2], e.ctime = e.mtime = Date.now();
    }, readdir(e) {
      return [".", "..", ...Object.keys(e.contents)];
    }, symlink(e, t2, r2) {
      var a2 = MEMFS.createNode(e, t2, 41471, 0);
      return a2.link = r2, a2;
    }, readlink(e) {
      if (!FS.isLink(e.mode)) throw new FS.ErrnoError(28);
      return e.link;
    } }, stream_ops: { read(e, t2, r2, a2, o5) {
      var _5 = e.node.contents;
      if (o5 >= e.node.usedBytes) return 0;
      var s5 = Math.min(e.node.usedBytes - o5, a2);
      if (s5 > 8 && _5.subarray) t2.set(_5.subarray(o5, o5 + s5), r2);
      else for (var n3 = 0; n3 < s5; n3++) t2[r2 + n3] = _5[o5 + n3];
      return s5;
    }, write(e, t2, r2, a2, o5, _5) {
      if (t2.buffer === HEAP8.buffer && (_5 = false), !a2) return 0;
      var s5 = e.node;
      if (s5.mtime = s5.ctime = Date.now(), t2.subarray && (!s5.contents || s5.contents.subarray)) {
        if (_5) return s5.contents = t2.subarray(r2, r2 + a2), s5.usedBytes = a2, a2;
        if (s5.usedBytes === 0 && o5 === 0) return s5.contents = t2.slice(r2, r2 + a2), s5.usedBytes = a2, a2;
        if (o5 + a2 <= s5.usedBytes) return s5.contents.set(t2.subarray(r2, r2 + a2), o5), a2;
      }
      if (MEMFS.expandFileStorage(s5, o5 + a2), s5.contents.subarray && t2.subarray) s5.contents.set(t2.subarray(r2, r2 + a2), o5);
      else for (var n3 = 0; n3 < a2; n3++) s5.contents[o5 + n3] = t2[r2 + n3];
      return s5.usedBytes = Math.max(s5.usedBytes, o5 + a2), a2;
    }, llseek(e, t2, r2) {
      var a2 = t2;
      if (r2 === 1 ? a2 += e.position : r2 === 2 && FS.isFile(e.node.mode) && (a2 += e.node.usedBytes), a2 < 0) throw new FS.ErrnoError(28);
      return a2;
    }, allocate(e, t2, r2) {
      MEMFS.expandFileStorage(e.node, t2 + r2), e.node.usedBytes = Math.max(e.node.usedBytes, t2 + r2);
    }, mmap(e, t2, r2, a2, o5) {
      if (!FS.isFile(e.node.mode)) throw new FS.ErrnoError(43);
      var _5, s5, n3 = e.node.contents;
      if (!(o5 & 2) && n3 && n3.buffer === HEAP8.buffer) s5 = false, _5 = n3.byteOffset;
      else {
        if (s5 = true, _5 = mmapAlloc(t2), !_5) throw new FS.ErrnoError(48);
        n3 && ((r2 > 0 || r2 + t2 < n3.length) && (n3.subarray ? n3 = n3.subarray(r2, r2 + t2) : n3 = Array.prototype.slice.call(n3, r2, r2 + t2)), HEAP8.set(n3, _5));
      }
      return { ptr: _5, allocated: s5 };
    }, msync(e, t2, r2, a2, o5) {
      return MEMFS.stream_ops.write(e, t2, 0, a2, r2, false), 0;
    } } }, FS_createDataFile = (e, t2, r2, a2, o5, _5) => {
      FS.createDataFile(e, t2, r2, a2, o5, _5);
    }, FS_handledByPreloadPlugin = (e, t2, r2, a2) => {
      typeof Browser < "u" && Browser.init();
      var o5 = false;
      return preloadPlugins.forEach((_5) => {
        o5 || _5.canHandle(t2) && (_5.handle(e, t2, r2, a2), o5 = true);
      }), o5;
    }, FS_createPreloadedFile = (e, t2, r2, a2, o5, _5, s5, n3, l2, d3) => {
      var u3 = t2 ? PATH_FS.resolve(PATH.join2(e, t2)) : e, g5 = `cp ${u3}`;
      function p5(m5) {
        function f5(c4) {
          d3?.(), n3 || FS_createDataFile(e, t2, c4, a2, o5, l2), _5?.(), removeRunDependency(g5);
        }
        FS_handledByPreloadPlugin(m5, u3, f5, () => {
          s5?.(), removeRunDependency(g5);
        }) || f5(m5);
      }
      addRunDependency(g5), typeof r2 == "string" ? asyncLoad(r2).then(p5, s5) : p5(r2);
    }, FS_modeStringToFlags = (e) => {
      var t2 = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 }, r2 = t2[e];
      if (typeof r2 > "u") throw new Error(`Unknown file open mode: ${e}`);
      return r2;
    }, FS_getMode = (e, t2) => {
      var r2 = 0;
      return e && (r2 |= 365), t2 && (r2 |= 146), r2;
    }, IDBFS = { dbs: {}, indexedDB: () => {
      if (typeof indexedDB < "u") return indexedDB;
      var e = null;
      return typeof window == "object" && (e = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB), e;
    }, DB_VERSION: 21, DB_STORE_NAME: "FILE_DATA", queuePersist: (e) => {
      function t2() {
        e.idbPersistState === "again" ? r2() : e.idbPersistState = 0;
      }
      function r2() {
        e.idbPersistState = "idb", IDBFS.syncfs(e, false, t2);
      }
      e.idbPersistState ? e.idbPersistState === "idb" && (e.idbPersistState = "again") : e.idbPersistState = setTimeout(r2, 0);
    }, mount: (e) => {
      var t2 = MEMFS.mount(e);
      if (e?.opts?.autoPersist) {
        t2.idbPersistState = 0;
        var r2 = t2.node_ops;
        t2.node_ops = Object.assign({}, t2.node_ops), t2.node_ops.mknod = (a2, o5, _5, s5) => {
          var n3 = r2.mknod(a2, o5, _5, s5);
          return n3.node_ops = t2.node_ops, n3.idbfs_mount = t2.mount, n3.memfs_stream_ops = n3.stream_ops, n3.stream_ops = Object.assign({}, n3.stream_ops), n3.stream_ops.write = (l2, d3, u3, g5, p5, m5) => (l2.node.isModified = true, n3.memfs_stream_ops.write(l2, d3, u3, g5, p5, m5)), n3.stream_ops.close = (l2) => {
            var d3 = l2.node;
            if (d3.isModified && (IDBFS.queuePersist(d3.idbfs_mount), d3.isModified = false), d3.memfs_stream_ops.close) return d3.memfs_stream_ops.close(l2);
          }, n3;
        }, t2.node_ops.mkdir = (...a2) => (IDBFS.queuePersist(t2.mount), r2.mkdir(...a2)), t2.node_ops.rmdir = (...a2) => (IDBFS.queuePersist(t2.mount), r2.rmdir(...a2)), t2.node_ops.symlink = (...a2) => (IDBFS.queuePersist(t2.mount), r2.symlink(...a2)), t2.node_ops.unlink = (...a2) => (IDBFS.queuePersist(t2.mount), r2.unlink(...a2)), t2.node_ops.rename = (...a2) => (IDBFS.queuePersist(t2.mount), r2.rename(...a2));
      }
      return t2;
    }, syncfs: (e, t2, r2) => {
      IDBFS.getLocalSet(e, (a2, o5) => {
        if (a2) return r2(a2);
        IDBFS.getRemoteSet(e, (_5, s5) => {
          if (_5) return r2(_5);
          var n3 = t2 ? s5 : o5, l2 = t2 ? o5 : s5;
          IDBFS.reconcile(n3, l2, r2);
        });
      });
    }, quit: () => {
      Object.values(IDBFS.dbs).forEach((e) => e.close()), IDBFS.dbs = {};
    }, getDB: (e, t2) => {
      var r2 = IDBFS.dbs[e];
      if (r2) return t2(null, r2);
      var a2;
      try {
        a2 = IDBFS.indexedDB().open(e, IDBFS.DB_VERSION);
      } catch (o5) {
        return t2(o5);
      }
      if (!a2) return t2("Unable to connect to IndexedDB");
      a2.onupgradeneeded = (o5) => {
        var _5 = o5.target.result, s5 = o5.target.transaction, n3;
        _5.objectStoreNames.contains(IDBFS.DB_STORE_NAME) ? n3 = s5.objectStore(IDBFS.DB_STORE_NAME) : n3 = _5.createObjectStore(IDBFS.DB_STORE_NAME), n3.indexNames.contains("timestamp") || n3.createIndex("timestamp", "timestamp", { unique: false });
      }, a2.onsuccess = () => {
        r2 = a2.result, IDBFS.dbs[e] = r2, t2(null, r2);
      }, a2.onerror = (o5) => {
        t2(o5.target.error), o5.preventDefault();
      };
    }, getLocalSet: (e, t2) => {
      var r2 = {};
      function a2(l2) {
        return l2 !== "." && l2 !== "..";
      }
      function o5(l2) {
        return (d3) => PATH.join2(l2, d3);
      }
      for (var _5 = FS.readdir(e.mountpoint).filter(a2).map(o5(e.mountpoint)); _5.length; ) {
        var s5 = _5.pop(), n3;
        try {
          n3 = FS.stat(s5);
        } catch (l2) {
          return t2(l2);
        }
        FS.isDir(n3.mode) && _5.push(...FS.readdir(s5).filter(a2).map(o5(s5))), r2[s5] = { timestamp: n3.mtime };
      }
      return t2(null, { type: "local", entries: r2 });
    }, getRemoteSet: (e, t2) => {
      var r2 = {};
      IDBFS.getDB(e.mountpoint, (a2, o5) => {
        if (a2) return t2(a2);
        try {
          var _5 = o5.transaction([IDBFS.DB_STORE_NAME], "readonly");
          _5.onerror = (l2) => {
            t2(l2.target.error), l2.preventDefault();
          };
          var s5 = _5.objectStore(IDBFS.DB_STORE_NAME), n3 = s5.index("timestamp");
          n3.openKeyCursor().onsuccess = (l2) => {
            var d3 = l2.target.result;
            if (!d3) return t2(null, { type: "remote", db: o5, entries: r2 });
            r2[d3.primaryKey] = { timestamp: d3.key }, d3.continue();
          };
        } catch (l2) {
          return t2(l2);
        }
      });
    }, loadLocalEntry: (e, t2) => {
      var r2, a2;
      try {
        var o5 = FS.lookupPath(e);
        a2 = o5.node, r2 = FS.stat(e);
      } catch (_5) {
        return t2(_5);
      }
      return FS.isDir(r2.mode) ? t2(null, { timestamp: r2.mtime, mode: r2.mode }) : FS.isFile(r2.mode) ? (a2.contents = MEMFS.getFileDataAsTypedArray(a2), t2(null, { timestamp: r2.mtime, mode: r2.mode, contents: a2.contents })) : t2(new Error("node type not supported"));
    }, storeLocalEntry: (e, t2, r2) => {
      try {
        if (FS.isDir(t2.mode)) FS.mkdirTree(e, t2.mode);
        else if (FS.isFile(t2.mode)) FS.writeFile(e, t2.contents, { canOwn: true });
        else return r2(new Error("node type not supported"));
        FS.chmod(e, t2.mode), FS.utime(e, t2.timestamp, t2.timestamp);
      } catch (a2) {
        return r2(a2);
      }
      r2(null);
    }, removeLocalEntry: (e, t2) => {
      try {
        var r2 = FS.stat(e);
        FS.isDir(r2.mode) ? FS.rmdir(e) : FS.isFile(r2.mode) && FS.unlink(e);
      } catch (a2) {
        return t2(a2);
      }
      t2(null);
    }, loadRemoteEntry: (e, t2, r2) => {
      var a2 = e.get(t2);
      a2.onsuccess = (o5) => r2(null, o5.target.result), a2.onerror = (o5) => {
        r2(o5.target.error), o5.preventDefault();
      };
    }, storeRemoteEntry: (e, t2, r2, a2) => {
      try {
        var o5 = e.put(r2, t2);
      } catch (_5) {
        a2(_5);
        return;
      }
      o5.onsuccess = (_5) => a2(), o5.onerror = (_5) => {
        a2(_5.target.error), _5.preventDefault();
      };
    }, removeRemoteEntry: (e, t2, r2) => {
      var a2 = e.delete(t2);
      a2.onsuccess = (o5) => r2(), a2.onerror = (o5) => {
        r2(o5.target.error), o5.preventDefault();
      };
    }, reconcile: (e, t2, r2) => {
      var a2 = 0, o5 = [];
      Object.keys(e.entries).forEach((g5) => {
        var p5 = e.entries[g5], m5 = t2.entries[g5];
        (!m5 || p5.timestamp.getTime() != m5.timestamp.getTime()) && (o5.push(g5), a2++);
      });
      var _5 = [];
      if (Object.keys(t2.entries).forEach((g5) => {
        e.entries[g5] || (_5.push(g5), a2++);
      }), !a2) return r2(null);
      var s5 = false, n3 = e.type === "remote" ? e.db : t2.db, l2 = n3.transaction([IDBFS.DB_STORE_NAME], "readwrite"), d3 = l2.objectStore(IDBFS.DB_STORE_NAME);
      function u3(g5) {
        if (g5 && !s5) return s5 = true, r2(g5);
      }
      l2.onerror = l2.onabort = (g5) => {
        u3(g5.target.error), g5.preventDefault();
      }, l2.oncomplete = (g5) => {
        s5 || r2(null);
      }, o5.sort().forEach((g5) => {
        t2.type === "local" ? IDBFS.loadRemoteEntry(d3, g5, (p5, m5) => {
          if (p5) return u3(p5);
          IDBFS.storeLocalEntry(g5, m5, u3);
        }) : IDBFS.loadLocalEntry(g5, (p5, m5) => {
          if (p5) return u3(p5);
          IDBFS.storeRemoteEntry(d3, g5, m5, u3);
        });
      }), _5.sort().reverse().forEach((g5) => {
        t2.type === "local" ? IDBFS.removeLocalEntry(g5, u3) : IDBFS.removeRemoteEntry(d3, g5, u3);
      });
    } }, ERRNO_CODES = { EPERM: 63, ENOENT: 44, ESRCH: 71, EINTR: 27, EIO: 29, ENXIO: 60, E2BIG: 1, ENOEXEC: 45, EBADF: 8, ECHILD: 12, EAGAIN: 6, EWOULDBLOCK: 6, ENOMEM: 48, EACCES: 2, EFAULT: 21, ENOTBLK: 105, EBUSY: 10, EEXIST: 20, EXDEV: 75, ENODEV: 43, ENOTDIR: 54, EISDIR: 31, EINVAL: 28, ENFILE: 41, EMFILE: 33, ENOTTY: 59, ETXTBSY: 74, EFBIG: 22, ENOSPC: 51, ESPIPE: 70, EROFS: 69, EMLINK: 34, EPIPE: 64, EDOM: 18, ERANGE: 68, ENOMSG: 49, EIDRM: 24, ECHRNG: 106, EL2NSYNC: 156, EL3HLT: 107, EL3RST: 108, ELNRNG: 109, EUNATCH: 110, ENOCSI: 111, EL2HLT: 112, EDEADLK: 16, ENOLCK: 46, EBADE: 113, EBADR: 114, EXFULL: 115, ENOANO: 104, EBADRQC: 103, EBADSLT: 102, EDEADLOCK: 16, EBFONT: 101, ENOSTR: 100, ENODATA: 116, ETIME: 117, ENOSR: 118, ENONET: 119, ENOPKG: 120, EREMOTE: 121, ENOLINK: 47, EADV: 122, ESRMNT: 123, ECOMM: 124, EPROTO: 65, EMULTIHOP: 36, EDOTDOT: 125, EBADMSG: 9, ENOTUNIQ: 126, EBADFD: 127, EREMCHG: 128, ELIBACC: 129, ELIBBAD: 130, ELIBSCN: 131, ELIBMAX: 132, ELIBEXEC: 133, ENOSYS: 52, ENOTEMPTY: 55, ENAMETOOLONG: 37, ELOOP: 32, EOPNOTSUPP: 138, EPFNOSUPPORT: 139, ECONNRESET: 15, ENOBUFS: 42, EAFNOSUPPORT: 5, EPROTOTYPE: 67, ENOTSOCK: 57, ENOPROTOOPT: 50, ESHUTDOWN: 140, ECONNREFUSED: 14, EADDRINUSE: 3, ECONNABORTED: 13, ENETUNREACH: 40, ENETDOWN: 38, ETIMEDOUT: 73, EHOSTDOWN: 142, EHOSTUNREACH: 23, EINPROGRESS: 26, EALREADY: 7, EDESTADDRREQ: 17, EMSGSIZE: 35, EPROTONOSUPPORT: 66, ESOCKTNOSUPPORT: 137, EADDRNOTAVAIL: 4, ENETRESET: 39, EISCONN: 30, ENOTCONN: 53, ETOOMANYREFS: 141, EUSERS: 136, EDQUOT: 19, ESTALE: 72, ENOTSUP: 138, ENOMEDIUM: 148, EILSEQ: 25, EOVERFLOW: 61, ECANCELED: 11, ENOTRECOVERABLE: 56, EOWNERDEAD: 62, ESTRPIPE: 135 }, NODEFS = { isWindows: false, staticInit() {
      NODEFS.isWindows = !!process.platform.match(/^win/);
      var e = process.binding("constants");
      e.fs && (e = e.fs), NODEFS.flagsForNodeMap = { 1024: e.O_APPEND, 64: e.O_CREAT, 128: e.O_EXCL, 256: e.O_NOCTTY, 0: e.O_RDONLY, 2: e.O_RDWR, 4096: e.O_SYNC, 512: e.O_TRUNC, 1: e.O_WRONLY, 131072: e.O_NOFOLLOW };
    }, convertNodeCode(e) {
      var t2 = e.code;
      return ERRNO_CODES[t2];
    }, tryFSOperation(e) {
      try {
        return e();
      } catch (t2) {
        throw t2.code ? t2.code === "UNKNOWN" ? new FS.ErrnoError(28) : new FS.ErrnoError(NODEFS.convertNodeCode(t2)) : t2;
      }
    }, mount(e) {
      return NODEFS.createNode(null, "/", NODEFS.getMode(e.opts.root), 0);
    }, createNode(e, t2, r2, a2) {
      if (!FS.isDir(r2) && !FS.isFile(r2) && !FS.isLink(r2)) throw new FS.ErrnoError(28);
      var o5 = FS.createNode(e, t2, r2);
      return o5.node_ops = NODEFS.node_ops, o5.stream_ops = NODEFS.stream_ops, o5;
    }, getMode(e) {
      return NODEFS.tryFSOperation(() => {
        var t2 = fs.lstatSync(e).mode;
        return NODEFS.isWindows && (t2 |= (t2 & 292) >> 2), t2;
      });
    }, realPath(e) {
      for (var t2 = []; e.parent !== e; ) t2.push(e.name), e = e.parent;
      return t2.push(e.mount.opts.root), t2.reverse(), PATH.join(...t2);
    }, flagsForNode(e) {
      e &= -2097153, e &= -2049, e &= -32769, e &= -524289, e &= -65537;
      var t2 = 0;
      for (var r2 in NODEFS.flagsForNodeMap) e & r2 && (t2 |= NODEFS.flagsForNodeMap[r2], e ^= r2);
      if (e) throw new FS.ErrnoError(28);
      return t2;
    }, node_ops: { getattr(e) {
      var t2 = NODEFS.realPath(e), r2;
      return NODEFS.tryFSOperation(() => r2 = fs.lstatSync(t2)), NODEFS.isWindows && (r2.blksize || (r2.blksize = 4096), r2.blocks || (r2.blocks = (r2.size + r2.blksize - 1) / r2.blksize | 0), r2.mode |= (r2.mode & 292) >> 2), { dev: r2.dev, ino: r2.ino, mode: r2.mode, nlink: r2.nlink, uid: r2.uid, gid: r2.gid, rdev: r2.rdev, size: r2.size, atime: r2.atime, mtime: r2.mtime, ctime: r2.ctime, blksize: r2.blksize, blocks: r2.blocks };
    }, setattr(e, t2) {
      var r2 = NODEFS.realPath(e);
      NODEFS.tryFSOperation(() => {
        if (t2.mode !== void 0) {
          var a2 = t2.mode;
          NODEFS.isWindows && (a2 &= 384), fs.chmodSync(r2, a2), e.mode = t2.mode;
        }
        if (t2.atime || t2.mtime) {
          var o5 = t2.atime && new Date(t2.atime), _5 = t2.mtime && new Date(t2.mtime);
          fs.utimesSync(r2, o5, _5);
        }
        t2.size !== void 0 && fs.truncateSync(r2, t2.size);
      });
    }, lookup(e, t2) {
      var r2 = PATH.join2(NODEFS.realPath(e), t2), a2 = NODEFS.getMode(r2);
      return NODEFS.createNode(e, t2, a2);
    }, mknod(e, t2, r2, a2) {
      var o5 = NODEFS.createNode(e, t2, r2, a2), _5 = NODEFS.realPath(o5);
      return NODEFS.tryFSOperation(() => {
        FS.isDir(o5.mode) ? fs.mkdirSync(_5, o5.mode) : fs.writeFileSync(_5, "", { mode: o5.mode });
      }), o5;
    }, rename(e, t2, r2) {
      var a2 = NODEFS.realPath(e), o5 = PATH.join2(NODEFS.realPath(t2), r2);
      try {
        FS.unlink(o5);
      } catch {
      }
      NODEFS.tryFSOperation(() => fs.renameSync(a2, o5)), e.name = r2;
    }, unlink(e, t2) {
      var r2 = PATH.join2(NODEFS.realPath(e), t2);
      NODEFS.tryFSOperation(() => fs.unlinkSync(r2));
    }, rmdir(e, t2) {
      var r2 = PATH.join2(NODEFS.realPath(e), t2);
      NODEFS.tryFSOperation(() => fs.rmdirSync(r2));
    }, readdir(e) {
      var t2 = NODEFS.realPath(e);
      return NODEFS.tryFSOperation(() => fs.readdirSync(t2));
    }, symlink(e, t2, r2) {
      var a2 = PATH.join2(NODEFS.realPath(e), t2);
      NODEFS.tryFSOperation(() => fs.symlinkSync(r2, a2));
    }, readlink(e) {
      var t2 = NODEFS.realPath(e);
      return NODEFS.tryFSOperation(() => fs.readlinkSync(t2));
    }, statfs(e) {
      var t2 = NODEFS.tryFSOperation(() => fs.statfsSync(e));
      return t2.frsize = t2.bsize, t2;
    } }, stream_ops: { open(e) {
      var t2 = NODEFS.realPath(e.node);
      NODEFS.tryFSOperation(() => {
        FS.isFile(e.node.mode) && (e.shared.refcount = 1, e.nfd = fs.openSync(t2, NODEFS.flagsForNode(e.flags)));
      });
    }, close(e) {
      NODEFS.tryFSOperation(() => {
        FS.isFile(e.node.mode) && e.nfd && --e.shared.refcount === 0 && fs.closeSync(e.nfd);
      });
    }, dup(e) {
      e.shared.refcount++;
    }, read(e, t2, r2, a2, o5) {
      return a2 === 0 ? 0 : NODEFS.tryFSOperation(() => fs.readSync(e.nfd, new Int8Array(t2.buffer, r2, a2), 0, a2, o5));
    }, write(e, t2, r2, a2, o5) {
      return NODEFS.tryFSOperation(() => fs.writeSync(e.nfd, new Int8Array(t2.buffer, r2, a2), 0, a2, o5));
    }, llseek(e, t2, r2) {
      var a2 = t2;
      if (r2 === 1 ? a2 += e.position : r2 === 2 && FS.isFile(e.node.mode) && NODEFS.tryFSOperation(() => {
        var o5 = fs.fstatSync(e.nfd);
        a2 += o5.size;
      }), a2 < 0) throw new FS.ErrnoError(28);
      return a2;
    }, mmap(e, t2, r2, a2, o5) {
      if (!FS.isFile(e.node.mode)) throw new FS.ErrnoError(43);
      var _5 = mmapAlloc(t2);
      return NODEFS.stream_ops.read(e, HEAP8, _5, t2, r2), { ptr: _5, allocated: true };
    }, msync(e, t2, r2, a2, o5) {
      return NODEFS.stream_ops.write(e, t2, 0, a2, r2, false), 0;
    } } }, PROXYFS = { mount(e) {
      return PROXYFS.createNode(null, "/", e.opts.fs.lstat(e.opts.root).mode, 0);
    }, createNode(e, t2, r2, a2) {
      if (!FS.isDir(r2) && !FS.isFile(r2) && !FS.isLink(r2)) throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
      var o5 = FS.createNode(e, t2, r2);
      return o5.node_ops = PROXYFS.node_ops, o5.stream_ops = PROXYFS.stream_ops, o5;
    }, realPath(e) {
      for (var t2 = []; e.parent !== e; ) t2.push(e.name), e = e.parent;
      return t2.push(e.mount.opts.root), t2.reverse(), PATH.join(...t2);
    }, node_ops: { getattr(e) {
      var t2 = PROXYFS.realPath(e), r2;
      try {
        r2 = e.mount.opts.fs.lstat(t2);
      } catch (a2) {
        throw a2.code ? new FS.ErrnoError(ERRNO_CODES[a2.code]) : a2;
      }
      return { dev: r2.dev, ino: r2.ino, mode: r2.mode, nlink: r2.nlink, uid: r2.uid, gid: r2.gid, rdev: r2.rdev, size: r2.size, atime: r2.atime, mtime: r2.mtime, ctime: r2.ctime, blksize: r2.blksize, blocks: r2.blocks };
    }, setattr(e, t2) {
      var r2 = PROXYFS.realPath(e);
      try {
        if (t2.mode !== void 0 && (e.mount.opts.fs.chmod(r2, t2.mode), e.mode = t2.mode), t2.atime || t2.mtime) {
          var a2 = new Date(t2.atime || t2.mtime), o5 = new Date(t2.mtime || t2.atime);
          e.mount.opts.fs.utime(r2, a2, o5);
        }
        t2.size !== void 0 && e.mount.opts.fs.truncate(r2, t2.size);
      } catch (_5) {
        throw _5.code ? new FS.ErrnoError(ERRNO_CODES[_5.code]) : _5;
      }
    }, lookup(e, t2) {
      try {
        var r2 = PATH.join2(PROXYFS.realPath(e), t2), a2 = e.mount.opts.fs.lstat(r2).mode, o5 = PROXYFS.createNode(e, t2, a2);
        return o5;
      } catch (_5) {
        throw _5.code ? new FS.ErrnoError(ERRNO_CODES[_5.code]) : _5;
      }
    }, mknod(e, t2, r2, a2) {
      var o5 = PROXYFS.createNode(e, t2, r2, a2), _5 = PROXYFS.realPath(o5);
      try {
        FS.isDir(o5.mode) ? o5.mount.opts.fs.mkdir(_5, o5.mode) : o5.mount.opts.fs.writeFile(_5, "", { mode: o5.mode });
      } catch (s5) {
        throw s5.code ? new FS.ErrnoError(ERRNO_CODES[s5.code]) : s5;
      }
      return o5;
    }, rename(e, t2, r2) {
      var a2 = PROXYFS.realPath(e), o5 = PATH.join2(PROXYFS.realPath(t2), r2);
      try {
        e.mount.opts.fs.rename(a2, o5), e.name = r2;
      } catch (_5) {
        throw _5.code ? new FS.ErrnoError(ERRNO_CODES[_5.code]) : _5;
      }
    }, unlink(e, t2) {
      var r2 = PATH.join2(PROXYFS.realPath(e), t2);
      try {
        e.mount.opts.fs.unlink(r2);
      } catch (a2) {
        throw a2.code ? new FS.ErrnoError(ERRNO_CODES[a2.code]) : a2;
      }
    }, rmdir(e, t2) {
      var r2 = PATH.join2(PROXYFS.realPath(e), t2);
      try {
        e.mount.opts.fs.rmdir(r2);
      } catch (a2) {
        throw a2.code ? new FS.ErrnoError(ERRNO_CODES[a2.code]) : a2;
      }
    }, readdir(e) {
      var t2 = PROXYFS.realPath(e);
      try {
        return e.mount.opts.fs.readdir(t2);
      } catch (r2) {
        throw r2.code ? new FS.ErrnoError(ERRNO_CODES[r2.code]) : r2;
      }
    }, symlink(e, t2, r2) {
      var a2 = PATH.join2(PROXYFS.realPath(e), t2);
      try {
        e.mount.opts.fs.symlink(r2, a2);
      } catch (o5) {
        throw o5.code ? new FS.ErrnoError(ERRNO_CODES[o5.code]) : o5;
      }
    }, readlink(e) {
      var t2 = PROXYFS.realPath(e);
      try {
        return e.mount.opts.fs.readlink(t2);
      } catch (r2) {
        throw r2.code ? new FS.ErrnoError(ERRNO_CODES[r2.code]) : r2;
      }
    } }, stream_ops: { open(e) {
      var t2 = PROXYFS.realPath(e.node);
      try {
        e.nfd = e.node.mount.opts.fs.open(t2, e.flags);
      } catch (r2) {
        throw r2.code ? new FS.ErrnoError(ERRNO_CODES[r2.code]) : r2;
      }
    }, close(e) {
      try {
        e.node.mount.opts.fs.close(e.nfd);
      } catch (t2) {
        throw t2.code ? new FS.ErrnoError(ERRNO_CODES[t2.code]) : t2;
      }
    }, read(e, t2, r2, a2, o5) {
      try {
        return e.node.mount.opts.fs.read(e.nfd, t2, r2, a2, o5);
      } catch (_5) {
        throw _5.code ? new FS.ErrnoError(ERRNO_CODES[_5.code]) : _5;
      }
    }, write(e, t2, r2, a2, o5) {
      try {
        return e.node.mount.opts.fs.write(e.nfd, t2, r2, a2, o5);
      } catch (_5) {
        throw _5.code ? new FS.ErrnoError(ERRNO_CODES[_5.code]) : _5;
      }
    }, llseek(e, t2, r2) {
      var a2 = t2;
      if (r2 === 1) a2 += e.position;
      else if (r2 === 2 && FS.isFile(e.node.mode)) try {
        var o5 = e.node.node_ops.getattr(e.node);
        a2 += o5.size;
      } catch (_5) {
        throw new FS.ErrnoError(ERRNO_CODES[_5.code]);
      }
      if (a2 < 0) throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
      return a2;
    } } }, FS = { root: null, mounts: [], devices: {}, streams: [], nextInode: 1, nameTable: null, currentPath: "/", initialized: false, ignorePermissions: true, ErrnoError: class {
      constructor(e) {
        P(this, "name", "ErrnoError");
        this.errno = e;
      }
    }, filesystems: null, syncFSRequests: 0, readFiles: {}, FSStream: class {
      constructor() {
        P(this, "shared", {});
      }
      get object() {
        return this.node;
      }
      set object(e) {
        this.node = e;
      }
      get isRead() {
        return (this.flags & 2097155) !== 1;
      }
      get isWrite() {
        return (this.flags & 2097155) !== 0;
      }
      get isAppend() {
        return this.flags & 1024;
      }
      get flags() {
        return this.shared.flags;
      }
      set flags(e) {
        this.shared.flags = e;
      }
      get position() {
        return this.shared.position;
      }
      set position(e) {
        this.shared.position = e;
      }
    }, FSNode: class {
      constructor(e, t2, r2, a2) {
        P(this, "node_ops", {});
        P(this, "stream_ops", {});
        P(this, "readMode", 365);
        P(this, "writeMode", 146);
        P(this, "mounted", null);
        e || (e = this), this.parent = e, this.mount = e.mount, this.id = FS.nextInode++, this.name = t2, this.mode = r2, this.rdev = a2, this.atime = this.mtime = this.ctime = Date.now();
      }
      get read() {
        return (this.mode & this.readMode) === this.readMode;
      }
      set read(e) {
        e ? this.mode |= this.readMode : this.mode &= ~this.readMode;
      }
      get write() {
        return (this.mode & this.writeMode) === this.writeMode;
      }
      set write(e) {
        e ? this.mode |= this.writeMode : this.mode &= ~this.writeMode;
      }
      get isFolder() {
        return FS.isDir(this.mode);
      }
      get isDevice() {
        return FS.isChrdev(this.mode);
      }
    }, lookupPath(e, t2 = {}) {
      if (!e) return { path: "", node: null };
      t2.follow_mount ?? (t2.follow_mount = true), PATH.isAbs(e) || (e = FS.cwd() + "/" + e);
      e: for (var r2 = 0; r2 < 40; r2++) {
        for (var a2 = e.split("/").filter((d3) => !!d3 && d3 !== "."), o5 = FS.root, _5 = "/", s5 = 0; s5 < a2.length; s5++) {
          var n3 = s5 === a2.length - 1;
          if (n3 && t2.parent) break;
          if (a2[s5] === "..") {
            _5 = PATH.dirname(_5), o5 = o5.parent;
            continue;
          }
          _5 = PATH.join2(_5, a2[s5]);
          try {
            o5 = FS.lookupNode(o5, a2[s5]);
          } catch (d3) {
            if (d3?.errno === 44 && n3 && t2.noent_okay) return { path: _5 };
            throw d3;
          }
          if (FS.isMountpoint(o5) && (!n3 || t2.follow_mount) && (o5 = o5.mounted.root), FS.isLink(o5.mode) && (!n3 || t2.follow)) {
            if (!o5.node_ops.readlink) throw new FS.ErrnoError(52);
            var l2 = o5.node_ops.readlink(o5);
            PATH.isAbs(l2) || (l2 = PATH.dirname(_5) + "/" + l2), e = l2 + "/" + a2.slice(s5 + 1).join("/");
            continue e;
          }
        }
        return { path: _5, node: o5 };
      }
      throw new FS.ErrnoError(32);
    }, getPath(e) {
      for (var t2; ; ) {
        if (FS.isRoot(e)) {
          var r2 = e.mount.mountpoint;
          return t2 ? r2[r2.length - 1] !== "/" ? `${r2}/${t2}` : r2 + t2 : r2;
        }
        t2 = t2 ? `${e.name}/${t2}` : e.name, e = e.parent;
      }
    }, hashName(e, t2) {
      for (var r2 = 0, a2 = 0; a2 < t2.length; a2++) r2 = (r2 << 5) - r2 + t2.charCodeAt(a2) | 0;
      return (e + r2 >>> 0) % FS.nameTable.length;
    }, hashAddNode(e) {
      var t2 = FS.hashName(e.parent.id, e.name);
      e.name_next = FS.nameTable[t2], FS.nameTable[t2] = e;
    }, hashRemoveNode(e) {
      var t2 = FS.hashName(e.parent.id, e.name);
      if (FS.nameTable[t2] === e) FS.nameTable[t2] = e.name_next;
      else for (var r2 = FS.nameTable[t2]; r2; ) {
        if (r2.name_next === e) {
          r2.name_next = e.name_next;
          break;
        }
        r2 = r2.name_next;
      }
    }, lookupNode(e, t2) {
      var r2 = FS.mayLookup(e);
      if (r2) throw new FS.ErrnoError(r2);
      for (var a2 = FS.hashName(e.id, t2), o5 = FS.nameTable[a2]; o5; o5 = o5.name_next) {
        var _5 = o5.name;
        if (o5.parent.id === e.id && _5 === t2) return o5;
      }
      return FS.lookup(e, t2);
    }, createNode(e, t2, r2, a2) {
      var o5 = new FS.FSNode(e, t2, r2, a2);
      return FS.hashAddNode(o5), o5;
    }, destroyNode(e) {
      FS.hashRemoveNode(e);
    }, isRoot(e) {
      return e === e.parent;
    }, isMountpoint(e) {
      return !!e.mounted;
    }, isFile(e) {
      return (e & 61440) === 32768;
    }, isDir(e) {
      return (e & 61440) === 16384;
    }, isLink(e) {
      return (e & 61440) === 40960;
    }, isChrdev(e) {
      return (e & 61440) === 8192;
    }, isBlkdev(e) {
      return (e & 61440) === 24576;
    }, isFIFO(e) {
      return (e & 61440) === 4096;
    }, isSocket(e) {
      return (e & 49152) === 49152;
    }, flagsToPermissionString(e) {
      var t2 = ["r", "w", "rw"][e & 3];
      return e & 512 && (t2 += "w"), t2;
    }, nodePermissions(e, t2) {
      return FS.ignorePermissions ? 0 : t2.includes("r") && !(e.mode & 292) || t2.includes("w") && !(e.mode & 146) || t2.includes("x") && !(e.mode & 73) ? 2 : 0;
    }, mayLookup(e) {
      if (!FS.isDir(e.mode)) return 54;
      var t2 = FS.nodePermissions(e, "x");
      return t2 || (e.node_ops.lookup ? 0 : 2);
    }, mayCreate(e, t2) {
      if (!FS.isDir(e.mode)) return 54;
      try {
        var r2 = FS.lookupNode(e, t2);
        return 20;
      } catch {
      }
      return FS.nodePermissions(e, "wx");
    }, mayDelete(e, t2, r2) {
      var a2;
      try {
        a2 = FS.lookupNode(e, t2);
      } catch (_5) {
        return _5.errno;
      }
      var o5 = FS.nodePermissions(e, "wx");
      if (o5) return o5;
      if (r2) {
        if (!FS.isDir(a2.mode)) return 54;
        if (FS.isRoot(a2) || FS.getPath(a2) === FS.cwd()) return 10;
      } else if (FS.isDir(a2.mode)) return 31;
      return 0;
    }, mayOpen(e, t2) {
      return e ? FS.isLink(e.mode) ? 32 : FS.isDir(e.mode) && (FS.flagsToPermissionString(t2) !== "r" || t2 & 512) ? 31 : FS.nodePermissions(e, FS.flagsToPermissionString(t2)) : 44;
    }, MAX_OPEN_FDS: 4096, nextfd() {
      for (var e = 0; e <= FS.MAX_OPEN_FDS; e++) if (!FS.streams[e]) return e;
      throw new FS.ErrnoError(33);
    }, getStreamChecked(e) {
      var t2 = FS.getStream(e);
      if (!t2) throw new FS.ErrnoError(8);
      return t2;
    }, getStream: (e) => FS.streams[e], createStream(e, t2 = -1) {
      return e = Object.assign(new FS.FSStream(), e), t2 == -1 && (t2 = FS.nextfd()), e.fd = t2, FS.streams[t2] = e, e;
    }, closeStream(e) {
      FS.streams[e] = null;
    }, dupStream(e, t2 = -1) {
      var r2 = FS.createStream(e, t2);
      return r2.stream_ops?.dup?.(r2), r2;
    }, chrdev_stream_ops: { open(e) {
      var t2 = FS.getDevice(e.node.rdev);
      e.stream_ops = t2.stream_ops, e.stream_ops.open?.(e);
    }, llseek() {
      throw new FS.ErrnoError(70);
    } }, major: (e) => e >> 8, minor: (e) => e & 255, makedev: (e, t2) => e << 8 | t2, registerDevice(e, t2) {
      FS.devices[e] = { stream_ops: t2 };
    }, getDevice: (e) => FS.devices[e], getMounts(e) {
      for (var t2 = [], r2 = [e]; r2.length; ) {
        var a2 = r2.pop();
        t2.push(a2), r2.push(...a2.mounts);
      }
      return t2;
    }, syncfs(e, t2) {
      typeof e == "function" && (t2 = e, e = false), FS.syncFSRequests++, FS.syncFSRequests > 1 && err(`warning: ${FS.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);
      var r2 = FS.getMounts(FS.root.mount), a2 = 0;
      function o5(s5) {
        return FS.syncFSRequests--, t2(s5);
      }
      function _5(s5) {
        if (s5) return _5.errored ? void 0 : (_5.errored = true, o5(s5));
        ++a2 >= r2.length && o5(null);
      }
      r2.forEach((s5) => {
        if (!s5.type.syncfs) return _5(null);
        s5.type.syncfs(s5, e, _5);
      });
    }, mount(e, t2, r2) {
      var a2 = r2 === "/", o5 = !r2, _5;
      if (a2 && FS.root) throw new FS.ErrnoError(10);
      if (!a2 && !o5) {
        var s5 = FS.lookupPath(r2, { follow_mount: false });
        if (r2 = s5.path, _5 = s5.node, FS.isMountpoint(_5)) throw new FS.ErrnoError(10);
        if (!FS.isDir(_5.mode)) throw new FS.ErrnoError(54);
      }
      var n3 = { type: e, opts: t2, mountpoint: r2, mounts: [] }, l2 = e.mount(n3);
      return l2.mount = n3, n3.root = l2, a2 ? FS.root = l2 : _5 && (_5.mounted = n3, _5.mount && _5.mount.mounts.push(n3)), l2;
    }, unmount(e) {
      var t2 = FS.lookupPath(e, { follow_mount: false });
      if (!FS.isMountpoint(t2.node)) throw new FS.ErrnoError(28);
      var r2 = t2.node, a2 = r2.mounted, o5 = FS.getMounts(a2);
      Object.keys(FS.nameTable).forEach((s5) => {
        for (var n3 = FS.nameTable[s5]; n3; ) {
          var l2 = n3.name_next;
          o5.includes(n3.mount) && FS.destroyNode(n3), n3 = l2;
        }
      }), r2.mounted = null;
      var _5 = r2.mount.mounts.indexOf(a2);
      r2.mount.mounts.splice(_5, 1);
    }, lookup(e, t2) {
      return e.node_ops.lookup(e, t2);
    }, mknod(e, t2, r2) {
      var a2 = FS.lookupPath(e, { parent: true }), o5 = a2.node, _5 = PATH.basename(e);
      if (!_5 || _5 === "." || _5 === "..") throw new FS.ErrnoError(28);
      var s5 = FS.mayCreate(o5, _5);
      if (s5) throw new FS.ErrnoError(s5);
      if (!o5.node_ops.mknod) throw new FS.ErrnoError(63);
      return o5.node_ops.mknod(o5, _5, t2, r2);
    }, statfs(e) {
      var t2 = { bsize: 4096, frsize: 4096, blocks: 1e6, bfree: 5e5, bavail: 5e5, files: FS.nextInode, ffree: FS.nextInode - 1, fsid: 42, flags: 2, namelen: 255 }, r2 = FS.lookupPath(e, { follow: true }).node;
      return r2?.node_ops.statfs && Object.assign(t2, r2.node_ops.statfs(r2.mount.opts.root)), t2;
    }, create(e, t2 = 438) {
      return t2 &= 4095, t2 |= 32768, FS.mknod(e, t2, 0);
    }, mkdir(e, t2 = 511) {
      return t2 &= 1023, t2 |= 16384, FS.mknod(e, t2, 0);
    }, mkdirTree(e, t2) {
      for (var r2 = e.split("/"), a2 = "", o5 = 0; o5 < r2.length; ++o5) if (r2[o5]) {
        a2 += "/" + r2[o5];
        try {
          FS.mkdir(a2, t2);
        } catch (_5) {
          if (_5.errno != 20) throw _5;
        }
      }
    }, mkdev(e, t2, r2) {
      return typeof r2 > "u" && (r2 = t2, t2 = 438), t2 |= 8192, FS.mknod(e, t2, r2);
    }, symlink(e, t2) {
      if (!PATH_FS.resolve(e)) throw new FS.ErrnoError(44);
      var r2 = FS.lookupPath(t2, { parent: true }), a2 = r2.node;
      if (!a2) throw new FS.ErrnoError(44);
      var o5 = PATH.basename(t2), _5 = FS.mayCreate(a2, o5);
      if (_5) throw new FS.ErrnoError(_5);
      if (!a2.node_ops.symlink) throw new FS.ErrnoError(63);
      return a2.node_ops.symlink(a2, o5, e);
    }, rename(e, t2) {
      var r2 = PATH.dirname(e), a2 = PATH.dirname(t2), o5 = PATH.basename(e), _5 = PATH.basename(t2), s5, n3, l2;
      if (s5 = FS.lookupPath(e, { parent: true }), n3 = s5.node, s5 = FS.lookupPath(t2, { parent: true }), l2 = s5.node, !n3 || !l2) throw new FS.ErrnoError(44);
      if (n3.mount !== l2.mount) throw new FS.ErrnoError(75);
      var d3 = FS.lookupNode(n3, o5), u3 = PATH_FS.relative(e, a2);
      if (u3.charAt(0) !== ".") throw new FS.ErrnoError(28);
      if (u3 = PATH_FS.relative(t2, r2), u3.charAt(0) !== ".") throw new FS.ErrnoError(55);
      var g5;
      try {
        g5 = FS.lookupNode(l2, _5);
      } catch {
      }
      if (d3 !== g5) {
        var p5 = FS.isDir(d3.mode), m5 = FS.mayDelete(n3, o5, p5);
        if (m5) throw new FS.ErrnoError(m5);
        if (m5 = g5 ? FS.mayDelete(l2, _5, p5) : FS.mayCreate(l2, _5), m5) throw new FS.ErrnoError(m5);
        if (!n3.node_ops.rename) throw new FS.ErrnoError(63);
        if (FS.isMountpoint(d3) || g5 && FS.isMountpoint(g5)) throw new FS.ErrnoError(10);
        if (l2 !== n3 && (m5 = FS.nodePermissions(n3, "w"), m5)) throw new FS.ErrnoError(m5);
        FS.hashRemoveNode(d3);
        try {
          n3.node_ops.rename(d3, l2, _5), d3.parent = l2;
        } catch (f5) {
          throw f5;
        } finally {
          FS.hashAddNode(d3);
        }
      }
    }, rmdir(e) {
      var t2 = FS.lookupPath(e, { parent: true }), r2 = t2.node, a2 = PATH.basename(e), o5 = FS.lookupNode(r2, a2), _5 = FS.mayDelete(r2, a2, true);
      if (_5) throw new FS.ErrnoError(_5);
      if (!r2.node_ops.rmdir) throw new FS.ErrnoError(63);
      if (FS.isMountpoint(o5)) throw new FS.ErrnoError(10);
      r2.node_ops.rmdir(r2, a2), FS.destroyNode(o5);
    }, readdir(e) {
      var t2 = FS.lookupPath(e, { follow: true }), r2 = t2.node;
      if (!r2.node_ops.readdir) throw new FS.ErrnoError(54);
      return r2.node_ops.readdir(r2);
    }, unlink(e) {
      var t2 = FS.lookupPath(e, { parent: true }), r2 = t2.node;
      if (!r2) throw new FS.ErrnoError(44);
      var a2 = PATH.basename(e), o5 = FS.lookupNode(r2, a2), _5 = FS.mayDelete(r2, a2, false);
      if (_5) throw new FS.ErrnoError(_5);
      if (!r2.node_ops.unlink) throw new FS.ErrnoError(63);
      if (FS.isMountpoint(o5)) throw new FS.ErrnoError(10);
      r2.node_ops.unlink(r2, a2), FS.destroyNode(o5);
    }, readlink(e) {
      var t2 = FS.lookupPath(e), r2 = t2.node;
      if (!r2) throw new FS.ErrnoError(44);
      if (!r2.node_ops.readlink) throw new FS.ErrnoError(28);
      return r2.node_ops.readlink(r2);
    }, stat(e, t2) {
      var r2 = FS.lookupPath(e, { follow: !t2 }), a2 = r2.node;
      if (!a2) throw new FS.ErrnoError(44);
      if (!a2.node_ops.getattr) throw new FS.ErrnoError(63);
      return a2.node_ops.getattr(a2);
    }, lstat(e) {
      return FS.stat(e, true);
    }, chmod(e, t2, r2) {
      var a2;
      if (typeof e == "string") {
        var o5 = FS.lookupPath(e, { follow: !r2 });
        a2 = o5.node;
      } else a2 = e;
      if (!a2.node_ops.setattr) throw new FS.ErrnoError(63);
      a2.node_ops.setattr(a2, { mode: t2 & 4095 | a2.mode & -4096, ctime: Date.now() });
    }, lchmod(e, t2) {
      FS.chmod(e, t2, true);
    }, fchmod(e, t2) {
      var r2 = FS.getStreamChecked(e);
      FS.chmod(r2.node, t2);
    }, chown(e, t2, r2, a2) {
      var o5;
      if (typeof e == "string") {
        var _5 = FS.lookupPath(e, { follow: !a2 });
        o5 = _5.node;
      } else o5 = e;
      if (!o5.node_ops.setattr) throw new FS.ErrnoError(63);
      o5.node_ops.setattr(o5, { timestamp: Date.now() });
    }, lchown(e, t2, r2) {
      FS.chown(e, t2, r2, true);
    }, fchown(e, t2, r2) {
      var a2 = FS.getStreamChecked(e);
      FS.chown(a2.node, t2, r2);
    }, truncate(e, t2) {
      if (t2 < 0) throw new FS.ErrnoError(28);
      var r2;
      if (typeof e == "string") {
        var a2 = FS.lookupPath(e, { follow: true });
        r2 = a2.node;
      } else r2 = e;
      if (!r2.node_ops.setattr) throw new FS.ErrnoError(63);
      if (FS.isDir(r2.mode)) throw new FS.ErrnoError(31);
      if (!FS.isFile(r2.mode)) throw new FS.ErrnoError(28);
      var o5 = FS.nodePermissions(r2, "w");
      if (o5) throw new FS.ErrnoError(o5);
      r2.node_ops.setattr(r2, { size: t2, timestamp: Date.now() });
    }, ftruncate(e, t2) {
      var r2 = FS.getStreamChecked(e);
      if (!(r2.flags & 2097155)) throw new FS.ErrnoError(28);
      FS.truncate(r2.node, t2);
    }, utime(e, t2, r2) {
      var a2 = FS.lookupPath(e, { follow: true }), o5 = a2.node;
      o5.node_ops.setattr(o5, { atime: t2, mtime: r2 });
    }, open(e, t2, r2 = 438) {
      if (e === "") throw new FS.ErrnoError(44);
      t2 = typeof t2 == "string" ? FS_modeStringToFlags(t2) : t2, t2 & 64 ? r2 = r2 & 4095 | 32768 : r2 = 0;
      var a2;
      if (typeof e == "object") a2 = e;
      else {
        var o5 = FS.lookupPath(e, { follow: !(t2 & 131072), noent_okay: true });
        a2 = o5.node, e = o5.path;
      }
      var _5 = false;
      if (t2 & 64) if (a2) {
        if (t2 & 128) throw new FS.ErrnoError(20);
      } else a2 = FS.mknod(e, r2, 0), _5 = true;
      if (!a2) throw new FS.ErrnoError(44);
      if (FS.isChrdev(a2.mode) && (t2 &= -513), t2 & 65536 && !FS.isDir(a2.mode)) throw new FS.ErrnoError(54);
      if (!_5) {
        var s5 = FS.mayOpen(a2, t2);
        if (s5) throw new FS.ErrnoError(s5);
      }
      t2 & 512 && !_5 && FS.truncate(a2, 0), t2 &= -131713;
      var n3 = FS.createStream({ node: a2, path: FS.getPath(a2), flags: t2, seekable: true, position: 0, stream_ops: a2.stream_ops, ungotten: [], error: false });
      return n3.stream_ops.open && n3.stream_ops.open(n3), Module.logReadFiles && !(t2 & 1) && (e in FS.readFiles || (FS.readFiles[e] = 1)), n3;
    }, close(e) {
      if (FS.isClosed(e)) throw new FS.ErrnoError(8);
      e.getdents && (e.getdents = null);
      try {
        e.stream_ops.close && e.stream_ops.close(e);
      } catch (t2) {
        throw t2;
      } finally {
        FS.closeStream(e.fd);
      }
      e.fd = null;
    }, isClosed(e) {
      return e.fd === null;
    }, llseek(e, t2, r2) {
      if (FS.isClosed(e)) throw new FS.ErrnoError(8);
      if (!e.seekable || !e.stream_ops.llseek) throw new FS.ErrnoError(70);
      if (r2 != 0 && r2 != 1 && r2 != 2) throw new FS.ErrnoError(28);
      return e.position = e.stream_ops.llseek(e, t2, r2), e.ungotten = [], e.position;
    }, read(e, t2, r2, a2, o5) {
      if (a2 < 0 || o5 < 0) throw new FS.ErrnoError(28);
      if (FS.isClosed(e)) throw new FS.ErrnoError(8);
      if ((e.flags & 2097155) === 1) throw new FS.ErrnoError(8);
      if (FS.isDir(e.node.mode)) throw new FS.ErrnoError(31);
      if (!e.stream_ops.read) throw new FS.ErrnoError(28);
      var _5 = typeof o5 < "u";
      if (!_5) o5 = e.position;
      else if (!e.seekable) throw new FS.ErrnoError(70);
      var s5 = e.stream_ops.read(e, t2, r2, a2, o5);
      return _5 || (e.position += s5), s5;
    }, write(e, t2, r2, a2, o5, _5) {
      if (a2 < 0 || o5 < 0) throw new FS.ErrnoError(28);
      if (FS.isClosed(e)) throw new FS.ErrnoError(8);
      if (!(e.flags & 2097155)) throw new FS.ErrnoError(8);
      if (FS.isDir(e.node.mode)) throw new FS.ErrnoError(31);
      if (!e.stream_ops.write) throw new FS.ErrnoError(28);
      e.seekable && e.flags & 1024 && FS.llseek(e, 0, 2);
      var s5 = typeof o5 < "u";
      if (!s5) o5 = e.position;
      else if (!e.seekable) throw new FS.ErrnoError(70);
      var n3 = e.stream_ops.write(e, t2, r2, a2, o5, _5);
      return s5 || (e.position += n3), n3;
    }, allocate(e, t2, r2) {
      if (FS.isClosed(e)) throw new FS.ErrnoError(8);
      if (t2 < 0 || r2 <= 0) throw new FS.ErrnoError(28);
      if (!(e.flags & 2097155)) throw new FS.ErrnoError(8);
      if (!FS.isFile(e.node.mode) && !FS.isDir(e.node.mode)) throw new FS.ErrnoError(43);
      if (!e.stream_ops.allocate) throw new FS.ErrnoError(138);
      e.stream_ops.allocate(e, t2, r2);
    }, mmap(e, t2, r2, a2, o5) {
      if (a2 & 2 && !(o5 & 2) && (e.flags & 2097155) !== 2) throw new FS.ErrnoError(2);
      if ((e.flags & 2097155) === 1) throw new FS.ErrnoError(2);
      if (!e.stream_ops.mmap) throw new FS.ErrnoError(43);
      if (!t2) throw new FS.ErrnoError(28);
      return e.stream_ops.mmap(e, t2, r2, a2, o5);
    }, msync(e, t2, r2, a2, o5) {
      return e.stream_ops.msync ? e.stream_ops.msync(e, t2, r2, a2, o5) : 0;
    }, ioctl(e, t2, r2) {
      if (!e.stream_ops.ioctl) throw new FS.ErrnoError(59);
      return e.stream_ops.ioctl(e, t2, r2);
    }, readFile(e, t2 = {}) {
      if (t2.flags = t2.flags || 0, t2.encoding = t2.encoding || "binary", t2.encoding !== "utf8" && t2.encoding !== "binary") throw new Error(`Invalid encoding type "${t2.encoding}"`);
      var r2, a2 = FS.open(e, t2.flags), o5 = FS.stat(e), _5 = o5.size, s5 = new Uint8Array(_5);
      return FS.read(a2, s5, 0, _5, 0), t2.encoding === "utf8" ? r2 = UTF8ArrayToString(s5) : t2.encoding === "binary" && (r2 = s5), FS.close(a2), r2;
    }, writeFile(e, t2, r2 = {}) {
      r2.flags = r2.flags || 577;
      var a2 = FS.open(e, r2.flags, r2.mode);
      if (typeof t2 == "string") {
        var o5 = new Uint8Array(lengthBytesUTF8(t2) + 1), _5 = stringToUTF8Array(t2, o5, 0, o5.length);
        FS.write(a2, o5, 0, _5, void 0, r2.canOwn);
      } else if (ArrayBuffer.isView(t2)) FS.write(a2, t2, 0, t2.byteLength, void 0, r2.canOwn);
      else throw new Error("Unsupported data type");
      FS.close(a2);
    }, cwd: () => FS.currentPath, chdir(e) {
      var t2 = FS.lookupPath(e, { follow: true });
      if (t2.node === null) throw new FS.ErrnoError(44);
      if (!FS.isDir(t2.node.mode)) throw new FS.ErrnoError(54);
      var r2 = FS.nodePermissions(t2.node, "x");
      if (r2) throw new FS.ErrnoError(r2);
      FS.currentPath = t2.path;
    }, createDefaultDirectories() {
      FS.mkdir("/tmp"), FS.mkdir("/home"), FS.mkdir("/home/web_user");
    }, createDefaultDevices() {
      FS.mkdir("/dev"), FS.registerDevice(FS.makedev(1, 3), { read: () => 0, write: (a2, o5, _5, s5, n3) => s5, llseek: () => 0 }), FS.mkdev("/dev/null", FS.makedev(1, 3)), TTY.register(FS.makedev(5, 0), TTY.default_tty_ops), TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops), FS.mkdev("/dev/tty", FS.makedev(5, 0)), FS.mkdev("/dev/tty1", FS.makedev(6, 0));
      var e = new Uint8Array(1024), t2 = 0, r2 = () => (t2 === 0 && (t2 = randomFill(e).byteLength), e[--t2]);
      FS.createDevice("/dev", "random", r2), FS.createDevice("/dev", "urandom", r2), FS.mkdir("/dev/shm"), FS.mkdir("/dev/shm/tmp");
    }, createSpecialDirectories() {
      FS.mkdir("/proc");
      var e = FS.mkdir("/proc/self");
      FS.mkdir("/proc/self/fd"), FS.mount({ mount() {
        var t2 = FS.createNode(e, "fd", 16895, 73);
        return t2.stream_ops = { llseek: MEMFS.stream_ops.llseek }, t2.node_ops = { lookup(r2, a2) {
          var o5 = +a2, _5 = FS.getStreamChecked(o5), s5 = { parent: null, mount: { mountpoint: "fake" }, node_ops: { readlink: () => _5.path }, id: o5 + 1 };
          return s5.parent = s5, s5;
        }, readdir() {
          return Array.from(FS.streams.entries()).filter(([r2, a2]) => a2).map(([r2, a2]) => r2.toString());
        } }, t2;
      } }, {}, "/proc/self/fd");
    }, createStandardStreams(e, t2, r2) {
      e ? FS.createDevice("/dev", "stdin", e) : FS.symlink("/dev/tty", "/dev/stdin"), t2 ? FS.createDevice("/dev", "stdout", null, t2) : FS.symlink("/dev/tty", "/dev/stdout"), r2 ? FS.createDevice("/dev", "stderr", null, r2) : FS.symlink("/dev/tty1", "/dev/stderr");
      var a2 = FS.open("/dev/stdin", 0), o5 = FS.open("/dev/stdout", 1), _5 = FS.open("/dev/stderr", 1);
    }, staticInit() {
      FS.nameTable = new Array(4096), FS.mount(MEMFS, {}, "/"), FS.createDefaultDirectories(), FS.createDefaultDevices(), FS.createSpecialDirectories(), FS.filesystems = { MEMFS, IDBFS, NODEFS, PROXYFS };
    }, init(e, t2, r2) {
      FS.initialized = true, e ?? (e = Module.stdin), t2 ?? (t2 = Module.stdout), r2 ?? (r2 = Module.stderr), FS.createStandardStreams(e, t2, r2);
    }, quit() {
      FS.initialized = false, _fflush(0);
      for (var e = 0; e < FS.streams.length; e++) {
        var t2 = FS.streams[e];
        t2 && FS.close(t2);
      }
    }, findObject(e, t2) {
      var r2 = FS.analyzePath(e, t2);
      return r2.exists ? r2.object : null;
    }, analyzePath(e, t2) {
      try {
        var r2 = FS.lookupPath(e, { follow: !t2 });
        e = r2.path;
      } catch {
      }
      var a2 = { isRoot: false, exists: false, error: 0, name: null, path: null, object: null, parentExists: false, parentPath: null, parentObject: null };
      try {
        var r2 = FS.lookupPath(e, { parent: true });
        a2.parentExists = true, a2.parentPath = r2.path, a2.parentObject = r2.node, a2.name = PATH.basename(e), r2 = FS.lookupPath(e, { follow: !t2 }), a2.exists = true, a2.path = r2.path, a2.object = r2.node, a2.name = r2.node.name, a2.isRoot = r2.path === "/";
      } catch (o5) {
        a2.error = o5.errno;
      }
      return a2;
    }, createPath(e, t2, r2, a2) {
      e = typeof e == "string" ? e : FS.getPath(e);
      for (var o5 = t2.split("/").reverse(); o5.length; ) {
        var _5 = o5.pop();
        if (_5) {
          var s5 = PATH.join2(e, _5);
          try {
            FS.mkdir(s5);
          } catch {
          }
          e = s5;
        }
      }
      return s5;
    }, createFile(e, t2, r2, a2, o5) {
      var _5 = PATH.join2(typeof e == "string" ? e : FS.getPath(e), t2), s5 = FS_getMode(a2, o5);
      return FS.create(_5, s5);
    }, createDataFile(e, t2, r2, a2, o5, _5) {
      var s5 = t2;
      e && (e = typeof e == "string" ? e : FS.getPath(e), s5 = t2 ? PATH.join2(e, t2) : e);
      var n3 = FS_getMode(a2, o5), l2 = FS.create(s5, n3);
      if (r2) {
        if (typeof r2 == "string") {
          for (var d3 = new Array(r2.length), u3 = 0, g5 = r2.length; u3 < g5; ++u3) d3[u3] = r2.charCodeAt(u3);
          r2 = d3;
        }
        FS.chmod(l2, n3 | 146);
        var p5 = FS.open(l2, 577);
        FS.write(p5, r2, 0, r2.length, 0, _5), FS.close(p5), FS.chmod(l2, n3);
      }
    }, createDevice(e, t2, r2, a2) {
      var n3;
      var o5 = PATH.join2(typeof e == "string" ? e : FS.getPath(e), t2), _5 = FS_getMode(!!r2, !!a2);
      (n3 = FS.createDevice).major ?? (n3.major = 64);
      var s5 = FS.makedev(FS.createDevice.major++, 0);
      return FS.registerDevice(s5, { open(l2) {
        l2.seekable = false;
      }, close(l2) {
        a2?.buffer?.length && a2(10);
      }, read(l2, d3, u3, g5, p5) {
        for (var m5 = 0, f5 = 0; f5 < g5; f5++) {
          var c4;
          try {
            c4 = r2();
          } catch {
            throw new FS.ErrnoError(29);
          }
          if (c4 === void 0 && m5 === 0) throw new FS.ErrnoError(6);
          if (c4 == null) break;
          m5++, d3[u3 + f5] = c4;
        }
        return m5 && (l2.node.atime = Date.now()), m5;
      }, write(l2, d3, u3, g5, p5) {
        for (var m5 = 0; m5 < g5; m5++) try {
          a2(d3[u3 + m5]);
        } catch {
          throw new FS.ErrnoError(29);
        }
        return g5 && (l2.node.mtime = l2.node.ctime = Date.now()), m5;
      } }), FS.mkdev(o5, _5, s5);
    }, forceLoadFile(e) {
      if (e.isDevice || e.isFolder || e.link || e.contents) return true;
      if (typeof XMLHttpRequest < "u") throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
      try {
        e.contents = readBinary(e.url), e.usedBytes = e.contents.length;
      } catch {
        throw new FS.ErrnoError(29);
      }
    }, createLazyFile(e, t2, r2, a2, o5) {
      class _5 {
        constructor() {
          P(this, "lengthKnown", false);
          P(this, "chunks", []);
        }
        get(m5) {
          if (!(m5 > this.length - 1 || m5 < 0)) {
            var f5 = m5 % this.chunkSize, c4 = m5 / this.chunkSize | 0;
            return this.getter(c4)[f5];
          }
        }
        setDataGetter(m5) {
          this.getter = m5;
        }
        cacheLength() {
          var m5 = new XMLHttpRequest();
          if (m5.open("HEAD", r2, false), m5.send(null), !(m5.status >= 200 && m5.status < 300 || m5.status === 304)) throw new Error("Couldn't load " + r2 + ". Status: " + m5.status);
          var f5 = Number(m5.getResponseHeader("Content-length")), c4, w4 = (c4 = m5.getResponseHeader("Accept-Ranges")) && c4 === "bytes", x5 = (c4 = m5.getResponseHeader("Content-Encoding")) && c4 === "gzip", y5 = 1024 * 1024;
          w4 || (y5 = f5);
          var h2 = (E3, b4) => {
            if (E3 > b4) throw new Error("invalid range (" + E3 + ", " + b4 + ") or no bytes requested!");
            if (b4 > f5 - 1) throw new Error("only " + f5 + " bytes available! programmer error!");
            var S4 = new XMLHttpRequest();
            if (S4.open("GET", r2, false), f5 !== y5 && S4.setRequestHeader("Range", "bytes=" + E3 + "-" + b4), S4.responseType = "arraybuffer", S4.overrideMimeType && S4.overrideMimeType("text/plain; charset=x-user-defined"), S4.send(null), !(S4.status >= 200 && S4.status < 300 || S4.status === 304)) throw new Error("Couldn't load " + r2 + ". Status: " + S4.status);
            return S4.response !== void 0 ? new Uint8Array(S4.response || []) : intArrayFromString(S4.responseText || "", true);
          }, F4 = this;
          F4.setDataGetter((E3) => {
            var b4 = E3 * y5, S4 = (E3 + 1) * y5 - 1;
            if (S4 = Math.min(S4, f5 - 1), typeof F4.chunks[E3] > "u" && (F4.chunks[E3] = h2(b4, S4)), typeof F4.chunks[E3] > "u") throw new Error("doXHR failed!");
            return F4.chunks[E3];
          }), (x5 || !f5) && (y5 = f5 = 1, f5 = this.getter(0).length, y5 = f5, out("LazyFiles on gzip forces download of the whole file when length is accessed")), this._length = f5, this._chunkSize = y5, this.lengthKnown = true;
        }
        get length() {
          return this.lengthKnown || this.cacheLength(), this._length;
        }
        get chunkSize() {
          return this.lengthKnown || this.cacheLength(), this._chunkSize;
        }
      }
      if (typeof XMLHttpRequest < "u") {
        if (!ENVIRONMENT_IS_WORKER) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
        var s5 = new _5(), n3 = { isDevice: false, contents: s5 };
      } else var n3 = { isDevice: false, url: r2 };
      var l2 = FS.createFile(e, t2, n3, a2, o5);
      n3.contents ? l2.contents = n3.contents : n3.url && (l2.contents = null, l2.url = n3.url), Object.defineProperties(l2, { usedBytes: { get: function() {
        return this.contents.length;
      } } });
      var d3 = {}, u3 = Object.keys(l2.stream_ops);
      u3.forEach((p5) => {
        var m5 = l2.stream_ops[p5];
        d3[p5] = (...f5) => (FS.forceLoadFile(l2), m5(...f5));
      });
      function g5(p5, m5, f5, c4, w4) {
        var x5 = p5.node.contents;
        if (w4 >= x5.length) return 0;
        var y5 = Math.min(x5.length - w4, c4);
        if (x5.slice) for (var h2 = 0; h2 < y5; h2++) m5[f5 + h2] = x5[w4 + h2];
        else for (var h2 = 0; h2 < y5; h2++) m5[f5 + h2] = x5.get(w4 + h2);
        return y5;
      }
      return d3.read = (p5, m5, f5, c4, w4) => (FS.forceLoadFile(l2), g5(p5, m5, f5, c4, w4)), d3.mmap = (p5, m5, f5, c4, w4) => {
        FS.forceLoadFile(l2);
        var x5 = mmapAlloc(m5);
        if (!x5) throw new FS.ErrnoError(48);
        return g5(p5, HEAP8, x5, m5, f5), { ptr: x5, allocated: true };
      }, l2.stream_ops = d3, l2;
    } }, SYSCALLS = { DEFAULT_POLLMASK: 5, calculateAt(e, t2, r2) {
      if (PATH.isAbs(t2)) return t2;
      var a2;
      if (e === -100) a2 = FS.cwd();
      else {
        var o5 = SYSCALLS.getStreamFromFD(e);
        a2 = o5.path;
      }
      if (t2.length == 0) {
        if (!r2) throw new FS.ErrnoError(44);
        return a2;
      }
      return a2 + "/" + t2;
    }, doStat(e, t2, r2) {
      var a2 = e(t2);
      HEAP32[r2 >> 2] = a2.dev, HEAP32[r2 + 4 >> 2] = a2.mode, HEAPU32[r2 + 8 >> 2] = a2.nlink, HEAP32[r2 + 12 >> 2] = a2.uid, HEAP32[r2 + 16 >> 2] = a2.gid, HEAP32[r2 + 20 >> 2] = a2.rdev, HEAP64[r2 + 24 >> 3] = BigInt(a2.size), HEAP32[r2 + 32 >> 2] = 4096, HEAP32[r2 + 36 >> 2] = a2.blocks;
      var o5 = a2.atime.getTime(), _5 = a2.mtime.getTime(), s5 = a2.ctime.getTime();
      return HEAP64[r2 + 40 >> 3] = BigInt(Math.floor(o5 / 1e3)), HEAPU32[r2 + 48 >> 2] = o5 % 1e3 * 1e3 * 1e3, HEAP64[r2 + 56 >> 3] = BigInt(Math.floor(_5 / 1e3)), HEAPU32[r2 + 64 >> 2] = _5 % 1e3 * 1e3 * 1e3, HEAP64[r2 + 72 >> 3] = BigInt(Math.floor(s5 / 1e3)), HEAPU32[r2 + 80 >> 2] = s5 % 1e3 * 1e3 * 1e3, HEAP64[r2 + 88 >> 3] = BigInt(a2.ino), 0;
    }, doMsync(e, t2, r2, a2, o5) {
      if (!FS.isFile(t2.node.mode)) throw new FS.ErrnoError(43);
      if (a2 & 2) return 0;
      var _5 = HEAPU8.slice(e, e + r2);
      FS.msync(t2, _5, o5, r2, a2);
    }, getStreamFromFD(e) {
      var t2 = FS.getStreamChecked(e);
      return t2;
    }, varargs: void 0, getStr(e) {
      var t2 = UTF8ToString(e);
      return t2;
    } }, ___syscall__newselect = function(e, t2, r2, a2, o5) {
      try {
        for (var _5 = 0, s5 = t2 ? HEAP32[t2 >> 2] : 0, n3 = t2 ? HEAP32[t2 + 4 >> 2] : 0, l2 = r2 ? HEAP32[r2 >> 2] : 0, d3 = r2 ? HEAP32[r2 + 4 >> 2] : 0, u3 = a2 ? HEAP32[a2 >> 2] : 0, g5 = a2 ? HEAP32[a2 + 4 >> 2] : 0, p5 = 0, m5 = 0, f5 = 0, c4 = 0, w4 = 0, x5 = 0, y5 = (t2 ? HEAP32[t2 >> 2] : 0) | (r2 ? HEAP32[r2 >> 2] : 0) | (a2 ? HEAP32[a2 >> 2] : 0), h2 = (t2 ? HEAP32[t2 + 4 >> 2] : 0) | (r2 ? HEAP32[r2 + 4 >> 2] : 0) | (a2 ? HEAP32[a2 + 4 >> 2] : 0), F4 = (W5, A3, O4, I2) => W5 < 32 ? A3 & I2 : O4 & I2, E3 = 0; E3 < e; E3++) {
          var b4 = 1 << E3 % 32;
          if (F4(E3, y5, h2, b4)) {
            var S4 = SYSCALLS.getStreamFromFD(E3), z3 = SYSCALLS.DEFAULT_POLLMASK;
            if (S4.stream_ops.poll) {
              var H4 = -1;
              if (o5) {
                var ae2 = t2 ? HEAP32[o5 >> 2] : 0, U3 = t2 ? HEAP32[o5 + 4 >> 2] : 0;
                H4 = (ae2 + U3 / 1e6) * 1e3;
              }
              z3 = S4.stream_ops.poll(S4, H4);
            }
            z3 & 1 && F4(E3, s5, n3, b4) && (E3 < 32 ? p5 = p5 | b4 : m5 = m5 | b4, _5++), z3 & 4 && F4(E3, l2, d3, b4) && (E3 < 32 ? f5 = f5 | b4 : c4 = c4 | b4, _5++), z3 & 2 && F4(E3, u3, g5, b4) && (E3 < 32 ? w4 = w4 | b4 : x5 = x5 | b4, _5++);
          }
        }
        return t2 && (HEAP32[t2 >> 2] = p5, HEAP32[t2 + 4 >> 2] = m5), r2 && (HEAP32[r2 >> 2] = f5, HEAP32[r2 + 4 >> 2] = c4), a2 && (HEAP32[a2 >> 2] = w4, HEAP32[a2 + 4 >> 2] = x5), _5;
      } catch (W5) {
        if (typeof FS > "u" || W5.name !== "ErrnoError") throw W5;
        return -W5.errno;
      }
    };
    ___syscall__newselect.sig = "iipppp";
    var SOCKFS = { websocketArgs: {}, callbacks: {}, on(e, t2) {
      SOCKFS.callbacks[e] = t2;
    }, emit(e, t2) {
      SOCKFS.callbacks[e]?.(t2);
    }, mount(e) {
      return SOCKFS.websocketArgs = Module.websocket || {}, (Module.websocket ?? (Module.websocket = {})).on = SOCKFS.on, FS.createNode(null, "/", 16895, 0);
    }, createSocket(e, t2, r2) {
      t2 &= -526337;
      var a2 = t2 == 1;
      if (a2 && r2 && r2 != 6) throw new FS.ErrnoError(66);
      var o5 = { family: e, type: t2, protocol: r2, server: null, error: null, peers: {}, pending: [], recv_queue: [], sock_ops: SOCKFS.websocket_sock_ops }, _5 = SOCKFS.nextname(), s5 = FS.createNode(SOCKFS.root, _5, 49152, 0);
      s5.sock = o5;
      var n3 = FS.createStream({ path: _5, node: s5, flags: 2, seekable: false, stream_ops: SOCKFS.stream_ops });
      return o5.stream = n3, o5;
    }, getSocket(e) {
      var t2 = FS.getStream(e);
      return !t2 || !FS.isSocket(t2.node.mode) ? null : t2.node.sock;
    }, stream_ops: { poll(e) {
      var t2 = e.node.sock;
      return t2.sock_ops.poll(t2);
    }, ioctl(e, t2, r2) {
      var a2 = e.node.sock;
      return a2.sock_ops.ioctl(a2, t2, r2);
    }, read(e, t2, r2, a2, o5) {
      var _5 = e.node.sock, s5 = _5.sock_ops.recvmsg(_5, a2);
      return s5 ? (t2.set(s5.buffer, r2), s5.buffer.length) : 0;
    }, write(e, t2, r2, a2, o5) {
      var _5 = e.node.sock;
      return _5.sock_ops.sendmsg(_5, t2, r2, a2);
    }, close(e) {
      var t2 = e.node.sock;
      t2.sock_ops.close(t2);
    } }, nextname() {
      return SOCKFS.nextname.current || (SOCKFS.nextname.current = 0), `socket[${SOCKFS.nextname.current++}]`;
    }, websocket_sock_ops: { createPeer(e, t2, r2) {
      var a2;
      if (typeof t2 == "object" && (a2 = t2, t2 = null, r2 = null), a2) if (a2._socket) t2 = a2._socket.remoteAddress, r2 = a2._socket.remotePort;
      else {
        var o5 = /ws[s]?:\/\/([^:]+):(\d+)/.exec(a2.url);
        if (!o5) throw new Error("WebSocket URL must be in the format ws(s)://address:port");
        t2 = o5[1], r2 = parseInt(o5[2], 10);
      }
      else try {
        var _5 = "ws:#".replace("#", "//"), s5 = "binary", n3 = void 0;
        if (SOCKFS.websocketArgs.url && (_5 = SOCKFS.websocketArgs.url), SOCKFS.websocketArgs.subprotocol ? s5 = SOCKFS.websocketArgs.subprotocol : SOCKFS.websocketArgs.subprotocol === null && (s5 = "null"), _5 === "ws://" || _5 === "wss://") {
          var l2 = t2.split("/");
          _5 = _5 + l2[0] + ":" + r2 + "/" + l2.slice(1).join("/");
        }
        s5 !== "null" && (s5 = s5.replace(/^ +| +$/g, "").split(/ *, */), n3 = s5);
        var d3;
        ENVIRONMENT_IS_NODE ? d3 = require("ws") : d3 = WebSocket, a2 = new d3(_5, n3), a2.binaryType = "arraybuffer";
      } catch {
        throw new FS.ErrnoError(23);
      }
      var u3 = { addr: t2, port: r2, socket: a2, msg_send_queue: [] };
      return SOCKFS.websocket_sock_ops.addPeer(e, u3), SOCKFS.websocket_sock_ops.handlePeerEvents(e, u3), e.type === 2 && typeof e.sport < "u" && u3.msg_send_queue.push(new Uint8Array([255, 255, 255, 255, 112, 111, 114, 116, (e.sport & 65280) >> 8, e.sport & 255])), u3;
    }, getPeer(e, t2, r2) {
      return e.peers[t2 + ":" + r2];
    }, addPeer(e, t2) {
      e.peers[t2.addr + ":" + t2.port] = t2;
    }, removePeer(e, t2) {
      delete e.peers[t2.addr + ":" + t2.port];
    }, handlePeerEvents(e, t2) {
      var r2 = true, a2 = function() {
        e.connecting = false, SOCKFS.emit("open", e.stream.fd);
        try {
          for (var _5 = t2.msg_send_queue.shift(); _5; ) t2.socket.send(_5), _5 = t2.msg_send_queue.shift();
        } catch {
          t2.socket.close();
        }
      };
      function o5(_5) {
        if (typeof _5 == "string") {
          var s5 = new TextEncoder();
          _5 = s5.encode(_5);
        } else {
          if (assert(_5.byteLength !== void 0), _5.byteLength == 0) return;
          _5 = new Uint8Array(_5);
        }
        var n3 = r2;
        if (r2 = false, n3 && _5.length === 10 && _5[0] === 255 && _5[1] === 255 && _5[2] === 255 && _5[3] === 255 && _5[4] === 112 && _5[5] === 111 && _5[6] === 114 && _5[7] === 116) {
          var l2 = _5[8] << 8 | _5[9];
          SOCKFS.websocket_sock_ops.removePeer(e, t2), t2.port = l2, SOCKFS.websocket_sock_ops.addPeer(e, t2);
          return;
        }
        e.recv_queue.push({ addr: t2.addr, port: t2.port, data: _5 }), SOCKFS.emit("message", e.stream.fd);
      }
      ENVIRONMENT_IS_NODE ? (t2.socket.on("open", a2), t2.socket.on("message", function(_5, s5) {
        s5 && o5(new Uint8Array(_5).buffer);
      }), t2.socket.on("close", function() {
        SOCKFS.emit("close", e.stream.fd);
      }), t2.socket.on("error", function(_5) {
        e.error = 14, SOCKFS.emit("error", [e.stream.fd, e.error, "ECONNREFUSED: Connection refused"]);
      })) : (t2.socket.onopen = a2, t2.socket.onclose = function() {
        SOCKFS.emit("close", e.stream.fd);
      }, t2.socket.onmessage = function(s5) {
        o5(s5.data);
      }, t2.socket.onerror = function(_5) {
        e.error = 14, SOCKFS.emit("error", [e.stream.fd, e.error, "ECONNREFUSED: Connection refused"]);
      });
    }, poll(e) {
      if (e.type === 1 && e.server) return e.pending.length ? 65 : 0;
      var t2 = 0, r2 = e.type === 1 ? SOCKFS.websocket_sock_ops.getPeer(e, e.daddr, e.dport) : null;
      return (e.recv_queue.length || !r2 || r2 && r2.socket.readyState === r2.socket.CLOSING || r2 && r2.socket.readyState === r2.socket.CLOSED) && (t2 |= 65), (!r2 || r2 && r2.socket.readyState === r2.socket.OPEN) && (t2 |= 4), (r2 && r2.socket.readyState === r2.socket.CLOSING || r2 && r2.socket.readyState === r2.socket.CLOSED) && (e.connecting ? t2 |= 4 : t2 |= 16), t2;
    }, ioctl(e, t2, r2) {
      switch (t2) {
        case 21531:
          var a2 = 0;
          return e.recv_queue.length && (a2 = e.recv_queue[0].data.length), HEAP32[r2 >> 2] = a2, 0;
        default:
          return 28;
      }
    }, close(e) {
      if (e.server) {
        try {
          e.server.close();
        } catch {
        }
        e.server = null;
      }
      for (var t2 = Object.keys(e.peers), r2 = 0; r2 < t2.length; r2++) {
        var a2 = e.peers[t2[r2]];
        try {
          a2.socket.close();
        } catch {
        }
        SOCKFS.websocket_sock_ops.removePeer(e, a2);
      }
      return 0;
    }, bind(e, t2, r2) {
      if (typeof e.saddr < "u" || typeof e.sport < "u") throw new FS.ErrnoError(28);
      if (e.saddr = t2, e.sport = r2, e.type === 2) {
        e.server && (e.server.close(), e.server = null);
        try {
          e.sock_ops.listen(e, 0);
        } catch (a2) {
          if (a2.name !== "ErrnoError" || a2.errno !== 138) throw a2;
        }
      }
    }, connect(e, t2, r2) {
      if (e.server) throw new FS.ErrnoError(138);
      if (typeof e.daddr < "u" && typeof e.dport < "u") {
        var a2 = SOCKFS.websocket_sock_ops.getPeer(e, e.daddr, e.dport);
        if (a2) throw a2.socket.readyState === a2.socket.CONNECTING ? new FS.ErrnoError(7) : new FS.ErrnoError(30);
      }
      var o5 = SOCKFS.websocket_sock_ops.createPeer(e, t2, r2);
      e.daddr = o5.addr, e.dport = o5.port, e.connecting = true;
    }, listen(e, t2) {
      if (!ENVIRONMENT_IS_NODE) throw new FS.ErrnoError(138);
      if (e.server) throw new FS.ErrnoError(28);
      var r2 = require("ws").Server, a2 = e.saddr;
      e.server = new r2({ host: a2, port: e.sport }), SOCKFS.emit("listen", e.stream.fd), e.server.on("connection", function(o5) {
        if (e.type === 1) {
          var _5 = SOCKFS.createSocket(e.family, e.type, e.protocol), s5 = SOCKFS.websocket_sock_ops.createPeer(_5, o5);
          _5.daddr = s5.addr, _5.dport = s5.port, e.pending.push(_5), SOCKFS.emit("connection", _5.stream.fd);
        } else SOCKFS.websocket_sock_ops.createPeer(e, o5), SOCKFS.emit("connection", e.stream.fd);
      }), e.server.on("close", function() {
        SOCKFS.emit("close", e.stream.fd), e.server = null;
      }), e.server.on("error", function(o5) {
        e.error = 23, SOCKFS.emit("error", [e.stream.fd, e.error, "EHOSTUNREACH: Host is unreachable"]);
      });
    }, accept(e) {
      if (!e.server || !e.pending.length) throw new FS.ErrnoError(28);
      var t2 = e.pending.shift();
      return t2.stream.flags = e.stream.flags, t2;
    }, getname(e, t2) {
      var r2, a2;
      if (t2) {
        if (e.daddr === void 0 || e.dport === void 0) throw new FS.ErrnoError(53);
        r2 = e.daddr, a2 = e.dport;
      } else r2 = e.saddr || 0, a2 = e.sport || 0;
      return { addr: r2, port: a2 };
    }, sendmsg(e, t2, r2, a2, o5, _5) {
      if (e.type === 2) {
        if ((o5 === void 0 || _5 === void 0) && (o5 = e.daddr, _5 = e.dport), o5 === void 0 || _5 === void 0) throw new FS.ErrnoError(17);
      } else o5 = e.daddr, _5 = e.dport;
      var s5 = SOCKFS.websocket_sock_ops.getPeer(e, o5, _5);
      if (e.type === 1 && (!s5 || s5.socket.readyState === s5.socket.CLOSING || s5.socket.readyState === s5.socket.CLOSED)) throw new FS.ErrnoError(53);
      ArrayBuffer.isView(t2) && (r2 += t2.byteOffset, t2 = t2.buffer);
      var n3 = t2.slice(r2, r2 + a2);
      if (!s5 || s5.socket.readyState !== s5.socket.OPEN) return e.type === 2 && (!s5 || s5.socket.readyState === s5.socket.CLOSING || s5.socket.readyState === s5.socket.CLOSED) && (s5 = SOCKFS.websocket_sock_ops.createPeer(e, o5, _5)), s5.msg_send_queue.push(n3), a2;
      try {
        return s5.socket.send(n3), a2;
      } catch {
        throw new FS.ErrnoError(28);
      }
    }, recvmsg(e, t2) {
      if (e.type === 1 && e.server) throw new FS.ErrnoError(53);
      var r2 = e.recv_queue.shift();
      if (!r2) {
        if (e.type === 1) {
          var a2 = SOCKFS.websocket_sock_ops.getPeer(e, e.daddr, e.dport);
          if (!a2) throw new FS.ErrnoError(53);
          if (a2.socket.readyState === a2.socket.CLOSING || a2.socket.readyState === a2.socket.CLOSED) return null;
          throw new FS.ErrnoError(6);
        }
        throw new FS.ErrnoError(6);
      }
      var o5 = r2.data.byteLength || r2.data.length, _5 = r2.data.byteOffset || 0, s5 = r2.data.buffer || r2.data, n3 = Math.min(t2, o5), l2 = { buffer: new Uint8Array(s5, _5, n3), addr: r2.addr, port: r2.port };
      if (e.type === 1 && n3 < o5) {
        var d3 = o5 - n3;
        r2.data = new Uint8Array(s5, _5 + n3, d3), e.recv_queue.unshift(r2);
      }
      return l2;
    } } }, getSocketFromFD = (e) => {
      var t2 = SOCKFS.getSocket(e);
      if (!t2) throw new FS.ErrnoError(8);
      return t2;
    }, inetPton4 = (e) => {
      for (var t2 = e.split("."), r2 = 0; r2 < 4; r2++) {
        var a2 = Number(t2[r2]);
        if (isNaN(a2)) return null;
        t2[r2] = a2;
      }
      return (t2[0] | t2[1] << 8 | t2[2] << 16 | t2[3] << 24) >>> 0;
    }, jstoi_q = (e) => parseInt(e), inetPton6 = (e) => {
      var t2, r2, a2, o5, _5 = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i, s5 = [];
      if (!_5.test(e)) return null;
      if (e === "::") return [0, 0, 0, 0, 0, 0, 0, 0];
      for (e.startsWith("::") ? e = e.replace("::", "Z:") : e = e.replace("::", ":Z:"), e.indexOf(".") > 0 ? (e = e.replace(new RegExp("[.]", "g"), ":"), t2 = e.split(":"), t2[t2.length - 4] = jstoi_q(t2[t2.length - 4]) + jstoi_q(t2[t2.length - 3]) * 256, t2[t2.length - 3] = jstoi_q(t2[t2.length - 2]) + jstoi_q(t2[t2.length - 1]) * 256, t2 = t2.slice(0, t2.length - 2)) : t2 = e.split(":"), a2 = 0, o5 = 0, r2 = 0; r2 < t2.length; r2++) if (typeof t2[r2] == "string") if (t2[r2] === "Z") {
        for (o5 = 0; o5 < 8 - t2.length + 1; o5++) s5[r2 + o5] = 0;
        a2 = o5 - 1;
      } else s5[r2 + a2] = _htons(parseInt(t2[r2], 16));
      else s5[r2 + a2] = t2[r2];
      return [s5[1] << 16 | s5[0], s5[3] << 16 | s5[2], s5[5] << 16 | s5[4], s5[7] << 16 | s5[6]];
    }, writeSockaddr = (e, t2, r2, a2, o5) => {
      switch (t2) {
        case 2:
          r2 = inetPton4(r2), zeroMemory(e, 16), o5 && (HEAP32[o5 >> 2] = 16), HEAP16[e >> 1] = t2, HEAP32[e + 4 >> 2] = r2, HEAP16[e + 2 >> 1] = _htons(a2);
          break;
        case 10:
          r2 = inetPton6(r2), zeroMemory(e, 28), o5 && (HEAP32[o5 >> 2] = 28), HEAP32[e >> 2] = t2, HEAP32[e + 8 >> 2] = r2[0], HEAP32[e + 12 >> 2] = r2[1], HEAP32[e + 16 >> 2] = r2[2], HEAP32[e + 20 >> 2] = r2[3], HEAP16[e + 2 >> 1] = _htons(a2);
          break;
        default:
          return 5;
      }
      return 0;
    }, DNS = { address_map: { id: 1, addrs: {}, names: {} }, lookup_name(e) {
      var t2 = inetPton4(e);
      if (t2 !== null || (t2 = inetPton6(e), t2 !== null)) return e;
      var r2;
      if (DNS.address_map.addrs[e]) r2 = DNS.address_map.addrs[e];
      else {
        var a2 = DNS.address_map.id++;
        assert(a2 < 65535, "exceeded max address mappings of 65535"), r2 = "172.29." + (a2 & 255) + "." + (a2 & 65280), DNS.address_map.names[r2] = e, DNS.address_map.addrs[e] = r2;
      }
      return r2;
    }, lookup_addr(e) {
      return DNS.address_map.names[e] ? DNS.address_map.names[e] : null;
    } };
    function ___syscall_accept4(e, t2, r2, a2, o5, _5) {
      try {
        var s5 = getSocketFromFD(e), n3 = s5.sock_ops.accept(s5);
        if (t2) var l2 = writeSockaddr(t2, n3.family, DNS.lookup_name(n3.daddr), n3.dport, r2);
        return n3.stream.fd;
      } catch (d3) {
        if (typeof FS > "u" || d3.name !== "ErrnoError") throw d3;
        return -d3.errno;
      }
    }
    ___syscall_accept4.sig = "iippiii";
    var inetNtop4 = (e) => (e & 255) + "." + (e >> 8 & 255) + "." + (e >> 16 & 255) + "." + (e >> 24 & 255), inetNtop6 = (e) => {
      var t2 = "", r2 = 0, a2 = 0, o5 = 0, _5 = 0, s5 = 0, n3 = 0, l2 = [e[0] & 65535, e[0] >> 16, e[1] & 65535, e[1] >> 16, e[2] & 65535, e[2] >> 16, e[3] & 65535, e[3] >> 16], d3 = true, u3 = "";
      for (n3 = 0; n3 < 5; n3++) if (l2[n3] !== 0) {
        d3 = false;
        break;
      }
      if (d3) {
        if (u3 = inetNtop4(l2[6] | l2[7] << 16), l2[5] === -1) return t2 = "::ffff:", t2 += u3, t2;
        if (l2[5] === 0) return t2 = "::", u3 === "0.0.0.0" && (u3 = ""), u3 === "0.0.0.1" && (u3 = "1"), t2 += u3, t2;
      }
      for (r2 = 0; r2 < 8; r2++) l2[r2] === 0 && (r2 - o5 > 1 && (s5 = 0), o5 = r2, s5++), s5 > a2 && (a2 = s5, _5 = r2 - a2 + 1);
      for (r2 = 0; r2 < 8; r2++) {
        if (a2 > 1 && l2[r2] === 0 && r2 >= _5 && r2 < _5 + a2) {
          r2 === _5 && (t2 += ":", _5 === 0 && (t2 += ":"));
          continue;
        }
        t2 += Number(_ntohs(l2[r2] & 65535)).toString(16), t2 += r2 < 7 ? ":" : "";
      }
      return t2;
    }, readSockaddr = (e, t2) => {
      var r2 = HEAP16[e >> 1], a2 = _ntohs(HEAPU16[e + 2 >> 1]), o5;
      switch (r2) {
        case 2:
          if (t2 !== 16) return { errno: 28 };
          o5 = HEAP32[e + 4 >> 2], o5 = inetNtop4(o5);
          break;
        case 10:
          if (t2 !== 28) return { errno: 28 };
          o5 = [HEAP32[e + 8 >> 2], HEAP32[e + 12 >> 2], HEAP32[e + 16 >> 2], HEAP32[e + 20 >> 2]], o5 = inetNtop6(o5);
          break;
        default:
          return { errno: 5 };
      }
      return { family: r2, addr: o5, port: a2 };
    }, getSocketAddress = (e, t2) => {
      var r2 = readSockaddr(e, t2);
      if (r2.errno) throw new FS.ErrnoError(r2.errno);
      return r2.addr = DNS.lookup_addr(r2.addr) || r2.addr, r2;
    };
    function ___syscall_bind(e, t2, r2, a2, o5, _5) {
      try {
        var s5 = getSocketFromFD(e), n3 = getSocketAddress(t2, r2);
        return s5.sock_ops.bind(s5, n3.addr, n3.port), 0;
      } catch (l2) {
        if (typeof FS > "u" || l2.name !== "ErrnoError") throw l2;
        return -l2.errno;
      }
    }
    ___syscall_bind.sig = "iippiii";
    function ___syscall_chdir(e) {
      try {
        return e = SYSCALLS.getStr(e), FS.chdir(e), 0;
      } catch (t2) {
        if (typeof FS > "u" || t2.name !== "ErrnoError") throw t2;
        return -t2.errno;
      }
    }
    ___syscall_chdir.sig = "ip";
    function ___syscall_chmod(e, t2) {
      try {
        return e = SYSCALLS.getStr(e), FS.chmod(e, t2), 0;
      } catch (r2) {
        if (typeof FS > "u" || r2.name !== "ErrnoError") throw r2;
        return -r2.errno;
      }
    }
    ___syscall_chmod.sig = "ipi";
    function ___syscall_connect(e, t2, r2, a2, o5, _5) {
      try {
        var s5 = getSocketFromFD(e), n3 = getSocketAddress(t2, r2);
        return s5.sock_ops.connect(s5, n3.addr, n3.port), 0;
      } catch (l2) {
        if (typeof FS > "u" || l2.name !== "ErrnoError") throw l2;
        return -l2.errno;
      }
    }
    ___syscall_connect.sig = "iippiii";
    function ___syscall_dup(e) {
      try {
        var t2 = SYSCALLS.getStreamFromFD(e);
        return FS.dupStream(t2).fd;
      } catch (r2) {
        if (typeof FS > "u" || r2.name !== "ErrnoError") throw r2;
        return -r2.errno;
      }
    }
    ___syscall_dup.sig = "ii";
    function ___syscall_dup3(e, t2, r2) {
      try {
        var a2 = SYSCALLS.getStreamFromFD(e);
        if (a2.fd === t2) return -28;
        if (t2 < 0 || t2 >= FS.MAX_OPEN_FDS) return -8;
        var o5 = FS.getStream(t2);
        return o5 && FS.close(o5), FS.dupStream(a2, t2).fd;
      } catch (_5) {
        if (typeof FS > "u" || _5.name !== "ErrnoError") throw _5;
        return -_5.errno;
      }
    }
    ___syscall_dup3.sig = "iiii";
    function ___syscall_faccessat(e, t2, r2, a2) {
      try {
        if (t2 = SYSCALLS.getStr(t2), t2 = SYSCALLS.calculateAt(e, t2), r2 & -8) return -28;
        var o5 = FS.lookupPath(t2, { follow: true }), _5 = o5.node;
        if (!_5) return -44;
        var s5 = "";
        return r2 & 4 && (s5 += "r"), r2 & 2 && (s5 += "w"), r2 & 1 && (s5 += "x"), s5 && FS.nodePermissions(_5, s5) ? -2 : 0;
      } catch (n3) {
        if (typeof FS > "u" || n3.name !== "ErrnoError") throw n3;
        return -n3.errno;
      }
    }
    ___syscall_faccessat.sig = "iipii";
    var ___syscall_fadvise64 = (e, t2, r2, a2) => 0;
    ___syscall_fadvise64.sig = "iijji";
    var INT53_MAX = 9007199254740992, INT53_MIN = -9007199254740992, bigintToI53Checked = (e) => e < INT53_MIN || e > INT53_MAX ? NaN : Number(e);
    function ___syscall_fallocate(e, t2, r2, a2) {
      r2 = bigintToI53Checked(r2), a2 = bigintToI53Checked(a2);
      try {
        if (isNaN(r2)) return 61;
        var o5 = SYSCALLS.getStreamFromFD(e);
        return FS.allocate(o5, r2, a2), 0;
      } catch (_5) {
        if (typeof FS > "u" || _5.name !== "ErrnoError") throw _5;
        return -_5.errno;
      }
    }
    ___syscall_fallocate.sig = "iiijj";
    function ___syscall_fchmod(e, t2) {
      try {
        return FS.fchmod(e, t2), 0;
      } catch (r2) {
        if (typeof FS > "u" || r2.name !== "ErrnoError") throw r2;
        return -r2.errno;
      }
    }
    ___syscall_fchmod.sig = "iii";
    function ___syscall_fchmodat2(e, t2, r2, a2) {
      try {
        var o5 = a2 & 256;
        return t2 = SYSCALLS.getStr(t2), t2 = SYSCALLS.calculateAt(e, t2), FS.chmod(t2, r2, o5), 0;
      } catch (_5) {
        if (typeof FS > "u" || _5.name !== "ErrnoError") throw _5;
        return -_5.errno;
      }
    }
    ___syscall_fchmodat2.sig = "iipii";
    function ___syscall_fchown32(e, t2, r2) {
      try {
        return FS.fchown(e, t2, r2), 0;
      } catch (a2) {
        if (typeof FS > "u" || a2.name !== "ErrnoError") throw a2;
        return -a2.errno;
      }
    }
    ___syscall_fchown32.sig = "iiii";
    function ___syscall_fchownat(e, t2, r2, a2, o5) {
      try {
        t2 = SYSCALLS.getStr(t2);
        var _5 = o5 & 256;
        return o5 = o5 & -257, t2 = SYSCALLS.calculateAt(e, t2), (_5 ? FS.lchown : FS.chown)(t2, r2, a2), 0;
      } catch (s5) {
        if (typeof FS > "u" || s5.name !== "ErrnoError") throw s5;
        return -s5.errno;
      }
    }
    ___syscall_fchownat.sig = "iipiii";
    var syscallGetVarargI = () => {
      var e = HEAP32[+SYSCALLS.varargs >> 2];
      return SYSCALLS.varargs += 4, e;
    }, syscallGetVarargP = syscallGetVarargI;
    function ___syscall_fcntl64(e, t2, r2) {
      SYSCALLS.varargs = r2;
      try {
        var a2 = SYSCALLS.getStreamFromFD(e);
        switch (t2) {
          case 0: {
            var o5 = syscallGetVarargI();
            if (o5 < 0) return -28;
            for (; FS.streams[o5]; ) o5++;
            var _5;
            return _5 = FS.dupStream(a2, o5), _5.fd;
          }
          case 1:
          case 2:
            return 0;
          case 3:
            return a2.flags;
          case 4: {
            var o5 = syscallGetVarargI();
            return a2.flags |= o5, 0;
          }
          case 12: {
            var o5 = syscallGetVarargP(), s5 = 0;
            return HEAP16[o5 + s5 >> 1] = 2, 0;
          }
          case 13:
          case 14:
            return 0;
        }
        return -28;
      } catch (n3) {
        if (typeof FS > "u" || n3.name !== "ErrnoError") throw n3;
        return -n3.errno;
      }
    }
    ___syscall_fcntl64.sig = "iiip";
    function ___syscall_fdatasync(e) {
      try {
        var t2 = SYSCALLS.getStreamFromFD(e);
        return 0;
      } catch (r2) {
        if (typeof FS > "u" || r2.name !== "ErrnoError") throw r2;
        return -r2.errno;
      }
    }
    ___syscall_fdatasync.sig = "ii";
    function ___syscall_fstat64(e, t2) {
      try {
        var r2 = SYSCALLS.getStreamFromFD(e);
        return SYSCALLS.doStat(FS.stat, r2.path, t2);
      } catch (a2) {
        if (typeof FS > "u" || a2.name !== "ErrnoError") throw a2;
        return -a2.errno;
      }
    }
    ___syscall_fstat64.sig = "iip";
    function ___syscall_ftruncate64(e, t2) {
      t2 = bigintToI53Checked(t2);
      try {
        return isNaN(t2) ? 61 : (FS.ftruncate(e, t2), 0);
      } catch (r2) {
        if (typeof FS > "u" || r2.name !== "ErrnoError") throw r2;
        return -r2.errno;
      }
    }
    ___syscall_ftruncate64.sig = "iij";
    var stringToUTF8 = (e, t2, r2) => stringToUTF8Array(e, HEAPU8, t2, r2);
    function ___syscall_getcwd(e, t2) {
      try {
        if (t2 === 0) return -28;
        var r2 = FS.cwd(), a2 = lengthBytesUTF8(r2) + 1;
        return t2 < a2 ? -68 : (stringToUTF8(r2, e, t2), a2);
      } catch (o5) {
        if (typeof FS > "u" || o5.name !== "ErrnoError") throw o5;
        return -o5.errno;
      }
    }
    ___syscall_getcwd.sig = "ipp";
    function ___syscall_getdents64(e, t2, r2) {
      try {
        var a2 = SYSCALLS.getStreamFromFD(e);
        a2.getdents || (a2.getdents = FS.readdir(a2.path));
        for (var o5 = 280, _5 = 0, s5 = FS.llseek(a2, 0, 1), n3 = Math.floor(s5 / o5), l2 = Math.min(a2.getdents.length, n3 + Math.floor(r2 / o5)), d3 = n3; d3 < l2; d3++) {
          var u3, g5, p5 = a2.getdents[d3];
          if (p5 === ".") u3 = a2.node.id, g5 = 4;
          else if (p5 === "..") {
            var m5 = FS.lookupPath(a2.path, { parent: true });
            u3 = m5.node.id, g5 = 4;
          } else {
            var f5;
            try {
              f5 = FS.lookupNode(a2.node, p5);
            } catch (c4) {
              if (c4?.errno === 28) continue;
              throw c4;
            }
            u3 = f5.id, g5 = FS.isChrdev(f5.mode) ? 2 : FS.isDir(f5.mode) ? 4 : FS.isLink(f5.mode) ? 10 : 8;
          }
          HEAP64[t2 + _5 >> 3] = BigInt(u3), HEAP64[t2 + _5 + 8 >> 3] = BigInt((d3 + 1) * o5), HEAP16[t2 + _5 + 16 >> 1] = 280, HEAP8[t2 + _5 + 18] = g5, stringToUTF8(p5, t2 + _5 + 19, 256), _5 += o5;
        }
        return FS.llseek(a2, d3 * o5, 0), _5;
      } catch (c4) {
        if (typeof FS > "u" || c4.name !== "ErrnoError") throw c4;
        return -c4.errno;
      }
    }
    ___syscall_getdents64.sig = "iipp";
    function ___syscall_ioctl(e, t2, r2) {
      SYSCALLS.varargs = r2;
      try {
        var a2 = SYSCALLS.getStreamFromFD(e);
        switch (t2) {
          case 21509:
            return a2.tty ? 0 : -59;
          case 21505: {
            if (!a2.tty) return -59;
            if (a2.tty.ops.ioctl_tcgets) {
              var o5 = a2.tty.ops.ioctl_tcgets(a2), _5 = syscallGetVarargP();
              HEAP32[_5 >> 2] = o5.c_iflag || 0, HEAP32[_5 + 4 >> 2] = o5.c_oflag || 0, HEAP32[_5 + 8 >> 2] = o5.c_cflag || 0, HEAP32[_5 + 12 >> 2] = o5.c_lflag || 0;
              for (var s5 = 0; s5 < 32; s5++) HEAP8[_5 + s5 + 17] = o5.c_cc[s5] || 0;
              return 0;
            }
            return 0;
          }
          case 21510:
          case 21511:
          case 21512:
            return a2.tty ? 0 : -59;
          case 21506:
          case 21507:
          case 21508: {
            if (!a2.tty) return -59;
            if (a2.tty.ops.ioctl_tcsets) {
              for (var _5 = syscallGetVarargP(), n3 = HEAP32[_5 >> 2], l2 = HEAP32[_5 + 4 >> 2], d3 = HEAP32[_5 + 8 >> 2], u3 = HEAP32[_5 + 12 >> 2], g5 = [], s5 = 0; s5 < 32; s5++) g5.push(HEAP8[_5 + s5 + 17]);
              return a2.tty.ops.ioctl_tcsets(a2.tty, t2, { c_iflag: n3, c_oflag: l2, c_cflag: d3, c_lflag: u3, c_cc: g5 });
            }
            return 0;
          }
          case 21519: {
            if (!a2.tty) return -59;
            var _5 = syscallGetVarargP();
            return HEAP32[_5 >> 2] = 0, 0;
          }
          case 21520:
            return a2.tty ? -28 : -59;
          case 21531: {
            var _5 = syscallGetVarargP();
            return FS.ioctl(a2, t2, _5);
          }
          case 21523: {
            if (!a2.tty) return -59;
            if (a2.tty.ops.ioctl_tiocgwinsz) {
              var p5 = a2.tty.ops.ioctl_tiocgwinsz(a2.tty), _5 = syscallGetVarargP();
              HEAP16[_5 >> 1] = p5[0], HEAP16[_5 + 2 >> 1] = p5[1];
            }
            return 0;
          }
          case 21524:
            return a2.tty ? 0 : -59;
          case 21515:
            return a2.tty ? 0 : -59;
          default:
            return -28;
        }
      } catch (m5) {
        if (typeof FS > "u" || m5.name !== "ErrnoError") throw m5;
        return -m5.errno;
      }
    }
    ___syscall_ioctl.sig = "iiip";
    function ___syscall_listen(e, t2) {
      try {
        var r2 = getSocketFromFD(e);
        return r2.sock_ops.listen(r2, t2), 0;
      } catch (a2) {
        if (typeof FS > "u" || a2.name !== "ErrnoError") throw a2;
        return -a2.errno;
      }
    }
    ___syscall_listen.sig = "iiiiiii";
    function ___syscall_lstat64(e, t2) {
      try {
        return e = SYSCALLS.getStr(e), SYSCALLS.doStat(FS.lstat, e, t2);
      } catch (r2) {
        if (typeof FS > "u" || r2.name !== "ErrnoError") throw r2;
        return -r2.errno;
      }
    }
    ___syscall_lstat64.sig = "ipp";
    function ___syscall_mkdirat(e, t2, r2) {
      try {
        return t2 = SYSCALLS.getStr(t2), t2 = SYSCALLS.calculateAt(e, t2), FS.mkdir(t2, r2, 0), 0;
      } catch (a2) {
        if (typeof FS > "u" || a2.name !== "ErrnoError") throw a2;
        return -a2.errno;
      }
    }
    ___syscall_mkdirat.sig = "iipi";
    function ___syscall_newfstatat(e, t2, r2, a2) {
      try {
        t2 = SYSCALLS.getStr(t2);
        var o5 = a2 & 256, _5 = a2 & 4096;
        return a2 = a2 & -6401, t2 = SYSCALLS.calculateAt(e, t2, _5), SYSCALLS.doStat(o5 ? FS.lstat : FS.stat, t2, r2);
      } catch (s5) {
        if (typeof FS > "u" || s5.name !== "ErrnoError") throw s5;
        return -s5.errno;
      }
    }
    ___syscall_newfstatat.sig = "iippi";
    function ___syscall_openat(e, t2, r2, a2) {
      SYSCALLS.varargs = a2;
      try {
        t2 = SYSCALLS.getStr(t2), t2 = SYSCALLS.calculateAt(e, t2);
        var o5 = a2 ? syscallGetVarargI() : 0;
        return FS.open(t2, r2, o5).fd;
      } catch (_5) {
        if (typeof FS > "u" || _5.name !== "ErrnoError") throw _5;
        return -_5.errno;
      }
    }
    ___syscall_openat.sig = "iipip";
    var PIPEFS = { BUCKET_BUFFER_SIZE: 8192, mount(e) {
      return FS.createNode(null, "/", 16895, 0);
    }, createPipe() {
      var e = { buckets: [], refcnt: 2 };
      e.buckets.push({ buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE), offset: 0, roffset: 0 });
      var t2 = PIPEFS.nextname(), r2 = PIPEFS.nextname(), a2 = FS.createNode(PIPEFS.root, t2, 4096, 0), o5 = FS.createNode(PIPEFS.root, r2, 4096, 0);
      a2.pipe = e, o5.pipe = e;
      var _5 = FS.createStream({ path: t2, node: a2, flags: 0, seekable: false, stream_ops: PIPEFS.stream_ops });
      a2.stream = _5;
      var s5 = FS.createStream({ path: r2, node: o5, flags: 1, seekable: false, stream_ops: PIPEFS.stream_ops });
      return o5.stream = s5, { readable_fd: _5.fd, writable_fd: s5.fd };
    }, stream_ops: { poll(e) {
      var t2 = e.node.pipe;
      if ((e.flags & 2097155) === 1) return 260;
      if (t2.buckets.length > 0) for (var r2 = 0; r2 < t2.buckets.length; r2++) {
        var a2 = t2.buckets[r2];
        if (a2.offset - a2.roffset > 0) return 65;
      }
      return 0;
    }, ioctl(e, t2, r2) {
      return 28;
    }, fsync(e) {
      return 28;
    }, read(e, t2, r2, a2, o5) {
      for (var _5 = e.node.pipe, s5 = 0, n3 = 0; n3 < _5.buckets.length; n3++) {
        var l2 = _5.buckets[n3];
        s5 += l2.offset - l2.roffset;
      }
      var d3 = t2.subarray(r2, r2 + a2);
      if (a2 <= 0) return 0;
      if (s5 == 0) throw new FS.ErrnoError(6);
      for (var u3 = Math.min(s5, a2), g5 = u3, p5 = 0, n3 = 0; n3 < _5.buckets.length; n3++) {
        var m5 = _5.buckets[n3], f5 = m5.offset - m5.roffset;
        if (u3 <= f5) {
          var c4 = m5.buffer.subarray(m5.roffset, m5.offset);
          u3 < f5 ? (c4 = c4.subarray(0, u3), m5.roffset += u3) : p5++, d3.set(c4);
          break;
        } else {
          var c4 = m5.buffer.subarray(m5.roffset, m5.offset);
          d3.set(c4), d3 = d3.subarray(c4.byteLength), u3 -= c4.byteLength, p5++;
        }
      }
      return p5 && p5 == _5.buckets.length && (p5--, _5.buckets[p5].offset = 0, _5.buckets[p5].roffset = 0), _5.buckets.splice(0, p5), g5;
    }, write(e, t2, r2, a2, o5) {
      var _5 = e.node.pipe, s5 = t2.subarray(r2, r2 + a2), n3 = s5.byteLength;
      if (n3 <= 0) return 0;
      var l2 = null;
      _5.buckets.length == 0 ? (l2 = { buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE), offset: 0, roffset: 0 }, _5.buckets.push(l2)) : l2 = _5.buckets[_5.buckets.length - 1], assert(l2.offset <= PIPEFS.BUCKET_BUFFER_SIZE);
      var d3 = PIPEFS.BUCKET_BUFFER_SIZE - l2.offset;
      if (d3 >= n3) return l2.buffer.set(s5, l2.offset), l2.offset += n3, n3;
      d3 > 0 && (l2.buffer.set(s5.subarray(0, d3), l2.offset), l2.offset += d3, s5 = s5.subarray(d3, s5.byteLength));
      for (var u3 = s5.byteLength / PIPEFS.BUCKET_BUFFER_SIZE | 0, g5 = s5.byteLength % PIPEFS.BUCKET_BUFFER_SIZE, p5 = 0; p5 < u3; p5++) {
        var m5 = { buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE), offset: PIPEFS.BUCKET_BUFFER_SIZE, roffset: 0 };
        _5.buckets.push(m5), m5.buffer.set(s5.subarray(0, PIPEFS.BUCKET_BUFFER_SIZE)), s5 = s5.subarray(PIPEFS.BUCKET_BUFFER_SIZE, s5.byteLength);
      }
      if (g5 > 0) {
        var m5 = { buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE), offset: s5.byteLength, roffset: 0 };
        _5.buckets.push(m5), m5.buffer.set(s5);
      }
      return n3;
    }, close(e) {
      var t2 = e.node.pipe;
      t2.refcnt--, t2.refcnt === 0 && (t2.buckets = null);
    } }, nextname() {
      return PIPEFS.nextname.current || (PIPEFS.nextname.current = 0), "pipe[" + PIPEFS.nextname.current++ + "]";
    } };
    function ___syscall_pipe(e) {
      try {
        if (e == 0) throw new FS.ErrnoError(21);
        var t2 = PIPEFS.createPipe();
        return HEAP32[e >> 2] = t2.readable_fd, HEAP32[e + 4 >> 2] = t2.writable_fd, 0;
      } catch (r2) {
        if (typeof FS > "u" || r2.name !== "ErrnoError") throw r2;
        return -r2.errno;
      }
    }
    ___syscall_pipe.sig = "ip";
    function ___syscall_readlinkat(e, t2, r2, a2) {
      try {
        if (t2 = SYSCALLS.getStr(t2), t2 = SYSCALLS.calculateAt(e, t2), a2 <= 0) return -28;
        var o5 = FS.readlink(t2), _5 = Math.min(a2, lengthBytesUTF8(o5)), s5 = HEAP8[r2 + _5];
        return stringToUTF8(o5, r2, a2 + 1), HEAP8[r2 + _5] = s5, _5;
      } catch (n3) {
        if (typeof FS > "u" || n3.name !== "ErrnoError") throw n3;
        return -n3.errno;
      }
    }
    ___syscall_readlinkat.sig = "iippp";
    function ___syscall_recvfrom(e, t2, r2, a2, o5, _5) {
      try {
        var s5 = getSocketFromFD(e), n3 = s5.sock_ops.recvmsg(s5, r2);
        if (!n3) return 0;
        if (o5) var l2 = writeSockaddr(o5, s5.family, DNS.lookup_name(n3.addr), n3.port, _5);
        return HEAPU8.set(n3.buffer, t2), n3.buffer.byteLength;
      } catch (d3) {
        if (typeof FS > "u" || d3.name !== "ErrnoError") throw d3;
        return -d3.errno;
      }
    }
    ___syscall_recvfrom.sig = "iippipp";
    function ___syscall_renameat(e, t2, r2, a2) {
      try {
        return t2 = SYSCALLS.getStr(t2), a2 = SYSCALLS.getStr(a2), t2 = SYSCALLS.calculateAt(e, t2), a2 = SYSCALLS.calculateAt(r2, a2), FS.rename(t2, a2), 0;
      } catch (o5) {
        if (typeof FS > "u" || o5.name !== "ErrnoError") throw o5;
        return -o5.errno;
      }
    }
    ___syscall_renameat.sig = "iipip";
    function ___syscall_rmdir(e) {
      try {
        return e = SYSCALLS.getStr(e), FS.rmdir(e), 0;
      } catch (t2) {
        if (typeof FS > "u" || t2.name !== "ErrnoError") throw t2;
        return -t2.errno;
      }
    }
    ___syscall_rmdir.sig = "ip";
    function ___syscall_sendto(e, t2, r2, a2, o5, _5) {
      try {
        var s5 = getSocketFromFD(e);
        if (!o5) return FS.write(s5.stream, HEAP8, t2, r2);
        var n3 = getSocketAddress(o5, _5);
        return s5.sock_ops.sendmsg(s5, HEAP8, t2, r2, n3.addr, n3.port);
      } catch (l2) {
        if (typeof FS > "u" || l2.name !== "ErrnoError") throw l2;
        return -l2.errno;
      }
    }
    ___syscall_sendto.sig = "iippipp";
    function ___syscall_socket(e, t2, r2) {
      try {
        var a2 = SOCKFS.createSocket(e, t2, r2);
        return a2.stream.fd;
      } catch (o5) {
        if (typeof FS > "u" || o5.name !== "ErrnoError") throw o5;
        return -o5.errno;
      }
    }
    ___syscall_socket.sig = "iiiiiii";
    function ___syscall_stat64(e, t2) {
      try {
        return e = SYSCALLS.getStr(e), SYSCALLS.doStat(FS.stat, e, t2);
      } catch (r2) {
        if (typeof FS > "u" || r2.name !== "ErrnoError") throw r2;
        return -r2.errno;
      }
    }
    ___syscall_stat64.sig = "ipp";
    function ___syscall_statfs64(e, t2, r2) {
      try {
        var a2 = FS.statfs(SYSCALLS.getStr(e));
        return HEAP32[r2 + 4 >> 2] = a2.bsize, HEAP32[r2 + 40 >> 2] = a2.bsize, HEAP32[r2 + 8 >> 2] = a2.blocks, HEAP32[r2 + 12 >> 2] = a2.bfree, HEAP32[r2 + 16 >> 2] = a2.bavail, HEAP32[r2 + 20 >> 2] = a2.files, HEAP32[r2 + 24 >> 2] = a2.ffree, HEAP32[r2 + 28 >> 2] = a2.fsid, HEAP32[r2 + 44 >> 2] = a2.flags, HEAP32[r2 + 36 >> 2] = a2.namelen, 0;
      } catch (o5) {
        if (typeof FS > "u" || o5.name !== "ErrnoError") throw o5;
        return -o5.errno;
      }
    }
    ___syscall_statfs64.sig = "ippp";
    function ___syscall_symlinkat(e, t2, r2) {
      try {
        return e = SYSCALLS.getStr(e), r2 = SYSCALLS.getStr(r2), r2 = SYSCALLS.calculateAt(t2, r2), FS.symlink(e, r2), 0;
      } catch (a2) {
        if (typeof FS > "u" || a2.name !== "ErrnoError") throw a2;
        return -a2.errno;
      }
    }
    ___syscall_symlinkat.sig = "ipip";
    function ___syscall_truncate64(e, t2) {
      t2 = bigintToI53Checked(t2);
      try {
        return isNaN(t2) ? 61 : (e = SYSCALLS.getStr(e), FS.truncate(e, t2), 0);
      } catch (r2) {
        if (typeof FS > "u" || r2.name !== "ErrnoError") throw r2;
        return -r2.errno;
      }
    }
    ___syscall_truncate64.sig = "ipj";
    function ___syscall_unlinkat(e, t2, r2) {
      try {
        return t2 = SYSCALLS.getStr(t2), t2 = SYSCALLS.calculateAt(e, t2), r2 === 0 ? FS.unlink(t2) : r2 === 512 ? FS.rmdir(t2) : abort("Invalid flags passed to unlinkat"), 0;
      } catch (a2) {
        if (typeof FS > "u" || a2.name !== "ErrnoError") throw a2;
        return -a2.errno;
      }
    }
    ___syscall_unlinkat.sig = "iipi";
    var readI53FromI64 = (e) => HEAPU32[e >> 2] + HEAP32[e + 4 >> 2] * 4294967296;
    function ___syscall_utimensat(e, t2, r2, a2) {
      try {
        t2 = SYSCALLS.getStr(t2), t2 = SYSCALLS.calculateAt(e, t2, true);
        var o5 = Date.now(), _5, s5;
        if (!r2) _5 = o5, s5 = o5;
        else {
          var n3 = readI53FromI64(r2), l2 = HEAP32[r2 + 8 >> 2];
          l2 == 1073741823 ? _5 = o5 : l2 == 1073741822 ? _5 = null : _5 = n3 * 1e3 + l2 / 1e6, r2 += 16, n3 = readI53FromI64(r2), l2 = HEAP32[r2 + 8 >> 2], l2 == 1073741823 ? s5 = o5 : l2 == 1073741822 ? s5 = null : s5 = n3 * 1e3 + l2 / 1e6;
        }
        return (s5 ?? _5) !== null && FS.utime(t2, _5, s5), 0;
      } catch (d3) {
        if (typeof FS > "u" || d3.name !== "ErrnoError") throw d3;
        return -d3.errno;
      }
    }
    ___syscall_utimensat.sig = "iippi";
    var ___table_base = new WebAssembly.Global({ value: "i32", mutable: false }, 1);
    Module.___table_base = ___table_base;
    var __abort_js = () => abort("");
    __abort_js.sig = "v";
    var ENV = {}, stackAlloc = (e) => __emscripten_stack_alloc(e), stringToUTF8OnStack = (e) => {
      var t2 = lengthBytesUTF8(e) + 1, r2 = stackAlloc(t2);
      return stringToUTF8(e, r2, t2), r2;
    }, dlSetError = (e) => {
      var t2 = stackSave(), r2 = stringToUTF8OnStack(e);
      ___dl_seterr(r2, 0), stackRestore(t2);
    }, dlopenInternal = (e, t2) => {
      var r2 = UTF8ToString(e + 36), a2 = HEAP32[e + 4 >> 2];
      r2 = PATH.normalize(r2);
      var o5 = !!(a2 & 256), _5 = o5 ? null : {}, s5 = { global: o5, nodelete: !!(a2 & 4096), loadAsync: t2.loadAsync };
      if (t2.loadAsync) return loadDynamicLibrary(r2, s5, _5, e);
      try {
        return loadDynamicLibrary(r2, s5, _5, e);
      } catch (n3) {
        return dlSetError(`Could not load dynamic lib: ${r2}
${n3}`), 0;
      }
    }, __dlopen_js = (e) => dlopenInternal(e, { loadAsync: false });
    __dlopen_js.sig = "pp";
    var __dlsym_js = (e, t2, r2) => {
      t2 = UTF8ToString(t2);
      var a2, o5, _5 = LDSO.loadedLibsByHandle[e];
      if (!_5.exports.hasOwnProperty(t2) || _5.exports[t2].stub) return dlSetError(`Tried to lookup unknown symbol "${t2}" in dynamic lib: ${_5.name}`), 0;
      if (o5 = Object.keys(_5.exports).indexOf(t2), a2 = _5.exports[t2], typeof a2 == "function") {
        var s5 = getFunctionAddress(a2);
        s5 ? a2 = s5 : (a2 = addFunction(a2, a2.sig), HEAPU32[r2 >> 2] = o5);
      }
      return a2;
    };
    __dlsym_js.sig = "pppp";
    var runtimeKeepaliveCounter = 0, __emscripten_runtime_keepalive_clear = () => {
      noExitRuntime = false, runtimeKeepaliveCounter = 0;
    };
    __emscripten_runtime_keepalive_clear.sig = "v";
    var __emscripten_throw_longjmp = () => {
      throw 1 / 0;
    };
    __emscripten_throw_longjmp.sig = "v";
    function __gmtime_js(e, t2) {
      e = bigintToI53Checked(e);
      var r2 = new Date(e * 1e3);
      HEAP32[t2 >> 2] = r2.getUTCSeconds(), HEAP32[t2 + 4 >> 2] = r2.getUTCMinutes(), HEAP32[t2 + 8 >> 2] = r2.getUTCHours(), HEAP32[t2 + 12 >> 2] = r2.getUTCDate(), HEAP32[t2 + 16 >> 2] = r2.getUTCMonth(), HEAP32[t2 + 20 >> 2] = r2.getUTCFullYear() - 1900, HEAP32[t2 + 24 >> 2] = r2.getUTCDay();
      var a2 = Date.UTC(r2.getUTCFullYear(), 0, 1, 0, 0, 0, 0), o5 = (r2.getTime() - a2) / (1e3 * 60 * 60 * 24) | 0;
      HEAP32[t2 + 28 >> 2] = o5;
    }
    __gmtime_js.sig = "vjp";
    var isLeapYear = (e) => e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0), MONTH_DAYS_LEAP_CUMULATIVE = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335], MONTH_DAYS_REGULAR_CUMULATIVE = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], ydayFromDate = (e) => {
      var t2 = isLeapYear(e.getFullYear()), r2 = t2 ? MONTH_DAYS_LEAP_CUMULATIVE : MONTH_DAYS_REGULAR_CUMULATIVE, a2 = r2[e.getMonth()] + e.getDate() - 1;
      return a2;
    };
    function __localtime_js(e, t2) {
      e = bigintToI53Checked(e);
      var r2 = new Date(e * 1e3);
      HEAP32[t2 >> 2] = r2.getSeconds(), HEAP32[t2 + 4 >> 2] = r2.getMinutes(), HEAP32[t2 + 8 >> 2] = r2.getHours(), HEAP32[t2 + 12 >> 2] = r2.getDate(), HEAP32[t2 + 16 >> 2] = r2.getMonth(), HEAP32[t2 + 20 >> 2] = r2.getFullYear() - 1900, HEAP32[t2 + 24 >> 2] = r2.getDay();
      var a2 = ydayFromDate(r2) | 0;
      HEAP32[t2 + 28 >> 2] = a2, HEAP32[t2 + 36 >> 2] = -(r2.getTimezoneOffset() * 60);
      var o5 = new Date(r2.getFullYear(), 0, 1), _5 = new Date(r2.getFullYear(), 6, 1).getTimezoneOffset(), s5 = o5.getTimezoneOffset(), n3 = (_5 != s5 && r2.getTimezoneOffset() == Math.min(s5, _5)) | 0;
      HEAP32[t2 + 32 >> 2] = n3;
    }
    __localtime_js.sig = "vjp";
    function __mmap_js(e, t2, r2, a2, o5, _5, s5) {
      o5 = bigintToI53Checked(o5);
      try {
        if (isNaN(o5)) return 61;
        var n3 = SYSCALLS.getStreamFromFD(a2), l2 = FS.mmap(n3, e, o5, t2, r2), d3 = l2.ptr;
        return HEAP32[_5 >> 2] = l2.allocated, HEAPU32[s5 >> 2] = d3, 0;
      } catch (u3) {
        if (typeof FS > "u" || u3.name !== "ErrnoError") throw u3;
        return -u3.errno;
      }
    }
    __mmap_js.sig = "ipiiijpp";
    function __munmap_js(e, t2, r2, a2, o5, _5) {
      _5 = bigintToI53Checked(_5);
      try {
        var s5 = SYSCALLS.getStreamFromFD(o5);
        r2 & 2 && SYSCALLS.doMsync(e, s5, t2, a2, _5);
      } catch (n3) {
        if (typeof FS > "u" || n3.name !== "ErrnoError") throw n3;
        return -n3.errno;
      }
    }
    __munmap_js.sig = "ippiiij";
    var timers = {}, handleException = (e) => {
      if (e instanceof ExitStatus || e == "unwind") return EXITSTATUS;
      quit_(1, e);
    }, keepRuntimeAlive = () => noExitRuntime || runtimeKeepaliveCounter > 0, _proc_exit = (e) => {
      EXITSTATUS = e, keepRuntimeAlive() || (Module.onExit?.(e), ABORT = true), quit_(e, new ExitStatus(e));
    };
    _proc_exit.sig = "vi";
    var exitJS = (e, t2) => {
      EXITSTATUS = e, keepRuntimeAlive() || exitRuntime(), _proc_exit(e);
    }, _exit = exitJS;
    Module._exit = _exit, _exit.sig = "vi";
    var maybeExit = () => {
      if (!runtimeExited && !keepRuntimeAlive()) try {
        _exit(EXITSTATUS);
      } catch (e) {
        handleException(e);
      }
    }, callUserCallback = (e) => {
      if (!(runtimeExited || ABORT)) try {
        e(), maybeExit();
      } catch (t2) {
        handleException(t2);
      }
    }, _emscripten_get_now = () => performance.now();
    _emscripten_get_now.sig = "d";
    var __setitimer_js = (e, t2) => {
      if (timers[e] && (clearTimeout(timers[e].id), delete timers[e]), !t2) return 0;
      var r2 = setTimeout(() => {
        delete timers[e], callUserCallback(() => __emscripten_timeout(e, _emscripten_get_now()));
      }, t2);
      return timers[e] = { id: r2, timeout_ms: t2 }, 0;
    };
    __setitimer_js.sig = "iid";
    var __tzset_js = (e, t2, r2, a2) => {
      var o5 = (/* @__PURE__ */ new Date()).getFullYear(), _5 = new Date(o5, 0, 1), s5 = new Date(o5, 6, 1), n3 = _5.getTimezoneOffset(), l2 = s5.getTimezoneOffset(), d3 = Math.max(n3, l2);
      HEAPU32[e >> 2] = d3 * 60, HEAP32[t2 >> 2] = +(n3 != l2);
      var u3 = (m5) => {
        var f5 = m5 >= 0 ? "-" : "+", c4 = Math.abs(m5), w4 = String(Math.floor(c4 / 60)).padStart(2, "0"), x5 = String(c4 % 60).padStart(2, "0");
        return `UTC${f5}${w4}${x5}`;
      }, g5 = u3(n3), p5 = u3(l2);
      l2 < n3 ? (stringToUTF8(g5, r2, 17), stringToUTF8(p5, a2, 17)) : (stringToUTF8(g5, a2, 17), stringToUTF8(p5, r2, 17));
    };
    __tzset_js.sig = "vpppp";
    var _emscripten_date_now = () => Date.now();
    _emscripten_date_now.sig = "d";
    var nowIsMonotonic = 1, checkWasiClock = (e) => e >= 0 && e <= 3;
    function _clock_time_get(e, t2, r2) {
      if (t2 = bigintToI53Checked(t2), !checkWasiClock(e)) return 28;
      var a2;
      if (e === 0) a2 = _emscripten_date_now();
      else if (nowIsMonotonic) a2 = _emscripten_get_now();
      else return 52;
      var o5 = Math.round(a2 * 1e3 * 1e3);
      return HEAP64[r2 >> 3] = BigInt(o5), 0;
    }
    _clock_time_get.sig = "iijp";
    var getHeapMax = () => 2147483648, _emscripten_get_heap_max = () => getHeapMax();
    _emscripten_get_heap_max.sig = "p";
    var growMemory = (e) => {
      var t2 = wasmMemory.buffer, r2 = (e - t2.byteLength + 65535) / 65536 | 0;
      try {
        return wasmMemory.grow(r2), updateMemoryViews(), 1;
      } catch {
      }
    }, _emscripten_resize_heap = (e) => {
      var t2 = HEAPU8.length;
      e >>>= 0;
      var r2 = getHeapMax();
      if (e > r2) return false;
      for (var a2 = 1; a2 <= 4; a2 *= 2) {
        var o5 = t2 * (1 + 0.2 / a2);
        o5 = Math.min(o5, e + 100663296);
        var _5 = Math.min(r2, alignMemory(Math.max(e, o5), 65536)), s5 = growMemory(_5);
        if (s5) return true;
      }
      return false;
    };
    _emscripten_resize_heap.sig = "ip";
    var getExecutableName = () => thisProgram || "./this.program", getEnvStrings = () => {
      if (!getEnvStrings.strings) {
        var e = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", t2 = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: e, _: getExecutableName() };
        for (var r2 in ENV) ENV[r2] === void 0 ? delete t2[r2] : t2[r2] = ENV[r2];
        var a2 = [];
        for (var r2 in t2) a2.push(`${r2}=${t2[r2]}`);
        getEnvStrings.strings = a2;
      }
      return getEnvStrings.strings;
    }, stringToAscii = (e, t2) => {
      for (var r2 = 0; r2 < e.length; ++r2) HEAP8[t2++] = e.charCodeAt(r2);
      HEAP8[t2] = 0;
    }, _environ_get = (e, t2) => {
      var r2 = 0;
      return getEnvStrings().forEach((a2, o5) => {
        var _5 = t2 + r2;
        HEAPU32[e + o5 * 4 >> 2] = _5, stringToAscii(a2, _5), r2 += a2.length + 1;
      }), 0;
    };
    _environ_get.sig = "ipp";
    var _environ_sizes_get = (e, t2) => {
      var r2 = getEnvStrings();
      HEAPU32[e >> 2] = r2.length;
      var a2 = 0;
      return r2.forEach((o5) => a2 += o5.length + 1), HEAPU32[t2 >> 2] = a2, 0;
    };
    _environ_sizes_get.sig = "ipp";
    function _fd_close(e) {
      try {
        var t2 = SYSCALLS.getStreamFromFD(e);
        return FS.close(t2), 0;
      } catch (r2) {
        if (typeof FS > "u" || r2.name !== "ErrnoError") throw r2;
        return r2.errno;
      }
    }
    _fd_close.sig = "ii";
    function _fd_fdstat_get(e, t2) {
      try {
        var r2 = 0, a2 = 0, o5 = 0, _5 = SYSCALLS.getStreamFromFD(e), s5 = _5.tty ? 2 : FS.isDir(_5.mode) ? 3 : FS.isLink(_5.mode) ? 7 : 4;
        return HEAP8[t2] = s5, HEAP16[t2 + 2 >> 1] = o5, HEAP64[t2 + 8 >> 3] = BigInt(r2), HEAP64[t2 + 16 >> 3] = BigInt(a2), 0;
      } catch (n3) {
        if (typeof FS > "u" || n3.name !== "ErrnoError") throw n3;
        return n3.errno;
      }
    }
    _fd_fdstat_get.sig = "iip";
    var doReadv = (e, t2, r2, a2) => {
      for (var o5 = 0, _5 = 0; _5 < r2; _5++) {
        var s5 = HEAPU32[t2 >> 2], n3 = HEAPU32[t2 + 4 >> 2];
        t2 += 8;
        var l2 = FS.read(e, HEAP8, s5, n3, a2);
        if (l2 < 0) return -1;
        if (o5 += l2, l2 < n3) break;
        typeof a2 < "u" && (a2 += l2);
      }
      return o5;
    };
    function _fd_pread(e, t2, r2, a2, o5) {
      a2 = bigintToI53Checked(a2);
      try {
        if (isNaN(a2)) return 61;
        var _5 = SYSCALLS.getStreamFromFD(e), s5 = doReadv(_5, t2, r2, a2);
        return HEAPU32[o5 >> 2] = s5, 0;
      } catch (n3) {
        if (typeof FS > "u" || n3.name !== "ErrnoError") throw n3;
        return n3.errno;
      }
    }
    _fd_pread.sig = "iippjp";
    var doWritev = (e, t2, r2, a2) => {
      for (var o5 = 0, _5 = 0; _5 < r2; _5++) {
        var s5 = HEAPU32[t2 >> 2], n3 = HEAPU32[t2 + 4 >> 2];
        t2 += 8;
        var l2 = FS.write(e, HEAP8, s5, n3, a2);
        if (l2 < 0) return -1;
        if (o5 += l2, l2 < n3) break;
        typeof a2 < "u" && (a2 += l2);
      }
      return o5;
    };
    function _fd_pwrite(e, t2, r2, a2, o5) {
      a2 = bigintToI53Checked(a2);
      try {
        if (isNaN(a2)) return 61;
        var _5 = SYSCALLS.getStreamFromFD(e), s5 = doWritev(_5, t2, r2, a2);
        return HEAPU32[o5 >> 2] = s5, 0;
      } catch (n3) {
        if (typeof FS > "u" || n3.name !== "ErrnoError") throw n3;
        return n3.errno;
      }
    }
    _fd_pwrite.sig = "iippjp";
    function _fd_read(e, t2, r2, a2) {
      try {
        var o5 = SYSCALLS.getStreamFromFD(e), _5 = doReadv(o5, t2, r2);
        return HEAPU32[a2 >> 2] = _5, 0;
      } catch (s5) {
        if (typeof FS > "u" || s5.name !== "ErrnoError") throw s5;
        return s5.errno;
      }
    }
    _fd_read.sig = "iippp";
    function _fd_seek(e, t2, r2, a2) {
      t2 = bigintToI53Checked(t2);
      try {
        if (isNaN(t2)) return 61;
        var o5 = SYSCALLS.getStreamFromFD(e);
        return FS.llseek(o5, t2, r2), HEAP64[a2 >> 3] = BigInt(o5.position), o5.getdents && t2 === 0 && r2 === 0 && (o5.getdents = null), 0;
      } catch (_5) {
        if (typeof FS > "u" || _5.name !== "ErrnoError") throw _5;
        return _5.errno;
      }
    }
    _fd_seek.sig = "iijip";
    function _fd_sync(e) {
      try {
        var t2 = SYSCALLS.getStreamFromFD(e);
        return t2.stream_ops?.fsync ? t2.stream_ops.fsync(t2) : 0;
      } catch (r2) {
        if (typeof FS > "u" || r2.name !== "ErrnoError") throw r2;
        return r2.errno;
      }
    }
    _fd_sync.sig = "ii";
    function _fd_write(e, t2, r2, a2) {
      try {
        var o5 = SYSCALLS.getStreamFromFD(e), _5 = doWritev(o5, t2, r2);
        return HEAPU32[a2 >> 2] = _5, 0;
      } catch (s5) {
        if (typeof FS > "u" || s5.name !== "ErrnoError") throw s5;
        return s5.errno;
      }
    }
    _fd_write.sig = "iippp";
    var _getaddrinfo = (e, t2, r2, a2) => {
      var o5 = 0, _5 = 0, s5 = 0, n3 = 0, l2 = 0, d3 = 0, u3;
      function g5(p5, m5, f5, c4, w4, x5) {
        var y5, h2, F4, E3;
        return h2 = p5 === 10 ? 28 : 16, w4 = p5 === 10 ? inetNtop6(w4) : inetNtop4(w4), y5 = _malloc(h2), E3 = writeSockaddr(y5, p5, w4, x5), assert(!E3), F4 = _malloc(32), HEAP32[F4 + 4 >> 2] = p5, HEAP32[F4 + 8 >> 2] = m5, HEAP32[F4 + 12 >> 2] = f5, HEAPU32[F4 + 24 >> 2] = c4, HEAPU32[F4 + 20 >> 2] = y5, p5 === 10 ? HEAP32[F4 + 16 >> 2] = 28 : HEAP32[F4 + 16 >> 2] = 16, HEAP32[F4 + 28 >> 2] = 0, F4;
      }
      if (r2 && (s5 = HEAP32[r2 >> 2], n3 = HEAP32[r2 + 4 >> 2], l2 = HEAP32[r2 + 8 >> 2], d3 = HEAP32[r2 + 12 >> 2]), l2 && !d3 && (d3 = l2 === 2 ? 17 : 6), !l2 && d3 && (l2 = d3 === 17 ? 2 : 1), d3 === 0 && (d3 = 6), l2 === 0 && (l2 = 1), !e && !t2) return -2;
      if (s5 & -1088 || r2 !== 0 && HEAP32[r2 >> 2] & 2 && !e) return -1;
      if (s5 & 32) return -2;
      if (l2 !== 0 && l2 !== 1 && l2 !== 2) return -7;
      if (n3 !== 0 && n3 !== 2 && n3 !== 10) return -6;
      if (t2 && (t2 = UTF8ToString(t2), _5 = parseInt(t2, 10), isNaN(_5))) return s5 & 1024 ? -2 : -8;
      if (!e) return n3 === 0 && (n3 = 2), s5 & 1 || (n3 === 2 ? o5 = _htonl(2130706433) : o5 = [0, 0, 0, _htonl(1)]), u3 = g5(n3, l2, d3, null, o5, _5), HEAPU32[a2 >> 2] = u3, 0;
      if (e = UTF8ToString(e), o5 = inetPton4(e), o5 !== null) if (n3 === 0 || n3 === 2) n3 = 2;
      else if (n3 === 10 && s5 & 8) o5 = [0, 0, _htonl(65535), o5], n3 = 10;
      else return -2;
      else if (o5 = inetPton6(e), o5 !== null) if (n3 === 0 || n3 === 10) n3 = 10;
      else return -2;
      return o5 != null ? (u3 = g5(n3, l2, d3, e, o5, _5), HEAPU32[a2 >> 2] = u3, 0) : s5 & 4 ? -2 : (e = DNS.lookup_name(e), o5 = inetPton4(e), n3 === 0 ? n3 = 2 : n3 === 10 && (o5 = [0, 0, _htonl(65535), o5]), u3 = g5(n3, l2, d3, null, o5, _5), HEAPU32[a2 >> 2] = u3, 0);
    };
    _getaddrinfo.sig = "ipppp";
    var _getnameinfo = (e, t2, r2, a2, o5, _5, s5) => {
      var n3 = readSockaddr(e, t2);
      if (n3.errno) return -6;
      var l2 = n3.port, d3 = n3.addr, u3 = false;
      if (r2 && a2) {
        var g5;
        if (s5 & 1 || !(g5 = DNS.lookup_addr(d3))) {
          if (s5 & 8) return -2;
        } else d3 = g5;
        var p5 = stringToUTF8(d3, r2, a2);
        p5 + 1 >= a2 && (u3 = true);
      }
      if (o5 && _5) {
        l2 = "" + l2;
        var p5 = stringToUTF8(l2, o5, _5);
        p5 + 1 >= _5 && (u3 = true);
      }
      return u3 ? -12 : 0;
    };
    _getnameinfo.sig = "ipipipii";
    function _random_get(e, t2) {
      try {
        return randomFill(HEAPU8.subarray(e, e + t2)), 0;
      } catch (r2) {
        if (typeof FS > "u" || r2.name !== "ErrnoError") throw r2;
        return r2.errno;
      }
    }
    _random_get.sig = "ipp";
    var stringToNewUTF8 = (e) => {
      var t2 = lengthBytesUTF8(e) + 1, r2 = _malloc(t2);
      return r2 && stringToUTF8(e, r2, t2), r2;
    }, removeFunction = (e) => {
      functionsInTableMap.delete(getWasmTableEntry(e)), setWasmTableEntry(e, null), freeTableIndexes.push(e);
    }, FS_createPath = FS.createPath, FS_unlink = (e) => FS.unlink(e), FS_createLazyFile = FS.createLazyFile, FS_createDevice = FS.createDevice, setTempRet0 = (e) => __emscripten_tempret_set(e), _setTempRet0 = setTempRet0;
    Module._setTempRet0 = _setTempRet0;
    var getTempRet0 = (e) => __emscripten_tempret_get(), _getTempRet0 = getTempRet0;
    Module._getTempRet0 = _getTempRet0;
    var _emscripten_force_exit = (e) => {
      __emscripten_runtime_keepalive_clear(), _exit(e);
    };
    Module._emscripten_force_exit = _emscripten_force_exit, _emscripten_force_exit.sig = "vi";
    var _sched_yield = () => 0;
    Module._sched_yield = _sched_yield, _sched_yield.sig = "i";
    var exceptionLast = 0;
    class ExceptionInfo {
      constructor(t2) {
        this.excPtr = t2, this.ptr = t2 - 24;
      }
      set_type(t2) {
        HEAPU32[this.ptr + 4 >> 2] = t2;
      }
      get_type() {
        return HEAPU32[this.ptr + 4 >> 2];
      }
      set_destructor(t2) {
        HEAPU32[this.ptr + 8 >> 2] = t2;
      }
      get_destructor() {
        return HEAPU32[this.ptr + 8 >> 2];
      }
      set_caught(t2) {
        t2 = t2 ? 1 : 0, HEAP8[this.ptr + 12] = t2;
      }
      get_caught() {
        return HEAP8[this.ptr + 12] != 0;
      }
      set_rethrown(t2) {
        t2 = t2 ? 1 : 0, HEAP8[this.ptr + 13] = t2;
      }
      get_rethrown() {
        return HEAP8[this.ptr + 13] != 0;
      }
      init(t2, r2) {
        this.set_adjusted_ptr(0), this.set_type(t2), this.set_destructor(r2);
      }
      set_adjusted_ptr(t2) {
        HEAPU32[this.ptr + 16 >> 2] = t2;
      }
      get_adjusted_ptr() {
        return HEAPU32[this.ptr + 16 >> 2];
      }
    }
    var ___resumeException = (e) => {
      throw exceptionLast || (exceptionLast = e), exceptionLast;
    };
    Module.___resumeException = ___resumeException, ___resumeException.sig = "vp";
    var findMatchingCatch = (e) => {
      var t2 = exceptionLast;
      if (!t2) return setTempRet0(0), 0;
      var r2 = new ExceptionInfo(t2);
      r2.set_adjusted_ptr(t2);
      var a2 = r2.get_type();
      if (!a2) return setTempRet0(0), t2;
      for (var o5 of e) {
        if (o5 === 0 || o5 === a2) break;
        var _5 = r2.ptr + 16;
        if (___cxa_can_catch(o5, a2, _5)) return setTempRet0(o5), t2;
      }
      return setTempRet0(a2), t2;
    }, ___cxa_find_matching_catch_2 = () => findMatchingCatch([]);
    Module.___cxa_find_matching_catch_2 = ___cxa_find_matching_catch_2, ___cxa_find_matching_catch_2.sig = "p";
    var ___cxa_find_matching_catch_3 = (e) => findMatchingCatch([e]);
    Module.___cxa_find_matching_catch_3 = ___cxa_find_matching_catch_3, ___cxa_find_matching_catch_3.sig = "pp";
    var uncaughtExceptionCount = 0, ___cxa_throw = (e, t2, r2) => {
      var a2 = new ExceptionInfo(e);
      throw a2.init(t2, r2), exceptionLast = e, uncaughtExceptionCount++, exceptionLast;
    };
    Module.___cxa_throw = ___cxa_throw, ___cxa_throw.sig = "vppp";
    var exceptionCaught = [], ___cxa_rethrow = () => {
      var e = exceptionCaught.pop();
      e || abort("no exception to throw");
      var t2 = e.excPtr;
      throw e.get_rethrown() || (exceptionCaught.push(e), e.set_rethrown(true), e.set_caught(false), uncaughtExceptionCount++), exceptionLast = t2, exceptionLast;
    };
    Module.___cxa_rethrow = ___cxa_rethrow, ___cxa_rethrow.sig = "v";
    var ___cxa_begin_catch = (e) => {
      var t2 = new ExceptionInfo(e);
      return t2.get_caught() || (t2.set_caught(true), uncaughtExceptionCount--), t2.set_rethrown(false), exceptionCaught.push(t2), ___cxa_increment_exception_refcount(e), ___cxa_get_exception_ptr(e);
    };
    Module.___cxa_begin_catch = ___cxa_begin_catch, ___cxa_begin_catch.sig = "pp";
    var ___cxa_end_catch = () => {
      _setThrew(0, 0);
      var e = exceptionCaught.pop();
      ___cxa_decrement_exception_refcount(e.excPtr), exceptionLast = 0;
    };
    Module.___cxa_end_catch = ___cxa_end_catch, ___cxa_end_catch.sig = "v";
    var ___cxa_uncaught_exceptions = () => uncaughtExceptionCount;
    Module.___cxa_uncaught_exceptions = ___cxa_uncaught_exceptions, ___cxa_uncaught_exceptions.sig = "i";
    var ___cxa_current_primary_exception = () => {
      if (!exceptionCaught.length) return 0;
      var e = exceptionCaught[exceptionCaught.length - 1];
      return ___cxa_increment_exception_refcount(e.excPtr), e.excPtr;
    };
    Module.___cxa_current_primary_exception = ___cxa_current_primary_exception, ___cxa_current_primary_exception.sig = "p";
    var ___cxa_rethrow_primary_exception = (e) => {
      if (e) {
        var t2 = new ExceptionInfo(e);
        exceptionCaught.push(t2), t2.set_rethrown(true), ___cxa_rethrow();
      }
    };
    Module.___cxa_rethrow_primary_exception = ___cxa_rethrow_primary_exception, ___cxa_rethrow_primary_exception.sig = "vp", registerWasmPlugin(), FS.createPreloadedFile = FS_createPreloadedFile, FS.staticInit(), Module.FS_createPath = FS.createPath, Module.FS_createDataFile = FS.createDataFile, Module.FS_createPreloadedFile = FS.createPreloadedFile, Module.FS_unlink = FS.unlink, Module.FS_createLazyFile = FS.createLazyFile, Module.FS_createDevice = FS.createDevice, MEMFS.doesNotExistError = new FS.ErrnoError(44), MEMFS.doesNotExistError.stack = "<generic error, no stack>", ENVIRONMENT_IS_NODE && NODEFS.staticInit();
    var wasmImports = { __assert_fail: ___assert_fail, __call_sighandler: ___call_sighandler, __cxa_begin_catch: ___cxa_begin_catch, __cxa_current_primary_exception: ___cxa_current_primary_exception, __cxa_end_catch: ___cxa_end_catch, __cxa_find_matching_catch_2: ___cxa_find_matching_catch_2, __cxa_find_matching_catch_3: ___cxa_find_matching_catch_3, __cxa_rethrow: ___cxa_rethrow, __cxa_rethrow_primary_exception: ___cxa_rethrow_primary_exception, __cxa_throw: ___cxa_throw, __cxa_uncaught_exceptions: ___cxa_uncaught_exceptions, __heap_base: ___heap_base, __indirect_function_table: wasmTable, __memory_base: ___memory_base, __resumeException: ___resumeException, __stack_pointer: ___stack_pointer, __syscall__newselect: ___syscall__newselect, __syscall_accept4: ___syscall_accept4, __syscall_bind: ___syscall_bind, __syscall_chdir: ___syscall_chdir, __syscall_chmod: ___syscall_chmod, __syscall_connect: ___syscall_connect, __syscall_dup: ___syscall_dup, __syscall_dup3: ___syscall_dup3, __syscall_faccessat: ___syscall_faccessat, __syscall_fadvise64: ___syscall_fadvise64, __syscall_fallocate: ___syscall_fallocate, __syscall_fchmod: ___syscall_fchmod, __syscall_fchmodat2: ___syscall_fchmodat2, __syscall_fchown32: ___syscall_fchown32, __syscall_fchownat: ___syscall_fchownat, __syscall_fcntl64: ___syscall_fcntl64, __syscall_fdatasync: ___syscall_fdatasync, __syscall_fstat64: ___syscall_fstat64, __syscall_ftruncate64: ___syscall_ftruncate64, __syscall_getcwd: ___syscall_getcwd, __syscall_getdents64: ___syscall_getdents64, __syscall_ioctl: ___syscall_ioctl, __syscall_listen: ___syscall_listen, __syscall_lstat64: ___syscall_lstat64, __syscall_mkdirat: ___syscall_mkdirat, __syscall_newfstatat: ___syscall_newfstatat, __syscall_openat: ___syscall_openat, __syscall_pipe: ___syscall_pipe, __syscall_readlinkat: ___syscall_readlinkat, __syscall_recvfrom: ___syscall_recvfrom, __syscall_renameat: ___syscall_renameat, __syscall_rmdir: ___syscall_rmdir, __syscall_sendto: ___syscall_sendto, __syscall_socket: ___syscall_socket, __syscall_stat64: ___syscall_stat64, __syscall_statfs64: ___syscall_statfs64, __syscall_symlinkat: ___syscall_symlinkat, __syscall_truncate64: ___syscall_truncate64, __syscall_unlinkat: ___syscall_unlinkat, __syscall_utimensat: ___syscall_utimensat, __table_base: ___table_base, _abort_js: __abort_js, _dlopen_js: __dlopen_js, _dlsym_js: __dlsym_js, _emscripten_runtime_keepalive_clear: __emscripten_runtime_keepalive_clear, _emscripten_throw_longjmp: __emscripten_throw_longjmp, _gmtime_js: __gmtime_js, _localtime_js: __localtime_js, _mmap_js: __mmap_js, _munmap_js: __munmap_js, _setitimer_js: __setitimer_js, _tzset_js: __tzset_js, clock_time_get: _clock_time_get, emscripten_date_now: _emscripten_date_now, emscripten_force_exit: _emscripten_force_exit, emscripten_get_heap_max: _emscripten_get_heap_max, emscripten_get_now: _emscripten_get_now, emscripten_resize_heap: _emscripten_resize_heap, environ_get: _environ_get, environ_sizes_get: _environ_sizes_get, exit: _exit, fd_close: _fd_close, fd_fdstat_get: _fd_fdstat_get, fd_pread: _fd_pread, fd_pwrite: _fd_pwrite, fd_read: _fd_read, fd_seek: _fd_seek, fd_sync: _fd_sync, fd_write: _fd_write, getTempRet0: _getTempRet0, getaddrinfo: _getaddrinfo, getnameinfo: _getnameinfo, invoke_di, invoke_i, invoke_id, invoke_ii, invoke_iii, invoke_iiii, invoke_iiiii, invoke_iiiiii, invoke_iiiiiii, invoke_iiiiiiii, invoke_iiiiiiiii, invoke_iiiiiiiiii, invoke_iiiiiiiiiii, invoke_iiiiiiiiiiiiii, invoke_iiiiiiiiiiiiiiiiii, invoke_iiiiiji, invoke_iiiij, invoke_iiij, invoke_iiji, invoke_iijj, invoke_ij, invoke_ijiiiii, invoke_ijiiiiii, invoke_ijji, invoke_j, invoke_ji, invoke_jii, invoke_jiii, invoke_jiiii, invoke_jiiiiii, invoke_jiiiiiiiii, invoke_jij, invoke_v, invoke_vi, invoke_vid, invoke_vii, invoke_viii, invoke_viiii, invoke_viiiii, invoke_viiiiii, invoke_viiiiiii, invoke_viiiiiiii, invoke_viiiiiiiii, invoke_viiiiiiiiiiii, invoke_viiij, invoke_viiiji, invoke_viij, invoke_viiji, invoke_viijii, invoke_viijiiii, invoke_vij, invoke_viji, invoke_vijiji, invoke_vijjii, invoke_vj, invoke_vji, invoke_vjii, memory: wasmMemory, proc_exit: _proc_exit, random_get: _random_get, sched_yield: _sched_yield, setTempRet0: _setTempRet0 }, wasmExports;
    createWasm();
    var ___wasm_call_ctors = () => (___wasm_call_ctors = wasmExports.__wasm_call_ctors)(), _palloc0 = Module._palloc0 = (e) => (_palloc0 = Module._palloc0 = wasmExports.palloc0)(e), _RelationGetNumberOfBlocksInFork = Module._RelationGetNumberOfBlocksInFork = (e, t2) => (_RelationGetNumberOfBlocksInFork = Module._RelationGetNumberOfBlocksInFork = wasmExports.RelationGetNumberOfBlocksInFork)(e, t2), _ExtendBufferedRel = Module._ExtendBufferedRel = (e, t2, r2, a2) => (_ExtendBufferedRel = Module._ExtendBufferedRel = wasmExports.ExtendBufferedRel)(e, t2, r2, a2), _MarkBufferDirty = Module._MarkBufferDirty = (e) => (_MarkBufferDirty = Module._MarkBufferDirty = wasmExports.MarkBufferDirty)(e), _XLogBeginInsert = Module._XLogBeginInsert = () => (_XLogBeginInsert = Module._XLogBeginInsert = wasmExports.XLogBeginInsert)(), _XLogRegisterData = Module._XLogRegisterData = (e, t2) => (_XLogRegisterData = Module._XLogRegisterData = wasmExports.XLogRegisterData)(e, t2), _XLogInsert = Module._XLogInsert = (e, t2) => (_XLogInsert = Module._XLogInsert = wasmExports.XLogInsert)(e, t2), _UnlockReleaseBuffer = Module._UnlockReleaseBuffer = (e) => (_UnlockReleaseBuffer = Module._UnlockReleaseBuffer = wasmExports.UnlockReleaseBuffer)(e), _palloc = Module._palloc = (e) => (_palloc = Module._palloc = wasmExports.palloc)(e), _brin_build_desc = Module._brin_build_desc = (e) => (_brin_build_desc = Module._brin_build_desc = wasmExports.brin_build_desc)(e), _EnterParallelMode = Module._EnterParallelMode = () => (_EnterParallelMode = Module._EnterParallelMode = wasmExports.EnterParallelMode)(), _CreateParallelContext = Module._CreateParallelContext = (e, t2, r2) => (_CreateParallelContext = Module._CreateParallelContext = wasmExports.CreateParallelContext)(e, t2, r2), _GetTransactionSnapshot = Module._GetTransactionSnapshot = () => (_GetTransactionSnapshot = Module._GetTransactionSnapshot = wasmExports.GetTransactionSnapshot)(), _RegisterSnapshot = Module._RegisterSnapshot = (e) => (_RegisterSnapshot = Module._RegisterSnapshot = wasmExports.RegisterSnapshot)(e), _table_parallelscan_estimate = Module._table_parallelscan_estimate = (e, t2) => (_table_parallelscan_estimate = Module._table_parallelscan_estimate = wasmExports.table_parallelscan_estimate)(e, t2), _add_size = Module._add_size = (e, t2) => (_add_size = Module._add_size = wasmExports.add_size)(e, t2), _tuplesort_estimate_shared = Module._tuplesort_estimate_shared = (e) => (_tuplesort_estimate_shared = Module._tuplesort_estimate_shared = wasmExports.tuplesort_estimate_shared)(e), _strlen = Module._strlen = (e) => (_strlen = Module._strlen = wasmExports.strlen)(e), _InitializeParallelDSM = Module._InitializeParallelDSM = (e) => (_InitializeParallelDSM = Module._InitializeParallelDSM = wasmExports.InitializeParallelDSM)(e), _UnregisterSnapshot = Module._UnregisterSnapshot = (e) => (_UnregisterSnapshot = Module._UnregisterSnapshot = wasmExports.UnregisterSnapshot)(e), _DestroyParallelContext = Module._DestroyParallelContext = (e) => (_DestroyParallelContext = Module._DestroyParallelContext = wasmExports.DestroyParallelContext)(e), _ExitParallelMode = Module._ExitParallelMode = () => (_ExitParallelMode = Module._ExitParallelMode = wasmExports.ExitParallelMode)(), _shm_toc_allocate = Module._shm_toc_allocate = (e, t2) => (_shm_toc_allocate = Module._shm_toc_allocate = wasmExports.shm_toc_allocate)(e, t2), _ConditionVariableInit = Module._ConditionVariableInit = (e) => (_ConditionVariableInit = Module._ConditionVariableInit = wasmExports.ConditionVariableInit)(e), _s_init_lock_sema = Module._s_init_lock_sema = (e, t2) => (_s_init_lock_sema = Module._s_init_lock_sema = wasmExports.s_init_lock_sema)(e, t2), _table_parallelscan_initialize = Module._table_parallelscan_initialize = (e, t2, r2) => (_table_parallelscan_initialize = Module._table_parallelscan_initialize = wasmExports.table_parallelscan_initialize)(e, t2, r2), _tuplesort_initialize_shared = Module._tuplesort_initialize_shared = (e, t2, r2) => (_tuplesort_initialize_shared = Module._tuplesort_initialize_shared = wasmExports.tuplesort_initialize_shared)(e, t2, r2), _shm_toc_insert = Module._shm_toc_insert = (e, t2, r2) => (_shm_toc_insert = Module._shm_toc_insert = wasmExports.shm_toc_insert)(e, t2, r2), _memcpy = Module._memcpy = (e, t2, r2) => (_memcpy = Module._memcpy = wasmExports.memcpy)(e, t2, r2), _LaunchParallelWorkers = Module._LaunchParallelWorkers = (e) => (_LaunchParallelWorkers = Module._LaunchParallelWorkers = wasmExports.LaunchParallelWorkers)(e), _WaitForParallelWorkersToAttach = Module._WaitForParallelWorkersToAttach = (e) => (_WaitForParallelWorkersToAttach = Module._WaitForParallelWorkersToAttach = wasmExports.WaitForParallelWorkersToAttach)(e), _tas_sema = Module._tas_sema = (e) => (_tas_sema = Module._tas_sema = wasmExports.tas_sema)(e), _s_lock = Module._s_lock = (e, t2, r2, a2) => (_s_lock = Module._s_lock = wasmExports.s_lock)(e, t2, r2, a2), _s_unlock_sema = Module._s_unlock_sema = (e) => (_s_unlock_sema = Module._s_unlock_sema = wasmExports.s_unlock_sema)(e), _ConditionVariableSleep = Module._ConditionVariableSleep = (e, t2) => (_ConditionVariableSleep = Module._ConditionVariableSleep = wasmExports.ConditionVariableSleep)(e, t2), _ConditionVariableCancelSleep = Module._ConditionVariableCancelSleep = () => (_ConditionVariableCancelSleep = Module._ConditionVariableCancelSleep = wasmExports.ConditionVariableCancelSleep)(), _tuplesort_performsort = Module._tuplesort_performsort = (e) => (_tuplesort_performsort = Module._tuplesort_performsort = wasmExports.tuplesort_performsort)(e), _AllocSetContextCreateInternal = Module._AllocSetContextCreateInternal = (e, t2, r2, a2, o5) => (_AllocSetContextCreateInternal = Module._AllocSetContextCreateInternal = wasmExports.AllocSetContextCreateInternal)(e, t2, r2, a2, o5), _tuplesort_end = Module._tuplesort_end = (e) => (_tuplesort_end = Module._tuplesort_end = wasmExports.tuplesort_end)(e), _MemoryContextReset = Module._MemoryContextReset = (e) => (_MemoryContextReset = Module._MemoryContextReset = wasmExports.MemoryContextReset)(e), _brin_deform_tuple = Module._brin_deform_tuple = (e, t2, r2) => (_brin_deform_tuple = Module._brin_deform_tuple = wasmExports.brin_deform_tuple)(e, t2, r2), _pfree = Module._pfree = (e) => (_pfree = Module._pfree = wasmExports.pfree)(e), _MemoryContextDelete = Module._MemoryContextDelete = (e) => (_MemoryContextDelete = Module._MemoryContextDelete = wasmExports.MemoryContextDelete)(e), _errstart_cold = Module._errstart_cold = (e, t2) => (_errstart_cold = Module._errstart_cold = wasmExports.errstart_cold)(e, t2), _errmsg_internal = Module._errmsg_internal = (e, t2) => (_errmsg_internal = Module._errmsg_internal = wasmExports.errmsg_internal)(e, t2), _errfinish = Module._errfinish = (e, t2, r2) => (_errfinish = Module._errfinish = wasmExports.errfinish)(e, t2, r2), _log_newpage_buffer = Module._log_newpage_buffer = (e, t2) => (_log_newpage_buffer = Module._log_newpage_buffer = wasmExports.log_newpage_buffer)(e, t2), _ProcessInterrupts = Module._ProcessInterrupts = () => (_ProcessInterrupts = Module._ProcessInterrupts = wasmExports.ProcessInterrupts)(), _errstart = Module._errstart = (e, t2) => (_errstart = Module._errstart = wasmExports.errstart)(e, t2), _errcode = Module._errcode = (e) => (_errcode = Module._errcode = wasmExports.errcode)(e), _errmsg = Module._errmsg = (e, t2) => (_errmsg = Module._errmsg = wasmExports.errmsg)(e, t2), _LockBuffer = Module._LockBuffer = (e, t2) => (_LockBuffer = Module._LockBuffer = wasmExports.LockBuffer)(e, t2), _ReleaseBuffer = Module._ReleaseBuffer = (e) => (_ReleaseBuffer = Module._ReleaseBuffer = wasmExports.ReleaseBuffer)(e), _IndexGetRelation = Module._IndexGetRelation = (e, t2) => (_IndexGetRelation = Module._IndexGetRelation = wasmExports.IndexGetRelation)(e, t2), _table_open = Module._table_open = (e, t2) => (_table_open = Module._table_open = wasmExports.table_open)(e, t2), _ReadBufferExtended = Module._ReadBufferExtended = (e, t2, r2, a2, o5) => (_ReadBufferExtended = Module._ReadBufferExtended = wasmExports.ReadBufferExtended)(e, t2, r2, a2, o5), _table_close = Module._table_close = (e, t2) => (_table_close = Module._table_close = wasmExports.table_close)(e, t2), _build_reloptions = Module._build_reloptions = (e, t2, r2, a2, o5, _5) => (_build_reloptions = Module._build_reloptions = wasmExports.build_reloptions)(e, t2, r2, a2, o5, _5), _RelationGetIndexScan = Module._RelationGetIndexScan = (e, t2, r2) => (_RelationGetIndexScan = Module._RelationGetIndexScan = wasmExports.RelationGetIndexScan)(e, t2, r2), _memmove = Module._memmove = (e, t2, r2) => (_memmove = Module._memmove = wasmExports.memmove)(e, t2, r2), _pgstat_assoc_relation = Module._pgstat_assoc_relation = (e) => (_pgstat_assoc_relation = Module._pgstat_assoc_relation = wasmExports.pgstat_assoc_relation)(e), _memset = Module._memset = (e, t2, r2) => (_memset = Module._memset = wasmExports.memset)(e, t2, r2), _index_getprocinfo = Module._index_getprocinfo = (e, t2, r2) => (_index_getprocinfo = Module._index_getprocinfo = wasmExports.index_getprocinfo)(e, t2, r2), _fmgr_info_copy = Module._fmgr_info_copy = (e, t2, r2) => (_fmgr_info_copy = Module._fmgr_info_copy = wasmExports.fmgr_info_copy)(e, t2, r2), _FunctionCall4Coll = Module._FunctionCall4Coll = (e, t2, r2, a2, o5, _5) => (_FunctionCall4Coll = Module._FunctionCall4Coll = wasmExports.FunctionCall4Coll)(e, t2, r2, a2, o5, _5), _FunctionCall1Coll = Module._FunctionCall1Coll = (e, t2, r2) => (_FunctionCall1Coll = Module._FunctionCall1Coll = wasmExports.FunctionCall1Coll)(e, t2, r2), _brin_free_desc = Module._brin_free_desc = (e) => (_brin_free_desc = Module._brin_free_desc = wasmExports.brin_free_desc)(e), _WaitForParallelWorkersToFinish = Module._WaitForParallelWorkersToFinish = (e) => (_WaitForParallelWorkersToFinish = Module._WaitForParallelWorkersToFinish = wasmExports.WaitForParallelWorkersToFinish)(e), _PageGetFreeSpace = Module._PageGetFreeSpace = (e) => (_PageGetFreeSpace = Module._PageGetFreeSpace = wasmExports.PageGetFreeSpace)(e), _BufferGetBlockNumber = Module._BufferGetBlockNumber = (e) => (_BufferGetBlockNumber = Module._BufferGetBlockNumber = wasmExports.BufferGetBlockNumber)(e), _BuildIndexInfo = Module._BuildIndexInfo = (e) => (_BuildIndexInfo = Module._BuildIndexInfo = wasmExports.BuildIndexInfo)(e), _Int64GetDatum = Module._Int64GetDatum = (e) => (_Int64GetDatum = Module._Int64GetDatum = wasmExports.Int64GetDatum)(e), _DirectFunctionCall2Coll = Module._DirectFunctionCall2Coll = (e, t2, r2, a2) => (_DirectFunctionCall2Coll = Module._DirectFunctionCall2Coll = wasmExports.DirectFunctionCall2Coll)(e, t2, r2, a2), _RecoveryInProgress = Module._RecoveryInProgress = () => (_RecoveryInProgress = Module._RecoveryInProgress = wasmExports.RecoveryInProgress)(), _GetUserIdAndSecContext = Module._GetUserIdAndSecContext = (e, t2) => (_GetUserIdAndSecContext = Module._GetUserIdAndSecContext = wasmExports.GetUserIdAndSecContext)(e, t2), _SetUserIdAndSecContext = Module._SetUserIdAndSecContext = (e, t2) => (_SetUserIdAndSecContext = Module._SetUserIdAndSecContext = wasmExports.SetUserIdAndSecContext)(e, t2), _NewGUCNestLevel = Module._NewGUCNestLevel = () => (_NewGUCNestLevel = Module._NewGUCNestLevel = wasmExports.NewGUCNestLevel)(), _RestrictSearchPath = Module._RestrictSearchPath = () => (_RestrictSearchPath = Module._RestrictSearchPath = wasmExports.RestrictSearchPath)(), _index_open = Module._index_open = (e, t2) => (_index_open = Module._index_open = wasmExports.index_open)(e, t2), _object_ownercheck = Module._object_ownercheck = (e, t2, r2) => (_object_ownercheck = Module._object_ownercheck = wasmExports.object_ownercheck)(e, t2, r2), _aclcheck_error = Module._aclcheck_error = (e, t2, r2) => (_aclcheck_error = Module._aclcheck_error = wasmExports.aclcheck_error)(e, t2, r2), _AtEOXact_GUC = Module._AtEOXact_GUC = (e, t2) => (_AtEOXact_GUC = Module._AtEOXact_GUC = wasmExports.AtEOXact_GUC)(e, t2), _relation_close = Module._relation_close = (e, t2) => (_relation_close = Module._relation_close = wasmExports.relation_close)(e, t2), _errhint = Module._errhint = (e, t2) => (_errhint = Module._errhint = wasmExports.errhint)(e, t2), _GetUserId = Module._GetUserId = () => (_GetUserId = Module._GetUserId = wasmExports.GetUserId)(), _ReadBuffer = Module._ReadBuffer = (e, t2) => (_ReadBuffer = Module._ReadBuffer = wasmExports.ReadBuffer)(e, t2), _shm_toc_lookup = Module._shm_toc_lookup = (e, t2, r2) => (_shm_toc_lookup = Module._shm_toc_lookup = wasmExports.shm_toc_lookup)(e, t2, r2), _pgstat_report_activity = Module._pgstat_report_activity = (e, t2) => (_pgstat_report_activity = Module._pgstat_report_activity = wasmExports.pgstat_report_activity)(e, t2), _tuplesort_attach_shared = Module._tuplesort_attach_shared = (e, t2) => (_tuplesort_attach_shared = Module._tuplesort_attach_shared = wasmExports.tuplesort_attach_shared)(e, t2), _index_close = Module._index_close = (e, t2) => (_index_close = Module._index_close = wasmExports.index_close)(e, t2), _table_beginscan_parallel = Module._table_beginscan_parallel = (e, t2) => (_table_beginscan_parallel = Module._table_beginscan_parallel = wasmExports.table_beginscan_parallel)(e, t2), _ConditionVariableSignal = Module._ConditionVariableSignal = (e) => (_ConditionVariableSignal = Module._ConditionVariableSignal = wasmExports.ConditionVariableSignal)(e), _datumCopy = Module._datumCopy = (e, t2, r2) => (_datumCopy = Module._datumCopy = wasmExports.datumCopy)(e, t2, r2), _lookup_type_cache = Module._lookup_type_cache = (e, t2) => (_lookup_type_cache = Module._lookup_type_cache = wasmExports.lookup_type_cache)(e, t2), _get_fn_opclass_options = Module._get_fn_opclass_options = (e) => (_get_fn_opclass_options = Module._get_fn_opclass_options = wasmExports.get_fn_opclass_options)(e), _log = Module._log = (e) => (_log = Module._log = wasmExports.log)(e), _pg_detoast_datum = Module._pg_detoast_datum = (e) => (_pg_detoast_datum = Module._pg_detoast_datum = wasmExports.pg_detoast_datum)(e), _index_getprocid = Module._index_getprocid = (e, t2, r2) => (_index_getprocid = Module._index_getprocid = wasmExports.index_getprocid)(e, t2, r2), _errdetail_internal = Module._errdetail_internal = (e, t2) => (_errdetail_internal = Module._errdetail_internal = wasmExports.errdetail_internal)(e, t2), _pg_popcount_optimized = Module._pg_popcount_optimized = (e, t2) => (_pg_popcount_optimized = Module._pg_popcount_optimized = wasmExports.pg_popcount_optimized)(e, t2), _init_local_reloptions = Module._init_local_reloptions = (e, t2) => (_init_local_reloptions = Module._init_local_reloptions = wasmExports.init_local_reloptions)(e, t2), _initStringInfo = Module._initStringInfo = (e) => (_initStringInfo = Module._initStringInfo = wasmExports.initStringInfo)(e), _appendStringInfoChar = Module._appendStringInfoChar = (e, t2) => (_appendStringInfoChar = Module._appendStringInfoChar = wasmExports.appendStringInfoChar)(e, t2), _appendStringInfo = Module._appendStringInfo = (e, t2, r2) => (_appendStringInfo = Module._appendStringInfo = wasmExports.appendStringInfo)(e, t2, r2), _FunctionCall2Coll = Module._FunctionCall2Coll = (e, t2, r2, a2) => (_FunctionCall2Coll = Module._FunctionCall2Coll = wasmExports.FunctionCall2Coll)(e, t2, r2, a2), _SysCacheGetAttrNotNull = Module._SysCacheGetAttrNotNull = (e, t2, r2) => (_SysCacheGetAttrNotNull = Module._SysCacheGetAttrNotNull = wasmExports.SysCacheGetAttrNotNull)(e, t2, r2), _ReleaseSysCache = Module._ReleaseSysCache = (e) => (_ReleaseSysCache = Module._ReleaseSysCache = wasmExports.ReleaseSysCache)(e), _get_opcode = Module._get_opcode = (e) => (_get_opcode = Module._get_opcode = wasmExports.get_opcode)(e), _fmgr_info_cxt = Module._fmgr_info_cxt = (e, t2, r2) => (_fmgr_info_cxt = Module._fmgr_info_cxt = wasmExports.fmgr_info_cxt)(e, t2, r2), _Float8GetDatum = Module._Float8GetDatum = (e) => (_Float8GetDatum = Module._Float8GetDatum = wasmExports.Float8GetDatum)(e), _numeric_float8 = Module._numeric_float8 = (e) => (_numeric_float8 = Module._numeric_float8 = wasmExports.numeric_float8)(e), _numeric_sub = Module._numeric_sub = (e) => (_numeric_sub = Module._numeric_sub = wasmExports.numeric_sub)(e), _DirectFunctionCall1Coll = Module._DirectFunctionCall1Coll = (e, t2, r2) => (_DirectFunctionCall1Coll = Module._DirectFunctionCall1Coll = wasmExports.DirectFunctionCall1Coll)(e, t2, r2), _pg_detoast_datum_packed = Module._pg_detoast_datum_packed = (e) => (_pg_detoast_datum_packed = Module._pg_detoast_datum_packed = wasmExports.pg_detoast_datum_packed)(e), _pg_qsort = Module._pg_qsort = (e, t2, r2, a2) => (_pg_qsort = Module._pg_qsort = wasmExports.pg_qsort)(e, t2, r2, a2), _get_typbyval = Module._get_typbyval = (e) => (_get_typbyval = Module._get_typbyval = wasmExports.get_typbyval)(e), _get_typlen = Module._get_typlen = (e) => (_get_typlen = Module._get_typlen = wasmExports.get_typlen)(e), _qsort_arg = Module._qsort_arg = (e, t2, r2, a2, o5) => (_qsort_arg = Module._qsort_arg = wasmExports.qsort_arg)(e, t2, r2, a2, o5), _add_local_int_reloption = Module._add_local_int_reloption = (e, t2, r2, a2, o5, _5, s5) => (_add_local_int_reloption = Module._add_local_int_reloption = wasmExports.add_local_int_reloption)(e, t2, r2, a2, o5, _5, s5), _getTypeOutputInfo = Module._getTypeOutputInfo = (e, t2, r2) => (_getTypeOutputInfo = Module._getTypeOutputInfo = wasmExports.getTypeOutputInfo)(e, t2, r2), _fmgr_info = Module._fmgr_info = (e, t2) => (_fmgr_info = Module._fmgr_info = wasmExports.fmgr_info)(e, t2), _OutputFunctionCall = Module._OutputFunctionCall = (e, t2) => (_OutputFunctionCall = Module._OutputFunctionCall = wasmExports.OutputFunctionCall)(e, t2), _cstring_to_text_with_len = Module._cstring_to_text_with_len = (e, t2) => (_cstring_to_text_with_len = Module._cstring_to_text_with_len = wasmExports.cstring_to_text_with_len)(e, t2), _accumArrayResult = Module._accumArrayResult = (e, t2, r2, a2, o5) => (_accumArrayResult = Module._accumArrayResult = wasmExports.accumArrayResult)(e, t2, r2, a2, o5), _makeArrayResult = Module._makeArrayResult = (e, t2) => (_makeArrayResult = Module._makeArrayResult = wasmExports.makeArrayResult)(e, t2), _OidOutputFunctionCall = Module._OidOutputFunctionCall = (e, t2) => (_OidOutputFunctionCall = Module._OidOutputFunctionCall = wasmExports.OidOutputFunctionCall)(e, t2), _cstring_to_text = Module._cstring_to_text = (e) => (_cstring_to_text = Module._cstring_to_text = wasmExports.cstring_to_text)(e), _PageGetExactFreeSpace = Module._PageGetExactFreeSpace = (e) => (_PageGetExactFreeSpace = Module._PageGetExactFreeSpace = wasmExports.PageGetExactFreeSpace)(e), _PageIndexTupleOverwrite = Module._PageIndexTupleOverwrite = (e, t2, r2, a2) => (_PageIndexTupleOverwrite = Module._PageIndexTupleOverwrite = wasmExports.PageIndexTupleOverwrite)(e, t2, r2, a2), _PageInit = Module._PageInit = (e, t2, r2) => (_PageInit = Module._PageInit = wasmExports.PageInit)(e, t2, r2), _PageAddItemExtended = Module._PageAddItemExtended = (e, t2, r2, a2, o5) => (_PageAddItemExtended = Module._PageAddItemExtended = wasmExports.PageAddItemExtended)(e, t2, r2, a2, o5), _LockRelationForExtension = Module._LockRelationForExtension = (e, t2) => (_LockRelationForExtension = Module._LockRelationForExtension = wasmExports.LockRelationForExtension)(e, t2), _UnlockRelationForExtension = Module._UnlockRelationForExtension = (e, t2) => (_UnlockRelationForExtension = Module._UnlockRelationForExtension = wasmExports.UnlockRelationForExtension)(e, t2), _smgropen = Module._smgropen = (e, t2) => (_smgropen = Module._smgropen = wasmExports.smgropen)(e, t2), _smgrpin = Module._smgrpin = (e) => (_smgrpin = Module._smgrpin = wasmExports.smgrpin)(e), _ItemPointerEquals = Module._ItemPointerEquals = (e, t2) => (_ItemPointerEquals = Module._ItemPointerEquals = wasmExports.ItemPointerEquals)(e, t2), _detoast_external_attr = Module._detoast_external_attr = (e) => (_detoast_external_attr = Module._detoast_external_attr = wasmExports.detoast_external_attr)(e), _CreateTemplateTupleDesc = Module._CreateTemplateTupleDesc = (e) => (_CreateTemplateTupleDesc = Module._CreateTemplateTupleDesc = wasmExports.CreateTemplateTupleDesc)(e), _TupleDescInitEntry = Module._TupleDescInitEntry = (e, t2, r2, a2, o5, _5) => (_TupleDescInitEntry = Module._TupleDescInitEntry = wasmExports.TupleDescInitEntry)(e, t2, r2, a2, o5, _5), _repalloc = Module._repalloc = (e, t2) => (_repalloc = Module._repalloc = wasmExports.repalloc)(e, t2), _memcmp = Module._memcmp = (e, t2, r2) => (_memcmp = Module._memcmp = wasmExports.memcmp)(e, t2, r2), _SearchSysCache1 = Module._SearchSysCache1 = (e, t2) => (_SearchSysCache1 = Module._SearchSysCache1 = wasmExports.SearchSysCache1)(e, t2), _SearchSysCacheList = Module._SearchSysCacheList = (e, t2, r2, a2, o5) => (_SearchSysCacheList = Module._SearchSysCacheList = wasmExports.SearchSysCacheList)(e, t2, r2, a2, o5), _check_amproc_signature = Module._check_amproc_signature = (e, t2, r2, a2, o5, _5) => (_check_amproc_signature = Module._check_amproc_signature = wasmExports.check_amproc_signature)(e, t2, r2, a2, o5, _5), _check_amoptsproc_signature = Module._check_amoptsproc_signature = (e) => (_check_amoptsproc_signature = Module._check_amoptsproc_signature = wasmExports.check_amoptsproc_signature)(e), _format_procedure = Module._format_procedure = (e) => (_format_procedure = Module._format_procedure = wasmExports.format_procedure)(e), _format_operator = Module._format_operator = (e) => (_format_operator = Module._format_operator = wasmExports.format_operator)(e), _check_amop_signature = Module._check_amop_signature = (e, t2, r2, a2) => (_check_amop_signature = Module._check_amop_signature = wasmExports.check_amop_signature)(e, t2, r2, a2), _identify_opfamily_groups = Module._identify_opfamily_groups = (e, t2) => (_identify_opfamily_groups = Module._identify_opfamily_groups = wasmExports.identify_opfamily_groups)(e, t2), _format_type_be = Module._format_type_be = (e) => (_format_type_be = Module._format_type_be = wasmExports.format_type_be)(e), _ReleaseCatCacheList = Module._ReleaseCatCacheList = (e) => (_ReleaseCatCacheList = Module._ReleaseCatCacheList = wasmExports.ReleaseCatCacheList)(e), _format_type_with_typemod = Module._format_type_with_typemod = (e, t2) => (_format_type_with_typemod = Module._format_type_with_typemod = wasmExports.format_type_with_typemod)(e, t2), _errdetail = Module._errdetail = (e, t2) => (_errdetail = Module._errdetail = wasmExports.errdetail)(e, t2), _strcmp = Module._strcmp = (e, t2) => (_strcmp = Module._strcmp = wasmExports.strcmp)(e, t2), _DatumGetEOHP = Module._DatumGetEOHP = (e) => (_DatumGetEOHP = Module._DatumGetEOHP = wasmExports.DatumGetEOHP)(e), _EOH_get_flat_size = Module._EOH_get_flat_size = (e) => (_EOH_get_flat_size = Module._EOH_get_flat_size = wasmExports.EOH_get_flat_size)(e), _EOH_flatten_into = Module._EOH_flatten_into = (e, t2, r2) => (_EOH_flatten_into = Module._EOH_flatten_into = wasmExports.EOH_flatten_into)(e, t2, r2), _toast_raw_datum_size = Module._toast_raw_datum_size = (e) => (_toast_raw_datum_size = Module._toast_raw_datum_size = wasmExports.toast_raw_datum_size)(e), _getmissingattr = Module._getmissingattr = (e, t2, r2) => (_getmissingattr = Module._getmissingattr = wasmExports.getmissingattr)(e, t2, r2), _hash_create = Module._hash_create = (e, t2, r2, a2) => (_hash_create = Module._hash_create = wasmExports.hash_create)(e, t2, r2, a2), _hash_search = Module._hash_search = (e, t2, r2, a2) => (_hash_search = Module._hash_search = wasmExports.hash_search)(e, t2, r2, a2), _nocachegetattr = Module._nocachegetattr = (e, t2, r2) => (_nocachegetattr = Module._nocachegetattr = wasmExports.nocachegetattr)(e, t2, r2), _heap_getsysattr = Module._heap_getsysattr = (e, t2, r2, a2) => (_heap_getsysattr = Module._heap_getsysattr = wasmExports.heap_getsysattr)(e, t2, r2, a2), _heap_form_tuple = Module._heap_form_tuple = (e, t2, r2) => (_heap_form_tuple = Module._heap_form_tuple = wasmExports.heap_form_tuple)(e, t2, r2), _heap_modify_tuple = Module._heap_modify_tuple = (e, t2, r2, a2, o5) => (_heap_modify_tuple = Module._heap_modify_tuple = wasmExports.heap_modify_tuple)(e, t2, r2, a2, o5), _heap_deform_tuple = Module._heap_deform_tuple = (e, t2, r2, a2) => (_heap_deform_tuple = Module._heap_deform_tuple = wasmExports.heap_deform_tuple)(e, t2, r2, a2), _heap_modify_tuple_by_cols = Module._heap_modify_tuple_by_cols = (e, t2, r2, a2, o5, _5) => (_heap_modify_tuple_by_cols = Module._heap_modify_tuple_by_cols = wasmExports.heap_modify_tuple_by_cols)(e, t2, r2, a2, o5, _5), _heap_freetuple = Module._heap_freetuple = (e) => (_heap_freetuple = Module._heap_freetuple = wasmExports.heap_freetuple)(e), _hash_bytes = Module._hash_bytes = (e, t2) => (_hash_bytes = Module._hash_bytes = wasmExports.hash_bytes)(e, t2), _index_form_tuple = Module._index_form_tuple = (e, t2, r2) => (_index_form_tuple = Module._index_form_tuple = wasmExports.index_form_tuple)(e, t2, r2), _MemoryContextAllocZero = Module._MemoryContextAllocZero = (e, t2) => (_MemoryContextAllocZero = Module._MemoryContextAllocZero = wasmExports.MemoryContextAllocZero)(e, t2), _nocache_index_getattr = Module._nocache_index_getattr = (e, t2, r2) => (_nocache_index_getattr = Module._nocache_index_getattr = wasmExports.nocache_index_getattr)(e, t2, r2), _index_deform_tuple = Module._index_deform_tuple = (e, t2, r2, a2) => (_index_deform_tuple = Module._index_deform_tuple = wasmExports.index_deform_tuple)(e, t2, r2, a2), _enlargeStringInfo = Module._enlargeStringInfo = (e, t2) => (_enlargeStringInfo = Module._enlargeStringInfo = wasmExports.enlargeStringInfo)(e, t2), _slot_getsomeattrs_int = Module._slot_getsomeattrs_int = (e, t2) => (_slot_getsomeattrs_int = Module._slot_getsomeattrs_int = wasmExports.slot_getsomeattrs_int)(e, t2), _pg_lltoa = Module._pg_lltoa = (e, t2) => (_pg_lltoa = Module._pg_lltoa = wasmExports.pg_lltoa)(e, t2), _pg_ltoa = Module._pg_ltoa = (e, t2) => (_pg_ltoa = Module._pg_ltoa = wasmExports.pg_ltoa)(e, t2), _pq_sendbytes = Module._pq_sendbytes = (e, t2, r2) => (_pq_sendbytes = Module._pq_sendbytes = wasmExports.pq_sendbytes)(e, t2, r2), _pg_printf = Module._pg_printf = (e, t2) => (_pg_printf = Module._pg_printf = wasmExports.pg_printf)(e, t2), _relation_open = Module._relation_open = (e, t2) => (_relation_open = Module._relation_open = wasmExports.relation_open)(e, t2), _LockRelationOid = Module._LockRelationOid = (e, t2) => (_LockRelationOid = Module._LockRelationOid = wasmExports.LockRelationOid)(e, t2), _RelationIdGetRelation = Module._RelationIdGetRelation = (e) => (_RelationIdGetRelation = Module._RelationIdGetRelation = wasmExports.RelationIdGetRelation)(e), _try_relation_open = Module._try_relation_open = (e, t2) => (_try_relation_open = Module._try_relation_open = wasmExports.try_relation_open)(e, t2), _relation_openrv = Module._relation_openrv = (e, t2) => (_relation_openrv = Module._relation_openrv = wasmExports.relation_openrv)(e, t2), _AcceptInvalidationMessages = Module._AcceptInvalidationMessages = () => (_AcceptInvalidationMessages = Module._AcceptInvalidationMessages = wasmExports.AcceptInvalidationMessages)(), _RangeVarGetRelidExtended = Module._RangeVarGetRelidExtended = (e, t2, r2, a2, o5) => (_RangeVarGetRelidExtended = Module._RangeVarGetRelidExtended = wasmExports.RangeVarGetRelidExtended)(e, t2, r2, a2, o5), _RelationClose = Module._RelationClose = (e) => (_RelationClose = Module._RelationClose = wasmExports.RelationClose)(e), _add_reloption_kind = Module._add_reloption_kind = () => (_add_reloption_kind = Module._add_reloption_kind = wasmExports.add_reloption_kind)(), _register_reloptions_validator = Module._register_reloptions_validator = (e, t2) => (_register_reloptions_validator = Module._register_reloptions_validator = wasmExports.register_reloptions_validator)(e, t2), _lappend = Module._lappend = (e, t2) => (_lappend = Module._lappend = wasmExports.lappend)(e, t2), _pstrdup = Module._pstrdup = (e) => (_pstrdup = Module._pstrdup = wasmExports.pstrdup)(e), _add_int_reloption = Module._add_int_reloption = (e, t2, r2, a2, o5, _5, s5) => (_add_int_reloption = Module._add_int_reloption = wasmExports.add_int_reloption)(e, t2, r2, a2, o5, _5, s5), _add_real_reloption = Module._add_real_reloption = (e, t2, r2, a2, o5, _5, s5) => (_add_real_reloption = Module._add_real_reloption = wasmExports.add_real_reloption)(e, t2, r2, a2, o5, _5, s5), _add_string_reloption = Module._add_string_reloption = (e, t2, r2, a2, o5, _5) => (_add_string_reloption = Module._add_string_reloption = wasmExports.add_string_reloption)(e, t2, r2, a2, o5, _5), _strdup = Module._strdup = (e) => (_strdup = Module._strdup = wasmExports.strdup)(e), _MemoryContextStrdup = Module._MemoryContextStrdup = (e, t2) => (_MemoryContextStrdup = Module._MemoryContextStrdup = wasmExports.MemoryContextStrdup)(e, t2), _transformRelOptions = Module._transformRelOptions = (e, t2, r2, a2, o5, _5) => (_transformRelOptions = Module._transformRelOptions = wasmExports.transformRelOptions)(e, t2, r2, a2, o5, _5), _deconstruct_array_builtin = Module._deconstruct_array_builtin = (e, t2, r2, a2, o5) => (_deconstruct_array_builtin = Module._deconstruct_array_builtin = wasmExports.deconstruct_array_builtin)(e, t2, r2, a2, o5), _strncmp = Module._strncmp = (e, t2, r2) => (_strncmp = Module._strncmp = wasmExports.strncmp)(e, t2, r2), _defGetString = Module._defGetString = (e) => (_defGetString = Module._defGetString = wasmExports.defGetString)(e), _defGetBoolean = Module._defGetBoolean = (e) => (_defGetBoolean = Module._defGetBoolean = wasmExports.defGetBoolean)(e), _pg_sprintf = Module._pg_sprintf = (e, t2, r2) => (_pg_sprintf = Module._pg_sprintf = wasmExports.pg_sprintf)(e, t2, r2), _untransformRelOptions = Module._untransformRelOptions = (e) => (_untransformRelOptions = Module._untransformRelOptions = wasmExports.untransformRelOptions)(e), _text_to_cstring = Module._text_to_cstring = (e) => (_text_to_cstring = Module._text_to_cstring = wasmExports.text_to_cstring)(e), _strchr = Module._strchr = (e, t2) => (_strchr = Module._strchr = wasmExports.strchr)(e, t2), _makeString = Module._makeString = (e) => (_makeString = Module._makeString = wasmExports.makeString)(e), _makeDefElem = Module._makeDefElem = (e, t2, r2) => (_makeDefElem = Module._makeDefElem = wasmExports.makeDefElem)(e, t2, r2), _heap_reloptions = Module._heap_reloptions = (e, t2, r2) => (_heap_reloptions = Module._heap_reloptions = wasmExports.heap_reloptions)(e, t2, r2), _strcpy = Module._strcpy = (e, t2) => (_strcpy = Module._strcpy = wasmExports.strcpy)(e, t2), _MemoryContextAlloc = Module._MemoryContextAlloc = (e, t2) => (_MemoryContextAlloc = Module._MemoryContextAlloc = wasmExports.MemoryContextAlloc)(e, t2), _parse_bool = Module._parse_bool = (e, t2) => (_parse_bool = Module._parse_bool = wasmExports.parse_bool)(e, t2), _parse_int = Module._parse_int = (e, t2, r2, a2) => (_parse_int = Module._parse_int = wasmExports.parse_int)(e, t2, r2, a2), _parse_real = Module._parse_real = (e, t2, r2, a2) => (_parse_real = Module._parse_real = wasmExports.parse_real)(e, t2, r2, a2), _pg_strcasecmp = Module._pg_strcasecmp = (e, t2) => (_pg_strcasecmp = Module._pg_strcasecmp = wasmExports.pg_strcasecmp)(e, t2), _ScanKeyInit = Module._ScanKeyInit = (e, t2, r2, a2, o5) => (_ScanKeyInit = Module._ScanKeyInit = wasmExports.ScanKeyInit)(e, t2, r2, a2, o5), _dsm_segment_handle = Module._dsm_segment_handle = (e) => (_dsm_segment_handle = Module._dsm_segment_handle = wasmExports.dsm_segment_handle)(e), _dsm_create = Module._dsm_create = (e, t2) => (_dsm_create = Module._dsm_create = wasmExports.dsm_create)(e, t2), _dsm_segment_address = Module._dsm_segment_address = (e) => (_dsm_segment_address = Module._dsm_segment_address = wasmExports.dsm_segment_address)(e), _dsa_pin_mapping = Module._dsa_pin_mapping = (e) => (_dsa_pin_mapping = Module._dsa_pin_mapping = wasmExports.dsa_pin_mapping)(e), _dsm_attach = Module._dsm_attach = (e) => (_dsm_attach = Module._dsm_attach = wasmExports.dsm_attach)(e), _dsm_detach = Module._dsm_detach = (e) => (_dsm_detach = Module._dsm_detach = wasmExports.dsm_detach)(e), _dsa_detach = Module._dsa_detach = (e) => (_dsa_detach = Module._dsa_detach = wasmExports.dsa_detach)(e), _ShmemInitStruct = Module._ShmemInitStruct = (e, t2, r2) => (_ShmemInitStruct = Module._ShmemInitStruct = wasmExports.ShmemInitStruct)(e, t2, r2), _LWLockAcquire = Module._LWLockAcquire = (e, t2) => (_LWLockAcquire = Module._LWLockAcquire = wasmExports.LWLockAcquire)(e, t2), _LWLockRelease = Module._LWLockRelease = (e) => (_LWLockRelease = Module._LWLockRelease = wasmExports.LWLockRelease)(e), _dsa_create_ext = Module._dsa_create_ext = (e, t2, r2) => (_dsa_create_ext = Module._dsa_create_ext = wasmExports.dsa_create_ext)(e, t2, r2), _dsa_allocate_extended = Module._dsa_allocate_extended = (e, t2, r2) => (_dsa_allocate_extended = Module._dsa_allocate_extended = wasmExports.dsa_allocate_extended)(e, t2, r2), _dsa_get_address = Module._dsa_get_address = (e, t2) => (_dsa_get_address = Module._dsa_get_address = wasmExports.dsa_get_address)(e, t2), _LWLockInitialize = Module._LWLockInitialize = (e, t2) => (_LWLockInitialize = Module._LWLockInitialize = wasmExports.LWLockInitialize)(e, t2), _dsa_attach = Module._dsa_attach = (e) => (_dsa_attach = Module._dsa_attach = wasmExports.dsa_attach)(e), _dsa_free = Module._dsa_free = (e, t2) => (_dsa_free = Module._dsa_free = wasmExports.dsa_free)(e, t2), _dsa_get_total_size = Module._dsa_get_total_size = (e) => (_dsa_get_total_size = Module._dsa_get_total_size = wasmExports.dsa_get_total_size)(e), _MemoryContextMemAllocated = Module._MemoryContextMemAllocated = (e, t2) => (_MemoryContextMemAllocated = Module._MemoryContextMemAllocated = wasmExports.MemoryContextMemAllocated)(e, t2), _check_stack_depth = Module._check_stack_depth = () => (_check_stack_depth = Module._check_stack_depth = wasmExports.check_stack_depth)(), _GetCurrentCommandId = Module._GetCurrentCommandId = (e) => (_GetCurrentCommandId = Module._GetCurrentCommandId = wasmExports.GetCurrentCommandId)(e), _toast_open_indexes = Module._toast_open_indexes = (e, t2, r2, a2) => (_toast_open_indexes = Module._toast_open_indexes = wasmExports.toast_open_indexes)(e, t2, r2, a2), _heap_insert = Module._heap_insert = (e, t2, r2, a2, o5) => (_heap_insert = Module._heap_insert = wasmExports.heap_insert)(e, t2, r2, a2, o5), _RelationGetIndexList = Module._RelationGetIndexList = (e) => (_RelationGetIndexList = Module._RelationGetIndexList = wasmExports.RelationGetIndexList)(e), _list_free = Module._list_free = (e) => (_list_free = Module._list_free = wasmExports.list_free)(e), _systable_beginscan = Module._systable_beginscan = (e, t2, r2, a2, o5, _5) => (_systable_beginscan = Module._systable_beginscan = wasmExports.systable_beginscan)(e, t2, r2, a2, o5, _5), _systable_getnext = Module._systable_getnext = (e) => (_systable_getnext = Module._systable_getnext = wasmExports.systable_getnext)(e), _systable_endscan = Module._systable_endscan = (e) => (_systable_endscan = Module._systable_endscan = wasmExports.systable_endscan)(e), _toast_close_indexes = Module._toast_close_indexes = (e, t2, r2) => (_toast_close_indexes = Module._toast_close_indexes = wasmExports.toast_close_indexes)(e, t2, r2), _systable_beginscan_ordered = Module._systable_beginscan_ordered = (e, t2, r2, a2, o5) => (_systable_beginscan_ordered = Module._systable_beginscan_ordered = wasmExports.systable_beginscan_ordered)(e, t2, r2, a2, o5), _systable_getnext_ordered = Module._systable_getnext_ordered = (e, t2) => (_systable_getnext_ordered = Module._systable_getnext_ordered = wasmExports.systable_getnext_ordered)(e, t2), _systable_endscan_ordered = Module._systable_endscan_ordered = (e) => (_systable_endscan_ordered = Module._systable_endscan_ordered = wasmExports.systable_endscan_ordered)(e), _init_toast_snapshot = Module._init_toast_snapshot = (e) => (_init_toast_snapshot = Module._init_toast_snapshot = wasmExports.init_toast_snapshot)(e), _convert_tuples_by_position = Module._convert_tuples_by_position = (e, t2, r2) => (_convert_tuples_by_position = Module._convert_tuples_by_position = wasmExports.convert_tuples_by_position)(e, t2, r2), _execute_attr_map_tuple = Module._execute_attr_map_tuple = (e, t2) => (_execute_attr_map_tuple = Module._execute_attr_map_tuple = wasmExports.execute_attr_map_tuple)(e, t2), _ExecStoreVirtualTuple = Module._ExecStoreVirtualTuple = (e) => (_ExecStoreVirtualTuple = Module._ExecStoreVirtualTuple = wasmExports.ExecStoreVirtualTuple)(e), _bms_is_member = Module._bms_is_member = (e, t2) => (_bms_is_member = Module._bms_is_member = wasmExports.bms_is_member)(e, t2), _bms_add_member = Module._bms_add_member = (e, t2) => (_bms_add_member = Module._bms_add_member = wasmExports.bms_add_member)(e, t2), _CreateTupleDescCopy = Module._CreateTupleDescCopy = (e) => (_CreateTupleDescCopy = Module._CreateTupleDescCopy = wasmExports.CreateTupleDescCopy)(e), _ResourceOwnerEnlarge = Module._ResourceOwnerEnlarge = (e) => (_ResourceOwnerEnlarge = Module._ResourceOwnerEnlarge = wasmExports.ResourceOwnerEnlarge)(e), _ResourceOwnerRemember = Module._ResourceOwnerRemember = (e, t2, r2) => (_ResourceOwnerRemember = Module._ResourceOwnerRemember = wasmExports.ResourceOwnerRemember)(e, t2, r2), _DecrTupleDescRefCount = Module._DecrTupleDescRefCount = (e) => (_DecrTupleDescRefCount = Module._DecrTupleDescRefCount = wasmExports.DecrTupleDescRefCount)(e), _ResourceOwnerForget = Module._ResourceOwnerForget = (e, t2, r2) => (_ResourceOwnerForget = Module._ResourceOwnerForget = wasmExports.ResourceOwnerForget)(e, t2, r2), _datumIsEqual = Module._datumIsEqual = (e, t2, r2, a2) => (_datumIsEqual = Module._datumIsEqual = wasmExports.datumIsEqual)(e, t2, r2, a2), _namestrcpy = Module._namestrcpy = (e, t2) => (_namestrcpy = Module._namestrcpy = wasmExports.namestrcpy)(e, t2), _TupleDescInitEntryCollation = Module._TupleDescInitEntryCollation = (e, t2, r2) => (_TupleDescInitEntryCollation = Module._TupleDescInitEntryCollation = wasmExports.TupleDescInitEntryCollation)(e, t2, r2), _stringToNode = Module._stringToNode = (e) => (_stringToNode = Module._stringToNode = wasmExports.stringToNode)(e), _psprintf = Module._psprintf = (e, t2) => (_psprintf = Module._psprintf = wasmExports.psprintf)(e, t2), _pg_detoast_datum_copy = Module._pg_detoast_datum_copy = (e) => (_pg_detoast_datum_copy = Module._pg_detoast_datum_copy = wasmExports.pg_detoast_datum_copy)(e), _get_typlenbyvalalign = Module._get_typlenbyvalalign = (e, t2, r2, a2) => (_get_typlenbyvalalign = Module._get_typlenbyvalalign = wasmExports.get_typlenbyvalalign)(e, t2, r2, a2), _deconstruct_array = Module._deconstruct_array = (e, t2, r2, a2, o5, _5, s5, n3) => (_deconstruct_array = Module._deconstruct_array = wasmExports.deconstruct_array)(e, t2, r2, a2, o5, _5, s5, n3), _tbm_add_tuples = Module._tbm_add_tuples = (e, t2, r2, a2) => (_tbm_add_tuples = Module._tbm_add_tuples = wasmExports.tbm_add_tuples)(e, t2, r2, a2), _ginPostingListDecode = Module._ginPostingListDecode = (e, t2) => (_ginPostingListDecode = Module._ginPostingListDecode = wasmExports.ginPostingListDecode)(e, t2), _ItemPointerCompare = Module._ItemPointerCompare = (e, t2) => (_ItemPointerCompare = Module._ItemPointerCompare = wasmExports.ItemPointerCompare)(e, t2), _LockPage = Module._LockPage = (e, t2, r2) => (_LockPage = Module._LockPage = wasmExports.LockPage)(e, t2, r2), _UnlockPage = Module._UnlockPage = (e, t2, r2) => (_UnlockPage = Module._UnlockPage = wasmExports.UnlockPage)(e, t2, r2), _vacuum_delay_point = Module._vacuum_delay_point = () => (_vacuum_delay_point = Module._vacuum_delay_point = wasmExports.vacuum_delay_point)(), _RecordFreeIndexPage = Module._RecordFreeIndexPage = (e, t2) => (_RecordFreeIndexPage = Module._RecordFreeIndexPage = wasmExports.RecordFreeIndexPage)(e, t2), _IndexFreeSpaceMapVacuum = Module._IndexFreeSpaceMapVacuum = (e) => (_IndexFreeSpaceMapVacuum = Module._IndexFreeSpaceMapVacuum = wasmExports.IndexFreeSpaceMapVacuum)(e), _pg_prng_double = Module._pg_prng_double = (e) => (_pg_prng_double = Module._pg_prng_double = wasmExports.pg_prng_double)(e), _log_newpage_range = Module._log_newpage_range = (e, t2, r2, a2, o5) => (_log_newpage_range = Module._log_newpage_range = wasmExports.log_newpage_range)(e, t2, r2, a2, o5), _GetFreeIndexPage = Module._GetFreeIndexPage = (e) => (_GetFreeIndexPage = Module._GetFreeIndexPage = wasmExports.GetFreeIndexPage)(e), _ConditionalLockBuffer = Module._ConditionalLockBuffer = (e) => (_ConditionalLockBuffer = Module._ConditionalLockBuffer = wasmExports.ConditionalLockBuffer)(e), _LockBufferForCleanup = Module._LockBufferForCleanup = (e) => (_LockBufferForCleanup = Module._LockBufferForCleanup = wasmExports.LockBufferForCleanup)(e), _gistcheckpage = Module._gistcheckpage = (e, t2) => (_gistcheckpage = Module._gistcheckpage = wasmExports.gistcheckpage)(e, t2), _PageIndexMultiDelete = Module._PageIndexMultiDelete = (e, t2, r2) => (_PageIndexMultiDelete = Module._PageIndexMultiDelete = wasmExports.PageIndexMultiDelete)(e, t2, r2), _list_make1_impl = Module._list_make1_impl = (e, t2) => (_list_make1_impl = Module._list_make1_impl = wasmExports.list_make1_impl)(e, t2), _lcons = Module._lcons = (e, t2) => (_lcons = Module._lcons = wasmExports.lcons)(e, t2), _pow = Module._pow = (e, t2) => (_pow = Module._pow = wasmExports.pow)(e, t2), _smgrnblocks = Module._smgrnblocks = (e, t2) => (_smgrnblocks = Module._smgrnblocks = wasmExports.smgrnblocks)(e, t2), _list_free_deep = Module._list_free_deep = (e) => (_list_free_deep = Module._list_free_deep = wasmExports.list_free_deep)(e), _pairingheap_remove_first = Module._pairingheap_remove_first = (e) => (_pairingheap_remove_first = Module._pairingheap_remove_first = wasmExports.pairingheap_remove_first)(e), _pairingheap_add = Module._pairingheap_add = (e, t2) => (_pairingheap_add = Module._pairingheap_add = wasmExports.pairingheap_add)(e, t2), _float_overflow_error = Module._float_overflow_error = () => (_float_overflow_error = Module._float_overflow_error = wasmExports.float_overflow_error)(), _float_underflow_error = Module._float_underflow_error = () => (_float_underflow_error = Module._float_underflow_error = wasmExports.float_underflow_error)(), _DirectFunctionCall5Coll = Module._DirectFunctionCall5Coll = (e, t2, r2, a2, o5, _5, s5) => (_DirectFunctionCall5Coll = Module._DirectFunctionCall5Coll = wasmExports.DirectFunctionCall5Coll)(e, t2, r2, a2, o5, _5, s5), _pairingheap_allocate = Module._pairingheap_allocate = (e, t2) => (_pairingheap_allocate = Module._pairingheap_allocate = wasmExports.pairingheap_allocate)(e, t2), _GenerationContextCreate = Module._GenerationContextCreate = (e, t2, r2, a2, o5) => (_GenerationContextCreate = Module._GenerationContextCreate = wasmExports.GenerationContextCreate)(e, t2, r2, a2, o5), _pgstat_progress_update_param = Module._pgstat_progress_update_param = (e, t2) => (_pgstat_progress_update_param = Module._pgstat_progress_update_param = wasmExports.pgstat_progress_update_param)(e, t2), __hash_getbuf = Module.__hash_getbuf = (e, t2, r2, a2) => (__hash_getbuf = Module.__hash_getbuf = wasmExports._hash_getbuf)(e, t2, r2, a2), __hash_relbuf = Module.__hash_relbuf = (e, t2) => (__hash_relbuf = Module.__hash_relbuf = wasmExports._hash_relbuf)(e, t2), __hash_get_indextuple_hashkey = Module.__hash_get_indextuple_hashkey = (e) => (__hash_get_indextuple_hashkey = Module.__hash_get_indextuple_hashkey = wasmExports._hash_get_indextuple_hashkey)(e), __hash_getbuf_with_strategy = Module.__hash_getbuf_with_strategy = (e, t2, r2, a2, o5) => (__hash_getbuf_with_strategy = Module.__hash_getbuf_with_strategy = wasmExports._hash_getbuf_with_strategy)(e, t2, r2, a2, o5), _FlushOneBuffer = Module._FlushOneBuffer = (e) => (_FlushOneBuffer = Module._FlushOneBuffer = wasmExports.FlushOneBuffer)(e), _hashcharextended = Module._hashcharextended = (e) => (_hashcharextended = Module._hashcharextended = wasmExports.hashcharextended)(e), _hashint8 = Module._hashint8 = (e) => (_hashint8 = Module._hashint8 = wasmExports.hashint8)(e), _hashint8extended = Module._hashint8extended = (e) => (_hashint8extended = Module._hashint8extended = wasmExports.hashint8extended)(e), _hash_bytes_extended = Module._hash_bytes_extended = (e, t2, r2) => (_hash_bytes_extended = Module._hash_bytes_extended = wasmExports.hash_bytes_extended)(e, t2, r2), _hashfloat8 = Module._hashfloat8 = (e) => (_hashfloat8 = Module._hashfloat8 = wasmExports.hashfloat8)(e), _hashfloat8extended = Module._hashfloat8extended = (e) => (_hashfloat8extended = Module._hashfloat8extended = wasmExports.hashfloat8extended)(e), __hash_ovflblkno_to_bitno = Module.__hash_ovflblkno_to_bitno = (e, t2) => (__hash_ovflblkno_to_bitno = Module.__hash_ovflblkno_to_bitno = wasmExports._hash_ovflblkno_to_bitno)(e, t2), _hash_destroy = Module._hash_destroy = (e) => (_hash_destroy = Module._hash_destroy = wasmExports.hash_destroy)(e), _OidFunctionCall1Coll = Module._OidFunctionCall1Coll = (e, t2, r2) => (_OidFunctionCall1Coll = Module._OidFunctionCall1Coll = wasmExports.OidFunctionCall1Coll)(e, t2, r2), _list_member_oid = Module._list_member_oid = (e, t2) => (_list_member_oid = Module._list_member_oid = wasmExports.list_member_oid)(e, t2), _CommandCounterIncrement = Module._CommandCounterIncrement = () => (_CommandCounterIncrement = Module._CommandCounterIncrement = wasmExports.CommandCounterIncrement)(), _list_concat_copy = Module._list_concat_copy = (e, t2) => (_list_concat_copy = Module._list_concat_copy = wasmExports.list_concat_copy)(e, t2), _HeapTupleSatisfiesVisibility = Module._HeapTupleSatisfiesVisibility = (e, t2, r2) => (_HeapTupleSatisfiesVisibility = Module._HeapTupleSatisfiesVisibility = wasmExports.HeapTupleSatisfiesVisibility)(e, t2, r2), _read_stream_begin_relation = Module._read_stream_begin_relation = (e, t2, r2, a2, o5, _5, s5) => (_read_stream_begin_relation = Module._read_stream_begin_relation = wasmExports.read_stream_begin_relation)(e, t2, r2, a2, o5, _5, s5), _GetAccessStrategy = Module._GetAccessStrategy = (e) => (_GetAccessStrategy = Module._GetAccessStrategy = wasmExports.GetAccessStrategy)(e), _FreeAccessStrategy = Module._FreeAccessStrategy = (e) => (_FreeAccessStrategy = Module._FreeAccessStrategy = wasmExports.FreeAccessStrategy)(e), _read_stream_end = Module._read_stream_end = (e) => (_read_stream_end = Module._read_stream_end = wasmExports.read_stream_end)(e), _heap_getnext = Module._heap_getnext = (e, t2) => (_heap_getnext = Module._heap_getnext = wasmExports.heap_getnext)(e, t2), _heap_fetch = Module._heap_fetch = (e, t2, r2, a2, o5) => (_heap_fetch = Module._heap_fetch = wasmExports.heap_fetch)(e, t2, r2, a2, o5), _HeapTupleSatisfiesVacuum = Module._HeapTupleSatisfiesVacuum = (e, t2, r2) => (_HeapTupleSatisfiesVacuum = Module._HeapTupleSatisfiesVacuum = wasmExports.HeapTupleSatisfiesVacuum)(e, t2, r2), _GetMultiXactIdMembers = Module._GetMultiXactIdMembers = (e, t2, r2, a2) => (_GetMultiXactIdMembers = Module._GetMultiXactIdMembers = wasmExports.GetMultiXactIdMembers)(e, t2, r2, a2), _TransactionIdPrecedes = Module._TransactionIdPrecedes = (e, t2) => (_TransactionIdPrecedes = Module._TransactionIdPrecedes = wasmExports.TransactionIdPrecedes)(e, t2), _HeapTupleGetUpdateXid = Module._HeapTupleGetUpdateXid = (e) => (_HeapTupleGetUpdateXid = Module._HeapTupleGetUpdateXid = wasmExports.HeapTupleGetUpdateXid)(e), _GetBulkInsertState = Module._GetBulkInsertState = () => (_GetBulkInsertState = Module._GetBulkInsertState = wasmExports.GetBulkInsertState)(), _FreeBulkInsertState = Module._FreeBulkInsertState = (e) => (_FreeBulkInsertState = Module._FreeBulkInsertState = wasmExports.FreeBulkInsertState)(e), _visibilitymap_clear = Module._visibilitymap_clear = (e, t2, r2, a2) => (_visibilitymap_clear = Module._visibilitymap_clear = wasmExports.visibilitymap_clear)(e, t2, r2, a2), _pgstat_count_heap_insert = Module._pgstat_count_heap_insert = (e, t2) => (_pgstat_count_heap_insert = Module._pgstat_count_heap_insert = wasmExports.pgstat_count_heap_insert)(e, t2), _heap_multi_insert = Module._heap_multi_insert = (e, t2, r2, a2, o5, _5) => (_heap_multi_insert = Module._heap_multi_insert = wasmExports.heap_multi_insert)(e, t2, r2, a2, o5, _5), _ExecFetchSlotHeapTuple = Module._ExecFetchSlotHeapTuple = (e, t2, r2) => (_ExecFetchSlotHeapTuple = Module._ExecFetchSlotHeapTuple = wasmExports.ExecFetchSlotHeapTuple)(e, t2, r2), _PageGetHeapFreeSpace = Module._PageGetHeapFreeSpace = (e) => (_PageGetHeapFreeSpace = Module._PageGetHeapFreeSpace = wasmExports.PageGetHeapFreeSpace)(e), _heap_delete = Module._heap_delete = (e, t2, r2, a2, o5, _5, s5) => (_heap_delete = Module._heap_delete = wasmExports.heap_delete)(e, t2, r2, a2, o5, _5, s5), _visibilitymap_pin = Module._visibilitymap_pin = (e, t2, r2) => (_visibilitymap_pin = Module._visibilitymap_pin = wasmExports.visibilitymap_pin)(e, t2, r2), _HeapTupleSatisfiesUpdate = Module._HeapTupleSatisfiesUpdate = (e, t2, r2) => (_HeapTupleSatisfiesUpdate = Module._HeapTupleSatisfiesUpdate = wasmExports.HeapTupleSatisfiesUpdate)(e, t2, r2), _TransactionIdIsCurrentTransactionId = Module._TransactionIdIsCurrentTransactionId = (e) => (_TransactionIdIsCurrentTransactionId = Module._TransactionIdIsCurrentTransactionId = wasmExports.TransactionIdIsCurrentTransactionId)(e), _TransactionIdDidCommit = Module._TransactionIdDidCommit = (e) => (_TransactionIdDidCommit = Module._TransactionIdDidCommit = wasmExports.TransactionIdDidCommit)(e), _TransactionIdIsInProgress = Module._TransactionIdIsInProgress = (e) => (_TransactionIdIsInProgress = Module._TransactionIdIsInProgress = wasmExports.TransactionIdIsInProgress)(e), _bms_free = Module._bms_free = (e) => (_bms_free = Module._bms_free = wasmExports.bms_free)(e), _bms_add_members = Module._bms_add_members = (e, t2) => (_bms_add_members = Module._bms_add_members = wasmExports.bms_add_members)(e, t2), _bms_next_member = Module._bms_next_member = (e, t2) => (_bms_next_member = Module._bms_next_member = wasmExports.bms_next_member)(e, t2), _bms_overlap = Module._bms_overlap = (e, t2) => (_bms_overlap = Module._bms_overlap = wasmExports.bms_overlap)(e, t2), _heap_lock_tuple = Module._heap_lock_tuple = (e, t2, r2, a2, o5, _5, s5, n3) => (_heap_lock_tuple = Module._heap_lock_tuple = wasmExports.heap_lock_tuple)(e, t2, r2, a2, o5, _5, s5, n3), _MultiXactIdPrecedes = Module._MultiXactIdPrecedes = (e, t2) => (_MultiXactIdPrecedes = Module._MultiXactIdPrecedes = wasmExports.MultiXactIdPrecedes)(e, t2), _heap_tuple_needs_eventual_freeze = Module._heap_tuple_needs_eventual_freeze = (e) => (_heap_tuple_needs_eventual_freeze = Module._heap_tuple_needs_eventual_freeze = wasmExports.heap_tuple_needs_eventual_freeze)(e), _PrefetchBuffer = Module._PrefetchBuffer = (e, t2, r2, a2) => (_PrefetchBuffer = Module._PrefetchBuffer = wasmExports.PrefetchBuffer)(e, t2, r2, a2), _XLogRecGetBlockTagExtended = Module._XLogRecGetBlockTagExtended = (e, t2, r2, a2, o5, _5) => (_XLogRecGetBlockTagExtended = Module._XLogRecGetBlockTagExtended = wasmExports.XLogRecGetBlockTagExtended)(e, t2, r2, a2, o5, _5), _read_stream_next_buffer = Module._read_stream_next_buffer = (e, t2) => (_read_stream_next_buffer = Module._read_stream_next_buffer = wasmExports.read_stream_next_buffer)(e, t2), _FlushRelationBuffers = Module._FlushRelationBuffers = (e) => (_FlushRelationBuffers = Module._FlushRelationBuffers = wasmExports.FlushRelationBuffers)(e), _smgrexists = Module._smgrexists = (e, t2) => (_smgrexists = Module._smgrexists = wasmExports.smgrexists)(e, t2), _table_slot_create = Module._table_slot_create = (e, t2) => (_table_slot_create = Module._table_slot_create = wasmExports.table_slot_create)(e, t2), _ExecDropSingleTupleTableSlot = Module._ExecDropSingleTupleTableSlot = (e) => (_ExecDropSingleTupleTableSlot = Module._ExecDropSingleTupleTableSlot = wasmExports.ExecDropSingleTupleTableSlot)(e), _CreateExecutorState = Module._CreateExecutorState = () => (_CreateExecutorState = Module._CreateExecutorState = wasmExports.CreateExecutorState)(), _MakePerTupleExprContext = Module._MakePerTupleExprContext = (e) => (_MakePerTupleExprContext = Module._MakePerTupleExprContext = wasmExports.MakePerTupleExprContext)(e), _ExecPrepareQual = Module._ExecPrepareQual = (e, t2) => (_ExecPrepareQual = Module._ExecPrepareQual = wasmExports.ExecPrepareQual)(e, t2), _GetOldestNonRemovableTransactionId = Module._GetOldestNonRemovableTransactionId = (e) => (_GetOldestNonRemovableTransactionId = Module._GetOldestNonRemovableTransactionId = wasmExports.GetOldestNonRemovableTransactionId)(e), _FreeExecutorState = Module._FreeExecutorState = (e) => (_FreeExecutorState = Module._FreeExecutorState = wasmExports.FreeExecutorState)(e), _MakeSingleTupleTableSlot = Module._MakeSingleTupleTableSlot = (e, t2) => (_MakeSingleTupleTableSlot = Module._MakeSingleTupleTableSlot = wasmExports.MakeSingleTupleTableSlot)(e, t2), _tuplesort_getdatum = Module._tuplesort_getdatum = (e, t2, r2, a2, o5, _5) => (_tuplesort_getdatum = Module._tuplesort_getdatum = wasmExports.tuplesort_getdatum)(e, t2, r2, a2, o5, _5), _ExecStoreHeapTuple = Module._ExecStoreHeapTuple = (e, t2, r2) => (_ExecStoreHeapTuple = Module._ExecStoreHeapTuple = wasmExports.ExecStoreHeapTuple)(e, t2, r2), _visibilitymap_get_status = Module._visibilitymap_get_status = (e, t2, r2) => (_visibilitymap_get_status = Module._visibilitymap_get_status = wasmExports.visibilitymap_get_status)(e, t2, r2), _ExecStoreAllNullTuple = Module._ExecStoreAllNullTuple = (e) => (_ExecStoreAllNullTuple = Module._ExecStoreAllNullTuple = wasmExports.ExecStoreAllNullTuple)(e), _XidInMVCCSnapshot = Module._XidInMVCCSnapshot = (e, t2) => (_XidInMVCCSnapshot = Module._XidInMVCCSnapshot = wasmExports.XidInMVCCSnapshot)(e, t2), _bsearch = Module._bsearch = (e, t2, r2, a2, o5) => (_bsearch = Module._bsearch = wasmExports.bsearch)(e, t2, r2, a2, o5), _hash_seq_init = Module._hash_seq_init = (e, t2) => (_hash_seq_init = Module._hash_seq_init = wasmExports.hash_seq_init)(e, t2), _hash_seq_search = Module._hash_seq_search = (e) => (_hash_seq_search = Module._hash_seq_search = wasmExports.hash_seq_search)(e), _errcode_for_file_access = Module._errcode_for_file_access = () => (_errcode_for_file_access = Module._errcode_for_file_access = wasmExports.errcode_for_file_access)(), _pg_snprintf = Module._pg_snprintf = (e, t2, r2, a2) => (_pg_snprintf = Module._pg_snprintf = wasmExports.pg_snprintf)(e, t2, r2, a2), _OpenTransientFile = Module._OpenTransientFile = (e, t2) => (_OpenTransientFile = Module._OpenTransientFile = wasmExports.OpenTransientFile)(e, t2), _ftruncate = Module._ftruncate = (e, t2) => (_ftruncate = Module._ftruncate = wasmExports.ftruncate)(e, t2), ___errno_location = Module.___errno_location = () => (___errno_location = Module.___errno_location = wasmExports.__errno_location)(), _pwrite = Module._pwrite = (e, t2, r2, a2) => (_pwrite = Module._pwrite = wasmExports.pwrite)(e, t2, r2, a2), _CloseTransientFile = Module._CloseTransientFile = (e) => (_CloseTransientFile = Module._CloseTransientFile = wasmExports.CloseTransientFile)(e), _sscanf = Module._sscanf = (e, t2, r2) => (_sscanf = Module._sscanf = wasmExports.sscanf)(e, t2, r2), _unlink = Module._unlink = (e) => (_unlink = Module._unlink = wasmExports.unlink)(e), _fsync_fname = Module._fsync_fname = (e, t2) => (_fsync_fname = Module._fsync_fname = wasmExports.fsync_fname)(e, t2), _GetCurrentTimestamp = Module._GetCurrentTimestamp = () => (_GetCurrentTimestamp = Module._GetCurrentTimestamp = wasmExports.GetCurrentTimestamp)(), _get_namespace_name = Module._get_namespace_name = (e) => (_get_namespace_name = Module._get_namespace_name = wasmExports.get_namespace_name)(e), _GetRecordedFreeSpace = Module._GetRecordedFreeSpace = (e, t2) => (_GetRecordedFreeSpace = Module._GetRecordedFreeSpace = wasmExports.GetRecordedFreeSpace)(e, t2), _vac_estimate_reltuples = Module._vac_estimate_reltuples = (e, t2, r2, a2) => (_vac_estimate_reltuples = Module._vac_estimate_reltuples = wasmExports.vac_estimate_reltuples)(e, t2, r2, a2), _WaitLatch = Module._WaitLatch = (e, t2, r2, a2) => (_WaitLatch = Module._WaitLatch = wasmExports.WaitLatch)(e, t2, r2, a2), _ResetLatch = Module._ResetLatch = (e) => (_ResetLatch = Module._ResetLatch = wasmExports.ResetLatch)(e), _clock_gettime = Module._clock_gettime = (e, t2) => (_clock_gettime = Module._clock_gettime = wasmExports.clock_gettime)(e, t2), _WalUsageAccumDiff = Module._WalUsageAccumDiff = (e, t2, r2) => (_WalUsageAccumDiff = Module._WalUsageAccumDiff = wasmExports.WalUsageAccumDiff)(e, t2, r2), _BufferUsageAccumDiff = Module._BufferUsageAccumDiff = (e, t2, r2) => (_BufferUsageAccumDiff = Module._BufferUsageAccumDiff = wasmExports.BufferUsageAccumDiff)(e, t2, r2), _appendStringInfoString = Module._appendStringInfoString = (e, t2) => (_appendStringInfoString = Module._appendStringInfoString = wasmExports.appendStringInfoString)(e, t2), _set_errcontext_domain = Module._set_errcontext_domain = (e) => (_set_errcontext_domain = Module._set_errcontext_domain = wasmExports.set_errcontext_domain)(e), _errcontext_msg = Module._errcontext_msg = (e, t2) => (_errcontext_msg = Module._errcontext_msg = wasmExports.errcontext_msg)(e, t2), _visibilitymap_prepare_truncate = Module._visibilitymap_prepare_truncate = (e, t2) => (_visibilitymap_prepare_truncate = Module._visibilitymap_prepare_truncate = wasmExports.visibilitymap_prepare_truncate)(e, t2), _check_enable_rls = Module._check_enable_rls = (e, t2, r2) => (_check_enable_rls = Module._check_enable_rls = wasmExports.check_enable_rls)(e, t2, r2), _pg_class_aclcheck = Module._pg_class_aclcheck = (e, t2, r2) => (_pg_class_aclcheck = Module._pg_class_aclcheck = wasmExports.pg_class_aclcheck)(e, t2, r2), _btboolcmp = Module._btboolcmp = (e) => (_btboolcmp = Module._btboolcmp = wasmExports.btboolcmp)(e), _btint2cmp = Module._btint2cmp = (e) => (_btint2cmp = Module._btint2cmp = wasmExports.btint2cmp)(e), _btint4cmp = Module._btint4cmp = (e) => (_btint4cmp = Module._btint4cmp = wasmExports.btint4cmp)(e), _btint8cmp = Module._btint8cmp = (e) => (_btint8cmp = Module._btint8cmp = wasmExports.btint8cmp)(e), _btoidcmp = Module._btoidcmp = (e) => (_btoidcmp = Module._btoidcmp = wasmExports.btoidcmp)(e), _btcharcmp = Module._btcharcmp = (e) => (_btcharcmp = Module._btcharcmp = wasmExports.btcharcmp)(e), __bt_form_posting = Module.__bt_form_posting = (e, t2, r2) => (__bt_form_posting = Module.__bt_form_posting = wasmExports._bt_form_posting)(e, t2, r2), __bt_mkscankey = Module.__bt_mkscankey = (e, t2) => (__bt_mkscankey = Module.__bt_mkscankey = wasmExports._bt_mkscankey)(e, t2), __bt_checkpage = Module.__bt_checkpage = (e, t2) => (__bt_checkpage = Module.__bt_checkpage = wasmExports._bt_checkpage)(e, t2), __bt_compare = Module.__bt_compare = (e, t2, r2, a2) => (__bt_compare = Module.__bt_compare = wasmExports._bt_compare)(e, t2, r2, a2), __bt_relbuf = Module.__bt_relbuf = (e, t2) => (__bt_relbuf = Module.__bt_relbuf = wasmExports._bt_relbuf)(e, t2), __bt_search = Module.__bt_search = (e, t2, r2, a2, o5) => (__bt_search = Module.__bt_search = wasmExports._bt_search)(e, t2, r2, a2, o5), __bt_binsrch_insert = Module.__bt_binsrch_insert = (e, t2) => (__bt_binsrch_insert = Module.__bt_binsrch_insert = wasmExports._bt_binsrch_insert)(e, t2), __bt_freestack = Module.__bt_freestack = (e) => (__bt_freestack = Module.__bt_freestack = wasmExports._bt_freestack)(e), _pg_prng_uint32 = Module._pg_prng_uint32 = (e) => (_pg_prng_uint32 = Module._pg_prng_uint32 = wasmExports.pg_prng_uint32)(e), __bt_metaversion = Module.__bt_metaversion = (e, t2, r2) => (__bt_metaversion = Module.__bt_metaversion = wasmExports._bt_metaversion)(e, t2, r2), __bt_allequalimage = Module.__bt_allequalimage = (e, t2) => (__bt_allequalimage = Module.__bt_allequalimage = wasmExports._bt_allequalimage)(e, t2), ___wasm_setjmp_test = Module.___wasm_setjmp_test = (e, t2) => (___wasm_setjmp_test = Module.___wasm_setjmp_test = wasmExports.__wasm_setjmp_test)(e, t2), _before_shmem_exit = Module._before_shmem_exit = (e, t2) => (_before_shmem_exit = Module._before_shmem_exit = wasmExports.before_shmem_exit)(e, t2), ___wasm_setjmp = Module.___wasm_setjmp = (e, t2, r2) => (___wasm_setjmp = Module.___wasm_setjmp = wasmExports.__wasm_setjmp)(e, t2, r2), _cancel_before_shmem_exit = Module._cancel_before_shmem_exit = (e, t2) => (_cancel_before_shmem_exit = Module._cancel_before_shmem_exit = wasmExports.cancel_before_shmem_exit)(e, t2), _pg_re_throw = Module._pg_re_throw = () => (_pg_re_throw = Module._pg_re_throw = wasmExports.pg_re_throw)(), _emscripten_longjmp = Module._emscripten_longjmp = (e, t2) => (_emscripten_longjmp = Module._emscripten_longjmp = wasmExports.emscripten_longjmp)(e, t2), _get_opfamily_member = Module._get_opfamily_member = (e, t2, r2, a2) => (_get_opfamily_member = Module._get_opfamily_member = wasmExports.get_opfamily_member)(e, t2, r2, a2), _time = Module._time = (e) => (_time = Module._time = wasmExports.time)(e), _datum_image_eq = Module._datum_image_eq = (e, t2, r2, a2) => (_datum_image_eq = Module._datum_image_eq = wasmExports.datum_image_eq)(e, t2, r2, a2), __bt_check_natts = Module.__bt_check_natts = (e, t2, r2, a2) => (__bt_check_natts = Module.__bt_check_natts = wasmExports._bt_check_natts)(e, t2, r2, a2), _strlcpy = Module._strlcpy = (e, t2, r2) => (_strlcpy = Module._strlcpy = wasmExports.strlcpy)(e, t2, r2), _strncpy = Module._strncpy = (e, t2, r2) => (_strncpy = Module._strncpy = wasmExports.strncpy)(e, t2, r2), _timestamptz_to_str = Module._timestamptz_to_str = (e) => (_timestamptz_to_str = Module._timestamptz_to_str = wasmExports.timestamptz_to_str)(e), _XLogRecGetBlockRefInfo = Module._XLogRecGetBlockRefInfo = (e, t2, r2, a2, o5) => (_XLogRecGetBlockRefInfo = Module._XLogRecGetBlockRefInfo = wasmExports.XLogRecGetBlockRefInfo)(e, t2, r2, a2, o5), _varstr_cmp = Module._varstr_cmp = (e, t2, r2, a2, o5) => (_varstr_cmp = Module._varstr_cmp = wasmExports.varstr_cmp)(e, t2, r2, a2, o5), _getBaseType = Module._getBaseType = (e) => (_getBaseType = Module._getBaseType = wasmExports.getBaseType)(e), _exprType = Module._exprType = (e) => (_exprType = Module._exprType = wasmExports.exprType)(e), _GetActiveSnapshot = Module._GetActiveSnapshot = () => (_GetActiveSnapshot = Module._GetActiveSnapshot = wasmExports.GetActiveSnapshot)(), _errdetail_relkind_not_supported = Module._errdetail_relkind_not_supported = (e) => (_errdetail_relkind_not_supported = Module._errdetail_relkind_not_supported = wasmExports.errdetail_relkind_not_supported)(e), _table_openrv = Module._table_openrv = (e, t2) => (_table_openrv = Module._table_openrv = wasmExports.table_openrv)(e, t2), _table_slot_callbacks = Module._table_slot_callbacks = (e) => (_table_slot_callbacks = Module._table_slot_callbacks = wasmExports.table_slot_callbacks)(e), _clamp_row_est = Module._clamp_row_est = (e) => (_clamp_row_est = Module._clamp_row_est = wasmExports.clamp_row_est)(e), _pre_format_elog_string = Module._pre_format_elog_string = (e, t2) => (_pre_format_elog_string = Module._pre_format_elog_string = wasmExports.pre_format_elog_string)(e, t2), _format_elog_string = Module._format_elog_string = (e, t2) => (_format_elog_string = Module._format_elog_string = wasmExports.format_elog_string)(e, t2), _IsTransactionState = Module._IsTransactionState = () => (_IsTransactionState = Module._IsTransactionState = wasmExports.IsTransactionState)(), _estimate_expression_value = Module._estimate_expression_value = (e, t2) => (_estimate_expression_value = Module._estimate_expression_value = wasmExports.estimate_expression_value)(e, t2), _SetConfigOption = Module._SetConfigOption = (e, t2, r2, a2) => (_SetConfigOption = Module._SetConfigOption = wasmExports.SetConfigOption)(e, t2, r2, a2), _XLogFlush = Module._XLogFlush = (e) => (_XLogFlush = Module._XLogFlush = wasmExports.XLogFlush)(e), _get_call_result_type = Module._get_call_result_type = (e, t2, r2) => (_get_call_result_type = Module._get_call_result_type = wasmExports.get_call_result_type)(e, t2, r2), _HeapTupleHeaderGetDatum = Module._HeapTupleHeaderGetDatum = (e) => (_HeapTupleHeaderGetDatum = Module._HeapTupleHeaderGetDatum = wasmExports.HeapTupleHeaderGetDatum)(e), _GenericXLogStart = Module._GenericXLogStart = (e) => (_GenericXLogStart = Module._GenericXLogStart = wasmExports.GenericXLogStart)(e), _GenericXLogRegisterBuffer = Module._GenericXLogRegisterBuffer = (e, t2, r2) => (_GenericXLogRegisterBuffer = Module._GenericXLogRegisterBuffer = wasmExports.GenericXLogRegisterBuffer)(e, t2, r2), _GenericXLogFinish = Module._GenericXLogFinish = (e) => (_GenericXLogFinish = Module._GenericXLogFinish = wasmExports.GenericXLogFinish)(e), _GenericXLogAbort = Module._GenericXLogAbort = (e) => (_GenericXLogAbort = Module._GenericXLogAbort = wasmExports.GenericXLogAbort)(e), _errmsg_plural = Module._errmsg_plural = (e, t2, r2, a2) => (_errmsg_plural = Module._errmsg_plural = wasmExports.errmsg_plural)(e, t2, r2, a2), _ReadNextMultiXactId = Module._ReadNextMultiXactId = () => (_ReadNextMultiXactId = Module._ReadNextMultiXactId = wasmExports.ReadNextMultiXactId)(), _ReadMultiXactIdRange = Module._ReadMultiXactIdRange = (e, t2) => (_ReadMultiXactIdRange = Module._ReadMultiXactIdRange = wasmExports.ReadMultiXactIdRange)(e, t2), _MultiXactIdPrecedesOrEquals = Module._MultiXactIdPrecedesOrEquals = (e, t2) => (_MultiXactIdPrecedesOrEquals = Module._MultiXactIdPrecedesOrEquals = wasmExports.MultiXactIdPrecedesOrEquals)(e, t2), _init_MultiFuncCall = Module._init_MultiFuncCall = (e) => (_init_MultiFuncCall = Module._init_MultiFuncCall = wasmExports.init_MultiFuncCall)(e), _TupleDescGetAttInMetadata = Module._TupleDescGetAttInMetadata = (e) => (_TupleDescGetAttInMetadata = Module._TupleDescGetAttInMetadata = wasmExports.TupleDescGetAttInMetadata)(e), _per_MultiFuncCall = Module._per_MultiFuncCall = (e) => (_per_MultiFuncCall = Module._per_MultiFuncCall = wasmExports.per_MultiFuncCall)(e), _BuildTupleFromCStrings = Module._BuildTupleFromCStrings = (e, t2) => (_BuildTupleFromCStrings = Module._BuildTupleFromCStrings = wasmExports.BuildTupleFromCStrings)(e, t2), _end_MultiFuncCall = Module._end_MultiFuncCall = (e, t2) => (_end_MultiFuncCall = Module._end_MultiFuncCall = wasmExports.end_MultiFuncCall)(e, t2), _GetCurrentSubTransactionId = Module._GetCurrentSubTransactionId = () => (_GetCurrentSubTransactionId = Module._GetCurrentSubTransactionId = wasmExports.GetCurrentSubTransactionId)(), _WaitForBackgroundWorkerShutdown = Module._WaitForBackgroundWorkerShutdown = (e) => (_WaitForBackgroundWorkerShutdown = Module._WaitForBackgroundWorkerShutdown = wasmExports.WaitForBackgroundWorkerShutdown)(e), _RegisterDynamicBackgroundWorker = Module._RegisterDynamicBackgroundWorker = (e, t2) => (_RegisterDynamicBackgroundWorker = Module._RegisterDynamicBackgroundWorker = wasmExports.RegisterDynamicBackgroundWorker)(e, t2), _appendBinaryStringInfo = Module._appendBinaryStringInfo = (e, t2, r2) => (_appendBinaryStringInfo = Module._appendBinaryStringInfo = wasmExports.appendBinaryStringInfo)(e, t2, r2), _pq_getmsgbyte = Module._pq_getmsgbyte = (e) => (_pq_getmsgbyte = Module._pq_getmsgbyte = wasmExports.pq_getmsgbyte)(e), _pq_getmsgint = Module._pq_getmsgint = (e, t2) => (_pq_getmsgint = Module._pq_getmsgint = wasmExports.pq_getmsgint)(e, t2), _pq_getmsgint64 = Module._pq_getmsgint64 = (e) => (_pq_getmsgint64 = Module._pq_getmsgint64 = wasmExports.pq_getmsgint64)(e), _die = Module._die = (e) => (_die = Module._die = wasmExports.die)(e), _BackgroundWorkerUnblockSignals = Module._BackgroundWorkerUnblockSignals = () => (_BackgroundWorkerUnblockSignals = Module._BackgroundWorkerUnblockSignals = wasmExports.BackgroundWorkerUnblockSignals)(), _BackgroundWorkerInitializeConnectionByOid = Module._BackgroundWorkerInitializeConnectionByOid = (e, t2, r2) => (_BackgroundWorkerInitializeConnectionByOid = Module._BackgroundWorkerInitializeConnectionByOid = wasmExports.BackgroundWorkerInitializeConnectionByOid)(e, t2, r2), _GetDatabaseEncoding = Module._GetDatabaseEncoding = () => (_GetDatabaseEncoding = Module._GetDatabaseEncoding = wasmExports.GetDatabaseEncoding)(), _StartTransactionCommand = Module._StartTransactionCommand = () => (_StartTransactionCommand = Module._StartTransactionCommand = wasmExports.StartTransactionCommand)(), _CommitTransactionCommand = Module._CommitTransactionCommand = () => (_CommitTransactionCommand = Module._CommitTransactionCommand = wasmExports.CommitTransactionCommand)(), _PushActiveSnapshot = Module._PushActiveSnapshot = (e) => (_PushActiveSnapshot = Module._PushActiveSnapshot = wasmExports.PushActiveSnapshot)(e), _PopActiveSnapshot = Module._PopActiveSnapshot = () => (_PopActiveSnapshot = Module._PopActiveSnapshot = wasmExports.PopActiveSnapshot)(), _RmgrNotFound = Module._RmgrNotFound = (e) => (_RmgrNotFound = Module._RmgrNotFound = wasmExports.RmgrNotFound)(e), _InitMaterializedSRF = Module._InitMaterializedSRF = (e, t2) => (_InitMaterializedSRF = Module._InitMaterializedSRF = wasmExports.InitMaterializedSRF)(e, t2), _tuplestore_putvalues = Module._tuplestore_putvalues = (e, t2, r2, a2) => (_tuplestore_putvalues = Module._tuplestore_putvalues = wasmExports.tuplestore_putvalues)(e, t2, r2, a2), _pread = Module._pread = (e, t2, r2, a2) => (_pread = Module._pread = wasmExports.pread)(e, t2, r2, a2), _strspn = Module._strspn = (e, t2) => (_strspn = Module._strspn = wasmExports.strspn)(e, t2), _strtoll = Module._strtoll = (e, t2, r2) => (_strtoll = Module._strtoll = wasmExports.strtoll)(e, t2, r2), _AllocateFile = Module._AllocateFile = (e, t2) => (_AllocateFile = Module._AllocateFile = wasmExports.AllocateFile)(e, t2), _ferror = Module._ferror = (e) => (_ferror = Module._ferror = wasmExports.ferror)(e), _FreeFile = Module._FreeFile = (e) => (_FreeFile = Module._FreeFile = wasmExports.FreeFile)(e), _getpid = Module._getpid = () => (_getpid = Module._getpid = wasmExports.getpid)(), _read = Module._read = (e, t2, r2) => (_read = Module._read = wasmExports.read)(e, t2, r2), _write = Module._write = (e, t2, r2) => (_write = Module._write = wasmExports.write)(e, t2, r2), _durable_rename = Module._durable_rename = (e, t2, r2) => (_durable_rename = Module._durable_rename = wasmExports.durable_rename)(e, t2, r2), _BlessTupleDesc = Module._BlessTupleDesc = (e) => (_BlessTupleDesc = Module._BlessTupleDesc = wasmExports.BlessTupleDesc)(e), _fstat = Module._fstat = (e, t2) => (_fstat = Module._fstat = wasmExports.fstat)(e, t2), _superuser_arg = Module._superuser_arg = (e) => (_superuser_arg = Module._superuser_arg = wasmExports.superuser_arg)(e), _wal_segment_close = Module._wal_segment_close = (e) => (_wal_segment_close = Module._wal_segment_close = wasmExports.wal_segment_close)(e), _wal_segment_open = Module._wal_segment_open = (e, t2, r2) => (_wal_segment_open = Module._wal_segment_open = wasmExports.wal_segment_open)(e, t2, r2), _XLogReaderAllocate = Module._XLogReaderAllocate = (e, t2, r2, a2) => (_XLogReaderAllocate = Module._XLogReaderAllocate = wasmExports.XLogReaderAllocate)(e, t2, r2, a2), _XLogReadRecord = Module._XLogReadRecord = (e, t2) => (_XLogReadRecord = Module._XLogReadRecord = wasmExports.XLogReadRecord)(e, t2), _XLogReaderFree = Module._XLogReaderFree = (e) => (_XLogReaderFree = Module._XLogReaderFree = wasmExports.XLogReaderFree)(e), _strtoull = Module._strtoull = (e, t2, r2) => (_strtoull = Module._strtoull = wasmExports.strtoull)(e, t2, r2), _access = Module._access = (e, t2) => (_access = Module._access = wasmExports.access)(e, t2), _GetTopFullTransactionId = Module._GetTopFullTransactionId = () => (_GetTopFullTransactionId = Module._GetTopFullTransactionId = wasmExports.GetTopFullTransactionId)(), _GetCurrentTransactionNestLevel = Module._GetCurrentTransactionNestLevel = () => (_GetCurrentTransactionNestLevel = Module._GetCurrentTransactionNestLevel = wasmExports.GetCurrentTransactionNestLevel)(), _ResourceOwnerCreate = Module._ResourceOwnerCreate = (e, t2) => (_ResourceOwnerCreate = Module._ResourceOwnerCreate = wasmExports.ResourceOwnerCreate)(e, t2), _IsTransactionBlock = Module._IsTransactionBlock = () => (_IsTransactionBlock = Module._IsTransactionBlock = wasmExports.IsTransactionBlock)(), _RegisterXactCallback = Module._RegisterXactCallback = (e, t2) => (_RegisterXactCallback = Module._RegisterXactCallback = wasmExports.RegisterXactCallback)(e, t2), _UnregisterXactCallback = Module._UnregisterXactCallback = (e, t2) => (_UnregisterXactCallback = Module._UnregisterXactCallback = wasmExports.UnregisterXactCallback)(e, t2), _RegisterSubXactCallback = Module._RegisterSubXactCallback = (e, t2) => (_RegisterSubXactCallback = Module._RegisterSubXactCallback = wasmExports.RegisterSubXactCallback)(e, t2), _BeginInternalSubTransaction = Module._BeginInternalSubTransaction = (e) => (_BeginInternalSubTransaction = Module._BeginInternalSubTransaction = wasmExports.BeginInternalSubTransaction)(e), _ReleaseCurrentSubTransaction = Module._ReleaseCurrentSubTransaction = () => (_ReleaseCurrentSubTransaction = Module._ReleaseCurrentSubTransaction = wasmExports.ReleaseCurrentSubTransaction)(), _ResourceOwnerDelete = Module._ResourceOwnerDelete = (e) => (_ResourceOwnerDelete = Module._ResourceOwnerDelete = wasmExports.ResourceOwnerDelete)(e), _RollbackAndReleaseCurrentSubTransaction = Module._RollbackAndReleaseCurrentSubTransaction = () => (_RollbackAndReleaseCurrentSubTransaction = Module._RollbackAndReleaseCurrentSubTransaction = wasmExports.RollbackAndReleaseCurrentSubTransaction)(), _pg_usleep = Module._pg_usleep = (e) => (_pg_usleep = Module._pg_usleep = wasmExports.pg_usleep)(e), _close = Module._close = (e) => (_close = Module._close = wasmExports.close)(e), _ReleaseExternalFD = Module._ReleaseExternalFD = () => (_ReleaseExternalFD = Module._ReleaseExternalFD = wasmExports.ReleaseExternalFD)(), _SplitIdentifierString = Module._SplitIdentifierString = (e, t2, r2) => (_SplitIdentifierString = Module._SplitIdentifierString = wasmExports.SplitIdentifierString)(e, t2, r2), _guc_malloc = Module._guc_malloc = (e, t2) => (_guc_malloc = Module._guc_malloc = wasmExports.guc_malloc)(e, t2), _find_option = Module._find_option = (e, t2, r2, a2) => (_find_option = Module._find_option = wasmExports.find_option)(e, t2, r2, a2), _gettimeofday = Module._gettimeofday = (e, t2) => (_gettimeofday = Module._gettimeofday = wasmExports.gettimeofday)(e, t2), _pg_strong_random = Module._pg_strong_random = (e, t2) => (_pg_strong_random = Module._pg_strong_random = wasmExports.pg_strong_random)(e, t2), _stat = Module._stat = (e, t2) => (_stat = Module._stat = wasmExports.stat)(e, t2), _GetFlushRecPtr = Module._GetFlushRecPtr = (e) => (_GetFlushRecPtr = Module._GetFlushRecPtr = wasmExports.GetFlushRecPtr)(e), _GetXLogReplayRecPtr = Module._GetXLogReplayRecPtr = (e) => (_GetXLogReplayRecPtr = Module._GetXLogReplayRecPtr = wasmExports.GetXLogReplayRecPtr)(e), _TimestampDifferenceMilliseconds = Module._TimestampDifferenceMilliseconds = (e, t2) => (_TimestampDifferenceMilliseconds = Module._TimestampDifferenceMilliseconds = wasmExports.TimestampDifferenceMilliseconds)(e, t2), _strtoul = Module._strtoul = (e, t2, r2) => (_strtoul = Module._strtoul = wasmExports.strtoul)(e, t2, r2), _readlink = Module._readlink = (e, t2, r2) => (_readlink = Module._readlink = wasmExports.readlink)(e, t2, r2), _pg_fprintf = Module._pg_fprintf = (e, t2, r2) => (_pg_fprintf = Module._pg_fprintf = wasmExports.pg_fprintf)(e, t2, r2), _fflush = Module._fflush = (e) => (_fflush = Module._fflush = wasmExports.fflush)(e), _pgl_system = Module._pgl_system = (e) => (_pgl_system = Module._pgl_system = wasmExports.pgl_system)(e), _wait_result_to_str = Module._wait_result_to_str = (e) => (_wait_result_to_str = Module._wait_result_to_str = wasmExports.wait_result_to_str)(e), _replace_percent_placeholders = Module._replace_percent_placeholders = (e, t2, r2, a2) => (_replace_percent_placeholders = Module._replace_percent_placeholders = wasmExports.replace_percent_placeholders)(e, t2, r2, a2), _makeStringInfo = Module._makeStringInfo = () => (_makeStringInfo = Module._makeStringInfo = wasmExports.makeStringInfo)(), _pg_toupper = Module._pg_toupper = (e) => (_pg_toupper = Module._pg_toupper = wasmExports.pg_toupper)(e), _numeric_in = Module._numeric_in = (e) => (_numeric_in = Module._numeric_in = wasmExports.numeric_in)(e), _DirectFunctionCall3Coll = Module._DirectFunctionCall3Coll = (e, t2, r2, a2, o5) => (_DirectFunctionCall3Coll = Module._DirectFunctionCall3Coll = wasmExports.DirectFunctionCall3Coll)(e, t2, r2, a2, o5), _palloc_extended = Module._palloc_extended = (e, t2) => (_palloc_extended = Module._palloc_extended = wasmExports.palloc_extended)(e, t2), _pg_vsnprintf = Module._pg_vsnprintf = (e, t2, r2, a2) => (_pg_vsnprintf = Module._pg_vsnprintf = wasmExports.pg_vsnprintf)(e, t2, r2, a2), _XLogFindNextRecord = Module._XLogFindNextRecord = (e, t2) => (_XLogFindNextRecord = Module._XLogFindNextRecord = wasmExports.XLogFindNextRecord)(e, t2), _RestoreBlockImage = Module._RestoreBlockImage = (e, t2, r2) => (_RestoreBlockImage = Module._RestoreBlockImage = wasmExports.RestoreBlockImage)(e, t2, r2), _timestamptz_in = Module._timestamptz_in = (e) => (_timestamptz_in = Module._timestamptz_in = wasmExports.timestamptz_in)(e), _fscanf = Module._fscanf = (e, t2, r2) => (_fscanf = Module._fscanf = wasmExports.fscanf)(e, t2, r2), _symlink = Module._symlink = (e, t2) => (_symlink = Module._symlink = wasmExports.symlink)(e, t2), _ParseDateTime = Module._ParseDateTime = (e, t2, r2, a2, o5, _5, s5) => (_ParseDateTime = Module._ParseDateTime = wasmExports.ParseDateTime)(e, t2, r2, a2, o5, _5, s5), _DecodeDateTime = Module._DecodeDateTime = (e, t2, r2, a2, o5, _5, s5, n3) => (_DecodeDateTime = Module._DecodeDateTime = wasmExports.DecodeDateTime)(e, t2, r2, a2, o5, _5, s5, n3), _tm2timestamp = Module._tm2timestamp = (e, t2, r2, a2) => (_tm2timestamp = Module._tm2timestamp = wasmExports.tm2timestamp)(e, t2, r2, a2), _XLogRecStoreStats = Module._XLogRecStoreStats = (e, t2) => (_XLogRecStoreStats = Module._XLogRecStoreStats = wasmExports.XLogRecStoreStats)(e, t2), _hash_get_num_entries = Module._hash_get_num_entries = (e) => (_hash_get_num_entries = Module._hash_get_num_entries = wasmExports.hash_get_num_entries)(e), _read_local_xlog_page_no_wait = Module._read_local_xlog_page_no_wait = (e, t2, r2, a2, o5) => (_read_local_xlog_page_no_wait = Module._read_local_xlog_page_no_wait = wasmExports.read_local_xlog_page_no_wait)(e, t2, r2, a2, o5), _escape_json = Module._escape_json = (e, t2) => (_escape_json = Module._escape_json = wasmExports.escape_json)(e, t2), _lstat = Module._lstat = (e, t2) => (_lstat = Module._lstat = wasmExports.lstat)(e, t2), _list_sort = Module._list_sort = (e, t2) => (_list_sort = Module._list_sort = wasmExports.list_sort)(e, t2), _pgl_geteuid = Module._pgl_geteuid = () => (_pgl_geteuid = Module._pgl_geteuid = wasmExports.pgl_geteuid)(), _getegid = Module._getegid = () => (_getegid = Module._getegid = wasmExports.getegid)(), _pg_checksum_page = Module._pg_checksum_page = (e, t2) => (_pg_checksum_page = Module._pg_checksum_page = wasmExports.pg_checksum_page)(e, t2), _CreateDestReceiver = Module._CreateDestReceiver = (e) => (_CreateDestReceiver = Module._CreateDestReceiver = wasmExports.CreateDestReceiver)(e), _bbsink_forward_end_archive = Module._bbsink_forward_end_archive = (e) => (_bbsink_forward_end_archive = Module._bbsink_forward_end_archive = wasmExports.bbsink_forward_end_archive)(e), _bbsink_forward_begin_manifest = Module._bbsink_forward_begin_manifest = (e) => (_bbsink_forward_begin_manifest = Module._bbsink_forward_begin_manifest = wasmExports.bbsink_forward_begin_manifest)(e), _bbsink_forward_end_manifest = Module._bbsink_forward_end_manifest = (e) => (_bbsink_forward_end_manifest = Module._bbsink_forward_end_manifest = wasmExports.bbsink_forward_end_manifest)(e), _bbsink_forward_end_backup = Module._bbsink_forward_end_backup = (e, t2, r2) => (_bbsink_forward_end_backup = Module._bbsink_forward_end_backup = wasmExports.bbsink_forward_end_backup)(e, t2, r2), _bbsink_forward_cleanup = Module._bbsink_forward_cleanup = (e) => (_bbsink_forward_cleanup = Module._bbsink_forward_cleanup = wasmExports.bbsink_forward_cleanup)(e), _MemoryContextAllocExtended = Module._MemoryContextAllocExtended = (e, t2, r2) => (_MemoryContextAllocExtended = Module._MemoryContextAllocExtended = wasmExports.MemoryContextAllocExtended)(e, t2, r2), _appendStringInfoVA = Module._appendStringInfoVA = (e, t2, r2) => (_appendStringInfoVA = Module._appendStringInfoVA = wasmExports.appendStringInfoVA)(e, t2, r2), _list_concat = Module._list_concat = (e, t2) => (_list_concat = Module._list_concat = wasmExports.list_concat)(e, t2), _strrchr = Module._strrchr = (e, t2) => (_strrchr = Module._strrchr = wasmExports.strrchr)(e, t2), _bbsink_forward_begin_backup = Module._bbsink_forward_begin_backup = (e) => (_bbsink_forward_begin_backup = Module._bbsink_forward_begin_backup = wasmExports.bbsink_forward_begin_backup)(e), _bbsink_forward_archive_contents = Module._bbsink_forward_archive_contents = (e, t2) => (_bbsink_forward_archive_contents = Module._bbsink_forward_archive_contents = wasmExports.bbsink_forward_archive_contents)(e, t2), _bbsink_forward_begin_archive = Module._bbsink_forward_begin_archive = (e, t2) => (_bbsink_forward_begin_archive = Module._bbsink_forward_begin_archive = wasmExports.bbsink_forward_begin_archive)(e, t2), _bbsink_forward_manifest_contents = Module._bbsink_forward_manifest_contents = (e, t2) => (_bbsink_forward_manifest_contents = Module._bbsink_forward_manifest_contents = wasmExports.bbsink_forward_manifest_contents)(e, t2), _has_privs_of_role = Module._has_privs_of_role = (e, t2) => (_has_privs_of_role = Module._has_privs_of_role = wasmExports.has_privs_of_role)(e, t2), _BaseBackupAddTarget = Module._BaseBackupAddTarget = (e, t2, r2) => (_BaseBackupAddTarget = Module._BaseBackupAddTarget = wasmExports.BaseBackupAddTarget)(e, t2, r2), _list_copy = Module._list_copy = (e) => (_list_copy = Module._list_copy = wasmExports.list_copy)(e), _tuplestore_puttuple = Module._tuplestore_puttuple = (e, t2) => (_tuplestore_puttuple = Module._tuplestore_puttuple = wasmExports.tuplestore_puttuple)(e, t2), _isatty = Module._isatty = (e) => (_isatty = Module._isatty = wasmExports.isatty)(e), _makeRangeVar = Module._makeRangeVar = (e, t2, r2) => (_makeRangeVar = Module._makeRangeVar = wasmExports.makeRangeVar)(e, t2, r2), _DefineIndex = Module._DefineIndex = (e, t2, r2, a2, o5, _5, s5, n3, l2, d3, u3, g5) => (_DefineIndex = Module._DefineIndex = wasmExports.DefineIndex)(e, t2, r2, a2, o5, _5, s5, n3, l2, d3, u3, g5), _realloc = Module._realloc = (e, t2) => (_realloc = Module._realloc = wasmExports.realloc)(e, t2), _getc = Module._getc = (e) => (_getc = Module._getc = wasmExports.getc)(e), _fread = Module._fread = (e, t2, r2, a2) => (_fread = Module._fread = wasmExports.fread)(e, t2, r2, a2), _clearerr = Module._clearerr = (e) => (_clearerr = Module._clearerr = wasmExports.clearerr)(e), _malloc = Module._malloc = (e) => (_malloc = Module._malloc = wasmExports.malloc)(e), _free = Module._free = (e) => (_free = Module._free = wasmExports.free)(e), _copyObjectImpl = Module._copyObjectImpl = (e) => (_copyObjectImpl = Module._copyObjectImpl = wasmExports.copyObjectImpl)(e), _lappend_oid = Module._lappend_oid = (e, t2) => (_lappend_oid = Module._lappend_oid = wasmExports.lappend_oid)(e, t2), _makeTypeNameFromNameList = Module._makeTypeNameFromNameList = (e) => (_makeTypeNameFromNameList = Module._makeTypeNameFromNameList = wasmExports.makeTypeNameFromNameList)(e), _get_namespace_oid = Module._get_namespace_oid = (e, t2) => (_get_namespace_oid = Module._get_namespace_oid = wasmExports.get_namespace_oid)(e, t2), _SearchSysCache2 = Module._SearchSysCache2 = (e, t2, r2) => (_SearchSysCache2 = Module._SearchSysCache2 = wasmExports.SearchSysCache2)(e, t2, r2), _CatalogTupleUpdate = Module._CatalogTupleUpdate = (e, t2, r2) => (_CatalogTupleUpdate = Module._CatalogTupleUpdate = wasmExports.CatalogTupleUpdate)(e, t2, r2), _get_attnum = Module._get_attnum = (e, t2) => (_get_attnum = Module._get_attnum = wasmExports.get_attnum)(e, t2), _get_rel_name = Module._get_rel_name = (e) => (_get_rel_name = Module._get_rel_name = wasmExports.get_rel_name)(e), _CatalogTupleDelete = Module._CatalogTupleDelete = (e, t2) => (_CatalogTupleDelete = Module._CatalogTupleDelete = wasmExports.CatalogTupleDelete)(e, t2), _SearchSysCache3 = Module._SearchSysCache3 = (e, t2, r2, a2) => (_SearchSysCache3 = Module._SearchSysCache3 = wasmExports.SearchSysCache3)(e, t2, r2, a2), _performDeletion = Module._performDeletion = (e, t2, r2) => (_performDeletion = Module._performDeletion = wasmExports.performDeletion)(e, t2, r2), _CatalogTupleInsert = Module._CatalogTupleInsert = (e, t2) => (_CatalogTupleInsert = Module._CatalogTupleInsert = wasmExports.CatalogTupleInsert)(e, t2), _recordDependencyOn = Module._recordDependencyOn = (e, t2, r2) => (_recordDependencyOn = Module._recordDependencyOn = wasmExports.recordDependencyOn)(e, t2, r2), _get_element_type = Module._get_element_type = (e) => (_get_element_type = Module._get_element_type = wasmExports.get_element_type)(e), _object_aclcheck = Module._object_aclcheck = (e, t2, r2, a2) => (_object_aclcheck = Module._object_aclcheck = wasmExports.object_aclcheck)(e, t2, r2, a2), _isTempNamespace = Module._isTempNamespace = (e) => (_isTempNamespace = Module._isTempNamespace = wasmExports.isTempNamespace)(e), _superuser = Module._superuser = () => (_superuser = Module._superuser = wasmExports.superuser)(), _SearchSysCacheAttName = Module._SearchSysCacheAttName = (e, t2) => (_SearchSysCacheAttName = Module._SearchSysCacheAttName = wasmExports.SearchSysCacheAttName)(e, t2), _new_object_addresses = Module._new_object_addresses = () => (_new_object_addresses = Module._new_object_addresses = wasmExports.new_object_addresses)(), _free_object_addresses = Module._free_object_addresses = (e) => (_free_object_addresses = Module._free_object_addresses = wasmExports.free_object_addresses)(e), _performMultipleDeletions = Module._performMultipleDeletions = (e, t2, r2) => (_performMultipleDeletions = Module._performMultipleDeletions = wasmExports.performMultipleDeletions)(e, t2, r2), _recordDependencyOnExpr = Module._recordDependencyOnExpr = (e, t2, r2, a2) => (_recordDependencyOnExpr = Module._recordDependencyOnExpr = wasmExports.recordDependencyOnExpr)(e, t2, r2, a2), _query_tree_walker_impl = Module._query_tree_walker_impl = (e, t2, r2, a2) => (_query_tree_walker_impl = Module._query_tree_walker_impl = wasmExports.query_tree_walker_impl)(e, t2, r2, a2), _expression_tree_walker_impl = Module._expression_tree_walker_impl = (e, t2, r2) => (_expression_tree_walker_impl = Module._expression_tree_walker_impl = wasmExports.expression_tree_walker_impl)(e, t2, r2), _add_exact_object_address = Module._add_exact_object_address = (e, t2) => (_add_exact_object_address = Module._add_exact_object_address = wasmExports.add_exact_object_address)(e, t2), _get_rel_relkind = Module._get_rel_relkind = (e) => (_get_rel_relkind = Module._get_rel_relkind = wasmExports.get_rel_relkind)(e), _get_typtype = Module._get_typtype = (e) => (_get_typtype = Module._get_typtype = wasmExports.get_typtype)(e), _list_delete_last = Module._list_delete_last = (e) => (_list_delete_last = Module._list_delete_last = wasmExports.list_delete_last)(e), _type_is_collatable = Module._type_is_collatable = (e) => (_type_is_collatable = Module._type_is_collatable = wasmExports.type_is_collatable)(e), _CatalogOpenIndexes = Module._CatalogOpenIndexes = (e) => (_CatalogOpenIndexes = Module._CatalogOpenIndexes = wasmExports.CatalogOpenIndexes)(e), _CatalogCloseIndexes = Module._CatalogCloseIndexes = (e) => (_CatalogCloseIndexes = Module._CatalogCloseIndexes = wasmExports.CatalogCloseIndexes)(e), _get_relname_relid = Module._get_relname_relid = (e, t2) => (_get_relname_relid = Module._get_relname_relid = wasmExports.get_relname_relid)(e, t2), _GetSysCacheOid = Module._GetSysCacheOid = (e, t2, r2, a2, o5, _5) => (_GetSysCacheOid = Module._GetSysCacheOid = wasmExports.GetSysCacheOid)(e, t2, r2, a2, o5, _5), _CheckTableNotInUse = Module._CheckTableNotInUse = (e, t2) => (_CheckTableNotInUse = Module._CheckTableNotInUse = wasmExports.CheckTableNotInUse)(e, t2), _construct_array = Module._construct_array = (e, t2, r2, a2, o5, _5) => (_construct_array = Module._construct_array = wasmExports.construct_array)(e, t2, r2, a2, o5, _5), _make_parsestate = Module._make_parsestate = (e) => (_make_parsestate = Module._make_parsestate = wasmExports.make_parsestate)(e), _addRangeTableEntryForRelation = Module._addRangeTableEntryForRelation = (e, t2, r2, a2, o5, _5) => (_addRangeTableEntryForRelation = Module._addRangeTableEntryForRelation = wasmExports.addRangeTableEntryForRelation)(e, t2, r2, a2, o5, _5), _addNSItemToQuery = Module._addNSItemToQuery = (e, t2, r2, a2, o5) => (_addNSItemToQuery = Module._addNSItemToQuery = wasmExports.addNSItemToQuery)(e, t2, r2, a2, o5), _transformExpr = Module._transformExpr = (e, t2, r2) => (_transformExpr = Module._transformExpr = wasmExports.transformExpr)(e, t2, r2), _coerce_to_boolean = Module._coerce_to_boolean = (e, t2, r2) => (_coerce_to_boolean = Module._coerce_to_boolean = wasmExports.coerce_to_boolean)(e, t2, r2), _assign_expr_collations = Module._assign_expr_collations = (e, t2) => (_assign_expr_collations = Module._assign_expr_collations = wasmExports.assign_expr_collations)(e, t2), _equal = Module._equal = (e, t2) => (_equal = Module._equal = wasmExports.equal)(e, t2), _pull_var_clause = Module._pull_var_clause = (e, t2) => (_pull_var_clause = Module._pull_var_clause = wasmExports.pull_var_clause)(e, t2), _get_attname = Module._get_attname = (e, t2, r2) => (_get_attname = Module._get_attname = wasmExports.get_attname)(e, t2, r2), _coerce_to_target_type = Module._coerce_to_target_type = (e, t2, r2, a2, o5, _5, s5, n3) => (_coerce_to_target_type = Module._coerce_to_target_type = wasmExports.coerce_to_target_type)(e, t2, r2, a2, o5, _5, s5, n3), _nodeToString = Module._nodeToString = (e) => (_nodeToString = Module._nodeToString = wasmExports.nodeToString)(e), _CatalogTupleInsertWithInfo = Module._CatalogTupleInsertWithInfo = (e, t2, r2) => (_CatalogTupleInsertWithInfo = Module._CatalogTupleInsertWithInfo = wasmExports.CatalogTupleInsertWithInfo)(e, t2, r2), _buildoidvector = Module._buildoidvector = (e, t2) => (_buildoidvector = Module._buildoidvector = wasmExports.buildoidvector)(e, t2), _parser_errposition = Module._parser_errposition = (e, t2) => (_parser_errposition = Module._parser_errposition = wasmExports.parser_errposition)(e, t2), _exprTypmod = Module._exprTypmod = (e) => (_exprTypmod = Module._exprTypmod = wasmExports.exprTypmod)(e), _get_base_element_type = Module._get_base_element_type = (e) => (_get_base_element_type = Module._get_base_element_type = wasmExports.get_base_element_type)(e), _SystemFuncName = Module._SystemFuncName = (e) => (_SystemFuncName = Module._SystemFuncName = wasmExports.SystemFuncName)(e), _CreateTrigger = Module._CreateTrigger = (e, t2, r2, a2, o5, _5, s5, n3, l2, d3, u3, g5) => (_CreateTrigger = Module._CreateTrigger = wasmExports.CreateTrigger)(e, t2, r2, a2, o5, _5, s5, n3, l2, d3, u3, g5), _plan_create_index_workers = Module._plan_create_index_workers = (e, t2) => (_plan_create_index_workers = Module._plan_create_index_workers = wasmExports.plan_create_index_workers)(e, t2), _tuplesort_begin_datum = Module._tuplesort_begin_datum = (e, t2, r2, a2, o5, _5, s5) => (_tuplesort_begin_datum = Module._tuplesort_begin_datum = wasmExports.tuplesort_begin_datum)(e, t2, r2, a2, o5, _5, s5), _tuplesort_putdatum = Module._tuplesort_putdatum = (e, t2, r2) => (_tuplesort_putdatum = Module._tuplesort_putdatum = wasmExports.tuplesort_putdatum)(e, t2, r2), _get_rel_namespace = Module._get_rel_namespace = (e) => (_get_rel_namespace = Module._get_rel_namespace = wasmExports.get_rel_namespace)(e), _ExecOpenIndices = Module._ExecOpenIndices = (e, t2) => (_ExecOpenIndices = Module._ExecOpenIndices = wasmExports.ExecOpenIndices)(e, t2), _ExecCloseIndices = Module._ExecCloseIndices = (e) => (_ExecCloseIndices = Module._ExecCloseIndices = wasmExports.ExecCloseIndices)(e), _ConditionalLockRelationOid = Module._ConditionalLockRelationOid = (e, t2) => (_ConditionalLockRelationOid = Module._ConditionalLockRelationOid = wasmExports.ConditionalLockRelationOid)(e, t2), _RelnameGetRelid = Module._RelnameGetRelid = (e) => (_RelnameGetRelid = Module._RelnameGetRelid = wasmExports.RelnameGetRelid)(e), _get_relkind_objtype = Module._get_relkind_objtype = (e) => (_get_relkind_objtype = Module._get_relkind_objtype = wasmExports.get_relkind_objtype)(e), _RelationIsVisible = Module._RelationIsVisible = (e) => (_RelationIsVisible = Module._RelationIsVisible = wasmExports.RelationIsVisible)(e), _TypenameGetTypid = Module._TypenameGetTypid = (e) => (_TypenameGetTypid = Module._TypenameGetTypid = wasmExports.TypenameGetTypid)(e), _get_func_arg_info = Module._get_func_arg_info = (e, t2, r2, a2) => (_get_func_arg_info = Module._get_func_arg_info = wasmExports.get_func_arg_info)(e, t2, r2, a2), _NameListToString = Module._NameListToString = (e) => (_NameListToString = Module._NameListToString = wasmExports.NameListToString)(e), _OpernameGetOprid = Module._OpernameGetOprid = (e, t2, r2) => (_OpernameGetOprid = Module._OpernameGetOprid = wasmExports.OpernameGetOprid)(e, t2, r2), _get_ts_config_oid = Module._get_ts_config_oid = (e, t2) => (_get_ts_config_oid = Module._get_ts_config_oid = wasmExports.get_ts_config_oid)(e, t2), _makeRangeVarFromNameList = Module._makeRangeVarFromNameList = (e) => (_makeRangeVarFromNameList = Module._makeRangeVarFromNameList = wasmExports.makeRangeVarFromNameList)(e), _quote_identifier = Module._quote_identifier = (e) => (_quote_identifier = Module._quote_identifier = wasmExports.quote_identifier)(e), _atoi = Module._atoi = (e) => (_atoi = Module._atoi = wasmExports.atoi)(e), _GetSearchPathMatcher = Module._GetSearchPathMatcher = (e) => (_GetSearchPathMatcher = Module._GetSearchPathMatcher = wasmExports.GetSearchPathMatcher)(e), _SearchPathMatchesCurrentEnvironment = Module._SearchPathMatchesCurrentEnvironment = (e) => (_SearchPathMatchesCurrentEnvironment = Module._SearchPathMatchesCurrentEnvironment = wasmExports.SearchPathMatchesCurrentEnvironment)(e), _get_collation_oid = Module._get_collation_oid = (e, t2) => (_get_collation_oid = Module._get_collation_oid = wasmExports.get_collation_oid)(e, t2), _GetDatabaseEncodingName = Module._GetDatabaseEncodingName = () => (_GetDatabaseEncodingName = Module._GetDatabaseEncodingName = wasmExports.GetDatabaseEncodingName)(), _CacheRegisterSyscacheCallback = Module._CacheRegisterSyscacheCallback = (e, t2, r2) => (_CacheRegisterSyscacheCallback = Module._CacheRegisterSyscacheCallback = wasmExports.CacheRegisterSyscacheCallback)(e, t2, r2), _fetch_search_path = Module._fetch_search_path = (e) => (_fetch_search_path = Module._fetch_search_path = wasmExports.fetch_search_path)(e), _get_object_address = Module._get_object_address = (e, t2, r2, a2, o5, _5) => (_get_object_address = Module._get_object_address = wasmExports.get_object_address)(e, t2, r2, a2, o5, _5), _get_extension_oid = Module._get_extension_oid = (e, t2) => (_get_extension_oid = Module._get_extension_oid = wasmExports.get_extension_oid)(e, t2), _get_role_oid = Module._get_role_oid = (e, t2) => (_get_role_oid = Module._get_role_oid = wasmExports.get_role_oid)(e, t2), _get_am_oid = Module._get_am_oid = (e, t2) => (_get_am_oid = Module._get_am_oid = wasmExports.get_am_oid)(e, t2), _GetForeignServerByName = Module._GetForeignServerByName = (e, t2) => (_GetForeignServerByName = Module._GetForeignServerByName = wasmExports.GetForeignServerByName)(e, t2), _typeStringToTypeName = Module._typeStringToTypeName = (e, t2) => (_typeStringToTypeName = Module._typeStringToTypeName = wasmExports.typeStringToTypeName)(e, t2), _makeFloat = Module._makeFloat = (e) => (_makeFloat = Module._makeFloat = wasmExports.makeFloat)(e), _list_make2_impl = Module._list_make2_impl = (e, t2, r2) => (_list_make2_impl = Module._list_make2_impl = wasmExports.list_make2_impl)(e, t2, r2), _check_object_ownership = Module._check_object_ownership = (e, t2, r2, a2, o5) => (_check_object_ownership = Module._check_object_ownership = wasmExports.check_object_ownership)(e, t2, r2, a2, o5), _GetUserNameFromId = Module._GetUserNameFromId = (e, t2) => (_GetUserNameFromId = Module._GetUserNameFromId = wasmExports.GetUserNameFromId)(e, t2), _format_type_extended = Module._format_type_extended = (e, t2, r2) => (_format_type_extended = Module._format_type_extended = wasmExports.format_type_extended)(e, t2, r2), _quote_qualified_identifier = Module._quote_qualified_identifier = (e, t2) => (_quote_qualified_identifier = Module._quote_qualified_identifier = wasmExports.quote_qualified_identifier)(e, t2), _get_tablespace_name = Module._get_tablespace_name = (e) => (_get_tablespace_name = Module._get_tablespace_name = wasmExports.get_tablespace_name)(e), _GetForeignServerExtended = Module._GetForeignServerExtended = (e, t2) => (_GetForeignServerExtended = Module._GetForeignServerExtended = wasmExports.GetForeignServerExtended)(e, t2), _GetForeignServer = Module._GetForeignServer = (e) => (_GetForeignServer = Module._GetForeignServer = wasmExports.GetForeignServer)(e), _get_extension_name = Module._get_extension_name = (e) => (_get_extension_name = Module._get_extension_name = wasmExports.get_extension_name)(e), _construct_empty_array = Module._construct_empty_array = (e) => (_construct_empty_array = Module._construct_empty_array = wasmExports.construct_empty_array)(e), _format_type_be_qualified = Module._format_type_be_qualified = (e) => (_format_type_be_qualified = Module._format_type_be_qualified = wasmExports.format_type_be_qualified)(e), _get_namespace_name_or_temp = Module._get_namespace_name_or_temp = (e) => (_get_namespace_name_or_temp = Module._get_namespace_name_or_temp = wasmExports.get_namespace_name_or_temp)(e), _list_make3_impl = Module._list_make3_impl = (e, t2, r2, a2) => (_list_make3_impl = Module._list_make3_impl = wasmExports.list_make3_impl)(e, t2, r2, a2), _construct_md_array = Module._construct_md_array = (e, t2, r2, a2, o5, _5, s5, n3, l2) => (_construct_md_array = Module._construct_md_array = wasmExports.construct_md_array)(e, t2, r2, a2, o5, _5, s5, n3, l2), _pull_varattnos = Module._pull_varattnos = (e, t2, r2) => (_pull_varattnos = Module._pull_varattnos = wasmExports.pull_varattnos)(e, t2, r2), _makeBoolExpr = Module._makeBoolExpr = (e, t2, r2) => (_makeBoolExpr = Module._makeBoolExpr = wasmExports.makeBoolExpr)(e, t2, r2), _eval_const_expressions = Module._eval_const_expressions = (e, t2) => (_eval_const_expressions = Module._eval_const_expressions = wasmExports.eval_const_expressions)(e, t2), _get_func_name = Module._get_func_name = (e) => (_get_func_name = Module._get_func_name = wasmExports.get_func_name)(e), _construct_array_builtin = Module._construct_array_builtin = (e, t2, r2) => (_construct_array_builtin = Module._construct_array_builtin = wasmExports.construct_array_builtin)(e, t2, r2), _makeObjectName = Module._makeObjectName = (e, t2, r2) => (_makeObjectName = Module._makeObjectName = wasmExports.makeObjectName)(e, t2, r2), _get_primary_key_attnos = Module._get_primary_key_attnos = (e, t2, r2) => (_get_primary_key_attnos = Module._get_primary_key_attnos = wasmExports.get_primary_key_attnos)(e, t2, r2), _check_functional_grouping = Module._check_functional_grouping = (e, t2, r2, a2, o5) => (_check_functional_grouping = Module._check_functional_grouping = wasmExports.check_functional_grouping)(e, t2, r2, a2, o5), _bms_is_subset = Module._bms_is_subset = (e, t2) => (_bms_is_subset = Module._bms_is_subset = wasmExports.bms_is_subset)(e, t2), _getExtensionOfObject = Module._getExtensionOfObject = (e, t2) => (_getExtensionOfObject = Module._getExtensionOfObject = wasmExports.getExtensionOfObject)(e, t2), _find_inheritance_children = Module._find_inheritance_children = (e, t2) => (_find_inheritance_children = Module._find_inheritance_children = wasmExports.find_inheritance_children)(e, t2), _lappend_int = Module._lappend_int = (e, t2) => (_lappend_int = Module._lappend_int = wasmExports.lappend_int)(e, t2), _has_superclass = Module._has_superclass = (e) => (_has_superclass = Module._has_superclass = wasmExports.has_superclass)(e), _strstr = Module._strstr = (e, t2) => (_strstr = Module._strstr = wasmExports.strstr)(e, t2), _memchr = Module._memchr = (e, t2, r2) => (_memchr = Module._memchr = wasmExports.memchr)(e, t2, r2), _CheckFunctionValidatorAccess = Module._CheckFunctionValidatorAccess = (e, t2) => (_CheckFunctionValidatorAccess = Module._CheckFunctionValidatorAccess = wasmExports.CheckFunctionValidatorAccess)(e, t2), _AcquireRewriteLocks = Module._AcquireRewriteLocks = (e, t2, r2) => (_AcquireRewriteLocks = Module._AcquireRewriteLocks = wasmExports.AcquireRewriteLocks)(e, t2, r2), _pg_parse_query = Module._pg_parse_query = (e) => (_pg_parse_query = Module._pg_parse_query = wasmExports.pg_parse_query)(e), _function_parse_error_transpose = Module._function_parse_error_transpose = (e) => (_function_parse_error_transpose = Module._function_parse_error_transpose = wasmExports.function_parse_error_transpose)(e), _geterrposition = Module._geterrposition = () => (_geterrposition = Module._geterrposition = wasmExports.geterrposition)(), _getinternalerrposition = Module._getinternalerrposition = () => (_getinternalerrposition = Module._getinternalerrposition = wasmExports.getinternalerrposition)(), _pg_mblen = Module._pg_mblen = (e) => (_pg_mblen = Module._pg_mblen = wasmExports.pg_mblen)(e), _pg_mbstrlen_with_len = Module._pg_mbstrlen_with_len = (e, t2) => (_pg_mbstrlen_with_len = Module._pg_mbstrlen_with_len = wasmExports.pg_mbstrlen_with_len)(e, t2), _errposition = Module._errposition = (e) => (_errposition = Module._errposition = wasmExports.errposition)(e), _internalerrposition = Module._internalerrposition = (e) => (_internalerrposition = Module._internalerrposition = wasmExports.internalerrposition)(e), _internalerrquery = Module._internalerrquery = (e) => (_internalerrquery = Module._internalerrquery = wasmExports.internalerrquery)(e), _list_delete_nth_cell = Module._list_delete_nth_cell = (e, t2) => (_list_delete_nth_cell = Module._list_delete_nth_cell = wasmExports.list_delete_nth_cell)(e, t2), _get_array_type = Module._get_array_type = (e) => (_get_array_type = Module._get_array_type = wasmExports.get_array_type)(e), _pnstrdup = Module._pnstrdup = (e, t2) => (_pnstrdup = Module._pnstrdup = wasmExports.pnstrdup)(e, t2), _smgrtruncate2 = Module._smgrtruncate2 = (e, t2, r2, a2, o5) => (_smgrtruncate2 = Module._smgrtruncate2 = wasmExports.smgrtruncate2)(e, t2, r2, a2, o5), _smgrreadv = Module._smgrreadv = (e, t2, r2, a2, o5) => (_smgrreadv = Module._smgrreadv = wasmExports.smgrreadv)(e, t2, r2, a2, o5), _NewRelationCreateToastTable = Module._NewRelationCreateToastTable = (e, t2) => (_NewRelationCreateToastTable = Module._NewRelationCreateToastTable = wasmExports.NewRelationCreateToastTable)(e, t2), _transformStmt = Module._transformStmt = (e, t2) => (_transformStmt = Module._transformStmt = wasmExports.transformStmt)(e, t2), _free_parsestate = Module._free_parsestate = (e) => (_free_parsestate = Module._free_parsestate = wasmExports.free_parsestate)(e), _makeFromExpr = Module._makeFromExpr = (e, t2) => (_makeFromExpr = Module._makeFromExpr = wasmExports.makeFromExpr)(e, t2), _assign_query_collations = Module._assign_query_collations = (e, t2) => (_assign_query_collations = Module._assign_query_collations = wasmExports.assign_query_collations)(e, t2), _exprLocation = Module._exprLocation = (e) => (_exprLocation = Module._exprLocation = wasmExports.exprLocation)(e), _ParseFuncOrColumn = Module._ParseFuncOrColumn = (e, t2, r2, a2, o5, _5, s5) => (_ParseFuncOrColumn = Module._ParseFuncOrColumn = wasmExports.ParseFuncOrColumn)(e, t2, r2, a2, o5, _5, s5), _exprCollation = Module._exprCollation = (e) => (_exprCollation = Module._exprCollation = wasmExports.exprCollation)(e), _transformSortClause = Module._transformSortClause = (e, t2, r2, a2, o5) => (_transformSortClause = Module._transformSortClause = wasmExports.transformSortClause)(e, t2, r2, a2, o5), _transformDistinctClause = Module._transformDistinctClause = (e, t2, r2, a2) => (_transformDistinctClause = Module._transformDistinctClause = wasmExports.transformDistinctClause)(e, t2, r2, a2), _makeTargetEntry = Module._makeTargetEntry = (e, t2, r2, a2) => (_makeTargetEntry = Module._makeTargetEntry = wasmExports.makeTargetEntry)(e, t2, r2, a2), _select_common_type = Module._select_common_type = (e, t2, r2, a2) => (_select_common_type = Module._select_common_type = wasmExports.select_common_type)(e, t2, r2, a2), _coerce_to_common_type = Module._coerce_to_common_type = (e, t2, r2, a2) => (_coerce_to_common_type = Module._coerce_to_common_type = wasmExports.coerce_to_common_type)(e, t2, r2, a2), _select_common_collation = Module._select_common_collation = (e, t2, r2) => (_select_common_collation = Module._select_common_collation = wasmExports.select_common_collation)(e, t2, r2), _contain_vars_of_level = Module._contain_vars_of_level = (e, t2) => (_contain_vars_of_level = Module._contain_vars_of_level = wasmExports.contain_vars_of_level)(e, t2), _expandNSItemAttrs = Module._expandNSItemAttrs = (e, t2, r2, a2, o5) => (_expandNSItemAttrs = Module._expandNSItemAttrs = wasmExports.expandNSItemAttrs)(e, t2, r2, a2, o5), _makeAlias = Module._makeAlias = (e, t2) => (_makeAlias = Module._makeAlias = wasmExports.makeAlias)(e, t2), _addRangeTableEntryForSubquery = Module._addRangeTableEntryForSubquery = (e, t2, r2, a2, o5) => (_addRangeTableEntryForSubquery = Module._addRangeTableEntryForSubquery = wasmExports.addRangeTableEntryForSubquery)(e, t2, r2, a2, o5), _assign_list_collations = Module._assign_list_collations = (e, t2) => (_assign_list_collations = Module._assign_list_collations = wasmExports.assign_list_collations)(e, t2), _expandNSItemVars = Module._expandNSItemVars = (e, t2, r2, a2, o5) => (_expandNSItemVars = Module._expandNSItemVars = wasmExports.expandNSItemVars)(e, t2, r2, a2, o5), _markTargetListOrigins = Module._markTargetListOrigins = (e, t2) => (_markTargetListOrigins = Module._markTargetListOrigins = wasmExports.markTargetListOrigins)(e, t2), _addRangeTableEntryForJoin = Module._addRangeTableEntryForJoin = (e, t2, r2, a2, o5, _5, s5, n3, l2, d3, u3) => (_addRangeTableEntryForJoin = Module._addRangeTableEntryForJoin = wasmExports.addRangeTableEntryForJoin)(e, t2, r2, a2, o5, _5, s5, n3, l2, d3, u3), _list_truncate = Module._list_truncate = (e, t2) => (_list_truncate = Module._list_truncate = wasmExports.list_truncate)(e, t2), _makeVar = Module._makeVar = (e, t2, r2, a2, o5, _5) => (_makeVar = Module._makeVar = wasmExports.makeVar)(e, t2, r2, a2, o5, _5), _makeNullConst = Module._makeNullConst = (e, t2, r2) => (_makeNullConst = Module._makeNullConst = wasmExports.makeNullConst)(e, t2, r2), _get_sort_group_operators = Module._get_sort_group_operators = (e, t2, r2, a2, o5, _5, s5, n3) => (_get_sort_group_operators = Module._get_sort_group_operators = wasmExports.get_sort_group_operators)(e, t2, r2, a2, o5, _5, s5, n3), _setup_parser_errposition_callback = Module._setup_parser_errposition_callback = (e, t2, r2) => (_setup_parser_errposition_callback = Module._setup_parser_errposition_callback = wasmExports.setup_parser_errposition_callback)(e, t2, r2), _cancel_parser_errposition_callback = Module._cancel_parser_errposition_callback = (e) => (_cancel_parser_errposition_callback = Module._cancel_parser_errposition_callback = wasmExports.cancel_parser_errposition_callback)(e), _locate_var_of_level = Module._locate_var_of_level = (e, t2) => (_locate_var_of_level = Module._locate_var_of_level = wasmExports.locate_var_of_level)(e, t2), _makeBoolean = Module._makeBoolean = (e) => (_makeBoolean = Module._makeBoolean = wasmExports.makeBoolean)(e), _makeInteger = Module._makeInteger = (e) => (_makeInteger = Module._makeInteger = wasmExports.makeInteger)(e), _makeSimpleA_Expr = Module._makeSimpleA_Expr = (e, t2, r2, a2, o5) => (_makeSimpleA_Expr = Module._makeSimpleA_Expr = wasmExports.makeSimpleA_Expr)(e, t2, r2, a2, o5), _makeTypeName = Module._makeTypeName = (e) => (_makeTypeName = Module._makeTypeName = wasmExports.makeTypeName)(e), _SystemTypeName = Module._SystemTypeName = (e) => (_SystemTypeName = Module._SystemTypeName = wasmExports.SystemTypeName)(e), _makeFuncCall = Module._makeFuncCall = (e, t2, r2, a2) => (_makeFuncCall = Module._makeFuncCall = wasmExports.makeFuncCall)(e, t2, r2, a2), _makeA_Expr = Module._makeA_Expr = (e, t2, r2, a2, o5) => (_makeA_Expr = Module._makeA_Expr = wasmExports.makeA_Expr)(e, t2, r2, a2, o5), _list_make4_impl = Module._list_make4_impl = (e, t2, r2, a2, o5) => (_list_make4_impl = Module._list_make4_impl = wasmExports.list_make4_impl)(e, t2, r2, a2, o5), _addTargetToSortList = Module._addTargetToSortList = (e, t2, r2, a2, o5) => (_addTargetToSortList = Module._addTargetToSortList = wasmExports.addTargetToSortList)(e, t2, r2, a2, o5), _locate_agg_of_level = Module._locate_agg_of_level = (e, t2) => (_locate_agg_of_level = Module._locate_agg_of_level = wasmExports.locate_agg_of_level)(e, t2), _list_intersection_int = Module._list_intersection_int = (e, t2) => (_list_intersection_int = Module._list_intersection_int = wasmExports.list_intersection_int)(e, t2), _get_sortgroupclause_tle = Module._get_sortgroupclause_tle = (e, t2) => (_get_sortgroupclause_tle = Module._get_sortgroupclause_tle = wasmExports.get_sortgroupclause_tle)(e, t2), _flatten_join_alias_vars = Module._flatten_join_alias_vars = (e, t2, r2) => (_flatten_join_alias_vars = Module._flatten_join_alias_vars = wasmExports.flatten_join_alias_vars)(e, t2, r2), _list_member_int = Module._list_member_int = (e, t2) => (_list_member_int = Module._list_member_int = wasmExports.list_member_int)(e, t2), _list_union_int = Module._list_union_int = (e, t2) => (_list_union_int = Module._list_union_int = wasmExports.list_union_int)(e, t2), _makeFuncExpr = Module._makeFuncExpr = (e, t2, r2, a2, o5, _5) => (_makeFuncExpr = Module._makeFuncExpr = wasmExports.makeFuncExpr)(e, t2, r2, a2, o5, _5), _get_rte_attribute_name = Module._get_rte_attribute_name = (e, t2) => (_get_rte_attribute_name = Module._get_rte_attribute_name = wasmExports.get_rte_attribute_name)(e, t2), _checkNameSpaceConflicts = Module._checkNameSpaceConflicts = (e, t2, r2) => (_checkNameSpaceConflicts = Module._checkNameSpaceConflicts = wasmExports.checkNameSpaceConflicts)(e, t2, r2), _addRangeTableEntryForENR = Module._addRangeTableEntryForENR = (e, t2, r2) => (_addRangeTableEntryForENR = Module._addRangeTableEntryForENR = wasmExports.addRangeTableEntryForENR)(e, t2, r2), _addRangeTableEntry = Module._addRangeTableEntry = (e, t2, r2, a2, o5) => (_addRangeTableEntry = Module._addRangeTableEntry = wasmExports.addRangeTableEntry)(e, t2, r2, a2, o5), _FigureColname = Module._FigureColname = (e) => (_FigureColname = Module._FigureColname = wasmExports.FigureColname)(e), _coerce_to_specific_type = Module._coerce_to_specific_type = (e, t2, r2, a2) => (_coerce_to_specific_type = Module._coerce_to_specific_type = wasmExports.coerce_to_specific_type)(e, t2, r2, a2), _typenameTypeIdAndMod = Module._typenameTypeIdAndMod = (e, t2, r2, a2) => (_typenameTypeIdAndMod = Module._typenameTypeIdAndMod = wasmExports.typenameTypeIdAndMod)(e, t2, r2, a2), _get_typcollation = Module._get_typcollation = (e) => (_get_typcollation = Module._get_typcollation = wasmExports.get_typcollation)(e), _markNullableIfNeeded = Module._markNullableIfNeeded = (e, t2) => (_markNullableIfNeeded = Module._markNullableIfNeeded = wasmExports.markNullableIfNeeded)(e, t2), _markVarForSelectPriv = Module._markVarForSelectPriv = (e, t2) => (_markVarForSelectPriv = Module._markVarForSelectPriv = wasmExports.markVarForSelectPriv)(e, t2), _coerce_type = Module._coerce_type = (e, t2, r2, a2, o5, _5, s5, n3) => (_coerce_type = Module._coerce_type = wasmExports.coerce_type)(e, t2, r2, a2, o5, _5, s5, n3), _LookupFuncName = Module._LookupFuncName = (e, t2, r2, a2) => (_LookupFuncName = Module._LookupFuncName = wasmExports.LookupFuncName)(e, t2, r2, a2), _addRangeTableEntryForFunction = Module._addRangeTableEntryForFunction = (e, t2, r2, a2, o5, _5, s5) => (_addRangeTableEntryForFunction = Module._addRangeTableEntryForFunction = wasmExports.addRangeTableEntryForFunction)(e, t2, r2, a2, o5, _5, s5), _parserOpenTable = Module._parserOpenTable = (e, t2, r2) => (_parserOpenTable = Module._parserOpenTable = wasmExports.parserOpenTable)(e, t2, r2), _strip_implicit_coercions = Module._strip_implicit_coercions = (e) => (_strip_implicit_coercions = Module._strip_implicit_coercions = wasmExports.strip_implicit_coercions)(e), _colNameToVar = Module._colNameToVar = (e, t2, r2, a2) => (_colNameToVar = Module._colNameToVar = wasmExports.colNameToVar)(e, t2, r2, a2), _op_hashjoinable = Module._op_hashjoinable = (e, t2) => (_op_hashjoinable = Module._op_hashjoinable = wasmExports.op_hashjoinable)(e, t2), _get_commutator = Module._get_commutator = (e) => (_get_commutator = Module._get_commutator = wasmExports.get_commutator)(e), _can_coerce_type = Module._can_coerce_type = (e, t2, r2, a2) => (_can_coerce_type = Module._can_coerce_type = wasmExports.can_coerce_type)(e, t2, r2, a2), _get_sortgroupref_tle = Module._get_sortgroupref_tle = (e, t2) => (_get_sortgroupref_tle = Module._get_sortgroupref_tle = wasmExports.get_sortgroupref_tle)(e, t2), _assignSortGroupRef = Module._assignSortGroupRef = (e, t2) => (_assignSortGroupRef = Module._assignSortGroupRef = wasmExports.assignSortGroupRef)(e, t2), _targetIsInSortList = Module._targetIsInSortList = (e, t2, r2) => (_targetIsInSortList = Module._targetIsInSortList = wasmExports.targetIsInSortList)(e, t2, r2), _contain_aggs_of_level = Module._contain_aggs_of_level = (e, t2) => (_contain_aggs_of_level = Module._contain_aggs_of_level = wasmExports.contain_aggs_of_level)(e, t2), _find_coercion_pathway = Module._find_coercion_pathway = (e, t2, r2, a2) => (_find_coercion_pathway = Module._find_coercion_pathway = wasmExports.find_coercion_pathway)(e, t2, r2, a2), _typeidType = Module._typeidType = (e) => (_typeidType = Module._typeidType = wasmExports.typeidType)(e), _typeTypeCollation = Module._typeTypeCollation = (e) => (_typeTypeCollation = Module._typeTypeCollation = wasmExports.typeTypeCollation)(e), _typeLen = Module._typeLen = (e) => (_typeLen = Module._typeLen = wasmExports.typeLen)(e), _typeByVal = Module._typeByVal = (e) => (_typeByVal = Module._typeByVal = wasmExports.typeByVal)(e), _makeConst = Module._makeConst = (e, t2, r2, a2, o5, _5, s5) => (_makeConst = Module._makeConst = wasmExports.makeConst)(e, t2, r2, a2, o5, _5, s5), _lookup_rowtype_tupdesc = Module._lookup_rowtype_tupdesc = (e, t2) => (_lookup_rowtype_tupdesc = Module._lookup_rowtype_tupdesc = wasmExports.lookup_rowtype_tupdesc)(e, t2), _verify_common_type = Module._verify_common_type = (e, t2) => (_verify_common_type = Module._verify_common_type = wasmExports.verify_common_type)(e, t2), _bms_del_member = Module._bms_del_member = (e, t2) => (_bms_del_member = Module._bms_del_member = wasmExports.bms_del_member)(e, t2), _list_member = Module._list_member = (e, t2) => (_list_member = Module._list_member = wasmExports.list_member)(e, t2), _raw_expression_tree_walker_impl = Module._raw_expression_tree_walker_impl = (e, t2, r2) => (_raw_expression_tree_walker_impl = Module._raw_expression_tree_walker_impl = wasmExports.raw_expression_tree_walker_impl)(e, t2, r2), _type_is_rowtype = Module._type_is_rowtype = (e) => (_type_is_rowtype = Module._type_is_rowtype = wasmExports.type_is_rowtype)(e), _refnameNamespaceItem = Module._refnameNamespaceItem = (e, t2, r2, a2, o5) => (_refnameNamespaceItem = Module._refnameNamespaceItem = wasmExports.refnameNamespaceItem)(e, t2, r2, a2, o5), _scanNSItemForColumn = Module._scanNSItemForColumn = (e, t2, r2, a2, o5) => (_scanNSItemForColumn = Module._scanNSItemForColumn = wasmExports.scanNSItemForColumn)(e, t2, r2, a2, o5), _make_op = Module._make_op = (e, t2, r2, a2, o5, _5) => (_make_op = Module._make_op = wasmExports.make_op)(e, t2, r2, a2, o5, _5), _make_scalar_array_op = Module._make_scalar_array_op = (e, t2, r2, a2, o5, _5) => (_make_scalar_array_op = Module._make_scalar_array_op = wasmExports.make_scalar_array_op)(e, t2, r2, a2, o5, _5), _count_nonjunk_tlist_entries = Module._count_nonjunk_tlist_entries = (e) => (_count_nonjunk_tlist_entries = Module._count_nonjunk_tlist_entries = wasmExports.count_nonjunk_tlist_entries)(e), _makeWholeRowVar = Module._makeWholeRowVar = (e, t2, r2, a2) => (_makeWholeRowVar = Module._makeWholeRowVar = wasmExports.makeWholeRowVar)(e, t2, r2, a2), _expandRTE = Module._expandRTE = (e, t2, r2, a2, o5, _5, s5) => (_expandRTE = Module._expandRTE = wasmExports.expandRTE)(e, t2, r2, a2, o5, _5, s5), _bms_int_members = Module._bms_int_members = (e, t2) => (_bms_int_members = Module._bms_int_members = wasmExports.bms_int_members)(e, t2), _jsonb_in = Module._jsonb_in = (e) => (_jsonb_in = Module._jsonb_in = wasmExports.jsonb_in)(e), _geterrcode = Module._geterrcode = () => (_geterrcode = Module._geterrcode = wasmExports.geterrcode)(), _bit_in = Module._bit_in = (e) => (_bit_in = Module._bit_in = wasmExports.bit_in)(e), _bms_union = Module._bms_union = (e, t2) => (_bms_union = Module._bms_union = wasmExports.bms_union)(e, t2), _varstr_levenshtein_less_equal = Module._varstr_levenshtein_less_equal = (e, t2, r2, a2, o5, _5, s5, n3, l2) => (_varstr_levenshtein_less_equal = Module._varstr_levenshtein_less_equal = wasmExports.varstr_levenshtein_less_equal)(e, t2, r2, a2, o5, _5, s5, n3, l2), _raw_parser = Module._raw_parser = (e, t2) => (_raw_parser = Module._raw_parser = wasmExports.raw_parser)(e, t2), _errsave_start = Module._errsave_start = (e, t2) => (_errsave_start = Module._errsave_start = wasmExports.errsave_start)(e, t2), _errsave_finish = Module._errsave_finish = (e, t2, r2, a2) => (_errsave_finish = Module._errsave_finish = wasmExports.errsave_finish)(e, t2, r2, a2), _makeColumnDef = Module._makeColumnDef = (e, t2, r2, a2) => (_makeColumnDef = Module._makeColumnDef = wasmExports.makeColumnDef)(e, t2, r2, a2), _GetDefaultOpClass = Module._GetDefaultOpClass = (e, t2) => (_GetDefaultOpClass = Module._GetDefaultOpClass = wasmExports.GetDefaultOpClass)(e, t2), _ChooseRelationName = Module._ChooseRelationName = (e, t2, r2, a2, o5) => (_ChooseRelationName = Module._ChooseRelationName = wasmExports.ChooseRelationName)(e, t2, r2, a2, o5), _scanner_init = Module._scanner_init = (e, t2, r2, a2) => (_scanner_init = Module._scanner_init = wasmExports.scanner_init)(e, t2, r2, a2), _scanner_finish = Module._scanner_finish = (e) => (_scanner_finish = Module._scanner_finish = wasmExports.scanner_finish)(e), _core_yylex = Module._core_yylex = (e, t2, r2) => (_core_yylex = Module._core_yylex = wasmExports.core_yylex)(e, t2, r2), _isxdigit = Module._isxdigit = (e) => (_isxdigit = Module._isxdigit = wasmExports.isxdigit)(e), _scanner_isspace = Module._scanner_isspace = (e) => (_scanner_isspace = Module._scanner_isspace = wasmExports.scanner_isspace)(e), _truncate_identifier = Module._truncate_identifier = (e, t2, r2) => (_truncate_identifier = Module._truncate_identifier = wasmExports.truncate_identifier)(e, t2, r2), _ScanKeywordLookup = Module._ScanKeywordLookup = (e, t2) => (_ScanKeywordLookup = Module._ScanKeywordLookup = wasmExports.ScanKeywordLookup)(e, t2), _downcase_truncate_identifier = Module._downcase_truncate_identifier = (e, t2, r2) => (_downcase_truncate_identifier = Module._downcase_truncate_identifier = wasmExports.downcase_truncate_identifier)(e, t2, r2), _pg_database_encoding_max_length = Module._pg_database_encoding_max_length = () => (_pg_database_encoding_max_length = Module._pg_database_encoding_max_length = wasmExports.pg_database_encoding_max_length)(), _getTypeInputInfo = Module._getTypeInputInfo = (e, t2, r2) => (_getTypeInputInfo = Module._getTypeInputInfo = wasmExports.getTypeInputInfo)(e, t2, r2), _RenameSchema = Module._RenameSchema = (e, t2, r2) => (_RenameSchema = Module._RenameSchema = wasmExports.RenameSchema)(e, t2, r2), _namein = Module._namein = (e) => (_namein = Module._namein = wasmExports.namein)(e), _BlockSampler_Init = Module._BlockSampler_Init = (e, t2, r2, a2) => (_BlockSampler_Init = Module._BlockSampler_Init = wasmExports.BlockSampler_Init)(e, t2, r2, a2), _reservoir_init_selection_state = Module._reservoir_init_selection_state = (e, t2) => (_reservoir_init_selection_state = Module._reservoir_init_selection_state = wasmExports.reservoir_init_selection_state)(e, t2), _reservoir_get_next_S = Module._reservoir_get_next_S = (e, t2, r2) => (_reservoir_get_next_S = Module._reservoir_get_next_S = wasmExports.reservoir_get_next_S)(e, t2, r2), _sampler_random_fract = Module._sampler_random_fract = (e) => (_sampler_random_fract = Module._sampler_random_fract = wasmExports.sampler_random_fract)(e), _std_typanalyze = Module._std_typanalyze = (e) => (_std_typanalyze = Module._std_typanalyze = wasmExports.std_typanalyze)(e), _BlockSampler_HasMore = Module._BlockSampler_HasMore = (e) => (_BlockSampler_HasMore = Module._BlockSampler_HasMore = wasmExports.BlockSampler_HasMore)(e), _BlockSampler_Next = Module._BlockSampler_Next = (e) => (_BlockSampler_Next = Module._BlockSampler_Next = wasmExports.BlockSampler_Next)(e), _Async_Notify = Module._Async_Notify = (e, t2) => (_Async_Notify = Module._Async_Notify = wasmExports.Async_Notify)(e, t2), _RangeVarCallbackMaintainsTable = Module._RangeVarCallbackMaintainsTable = (e, t2, r2, a2) => (_RangeVarCallbackMaintainsTable = Module._RangeVarCallbackMaintainsTable = wasmExports.RangeVarCallbackMaintainsTable)(e, t2, r2, a2), _make_new_heap = Module._make_new_heap = (e, t2, r2, a2, o5) => (_make_new_heap = Module._make_new_heap = wasmExports.make_new_heap)(e, t2, r2, a2, o5), _finish_heap_swap = Module._finish_heap_swap = (e, t2, r2, a2, o5, _5, s5, n3, l2) => (_finish_heap_swap = Module._finish_heap_swap = wasmExports.finish_heap_swap)(e, t2, r2, a2, o5, _5, s5, n3, l2), _OpenPipeStream = Module._OpenPipeStream = (e, t2) => (_OpenPipeStream = Module._OpenPipeStream = wasmExports.OpenPipeStream)(e, t2), _pg_is_ascii = Module._pg_is_ascii = (e) => (_pg_is_ascii = Module._pg_is_ascii = wasmExports.pg_is_ascii)(e), _ClosePipeStream = Module._ClosePipeStream = (e) => (_ClosePipeStream = Module._ClosePipeStream = wasmExports.ClosePipeStream)(e), _BeginCopyFrom = Module._BeginCopyFrom = (e, t2, r2, a2, o5, _5, s5, n3) => (_BeginCopyFrom = Module._BeginCopyFrom = wasmExports.BeginCopyFrom)(e, t2, r2, a2, o5, _5, s5, n3), _EndCopyFrom = Module._EndCopyFrom = (e) => (_EndCopyFrom = Module._EndCopyFrom = wasmExports.EndCopyFrom)(e), _ProcessCopyOptions = Module._ProcessCopyOptions = (e, t2, r2, a2) => (_ProcessCopyOptions = Module._ProcessCopyOptions = wasmExports.ProcessCopyOptions)(e, t2, r2, a2), _CopyFromErrorCallback = Module._CopyFromErrorCallback = (e) => (_CopyFromErrorCallback = Module._CopyFromErrorCallback = wasmExports.CopyFromErrorCallback)(e), _ExecInitRangeTable = Module._ExecInitRangeTable = (e, t2, r2) => (_ExecInitRangeTable = Module._ExecInitRangeTable = wasmExports.ExecInitRangeTable)(e, t2, r2), _ExecInitResultRelation = Module._ExecInitResultRelation = (e, t2, r2) => (_ExecInitResultRelation = Module._ExecInitResultRelation = wasmExports.ExecInitResultRelation)(e, t2, r2), _ExecInitQual = Module._ExecInitQual = (e, t2) => (_ExecInitQual = Module._ExecInitQual = wasmExports.ExecInitQual)(e, t2), _NextCopyFrom = Module._NextCopyFrom = (e, t2, r2, a2) => (_NextCopyFrom = Module._NextCopyFrom = wasmExports.NextCopyFrom)(e, t2, r2, a2), _ExecCloseResultRelations = Module._ExecCloseResultRelations = (e) => (_ExecCloseResultRelations = Module._ExecCloseResultRelations = wasmExports.ExecCloseResultRelations)(e), _ExecCloseRangeTableRelations = Module._ExecCloseRangeTableRelations = (e) => (_ExecCloseRangeTableRelations = Module._ExecCloseRangeTableRelations = wasmExports.ExecCloseRangeTableRelations)(e), _ExecConstraints = Module._ExecConstraints = (e, t2, r2) => (_ExecConstraints = Module._ExecConstraints = wasmExports.ExecConstraints)(e, t2, r2), _ExecInsertIndexTuples = Module._ExecInsertIndexTuples = (e, t2, r2, a2, o5, _5, s5, n3) => (_ExecInsertIndexTuples = Module._ExecInsertIndexTuples = wasmExports.ExecInsertIndexTuples)(e, t2, r2, a2, o5, _5, s5, n3), _build_column_default = Module._build_column_default = (e, t2) => (_build_column_default = Module._build_column_default = wasmExports.build_column_default)(e, t2), _ExecInitExpr = Module._ExecInitExpr = (e, t2) => (_ExecInitExpr = Module._ExecInitExpr = wasmExports.ExecInitExpr)(e, t2), _fileno = Module._fileno = (e) => (_fileno = Module._fileno = wasmExports.fileno)(e), _NextCopyFromRawFields = Module._NextCopyFromRawFields = (e, t2, r2) => (_NextCopyFromRawFields = Module._NextCopyFromRawFields = wasmExports.NextCopyFromRawFields)(e, t2, r2), _resetStringInfo = Module._resetStringInfo = (e) => (_resetStringInfo = Module._resetStringInfo = wasmExports.resetStringInfo)(e), _tolower = Module._tolower = (e) => (_tolower = Module._tolower = wasmExports.tolower)(e), _pq_copymsgbytes = Module._pq_copymsgbytes = (e, t2, r2) => (_pq_copymsgbytes = Module._pq_copymsgbytes = wasmExports.pq_copymsgbytes)(e, t2, r2), _pg_plan_query = Module._pg_plan_query = (e, t2, r2, a2) => (_pg_plan_query = Module._pg_plan_query = wasmExports.pg_plan_query)(e, t2, r2, a2), _PushCopiedSnapshot = Module._PushCopiedSnapshot = (e) => (_PushCopiedSnapshot = Module._PushCopiedSnapshot = wasmExports.PushCopiedSnapshot)(e), _UpdateActiveSnapshotCommandId = Module._UpdateActiveSnapshotCommandId = () => (_UpdateActiveSnapshotCommandId = Module._UpdateActiveSnapshotCommandId = wasmExports.UpdateActiveSnapshotCommandId)(), _CreateQueryDesc = Module._CreateQueryDesc = (e, t2, r2, a2, o5, _5, s5, n3) => (_CreateQueryDesc = Module._CreateQueryDesc = wasmExports.CreateQueryDesc)(e, t2, r2, a2, o5, _5, s5, n3), _ExecutorStart = Module._ExecutorStart = (e, t2) => (_ExecutorStart = Module._ExecutorStart = wasmExports.ExecutorStart)(e, t2), _ExecutorFinish = Module._ExecutorFinish = (e) => (_ExecutorFinish = Module._ExecutorFinish = wasmExports.ExecutorFinish)(e), _ExecutorEnd = Module._ExecutorEnd = (e) => (_ExecutorEnd = Module._ExecutorEnd = wasmExports.ExecutorEnd)(e), _FreeQueryDesc = Module._FreeQueryDesc = (e) => (_FreeQueryDesc = Module._FreeQueryDesc = wasmExports.FreeQueryDesc)(e), _pg_server_to_any = Module._pg_server_to_any = (e, t2, r2) => (_pg_server_to_any = Module._pg_server_to_any = wasmExports.pg_server_to_any)(e, t2, r2), _ExecutorRun = Module._ExecutorRun = (e, t2, r2, a2) => (_ExecutorRun = Module._ExecutorRun = wasmExports.ExecutorRun)(e, t2, r2, a2), _fwrite = Module._fwrite = (e, t2, r2, a2) => (_fwrite = Module._fwrite = wasmExports.fwrite)(e, t2, r2, a2), _CreateTableAsRelExists = Module._CreateTableAsRelExists = (e) => (_CreateTableAsRelExists = Module._CreateTableAsRelExists = wasmExports.CreateTableAsRelExists)(e), _QueryRewrite = Module._QueryRewrite = (e) => (_QueryRewrite = Module._QueryRewrite = wasmExports.QueryRewrite)(e), _DefineRelation = Module._DefineRelation = (e, t2, r2, a2, o5, _5) => (_DefineRelation = Module._DefineRelation = wasmExports.DefineRelation)(e, t2, r2, a2, o5, _5), _rmdir = Module._rmdir = (e) => (_rmdir = Module._rmdir = wasmExports.rmdir)(e), _atof = Module._atof = (e) => (_atof = Module._atof = wasmExports.atof)(e), _int8in = Module._int8in = (e) => (_int8in = Module._int8in = wasmExports.int8in)(e), _oidin = Module._oidin = (e) => (_oidin = Module._oidin = wasmExports.oidin)(e), _RemoveObjects = Module._RemoveObjects = (e) => (_RemoveObjects = Module._RemoveObjects = wasmExports.RemoveObjects)(e), _GetCommandTagName = Module._GetCommandTagName = (e) => (_GetCommandTagName = Module._GetCommandTagName = wasmExports.GetCommandTagName)(e), _ExplainBeginOutput = Module._ExplainBeginOutput = (e) => (_ExplainBeginOutput = Module._ExplainBeginOutput = wasmExports.ExplainBeginOutput)(e), _NewExplainState = Module._NewExplainState = () => (_NewExplainState = Module._NewExplainState = wasmExports.NewExplainState)(), _ExplainEndOutput = Module._ExplainEndOutput = (e) => (_ExplainEndOutput = Module._ExplainEndOutput = wasmExports.ExplainEndOutput)(e), _ExplainPrintPlan = Module._ExplainPrintPlan = (e, t2) => (_ExplainPrintPlan = Module._ExplainPrintPlan = wasmExports.ExplainPrintPlan)(e, t2), _appendStringInfoSpaces = Module._appendStringInfoSpaces = (e, t2) => (_appendStringInfoSpaces = Module._appendStringInfoSpaces = wasmExports.appendStringInfoSpaces)(e, t2), _ExplainPrintTriggers = Module._ExplainPrintTriggers = (e, t2) => (_ExplainPrintTriggers = Module._ExplainPrintTriggers = wasmExports.ExplainPrintTriggers)(e, t2), _ExplainPrintJITSummary = Module._ExplainPrintJITSummary = (e, t2) => (_ExplainPrintJITSummary = Module._ExplainPrintJITSummary = wasmExports.ExplainPrintJITSummary)(e, t2), _InstrEndLoop = Module._InstrEndLoop = (e) => (_InstrEndLoop = Module._InstrEndLoop = wasmExports.InstrEndLoop)(e), _ExplainPropertyInteger = Module._ExplainPropertyInteger = (e, t2, r2, a2) => (_ExplainPropertyInteger = Module._ExplainPropertyInteger = wasmExports.ExplainPropertyInteger)(e, t2, r2, a2), _ExplainQueryText = Module._ExplainQueryText = (e, t2) => (_ExplainQueryText = Module._ExplainQueryText = wasmExports.ExplainQueryText)(e, t2), _ExplainPropertyText = Module._ExplainPropertyText = (e, t2, r2) => (_ExplainPropertyText = Module._ExplainPropertyText = wasmExports.ExplainPropertyText)(e, t2, r2), _ExplainQueryParameters = Module._ExplainQueryParameters = (e, t2, r2) => (_ExplainQueryParameters = Module._ExplainQueryParameters = wasmExports.ExplainQueryParameters)(e, t2, r2), _get_func_namespace = Module._get_func_namespace = (e) => (_get_func_namespace = Module._get_func_namespace = wasmExports.get_func_namespace)(e), _CreateSchemaCommand = Module._CreateSchemaCommand = (e, t2, r2, a2) => (_CreateSchemaCommand = Module._CreateSchemaCommand = wasmExports.CreateSchemaCommand)(e, t2, r2, a2), _get_rel_type_id = Module._get_rel_type_id = (e) => (_get_rel_type_id = Module._get_rel_type_id = wasmExports.get_rel_type_id)(e), _set_config_option = Module._set_config_option = (e, t2, r2, a2, o5, _5, s5, n3) => (_set_config_option = Module._set_config_option = wasmExports.set_config_option)(e, t2, r2, a2, o5, _5, s5, n3), _pg_any_to_server = Module._pg_any_to_server = (e, t2, r2) => (_pg_any_to_server = Module._pg_any_to_server = wasmExports.pg_any_to_server)(e, t2, r2), _DirectFunctionCall4Coll = Module._DirectFunctionCall4Coll = (e, t2, r2, a2, o5, _5) => (_DirectFunctionCall4Coll = Module._DirectFunctionCall4Coll = wasmExports.DirectFunctionCall4Coll)(e, t2, r2, a2, o5, _5), _replace_text = Module._replace_text = (e) => (_replace_text = Module._replace_text = wasmExports.replace_text)(e), _ProcessUtility = Module._ProcessUtility = (e, t2, r2, a2, o5, _5, s5, n3) => (_ProcessUtility = Module._ProcessUtility = wasmExports.ProcessUtility)(e, t2, r2, a2, o5, _5, s5, n3), _list_delete_cell = Module._list_delete_cell = (e, t2) => (_list_delete_cell = Module._list_delete_cell = wasmExports.list_delete_cell)(e, t2), _GetForeignDataWrapper = Module._GetForeignDataWrapper = (e) => (_GetForeignDataWrapper = Module._GetForeignDataWrapper = wasmExports.GetForeignDataWrapper)(e), _CreateExprContext = Module._CreateExprContext = (e) => (_CreateExprContext = Module._CreateExprContext = wasmExports.CreateExprContext)(e), _EnsurePortalSnapshotExists = Module._EnsurePortalSnapshotExists = () => (_EnsurePortalSnapshotExists = Module._EnsurePortalSnapshotExists = wasmExports.EnsurePortalSnapshotExists)(), _CheckIndexCompatible = Module._CheckIndexCompatible = (e, t2, r2, a2) => (_CheckIndexCompatible = Module._CheckIndexCompatible = wasmExports.CheckIndexCompatible)(e, t2, r2, a2), _pgstat_count_truncate = Module._pgstat_count_truncate = (e) => (_pgstat_count_truncate = Module._pgstat_count_truncate = wasmExports.pgstat_count_truncate)(e), _SPI_connect = Module._SPI_connect = () => (_SPI_connect = Module._SPI_connect = wasmExports.SPI_connect)(), _SPI_exec = Module._SPI_exec = (e, t2) => (_SPI_exec = Module._SPI_exec = wasmExports.SPI_exec)(e, t2), _SPI_execute = Module._SPI_execute = (e, t2, r2) => (_SPI_execute = Module._SPI_execute = wasmExports.SPI_execute)(e, t2, r2), _SPI_getvalue = Module._SPI_getvalue = (e, t2, r2) => (_SPI_getvalue = Module._SPI_getvalue = wasmExports.SPI_getvalue)(e, t2, r2), _generate_operator_clause = Module._generate_operator_clause = (e, t2, r2, a2, o5, _5) => (_generate_operator_clause = Module._generate_operator_clause = wasmExports.generate_operator_clause)(e, t2, r2, a2, o5, _5), _SPI_finish = Module._SPI_finish = () => (_SPI_finish = Module._SPI_finish = wasmExports.SPI_finish)(), _CreateTransientRelDestReceiver = Module._CreateTransientRelDestReceiver = (e) => (_CreateTransientRelDestReceiver = Module._CreateTransientRelDestReceiver = wasmExports.CreateTransientRelDestReceiver)(e), _MemoryContextSetIdentifier = Module._MemoryContextSetIdentifier = (e, t2) => (_MemoryContextSetIdentifier = Module._MemoryContextSetIdentifier = wasmExports.MemoryContextSetIdentifier)(e, t2), _checkExprHasSubLink = Module._checkExprHasSubLink = (e) => (_checkExprHasSubLink = Module._checkExprHasSubLink = wasmExports.checkExprHasSubLink)(e), _MemoryContextSetParent = Module._MemoryContextSetParent = (e, t2) => (_MemoryContextSetParent = Module._MemoryContextSetParent = wasmExports.MemoryContextSetParent)(e, t2), _SetTuplestoreDestReceiverParams = Module._SetTuplestoreDestReceiverParams = (e, t2, r2, a2, o5, _5) => (_SetTuplestoreDestReceiverParams = Module._SetTuplestoreDestReceiverParams = wasmExports.SetTuplestoreDestReceiverParams)(e, t2, r2, a2, o5, _5), _tuplestore_rescan = Module._tuplestore_rescan = (e) => (_tuplestore_rescan = Module._tuplestore_rescan = wasmExports.tuplestore_rescan)(e), _MemoryContextDeleteChildren = Module._MemoryContextDeleteChildren = (e) => (_MemoryContextDeleteChildren = Module._MemoryContextDeleteChildren = wasmExports.MemoryContextDeleteChildren)(e), _makeParamList = Module._makeParamList = (e) => (_makeParamList = Module._makeParamList = wasmExports.makeParamList)(e), _ReleaseCachedPlan = Module._ReleaseCachedPlan = (e, t2) => (_ReleaseCachedPlan = Module._ReleaseCachedPlan = wasmExports.ReleaseCachedPlan)(e, t2), _bms_equal = Module._bms_equal = (e, t2) => (_bms_equal = Module._bms_equal = wasmExports.bms_equal)(e, t2), _DefineSequence = Module._DefineSequence = (e, t2, r2) => (_DefineSequence = Module._DefineSequence = wasmExports.DefineSequence)(e, t2, r2), _AlterSequence = Module._AlterSequence = (e, t2, r2) => (_AlterSequence = Module._AlterSequence = wasmExports.AlterSequence)(e, t2, r2), _nextval = Module._nextval = (e) => (_nextval = Module._nextval = wasmExports.nextval)(e), _textToQualifiedNameList = Module._textToQualifiedNameList = (e) => (_textToQualifiedNameList = Module._textToQualifiedNameList = wasmExports.textToQualifiedNameList)(e), _nextval_internal = Module._nextval_internal = (e, t2) => (_nextval_internal = Module._nextval_internal = wasmExports.nextval_internal)(e, t2), _setval_oid = Module._setval_oid = (e) => (_setval_oid = Module._setval_oid = wasmExports.setval_oid)(e), _tuplestore_gettupleslot = Module._tuplestore_gettupleslot = (e, t2, r2, a2) => (_tuplestore_gettupleslot = Module._tuplestore_gettupleslot = wasmExports.tuplestore_gettupleslot)(e, t2, r2, a2), _list_delete = Module._list_delete = (e, t2) => (_list_delete = Module._list_delete = wasmExports.list_delete)(e, t2), _tuplestore_end = Module._tuplestore_end = (e) => (_tuplestore_end = Module._tuplestore_end = wasmExports.tuplestore_end)(e), _list_append_unique = Module._list_append_unique = (e, t2) => (_list_append_unique = Module._list_append_unique = wasmExports.list_append_unique)(e, t2), _quote_literal_cstr = Module._quote_literal_cstr = (e) => (_quote_literal_cstr = Module._quote_literal_cstr = wasmExports.quote_literal_cstr)(e), _contain_mutable_functions = Module._contain_mutable_functions = (e) => (_contain_mutable_functions = Module._contain_mutable_functions = wasmExports.contain_mutable_functions)(e), _RemoveRelations = Module._RemoveRelations = (e) => (_RemoveRelations = Module._RemoveRelations = wasmExports.RemoveRelations)(e), _ExecuteTruncateGuts = Module._ExecuteTruncateGuts = (e, t2, r2, a2, o5, _5) => (_ExecuteTruncateGuts = Module._ExecuteTruncateGuts = wasmExports.ExecuteTruncateGuts)(e, t2, r2, a2, o5, _5), _InitResultRelInfo = Module._InitResultRelInfo = (e, t2, r2, a2, o5) => (_InitResultRelInfo = Module._InitResultRelInfo = wasmExports.InitResultRelInfo)(e, t2, r2, a2, o5), _AlterTable = Module._AlterTable = (e, t2, r2) => (_AlterTable = Module._AlterTable = wasmExports.AlterTable)(e, t2, r2), _bms_make_singleton = Module._bms_make_singleton = (e) => (_bms_make_singleton = Module._bms_make_singleton = wasmExports.bms_make_singleton)(e), _ChangeVarNodes = Module._ChangeVarNodes = (e, t2, r2, a2) => (_ChangeVarNodes = Module._ChangeVarNodes = wasmExports.ChangeVarNodes)(e, t2, r2, a2), _tuplestore_puttupleslot = Module._tuplestore_puttupleslot = (e, t2) => (_tuplestore_puttupleslot = Module._tuplestore_puttupleslot = wasmExports.tuplestore_puttupleslot)(e, t2), _tuplestore_begin_heap = Module._tuplestore_begin_heap = (e, t2, r2) => (_tuplestore_begin_heap = Module._tuplestore_begin_heap = wasmExports.tuplestore_begin_heap)(e, t2, r2), _ExecForceStoreHeapTuple = Module._ExecForceStoreHeapTuple = (e, t2, r2) => (_ExecForceStoreHeapTuple = Module._ExecForceStoreHeapTuple = wasmExports.ExecForceStoreHeapTuple)(e, t2, r2), _ExecUpdateLockMode = Module._ExecUpdateLockMode = (e, t2) => (_ExecUpdateLockMode = Module._ExecUpdateLockMode = wasmExports.ExecUpdateLockMode)(e, t2), _bms_copy = Module._bms_copy = (e) => (_bms_copy = Module._bms_copy = wasmExports.bms_copy)(e), _strtoint = Module._strtoint = (e, t2, r2) => (_strtoint = Module._strtoint = wasmExports.strtoint)(e, t2, r2), _strtod = Module._strtod = (e, t2) => (_strtod = Module._strtod = wasmExports.strtod)(e, t2), _plain_crypt_verify = Module._plain_crypt_verify = (e, t2, r2, a2) => (_plain_crypt_verify = Module._plain_crypt_verify = wasmExports.plain_crypt_verify)(e, t2, r2, a2), _ProcessConfigFile = Module._ProcessConfigFile = (e) => (_ProcessConfigFile = Module._ProcessConfigFile = wasmExports.ProcessConfigFile)(e), _pgl_exit = Module._pgl_exit = (e) => (_pgl_exit = Module._pgl_exit = wasmExports.pgl_exit)(e), _dsa_get_handle = Module._dsa_get_handle = (e) => (_dsa_get_handle = Module._dsa_get_handle = wasmExports.dsa_get_handle)(e), _pg_strncasecmp = Module._pg_strncasecmp = (e, t2, r2) => (_pg_strncasecmp = Module._pg_strncasecmp = wasmExports.pg_strncasecmp)(e, t2, r2), _ExecReScan = Module._ExecReScan = (e) => (_ExecReScan = Module._ExecReScan = wasmExports.ExecReScan)(e), _ExecAsyncResponse = Module._ExecAsyncResponse = (e) => (_ExecAsyncResponse = Module._ExecAsyncResponse = wasmExports.ExecAsyncResponse)(e), _ExecAsyncRequestDone = Module._ExecAsyncRequestDone = (e, t2) => (_ExecAsyncRequestDone = Module._ExecAsyncRequestDone = wasmExports.ExecAsyncRequestDone)(e, t2), _ExecAsyncRequestPending = Module._ExecAsyncRequestPending = (e) => (_ExecAsyncRequestPending = Module._ExecAsyncRequestPending = wasmExports.ExecAsyncRequestPending)(e), _ExprEvalPushStep = Module._ExprEvalPushStep = (e, t2) => (_ExprEvalPushStep = Module._ExprEvalPushStep = wasmExports.ExprEvalPushStep)(e, t2), _ExecInitExprWithParams = Module._ExecInitExprWithParams = (e, t2) => (_ExecInitExprWithParams = Module._ExecInitExprWithParams = wasmExports.ExecInitExprWithParams)(e, t2), _ExecInitExprList = Module._ExecInitExprList = (e, t2) => (_ExecInitExprList = Module._ExecInitExprList = wasmExports.ExecInitExprList)(e, t2), _ExecGetResultType = Module._ExecGetResultType = (e) => (_ExecGetResultType = Module._ExecGetResultType = wasmExports.ExecGetResultType)(e), _ExecInitExtraTupleSlot = Module._ExecInitExtraTupleSlot = (e, t2, r2) => (_ExecInitExtraTupleSlot = Module._ExecInitExtraTupleSlot = wasmExports.ExecInitExtraTupleSlot)(e, t2, r2), _MakeExpandedObjectReadOnlyInternal = Module._MakeExpandedObjectReadOnlyInternal = (e) => (_MakeExpandedObjectReadOnlyInternal = Module._MakeExpandedObjectReadOnlyInternal = wasmExports.MakeExpandedObjectReadOnlyInternal)(e), _tuplesort_puttupleslot = Module._tuplesort_puttupleslot = (e, t2) => (_tuplesort_puttupleslot = Module._tuplesort_puttupleslot = wasmExports.tuplesort_puttupleslot)(e, t2), _ArrayGetNItems = Module._ArrayGetNItems = (e, t2) => (_ArrayGetNItems = Module._ArrayGetNItems = wasmExports.ArrayGetNItems)(e, t2), _expanded_record_fetch_tupdesc = Module._expanded_record_fetch_tupdesc = (e) => (_expanded_record_fetch_tupdesc = Module._expanded_record_fetch_tupdesc = wasmExports.expanded_record_fetch_tupdesc)(e), _expanded_record_fetch_field = Module._expanded_record_fetch_field = (e, t2, r2) => (_expanded_record_fetch_field = Module._expanded_record_fetch_field = wasmExports.expanded_record_fetch_field)(e, t2, r2), _json_validate = Module._json_validate = (e, t2, r2) => (_json_validate = Module._json_validate = wasmExports.json_validate)(e, t2, r2), _JsonbValueToJsonb = Module._JsonbValueToJsonb = (e) => (_JsonbValueToJsonb = Module._JsonbValueToJsonb = wasmExports.JsonbValueToJsonb)(e), _numeric_out = Module._numeric_out = (e) => (_numeric_out = Module._numeric_out = wasmExports.numeric_out)(e), _boolout = Module._boolout = (e) => (_boolout = Module._boolout = wasmExports.boolout)(e), _bool_int4 = Module._bool_int4 = (e) => (_bool_int4 = Module._bool_int4 = wasmExports.bool_int4)(e), _lookup_rowtype_tupdesc_domain = Module._lookup_rowtype_tupdesc_domain = (e, t2, r2) => (_lookup_rowtype_tupdesc_domain = Module._lookup_rowtype_tupdesc_domain = wasmExports.lookup_rowtype_tupdesc_domain)(e, t2, r2), _MemoryContextGetParent = Module._MemoryContextGetParent = (e) => (_MemoryContextGetParent = Module._MemoryContextGetParent = wasmExports.MemoryContextGetParent)(e), _DeleteExpandedObject = Module._DeleteExpandedObject = (e) => (_DeleteExpandedObject = Module._DeleteExpandedObject = wasmExports.DeleteExpandedObject)(e), _ExecFindJunkAttributeInTlist = Module._ExecFindJunkAttributeInTlist = (e, t2) => (_ExecFindJunkAttributeInTlist = Module._ExecFindJunkAttributeInTlist = wasmExports.ExecFindJunkAttributeInTlist)(e, t2), _standard_ExecutorStart = Module._standard_ExecutorStart = (e, t2) => (_standard_ExecutorStart = Module._standard_ExecutorStart = wasmExports.standard_ExecutorStart)(e, t2), _ExecInitNode = Module._ExecInitNode = (e, t2, r2) => (_ExecInitNode = Module._ExecInitNode = wasmExports.ExecInitNode)(e, t2, r2), _standard_ExecutorRun = Module._standard_ExecutorRun = (e, t2, r2, a2) => (_standard_ExecutorRun = Module._standard_ExecutorRun = wasmExports.standard_ExecutorRun)(e, t2, r2, a2), _standard_ExecutorFinish = Module._standard_ExecutorFinish = (e) => (_standard_ExecutorFinish = Module._standard_ExecutorFinish = wasmExports.standard_ExecutorFinish)(e), _standard_ExecutorEnd = Module._standard_ExecutorEnd = (e) => (_standard_ExecutorEnd = Module._standard_ExecutorEnd = wasmExports.standard_ExecutorEnd)(e), _ExecEndNode = Module._ExecEndNode = (e) => (_ExecEndNode = Module._ExecEndNode = wasmExports.ExecEndNode)(e), _InstrAlloc = Module._InstrAlloc = (e, t2, r2) => (_InstrAlloc = Module._InstrAlloc = wasmExports.InstrAlloc)(e, t2, r2), _MakeTupleTableSlot = Module._MakeTupleTableSlot = (e, t2) => (_MakeTupleTableSlot = Module._MakeTupleTableSlot = wasmExports.MakeTupleTableSlot)(e, t2), _ExecWithCheckOptions = Module._ExecWithCheckOptions = (e, t2, r2, a2) => (_ExecWithCheckOptions = Module._ExecWithCheckOptions = wasmExports.ExecWithCheckOptions)(e, t2, r2, a2), _get_typlenbyval = Module._get_typlenbyval = (e, t2, r2) => (_get_typlenbyval = Module._get_typlenbyval = wasmExports.get_typlenbyval)(e, t2, r2), _bms_num_members = Module._bms_num_members = (e) => (_bms_num_members = Module._bms_num_members = wasmExports.bms_num_members)(e), _ExecAssignExprContext = Module._ExecAssignExprContext = (e, t2) => (_ExecAssignExprContext = Module._ExecAssignExprContext = wasmExports.ExecAssignExprContext)(e, t2), _ExecInitScanTupleSlot = Module._ExecInitScanTupleSlot = (e, t2, r2, a2) => (_ExecInitScanTupleSlot = Module._ExecInitScanTupleSlot = wasmExports.ExecInitScanTupleSlot)(e, t2, r2, a2), _InputFunctionCall = Module._InputFunctionCall = (e, t2, r2, a2) => (_InputFunctionCall = Module._InputFunctionCall = wasmExports.InputFunctionCall)(e, t2, r2, a2), _list_delete_ptr = Module._list_delete_ptr = (e, t2) => (_list_delete_ptr = Module._list_delete_ptr = wasmExports.list_delete_ptr)(e, t2), _FreeExprContext = Module._FreeExprContext = (e, t2) => (_FreeExprContext = Module._FreeExprContext = wasmExports.FreeExprContext)(e, t2), _ExecAssignProjectionInfo = Module._ExecAssignProjectionInfo = (e, t2) => (_ExecAssignProjectionInfo = Module._ExecAssignProjectionInfo = wasmExports.ExecAssignProjectionInfo)(e, t2), _ExecOpenScanRelation = Module._ExecOpenScanRelation = (e, t2, r2) => (_ExecOpenScanRelation = Module._ExecOpenScanRelation = wasmExports.ExecOpenScanRelation)(e, t2, r2), _bms_intersect = Module._bms_intersect = (e, t2) => (_bms_intersect = Module._bms_intersect = wasmExports.bms_intersect)(e, t2), _GetAttributeByNum = Module._GetAttributeByNum = (e, t2, r2) => (_GetAttributeByNum = Module._GetAttributeByNum = wasmExports.GetAttributeByNum)(e, t2, r2), _ExecGetReturningSlot = Module._ExecGetReturningSlot = (e, t2) => (_ExecGetReturningSlot = Module._ExecGetReturningSlot = wasmExports.ExecGetReturningSlot)(e, t2), _ExecGetResultRelCheckAsUser = Module._ExecGetResultRelCheckAsUser = (e, t2) => (_ExecGetResultRelCheckAsUser = Module._ExecGetResultRelCheckAsUser = wasmExports.ExecGetResultRelCheckAsUser)(e, t2), _get_call_expr_argtype = Module._get_call_expr_argtype = (e, t2) => (_get_call_expr_argtype = Module._get_call_expr_argtype = wasmExports.get_call_expr_argtype)(e, t2), _tuplestore_clear = Module._tuplestore_clear = (e) => (_tuplestore_clear = Module._tuplestore_clear = wasmExports.tuplestore_clear)(e), _InstrUpdateTupleCount = Module._InstrUpdateTupleCount = (e, t2) => (_InstrUpdateTupleCount = Module._InstrUpdateTupleCount = wasmExports.InstrUpdateTupleCount)(e, t2), _tuplesort_begin_heap = Module._tuplesort_begin_heap = (e, t2, r2, a2, o5, _5, s5, n3, l2) => (_tuplesort_begin_heap = Module._tuplesort_begin_heap = wasmExports.tuplesort_begin_heap)(e, t2, r2, a2, o5, _5, s5, n3, l2), _AggCheckCallContext = Module._AggCheckCallContext = (e, t2) => (_AggCheckCallContext = Module._AggCheckCallContext = wasmExports.AggCheckCallContext)(e, t2), _tuplesort_gettupleslot = Module._tuplesort_gettupleslot = (e, t2, r2, a2, o5) => (_tuplesort_gettupleslot = Module._tuplesort_gettupleslot = wasmExports.tuplesort_gettupleslot)(e, t2, r2, a2, o5), _bms_del_members = Module._bms_del_members = (e, t2) => (_bms_del_members = Module._bms_del_members = wasmExports.bms_del_members)(e, t2), _AddWaitEventToSet = Module._AddWaitEventToSet = (e, t2, r2, a2, o5) => (_AddWaitEventToSet = Module._AddWaitEventToSet = wasmExports.AddWaitEventToSet)(e, t2, r2, a2, o5), _GetNumRegisteredWaitEvents = Module._GetNumRegisteredWaitEvents = (e) => (_GetNumRegisteredWaitEvents = Module._GetNumRegisteredWaitEvents = wasmExports.GetNumRegisteredWaitEvents)(e), _get_attstatsslot = Module._get_attstatsslot = (e, t2, r2, a2, o5) => (_get_attstatsslot = Module._get_attstatsslot = wasmExports.get_attstatsslot)(e, t2, r2, a2, o5), _free_attstatsslot = Module._free_attstatsslot = (e) => (_free_attstatsslot = Module._free_attstatsslot = wasmExports.free_attstatsslot)(e), _tuplesort_reset = Module._tuplesort_reset = (e) => (_tuplesort_reset = Module._tuplesort_reset = wasmExports.tuplesort_reset)(e), _pairingheap_first = Module._pairingheap_first = (e) => (_pairingheap_first = Module._pairingheap_first = wasmExports.pairingheap_first)(e), _bms_nonempty_difference = Module._bms_nonempty_difference = (e, t2) => (_bms_nonempty_difference = Module._bms_nonempty_difference = wasmExports.bms_nonempty_difference)(e, t2), _datum_image_hash = Module._datum_image_hash = (e, t2, r2) => (_datum_image_hash = Module._datum_image_hash = wasmExports.datum_image_hash)(e, t2, r2), _tuplesort_rescan = Module._tuplesort_rescan = (e) => (_tuplesort_rescan = Module._tuplesort_rescan = wasmExports.tuplesort_rescan)(e), _WinGetPartitionLocalMemory = Module._WinGetPartitionLocalMemory = (e, t2) => (_WinGetPartitionLocalMemory = Module._WinGetPartitionLocalMemory = wasmExports.WinGetPartitionLocalMemory)(e, t2), _WinGetCurrentPosition = Module._WinGetCurrentPosition = (e) => (_WinGetCurrentPosition = Module._WinGetCurrentPosition = wasmExports.WinGetCurrentPosition)(e), _WinGetPartitionRowCount = Module._WinGetPartitionRowCount = (e) => (_WinGetPartitionRowCount = Module._WinGetPartitionRowCount = wasmExports.WinGetPartitionRowCount)(e), _WinGetFuncArgInPartition = Module._WinGetFuncArgInPartition = (e, t2, r2, a2, o5, _5, s5) => (_WinGetFuncArgInPartition = Module._WinGetFuncArgInPartition = wasmExports.WinGetFuncArgInPartition)(e, t2, r2, a2, o5, _5, s5), _WinGetFuncArgCurrent = Module._WinGetFuncArgCurrent = (e, t2, r2) => (_WinGetFuncArgCurrent = Module._WinGetFuncArgCurrent = wasmExports.WinGetFuncArgCurrent)(e, t2, r2), _SPI_connect_ext = Module._SPI_connect_ext = (e) => (_SPI_connect_ext = Module._SPI_connect_ext = wasmExports.SPI_connect_ext)(e), _SPI_commit = Module._SPI_commit = () => (_SPI_commit = Module._SPI_commit = wasmExports.SPI_commit)(), _CopyErrorData = Module._CopyErrorData = () => (_CopyErrorData = Module._CopyErrorData = wasmExports.CopyErrorData)(), _FlushErrorState = Module._FlushErrorState = () => (_FlushErrorState = Module._FlushErrorState = wasmExports.FlushErrorState)(), _ReThrowError = Module._ReThrowError = (e) => (_ReThrowError = Module._ReThrowError = wasmExports.ReThrowError)(e), _SPI_commit_and_chain = Module._SPI_commit_and_chain = () => (_SPI_commit_and_chain = Module._SPI_commit_and_chain = wasmExports.SPI_commit_and_chain)(), _SPI_rollback = Module._SPI_rollback = () => (_SPI_rollback = Module._SPI_rollback = wasmExports.SPI_rollback)(), _SPI_rollback_and_chain = Module._SPI_rollback_and_chain = () => (_SPI_rollback_and_chain = Module._SPI_rollback_and_chain = wasmExports.SPI_rollback_and_chain)(), _SPI_freetuptable = Module._SPI_freetuptable = (e) => (_SPI_freetuptable = Module._SPI_freetuptable = wasmExports.SPI_freetuptable)(e), _SPI_execute_extended = Module._SPI_execute_extended = (e, t2) => (_SPI_execute_extended = Module._SPI_execute_extended = wasmExports.SPI_execute_extended)(e, t2), _SPI_execute_plan = Module._SPI_execute_plan = (e, t2, r2, a2, o5) => (_SPI_execute_plan = Module._SPI_execute_plan = wasmExports.SPI_execute_plan)(e, t2, r2, a2, o5), _SPI_execp = Module._SPI_execp = (e, t2, r2, a2) => (_SPI_execp = Module._SPI_execp = wasmExports.SPI_execp)(e, t2, r2, a2), _SPI_execute_plan_extended = Module._SPI_execute_plan_extended = (e, t2) => (_SPI_execute_plan_extended = Module._SPI_execute_plan_extended = wasmExports.SPI_execute_plan_extended)(e, t2), _SPI_execute_plan_with_paramlist = Module._SPI_execute_plan_with_paramlist = (e, t2, r2, a2) => (_SPI_execute_plan_with_paramlist = Module._SPI_execute_plan_with_paramlist = wasmExports.SPI_execute_plan_with_paramlist)(e, t2, r2, a2), _SPI_execute_with_args = Module._SPI_execute_with_args = (e, t2, r2, a2, o5, _5, s5) => (_SPI_execute_with_args = Module._SPI_execute_with_args = wasmExports.SPI_execute_with_args)(e, t2, r2, a2, o5, _5, s5), _SPI_prepare = Module._SPI_prepare = (e, t2, r2) => (_SPI_prepare = Module._SPI_prepare = wasmExports.SPI_prepare)(e, t2, r2), _SPI_prepare_extended = Module._SPI_prepare_extended = (e, t2) => (_SPI_prepare_extended = Module._SPI_prepare_extended = wasmExports.SPI_prepare_extended)(e, t2), _SPI_keepplan = Module._SPI_keepplan = (e) => (_SPI_keepplan = Module._SPI_keepplan = wasmExports.SPI_keepplan)(e), _SPI_freeplan = Module._SPI_freeplan = (e) => (_SPI_freeplan = Module._SPI_freeplan = wasmExports.SPI_freeplan)(e), _SPI_copytuple = Module._SPI_copytuple = (e) => (_SPI_copytuple = Module._SPI_copytuple = wasmExports.SPI_copytuple)(e), _SPI_returntuple = Module._SPI_returntuple = (e, t2) => (_SPI_returntuple = Module._SPI_returntuple = wasmExports.SPI_returntuple)(e, t2), _SPI_modifytuple = Module._SPI_modifytuple = (e, t2, r2, a2, o5, _5) => (_SPI_modifytuple = Module._SPI_modifytuple = wasmExports.SPI_modifytuple)(e, t2, r2, a2, o5, _5), _SPI_fnumber = Module._SPI_fnumber = (e, t2) => (_SPI_fnumber = Module._SPI_fnumber = wasmExports.SPI_fnumber)(e, t2), _SPI_fname = Module._SPI_fname = (e, t2) => (_SPI_fname = Module._SPI_fname = wasmExports.SPI_fname)(e, t2), _SPI_getbinval = Module._SPI_getbinval = (e, t2, r2, a2) => (_SPI_getbinval = Module._SPI_getbinval = wasmExports.SPI_getbinval)(e, t2, r2, a2), _SPI_gettype = Module._SPI_gettype = (e, t2) => (_SPI_gettype = Module._SPI_gettype = wasmExports.SPI_gettype)(e, t2), _SPI_gettypeid = Module._SPI_gettypeid = (e, t2) => (_SPI_gettypeid = Module._SPI_gettypeid = wasmExports.SPI_gettypeid)(e, t2), _SPI_getrelname = Module._SPI_getrelname = (e) => (_SPI_getrelname = Module._SPI_getrelname = wasmExports.SPI_getrelname)(e), _SPI_palloc = Module._SPI_palloc = (e) => (_SPI_palloc = Module._SPI_palloc = wasmExports.SPI_palloc)(e), _SPI_datumTransfer = Module._SPI_datumTransfer = (e, t2, r2) => (_SPI_datumTransfer = Module._SPI_datumTransfer = wasmExports.SPI_datumTransfer)(e, t2, r2), _datumTransfer = Module._datumTransfer = (e, t2, r2) => (_datumTransfer = Module._datumTransfer = wasmExports.datumTransfer)(e, t2, r2), _SPI_cursor_open_with_paramlist = Module._SPI_cursor_open_with_paramlist = (e, t2, r2, a2) => (_SPI_cursor_open_with_paramlist = Module._SPI_cursor_open_with_paramlist = wasmExports.SPI_cursor_open_with_paramlist)(e, t2, r2, a2), _SPI_cursor_parse_open = Module._SPI_cursor_parse_open = (e, t2, r2) => (_SPI_cursor_parse_open = Module._SPI_cursor_parse_open = wasmExports.SPI_cursor_parse_open)(e, t2, r2), _SPI_cursor_find = Module._SPI_cursor_find = (e) => (_SPI_cursor_find = Module._SPI_cursor_find = wasmExports.SPI_cursor_find)(e), _SPI_cursor_fetch = Module._SPI_cursor_fetch = (e, t2, r2) => (_SPI_cursor_fetch = Module._SPI_cursor_fetch = wasmExports.SPI_cursor_fetch)(e, t2, r2), _SPI_scroll_cursor_fetch = Module._SPI_scroll_cursor_fetch = (e, t2, r2) => (_SPI_scroll_cursor_fetch = Module._SPI_scroll_cursor_fetch = wasmExports.SPI_scroll_cursor_fetch)(e, t2, r2), _SPI_scroll_cursor_move = Module._SPI_scroll_cursor_move = (e, t2, r2) => (_SPI_scroll_cursor_move = Module._SPI_scroll_cursor_move = wasmExports.SPI_scroll_cursor_move)(e, t2, r2), _SPI_cursor_close = Module._SPI_cursor_close = (e) => (_SPI_cursor_close = Module._SPI_cursor_close = wasmExports.SPI_cursor_close)(e), _SPI_plan_is_valid = Module._SPI_plan_is_valid = (e) => (_SPI_plan_is_valid = Module._SPI_plan_is_valid = wasmExports.SPI_plan_is_valid)(e), _SPI_result_code_string = Module._SPI_result_code_string = (e) => (_SPI_result_code_string = Module._SPI_result_code_string = wasmExports.SPI_result_code_string)(e), _SPI_plan_get_plan_sources = Module._SPI_plan_get_plan_sources = (e) => (_SPI_plan_get_plan_sources = Module._SPI_plan_get_plan_sources = wasmExports.SPI_plan_get_plan_sources)(e), _SPI_plan_get_cached_plan = Module._SPI_plan_get_cached_plan = (e) => (_SPI_plan_get_cached_plan = Module._SPI_plan_get_cached_plan = wasmExports.SPI_plan_get_cached_plan)(e), _SPI_register_relation = Module._SPI_register_relation = (e) => (_SPI_register_relation = Module._SPI_register_relation = wasmExports.SPI_register_relation)(e), _create_queryEnv = Module._create_queryEnv = () => (_create_queryEnv = Module._create_queryEnv = wasmExports.create_queryEnv)(), _register_ENR = Module._register_ENR = (e, t2) => (_register_ENR = Module._register_ENR = wasmExports.register_ENR)(e, t2), _SPI_register_trigger_data = Module._SPI_register_trigger_data = (e) => (_SPI_register_trigger_data = Module._SPI_register_trigger_data = wasmExports.SPI_register_trigger_data)(e), _tuplestore_tuple_count = Module._tuplestore_tuple_count = (e) => (_tuplestore_tuple_count = Module._tuplestore_tuple_count = wasmExports.tuplestore_tuple_count)(e), _GetUserMapping = Module._GetUserMapping = (e, t2) => (_GetUserMapping = Module._GetUserMapping = wasmExports.GetUserMapping)(e, t2), _GetForeignTable = Module._GetForeignTable = (e) => (_GetForeignTable = Module._GetForeignTable = wasmExports.GetForeignTable)(e), _GetForeignColumnOptions = Module._GetForeignColumnOptions = (e, t2) => (_GetForeignColumnOptions = Module._GetForeignColumnOptions = wasmExports.GetForeignColumnOptions)(e, t2), _initClosestMatch = Module._initClosestMatch = (e, t2, r2) => (_initClosestMatch = Module._initClosestMatch = wasmExports.initClosestMatch)(e, t2, r2), _updateClosestMatch = Module._updateClosestMatch = (e, t2) => (_updateClosestMatch = Module._updateClosestMatch = wasmExports.updateClosestMatch)(e, t2), _getClosestMatch = Module._getClosestMatch = (e) => (_getClosestMatch = Module._getClosestMatch = wasmExports.getClosestMatch)(e), _GetExistingLocalJoinPath = Module._GetExistingLocalJoinPath = (e) => (_GetExistingLocalJoinPath = Module._GetExistingLocalJoinPath = wasmExports.GetExistingLocalJoinPath)(e), _bloom_create = Module._bloom_create = (e, t2, r2) => (_bloom_create = Module._bloom_create = wasmExports.bloom_create)(e, t2, r2), _bloom_free = Module._bloom_free = (e) => (_bloom_free = Module._bloom_free = wasmExports.bloom_free)(e), _bloom_add_element = Module._bloom_add_element = (e, t2, r2) => (_bloom_add_element = Module._bloom_add_element = wasmExports.bloom_add_element)(e, t2, r2), _bloom_lacks_element = Module._bloom_lacks_element = (e, t2, r2) => (_bloom_lacks_element = Module._bloom_lacks_element = wasmExports.bloom_lacks_element)(e, t2, r2), _bloom_prop_bits_set = Module._bloom_prop_bits_set = (e) => (_bloom_prop_bits_set = Module._bloom_prop_bits_set = wasmExports.bloom_prop_bits_set)(e), _dshash_create = Module._dshash_create = (e, t2, r2) => (_dshash_create = Module._dshash_create = wasmExports.dshash_create)(e, t2, r2), _dshash_attach = Module._dshash_attach = (e, t2, r2, a2) => (_dshash_attach = Module._dshash_attach = wasmExports.dshash_attach)(e, t2, r2, a2), _dshash_detach = Module._dshash_detach = (e) => (_dshash_detach = Module._dshash_detach = wasmExports.dshash_detach)(e), _dshash_destroy = Module._dshash_destroy = (e) => (_dshash_destroy = Module._dshash_destroy = wasmExports.dshash_destroy)(e), _dshash_get_hash_table_handle = Module._dshash_get_hash_table_handle = (e) => (_dshash_get_hash_table_handle = Module._dshash_get_hash_table_handle = wasmExports.dshash_get_hash_table_handle)(e), _dshash_find = Module._dshash_find = (e, t2, r2) => (_dshash_find = Module._dshash_find = wasmExports.dshash_find)(e, t2, r2), _dshash_find_or_insert = Module._dshash_find_or_insert = (e, t2, r2) => (_dshash_find_or_insert = Module._dshash_find_or_insert = wasmExports.dshash_find_or_insert)(e, t2, r2), _dshash_delete_key = Module._dshash_delete_key = (e, t2) => (_dshash_delete_key = Module._dshash_delete_key = wasmExports.dshash_delete_key)(e, t2), _dshash_release_lock = Module._dshash_release_lock = (e, t2) => (_dshash_release_lock = Module._dshash_release_lock = wasmExports.dshash_release_lock)(e, t2), _dshash_memcmp = Module._dshash_memcmp = (e, t2, r2, a2) => (_dshash_memcmp = Module._dshash_memcmp = wasmExports.dshash_memcmp)(e, t2, r2, a2), _dshash_memhash = Module._dshash_memhash = (e, t2, r2) => (_dshash_memhash = Module._dshash_memhash = wasmExports.dshash_memhash)(e, t2, r2), _tag_hash = Module._tag_hash = (e, t2) => (_tag_hash = Module._tag_hash = wasmExports.tag_hash)(e, t2), _dshash_memcpy = Module._dshash_memcpy = (e, t2, r2, a2) => (_dshash_memcpy = Module._dshash_memcpy = wasmExports.dshash_memcpy)(e, t2, r2, a2), _dshash_seq_init = Module._dshash_seq_init = (e, t2, r2) => (_dshash_seq_init = Module._dshash_seq_init = wasmExports.dshash_seq_init)(e, t2, r2), _dshash_seq_next = Module._dshash_seq_next = (e) => (_dshash_seq_next = Module._dshash_seq_next = wasmExports.dshash_seq_next)(e), _dshash_seq_term = Module._dshash_seq_term = (e) => (_dshash_seq_term = Module._dshash_seq_term = wasmExports.dshash_seq_term)(e), _dshash_delete_current = Module._dshash_delete_current = (e) => (_dshash_delete_current = Module._dshash_delete_current = wasmExports.dshash_delete_current)(e), _ldexp = Module._ldexp = (e, t2) => (_ldexp = Module._ldexp = wasmExports.ldexp)(e, t2), _strtok = Module._strtok = (e, t2) => (_strtok = Module._strtok = wasmExports.strtok)(e, t2), _strtol = Module._strtol = (e, t2, r2) => (_strtol = Module._strtol = wasmExports.strtol)(e, t2, r2), _gai_strerror = Module._gai_strerror = (e) => (_gai_strerror = Module._gai_strerror = wasmExports.gai_strerror)(e), _pgl_getpwuid = Module._pgl_getpwuid = (e) => (_pgl_getpwuid = Module._pgl_getpwuid = wasmExports.pgl_getpwuid)(e), _socket = Module._socket = (e, t2, r2) => (_socket = Module._socket = wasmExports.socket)(e, t2, r2), _pgl_connect = Module._pgl_connect = (e, t2, r2) => (_pgl_connect = Module._pgl_connect = wasmExports.pgl_connect)(e, t2, r2), _pgl_send = Module._pgl_send = (e, t2, r2, a2) => (_pgl_send = Module._pgl_send = wasmExports.pgl_send)(e, t2, r2, a2), _pgl_recv = Module._pgl_recv = (e, t2, r2, a2) => (_pgl_recv = Module._pgl_recv = wasmExports.pgl_recv)(e, t2, r2, a2), _be_lo_unlink = Module._be_lo_unlink = (e) => (_be_lo_unlink = Module._be_lo_unlink = wasmExports.be_lo_unlink)(e), _text_to_cstring_buffer = Module._text_to_cstring_buffer = (e, t2, r2) => (_text_to_cstring_buffer = Module._text_to_cstring_buffer = wasmExports.text_to_cstring_buffer)(e, t2, r2), _pg_mb2wchar_with_len = Module._pg_mb2wchar_with_len = (e, t2, r2) => (_pg_mb2wchar_with_len = Module._pg_mb2wchar_with_len = wasmExports.pg_mb2wchar_with_len)(e, t2, r2), _pg_regcomp = Module._pg_regcomp = (e, t2, r2, a2, o5) => (_pg_regcomp = Module._pg_regcomp = wasmExports.pg_regcomp)(e, t2, r2, a2, o5), _pg_regerror = Module._pg_regerror = (e, t2, r2, a2) => (_pg_regerror = Module._pg_regerror = wasmExports.pg_regerror)(e, t2, r2, a2), _strcat = Module._strcat = (e, t2) => (_strcat = Module._strcat = wasmExports.strcat)(e, t2), _pgl_getsockname = Module._pgl_getsockname = (e, t2, r2) => (_pgl_getsockname = Module._pgl_getsockname = wasmExports.pgl_getsockname)(e, t2, r2), _pgl_setsockopt = Module._pgl_setsockopt = (e, t2, r2, a2, o5) => (_pgl_setsockopt = Module._pgl_setsockopt = wasmExports.pgl_setsockopt)(e, t2, r2, a2, o5), _pgl_fcntl = Module._pgl_fcntl = (e, t2, r2) => (_pgl_fcntl = Module._pgl_fcntl = wasmExports.pgl_fcntl)(e, t2, r2), _utime = Module._utime = (e, t2) => (_utime = Module._utime = wasmExports.utime)(e, t2), _pq_buffer_remaining_data = Module._pq_buffer_remaining_data = () => (_pq_buffer_remaining_data = Module._pq_buffer_remaining_data = wasmExports.pq_buffer_remaining_data)(), _pgl_getsockopt = Module._pgl_getsockopt = (e, t2, r2, a2, o5) => (_pgl_getsockopt = Module._pgl_getsockopt = wasmExports.pgl_getsockopt)(e, t2, r2, a2, o5), _pq_sendtext = Module._pq_sendtext = (e, t2, r2) => (_pq_sendtext = Module._pq_sendtext = wasmExports.pq_sendtext)(e, t2, r2), _pq_sendfloat4 = Module._pq_sendfloat4 = (e, t2) => (_pq_sendfloat4 = Module._pq_sendfloat4 = wasmExports.pq_sendfloat4)(e, t2), _pq_sendfloat8 = Module._pq_sendfloat8 = (e, t2) => (_pq_sendfloat8 = Module._pq_sendfloat8 = wasmExports.pq_sendfloat8)(e, t2), _pq_begintypsend = Module._pq_begintypsend = (e) => (_pq_begintypsend = Module._pq_begintypsend = wasmExports.pq_begintypsend)(e), _pq_endtypsend = Module._pq_endtypsend = (e) => (_pq_endtypsend = Module._pq_endtypsend = wasmExports.pq_endtypsend)(e), _pq_getmsgfloat4 = Module._pq_getmsgfloat4 = (e) => (_pq_getmsgfloat4 = Module._pq_getmsgfloat4 = wasmExports.pq_getmsgfloat4)(e), _pq_getmsgfloat8 = Module._pq_getmsgfloat8 = (e) => (_pq_getmsgfloat8 = Module._pq_getmsgfloat8 = wasmExports.pq_getmsgfloat8)(e), _pq_getmsgtext = Module._pq_getmsgtext = (e, t2, r2) => (_pq_getmsgtext = Module._pq_getmsgtext = wasmExports.pq_getmsgtext)(e, t2, r2), _pg_strtoint32 = Module._pg_strtoint32 = (e) => (_pg_strtoint32 = Module._pg_strtoint32 = wasmExports.pg_strtoint32)(e), _main = Module._main = (e, t2) => (_main = Module._main = wasmExports.__main_argc_argv)(e, t2), _pgl_getuid = Module._pgl_getuid = () => (_pgl_getuid = Module._pgl_getuid = wasmExports.pgl_getuid)(), _getenv = Module._getenv = (e) => (_getenv = Module._getenv = wasmExports.getenv)(e), _bms_membership = Module._bms_membership = (e) => (_bms_membership = Module._bms_membership = wasmExports.bms_membership)(e), _RegisterExtensibleNodeMethods = Module._RegisterExtensibleNodeMethods = (e) => (_RegisterExtensibleNodeMethods = Module._RegisterExtensibleNodeMethods = wasmExports.RegisterExtensibleNodeMethods)(e), _list_make5_impl = Module._list_make5_impl = (e, t2, r2, a2, o5, _5) => (_list_make5_impl = Module._list_make5_impl = wasmExports.list_make5_impl)(e, t2, r2, a2, o5, _5), _GetMemoryChunkContext = Module._GetMemoryChunkContext = (e) => (_GetMemoryChunkContext = Module._GetMemoryChunkContext = wasmExports.GetMemoryChunkContext)(e), _list_insert_nth = Module._list_insert_nth = (e, t2, r2) => (_list_insert_nth = Module._list_insert_nth = wasmExports.list_insert_nth)(e, t2, r2), _list_member_ptr = Module._list_member_ptr = (e, t2) => (_list_member_ptr = Module._list_member_ptr = wasmExports.list_member_ptr)(e, t2), _list_append_unique_ptr = Module._list_append_unique_ptr = (e, t2) => (_list_append_unique_ptr = Module._list_append_unique_ptr = wasmExports.list_append_unique_ptr)(e, t2), _make_opclause = Module._make_opclause = (e, t2, r2, a2, o5, _5, s5) => (_make_opclause = Module._make_opclause = wasmExports.make_opclause)(e, t2, r2, a2, o5, _5, s5), _exprIsLengthCoercion = Module._exprIsLengthCoercion = (e, t2) => (_exprIsLengthCoercion = Module._exprIsLengthCoercion = wasmExports.exprIsLengthCoercion)(e, t2), _fix_opfuncids = Module._fix_opfuncids = (e) => (_fix_opfuncids = Module._fix_opfuncids = wasmExports.fix_opfuncids)(e), _expression_tree_mutator_impl = Module._expression_tree_mutator_impl = (e, t2, r2) => (_expression_tree_mutator_impl = Module._expression_tree_mutator_impl = wasmExports.expression_tree_mutator_impl)(e, t2, r2), _outToken = Module._outToken = (e, t2) => (_outToken = Module._outToken = wasmExports.outToken)(e, t2), _outNode = Module._outNode = (e, t2) => (_outNode = Module._outNode = wasmExports.outNode)(e, t2), _appendStringInfoStringQuoted = Module._appendStringInfoStringQuoted = (e, t2, r2) => (_appendStringInfoStringQuoted = Module._appendStringInfoStringQuoted = wasmExports.appendStringInfoStringQuoted)(e, t2, r2), _CleanQuerytext = Module._CleanQuerytext = (e, t2, r2) => (_CleanQuerytext = Module._CleanQuerytext = wasmExports.CleanQuerytext)(e, t2, r2), _EnableQueryId = Module._EnableQueryId = () => (_EnableQueryId = Module._EnableQueryId = wasmExports.EnableQueryId)(), _nodeRead = Module._nodeRead = (e, t2) => (_nodeRead = Module._nodeRead = wasmExports.nodeRead)(e, t2), _pg_strtok = Module._pg_strtok = (e) => (_pg_strtok = Module._pg_strtok = wasmExports.pg_strtok)(e), _debackslash = Module._debackslash = (e, t2) => (_debackslash = Module._debackslash = wasmExports.debackslash)(e, t2), _exp2 = Module._exp2 = (e) => (_exp2 = Module._exp2 = wasmExports.exp2)(e), _find_base_rel = Module._find_base_rel = (e, t2) => (_find_base_rel = Module._find_base_rel = wasmExports.find_base_rel)(e, t2), _add_path = Module._add_path = (e, t2) => (_add_path = Module._add_path = wasmExports.add_path)(e, t2), _pathkeys_contained_in = Module._pathkeys_contained_in = (e, t2) => (_pathkeys_contained_in = Module._pathkeys_contained_in = wasmExports.pathkeys_contained_in)(e, t2), _create_sort_path = Module._create_sort_path = (e, t2, r2, a2, o5) => (_create_sort_path = Module._create_sort_path = wasmExports.create_sort_path)(e, t2, r2, a2, o5), _set_baserel_size_estimates = Module._set_baserel_size_estimates = (e, t2) => (_set_baserel_size_estimates = Module._set_baserel_size_estimates = wasmExports.set_baserel_size_estimates)(e, t2), _clauselist_selectivity = Module._clauselist_selectivity = (e, t2, r2, a2, o5) => (_clauselist_selectivity = Module._clauselist_selectivity = wasmExports.clauselist_selectivity)(e, t2, r2, a2, o5), _get_tablespace_page_costs = Module._get_tablespace_page_costs = (e, t2, r2) => (_get_tablespace_page_costs = Module._get_tablespace_page_costs = wasmExports.get_tablespace_page_costs)(e, t2, r2), _cost_qual_eval = Module._cost_qual_eval = (e, t2, r2) => (_cost_qual_eval = Module._cost_qual_eval = wasmExports.cost_qual_eval)(e, t2, r2), _pull_varnos = Module._pull_varnos = (e, t2) => (_pull_varnos = Module._pull_varnos = wasmExports.pull_varnos)(e, t2), _estimate_num_groups = Module._estimate_num_groups = (e, t2, r2, a2, o5) => (_estimate_num_groups = Module._estimate_num_groups = wasmExports.estimate_num_groups)(e, t2, r2, a2, o5), _cost_sort = Module._cost_sort = (e, t2, r2, a2, o5, _5, s5, n3, l2) => (_cost_sort = Module._cost_sort = wasmExports.cost_sort)(e, t2, r2, a2, o5, _5, s5, n3, l2), _get_sortgrouplist_exprs = Module._get_sortgrouplist_exprs = (e, t2) => (_get_sortgrouplist_exprs = Module._get_sortgrouplist_exprs = wasmExports.get_sortgrouplist_exprs)(e, t2), _make_restrictinfo = Module._make_restrictinfo = (e, t2, r2, a2, o5, _5, s5, n3, l2, d3) => (_make_restrictinfo = Module._make_restrictinfo = wasmExports.make_restrictinfo)(e, t2, r2, a2, o5, _5, s5, n3, l2, d3), _remove_nulling_relids = Module._remove_nulling_relids = (e, t2, r2) => (_remove_nulling_relids = Module._remove_nulling_relids = wasmExports.remove_nulling_relids)(e, t2, r2), _get_mergejoin_opfamilies = Module._get_mergejoin_opfamilies = (e) => (_get_mergejoin_opfamilies = Module._get_mergejoin_opfamilies = wasmExports.get_mergejoin_opfamilies)(e), _generate_implied_equalities_for_column = Module._generate_implied_equalities_for_column = (e, t2, r2, a2, o5) => (_generate_implied_equalities_for_column = Module._generate_implied_equalities_for_column = wasmExports.generate_implied_equalities_for_column)(e, t2, r2, a2, o5), _eclass_useful_for_merging = Module._eclass_useful_for_merging = (e, t2, r2) => (_eclass_useful_for_merging = Module._eclass_useful_for_merging = wasmExports.eclass_useful_for_merging)(e, t2, r2), _join_clause_is_movable_to = Module._join_clause_is_movable_to = (e, t2) => (_join_clause_is_movable_to = Module._join_clause_is_movable_to = wasmExports.join_clause_is_movable_to)(e, t2), _get_plan_rowmark = Module._get_plan_rowmark = (e, t2) => (_get_plan_rowmark = Module._get_plan_rowmark = wasmExports.get_plan_rowmark)(e, t2), _is_pseudo_constant_for_index = Module._is_pseudo_constant_for_index = (e, t2, r2) => (_is_pseudo_constant_for_index = Module._is_pseudo_constant_for_index = wasmExports.is_pseudo_constant_for_index)(e, t2, r2), _update_mergeclause_eclasses = Module._update_mergeclause_eclasses = (e, t2) => (_update_mergeclause_eclasses = Module._update_mergeclause_eclasses = wasmExports.update_mergeclause_eclasses)(e, t2), _find_join_rel = Module._find_join_rel = (e, t2) => (_find_join_rel = Module._find_join_rel = wasmExports.find_join_rel)(e, t2), _make_canonical_pathkey = Module._make_canonical_pathkey = (e, t2, r2, a2, o5) => (_make_canonical_pathkey = Module._make_canonical_pathkey = wasmExports.make_canonical_pathkey)(e, t2, r2, a2, o5), _get_sortgroupref_clause_noerr = Module._get_sortgroupref_clause_noerr = (e, t2) => (_get_sortgroupref_clause_noerr = Module._get_sortgroupref_clause_noerr = wasmExports.get_sortgroupref_clause_noerr)(e, t2), _extract_actual_clauses = Module._extract_actual_clauses = (e, t2) => (_extract_actual_clauses = Module._extract_actual_clauses = wasmExports.extract_actual_clauses)(e, t2), _change_plan_targetlist = Module._change_plan_targetlist = (e, t2, r2) => (_change_plan_targetlist = Module._change_plan_targetlist = wasmExports.change_plan_targetlist)(e, t2, r2), _make_foreignscan = Module._make_foreignscan = (e, t2, r2, a2, o5, _5, s5, n3) => (_make_foreignscan = Module._make_foreignscan = wasmExports.make_foreignscan)(e, t2, r2, a2, o5, _5, s5, n3), _tlist_member = Module._tlist_member = (e, t2) => (_tlist_member = Module._tlist_member = wasmExports.tlist_member)(e, t2), _pull_vars_of_level = Module._pull_vars_of_level = (e, t2) => (_pull_vars_of_level = Module._pull_vars_of_level = wasmExports.pull_vars_of_level)(e, t2), _IncrementVarSublevelsUp = Module._IncrementVarSublevelsUp = (e, t2, r2) => (_IncrementVarSublevelsUp = Module._IncrementVarSublevelsUp = wasmExports.IncrementVarSublevelsUp)(e, t2, r2), _op_mergejoinable = Module._op_mergejoinable = (e, t2) => (_op_mergejoinable = Module._op_mergejoinable = wasmExports.op_mergejoinable)(e, t2), _find_nonnullable_rels = Module._find_nonnullable_rels = (e) => (_find_nonnullable_rels = Module._find_nonnullable_rels = wasmExports.find_nonnullable_rels)(e), _standard_planner = Module._standard_planner = (e, t2, r2, a2) => (_standard_planner = Module._standard_planner = wasmExports.standard_planner)(e, t2, r2, a2), _get_relids_in_jointree = Module._get_relids_in_jointree = (e, t2, r2) => (_get_relids_in_jointree = Module._get_relids_in_jointree = wasmExports.get_relids_in_jointree)(e, t2, r2), _SS_process_sublinks = Module._SS_process_sublinks = (e, t2, r2) => (_SS_process_sublinks = Module._SS_process_sublinks = wasmExports.SS_process_sublinks)(e, t2, r2), _add_new_columns_to_pathtarget = Module._add_new_columns_to_pathtarget = (e, t2) => (_add_new_columns_to_pathtarget = Module._add_new_columns_to_pathtarget = wasmExports.add_new_columns_to_pathtarget)(e, t2), _get_agg_clause_costs = Module._get_agg_clause_costs = (e, t2, r2) => (_get_agg_clause_costs = Module._get_agg_clause_costs = wasmExports.get_agg_clause_costs)(e, t2, r2), _grouping_is_sortable = Module._grouping_is_sortable = (e) => (_grouping_is_sortable = Module._grouping_is_sortable = wasmExports.grouping_is_sortable)(e), _copy_pathtarget = Module._copy_pathtarget = (e) => (_copy_pathtarget = Module._copy_pathtarget = wasmExports.copy_pathtarget)(e), _create_projection_path = Module._create_projection_path = (e, t2, r2, a2) => (_create_projection_path = Module._create_projection_path = wasmExports.create_projection_path)(e, t2, r2, a2), _GetSysCacheHashValue = Module._GetSysCacheHashValue = (e, t2, r2, a2, o5) => (_GetSysCacheHashValue = Module._GetSysCacheHashValue = wasmExports.GetSysCacheHashValue)(e, t2, r2, a2, o5), _contain_nonstrict_functions = Module._contain_nonstrict_functions = (e) => (_contain_nonstrict_functions = Module._contain_nonstrict_functions = wasmExports.contain_nonstrict_functions)(e), _get_translated_update_targetlist = Module._get_translated_update_targetlist = (e, t2, r2, a2) => (_get_translated_update_targetlist = Module._get_translated_update_targetlist = wasmExports.get_translated_update_targetlist)(e, t2, r2, a2), _add_row_identity_var = Module._add_row_identity_var = (e, t2, r2, a2) => (_add_row_identity_var = Module._add_row_identity_var = wasmExports.add_row_identity_var)(e, t2, r2, a2), _get_rel_all_updated_cols = Module._get_rel_all_updated_cols = (e, t2) => (_get_rel_all_updated_cols = Module._get_rel_all_updated_cols = wasmExports.get_rel_all_updated_cols)(e, t2), _get_baserel_parampathinfo = Module._get_baserel_parampathinfo = (e, t2, r2) => (_get_baserel_parampathinfo = Module._get_baserel_parampathinfo = wasmExports.get_baserel_parampathinfo)(e, t2, r2), _create_foreignscan_path = Module._create_foreignscan_path = (e, t2, r2, a2, o5, _5, s5, n3, l2, d3, u3) => (_create_foreignscan_path = Module._create_foreignscan_path = wasmExports.create_foreignscan_path)(e, t2, r2, a2, o5, _5, s5, n3, l2, d3, u3), _create_foreign_join_path = Module._create_foreign_join_path = (e, t2, r2, a2, o5, _5, s5, n3, l2, d3, u3) => (_create_foreign_join_path = Module._create_foreign_join_path = wasmExports.create_foreign_join_path)(e, t2, r2, a2, o5, _5, s5, n3, l2, d3, u3), _create_foreign_upper_path = Module._create_foreign_upper_path = (e, t2, r2, a2, o5, _5, s5, n3, l2, d3) => (_create_foreign_upper_path = Module._create_foreign_upper_path = wasmExports.create_foreign_upper_path)(e, t2, r2, a2, o5, _5, s5, n3, l2, d3), _adjust_limit_rows_costs = Module._adjust_limit_rows_costs = (e, t2, r2, a2, o5) => (_adjust_limit_rows_costs = Module._adjust_limit_rows_costs = wasmExports.adjust_limit_rows_costs)(e, t2, r2, a2, o5), _add_to_flat_tlist = Module._add_to_flat_tlist = (e, t2) => (_add_to_flat_tlist = Module._add_to_flat_tlist = wasmExports.add_to_flat_tlist)(e, t2), _get_fn_expr_variadic = Module._get_fn_expr_variadic = (e) => (_get_fn_expr_variadic = Module._get_fn_expr_variadic = wasmExports.get_fn_expr_variadic)(e), _get_fn_expr_argtype = Module._get_fn_expr_argtype = (e, t2) => (_get_fn_expr_argtype = Module._get_fn_expr_argtype = wasmExports.get_fn_expr_argtype)(e, t2), _on_shmem_exit = Module._on_shmem_exit = (e, t2) => (_on_shmem_exit = Module._on_shmem_exit = wasmExports.on_shmem_exit)(e, t2), _pgl_shmdt = Module._pgl_shmdt = (e) => (_pgl_shmdt = Module._pgl_shmdt = wasmExports.pgl_shmdt)(e), _pgl_shmctl = Module._pgl_shmctl = (e, t2, r2) => (_pgl_shmctl = Module._pgl_shmctl = wasmExports.pgl_shmctl)(e, t2, r2), _pgl_shmat = Module._pgl_shmat = (e, t2, r2) => (_pgl_shmat = Module._pgl_shmat = wasmExports.pgl_shmat)(e, t2, r2), _mmap = Module._mmap = (e, t2, r2, a2, o5, _5) => (_mmap = Module._mmap = wasmExports.mmap)(e, t2, r2, a2, o5, _5), _pgl_shmget = Module._pgl_shmget = (e, t2, r2) => (_pgl_shmget = Module._pgl_shmget = wasmExports.pgl_shmget)(e, t2, r2), _pgl_munmap = Module._pgl_munmap = (e, t2) => (_pgl_munmap = Module._pgl_munmap = wasmExports.pgl_munmap)(e, t2), _SignalHandlerForConfigReload = Module._SignalHandlerForConfigReload = (e) => (_SignalHandlerForConfigReload = Module._SignalHandlerForConfigReload = wasmExports.SignalHandlerForConfigReload)(e), _SignalHandlerForShutdownRequest = Module._SignalHandlerForShutdownRequest = (e) => (_SignalHandlerForShutdownRequest = Module._SignalHandlerForShutdownRequest = wasmExports.SignalHandlerForShutdownRequest)(e), _procsignal_sigusr1_handler = Module._procsignal_sigusr1_handler = (e) => (_procsignal_sigusr1_handler = Module._procsignal_sigusr1_handler = wasmExports.procsignal_sigusr1_handler)(e), _RegisterBackgroundWorker = Module._RegisterBackgroundWorker = (e) => (_RegisterBackgroundWorker = Module._RegisterBackgroundWorker = wasmExports.RegisterBackgroundWorker)(e), _WaitForBackgroundWorkerStartup = Module._WaitForBackgroundWorkerStartup = (e, t2) => (_WaitForBackgroundWorkerStartup = Module._WaitForBackgroundWorkerStartup = wasmExports.WaitForBackgroundWorkerStartup)(e, t2), _open = Module._open = (e, t2, r2) => (_open = Module._open = wasmExports.open)(e, t2, r2), _rename = Module._rename = (e, t2) => (_rename = Module._rename = wasmExports.rename)(e, t2), _GetConfigOption = Module._GetConfigOption = (e, t2, r2) => (_GetConfigOption = Module._GetConfigOption = wasmExports.GetConfigOption)(e, t2, r2), _puts = Module._puts = (e) => (_puts = Module._puts = wasmExports.puts)(e), _fopen = Module._fopen = (e, t2) => (_fopen = Module._fopen = wasmExports.fopen)(e, t2), _fclose = Module._fclose = (e) => (_fclose = Module._fclose = wasmExports.fclose)(e), _fputc = Module._fputc = (e, t2) => (_fputc = Module._fputc = wasmExports.fputc)(e, t2), _ftell = Module._ftell = (e) => (_ftell = Module._ftell = wasmExports.ftell)(e), _iswprint_l = Module._iswprint_l = (e, t2) => (_iswprint_l = Module._iswprint_l = wasmExports.iswprint_l)(e, t2), _isalnum = Module._isalnum = (e) => (_isalnum = Module._isalnum = wasmExports.isalnum)(e), _iswalpha_l = Module._iswalpha_l = (e, t2) => (_iswalpha_l = Module._iswalpha_l = wasmExports.iswalpha_l)(e, t2), _iswdigit_l = Module._iswdigit_l = (e, t2) => (_iswdigit_l = Module._iswdigit_l = wasmExports.iswdigit_l)(e, t2), _isdigit_l = Module._isdigit_l = (e, t2) => (_isdigit_l = Module._isdigit_l = wasmExports.isdigit_l)(e, t2), _iswpunct_l = Module._iswpunct_l = (e, t2) => (_iswpunct_l = Module._iswpunct_l = wasmExports.iswpunct_l)(e, t2), _iswspace_l = Module._iswspace_l = (e, t2) => (_iswspace_l = Module._iswspace_l = wasmExports.iswspace_l)(e, t2), _iswlower_l = Module._iswlower_l = (e, t2) => (_iswlower_l = Module._iswlower_l = wasmExports.iswlower_l)(e, t2), _iswupper_l = Module._iswupper_l = (e, t2) => (_iswupper_l = Module._iswupper_l = wasmExports.iswupper_l)(e, t2), _towlower_l = Module._towlower_l = (e, t2) => (_towlower_l = Module._towlower_l = wasmExports.towlower_l)(e, t2), _tolower_l = Module._tolower_l = (e, t2) => (_tolower_l = Module._tolower_l = wasmExports.tolower_l)(e, t2), _toupper = Module._toupper = (e) => (_toupper = Module._toupper = wasmExports.toupper)(e), _towupper_l = Module._towupper_l = (e, t2) => (_towupper_l = Module._towupper_l = wasmExports.towupper_l)(e, t2), _toupper_l = Module._toupper_l = (e, t2) => (_toupper_l = Module._toupper_l = wasmExports.toupper_l)(e, t2), _pg_reg_getinitialstate = Module._pg_reg_getinitialstate = (e) => (_pg_reg_getinitialstate = Module._pg_reg_getinitialstate = wasmExports.pg_reg_getinitialstate)(e), _pg_reg_getfinalstate = Module._pg_reg_getfinalstate = (e) => (_pg_reg_getfinalstate = Module._pg_reg_getfinalstate = wasmExports.pg_reg_getfinalstate)(e), _pg_reg_getnumoutarcs = Module._pg_reg_getnumoutarcs = (e, t2) => (_pg_reg_getnumoutarcs = Module._pg_reg_getnumoutarcs = wasmExports.pg_reg_getnumoutarcs)(e, t2), _pg_reg_getoutarcs = Module._pg_reg_getoutarcs = (e, t2, r2, a2) => (_pg_reg_getoutarcs = Module._pg_reg_getoutarcs = wasmExports.pg_reg_getoutarcs)(e, t2, r2, a2), _pg_reg_getnumcolors = Module._pg_reg_getnumcolors = (e) => (_pg_reg_getnumcolors = Module._pg_reg_getnumcolors = wasmExports.pg_reg_getnumcolors)(e), _pg_reg_colorisbegin = Module._pg_reg_colorisbegin = (e, t2) => (_pg_reg_colorisbegin = Module._pg_reg_colorisbegin = wasmExports.pg_reg_colorisbegin)(e, t2), _pg_reg_colorisend = Module._pg_reg_colorisend = (e, t2) => (_pg_reg_colorisend = Module._pg_reg_colorisend = wasmExports.pg_reg_colorisend)(e, t2), _pg_reg_getnumcharacters = Module._pg_reg_getnumcharacters = (e, t2) => (_pg_reg_getnumcharacters = Module._pg_reg_getnumcharacters = wasmExports.pg_reg_getnumcharacters)(e, t2), _pg_reg_getcharacters = Module._pg_reg_getcharacters = (e, t2, r2, a2) => (_pg_reg_getcharacters = Module._pg_reg_getcharacters = wasmExports.pg_reg_getcharacters)(e, t2, r2, a2), _dsa_pin = Module._dsa_pin = (e) => (_dsa_pin = Module._dsa_pin = wasmExports.dsa_pin)(e), _OutputPluginPrepareWrite = Module._OutputPluginPrepareWrite = (e, t2) => (_OutputPluginPrepareWrite = Module._OutputPluginPrepareWrite = wasmExports.OutputPluginPrepareWrite)(e, t2), _OutputPluginWrite = Module._OutputPluginWrite = (e, t2) => (_OutputPluginWrite = Module._OutputPluginWrite = wasmExports.OutputPluginWrite)(e, t2), _array_contains_nulls = Module._array_contains_nulls = (e) => (_array_contains_nulls = Module._array_contains_nulls = wasmExports.array_contains_nulls)(e), _CacheRegisterRelcacheCallback = Module._CacheRegisterRelcacheCallback = (e, t2) => (_CacheRegisterRelcacheCallback = Module._CacheRegisterRelcacheCallback = wasmExports.CacheRegisterRelcacheCallback)(e, t2), _hash_seq_term = Module._hash_seq_term = (e) => (_hash_seq_term = Module._hash_seq_term = wasmExports.hash_seq_term)(e), _FreeErrorData = Module._FreeErrorData = (e) => (_FreeErrorData = Module._FreeErrorData = wasmExports.FreeErrorData)(e), _RelidByRelfilenumber = Module._RelidByRelfilenumber = (e, t2) => (_RelidByRelfilenumber = Module._RelidByRelfilenumber = wasmExports.RelidByRelfilenumber)(e, t2), _WaitLatchOrSocket = Module._WaitLatchOrSocket = (e, t2, r2, a2, o5) => (_WaitLatchOrSocket = Module._WaitLatchOrSocket = wasmExports.WaitLatchOrSocket)(e, t2, r2, a2, o5), _get_row_security_policies = Module._get_row_security_policies = (e, t2, r2, a2, o5, _5, s5) => (_get_row_security_policies = Module._get_row_security_policies = wasmExports.get_row_security_policies)(e, t2, r2, a2, o5, _5, s5), _hash_estimate_size = Module._hash_estimate_size = (e, t2) => (_hash_estimate_size = Module._hash_estimate_size = wasmExports.hash_estimate_size)(e, t2), _ShmemInitHash = Module._ShmemInitHash = (e, t2, r2, a2, o5) => (_ShmemInitHash = Module._ShmemInitHash = wasmExports.ShmemInitHash)(e, t2, r2, a2, o5), _LockBufHdr = Module._LockBufHdr = (e) => (_LockBufHdr = Module._LockBufHdr = wasmExports.LockBufHdr)(e), _EvictUnpinnedBuffer = Module._EvictUnpinnedBuffer = (e) => (_EvictUnpinnedBuffer = Module._EvictUnpinnedBuffer = wasmExports.EvictUnpinnedBuffer)(e), _have_free_buffer = Module._have_free_buffer = () => (_have_free_buffer = Module._have_free_buffer = wasmExports.have_free_buffer)(), _calloc = Module._calloc = (e, t2) => (_calloc = Module._calloc = wasmExports.calloc)(e, t2), _copy_file = Module._copy_file = (e, t2) => (_copy_file = Module._copy_file = wasmExports.copy_file)(e, t2), _fdatasync = Module._fdatasync = (e) => (_fdatasync = Module._fdatasync = wasmExports.fdatasync)(e), _truncate = Module._truncate = (e, t2) => (_truncate = Module._truncate = wasmExports.truncate)(e, t2), _dup = Module._dup = (e) => (_dup = Module._dup = wasmExports.dup)(e), _AcquireExternalFD = Module._AcquireExternalFD = () => (_AcquireExternalFD = Module._AcquireExternalFD = wasmExports.AcquireExternalFD)(), _mkdir = Module._mkdir = (e, t2) => (_mkdir = Module._mkdir = wasmExports.mkdir)(e, t2), _pgl_popen = Module._pgl_popen = (e, t2) => (_pgl_popen = Module._pgl_popen = wasmExports.pgl_popen)(e, t2), _pgl_pclose = Module._pgl_pclose = (e) => (_pgl_pclose = Module._pgl_pclose = wasmExports.pgl_pclose)(e), _closedir = Module._closedir = (e) => (_closedir = Module._closedir = wasmExports.closedir)(e), _opendir = Module._opendir = (e) => (_opendir = Module._opendir = wasmExports.opendir)(e), _readdir = Module._readdir = (e) => (_readdir = Module._readdir = wasmExports.readdir)(e), _GetNamedDSMSegment = Module._GetNamedDSMSegment = (e, t2, r2, a2) => (_GetNamedDSMSegment = Module._GetNamedDSMSegment = wasmExports.GetNamedDSMSegment)(e, t2, r2, a2), _pgl_atexit = Module._pgl_atexit = (e) => (_pgl_atexit = Module._pgl_atexit = wasmExports.pgl_atexit)(e), _RequestAddinShmemSpace = Module._RequestAddinShmemSpace = (e) => (_RequestAddinShmemSpace = Module._RequestAddinShmemSpace = wasmExports.RequestAddinShmemSpace)(e), _pgl_poll = Module._pgl_poll = (e, t2, r2) => (_pgl_poll = Module._pgl_poll = wasmExports.pgl_poll)(e, t2, r2), _GetRunningTransactionData = Module._GetRunningTransactionData = () => (_GetRunningTransactionData = Module._GetRunningTransactionData = wasmExports.GetRunningTransactionData)(), _BackendXidGetPid = Module._BackendXidGetPid = (e) => (_BackendXidGetPid = Module._BackendXidGetPid = wasmExports.BackendXidGetPid)(e), _LWLockRegisterTranche = Module._LWLockRegisterTranche = (e, t2) => (_LWLockRegisterTranche = Module._LWLockRegisterTranche = wasmExports.LWLockRegisterTranche)(e, t2), _GetNamedLWLockTranche = Module._GetNamedLWLockTranche = (e) => (_GetNamedLWLockTranche = Module._GetNamedLWLockTranche = wasmExports.GetNamedLWLockTranche)(e), _LWLockNewTrancheId = Module._LWLockNewTrancheId = () => (_LWLockNewTrancheId = Module._LWLockNewTrancheId = wasmExports.LWLockNewTrancheId)(), _RequestNamedLWLockTranche = Module._RequestNamedLWLockTranche = (e, t2) => (_RequestNamedLWLockTranche = Module._RequestNamedLWLockTranche = wasmExports.RequestNamedLWLockTranche)(e, t2), _LWLockHeldByMe = Module._LWLockHeldByMe = (e) => (_LWLockHeldByMe = Module._LWLockHeldByMe = wasmExports.LWLockHeldByMe)(e), _smgrtruncate = Module._smgrtruncate = (e, t2, r2, a2) => (_smgrtruncate = Module._smgrtruncate = wasmExports.smgrtruncate)(e, t2, r2, a2), _ProcessStartupPacket = Module._ProcessStartupPacket = (e, t2, r2) => (_ProcessStartupPacket = Module._ProcessStartupPacket = wasmExports.ProcessStartupPacket)(e, t2, r2), _htons = (e) => (_htons = wasmExports.htons)(e), _htonl = (e) => (_htonl = wasmExports.htonl)(e), _pgl_startPGlite = Module._pgl_startPGlite = () => (_pgl_startPGlite = Module._pgl_startPGlite = wasmExports.pgl_startPGlite)(), _pgl_pq_flush = Module._pgl_pq_flush = () => (_pgl_pq_flush = Module._pgl_pq_flush = wasmExports.pgl_pq_flush)(), _pgl_getMyProcPort = Module._pgl_getMyProcPort = () => (_pgl_getMyProcPort = Module._pgl_getMyProcPort = wasmExports.pgl_getMyProcPort)(), _pgl_sendConnData = Module._pgl_sendConnData = () => (_pgl_sendConnData = Module._pgl_sendConnData = wasmExports.pgl_sendConnData)(), _PostgresMainLongJmp = Module._PostgresMainLongJmp = () => (_PostgresMainLongJmp = Module._PostgresMainLongJmp = wasmExports.PostgresMainLongJmp)(), _PostgresMainLoopOnce = Module._PostgresMainLoopOnce = () => (_PostgresMainLoopOnce = Module._PostgresMainLoopOnce = wasmExports.PostgresMainLoopOnce)(), _PostgresSendReadyForQueryIfNecessary = Module._PostgresSendReadyForQueryIfNecessary = () => (_PostgresSendReadyForQueryIfNecessary = Module._PostgresSendReadyForQueryIfNecessary = wasmExports.PostgresSendReadyForQueryIfNecessary)(), _errhidestmt = Module._errhidestmt = (e) => (_errhidestmt = Module._errhidestmt = wasmExports.errhidestmt)(e), _standard_ProcessUtility = Module._standard_ProcessUtility = (e, t2, r2, a2, o5, _5, s5, n3) => (_standard_ProcessUtility = Module._standard_ProcessUtility = wasmExports.standard_ProcessUtility)(e, t2, r2, a2, o5, _5, s5, n3), _lookup_ts_dictionary_cache = Module._lookup_ts_dictionary_cache = (e) => (_lookup_ts_dictionary_cache = Module._lookup_ts_dictionary_cache = wasmExports.lookup_ts_dictionary_cache)(e), _get_tsearch_config_filename = Module._get_tsearch_config_filename = (e, t2) => (_get_tsearch_config_filename = Module._get_tsearch_config_filename = wasmExports.get_tsearch_config_filename)(e, t2), _lowerstr = Module._lowerstr = (e) => (_lowerstr = Module._lowerstr = wasmExports.lowerstr)(e), _readstoplist = Module._readstoplist = (e, t2, r2) => (_readstoplist = Module._readstoplist = wasmExports.readstoplist)(e, t2, r2), _lowerstr_with_len = Module._lowerstr_with_len = (e, t2) => (_lowerstr_with_len = Module._lowerstr_with_len = wasmExports.lowerstr_with_len)(e, t2), _searchstoplist = Module._searchstoplist = (e, t2) => (_searchstoplist = Module._searchstoplist = wasmExports.searchstoplist)(e, t2), _tsearch_readline_begin = Module._tsearch_readline_begin = (e, t2) => (_tsearch_readline_begin = Module._tsearch_readline_begin = wasmExports.tsearch_readline_begin)(e, t2), _tsearch_readline = Module._tsearch_readline = (e) => (_tsearch_readline = Module._tsearch_readline = wasmExports.tsearch_readline)(e), _t_isspace = Module._t_isspace = (e) => (_t_isspace = Module._t_isspace = wasmExports.t_isspace)(e), _tsearch_readline_end = Module._tsearch_readline_end = (e) => (_tsearch_readline_end = Module._tsearch_readline_end = wasmExports.tsearch_readline_end)(e), _stringToQualifiedNameList = Module._stringToQualifiedNameList = (e, t2) => (_stringToQualifiedNameList = Module._stringToQualifiedNameList = wasmExports.stringToQualifiedNameList)(e, t2), _t_isdigit = Module._t_isdigit = (e) => (_t_isdigit = Module._t_isdigit = wasmExports.t_isdigit)(e), _to_tsvector_byid = Module._to_tsvector_byid = (e) => (_to_tsvector_byid = Module._to_tsvector_byid = wasmExports.to_tsvector_byid)(e), _to_tsvector = Module._to_tsvector = (e) => (_to_tsvector = Module._to_tsvector = wasmExports.to_tsvector)(e), _t_isalnum = Module._t_isalnum = (e) => (_t_isalnum = Module._t_isalnum = wasmExports.t_isalnum)(e), _get_restriction_variable = Module._get_restriction_variable = (e, t2, r2, a2, o5, _5) => (_get_restriction_variable = Module._get_restriction_variable = wasmExports.get_restriction_variable)(e, t2, r2, a2, o5, _5), _MemoryContextAllocHuge = Module._MemoryContextAllocHuge = (e, t2) => (_MemoryContextAllocHuge = Module._MemoryContextAllocHuge = wasmExports.MemoryContextAllocHuge)(e, t2), _fseek = Module._fseek = (e, t2, r2) => (_fseek = Module._fseek = wasmExports.fseek)(e, t2, r2), _WaitEventExtensionNew = Module._WaitEventExtensionNew = (e) => (_WaitEventExtensionNew = Module._WaitEventExtensionNew = wasmExports.WaitEventExtensionNew)(e), _expand_array = Module._expand_array = (e, t2, r2) => (_expand_array = Module._expand_array = wasmExports.expand_array)(e, t2, r2), _exp = Module._exp = (e) => (_exp = Module._exp = wasmExports.exp)(e), _arraycontsel = Module._arraycontsel = (e) => (_arraycontsel = Module._arraycontsel = wasmExports.arraycontsel)(e), _arraycontjoinsel = Module._arraycontjoinsel = (e) => (_arraycontjoinsel = Module._arraycontjoinsel = wasmExports.arraycontjoinsel)(e), _initArrayResult = Module._initArrayResult = (e, t2, r2) => (_initArrayResult = Module._initArrayResult = wasmExports.initArrayResult)(e, t2, r2), _array_create_iterator = Module._array_create_iterator = (e, t2, r2) => (_array_create_iterator = Module._array_create_iterator = wasmExports.array_create_iterator)(e, t2, r2), _array_iterate = Module._array_iterate = (e, t2, r2) => (_array_iterate = Module._array_iterate = wasmExports.array_iterate)(e, t2, r2), _array_free_iterator = Module._array_free_iterator = (e) => (_array_free_iterator = Module._array_free_iterator = wasmExports.array_free_iterator)(e), _ArrayGetIntegerTypmods = Module._ArrayGetIntegerTypmods = (e, t2) => (_ArrayGetIntegerTypmods = Module._ArrayGetIntegerTypmods = wasmExports.ArrayGetIntegerTypmods)(e, t2), _boolin = Module._boolin = (e) => (_boolin = Module._boolin = wasmExports.boolin)(e), ___multi3 = Module.___multi3 = (e, t2, r2, a2, o5) => (___multi3 = Module.___multi3 = wasmExports.__multi3)(e, t2, r2, a2, o5), _cash_cmp = Module._cash_cmp = (e) => (_cash_cmp = Module._cash_cmp = wasmExports.cash_cmp)(e), _int64_to_numeric = Module._int64_to_numeric = (e) => (_int64_to_numeric = Module._int64_to_numeric = wasmExports.int64_to_numeric)(e), _numeric_div = Module._numeric_div = (e) => (_numeric_div = Module._numeric_div = wasmExports.numeric_div)(e), _numeric_round = Module._numeric_round = (e) => (_numeric_round = Module._numeric_round = wasmExports.numeric_round)(e), _numeric_int8 = Module._numeric_int8 = (e) => (_numeric_int8 = Module._numeric_int8 = wasmExports.numeric_int8)(e), _numeric_mul = Module._numeric_mul = (e) => (_numeric_mul = Module._numeric_mul = wasmExports.numeric_mul)(e), _j2date = Module._j2date = (e, t2, r2, a2) => (_j2date = Module._j2date = wasmExports.j2date)(e, t2, r2, a2), _EncodeDateOnly = Module._EncodeDateOnly = (e, t2, r2) => (_EncodeDateOnly = Module._EncodeDateOnly = wasmExports.EncodeDateOnly)(e, t2, r2), _EncodeSpecialDate = Module._EncodeSpecialDate = (e, t2) => (_EncodeSpecialDate = Module._EncodeSpecialDate = wasmExports.EncodeSpecialDate)(e, t2), _date_eq = Module._date_eq = (e) => (_date_eq = Module._date_eq = wasmExports.date_eq)(e), _date_lt = Module._date_lt = (e) => (_date_lt = Module._date_lt = wasmExports.date_lt)(e), _date_le = Module._date_le = (e) => (_date_le = Module._date_le = wasmExports.date_le)(e), _date_gt = Module._date_gt = (e) => (_date_gt = Module._date_gt = wasmExports.date_gt)(e), _date_ge = Module._date_ge = (e) => (_date_ge = Module._date_ge = wasmExports.date_ge)(e), _date_cmp = Module._date_cmp = (e) => (_date_cmp = Module._date_cmp = wasmExports.date_cmp)(e), _date_mi = Module._date_mi = (e) => (_date_mi = Module._date_mi = wasmExports.date_mi)(e), _timestamp2tm = Module._timestamp2tm = (e, t2, r2, a2, o5, _5) => (_timestamp2tm = Module._timestamp2tm = wasmExports.timestamp2tm)(e, t2, r2, a2, o5, _5), _time2tm = Module._time2tm = (e, t2, r2) => (_time2tm = Module._time2tm = wasmExports.time2tm)(e, t2, r2), _EncodeTimeOnly = Module._EncodeTimeOnly = (e, t2, r2, a2, o5, _5) => (_EncodeTimeOnly = Module._EncodeTimeOnly = wasmExports.EncodeTimeOnly)(e, t2, r2, a2, o5, _5), _time_eq = Module._time_eq = (e) => (_time_eq = Module._time_eq = wasmExports.time_eq)(e), _time_lt = Module._time_lt = (e) => (_time_lt = Module._time_lt = wasmExports.time_lt)(e), _time_le = Module._time_le = (e) => (_time_le = Module._time_le = wasmExports.time_le)(e), _time_gt = Module._time_gt = (e) => (_time_gt = Module._time_gt = wasmExports.time_gt)(e), _time_ge = Module._time_ge = (e) => (_time_ge = Module._time_ge = wasmExports.time_ge)(e), _time_cmp = Module._time_cmp = (e) => (_time_cmp = Module._time_cmp = wasmExports.time_cmp)(e), _time_mi_time = Module._time_mi_time = (e) => (_time_mi_time = Module._time_mi_time = wasmExports.time_mi_time)(e), _timetz2tm = Module._timetz2tm = (e, t2, r2, a2) => (_timetz2tm = Module._timetz2tm = wasmExports.timetz2tm)(e, t2, r2, a2), _timetz_cmp = Module._timetz_cmp = (e) => (_timetz_cmp = Module._timetz_cmp = wasmExports.timetz_cmp)(e), _pg_tolower = Module._pg_tolower = (e) => (_pg_tolower = Module._pg_tolower = wasmExports.pg_tolower)(e), _EncodeDateTime = Module._EncodeDateTime = (e, t2, r2, a2, o5, _5, s5) => (_EncodeDateTime = Module._EncodeDateTime = wasmExports.EncodeDateTime)(e, t2, r2, a2, o5, _5, s5), _TransferExpandedObject = Module._TransferExpandedObject = (e, t2) => (_TransferExpandedObject = Module._TransferExpandedObject = wasmExports.TransferExpandedObject)(e, t2), _forkname_to_number = Module._forkname_to_number = (e) => (_forkname_to_number = Module._forkname_to_number = wasmExports.forkname_to_number)(e), _numeric_lt = Module._numeric_lt = (e) => (_numeric_lt = Module._numeric_lt = wasmExports.numeric_lt)(e), _numeric_abs = Module._numeric_abs = (e) => (_numeric_abs = Module._numeric_abs = wasmExports.numeric_abs)(e), _numeric_add = Module._numeric_add = (e) => (_numeric_add = Module._numeric_add = wasmExports.numeric_add)(e), _numeric_ge = Module._numeric_ge = (e) => (_numeric_ge = Module._numeric_ge = wasmExports.numeric_ge)(e), _err_generic_string = Module._err_generic_string = (e, t2) => (_err_generic_string = Module._err_generic_string = wasmExports.err_generic_string)(e, t2), _domain_check = Module._domain_check = (e, t2, r2, a2, o5) => (_domain_check = Module._domain_check = wasmExports.domain_check)(e, t2, r2, a2, o5), _enum_lt = Module._enum_lt = (e) => (_enum_lt = Module._enum_lt = wasmExports.enum_lt)(e), _enum_le = Module._enum_le = (e) => (_enum_le = Module._enum_le = wasmExports.enum_le)(e), _enum_ge = Module._enum_ge = (e) => (_enum_ge = Module._enum_ge = wasmExports.enum_ge)(e), _enum_gt = Module._enum_gt = (e) => (_enum_gt = Module._enum_gt = wasmExports.enum_gt)(e), _enum_cmp = Module._enum_cmp = (e) => (_enum_cmp = Module._enum_cmp = wasmExports.enum_cmp)(e), _make_expanded_record_from_typeid = Module._make_expanded_record_from_typeid = (e, t2, r2) => (_make_expanded_record_from_typeid = Module._make_expanded_record_from_typeid = wasmExports.make_expanded_record_from_typeid)(e, t2, r2), _MemoryContextRegisterResetCallback = Module._MemoryContextRegisterResetCallback = (e, t2) => (_MemoryContextRegisterResetCallback = Module._MemoryContextRegisterResetCallback = wasmExports.MemoryContextRegisterResetCallback)(e, t2), _make_expanded_record_from_tupdesc = Module._make_expanded_record_from_tupdesc = (e, t2) => (_make_expanded_record_from_tupdesc = Module._make_expanded_record_from_tupdesc = wasmExports.make_expanded_record_from_tupdesc)(e, t2), _make_expanded_record_from_exprecord = Module._make_expanded_record_from_exprecord = (e, t2) => (_make_expanded_record_from_exprecord = Module._make_expanded_record_from_exprecord = wasmExports.make_expanded_record_from_exprecord)(e, t2), _expanded_record_set_tuple = Module._expanded_record_set_tuple = (e, t2, r2, a2) => (_expanded_record_set_tuple = Module._expanded_record_set_tuple = wasmExports.expanded_record_set_tuple)(e, t2, r2, a2), _expanded_record_get_tuple = Module._expanded_record_get_tuple = (e) => (_expanded_record_get_tuple = Module._expanded_record_get_tuple = wasmExports.expanded_record_get_tuple)(e), _deconstruct_expanded_record = Module._deconstruct_expanded_record = (e) => (_deconstruct_expanded_record = Module._deconstruct_expanded_record = wasmExports.deconstruct_expanded_record)(e), _expanded_record_lookup_field = Module._expanded_record_lookup_field = (e, t2, r2) => (_expanded_record_lookup_field = Module._expanded_record_lookup_field = wasmExports.expanded_record_lookup_field)(e, t2, r2), _expanded_record_set_field_internal = Module._expanded_record_set_field_internal = (e, t2, r2, a2, o5, _5) => (_expanded_record_set_field_internal = Module._expanded_record_set_field_internal = wasmExports.expanded_record_set_field_internal)(e, t2, r2, a2, o5, _5), _expanded_record_set_fields = Module._expanded_record_set_fields = (e, t2, r2, a2) => (_expanded_record_set_fields = Module._expanded_record_set_fields = wasmExports.expanded_record_set_fields)(e, t2, r2, a2), _float4in_internal = Module._float4in_internal = (e, t2, r2, a2, o5) => (_float4in_internal = Module._float4in_internal = wasmExports.float4in_internal)(e, t2, r2, a2, o5), _strtof = Module._strtof = (e, t2) => (_strtof = Module._strtof = wasmExports.strtof)(e, t2), _float_to_shortest_decimal_buf = Module._float_to_shortest_decimal_buf = (e, t2) => (_float_to_shortest_decimal_buf = Module._float_to_shortest_decimal_buf = wasmExports.float_to_shortest_decimal_buf)(e, t2), _float8in = Module._float8in = (e) => (_float8in = Module._float8in = wasmExports.float8in)(e), _float8in_internal = Module._float8in_internal = (e, t2, r2, a2, o5) => (_float8in_internal = Module._float8in_internal = wasmExports.float8in_internal)(e, t2, r2, a2, o5), _float8out = Module._float8out = (e) => (_float8out = Module._float8out = wasmExports.float8out)(e), _float8out_internal = Module._float8out_internal = (e) => (_float8out_internal = Module._float8out_internal = wasmExports.float8out_internal)(e), _float8pl = Module._float8pl = (e) => (_float8pl = Module._float8pl = wasmExports.float8pl)(e), _btfloat4cmp = Module._btfloat4cmp = (e) => (_btfloat4cmp = Module._btfloat4cmp = wasmExports.btfloat4cmp)(e), _btfloat8cmp = Module._btfloat8cmp = (e) => (_btfloat8cmp = Module._btfloat8cmp = wasmExports.btfloat8cmp)(e), _dtoi4 = Module._dtoi4 = (e) => (_dtoi4 = Module._dtoi4 = wasmExports.dtoi4)(e), _dtoi2 = Module._dtoi2 = (e) => (_dtoi2 = Module._dtoi2 = wasmExports.dtoi2)(e), _cbrt = Module._cbrt = (e) => (_cbrt = Module._cbrt = wasmExports.cbrt)(e), _dexp = Module._dexp = (e) => (_dexp = Module._dexp = wasmExports.dexp)(e), _log10 = Module._log10 = (e) => (_log10 = Module._log10 = wasmExports.log10)(e), _dacos = Module._dacos = (e) => (_dacos = Module._dacos = wasmExports.dacos)(e), _acos = Module._acos = (e) => (_acos = Module._acos = wasmExports.acos)(e), _dasin = Module._dasin = (e) => (_dasin = Module._dasin = wasmExports.dasin)(e), _asin = Module._asin = (e) => (_asin = Module._asin = wasmExports.asin)(e), _datan = Module._datan = (e) => (_datan = Module._datan = wasmExports.datan)(e), _atan = Module._atan = (e) => (_atan = Module._atan = wasmExports.atan)(e), _datan2 = Module._datan2 = (e) => (_datan2 = Module._datan2 = wasmExports.datan2)(e), _atan2 = Module._atan2 = (e, t2) => (_atan2 = Module._atan2 = wasmExports.atan2)(e, t2), _dcos = Module._dcos = (e) => (_dcos = Module._dcos = wasmExports.dcos)(e), _cos = Module._cos = (e) => (_cos = Module._cos = wasmExports.cos)(e), _dcot = Module._dcot = (e) => (_dcot = Module._dcot = wasmExports.dcot)(e), _tan = Module._tan = (e) => (_tan = Module._tan = wasmExports.tan)(e), _dsin = Module._dsin = (e) => (_dsin = Module._dsin = wasmExports.dsin)(e), _sin = Module._sin = (e) => (_sin = Module._sin = wasmExports.sin)(e), _dtan = Module._dtan = (e) => (_dtan = Module._dtan = wasmExports.dtan)(e), _fmod = Module._fmod = (e, t2) => (_fmod = Module._fmod = wasmExports.fmod)(e, t2), _degrees = Module._degrees = (e) => (_degrees = Module._degrees = wasmExports.degrees)(e), _dpi = Module._dpi = (e) => (_dpi = Module._dpi = wasmExports.dpi)(e), _radians = Module._radians = (e) => (_radians = Module._radians = wasmExports.radians)(e), _sinh = Module._sinh = (e) => (_sinh = Module._sinh = wasmExports.sinh)(e), _cosh = Module._cosh = (e) => (_cosh = Module._cosh = wasmExports.cosh)(e), _tanh = Module._tanh = (e) => (_tanh = Module._tanh = wasmExports.tanh)(e), _asinh = Module._asinh = (e) => (_asinh = Module._asinh = wasmExports.asinh)(e), _acosh = Module._acosh = (e) => (_acosh = Module._acosh = wasmExports.acosh)(e), _atanh = Module._atanh = (e) => (_atanh = Module._atanh = wasmExports.atanh)(e), _float8_accum = Module._float8_accum = (e) => (_float8_accum = Module._float8_accum = wasmExports.float8_accum)(e), _float8_stddev_pop = Module._float8_stddev_pop = (e) => (_float8_stddev_pop = Module._float8_stddev_pop = wasmExports.float8_stddev_pop)(e), _float8_stddev_samp = Module._float8_stddev_samp = (e) => (_float8_stddev_samp = Module._float8_stddev_samp = wasmExports.float8_stddev_samp)(e), _str_tolower = Module._str_tolower = (e, t2, r2) => (_str_tolower = Module._str_tolower = wasmExports.str_tolower)(e, t2, r2), _numeric_power = Module._numeric_power = (e) => (_numeric_power = Module._numeric_power = wasmExports.numeric_power)(e), _numeric_int4 = Module._numeric_int4 = (e) => (_numeric_int4 = Module._numeric_int4 = wasmExports.numeric_int4)(e), _int84 = Module._int84 = (e) => (_int84 = Module._int84 = wasmExports.int84)(e), _dtoi8 = Module._dtoi8 = (e) => (_dtoi8 = Module._dtoi8 = wasmExports.dtoi8)(e), _int8out = Module._int8out = (e) => (_int8out = Module._int8out = wasmExports.int8out)(e), _fseeko = Module._fseeko = (e, t2, r2) => (_fseeko = Module._fseeko = wasmExports.fseeko)(e, t2, r2), _int4in = Module._int4in = (e) => (_int4in = Module._int4in = wasmExports.int4in)(e), _int4_bool = Module._int4_bool = (e) => (_int4_bool = Module._int4_bool = wasmExports.int4_bool)(e), _int8pl = Module._int8pl = (e) => (_int8pl = Module._int8pl = wasmExports.int8pl)(e), _int82 = Module._int82 = (e) => (_int82 = Module._int82 = wasmExports.int82)(e), _json_in = Module._json_in = (e) => (_json_in = Module._json_in = wasmExports.json_in)(e), _EncodeSpecialTimestamp = Module._EncodeSpecialTimestamp = (e, t2) => (_EncodeSpecialTimestamp = Module._EncodeSpecialTimestamp = wasmExports.EncodeSpecialTimestamp)(e, t2), _extract_variadic_args = Module._extract_variadic_args = (e, t2, r2, a2, o5, _5) => (_extract_variadic_args = Module._extract_variadic_args = wasmExports.extract_variadic_args)(e, t2, r2, a2, o5, _5), _pushJsonbValue = Module._pushJsonbValue = (e, t2, r2) => (_pushJsonbValue = Module._pushJsonbValue = wasmExports.pushJsonbValue)(e, t2, r2), _numeric_int2 = Module._numeric_int2 = (e) => (_numeric_int2 = Module._numeric_int2 = wasmExports.numeric_int2)(e), _numeric_float4 = Module._numeric_float4 = (e) => (_numeric_float4 = Module._numeric_float4 = wasmExports.numeric_float4)(e), _numeric_normalize = Module._numeric_normalize = (e) => (_numeric_normalize = Module._numeric_normalize = wasmExports.numeric_normalize)(e), _numeric_cmp = Module._numeric_cmp = (e) => (_numeric_cmp = Module._numeric_cmp = wasmExports.numeric_cmp)(e), _numeric_eq = Module._numeric_eq = (e) => (_numeric_eq = Module._numeric_eq = wasmExports.numeric_eq)(e), _hash_numeric = Module._hash_numeric = (e) => (_hash_numeric = Module._hash_numeric = wasmExports.hash_numeric)(e), _hash_numeric_extended = Module._hash_numeric_extended = (e) => (_hash_numeric_extended = Module._hash_numeric_extended = wasmExports.hash_numeric_extended)(e), _int2_numeric = Module._int2_numeric = (e) => (_int2_numeric = Module._int2_numeric = wasmExports.int2_numeric)(e), _int4_numeric = Module._int4_numeric = (e) => (_int4_numeric = Module._int4_numeric = wasmExports.int4_numeric)(e), _int8_numeric = Module._int8_numeric = (e) => (_int8_numeric = Module._int8_numeric = wasmExports.int8_numeric)(e), _float4_numeric = Module._float4_numeric = (e) => (_float4_numeric = Module._float4_numeric = wasmExports.float4_numeric)(e), _float8_numeric = Module._float8_numeric = (e) => (_float8_numeric = Module._float8_numeric = wasmExports.float8_numeric)(e), _numeric_uminus = Module._numeric_uminus = (e) => (_numeric_uminus = Module._numeric_uminus = wasmExports.numeric_uminus)(e), _numeric_is_nan = Module._numeric_is_nan = (e) => (_numeric_is_nan = Module._numeric_is_nan = wasmExports.numeric_is_nan)(e), _numeric_ceil = Module._numeric_ceil = (e) => (_numeric_ceil = Module._numeric_ceil = wasmExports.numeric_ceil)(e), _numeric_floor = Module._numeric_floor = (e) => (_numeric_floor = Module._numeric_floor = wasmExports.numeric_floor)(e), _timestamp_cmp = Module._timestamp_cmp = (e) => (_timestamp_cmp = Module._timestamp_cmp = wasmExports.timestamp_cmp)(e), _macaddr_cmp = Module._macaddr_cmp = (e) => (_macaddr_cmp = Module._macaddr_cmp = wasmExports.macaddr_cmp)(e), _macaddr_lt = Module._macaddr_lt = (e) => (_macaddr_lt = Module._macaddr_lt = wasmExports.macaddr_lt)(e), _macaddr_le = Module._macaddr_le = (e) => (_macaddr_le = Module._macaddr_le = wasmExports.macaddr_le)(e), _macaddr_eq = Module._macaddr_eq = (e) => (_macaddr_eq = Module._macaddr_eq = wasmExports.macaddr_eq)(e), _macaddr_ge = Module._macaddr_ge = (e) => (_macaddr_ge = Module._macaddr_ge = wasmExports.macaddr_ge)(e), _macaddr_gt = Module._macaddr_gt = (e) => (_macaddr_gt = Module._macaddr_gt = wasmExports.macaddr_gt)(e), _macaddr8_cmp = Module._macaddr8_cmp = (e) => (_macaddr8_cmp = Module._macaddr8_cmp = wasmExports.macaddr8_cmp)(e), _macaddr8_lt = Module._macaddr8_lt = (e) => (_macaddr8_lt = Module._macaddr8_lt = wasmExports.macaddr8_lt)(e), _macaddr8_le = Module._macaddr8_le = (e) => (_macaddr8_le = Module._macaddr8_le = wasmExports.macaddr8_le)(e), _macaddr8_eq = Module._macaddr8_eq = (e) => (_macaddr8_eq = Module._macaddr8_eq = wasmExports.macaddr8_eq)(e), _macaddr8_ge = Module._macaddr8_ge = (e) => (_macaddr8_ge = Module._macaddr8_ge = wasmExports.macaddr8_ge)(e), _macaddr8_gt = Module._macaddr8_gt = (e) => (_macaddr8_gt = Module._macaddr8_gt = wasmExports.macaddr8_gt)(e), _current_query = Module._current_query = (e) => (_current_query = Module._current_query = wasmExports.current_query)(e), _get_fn_expr_arg_stable = Module._get_fn_expr_arg_stable = (e, t2) => (_get_fn_expr_arg_stable = Module._get_fn_expr_arg_stable = wasmExports.get_fn_expr_arg_stable)(e, t2), _unpack_sql_state = Module._unpack_sql_state = (e) => (_unpack_sql_state = Module._unpack_sql_state = wasmExports.unpack_sql_state)(e), _get_fn_expr_rettype = Module._get_fn_expr_rettype = (e) => (_get_fn_expr_rettype = Module._get_fn_expr_rettype = wasmExports.get_fn_expr_rettype)(e), _btnamecmp = Module._btnamecmp = (e) => (_btnamecmp = Module._btnamecmp = wasmExports.btnamecmp)(e), _inet_in = Module._inet_in = (e) => (_inet_in = Module._inet_in = wasmExports.inet_in)(e), _network_cmp = Module._network_cmp = (e) => (_network_cmp = Module._network_cmp = wasmExports.network_cmp)(e), _convert_network_to_scalar = Module._convert_network_to_scalar = (e, t2, r2) => (_convert_network_to_scalar = Module._convert_network_to_scalar = wasmExports.convert_network_to_scalar)(e, t2, r2), _numeric_sign = Module._numeric_sign = (e) => (_numeric_sign = Module._numeric_sign = wasmExports.numeric_sign)(e), _numeric_gt = Module._numeric_gt = (e) => (_numeric_gt = Module._numeric_gt = wasmExports.numeric_gt)(e), _numeric_le = Module._numeric_le = (e) => (_numeric_le = Module._numeric_le = wasmExports.numeric_le)(e), _numeric_mod = Module._numeric_mod = (e) => (_numeric_mod = Module._numeric_mod = wasmExports.numeric_mod)(e), _numeric_sqrt = Module._numeric_sqrt = (e) => (_numeric_sqrt = Module._numeric_sqrt = wasmExports.numeric_sqrt)(e), ___divti3 = Module.___divti3 = (e, t2, r2, a2, o5) => (___divti3 = Module.___divti3 = wasmExports.__divti3)(e, t2, r2, a2, o5), _numeric_exp = Module._numeric_exp = (e) => (_numeric_exp = Module._numeric_exp = wasmExports.numeric_exp)(e), _numeric_ln = Module._numeric_ln = (e) => (_numeric_ln = Module._numeric_ln = wasmExports.numeric_ln)(e), _numeric_log = Module._numeric_log = (e) => (_numeric_log = Module._numeric_log = wasmExports.numeric_log)(e), _numeric_float8_no_overflow = Module._numeric_float8_no_overflow = (e) => (_numeric_float8_no_overflow = Module._numeric_float8_no_overflow = wasmExports.numeric_float8_no_overflow)(e), _pg_strtoint64 = Module._pg_strtoint64 = (e) => (_pg_strtoint64 = Module._pg_strtoint64 = wasmExports.pg_strtoint64)(e), _oidout = Module._oidout = (e) => (_oidout = Module._oidout = wasmExports.oidout)(e), _btrim1 = Module._btrim1 = (e) => (_btrim1 = Module._btrim1 = wasmExports.btrim1)(e), _ltrim1 = Module._ltrim1 = (e) => (_ltrim1 = Module._ltrim1 = wasmExports.ltrim1)(e), _rtrim1 = Module._rtrim1 = (e) => (_rtrim1 = Module._rtrim1 = wasmExports.rtrim1)(e), _tuplesort_skiptuples = Module._tuplesort_skiptuples = (e, t2, r2) => (_tuplesort_skiptuples = Module._tuplesort_skiptuples = wasmExports.tuplesort_skiptuples)(e, t2, r2), _interval_mi = Module._interval_mi = (e) => (_interval_mi = Module._interval_mi = wasmExports.interval_mi)(e), _setlocale = Module._setlocale = (e, t2) => (_setlocale = Module._setlocale = wasmExports.setlocale)(e, t2), _localeconv = Module._localeconv = () => (_localeconv = Module._localeconv = wasmExports.localeconv)(), _localtime = Module._localtime = (e) => (_localtime = Module._localtime = wasmExports.localtime)(e), _strftime = Module._strftime = (e, t2, r2, a2) => (_strftime = Module._strftime = wasmExports.strftime)(e, t2, r2, a2), _newlocale = Module._newlocale = (e, t2, r2) => (_newlocale = Module._newlocale = wasmExports.newlocale)(e, t2, r2), _strcoll_l = Module._strcoll_l = (e, t2, r2) => (_strcoll_l = Module._strcoll_l = wasmExports.strcoll_l)(e, t2, r2), _uselocale = Module._uselocale = (e) => (_uselocale = Module._uselocale = wasmExports.uselocale)(e), _drandom = Module._drandom = (e) => (_drandom = Module._drandom = wasmExports.drandom)(e), _quote_ident = Module._quote_ident = (e) => (_quote_ident = Module._quote_ident = wasmExports.quote_ident)(e), _textregexeq = Module._textregexeq = (e) => (_textregexeq = Module._textregexeq = wasmExports.textregexeq)(e), _text_substr = Module._text_substr = (e) => (_text_substr = Module._text_substr = wasmExports.text_substr)(e), _pg_wchar2mb_with_len = Module._pg_wchar2mb_with_len = (e, t2, r2) => (_pg_wchar2mb_with_len = Module._pg_wchar2mb_with_len = wasmExports.pg_wchar2mb_with_len)(e, t2, r2), _regexp_split_to_array = Module._regexp_split_to_array = (e) => (_regexp_split_to_array = Module._regexp_split_to_array = wasmExports.regexp_split_to_array)(e), _regclassin = Module._regclassin = (e) => (_regclassin = Module._regclassin = wasmExports.regclassin)(e), _regtypeout = Module._regtypeout = (e) => (_regtypeout = Module._regtypeout = wasmExports.regtypeout)(e), _regconfigout = Module._regconfigout = (e) => (_regconfigout = Module._regconfigout = wasmExports.regconfigout)(e), _pg_get_indexdef_columns_extended = Module._pg_get_indexdef_columns_extended = (e, t2) => (_pg_get_indexdef_columns_extended = Module._pg_get_indexdef_columns_extended = wasmExports.pg_get_indexdef_columns_extended)(e, t2), _pg_get_querydef = Module._pg_get_querydef = (e, t2) => (_pg_get_querydef = Module._pg_get_querydef = wasmExports.pg_get_querydef)(e, t2), _strcspn = Module._strcspn = (e, t2) => (_strcspn = Module._strcspn = wasmExports.strcspn)(e, t2), _generic_restriction_selectivity = Module._generic_restriction_selectivity = (e, t2, r2, a2, o5, _5) => (_generic_restriction_selectivity = Module._generic_restriction_selectivity = wasmExports.generic_restriction_selectivity)(e, t2, r2, a2, o5, _5), _genericcostestimate = Module._genericcostestimate = (e, t2, r2, a2) => (_genericcostestimate = Module._genericcostestimate = wasmExports.genericcostestimate)(e, t2, r2, a2), _tidin = Module._tidin = (e) => (_tidin = Module._tidin = wasmExports.tidin)(e), _tidout = Module._tidout = (e) => (_tidout = Module._tidout = wasmExports.tidout)(e), _timestamp_in = Module._timestamp_in = (e) => (_timestamp_in = Module._timestamp_in = wasmExports.timestamp_in)(e), _timestamp_eq = Module._timestamp_eq = (e) => (_timestamp_eq = Module._timestamp_eq = wasmExports.timestamp_eq)(e), _timestamp_lt = Module._timestamp_lt = (e) => (_timestamp_lt = Module._timestamp_lt = wasmExports.timestamp_lt)(e), _timestamp_gt = Module._timestamp_gt = (e) => (_timestamp_gt = Module._timestamp_gt = wasmExports.timestamp_gt)(e), _timestamp_le = Module._timestamp_le = (e) => (_timestamp_le = Module._timestamp_le = wasmExports.timestamp_le)(e), _timestamp_ge = Module._timestamp_ge = (e) => (_timestamp_ge = Module._timestamp_ge = wasmExports.timestamp_ge)(e), _interval_eq = Module._interval_eq = (e) => (_interval_eq = Module._interval_eq = wasmExports.interval_eq)(e), _interval_lt = Module._interval_lt = (e) => (_interval_lt = Module._interval_lt = wasmExports.interval_lt)(e), _interval_gt = Module._interval_gt = (e) => (_interval_gt = Module._interval_gt = wasmExports.interval_gt)(e), _interval_le = Module._interval_le = (e) => (_interval_le = Module._interval_le = wasmExports.interval_le)(e), _interval_ge = Module._interval_ge = (e) => (_interval_ge = Module._interval_ge = wasmExports.interval_ge)(e), _interval_cmp = Module._interval_cmp = (e) => (_interval_cmp = Module._interval_cmp = wasmExports.interval_cmp)(e), _timestamp_mi = Module._timestamp_mi = (e) => (_timestamp_mi = Module._timestamp_mi = wasmExports.timestamp_mi)(e), _interval_um = Module._interval_um = (e) => (_interval_um = Module._interval_um = wasmExports.interval_um)(e), _has_fn_opclass_options = Module._has_fn_opclass_options = (e) => (_has_fn_opclass_options = Module._has_fn_opclass_options = wasmExports.has_fn_opclass_options)(e), _uuid_in = Module._uuid_in = (e) => (_uuid_in = Module._uuid_in = wasmExports.uuid_in)(e), _uuid_out = Module._uuid_out = (e) => (_uuid_out = Module._uuid_out = wasmExports.uuid_out)(e), _uuid_cmp = Module._uuid_cmp = (e) => (_uuid_cmp = Module._uuid_cmp = wasmExports.uuid_cmp)(e), _gen_random_uuid = Module._gen_random_uuid = (e) => (_gen_random_uuid = Module._gen_random_uuid = wasmExports.gen_random_uuid)(e), _varbit_in = Module._varbit_in = (e) => (_varbit_in = Module._varbit_in = wasmExports.varbit_in)(e), _biteq = Module._biteq = (e) => (_biteq = Module._biteq = wasmExports.biteq)(e), _bitlt = Module._bitlt = (e) => (_bitlt = Module._bitlt = wasmExports.bitlt)(e), _bitle = Module._bitle = (e) => (_bitle = Module._bitle = wasmExports.bitle)(e), _bitgt = Module._bitgt = (e) => (_bitgt = Module._bitgt = wasmExports.bitgt)(e), _bitge = Module._bitge = (e) => (_bitge = Module._bitge = wasmExports.bitge)(e), _bitcmp = Module._bitcmp = (e) => (_bitcmp = Module._bitcmp = wasmExports.bitcmp)(e), _bpchareq = Module._bpchareq = (e) => (_bpchareq = Module._bpchareq = wasmExports.bpchareq)(e), _bpcharlt = Module._bpcharlt = (e) => (_bpcharlt = Module._bpcharlt = wasmExports.bpcharlt)(e), _bpcharle = Module._bpcharle = (e) => (_bpcharle = Module._bpcharle = wasmExports.bpcharle)(e), _bpchargt = Module._bpchargt = (e) => (_bpchargt = Module._bpchargt = wasmExports.bpchargt)(e), _bpcharge = Module._bpcharge = (e) => (_bpcharge = Module._bpcharge = wasmExports.bpcharge)(e), _bpcharcmp = Module._bpcharcmp = (e) => (_bpcharcmp = Module._bpcharcmp = wasmExports.bpcharcmp)(e), _pg_detoast_datum_slice = Module._pg_detoast_datum_slice = (e, t2, r2) => (_pg_detoast_datum_slice = Module._pg_detoast_datum_slice = wasmExports.pg_detoast_datum_slice)(e, t2, r2), _text_substr_no_len = Module._text_substr_no_len = (e) => (_text_substr_no_len = Module._text_substr_no_len = wasmExports.text_substr_no_len)(e), _texteq = Module._texteq = (e) => (_texteq = Module._texteq = wasmExports.texteq)(e), _text_lt = Module._text_lt = (e) => (_text_lt = Module._text_lt = wasmExports.text_lt)(e), _text_le = Module._text_le = (e) => (_text_le = Module._text_le = wasmExports.text_le)(e), _text_gt = Module._text_gt = (e) => (_text_gt = Module._text_gt = wasmExports.text_gt)(e), _text_ge = Module._text_ge = (e) => (_text_ge = Module._text_ge = wasmExports.text_ge)(e), _bttextcmp = Module._bttextcmp = (e) => (_bttextcmp = Module._bttextcmp = wasmExports.bttextcmp)(e), _byteaeq = Module._byteaeq = (e) => (_byteaeq = Module._byteaeq = wasmExports.byteaeq)(e), _bytealt = Module._bytealt = (e) => (_bytealt = Module._bytealt = wasmExports.bytealt)(e), _byteale = Module._byteale = (e) => (_byteale = Module._byteale = wasmExports.byteale)(e), _byteagt = Module._byteagt = (e) => (_byteagt = Module._byteagt = wasmExports.byteagt)(e), _byteage = Module._byteage = (e) => (_byteage = Module._byteage = wasmExports.byteage)(e), _byteacmp = Module._byteacmp = (e) => (_byteacmp = Module._byteacmp = wasmExports.byteacmp)(e), _to_hex32 = Module._to_hex32 = (e) => (_to_hex32 = Module._to_hex32 = wasmExports.to_hex32)(e), _text_left = Module._text_left = (e) => (_text_left = Module._text_left = wasmExports.text_left)(e), _text_right = Module._text_right = (e) => (_text_right = Module._text_right = wasmExports.text_right)(e), _text_reverse = Module._text_reverse = (e) => (_text_reverse = Module._text_reverse = wasmExports.text_reverse)(e), _varstr_levenshtein = Module._varstr_levenshtein = (e, t2, r2, a2, o5, _5, s5, n3) => (_varstr_levenshtein = Module._varstr_levenshtein = wasmExports.varstr_levenshtein)(e, t2, r2, a2, o5, _5, s5, n3), _pg_utf_mblen_private = Module._pg_utf_mblen_private = (e) => (_pg_utf_mblen_private = Module._pg_utf_mblen_private = wasmExports.pg_utf_mblen_private)(e), _pg_xml_init = Module._pg_xml_init = (e) => (_pg_xml_init = Module._pg_xml_init = wasmExports.pg_xml_init)(e), _xml_ereport = Module._xml_ereport = (e, t2, r2, a2) => (_xml_ereport = Module._xml_ereport = wasmExports.xml_ereport)(e, t2, r2, a2), _pg_xml_done = Module._pg_xml_done = (e, t2) => (_pg_xml_done = Module._pg_xml_done = wasmExports.pg_xml_done)(e, t2), _pg_do_encoding_conversion = Module._pg_do_encoding_conversion = (e, t2, r2, a2) => (_pg_do_encoding_conversion = Module._pg_do_encoding_conversion = wasmExports.pg_do_encoding_conversion)(e, t2, r2, a2), _CreateCacheMemoryContext = Module._CreateCacheMemoryContext = () => (_CreateCacheMemoryContext = Module._CreateCacheMemoryContext = wasmExports.CreateCacheMemoryContext)(), _get_typsubscript = Module._get_typsubscript = (e, t2) => (_get_typsubscript = Module._get_typsubscript = wasmExports.get_typsubscript)(e, t2), _CachedPlanAllowsSimpleValidityCheck = Module._CachedPlanAllowsSimpleValidityCheck = (e, t2, r2) => (_CachedPlanAllowsSimpleValidityCheck = Module._CachedPlanAllowsSimpleValidityCheck = wasmExports.CachedPlanAllowsSimpleValidityCheck)(e, t2, r2), _CachedPlanIsSimplyValid = Module._CachedPlanIsSimplyValid = (e, t2, r2) => (_CachedPlanIsSimplyValid = Module._CachedPlanIsSimplyValid = wasmExports.CachedPlanIsSimplyValid)(e, t2, r2), _GetCachedExpression = Module._GetCachedExpression = (e) => (_GetCachedExpression = Module._GetCachedExpression = wasmExports.GetCachedExpression)(e), _FreeCachedExpression = Module._FreeCachedExpression = (e) => (_FreeCachedExpression = Module._FreeCachedExpression = wasmExports.FreeCachedExpression)(e), _ReleaseAllPlanCacheRefsInOwner = Module._ReleaseAllPlanCacheRefsInOwner = (e) => (_ReleaseAllPlanCacheRefsInOwner = Module._ReleaseAllPlanCacheRefsInOwner = wasmExports.ReleaseAllPlanCacheRefsInOwner)(e), _abort = Module._abort = () => (_abort = Module._abort = wasmExports.abort)(), _in_error_recursion_trouble = Module._in_error_recursion_trouble = () => (_in_error_recursion_trouble = Module._in_error_recursion_trouble = wasmExports.in_error_recursion_trouble)(), _pg_vfprintf = Module._pg_vfprintf = (e, t2, r2) => (_pg_vfprintf = Module._pg_vfprintf = wasmExports.pg_vfprintf)(e, t2, r2), _pgl_longjmp = Module._pgl_longjmp = (e, t2) => (_pgl_longjmp = Module._pgl_longjmp = wasmExports.pgl_longjmp)(e, t2), _GetErrorContextStack = Module._GetErrorContextStack = () => (_GetErrorContextStack = Module._GetErrorContextStack = wasmExports.GetErrorContextStack)(), _dlsym = Module._dlsym = (e, t2) => (_dlsym = Module._dlsym = wasmExports.dlsym)(e, t2), _dlopen = Module._dlopen = (e, t2) => (_dlopen = Module._dlopen = wasmExports.dlopen)(e, t2), _dlerror = Module._dlerror = () => (_dlerror = Module._dlerror = wasmExports.dlerror)(), _dlclose = Module._dlclose = (e) => (_dlclose = Module._dlclose = wasmExports.dlclose)(e), _find_rendezvous_variable = Module._find_rendezvous_variable = (e) => (_find_rendezvous_variable = Module._find_rendezvous_variable = wasmExports.find_rendezvous_variable)(e), _CallerFInfoFunctionCall1 = Module._CallerFInfoFunctionCall1 = (e, t2, r2, a2) => (_CallerFInfoFunctionCall1 = Module._CallerFInfoFunctionCall1 = wasmExports.CallerFInfoFunctionCall1)(e, t2, r2, a2), _CallerFInfoFunctionCall2 = Module._CallerFInfoFunctionCall2 = (e, t2, r2, a2, o5) => (_CallerFInfoFunctionCall2 = Module._CallerFInfoFunctionCall2 = wasmExports.CallerFInfoFunctionCall2)(e, t2, r2, a2, o5), _FunctionCall0Coll = Module._FunctionCall0Coll = (e, t2) => (_FunctionCall0Coll = Module._FunctionCall0Coll = wasmExports.FunctionCall0Coll)(e, t2), _resolve_polymorphic_argtypes = Module._resolve_polymorphic_argtypes = (e, t2, r2, a2) => (_resolve_polymorphic_argtypes = Module._resolve_polymorphic_argtypes = wasmExports.resolve_polymorphic_argtypes)(e, t2, r2, a2), _RelationNameGetTupleDesc = Module._RelationNameGetTupleDesc = (e) => (_RelationNameGetTupleDesc = Module._RelationNameGetTupleDesc = wasmExports.RelationNameGetTupleDesc)(e), _hash_freeze = Module._hash_freeze = (e) => (_hash_freeze = Module._hash_freeze = wasmExports.hash_freeze)(e), _chdir = Module._chdir = (e) => (_chdir = Module._chdir = wasmExports.chdir)(e), _pg_bindtextdomain = Module._pg_bindtextdomain = (e) => (_pg_bindtextdomain = Module._pg_bindtextdomain = wasmExports.pg_bindtextdomain)(e), _DefineCustomBoolVariable = Module._DefineCustomBoolVariable = (e, t2, r2, a2, o5, _5, s5, n3, l2, d3) => (_DefineCustomBoolVariable = Module._DefineCustomBoolVariable = wasmExports.DefineCustomBoolVariable)(e, t2, r2, a2, o5, _5, s5, n3, l2, d3), _DefineCustomIntVariable = Module._DefineCustomIntVariable = (e, t2, r2, a2, o5, _5, s5, n3, l2, d3, u3, g5) => (_DefineCustomIntVariable = Module._DefineCustomIntVariable = wasmExports.DefineCustomIntVariable)(e, t2, r2, a2, o5, _5, s5, n3, l2, d3, u3, g5), _DefineCustomRealVariable = Module._DefineCustomRealVariable = (e, t2, r2, a2, o5, _5, s5, n3, l2, d3, u3, g5) => (_DefineCustomRealVariable = Module._DefineCustomRealVariable = wasmExports.DefineCustomRealVariable)(e, t2, r2, a2, o5, _5, s5, n3, l2, d3, u3, g5), _DefineCustomStringVariable = Module._DefineCustomStringVariable = (e, t2, r2, a2, o5, _5, s5, n3, l2, d3) => (_DefineCustomStringVariable = Module._DefineCustomStringVariable = wasmExports.DefineCustomStringVariable)(e, t2, r2, a2, o5, _5, s5, n3, l2, d3), _DefineCustomEnumVariable = Module._DefineCustomEnumVariable = (e, t2, r2, a2, o5, _5, s5, n3, l2, d3, u3) => (_DefineCustomEnumVariable = Module._DefineCustomEnumVariable = wasmExports.DefineCustomEnumVariable)(e, t2, r2, a2, o5, _5, s5, n3, l2, d3, u3), _MarkGUCPrefixReserved = Module._MarkGUCPrefixReserved = (e) => (_MarkGUCPrefixReserved = Module._MarkGUCPrefixReserved = wasmExports.MarkGUCPrefixReserved)(e), _sampler_random_init_state = Module._sampler_random_init_state = (e, t2) => (_sampler_random_init_state = Module._sampler_random_init_state = wasmExports.sampler_random_init_state)(e, t2), _dsa_trim = Module._dsa_trim = (e) => (_dsa_trim = Module._dsa_trim = wasmExports.dsa_trim)(e), _pchomp = Module._pchomp = (e) => (_pchomp = Module._pchomp = wasmExports.pchomp)(e), _PinPortal = Module._PinPortal = (e) => (_PinPortal = Module._PinPortal = wasmExports.PinPortal)(e), _UnpinPortal = Module._UnpinPortal = (e) => (_UnpinPortal = Module._UnpinPortal = wasmExports.UnpinPortal)(e), ___lshrti3 = Module.___lshrti3 = (e, t2, r2, a2) => (___lshrti3 = Module.___lshrti3 = wasmExports.__lshrti3)(e, t2, r2, a2), _realpath = Module._realpath = (e, t2) => (_realpath = Module._realpath = wasmExports.realpath)(e, t2), _float_to_shortest_decimal_bufn = Module._float_to_shortest_decimal_bufn = (e, t2) => (_float_to_shortest_decimal_bufn = Module._float_to_shortest_decimal_bufn = wasmExports.float_to_shortest_decimal_bufn)(e, t2), _IsValidJsonNumber = Module._IsValidJsonNumber = (e, t2) => (_IsValidJsonNumber = Module._IsValidJsonNumber = wasmExports.IsValidJsonNumber)(e, t2), _pg_prng_uint64 = Module._pg_prng_uint64 = (e) => (_pg_prng_uint64 = Module._pg_prng_uint64 = wasmExports.pg_prng_uint64)(e), _getcwd = Module._getcwd = (e, t2) => (_getcwd = Module._getcwd = wasmExports.getcwd)(e, t2), _nanosleep = Module._nanosleep = (e, t2) => (_nanosleep = Module._nanosleep = wasmExports.nanosleep)(e, t2), _strchrnul = Module._strchrnul = (e, t2) => (_strchrnul = Module._strchrnul = wasmExports.strchrnul)(e, t2), _snprintf = Module._snprintf = (e, t2, r2, a2) => (_snprintf = Module._snprintf = wasmExports.snprintf)(e, t2, r2, a2), _strerror = Module._strerror = (e) => (_strerror = Module._strerror = wasmExports.strerror)(e), _clear_setitimer = Module._clear_setitimer = () => (_clear_setitimer = Module._clear_setitimer = wasmExports.clear_setitimer)(), _pgl_setPGliteActive = Module._pgl_setPGliteActive = (e) => (_pgl_setPGliteActive = Module._pgl_setPGliteActive = wasmExports.pgl_setPGliteActive)(e), _pgl_siglongjmp = Module._pgl_siglongjmp = (e, t2) => (_pgl_siglongjmp = Module._pgl_siglongjmp = wasmExports.pgl_siglongjmp)(e, t2), _pgl_set_system_fn = Module._pgl_set_system_fn = (e) => (_pgl_set_system_fn = Module._pgl_set_system_fn = wasmExports.pgl_set_system_fn)(e), _pgl_set_popen_fn = Module._pgl_set_popen_fn = (e) => (_pgl_set_popen_fn = Module._pgl_set_popen_fn = wasmExports.pgl_set_popen_fn)(e), _pgl_set_pclose_fn = Module._pgl_set_pclose_fn = (e) => (_pgl_set_pclose_fn = Module._pgl_set_pclose_fn = wasmExports.pgl_set_pclose_fn)(e), _pgl_run_atexit_funcs = Module._pgl_run_atexit_funcs = () => (_pgl_run_atexit_funcs = Module._pgl_run_atexit_funcs = wasmExports.pgl_run_atexit_funcs)(), _pgl_freopen = Module._pgl_freopen = (e, t2, r2) => (_pgl_freopen = Module._pgl_freopen = wasmExports.pgl_freopen)(e, t2, r2), _fiprintf = Module._fiprintf = (e, t2, r2) => (_fiprintf = Module._fiprintf = wasmExports.fiprintf)(e, t2, r2), _pgl_set_rw_cbs = Module._pgl_set_rw_cbs = (e, t2) => (_pgl_set_rw_cbs = Module._pgl_set_rw_cbs = wasmExports.pgl_set_rw_cbs)(e, t2), _vfprintf = Module._vfprintf = (e, t2, r2) => (_vfprintf = Module._vfprintf = wasmExports.vfprintf)(e, t2, r2), _pthread_key_create = Module._pthread_key_create = (e, t2) => (_pthread_key_create = Module._pthread_key_create = wasmExports.pthread_key_create)(e, t2), _pthread_getspecific = Module._pthread_getspecific = (e) => (_pthread_getspecific = Module._pthread_getspecific = wasmExports.pthread_getspecific)(e), _pthread_key_delete = Module._pthread_key_delete = (e) => (_pthread_key_delete = Module._pthread_key_delete = wasmExports.pthread_key_delete)(e), _pthread_setspecific = Module._pthread_setspecific = (e, t2) => (_pthread_setspecific = Module._pthread_setspecific = wasmExports.pthread_setspecific)(e, t2), _iconv_open = Module._iconv_open = (e, t2) => (_iconv_open = Module._iconv_open = wasmExports.iconv_open)(e, t2), _iconv_close = Module._iconv_close = (e) => (_iconv_close = Module._iconv_close = wasmExports.iconv_close)(e), _iconv = Module._iconv = (e, t2, r2, a2, o5) => (_iconv = Module._iconv = wasmExports.iconv)(e, t2, r2, a2, o5), _pthread_mutex_init = Module._pthread_mutex_init = (e, t2) => (_pthread_mutex_init = Module._pthread_mutex_init = wasmExports.pthread_mutex_init)(e, t2), _pthread_mutex_destroy = Module._pthread_mutex_destroy = (e) => (_pthread_mutex_destroy = Module._pthread_mutex_destroy = wasmExports.pthread_mutex_destroy)(e), _pthread_mutex_lock = Module._pthread_mutex_lock = (e) => (_pthread_mutex_lock = Module._pthread_mutex_lock = wasmExports.pthread_mutex_lock)(e), _pthread_mutex_unlock = Module._pthread_mutex_unlock = (e) => (_pthread_mutex_unlock = Module._pthread_mutex_unlock = wasmExports.pthread_mutex_unlock)(e), _pthread_cond_init = Module._pthread_cond_init = (e, t2) => (_pthread_cond_init = Module._pthread_cond_init = wasmExports.pthread_cond_init)(e, t2), _pthread_cond_destroy = Module._pthread_cond_destroy = (e) => (_pthread_cond_destroy = Module._pthread_cond_destroy = wasmExports.pthread_cond_destroy)(e), _pthread_self = Module._pthread_self = () => (_pthread_self = Module._pthread_self = wasmExports.pthread_self)(), _pthread_cond_wait = Module._pthread_cond_wait = (e, t2) => (_pthread_cond_wait = Module._pthread_cond_wait = wasmExports.pthread_cond_wait)(e, t2), _pthread_cond_signal = Module._pthread_cond_signal = (e) => (_pthread_cond_signal = Module._pthread_cond_signal = wasmExports.pthread_cond_signal)(e), _pthread_once = Module._pthread_once = (e, t2) => (_pthread_once = Module._pthread_once = wasmExports.pthread_once)(e, t2), ___cxa_atexit = Module.___cxa_atexit = (e, t2, r2) => (___cxa_atexit = Module.___cxa_atexit = wasmExports.__cxa_atexit)(e, t2, r2), _fputs = Module._fputs = (e, t2) => (_fputs = Module._fputs = wasmExports.fputs)(e, t2), _vsnprintf = Module._vsnprintf = (e, t2, r2, a2) => (_vsnprintf = Module._vsnprintf = wasmExports.vsnprintf)(e, t2, r2, a2), ___small_fprintf = Module.___small_fprintf = (e, t2, r2) => (___small_fprintf = Module.___small_fprintf = wasmExports.__small_fprintf)(e, t2, r2), _sysconf = Module._sysconf = (e) => (_sysconf = Module._sysconf = wasmExports.sysconf)(e), ___ctype_get_mb_cur_max = Module.___ctype_get_mb_cur_max = () => (___ctype_get_mb_cur_max = Module.___ctype_get_mb_cur_max = wasmExports.__ctype_get_mb_cur_max)(), ___ctype_tolower_loc = Module.___ctype_tolower_loc = () => (___ctype_tolower_loc = Module.___ctype_tolower_loc = wasmExports.__ctype_tolower_loc)(), ___ctype_toupper_loc = Module.___ctype_toupper_loc = () => (___ctype_toupper_loc = Module.___ctype_toupper_loc = wasmExports.__ctype_toupper_loc)(), _fdopen = Module._fdopen = (e, t2) => (_fdopen = Module._fdopen = wasmExports.fdopen)(e, t2), _sqrt = Module._sqrt = (e) => (_sqrt = Module._sqrt = wasmExports.sqrt)(e), _acosl = Module._acosl = (e, t2, r2) => (_acosl = Module._acosl = wasmExports.acosl)(e, t2, r2), _aligned_alloc = Module._aligned_alloc = (e, t2) => (_aligned_alloc = Module._aligned_alloc = wasmExports.aligned_alloc)(e, t2), _atan2l = Module._atan2l = (e, t2, r2, a2, o5) => (_atan2l = Module._atan2l = wasmExports.atan2l)(e, t2, r2, a2, o5), ___funcs_on_exit = () => (___funcs_on_exit = wasmExports.__funcs_on_exit)(), _atexit = Module._atexit = (e) => (_atexit = Module._atexit = wasmExports.atexit)(e), ___cxa_finalize = Module.___cxa_finalize = (e) => (___cxa_finalize = Module.___cxa_finalize = wasmExports.__cxa_finalize)(e), _btowc = Module._btowc = (e) => (_btowc = Module._btowc = wasmExports.btowc)(e), _scalbn = Module._scalbn = (e, t2) => (_scalbn = Module._scalbn = wasmExports.scalbn)(e, t2), _cosl = Module._cosl = (e, t2, r2) => (_cosl = Module._cosl = wasmExports.cosl)(e, t2, r2), _dladdr = Module._dladdr = (e, t2) => (_dladdr = Module._dladdr = wasmExports.dladdr)(e, t2), ___dl_seterr = (e, t2) => (___dl_seterr = wasmExports.__dl_seterr)(e, t2), _duplocale = Module._duplocale = (e) => (_duplocale = Module._duplocale = wasmExports.duplocale)(e), _fchmod = Module._fchmod = (e, t2) => (_fchmod = Module._fchmod = wasmExports.fchmod)(e, t2), _fchmodat = Module._fchmodat = (e, t2, r2, a2) => (_fchmodat = Module._fchmodat = wasmExports.fchmodat)(e, t2, r2, a2), _fchown = Module._fchown = (e, t2, r2) => (_fchown = Module._fchown = wasmExports.fchown)(e, t2, r2), _fcntl = Module._fcntl = (e, t2, r2) => (_fcntl = Module._fcntl = wasmExports.fcntl)(e, t2, r2), _fdopendir = Module._fdopendir = (e) => (_fdopendir = Module._fdopendir = wasmExports.fdopendir)(e), _fmax = Module._fmax = (e, t2) => (_fmax = Module._fmax = wasmExports.fmax)(e, t2), _fmin = Module._fmin = (e, t2) => (_fmin = Module._fmin = wasmExports.fmin)(e, t2), _fputwc = Module._fputwc = (e, t2) => (_fputwc = Module._fputwc = wasmExports.fputwc)(e, t2), _freelocale = Module._freelocale = (e) => (_freelocale = Module._freelocale = wasmExports.freelocale)(e), _frexp = Module._frexp = (e, t2) => (_frexp = Module._frexp = wasmExports.frexp)(e, t2), _ftello = Module._ftello = (e) => (_ftello = Module._ftello = wasmExports.ftello)(e), _getentropy = Module._getentropy = (e, t2) => (_getentropy = Module._getentropy = wasmExports.getentropy)(e, t2), _geteuid = Module._geteuid = () => (_geteuid = Module._geteuid = wasmExports.geteuid)(), _getgid = Module._getgid = () => (_getgid = Module._getgid = wasmExports.getgid)(), _mbtowc = Module._mbtowc = (e, t2, r2) => (_mbtowc = Module._mbtowc = wasmExports.mbtowc)(e, t2, r2), _getuid = Module._getuid = () => (_getuid = Module._getuid = wasmExports.getuid)(), _getwc = Module._getwc = (e) => (_getwc = Module._getwc = wasmExports.getwc)(e), _gmtime = Module._gmtime = (e) => (_gmtime = Module._gmtime = wasmExports.gmtime)(e), _hypot = Module._hypot = (e, t2) => (_hypot = Module._hypot = wasmExports.hypot)(e, t2), _mbrtowc = Module._mbrtowc = (e, t2, r2, a2) => (_mbrtowc = Module._mbrtowc = wasmExports.mbrtowc)(e, t2, r2, a2), _ioctl = Module._ioctl = (e, t2, r2) => (_ioctl = Module._ioctl = wasmExports.ioctl)(e, t2, r2), _isalpha = Module._isalpha = (e) => (_isalpha = Module._isalpha = wasmExports.isalpha)(e), _isgraph = Module._isgraph = (e) => (_isgraph = Module._isgraph = wasmExports.isgraph)(e), _isspace = Module._isspace = (e) => (_isspace = Module._isspace = wasmExports.isspace)(e), _iswblank_l = Module._iswblank_l = (e, t2) => (_iswblank_l = Module._iswblank_l = wasmExports.iswblank_l)(e, t2), _iswcntrl_l = Module._iswcntrl_l = (e, t2) => (_iswcntrl_l = Module._iswcntrl_l = wasmExports.iswcntrl_l)(e, t2), _iswxdigit_l = Module._iswxdigit_l = (e, t2) => (_iswxdigit_l = Module._iswxdigit_l = wasmExports.iswxdigit_l)(e, t2), _isxdigit_l = Module._isxdigit_l = (e, t2) => (_isxdigit_l = Module._isxdigit_l = wasmExports.isxdigit_l)(e, t2), _pthread_cond_broadcast = Module._pthread_cond_broadcast = (e) => (_pthread_cond_broadcast = Module._pthread_cond_broadcast = wasmExports.pthread_cond_broadcast)(e), _pthread_atfork = Module._pthread_atfork = (e, t2, r2) => (_pthread_atfork = Module._pthread_atfork = wasmExports.pthread_atfork)(e, t2, r2), _pthread_mutexattr_init = Module._pthread_mutexattr_init = (e) => (_pthread_mutexattr_init = Module._pthread_mutexattr_init = wasmExports.pthread_mutexattr_init)(e), _pthread_mutexattr_setprotocol = Module._pthread_mutexattr_setprotocol = (e, t2) => (_pthread_mutexattr_setprotocol = Module._pthread_mutexattr_setprotocol = wasmExports.pthread_mutexattr_setprotocol)(e, t2), _pthread_mutexattr_settype = Module._pthread_mutexattr_settype = (e, t2) => (_pthread_mutexattr_settype = Module._pthread_mutexattr_settype = wasmExports.pthread_mutexattr_settype)(e, t2), _pthread_mutexattr_destroy = Module._pthread_mutexattr_destroy = (e) => (_pthread_mutexattr_destroy = Module._pthread_mutexattr_destroy = wasmExports.pthread_mutexattr_destroy)(e), _pthread_mutexattr_setpshared = Module._pthread_mutexattr_setpshared = (e, t2) => (_pthread_mutexattr_setpshared = Module._pthread_mutexattr_setpshared = wasmExports.pthread_mutexattr_setpshared)(e, t2), _pthread_mutex_trylock = Module._pthread_mutex_trylock = (e) => (_pthread_mutex_trylock = Module._pthread_mutex_trylock = wasmExports.pthread_mutex_trylock)(e), _pthread_create = Module._pthread_create = (e, t2, r2, a2) => (_pthread_create = Module._pthread_create = wasmExports.pthread_create)(e, t2, r2, a2), _pthread_join = Module._pthread_join = (e, t2) => (_pthread_join = Module._pthread_join = wasmExports.pthread_join)(e, t2), _pthread_cond_timedwait = Module._pthread_cond_timedwait = (e, t2, r2) => (_pthread_cond_timedwait = Module._pthread_cond_timedwait = wasmExports.pthread_cond_timedwait)(e, t2, r2), _pthread_detach = Module._pthread_detach = (e) => (_pthread_detach = Module._pthread_detach = wasmExports.pthread_detach)(e), _link = Module._link = (e, t2) => (_link = Module._link = wasmExports.link)(e, t2), _llround = Module._llround = (e) => (_llround = Module._llround = wasmExports.llround)(e), _log2 = Module._log2 = (e) => (_log2 = Module._log2 = wasmExports.log2)(e), _logb = Module._logb = (e) => (_logb = Module._logb = wasmExports.logb)(e), _lround = Module._lround = (e) => (_lround = Module._lround = wasmExports.lround)(e), _mbrlen = Module._mbrlen = (e, t2, r2) => (_mbrlen = Module._mbrlen = wasmExports.mbrlen)(e, t2, r2), _mbsnrtowcs = Module._mbsnrtowcs = (e, t2, r2, a2, o5) => (_mbsnrtowcs = Module._mbsnrtowcs = wasmExports.mbsnrtowcs)(e, t2, r2, a2, o5), _mbsrtowcs = Module._mbsrtowcs = (e, t2, r2, a2) => (_mbsrtowcs = Module._mbsrtowcs = wasmExports.mbsrtowcs)(e, t2, r2, a2), _memrchr = Module._memrchr = (e, t2, r2) => (_memrchr = Module._memrchr = wasmExports.memrchr)(e, t2, r2), _localtime_r = Module._localtime_r = (e, t2) => (_localtime_r = Module._localtime_r = wasmExports.localtime_r)(e, t2), _emscripten_builtin_memalign = (e, t2) => (_emscripten_builtin_memalign = wasmExports.emscripten_builtin_memalign)(e, t2), _modf = Module._modf = (e, t2) => (_modf = Module._modf = wasmExports.modf)(e, t2), _munmap = Module._munmap = (e, t2) => (_munmap = Module._munmap = wasmExports.munmap)(e, t2), _nextafter = Module._nextafter = (e, t2) => (_nextafter = Module._nextafter = wasmExports.nextafter)(e, t2), _nextafterf = Module._nextafterf = (e, t2) => (_nextafterf = Module._nextafterf = wasmExports.nextafterf)(e, t2), _ntohs = (e) => (_ntohs = wasmExports.ntohs)(e), _openat = Module._openat = (e, t2, r2, a2) => (_openat = Module._openat = wasmExports.openat)(e, t2, r2, a2), _pathconf = Module._pathconf = (e, t2) => (_pathconf = Module._pathconf = wasmExports.pathconf)(e, t2), _perror = Module._perror = (e) => (_perror = Module._perror = wasmExports.perror)(e), _iprintf = Module._iprintf = (e, t2) => (_iprintf = Module._iprintf = wasmExports.iprintf)(e, t2), ___small_printf = Module.___small_printf = (e, t2) => (___small_printf = Module.___small_printf = wasmExports.__small_printf)(e, t2), _pthread_mutexattr_getprotocol = Module._pthread_mutexattr_getprotocol = (e, t2) => (_pthread_mutexattr_getprotocol = Module._pthread_mutexattr_getprotocol = wasmExports.pthread_mutexattr_getprotocol)(e, t2), _pthread_mutexattr_getpshared = Module._pthread_mutexattr_getpshared = (e, t2) => (_pthread_mutexattr_getpshared = Module._pthread_mutexattr_getpshared = wasmExports.pthread_mutexattr_getpshared)(e, t2), _pthread_mutexattr_getrobust = Module._pthread_mutexattr_getrobust = (e, t2) => (_pthread_mutexattr_getrobust = Module._pthread_mutexattr_getrobust = wasmExports.pthread_mutexattr_getrobust)(e, t2), _pthread_mutexattr_gettype = Module._pthread_mutexattr_gettype = (e, t2) => (_pthread_mutexattr_gettype = Module._pthread_mutexattr_gettype = wasmExports.pthread_mutexattr_gettype)(e, t2), _putchar = Module._putchar = (e) => (_putchar = Module._putchar = wasmExports.putchar)(e), _qsort = Module._qsort = (e, t2, r2, a2) => (_qsort = Module._qsort = wasmExports.qsort)(e, t2, r2, a2), _srand = Module._srand = (e) => (_srand = Module._srand = wasmExports.srand)(e), _rand = Module._rand = () => (_rand = Module._rand = wasmExports.rand)(), _remainder = Module._remainder = (e, t2) => (_remainder = Module._remainder = wasmExports.remainder)(e, t2), _remove = Module._remove = (e) => (_remove = Module._remove = wasmExports.remove)(e), _remquo = Module._remquo = (e, t2, r2) => (_remquo = Module._remquo = wasmExports.remquo)(e, t2, r2), _round = Module._round = (e) => (_round = Module._round = wasmExports.round)(e), _roundf = Module._roundf = (e) => (_roundf = Module._roundf = wasmExports.roundf)(e), __emscripten_timeout = (e, t2) => (__emscripten_timeout = wasmExports._emscripten_timeout)(e, t2), _sinl = Module._sinl = (e, t2, r2) => (_sinl = Module._sinl = wasmExports.sinl)(e, t2, r2), _siprintf = Module._siprintf = (e, t2, r2) => (_siprintf = Module._siprintf = wasmExports.siprintf)(e, t2, r2), _sqrtl = Module._sqrtl = (e, t2, r2) => (_sqrtl = Module._sqrtl = wasmExports.sqrtl)(e, t2, r2), _vsscanf = Module._vsscanf = (e, t2, r2) => (_vsscanf = Module._vsscanf = wasmExports.vsscanf)(e, t2, r2), _statvfs = Module._statvfs = (e, t2) => (_statvfs = Module._statvfs = wasmExports.statvfs)(e, t2), _strcasecmp = Module._strcasecmp = (e, t2) => (_strcasecmp = Module._strcasecmp = wasmExports.strcasecmp)(e, t2), _strerror_r = Module._strerror_r = (e, t2, r2) => (_strerror_r = Module._strerror_r = wasmExports.strerror_r)(e, t2, r2), _strftime_l = Module._strftime_l = (e, t2, r2, a2, o5) => (_strftime_l = Module._strftime_l = wasmExports.strftime_l)(e, t2, r2, a2, o5), _strncasecmp = Module._strncasecmp = (e, t2, r2) => (_strncasecmp = Module._strncasecmp = wasmExports.strncasecmp)(e, t2, r2), _strncat = Module._strncat = (e, t2, r2) => (_strncat = Module._strncat = wasmExports.strncat)(e, t2, r2), ___multf3 = Module.___multf3 = (e, t2, r2, a2, o5) => (___multf3 = Module.___multf3 = wasmExports.__multf3)(e, t2, r2, a2, o5), ___addtf3 = Module.___addtf3 = (e, t2, r2, a2, o5) => (___addtf3 = Module.___addtf3 = wasmExports.__addtf3)(e, t2, r2, a2, o5), ___extenddftf2 = Module.___extenddftf2 = (e, t2) => (___extenddftf2 = Module.___extenddftf2 = wasmExports.__extenddftf2)(e, t2), ___subtf3 = Module.___subtf3 = (e, t2, r2, a2, o5) => (___subtf3 = Module.___subtf3 = wasmExports.__subtf3)(e, t2, r2, a2, o5), ___divtf3 = Module.___divtf3 = (e, t2, r2, a2, o5) => (___divtf3 = Module.___divtf3 = wasmExports.__divtf3)(e, t2, r2, a2, o5), ___eqtf2 = Module.___eqtf2 = (e, t2, r2, a2) => (___eqtf2 = Module.___eqtf2 = wasmExports.__eqtf2)(e, t2, r2, a2), ___trunctfdf2 = Module.___trunctfdf2 = (e, t2) => (___trunctfdf2 = Module.___trunctfdf2 = wasmExports.__trunctfdf2)(e, t2), _strtold = Module._strtold = (e, t2, r2) => (_strtold = Module._strtold = wasmExports.strtold)(e, t2, r2), _strtof_l = Module._strtof_l = (e, t2, r2) => (_strtof_l = Module._strtof_l = wasmExports.strtof_l)(e, t2, r2), _strtod_l = Module._strtod_l = (e, t2, r2) => (_strtod_l = Module._strtod_l = wasmExports.strtod_l)(e, t2, r2), _strtold_l = Module._strtold_l = (e, t2, r2, a2) => (_strtold_l = Module._strtold_l = wasmExports.strtold_l)(e, t2, r2, a2), _strtoull_l = Module._strtoull_l = (e, t2, r2, a2) => (_strtoull_l = Module._strtoull_l = wasmExports.strtoull_l)(e, t2, r2, a2), _strtoll_l = Module._strtoll_l = (e, t2, r2, a2) => (_strtoll_l = Module._strtoll_l = wasmExports.strtoll_l)(e, t2, r2, a2), _strxfrm_l = Module._strxfrm_l = (e, t2, r2, a2) => (_strxfrm_l = Module._strxfrm_l = wasmExports.strxfrm_l)(e, t2, r2, a2), _swprintf = Module._swprintf = (e, t2, r2, a2) => (_swprintf = Module._swprintf = wasmExports.swprintf)(e, t2, r2, a2), _trunc = Module._trunc = (e) => (_trunc = Module._trunc = wasmExports.trunc)(e), _ungetc = Module._ungetc = (e, t2) => (_ungetc = Module._ungetc = wasmExports.ungetc)(e, t2), _ungetwc = Module._ungetwc = (e, t2) => (_ungetwc = Module._ungetwc = wasmExports.ungetwc)(e, t2), _unlinkat = Module._unlinkat = (e, t2, r2) => (_unlinkat = Module._unlinkat = wasmExports.unlinkat)(e, t2, r2), _usleep = Module._usleep = (e) => (_usleep = Module._usleep = wasmExports.usleep)(e), _utimensat = Module._utimensat = (e, t2, r2, a2) => (_utimensat = Module._utimensat = wasmExports.utimensat)(e, t2, r2, a2), _vasprintf = Module._vasprintf = (e, t2, r2) => (_vasprintf = Module._vasprintf = wasmExports.vasprintf)(e, t2, r2), _wcrtomb = Module._wcrtomb = (e, t2, r2) => (_wcrtomb = Module._wcrtomb = wasmExports.wcrtomb)(e, t2, r2), _wcslen = Module._wcslen = (e) => (_wcslen = Module._wcslen = wasmExports.wcslen)(e), _wcscoll_l = Module._wcscoll_l = (e, t2, r2) => (_wcscoll_l = Module._wcscoll_l = wasmExports.wcscoll_l)(e, t2, r2), _wcsnrtombs = Module._wcsnrtombs = (e, t2, r2, a2, o5) => (_wcsnrtombs = Module._wcsnrtombs = wasmExports.wcsnrtombs)(e, t2, r2, a2, o5), _wcstof = Module._wcstof = (e, t2) => (_wcstof = Module._wcstof = wasmExports.wcstof)(e, t2), _wcstod = Module._wcstod = (e, t2) => (_wcstod = Module._wcstod = wasmExports.wcstod)(e, t2), _wcstold = Module._wcstold = (e, t2, r2) => (_wcstold = Module._wcstold = wasmExports.wcstold)(e, t2, r2), _wcstoull = Module._wcstoull = (e, t2, r2) => (_wcstoull = Module._wcstoull = wasmExports.wcstoull)(e, t2, r2), _wcstoll = Module._wcstoll = (e, t2, r2) => (_wcstoll = Module._wcstoll = wasmExports.wcstoll)(e, t2, r2), _wcstoul = Module._wcstoul = (e, t2, r2) => (_wcstoul = Module._wcstoul = wasmExports.wcstoul)(e, t2, r2), _wcstol = Module._wcstol = (e, t2, r2) => (_wcstol = Module._wcstol = wasmExports.wcstol)(e, t2, r2), _wcsxfrm_l = Module._wcsxfrm_l = (e, t2, r2, a2) => (_wcsxfrm_l = Module._wcsxfrm_l = wasmExports.wcsxfrm_l)(e, t2, r2, a2), _wctob = Module._wctob = (e) => (_wctob = Module._wctob = wasmExports.wctob)(e), _wmemchr = Module._wmemchr = (e, t2, r2) => (_wmemchr = Module._wmemchr = wasmExports.wmemchr)(e, t2, r2), _wmemcmp = Module._wmemcmp = (e, t2, r2) => (_wmemcmp = Module._wmemcmp = wasmExports.wmemcmp)(e, t2, r2), ___lttf2 = Module.___lttf2 = (e, t2, r2, a2) => (___lttf2 = Module.___lttf2 = wasmExports.__lttf2)(e, t2, r2, a2), _setThrew = (e, t2) => (_setThrew = wasmExports.setThrew)(e, t2), __emscripten_tempret_set = (e) => (__emscripten_tempret_set = wasmExports._emscripten_tempret_set)(e), __emscripten_tempret_get = () => (__emscripten_tempret_get = wasmExports._emscripten_tempret_get)(), __emscripten_stack_restore = (e) => (__emscripten_stack_restore = wasmExports._emscripten_stack_restore)(e), __emscripten_stack_alloc = (e) => (__emscripten_stack_alloc = wasmExports._emscripten_stack_alloc)(e), _emscripten_stack_get_current = () => (_emscripten_stack_get_current = wasmExports.emscripten_stack_get_current)(), __ZNSt3__210__stdinbufIcEC2EP8_IO_FILEP11__mbstate_t = Module.__ZNSt3__210__stdinbufIcEC2EP8_IO_FILEP11__mbstate_t = (e, t2, r2) => (__ZNSt3__210__stdinbufIcEC2EP8_IO_FILEP11__mbstate_t = Module.__ZNSt3__210__stdinbufIcEC2EP8_IO_FILEP11__mbstate_t = wasmExports._ZNSt3__210__stdinbufIcEC2EP8_IO_FILEP11__mbstate_t)(e, t2, r2), __ZNSt3__211__stdoutbufIcEC2EP8_IO_FILEP11__mbstate_t = Module.__ZNSt3__211__stdoutbufIcEC2EP8_IO_FILEP11__mbstate_t = (e, t2, r2) => (__ZNSt3__211__stdoutbufIcEC2EP8_IO_FILEP11__mbstate_t = Module.__ZNSt3__211__stdoutbufIcEC2EP8_IO_FILEP11__mbstate_t = wasmExports._ZNSt3__211__stdoutbufIcEC2EP8_IO_FILEP11__mbstate_t)(e, t2, r2), __ZNSt3__210__stdinbufIwEC2EP8_IO_FILEP11__mbstate_t = Module.__ZNSt3__210__stdinbufIwEC2EP8_IO_FILEP11__mbstate_t = (e, t2, r2) => (__ZNSt3__210__stdinbufIwEC2EP8_IO_FILEP11__mbstate_t = Module.__ZNSt3__210__stdinbufIwEC2EP8_IO_FILEP11__mbstate_t = wasmExports._ZNSt3__210__stdinbufIwEC2EP8_IO_FILEP11__mbstate_t)(e, t2, r2), __ZNSt3__211__stdoutbufIwEC2EP8_IO_FILEP11__mbstate_t = Module.__ZNSt3__211__stdoutbufIwEC2EP8_IO_FILEP11__mbstate_t = (e, t2, r2) => (__ZNSt3__211__stdoutbufIwEC2EP8_IO_FILEP11__mbstate_t = Module.__ZNSt3__211__stdoutbufIwEC2EP8_IO_FILEP11__mbstate_t = wasmExports._ZNSt3__211__stdoutbufIwEC2EP8_IO_FILEP11__mbstate_t)(e, t2, r2), __Znwm = Module.__Znwm = (e) => (__Znwm = Module.__Znwm = wasmExports._Znwm)(e), __ZdlPv = Module.__ZdlPv = (e) => (__ZdlPv = Module.__ZdlPv = wasmExports._ZdlPv)(e), __ZdlPvm = Module.__ZdlPvm = (e, t2) => (__ZdlPvm = Module.__ZdlPvm = wasmExports._ZdlPvm)(e, t2), ___cxa_bad_cast = Module.___cxa_bad_cast = () => (___cxa_bad_cast = Module.___cxa_bad_cast = wasmExports.__cxa_bad_cast)(), ___cxa_bad_typeid = Module.___cxa_bad_typeid = () => (___cxa_bad_typeid = Module.___cxa_bad_typeid = wasmExports.__cxa_bad_typeid)(), __ZSt9terminatev = Module.__ZSt9terminatev = () => (__ZSt9terminatev = Module.__ZSt9terminatev = wasmExports._ZSt9terminatev)(), __ZSt15get_new_handlerv = Module.__ZSt15get_new_handlerv = () => (__ZSt15get_new_handlerv = Module.__ZSt15get_new_handlerv = wasmExports._ZSt15get_new_handlerv)(), ___cxa_increment_exception_refcount = Module.___cxa_increment_exception_refcount = (e) => (___cxa_increment_exception_refcount = Module.___cxa_increment_exception_refcount = wasmExports.__cxa_increment_exception_refcount)(e), ___cxa_decrement_exception_refcount = Module.___cxa_decrement_exception_refcount = (e) => (___cxa_decrement_exception_refcount = Module.___cxa_decrement_exception_refcount = wasmExports.__cxa_decrement_exception_refcount)(e), ___cxa_allocate_exception = Module.___cxa_allocate_exception = (e) => (___cxa_allocate_exception = Module.___cxa_allocate_exception = wasmExports.__cxa_allocate_exception)(e), ___cxa_free_exception = Module.___cxa_free_exception = (e) => (___cxa_free_exception = Module.___cxa_free_exception = wasmExports.__cxa_free_exception)(e), ___cxa_init_primary_exception = Module.___cxa_init_primary_exception = (e, t2, r2) => (___cxa_init_primary_exception = Module.___cxa_init_primary_exception = wasmExports.__cxa_init_primary_exception)(e, t2, r2), ___cxa_pure_virtual = Module.___cxa_pure_virtual = () => (___cxa_pure_virtual = Module.___cxa_pure_virtual = wasmExports.__cxa_pure_virtual)(), ___dynamic_cast = Module.___dynamic_cast = (e, t2, r2, a2) => (___dynamic_cast = Module.___dynamic_cast = wasmExports.__dynamic_cast)(e, t2, r2, a2), ___cxa_can_catch = (e, t2, r2) => (___cxa_can_catch = wasmExports.__cxa_can_catch)(e, t2, r2), ___cxa_get_exception_ptr = Module.___cxa_get_exception_ptr = (e) => (___cxa_get_exception_ptr = Module.___cxa_get_exception_ptr = wasmExports.__cxa_get_exception_ptr)(e), __ZNSt9exceptionD2Ev = Module.__ZNSt9exceptionD2Ev = (e) => (__ZNSt9exceptionD2Ev = Module.__ZNSt9exceptionD2Ev = wasmExports._ZNSt9exceptionD2Ev)(e), __ZNSt9exceptionD0Ev = Module.__ZNSt9exceptionD0Ev = (e) => (__ZNSt9exceptionD0Ev = Module.__ZNSt9exceptionD0Ev = wasmExports._ZNSt9exceptionD0Ev)(e), __ZNSt9exceptionD1Ev = Module.__ZNSt9exceptionD1Ev = (e) => (__ZNSt9exceptionD1Ev = Module.__ZNSt9exceptionD1Ev = wasmExports._ZNSt9exceptionD1Ev)(e), __ZNKSt9exception4whatEv = Module.__ZNKSt9exception4whatEv = (e) => (__ZNKSt9exception4whatEv = Module.__ZNKSt9exception4whatEv = wasmExports._ZNKSt9exception4whatEv)(e), __ZNSt13bad_exceptionD0Ev = Module.__ZNSt13bad_exceptionD0Ev = (e) => (__ZNSt13bad_exceptionD0Ev = Module.__ZNSt13bad_exceptionD0Ev = wasmExports._ZNSt13bad_exceptionD0Ev)(e), __ZNSt13bad_exceptionD1Ev = Module.__ZNSt13bad_exceptionD1Ev = (e) => (__ZNSt13bad_exceptionD1Ev = Module.__ZNSt13bad_exceptionD1Ev = wasmExports._ZNSt13bad_exceptionD1Ev)(e), __ZNKSt13bad_exception4whatEv = Module.__ZNKSt13bad_exception4whatEv = (e) => (__ZNKSt13bad_exception4whatEv = Module.__ZNKSt13bad_exception4whatEv = wasmExports._ZNKSt13bad_exception4whatEv)(e), __ZNSt9bad_allocC2Ev = Module.__ZNSt9bad_allocC2Ev = (e) => (__ZNSt9bad_allocC2Ev = Module.__ZNSt9bad_allocC2Ev = wasmExports._ZNSt9bad_allocC2Ev)(e), __ZNSt9bad_allocD0Ev = Module.__ZNSt9bad_allocD0Ev = (e) => (__ZNSt9bad_allocD0Ev = Module.__ZNSt9bad_allocD0Ev = wasmExports._ZNSt9bad_allocD0Ev)(e), __ZNSt9bad_allocD1Ev = Module.__ZNSt9bad_allocD1Ev = (e) => (__ZNSt9bad_allocD1Ev = Module.__ZNSt9bad_allocD1Ev = wasmExports._ZNSt9bad_allocD1Ev)(e), __ZNKSt9bad_alloc4whatEv = Module.__ZNKSt9bad_alloc4whatEv = (e) => (__ZNKSt9bad_alloc4whatEv = Module.__ZNKSt9bad_alloc4whatEv = wasmExports._ZNKSt9bad_alloc4whatEv)(e), __ZNSt20bad_array_new_lengthC2Ev = Module.__ZNSt20bad_array_new_lengthC2Ev = (e) => (__ZNSt20bad_array_new_lengthC2Ev = Module.__ZNSt20bad_array_new_lengthC2Ev = wasmExports._ZNSt20bad_array_new_lengthC2Ev)(e), __ZNSt20bad_array_new_lengthD0Ev = Module.__ZNSt20bad_array_new_lengthD0Ev = (e) => (__ZNSt20bad_array_new_lengthD0Ev = Module.__ZNSt20bad_array_new_lengthD0Ev = wasmExports._ZNSt20bad_array_new_lengthD0Ev)(e), __ZNSt20bad_array_new_lengthD1Ev = Module.__ZNSt20bad_array_new_lengthD1Ev = (e) => (__ZNSt20bad_array_new_lengthD1Ev = Module.__ZNSt20bad_array_new_lengthD1Ev = wasmExports._ZNSt20bad_array_new_lengthD1Ev)(e), __ZNKSt20bad_array_new_length4whatEv = Module.__ZNKSt20bad_array_new_length4whatEv = (e) => (__ZNKSt20bad_array_new_length4whatEv = Module.__ZNKSt20bad_array_new_length4whatEv = wasmExports._ZNKSt20bad_array_new_length4whatEv)(e), __ZNSt13bad_exceptionD2Ev = Module.__ZNSt13bad_exceptionD2Ev = (e) => (__ZNSt13bad_exceptionD2Ev = Module.__ZNSt13bad_exceptionD2Ev = wasmExports._ZNSt13bad_exceptionD2Ev)(e), __ZNSt9bad_allocC1Ev = Module.__ZNSt9bad_allocC1Ev = (e) => (__ZNSt9bad_allocC1Ev = Module.__ZNSt9bad_allocC1Ev = wasmExports._ZNSt9bad_allocC1Ev)(e), __ZNSt9bad_allocD2Ev = Module.__ZNSt9bad_allocD2Ev = (e) => (__ZNSt9bad_allocD2Ev = Module.__ZNSt9bad_allocD2Ev = wasmExports._ZNSt9bad_allocD2Ev)(e), __ZNSt20bad_array_new_lengthC1Ev = Module.__ZNSt20bad_array_new_lengthC1Ev = (e) => (__ZNSt20bad_array_new_lengthC1Ev = Module.__ZNSt20bad_array_new_lengthC1Ev = wasmExports._ZNSt20bad_array_new_lengthC1Ev)(e), __ZNSt20bad_array_new_lengthD2Ev = Module.__ZNSt20bad_array_new_lengthD2Ev = (e) => (__ZNSt20bad_array_new_lengthD2Ev = Module.__ZNSt20bad_array_new_lengthD2Ev = wasmExports._ZNSt20bad_array_new_lengthD2Ev)(e), __ZNSt11logic_errorD2Ev = Module.__ZNSt11logic_errorD2Ev = (e) => (__ZNSt11logic_errorD2Ev = Module.__ZNSt11logic_errorD2Ev = wasmExports._ZNSt11logic_errorD2Ev)(e), __ZNSt11logic_errorD0Ev = Module.__ZNSt11logic_errorD0Ev = (e) => (__ZNSt11logic_errorD0Ev = Module.__ZNSt11logic_errorD0Ev = wasmExports._ZNSt11logic_errorD0Ev)(e), __ZNSt11logic_errorD1Ev = Module.__ZNSt11logic_errorD1Ev = (e) => (__ZNSt11logic_errorD1Ev = Module.__ZNSt11logic_errorD1Ev = wasmExports._ZNSt11logic_errorD1Ev)(e), __ZNKSt11logic_error4whatEv = Module.__ZNKSt11logic_error4whatEv = (e) => (__ZNKSt11logic_error4whatEv = Module.__ZNKSt11logic_error4whatEv = wasmExports._ZNKSt11logic_error4whatEv)(e), __ZNSt13runtime_errorD2Ev = Module.__ZNSt13runtime_errorD2Ev = (e) => (__ZNSt13runtime_errorD2Ev = Module.__ZNSt13runtime_errorD2Ev = wasmExports._ZNSt13runtime_errorD2Ev)(e), __ZNSt13runtime_errorD0Ev = Module.__ZNSt13runtime_errorD0Ev = (e) => (__ZNSt13runtime_errorD0Ev = Module.__ZNSt13runtime_errorD0Ev = wasmExports._ZNSt13runtime_errorD0Ev)(e), __ZNSt13runtime_errorD1Ev = Module.__ZNSt13runtime_errorD1Ev = (e) => (__ZNSt13runtime_errorD1Ev = Module.__ZNSt13runtime_errorD1Ev = wasmExports._ZNSt13runtime_errorD1Ev)(e), __ZNKSt13runtime_error4whatEv = Module.__ZNKSt13runtime_error4whatEv = (e) => (__ZNKSt13runtime_error4whatEv = Module.__ZNKSt13runtime_error4whatEv = wasmExports._ZNKSt13runtime_error4whatEv)(e), __ZNSt12domain_errorD0Ev = Module.__ZNSt12domain_errorD0Ev = (e) => (__ZNSt12domain_errorD0Ev = Module.__ZNSt12domain_errorD0Ev = wasmExports._ZNSt12domain_errorD0Ev)(e), __ZNSt12domain_errorD1Ev = Module.__ZNSt12domain_errorD1Ev = (e) => (__ZNSt12domain_errorD1Ev = Module.__ZNSt12domain_errorD1Ev = wasmExports._ZNSt12domain_errorD1Ev)(e), __ZNSt16invalid_argumentD0Ev = Module.__ZNSt16invalid_argumentD0Ev = (e) => (__ZNSt16invalid_argumentD0Ev = Module.__ZNSt16invalid_argumentD0Ev = wasmExports._ZNSt16invalid_argumentD0Ev)(e), __ZNSt16invalid_argumentD1Ev = Module.__ZNSt16invalid_argumentD1Ev = (e) => (__ZNSt16invalid_argumentD1Ev = Module.__ZNSt16invalid_argumentD1Ev = wasmExports._ZNSt16invalid_argumentD1Ev)(e), __ZNSt12length_errorD0Ev = Module.__ZNSt12length_errorD0Ev = (e) => (__ZNSt12length_errorD0Ev = Module.__ZNSt12length_errorD0Ev = wasmExports._ZNSt12length_errorD0Ev)(e), __ZNSt12length_errorD1Ev = Module.__ZNSt12length_errorD1Ev = (e) => (__ZNSt12length_errorD1Ev = Module.__ZNSt12length_errorD1Ev = wasmExports._ZNSt12length_errorD1Ev)(e), __ZNSt12out_of_rangeD0Ev = Module.__ZNSt12out_of_rangeD0Ev = (e) => (__ZNSt12out_of_rangeD0Ev = Module.__ZNSt12out_of_rangeD0Ev = wasmExports._ZNSt12out_of_rangeD0Ev)(e), __ZNSt12out_of_rangeD1Ev = Module.__ZNSt12out_of_rangeD1Ev = (e) => (__ZNSt12out_of_rangeD1Ev = Module.__ZNSt12out_of_rangeD1Ev = wasmExports._ZNSt12out_of_rangeD1Ev)(e), __ZNSt11range_errorD0Ev = Module.__ZNSt11range_errorD0Ev = (e) => (__ZNSt11range_errorD0Ev = Module.__ZNSt11range_errorD0Ev = wasmExports._ZNSt11range_errorD0Ev)(e), __ZNSt11range_errorD1Ev = Module.__ZNSt11range_errorD1Ev = (e) => (__ZNSt11range_errorD1Ev = Module.__ZNSt11range_errorD1Ev = wasmExports._ZNSt11range_errorD1Ev)(e), __ZNSt14overflow_errorD0Ev = Module.__ZNSt14overflow_errorD0Ev = (e) => (__ZNSt14overflow_errorD0Ev = Module.__ZNSt14overflow_errorD0Ev = wasmExports._ZNSt14overflow_errorD0Ev)(e), __ZNSt14overflow_errorD1Ev = Module.__ZNSt14overflow_errorD1Ev = (e) => (__ZNSt14overflow_errorD1Ev = Module.__ZNSt14overflow_errorD1Ev = wasmExports._ZNSt14overflow_errorD1Ev)(e), __ZNSt15underflow_errorD0Ev = Module.__ZNSt15underflow_errorD0Ev = (e) => (__ZNSt15underflow_errorD0Ev = Module.__ZNSt15underflow_errorD0Ev = wasmExports._ZNSt15underflow_errorD0Ev)(e), __ZNSt15underflow_errorD1Ev = Module.__ZNSt15underflow_errorD1Ev = (e) => (__ZNSt15underflow_errorD1Ev = Module.__ZNSt15underflow_errorD1Ev = wasmExports._ZNSt15underflow_errorD1Ev)(e), __ZNSt12domain_errorD2Ev = Module.__ZNSt12domain_errorD2Ev = (e) => (__ZNSt12domain_errorD2Ev = Module.__ZNSt12domain_errorD2Ev = wasmExports._ZNSt12domain_errorD2Ev)(e), __ZNSt16invalid_argumentD2Ev = Module.__ZNSt16invalid_argumentD2Ev = (e) => (__ZNSt16invalid_argumentD2Ev = Module.__ZNSt16invalid_argumentD2Ev = wasmExports._ZNSt16invalid_argumentD2Ev)(e), __ZNSt12length_errorD2Ev = Module.__ZNSt12length_errorD2Ev = (e) => (__ZNSt12length_errorD2Ev = Module.__ZNSt12length_errorD2Ev = wasmExports._ZNSt12length_errorD2Ev)(e), __ZNSt12out_of_rangeD2Ev = Module.__ZNSt12out_of_rangeD2Ev = (e) => (__ZNSt12out_of_rangeD2Ev = Module.__ZNSt12out_of_rangeD2Ev = wasmExports._ZNSt12out_of_rangeD2Ev)(e), __ZNSt11range_errorD2Ev = Module.__ZNSt11range_errorD2Ev = (e) => (__ZNSt11range_errorD2Ev = Module.__ZNSt11range_errorD2Ev = wasmExports._ZNSt11range_errorD2Ev)(e), __ZNSt14overflow_errorD2Ev = Module.__ZNSt14overflow_errorD2Ev = (e) => (__ZNSt14overflow_errorD2Ev = Module.__ZNSt14overflow_errorD2Ev = wasmExports._ZNSt14overflow_errorD2Ev)(e), __ZNSt15underflow_errorD2Ev = Module.__ZNSt15underflow_errorD2Ev = (e) => (__ZNSt15underflow_errorD2Ev = Module.__ZNSt15underflow_errorD2Ev = wasmExports._ZNSt15underflow_errorD2Ev)(e), __ZNSt9type_infoD2Ev = Module.__ZNSt9type_infoD2Ev = (e) => (__ZNSt9type_infoD2Ev = Module.__ZNSt9type_infoD2Ev = wasmExports._ZNSt9type_infoD2Ev)(e), __ZNSt9type_infoD0Ev = Module.__ZNSt9type_infoD0Ev = (e) => (__ZNSt9type_infoD0Ev = Module.__ZNSt9type_infoD0Ev = wasmExports._ZNSt9type_infoD0Ev)(e), __ZNSt9type_infoD1Ev = Module.__ZNSt9type_infoD1Ev = (e) => (__ZNSt9type_infoD1Ev = Module.__ZNSt9type_infoD1Ev = wasmExports._ZNSt9type_infoD1Ev)(e), __ZNSt8bad_castC2Ev = Module.__ZNSt8bad_castC2Ev = (e) => (__ZNSt8bad_castC2Ev = Module.__ZNSt8bad_castC2Ev = wasmExports._ZNSt8bad_castC2Ev)(e), __ZNSt8bad_castD2Ev = Module.__ZNSt8bad_castD2Ev = (e) => (__ZNSt8bad_castD2Ev = Module.__ZNSt8bad_castD2Ev = wasmExports._ZNSt8bad_castD2Ev)(e), __ZNSt8bad_castD0Ev = Module.__ZNSt8bad_castD0Ev = (e) => (__ZNSt8bad_castD0Ev = Module.__ZNSt8bad_castD0Ev = wasmExports._ZNSt8bad_castD0Ev)(e), __ZNSt8bad_castD1Ev = Module.__ZNSt8bad_castD1Ev = (e) => (__ZNSt8bad_castD1Ev = Module.__ZNSt8bad_castD1Ev = wasmExports._ZNSt8bad_castD1Ev)(e), __ZNKSt8bad_cast4whatEv = Module.__ZNKSt8bad_cast4whatEv = (e) => (__ZNKSt8bad_cast4whatEv = Module.__ZNKSt8bad_cast4whatEv = wasmExports._ZNKSt8bad_cast4whatEv)(e), __ZNSt10bad_typeidC2Ev = Module.__ZNSt10bad_typeidC2Ev = (e) => (__ZNSt10bad_typeidC2Ev = Module.__ZNSt10bad_typeidC2Ev = wasmExports._ZNSt10bad_typeidC2Ev)(e), __ZNSt10bad_typeidD2Ev = Module.__ZNSt10bad_typeidD2Ev = (e) => (__ZNSt10bad_typeidD2Ev = Module.__ZNSt10bad_typeidD2Ev = wasmExports._ZNSt10bad_typeidD2Ev)(e), __ZNSt10bad_typeidD0Ev = Module.__ZNSt10bad_typeidD0Ev = (e) => (__ZNSt10bad_typeidD0Ev = Module.__ZNSt10bad_typeidD0Ev = wasmExports._ZNSt10bad_typeidD0Ev)(e), __ZNSt10bad_typeidD1Ev = Module.__ZNSt10bad_typeidD1Ev = (e) => (__ZNSt10bad_typeidD1Ev = Module.__ZNSt10bad_typeidD1Ev = wasmExports._ZNSt10bad_typeidD1Ev)(e), __ZNKSt10bad_typeid4whatEv = Module.__ZNKSt10bad_typeid4whatEv = (e) => (__ZNKSt10bad_typeid4whatEv = Module.__ZNKSt10bad_typeid4whatEv = wasmExports._ZNKSt10bad_typeid4whatEv)(e), __ZNSt8bad_castC1Ev = Module.__ZNSt8bad_castC1Ev = (e) => (__ZNSt8bad_castC1Ev = Module.__ZNSt8bad_castC1Ev = wasmExports._ZNSt8bad_castC1Ev)(e), __ZNSt10bad_typeidC1Ev = Module.__ZNSt10bad_typeidC1Ev = (e) => (__ZNSt10bad_typeidC1Ev = Module.__ZNSt10bad_typeidC1Ev = wasmExports._ZNSt10bad_typeidC1Ev)(e), ___wasm_apply_data_relocs = () => (___wasm_apply_data_relocs = wasmExports.__wasm_apply_data_relocs)(), _LocalBufferBlockPointers = Module._LocalBufferBlockPointers = 2407084, _BufferBlocks = Module._BufferBlocks = 2401804, _wal_level = Module._wal_level = 2227504, _CurrentMemoryContext = Module._CurrentMemoryContext = 2446512, _SnapshotAnyData = Module._SnapshotAnyData = 2314432, _debug_query_string = Module._debug_query_string = 2410688, _maintenance_work_mem = Module._maintenance_work_mem = 2261904, _CritSectionCount = Module._CritSectionCount = 2441124, _InterruptPending = Module._InterruptPending = 2441072, _ParallelWorkerNumber = Module._ParallelWorkerNumber = 2219032, _pg_number_of_ones = Module._pg_number_of_ones = 1985824, _TopMemoryContext = Module._TopMemoryContext = 2446516, _IsUnderPostmaster = Module._IsUnderPostmaster = 2441153, _MainLWLockArray = Module._MainLWLockArray = 2408692, _CurrentResourceOwner = Module._CurrentResourceOwner = 2446560, _work_mem = Module._work_mem = 2261892, _pg_global_prng_state = Module._pg_global_prng_state = 2530016, _NBuffers = Module._NBuffers = 2261912, _bsysscan = Module._bsysscan = 2386596, _CheckXidAlive = Module._CheckXidAlive = 2386592, _RecentXmin = Module._RecentXmin = 2314524, _TTSOpsHeapTuple = Module._TTSOpsHeapTuple = 2231452, _XactIsoLevel = Module._XactIsoLevel = 2227368, _pgWalUsage = Module._pgWalUsage = 2389936, _MyDatabaseId = Module._MyDatabaseId = 2441132, _pgBufferUsage = Module._pgBufferUsage = 2389808, _error_context_stack = Module._error_context_stack = 2439368, _MyLatch = Module._MyLatch = 2441264, ___THREW__ = Module.___THREW__ = 2545380, ___threwValue = Module.___threwValue = 2545384, _PG_exception_stack = Module._PG_exception_stack = 2439372, _TTSOpsVirtual = Module._TTSOpsVirtual = 2231400, _GUC_check_errdetail_string = Module._GUC_check_errdetail_string = 2445036, _MyProc = Module._MyProc = 2410508, _TransamVariables = Module._TransamVariables = 2386584, _TopTransactionContext = Module._TopTransactionContext = 2446536, _MyProcPid = Module._MyProcPid = 2441224, _RmgrTable = Module._RmgrTable = 2219088, _process_shared_preload_libraries_in_progress = Module._process_shared_preload_libraries_in_progress = 2444432, _wal_segment_size = Module._wal_segment_size = 2227524, _TopTransactionResourceOwner = Module._TopTransactionResourceOwner = 2446568, _arch_module_check_errdetail_string = Module._arch_module_check_errdetail_string = 2399592, _stdout = Module._stdout = 2381200, _stdin = Module._stdin = 2381048, _object_access_hook = Module._object_access_hook = 2388576, _InvalidObjectAddress = Module._InvalidObjectAddress = 693528, _check_function_bodies = Module._check_function_bodies = 2262070, _post_parse_analyze_hook = Module._post_parse_analyze_hook = 2388616, _ScanKeywordTokens = Module._ScanKeywordTokens = 1240272, _ScanKeywords = Module._ScanKeywords = 2364776, _None_Receiver = Module._None_Receiver = 2236252, _SPI_processed = Module._SPI_processed = 2390112, _SPI_tuptable = Module._SPI_tuptable = 2390120, _CacheMemoryContext = Module._CacheMemoryContext = 2446528, _TTSOpsMinimalTuple = Module._TTSOpsMinimalTuple = 2231504, _check_password_hook = Module._check_password_hook = 2388884, _ConfigReloadPending = Module._ConfigReloadPending = 2399564, _max_parallel_maintenance_workers = Module._max_parallel_maintenance_workers = 2261908, _DateStyle = Module._DateStyle = 2261880, _ExecutorStart_hook = Module._ExecutorStart_hook = 2389784, _ExecutorRun_hook = Module._ExecutorRun_hook = 2389788, _ExecutorFinish_hook = Module._ExecutorFinish_hook = 2389792, _ExecutorEnd_hook = Module._ExecutorEnd_hook = 2389796, _SPI_result = Module._SPI_result = 2390124, _stderr = Module._stderr = 2380896, _ClientAuthentication_hook = Module._ClientAuthentication_hook = 2390288, _MyProcPort = Module._MyProcPort = 2441252, _set_rel_pathlist_hook = Module._set_rel_pathlist_hook = 2399152, _cpu_tuple_cost = Module._cpu_tuple_cost = 2231992, _cpu_operator_cost = Module._cpu_operator_cost = 2232008, _seq_page_cost = Module._seq_page_cost = 2231976, _planner_hook = Module._planner_hook = 2399192, _QueryCancelPending = Module._QueryCancelPending = 2441076, _ShutdownRequestPending = Module._ShutdownRequestPending = 2399568, _MyStartTime = Module._MyStartTime = 2441232, _cluster_name = Module._cluster_name = 2262120, _ProcDiePending = Module._ProcDiePending = 2441080, _application_name = Module._application_name = 2445300, _row_security_policy_hook_restrictive = Module._row_security_policy_hook_restrictive = 2401796, _row_security_policy_hook_permissive = Module._row_security_policy_hook_permissive = 2401792, _BufferDescriptors = Module._BufferDescriptors = 2401800, _shmem_startup_hook = Module._shmem_startup_hook = 2407764, _ProcessUtility_hook = Module._ProcessUtility_hook = 2410896, _IntervalStyle = Module._IntervalStyle = 2441156, _extra_float_digits = Module._extra_float_digits = 2252264, _pg_crc32_table = Module._pg_crc32_table = 1654048, _shmem_request_hook = Module._shmem_request_hook = 2444436, __ZTVN10__cxxabiv120__si_class_type_infoE = Module.__ZTVN10__cxxabiv120__si_class_type_infoE = 2381792, __ZTVN10__cxxabiv116__shim_type_infoE = Module.__ZTVN10__cxxabiv116__shim_type_infoE = 2381536, __ZTVN10__cxxabiv123__fundamental_type_infoE = Module.__ZTVN10__cxxabiv123__fundamental_type_infoE = 2381564, __ZTVN10__cxxabiv119__pointer_type_infoE = Module.__ZTVN10__cxxabiv119__pointer_type_infoE = 2381924, __ZTIPKc = Module.__ZTIPKc = 2381628, __ZTVN10__cxxabiv117__array_type_infoE = Module.__ZTVN10__cxxabiv117__array_type_infoE = 2381644, __ZTVN10__cxxabiv120__function_type_infoE = Module.__ZTVN10__cxxabiv120__function_type_infoE = 2381684, __ZTVN10__cxxabiv116__enum_type_infoE = Module.__ZTVN10__cxxabiv116__enum_type_infoE = 2381712, __ZTVN10__cxxabiv117__class_type_infoE = Module.__ZTVN10__cxxabiv117__class_type_infoE = 2381752, __ZTVN10__cxxabiv121__vmi_class_type_infoE = Module.__ZTVN10__cxxabiv121__vmi_class_type_infoE = 2381844, __ZTVN10__cxxabiv117__pbase_type_infoE = Module.__ZTVN10__cxxabiv117__pbase_type_infoE = 2381896, __ZTVN10__cxxabiv129__pointer_to_member_type_infoE = Module.__ZTVN10__cxxabiv129__pointer_to_member_type_infoE = 2381952, __ZTVSt9bad_alloc = Module.__ZTVSt9bad_alloc = 2381980, __ZTVSt9exception = Module.__ZTVSt9exception = 2382020, __ZTVSt20bad_array_new_length = Module.__ZTVSt20bad_array_new_length = 2382e3, __ZTISt9bad_alloc = Module.__ZTISt9bad_alloc = 2382080, __ZTISt20bad_array_new_length = Module.__ZTISt20bad_array_new_length = 2382092, __ZTISt9exception = Module.__ZTISt9exception = 2382040, __ZTSSt9exception = Module.__ZTSSt9exception = 2204093, __ZTVSt13bad_exception = Module.__ZTVSt13bad_exception = 2382048, __ZTISt13bad_exception = Module.__ZTISt13bad_exception = 2382068, __ZTSSt13bad_exception = Module.__ZTSSt13bad_exception = 2204106, __ZTSSt9bad_alloc = Module.__ZTSSt9bad_alloc = 2204124, __ZTSSt20bad_array_new_length = Module.__ZTSSt20bad_array_new_length = 2204137, __ZTVSt11logic_error = Module.__ZTVSt11logic_error = 2382104, __ZTVSt13runtime_error = Module.__ZTVSt13runtime_error = 2382124, __ZTISt11logic_error = Module.__ZTISt11logic_error = 2382176, __ZTISt13runtime_error = Module.__ZTISt13runtime_error = 2382316, __ZTVSt12domain_error = Module.__ZTVSt12domain_error = 2382144, __ZTISt12domain_error = Module.__ZTISt12domain_error = 2382164, __ZTSSt12domain_error = Module.__ZTSSt12domain_error = 2204162, __ZTSSt11logic_error = Module.__ZTSSt11logic_error = 2204179, __ZTVSt16invalid_argument = Module.__ZTVSt16invalid_argument = 2382188, __ZTISt16invalid_argument = Module.__ZTISt16invalid_argument = 2382208, __ZTSSt16invalid_argument = Module.__ZTSSt16invalid_argument = 2204195, __ZTVSt12length_error = Module.__ZTVSt12length_error = 2382220, __ZTISt12length_error = Module.__ZTISt12length_error = 2382240, __ZTSSt12length_error = Module.__ZTSSt12length_error = 2204216, __ZTVSt12out_of_range = Module.__ZTVSt12out_of_range = 2382252, __ZTISt12out_of_range = Module.__ZTISt12out_of_range = 2382272, __ZTSSt12out_of_range = Module.__ZTSSt12out_of_range = 2204233, __ZTVSt11range_error = Module.__ZTVSt11range_error = 2382284, __ZTISt11range_error = Module.__ZTISt11range_error = 2382304, __ZTSSt11range_error = Module.__ZTSSt11range_error = 2204250, __ZTSSt13runtime_error = Module.__ZTSSt13runtime_error = 2204266, __ZTVSt14overflow_error = Module.__ZTVSt14overflow_error = 2382328, __ZTISt14overflow_error = Module.__ZTISt14overflow_error = 2382348, __ZTSSt14overflow_error = Module.__ZTSSt14overflow_error = 2204284, __ZTVSt15underflow_error = Module.__ZTVSt15underflow_error = 2382360, __ZTISt15underflow_error = Module.__ZTISt15underflow_error = 2382380, __ZTSSt15underflow_error = Module.__ZTSSt15underflow_error = 2204303, __ZTVSt8bad_cast = Module.__ZTVSt8bad_cast = 2381376, __ZTVSt10bad_typeid = Module.__ZTVSt10bad_typeid = 2381396, __ZTISt8bad_cast = Module.__ZTISt8bad_cast = 2381440, __ZTISt10bad_typeid = Module.__ZTISt10bad_typeid = 2381452, __ZTVSt9type_info = Module.__ZTVSt9type_info = 2381416, __ZTISt9type_info = Module.__ZTISt9type_info = 2381432, __ZTSSt9type_info = Module.__ZTSSt9type_info = 2203628, __ZTSSt8bad_cast = Module.__ZTSSt8bad_cast = 2203641, __ZTSSt10bad_typeid = Module.__ZTSSt10bad_typeid = 2203653;
    function invoke_ii(e, t2) {
      var r2 = stackSave();
      try {
        return getWasmTableEntry(e)(t2);
      } catch (a2) {
        if (stackRestore(r2), a2 !== a2 + 0) throw a2;
        _setThrew(1, 0);
      }
    }
    function invoke_vii(e, t2, r2) {
      var a2 = stackSave();
      try {
        getWasmTableEntry(e)(t2, r2);
      } catch (o5) {
        if (stackRestore(a2), o5 !== o5 + 0) throw o5;
        _setThrew(1, 0);
      }
    }
    function invoke_viiiii(e, t2, r2, a2, o5, _5) {
      var s5 = stackSave();
      try {
        getWasmTableEntry(e)(t2, r2, a2, o5, _5);
      } catch (n3) {
        if (stackRestore(s5), n3 !== n3 + 0) throw n3;
        _setThrew(1, 0);
      }
    }
    function invoke_vi(e, t2) {
      var r2 = stackSave();
      try {
        getWasmTableEntry(e)(t2);
      } catch (a2) {
        if (stackRestore(r2), a2 !== a2 + 0) throw a2;
        _setThrew(1, 0);
      }
    }
    function invoke_v(e) {
      var t2 = stackSave();
      try {
        getWasmTableEntry(e)();
      } catch (r2) {
        if (stackRestore(t2), r2 !== r2 + 0) throw r2;
        _setThrew(1, 0);
      }
    }
    function invoke_iii(e, t2, r2) {
      var a2 = stackSave();
      try {
        return getWasmTableEntry(e)(t2, r2);
      } catch (o5) {
        if (stackRestore(a2), o5 !== o5 + 0) throw o5;
        _setThrew(1, 0);
      }
    }
    function invoke_viii(e, t2, r2, a2) {
      var o5 = stackSave();
      try {
        getWasmTableEntry(e)(t2, r2, a2);
      } catch (_5) {
        if (stackRestore(o5), _5 !== _5 + 0) throw _5;
        _setThrew(1, 0);
      }
    }
    function invoke_jii(e, t2, r2) {
      var a2 = stackSave();
      try {
        return getWasmTableEntry(e)(t2, r2);
      } catch (o5) {
        if (stackRestore(a2), o5 !== o5 + 0) throw o5;
        return _setThrew(1, 0), 0n;
      }
    }
    function invoke_iiiii(e, t2, r2, a2, o5) {
      var _5 = stackSave();
      try {
        return getWasmTableEntry(e)(t2, r2, a2, o5);
      } catch (s5) {
        if (stackRestore(_5), s5 !== s5 + 0) throw s5;
        _setThrew(1, 0);
      }
    }
    function invoke_i(e) {
      var t2 = stackSave();
      try {
        return getWasmTableEntry(e)();
      } catch (r2) {
        if (stackRestore(t2), r2 !== r2 + 0) throw r2;
        _setThrew(1, 0);
      }
    }
    function invoke_iiii(e, t2, r2, a2) {
      var o5 = stackSave();
      try {
        return getWasmTableEntry(e)(t2, r2, a2);
      } catch (_5) {
        if (stackRestore(o5), _5 !== _5 + 0) throw _5;
        _setThrew(1, 0);
      }
    }
    function invoke_ji(e, t2) {
      var r2 = stackSave();
      try {
        return getWasmTableEntry(e)(t2);
      } catch (a2) {
        if (stackRestore(r2), a2 !== a2 + 0) throw a2;
        return _setThrew(1, 0), 0n;
      }
    }
    function invoke_jiiiiiiiii(e, t2, r2, a2, o5, _5, s5, n3, l2, d3) {
      var u3 = stackSave();
      try {
        return getWasmTableEntry(e)(t2, r2, a2, o5, _5, s5, n3, l2, d3);
      } catch (g5) {
        if (stackRestore(u3), g5 !== g5 + 0) throw g5;
        return _setThrew(1, 0), 0n;
      }
    }
    function invoke_jiiiiii(e, t2, r2, a2, o5, _5, s5) {
      var n3 = stackSave();
      try {
        return getWasmTableEntry(e)(t2, r2, a2, o5, _5, s5);
      } catch (l2) {
        if (stackRestore(n3), l2 !== l2 + 0) throw l2;
        return _setThrew(1, 0), 0n;
      }
    }
    function invoke_viiii(e, t2, r2, a2, o5) {
      var _5 = stackSave();
      try {
        getWasmTableEntry(e)(t2, r2, a2, o5);
      } catch (s5) {
        if (stackRestore(_5), s5 !== s5 + 0) throw s5;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiiiiiiiiiiii(e, t2, r2, a2, o5, _5, s5, n3, l2, d3, u3, g5, p5, m5) {
      var f5 = stackSave();
      try {
        return getWasmTableEntry(e)(t2, r2, a2, o5, _5, s5, n3, l2, d3, u3, g5, p5, m5);
      } catch (c4) {
        if (stackRestore(f5), c4 !== c4 + 0) throw c4;
        _setThrew(1, 0);
      }
    }
    function invoke_vji(e, t2, r2) {
      var a2 = stackSave();
      try {
        getWasmTableEntry(e)(t2, r2);
      } catch (o5) {
        if (stackRestore(a2), o5 !== o5 + 0) throw o5;
        _setThrew(1, 0);
      }
    }
    function invoke_viiji(e, t2, r2, a2, o5) {
      var _5 = stackSave();
      try {
        getWasmTableEntry(e)(t2, r2, a2, o5);
      } catch (s5) {
        if (stackRestore(_5), s5 !== s5 + 0) throw s5;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiij(e, t2, r2, a2, o5) {
      var _5 = stackSave();
      try {
        return getWasmTableEntry(e)(t2, r2, a2, o5);
      } catch (s5) {
        if (stackRestore(_5), s5 !== s5 + 0) throw s5;
        _setThrew(1, 0);
      }
    }
    function invoke_vijiji(e, t2, r2, a2, o5, _5) {
      var s5 = stackSave();
      try {
        getWasmTableEntry(e)(t2, r2, a2, o5, _5);
      } catch (n3) {
        if (stackRestore(s5), n3 !== n3 + 0) throw n3;
        _setThrew(1, 0);
      }
    }
    function invoke_viji(e, t2, r2, a2) {
      var o5 = stackSave();
      try {
        getWasmTableEntry(e)(t2, r2, a2);
      } catch (_5) {
        if (stackRestore(o5), _5 !== _5 + 0) throw _5;
        _setThrew(1, 0);
      }
    }
    function invoke_iiji(e, t2, r2, a2) {
      var o5 = stackSave();
      try {
        return getWasmTableEntry(e)(t2, r2, a2);
      } catch (_5) {
        if (stackRestore(o5), _5 !== _5 + 0) throw _5;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiiii(e, t2, r2, a2, o5, _5) {
      var s5 = stackSave();
      try {
        return getWasmTableEntry(e)(t2, r2, a2, o5, _5);
      } catch (n3) {
        if (stackRestore(s5), n3 !== n3 + 0) throw n3;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiiiiiii(e, t2, r2, a2, o5, _5, s5, n3, l2) {
      var d3 = stackSave();
      try {
        return getWasmTableEntry(e)(t2, r2, a2, o5, _5, s5, n3, l2);
      } catch (u3) {
        if (stackRestore(d3), u3 !== u3 + 0) throw u3;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiiiiiiiiiiiiiiii(e, t2, r2, a2, o5, _5, s5, n3, l2, d3, u3, g5, p5, m5, f5, c4, w4, x5) {
      var y5 = stackSave();
      try {
        return getWasmTableEntry(e)(t2, r2, a2, o5, _5, s5, n3, l2, d3, u3, g5, p5, m5, f5, c4, w4, x5);
      } catch (h2) {
        if (stackRestore(y5), h2 !== h2 + 0) throw h2;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiiiii(e, t2, r2, a2, o5, _5, s5) {
      var n3 = stackSave();
      try {
        return getWasmTableEntry(e)(t2, r2, a2, o5, _5, s5);
      } catch (l2) {
        if (stackRestore(n3), l2 !== l2 + 0) throw l2;
        _setThrew(1, 0);
      }
    }
    function invoke_vj(e, t2) {
      var r2 = stackSave();
      try {
        getWasmTableEntry(e)(t2);
      } catch (a2) {
        if (stackRestore(r2), a2 !== a2 + 0) throw a2;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiiiiiiii(e, t2, r2, a2, o5, _5, s5, n3, l2, d3) {
      var u3 = stackSave();
      try {
        return getWasmTableEntry(e)(t2, r2, a2, o5, _5, s5, n3, l2, d3);
      } catch (g5) {
        if (stackRestore(u3), g5 !== g5 + 0) throw g5;
        _setThrew(1, 0);
      }
    }
    function invoke_viiiiiiii(e, t2, r2, a2, o5, _5, s5, n3, l2) {
      var d3 = stackSave();
      try {
        getWasmTableEntry(e)(t2, r2, a2, o5, _5, s5, n3, l2);
      } catch (u3) {
        if (stackRestore(d3), u3 !== u3 + 0) throw u3;
        _setThrew(1, 0);
      }
    }
    function invoke_viiiiiiiii(e, t2, r2, a2, o5, _5, s5, n3, l2, d3) {
      var u3 = stackSave();
      try {
        getWasmTableEntry(e)(t2, r2, a2, o5, _5, s5, n3, l2, d3);
      } catch (g5) {
        if (stackRestore(u3), g5 !== g5 + 0) throw g5;
        _setThrew(1, 0);
      }
    }
    function invoke_vij(e, t2, r2) {
      var a2 = stackSave();
      try {
        getWasmTableEntry(e)(t2, r2);
      } catch (o5) {
        if (stackRestore(a2), o5 !== o5 + 0) throw o5;
        _setThrew(1, 0);
      }
    }
    function invoke_viiiiii(e, t2, r2, a2, o5, _5, s5) {
      var n3 = stackSave();
      try {
        getWasmTableEntry(e)(t2, r2, a2, o5, _5, s5);
      } catch (l2) {
        if (stackRestore(n3), l2 !== l2 + 0) throw l2;
        _setThrew(1, 0);
      }
    }
    function invoke_ij(e, t2) {
      var r2 = stackSave();
      try {
        return getWasmTableEntry(e)(t2);
      } catch (a2) {
        if (stackRestore(r2), a2 !== a2 + 0) throw a2;
        _setThrew(1, 0);
      }
    }
    function invoke_viiiiiii(e, t2, r2, a2, o5, _5, s5, n3) {
      var l2 = stackSave();
      try {
        getWasmTableEntry(e)(t2, r2, a2, o5, _5, s5, n3);
      } catch (d3) {
        if (stackRestore(l2), d3 !== d3 + 0) throw d3;
        _setThrew(1, 0);
      }
    }
    function invoke_viiiji(e, t2, r2, a2, o5, _5) {
      var s5 = stackSave();
      try {
        getWasmTableEntry(e)(t2, r2, a2, o5, _5);
      } catch (n3) {
        if (stackRestore(s5), n3 !== n3 + 0) throw n3;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiiiiii(e, t2, r2, a2, o5, _5, s5, n3) {
      var l2 = stackSave();
      try {
        return getWasmTableEntry(e)(t2, r2, a2, o5, _5, s5, n3);
      } catch (d3) {
        if (stackRestore(l2), d3 !== d3 + 0) throw d3;
        _setThrew(1, 0);
      }
    }
    function invoke_iiij(e, t2, r2, a2) {
      var o5 = stackSave();
      try {
        return getWasmTableEntry(e)(t2, r2, a2);
      } catch (_5) {
        if (stackRestore(o5), _5 !== _5 + 0) throw _5;
        _setThrew(1, 0);
      }
    }
    function invoke_vid(e, t2, r2) {
      var a2 = stackSave();
      try {
        getWasmTableEntry(e)(t2, r2);
      } catch (o5) {
        if (stackRestore(a2), o5 !== o5 + 0) throw o5;
        _setThrew(1, 0);
      }
    }
    function invoke_j(e) {
      var t2 = stackSave();
      try {
        return getWasmTableEntry(e)();
      } catch (r2) {
        if (stackRestore(t2), r2 !== r2 + 0) throw r2;
        return _setThrew(1, 0), 0n;
      }
    }
    function invoke_ijji(e, t2, r2, a2) {
      var o5 = stackSave();
      try {
        return getWasmTableEntry(e)(t2, r2, a2);
      } catch (_5) {
        if (stackRestore(o5), _5 !== _5 + 0) throw _5;
        _setThrew(1, 0);
      }
    }
    function invoke_iijj(e, t2, r2, a2) {
      var o5 = stackSave();
      try {
        return getWasmTableEntry(e)(t2, r2, a2);
      } catch (_5) {
        if (stackRestore(o5), _5 !== _5 + 0) throw _5;
        _setThrew(1, 0);
      }
    }
    function invoke_jiii(e, t2, r2, a2) {
      var o5 = stackSave();
      try {
        return getWasmTableEntry(e)(t2, r2, a2);
      } catch (_5) {
        if (stackRestore(o5), _5 !== _5 + 0) throw _5;
        return _setThrew(1, 0), 0n;
      }
    }
    function invoke_jij(e, t2, r2) {
      var a2 = stackSave();
      try {
        return getWasmTableEntry(e)(t2, r2);
      } catch (o5) {
        if (stackRestore(a2), o5 !== o5 + 0) throw o5;
        return _setThrew(1, 0), 0n;
      }
    }
    function invoke_ijiiiiii(e, t2, r2, a2, o5, _5, s5, n3) {
      var l2 = stackSave();
      try {
        return getWasmTableEntry(e)(t2, r2, a2, o5, _5, s5, n3);
      } catch (d3) {
        if (stackRestore(l2), d3 !== d3 + 0) throw d3;
        _setThrew(1, 0);
      }
    }
    function invoke_viijii(e, t2, r2, a2, o5, _5) {
      var s5 = stackSave();
      try {
        getWasmTableEntry(e)(t2, r2, a2, o5, _5);
      } catch (n3) {
        if (stackRestore(s5), n3 !== n3 + 0) throw n3;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiiiji(e, t2, r2, a2, o5, _5, s5) {
      var n3 = stackSave();
      try {
        return getWasmTableEntry(e)(t2, r2, a2, o5, _5, s5);
      } catch (l2) {
        if (stackRestore(n3), l2 !== l2 + 0) throw l2;
        _setThrew(1, 0);
      }
    }
    function invoke_viijiiii(e, t2, r2, a2, o5, _5, s5, n3) {
      var l2 = stackSave();
      try {
        getWasmTableEntry(e)(t2, r2, a2, o5, _5, s5, n3);
      } catch (d3) {
        if (stackRestore(l2), d3 !== d3 + 0) throw d3;
        _setThrew(1, 0);
      }
    }
    function invoke_viij(e, t2, r2, a2) {
      var o5 = stackSave();
      try {
        getWasmTableEntry(e)(t2, r2, a2);
      } catch (_5) {
        if (stackRestore(o5), _5 !== _5 + 0) throw _5;
        _setThrew(1, 0);
      }
    }
    function invoke_viiij(e, t2, r2, a2, o5) {
      var _5 = stackSave();
      try {
        getWasmTableEntry(e)(t2, r2, a2, o5);
      } catch (s5) {
        if (stackRestore(_5), s5 !== s5 + 0) throw s5;
        _setThrew(1, 0);
      }
    }
    function invoke_vijjii(e, t2, r2, a2, o5, _5) {
      var s5 = stackSave();
      try {
        getWasmTableEntry(e)(t2, r2, a2, o5, _5);
      } catch (n3) {
        if (stackRestore(s5), n3 !== n3 + 0) throw n3;
        _setThrew(1, 0);
      }
    }
    function invoke_vjii(e, t2, r2, a2) {
      var o5 = stackSave();
      try {
        getWasmTableEntry(e)(t2, r2, a2);
      } catch (_5) {
        if (stackRestore(o5), _5 !== _5 + 0) throw _5;
        _setThrew(1, 0);
      }
    }
    function invoke_jiiii(e, t2, r2, a2, o5) {
      var _5 = stackSave();
      try {
        return getWasmTableEntry(e)(t2, r2, a2, o5);
      } catch (s5) {
        if (stackRestore(_5), s5 !== s5 + 0) throw s5;
        return _setThrew(1, 0), 0n;
      }
    }
    function invoke_viiiiiiiiiiii(e, t2, r2, a2, o5, _5, s5, n3, l2, d3, u3, g5, p5) {
      var m5 = stackSave();
      try {
        getWasmTableEntry(e)(t2, r2, a2, o5, _5, s5, n3, l2, d3, u3, g5, p5);
      } catch (f5) {
        if (stackRestore(m5), f5 !== f5 + 0) throw f5;
        _setThrew(1, 0);
      }
    }
    function invoke_di(e, t2) {
      var r2 = stackSave();
      try {
        return getWasmTableEntry(e)(t2);
      } catch (a2) {
        if (stackRestore(r2), a2 !== a2 + 0) throw a2;
        _setThrew(1, 0);
      }
    }
    function invoke_id(e, t2) {
      var r2 = stackSave();
      try {
        return getWasmTableEntry(e)(t2);
      } catch (a2) {
        if (stackRestore(r2), a2 !== a2 + 0) throw a2;
        _setThrew(1, 0);
      }
    }
    function invoke_ijiiiii(e, t2, r2, a2, o5, _5, s5) {
      var n3 = stackSave();
      try {
        return getWasmTableEntry(e)(t2, r2, a2, o5, _5, s5);
      } catch (l2) {
        if (stackRestore(n3), l2 !== l2 + 0) throw l2;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiiiiiiiii(e, t2, r2, a2, o5, _5, s5, n3, l2, d3, u3) {
      var g5 = stackSave();
      try {
        return getWasmTableEntry(e)(t2, r2, a2, o5, _5, s5, n3, l2, d3, u3);
      } catch (p5) {
        if (stackRestore(g5), p5 !== p5 + 0) throw p5;
        _setThrew(1, 0);
      }
    }
    Module.addRunDependency = addRunDependency, Module.removeRunDependency = removeRunDependency, Module.callMain = callMain, Module.ENV = ENV, Module.addFunction = addFunction, Module.removeFunction = removeFunction, Module.setValue = setValue, Module.getValue = getValue, Module.UTF8ToString = UTF8ToString, Module.stringToNewUTF8 = stringToNewUTF8, Module.stringToUTF8OnStack = stringToUTF8OnStack, Module.FS_createPreloadedFile = FS_createPreloadedFile, Module.FS_unlink = FS_unlink, Module.FS_createPath = FS_createPath, Module.FS_createDevice = FS_createDevice, Module.FS = FS, Module.FS_createDataFile = FS_createDataFile, Module.FS_createLazyFile = FS_createLazyFile, Module.MEMFS = MEMFS, Module.PROXYFS = PROXYFS, Module.IDBFS = IDBFS;
    var calledRun;
    dependenciesFulfilled = function e() {
      calledRun || run(), calledRun || (dependenciesFulfilled = e);
    };
    function callMain(e = []) {
      var t2 = resolveGlobalSymbol("main").sym;
      if (t2) {
        e.unshift(thisProgram);
        var r2 = e.length, a2 = stackAlloc((r2 + 1) * 4), o5 = a2;
        e.forEach((s5) => {
          HEAPU32[o5 >> 2] = stringToUTF8OnStack(s5), o5 += 4;
        }), HEAPU32[o5 >> 2] = 0;
        try {
          var _5 = t2(r2, a2);
          return exitJS(_5, true), _5;
        } catch (s5) {
          return handleException(s5);
        }
      }
    }
    function run(e = arguments_) {
      if (runDependencies > 0 || (preRun(), runDependencies > 0)) return;
      function t2() {
        calledRun || (calledRun = true, Module.calledRun = true, !ABORT && (initRuntime(), preMain(), readyPromiseResolve(Module), Module.onRuntimeInitialized?.(), shouldRunNow && callMain(e), postRun()));
      }
      Module.setStatus ? (Module.setStatus("Running..."), setTimeout(() => {
        setTimeout(() => Module.setStatus(""), 1), t2();
      }, 1)) : t2();
    }
    if (Module.preInit) for (typeof Module.preInit == "function" && (Module.preInit = [Module.preInit]); Module.preInit.length > 0; ) Module.preInit.pop()();
    var shouldRunNow = false;
    return Module.noInitialRun && (shouldRunNow = false), run(), moduleRtn = readyPromise, moduleRtn;
  };
})();
var He3 = Mt3;
var We3 = He3;
var Ve3 = "/pglite/bin/postgres";
var ht3 = "/pglite/bin/initdb";
var _e2;
var se2;
var ne;
var ue3;
var Fe2;
var Pe2;
var Te2;
var Ce3;
var pe2;
var le2;
var Ee2;
var ce3;
var ie3;
var ee2;
var R3;
var de3;
var me2;
var Z2;
var te;
var Q2;
var ge2;
var fe2;
var $3;
var j3;
var B3;
var re;
var N2;
var D5;
var xe3;
var we2;
var Se2;
var ve2;
var P5;
var Ke2;
var Ye3;
var Qe2;
var $e2;
var Je2;
var G4;
var et2;
var tt2;
var rt2;
var at2;
var ot3;
var q2 = class q3 extends z2 {
  constructor(r2 = {}, a2 = {}) {
    super();
    R(this, P5);
    this.POSTGRES_MAIN_LONGJMP = 100;
    R(this, _e2, false);
    R(this, se2, false);
    R(this, ne, false);
    R(this, ue3, false);
    R(this, Fe2, new J2());
    R(this, Pe2, new J2());
    R(this, Te2, new J2());
    R(this, Ce3, new J2());
    R(this, pe2, false);
    this.debug = 0;
    R(this, le2);
    R(this, Ee2, []);
    R(this, ce3, new pe());
    R(this, ie3);
    R(this, ee2);
    R(this, R3, /* @__PURE__ */ new Map());
    R(this, de3, /* @__PURE__ */ new Set());
    R(this, me2, -1);
    R(this, Z2, []);
    R(this, te, false);
    R(this, Q2);
    R(this, ge2);
    R(this, fe2, -1);
    R(this, $3, []);
    R(this, j3, 0);
    R(this, B3, null);
    R(this, re, true);
    R(this, N2, new Uint8Array(0));
    R(this, D5, 0);
    R(this, xe3, -1);
    R(this, we2, -1);
    R(this, Se2, -1);
    this.externalCommandStreamFd = null;
    R(this, ve2, false);
    typeof r2 == "string" ? a2 = { dataDir: r2, ...a2 } : a2 = r2, this.dataDir = a2.dataDir, a2.parsers !== void 0 && (this.parsers = { ...this.parsers, ...a2.parsers }), a2.serializers !== void 0 && (this.serializers = { ...this.serializers, ...a2.serializers }), a2?.debug !== void 0 && (this.debug = a2.debug), a2?.relaxedDurability !== void 0 && x(this, ue3, a2.relaxedDurability), x(this, le2, a2.extensions ?? {}), this.waitReady = T(this, P5, Qe2).call(this, a2 ?? {});
  }
  get ENV() {
    return this.mod?.ENV;
  }
  static async create(r2, a2) {
    let o5 = typeof r2 == "string" ? { dataDir: r2, ...a2 ?? {} } : r2 ?? {}, _5 = new q3(o5);
    return await _5.waitReady, _5;
  }
  handleExternalCmd(r2, a2) {
    if (r2.startsWith("locale -a") && a2 === "r") {
      let o5 = this.mod.stringToUTF8OnStack("/pglite/locale-a"), _5 = this.mod.stringToUTF8OnStack(a2);
      return this.mod._fopen(o5, _5);
    }
    throw new Error("Unhandled cmd");
  }
  get Module() {
    return this.mod;
  }
  get ready() {
    return h(this, _e2) && !h(this, se2) && !h(this, ne);
  }
  get closed() {
    return h(this, ne);
  }
  async close() {
    await this._checkReady(), x(this, se2, true);
    for (let r2 of h(this, Ee2)) await r2();
    try {
      this.mod._pgl_setPGliteActive(0), await this.execProtocol(We.end()), this.mod._pgl_run_atexit_funcs();
    } catch (r2) {
      let a2 = r2;
      a2.name === "ExitStatus" && a2.status === 0 || T(this, P5, G4).call(this, "An error occured while closing the db", r2.toString());
    } finally {
      this.mod.removeFunction(h(this, fe2)), this.mod.removeFunction(h(this, me2));
    }
    await this.fs.closeFs(), x(this, ne, true), x(this, se2, false), x(this, _e2, false), x(this, ve2, false);
    try {
      this.mod._emscripten_force_exit(0);
    } catch (r2) {
      T(this, P5, G4).call(this, r2), r2.status !== 0 && T(this, P5, G4).call(this, "Error when exiting", r2.toString());
    }
  }
  async [Symbol.asyncDispose]() {
    await this.close();
  }
  async _handleBlob(r2) {
    x(this, ie3, r2 ? await r2.arrayBuffer() : void 0);
  }
  async _cleanupBlob() {
    x(this, ie3, void 0);
  }
  async _getWrittenBlob() {
    if (!h(this, ee2)) return;
    let r2 = new Blob(h(this, ee2));
    return x(this, ee2, void 0), r2;
  }
  async _checkReady() {
    if (h(this, se2)) throw new Error("PGlite is closing");
    if (h(this, ne)) throw new Error("PGlite is closed");
    h(this, _e2) || await this.waitReady;
  }
  execProtocolRawSync(r2) {
    let a2 = this.mod;
    if (x(this, j3, 0), x(this, D5, 0), x(this, $3, r2), h(this, re) && h(this, N2).length !== q3.DEFAULT_RECV_BUF_SIZE && x(this, N2, new Uint8Array(q3.DEFAULT_RECV_BUF_SIZE)), r2[0] === 88) return new Uint8Array(0);
    if (r2[0] === 0) return T(this, P5, ot3).call(this, r2);
    try {
      for (; h(this, j3) < r2.length || a2._pq_buffer_remaining_data() > 0; ) try {
        a2._PostgresMainLoopOnce();
      } catch (o5) {
        o5.status === this.POSTGRES_MAIN_LONGJMP && a2._PostgresMainLongJmp();
      }
    } finally {
      a2._PostgresSendReadyForQueryIfNecessary(), a2._pgl_pq_flush();
    }
    return x(this, $3, []), h(this, re) && h(this, D5) ? new Uint8Array(h(this, N2).subarray(0, h(this, D5))) : new Uint8Array(0);
  }
  async execProtocolRaw(r2, { syncToFs: a2 = true } = {}) {
    let o5 = this.execProtocolRawSync(r2);
    return a2 && await this.syncToFs(), o5;
  }
  async execProtocolRawStream(r2, { syncToFs: a2 = true, onRawData: o5 }) {
    x(this, ge2, o5), this.execProtocolRawSync(r2), a2 && await this.syncToFs();
  }
  async execProtocol(r2, { syncToFs: a2 = true, throwOnError: o5 = true, onNotice: _5 } = {}) {
    x(this, te, o5), x(this, Q2, _5), x(this, Z2, []), x(this, B3, null);
    let s5 = await this.execProtocolRaw(r2, { syncToFs: a2 }), n3 = h(this, B3);
    x(this, te, false), x(this, Q2, void 0), x(this, B3, null);
    let l2 = { messages: h(this, Z2), data: s5 };
    if (x(this, Z2, []), o5 && n3) throw x(this, ce3, new pe()), n3;
    return l2;
  }
  async execProtocolStream(r2, { syncToFs: a2, throwOnError: o5 = true, onNotice: _5 } = {}) {
    x(this, te, o5), x(this, Q2, _5), x(this, Z2, []), x(this, B3, null), x(this, re, false), await this.execProtocolRaw(r2, { syncToFs: a2 }), x(this, re, true);
    let s5 = h(this, B3);
    x(this, te, false), x(this, Q2, void 0), x(this, B3, null);
    let n3 = h(this, Z2);
    if (x(this, Z2, []), o5 && s5) throw x(this, ce3, new pe()), s5;
    return n3;
  }
  isInTransaction() {
    return this.mod._IsTransactionBlock() !== 0;
  }
  async syncToFs() {
    if (h(this, pe2)) return;
    x(this, pe2, true);
    let r2 = async () => {
      await h(this, Ce3).runExclusive(async () => {
        x(this, pe2, false), await this.fs.syncToFs(h(this, ue3));
      });
    };
    h(this, ue3) ? r2() : await r2();
  }
  async listen(r2, a2, o5) {
    return this._runExclusiveListen(() => T(this, P5, et2).call(this, r2, a2, o5));
  }
  async unlisten(r2, a2, o5) {
    return this._runExclusiveListen(() => T(this, P5, tt2).call(this, r2, a2, o5));
  }
  onNotification(r2) {
    return h(this, de3).add(r2), () => {
      h(this, de3).delete(r2);
    };
  }
  offNotification(r2) {
    h(this, de3).delete(r2);
  }
  async dumpDataDir(r2) {
    await this._checkReady();
    let a2 = this.dataDir?.split("/").pop() ?? "pgdata";
    return this.fs.dumpTar(a2, r2);
  }
  _runExclusiveQuery(r2) {
    return h(this, Fe2).runExclusive(r2);
  }
  _runExclusiveTransaction(r2) {
    return h(this, Pe2).runExclusive(r2);
  }
  async clone() {
    let r2 = await this.dumpDataDir("none");
    return q3.create({ loadDataDir: r2, extensions: h(this, le2) });
  }
  _runExclusiveListen(r2) {
    return h(this, Te2).runExclusive(r2);
  }
  callMain(r2) {
    return this.mod.callMain(r2);
  }
};
_e2 = /* @__PURE__ */ new WeakMap(), se2 = /* @__PURE__ */ new WeakMap(), ne = /* @__PURE__ */ new WeakMap(), ue3 = /* @__PURE__ */ new WeakMap(), Fe2 = /* @__PURE__ */ new WeakMap(), Pe2 = /* @__PURE__ */ new WeakMap(), Te2 = /* @__PURE__ */ new WeakMap(), Ce3 = /* @__PURE__ */ new WeakMap(), pe2 = /* @__PURE__ */ new WeakMap(), le2 = /* @__PURE__ */ new WeakMap(), Ee2 = /* @__PURE__ */ new WeakMap(), ce3 = /* @__PURE__ */ new WeakMap(), ie3 = /* @__PURE__ */ new WeakMap(), ee2 = /* @__PURE__ */ new WeakMap(), R3 = /* @__PURE__ */ new WeakMap(), de3 = /* @__PURE__ */ new WeakMap(), me2 = /* @__PURE__ */ new WeakMap(), Z2 = /* @__PURE__ */ new WeakMap(), te = /* @__PURE__ */ new WeakMap(), Q2 = /* @__PURE__ */ new WeakMap(), ge2 = /* @__PURE__ */ new WeakMap(), fe2 = /* @__PURE__ */ new WeakMap(), $3 = /* @__PURE__ */ new WeakMap(), j3 = /* @__PURE__ */ new WeakMap(), B3 = /* @__PURE__ */ new WeakMap(), re = /* @__PURE__ */ new WeakMap(), N2 = /* @__PURE__ */ new WeakMap(), D5 = /* @__PURE__ */ new WeakMap(), xe3 = /* @__PURE__ */ new WeakMap(), we2 = /* @__PURE__ */ new WeakMap(), Se2 = /* @__PURE__ */ new WeakMap(), ve2 = /* @__PURE__ */ new WeakMap(), P5 = /* @__PURE__ */ new WeakSet(), Ke2 = function(r2) {
  this.debug && console.debug(r2);
}, Ye3 = function(r2) {
  this.debug && console.error(r2);
}, Qe2 = async function(r2) {
  if (r2.fs) this.fs = r2.fs;
  else {
    let { dataDir: p5, fsType: m5 } = Ze2(r2.dataDir);
    this.fs = await je3(p5, m5);
  }
  let a2 = {}, o5 = [], _5 = [...this.debug ? ["-d", this.debug.toString()] : []];
  r2.pgliteWasmModule || d2.startArtifactDownload(new URL("./pglite.wasm", import.meta.url)), r2.initdbWasmModule || d2.startArtifactDownload(new URL("./initdb.wasm", import.meta.url));
  let s5 = new URL("./pglite.data", import.meta.url), n3 = r2.fsBundle ? r2.fsBundle.arrayBuffer() : d2.getFsBundle(s5), l2;
  n3.then((p5) => {
    l2 = p5;
  });
  let d3 = new WebAssembly.Memory({ initial: r2.initialMemory ? r2.initialMemory / (64 * 1024) : 2048, maximum: 32768 }), u3 = { thisProgram: Ve3, WASM_PREFIX: Mt2, arguments: _5, noExitRuntime: true, wasmMemory: d3, stdin: () => null, print: (p5) => {
    T(this, P5, Ke2).call(this, p5);
  }, printErr: (p5) => {
    T(this, P5, Ye3).call(this, p5);
  }, instantiateWasm: (p5, m5) => {
    let f5 = new URL("./pglite.wasm", import.meta.url);
    return d2.instantiateWasm(p5, f5, r2.pgliteWasmModule).then(({ instance: c4, module: w4 }) => {
      m5(c4, w4);
    }), {};
  }, getPreloadedPackage: (p5, m5) => {
    if (p5 === "pglite.data") {
      if (l2.byteLength !== m5) throw new Error(`Invalid FS bundle size: ${l2.byteLength} !== ${m5}`);
      return l2;
    }
    throw new Error(`Unknown package: ${p5}`);
  }, preRun: [(p5) => {
    p5.onRuntimeInitialized = () => {
      T(this, P5, $e2).call(this, p5);
    };
  }, (p5) => {
    let m5 = p5.FS.makedev(64, 0), f5 = { open: (c4) => {
    }, close: (c4) => {
    }, read: (c4, w4, x5, y5, h2) => {
      let F4 = h(this, ie3);
      if (!F4) throw new Error("No /dev/blob File or Blob provided to read from");
      let E3 = new Uint8Array(F4);
      if (h2 >= E3.length) return 0;
      let b4 = Math.min(E3.length - h2, y5);
      for (let S4 = 0; S4 < b4; S4++) w4[x5 + S4] = E3[h2 + S4];
      return b4;
    }, write: (c4, w4, x5, y5, h2) => (h(this, ee2) ?? x(this, ee2, []), h(this, ee2).push(w4.slice(x5, x5 + y5)), y5), llseek: (c4, w4, x5) => {
      let y5 = h(this, ie3);
      if (!y5) throw new Error("No /dev/blob File or Blob provided to llseek");
      let h2 = w4;
      if (x5 === 1 ? h2 += c4.position : x5 === 2 && (h2 = new Uint8Array(y5).length), h2 < 0) throw new p5.FS.ErrnoError(28);
      return h2;
    } };
    p5.FS.registerDevice(m5, f5), p5.FS.mkdev("/dev/blob", m5);
  }, (p5) => {
    p5.ENV.HOME = "/home/postgres", p5.ENV.USER = "postgres", p5.ENV.LOGNAME = "postgres", p5.ENV.PGDATA = B2, p5.ENV.PGUSER = r2.username ?? "postgres", p5.ENV.PGDATABASE = r2.database ?? "postgres", p5.ENV.LC_CTYPE = "en_US.UTF-8", p5.ENV.TZ = "UTC", p5.ENV.PGTZ = "UTC", p5.ENV.PGCLIENTENCODING = "UTF8";
    for (let [m5] of Object.entries(h(this, le2))) m5 === "postgis" && (p5.ENV.PROJ_DATA = `${Mt2}/share/proj`);
  }, (p5) => {
    p5.FS.chmod("/home/postgres/.pgpass", 384), p5.FS.chmod(ht3, 365), p5.FS.chmod(Ve3, 365);
  }] }, { emscriptenOpts: g5 } = await this.fs.init(this, u3);
  u3 = g5;
  for (let [p5, m5] of Object.entries(h(this, le2))) if (m5 instanceof URL) a2[p5] = Re3(m5);
  else {
    let f5 = await m5.setup(this, u3);
    if (f5.emscriptenOpts && (u3 = f5.emscriptenOpts), f5.namespaceObj) {
      let c4 = this;
      c4[p5] = f5.namespaceObj;
    }
    f5.bundlePath && (a2[p5] = Re3(f5.bundlePath)), f5.init && o5.push(f5.init), f5.close && h(this, Ee2).push(f5.close);
  }
  if (u3.pg_extensions = a2, await n3, this.mod = await We3(u3), await this.fs.initialSyncFs(), !r2.noInitDb) {
    if (r2.loadDataDir) {
      if (this.mod.FS.analyzePath(B2 + "/PG_VERSION").exists) throw new Error("Database already exists, cannot load from tarball");
      T(this, P5, G4).call(this, "pglite: loading data from tarball"), await ot2(this.mod.FS, r2.loadDataDir, B2);
    } else if (this.mod.FS.analyzePath(B2 + "/PG_VERSION").exists) T(this, P5, G4).call(this, "pglite: found DB, resuming");
    else {
      T(this, P5, G4).call(this, "pglite: no db in filesystem, running initdb");
      let p5 = { ...r2 };
      p5.noInitDb = true, p5.dataDir = void 0, p5.extensions = void 0, p5.loadDataDir = void 0;
      let m5 = await q2.create(p5), f5 = await ht2({ pg: m5, debug: r2.debug, wasmModule: r2.initdbWasmModule });
      if (f5.exitCode !== 0 && !f5.stderr.includes("exists but is not empty")) throw new Error("INITDB failed to initialize: " + f5.stderr);
      let c4 = await m5.dumpDataDir("none");
      m5.close(), await ot2(this.mod.FS, c4, B2), await this.syncToFs();
    }
    await Ue3(this.mod, (...p5) => T(this, P5, G4).call(this, ...p5)), this.mod._pgl_setPGliteActive(1), T(this, P5, at2).call(this, { pgDataFolder: B2, startParams: [...r2.startParams || q2.defaultStartParams, ...this.debug ? ["-d", this.debug.toString()] : []] }), T(this, P5, rt2).call(this), x(this, _e2, true), r2.username && await this.exec(`SET ROLE ${r2.username};`), await this._initArrayTypes();
    for (let p5 of o5) await p5();
  }
}, $e2 = function(r2) {
  x(this, xe3, r2.addFunction((a2) => (T(this, P5, G4).call(this, `Postgres tried to execute ${r2.UTF8ToString(a2)}, returning 1.`), 1), "pi")), r2._pgl_set_system_fn(h(this, xe3)), x(this, we2, r2.addFunction((a2, o5) => {
    let _5 = r2.UTF8ToString(o5), s5 = r2.UTF8ToString(a2);
    return this.externalCommandStreamFd = this.handleExternalCmd(s5, _5), this.externalCommandStreamFd;
  }, "ppp")), r2._pgl_set_popen_fn(h(this, we2)), x(this, Se2, r2.addFunction((a2) => {
    if (a2 === this.externalCommandStreamFd) this.mod._fclose(this.externalCommandStreamFd), this.externalCommandStreamFd = null;
    else throw `Unhandled pclose ${a2}`;
    T(this, P5, G4).call(this, "pclose_fn", a2);
  }, "pi")), r2._pgl_set_pclose_fn(h(this, Se2)), x(this, me2, r2.addFunction((a2, o5) => {
    let _5;
    try {
      _5 = this.mod.HEAPU8.subarray(a2, a2 + o5);
    } catch (s5) {
      throw console.error("error", s5), s5;
    }
    if (h(this, ce3).parse(_5, (s5) => {
      let n3 = T(this, P5, Je2).call(this, s5);
      n3 && h(this, Z2).push(n3);
    }), h(this, re)) {
      let s5 = _5.slice();
      if (h(this, ge2)) try {
        h(this, ge2).call(this, s5);
      } catch (n3) {
        T(this, P5, G4).call(this, "Error in onRawData() callback", n3);
      }
      else {
        let n3 = h(this, D5) + s5.length;
        if (n3 > h(this, N2).length) {
          let l2 = h(this, N2).length + (h(this, N2).length >> 1) + n3;
          n3 > q2.MAX_BUFFER_SIZE && (n3 = q2.MAX_BUFFER_SIZE);
          let d3 = new Uint8Array(l2);
          d3.set(h(this, N2).subarray(0, h(this, D5))), x(this, N2, d3);
        }
        h(this, N2).set(s5, h(this, D5)), x(this, D5, h(this, D5) + s5.length);
      }
    }
    return o5;
  }, "iii")), x(this, fe2, r2.addFunction((a2, o5) => {
    let _5 = h(this, $3).length - h(this, j3);
    return _5 > o5 && (_5 = o5), this.mod.HEAP8.set(h(this, $3).subarray(h(this, j3), h(this, j3) + _5), a2), x(this, j3, h(this, j3) + _5), _5;
  }, "iii")), r2._pgl_set_rw_cbs(h(this, fe2), h(this, me2));
}, Je2 = function(r2) {
  if (!h(this, B3)) {
    if (r2 instanceof C) h(this, te) && x(this, B3, r2);
    else if (r2 instanceof Z) this.debug > 0 && console.warn(r2), h(this, Q2) && h(this, Q2).call(this, r2);
    else if (r2 instanceof K) {
      let a2 = h(this, R3).get(r2.channel);
      a2 && a2.forEach((o5) => {
        queueMicrotask(() => o5(r2.payload));
      }), h(this, de3).forEach((o5) => {
        queueMicrotask(() => o5(r2.channel, r2.payload));
      });
    }
    return r2;
  }
  return null;
}, G4 = function(...r2) {
  this.debug > 0 && console.log(...r2);
}, et2 = async function(r2, a2, o5) {
  let _5 = d2.toPostgresName(r2), s5 = o5 ?? this;
  h(this, R3).has(_5) || h(this, R3).set(_5, /* @__PURE__ */ new Set()), h(this, R3).get(_5).add(a2);
  try {
    await s5.exec(`LISTEN ${r2}`);
  } catch (n3) {
    throw h(this, R3).get(_5).delete(a2), h(this, R3).get(_5)?.size === 0 && h(this, R3).delete(_5), n3;
  }
  return async (n3) => {
    await this.unlisten(_5, a2, n3);
  };
}, tt2 = async function(r2, a2, o5) {
  let _5 = d2.toPostgresName(r2), s5 = o5 ?? this, n3 = async () => {
    await s5.exec(`UNLISTEN ${r2}`), h(this, R3).get(_5)?.size === 0 && h(this, R3).delete(_5);
  };
  a2 ? (h(this, R3).get(_5)?.delete(a2), h(this, R3).get(_5)?.size === 0 && await n3()) : await n3();
}, rt2 = function() {
  if (h(this, ve2)) throw new Error("PGlite single mode already running");
  this.mod._pgl_startPGlite(), x(this, ve2, true);
}, at2 = function(r2) {
  let a2 = [...r2.startParams, "-D", r2.pgDataFolder, this.mod.ENV.PGDATABASE];
  if (this.mod.callMain(a2) !== 99) throw new Error("PGlite failed to initialize properly");
}, ot3 = function(r2) {
  x(this, j3, 0), x(this, D5, 0), x(this, $3, r2);
  let a2 = this.mod._pgl_getMyProcPort();
  if (this.mod._ProcessStartupPacket(a2, true, true) !== 0) throw new Error(`Cannot process startup packet + ${r2.toString()}`);
  return this.mod._pgl_sendConnData(), this.mod._pgl_pq_flush(), x(this, $3, []), h(this, D5) ? h(this, N2).subarray(0, h(this, D5)) : new Uint8Array(0);
}, q2.DEFAULT_RECV_BUF_SIZE = 1 * 1024 * 1024, q2.MAX_BUFFER_SIZE = Math.pow(2, 30), q2.defaultStartParams = ["--single", "-F", "-O", "-j", "-c", "search_path=public", "-c", "exit_on_error=false", "-c", "log_checkpoints=false", "-c", "max_worker_processes=0", "-c", "max_parallel_workers=0", "-c", "max_parallel_workers_per_gather=0"];
var Xe2 = q2;
u();

// node_modules/@electric-sql/pglite/dist/worker/index.js
init_chunk_XP4OYHYJ();
init_chunk_QY3QWFKW();
u();
var W4;
var T4;
var C4;
var M3;
var B4;
var w3;
var x4;
var L5;
var P6;
var A2;
var _4;
var O3;
var R4;
var v4;
var G5;
var k3;
var E2;
var D6;
var S3;
var i3;
var H3;
var U2;
var g4;
var K2;
W4 = /* @__PURE__ */ new WeakMap(), T4 = /* @__PURE__ */ new WeakMap(), C4 = /* @__PURE__ */ new WeakMap(), M3 = /* @__PURE__ */ new WeakMap(), B4 = /* @__PURE__ */ new WeakMap(), w3 = /* @__PURE__ */ new WeakMap(), x4 = /* @__PURE__ */ new WeakMap(), L5 = /* @__PURE__ */ new WeakMap(), P6 = /* @__PURE__ */ new WeakMap(), A2 = /* @__PURE__ */ new WeakMap(), _4 = /* @__PURE__ */ new WeakMap(), O3 = /* @__PURE__ */ new WeakMap(), R4 = /* @__PURE__ */ new WeakMap(), v4 = /* @__PURE__ */ new WeakMap(), G5 = /* @__PURE__ */ new WeakMap(), k3 = /* @__PURE__ */ new WeakMap(), E2 = /* @__PURE__ */ new WeakMap(), D6 = /* @__PURE__ */ new WeakMap(), S3 = /* @__PURE__ */ new WeakMap(), i3 = /* @__PURE__ */ new WeakSet(), H3 = async function(e = {}) {
  for (let [c4, y5] of Object.entries(h(this, D6))) {
    if (y5 instanceof URL) throw new Error("URL extensions are not supported on the client side of a worker");
    {
      let d3 = await y5.setup(this, {}, true);
      if (d3.emscriptenOpts && console.warn(`PGlite extension ${c4} returned emscriptenOpts, these are not supported on the client side of a worker`), d3.namespaceObj) {
        let b4 = this;
        b4[c4] = d3.namespaceObj;
      }
      d3.bundlePath && console.warn(`PGlite extension ${c4} returned bundlePath, this is not supported on the client side of a worker`), d3.init && await d3.init(), d3.close && h(this, S3).push(d3.close);
    }
  }
  await h(this, _4);
  let { extensions: r2, ...o5 } = e;
  h(this, P6).postMessage({ type: "init", options: o5 }), await h(this, O3);
  let s5 = `pglite-tab-close:${h(this, x4)}`;
  x(this, G5, await N3(s5));
  let a2 = `pglite-broadcast:${h(this, A2)}`;
  x(this, R4, new BroadcastChannel(a2));
  let l2 = `pglite-tab:${h(this, x4)}`;
  x(this, v4, new BroadcastChannel(l2)), h(this, R4).addEventListener("message", async (c4) => {
    c4.data.type === "leader-here" ? (x(this, L5, false), h(this, w3).dispatchEvent(new Event("leader-change")), T(this, i3, U2).call(this)) : c4.data.type === "notify" && T(this, i3, K2).call(this, c4.data.channel, c4.data.payload);
  }), h(this, v4).addEventListener("message", async (c4) => {
    c4.data.type === "connected" && (x(this, L5, true), h(this, w3).dispatchEvent(new Event("connected")), x(this, T4, await T(this, i3, g4).call(this, "getDebugLevel")), x(this, C4, true));
  }), h(this, P6).addEventListener("message", async (c4) => {
    c4.data.type === "leader-now" && (x(this, B4, true), h(this, w3).dispatchEvent(new Event("leader-change")));
  }), T(this, i3, U2).call(this), this._initArrayTypes();
}, U2 = async function() {
  h(this, L5) || (h(this, R4).postMessage({ type: "tab-here", id: h(this, x4) }), setTimeout(() => T(this, i3, U2).call(this), 16));
}, g4 = async function(e, ...r2) {
  let o5 = d2.uuid(), s5 = { type: "rpc-call", callId: o5, method: e, args: r2 };
  return h(this, v4).postMessage(s5), await new Promise((a2, l2) => {
    let c4 = (b4) => {
      if (b4.data.callId !== o5) return;
      d3();
      let f5 = b4.data;
      if (f5.type === "rpc-return") a2(f5.result);
      else if (f5.type === "rpc-error") {
        let F4 = new Error(f5.error.message);
        Object.assign(F4, f5.error), l2(F4);
      } else l2(new Error("Invalid message"));
    }, y5 = () => {
      d3(), l2(new $4());
    }, d3 = () => {
      h(this, v4).removeEventListener("message", c4), h(this, w3).removeEventListener("leader-change", y5);
    };
    h(this, w3).addEventListener("leader-change", y5), h(this, v4).addEventListener("message", c4);
  });
}, K2 = function(e, r2) {
  let o5 = h(this, k3).get(e);
  if (o5) for (let s5 of o5) queueMicrotask(() => s5(r2));
  for (let s5 of h(this, E2)) queueMicrotask(() => s5(e, r2));
};
async function te2({ init: m5 }) {
  postMessage({ type: "here" });
  let n3 = await new Promise((y5) => {
    addEventListener("message", (d3) => {
      d3.data.type === "init" && y5(d3.data.options);
    }, { once: true });
  }), e = n3.id ?? `${import.meta.url}:${n3.dataDir ?? ""}`;
  postMessage({ type: "ready", id: e });
  let r2 = `pglite-election-lock:${e}`, o5 = `pglite-broadcast:${e}`, s5 = new BroadcastChannel(o5), a2 = /* @__PURE__ */ new Set();
  await N3(r2);
  let l2 = m5(n3);
  s5.onmessage = async (y5) => {
    let d3 = y5.data;
    switch (d3.type) {
      case "tab-here":
        J3(d3.id, await l2, a2);
        break;
    }
  }, s5.postMessage({ type: "leader-here", id: e }), postMessage({ type: "leader-now" }), (await l2).onNotification((y5, d3) => {
    s5.postMessage({ type: "notify", channel: y5, payload: d3 });
  });
}
function J3(m5, n3, e) {
  if (e.has(m5)) return;
  e.add(m5);
  let r2 = `pglite-tab:${m5}`, o5 = `pglite-tab-close:${m5}`, s5 = new BroadcastChannel(r2);
  navigator.locks.request(o5, () => new Promise((l2) => {
    s5.close(), e.delete(m5), l2();
  }));
  let a2 = V2(m5, n3);
  s5.addEventListener("message", async (l2) => {
    let c4 = l2.data;
    switch (c4.type) {
      case "rpc-call": {
        await n3.waitReady;
        let { callId: y5, method: d3, args: b4 } = c4;
        try {
          let f5 = await a2[d3](...b4);
          s5.postMessage({ type: "rpc-return", callId: y5, result: f5 });
        } catch (f5) {
          console.error(f5), s5.postMessage({ type: "rpc-error", callId: y5, error: { message: f5.message } });
        }
        break;
      }
    }
  }), s5.postMessage({ type: "connected" });
}
function V2(m5, n3) {
  let e = null, r2 = null, o5 = `pglite-tab-close:${m5}`;
  return N3(o5).then(() => {
    r2 && n3.exec("ROLLBACK"), e?.(), r2?.();
  }), { async getDebugLevel() {
    return n3.debug;
  }, async close() {
    await n3.close();
  }, async execProtocol(s5) {
    let { messages: a2, data: l2 } = await n3.execProtocol(s5);
    if (l2.byteLength !== l2.buffer.byteLength) {
      let c4 = new ArrayBuffer(l2.byteLength), y5 = new Uint8Array(c4);
      return y5.set(l2), { messages: a2, data: y5 };
    } else return { messages: a2, data: l2 };
  }, async execProtocolStream(s5) {
    return await n3.execProtocolStream(s5);
  }, async execProtocolRawStream(s5, a2) {
    return await n3.execProtocolRawStream(s5, a2);
  }, async execProtocolRaw(s5) {
    let a2 = await n3.execProtocolRaw(s5);
    if (a2.byteLength !== a2.buffer.byteLength) {
      let l2 = new ArrayBuffer(a2.byteLength), c4 = new Uint8Array(l2);
      return c4.set(a2), c4;
    } else return a2;
  }, async dumpDataDir(s5) {
    return await n3.dumpDataDir(s5);
  }, async syncToFs() {
    return await n3.syncToFs();
  }, async _handleBlob(s5) {
    return await n3._handleBlob(s5);
  }, async _getWrittenBlob() {
    return await n3._getWrittenBlob();
  }, async _cleanupBlob() {
    return await n3._cleanupBlob();
  }, async _checkReady() {
    return await n3._checkReady();
  }, async _acquireQueryLock() {
    return new Promise((s5) => {
      n3._runExclusiveQuery(() => new Promise((a2) => {
        e = a2, s5();
      }));
    });
  }, async _releaseQueryLock() {
    e?.(), e = null;
  }, async _acquireTransactionLock() {
    return new Promise((s5) => {
      n3._runExclusiveTransaction(() => new Promise((a2) => {
        r2 = a2, s5();
      }));
    });
  }, async _releaseTransactionLock() {
    r2?.(), r2 = null;
  } };
}
var $4 = class extends Error {
  constructor() {
    super("Leader changed, pending operation in indeterminate state");
  }
};
async function N3(m5) {
  let n3;
  return await new Promise((e) => {
    navigator.locks.request(m5, () => new Promise((r2) => {
      n3 = r2, e();
    }));
  }), n3;
}

// src/worker.js
te2({
  async init(options) {
    return new Xe2(options);
  }
});
