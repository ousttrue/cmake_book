# colcon

ROS 向けの c++ build tool ? 

## pixi ros向け設定

pixi プロジェクトで ros2 colcon を使う場合の設定例。

```toml title="pixi.toml"
[workspace]
# kilted
channels = ["conda-forge", "robostack-kilted"]

[activation]
scripts = ["install/setup.bat"] # 重要

[tasks]
# colcon build の呼び出し例
build = { cmd = [
  "colcon",
  "build",
  "--symlink-install",
  "--event-handlers",
  "console_cohesion+",
  "--packages-select",
  "my_opencv_demo",
  "--cmake-args",
  "-G",
  "Ninja",
], inputs = [
  "src",
], env = { COLCON_EXTENSION_BLOCKLIST = "colcon_core.event_handler.desktop_notification" } }

[dependencies]
# kiled
python = "3.12.3.*"
ros-kilted-desktop = ">=0.12.0,<0.13"
ros-kilted-ament-cmake-auto = ">=2.7.3,<3"
# colcon
colcon-common-extensions = ">=0.3.0,<0.4"
# vc 探知
compilers = ">=1.11.0,<2"
# cmake 動作
pkg-config = ">=0.29.2,<0.30"
cmake = ">=4.1.2,<5"
ninja = ">=1.13.1,<2"
```

:::info ros のバージョン選択
ROSのバージョン humble や kilted を最初に選択する。
それに合わせた python version を選択するべし。

https://github.com/ros2/ros2/blob/kilted/pixi.toml#L100

```sh
> pixi add "python=3.12.3"
```

launch などでバージョン違いが刺さる。
:::

## pkg

- workspace
  - src
    - pkg
      - package.xml
      - CMakeLists.txt
      - src
        - main.cpp
      - launch
    - pkg
    - pkg

```cmake title="CMakeLists.txt"
cmake_minimum_required(VERSION 3.30)
project(c_pkg)

set(CMAKE_EXPORT_COMPILE_COMMANDS 1)

if(CMAKE_COMPILER_IS_GNUCXX OR CMAKE_CXX_COMPILER_ID MATCHES "Clang")
  add_compile_options(-Wall -Wextra -Wpedantic)
endif()

# 最初の方に!(add_library, add_executable より前)
find_package(ament_cmake REQUIRED)

# find dependencies
find_package(rclc REQUIRED)
find_package(rclcpp REQUIRED)
find_package(std_msgs REQUIRED)
find_package(sensor_msgs REQUIRED)
find_package(example_interfaces REQUIRED)

set(TARGET_NAME pub)
add_executable(${TARGET_NAME} src/pub.cpp)
target_include_directories(
  ${TARGET_NAME} PUBLIC $<BUILD_INTERFACE:${CMAKE_CURRENT_SOURCE_DIR}/include>
                        $<INSTALL_INTERFACE:include>)
# Require C99 and C++17
target_compile_features(${TARGET_NAME} PUBLIC c_std_99 cxx_std_17)
target_link_libraries(
  ${TARGET_NAME}
  PRIVATE #
          rcl::rcl rclc::rclc ${std_msgs_TARGETS} ${sensor_msgs_TARGETS}
          ${example_interfaces_TARGETS})
# ament 化されている
install(TARGETS ${TARGET_NAME} DESTINATION lib/${PROJECT_NAME})

if(BUILD_TESTING)
  find_package(ament_lint_auto REQUIRED)
  # the following line skips the linter which checks for copyrights comment the
  # line when a copyright and license is added to all source files
  set(ament_cmake_copyright_FOUND TRUE)
  # the following line skips cpplint (only works in a git repo) comment the line
  # when this package is in a git repo and when a copyright and license is added
  # to all source files
  set(ament_cmake_cpplint_FOUND TRUE)
  ament_lint_auto_find_test_dependencies()
endif()

ament_package()
```

## ament_cmake

colcon の部品？

`find_package(ament_cmake REQUIRED)`

で有効化されるらしい。
機能追加のみならず、既存の関数 `install` 等の置き換えも行う。

:::danger find_package(ament_cmake)は前の方で

`素の install` と `ament の install` の混在はトラブルを起こす。

下記のエラーはそれ。

```
CMake Error at /ros/foxy/share/ament_cmake_core/cmake/symlink_install/install.cmake:25 (string):
 Maximum recursion depth of 1000 exceeded
```

https://github.com/ament/ament_cmake/issues/358

> ament_cmake_core overriding the install()

```cmake
find_package(ament_cmake REQUIRED)
```

は CMakeLists.txt の上の方、`FetchContent` などを含めて `add_executable` や `add_library` より前に
記述するべき。

ros 関連のパッケージ、例えば `rclc` を FetchContent する場合は注意。
中で `find_package(ament_cmake)` している。
:::

## c++ 関連のトラブル

- rclcpp の std::shared_ptr を含む継承が実行時にクラッシュ。バイナリ配布物との整合性？ rclcpp やめて rclc の自前ビルドを模索

