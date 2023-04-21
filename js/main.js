const { createApp } = Vue;

createApp({
data() {
    return {
        active: 0,
        isActive: false,
        newMessage: "",
        newSearch: "",
        contacts: [
            {
                name: 'Boolzapp Web',
                image: 'img/Boolzapp.jpg',
                messages: [
                    {
                        message: 'Benvenuto su Boolzapp Web',
                        status: 'received'
                    },
                    {
                        message: 'Clicca su una chat per iniziare una conversazione!',
                        status: 'received'
                    },
                ],
            },
            {
                name: 'Michele',
                visible: false,
                image: 'img/avatar_1.jpg',
                lastSeen: 'Ultimo accesso alle 12:00',
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                visible: true,
                image: 'img/avatar_2.jpg',
                lastSeen: 'Ultimo accesso alle 12:00',
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                visible: true,
                image: 'img/avatar_3.jpg',
                lastSeen: 'Ultimo accesso alle 12:00',
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                visible: true,
                image: 'img/avatar_4.jpg',
                lastSeen: 'Ultimo accesso alle 12:00',
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                visible: true,
                image: 'img/avatar_1.jpg',
                lastSeen: 'Ultimo accesso alle 12:00',
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                visible: true,
                image: 'img/avatar_6.jpg',
                lastSeen: 'Ultimo accesso alle 12:00',
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                visible: true,
                image: 'img/avatar_2.jpg',
                lastSeen: 'Ultimo accesso alle 12:00',
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                visible: true,
                image: 'img/avatar_4.jpg',
                lastSeen: 'Ultimo accesso alle 12:00',
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ]
    }   
},

methods: {
    currentChat(index) {
        this.active = index;  
        this.isActive = true; 
    },

    back() {
        this.isActive = false;
    },

    send(index) {
        
        if (this.newMessage) {

            this.contacts[index].messages.push(

                {   
                    date: new Date().toLocaleString(),
                    message: this.newMessage,
                    status: 'sent'
                },
        
            );
            
            this.newMessage = "";
            
            setTimeout( () => { this.answerInterval(index) }, 1000);

        }
        
    },

    answerInterval(index) {

        this.contacts[index].messages.push(

            {   
                date: new Date().toLocaleString(),
                message: 'Vabene',
                status: 'received'
            },
    
        );
    },

},

computed: {
    ricerca() {
        if (this.newSearch) {
            return this.contacts.filter((element) => {
                return this.newSearch.toLowerCase().split(" ").every(v => element.name.toLowerCase().includes(v))
            })
        } else {
            return this.contacts;
        }
    }
}

}).mount('#app')