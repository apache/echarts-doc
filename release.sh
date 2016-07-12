basepath=$(cd `dirname $0`; pwd)

node ${basepath}/build.js $1 # $1 is myname, than use configmyname.js but not config.js.

rm ${basepath}/../echarts-home/documents/cn/*
cp -R ${basepath}/public/documents/cn/ ${basepath}/../echarts-home/documents/cn/


# asset
rm -r ${basepath}/../echarts-home/documents/asset/*
cp -R ${basepath}/asset/ ${basepath}/../echarts-home/documents/asset/
