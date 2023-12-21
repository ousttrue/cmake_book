---
sidebar_position: 3
---

# Android NDK

android NDK 付属のコンパイラで cross build する。

# CMAKE_TOOLCHAIN_FILE

```
-DCMAKE_TOOLCHAIN_FILE=${HOME}/Android/Sdk/ndk/22.1.7171670/build/cmake/android.toolchain.cmake
```

## VSCode 設定例

```json
{
    "cmake.generator": "Ninja",
    "cmake.configureSettings": {
        "CMAKE_TOOLCHAIN_FILE": "${env:ANDROID_HOME}/ndk/21.0.6113669/build/cmake/android.toolchain.cmake",
        "CMAKE_EXPORT_COMPILE_COMMANDS": "ON",
        "ANDROID_PLATFORM": "android-23",
        "ANDROID_ABI": "armeabi-v7a",
        "CMAKE_ANDROID_ARCH_ABI": "armeabi-v7a",
    },
    "clangd.arguments": [
        "--compile-commands-dir=${workspaceFolder}/build"
    ],
}
```
