import React, {useRef} from "react";
import { addMovie } from "../../store/data";
import Modal from "../Modal";

import classes from "./AddMovieForm.module.css";
import { useAppDispatch } from "../../store";
import { uiAddFormActions } from "../../store/ui-slice";

type IProps = {
    onAddMovie: () => void;
}

const AddMovieForm: React.FC<IProps> = ({onAddMovie, ...props}) => {
    const dispatch = useAppDispatch();
    const toggleCart = () => {
        dispatch(uiAddFormActions.toggle())
    }

    const nameInputRef = useRef<HTMLInputElement>(null);
    const yearInputRef = useRef<HTMLInputElement>(null);
    const descriptionInputRef = useRef<HTMLTextAreaElement>(null);
    const priceInputRef = useRef<HTMLInputElement>(null);
    const urlInputRef = useRef<HTMLInputElement>(null);
    const id = Math.random().toString();

    const submitHandler = (ev) => {
        ev.preventDefault();
        if (nameInputRef && yearInputRef && descriptionInputRef
            && priceInputRef && urlInputRef) {
                addMovie({
                    name: nameInputRef.current?.value, 
                    id: id, 
                    description: descriptionInputRef.current?.value, 
                    imageUrl: urlInputRef.current?.value, 
                    year: yearInputRef.current?.value, 
                    price: priceInputRef.current?.value,
                });
            }
        toggleCart();
        onAddMovie();
    }

    return <Modal onClose={toggleCart}>
        <h4 className={classes.title}>Add form</h4>
        <form className={classes["add-form"]}>
            <div className={classes["form-div"]}>
                <label htmlFor="name">Name of movie</label>
                <input ref={nameInputRef} id="name" type="text" />
            </div>
            <div className={classes["form-div"]}>
                <label htmlFor="year">Year of release</label>
                <input ref={yearInputRef} id="year" type="number" min="1900" max={new Date().getFullYear().toString()} step="1"/>
            </div>
            <div className={classes["form-div"]}>
                <label htmlFor="description">Movie description</label>
                <textarea ref={descriptionInputRef} id="description"/>
            </div>
            
            <div className={classes["form-div"]}>
                <label htmlFor="price">Price</label>
                <input ref={priceInputRef} id="price" type="number" min="1" max="25" step="1"/>
            </div>
            <div className={classes["form-div"]}>
                <label htmlFor="url">Image URL</label>
                <input ref={urlInputRef} id="url" type="text" />
            </div>
            <section className={classes.actions}>
                <button className={classes.cancel} type="button" onClick={toggleCart}>Cancel</button>
                <button onClick={submitHandler} type="submit">Add movie</button>
            </section>
            
        </form>
    </Modal>;
};

export default AddMovieForm;
