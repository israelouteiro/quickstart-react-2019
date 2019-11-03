class xService {
    
    endpoint = 'http://localhost/'
    storageKey = 'x-project'

    parsePayload(_payload){
		return Object.keys(_payload).map(key=>{
			return `${ encodeURIComponent(key) }=${ encodeURIComponent(_payload[key]) }`
		}).join('&')
    }

    saveObject(key, value){
        return this.saveStorage(key, JSON.stringify(value))
    }

    readObject(key){
        return JSON.parse(this.readStorage(key))
    }

    saveStorage(key, value){
        try {
            return localStorage.setItem(`${ this.storageKey }::${ key }`, value);
        } catch (e) {
            return sessionStorage.setItem(`${ this.storageKey }::${ key }`, value);
        }
    } 

    readStorage(key){
        try {
            return localStorage.getItem(`${ this.storageKey }::${ key }`); 
        } catch (e) {
            return sessionStorage.getItem(`${ this.storageKey }::${ key }`);
        }
    }

}

export default xService