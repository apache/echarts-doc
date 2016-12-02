# UDPATE DATA
# Also see <https://en.wikipedia.org/wiki/ISO_3166-1>

wget https://raw.githubusercontent.com/umpirsky/country-list/master/data/zh_CN/country.json -O globalRegion-zh_CN.json
wget https://raw.githubusercontent.com/umpirsky/country-list/master/data/en/country.json -O globalRegion-en.json

function toAMD()
{
    name="$1"
    tmpName="./qwertyuiopqwertyuiop.json"
    echo "define(" | cat - ${name} > ${tmpName} ; mv ${tmpName} ${name}.js
    echo ");" >> ${name}.js
}

toAMD "./globalRegion-zh_CN.json"
toAMD "./globalRegion-en.json"
toAMD "./latlong.json"

