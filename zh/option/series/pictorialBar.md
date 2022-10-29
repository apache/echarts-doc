
{{ target: series-pictorialBar }}

# series.pictorialBar(Object)

**象形柱图**

象形柱图是可以设置各种具象图形元素（如图片、[SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData) 等）的柱状图。往往用在信息图中。用于有至少一个类目轴或时间轴的[直角坐标系](~grid)上。

**示例：**
~[800x400](${galleryViewPath}pictorialBar-hill&reset=1&edit=1)


**布局**

象形柱图可以被想象为：它首先是个柱状图，但是柱状图的柱子并不显示。这些柱子我们称为『基准柱（reference bar）』，根据基准柱来定位和显示各种象形图形（包括图片）。

每个象形图形根据基准柱的定位，是通过 [symbolPosition](~series-pictorialBar.symbolPosition)、[symbolOffset](~series-pictorialBar.symbolOffset) 来调整其于基准柱的相对位置。

参见例子：
~[800x600](${galleryViewPath}doc-example/pictorialBar-position&reset=1&edit=1)

可以使用 [symbolSize](~series-pictorialBar.symbolSize) 调整大小，从而形成各种视图效果。

参见例子：
~[800x600](${galleryViewPath}doc-example/pictorialBar-symbolSize&reset=1&edit=1)


**象形图形类型**

每个图形可以配置成『单独』和『重复』两种类型，即通过 [symbolRepeat](~series-pictorialBar.symbolRepeat) 来设置。

+ 设置为 `false`（默认），则一个图形来代表一个数据项。
+ 设置为 `true`，则一组重复的图形来代表一个数据项。

参见例子：
~[800x400](${galleryViewPath}doc-example/pictorialBar-repeat&reset=1&edit=1)

每个象形图形可以是基本图形（如 `'circle'`, `'rect'`, ...）、[SVG PathData](http://www.w3.org/TR/SVG/paths.html#PathData)、图片，参见：[symbolType](~series-pictorialBar.symbolType)。

参见例子：
~[800x400](${galleryViewPath}doc-example/pictorialBar-graphicType&reset=1&edit=1)

可以使用 [symbolClip](~series-pictorialBar.symbolClip) 对图形进行剪裁。

参见例子：
~[800x600](${galleryViewPath}doc-example/pictorialBar-clip&reset=1&edit=1)

<ExampleBaseOption name="pictorial-bar" title="基础象形柱图" title-en="Basic Pictorial Bar">
var spirit = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHUAAACUCAYAAACtHGabAAAACXBIWXMAABcSAAAXEgFnn9JSAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAABvgSURBVHja7J17dBPXnce/dzR6WH7IwTbYxPgBBJsAtgwJXcchCM5ZEtJwcHqaRxs4hXQh+4dT3O1hd9ukJ05LT/dsT4lTyO7JSbfrQHabbdqNE/qgTjcR5KTOsxjCK4QGGwgy2ARJtoSec/ePGUkzo9HLGj2MdTk62PLM6KffZ76/+7u/e2eGUEoxHduota0BQA+ATgAm0Z9GAPQD6K22HBnGDGxkOkIdtbb1AHgqwWYOAN3VliN9Baj5D7QPwDdS2GXrTAM7raCOWts6Abw6hV3bqi1HhmYKVGaa2dub5f0KUDOsUguA+inuvlpIrApQ86xZ0tzfXIB647UC1Hxr77m0zSi0Gwcq2bvO/K5b25nmYQrZbx4BLQfQf8Ch16d5KGsBav60fgD1JzwsBl3aqR7jxWrLEXsBan6otAfA6tDv37eVTOUwDvA14kKfmgdALZDVd094WHR/XpoqUMtMK+znZZlQ6EeHIZ19Cbd7yrx49uYJlGni2j4CoHMmlQdDjc3jftQU648HnXrc7tJhfZkX95T6sLQogFptEBf9Gpg03BulDP3vmTg7k7dKJXvXdQN4Zqr7064BUhin5tl4NB2gAI4WSg/5lyilGzLtBaR5BFUYvrQWkNwgUIWw+1QBx42lVLUyVXMBaR5AVTnsmoSixYxuOR3SkL3rGsDPnphUPKwDgJl2DQwXlJq7sGtS+ZgmAEMzWbE5UyrZu64TU1sZmEp7DUD3TFNtTqAKtd0hTH0hWartEIBe2jXQX4Ca2eQoF0OYESHk993I6s06VCE5OpcH3/2QALifdg3YC1DTg9qH1C6byEZ7UYDbX4CaOlALgLfy2B83RHjONlQrRMtT8rxN2+Qqa1CngUrjqbdXUK+9AHX6qlSpOQS4vfkONytQs1RoKMAVWrbKhL030IjBJIyxh4WlNzNPqdO4L02lz91CuwasM0mpPbixWz2At8jedb1C+fPGVuoMUGleqjbTSu3GzGoh1fbckErNoxpvLosXnbnIkDOp1B7M7LYagFVYVDf9lZroWpgZ1hwALLRrYGi6K7WzAFQyrs2qYjMFtbvAMndgVYcqGF5YaZ9DsExBpVkH25fpIkUmoHYW2MVtreCvv50eUIXZmEKClMRwJ5MFCrWVuqXAK+n2VKYWnKs2ThX6iWsFVim1EfCXiNjzVamWAqOUWz0yUHlTE2ohQZpa26H2MKcANT9ab95BFTr8QtabXjasWvel1n2U8rY/vcPviXrvOKuDk+Tdzd561PKjKtkv2btuCDksDS4J+NDh82Ae58fSgA9L/T6YKJdwPwdhcFyrwwWGxQWNFu/oDPiz1pBLsGvUWDWRNtRcDGXKKIf1Xjfu9bpwh8+TFMBU2js6A/6gK8bv9UZc1GT1pnCHaNeAJR+gdiJLa3of8kziXq8L673urHn5OKvDy4ZSvFxUkq2Q3Zbu3KsaVpozrcqdLjs+HRvBHudYVoECwNKAD7smr+Kj8Qv4mXMMtcFApj+yOx+UakUGLqcooxweczux3e1QPbym2142lOBfi2/KVGh2AGhIp8qUl0p9yDOJj8YvYKfrWt4BBYCHPZN464vPsdNlz8ThTemO+Zk0Vdqg5vi0NhjAq3Yb9jjHcFPJrLweWJooh52ua/jo6gXFYVOaLXdQ1VTpQ8LZ3+HzgKmsg/HBXWAbl+cEGNEZk952XjCA/ms2tVW7MZ2J9LyA+sPJq9jjHIOJcjzQjd8D0RnBNqzICVRty93QNt2ZfAXnlnbsdF3Dq3YbytTrLjqnJdQyyuFVuw2PuZ28MSKgAKBtXgWmoi7rULmrIzCs3Z40WMZUDcPa7ejwedB/zYYlAZ8aZlhyBbU8HaD912zo8HkUgYZa0drtWYdKhWFTsmC5qyPQNt0JbfMqLA341AKbM6ir0wG6VPjiTGmlItAQbMOabVmFGrx0OvxzMmDDJ8GabWAbV8AkfL80wdYLiWhOhjRpASV6I4rWd8dNTrTNq1Lq49RuicBy4+dF224DU1mnFlhzVqFOdapo18TVMFAA0HdsSqrfTKWPEzd9xyNgSiunoNZTUZ8fK2JQn1uSORet3Q6iN8JEOexxjqWTPJnzXqk7XXY87JmMZI2NK1ICZVi7Hbrb7k8tk21aBeMDu1JOuKhCOVLbvComWLFamYq6sJ1LAz7scY5NG6gpJUl3+D3Y6YpM5jCllTCsTb2v1N9+PwxrtiU1liQ6I4iefxU/uCulEygogpQMWOpzSX7XtdwNzdzFAID1Xje2Cxl+NhLRdKAmfRaVCWFIGhY3pTTIlzvWuPF7CdXHVNZFKV3f8UhyH+Jzx/18OVilk8CwdhuInv+OuyavTqV/XZ1tqCmE3WuYJ5rdYBtXpF0tYirrUPzgrrjhWFMZfedZXcvdKLpnR8ITKjg+kvDEEoNVCtdMaSV0LXdH8onJqxn1s8c22OCxDXZnHGptMBAuLoSy3aTVkmQ4Ln5gFzRzFR6EHAMc27iCV3qcBIpOjCcVMUJguavKJ4HutvvDn9Ph8+AhUU6RZELakATMco9tsAf8PZQ7Mw51z8RYlFKmko0mUq1x4/dQdM8OybHZm5vj7xMngeKSgCoGS+PM8+o7NoV//kdXyotEGhIA3QL+Au+nIEyuZBRqaO2QWKVaUThSu7GNK1C8aTcMa7aBKa0EKa2Kr4IECVQqYHVxvhfbuDycNM0LBlJWawyYZo9tcAjAf0I6UzbECHG4IRNOfsztUC05SjWRKt60O+mIECuBohNjKZ1QibqJNNQqD7W9AI5AebGfnRHkfc5jG+zz2AbL1XJsGeUkY1KmtDKnVaFETSmBijWsmUrTzG2WqPWeKSzL8dgGLUK/uSPOZnZGiMcAf7fsYaHDTbs9fF0aYjIZdtUM3+IEiqq8Hkocor/mmZiKOt9C4odJDDGGmvZh0RsmAE95bIPDHttgZ1pQRUYTvRHa5lVxyjc0uVcWmjiBCme0KtnHNi4PnzDrve6kyodfq2tdCMCaQJ3iNhwrUaoH8KrHNtg/lf62NhiQ1Hd1LXdH96VTgZUlwERvRPEDPwTbsFx1+3S3fyVSZfMlXgazud7cixQWyhtq2sNQYz1MdiOAIY9tsFtJ5rEO3CFbs8M2rUoeSrJnfyYAy46pbVqlun1s4/JwlanDfz2hSWtmzy9O4RscEg9p7HE2NAF4xmMbtMoSqZj7LA14Jf0UU1Kh7ACJg8C/QKSv0PuUIuZy1nThxto/A/YRnTGcKXf4Ulyw5k+45nhIDHUoyTpkUn2tOPRqF92p8B1DX1JwDCFRvop+EZCwE2M4cCpgFfbJtH2hhGlpglpwnTGiIc4xCf9nF1OCOpykC0xCX9sb70Ke8BKVkkpJjZcKZzwJOYp/N2ECcnH4HM6cOImLI+dkDlRwXjzFJFCn3L6r42M4c/Ikzpw4kWSiRJOyj8yaF55siFfkry/moVK3B953joAxlST6VlYgcinjUIrn9w6PbdBCQJwUtEw+Po0akIdCD4QzPhTOFJVChHjG/7/v+efx3tuH+V8BLGy+FX//D99GkbGEdx4VHUM4UUjouOETJ4E6Fez79b59ePOPB4VjAbX19eh+4kkUGYsl9sVJt+Lap120Ct7x/4q7WL3VVA34A/C+fxxEy0JTHbeYcjQ0kmGmCBUAWldW1Oriht7mOyNhLORgpUSDRl403H9R/O5/f4P33z4s2ebsqZP43a9/E1E4RP1csgqN+l1q39EPP8BbBw8KQPi3L46M4PnduyX2UZHd0REgvn2hCBavX603lMHzzhCocxKauppE36wvPCwT0mB7nAyY76M/iY7Qt5RUxLyYk6moAzNrnuAwRH9RsUMER1BKQUTArQcPil0Sbm/98aDUeaGwJwebCHIYqNS+N0WfC1F3evb0KXw+MqwcejkqBZzAPqa0MuF88K1Xg6DOSYDVQDu/NhHUfglUcTyO1YK2cQQujEqlWl6tUA/TCsOBO6UOi1ImD5FSitA/yXuUwuN2S2CK85IzJ09KwdEkwEb9rGzfX0+dCn8uodLPd0+6wvZF+kzhG4Rs5xS6FwX7FIdMotY+zodmdsE8QBv3YqxD4iJS0lDZBbXwHzmN4Ghk5qLFFB0SiKEEoOBX1xNEweS/sAARsuFCjDEgUVBrRWVVRPhKjosXdpWAiuybVVkZ+7MV7KRi+wWaoTAdz754CwU6CJ8kkSJ9MiqVlHYZUSWiH/xldMpQqysBVgPfX06Bc/B13buqootNTJGJDy1lldEOE37mVSlyBCcKX1zk99p5dSBU6lQCYFZFJWZVVkSGHnLHxVOoJB9Ttu+W5sVRnxl61dbVSmwM2yyyhYTUm8A+prQSmjkLFP19JykHWA10K5clo1KrIlR5XI5qWhaamiogEIT3nSNhsC0mWQjW6qFdskaWPEQcRiD6khwncgbHv0Sd7fqNnYrh96uPPCJ0UxFVSBQR+iQFwDSk0jj23dv5FRQZjfzniU6qezZ2oqjIKMvsOGmfynGioVFi+yZMcxTdfS9TBe2yW5IZxkRNwDCxMihFrk0NAKsBAkH4jpwG/IEotb49PgJ2/u2SpEjssPCXk4csmUrBUSw1t+GbXY+HFVs7rw5/17UDy9qWR1QBCknAFY0XSbxhSxz7ZlVW4Fv/9F20mJeDEOCmigrc//DXsX7DRol9NKxWMWBIVZvAvmMKM0FlhMVtFgvYedWJgD4rVymfB8hCkzCb3hovCw4ImTApK8EbC4rw4Pu/kmxz/f6nopMisULlMOVhWR4lCRG6IiJKSUlkoK/wXsSNVCxIHipo3tj3pTf/HccclyXH3DSvFS+s/EoioCMAzMLIJa5SgQR339I2NYCp4FdPUOck1l2KHjwfHh9OyWGhzBFcrCREllQhOqGiMlUGvNdx6aP38PEv9+PM738Lj8PO93VEGnZzZV/oHTlQANiceKWlA0CnElBFqIaa9r5QtT9W069cBlLGx3pudBxfNt4s+fsx+6jEb8oDc1FJjxP3q5AmIUKfxf9J7jhxZKXhvizg9eLjl/fjszffgOPiCK6cPIpzb74R3ZfmyL6wn5yjivVepQRUBtRiqGmPWTCKNZ/aHfc80bIwdJjDYNd7SqX1KsdotOfCYV7mMPngnRMlSxwn6ns5IMpxkCpMaJ+9OQDXlSuRAEkpNHqDtNacQ/vCEe3KsNL8aaKpNXM8oDGhCjs9nRDs6hVgmxpwn0ypB2yno8Zt8moLhWxaCzG2lTiPd5xoAIgoOpRi7MSxyN8IMHtJKxatv08x9ObCvtBnHB6PfsDW5oY2xbougK2GmnaLbKVKSkqFoaa9J1HpMNTHzlm3ChtqImtsHX4vjjlGlepy0jM4/L/SeE+kEHHBIJRBywsBMWLq3LbbeaAgSZQOs2efw+/BAdsn0gSp3oz6IlMoxB4ShNVmqGk3C91iUi3Rul9LMmCVwsb+80dFJ7i0EEBlWWV00UBh1QCBgnIgmjER9fllkWWwprr6eAhzYh8AvC4DCgAvf3Zk+bs3dzCGmvZyQZU9iUJtylCF7MoC4MVEhfENNc2SSd19F4YUx4lSb5LoaTgiSmaIOIGR9ns0TtVo8f1fham2HrNvbUHFLU0KfiXRb2XRPv6kj2J1aKj7T1OZLUtZqTDUtNsNNe1bAKxJlBWL1er0e7H/wtHEsyREoXQnfkNxvlWxuhuOksVV1Vj28CYsuve+WGkuSLKrIjJg34jbjrdlF2BpOPo0VGpJX3ZhqGm3GmraLQDaADwrDH4l7fGFfyP5fdfpQ6lZk51VoLFcnjX75H5hKPad3fEna9ahijNjQ017t6GmvcFwcwdDg9xa6g+sRSCwtozRPdpoLB8IbXv+uiNKrRK/kOhxY7jiQoTKT2jyOlyJoYgU36L3JUnSoTEYZdq+8247XpL6xFHsU0+lQJp35rYCuLVulVUHQFOzklwqcxxyPnrzYRg1Z0Pb/OiTw9hc2yI4iIqKdwQAF3EEhXR1BES/y5alhH0tfp+QlIQZVUTMkn07jw/IVfrs6Z+eGPapCDXtq97GwK8VnQC/Iv/Pz50dZij2idX6ozNvi6REQMU10JAHCJE6SfIzJNtQSWGepBYyFQBE3susfYfHR3BgVJL1joy+MPo0bKLhhgq3SlfvUkabHRzDgGVZLL3s+Y54bvZHZw7j2MRlSYgMF7mVQljoxYgcxjDSArncqZAVzaO4UkWpUrl0M2Sfw+/B9iOvS4deAfroBMPgKiZgBLAkH5RqoZRWATACuIoJ6HU6GAjBb188Z2c5+gPxttuGDsjCFeE/nQjOYBgF1YW2Y8JnPREvHIISWJEEhTtpE8iGjlKZRqs4A/btOnMY5687xGH3B5f+bcQ6cQkoxSTG8in8zhZCcCkmKTfKIMiylDIMPfnj4z8jwOHQdh87L2PnyQGJFIjccQT82c8wojM/ohCeEZEpR2pPwOuRqZEK6pGGzqufnoHHYVdMctS2b/+Fo3jus/cjVTiKE5d2f/qDMYZB1fUr4dPNmi9QxYYYXaOgDAMty4LVaDDLFXiUAQlf/vbcuQ+w//NjUY4jjEhZktXwDAjDKM9JylfPg8B58Tw+fGFvBKy8jk546B+/vB+nXnsFH/38OXidjlAPKJsPVce+YxNXsPNEJDkyBYGjQxptRdvC8lk6HeyTE+H76lhUevBe2lAlIXjShoBXB71GQzUaDR3sPTWiC3Bbxds/dvS3OPzFeVnnxSuJMLwSiPACA1ACXmWEifRhiPRp4nVExbPn8NNu//MSAj7+eh7CMJK+9bP/ewOOC+fDww4eKv85kv5SBftGPA7c/ed9cPoj1xb1n9Zg8XVmUdCo2++4wsKISfq5iv2paolSJASDGq5cwSTLQsuyKNJoMPwvp19jOfxQvP2DH74iJE7ihIN3DBHFNAICogQztE84xPIZK2swYPaSVriuXMGHz+/B5RNHw6r1OOw43f9rXDkurcTpTSYhNBPh0CIlpmGfI+jFgx+8AocI6C/OMrA4eLv1FOvnr55jLleIeGmXVtRQvJUQcqvw82WAFM9vRbnGDb/fTxxeL/EHdKT1+4v+I0iwObRPGavHwB2b0VI6R1oojzXQlGWg4SW0gopCkvU4HRh68ecIeL3Kox0aqfrOXX475q/9W8miMMk6KkC2fjc5+0auO/DQB6/gmDOyqmGHjUHvOUZSIemuDz637cd/fHwJf3yaV1CFBIScAFAMQIcSol3WCKfbTbR+P1i/n7hICVn8zw1SsFo9fnLrOmye1yJxdswCghgsEA6LkRjMK8g1NoqPf7kPAZ8vZk13/tp1mLtipaQgL1nxCIU1u0nYd8x5GetkIfcbVwj6zmokQCmlWLA8iAs6bu2nO/5kbchHqGK1ugFyzbgQhnotdD4f0fl84AIBMhkgpPX7SyRgAeCJRXfhiaa7FGczpFUZEUwIC76IfDs+iw34vLj04Xu4fPxYuN/Ul5lQsbAJc1eshMFULi3QC+uNSHj6TSnTim/fgcufYNuR1xMCBaU4WgK0LQsABA7KPxh3OP+UCmCYEOICcDOACYCML2yDQeuBzucjQb8fPr+fGDkOi55o+YUc7KqKevxq5QMwaQ3RU1uyX4hcsTKgiFVCjLdKH9Ehl1KqXJZSsG/n8QHJsCUeUArgm7dw6KvkQknaUdo1YM5LqOIwzIMtIeNzboFhFg+2JBjEpN9PuGAQi7+79FtBhvxUvKtJq8cLbRtxX3WTAlOiXMtVWg4aryacLNio/lSZ6THHKLYdeV3SfwLAM+cYdNuYKKAA4GAJGtv8sLNC1s23Z2nXQHdeQu0jhGwBcEKsWONC1M4uwjWtB2wwSAKBAILBILntO82r3VrmN5A922ZDdRN+suxu1Ism3RUrRpLqeRJABfWRGImTTKZxa8gOvwe7Th/C3s/ek7xvCgK95xhsuaKRzRxQoTxM8GIVh60LgmKgoZYfT2WMFYYbRGDtALwoIZ6qBdBV+qAJBMAGg6SY49Cxtb6cM+r+cM6A2+XH6VrwJTzZvJoPyUrAaGQijcgBxpu1iXnpPlGuKYq2d/g92PPX97D3r+9KhisA0Oriw63ZJS1bUiq1b35bAOcMin5X5cHzGYEqD8VVfPKECYDoUANP1WzMrebwhc+HRW3zzYSQN60matqyMIgRvdQek1aPDTXNeHKxBfXGmyTdpiLMREDjwI2omEBeNHb4Pdhz9l1FmKEhS89FDcoDsWECwGuzOHQ2BeNZ9RrtGujMX6iCao1CcSIEFwBxowZN9y8r1xjYv4BE7uLVMy+I3hoODk30sTbUNGPD3CZsqjMrw0wFaALVhoLyAdsneP3SabwUvaYIAFDv5dVpcZKoMKvU1iwJwFqW0OdpheGMQ1WCCyEsl3/93rcopatlM5ywa4HemthwTVoD7qpswIa5zbirqoHvewlJz8BQEuP34PDYMF63ncaBS6fhiPEcN1MQ6L7EoOcCI02e4thxqIzCsiSpR3WmFYazBlXe3+Jr93aDYHfCxKuKQ99sDofinN11xnK0llejxVSNu6oaASDRpQsA+MtD7H4PDo+dw4jbjmP20RjrlWUwbQy6bdJQq3ieyFKwJFUaak/TroGeaQEVAPDIlxvA3zwk6Sc6Dusp+mdR9FVxOFqcms11xnLUF5fD4fMkhBar1XsJum0MtowxcWHGqjuloFJxa5xKUYJFbtoWOdAEN69Bg5eg28Y7dlhPYS2jsJr4/+XJlbydd9tx3p16JGt1EXReI+j8gkGri8S0lSD2yEucK0yh9Qi+yn+lPv7kPd++bZLsNruJxFlTbXYWGDJSDBVT2FmKISNgZynsGiRU9WohwSkPEJjdwv8uEkl8VGhJZLyqqjXrUIUb/YdDb3kAMLsJLA4GFifvUFMQN1RrXB7AsH7Kfn6Rdg1syXeoViR43orZRQTQ/P9qqDlX7elabqqhN1zvQIrPKM8qVLJ3XTeAZ6ayr8U5/dQ8oqcwtwRgTz9z2Uq7BvryLlESHsfcM9X9rWUU1rKgopotToJ6b/6pubuBUwMowF+kln9Qwd9LQrWH0g8V84lRn/CUkvIAYHHySrY4cx+yX5vFoX+Wao+ybkhJQNkIv0JydC6bTpUnYKud2YOsYtiNDKO6Bki+KbUn20qxs9EhW9wvZxJyZ1NQVaBQuMIwp1CFvvQb+dDHZQPy1oVBDBWrHv2s+VZR2oI8bbEgm92AxcGknGFvXRhEXxWntpmOVCPdjIYaH3IwnGGbXfwrlpodGqC7MWNALXlVUcpFgpTpZnYRlAd5JQPAsIGi/yZO7T4U4G+gsoV2DQylumOmlWrBDdZC/aU4bGdAnb1TnXbLBtQGFFpKMAWg9nQOlGmo5gKrpIYrvQD60oWZLai9Qgg2FdhFqbJfUOWQ2gfPeEVJGKd2Cy/TDFdkP4B+Ndb25hSqDHAngNDLNAPUaBVAWtW8ViavoMoAW4TQbEGC+dVp0o6Cn/y3Zhti3kCNA9ksZM2teQzwEPjn4w0BGMp0OJ22UOOALhdAm0U/m7IEDoLy7ALA4Vwq8IaAmkQCFhoylacxfAoBAwB7JrLRbLf/HwBxI17fueoAtgAAAABJRU5ErkJggg==';

var maxData = 2000;

option = {
    tooltip: {
    },
    xAxis: {
        max: maxData,
        splitLine: {show: false},
        offset: 10,
        axisLine: {
            lineStyle: {
                color: '#999'
            }
        },
        axisLabel: {
            margin: 10
        }
    },
    yAxis: {
        data: ['2013', '2014', '2015', '2016'],
        inverse: true,
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {
            margin: 10,
            color: '#999',
            fontSize: 16
        }
    },
    grid: {
        top: 'center',
        height: 200,
        left: 70,
        right: 100
    },
    series: [{
        // current data
        type: 'pictorialBar',
        symbol: spirit,
        symbolRepeat: 'fixed',
        symbolMargin: '5%',
        symbolClip: true,
        symbolSize: 30,
        symbolBoundingData: maxData,
        data: [891, 1220, 660, 1670],
        z: 10
    }]
};
</ExampleBaseOption>

## type(string) = 'pictorialBar'

{{ use: partial-component-id(
    prefix = "#"
) }}

{{ use: partial-series-name() }}

{{ use: partial-colorby() }}

{{ use: partial-legend-hover-link() }}

{{ use: partial-coord-sys(
    seriesType = "pictorialBar",
    coordSysDefault = "'cartesian2d'",
    cartesian2d = true,
    polar = false,
    geo = false
) }}

{{ use: partial-cursor() }}

## label(Object)

{{ use: partial-label-desc() }}

{{ use: partial-label(
    prefix = "##",
    defaultPosition = "'inside'",
    formatter = true
) }}

## labelLine(Object)

{{ use: partial-label-line-desc() }}

{{ use: partial-label-line(
    prefix = '##',
    length2 = true,
    minTurnAngle = true,
    showAbove = true,
    smooth = true
) }}

## labelLayout(Object|Function)

{{ use: partial-label-layout(
    prefix = "##"
) }}

## itemStyle(Object)

{{ use: partial-item-style-desc() }}

{{ use: partial-item-style(
    prefix = "##",
    useColorPalatte = true,
    hasCallback = false,
    useDecal = true
) }}

## emphasis(Object)

高亮状态配置。

{{ use: partial-emphasis-disabled(
    prefix = "##"
) }}

{{ use: partial-focus-blur-scope() }}

{{ use: pictorialBar-state(
    prefix = "##",
    state = 'emphasis'
) }}

## blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

淡出状态配置。开启 [emphasis.focus](~series-pictorialBar.emphasis.focus) 后有效。

{{ use: pictorialBar-state(
    prefix = "##",
    state = 'blur'
) }}

## select(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

选中状态配置。开启 [selectedMode](~series-bar.selectedMode) 后有效。

{{ use: partial-select-disabled(
    prefix = "##"
) }}

{{ use: partial-selected-mode(
    version = '5.0.0'
) }}

{{ use: pictorialBar-state(
    prefix = "##",
    state = 'select'
) }}

{{ use: partial-barGrid(
    seriesType = 'pictorialBar',
    barGapDefault = "-100%"
) }}

{{ use: pictorialBar-symbol-attrs(
    prefix = "#"
) }}

{{ use: partial-series-dimensions(
    prefix = "#"
) }}

{{ use: partial-series-encode(
    prefix = "#"
) }}

{{ use: partial-series-group-id() }}

## data(Array)

{{ use: partial-2d-data-desc() }}

### name(string)

数据项名称。

### value(number)

单个数据项的数值。

{{ use: partial-data-group-id(
    prefix = '##'
) }}

{{ use: pictorialBar-symbol-attrs(
    prefix = "##",
    useZ2 = true
) }}

### label(Object)

单个柱条文本的样式设置。

{{ use: partial-label(
    prefix = "###",
    defaultPosition = "inside"
) }}

### labelLine(Object)

{{ use: partial-label-line-desc() }}

{{ use: partial-label-line(
    prefix = '###',
    length2 = true,
    minTurnAngle = true,
    showAbove = true,
    smooth = true
) }}

### itemStyle(Object)

{{ use: partial-item-style(
    prefix = "###",
    useDecal = true
) }}

### emphasis(Object)

单个数据的高亮状态配置。

{{ use: partial-emphasis-disabled(
    prefix = "###"
) }}

{{ use: partial-bar-state(
    prefix = "###",
    state = 'emphasis'
) }}

### blur(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

单个数据的淡出状态配置。

{{ use: partial-bar-state(
    prefix = "###",
    state = 'blur'
) }}

### select(Object)

{{ use: partial-version(
    version = "5.0.0"
) }}

单个数据的选中状态配置。

{{ use: partial-select-disabled(
    prefix = "###"
) }}

{{ use: partial-bar-state(
    prefix = "###",
    state = 'select'
) }}

{{ use: partial-tooltip-in-series-data() }}

{{ use: partial-marker(
    prefix = "#",
    seriesType = "pictorialBar",
    hasCoord = true,
    hasType = true
) }}

{{ use: partial-z-zlevel(
    prefix = "#",
    componentName = "象形柱图"
) }}

{{ use: partial-silent(
    prefix = "#"
) }}

{{ use: partial-animation(
    prefix = "#",
    noAnimationDelay = true
) }}

{{ use: partial-universal-transition(
    prefix = "#"
) }}

{{ use: pictorialBar-animation-delay(
    prefix = "##"
) }}

{{ use: partial-tooltip-in-series() }}



{{ target: pictorialBar-symbol-attrs }}

#${prefix} symbol(string) = 'circle'

<ExampleUIControlIcon >

图形类型。

{{ use: partial-icon() }}

例子：
~[800x400](${galleryViewPath}doc-example/pictorialBar-graphicType&reset=1&edit=1)

{{ use: pictorialBar-symbol-attrs-cascade(
    attrName = 'symbol'
) }}

#${prefix} symbolSize(number|Array) = ['100%', '100%']

<ExampleUIControlPercent default="100%,100%" dims="W,H" />

图形的大小。

可以用数组分开表示宽和高，例如 `[20, 10]` 表示标记宽为`20`，高为`10`，也可以设置成诸如 `10` 这样单一的数字，表示 `[10, 10]`。

可以设置成绝对值（如 `10`），也可以设置成百分比（如 `'120%'`、`['55%', 23]`）。

当设置为百分比时，图形的大小是基于 [基准柱](~series-pictorialBar) 的尺寸计算出来的。

例如，当基准柱基于 x 轴（即柱子是纵向的），[symbolSize](~series-pictorialBar.symbolSize) 设置为 `['30%', '50%']`，那么最终图形的尺寸是：

+ 宽度：`基准柱的宽度 * 30%`。
+ 高度：
    + 如果 [symbolRepeat](~series-pictorialBar.symbolRepeat) 为 `false`：`基准柱的高度 * 50%`。
    + 如果 [symbolRepeat](~series-pictorialBar.symbolRepeat) 为 `true`：`基准柱的宽度 * 50%`。

基准柱基于 y 轴（即柱子是横向的）的情况类似对调可得出。

例子：
~[800x600](${galleryViewPath}doc-example/pictorialBar-symbolSize&reset=1&edit=1)

{{ use: pictorialBar-symbol-attrs-cascade(
    attrName = 'symbolSize'
) }}

#${prefix} symbolPosition(string) = 'start'

<ExampleUIControlEnum options="start,end,center" default="start" />

图形的定位位置。可取值：

+ `'start'`：图形边缘与柱子开始的地方内切。
+ `'end'`：图形边缘与柱子结束的地方内切。
+ `'center'`：图形在柱子里居中。

例子：
~[800x600](${galleryViewPath}doc-example/pictorialBar-position&reset=1&edit=1)

{{ use: pictorialBar-symbol-attrs-cascade(
    attrName = 'symbolPosition'
) }}

#${prefix} symbolOffset(Array) = [0, 0]

<ExampleUIControlPercentVector default="0,0" dims="x,y" />

图形相对于原本位置的偏移。`symbolOffset` 是图形定位中最后计算的一个步骤，可以对图形计算出来的位置进行微调。

可以设置成绝对值（如 `10`），也可以设置成百分比（如 `'120%'`、`['55%', 23]`）。

当设置为百分比时，表示相对于自身尺寸 [symbolSize](~series-pictorialBar.symbolSize) 的百分比。

例如 `[0, '-50%']` 就是把图形向上移动了自身尺寸的一半的位置。

例子：
~[800x600](${galleryViewPath}doc-example/pictorialBar-position&reset=1&edit=1)

{{ use: pictorialBar-symbol-attrs-cascade(
    attrName = 'symbolOffset'
) }}

#${prefix} symbolRotate(number)

<ExampleUIControlAngle min="-360" max="360" step="1" />

图形的旋转角度。

注意，`symbolRotate` 并不会影响图形的定位（哪怕超出基准柱的边界），而只是单纯得绕自身中心旋转。

{{ use: pictorialBar-symbol-attrs-cascade(
    attrName = 'symbolRotate'
) }}

#${prefix} symbolRepeat(boolean|number|string)

<ExampleUIControlEnum options="true,false,fixed" />

指定图形元素是否重复。值可为：

+ `false`/`null`/`undefined`：不重复，即每个数据值用一个图形元素表示。
+ `true`：使图形元素重复，即每个数据值用一组重复的图形元素表示。重复的次数依据 [data](~series-pictorialBar.data) 计算得到。
+ a number：使图形元素重复，即每个数据值用一组重复的图形元素表示。重复的次数是给定的定值。
+ `'fixed'`：使图形元素重复，即每个数据值用一组重复的图形元素表示。重复的次数依据 [symbolBoundingData](~series-pictorialBar.symbolBoundingData) 计算得到，即与 [data](~series-pictorialBar.data) 无关。这在此图形被用于做背景时有用。

例子：
~[800x400](${galleryViewPath}doc-example/pictorialBar-repeat&reset=1&edit=1)

{{ use: pictorialBar-symbol-attrs-cascade(
    attrName = 'symbolRepeat'
) }}

#${prefix} symbolRepeatDirection(string) = 'start'

<ExampleUIControlEnum options="start,end" default="start" />

指定图形元素重复时，绘制的顺序。这个属性在两种情况下有用处：

+ 当 [symbolMargin](~series-pictorialBar.symbolMargin) 设置为负值时，重复的图形会互相覆盖，这是可以使用 `symbolRepeatDirection` 来指定覆盖顺序。

+ 当 [animationDelay](~series-pictorialBar.animationDelay) 或 [animationDelayUpdate](~series-pictorialBar.animationDelayUpdate) 被使用时，`symbolRepeatDirection` 指定了 index 顺序。

这个属性的值可以是：`'start'` 或 `'end'`。

例子：
~[800x400](${galleryViewPath}doc-example/pictorialBar-repeatDirection&reset=1&edit=1)

{{ use: pictorialBar-symbol-attrs-cascade(
    attrName = 'symbolRepeatDirection'
) }}

#${prefix} symbolMargin(number|string)

<ExampleUIControlPercentVector default="0,0" dims="x,y" />

图形的两边间隔（『两边』是指其数值轴方向的两边）。可以是绝对数值（如 `20`），或者百分比值（如 `'-30%'`），表示相对于自身尺寸 [symbolSize](~series-pictorialBar.symbolSize) 的百分比。只有当 [symbolRepeat](~series-pictorialBar.symbolRepeat) 被使用时有意义。

可以是正值，表示间隔大；也可以是负数。当 [symbolRepeat](~series-pictorialBar.symbolRepeat) 被使用时，负数时能使图形重叠。

可以在其值结尾处加一个 `"!"`，如 `"30%!"` 或 `25!`，表示第一个图形的开始和最后一个图形结尾留白，不紧贴边界。默认会紧贴边界。

注意：

+ 当 [symbolRepeat](~series-pictorialBar.symbolRepeat) 为 `true`/`'fixed'` 的时候：
    这里设置的 `symbolMargin` 只是个参考值，真正最后的图形间隔，是根据 [symbolRepeat](~series-pictorialBar.symbolRepeat)、`symbolMargin`、[symbolBoundingData](~series-pictorialBar.symbolBoundingData) 综合计算得到。
+ 当 [symbolRepeat](~series-pictorialBar.symbolRepeat) 为一个固定数值的时候：
    这里设置的 `symbolMargin` 无效。

例子：
~[800x600](${galleryViewPath}doc-example/pictorialBar-repeatLayout&reset=1&edit=1)

{{ use: pictorialBar-symbol-attrs-cascade(
    attrName = 'symbolMargin'
) }}

#${prefix} symbolClip(boolean) = false

<ExampleUIControlBoolean />

是否剪裁图形。

+ `false`/null/undefined：图形本身表示数值大小。
+ `true`：图形被剪裁后剩余的部分表示数值大小。

`symbolClip` 常在这种场景下使用：同时表达『总值』和『当前数值』。在这种场景下，可以使用两个系列，一个系列是完整的图形，当做『背景』来表达总数值，另一个系列是使用 `symbolClip` 进行剪裁过的图形，表达当前数值。

例子：
~[800x600](${galleryViewPath}doc-example/pictorialBar-clip&reset=1&edit=1)

在这个例子中：

+ 『背景系列』和『当前值系列』使用相同的 [symbolBoundingData](~series.pictorialBar.symbolBoundingData)，使得绘制出的图形的大小是一样的。
+ 『当前值系列』设置了比『背景系列』更高的 [z](~series.pictorialBar.z)，使得其覆盖在『背景系列』上。

{{ use: pictorialBar-symbol-attrs-cascade(
    attrName = 'symbolClip'
) }}

#${prefix} symbolBoundingData(number|Array)

这个属性是『指定图形界限的值』。它指定了一个 data，这个 data 映射在坐标系上的位置，是图形绘制的界限。也就是说，如果设置了 `symbolBoundingData`，图形的尺寸则由 `symbolBoundingData` 决定。

当柱子是水平的，symbolBoundingData 对应到 x 轴上，当柱子是竖直的，symbolBoundingData 对应到 y 轴上。

规则：

+ 没有使用 [symbolRepeat](~series-pictorialBar.symbolRepeat) 时：

    `symbolBoundingData` 缺省情况下和『参考柱』的尺寸一样。图形的尺寸由零点和 `symbolBoundingData` 决定。举例，当柱子是竖直的，柱子对应的 data 为 `24`，`symbolSize` 设置为 `[30, '50%']`，`symbolBoundingData` 设置为 `124`，那么最终图形的高度为 `124 * 50% = 62`。如果 `symbolBoundingData` 不设置，那么最终图形的高度为 `24 * 50% = 12`。

+ 使用了 [symbolRepeat](~series-pictorialBar.symbolRepeat) 时：

    `symbolBoundingData` 缺省情况取当前坐标系所显示出的最值。`symbolBoundingData` 定义了一个 bounding，重复的图形在这个 bounding 中，依据 [symbolMargin](~series-pictorialBar.symbolMargin) 和 [symbolRepeat](~series-pictorialBar.symbolRepeat) 和 [symbolSize](~series-pictorialBar.symbolSize) 进行排布。这几个变量决定了图形的间隔大小。

在这些场景中，你可能会需要设置 `symbolBoundingData`：

+ 使用了 [symbolCilp](~series-pictorialBar.symbolClip) 时：

    使用一个系列表达『总值』，另一个系列表达『当前值』的时候，需要两个系列画出的图形一样大。那么就把两个系列的 `symbolBoundingData` 设为一样大。

例子：
~[800x600](${galleryViewPath}doc-example/pictorialBar-clip&reset=1&edit=1)

+ 使用了 [symbolRepeat](~series-pictorialBar.symbolRepeat) 时：

    如果需要不同柱子中的图形的间隔保持一致，那么可以把 `symbolBoundingData` 设为一致的数值。当然，不设置 `symbolBoundingData` 也是可以的，因为其缺省值就是一个定值（坐标系所显示出的最值）。

例子：
~[800x600](${galleryViewPath}doc-example/pictorialBar-repeatLayout&reset=1&edit=1)

<br>
`symbolBoundingData` 可以是一个数组，例如 `[-40, 60]`，表示同时指定了正值的 `symbolBoundingData` 和负值的 `symbolBoundingData`。

参见例子：
~[800x400](${galleryViewPath}doc-example/pictorialBar-symbolBoundingDataArray&reset=1&edit=1)

{{ use: pictorialBar-symbol-attrs-cascade(
    attrName = 'symbolBoundingData'
) }}

#${prefix} symbolPatternSize(number) = 400

<ExampleUIControlNumber default="400" step="10" min="0" />

可以使用图片作为图形的 pattern。

```ts
var textureImg = new Image();
textureImg.src = 'data:image/jpeg;base64,...'; // dataURI
// 或者
// textureImg.src = 'http://example.website/xx.png'; // URL
...
itemStyle: {
    color: {
        image: textureImg,
        repeat: 'repeat'
    }
}
```

这时候，`symbolPatternSize` 指定了 pattern 的缩放尺寸。比如 `symbolPatternSize` 为 400 时表示图片显示为 `400px * 400px` 的尺寸。

例子：
~[800x400](${galleryViewPath}doc-example/pictorialBar-patternSize&reset=1&edit=1)

{{ use: pictorialBar-symbol-attrs-cascade(
    attrName = 'symbolPatternSize'
) }}

{{ if: ${useZ2} }}
#${prefix} z(number)

指定图形元素间的覆盖关系。数值越大，越在层叠的上方。
{{ /if }}

#${prefix} hoverAnimation(boolean) = false

<ExampleUIControlBoolean />

是否开启 hover 在图形上的提示动画效果。

{{ use: pictorialBar-symbol-attrs-cascade(
    attrName = 'hoverAnimation'
) }}

{{ use: partial-animation(
    prefix = "##",
    noAnimationDelay = true
) }}

{{ use: pictorialBar-animation-delay(
    prefix = "##"
) }}



{{ target: pictorialBar-animation-delay }}

#${prefix} animationDelay(number|Function) = 0

动画开始之前的延迟，支持回调函数，可以通过每个数据返回不同的 delay 时间实现更戏剧的更新动画效果。

如下示例：
```ts
animationDelay: function (dataIndex, params) {
    return params.index * 30;
}
或者反向：
animationDelay: function (dataIndex, params) {
    return (params.count - 1 - params.index) * 30;
}
```

例子：
~[800x400](${galleryViewPath}doc-example/pictorialBar-repeatDirection&reset=1&edit=1)

#${prefix} animationDelayUpdate(number|Function) = 0

数据更新动画的延迟，支持回调函数，可以通过每个数据返回不同的 delay 时间实现更戏剧的更新动画效果。

如下示例：
```ts
animationDelay: function (dataIndex, params) {
    return params.index * 30;
}
或者反向：
animationDelay: function (dataIndex, params) {
    return (params.count - 1 - params.index) * 30;
}
```

例子：
~[800x400](${galleryViewPath}doc-example/pictorialBar-repeatDirection&reset=1&edit=1)



{{ target: pictorialBar-symbol-attrs-cascade }}

此属性可以被设置在系列的 [根部](~series-pictorialBar.${attrName})，表示对此系列中所有数据都生效；也可以被设置在 [data](series-pictorialBar.data) 中的 [每个数据项中](~series-pictorialBar.data.${attrName})，表示只对此数据项生效。

例如：
```ts
series: [{
    ${attrName}: ... // 对 data 中所有数据项生效。
    data: [23, 56]
}]
或者
series: [{
    data: [{
        value: 23
        ${attrName}: ... // 只对此数据项生效
    }, {
        value: 56
        ${attrName}: ... // 只对此数据项生效
    }]
}]
```



{{ target: pictorialBar-state }}

#${prefix} label(Object)

{{ use: partial-label(
    prefix = "#" + ${prefix},
    formatter = ${prefix} === '##'
) }}

#${prefix} labelLine(Object)

{{ use: partial-label-line-desc() }}

{{ use: partial-label-line(
    prefix = "#" + ${prefix}
) }}

#${prefix} itemStyle(Object)

{{ use: partial-item-style(
    prefix = "#" + ${prefix},
    hasInherit = ${state} === 'emphasis'
) }}

