# FetchContent

Windows では find_package よりもこっちの方が分かりやすい。

- [cmake で依存ライブラリをダウンロードする #CMake - Qiita](https://qiita.com/ousttrue/items/4fa7a786a6c51e9f11f0)

```cmake
include(FetchContent)
```

:::tip
https://cmake.org/cmake/help/latest/module/FetchContent.html#variable:FETCHCONTENT_TRY_FIND_PACKAGE_MODE

find_packge して、無かったら fetch_content する?
:::
