# HTML5新特性
## HTML5新增标签
- header (网站头部)
- nav (导航栏)
- section (类似div)
- aside (文件侧栏)
- article (文章/文本内容)
- footer (网站脚本)  
![Alt text](http://file.liyao1994.top/newHTML5.png)

优点：语义化，有利于SEO

## HTML5新增表单输入框的类型
- type='email'  限制用户输入必须为Email类型
- type='url' 限制用户输入必须为URL类型
- type='data' 自动生成一个日期控件
- type='number' 限制用户输入必须为数字类型
- type='range' 产生一个进度条的表单 （类似一个进度条的样式）
- type='search' 产生一个搜索意义的表单  （一个搜索框）
- type='color' 生成一个颜色选择表单 （可以选择颜色，是一个颜色选择控件）

### 新增的表单的属性
- placeholder  占位文本，一般用在输入提示
- autofocus  自动获取焦点
- autocomplete 提交一次后下次自动补全 （就是输入一次以后，下次会有缓存提示）
- multiple 配合file控件实现多选 （比如上传文件时，可以同时选择多个文件进行上传）

## HTML5制图 & canvas
```
HTML
<canvas width='400' height='400' id='myCanvas'>
您的浏览器不支持canvas,请升级
</canvas>

js
window.onload = function(){
	var canvas =  document.getElementById('myCanvas');
	if(canvas.getContext){  //二次判断是否支持
		var ctx = canvas.getContent('2d')； //获取一个2d的上下文
		ctx.font = '30px Arial';
		ctx.fillText('Hellow',50,50)
		
	}
	
}

```
具体请查看 canvas 一文（待补充）

## HTML5多媒体 & Video
- <video> 元素提供播放，暂停，音量空间来控制视频。
- <video>标签间插入的内容，是供不支持该元素的浏览器显示的。（和canvas一样）
- <video>元素支持多个<source>元素，<source>元素在浏览器使用的第一个识别的视屏文件
```
<video src="movie.mp4" controls="controls">
您的浏览器不支持 video 标签。
</video>
会默认为视频第一帧的图片
```
![Alt text](http://file.liyao1994.top/video_icon.png)

## HTML5多媒体 & Audio
- <audio>标签间插入的内容，是供不支持该元素的浏览器显示的。（和canvas一样）
- <audio>元素支持多个<source>元素，<source>元素在浏览器使用的第一个识别音频文件的文件
```
<audio src="someaudio.wav">
您的浏览器不支持 audio 标签。
</audio>
```
![Alt text](http://file.liyao1994.top/audio_icon.png)