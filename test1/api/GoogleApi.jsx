
import { useEffect, useState } from "react";
import axios from "axios";

const useGoogleApi = (genre) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axios.get(
        "https://www.googleapis.com/books/v1/volumes",
        {
          params: {
            q: `subject:${genre}`,
            orderBy: "relevance",
            maxResults: 10,
            printType: "books",
          },
        }
      );
      setBooks(response.data.items);
    };
    fetchBooks();
  }, [genre]);

  return books;
};

export default useGoogleApi;
