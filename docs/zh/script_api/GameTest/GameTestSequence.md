---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: GameTest.GameTestSequence Class
description: Contents of the GameTest.GameTestSequence class.
---
# GameTestSequence Class
::: warning 注意
这些接口是Plugin系统的一部分，目前属于实验性内容。与其他的实验性内容相同，在Minecraft的版本更新过程中，这些内容可能会发生一些功能性的变化。请自行关注Minecraft的更新日志以获取最新的接口更新。
:::

通过链式执行.then<Xxx>方法,定义一组步骤。随着时间的推移,这对GameTest设置方法和断言的"脚本"有着促进作用。


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

将给定的回调作为GameTest序列中的一个步骤运行。 回调中抛出的异常会结束序列执行。
#### 参数
| Param | Type | Description |
| :--- | :--- | :---: |
| **callback** | () => undefined | Callback function to execute. |

Returns [*GameTestSequence*](GameTestSequence.md) - 返回一个GameTestSequence对象,其中可以添加额外的.thenXyz方法步骤。


### **thenExecuteAfter**
`
thenExecuteAfter(delayTicks: number, callback: () => undefined): GameTestSequence
`

延迟后，将给定的回调作为GameTest序列中的一个步骤运行。 回调中抛出的异常会结束序列执行。
#### 参数
| Param | Type | Description |
| :--- | :--- | :---: |
| **delayTicks** | *number* | Number of ticks to wait before executing the callback. |
| **callback** | () => undefined | Callback function to execute. |

Returns [*GameTestSequence*](GameTestSequence.md) - 返回一个GameTestSequence对象，其中可以添加额外的.thenXyz方法步骤。


### **thenExecuteFor**
`
thenExecuteFor(tickCount: number, callback: () => undefined): GameTestSequence
`

将给定的回调在给定的次数中每一游戏刻运行。
#### 参数
| Param | Type | Description |
| :--- | :--- | :---: |
| **tickCount** | *number* | - |
| **callback** | () => undefined | Callback function to execute. |

Returns [*GameTestSequence*](GameTestSequence.md) - 返回一个 GameTestSequence 对象，其中可以添加额外的 .thenXyz 方法步骤。


### **thenFail**
`
thenFail(errorMessage: string): void
`

Causes the test to fail if this step in the GameTest sequence is reached.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **errorMessage** | *string* | Error message summarizing the failure condition. |



### **thenIdle**
`
thenIdle(delayTicks: number): GameTestSequence
`

Idles the GameTest sequence for the specified delayTicks.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **delayTicks** | *number* | Number of ticks to delay for this step in the GameTest sequence. |

Returns [*GameTestSequence*](GameTestSequence.md) - Returns a GameTestSequence object where additional .thenXyz method steps can be added.


### **thenSucceed**
`
thenSucceed(): void
`

Marks the GameTest a success if this step is reached in the GameTest sequence.



### **thenWait**
`
thenWait(callback: () => undefined): GameTestSequence
`

Executes the given callback every tick until it succeeds. Exceptions thrown within the callback will end sequence execution.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **callback** | () => undefined | Testing callback function to execute. Typically, this function will have .assertXyz functions within it. |

Returns [*GameTestSequence*](GameTestSequence.md) - Returns a GameTestSequence object where additional .thenXyz method steps can be added.


### **thenWaitWithDelay**
`
thenWaitWithDelay(delayTicks: number, callback: () => undefined): GameTestSequence
`

After a delay from the previous step, executes the given callback every tick until it succeeds. Exceptions thrown within the callback will end sequence execution.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **delayTicks** | *number* | Tick (after the previous step in the GameTest sequence) to run the callback at. |
| **callback** | () => undefined | Testing callback function to execute. Typically, this function will have .assertXyz functions within it. |

Returns [*GameTestSequence*](GameTestSequence.md) - Returns a GameTestSequence object where additional .thenXyz method steps can be added.


