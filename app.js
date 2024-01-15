const container = document.getElementById('react-container');

//Uncomment for progression 1
// ReactDOM.render("Hello! Welcome to React",container);

//Uncomment for progression 2
// const Container = () => {
//     return React.createElement('div' , null , 'Hey,kalvians! Welcome to react learning.', 
//     React.createElement('div', null , `let's rock and roll!`));
// }

// ReactDOM.render(React.createElement(Container),container);

//Uncomment for progression 3
// class ReactContainer extends React.Component{
//     render(){
//         return React.createElement(`div`,null,`Hey Kalvians`,
//         React.createElement(`div`,null,`Let's rock and roll with classes`)
//         );
//     }
// }
// ReactDOM.render(React.createElement(ReactContainer),container);

//Uncomment for progression 4
class ReactContainer extends React.Component{
    render(){
        return (
            <div>Hello! Welcome to Kalvium   
             <div>This is babel</div>
         </div>
        )
    }
}
ReactDOM.render(<ReactContainer />, container);
