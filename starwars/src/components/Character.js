// Write your Character component here

import React from 'react';
import styled from 'styled-components'

const CharacterWrapper = styled.div`
    border: 1px solid #c7fa6c;
    width: 30%;
    margin: 10px auto;
    display: flex;
    align-items: center;
    /* box-shadow: 3px 3px 1px 1px #c7fa6c; */
    box-shadow:
    1px 0px 1px #c7fa6c,
    0px 1px 1px #c1f762,
    2px 1px 1px #c7fa6c,
    1px 2px 1px #c1f762,
    3px 2px 1px #c7fa6c,
    2px 3px 1px #c1f762,
    4px 3px 1px #c7fa6c,
    3px 4px 1px #c1f762,
    5px 4px 1px #c7fa6c,
    4px 5px 1px #c1f762,
    6px 5px 1px #c7fa6c;

    &:hover{
        cursor: pointer;
        position: relative;
        top:3px;
        left:2px;
        box-shadow: 0px 0px;
    }


    h2{
        color: #c1f762;
    }
   
`

const Portrait = styled.img`
    width: 20%;
    margin: 10px;
    border-radius: 50%;
    margin-right: 60px;
`

function Character(props){

    const character = props.characterInfo

    return(
        <CharacterWrapper>
            <Portrait src={character.image}></Portrait>
            <h2>{character.name}</h2>
        </CharacterWrapper>
    )
}

export default Character