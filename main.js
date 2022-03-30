import {load_mainHeader} from './components/main_header/main_header.js'

import {load_mainBlock} from './components/main_block/main_block.js'

document.querySelector('#root').appendChild(load_mainHeader())

document.querySelector('#root').appendChild(load_mainBlock())

