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


Hooks ->
1. UseState -> it manages the states of components
    jab button ek state se dusre state me jana chahti hain, to usko handle karne ke liye useState use hota hain
    example -> kisi button ka color change hona, naam 'samir' se 'shwetal' ho jana jab bhi use click kare
2. useEffect -> ek hook hai jo tumhe side effects run karne deta hai component ke andar.
    example - jaise API call karna, DOM ko manually handle karna
3. useRef -> it used to DOM elements ko directly access karne ke liye (without re-render) ye uska reference leta hain, Aisi value store karne ke liye jo change ho sakti hai, par UI update/re-render cause na kare
4. useContext -> global context ko handle karne ka kaam eska hain without props drilling
    jaise data ko C me jana hain A se, to vo pahile A -> B -> C jata tha, to hum kya kar rahe data ko global bana denge aur fir C usko directly use kar payenga with context, to us context ko handle karne ka kaam useContext bhai ka hain
5. useReducer -> ye complex state logic handle karne ke liye use hota hai
6. useMemo -> ye heavy calculations ko optimize karne ke liye use hota hai, taki har render pe same calculation dobara na chale.
7. useCallBack -> ye functions ko memoize karne ke liye use hota hai, taki har render pe naya function instance na bane.

Advanced ->
1. Synchronous -> code sequence wise run hogo
2. Asynchronous -> code parallel run hoga

localStorage -> ye hain browser ki memory samjhe

API ->
fetch -> 