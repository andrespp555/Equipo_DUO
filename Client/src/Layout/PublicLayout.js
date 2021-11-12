import React from 'react';
import NavBar from '../Components/Navbars';

const PublicLayout = ({children}) => {
    return (
        <div>
            <NavBar/>
            {/*este es mi publicLayout*/}
            {children}
        </div>
    )
}

export default PublicLayout
