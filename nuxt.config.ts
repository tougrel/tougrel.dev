import pkg from "./package.json";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-10-14",
	devtools: { enabled: true },

	nitro: {
		preset: process.env.NITRO_PRESET || "node",
	},

	modules: ["@nuxt/ui", "nuxt-delay-hydration", "@nuxt/image"],
	css: ["~/assets/css/main.css"],

	runtimeConfig: {
		public: {
			clientName: pkg.name,
			clientVersion: pkg.version,
			clientBuild: pkg.build,
		},
	},

	fonts: {
		provider: "bunny",
	},

	icon: {
		serverBundle: "local",
	},

	delayHydration: {
		debug: process.env.NODE_ENV === "development",
		mode: "init",
	},
});
