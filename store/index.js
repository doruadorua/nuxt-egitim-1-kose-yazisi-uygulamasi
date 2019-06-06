import Vuex from 'vuex'
import axios from 'axios';

const createStore = () => {
    return new Vuex.Store({
        state:{
            fetchedPosts: []
        },
        getters:{
            getPosts(state){
                return state.fetchedPosts
            }
        },
        mutations:{
            setPosts(state, posts){
                state.fetchedPosts = posts
            },
            addPost(state, post){
                state.fetchedPosts.push(post)
            },
            updatePost(state, post){
                let postIndex = state.fetchedPosts.findIndex(item => item.id == post.id)
                if (postIndex){
                    state.fetchedPosts[postIndex] = post
                }
            }
        },
        actions:{
            nuxtServerInit(vuexContext, context){
                return axios.get('https://kose-yazilar-nuxt.firebaseio.com/posts.json')
                .then(res => {
                    let data = res.data
                    let postArray = []
                    for(let key in data){
                        postArray.push({ ...data[key], id: key })
                    }
                    vuexContext.commit('setPosts', postArray)
                })
            },
            addPost(vuexContext, post){
                return axios.post('https://kose-yazilar-nuxt.firebaseio.com/posts.json', post)
                .then(res => {
                    vuexContext.commit('addPost', {...post, id: res.data.name})
                })
            },
            updatePost(vuexContext, post){
                return axios.put('https://kose-yazilar-nuxt.firebaseio.com/posts/' + post.id + '.json', post)
                .then(res => {
                    vuexContext.commit('updatePost', post)
                })
            }
        }
    })
}

export default createStore