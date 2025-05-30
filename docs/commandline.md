# Commandline

## 概念

### SOURCE_DIR

[/variables/variables](/docs/variables)

トップレベルの `CMakeLists.txt` のあるフォルダ。
コマンドラインの `-S` 引き数。
`${CMAKE_SOURCE_DIR}`

### BUILD_DIR

[/variables/variables](/docs/variables)

一時ファイルやビルドファイルを展開するフォルダ
コマンドラインの `-B` 引き数。
`${CMAKE_BUILD_DIR}`

## BuildType

https://cmake.org/cmake/help/latest/variable/CMAKE_BUILD_TYPE.html

`-DCMAKE_BUILD_TYPE=Release`

- Debug(default)
- Release
- RelWithDebInfo
- MinSizeRel

## steps

configure, build, install の 3 step. install は使わないことも多い。

### configure step

```
$ cmake -S . -B build -G Ninja -DCMAKE_BUILD_TYPE=Release
```

:::tip Android NDK

```sh
# powershell
> cmake -S . -B build_android -DANDROID_ABI=arm64-v8a -DANDROID_PLATFORM=android-30 -DANDROID_NDK="${env:ANDROID_HOME}\ndk\29.0.13113456" -DCMAKE_TOOLCHAIN_FILE="${env:ANDROID_HOME}\ndk\29.0.13113456/build/cmake/android.toolchain.cmake" -G Ninja -DPLATFORM=android -DCMAKE_BUILD_TYPE=Debug
```

:::

#### Generator

システムにインストールされている `VisualStudio` を検出してバージョンを特定するには、
[/other/vswhere](/docs/other/vswhere), [/other/python](/docs/other/python) を参照。

昔は、レジストリーを参照したりする。

| generator                           | build時configure |                                                                   |
| ----------------------------------- | ---------------- | ----------------------------------------------------------------- |
| `-G "Visual Studio 15 2017 Win64"`  | 〇               | `compile_commands.json` が生成できない?。cland が使えないような。 |
| `-G "Visual Studio 16 2019" -A x64` | 〇               | `-A` が分かれた                                                   |
| `-G Ninja`                          |                  | msvc でも `compile_commands.json` のために使う今日この頃          |
| `-G "Unix Makefiles"`               |                  | ほぼ使ったことがない。                                            |

### build step

```
$ cmake --build build
```

:::tip config は `VisualStudio` では指定できる。
そうでなければ configure step で `-DCMAKE_BUILD_TYPE=Release` と指定する。

```
$ cmake --build build --config Release
```

:::

### install step

```
$ cmake --install build --prefix DST_DIRECTORY
```

:::tip config は `VisualStudio` では指定できる。
そうでなければ configure に `-DCMAKE_BUILD_TYPE=Release` と指定する。

```
$ cmake --install build --config Release --prefix DST_DIRECTORY
```

:::
