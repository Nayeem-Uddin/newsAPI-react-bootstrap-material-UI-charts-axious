import React from 'react';
import {Card, Button} from 'react-bootstrap'

const News = (props) => {
    // console.log(props.article);
    const { title , description, url } = props.article;
    // console.log(title);
    return (
        <Card>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button variant="primary">To Know More : {url}</Button>
            </Card.Body>
        </Card>
    );
};

export default News;