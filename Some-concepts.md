#### Props

- props refers to the properties being passed into a component in order for it to work properly. A componeny receiving props is not allowed to modify those props. (they are immutable)

### State 

- State refers to values that are managed by the component, similar to variables declared inside a function.

### useState()

- Is a method in React in order to update state. React doesn't watch when variables change, therefore, we need to update it.

```
export default function App() {
    const result = React.useState("Yes") // value passed inside () is default value
    // => ["Yes", f()]
    return(
        <h1>{result[0]}</h1> 
    )
}
```

#### useSate in Array

- If you need old value/ initial value of the state to determine a new value that is updated in State, you should use a callback function.

```
setCount(prevCount => prevCount + 1)
```

## Passing data to components

- tobe able to share same data between 2 custom components, you need to move shared state 1 level 

![passing data to components](./public/img/data%20in%20components.png)

```
//in App() (grandparent component)
function App() {
    <header >
       <Nav user="Joe"/>
       <Body user="Joe"/>
    </header>
}

//in Nav
function Nav(props) {
    <nav user={props.user}>

    </nav>

    //in Body
function Nav(props) {
    <body user={props.user}>

    </body>
}

```

**Rule of thumb: keep state closely tight to component/components that need it**

