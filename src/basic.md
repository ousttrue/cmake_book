# Basic

## SOURCE_DIR と BUILD_DIR

{doc}`commandline`

```
$ cmake [<options>] -S <path-to-source> -B <path-to-build> -G Ninja -DCMAKE_BUILD_TYPE=Release
```

### SOURCE_DIR

{doc}`cmakelists/variables`

トップレベルの `CMakeLists.txt` のあるフォルダ。
コマンドラインの `-S` 引き数。
`${CMAKE_SOURCE_DIR}`

### BUILD_DIR

{doc}`cmakelists/variables`

一時ファイルやビルドファイルを展開するフォルダ
コマンドラインの `-B` 引き数。
`${CMAKE_BUILD_DIR}`

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

* CMakeLists.txt
* main.cpp

## CMake のコマンドに大文字小文字の区別はない

```cmake
set(hoge x)

# 同じ

SET(hoge x)
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
