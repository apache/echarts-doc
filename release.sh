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


# Build cn doc for www.echartsjs.com.
cd ${basepath}
node ./build.js --env ${envType}
cd ${currPath}
# Do not rm, keep option3.json.
cp -R ${basepath}/public/documents/zh/ ${basepath}/../echarts-www/documents/zh/
cp -R ${basepath}/public/documents/en/ ${basepath}/../echarts-www/documents/en/

# Copy asset.
# Do not rm, keep option3.json
cp -R ${basepath}/asset/ ${basepath}/../echarts-www/documents/asset/


# Copy blog.
rm -r ${basepath}/../echarts-www/blog
cp -R ${basepath}/blog ${basepath}/../echarts-www/
