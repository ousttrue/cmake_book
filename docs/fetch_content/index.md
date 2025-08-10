# FetchContent

zip, tar などを Download して展開する、もしくは git clone などする。

- [cmake で依存ライブラリをダウンロードする #CMake - Qiita](https://qiita.com/ousttrue/items/4fa7a786a6c51e9f11f0)

```cmake
include(FetchContent)
```

## CMakeLists.txt がある場合

### FetchContent_MakeAvailable

```cmake
FetchContent_Declare(zlib URL https://zlib.net/zlib-1.3.1.tar.gz)
FetchContent_MakeAvailable(zlib)
```

## CMakeLists.txt が無い場合

### FetchContent_Populate

```cmake
FetchContent_Populate(
  stb URL https://github.com/nothings/stb/archive/refs/heads/master.zip)
add_library(stb INTERFACE)
target_include_directories(stb INTERFACE ${stb_SOURCE_DIR})
target_compile_definitions(stb INTERFACE STB_IMAGE_IMPLEMENTATION)
```

## その他

:::tip
https://cmake.org/cmake/help/latest/module/FetchContent.html#variable:FETCHCONTENT_TRY_FIND_PACKAGE_MODE

find_packge して、無かったら `fetch_content` する?
:::
