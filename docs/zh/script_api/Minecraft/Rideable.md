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
When added, this component adds the capability that an entity can be ridden by another entity.

## 属性
### **id** - `string`
Identifier of this component. Should always be minecraft:rideable.


### **seatCount** - `number`
Number of seats for riders defined for this entity.


### **crouchingSkipInteract** - `boolean`
Determines whether interactions are not supported if the entity is crouching.


### **interactText** - `string`
Set of text that should be displayed when a player is looking to ride on this entity (commonly with touch-screen controls).


### **familyTypes** - `any[]`
A string-list of entity types that this entity can support as riders.


### **controllingSeat** - `number`
Zero-based index of the seat that can used to control this entity.


### **pullInEntities** - `boolean`
If true, this entity will pull in entities that are in the correct family_types into any available seat.


### **riderCanInteract** - `boolean`
If true, this entity will be picked when looked at by the rider.


### **seats** - `Seat[]`
The list of positions and number of riders for each position for entities riding this entity.



## 方法
- [addRider](#addrider)
- [ejectRider](#ejectrider)
- [ejectRiders](#ejectriders)
  
### **addRider**
`
addRider(rider: Entity): boolean
`

Adds an entity to this entity as a rider.
#### 参数
| Param | Type | Description |
| :--- | :--- | :---: |
| **rider** | [*Entity*](Entity.md) | Entity that will become the rider of this entity. |

Returns *boolean* - True if the rider entity was successfully added.

::: warning 警告 此函数可抛出错误 :::

### **ejectRider**
`
ejectRider(rider: Entity): void
`

Ejects the specified rider of this entity.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **rider** | [*Entity*](Entity.md) | Entity that should be ejected from this entity. |


::: warning 警告 此函数可抛出错误 :::

### **ejectRiders**
`
ejectRiders(): void
`

Ejects all riders of this entity.


::: warning 警告 此函数可抛出错误 :::

