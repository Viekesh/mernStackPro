import React, { useEffect, useState } from 'react';
import axios from 'axios';

const URL = "http://localhost:3003/BooksContainer";

const fetchHandler = async () => {
    return await (axios.get(URL).then((res) => res.data));
}

const BooksContainer = () => {

    const [books, setBooks] = useState();

    useEffect(() => {
        fetchHandler().then((data) => setBooks(data));
    }, []);

    console.log(books);

    return (
        <div>BooksContainer</div>
    )
}

export default BooksContainer;



// "useEffect" is a hook which runs after the component rendered in the browser. It will only
// run once. If you provide any dependency array over there so whenever the dependancy array
// value will change then it will be rerun the the useEffect only.
// So it (useEffect) will be rendered component once after the component is loaded, if you do
// not provide any value over the array, but if you provide any value to the array and if the
// value changes inside the array so it will rerun function (hook "useEffect") and it will render
// whole page into the browser. So this is the use of useEffect and it will good for the
// asynchronous tasks that we have there like we are now fetching the request from the fetch
// handler so it is now advantage with that.
// So this is why we call the fetch handler dot then it will be address the data, to add the data
// we can use the useState from the react so it will contain the useState.
// useState just generate the state variable and then it will just set the setState into that
// and then it will contain an initial state so instead of this state we can add here as the
// books.