---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.ChatEventSignal Class
description: Contents of the Minecraft.ChatEventSignal class.
---
# ChatEventSignal 类
::: warning 注意
这些接口是Plugin系统的一部分，目前属于实验性内容。与其他的实验性内容相同，在Minecraft的版本更新过程中，这些内容可能会发生一些功能性的变化。请自行关注Minecraft的更新日志以获取最新的接口更新。
:::

管理聊天信息发送时的相关回调


## 方法
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)
  
### **subscribe**
`
subscribe(callback: (arg: ChatEvent) => undefined): (arg: ChatEvent) => undefined
`

添加一个会在玩家发送聊天信息时被回调的函数
#### 参数列表
| 参数 | 类型 | 描述 |
| :--- | :--- | :---: |
| **callback** | (arg: ChatEvent) => undefined | - |

返回 (arg: ChatEvent) => undefined


#### 实例
##### ***custom_command.js***
```javascript
// Kills the chatting player if they type "!killme"
const chatCallback = World.events.beforeChat.subscribe((eventData) => {
  if (eventData.message.includes("cancel")) {
    // 如果消息内存在"cancel"就取消事件
    eventData.canceled = true;
  } else {
    // 修改要发送的聊天记录
    eventData.message = `Modified '${eventData.message}'`;
  }
});

```
### **unsubscribe**
`
unsubscribe(callback: (arg: ChatEvent) => undefined): void
`

移除一个会在玩家发送聊天信息时被回调的函数
#### 参数列表
| 参数 | 类型 | 描述 |
| :--- | :--- | :---: |
| **callback** | (arg: ChatEvent) => undefined | - |


::: warning 注意
这个函数可能会抛出异常
:::