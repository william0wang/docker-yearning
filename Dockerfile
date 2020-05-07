FROM alpine:3.11

LABEL maintainer="william0wang"

EXPOSE 8000

RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories
RUN mkdir /lib64 && ln -s /lib/libc.musl-x86_64.so.1 /lib64/ld-linux-x86-64.so.2
RUN apk add --no-cache tzdata bash screen
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
RUN echo "Asia/Shanghai" >> /etc/timezone
RUN echo 'hosts: files mdns4_minimal [NOTFOUND=return] dns mdns4' >> /etc/nsswitch.conf

COPY bin/juno  /opt/juno
COPY bin/Yearning  /opt/Yearning
COPY dist /opt/dist
COPY conf.toml /opt/conf.toml
COPY bin/run.sh  /opt/run.sh

WORKDIR /opt

ENTRYPOINT  ["/opt/run.sh"]
