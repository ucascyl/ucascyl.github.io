import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as t}from"./app-EDFqs7W4.js";const p={},e=t(`<h1 id="方法引用" tabindex="-1"><a class="header-anchor" href="#方法引用"><span>方法引用</span></a></h1><p>方法引用是一种简化Lambda表达式的语法结构，它提供了一种更简洁的方式来调用已经存在的方法。方法引用可以替代某些Lambda表达式，使得代码更加简洁易读</p><p>方法引用的语法形式是 <code>::</code>，它可以用来引用以下几种类型的方法：</p><ol><li>静态方法</li><li>实例方法</li><li>构造方法</li></ol><ul><li>静态方法引用：<code>ClassName::staticMethodName</code></li><li>实例方法引用： <ul><li>实例方法引用：<code>instance::methodName</code></li><li>类名::实例方法名</li></ul></li><li>构造方法引用：<code>ClassName::new</code></li></ul><h1 id="_2-示例" tabindex="-1"><a class="header-anchor" href="#_2-示例"><span>2. 示例</span></a></h1><h2 id="_2-1-对象名-方法名" tabindex="-1"><a class="header-anchor" href="#_2-1-对象名-方法名"><span>2.1 对象名：方法名</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token class-name">Date</span> now <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">Supplier</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> supplier <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token punctuation">{</span><span class="token keyword">return</span> now<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>supplier<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
<span class="token comment">// 然后我们通过 方法引用 的方式来处理</span>
	<span class="token class-name">Supplier</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> supplier1 <span class="token operator">=</span> now<span class="token operator">::</span><span class="token function">getTime</span><span class="token punctuation">;</span>
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>supplier1<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法引用的注意事项</p><ol><li>被引用的方法，参数要和接口中的抽象方法的参数一样</li><li>当接口抽象方法有返回值时，被引用的方法也必须有返回值</li></ol><h2 id="_2-2-类名-静态方法名" tabindex="-1"><a class="header-anchor" href="#_2-2-类名-静态方法名"><span>2.2 类名::静态方法名</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FunctionRefTest04</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">Supplier</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> supplier1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>supplier1<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
		<span class="token comment">// 通过 方法引用 来实现</span>
		<span class="token class-name">Supplier</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> supplier2 <span class="token operator">=</span> <span class="token class-name">System</span><span class="token operator">::</span><span class="token function">currentTimeMillis</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>supplier2<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-3-类名-引用实例方法" tabindex="-1"><a class="header-anchor" href="#_2-3-类名-引用实例方法"><span>2.3 类名::引用实例方法</span></a></h2><h2 id="_2-4-类名-构造器" tabindex="-1"><a class="header-anchor" href="#_2-4-类名-构造器"><span>2.4 类名::构造器</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FunctionRefTest06</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">Supplier</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">&gt;</span></span> sup <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sup<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
		<span class="token comment">// 然后通过 方法引用来实现</span>
		<span class="token class-name">Supplier</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">&gt;</span></span> sup1 <span class="token operator">=</span> <span class="token class-name">Person</span><span class="token operator">::</span><span class="token keyword">new</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>sup1<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">BiFunction</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">Integer</span><span class="token punctuation">,</span><span class="token class-name">Person</span><span class="token punctuation">&gt;</span></span> function <span class="token operator">=</span> <span class="token class-name">Person</span><span class="token operator">::</span><span class="token keyword">new</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>function<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span><span class="token number">22</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-5-数组-构造器" tabindex="-1"><a class="header-anchor" href="#_2-5-数组-构造器"><span>2.5 数组::构造器</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token class-name">Function</span><span class="token operator">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> fun1 <span class="token operator">=</span> <span class="token punctuation">(</span>len<span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span>len<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a1 <span class="token operator">=</span> fun1<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;数组的长度是：&quot;</span> <span class="token operator">+</span> a1<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 方法引用 的方式来调用数组的构造器</span>
	<span class="token class-name">Function</span><span class="token operator">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> fun2 <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">::</span><span class="token keyword">new</span><span class="token punctuation">;</span>
	<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a2 <span class="token operator">=</span> fun2<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;数组的长度是：&quot;</span> <span class="token operator">+</span> a2<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),c=[e];function o(l,i){return s(),a("div",null,c)}const r=n(p,[["render",o],["__file","方法引用.html.vue"]]),d=JSON.parse('{"path":"/guide/JDK8%E6%96%B0%E7%89%B9%E6%80%A7/%E6%96%B9%E6%B3%95%E5%BC%95%E7%94%A8.html","title":"方法引用","lang":"zh-CN","frontmatter":{"order":4,"title":"方法引用","description":"方法引用 方法引用是一种简化Lambda表达式的语法结构，它提供了一种更简洁的方式来调用已经存在的方法。方法引用可以替代某些Lambda表达式，使得代码更加简洁易读 方法引用的语法形式是 ::，它可以用来引用以下几种类型的方法： 静态方法 实例方法 构造方法 静态方法引用：ClassName::staticMethodName 实例方法引用： 实例方法...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/guide/JDK8%E6%96%B0%E7%89%B9%E6%80%A7/%E6%96%B9%E6%B3%95%E5%BC%95%E7%94%A8.html"}],["meta",{"property":"og:site_name","content":"文档演示"}],["meta",{"property":"og:title","content":"方法引用"}],["meta",{"property":"og:description","content":"方法引用 方法引用是一种简化Lambda表达式的语法结构，它提供了一种更简洁的方式来调用已经存在的方法。方法引用可以替代某些Lambda表达式，使得代码更加简洁易读 方法引用的语法形式是 ::，它可以用来引用以下几种类型的方法： 静态方法 实例方法 构造方法 静态方法引用：ClassName::staticMethodName 实例方法引用： 实例方法..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"cylin"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"方法引用\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"cylin\\",\\"url\\":\\"https://docs.cylin.cn\\"}]}"]]},"headers":[{"level":2,"title":"2.1 对象名：方法名","slug":"_2-1-对象名-方法名","link":"#_2-1-对象名-方法名","children":[]},{"level":2,"title":"2.2 类名::静态方法名","slug":"_2-2-类名-静态方法名","link":"#_2-2-类名-静态方法名","children":[]},{"level":2,"title":"2.3 类名::引用实例方法","slug":"_2-3-类名-引用实例方法","link":"#_2-3-类名-引用实例方法","children":[]},{"level":2,"title":"2.4 类名::构造器","slug":"_2-4-类名-构造器","link":"#_2-4-类名-构造器","children":[]},{"level":2,"title":"2.5 数组::构造器","slug":"_2-5-数组-构造器","link":"#_2-5-数组-构造器","children":[]}],"git":{},"readingTime":{"minutes":1.46,"words":439},"filePathRelative":"guide/JDK8新特性/方法引用.md","autoDesc":true}');export{r as comp,d as data};
