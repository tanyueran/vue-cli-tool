# [%projectName%]

> 推荐使用yarn

## 安装依赖包
```
yarn install
```

### 启动api开发模式
```
yarn serve
```

### 启动本地模拟数据开发模式
```
yarn run serve-mock
```

### 打包
```
yarn run build-pro
```

### nginx 配置说明
```text
http {
    include       mime.types;
    default_type  application/octet-stream;

    sendfile        on;
    
		#开启压缩
		gzip  on;
		gzip_min_length 1k;
		gzip_buffers 4 16k;
		gzip_comp_level 2;
		gzip_types text/plain application/javascript application/css  text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;
		gzip_vary off;
		gzip_disable "MSIE [1-6]\.";

    server {
    	listen       3001;
    	server_name  localhost;
    	add_header   'Access-Control-Allow-Origin' '*';
    
    	#静态文件  [%projectName%] 配置的基路由地址
    	#如果有修改[%projectName%]的需要，修改此处 和 vue.config.js中的[%projectName%]后重新打包即可
    	#访问的时候是：http://X.X.X.X:3001/[%projectName%]/index.html
    	location /[%projectName%] {
    		alias   html/[%projectName%];
    		index  	index.html index.htm;
    		try_files $uri $uri/ /[%projectName%]/index.html;
            location ~.*\.(html)$ {
                add_header Cache-Control "no-cache, no-store";
            }
    	}
    
    	#代理
    	location /api {
    		rewrite ^/api/(.*)$ /$1 break;
    		proxy_pass  http://192.168.1.11:8001/;
    	}
    }
```
