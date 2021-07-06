---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.WeatherChangedEventSignal Class
description: Contents of the Minecraft.WeatherChangedEventSignal class.
---
# WeatherChangedEventSignal 类
::: warning 注意
这些接口是Plugin系统的一部分，目前属于实验性内容。与其他的实验性内容相同，在Minecraft的版本更新过程中，这些内容可能会发生一些功能性的变化。请自行关注Minecraft的更新日志以获取最新的接口更新。
:::
管理与天气变化相关的事件


## 方法
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)
  
### **subscribe**
`
subscribe(callback: (arg0: WeatherChangedEvent) => undefined): (arg0: WeatherChangedEvent) => undefined
`

<!-- Adds a callback that will be called when weather changes. -->
为天气变化添加订阅回调

#### 参数列表
| 参数 | 类型 | 描述 |
| :--- | :--- | :---: |
| **callback** | (arg0: WeatherChangedEvent) => undefined | - |

返回 (arg0: WeatherChangedEvent) => undefined


### **unsubscribe**
`
unsubscribe(callback: (arg0: WeatherChangedEvent) => undefined): void
`

移除天气变化的订阅
#### 参数列表
| 参数 | 类型 | 描述 |
| :--- | :--- | :---: |
| **callback** | (arg0: WeatherChangedEvent) => undefined | - |

返回 *undefined*

::: warning 注意
此函数可抛出错误
:::

