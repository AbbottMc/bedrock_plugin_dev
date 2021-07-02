---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.ActivatePistonEventSignal Class
description: Contents of the Minecraft.ActivatePistonEventSignal class.
---
# ActivatePistonEventSignal 类
::: warning 注意
这些接口是Plugin系统的一部分，目前属于实验性内容。与其他的实验性内容相同，在Minecraft的版本更新过程中，这些内容可能会发生一些功能性的变化。请自行关注Minecraft的更新日志以获取最新的接口更新。
:::

管理活塞激活时的相关回调

## 方法
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)
  
### **subscribe**
`
subscribe(callback: (args: ActivatePistonEvent) => undefined): (arg: ActivatePistonEvent) => undefined
`

添加一个会在活塞伸出或收缩时被回调的函数
#### 实参列表
| 参数 | 类型 | 描述 |
| :--- | :--- | :---: |
| **callback** | (arg: ActivatePistonEvent) => undefined | 被添加进活塞激活事件回调队列中的函数 |

返回 (arg: ActivatePistonEvent) => undefined

#### 实例
``` javascript
import {Commands, World} from 'Minecraft';

const log = function(message){
    Commands.run(`say ${message}`);
};

//订阅活塞激活事件
World.events.activatePiston.subscribe((event)=>{
    log(event.isExpanding ? '活塞伸出' : '活塞收缩');
});
```

### **unsubscribe**
`
unsubscribe(callback: (arg: ActivatePistonEvent) => undefined): void
`

移除了一个会在活塞伸出或收缩时被回调的函数。

#### 实参列表
| 参数 | 类型 | 描述 |
| :--- | :--- | :---: |
| **callback** | (arg: ActivatePistonEvent) => undefined | 被从活塞激活事件回调队列中移除的函数 |


::: warning 警告
这个函数可以抛出错误
:::

