import{_ as s,c as t,o as e,ae as i}from"./chunks/framework.EaAuVE1v.js";const k=JSON.parse('{"title":"Table","description":"","frontmatter":{},"headers":[],"relativePath":"html/table.md","filePath":"html/table.md"}'),l={name:"html/table.md"};function n(p,a,h,r,o,d){return e(),t("div",null,a[0]||(a[0]=[i(`<h1 id="table" tabindex="-1"><a href="./readme.html">Table</a> <a class="header-anchor" href="#table" aria-label="Permalink to &quot;[Table](readme.md)&quot;">​</a></h1><h2 id="attributs-de-tableau" tabindex="-1">Attributs de tableau <a class="header-anchor" href="#attributs-de-tableau" aria-label="Permalink to &quot;Attributs de tableau&quot;">​</a></h2><div class="language-htm vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">htm</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;table bgcolor=&quot;#efefef&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/table&gt;</span></span></code></pre></div><h2 id="bonnes-pratiques" tabindex="-1">Bonnes pratiques <a class="header-anchor" href="#bonnes-pratiques" aria-label="Permalink to &quot;Bonnes pratiques&quot;">​</a></h2><ul><li><p>Ajouter des datacell aux tables</p><div class="language-htm vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">htm</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;table&gt;</span></span>
<span class="line"><span>    &lt;tr&gt;</span></span>
<span class="line"><span>         &lt;th&gt;Nom&lt;/th&gt;</span></span>
<span class="line"><span>    &lt;/tr&gt;</span></span>
<span class="line"><span>    &lt;tr&gt;</span></span>
<span class="line"><span>         &lt;td data-cell=&quot;Nom&quot;&gt;Nom&lt;/td&gt;</span></span>
<span class="line"><span>    &lt;/tr&gt;</span></span>
<span class="line"><span>&lt;/table&gt;</span></span></code></pre></div></li></ul><h2 id="responsive-table" tabindex="-1">Responsive table <a class="header-anchor" href="#responsive-table" aria-label="Permalink to &quot;Responsive table&quot;">​</a></h2><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">border-collapse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: collapse;</span></span></code></pre></div><h2 id="table-zebra" tabindex="-1">Table zebra <a class="header-anchor" href="#table-zebra" aria-label="Permalink to &quot;Table zebra&quot;">​</a></h2><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">tr</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:nth-of-type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2n</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    background</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">hsl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="scrolling" tabindex="-1">Scrolling <a class="header-anchor" href="#scrolling" aria-label="Permalink to &quot;Scrolling&quot;">​</a></h2><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">overflow-x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: scroll;</span></span></code></pre></div><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><ul><li><a href="./../css/table.html">css</a></li></ul>`,13)]))}const b=s(l,[["render",n]]);export{k as __pageData,b as default};
