https://cmake.org/cmake/help/latest/command/add_library.html#interface-libraries

header only のライブラリで、`dll` や `so` への `link` が発生しない場合に使う。

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
