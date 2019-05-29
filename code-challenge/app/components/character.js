import Component from '@ember/component';

export default Component.extend({
    clicked: false,
    actions:{
        click(){
            this.toggleProperty("clicked");
        },
    },
   
});
