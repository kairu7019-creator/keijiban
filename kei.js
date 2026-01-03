const ul2 = document.getElementById('ul2');
const form = document.getElementById('form');
    const username = document.getElementById('username');
    const naiyo = document.getElementById('naiyo');
    

const data = JSON.parse(localStorage.getItem('keiji'));

if (data) {
    const li = document.createElement('li');

    li.innerHTML = `<span class="surename">${data.surename}</span>
    <span class="number">${data.number}.</span>
    <span class="name">${data.name}</span>
    <span class="time">${data.time}</span>
    <span class="id">id:${data.id}</span>
    <div class="text">${data.text}</div>
    `;
    ul2.appendChild(li);

   
    }//1の投稿



    

    // ページ読み込み時に保存済みデータを復元
    window.onload = function() {

always();
    };

    form.addEventListener('submit', function(event){
      event.preventDefault();
      if (ul2.children.length >= 10) {
    alert('このスレッドは10レスに達したため書き込めません');
    return;
  } //1000を超えると書き込めなくする
      
      
      
      save();
      honbun.value = ""; //送信した後に空にする
      always();
      add();
      
      
      
    });


    if (ul2.children.length >= 10) {
        alert('制限をこえました');
        document.getElementById('sub').disabled = false;

    }
    
    





function add(honbun = naiyo.value || document.querySelector('submit').disabled, name = username.value || "名無しさん", time = new Date().toLocaleString()) {
      const li = document.createElement('li');
      const number = ul.children.length + 2;

      li.innerHTML = `
        <span class="number">${number}.</span>
        <span class="name">${name}</span>
        <span class="time">${time}</span>
        <div class="text">${honbun}</div>
      `;


      ul2.appendChild(li);
    }

    function save() {
      const posts = []; //postsに保管する文字列を
      document.querySelectorAll('#ul2 li').forEach(li => {
        posts.push(li.innerHTML);
      });//li.innerHTMLをpostsの中に入れる
      localStorage.setItem('keiji', JSON.stringify(posts));//保存するpostsを
    }

    function load() {
      const data = JSON.parse(localStorage.getItem('keiji') || "[]");
      data.forEach(html => {
        const li = document.createElement('li');
        li.innerHTML = html;
        ul2.appendChild(li);
      });
    }

    function always() {
        if (ul2.children.length >= 10) {
    alert('このスレッドは10レスに達したため書き込めません');
    return;
  }
    }
