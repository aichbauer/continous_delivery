# 01-hello-world

## Getting started

To run the 01-hello-world application:

```sh
# build image
$ sudo docker build -t hello-world .

# run container
$ sudo docker run -p 3000:3000 --name hello-world-container hello-world
```

Open http://localhost:3000 in your favorite browser. The app should be running.

## Stop and remove container and image

To stop the container:

```sh
# stop container
$ sudo docker stop hello-world-container
```

To remove the container:

```sh
# remove container
$ sudo docker rm hello-world-container
```

To remove the image:

```sh
# remove container
$ sudo docker rmi hello-world
```