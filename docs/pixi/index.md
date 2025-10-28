# pixi

rust 製の ros2 開発向けプロジェクト構成ツール。
`.pixi` フォルダに `prebuilt` なライブラリを構成することができる。

conda を python 以外にも拡張した感じ？
cmake の find_package の面倒を見てくれるぽい。
vcpkg のように全ビルドしないのお手軽である。

ただし、 dll 境界を超えて std::shared_ptr の継承とかをするライブラリ(rclcpp)はだめなときはだめ。
トレードオフ。

## workspace

- pixi.toml
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

## c++ セットアップ
