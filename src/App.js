import React from 'react';
import CssModule from "./CSSModule";
// import SassComponent from "./SassComponent";
// import Info from "./Info";
// import Average from "./Average";
// import Counter from "./Counter";
// import ErrorBoundary from "./ErrorBoundary";

// function getRandomColor() {
//     return '#' + Math.floor(Math.random() * 16777215).toString((16));
// }

// class App extends Component {

    // state = {
    //     color: '#000000'
    // }

    // handleClick = () => {
    //     this.setState({
    //         color: getRandomColor()
    //     });
    // }

    // render() {
    //     return (
    //         <>
// <button onClick={this.handleClick}>랜덤색상</button>*/}
            // <ErrorBoundary>
            //     <Info />
                // <LifeCycleSample color={this.state.color} />*/}
            // </ErrorBoundary>
            // </>
            // <div>
            //     <ScrollBox ref={(ref) => this.scrollBox=ref}/>
            //     <button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>
            // </div>
        // );
    // }
// }

// export default App;


const App = () => {
                // const [visible, setVisible] = useState(false);
    return (
        <div>
            <CssModule />
            {/*<SassComponent />*/}
            {/*<Info />*/}
            {/*<Counter />*/}
            {/*<button onClick={() => {*/}
            {/*    setVisible(!visible);*/}
            {/*}}>{visible ? '숨기기' : '보이기'}</button>*/}
            {/*<hr />*/}
            {/*{visible && <Info />}*/}
        </div>
    );
};

export default App;
