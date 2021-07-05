---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.MountTaming Class
description: Contents of the Minecraft.MountTaming class.
---
# MountTaming Class
::: warning 注意
这些接口是Plugin系统的一部分，目前属于实验性内容。与其他的实验性内容相同，在Minecraft的版本更新过程中，这些内容可能会发生一些功能性的变化。请自行关注Minecraft的更新日志以获取最新的接口更新。
:::
Contains options for taming a rideable entity based on the entity that mounts it.

## 属性
### **id** - `string`
Identifier of this component. Should always be minecraft:mount_taming.



## 方法
- [setTamed](#settamed)
  
### **setTamed**
`
setTamed(showParticles: boolean): void
`

Sets this rideable entity as tamed.
#### Arguments
| 参数 | 类型 | 描述 |
| :--- | :--- | :---: |
| **showParticles** | *boolean* | Whether to show effect particles when this entity is tamed. |


::: warning 注意
此函数可抛出错误
:::

