https://cmake.org/cmake/help/latest/command/add_library.html#imported-libraries

ビルド済みのライブラリ。
ビルド結果をあらわす単一の lib, so, dll を IMPORTED_LOCATION property で指定する。
その他複数の lib 群を足す場合は、 IMPORTED_LINK_INTERFACE_LIBRARIES で追加。

:::danger
IMPORTED target は何故か directory スコープ。
だまって消える。エラーとか出ない。

https://stackoverflow.com/questions/9628350/how-to-modify-scope-of-imported-library-using-cmake

GLOBAL 必用
:::

:::warning
`IMPORTED` を指定すると、何故か `target_include_directories` などが使えなくなる。
`set_target_properties` や `set_property` を使う。

:::

#### property: IMPORTED_LOCATION

必須? property

:::tip Android NDK の例

https://developer.android.com/studio/projects/configure-cmake?hl=ja

```cmake
# Adds the output of the additional CMake build as a prebuilt static
# library and names it lib_gmath.
add_library( lib_gmath STATIC IMPORTED )
set_target_properties( lib_gmath PROPERTIES IMPORTED_LOCATION
                       ${lib_build_DIR}/${ANDROID_ABI}/lib_gmath.a )
include_directories( ${lib_src_DIR}/include ) # target_include_directories を回避しているぽい
```

:::

:::tip RELEASE build しかないとき
DEBUG にも Rlease と同じものを指定してしまう。
:::

#### property: INTERFACE_INCLUDE_DIRECTORIES

target_include_directories の代替

```CMake
add_library(openxr_loader SHARED IMPORTED GLOBAL) # GLOBAL が無いとディレクトリスコープ。
set_target_properties(
  openxr_loader
  PROPERTIES
    INTERFACE_INCLUDE_DIRECTORIES ${OPENXR_SDK_DIR}/include
    IMPORTED_LOCATION
    ${MOBILE_SDK_DIR}/OpenXR/Libs/Android/${ANDROID_ABI}/Release/libopenxr_loader.so
)
```

#### property: IMPORTED_LINK_INTERFACE_LIBRARIES

target_link_libraries の代替

- https://stackoverflow.com/questions/36922635/cmake-add-dependency-to-imported-library

```cmake
  set_property(
    TARGET ${TARGET_NAME}
    PROPERTY INTERFACE_LINK_LIBRARIES
             $ENV{VULKAN_SDK}/Lib/shaderc_utild.lib
             $ENV{VULKAN_SDK}/Lib/SPIRV-Toolsd.lib
             $ENV{VULKAN_SDK}/Lib/SPIRV-Tools-optd.lib
             $ENV{VULKAN_SDK}/Lib/glslangd.lib)
```

:::danger `set_target_properties` called with incorrect number of arguments.

set_target_properties は property が複数とは言ったが、property の値が複数とは言っていない。
値が複数のときは set_property ならできた。

```cmake
  # set_target_properties called with incorrect number of arguments
  set_target_properties(
    ${TARGET_NAME}
    PROPERTIES INTERFACE_LINK_LIBRARIES
               $ENV{VULKAN_SDK}/Lib/shaderc_utild.lib
               $ENV{VULKAN_SDK}/Lib/SPIRV-Toolsd.lib
               $ENV{VULKAN_SDK}/Lib/SPIRV-Tools-optd.lib
               $ENV{VULKAN_SDK}/Lib/glslangd.lib)
```

:::
