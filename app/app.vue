<script setup lang="ts">
useSeoMeta({
	title: "Tougrel – From Middle-earth to the Web",
	titleTemplate: "%s - Portfolio & Projects",
	description: "Portfolio and personal site of Lampros 'Tougrel' Sagris, a fullstack developer from Greece. Explore projects, coding experiments, and creative works crafted with the precision of dwarves, the elegance of elves, and the curiosity of hobbits!",

	author: "Lampros 'Tougrel' Sagris",
	publisher: "Lampros 'Tougrel' Sagris",

	themeColor: "#5946CE",
	msapplicationTileColor: "#333743",

	ogTitle: "Tougrel – From Middle-earth to the Web",
	ogDescription: "Portfolio and personal site of Lampros 'Tougrel' Sagris, a fullstack developer from Greece. Explore projects, coding experiments, and creative works crafted with the precision of dwarves, the elegance of elves, and the curiosity of hobbits!",
	ogType: "website",
	ogUrl: "https://tougrel.dev",

	twitterTitle: "Tougrel – From Middle-earth to the Web",
	twitterDescription: "Portfolio and personal site of Lampros 'Tougrel' Sagris, a fullstack developer from Greece. Explore projects, coding experiments, and creative works crafted with the precision of dwarves, the elegance of elves, and the curiosity of hobbits!",
	twitterCard: "summary",
});

useHead({
	htmlAttrs: {
		lang: "en",
	},
	link: [
		{
			rel: "icon",
			type: "image/vnd.microsoft.icon",
			href: "/favicon.ico",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "16x16",
			href: "/img/favicon-16x16.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "32x32",
			href: "/img/favicon-32x32.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "194x194",
			href: "/img/favicon-194x194.png",
		},
	],
});
</script>

<template>
	<UApp :tooltip="{ delayDuration: 300 }">
		<NuxtLoadingIndicator />
		<Nav />
		<UContainer as="main">
			<NuxtPage />
		</UContainer>
		<Footer />
	</UApp>
</template>
