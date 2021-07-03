---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.Ageable Class
description: Contents of the Minecraft.Ageable class.
---
# Ageable 类

::: warning 注意
这些接口是Plugin系统的一部分，目前属于实验性内容。与其他的实验性内容相同，在Minecraft的版本更新过程中，这些内容可能会发生一些功能性的变化。请自行关注Minecraft的更新日志以获取最新的接口更新。
:::

为实体的成长添加计时器。它可以被类如实体喜欢的feedItems/食物加速

## 属性

### **id** - `string`

此组件的ID，应为minecraft:ageable

### **duration** - `number`

实体成长所需要的时间，-1为不会成长的baby

### **feedItems** - `EntityDefinitionFeedItem[]`

能够给实体投喂的物品列表，包括用于物品名称的'item'和决定实体几次能够成长中的'growth'

### **dropItems** - `any[]`

实体成长后的掉落物列表

### **growUp** - `Trigger`

实体成长后要触发的事件
