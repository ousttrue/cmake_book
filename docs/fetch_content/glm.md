```cmake
FetchContent_Populate(
  glm URL https://github.com/g-truc/glm/archive/refs/tags/1.0.1.zip
  # URL
  # https://github.com/g-truc/glm/releases/download/1.0.1/glm-1.0.1-light.zip
)
add_library(glm INTERFACE)
target_include_directories(glm INTERFACE ${glm_SOURCE_DIR})
add_library(glm::glm ALIAS glm)
```
