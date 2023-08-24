// - 라우팅의 단위가 될 컴포넌트이다.
// - 단순 래핑의 역할과 SEO를 위한 메타태그 설정의 역할만 한다.
import TodoContainer from '../containers/Todo';
import {TodoProvider} from '../contexts/Todo';

const TodoPage = () => {
    return (
        <>
            <TodoProvider>
                <TodoContainer />
            </TodoProvider>
        </>
    );
};

export default TodoPage;
