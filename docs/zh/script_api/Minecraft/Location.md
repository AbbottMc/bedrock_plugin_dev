---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.Location Class
description: Contents of the Minecraft.Location class.
---
# Location Class
::: warning 注意
这些接口是Plugin系统的一部分，目前属于实验性内容。与其他的实验性内容相同，在Minecraft的版本更新过程中，这些内容可能会发生一些功能性的变化。请自行关注Minecraft的更新日志以获取最新的接口更新。
:::
Contains a location description that is useful for entities and other items. X, Y, and Z can contain decimal fractions. For integer-based locations useful for blocks, see [*Minecraft.BlockLocation*](../Minecraft/BlockLocation.md).

## Properties
### **x** - `number`
X component of this location.


### **y** - `number`
Y component of this location.


### **z** - `number`
Z component of this location.



## Methods
- [constructor](#constructor)
- [equals](#equals)
  
### **constructor**
`
new Location(x: number, y: number, z: number)
`

#### Arguments
| 参数 | 类型 | 描述 |
| :--- | :--- | :---: |
| **x** | *number* | - |
| **y** | *number* | - |
| **z** | *number* | - |

Returns [*Location*](Location.md)


### **equals**
`
equals(other: Location): boolean
`

Compares this Location and another Location to one another.
#### Arguments
| 参数 | 类型 | 描述 |
| :--- | :--- | :---: |
| **other** | [*Location*](Location.md) | Other location to compare this Location to. |

Returns *boolean* - True if the two locations are equal.


