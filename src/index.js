import './style/main.scss';

new Vue( {
    el: '#App',
    data: {
        model: "Какой то текст",
        counter: 0,
        msg: 'Привет вью',
        url: 'https://www.google.com/',
        link: '<a href="http://google.com">google2</a>'
    },
    methods: {
        changeName: function ( event ) {
            this.msg = event.target.value;
        },

        addCount: function ( count, event ) {
            console.log( event );
            this.counter += count;
        },

        hover: function () {
            this.counter = 0;
        }

    },

    computed: {
        myComputedVar: function () {
            return = 2 + 3
        }
    },

    watch: {
        // следим за изменением урла
        url: function ( value ) {
            console.log( value );
        },

        // следим за изменениями соббщения
        msg: function ( value ) {
            console.log( value );
        }
    }
} );