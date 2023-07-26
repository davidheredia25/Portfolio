import React from 'react';
import pdf from './DavidHeredia-FullStackDeveloper-CV.pdf'


const Pdf = () => {
    return (
        <div style={{position: 'absolute', width: '100%', height: '100%'}}>
            <object
                data={pdf}
                type="application/pdf"
                width="100%"
                height="100%"
            >
            </object>
        </div>
    )
}

export default Pdf;
