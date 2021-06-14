Object.assign(window.search, {"doc_urls":["minimal.html#minimal","output.html#output_folder","executable.html#executable","executable.html#glob","lib.html#lib","compile.html#compile","compile.html#options","compile.html#c-standard","compile.html#definitions","link.html#link","configure.html#configure","configure.html#generator"],"index":{"documentStore":{"docInfo":{"0":{"body":7,"breadcrumbs":2,"title":1},"1":{"body":12,"breadcrumbs":2,"title":1},"10":{"body":0,"breadcrumbs":2,"title":1},"11":{"body":14,"breadcrumbs":2,"title":1},"2":{"body":0,"breadcrumbs":2,"title":1},"3":{"body":6,"breadcrumbs":2,"title":1},"4":{"body":0,"breadcrumbs":2,"title":1},"5":{"body":0,"breadcrumbs":2,"title":1},"6":{"body":15,"breadcrumbs":2,"title":1},"7":{"body":11,"breadcrumbs":3,"title":2},"8":{"body":11,"breadcrumbs":2,"title":1},"9":{"body":0,"breadcrumbs":2,"title":1}},"docs":{"0":{"body":"CMAKE_MINIMUM_REQUIRED(VERSION 3.20.0)\nPROJECT(project_name VERSION 0.1.0) ADD_EXECUTABLE(hello main.cpp\n)","breadcrumbs":"minimal » minimal","id":"0","title":"minimal"},"1":{"body":"SET(CMAKE_ARCHIVE_OUTPUT_DIRECTORY_DEBUG ${CMAKE_BINARY_DIR}/Debug/lib) SET(CMAKE_LIBRARY_OUTPUT_DIRECTORY_DEBUG ${CMAKE_BINARY_DIR}/Debug/lib) SET(CMAKE_RUNTIME_OUTPUT_DIRECTORY_DEBUG ${CMAKE_BINARY_DIR}/Debug/bin) SET(CMAKE_ARCHIVE_OUTPUT_DIRECTORY_RELEASE ${CMAKE_BINARY_DIR}/Release/lib) SET(CMAKE_LIBRARY_OUTPUT_DIRECTORY_RELEASE ${CMAKE_BINARY_DIR}/Release/lib) SET(CMAKE_RUNTIME_OUTPUT_DIRECTORY_RELEASE ${CMAKE_BINARY_DIR}/Release/bin)","breadcrumbs":"output_folder » output_folder","id":"1","title":"output_folder"},"10":{"body":"","breadcrumbs":"configure » configure","id":"10","title":"configure"},"11":{"body":"-G \"Visual Studio 15 2017 Win64 -G \"Visual Studio 16 2019\" -A x64 -G Ninja","breadcrumbs":"configure » Generator","id":"11","title":"Generator"},"2":{"body":"","breadcrumbs":"executable » executable","id":"2","title":"executable"},"3":{"body":"FILE(GLOB SRC *.cpp *.h\n) ADD_EXECUTABLE(hello ${SRC})","breadcrumbs":"executable » glob","id":"3","title":"glob"},"4":{"body":"","breadcrumbs":"lib » lib","id":"4","title":"lib"},"5":{"body":"","breadcrumbs":"compile » compile","id":"5","title":"compile"},"6":{"body":"project SET(CMAKE_CXX_FLAGS \"/wd4267 /wd4530 /wd4312\") ADD_COMPILE_OPTIONS(\"$<$<C_COMPILER_ID:MSVC>:/utf-8>\")\nADD_COMPILE_OPTIONS(\"$<$<CXX_COMPILER_ID:MSVC>:/utf-8>\") target TARGET_COMPILE_OPTIONS(${TARGET_NAME}\nPRIVATE /wd4251 /wd4996 /wd4005\n)","breadcrumbs":"compile » options","id":"6","title":"options"},"7":{"body":"project SET(CMAKE_CXX_STANDARD 17)\nSET(CMAKE_CXX_STANDARD 20) target SET_PROPERTY(TARGET ${TARGET_NAME} PROPERTY CXX_STANDARD 20)","breadcrumbs":"compile » c++ standard","id":"7","title":"c++ standard"},"8":{"body":"project target TARGET_COMPILE_DEFINITIONS(${TARGET_NAME}\nPRIVATE DLL_EXPORT\nPUBLIC WIN32 _WINDOWS USING_GENERATED_CONFIG_H $<$<NOT:$<CONFIG:Debug>>:NDEBUG> $<$<CONFIG:Debug>:_DEBUG>\n)","breadcrumbs":"compile » definitions","id":"8","title":"definitions"},"9":{"body":"","breadcrumbs":"link » link","id":"9","title":"link"}},"length":12,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"0":{".":{"1":{".":{"0":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"1":{"5":{"df":1,"docs":{"11":{"tf":1.0}}},"6":{"df":1,"docs":{"11":{"tf":1.0}}},"7":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}},"2":{"0":{"1":{"7":{"df":1,"docs":{"11":{"tf":1.0}}},"9":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}},"df":1,"docs":{"7":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"3":{".":{"2":{"0":{".":{"0":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"8":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}},"_":{"df":0,"docs":{},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"8":{"tf":1.0}}}}},"df":0,"docs":{}}}}},"a":{"d":{"d":{"_":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"_":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"(":{"\"":{"$":{"<":{"$":{"<":{"c":{"_":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"_":{"df":0,"docs":{},"i":{"d":{":":{"df":0,"docs":{},"m":{"df":0,"docs":{},"s":{"df":0,"docs":{},"v":{"c":{">":{":":{"/":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"f":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"x":{"df":0,"docs":{},"x":{"_":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"_":{"df":0,"docs":{},"i":{"d":{":":{"df":0,"docs":{},"m":{"df":0,"docs":{},"s":{"df":0,"docs":{},"v":{"c":{">":{":":{"/":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"f":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"a":{"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"(":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.0}}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"c":{"df":1,"docs":{"7":{"tf":1.0}},"m":{"a":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"_":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"y":{"_":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"}":{"/":{"d":{"df":0,"docs":{},"e":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"/":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"b":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"/":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"b":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"_":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"d":{"(":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{":":{"d":{"df":0,"docs":{},"e":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{">":{":":{"_":{"d":{"df":0,"docs":{},"e":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"df":1,"docs":{"8":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"10":{"tf":1.0}}}}}}}}},"p":{"df":0,"docs":{},"p":{"df":1,"docs":{"3":{"tf":1.0}}}},"x":{"df":0,"docs":{},"x":{"_":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"n":{"d":{"a":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"8":{"tf":1.0}}}}}}}},"l":{"df":0,"docs":{},"l":{"_":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"8":{"tf":1.0}}}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}}}},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"(":{"df":0,"docs":{},"g":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"b":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}},"g":{"df":1,"docs":{"11":{"tf":1.7320508075688772}},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"11":{"tf":1.0}}}}}},"l":{"df":0,"docs":{},"o":{"b":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}},"h":{"df":1,"docs":{"3":{"tf":1.0}}},"l":{"df":0,"docs":{},"i":{"b":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"k":{"df":1,"docs":{"9":{"tf":1.0}}}}}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{".":{"c":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"j":{"a":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"t":{":":{"$":{"<":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{":":{"d":{"df":0,"docs":{},"e":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{">":{">":{":":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"e":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"df":1,"docs":{"8":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"_":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}}}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"a":{"df":0,"docs":{},"t":{"df":2,"docs":{"6":{"tf":1.0},"8":{"tf":1.0}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"(":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"_":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}},"df":3,"docs":{"6":{"tf":1.0},"7":{"tf":1.0},"8":{"tf":1.0}}}},"df":0,"docs":{}}},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"7":{"tf":1.0}}}}}}}}},"u":{"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"(":{"c":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"_":{"a":{"df":0,"docs":{},"r":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"_":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"_":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"y":{"_":{"d":{"df":0,"docs":{},"e":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}},"c":{"df":0,"docs":{},"x":{"df":0,"docs":{},"x":{"_":{"df":0,"docs":{},"f":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"n":{"d":{"a":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"7":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"y":{"_":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"_":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"y":{"_":{"d":{"df":0,"docs":{},"e":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"_":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"_":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"y":{"_":{"d":{"df":0,"docs":{},"e":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"_":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"y":{"(":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}}}}},"df":0,"docs":{}}},"r":{"c":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"t":{"a":{"df":0,"docs":{},"n":{"d":{"a":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{},"u":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}}},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"_":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"_":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"(":{"$":{"df":0,"docs":{},"{":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"_":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"8":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"(":{"$":{"df":0,"docs":{},"{":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"_":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}}},"df":3,"docs":{"6":{"tf":1.0},"7":{"tf":1.0},"8":{"tf":1.0}}}}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"_":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"d":{"_":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"_":{"df":0,"docs":{},"h":{"df":1,"docs":{"8":{"tf":1.0}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}},"w":{"d":{"4":{"0":{"0":{"5":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"2":{"5":{"1":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"6":{"7":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"3":{"1":{"2":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"5":{"3":{"0":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"9":{"9":{"6":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"3":{"2":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}},"6":{"4":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"x":{"6":{"4":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"breadcrumbs":{"root":{"0":{".":{"1":{".":{"0":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"1":{"5":{"df":1,"docs":{"11":{"tf":1.0}}},"6":{"df":1,"docs":{"11":{"tf":1.0}}},"7":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}},"2":{"0":{"1":{"7":{"df":1,"docs":{"11":{"tf":1.0}}},"9":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}},"df":1,"docs":{"7":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"3":{".":{"2":{"0":{".":{"0":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"8":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}},"_":{"df":0,"docs":{},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"8":{"tf":1.0}}}}},"df":0,"docs":{}}}}},"a":{"d":{"d":{"_":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"_":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"(":{"\"":{"$":{"<":{"$":{"<":{"c":{"_":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"_":{"df":0,"docs":{},"i":{"d":{":":{"df":0,"docs":{},"m":{"df":0,"docs":{},"s":{"df":0,"docs":{},"v":{"c":{">":{":":{"/":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"f":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"x":{"df":0,"docs":{},"x":{"_":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"_":{"df":0,"docs":{},"i":{"d":{":":{"df":0,"docs":{},"m":{"df":0,"docs":{},"s":{"df":0,"docs":{},"v":{"c":{">":{":":{"/":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"f":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"a":{"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"(":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":2,"docs":{"0":{"tf":1.0},"3":{"tf":1.0}}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"c":{"df":1,"docs":{"7":{"tf":1.4142135623730951}},"m":{"a":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"_":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"y":{"_":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"}":{"/":{"d":{"df":0,"docs":{},"e":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"/":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"b":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"/":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"b":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"_":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"d":{"(":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":4,"docs":{"5":{"tf":1.7320508075688772},"6":{"tf":1.0},"7":{"tf":1.0},"8":{"tf":1.0}}}}}},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{":":{"d":{"df":0,"docs":{},"e":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{">":{":":{"_":{"d":{"df":0,"docs":{},"e":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"df":1,"docs":{"8":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":2,"docs":{"10":{"tf":1.7320508075688772},"11":{"tf":1.0}}}}}}}}},"p":{"df":0,"docs":{},"p":{"df":1,"docs":{"3":{"tf":1.0}}}},"x":{"df":0,"docs":{},"x":{"_":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"n":{"d":{"a":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}}}}}}},"l":{"df":0,"docs":{},"l":{"_":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"8":{"tf":1.0}}}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":2,"docs":{"2":{"tf":1.7320508075688772},"3":{"tf":1.0}}}}},"df":0,"docs":{}}}},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"(":{"df":0,"docs":{},"g":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"b":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}},"g":{"df":1,"docs":{"11":{"tf":1.7320508075688772}},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}}}},"l":{"df":0,"docs":{},"o":{"b":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"h":{"df":1,"docs":{"3":{"tf":1.0}}},"l":{"df":0,"docs":{},"i":{"b":{"df":1,"docs":{"4":{"tf":1.7320508075688772}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"k":{"df":1,"docs":{"9":{"tf":1.7320508075688772}}}}}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{".":{"c":{"df":0,"docs":{},"p":{"df":0,"docs":{},"p":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}}}}},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"j":{"a":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"t":{":":{"$":{"<":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{":":{"d":{"df":0,"docs":{},"e":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{">":{">":{":":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"e":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"df":1,"docs":{"8":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}}}},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"_":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}}}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"a":{"df":0,"docs":{},"t":{"df":2,"docs":{"6":{"tf":1.0},"8":{"tf":1.0}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"(":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"_":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}},"df":3,"docs":{"6":{"tf":1.0},"7":{"tf":1.0},"8":{"tf":1.0}}}},"df":0,"docs":{}}},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"7":{"tf":1.0}}}}}}}}},"u":{"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"(":{"c":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"_":{"a":{"df":0,"docs":{},"r":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"_":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"_":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"y":{"_":{"d":{"df":0,"docs":{},"e":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}},"c":{"df":0,"docs":{},"x":{"df":0,"docs":{},"x":{"_":{"df":0,"docs":{},"f":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"n":{"d":{"a":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"7":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"y":{"_":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"_":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"y":{"_":{"d":{"df":0,"docs":{},"e":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"_":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"_":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"y":{"_":{"d":{"df":0,"docs":{},"e":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"_":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"y":{"(":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}}}}},"df":0,"docs":{}}},"r":{"c":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"t":{"a":{"df":0,"docs":{},"n":{"d":{"a":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"7":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{},"u":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}}},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"_":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"_":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"(":{"$":{"df":0,"docs":{},"{":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"_":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"8":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"(":{"$":{"df":0,"docs":{},"{":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"_":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}}},"df":3,"docs":{"6":{"tf":1.0},"7":{"tf":1.0},"8":{"tf":1.0}}}}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"_":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"d":{"_":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"_":{"df":0,"docs":{},"h":{"df":1,"docs":{"8":{"tf":1.0}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"11":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}},"w":{"d":{"4":{"0":{"0":{"5":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"2":{"5":{"1":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"6":{"7":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"3":{"1":{"2":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"5":{"3":{"0":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"9":{"9":{"6":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"3":{"2":{"df":1,"docs":{"8":{"tf":1.0}}},"df":0,"docs":{}},"6":{"4":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"x":{"6":{"4":{"df":1,"docs":{"11":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"title":{"root":{"c":{"df":1,"docs":{"7":{"tf":1.0}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"n":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"10":{"tf":1.0}}}}}}}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"8":{"tf":1.0}}}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}}}},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"11":{"tf":1.0}}}}}},"l":{"df":0,"docs":{},"o":{"b":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}},"l":{"df":0,"docs":{},"i":{"b":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"k":{"df":1,"docs":{"9":{"tf":1.0}}}}}},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}}}}},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"_":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}}}},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"n":{"d":{"a":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});