# find_package

```CMake
find_package(Boost REQUIRED)
```

Unix 系のシステム(/usr とか)にライブラリーがインストールされている場合は使えるのだけど、
Windows ではつらい。
どこから find しているかが不明瞭になるのである。

`include_dir`, `defines`, `lib_dir`, `libraries` の4つが揃えば大抵のライブラリーは使えるので、
うまくいかないときは `find_package` は諦める方が速い。

INTERFACE でビルド済みライブラリを使えないかやってみるとよい。

```CMake
add_library(boost INTERFACE)
target_include_directories(
  boost INTERFACE ${CMAKE_CURRENT_LIST_DIR}/../include/boost-1_78)
```

