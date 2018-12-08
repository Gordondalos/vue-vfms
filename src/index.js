import './style/main.scss';

var vue1 = new Vue( {
    el: '#App',
    data: {
        isActive: true,
        model: "Какой то текст",
        counter: 0,
        msg: 'Привет вью',
        url: 'https://www.google.com/',
        link: '<a href="http://google.com">google2</a>'
    },

    // Жизненный цикл
    beforeCreate: function() {
      console.log("До создания");
    },
    created: function(){
        console.log("создано");
    },
    beforeMount: function(){
      console.log('Готов вставить шаблон в дом');
    },

    mounted: function(){
        console.log('Вставил в дерево');
    },

    beforeDestroy: function(){
        console.log('До Удаления');
    },
    destroyed: function(){
        console.log('Удалилось');
    },

    // цикличные этапы
    beforeUpdate : function(){
        console.log('До обновления');
    },
    updated: function(){
        console.log('После обновления');
    },




    methods: {
        destroyMe: function(){
            vue1.destroy();
        },

        changeName: function ( event ) {
            this.msg = event.target.value;
        },

        addCount: function ( count, event ) {
            console.log( event );
            this.counter += count;
            this.$refs.heading.style.color = 'red';
        },

        hover: function () {
            this.counter = 0;
        }

    },

    // вычисляемые свойства
    computed: {
        myComputedVar: function () {
            console.log(this.$refs);
            return  2 + 3
        }
    },

    // наблюдатели
    watch: {
        // следим за изменением урла
        url: function ( value ) {
            console.log( value );
        },

        // следим за изменениями соббщения
        msg: function ( value ) {
            console.log( value );
        }
    },
    // так можно писать шаблон внутри js
    //template: '<h1>Привет мир</h1>'
} );

vue1.superTitle = 'Мама не горюй';

// так можно маунтить к какому то диву а не через элемент
vue1.$mount('#App');