---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.Effect Class
description: Contents of the Minecraft.Effect class.
---
# Effect Class
::: warning 注意
这些接口是Plugin系统的一部分，目前属于实验性内容。与其他的实验性内容相同，在Minecraft的版本更新过程中，这些内容可能会发生一些功能性的变化。请自行关注Minecraft的更新日志以获取最新的接口更新。
:::
Represents an effect - like poison - that has been added to an Entity.

## Properties
### **amplifier** - `number`
Gets an amplifier that may have been applied to this effect. Sample values range typically from 0 to 4. Example: The effect 'Jump Boost II' will have an amplifier value of 1.


### **duration** - `number`
Gets the entire specified duration, in seconds, of this effect.


### **displayName** - `string`
Gets the player-friendly name of this effect.



