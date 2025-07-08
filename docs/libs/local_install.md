
例えば `${project}/prefix/lib/cmake/zlib/zlib.cmake` を作り `find_package(ZLIB REQUIRED)` が動くようにする。

```cmake title="deps/CMakeLists.txt"
cmake_minimum_required(VERSION 3.20.0)
project(deps)

set(CMAKE_CXX_STANDARD 17)

# for compile_commands.json
set(CMAKE_EXPORT_COMPILE_COMMANDS 1)

# for build/.gitignore
if(NOT PROJECT_SOURCE_DIR STREQUAL PROJECT_BINARY_DIR)
  file(
    GENERATE
    OUTPUT .gitignore
    CONTENT "*")
endif()

# Release to ../prefix
set(CMAKE_BUILD_TYPE Release)
set(CMAKE_INSTALL_PREFIX ${CMAKE_CURRENT_LIST_DIR}/../prefix)

# for prefix/.gitignore
file(
  GENERATE
  OUTPUT ${CMAKE_INSTALL_PREFIX}/.gitignore
  CONTENT "*")

#
# zlib download & build
#
include(FetchContent)
FetchContent_Declare(zlib URL https://zlib.net/zlib-1.3.1.tar.gz)
FetchContent_MakeAvailable(zlib)

#
# zlib install
#
" for "INTERFACE_INCLUDE_DIRECTORIES property contains path"
# https://stackoverflow.com/questions/25676277/cmake-target-include-directories-prints-an-error-when-i-try-to-add-the-source
set_target_properties(zlib PROPERTIES INTERFACE_INCLUDE_DIRECTORIES "")
target_include_directories(zlib PUBLIC $<BUILD_INTERFACE:${zlib_SOURCE_DIR}>
                                       $<INSTALL_INTERFACE:include>)
install(TARGETS zlib EXPORT zlib-config)
install(
  EXPORT zlib-config
  FILE zlib.cmake
  DESTINATION lib/cmake/zlib)
```

```sh
> cmake -S .\deps\ -B build_deps -G Ninja
> cmake --build .\build_deps\
> cmake --install .\build_deps\
```
```
.\prefix\bin\zlib.dll
.\prefix\include\zconf.h
.\prefix\include\zlib.h
.\prefix\lib\cmake\zlib\zlib-release.cmake
.\prefix\lib\cmake\zlib\zlib.cmake
.\prefix\lib\zlib.lib
.\prefix\lib\zlibstatic.lib
.\prefix\share\man\man3\zlib.3
.\prefix\share\pkgconfig\zlib.pc 
```

