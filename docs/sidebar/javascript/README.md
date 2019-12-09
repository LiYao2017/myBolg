# 聊聊深拷贝和浅拷贝
## 什么是深拷贝和浅拷贝
1. 浅拷贝：将一个对象(包括数组)的引用赋值给一个新对象，这时新对象也只是原对象的引用
2. 深拷贝：创建一个新的对象(包括数组),将原对象的各个属性值拷贝到新的对象，两个对象都是全新的引用，互不相关,操作也就互不影响了。

***
这里提一下 原始值 和 引用值
1. 原始值：存储在栈中的直接的数据，可以直接访问，存储的是实实在在的值。
~~~
  Undefined，Stirng，Boolean，Null, Number
   注意：原始值当直接赋值时是等于 复制一个全新的值，两则修改没有任何联系。
~~~  
 
2. 引用值：存储在栈中的名称，只是一个对应堆中的的一个引用地址，每创建一个引用值，则会响应的在堆中创建新的对应空间。
~~~
Object，Function，Array，Date，RegExp 
 注意：引用值直接赋值，只是创建一个新的引用地址，它们所对应的空间是一个;
 所以修改其中一个，等于直接操纵的一个空间，
 所对应的其他的值也就随之变了。
~~~ 
 
***

## 代码分析 - 深拷贝
  浅拷贝不列代码了。  
  根据深拷贝的原理，列举实现思路
```
深拷贝的思路：
1.便利对象判断是否是原始值
2.判断是否是数组还是对象
3.建立新的响应的数组或对象
4.递归，一直拷贝至最深的节点。
```

列举jq.extend() 方法来说明，下面是源码：
```
jQuery.fn.extend = jQuery.extend = function() {
		var target = arguments[0] || {};
		var length = arguments.length;
		var i = 1;
		var deep = false;   //是否是深拷贝
		var option, name,copy,src,copyIsArray,clone;
        if (typeof target === "boolean") {       //处理深度复制的情况 
        	deep = target; //是否是深拷贝
			target = arguments[1];
			i = 2;
        }
		if (typeof target !== "object") {   当目标是字符串或其他东西时
			target = {};
		}
		//参数的个数 1
		if (length === i) {
			target = this;  
			i--;
		}

		//浅拷贝  深拷贝
		for (; i < length; i++) {
			if ((option = arguments[i]) != null) {   //只处理非空/未定义 的值
				for (name in option) {
					copy = option[name];
					src = target[name];
					if(deep && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))){
						if(copyIsArray){
							copyIsArray = false;
							clone = src && jQuery.isArray(src) ? src : [];
						} else {
							clone = src && jQuery.isPlainObject(src) ? src : {};
						}
						target[name] = jQuery.extend(deep, clone, copy);
					} else if(copy != undefined){
						target[name] = copy;
					}
				}
			}
		}
		return target;
	}

	
```

调用：
```
// 调用：
var ret = {name:"max",list:{age:"30"}};
var res = {list:{sex:"女"},age:'18'};
//浅拷贝 以第一个参数为控制 ，false 或则不传 则为 浅拷贝 ，true则为深拷贝
var objs = $.extend({},ret,res);  
console.log(objs);

//任意对象扩展
var obj = $.extend(true,{}, ret, res);
console.log(obj);
```
### 分步解析
1. 做好深浅拷贝的划分（属于优化部分）
```
var target = arguments[0] || {};  // target为最终需要返回的对象
var length = arguments.length;    //确定需要合并拷贝的对象个数
var i = 1;						// 除了需要合并的对象以外，其余的需要进行拷贝(遍历)
```

2. 便利对象判断是否是原始值 ，如果是原始值 则直接赋予该属性
```
for (name in option) {
	copy = option[name]; 
	src = target[name];
	if(deep && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))){  //如果深拷贝deep,并且是引用值
		if(copyIsArray){
			copyIsArray = false;
			clone = src && jQuery.isArray(src) ? src : [];
		} else {
			clone = src && jQuery.isPlainObject(src) ? src : {};
		}
		target[name] = jQuery.extend(deep, clone, copy);
	} else if(copy != undefined){   //如果不是引用值，就直接添加属性入target
		target[name] = copy;
	}
}
```

3. 如果是引用值则 建立新的对象(数组，或对象) ，并去递归，每一次递归都会检查值得属性并做浅拷贝
```
copy = option[name]; 
src = target[name];
if(deep && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))){  //如果深拷贝deep,并且是引用值
	if(copyIsArray){  //如果是数组
		copyIsArray = false;
		clone = src && jQuery.isArray(src) ? src : [];   //建立数组再去递归
	} else {  //如果是对象 ，建立对象去递归
		clone = src && jQuery.isPlainObject(src) ? src : {};
	}
	target[name] = jQuery.extend(deep, clone, copy);
}
```

4. 直到所有的参数值进行合并，并合并到target上，最后返回新的对象
```
return target;

```
	
