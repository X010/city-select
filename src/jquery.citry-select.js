/*
 * citry-select
 * https://github.com/jeffrey/city-select
 *
 * Copyright (c) 2016 x010
 * Licensed under the MIT license.
 */
!function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(window.jQuery || window.Zepto || window.$)
}(function (a) {
    a.cxSelect = function () {
        var b = {dom: {}, api: {}};
        return b.init = function () {
            var c, f, g, h, b = this, d = function (a) {
                return a && ("function" == typeof HTMLElement || "object" == typeof HTMLElement) && a instanceof HTMLElement ? !0 : a && a.nodeType && 1 === a.nodeType ? !0 : !1
            }, e = function (a) {
                return a && a.length && ("function" == typeof jQuery || "object" == typeof jQuery) && a instanceof jQuery ? !0 : !1
            };
            for (f = 0, g = arguments.length; g > f; f++)e(arguments[f]) ? b.dom.box = arguments[f] : d(arguments[f]) ? b.dom.box = a(arguments[f]) : "object" == typeof arguments[f] && (c = arguments[f]);
            if (b.dom.box.length && (b.settings = a.extend({}, a.cxSelect.defaults, c, {
                    url: b.dom.box.data("url"),
                    nodata: b.dom.box.data("nodata"),
                    required: b.dom.box.data("required"),
                    firstTitle: b.dom.box.data("firstTitle"),
                    firstValue: b.dom.box.data("firstValue"),
                    jsonSpace: b.dom.box.data("jsonSpace"),
                    jsonName: b.dom.box.data("jsonName"),
                    jsonValue: b.dom.box.data("jsonValue"),
                    jsonSub: b.dom.box.data("jsonSub")
                }), h = b.dom.box.data("selects"), "string" == typeof h && h.length && (b.settings.selects = h.split(",")), a.isArray(b.settings.selects) && b.settings.selects.length)) {
                for (b.selectArray = [], f = 0, g = b.settings.selects.length; g > f && b.dom.box.find("select." + b.settings.selects[f]); f++)b.selectArray.push(b.dom.box.find("select." + b.settings.selects[f]));
                b.selectArray.length && (b.dom.box.on("change", "select", function () {
                    b.selectChange(this.className)
                }), b.settings.url ? "string" == typeof b.settings.url ? a.getJSON(b.settings.url, function (a) {
                    b.start(a)
                }) : "object" == typeof b.settings.url && b.start(b.settings.url) : b.start())
            }
        }, b.getIndex = function (a) {
            return this.settings.required ? a : a - 1
        }, b.start = function (a) {
            var d, e, f, b = this, c = b.settings.jsonSpace;
            if (b.dataJson = void 0, a && "object" == typeof a && (b.dataJson = a, "string" == typeof c && c.length))for (d = c.split("."), e = 0, f = d.length; f > e; e++)b.dataJson = b.dataJson[d[e]];
            b.getOptionData(0)
        }, b.selectChange = function (a) {
            var b, c, d;
            if ("string" == typeof a && a.length) {
                for (a = a.replace(/\s+/g, ","), a = "," + a + ",", c = 0, d = this.selectArray.length; d > c; c++)a.indexOf("," + this.settings.selects[c] + ",") > -1 && (b = c);
                "number" == typeof b && (b += 1, this.getOptionData(b))
            }
        }, b.getOptionData = function (b) {
            var e, f, g, h, i, j, k, l, m, n, o, p, d = this;
            if (!("number" != typeof b || isNaN(b) || 0 > b || b >= d.selectArray.length)) {
                for (e = b - 1, f = d.selectArray[b], j = {}, k = f.data("url"), l = "undefined" == typeof f.data("jsonSpace") ? d.settings.jsonSpace : f.data("jsonSpace"), o = 0, p = d.selectArray.length; p > o; o++)o >= b && (d.selectArray[o].empty().prop("disabled", !0), "none" === d.settings.nodata ? d.selectArray[o].css("display", "none") : "hidden" === d.settings.nodata && d.selectArray[o].css("visibility", "hidden"));
                if ("string" == typeof k && k.length) {
                    if (e >= 0) {
                        if (!d.selectArray[e].val().length)return;
                        m = f.data("queryName"), n = d.selectArray[e].attr("name"), "string" == typeof m && m.length ? j[m] = d.selectArray[e].val() : "string" == typeof n && n.length && (j[n] = d.selectArray[e].val())
                    }
                    a.getJSON(k, j, function (a) {
                        var b, c, e;
                        if (h = a, "string" == typeof l && l.length)for (b = l.split("."), c = 0, e = b.length; e > c; c++)h = h[b[c]];
                        d.buildOption(f, h)
                    })
                } else if (d.dataJson && "object" == typeof d.dataJson) {
                    for (h = d.dataJson, o = 0, p = d.selectArray.length; p > o; o++)b > o && (i = d.getIndex(d.selectArray[o][0].selectedIndex), "object" == typeof h[i] && a.isArray(h[i][d.settings.jsonSub]) && h[i][d.settings.jsonSub].length && (g = o, h = h[i][d.settings.jsonSub]));
                    (0 > e || e === g) && d.buildOption(f, h)
                }
            }
        }, b.buildOption = function (b, c) {
            var i, j, k, d = this, e = "undefined" == typeof b.data("firstTitle") ? d.settings.firstTitle : String(b.data("firstTitle")), f = "undefined" == typeof b.data("firstValue") ? d.settings.firstValue : String(b.data("firstValue")), g = "undefined" == typeof b.data("jsonName") ? d.settings.jsonName : String(b.data("jsonName")), h = "undefined" == typeof b.data("jsonValue") ? d.settings.jsonValue : String(b.data("jsonValue"));
            if (a.isArray(c)) {
                if (i = d.settings.required ? "" : '<option value="' + f + '">' + e + "</option>", g.length)for (h.length || (h = g), j = 0, k = c.length; k > j; j++)i += '<option value="' + String(c[j][h]) + '">' + String(c[j][g]) + "</option>"; else for (j = 0, k = c.length; k > j; j++)i += '<option value="' + String(c[j]) + '">' + String(c[j]) + "</option>";
                b.html(i).prop("disabled", !1).css({
                    display: "",
                    visibility: ""
                }), "undefined" != typeof b.data("value") && b.val(String(b.data("value"))).removeData("value").removeAttr("data-value"), b.trigger("change")
            }
        }, b.init.apply(b, arguments), this
    }, a.cxSelect.defaults = {
        selects: [],
        url: null,
        nodata: null,
        required: !1,
        firstTitle: "请选择",
        firstValue: "",
        jsonSpace: "",
        jsonName: "n",
        jsonValue: "",
        jsonSub: "s"
    }, a.fn.cxSelect = function (b, c) {
        return this.each(function () {
            a.cxSelect(this, b, c)
        }), this
    }
});
