---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.FeedItemEffect Class
description: Contents of the Minecraft.FeedItemEffect class.
---
# FeedItemEffect Class
::: warning 注意
这些接口是Plugin系统的一部分，目前属于实验性内容。与其他的实验性内容相同，在Minecraft的版本更新过程中，这些内容可能会发生一些功能性的变化。请自行关注Minecraft的更新日志以获取最新的接口更新。
:::

## Properties
### **amplifier** - `number`
Gets an amplifier that may have been applied to this effect. Valid values are integers starting at 0 and up - but usually ranging between 0 and 4.


### **chance** - `number`
Chance that this effect is applied as a result of the entity being fed this item. Valid values range between 0 and 1.


### **duration** - `number`
Gets the duration, in seconds, of this effect.


### **name** - `string`
Gets the identifier of the effect to apply. Example values include 'fire_resistance' or 'regeneration'.



