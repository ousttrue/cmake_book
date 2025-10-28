# ros2 の colcon cmake 関連

pixi の上に ROS 独自の作法が乗る。

|              | value                       | note                                                     |
| ------------ | --------------------------- | -------------------------------------------------------- |
| ros2 version | humble, kilted              | pixi.toml の channel と dependencies に記述するべし      |
| package      | src/PKG_NAME                | package.xml colcon のパッケージ概念？                    |
| ros2 node    | src/PKG_NAME/src/node.cpp   | ros2 launch PKG NODE のように実行単位となる？            |
| ament_cmake  | package.xml, CMakeLists.txt | cmake の target を束ねているような気がするがわかりにくい |
