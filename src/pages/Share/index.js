import React from 'react'
import { Button, Card, CardContent, Container, Typography } from '@material-ui/core'
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { validationShare } from '../../configs/validation';
import { SHARE_MOVIE_SAGA } from '../../redux/constants/movie.constant';
import { StyledTextField } from './../../HOC/StyledTextField';

export default function Share() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { loadingShare } = useSelector(state => state.loadingReducer);
    const formik = useFormik({
        initialValues: {
            url: '',
        },
        validationSchema: validationShare,
        onSubmit: (values) => {
            // Dispatch to saga
            dispatch({ type: SHARE_MOVIE_SAGA, payload: { url: values.url, history } });
            values.url = "";
        },
    });

    return (
        <Container maxWidth="md" component="main">
            <Card >
                <CardContent>
                    <Typography color="textPrimary" gutterBottom>
                        Share a Youtube movie
                    </Typography>
                    <form onSubmit={formik.handleSubmit}>
                        <StyledTextField
                            id="url"
                            name="url"
                            label="Youtube URL"
                            value={formik.values.url}
                            onChange={formik.handleChange}
                            error={formik.touched.url && Boolean(formik.errors.url)}
                            helperText={formik.touched.url && formik.errors.url}
                            fullWidth
                            style={{ marginBottom: 20 }}
                        />
                        <Button type="submit" disabled={loadingShare} size="medium" fullWidth color="secondary" variant="contained">Share</Button>
                    </form>
                </CardContent>
            </Card>
        </Container>
    )
}
