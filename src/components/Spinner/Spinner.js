import React, {Component} from 'react';
import './Spinner.css';

export class Spinner extends Component {
    render() {
        const {size = 23} = this.props;

        return (
            <div className={`Spinner-container ${this.props.className}`}>
                <svg
                    className="spinner"
                    width={`${size}px`}
                    height={`${size}px`}
                    viewBox="0 0 66 66"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle
                        className="path"
                        fill="none"
                        strokeWidth="6"
                        strokeLinecap="round" cx="33" cy="33" r="30"/>

                </svg>
            </div>
        );
    }
}

export default Spinner;