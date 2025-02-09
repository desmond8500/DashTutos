import{_ as a,c as i,o as n,ae as t}from"./chunks/framework.EaAuVE1v.js";const d=JSON.parse('{"title":"Tom Select","description":"","frontmatter":{},"headers":[],"relativePath":"laravel/livewire/tomselect.md","filePath":"laravel/livewire/tomselect.md"}'),p={name:"laravel/livewire/tomselect.md"};function l(e,s,h,k,c,r){return n(),i("div",null,s[0]||(s[0]=[t(`<h1 id="tom-select" tabindex="-1"><a href="./readme.html">Tom Select</a> <a class="header-anchor" href="#tom-select" aria-label="Permalink to &quot;[Tom Select](readme.md)&quot;">​</a></h1><h2 id="tom-select-1" tabindex="-1">Tom select <a class="header-anchor" href="#tom-select-1" aria-label="Permalink to &quot;Tom select&quot;">​</a></h2><ol><li><p>Importer la librairie TomSelect</p><div class="language-htm vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">htm</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> &lt;link href=&quot;https://cdn.jsdelivr.net/npm/tom-select@2.2.2/dist/css/tom-select.css&quot; rel=&quot;stylesheet&quot;&gt;</span></span>
<span class="line"><span> &lt;script src=&quot;https://cdn.jsdelivr.net/npm/tom-select@2.2.2/dist/js/tom-select.complete.min.js&quot;&gt;&lt;/script&gt;</span></span></code></pre></div></li><li><p>Créer un composant livewire</p><div class="language-htm vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">htm</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;div&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;input-group&quot; &gt;</span></span>
<span class="line"><span>        &lt;select id=&quot;tag_select&quot; wire:ignore:self placeholder=&quot;Selectinner un tag ...&quot; autocomplete=&quot;off&quot; wire:model.defer=&quot;list&quot;&gt;</span></span>
<span class="line"><span>            &lt;option value=&quot;&quot;&gt;Select a person...&lt;/option&gt;</span></span>
<span class="line"><span>            @foreach ($tags as $tag)</span></span>
<span class="line"><span>                &lt;option value=&quot;{{ $tag-&gt;name }}&quot;&gt;{{ $tag-&gt;name }}&lt;/option&gt;</span></span>
<span class="line"><span>            @endforeach</span></span>
<span class="line"><span>        &lt;/select&gt;</span></span>
<span class="line"><span>        &lt;button class=&quot;btn btn-primary&quot; wire:click=&quot;get_list&quot;&gt;Enregister&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>        new TomSelect(&quot;#tag_select&quot;,{</span></span>
<span class="line"><span>            create: true,</span></span>
<span class="line"><span>            sortField: {</span></span>
<span class="line"><span>                field: &quot;text&quot;,</span></span>
<span class="line"><span>                direction: &quot;asc&quot;</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            maxItems: 5,</span></span>
<span class="line"><span>            createFilter: function(input) {</span></span>
<span class="line"><span>                input = input.toLowerCase();</span></span>
<span class="line"><span>                return !(input in this.options);</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            maxOptions: 5</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre></div><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $tags, $list;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> render</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> view</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;livewire.select&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,[</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &#39;tags&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> $this</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tags,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> get_list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    $this</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">emit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;list&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$this</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">list);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li></ol><h2 id="javascript" tabindex="-1">Javascript <a class="header-anchor" href="#javascript" aria-label="Permalink to &quot;Javascript&quot;">​</a></h2><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> save</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        $this</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">js</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;alert(&#39;Post saved!&#39;)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span></code></pre></div>`,5)]))}const g=a(p,[["render",l]]);export{d as __pageData,g as default};
