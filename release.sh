#!/bin/bash

# ------------------------------------------------------------------------
# Usage:
# sh release.sh --env asf
# sh release.sh --env echartsjs
# sh release.sh --env dev # the same as "debug"
# # Check `./config` to see the available env
# ------------------------------------------------------------------------

while [[ $# -gt 0 ]]; do
    case "$1" in
        --env) envType="$2"; shift; shift ;;
        --env=*) envType="${1#*=}"; shift ;;
        *) shift ;;
    esac
done
if [[ ! -n "${envType}" ]]; then
    echo "--env must be specified."
    exit 1;
fi

basepath=$(cd `dirname $0`; pwd)
currPath=$(pwd)


# Build zh doc for www.echartsjs.com.
cd ${basepath}
node ./build.js --env ${envType}
# Build doc site
npm run build:site
cd ${currPath}
# Do not rm, keep option3.json.
mkdir -p ${basepath}/../echarts-www/release/ \
    ${basepath}/../echarts-www/release/zh \
    ${basepath}/../echarts-www/release/zh/js \
    ${basepath}/../echarts-www/release/zh/css \
    ${basepath}/../echarts-www/release/en \
    ${basepath}/../echarts-www/release/en/js \
    ${basepath}/../echarts-www/release/en/css

cp -R ${basepath}/public/zh/documents/ ${basepath}/../echarts-www/release/zh/documents/
cp -R ${basepath}/public/en/documents/ ${basepath}/../echarts-www/release/en/documents/

cp ${basepath}/public/js/doc-bundle.js ${basepath}/../echarts-www/release/zh/js/doc-bundle.js
cp ${basepath}/public/js/doc-bundle.js ${basepath}/../echarts-www/release/en/js/doc-bundle.js

cp -R ${basepath}/public/css/ ${basepath}/../echarts-www/release/zh/css/
cp -R ${basepath}/public/css/ ${basepath}/../echarts-www/release/en/css/

cp ${basepath}/public/en/documents/changelog.html ${basepath}/../echarts-www/release/en/documents/
cp ${basepath}/public/zh/documents/changelog.html ${basepath}/../echarts-www/release/zh/documents/


# Copy blog.
rm -r ${basepath}/../echarts-www/blog
cp -R ${basepath}/blog ${basepath}/../echarts-www/
