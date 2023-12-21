# Generator expressions

<https://cmake.org/cmake/help/latest/manual/cmake-generator-expressions.7.html>

## debug_release

Debug と Release で設定を切り分ける。

```CMake
add_compile_options(
    "$<$<CONFIG:Debug>:/MTd>"
    "$<$<CONFIG:RelWithDebInfo>:/MT>"
    "$<$<CONFIG:Release>:/MT>"
    "$<$<CONFIG:MinSizeRel>:/MT>"
)
```

デバッグ版のライブラリーを配置する場合は以下の2とおりがメジャーである。

* ファイル名を変える(suffix を追加するなど)
* ディレクトリーを変える

この2つの組合せで4つのパターンがある。ライブラリーごとにこれが混在し、
更に `static` vs `shared` など別のファクターで種類が増える運命にある。

| suffix | dir | release             | debug                 |                                                              |
|--------|-----|---------------------|-----------------------|--------------------------------------------------------------|
|        |     | libname.lib         | libname.lib           | リビルドして切り替える。どちらが出力されているかは記憶に頼る |
| ○      |     | libname.lib         | libname_d.lib         |                                                              |
|        | ○   | release/libname.lib | debug/libname.lib     |                                                              |
| ○      | ○   | release/libname.lib | release/libname_d.lib |                                                              |

だから `find_package` に頼らずに、なるべく自分で書くことを薦めている。

