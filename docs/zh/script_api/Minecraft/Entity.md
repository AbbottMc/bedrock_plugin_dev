---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.Entity Class
description: Contents of the Minecraft.Entity class.
---
# Entity Class

::: warning 注意
这些接口是Plugin系统的一部分，目前属于实验性内容。与其他的实验性内容相同，在Minecraft的版本更新过程中，这些内容可能会发生一些功能性的变化。请自行关注Minecraft的更新日志以获取最新的接口更新。
:::

涵盖世界中实体的状态（生物，玩家，移动的矿车等）

## 属性

### **id** - `string`

### **location** - `Location`

### **velocity** - `Location`

### **nameTag** - `string`

### **isSneaking** - `boolean`

## 方法

- [hasComponent](#hascomponent)
- [getComponent](#getcomponent)
- [getComponents](#getcomponents)
- [kill](#kill)
- [getEffect](#geteffect)
- [addEffect](#addeffect)
- [triggerEvent](#triggerevent)

### **hasComponent**

`hasComponent(componentId: string): boolean`

如果实体内指定组件存在，则返回true

#### 参数列表

| 参数                  | 类型       |                                               描述                                               |
| :-------------------- | :--------- | :-----------------------------------------------------------------------------------------------: |
| **componentId** | *string* | 组件的ID，如果未指定组件的命名空间，则假定附有minecraft:前缀，如果没有找到指定组件，返回undefined |

返回 *boolean*

### **getComponent**

`getComponent(componentId: string): any`

获取实体的某个具有额外功能的组件

#### 参数列表

| 参数                  | 类型       |                                               描述                                               |
| :-------------------- | :--------- | :-----------------------------------------------------------------------------------------------: |
| **componentId** | *string* | 组件的ID，如果未指定组件的命名空间，则假定附有minecraft:前缀，如果没有找到指定组件，返回undefined |

返回 *any*

### **getComponents**

`getComponents(): any[]`

返回实体内所有支持此API的组件

返回 *any*[]

### **kill**

`kill(): void`

杀死实体。实体仍会掉落战利品/掉落物

:::warning 注意
此函数可能会抛出错误

:::

### **getEffect**

`getEffect(effectType: EffectType): Effect`

返回EffectType类型的实体效果，如果没有则返回undefined

#### 参数列表

| 参数                 | 类型                         | 描述 |
| :------------------- | :--------------------------- | :--: |
| **effectType** | [*EffectType*](EffectType.md) |  -  |

返回 [*Effect*](Effect.md) - Effect 对象对应具体的效果，或者表示不存在的undefined

:::warning 注意
此函数可能会抛出错误

:::

### **addEffect**

`addEffect(effectType: EffectType, duration: number, amplifier: number): void`

对实体添加例如中毒...的效果

#### 参数列表

| 参数                 | 类型                         |         描述         |
| :------------------- | :--------------------------- | :------------------: |
| **effectType** | [*EffectType*](EffectType.md) | 对实体添加的效果类型 |
| **duration**   | *number*                   |       持续时间       |
| **amplifier**  | *number*                   |    持续等级/强度    |

:::warning 注意
此函数可能会抛出错误

:::

#### 实例

##### ***addEffect.js***

```javascript
const villagerId = "minecraft:villager_v2<minecraft:ageable_grow_up>";
const villagerLoc = new BlockLocation(1, 2, 1);
const villager = test.spawn(villagerId, villagerLoc);
const duration = 20;

villager.addEffect(Effects.poison, duration, 1);
//此处代码未订阅至世界事件，请自行添加
```

### **triggerEvent**

`triggerEvent(eventName: string): void`

触发实体类事件，对于每个实体，在它们的关键实体行为中都定义了许多事件，例如苦力怕有minecraft:start_exploding类型的事件

#### 参数列表

| 参数                | 类型       |                              描述                              |
| :------------------ | :--------- | :------------------------------------------------------------: |
| **eventName** | *string* | 要触发的实体事件名称，如未定义命名空间，则假定有minecraft:前缀 |

:::warning 注意
此函数可能会抛出错误

:::
