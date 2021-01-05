import { combineReducers } from 'redux';
import CategoryReducer from './category/category.reducer';
import AuthReducer from './auth/auth.reducer';
import ArticleReducer from './article/article.reducer';
import TagReducer from './tag/tag.reducer';

export default combineReducers({
    CategoryReducer,
    AuthReducer,
    ArticleReducer,
    TagReducer,
});
