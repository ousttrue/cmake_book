# install header

## PUBLIC_HEADER

https://stackoverflow.com/questions/10487256/cmake-how-to-properly-copy-static-librarys-header-file-into-usr-include

```cmake
project(myproject)

add_library(mylib some.c another.c)
set_target_properties(mylib PROPERTIES PUBLIC_HEADER "some.h;another.h")
INSTALL(TARGETS mylib
        LIBRARY DESTINATION some/libpath
        PUBLIC_HEADER DESTINATION some/includepath
)
```

## EXPORT FILE_SET

https://discourse.cmake.org/t/how-to-not-install-header-sets-of-private-dependencies/11259

## DIRECTORY

```cmake
install(DIRECTORY "${CMAKE_SOURCE_DIR}/" # source directory
        DESTINATION "include" # target directory
        FILES_MATCHING # install only matched files
        PATTERN "*.h" # select header files
)
```

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
