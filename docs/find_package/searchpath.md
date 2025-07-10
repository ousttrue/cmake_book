# search path

https://cmake.org/cmake/help/latest/command/find_package.html

## Config Mode

- [CMAKE_PREFIX_PATH &mdash; CMake 4.1.0-rc1 Documentation](https://cmake.org/cmake/help/latest/envvar/CMAKE_PREFIX_PATH.html#envvar:CMAKE_PREFIX_PATH)

:::danger Windows と Linux で挙動が違う

https://cmake.org/cmake/help/latest/command/find_package.html#config-mode-search-procedure

| Entry                                                                         | Convention |
| ----------------------------------------------------------------------------- | ---------- |
| `<prefix>/`                                                                   | W          |
| `<prefix>/(cmake or CMake)/`                                                  | W          |
| `<prefix>/<name>\*/`                                                          | W          |
| `<prefix>/<name>\*/(cmake or CMake)/`                                         | W          |
| `<prefix>/<name>\*/(cmake or CMake)/<name>\*/` (cmake-3.25)                   | W          |
| `<prefix>/(lib/<arch> or lib\* or share)/cmake/<name>\*/`                     | U          |
| `<prefix>/(lib/<arch> or lib\* or share)/<name>\*/`                           | U          |
| `<prefix>/(lib/<arch> or lib\* or share)/<name>\*/(cmake or CMake)/`          | U          |
| `<prefix>/<name>\*/(lib/<arch> or lib\* or share)/cmake/<name>\*/`            | W/U        |
| `<prefix>/<name>\*/(lib/<arch> or lib\* or share)/<name>\*/`                  | W/U        |
| `<prefix>/<name>\*/(lib/<arch> or lib\* or share)/<name>\*/(cmake or CMake)/` | W/U        |

Windows と Linux 共用でよさげなものが無いことに注意。

:::

- https://cmake.org/cmake/help/latest/manual/cmake-packages.7.html#package-registry

```cmake title="如此"
  set(OpenXR_DIR ${DEPS_PREFIX}/lib/cmake/openxr)
  set(directxmath_DIR ${DEPS_PREFIX}/share/directxmath)
  set(JsonCpp_DIR ${DEPS_PREFIX}/lib/cmake/jsoncpp)
  set(glslang_DIR ${DEPS_PREFIX}/lib/cmake/glslang)
  set(SPIRV-Tools-opt_DIR ${DEPS_PREFIX}/lib/cmake/SPIRV-Tools-opt)
  set(SPIRV-Tools_DIR ${DEPS_PREFIX}/lib/cmake/SPIRV-Tools)
  set(magic_enum_DIR ${DEPS_PREFIX}/share/cmake/magic_enum)
```

```cmake
install(
  EXPORT shaderc-config
  FILE shaderc-config.cmake
  DESTINATION cmake) # 👈 prefix から相対パスで指定する例。 install path にばらつきがでる
```


## Module Mode

- [CMAKE_MODULE_PATH &mdash; CMake 4.1.0-rc1 Documentation](https://cmake.org/cmake/help/latest/variable/CMAKE_MODULE_PATH.html#variable:CMAKE_MODULE_PATH)

## Pkg-Config

## その他

### OpenGL

### Vulkan-SDK
