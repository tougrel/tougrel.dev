<template>
	<ULink :to="to" class="relative flex flex-col flex-wrap bg-linear-to-r p-8 rounded-lg overflow-hidden hover:scale-102 transition-transform">
		<h2 class="text-2xl text-default font-bold z-10">{{ title }}</h2>
		<p class="text-sm text-toned font-medium z-10">{{ description }}</p>
		<slot />
	</ULink>
</template>

<script setup lang="ts">
defineProps<Props>();
</script>

<script lang="ts">
interface Props {
	title: string;
	description: string;
	to: string;
}
</script>
