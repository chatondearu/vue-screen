import{o as n,c as s,d as a}from"./app.89f185b4.js";const e='{"title":"Materialize","description":"","frontmatter":{"editLink":true},"relativePath":"guide/frameworks/materialize.md","lastUpdated":1615734852194}',t={},p=a('<h1 id="materialize"><a class="header-anchor" href="#materialize" aria-hidden="true">#</a> Materialize</h1><p>To use Materialize as your UI framework, simply pass it to the configuration</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useGrid <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-screen&#39;</span>\n<span class="token keyword">const</span> grid <span class="token operator">=</span> <span class="token function">useGrid</span><span class="token punctuation">(</span><span class="token string">&#39;materialize&#39;</span><span class="token punctuation">)</span>\n</code></pre></div><div class="language-js"><pre><code><span class="token keyword">import</span> VueScreen <span class="token keyword">from</span> <span class="token string">&#39;vue-screen&#39;</span>\n<span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueScreen<span class="token punctuation">,</span> <span class="token string">&#39;materialize&#39;</span><span class="token punctuation">)</span>\n</code></pre></div><p>Your grid object will contain the following properties:</p><div class="language-ts"><pre><code><span class="token punctuation">{</span>\n  s<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span>\n  m<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span>\n  l<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span>\n  xl<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span>\n  breakpoint<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token comment">// the current breakpoint</span>\n<span class="token punctuation">}</span>\n</code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>The actual values of the properties depend on the screen size.</p></div>',7);t.render=function(a,e,t,o,c,i){return n(),s("div",null,[p])};export default t;export{e as __pageData};
