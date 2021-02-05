import React, { Fragment, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { useSnackbar } from 'notistack';
import { useSelector } from 'react-redux';
import { STATUS_CODE } from '../../configs/constant';

export default function Notify() {
    const { enqueueSnackbar } = useSnackbar();
    const { status, message } = useSelector(state => state.notiReducer);

    useEffect(() => {
        if (status !== -1) {
            let variant = '';
            if (status === STATUS_CODE.SUCCESS) {
                variant = 'success';
            }
            else {
                variant = 'error';
            }
            enqueueSnackbar(message, { variant });
        }
    });

    return (
        <Fragment>
        </Fragment>
    );
}