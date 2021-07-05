---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.BlockLocation Class
description: Contents of the Minecraft.BlockLocation class.
---
# BlockLocation 类

::: warning 注意
这些接口是Plugin系统的一部分，目前属于实验性内容。与其他的实验性内容相同，在Minecraft的版本更新过程中，这些内容可能会发生一些功能性的变化。请自行关注Minecraft的更新日志以获取最新的接口更新。
:::

包含方块的x y z整数坐标，如要对实体，物品等等使用小数，参见[*Minecraft.Location*](../Minecraft/Location.md).

## 属性

### **x** - `number`

X整数坐标

### **y** - `number`

Y整数坐标

### **z** - `number`

z整数坐标

## 方法

- [constructor](#constructor)
- [equals](#equals)
- [offset](#offset)
- [above](#above)

### **constructor**

`new BlockLocation(x: number, y: number, z: number)`

#### 参数列表

| 参数        | 类型       | 描述 |
| :---------- | :--------- | :--: |
| **x** | *number* |  -  |
| **y** | *number* |  -  |
| **z** | *number* |  -  |

返回 [*BlockLocation*](BlockLocation.md)

### **equals**

`equals(other: BlockLocation): boolean`

判断两个BlockLocation的坐标是否一致，返回布尔值

#### 参数列表

| 参数            | 类型                               |                          描述                          |
| :-------------- | :--------------------------------- | :-----------------------------------------------------: |
| **other** | [*BlockLocation*](BlockLocation.md) | 要与此blocklocation坐标对比的另外一个blocklocation坐标. |

如果两BlockLocation坐标相等，返回 `true`

### **offset**

`offset(x: number, y: number, z: number): BlockLocation`

返回此坐标的相对位置坐标

#### 参数列表

| 参数        | 类型       |    描述    |
| :---------- | :--------- | :--------: |
| **x** | *number* | X 相对坐标 |
| **y** | *number* | Y 相对坐标 |
| **z** | *number* | Z 相对坐标 |

返回[BlockLocation](BlockLocation.md)-相对位置坐标

### **above**

`above(): BlockLocation`

返回此坐标头上1格的一个BlockLocation坐标

返回[BlockLocation](BlockLocation.md)
