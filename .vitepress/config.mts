import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Dash Tutos",
  description: "Site de tutos pour les devs",
  lang: "fr-FR",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Sommaire", link: "readme" },
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
