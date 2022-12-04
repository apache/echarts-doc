
{{ target: series-graph }}

# series.graph(Object)

**关系图**

用于展现节点以及节点之间的关系数据。

**示例：**

~[600x400](${galleryViewPath}graph&reset=1&edit=1)

<ExampleBaseOption name="graph" title="复杂关系图" title="Complex Graph">
const option = {"title":{"text":"Les Miserables","subtext":"Default layout","top":"bottom","left":"right"},"tooltip":{},"legend":[{"data":["类目0","类目1","类目2","类目3","类目4","类目5","类目6","类目7","类目8"]}],"animationDuration":1500,"animationEasingUpdate":"quinticInOut","series":[{"name":"Les Miserables","type":"graph","layout":"none","data":[{"id":"0","name":"Myriel","symbolSize":19.12381,"x":-266.82776,"y":299.6904,"value":28.685715,"category":0},{"id":"1","name":"Napoleon","symbolSize":2.6666666666666665,"x":-418.08344,"y":446.8853,"value":4,"category":0},{"id":"2","name":"MlleBaptistine","symbolSize":6.323809333333333,"x":-212.76357,"y":245.29176,"value":9.485714,"category":1},{"id":"3","name":"MmeMagloire","symbolSize":6.323809333333333,"x":-242.82404,"y":235.26283,"value":9.485714,"category":1},{"id":"4","name":"CountessDeLo","symbolSize":2.6666666666666665,"x":-379.30386,"y":429.06424,"value":4,"category":0},{"id":"5","name":"Geborand","symbolSize":2.6666666666666665,"x":-417.26337,"y":406.03506,"value":4,"category":0},{"id":"6","name":"Champtercier","symbolSize":2.6666666666666665,"x":-332.6012,"y":485.16974,"value":4,"category":0},{"id":"7","name":"Cravatte","symbolSize":2.6666666666666665,"x":-382.69568,"y":475.09113,"value":4,"category":0},{"id":"8","name":"Count","symbolSize":2.6666666666666665,"x":-320.384,"y":387.17325,"value":4,"category":0},{"id":"9","name":"OldMan","symbolSize":2.6666666666666665,"x":-344.39832,"y":451.16772,"value":4,"category":0},{"id":"10","name":"Labarre","symbolSize":2.6666666666666665,"x":-89.34107,"y":234.56128,"value":4,"category":1},{"id":"11","name":"Valjean","symbolSize":66.66666666666667,"x":-87.93029,"y":-6.8120565,"value":100,"category":1},{"id":"12","name":"Marguerite","symbolSize":4.495239333333333,"x":-339.77908,"y":-184.69139,"value":6.742859,"category":1},{"id":"13","name":"MmeDeR","symbolSize":2.6666666666666665,"x":-194.31313,"y":178.55301,"value":4,"category":1},{"id":"14","name":"Isabeau","symbolSize":2.6666666666666665,"x":-158.05168,"y":201.99768,"value":4,"category":1},{"id":"15","name":"Gervais","symbolSize":2.6666666666666665,"x":-127.701546,"y":242.55057,"value":4,"category":1},{"id":"16","name":"Tholomyes","symbolSize":17.295237333333333,"x":-385.2226,"y":-393.5572,"value":25.942856,"category":2},{"id":"17","name":"Listolier","symbolSize":13.638097333333334,"x":-516.55884,"y":-393.98975,"value":20.457146,"category":2},{"id":"18","name":"Fameuil","symbolSize":13.638097333333334,"x":-464.79382,"y":-493.57944,"value":20.457146,"category":2},{"id":"19","name":"Blacheville","symbolSize":13.638097333333334,"x":-515.1624,"y":-456.9891,"value":20.457146,"category":2},{"id":"20","name":"Favourite","symbolSize":13.638097333333334,"x":-408.12122,"y":-464.5048,"value":20.457146,"category":2},{"id":"21","name":"Dahlia","symbolSize":13.638097333333334,"x":-456.44113,"y":-425.13303,"value":20.457146,"category":2},{"id":"22","name":"Zephine","symbolSize":13.638097333333334,"x":-459.1107,"y":-362.5133,"value":20.457146,"category":2},{"id":"23","name":"Fantine","symbolSize":28.266666666666666,"x":-313.42786,"y":-289.44803,"value":42.4,"category":2},{"id":"24","name":"MmeThenardier","symbolSize":20.95238266666667,"x":4.6313396,"y":-273.8517,"value":31.428574,"category":7},{"id":"25","name":"Thenardier","symbolSize":30.095235333333335,"x":82.80825,"y":-203.1144,"value":45.142853,"category":7},{"id":"26","name":"Cosette","symbolSize":20.95238266666667,"x":78.64646,"y":-31.512747,"value":31.428574,"category":6},{"id":"27","name":"Javert","symbolSize":31.923806666666668,"x":-81.46074,"y":-204.20204,"value":47.88571,"category":7},{"id":"28","name":"Fauchelevent","symbolSize":8.152382000000001,"x":-225.73984,"y":82.41631,"value":12.228573,"category":4},{"id":"29","name":"Bamatabois","symbolSize":15.466666666666667,"x":-385.6842,"y":-20.206686,"value":23.2,"category":3},{"id":"30","name":"Perpetue","symbolSize":4.495239333333333,"x":-403.92447,"y":-197.69823,"value":6.742859,"category":2},{"id":"31","name":"Simplice","symbolSize":8.152382000000001,"x":-281.4253,"y":-158.45137,"value":12.228573,"category":2},{"id":"32","name":"Scaufflaire","symbolSize":2.6666666666666665,"x":-122.41348,"y":210.37503,"value":4,"category":1},{"id":"33","name":"Woman1","symbolSize":4.495239333333333,"x":-234.6001,"y":-113.15067,"value":6.742859,"category":1},{"id":"34","name":"Judge","symbolSize":11.809524666666666,"x":-387.84915,"y":58.7059,"value":17.714287,"category":3},{"id":"35","name":"Champmathieu","symbolSize":11.809524666666666,"x":-338.2307,"y":87.48405,"value":17.714287,"category":3},{"id":"36","name":"Brevet","symbolSize":11.809524666666666,"x":-453.26874,"y":58.94648,"value":17.714287,"category":3},{"id":"37","name":"Chenildieu","symbolSize":11.809524666666666,"x":-386.44904,"y":140.05937,"value":17.714287,"category":3},{"id":"38","name":"Cochepaille","symbolSize":11.809524666666666,"x":-446.7876,"y":123.38005,"value":17.714287,"category":3},{"id":"39","name":"Pontmercy","symbolSize":6.323809333333333,"x":336.49738,"y":-269.55914,"value":9.485714,"category":6},{"id":"40","name":"Boulatruelle","symbolSize":2.6666666666666665,"x":29.187843,"y":-460.13132,"value":4,"category":7},{"id":"41","name":"Eponine","symbolSize":20.95238266666667,"x":238.36697,"y":-210.00926,"value":31.428574,"category":7},{"id":"42","name":"Anzelma","symbolSize":6.323809333333333,"x":189.69513,"y":-346.50662,"value":9.485714,"category":7},{"id":"43","name":"Woman2","symbolSize":6.323809333333333,"x":-187.00418,"y":-145.02663,"value":9.485714,"category":6},{"id":"44","name":"MotherInnocent","symbolSize":4.495239333333333,"x":-252.99521,"y":129.87549,"value":6.742859,"category":4},{"id":"45","name":"Gribier","symbolSize":2.6666666666666665,"x":-296.07935,"y":163.11964,"value":4,"category":4},{"id":"46","name":"Jondrette","symbolSize":2.6666666666666665,"x":550.3201,"y":522.4031,"value":4,"category":5},{"id":"47","name":"MmeBurgon","symbolSize":4.495239333333333,"x":488.13535,"y":356.8573,"value":6.742859,"category":5},{"id":"48","name":"Gavroche","symbolSize":41.06667066666667,"x":387.89572,"y":110.462326,"value":61.600006,"category":8},{"id":"49","name":"Gillenormand","symbolSize":13.638097333333334,"x":126.4831,"y":68.10622,"value":20.457146,"category":6},{"id":"50","name":"Magnon","symbolSize":4.495239333333333,"x":127.07365,"y":-113.05923,"value":6.742859,"category":6},{"id":"51","name":"MlleGillenormand","symbolSize":13.638097333333334,"x":162.63559,"y":117.6565,"value":20.457146,"category":6},{"id":"52","name":"MmePontmercy","symbolSize":4.495239333333333,"x":353.66415,"y":-205.89165,"value":6.742859,"category":6},{"id":"53","name":"MlleVaubois","symbolSize":2.6666666666666665,"x":165.43939,"y":339.7736,"value":4,"category":6},{"id":"54","name":"LtGillenormand","symbolSize":8.152382000000001,"x":137.69348,"y":196.1069,"value":12.228573,"category":6},{"id":"55","name":"Marius","symbolSize":35.58095333333333,"x":206.44687,"y":-13.805411,"value":53.37143,"category":6},{"id":"56","name":"BaronessT","symbolSize":4.495239333333333,"x":194.82993,"y":224.78036,"value":6.742859,"category":6},{"id":"57","name":"Mabeuf","symbolSize":20.95238266666667,"x":597.6618,"y":135.18481,"value":31.428574,"category":8},{"id":"58","name":"Enjolras","symbolSize":28.266666666666666,"x":355.78366,"y":-74.882454,"value":42.4,"category":8},{"id":"59","name":"Combeferre","symbolSize":20.95238266666667,"x":515.2961,"y":-46.167564,"value":31.428574,"category":8},{"id":"60","name":"Prouvaire","symbolSize":17.295237333333333,"x":614.29285,"y":-69.3104,"value":25.942856,"category":8},{"id":"61","name":"Feuilly","symbolSize":20.95238266666667,"x":550.1917,"y":-128.17537,"value":31.428574,"category":8},{"id":"62","name":"Courfeyrac","symbolSize":24.609526666666667,"x":436.17184,"y":-12.7286825,"value":36.91429,"category":8},{"id":"63","name":"Bahorel","symbolSize":22.780953333333333,"x":602.55225,"y":16.421427,"value":34.17143,"category":8},{"id":"64","name":"Bossuet","symbolSize":24.609526666666667,"x":455.81955,"y":-115.45826,"value":36.91429,"category":8},{"id":"65","name":"Joly","symbolSize":22.780953333333333,"x":516.40784,"y":47.242233,"value":34.17143,"category":8},{"id":"66","name":"Grantaire","symbolSize":19.12381,"x":646.4313,"y":-151.06331,"value":28.685715,"category":8},{"id":"67","name":"MotherPlutarch","symbolSize":2.6666666666666665,"x":668.9568,"y":204.65488,"value":4,"category":8},{"id":"68","name":"Gueulemer","symbolSize":19.12381,"x":78.4799,"y":-347.15146,"value":28.685715,"category":7},{"id":"69","name":"Babet","symbolSize":19.12381,"x":150.35959,"y":-298.50797,"value":28.685715,"category":7},{"id":"70","name":"Claquesous","symbolSize":19.12381,"x":137.3717,"y":-410.2809,"value":28.685715,"category":7},{"id":"71","name":"Montparnasse","symbolSize":17.295237333333333,"x":234.87747,"y":-400.85983,"value":25.942856,"category":7},{"id":"72","name":"Toussaint","symbolSize":6.323809333333333,"x":40.942253,"y":113.78272,"value":9.485714,"category":1},{"id":"73","name":"Child1","symbolSize":4.495239333333333,"x":437.939,"y":291.58234,"value":6.742859,"category":8},{"id":"74","name":"Child2","symbolSize":4.495239333333333,"x":466.04922,"y":283.3606,"value":6.742859,"category":8},{"id":"75","name":"Brujon","symbolSize":13.638097333333334,"x":238.79364,"y":-314.06345,"value":20.457146,"category":7},{"id":"76","name":"MmeHucheloup","symbolSize":13.638097333333334,"x":712.18353,"y":4.8131495,"value":20.457146,"category":8}],"links":[{"id":"0","source":"1","target":"0"},{"id":"1","source":"2","target":"0"},{"id":"2","source":"3","target":"0"},{"id":"3","source":"3","target":"2"},{"id":"4","source":"4","target":"0"},{"id":"5","source":"5","target":"0"},{"id":"6","source":"6","target":"0"},{"id":"7","source":"7","target":"0"},{"id":"8","source":"8","target":"0"},{"id":"9","source":"9","target":"0"},{"id":"13","source":"11","target":"0"},{"id":null,"source":"11","target":"2"},{"id":"11","source":"11","target":"3"},{"id":"10","source":"11","target":"10"},{"id":"14","source":"12","target":"11"},{"id":"15","source":"13","target":"11"},{"id":"16","source":"14","target":"11"},{"id":"17","source":"15","target":"11"},{"id":"18","source":"17","target":"16"},{"id":"19","source":"18","target":"16"},{"id":"20","source":"18","target":"17"},{"id":"21","source":"19","target":"16"},{"id":"22","source":"19","target":"17"},{"id":"23","source":"19","target":"18"},{"id":"24","source":"20","target":"16"},{"id":"25","source":"20","target":"17"},{"id":"26","source":"20","target":"18"},{"id":"27","source":"20","target":"19"},{"id":"28","source":"21","target":"16"},{"id":"29","source":"21","target":"17"},{"id":"30","source":"21","target":"18"},{"id":"31","source":"21","target":"19"},{"id":"32","source":"21","target":"20"},{"id":"33","source":"22","target":"16"},{"id":"34","source":"22","target":"17"},{"id":"35","source":"22","target":"18"},{"id":"36","source":"22","target":"19"},{"id":"37","source":"22","target":"20"},{"id":"38","source":"22","target":"21"},{"id":"47","source":"23","target":"11"},{"id":"46","source":"23","target":"12"},{"id":"39","source":"23","target":"16"},{"id":"40","source":"23","target":"17"},{"id":"41","source":"23","target":"18"},{"id":"42","source":"23","target":"19"},{"id":"43","source":"23","target":"20"},{"id":"44","source":"23","target":"21"},{"id":"45","source":"23","target":"22"},{"id":null,"source":"24","target":"11"},{"id":"48","source":"24","target":"23"},{"id":"52","source":"25","target":"11"},{"id":"51","source":"25","target":"23"},{"id":"50","source":"25","target":"24"},{"id":null,"source":"26","target":"11"},{"id":null,"source":"26","target":"16"},{"id":"53","source":"26","target":"24"},{"id":"56","source":"26","target":"25"},{"id":"57","source":"27","target":"11"},{"id":"58","source":"27","target":"23"},{"id":null,"source":"27","target":"24"},{"id":"59","source":"27","target":"25"},{"id":"61","source":"27","target":"26"},{"id":"62","source":"28","target":"11"},{"id":"63","source":"28","target":"27"},{"id":"66","source":"29","target":"11"},{"id":"64","source":"29","target":"23"},{"id":"65","source":"29","target":"27"},{"id":"67","source":"30","target":"23"},{"id":null,"source":"31","target":"11"},{"id":null,"source":"31","target":"23"},{"id":null,"source":"31","target":"27"},{"id":"68","source":"31","target":"30"},{"id":"72","source":"32","target":"11"},{"id":"73","source":"33","target":"11"},{"id":"74","source":"33","target":"27"},{"id":"75","source":"34","target":"11"},{"id":"76","source":"34","target":"29"},{"id":"77","source":"35","target":"11"},{"id":null,"source":"35","target":"29"},{"id":"78","source":"35","target":"34"},{"id":"82","source":"36","target":"11"},{"id":"83","source":"36","target":"29"},{"id":"80","source":"36","target":"34"},{"id":"81","source":"36","target":"35"},{"id":"87","source":"37","target":"11"},{"id":"88","source":"37","target":"29"},{"id":"84","source":"37","target":"34"},{"id":"85","source":"37","target":"35"},{"id":"86","source":"37","target":"36"},{"id":"93","source":"38","target":"11"},{"id":"94","source":"38","target":"29"},{"id":"89","source":"38","target":"34"},{"id":"90","source":"38","target":"35"},{"id":"91","source":"38","target":"36"},{"id":"92","source":"38","target":"37"},{"id":"95","source":"39","target":"25"},{"id":"96","source":"40","target":"25"},{"id":"97","source":"41","target":"24"},{"id":"98","source":"41","target":"25"},{"id":"101","source":"42","target":"24"},{"id":"100","source":"42","target":"25"},{"id":"99","source":"42","target":"41"},{"id":"102","source":"43","target":"11"},{"id":"103","source":"43","target":"26"},{"id":"104","source":"43","target":"27"},{"id":null,"source":"44","target":"11"},{"id":"105","source":"44","target":"28"},{"id":"107","source":"45","target":"28"},{"id":"108","source":"47","target":"46"},{"id":"112","source":"48","target":"11"},{"id":"110","source":"48","target":"25"},{"id":"111","source":"48","target":"27"},{"id":"109","source":"48","target":"47"},{"id":null,"source":"49","target":"11"},{"id":"113","source":"49","target":"26"},{"id":null,"source":"50","target":"24"},{"id":"115","source":"50","target":"49"},{"id":"119","source":"51","target":"11"},{"id":"118","source":"51","target":"26"},{"id":"117","source":"51","target":"49"},{"id":null,"source":"52","target":"39"},{"id":"120","source":"52","target":"51"},{"id":"122","source":"53","target":"51"},{"id":"125","source":"54","target":"26"},{"id":"124","source":"54","target":"49"},{"id":"123","source":"54","target":"51"},{"id":"131","source":"55","target":"11"},{"id":"132","source":"55","target":"16"},{"id":"133","source":"55","target":"25"},{"id":null,"source":"55","target":"26"},{"id":"128","source":"55","target":"39"},{"id":"134","source":"55","target":"41"},{"id":"135","source":"55","target":"48"},{"id":"127","source":"55","target":"49"},{"id":"126","source":"55","target":"51"},{"id":"129","source":"55","target":"54"},{"id":"136","source":"56","target":"49"},{"id":"137","source":"56","target":"55"},{"id":null,"source":"57","target":"41"},{"id":null,"source":"57","target":"48"},{"id":"138","source":"57","target":"55"},{"id":"145","source":"58","target":"11"},{"id":null,"source":"58","target":"27"},{"id":"142","source":"58","target":"48"},{"id":"141","source":"58","target":"55"},{"id":"144","source":"58","target":"57"},{"id":"148","source":"59","target":"48"},{"id":"147","source":"59","target":"55"},{"id":null,"source":"59","target":"57"},{"id":"146","source":"59","target":"58"},{"id":"150","source":"60","target":"48"},{"id":"151","source":"60","target":"58"},{"id":"152","source":"60","target":"59"},{"id":"153","source":"61","target":"48"},{"id":"158","source":"61","target":"55"},{"id":"157","source":"61","target":"57"},{"id":"154","source":"61","target":"58"},{"id":"156","source":"61","target":"59"},{"id":"155","source":"61","target":"60"},{"id":"164","source":"62","target":"41"},{"id":"162","source":"62","target":"48"},{"id":"159","source":"62","target":"55"},{"id":null,"source":"62","target":"57"},{"id":"160","source":"62","target":"58"},{"id":"161","source":"62","target":"59"},{"id":null,"source":"62","target":"60"},{"id":"165","source":"62","target":"61"},{"id":null,"source":"63","target":"48"},{"id":"174","source":"63","target":"55"},{"id":null,"source":"63","target":"57"},{"id":null,"source":"63","target":"58"},{"id":"167","source":"63","target":"59"},{"id":null,"source":"63","target":"60"},{"id":"172","source":"63","target":"61"},{"id":"169","source":"63","target":"62"},{"id":"184","source":"64","target":"11"},{"id":null,"source":"64","target":"48"},{"id":"175","source":"64","target":"55"},{"id":"183","source":"64","target":"57"},{"id":"179","source":"64","target":"58"},{"id":"182","source":"64","target":"59"},{"id":"181","source":"64","target":"60"},{"id":"180","source":"64","target":"61"},{"id":"176","source":"64","target":"62"},{"id":"178","source":"64","target":"63"},{"id":"187","source":"65","target":"48"},{"id":"194","source":"65","target":"55"},{"id":"193","source":"65","target":"57"},{"id":null,"source":"65","target":"58"},{"id":"192","source":"65","target":"59"},{"id":null,"source":"65","target":"60"},{"id":"190","source":"65","target":"61"},{"id":"188","source":"65","target":"62"},{"id":"185","source":"65","target":"63"},{"id":"186","source":"65","target":"64"},{"id":"200","source":"66","target":"48"},{"id":"196","source":"66","target":"58"},{"id":"197","source":"66","target":"59"},{"id":"203","source":"66","target":"60"},{"id":"202","source":"66","target":"61"},{"id":"198","source":"66","target":"62"},{"id":"201","source":"66","target":"63"},{"id":"195","source":"66","target":"64"},{"id":"199","source":"66","target":"65"},{"id":"204","source":"67","target":"57"},{"id":null,"source":"68","target":"11"},{"id":null,"source":"68","target":"24"},{"id":"205","source":"68","target":"25"},{"id":"208","source":"68","target":"27"},{"id":null,"source":"68","target":"41"},{"id":"209","source":"68","target":"48"},{"id":"213","source":"69","target":"11"},{"id":"214","source":"69","target":"24"},{"id":"211","source":"69","target":"25"},{"id":null,"source":"69","target":"27"},{"id":"217","source":"69","target":"41"},{"id":"216","source":"69","target":"48"},{"id":"212","source":"69","target":"68"},{"id":"221","source":"70","target":"11"},{"id":"222","source":"70","target":"24"},{"id":"218","source":"70","target":"25"},{"id":"223","source":"70","target":"27"},{"id":"224","source":"70","target":"41"},{"id":"225","source":"70","target":"58"},{"id":"220","source":"70","target":"68"},{"id":"219","source":"70","target":"69"},{"id":"230","source":"71","target":"11"},{"id":"233","source":"71","target":"25"},{"id":"226","source":"71","target":"27"},{"id":"232","source":"71","target":"41"},{"id":null,"source":"71","target":"48"},{"id":"228","source":"71","target":"68"},{"id":"227","source":"71","target":"69"},{"id":"229","source":"71","target":"70"},{"id":"236","source":"72","target":"11"},{"id":"234","source":"72","target":"26"},{"id":"235","source":"72","target":"27"},{"id":"237","source":"73","target":"48"},{"id":"238","source":"74","target":"48"},{"id":"239","source":"74","target":"73"},{"id":"242","source":"75","target":"25"},{"id":"244","source":"75","target":"41"},{"id":null,"source":"75","target":"48"},{"id":"241","source":"75","target":"68"},{"id":"240","source":"75","target":"69"},{"id":"245","source":"75","target":"70"},{"id":"246","source":"75","target":"71"},{"id":"252","source":"76","target":"48"},{"id":"253","source":"76","target":"58"},{"id":"251","source":"76","target":"62"},{"id":"250","source":"76","target":"63"},{"id":"247","source":"76","target":"64"},{"id":"248","source":"76","target":"65"},{"id":"249","source":"76","target":"66"}],"categories":[{"name":"类目0"},{"name":"类目1"},{"name":"类目2"},{"name":"类目3"},{"name":"类目4"},{"name":"类目5"},{"name":"类目6"},{"name":"类目7"},{"name":"类目8"}]}]}

option.series[0].data.forEach(function (item) {
    item.x /= 5;
    item.y /= 5;
});
</ExampleBaseOption>

## type(string) = 'graph'

{{ use: partial-component-id(
    prefix = "#"
) }}

{{ use: partial-series-name() }}

{{ use: partial-legend-hover-link() }}

{{ use: partial-coord-sys(
    seriesType = "graph",
    coordSysDefault = "null",
    none = true,
    cartesian2d = true,
    polar = true,
    geo = true,
    calendar = true
) }}

## center(Array)

<ExampleUIControlVector default="0,0" dims="x,y" />

当前视角的中心点。可以是包含两个 `number` 类型（表示像素值）或 `string` 类型（表示相对容器的百分比）的数组。
从 `5.3.3` 版本开始支持 `string` 类型。

例如：
```ts
center: [115.97, '30%']
```

## zoom(number) = 1

<ExampleUIControlNumber default="1" min="0" step="0.1" />

当前视角的缩放比例。

## layout(string) = 'none'

<ExampleUIControlEnum options="none,force,circular" />

图的布局。

**可选：**
+ `'none'` 不采用任何布局，使用[节点](~series-graph.data)中提供的 [x](~series-graph.data.x)， [y](~series-graph.data.y) 作为节点的位置。

+ `'circular'` 采用环形布局，见示例 [Les Miserables](${galleryEditorPath}graph-circular-layout)，布局相关的配置项见 [graph.circular](~series-graph.circular)

+ `'force'` 采用力引导布局，见示例 [Force](${galleryEditorPath}graph-force)，布局相关的配置项见 [graph.force](~series-graph.force)

## circular(Object)

环形布局相关配置

### rotateLabel(boolean) = false

<ExampleUIControlBoolean />

是否旋转标签，默认不旋转

## force(Object)

力引导布局相关的配置项，力引导布局是模拟弹簧电荷模型在每两个节点之间添加一个斥力，每条边的两个节点之间添加一个引力，每次迭代节点会在各个斥力和引力的作用下移动位置，多次迭代后节点会静止在一个受力平衡的位置，达到整个模型的能量最小化。

力引导布局的结果有良好的对称性和局部聚合性，也比较美观。

### initLayout(string)

进行力引导布局前的初始化布局，初始化布局会影响到力引导的效果。

默认不进行任何布局，使用[节点](~series-graph.data)中提供的 [x](~series-graph.data.x)， [y](~series-graph.data.y) 作为节点的位置。如果不存在的话会随机生成一个位置。

也可以选择使用环形布局 `'circular'`。

### repulsion(Array|number) = 50

<ExampleUIControlNumber min="0" step="5" default="50" />

节点之间的斥力因子。

支持设置成数组表达斥力的范围，此时不同大小的值会线性映射到不同的斥力。值越大则斥力越大

### gravity(number) = 0.1

<ExampleUIControlNumber min="0" step="0.01" default="0.1" />

节点受到的向中心的引力因子。该值越大节点越往中心点靠拢。

### edgeLength(Array|number) = 30

<ExampleUIControlNumber min="0" step="5" default="30" />

边的两个节点之间的距离，这个距离也会受 [repulsion](~series-graph.force.repulsion)。

支持设置成数组表达边长的范围，此时不同大小的值会线性映射到不同的长度。值越小则长度越长。如下示例

```ts
// 值最大的边长度会趋向于 10，值最小的边长度会趋向于 50
edgeLength: [10, 50]
```

### layoutAnimation(boolean) = true

<ExampleUIControlBoolean default="true" />

因为力引导布局会在多次迭代后才会稳定，这个参数决定是否显示布局的迭代动画，在浏览器端节点数据较多（>100）的时候不建议关闭，布局过程会造成浏览器假死。

### friction(number) = 0.6

<ExampleUIControlNumber min="0" max="1" step="0.01" default="0.6" />

{{ use: partial-version(
    version = "4.5.0"
) }}

这个参数能减缓节点的移动速度。取值范围 0 到 1。

但是仍然是个试验性的参数，参见 [#11024](https://github.com/apache/echarts/issues/11024)。

## roam(boolean|string) = false

{{ use: partial-roam() }}

## scaleLimit(Object)

{{ use: partial-scale-limit(
    prefix = "##"
) }}

## nodeScaleRatio(number) = 0.6

<ExampleUIControlNumber min="0" max="1" step="0.01" default="0.6" />

鼠标漫游缩放时节点的相应缩放比例，当设为`0`时节点不随着鼠标的缩放而缩放

## draggable(boolean) = false

<ExampleUIControlBoolean default="false" />

节点是否可拖拽。

注意：`v5.4.1` 之前的版本只在使用[力引导布局](~series-graph.force)的时候才有用。

{{ use: partial-symbol(
    prefix = '#',
    name = '节点'
) }}

## edgeSymbol(Array|string) = ['none', 'none']

边两端的标记类型，可以是一个数组分别指定两端，也可以是单个统一指定。默认不显示标记，常见的可以设置为箭头，如下：

```ts
edgeSymbol: ['circle', 'arrow']
```

## edgeSymbolSize(Array|number) = 10

<ExampleUIControlVector min="0" default="10" />

边两端的标记大小，可以是一个数组分别指定两端，也可以是单个统一指定。

{{ use: partial-cursor() }}

## itemStyle(Object)

{{ use: partial-item-style-desc() }}

{{ use: partial-item-style(
    prefix = "##",
    useColorPalatte = true,
    hasCallback = true
) }}

## lineStyle(Object)

关系边的公用线条样式。其中 [lineStyle.color](~series-graph.lineStyle.color) 支持设置为`'source'`或者`'target'`特殊值，此时边会自动取源节点或目标节点的颜色作为自己的颜色。

{{ use: partial-line-style(
    prefix = "##",
    defaultColor = "'#aaa'",
    defaultWidth = 1,
    defaultOpacity = 0.5,
    hasCurveness = true
) }}

## label(Object)

{{ use: partial-label-desc() }}

{{ use: partial-label(
    prefix = "##",
    defaultPosition = "'inside'",
    formatter = true
) }}

## edgeLabel(Object)

{{ use: graph-edge-label(
    prefix = "##"
) }}

## labelLayout(Object|Function)

{{ use: partial-label-layout(
    prefix = "##"
) }}

## emphasis(Object)

高亮状态的图形样式。

{{ use: partial-emphasis-disabled(
    prefix = "##"
) }}

### scale(boolean|number) = true

{{ use: partial-version(
    version = "5.0.0"
) }}

<ExampleUIControlBoolean default="true" />

是否开启高亮后节点的放大效果。从 `5.3.2` 版本开始支持 `number`，用以设置高亮放大倍数，默认放大 1.1 倍。

{{ use: partial-focus-blur-scope(
    isGraph = true
) }}

{{ use: graph-state(
    state = 'emphasis'
) }}

## blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

淡出状态的图形样式。开启 [emphasis.focus](~series-graph.emphasis.focus) 后有效。

{{ use: graph-state(
    state = 'blur'
) }}

## select(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

选中状态的图形样式。开启 [selectedMode](~series-graph.selectedMode) 后有效。

{{ use: partial-select-disabled(
    prefix = "##"
) }}

{{ use: graph-state(
    state = 'select'
) }}

{{ use: partial-selected-mode(
    version = '5.0.0'
) }}

## categories(Array)

节点分类的类目，可选。

如果节点有分类的话可以通过 [data[i].category](~series-graph.data.category) 指定每个节点的类目，类目的样式会被应用到节点样式上。[图例](~legend)也可以基于`categories`名字展现和筛选。

### name(string)

类目名称，用于和 [legend](~legend) 对应以及格式化 [tooltip](~tooltip) 的内容。

{{ use: partial-symbol(
    prefix = '##',
    name = '该类目节点'
) }}

### itemStyle(Object)

该类目节点的样式。

{{ use: partial-item-style(
    prefix = "###",
    useColorPalatte = true
) }}

### label(Object)

该类目节点标签的样式。

{{ use: partial-label(
    prefix = "###",
    defaultPosition = "inside",
    formatter = true
) }}

### emphasis(Object)

该类目节点的高亮状态。

{{ use: partial-emphasis-disabled(
    prefix = "###"
) }}

{{ use: graph-node-state(
    state = 'emphasis'
) }}

### blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

该类目节点的淡出状态。

{{ use: graph-node-state(
    state = 'blur'
) }}

### select(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

该类目节点的选中状态。

{{ use: partial-select-disabled(
    prefix = "###"
) }}

{{ use: graph-node-state(
    state = 'select'
) }}

## autoCurveness(boolean|number|Array) = false

针对节点之间存在多边的情况，自动计算各边曲率，默认不开启。

设置为 `true` 时，开启自动曲率计算，默认边曲率数组长度为 `20`，如果两点间边数大于 `20`，请使用 `number` 或 `Array` 设置边曲率数组。

设置为 `number` 时，表示两点间边曲率数组的长度，由内部算法给出计算结果。

设置为 `Array` 时，表示直接指定边曲率数组，多边曲率会从数组中直接按顺序选取。

**注意：** 如果设置 [lineStyle.curveness](~series-graph.lineStyle.curveness) 则此属性失效。

## data(Array)

关系图的节点数据列表。

```ts
data: [{
    name: '1',
    x: 10,
    y: 10,
    value: 10
}, {
    name: '2',
    x: 100,
    y: 100,
    value: 20,
    symbolSize: 20,
    itemStyle: {
        color: 'red'
    }
}]
```

**注意:** 节点的`name`不能重复。

### name(string)

数据项名称。

### x(number)

节点的初始 x 值。在不指定的时候需要指明`layout`属性选择布局方式。

### y(number)

节点的初始 y 值。在不指定的时候需要指明`layout`属性选择布局方式。

### fixed(boolean)

节点在力引导布局中是否固定。

### value(number|Array)

数据项值。

### category(number)

数据项所在类目的 index。

{{ use: partial-symbol(
    prefix = '##',
    name = '该类目节点'
) }}

### itemStyle(Object)

该节点的样式。

{{ use: partial-item-style(
    prefix = "###",
    useColorPalatte = true
) }}

### label(Object)

该节点标签的样式。

{{ use: partial-label(
    prefix = "###"
) }}

### emphasis(Object)

该节点的高亮状态。

{{ use: partial-emphasis-disabled(
    prefix = "###"
) }}

{{ use: graph-node-state(
    state = 'emphasis'
) }}

### blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

该节点的淡出状态。

{{ use: graph-node-state(
    state = 'blur'
) }}

### select(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

该节点的选中状态。

{{ use: partial-select-disabled(
    prefix = "###"
) }}

{{ use: graph-node-state(
    state = 'select'
) }}

{{ use: partial-tooltip-in-series-data() }}

## nodes(Array)

别名，同 [data](~series-graph.data)

## links(Array)

节点间的关系数据。示例：
```ts
links: [{
    source: 'n1',
    target: 'n2'
}, {
    source: 'n2',
    target: 'n3'
}]
```

### source(string|number)

边的[源节点名称](~series-graph.data.name)的字符串，也支持使用数字表示源节点的索引。

### target(string|number)

边的[目标节点名称](~series-graph.data.name)的字符串，也支持使用数字表示源节点的索引。

### value(number)

边的数值，可以在力引导布局中用于映射到边的长度。

### lineStyle(Object)

关系边的线条样式。

{{ use: partial-line-style(
    prefix = "###"
) }}

#### curveness(number) = 0

<ExampleUIControlNumber min="0" max="1" step="0.01" default="0" />

边的曲度，支持从 0 到 1 的值，值越大曲度越大。

### label(Object)

{{ use: graph-edge-label(
    prefix = "###"
) }}

### emphasis(Object)

该关系边的高亮状态。

{{ use: partial-emphasis-disabled(
    prefix = "###"
) }}

{{ use: graph-edge-state(
    state = 'emphasis'
) }}

### blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

该关系边的淡出状态。

{{ use: graph-edge-state(
    state = 'blur'
) }}

### select(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

该关系边的选中状态。

{{ use: partial-select-disabled(
    prefix = "###"
) }}

{{ use: graph-edge-state(
    state = 'select'
) }}

### symbol(Array|string)

边两端的标记类型，可以是一个数组分别指定两端，也可以是单个统一指定。

### symbolSize(Array|string)

边两端的标记大小，可以是一个数组分别指定两端，也可以是单个统一指定。

### ignoreForceLayout(boolean) = false

{{ use: partial-version(
    version = "4.5.0"
) }}

使此边不进行力导图布局的计算。

## edges(Array)

别名，同 [links](~series-graph.links)

{{ use: partial-marker(
    prefix = "#",
    seriesType = "graph",
    hasType = true,
    hasCoord = true
) }}

{{ use: partial-rect-layout-width-height(
    defaultLeft = "'center'",
    defaultTop = "'middle'",
    defaultWidth = '自适应',
    defaultHeight = '自适应'
) }}

{{ use: partial-silent(
    prefix = "#"
) }}

{{ use: partial-animation(
    prefix = "#"
) }}

{{ use: partial-tooltip-in-series() }}



{{ target: graph-edge-label }}

#${prefix} show(boolean) = ${defaultShowLabel|default(false)}

是否显示标签。

#${prefix} position(string) = 'middle'

标签位置，可选：
+ `'start'` 线的起始点。
+ `'middle'` 线的中点。
+ `'end'`   线的结束点。

#${prefix} formatter(string|Function)

{{ use: partial-2d-data-label-formatter() }}

{{ use: partial-text-style(
    prefix = ${prefix}
) }}



{{ target: graph-state }}

### itemStyle(Object)

{{ use: partial-item-style(
    prefix = "###",
    hasInherit = ${state} === 'emphasis'
) }}

### lineStyle(Object)

{{ use: partial-line-style(
    prefix = "###",
    hasCurveness = true
) }}

### label(Object)

{{ use: partial-label(
    prefix = "###",
    defaultShow = true,
    formatter = true
) }}

### edgeLabel(Object)

{{ use: graph-edge-label(
    prefix = "###"
) }}



{{ target: graph-node-state }}

#### itemStyle(Object)

{{ use: partial-item-style(
    prefix = "####",
    hasInherit = ${state} === 'emphasis'
) }}

#### label(Object)

{{ use: partial-label(
    prefix = "####",
    defaultShow = true
) }}



{{ target: graph-edge-state }}

#### lineStyle(Object)

{{ use: partial-line-style(
    prefix = "####",
    hasCurveness = true,
    hasInherit = ${state} === 'emphasis'
) }}

#### label(Object)

{{ use: partial-label(
    prefix = "####",
    defaultShow = true
) }}
