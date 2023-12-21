# blender

cmake で blender build する例

```json
{
    "cmake.configureSettings": {
        "PYTHON_VERSION": "3.8.6",
        "PYTHON_ROOT_DIR": "C:/Python38",
        "PYTHON_INCLUDE_DIR": "C:/Python38/include",
        "PYTHON_INCLUDE_DIRS": "C:/Python38/include",
        "LINK_DIRECTORIES": "C:/Python38/libs",
        "PYTHON_LIBRARIES": [
            "DEBUG",
            "C:/Python38/libs/python38_d.lib",
            "OPTIMIZED",
            "C:/Python38/libs/python38.lib"
        ],
        "WITH_PYTHON_INSTALL_NUMPY": "OFF",
        "WITH_AUDASPACE": "OFF",
        "WITH_OPENCOLLADA": "OFF",
        "CMAKE_MAKE_PROGRAM": "${env:VCPKG_DIR}/downloads/tools/ninja/1.10.0-windows/ninja.exe"
    },
    "cmake.generator": "Ninja",
}
```
