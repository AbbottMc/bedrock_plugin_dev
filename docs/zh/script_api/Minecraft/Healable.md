---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.Healable Class
description: Contents of the Minecraft.Healable class.
---
# Healable Class
::: warning 注意
这些接口是Plugin系统的一部分，目前属于实验性内容。与其他的实验性内容相同，在Minecraft的版本更新过程中，这些内容可能会发生一些功能性的变化。请自行关注Minecraft的更新日志以获取最新的接口更新。
:::
Defines the interactions with this entity for healing it.

## Properties
### **id** - `string`
Identifier of this component. Should always be minecraft:healable.


### **filters** - `FilterGroup`
A set of filters for when these Healable items would apply.


### **forceUse** - `boolean`
Determines if an item can be used regardless of the entity being at full health.


### **items** - `FeedItem[]`
A set of items that can specifically heal this entity.



