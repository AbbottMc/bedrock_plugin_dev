---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.Seat Class
description: Contents of the Minecraft.Seat class.
---
# Seat Class
::: warning 注意
这些接口是Plugin系统的一部分，目前属于实验性内容。与其他的实验性内容相同，在Minecraft的版本更新过程中，这些内容可能会发生一些功能性的变化。请自行关注Minecraft的更新日志以获取最新的接口更新。
:::
Describes a particular seating position on this rideable entity.

## Properties
### **position** - `Location`
Physical location of this seat, relative to the entity's location.


### **minRiderCount** - `number`
A minimum number of riders that can be placed in this seat position, if this seat is to be filled.


### **maxRiderCount** - `number`
A maximum number of riders that this seat can support.


### **lockRiderRotation** - `number`
If specified, contains a forced rotation that the riders in this seat are facing.



