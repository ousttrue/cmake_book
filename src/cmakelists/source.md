# Source

## executable

実行ファイルを作る

### WinMain

```CMake
ADD_EXECUTABLE(hello WIN32 ${SRC})
```

## lib

```CMake
ADD_LIBRARY(lib_name STATIC
src.cpp
)
```

### static

デフォルト。省略してもよい。

```CMake
ADD_LIBRARY(lib_name STATIC
src.cpp
)
```

### shared

DLLを作る。

```CMake
ADD_LIBRARY(lib_name SHARED
src.cpp
)
```

### interface

header only のライブラリやビルド済みのライブラリを記述する。

```CMake
# Catch2 header only
add_library(catch INTERFACE)
target_include_directories(catch INTERFACE ${CMAKE_CURRENT_LIST_DIR})
target_compile_options(catch INTERFACE /wd4996)
```

```CMake
# ASIO header only
add_library(asio INTERFACE)
target_include_directories(asio INTERFACE asio/asio/include)
```

## target_source

`add_executable`, `add_library` に対してあとからソースを追加する。

```CMake
target_sources(glfw PRIVATE "${CMAKE_CURRENT_BINARY_DIR}/glfw_config.h")
```

## glob

変数にソースを格納する

```CMake
FILE(GLOB SRC
    *.cpp
    *.h
) 
 
ADD_EXECUTABLE(hello ${SRC})
```

