const btn = document.querySelector('.btn')
const block = document.querySelector('.block')

const click = () => {
    const p = document.createElement('p')
    p.innerHTML = 'I was pressed!';
    block.appendChild(p)
};
const mouseover = () => {
    const p = document.createElement('p');
    p.innerHTML = 'Mouse on me!';
    block.appendChild(p)
};
const mouseout = () => {
    const p = document.createElement('p');
    p.innerHTML = 'Mouse is not on me!';
    block.appendChild(p)
};

btn.addEventListener('click', click);
btn.addEventListener('mouseover', mouseover);
btn.addEventListener('mouseout', mouseout);
