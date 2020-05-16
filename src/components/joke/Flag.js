import React from 'react';


let flags = ["nsfw", "religious", "political", "racist", "sexist"]

export default class JokeFlags extends React.Component {

    render() {
        return (
            <select name="flags">
                {flags.map((val) => <option value={val} key={val}>{val}</option>)}
            </select>
        );
    }
}