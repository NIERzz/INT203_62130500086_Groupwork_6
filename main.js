const constraints = {
    username: {
        
        
    },
    fullname: {
        presence: true,
    },
    pwd: {
        
        length:{
            minimum : 6,
            message: "must be at least 4 digits"
        }
    },
    email: {
        presence: true,
        email: true
    },
    title: {
        
    },
    
}
const app =Vue.createApp({
    data() {
        return {
            username: null,
            email: null,
            pwd: null,
            fullname: null,
            title: null,
            errors: null,
            image: "images/2.jpg",
            showfullname: null,
            showtitle: null,
            showemail: null,
        }
    },
    methods: {
        checkForm(e){
            this.errors = validate({username: this.username,
                                    email: this.email,
                                    pwd: this.pwd,
                                    fullname: this.fullname,
                                    title: this.title},
                                    constraints)
            if(this.errors){
                e.preventDefault();
                
            }
            else{
                this.updateinfomation();
                alert("Your profile is updated successfully.");
            }
        },
        updateinfomation(){
            this.showfullname = this.fullname;
            this.showtitle = "-"+" "+this.title;
            this.showemail = this.email;
        },
    }
})
app.mount('#app')