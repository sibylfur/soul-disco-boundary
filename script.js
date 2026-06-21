function collectForm(form){
  const data={};
  form.querySelectorAll('[name]').forEach(el=>{ data[el.name]=el.value.trim(); });
  return data;
}
function saveAndGo(key,url){
  const form=document.querySelector('form[data-form]');
  const data=collectForm(form);
  localStorage.setItem(key,JSON.stringify(data));
  window.location.href=url;
}
function getData(key){
  try{return JSON.parse(localStorage.getItem(key)||'{}')}catch(e){return {}}
}
function fillResults(key){
  const data=getData(key);
  document.querySelectorAll('[data-result]').forEach(el=>{
    const val=data[el.dataset.result];
    el.textContent=val || '尚未填寫';
    if(!val) el.classList.add('empty');
  });
}
function copyResult(){
  const page=document.querySelector('.print-page');
  const text=page? page.innerText : document.body.innerText;
  navigator.clipboard.writeText(text).then(()=>alert('已複製文字'));
}
function clearData(key,redirect){
  localStorage.removeItem(key);
  if(redirect) window.location.href=redirect;
}
