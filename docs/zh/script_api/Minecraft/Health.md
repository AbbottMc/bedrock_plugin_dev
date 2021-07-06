---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.Health Class
description: Contents of the Minecraft.Health class.
---
# Health 类
::: warning 注意
这些接口是Plugin系统的一部分，目前属于实验性内容。与其他的实验性内容相同，在Minecraft的版本更新过程中，这些内容可能会发生一些功能性的变化。请自行关注Minecraft的更新日志以获取最新的接口更新。
:::
<!-- Defines the health properties of an entity. -->
定义了一个实体的生命值

## 属性
### **id** - `string`
<!-- Identifier of this component. Should always be minecraft:health. -->
这个组件的标识符。此属性永远会是`'minecraft:health'`

### **value** - `number`
<!-- Value for health as defined through entity components. -->
定义在实体组件里的生命值


### **current** - `number`
<!-- Read-only. Returns the current value of health for the entity. -->
只读属性。返回目前这个实体的生命值


## 方法
- [setCurrent](#setcurrent)
- [resetToMinValue](#resettominvalue)
- [resetToMaxValue](#resettomaxvalue)
- [resetToDefaultValue](#resettodefaultvalue)
  
### **setCurrent**
`
setCurrent(): void
`

<!-- Sets the current health of the entity. -->
设置本实体目前的生命值


::: warning 注意
此函数可抛出错误
:::

### **resetToMinValue**
`
resetToMinValue(): void
`

<!-- Resets the current health to the minimum value. -->
重设这个实体目前的生命值到最小值


::: warning 注意
此函数可抛出错误
:::

### **resetToMaxValue**
`
resetToMaxValue(): void
`

<!-- Resets the current health of the entity to its maximum value. -->
重设这个实体目前的生命值到最大值


::: warning 注意
此函数可抛出错误
:::

### **resetToDefaultValue**
`
resetToDefaultValue(): void
`

<!-- Resets the current health value of the entity to its default value. -->
重设这个实体目前的生命值到默认值


::: warning 注意
此函数可抛出错误
:::

