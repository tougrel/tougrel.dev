<template>
	<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 py-12">
		<div
			v-for="(project, index) in projects"
			:key="`project-${index}`"
			class="flex flex-col gap-4 relative ring-2 ring-default rounded-lg p-8 overflow-hidden"
		>
			<div class="absolute top-0 left-0 w-12 h-12 blur-3xl" :class="project.bgColor" />
			<div class="flex flex-col gap-1">
				<h2 class="text-2xl text-white-full font-bold">{{ project.title }}</h2>
				<ULink :to="`https://${project.link}`" target="_blank" external class="flex items-center gap-1 text-sm">
					<Icon name="line-md:external-link" size=".8em" class="text-muted" />
					{{ project.link }}
				</ULink>
			</div>
			<USeparator size="md" decorative />
			<p class="text-sm text-muted overflow-y-auto">{{ project.description }}</p>
			<div class="flex items-center gap-2 mt-auto">
				<UBadge v-for="tag in project.tags" :label="tag" :class="[project.textColor, project.bgColor]" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
useSeoMeta({
	title: "Projects",
});

const projects = ref<Project[]>([
	{
		title: "Gateway",
		description: "All the projects I created and contributed in once place!",
		textColor: "text-orange-950",
		bgColor: "bg-orange-400",
		link: "sagris.me",
		tags: ["Website"],
	},
	{
		title: "Aura",
		description: "Aura is a feature-rich bot with lots of tools and a modern dashboard!",
		textColor: "text-black",
		bgColor: "bg-project-aura",
		link: "bot.auragroup.dev",
		tags: ["Discord", "Bot"],
	},
	{
		title: "PagoExpress",
		description: "PagoExpress is an ice supplier company based in Chania, Crete",
		textColor: "text-white",
		bgColor: "bg-project-pagoexpress",
		link: "pagoexpress.gr",
		tags: ["Website", "Ice"],
	},
	{
		title: "Pestoverse",
		description: "The official website for running, upcoming and archived events created by Yuniiho's community",
		textColor: "text-emerald-950",
		bgColor: "bg-emerald-400",
		link: "pestoverse.world",
		tags: ["Website", "Twitch", "Games"],
	},
	{
		title: "Butler",
		description:
			"Butler is a digital ecosystem that offers multiple solutions and new possibilities to mass catering stores",
		textColor: "text-sky-950",
		bgColor: "bg-sky-400",
		link: "butler.gr",
		tags: ["Website", "Business"],
	},
]);
</script>

<script lang="ts">
interface Project {
	title: string;
	description: string;
	textColor: string;
	bgColor: string;
	link: string;
	tags: string[];
}
</script>
