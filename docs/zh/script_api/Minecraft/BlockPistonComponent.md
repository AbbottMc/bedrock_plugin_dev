---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.BlockPistonComponent Class
description: Contents of the Minecraft.BlockPistonComponent class.
---
# BlockPistonComponent 类

::: warning 注意
这些接口是Plugin系统的一部分，目前属于实验性内容。与其他的实验性内容相同，在Minecraft的版本更新过程中，这些内容可能会发生一些功能性的变化。请自行关注Minecraft的更新日志以获取最新的接口更新。
:::

代表世界里方块的库存。像处理箱子内容一样处理方块

## 属性

### **location** - `BlockLocation`

### **attachedBlocks** - `BlockLocation[]`

在活塞激活时的所有受影响的方块

### **isMoving** - `boolean`

判断活塞是否在伸展/收缩

### **isExpanded** - `boolean`

判断活塞是否已完全伸展

### **isExpanding** - `boolean`

判断活塞是否正在伸展

### **isRetracted** - `boolean`

判断活塞是否完全收回

### **isRetracting** - `boolean`

判断活塞是否正在收回
