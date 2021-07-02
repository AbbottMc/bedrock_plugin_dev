---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.ChatEvent Class
description: Contents of the Minecraft.ChatEvent class.
---
# ChatEvent Class
:::warning 警告 :::
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.

玩家发出聊天信息时触发的事件

## 属性
### **message** - `string  字符串`
此时message已经被广播给所有玩家，在BeforeChatEvent事件中，可以修改此参数以修改显示给玩家的信息


### **sender** - `Player  玩家实例`
发送信息的玩家


### **targets** - `Player()  玩家列表`
将要收到这条信息的玩家列表


### **sendToTargets** - `bool  布尔值`
如果值为true，此信息将会被显示给特定的对象（即不向所有玩家广播）



