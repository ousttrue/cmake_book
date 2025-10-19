# Commandline

## 概念

### SOURCE_DIR

トップレベルの `CMakeLists.txt` のあるフォルダ。
コマンドラインの `-S` 引き数。

`${CMAKE_SOURCE_DIR}`

### BUILD_DIR

一時ファイルやビルドファイルを展開するフォルダ
コマンドラインの `-B` 引き数。

`${CMAKE_BUILD_DIR}`

### INSTALL_PREFIX

https://cmake.org/cmake/help/latest/variable/CMAKE_INSTALL_PREFIX.html

`cmake --install` のインストール先となるフォルダ。
コマンドラインの `-DCMAKE_INSTALL_PREFIX=prefix` のように指定する。

`${CMAKE_INSTALL_PREFIX}`

`CMAKE_SYSTEM_PREFIX_PATH` に追加されて `find_package` などの search path ともなる。

## BuildType

https://cmake.org/cmake/help/latest/variable/CMAKE_BUILD_TYPE.html

`-DCMAKE_BUILD_TYPE=Release`

- Debug(default)
- Release
- RelWithDebInfo
- MinSizeRel

- [CMAKE_BUILD_TYPEのUPPER CASEにご用心 #CMake - Qiita](https://qiita.com/KRiver1/items/4b7ad90168dfb4aedde6)

```
  is not able to compile a simple test program.

    lld-link: error: <root>: undefined symbol: mainCRTStartup
    clang: error: linker command failed with exit code 1 (use -v to see invocation)
    ninja: build stopped: subcommand failed.
```

`cmake-4.0.1` なぜか `-DCMAKE_BUILD_TYPE=Release` を `-DCMAKE_BUILD_TYPE=RELEASE` にしたらなおった。

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

:::tip `BUILD_TYPE` は `VisualStudio` ではこの step でも指定できる。
何故なら `MSBuild` に `BUILD_TYPE` 切り替え機能があるので。
`vc + Ninja` の時はその限りではない。

```
$ cmake --build build --config Release
```

:::

### install step

```
$ cmake --install build
```

:::tip `BUILD_TYPE` は `VisualStudio` ではこの step でも指定できる。
何故なら `MSBuild` に `BUILD_TYPE` 切り替え機能があるので。
`vc + Ninja` の時はその限りではない。

```
$ cmake --install build --config Release --prefix INSTALL_PREFIX
```

:::

:::tip prefix は configure step で `-DCMAKE_INSTALL_PREFIX` により指定しないと効かないかもしれない。

- windows のデフォルトは、 `C:/Program Files/RPOJECT_NAME`
- unix デフォルトは、 `/usr/local`

:::
