---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.BeforeChatEventSignal Class
description: Contents of the Minecraft.BeforeChatEventSignal class.
---
# BeforeChatEventSignal 类

::: warning 注意
这些接口是Plugin系统的一部分，目前属于实验性内容。与其他的实验性内容相同，在Minecraft的版本更新过程中，这些内容可能会发生一些功能性的变化。请自行关注Minecraft的更新日志以获取最新的接口更新。
:::

在消息发送之前管理事件有关回调

## 方法

- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**

`subscribe(callback: (arg: BeforeChatEvent) => undefined): (arg: BeforeChatEvent) => undefined`

在新消息发送之前添加回调

#### 参数列表

| 参数               | 类型                                | 描述 |
| :----------------- | :---------------------------------- | :--: |
| **callback** | (arg: BeforeChatEvent) => undefined |  -  |

返回 (arg: BeforeChatEvent) => undefined

### **unsubscribe**

`unsubscribe(callback: (arg: BeforeChatEvent) => undefined): void`

在新消息发送之前取消回调

#### 参数列表

| 参数               | 类型                                | 描述 |
| :----------------- | :---------------------------------- | :--: |
| **callback** | (arg: BeforeChatEvent) => undefined |  -  |

::: warning 注意
此函数可抛出错误
:::
