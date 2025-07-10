```cmake
  FetchContent_Declare(zlib URL https://zlib.net/zlib-1.3.1.tar.gz)
  FetchContent_MakeAvailable(zlib)
```

```cmake
  target_link_libraries(minizip PUBLIC zlib)
  # or
  target_link_libraries(minizip PUBLIC zlibstatic) # static
```
