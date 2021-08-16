# interface

header only のライブラリやビルド済みのライブラリを記述する

```
# Catch2 header only
add_library(catch INTERFACE)
target_include_directories(catch INTERFACE ${CMAKE_CURRENT_LIST_DIR})
target_compile_options(catch INTERFACE /wd4996)
```

```
# ASIO header only
add_library(asio INTERFACE)
target_include_directories(asio INTERFACE asio/asio/include)
```
