# qt6

https://doc.qt.io/qt-6/cmake-get-started.html

```toml title="pixi.toml"
[target.win-64.activation.env]
QT_QPA_PLATFORM_PLUGIN_PATH="%cd%\\.pixi\\envs\\default\\Library\\lib\\qt6\\plugins\\platforms"

[dependencies]
qt6-main = "*"
```
