export const ADD=(item)=>{
    return{
        type:"ADD_CART",
        payload:item
    }
}

export const DLT=(id)=>{
    return{
        type:"RMV_CART",
        payload:id
    }
}

export const RMV=(item)=>{
    return{
        type:"RMV_ONE",
        payload:item
    }
}



// export { ADD , DLT};