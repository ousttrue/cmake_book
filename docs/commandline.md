# Commandline

configure, build, install の 3 step. install は使わないことも多い。

## configure

```
$ cmake -S . -B build -G Ninja -DCMAKE_BUILD_TYPE=Release
```

:::tip Android NDK

```sh
# powershell
> cmake -S . -B build_android -DANDROID_ABI=arm64-v8a -DANDROID_PLATFORM=android-30 -DANDROID_NDK="${env:ANDROID_HOME}\ndk\29.0.13113456" -DCMAKE_TOOLCHAIN_FILE="${env:ANDROID_HOME}\ndk\29.0.13113456/build/cmake/android.toolchain.cmake" -G Ninja -DPLATFORM=android -DCMAKE_BUILD_TYPE=Debug
```

:::

### BuildType

- Debug(default)
- Release
- MinSizeRel
- RelWithDebInfo

### Generator

システムにインストールされている `VisualStudio` を検出してバージョンを特定するには、
[/other/vswhere](/docs/other/vswhere), [/other/python](/docs/other/python) を参照。

昔は、レジストリーを参照したりする。

| generator                           | build時configure |                                              |
| ----------------------------------- | ---------------- | -------------------------------------------- |
| `-G "Visual Studio 15 2017 Win64"`  | 〇               |                                              |
| `-G "Visual Studio 16 2019" -A x64` | 〇               | `-A` が分かれた                              |
| `-G Ninja`                          |                  | Ninja 使うコンパイラをどうやって決めるのか？ |
| `-G "Unix Makefiles"`               |                  |                                              |

## build

```
$ cmake --build build
```

:::tip config は `VisualStudio` では指定できる。
そうでなければ configure step で `-DCMAKE_BUILD_TYPE=Release` と指定する。

```
$ cmake --build build --config Release
```

:::

## install

```
$ cmake --install build --prefix DST_DIRECTORY
```

:::tip config は `VisualStudio` では指定できる。
そうでなければ configure に `-DCMAKE_BUILD_TYPE=Release` と指定する。

```
$ cmake --install build --config Release --prefix DST_DIRECTORY
```
:::
