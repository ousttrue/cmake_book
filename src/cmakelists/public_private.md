# Public & Private

public 指定した設定は、link した外にも伝搬するぽい。

例えば、ライブラリに対して include パスを設定するときに、
ライブラリのビルドのみで使う場合は `private` 、
ライブラリのユーザーにも公開したい場合は `public` とする。

```CMake
# library

TARGET_INCLUDE_DIRECTORIES(SOME_LIB
PRIVATE
    private_include_dir # user には不要
PUBLIC
    public_include_dir # user の include path にも追加したい
)
```

```CMake
# library user

TARGET_LINK_LIBRARIES(USER
    SOME_LIB # public 設定を取り込むことができる
)
```

ビルド済みや HeaderOnly に対して `ADD_LIBRARY` する場合向けに `interface` がある。

