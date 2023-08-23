// - 라우팅의 단위가 될 컴포넌트이다.
// - 단순 래핑의 역할과 SEO를 위한 메타태그 설정의 역할만 한다.
import TodoListContainer from '../containers/TodoList';
import {TodoProvider} from '../contexts/TodoList';

const TodoListPage = () => {
    return (
        <>
            <TodoProvider>
                <TodoListContainer />
            </TodoProvider>
        </>
    );
};

export default TodoListPage;
