// Here's a simple component
function SimpleComponent(props) {
    console.log('hii')
    return <div>{props.message}</div>;
}
// And here's a higher-order component
function withExtraProp(WrappedComponent) {
    console.log("hello")
    return function EnhancedComponent(props) {
        return <WrappedComponent {...props} extraProp="I'm an extra prop!" />;
    };
}

// You can then create an enhanced version of SimpleComponent
const EnhancedComponent = withExtraProp(SimpleComponent);

// EnhancedComponent will have an extra prop
<EnhancedComponent message="Hello world" />; // Renders: <div>Hello world. I'm an extra prop!</div>
console.log('message')
export default SimpleComponent;