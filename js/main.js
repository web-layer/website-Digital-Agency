
let down = document.getElementById('down')
let dropdown = document.querySelector('.drop')
let toggleBtn = document.querySelector('.toggle_btn')
let active = document.querySelector('.icon-opacity')
let navtog = document.getElementById('nav_tog')
let header = document.querySelector('.header')
let image = document.querySelectorAll('.image-creative img')

let boxmodle = document.querySelector('.box-modle')

down.onclick =  function dropdownfun(e) {
e.stopPropagation();
      dropdown.classList.toggle('openNav');
};


dropdown.onclick = function (e) {
	e.stopPropagation();
};


document.addEventListener('click', function (e) {
        if (dropdown.classList.contains('openNav')) {
        	      dropdown.classList.toggle('openNav');
        	    
        };
});


//create class toggle opne navber
   
toggleBtn.onclick = function (e) {
 	       	e.stopPropagation()
       this.classList.toggle('open')
        active.classList.toggle('opacity')
        navtog.classList.toggle('show')

};



        document.addEventListener('click', function (e) {
        	  if (e.target !== toggleBtn && e.target !== navtog) {
        	  	       
                     if ( navtog.classList.contains('show') ) {
                            
              toggleBtn.classList.toggle('open')
  active.classList.toggle('opacity')
        navtog.classList.toggle('show')
                     }
        	  	      
        	  };

        })
       	



navtog.onclick = function (e) {
 	       	e.stopPropagation()

}



image.forEach(function add(img) {

	img.addEventListener('click', function (e) {
		//create Element 
		let creatediv = document.createElement('div');
		creatediv.className = "overlayBody";
        document.body.appendChild(creatediv)


        let createpopup = document.createElement('div') 
        createpopup.className = "popup"
        document.body.appendChild(createpopup)



         let createimg = document.createElement("img")
         createimg.src = img.src
         createpopup.appendChild(createimg)
          
        let createclose = document.createElement('span')
        let iconclose = document.createTextNode('x')
        createclose.className = 'close'
        createclose.appendChild(iconclose)
        createpopup.appendChild(createclose)

	})

})



document.addEventListener('click', function (e) {
	if (e.target.classList.contains("close")) {
		e.target.parentNode.remove()
		document.querySelector('.overlayBody').remove()
	}
})


window.onscroll = function (argument) {
     
         if (window.scrollY >= 200) {
         header.classList.add('scroll')
         	 
//boxmodle.classList.add('rotete')

         }else{
         	header.classList.remove('scroll')

         	   
         }
}
