一.初始化项目
1.安装了最新稳定版node
2.全局安装脚手架
cnpm i ionic cordova -g
3.新建项目 (tabs,还有另外两种选择)
ionic start XXX tabs
4.启动项目
ionic serve

二.使用echarts
1.安装echarts和ngx-echarts
cnpm install echarts --save
cnpm install ngx-echarts --save
2.在angular.json中引入
 "scripts": [
              "node_modules/echarts/dist/echarts.min.js"
            ]
3.在使用模块中引入NgxEchartsModule并注册
import {NgxEchartsModule} from 'ngx-echarts'
4.页面中直接使用,前提配置好chartOption
<!-- <div echarts [options]="chartOption" class="demo-chart"></div> -->


