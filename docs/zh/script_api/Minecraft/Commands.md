---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.Commands Class
description: Contents of the Minecraft.Commands class.
---
# Commands Class
::: warning 注意
这些接口是Plugin系统的一部分，目前属于实验性内容。与其他的实验性内容相同，在Minecraft的版本更新过程中，这些内容可能会发生一些功能性的变化。请自行关注Minecraft的更新日志以获取最新的接口更新。
:::
Contains a method that lets you run console commands within Minecraft.


## Methods
- [run](#run)
  
### **run**
`
run(commandString: string): json
`

Runs a particular command from the context of the server. Command strings should not start with slash.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **commandString** | *string* | - |

Returns *json* - For commands that return data, returns a structure with command response values.

::: warning 警告 此函数可抛出错误 :::

#### 示例
##### ***commands.js***
```javascript
Commands.run("say You got a new high score!");
Commands.run("scoreboard players set @p score 10");

```
