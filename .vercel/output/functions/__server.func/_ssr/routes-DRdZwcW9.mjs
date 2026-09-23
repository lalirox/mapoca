import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Menu, i as Phone, o as Mail, r as Plus, t as X } from "../_libs/lucide-react.mjs";
import { C as workSheet, S as whatsappHref, _ as models, a as DEFAULT_NOTE, b as specialized, c as PHONE_DISPLAY, d as SLOGAN, f as faqs, g as mailHref, h as lines, i as CONTACT_NAME, l as PHONE_TEL, m as lineById, n as Route$3, o as EMAIL, p as heroFor, r as COMPANY, s as LEGAL, u as RECOMMENDATION, v as pillars, x as steps, y as recommend } from "./router-BN2C-mCF.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DRdZwcW9.js
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
var links = [
	{
		href: "#modelo",
		label: "Modelo"
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
				className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#inicio",
						className: "flex items-baseline gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-2xl leading-none",
							children: "MAPOCA"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-medium tracking-widest text-muted",
							children: "TELECOM"
						})]
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
function Matcher({ onRecommend }) {
	const [size, setSize] = (0, import_react.useState)(null);
	const [pain, setPain] = (0, import_react.useState)(null);
	const [show, setShow] = (0, import_react.useState)(false);
	const resultRef = (0, import_react.useRef)(null);
	const result = size && pain && show ? recommend(size, pain) : null;
	const line = result ? lines.find((item) => item.id === result.lineId) : void 0;
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
}
var options = ["Diagnóstico, aún sin línea definida", ...lines.map((line) => line.name)];
function Contact({ interest }) {
	const [nombre, setNombre] = (0, import_react.useState)("");
	const [empresa, setEmpresa] = (0, import_react.useState)("");
	const [interes, setInteres] = (0, import_react.useState)(interest && options.includes(interest) ? interest : options[0]);
	const [mensaje, setMensaje] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
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
}
function HomePage({ servicio }) {
	const hero = heroFor(servicio);
	const focus = lineById(hero.lineId);
	const [picked, setPicked] = (0, import_react.useState)(focus?.name);
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
						className: "mx-auto grid max-w-6xl gap-12 px-5 py-12 lg:grid-cols-12 lg:items-end lg:py-16",
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
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
							className: "rise rise-4 rounded-3xl border border-line bg-panel p-6 lg:col-span-5 lg:p-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium tracking-widest text-muted uppercase",
								children: "Cómo se trabaja"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "mt-4",
								children: workSheet.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: index === 0 ? "py-4" : "border-t border-line py-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "font-display text-lg",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mr-3 text-muted",
											children: item.n
										}), item.t]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-muted",
										children: item.d
									})]
								}, item.n))
							})]
						})]
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-end md:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl",
							children: "MAPOCA TELECOM"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
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
				})
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
}
function Home() {
	const { servicio } = Route$3.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomePage, { servicio });
}
//#endregion
export { Home as component };
