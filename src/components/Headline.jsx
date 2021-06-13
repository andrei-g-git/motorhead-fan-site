import React from 'react';
import ReadMore from './ReadMore';
import '../scss/Headline.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function Headline(props) {
    return (
        <div className="headline-container container">
            <div className="row justify-content-sm-between">
                <section className="headline col-sm-10">
                    <h6 className="headline-title">
                        {
                            props.title
                        }
                    </h6>
                    <p className="snippet">
                        {
                            props.snippet
                        }
                    </p>
                </section>
                <div className="col-sm-2">
                    <ReadMore></ReadMore>
                </div>               
            </div>                         

        </div>
    )
}

export default Headline;