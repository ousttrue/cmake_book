# install header

## INTERFACE_INCLUDE_DIRECTORIES

- https://cmake.org/cmake/help/latest/prop_tgt/INTERFACE_INCLUDE_DIRECTORIES.html

> The target_include_directories() command populates this property with values given to the `PUBLIC` and `INTERFACE` keywords

```cmake title="build と install で分ける"
target_include_directories(mylib INTERFACE
  $<BUILD_INTERFACE:${CMAKE_CURRENT_SOURCE_DIR}/include/mylib>
  $<INSTALL_INTERFACE:include/mylib>  # <prefix>/include/mylib
)
```

## EXPORT 時に INTERFACE_INCLUDE_DIRECTORIES に build-tree が build-tree が含むとエラー

```error title="CMake Error: INTERFACE_INCLUDE_DIRECTORIES"
CMake Error in PROJECT_DIR/CMakeLists.txt:
  Target "shaderc" INTERFACE_INCLUDE_DIRECTORIES property contains path:

    "BUILD_DIR/_deps/shaderc-src/libshaderc/include"

  which is prefixed in the build directory.
```

対策

- https://stackoverflow.com/questions/25676277/cmake-target-include-directories-prints-an-error-when-i-try-to-add-the-source

```cmake
# clear
set_target_properties(zlib PROPERTIES INTERFACE_INCLUDE_DIRECTORIES "")
# 再設定
target_include_directories(zlib PUBLIC $<BUILD_INTERFACE:${zlib_SOURCE_DIR}>
                                       $<INSTALL_INTERFACE:include>)
```

## how to `SDL/include` to `include/SDL2` (rename)

`tail / `

- https://stackoverflow.com/questions/59495768/cmake-change-forced-destination-directory-name-install-target
