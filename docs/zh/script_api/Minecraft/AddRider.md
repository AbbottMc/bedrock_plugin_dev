---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.AddRider Class
description: Contents of the Minecraft.AddRider class.
---
# AddRider 类

::: warning 注意
这些接口是Plugin系统的一部分，目前属于实验性内容。与其他的实验性内容相同，在Minecraft的版本更新过程中，这些内容可能会发生一些功能性的变化。请自行关注Minecraft的更新日志以获取最新的接口更新。
:::

添加此组件后，实体在生成时将带有一个特定实体类型的骑手。

## 属性

### **id** - `string`

此组件的ID。应为`minecraft:addrider`

### **entityType** - `string`
<!--暂定-->
在特定情况下生成的作为骑手的实体类型。

### **spawnEvent** - `string`

当为该实体派生骑手时，在骑手上触发的可选生成事件。
