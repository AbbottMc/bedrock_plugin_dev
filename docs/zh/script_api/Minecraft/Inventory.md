---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.Inventory Class
description: Contents of the Minecraft.Inventory class.
---
# Inventory Class
::: warning 注意
这些接口是Plugin系统的一部分，目前属于实验性内容。与其他的实验性内容相同，在Minecraft的版本更新过程中，这些内容可能会发生一些功能性的变化。请自行关注Minecraft的更新日志以获取最新的接口更新。
:::
Defines this entity's inventory properties.

## Properties
### **additionalSlotsPerStrength** - `number`
Number of slots that this entity can gain per extra strength.


### **canBeSiphonedFrom** - `boolean`
If true, the contents of this inventory can be removed by a hopper.


### **containerType** - `string`
Type of container this entity has.


### **inventorySize** - `number`
Number of slots the container has.


### **private** - `boolean`
If true, the entity will not drop it's inventory on death.


### **restrictToOwner** - `boolean`
If true, the entity's inventory can only be accessed by its owner or itself.


### **container** - `InventoryComponentContainer`
Defines the interactions with this entity for healing it.



