import React from "react";
import Button from "./Button";

export default (storiesOf, mod, action) => {
    storiesOf('Button', mod)
        .add('basic', () => (
            <Button label={"join"} />
        ))
        .add('pink', () => (
            <Button isPink={true} label={"join"} />
        ))
        .add('gold', () => (
            <Button isGold={true} label={"join"} />
        ))
        .add('loading', () => (
            <Button loading={true} label={"join"} />
        ))
}
