//这里把components文件夹下的组件全部导出，在使用的时候就可以用 import {List, HelloWorld} from '@/components' 这种方式一次导入多个组件。

export {default as List} from '../components/List'
export {default as HelloWorld} from '../components/HelloWorld'
export {default as Form} from '../components/Form'