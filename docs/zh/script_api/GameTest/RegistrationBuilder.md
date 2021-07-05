---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: GameTest.RegistrationBuilder Class
description: Contents of the GameTest.RegistrationBuilder class.
---
# RegistrationBuilder Class
::: warning 注意
这些接口是Plugin系统的一部分，目前属于实验性内容。与其他的实验性内容相同，在Minecraft的版本更新过程中，这些内容可能会发生一些功能性的变化。请自行关注Minecraft的更新日志以获取最新的接口更新。
:::
A utility class to set GameTest parameters for a test. Methods can be chained together to set multiple properties.


## Methods
- [batch](#batch)
- [required](#required)
- [requiredSuccessfulAttempts](#requiredsuccessfulattempts)
- [maxAttempts](#maxattempts)
- [maxTicks](#maxticks)
- [setupTicks](#setupticks)
- [structureName](#structurename)
- [padding](#padding)
- [tag](#tag)
  
### **batch**
`
batch(batchName: ('night'|'day')): RegistrationBuilder
`

Sets the batch for the test to run in.
#### Arguments
| 参数 | 类型 | 描述 |
| :--- | :--- | :---: |
| **batchName** | `'night'`, `'day'` | Name of the batch for the test. |

Returns [*RegistrationBuilder*](RegistrationBuilder.md) - RegistrationBuilder object where additional configuration methods can be called.


### **required**
`
required(isRequired: boolean): RegistrationBuilder
`

Whether this test is required to pass as part of its broader set of tests.
#### Arguments
| 参数 | 类型 | 描述 |
| :--- | :--- | :---: |
| **isRequired** | *boolean* | If set to true, the test must pass in order for the entire run of tests to pass. |

Returns [*RegistrationBuilder*](RegistrationBuilder.md) - RegistrationBuilder object where additional configuration methods can be called.


### **requiredSuccessfulAttempts**
`
requiredSuccessfulAttempts(attemptCount: number): RegistrationBuilder
`

Sets the number of successful test runs to be considered successful.
#### Arguments
| 参数 | 类型 | 描述 |
| :--- | :--- | :---: |
| **attemptCount** | *number* | - |

Returns [*RegistrationBuilder*](RegistrationBuilder.md) - RegistrationBuilder object where additional configuration methods can be called.


### **maxAttempts**
`
maxAttempts(attemptCount: number): RegistrationBuilder
`

Sets the maximum number of times a test will try to rerun if it fails.
#### Arguments
| 参数 | 类型 | 描述 |
| :--- | :--- | :---: |
| **attemptCount** | *number* | - |

Returns [*RegistrationBuilder*](RegistrationBuilder.md) - RegistrationBuilder object where additional configuration methods can be called.


### **maxTicks**
`
maxTicks(tickCount: number): RegistrationBuilder
`

Sets the maximum number of ticks a test will run for before timing out and failing.
#### Arguments
| 参数 | 类型 | 描述 |
| :--- | :--- | :---: |
| **tickCount** | *number* | - |

Returns [*RegistrationBuilder*](RegistrationBuilder.md) - RegistrationBuilder object where additional configuration methods can be called.


### **setupTicks**
`
setupTicks(tickCount: number): RegistrationBuilder
`

Sets the number of ticks for a test to wait before executing when the structure is spawned.
#### Arguments
| 参数 | 类型 | 描述 |
| :--- | :--- | :---: |
| **tickCount** | *number* | - |

Returns [*RegistrationBuilder*](RegistrationBuilder.md) - RegistrationBuilder object where additional configuration methods can be called.


### **structureName**
`
structureName(structureName: string): RegistrationBuilder
`

Sets the name of the structure for a test to use. "xyz:bar" will load `/structures/xyz/bar.mcstructure` from the behavior pack stack.
#### Arguments
| 参数 | 类型 | 描述 |
| :--- | :--- | :---: |
| **structureName** | *string* | - |

Returns [*RegistrationBuilder*](RegistrationBuilder.md) - RegistrationBuilder object where additional configuration methods can be called.


### **padding**
`
padding(paddingBlocks: number): RegistrationBuilder
`

Size around the GameTest, in blocks, that should be reserved for the test when running multiple tests together.
#### Arguments
| 参数 | 类型 | 描述 |
| :--- | :--- | :---: |
| **paddingBlocks** | *number* | Size, in blocks, around the GameTest where additional GameTests should not be created. |

Returns [*RegistrationBuilder*](RegistrationBuilder.md) - RegistrationBuilder object where additional configuration methods can be called.


### **tag**
`
tag(tag: string): RegistrationBuilder
`

Adds a tag to a test. You can run all tests with a given tag with `/gametest runset <tag>`.
#### Arguments
| 参数 | 类型 | 描述 |
| :--- | :--- | :---: |
| **tag** | *string* | - |

Returns [*RegistrationBuilder*](RegistrationBuilder.md) - RegistrationBuilder object where additional configuration methods can be called.


