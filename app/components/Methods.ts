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
export const fetchBulletPoints = async (): Promise<BulletPoint[]> =>{
    const response = await fetch('http://localhost:3000/bullet-points')
    return await response.json() 
}

export const deleteBP = async (_id:string) : Promise<void> =>{
    const response = await fetch(`http://localhost:3000/bullet-points/${_id}`,{
        method: "DELETE"
    })
}

export const AddBulletpoint = async (bullet : NewBulletPoint) : Promise<void> => {
        const response = await fetch('http://localhost:3000/bullet-points', {
            method: 'POST',
            headers: { 'Content-Type': 'Application/json'},
            body: JSON.stringify(bullet),
            
        })
}






export default {fetchBulletPoints , deleteBP , AddBulletpoint }

