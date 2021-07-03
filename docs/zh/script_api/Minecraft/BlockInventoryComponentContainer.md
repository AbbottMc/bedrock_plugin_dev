---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.BlockInventoryComponentContainer Class
description: Contents of the Minecraft.BlockInventoryComponentContainer class.
---
# BlockInventoryComponentContainer Class
::: warning 注意
这些接口是Plugin系统的一部分，目前属于实验性内容。与其他的实验性内容相同，在Minecraft的版本更新过程中，这些内容可能会发生一些功能性的变化。请自行关注Minecraft的更新日志以获取最新的接口更新。
:::
Represents the inventory of a [*Minecraft.Block*](../Minecraft/Block.md) in the world. Used with blocks like chests.

## Properties
### **size** - `number`
Represents the size of the container. For example, a standard single-block chest has a size of 27, for the 27 slots in their inventory.


### **emptySlotsCount** - `number`
Contains a count of the slots in the container that are empty.



## Methods
- [setItem](#setitem)
- [getItem](#getitem)
- [addItem](#additem)
- [transferItem](#transferitem)
- [swapItems](#swapitems)
  
### **setItem**
`
setItem(slot: number, itemStack: ItemStack): void
`

Sets an item stack within a particular slot.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **slot** | *number* | Zero-based index of the slot to set an item at. |
| **itemStack** | [*ItemStack*](ItemStack.md) | Stack of items to place within the specified slot. |


::: warning 注意
此函数可抛出错误
:::

### **getItem**
`
getItem(slot: number): ItemStack
`

Gets the item stack for the set of items at the specified slot. If the slot is empty, returns undefined. This method does not change or clear the contents of the specified slot.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **slot** | *number* | Zero-based index of the slot to retrieve items from. |

Returns [*ItemStack*](ItemStack.md)

::: warning 注意
此函数可抛出错误
:::

#### 示例
##### ***getItem.js***
```javascript
const itemStack = rightChestContainer.getItem(0);
test.assert(itemStack.id === "apple", "Expected apple");
test.assert(itemStack.amount === 10, "Expected 10 apples");

```
### **addItem**
`
addItem(itemStack: ItemStack): void
`

Adds an item to the specified container. Item will be placed in the first available empty slot. (use .setItem if you wish to set items in a particular slot.)
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **itemStack** | [*ItemStack*](ItemStack.md) | The stack of items to add. |


::: warning 注意
此函数可抛出错误
:::

### **transferItem**
`
transferItem(fromSlot: number, toSlot: number, toContainer: Container): boolean
`

Moves an item from one slot to another, potentially across containers.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **fromSlot** | *number* | - |
| **toSlot** | *number* | Zero-based index of the slot to move to. |
| **toContainer** | [*Container*](Container.md) | Target container to transfer to. Note this can be the same container as the source. |

Returns *boolean*

::: warning 注意
此函数可抛出错误
:::

#### Examples
##### ***transferItem.js***
```javascript
rightChestContainer.transferItem(0, 4, chestCartContainer); // transfer the apple from the right chest to a chest cart

```
### **swapItems**
`
swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean
`

Swaps items between two different slots within containers.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **slot** | *number* | Zero-based index of the slot to swap from this container. |
| **otherSlot** | *number* | Zero-based index of the slot to swap with. |
| **otherContainer** | [*Container*](Container.md) | Target container to swap with. Note this can be the same container as this source. |

Returns *boolean*

::: warning 注意
此函数可抛出错误
:::

#### 示例
##### ***swapItems.js***
```javascript
rightChestContainer.swapItems(1, 0, leftChestContainer); // swap the cake and emerald

```
