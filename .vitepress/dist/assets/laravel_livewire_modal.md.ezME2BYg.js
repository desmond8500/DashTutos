import{_ as a,c as n,o as t,ae as l}from"./chunks/framework.EaAuVE1v.js";const r=JSON.parse('{"title":"Modal","description":"","frontmatter":{},"headers":[],"relativePath":"laravel/livewire/modal.md","filePath":"laravel/livewire/modal.md"}'),i={name:"laravel/livewire/modal.md"};function p(e,s,o,d,u,c){return t(),n("div",null,s[0]||(s[0]=[l(`<h1 id="modal" tabindex="-1"><a href="./readme.html">Modal</a> <a class="header-anchor" href="#modal" aria-label="Permalink to &quot;[Modal](readme.md)&quot;">​</a></h1><h3 id="include-modal" tabindex="-1">Include modal <a class="header-anchor" href="#include-modal" aria-label="Permalink to &quot;Include modal&quot;">​</a></h3><p>Il faudra créer une vue modal puis l&#39;importer</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> @include</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;_tabler.modal&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,[</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;id&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;addBilan&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;title&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Ajouter ce devis&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;include&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;_tabler.form.bilan_devis_form&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;method&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;add_bilan&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;submit&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;add_bilan&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Optionnelle</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span></code></pre></div><p>Fichier blade</p><div class="language-htm vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">htm</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;div class=&quot;modal modal-blur fade&quot; id=&quot;{{ $id }}&quot; tabindex=&quot;-1&quot; role=&quot;dialog&quot; aria-hidden=&quot;true&quot; wire:ignore.self&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;modal-dialog modal-dialog-centered&quot; role=&quot;document&quot;&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;modal-content&quot;&gt;</span></span>
<span class="line"><span>            &lt;form wire:submit.prevent=&quot;{{ $method }}&quot;&gt;</span></span>
<span class="line"><span>                &lt;div class=&quot;modal-header&quot;&gt;</span></span>
<span class="line"><span>                    &lt;h5 class=&quot;modal-title&quot;&gt;{{ $title }}&lt;/h5&gt;</span></span>
<span class="line"><span>                    &lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;modal&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;</span></span>
<span class="line"><span>                &lt;/div&gt;</span></span>
<span class="line"><span>                &lt;div class=&quot;modal-body&quot;&gt;</span></span>
<span class="line"><span>                    &lt;div class=&quot;row&quot;&gt;</span></span>
<span class="line"><span>                        @include($include)</span></span>
<span class="line"><span>                    &lt;/div&gt;</span></span>
<span class="line"><span>                &lt;/div&gt;</span></span>
<span class="line"><span>                &lt;div class=&quot;modal-footer&quot;&gt;</span></span>
<span class="line"><span>                    &lt;a type=&quot;button&quot; class=&quot;btn btn-secondary me-auto&quot; data-bs-dismiss=&quot;modal&quot;&gt;Fermer&lt;/a&gt;</span></span>
<span class="line"><span>                    &lt;button type=&quot;submit&quot; class=&quot;btn btn-primary&quot; &gt;{{ $submit ?? &quot;Ajouter&quot; }}&lt;/button&gt;</span></span>
<span class="line"><span>                &lt;/div&gt;</span></span>
<span class="line"><span>            &lt;/form&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><h3 id="component-modal" tabindex="-1">Component modal <a class="header-anchor" href="#component-modal" aria-label="Permalink to &quot;Component modal&quot;">​</a></h3><div class="language-console vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">console</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">php artisan make:component modal</span></span></code></pre></div><div class="language-htm vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">htm</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@component(&#39;components.modal&#39;, [&#39;id&#39;=&gt;&#39;exampleModal&#39;, &#39;method&#39;=&gt;&#39;testme&#39;,&#39;title&#39;=&gt;&#39;hello&#39;])</span></span>
<span class="line"><span>    fre {{ $test }}</span></span>
<span class="line"><span>@endcomponent</span></span>
<span class="line"><span>&lt;script&gt; window.addEventListener(&#39;close-modal&#39;, event =&gt; { $(&quot;#exampleModal&quot;).modal(&#39;hide&#39;); }) &lt;/script&gt;</span></span></code></pre></div><div class="language-htm vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">htm</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> &lt;div class=&quot;modal modal-blur fade&quot; id=&quot;{{ $id }}&quot; tabindex=&quot;-1&quot; role=&quot;dialog&quot; aria-hidden=&quot;true&quot; wire:ignore.self&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;modal-dialog modal-dialog-centered&quot; role=&quot;document&quot;&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;modal-content&quot;&gt;</span></span>
<span class="line"><span>            &lt;form wire:submit.prevent=&quot;{{ $method }}&quot;&gt;</span></span>
<span class="line"><span>                &lt;div class=&quot;modal-header&quot;&gt;</span></span>
<span class="line"><span>                    &lt;h5 class=&quot;modal-title&quot;&gt;{{ $title }}&lt;/h5&gt;</span></span>
<span class="line"><span>                    &lt;button type=&quot;button&quot; class=&quot;btn-close&quot; data-bs-dismiss=&quot;modal&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;</span></span>
<span class="line"><span>                &lt;/div&gt;</span></span>
<span class="line"><span>                &lt;div class=&quot;modal-body&quot;&gt;</span></span>
<span class="line"><span>                    &lt;div class=&quot;row&quot;&gt;</span></span>
<span class="line"><span>                        {{ $slot }}</span></span>
<span class="line"><span>                    &lt;/div&gt;</span></span>
<span class="line"><span>                &lt;/div&gt;</span></span>
<span class="line"><span>                &lt;div class=&quot;modal-footer&quot;&gt;</span></span>
<span class="line"><span>                    &lt;a type=&quot;button&quot; class=&quot;btn btn-secondary me-auto&quot; data-bs-dismiss=&quot;modal&quot;&gt;Fermer&lt;/a&gt;</span></span>
<span class="line"><span>                    &lt;button type=&quot;submit&quot; class=&quot;btn btn-primary&quot;&gt;{{ $submit ?? &quot;Ajouter&quot; }}&lt;/button&gt;</span></span>
<span class="line"><span>                &lt;/div&gt;</span></span>
<span class="line"><span>            &lt;/form&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div>`,10)]))}const g=a(i,[["render",p]]);export{r as __pageData,g as default};
