import React from 'react';
import ReadMore from './ReadMore';
import { formatWithHyphen } from '../js/format';
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
                <div className="read-more col-sm-2">
                    <a href={"/news/" + formatWithHyphen(props.title)} >
                        <input type="button" //should be image
                            value="Read more"
                        />
                    </a>
                </div>               
            </div>                         

        </div>
    )
}

export default Headline;
