```cmake
  set(BUILD_SHARED_LIBS OFF)
  set(KTX_FEATURE_STATIC_LIBRARY ON)
  FetchContent_Declare(
    libktx
    GIT_REPOSITORY https://github.com/KhronosGroup/KTX-Software.git
    GIT_TAG v4.2.1)
  FetchContent_MakeAvailable(libktx)
```
