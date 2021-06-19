CMake する備忘録。手元のメモを集約。
主に Windows で作業するため、
find に頼らずに CMakeLists.txt を自前で手書きする方向性。

* Visual C++ ビルドツール 2019
* vscode

で運用している。

# 本家サイト

https://cmake.org/

* https://cmake.org/documentation/

# その他

## CMake のコマンドに大文字小文字の区別はない

```CMakeLists.txt
set(hoge x)

# 同じ

SET(hoge x)
```

## 変数

スペースを含まない場合は、クォート不要。

```
SET(SRC main.cpp)
SET(SRC "main.cpp")

# 使う

ADD_EXECUTABLE(hello
${SRC}
)
```
