import{_ as a,c as i,o as n,ag as p}from"./chunks/framework.piE7uVCg.js";const d=JSON.parse('{"title":"Structure de projet","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/angular/angular21/005_structure.md","filePath":"javascript/angular/angular21/005_structure.md"}'),l={name:"javascript/angular/angular21/005_structure.md"};function e(E,s,t,h,k,r){return n(),i("div",null,[...s[0]||(s[0]=[p(`<h1 id="structure-de-projet" tabindex="-1"><a href="./readme.html">Structure de projet</a> <a class="header-anchor" href="#structure-de-projet" aria-label="Permalink to &quot;[Structure de projet](readme.md)&quot;">​</a></h1><h2 id="description" tabindex="-1">Description <a class="header-anchor" href="#description" aria-label="Permalink to &quot;Description&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">src/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├── app/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   ├── core/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   ├── services/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   ├── guards/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   ├── interceptors/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   ├── models/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   └── core.providers.ts</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   ├── shared/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   ├── components/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   │   ├── button/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   │   ├── table/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   │   ├── dialog/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   │   └── navbar/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   │</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   ├── directives/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   ├── pipes/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   └── shared.providers.ts</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   ├── layout/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   ├── main-layout/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   ├── auth-layout/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   └── sidebar/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   ├── features/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   ├── auth/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   │   ├── pages/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   │   ├── services/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   │   └── auth.routes.ts</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   │</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   ├── dashboard/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   │   ├── pages/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   │   ├── components/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   │   └── dashboard.routes.ts</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   │</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   ├── users/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   │   ├── pages/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   │   ├── components/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   │   ├── services/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   │   └── users.routes.ts</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   │</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   └── settings/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │       ├── pages/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │       └── settings.routes.ts</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   ├── app.routes.ts</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   ├── app.config.ts</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   └── app.component.ts</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├── assets/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   ├── images/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   ├── icons/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   └── styles/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│       ├── variables.scss</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│       ├── theme.scss</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│       └── prime-overrides.scss</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├── environments/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   ├── environment.ts</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   └── environment.prod.ts</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├── styles.scss</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">└── main.tsdz</span></span></code></pre></div>`,3)])])}const g=a(l,[["render",e]]);export{d as __pageData,g as default};
