## glew_s (static)

```cmake
FetchContent_Populate(
  glew
  URL https://sourceforge.net/projects/glew/files/glew/2.1.0/glew-2.1.0.tgz/download
)
add_library(glew_s STATIC ${glew_SOURCE_DIR}/src/glew.c
                          ${glew_SOURCE_DIR}/src/glewinfo.c)
target_include_directories(glew_s PUBLIC ${glew_SOURCE_DIR}/include)
target_compile_definitions(
  glew_s
  PRIVATE GLEW_BUILD
  PUBLIC GLEW_STATIC)
target_link_libraries(glew_s PUBLIC OpenGL32)
```
