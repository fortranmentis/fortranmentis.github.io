'use strict';
const filters=document.querySelector('.filters');
const cards=[...document.querySelectorAll('.project[data-category]')];
const count=document.querySelector('.result-count');
if(filters&&count){
  filters.hidden=false;
  function show(category){
    let total=0;
    cards.forEach(card=>{card.hidden=category!=='all'&&card.dataset.category!==category;if(!card.hidden)total++;});
    filters.querySelectorAll('button').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.filter===category)));
    count.textContent=`${total} ${count.dataset.countLabel}`;
  }
  filters.addEventListener('click',event=>{const button=event.target.closest('button[data-filter]');if(button)show(button.dataset.filter);});
  show('all');
}
