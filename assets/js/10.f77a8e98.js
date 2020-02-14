(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{212:function(n,o,e){"use strict";e.r(o);var s=e(0),t=Object(s.a)({},(function(){var n=this,o=n.$createElement,e=n._self._c||o;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"宏观任务和微观任务的探讨"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#宏观任务和微观任务的探讨"}},[n._v("#")]),n._v(" 宏观任务和微观任务的探讨")]),n._v(" "),e("h2",{attrs:{id:"什么是宏观任务和微观任务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是宏观任务和微观任务"}},[n._v("#")]),n._v(" 什么是宏观任务和微观任务")]),n._v(" "),e("blockquote",[e("p",[n._v("下面的概念 引用于 极客时间- winter老师的 重学前端中promise一文 (我觉得是目前网上最好的解释)")])]),n._v(" "),e("p",[n._v("定义：我们把"),e("strong",[n._v("宿主发起的任务称为宏观任务")]),n._v("，把"),e("strong",[n._v("javascript引擎发起的任务称为微观任务")]),n._v("，"),e("br"),n._v("\n微观任务执行顺序始终先于宏观任务，并且每个宏观任务可以包含多个微观任务。"),e("br"),n._v("\n（纯属个人理解：宏观任务就是宿主环境的方法，微观任务就是js语言本身的方法）\njavascript引擎执行的时候是一种事件循环的执行，在底层的C/C++代码中，这个时间循环是跑在独立线层中的循环，我们用伪代码表示，大概就是这样的：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("while(TRUE){\n\tr = wait();\n\texecute(r);\n}\n\n可以看到整个循环做的事情基本上就是反复的‘等待 - 执行’。当然，实际代码中没有那么简单，还有其他的判断。\n")])])]),e("p",[n._v("所以理解为就是宏观任务就相当于一个事件的循环，等待着执行。"),e("br"),n._v("\n而宏观任务中，javascript 的Promise 还会产生异步代码，javascript必须保证这些代码在一个宏观任务中完成，"),e("br"),n._v("\n因此每个宏观任务又包含了一些微观任务，这些微观任务以列队的形式等待执行。\n"),e("img",{attrs:{src:"http://file.liyao1994.top/hongwei.jpg",alt:"Alt text"}})]),n._v(" "),e("h3",{attrs:{id:"promise"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#promise"}},[n._v("#")]),n._v(" Promise")]),n._v(" "),e("p",[n._v("promise 是javascript语言提供的一种标准化的异步管理方式。"),e("br"),n._v("\n他的总体思想是需要进行io，等待或者其他异步操作的函数，不返回真实结果，而返回一个'承诺'，函数调用方可以在合适的时机，\n选择等待这个承诺兑现(Promise的then方法的回调)"),e("br"),n._v("\n首先基本用法：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v(' var r = new Promise(function(resolve, reject){\n    console.log("a");\n    resolve()\n  });\n  setTimeout(()=>console.log("d"), 0)\n  r.then(() => console.log("c"));\n  console.log("b")\n  \n  执行结果： a , b , c\n')])])]),e("p",[n._v("分析：r是一个promise 对象，进入console.log(b)之前，r已经拿到了resolve，但是因为异步操作的问题，所以c 无法出现在b之前")]),n._v(" "),e("p",[n._v("promise 与 setTimeout的合用")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('var r = new Promise(function(resolve, reject){\n    console.log("a");\n    resolve()\n  });\n  setTimeout(()=>console.log("d"), 0)\n  r.then(() => console.log("c"));\n  console.log("b")\n  //结果是： a , b , c ,d\n')])])]),e("p",[n._v("分析：首先我们分析这里有多少个宏观任务，我们上面提到过，宏观任务的定义，和javascript的执行是队列执行，前面没执行完后面需要等待。"),e("br"),n._v("\n首先这里有两个宏观任务："),e("br"),n._v("\n第一个宏观任务包括了console.log(a) 和console.log(b) 以及宏观里的微观console.log(c)"),e("br"),n._v("\n第二个宏观任务也就是浏览器宿主发起的setTimeout，它包含的console.log(d)"),e("br"),n._v("\n这里就不难理解输出的结果了")]),n._v(" "),e("blockquote",[e("p",[n._v("下面收集了知乎的一道题")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("  setTimeout(function(){console.log(4)},0); \n  new Promise(function(resolve){ \n    console.log(1) \n    for( var i=0 ; i<10000 ; i++ ){\n       i==9999 && resolve() \n    } \n    console.log(2) \n  }).then(function(){ \n    console.log(5) \n  }); \n  console.log(3);\n  \n // 输出结果 1 ，2 ，3 ，5 ，4\n")])])]),e("p",[n._v("首先想想我们上面提到的宏观和微观任务的分辨，和javascript执行的队列机制。"),e("br"),n._v("\n（纯属个人理解）"),e("br"),n._v("\n1.分析这道题中的宏观和微观任务：\n"),e("img",{attrs:{src:"http://file.liyao1994.top/promise.png",alt:"Alt text"}}),e("br"),n._v("\na. 这道题有两个宏观任务，第一个为主环境默认的，第二个为setTimeout"),e("br"),n._v("\nb. 根据微观任务一定先与宏观任务执行的特点，和队列机制 顺序执行的特点去分析"),e("br"),n._v("\n首先执行 console.log(1) 然后是 console.log(2) 再是onsole.log(3)，两则执行完以后，再去执行异步的resolve() 也就是then中的  console.log(5)"),e("br"),n._v("\n第一个宏观任务以及 宏观任务中的微观任务栈 全部执行完毕，再去执行队列中的第二位宏观任务，打印console.log(4)")]),n._v(" "),e("blockquote",[e("p",[n._v("根据上面引发的自我思考")])]),n._v(" "),e("ol",[e("li",[n._v("宏观任务是存储在 任务队列中的按照顺序的方式去执行，如果碰到异步的宏观则会调到下一个进行执行(类似多线程)")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("setTimeout(function(){console.log('a')},2000)\nsetTimeout(function(){console.log('b')},0)\n//因为两个都是宏观任务，但是因为定时器的原因为异步，所以这个时候就是延顺到下一个，由时间去判断执行哪一个\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[n._v("微观任务是存储是在执行栈中的，也是按照顺序依次执行(这是由javascript特性所决定的)，微观任务一定是优于宏观任务执行的。")]),n._v(" "),e("li",[n._v("最初页面预编译的时候会将，宏观任务和微观任务进行分别的依次的储存，以入栈的形式。")]),n._v(" "),e("li",[n._v("在执行过程中，微观任务中包含了宏观任务时，会将宏观任务入栈到 任务队列中，然后依次按照任务队列进行执行")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("setTimeout(function(){console.log(4)},0); \nPromise.resolve().then(function(){\n\t  console.log(1) \n\t setTimeout(function(){console.log(2)},0)\n\t}).then(function(){ \n\t  console.log(5) \n})\nconsole.log(3);\n  \n此时输出：3 ，1 ，5 ，4 ，2\n分析：\n首先预编译将宏观任务 和 微观任务进行 区分，\n1. 然后执行第一个宏观任务的 微观任务：\nconsole.log(3);\nconsole.log(1)；->因为then的异步，所以放在第二位\n到了这里发现了一个宏观任务 setTimeout ，将这个 宏观任务放入到 任务队列中，此时队列已经有了一个setTimeout，所以这个放入到它的下面一位\nconsole.log(5) \n2. 执行完第一个以后，执行任务队列的第二个宏观任务\nsetTimeout(function(){console.log(4)},0); \n3.执行完第二个以后，执行任务队列的第三个宏观任务\n setTimeout(function(){console.log(2)},0)\n")])])]),e("h3",{attrs:{id:"async-await"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#async-await"}},[n._v("#")]),n._v(" async / await")]),n._v(" "),e("p",[n._v("async / await 是es6的新特性，它提供了for,if代码的结构方式。运行的基础是Promise,所以async函数必然返回的是Promise，\n我们把所有返回的Promise的函数都可以认为是异步函数。")]),n._v(" "),e("ol",[e("li",[n._v("自动将常规函数转换成Promise，返回值也是一个Promise对象")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("async function foo(val){\n   let a = 1;\n\treturn val + a\n}\nfoo(1);\n//输出  Promise {<resolved>: 2}\n所以\nfoo(1).then(function(e){console.log(e)})  //2\n\n所以对于这里我们完全可以看\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[n._v("只有async函数内部的异步操作执行完，才会执行then方法指定的回调函数")]),n._v(" "),e("li",[n._v("异步函数内部可以使用await")])]),n._v(" "),e("p",[n._v("await")]),n._v(" "),e("ol",[e("li",[n._v("await 放置在Promise调用之前，await 强制后面点代码等待，直到Promise对象resolve，得到resolve的值作为await表达式的运算结果")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('function sleep(duration) {\n    return new Promise(function(resolve, reject) {\n        setTimeout(()=>{console.log(\'111\')},duration);\n    })\n}\nasync function foo(){\n    console.log("a")\n    await sleep(2000)\n    console.log("b")\n}\nfoo();  //输出a ,Promise {<pending>} ， （过2秒） 111\nb不输出\n')])])]),e("ol",{attrs:{start:"2"}},[e("li",[n._v("await只能在async函数内部使用,用在普通函数里就会报错")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('function sleep(duration) {\n    return new Promise(function(resolve, reject) {\n        setTimeout(resolve,duration);\n    })\n}\nasync function foo(){\n    console.log("a")\n    await sleep(2000)\n    console.log("b")\n}\nfoo();\n//输出a , Promise {<pending>} ，（过2秒）b\n\n')])])]),e("ol",{attrs:{start:"3"}},[e("li",[e("strong",[n._v("重点重点")]),n._v("很多人以为await会一直等待之后的表达式执行完之后才会继续执行后面的代码，实际上await是一个让出线程的标志。\nawait后面的函数会先执行一遍，然后就会跳出整个async函数来执行后面js栈（后面会详述）的代码。\n等本轮事件循环执行完了之后又会跳回到async函数中等待await。")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("function foo1(){\n\tconsole.log('111')\n}\nasync function foo(val){\n   let a = 1;\n\tconsole.log('000');\n   await foo1();\n   console.log('222'); \n}\nfoo(1) \nconsole.log('333');\n\n打印：000 111 333 222\n")])])]),e("p",[n._v("接下来做一道题结束。")]),n._v(" "),e("blockquote",[e("p",[n._v("这是一道收集来的面试题        来源：木易杨说 高级面试题")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("\nasync function async1() {\n    console.log('async1 start');\n    await async2();\n    console.log('async1 end');\n}\nasync function async2() {\n\tconsole.log('async2');\n}\n\nconsole.log('script start');\n\nsetTimeout(function() {\n    console.log('setTimeout');\n}, 0)\n\nasync1();\n\nnew Promise(function(resolve) {\n    console.log('promise1');\n    resolve();\n}).then(function() {\n    console.log('promise2');\n});\nconsole.log('script end');\n\n")])])]),e("blockquote",[e("p",[n._v("下面来自本人的探讨和理解")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("首先输出的结果是：\n\nscript start  \nasync1 start\nasync2\npromise1\nscript end\nasync1 end\npromise2\nsetTimeout\n\n")])])]),e("ol",[e("li",[n._v("首先有两个宏观任务 1.全局环境(自我认知) 2.setTimeout")]),n._v(" "),e("li",[n._v("所以第一个执行 console.log('script start'); 再执行 async1();")]),n._v(" "),e("li",[n._v("接下来就会打印 console.log('async1 start'); 立马去执行一次await的函数 打印console.log('async2');")]),n._v(" "),e("li",[n._v("然后跳出执行其他js代码 也就是 下面new Promise 打印 console.log('promise1');")]),n._v(" "),e("li",[n._v("然后因为异步所以打印console.log('script end');")]),n._v(" "),e("li",[n._v("再跳转回去async1 里面 执行console.log('async1 end');")]),n._v(" "),e("li",[n._v("再执行then的方法 console.log('promise2');")]),n._v(" "),e("li",[n._v("最后执行第二个宏观任务 setTimeout 打印  console.log('setTimeout');")])])])}),[],!1,null,null,null);o.default=t.exports}}]);