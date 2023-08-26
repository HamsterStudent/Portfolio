export const Hamster = `
~~~tsx
// 가격 공개 예정 & 가격 제거하기
function clearSoldout(){
  const EACH_PRODUCT = document.querySelectorAll('.prdList_box')
  const ITEM_GRID_PRICE = document.querySelectorAll('.prdList .description .price')

  for(const item of EACH_PRODUCT){
    const PRICE = item.querySelector('.information .price');
    const ICON = item.querySelector('.information .icon');

    if(PRICE.innerText == '10원'){
        PRICE.innerText = '공개 예정';
        ICON.style.display = 'none';
    }else if (PRICE.innerText == '30원') {
      PRICE.innerText = '';
    }else if (PRICE.innerText == '공개 예정') {
      PRICE.innerText = '공개 예정';
      ICON.style.display = 'none';
    };
  };
  console.log('clearSoldout');
}
~~~
`;

export const Cute = `
## reduce

배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);

~~~tsx
const oneTwoThree = [1, 2, 3];

result = oneTwoThree.reduce((acc, cur, i) => {
	console.log(acc, cur, i);
	return acc + cur;
}, 0);
// 0 1 0
// 1 2 1
// 3 3 2
result 6
~~~

초깃값을 적어주지 않으면 초깃값이 자동으로 0번째 인덱스의 값이 된다.

ex) acc → 1 cur → 2 index → 1

## reduceRight

~~~tsx
result = oneTwoThree.reduceRight((acc, cur, i) => {
	console.log(acc, cur, i);
	return acc + cur;
}, 0);
// 0 3 2
// 3 2 1
// 5 1 0
result 6
~~~

reduce와 같지만, 오른쪽에서부터 왼쪽으로 순회한다. ( 끝에서 처음으로)

## 응용

~~~tsx
result = oneTwoThree.reduce((acc, cur) => {
	acc.push(cur % 2 ? '홀수' : '짝수');
	return acc;
}, [])
// ['홀수','짝수','홀수']
~~~

초깃값을 배열로 만들고, 배열에 값들을 push하면 map과 같아짐.

~~~tsx
result = oneTwoThree.reduce((acc, cur) => {
	if (cur % 2) acc.push(cur);
	return acc;
}, []);
// [1,3]
~~~

reduce를 이용한 filter 구현

~~~tsx
const promiseFactory = (time) => {
	return new Promise((resolve, reject) => {
		console.log(time);
		setTimeout(resolve, time);
	});
};
[1000,2000,3000,4000].reduce((acc, cur) => {
	return acc.then(() => promiseFactory(cur));
}, Promise.resolve());
~~~
`;
