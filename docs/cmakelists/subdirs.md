---
sidebar_position: 2
---

# Subdirs

CMakeLists.txt をディレクトリで分割する。

## add_subdirectory, subdirs 例

フォルダ毎に `CMakeLists.txt` を分割する。

```CMake
# project
CMAKE_MINIMUM_REQUIRED(VERSION 3.20.0)
PROJECT(hello VERSION 0.1.0)

ADD_SUBDIRECTORY(hello)
ADD_SUBDIRECTORY(src)

# 同じ

SUBDIRS(hello src)
```

* CMakeLists.txt

### hello

* hello
    * CMakeLists.txt
    * hello.cpp

```CMake
# target
ADD_LIBRARY(hello STATIC
  hello.cpp
)
```

### src

* src
    * CMakeLists.txt
    * main.cpp

```CMake
# target
ADD_EXECUTABLE(${PROJECT_NAME}
  main.cpp
)

TARGET_ADD_LIBRARIES(${PROJECT_NAME}
    hello
)
```
