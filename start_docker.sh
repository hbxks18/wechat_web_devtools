docker stop wxdt
docker rm -f wxdt
docker rmi -f wechat_devtools:hbx
docker build -t wechat_devtools:sf .
docker run -d --name wxdt -p 6080:80 -p 8848:8848 -v /Users/sf/.jenkins/workspace:/projects wechat_devtools:sf