const resouce = '/api/posts/'
export default ($axios) => ({
    get(){
        return $axios.get(`${resouce}`)
    },
    show(id){
        return $axios.get(`${resouce}/${$id}`)
    }
})