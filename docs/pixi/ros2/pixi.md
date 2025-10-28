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
