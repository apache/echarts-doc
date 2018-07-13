define(function (require) {

    var $ = require('jquery');
    var lang = require('./lang');
    var docUtil = require('./docUtil');
    var pageName = docUtil.getGlobalArg('pageName');
    var schemaHelper = require('./schemaHelper');

    /**
     * @constructor
     */
    function SchemaWrap() {

        /**
         * 'none' or 'outlineLoaded' or 'allLoaded'
         */
        this._schemaState = 'none';

        this._isLoading;

        /**
         * The schema format, see schemaHelper.
         */
        this._schema;

        this._cbList = {
            outline: [],
            full: []
        };

        this._load();
    }

    var proto = SchemaWrap.prototype;

    proto.get = function (cb, requireFull) {
        if (cb) {
            this._cbList[requireFull ? 'full' : 'outline'].push(cb);
            this._cbCall();
        }
    };

    proto._cbCall = function () {
        if (this._schemaState !== 'none') {
            cbCall(this._cbList.outline, this._schema);

            if (this._schemaState === 'allLoaded') {
                cbCall(this._cbList.full, this._schema);
            }
        }

        function cbCall(cbList, schema) {
            for (var i = 0; i < cbList.length; i++) {
                cbList[i]();
            }
            cbList.length = 0;
        }
    };

    proto._load = function () {
        if (this._schemaState === 'none') {
            doLoad.call(
                this,
                pageName === 'option' ? '_outline' : '',
                pageName === 'option' ? 'outlineLoaded' : 'allLoaded',
                function () {
                    this._schema = schema;
                }
            );
        }
        // else if (this._schemaState === 'outlineLoaded') {
        //     doLoad.call(
        //         this,
        //         '_description',
        //         'allLoaded',
        //         function () {
        //             schemaHelper.fillSchemaWithDescription(this._schema, descSchema);
        //         }
        //     );
        // }

        function doLoad(suffix, nextSchemaState, onLoad) {
            $.getJSON(docUtil.addVersionArg(getSchemaURL(suffix)))
                .done($.proxy(function (schema) {
                    onLoad.call(this, schema);
                    this._schemaState = nextSchemaState;
                    this._cbCall();

                    if (nextSchemaState !== 'allLoaded') {
                        this._load();
                    }
                }, this));
        }
    }

    function getSchemaURL(suffix) {
        return [
            'documents',
            lang.langCode,
            pageName + suffix + '.json'
        ].join('/');
    }

    return SchemaWrap;
});