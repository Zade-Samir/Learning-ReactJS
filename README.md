Libraries -> means which do some specific work like ReactJs, Lenis, GSAP

Framework -> means you got everything inbuild like home
example - angular, nextJS

export are of two types -> default and name
default : sending only one thing, it can be change with anything
ex - 
    app.js ->
    const a = 4
    export default a

    script.js ->
    import new_a from './app.js' //import can be anything
    console.log(a);

name : directly export the variable, but while importing you don't have choice to change with another name, while import it must be into {brackets}
ex -
    app.js ->
    export const name = "Samir"

    script.js ->
    import { name } from './app.js'; 
    console.log(name);

#Real Dom -> Actual DOM which is tree like structure
when user click and on one button and we want that to be reload every time, but problem is when it start to reload it leads to loading of other buttons too, which we don't want to happen
![alt text](image.png)
Virtual DOM -> copy of real DOM
when we try to make changes into one button, what it do, change that into copy of DOM and compare that with real DOM and result leads to changes into original real dom

JSX (Javascript XML) -> javascript + HTML
writing the html inside the javascript 


index.html -> main
main.jsx -> child of index.html
app.jsx -> child of main.jsx
