const ls = window.localStorage
const containerDark = document.getElementById('toggle')

if(ls.getItem('darkMode')){
    document.body.classList.add('dark')
    containerDark.classList.add('bxs-sun')
}else{
    document.body.classList.remove('dark')
    containerDark.classList.add('bxs-moon')
}

function darkMode(){
    containerDark.addEventListener('click',function(event){

            document.body.classList.toggle('dark')

            if(document.body.classList.contains('dark')){
                ls.setItem('darkMode','dark')
                containerDark.classList.add('bxs-sun')
                containerDark.classList.remove('bxs-moon')
            }else{
                ls.removeItem('darkMode')
                containerDark.classList.add('bxs-moon')
                containerDark.classList.remove('bxs-sun')
                
            }
    })
}

export default darkMode