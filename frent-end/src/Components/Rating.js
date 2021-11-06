import React from 'react'


const Rating = (props) => {

    const {rating,newReviews} = props;
    return (
        <React.Fragment>
            <div className='rating'>
                {/* // 1-star */}
                <span>
                    <i className={ rating >= 1? 'fa fa-star'
                                    :rating >= 0.5? 'fa fa-star-half-o'
                                                   :'fa fa-star-o'}>
                        
                    </i>
                </span>
                {/* // 2-star */}
                <span>
                    <i className={ rating >= 2? 'fa fa-star'
                                    :rating >= 1.5? 'fa fa-star-half-o'
                                                   :'fa fa-star-o'}>
                        
                    </i>
                </span>
                {/* // 3-star */}
                <span>
                    <i className={ rating >= 3? 'fa fa-star'
                                    :rating >= 2.5? 'fa fa-star-half-o'
                                                   :'fa fa-star-o'}>
                        
                    </i>
                </span>
                {/* // 4-star */}
                <span>
                    <i className={ rating >= 4? 'fa fa-star'
                                    :rating >= 3.5? 'fa fa-star-half-o'
                                                   :'fa fa-star-o'}>
                        
                    </i>
                </span>
                {/* 5-star */}
                <span>
                    <i className={ rating >= 5? 'fa fa-star'
                                    :rating >= 4.5? 'fa fa-star-half-o'
                                                   :'fa fa-star-o'}>
                        
                    </i>
                </span>
                {/* //reviews */}
                <span> {newReviews} Reviews</span>

            </div>
            
        </React.Fragment>
    )
}

export default Rating
