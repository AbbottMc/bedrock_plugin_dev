---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.BeforeChatEvent Class
description: Contents of the Minecraft.BeforeChatEvent class.
---
# BeforeChatEvent 类
::: warning 注意
这些接口是Plugin系统的一部分，目前属于实验性内容。与其他的实验性内容相同，在Minecraft的版本更新过程中，这些内容可能会发生一些功能性的变化。请自行关注Minecraft的更新日志以获取最新的接口更新。
:::

在玩家发送消息时被触发的事件

## 属性
### **message** - `string`
将被广播的消息。在beforeChat事件处理器中，_message_ 在呈现给玩家前可被编辑。


### **sender** - `Player`
发送消息的玩家。


### **targets** - `Player[]`
将收到消息的玩家列表。


### **sendToTargets** - `boolean`
若此属性为true，则消息只会发送给targets中列出的一个或多个玩家，而非向全体玩家进行广播。


### **cancel** - `boolean`
如果在beforeChat事件处理器中设置为true，消息将不会显示