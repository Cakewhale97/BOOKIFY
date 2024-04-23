import react from "react";
import { useState, useEffect } from "react";

export default function useBooks() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=XGG70XKtpepNpmBS3HAMwZ4BVnGiEJjB')
        .then(response => response.json())
        .then(data => {
            setBooks(data.results.books);
            setLoading(false);
            console.log(data.results.books);
        });

    }, []);

    return { books, loading };
    
}
