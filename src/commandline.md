# commandline

## BUILD_TYPE/config

config 切り替えのあるジェネレーターでは `-DCMAKE_BUILD_TYPE=Release` はあとで指定できる。

```
$ cmake [<options>] -S <path-to-source> -B <path-to-build> -G Ninja -DCMAKE_BUILD_TYPE=Release
```

* Debug(default)
* Release
* MinSizeRel 
* RelWithDebInfo 

### Generator

* `-G "Visual Studio 15 2017 Win64"`: Config 切り替えあり
* `-G "Visual Studio 16 2019" -A x64`: Config 切り替えあり
* `-G Ninja` 
* `-G "Unix Makefiles"` 

## build

```
$ cmake --build <path-to-build> --config Release
```

config は切り替えのあるジェネレーターでは指定できる。
そうでなければ configure に `-DCMAKE_BUILD_TYPE=Release` と指定する。

## install

```
$ cmake --install <path-to-build> --config Release --prefix DST_DIRECTORY
```

config は切り替えのあるジェネレーターでは指定できる。
そうでなければ configure に `-DCMAKE_BUILD_TYPE=Release` と指定する。

