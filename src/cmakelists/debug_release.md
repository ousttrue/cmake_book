# debug_release

Debug と Release で設定を切り分ける。

## Generator expressions

```CMakeLists.txt
add_compile_options(
    "$<$<CONFIG:Debug>:/MTd>"
    "$<$<CONFIG:RelWithDebInfo>:/MT>"
    "$<$<CONFIG:Release>:/MT>"
    "$<$<CONFIG:MinSizeRel>:/MT>"
)
```
