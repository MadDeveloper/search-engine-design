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
                fontSize: '30px'
            })
            .focus()
    }

    searchFocus() {
        this.$spanLabel.animate({
            top: '-60px',
            fontSize: '20px'
        })

        if ( !this.$inputSearch.is( ':focus' ) ) {
            this.$inputSearch.focus()
        }
    }

    searchBlur() {
        this.$spanLabel.animate({
            top: '-30px',
            fontSize: '30px'
        })
    }

    search() {
        this.google.search( this.$inputSearch.val() )
    }
}
