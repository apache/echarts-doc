
{{ target: partial-series-group-id }}

## dataGroupId(string)

该系列所有数据共有的组 ID。组 ID 会被用于分类数据，并在全局过渡动画中决定如何进行合并和分裂动画。

如果你使用了[dataset](~dataset)组件来表达数据，推荐使用`encode.itemGroupID`来指定哪个维度被编码为组 ID。



{{ target: partial-data-group-id }}

#${prefix} groupId(string)

该数据项的组 ID。当全局过渡动画功能开启时，`setOption` 前后拥有相同 `groupId` 的数据项会进行动画过渡。`groupId` 未指定时，会使用数据项的 ID 作为组 ID。



{{ target: partial-data-child-group-id }}

#${prefix} childGroupId(string)

该数据项对应的子数据组 ID，用于实现多层下钻和聚合。

~[700x300](${galleryViewPath}doc-example/bar-multiple-level-drilldown&edit=1&reset=1)

通过`groupId`已经可以达到数据下钻和聚合的效果，但只支持一层的下钻和聚合。为了实现多层下钻和聚合，我们又引入了`childGroupId`。

引入`childGroupId`后，不同`option`的数据项之间就能形成逻辑上的父子关系，例如：

```text
data: [                        data: [                        data: [
  {                              {                              {
    value: 5,                      value: 3,                      value: 2,
    groupId: 'things',             groupId: 'animals',            groupId: 'dogs'
    childGroupId: 'animals'        childGroupId: 'dogs'         },
  },                             },                             {
  {                              {                                value: 7,
    value: 2,                      value: 3,                      groupId: 'dogs'
    groupId: 'things',             groupId: 'animals',          },
    childGroupId: 'fruits'         childGroupId: 'cats',        {
  },                             },                               value: 4,
  {                              {                                groupId: 'dogs'
    value: 4,                      value: 2,                    }
    groupId: 'things',             groupId: 'animals',        ]
    childGroupId: 'cars'           childGroupId: 'birds'
  }                              }
]                              ]
```

上面 3 组 data 分别来自 3 个 option ，通过`groupId`和`childGroupId`，它们之间存在了“父-子-孙”的关系。在`setOption`时，Echarts 会尝试寻找前后`option`数据项间的父子关系，若存在父子关系，则会对相关数据项进行下钻或聚合动画的过渡。

没有对应子数据组的数据项不需要指定`childGroupId`。
