import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    contactInfoBox = [
        {
            icon: 'bx bx-map',
            title: 'Our Address',
            info: [
                {
                    text: '175 5th Ave, New York, NY 10010, United States'
                }
            ]
        },
        {
            icon: 'bx bx-phone-call',
            title: 'Email Us',
            info: [
                {
                    text: '(+44) - 45789 - 5789'
                },
                {
                    text: 'hello@vesax.com'
                }
            ]
        },
        {
            icon: 'bx bx-time-five',
            title: 'Heures d\'ouverture',
            info: [
                {
                    text: 'Lundi - Vendredi: 09:00 - 20:00'
                },
                {
                    text: 'Samedi & Dimanche: 10:30 - 22:00'
                }
            ]
        }
    ]

    sectionTitle = [
        {
            title: 'Vous êtes prêt à commencer ?',
            paragraph: 'Votre adresse e-mail ne sera pas publiée. Les champs obligatoires sont marqués *'
        }
    ]

    contactImage = [
        {
            img: 'assets/img/contact.png'
        }
    ]

    submit(form){
        var name = form.name;
        console.log(name);
        
        var email = form.email;
        console.log(email);

        var number = form.number;
        console.log(number);
        
        var message = form.message;
        console.log(message);
    }

}