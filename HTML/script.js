document.querySelectorAll('[ms-folder]').forEach(folder =>{
    folder.onclick = function(f) {
        const ul = folder.nextElementSibling
        const resultado = ul.style.display
        ul.style.display = resultado === 'none' ? 'block' : 'none'
    }
})