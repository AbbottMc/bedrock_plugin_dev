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
<!-- Describes a particular seating position on this rideable entity. -->
描述了可骑乘实体上的座位

## 属性
### **position** - `Location`
这个座位的物理位置，相对于实体的位置


### **minRiderCount** - `number`
A minimum number of riders that can be placed in this seat position, if this seat is to be filled.
如果这个座位要被填满，可以安置在这个座位上的最少乘客人数。


### **maxRiderCount** - `number`
这个座位能支持的最大乘客数量


### **lockRiderRotation** - `number`
如果指定了，则会强制锁定骑乘者的最大旋转视角



