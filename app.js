
let state = reactive({message: 'Hello Universe'})
let message = 'Hello Universe'

function RenderApp()
{
  render('#container', `<h1>${state.message}</h1>`)  
}

RenderApp()

setTimeout(() => {
    state.message = 'Hello World'
}, 1000)