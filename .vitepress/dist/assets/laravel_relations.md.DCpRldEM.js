import{_ as a,c as n,o as i,ae as e}from"./chunks/framework.EaAuVE1v.js";const k=JSON.parse('{"title":"Relations","description":"","frontmatter":{},"headers":[],"relativePath":"laravel/relations.md","filePath":"laravel/relations.md"}'),l={name:"laravel/relations.md"};function t(p,s,r,h,E,o){return i(),n("div",null,s[0]||(s[0]=[e(`<h1 id="relations" tabindex="-1"><a href="./readme.html">Relations</a> <a class="header-anchor" href="#relations" aria-label="Permalink to &quot;[Relations](readme.md)&quot;">​</a></h1><h2 id="many-to-many" tabindex="-1">Many to many <a class="header-anchor" href="#many-to-many" aria-label="Permalink to &quot;Many to many&quot;">​</a></h2><div class="language-mermaid vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">mermaid</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">classDiagram</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">class user{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    int id</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    string name</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    role(belongtomany class tablename)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">class role{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    int id</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    string name</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">class userRole{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    int user_id</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    int role_id</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,3)]))}const c=a(l,[["render",t]]);export{k as __pageData,c as default};
