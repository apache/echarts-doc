<!DOCTYPE html>

<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="../../vendors/prettify/prettify.css" />
        <script src="../../vendors/jquery/jquery.min.js" ></script>
        <script src="../../vendors/prettify/prettify.js" ></script>
        <script src="../../vendors/prettify/lang-css.js" ></script>

        <style>

            html,
            body {
                width: 100%;
                height: 100%;
                margin: 0;
                padding: 0;
                font-family: Arial;
                line-height: 1.5;
            }

            .toc {
                position: fixed;
                left: 0;
                top: 0;
                height: 100%;
                width: 180px;
                overflow: auto;
                padding: 10px;
            }
            .toc a,
            .toc a:visited {
                color: #4c4f54;
                text-decoration: none;
            }
            .toc h1 {
                display: none;
            }
            .toc h2,
            .toc h3,
            .toc h4,
            .toc h5 {
                line-height: 2;
                padding: 0;
                margin: 0;
                font-weight: normal;
            }
            .toc h2 {
                font-size: 16px;
            }
            .toc h3,
            .toc h4,
            .toc h5 {
                font-size: 14px;
                text-indent: 10px;
            }

            .markdown-body {
                margin-left: 180px;
                padding: 0 20px 20px 20px;
                border-left: 1px solid #ccc;
            }
            .markdown-body p {
                font-size: 14px;
            }
            .markdown-body h1 {
                border-bottom: 1px solid #ccc;
                padding: 20px 0;
                margin: 0;
            }
            .markdown-body h1,
            .markdown-body h2,
            .markdown-body h3,
            .markdown-body h4 {
                color: #0356c3;
            }
            .markdown-body code {
                border: 1px solid #ccc;
                border-radius: 3px;
                padding: 0 2px;
                background: #efefef;
            }
            .markdown-body pre {
                line-height: 1.2;
                background: #f8faff;
                padding: 15px;
                border: 1px solid #ccc;
                border-radius: 6px;
            }
            .markdown-body pre code {
                border: none;
                padding: 0;
                background: none;
            }
            .markdown-body strong {
                font-weight: normal;
                color: #d43b09;
            }

        </style>
    </head>
    <body>
        <div class="toc">
            {{toc}}
        </div>

        <div class="markdown-body">
            {{content}}
        </div>

        <script type="text/javascript">

            $('.markdown-body pre code').each(function (index, el) {
                $(el).addClass('prettyprint');
            });
            prettyPrint();

        </script>
    </body>
</html>
