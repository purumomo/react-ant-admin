# react-ant-admin

此框架使用与二次开发，前端框架使用react，UI框架使用ant-design，全局数据状态管理使用redux，ajax使用库为axios。用于快速搭建中后台页面。欢迎各位提[issue](https://github.com/kongyijilafumi/react-ant-admin/issues)
* [react](https://react.docschina.org/)
* [react-router-cache-route](https://www.npmjs.com/package/react-router-cache-route)
* [ant-design](https://ant.design/index-cn)
* [redux](https://redux.js.org/)
* [axios](http://www.axios-js.com/)

## 预览地址

[react-ant-admin](http://azhengpersonalblog.top/react-ant-admin/)

nodejs后台web服务:[react-ant-admin-server](https://gitee.com/kong_yiji_and_lavmi/react-ant-admin-server)
## 文档地址

[react-ant-admin文档地址](https://azhengpersonalblog.top/doc-react-ant-admin/)

更多建议欢迎骚扰~

[qq交流群:532948540](https://qm.qq.com/cgi-bin/qm/qr?k=Wo_kXUOA-mTBviZ6gF4H912AKdE5vTML&jump_from=webapi)

![qrcode](https://gitee.com/kong_yiji_and_lavmi/my-image/raw/master/qq.jpg)

欢迎各位提出建议与问题!


## 特性
- 菜单配置:扁平化数据组织,方便编写,存库,页面菜单,标题,侧边栏,顶部导航栏同步
- 页面懒加载:使用[@loadable/component](https://loadable-components.com/docs/getting-started/)来解决首次打开页面过慢的问题.
- Ajax请求：restful规范，自动错误提示，提示可配置；自动打断未完成的请求；
- 权限控制: 根据不用角色的功能类型显示菜单,路由页面拦截.
- 自定义主题，可以自己定义界面颜色。
- 代理转发，解决前端请求跨域问题。
- 路由自动生成，去中心化。

系统提供了一些基础的页面
- 登录页
- 详情页
- 表单页
- 列表页
- 权限管理
- 结果页

## 快速使用

1. 下载本项目到本地

```
D:> git clone https://github.com/kongyijilafumi/react-ant-admin.git //github地址 慢
D:> git clone https://gitee.com/kong_yiji_and_lavmi/react-ant-admin.git //码云地址 快

```

2. 安装依赖

```js
// npm 慢
npm i
// cnpm 国内镜像 快
cnpm i
```

3. 启动

```
npm run "start mock" // 启动本地mock数据 (暂时没有后台接口,请用此模式预览项目)
npm run start // 启动本地API接口来获取数据

浏览器打开  http://localhost:3000   即可
```
## 创建一个新的页面

1. 在src/pages文件夹下创建一个test.js文件,代码如下
```js
// 函数组件
import React from "react";

export default function Test() {
  return <div>test页面</div>;
}
// 类组件
import React from "react";

export default class Test extends React.Component {
  render() {
    return <div>test页面</div>;
  }
}

```

2. 在``src/router/route/index.js`文件里追加路由信息.代码如下

```js
import loadable from "@loadable/component";
import { Redirect } from "react-router-dom";
// .....
const Test = loadable(() => import("@pages/test")); // 支持路由懒加载
// 路由列表
const routerList = [
  {
    path: "/",
    key: "index",
    to: "/details/person",
    components: Redirect,
  },
  // ....
  {
    path: "/test", // 对应的路由
    key: "test",// 必要
    title: "test页面",// 标题
    components: Test,
  },
];

export default routerList;

```

3. 浏览器访问 http://localhost:3000/react-ant-admin/test 即可

## 创建一个菜单

该添加方式适用于 npm run "start mock" 启动的项目

1. 在``src/mock/index.js`` 找到``menu``变量,往里添加一条菜单信息.代码如下所示

```js
import dayjs from "dayjs";
let menu = [
   {
    title: "详情页",
    path: "/details",
    key: "details",
    parentKey: "",
    icon: "icon_edit",
    type: "1,0",
  },
  {
    title: "个人中心",
    path: "/person",
    key: "detailsPerson",
    parentKey: "details",
    icon: "icon_infopersonal",
    type: "0,1",
  },
  // .... 开始添加菜单信息 ....
  {
    title: "test",
    path: "/test",
    key: "test",
    parentKey: "",// 空表示 为主菜单而非子菜单
    icon: "icon_infopersonal",// 菜单图标
    type: "0,1", // 访问权限,自定义,当前项目 0为管理员,1为普通用户.原始数据为字符串形式,会中途进行转化为数组形式["0","1"]
  }
  // .....
]

```

2. 由于菜单会走本地会话存储``window.sessionStorage``,所以保存代码后需要关闭当前窗口,重新打开地址  http://localhost:3000/react-ant-admin  

>打开之后,会发现菜单会多出一个``test``栏目,点击会打开之前我们创建的test页面.这样就完成了菜单和页面的编写.




## 项目截图

* 登录

![登录](https://gitee.com/kong_yiji_and_lavmi/my-image/raw/master/react-ant-admin-doc01.png)

* 详情页

![详情页](https://gitee.com/kong_yiji_and_lavmi/my-image/raw/master/react-ant-admin-detail.png)

* 列表

![表格](https://gitee.com/kong_yiji_and_lavmi/my-image/raw/master/react-ant-admin-list.png)

* 权限管理

![权限管理](https://gitee.com/kong_yiji_and_lavmi/my-image/raw/master/react-ant-admin-power.png)

* 结果页

![结果页](https://gitee.com/kong_yiji_and_lavmi/my-image/raw/master/react-ant-admin-result1.png)





