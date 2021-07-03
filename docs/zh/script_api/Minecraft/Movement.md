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



## Methods
- [setCurrent](#setcurrent)
- [resetToMinValue](#resettominvalue)
- [resetToMaxValue](#resettomaxvalue)
- [resetToDefaultValue](#resettodefaultvalue)
  
### **setCurrent**
`
setCurrent(): void
`

Sets the current value of default movement speed for the entity.


> [!WARNING]
> This function can throw errors.

### **resetToMinValue**
`
resetToMinValue(): void
`

Resets the default movement speed to the minimum value.


> [!WARNING]
> This function can throw errors.

### **resetToMaxValue**
`
resetToMaxValue(): void
`

Resets the default movement speed to the maximum value for the entity.


> [!WARNING]
> This function can throw errors.

### **resetToDefaultValue**
`
resetToDefaultValue(): void
`

Resets the current default movement speed value for the entity to the default value.


> [!WARNING]
> This function can throw errors.

