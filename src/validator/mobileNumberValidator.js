const validatePhoneNumber = async (mobileNumber) => {
    console.log(mobileNumber);
    const apiKey = "152d73a8e349491782fda1e65f679d82";
    const apiUrl = `https://phonevalidation.abstractapi.com/v1/?api_key=${apiKey}&phone=${mobileNumber}`;

    try {
        const response = await fetch(apiUrl);
        const resData = await response.json();
        return resData;
        
    } catch (error) {
        return null;
    }
}

export default validatePhoneNumber;