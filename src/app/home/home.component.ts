import { Component, OnInit } from '@angular/core'
import { GoogleService } from '../../services/google.service'

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
    private $spanLabel
    private $inputSearch

    constructor( private google: GoogleService ) {}

    ngOnInit() {
        this.$spanLabel = $( 'span#search-label' )
        this.$inputSearch = $( 'input#search-input' )

        this.$inputSearch
            .css({
                border: 'none',
                width: '100%',
                backgroundColor: 'transparent',
                fontSize: '25px'
            })
            .focus()
    }

    searchFocus() {
        this.$spanLabel.animate({
            top: '-25px',
            fontSize: '20px'
        })

        if ( !this.$inputSearch.is( ':focus' ) ) {
            this.$inputSearch.focus()
        }
    }

    searchBlur() {
        if ( this.$inputSearch.val().length === 0 ) {
            this.$spanLabel.animate({
                top: '16px',
                fontSize: '25px'
            })
        }
    }

    search() {
        this.google.search( this.$inputSearch.val() )
    }
}
