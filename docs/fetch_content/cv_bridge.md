`generate_export_header` 例

```cmake
set(CV_BRIDGE_DISABLE_PYTHON "ON")
FetchContent_Populate(
  cv_bridge
  DOWNLOAD_EXTRACT_TIMESTAMP ON
  URL https://github.com/ros-perception/vision_opencv/archive/refs/tags/4.1.0.zip
)
add_library(
  cv_bridge SHARED
  ${cv_bridge_SOURCE_DIR}/cv_bridge/src/cv_bridge.cpp
  ${cv_bridge_SOURCE_DIR}/cv_bridge/src/cv_mat_sensor_msgs_image_type_adapter.cpp
  ${cv_bridge_SOURCE_DIR}/cv_bridge/src/rgb_colors.cpp)
target_include_directories(cv_bridge
                           PUBLIC ${cv_bridge_SOURCE_DIR}/cv_bridge/include)
target_link_libraries(
  cv_bridge PRIVATE rclcpp::rclcpp ${std_msgs_TARGETS} ${sensor_msgs_TARGETS}
                    opencv_core opencv_imgproc opencv_imgcodecs)
include(GenerateExportHeader)
generate_export_header(cv_bridge EXPORT_FILE_NAME cv_bridge/cv_bridge_export.h)
target_sources(
  cv_bridge
  PUBLIC FILE_SET
         generated_headers
         TYPE
         HEADERS
         BASE_DIRS
         $<TARGET_PROPERTY:cv_bridge,BINARY_DIR>
         FILES
         ${CMAKE_CURRENT_BINARY_DIR}/cv_bridge/cv_bridge_export.h)
install(TARGETS cv_bridge RUNTIME DESTINATION bin)
```
