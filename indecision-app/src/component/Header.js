import React from 'react'

//bila sebuah component hanya untuk merender saja (tidak ada function didalam) cukup menggunakan seperti dibawha ini, tanpa menggunakan class
const Header = (props) => {
    return (
        <div className="header">
        <div className="container">
        <h1 className="header__title">{props.title}</h1>
            {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
        </div>
            
        </div>
    );
}

export default Header;