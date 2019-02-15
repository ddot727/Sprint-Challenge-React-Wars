import React from 'react';
import Character from './Character';

const CharacterList = props => {
    return(
        <div>
            {props.data.map(char => 
                <Character characterData={char} />
                )}
        </div>
    )
}

export default CharacterList;