import data from './../data.json';
import { useState } from 'react';
 
const MyProjects = () => {
    const [index, setIndex] = useState(0);
    const arrayOfObjects = data;
    const oneItem = arrayOfObjects[index];

    function handleClick() {
        if (index < arrayOfObjects.length-1)
        {
           setIndex(index + 1);
        }
        else 
        {
           setIndex(0);
        }
     }

    return (
        <div>
            <button onClick={handleClick}>Next</button>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Species</th>
                            <th>Habitat</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{oneItem.fish}</td>
                            <td>{oneItem.habitat}</td>
                            <td><img src={oneItem.photoUrl} alt={oneItem.alt} width="300" height="300"></img></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
 }

 export default MyProjects;
