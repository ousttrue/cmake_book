```cmake
include(FetchContent)
FetchContent_Declare(
  json
  URL https://github.com/nlohmann/json/releases/download/v3.11.2/json.tar.xz)
FetchContent_MakeAvailable(json)
```

```cmake
target_link_libraries(${TARGET} PUBLIC nlohmann_json)
```
