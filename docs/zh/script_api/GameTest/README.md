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

## Classes
- [RegistrationBuilder](RegistrationBuilder.md)
- [Helper](Helper.md)
- [GameTestSequence](GameTestSequence.md)
- [Tags](Tags.md)

## Functions
### **register**
`
register(testClassName: string, testName: string, testFunction: (arg: Helper) => undefined): RegistrationBuilder
`

Registers a new GameTest function. This GameTest will become available in Minecraft via /gametest run [testClassName]:[testName].
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **testClassName** | *string* | Name of the class of tests this test should be a part of. |
| **testName** | *string* | Name of this specific test. |
| **testFunction** | (arg: Helper) => undefined | Implementation of the test function. |

Returns [*RegistrationBuilder*](RegistrationBuilder.md) - Returns a [*GameTest.RegistrationBuilder*](../GameTest/RegistrationBuilder.md) object where additional options for this test can be specified via builder methods


#### Examples
##### ***example1.js***
```javascript
GameTest.register("ExampleTests", "alwaysFail", (test) => {
  test.fail("This test, runnable via '/gametest run ExampleTests:alwaysFail', will always fail");
});

```
