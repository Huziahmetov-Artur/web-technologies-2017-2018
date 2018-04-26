import store from "../store/Store";

function setButton(e) {
    let b = e ? e.target.value : 'a',a=0;
    if(b === 'first' ){
        return {
            type : 'FIRST_BUTTON',
            content : a
        }
    }
    if(b === 'second'){
        return{
            type : 'SECOND_BUTTON',
            content : a
        }
    }
    if(b === 'third'){
        return{
            type : 'THIRD_BUTTON',
            content : a
        }
    }
}
function setContent(e) {
           let a = e ? e.target.value : '0';
           let b = store ? store.getState().tabReducer.currentTab : '0'

            if(b === 'first' ){
                return{
                        type : 'FIRST_BUTTON',
                        content : a
                }
            }
            if(b === 'second'){
                return{
                            type : 'SECOND_BUTTON',
                            content : a
                    }
                }
            if(b === 'third'){
                return{
                            type : 'THIRD_BUTTON',
                            content : a
                    }
                }
                else return {
               type : 'ERROR'
            }


}
function changeEdit(){
    return{
        type: 'CAN_EDIT'
    }
}
export {setButton,setContent,changeEdit};
