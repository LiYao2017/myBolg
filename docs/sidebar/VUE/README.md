# vue数据响应式的实现
>> 涉及的知识点defineProperty
简介：Object.defineProperty()直接在对象上定义新属性，或修改对象上的现有属性，然后返回对象。
```
用法：
Object.defineProperty(obj, prop, descriptor)
obj ： 要在其上定义属性的对象。
prop ： Symbol要定义或修改的属性的名称或名称。
descriptor ： 定义或修改的属性的描述符。

```
描述符又分为：数据描述符和访问器描述符。

数据和访问描述符都是对象。它们共享以下可选键（在使用Object.defineProperty（）定义属性的情况下，默认值为）：
1. configurable ：默认为false。
	true当且仅当此属性描述符的类型可以更改，并且该属性可以从相应的对象中删除时。

2. enumerable ：  默认为false。
	true当且仅当在枚举相应对象的属性时显示此属性。

数据描述符还具有以下可选键：
1. value ： 默认为undefined
	与属性关联的值。可以是任何有效的JavaScript值（数字，对象，函数等）。

2. writable ： 默认为false。
	true当且仅当与属性关联的值可以使用赋值运算符更改时。

访问器描述符：
1. get ： 默认为undefined。
	一个给属性提供getter的方法，如果没有getter则为undefined。该方法返回值被用作属性值。默认为undefined。
2. set ：默认为undefined
	一个给属性提供setter的方法，如果没有setter则为undefined。该方法将接受唯一参数，并将该参数的新值分配给该属性。

简单一点就是：
1. 简单点就是 设置属性的值value，
2. 是否可操作属性值 writable，
3. 是否可修改配置configurable如果值为false descriptor内的属性都不可操作）
4. 是否可枚举enumerable
5. get访问触发，返回值作为访问的值
6. set修改时触发，该方法将接受唯一参数，并将该参数的新值分配给该属性

>>接下来我们撸代码，用于去理解

## 第一步我们做数据劫持
```
THML:
<script src='VUEs.js' type="text/javascript" charset="utf-8"></script>
<script type="text/javascript" '>
	let vues = new Vue({
		data:{
		   name:'我是未更新前的值',
		   obj : {
			   age : 18
		   }				   
		}
	})
	vues.$data.name = '我是更新的新值'
	vues.$data.obj.age = '19'
	console.log(vues.$data.name)   //'我是更新的新值'
	console.log(vues.$data.obj.age)  //19
</script>

VUEs.js

class Vue{    //创建一个VUE类
	constructor(option) {
	
		this.$data = option.data;		
		this.obsere(this.$data) 
	}
	obsere(ObjData){    //数据响应化，装逼的词语叫做数据劫持
		if(!ObjData || typeof(ObjData) !== 'object'){return}
		
		Object.keys(ObjData).forEach((key)=>{  //去监听绑定每一个属性
			this.defindReactive( ObjData , key , ObjData[key] )
		})
	}
	defindReactive( ObjData , key ,oldval){   //进行属性的监听和赋值 
		this.obsere(oldval); //这里做递归,用来进行深层次的赋值
	
		Object.defineProperty(ObjData , key ,{
			get(){
				return oldval
			},
			set(newVal){
				if(newVal === oldval){return}
				oldval = newVal;    //用于赋值给get返回
				console.log(`更新了值: ${newVal}`)				
			}
		})
		
		
	}
}

```

## 利用的发布订阅模式
首先我们需要明白一个事情vue的数据绑定的原理，我大概的理解是：  
利用了definpropoty 数据劫持，每个属性定义了get ,set方法，去监听属性的变化，当属性变化时，**通知**那些需要更新的地方去更新

>这里我们看一张图：   (从一个视频里面截图过来的，具体啥课不记得了，一个公开课，只是保存了一下，做了笔记)  

![Alt text](http://file.liyao1994.top/vueDefinpropoty.png)  

从数据劫持中，我们能够猜到发布者肯定是在 set方法中，去通知数据进行更新，那么我们需要做的就是去添加订阅者，或者是观察者。  
首先上代码：  
```
慢慢迁移，敬请期待

```
慢慢迁移，敬请期待



