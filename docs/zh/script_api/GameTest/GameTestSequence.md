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
Executes a set of steps defined via chained .thenXyz methods, sequentially. This facilitates a 'script' of GameTest setup methods and assertions over time.


## Methods
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

Runs the given callback as a step within a GameTest sequence. Exceptions thrown within the callback will end sequence execution.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **callback** | () => undefined | Callback function to execute. |

Returns [*GameTestSequence*](GameTestSequence.md) - Returns a GameTestSequence object where additional .thenXyz method steps can be added.


### **thenExecuteAfter**
`
thenExecuteAfter(delayTicks: number, callback: () => undefined): GameTestSequence
`

After a delay, runs the given callback as a step within a GameTest sequence. Exceptions thrown within the callback will end sequence execution.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **delayTicks** | *number* | Number of ticks to wait before executing the callback. |
| **callback** | () => undefined | Callback function to execute. |

Returns [*GameTestSequence*](GameTestSequence.md) - Returns a GameTestSequence object where additional .thenXyz method steps can be added.


### **thenExecuteFor**
`
thenExecuteFor(tickCount: number, callback: () => undefined): GameTestSequence
`

Runs the given callback every tick for the given number of ticks.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **tickCount** | *number* | - |
| **callback** | () => undefined | Callback function to execute. |

Returns [*GameTestSequence*](GameTestSequence.md) - Returns a GameTestSequence object where additional .thenXyz method steps can be added.


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


