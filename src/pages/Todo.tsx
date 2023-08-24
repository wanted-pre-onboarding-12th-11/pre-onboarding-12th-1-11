// - 라우팅의 단위가 될 컴포넌트이다.
// - 단순 래핑의 역할과 SEO를 위한 메타태그 설정의 역할만 한다.
import MetaTag from '../components/SEO/MetaTag';
import TodoContainer from '../containers/TodoContainer';
import {TodoProvider} from '../contexts/TodoContext';

const TodoPage = () => {
    return (
        <div>
            <MetaTag title='투두리스트' description='11팀 투두리스트' />
            <TodoProvider>
                <TodoContainer />
            </TodoProvider>
        </div>
    );
};

export default TodoPage;
