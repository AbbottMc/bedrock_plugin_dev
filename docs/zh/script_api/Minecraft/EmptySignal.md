---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.EmptySignal Class
description: Contents of the Minecraft.EmptySignal class.
---
# EmptySignal Class
::: warning 注意
这些接口是Plugin系统的一部分，目前属于实验性内容。与其他的实验性内容相同，在Minecraft的版本更新过程中，这些内容可能会发生一些功能性的变化。请自行关注Minecraft的更新日志以获取最新的接口更新。
:::
Manages callbacks associated with simple events, like Tick.


## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)
  
### **subscribe**
`
subscribe(callback: () => undefined): () => undefined
`

Adds a callback that will be called for basic events that take no arguments, like Tick.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **callback** | () => undefined | - |

Returns () => undefined


### **unsubscribe**
`
unsubscribe(callback: () => undefined): void
`

Removes a callback from being called for basic events.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **callback** | () => undefined | - |


> [!WARNING]
> This function can throw errors.

