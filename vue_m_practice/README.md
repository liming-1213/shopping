# vue_m_parctice

### 一、初始化

#### 1.初始化项目

```shell
vue init webpack vue_m_parctice
```

![](media\01.png)

#### 2.关闭ESLint语法检测规则

##### 2.1 webpack.base.conf.js

注释掉以下代码

```js
module: {
    rules: [
        // ...(config.dev.useEslint ? [createLintingRule()] : []),
    ]
}
```

##### 2.2 config/index.js

```js
useEslint: false,
```

### 二、顶部导航栏

#### 使用 Mint UI 的 Header

```shell
npm install mint-ui -S
```

```js
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);
```

### 三、底部选项卡

#### 使用 MUI 的 NavBar

**GitHub：**https://github.com/dcloudio/mui

![](media\02.png)

![](media\03.png)

#### 导入 css

```js
import '@/lib/mui/css/mui.min.css'
import '@/lib/mui/css/icons-extra.css'
```

### 四、页面切换动画

transition + 动画钩子

- 处理滚动条
- 处理离场动画---不占位

### 五、Home

#### 1.使用 Mint UI 的 Swipe

#### 2.使用 MUI 的 Grid

### 六、新闻列表

#### 1.使用 MUI 的 MediaList

#### 2.使用 axios 请求数据

##### 2.1 安装

```shell
npm i axios
```

##### 2.2 导入

```js
import axios from 'axios'
// 在Vue原型上添加axios
Vue.prototype.$axios = axios
```

##### 2.3 请求数据

```js
getNewsList() {
    this.$axios.get('/api/getnewslist')
        .then(result => {
        if(result.data.status === 0) {
            this.newsList = result.data.message
        }
    })
}
```

##### 2.4 初始化数据

```js
created() {
    this.getNewsList()
}
```

##### 2.5 遍历渲染新闻列表

##### 2.6 处理样式

##### 2.7 使用 Moment.js 格式化时间

###### 2.7.1 安装

```shell
npm install moment --save
```

###### 2.7.2 导入

```js
import moment from 'moment'
```

###### 2.7.3 设置全局过滤器格式化时间

```js
Vue.filter('dateFormat', function(dataStr, pattern = "YYYY-MM-DD hh:mm:ss") {
    return moment(dataStr).format(pattern)
})
```

###### 2.7.4 格式化时间

```html
<span>发表时间：{{ item.add_time | dateFormat("YYYY-MM-DD") }}</span>
```

### 七、Vue-devtools

#### 1.应用商店安装

https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd

#### 2.本地安装

【右上角三个点】→【设置】→【扩展程序】

![](media\04.png)

### 八、新闻列表

#### 1.路由配置id参数

#### 2.根据id1请求数据

#### 3.渲染

### 九、封装公共【评论】组件

#### 1.common目录下新建Comment.vue

#### 2.NewsList中导入Comment并注册

#### 3.使用Comment组件

#### 4.Comment

##### 4.1 发表评论 --- 非空校验

##### 4.2 加载更多

pageIndex++

拼接数据，重新渲染























