{{ target: partial-blend-mode }}

#${prefix|default('#')} blendMode(string) = 'source-over'

Sets the type of compositing operation to apply when drawing a new shape. 

Currently supporting `'source-over'`, `'lighter'`. The default is `'source-over'` mode is blended by alpha. The `'lighter'` is overlap mode. In this mode, the area where the number of graphics is concentrated can be highlighted by the overlap.


