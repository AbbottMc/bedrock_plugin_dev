---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify 描述s, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.Player Class
描述: Contents of the Minecraft.Player class.
---
# Player Class
::: warning 注意
这些接口是Plugin系统的一部分，目前属于实验性内容。与其他的实验性内容相同，在Minecraft的版本更新过程中，这些内容可能会发生一些功能性的变化。请自行关注Minecraft的更新日志以获取最新的接口更新。
:::

## 属性
### **id** - `string`
玩家的ID。


### **location** - `Location`
玩家目前的位置。


### **velocity** - `Location`
玩家目前的加速度。


### **nameTag** - `string`
玩家的名称标签。


### **isSneaking** - `boolean`
判断玩家是否处于蹲下的状态，如果是，返回true。


### **name** - `string`
Name of the player.



## 方法
- [hasComponent](#hascomponent)
- [getComponent](#getcomponent)
- [getComponents](#getcomponents)
- [kill](#kill)
- [getEffect](#geteffect)
- [addEffect](#addeffect)
- [triggerEvent](#triggerevent)
  
### **hasComponent**
`
hasComponent(componentId: string): boolean
`

#### 实参列表
| 参数 | 类型 | 描述 |
| :--- | :--- | :---: |
| **componentId** | *string* | - |

返回 *boolean*布尔值


### **getComponent**
`
getComponent(componentId: string): any
`

#### 实参列表
| 参数 | Type | 描述 |
| :--- | :--- | :---: |
| **componentId** | *string* | - |

返回 *any*


### **getComponents**
`
getComponents(): any[]
`

返回 *any*[]


### **kill**
`
kill(): void
`



> [!WARNING]
> 这个功能可能会抛出错误

### **getEffect**
`
getEffect(effectType: EffectType): Effect
`

获取玩家附着的效果

#### 实参列表
| 参数 | Type | 描述 |
| :--- | :--- | :---: |
| **effectType** | [*EffectType*](EffectType.md) | - |

Returns [*Effect*](Effect.md)

> [!WARNING]
> 这个功能可能会抛出错误

### **addEffect**
`
addEffect(effectType: EffectType, duration: number, amplifier: number): void
`

为玩家添加效果，如中毒(poison)，凋零(wither)，瞬间伤害(InstantDamage)。
#### 实参列表
| 参数 | 类型 | 描述 |
| :--- | :--- | :---: |
| **effectType** | [*EffectType*](EffectType.md) | 对实体添加的效果类型|
| **duration** | *number* | 效果的持续时间 |
| **amplifier** | *number* | 效果的强度等级 |


> [!WARNING]
> 这个功能可能会抛出错误

### **triggerEvent**
`
triggerEvent(eventName: string): void
`

触发实体类事件。对于每个实体，都有对应键值的定义，例如苦力怕有minecraft:start_exploding类型的事件
#### 实参列表
| 参数 | 类型 | 描述 |
| :--- | :--- | :---: |
| **eventName** | *string* | 要触发的实体类事件的名字。如果没有特别声明命名空间，则假定有minecraft:前缀 |


> [!WARNING]
> 这个功能可能会抛出错误

