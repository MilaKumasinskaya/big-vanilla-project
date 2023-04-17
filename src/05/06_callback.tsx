import React, {ChangeEvent, MouseEvent} from 'react'

export const User = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {

        alert('user has been deleted')
    }
    const saveUser = () => {

        alert('user has been saved')
    }
    const onNameChanged = () => {
        console.log('name changed')
    }
    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('age changed: '+ event.currentTarget.value)
    }
    const focusLostHandler = () => {
        console.log('focus lost')
    }

    return <div><textarea onChange={onNameChanged} onBlur={focusLostHandler}>Dimych</textarea>
        <input onChange={onAgeChanged} type={'number'}/>
        <button onClick={deleteUser}>delete</button>
        <button onClick={saveUser}>save</button>
    </div>
}