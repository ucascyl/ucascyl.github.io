import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,d as e}from"./app-EDFqs7W4.js";const p={},t=e(`<h2 id="写在前面" tabindex="-1"><a class="header-anchor" href="#写在前面"><span>写在前面</span></a></h2><p><strong>三个方法的区别：</strong></p><ul><li><code>compute</code>：计算并更新值</li><li><code>computeIfAbsent</code>：<code>Value</code>不存在时才计算</li><li><code>computeIfPresent</code>：<code>Value</code>存在时才计算</li></ul><p><code>computeIfAbsent</code>不存在时，才会更新，所以只需要传入一个<code>Key</code>即可，而其他的两个都需要传递一个<code>map</code>键值对</p><h2 id="compute" tabindex="-1"><a class="header-anchor" href="#compute"><span>compute</span></a></h2><p><strong>使用</strong></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// map中如果存在 key 则将 value 值+1， 如果不存在则 置为 1</span>
map<span class="token punctuation">.</span><span class="token function">compute</span><span class="token punctuation">(</span>cur_sum<span class="token punctuation">,</span> <span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> value <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">?</span> value<span class="token operator">+</span><span class="token number">1</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>源码</strong></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">default</span> <span class="token class-name">V</span> <span class="token function">compute</span><span class="token punctuation">(</span><span class="token class-name">K</span> key<span class="token punctuation">,</span>
        <span class="token class-name">BiFunction</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">super</span> <span class="token class-name">K</span><span class="token punctuation">,</span> <span class="token operator">?</span> <span class="token keyword">super</span> <span class="token class-name">V</span><span class="token punctuation">,</span> <span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> remappingFunction<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        
    <span class="token comment">// 函数式接口不能为空    </span>
    <span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">requireNonNull</span><span class="token punctuation">(</span>remappingFunction<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 获取旧值</span>
    <span class="token class-name">V</span> oldValue <span class="token operator">=</span> <span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 获取计算的新值</span>
    <span class="token class-name">V</span> newValue <span class="token operator">=</span> remappingFunction<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">if</span> <span class="token punctuation">(</span>newValue <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 新值为空</span>
        <span class="token comment">// delete mapping</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>oldValue <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">||</span> <span class="token function">containsKey</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 旧值存在时</span>
            <span class="token comment">// 移除该键值</span>
            <span class="token function">remove</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// nothing to do. Leave things as they were.</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">// 新值不为空</span>
        <span class="token comment">// 添加或者覆盖旧值</span>
        <span class="token function">put</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> newValue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="computeifabsent" tabindex="-1"><a class="header-anchor" href="#computeifabsent"><span>computeIfAbsent</span></a></h2><p><strong>使用</strong></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// Function&lt;? super K, ? extends V&gt; K是传入类型，V是返回类型</span>
<span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 传入类型 -&gt; 返回类型</span>
<span class="token comment">// 如果用不到传入类型，可以直接省略掉</span>
<span class="token comment">// map.computeIfAbsent(2, 999)</span>
map<span class="token punctuation">.</span><span class="token function">computeIfAbsent</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> key <span class="token operator">-&gt;</span> key<span class="token operator">+</span><span class="token number">999</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">computeIfAbsent</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> key <span class="token operator">-&gt;</span> key<span class="token operator">+</span><span class="token number">999</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>源码</strong></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * 如果指定的key不存在于映射中，则根据指定的映射函数进行计算并将其放入映射中。
     * 如果映射函数返回null，则不执行任何操作，直接返回null。
     *
     * <span class="token keyword">@param</span> <span class="token parameter">key</span>             要计算新值的key
     * <span class="token keyword">@param</span> <span class="token parameter">mappingFunction</span> 根据指定的key计算新值的映射函数
     * <span class="token keyword">@return</span> 计算出的新值，如果key已存在于映射中，则返回其对应的旧值；如果映射函数返回null，则返回null
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">NullPointerException</span></span> 如果指定的映射函数为null
     */</span>
    <span class="token keyword">default</span> <span class="token class-name">V</span> <span class="token function">computeIfAbsent</span><span class="token punctuation">(</span><span class="token class-name">K</span> key<span class="token punctuation">,</span>
                              <span class="token class-name">Function</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">super</span> <span class="token class-name">K</span><span class="token punctuation">,</span> <span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> mappingFunction<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">requireNonNull</span><span class="token punctuation">(</span>mappingFunction<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">V</span> v<span class="token punctuation">;</span>
        <span class="token comment">// 尝试获取key对应的值</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>v <span class="token operator">=</span> <span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">V</span> newValue<span class="token punctuation">;</span>
            <span class="token comment">// 根据映射函数计算新值</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>newValue <span class="token operator">=</span> mappingFunction<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 将新值放入映射中</span>
                <span class="token function">put</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span> newValue<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 如果key已存在于映射中，则返回其对应的旧值；如果映射函数返回null，则返回null</span>
        <span class="token keyword">return</span> v<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="computeifpresent" tabindex="-1"><a class="header-anchor" href="#computeifpresent"><span>computeIfPresent</span></a></h2><p><strong>使用</strong></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>map<span class="token punctuation">.</span><span class="token function">computeIfPresent</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token operator">-&gt;</span> value<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>源码</strong></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 如果指定的键存在且其关联的值不为 null，则尝试根据提供的 remappingFunction 对其进行重新映射。
 * 如果 remappingFunction 返回非 null 的值，则将其与键关联；如果返回 null，则移除键的映射关系。
 * 如果指定的键不存在或其关联的值为 null，则不执行任何操作并返回 null。
 *
 * <span class="token keyword">@param</span> <span class="token parameter">key</span>               要重新映射的键
 * <span class="token keyword">@param</span> <span class="token parameter">remappingFunction</span> 用于重新映射的函数，接受键和其当前关联值作为参数，并返回新的值
 * <span class="token keyword">@return</span> 如果指定的键存在且已成功重新映射，则返回新的映射值；如果键不存在或重新映射为 null，则返回 null
 * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">NullPointerException</span></span> 如果 remappingFunction 为 null
 */</span>
<span class="token keyword">default</span> <span class="token class-name">V</span> <span class="token function">computeIfPresent</span><span class="token punctuation">(</span><span class="token class-name">K</span> key<span class="token punctuation">,</span>
        <span class="token class-name">BiFunction</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">super</span> <span class="token class-name">K</span><span class="token punctuation">,</span> <span class="token operator">?</span> <span class="token keyword">super</span> <span class="token class-name">V</span><span class="token punctuation">,</span> <span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> remappingFunction<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">requireNonNull</span><span class="token punctuation">(</span>remappingFunction<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">V</span> oldValue<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>oldValue <span class="token operator">=</span> <span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 通过 remappingFunction 获取新值</span>
        <span class="token class-name">V</span> newValue <span class="token operator">=</span> remappingFunction<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>newValue <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 如果新值不为 null，则用新值替换旧值</span>
            <span class="token function">put</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> newValue<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// 如果新值为 null，则移除键的映射关系</span>
            <span class="token function">remove</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// 如果指定的键不存在或其关联的值为 null，则不执行任何操作并返回 null</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),c=[t];function o(l,u){return s(),a("div",null,c)}const r=n(p,[["render",o],["__file","compute.html.vue"]]),d=JSON.parse('{"path":"/guide/Java%E6%BA%90%E7%A0%81/compute.html","title":"JDK8中的compute、computeIfAbsent、computeIfPresent","lang":"zh-CN","frontmatter":{"order":2,"title":"JDK8中的compute、computeIfAbsent、computeIfPresent","description":"写在前面 三个方法的区别： compute：计算并更新值 computeIfAbsent：Value不存在时才计算 computeIfPresent：Value存在时才计算 computeIfAbsent不存在时，才会更新，所以只需要传入一个Key即可，而其他的两个都需要传递一个map键值对 compute 使用 源码 computeIfAbsent ...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/guide/Java%E6%BA%90%E7%A0%81/compute.html"}],["meta",{"property":"og:site_name","content":"文档演示"}],["meta",{"property":"og:title","content":"JDK8中的compute、computeIfAbsent、computeIfPresent"}],["meta",{"property":"og:description","content":"写在前面 三个方法的区别： compute：计算并更新值 computeIfAbsent：Value不存在时才计算 computeIfPresent：Value存在时才计算 computeIfAbsent不存在时，才会更新，所以只需要传入一个Key即可，而其他的两个都需要传递一个map键值对 compute 使用 源码 computeIfAbsent ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"cylin"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JDK8中的compute、computeIfAbsent、computeIfPresent\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"cylin\\",\\"url\\":\\"https://docs.cylin.cn\\"}]}"]]},"headers":[{"level":2,"title":"写在前面","slug":"写在前面","link":"#写在前面","children":[]},{"level":2,"title":"compute","slug":"compute","link":"#compute","children":[]},{"level":2,"title":"computeIfAbsent","slug":"computeifabsent","link":"#computeifabsent","children":[]},{"level":2,"title":"computeIfPresent","slug":"computeifpresent","link":"#computeifpresent","children":[]}],"git":{},"readingTime":{"minutes":2.86,"words":859},"filePathRelative":"guide/Java源码/compute.md","autoDesc":true}');export{r as comp,d as data};