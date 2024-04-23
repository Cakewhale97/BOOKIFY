import { useState, useEffect } from "react";
import { firestore } from "./firebaseConfig"; 
import { doc, getDoc } from "firebase/firestore";
import { auth } from "./firebaseConfig";

const userData = (userId) => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            if(userId) {
                const userRef = doc(firestore, "users", userId);
                try {
                    const docSnap = await getDoc(userRef);
                    if(docSnap.exists()) {
                        setUserData(docSnap.data());
                    } else {
                        console.log("No such document!");
                        setError("No such document!");
                    }
                } catch (err) {
                    console.error("Error getting document:", err);
                    setError(err.message);
                }
                setLoading(false);
            }
        };
        
        if(auth.currentUser) {
            fetchUserData();
        } else {
            setLoading(false);
            setError("No user signed in");
        }
    }, [userId]);

    return { userData, loading, error };
};

export default userData;
