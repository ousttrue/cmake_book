# Source

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
