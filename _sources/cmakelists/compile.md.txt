# Compile

`INCLUDE_DIRECTORIES`, `ADD_DEFINITIONS`, `ADD_COMPILE_OPTIONS` などは古いやり方でプロジェクト全体に対するグローバル設定となる。
このコマンドより後の `add_executable`, `add_library` に対して効果がある。
複数のターゲットにまとめて設定したいときに使うかもしれない。

対して `TARGET_INCLUDE_DIRECTORIES`, `TARGET_COMPILE_DEFINITIONS`, `TARGET_COMPILE_OPTIONS` は、 `add_executable`, `add_library` で作成した `target` に対して設定する。

| global              | target                     |
|---------------------|----------------------------|
| ADD_COMPILE_OPTIONS | TARGET_COMPILE_OPTIONS     |
| INCLUDE_DIRECTORIES | TARGET_INCLUDE_DIRECTORIES |
| ADD_DEFINITIONS     | TARGET_COMPILE_DEFINITIONS |

## options

コンパイラのコマンドラインオプションを設定する。
include や definition などは専用のコマンドがあるのでそちらを使った方が良い。

### project

```CMake
# vc の警告抑止
SET(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} /wd4267 /wd4530 /wd4312")
# 👇 ADD_COMPILE_OPTIONS の方がよい
ADD_COMPILE_OPTIONS(/wd4267 /wd4530 /wd4312)

ADD_COMPILE_OPTIONS("$<$<C_COMPILER_ID:MSVC>:/utf-8>")
ADD_COMPILE_OPTIONS("$<$<CXX_COMPILER_ID:MSVC>:/utf-8>")

add_compile_options(
    "$<$<CONFIG:Debug>:/MTd>"
    "$<$<CONFIG:RelWithDebInfo>:/MT>"
    "$<$<CONFIG:Release>:/MT>"
    "$<$<CONFIG:MinSizeRel>:/MT>"
)

if("${CMAKE_CXX_COMPILER_ID}" STREQUAL "GNU")
  # using GCC
  add_compile_options(-Wall -Wno-unknown-pragmas -Wno-switch)
elseif("${CMAKE_CXX_COMPILER_ID}" STREQUAL "MSVC")
  # using Visual Studio C++
  # cp932 の Windows でutf-8 のソースコードを使う
  add_compile_options(/source-charset:utf-8)
endif()
```

### target

```CMake
TARGET_COMPILE_OPTIONS(${TARGET_NAME}
PRIVATE
    /wd4251 
    /wd4996 
    /wd4005
)
```

## c++ standard

project

```CMake
SET(CMAKE_CXX_STANDARD 17)
SET(CMAKE_CXX_STANDARD 20)
```

target

```CMake
SET_PROPERTY(TARGET ${TARGET_NAME} PROPERTY CXX_STANDARD 20)
```

## include

project

```CMake
INCLUDE_DIRECTORIES(libpath/include)
```

target

```CMake
TARGET_INCLUDE_DIRECTORIES(HELLO PUBLIC
    ${BOOST_DIR}
)
```

## definitions

２つのコマンドの `-D` の有無に注意。

project

```CMake
ADD_DEFINITIONS(-DHOGE)
```

target

```CMake
TARGET_COMPILE_DEFINITIONS(${TARGET_NAME}
PRIVATE
    DLL_EXPORT
PUBLIC
    WIN32
    _WINDOWS
    USING_GENERATED_CONFIG_H
    $<$<NOT:$<CONFIG:Debug>>:NDEBUG>
    $<$<CONFIG:Debug>:_DEBUG>
)        

# -Dなし
TARGET_COMPILE_DEFINITIONS(TARGET PUBLIC
    WITH_OPENCV2=1
    )
```

## precompile header

```CMake
target_precompile_headers(Nvy PUBLIC
    <cassert>
    <cmath>
    <cstdint>
    <cstdio>
    <windows.h>
    <d3d11_4.h>
    <d2d1_3.h>
    <d2d1_3helper.h>
    <dwrite_3.h>
    <shellscalingapi.h>
    <dwmapi.h>
    
    "src/third_party/mpack/mpack.h"

    "src/common/dx_helper.h"
    "src/common/mpack_helper.h"
    "src/common/vec.h"
    "src/common/window_messages.h"
)
```
