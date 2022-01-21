const HiddebBtn = document.querySelector(".navHiddenBtn");
        const outPut = document.querySelector(".child1");

        let counter = 0;

        const  hiddenFun = () => {
            if(counter===0) {
                outPut.style.display = 'block';
                counter = 1
            }else{
                outPut.style.display = 'none';
                counter = 0;
            }
        }
        HiddebBtn.addEventListener("click",hiddenFun);