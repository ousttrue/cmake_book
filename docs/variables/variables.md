# Variables

https://cmake.org/cmake/help/latest/manual/cmake-variables.7.html

`${PROJECT_NAME}` のように `$` を先頭に置いて波括弧で変数名を囲む。

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

## CMAKE 変数

| name                   |                                                                                                            |
| ---------------------- | ---------------------------------------------------------------------------------------------------------- |
| PROJECT_NAME           | project(name) が変数に入る。                                                                               |
| CMAKE_CURRENT_LIST_DIR | CMakeLists.txt のあるディレクトリー                                                                        |
| CMAKE_SOURCE_DIR       | The path to the top level of the source tree                                                               |
| CMAKE_BINARY_DIR       | CMakeの作業ディレクトリー。[/commandline](/docs/commandline) [/cmakelists/output](/docs/cmakelists/output) |

## 環境変数

`$ENV{VULKAN_SDK}`

`ENV` は大文字で。
