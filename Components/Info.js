import React from 'react'

export default function Info(){
    return(
        <div className='info'>
        <div className='image'></div>
            <h1 className='name'>Sean Keefe</h1>
            <h3 className='position'>Junior Software Developer</h3>
            <h5 className='site'>sean.keefe.com</h5>
            <div className='buttons'>
                <button className='email'>
                    <a href='sean.c.keefe13@gmail.com'>
                        <span className="material-symbols-outlined">mail</span>Email
                    </a>
                </button>
                <button className='linkedin'>
                    <a>
                        <i className="bi bi-linkedin"></i>LinkedIn
                    </a>
                </button>
            </div>
        </div>
    )
}