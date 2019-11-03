import xService from './../../services/xService'

class Service extends xService{
    
    async login(params){
        try{
            let responseJson = await fetch(`${ this.endpoint }login`, {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' 
                },
                body: this.parsePayload(params)
            });
            let response = await responseJson.json()
            return response;
        }catch(err){
            return false
        }
    }

}

export default Service;