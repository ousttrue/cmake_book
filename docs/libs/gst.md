gstreamer prebuilt android

- https://github.com/GStreamer/gst-examples/tree/master/vulkan/android/jni

```cmake
add_library(gst SHARED IMPORTED GLOBAL)
set_target_properties(
  gst PROPERTIES IMPORTED_LOCATION
                 ${CMAKE_CURRENT_LIST_DIR}/lib/libgstreamer-1.0.a)
set_property(
  TARGET gst
  PROPERTY INTERFACE_INCLUDE_DIRECTORIES
           #
           ${CMAKE_CURRENT_LIST_DIR}/include
           ${CMAKE_CURRENT_LIST_DIR}/include/glib-2.0
           ${CMAKE_CURRENT_LIST_DIR}/include/gstreamer-1.0
           ${CMAKE_CURRENT_LIST_DIR}/lib/glib-2.0/include
           ${CMAKE_CURRENT_LIST_DIR}/lib/gstreamer-1.0/include
           #
)

set_property(
  TARGET gst
  PROPERTY INTERFACE_LINK_LIBRARIES
           #
           ${CMAKE_CURRENT_LIST_DIR}/lib/libglib-2.0.a
           ${CMAKE_CURRENT_LIST_DIR}/lib/libgmodule-2.0.a
           ${CMAKE_CURRENT_LIST_DIR}/lib/libgobject-2.0.a
           ${CMAKE_CURRENT_LIST_DIR}/lib/libglib-2.0.a
           ${CMAKE_CURRENT_LIST_DIR}/lib/libpcre2-8.a
           ${CMAKE_CURRENT_LIST_DIR}/lib/libffi.a
           ${CMAKE_CURRENT_LIST_DIR}/lib/libgstvideo-1.0.a
           ${CMAKE_CURRENT_LIST_DIR}/lib/libiconv.a
           ${CMAKE_CURRENT_LIST_DIR}/lib/libintl.a
           #
)
```

```cmake
subdirs(gst/arm64)

cmake_minimum_required(VERSION 3.31)
project(gstreamer_android)
add_library(gstreamer_android SHARED vulkan-1.c)
target_link_libraries(gstreamer_android PRIVATE gst android log)
```
