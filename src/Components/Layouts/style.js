const home = document.getElementById('HomeLink')
const course = document.getElementById("CourseLink")
const blog = document.getElementById("BlogLink")
const contact = document.getElementById('ContactLink')
const about = document.getElementById('AboutLink')

// home.addEventListener('click', () => {
//     home.classList.add('active');

//     course.classList.remove('active');
//     blog.classList.remove('active');
//     about.classList.remove('active');
//     contact.classList.remove('active');
// })
// course.addEventListener('click', () => {
//     course.class.add('active')

//     home.classList.remove('active');
//     blog.classList.remove('active');
//     about.classList.remove('active');
//     contact.classList.remove('active');
// })
// blog.addEventListener('click', () => {
//     blog.classList.add('active')

//     home.classList.remove('active');
//     course.classList.remove('active');
//     about.classList.remove('active');
//     contact.classList.remove('active');
// })
// contact.addEventListener('click', () => {
//     contact.classList.add('active')

//     home.classList.remove('active');
//     course.classList.remove('active');
//     blog.classList.remove('active');
//     about.classList.remove('active');
// })
// about.addEventListener('click', () => {
//     about.classList.add('active')

//     blog.classList.remove('active');
//     about.classList.remove('active');
//     contact.classList.remove('active');
// })

function HomeLink(){
    home.classList.add('active');

    course.classList.remove('active');
    blog.classList.remove('active');
    about.classList.remove('active');
    contact.classList.remove('active');
}

function CourseLink(){
    course.class.add('active')

    home.classList.remove('active');
    blog.classList.remove('active');
    about.classList.remove('active');
    contact.classList.remove('active');
}

function BlogLink(){
    blog.classList.add('active')

    home.classList.remove('active');
    course.classList.remove('active');
    about.classList.remove('active');
    contact.classList.remove('active');
}

function AboutLink(){
    about.classList.add('active')

    home.classList.remove('active');
    course.classList.remove('active');
    blog.classList.remove('active');
    contact.classList.remove('active');
}

function ContactLink(){
    contact.classList.add('active')

    home.classList.remove('active');
    course.classList.remove('active');
    blog.classList.remove('active');
    about.classList.remove('active');
}
// ActiveLink();
export {
    HomeLink,
    CourseLink,
    BlogLink,
    AboutLink,
    ContactLink,
};