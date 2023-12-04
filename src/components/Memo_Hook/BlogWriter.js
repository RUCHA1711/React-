import React, { useMemo, useState } from "react";

const calculateTextStats = (text) => {
    // console.log("calculateTextStats called");

    const words = text.trim().length > 0 ? text.trim().split(/\s+/) : [];
    const characters = text.replace(/\s+/g, "").length;

    return {
        wordCount: words.length,
        characterCount: characters,
    };
};

const Layout =  (Comp) => {
  usestate => data

  useffect => setdata
    <div style={{color: "red"}}>
        <c data={data} />
    </div>
}

<>
<Layout left="red" center="rfrf" rught="save">
   vvjfdnvfjnvfjkvnfkv
   hvbfv
   {ischeck && <>vjnvkfnv</>}
</Layout>
</>
if("debfej") {

}
<Layout text ischeck/>
0

<h1>{isgoal ? "goal!" : ""}</h1>

{isgoal === "hit" ? <h1>goal</h1> : null}

{isgoal?.length ? <h1>goal</h1> : null }

const arr = [{result: "missed"}, {result: "hit"}, {result: "missed"}]
arr.filter(val => val?.result === "missed").map((el, index) =><Goal key={index} isgoal={el?.result === "hit"}></Goal> )

<React.Fragment key={index}>
    <h1>Goal result:</h1>
    <Goal/>
</React.Fragment>

const obj ={
    name: "eded",
    
}

arr?.[2] || ""

arr && arr.length > 0 && arr[2] || ""

obj?.address?.city || ""

obj && obj.adress && obj.adress.city || ""

val => {
    return val?.result === "missed"
}

const arr = [1,2,3,4]
const [num1,...num2] =[1,2,3,4],

const cloneed = arr
cloneed.push(6);
arr = cloneed


const BlogWriter = ({1,23,4,5,6, ...rest}) => {
    const [body, setBody] = useState("");
    const [title, setTitle] = useState("");

    const stats = useMemo(() => {
        return calculateTextStats(body);
    }, [body]);

    return (
        <div>
            <input
                style={{ marginBottom: "10px" }}
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Post title"
            />
            <br />
            <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Post Body"
            />
            <div>
                <p>Word count: {stats.wordCount}</p>
                <p>Character count: {stats.characterCount}</p>
            </div>
        </div>
    );
};

const App = ({data}) => {
loadin, data, fetched

    loading -> true

    useffect -> api call -> data -> this.state.
    fetched -> true
    loadin -> false
const total = useMemo(() => {
    logic..../10
},[state1])
    const getTotal = useCallback((sub) => {
state1/sub
    },[state1])

    getTotal();

    if(isloading){ return loader...}
    if(!loading && fetched ) {
        return "data fetched successfully"
    }
    return (
        <div style={{ margin: "20px" }}>
            <h1>Create Post</h1>
            <BlogWriter total getTotal />
        </div>
    );
};

export default Layout(App);G