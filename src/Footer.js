import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
class Footer extends React.Component {
    render() {
        return (
            <div className="desk-footer">
                <div className="container-fluid">
                    <div className="row" style={{display:"inlineBlock"}}>
                        <div className=" col-md-12 rights-reserved">
                           <p>&copy; 2020 smarsoteam.netlify.app. All Rights Reserved.</p>
                        </div>
                        {/* <div className=" col-md-12"></div> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
