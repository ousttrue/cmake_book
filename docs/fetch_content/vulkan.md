
```cmake
set(TARGET_NAME vulkan)
add_library(${TARGET_NAME} STATIC IMPORTED GLOBAL)
set_target_properties(
  ${TARGET_NAME}
  PROPERTIES INTERFACE_INCLUDE_DIRECTORIES $ENV{VULKAN_SDK}/Include
             IMPORTED_LOCATION $ENV{VULKAN_SDK}/Lib/vulkan-1.lib)
```

https://cmake.org/cmake/help/latest/module/FindVulkan.html

```cmake

```
