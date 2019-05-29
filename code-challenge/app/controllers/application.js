// File: controllers/applicaiton.js
// Author: Dalton Brooks
// Last Edited: 5/28/2019
// Description: This is the controller for the application. 
//              It handles searches from the API and a few variables for use in the template.


import Controller from '@ember/controller';
import fetch from 'fetch';
import { computed } from '@ember/object';

// import {makeArray} from '@ember/array'
export default Controller.extend({
  genders: ['all', 'male', 'female', 'unknown', 'n/a'], // list of genders
  gender: '', // chosen gender
  searchInput: '',
  // renturns a map of all gender counts to be used for results and dropdown
  // -> computed when there is a change to model
  genderCounts: computed('model.[]', function(){
    // initialize vars
    let counts = [];
    counts["male"] = 0;
    counts["female"] = 0;
    counts["unknown"] = 0;
    counts["n/a"] = 0;
    // get all characters
    this.get('model').forEach(function(character){
        // increment gender count for characters gender
        counts[character.gender] = counts[character.gender] + 1;
    });
    // set all to length of model / num of characters
    counts["all"] = this.get('model').length; // this may be an extra call that we could remove by adding a count variable
    return counts;
  }),
  
  actions: {
    // This is our main function that pulls data from SWAPI
    search(input) {
      // input from user
      if(this.searchInput != input && input != undefined){
        this.set('searchInput', input);
      // When search is called, I want to track whether it is still loading.
      // -> to maybe add the loading spinner later
      this.set('loading', true);
      // set our url and include our search parameter (/?search=)
      let url = `https://swapi.co/api/people/?search=${input}`;
      
      let promise = fetch(url).then(function(response){
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      }) // fetch the json file and check for error
      .then((resp) => resp.json()) // convert response to json
      .then((json) => this.set('model', json.results)) // set our model to the results returned
      .then(this.set('loading', false)); // update loading to false
      
      
      return promise;
      }
      // just alert that the input hasnt changed or is invalid
      else{
        alert("already showing results for '" + input + "'");
      }
    },
   
  }
});
