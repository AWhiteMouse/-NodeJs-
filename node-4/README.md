# node-4 非阻塞

## 启动

```shell
node index.js
```

## 操作

在浏览器中同时开两个窗口，两个窗口的地址栏分别输入`http://localhost:3000/start`、`http://localhost:3000/upload`。然后**先打开start页面，再打开upload**。

可以发现start页面会在10s后加载成功，而upload页面则无需等待。

这是因为使用了child_process的exec函数创建了子进程，通过`多进程`来实现对多核CPU的利用，也就是`非阻塞`操作。
