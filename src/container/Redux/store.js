import {configureStore} from '@reduxjs/toolkit' ;
import UserSlide from './Slices/UserSlide';
export const store = configureStore({
    reducer:UserSlide
})