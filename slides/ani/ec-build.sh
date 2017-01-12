
ecDevDir=../../../echarts
zrDevDir=../../../zrender
thisDir=`pwd`

cd ${ecDevDir}/build
sh build.sh
cp ../dist/echarts.js ${thisDir}/asset/common/echarts.min.js
cd ${thisDir}

#alias md2reveal="node ~/Develop/echarts-home/slides/md2reveal/bin/cli.js"
