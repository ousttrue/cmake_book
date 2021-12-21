# basic

## minimal

```CMakeLists.txt
# project
CMAKE_MINIMUM_REQUIRED(VERSION 3.20.0)
PROJECT(hello VERSION 0.1.0)

# target
ADD_EXECUTABLE(${PROJECT_NAME}
  main.cpp
)
```

* CMakeLists.txt
* main.cpp

## add_subdirectory, subdirs 例

フォルダ毎に `CMakeLists.txt` を分割する。

```CMakeLists.txt
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

```
# target
ADD_LIBRARY(hello STATIC
  hello.cpp
)
```

### src

* src
    * CMakeLists.txt
    * main.cpp

```
# target
ADD_EXECUTABLE(${PROJECT_NAME}
  main.cpp
)

TARGET_ADD_LIBRARIES(${PROJECT_NAME}
    hello
)
```
