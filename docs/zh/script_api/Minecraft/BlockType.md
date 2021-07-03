---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.BlockType Class
description: Contents of the Minecraft.BlockType class.
---
# BlockType Class
::: warning 注意
这些接口是Plugin系统的一部分，目前属于实验性内容。与其他的实验性内容相同，在Minecraft的版本更新过程中，这些内容可能会发生一些功能性的变化。请自行关注Minecraft的更新日志以获取最新的接口更新。
:::
The type (or template) of a block. Does not contain permutation data (state) other than the type of block it represents. This type was introduced as of version 1.17.10.21.


## Methods
- [getName](#getname)
- [canBeWaterlogged](#canbewaterlogged)
- [createDefaultBlockPermutation](#createdefaultblockpermutation)
  
### **getName**
`
getName(): string
`

Name of the block type.

Returns *string* - Block type name - for example, `minecraft:acacia_stairs`.


### **canBeWaterlogged**
`
canBeWaterlogged(): boolean
`


Returns *boolean*


### **createDefaultBlockPermutation**
`
createDefaultBlockPermutation(): BlockPermutation
`

Creates the default [*Minecraft.BlockPermutation*](../Minecraft/BlockPermutation.md) for this type which uses the default values for all properties.

Returns [*BlockPermutation*](BlockPermutation.md) - Returns created permutation.

> [!WARNING]
> This function can throw errors.

#### Examples
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
