---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.Leashable Class
description: Contents of the Minecraft.Leashable class.
---
# Leashable Class
::: warning 注意
这些接口是Plugin系统的一部分，目前属于实验性内容。与其他的实验性内容相同，在Minecraft的版本更新过程中，这些内容可能会发生一些功能性的变化。请自行关注Minecraft的更新日志以获取最新的接口更新。
:::
Allows this entity to be leashed and defines the conditions and events for this entity when is leashed.

## Properties
### **id** - `string`
Identifier of this component. Should always be minecraft:leashable.


### **softDistance** - `number`
Distance in blocks at which the 'spring' effect starts acting to keep this entity close to the entity that leashed it.



## 方法
- [leash](#leash)
- [unleash](#unleash)
  
### **leash**
`
leash(leashHolder: Entity): void
`

Leashes this entity to another entity.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **leashHolder** | [*Entity*](Entity.md) | The entity to leash this entity to. |


::: warning 警告 此函数可抛出错误 :::

### **unleash**
`
unleash(): void
`

Unleashes this entity if it is leashed to another entity.


::: warning 警告 此函数可抛出错误 :::

