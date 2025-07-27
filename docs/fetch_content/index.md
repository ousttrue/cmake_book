# FetchContent

zip, tar などを Download して展開する、もしくは git clne などする。

- [cmake で依存ライブラリをダウンロードする #CMake - Qiita](https://qiita.com/ousttrue/items/4fa7a786a6c51e9f11f0)

```cmake
include(FetchContent)
```

:::tip
https://cmake.org/cmake/help/latest/module/FetchContent.html#variable:FETCHCONTENT_TRY_FIND_PACKAGE_MODE

find_packge して、無かったら `fetch_content` する?
:::

:::tip Compatibility with CMake < 3.5 has been removed from CMake
cmake 4.0 で `cmake<3.5` がエラーになる。
FetchContent する project の表記が古い場合には以下のようにして回避できる。

```cmake
FetchContent_Declare(
  plog URL https://github.com/SergiusTheBest/plog/archive/refs/tags/1.1.10.zip)

set(CMAKE_POLICY_VERSION_MINIMUM 3.5)
FetchContent_MakeAvailable(plog)
```

:::
