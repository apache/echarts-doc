basepath=$(cd `dirname $0`; pwd)

node ${basepath}/build.js $1 # $1 is myname, than use configmyname.js but not config.js.
cp -R ${basepath}/dist/cn/ ${basepath}/../echarts-home/doc/cn/