# CSS水平居中与垂直居中，多列布局
## 水平居中
> .parset为父元素	.child为子元素
1. inline-block + text-align
```
.parset{ display:inline-block }
.child{ text-align:center }
```

2. inline-block + table
```
.parset{ display:inline-block }
.child{ display:table;margin:0 auto }
```

3. absolute + transform
```
.parset{ position:relative }
.child{ position:absolute;left:50%;transform:translateX(-50%) }
```

4. flex + justify-content
```
.parset{ display:flex ; justify-content:center }
.child{ margin:0 auto }
```

## 垂直居中
1. table-cell 
```
.parset{ display:table-cell;vertical-align:middle }
```

2. translateY
```
.parset{ position:relative }
.child{ position:absolute ; top:50%; transform:translateY(-50%) }
```

3. flex
```
.parset{ display:flex; align-items:center}
```

## 水平垂直居中
1. table-cell
```
.parset{ text-align:center ; display:table-cell;vertical-align:middle}
.child{ display:inline-block }
```

2. translate
```
.parset{ position:relative }
.child{ position:absolute ; top:50% ; left:50% ; transform:translateX(-50%) ; transform:translateY(-50%)}
```

3. flex
```
.parset{ display:flex ;align-itmes:center ; justify-content:center}
```

## 多列佈局
### 一列定宽，一列自适应
1. float + margin
```
HTML 
<div class='parset'>
	<div class='left'></div>
	<div class='right'></div>
</div>

CSS
.left{ float:left ; width:100px }
.right{ margin-left:100px; }

```

2. float + overflow
```
HTML 
<div class='parset'>
	<div class='left'></div>
	<div class='right'></div>
</div>

CSS
.left{ float:left; width:100px; }
.right{ overflow:hidden	}

```

3. table
```
HTML 
<div class='parset'>
	<div class='left'></div>
	<div class='right'></div>
</div>

CSS
.parset{ display:table ; width:100% ; table-layout:fixed;}
.left,.right{ display:table-cell ; }
.left{width:100px ; }

```

4. flex
```
HTML 
<div class='parset'>
	<div class='left'></div>
	<div class='right'></div>
</div>

CSS
.parset{ display:flex }
.left{ width:100px; }
.right{ flex:1 }

```

### 不定宽，自适应
1. float + overflow
```
HTML 
<div class='parset'>
	<div class='left'></div>
	<div class='right'></div>
</div>

CSS
.left{ float:left;}
.right{ overflow:hidden	}
```

2. table
```
HTML 
<div class='parset'>
	<div class='left'></div>
	<div class='right'></div>
</div>

CSS
.parset{ display:table ; width:100% ;}
.left,.right{ display:table-cell ; }
```

3. flex
```
HTML 
<div class='parset'>
	<div class='left'></div>
	<div class='right'></div>
</div>

CSS
.parset{ display:flex }
.right{ flex:1 }
```

### 等宽多列布局
1. float
```
HTML
<div class='parset'>
	<div class='child'></div>
	<div class='child'></div>
	<div class='child'></div>
	<div class='child'></div>
</div>

CSS 
.child{ float:lfet ; width:25%; box-sizing:border-box }
```

2. table 
```
HTML
<div class='parset'>
	<div class='child'></div>
	<div class='child'></div>
	<div class='child'></div>
	<div class='child'></div>
</div>

CSS
.parset{ display:table; width:100% ; table-layout:fixed}
.child{display:table-cell}
```

3. flex
```
HTML
<div class='parset'>
	<div class='child'></div>
	<div class='child'></div>
	<div class='child'></div>
	<div class='child'></div>
</div>

CSS
.parset{ display:flex }
.child{ flex:1 }
```

### 等高布局
1. table
```
HTML 
<div class='parset'>
	<div class='left'></div>
	<div class='right'></div>
</div>

CSS
.parset{ display:table ; width:100% ; table-layout:fixed}
.left , .right{ display: table-cell ;}
.left{ width:100px ; background-clip:padding-box }

```

2. flex
```
HTML 
<div class='parset'>
	<div class='left'></div>
	<div class='right'></div>
</div>

CSS
.parset{ display:flex ;}
.left{ width:100px; }
.right{flex:1 }
```

3. float
```
HTML 
<div class='parset'>
	<div class='left'></div>
	<div class='right'></div>
</div>

CSS
.left{ float:left ; width:100px;}
.right{ overflow:hidden ; }

.left,.right{ padding-bottom:9999px ; margin-bottom:-9999px}
.parset{ overflow:hidden }

```