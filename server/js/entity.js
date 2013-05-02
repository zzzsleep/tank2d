define(['model', 'log'], function (Model, Log) {
    var Entity = Model.extend({

        /**
         * Конструктор класса (Инициализация объекта)
         *
         * @this {Entity}
         * @param {Number} id ID объекта
         * @param {String} type Хрен знает, нужно отрефаеторить
         * @param {String} kind Тип объекта (Подробнее в Types.Entities)
         * @param {Number} x Координата X
         * @param {Number} y Координата Y
         */
        init: function (id, type, kind, x, y) {
            this.id = parseInt(id);
            /**
             * @todo Нахрена я ее объвил?
             * @type {String}
             */
            this.type = type;
            this.kind = kind;
            this.x = x;
            this.y = y;
        },

        /**
         * Уничтожает объект
         *
         * @this {Entity}
         */
        destroy: function () {

        },

        /**
         * Приватный метод. Возвращает информацию об объекте.
         * Переопределяется в дочерних классах при необходимости
         *
         * @this {Entity}
         * @returns {Array} Массив параметров объекта
         * @private
         */
        _getBaseState: function () {
            return [
                parseInt(this.id),
                this.kind,
                this.x,
                this.y
            ];
        },

        /**
         * Приватный метод. Возвращает информацию об объекте.
         *
         * @this {Entity}
         * @returns {Array} Массив параметров объекта
         */
        getState: function () {
            return this._getBaseState();
        },

        /**
         * Возвращает сообщение об инициализации объекта на карте
         *
         * @this {Entity}
         * @returns {Messages.Spawn} Сообщение об инициализации
         */
        spawn: function () {
            return new Messages.Spawn(this);
        },

        /**
         * Возвращает сообщение об уничтожения объекта на карте
         *
         * @this {Entity}
         * @returns {Messages.Despawn} Сообщение об уничтожении
         */
        despawn: function () {
            return new Messages.Despawn(this.id);
        },

        /**
         * Получть чанк объекта (4 тайла)
         * @returns {Array}
         */
        getChunk: function () {
            return [
                [this.x, this.y  ],
                [this.x + 1, this.y  ],
                [this.x, this.y + 1],
                [this.x + 1, this.y + 1]
            ];
        }
    });
    return Entity;

});