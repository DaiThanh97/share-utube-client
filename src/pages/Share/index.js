import { Button, Card, CardActions, CardContent, Container, Grid, TextField, Typography } from '@material-ui/core'
import React from 'react'
import { StyledTextField } from './../../HOC/StyledTextField';

export default function Share() {
    return (
        <Container maxWidth="md" component="main">
            <Card >
                <CardContent>
                    <Typography color="textPrimary" gutterBottom>
                        Share a Youtube movie
                    </Typography>
                    <StyledTextField id="username" label="Youtube URL" fullWidth />
                </CardContent>
                <CardActions>
                    <Button size="medium" fullWidth color="secondary" variant="contained">Share</Button>
                </CardActions>
            </Card>
        </Container>
    )
}
