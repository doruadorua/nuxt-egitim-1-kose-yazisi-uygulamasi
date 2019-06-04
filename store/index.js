import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state:{
            fetchedPosts: []
        },
        getters:{
            getPosts(state){
                return state.fetchedPosts
            },
            getSinglePost(state, id){
                for(p in state.fetchedPosts){
                    if(p.id == id){
                        return state.fetchedPosts[p]
                    }
                }
            }
        },
        mutations:{
            setPosts(state, posts){
                state.fetchedPosts = posts
            }
        },
        actions:{
            nuxtServerInit(vuexContext, context){
                vuexContext.commit('setPosts', 
                    [
                        {id: 1, title: 'baslik #1', subtitle: 'subtitle #1', text: 'text #1', author: 'doruadorua'}, 
                        {id: 2, title: 'baslik #2', subtitle: 'subtitle #2', text: 'text #2', author: 'doruadorua'},
                        {id: 3, title: 'falan', subtitle: 'filan', text: 'inter milan', author: 'doruadorua'}
                    ])
            }
        }
    })
}

export default createStore