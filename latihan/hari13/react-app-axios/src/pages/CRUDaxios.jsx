import axios from 'axios';
import { useEffect, useState } from 'react';

function CRUDaxios(){
    const initialInput = {title:"",year:0,categoryId:null, id:null}
    const [dataMovie, setDataMovie] =  useState([]);
    const [dataCategory, setDataCategory] =  useState([]);
    const [input, setInput] = useState({initialInput}) 


    useEffect(()=>{
        fetchDataMovie()
        fetchDataCategory()
        
    },[])

    const fetchDataMovie = () => {
        axios.get('http://localhost:3000/api/movie').then((response) => {
            setDataMovie(response.data.movies)
        }).catch(err => {
            console.log(err)
        })
    }

    const fetchDataCategory = () => {
        axios.get('http://localhost:3000/api/category').then((response) => {
            let result = response.data.info
            setDataCategory(result)
            if(result > 0 ){
                setInput({...input, categoryId:result[0].id})
            }
        }).catch(err => {
            console.log(err)
        })
    }

    const handleChange = (event) => {
        let {name, value} = event.target
        setInput({...input, [name]:value})
    }

    const handelSubmit = async (event) =>{
        event.preventDefault()
        try{
            await axios.post('http://localhost:3000/api/movie', {title: input.title, year:Number(input.year), categoryId:Number(input.categoryId)})
            fetchDataMovie()
            fetchDataCategory()
            console.log(input)
            setInput({...input})
        }catch(err){
            alert(err)
        }
    }



    return(
        <>
        <h1>CRUD AXIOS</h1>
        <form onSubmit={handelSubmit}>
            <label for="tile">Movie Title</label>
            <input type="text" id="title" onChange={handleChange} name="title" value={input.title} placeholder="Movie Title.." />

            <label for="year">Realeased Year</label>
            <input type="number" id="year" onChange={handleChange} name="year" value={input.year} placeholder="Movie Release Date.." min="1980" max="2025"/>

            <label for="categoryId">Category</label>
            <select id="categoryId" name="categoryId" onChange={handleChange}>
                {dataCategory.map((item,index)=>{
                    return(
                        <option key={index} value={item.id}>{item.name}</option>
                    )
                })}


            </select>
            
            <input type="submit" value="Submit" />
        </form>

        
        <table>
            <thead>
                <tr>
                    <th>Nomor</th>
                    <th>Judul</th>
                    <th>Tahun</th>
                    <th>Kategori</th>
                </tr>
            </thead>

            <tbody>
                {dataMovie.map((item, index)=>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.title}</td>
                            <td>{item.year}</td>
                            <td>{item.categoryId}</td>
                        </tr>
                )
                })}
            </tbody>
        </table>
        </>    
    )
}

export default CRUDaxios