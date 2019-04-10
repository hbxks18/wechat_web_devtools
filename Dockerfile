# canyoutle/wxdt
# 开发者工具各版本docker image
# Usage:
# docker run -P -p 6080:80 -v $PWD:/weapps canyoutle/wxdt

FROM dorowu/ubuntu-desktop-lxde-vnc:bionic

RUN sed -i 's#http://\(archive\|security\).ubuntu.com/#http://mirrors.aliyun.com/#' /etc/apt/sources.list \
  && cat /etc/apt/sources.list
RUN apt-get update \
  && apt-get install -y --no-install-recommends --allow-unauthenticated \
    wget \
    gpg-agent \
    dbus \
    libgconf-2-4 \
    build-essential \
    ca-certificates \
    openssl \
    gnupg2 \
    git \
    npm \
    libcairo2-dev \
    libjpeg-dev \
    libpango1.0-dev \
    libgif-dev \
    librsvg2-dev

ENV LANG C.UTF-8
ENV DISPLAY :1.0
ENV HOME /root
ENV PATH="/wxdt/bin:${PATH}"
RUN echo "Asia/Shanghai" > /etc/timezone
RUN dpkg-reconfigure -f noninteractive tzdata

COPY . /wxdt

# 将开发者工具加入supervisord
RUN echo "\n\
[program:wxdt]\n\
priority=25\n\
directory=/wxdt/bin/\n\
command=bash wxdt start\n\
stderr_logfile=/var/log/wxdt.err.log\n\
stdout_logfile=/var/log/wxdt.out.log\n\
" >> /etc/supervisor/conf.d/supervisord.conf

# 将 /startup.sh 转到后台运行
RUN sed -i \
    -e s%'ln -s '%'ln -sf '% \
    /startup.sh

# 安装开发者工具，然后删除下载的文件
RUN update_nwjs.sh \
    && rm -rf /tmp/wxdt_xsp

# nginx反向代理
RUN echo "\n\
server {\n\
listen       8848;\n\
server_name  localhost;\n\
client_max_body_size 1024M;\n\
location / {\n\
proxy_pass http://127.0.0.1:8000;\n\
proxy_redirect  default;\n\
}\n\
}\n\
" >> /etc/nginx/conf.d/sf.conf

# 安装监听库
RUN [ "git", "clone", "https://github.com/hbxks18/Listen_Jenkins_request.git" ]
# 安装守护进程pm2
RUN [ "npm", "install", "pm2", "-g" ]


ENTRYPOINT [ "/wxdt/bin/docker-entrypoint.sh" ]
