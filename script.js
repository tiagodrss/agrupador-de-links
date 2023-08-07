function toggleMode(){

    const html = document.documentElement   // Cria uma variável para apontar a tag HTML
    html.classList.toggle('light')
    

    /*if(html.classList.contains('light')){   
        html.classList.remove('light')
    }else{
        html.classList.add('light')
    }*/


    const img = document.querySelector("#profile img") // busca e atribui a img a imagem em profile

    if(html.classList.contains('light')){
        img.setAttribute('src', './assets/avatar-light.png')              // Ajustar ou modificar um atributo, neste caso, src
        img.setAttribute('alt', 'Tiago Rodrigues de camisa preta em um fundo preto com uma pouca luz roxa na parte de baixo. Por trás, um circulo branco')
    }else{
        img.setAttribute('src', './assets/avatar.png')      
        img.setAttribute('alt', 'Tiago Rodrigues em um fundo roxo iluminado pela direita por uma luz roxa. Ícones de ferramentas do photoshop flutuando pela imagem')       


    }


}