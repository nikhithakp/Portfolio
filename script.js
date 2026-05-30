<<<<<<< HEAD
=======
// Smooth Scroll Effect

>>>>>>> 8facabd05b6d902d728c00af004a778d75ba0f00
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

<<<<<<< HEAD
        const target = document.querySelector(
            this.getAttribute('href')
        );

        if(target){
            target.scrollIntoView({
                behavior:'smooth'
            });
        }
=======
        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({
                behavior: 'smooth'
            });
>>>>>>> 8facabd05b6d902d728c00af004a778d75ba0f00

    });

});