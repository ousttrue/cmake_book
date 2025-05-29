# CMakeBook

CMake する備忘録。

https://cmake.org/

- https://cmake.org/documentation/

```cmake
# project
cmake_minimum_required(VERSION 3.20.0)
project(hello VERSION 0.1.0)

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

# target
add_executable(${PROJECT_NAME} main.cpp)
```
