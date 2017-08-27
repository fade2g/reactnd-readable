import { combineReducers } from 'redux';
import {categories} from "../categories/reducers";
import {posts} from "../posts/posts.reducer";

export default combineReducers({categories, posts});
