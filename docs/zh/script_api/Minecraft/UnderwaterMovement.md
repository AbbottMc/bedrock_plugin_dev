---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.UnderwaterMovement Class
description: Contents of the Minecraft.UnderwaterMovement class.
---
# UnderwaterMovement 类
::: warning 注意
这些接口是Plugin系统的一部分，目前属于实验性内容。与其他的实验性内容相同，在Minecraft的版本更新过程中，这些内容可能会发生一些功能性的变化。请自行关注Minecraft的更新日志以获取最新的接口更新。
:::
<!-- Defines the general movement speed underwater of this entity. -->
定义该实体在水下的一般移动速度

## 属性
### **id** - `string`
<!-- Identifier of this component. Should always be minecraft:underwater_movement. -->
这个组件的标识符。此属性永远会是`'minecraft:underwater_movement'`


### **value** - `number`
<!-- Value for movement speed underwater as defined through entity components. -->
在水下移动速度的值


### **current** - `number`
<!-- Read-only. Returns the current value of movement speed underwater for the entity. -->
只读属性。返回这个实体目前在水中的移动速度


## 方法
- [setCurrent](#setcurrent)
- [resetToMinValue](#resettominvalue)
- [resetToMaxValue](#resettomaxvalue)
- [resetToDefaultValue](#resettodefaultvalue)
  
### **setCurrent**
`
setCurrent(): void
`

<!-- Sets the current value of movement speed underwater for the entity. -->
设置这个实体目前在水下的速度


::: warning 注意
此函数可抛出错误
:::


### **resetToMinValue**
`
resetToMinValue(): void
`

<!-- Resets the movement speed underwater to the minimum value as defined by the component state of this entity. -->
将此实体的水下移动速度设置为该实体组件定义的最小值


::: warning 注意
此函数可抛出错误
:::

### **resetToMaxValue**
`
resetToMaxValue(): void
`

<!-- Resets the movement speed underwater to the maximum value for the entity, as determined by the set of components that are on the entity-->
将此实体的水下移动速度设置为该实体组件定义的最大值


::: warning 注意
此函数可抛出错误
:::

### **resetToDefaultValue**
`
resetToDefaultValue(): void
`

<!-- Resets the current movement speed underwater for the entity to the default value implied by the current component state of the entity. -->
将此实体的水下移动速度设置为该实体组件定义的默认值

::: warning 注意
此函数可抛出错误
:::