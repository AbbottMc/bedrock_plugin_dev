---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.ChatEventSignal Class
description: Contents of the Minecraft.ChatEventSignal class.
---
# ChatEventSignal 类
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.

管理聊天信息发送时的相关回调


## 方法
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)
  
### **subscribe**
`
subscribe(callback: (arg: ChatEvent) => undefined): (arg: ChatEvent) => undefined
`

添加一个会在聊天信息被发送时被回调的函数
#### 实参
| 参数 | 类型 | 描述 |
| :--- | :--- | :---: |
| **callback** | (arg: ChatEvent) => undefined | - |

返回值类型 (arg: ChatEvent) => undefined


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

移除一个会在聊天信息被发送时被回调的函数
#### 实参
| 参数 | 类型 | 描述 |
| :--- | :--- | :---: |
| **callback** | (arg: ChatEvent) => undefined | - |


> [!WARNING]
> 这个函数可能会抛出异常
