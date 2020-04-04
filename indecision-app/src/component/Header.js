import React from 'react'

//bila sebuah component hanya untuk merender saja (tidak ada function didalam) cukup menggunakan seperti dibawha ini, tanpa menggunakan class
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
}

export default Header;