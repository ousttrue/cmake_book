# pixi

rust 製の ros2 開発向けプロジェクト構成ツール。
`.pixi` フォルダに `prebuilt` なライブラリを構成することができる。

`ros2`, `python`, `qt` etc.. conda 経由でいろいろインストールし、
`pixi run` や `pixi shell` でそれらを使うように環境変数をセットアップしてから exe を実行する。
`install`, `build`, `launch` まで一貫して管理する感じ。

python(rclpy) と c++(rclcpp) 周りを便利にする主ぽい。

## workspace

- pixi.toml
- src
  - pkg
  - pkg
  - pkg
- .pixi(.gitignore)
- build (.gitignore)
- install (.gitignore)
- log (.gitignore)

## pixi.toml

```sh
> pixi init
```

```toml title="pixi.toml"
[workspace]
authors = ["user <user@gmail.com>"]
channels = ["conda-forge"]
name = "hello"
platforms = ["win-64"]
version = "0.1.0"

[tasks]

[dependencies]
```

## tasks

### colcon build

```toml title="task: colcon build 例"
[tasks]
build = { cmd = [
  "colcon",
  "build",
  "--event-handlers",
  "console_cohesion+",
  "--symlink-install",
  "--packages-select",
  "c_pkg",
  "--cmake-args",
  "-G",
  "Ninja",
  "-DCMAKE_BUILD_TYPE=RelWithDebInfo",
], inputs = [
  "src",
, env = { COLCON_EXTENSION_BLOCKLIST = "colcon_core.event_handler.desktop_notification" } }
] }
```

#### event-handlers

build ログが見えない。

`console_cohesion+` がよいのでは。

desktop_notification の無効化。
環境変数 `COLCON_EXTENSION_BLOCKLIST` に `colcon_core.event_handler.desktop_notification`

https://www.docswell.com/s/dandelion1124/KM1PJL-2024-02-13-093736

## clean

TODO: colcon clean もある？

```sh
> pixi clean
> rm -rf build install log
```
