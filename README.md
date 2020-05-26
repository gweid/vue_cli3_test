#### 目录结构描述
```
├── public  
├── src                         
│   ├── api                     // api 集中管理
│   ├── assets                  // 静态资源
│   ├── common                  // 公共文件
│   │   ├── http.js             // 封装请求
│   │   ├── storage.js          // 本地缓存
│   │   ├── eventBus.js         // eventBus
│   │   ├── tool.js             // 工具函数
│   ├── components              // 组件
│   ├── config                  // 配置文件
│   ├── filters                 // 过滤器
│   ├── mixinx                  // 混入
│   ├── pages                   // 页面
│   ├── plugins                 // 插件，例如 element ui
│   ├── router                  // 路由
│   ├── store                   // vuex 状态管理
│   ├── style                   // 公共样式
│   ├── App.vue                 
│   └── main.js
├── babel.config.js             
├── postcss.config.js           
├── vue.config.js 
```