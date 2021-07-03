---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.BeforeChatEventSignal Class
description: Contents of the Minecraft.BeforeChatEventSignal class.
---
# BeforeChatEventSignal Class
::: warning 注意
这些接口是Plugin系统的一部分，目前属于实验性内容。与其他的实验性内容相同，在Minecraft的版本更新过程中，这些内容可能会发生一些功能性的变化。请自行关注Minecraft的更新日志以获取最新的接口更新。
:::
Manages callbacks that are connected to an event that fires before chat messages are sent.


## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)
  
### **subscribe**
`
subscribe(callback: (arg: BeforeChatEvent) => undefined): (arg: BeforeChatEvent) => undefined
`

Adds a callback that will be called before new chat messages are sent.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **callback** | (arg: BeforeChatEvent) => undefined | - |

Returns (arg: BeforeChatEvent) => undefined


### **unsubscribe**
`
unsubscribe(callback: (arg: BeforeChatEvent) => undefined): void
`

Removes a callback from being called before new chat messages are sent.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **callback** | (arg: BeforeChatEvent) => undefined | - |
 

::: warning 注意
此函数可抛出错误
:::

