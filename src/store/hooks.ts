import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from './types'

type UseAppDispatchType = () => AppDispatch
type UseAppSelectorType = TypedUseSelectorHook<RootState>

const useAppDispatch: UseAppDispatchType = useDispatch
const useAppSelector: UseAppSelectorType = useSelector

export { useAppDispatch, useAppSelector }
