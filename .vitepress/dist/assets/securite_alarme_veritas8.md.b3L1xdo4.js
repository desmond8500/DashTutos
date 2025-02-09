import{_ as t,c as a,o as l,ae as d}from"./chunks/framework.EaAuVE1v.js";const p=JSON.parse('{"title":"Véritas 8","description":"","frontmatter":{},"headers":[],"relativePath":"securite/alarme/veritas8.md","filePath":"securite/alarme/veritas8.md"}'),i={name:"securite/alarme/veritas8.md"};function o(r,e,s,n,c,u){return l(),a("div",null,e[0]||(e[0]=[d('<h1 id="veritas-8" tabindex="-1"><a href="./readme.html">Véritas 8</a> <a class="header-anchor" href="#veritas-8" aria-label="Permalink to &quot;[Véritas 8](readme.md)&quot;">​</a></h1><h2 id="codes-par-defaut" tabindex="-1">Codes par défaut <a class="header-anchor" href="#codes-par-defaut" aria-label="Permalink to &quot;Codes par défaut&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:left;">Role</th><th style="text-align:left;">Code</th></tr></thead><tbody><tr><td style="text-align:left;">Technicien</td><td style="text-align:left;">1234</td></tr><tr><td style="text-align:left;">Master</td><td style="text-align:left;">4321</td></tr></tbody></table><h2 id="armer-desarmer-le-systeme" tabindex="-1">Armer/désarmer le système <a class="header-anchor" href="#armer-desarmer-le-systeme" aria-label="Permalink to &quot;Armer/désarmer le système&quot;">​</a></h2><p>code + <code>TOTAL</code><br> code + <code>RAZ</code></p><p>Mettre le code simplement permet d&#39;arrêter l&#39;alarme et de voir la zone en défaut</p><h2 id="reinitialiser-le-systeme" tabindex="-1">Réinitialiser le système <a class="header-anchor" href="#reinitialiser-le-systeme" aria-label="Permalink to &quot;Réinitialiser le système&quot;">​</a></h2><p>1234 + <code>PROG</code> + 07 + <code>PROG</code></p><h2 id="changement-de-code-personnel" tabindex="-1">Changement de code personnel <a class="header-anchor" href="#changement-de-code-personnel" aria-label="Permalink to &quot;Changement de code personnel&quot;">​</a></h2><p>code + <code>PROG</code> + 60 + code</p><h2 id="ajouter-un-code-utilisateur-utilisateur" tabindex="-1">Ajouter un code utilisateur utilisateur <a class="header-anchor" href="#ajouter-un-code-utilisateur-utilisateur" aria-label="Permalink to &quot;Ajouter un code utilisateur utilisateur&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:left;">#</th><th style="text-align:left;">Role</th><th style="text-align:left;">code</th></tr></thead><tbody><tr><td style="text-align:left;">1</td><td style="text-align:left;">Master</td><td style="text-align:left;">61</td></tr><tr><td style="text-align:left;">2</td><td style="text-align:left;">Technicien</td><td style="text-align:left;">62</td></tr><tr><td style="text-align:left;">3</td><td style="text-align:left;">User</td><td style="text-align:left;">63</td></tr><tr><td style="text-align:left;">4</td><td style="text-align:left;">User</td><td style="text-align:left;">64</td></tr><tr><td style="text-align:left;">5</td><td style="text-align:left;">User</td><td style="text-align:left;">65</td></tr><tr><td style="text-align:left;">6</td><td style="text-align:left;">User</td><td style="text-align:left;">66</td></tr><tr><td style="text-align:left;">7</td><td style="text-align:left;">User</td><td style="text-align:left;">67</td></tr><tr><td style="text-align:left;">8</td><td style="text-align:left;">User</td><td style="text-align:left;">68</td></tr></tbody></table><p>Exemple : 4321 + <code>PROG</code> + 63 + code + <code>PROG</code> = user 3</p><h2 id="visualiser-le-numero-d-utiliasteur" tabindex="-1">Visualiser le numero d&#39;utiliasteur <a class="header-anchor" href="#visualiser-le-numero-d-utiliasteur" aria-label="Permalink to &quot;Visualiser le numero d&#39;utiliasteur&quot;">​</a></h2><p>code + <code>PROG</code> + 69</p><h2 id="visualiser-le-niveau-d-habilite" tabindex="-1">Visualiser le niveau d&#39;habilité <a class="header-anchor" href="#visualiser-le-niveau-d-habilite" aria-label="Permalink to &quot;Visualiser le niveau d&#39;habilité&quot;">​</a></h2><p>code + <code>PROG</code> + 79</p><h2 id="habiliter-un-code-utilisateur" tabindex="-1">Habiliter un code utilisateur <a class="header-anchor" href="#habiliter-un-code-utilisateur" aria-label="Permalink to &quot;Habiliter un code utilisateur&quot;">​</a></h2><p>4321 + <code>PROG</code> + 73 + 1 + <code>PROG</code> = type user 1<br> 4321 + <code>PROG</code> + 74 + 1 + <code>PROG</code> = type user 1<br> 4321 + <code>PROG</code> + 75 + 1 + <code>PROG</code> = type user 1<br> 4321 + <code>PROG</code> + 76 + 1 + <code>PROG</code> = type user 1<br> 4321 + <code>PROG</code> + 77 + 1 + <code>PROG</code> = type user 1<br> 4321 + <code>PROG</code> + 78 + 1 + <code>PROG</code> = type user 1</p><h2 id="temporisations" tabindex="-1">Temporisations <a class="header-anchor" href="#temporisations" aria-label="Permalink to &quot;Temporisations&quot;">​</a></h2><p>1234 + <code>PROG</code> + 31 + temps mn (15s) pour la temporisation en sortie totale<br> 1234 + <code>PROG</code> + 32 + temps mn (15s) pour la temporisation en sortie partielle<br> 1234 + <code>PROG</code> + 33 + temps mn (15s) pour la temporisation en entrée totale<br> 1234 + <code>PROG</code> + 34 + temps mn (15s) pour la temporisation en entrée partielle</p><h2 id="types-de-zones" tabindex="-1">Types de zones <a class="header-anchor" href="#types-de-zones" aria-label="Permalink to &quot;Types de zones&quot;">​</a></h2><p>2 = Exclue<br> 3 = Immédiate<br> 6 = Entrée / Sortie<br> 7 = Panique</p><h2 id="types-de-codes" tabindex="-1">Types de codes <a class="header-anchor" href="#types-de-codes" aria-label="Permalink to &quot;Types de codes&quot;">​</a></h2><p>1 = Utilisateur<br> 2 = Technicien<br> 5 = Maitre utilisateur</p><h2 id="types-de-zones-1" tabindex="-1">types de zones <a class="header-anchor" href="#types-de-zones-1" aria-label="Permalink to &quot;types de zones&quot;">​</a></h2><ol><li>appuyer pour armer</li><li>Entrée inhibé</li><li>Garde</li><li>Incendie</li><li>Autoprotection</li><li>Entrée sortie</li><li>Panique</li><li>Clé déporté</li></ol><h2 id="programmation-de-zone" tabindex="-1">Programmation de zone <a class="header-anchor" href="#programmation-de-zone" aria-label="Permalink to &quot;Programmation de zone&quot;">​</a></h2><ul><li>Zone 1 =&gt; 1234 + <code>PROG</code> + 11 + (type de zone)+ <code>PROG</code></li><li>Zone 2 =&gt; 1234 + <code>PROG</code> + 12 + (type de zone)+ <code>PROG</code></li><li>Zone 3 =&gt; 1234 + <code>PROG</code> + 13 + (type de zone)+ <code>PROG</code></li><li>Zone 4 =&gt; 1234 + <code>PROG</code> + 14 + (type de zone)+ <code>PROG</code></li><li>Zone 5 =&gt; 1234 + <code>PROG</code> + 15 + (type de zone)+ <code>PROG</code></li><li>Zone 6 =&gt; 1234 + <code>PROG</code> + 16 + (type de zone)+ <code>PROG</code></li><li>Zone 7 =&gt; 1234 + <code>PROG</code> + 17 + (type de zone)+ <code>PROG</code></li><li>Zone 8 =&gt; 1234 + <code>PROG</code> + 18 + (type de zone)+ <code>PROG</code></li></ul>',29)]))}const m=t(i,[["render",o]]);export{p as __pageData,m as default};
