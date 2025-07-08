# Installing

## CMAKE_INSTALL_PREFIX

https://cmake.org/cmake/help/latest/variable/CMAKE_INSTALL_PREFIX.html#variable:CMAKE_INSTALL_PREFIX

### default

- `/usr/local`

- `C:/Program Files/${PROJECT_NAME}`

### commandline override

```sh
> cmake --install . --prefix "/home/myuser/installdir"
```

## install()

[install &mdash; CMake 4.0.3 Documentation](https://cmake.org/cmake/help/latest/command/install.html)

- [Installing Files — Mastering CMake](https://cmake.org/cmake/help/book/mastering-cmake/chapter/Install.html)
- [Installing — Modern CMake](https://cliutils.gitlab.io/modern-cmake/chapters/install/installing.html)

## `Find<package>.cmake`

- [[CMake] ライブラリを自動的に探す `Find<package>.cmake` のテンプレート #C++ - Qiita](https://qiita.com/shohirose/items/d9bda00a39a113965c5c)

## CMAKE_EXPERIMENTAL_EXPORT_PACKAGE_DEPENDENCIES

- [Windows 環境でのCMake のfind_package() 数珠繋ぎを EXPORT_PACKAGE_DEPENDENCIES で解決する - 見切り発車](https://uyamae.hatenablog.com/entry/2024/11/22/234200)
