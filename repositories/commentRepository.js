const resouce = 'api/comment'
export default ($axios) => ({
    getComment (id) {
        return $axios.get(`${resouce}/${id}`)
    },
   postComment (payload) {
       return $axios.post(`${resouce}`, payload)
    },
    getSonComment(id){
        return $axios.get(`${resouce}/${id}`)
    } 
}); 