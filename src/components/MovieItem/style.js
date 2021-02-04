import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    content: {
        paddingLeft: theme.spacing(3)
    },
    description: {
        fontWeight: 700
    }
}));