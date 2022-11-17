import * as React from "react"
import { useEffect, useState } from "react"
import { BallTriangle } from "react-loader-spinner"
import { Empty } from "../../components/empty/empty"
import Newpagination from "../../components/pagination/pagination"
import  Search  from "../../components/search"
import api from "../../helpers/api"
import Book, { booksModel } from "../../helpers/model"
import "./styles.scss"
export const Home =()=>{
    const [books, setBooks] = useState<Book[]>()
    const [page, setPage] = useState(1)
    const [select, setSelect] = useState<string>('')
    const [input, setInput] = useState<string>()
    const [loading, setLoading] = useState(true)

    var handleBookfetch =()=> {
        setLoading(true)
        // var url = `${select ?'characters':'books'}?page=${page}&pageSize=5`
        var url = !select ? `${'books'}?page=${page}&pageSize=5` :`${'characters'}?page=${page}&pageSize=5&${select}=${input}`
        api.get(url).then ((res)=> {
            !select ? setBooks(booksModel(res.data)): setBooks(res.data)
            setLoading(false)
        }).catch(()=> {
            setLoading(false)
        })
    }

    var handleChange =(e:any)=> {
        // alert(e.target.value)
        setSelect(e.target.value)
    }
    var handleInput =(e:any)=> {
        // alert(e.target.value)
        setInput(e.target.value)
    }
    useEffect(()=> {
        handleBookfetch()
    },[page])

   
    if (loading){
        return <section className="home">
            <div className="home__inner">
            <Search handleChange={handleChange} handleInput={handleInput} select={select} input={input} handleBookfetch={handleBookfetch} />
                <div style={{margin:'0 auto'}}><BallTriangle color="#fff" height={100} width={100} /> </div>
            </div>
        </section>
    }else {
    return (
        <section className="home">
            <div className="home__inner">
                <Search handleChange={handleChange} handleInput={handleInput} select={select} input={input} handleBookfetch={handleBookfetch} />
                {books?
                    <div className="home__result">
                        <p className="home__figure">showing results : <strong>{books && books.length}</strong> </p>
                        <div className="home__books">
                            {
                                books.map((item:Book,index:number)=> (
                                    <Singleboook
                                        data={item}
                                        key={index}
                                        index={index}
                                    />
                                ))
                            }
                        </div>
                        
                        <Newpagination
                            currentPage={page}
                            // totalCount={data.paginationMeta.totalObjects}
                            totalCount={12}
                            pageSize={5}
                            onPageChange={(page: number) => {

                                // handleBookfetch()
                                setPage(page)}}
                        />
                        
                    </div>
                    :<Empty
                        title="woops"
                        subtitle="Couldnt find anything"
                    />
                }
            </div>
        </section>
    )
    }
}

const Singleboook= (props:{data:Book, index:number})=> {
    if (props.data.aliases) {
        return (
            <div className="home__book" key={props.index}>
            <span className="home__top">
                <p className="home__name">{props.data.aliases}</p>
            </span>
        </div>
        )
    }else {
    return (
        <div className="home__book" key={props.index}>
            <span className="home__top">
                <p className="home__name">{props.data.name}</p>
                <span className="home__authors">
                    {
                        props.data.authors.map((item:string,index:number)=> (
                            <p className="home__author" key={index}>{item}</p>
                        ))
                    }
                </span> 
                
            </span>
           
            <p className="home__pub">{props.data.publisher}</p>
            <p className="home__isbn">{props.data.isbn}</p>
        </div>
    )}
    
}