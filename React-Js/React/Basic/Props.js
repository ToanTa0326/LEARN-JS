// PROPS
//     -> React Element
//         - use prop like attribute of HTML
//         - 2 prop class, for replace by className, htmlFor
//         - Obey with html's rule
//     -> React Component
//         - use props like argument in function
//         - Name after props comfortably
//             +, Name by cameCase
//             +, can have '-' in argument  
    
//     *Note:  
//         - Prop "key" is special prop. Only use in Obj Array React Element
//         - props can be ever type of value
//         - use Destructuring

function PostItem({callback = () => console.log('Loi callBack'), ...props}){
    callback(Math.random())
    return(
        //REACT Element
        <div className="post-item"> 
            <img src = {props.img} alt = {props.title} />
            <h2 className = "post-title">{props.title}</h2>
            <p className = "post-desc">{props.desc}</p>
            <p className = "post-publishAt">{props.publish}</p>
        </div>
    )
}

function App(){
    return (
        <div id = "wrapper">
            {/* React Component */}
            <PostItem 
                img = "https://th.bing.com/th/id/OIP.QNTeuoIjpBKdMshDbS-8vgHaE-?pid=ImgDet&rs=1"
                title = "Lập trình Cuộc Sống"
                desc = "Mõi ngày là một điều may mắn"
                publish = "17h29m ago"
                callback = {(data) => {
                    console.log(data);
                }}
            />
            <PostItem />
            <PostItem />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('.root'))

let root2 = document.createElement('div');
root2.className = 'root2';
document.body.appendChild(root2);

// title, id, desciption, thumbnail_cdn

const courses = [
    {
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
    },
    {
      "id": 1,
      "title": "JavaScript Cơ Bản",
      "slug": "javascript-co-ban",
      "description": "Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học.",
      "thumbnail": "courses/1.png",
      "content": null,
      "preview_origin": "youtube",
      "preview_youtube_id": "0SJE9dYdpps",
      "preview_path": null,
      "language": "javascript",
      "syntax_highligh": "language-javascript",
      "level": "Trình độ cơ bản",
      "priority": 30,
      "students_count": 49390,
      "deleted_at": null,
      "created_at": "2020-06-10T14:23:13.000000Z",
      "updated_at": "2021-11-18T10:46:12.000000Z",
      "thumbnail_cdn": "https://cdn.fullstack.edu.vn/f8-learning/courses/1.png"
    },
    {
      "id": 7,
      "title": "Kiến Thức Nhập Môn",
      "slug": "lessons-for-newbie",
      "description": "Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa này trước nhé.",
      "thumbnail": "courses/7.png",
      "content": null,
      "preview_origin": "youtube",
      "preview_youtube_id": "M62l1xA5Eu8",
      "preview_path": null,
      "language": null,
      "syntax_highligh": null,
      "level": "Trình độ cơ bản",
      "priority": 0,
      "students_count": 37178,
      "deleted_at": null,
      "created_at": "2020-02-10T14:23:13.000000Z",
      "updated_at": "2021-11-18T10:44:26.000000Z",
      "thumbnail_cdn": "https://cdn.fullstack.edu.vn/f8-learning/courses/7.png"
    },
    {
      "id": 3,
      "title": "Responsive Với Grid System",
      "slug": "responsive-web-design",
      "description": "Trong khóa này chúng ta sẽ học về cách xây dựng giao diện web responsive với Grid System, tương tự Bootstrap 4.",
      "thumbnail": "courses/3.png",
      "content": null,
      "preview_origin": "youtube",
      "preview_youtube_id": "uz5LIP85J5Y",
      "preview_path": null,
      "language": "html",
      "syntax_highligh": "language-html",
      "level": "Trình độ cơ bản",
      "priority": 20,
      "students_count": 15346,
      "deleted_at": null,
      "created_at": "2020-05-10T14:23:13.000000Z",
      "updated_at": "2021-11-18T10:11:09.000000Z",
      "thumbnail_cdn": "https://cdn.fullstack.edu.vn/f8-learning/courses/3.png"
    },
    {
      "id": 6,
      "title": "Node & ExpressJS",
      "slug": "nodejs",
      "description": "Học Back-end với Node & ExpressJS framework, hiểu các khái niệm khi làm Back-end và xây dựng RESTful API cho trang web.",
      "thumbnail": "courses/6.png",
      "content": null,
      "preview_origin": "youtube",
      "preview_youtube_id": "z2f7RHgvddc",
      "preview_path": null,
      "language": "javascript",
      "syntax_highligh": "language-javascript",
      "level": "Trình độ cơ bản",
      "priority": 32,
      "students_count": 13243,
      "deleted_at": null,
      "created_at": "2020-08-01T14:23:13.000000Z",
      "updated_at": "2021-11-18T10:41:55.000000Z",
      "thumbnail_cdn": "https://cdn.fullstack.edu.vn/f8-learning/courses/6.png"
    },
    {
      "id": 5,
      "title": "HTML, CSS Tips & Tricks",
      "slug": "html-css-tutorials",
      "description": "Tutorials về HTML, CSS, UI, UX sẽ được tổng hợp tại khóa học này, các video có nội dung ngắn gọn, súc tích giúp học viên có thể ứng dụng ngay vào thực tế",
      "thumbnail": "courses/5.png",
      "content": null,
      "preview_origin": "youtube",
      "preview_youtube_id": "nB6cJh_bb1U",
      "preview_path": null,
      "language": "html",
      "syntax_highligh": "language-html",
      "level": "Trình độ cơ bản",
      "priority": 40,
      "students_count": 9966,
      "deleted_at": null,
      "created_at": "2020-03-10T14:23:13.000000Z",
      "updated_at": "2021-11-18T10:44:24.000000Z",
      "thumbnail_cdn": "https://cdn.fullstack.edu.vn/f8-learning/courses/5.png"
    },
    {
      "id": 12,
      "title": "JavaScript Nâng Cao",
      "slug": "javascript-nang-cao",
      "description": "Hiểu sâu hơn về cách Javascript hoạt động, tìm hiểu về IIFE, closure, reference types, this keyword, bind, call, apply, prototype, ...",
      "thumbnail": "courses/12.png",
      "content": null,
      "preview_origin": "youtube",
      "preview_youtube_id": "MGhw6XliFgo",
      "preview_path": null,
      "language": "javascript",
      "syntax_highligh": "language-javascript",
      "level": "Trình độ nâng cao",
      "priority": 31,
      "students_count": 8332,
      "deleted_at": null,
      "created_at": "2021-04-03T14:23:13.000000Z",
      "updated_at": "2021-11-18T10:31:15.000000Z",
      "thumbnail_cdn": "https://cdn.fullstack.edu.vn/f8-learning/courses/12.png"
    },
    {
      "id": 13,
      "title": "ReactJS",
      "slug": "reactjs",
      "description": "Khóa học ReactJS từ cơ bản tới nâng cao, kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS. Cuối khóa học này bạn sẽ sở hữu một dự án giống Tiktok.com, bạn có thể tự tin đi xin việc khi nắm chắc các kiến thức được chia sẻ trong khóa học này.",
      "thumbnail": "courses/13/13.png",
      "content": null,
      "preview_origin": "youtube",
      "preview_youtube_id": "x0fSBAgBrOQ",
      "preview_path": null,
      "language": "javascript",
      "syntax_highligh": "language-jsx",
      "level": "Trình độ trung bình",
      "priority": 0,
      "students_count": 8277,
      "deleted_at": null,
      "created_at": null,
      "updated_at": "2021-11-18T10:33:15.000000Z",
      "thumbnail_cdn": "https://cdn.fullstack.edu.vn/f8-learning/courses/13/13.png"
    },
    {
      "id": 4,
      "title": "Don't Touch Your Face",
      "slug": "tool-canh-bao-so-len-mat",
      "description": "Xây dựng ứng dụng đưa ra cảnh báo khi người dùng sờ tay lên mặt. Chúng ta sẽ sử dụng thư viện ReactJS & Tensoflow để hoàn thiện ứng dụng này.",
      "thumbnail": "courses/4/4.jpeg",
      "content": null,
      "preview_origin": "youtube",
      "preview_youtube_id": "r6GWbQL-qwA",
      "preview_path": null,
      "language": "javascript",
      "syntax_highligh": "language-javascript",
      "level": "Trình độ cơ bản",
      "priority": 50,
      "students_count": 3624,
      "deleted_at": null,
      "created_at": "2020-01-10T14:23:13.000000Z",
      "updated_at": "2021-11-18T10:45:30.000000Z",
      "thumbnail_cdn": "https://cdn.fullstack.edu.vn/f8-learning/courses/4/4.jpeg"
    }
];

function Course(props){
    return (
        <div className = {props.id} style = {{fontSize: '20px'}}>
            <img src = {props.img} className = "image" />
            <h3 className = "title">{props.title}</h3>
            <p className = "description">{props.desc}</p>
        </div>
    )
}

function Application(){
    return (
        <React.Fragment>
            {courses.map((course) => 
                <Course 
                    img = {course.thumbnail_cdn}
                    id = {"course" + course.id}
                    title = {course.title}
                    desc = {course.description}
                    key = {course.id}
                />     
            )}
        </React.Fragment>
    )
}

ReactDOM.render(<Application />, document.querySelector('.root2'))