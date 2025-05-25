
```cmake
FetchContent_Declare(
  openxr
  GIT_REPOSITORY https://github.com/KhronosGroup/OpenXR-SDK.git
  GIT_TAG release-1.1.47)
FetchContent_MakeAvailable(openxr)
```

```cmake
target_link_libraries(
  openxr_program
  PUBLIC OpenXR::openxr_loader)
```
