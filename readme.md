# express-mockjs

> 能够本地搭建的mock服务器，最简单的使用

## 使用 

> npm install

> npm run dev (or) npm run start

## 用途

使用express搭建的简单服务器，mockjs来模拟数据
不与数据库交互，直接写在源代码里

> 开箱即用

## 语法

> 参考文档 http://mockjs.com/examples.html
> 然后在 routers/mock.js 下开始写

示例：
~~~js
Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1
    }]
})
~~~
