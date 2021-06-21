import { useParams } from "react-router";
import { useState, useEffect } from 'react'



export default function Display() {
    const {id} = useParams();
    // const {data:blog , ispending , error} = useFetch('https://reqres.in/api/users?page=' + id);
    // console.log(blog)

    const [blog , setBlog] = useState(null);

    useEffect(() => {
        fetch('https://reqres.in/api/users?page=' + id)
        .then((res) => res.json())
        .then(data => {
            setBlog(data);
        })
        
    }, [id])

    console.log(blog && blog.data)
    
    return (
        <div>
            {blog && blog.data.map((d) => (
                <div key={d.id}>
                    <h1>{`${d.id} : ${d.first_name} ${d.last_name}`}</h1>
                    <p>{d.email}</p>
                    <img src={d.avatar} alt="image" />
                </div>
            ))}
           
        </div>
    )
}
