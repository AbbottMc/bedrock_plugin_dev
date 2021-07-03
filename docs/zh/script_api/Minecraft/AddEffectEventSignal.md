---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.AddEffectEventSignal Class
description: Contents of the Minecraft.AddEffectEventSignal class.
---
# AddEffectEventSignal Class

::: warning 注意
这些接口是Plugin系统的一部分，目前属于实验性内容。与其他的实验性内容相同，在Minecraft的版本更新过程中，这些内容可能会发生一些功能性的变化。请自行关注Minecraft的更新日志以获取最新的接口更新。
:::

管理将效果添加到实体时的回调。

## 方法

- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**

`subscribe(callback: (arg: ActorAddEffectEvent) => undefined): (arg: ActorAddEffectEvent) => undefined`

效果添加到实体时再添加回调

#### 实参列表

| 参数               | 类型                                    | 描述 |
| :----------------- | :-------------------------------------- | :--: |
| **callback** | (arg: ActorAddEffectEvent) => undefined |  -  |

返回 (arg: ActorAddEffectEvent) => undefined

### **unsubscribe**

`unsubscribe(callback: (arg: ActorAddEffectEvent) => undefined): void`

效果添加到实体时删除回调

#### 实参列表

| 参数               | 类型                                    | 描述 |
| :----------------- | :-------------------------------------- | :--: |
| **callback** | (arg: ActorAddEffectEvent) => undefined |  -  |

::: warning 警告 此函数可抛出错误 :::
