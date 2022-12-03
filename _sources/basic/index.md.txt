# Basic

- `ADD_EXECUTABLE(EXE_NAME...)` で EXE_NAME という target が作成される。
- `ADD_LIBRARY(LIB_NAME...)` で LIB_NAME という target が作成される。

`TARGET_LINK_LIBRARIES(EXE_NAME PRIVATE LIB_NAME)` 
というように使うことができる。

```{toctree}
basic.md
source.md
compile.md
link.md
custom_target.md
properties.md
```
