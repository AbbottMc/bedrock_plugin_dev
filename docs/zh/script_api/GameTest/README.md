---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: GameTest Module
description: Contents of the GameTest module
---
# GameTest 模块
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

注册一个新的GameTest函数，此函数将可通过`/gametest run [testClassName]:[testName]` 执行
#### 实参列表
| 参数 | 类型 | 描述 |
| :--- | :--- | :---: |
| **testClassName** | *string* | 此测试隶属的类名称 |
| **testName** | *string* | 此特定测试的名称 |
| **testFunction** | (arg: Helper) => undefined | 测试功能的实现函数 |

返回 [*RegistrationBuilder*](RegistrationBuilder.md) - 返回一个 [*GameTest.RegistrationBuilder*](../GameTest/RegistrationBuilder.md) 对象，其中可通过生成器方法配置此测试的其他选项。


#### 示例
##### ***example1.js***
```javascript
GameTest.register("ExampleTests", "alwaysFail", (test) => {
  test.fail("This test, runnable via '/gametest run ExampleTests:alwaysFail', will always fail");
});
```
