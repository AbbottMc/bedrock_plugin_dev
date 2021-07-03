---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.FeedItem Class
description: Contents of the Minecraft.FeedItem class.
---
# FeedItem Class
::: warning 注意
这些接口是Plugin系统的一部分，目前属于实验性内容。与其他的实验性内容相同，在Minecraft的版本更新过程中，这些内容可能会发生一些功能性的变化。请自行关注Minecraft的更新日志以获取最新的接口更新。
:::
As part of the Healable component, represents a specific item that can be fed to an entity to cause health effects.

## Properties
### **effects** - `FeedItemEffect[]`
As part of the Healable component, an optional collection of side effects that can occur from being fed an item.


### **healAmount** - `number`
The amount of health this entity gains when fed this item. This number is an integer starting at 0. Sample values can go as high as 40.


### **item** - `string`
Identifier of type of item that can be fed. If a namespace is not specified, 'minecraft:' is assumed. Example values include 'wheat' or 'golden_apple'.



