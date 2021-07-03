---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: GameTest Module
description: Contents of the GameTest module
---
# GameTest Module
::: warning 注意
这些接口是Plugin系统的一部分，目前属于实验性内容。与其他的实验性内容相同，在Minecraft的版本更新过程中，这些内容可能会发生一些功能性的变化。请自行关注Minecraft的更新日志以获取最新的接口更新。
:::

## 类
- [RegistrationBuilder](RegistrationBuilder.md)
- [Helper](Helper.md)
- [GameTestSequence](GameTestSequence.md)
- [Tags](Tags.md)

## 函数
### **register**
`
register(testClassName: string, testName: string, testFunction: (arg: Helper) => undefined): RegistrationBuilder
`

注册一个新的GameTest函数,此GameTest函数会变得可通过/gametest run [testClassName]:[testName] 执行
#### 参数
| Param | Type | Description |
| :--- | :--- | :---: |
| **testClassName** | *string* | 此测试隶属的类名称 |
| **testName** | *string* | 此特定测试的名称 |
| **testFunction** | (arg: Helper) => undefined | 测试功能的实现函数 |

Returns [*RegistrationBuilder*](RegistrationBuilder.md) - Returns a [*GameTest.RegistrationBuilder*](../GameTest/RegistrationBuilder.md) 可以通过构建器方法指定此测试的其他对象


#### 示例
##### ***示例1.js***
```javascript
GameTest.register("ExampleTests", "alwaysFail", (test) => {
  test.fail("This test, runnable via '/gametest run ExampleTests:alwaysFail', will always fail");
});

```
