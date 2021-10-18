import { Fragment } from 'react';
import classes from './Modal.module.css';

type IProps = {
    onClose: React.MouseEventHandler;
}

const Modal: React.FC<IProps> = ({onClose, children}) => {
    return <Fragment>
        <div className={classes.backdrop} onClick={onClose}></div>
        <div className={classes.modal}>
            {children}
        </div>
    </Fragment>;
}

export default Modal;