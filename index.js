
let c1 = document.getElementById('c1');
let c2 = document.getElementById('c2');
let c3 = document.getElementById('c3');




const cloumns = {
    c1: [3, 2, 1],
    c2: [],
    c3: []
}

const minWidth = 60;
const stepWidth = 40;

function render() {
    createDom(cloumns.c1, c1);
    createDom(cloumns.c2, c2);
    createDom(cloumns.c3, c3);

    function createDom(arr, dom) {
        dom.innerHTML = '';
        for (let i = 0; i < arr.length; i++) {
            const n = arr[i];
            const div = document.createElement('div');
            div.style.width = minWidth + (n - 1) * stepWidth + 'px';
            dom.appendChild(div);
        }
    }
}
render();

let btns = document.querySelectorAll('button');

let success = document.getElementsByClassName('success')[0];

for (let i = 0; i < btns.length; i++) {
        btns[i].onclick = () => {
            var from = cloumns[btns[i].dataset.from];
            var to = cloumns[btns[i].dataset.to];
            move(from, to);
        }
    
        
  
}

function move(from, to) {
    if (from.length === 0) {
        return;
    }
    if (to.length === 0) {
        to.push(from.pop());
        render();
    }
    else{
        check(from, to);
    }

}

function check(from, to){
    const fromLast = from[from.length - 1];
    const toLast = to[to.length - 1];
    if(fromLast < toLast){
        to.push(from.pop());
        render();
    }else{
        return;
    }

    if(cloumns.c1.length === 0 && cloumns.c2.length === 0){
        success.style.opacity = 1;
        for(let i = 0; i < btns.length; i++){
            btns[i].style.opacity = 0;
        }
    }
}