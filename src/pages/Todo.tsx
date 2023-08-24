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
