const containerCard = document.querySelector('.container-card')
const minhaFoto = document.querySelector('#minhaFoto')
const meunome = document.querySelector('#nome')

async function pegaPerfil() {
  const dadosPerfil = await fetch('https://api.github.com/users/ErickGonzagaDev').then((resposta) => {
    return resposta.json()

  }).then((data) => {
    console.log(data)

    minhaFoto.src = data.avatar_url
    meunome.innerHTML = data.name
  })
}



async function pegaRepositorio() {
  const dadosRepositorio = await fetch('https://api.github.com/users/ErickGonzagaDev/repos')
    .then((resposta) => {
      return resposta.json()
    }).then(data => {
      data.forEach((data) => {

        const divCard = document.createElement('div')
        divCard.classList.add('card')

        const divContainNS = document.createElement('div')
        divContainNS.classList.add('contain-name-status')

        const nameRepository = document.createElement('h1')
        nameRepository.id = 'name-repositorio'
        nameRepository.innerText = data.name


        const status = document.createElement('p')
        status.id = 'status'
        status.innerText = data.visibility


        const divContainLU = document.createElement('div')
        divContainLU.classList.add('contain-linguagem-update')

        if (!!data.language) {
          const spanBolinha = document.createElement('span')
          spanBolinha.classList.add('bolinha')
          divContainLU.appendChild(spanBolinha)
        }



        const language = document.createElement('p')
        language.id = 'linguagem'

        language.innerText = data.language

        const update = document.createElement('p')
        update.id = 'update'
        update.innerText = 'Last update: ' + data.updated_at.slice(0, 10)



        containerCard.appendChild(divCard)
        divCard.appendChild(divContainNS)
        divContainNS.appendChild(nameRepository)
        divContainNS.appendChild(status)
        divCard.appendChild(divContainLU)
        divContainLU.appendChild(language)
        divContainLU.appendChild(update)
      })
    })


}

pegaRepositorio()
pegaPerfil()