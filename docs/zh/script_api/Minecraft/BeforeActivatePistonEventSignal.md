---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.BeforeActivatePistonEventSignal Class
description: Contents of the Minecraft.BeforeActivatePistonEventSignal class.
---
# BeforeActivatePistonEventSignal 类

::: warning 注意
这些接口是Plugin系统的一部分，目前属于实验性内容。与其他的实验性内容相同，在Minecraft的版本更新过程中，这些内容可能会发生一些功能性的变化。请自行关注Minecraft的更新日志以获取最新的接口更新。
:::

管理触发活塞事件相关事件的回调

## 方法

- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**

`subscribe(callback: (arg: BeforeActivatePistonEvent) => undefined): (arg: BeforeActivatePistonEvent) => undefined`

在活塞运动之前添加将被调用的回调

#### 实参列表

| 参数               | 类型                                          | 描述 |
| :----------------- | :-------------------------------------------- | :--: |
| **callback** | (arg: BeforeActivatePistonEvent) => undefined |  -  |

返回 (arg: BeforeActivatePistonEvent) => undefined

### **unsubscribe**

`unsubscribe(callback: (arg: BeforeActivatePistonEvent) => undefined): void`

在活塞运动之前移除将被调用的回调

#### 实参列表

| 参数               | 类型                                          | 描述 |
| :----------------- | :-------------------------------------------- | :--: |
| **callback** | (arg: BeforeActivatePistonEvent) => undefined |  -  |

::: warning 注意
此函数可抛出错误
:::
