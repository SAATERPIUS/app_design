

// const htmlBody = document.querySelector('body');
// const myfunction = function (){
// const myColors = ['green','blue','red','yello', 'black'];
//   const randomNum = Math.floor(Math.random() * myColors.length);
//   const connect = myColors[randomNum];
//   htmlBody.style.backgroundColor = connect;
// }
// htmlBody.onclick = myfunction;


// const parent = document.querySelector('.main-p');
// const pointOutElem = parent.children.item(1);
// const newp = document.createElement('p');
// newp.textContent = 'how happy are you being here';
// parent.insertBefore(newp, pointOutElem);

// const result = document.querySelector('ul');
// const bringResult = result.children.item(2);
// bringResult.textContent = 'i like all my animals';
// result.appendChild(document.createElement('li'));
// result.children.item(3).textContent = 'i can nor'
// const test = document.querySelector('.main-p');
// const how = test.children.item('1')
// how.textContent = 'if i ask you to do something you like to do the way you want';



// const justToKnow = document.querySelector('button');
// const myfunction = function (){
// const createImg = document.createElement('img');
// createImg.setAttribute('src', "https://unsplash-assets.imgix.net/marketing/awards/prizes/glass-trophy-v3.png?w=156&dpr=2&auto=format&fit=crop&q=60");
// const isImg = document.querySelector('img');
// if (isImg) {
//   justToKnow.innerHTML = '';
// }
// justToKnow.appendChild(createImg);
// }
// justToKnow.onclick = myfunction;

const buttonP = document.querySelector('button');
const functionality = function () {
  const random = Math.floor(Math.random() * 100);
  const note = 'all the time am here for you' + random;
  const newP = document.createElement('p');
  newP.textContent = note;
  buttonP.body.appendChild(newP);
}
buttonP.onclick = functionality;
