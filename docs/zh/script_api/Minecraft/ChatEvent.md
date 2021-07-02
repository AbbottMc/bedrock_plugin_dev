---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.ChatEvent Class
description: Contents of the Minecraft.ChatEvent class.
---
# ChatEvent 类
:::warning 注意
These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.
:::

玩家发出聊天信息时触发的事件

## 属性
### **message** - `string`
此时message已经被广播给所有玩家，开发者可通过修改BeforeChatEvent中的message参数来修改呈现在玩家消息栏中的信息


### **sender** - `Player`
发送信息的玩家


### **targets** - `Player[]`
将要收到这条信息的玩家列表


### **sendToTargets** - `boolean`
如果值为true，此信息将会被显示给特定的对象（即不向所有玩家广播）



