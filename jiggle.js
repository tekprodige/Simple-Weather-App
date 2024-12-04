


// A function to render where the element should be rendered
function render(element, content)
{
    const app = document.querySelector(element)
    if (app !== null)
    {
        app.innerHTML = content
    }
}

//A function to update the object state
function reactive(obj)
{
    const keys = Object.keys(obj)
    const reactiveObj = []

    keys.forEach((key) => {
        let value = obj[key]
        Object.defineProperty(reactiveObj, keys, {
            get() {
                console.log(`Getting value, ${value}`)
                return value
            },
            set(newValue)
            {
                console.log(`Setting value, ${newValue}`)
                value = newValue
                RenderApp()
            }
        })
    })

    return reactiveObj
}