---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.EntityDefinitionFeedItem Class
description: Contents of the Minecraft.EntityDefinitionFeedItem class.
---
# EntityDefinitionFeedItem Class
::: warning 注意
这些接口是Plugin系统的一部分，目前属于实验性内容。与其他的实验性内容相同，在Minecraft的版本更新过程中，这些内容可能会发生一些功能性的变化。请自行关注Minecraft的更新日志以获取最新的接口更新。
:::
As part of the Ageable component, represents a set of items that can be fed to an entity and the rate at which that causes them to grow.

## Properties
### **growth** - `number`
The amount by which an entity's age will increase when fed this item. Values usually range between 0 and 1.


### **item** - `string`
Identifier of type of item that can be fed. If a namespace is not specified, 'minecraft:' is assumed. Example values include 'wheat' or 'golden_apple'.



