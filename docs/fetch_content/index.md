# FetchContent

https://cmake.org/cmake/help/latest/module/FetchContent.html

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

:::note
subfolder は SYSTEM で対応できるぽい？

```cmake
FetchContent_Declare(name 
    URL https://host/archiv.zip
    SYSTEM subfolder/to/cmakelists
)
```

:::

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

:::warning
DOWNLOAD_EXTRACT_TIMESTAMP

```cmake
include(FetchContent)
FetchContent_Declare(
  googletest
  DOWNLOAD_EXTRACT_TIMESTAMP ON  # 追加
  URL https://github.com/google/googletest/archive/03597a01ee50ed33e9dfd640b249b4be3799d395.zip
)
```

[Cmakeにて'The DOWNLOAD_EXTRACT_TIMESTAMP option was not given and policy CMP0135 is not set.'という警告が表示されたことについて #C++ - Qiita](https://qiita.com/kai-tokei/items/ecab1a2c78f8bb3cfe1f)

:::

:::tip
https://cmake.org/cmake/help/latest/module/FetchContent.html#variable:FETCHCONTENT_TRY_FIND_PACKAGE_MODE

find_packge して、無かったら `fetch_content` するには？
:::
