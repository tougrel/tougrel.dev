<template>
  <UPage>
    <UPageHero title="🌍 From Middle Earth to Code ✨" headline='Lampros "Tougrel" Sagris'>
      <template #description>
        I’m Lampros or Tougrel (<span class="text-primary italic">{{ age || "23" }} years old</span>) and I’m from
        Greece. I love programming, gaming, anime and I’m a big fan of J. R. R Tolkien’s work. I'm a fullstack
        engineer but I spend a lot of time on frontend development! I enjoy creating modern, clean and interactive interfaces,
        usually with Vue and TypeScript and I'm always trying new tools or create projects that never see the light of day just to
        experiment. I’m currently working on some projects that you can find below!
      </template>
    </UPageHero>

    <UPageSection title="My Projects" description="Check at what I'm currently working on and their current status!">
      <UPageGrid>
        <ULink v-for="(project, index) in projects" :key="`project-${index}`" :to="`https://${project.link}`" target="_blank" external
          class="flex flex-col gap-4 relative ring-2 ring-default rounded-lg p-8 overflow-hidden">
          <div class="absolute top-0 left-0 w-12 h-12 blur-3xl" :class="project.bgColor" />
          <div class="flex flex-col gap-1">
            <h2 class="text-2xl text-white-full font-bold">{{ project.title }}</h2>
            <div class="flex items-center gap-1 text-sm">
              <Icon name="line-md:external-link" size=".8em" class="text-muted" />
              <span class="underline">{{ project.link }}</span>
            </div>
          </div>
          <USeparator size="md" decorative />
          <p class="text-sm text-muted overflow-y-auto">{{ project.description }}</p>
          <div class="flex items-center gap-2 mt-auto">
            <UBadge v-for="tag in project.tags" :label="tag" :class="[project.textColor, project.bgColor]" />
          </div>
        </ULink>
      </UPageGrid>
    </UPageSection>
  </UPage>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Home",
});

const projects = ref<Project[]>([
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
    textColor: "text-blue-950",
    bgColor: "bg-blue-400",
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
    description: "Butler is a digital ecosystem that offers multiple solutions and new possibilities to mass catering stores",
    textColor: "text-sky-950",
    bgColor: "bg-sky-400",
    link: "butler.gr",
    tags: ["Website", "Business"],
  },
  {
    title: "VTube Center",
    description: "Connect with VTubers - Catch up with events, collabs and grow your fanbase",
    textColor: "text-rose-950",
    bgColor: "bg-rose-400",
    link: "vtube.center",
    tags: ["Website"]
  }
]);

const age = computed(() => {
  const today = new Date();
  const birthDate = new Date(2002, 4, 28);
  let age = today.getFullYear() - birthDate.getFullYear();

  const birthdayThisYear = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
  if (today < birthdayThisYear) {
    age--;
  }

  return age;
});
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
