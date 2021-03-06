import React from 'react';
import {Card} from "react-bootstrap";
import { Link } from 'react-router-dom';

import "./engagementcard.scss"

const WeddingCard = (props) => {
    let name = props.album.name.replace("Engagement: ", "");
    const image = props.album.picture.data.url;
    const id = props.album.id

    return (
        <>
            <div className="engagement-album">
            <Card>
                    
                    <Link to={{
                        pathname: `/album/${id}`,
                        albumProps: { album: props.album}

                    }}>
                        <Card.Img variant="top" src={image} />
                        <p>{name}</p>
                    </Link>
                </Card>
            </div>
        </>
    )
}

export default WeddingCard;