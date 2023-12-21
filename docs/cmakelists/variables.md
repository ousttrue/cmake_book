---
sidebar_position: 3
---

# Variables

https://cmake.org/cmake/help/latest/manual/cmake-variables.7.html

`${PROJECT_NAME}` のように `$` を先頭に置いて波括弧で変数名を囲む。

| name                   |                                                                          |
|------------------------|--------------------------------------------------------------------------|
| PROJECT_NAME           | project(name) が変数に入る。                                             |
| CMAKE_CURRENT_LIST_DIR | CMakeLists.txt のあるディレクトリー                                      |
| CMAKE_SOURCE_DIR       | The path to the top level of the source tree                             |
| CMAKE_BINARY_DIR       | CMakeの作業ディレクトリー。[/commandline](/commandline) [/cmakelists/output](/cmakelists/output) |
