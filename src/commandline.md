# commandline

## configure

```
$ cmake [<options>] -S <path-to-source> -B <path-to-build> -G Ninja
```

### Generator

`-G "Visual Studio 15 2017 Win64`

`-G "Visual Studio 16 2019" -A x64`

`-G Ninja`

## build

```
$ cmake --build <path-to-build> --config Release
```

## install

```
$ cmake --install <path-to-build> --prefix DST_DIRECTORY
```

