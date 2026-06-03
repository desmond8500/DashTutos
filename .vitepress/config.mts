import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Dash Tutos",
  description: "Site de tutos pour les devs",
  lang: "fr-FR",
  ignoreDeadLinks: false,
  themeConfig: {
    logo: "src/img/technical-service.png",
    search: {
      provider: "local",
    },
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
          { text: "Angular 21", link: "javascript/angular/angular21/readme" },
          { text: "Ionic 8", link: "javascript/ionic/ionic8.md" },
          { text: "Tauri", link: "javascript/tauri/readme" },
          { text: "React JS", link: "javascript/reactjs/readme" },
          { text: "Vue.js", link: "javascript/vue/readme" },
          { text: "Vitepress", link: "javascript/vue/vitepress.md" },
          { text: "Express JS", link: "javascript/expressjs.md" },
          { text: "JSON Server", link: "javascript/jsonserver.md" },
        ],
      },
      {
        text: "Islam",
        items: [
          { text: "Noms d'Allah", link: "islam/noms/readme" },
          { text: "Sourates", link: "islam/sourates/readme" },
        ],
      },
      {
        text: "Sécurité",
        items: [
          { text: "Controle d'accès", link: "securite/access/readme" },
          { text: "Video surveillance", link: "securite/video/readme" },
          { text: "Alarme", link: "securite/alarme/readme" },
          { text: "Gmao", link: "securite/Gmao/gmao.md" },
          { text: "Sécurité Incendie", link: "securite/incendie/readme" },
          { text: "Appel Malade", link: "securite/malade/readme" },
          { text: "Pointage", link: "securite/pointage/readme" },
        ],
      },
      {
        text: "Autres",
        items: [
          { text: "Nanocad", link: "tools/nanocad.md" },
          { text: "Git", link: "tools/git.md" },
          { text: "VS Code", link: "tools/vscode.md" },
          { text: "Librairies", link: "tools/librairies.md" },
        ],
      },
      {
        text: "OS",
        items: [{ text: "Windows", link: "windows/readme" }],
      },
      {
        text: "Utiles",
        items: [{ text: "Orange", link: "utiles/orange.md" }],
      },
      {
        text: "Electronique",
        items: [
          { text: "Arduino", link: "electronique/arduino/readme" },
          { text: "Domotique", link: "electronique/domotique/readme" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
