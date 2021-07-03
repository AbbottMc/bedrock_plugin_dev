---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.Movement Class
description: Contents of the Minecraft.Movement class.
---
# Movement Class
::: warning 注意
这些接口是Plugin系统的一部分，目前属于实验性内容。与其他的实验性内容相同，在Minecraft的版本更新过程中，这些内容可能会发生一些功能性的变化。请自行关注Minecraft的更新日志以获取最新的接口更新。
:::

定义此实体一般情况下的移动速度

## Properties
### **id** - `string`
组件ID,应一直为minecraft:movement,不能改变。


### **value** - `number`
通过实体组件定义的默认移动速度值。

### **current** - `number`
只读属性,返回实体当前默认移动速度值。



## 方法
- [`setCurrent`](#setcurrent)
- [`resetToMinValue`](#resettominvalue)
- [`resetToMaxValue`](#resettomaxvalue)
- [`resetToDefaultValue`](#resettodefaultvalue)
  
### **setCurrent**
`
setCurrent(): void
`

设置实体默认移动速度的当前值


::: warning 警告 此函数可能会引发错误。:::

### **resetToMinValue**
`
resetToMinValue(): void
`

将默认移动速度重置为最小值


::: warning 警告 此函数可能会引发错误。:::

### **resetToMaxValue**
`
resetToMaxValue(): void
`

将默认移动速度重置为最大值


::: warning 警告 此函数可能会引发错误。:::

### **resetToDefaultValue**
`
resetToDefaultValue(): void
`

将默认移动速度重置为初始默认值


::: warning 警告 此函数可能会引发错误。 :::