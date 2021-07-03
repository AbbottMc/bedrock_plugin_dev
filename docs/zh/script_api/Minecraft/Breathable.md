---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.Breathable Class
description: Contents of the Minecraft.Breathable class.
---
# Breathable Class
::: warning 注意
这些接口是Plugin系统的一部分，目前属于实验性内容。与其他的实验性内容相同，在Minecraft的版本更新过程中，这些内容可能会发生一些功能性的变化。请自行关注Minecraft的更新日志以获取最新的接口更新。
:::
Defines what blocks this entity can breathe in and gives them the ability to suffocate.

## Properties
### **id** - `string`
Identifier of this component. Should always be minecraft:breathable.


### **totalSupply** - `number`
Time in seconds the entity can hold its breath.


### **suffocateTime** - `number`
Time in seconds between suffocation damage.


### **inhaleTime** - `number`
Time in seconds to recover breath to maximum.


### **breathesAir** - `boolean`
If true, this entity can breathe in air.


### **breathesWater** - `boolean`
If true, this entity can breathe in water.


### **breathesLava** - `boolean`
If true, this entity can breathe in lava.


### **breathesSolids** - `boolean`
If true, this entity can breathe in solid blocks.


### **generatesBubbles** - `boolean`
If true, this entity will have visible bubbles while in water.


### **breatheBlocks** - `BlockPermutation[]`
List of blocks this entity can breathe in, in addition to the separate properties for classes of blocks.


### **nonBreatheBlocks** - `BlockPermutation[]`
List of blocks this entity can't breathe in.



## 方法
- [setAirSupply](#setairsupply)
  
### **setAirSupply**
`
setAirSupply(value: number): void
`

Sets the current air supply of the entity.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **value** | *number* | New air supply for the entity. |


::: warning 警告 此函数可抛出错误 :::

