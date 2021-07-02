module.exports = {
  title: 'Plugin系统文档',
  description: 'Minecraft Plugin 系统文档',
/*  base: 'bedrock_plugin_dev',*/
  themeConfig: {
    lastUpdated: '本文最后更新于',
    markdown: {
      lineNumbers: true
    },
    nav: [
      {
        text: '主页',
        link: '/zh/'
      },
      {
        text: '文档',
        link: '/zh/script_api/'
      },
      /*{
        text: '榫框架',
        link: 'https://baidu.com'
      },*/
      {
        text: '更多资料',
        ariaLabel: '资料库',
        items: [
          {
            text: '前置知识',
            items: [
              {
                text: 'JavaScript',
                link: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide"
              },
              {
                text: 'Json',
                link: "https://www.runoob.com/json/json-intro.html"
              }
            ],
          },
          {
            text: '友情链接',
            items: [
              {
                text: 'Minecraft基岩版开发wiki',
                link: 'https://wiki.adodoz.cn'
              }
            ]
          }
        ]
      }
    ],
    sidebar: {
      '/zh/script_api/': [
        {
          "title": "概述",
          "collapsable": false,
          "sidebarDepth": 1,
          "path": "Readme/description.md"
        },
        {
          "title": "模块",
          "collapsable": false,
          "sidebarDepth": 2,
          "children": [{
            "title": "GameTest",
            "collapsable": false,
            "path": "GameTest/GameTest.md",
            "sidebarDepth": 2,
            "children": [["GameTest/GameTestSequence.md", "GameTestSequence"],
              ["GameTest/Helper.md", "Helper"], ["GameTest/RegistrationBuilder.md", "RegistrationBuilder"],
              ["GameTest/Tags.md", "Tags"]]
          }, {
            "title": "Minecraft",
            "collapsable": false,
            "path": "Minecraft/Minecraft.md",
            "sidebarDepth": 2,
            "children": [["Minecraft/ActivatePistonEvent.md", "ActivatePistonEvent"],
              ["Minecraft/ActivatePistonEventSignal.md", "ActivatePistonEventSignal"],
              ["Minecraft/ActorAddEffectEvent.md", "ActorAddEffectEvent"],
              ["Minecraft/AddEffectEventSignal.md", "AddEffectEventSignal"], ["Minecraft/AddRider.md", "AddRider"],
              ["Minecraft/Ageable.md", "Ageable"],
              ["Minecraft/BeforeActivatePistonEvent.md", "BeforeActivatePistonEvent"],
              ["Minecraft/BeforeActivatePistonEventSignal.md", "BeforeActivatePistonEventSignal"],
              ["Minecraft/BeforeChatEvent.md", "BeforeChatEvent"],
              ["Minecraft/BeforeChatEventSignal.md", "BeforeChatEventSignal"], ["Minecraft/Block.md", "Block"],
              ["Minecraft/BlockComponent.md", "BlockComponent"],
              ["Minecraft/BlockInventoryComponent.md", "BlockInventoryComponent"],
              ["Minecraft/BlockInventoryComponentContainer.md", "BlockInventoryComponentContainer"],
              ["Minecraft/BlockLocation.md", "BlockLocation"], ["Minecraft/BlockPermutation.md", "BlockPermutation"],
              ["Minecraft/BlockPistonComponent.md", "BlockPistonComponent"],
              ["Minecraft/BlockProperties.md", "BlockProperties"], ["Minecraft/BlockType.md", "BlockType"],
              ["Minecraft/BlockTypes.md", "BlockTypes"], ["Minecraft/BoolBlockProperty.md", "BoolBlockProperty"],
              ["Minecraft/Breathable.md", "Breathable"],
              ["Minecraft/ChangeWeatherEventSignal.md", "ChangeWeatherEventSignal"],
              ["Minecraft/ChatEvent.md", "ChatEvent"], ["Minecraft/ChatEventSignal.md", "ChatEventSignal"],
              ["Minecraft/Color.md", "Color"], ["Minecraft/Commands.md", "Commands"],
              ["Minecraft/Container.md", "Container"], ["Minecraft/Dimension.md", "Dimension"],
              ["Minecraft/Effect.md", "Effect"], ["Minecraft/Effects.md", "Effects"],
              ["Minecraft/EffectType.md", "EffectType"], ["Minecraft/EmptySignal.md", "EmptySignal"],
              ["Minecraft/Entity.md", "Entity"], ["Minecraft/EntityDefinitionFeedItem.md", "EntityDefinitionFeedItem"],
              ["Minecraft/EntityEvent.md", "EntityEvent"], ["Minecraft/EntityEventSignal.md", "EntityEventSignal"],
              ["Minecraft/Events.md", "Events"], ["Minecraft/ExplosionOptions.md", "ExplosionOptions"],
              ["Minecraft/FeedItem.md", "FeedItem"], ["Minecraft/FeedItemEffect.md", "FeedItemEffect"],
              ["Minecraft/FilterGroup.md", "FilterGroup"], ["Minecraft/FlyingSpeed.md", "FlyingSpeed"],
              ["Minecraft/Healable.md", "Healable"], ["Minecraft/Health.md", "Health"],
              ["Minecraft/IntBlockProperty.md", "IntBlockProperty"], ["Minecraft/Inventory.md", "Inventory"],
              ["Minecraft/InventoryComponentContainer.md", "InventoryComponentContainer"],
              ["Minecraft/Items.md", "Items"], ["Minecraft/ItemStack.md", "ItemStack"],
              ["Minecraft/ItemType.md", "ItemType"], ["Minecraft/LavaMovement.md", "LavaMovement"],
              ["Minecraft/Leashable.md", "Leashable"], ["Minecraft/Location.md", "Location"],
              ["Minecraft/MountTaming.md", "MountTaming"],
              ["Minecraft/Movement.md", "Movement"], ["Minecraft/MovementAmphibious.md", "MovementAmphibious"],
              ["Minecraft/MovementBasic.md", "MovementBasic"], ["Minecraft/MovementFly.md", "MovementFly"],
              ["Minecraft/MovementGeneric.md", "MovementGeneric"], ["Minecraft/MovementGlide.md", "MovementGlide"],
              ["Minecraft/MovementHover.md", "MovementHover"], ["Minecraft/MovementJump.md", "MovementJump"],
              ["Minecraft/MovementSkip.md", "MovementSkip"], ["Minecraft/MovementSway.md", "MovementSway"],
              ["Minecraft/NavigationClimb.md", "NavigationClimb"], ["Minecraft/NavigationFloat.md", "NavigationFloat"],
              ["Minecraft/NavigationFly.md", "NavigationFly"], ["Minecraft/NavigationGeneric.md", "NavigationGeneric"],
              ["Minecraft/NavigationHover.md", "NavigationHover"], ["Minecraft/NavigationWalk.md", "NavigationWalk"],
              ["Minecraft/Player.md", "Player"], ["Minecraft/Rideable.md", "Rideable"], ["Minecraft/Seat.md", "Seat"],
              ["Minecraft/Strength.md", "Strength"], ["Minecraft/StringBlockProperty.md", "StringBlockProperty"],
              ["Minecraft/Tameable.md", "Tameable"], ["Minecraft/Trigger.md", "Trigger"],
              ["Minecraft/UnderwaterMovement.md", "UnderwaterMovement"],
              ["Minecraft/WeatherChangedEvent.md", "WeatherChangedEvent"], ["Minecraft/World.md", "World"]]
          }]
        }]
    }
  }
}