# Link

| directory        | target                  |
|------------------|-------------------------|
| LINK_DIRECTORIES | TARGET_LINK_DIRECTORIES |
| LINK_LIBRARIES   | TARGET_LINK_LIBRARIES   |

## directories

directory

```CMake
LINK_DIRECTORIES(libpath/lib)
```

target

```CMake
# from CMake-3.13
TARGET_LINK_DIRECTORIES(${TARGET_NAME} PRIVATE libpath)
```

## libraries

directory

```CMake
LINK_LIBRARIES(libpath)
```

target

```CMake
TARGET_LINK_LIBRARIES(MediaSessionPlaybackExample PRIVATE
     Mf
     Mfplat
     Mfuuid
     strmiids
     )
```

