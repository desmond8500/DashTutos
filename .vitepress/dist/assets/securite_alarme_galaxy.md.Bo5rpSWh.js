import{_ as i,c as s,o as c,ae as h,j as l,af as m,ag as u,t as p}from"./chunks/framework.EaAuVE1v.js";const x={data(){return{input:"",texto:"",textInput:"",result:"",wordsToNumbers:[{letter:"a",code:13},{letter:"b",code:14},{letter:"c",code:15},{letter:"d",code:16},{letter:"e",code:18},{letter:"é",code:18},{letter:"è",code:18},{letter:"f",code:19},{letter:"g",code:20},{letter:"h",code:22},{letter:"i",code:23},{letter:"j",code:24},{letter:"k",code:25},{letter:"l",code:26},{letter:"m",code:27},{letter:"n",code:28},{letter:"o",code:31},{letter:"p",code:33},{letter:"q",code:34},{letter:"r",code:35},{letter:"s",code:36},{letter:"t",code:37},{letter:"u",code:38},{letter:"v",code:40},{letter:"w",code:41},{letter:"x",code:42},{letter:"y",code:44},{letter:"z",code:45},{letter:" ",code:10},{letter:"0",code:"00"},{letter:"1",code:"01"},{letter:"2",code:"02"},{letter:"3",code:"03"},{letter:"4",code:"04"},{letter:"5",code:"05"},{letter:"6",code:"06"},{letter:"7",code:"07"},{letter:"8",code:"08"},{letter:"9",code:"09"}]}},methods:{conv(){const t=this.textInput.toLowerCase();let e=Array.from(t);this.texto=this.textToInt(e)},findElement(t){return this.wordsToNumbers.find(e=>e.letter.toLowerCase()===t.toLowerCase())},textToInt(t){let e="",a=[];return t.forEach(n=>{e=this.findElement(n),a.push(e.code)}),a}}},q=JSON.parse('{"title":"Galaxy Dimension","description":"","frontmatter":{},"headers":[],"relativePath":"securite/alarme/galaxy.md","filePath":"securite/alarme/galaxy.md"}'),g={style:{"margin-top":"15px"}},f={class:"input"};function y(t,e,a,n,r,d){return c(),s("div",null,[e[3]||(e[3]=h('<h1 id="galaxy-dimension" tabindex="-1"><a href="./readme.html">Galaxy Dimension</a> <a class="header-anchor" href="#galaxy-dimension" aria-label="Permalink to &quot;[Galaxy Dimension](readme.md)&quot;">​</a></h1><h2 id="changer-de-langue" tabindex="-1">Changer de langue <a class="header-anchor" href="#changer-de-langue" aria-label="Permalink to &quot;Changer de langue&quot;">​</a></h2><p>En mode installateur :</p><p>51 puis 17 puis 3</p><h2 id="programmation-de-zone" tabindex="-1">Programmation de zone <a class="header-anchor" href="#programmation-de-zone" aria-label="Permalink to &quot;Programmation de zone&quot;">​</a></h2><p>52 (Programmation entrées)</p><table tabindex="0"><thead><tr><th style="text-align:left;">Entree</th><th style="text-align:left;">Numero</th><th style="text-align:left;">champ</th></tr></thead><tbody><tr><td style="text-align:left;">Finale</td><td style="text-align:left;">01</td><td style="text-align:left;">champ</td></tr><tr><td style="text-align:left;">Intrusion</td><td style="text-align:left;">03</td><td style="text-align:left;">champ</td></tr><tr><td style="text-align:left;">Panique</td><td style="text-align:left;">13</td><td style="text-align:left;">champ</td></tr><tr><td style="text-align:left;">Libre</td><td style="text-align:left;">18</td><td style="text-align:left;">champ</td></tr><tr><td style="text-align:left;">Incendie</td><td style="text-align:left;">19</td><td style="text-align:left;">champ</td></tr></tbody></table><h2 id="exclure-la-ligne-telephonique" tabindex="-1">Exclure la ligne téléphonique <a class="header-anchor" href="#exclure-la-ligne-telephonique" aria-label="Permalink to &quot;Exclure la ligne téléphonique&quot;">​</a></h2><p>56 (Communications) -&gt; 10 (Défaut de ligne / line fail)</p><p>Désacctiver 1 2 et 3</p><h2 id="tempo-de-sortie" tabindex="-1">Tempo de sortie <a class="header-anchor" href="#tempo-de-sortie" aria-label="Permalink to &quot;Tempo de sortie&quot;">​</a></h2><p>51 (Paramètres) -&gt; 04 (Tempo de sortie) -&gt; 20 -&gt; ENT</p><h2 id="tempo-d-entree" tabindex="-1">Tempo d&#39;entrée&#39; <a class="header-anchor" href="#tempo-d-entree" aria-label="Permalink to &quot;Tempo d&#39;entrée&#39;&quot;">​</a></h2><p>51 (Paramètres) -&gt; 05 (Tempo d&#39;entrée&#39;) -&gt; 20 -&gt; ENT</p><h2 id="convertion-de-texte-en-chiffres" tabindex="-1">Convertion de texte en chiffres <a class="header-anchor" href="#convertion-de-texte-en-chiffres" aria-label="Permalink to &quot;Convertion de texte en chiffres&quot;">​</a></h2>',15)),l("div",g,[e[2]||(e[2]=l("label",{for:"textInput"},"Entrez un texte :",-1)),l("div",f,[m(l("input",{id:"textInput",maxlenght:"16","onUpdate:modelValue":e[0]||(e[0]=o=>r.textInput=o)},null,512),[[u,r.textInput]]),l("button",{onClick:e[1]||(e[1]=(...o)=>d.conv&&d.conv(...o))},"Convertir")]),l("div",null,p(r.texto),1)])])}const T=i(x,[["render",y]]);export{q as __pageData,T as default};
