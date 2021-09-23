import React, {useState, useRef, useCallback} from 'react';
import TodoTemplate from "./TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
// import CssModule from "./CSSModule";
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

    const [todos, setTodos] = useState([
        {
            id: 1,
            text: '리액트의 기초 알아보기',
            checked: true,
        },
        {
            id: 2,
            text: '컴포넌트 스타일링해 보기',
            checked: true,
        },
        {
            id: 3,
            text: '일정 관리 앱 만들어 보기',
            checked: false,
        },
    ]);

    const nextId = useRef(4);

    const onInsert = useCallback(text => {
        const todo = {
            id: nextId.current,
            text,
            checked: false
        };
        setTodos(todos.concat(todo));
    }, [todos]);

    const onRemove = useCallback(id => {
        setTodos(todos.filter(todo => todo.id !== id));
    }, [todos]);

    const onToggle = useCallback(id => {
            setTodos(
                todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo,),
            );
        }, [todos]
    );
    // const [visible, setVisible] = useState(false);
    return (
        <div>
            <TodoTemplate><TodoInsert onInsert={onInsert}/><TodoList todos={todos} onToggle={onToggle} onRemove={onRemove}/></TodoTemplate>
            {/*<CssModule />*/}
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
