/* eslint-disable no-console */
import { LightningElement, api, track } from 'lwc';

const QUERY_URL =
    'https://api.giphy.com/v1/gifs/search?';

export default class GiphyLWC extends LightningElement {
    @api giphyType;
    @api staticURL;
    @api giphyRating;
    @api giphyLang;
    @api giphyAPIKey;
    @api staticSearchTerm;
    @api dynamicObject;
    @api dynamicField;

    query;
    @track error;
    @track giphyContentUrl;

    connectedCallback() {
        // check the Giphy source type (static URL, static search term, dynamic search term)
        this.query = QUERY_URL + 'api_key=' + this.giphyAPIKey + '&limit=1&offset=0&rating=' + this.giphyRating + '&lang=' + this.giphyLang;
        if (this.giphyType === 'Static Search Term') {
            this.query += '&q=' + this.staticSearchTerm;
            // The Fetch API is currently not polyfilled for usage in IE11.
            // Use XMLHttpRequest instead in that case.
            fetch(this.query)
                .then(response => {
                    // fetch isn't throwing an error if the request fails.
                    // Therefore we have to check the ok property.
                    if (!response.ok) {
                        this.error = response;
                    }
                    return response.json();
                })
                .then(jsonResponse => {
                    jsonResponse.data
                    .map(gif => gif.images.downsized_large.url)
                    .forEach(url => {
                        this.giphyContentUrl = url;
                        })
                })
                .catch(error => {
                    this.error = error;
                    console.log('**** error: ' + this.error);
                });

        } else if (this.giphyType === 'Static URL') {
            this.giphyContentUrl = this.staticURL;
        }
    }
    

}