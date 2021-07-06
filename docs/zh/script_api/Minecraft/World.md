---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.World Class
description: Contents of the Minecraft.World class.
---
# World 类
::: warning 注意
这些接口是Plugin系统的一部分，目前属于实验性内容。与其他的实验性内容相同，在Minecraft的版本更新过程中，这些内容可能会发生一些功能性的变化。请自行关注Minecraft的更新日志以获取最新的接口更新。
:::

包装了维度状态的类（比如overworld(主世界)、the nether(下界)或者the end(末地)）

## 属性
### **events** - [`Events`](Events.md)
包含了一组适用于整个世界的事件。


## 方法
- [getDimension](#getdimension)
- [getPlayers](#getplayers)
  
### **getDimension**
`
getDimension(dimensionName: ('overworld'|'nether'|'the end')): Dimension
`

#### 参数列表
| 参数 | 类型 | 简介 |
| :--- | :--- | :---: |
| **dimensionName** | `'overworld'`, `'nether'`, `'the end'` | 维度的名称 |

返回 [*Dimension*](Dimension.md) - 根据参数返回维度

::: warning 警告
如果维度名称参数无效，则抛出异常
:::

### **getPlayers**
`
getPlayers(): Player[]
`

返回当前世界中的所有玩家。

返回 [*Player*](Player.md)[] - 当前世界中的所有玩家。