const url = 'api/reply/comment'

export default ($axios) => ({
    getReply(id){
        return $axios.get(`${url}/${id}`)
    }
});