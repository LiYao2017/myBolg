# HTML元信息
	HTML自身的信息，而用来描述HTML自身信息的标签 则就是元信息类标签。
元信息是关于信息的信息，用于描述信息的结构、语义、用途和用法等，其实也就是meta标签,位于文档的头部。
标签的属性定义了与文档相关联的名称/值对。
## meta 标签
### name/content 
	meta标签是一组键值对，他是一种通用的元信息表示标签，也就是name / content。
	基本用法：
~~~
//百度网页 随便复制的一组
<meta name="theme-color" content="#2932e1"> 
//表示：页面风格颜色，实际并不影响页面，但是浏览器会根据此约定调整页面之外的颜色，比如窗口边框等等

<meta name="参数"content="具体的参数值">。 
//name属性主要用于描述网页，与之对应的属性值为content，content中的内容主要是便于搜索引擎机器人查找信息和分类信息用的。
~~~
上述代码顾名思义就是 页面所在的 theme-color  是#2932e1 
首先我们要明白，这里的name是一种自由的约定，并不是绝对的值，白话文的意思就是你可以随意的去定义。

既然是约定 那么自然就有了通俗的约定，也就是大家都会准守的，比如：
~~~
//keywords用来告诉搜索引擎你网页的关键字是什么。
<meta name="keywords"content="meta总结,html meta,meta属性,meta跳转">   

//description用来告诉搜索引擎你的网站主要内容。
<meta name="description"content="XX的博客"> 

//robots(机器人向导)
<meta name="robots"content="none"> 

//author(作者)
<meta name="author"content="root,root@xxxx.com"> 

~~~

上面这些只是常用的其中一部分，也就是我们用来定义网页信息的基本情况的一些约定。

#### 这里有一个常用，并特殊的，就介绍一下。就是name 为 viewport的mate
这个约定并没有定义在HTML标准中，但是却是移动端开发所准守的事实标准
~~~
<meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'>

width 页面宽度
height 页面高度
initial-scalse 初始缩放比例
minimum-scale 最小缩放比例
maximum-scale 最大缩放比例
user-scalable 是否允许用户缩放
~~~
上面这一个meta应该是很常见的



### http-equiv属性 ttp-equiv/content
	具有http-equiv属性的meta标签，表示执行一个命令，它可以传递给浏览器一些命令信息，也就是对应的content。
~~~
<meta http-equiv="参数"content="参数变量值">

//：举个例子
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
//它的参数是 content-type ，告诉了浏览器内容的解析‘content-type’ 需要‘text/html; charset=UTF-8’格式去解析
~~~
它还有常用一些命令：
default-style 指定默认样式表；
~~~
<meta http-equiv="default-style" content="the document's preferred stylesheet">
注释：上面 content 属性的值必须匹配同一文档中的一个 link 元素上的 title 属性的值，或者必须匹配同一文档中的一个 style 元素上的 title 属性的值。
~~~

refresh 定义文档自动刷新的时间间隔。
~~~
<meta http-equiv="refresh" content="300">
注释：值 "refresh" 应该慎重使用，因为它会使得页面不受用户控制
~~~

keywords 关键字,给搜索引擎用的
~~~
<meta http-equiv="keywords" content="keyword1,keyword2">
~~~

Cache-Control 清除缓存（再访问这个网站要重新下载！）
~~~
<meta http-equiv="Cache-Control" content="no-cache"/>
~~~

content-language指定内容的语言;  
set-cookie模拟http头set-cookie,设置cookie；  
等等

总结：HTML就像一篇文章，而元信息标签则是对文章的表述标签，而阅读者则是浏览器，它跟根据你所约定的信息进行编译。


