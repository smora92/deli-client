import React from 'react';
import './Rating.css';

export default function Rating(props) {
    // const { restaurants } = props;
    const stars = [1, 2, 3, 4, 5].map((_, i) =>
        (i < props.value)
            ? <span key={i}>&#9733; </span>
            : <span key={i}>&#9734; </span>
    );
    return (
        <div className="rating">
            {stars}
        </div>
    );
}
// secondMethod = () => {
//     // implement the code for full, empty and half stars here.
//     const { selectedStars, totalStars } = this.state;
//     return [...Array(totalStars)].map((el, i) =>
//         // check if current star should be half
//         i < selectedStars && i + 1 > selectedStars ?
//             <i key={i} className="fa fa-star-half-o" />
//             // not half, so check if current star should be full
//             : i < selectedStars ? <i key={i} className="fa fa-star" />
//                 // else, current star should be empty
//                 : <i key={i} className="fa fa-star-o" />
//     );
// };