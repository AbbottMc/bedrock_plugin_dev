---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.Events Class
description: Contents of the Minecraft.Events class.
---
# Events Class
::: warning 注意
这些接口是Plugin系统的一部分，目前属于实验性内容。与其他的实验性内容相同，在Minecraft的版本更新过程中，这些内容可能会发生一些功能性的变化。请自行关注Minecraft的更新日志以获取最新的接口更新。
:::
Contains a set of events that are available across the scope of the World.

## Properties
### **tick** - `EmptySignal`
This event fires every tick - which is 20 times per second.


### **changeWeather** - `ChangeWeatherEventSignal`
This event will be triggered when the weather changes within Minecraft.


### **addEffect** - `AddEffectEventSignal`
This event fires when an effect, like poisoning, is added to an entity.


### **beforeChat** - `BeforeChatEventSignal`
This event fires before a chat message is broadcast or delivered. The event can be canceled, and the message can also be updated.


### **chat** - `ChatEventSignal`
This event is triggered after a chat message has been broadcast or sent to players.


### **createEntity** - `EntityEventSignal`
This event fires when a new entity is created.


### **beforeActivatePiston** - `BeforeActivatePistonEventSignal`
Fires before a piston is activated.


### **activatePiston** - `ActivatePistonEventSignal`
This event fires when a piston expands or retracts.



