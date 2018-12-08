require('./style/main.scss');

new Vue( {
    el: '#App',
    data: {
        msg: 'Привет вью',
    },
    methods:{
      changeName: function ( event ) {
          this.msg = event.target.value;
      }
    }
} );