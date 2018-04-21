import React from 'react';
import {
    Route,
    Link,
    BrowserRouter as Router,
  } from 'react-router-dom';

  const UserSettings = (props) => (
    <div className="UserSettings">
        <fieldset>
        <legend>Food Allergies/Avoided Ingredients</legend>
        <div>
            <input type="checkbox" id="wheat" name="allergy" value="wheat"/>
            <label for="wheat">wheat</label>
        </div>
        <div>
            <input type="checkbox" id="eggs" name="interest" value="eggs"/>
            <label for="eggs">eggs</label>
        </div>
        <div>
            <input type="checkbox" id="soybean" name="interest" value="soybean"/>
            <label for="soybean">soybean</label>
        </div>
        <div>
            <input type="checkbox" id="milk" name="interest" value="milk"/>
            <label for="milk">milk</label>
        </div>
        <div>
            <input type="checkbox" id="fish" name="interest" value="fish"/>
            <label for="fish">fish</label>
        </div>
        <div>
            <input type="checkbox" id="hydrogenated oil" name="interest" value="hydrogenated oil"/>
            <label for="hydrogenated oil">hydrogenated oil</label>
        </div>   
        <div>
            <input type="checkbox" id="high fructose corn syrup" name="interest" value="high fructose corn syrup"/>
            <label for="high fructose corn syrup">high fructose corn syrup</label>
        </div>        
        <div>
            <input type="checkbox" id="MSG" name="interest" value="MSG"/>
            <label for="MSG">MSG</label>
        </div>        
        <div>
            <input type="checkbox" id="BHA" name="interest" value="BHA"/>
            <label for="BHA">BHA</label>
        </div>
        <div>
            <input type="checkbox" id="BHT" name="interest" value="BHT"/>
            <label for="BHT">BHT</label>
        </div>
        <div>
            <input type="checkbox" id="sodium nitrate" name="interest" value="sodium nitrate"/>
            <label for="sodium nitrate">sodium nitrate</label>
        </div>
        <div>
            <input type="checkbox" id="propyl gallate" name="interest" value="propyl gallate"/>
            <label for="propyl gallate">propyl gallate</label>
        </div>
        <div>
            <input type="checkbox" id="Sodium benzoate" name="interest" value="Sodium benzoate"/>
            <label for="Sodium benzoate">Sodium benzoate</label>
        </div>
        <div>
            <input type="checkbox" id="potassium bromate" name="interest" value="potassium bromate"/>
            <label for="potassium bromate">potassium bromate</label>
        </div>
        <div>
            <input type="checkbox" id="Red #3 Red #40 Yellow #5 Yellow #6" name="interest" value="Red #3 Red #40 Yellow #5 Yellow #6"/>
            <label for="Red #3 Red #40 Yellow #5 Yellow #6">Food Colorings: Red #3 Red #40 Yellow #5 Yellow #6</label>
        </div>                                        
      </fieldset>
    </div>
)

export default UserSettings;