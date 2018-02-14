import React from 'react';

//funtion which takes some configuration (withclass is not a functional component)
const withClass = (WrappedComponent, className) => {
  //return a functional component 
  return (props) => (
    <div className={className}>
      <WrappedComponent {...props}/>
    </div>
  )
  //can even return a stateful component
  // return class extends Component {
  //   render() {
  //     return (
  //       <div className={className}>
  //         <WrappedComponent {...props}/>
  //       </div>
  //     )
  //   }
  // }
}

export default withClass;