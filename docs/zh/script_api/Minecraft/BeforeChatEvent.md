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
An event that fires as players enter chat messages.

## Properties
### **message** - `string`
Message that is being broadcast. In a beforeChat event handler, _message_ can be updated with edits before the message is displayed to players.


### **sender** - `Player`
Player that sent the chat message.


### **targets** - `Player[]`
List of players that will receive this message.


### **sendToTargets** - `boolean`
If true, this message is directly targeted to one or more players (i.e., is not broadcast.)


### **cancel** - `boolean`
If set to true in a beforeChat event handler, this message is not broadcast out.



