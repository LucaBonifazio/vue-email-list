new Vue({
    el: '#app',
    data: {
        arrMail: [],
    },
    methods: {
        getMail() {
			this.arrMail = [];
			for (let i = 0; i < 10; i++) {
				axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
				.then(axiosResponse => (this.arrMail.push(axiosResponse.data.response)));
			}
		},
        deleteMail() {
            this.arrMail = [];
        }
	},
});