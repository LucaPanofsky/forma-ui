var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
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

// (disabled):fs/promises
var require_promises = __commonJS({
  "(disabled):fs/promises"() {
  }
});

// node_modules/@electric-sql/pglite/dist/chunk-QY3QWFKW.js
var i = Object.defineProperty;
var a = (t2) => {
  throw TypeError(t2);
};
var d = (t2, e) => () => (t2 && (e = t2(t2 = 0)), e);
var F = (t2, e) => {
  for (var o4 in e) i(t2, o4, { get: e[o4], enumerable: true });
};
var n = (t2, e, o4) => e.has(t2) || a("Cannot " + o4);
var h = (t2, e, o4) => (n(t2, e, "read from private field"), o4 ? o4.call(t2) : e.get(t2));
var R = (t2, e, o4) => e.has(t2) ? a("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t2) : e.set(t2, o4);
var x = (t2, e, o4, m3) => (n(t2, e, "write to private field"), m3 ? m3.call(t2, o4) : e.set(t2, o4), o4);
var T = (t2, e, o4) => (n(t2, e, "access private method"), o4);
var U = (t2, e, o4, m3) => ({ set _(r2) {
  x(t2, e, r2, o4);
}, get _() {
  return h(t2, e, m3);
} });
var u = d(() => {
  "use strict";
});

// node_modules/@electric-sql/pglite/dist/chunk-ACJ7KGEC.js
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
  return Uint8Array.from({ length: e.length / 2 }, (n2, s3) => parseInt(e.substring(s3 * 2, (s3 + 1) * 2), 16));
} } };
var we = on(ze);
var sn = we.parsers;
var an = we.serializers;
function se(t2, e, n2) {
  if (t2 === null) return null;
  let s3 = n2?.[e] ?? we.parsers[e];
  return s3 ? s3(t2, e) : t2;
}
function on(t2) {
  return Object.keys(t2).reduce(({ parsers: e, serializers: n2 }, s3) => {
    let { to: i3, from: a2, serialize: u3, parse: m3 } = t2[s3];
    return n2[i3] = u3, n2[s3] = u3, e[s3] = m3, Array.isArray(a2) ? a2.forEach((l) => {
      e[l] = m3, n2[l] = u3;
    }) : (e[a2] = m3, n2[a2] = u3), { parsers: e, serializers: n2 };
  }, { parsers: {}, serializers: {} });
}
var un = /\\/g;
var cn = /"/g;
function ln(t2) {
  return t2.replace(un, "\\\\").replace(cn, '\\"');
}
function Ye(t2, e, n2) {
  if (Array.isArray(t2) === false) return t2;
  if (!t2.length) return "{}";
  let s3 = t2[0], i3 = n2 === 1020 ? ";" : ",";
  return Array.isArray(s3) ? `{${t2.map((a2) => Ye(a2, e, n2)).join(i3)}}` : `{${t2.map((a2) => (a2 === void 0 && (a2 = null), a2 === null ? "null" : '"' + ln(e ? e(a2) : a2.toString()) + '"')).join(i3)}}`;
}
var de = { i: 0, char: null, str: "", quoted: false, last: 0, p: null };
function pn(t2, e, n2) {
  return de.i = de.last = 0, je(de, t2, e, n2)[0];
}
function je(t2, e, n2, s3) {
  let i3 = [], a2 = s3 === 1020 ? ";" : ",";
  for (; t2.i < e.length; t2.i++) {
    if (t2.char = e[t2.i], t2.quoted) t2.char === "\\" ? t2.str += e[++t2.i] : t2.char === '"' ? (i3.push(n2 ? n2(t2.str) : t2.str), t2.str = "", t2.quoted = e[t2.i + 1] === '"', t2.last = t2.i + 2) : t2.str += t2.char;
    else if (t2.char === '"') t2.quoted = true;
    else if (t2.char === "{") t2.last = ++t2.i, i3.push(je(t2, e, n2, s3));
    else if (t2.char === "}") {
      t2.quoted = false, t2.last < t2.i && i3.push(n2 ? n2(e.slice(t2.last, t2.i)) : e.slice(t2.last, t2.i)), t2.last = t2.i + 1;
      break;
    } else t2.char === a2 && t2.p !== "}" && t2.p !== '"' && (i3.push(n2 ? n2(e.slice(t2.last, t2.i)) : e.slice(t2.last, t2.i)), t2.last = t2.i + 1);
    t2.p = t2.char;
  }
  return t2.last < t2.i && i3.push(n2 ? n2(e.slice(t2.last, t2.i + 1)) : e.slice(t2.last, t2.i + 1)), i3;
}
var hn = {};
F(hn, { parseDescribeStatementResults: () => yn, parseResults: () => fn });
u();
function fn(t2, e, n2, s3) {
  let i3 = [], a2 = { rows: [], fields: [] }, u3 = 0, m3 = { ...e, ...n2?.parsers };
  return t2.forEach((l) => {
    switch (l.name) {
      case "rowDescription": {
        let U3 = l;
        a2.fields = U3.fields.map((E3) => ({ name: E3.name, dataTypeID: E3.dataTypeID }));
        break;
      }
      case "dataRow": {
        if (!a2) break;
        let U3 = l;
        n2?.rowMode === "array" ? a2.rows.push(U3.fields.map((E3, te) => se(E3, a2.fields[te].dataTypeID, m3))) : a2.rows.push(Object.fromEntries(U3.fields.map((E3, te) => [a2.fields[te].name, se(E3, a2.fields[te].dataTypeID, m3)])));
        break;
      }
      case "commandComplete": {
        u3 += mn(l), i3.push({ ...a2, affectedRows: u3, ...s3 ? { blob: s3 } : {} }), a2 = { rows: [], fields: [] };
        break;
      }
    }
  }), i3.length === 0 && i3.push({ affectedRows: 0, rows: [], fields: [] }), i3;
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
  let e = t2.find((n2) => n2.name === "parameterDescription");
  return e ? e.dataTypeIDs : [];
}
var Ee = {};
F(Ee, { AuthenticationCleartextPassword: () => V, AuthenticationMD5Password: () => F2, AuthenticationOk: () => L, AuthenticationSASL: () => G, AuthenticationSASLContinue: () => v, AuthenticationSASLFinal: () => Q, BackendKeyDataMessage: () => W, CommandCompleteMessage: () => $, CopyDataMessage: () => H, CopyResponse: () => _, DataRowMessage: () => X, DatabaseError: () => C, Field: () => z, NoticeMessage: () => Z, NotificationResponseMessage: () => K, ParameterDescriptionMessage: () => j, ParameterStatusMessage: () => q, ReadyForQueryMessage: () => J, RowDescriptionMessage: () => Y, bindComplete: () => Se, closeComplete: () => Be, copyDone: () => Re, emptyQuery: () => Me, noData: () => De, parseComplete: () => Ae, portalSuspended: () => Ie, replicationStart: () => xe });
u();
var Ae = { name: "parseComplete", length: 5 };
var Se = { name: "bindComplete", length: 5 };
var Be = { name: "closeComplete", length: 5 };
var De = { name: "noData", length: 5 };
var Ie = { name: "portalSuspended", length: 5 };
var xe = { name: "replicationStart", length: 4 };
var Me = { name: "emptyQuery", length: 4 };
var Re = { name: "copyDone", length: 4 };
var L = class {
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
  constructor(e, n2) {
    this.length = e;
    this.salt = n2;
    this.name = "authenticationMD5Password";
  }
};
var G = class {
  constructor(e, n2) {
    this.length = e;
    this.mechanisms = n2;
    this.name = "authenticationSASL";
  }
};
var v = class {
  constructor(e, n2) {
    this.length = e;
    this.data = n2;
    this.name = "authenticationSASLContinue";
  }
};
var Q = class {
  constructor(e, n2) {
    this.length = e;
    this.data = n2;
    this.name = "authenticationSASLFinal";
  }
};
var C = class extends Error {
  constructor(n2, s3, i3) {
    super(n2);
    this.length = s3;
    this.name = i3;
  }
};
var H = class {
  constructor(e, n2) {
    this.length = e;
    this.chunk = n2;
    this.name = "copyData";
  }
};
var _ = class {
  constructor(e, n2, s3, i3) {
    this.length = e;
    this.name = n2;
    this.binary = s3;
    this.columnTypes = new Array(i3);
  }
};
var z = class {
  constructor(e, n2, s3, i3, a2, u3, m3) {
    this.name = e;
    this.tableID = n2;
    this.columnID = s3;
    this.dataTypeID = i3;
    this.dataTypeSize = a2;
    this.dataTypeModifier = u3;
    this.format = m3;
  }
};
var Y = class {
  constructor(e, n2) {
    this.length = e;
    this.fieldCount = n2;
    this.name = "rowDescription";
    this.fields = new Array(this.fieldCount);
  }
};
var j = class {
  constructor(e, n2) {
    this.length = e;
    this.parameterCount = n2;
    this.name = "parameterDescription";
    this.dataTypeIDs = new Array(this.parameterCount);
  }
};
var q = class {
  constructor(e, n2, s3) {
    this.length = e;
    this.parameterName = n2;
    this.parameterValue = s3;
    this.name = "parameterStatus";
  }
};
var W = class {
  constructor(e, n2, s3) {
    this.length = e;
    this.processID = n2;
    this.secretKey = s3;
    this.name = "backendKeyData";
  }
};
var K = class {
  constructor(e, n2, s3, i3) {
    this.length = e;
    this.processId = n2;
    this.channel = s3;
    this.payload = i3;
    this.name = "notification";
  }
};
var J = class {
  constructor(e, n2) {
    this.length = e;
    this.status = n2;
    this.name = "readyForQuery";
  }
};
var $ = class {
  constructor(e, n2) {
    this.length = e;
    this.text = n2;
    this.name = "commandComplete";
  }
};
var X = class {
  constructor(e, n2) {
    this.length = e;
    this.fields = n2;
    this.name = "dataRow";
    this.fieldCount = n2.length;
  }
};
var Z = class {
  constructor(e, n2) {
    this.length = e;
    this.message = n2;
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
  for (let n2 = t2.length - 1; n2 >= 0; n2--) {
    let s3 = t2.charCodeAt(n2);
    s3 > 127 && s3 <= 2047 ? e++ : s3 > 2047 && s3 <= 65535 && (e += 2), s3 >= 56320 && s3 <= 57343 && n2--;
  }
  return e;
}
var b;
var g;
var N;
var ae;
var O;
var S;
var ie;
var P;
var qe;
var R2 = class {
  constructor(e = 256) {
    this.size = e;
    R(this, S);
    R(this, b);
    R(this, g, 5);
    R(this, N, false);
    R(this, ae, new TextEncoder());
    R(this, O, 0);
    x(this, b, T(this, S, ie).call(this, e));
  }
  addInt32(e) {
    return T(this, S, P).call(this, 4), h(this, b).setInt32(h(this, g), e, h(this, N)), x(this, g, h(this, g) + 4), this;
  }
  addInt16(e) {
    return T(this, S, P).call(this, 2), h(this, b).setInt16(h(this, g), e, h(this, N)), x(this, g, h(this, g) + 2), this;
  }
  addCString(e) {
    return e && this.addString(e), T(this, S, P).call(this, 1), h(this, b).setUint8(h(this, g), 0), U(this, g)._++, this;
  }
  addString(e = "") {
    let n2 = T2(e);
    return T(this, S, P).call(this, n2), h(this, ae).encodeInto(e, new Uint8Array(h(this, b).buffer, h(this, g))), x(this, g, h(this, g) + n2), this;
  }
  add(e) {
    return T(this, S, P).call(this, e.byteLength), new Uint8Array(h(this, b).buffer).set(new Uint8Array(e), h(this, g)), x(this, g, h(this, g) + e.byteLength), this;
  }
  flush(e) {
    let n2 = T(this, S, qe).call(this, e);
    return x(this, g, 5), x(this, b, T(this, S, ie).call(this, this.size)), new Uint8Array(n2);
  }
};
b = /* @__PURE__ */ new WeakMap(), g = /* @__PURE__ */ new WeakMap(), N = /* @__PURE__ */ new WeakMap(), ae = /* @__PURE__ */ new WeakMap(), O = /* @__PURE__ */ new WeakMap(), S = /* @__PURE__ */ new WeakSet(), ie = function(e) {
  return new DataView(new ArrayBuffer(e));
}, P = function(e) {
  if (h(this, b).byteLength - h(this, g) < e) {
    let s3 = h(this, b).buffer, i3 = s3.byteLength + (s3.byteLength >> 1) + e;
    x(this, b, T(this, S, ie).call(this, i3)), new Uint8Array(h(this, b).buffer).set(new Uint8Array(s3));
  }
}, qe = function(e) {
  if (e) {
    h(this, b).setUint8(h(this, O), e);
    let n2 = h(this, g) - (h(this, O) + 1);
    h(this, b).setInt32(h(this, O) + 1, n2, h(this, N));
  }
  return h(this, b).buffer.slice(e ? 0 : 5, h(this, g));
};
var f = new R2();
var bn = (t2) => {
  f.addInt16(3).addInt16(0);
  for (let s3 of Object.keys(t2)) f.addCString(s3).addCString(t2[s3]);
  f.addCString("client_encoding").addCString("UTF8");
  let e = f.addCString("").flush(), n2 = e.byteLength + 4;
  return new R2().addInt32(n2).add(e).flush();
};
var gn = () => {
  let t2 = new DataView(new ArrayBuffer(8));
  return t2.setInt32(0, 8, false), t2.setInt32(4, 80877103, false), new Uint8Array(t2.buffer);
};
var wn = (t2) => f.addCString(t2).flush(112);
var An = (t2, e) => (f.addCString(t2).addInt32(T2(e)).addString(e), f.flush(112));
var Sn = (t2) => f.addString(t2).flush(112);
var Bn = (t2) => f.addCString(t2).flush(81);
var Dn = [];
var In = (t2) => {
  let e = t2.name ?? "";
  e.length > 63 && (console.error("Warning! Postgres only supports 63 characters for query names."), console.error("You supplied %s (%s)", e, e.length), console.error("This can cause conflicts and silent errors executing queries"));
  let n2 = f.addCString(e).addCString(t2.text).addInt16(t2.types?.length ?? 0);
  return t2.types?.forEach((s3) => n2.addInt32(s3)), f.flush(80);
};
var k = new R2();
var xn = (t2, e) => {
  for (let n2 = 0; n2 < t2.length; n2++) {
    let s3 = e ? e(t2[n2], n2) : t2[n2];
    if (s3 === null) f.addInt16(0), k.addInt32(-1);
    else if (s3 instanceof ArrayBuffer || ArrayBuffer.isView(s3)) {
      let i3 = ArrayBuffer.isView(s3) ? s3.buffer.slice(s3.byteOffset, s3.byteOffset + s3.byteLength) : s3;
      f.addInt16(1), k.addInt32(i3.byteLength), k.add(i3);
    } else f.addInt16(0), k.addInt32(T2(s3)), k.addString(s3);
  }
};
var Mn = (t2 = {}) => {
  let e = t2.portal ?? "", n2 = t2.statement ?? "", s3 = t2.binary ?? false, i3 = t2.values ?? Dn, a2 = i3.length;
  return f.addCString(e).addCString(n2), f.addInt16(a2), xn(i3, t2.valueMapper), f.addInt16(a2), f.add(k.flush()), f.addInt16(s3 ? 1 : 0), f.flush(66);
};
var Rn = new Uint8Array([69, 0, 0, 0, 9, 0, 0, 0, 0, 0]);
var En = (t2) => {
  if (!t2 || !t2.portal && !t2.rows) return Rn;
  let e = t2.portal ?? "", n2 = t2.rows ?? 0, s3 = T2(e), i3 = 4 + s3 + 1 + 4, a2 = new DataView(new ArrayBuffer(1 + i3));
  return a2.setUint8(0, 69), a2.setInt32(1, i3, false), new TextEncoder().encodeInto(e, new Uint8Array(a2.buffer, 5)), a2.setUint8(s3 + 5, 0), a2.setUint32(a2.byteLength - 4, n2, false), new Uint8Array(a2.buffer);
};
var Cn = (t2, e) => {
  let n2 = new DataView(new ArrayBuffer(16));
  return n2.setInt32(0, 16, false), n2.setInt16(4, 1234, false), n2.setInt16(6, 5678, false), n2.setInt32(8, t2, false), n2.setInt32(12, e, false), new Uint8Array(n2.buffer);
};
var Ce = (t2, e) => {
  let n2 = new R2();
  return n2.addCString(e), n2.flush(t2);
};
var Tn = f.addCString("P").flush(68);
var Pn = f.addCString("S").flush(68);
var Nn = (t2) => t2.name ? Ce(68, `${t2.type}${t2.name ?? ""}`) : t2.type === "P" ? Tn : Pn;
var On = (t2) => {
  let e = `${t2.type}${t2.name ?? ""}`;
  return Ce(67, e);
};
var kn = (t2) => f.add(t2).flush(100);
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
  setBuffer(e, n2) {
    x(this, w, e), x(this, M, new DataView(n2));
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
    let e = h(this, w), n2 = e;
    for (; h(this, M).getUint8(n2++) !== 0; ) ;
    let s3 = this.string(n2 - e - 1);
    return x(this, w, n2), s3;
  }
  bytes(e) {
    let n2 = h(this, M).buffer.slice(h(this, w), h(this, w) + e);
    return x(this, w, h(this, w) + e), new Uint8Array(n2);
  }
};
M = /* @__PURE__ */ new WeakMap(), w = /* @__PURE__ */ new WeakMap(), ce = /* @__PURE__ */ new WeakMap(), le = /* @__PURE__ */ new WeakMap(), ee = /* @__PURE__ */ new WeakMap();
var Pe = 1;
var Qn = 4;
var Ke = Pe + Qn;
var Je = new ArrayBuffer(0);
var A;
var B;
var D;
var o;
var c;
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
    R(this, c);
    R(this, A, new DataView(Je));
    R(this, B, 0);
    R(this, D, 0);
    R(this, o, new ue());
  }
  parse(e, n2) {
    T(this, c, $e).call(this, ArrayBuffer.isView(e) ? e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength) : e);
    let s3 = h(this, D) + h(this, B), i3 = h(this, D);
    for (; i3 + Ke <= s3; ) {
      let a2 = h(this, A).getUint8(i3), u3 = h(this, A).getUint32(i3 + Pe, false), m3 = Pe + u3;
      if (m3 + i3 <= s3 && u3 > 0) {
        let l = T(this, c, Xe).call(this, i3 + Ke, a2, u3, h(this, A).buffer);
        n2(l), i3 += m3;
      } else break;
    }
    i3 === s3 ? (x(this, A, new DataView(Je)), x(this, B, 0), x(this, D, 0)) : (x(this, B, s3 - i3), x(this, D, i3));
  }
};
A = /* @__PURE__ */ new WeakMap(), B = /* @__PURE__ */ new WeakMap(), D = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakSet(), $e = function(e) {
  if (h(this, B) > 0) {
    let n2 = h(this, B) + e.byteLength;
    if (n2 + h(this, D) > h(this, A).byteLength) {
      let i3;
      if (n2 <= h(this, A).byteLength && h(this, D) >= h(this, B)) i3 = h(this, A).buffer;
      else {
        let a2 = h(this, A).byteLength * 2;
        for (; n2 >= a2; ) a2 *= 2;
        i3 = new ArrayBuffer(a2);
      }
      new Uint8Array(i3).set(new Uint8Array(h(this, A).buffer, h(this, D), h(this, B))), x(this, A, new DataView(i3)), x(this, D, 0);
    }
    new Uint8Array(h(this, A).buffer).set(new Uint8Array(e), h(this, D) + h(this, B)), x(this, B, n2);
  } else x(this, A, new DataView(e)), x(this, D, 0), x(this, B, e.byteLength);
}, Xe = function(e, n2, s3, i3) {
  switch (n2) {
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
      return T(this, c, ut).call(this, e, s3, i3);
    case 67:
      return T(this, c, et).call(this, e, s3, i3);
    case 90:
      return T(this, c, Ze).call(this, e, s3, i3);
    case 65:
      return T(this, c, st).call(this, e, s3, i3);
    case 82:
      return T(this, c, pt).call(this, e, s3, i3);
    case 83:
      return T(this, c, ct).call(this, e, s3, i3);
    case 75:
      return T(this, c, lt).call(this, e, s3, i3);
    case 69:
      return T(this, c, Oe).call(this, e, s3, i3, "error");
    case 78:
      return T(this, c, Oe).call(this, e, s3, i3, "notice");
    case 84:
      return T(this, c, it).call(this, e, s3, i3);
    case 116:
      return T(this, c, ot).call(this, e, s3, i3);
    case 71:
      return T(this, c, nt).call(this, e, s3, i3);
    case 72:
      return T(this, c, rt).call(this, e, s3, i3);
    case 100:
      return T(this, c, tt).call(this, e, s3, i3);
    default:
      return new C("received invalid response: " + n2.toString(16), s3, "error");
  }
}, Ze = function(e, n2, s3) {
  h(this, o).setBuffer(e, s3);
  let i3 = h(this, o).string(1);
  return new J(n2, i3);
}, et = function(e, n2, s3) {
  h(this, o).setBuffer(e, s3);
  let i3 = h(this, o).cstring();
  return new $(n2, i3);
}, tt = function(e, n2, s3) {
  let i3 = s3.slice(e, e + (n2 - 4));
  return new H(n2, new Uint8Array(i3));
}, nt = function(e, n2, s3) {
  return T(this, c, Ne).call(this, e, n2, s3, "copyInResponse");
}, rt = function(e, n2, s3) {
  return T(this, c, Ne).call(this, e, n2, s3, "copyOutResponse");
}, Ne = function(e, n2, s3, i3) {
  h(this, o).setBuffer(e, s3);
  let a2 = h(this, o).byte() !== 0, u3 = h(this, o).int16(), m3 = new _(n2, i3, a2, u3);
  for (let l = 0; l < u3; l++) m3.columnTypes[l] = h(this, o).int16();
  return m3;
}, st = function(e, n2, s3) {
  h(this, o).setBuffer(e, s3);
  let i3 = h(this, o).int32(), a2 = h(this, o).cstring(), u3 = h(this, o).cstring();
  return new K(n2, i3, a2, u3);
}, it = function(e, n2, s3) {
  h(this, o).setBuffer(e, s3);
  let i3 = h(this, o).int16(), a2 = new Y(n2, i3);
  for (let u3 = 0; u3 < i3; u3++) a2.fields[u3] = T(this, c, at).call(this);
  return a2;
}, at = function() {
  let e = h(this, o).cstring(), n2 = h(this, o).int32(), s3 = h(this, o).int16(), i3 = h(this, o).int32(), a2 = h(this, o).int16(), u3 = h(this, o).int32(), m3 = h(this, o).int16() === 0 ? Te.text : Te.binary;
  return new z(e, n2, s3, i3, a2, u3, m3);
}, ot = function(e, n2, s3) {
  h(this, o).setBuffer(e, s3);
  let i3 = h(this, o).int16(), a2 = new j(n2, i3);
  for (let u3 = 0; u3 < i3; u3++) a2.dataTypeIDs[u3] = h(this, o).int32();
  return a2;
}, ut = function(e, n2, s3) {
  h(this, o).setBuffer(e, s3);
  let i3 = h(this, o).int16(), a2 = new Array(i3);
  for (let u3 = 0; u3 < i3; u3++) {
    let m3 = h(this, o).int32();
    a2[u3] = m3 === -1 ? null : h(this, o).string(m3);
  }
  return new X(n2, a2);
}, ct = function(e, n2, s3) {
  h(this, o).setBuffer(e, s3);
  let i3 = h(this, o).cstring(), a2 = h(this, o).cstring();
  return new q(n2, i3, a2);
}, lt = function(e, n2, s3) {
  h(this, o).setBuffer(e, s3);
  let i3 = h(this, o).int32(), a2 = h(this, o).int32();
  return new W(n2, i3, a2);
}, pt = function(e, n2, s3) {
  h(this, o).setBuffer(e, s3);
  let i3 = h(this, o).int32();
  switch (i3) {
    case 0:
      return new L(n2);
    case 3:
      return new V(n2);
    case 5:
      return new F2(n2, h(this, o).bytes(4));
    case 10: {
      let a2 = [];
      for (; ; ) {
        let u3 = h(this, o).cstring();
        if (u3.length === 0) return new G(n2, a2);
        a2.push(u3);
      }
    }
    case 11:
      return new v(n2, h(this, o).string(n2 - 8));
    case 12:
      return new Q(n2, h(this, o).string(n2 - 8));
    default:
      throw new Error("Unknown authenticationOk message type " + i3);
  }
}, Oe = function(e, n2, s3, i3) {
  h(this, o).setBuffer(e, s3);
  let a2 = {}, u3 = h(this, o).string(1);
  for (; u3 !== "\0"; ) a2[u3] = h(this, o).cstring(), u3 = h(this, o).string(1);
  let m3 = a2.M, l = i3 === "notice" ? new Z(n2, m3) : new C(m3, n2, i3);
  return l.severity = a2.S, l.code = a2.C, l.detail = a2.D, l.hint = a2.H, l.position = a2.P, l.internalPosition = a2.p, l.internalQuery = a2.q, l.where = a2.W, l.schema = a2.s, l.table = a2.t, l.column = a2.c, l.dataType = a2.d, l.constraint = a2.n, l.file = a2.F, l.line = a2.L, l.routine = a2.R, l;
};

// node_modules/@electric-sql/pglite/dist/chunk-F4GETNPB.js
u();
var o2 = { part: "part", container: "container" };
function s(t2, r2, ...e) {
  let a2 = t2.length - 1, p3 = e.length - 1;
  if (p3 !== -1) {
    if (p3 === 0) {
      t2[a2] = t2[a2] + e[0] + r2;
      return;
    }
    t2[a2] = t2[a2] + e[0], t2.push(...e.slice(1, p3)), t2.push(e[p3] + r2);
  }
}
function y(t2, ...r2) {
  let e = [t2[0]];
  e.raw = [t2.raw[0]];
  let a2 = [];
  for (let p3 = 0; p3 < r2.length; p3++) {
    let n2 = r2[p3], i3 = p3 + 1;
    if (n2?._templateType === o2.part) {
      s(e, t2[i3], n2.str), s(e.raw, t2.raw[i3], n2.str);
      continue;
    }
    if (n2?._templateType === o2.container) {
      s(e, t2[i3], ...n2.strings), s(e.raw, t2.raw[i3], ...n2.strings.raw), a2.push(...n2.values);
      continue;
    }
    e.push(t2[i3]), e.raw.push(t2.raw[i3]), a2.push(n2);
  }
  return { _templateType: "container", strings: e, values: a2 };
}
function g2(t2, ...r2) {
  let { strings: e, values: a2 } = y(t2, ...r2);
  return { query: [e[0], ...a2.flatMap((p3, n2) => [`$${n2 + 1}`, e[n2 + 1]])].join(""), params: a2 };
}

// node_modules/@electric-sql/pglite/dist/chunk-HDIMFN25.js
u();
u();
function E(h2) {
  let s3 = h2.e;
  return s3.query = h2.query, s3.params = h2.params, s3.queryOptions = h2.options, s3;
}
var P2;
var p;
var t;
var y2;
var x2;
var m;
var _2;
var z2 = class {
  constructor() {
    R(this, t);
    this.serializers = { ...an };
    this.parsers = { ...sn };
    R(this, P2, false);
    R(this, p, false);
  }
  async _initArrayTypes({ force: s3 = false } = {}) {
    if (h(this, P2) && !s3) return;
    x(this, P2, true);
    let e = await this.query(`
      SELECT b.oid, b.typarray
      FROM pg_catalog.pg_type a
      LEFT JOIN pg_catalog.pg_type b ON b.oid = a.typelem
      WHERE a.typcategory = 'A'
      GROUP BY b.oid, b.typarray
      ORDER BY b.oid
    `);
    for (let r2 of e.rows) this.serializers[r2.typarray] = (o4) => Ye(o4, this.serializers[r2.oid], r2.typarray), this.parsers[r2.typarray] = (o4) => pn(o4, this.parsers[r2.oid], r2.typarray);
  }
  async refreshArrayTypes() {
    await this._initArrayTypes({ force: true });
  }
  async query(s3, e, r2) {
    return await this._checkReady(), await this._runExclusiveTransaction(async () => await T(this, t, x2).call(this, s3, e, r2));
  }
  async sql(s3, ...e) {
    let { query: r2, params: o4 } = g2(s3, ...e);
    return await this.query(r2, o4);
  }
  async exec(s3, e) {
    return await this._checkReady(), await this._runExclusiveTransaction(async () => await T(this, t, m).call(this, s3, e));
  }
  async describeQuery(s3, e) {
    let r2 = [];
    try {
      await T(this, t, y2).call(this, We.parse({ text: s3, types: e?.paramTypes }), e), r2 = await T(this, t, y2).call(this, We.describe({ type: "S" }), e);
    } catch (n2) {
      throw n2 instanceof C ? E({ e: n2, options: e, params: void 0, query: s3 }) : n2;
    } finally {
      r2.push(...await T(this, t, y2).call(this, We.sync(), e));
    }
    let o4 = r2.find((n2) => n2.name === "parameterDescription"), i3 = r2.find((n2) => n2.name === "rowDescription"), c3 = o4?.dataTypeIDs.map((n2) => ({ dataTypeID: n2, serializer: this.serializers[n2] })) ?? [], u3 = i3?.fields.map((n2) => ({ name: n2.name, dataTypeID: n2.dataTypeID, parser: this.parsers[n2.dataTypeID] })) ?? [];
    return { queryParams: c3, resultFields: u3 };
  }
  async transaction(s3) {
    return await this._checkReady(), await this._runExclusiveTransaction(async () => {
      await T(this, t, m).call(this, "BEGIN"), x(this, p, true);
      let e = false, r2 = () => {
        if (e) throw new Error("Transaction is closed");
      }, o4 = { query: async (i3, c3, u3) => (r2(), await T(this, t, x2).call(this, i3, c3, u3)), sql: async (i3, ...c3) => {
        let { query: u3, params: n2 } = g2(i3, ...c3);
        return await T(this, t, x2).call(this, u3, n2);
      }, exec: async (i3, c3) => (r2(), await T(this, t, m).call(this, i3, c3)), rollback: async () => {
        r2(), await T(this, t, m).call(this, "ROLLBACK"), e = true;
      }, listen: async (i3, c3) => (r2(), await this.listen(i3, c3, o4)), get closed() {
        return e;
      } };
      try {
        let i3 = await s3(o4);
        return e || (e = true, await T(this, t, m).call(this, "COMMIT")), x(this, p, false), i3;
      } catch (i3) {
        throw e || await T(this, t, m).call(this, "ROLLBACK"), x(this, p, false), i3;
      }
    });
  }
  async runExclusive(s3) {
    return await this._runExclusiveQuery(s3);
  }
};
P2 = /* @__PURE__ */ new WeakMap(), p = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakSet(), y2 = async function(s3, e = {}) {
  return await this.execProtocolStream(s3, { ...e, syncToFs: false });
}, x2 = async function(s3, e = [], r2) {
  return await this._runExclusiveQuery(async () => {
    T(this, t, _2).call(this, "runQuery", s3, e, r2), await this._handleBlob(r2?.blob);
    let o4 = [];
    try {
      let c3 = await T(this, t, y2).call(this, We.parse({ text: s3, types: r2?.paramTypes }), r2), u3 = yn(await T(this, t, y2).call(this, We.describe({ type: "S" }), r2)), n2 = e.map((b3, k3) => {
        let D3 = u3[k3];
        if (b3 == null) return null;
        let v3 = r2?.serializers?.[D3] ?? this.serializers[D3];
        return v3 ? v3(b3) : b3.toString();
      });
      o4 = [...c3, ...await T(this, t, y2).call(this, We.bind({ values: n2 }), r2), ...await T(this, t, y2).call(this, We.describe({ type: "P" }), r2), ...await T(this, t, y2).call(this, We.execute({}), r2)];
    } catch (c3) {
      throw c3 instanceof C ? E({ e: c3, options: r2, params: e, query: s3 }) : c3;
    } finally {
      o4.push(...await T(this, t, y2).call(this, We.sync(), r2));
    }
    await this._cleanupBlob(), h(this, p) || await this.syncToFs();
    let i3 = await this._getWrittenBlob();
    return fn(o4, this.parsers, r2, i3)[0];
  });
}, m = async function(s3, e) {
  return await this._runExclusiveQuery(async () => {
    T(this, t, _2).call(this, "runExec", s3, e), await this._handleBlob(e?.blob);
    let r2 = [];
    try {
      r2 = await T(this, t, y2).call(this, We.query(s3), e);
    } catch (i3) {
      throw i3 instanceof C ? E({ e: i3, options: e, params: void 0, query: s3 }) : i3;
    } finally {
      r2.push(...await T(this, t, y2).call(this, We.sync(), e));
    }
    this._cleanupBlob(), h(this, p) || await this.syncToFs();
    let o4 = await this._getWrittenBlob();
    return fn(r2, this.parsers, e, o4);
  });
}, _2 = function(...s3) {
  this.debug > 0 && console.log(...s3);
};

// node_modules/@electric-sql/pglite/dist/chunk-XP4OYHYJ.js
u();
var u2 = Object.defineProperty;
var f2 = (t2, e) => {
  for (var a2 in e) u2(t2, a2, { get: e[a2], enumerable: true });
};
var d2 = {};
f2(d2, { IN_NODE: () => s2, getFsBundle: () => p2, instantiateWasm: () => m2, startArtifactDownload: () => c2, toPostgresName: () => y3, uuid: () => b2 });
var s2 = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string";
var r = /* @__PURE__ */ new Map();
async function c2(t2) {
  s2 || r.has(t2.toString()) || r.set(t2.toString(), fetch(t2));
}
var o3 = /* @__PURE__ */ new Map();
async function m2(t2, e, a2) {
  if (a2 || o3.has(e.toString())) {
    let n2 = a2 || o3.get(e.toString());
    return { instance: await WebAssembly.instantiate(n2, t2), module: n2 };
  }
  if (s2) {
    let n2 = await (await Promise.resolve().then(() => __toESM(require_promises(), 1))).readFile(e), { module: i3, instance: l } = await WebAssembly.instantiate(n2, t2);
    return o3.set(e.toString(), i3), { instance: l, module: i3 };
  } else {
    r.has(e.toString()) || c2(e);
    let n2 = await r.get(e.toString()), { module: i3, instance: l } = await WebAssembly.instantiateStreaming(n2.clone(), t2);
    return o3.set(e.toString(), i3), { instance: l, module: i3 };
  }
}
async function p2(t2) {
  return s2 ? (await (await Promise.resolve().then(() => __toESM(require_promises(), 1))).readFile(t2)).buffer : (c2(t2), (await r.get(t2.toString())).clone().arrayBuffer());
}
var b2 = () => {
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
function y3(t2) {
  let e;
  return t2.startsWith('"') && t2.endsWith('"') ? e = t2.substring(1, t2.length - 1) : e = t2.toLowerCase(), e;
}

// node_modules/@electric-sql/pglite/dist/worker/index.js
u();
var W2;
var T3;
var C2;
var M2;
var B2;
var w2;
var x3;
var L2;
var P3;
var A2;
var _3;
var O2;
var R3;
var v2;
var G2;
var k2;
var E2;
var D2;
var S2;
var i2;
var H2;
var U2;
var g3;
var K2;
var q2 = class q3 extends z2 {
  constructor(e, r2) {
    super();
    R(this, i2);
    R(this, W2);
    R(this, T3, 0);
    R(this, C2, false);
    R(this, M2, false);
    R(this, B2, false);
    R(this, w2, new EventTarget());
    R(this, x3);
    R(this, L2, false);
    R(this, P3);
    R(this, A2);
    R(this, _3);
    R(this, O2);
    R(this, R3);
    R(this, v2);
    R(this, G2);
    R(this, k2, /* @__PURE__ */ new Map());
    R(this, E2, /* @__PURE__ */ new Set());
    R(this, D2);
    R(this, S2, []);
    x(this, P3, e), x(this, x3, d2.uuid()), x(this, D2, r2?.extensions ?? {}), x(this, _3, new Promise((o4) => {
      h(this, P3).addEventListener("message", (s3) => {
        if (s3.data.type === "here") o4();
        else throw new Error("Invalid message");
      }, { once: true });
    })), x(this, O2, new Promise((o4) => {
      let s3 = (a2) => {
        a2.data.type === "ready" && (x(this, A2, a2.data.id), h(this, P3).removeEventListener("message", s3), o4());
      };
      h(this, P3).addEventListener("message", s3);
    })), x(this, W2, T(this, i2, H2).call(this, r2));
  }
  static async create(e, r2) {
    let o4 = new q3(e, r2);
    return await h(o4, W2), o4;
  }
  get waitReady() {
    return new Promise((e) => {
      h(this, W2).then(() => {
        h(this, L2) ? e() : e(new Promise((r2) => {
          h(this, w2).addEventListener("connected", () => {
            r2();
          });
        }));
      });
    });
  }
  get debug() {
    return h(this, T3);
  }
  get ready() {
    return h(this, C2);
  }
  get closed() {
    return h(this, M2);
  }
  get isLeader() {
    return h(this, B2);
  }
  async close() {
    var e;
    h(this, M2) || (x(this, M2, true), h(this, R3)?.close(), h(this, v2)?.close(), (e = h(this, G2)) == null || e.call(this), h(this, P3).terminate());
  }
  async [Symbol.asyncDispose]() {
    await this.close();
  }
  async execProtocolRaw(e) {
    return await T(this, i2, g3).call(this, "execProtocolRaw", e);
  }
  async execProtocol(e) {
    return await T(this, i2, g3).call(this, "execProtocol", e);
  }
  async execProtocolStream(e) {
    return await T(this, i2, g3).call(this, "execProtocolStream", e);
  }
  async execProtocolRawStream(e, r2) {
    await T(this, i2, g3).call(this, "execProtocolRawStream", e, r2);
  }
  async syncToFs() {
    await T(this, i2, g3).call(this, "syncToFs");
  }
  async listen(e, r2, o4) {
    let s3 = d2.toPostgresName(e), a2 = o4 ?? this;
    return h(this, k2).has(s3) || h(this, k2).set(s3, /* @__PURE__ */ new Set()), h(this, k2).get(s3).add(r2), await a2.exec(`LISTEN ${e}`), async (l) => {
      await this.unlisten(s3, r2, l);
    };
  }
  async unlisten(e, r2, o4) {
    await this.waitReady;
    let s3 = o4 ?? this;
    r2 ? h(this, k2).get(e)?.delete(r2) : h(this, k2).delete(e), h(this, k2).get(e)?.size === 0 && await s3.exec(`UNLISTEN ${e}`);
  }
  onNotification(e) {
    return h(this, E2).add(e), () => {
      h(this, E2).delete(e);
    };
  }
  offNotification(e) {
    h(this, E2).delete(e);
  }
  async dumpDataDir(e) {
    return await T(this, i2, g3).call(this, "dumpDataDir", e);
  }
  onLeaderChange(e) {
    return h(this, w2).addEventListener("leader-change", e), () => {
      h(this, w2).removeEventListener("leader-change", e);
    };
  }
  offLeaderChange(e) {
    h(this, w2).removeEventListener("leader-change", e);
  }
  async _handleBlob(e) {
    await T(this, i2, g3).call(this, "_handleBlob", e);
  }
  async _getWrittenBlob() {
    return await T(this, i2, g3).call(this, "_getWrittenBlob");
  }
  async _cleanupBlob() {
    await T(this, i2, g3).call(this, "_cleanupBlob");
  }
  async _checkReady() {
    await this.waitReady;
  }
  async _runExclusiveQuery(e) {
    await T(this, i2, g3).call(this, "_acquireQueryLock");
    try {
      return await e();
    } finally {
      await T(this, i2, g3).call(this, "_releaseQueryLock");
    }
  }
  async _runExclusiveTransaction(e) {
    await T(this, i2, g3).call(this, "_acquireTransactionLock");
    try {
      return await e();
    } finally {
      await T(this, i2, g3).call(this, "_releaseTransactionLock");
    }
  }
};
W2 = /* @__PURE__ */ new WeakMap(), T3 = /* @__PURE__ */ new WeakMap(), C2 = /* @__PURE__ */ new WeakMap(), M2 = /* @__PURE__ */ new WeakMap(), B2 = /* @__PURE__ */ new WeakMap(), w2 = /* @__PURE__ */ new WeakMap(), x3 = /* @__PURE__ */ new WeakMap(), L2 = /* @__PURE__ */ new WeakMap(), P3 = /* @__PURE__ */ new WeakMap(), A2 = /* @__PURE__ */ new WeakMap(), _3 = /* @__PURE__ */ new WeakMap(), O2 = /* @__PURE__ */ new WeakMap(), R3 = /* @__PURE__ */ new WeakMap(), v2 = /* @__PURE__ */ new WeakMap(), G2 = /* @__PURE__ */ new WeakMap(), k2 = /* @__PURE__ */ new WeakMap(), E2 = /* @__PURE__ */ new WeakMap(), D2 = /* @__PURE__ */ new WeakMap(), S2 = /* @__PURE__ */ new WeakMap(), i2 = /* @__PURE__ */ new WeakSet(), H2 = async function(e = {}) {
  for (let [c3, y4] of Object.entries(h(this, D2))) {
    if (y4 instanceof URL) throw new Error("URL extensions are not supported on the client side of a worker");
    {
      let d3 = await y4.setup(this, {}, true);
      if (d3.emscriptenOpts && console.warn(`PGlite extension ${c3} returned emscriptenOpts, these are not supported on the client side of a worker`), d3.namespaceObj) {
        let b3 = this;
        b3[c3] = d3.namespaceObj;
      }
      d3.bundlePath && console.warn(`PGlite extension ${c3} returned bundlePath, this is not supported on the client side of a worker`), d3.init && await d3.init(), d3.close && h(this, S2).push(d3.close);
    }
  }
  await h(this, _3);
  let { extensions: r2, ...o4 } = e;
  h(this, P3).postMessage({ type: "init", options: o4 }), await h(this, O2);
  let s3 = `pglite-tab-close:${h(this, x3)}`;
  x(this, G2, await N2(s3));
  let a2 = `pglite-broadcast:${h(this, A2)}`;
  x(this, R3, new BroadcastChannel(a2));
  let l = `pglite-tab:${h(this, x3)}`;
  x(this, v2, new BroadcastChannel(l)), h(this, R3).addEventListener("message", async (c3) => {
    c3.data.type === "leader-here" ? (x(this, L2, false), h(this, w2).dispatchEvent(new Event("leader-change")), T(this, i2, U2).call(this)) : c3.data.type === "notify" && T(this, i2, K2).call(this, c3.data.channel, c3.data.payload);
  }), h(this, v2).addEventListener("message", async (c3) => {
    c3.data.type === "connected" && (x(this, L2, true), h(this, w2).dispatchEvent(new Event("connected")), x(this, T3, await T(this, i2, g3).call(this, "getDebugLevel")), x(this, C2, true));
  }), h(this, P3).addEventListener("message", async (c3) => {
    c3.data.type === "leader-now" && (x(this, B2, true), h(this, w2).dispatchEvent(new Event("leader-change")));
  }), T(this, i2, U2).call(this), this._initArrayTypes();
}, U2 = async function() {
  h(this, L2) || (h(this, R3).postMessage({ type: "tab-here", id: h(this, x3) }), setTimeout(() => T(this, i2, U2).call(this), 16));
}, g3 = async function(e, ...r2) {
  let o4 = d2.uuid(), s3 = { type: "rpc-call", callId: o4, method: e, args: r2 };
  return h(this, v2).postMessage(s3), await new Promise((a2, l) => {
    let c3 = (b3) => {
      if (b3.data.callId !== o4) return;
      d3();
      let f3 = b3.data;
      if (f3.type === "rpc-return") a2(f3.result);
      else if (f3.type === "rpc-error") {
        let F3 = new Error(f3.error.message);
        Object.assign(F3, f3.error), l(F3);
      } else l(new Error("Invalid message"));
    }, y4 = () => {
      d3(), l(new $2());
    }, d3 = () => {
      h(this, v2).removeEventListener("message", c3), h(this, w2).removeEventListener("leader-change", y4);
    };
    h(this, w2).addEventListener("leader-change", y4), h(this, v2).addEventListener("message", c3);
  });
}, K2 = function(e, r2) {
  let o4 = h(this, k2).get(e);
  if (o4) for (let s3 of o4) queueMicrotask(() => s3(r2));
  for (let s3 of h(this, E2)) queueMicrotask(() => s3(e, r2));
};
var z3 = q2;
var $2 = class extends Error {
  constructor() {
    super("Leader changed, pending operation in indeterminate state");
  }
};
async function N2(m3) {
  let n2;
  return await new Promise((e) => {
    navigator.locks.request(m3, () => new Promise((r2) => {
      n2 = r2, e();
    }));
  }), n2;
}

// src/main.js
window.PGXQueries.init = async function(config = {}, callback) {
  if (!config.dataDir) throw new Error("PGXQueries.init: config.dataDir is required");
  const db = new z3(
    new Worker(new URL("worker.js", import.meta.url), { type: "module" }),
    config
  );
  await db.waitReady;
  window.PGXQueries.db = db;
  window.PGXQueries.execute = function(name, params = {}) {
    const query = window.PGXQueries[name];
    if (!query) throw new Error(`PGXQueries: unknown query "${name}"`);
    const values = query.params.map((p3) => params[p3] ?? null);
    return db.query(query.sql, values);
  };
  if (callback) callback(db);
};
