//creating react component dependency file
import React from "react";
import ReactDOM from "react-dom";

//CSS index.css is in the folder index.js, relative file using './'

import './index.css';

//JSX rules
//stateless functional component
//always return JSX - return function
//in JSX everything must be wrapped in a div/ best html semantics
// could also be wrapped in a React.fragment
//className instead of class

//Nested Components- there could be more components
//return a function

//refactoring all into an object. It doesnn't have to be object
//is object because I want to set many different properties

const firstBook = {
  img: 'https://m.media-amazon.com/images/I/81PdOsc95OL._AC_UL320_.jpg',
  title: 'The emotional #1 Sunday Times bestseller',
  author: 'by Colleen Hoover',
  edition: 'English Edition',
  publisher: 'Publisher: Macleren',
  
}

const secondBook = {
  img: 'https://m.media-amazon.com/images/I/81swDY1E2IL._AC_UL320_.jpg',
  title: 'The Bridgerton Collection: Books 1 - 4',
  author: 'by Julia Quinn',
  edition: 'English Edition',
  publisher: 'Publisher: MacMillian',
  
}

const thirdBook = {
  img: 'https://m.media-amazon.com/images/I/61rdCmpeuxL._AC_UL320_.jpg',
  title: '101 Essays That Will Change The Way You Think',
  author: 'by Brianna Wiest',
  edition: 'English Edition',
  publisher: 'Publisher: MacMillian',
  
}

const fourthBook = {
  img: 'https://m.media-amazon.com/images/I/61rdCmpeuxL._AC_UL320_.jpg',
  title: '101 Essays That Will Change The Way You Think',
  author: 'by Brianna Wiest',
  edition: 'English Edition',
  publisher: 'Publisher: MacMillian',
  
}

function BookList() {
  
  return (
  <section className="booklist"> 
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
        edition={firstBook.edition}
        publisher={firstBook.publisher}
      />
      
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
        edition={secondBook.edition}
        publisher={secondBook.publisher}
      
      />

      <Book
        img={thirdBook.img}
        title={thirdBook.title}
        author={thirdBook.author}
        edition={thirdBook.edition}
        publisher={thirdBook.publisher}
      
      />

      <Book
        img={fourthBook.img}
        title={fourthBook.title}
        author={fourthBook.author}
        edition={fourthBook.edition}
        publisher={fourthBook.publisher}
      
      />

      
      <Book />
  </section>
  );
    
}


// we can have several components as much as possible
const Book = (props) => {

// you can destructure by removing the props above and add the cury bracket inside 
// {img, title, author etc} and pass the objects inside

// Check/Learn object destructuring in JS 
//another way to access the props is through destructuring,
//not to be writing props all the time down. Setting the const with function parameters in curly bracly
  
//const {img, title, author, edition, publisher} = props;
  
//therefore, remove all the props in img, title etc and set them like
// {title} {img} {author}
    //const { img, title, author, children } = props;
  return (
   
  <article className="book">
   
    <img className="bookImage" src={props.img} alt="" />
    <h2>{props.title}</h2>
    <h4>{props.author}</h4>
    <h5>{props.edition}</h5>
    <p>{props.publisher}</p>
    
    

  </article >
    );
};



{/*const Image = () => (
  <img className="bookImage" src="https://m.media-amazon.com/images
/I/81PdOsc95OL._AC_UL320_.jpg" alt="" />
);*/}


{/* You can set up implicit/ explicit traditional value */ }
 
{/* const Title = () => <h1>It Ends With Us:  
  The emotional #1 Sunday Times bestseller</h1>;*/}

{/* const Author = () => <h4>by Colleen Hoover</h4>;  */}
{/* const Edition = () => <h5>English Edition</h5>; */ }


//All these could be deleted and passed as Javascript JSX as return without hard coding

      //function is Family / passing in ReactDom.render is <Family />
      //creating nested components example. this returns with div
      //<div>
      //<Person />
      //<h2>This is Chima</h2>
      //<h3>My children names</h3>
      //<Children />
      //<ul>
        //<li>Genesis Chimamanda</li>
        //<li>Trinity Virtuous</li>
        //<li>Perfect-Passion</li>
      //</ul>
      //<div>
// another way of using arrow function and return inside div function
//const Person = () => <h1>My family</h1>

// or with a return function
//const Children = () => {
 // return <p>My children are 3</p>

//};
  


ReactDOM.render(<BookList />, document.getElementById('root'))