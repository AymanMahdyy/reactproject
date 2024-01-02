import { createSlice } from "@reduxjs/toolkit";

const cartstate={
    cart:[]
}
export const cartslice=createSlice({
    name: 'cart',
    initialState:cartstate,
    reducers:{
        addtocart:(state , action)=>{
            // console.log(action.payload);
            // let H = 0;
            // state.cart=state.cart.map( el =>{
            //     if(el.id === action.payload.id ){
            //         console.log(el);
            //         H=1
            //         if(el.count){
            //             el.count +=1
                    
            //         }
            //         else{
            //             el.count=1
            //         }
            //             console.log(el);
                    
            //     }
            //     return el
            // })
            // if (!H){
            //     state.cart.push(action.payload)

            // }

            state.cart.push(action.payload)
        },
        removefromcart:(state , action)=>{
            // state.cart.splice(0,1,action.payload)
            // console.log(action.payload)
            state.cart=state.cart.filter(value =>(
                value.id !==action.payload.id
            ))
        }
    }
})

