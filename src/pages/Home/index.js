import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import MovieItem from '../../components/MovieItem';

export default function Home() {
    return (
        <div>
            <Container maxWidth="md" component="main">
                <Card>
                    <CardContent>
                        <MovieItem />
                    </CardContent>
                </Card>
            </Container>
        </div>
    );
}
