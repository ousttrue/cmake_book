# Commandline

## configure

config 切り替えのあるジェネレーターでは `-DCMAKE_BUILD_TYPE=Release` はあとで指定できる。

```
$ cmake [<options>] -S <path-to-source> -B <path-to-build> -G Ninja -DCMAKE_BUILD_TYPE=Release
```

### BuildType

config 時に指定する。
Generator に VisualStudio を使う場合は build 時に指定する。

* Debug(default)
* Release
* MinSizeRel 
* RelWithDebInfo 

### Generator

システムにインストールされている `VisualStudio` を検出してバージョンを特定するには、
[/other/vswhere](/docs/other/vswhere), [/other/python](/docs/other/python) を参照。

昔は、レジストリーを参照したりする。

| generator                           | build時configure |                                              |
|-------------------------------------|------------------|----------------------------------------------|
| `-G "Visual Studio 15 2017 Win64"`  | 〇               |                                              |
| `-G "Visual Studio 16 2019" -A x64` | 〇               | `-A` が分かれた                              |
| `-G Ninja`                          |                  | Ninja 使うコンパイラをどうやって決めるのか？ |
| `-G "Unix Makefiles"`               |                  |                                              |

## build

```
$ cmake --build <path-to-build> --config Release
```

config は `VisualStudio` では指定できる。
そうでなければ configure に `-DCMAKE_BUILD_TYPE=Release` と指定する。

## install

```
$ cmake --install <path-to-build> --config Release --prefix DST_DIRECTORY
```

config は `VisualStudio` では指定できる。
そうでなければ configure に `-DCMAKE_BUILD_TYPE=Release` と指定する。
