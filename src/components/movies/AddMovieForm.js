import React, {useRef} from "react";
import { addMovie } from "../../store/data";
import Modal from "../Modal";

import classes from "./AddMovieForm.module.css";

const AddMovieForm = (props) => {
    const nameInputRef = useRef();
    const yearInputRef = useRef();
    const descriptionInputRef = useRef();
    const priceInputRef = useRef();
    const urlInputRef = useRef();
    const id = Math.random().toString();

    const submitHandler = (ev) => {
        ev.preventDefault();
        if (nameInputRef && yearInputRef && descriptionInputRef
            && priceInputRef && urlInputRef) {
                addMovie({
                    name: nameInputRef.current.value, 
                    id: id, 
                    description: descriptionInputRef.current.value, 
                    imageUrl: urlInputRef.current.value, 
                    year: yearInputRef.current.value, 
                    price: priceInputRef.current.value,
                });
            }
        props.onClose();
        props.onAddMovie();
    }

    return <Modal onClose={props.onClose}>
        <h4 className={classes.title}>Add form</h4>
        <form className={classes["add-form"]}>
            <div className={classes["form-div"]}>
                <label htmlFor="name">Name of movie</label>
                <input ref={nameInputRef} id="name" type="text" />
            </div>
            <div className={classes["form-div"]}>
                <label htmlFor="year">Year of release</label>
                <input ref={yearInputRef} id="year" type="number" min="1900" max={new Date().getYear().toString()} step="1"/>
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
                <button className={classes.cancel} type="button" onClick={props.onClose}>Cancel</button>
                <button onClick={submitHandler} type="submit">Add movie</button>
            </section>
            
        </form>
    </Modal>;
};

export default AddMovieForm;
