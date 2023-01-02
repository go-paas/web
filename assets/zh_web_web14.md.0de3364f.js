import{_ as s,c as n,o as a,a as l}from"./app.e68546b0.js";const F=JSON.parse('{"title":"1\u3001\u5BF9this\u7684\u7406\u89E3","description":"","frontmatter":{},"headers":[{"level":2,"title":"1\u3001\u5BF9this\u7684\u7406\u89E3","slug":"_1\u3001\u5BF9this\u7684\u7406\u89E3"},{"level":2,"title":"2\u3001new\u64CD\u4F5C\u7B26\u505A\u4E86\u4EC0\u4E48","slug":"_2\u3001new\u64CD\u4F5C\u7B26\u505A\u4E86\u4EC0\u4E48"},{"level":2,"title":"3\u3001git\u5982\u4F55\u7BA1\u7406\u4E00\u4E2A\u9879\u76EE","slug":"_3\u3001git\u5982\u4F55\u7BA1\u7406\u4E00\u4E2A\u9879\u76EE"},{"level":2,"title":"4\u3001git\u5982\u4F55\u89E3\u51B3\u5408\u5E76\u51B2\u7A81","slug":"_4\u3001git\u5982\u4F55\u89E3\u51B3\u5408\u5E76\u51B2\u7A81"},{"level":2,"title":"5\u3001\u4EC0\u4E48\u662Fpromise\uFF0C\u7279\u70B9\u662F\u4EC0\u4E48","slug":"_5\u3001\u4EC0\u4E48\u662Fpromise\uFF0C\u7279\u70B9\u662F\u4EC0\u4E48"},{"level":2,"title":"6\u3001promise\u7684\u65B9\u6CD5\u6709\u54EA\u4E9B\uFF0C\u80FD\u8BF4\u660E\u5176\u4F5C\u7528","slug":"_6\u3001promise\u7684\u65B9\u6CD5\u6709\u54EA\u4E9B\uFF0C\u80FD\u8BF4\u660E\u5176\u4F5C\u7528"},{"level":2,"title":"7\u3001async\u548Cawait\u662F\u5E72\u4EC0\u4E48\u7684","slug":"_7\u3001async\u548Cawait\u662F\u5E72\u4EC0\u4E48\u7684"},{"level":2,"title":"8\u3001\u600E\u4E48\u7406\u89E3\u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236(Event Loop)","slug":"_8\u3001\u600E\u4E48\u7406\u89E3\u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236-event-loop"}],"relativePath":"zh/web/web14.md"}'),p={name:"zh/web/web14.md"},e=l(`<h2 id="_1\u3001\u5BF9this\u7684\u7406\u89E3" tabindex="-1">1\u3001\u5BF9this\u7684\u7406\u89E3 <a class="header-anchor" href="#_1\u3001\u5BF9this\u7684\u7406\u89E3" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u7B54: this\u662F\u4E2A\u5173\u952E\u5B57,\u5B83\u7684\u6307\u5411\u548C\u51FD\u6570\u7684\u8C03\u7528\u65B9\u5F0F\u6709\u5173</span></span>
<span class="line"><span style="color:#A6ACCD;">1. \u51FD\u6570\u8C03\u7528\u6A21\u5F0F, this\u6307\u5411window</span></span>
<span class="line"><span style="color:#A6ACCD;">2. \u6784\u9020\u51FD\u6570\u8C03\u7528\u6A21\u5F0F, this\u6307\u5411\u65B0\u521B\u5EFA\u7684\u5B9E\u4F8B\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">3. \u65B9\u6CD5\u8C03\u7528\u6A21\u5F0F, this\u6307\u5411\u8C03\u7528\u65B9\u6CD5\u7684\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">4. \u4E0A\u4E0B\u6587\u8C03\u7528\u6A21\u5F0F, call\u548Capply\u65B9\u6CD5\u4E2D, this\u6307\u5411\u65B9\u6CD5\u5185\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">                  bind\u65B9\u6CD5\u4E2D, bind\u521B\u5EFA\u7684\u65B0\u51FD\u6570\u7684this\u7ED1\u5B9A\u4E3Abind\u65B9\u6CD5\u4E2D\u65B0\u7684\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">5. \u5728\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u4E2D,this\u6307\u5411\u89E6\u53D1\u4E8B\u4EF6\u7684\u5F53\u524D\u5143\u7D20</span></span>
<span class="line"><span style="color:#A6ACCD;">6. \u5B9A\u65F6\u5668\u4E2D,this\u6307\u5411window</span></span>
<span class="line"><span style="color:#A6ACCD;">7. \u7BAD\u5934\u51FD\u6570\u4E2D\u6CA1\u6709this\u6307\u5411\u95EE\u9898,\u5B83\u7684this\u548C\u5916\u5C42\u4F5C\u7528\u57DF\u7684this\u4FDD\u6301\u4E00\u81F4</span></span>
<span class="line"><span style="color:#A6ACCD;">8. \u533F\u540D\u51FD\u6570\u4E2D\u7684this\u603B\u662F\u6307\u5411window</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_2\u3001new\u64CD\u4F5C\u7B26\u505A\u4E86\u4EC0\u4E48" tabindex="-1">2\u3001new\u64CD\u4F5C\u7B26\u505A\u4E86\u4EC0\u4E48 <a class="header-anchor" href="#_2\u3001new\u64CD\u4F5C\u7B26\u505A\u4E86\u4EC0\u4E48" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u7B54:  1. \u521B\u5EFA\u4E00\u4E2A\u65B0\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">	2. \u51FD\u6570\u5185\u90E8\u7684this\u6307\u5411\u8FD9\u4E2A\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">	3. \u6267\u884C\u51FD\u6570\u4F53</span></span>
<span class="line"><span style="color:#A6ACCD;">	4. \u81EA\u52A8\u8FD4\u56DE\u8FD9\u4E2A\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_3\u3001git\u5982\u4F55\u7BA1\u7406\u4E00\u4E2A\u9879\u76EE" tabindex="-1">3\u3001git\u5982\u4F55\u7BA1\u7406\u4E00\u4E2A\u9879\u76EE <a class="header-anchor" href="#_3\u3001git\u5982\u4F55\u7BA1\u7406\u4E00\u4E2A\u9879\u76EE" aria-hidden="true">#</a></h2><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">1\u3001git\u7BA1\u7406\u9879\u76EE\u6D41\u7A0B</span></span>
<span class="line"><span style="color:#A6ACCD;">\u7B54: 1\u3001git init\u521D\u59CB\u5316git\u4ED3\u5E93\uFF08\u65B0\u9879\u76EE\u624D\u6709\u8FD9\u4E00\u6B65\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">    2\u3001git clone\u5C06\u8FDC\u7A0B\u4ED3\u5E93\u7684\u9879\u76EE\u8D44\u6599\u4E0B\u8F7D\u4E0B\u6765</span></span>
<span class="line"><span style="color:#A6ACCD;">    3\u3001git checkout -b dev (dev \u4E3A\u672C\u5730\u5206\u652F\u540D\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">    4\u3001git add .\u5C06\u5DE5\u4F5C\u533A\u6587\u4EF6\u5B58\u5728\u6682\u5B58\u533A</span></span>
<span class="line"><span style="color:#A6ACCD;">    4\u3001git commit -m  &quot;&quot;\u4ECE\u6682\u5B58\u533A\u5B58\u5230\u4ED3\u50A8\u533A</span></span>
<span class="line"><span style="color:#A6ACCD;">    5\u3001git checkout master\u5207\u5230master\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">    6\u3001git merge dev \u5408\u5E76\u5206\u652F,\u5408\u5E76\u540E\u8981\u5C06\u5206\u652F\u5220\u9664</span></span>
<span class="line"><span style="color:#A6ACCD;">    7\u3001\u4F7F\u7528git push\u5C06\u5176\u4E0A\u4F20\u5230\u8FDC\u7A0B\u4ED3\u5E93</span></span>
<span class="line"><span style="color:#A6ACCD;">    8\u3001\u7B2C\u4E8C\u4E0A\u73ED\uFF0C\u5148pull\u4E00\u4E0B\uFF0C\u66F4\u65B0\u6700\u65B0\u4EE3\u7801</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_4\u3001git\u5982\u4F55\u89E3\u51B3\u5408\u5E76\u51B2\u7A81" tabindex="-1">4\u3001git\u5982\u4F55\u89E3\u51B3\u5408\u5E76\u51B2\u7A81 <a class="header-anchor" href="#_4\u3001git\u5982\u4F55\u89E3\u51B3\u5408\u5E76\u51B2\u7A81" aria-hidden="true">#</a></h2><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">git\u89E3\u51B3\u5408\u5E76\u51B2\u7A81</span></span>
<span class="line"><span style="color:#A6ACCD;">\u7B54\uFF1A\u51B2\u7A81\u7684\u539F\u56E0\uFF1A\u4EE3\u7801\u63D0\u4EA4\u7684\u65F6\u5019\uFF0C\u5728\u5F53\u524D\u884C\u6709\u65B0\u7684\u4EE3\u7801\u8981\u52A0\u5165\uFF0C\u5C31\u4F1A\u51FA\u73B0\u51B2\u7A81\u3002\u4F8B\u5982\uFF1A20\u884C\u5DF2\u7ECF\u6709\u4EE3\u7801\u4E86\uFF0C\u4F46\u662F\u5408\u5E76\u7684\u7684\u4EE3\u780120\u884C\u4E5F\u662F\u6709\u4EE3\u7801\uFF0C\u8FD9\u6837\u5C31\u4F1A\u51FA\u73B0\u51B2\u7A81\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">	\u89E3\u51B3\u529E\u6CD5\uFF1A\u5982\u679C\u662F\u53CC\u65B9\u7684\u4EE3\u7801\u662F\u4E0D\u540C\u7684\u4E1A\u52A1\uFF0C\u90A3\u5C31\u4FDD\u7559\u53CC\u65B9\u53CC\u65B9\u66F4\u6539\uFF08vscode\u6709\u63D0\u793A\uFF09\u3002\u5982\u679C\u662F\u91CD\u590D\u7684\u4E1A\u52A1\u903B\u8F91\uFF0C\u90A3\u5C31\u9009\u62E9\u91C7\u7528\u5F53\u524D\u66F4\u6539\uFF08vscode\u6709\u63D0\u793A\uFF09\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"></span></code></pre></div><h2 id="_5\u3001\u4EC0\u4E48\u662Fpromise\uFF0C\u7279\u70B9\u662F\u4EC0\u4E48" tabindex="-1">5\u3001\u4EC0\u4E48\u662Fpromise\uFF0C\u7279\u70B9\u662F\u4EC0\u4E48 <a class="header-anchor" href="#_5\u3001\u4EC0\u4E48\u662Fpromise\uFF0C\u7279\u70B9\u662F\u4EC0\u4E48" aria-hidden="true">#</a></h2><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">	\u9996\u5148\uFF0C\u5B83\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u4E5F\u5C31\u662F\u8BF4\u4E0E\u5176\u4ED6JavaScript\u5BF9\u8C61\u7684\u7528\u6CD5\uFF0C\u6CA1\u6709\u4EC0\u4E48\u4E24\u6837\uFF1B\u5B83\u4F7F\u5F97\u5F02\u6B65\u64CD\u4F5C\u5177\u5907\u540C\u6B65\u64CD\u4F5C\u7684\u6548\u679C\uFF0C\u4F7F\u5F97\u7A0B\u5E8F\u5177\u5907\u6B63\u5E38\u7684\u540C\u6B65\u8FD0\u884C\u7684\u6D41\u7A0B\uFF0C\u56DE\u8C03\u51FD\u6570\u4E0D\u5FC5\u518D\u4E00\u5C42\u5C42\u5D4C\u5957\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">	\u7B80\u5355\u8BF4\uFF0C\u5B83\u7684\u601D\u60F3\u662F\uFF0C\u6BCF\u4E00\u4E2A\u5F02\u6B65\u4EFB\u52A1\u7ACB\u523B\u8FD4\u56DE\u4E00\u4E2APromise\u5BF9\u8C61\uFF0C\u7531\u4E8E\u662F\u7ACB\u523B\u8FD4\u56DE\uFF0C\u6240\u4EE5\u53EF\u4EE5\u91C7\u7528\u540C\u6B65\u64CD\u4F5C\u7684\u6D41\u7A0B\u3002\u8FD9\u4E2APromises\u5BF9\u8C61\u6709\u4E00\u4E2Athen\u65B9\u6CD5\uFF0C\u5141\u8BB8\u6307\u5B9A\u56DE\u8C03\u51FD\u6570\uFF0C\u5728\u5F02\u6B65\u4EFB\u52A1\u5B8C\u6210\u540E\u8C03\u7528\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;"> \u7279\u70B9\uFF1A</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">\u3001Promise\u5BF9\u8C61\u53EA\u6709\u4E09\u79CD\u72B6\u6001\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u5F02\u6B65\u64CD\u4F5C\u201C\u672A\u5B8C\u6210\u201D\uFF08pending\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u5F02\u6B65\u64CD\u4F5C\u201C\u5DF2\u5B8C\u6210\u201D\uFF08resolved\uFF0C\u53C8\u79F0fulfilled\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u5F02\u6B65\u64CD\u4F5C\u201C\u5931\u8D25\u201D\uFF08rejected\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u5F02\u6B65\u64CD\u4F5C\u6210\u529F\uFF0CPromise\u5BF9\u8C61\u4F20\u56DE\u4E00\u4E2A\u503C\uFF0C\u72B6\u6001\u53D8\u4E3Aresolved\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u5F02\u6B65\u64CD\u4F5C\u5931\u8D25\uFF0CPromise\u5BF9\u8C61\u629B\u51FA\u4E00\u4E2A\u9519\u8BEF\uFF0C\u72B6\u6001\u53D8\u4E3Arejected\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">\u3001promise\u7684\u56DE\u8C03\u662F\u540C\u6B65\u7684\uFF0Cthen\u662F\u5F02\u6B65\u7684</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">\u3001\u53EF\u4EE5\u94FE\u5F0F\u8C03\u7528</span></span>
<span class="line"></span></code></pre></div><h2 id="_6\u3001promise\u7684\u65B9\u6CD5\u6709\u54EA\u4E9B\uFF0C\u80FD\u8BF4\u660E\u5176\u4F5C\u7528" tabindex="-1">6\u3001promise\u7684\u65B9\u6CD5\u6709\u54EA\u4E9B\uFF0C\u80FD\u8BF4\u660E\u5176\u4F5C\u7528 <a class="header-anchor" href="#_6\u3001promise\u7684\u65B9\u6CD5\u6709\u54EA\u4E9B\uFF0C\u80FD\u8BF4\u660E\u5176\u4F5C\u7528" aria-hidden="true">#</a></h2><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u539F\u578B\u4E0A\u7684\u65B9\u6CD5\uFF1A</span></span>
<span class="line"><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">\u3001</span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">\uFF09\u4F5C\u7528\u662F\u4E3A </span><span style="color:#FFCB6B;">Promise</span><span style="color:#A6ACCD;"> \u5B9E\u4F8B\u6DFB\u52A0\u72B6\u6001\u6539\u53D8\u65F6\u7684\u56DE\u8C03\u51FD\u6570\u3002\u63A5\u53D7\u4E24\u4E2A\u56DE\u8C03\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\u3002\u7B2C\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u662FPromise\u5BF9\u8C61\u7684\u72B6\u6001\u53D8\u4E3Aresolved\u65F6\u8C03\u7528\uFF0C\u7B2C\u4E8C\u4E2A\u56DE\u8C03\u51FD\u6570\u662FPromise\u5BF9\u8C61\u7684\u72B6\u6001\u53D8\u4E3Arejected\u65F6\u8C03\u7528\u3002\u5176\u4E2D\uFF0C\u7B2C\u4E8C\u4E2A\u51FD\u6570\u662F\u53EF\u9009\u7684\uFF0C\u4E0D\u4E00\u5B9A\u8981\u63D0\u4F9B\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">\uFF09\u8FD4\u56DE\u7684\u662F\u53E6\u4E00\u4E2APromise\u5BF9\u8C61\uFF0C\u540E\u9762\u8FD8\u53EF\u4EE5\u63A5\u7740\u8C03\u7528then\u65B9\u6CD5\u3002</span></span>
<span class="line"><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">\u3001</span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">catch</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">\uFF09\u7528\u4E8E\u6307\u5B9A\u53D1\u751F\u9519\u8BEF\u65F6\u7684\u56DE\u8C03\u51FD\u6570\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">\uFF09\u8FD4\u56DE\u7684\u4E5F\u662F\u4E00\u4E2A </span><span style="color:#FFCB6B;">Promise</span><span style="color:#A6ACCD;"> \u5BF9\u8C61\uFF0C\u56E0\u6B64\u8FD8\u53EF\u4EE5\u63A5\u7740\u8C03\u7528then\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">\u3001</span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">finally</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">\uFF09finally\u65B9\u6CD5\u7528\u4E8E\u6307\u5B9A\u4E0D\u7BA1 </span><span style="color:#FFCB6B;">Promise</span><span style="color:#A6ACCD;"> \u5BF9\u8C61\u6700\u540E\u72B6\u6001\u5982\u4F55\uFF0C\u90FD\u4F1A\u6267\u884C\u7684\u56DE\u8C03\u51FD\u6570\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">\uFF09finally\u65B9\u6CD5\u7684\u56DE\u8C03\u51FD\u6570\u4E0D\u63A5\u53D7\u4EFB\u4F55\u53C2\u6570\uFF0C\u8FD9\u610F\u5473\u7740\u6CA1\u6709\u529E\u6CD5\u77E5\u9053\uFF0C\u524D\u9762\u7684 </span><span style="color:#FFCB6B;">Promise</span><span style="color:#A6ACCD;"> \u72B6\u6001\u5230\u5E95\u662Ffulfilled\u8FD8\u662Frejected\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">\u81EA\u8EABAPI</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">\u3001</span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resolve</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">\uFF09\u4E0D\u5E26\u53C2\u6570\u4F20\u9012 \u2014 \u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u72B6\u6001\u4E3Aresolve\u7684promise\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">\uFF09\u53C2\u6570\u662F\u4E00\u4E2A </span><span style="color:#FFCB6B;">Promise</span><span style="color:#A6ACCD;"> \u5B9E\u4F8B\u2014 \u8FD4\u56DE \u5F53\u524D\u7684promise\u5B9E\u4F8B</span></span>
<span class="line"><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">\u3001</span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reject</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">\uFF09\u8FD4\u56DE\u7684\u503C\u4F1A\u4F20\u9012\u5230\u4E0B\u4E00\u4E2Athen\u7684resolve\u65B9\u6CD5\u53C2\u6570\u4E2D</span></span>
<span class="line"><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">\u3001</span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">all</span><span style="color:#A6ACCD;">() </span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">\uFF09\u5E76\u884C\u6267\u884C\u5F02\u6B65\u64CD\u4F5C\u7684\u80FD\u529B</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">\uFF09\u6240\u6709\u5F02\u6B65\u64CD\u4F5C\u6267\u884C\u5B8C\u540E\u624D\u6267\u884C\u56DE\u8C03</span></span>
<span class="line"><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">\u3001</span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">race</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">\uFF09\u90A3\u4E2A\u7ED3\u679C\u8FD4\u56DE\u6765\u7684\u5FEB\u5C31\u662F\uFF0C\u90A3\u4E2A\u7ED3\u679C\uFF0C\u4E0D\u7BA1\u7ED3\u679C\u662F\u6210\u529F\u8FD8\u662F\u5931\u8D25</span></span>
<span class="line"></span></code></pre></div><h2 id="_7\u3001async\u548Cawait\u662F\u5E72\u4EC0\u4E48\u7684" tabindex="-1">7\u3001async\u548Cawait\u662F\u5E72\u4EC0\u4E48\u7684 <a class="header-anchor" href="#_7\u3001async\u548Cawait\u662F\u5E72\u4EC0\u4E48\u7684" aria-hidden="true">#</a></h2><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">\u3001async \u7528\u4E8E\u7533\u660E\u4E00\u4E2A </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">\u662F\u5F02\u6B65\u7684</span><span style="color:#A6ACCD;">\uFF0C</span><span style="color:#82AAFF;">\u800C</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">\u7528\u4E8E\u7B49\u5F85\u4E00\u4E2A\u5F02\u6B65\u65B9\u6CD5\u6267\u884C\u5B8C\u6210</span><span style="color:#A6ACCD;">\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">2\u3001</span><span style="color:#82AAFF;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">\u53EA\u80FD\u51FA\u73B0\u5728</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">\u51FD\u6570\u4E2D</span><span style="color:#A6ACCD;">\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">3\u3001</span><span style="color:#82AAFF;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">\u51FD\u6570\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Promise</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">\u5BF9\u8C61</span><span style="color:#A6ACCD;">\uFF0C</span><span style="color:#82AAFF;">\u540E\u9762\u53EF\u4EE5\u7528then\u65B9\u6CD5</span><span style="color:#A6ACCD;">\u3002</span></span>
<span class="line"></span></code></pre></div><h2 id="_8\u3001\u600E\u4E48\u7406\u89E3\u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236-event-loop" tabindex="-1">8\u3001\u600E\u4E48\u7406\u89E3\u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236(Event Loop) <a class="header-anchor" href="#_8\u3001\u600E\u4E48\u7406\u89E3\u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236-event-loop" aria-hidden="true">#</a></h2><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">\u3001JavaScript \u662F\u4E00\u95E8\u5355\u7EBF\u7A0B\u8BED\u8A00</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">\u5355\u7EBF\u7A0B\u53EF\u80FD\u4F1A\u51FA\u73B0\u963B\u585E\u7684\u60C5\u51B5\uFF0C\u6240js\u5206\u4E86\u540C\u6B65\u4EFB\u52A1\u548C\u5F02\u6B65\u4EFB\u52A1\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">\u3001\u540C\u6B65\u548C\u5F02\u6B65\u4EFB\u52A1\u5206\u522B\u8FDB\u5165\u4E0D\u540C\u7684\u6267\u884C\u73AF\u5883\uFF0C\u540C\u6B65\u7684\u8FDB\u5165\u4E3B\u7EBF\u7A0B\uFF0C\u5373\u4E3B\u6267\u884C\u6808\uFF0C\u5F02\u6B65\u7684\u8FDB\u5165 Event Queue\uFF08\u4E8B\u4EF6\u961F\u5217\uFF09 \u3002\u4E3B\u7EBF\u7A0B\u5185\u7684\u4EFB\u52A1\u6267\u884C\u5B8C\u6BD5\u4E3A\u7A7A\uFF0C\u4F1A\u53BB Event Queue \u8BFB\u53D6\u5BF9\u5E94\u7684\u4EFB\u52A1\uFF0C\u63A8\u5165\u4E3B\u7EBF\u7A0B\u6267\u884C\u3002 \u4E0A\u8FF0\u8FC7\u7A0B\u7684\u4E0D\u65AD\u91CD\u590D\u5C31\u662F\u6211\u4EEC\u8BF4\u7684 Event </span><span style="color:#82AAFF;">Loop</span><span style="color:#A6ACCD;"> (\u4E8B\u4EF6\u5FAA\u73AF)\u3002</span></span>
<span class="line"></span></code></pre></div>`,16),o=[e];function c(t,r,C,A,i,y){return a(),n("div",null,o)}var d=s(p,[["render",c]]);export{F as __pageData,d as default};
