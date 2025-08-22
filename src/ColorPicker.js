import {useState} from 'react';

const ColorPicker = () => {

    const [color, setColor] = useState('#ffffff');

    return ( 
        <div className="color-picker box-size">
            <h2>Color Picker</h2>
            <p>Pick a color from the palette below:</p>
            <p style={{backgroundColor: color}} className="selected-color"><span id="selected-color">{color}</span></p>
            <input type="color" onChange={(e) => setColor(e.target.value)} value={color} />
        </div>
     );
}
 
export default ColorPicker;