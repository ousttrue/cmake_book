# CMakeBook

CMake する備忘録。

https://cmake.org/

- https://cmake.org/documentation/

```cmake
# project
cmake_minimum_required(VERSION 3.20.0)
project(hello VERSION 0.1.0)

set(CMAKE_CXX_STANDARD 17)

# for compile_commands.json
set(CMAKE_EXPORT_COMPILE_COMMANDS 1)

# for build/.gitignore
if(NOT PROJECT_SOURCE_DIR STREQUAL PROJECT_BINARY_DIR)
  file(
    GENERATE
    OUTPUT ${PROJECT_BINARY_DIR}/.gitignore
    CONTENT "*")
endif()

# target
set(TARGET_NAME ${PROJECT_NAME})
add_executable(${TARGET_NAME} main.cpp)
```

:::tip ./vscode/settings.json

```json
{
  "clangd.arguments": [
    "--compile-commands-dir=${workspaceFolder}/build",
    "--header-insertion=never",
    "--clang-tidy",
    "--enable-config"
  ],
  "cmake.generator": "Ninja",
  "cmake.configureArgs": ["-DCMAKE_EXPORT_COMPILE_COMMANDS=1"]
}
```

:::

## CMAKE_POLICY_VERSION_MINIMUM

:::tip Compatibility with CMake < 3.5 has been removed from CMake
cmake 4.0 で `cmake<3.5` がエラーになる。
FetchContent する project の表記が古い場合には以下のようにして回避できる。

```cmake
set(CMAKE_POLICY_VERSION_MINIMUM 3.5)
# for
# CMake Error at build/_deps/xxx-src/CMakeLists.txt:1 (cmake_minimum_required):
#  Compatibility with CMake < 3.5 has been removed from CMake.
```

:::

いずれ `3.10` も

```cmake
set(CMAKE_POLICY_VERSION_MINIMUM 3.10)
# for
# CMake Deprecation Warning at build/_deps/xxx-src/CMakeLists.txt:1 (cmake_minimum_required):
#   Compatibility with CMake < 3.10 will be removed from a future version of CMake.
```

### CMake のコマンド(関数名)に大文字小文字の区別はない

```cmake
set(hoge x)

# 同じ

SET(hoge x)
```

### 引数(定数)の大文字小文字の区別はある

```cmake
# Win32 はだめ
ADD_EXECUTABLE(hello WIN32 ${SRC})

# Private はだめ
TARGET_LINK_LIBRARIES(EXE_NAME PRIVATE LIB_NAME)
```
