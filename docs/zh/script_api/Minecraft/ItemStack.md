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
<!-- Defines a collection of items. -->
定义了物品集合

## 属性
### **id** - `string`
<!-- Identifier of the type of items for the stack. If a namespace is not specified, 'minecraft:' is assumed. Examples include 'wheat' or 'apple'. -->
这个物品的标识符。如果命名空间没有被指定的话，会自动设置为`minecraft:`。例如'wheat'、'apple'

### **amount** - `number`
<!-- Number of the items in the stack. Valid values range between 0 and 64. -->
这个物品的数量。只能在[0,64]范围内


### **data** - `number`
<!-- A data value used to configure alternate states of the item. -->
这个物品的数据值

## 方法
- [构造函数](#constructor)
  
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

返回 [*ItemStack*](ItemStack.md)


