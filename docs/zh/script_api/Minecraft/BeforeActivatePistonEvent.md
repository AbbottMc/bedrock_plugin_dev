---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.BeforeActivatePistonEvent Class
description: Contents of the Minecraft.BeforeActivatePistonEvent class.
---
# BeforeActivatePistonEvent 类

::: warning 注意
这些接口是Plugin系统的一部分，目前属于实验性内容。与其他的实验性内容相同，在Minecraft的版本更新过程中，这些内容可能会发生一些功能性的变化。请自行关注Minecraft的更新日志以获取最新的接口更新。
:::

包含有关活塞伸出收缩有关的变化信息

## 属性

### **piston** - `BlockPistonComponent`

包含活塞额外的属性与详情

### **isExpanding** - `boolean`

如果活塞处于伸展状态，返回true

### **cancel** - `boolean`

如果在句柄内将此设为true,活塞的激活将会取消
