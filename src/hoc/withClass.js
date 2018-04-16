import React, { Component } from "react";

// const withClass = (WrappendComponent, className) => {
//   return props => (
//     <div className={className}>
//       <WrappendComponent {...props} />
//     </div>
//   );
// };

const withClass = (WrappendComponent, className) => {
  return class extends Component {
    render() {
      return (
        <div className={className}>
          <WrappendComponent {...this.props} />
        </div>
      );
    }
  };
};
export default withClass;
