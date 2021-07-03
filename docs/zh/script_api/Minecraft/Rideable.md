---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.Rideable Class
description: Contents of the Minecraft.Rideable class.
---
# Rideable Class
::: warning 注意
这些接口是Plugin系统的一部分，目前属于实验性内容。与其他的实验性内容相同，在Minecraft的版本更新过程中，这些内容可能会发生一些功能性的变化。请自行关注Minecraft的更新日志以获取最新的接口更新。
:::
<!-- When added, this component adds the capability that an entity can be ridden by another entity. -->
当添加了这个组件时，它会赋予一个实体骑乘另一个实体的能力。

## 属性
### **id** - `string`
<!-- Identifier of this component. Should always be minecraft:rideable. -->
这个组件的标识符。此属性永远会是`'minecraft:rideable'`


### **seatCount** - `number`
<!-- Number of seats for riders defined for this entity. -->
这个实体定义了多少个座位


### **crouchingSkipInteract** - `boolean`
<!-- Determines whether interactions are not supported if the entity is crouching. -->
决定了当实体蹲下时是否不支持交互


### **interactText** - `string`
<!-- Set of text that should be displayed when a player is looking to ride on this entity (commonly with touch-screen controls). -->
当玩家想骑乘生物时显示在物品栏上方的按钮的文本（通常用于触屏设备）


### **familyTypes** - `any[]`
<!-- A string-list of entity types that this entity can support as riders. -->
能骑乘本实体的实体种类列表


### **controllingSeat** - `number`
<!-- Zero-based index of the seat that can used to control this entity. -->
可以控制本实体前行方向的座位索引(index，从0开始)


### **pullInEntities** - `boolean`
<!-- If true, this entity will pull in entities that are in the correct family_types into any available seat. -->
如果为true，当可骑乘实体靠近本实体后，是否自动骑乘上去


### **riderCanInteract** - `boolean`
<!-- If true, this entity will be picked when looked at by the rider. -->
如果为true，当这个实体看向骑手时会被捡起


### **seats** - `Seat[]`
<!-- The list of positions and number of riders for each position for entities riding this entity. -->
本实体的所有座位列表，详见[*Seat*](Seat.md)类。


## 方法
- [addRider](#addrider)
- [ejectRider](#ejectrider)
- [ejectRiders](#ejectriders)
  
### **addRider**
`
addRider(rider: Entity): boolean
`

<!-- Adds an entity to this entity as a rider. -->
向本实体添加一个骑手
#### 参数
| 参数 | 类型 | 简介 |
| :--- | :--- | :---: |
| **rider** | [*Entity*](Entity.md) | 将要骑乘上去的实体 |

Returns *boolean* - 如果成功骑乘，则返回true

::: warning 注意
此函数可抛出错误
:::

### **ejectRider**
`
ejectRider(rider: Entity): void
`

<!-- Ejects the specified rider of this entity. -->
让指定实体取消骑乘
#### Arguments
| 参数 | 类型 | 简介 |
| :--- | :--- | :---: |
| **rider** | [*Entity*](Entity.md) | 被取消骑乘的实体 |


::: warning 注意
此函数可抛出错误
:::

### **ejectRiders**
`
ejectRiders(): void
`

让所有骑乘本实体的实体取消骑乘

::: warning 注意
此函数可抛出错误
:::

