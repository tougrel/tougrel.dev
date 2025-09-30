<template>
	<UContainer as="footer" class="flex flex-col gap-6 p-8">
		<div role="none" class="p-0.5 w-full bg-linear-to-r/increasing from-primary to-blue-500 animate-footerLine rounded-full" />

		<div class="flex flex-wrap justify-between gap-4">
			<div class="flex flex-col gap-1">
				<p class="text-sm text-muted">
					Copyright &copy; 2022-{{ new Date().getUTCFullYear() }} Tougrel - MPL-2.0
				</p>
				<p class="text-xs text-muted italic">v{{ runtimeConfig.public.clientVersion }} - #{{ runtimeConfig.public.clientBuild }}</p>
			</div>
			<div class="flex gap-2">
				<UTooltip v-for="(social, index) in socials" :key="`social-${index}`" :text="social.label">
					<ULink :to="social.to" :aria-label="social.label" target="_blank" external class="flex items-center justify-center w-12 h-12 bg-muted rounded-lg" :class="[social.color]">
						<Icon :name="social.icon" aria-label="Icon" size="1.5em" class="duration-200 transition-colors" />
					</ULink>
				</UTooltip>
			</div>
		</div>
	</UContainer>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const socials: Social[] = [
	{
		label: "Contact me via Email",
		to: "mailto:me@tougrel.dev",
		icon: "line-md:email-twotone",
		color: "hover:text-primary-500",
	},
	{
		label: "Follow me on Twitter",
		to: "https://twitter.com/Tougrel/",
		icon: "line-md:twitter",
		color: "hover:text-social-twitter",
	},
	{
		label: "Buy me a Ko-fi",
		to: "https://ko-fi.com/tougrel/",
		icon: "line-md:coffee-half-empty-twotone-loop",
		color: "hover:text-social-kofi",
	},
	{
		label: "Add me on telegram",
		to: "https://t.me/tougrel",
		icon: "line-md:telegram",
		color: "hover:text-social-telegram",
	},
	{
		label: "Join my Discord Server",
		to: "https://discord.gg/xRTtFkaEyA",
		icon: "line-md:discord",
		color: "hover:text-social-discord",
	},
	{
		label: "Follow me on GitHub",
		to: "https://github.com/Tougrel/",
		icon: "line-md:github-loop",
		color: "hover:text-toned",
	},
]
</script>

<script lang="ts">
interface Social {
	label: string;
	to: string;
	icon: string;
	color: string;
}
</script>