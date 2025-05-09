---
sidebar_position: 5
---

コード生成や、Shader の事前コンパイル

# add_custom_command

```cmake
function(add_shader TARGET SHADER)
  find_program(GLSLC glslc HINTS $ENV{VULKAN_SDK}/Include/Bin)
  set(current-input-path ${CMAKE_CURRENT_LIST_DIR}/${SHADER})
  set(current-output-path ${CMAKE_CURRENT_BINARY_DIR}/${SHADER}.spv)
  add_custom_command(
    OUTPUT ${current-output-path}
    COMMAND ${GLSLC} -o ${current-output-path} ${current-input-path}
    DEPENDS ${current-input-path}
    IMPLICIT_DEPENDS CXX ${current-shader-path}
    VERBATIM)
  set_source_files_properties(${current-output-path} PROPERTIES GENERATED TRUE)
  target_sources(${TARGET} PRIVATE ${current-output-path})
endfunction(add_shader)
```

`${CMAKE_CURRENT_BINARY_DIR}` や `${CMAKE_CURRENT_BINARY_DIR}` などは 関数定義時ではなく実行時の内容になるぽい。

# add_custom_target

- [CMakeで自動生成ファイルを出力させる](https://blog.daionet.gr.jp/knok/2015/03/26/cmake-cutsom-command/)
- [CMake: カスタムターゲットによるグループ化](https://qiita.com/mrk_21/items/6d7c70edb6a64fa1a28b)
