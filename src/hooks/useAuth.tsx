import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {AxiosResponse} from 'axios';

interface UseAuthProps {
    api: (email: string, password: string) => Promise<AxiosResponse<any, any> | undefined>;
    navigation: string;
}

const useAuth = ({api, navigation}: UseAuthProps) => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: {value: '', validator: (value: string) => value.includes('@'), isValid: false},
        password: {value: '', validator: (value: string) => value.length >= 8, isValid: false},
    });

    const [isSignValid, setIsSignValid] = useState(false);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {id, value} = e.target;

        if (id === 'email' || id === 'password') {
            setForm({
                ...form,
                [id]: {...form[id], value, isValid: form[id].validator(value)},
            });
        }
    };

    const onSubmit = async () => {
        console.info('submit');

        const {
            email: {value: email},
            password: {value: password},
        } = form;
        try {
            await api(email, password);
            navigate(navigation);
        } catch {
            alert('실패');
        }
    };

    useEffect(() => {
        setIsSignValid(Object.values(form).every(el => el.isValid));
    }, [form]);

    return {form, onChange, onSubmit, isSignValid};
};

export default useAuth;
