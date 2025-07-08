https://github.com/openssl/openssl

# build: MSVC

- perl
- [nasm](https://www.nasm.us/)

```sh
$ perl Configure --prefix=C:/gnome --openssldir=C:/gnome/ssl
$ nmake install
```

## use cmake

https://cmake.org/cmake/help/latest/module/FindOpenSSL.html

`OPENSSL_ROOT_DIR=C:/gnome`

```cmake
find_package(OpenSSL REQUIRED)
```
