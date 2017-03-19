
ecDevDir=~/Develop/echarts
zrDevDir=~/Develop/zrender
ecGLDevDir=~/Develop/echarts-gl
thisDir=`pwd`

cd ${zrDevDir}
npm run prepublish

cd ${ecDevDir}/build
sh build.sh
cp ../dist/echarts.js ${thisDir}/asset/common/echarts.min.js
cd ${ecGLDevDir}
webpack
cp dist/echarts-gl.js ${thisDir}/asset/common/echarts-gl.js

cd ${thisDir}

#alias md2reveal="node ~/Develop/echarts-home/slides/md2reveal/bin/cli.js"
