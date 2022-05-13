import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
    
    pageTitleContent = [
        {
            title: 'Catégorie des annonces',
            backgroundImage: 'assets/img/page-title/page-title2.jpg'
        }
    ]

}