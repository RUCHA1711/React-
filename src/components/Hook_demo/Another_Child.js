
const AnotherChild = ({ todos, sampleFunction }) => {
    return (
        <>
            <button type='button' onClick={sampleFunction}>Click Me</button>
            <h6>{todos}</h6>
        </>
    )
}
export default (AnotherChild)


/*
useState     - State management
useEffect    - component lifecycle
useCallback  - optimization
useMemo      - optimization
useRef       - Reference (JS to HTML)

Password Generation
- Numbers 
- String
- Default length
- randomPasswordGenerator method

-> 1 -> password UI

--------------------------
a%c%e12y                   | Copy |
--------------------------
------- 8 || Numbers || Characters (#$^&*^#@())

-> window clipboard (password)
-> passref.focus()

1)
password, setPassword = ""
length, setLength = 8
numberAllowed, setNumberAllowed = False
charAllowed, setCharAllowed = False

8, false, false -> method - excute
8, false, false -> method (exeucte)
2) randomPasswordGenerator(length, numberAllowed, setCharAllowed), useEffect - [length, numberAllowed, setCharAllowed]
    -> setPassword(randompwd)


function rPG(){

}

useEffect(
rPG()
, [])
-> Infinite loop
*/