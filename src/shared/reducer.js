import {combineReducers} from 'redux';
import {categories} from "../categories/reducers";
import {posts} from "../postsContainer/postscontainer.reducer"
import {post} from "../postContainer/postcontainer.reducer";
import {comments} from "../commentsContainer/commentscontainer.reducer";

export default combineReducers({categories, posts, comments, post});
