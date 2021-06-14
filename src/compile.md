# compile

## options

project

```
SET(CMAKE_CXX_FLAGS "/wd4267 /wd4530 /wd4312")

ADD_COMPILE_OPTIONS("$<$<C_COMPILER_ID:MSVC>:/utf-8>")
ADD_COMPILE_OPTIONS("$<$<CXX_COMPILER_ID:MSVC>:/utf-8>")

add_compile_options(
    "$<$<CONFIG:Debug>:/MTd>"
    "$<$<CONFIG:RelWithDebInfo>:/MT>"
    "$<$<CONFIG:Release>:/MT>"
    "$<$<CONFIG:MinSizeRel>:/MT>"
)
```

target

```
TARGET_COMPILE_OPTIONS(${TARGET_NAME}
PRIVATE
    /wd4251 
    /wd4996 
    /wd4005
)
```

## c++ standard

project

```
SET(CMAKE_CXX_STANDARD 17)
SET(CMAKE_CXX_STANDARD 20)
```

target

```
SET_PROPERTY(TARGET ${TARGET_NAME} PROPERTY CXX_STANDARD 20)
```

## include

project

```
INCLUDE_DIRECTORIES(libpath/include)
```
## definitions

project

```
ADD_DEFINITIONS(-DHOGE)
```

target

```
TARGET_COMPILE_DEFINITIONS(${TARGET_NAME}
PRIVATE
    DLL_EXPORT
PUBLIC
    WIN32
    _WINDOWS
    USING_GENERATED_CONFIG_H
    $<$<NOT:$<CONFIG:Debug>>:NDEBUG>
    $<$<CONFIG:Debug>:_DEBUG>
)        
```
