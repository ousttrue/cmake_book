# vswhere

## VisualStudio

最近の vc は CMake を同梱している。
パスを探索する例。

```bat
@echo off
for /f "usebackq tokens=1* delims=: " %%i in (`vswhere -latest -requires Microsoft.Component.MSBuild`) do (
  if /i "%%i"=="installationPath" set InstallDir=%%j
)
set MSBUILD="%InstallDir%\MSBuild\15.0\Bin\MSBuild.exe"
set CMAKE="%InstallDir%\Common7\IDE\CommonExtensions\Microsoft\CMake\CMake\bin\cmake.exe"
```
