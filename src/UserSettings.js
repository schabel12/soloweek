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
            <input type="checkbox" id="wheat" name="allergy" value="Wheat" onClick={props.addAlert}/>
            <label for="wheat">wheat</label>
        </div>
        <div>
            <input type="checkbox" id="eggs" name="interest" value="Eggs" onClick={props.addAlert}/>
            <label for="eggs">eggs</label>
        </div>
        <div>
            <input type="checkbox" id="soybean" name="interest" value="Soybean" onClick={props.addAlert}/>
            <label for="soybean">soybean</label>
        </div>
        <div>
            <input type="checkbox" id="milk" name="interest" value="Milk" onClick={props.addAlert}/>
            <label for="milk">milk</label>
        </div>
        <div>
            <input type="checkbox" id="fish" name="interest" value="Fish" onClick={props.addAlert}/>
            <label for="fish">fish</label>
        </div>
        <div>
            <input type="checkbox" id="hydrogenated oil" name="interest" value="Hydrogenated" onClick={props.addAlert}/>
            <label for="hydrogenated oil">hydrogenated oil</label>
        </div>   
        <div>
            <input type="checkbox" id="high fructose corn syrup" name="interest" value="High Fructose Corn Syrup" onClick={props.addAlert}/>
            <label for="high fructose corn syrup">high fructose corn syrup</label>
        </div>        
        <div>
            <input type="checkbox" id="MSG" name="interest" value="MSG" onClick={props.addAlert}/>
            <label for="MSG">MSG</label>
        </div>        
        <div>
            <input type="checkbox" id="BHA" name="interest" value="BHA" onClick={props.addAlert}/>
            <label for="BHA">BHA</label>
        </div>
        <div>
            <input type="checkbox" id="BHT" name="interest" value="BHT" onClick={props.addAlert}/>
            <label for="BHT">BHT</label>
        </div>
        <div>
            <input type="checkbox" id="sodium nitrate" name="interest" value="Sodium Nitrate" onClick={props.addAlert}/>
            <label for="sodium nitrate">sodium nitrate</label>
        </div>
        <div>
            <input type="checkbox" id="propyl gallate" name="interest" value="Propyl Gallate" onClick={props.addAlert}/>
            <label for="propyl gallate">propyl gallate</label>
        </div>
        <div>
            <input type="checkbox" id="Sodium benzoate" name="interest" value="Sodium Benzoate" onClick={props.addAlert}/>
            <label for="Sodium benzoate">Sodium benzoate</label>
        </div>
        <div>
            <input type="checkbox" id="potassium bromate" name="interest" value="Potassium Bromate" onClick={props.addAlert}/>
            <label for="potassium bromate">potassium bromate</label>
        </div>                                      
      </fieldset>
    </div>
)

export default UserSettings;