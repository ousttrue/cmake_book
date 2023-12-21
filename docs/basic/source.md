---
sidebar_position: 2
---

# Source

## executable

実行ファイルを作る

### WinMain

```CMake
ADD_EXECUTABLE(hello WIN32 ${SRC})
```

## lib

```CMake
ADD_LIBRARY(lib_name STATIC
src.cpp
)
```

### STATIC

デフォルト。省略してもよい。

```CMake
ADD_LIBRARY(lib_name STATIC
src.cpp
)
```

### SHARED

DLLを作る。

```CMake
ADD_LIBRARY(lib_name SHARED
src.cpp
)
```

### INTERFACE

header only のライブラリやビルド済みのライブラリで、`dll` や `so` のコピーが発生しない場合に使用する。

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

### SHARED IMPORTED

ビルド済みのDLLで、 `dll` を `bin` にコピーしたり、`so` を　`lib` にコピーしたい場合に使う。

Android NDK で使う場合がある。
https://developer.android.com/studio/projects/configure-cmake?hl=ja

`SHARED IMPORTED` を指定すると、何故か `target_include_directories` などが使えなくなる。
代替として、 `set_target_properties` や `set_property` を使う。

```CMake
add_library(openxr_loader SHARED IMPORTED)
set_target_properties(
  openxr_loader
  PROPERTIES
    INTERFACE_INCLUDE_DIRECTORIES ${OPENXR_SDK_DIR}/include
    IMPORTED_LOCATION
    ${MOBILE_SDK_DIR}/OpenXR/Libs/Android/${ANDROID_ABI}/Release/libopenxr_loader.so
)
```

`INTERFACE_INCLUDE_DIRECTORIES` と `IMPORTED_LOCATION` の例

```CMake
add_library(openxr_loader SHARED IMPORTED)
set_property(
  TARGET openxr_loader
  PROPERTY
    IMPORTED_LOCATION
    ${OXR_LOADER_DIR}/OpenXR/Libs/Android/${ANDROID_ABI}/${CMAKE_BUILD_TYPE}/libopenxr_loader.so
)
```

`IMPORTED_LOCATION` の例

`libopenxr_loader.so` がビルド済みで `CMAKE_LIBRARY_OUTPUT_DIRECTORY(lib)` にコピーしたい。

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
