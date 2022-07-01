

class DTO {
    getPersonas(obj){
        let res = [];
        if(obj.length > 0 ){
            obj.forEach(e => {
                res.push({
                    name:e.name,
                    lastname:e.lastname,
                    dni: ''
                })
            });
        }
        return res;
    }
}



module.exports = new DTO();