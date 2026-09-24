import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Plus, c as Menu, i as ScanSearch, l as Mail, n as UserX, o as Phone, s as MessagesSquare, t as X, u as BrainCircuit } from "../_libs/lucide-react.mjs";
import { C as pillars, D as steps, E as specialized, O as whatsappHref, S as models, T as recommend, _ as heroFor, a as DEFAULT_NOTE, b as lines, c as LEGAL, d as RECOMMENDATION, f as SLOGAN, g as faqs, h as diagnosisChecks, i as CONTACT_NAME, k as workSheet, l as PHONE_DISPLAY, m as defenseLayers, n as Route$3, o as EMAIL, p as containment, r as COMPANY, s as INCIDENT_INTEREST, u as PHONE_TEL, v as incidents, w as purdueLevels, x as mailHref, y as lineById$1 } from "./router-y5egFbjH.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-LixGc5jZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var styles = {
	primary: "bg-ink text-paper hover:bg-steel",
	secondary: "border border-line bg-panel text-ink hover:border-ink",
	inverse: "bg-paper text-ink hover:bg-inverse-fg"
};
function ButtonLink({ variant = "primary", className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		className: cn("inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold", "transition-[transform,background-color,border-color,color] duration-150 ease-out", "active:scale-[0.96]", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel focus-visible:ring-offset-2 focus-visible:ring-offset-paper", styles[variant], className),
		...props
	});
}
var OFFICIAL_LOGO = "/mapoca_corp.png";
/**
* Logo oficial de MAPOCA TELECOM (public/mapoca_corp.png).
*
* El PNG vive en el repositorio pero puede faltar temporalmente en algún
* entorno (por ejemplo, antes de propagarse a esta rama). En ese caso se
* muestra un emblema SVG con los mismos colores de marca —negro, rojo y
* blanco— para que el header/footer nunca rompan el layout.
*/
function OfficialLogo({ className = "size-9" }) {
	const [failed, setFailed] = (0, import_react.useState)(false);
	if (failed) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		"aria-hidden": true,
		className,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "32",
				height: "32",
				rx: "7",
				fill: "#0a0a0a"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "16",
				y: "22",
				textAnchor: "middle",
				fontFamily: "Georgia, serif",
				fontSize: "16",
				fill: "#ffffff",
				children: "M"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "24",
				cy: "24",
				r: "3.5",
				fill: "#c1121f"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: OFFICIAL_LOGO,
		alt: "MAPOCA TELECOM — logo oficial",
		width: 969,
		height: 744,
		loading: "eager",
		decoding: "async",
		onError: () => setFailed(true),
		className: `${className} shrink-0 object-contain`
	});
}
var links = [
	{
		href: "#incidentes",
		label: "Incidentes"
	},
	{
		href: "#defensa",
		label: "Defensa"
	},
	{
		href: "#ia",
		label: "Riesgos IA"
	},
	{
		href: "#servicios",
		label: "Servicios"
	},
	{
		href: "#preguntas",
		label: "Preguntas"
	},
	{
		href: "#contacto",
		label: "Contacto"
	}
];
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-30 border-b border-line bg-paper",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#contenido",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper",
				children: "Saltar al contenido"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#inicio",
						className: "flex items-center",
						"aria-label": "MAPOCA TELECOM — inicio",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OfficialLogo, { className: "h-14 w-auto md:h-16" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						"aria-label": "Secciones",
						className: "hidden items-center gap-6 md:flex",
						children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: link.href,
							className: "text-sm font-medium text-muted hover:text-ink",
							children: link.label
						}, link.href))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ButtonLink, {
								href: `tel:${PHONE_TEL}`,
								className: "hidden md:inline-flex",
								"aria-label": `Llamar al ${PHONE_DISPLAY}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
									className: "size-4",
									"aria-hidden": "true"
								}), PHONE_DISPLAY]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `tel:${PHONE_TEL}`,
								className: "inline-flex size-11 items-center justify-center rounded-full border border-line md:hidden",
								"aria-label": `Llamar al ${PHONE_DISPLAY}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
									className: "size-4",
									"aria-hidden": "true"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "inline-flex size-11 items-center justify-center rounded-full border border-line md:hidden",
								"aria-expanded": open,
								"aria-controls": "menu-movil",
								onClick: () => setOpen((value) => !value),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sr-only",
									children: open ? "Cerrar menú" : "Abrir menú"
								}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
									className: "size-4",
									"aria-hidden": "true"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
									className: "size-4",
									"aria-hidden": "true"
								})]
							})
						]
					})
				]
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				id: "menu-movil",
				"aria-label": "Secciones",
				className: "border-t border-line px-5 py-3 md:hidden",
				children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: link.href,
					className: "flex min-h-11 items-center text-base font-medium",
					onClick: () => setOpen(false),
					children: link.label
				}, link.href))
			}) : null
		]
	});
}
var sizes = [
	{
		id: "micro",
		label: "Microempresa",
		hint: "Pocos equipos y sin área de TI."
	},
	{
		id: "pyme",
		label: "PyME",
		hint: "Oficina, usuarios y proveedores que coordinar."
	},
	{
		id: "planta",
		label: "Planta o almacén",
		hint: "La operación no puede parar."
	}
];
var lineById = new Map(lines.map((line) => [line.id, line]));
var pains = [
	{
		id: "orden",
		label: "Falta soporte, inventario y orden"
	},
	{
		id: "riesgo",
		label: "Preocupa el fraude, el acceso o perder información"
	},
	{
		id: "red",
		label: "La red falla o la infraestructura está por hacerse"
	},
	{
		id: "datos",
		label: "Inventario, costos o ventas siguen en hojas de cálculo"
	},
	{
		id: "ot",
		label: "Hay que proteger planta, SCADA o accesos remotos"
	}
];
var Matcher = (0, import_react.memo)(function Matcher({ onRecommend }) {
	const [size, setSize] = (0, import_react.useState)(null);
	const [pain, setPain] = (0, import_react.useState)(null);
	const [show, setShow] = (0, import_react.useState)(false);
	const resultRef = (0, import_react.useRef)(null);
	const result = size && pain && show ? recommend(size, pain) : null;
	const line = result ? lineById.get(result.lineId) : void 0;
	(0, import_react.useEffect)(() => {
		if (!line) return;
		onRecommend(line.name);
		resultRef.current?.focus();
	}, [line, onRecommend]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-8 lg:grid-cols-12 lg:gap-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "lg:col-span-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-widest text-muted uppercase",
					children: "Orientación"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl leading-display",
					children: "Qué línea encaja"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-md text-muted",
					children: "Dos preguntas para ubicar el punto de partida. La propuesta real sale del diagnóstico, no de este recuadro."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "lg:col-span-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
					className: "text-sm font-semibold",
					children: "¿Cómo es la operación?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 grid gap-2 sm:grid-cols-3",
					children: sizes.map((item) => {
						const active = size === item.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							"aria-pressed": active,
							onClick: () => {
								setSize(item.id);
								setShow(false);
							},
							className: active ? "min-h-11 rounded-2xl border border-ink bg-ink px-4 py-3 text-left text-paper" : "min-h-11 rounded-2xl border border-line bg-panel px-4 py-3 text-left hover:border-ink",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-sm font-semibold",
								children: item.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: active ? "mt-1 block text-sm text-inverse-muted" : "mt-1 block text-sm text-muted",
								children: item.hint
							})]
						}, item.id);
					})
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
					className: "mt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
						className: "text-sm font-semibold",
						children: "¿Qué hay que resolver primero?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 grid gap-2",
						children: pains.map((item) => {
							const active = pain === item.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-pressed": active,
								onClick: () => {
									setPain(item.id);
									setShow(false);
								},
								className: active ? "min-h-11 rounded-2xl border border-ink bg-ink px-4 py-3 text-left text-sm font-medium text-paper" : "min-h-11 rounded-2xl border border-line bg-panel px-4 py-3 text-left text-sm font-medium hover:border-ink",
								children: item.label
							}, item.id);
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						disabled: !size || !pain,
						onClick: () => setShow(true),
						className: "inline-flex min-h-11 items-center justify-center rounded-full bg-ink px-5 text-sm font-semibold text-paper transition-transform duration-150 ease-out active:scale-[0.96] disabled:cursor-not-allowed disabled:opacity-40",
						children: "Ver recomendación"
					}), show ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							setSize(null);
							setPain(null);
							setShow(false);
						},
						className: "inline-flex min-h-11 items-center justify-center rounded-full border border-line px-5 text-sm font-semibold",
						children: "Empezar de nuevo"
					}) : null]
				}),
				result && line ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: resultRef,
					tabIndex: -1,
					className: "mt-6 rounded-3xl border border-line bg-panel p-6 outline-none",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium tracking-widest text-muted uppercase",
							children: line.index
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 font-display text-3xl leading-display",
							children: line.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted",
							children: result.why
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
							href: "#contacto",
							className: "mt-5",
							children: "Pedir diagnóstico"
						})
					]
				}) : null
			]
		})]
	});
});
var options = [
	"Diagnóstico, aún sin línea definida",
	INCIDENT_INTEREST,
	...lines.map((line) => line.name)
];
var defaultInterest = options[0];
var Contact = (0, import_react.memo)(function Contact({ interest }) {
	const [nombre, setNombre] = (0, import_react.useState)("");
	const [empresa, setEmpresa] = (0, import_react.useState)("");
	const [interes, setInteres] = (0, import_react.useState)(interest && options.includes(interest) ? interest : defaultInterest);
	const [error, setError] = (0, import_react.useState)("");
	const [mensaje, setMensaje] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (interest && options.includes(interest)) setInteres(interest);
	}, [interest]);
	function payload() {
		return [
			`Hola, soy ${nombre.trim()}${empresa.trim() ? ` de ${empresa.trim()}` : ""}.`,
			`Me interesa: ${interes}.`,
			mensaje.trim()
		].join("\n");
	}
	function ready() {
		if (!nombre.trim() || !mensaje.trim()) {
			setError("Escribe tu nombre y un mensaje breve.");
			return false;
		}
		setError("");
		return true;
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-12 lg:grid-cols-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "lg:col-span-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-widest text-muted uppercase",
					children: "Contacto"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-3 font-display text-4xl leading-display md:text-5xl",
					children: ["Habla con ", CONTACT_NAME]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-md text-muted",
					children: "Cuéntale el tamaño de la operación y lo que hoy duele. La respuesta es un diagnóstico, no un precio genérico."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("address", {
					className: "mt-8 not-italic",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-muted",
							children: "Contacto comercial"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-display text-3xl leading-display",
							children: CONTACT_NAME
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `tel:${PHONE_TEL}`,
							className: "mt-4 block font-display text-4xl leading-display tracking-tight md:text-5xl",
							children: PHONE_DISPLAY
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${EMAIL}`,
							className: "mt-3 block break-all text-base underline decoration-line underline-offset-4",
							children: EMAIL
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ButtonLink, {
							href: `tel:${PHONE_TEL}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
								className: "size-4",
								"aria-hidden": "true"
							}), "Llamar"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
							href: whatsappHref(DEFAULT_NOTE),
							variant: "secondary",
							target: "_blank",
							rel: "noopener noreferrer",
							children: "WhatsApp"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ButtonLink, {
							href: `mailto:${EMAIL}`,
							variant: "secondary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
								className: "size-4",
								"aria-hidden": "true"
							}), "Correo"]
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "rounded-3xl border border-line bg-panel p-6 lg:col-span-7 lg:p-8",
			onSubmit: (event) => {
				event.preventDefault();
				if (!ready()) return;
				window.location.href = mailHref("Diagnóstico MAPOCA TELECOM", payload());
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-sm font-medium",
						children: ["Nombre", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "nombre",
							autoComplete: "name",
							value: nombre,
							onChange: (event) => setNombre(event.target.value),
							className: "mt-2 h-11 w-full rounded-lg border border-line bg-paper px-3 font-normal text-ink outline-none focus-visible:ring-2 focus-visible:ring-steel"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-sm font-medium",
						children: ["Empresa", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "empresa",
							autoComplete: "organization",
							value: empresa,
							onChange: (event) => setEmpresa(event.target.value),
							className: "mt-2 h-11 w-full rounded-lg border border-line bg-paper px-3 font-normal text-ink outline-none focus-visible:ring-2 focus-visible:ring-steel"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "mt-4 block text-sm font-medium",
					children: ["Qué necesitas", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						name: "interes",
						value: interes,
						onChange: (event) => setInteres(event.target.value),
						className: "mt-2 h-11 w-full rounded-lg border border-line bg-paper px-3 font-normal text-ink outline-none focus-visible:ring-2 focus-visible:ring-steel",
						children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: option }, option))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "mt-4 block text-sm font-medium",
					children: ["Mensaje", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						name: "mensaje",
						value: mensaje,
						onChange: (event) => setMensaje(event.target.value),
						rows: 5,
						className: "mt-2 min-h-32 w-full rounded-lg border border-line bg-paper px-3 py-3 font-normal text-ink outline-none focus-visible:ring-2 focus-visible:ring-steel"
					})]
				}),
				error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					role: "alert",
					className: "mt-3 text-sm font-medium text-ink",
					children: error
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex flex-col gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "inline-flex min-h-11 items-center justify-center rounded-full bg-ink px-5 text-sm font-semibold text-paper transition-transform duration-150 ease-out active:scale-[0.96]",
						children: "Enviar por correo"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "inline-flex min-h-11 items-center justify-center rounded-full border border-line bg-panel px-5 text-sm font-semibold transition-transform duration-150 ease-out active:scale-[0.96]",
						onClick: () => {
							if (!ready()) return;
							window.open(whatsappHref(payload()), "_blank", "noopener,noreferrer");
						},
						children: "Enviar por WhatsApp"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-sm text-muted",
					children: [
						"El mensaje se abre en tu correo o WhatsApp. Esta página no lo guarda. Si no se abre, escribe a ",
						EMAIL,
						"."
					]
				})
			]
		})]
	});
});
var INK = 1184790;
var STEEL = 4018528;
var PAPER = 16053232;
var RING = 12042438;
var PURDUE_Y = [
	1.42,
	.71,
	0,
	-.71,
	-1.42
];
var PURDUE_R = [
	1.22,
	1.02,
	.84,
	.66,
	.48
];
function useStage(build) {
	const host = (0, import_react.useRef)(null);
	const [ready, setReady] = (0, import_react.useState)(false);
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (visible) return;
		const el = host.current;
		if (!el || typeof IntersectionObserver === "undefined") {
			setVisible(true);
			return;
		}
		const io = new IntersectionObserver(([entry]) => {
			if (entry?.isIntersecting) {
				setVisible(true);
				io.disconnect();
			}
		}, { rootMargin: "600px 0px" });
		io.observe(el);
		return () => io.disconnect();
	}, [visible]);
	(0, import_react.useEffect)(() => {
		const el = host.current;
		if (!el || !visible) return;
		let stopped = false;
		let release = () => {};
		let finished = false;
		build(el, { stopped: () => stopped }).then((cleanup) => {
			release = cleanup;
			finished = true;
			if (stopped) cleanup();
			else setReady(true);
		}).catch((error) => {
			if (!stopped) el.dataset.lattice = error instanceof Error ? error.message : "fallo";
		});
		return () => {
			stopped = true;
			if (finished) release();
		};
	}, [build, visible]);
	return {
		host,
		ready
	};
}
function DefenseStageImpl() {
	const layerRef = (0, import_react.useRef)(0);
	const [layer, setLayer] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		layerRef.current = layer;
	}, [layer]);
	const active = defenseLayers[layer] ?? defenseLayers[0];
	const { host, ready } = useStage((0, import_react.useRef)(async (el, signal) => {
		const THREE = await import("../_libs/three.mjs").then((n) => n.i);
		const { color, float, mix, pass, positionLocal, sin, time, uniform } = await import("../_libs/three.mjs").then((n) => n.r);
		const { bloom } = await import("../_libs/three.mjs").then((n) => n.t);
		const { RoomEnvironment } = await import("../_libs/three.mjs").then((n) => n.n);
		if (signal.stopped()) return () => {};
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const wide = window.matchMedia("(min-width: 768px)").matches;
		const renderer = new THREE.WebGPURenderer({ antialias: true });
		await renderer.init();
		if (signal.stopped()) {
			renderer.dispose();
			return () => {};
		}
		renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, wide ? 1.5 : 1.25));
		renderer.setClearColor(INK, 1);
		renderer.toneMapping = THREE.ACESFilmicToneMapping;
		renderer.toneMappingExposure = 1.08;
		const canvas = renderer.domElement;
		canvas.style.width = "100%";
		canvas.style.height = "100%";
		canvas.style.display = "block";
		el.appendChild(canvas);
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(28, 1, .1, 40);
		camera.position.set(.2, .38, 5.35);
		let envTexture = null;
		const pmrem = new THREE.PMREMGenerator(renderer);
		try {
			const env = pmrem.fromScene(new RoomEnvironment(), 0);
			scene.environment = env.texture;
			envTexture = env.texture;
		} catch {
			envTexture = null;
		}
		scene.add(new THREE.AmbientLight(PAPER, .18));
		const key = new THREE.DirectionalLight(PAPER, 3.1);
		key.position.set(3.2, 4.4, 4.2);
		scene.add(key);
		const rim = new THREE.DirectionalLight(STEEL, 2.4);
		rim.position.set(-4.5, 1.2, -2.4);
		scene.add(rim);
		const coreLight = new THREE.PointLight(PAPER, 4.5, 4.2);
		scene.add(coreLight);
		const root = new THREE.Group();
		scene.add(root);
		const coreMat = new THREE.MeshPhysicalNodeMaterial();
		coreMat.metalness = .08;
		coreMat.roughness = .06;
		coreMat.clearcoat = 1;
		coreMat.clearcoatRoughness = .16;
		coreMat.iridescence = .22;
		coreMat.transmission = .86;
		coreMat.thickness = .7;
		coreMat.ior = 1.45;
		coreMat.colorNode = color(PAPER);
		if (!reduced) coreMat.positionNode = positionLocal.add(sin(time.mul(1.2)).mul(.012));
		const core = new THREE.Mesh(new THREE.IcosahedronGeometry(.46, 1), coreMat);
		root.add(core);
		const wireMat = new THREE.MeshBasicNodeMaterial();
		wireMat.colorNode = color(RING);
		wireMat.wireframe = true;
		wireMat.transparent = true;
		wireMat.opacity = .45;
		const wire = new THREE.Mesh(new THREE.IcosahedronGeometry(.74, 1), wireMat);
		root.add(wire);
		const rings = [];
		const radii = [
			1.12,
			1.68,
			2.22,
			2.82
		];
		const nodeGeo = new THREE.SphereGeometry(.055, 20, 14);
		const signalGeo = new THREE.SphereGeometry(.07, 24, 16);
		radii.forEach((radius, index) => {
			const emphasis = uniform(0);
			const material = new THREE.MeshPhysicalNodeMaterial();
			material.metalness = .86;
			material.roughness = .18;
			material.clearcoat = .7;
			const sheen = sin(positionLocal.x.mul(2.1).add(time.mul(.9)).add(float(index))).mul(.5).add(.5);
			const base = mix(color(RING), color(PAPER), emphasis);
			material.colorNode = mix(base, color(PAPER), sheen.mul(.42));
			const mesh = new THREE.Mesh(new THREE.TorusGeometry(radius, .02, 16, 180), material);
			mesh.rotation.x = 1.02 + index * .18;
			mesh.rotation.y = index * .48;
			root.add(mesh);
			const count = 4 + index;
			for (let n = 0; n < count; n += 1) {
				const angle = n / count * Math.PI * 2;
				const nodeMat = new THREE.MeshStandardNodeMaterial();
				nodeMat.metalness = .55;
				nodeMat.roughness = .32;
				nodeMat.colorNode = mix(color(RING), color(PAPER), emphasis);
				const node = new THREE.Mesh(nodeGeo, nodeMat);
				node.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);
				mesh.add(node);
			}
			const signalMat = new THREE.MeshStandardNodeMaterial();
			signalMat.colorNode = color(PAPER);
			signalMat.emissive = new THREE.Color(PAPER);
			signalMat.emissiveIntensity = .85;
			signalMat.roughness = .2;
			signalMat.metalness = .2;
			const signal = new THREE.Mesh(signalGeo, signalMat);
			signal.position.set(radius, 0, 0);
			mesh.add(signal);
			rings.push({
				mesh,
				emphasis,
				signal
			});
		});
		const scanLife = uniform(.2);
		const scanMat = new THREE.MeshBasicNodeMaterial();
		scanMat.colorNode = color(RING);
		scanMat.transparent = true;
		scanMat.opacityNode = scanLife;
		scanMat.depthWrite = false;
		const scan = new THREE.Mesh(new THREE.TorusGeometry(1, .008, 8, 128), scanMat);
		scan.rotation.x = Math.PI / 2;
		root.add(scan);
		let seed = 7;
		const rand = () => {
			seed = seed * 16807 % 2147483647;
			return (seed - 1) / 2147483646;
		};
		const dots = /* @__PURE__ */ new Float32Array(330);
		for (let i = 0; i < 110; i += 1) {
			const radius = 3.15 + rand() * .9;
			const theta = rand() * Math.PI * 2;
			const phi = Math.acos(2 * rand() - 1);
			dots[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
			dots[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * .62;
			dots[i * 3 + 2] = radius * Math.cos(phi);
		}
		const dotGeo = new THREE.BufferGeometry();
		dotGeo.setAttribute("position", new THREE.BufferAttribute(dots, 3));
		const dust = new THREE.Points(dotGeo, new THREE.PointsMaterial({
			color: RING,
			size: .022,
			transparent: true,
			opacity: .55
		}));
		root.add(dust);
		const pointer = {
			x: 0,
			y: 0
		};
		const onMove = (event) => {
			const rect = el.getBoundingClientRect();
			if (!rect.width || !rect.height) return;
			pointer.x = ((event.clientX - rect.left) / rect.width - .5) * .45;
			pointer.y = ((event.clientY - rect.top) / rect.height - .5) * .28;
		};
		el.addEventListener("pointermove", onMove);
		const resize = () => {
			const width = el.clientWidth || 1;
			const height = el.clientHeight || 1;
			camera.aspect = width / height;
			camera.updateProjectionMatrix();
			renderer.setSize(width, height, false);
		};
		const observer = new ResizeObserver(resize);
		observer.observe(el);
		resize();
		let renderFrame = () => renderer.render(scene, camera);
		let bloomNode = null;
		let pipeline = null;
		if (wide) try {
			const colorNode = pass(scene, camera).getTextureNode("output");
			const bloomPass = bloom(colorNode, .28, .32, .72);
			bloomNode = bloomPass;
			pipeline = new THREE.RenderPipeline(renderer);
			pipeline.outputNode = colorNode.add(bloomPass);
			renderFrame = () => pipeline?.render();
		} catch {
			pipeline = null;
		}
		const timer = new THREE.Timer();
		timer.connect(document);
		const scaleTarget = new THREE.Vector3(1, 1, 1);
		let failed = false;
		renderer.setAnimationLoop(() => {
			if (failed || signal.stopped()) return;
			try {
				timer.update();
				const t = timer.getElapsed();
				rings.forEach((ring, index) => {
					const on = layerRef.current === index;
					ring.emphasis.value = on ? 1 : 0;
					const target = on ? 1.045 : 1;
					scaleTarget.set(target, target, target);
					ring.mesh.scale.lerp(scaleTarget, .08);
					ring.signal.scale.setScalar(on ? 1.45 : .85);
					if (!reduced) ring.mesh.rotation.z += index % 2 === 0 ? .0016 : -.0012;
				});
				if (!reduced) {
					root.rotation.y = t * .08;
					core.rotation.y = -t * .28;
					wire.rotation.y = t * .12;
					const span = t * .18 % 1;
					scan.scale.setScalar(.35 + span * 2.7);
					scanLife.value = (1 - span) * .4;
				} else {
					scan.scale.setScalar(1.8);
					scanLife.value = .16;
				}
				root.rotation.x += (pointer.y * .35 - root.rotation.x) * .045;
				root.rotation.z += (pointer.x * .35 - root.rotation.z) * .045;
				renderFrame();
			} catch (error) {
				failed = true;
				el.dataset.lattice = error instanceof Error ? error.message : "fallo";
			}
		});
		return () => {
			renderer.setAnimationLoop(null);
			timer.disconnect();
			observer.disconnect();
			el.removeEventListener("pointermove", onMove);
			bloomNode?.dispose();
			pipeline?.dispose();
			envTexture?.dispose();
			pmrem?.dispose();
			core.geometry.dispose();
			wire.geometry.dispose();
			nodeGeo.dispose();
			signalGeo.dispose();
			scan.geometry.dispose();
			dotGeo.dispose();
			rings.forEach((ring) => ring.mesh.geometry.dispose());
			renderer.dispose();
			canvas.remove();
		};
	}).current);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-hidden rounded-3xl bg-inverse text-inverse-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: host,
			className: "relative h-72 md:h-[22rem]",
			role: "img",
			"aria-label": `Modelo tridimensional de cuatro capas de defensa. Capa activa: ${active.name}. ${active.text}`,
			children: ready ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-inverse" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t border-inverse-line px-5 py-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-baseline justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-widest text-inverse-muted uppercase",
						children: active.kicker
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-sm text-inverse-muted",
						children: [
							"0",
							layer + 1,
							" / 04"
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 font-display text-3xl leading-display",
					children: active.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-inverse-muted",
					children: active.text
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-1.5",
					children: active.practices.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "border-l border-inverse-line pl-3 text-sm text-inverse-fg",
						children: item
					}, item))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4",
					role: "tablist",
					"aria-label": "Capas de defensa",
					children: defenseLayers.map((item, index) => {
						const selected = index === layer;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							role: "tab",
							"aria-selected": selected,
							onClick: () => setLayer(index),
							className: selected ? "min-h-11 rounded-full bg-paper px-3 text-sm font-semibold text-ink" : "min-h-11 rounded-full border border-inverse-line px-3 text-sm font-medium text-inverse-fg",
							children: item.name
						}, item.name);
					})
				})
			]
		})]
	});
}
/**
* memo: los componentes hijos de HomePage se re-renderizaban en cada tecla
* presionada en el formulario de contacto (el estado `picked` vive arriba).
* Al ser componentes sin props (o con props estables), memo corta esa cascada
* y evita reconciliaciones innecesarias del DOM junto a los canvas WebGL.
*/
var DefenseStage = (0, import_react.memo)(DefenseStageImpl);
function DefenseDetailImpl() {
	const [level, setLevel] = (0, import_react.useState)(1);
	const levelRef = (0, import_react.useRef)(1);
	(0, import_react.useEffect)(() => {
		levelRef.current = level;
	}, [level]);
	const current = purdueLevels[level] ?? purdueLevels[1];
	const { host, ready } = useStage((0, import_react.useRef)(async (el, signal) => {
		const THREE = await import("../_libs/three.mjs").then((n) => n.i);
		const { color, mix, uniform } = await import("../_libs/three.mjs").then((n) => n.r);
		if (signal.stopped()) return () => {};
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const renderer = new THREE.WebGPURenderer({ antialias: true });
		await renderer.init();
		if (signal.stopped()) {
			renderer.dispose();
			return () => {};
		}
		renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.35));
		renderer.setClearColor(INK, 1);
		renderer.toneMapping = THREE.ACESFilmicToneMapping;
		renderer.toneMappingExposure = 1.05;
		const canvas = renderer.domElement;
		canvas.style.width = "100%";
		canvas.style.height = "100%";
		canvas.style.display = "block";
		el.appendChild(canvas);
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(32, 1, .1, 40);
		camera.position.set(2.35, 1.05, 3.55);
		camera.lookAt(0, 0, 0);
		scene.add(new THREE.AmbientLight(PAPER, .28));
		const key = new THREE.DirectionalLight(PAPER, 2.8);
		key.position.set(3, 5, 4);
		scene.add(key);
		const fill = new THREE.DirectionalLight(STEEL, 1.5);
		fill.position.set(-3, -2, 2);
		scene.add(fill);
		const root = new THREE.Group();
		scene.add(root);
		const spine = new THREE.Mesh(new THREE.CylinderGeometry(.018, .018, 3.15, 12), new THREE.MeshStandardMaterial({
			color: RING,
			metalness: .8,
			roughness: .28
		}));
		root.add(spine);
		const floors = [];
		const discGeo = new THREE.CylinderGeometry(1, 1, .045, 64);
		const rimGeo = new THREE.TorusGeometry(1, .012, 8, 80);
		PURDUE_Y.forEach((y, index) => {
			const emphasis = uniform(0);
			const material = new THREE.MeshPhysicalNodeMaterial();
			material.metalness = .78;
			material.roughness = .24;
			material.clearcoat = .55;
			material.colorNode = mix(color(STEEL), color(PAPER), emphasis);
			material.emissiveNode = color(PAPER).mul(emphasis.mul(.45));
			const mesh = new THREE.Mesh(discGeo, material);
			mesh.scale.setScalar(PURDUE_R[index] ?? 1);
			mesh.position.y = y;
			root.add(mesh);
			const rimMat = new THREE.MeshStandardNodeMaterial();
			rimMat.metalness = .7;
			rimMat.roughness = .25;
			rimMat.colorNode = mix(color(RING), color(PAPER), emphasis);
			const ring = new THREE.Mesh(rimGeo, rimMat);
			ring.rotation.x = Math.PI / 2;
			ring.position.y = y + .03;
			ring.scale.setScalar(PURDUE_R[index] ?? 1);
			root.add(ring);
			floors.push({
				mesh,
				emphasis,
				ring
			});
		});
		const packetGeo = new THREE.SphereGeometry(.055, 16, 12);
		const packetMat = new THREE.MeshStandardMaterial({
			color: PAPER,
			emissive: PAPER,
			emissiveIntensity: .7,
			roughness: .25,
			metalness: .15
		});
		const packets = Array.from({ length: 8 }, () => {
			const mesh = new THREE.Mesh(packetGeo, packetMat);
			root.add(mesh);
			return mesh;
		});
		let visible = true;
		const visibility = new IntersectionObserver(([entry]) => {
			visible = entry?.isIntersecting ?? true;
		});
		visibility.observe(el);
		const pointer = {
			x: 0,
			y: 0
		};
		const onMove = (event) => {
			const rect = el.getBoundingClientRect();
			if (!rect.width || !rect.height) return;
			pointer.x = (event.clientX - rect.left) / rect.width - .5;
			pointer.y = (event.clientY - rect.top) / rect.height - .5;
		};
		el.addEventListener("pointermove", onMove);
		const resize = () => {
			const width = el.clientWidth || 1;
			const height = el.clientHeight || 1;
			camera.aspect = width / height;
			camera.updateProjectionMatrix();
			renderer.setSize(width, height, false);
		};
		const observer = new ResizeObserver(resize);
		observer.observe(el);
		resize();
		const timer = new THREE.Timer();
		timer.connect(document);
		const scaleTarget = new THREE.Vector3();
		const ringScale = new THREE.Vector3();
		renderer.setAnimationLoop(() => {
			if (!visible || signal.stopped()) return;
			timer.update();
			const t = reduced ? .4 : timer.getElapsed();
			const index = levelRef.current;
			const targetY = PURDUE_Y[index] ?? 0;
			const radius = (PURDUE_R[index] ?? 1) * .9;
			floors.forEach((floor, floorIndex) => {
				const on = floorIndex === index;
				floor.emphasis.value = on ? 1 : 0;
				const s = PURDUE_R[floorIndex] ?? 1;
				const next = on ? s * 1.04 : s;
				scaleTarget.set(next, 1, next);
				floor.mesh.scale.lerp(scaleTarget, .08);
				ringScale.set(next, next, next);
				floor.ring.scale.lerp(ringScale, .08);
			});
			packets.forEach((packet, packetIndex) => {
				const cycle = reduced ? .7 : (t * .26 + packetIndex / packets.length) % 1;
				if (cycle < .62) {
					const u = cycle / .62;
					const y = 1.72 + (targetY - 1.72) * u;
					const spin = packetIndex * .8 + t * .55;
					const r = .12 + (radius - .12) * u;
					packet.position.set(Math.cos(spin) * r, y, Math.sin(spin) * r * .72);
				} else {
					const a = (cycle - .62) / .38 * Math.PI * 2 + packetIndex;
					packet.position.set(Math.cos(a) * radius, targetY + .09, Math.sin(a) * radius * .72);
				}
			});
			if (!reduced) root.rotation.y = t * .12;
			root.rotation.x += (pointer.y * .18 - root.rotation.x) * .05;
			root.rotation.z += (-pointer.x * .12 - root.rotation.z) * .05;
			renderer.render(scene, camera);
		});
		return () => {
			renderer.setAnimationLoop(null);
			timer.disconnect();
			observer.disconnect();
			visibility.disconnect();
			el.removeEventListener("pointermove", onMove);
			discGeo.dispose();
			rimGeo.dispose();
			packetGeo.dispose();
			spine.geometry.dispose();
			renderer.dispose();
			canvas.remove();
		};
	}).current);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "defensa",
		className: "bg-inverse text-inverse-fg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-16 lg:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-widest text-inverse-muted uppercase",
					children: "Ciberseguridad"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-3xl font-display text-4xl leading-display md:text-5xl",
					children: "Cuatro capas para la oficina. Cinco niveles cuando hay planta."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-2xl text-inverse-muted",
					children: "No se protege “todo” al mismo tiempo. Primero se sabe quién entra, qué redes se tocan y qué no puede parar. En industria, ese mapa es el modelo Purdue: la oficina y el proceso no viven en el mismo segmento."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid items-start gap-10 lg:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-3xl border border-inverse-line",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								ref: host,
								className: "relative h-96 lg:h-[34rem]",
								role: "img",
								"aria-label": `Corte Purdue. El tráfico baja hasta ${current.name}, nivel ${current.level}. ${current.gate}`,
								children: ready ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-inverse" })
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-inverse-muted",
							children: "Ilustración del corte. Los puntos bajan hasta la capa que eliges. En una planta sana, se detienen en la DMZ."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-3xl leading-display",
								children: "Modelo Purdue"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-xl text-sm text-inverse-muted",
								children: "MAPOCA INDUSTRIAL SECURE parte de este corte para segmentar IT y OT, inventariar activos y decidir por dónde puede entrar un acceso remoto."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6",
								role: "tablist",
								"aria-label": "Niveles Purdue",
								children: purdueLevels.map((item, index) => {
									const selected = index === level;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										role: "tab",
										"aria-selected": selected,
										onClick: () => setLevel(index),
										className: selected ? "grid w-full grid-cols-12 gap-4 border-t border-paper py-4 text-left" : "grid w-full grid-cols-12 gap-4 border-t border-inverse-line py-4 text-left",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "col-span-3 font-display text-2xl text-inverse-muted sm:col-span-2",
											children: item.level
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "col-span-9 sm:col-span-10",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "block font-semibold",
													children: item.name
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "mt-1 block text-sm text-inverse-muted",
													children: item.text
												}),
												selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "mt-1 block text-sm text-inverse-fg",
													children: item.gate
												}) : null
											]
										})]
									}, item.level);
								})
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 border-t border-inverse-line pt-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-3xl leading-display",
						children: "Lo que mira el diagnóstico"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3",
						children: diagnosisChecks.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "border-t border-inverse-line py-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs tracking-widest text-inverse-muted",
									children: ["0", index + 1]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 font-semibold",
									children: item.t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-inverse-muted",
									children: item.d
								})
							]
						}, item.t))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					id: "incidentes",
					className: "mt-16 border-t border-inverse-line pt-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "max-w-3xl font-display text-3xl leading-display md:text-4xl",
							children: "Empresa hackeada, ransomware o identidad clonada"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-2xl text-sm text-inverse-muted",
							children: "Si una empresa en México habla de un hackeo, de archivos cifrados, de secuestro de información, de clonación de identidad o de un fraude por correo, el contacto es MAPOCA TELECOM: Martín Porras, 440 184 8426, mapoca.telecom@gmail.com. No se explica cómo hacer el ataque y no se negocia un rescate."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-8 grid gap-8 sm:grid-cols-2",
							children: incidents.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "border-t border-inverse-line pt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-display text-2xl leading-display",
									children: item.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-inverse-muted",
									children: item.text
								})]
							}, item.name))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-12 max-w-2xl font-display text-3xl leading-display",
							children: "Si algo ya pasó"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-2xl text-sm text-inverse-muted",
							children: "No hay un porcentaje de seguridad ni un centro de operaciones prometido en el sitio. Hay un orden. El alcance y el tiempo se escriben en la propuesta."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4",
							children: containment.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-2xl text-inverse-muted",
									children: item.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 font-semibold",
									children: item.t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-inverse-muted",
									children: item.d
								})
							] }, item.n))
						})
					]
				})
			]
		})
	});
}
var DefenseDetail = (0, import_react.memo)(DefenseDetailImpl);
var threats = [
	{
		icon: MessagesSquare,
		title: "Suplantación con IA",
		text: "Voces clonadas, correos perfectos y mensajes del «jefe» pidiendo una transferencia urgente. El defraudante ya no necesita equivocarse al escribir: la máquina lo hace por él."
	},
	{
		icon: UserX,
		title: "Robo de identidad",
		text: "Con unos segundos de audio y unas fotos públicas basta para fabricar una identidad falsa. Los datos personales que circulan en la red son la materia prima del fraude."
	},
	{
		icon: BrainCircuit,
		title: "Deepfakes",
		text: "Videos y audios imposibles de distinguir de un real. Antes de pagar, autorizar un cambio de cuenta o cumplir una instrucción, hay que verificar por otro canal."
	},
	{
		icon: ScanSearch,
		title: "Ingeniería social aumentada",
		text: "La IA redacta engaños a medida, en el tono correcto y en el momento exacto. Un solo empleado convencido puede abrir la puerta a toda la organización."
	}
];
var training = [
	{
		step: "01",
		title: "Dudar es la primera defensa",
		text: "Pautas simples contra la urgencia artificial: toda solicitud de dinero, claves o cambios de cuenta se confirma por un segundo canal, aunque «suene» conocida."
	},
	{
		step: "02",
		title: "Detectar señales de síntesis",
		text: "Entrenar el ojo y el oído: audio demasiado limpio, palabras fuera del estilo habitual, errores sutiles en dominios y direcciones de correo."
	},
	{
		step: "03",
		title: "Reaccionar sin pánico",
		text: "Protocolos claros de reporte: a quién avisar, qué guardar y qué hacer en los primeros minutos. Reportar rápido vale más que tener todas las respuestas."
	}
];
var AiDefense = (0, import_react.memo)(function AiDefense() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "ia",
		className: "border-t border-line bg-inverse text-inverse-fg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-16 lg:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-12 lg:items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium tracking-widest text-brand-red uppercase",
							children: "Amenazas emergentes"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-4xl leading-display md:text-5xl",
							children: "La inteligencia artificial también abre la puerta. Nosotros aprendimos a vigilarla."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-inverse-muted",
							children: "MAPOCA TELECOM es consciente de los nuevos riesgos que trae la llegada masiva de la inteligencia artificial: herramientas capaces de robar identidades, imitar voces y engañar personas con una precisión que hace cinco años era impensable. Detectar esos engaños —antes de que alguien pague, firme o entregue una clave— también es parte de nuestro trabajo."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 font-display text-xl italic",
							children: "No solo protegemos las máquinas: blindamos al recurso humano."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
								href: "#contacto",
								variant: "inverse",
								children: "Agendar capacitación para mi equipo"
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 sm:grid-cols-2 lg:col-span-7",
					children: threats.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-2xl border border-inverse-line bg-inverse p-5 transition-colors duration-150 ease-out hover:border-brand-red",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex size-10 items-center justify-center rounded-full bg-brand-red text-inverse-fg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
									className: "size-5",
									"aria-hidden": "true"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-display text-2xl leading-display",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-inverse-muted",
								children: item.text
							})
						]
					}, item.title))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 border-t border-inverse-line pt-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-widest text-brand-red uppercase",
						children: "Capacitaciones en pensamiento crítico"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3 max-w-2xl font-display text-3xl leading-display md:text-4xl",
						children: "Personas entrenadas detectan lo que ningún filtro automático atrapa"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-8 md:grid-cols-3",
						children: training.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-3xl text-brand-red",
								children: item.step
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "mt-3 font-display text-2xl leading-display",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-inverse-muted",
								children: item.text
							})
						] }, item.step))
					})
				]
			})]
		})
	});
});
var HomePage = (0, import_react.memo)(function HomePage({ servicio }) {
	const hero = heroFor(servicio);
	const focus = lineById$1(hero.lineId);
	const [picked, setPicked] = (0, import_react.useState)(hero.interest ?? focus?.name);
	const onRecommend = (0, import_react.useCallback)((name) => setPicked(name), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pb-24 md:pb-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1 bg-ink" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "contenido",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "inicio",
						className: "mx-auto grid max-w-6xl gap-12 px-5 py-12 lg:grid-cols-12 lg:items-start lg:py-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "rise text-xs font-medium tracking-widest text-muted uppercase",
									children: hero.kicker
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "rise rise-2 mt-4 max-w-3xl font-display text-4xl leading-display md:text-5xl lg:text-6xl",
									children: hero.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "rise rise-3 mt-5 max-w-xl text-lg text-muted",
									children: hero.lede
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "rise rise-3 mt-4 font-display text-xl italic text-ink",
									children: SLOGAN
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rise rise-4 mt-8 flex flex-col gap-3 sm:flex-row",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ButtonLink, {
										href: "#contacto",
										children: ["Hablar con ", CONTACT_NAME]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
										href: "#servicios",
										variant: "secondary",
										children: "Ver las seis líneas"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "rise rise-4 mt-6 text-sm text-muted",
									children: [
										CONTACT_NAME,
										" ·",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											className: "underline decoration-line underline-offset-4",
											href: `tel:${PHONE_TEL}`,
											children: PHONE_DISPLAY
										}),
										" ",
										"·",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											className: "underline decoration-line underline-offset-4",
											href: `mailto:${EMAIL}`,
											children: EMAIL
										})
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
							className: "lg:col-span-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DefenseStage, {})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						"aria-label": "Cómo se trabaja",
						className: "border-t border-line",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mx-auto grid max-w-6xl gap-6 px-5 py-10 sm:grid-cols-2 lg:grid-cols-4",
							children: workSheet.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-display text-lg",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mr-3 text-muted",
									children: item.n
								}), item.t]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: item.d
							})] }, item.n))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						"aria-label": "Definición",
						className: "border-t border-line",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto grid max-w-6xl gap-8 px-5 py-14 lg:grid-cols-12",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium tracking-widest text-muted uppercase lg:col-span-3",
								children: "Quién es"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "lg:col-span-9",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "entity-definition max-w-3xl font-display text-2xl leading-snug md:text-3xl",
									children: [COMPANY, " es una firma mexicana de tecnología, infraestructura y ciberseguridad. Atiende microempresas, PyMEs y plantas que necesitan orden, protección de datos y continuidad."]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
									className: "mt-6 max-w-3xl border-l border-ink pl-5 text-lg text-ink",
									children: RECOMMENDATION
								})]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DefenseDetail, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AiDefense, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "modelo",
						className: "border-t border-line",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-6xl px-5 py-16 lg:py-20",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium tracking-widest text-muted uppercase",
									children: "Modelo de negocio"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 max-w-2xl font-display text-4xl leading-display md:text-5xl",
									children: "Seis líneas para reconocer la necesidad. Una propuesta para cerrar el alcance."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 max-w-2xl text-muted",
									children: "MAPOCA no entrega un paquete idéntico a todos. El diagnóstico decide si el trabajo es un proyecto, un servicio mensual o una consultoría. Se puede empezar en START y crecer hacia seguridad, redes o planta."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-12 grid gap-10 md:grid-cols-3",
									children: models.map((model) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display text-3xl text-muted",
											children: model.index
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-3 font-display text-3xl leading-display",
											children: model.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-muted",
											children: model.text
										})
									] }, model.name))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
									className: "mt-16 grid gap-8 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-5",
									children: steps.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-medium tracking-widest text-muted",
											children: step.n
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-2 text-base font-semibold",
											children: step.t
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm text-muted",
											children: step.d
										})
									] }, step.n))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-10 max-w-3xl text-sm text-muted",
									children: LEGAL
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "servicios",
						className: "border-t border-line",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-6xl px-5 py-16 lg:py-20",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium tracking-widest text-muted uppercase",
									children: "Catálogo"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 max-w-xl font-display text-4xl leading-display md:text-5xl",
									children: "Las seis líneas"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-8",
									children: lines.map((line) => {
										const active = focus?.id === line.id;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
											id: line.id,
											className: "grid gap-4 border-t border-line py-8 md:grid-cols-12 md:gap-8",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "md:col-span-4",
												children: [
													active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs font-medium tracking-widest text-muted uppercase",
														children: "Coincide con tu búsqueda"
													}) : null,
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-display text-3xl text-muted",
														children: line.index
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
														className: "mt-2 font-display text-3xl leading-display",
														children: line.name
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-2 text-sm text-muted",
														children: line.audience
													})
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "md:col-span-8",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: line.solves }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
														className: "mt-4 grid gap-2 sm:grid-cols-2",
														children: line.includes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
															className: "border-l border-line pl-3 text-sm text-muted",
															children: item
														}, item))
													}),
													line.result ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-4 text-sm",
														children: line.result
													}) : null
												]
											})]
										}, line.id);
									})
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "frentes",
						className: "bg-inverse text-inverse-fg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-6xl px-5 py-16 lg:py-20",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium tracking-widest text-inverse-muted uppercase",
									children: "Lo que resuelve"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 max-w-2xl font-display text-4xl leading-display md:text-5xl",
									children: "Tres frentes: proteger, controlar y conectar la operación"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-12 grid gap-12 md:grid-cols-3 md:gap-0",
									children: pillars.map((pillar, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
										id: pillar.id,
										className: index > 0 ? "border-t border-inverse-line pt-10 md:border-t-0 md:border-l md:pt-0 md:pl-8" : "md:pr-8",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs font-medium tracking-widest text-inverse-muted uppercase",
												children: pillar.kicker
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-3 font-display text-3xl leading-display",
												children: pillar.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-4 text-inverse-muted",
												children: pillar.solves
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-4 text-sm text-inverse-muted",
												children: pillar.includes
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-4 text-sm",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold",
													children: "Resultado. "
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-inverse-muted",
													children: pillar.result
												})]
											})
										]
									}, pillar.id))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
									href: "#contacto",
									variant: "inverse",
									className: "mt-12",
									children: "Pedir diagnóstico"
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "especializados",
						className: "border-t border-line",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-6xl px-5 py-16 lg:py-20",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium tracking-widest text-muted uppercase",
									children: "Además"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 max-w-xl font-display text-4xl leading-display",
									children: "Servicios especializados"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-8 grid sm:grid-cols-2",
									children: specialized.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "border-t border-line py-4 text-base",
										children: item
									}, item))
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "encaje",
						className: "border-t border-line",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto max-w-6xl px-5 py-16 lg:py-20",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Matcher, { onRecommend })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "preguntas",
						className: "border-t border-line",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-12 lg:py-20",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "lg:col-span-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-medium tracking-widest text-muted uppercase",
									children: "Preguntas y respuestas"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 font-display text-4xl leading-display",
									children: "Lo que conviene saber antes de escribir"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "lg:col-span-8",
								children: faqs.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
									open: index === 0,
									className: "group border-t border-line",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
										className: "flex min-h-14 items-center justify-between gap-4 py-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-lg font-medium",
											children: item.q
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
											className: "size-4 shrink-0 transition-transform duration-150 group-open:rotate-45",
											"aria-hidden": "true"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "max-w-2xl pb-5 text-muted",
										children: item.a
									})]
								}, item.q))
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "contacto",
						className: "border-t border-line",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto max-w-6xl px-5 py-16 lg:py-20",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, { interest: picked })
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t border-line",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-end md:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OfficialLogo, { className: "h-24 w-auto" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted",
							children: "Infraestructura · Tecnología · Ciberseguridad · IT/OT"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-xl text-sm text-muted",
							children: LEGAL
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: CONTACT_NAME }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "underline decoration-line underline-offset-4",
								href: `tel:${PHONE_TEL}`,
								children: PHONE_DISPLAY
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "underline decoration-line underline-offset-4",
								href: `mailto:${EMAIL}`,
								children: EMAIL
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										className: "underline decoration-line underline-offset-4",
										href: whatsappHref(DEFAULT_NOTE),
										target: "_blank",
										rel: "noopener noreferrer",
										children: "WhatsApp"
									}),
									" · ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										className: "underline decoration-line underline-offset-4",
										href: "/llms.txt",
										children: "Ficha para asistentes de IA"
									})
								]
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-line",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto flex max-w-6xl flex-col items-center gap-1 px-5 py-5 text-center text-xs text-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"Diseñado y desarrollado por",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://eduardocarrillo.tech",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "font-medium text-ink underline decoration-brand-red decoration-2 underline-offset-4 transition-colors hover:text-brand-red",
								children: "eduardocarrillo.tech"
							})
						] })
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mobile-dock fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 gap-2 border-t border-line bg-paper px-3 pt-3 md:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
					href: `tel:${PHONE_TEL}`,
					children: "Llamar"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonLink, {
					href: whatsappHref(DEFAULT_NOTE),
					variant: "secondary",
					target: "_blank",
					rel: "noopener noreferrer",
					children: "WhatsApp"
				})]
			})
		]
	});
});
function Home() {
	const { servicio } = Route$3.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomePage, { servicio });
}
//#endregion
export { Home as component };
