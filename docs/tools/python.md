# python

python から cmake を呼びだす。

## cmake

<https://pypi.org/project/cmake/>

`cmake.exe` が内包されている。
以下のようにすることで PATH を通せる。

```python
import cmake
os.environ['PATH'] = f'{cmake.CMAKE_BIN_DIR};{os.environ["PATH"]}'
```

## vswhere

<https://pypi.org/project/vswhere/>

`visual studio` の複数のバージョンに対応させる助けとなる。
`CMake` の Generator を選べる。

```python
import vswhere
latest = vswhere.get_latest(products='*')
match latest:
    case {
        'installationVersion': version,
        'installationPath': path,
    }:
        version = version.split('.')
        msvcCompiler = f'{path}\\VC\\Tools\\MSVC\\{version[0]}\\bin\\HostX64\\x64\\cl.exe'
        return msvcCompiler, tuple(int(v) for v in version[:2])
```

