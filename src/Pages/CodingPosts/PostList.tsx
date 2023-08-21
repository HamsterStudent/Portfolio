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
    
### impine
`;
