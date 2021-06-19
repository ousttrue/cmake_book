# public_private

public 指定した設定は、link した外にも伝搬するぽい。

```
TARGET_INCLUDE_DIRECTORIES(SOME_LIB
PRIVATE
    private_include_dir
PUBLIC
    public_include_dir
)
```

例えば、ライブラリに対して include パスを設定するときに、
ライブラリのビルドのみで使う場合は `private` 、
ライブラリのユーザーにも公開したい場合は `public` とする。

```
TARGET_LINK_LIBRARIES(USER
    SOME_LIB # public 設定を取り込むことができる
)
```

特殊な場合に、 `interface` がある。
