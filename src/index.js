import './style.css';
import listInput from './modules/listInput';

const listView=document.querySelector('.list');

const Tasks=[
    {
        index: 1,
        description: 'Buy newspaper',
        completed: false,
    },
    {
        index: 2,
        description: 'Buy milk',
        completed: false,
    },
    {
        index: 3,
        description: 'Buy eggs',
        completed: false,
    },
  ]; 

  listInput(listView,Tasks);


