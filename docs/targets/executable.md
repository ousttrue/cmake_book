実行ファイルを作る

```cmake
ADD_EXECUTABLE(hello main.cpp)
```

:::tip WIN32 gui entrypoint

```c
int __clrcall WinMain(
  [in]           HINSTANCE hInstance,
  [in, optional] HINSTANCE hPrevInstance,
  [in]           LPSTR     lpCmdLine,
  [in]           int       nShowCmd
);
```

```CMake
ADD_EXECUTABLE(hello WIN32 main.cpp)
```

:::
