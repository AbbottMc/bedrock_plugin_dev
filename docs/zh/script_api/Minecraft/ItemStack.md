---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.ItemStack Class
description: Contents of the Minecraft.ItemStack class.
---
# ItemStack Class
::: warning 注意
这些接口是Plugin系统的一部分，目前属于实验性内容。与其他的实验性内容相同，在Minecraft的版本更新过程中，这些内容可能会发生一些功能性的变化。请自行关注Minecraft的更新日志以获取最新的接口更新。
:::
Defines a collection of items.

## Properties
### **id** - `string`
Identifier of the type of items for the stack. If a namespace is not specified, 'minecraft:' is assumed. Examples include 'wheat' or 'apple'.


### **amount** - `number`
Number of the items in the stack. Valid values range between 0 and 64.


### **data** - `number`
A data value used to configure alternate states of the item.



## Methods
- [constructor](#constructor)
  
### **constructor**
`
new ItemStack(itemType: ItemType, amount: number, data: number)
`

#### Arguments
| 参数 | 类型 | 描述 |
| :--- | :--- | :---: |
| **itemType** | [*ItemType*](ItemType.md) | - |
| **amount** | *number* | - |
| **data** | *number* | - |

Returns [*ItemStack*](ItemStack.md)


