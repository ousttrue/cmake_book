# CMakeBook

CMake する備忘録。手元のメモを集約。
主に Windows で作業するため、
findXXX に頼らずに CMakeLists.txt を自前で手書きする方向性。

* Visual C++ ビルドツール 2019
* vscode

での運用を想定。

<https://github.com/ousttrue/cmake_book>

* mdBook から Sphinx + myst に乗り換え

# CMake

<https://cmake.org/>

* <https://cmake.org/documentation/>


## CMake のコマンドに大文字小文字の区別はない

```cmake
set(hoge x)

# 同じ

SET(hoge x)
```

## 変数

スペースを含まない場合は、クォート不要。

```cmake
SET(SRC main.cpp)
SET(SRC "main.cpp")

# 使う ${VAR_NAME} とする

ADD_EXECUTABLE(hello
${SRC}
)

# ${PROJECT_NAME}
# ${CMAKE_CURRENT_LISTS_DIR}
# のような自動定義の変数も同様
```


```{toctree}
:maxdepth: 2
cmakelists/index
commandline.md
tools/index
other/index
```

