---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.AddEffectEventSignal Class
description: Contents of the Minecraft.AddEffectEventSignal class.
---
# AddEffectEventSignal 类
::: warning 注意
这些接口是Plugin系统的一部分，目前属于实验性内容。与其他的实验性内容相同，在Minecraft的版本更新过程中，这些内容可能会发生一些功能性的变化。请自行关注Minecraft的更新日志以获取最新的接口更新。 
:::
<!--Manages callbacks that are connected to when an effect is added to an entity.-->
管理当一个实体被添加了一个状态效果时的相关回调。

## 方法
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)
  
### **subscribe**
`
subscribe(callback: (arg: ActorAddEffectEvent) => undefined): (arg: ActorAddEffectEvent) => undefined
`

<!--Adds a callback that will be called when an effect is added to an entity.-->
向 _添加状态效果事件_ 的回调队列中添加一个指定的回调函数，该函数会在添加状态效果至某实体时被触发。
#### 实参列表
| 参数 | 类型 | 描述 |
| :--- | :--- | :---: |
| **callback** | (arg: ActorAddEffectEvent) => undefined | - |

返回 (arg: ActorAddEffectEvent) => undefined


### **unsubscribe**
`
unsubscribe(callback: (arg: ActorAddEffectEvent) => undefined): void
`

从 _添加状态效果事件_ 的回调队列中移除一个指定的回调函数
#### 实参列表
| 参数 | 参数 | 描述 |
| :--- | :--- | :---: |
| **callback** | (arg: ActorAddEffectEvent) => undefined | - |


::: warning 注意
此函数可抛出错误
:::

