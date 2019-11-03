import xService from './../../services/xService'

class Service extends xService{
    
    async load(){
        try{
            let responseJson = await fetch(`${ this.endpoint }load`, {
                method: 'GET',
                headers: { 
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' 
                } 
            });
            let response = await responseJson.json()
            return response;
        }catch(err){
            return false
        }
    }

}

export default Service;