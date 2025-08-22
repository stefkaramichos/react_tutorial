import {useState} from 'react';

const HandleElements = () => {

    const [elementss, setElementss] = useState([
        { id: 1, name: 'Element 1' },
        { id: 2, name: 'Element 2' },
        { id: 3, name: 'Element 3' }
    ]);

    

    const styles ={
        div: {
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between'
        },
        span: {
            color: 'red', 
            cursor: 'pointer'
        }
    }

    const addElement = () => {
        const inputValue = document.querySelector('input[type="text"]').value;
        document.querySelector('input[type="text"]').value = ''; // Clear input field
        if(inputValue.trim() !== '') {
            setElementss([...elementss, { id: elementss.length + 1, name: inputValue }]);
        }
    }

    const deleteElemet = (id) => {
        setElementss(elementss.filter((elem) => elem.id !== id));
    }


    return ( 
        <div className="handle-elements">
            <h2>Handle Elements</h2>
            {
                elementss && elementss.map((elemen) => (
                    <div style={styles.div} key={elemen.id} className="">
                        <h3>{elemen.name}</h3>
                        <span style={styles.span} onClick={() => {deleteElemet(elemen.id)}}> delete</span>
                    </div>
                ))
            }
            <input type="text" placeholder="Add new element"/>
            <button onClick={addElement}>add</button>
        </div>
     );
}
 
export default HandleElements;