import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Dash Tutos",
  description: "Site de tutos pour les devs",
  lang: "fr-FR",
  themeConfig: {
    logo: "src/img/technical-service.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Accueil", link: "/" },
      { text: "Sommaire", link: "readme", activeMatch: "/readme" },
      {
        text: "Developpement",
        items: [
          {
            text: "Laravel",
            link: "laravel/readme",
            activeMatch: "laravel/readme",
          },
          {
            text: "Livewire",
            link: "laravel/livewire/readme",
            activeMatch: "laravel/livewire/readme",
          },
          {
            text: "HTML",
            link: "html/readme",
            activeMatch: "html/readme",
          },
          {
            text: "CSS",
            link: "css/readme",
            activeMatch: "css/readme",
          },
        ],
      },
      {
        text: "Javascript",
        items: [
          {
            text: "Angular",
            link: "javascript/angular/readme",
            activeMatch: "/javascript/angular/readme",
          },
          {
            text: "Ionic",
            link: "javascript/ionic/readme",
            activeMatch: "javascript/ionic/readme",
          },
          {
            text: "Astro",
            link: "javascript/astro/readme",
            activeMatch: "javascript/astro/readme",
          },
          {
            text: "Vue",
            link: "javascript/vue/readme",
            activeMatch: "javascript/vue/readme",
          },
          {
            text: "TypeScript",
            link: "javascript/typescript/readme",
            activeMatch: "javascript/typescript/readme",
          },
          {
            text: "ReactJS",
            link: "javascript/reactjs/readme",
            activeMatch: "javascript/reactjs/readme",
          },
        ],
      },
      {
        text: "Sécurité",
        items: [
          {
            text: "Alarme anti intrusion",
            link: "securite/alarme/readme",
            activeMatch: "securite/alarme/readme",
          },
          {
            text: "Détection incendie",
            link: "securite/incendie/readme",
            activeMatch: "securite/incendie/readme",
          },
          {
            text: "Controle d'accès",
            link: "securite/access/readme",
            activeMatch: "securite/access/readme",
          },
          {
            text: "Pointage",
            link: "securite/pointage/readme",
            activeMatch: "securite/pointage/readme",
          },
          {
            text: "Video surveillance",
            link: "securite/video/readme",
            activeMatch: "securite/video/readme",
          },
          {
            text: "Appel Infirmier",
            link: "securite/malade/readme",
            activeMatch: "securite/malade/readme",
          },
          {
            text: "Onduleur",
            link: "autre/onduleur",
            activeMatch: "autre/onduleur",
          },
          {
            text: "Electronique",
            link: "electronique/readme",
            activeMatch: "electronique/readme",
          },
        ],
      },
    ],

    sidebar: [
      {
        text: "Development",
        items: [
          { text: "Laravel", link: "laravel/readme" },
          { text: "Javascript", link: "javascript/readme" },
          { text: "Html", link: "html/readme" },
          { text: "Css", link: "css/readme" },
          { text: "Flutter", link: "flutter/readme" },
          { text: "Gestion de projet Informatique", link: "projet" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
