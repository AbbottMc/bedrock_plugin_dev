---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.AddRider Class
description: Contents of the Minecraft.AddRider class.
---
# AddRider Class
::: warning 注意
这些接口是Plugin系统的一部分，目前属于实验性内容。与其他的实验性内容相同，在Minecraft的版本更新过程中，这些内容可能会发生一些功能性的变化。请自行关注Minecraft的更新日志以获取最新的接口更新。
:::
When added, this component makes the entity spawn with a rider of the specified entityType.

## Properties
### **id** - `string`
Identifier of this component. Should always be minecraft:addrider.


### **entityType** - `string`
The type of entity that is added as a rider for this entity when spawned under certain conditions.


### **spawnEvent** - `string`
Optional spawn event to trigger on the rider when that rider is spawned for this entity.



