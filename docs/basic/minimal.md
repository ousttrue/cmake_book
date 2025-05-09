# Minimal

## SOURCE_DIR と BUILD_DIR

[/commandline](/docs/commandline)

```
$ cmake [<options>] -S <path-to-source> -B <path-to-build> -G Ninja -DCMAKE_BUILD_TYPE=Release
```

### SOURCE_DIR

[/cmakelists/variables](/docs/cmakelists/variables)

トップレベルの `CMakeLists.txt` のあるフォルダ。
コマンドラインの `-S` 引き数。
`${CMAKE_SOURCE_DIR}`

### BUILD_DIR

[/cmakelists/variables](/docs/cmakelists/variables)

一時ファイルやビルドファイルを展開するフォルダ
コマンドラインの `-B` 引き数。
`${CMAKE_BUILD_DIR}`

## BuildType

https://cmake.org/cmake/help/latest/variable/CMAKE_BUILD_TYPE.html

`-DCMAKE_BUILD_TYPE=Release`

- Debug
- Release
- RelWithDebInfo
- MinSizeRel

## minimal

```CMake
# project
CMAKE_MINIMUM_REQUIRED(VERSION 3.20.0)
PROJECT(hello VERSION 0.1.0)

# target
ADD_EXECUTABLE(${PROJECT_NAME}
  main.cpp
)
```

- CMakeLists.txt
- main.cpp

## CMake のコマンドに大文字小文字の区別はない

```cmake
set(hoge x)

# 同じ

SET(hoge x)
```

## 引数(定数)の大文字小文字の区別はある
ADD_EXECUTABLE(hello WIN32 ${SRC}) # WIN32

TARGET_LINK_LIBRARIES(EXE_NAME PRIVATE LIB_NAME) # PRIVATE
```

## 変数

スペースを含まない場合は、クォート不要。

```cmake
SET(SRC main.cpp)
SET(SRC "main.cpp")

# 使う ${VAR_NAME} とする

ADD_EXECUTABLE(hello
${SRC}
)

# ${PROJECT_NAME}
# ${CMAKE_CURRENT_LISTS_DIR}
# のような自動定義の変数も同様
```

## 環境変数

`$ENV{VULKAN_SDK}`

`ENV` は大文字で。
