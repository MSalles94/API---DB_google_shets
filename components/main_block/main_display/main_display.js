


const main_display =()=>{

    var main_display=document.createElement('section')

        var display_Header=document.createElement('header')
            main_display.appendChild(display_Header)
            
            var display_title = document.createElement('h2')
                main_display.appendChild(display_title)
                display_title.innerText='TOPIC TITLE'

            var display_description = document.createElement('p')
                main_display.appendChild(display_description) 


    return main_display


}

export default main_display()