---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.TickEventSignal Class
description: Contents of the Minecraft.TickEventSignal class.
---
# TickEventSignal 类
::: warning 注意
这些接口是Plugin系统的一部分，目前属于实验性内容。与其他的实验性内容相同，在Minecraft的版本更新过程中，这些内容可能会发生一些功能性的变化。请自行关注Minecraft的更新日志以获取最新的接口更新。
:::
<!-- Manages callbacks that are connected to a tick event. -->
管理与`tick`事件相关的回调


## 方法
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)
  
### **subscribe**
`
subscribe(callback: () => undefined): () => undefined
`

<!-- Adds a callback that will be called on every tick. -->
为`tick`事件添加回调
#### 参数列表
| 参数 | 类型 | 描述 |
| :--- | :--- | :---: |
| **callback** | () => undefined | - |

返回 () => undefined


### **unsubscribe**
`
unsubscribe(callback: () => undefined): void
`

<!-- Removes a callback from being called every tick. -->
移除`tick`事件的回调
#### 参数列表
| 参数 | 类型 | 描述 |
| :--- | :--- | :---: |
| **callback** | () => undefined | - |

返回 *undefined*

::: warning 注意
此函数可抛出错误
:::

