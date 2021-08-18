import React from 'react';
import ReactDom from 'react-dom';

async function startPage() {
    const { default: Button } = await mas.require('button');
    const { default: Text } = await mas.require('text');

    ReactDom.render(
        <React.StrictMode>
            <Button/>
            <Text/>
            <Button/>
        </React.StrictMode>,
        document.getElementById('app')
    );

}

startPage();

