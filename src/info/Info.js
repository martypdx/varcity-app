import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import { TextInput, NumberInput, DateInput, Toggle, TextSelect, UrlInput } from '../app/FormControls';
import riekSportList from './riekSportsList';

// just do this for now
function httpCallback() { console.log('pretending to make api call')};
const value = '';
const placeholderOptions = [{id:0,text:'thingzero'},{id:1,text:'thingone'}]

export default class BasicInfo extends Component {

  render() {
    const heightUOM = [
      { id: 1, text: "in" },
      { id: 2, text: "cm" }
    ];
    
    const weightUOM = [
      { id: 1, text: "lb" },
      { id: 2, text: "kg" }
    ];

    return (
      <div className="field">
        <div className="tile is-ancestor">
          <div className="tile is-vertical">
            <UrlInput value={value} propName="profileUrl" label="Image" placeholder="Profile Image URL" change={httpCallback} />
          </div>
          <div className="tile is-vertical">
            <TextInput value={value} propName="firstName" label="First Name" change={httpCallback} />
            <TextInput value={value} propName="lastName" label="Last Name" change={httpCallback} />
            <DateInput value={value} propName="dob" label="Birthday" change={httpCallback} />
            <Toggle value={value} propName="public" label="Public Profile?" change={httpCallback} />
            
            <TextSelect value={value} propName="primarySport" label="Primary Sport" options={riekSportList} change={httpCallback} /> 
            <TextInput value={value} propName="position" label="Position" change={httpCallback} />
            
            <TextInput value={value} propName="organization" label="School/Organization" change={httpCallback} />
            <TextSelect value={value} propName="country" label="Country" options={this.props.info} change={httpCallback} /> 
            <TextSelect value={value} propName="region" label="State/Region" options={placeholderOptions} change={httpCallback} /> 
            <TextSelect value={value} propName="city" label="City" options={placeholderOptions} change={httpCallback} /> 
            
            <div className="field body is-narrow is-grouped is-grouped-multiline">
              <NumberInput value={value} propName="height" label="Height" change={httpCallback}/>
              <TextSelect value={value} propName="heightUOM" label="(in/cm)" options={heightUOM} change={httpCallback} /> 
              <NumberInput value={value} propName="weight" label="Weight" change={httpCallback}/>
              <TextSelect value={value} propName="weightUOM" label="(lb/kg)" options={weightUOM} change={httpCallback} /> 
            </div>

            <div className="is-grouped is-grouped-multiline">
              <UrlInput value={value} propName="facebookUrl" label="Facebook" placeholder="Facebook URL (optional)" change={httpCallback} />
              <UrlInput value={value} propName="twitterUrl" label="Twitter" placeholder="Twitter URL (optional)" change={httpCallback} />
              <UrlInput value={value} propName="instagramUrl" label="Instagram" placeholder="Instagram URL (optional)" change={httpCallback} />
            </div>
          </div>
        </div>
      </div>
  )}
};
