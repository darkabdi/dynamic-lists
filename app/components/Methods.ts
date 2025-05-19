import { API_URL } from "../config"


interface BulletPoint {
    content : string,
    date : object
    urgent : boolean
    _id: string
}
interface NewBulletPoint{
    content : string 
    urgent : boolean
}

// const Api_url = `http://10.34.24.100:3000/bullet-points`

export const fetchBulletPoints = async (): Promise<BulletPoint[]> =>{
    const response = await fetch(API_URL)
    return await response.json() 
    
}

export const deleteBP = async (_id:string) : Promise<void> =>{
    const response = await fetch(`${API_URL}/${_id}`,{
        method: "DELETE"
    })
}

export const AddBulletpoint = async (bullet : NewBulletPoint) : Promise<void> => {
        const response = await fetch(`${API_URL}/bullet-points`, {
            method: 'POST',
            headers: { 'Content-Type': 'Application/json'},
            body: JSON.stringify(bullet),
            
        })
}






export default {fetchBulletPoints , deleteBP , AddBulletpoint }

