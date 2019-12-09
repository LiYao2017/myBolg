# HTML语义化 
## HTML设计
最初HTML的设计场景就是‘超文本’，早期设计的一群人是一群 **出版界书籍排版的专家。** 主要是用来便于人们的阅读，符合人们的阅读习惯。
可想而知，那么既然最初的设计师用来便于人们阅读的，那么HTML也就自然符合人们阅读的习惯，有标题，内容，侧边栏，等等。

## 语义化标签
HTML是计算机语言，所以每一个页面在设计的最初就类似于一篇文章，那么文章自然也就有导航，标题，侧边栏，页尾等等，而此时的计算机就是人的角色，
我们的语义的标签这就是告诉计算机哪里是导航，标题，侧边栏，页尾等等。
~~~
<header></header>头部

<nav></nav>导航栏

<section></section>区块（有语义化的div）

<main></main>主要区域，只出现一个

<artical></artical> 具有明确的主体内容

<aside></aside>侧边栏

<footer></footer>底部
~~~
上面这些是常见的语义化标签，也是告诉浏览器你的页面的每一个部分是什么。
![Alt text](../../.vuepress/img/HTMLYI.jpg)

当然我们这里只展示了几个常用的语义标签，是为了便于理解，为了浏览器和用户的阅读还有更多的标签。
我简单再展示一些比较常用的
~~~
<title>  //页面主体内容
<h1> ~ <h6>  // h1~h6，分级标题，<h1> 与 <title> 协调有利于搜索引擎优化。
<p>  //段落文章
<strong></strong>  //字体加粗
<ul>  //无序列表
<ol>  //有序列表
<small>  //呈现小号字体效果，指定细则，输入免责声明、注解、署名、版权
<em>   //将其中的文本表示为强调的内容，表现为斜体。
<figure>  //规定独立的流内容（图像、图表、照片、代码等等）
<figcaption>  //定义 figure 元素的标题，应该被置于 figure 元素的第一个或最后一个子元素的位置
<cite>  //表示所包含的文本对某个参考文献的引用，比如书籍或者杂志的标题
<blockquoto>  //定义块引用，块引用拥有它们自己的空间
<progress>  //定义运行中的进度
<abbr>  //表示缩写 比如 <abbr title='World wide Web'>WWW</abbr>
<hr> // 分割线，表示故事的走向，或者转变
。。。
~~~
大家看这些标签和描述就能很清晰的理解，语义化的意思就是以语言合理的行为去展示和叙述的意思。
还不理解的同学可以查找一些典型的WIKI网页去看看页面结构标签的使用。


## 什么时候用语义化标签
语义化标签并不是所有的地方都适用，其实一般的功能，或者简单的业务功能`<div><span>`这些已经足够使用了。
并且HTML这种语言，本身并不是非常严谨的，就像写文章一样，有一些语义的使用还会带来更多的分歧和争议，
所以在使用上尽量用自己所熟悉的常用的语义标签，在合理的地方，内容明确的地方使用。

## 语义化的好处
1. 代码上，结构清晰，利于项目的维护和共同开发，统一标准，减少维护时间和成本
2. 利于浏览器解析，和部分设备的解析，比如盲人阅读等等
3. 有利于SEO，语义化的标签有助于爬虫抓取更多的有效信息，爬虫依赖于标签来确定上下文和各个关键字的权重

	