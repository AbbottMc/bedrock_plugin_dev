---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.Tameable Class
description: Contents of the Minecraft.Tameable class.
---
# Tameable Class
::: warning 注意
这些接口是Plugin系统的一部分，目前属于实验性内容。与其他的实验性内容相同，在Minecraft的版本更新过程中，这些内容可能会发生一些功能性的变化。请自行关注Minecraft的更新日志以获取最新的接口更新。
:::
<!-- Defines the rules for a mob to be tamed by the player. -->
定义了这个实体可以被玩家驯服的规则

## 属性
### **id** - `string`
<!-- Identifier of this component. Should always be minecraft:tameable. -->
这个组件的标识符。此属性永远会是`'minecraft:tameable'`


### **probability** - `number`
<!-- The chance of taming the entity with each item use between 0.0 and 1.0, where 1.0 is 100% -->
每个物品驯服的几率。返回的值为[0.0,1.0]，代表 0% 到 100%


### **tameItems** - `any[]`
<!-- The list of items that can be used to tame this entity. -->
可以被用于驯服此实体的物品列表



### **tameEvent** - `Trigger`
<!-- Event to run when this entity becomes tamed. -->
当这个实体被驯服时触发的事件



## 方法
- [tame](#tame)
  
### **tame**
`
tame(): boolean
`

<!-- Tames this entity. -->
驯服本实体

<!-- Returns *boolean* - Returns true if the entity was tamed. -->
返回值类型 *boolean*。返回这个实体是否被驯服。 


::: warning 注意
此函数可抛出错误
:::