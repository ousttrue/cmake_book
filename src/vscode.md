# vscode

`${workspaceFolder}/.vscode/settings.json`

## ninja

```json
"cmake.configureSettings": {
    "CMAKE_MAKE_PROGRAM": "${env:VCPKG_DIR}/downloads/tools/ninja/1.10.0-windows/ninja.exe"
},
"cmake.generator": "Ninja",
```

## with vcpkg

```json
"cmake.configureSettings": {
    "CMAKE_TOOLCHAIN_FILE": "${env:VCPKG_DIR}/scripts/buildsystems/vcpkg.cmake",
},
"cmake.configureArgs": [
    "-DCMAKE_PREFIX_PATH=${env:VCPKG_DIR}/installed/x64-windows"
]
```

## toolkit

```
%USERPROFILE%\AppData\Local\CMakeTools\cmake-tools-kits.json
```
