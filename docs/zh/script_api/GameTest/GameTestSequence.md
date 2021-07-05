---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: GameTest.GameTestSequence Class
description: Contents of the GameTest.GameTestSequence class.
---
# GameTestSequence 类
::: warning 注意
这些接口是Plugin系统的一部分，目前属于实验性内容。与其他的实验性内容相同，在Minecraft的版本更新过程中，这些内容可能会发生一些功能性的变化。请自行关注Minecraft的更新日志以获取最新的接口更新。
:::

通过链式执行 `.then<Xyz>` 方法，定义一组步骤。随着时间的推移，这对GameTest设置方法和断言的"脚本"有着促进作用。


## 方法
- [thenExecute](#thenexecute)
- [thenExecuteAfter](#thenexecuteafter)
- [thenExecuteFor](#thenexecutefor)
- [thenFail](#thenfail)
- [thenIdle](#thenidle)
- [thenSucceed](#thensucceed)
- [thenWait](#thenwait)
- [thenWaitWithDelay](#thenwaitwithdelay)
  
### **thenExecute**
`
thenExecute(callback: () => undefined): GameTestSequence
`

将给定的回调函数作为GameTest序列中的一个步骤运行。回调过程中抛出的异常会结束序列执行。
#### 参数列表
| 参数 | 类型 | 描述 |
| :--- | :--- | :---: |
| **callback** | () => undefined | Callback function to execute. |

Returns [*GameTestSequence*](GameTestSequence.md) - 返回一个GameTestSequence对象,其中可以添加额外的 `.then<Xyz>` 方法步骤。


### **thenExecuteAfter**
`
thenExecuteAfter(delayTicks: number, callback: () => undefined): GameTestSequence
`

将给定的回调函数作为GameTest序列中的一个步骤延迟执行，延迟时长为指定游戏刻。回调过程中抛出的异常会结束序列执行。
#### 参数列表
| 参数 | 类型 | 描述 |
| :--- | :--- | :---: |
| **delayTicks** | *number* | Number of ticks to wait before executing the callback. |
| **callback** | () => undefined | Callback function to execute. |

Returns [*GameTestSequence*](GameTestSequence.md) - 返回一个GameTestSequence对象，其中可以添加额外的 `.then<Xyz>` 方法步骤。


### **thenExecuteFor**
`
thenExecuteFor(tickCount: number, callback: () => undefined): GameTestSequence
`

在给定的游戏刻数内持续执行指定的回调函数，执行频率为1次/游戏刻
#### 参数列表
| 参数 | 类型 | 描述 |
| :--- | :--- | :---: |
| **tickCount** | *number* | - |
| **callback** | () => undefined | 要执行的回调函数 |

返回 [*GameTestSequence*](GameTestSequence.md) - 返回一个 GameTestSequence 对象，其中可以添加额外的 `.then<Xyz>` 方法步骤。



### **thenFail**
`
thenFail(errorMessage: string): void
`

如果GameTest序列中的此步骤达成，则测试失败
#### 参数列表
| 参数 | 类型 | 描述 |
| :--- | :--- | :---: |
| **errorMessage** | *string* | Error message summarizing the failure condition. |



### **thenIdle**
`
thenIdle(delayTicks: number): GameTestSequence
`

使GameTest序列延迟执行，延迟时长为指定的游戏刻。
#### 参数列表
| 参数 | 类型 | 描述 |
| :--- | :--- | :---: |
| **delayTicks** | *number* | Number of ticks to delay for this step in the GameTest sequence. |

返回 [*GameTestSequence*](GameTestSequence.md) - 返回一个 GameTestSequence 对象，其中可以添加额外的 `.then<Xyz>` 方法步骤。


### **thenSucceed**
`
thenSucceed(): void
`

如果此步骤执行成功,就将GameTest标记为成功



### **thenWait**
`
thenWait(callback: () => undefined): GameTestSequence
`

Executes the given callback every tick until it succeeds. Exceptions thrown within the callback will end sequence execution.
#### 参数
| 参数 | 类型 | 描述 |
| :--- | :--- | :---: |
| **callback** | () => undefined | Testing callback function to execute. Typically, this function will have .assertXyz functions within it. |

Returns [*GameTestSequence*](GameTestSequence.md) - 返回一个 GameTestSequence 对象，其中可以添加额外的 .thenXyz 方法步骤。


### **thenWaitWithDelay**
`
thenWaitWithDelay(delayTicks: number, callback: () => undefined): GameTestSequence
`

After a delay from the previous step, executes the given callback every tick until it succeeds. Exceptions thrown within the callback will end sequence execution.
#### 参数
| 参数 | 类型 | 描述 |
| :--- | :--- | :---: |
| **delayTicks** | *number* | Tick (after the previous step in the GameTest sequence) to run the callback at. |
| **callback** | () => undefined | Testing callback function to execute. Typically, this function will have .assertXyz functions within it. |

Returns [*GameTestSequence*](GameTestSequence.md) - 返回一个 GameTestSequence 对象，其中可以添加额外的 `.then<Xyz>` 方法步骤。