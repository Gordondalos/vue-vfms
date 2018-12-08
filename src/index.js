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
    methods: {
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

    computed: {
        myComputedVar: function () {
            console.log(this.$refs);
            return  2 + 3
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

vue1.superTitle = 'Мама не горюй';