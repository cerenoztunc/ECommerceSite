import axios from 'axios';

export const fetchProductList = async({ pageParam = 0 })=>{
    const {data} = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/product?page=${pageParam}`);

    return data;
};

export const fetchProduct = async(_id)=>{
    const {data} = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/product/${_id}`);

    return data;
};

export const fetchRegister = async(input) =>{
    const {data} = await axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/auth/register`, input);

    return data;
};