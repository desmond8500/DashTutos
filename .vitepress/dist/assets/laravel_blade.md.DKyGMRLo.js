import{_ as s,c as n,o as e,ae as t}from"./chunks/framework.EaAuVE1v.js";const h=JSON.parse('{"title":"Blade","description":"","frontmatter":{},"headers":[],"relativePath":"laravel/blade.md","filePath":"laravel/blade.md"}'),l={name:"laravel/blade.md"};function p(i,a,c,o,r,d){return e(),n("div",null,a[0]||(a[0]=[t(`<h1 id="blade" tabindex="-1"><a href="./readme.html">Blade</a> <a class="header-anchor" href="#blade" aria-label="Permalink to &quot;[Blade](readme.md)&quot;">​</a></h1><h2 id="description" tabindex="-1">Description <a class="header-anchor" href="#description" aria-label="Permalink to &quot;Description&quot;">​</a></h2><h2 id="blade-class" tabindex="-1">Blade class <a class="header-anchor" href="#blade-class" aria-label="Permalink to &quot;Blade class&quot;">​</a></h2><div class="language-htm vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">htm</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;span </span></span>
<span class="line"><span>@class([</span></span>
<span class="line"><span>    &#39;p-2&#39;, </span></span>
<span class="line"><span>    &#39;text-green-500&#39;=&gt; $active,</span></span>
<span class="line"><span>    &#39;bg-red-500&#39; =&gt; $inActive,</span></span>
<span class="line"><span>    ])&gt;user</span></span>
<span class="line"><span>&lt;/span&gt;</span></span></code></pre></div><div class="language-htm vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">htm</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;select class=&quot;block w-full mt-1&quot; name=&quot;status&quot;&gt;</span></span>
<span class="line"><span>    &lt;option value=&quot;published&quot; @selected($blog-&gt;status == &#39;published&#39;)</span></span>
<span class="line"><span>        @class([</span></span>
<span class="line"><span>        &#39;bg-purple-600 text-white&#39; =&gt; $blog-&gt;status == &#39;published&#39;</span></span>
<span class="line"><span>        ])&gt;Published&lt;/option&gt;</span></span>
<span class="line"><span>    &lt;option value=&quot;draft&quot; @selected($blog-&gt;status == &#39;draft&#39;)</span></span>
<span class="line"><span>        @class([</span></span>
<span class="line"><span>        &#39;bg-purple-600 text-white&#39; =&gt; $blog-&gt;status == &#39;draft&#39;</span></span>
<span class="line"><span>        ])</span></span>
<span class="line"><span>        &gt;Draft&lt;/option&gt;</span></span>
<span class="line"><span>    &lt;option value=&quot;archived&quot; @selected($blog-&gt;status == &#39;archived&#39;)</span></span>
<span class="line"><span>        @class([</span></span>
<span class="line"><span>        &#39;bg-purple-600 text-white&#39; =&gt; $blog-&gt;status == &#39;archived&#39;</span></span>
<span class="line"><span>        ])</span></span>
<span class="line"><span>        &gt;Archived&lt;/option&gt;</span></span>
<span class="line"><span>&lt;/select&gt;</span></span></code></pre></div><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><ul><li><a href="https://laravel.com/docs/10.x/blade" target="_blank" rel="noreferrer">Laravel</a></li></ul>`,7)]))}const g=s(l,[["render",p]]);export{h as __pageData,g as default};
