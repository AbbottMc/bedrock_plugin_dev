---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.Ageable Class
description: Contents of the Minecraft.Ageable class.
---
# Ageable Class
::: warning 注意
这些接口是Plugin系统的一部分，目前属于实验性内容。与其他的实验性内容相同，在Minecraft的版本更新过程中，这些内容可能会发生一些功能性的变化。请自行关注Minecraft的更新日志以获取最新的接口更新。
:::
Adds a timer for the entity to grow up. It can be accelerated by giving the entity the items it likes as defined by feedItems.

## Properties
### **id** - `string`
Identifier of this component. Should always be minecraft:ageable.


### **duration** - `number`
Amount of time before the entity grows up, -1 for always a baby.


### **feedItems** - `EntityDefinitionFeedItem[]`
List of items that can be fed to the entity. Includes 'item' for the item name and 'growth' to define how much time it grows up by.


### **dropItems** - `any[]`
List of items that the entity drops when it grows up.


### **growUp** - `Trigger`
Event to run when this entity grows up.



