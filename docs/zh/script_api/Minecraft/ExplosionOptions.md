---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.ExplosionOptions Class
description: Contents of the Minecraft.ExplosionOptions class.
---
# ExplosionOptions Class
::: warning 注意
这些接口是Plugin系统的一部分，目前属于实验性内容。与其他的实验性内容相同，在Minecraft的版本更新过程中，这些内容可能会发生一些功能性的变化。请自行关注Minecraft的更新日志以获取最新的接口更新。
:::
Additional configuration options for the [*Minecraft.Dimension.createExplosion*](../Minecraft/Dimension.md#createexplosion) method.

## Properties
### **source** - `Entity`
Optional source of the explosion.


### **breaksBlocks** - `boolean`
Whether the explosion will break blocks within the blast radius.


### **causesFire** - `boolean`
If true, the explosion is accompanied by fires within or near the blast radius.


### **allowUnderwater** - `boolean`
Whether parts of the explosion also impact underwater.



## Methods
- [constructor](#constructor)
  
### **constructor**
`
new ExplosionOptions()
`


Returns [*ExplosionOptions*](ExplosionOptions.md)


