---
sidebar_position: 1
---

# Basic

- `ADD_EXECUTABLE(EXE_NAME...)` で EXE_NAME という target が作成される。
- `ADD_LIBRARY(LIB_NAME...)` で LIB_NAME という target が作成される。

`TARGET_LINK_LIBRARIES(EXE_NAME PRIVATE LIB_NAME)` 
というように使うことができる。

```{toctree}
1 basic.md
2 source.md
3 compile.md
4 link.md
5 custom_target.md
6 properties.md
```
