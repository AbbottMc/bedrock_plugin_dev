---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.LavaMovement Class
description: Contents of the Minecraft.LavaMovement class.
---
# LavaMovement Class
::: warning 注意
这些接口是Plugin系统的一部分，目前属于实验性内容。与其他的实验性内容相同，在Minecraft的版本更新过程中，这些内容可能会发生一些功能性的变化。请自行关注Minecraft的更新日志以获取最新的接口更新。
:::
Defines the base movement speed in lava of this entity.

## Properties
### **id** - `string`
Identifier of this component. Should always be minecraft:lava_movement.


### **value** - `number`
Value for movement speed on lava as defined through entity components.


### **current** - `number`
Read-only. Returns the current value of movement speed on lava for the entity.



## Methods
- [setCurrent](#setcurrent)
- [resetToMinValue](#resettominvalue)
- [resetToMaxValue](#resettomaxvalue)
- [resetToDefaultValue](#resettodefaultvalue)
  
### **setCurrent**
`
setCurrent(): void
`

Sets the current value of movement speed on lava for the entity.


> [!WARNING]
> This function can throw errors.

### **resetToMinValue**
`
resetToMinValue(): void
`

Resets the movement speed on lava speed to the minimum value.


> [!WARNING]
> This function can throw errors.

### **resetToMaxValue**
`
resetToMaxValue(): void
`

Resets the movement speed on lava to the maximum value for the entity.


> [!WARNING]
> This function can throw errors.

### **resetToDefaultValue**
`
resetToDefaultValue(): void
`

Resets the current movement speed on lava for the entity to its default value.


> [!WARNING]
> This function can throw errors.

