import { createStore } from 'vuex';
import { itemModule } from './itemModule';

export default createStore({
    modules:{
        item: itemModule
    }
});
