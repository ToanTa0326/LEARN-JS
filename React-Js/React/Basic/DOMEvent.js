const props = {
    "id": 2,
    "title": "HTML, CSS từ Zero đến Hero",
    "slug": "html-css",
    "description": "Trong khóa này chúng ta sẽ cùng nhau xây dựng giao diện 2 trang web là The Band & Shopee.",
    "thumbnail": "courses/2.png",
    "content": null,
    "preview_origin": "youtube",
    "preview_youtube_id": "R6plN3FvzFY",
    "preview_path": null,
    "language": "html",
    "syntax_highligh": "language-html",
    "level": "Trình độ cơ bản",
    "priority": 10,
    "students_count": 76818,
    "deleted_at": null,
    "created_at": "2020-04-10T14:23:13.000000Z",
    "updated_at": "2021-11-18T10:40:38.000000Z",
    "thumbnail_cdn": "https://cdn.fullstack.edu.vn/f8-learning/courses/2.png"
}

const App= () => (
    <div 
        onDoubleClick = {(event) => console.log(event.target)} 
        className = {props.id} style = {{fontSize: '20px'}}
    >
        <img 
            src = {props.thumbnail_cdn} 
            className = "image" 
            onDoubleClick = {() => console.log(props.thumbnail_cdn)}
        />
        <h3 
            onDoubleClick = {() => console.log(props.title)} 
            className = "title"
        >
            {props.title}
        </h3>
        <p className = "description">{props.description}</p>
    </div>
)
ReactDOM.render(<App />, document.querySelector('.root'));