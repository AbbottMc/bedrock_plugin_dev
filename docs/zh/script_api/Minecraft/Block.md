---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.Block Class
description: Contents of the Minecraft.Block class.
---
# Block Class
::: warning 注意
这些接口是Plugin系统的一部分，目前属于实验性内容。与其他的实验性内容相同，在Minecraft的版本更新过程中，这些内容可能会发生一些功能性的变化。请自行关注Minecraft的更新日志以获取最新的接口更新。
:::

表示维度中的方块。方块代表着唯一的X、Y和Z，并获取/设置该位置方块的状态。此类在版本1.17.10.21中有较大改动

## 属性
### **x** - `number`



### **y** - `number`



### **z** - `number`




## 方法
- [canBeWaterlogged](#canbewaterlogged)
- [getBlockData](#getblockdata)
- [getComponent](#getcomponent)
- [getLocation](#getlocation)
- [getTags](#gettags)
- [isEmpty](#isempty)
- [isWaterlogged](#iswaterlogged)
- [hasTag](#hastag)
- [setPermutation](#setpermutation)
- [setType](#settype)
- [setWaterlogged](#setwaterlogged)
  
### **canBeWaterlogged**
`
canBeWaterlogged(): boolean
`
返回一个*boolean*，表示该方块是否可含水
.


### **getBlockData**
`
getBlockData(): BlockPermutation
`


返回 [*BlockPermutation*](BlockPermutation.md) -. 方块的附加数据

::: warning 注意
此函数可抛出错误
:::

### **getComponent**
`
getComponent(): any
`


返回 *any*

::: warning 注意
此函数可抛出错误
:::

### **getLocation**
`
getLocation(): BlockLocation
`


返回 [*BlockLocation*](BlockLocation.md) - 指定方块的坐标

::: warning 注意
此函数可抛出错误
:::
### **getTags**
`
getTags(): any[]
`


返回 *any*[] - 此方块拥有的所有标签


### **isEmpty**
`
isEmpty(): boolean
`


返回 *boolean* - 该方块是否为空（空气）


### **isWaterlogged**
`
isWaterlogged(): boolean
`


返回 *boolean* - 此方块是否处于含水状态


### **hasTag**
`
hasTag(): boolean
`

检测该方块是否含有特殊标签

返回 *boolean* - 如果此方块含有特殊标签，返回true，否则返回false


#### 例
##### ***check_block_tags.js***
```javascript
import { World, BlockTypes, BlockLocation } from "Minecraft";

// 寻找一个方块
const block = World.getDimension("overworld").getBlock(new BlockLocation(1, 2, 3));

console.log(`Block is dirt: ${block.hasTag("dirt")}`);
console.log(`Block is wood: ${block.hasTag("wood")}`);
console.log(`Block is stone: ${block.hasTag("stone")}`);

```
### **setPermutation**
>此方法的翻译有待商讨
`
setPermutation(permutation: BlockPermutation): void
`
设置维度中方块的类型
.
#### 实参列表
| 参数| 类型 | 描述 |
| :--- | :--- | :---: |
| **permutation** | [*BlockPermutation*](BlockPermutation.md) | - |



#### 示例
##### ***place_bottom_stone_slab.js***
```javascript
import { World, BlockTypes, BlockProperties, BlockLocation } from "Minecraft";

// 创建方块类型
let bottomStoneSlab = BlockTypes.stoneSlab.createDefaultBlockPermutation();
bottomStoneSlab.getProperty(BlockProperties.stoneSlabType).value = "stone_brick";
bottomStoneSlab.getProperty(BlockProperties.topSlotBit).value = false;

// 寻找方块
const block = World.getDimension("overworld").getBlock(new BlockLocation(1, 2, 3));

// 设置方块类型
block.setPermutation(bottomStoneSlab);

```
### **setType**
`
setType(): void
`

设置方块类型



### **setWaterlogged**
`
setWaterlogged(setWaterlogged: boolean): void
`

设置方块的含水状态
#### 实参列表
| 参数 | 类型 | 描述 |
| :--- | :--- | :---: |
| **setWaterlogged** | *boolean* |如果设置为true，并且方块可含水，那么方块将会被设置位含水状态 |


::: warning 注意
此函数可抛出错误
:::

