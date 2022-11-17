export default interface Book{
    [x: string]: any;
    publisher: string;
    name: number;
    isbn:number,
    authors: [string];
    released: string;
}

export const booksModel = (res:Book[])=> {

    var data = res.map((item:Book, index:number)=> (
        {
            publisher : item.publisher,
            name:item.name,
            isbn:item.isbn,
            // authors:item.authors.length > 1 ?  item.authors.join(',') : item.authors[0],
            authors:item.authors,
            released:item.released
        }
    ))
        console.log(data)
    return data
}