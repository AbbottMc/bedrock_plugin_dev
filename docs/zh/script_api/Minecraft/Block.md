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
Represents a block in a dimension. A block represents a unique X, Y, and Z within a dimension and get/sets the state of the block at that location. This type was significantly updated in version 1.17.10.21.

## Properties
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


Returns *boolean* - Whether this particular block, based on its block type, can be waterlogged.


### **getBlockData**
`
getBlockData(): BlockPermutation
`


Returns [*BlockPermutation*](BlockPermutation.md) - Additional block configuration data that describes the block.

::: warning 警告 此函数可抛出错误 :::

### **getComponent**
`
getComponent(): any
`


Returns *any*

::: warning 警告 此函数可抛出错误 :::

### **getLocation**
`
getLocation(): BlockLocation
`


Returns [*BlockLocation*](BlockLocation.md) - Coordinates of the specified block.

::: warning 警告 此函数可抛出错误 :::
### **getTags**
`
getTags(): any[]
`


Returns *any*[] - The list of tags that the block has.


### **isEmpty**
`
isEmpty(): boolean
`


Returns *boolean* - Whether this particular block is empty (air).


### **isWaterlogged**
`
isWaterlogged(): boolean
`


Returns *boolean* - Whether this particular block is in a waterlogged state.


### **hasTag**
`
hasTag(): boolean
`

Checks to see if the permutation of this block has a specific tag.

Returns *boolean* - Returns `true` if the permutation of this block has the tag, else `false`.


#### Examples
##### ***check_block_tags.js***
```javascript
import { World, BlockTypes, BlockLocation } from "Minecraft";

// Fetch the block
const block = World.getDimension("overworld").getBlock(new BlockLocation(1, 2, 3));

console.log(`Block is dirt: ${block.hasTag("dirt")}`);
console.log(`Block is wood: ${block.hasTag("wood")}`);
console.log(`Block is stone: ${block.hasTag("stone")}`);

```
### **setPermutation**
`
setPermutation(permutation: BlockPermutation): void
`

Sets the block in the dimension to the state of the permutation.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **permutation** | [*BlockPermutation*](BlockPermutation.md) | - |



#### 示例
##### ***place_bottom_stone_slab.js***
```javascript
import { World, BlockTypes, BlockProperties, BlockLocation } from "Minecraft";

// Create the permutation
let bottomStoneSlab = BlockTypes.stoneSlab.createDefaultBlockPermutation();
bottomStoneSlab.getProperty(BlockProperties.stoneSlabType).value = "stone_brick";
bottomStoneSlab.getProperty(BlockProperties.topSlotBit).value = false;

// Fetch the block
const block = World.getDimension("overworld").getBlock(new BlockLocation(1, 2, 3));

// Set the permutation
block.setPermutation(bottomStoneSlab);

```
### **setType**
`
setType(): void
`

Sets the type of block.



### **setWaterlogged**
`
setWaterlogged(setWaterlogged: boolean): void
`

Sets the waterlogged state of the block.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **setWaterlogged** | *boolean* | If set to true, and if the block can be waterlogged, then the block becomes waterlogged. |


> [!WARNING]
> This function can throw errors.

