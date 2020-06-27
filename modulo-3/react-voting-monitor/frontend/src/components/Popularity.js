import React from 'react'

const STARS = {
    empty: '☆',
    full: '★'
}

const MAX_STARS = 10;

export default function Popularity({value}) {
    const fullStars = STARS.full.repeat(value);
    const emptyStars = STARS.empty.repeat(MAX_STARS - value);
    return (
        <div>
            {fullStars}{emptyStars}
        </div>
    )
}
