# 面试题收集

## 基础篇

### 1.判断一个属性是该对象的自身属性还是原型链上的属性
obj.hasOwnProperty(‘属性名’)  :函数用于指示一个对象自身(不包括原型链)是否具有指定名称的属性。如果有，返回true，否则返回false。

### 2.hash和history两种模式的区别
hash模式
1. 这里的hash就是指url尾巴后的#号以及后面的字符。hash也称作锚点，本身是用来做页面定位的，他可以使对应的id元素显示在可视区域内。
2. hash值变化不会导致浏览器向服务器发出请求，而且hash改变会触发hashchange事件。
3. hash的变化，并不影响后端，不向服务器发送请求，被当做路由时，及时错误，也不会返回404
```
 window.location.hash='hashs'//设置 url 的 hash，会在当前url后加上'#qq'
 
var hash = window.location.hash //'#hashs'

window.addEventListener('hashchange',function(){  
	console.log('监听hash变化，点击浏览器的前进后退会触发')
})
```

history模式
1. 浏览器有一个history对象，用来保存浏览历史，用户可以通过点击浏览器的后退或前进按钮在历史记录中切换。
对象的方法：HTML4方法 
a. back():　　加载history列表中的前一个URL  
b. forward():　　加载histroy列表中的下一个URL  
c. go():　　加载history列表中的某个具体页面  
HTML5中提供了2个新方法来管理history 
d. pushState(data[,title][,url]) :  向历史记录中追加一条记录  
e. replaceState(data[,title][,url]) :  替换当前页在历史记录中的信息  
f. history.state;//是一个属性，可以得到当前页的state信息
g. window.onpopstate;//是一个事件，在点击浏览器后退按钮或js调用forward()、back()、go()时触发。
history改变URL 导致浏览器向服务器发送请求；这不是我们想看到的，我们需要在服务器端做处理：如果匹配不到到任何静态资源，则应该始终返回同一个 html 页面。
```
参数说明：
state: 一个与指定网址相关的状态对象，popState事件触发时，该对象会传入回调函数，如果不需要这个对象，此处可填null
title: 新页面的标题，但是所有浏览器目前都忽略这个值，因此这里可以填null
url: 新的网址，必须与当前页面处在同一个域，浏览器的地址栏将显示这个网址

history模式原理可以这样理解：
首先我们要改造我们的超链接，给每个超链接增加onclick方法，阻止默认的超链接跳转，
改用history.pushState或history.replaceState来更改浏览器中的url，并修改页面内容。
由于通过history的api调整，并不会向后端发起请求，所以也就达到了前端路由的目的。
```


区别：
1. hash用户体验好，快，内容的改变不需要重新加载整个页面 ; history需要向服务器发送请求
2. hash是外壳不变，修改页面内容，不利于SEO ,url 的形式不好看 ;  history url形式自由，并可以随时访问不同源页面
3. hash兼容IE8以上，history兼容IE10以上
4. history模式需要后端配合将所有访问都指向index.html，否则用户刷新页面，会导致404错误


### 浏览器输入网址以后到页面显示，经历了什么
1. 输入url
2. 查看浏览器- 系统 -路由器 缓存，有就直接拿出来，没有就去解析地址请求
3. 应用层DNS解析域名
4. 应用层客户端发送HTTP请求
5. 传输层TCP传输报文（三次握手）  
	a. 发送端先发送一个带有SYN（synchronize）标志的数据包给接收端，在一定的延迟时间内等待接收的回复。
	b. 接收端收到数据包后，传回一个带有SYN/ACK标志的数据包以示传达确认信息。
	c. 接收方收到后再发送一个带有ACK标志的数据包给接收端以示握手成功。
6. 握手成功后，浏览器向服务器发送http请求，请求数据包
7. 服务器处理收到的请求，处理后将数据返回至浏览器
8. 浏览器收到HTTP响应
9. 读取页面内容，浏览器渲染，解析html源码
10. 生成Dom树、解析css样式、js交互，浏览器渲染
11. 释放连接（4次挥手）
	a. 客户端发送一个fin信号给服务端，告诉它要关闭连接了
	b. 服务端接受后，返回给客户端信息，表示已接收到，再传最后一条 报文数据包
	c. 传完之后，服务端又发送一条信息给 客户端，表示已经准备结束，可以关闭了
	d. 客户端收到消息后，发送给服务端，告诉对方可以断开连接了，不用回复。
  于是服务端就会直接断开，客户端等待2MSL(最大报文段生存时间)后，没收到服务端信息，也会自动关闭

### 装箱机制
装箱机制，其实就是包装类的意思。
>《javascript高级程序设计》 : 每当读取一个基本类型的时候，后台就会创建一个对应的基本包装类型对象，从而让我们能够调用一些方法来操作这些数据。
首先原始值是没有各种方法和属性的，那为什么可以有那么的方法和属性呢。
```
var a = 'abc';
a.length  //3
=== 它经历了以下的事情
new String('abc').length  //3
```
1. 创建String类型的一个实例；
2. 在实例上调用指定的方法；
3. 销毁这个实例；


### 拆箱机制
拆箱操作中主要有两个方法，valueOf()方法和toString()方法。
这两个方法主要用来检测你返回的是不是一个基本类型的值。
1. 一般是先用valueOf()来检测，如果返回的不是一个基本类型的值，是对象自身，则会继续用toString()来检测
2. 如果检测结果不是一个基本类型的值，则会报错(Uncaught SyntaxError: Invalid or unexpected token)。
```
[]+[]	//""
{}+{}	//"[object Object][object Object]"
[]+{}	//"[object Object]"
{}+[]	//0
```
前面三个不讨论，最后一个是因为 这里的{}被当做了代码块，因为底层解析的原理造成的。
所以{} + [] === +'' 隐式转换为 +0 所以结果是0

### 什么是事件循环
这个就是js执行的队列机制。可以根据 宏观任务和微观任务的 原理进行解释。

### docker 部署有什么好处
1. 简化配置，部署简单
2. 应用隔离
3. 维护方便，快速部署
4. 开发人员的生产化 ：各个环境都可以在一个服务器进行运行，保证环境的统一
5. 代码流水线管理
其余的一般前端用不到，反正我没用到，不理解就不说了。

### webpack 的原理是什么，loader 和 plugin 的作用是什么

待补充

### TCP的六个标志位是什么
待补充
