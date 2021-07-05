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

为实体的成长添加计时器。此过程可通过给予实体其喜欢的食物（由FeedItems定义）被加速。

## 属性

### **id** - `string`

此组件的ID，为常量，值为`minecraft:ageable`。

### **duration** - `number`

实体成长所需时间。值为-1时，该实体为不会成长的幼体。

### **feedItems** - `EntityDefinitionFeedItem[]`

可向实体投喂的物品列表。其子元素为 [*EntityDefinitionFeedItem*](EntityDefinitionFeedItem.md) 实例，实例中：`item`属性用于表示物品名称，`growth`属性决定实体成长所需时间。

### **dropItems** - `any[]`

实体成年后的掉落物列表。

### **growUp** - `Trigger`
<!--暂定--->
实体成年时要触发的事件。
