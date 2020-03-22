import createStore from './store/store.js';
import reducer from './reducer.js';

const btnAdd = document.getElementById('add');
const btnSub = document.getElementById('sub');
const btnAsync = document.getElementById('asyncAdd');
const counter = document.getElementById('counter');

const store = createStore(reducer);

btnAdd.addEventListener('click', ()=>{
    store.dispatch({type:"ADD"});
});

btnSub.addEventListener('click', ()=>{
    store.dispatch({type:"SUB"});
});

btnAsync.addEventListener('click', ()=>{
    setTimeout(() => store.dispatch({type:"ADD"}), 2000);
});

counter.textContent = store.getState();

store.subscribe(() => {
    counter.textContent = store.getState()
});