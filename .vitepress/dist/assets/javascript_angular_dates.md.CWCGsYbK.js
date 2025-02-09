import{_ as i,c as a,o as n,ae as t}from"./chunks/framework.EaAuVE1v.js";const o=JSON.parse('{"title":"Dates","description":"","frontmatter":{},"headers":[],"relativePath":"javascript/angular/dates.md","filePath":"javascript/angular/dates.md"}'),l={name:"javascript/angular/dates.md"};function e(h,s,p,k,r,d){return n(),a("div",null,s[0]||(s[0]=[t(`<h1 id="dates" tabindex="-1"><a href="./readme.html">Dates</a> <a class="header-anchor" href="#dates" aria-label="Permalink to &quot;[Dates](readme.md)&quot;">​</a></h1><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><p>Dans le fichier <code>app.module.ts</code></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> localeFr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@angular/common/locales/fr&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">registerLocaleData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(localeFr);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">providers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { provide: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">LOCALE_ID</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, useValue: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;fr-FR&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span></code></pre></div><h2 id="utiliation-dans-un-formulaire" tabindex="-1">Utiliation dans un formulaire <a class="header-anchor" href="#utiliation-dans-un-formulaire" aria-label="Permalink to &quot;Utiliation dans un formulaire&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.reportForm.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">patchValue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    objet: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.report?.objet,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    date: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">formatDate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.report?.date, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;yyyy-MM-dd&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;fr&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    description: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.report?.description,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })</span></span></code></pre></div><h2 id="date-format" tabindex="-1">Date Format <a class="header-anchor" href="#date-format" aria-label="Permalink to &quot;Date Format&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 👇️ const now: Date</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> now</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(now); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 👉️ 2023-07-31T08:40:47.891Z</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(now.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toLocaleDateString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 👉️ 7/31/2023</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(now.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toLocaleString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 👉️ 7/31/2023, 11:40:47 AM</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(now.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toUTCString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 👉️ Mon, 31 Jul 2023 08:40:47 GMT</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(now.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toISOString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 👉️ 2023-07-31T08:40:47.891Z</span></span></code></pre></div><ul><li><a href="https://bobbyhadz.com/blog/typescript-get-current-date-and-time" target="_blank" rel="noreferrer">Source</a></li><li><a href="https://www.javatpoint.com/typescript-date-object" target="_blank" rel="noreferrer">Source</a></li></ul>`,9)]))}const g=i(l,[["render",e]]);export{o as __pageData,g as default};
