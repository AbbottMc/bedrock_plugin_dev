---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.BlockPermutation Class
description: Contents of the Minecraft.BlockPermutation class.
---
# BlockPermutation 类

::: warning 注意
这些接口是Plugin系统的一部分，目前属于实验性内容。与其他的实验性内容相同，在Minecraft的版本更新过程中，这些内容可能会发生一些功能性的变化。请自行关注Minecraft的更新日志以获取最新的接口更新。
:::

包含[Minecraft.BlockType](../Minecraft/BlockType.md)类的集合与属性（通常被称方块状态），用于描述一个方块(但不属于特定的[Minecraft.Block](../Minecraft/Block.md)类)。此类在1.17.10.21出现

## 方法

- [clone](#clone)
- [getAllProperties](#getallproperties)
- [getProperty](#getproperty)
- [getTags](#gettags)
- [getType](#gettype)
- [hasTag](#hastag)

### **clone**

`clone(): BlockPermutation`

创建这个置换的拷贝

返回 [*BlockPermutation*](BlockPermutation.md) - 拷贝副本

### **getAllProperties**

`getAllProperties(): any[]`

返回 *any*[] - 返回置换里所有属性为一个列表

### **getProperty**

`getProperty(propertyName: string): any`

获取置换的属性

#### 参数列表

| 参数                   | 类型       | 描述 |
| :--------------------- | :--------- | :--: |
| **propertyName** | *string* |  -  |

返回 *any* - 返回置换中的属性, 没有则返回 `null`.

::: warning 注意
此函数可抛出错误
:::

#### 示例

##### ***place_bottom_stone_slab.js***

```javascript
import { World, BlockTypes, BlockProperties, BlockLocation } from "Minecraft";

// 创建置换
let bottomStoneSlab = BlockTypes.stoneSlab.createDefaultBlockPermutation();
bottomStoneSlab.getProperty(BlockProperties.stoneSlabType).value = "stone_brick";
bottomStoneSlab.getProperty(BlockProperties.topSlotBit).value = false;

// 获取方块
const block = World.getDimension("overworld").getBlock(new BlockLocation(1, 2, 3));

// 设置置换
block.setPermutation(bottomStoneSlab);

```

### **getTags**

`getTags(): any[]`

创建置换的拷贝

返回 *any*[]

### **getType**

`getType(): BlockType`

返回 [*BlockType*](BlockType.md) - 置换所含有的[*Minecraft.BlockType*](../Minecraft/BlockType.md)

::: warning 注意
此函数可抛出错误
:::

### **hasTag**

`hasTag(tag: string): boolean`

查询置换是否具有标签

#### 参数列表

| 参数          | 类型       | 描述 |
| :------------ | :--------- | :--: |
| **tag** | *string* |  -  |

返回*boolean* - 如果置换含有tag,返回 `true` ,否则返回 `false`

#### 示例

##### ***check_block_tags.js***

```javascript
import { World, BlockTypes, BlockLocation } from "Minecraft";

// 获取方块
const block = World.getDimension("overworld").getBlock(new BlockLocation(1, 2, 3));
const blockPerm = block.getPermutation();

console.log(`Block is dirt: ${blockPerm.hasTag("dirt")}`);
console.log(`Block is wood: ${blockPerm.hasTag("wood")}`);
console.log(`Block is stone: ${blockPerm.hasTag("stone")}`);

```
