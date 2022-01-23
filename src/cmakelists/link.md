# Link

| global           | target                  |
|------------------|-------------------------|
| LINK_DIRECTORIES | TARGET_LINK_DIRECTORIES |
| LINK_LIBRARIES   | TARGET_LINK_LIBRARIES   |

## directories

project

```CMake
LINK_DIRECTORIES(libpath/lib)
```

target

```CMake
# from CMake-3.13
TARGET_LINK_DIRECTORIES(${TARGET_NAME} PRIVATE libpath)
```

## libraries

project

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

