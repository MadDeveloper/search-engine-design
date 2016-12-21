import { Injectable } from '@angular/core';

@Injectable()
export class GoogleService {
    private static uri = 'https://www.google.fr/search?q='

    search( terms ) {
        if ( terms.length > 0 ) {
            window.location.href = `${GoogleService.uri}${encodeURIComponent( terms )}`    
        }
    }
}
