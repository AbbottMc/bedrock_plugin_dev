---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.Dimension Class
description: Contents of the Minecraft.Dimension class.
---
# Dimension Class
::: warning 注意
这些接口是Plugin系统的一部分，目前属于实验性内容。与其他的实验性内容相同，在Minecraft的版本更新过程中，这些内容可能会发生一些功能性的变化。请自行关注Minecraft的更新日志以获取最新的接口更新。
:::
A class that represents a particular dimension (e.g., The End) within a world.


## 方法
- [isEmpty](#isempty)
- [getEntitiesAtBlockLocation](#getentitiesatblocklocation)
- [getBlock](#getblock)
- [spawnEntity](#spawnentity)
- [createExplosion](#createexplosion)
  
### **isEmpty**
`
isEmpty(location: BlockLocation): boolean
`

Tests whether a particular location contains an Air (empty) block.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **location** | [*BlockLocation*](BlockLocation.md) | The location at which to check for emptiness |

Returns *boolean* - True if the block at the location is air (empty)


### **getEntitiesAtBlockLocation**
`
getEntitiesAtBlockLocation(location: BlockLocation): Entity[]
`

#### 参数
| Param | Type | Description |
| :--- | :--- | :---: |
| **location** | [*BlockLocation*](BlockLocation.md) | - |

Returns [*Entity*](Entity.md)[]


### **getBlock**
`
getBlock(location: BlockLocation): Block
`

Returns a block instance at the given location. This method was introduced as of version 1.17.10.21.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **location** | [*BlockLocation*](BlockLocation.md) | The location at which to return a block. |

Returns [*Block*](Block.md) - Block at the specified location.


### **spawnEntity**
`
spawnEntity(identifier: string, location: BlockLocation): Entity
`

Creates a new entity (e.g., a mob) at the specified location. This method was introduced as of version 1.17.10.21.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **identifier** | *string* | Identifier of the type of entity to spawn. If no namespace is specified, 'minecraft:' is assumed. |
| **location** | [*BlockLocation*](BlockLocation.md) | The location at which to create the entity. |

Returns [*Entity*](Entity.md) - Newly created entity at the specified location.


### **createExplosion**
`
createExplosion(location: Location, radius: number, explosionOptions: ExplosionOptions): void
`

Creates an explosion at the specified location.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **location** | [*Location*](Location.md) | The location of the explosion. |
| **radius** | *number* | Radius, in blocks, of the explosion to create. |
| **explosionOptions** | [*ExplosionOptions*](ExplosionOptions.md) | Additional configurable options for the explosion. |


::: warning 警告 此函数可抛出错误 :::

