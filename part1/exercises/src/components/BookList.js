import classes from './BookList.module.css';


export default function BookList() {
   let pageTitle = "The List of Books Released Recently";
   let book1 = "https://books.google.com/books/publisher/content?id=k4BrEAAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&sig=ACfU3U3v_WIWT_vO97E5EN2mp1WMNX_g2g&w=1280";
   let book2 = "https://books.google.com/books/publisher/content?id=pkiHEAAAQBAJ&pg=PA1877&img=1&zoom=3&hl=en&sig=ACfU3U0ces7Ql9ew_Or8E6SYmWKmuEsCmA&w=1280";
   let book3 = "https://books.google.com/books/publisher/content?id=WUN_EAAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&sig=ACfU3U16XecSi3rWefli246YGYJ91IxKPA&w=1280";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="We Were Once a Family by Roxanna Asgarian!" />
         <img src={book2} alt="The Last Honest Man by James Risen!" />
         <img src={book3} alt="The Bill of Obligations, Ten Habbits of Good Citizen by Richard Haass!" />
      </div>      
   );
}