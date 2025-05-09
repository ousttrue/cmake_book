- [CMake .gitignore out-of-source build tree | Scientific Computing](https://www.scivision.dev/cmake-auto-gitignore-build-dir/)

build フォルダ内に gitignore を自動で作る。

```cmake
if(NOT PROJECT_SOURCE_DIR STREQUAL PROJECT_BINARY_DIR)
  # Git auto-ignore out-of-source build directory
  file(GENERATE OUTPUT .gitignore CONTENT "*")
endif()
```
