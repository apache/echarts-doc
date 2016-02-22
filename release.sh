basepath=$(cd `dirname $0`; pwd)

node ${basepath}/build.js $1 # $1 is myname, than use configmyname.js but not config.js.
cp -R ${basepath}/test/documents/cn/ ${basepath}/../echarts-home/documents/cn/
# asset
cp -R ${basepath}/asset/ ${basepath}/../echarts-home/documents/asset/
