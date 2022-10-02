import PropTypes from 'prop-types';
import styles from './ContactListItem.module.css';
import Button from '@mui/material/Button';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export const ContactListItem = ({ id, name, number, onDelete }) => {
    return (
        <li className={styles.listItem} key={id}>
            <p>
                {name}: {number}
            </p>
            <Button
                sx={{
                    fontFamily: 'inherit',
                    color: '#0082D1',
                    backgroundColor: '#FFD100',
                    border: '1px solid #FFD100',
                    '&:hover': {
                        color: '#FFD100',
                        background: '#0082D1',
                        border: '1px solid #FFD100',
                    },
                }}
                onClick={() => onDelete(id)}
                variant="outlined"
                endIcon={<DeleteForeverIcon />}
            >
            Delete
            </Button>
        </li>
    );
};

ContactListItem.poropTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};