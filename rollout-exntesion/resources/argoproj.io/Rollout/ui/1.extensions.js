(window.webpackJsonp = window.webpackJsonp || []).push([
    [1], {
        223: function(o, t, e) {
            "use strict";
            e.r(t), e.d(t, "RolloutAction", (function() {
                return l
            })), e.d(t, "RolloutActionButton", (function() {
                return s
            })), e.d(t, "RolloutActions", (function() {
                return d
            }));
            var l, r = e(0),
                n = e(7),
                a = e(8),
                i = e(2),
                c = e(10),
                u = function() {
                    return (u = Object.assign || function(o) {
                        for (var t, e = 1, l = arguments.length; e < l; e++)
                            for (var r in t = arguments[e]) Object.prototype.hasOwnProperty.call(t, r) && (o[r] = t[r]);
                        return o
                    }).apply(this, arguments)
                };
            ! function(o) {
                o.Restart = "Restart", o.Retry = "Retry", o.Abort = "Abort", o.Promote = "Promote", o.PromoteFull = "PromoteFull"
            }(l || (l = {}));
            var s = function(o) {
                    var t = r.useContext(n.b),
                        e = r.useContext(n.a),
                        s = Object(a.c)(o.rollout.restartedAt || ""),
                        d = new Map([
                            [l.Restart, {
                                label: "RESTART",
                                icon: "fa-sync",
                                action: t.rolloutServiceRestartRollout,
                                tooltip: "Never" === s ? "Never restarted" : "Last restarted " + s,
                                shouldConfirm: !0
                            }],
                            [l.Retry, {
                                label: "RETRY",
                                icon: "fa-redo-alt",
                                action: t.rolloutServiceRetryRollout,
                                shouldConfirm: !0
                            }],
                            [l.Abort, {
                                label: "ABORT",
                                icon: "fa-exclamation-circle",
                                action: t.rolloutServiceAbortRollout,
                                shouldConfirm: !0
                            }],
                            [l.Promote, {
                                label: "PROMOTE",
                                icon: "fa-chevron-circle-up",
                                action: t.rolloutServicePromoteRollout,
                                body: {
                                    full: !1
                                },
                                disabled: o.rollout.status !== c.b.Paused,
                                shouldConfirm: !0
                            }],
                            [l.PromoteFull, {
                                label: "PROMOTE-FULL",
                                icon: "fa-arrow-circle-up",
                                body: {
                                    full: !0
                                },
                                action: t.rolloutServicePromoteRollout,
                                disabled: o.rollout.status !== c.b.Paused,
                                shouldConfirm: !0
                            }]
                        ]).get(o.action);
                    return r.createElement(i.a, u({}, d, {
                        action: function() {
                            var t;
                            d.action(d.body || {}, e.namespace, (null === (t = o.rollout.objectMeta) || void 0 === t ? void 0 : t.name) || ""), o.callback && o.callback()
                        },
                        indicateLoading: o.indicateLoading
                    }))
                },
                d = function(o) {
                    return r.createElement("div", {
                        style: {
                            display: "flex"
                        }
                    }, Object.values(l).map((function(t) {
                        return r.createElement(s, {
                            key: t,
                            action: t,
                            rollout: o.rollout,
                            indicateLoading: !0
                        })
                    })))
                };
            t.default = d
        }
    }
]);