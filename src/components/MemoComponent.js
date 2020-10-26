import React, { Component } from 'react'

function MemoComponent({name}) {
    console.log('Rendering memo Component')
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComponent)