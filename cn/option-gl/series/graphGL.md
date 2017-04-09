{{ target: series-graphGL }}

# series.graphGL(Object)

使用 WebGL 绘制的关系图，支持大规模的网络/关系数据的布局和绘制。

## type(string) = 'graphGL'

{{ use: partial-series-name() }}

## layout(string) = 'forceAtlas2'

布局的算法，支持使用 gephi 的 [forceAtlas2](https://github.com/gephi/gephi/wiki/Force-Atlas-2) 算法布局。

## forceAtlas2(Object)

[forceAtlas2](https://github.com/gephi/gephi/wiki/Force-Atlas-2) 布局算法。

该算法对大规模的网络数据有着高效的布局效率和稳定的布局结果。

支持通过 [forceAtlas2.GPU](~series-graphGL.forceAtlas2.GPU) 配置为 GPU 还是 CPU 布局。

CPU 实现的优势是兼容性好，而 GPU 实现在高端显卡中有着数十倍甚至上百倍的性能优势。

下面是在 GTX1070 和 i7 4GHz 的电脑中对一个 2w 个节点，近 5w 条边的关系图一次布局的迭代的性能对比。

![400xauto](~gpu-layout-perf.png)

### GPU(boolean) = true

是否启用 GPU 布局。

### steps(number) = 1

一次更新的迭代次数。

### stopThreshold(number) = 1

### barnesHutOptimize(boolean)

### repulsionByDegree(number) = true

### linLogMode(boolean) = false

### gravity(number) = 1.0

### gravityCenter(Array)

### scaling(number)

### edgeWeightInfluence(number)

### edgeWeight(Array|number) = [1, 4]

### nodeWeight(Array|number) = [1, 4]

### preventOverlap(boolean) = false

{{ use: partial-zlevel(defaultZLevel=10) }}