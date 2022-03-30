

export const load_mainHeader=()=>{

    var header = document.createElement('header')
        header.className='mainHeader'

        var title = document.createElement('h1')
            header.appendChild(title)
            title.textContent='FÓRUM'


    return header
}