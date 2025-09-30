export default defineEventHandler(() => {
	const runtimeConfig = useRuntimeConfig();

	return {
		name: runtimeConfig.public.clientName,
		version: runtimeConfig.public.clientVersion,
		build: runtimeConfig.public.clientBuild,
	};
});
