import { n as __toESM } from "../_runtime.mjs";
import { c as performance_default } from "../_libs/h3+rou3+srvx+unenv.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BbFqarXH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_haram_default = "/assets/hero-haram-D8gxEU0k.jpg";
var ai_crowd_default = "/assets/ai-crowd-9c1ETEyz.jpg";
var mina_default = "/assets/mina-Bi7GMGkj.jpg";
function Reveal({ children, delay = 0, className = "" }) {
	const ref = (0, import_react.useRef)(null);
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: .15 });
		obs.observe(el);
		return () => obs.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className,
		style: {
			opacity: visible ? 1 : 0,
			transform: visible ? "translateY(0)" : "translateY(28px)",
			transition: `opacity 0.9s ease-out ${delay}ms, transform 0.9s ease-out ${delay}ms`
		},
		children
	});
}
function Counter({ to, suffix = "", duration = 1800 }) {
	const ref = (0, import_react.useRef)(null);
	const [n, setN] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const obs = new IntersectionObserver(([e]) => {
			if (!e.isIntersecting) return;
			const start = performance_default.now();
			const tick = (t) => {
				const p = Math.min(1, (t - start) / duration);
				setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
				if (p < 1) requestAnimationFrame(tick);
			};
			requestAnimationFrame(tick);
			obs.disconnect();
		}, { threshold: .4 });
		obs.observe(el);
		return () => obs.disconnect();
	}, [to, duration]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		children: [n.toLocaleString(), suffix]
	});
}
function Nav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col leading-none",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg font-bold tracking-tight",
							children: "Tafweej"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-arabic text-[11px] text-muted-foreground",
							dir: "rtl",
							children: "تفويج"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-8 md:flex",
					children: [
						["Problem", "#problem"],
						["Solution", "#solution"],
						["Dashboard", "#dashboard"],
						["Tech", "#tech"],
						["Team", "#team"]
					].map(([l, h]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: h,
						className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
						children: l
					}, h))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-widest text-muted-foreground sm:inline-block",
						children: "MCIT · 2026"
					})
				})
			]
		})
	});
}
function Logo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative grid h-9 w-9 place-items-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-lg bg-[var(--gradient-emerald)] opacity-90" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-[3px] rounded-md bg-background/70 backdrop-blur" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 24 24",
				className: "relative h-5 w-5 text-[color:var(--gold)]",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2 L22 12 L12 22 L2 12 Z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "12",
					cy: "12",
					r: "3.5"
				})]
			})
		]
	});
}
function Eyebrow({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-[color:var(--emerald-glow)] animate-glow-pulse" }), children]
	});
}
function Landing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "top",
		className: "relative min-h-screen overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Problem, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Solution, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowAI, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiskLevels, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dashboard, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tech, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyTafweej, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Team, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Vision, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative flex min-h-screen items-center overflow-hidden pt-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_haram_default,
						alt: "Aerial view of Masjid Al-Haram and the Kaaba",
						width: 1920,
						height: 1280,
						className: "h-full w-full object-cover opacity-40"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0",
						style: { background: "var(--gradient-hero)" }
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0 opacity-40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					className: "h-full w-full",
					xmlns: "http://www.w3.org/2000/svg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pattern", {
							id: "grid",
							width: "60",
							height: "60",
							patternUnits: "userSpaceOnUse",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M 60 0 L 0 0 0 60",
								fill: "none",
								stroke: "oklch(0.62 0.16 155 / 0.15)",
								strokeWidth: "0.5"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
							id: "gridFade",
							cx: "50%",
							cy: "50%",
							r: "50%",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: "0%",
								stopColor: "black"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: "100%",
								stopColor: "black",
								stopOpacity: "0"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mask", {
							id: "gridMask",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
								width: "100%",
								height: "100%",
								fill: "url(#gridFade)"
							})
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						width: "100%",
						height: "100%",
						fill: "url(#grid)",
						mask: "url(#gridMask)"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Particles, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				className: "pointer-events-none absolute inset-0 h-full w-full opacity-50",
				preserveAspectRatio: "none",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: "flow",
					x1: "0",
					x2: "1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "0%",
							stopColor: "oklch(0.72 0.19 155)",
							stopOpacity: "0"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "50%",
							stopColor: "oklch(0.72 0.19 155)",
							stopOpacity: "0.8"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "100%",
							stopColor: "oklch(0.78 0.13 88)",
							stopOpacity: "0"
						})
					]
				}) }), [...Array(6)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: `M -50 ${100 + i * 120} Q ${300 + i * 40} ${50 + i * 100} 1200 ${80 + i * 110}`,
					stroke: "url(#flow)",
					strokeWidth: "1",
					fill: "none",
					strokeDasharray: "4 6",
					style: { animation: `flow-line ${8 + i}s linear infinite` }
				}, i))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid w-full max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-6 inline-flex items-center gap-3 rounded-full border border-[color:var(--gold)]/30 bg-white/[0.03] px-4 py-1.5 backdrop-blur",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-arabic text-xs text-[color:var(--gold)]",
									dir: "rtl",
									children: "تفويج"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3 w-px bg-white/20" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] uppercase tracking-[0.22em] text-muted-foreground",
									children: "MCIT Hajj & Umrah Tech Challenge · 2026"
								})
							]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 120,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "font-display text-[clamp(2.5rem,6.2vw,5.5rem)] font-bold leading-[1.02] tracking-tight",
								children: [
									"AI-Powered",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gradient-emerald",
										children: "Crowd Intelligence"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"for Safer Hajj."
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 240,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl",
								children: [
									"Predicting crowd congestion ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-foreground",
										children: "before it happens"
									}),
									" using Computer Vision and Deep Learning — protecting millions of pilgrims through intelligent early warning, ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[color:var(--gold)]",
										children: "5–15 minutes"
									}),
									" in advance."
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 360,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex flex-wrap items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#solution",
									className: "group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[var(--gradient-emerald)] px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]",
									children: ["View Architecture", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										className: "h-4 w-4 transition-transform group-hover:translate-x-0.5",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "2",
										viewBox: "0 0 24 24",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											strokeLinecap: "round",
											strokeLinejoin: "round",
											d: "M5 12h14M13 5l7 7-7 7"
										})
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#dashboard",
									className: "glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-white/[0.06]",
									children: "Explore Solution"
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 520,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/5 pt-8",
								children: [
									["2–3M", "Pilgrims yearly"],
									["5–15", "Min. early warning"],
									["24/7", "AI monitoring"]
								].map(([v, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-2xl font-bold text-gradient-gold md:text-3xl",
									children: v
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 text-xs uppercase tracking-widest text-muted-foreground",
									children: l
								})] }, l))
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden lg:col-span-4 lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-ring-rotate absolute -inset-12 rounded-full border border-dashed border-[color:var(--emerald-glow)]/20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass-strong relative animate-float rounded-3xl p-6 shadow-[var(--shadow-elegant)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-4 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] uppercase tracking-[0.22em] text-muted-foreground",
										children: "Live · Mataf Zone"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1.5 text-[10px] text-[color:var(--emerald-glow)]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "relative flex h-2 w-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--emerald-glow)] opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-[color:var(--emerald-glow)]" })]
										}), "LIVE"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] uppercase tracking-widest text-muted-foreground",
									children: "Density Forecast (t+12m)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 font-display text-5xl font-bold text-gradient-emerald",
									children: ["7.2", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-2xl text-muted-foreground",
										children: "/m²"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniChart, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 grid grid-cols-3 gap-2 text-center text-[10px]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "rounded-md bg-emerald-500/10 py-1.5 text-[color:var(--emerald-glow)]",
											children: "SAFE"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "rounded-md bg-yellow-500/10 py-1.5 text-yellow-400",
											children: "WATCH"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "rounded-md bg-red-500/20 py-1.5 font-semibold text-red-400 ring-1 ring-red-400/40",
											children: "CRITICAL"
										})
									]
								})
							]
						})]
					})
				})]
			})
		]
	});
}
function Particles() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		children: [...Array(30)].map((_, i) => ({
			l: i * 37 % 100,
			t: i * 61 % 100,
			d: 4 + i % 6,
			s: 1 + i % 3
		})).map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute rounded-full bg-[color:var(--emerald-glow)]",
			style: {
				left: `${p.l}%`,
				top: `${p.t}%`,
				width: p.s,
				height: p.s,
				opacity: .4,
				boxShadow: "0 0 8px currentColor",
				animation: `float ${p.d}s ease-in-out infinite`,
				animationDelay: `${i * .2}s`
			}
		}, i))
	});
}
function MiniChart() {
	const pts = [
		30,
		42,
		38,
		55,
		48,
		62,
		70,
		65,
		78,
		72,
		85,
		90
	];
	const w = 240, h = 70;
	const path = pts.map((v, i) => `${i === 0 ? "M" : "L"} ${i / (pts.length - 1) * w} ${h - v / 100 * h}`).join(" ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: `0 0 ${w} ${h}`,
		className: "mt-4 h-16 w-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: "chart-g",
				x1: "0",
				x2: "0",
				y1: "0",
				y2: "1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "0%",
					stopColor: "oklch(0.72 0.19 155)",
					stopOpacity: "0.4"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "100%",
					stopColor: "oklch(0.72 0.19 155)",
					stopOpacity: "0"
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: `${path} L ${w} ${h} L 0 ${h} Z`,
				fill: "url(#chart-g)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: path,
				stroke: "oklch(0.72 0.19 155)",
				strokeWidth: "1.5",
				fill: "none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: w,
				cy: h - pts[pts.length - 1] / 100 * h,
				r: "3",
				fill: "oklch(0.78 0.13 88)"
			})
		]
	});
}
function Problem() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "problem",
		className: "relative py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-16 lg:grid-cols-2 lg:gap-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "The Problem" }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 100,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-6 font-display text-4xl font-bold leading-tight md:text-5xl",
							children: [
								"Traditional systems ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-gold",
									children: "react"
								}),
								".",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"By then, it's already too late."
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 200,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 max-w-lg text-lg text-muted-foreground",
							children: [
								"Every year, millions of pilgrims converge on Makkah. Existing crowd monitoring only detects dangerous density ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "after" }),
								" it becomes visible to human operators — often too late for meaningful intervention."
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid grid-cols-2 gap-4",
						children: [
							{
								v: 3,
								s: "M+",
								l: "Pilgrims gather in Makkah every year"
							},
							{
								v: 30,
								s: "s",
								l: "Traditional detection lag time"
							},
							{
								v: 6,
								s: "+/m²",
								l: "Density threshold for crush risk"
							},
							{
								v: 100,
								s: "%",
								l: "Reactive systems — not predictive"
							}
						].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 300 + i * 80,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "glass rounded-2xl p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-4xl font-bold text-gradient-emerald",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
										to: s.v,
										suffix: s.s
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 text-xs leading-relaxed text-muted-foreground",
									children: s.l
								})]
							})
						}, s.l))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 200,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass-strong relative overflow-hidden rounded-3xl p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: ai_crowd_default,
									alt: "AI visualization of crowd density",
									width: 1280,
									height: 960,
									loading: "lazy",
									className: "absolute inset-0 h-full w-full object-cover opacity-30"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-background/50 to-background/90" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[10px] uppercase tracking-[0.22em] text-muted-foreground",
											children: "Crowd density timeline · Mataf"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-6 space-y-4",
											children: [
												{
													label: "Normal",
													val: "2.1/m²",
													pct: 22,
													color: "var(--emerald-glow)"
												},
												{
													label: "Congested",
													val: "4.6/m²",
													pct: 48,
													color: "oklch(0.82 0.16 90)"
												},
												{
													label: "Danger",
													val: "6.3/m²",
													pct: 68,
													color: "oklch(0.72 0.19 55)"
												},
												{
													label: "Critical",
													val: "8.1/m²",
													pct: 92,
													color: "oklch(0.62 0.22 25)"
												}
											].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-baseline justify-between text-xs",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-foreground/90",
													children: r.label
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-mono text-muted-foreground",
													children: r.val
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/5",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "h-full animate-heat-pulse rounded-full",
													style: {
														width: `${r.pct}%`,
														background: `linear-gradient(90deg, transparent, ${r.color})`,
														boxShadow: `0 0 12px ${r.color}`
													}
												})
											})] }, r.label))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-8 flex items-center gap-3 rounded-xl border border-red-500/30 bg-red-500/5 p-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-red-500/20",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
													className: "h-5 w-5 text-red-400",
													fill: "none",
													stroke: "currentColor",
													strokeWidth: "2",
													viewBox: "0 0 24 24",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
														strokeLinecap: "round",
														strokeLinejoin: "round",
														d: "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
													})
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-sm font-semibold text-red-400",
												children: "Reaction Gap"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-xs text-muted-foreground",
												children: "Human operators need minutes; crowd surges happen in seconds."
											})] })]
										})
									]
								})
							]
						})
					})
				})]
			})
		})
	});
}
function Solution() {
	const steps = [
		{
			t: "Camera Feeds",
			d: "Multi-angle CCTV streams across holy sites",
			icon: "camera"
		},
		{
			t: "Frame Extraction",
			d: "OpenCV pipeline · optimized sampling",
			icon: "frame"
		},
		{
			t: "CNN Density",
			d: "CSRNet estimates people/m² per frame",
			icon: "cnn"
		},
		{
			t: "Density Maps",
			d: "Spatial heatmap of live congestion",
			icon: "map"
		},
		{
			t: "Time Series",
			d: "Rolling temporal features per zone",
			icon: "series"
		},
		{
			t: "LSTM Forecast",
			d: "5–15 minute density predictions",
			icon: "lstm"
		},
		{
			t: "Risk Classification",
			d: "Safe · Watch · Warning · Critical",
			icon: "risk"
		},
		{
			t: "Dashboard & Alerts",
			d: "Real-time ops interface · early warnings",
			icon: "bell"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "solution",
		className: "relative py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 islamic-pattern opacity-40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Our Solution" }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 100,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-6 font-display text-4xl font-bold leading-tight md:text-5xl",
							children: [
								"An end-to-end AI pipeline",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"from ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-emerald",
									children: "pixel"
								}),
								" to ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-gold",
									children: "prediction"
								}),
								"."
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 200,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-lg text-muted-foreground",
							children: "Every frame flows through a chain of specialized models — turning raw video into actionable, predictive intelligence for command centers."
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-20 grid gap-6 lg:grid-cols-4",
				children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 90,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group relative h-full",
						children: [i < steps.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-3 top-1/2 hidden h-px w-6 bg-gradient-to-r from-[color:var(--emerald-glow)]/40 to-transparent lg:block" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass relative h-full overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[color:var(--emerald-glow)]/30",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-4 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepIcon, { name: s.icon }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-mono text-[10px] text-muted-foreground",
										children: ["0", i + 1]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-lg font-semibold",
									children: s.t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 text-sm text-muted-foreground",
									children: s.d
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[color:var(--emerald-glow)]/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" })
							]
						})]
					})
				}, s.t))
			})]
		})]
	});
}
function StepIcon({ name }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid h-11 w-11 place-items-center rounded-xl bg-[var(--gradient-emerald)]/10 ring-1 ring-[color:var(--emerald-glow)]/20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.5",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			className: "h-5 w-5 text-[color:var(--emerald-glow)]",
			children: {
				camera: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 8h3l2-2h6l2 2h3v10H4z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "12",
					cy: "13",
					r: "3"
				})] }),
				frame: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "4",
					y: "4",
					width: "16",
					height: "16",
					rx: "1"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 9h16M4 15h16M9 4v16M15 4v16" })] }),
				cnn: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "6",
						cy: "7",
						r: "1.5"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "6",
						cy: "17",
						r: "1.5"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "12",
						cy: "12",
						r: "1.5"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "18",
						cy: "7",
						r: "1.5"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "18",
						cy: "17",
						r: "1.5"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M7.5 7L10.5 12M7.5 17L10.5 12M13.5 12L16.5 7M13.5 12L16.5 17" })
				] }),
				map: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 6l6-2 4 2 6-2v14l-6 2-4-2-6 2z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10 4v16M14 6v16" })] }),
				series: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 17l4-6 4 3 5-8 5 4" }) }),
				lstm: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "3",
						y: "8",
						width: "4",
						height: "8",
						rx: "1"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "10",
						y: "8",
						width: "4",
						height: "8",
						rx: "1"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "17",
						y: "8",
						width: "4",
						height: "8",
						rx: "1"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M7 12h3M14 12h3" })
				] }),
				risk: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2L2 22h20z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 10v5M12 18v.5" })] }),
				bell: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 8a6 6 0 1 1 12 0c0 7 3 7 3 9H3c0-2 3-2 3-9zM10 20a2 2 0 0 0 4 0" }) })
			}[name]
		})
	});
}
function HowAI() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-end gap-8 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "How the AI Works" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-6 font-display text-4xl font-bold leading-tight md:text-5xl",
					children: [
						"Six specialized models,",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient-emerald",
							children: "one intelligent system."
						})
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 150,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-md text-muted-foreground",
						children: "Each subsystem is purpose-built and independently benchmarked — from raw pixel to risk score in under a second."
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3",
				children: [
					{
						t: "Computer Vision",
						d: "Deep CNNs extract crowd features from video frames in real time.",
						tag: "OpenCV · PyTorch"
					},
					{
						t: "Crowd Density Estimation",
						d: "CSRNet regresses per-pixel density maps — no head detection required.",
						tag: "CSRNet"
					},
					{
						t: "LSTM Prediction",
						d: "Recurrent networks forecast density 5–15 minutes ahead of time.",
						tag: "PyTorch · LSTM"
					},
					{
						t: "Risk Classification",
						d: "Learned thresholds map forecasts to four risk tiers per zone.",
						tag: "ML Classifier"
					},
					{
						t: "Real-Time Alerts",
						d: "Ops center receives push, SMS and dashboard alerts as risk rises.",
						tag: "FastAPI · WebSocket"
					},
					{
						t: "Continuous Learning",
						d: "The system retrains from operator feedback and new footage.",
						tag: "MLOps"
					}
				].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group glass relative h-full overflow-hidden rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[var(--gradient-emerald)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mb-6 grid h-12 w-12 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-lg font-bold text-[color:var(--gold)]",
										children: String(i + 1).padStart(2, "0")
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-xl font-semibold",
									children: c.t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 text-sm leading-relaxed text-muted-foreground",
									children: c.d
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 inline-block rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
									children: c.tag
								})
							]
						})]
					})
				}, c.t))
			})]
		})
	});
}
function RiskLevels() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Risk Levels" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-6 font-display text-4xl font-bold leading-tight md:text-5xl",
						children: ["Four levels. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient-gold",
							children: "Zero ambiguity."
						})]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4",
				children: [
					{
						emoji: "🟢",
						label: "Safe",
						density: "< 3.0/m²",
						conf: "97%",
						act: "Continuous monitoring",
						tone: "emerald",
						color: "var(--emerald-glow)"
					},
					{
						emoji: "🟡",
						label: "Watch",
						density: "3.0 – 4.5/m²",
						conf: "94%",
						act: "Increase camera sampling",
						tone: "yellow",
						color: "oklch(0.85 0.16 90)"
					},
					{
						emoji: "🟠",
						label: "Warning",
						density: "4.5 – 6.0/m²",
						conf: "91%",
						act: "Reroute inflow · notify ground teams",
						tone: "orange",
						color: "oklch(0.72 0.19 55)"
					},
					{
						emoji: "🔴",
						label: "Critical",
						density: "> 6.0/m²",
						conf: "89%",
						act: "Immediate crowd control response",
						tone: "red",
						color: "oklch(0.62 0.22 25)"
					}
				].map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-strong relative overflow-hidden rounded-2xl p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-x-0 top-0 h-1",
								style: {
									background: r.color,
									boxShadow: `0 0 20px ${r.color}`
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-3xl",
									children: r.emoji
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-2 w-2 animate-glow-pulse rounded-full",
									style: {
										background: r.color,
										boxShadow: `0 0 12px ${r.color}`
									}
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 font-display text-2xl font-bold",
								children: r.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 space-y-2 border-t border-white/5 pt-4 text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										k: "Density",
										v: r.density
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										k: "Confidence",
										v: r.conf
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										k: "Action",
										v: r.act
									})
								]
							})
						]
					})
				}, r.label))
			})]
		})
	});
}
function Row({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-baseline justify-between gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-muted-foreground",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-right font-mono text-foreground/90",
			children: v
		})]
	});
}
function Dashboard() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "dashboard",
		className: "relative py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Live Operations Dashboard" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-6 font-display text-4xl font-bold leading-tight md:text-5xl",
						children: [
							"A control room for",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-emerald",
								children: "the holy sites."
							})
						]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 200,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-strong overflow-hidden rounded-3xl p-4 shadow-[var(--shadow-elegant)] md:p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-b border-white/5 px-2 pb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-1.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-red-400/60" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-yellow-400/60" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-emerald-400/60" })
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-mono text-[11px] text-muted-foreground",
									children: "tafweej.ops / dashboard"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4 text-[10px] uppercase tracking-widest text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline",
									children: "Makkah · UTC+3"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1.5 text-[color:var(--emerald-glow)]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 animate-glow-pulse rounded-full bg-current" }), " ONLINE"]
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 grid gap-4 lg:grid-cols-12",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "lg:col-span-8",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardHeatmap, {})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-3 lg:col-span-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl border border-white/5 bg-white/[0.02] p-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mb-3 flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground",
												children: "Alerts"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-full bg-red-500/20 px-2 py-0.5 text-[10px] font-semibold text-red-400",
												children: "3 ACTIVE"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "space-y-2",
											children: [
												{
													s: "critical",
													z: "Mataf · Zone A3",
													t: "t+8m · density surge predicted",
													c: "text-red-400",
													bg: "bg-red-500/10"
												},
												{
													s: "warning",
													z: "Marwa Gate",
													t: "t+12m · flow bottleneck",
													c: "text-orange-400",
													bg: "bg-orange-500/10"
												},
												{
													s: "watch",
													z: "Jamarat Bridge L2",
													t: "t+15m · rising density",
													c: "text-yellow-400",
													bg: "bg-yellow-500/10"
												}
											].map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: `rounded-lg ${a.bg} p-3`,
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center justify-between",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: `text-[10px] font-bold uppercase tracking-widest ${a.c}`,
															children: a.s
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-mono text-[10px] text-muted-foreground",
															children: a.t.split("·")[0]
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "mt-1 text-xs font-medium text-foreground",
														children: a.z
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-[11px] text-muted-foreground",
														children: a.t
													})
												]
											}, i))
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl border border-white/5 bg-white/[0.02] p-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground",
											children: "Zone Status"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-3 space-y-2 text-xs",
											children: [
												["Mataf", "critical"],
												["Sa'i Corridor", "watch"],
												["Zamzam Gallery", "safe"],
												["Jamarat", "warning"],
												["Mina Camp 4", "safe"]
											].map(([n, s]) => {
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between border-b border-white/5 pb-2 last:border-0",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center gap-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-1.5 w-1.5 rounded-full ${s === "safe" ? "bg-emerald-400" : s === "watch" ? "bg-yellow-400" : s === "warning" ? "bg-orange-400" : "bg-red-400"} animate-glow-pulse` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-foreground/90",
															children: n
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-mono text-[10px] uppercase text-muted-foreground",
														children: s
													})]
												}, n);
											})
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-xl border border-white/5 bg-white/[0.02] p-4 lg:col-span-8",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-3 flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground",
											children: "Density Forecast · Mataf"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-0.5 font-mono text-[10px] text-muted-foreground",
											children: "Rolling 30 min · +15 min prediction"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex gap-2 text-[10px]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-1.5 text-muted-foreground",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-[color:var(--emerald-glow)]" }), "Observed"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-1.5 text-muted-foreground",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-[color:var(--gold)]" }), "Predicted"]
											})]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BigChart, {})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-xl border border-white/5 bg-white/[0.02] p-4 lg:col-span-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground",
										children: "Live Cameras"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-2 gap-2",
										children: [
											"CAM 01",
											"CAM 07",
											"CAM 12",
											"CAM 18"
										].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative aspect-video overflow-hidden rounded-md bg-black/40 ring-1 ring-white/5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: hero_haram_default,
													width: 1920,
													height: 1280,
													loading: "lazy",
													alt: c,
													className: "absolute inset-0 h-full w-full object-cover opacity-60",
													style: { filter: `hue-rotate(${i * 40}deg)` }
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "absolute bottom-1 left-1.5 font-mono text-[9px] text-white/80",
													children: c
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "absolute right-1.5 top-1 flex items-center gap-1 text-[9px] text-red-400",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 animate-glow-pulse rounded-full bg-current" }), " REC"]
												})
											]
										}, c))
									})]
								})
							]
						})]
					})
				})
			})]
		})
	});
}
function DashboardHeatmap() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative aspect-[16/10] overflow-hidden rounded-xl border border-white/5 bg-black/40",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: hero_haram_default,
				alt: "Site map",
				width: 1920,
				height: 1280,
				loading: "lazy",
				className: "absolute inset-0 h-full w-full object-cover opacity-30"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 grid grid-cols-16 grid-rows-10",
				style: {
					gridTemplateColumns: "repeat(16, 1fr)",
					gridTemplateRows: "repeat(10, 1fr)"
				},
				children: [...Array(160)].map((_, i) => {
					const x = i % 16, y = Math.floor(i / 16);
					const dx = x - 9, dy = y - 5;
					const dist = Math.sqrt(dx * dx + dy * dy);
					const heat = Math.max(0, 1 - dist / 7);
					const noise = i * 37 % 30 / 100;
					const v = Math.min(1, heat + noise * .5);
					if (v < .15) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}, i);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "animate-heat-pulse",
						style: {
							background: v > .75 ? "oklch(0.62 0.22 25)" : v > .55 ? "oklch(0.72 0.19 55)" : v > .35 ? "oklch(0.82 0.16 90)" : "oklch(0.72 0.19 155)",
							opacity: v * .75,
							mixBlendMode: "screen",
							animationDelay: `${i % 10 * .15}s`
						}
					}, i);
				})
			}),
			[
				{
					l: "35%",
					t: "42%",
					tag: "A3"
				},
				{
					l: "58%",
					t: "55%",
					tag: "B1"
				},
				{
					l: "70%",
					t: "35%",
					tag: "C4"
				}
			].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute -translate-x-1/2 -translate-y-1/2",
				style: {
					left: m.l,
					top: m.t
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 -m-2 animate-ping rounded-full bg-red-400/50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative flex h-3 w-3 items-center justify-center rounded-full bg-red-500 ring-2 ring-white/40" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-1 font-mono text-[10px] text-white",
					children: m.tag
				})]
			}, m.tag)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute left-3 top-3 rounded-md bg-black/40 px-2 py-1 font-mono text-[10px] text-white/80 backdrop-blur",
				children: "LIVE HEATMAP · MATAF"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute bottom-3 right-3 flex items-center gap-2 rounded-md bg-black/40 px-2 py-1 text-[10px] backdrop-blur",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: "low"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "h-2 w-24 rounded-full",
						style: { background: "linear-gradient(90deg, oklch(0.72 0.19 155), oklch(0.82 0.16 90), oklch(0.72 0.19 55), oklch(0.62 0.22 25))" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: "high"
					})
				]
			})
		]
	});
}
function BigChart() {
	const observed = [
		22,
		28,
		24,
		30,
		34,
		38,
		42,
		46,
		44,
		50,
		55,
		60,
		58,
		64,
		68
	];
	const predicted = [
		68,
		72,
		78,
		84,
		88,
		92
	];
	const all = [...observed, ...predicted];
	const w = 700, h = 160;
	const maxV = 100;
	const pathFor = (arr, offset = 0) => arr.map((v, i) => `${i === 0 ? "M" : "L"} ${(i + offset) / (all.length - 1) * w} ${h - v / maxV * h}`).join(" ");
	const obsPath = pathFor(observed);
	const predPath = pathFor(predicted, observed.length - 1);
	const splitX = (observed.length - 1) / (all.length - 1) * w;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: `0 0 ${w} ${h}`,
		className: "h-40 w-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: "obs-g",
				x1: "0",
				x2: "0",
				y1: "0",
				y2: "1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "0%",
					stopColor: "oklch(0.72 0.19 155)",
					stopOpacity: "0.4"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "100%",
					stopColor: "oklch(0.72 0.19 155)",
					stopOpacity: "0"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: "pred-g",
				x1: "0",
				x2: "0",
				y1: "0",
				y2: "1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "0%",
					stopColor: "oklch(0.78 0.13 88)",
					stopOpacity: "0.4"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "100%",
					stopColor: "oklch(0.78 0.13 88)",
					stopOpacity: "0"
				})]
			})] }),
			[
				.25,
				.5,
				.75
			].map((y) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "0",
				y1: h * y,
				x2: w,
				y2: h * y,
				stroke: "oklch(1 0 0 / 0.05)",
				strokeDasharray: "2 4"
			}, y)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: splitX,
				y1: "0",
				x2: splitX,
				y2: h,
				stroke: "oklch(0.78 0.13 88 / 0.4)",
				strokeDasharray: "3 3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: splitX + 4,
				y: 12,
				fill: "oklch(0.78 0.13 88)",
				fontSize: "9",
				fontFamily: "monospace",
				children: "NOW"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: `${obsPath} L ${splitX} ${h} L 0 ${h} Z`,
				fill: "url(#obs-g)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: obsPath,
				stroke: "oklch(0.72 0.19 155)",
				strokeWidth: "1.8",
				fill: "none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: `${predPath} L ${w} ${h} L ${splitX} ${h} Z`,
				fill: "url(#pred-g)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: predPath,
				stroke: "oklch(0.78 0.13 88)",
				strokeWidth: "1.8",
				fill: "none",
				strokeDasharray: "4 3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "0",
				y1: h * .32,
				x2: w,
				y2: h * .32,
				stroke: "oklch(0.62 0.22 25 / 0.5)",
				strokeDasharray: "4 4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "4",
				y: h * .32 - 4,
				fill: "oklch(0.72 0.22 25)",
				fontSize: "9",
				fontFamily: "monospace",
				children: "CRITICAL 6.0/m²"
			})
		]
	});
}
function Tech() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "tech",
		className: "relative py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Technology" }) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 100,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-6 font-display text-4xl font-bold leading-tight md:text-5xl",
								children: ["Built with a modern ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-emerald",
									children: "AI stack."
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 200,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-muted-foreground",
								children: "Battle-tested open-source components composed into a production-ready inference pipeline — fast, transparent, deployable."
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4",
						children: [
							"Python",
							"PyTorch",
							"CSRNet",
							"OpenCV",
							"LSTM",
							"CNN",
							"FastAPI",
							"React",
							"Tailwind CSS",
							"Machine Learning",
							"Computer Vision",
							"Time Series"
						].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * 40,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "glass group flex items-center gap-3 rounded-xl p-4 transition-all hover:-translate-y-0.5 hover:border-[color:var(--emerald-glow)]/30",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-8 w-8 shrink-0 place-items-center rounded-md bg-[var(--gradient-emerald)]/10 ring-1 ring-white/10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[10px] text-[color:var(--gold)]",
										children: t.slice(0, 2).toUpperCase()
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate text-sm font-medium",
									children: t
								})]
							})
						}, t))
					})
				})]
			})
		})
	});
}
function WhyTafweej() {
	const items = [
		{
			t: "Observe",
			d: "Continuous video from every zone.",
			icon: "eye"
		},
		{
			t: "Predict",
			d: "Forecast density 5–15 min ahead.",
			icon: "brain"
		},
		{
			t: "Alert",
			d: "Ops center notified before critical.",
			icon: "alert"
		},
		{
			t: "Intervene",
			d: "Reroute flow, deploy resources.",
			icon: "flow"
		},
		{
			t: "Save Lives",
			d: "Prevent crushes before they start.",
			icon: "heart"
		}
	];
	const icons = {
		eye: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "12",
			r: "3"
		})] }),
		brain: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 2a3 3 0 0 0-3 3 3 3 0 0 0-3 3v2a3 3 0 0 0 1 2.2A3 3 0 0 0 3 15v2a3 3 0 0 0 3 3h1.5M15 2a3 3 0 0 1 3 3 3 3 0 0 1 3 3v2a3 3 0 0 1-1 2.2A3 3 0 0 1 21 15v2a3 3 0 0 1-3 3h-1.5M12 2v20" }) }),
		alert: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 3l10 18H2z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 10v5M12 18v.5" })] }),
		flow: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 12h4M17 12h4M12 3v4M12 17v4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "12",
			r: "3"
		})] }),
		heart: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 8.5a5.5 5.5 0 0 0-9.5-3.8L12 6l1.5-1.3A5.5 5.5 0 0 1 22 8.5c0 6-10 11-10 11S2 14.5 2 8.5A5.5 5.5 0 0 1 10.5 4" }) })
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 islamic-pattern opacity-30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Why Tafweej?" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-6 font-display text-4xl font-bold leading-tight md:text-5xl",
						children: ["From observation to ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient-gold",
							children: "saving lives."
						})]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-[color:var(--emerald-glow)]/40 to-transparent md:block" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-10 md:grid-cols-5",
					children: items.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 120,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative mx-auto grid h-16 w-16 place-items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 animate-glow-pulse rounded-full bg-[var(--gradient-emerald)] opacity-30 blur-xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "relative grid h-16 w-16 place-items-center rounded-full border border-[color:var(--emerald-glow)]/40 bg-background/80 backdrop-blur",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											viewBox: "0 0 24 24",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "1.5",
											strokeLinecap: "round",
											strokeLinejoin: "round",
											className: "h-7 w-7 text-[color:var(--emerald-glow)]",
											children: icons[it.icon]
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 font-display text-xl font-bold",
									children: it.t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 text-sm text-muted-foreground",
									children: it.d
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 font-mono text-[10px] text-[color:var(--gold)]",
									children: ["STEP 0", i + 1]
								})
							]
						})
					}, it.t))
				})]
			})]
		})]
	});
}
function Team() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "team",
		className: "relative py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "The Team" }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 100,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-6 font-display text-4xl font-bold leading-tight md:text-5xl",
							children: [
								"Five engineers.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-emerald",
									children: "One mission."
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 200,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 text-muted-foreground",
							children: [
								"AI Engineering students at ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground",
									children: "ENSIA"
								}),
								" · INJAZ Company Program · builders of applied AI projects."
							]
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-5",
				children: [
					{
						n: "Zamiche Nour",
						r: "AI Engineering"
					},
					{
						n: "Sayah Maroua",
						r: "AI Engineering"
					},
					{
						n: "Bourzak Douaa",
						r: "AI Engineering"
					},
					{
						n: "Atoum Sirine",
						r: "AI Engineering"
					},
					{
						n: "Bensaddek Kaouther",
						r: "AI Engineering"
					}
				].map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group glass relative overflow-hidden rounded-2xl p-6 text-center transition-all hover:-translate-y-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative mx-auto mb-5 grid h-24 w-24 place-items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-full bg-[var(--gradient-emerald)] opacity-40 blur-xl transition-opacity group-hover:opacity-70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-[color:var(--emerald-glow)]/20 to-[color:var(--gold)]/10 ring-1 ring-white/10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-2xl font-bold text-gradient-gold",
										children: m.n.split(" ").map((p) => p[0]).join("")
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-base font-semibold leading-tight",
								children: m.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 text-xs text-muted-foreground",
								children: m.r
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 inline-block rounded-full border border-white/10 px-3 py-1 font-mono text-[9px] uppercase tracking-widest text-muted-foreground",
								children: "ENSIA · INJAZ"
							})
						]
					})
				}, m.n))
			})]
		})
	});
}
function Vision() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: mina_default,
				alt: "Mina tents at dawn",
				width: 1280,
				height: 800,
				loading: "lazy",
				className: "h-full w-full object-cover opacity-20"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative mx-auto max-w-7xl px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-center gap-16 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Vision" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-6 font-display text-4xl font-bold leading-tight md:text-6xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "Today,"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"we predict crowds.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "Tomorrow,"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-emerald",
								children: "a complete AI infrastructure"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-gold",
								children: "protecting every pilgrim."
							})
						]
					})
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 200,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "glass-strong rounded-3xl p-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-6",
							children: [
								{
									p: "Phase 01",
									t: "Predictive Density",
									d: "Deploy CSRNet + LSTM across primary zones."
								},
								{
									p: "Phase 02",
									t: "Multi-Modal Fusion",
									d: "IoT sensors, mobile signals & thermal imagery."
								},
								{
									p: "Phase 03",
									t: "Autonomous Response",
									d: "AI-driven signage, routing, resource allocation."
								},
								{
									p: "Phase 04",
									t: "Nation-scale Deployment",
									d: "Kingdom-wide safety infrastructure aligned with Vision 2030."
								}
							].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-l-2 border-[color:var(--emerald-glow)]/40 pl-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-mono text-[10px] uppercase tracking-widest text-[color:var(--gold)]",
										children: r.p
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 font-display text-lg font-semibold",
										children: r.t
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm text-muted-foreground",
										children: r.d
									})
								]
							}, r.t))
						})
					})
				})]
			})
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "relative border-t border-white/5 py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-lg font-bold",
							children: "Tafweej"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-arabic text-xs text-muted-foreground",
							dir: "rtl",
							children: "تفويج"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xs text-sm text-muted-foreground",
						children: "Built with AI for a safer pilgrimage. Predicting crowd risks before they become emergencies."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground",
						children: "Program"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 space-y-2 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "MCIT Hajj & Umrah Tech Challenge" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-muted-foreground",
								children: "Kingdom of Saudi Arabia · 2026"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-muted-foreground",
								children: "Aligned with Saudi Vision 2030"
							})
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground",
						children: "Team"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 space-y-2 text-sm text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "ENSIA · INJAZ Company Program" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "AI Engineering Students" })]
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-8 text-xs text-muted-foreground md:flex-row md:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "© 2026 Tafweej. Built with AI for safer pilgrimage." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-arabic",
					dir: "rtl",
					children: "صُنع بالذكاء الاصطناعي من أجل حجٍّ أكثر أمانًا"
				})]
			})]
		})
	});
}
//#endregion
export { Landing as component };
