
export const fetchGss = async (sheetName) => {
    let deployId = process.env.NEXT_PUBLIC_APP_SCRIPT_KEY
    let token = process.env.NEXT_PUBLIC_APP_SCRIPT_SECRET_TOKEN
    if(!deployId || !token){
        // error
        return
    }
    const path = `https://script.google.com/macros/s/${deployId}/exec?sheetName=${sheetName}&token=${token}`;

    const res = await fetch(path);
    return await res.json();
};
