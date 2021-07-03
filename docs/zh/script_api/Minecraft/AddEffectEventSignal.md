---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.AddEffectEventSignal Class
description: Contents of the Minecraft.AddEffectEventSignal class.
---
# AddEffectEventSignal Class
::: warning 注意
这些接口是Plugin系统的一部分，目前属于实验性内容。与其他的实验性内容相同，在Minecraft的版本更新过程中，这些内容可能会发生一些功能性的变化。请自行关注Minecraft的更新日志以获取最新的接口更新。 
:::
Manages callbacks that are connected to when an effect is added to an entity.


## 方法
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)
  
### **subscribe**
`
subscribe(callback: (arg: ActorAddEffectEvent) => undefined): (arg: ActorAddEffectEvent) => undefined
`

Adds a callback that will be called when an effect is added to an entity.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **callback** | (arg: ActorAddEffectEvent) => undefined | - |

Returns (arg: ActorAddEffectEvent) => undefined


### **unsubscribe**
`
unsubscribe(callback: (arg: ActorAddEffectEvent) => undefined): void
`

Removes a callback from being called when an effect is added to an entity.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **callback** | (arg: ActorAddEffectEvent) => undefined | - |


::: warning 警告 此函数可抛出错误 :::

