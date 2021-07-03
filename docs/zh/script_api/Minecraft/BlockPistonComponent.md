---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.BlockPistonComponent Class
description: Contents of the Minecraft.BlockPistonComponent class.
---
# BlockPistonComponent Class
::: warning 注意
这些接口是Plugin系统的一部分，目前属于实验性内容。与其他的实验性内容相同，在Minecraft的版本更新过程中，这些内容可能会发生一些功能性的变化。请自行关注Minecraft的更新日志以获取最新的接口更新。
:::
Represents the inventory of a block in the world. Used with blocks like chests.

## Properties
### **location** - `BlockLocation`



### **attachedBlocks** - `BlockLocation[]`
A set of locations for blocks that are impacted by the activation of this piston.


### **isMoving** - `boolean`
Whether the piston is in the process of expanding or retracting.


### **isExpanded** - `boolean`
Whether the piston is fully expanded.


### **isExpanding** - `boolean`
Whether the piston is in the process of expanding.


### **isRetracted** - `boolean`
Whether the piston is fully retracted.


### **isRetracting** - `boolean`
Whether the piston is in the process of retracting.



