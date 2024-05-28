import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/reducers';

interface Props {
    children?: ReactNode;
}

const ReduxProvider = ({ children }:Props) => (
        <Provider store={store}>
            {children}
        </Provider>
);

export default ReduxProvider;
