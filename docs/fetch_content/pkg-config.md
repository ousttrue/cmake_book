## gstreamer

```cmake
find_package(PkgConfig REQUIRED)
pkg_search_module(gstreamer REQUIRED IMPORTED_TARGET gstreamer-1.0)
pkg_search_module(gstreamer-vulkan REQUIRED IMPORTED_TARGET
                  gstreamer-vulkan-1.0)
```

```cmake
target_link_libraries(
  ${PROJECT_NAME} PRIVATE PkgConfig::gstreamer PkgConfig::gstreamer-vulkan
                          Vulkan::Vulkan)
```
