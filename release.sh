basepath=$(cd `dirname $0`; pwd)


# Build cn doc for www.echartsjs.com.
node ${basepath}/build.js
# Do not rm, keep option3.json.
cp -R ${basepath}/public/cn/documents/cn/ ${basepath}/../echarts-www/documents/cn/


# Build en doc for gf-page of echarts-doc and apache.echarts.com.
node ${basepath}/build.js github
# Do not rm, keep option3.json.
cp -R ${basepath}/public/en/documents/en/ ${basepath}/../echarts-www/documents/en/
cp -R ${basepath}/public/en/documents/en/ ${basepath}/../incubator-echarts-website/documents/en/


# Copy asset.
# Do not rm, keep option3.json
cp -R ${basepath}/asset/ ${basepath}/../echarts-www/documents/asset/


# Copy blog.
rm -r ${basepath}/../echarts-www/blog
cp -R ${basepath}/blog ${basepath}/../echarts-www/
