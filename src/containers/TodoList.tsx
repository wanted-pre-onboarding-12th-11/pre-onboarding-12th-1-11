//- 데이터 패칭, 이벤트 처리 등의 비즈니스 로직은 컨테이너가 담당한다.
//- UI 컴포넌트를 컨트롤하는 역할이다.

import {getTodos} from '../apis/TodoList';
import useAsync from '../hooks/useAsync';

const TodoListContainer = () => {
    const [state] = useAsync(() => getTodos());
    const {loading, data: todos, error} = state;

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!todos) return null;
    if (!todos.data.length) return <div>투두 리스트를 추가해 주세요.</div>;

    return (
        <>
            <h1>TodoList Container</h1>
        </>
    );
};

export default TodoListContainer;
