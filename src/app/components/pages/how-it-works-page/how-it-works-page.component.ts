import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-how-it-works-page',
    templateUrl: './how-it-works-page.component.html',
    styleUrls: ['./how-it-works-page.component.scss']
})
export class HowItWorksPageComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    pageTitleContent = [
        {
            title: 'Comment ça fonctionne',
            backgroundImage: 'assets/img/page-title/page-title5.jpg'
        }
    ]

    timelineContent = [
        {
            number: '1',
            title: 'Soumettre des annonces',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            buttonText: 'Soumettrez maintenant',
            buttonLink: '#'
        },
        {
            number: '2',
            title: 'Choose Your Package',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            buttonText: 'Choisissez maintenant',
            buttonLink: '#'
        },
        {
            number: '3',
            title: 'Se connecter à Mon compte',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            buttonText: 'Connectez-vous maintenant',
            buttonLink: '#'
        },
        {
            number: '4',
            title: 'Soumettre l\'annonce - Free or Paid',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            buttonText: 'Choisissez maintenant',
            buttonLink: '#'
        },
        {
            number: '5',
            title: 'Admin approuve',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            buttonText: 'Naviguez maintenan',
            buttonLink: '#'
        }
    ]

}