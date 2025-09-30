<template>
	<UHeader mode="drawer" class="flex items-center justify-between p-4">
		<template #left>
			<ULink to="/">
				<NuxtImg src="/logo.svg" width="128" height="128" class="w-32" />
			</ULink>
		</template>

		<UNavigationMenu :items="routes" highlight class="w-full" />

		<template #right>
			<UColorModeButton />
		</template>

		<template #body>
	      <UNavigationMenu :items="routes" />
	    </template>

		<LazyUModal v-model:open="credits" title="🔥🔨 Forged in the Fires of Code" description="From the forges of the ancient dwarves, great works are built with trusted tools. Here you'll find the stack that powers my own creations!" portal :ui="{ content: 'max-w-screen-md', body: 'grid grid-cols-1 md:grid-cols-2 gap-2' }">
			<template #body>
				<UPageCard title="Nuxt" description="The backbone of my realm, powering the foundation of this site." link="https://nuxt.com" icon="mdi:nuxt" spotlight :ui="{ leadingIcon: 'text-social-nuxt' }" class="[--spotlight-color:var(--color-social-nuxt)]" />
				<UPageCard title="Nuxt UI" description="Like dwarves carving stone to build their mighty halls, Nuxt UI shapes the interface with precision and craft." link="https://ui.nuxt.com" icon="mdi:palette-outline" spotlight :ui="{ leadingIcon: 'text-stone-600' }" class="[--spotlight-color:var(--color-stone-600)]" />
				<UPageCard title="Nuxt Image" description="Optimizing images like dwarves polishing gems. Every image shines like a treasure from the deep mines." link="https://image.nuxt.com" icon="line-md:image" spotlight :ui="{ leadingIcon: 'text-teal-500' }" class="[--spotlight-color:var(--color-teal-500)]" />
				<UPageCard title="Iconify" description="A treasury of symbols from the kingdoms of men, providing glyphs and icons to guide travelers through the lands of the web." link="https://iconify.design" icon="mdi:symbol" spotlight :ui="{ leadingIcon: 'text-social-iconify' }" class="[--spotlight-color:var(--color-social-iconify)]" />
				<UPageCard title="Nuxt Content" description="Elves of old preserved knowledge in libraries and scrolls. Nuxt Content guards and presents the lore of my projects." link="https://content.nuxt.com" icon="mdi:book-open-page-variant-outline" spotlight :ui="{ leadingIcon: 'text-amber-200' }" class="[--spotlight-color:var(--color-amber-200)]" />
				<UPageCard title="JetBrains Mono" description="Hobbits may have penned the stories, but elves crafted the letters! JetBrains Mono brings both clarity and charm to every line of code." link="https://iconify.design" icon="mdi:format-font" spotlight :ui="{ leadingIcon: 'text-social-jetbrains' }" class="[--spotlight-color:var(--color-social-jetbrains)]" />
			</template>
		</LazyUModal>
	</UHeader>
</template>
<script setup lang="ts">
const routes: NavigationMenuItem[] = [
	{
		label: "Blog",
		icon: "line-md:edit-twotone",
		to: "/blog",
	},
	{
		label: "Github",
		icon: "line-md:github-loop",
		to: "https://github.com/tougrel/tougrel.dev",
		target: "_blank",
	},
	{
		label: "Attributions",
		icon: "line-md:heart",
		onClick: () => {
			credits.value = true;
		},
	},
];

const credits = ref(false);
</script>

<script lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
</script>
