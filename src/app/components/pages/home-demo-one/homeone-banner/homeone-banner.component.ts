import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homeone-banner',
    templateUrl: './homeone-banner.component.html',
    styleUrls: ['./homeone-banner.component.scss']
})
export class HomeoneBannerComponent implements OnInit {

    constructor(private http:HttpClient) { }

    public options = [];
    public villeD:string;
    public Dt:Date;

    ngOnInit(): void {
        this.http.get('https://morocco-test-1.herokuapp.com/regions/search/ville?ville=').subscribe(
            data=>{console.log(data['_embedded'].villes);this.options=data['_embedded'].villes;console.log(this.options)}
        )

    }


    // Category Select
    singleSelect: any = [];
    multiSelect: any = [];
    stringArray: any = [];
    objectsArray: any = [];
    resetOption: any;
    config = {
        displayKey: "ville", 
        placeholder:"Ville d'arrive",
        search: true
    };
    config1 = {
        displayKey: "ville", 
        placeholder:"Ville de depart",
        search: true
    };
  


    searchChange($event) {
        console.log($event);
    }
    selectionChanged1($event) {
        console.log($event);
    }
    selectionChanged2($event) {
        //console.log($event);
        let ville = $event;
        console.warn(ville);
    }
    selectionChanged3($event) {
        console.log($event.target.value);
    }
    reset() {
        this.resetOption = [];
    }

}