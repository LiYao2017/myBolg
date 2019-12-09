# this的理解
## this的指向
1. 函数调用
2. 全局作用域里this的指向
3. call/apply/bind 可以改变函数运行时的this指向
4. es6箭头函数

### 函数调用时 this的指向
1. 函数预编译时 this的指向是指向于window
```
function fun(a,b){
	var a =1;
	console.log(this)  //window
	console.log(this.a) //undefined
}
fun(2)

此时的AO (预编译时)
{
	arguments : [2,undefined],
	this: window,   
	a:2
	b:undefined
}

```

2. 函数被调用时的this指向  
列子一
```

<script>
function fun(){
	console.log(this)
}
fun()  // window 

解析一下：
因为此时fun是在全局的环境下 *被* 调用的。 
其实声明函数时 等于在window上面声明了该函数
此时的： fun()  === window.fun()
</script>
```

列子二 
```
<script>
var obj = {
	fun : function(){
		console.log(this.name)
	},
	name: '111'
}
obj.fun()   // 111

解析一下： 同理，此时fun是被obj调用，所以此时的this指向的是obj

</script>
```
列子三
```
<script>
var obj = {
	fun : function(){
		console.log(this)
	},
	name: '111',				
	funTwo : function(callBack){
		callBack()
	}
}
obj.funTwo(obj.fun)    //window
 
 解析一下：
1.  funTwo 函数接受的参数是一个函数 是obj.fun ，但此时并没有被调用，只是将这个函数的地址传递了过去，
此时依然处于预编译的状态，this指向的是window
2.  在调用时 callBack调用了 fun指向的地址，此时调用的函数与obj并没有直接调用关系，所以this依然指向的是window
</script>

```

注意：
1. 在严格模式下，this将保持他进入执行环境时的值，所以下面的this将会默认为undefined
```
function fun(){
  "use strict"; // 这里是严格模式
  return this;  
}
fun() === undefined; // true
```

### 全局作用域里this的指向
这里不提，上面已经提到了，全局作用域里时this会默认指向window

### call/apply/bind 可以改变函数运行时的this指向

call/apply : 可以指定函数内部this的指向（即函数执行时所在的作用域），然后在所指定的作用域中，调用该函数。
bind : bind方法用于将函数体内的this绑定到某个对象，然后返回一个新函数。

call/apply : 两个作用一样，区别在于第二个参数，apply传参的是数组 
```
<script>
var name = '111';
var obj = {
	name : '222'
}
		
function fun(a,b){
	console.log(a);
	console.log(b);
	console.log(this.name)
}
fun()  // undefined undefined 111 
fun.call(obj,1,2) // 此时的 this 指向就是obj   1,2,222
fun.apply(obj,[1,2])  //1,2,222 
</script>
```

bind : bind方法用于将函数体内的this绑定到某个对象，然后返回一个新函数。
```
<script>
var name = '111';
var obj = {
	name : '222'
}
		
function fun(a,b){
	console.log(a);
	console.log(b);
	console.log(this.name)
}

var funTwo = fun.bind(obj)
fun()  // undefined undefined 111 
funTwo(1,2)  //1,2,222   此时的 this 指向就是obj
</script>
```
注意：
1. call/apply 改变this指向以后并会立马执行
2. bind改变this以后会返回新的函数，并不会立马执行


### es6箭头函数 的this
重点（关于this方面的）：
1. es6箭头函数没有自己的this,函数里的this是外层代码的this
2. 箭头函数的this是在定义函数时绑定的，不是在执行过程中绑定的。 
3. 箭头函数this是继承自父执行上下文，不是调用时的this。
```
//普通函数
function fun(){
	console.log(this)
}
fun() //window

//箭头函数
let fun = () =>{
	console.log(this)
}
fun() // window 因为此时fun是在全局定义的，父作用域 也就是父作用域的上下文 是window
```

```
var obj = {
	fun : () =>{
		console.log(this)
	},
	name: '111',				
	funTwo : (callBack) = >{
		callBack()
	}
}
obj.funTwo(obj.fun)   //window

//解析一下：
箭头函数的this是定义时绑定的，就是this是继承自父执行上下文
此时的 fun 与 funTwo本身所在的对象是obj，是以key/value形式而已，obj父执行的上下文为window

```

最后一个列子
```
//普通函數
var name = '111';
var obj = {
	name : '222',
	fun : function(){
		setTimeout(function(){
			console.log(this.name) 
		},100)
	}
}
obj.fun()  //111   

解析：obj调用函数fun，此时fun里面的this是 obj，但是setTimeout是全局的window上的方法，
所以其实等于 window.setTimeout()  所以里面的this指向了window

//箭頭函數
var name = '111';
var obj = {
	name : '222',
	fun : function(){
		setTimeout(()=>{
			console.log(this.name) 
		},100)
	}
}
obj.fun()  //222

解析：obj调用函数fun，此时fun里面的this是 obj，但是setTimeout是全局的window上的方法，
但是 setTimeout方法在定义时的父执行上下文this为 obj ，所以此时的this为 obj

```

注意：
1.箭头函数通过call和apply调用，不会改变this指向，只会传入参数	
