# 使用nginx作为基础镜像
FROM nginx:1.27-perl

# 将本地的Nginx配置文件复制到容器中的/etc/nginx/conf.d/default.conf
COPY ./deploy/nginx.conf /etc/nginx/conf.d/default.conf

# 将本地的dist目录中的内容复制到Nginx的默认站点目录
COPY dist/ /usr/share/nginx/html

# 暴露Nginx的默认端口
EXPOSE 80