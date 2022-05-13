import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-faq',
    templateUrl: './faq.component.html',
    styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    pageTitleContent = [
        {
            title: 'Questions fréquemment posées',
            backgroundImage: 'assets/img/page-title/page-title4.jpg'
        }
    ]

    faqItem = [
        {
            title: 'Qu\'est-ce qu\'une inscription dans un annuaire ?',
            paragraph: 'Sed perspiciatis unde omnis natus error sit voluptatem totam rem aperiam, eaque quae architecto beatae explicabo. Lorem ipsum dolor sit amet, elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit.'
        },
        {
            title: 'Est-ce que je dois m\'engager à souscrire un abonnement annuel ??',
            paragraph: 'Sed perspiciatis unde omnis natus error sit voluptatem totam rem aperiam, eaque quae architecto beatae explicabo. Lorem ipsum dolor sit amet, elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit.'
        },
        {
            title: 'Combien de temps faut-il pour obtenir une autorisation ?',
            paragraph: 'Sed perspiciatis unde omnis natus error sit voluptatem totam rem aperiam, eaque quae architecto beatae explicabo. Lorem ipsum dolor sit amet, elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit.'
        },
        {
            title: 'Puis-je créer une annonce gratuite ?',
            paragraph: 'Sed perspiciatis unde omnis natus error sit voluptatem totam rem aperiam, eaque quae architecto beatae explicabo. Lorem ipsum dolor sit amet, elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit.'
        },
        {
            title: 'Combien d\'annonces différentes je peux faire ?',
            paragraph: 'Sed perspiciatis unde omnis natus error sit voluptatem totam rem aperiam, eaque quae architecto beatae explicabo. Lorem ipsum dolor sit amet, elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit.'
        },
        {
            title: 'Et si je veux supprimer l\'annonce ?',
            paragraph: 'Sed perspiciatis unde omnis natus error sit voluptatem totam rem aperiam, eaque quae architecto beatae explicabo. Lorem ipsum dolor sit amet, elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit.'
        },
        {
            title: 'Comment puis-je m\'inscrire pour ajouter une annonce?',
            paragraph: 'Sed perspiciatis unde omnis natus error sit voluptatem totam rem aperiam, eaque quae architecto beatae explicabo. Lorem ipsum dolor sit amet, elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit.'
        },
        {
            // title: 'What are the other features the Directory Listing have?',
            title: 'Quelles sont les autres fonctionnalités de la liste d\'annuaires ?',
            paragraph: 'Sed perspiciatis unde omnis natus error sit voluptatem totam rem aperiam, eaque quae architecto beatae explicabo. Lorem ipsum dolor sit amet, elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit.'
        }
    ]

}