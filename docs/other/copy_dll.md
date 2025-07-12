
```cmake
copy dll to bin(windows)
add_custom_command(
  TARGET ${TARGET_NAME}
  POST_BUILD
  COMMAND
    ${CMAKE_COMMAND} -E copy_if_different $<TARGET_RUNTIME_DLLS:${TARGET_NAME}>
    $<TARGET_FILE_DIR:${TARGET_NAME}>
  COMMAND_EXPAND_LISTS)
```
