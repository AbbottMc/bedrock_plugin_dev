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
包含了一组用于整个世界范围内的事件

## Properties
### **tick** - [`EmptySignal`](EmptySignal.md)
此事件每游戏刻触发一次 - 即每秒20次


### **changeWeather** - [`ChangeWeatherEventSignal`](ChangeWeatherEventSignal.md)
此事件在Minecraft天气变化时触发


### **addEffect** - [`AddEffectEventSignal`](AddEffectEventSignal.md)
此事件在实体被添加了状态时触发


### **beforeChat** - [`BeforeChatEventSignal`](BeforeChatEventSignal.md)
此事件在消息被传递或广播前触发,可以取消发送,也可以更新消息


### **chat** - [`ChatEventSignal`](ChatEventSignal.md)
此事件在消息被传递或广播后触发


### **createEntity** - [`EntityEventSignal`](EntityEventSignal.md)
此事件在创建新实体时触发


### **beforeActivatePiston** - [`BeforeActivatePistonEventSignal`](BeforeActivatePistonEventSignal.md)
此事件在活塞收到激活命令,激活之前触发


### **activatePiston** - [`ActivatePistonEventSignal`](ActivatePistonEventSignal.md)
此事件在活塞激活或收回后触发

