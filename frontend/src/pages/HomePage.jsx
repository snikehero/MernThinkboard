import React from 'react'
import {useState, useEffect} from 'react';
import Navbar from "../components/navbar"
import RateLimitedUI from '../components/RateLimitedUI';
import axios from 'axios';
const HomePage = () => {
const [isRateLimited, setRateLimited] = useState(true);
const [notes,setNotes]= useState([]);
const [loading,setLoading] = useState(true);

useEffect(() => {
    const fetchNotes = async () => {
        try {
            const res = await axios.get('http://localhost:5001/api/notes');
            console.log(res.data);
        } catch (error) {
            console.log("error fetching notes",error);
        }
    }
    fetchNotes();
},[])
  return (
    <div className='min-h-screen'>
        <Navbar/>
        {isRateLimited && <RateLimitedUI/>}
    </div>
  )
}

export default HomePage