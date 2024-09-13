import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootStateType } from '@/types/reduxType';

const useTypedSelector: TypedUseSelectorHook<RootStateType> = useSelector;

export default useTypedSelector;
