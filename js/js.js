 $(window).load(function() { $(".loading").fadeOut() })
 $(function() {
     echarts_1();
     echarts_2();
     echarts_3();
     echarts_4();
     echarts_5();
     echarts_6();
     echarts_7();
     echarts_8();

     function echarts_1() {
         // 基于准备好的dom，初始化echarts实例
         var myChart1 = echarts.init(document.getElementById('echart1'));
         option1 = {
             legend: {
                 //orient: 'vertical',
                 top: '20',
                 left: 'center',
                 itemWidth: 10,
                 itemHeight: 10,
                 data: ['东部地区', '中部地区', '西部地区', '东北地区'],
                 textStyle: {
                     color: 'rgba(255,255,255,.5)',
                     fontSize: '12',
                 }
             },
             tooltip: {
                 trigger: 'item',
                 formatter: "{b} : {c} ({d}%)"
             },

             visualMap: {
                 show: false,
                 min: 0,
                 max: 76173288,
                 inRange: {
                     //colorLightness: [0, 1]
                 }
             },
             series: [{
                 name: '分布',
                 type: 'pie',
                 radius: ['30%', '60%'],
                 center: ['50%', '60%'],
                 color: ['#0086e5', '#30c5ed', '#9fe7b8', '#fedb5b', '#ff9f7d', '#fb7293', '#e7bcf2'], //'#FBFE27','rgb(11,228,96)','#FE5050'
                 data: [{
                             value: 76173288,
                             name: '东部地区'
                         },
                         {
                             value: 69030690,
                             name: '中部地区'
                         },
                         {
                             value: 72150558,
                             name: '西部地区'
                         },
                         {
                             value: 12915974,
                             name: '东北地区'
                         }
                     ]
                     .sort(function(a, b) {
                         return a.value - b.value
                     }),
                 roseType: 'radius',

                 label: {
                     normal: {
                         formatter: ['{d|{d}%}', '{b|{b}}'].join('\n'),
                         rich: {
                             d: {
                                 color: 'rgb(241,246,104)',
                                 fontSize: 11,
                                 fontWeight: 'bold',

                             },
                             b: {
                                 color: 'rgb(98,137,169)',
                                 fontSize: 12,

                             },
                         },
                     }
                 },
                 labelLine: {
                     normal: {
                         lineStyle: {
                             color: 'rgb(98,137,169)',
                         },
                         smooth: 0.2,
                         length: 5,
                         length2: 9,

                     }
                 },
                 itemStyle: {
                     normal: {
                         shadowColor: 'rgba(0, 0, 0, 0.1)',
                         shadowBlur: 50,
                     }
                 }
             }]
         };
         // 使用刚指定的配置项和数据显示图表。
         myChart1.setOption(option1);
         myChart1.on('click', function(params) {
             alert(params.name + "登记" + params.value + "户");
             window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.name));
         });
         myChart1.group = 'group1';
         echarts.connect('group1');

         window.addEventListener("resize", function() {
             myChart1.resize();
         });
     }

     function echarts_2() {
         var myChart2 = echarts.init(document.getElementById('echart2'));
         myChart2.showLoading({
             text: '请稍等片刻,loading data...',
             color: 'blue',
         });
         $.get("js/leida.json").done(function(data) {
             //指定图表的配置项和数据
             myChart2.setOption({
                     tooltip: {},
                     legend: {
                         show: true, //设置是否显示图例
                         top: '2%',
                         //  icon: 'rect', //icon.'circle'|'rect'|'roundRect'|'triangle'|'diamond'|'pin'|'arrow'|'none'
                         //  top: '10', //设置图例距离顶部边距
                         //  left: 90, //设置图例距离左侧边距
                         itemWidth: 12, //设置图例标记的图形宽度
                         itemHeight: 12, //设置图例标记的图形高度
                         //  itemGap: 55, //设置图例每项之间的间隔
                         //  orient: 'horizontal', //设置图例列表的布局朝向，'horizontal'|'vertical'
                         textStyle: { fontSize: 12, color: 'rgba(255,255,255,.5)' }, //设置图例的公用文本样式
                         data: ['实地调查人员', '卫星影像', '样方数量', '抽中普查区']
                     },
                     radar: {
                         // shape: 'circle',
                         center: ['50%', '55%'],
                         name: {
                             textStyle: {
                                 color: '#fff',
                                 fontSize: 13,
                                 backgroundColor: 'rgba(255,255,255,.2)',
                                 borderRadius: 3,
                                 padding: [3, 5]
                             }
                         },
                         indicator: [
                             { name: '全国', max: 130000 },
                             { name: '北京', max: 600 },
                             { name: '天津', max: 1000 },
                             { name: '河北', max: 8000 },
                             { name: '上海', max: 800 },
                             { name: '广东', max: 6000 },
                             { name: '广西', max: 4000 },
                             { name: '云南', max: 5000 },
                             { name: '新疆', max: 8000 }
                         ]
                     },
                     series: [{
                         name: '实地调查人员vs 卫星影像vs样方数量vs抽中普查区',
                         type: 'radar',
                         // areaStyle: {normal: {}},
                         data: data.data
                     }]
                 })
                 //  myChart2.hideLoading(); // 隐藏 loading 效果
             setTimeout(function() {
                 myChart2.hideLoading();
             }, 2000);

         });
         myChart2.on('click', function(params) {
             alert(params.name + params.value);
             window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.name));
         });
         //  myChart2.setOption(option2);
         window.addEventListener("resize", function() {
             myChart2.resize();
         })


     }

     function echarts_3() {
         var myChart3 = echarts.init(document.getElementById('echart3'));
         data = [{
             name: "河北",
             value: 256685
         }, {
             name: "广东",
             value: 170020
         }, {
             name: "广西",
             value: 149176
         }, {
             name: "云南",
             value: 138540
         }, {
             name: "新疆",
             value: 77540
         }, {
             name: "北京",
             value: 45837
         }, {
             name: "上海",
             value: 22287
         }, {
             name: "天津",
             value: 19498
         }];
         arrName = getArrayValue(data, "name");
         arrValue = getArrayValue(data, "value");
         sumValue = eval(arrValue.join('+'));
         objData = array2obj(data, "name");
         optionData = getData(data);

         function getArrayValue(array, key) {
             var key = key || "value";
             var res = [];
             if (array) {
                 array.forEach(function(t) {
                     res.push(t[key])
                 })
             }
             return res
         }

         function array2obj(array, key) {
             var resObj = {};
             for (var i = 0; i < array.length; i++) {
                 resObj[array[i][key]] = array[i]
             }
             return resObj
         }

         function getData(data) {
             var res = {
                 series: [],
                 yAxis: []
             };
             for (let i = 0; i < data.length; i++) {
                 res.series.push({
                     name: '数据',
                     type: 'pie',
                     clockWise: false,
                     hoverAnimation: false,
                     radius: [85 - i * 10 + '%', 80 - i * 10 + '%'],
                     center: ["50%", "60%"],
                     label: {
                         show: false
                     },
                     itemStyle: {
                         label: {
                             show: false,
                         },
                         labelLine: {
                             show: false
                         },
                         borderWidth: 5,
                     },
                     data: [{
                         value: data[i].value,
                         name: data[i].name
                     }, {
                         value: sumValue - data[i].value,
                         name: '',
                         itemStyle: {
                             color: "rgba(0,0,0,0)",
                             borderWidth: 0
                         },
                         tooltip: {
                             show: false
                         },
                         hoverAnimation: false
                     }]
                 });
                 res.series.push({
                     name: '',
                     type: 'pie',
                     silent: true,
                     z: 1,
                     clockWise: false,
                     hoverAnimation: false,
                     radius: [85 - i * 10 + '%', 80 - i * 10 + '%'],
                     center: ["50%", "60%"],
                     label: {
                         show: false
                     },
                     itemStyle: {
                         label: {
                             show: false,
                         },
                         labelLine: {
                             show: false
                         },
                         borderWidth: 5,
                     },
                     data: [{
                         value: 7.5,
                         itemStyle: {
                             color: "rgba(255,255,255,.1)",
                             borderWidth: 0
                         },
                         tooltip: {
                             show: false
                         },
                         hoverAnimation: false
                     }, {
                         value: 2.5,
                         name: '',
                         itemStyle: {
                             color: "rgba(0,0,0,0)",
                             borderWidth: 0
                         },
                         tooltip: {
                             show: false
                         },
                         hoverAnimation: false
                     }]
                 });
                 res.yAxis.push((data[i].value / sumValue * 100).toFixed(2) + "%")
             }
             return res
         }
         option3 = {

             legend: {
                 //  orient: 'vertical',
                 show: true,
                 //  top: "20",
                 left: 'center',
                 data: arrName,
                 itemWidth: 12,
                 itemHeight: 12,

                 //itemGap: 15,
                 formatter: function(name) {
                     return "{title|" + name + "}:{value|" + (objData[name].value) + "人}"
                 },
                 textStyle: {
                     color: "rgba(255,255,255,.45)",
                     rich: {
                         title: {
                             fontSize: 12,
                             color: "rgba(255,255,255,.45)"
                         },
                         value: {
                             fontSize: 12,
                             color: "rgba(255,255,255,.85)"
                         }
                     }
                 },
             },
             tooltip: {
                 show: true,
                 trigger: "item",
                 formatter: "{a}<br>{b}:{c}({d}%)"
             },
             //  color: ['#FF8700', '#ffc300', '#00e473', '#009DFF'],
             grid: {
                 top: '20%',
                 bottom: '43%',
                 left: "52%",
                 containLabel: false
             },
             yAxis: [{
                 type: 'category',
                 inverse: true,
                 axisLine: {
                     show: false
                 },
                 axisTick: {
                     show: false
                 },
                 axisLabel: {
                     interval: 0,
                     inside: true,
                     textStyle: {
                         color: "#fff",
                         fontSize: 10,
                     },
                     show: true
                 },
                 data: optionData.yAxis
             }],
             xAxis: [{
                 show: false
             }],
             series: optionData.series
         };
         myChart3.setOption(option3);
         myChart3.on('click', function(params) {
             alert(params.name + params.value + "人");
         });
         //   myChart3.group = 'group3';
         //   echarts.connect('group3');
         window.addEventListener("resize", function() {
             myChart3.resize();
         });
     }

     function echarts_4() {
         // 基于准备好的dom，初始化echarts实例
         var myChart4 = echarts.init(document.getElementById('echart4'));
         myChart4.setOption({
             tooltip: {
                 trigger: 'axis',
                 axisPointer: {
                     type: 'shadow'
                 }
             },
             legend: {
                 data: ['东部地区', '中部地区', '西部地区', '东北地区'],

                 top: '2%',
                 textStyle: {
                     color: "rgba(255,255,255,.5)",
                     fontSize: '12',

                 },
                 itemWidth: 12,
                 itemHeight: 12,
                 //itemGap: 35
             },
             grid: {
                 left: '0%',
                 top: '40px',
                 right: '0%',
                 bottom: '0%',
                 containLabel: true
             },
             xAxis: [{
                 type: 'category',
                 //  '2006', '2007', '2008', '2009', '2010', '2011','2012','2013','2014','2015','2016'
                 data: [],
                 axisLine: {
                     show: true,
                     lineStyle: {
                         color: "rgba(255,255,255,.1)",
                         width: 1,

                     },
                 },

                 axisTick: {
                     show: false,
                 },
                 axisLabel: {
                     interval: 0,
                     // rotate:50,
                     show: true,
                     splitNumber: 15,
                     textStyle: {
                         color: "rgba(255,255,255,.6)",
                         fontSize: '12',

                     },
                 },
             }],
             yAxis: [{
                 type: 'value',
                 axisLabel: {
                     //formatter: '{value} %'
                     show: true,
                     min: 0,
                     max: 5000,
                     textStyle: {
                         color: "rgba(255,255,255,.6)",
                         fontSize: '12',
                     },
                 },
                 axisTick: {
                     show: false,
                 },
                 axisLine: {
                     show: false,
                 },
                 splitLine: {
                     lineStyle: {
                         color: "rgba(255,255,255,.1)",
                         type: "dotted"
                     }
                 }
             }],
             series: [
                 // {
                 //      name: '全国',
                 //      type: 'bar',
                 //      data: [],
                 //      barWidth: '15%', //柱子宽度
                 //      // barGap: 1, //柱子之间间距
                 //      itemStyle: {
                 //          normal: {
                 //              color: '#2f89cf',
                 //              opacity: 1,
                 //              barBorderRadius: 5,
                 //          }
                 //      }
                 //  }, 
                 {
                     name: '东部地区',
                     type: 'bar',
                     data: [],
                     barWidth: '15%',
                     // barGap: 1,
                     itemStyle: {
                         normal: {
                             color: '#62c98d',
                             opacity: 1,
                             barBorderRadius: 5,
                         }
                     }
                 },
                 {
                     name: '中部地区',
                     type: 'bar',
                     data: [],
                     barWidth: '15%',
                     // barGap: 1,
                     itemStyle: {
                         normal: {
                             color: '#ffc107',
                             opacity: 1,
                             barBorderRadius: 5,
                         }
                     }
                 },
                 {
                     name: '西部地区',
                     type: 'bar',
                     data: [],
                     barWidth: '15%',
                     // barGap: 1,
                     itemStyle: {
                         normal: {
                             // color: '#ffc108',
                             opacity: 1,
                             barBorderRadius: 5,
                         }
                     }
                 },
                 {
                     name: '东北地区',
                     type: 'bar',
                     data: [],
                     barWidth: '15%',
                     // barGap: 1,
                     itemStyle: {
                         normal: {
                             // color: '#ffc108',
                             opacity: 1,
                             barBorderRadius: 5,
                         }
                     }
                 },
             ]
         });
         // 使用刚指定的配置项和数据显示图表。
         //  myChart4.setOption(option4);
         myChart4.showLoading({
             text: '请稍等片刻,loading data...',
             color: 'blue',
         });
         $.get("js/zzt.json").done(function(data) {
             var d = typeof data == "string" ? JSON.parse(data) : data;
             //  var qgList = [];
             var dbList = [];
             var zbList = [];
             var xbList = [];
             var dbList1 = [];
             var specList = [];
             for (var i = 0; i < d.data.length; i++) {
                 //  if (d.data[i].name == '全国') {
                 //      qgList.push(d.data[i].value);
                 //      specList.push(d.data[i].specName);
                 //  } else 
                 if (d.data[i].name == '东部地区') {
                     dbList.push(d.data[i].value);
                     specList.push(d.data[i].specName);
                 } else if (d.data[i].name == '中部地区') {
                     zbList.push(d.data[i].value);
                     //  specList.push(d.data[i].specName);
                 } else if (d.data[i].name == '西部地区') {
                     xbList.push(d.data[i].value);
                     //  specList.push(d.data[i].specName);
                 } else {
                     dbList1.push(d.data[i].value);
                 }
             }
             myChart4.setOption({
                 xAxis: { data: specList },
                 yAxis: {},
                 series: [
                     // { name: '全国', type: 'bar', data: qgList },
                     { name: '东部地区', type: 'bar', data: dbList },
                     { name: '中部地区', type: 'bar', data: zbList },
                     { name: '西部地区', type: 'bar', data: xbList },
                     { name: '东北地区', type: 'bar', data: dbList1 }
                 ]
             });
             setTimeout(function() {
                 myChart4.hideLoading();
             }, 2000);
         });
         myChart4.on('click', function(params) {
             alert(params.name + params.value + "万户");
         });
         myChart4.group = 'group3';
         echarts.connect('group3');
         window.addEventListener("resize", function() {
             myChart4.resize();
         });
     }

     function echarts_5() {
         // 基于准备好的dom，初始化echarts实例
         var myChart5 = echarts.init(document.getElementById('echart5'));

         option5 = {
             tooltip: {
                 trigger: 'item',
                 formatter: "{b}: {c}"
             },
             toolbox: {
                 show: true,
                 feature: {
                     mark: { show: true },
                     dataView: { show: true, readOnly: false },
                     restore: { show: true },
                     saveAsImage: { show: true }
                 }
             },
             calculable: false,
             series: [{
                 type: 'treemap',
                 data: [{
                         name: '东部地区 ',
                         value: 608.5,
                         children: [{
                                 name: '温室占地面积',
                                 value: 130
                             },
                             {
                                 name: '大棚占地面积',
                                 value: 474
                             },
                             {
                                 name: '渔业养殖用房面积',
                                 value: 4.5
                             }
                         ]
                     },
                     {
                         name: '中部地区 ',
                         value: 228.7,
                         children: [{
                                 name: '温室占地面积',
                                 value: 41
                             },
                             {
                                 name: '大棚占地面积',
                                 value: 186
                             },
                             {
                                 name: '渔业养殖用房面积',
                                 value: 1.7
                             },
                         ]
                     },
                     {
                         name: '西部地区 ',
                         value: 311,
                         children: [{
                                 name: '温室占地面积',
                                 value: 95
                             },
                             {
                                 name: '大棚占地面积',
                                 value: 215
                             },
                             {
                                 name: '渔业养殖用房面积',
                                 value: 1.0
                             },
                         ]
                     },
                     {
                         name: '东北地区 ',
                         value: 175.3,
                         children: [{
                                 name: '温室占地面积',
                                 value: 69
                             },
                             {
                                 name: '大棚占地面积',
                                 value: 106
                             },
                             {
                                 name: '渔业养殖用房面积',
                                 value: 0.3
                             },
                         ]
                     },
                 ]
             }]
         };
         myChart5.setOption(option5);
         //  myChart5.on('click', function(params) {
         //      alert(params.name + params.value + "千公顷");
         //  });
         window.addEventListener("resize", function() {
             myChart5.resize();
         });
     }

     function echarts_6() {
         // 基于准备好的dom，初始化echarts实例
         var myChart6 = echarts.init(document.getElementById('echart6'));
         option6 = {
             legend: {
                 icon: "circle",
                 top: "0",
                 width: '100%',
                 right: 'center',
                 itemWidth: 10,
                 itemHeight: 10,
                 data: ['柴草', '煤', '沼气', '电', '太阳能'],
                 textStyle: {
                     color: "rgba(255,255,255,.5)"
                 },
             },

             tooltip: {
                 trigger: 'axis',
                 axisPointer: {
                     lineStyle: {
                         color: '#dddc6b'
                     }
                 }
             },
             grid: {
                 left: '0',
                 top: '30',
                 right: '20',
                 bottom: '0',
                 containLabel: true
             },

             xAxis: [{
                 type: 'category',
                 boundaryGap: false,
                 axisLabel: {
                     textStyle: {
                         color: "rgba(255,255,255,.5)",
                         //  fontSize: 10
                     },
                 },
                 axisLine: {
                     lineStyle: {
                         color: 'rgba(255,255,255,.1)',

                     }
                 },
                 data: ['全国', '东部地区', '中部地区', '西部地区', '东北地区']

             }, {

                 axisPointer: { show: false },
                 axisLine: { show: false },
                 position: 'bottom',
                 offset: 10,



             }],

             yAxis: [{
                 type: 'value',
                 axisTick: { show: false },
                 splitNumber: 4,
                 axisLine: {
                     lineStyle: {
                         color: 'rgba(255,255,255,.1)'
                     }
                 },
                 axisLabel: {
                     textStyle: {
                         color: "rgba(255,255,255,.5)",
                         //fontSize:10
                     },
                 },

                 splitLine: {
                     lineStyle: {
                         color: 'rgba(255,255,255,.1)',
                         type: 'dotted',
                     }
                 }
             }],
             series: [{
                     name: '柴草',
                     type: 'line',
                     smooth: true,
                     symbol: 'circle',
                     symbolSize: 5,
                     showSymbol: false,
                     lineStyle: {

                         normal: {
                             color: 'rgba(31, 174, 234, 1)',
                             width: 2
                         }
                     },
                     areaStyle: {
                         normal: {
                             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                 offset: 0,
                                 color: 'rgba(31, 174, 234, 0.4)'
                             }, {
                                 offset: 0.8,
                                 color: 'rgba(31, 174, 234, 0.1)'
                             }], false),
                             shadowColor: 'rgba(0, 0, 0, 0.1)',
                         }
                     },
                     itemStyle: {
                         normal: {
                             color: '#1f7eea',
                             borderColor: 'rgba(31, 174, 234, .1)',
                             borderWidth: 5
                         }
                     },
                     data: [44.2, 27.4, 40.1, 58.6, 84.5]

                 },
                 {
                     name: '煤',
                     type: 'line',
                     smooth: true,
                     symbol: 'circle',
                     symbolSize: 5,
                     showSymbol: false,
                     lineStyle: {

                         normal: {
                             color: 'rgb(238, 221, 0)',
                             width: 2
                         }
                     },
                     areaStyle: {
                         normal: {
                             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                 offset: 0,
                                 color: 'rgba(238, 221, 0, 0.4)'
                             }, {
                                 offset: 0.8,
                                 color: 'rgba(238, 221, 0, 0.1)'
                             }], false),
                             shadowColor: 'rgba(0, 0, 0, 0.1)',
                         }
                     },
                     itemStyle: {
                         normal: {
                             color: 'rgb(238, 221, 0)',
                             borderColor: 'rgba(238, 221, 0, .1)',
                             borderWidth: 5
                         }
                     },
                     data: [23.9, 29.4, 16.3, 24.8, 27.4]

                 },
                 {
                     name: '沼气',
                     type: 'line',
                     smooth: true,
                     symbol: 'circle',
                     symbolSize: 5,
                     showSymbol: false,
                     lineStyle: {

                         normal: {
                             color: '#6bdd9b',
                             width: 2
                         }
                     },
                     areaStyle: {
                         normal: {
                             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                 offset: 0,
                                 color: 'rgba(107, 221, 155, 0.4)'
                             }, {
                                 offset: 0.8,
                                 color: 'rgba(107, 221, 155, 0.1)'
                             }], false),
                             shadowColor: 'rgba(0, 0, 0, 0.1)',
                         }
                     },
                     itemStyle: {
                         normal: {
                             color: '#6bdd9b',
                             borderColor: 'rgba(107, 221, 155, .1)',
                             borderWidth: 5
                         }
                     },
                     data: [0.7, 0.3, 0.7, 1.2, 0.1]

                 },
                 {
                     name: '电',
                     type: 'line',
                     smooth: true,
                     symbol: 'circle',
                     symbolSize: 5,
                     showSymbol: false,
                     lineStyle: {

                         normal: {
                             color: '#6666FF',
                             width: 2
                         }
                     },
                     areaStyle: {
                         normal: {
                             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                 offset: 0,
                                 color: 'rgba(102, 102, 225, 0.4)'
                             }, {
                                 offset: 0.8,
                                 color: 'rgba(102, 102, 225, 0.1)'
                             }], false),
                             shadowColor: 'rgba(0, 0, 0, 0.1)',
                         }
                     },
                     itemStyle: {
                         normal: {
                             color: '#6666FF',
                             borderColor: 'rgba(102, 102, 225, .1)',
                             borderWidth: 5
                         }
                     },
                     data: [58.6, 57.2, 59.3, 59.5, 58.7]

                 },
                 {
                     name: '太阳能',
                     type: 'line',
                     smooth: true,
                     symbol: 'circle',
                     symbolSize: 5,
                     showSymbol: false,
                     lineStyle: {

                         normal: {
                             color: '#f6c2c2',
                             width: 1
                         }
                     },
                     areaStyle: {
                         normal: {
                             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                 offset: 0,
                                 color: 'rgba(246, 194, 194, 0.4)'
                             }, {
                                 offset: 0.8,
                                 color: 'rgba(246, 194, 194, 0.1)'
                             }], false),
                             shadowColor: 'rgba(0, 0, 0, 0.1)',
                         }
                     },
                     itemStyle: {
                         normal: {
                             color: '#f6c2c2',
                             borderColor: 'rgba(246, 194, 194, .1)',
                             borderWidth: 5
                         }
                     },
                     data: [0.2, 0.2, 0.3, 0.3, 0.1]

                 },
             ]

         };
         // 使用刚指定的配置项和数据显示图表。
         myChart6.setOption(option6);
         myChart6.on('click', function(params) {
             alert(params.name + params.value + "%");
         });
         myChart6.group = 'group3';
         echarts.connect('group3');
         window.addEventListener("resize", function() {
             myChart6.resize();
         });
     }

     function echarts_7() {
         // 基于准备好的dom，初始化echarts实例
         var myChart7 = echarts.init(document.getElementById('echart7'));
         var maskImage = new Image();
         maskImage.src = 'images/China.png';
         option7 = {
             grid: {
                 left: '10%',
                 top: 5,
                 right: '80%',
                 bottom: 50,
             },
             itemStyle: {
                 color: 'rgba(255,255,255,0)',
             },
             tooltip: {
                 show: true,
                 trigger: 'item',
             },
             series: [{
                 type: 'graph',
                 layout: 'force', //引导布局
                 label: {
                     show: true,
                     color: 'auto',
                 },
                 data: [{ name: '全国', size: 30, color: '#fb3c3c', x: 60, y: 20 },
                     { name: '上海', size: 20, color: '#70aeb4', x: 30, y: 50 },
                     { name: '东北地区', size: 27, color: '#7f95d1', x: 50, y: 80 },
                     { name: '中部地区', size: 14, color: '#87e293', x: 104, y: 86 },
                     { name: '西部地区', size: 22, color: '#B4FFFC', x: 90, y: 54 },
                     { name: '东部地区', size: 17, color: '#d9ccb9', x: 120, y: 70 },
                     { name: '北京', size: 25, color: '#77BFFF', x: 164, y: 48 },
                     { name: '天津', size: 20, color: '#e8a0b8', x: 174, y: 75 },
                     { name: '云南', size: 15, color: '#FCD67A', x: 156, y: 30 },
                     { name: '广西', size: 20, color: '#ff82a9', x: 120, y: 20 },
                     { name: '新疆', size: 12, color: '#666633', x: 112, y: 40 },
                     { name: '河北', size: 10, color: '#e2f2d5', x: 135, y: 50 },
                     { name: '广东', size: 15, color: '#d4edf4', x: 200, y: 50 },
                     { name: '柴草', size: 18, color: '#5a8f29', x: 200, y: 100 },
                     { name: '煤', size: 19, color: '#a1a499', x: 120, y: 105 },
                     { name: '沼气', size: 28, color: '#57d1c9', x: 160, y: 100 },
                     { name: '电', size: 20, color: '#2e94b9', x: 200, y: 20 },
                     { name: '太阳能', size: 20, color: '#e2dc7c', x: 174, y: 130 },
                     { name: '大鹏', size: 15, color: '#59c8df', x: 60, y: 100 },
                     { name: '温室', size: 30, color: '#f17d80', x: 100, y: 130 },
                     { name: '渔业养殖用房', size: 20, color: '#B4FFFC', x: 150, y: 160 }
                 ].map((item) => ({
                     name: item.name,
                     //   draggable: false,
                     itemStyle: {
                         color: 'rgba(255,255,255,0)',
                     },
                     value: item.val,
                     x: item.x,
                     y: item.y,
                     fixed: true,
                     label: {
                         color: item.color,
                         fontSize: item.size,
                     },
                 })),
             }, ],
         };
         //  使用刚指定的配置项和数据显示图表。
         //  option7 = {
         //      tooltip: {
         //          trigger: 'axis',
         //          axisPointer: { type: 'shadow' },
         //      },
         //      grid: {
         //          left: '0',
         //          right: '0',
         //          bottom: '0',
         //          top: '10%',
         //          containLabel: true
         //      },
         //      xAxis: [{
         //          type: 'category',
         //          data: ['农业经营户', '规模农业经营户', '畜牧业', '渔业', '农林牧渔服务业'],
         //          axisLine: {
         //              show: true,
         //              lineStyle: {
         //                  color: "#ffffff",
         //                  width: 1,
         //                  type: "solid",
         //                  opacity: 0.3
         //              }
         //          },
         //          axisTick: {
         //              show: false
         //          },
         //          axisLine: { show: false },
         //          axisLabel: {
         //              show: true,
         //              textStyle: {
         //                  color: "rgba(255,255,255,.5)",
         //              }
         //          },
         //      }],
         //      yAxis: [{
         //          type: 'value',
         //          axisLabel: {
         //              formatter: '{value}'
         //          },

         //          axisLine: {
         //              show: false,
         //          },
         //          axisLabel: {
         //              show: true,
         //              textStyle: {
         //                  color: "rgba(255,255,255,.5)",
         //              }
         //          },
         //          axisTick: {
         //              show: false
         //          },
         //          splitNumber: 3,
         //          splitLine: {
         //              lineStyle: {
         //                  color: "rgba(255,255,255,.05)",
         //              }
         //          }
         //      }],
         //      series: [{
         //          type: 'pictorialBar',
         //          symbol: 'path://M35,0L35,70L0,70z M35,0L35,70L70,70z',
         //          data: [67.7, 2.7, 21.3, 6.4, 1.9],
         //          barWidth: '25%', //柱子宽度

         //          itemStyle: {
         //              normal: {
         //                  color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
         //                      offset: 0,
         //                      color: '#173f9a'
         //                  }, {
         //                      offset: 0.5,
         //                      color: '#173f9a'
         //                  }, {
         //                      offset: 0.5,
         //                      color: '#247ed1'
         //                  }, {
         //                      offset: 1,
         //                      color: '#247ed1'
         //                  }]),
         //                  opacity: 1,
         //              }
         //          }
         //      }]
         //  };
         // 使用刚指定的配置项和数据显示图表。
         myChart7.setOption(option7);
         myChart7.on('click', function(params) {
             //  alert(params.name);
             window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.name));
         });
         window.addEventListener("resize", function() {
             myChart7.resize();
         });
     }

     function echarts_8() {
         // 基于准备好的dom，初始化echarts实例
         var myChart8 = echarts.init(document.getElementById('echart8'));


         //指定图表的配置项和数据
         var option8 = { //指定图表的配置项和数据
             color: ['#0086e5', '#30c5ed', '#9fe7b8',
                 '#fedb5b', 'rgba(44,44,0,0.5)', 'rgba(33,33,30,0.5)',
                 'rgba(255,66,0,0.5)', 'rgba(155,23,31,0.5)', 'rgba(23,44,55,0.5)'
             ],
             //  配置标题组件

             //  backgroundColor: 'rgba(128, 128, 128, 0.1)', //rgba设置透明度0.1
             tooltip: { trigger: 'item', formatter: "{a} <br/>{b} : {c} ({d}%)" }, //配置提示框组件
             toolbox: {
                 left: 555,
                 top: 0,
                 feature: {
                     dataView: { readOnly: false },
                     restore: {},
                     saveAsImage: {}
                 }
             }, //配置工具箱组件
             legend: {
                 //orient: 'vertical',
                 top: '20',
                 left: 'center',
                 itemWidth: 10,
                 itemHeight: 10,
                 data: ['东部地区', '中部地区', '西部地区', '东北地区'],
                 textStyle: {
                     color: 'rgba(255,255,255,.5)',
                     fontSize: '12',
                 }
             }, //配置图例组件
             calculable: true,
             series: [ //配置数据系列
                 {
                     name: '漏斗图',
                     type: 'funnel',
                     left: 'center',
                     sort: 'descending', //金字塔:'ascending'; 漏斗图:'descending'
                     top: 100,
                     bottom: 20,
                     width: '80%',
                     min: 0,
                     max: 687552,
                     minSize: '0%', //设置每一块的最小宽度
                     maxSize: '100%', //设置每一块的最大，一次去除掉尖角
                     gap: 2, //设置每一块之间的间隔
                     label: { show: true, position: 'inside' }, //设置标签显示在里面|外面
                     labelLine: {
                         length: 10, //设置每一块的名字前面的线的长度
                         lineStyle: {
                             width: 1, //设置每一块的名字前面的线的宽度
                             type: 'solid' //设置每一块的名字前面的线的类型
                         }
                     },
                     itemStyle: {
                         normal: { //设置图形在正常状态下的样式 
                             label: { show: true, fontSize: 15, color: 'black', position: 'inside', },
                             borderColor: '#fff', //设置每一块的边框颜色
                             borderWidth: 0, //设置每一块边框的宽度
                             shadowBlur: 50, //设置整个外面的阴影厚度
                             shadowOffsetX: 0, //设置每一块的y轴的阴影
                             shadowOffsetY: 50, //设置每一块的x轴的阴影
                             shadowColor: 'rgba(128, 128, 128, 0.1)' //设置阴影颜色
                         }
                     },
                     //设置鼠标hover时高亮样式
                     emphasis: { label: { fontFamily: "楷体", color: '#fff', fontSize: 28 } },
                     data: [ //设置在漏斗图中展示的数据 
                         { value: 169910, name: '东北地区' }, { value: 563917, name: '中部地区' }, { value: 622187, name: '西部地区' }, { value: 687552, name: '东部地区' },

                         //  { value: 12005, name: '客户谈判' }, { value: 10634, name: '签订合同' },
                     ]
                 }
             ]
         };

         // 使用刚指定的配置项和数据显示图表。
         myChart8.setOption(option8);
         myChart8.on('click', function(params) {
             alert(params.name + "登记" + params.value + "个");
             window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.name));
         });
         myChart8.group = 'group1';
         echarts.connect('group1');

         window.addEventListener("resize", function() {
             myChart8.resize();
         });
     }
 })