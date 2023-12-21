# Output folder

デフォルトだとビルド対象ごとにディレクトリーが別れるので、
`dll` が別ディレクトリーに出力されてしまう。
インストールせずに実行する痔にパスを通す必要があり不便である。

`Debug`, `Release` などで `dll`, `exe` の出力先をまとめる例。

```CMake
SET(CMAKE_ARCHIVE_OUTPUT_DIRECTORY_DEBUG ${CMAKE_BINARY_DIR}/Debug/lib)
SET(CMAKE_LIBRARY_OUTPUT_DIRECTORY_DEBUG ${CMAKE_BINARY_DIR}/Debug/lib)
SET(CMAKE_RUNTIME_OUTPUT_DIRECTORY_DEBUG ${CMAKE_BINARY_DIR}/Debug/bin)
SET(CMAKE_ARCHIVE_OUTPUT_DIRECTORY_RELEASE ${CMAKE_BINARY_DIR}/Release/lib)
SET(CMAKE_LIBRARY_OUTPUT_DIRECTORY_RELEASE ${CMAKE_BINARY_DIR}/Release/lib)
SET(CMAKE_RUNTIME_OUTPUT_DIRECTORY_RELEASE ${CMAKE_BINARY_DIR}/Release/bin)
```

別プロジェクトから `subdirs` で読み込んだときに、予期しない動作をするようになるので
`CMakeLists.txt` 内には記述しないほうが良いかもしれない。
コマンドラインから指定する。

## vscode 設定例

```json
{
    "cmake.configureSettings": {
        "CMAKE_ARCHIVE_OUTPUT_DIRECTORY_DEBUG": "${workspaceFolder}/build/Debug/lib",
        "CMAKE_LIBRARY_OUTPUT_DIRECTORY_DEBUG": "${workspaceFolder}/build/Debug/lib",
        "CMAKE_RUNTIME_OUTPUT_DIRECTORY_DEBUG": "${workspaceFolder}/build/Debug/bin",
        "CMAKE_ARCHIVE_OUTPUT_DIRECTORY_RELEASE": "${workspaceFolder}/build/Release/lib",
        "CMAKE_LIBRARY_OUTPUT_DIRECTORY_RELEASE": "${workspaceFolder}/build/Release/lib",
        "CMAKE_RUNTIME_OUTPUT_DIRECTORY_RELEASE": "${workspaceFolder}/build/Release/bin",
    },
}
```
