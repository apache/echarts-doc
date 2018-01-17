basepath=$(cd `dirname $0`; pwd)

node ${basepath}/build.js $1 # $1 is myname, than use configmyname.js but not config.js.

# do not rm, keep option3.json
cp -R ${basepath}/public/cn/documents/cn/ ${basepath}/../echarts-www/documents/cn/


# asset
# do not rm, keep option3.json
cp -R ${basepath}/asset/ ${basepath}/../echarts-www/documents/asset/


# github
node ${basepath}/build.js github



# blog
rm -r ${basepath}/../echarts-www/blog
cp -R ${basepath}/blog ${basepath}/../echarts-www/
