import main_menu from './main_menu/main_menu.js'
import main_display from './main_display/main_display.js'



export const load_mainBlock=()=>{

var main_block=document.createElement('main')
    main_block.className='main_block'

        main_block.appendChild(main_menu)
        main_block.appendChild(main_display)


    return main_block
}