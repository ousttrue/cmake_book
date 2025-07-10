# Find_package

`CMAKE_PREFIX_PATH` => `CMAKE_CURRENT_BINARY_DIR` => `CMAKE_INSTALL_PREFIX`

```CMake
find_package(Boost REQUIRED)
```

Unix 系のシステム(/usr とか)にライブラリーがインストールされている場合は使えるのだけど、
Windows ではつらい。
動かすために pkg-config や 環境変数や submodule などの仕込みが必用なことが多い。
どこから find しているかが不明瞭になるのである。

`include_dir`, `defines`, `lib_dir`, `libraries` の4つが揃えば大抵のライブラリーは使えるので、
うまくいかないときは `find_package` は諦める方が速い。

INTERFACE でビルド済みライブラリを使えないかやってみるとよい。

```CMake
add_library(boost INTERFACE)
target_include_directories(
  boost INTERFACE ${CMAKE_CURRENT_LIST_DIR}/../include/boost-1_78)
```

https://cmake.org/cmake/help/latest/command/find_package.html#config-mode-search-procedure

# config mode

https://cmake.org/cmake/help/latest/command/find_package.html#config-mode-search-procedure

- https://theolizer.com/cpp-school3/cpp-school3-10/

https://cmake.org/cmake/help/latest/command/install.html

```cmake
install(TARGETS <target>... [...])
install(IMPORTED_RUNTIME_ARTIFACTS <target>... [...])
install({FILES | PROGRAMS} <file>... [...])
install(DIRECTORY <dir>... [...])
install(SCRIPT <file> [...])
install(CODE <code> [...])
install(EXPORT <export-name> [...])
install(PACKAGE_INFO <package-name> [...])
install(RUNTIME_DEPENDENCY_SET <set-name> [...])
```

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
