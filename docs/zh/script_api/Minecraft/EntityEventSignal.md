---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.EntityEventSignal Class
description: Contents of the Minecraft.EntityEventSignal class.
---
# EntityEventSignal Class
::: warning 注意
这些接口是Plugin系统的一部分，目前属于实验性内容。与其他的实验性内容相同，在Minecraft的版本更新过程中，这些内容可能会发生一些功能性的变化。请自行关注Minecraft的更新日志以获取最新的接口更新。
:::


## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)
  
### **subscribe**
`
subscribe(callback: (arg: EntityEvent) => undefined): (arg: EntityEvent) => undefined
`

#### Arguments
| 参数 | 类型 | 描述 |
| :--- | :--- | :---: |
| **callback** | (arg: EntityEvent) => undefined | - |

Returns (arg: EntityEvent) => undefined


### **unsubscribe**
`
unsubscribe(callback: (arg: EntityEvent) => undefined): void
`

#### Arguments
| 参数 | 类型 | 描述 |
| :--- | :--- | :---: |
| **callback** | (arg: EntityEvent) => undefined | - |


::: warning 注意
此函数可抛出错误
:::

