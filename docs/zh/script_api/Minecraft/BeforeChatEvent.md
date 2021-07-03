---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.BeforeChatEvent Class
description: Contents of the Minecraft.BeforeChatEvent class.
---
# BeforeChatEvent Class
::: warning 注意
这些接口是Plugin系统的一部分，目前属于实验性内容。与其他的实验性内容相同，在Minecraft的版本更新过程中，这些内容可能会发生一些功能性的变化。请自行关注Minecraft的更新日志以获取最新的接口更新。
:::
玩家信息被发出前触发的事件（信息被编辑完成，还未被广播到所有玩家时）

## 属性
### **message** - `string`
即将被发出的信息。在BeforeChatEvent中，__message__可以被编辑，这样将修改所有玩家看到的信息。


### **sender** - `Player`
发送信息的人


### **targets** - `Player[]`
所有将会看到信息的人


### **sendToTargets** - `boolean`
如果值为true，将会把信息发送给指定玩家（即不广播给所有玩家）


### **cancel** - `boolean`
如果设置为true，信息将不会被广播（取消发送）



